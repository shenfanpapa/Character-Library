# WORKS · 作品库

一个 GitHub 仓库、一个 Railway 网站。首页分为 Character Archive（构成主义）与 PINK NOISE（互动海报）。作品拥有独立链接，进入时只载入当前作品。

## 更新到你现有的 GitHub 仓库

1. 解压 `Works-Library-v2.zip`，打开里面的 `Works-Library` 文件夹。
2. 在 GitHub Desktop 选择现有仓库，使用 **Repository → Show in Explorer** 打开本地仓库。
3. 将 `Works-Library` **里面的内容**复制到仓库根目录，同名文件选择替换。`package.json`、`server.mjs` 和 `Dockerfile` 应直接位于仓库根目录，不能再套一层文件夹。
4. 保留原仓库的隐藏 `.git` 文件夹。不要把整个 ZIP 放进仓库。
5. GitHub Desktop 填写提交说明，例如 `Add works library and improve transitions`，然后 **Commit → Push origin**。
6. 若现有 Railway 服务已连接此仓库且开启自动部署，等待部署成功；否则在 Railway 手动触发部署。

本次整理已经把旧角色说明移到 `docs/characters/`。如果你采用覆盖复制，旧根目录说明文件与旧 `public/archive.js`、`public/archive.css` 可以仍然存在，不影响新版；确认更新成功后可自行移除这些旧文件。

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

旧版 `/#tomo` 等角色书签会自动转到新版对应地址。

## 本地预览

安装 Node.js 22 或更新版本，在项目目录运行：

```sh
npm start
```

打开 `http://localhost:3000`。项目没有第三方运行依赖，无需先执行 `npm install`。不要通过双击 HTML 文件来预览；作品路径与模块脚本需要 HTTP 服务。

验证路由、资源与服务响应：

```sh
npm run check
```

## Railway

- 构建使用随包提供的 Dockerfile，运行 Node.js 24。
- 监听 Railway 提供的 `PORT`，绑定 `0.0.0.0`。
- 健康检查地址 `/healthz`；配置已经写入 `railway.toml`。
- Root Directory 使用项目根目录。如果替换的是原 Character Archive 仓库，通常无需改变原设置。

本包是完整源码，没有替你推送 GitHub 或发布 Railway。

## 这次改动

- 增加作品库首页、构成主义目录、PINK 独立分区和统一作品导航。
- 支持页面过渡、封面轻微视差、键盘访问、浏览器前进后退和独立作品链接。不支持页面过渡的浏览器仍正常导航。
- 保留 DeepSeek 的原始页面和动效代码，其他作品参考其分阶段切换节奏。
- TOMO / AFTERGLOW 使用共享姿态时间轴：背景先动、人物过渡、中段更换文案、收稳。快速连续点击按最终目标状态处理；支持长按暂停、P 键暂停和系统减少动态效果设置。
- TOMO 底栏移出动画场景，使用固定配色和独立布局；调整移动布局与场景内键盘定位。人物首帧绘制完成后才显示 Canvas，避免初始空白帧。
- NOIR 增加连续点击目标状态与更有层次的切换；TERU 保留已有分阶段动画并改善减少动态效果模式；TESTAMENT 调整人物与介绍进场节奏。
- PINK 保留三人轮换、配色、物品盒、原画与纯海报模式。窗口大小改变时不再重复播放名字切换动画。
- 原始图片、嵌入素材及其质量保持不变，没有进行体积压缩或素材删减。

手机尺寸验证在桌面 Edge 模拟环境中完成。TOMO 底栏通过了连续切换中的布局、颜色和透明度检查；实际 iPhone Safari / Android 浏览器工具栏伸缩仍需要真机确认。

素材与人物设定沿用你提供的项目。原有角色来源说明保存在 `docs/characters/`。
