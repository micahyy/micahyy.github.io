#!/usr/bin/env node
/**
 * VIA 定义生成器 —— 只在 GitHub Actions 里运行（服务器不再做任何生成）
 *
 * 输入（全部在仓库内）:
 *   custom/definitions/*.json     用户上传的源定义（V2/V3 源格式）
 *   czm/ 下任意层级的 .json       CZM 源定义（递归扫描）
 *   definitions/v3/*.json         官方定义（多为成品格式）
 *   converted-defs/v3/*.json      已转换好的成品定义
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

// 输入目录：顺序即优先级，后面的覆盖前面（custom 排最后，同 ID 能盖住 czm）
// 每个目录都【递归】读取 —— czm 下爱建多少层子文件夹都行，全部扫到，
// 扫到的 JSON 一律编译成 dist/definitions/v3/<vpid>.json
const INPUTS = [
  { dir: 'definitions/v3', ver: 'v3', kind: 'auto' },
  { dir: 'converted-defs/v3', ver: 'v3', kind: 'done' },
  { dir: 'czm', ver: null, kind: 'auto' },
  { dir: 'custom/definitions', ver: null, kind: 'auto' },
];

// 无论放在哪一层，这几个都不是键盘定义，跳过
const EXCLUDE_FILES = new Set([
  'configs.json',
  'supported_kbs.json',
  'hash.json',
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

/** 把源定义（V2/V3）转成 VIA 成品格式 */
function convert(def) {
  const r = getReader();
  if (r.isKeyboardDefinitionV3(def)) {
    return { ver: 'v3', via: r.keyboardDefinitionV3ToVIADefinitionV3(def) };
  }
  if (r.isKeyboardDefinitionV2(def)) {
    return { ver: 'v2', via: r.keyboardDefinitionV2ToVIADefinitionV2(def) };
  }
  throw new Error('不是合法的 VIA V2/V3 源定义');
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'v2'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'v3'), { recursive: true });

const ids = { v2: [], v3: [] };
const fileMap = { v2: {}, v3: {} };
const warns = [];
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
  fs.writeFileSync(path.join(OUT, ver, filename), JSON.stringify(via));
  if (!ids[ver].includes(vpid)) ids[ver].push(vpid);
  fileMap[ver][String(vpid)] = filename;
}

for (const input of INPUTS) {
  const dir = path.join(ROOT, input.dir);
  for (const file of walk(dir)) {
    let def;
    try {
      def = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      warns.push(file + ' JSON 解析失败，已跳过: ' + e.message);
      continue;
    }

    // 成品定义（含 vendorProductId + name + layouts）：直接投放
    const isDone =
      input.kind === 'done' ||
      (Number.isInteger(def.vendorProductId) && def.name && def.layouts);
    if (isDone) {
      const ver = input.ver || (def.keycodes ? 'v3' : 'v2');
      if (def.name && def.layouts) {
        emit(file, ver, def);
        passthrough++;
        continue;
      }
    }

    // 源定义：过 reader 转换
    try {
      const r = convert(def);
      emit(file, r.ver, r.via);
      converted++;
    } catch (e) {
      warns.push(file + ' 转换失败，已跳过: ' + e.message);
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

const h = crypto.createHash('sha256');
for (const ver of ['v2', 'v3']) {
  for (const vpid of ids[ver]) {
    h.update(String(vpid));
    h.update(fs.readFileSync(path.join(OUT, ver, fileMap[ver][String(vpid)])));
  }
}
const hash = h.digest('hex');
fs.writeFileSync(path.join(OUT, 'hash.json'), hash);

console.log(
  '[build-defs] v2=' + ids.v2.length + ' v3=' + ids.v3.length +
  '（转换 ' + converted + ' / 成品直投 ' + passthrough + '）hash=' + hash
);
if (warns.length) {
  console.log('[build-defs] 跳过 ' + warns.length + ' 个: ' +
    warns.slice(0, 5).join(' | '));
}
