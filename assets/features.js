/* ==========================================================================
   饮料小当家 · 两个新功能
   1) 抽一杯：纯随机，不带任何约束
   2) 手边有什么：按手头原料反查「现在能做」和「只差一样」

   独立模块，不改 app.js 的既有逻辑。通过全局作用域复用
   state / renderCards / renderDetail / stopTimer / cupSVG / FACE_POOL。
   ========================================================================== */

(function () {
  'use strict';

  var ALL = window.DRINKS || [];
  var DRINKS = ALL.filter(function (d) { return !d.isBase; });
  var FACES = (typeof FACE_POOL !== 'undefined' && FACE_POOL.length)
    ? FACE_POOL : ['😄', '😊', '🥰', '😎', '🤩'];

  var LINES = ['就它了，别纠结', '手气不错', '这杯归你了', '今天轮到它', '别想了，开做', '听天意，开喝'];

  /* 常备料：谁家都有，不进词表也不参与匹配。
     否则「只差一样」永远差的是冰块或糖浆，反查就没意义了。 */
  var IGNORE = {
    '糖浆':1,'糖':1,'白砂糖':1,'冰糖':1,'冰糖糖浆':1,'蜂蜜':1,'方糖':1,
    '盐':1,'海盐':1,
    '热水':1,'水':1,'冰水':1,'冷水':1,'饮用水':1,'冰块':1
  };

  /* 别名归一：数据里「牛奶 / 鲜奶 / 全脂牛奶 / 鲜牛乳」是四种写法，
     不归一的话用户勾了「牛奶」会漏掉一大半配方。只归并确定的同义，
     茶底、糖类风味糖浆保持原样，避免把不同风味硬凑成一样。 */
  var ALIAS = {
    '鲜奶':'牛奶','全脂牛奶':'牛奶','鲜牛乳':'牛奶','冰博克牛奶':'牛奶','牛奶':'牛奶',
    '厚椰乳':'椰乳','椰浆':'椰乳'
  };

  function norm(name) { return ALIAS[name] || name; }

  /* 一杯真正需要「手边有」的原料：必选、非常备、归一去重 */
  function needed(d) {
    var seen = {}, out = [];
    (d.ingredients || []).forEach(function (i) {
      if (i.optional || IGNORE[i.name]) return;
      var n = norm(i.name);
      if (IGNORE[n] || seen[n]) return;
      seen[n] = 1;
      out.push(n);
    });
    return out;
  }

  /* 原料词表：按被多少款饮品需要排序，越靠前越常用 */
  var VOCAB = (function () {
    var cnt = {};
    DRINKS.forEach(function (d) {
      needed(d).forEach(function (n) { cnt[n] = (cnt[n] || 0) + 1; });
    });
    return Object.keys(cnt)
      .map(function (k) { return { name: k, n: cnt[k] }; })
      .sort(function (a, b) { return b.n - a.n || a.name.localeCompare(b.name, 'zh'); });
  })();

  var picked = {};              // 用户勾选的原料
  var pantryQuery = '';
  var current = null;           // 当前抽中的饮品
  var lastId = null;            // 避免连点「换一杯」抽到同一杯

  var pickerEl = document.getElementById('pickerOverlay');
  var pantryEl = document.getElementById('pantryOverlay');
  var chipsEl = document.getElementById('pantryChips');
  var resultsEl = document.getElementById('pantryResults');

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }
  function stars(n) { var s = ''; for (var i = 0; i < (n || 1); i++) s += '★'; return s; }

  /* ------------------------------------------------------------------
     浮层开关
     ------------------------------------------------------------------ */
  function closeAll() {
    pickerEl.hidden = true;
    pantryEl.hidden = true;
  }
  function open(which) {
    closeAll();
    (which === 'picker' ? pickerEl : pantryEl).hidden = false;
  }

  /* ------------------------------------------------------------------
     进入某杯的备料页（复用 app.js 的状态与渲染）
     ------------------------------------------------------------------ */
  function openDrink(d) {
    if (!d || typeof state === 'undefined') return;
    state.id = d.id;
    state.step = 0;
    state.view = 'prep';
    document.getElementById('app').dataset.view = 'prep';
    if (typeof stopTimer === 'function') stopTimer();
    state.timer.left = 0;
    if (typeof renderCards === 'function') renderCards();
    if (typeof renderDetail === 'function') renderDetail();
    var cards = document.getElementById('cards');
    if (cards) cards.scrollTop = 0;
    closeAll();
  }

  /* ------------------------------------------------------------------
     1) 抽一杯
     ------------------------------------------------------------------ */
  function roll() {
    if (!DRINKS.length) return;
    var pool = DRINKS.length > 1
      ? DRINKS.filter(function (d) { return d.id !== lastId; })
      : DRINKS;
    current = pick(pool);
    lastId = current.id;
    renderPicker(current);
  }

  function renderPicker(d) {
    document.getElementById('pickFace').textContent = pick(FACES);
    document.getElementById('pickCup').innerHTML =
      (typeof cupSVG === 'function') ? cupSVG(d.layers, 94, 126) : '';
    document.getElementById('pickName').textContent = d.name;
    document.getElementById('pickMeta').textContent =
      [d.category, d.method, stars(d.difficulty),
       (d.ingredients || []).filter(function (i) { return !i.optional; }).length + ' 样料'
      ].join(' / ');
    document.getElementById('pickLine').textContent = pick(LINES);

    /* 重播杯子入场动画 */
    var cup = document.getElementById('pickCup');
    cup.style.animation = 'none';
    void cup.offsetWidth;
    cup.style.animation = '';
  }

  /* ------------------------------------------------------------------
     2) 手边有什么
     ------------------------------------------------------------------ */
  function renderChips() {
    var q = pantryQuery.trim().toLowerCase();
    var list = VOCAB.filter(function (v) {
      return !q || v.name.toLowerCase().indexOf(q) >= 0;
    });
    /* 没搜索时默认只展示常用前 60 种，但已经勾上的一定保留 */
    var shown;
    if (q) {
      shown = list;
    } else {
      var top = list.slice(0, 60);
      VOCAB.forEach(function (v) {
        if (picked[v.name] && top.indexOf(v) < 0) top.push(v);
      });
      shown = top;
    }

    chipsEl.innerHTML = shown.map(function (v) {
      return '<button class="fx-chip' + (picked[v.name] ? ' on' : '') +
        '" type="button" data-name="' + esc(v.name) + '">' +
        esc(v.name) + '<span class="n">' + v.n + '</span></button>';
    }).join('') || '<div class="fx-group-empty">没找到这个原料</div>';

    document.getElementById('pantryNote').textContent = q
      ? '匹配 ' + shown.length + ' 种原料'
      : '共 ' + VOCAB.length + ' 种原料，这里先列最常用的；想找别的用上面搜索框';
  }

  function compute() {
    var can = [], one = [];
    DRINKS.forEach(function (d) {
      var miss = needed(d).filter(function (n) { return !picked[n]; });
      if (!miss.length) can.push(d);
      else if (miss.length === 1) one.push({ d: d, miss: miss[0] });
    });
    return { can: can, one: one };
  }

  function miniCard(d, miss, delay) {
    var svg = (typeof cupSVG === 'function') ? cupSVG(d.layers, 30, 40) : '';
    return '<button class="fx-mini" type="button" data-id="' + esc(d.id) +
      '" style="--mbg:' + esc(d.bg) + ';animation-delay:' + delay + 'ms">' +
        '<div class="fx-mini-cup">' + svg + '</div>' +
        '<div class="fx-mini-body">' +
          '<div class="fx-mini-name">' + esc(d.name) + '</div>' +
          '<div class="fx-mini-meta">' + esc(d.category) + ' / ' + esc(d.method) +
            ' / ' + stars(d.difficulty) + '</div>' +
        '</div>' +
        (miss ? '<div class="fx-mini-miss">差 ' + esc(miss) + '</div>' : '') +
      '</button>';
  }

  function groupHTML(title, items, cls, withMiss) {
    var LIMIT = 24;
    var head = '<div class="fx-group ' + cls + '"><div class="fx-group-title">' +
      title + '<span class="cnt">' + items.length + '</span></div>';
    if (!items.length) {
      return head + '<div class="fx-group-empty">' +
        (withMiss ? '再勾几样，就能看到「只差一味」的饮品' : '现在还做不了，先勾几样原料') +
        '</div></div>';
    }
    var body = '<div class="fx-mini-list">' + items.slice(0, LIMIT).map(function (x, i) {
      var d = withMiss ? x.d : x;
      return miniCard(d, withMiss ? x.miss : null, Math.min(i * 22, 400));
    }).join('') + '</div>';
    var more = items.length > LIMIT
      ? '<div class="fx-more">还有 ' + (items.length - LIMIT) + ' 款，勾更多原料或搜索缩小范围</div>' : '';
    return head + body + more + '</div>';
  }

  /* 「只差一样」里，补哪一味能解锁最多饮品 */
  function suggestions(one) {
    var cnt = {};
    one.forEach(function (x) { cnt[x.miss] = (cnt[x.miss] || 0) + 1; });
    return Object.keys(cnt)
      .map(function (k) { return { name: k, n: cnt[k] }; })
      .sort(function (a, b) { return b.n - a.n; })
      .slice(0, 4);
  }

  function renderResults() {
    var r = compute();
    var pickedN = Object.keys(picked).length;
    var canHTML;

    /* 只勾一两样时「现在就能做」多半是 0（几乎所有饮品都需要第二样核心料）。
       这时候不要给一个空的死胡同，直接告诉用户补哪一味收益最大。 */
    if (!r.can.length && pickedN > 0 && r.one.length) {
      var sg = suggestions(r.one);
      canHTML = '<div class="fx-group g-can"><div class="fx-group-title">' +
        '现在就能做<span class="cnt">0</span></div>' +
        '<div class="fx-group-empty">只勾这些还差一点。补上一样就有得喝：' +
        '<div class="fx-suggest">' + sg.map(function (s) {
          return '<button class="fx-chip" type="button" data-add="' + esc(s.name) + '">+ ' +
            esc(s.name) + ' <span class="n">' + s.n + ' 款</span></button>';
        }).join('') + '</div></div></div>';
    } else {
      canHTML = groupHTML('现在就能做', r.can, 'g-can', false);
    }

    resultsEl.innerHTML = canHTML + groupHTML('只差一样', r.one, 'g-one', true);
  }

  function renderPantry() {
    renderChips();
    renderResults();
  }

  /* ------------------------------------------------------------------
     事件
     ------------------------------------------------------------------ */
  document.getElementById('rollBtn').addEventListener('click', function () {
    /* 先显示再渲染，杯子入场动画的重排才有效（hidden 元素 offsetWidth 为 0） */
    open('picker');
    roll();
  });

  document.getElementById('pantryBtn').addEventListener('click', function () {
    renderPantry();
    open('pantry');
  });

  document.getElementById('pickAgain').addEventListener('click', roll);

  document.getElementById('pickGo').addEventListener('click', function () {
    openDrink(current);
  });

  document.getElementById('pantryClear').addEventListener('click', function () {
    picked = {};
    pantryQuery = '';
    document.getElementById('pantryQ').value = '';
    renderPantry();
  });

  document.getElementById('pantryQ').addEventListener('input', function (e) {
    pantryQuery = e.target.value;
    renderChips();
  });

  chipsEl.addEventListener('click', function (e) {
    var c = e.target.closest('.fx-chip');
    if (!c) return;
    var name = c.dataset.name;
    if (picked[name]) delete picked[name]; else picked[name] = 1;
    renderChips();
    renderResults();
  });

  resultsEl.addEventListener('click', function (e) {
    var add = e.target.closest('[data-add]');
    if (add) {
      picked[add.dataset.add] = 1;
      renderChips();
      renderResults();
      return;
    }
    var m = e.target.closest('.fx-mini');
    if (!m) return;
    var d = DRINKS.find(function (x) { return x.id === m.dataset.id; });
    if (d) openDrink(d);
  });

  /* 遮罩 / 关闭按钮 / ESC */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-fx-close]');
    if (t) closeAll();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAll();
  });
})();
