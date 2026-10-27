#!/usr/bin/env node
/**
 * VIA 定义生成器 —— 只在 GitHub Actions 里运行（服务器不再做任何生成）
 *
 * 输入（全部在仓库内）:
 *   czm/ 下任意层级的 .json       唯一输入源（递归扫描）
 *
 *   definitions/v3、converted-defs/v3、custom/definitions 已停用，
 *   文件留在仓库里作存档，不再参与编译
 *
 * 输出（提交回仓库）:
 *   dist/definitions/v2/<vpid>.json
 *   dist/definitions/v3/<vpid>.json
 *   dist/definitions/supported_kbs.json   含 vendorProductIds 与 fileMap
 *   dist/definitions/hash.json
 *
 * vpid = vendorId * 65536 + productId。产物一律按 vpid 命名，
 * 源文件叫什么名字、放在 czm 下哪一层目录都不影响；
 * 键盘插上后客户端读到 vid/pid 就能直接拼 URL 取文件。
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = process.env.REPO_ROOT || process.cwd();
const OUT = path.join(ROOT, 'dist', 'definitions');

// 唯一输入目录，【递归】读取 —— czm 下爱建多少层子文件夹都行，全部扫到，
// 扫到的 JSON 一律编译成 dist/definitions/v3/<vpid>.json
const INPUTS = [
  { dir: 'czm', ver: null, kind: 'auto' },
];

// 无论放在哪一层，这几个都不是 VIA 定义，跳过
//   keyboard.json : QMK 固件描述文件（vid/pid 在 usb.vid/usb.pid），
//                   真正的 VIA 定义在它旁边的 keymaps/via/*.json
const EXCLUDE_FILES = new Set([
  'configs.json',
  'supported_kbs.json',
  'hash.json',
  'keyboard.json',
  'info.json',
  '.gitkeep',
]);

const THEME = {
  alpha: { c: '#363434', t: '#E8C4B8' },
  mod: { c: '#363434', t: '#E8C4B8' },
  accent: { c: '#E8C4B8', t: '#363434' },
};

function walk(dir) {
  let out = [];
  let ents = [];
  try {
    ents = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return out;
  }
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.isFile() && e.name.endsWith('.json') && !EXCLUDE_FILES.has(e.name)) out.push(p);
  }
  return out.sort();
}

// @the-via/reader 只在需要转换源格式时才加载
let reader = null;
function getReader() {
  if (!reader) reader = require('@the-via/reader');
  return reader;
}

function toVpid(def) {
  if (typeof def.vendorProductId === 'number') return def.vendorProductId;
  const vid = typeof def.vendorId === 'string' ? parseInt(def.vendorId, 16)
    : def.vendorId;
  const pid = typeof def.productId === 'string' ? parseInt(def.productId, 16)
    : def.productId;
  if (Number.isInteger(vid) && Number.isInteger(pid)) return vid * 65536 + pid;
  return NaN;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'v2'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'v3'), { recursive: true });

const ids = { v2: [], v3: [] };
const fileMap = { v2: {}, v3: {} };
const warns = [];
const errors = [];
let converted = 0;
let passthrough = 0;

function emit(file, ver, via) {
  const vpid = via.vendorProductId != null ? via.vendorProductId : toVpid(via);
  if (!Number.isInteger(vpid) || vpid <= 0) {
    throw new Error(file + ' 无法得到合法的 vendorProductId');
  }
  // 产物统一按 vpid 命名：源文件叫什么、在 czm 下哪层目录都不影响
  const filename = vpid + '.json';
  if (fileMap[ver][String(vpid)]) {
    warns.push('vpid ' + vpid + ' 重复：' + file + ' 覆盖了已有定义');
  }
  // v2 和 v3 各写一份同样的内容。
  // 客户端按固件上报的 VIA protocol 选版本：protocol >= 11 读 v3，否则读 v2
  // （见 app/src/store/devicesThunks.ts）。两种成品格式在这个 reader 版本下
  // 完全一致（都是 layouts.keys），所以两边都写，任何固件版本都取得到定义。
  for (const v of ['v2', 'v3']) {
    fs.writeFileSync(path.join(OUT, v, filename), JSON.stringify(via));
    if (!ids[v].includes(vpid)) ids[v].push(vpid);
    fileMap[v][String(vpid)] = filename;
  }
}

for (const input of INPUTS) {
  const dir = path.join(ROOT, input.dir);
  const r = getReader();
  for (const file of walk(dir)) {
    let def;
    try {
      def = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      errors.push(file + ' JSON 解析失败: ' + e.message);
      continue;
    }

    // 成品定义（含 vendorProductId + name + layouts）：直接投放
    const isDone =
      input.kind === 'done' ||
      (Number.isInteger(def.vendorProductId) && def.name && def.layouts);
    if (isDone && def.name && def.layouts) {
      const ver = input.ver || (def.keycodes ? 'v3' : 'v2');
      try {
        emit(file, ver, def);
        passthrough++;
      } catch (e) {
        errors.push(file + ' 成品直投失败: ' + e.message);
      }
      continue;
    }

    // 源定义：先判定是否为合法的 V2/V3 定义。
    // 不是定义（如描述/配置 JSON）→ 静默跳过；
    // 是定义但转换抛错（非法布局、菜单、越界等）→ 记为错误，构建直接失败。
    const kind = r.isKeyboardDefinitionV3(def) ? 'v3'
      : r.isKeyboardDefinitionV2(def) ? 'v2'
      : null;
    if (!kind) continue;
    try {
      const via = kind === 'v3'
        ? r.keyboardDefinitionV3ToVIADefinitionV3(def)
        : r.keyboardDefinitionV2ToVIADefinitionV2(def);
      emit(file, kind, via);
      converted++;
    } catch (e) {
      errors.push(file + ' 转换失败（源定义非法，无法生成 VIA 定义）: ' + e.message);
    }
  }
}

ids.v2.sort((a, b) => a - b);
ids.v3.sort((a, b) => a - b);

const supported = {
  generatedAt: Date.now(),
  version: '0.1.0',
  theme: THEME,
  vendorProductIds: { v2: ids.v2, v3: ids.v3 },
  fileMap: fileMap,
};
fs.writeFileSync(
  path.join(OUT, 'supported_kbs.json'),
  JSON.stringify(supported)
);

// 站点根目录另外需要 /tabkb/ 下的两个文件。
// web app（tabkb via-app）启动时固定 fetch('/tabkb/supported_kbs.json') 与
// fetch('/tabkb/configs.json')；supported_kbs.json 取不到会抛错，中断
// loadSupportedIds -> reloadConnectedDevices，页面就永远停在“搜索设备”。
// 所以这里把构建出来的 id 列表按 app 要的 {v2:[...], v3:[...]} 形状输出到 tabkb/。
const TABKB_OUT = path.join(ROOT, 'tabkb');
fs.mkdirSync(TABKB_OUT, { recursive: true });
fs.writeFileSync(
  path.join(TABKB_OUT, 'supported_kbs.json'),
  JSON.stringify({ v2: ids.v2, v3: ids.v3 })
);
const configsSrc = path.join(ROOT, 'czm', 'configs.json');
fs.writeFileSync(
  path.join(TABKB_OUT, 'configs.json'),
  fs.existsSync(configsSrc) ? fs.readFileSync(configsSrc) : '[]'
);

const h = crypto.createHash('sha256');
for (const ver of ['v2', 'v3']) {
  for (const vpid of ids[ver]) {
    h.update(String(vpid));
    h.update(fs.readFileSync(path.join(OUT, ver, fileMap[ver][String(vpid)])));
  }
}
const hash = h.digest('hex');
fs.writeFileSync(path.join(OUT, 'hash.json'), hash);

// 站点上 app 取定义的路径是 /definitions/{v2,v3}/<vpid>.json。
//   via.micah.vip：nginx 把 /definitions/ rewrite 到了 dist/definitions/，没问题；
//   GitHub Pages：直接把仓库根当站点根，/definitions/ 就是仓库里这个目录。
// 而仓库里的 definitions/ 原先是“已停用的存档”（内容比 dist 旧，缺 EC65 等新键盘），
// Pages 上取 EC65 的定义会 404。这里把产物同步一份到 definitions/，两个站点都拿得到。
// （要彻底去重就把 via.micah.vip 的 nginx 改成直接用仓库 definitions/，然后删掉 dist/。）
const SITE_OUT = path.join(ROOT, 'definitions');
function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, e.name);
    const d = path.join(to, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}
fs.rmSync(SITE_OUT, { recursive: true, force: true });
copyDir(OUT, SITE_OUT);

console.log(
  '[build-defs] v2=' + ids.v2.length + ' v3=' + ids.v3.length +
  '（转换 ' + converted + ' / 成品直投 ' + passthrough + '）hash=' + hash
);
if (warns.length) {
  console.warn('[build-defs] 警告 ' + warns.length + ' 个: ' + warns.slice(0, 5).join(' | '));
}
if (errors.length) {
  console.error('[build-defs] 构建失败：' + errors.length + ' 个源定义有问题，未编译通过：');
  for (const e of errors) console.error('  ✗ ' + e);
  process.exit(1);
}
