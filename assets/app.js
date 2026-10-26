/* ==========================================================================
   饮料小当家 · Drink Master
   纯原生 JS，无框架、无依赖、无构建
   ========================================================================== */

const DRINKS = window.DRINKS || [];
const CATS = ['全部','咖啡','奶茶','轻乳茶','果茶','柠檬茶','特调','小料'];

const state = {
  view:'list', cat:'全部', q:'', nocaf:false,
  id:'', step:0, checked:{},
  timer:{left:0, running:false, handle:null, endAt:0},
  fwRaf:null
};

/* ---------- 分层图 ---------- */
function cupSVG(layers, w, h){
  const uid = 'c' + Math.random().toString(36).slice(2,8);
  const topInset = w * 0.06, botInset = w * 0.16, r = w * 0.07;
  const x0 = topInset, x1 = w - topInset, x2 = w - botInset, x3 = botInset;
  const d = `M ${x0+r} 0 L ${x1-r} 0 Q ${x1} 0 ${x1-2} ${r}
             L ${x2+2} ${h-r} Q ${x2} ${h} ${x2-r} ${h}
             L ${x3+r} ${h} Q ${x3} ${h} ${x3-2} ${h-r}
             L ${x0+2} ${r} Q ${x0} 0 ${x0+r} 0 Z`;
  const total = layers.reduce((s,l)=>s+l.pct,0) || 1;
  let y = h, bands = '';
  layers.forEach(l=>{
    const bh = (l.pct/total)*h;
    y -= bh;
    bands += `<rect x="0" y="${y.toFixed(2)}" width="${w}" height="${bh.toFixed(2)}" fill="${l.color}"/>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" style="display:block;width:100%;height:auto">
    <defs><clipPath id="${uid}"><path d="${d}"/></clipPath></defs>
    <g clip-path="url(#${uid})">
      <rect x="0" y="0" width="${w}" height="${h}" fill="#FFFFFF"/>
      ${bands}
      <rect x="${w*0.63}" y="0" width="${w*0.09}" height="${h}" fill="#FFFFFF" opacity="0.24"/>
      <rect x="${w*0.79}" y="0" width="${w*0.03}" height="${h}" fill="#FFFFFF" opacity="0.16"/>
    </g>
    <path d="${d}" fill="none" stroke="#000" stroke-width="2.4"/>
  </svg>`;
}

function cupAtStep(d, idx){
  const acc = [];
  for(let i=0;i<=idx;i++){
    const st = d.steps[i];
    if(!st || !st.add) continue;
    st.add.forEach(a=>{
      const hit = acc.find(x=>x.name===a.name);
      if(hit) hit.pct += a.pct;
      else acc.push({...a});
    });
  }
  if(!acc.length) return [{name:'空杯', pct:100, color:'#F7F7F7'}];
  return acc;
}

/* ---------- 动作图标与鼓励 ---------- */
const ACT_EMOJI = {
  '铺冰':'🧊','倒入':'🫗','淋入':'☕','冲出':'💥','加热':'🔥','焖':'⏳',
  '摇匀':'🫨','捣碎':'🥄','搅拌':'🌀','铺面':'🍦','备料':'🔪','冲洗':'💧',
  '冰杯':'🥶','打泥':'🥭','降温':'❄️','挂壁':'🍯','完成':'✨','浸泡':'🫧'
};
function actEmoji(act){ return ACT_EMOJI[act] || '👌'; }

function cheer(idx, total){
  if(idx === 0) return {e:'👊', t:'先开个头'};
  if(idx === total-1) return {e:'🥂', t:'收尾，马上就能喝了'};
  if(idx === total-2) return {e:'🌟', t:'快了'};
  return {e:'💪', t:'稳的'};
}

/* ---------- 左栏 ---------- */
function filtered(){
  return DRINKS.filter(d=>{
    if(state.cat === '全部' && d.isBase) return false;
    if(state.cat !== '全部' && d.category !== state.cat) return false;
    if(state.nocaf && !d.nocaf) return false;
    if(state.q){
      const q = state.q.toLowerCase();
      const hay = [d.name,d.category,d.method,...(d.brands||[]),(d.ingredients||[]).map(i=>i.name)].join(' ').toLowerCase();
      if(!hay.includes(q)) return false;
    }
    return true;
  });
}

function renderTabs(){
  document.getElementById('tabs').innerHTML = CATS.map(c=>
    `<button class="tab ${state.cat===c?'on':''}" data-cat="${c}">${c}</button>`
  ).join('');
}

function renderFilters(){
  document.getElementById('filters').innerHTML =
    `<button class="chip ${state.nocaf?'on':''}" data-nocaf="1">只看无咖啡因</button>`;
}

function renderCards(){
  const list = filtered();
  const box = document.getElementById('cards');
  if(!list.length){
    box.innerHTML = `<div class="empty">没找到<br><span style="font-size:12px;font-weight:600">换个词试试，或者搜原料名</span></div>`;
    return;
  }
  box.innerHTML = list.map((d,i)=>`
    <button class="card ${state.id===d.id?'on':''}" data-id="${d.id}" style="--bg:${d.bg};animation-delay:${Math.min(i,12)*24}ms">
      <div class="card-cup">${cupSVG(d.layers, 42, 56)}</div>
      <div class="card-body">
        <div class="card-title">${d.name}${d.nocaf?'<span class="tag-nocaf">无因</span>':''}</div>
        <div class="card-meta">
          <span>${d.category}</span><span class="sep">/</span>
          <span>${d.method}</span><span class="sep">/</span>
          <span>${'★'.repeat(d.difficulty)}</span><span class="sep">/</span>
          <span>${d.ingredients.filter(i=>!i.optional).length} 样料</span>
        </div>
      </div>
    </button>
  `).join('');
}

/* ---------- 详情 ---------- */
function getDrink(){ return DRINKS.find(d=>d.id===state.id) || DRINKS[0]; }

function renderPrep(d, showBack){
  const ck = state.checked[d.id] || {};
  const need = d.ingredients.filter(i=>!i.optional);
  const left = need.filter(i=>!ck[i.name]).length;

  return `
    <div class="detail-wrap" style="--accent:${d.bg}">
      ${showBack?`<button class="back" data-act="back">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        返回
      </button>`:''}

      <div class="hero">
        <div class="hero-cup">${cupSVG(d.layers, 94, 126)}</div>
        <div class="hero-info">
          <h2 class="hero-title">${d.name}</h2>
          <p class="hero-sub">${d.intro}</p>
          <div class="brands">${(d.brands||[]).map(b=>`<span class="brand-tag">${b}</span>`).join('')}</div>
        </div>
      </div>

      <div class="sec">
        <div class="sec-head">
          <div class="sec-title">原料</div>
          <div class="sec-note">${need.length} 样必选</div>
        </div>
        ${d.ingredients.map(i=>`
          <button class="ing ${ck[i.name]?'done':''}" data-ing="${i.name}">
            <span class="check">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            </span>
            <span class="ing-main">
              <span class="ing-name">${i.name}${i.optional?'<span class="tag-opt">可选</span>':''}</span>
              ${i.note?`<span class="ing-note">${i.note}</span>`:''}
            </span>
            <span class="ing-amt">${i.amount}</span>
          </button>
        `).join('')}
      </div>

      <div class="sec">
        <div class="sec-head"><div class="sec-title">工具</div></div>
        <div class="tools">${d.tools.map(t=>`<span class="tool">${t}</span>`).join('')}</div>
      </div>

      <div class="sec">
        <div class="sec-head"><div class="sec-title">容易翻车的地方</div></div>
        ${d.pitfalls.map((p,i)=>`<div class="pitfall"><span class="pitfall-num">0${i+1}</span><span>${p}</span></div>`).join('')}
      </div>

      <div class="sec">
        <div class="sec-head"><div class="sec-title">还原度</div></div>
        <div class="fidelity"><b>和店里差在哪 · </b>${d.fidelity}</div>
      </div>
    </div>
    <div class="bar" style="--accent:${d.bg}">
      <button class="btn btn-accent" data-act="cook">料齐了，开始做</button>
    </div>
    <div class="hint ${left?'':'hide'}"><span id="hintText">还有 ${left} 样没勾</span></div>
  `;
}

function renderCook(d){
  const s = d.steps[state.step];
  const total = d.steps.length;
  const cupLayers = cupAtStep(d, state.step);
  const c = cheer(state.step, total);

  return `
    <div class="detail-wrap" style="--accent:${d.bg}">
      <button class="back" data-act="backprep">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        备料
      </button>

      <div class="steps-bar">
        ${d.steps.map((_,i)=>`<div class="step-dot ${i<state.step?'past':i===state.step?'on':''}"></div>`).join('')}
      </div>

      <div class="cook-layout">
        <div class="stage">
          <div class="stage-badge">${actEmoji(s.act)} ${s.act || '操作'}</div>
          <div class="stage-cup">
            ${cupSVG(cupLayers, 190, 255)}
            ${state.timer.running?'':`<div class="stage-arrow">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" stroke="#000" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v20"/><path d="M4 15l8 8 8-8"/>
              </svg>
            </div>`}
          </div>
          <div class="stage-layers">杯中：${cupLayers.map(l=>l.name).join(' · ')}</div>
        </div>

        <div class="cook-text">
          <div class="step-num">第 ${state.step+1} 步 / 共 ${total} 步</div>
          <h2 class="step-title">${s.title}</h2>
          <p class="step-desc">${s.desc}</p>

          ${s.timer?`
            <button class="timer ${state.timer.running?'run':''}" data-act="timer">
              <span class="timer-num" id="tnum">${fmt(state.timer.left || s.timer)}</span>
              <span class="timer-label">${state.timer.running?'暂停':'开始计时'}</span>
            </button>
          `:''}

          <div class="step-tip"><b>注意 · </b>${d.pitfalls[0]}</div>
          <div class="cheer"><span class="cheer-e">${c.e}</span><span>${c.t}</span></div>
        </div>
      </div>
    </div>
    <div class="bar" style="--accent:${d.bg}">
      <button class="btn btn-ghost btn-sm" data-act="prev" ${state.step===0?'disabled':''}>上一步</button>
      <button class="btn btn-accent" data-act="next">${state.step===total-1?'做完了':'下一步'}</button>
    </div>
  `;
}

function renderDone(d){
  return `
    <div class="detail-wrap" style="padding-bottom:40px;--accent:${d.bg}">
      <div class="done-view">
        <canvas id="fw"></canvas>
        <div class="done-inner">
          <div class="done-cup">${cupSVG(d.layers, 160, 214)}</div>
          <h2 class="done-title">干杯<span class="done-emo">🥂</span></h2>
          <p class="done-sub">${d.name}做好了</p>
          <button class="done-btn" data-act="back">回到列表</button>
        </div>
      </div>
    </div>
  `;
}

function renderDetail(){
  const el = document.getElementById('detail');
  const d = getDrink();
  if(!d) return;

  if(state.view==='list' || state.view==='prep'){
    el.innerHTML = renderPrep(d, state.view==='prep');
    return;
  }
  if(state.view==='cook'){ el.innerHTML = renderCook(d); return; }
  if(state.view==='done'){
    el.innerHTML = renderDone(d);
    requestAnimationFrame(()=>launchFireworks());
  }
}

function fmt(s){
  const m = Math.floor(s/60), r = s%60;
  return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}`;
}

/* 只更新勾选状态，不重绘整页 */
function toggleIng(btn){
  const d = getDrink();
  const k = btn.dataset.ing;
  state.checked[d.id] = state.checked[d.id] || {};
  state.checked[d.id][k] = !state.checked[d.id][k];
  btn.classList.toggle('done', !!state.checked[d.id][k]);

  const need = d.ingredients.filter(i=>!i.optional);
  const left = need.filter(i=>!state.checked[d.id][i.name]).length;
  const hint = document.querySelector('.hint');
  const txt = document.getElementById('hintText');
  if(hint && txt){
    txt.textContent = left ? `还有 ${left} 样没勾` : '';
    hint.classList.toggle('hide', left===0);
  }
}

/* ---------- 计时器 ---------- */
function stopTimer(){
  if(state.timer.handle){ clearInterval(state.timer.handle); state.timer.handle=null; }
  state.timer.running = false;
}
function startTimer(){
  const d = getDrink();
  const s = d.steps[state.step];
  if(!s || !s.timer) return;
  if(state.timer.left <= 0) state.timer.left = s.timer;
  state.timer.running = true;
  state.timer.endAt = Date.now() + state.timer.left*1000;

  const btn = document.querySelector('.timer');
  const num = document.getElementById('tnum');
  const lab = document.querySelector('.timer-label');
  if(btn) btn.classList.add('run');
  if(lab) lab.textContent = '暂停';
  const arrow = document.querySelector('.stage-arrow');
  if(arrow) arrow.style.display = 'none';

  state.timer.handle = setInterval(()=>{
    const left = Math.max(0, Math.round((state.timer.endAt - Date.now())/1000));
    state.timer.left = left;
    if(num) num.textContent = fmt(left);
    if(left <= 0){
      stopTimer();
      if(navigator.vibrate) navigator.vibrate([180,90,180]);
      if(btn) btn.classList.remove('run');
      if(lab) lab.textContent = '时间到';
      if(arrow) arrow.style.display = '';
    }
  }, 200);
}

/* ---------- 烟花 ---------- */
function launchFireworks(){
  const cv = document.getElementById('fw');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const rect = cv.getBoundingClientRect();
  const W = rect.width, H = rect.height;
  cv.width = W * dpr; cv.height = H * dpr;
  ctx.setTransform(dpr,0,0,dpr,0,0);

  const COLORS = ['#FCD34D','#F9A8D4','#86EFAC','#7DD3FC','#C4B5FD','#FDBA74','#000000'];
  let parts = [];
  const start = performance.now();
  const schedule = [0, 240, 480, 760, 1060, 1400, 1800];
  let si = 0;

  function burst(x, y){
    const n = 30;
    for(let i=0;i<n;i++){
      const a = (Math.PI*2*i)/n + Math.random()*0.4;
      const sp = 2.2 + Math.random()*4.6;
      parts.push({x, y, vx:Math.cos(a)*sp, vy:Math.sin(a)*sp, life:1,
        color:COLORS[Math.floor(Math.random()*COLORS.length)], s:3+Math.random()*4});
    }
  }
  function loop(now){
    const el = now - start;
    while(si < schedule.length && el >= schedule[si]){
      burst(W*(0.15 + Math.random()*0.7), H*(0.12 + Math.random()*0.42));
      si++;
    }
    ctx.clearRect(0,0,W,H);
    for(const p of parts){
      p.x += p.vx; p.y += p.vy;
      p.vy += 0.085; p.vx *= 0.984; p.vy *= 0.984;
      p.life -= 0.0105;
      if(p.life > 0){
        ctx.globalAlpha = Math.max(0, p.life * 0.95);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }
    }
    parts = parts.filter(p=>p.life > 0);
    if(el < 3000 || parts.length){
      state.fwRaf = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0,0,W,H);
      state.fwRaf = null;
    }
  }
  if(state.fwRaf) cancelAnimationFrame(state.fwRaf);
  state.fwRaf = requestAnimationFrame(loop);
}

/* ---------- 事件 ---------- */
const cardsEl = document.getElementById('cards');
const paneListEl = document.querySelector('.pane-list');

cardsEl.addEventListener('scroll', ()=>{
  paneListEl.classList.toggle('scrolled', cardsEl.scrollTop > 36);
}, {passive:true});

document.getElementById('tabs').addEventListener('click', e=>{
  const t = e.target.closest('.tab');
  if(!t) return;
  state.cat = t.dataset.cat;
  cardsEl.scrollTop = 0;
  renderTabs(); renderCards();
});

document.getElementById('filters').addEventListener('click', e=>{
  const c = e.target.closest('[data-nocaf]');
  if(!c) return;
  state.nocaf = !state.nocaf;
  cardsEl.scrollTop = 0;
  renderFilters(); renderCards();
});

cardsEl.addEventListener('click', e=>{
  const c = e.target.closest('.card');
  if(!c) return;
  state.id = c.dataset.id;
  state.step = 0;
  state.view = 'prep';
  stopTimer(); state.timer.left = 0;
  document.getElementById('app').dataset.view = 'prep';
  renderCards(); renderDetail();
});

document.getElementById('detail').addEventListener('click', e=>{
  const ing = e.target.closest('[data-ing]');
  if(ing){ toggleIng(ing); return; }

  const act = e.target.closest('[data-act]');
  if(!act) return;
  const a = act.dataset.act;
  const app = document.getElementById('app');
  const d = getDrink();

  if(a==='back'){
    state.view='list'; app.dataset.view='list';
    stopTimer(); state.timer.left=0;
    if(state.fwRaf){ cancelAnimationFrame(state.fwRaf); state.fwRaf=null; }
    renderCards(); renderDetail();
  }
  if(a==='backprep'){ state.view='prep'; app.dataset.view='prep'; stopTimer(); state.timer.left=0; renderDetail(); }
  if(a==='cook'){ state.view='cook'; state.step=0; app.dataset.view='cook'; stopTimer(); state.timer.left=0; renderDetail(); }
  if(a==='prev'){ if(state.step>0){ state.step--; stopTimer(); state.timer.left=0; renderDetail(); } }
  if(a==='next'){
    if(state.step === d.steps.length-1){ state.view='done'; app.dataset.view='done'; stopTimer(); state.timer.left=0; }
    else { state.step++; stopTimer(); state.timer.left=0; }
    renderDetail();
  }
  if(a==='timer'){
    if(state.timer.running){
      stopTimer();
      const btn = document.querySelector('.timer');
      const lab = document.querySelector('.timer-label');
      if(btn) btn.classList.remove('run');
      if(lab) lab.textContent = '已暂停';
    } else startTimer();
  }
});

document.getElementById('q').addEventListener('input', e=>{
  state.q = e.target.value.trim();
  renderCards();
});

let tx=0, ty=0;
cardsEl.addEventListener('touchstart', e=>{
  tx = e.touches[0].clientX; ty = e.touches[0].clientY;
}, {passive:true});
cardsEl.addEventListener('touchend', e=>{
  const dx = e.changedTouches[0].clientX - tx;
  const dy = e.changedTouches[0].clientY - ty;
  if(Math.abs(dx) < 60 || Math.abs(dy) > Math.abs(dx)) return;
  const i = CATS.indexOf(state.cat);
  const next = dx < 0 ? Math.min(CATS.length-1, i+1) : Math.max(0, i-1);
  if(next !== i){ state.cat = CATS[next]; renderTabs(); renderCards(); }
}, {passive:true});

/* ---------- 关于弹窗 ---------- */
const modalEl = document.getElementById('modal');
document.getElementById('brandBtn').addEventListener('click', ()=>{
  modalEl.hidden = false;
});
modalEl.addEventListener('click', e=>{
  if(e.target.closest('[data-close]')) modalEl.hidden = true;
});
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape' && !modalEl.hidden) modalEl.hidden = true;
});

/* ---------- 初始化 ---------- */
if(!DRINKS.length){
  document.getElementById('cards').innerHTML =
    `<div class="empty">数据没有加载成功<br><span style="font-size:12px;font-weight:600">检查 data/ 目录下的配方文件</span></div>`;
} else {
  const pool = DRINKS.filter(d=>!d.isBase);
  const src = pool.length ? pool : DRINKS;
  state.id = src[Math.floor(Math.random()*src.length)].id;
  document.getElementById('app').dataset.view = 'list';
  renderTabs();
  renderFilters();
  renderCards();
  renderDetail();
}
