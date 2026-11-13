/* 动作图标与随机表情（与网页版 app.js 保持一致） */

var ACT_EMOJI = {
    '铺冰': '🧊', '倒入': '🫗', '淋入': '☕', '冲出': '💥', '加热': '🔥', '焖': '⏳',
    '摇匀': '🫨', '捣碎': '🥄', '搅拌': '🌀', '铺面': '🍦', '备料': '🔪', '冲洗': '💧',
    '冰杯': '🥶', '打泥': '🥭', '降温': '❄️', '挂壁': '🍯', '完成': '✨', '浸泡': '🫧'
};

var FACE_POOL = [
    '😀', '😃', '😄', '😁', '😆', '😊', '🙂', '🙃', '😉', '😍', '🥰', '😋',
    '😎', '🤩', '🥳', '😌', '😏', '🤗', '🤭', '🫡', '😺', '😸', '🥹', '😇',
    '🤓', '😗', '😙', '🫠'
];

var CHEER_TEXT = {
    first: ['先开个头', '动手吧', '来，开始', '第一下'],
    mid: ['稳的', '继续保持', '很顺手', '就这么来', '漂亮', '别急'],
    near: ['快了', '就差一点', '马上就好', '闻到香味了'],
    last: ['收尾，马上就能喝了', '最后一步', '马上干杯', '成了']
};

var LINES = ['就它了，别纠结', '手气不错', '这杯归你了', '今天轮到它', '别想了，开做', '听天意，开喝'];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function actEmoji(act) { return ACT_EMOJI[act] || '👌'; }

function randomFaces() {
    var pool = FACE_POOL.slice();
    var n = 1 + Math.floor(Math.random() * 3);
    var out = [];
    for (var i = 0; i < n; i++) {
        out.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }
    return out.join('');
}

function cheer(idx, total) {
    var t;
    if (idx === 0) t = pick(CHEER_TEXT.first);
    else if (idx === total - 1) t = pick(CHEER_TEXT.last);
    else if (idx === total - 2) t = pick(CHEER_TEXT.near);
    else t = pick(CHEER_TEXT.mid);
    return { e: randomFaces(), t: t };
}

function rollLine() { return pick(LINES); }

function rollFace() { return pick(FACE_POOL); }

module.exports = {
    actEmoji: actEmoji,
    cheer: cheer,
    randomFaces: randomFaces,
    rollLine: rollLine,
    rollFace: rollFace
};
