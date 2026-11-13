/* 分层杯：把配方的 layers 百分比算成可直接渲染的色带。
   cup-inner 用 column-reverse，所以数组第一项 = 杯底。 */

function cupBands(layers) {
    var list = layers || [];
    var total = 0;
    for (var i = 0; i < list.length; i++) total += list[i].pct || 0;
    if (!total) total = 1;
    var out = [];
    for (var j = 0; j < list.length; j++) {
        out.push({
            name: list[j].name,
            color: list[j].color,
            height: ((list[j].pct || 0) / total * 100).toFixed(2)
        });
    }
    return out;
}

/* 制作页每一步的杯子 = 前面所有步骤 add 的累积结果 */
function cupAtStep(d, idx) {
    var acc = [];
    for (var i = 0; i <= idx; i++) {
        var st = d.steps[i];
        if (!st || !st.add) continue;
        for (var j = 0; j < st.add.length; j++) {
            var a = st.add[j];
            var hit = null;
            for (var k = 0; k < acc.length; k++) {
                if (acc[k].name === a.name) { hit = acc[k]; break; }
            }
            if (hit) hit.pct += a.pct;
            else acc.push({ name: a.name, pct: a.pct, color: a.color });
        }
    }
    if (!acc.length) return cupBands([{ name: '空杯', pct: 100, color: '#F7F7F7' }]);
    return cupBands(acc);
}

module.exports = { cupBands: cupBands, cupAtStep: cupAtStep };
