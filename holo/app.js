// TERU · 全息闪卡 —— 只保留卡片本体：3D 渲染、拖动倾斜、待机摇摆、镭射质感，
// 外加三项控制：四张卡切换、正面/背面、卡面材质。
// 源自 shenfanpapa/TERU-CARD 的 web/app.js；改完运行 holo/build.sh 重新打包到 public/holo/app.js。
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const CARDS = {
  miko: { no: "01", name: "巫女", subtitle: "三神御主" },
  parasol: { no: "02", name: "蓝伞", subtitle: "羁绊皮肤" },
  nurse: { no: "03", name: "护士", subtitle: "小护士" },
  idol: { no: "04", name: "歌姬", subtitle: "魔旅歌姬" },
};
const LAYERS = ["subject", "background", "text", "lineart", "back"];
const asset = (id, name) => `./cards/${id}/${name}.webp`;
// 景深与构图固定为调好的一组值（原版景深面板已去掉）。
const PARAMS = { scale: 1, depth: 0, fxDepth: 0.8, bgDepth: -0.4, foil: 0.52 };
const FINISH = { pearl: 0, silver: 1, original: 2, gold: 3 };
const FINISH_NAME = { pearl: "珠光", silver: "银箔", gold: "烫金", original: "原画" };
const BACKGROUND = "#f3f0ff";

const $ = (id) => document.getElementById(id);
const stage = $("stage");
const media = matchMedia("(prefers-reduced-motion: reduce)");
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0.1, 100);
camera.position.set(0, 0, 20);
const inverse = new THREE.Matrix4();
let renderer, root, uniforms, shadow, fallback, noticeTimer;
let lastTime = 0,
  elapsed = 0,
  auto = false,
  flipped = false,
  dragging = false,
  finish = "gold",
  current = null,
  loadToken = 0;
let targetX = -0.035,
  targetY = -0.15,
  lastPointer = { x: 0, y: 0 };

const vertex = `
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - uv.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const common = `
precision highp float;
varying vec2 vUv;
uniform float uTime, uFoil, uScale, uDepth, uBgDepth, uFinish;
uniform vec3 uView;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float inside(vec2 p) { return step(0.,p.x)*step(0.,p.y)*step(p.x,1.)*step(p.y,1.); }
vec2 parallax(vec2 uv, float depth) {
  return uv + uView.xy / max(abs(uView.z), .4) * depth * .10;
}
vec3 spectrum(float phase) {
  return .66 + .25 * cos(6.28318 * (phase + vec3(0., .33, .67)));
}
// Only "original" (uFinish ~ 2) disables the foil; pearl/silver/gold all use it.
float strength() { return abs(uFinish - 2.0) < 0.05 ? 0. : uFoil; }
vec3 film(vec2 uv) {
  float phase = uv.x * .85 + uv.y * .55 + uView.x * 1.5 - uView.y * .9;
  if (uFinish > 2.5) {
    // 烫金 (gold foil): warm gold laminate that shifts with the viewing angle.
    float hi = 0.5 + 0.5 * sin(phase * 6.28318);
    float glint = 0.5 + 0.5 * cos((phase + 0.25) * 6.28318);
    vec3 deep = vec3(.72, .50, .20);
    vec3 bright = vec3(1.00, .90, .60);
    return mix(deep, bright, hi * .7 + glint * .3);
  }
  vec3 color = spectrum(phase);
  return mix(color, vec3(dot(color,vec3(.2126,.7152,.0722))), step(.5,uFinish));
}
float sweep(vec2 uv) {
  return pow(.5+.5*sin((uv.x*.72+uv.y*.45+uView.x*1.2+uView.y*.6)*6.283),10.);
}
`;
const frontFragment =
  common +
  `
uniform sampler2D tSubject, tBackground, tText, tLine;
void main() {
  vec2 uv = vUv;
  vec2 su = (parallax(uv,uDepth)-.5)*uScale+.5;
  vec2 bu = parallax(uv,uBgDepth);
  vec4 subject = texture2D(tSubject,clamp(su,0.,1.));
  subject.a *= inside(su);
  vec3 bg = texture2D(tBackground,clamp(bu,0.,1.)).rgb;
  vec3 col = mix(bg,subject.rgb,subject.a);
  if (uFinish > 2.5) col = col * vec3(1.02, .95, .78) + vec3(.05, .012, 0.0);
  vec3 foil = film(uv);
  float amount = strength();
  float luminance = dot(col,vec3(.2126,.7152,.0722));
  float band = sweep(uv);
  // Laminate changes with the card-local viewing direction; black print stays readable.
  float goldBoost = uFinish > 2.5 ? 1.7 : 1.0;
  col *= 1. - amount * .21 * (1.-foil) * (.2 + band*.8);
  col += foil * amount * band * goldBoost * (.065 + .11*(1.-luminance));
  float edge = 1.-smoothstep(.015,.06,min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y)));
  col = mix(col,foil*.75+.21,edge*amount*(uFinish > 2.5 ? .42 : .3));
  vec2 cell = floor(uv*vec2(480.,720.));
  float flake = step(.994,hash(cell))*pow(.5+.5*sin(hash(cell+8.)*30.+uView.x*20.+uTime*.6),10.);
  col += foil*flake*amount*.13;
  float line = 1.-smoothstep(.06,.25,texture2D(tLine,clamp(su,0.,1.)).r);
  col += line*inside(su)*subject.a*band*amount*.055;
  vec4 text = texture2D(tText,uv);
  col = mix(col,text.rgb,text.a);
  gl_FragColor = vec4(pow(clamp(col,0.,1.),vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`;
const edgeFragment =
  common +
  `
void main() {
  vec3 col = mix(vec3(.66,.69,.67),film(vUv)*.6+.35,strength()*.7);
  gl_FragColor=vec4(pow(col,vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`;
const backFragment =
  common +
  `
uniform sampler2D tBack;
void main() {
  vec2 uv=vec2(1.-vUv.x,vUv.y);
  vec4 art=texture2D(tBack,uv);
  vec3 col=vec3(.956,.961,.946);
  col*=1.-strength()*.12*(1.-film(vUv));
  col+=film(vUv)*sweep(vUv)*strength()*.055;
  col=mix(col,art.rgb,art.a);
  gl_FragColor=vec4(pow(clamp(col,0.,1.),vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`;

function notice(message) {
  clearTimeout(noticeTimer);
  $("notice").textContent = message;
  $("notice").hidden = false;
  noticeTimer = setTimeout(() => ($("notice").hidden = true), 2600);
}
function addShadow() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const ctx = c.getContext("2d");
  const grad = ctx.createRadialGradient(128, 128, 6, 128, 128, 128);
  grad.addColorStop(0, "rgba(29,35,25,0.13)");
  grad.addColorStop(0.4, "rgba(29,35,25,0.055)");
  grad.addColorStop(1, "rgba(29,35,25,0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.NoColorSpace;
  shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(8.8, 11.8),
    new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false }),
  );
  shadow.position.set(0.28, -0.48, -0.5);
  scene.add(shadow);
}
function createRenderer() {
  const options = { antialias: true, alpha: false };
  try {
    return new THREE.WebGLRenderer({ ...options, powerPreference: "high-performance" });
  } catch {
    // Some setups reject "high-performance" but accept the default.
    return new THREE.WebGLRenderer({ ...options, failIfMajorPerformanceCaveat: false });
  }
}
function initialCard() {
  const id = new URLSearchParams(location.search).get("card");
  return id in CARDS ? id : "miko";
}
async function init() {
  const first = initialCard();
  try {
    renderer = createRenderer();
  } catch (error) {
    // No WebGL at all (browser hardware acceleration off): CSS-3D card instead.
    startFallback(first, error);
    return;
  }
  renderer.setClearColor(BACKGROUND, 1);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.domElement.setAttribute("aria-hidden", "true");
  stage.append(renderer.domElement);
  const blank = new THREE.DataTexture(new Uint8Array([0, 0, 0, 0]), 1, 1);
  blank.needsUpdate = true;
  uniforms = {
    tSubject: { value: blank },
    tBackground: { value: blank },
    tText: { value: blank },
    tLine: { value: blank },
    tBack: { value: blank },
    uTime: { value: 0 },
    uView: { value: new THREE.Vector3(0, 0, 1) },
    uFoil: { value: PARAMS.foil },
    uScale: { value: PARAMS.scale },
    uDepth: { value: PARAMS.depth },
    uBgDepth: { value: PARAMS.bgDepth },
    uFinish: { value: FINISH[finish] },
  };
  const material = (fragmentShader) =>
    new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader });
  const materials = {
    web_front: material(frontFragment),
    web_back: material(backFragment),
    web_edge: material(edgeFragment),
    web_gold: new THREE.MeshBasicMaterial({ color: "#34105d" }),
  };
  const [gltf] = await Promise.all([
    new GLTFLoader().loadAsync("./assets/card.glb"),
    loadCard(first),
  ]);
  root = new THREE.Group();
  root.add(gltf.scene);
  scene.add(root);
  let faces = 0;
  gltf.scene.traverse((ob) => {
    if (!ob.isMesh) return;
    const role = ob.material?.name;
    // The model also carries relief planes (subject/effects/text); composite cards don't use them.
    if (["web_subject", "web_effects", "web_text"].includes(role)) {
      ob.visible = false;
      return;
    }
    if (role === "web_front") faces++;
    ob.material = materials[role] || materials.web_edge;
  });
  if (!faces) throw Error("卡片模型缺少正面材质");
  addShadow();
  setupControls();
  new ResizeObserver(resize).observe(stage);
  resize();
  renderer.compile(scene, camera);
  renderer.render(scene, camera);
  const broken = (renderer.info.programs || []).some(
    (p) => p.diagnostics && !p.diagnostics.runnable,
  );
  if (broken) {
    renderer.dispose();
    renderer.domElement.remove();
    renderer = null;
    startFallback(current, new Error("当前设备无法显示卡面材质"));
    return;
  }
  $("loading").remove();
  // 开场：卡片从下方旋转着飞入，配合「READY? PARTY!」字样（减弱动效时直接就位）。
  if (media.matches) root.rotation.set(targetX, targetY, 0);
  else {
    root.rotation.set(0.5, targetY - Math.PI * 2, 0);
    root.position.y = -9;
    document.body.classList.add("is-intro");
    setTimeout(() => document.body.classList.remove("is-intro"), 1900);
  }
  setFinish(finish);
  setAuto(!media.matches);
  renderer.setAnimationLoop(animate);
  enableControls();
  window.__holo = { ready: true, getState: () => ({ card: current, flipped, finish, auto }) };
}
// Swap the five card textures in place; the model, materials and view stay as they are.
async function loadCard(id) {
  const token = ++loadToken;
  markCard(id);
  const loader = new THREE.TextureLoader();
  const textures = await Promise.all(LAYERS.map((name) => loader.loadAsync(asset(id, name))));
  if (token !== loadToken) {
    textures.forEach((t) => t.dispose());
    return;
  }
  const keys = { subject: "tSubject", background: "tBackground", text: "tText", lineart: "tLine", back: "tBack" };
  LAYERS.forEach((name, i) => {
    const t = textures[i];
    t.colorSpace = THREE.NoColorSpace;
    t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const old = uniforms[keys[name]].value;
    uniforms[keys[name]].value = t;
    if (old.isTexture && !old.isDataTexture) old.dispose();
  });
  current = id;
}
function markCard(id) {
  document.querySelectorAll("[data-card]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.card === id)),
  );
  const card = CARDS[id];
  $("card-name").textContent = `${card.no} / ${card.subtitle}`;
  document.title = `照 · ${card.subtitle} | 吉星派对全息闪卡`;
  try {
    history.replaceState(null, "", `?card=${id}`);
  } catch {}
}
function enableControls() {
  document.querySelectorAll("button[disabled]").forEach((b) => (b.disabled = false));
}
function resize() {
  if (!renderer) return;
  const width = stage.clientWidth,
    height = stage.clientHeight;
  const aspect = width / height;
  const half = Math.max(5.45, 4.5 / aspect);
  camera.left = -half * aspect;
  camera.right = half * aspect;
  camera.top = half;
  camera.bottom = -half;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
function setAuto(value) {
  auto = value;
}
function setFinish(value) {
  finish = value;
  if (uniforms) uniforms.uFinish.value = FINISH[value];
  document.querySelectorAll("[data-finish]").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.finish === value)),
  );
  $("finish-name").textContent = FINISH_NAME[value];
}
function faceLabels() {
  $("front").setAttribute("aria-pressed", String(!flipped));
  $("back").setAttribute("aria-pressed", String(flipped));
}
function flip(value = !flipped) {
  flipped = value;
  setAuto(false);
  targetY = flipped ? Math.PI : 0;
  targetX = 0;
  faceLabels();
}
function bindButtons({ onCard, onFace, onFinish }) {
  document.querySelectorAll("[data-card]").forEach((b) => (b.onclick = () => onCard(b.dataset.card)));
  $("front").onclick = () => onFace(false);
  $("back").onclick = () => onFace(true);
  document.querySelectorAll("[data-finish]").forEach((b) => (b.onclick = () => onFinish(b.dataset.finish)));
}
function setupControls() {
  bindButtons({
    onCard: (id) => {
      if (id === current) return;
      loadCard(id)
        .then(() => {
          // 换卡像抽了一张新手牌：整张卡转一圈再停下。
          if (!media.matches && current === id) root.rotation.y -= Math.PI * 2;
        })
        .catch(() => notice("这张卡暂时无法加载，请重试"));
    },
    onFace: flip,
    onFinish: setFinish,
  });
  stage.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    dragging = true;
    setAuto(false);
    lastPointer = { x: e.clientX, y: e.clientY };
    stage.setPointerCapture(e.pointerId);
    stage.classList.add("dragging");
    stage.focus({ preventScroll: true });
  });
  stage.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const base = flipped ? Math.PI : 0;
    targetY = THREE.MathUtils.clamp(targetY + (e.clientX - lastPointer.x) * 0.006, base - 0.65, base + 0.65);
    targetX = THREE.MathUtils.clamp(targetX + (e.clientY - lastPointer.y) * 0.004, -0.36, 0.36);
    lastPointer = { x: e.clientX, y: e.clientY };
  });
  const release = () => {
    dragging = false;
    stage.classList.remove("dragging");
  };
  ["pointerup", "pointercancel", "lostpointercapture"].forEach((type) => stage.addEventListener(type, release));
  stage.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "f", " "].includes(key)) return;
    e.preventDefault();
    if (key === " ") return setAuto(!auto);
    if (key === "f") return flip();
    setAuto(false);
    const base = flipped ? Math.PI : 0;
    if (key === "ArrowLeft") targetY -= 0.08;
    if (key === "ArrowRight") targetY += 0.08;
    if (key === "ArrowUp") targetX -= 0.06;
    if (key === "ArrowDown") targetX += 0.06;
    targetY = THREE.MathUtils.clamp(targetY, base - 0.65, base + 0.65);
    targetX = THREE.MathUtils.clamp(targetX, -0.36, 0.36);
  });
  media.addEventListener("change", () => media.matches && setAuto(false));
  renderer.domElement.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    renderer.setAnimationLoop(null);
    notice("图形显示已暂停，请刷新页面恢复");
  });
}
function animate(now) {
  const dt = Math.min((now - lastTime) / 1000, 0.06) || 0;
  lastTime = now;
  if (document.hidden) return;
  if (!media.matches || auto) elapsed += dt;
  if (auto) {
    targetY = Math.sin(elapsed * 0.55) * 0.42 - 0.025;
    targetX = Math.sin(elapsed * 0.53) * 0.055 - 0.018;
  }
  const ease = media.matches ? 1 : 1 - Math.exp(-dt * 8);
  root.rotation.x += (targetX - root.rotation.x) * ease;
  root.rotation.y += (targetY - root.rotation.y) * ease;
  root.position.y += (0 - root.position.y) * ease;
  root.updateMatrixWorld(true);
  uniforms.uView.value.copy(camera.position).applyMatrix4(inverse.copy(root.matrixWorld).invert()).normalize();
  uniforms.uTime.value = media.matches && !auto ? 0 : elapsed;
  shadow.scale.x = 1 - Math.abs(Math.sin(root.rotation.y)) * 0.14;
  renderer.render(scene, camera);
}

// Layered CSS-3D card — used only when WebGL is unavailable. Layers float at
// their own depths, the card tilts with the pointer, sways when idle and flips.
function startFallback(id, error) {
  console.warn("[holo-card] WebGL unavailable, using CSS-3D fallback:", error);
  $("loading")?.remove();
  const roleZ = { background: -48, subject: -8, lineart: 24, text: 28 };
  const wrap = document.createElement("div");
  wrap.className = "fallback3d";
  wrap.innerHTML =
    '<div class="flipper3d"><div class="card3d"><div class="face3d front3d"></div><div class="face3d back3d"></div></div></div>';
  const flipper = wrap.querySelector(".flipper3d"),
    card = wrap.querySelector(".card3d"),
    front = wrap.querySelector(".front3d"),
    back = wrap.querySelector(".back3d");
  stage.append(wrap);
  const build = (cardId) => {
    current = cardId;
    markCard(cardId);
    front.replaceChildren();
    for (const name of ["background", "subject", "lineart", "text"]) {
      const layer = document.createElement("div");
      layer.className = "layer3d";
      layer.style.transform = `translateZ(${roleZ[name]}px)`;
      // Line art is white-based: multiply keeps only the dark contour strokes.
      if (name === "lineart") layer.style.mixBlendMode = "multiply";
      const img = document.createElement("img");
      img.src = asset(cardId, name);
      img.alt = name === "subject" ? `照 · ${CARDS[cardId].subtitle}` : "";
      layer.append(img);
      front.append(layer);
    }
    const foil = document.createElement("div");
    foil.className = "foil3d";
    front.append(foil);
    front.style.setProperty("--foil-amount", PARAMS.foil);
    back.style.background = `url(${asset(cardId, "back")}) center / cover`;
  };
  const fallbackFinish = (value) => {
    front.classList.remove(...Object.keys(FINISH).map((f) => "finish-" + f));
    front.classList.add("finish-" + value);
    setFinish(value);
  };
  let tx = -0.03,
    ty = -0.06,
    curX = 0,
    curY = 0,
    curFlip = 0,
    flipTarget = 0,
    lastMove = 0;
  stage.addEventListener("pointermove", (e) => {
    const r = stage.getBoundingClientRect();
    tx = Math.max(-0.5, Math.min(0.5, ((e.clientY - r.top) / r.height - 0.5) * 0.9));
    ty = Math.max(-0.5, Math.min(0.5, ((e.clientX - r.left) / r.width - 0.5) * 1.1));
    lastMove = performance.now();
    const c = card.getBoundingClientRect();
    front.style.setProperty("--mx", Math.round(((e.clientX - c.left) / c.width) * 100) + "%");
    front.style.setProperty("--my", Math.round(((e.clientY - c.top) / c.height) * 100) + "%");
  });
  stage.addEventListener("pointerleave", () => (lastMove = 0));
  const frame = (now) => {
    if (!media.matches && now - lastMove > 1500) {
      const t = now / 1000;
      tx = Math.sin(t * 0.7) * 0.07 + 0.05;
      ty = Math.sin(t * 0.55) * 0.11 - 0.18;
    }
    curX += (tx - curX) * 0.08;
    curY += (ty - curY) * 0.08;
    curFlip += (flipTarget - curFlip) * 0.12;
    flipper.style.transform = `rotateX(${curX.toFixed(4)}rad) rotateY(${curY.toFixed(4)}rad)`;
    card.style.transform = `rotateY(${curFlip.toFixed(4)}rad)`;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  bindButtons({
    onCard: build,
    onFace: (value) => {
      flipped = value;
      flipTarget = flipped ? Math.PI : 0;
      faceLabels();
    },
    onFinish: fallbackFinish,
  });
  build(id);
  fallbackFinish(finish);
  enableControls();
  notice("浏览器未开启 WebGL：已用轻量 3D 模式显示");
  window.__holo = { ready: false, fallback3d: true, error: String(error) };
}

function fail(message) {
  const loading = $("loading");
  if (!loading) return;
  loading.classList.add("error");
  loading.setAttribute("role", "alert");
  const msg = document.createElement("span");
  msg.textContent = message;
  const retry = document.createElement("button");
  retry.textContent = "重新加载";
  retry.onclick = () => location.reload();
  loading.replaceChildren(msg, retry);
  window.__holo = { ready: false, error: message };
}
let settled = false;
Promise.race([
  init().then(() => (settled = true)),
  new Promise((_, reject) => setTimeout(() => reject(new Error("卡片加载超时，请检查网络或刷新重试")), 12000)),
]).catch((error) => {
  if (settled) return;
  console.error(error);
  fail("卡片暂时无法加载。\n" + error.message);
});
