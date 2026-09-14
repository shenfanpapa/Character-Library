# WORKS · 作品库

一个交互作品库网站。首页分为 Character Archive（构成主义，六件角色作品）与 PINK NOISE（互动海报）。每件作品有独立链接，进入时只载入当前作品。

无第三方运行依赖，Node.js 静态服务器 + 原生 JS，部署在 Railway。

## 项目结构

分三个互不相干的区。**改动前请先读 [`CLAUDE.md`](CLAUDE.md)**，那里写了分区边界和跨文件接缝。

```
public/
  index.html  library.js  library.css  mark.svg   ← 作品库（外壳：首页 / 列表 / 导航 / 路由）
  characters/                                     ← 构成主义（Archive）
    _shared/        chrome.css  pose-player.js       共享，改动波及多个角色
    deepseek/  noir/  teru/  testament/  afterglow/  tomo/
  pink/                                           ← PINK NOISE（完全自成一体）
server.mjs        静态服务器与路由
scripts/check.mjs 路由与资源校验
docs/             设计说明与角色来源
```

外壳用 `<iframe>` 装载每件作品，各作品是独立文档，样式与脚本互不干扰。

## 网站地址

| 地址 | 内容 |
| --- | --- |
| `/` | 作品库首页 |
| `/archive/` | 构成主义分区，六件作品 |
| `/archive/deepseek/` | DeepSeek |
| `/archive/noir/` | NOIR |
| `/archive/teru/` | TERU |
| `/archive/testament/` | TESTAMENT |
| `/archive/afterglow/` | AFTERGLOW |
| `/archive/tomo/` | TOMO |
| `/pink/` | PINK NOISE |

旧版 `/#tomo` 等角色书签会自动转到对应地址。

## 本地预览

需要 Node.js 22 或更新版本。不需要 `npm install`。

```sh
npm start        # http://localhost:3000
```

不要双击 HTML 文件预览 —— 作品路径与模块脚本需要 HTTP 服务。

## 校验

```sh
npm run check
```

起服务器校验全部路由、每个静态资源、HTML 里的每条引用、健康检查与缓存行为。

它查不到 `library.js` 模板字符串里的图片路径和 ES module 的 `import`；动过这两类引用要在浏览器里实际打开受影响页面确认。

## 作品交互约定

- 支持页面过渡、浏览器前进后退、键盘访问；不支持 View Transitions 的浏览器正常降级为普通导航。
- 角色页可长按或按 `P` 暂停动效。
- 全站遵循系统的「减少动态效果」设置。

## Railway 部署

- 使用仓库内的 Dockerfile 构建，运行 Node.js 24。
- 监听 Railway 提供的 `PORT`，绑定 `0.0.0.0`。
- 健康检查地址 `/healthz`，配置已写入 `railway.toml`。
- Root Directory 使用项目根目录。

素材与人物设定沿用原项目，角色来源说明见 `docs/characters/`。
