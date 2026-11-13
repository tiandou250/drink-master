var DATA = require('../../data/index.js');
var cup = require('../../utils/cup.js');
var emoji = require('../../utils/emoji.js');
var store = require('../../utils/store.js');

function findDrink(id) {
    var list = DATA.DRINKS;
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
}

function fmt(s) {
    var m = Math.floor(s / 60), r = s % 60;
    return ('0' + m).slice(-2) + ':' + ('0' + r).slice(-2);
}

var COLORS = ['#FCD34D', '#F9A8D4', '#86EFAC', '#7DD3FC', '#C4B5FD', '#FDBA74', '#000000'];

Page({
    data: {
        id: '', name: '', accent: '#FCD34D', missing: false,
        done: false, step: 0, total: 0, stepLabel: '', dots: [],
        bands: [], cupText: '', act: '', actIcon: '',
        title: '', desc: '', tip: '', cheer: '', cheerEmoji: '',
        hasTimer: false, timerText: '', running: false,
        particles: [], face: ''
    },

    onLoad: function (query) {
        var id = query && query.id ? query.id : '';
        var d = findDrink(id);
        if (!d) { this.setData({ missing: true }); return; }
        this.d = d;
        this.timer = { left: 0, running: false, handle: null, endAt: 0 };
        var step = store.getStep(id);
        if (step >= d.steps.length) step = 0;
        wx.setNavigationBarTitle({ title: d.name });
        this.renderStep(step);
    },

    onUnload: function () { this.stopTimer(); },

    renderStep: function (idx) {
        var d = this.d;
        var total = d.steps.length;
        if (idx >= total) { this.showDone(); return; }
        var s = d.steps[idx];
        var layers = cup.cupAtStep(d, idx);
        var c = emoji.cheer(idx, total);
        var dots = [], names = [];
        for (var i = 0; i < total; i++) dots.push(i < idx ? 'past' : (i === idx ? 'on' : ''));
        for (var j = 0; j < layers.length; j++) names.push(layers[j].name);

        store.setStep(d.id, idx);
        this.setData({
            done: false,
            id: d.id,
            name: d.name,
            accent: d.bg,
            step: idx,
            total: total,
            stepLabel: '第 ' + (idx + 1) + ' 步 / 共 ' + total + ' 步',
            dots: dots,
            bands: layers,
            cupText: names.join(' · '),
            act: s.act || '操作',
            actIcon: emoji.actEmoji(s.act),
            title: s.title,
            desc: s.desc,
            tip: (d.pitfalls && d.pitfalls[0]) ? d.pitfalls[0] : '',
            cheer: c.t,
            cheerEmoji: c.e,
            hasTimer: !!s.timer,
            timerText: fmt(this.timer.left > 0 ? this.timer.left : (s.timer || 0)),
            running: this.timer.running
        });
    },

    /* 计时器用时间戳校正，切到后台再回来依然准确 */
    onTimerTap: function () {
        if (this.timer.running) this.stopTimer();
        else this.startTimer();
    },

    startTimer: function () {
        var s = this.d.steps[this.data.step];
        if (!s || !s.timer) return;
        if (this.timer.left <= 0) this.timer.left = s.timer;
        this.timer.running = true;
        this.timer.endAt = Date.now() + this.timer.left * 1000;
        this.setData({ running: true });

        var self = this;
        this.timer.handle = setInterval(function () {
            /* 剩余时间要向上取整：用 round 会在最后半秒就显示 00:00 */
            var left = Math.max(0, Math.ceil((self.timer.endAt - Date.now()) / 1000));
            self.timer.left = left;
            if (left <= 0) {
                self.stopTimer();
                if (wx.vibrateLong) wx.vibrateLong();
                self.setData({ timerText: '时间到' });
            } else {
                self.setData({ timerText: fmt(left) });
            }
        }, 200);
    },

    stopTimer: function () {
        if (this.timer && this.timer.handle) {
            clearInterval(this.timer.handle);
            this.timer.handle = null;
        }
        if (this.timer) this.timer.running = false;
        this.setData({ running: false });
    },

    onPrev: function () {
        if (this.data.step <= 0) return;
        this.stopTimer();
        this.timer.left = 0;
        this.renderStep(this.data.step - 1);
    },

    onNext: function () {
        if (this.data.step >= this.data.total - 1) {
            this.showDone();
            return;
        }
        this.stopTimer();
        this.timer.left = 0;
        this.renderStep(this.data.step + 1);
    },

    showDone: function () {
        this.stopTimer();
        var d = this.d;
        store.clearChecked(d.id);
        store.setStep(d.id, 0);

        var parts = [];
        for (var i = 0; i < 30; i++) {
            var a = (Math.PI * 2 * i) / 30 + Math.random() * 0.5;
            var r = 10 + Math.random() * 24;
            parts.push({
                color: COLORS[i % COLORS.length],
                left: (50 + Math.cos(a) * r).toFixed(1) + '%',
                top: (38 + Math.sin(a) * r * 0.8).toFixed(1) + '%',
                delay: (Math.random() * 0.7).toFixed(2) + 's',
                size: Math.round(8 + Math.random() * 14) + 'rpx'
            });
        }

        wx.setNavigationBarTitle({ title: '干杯' });
        this.setData({
            done: true,
            name: d.name,
            accent: d.bg,
            bands: cup.cupBands(d.layers),
            particles: parts,
            face: emoji.randomFaces()
        });
    },

    onHome: function () {
        wx.reLaunch({ url: '/pages/index/index' });
    },

    onRestart: function () {
        var d = this.d;
        this.timer.left = 0;
        wx.setNavigationBarTitle({ title: d.name });
        this.renderStep(0);
    },

    onShareAppMessage: function () {
        return { title: '饮料小当家 · ' + this.data.name, path: '/pages/index/index' };
    }
});
