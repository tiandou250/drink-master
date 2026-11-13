var DATA = require('../../data/index.js');
var cup = require('../../utils/cup.js');
var store = require('../../utils/store.js');

function findDrink(id) {
    var list = DATA.DRINKS;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
}

Page({
    data: {
        id: '', name: '', intro: '', brands: [], accent: '#FCD34D',
        bands: [], ings: [], tools: [], pitfalls: [], fidelity: '',
        needTotal: 0, left: 0, missing: false
    },

    onLoad: function (query) {
        var id = query && query.id ? query.id : '';
        var d = findDrink(id);
        if (!d) { this.setData({ missing: true }); return; }

        wx.setNavigationBarTitle({ title: d.name });

        var checked = store.getChecked(id);
        var ings = [], need = 0, left = 0;
        var src = d.ingredients || [];
        for (var i = 0; i < src.length; i++) {
            var it = src[i];
            var done = !!checked[it.name];
            if (!it.optional) { need++; if (!done) left++; }
            ings.push({
                name: it.name,
                amount: it.amount,
                note: it.note || '',
                optional: !!it.optional,
                done: done
            });
        }

        this.setData({
            id: id,
            name: d.name,
            intro: d.intro,
            brands: d.brands || [],
            accent: d.bg,
            bands: cup.cupBands(d.layers),
            ings: ings,
            tools: d.tools || [],
            pitfalls: d.pitfalls || [],
            fidelity: d.fidelity,
            needTotal: need,
            left: left,
            missing: false
        });
    },

    /* 只改这一行的 done 与顶部提示，不重绘整页（避免闪动、动画重播） */
    onToggle: function (e) {
        var name = e.currentTarget.dataset.name;
        var idx = Number(e.currentTarget.dataset.idx);
        var checked = store.toggleChecked(this.data.id, name);
        var patch = {};
        patch['ings[' + idx + '].done'] = !!checked[name];

        var left = 0;
        var ings = this.data.ings;
        for (var i = 0; i < ings.length; i++) {
            if (ings[i].optional) continue;
            var v = (i === idx) ? !!checked[name] : ings[i].done;
            if (!v) left++;
        }
        patch.left = left;
        this.setData(patch);
    },

    onStart: function () {
        wx.navigateTo({ url: '/pages/cook/cook?id=' + this.data.id });
    },

    onShareAppMessage: function () {
        return {
            title: this.data.name + ' 怎么做？',
            path: '/pages/prep/prep?id=' + this.data.id
        };
    }
});
