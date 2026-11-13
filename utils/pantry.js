/* 手边有什么 · 原料反查逻辑（与网页版 features.js 保持一致）
   两个前提：
   1) 数据里「牛奶 / 鲜奶 / 全脂牛奶 / 鲜牛乳」是多种写法，必须归一；
   2) 糖、水、冰、盐是常备料，必须排除，否则「只差一样」永远差冰块。 */

var IGNORE = {
    '糖浆': 1, '糖': 1, '白砂糖': 1, '冰糖': 1, '冰糖糖浆': 1, '蜂蜜': 1, '方糖': 1,
    '盐': 1, '海盐': 1,
    '热水': 1, '水': 1, '冰水': 1, '冷水': 1, '饮用水': 1, '冰块': 1
};

var ALIAS = {
    '鲜奶': '牛奶', '全脂牛奶': '牛奶', '鲜牛乳': '牛奶', '冰博克牛奶': '牛奶', '牛奶': '牛奶',
    '厚椰乳': '椰乳', '椰浆': '椰乳'
};

function norm(name) { return ALIAS[name] || name; }

function needed(d) {
    var seen = {}, out = [];
    var ings = d.ingredients || [];
    for (var i = 0; i < ings.length; i++) {
        var it = ings[i];
        if (it.optional || IGNORE[it.name]) continue;
        var n = norm(it.name);
        if (IGNORE[n] || seen[n]) continue;
        seen[n] = 1;
        out.push(n);
    }
    return out;
}

function buildVocab(drinks) {
    var cnt = {};
    for (var i = 0; i < drinks.length; i++) {
        var need = needed(drinks[i]);
        for (var j = 0; j < need.length; j++) cnt[need[j]] = (cnt[need[j]] || 0) + 1;
    }
    var list = [];
    for (var k in cnt) {
        if (Object.prototype.hasOwnProperty.call(cnt, k)) list.push({ name: k, n: cnt[k] });
    }
    list.sort(function (a, b) { return b.n - a.n; });
    return list;
}

function compute(drinks, picked) {
    var can = [], one = [];
    for (var i = 0; i < drinks.length; i++) {
        var d = drinks[i];
        var need = needed(d);
        var miss = [];
        for (var j = 0; j < need.length; j++) {
            if (!picked[need[j]]) miss.push(need[j]);
        }
        if (!miss.length) can.push(d);
        else if (miss.length === 1) one.push({ d: d, miss: miss[0] });
    }
    return { can: can, one: one };
}

/* 只勾一两样时 can 往往为空，给出「补哪一味能解锁最多款」的建议 */
function suggestions(one) {
    var cnt = {};
    for (var i = 0; i < one.length; i++) cnt[one[i].miss] = (cnt[one[i].miss] || 0) + 1;
    var list = [];
    for (var k in cnt) {
        if (Object.prototype.hasOwnProperty.call(cnt, k)) list.push({ name: k, n: cnt[k] });
    }
    list.sort(function (a, b) { return b.n - a.n; });
    return list.slice(0, 4);
}

module.exports = {
    needed: needed,
    buildVocab: buildVocab,
    compute: compute,
    suggestions: suggestions
};
