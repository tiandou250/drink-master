/* 饮料小当家小程序 · 本地工程校验
   跑法：node scripts/check.js
   检查 JSON 严格性、页面四件套、原生约束、JS 语法、数据完整性与主包体积。 */
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const errs = [];
const warns = [];

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function exists(rel) { return fs.existsSync(path.join(ROOT, rel)); }

/* ---------- 1. JSON ---------- */
const jsons = ['app.json', 'project.config.json', 'sitemap.json'];
const app = JSON.parse(read('app.json'));
(app.pages || []).forEach(p => jsons.push(p + '.json'));

jsons.forEach(f => {
    if (!exists(f)) { errs.push('缺文件: ' + f); return; }
    const raw = read(f);
    try { JSON.parse(raw); }
    catch (e) { errs.push(f + ': JSON 解析失败 ' + e.message); }
    if (/\/\*|\/\//.test(raw)) errs.push(f + ': 含注释');
    if (/,\s*[}\]]/.test(raw)) warns.push(f + ': 可能有尾逗号');
});

if (!app.pages || !app.pages.length) errs.push('app.json.pages 为空');
if (app.lazyCodeLoading !== 'requiredComponents') errs.push('app.json 缺 lazyCodeLoading');

const pc = JSON.parse(read('project.config.json'));
if (pc.miniprogramRoot !== './') warns.push('miniprogramRoot = ' + pc.miniprogramRoot);

/* ---------- 2. 页面四件套 ---------- */
(app.pages || []).forEach(p => {
    ['js', 'wxml', 'json', 'wxss'].forEach(ext => {
        const f = p + '.' + ext;
        if (!exists(f)) errs.push('缺页面文件: ' + f);
    });
});

/* ---------- 3. JS 语法 ---------- */
const jsFiles = ['app.js', 'data/index.js'];
['utils/cup.js', 'utils/store.js', 'utils/pantry.js', 'utils/emoji.js'].forEach(f => jsFiles.push(f));
(app.pages || []).forEach(p => jsFiles.push(p + '.js'));
jsFiles.forEach(f => {
    if (!exists(f)) return;
    const r = cp.spawnSync(process.execPath, ['--check', path.join(ROOT, f)], { encoding: 'utf8' });
    if (r.status !== 0) errs.push(f + ': JS 语法错误 ' + String(r.stderr).split('\n')[0]);
});

/* ---------- 4. WXML 原生约束 ---------- */
const banned = [
    [/<div[\s>]/i, 'HTML <div>'],
    [/<span[\s>]/i, 'HTML <span>'],
    [/<img[\s>]/i, 'HTML <img>'],
    [/<p[\s>]/i, 'HTML <p>'],
    [/\bdocument\./, 'document'],
    [/\bwindow\./, 'window'],
    [/\blocalStorage\b/, 'localStorage'],
    [/\bfetch\s*\(/, 'fetch'],
    [/\?\./, '可选链 ?.'],
    [/\?\?/, '空值合并 ??'],
    [/=>/, '箭头函数']
];
const wxmlVars = {};
(app.pages || []).forEach(p => {
    const f = p + '.wxml';
    if (!exists(f)) return;
    const raw = read(f);
    banned.forEach(([re, name]) => { if (re.test(raw)) errs.push(f + ': 含禁用语法 ' + name); });
    const re = /\{\{([\s\S]*?)\}\}/g;
    let m;
    while ((m = re.exec(raw))) {
        const ids = m[1].match(/[A-Za-z_$][A-Za-z0-9_$]*/g) || [];
        ids.forEach(id => { wxmlVars[id] = (wxmlVars[id] || 0) + 1; });
    }
});

/* ---------- 5. WXSS 约束 ---------- */
const wxssFiles = ['app.wxss'];
(app.pages || []).forEach(p => wxssFiles.push(p + '.wxss'));
wxssFiles.forEach(f => {
    if (!exists(f)) return;
    const raw = read(f);
    if (/background-image\s*:\s*url\(/i.test(raw)) warns.push(f + ': 用了 background-image url');
});

/* ---------- 6. 数据 ---------- */
let drinks = [];
try {
    const d = require(path.join(ROOT, 'data/index.js'));
    drinks = d.DRINKS;
    const bad = drinks.filter(x => !x.id || !x.name || !x.layers || !x.steps || !x.ingredients);
    if (bad.length) errs.push('数据字段缺失: ' + bad.length + ' 条');
    const ids = {};
    drinks.forEach(x => { if (ids[x.id]) errs.push('重复 id: ' + x.id); ids[x.id] = 1; });
    d.CATS.forEach(c => { if (!/^[一-龥]+$/.test(c)) warns.push('品类名异常: ' + c); });
} catch (e) {
    errs.push('data/index.js 加载失败: ' + e.message);
}

/* ---------- 7. 体积 ---------- */
let total = 0;
function walk(dir) {
    fs.readdirSync(dir, { withFileTypes: true }).forEach(e => {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
            if (e.name === '.git' || e.name === 'node_modules') return;
            walk(p);
        } else total += fs.statSync(p).size;
    });
}
walk(ROOT);

/* ---------- 输出 ---------- */
console.log('=== 页面 ===');
console.log('  ' + (app.pages || []).join('  '));
console.log('\n=== WXML 引用变量（供人工核对 data 是否声明）===');
const skip = { item: 1, index: 1, b: 1, true: 1, false: 1, null: 1, undefined: 1 };
console.log('  ' + Object.keys(wxmlVars).filter(k => !skip[k]).sort().join(' '));
console.log('\n=== 数据 ===');
console.log('  条目:', drinks.length, '| 饮品:', drinks.filter(d => !d.isBase).length,
    '| 基底:', drinks.filter(d => d.isBase).length);
console.log('\n=== 体积 ===');
console.log('  ' + (total / 1024).toFixed(1) + ' KB / 主包上限 2048 KB');
if (total > 2 * 1024 * 1024) errs.push('主包超限');
console.log('\n=== 结果 ===');
console.log('  错误:', errs.length, '| 警告:', warns.length);
errs.forEach(e => console.log('  ERROR ' + e));
warns.forEach(w => console.log('  WARN  ' + w));
process.exit(errs.length ? 1 : 0);
