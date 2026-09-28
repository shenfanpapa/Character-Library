# WORKS · 作品库 — 分区边界

本项目分四个**互不相干的区**。收到「改 X」的需求时，只改 X 区的文件，不要顺手动其他区。

## 四个区

| 区 | 目录 | 内容 |
| --- | --- | --- |
| **作品库**（外壳） | `public/index.html`、`public/library.js`、`public/library.css`、`public/mark.svg`、`public/covers/` | 首页、Archive 列表页、PINK 分区页、作品导航「目录」浮层、进入首页和分区时的加载动画、路由、封面图 |
| **构成主义**（Archive） | `public/characters/**` | 六个角色页：deepseek、noir、teru、testament、afterglow、tomo |
| **PINK** | `public/pink/**` | PINK NOISE 互动海报，完全自成一体 |
| **SIM** | `public/sim/**` | 菲欧拉人物图鉴，资料来自 SIM 仓库（见下文「SIM 同步」） |

非分区文件（部署、校验与同步）：`server.mjs`、`scripts/check.mjs`、`scripts/build-sim.mjs`、`.github/workflows/sync-sim.yml`、`Dockerfile`、`railway.toml`、`package.json`、`package-lock.json`。

各页面现在采用的风格、界面功能清单和未来规划记录在 [`docs/style-features-roadmap.md`](docs/style-features-roadmap.md)。改动风格或功能后同步更新那份文档。

## 隔离靠什么成立

外壳用 `<iframe>` 装载每个作品（`library.js` 的 `bindViewer`）。角色页、PINK 和 SIM 图鉴各自是独立文档，**CSS 和 JS 不会互相污染，也不会漏进外壳**。所以「改 PINK 的样式会不会影响构成主义」这类担心，在样式和脚本层面不成立。

风险只在文件层面：改错文件，或改了被多处引用的文件。

## 构成主义区内部：`_shared/` 要当心

`public/characters/_shared/` 里的东西一改就波及多个角色，改之前先确认范围：

- `chrome.css` — **六个角色页全部**加载。只负责给外壳的「目录」按钮让出左上角位置。
- `pose-player.js` — **只有 afterglow 和 tomo** 使用（共享姿态动画时间轴）。

只改一个角色，就只动 `public/characters/<角色>/` 里的文件，不要动 `_shared/`。

## 已知的跨文件接缝

新增或删除角色时，角色 id 列表在三处出现，必须同步：

1. `public/library.js` — 顶部 `works[]` 数组（决定列表页和导航）
2. `server.mjs` — `shellRoutes` 里的 key 列表（决定 `/archive/<id>/` 是否可路由）
3. `scripts/check.mjs` — `keys` 数组（决定校验覆盖哪些路由）

PINK 的两个地址同样在这三处出现：`/pink/` 是外壳里的 PINK 分区页，`/pink/noise/` 才装载海报本体 `public/pink/index.html`。SIM 同理：`/sim/` 是分区页，`/sim/codex/` 装载图鉴本体 `public/sim/index.html`。改这些地址时，同步 `library.js` 的 `route()`、`server.mjs` 的 `shellRoutes` 和 `scripts/check.mjs` 的路由列表。

另外首页、Archive 列表和 PINK 分区页的图片都用 `public/covers/` 里的 WebP，外壳不直接引用其他区的图片。这些 WebP 由其他区的原图转成（quality 92，尺寸与原图相同）：

- `deepseek`、`noir`、`teru` ← `public/characters/<id>/cover.png`
- `testament` ← `public/characters/testament/assets/body-weapon.webp`
- `afterglow`、`tomo` ← `public/characters/<id>/assets/a-master.webp`
- `pink-<名字>` ← `public/pink/assets/<名字>-original.png`
- `pink-charm-heart`、`pink-charm-star`、`pink-charm-patch` ← `public/pink/assets/charm-<名字>.png`
- `sim-1`、`sim-2`、`sim-3` ← 由 `scripts/build-sim.mjs` 从 SIM 仓库的图鉴标准版立绘生成（裁到人物、高度不超过 1400、quality 92），人选见脚本里的 `COVER_PICKS`，不要手动替换

**换了这些原图或新增角色时，要重新生成对应的 `public/covers/*.webp`**；新增角色还要让 `works[].image` 指向新文件。

## SIM 同步

SIM 区的资料来自另一个仓库 [shenfanpapa/SIM](https://github.com/shenfanpapa/SIM)，那边会持续更新。

- **手写的**：`public/sim/index.html`、`codex.css`、`codex.js`，改图鉴的样子就改这三个。
- **生成的**：`public/sim/data.js`、`public/sim/p/*.webp`、`public/covers/sim-*.webp`，由 `scripts/build-sim.mjs` 从 SIM 仓库生成，**不要手改**，下次同步会被覆盖。
- **自动同步**：`.github/workflows/sync-sim.yml` 每小时拉 SIM、重新生成；有变化且 `npm run check` 通过才提交到 main。在 GitHub 的 Actions 页面也能手动运行「同步 SIM」。
- **本地手动生成**：`npm install` 后运行 `npm run build:sim -- <SIM 仓库路径>`。`sharp` 只是生成时用的开发依赖，网站运行仍然零依赖。

脚本读取的是 `地点/<城镇>/<设施>/<人物>/` 下的 `档案.md`、`面板.md`、`持有物.md`、`日常.md`、`关系.md`、`经历.md`，**不读 `立绘.md`**（不公开）。立绘取 `立绘/` 里文件名含「图鉴标准版」、`-vN` 版本号最大的一张。新人物只要有 `档案.md` 就会自动出现，不需要改外壳。

## 改完必须跑

```sh
npm run check
```

会起服务器，校验全部路由、每个静态资源、HTML 里的每条引用、SIM 数据里的每张立绘、健康检查与缓存行为。目前 225 项，随 SIM 人物数变化。

注意它**查不到**两类引用：`library.js` 模板字符串里的图片路径，和 ES module 的 `import`。动过这两类东西，要在浏览器里实际打开受影响的页面确认。

## 本地预览

```sh
npm start   # http://localhost:3000
```

无第三方运行依赖，不需要 `npm install`。不要双击 HTML 预览 —— 模块脚本和作品路径需要 HTTP 服务。
