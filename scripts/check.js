const fs = require('fs');
const vm = require('vm');

const window = {};
const ctx = vm.createContext({ window, console, Math, Date });

const files = ['coffee','milktea','lighttea','fruittea','lemon','special','bases','batch2'];
for (const f of files) {
  const code = fs.readFileSync(`${__dirname}/../data/${f}.js`, 'utf8');
  try {
    vm.runInContext(code, ctx, { filename: `data/${f}.js` });
  } catch (e) {
    console.error(`[SYNTAX FAIL] data/${f}.js -> ${e.message}`);
    process.exit(1);
  }
}

const D = window.DRINKS || [];
const CATS = ['咖啡','奶茶','轻乳茶','果茶','柠檬茶','特调','小料'];
const REQ = ['id','name','category','brands','method','difficulty','temp','volume','bg','layers','intro','ingredients','tools','pitfalls','fidelity','steps'];

console.log('=== 总量 ===');
console.log('总条目:', D.length);
const drinks = D.filter(d=>!d.isBase);
const bases = D.filter(d=>d.isBase);
console.log('饮品:', drinks.length, '| 基底:', bases.length);

console.log('\n=== 分类统计 ===');
for (const c of CATS) {
  const n = D.filter(d=>d.category===c).length;
  console.log(`  ${c}: ${n}`);
}

console.log('\n=== 无咖啡因 ===');
const nocaf = D.filter(d=>d.nocaf);
console.log('  ', nocaf.length, '款:', nocaf.map(d=>d.name).join('、'));

console.log('\n=== 校验 ===');
const errs = [];
const ids = new Set();
const bgs = {};

for (const d of D) {
  const tag = d.name || d.id || '(无名)';
  for (const k of REQ) {
    if (d[k] === undefined || d[k] === null || d[k] === '') errs.push(`${tag}: 缺字段 ${k}`);
  }
  if (ids.has(d.id)) errs.push(`${tag}: id 重复 "${d.id}"`);
  ids.add(d.id);

  if (!CATS.includes(d.category)) errs.push(`${tag}: category 非法 "${d.category}"`);
  if (!/^#[0-9A-Fa-f]{6}$/.test(d.bg||'')) errs.push(`${tag}: bg 非法 "${d.bg}"`);

  if (Array.isArray(d.layers)) {
    if (!d.layers.length) errs.push(`${tag}: layers 为空`);
    d.layers.forEach(l=>{
      if (typeof l.pct !== 'number') errs.push(`${tag}: layer "${l.name}" pct 非数字`);
      if (!/^#[0-9A-Fa-f]{6}$/.test(l.color||'')) errs.push(`${tag}: layer "${l.name}" color 非法`);
    });
  }

  if (Array.isArray(d.ingredients)) {
    if (!d.ingredients.length) errs.push(`${tag}: ingredients 为空`);
    d.ingredients.forEach(i=>{
      if (!i.name) errs.push(`${tag}: 原料缺 name`);
      if (!i.amount) errs.push(`${tag}: 原料「${i.name}」缺 amount`);
      if (i.amount && /适量|少许|若干/.test(i.amount)) errs.push(`${tag}: 原料「${i.name}」用了模糊用量「${i.amount}」`);
    });
  }

  if (Array.isArray(d.steps)) {
    if (d.steps.length < 2) errs.push(`${tag}: 步骤少于 2 步`);
    d.steps.forEach((s,idx)=>{
      if (!s.title) errs.push(`${tag}: 第 ${idx+1} 步缺 title`);
      if (!s.desc) errs.push(`${tag}: 第 ${idx+1} 步缺 desc`);
      if (!s.act) errs.push(`${tag}: 第 ${idx+1} 步缺 act`);
      if (s.timer !== undefined && typeof s.timer !== 'number') errs.push(`${tag}: 第 ${idx+1} 步 timer 非数字`);
    });
  }

  if (Array.isArray(d.pitfalls) && !d.pitfalls.length) errs.push(`${tag}: pitfalls 为空`);
  if (Array.isArray(d.brands) && !d.brands.length) errs.push(`${tag}: brands 为空`);

  const key = (d.bg||'').toUpperCase();
  bgs[key] = (bgs[key]||0) + 1;
}

console.log('  字段/结构错误:', errs.length);
errs.slice(0,40).forEach(e=>console.log('   ✗', e));
if (errs.length > 40) console.log(`   ... 还有 ${errs.length-40} 条`);

console.log('\n=== 品类内配色重复（真正需要关注的）===');
for (const c of CATS) {
  const list = D.filter(d=>d.category===c);
  const map = {};
  list.forEach(d=>{ const k=(d.bg||'').toUpperCase(); (map[k]=map[k]||[]).push(d.name); });
  const dups = Object.entries(map).filter(([,v])=>v.length>1);
  console.log(`  ${c}(${list.length}): 唯一 ${Object.keys(map).length} 色` + (dups.length ? `  ⚠ ${dups.length} 组重复` : '  ✓ 无重复'));
  dups.forEach(([k,v])=>console.log(`     ${k} -> ${v.join('、')}`));
}

console.log('\n=== 步骤与计时统计 ===');
const withTimer = D.filter(d=>d.steps.some(s=>s.timer));
const totalSteps = D.reduce((s,d)=>s+d.steps.length,0);
console.log('  总步骤数:', totalSteps, '| 含计时的条目:', withTimer.length);

process.exit(errs.length ? 1 : 0);
