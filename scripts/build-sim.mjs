// 把 SIM 仓库（shenfanpapa/SIM）里的人物资料打包成 public/sim/ 的图鉴数据与立绘。
// 用法：node scripts/build-sim.mjs <SIM 仓库路径>   （也可用环境变量 SIM_DIR）
// 生成物：public/sim/data.js、public/sim/p/*.webp、public/covers/sim-*.webp —— 不要手改，改 SIM 后重跑。
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const SRC = resolve(process.argv[2] || process.env.SIM_DIR || '../SIM');
const ROOT = new URL('../', import.meta.url).pathname;
const OUT = join(ROOT, 'public/sim');
const PORTRAITS = join(OUT, 'p');
const COVERS = join(ROOT, 'public/covers');
const COVER_PICKS = ['希露', '莉可', '米娅'];            // 首页和分区页封面上的三个人物；不在了就依次顺延
const DOCS = ['档案', '面板', '持有物', '日常', '关系', '经历'];   // 立绘.md 不公开
const BODY_H = 880, BUST = 240, COVER_H = 1400;

if (!existsSync(join(SRC, '地点'))) { console.error(`找不到 SIM 仓库：${SRC}（需要包含 地点/ 目录）`); process.exit(1); }

const read = f => readFileSync(f, 'utf8').replace(/^﻿/, '').replace(/\r\n?/g, '\n');
const esc = s => String(s ?? '').replace(/[&<>"]/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
const unlink = s => s.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').trim();
const hash = s => createHash('sha1').update(s).digest('hex').slice(0, 10);
const dirs = p => existsSync(p) ? readdirSync(p, { withFileTypes: true }).filter(e => e.isDirectory() && !e.name.startsWith('.')).map(e => e.name).sort() : [];
function section(md, title) {
  const m = md.match(new RegExp(`^## ${title}\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm'));
  return m ? m[1].trim() : '';
}
const fields = md => Object.fromEntries([...md.matchAll(/^- ([^：\n*]+)：(.+)$/gm)].map(([, k, v]) => [k.trim(), unlink(v)]));

// ---------- 找人物：地点/<城镇>/<设施>/<人物>/档案.md ----------
const people = [];
for (const town of dirs(join(SRC, '地点'))) {
  const townDir = join(SRC, '地点', town);
  const order = existsSync(join(townDir, '概况.md'))
    ? [...read(join(townDir, '概况.md')).matchAll(/^- \[[^\]]*\]\(([^/)]+)\//gm)].map(m => decodeURIComponent(m[1])) : [];
  for (const place of dirs(townDir))
    for (const who of dirs(join(townDir, place)))
      if (existsSync(join(townDir, place, who, '档案.md')))
        people.push({ dir: join(townDir, place, who), town, place, rank: order.includes(place) ? order.indexOf(place) : 999 });
}
people.sort((a, b) => a.town.localeCompare(b.town) || a.rank - b.rank || a.place.localeCompare(b.place) || a.dir.localeCompare(b.dir));
if (!people.length) { console.error('SIM 里没有找到任何 档案.md'); process.exit(1); }

// 人物目录 → 名字，供 Markdown 里的人物链接改成图鉴内跳转
const nameOf = new Map();
for (const p of people) {
  const m = read(join(p.dir, '档案.md')).match(/^- 姓名：(.+?)(?:（|$)/m);
  p.name = m ? unlink(m[1]).trim() : p.dir.split(sep).pop();
  nameOf.set(p.dir, p.name);
}

// ---------- 极简 Markdown → HTML（标题、段落、列表、表格、引用、代码块、粗体、链接） ----------
function inline(text, baseDir) {
  const parts = [];
  let s = text.replace(/\[([^\]]*)\]\(([^)]*)\)/g, (_, label, href) => {
    const target = dirname(resolve(baseDir, decodeURIComponent(href.split('#')[0])));
    const name = nameOf.get(target);
    parts.push(name && target !== baseDir ? `<a href="#${encodeURIComponent(name)}" data-go="${esc(name)}">${esc(label)}</a>` : esc(label));
    return `\u0000${parts.length - 1}\u0000`;
  });
  s = esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<i>$2</i>').replace(/`([^`]+)`/g, '<code>$1</code>');
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => parts[+i]);
}
function markdown(md, baseDir) {
  const lines = md.split('\n'), out = [];
  let i = 0;
  // 去掉文件头：一级标题和「相关：」导航行
  while (i < lines.length && (/^# /.test(lines[i]) || /^相关：/.test(lines[i]) || !lines[i].trim())) i++;
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (/^```/.test(l)) { const buf = []; i++; while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]); i++; out.push(`<pre>${esc(buf.join('\n'))}</pre>`); continue; }
    const h = l.match(/^(#{2,6}) (.+)/);
    if (h) { out.push(`<h${Math.min(6, h[1].length + 2)}>${inline(h[2], baseDir)}</h${Math.min(6, h[1].length + 2)}>`); i++; continue; }
    if (/^\|/.test(l)) {
      const rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = r => r.replace(/^\||\|\s*$/g, '').split('|').map(c => c.trim());
      const body = rows.filter((r, k) => k !== 1 || !/^\|[\s:|-]+\|?\s*$/.test(r));
      out.push(`<div class="md-table"><table><thead><tr>${cells(body[0]).map(c => `<th>${inline(c, baseDir)}</th>`).join('')}</tr></thead><tbody>${body.slice(1).map(r => `<tr>${cells(r).map(c => `<td>${inline(c, baseDir)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if (/^\s*([-*]|\d+\.) /.test(l)) {
      const ordered = /^\s*\d+\./.test(l), items = [];
      while (i < lines.length && /^\s*([-*]|\d+\.) /.test(lines[i])) {
        const depth = lines[i].match(/^\s*/)[0].length >= 2 ? ' class="sub"' : '';
        items.push(`<li${depth}>${inline(lines[i].replace(/^\s*([-*]|\d+\.) /, ''), baseDir)}</li>`); i++;
      }
      out.push(`<${ordered ? 'ol' : 'ul'}>${items.join('')}</${ordered ? 'ol' : 'ul'}>`); continue;
    }
    if (/^> ?/.test(l)) { const buf = []; while (i < lines.length && /^> ?/.test(lines[i])) buf.push(lines[i++].replace(/^> ?/, '')); out.push(`<blockquote>${inline(buf.join(' '), baseDir)}</blockquote>`); continue; }
    const buf = []; while (i < lines.length && lines[i].trim() && !/^(#{2,6} |\||```|>|\s*([-*]|\d+\.) )/.test(lines[i])) buf.push(lines[i++].trim());
    out.push(`<p>${inline(buf.join(''), baseDir)}</p>`);
  }
  return out.join('');
}

// ---------- 立绘：取「图鉴标准版」里版本号最大的一张（没有 -vN 视为 v1） ----------
const version = f => +(f.match(/-v(\d+)\.png$/i)?.[1] || 1);
function pickPortrait(dir) {
  const d = join(dir, '立绘');
  if (!existsSync(d)) return null;
  const c = readdirSync(d).filter(f => /图鉴标准版.*\.png$/i.test(f)).sort((a, b) => version(a) - version(b) || a.localeCompare(b));
  return c.length ? join(d, c.at(-1)) : null;
}
async function alphaBox(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let x0 = info.width, y0 = info.height, x1 = 0, y1 = 0;
  for (let y = 0; y < info.height; y += 2) for (let x = 0; x < info.width; x += 2) {
    if (data[(y * info.width + x) * 4 + 3] > 16) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  if (x1 <= x0) return { left: 0, top: 0, width: info.width, height: info.height, W: info.width, H: info.height };
  const pad = 30, left = Math.max(0, x0 - pad), top = Math.max(0, y0 - pad);
  return { left, top, width: Math.min(info.width, x1 + pad) - left, height: Math.min(info.height, y1 + pad) - top, W: info.width, H: info.height, y0, cx: (x0 + x1) >> 1, bh: y1 - y0 };
}

const crop = ({ left, top, width, height }) => ({ left, top, width, height });

// ---------- 逐个人物 ----------
mkdirSync(PORTRAITS, { recursive: true });
const written = new Set(), chars = [];
for (const p of people) {
  const md = read(join(p.dir, '档案.md'));
  const kv = fields(md);
  const [, name = p.name, kana = ''] = (kv['姓名'] || '').match(/(.+?)（(.+?)）/) || [];
  const look = Object.fromEntries([...section(md, '外貌').matchAll(/^- \*\*(.+?)\*\*：(.+)$/gm)].map(([, k, v]) => [k, unlink(v)]));
  const persona = section(md, '性格').split(/\n\s*\n/).map(s => unlink(s).replace(/\*\*/g, '').trim()).filter(Boolean).slice(0, 2);
  const pm = existsSync(join(p.dir, '面板.md')) ? read(join(p.dir, '面板.md')) : '';
  const pkv = fields(pm);
  const stats = {};
  const block = pm.match(/```\n([\s\S]*?)```/);
  if (block) for (const [, k, v] of block[1].matchAll(/(\S+)\s+(\d+)(?:\s*\/\s*\d+)?/g)) stats[k] = +v;
  const g = section(pm, '世界加护').match(/【(.+?)】[^：\n]*：(.+)/);
  const skills = [...pm.matchAll(/^\| (\[?【.+?)\s*\| (\+*)\s*\| (.+?) \|$/gm)].map(([, n, r, t]) => ({ n: unlink(n).replace(/[【】]/g, ''), r: r.length, t: unlink(t) }));
  const docs = {};
  for (const d of DOCS) if (existsSync(join(p.dir, d + '.md'))) docs[d] = markdown(read(join(p.dir, d + '.md')), p.dir);

  const c = { name, kana, sex: kv['性别'] || '', age: kv['年龄'] || '', race: kv['种族'] || '', job: kv['职业／身份'] || '', town: p.town, place: p.place,
    family: kv['家庭关系'] || '', height: look['身高'] || '', persona, lv: pkv['等级'] || '', cls: pkv['职业'] || '', title: pkv['称号'] || '',
    stats, blessing: g ? g[1] : '', blessingText: g ? unlink(g[2]).replace(/\*\*/g, '') : '', skills, img: '', bust: '', docs };

  const src = pickPortrait(p.dir);
  if (src) {
    const id = hash(p.town + '/' + p.place + '/' + name), box = await alphaBox(src);
    const body = `p/${id}.webp`, bust = `p/${id}-b.webp`;
    await sharp(src).extract(crop(box)).resize({ height: BODY_H, withoutEnlargement: true }).webp({ quality: 86 }).toFile(join(OUT, body));
    if (box.bh) {
      const side = Math.round(box.bh * .3), left = Math.max(0, Math.min(box.W - side, box.cx - (side >> 1))), top = Math.max(0, box.y0 - 10);
      await sharp(src).extract({ left, top, width: side, height: Math.min(side, box.H - top) }).resize(BUST, BUST, { fit: 'cover', position: 'top' }).webp({ quality: 86 }).toFile(join(OUT, bust));
    } else await sharp(src).resize(BUST, BUST, { fit: 'cover', position: 'top' }).webp({ quality: 86 }).toFile(join(OUT, bust));
    written.add(body.slice(2)); written.add(bust.slice(2));
    c.img = body; c.bust = bust; c.src = src;
  }
  chars.push(c);
}

// 清掉已经不用的旧立绘
for (const f of readdirSync(PORTRAITS)) if (!written.has(f)) rmSync(join(PORTRAITS, f));

// ---------- 封面（外壳首页、SIM 分区页用） ----------
const withArt = chars.filter(c => c.src);
const picks = [...COVER_PICKS.map(n => withArt.find(c => c.name === n)).filter(Boolean), ...withArt].filter((c, i, a) => a.indexOf(c) === i).slice(0, 3);
for (let i = 0; i < 3; i++) {
  const c = picks[i] || picks[0], dest = join(COVERS, `sim-${i + 1}.webp`);
  if (!c) continue;
  const box = await alphaBox(c.src);
  await sharp(c.src).extract(crop(box)).resize({ height: COVER_H, withoutEnlargement: true }).webp({ quality: 92 }).toFile(dest);
}

// ---------- 数据 ----------
const data = chars.map(({ src, ...c }) => c);
writeFileSync(join(OUT, 'data.js'), `// 由 scripts/build-sim.mjs 从 SIM 仓库生成，不要手改。\nwindow.SIM_DATA=${JSON.stringify({ covers: picks.map(c => c.name), chars: data })};\n`);
console.log(`SIM：${data.length} 个人物，${withArt.length} 张立绘 → ${relative(ROOT, OUT)}`);
