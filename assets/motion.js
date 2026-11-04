/* ==========================================================================
   饮料小当家 · 动效驱动层
   独立于 app.js：全部通过事件委托 + MutationObserver 挂载，
   不修改、不覆盖任何业务函数，避免碰坏「勾选不重绘」等既有修复。

   观察策略：只监听 childList（innerHTML 重绘），不监听 attributes。
   因此勾选原料时 toggleIng() 只改 class，不会触发重新装饰或页面闪动。
   ========================================================================== */

(function () {
  'use strict';

  var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var HOVER = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var drinks = window.DRINKS || [];
  var drinkCount = drinks.filter(function (d) { return !d.isBase; }).length;

  /* 启用的动效清单（便于核对与调试） */
  window.MX_MOTIONS = [
    '卡片多向级联入场', '幕布转场', '滚动区块揭示', '杯子翻转', '弹窗抽屉滑入',
    '步骤条逐级点亮', '详情整页淡入', '点击涟漪', '磁吸跟随', '键盘聚焦框',
    '下划线滑入', '描边浮现', '勾选粒子爆开', '轻震动', 'Tab 滑动指示器',
    '筛选脉冲', 'Toast 堆叠', '勾号弹跳', '滚动进度条', '数字滚动',
    '无限跑马灯', '杯子视差', '标题逐字浮现', '文字扫光', '荧光笔标记',
    '计时器呼吸脉冲', '三点跳动', '杯子漂浮', '斜纹流动', '呼吸缩放',
    '光标跟随硬边块', '搜索图标旋转'
  ];

  /* ------------------------------------------------------------------
     0. 全局装饰件（只创建一次，不放在被观察容器内部）
     ------------------------------------------------------------------ */
  var scrollBar, tabInk, toastStack, cursorInk;

  function injectChrome() {
    var pane = $('.pane-list');
    if (!pane) return;

    scrollBar = document.createElement('div');
    scrollBar.id = 'mxScrollBar';
    pane.appendChild(scrollBar);

    var holder = $('.collapsible-inner');
    if (holder && !$('#mxTabInk')) {
      tabInk = document.createElement('div');
      tabInk.id = 'mxTabInk';
      holder.appendChild(tabInk);
    }

    toastStack = document.createElement('div');
    toastStack.id = 'mxToastStack';
    document.body.appendChild(toastStack);

    if (HOVER && !REDUCED) {
      cursorInk = document.createElement('div');
      cursorInk.id = 'mxCursorInk';
      document.body.appendChild(cursorInk);
    }

    /* 品牌旁的统计徽标 + 数字滚动 */
    var brand = $('#brandBtn');
    if (brand && !$('.mx-stat') && drinkCount) {
      var stat = document.createElement('span');
      stat.className = 'mx-stat';
      stat.innerHTML = '<b>0</b> 款配方';
      brand.insertAdjacentElement('afterend', stat);
      countUp(stat.querySelector('b'), drinkCount, 1100);
    }
  }

  /* ------------------------------------------------------------------
     1. 基础工具
     ------------------------------------------------------------------ */
  function toast(msg, accent) {
    if (!toastStack || REDUCED) return;
    var t = document.createElement('div');
    t.className = 'mx-toast' + (accent ? ' mx-accent' : '');
    t.textContent = msg;
    toastStack.appendChild(t);
    while (toastStack.children.length > 3) toastStack.removeChild(toastStack.firstChild);
    setTimeout(function () {
      t.classList.add('mx-out');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 280);
    }, 2200);
  }

  function countUp(el, target, dur) {
    if (!el) return;
    if (REDUCED) { el.textContent = target; return; }
    var start = performance.now();
    function step(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    /* 兜底：后台标签页 / 无绘制帧环境会节流 rAF，时间到后强制落到终值，
       避免数字永远停在中间（例如 31） */
    setTimeout(function () { el.textContent = target; }, dur + 120);
  }

  function accentOf(el) {
    /* 底部栏 .bar 是 .detail-wrap 的兄弟节点，取不到那里的变量，
       所以依次尝试：自身所在容器 → .bar → 整页详情 → 卡片自己的 --bg */
    var hosts = [
      el && el.closest('.detail-wrap'),
      el && el.closest('.bar'),
      $('.detail-wrap'),
      el
    ];
    for (var i = 0; i < hosts.length; i++) {
      var h = hosts[i];
      if (h && h.style) {
        var v = h.style.getPropertyValue('--accent') || h.style.getPropertyValue('--bg');
        if (v && v.trim()) return v.trim();
      }
    }
    return '#FCD34D';
  }

  /* 涟漪：按真实点击坐标 */
  function ripple(el, e) {
    if (!el || REDUCED) return;
    var r = el.getBoundingClientRect();
    var x = (e.clientX || (r.left + r.width / 2)) - r.left;
    var y = (e.clientY || (r.top + r.height / 2)) - r.top;
    var rp = document.createElement('span');
    rp.className = 'mx-ripple';
    rp.style.left = x + 'px';
    rp.style.top = y + 'px';
    el.classList.add('mx-ripple-host');
    el.appendChild(rp);
    setTimeout(function () { if (rp.parentNode) rp.parentNode.removeChild(rp); }, 640);
  }

  /* 粒子：小方块爆开（粗野主义不用圆点柔光） */
  function burst(x, y, color, n) {
    if (REDUCED) return;
    var palette = [color, '#000000', '#FFFFFF', '#FCD34D'];
    for (var i = 0; i < (n || 8); i++) {
      var p = document.createElement('i');
      p.className = 'mx-particle';
      var a = (Math.PI * 2 * i) / (n || 8) + Math.random() * 0.5;
      var dist = 26 + Math.random() * 42;
      p.style.left = x + 'px';
      p.style.top = y + 'px';
      p.style.setProperty('--px', (Math.cos(a) * dist).toFixed(1) + 'px');
      p.style.setProperty('--py', (Math.sin(a) * dist - 18).toFixed(1) + 'px');
      p.style.setProperty('--pr', (Math.random() * 180 - 90).toFixed(0) + 'deg');
      p.style.setProperty('--mx-particle-color', palette[i % palette.length]);
      document.body.appendChild(p);
      (function (node) {
        setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 600);
      })(p);
    }
  }

  /* 幕布转场：饮品色硬边矩形横扫 */
  function curtain(color) {
    if (REDUCED || $('#mxCurtain')) return;
    var c = document.createElement('div');
    c.id = 'mxCurtain';
    c.className = 'mx-curtain';
    c.style.setProperty('--mx-curtain-color', color || '#FCD34D');
    document.body.appendChild(c);
    setTimeout(function () { if (c.parentNode) c.parentNode.removeChild(c); }, 560);
  }

  /* ------------------------------------------------------------------
     2. 列表侧：级联入场 / Tab 指示器 / 滚动进度
     ------------------------------------------------------------------ */
  function cardsEnter() {
    var box = $('#cards');
    if (!box) return;
    box.classList.add('mx-ready');
    $$('.card', box).forEach(function (c, i) {
      /* 只有前 30 张做递增延迟，避免 205 张全部排队太久 */
      c.style.animationDelay = (i < 30 ? Math.min(i * 26, 620) : 0) + 'ms';
    });
  }

  function moveInk() {
    if (!tabInk) return;
    var on = $('.tab.on', $('#tabs'));
    var holder = $('.collapsible-inner');
    if (!on || !holder) return;
    var r = on.getBoundingClientRect();
    var h = holder.getBoundingClientRect();
    /* 指示条压在选中项底部内侧，不越出 tabs 的 4px 下内边距，
       避免被 .collapsible-inner 的 overflow:hidden 裁掉 */
    tabInk.style.width = r.width + 'px';
    tabInk.style.top = (r.bottom - h.top - 5) + 'px';
    tabInk.style.transform = 'translateX(' + (r.left - h.left) + 'px)';
  }

  function bindScroll() {
    var box = $('#cards');
    var detail = $('#detail');
    if (!box) return;

    box.addEventListener('scroll', function () {
      var max = box.scrollHeight - box.clientHeight;
      var p = max > 0 ? Math.min(1, box.scrollTop / max) : 0;
      if (scrollBar) scrollBar.style.width = (p * 100) + '%';
    }, { passive: true });

    /* 详情侧视差：幅度上限 12px */
    if (detail && HOVER && !REDUCED) {
      detail.addEventListener('scroll', function () {
        var cup = $('.hero-cup', detail);
        if (!cup) return;
        cup.classList.add('mx-parallax');
        cup.style.setProperty('--mx-parallax', Math.min(12, detail.scrollTop * 0.06).toFixed(1) + 'px');
      }, { passive: true });
    }
  }

  /* ------------------------------------------------------------------
     3. 详情侧装饰（每次 innerHTML 重绘后执行）
     ------------------------------------------------------------------ */
  var revealIO = null;
  function ensureRevealIO() {
    if (revealIO || REDUCED || !window.IntersectionObserver) return;
    revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('mx-in');
          revealIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.08 });
  }

  function splitChars(el) {
    if (!el || REDUCED || el.dataset.mxSplit === '1') return;
    var txt = el.textContent.trim();
    if (!txt || txt.length > 24) return;
    el.textContent = '';
    for (var i = 0; i < txt.length; i++) {
      var s = document.createElement('span');
      s.className = 'mx-char';
      s.style.setProperty('--mx-d', (i * 32) + 'ms');
      s.textContent = txt[i] === ' ' ? '\u00A0' : txt[i];
      el.appendChild(s);
    }
    el.dataset.mxSplit = '1';
  }

  function decorateDetail() {
    var wrap = $('.detail-wrap');
    if (!wrap) return;

    /* 大标题逐字浮现 */
    var heroTitle = $('.hero-title', wrap);
    if (heroTitle) splitChars(heroTitle);

    /* 步骤标题文字扫光 */
    var stepTitle = $('.step-title', wrap);
    if (stepTitle) stepTitle.classList.add('mx-shine');

    /* 关键词荧光笔 */
    $$('.step-tip b, .fidelity b', wrap).forEach(function (b) {
      b.classList.add('mx-highlight');
    });

    /* 区块滚动揭示（只给 .sec，避开有 hover transform 的 .hero） */
    ensureRevealIO();
    $$('.sec', wrap).forEach(function (s) {
      if (revealIO) { s.classList.add('mx-reveal'); revealIO.observe(s); }
      else s.classList.add('mx-in');
    });

    /* 步骤切换：杯子翻一次 */
    var stageCup = $('.stage-cup', wrap);
    if (stageCup && !REDUCED) stageCup.classList.add('mx-flip');

    /* 「杯中」文字末尾三点跳动 */
    var layers = $('.stage-layers', wrap);
    if (layers && !$('.mx-dots', layers)) {
      var dots = document.createElement('span');
      dots.className = 'mx-dots';
      dots.innerHTML = '<i></i><i></i><i></i>';
      layers.appendChild(dots);
    }

    /* 主按钮：磁吸 + 描边浮现 */
    $$('.bar .btn-accent', document).forEach(function (b) {
      if (HOVER && !REDUCED) b.classList.add('mx-magnetic');
    });
    $$('.bar .btn-ghost, .done-btn, .modal-close', document).forEach(function (b) {
      b.classList.add('mx-border-draw');
    });
    $$('.back, #brandBtn, .done-btn', document).forEach(function (b) {
      b.classList.add('mx-underline');
    });

    /* 完成页：跑马灯 + 庆祝 Toast */
    var done = $('.done-view', wrap);
    if (done && !$('.mx-marquee', done)) {
      var mq = document.createElement('div');
      mq.className = 'mx-marquee';
      var line = '';
      for (var k = 0; k < 4; k++) {
        line += '<span>干杯 <i>CHEERS</i> 饮料小当家 <i>DRINK MASTER</i> ' + drinkCount + ' 款配方 <i>·</i></span>';
      }
      mq.innerHTML = '<div class="mx-marquee-track">' + line + line + '</div>';
      done.appendChild(mq);
      toast('这杯做好了，干杯！', true);
    }

    /* 兜底：IntersectionObserver 未触发时尽快强制显示，避免内容长时间空白 */
    setTimeout(function () {
      $$('.mx-reveal:not(.mx-in)', wrap).forEach(function (s) { s.classList.add('mx-in'); });
    }, 600);
  }

  /* ------------------------------------------------------------------
     4. 光标跟随 + 磁吸（合并为一个 pointermove，一次 rAF）
     ------------------------------------------------------------------ */
  var mx = 0, my = 0, tx = 0, ty = 0, cx = 0, cy = 0, raf = null, inkOn = false;

  function tick() {
    raf = null;
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;

    if (cursorInk) {
      cursorInk.style.transform = 'translate(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px) translate(-50%,-50%)';
    }
    if (HOVER) {
      var btn = $('.bar .btn-accent');
      if (btn && btn.classList.contains('mx-magnetic')) {
        var r = btn.getBoundingClientRect();
        var dx = tx - (r.left + r.width / 2);
        var dy = ty - (r.top + r.height / 2);
        if (Math.abs(dx) < r.width / 2 + 60 && Math.abs(dy) < r.height / 2 + 60) {
          btn.style.setProperty('--mx-x', (dx * 0.11).toFixed(1) + 'px');
          btn.style.setProperty('--mx-y', (dy * 0.11).toFixed(1) + 'px');
        } else {
          btn.style.setProperty('--mx-x', '0px');
          btn.style.setProperty('--mx-y', '0px');
        }
      }
    }
    if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4) {
      raf = requestAnimationFrame(tick);
    }
  }

  function bindPointer() {
    if (!HOVER || REDUCED) return;
    document.addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!inkOn && cursorInk) { cursorInk.classList.add('mx-on'); inkOn = true; }
      if (raf === null) raf = requestAnimationFrame(tick);
    }, { passive: true });
    document.addEventListener('pointerleave', function () {
      if (cursorInk) cursorInk.classList.remove('mx-on');
      inkOn = false;
    });
  }

  /* ------------------------------------------------------------------
     5. 事件委托（捕获阶段旁观，冒泡阶段读结果）
     ------------------------------------------------------------------ */
  function bindEvents() {
    /* 捕获：在 app.js 重绘之前启动幕布 + 涟漪 */
    document.addEventListener('click', function (e) {
      var act = e.target.closest('[data-act]');
      var card = e.target.closest('.card');
      if (act || card) curtain(accentOf(act || card));

      var hit = e.target.closest('.btn, .tab, .chip, .done-btn, .modal-close, .back');
      if (hit && !hit.classList.contains('mx-magnetic')) ripple(hit, e);
    }, true);

    /* 冒泡：app.js 已处理完业务逻辑，此时读 DOM 结果做反馈 */
    document.addEventListener('click', function (e) {
      var t = e.target;

      /* 切品类 → 指示器 + 数量 Toast */
      if (t.closest('.tab')) {
        moveInk();
        var on = $('.tab.on', $('#tabs'));
        if (on) {
          var n = drinks.filter(function (d) {
            return on.textContent === '全部' ? !d.isBase : d.category === on.textContent;
          }).length;
          toast(on.textContent + ' · ' + n + ' 款');
        }
        var tabs = $('#tabs');
        if (tabs) { tabs.classList.add('mx-pulse'); setTimeout(function () { tabs.classList.remove('mx-pulse'); }, 320); }
      }

      /* 无因筛选 */
      if (t.closest('[data-nocaf]')) {
        var chip = $('.chip.on', $('#filters'));
        toast(chip ? '只看无咖啡因' : '已显示全部');
      }

      /* 勾选原料：粒子 + 全勾完提示 */
      var ing = t.closest('[data-ing]');
      if (ing) {
        var r = ing.getBoundingClientRect();
        if (ing.classList.contains('done')) {
          burst(r.left + 22, r.top + r.height / 2, accentOf(ing), 8);
        }
        var all = $$('.ing', $('#detail'));
        if (all.length && all.every(function (x) { return x.classList.contains('done'); })) {
          toast('料齐了！可以开做', true);
          var cta = $('.bar .btn-accent');
          if (cta) { cta.classList.add('mx-shake'); setTimeout(function () { cta.classList.remove('mx-shake'); }, 450); }
        }
      }

      /* 计时启动 */
      if (t.closest('[data-act="timer"]')) {
        var tm = $('.timer');
        if (tm && tm.classList.contains('run')) toast('计时开始，别走开');
      }

      /* 点击卡片 */
      if (t.closest('.card')) {
        var c = t.closest('.card');
        var cr = c.getBoundingClientRect();
        burst(cr.left + cr.width / 2, cr.top + cr.height / 2, c.style.getPropertyValue('--bg') || '#FCD34D', 6);
      }
    });

    /* 键盘：ESC 关弹窗时给个轻反馈 */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') moveInk();
    });

    window.addEventListener('resize', moveInk, { passive: true });
  }

  /* ------------------------------------------------------------------
     6. MutationObserver：只观察 childList，不动 attributes
     ------------------------------------------------------------------ */
  function observe() {
    if (!window.MutationObserver) return;
    var busy = false;

    var mo = new MutationObserver(function (records) {
      if (busy) return;
      var touchedCards = false, touchedDetail = false, touchedTabs = false;
      records.forEach(function (r) {
        if (r.type !== 'childList') return;
        var id = r.target.id;
        if (id === 'cards') touchedCards = true;
        else if (id === 'detail') touchedDetail = true;
        else if (id === 'tabs') touchedTabs = true;
      });
      if (!touchedCards && !touchedDetail && !touchedTabs) return;

      /* MutationObserver 是 DOM 同步变更后的微任务，回调执行时 innerHTML
         已经写完，直接同步装饰即可。不能再用 rAF 延迟——后台标签页 / 无绘制
         帧的环境会节流 rAF，导致后续重绘漏掉整个动效装饰。 */
      busy = true;
      try {
        if (touchedCards) cardsEnter();
        if (touchedTabs) moveInk();
        if (touchedDetail) decorateDetail();
      } finally {
        busy = false;
      }
    });

    ['#cards', '#detail', '#tabs', '#filters'].forEach(function (sel) {
      var el = $(sel);
      if (el) mo.observe(el, { childList: true, subtree: false });
    });
  }

  /* ------------------------------------------------------------------
     7. 启动
     ------------------------------------------------------------------ */
  function boot() {
    injectChrome();
    bindScroll();
    bindPointer();
    bindEvents();
    observe();
    cardsEnter();
    decorateDetail();
    moveInk();
    /* 二次校正：字体加载完成后 tab 宽度会变 */
    setTimeout(moveInk, 300);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInk);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
