# 视觉与交互参考

查阅日期：2026-09-14。

作品库采用展览图录式层级：大标题、明确网格、大幅作品封面、低干扰元信息。蓝色作为作品库导航色，构成主义与 PINK 的作品本身分别保留各自配色。首页封面使用现有作品素材，没有引入外部人物图像。

参考资料：

- [Awwwards — Typography on a grid](https://www.awwwards.com/inspiration/font-sized-grid-inspired-by-the-first-computers-with-primitive-software)：作为网格与字体层级的视觉参考；没有复制页面源码或素材。
- [MoMA — Constructivism](https://www.moma.org/collection/terms/constructivism)：构成主义的艺术背景。
- [MoMA — Liubov Popova, Painterly Architectonic](https://www.moma.org/collection/works/78444)：几何平面及其构成关系的参考。作品库沿用用户对 Character Archive 的分区命名，不把所有角色原画都等同于历史构成主义作品。
- [Chrome for Developers — Same-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/same-document)：站内路由采用原生 View Transitions，保留不支持时的普通导航，以及减少动态效果时的直接切换。
- [web.dev — How to create high-performance CSS animations](https://web.dev/articles/animations-guide)：首页动效以 transform 和 opacity 为主。角色原有画布与几何动效保持各自实现。

DeepSeek 是主要的项目内部参考。其切换使用几何启动、人物转变、文案更新与最终收稳的顺序，并保存用户连续操作后的目标状态。本次将这个节奏应用到适合的页面，而非重新制作所有角色为相同的三姿态网格动画。DeepSeek 原有的中间姿态与专用网格需要专门素材，不能仅靠更换缓动曲线复用到其他人物。
