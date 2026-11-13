var DATA = require('../../data/index.js');
var cup = require('../../utils/cup.js');
var pantry = require('../../utils/pantry.js');
var emoji = require('../../utils/emoji.js');

var DRINKS = DATA.DRINKS;
var CATS = DATA.CATS;
var POOL = DRINKS.filter(function (d) { return !d.isBase; });
var VOCAB = pantry.buildVocab(POOL);
var PAGE_SIZE = 20;

function stars(n) {
    var s = '';
    for (var i = 0; i < (n || 1); i++) s += '★';
    return s;
}

/* WXML 不做计算，渲染要用的字段全部预先算好 */
function buildItem(d) {
    var need = 0;
    var ings = d.ingredients || [];
    for (var i = 0; i < ings.length; i++) if (!ings[i].optional) need++;
    return {
        id: d.id,
        name: d.name,
        cat: d.category,
        method: d.method,
        diffStar: stars(d.difficulty),
        ingCount: need,
        nocaf: !!d.nocaf,
        bg: d.bg,
        bands: cup.cupBands(d.layers)
    };
}

function buildMini(d, miss) {
    var it = buildItem(d);
    return {
        id: it.id,
        name: it.name,
        meta: it.cat + ' / ' + it.method + ' / ' + it.diffStar,
        bg: it.bg,
        bands: it.bands,
        miss: miss || ''
    };
}

function match(d, cat, kw, nocaf) {
    if (nocaf && !d.nocaf) return false;
    if (cat === '全部') {
        if (d.isBase) return false;
    } else if (d.category !== cat) return false;
    if (kw) {
        var parts = [d.name, d.category, d.method];
        var bs = d.brands || [];
        for (var i = 0; i < bs.length; i++) parts.push(bs[i]);
        var ings = d.ingredients || [];
        for (var j = 0; j < ings.length; j++) parts.push(ings[j].name);
        if (parts.join(' ').toLowerCase().indexOf(kw) < 0) return false;
    }
    return true;
}

function goPrep(id) {
    wx.navigateTo({ url: '/pages/prep/prep?id=' + id });
}

Page({
    data: {
        cats: CATS,
        cat: '全部',
        keyword: '',
        nocaf: false,
        list: [],
        total: 0,
        finished: false,

        pickShow: false,
        pick: null,
        pickMeta: '',
        pickFace: '',
        pickLine: '',

        pantryShow: false,
        pantryQ: '',
        vocab: [],
        vocabNote: '',
        pantryEmpty: true,
        canList: [],
        oneList: [],
        canCount: 0,
        oneCount: 0,
        canMore: 0,
        oneMore: 0,
        suggest: []
    },

    onLoad: function () {
        this.pool = [];
        this.picked = {};
        this.lastId = null;
        this.apply();
        var chips = this.buildChips('');
        this.setData({ vocab: chips, vocabNote: this.chipsNoteWith(chips.length, '') });
    },

    /* ---------- 列表 ---------- */
    apply: function () {
        var cat = this.data.cat;
        var kw = (this.data.keyword || '').trim().toLowerCase();
        var nocaf = this.data.nocaf;
        var pool = [];
        for (var i = 0; i < DRINKS.length; i++) {
            if (match(DRINKS[i], cat, kw, nocaf)) pool.push(DRINKS[i]);
        }
        this.pool = pool;
        var slice = pool.slice(0, PAGE_SIZE);
        var list = [];
        for (var j = 0; j < slice.length; j++) list.push(buildItem(slice[j]));
        this.setData({
            list: list,
            total: pool.length,
            finished: pool.length <= PAGE_SIZE
        });
    },

    loadMore: function () {
        if (this.data.finished) return;
        var start = this.data.list.length;
        var slice = this.pool.slice(start, start + PAGE_SIZE);
        if (!slice.length) { this.setData({ finished: true }); return; }
        var more = [];
        for (var i = 0; i < slice.length; i++) more.push(buildItem(slice[i]));
        this.setData({
            list: this.data.list.concat(more),
            finished: start + slice.length >= this.pool.length
        });
    },

    onReachBottom: function () { this.loadMore(); },

    onInput: function (e) {
        var self = this;
        this.setData({ keyword: e.detail.value }, function () { self.apply(); });
    },

    onCatTap: function (e) {
        var c = e.currentTarget.dataset.cat;
        if (c === this.data.cat) return;
        var self = this;
        this.setData({ cat: c }, function () { self.apply(); });
        wx.pageScrollTo({ scrollTop: 0, duration: 0 });
    },

    onToggleNocaf: function () {
        var self = this;
        this.setData({ nocaf: !this.data.nocaf }, function () { self.apply(); });
        wx.pageScrollTo({ scrollTop: 0, duration: 0 });
    },

    onCardTap: function (e) { goPrep(e.currentTarget.dataset.id); },

    /* ---------- 抽一杯 ---------- */
    roll: function () {
        var last = this.lastId;
        var pool = POOL.length > 1
            ? POOL.filter(function (d) { return d.id !== last; })
            : POOL;
        var d = pool[Math.floor(Math.random() * pool.length)];
        this.lastId = d.id;
        this.pickId = d.id;
        var it = buildItem(d);
        this.setData({
            pick: it,
            pickMeta: it.cat + ' / ' + it.method + ' / ' + it.diffStar + ' / ' + it.ingCount + ' 样料',
            pickFace: emoji.rollFace(),
            pickLine: emoji.rollLine()
        });
    },

    openPicker: function () {
        this.roll();
        this.setData({ pickShow: true, pantryShow: false });
    },

    onPickAgain: function () { this.roll(); },

    onPickGo: function () {
        var id = this.pickId;
        this.setData({ pickShow: false });
        goPrep(id);
    },

    /* ---------- 手边有什么 ---------- */
    buildChips: function (q) {
        var self = this;
        var query = (q || '').trim().toLowerCase();
        var list = VOCAB.filter(function (v) {
            return !query || v.name.toLowerCase().indexOf(query) >= 0;
        });
        var shown;
        if (query) {
            shown = list;
        } else {
            var top = list.slice(0, 60);
            for (var i = 0; i < VOCAB.length; i++) {
                var v = VOCAB[i];
                if (self.picked[v.name] && top.indexOf(v) < 0) top.push(v);
            }
            shown = top;
        }
        return shown.map(function (v) {
            return { name: v.name, n: v.n, on: !!self.picked[v.name] };
        });
    },

    refreshPantry: function () {
        var r = pantry.compute(POOL, this.picked);
        var pickedN = Object.keys(this.picked).length;
        var sg = (!r.can.length && pickedN > 0 && r.one.length)
            ? pantry.suggestions(r.one) : [];
        var self = this;
        this.setData({
            pantryEmpty: pickedN === 0,
            canCount: r.can.length,
            oneCount: r.one.length,
            canMore: Math.max(0, r.can.length - 24),
            oneMore: Math.max(0, r.one.length - 24),
            canList: r.can.slice(0, 24).map(function (d) { return buildMini(d, ''); }),
            oneList: r.one.slice(0, 24).map(function (x) { return buildMini(x.d, x.miss); }),
            suggest: sg
        });
    },

    openPantry: function () {
        this.setData({
            pantryShow: true,
            pickShow: false,
            pantryQ: '',
            vocab: this.buildChips('')
        });
        this.refreshPantry();
        this.setData({ vocabNote: this.chipsNoteWith(this.data.vocab.length, '') });
    },

    chipsNoteWith: function (n, q) {
        return q ? '匹配 ' + n + ' 种原料'
            : '共 ' + VOCAB.length + ' 种原料，先列最常用的；找别的用上面搜索框';
    },

    onPantryInput: function (e) {
        var q = e.detail.value;
        var chips = this.buildChips(q);
        this.setData({
            pantryQ: q,
            vocab: chips,
            vocabNote: this.chipsNoteWith(chips.length, q.trim())
        });
    },

    onChipTap: function (e) {
        var name = e.currentTarget.dataset.name;
        if (this.picked[name]) delete this.picked[name];
        else this.picked[name] = 1;
        var chips = this.buildChips(this.data.pantryQ);
        this.setData({
            vocab: chips,
            vocabNote: this.chipsNoteWith(chips.length, this.data.pantryQ.trim())
        });
        this.refreshPantry();
    },

    onSuggestTap: function (e) {
        this.picked[e.currentTarget.dataset.name] = 1;
        var chips = this.buildChips(this.data.pantryQ);
        this.setData({
            vocab: chips,
            vocabNote: this.chipsNoteWith(chips.length, this.data.pantryQ.trim())
        });
        this.refreshPantry();
    },

    onPantryClear: function () {
        this.picked = {};
        var chips = this.buildChips('');
        this.setData({
            pantryQ: '',
            vocab: chips,
            vocabNote: this.chipsNoteWith(chips.length, '')
        });
        this.refreshPantry();
    },

    onMiniTap: function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({ pantryShow: false });
        goPrep(id);
    },

    closeOverlay: function () {
        this.setData({ pickShow: false, pantryShow: false });
    },

    onBrandTap: function () {
        wx.showModal({
            title: '饮料小当家',
            content: '设计者：tiandou250\n市面爆款饮品的家用复刻配方库，配方非官方。',
            showCancel: false,
            confirmText: '知道啦'
        });
    },

    onShareAppMessage: function () {
        return { title: '饮料小当家 · 爆款饮品家用复刻', path: '/pages/index/index' };
    }
});
