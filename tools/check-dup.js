#!/usr/bin/env node

/**
 * 重复 PID/VID 检查 —— 在 build-defs.js 之前跑
 *
 * 同一把键盘（同一 vpid）在多处有定义时，优先级低的会被静默丢弃：
 * 改了低优先级那份不会有任何效果，且不会报错，很难排查。
 * 这里把重复摆到台面上：
 *   ERROR  会让人白改的重复（czm 内部重复 / custom 盖住 czm）→ 退出码 1
 *   WARN   历史成品与 czm 重复，czm 优先，无害
 *
 * 唯一输入源就是 czm/（递归），所以任何重复都等于冲突。
 */
const fs = require('fs');
const path = require('path');

const ROOT = process.env.REPO_ROOT || process.cwd();
const INPUTS = [
  { dir: 'czm', label: 'czm' },
];
const EXCLUDE_FILES = new Set([
  'configs.json', 'supported_kbs.json', 'hash.json',
  'keyboard.json', 'info.json', '.gitkeep',
]);

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

function toVpid(def) {
  if (typeof def.vendorProductId === 'number') return def.vendorProductId;
  const vid = typeof def.vendorId === 'string' ? parseInt(def.vendorId, 16) : def.vendorId;
  const pid = typeof def.productId === 'string' ? parseInt(def.productId, 16) : def.productId;
  if (Number.isInteger(vid) && Number.isInteger(pid)) return vid * 65536 + pid;
  return NaN;
}

const bad = [];
const map = new Map();

for (const input of INPUTS) {
  for (const file of walk(path.join(ROOT, input.dir))) {
    let def;
    try {
      def = JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      bad.push(file + '  JSON 解析失败: ' + e.message);
      continue;
    }
    const vpid = toVpid(def);
    if (!Number.isInteger(vpid) || vpid <= 0) {
      bad.push(path.relative(ROOT, file) + '  取不到合法 vendorProductId');
      continue;
    }
    if (!map.has(vpid)) map.set(vpid, []);
    map.get(vpid).push({
      label: input.label,
      rel: path.relative(ROOT, file),
      name: def.name || '(无名)',
    });
  }
}

let errors = 0;
const rows = [];

for (const [vpid, list] of [...map.entries()].sort((a, b) => a[0] - b[0])) {
  if (list.length < 2) continue;
  const isError = true;
  if (isError) errors++;
  rows.push({ vpid, list, isError });
}

console.log('=== 重复 PID/VID 检查 ===');
console.log('  扫描到 ' + map.size + ' 个不同 vpid（' + INPUTS.map((i) => i.dir).join(', ') + '）');

if (!rows.length) {
  console.log('  无重复，每把键盘只在一处定义');
} else {
  for (const r of rows) {
    console.log(
      (r.isError ? '  [ERROR] ' : '  [WARN ] ') +
        'vpid 0x' + r.vpid.toString(16) + '  ' + r.list[0].name
    );
    for (const x of r.list) {
      console.log('             ' + x.label.padEnd(16) + x.rel + '  ' + x.name);
    }
  }
  console.log(
    '  合计重复 ' + rows.length + ' 个 vpid，其中 ' + errors + ' 个会导致改动不生效'
  );
}

if (bad.length) {
  console.log('  解析异常 ' + bad.length + ' 个:');
  for (const b of bad.slice(0, 10)) console.log('    ' + b);
}

if (errors) {
  console.log('\n  === 必须清理的重复（改了不生效）===');
  for (const r of rows.filter((x) => x.isError)) {
    console.log('  vpid 0x' + r.vpid.toString(16) + '  ' + r.list[0].name);
    for (const x of r.list) console.log('      ' + x.label.padEnd(16) + x.rel);
  }
  console.log(
    '\n  czm 内部同一把键盘只保留一份；custom 里有与 czm 相同的键盘时删掉 custom 那份'
  );
  process.exit(1);
}
console.log('  检查通过');
