# WORKS · 作品库 — 分区边界

本项目分三个**互不相干的区**。收到「改 X」的需求时，只改 X 区的文件，不要顺手动其他区。

## 三个区

| 区 | 目录 | 内容 |
| --- | --- | --- |
| **作品库**（外壳） | `public/index.html`、`public/library.js`、`public/library.css`、`public/mark.svg` | 首页、Archive 列表页、作品导航「目录」浮层、路由 |
| **构成主义**（Archive） | `public/characters/**` | 六个角色页：deepseek、noir、teru、testament、afterglow、tomo |
| **PINK** | `public/pink/**` | PINK NOISE 互动海报，完全自成一体 |

非分区文件（部署与校验）：`server.mjs`、`scripts/check.mjs`、`Dockerfile`、`railway.toml`、`package.json`。

## 隔离靠什么成立

外壳用 `<iframe>` 装载每个作品（`library.js` 的 `bindViewer`）。角色页和 PINK 各自是独立文档，**CSS 和 JS 不会互相污染，也不会漏进外壳**。所以「改 PINK 的样式会不会影响构成主义」这类担心，在样式和脚本层面不成立。

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

另外 `library.js` 的 `works[].image` 指向构成主义区里的封面文件（`public/characters/<id>/cover.png` 或该角色 `assets/` 里的图）。**删角色素材前先查这里**。

## 改完必须跑

```sh
npm run check
```

会起服务器，校验全部路由、每个静态资源、HTML 里的每条引用、健康检查与缓存行为。目前 135 项。

注意它**查不到**两类引用：`library.js` 模板字符串里的图片路径，和 ES module 的 `import`。动过这两类东西，要在浏览器里实际打开受影响的页面确认。

## 本地预览

```sh
npm start   # http://localhost:3000
```

无第三方运行依赖，不需要 `npm install`。不要双击 HTML 预览 —— 模块脚本和作品路径需要 HTTP 服务。
