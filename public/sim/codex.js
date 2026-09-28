// 菲欧拉人物图鉴：读取 data.js（由 scripts/build-sim.mjs 从 SIM 仓库生成）渲染整本书。
const D = (window.SIM_DATA || { chars: [] }).chars;
const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
const short = p => p.split(/[（＋／]/)[0];
const rankOf = c => ((c.title || '') + (c.job || '')).match(/([A-G]) 级冒险者/)?.[1];
const BASE = ['力量', '防御', '技巧', '体质', '精神', '幸运'], CAP = 70;
const ROMAN = n => { let s = ''; for (const [v, r] of [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]) while (n >= v) { s += r; n -= v; } return s; };
const TABS = ['概要', '档案', '面板', '持有物', '日常', '关系', '经历'];
const book = document.getElementById('book'), index = document.getElementById('index');
let cur = 0, tab = '概要';

function radar(s) {
  const cx = 100, cy = 100, R = 68, n = BASE.length, pt = (i, v) => { const a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + Math.cos(a) * R * v, cy + Math.sin(a) * R * v]; };
  const val = k => s[k] ?? 0;
  const ring = v => BASE.map((_, i) => pt(i, v).map(x => x.toFixed(1)).join(',')).join(' ');
  const poly = BASE.map((k, i) => pt(i, Math.min(1, val(k) / CAP)).map(x => x.toFixed(1)).join(',')).join(' ');
  return `<svg viewBox="0 0 200 200" role="img" aria-label="能力：${BASE.map(k => k + val(k)).join('，')}">
    ${[20, 40, 60].map(v => `<polygon points="${ring(v / CAP)}" fill="none" stroke="#8c6d35" stroke-opacity=".4" stroke-width=".8"/>`).join('')}
    <polygon points="${ring(1)}" fill="none" stroke="#8c6d35" stroke-opacity=".8" stroke-width="1.1"/>
    ${BASE.map((_, i) => `<line x1="${cx}" y1="${cy}" x2="${pt(i, 1)[0]}" y2="${pt(i, 1)[1]}" stroke="#8c6d35" stroke-opacity=".35" stroke-width=".6"/>`).join('')}
    <polygon points="${poly}" fill="#8a2f26" fill-opacity=".26" stroke="#8a2f26" stroke-width="1.3"/>
    ${BASE.map((k, i) => { const [x, y] = pt(i, 1.25); return `<text x="${x}" y="${y + 4}" text-anchor="middle" font-size="11" fill="#352b21" font-family="Noto Serif SC">${k} ${val(k)}</text>`; }).join('')}
    <text x="${cx + 3}" y="${cy - R * 20 / CAP + 3}" font-size="7" fill="#7a6a52">20</text><text x="${cx + 3}" y="${cy - R * 60 / CAP + 3}" font-size="7" fill="#7a6a52">60</text>
  </svg>`;
}

function renderIndex() {
  const pins = ['#9b2f27', '#34425f', '#b08a42', '#3f6b4a'], groups = [];
  D.forEach((c, i) => { const g = groups.at(-1); if (g && g.place === c.place) g.items.push(i); else groups.push({ place: c.place, items: [i] }); });
  index.innerHTML = groups.map(g => `<div class="group"><small>${esc(short(g.place))}</small>${g.items.map(i => { const c = D[i];
    return `<button class="snap" data-i="${i}" aria-current="${i === cur}" aria-label="${esc(c.name)}" style="--r:${((i * 37) % 7 - 3) * 1.1}deg;--pin:${pins[(i * 3) % 4]}">${c.bust ? `<img src="${c.bust}" alt="" loading="lazy">` : `<span class="none">${esc(c.name.slice(0, 1))}</span>`}<span>${esc(c.name)}</span></button>`; }).join('')}</div>`).join('');
}

function summary(c) {
  const s = c.stats, r = rankOf(c);
  return `<div class="stamp">${r ? `${r} 级<small>ADVENTURER</small>` : `镇民<small>RESIDENT</small>`}</div>
    <div class="sec"><h3>DE PERSONA</h3><dl class="fields">
      <dt>性别</dt><dd>${esc(c.sex)}</dd><dt>年龄</dt><dd>${esc(c.age)}</dd><dt>身份</dt><dd>${esc(c.job)}</dd>
      <dt>身高</dt><dd>${esc(c.height)}</dd><dt>家人</dt><dd>${esc(c.family)}</dd></dl></div>
    ${c.persona[0] ? `<div class="sec"><h3>INGENIUM</h3><p class="prose">${esc(c.persona[0])}</p>
      ${c.persona[1] ? `<div class="memo"><span class="tape"></span><b>职员备注</b><p>${esc(c.persona[1])}</p></div>` : ''}</div>` : ''}
    ${Object.keys(s).length ? `<div class="sec"><h3>VIRTUS</h3><div class="virtus">${radar(s)}<div>
      ${c.blessing ? `<div class="bless"><span class="pin"></span><b>加护【${esc(c.blessing)}】</b><p>${esc(c.blessingText)}</p></div>` : ''}
      <div class="hpmp">体力 ${s['体力'] ?? '—'}　魔力 ${s['魔力'] ?? '—'}　（图轴上限 ${CAP}）</div></div></div></div>` : ''}
    ${c.skills.length ? `<div class="sec"><h3>ARTES</h3><ul class="skills">${c.skills.map(k => `<li title="${esc(k.t)}"><span>${esc(k.n)}</span><i>${'◆'.repeat(k.r)}${'◇'.repeat(Math.max(0, 3 - k.r))}</i></li>`).join('')}</ul></div>` : ''}`;
}

function renderBook(anim) {
  const c = D[cur];
  if (!c) { book.innerHTML = '<section class="page l"><p class="empty">图鉴里还没有人物。</p></section><section class="page r"></section>'; return; }
  const tabs = TABS.filter(t => t === '概要' || c.docs[t]);
  if (!tabs.includes(tab)) tab = '概要';
  book.innerHTML = `
  <section class="page l">
    <div class="run"><span>Codex Fiorae</span><span>${esc(short(c.place))}</span></div>
    <div class="regno">No. ${String(cur + 1).padStart(3, '0')}</div>
    <figure class="photo" style="margin-bottom:0">
      <span class="corner tl"></span><span class="corner tr"></span><span class="corner bl"></span><span class="corner br"></span>
      <div class="photo-in">${c.img ? `<img src="${c.img}" alt="${esc(c.name)}的立绘">` : `<p class="sketch">Imago in opere<b>立绘绘制中</b></p>`}</div>
    </figure>
    <div class="plate"><small>PLATE ${ROMAN(cur + 1)}</small><h2>${esc(c.name)}</h2><p>${esc(c.kana)}</p></div>
    <div class="folio">${cur * 2 + 1}</div>
  </section>
  <section class="page r has-tabs ${anim ? 'turn' : ''}">
    <div class="run"><span>${esc(c.race)}${c.cls ? ' · ' + esc(c.cls) : ''}</span><span>${esc(c.lv)}</span></div>
    <div class="tabs" role="tablist" aria-label="记录">${tabs.map(t => `<button class="tab" role="tab" data-tab="${t}" aria-selected="${t === tab}">${t}</button>`).join('')}</div>
    <div role="tabpanel">${tab === '概要' ? summary(c) : `<div class="doc">${c.docs[tab] || '<p class="empty">暂无记录。</p>'}</div>`}</div>
    <div class="folio">${cur * 2 + 2}</div>
  </section>`;
}

function select(i, { anim = true, push = true } = {}) {
  if (!D.length) return;
  cur = (i + D.length) % D.length;
  index.querySelectorAll('.snap').forEach(b => b.setAttribute('aria-current', +b.dataset.i === cur));
  index.querySelector(`.snap[data-i="${cur}"]`)?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
  renderBook(anim);
  const h = '#' + encodeURIComponent(D[cur].name);
  if (push && location.hash !== h) history.replaceState(null, '', h);
}
function fromHash() {
  const name = decodeURIComponent(location.hash.slice(1));
  const i = D.findIndex(c => c.name === name);
  return i;
}

index.addEventListener('click', e => { const b = e.target.closest('.snap'); if (b) select(+b.dataset.i); });
book.addEventListener('click', e => {
  const t = e.target.closest('.tab'); if (t) { tab = t.dataset.tab; renderBook(false); book.querySelector(`.tab[data-tab="${tab}"]`)?.focus(); return; }
  const a = e.target.closest('a[data-go]');
  if (a) { e.preventDefault(); const i = D.findIndex(c => c.name === a.dataset.go); if (i >= 0) { tab = '概要'; select(i); book.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }
});
addEventListener('hashchange', () => { const i = fromHash(); if (i >= 0 && i !== cur) select(i, { push: false }); });
addEventListener('keydown', e => {
  if (e.altKey || e.ctrlKey || e.metaKey || /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName)) return;
  if (e.key === 'ArrowRight') select(cur + 1); else if (e.key === 'ArrowLeft') select(cur - 1);
});

const start = fromHash();
cur = start >= 0 ? start : Math.max(0, D.findIndex(c => c.name === '希露'));
renderIndex(); select(cur, { anim: false, push: start >= 0 });
