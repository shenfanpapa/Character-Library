const tray=$('#toy-tray'),toyToggle=$('#toy-toggle');
function openTray(on){tray.classList.toggle('open',on);tray.inert=!on;toyToggle.setAttribute('aria-expanded',on);toyToggle.setAttribute('aria-label',on?'关闭物品盒':'打开物品盒');if(on)requestAnimationFrame(()=>{if(tray.classList.contains('open'))tray.querySelector('[data-toy]:not(:disabled),#tray-close').focus();});else toyToggle.focus();}
toyToggle.onclick=()=>openTray(!tray.classList.contains('open'));$('#tray-close').onclick=()=>openTray(false);
document.addEventListener('pointerdown',e=>{if(tray.classList.contains('open')&&!tray.contains(e.target)&&!toyToggle.contains(e.target)){tray.classList.remove('open');tray.inert=true;toyToggle.setAttribute('aria-expanded','false');toyToggle.setAttribute('aria-label','打开物品盒');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&tray.classList.contains('open')){e.preventDefault();openTray(false);}});
$('#view').addEventListener('click',()=>{tray.classList.remove('open');tray.inert=true;toyToggle.setAttribute('aria-expanded','false');});
const englishNames=['SASAKI SAKU','MAKAINO RIRIMU','SHIINA YUIKA'];
let nameAnimation,navAnimation;
function updateSelection(){
  const name=$('#character-name'),mark=$('#character-mark'),nav=document.querySelector('nav');
  name.textContent=['笹木咲','魔界ノりりむ','椎名唯華'][selected];mark.textContent=englishNames[selected];
  nameAnimation?.cancel();navAnimation?.cancel();
  if(!reduced.matches)nameAnimation=$('.nameplate').animate([{opacity:.3,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:350,easing:'ease-out'});
  const a=avatars[selected];nav.style.setProperty('--active-x',`${a.offsetLeft+a.offsetWidth/2-24.5}px`);
  poster.dataset.geometry=selected;
}
document.addEventListener('characterchange',updateSelection);let navResize=0;window.addEventListener('resize',()=>{cancelAnimationFrame(navResize);navResize=requestAnimationFrame(()=>{const a=avatars[selected];document.querySelector('nav').style.setProperty('--active-x',`${a.offsetLeft+a.offsetWidth/2-24.5}px`);});});updateSelection();
document.querySelectorAll('[data-toy]').forEach(el=>el.innerHTML=toyArtwork(el.dataset.toy));
const geometryButton=document.createElement('button');geometryButton.id='geometry';geometryButton.className='icon';geometryButton.setAttribute('aria-label','切换几何形状');geometryButton.title='几何形变';geometryButton.innerHTML='<span class="geo-icon" aria-hidden="true"></span>';document.querySelector('.tools').insertBefore(geometryButton,$('#view'));
geometryButton.onclick=()=>{poster.dataset.geometry=wrap(Number(poster.dataset.geometry||0)+1);};
for(const [i,name]of ['sasaki-saku','makaino-ririmu','shiina-yuika'].entries()){
  const img=new Image();img.src=`assets/${name}-original.png`;img.onerror=()=>{$('#status').textContent=`${characters[i].getAttribute('aria-label')}素材加载失败，请刷新页面。`;};
}
// One scheduled update touches only three portrait layers, never the whole page.
let depthFrame=0,depthX=0,depthY=0;
function paintDepth(){depthFrame=0;characters.forEach(el=>{const front=el.classList.contains('selected'),strength=front?18:8;el.querySelector('.portrait').style.transform=`translate3d(${depthX*strength}px,${depthY*strength*.5}px,0) rotateY(${depthX*(front?2:1)}deg)`;});}
poster.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||paused||reduced.matches||e.buttons)return;depthX=e.clientX/innerWidth*2-1;depthY=e.clientY/innerHeight*2-1;if(!depthFrame)depthFrame=requestAnimationFrame(paintDepth);});
function clearDepth(){depthX=depthY=0;cancelAnimationFrame(depthFrame);paintDepth();}
poster.addEventListener('pointerleave',clearDepth);$('#motion').addEventListener('click',clearDepth);reduced.addEventListener('change',clearDepth);document.addEventListener('visibilitychange',clearDepth);
let tiltBase=null,tiltFrame=0;
function applyTilt(beta,gamma){if(paused||reduced.matches)return;if(tiltBase===null)tiltBase=beta||0;depthX=Math.max(-1,Math.min(1,(gamma||0)/24));depthY=Math.max(-1,Math.min(1,((beta||0)-tiltBase)/24));if(!depthFrame)depthFrame=requestAnimationFrame(paintDepth);}
if('DeviceOrientationEvent' in window)document.addEventListener('touchstart',function start(){document.removeEventListener('touchstart',start);const attach=()=>window.addEventListener('deviceorientation',e=>{if(tiltFrame)return;tiltFrame=requestAnimationFrame(()=>{applyTilt(e.beta,e.gamma);tiltFrame=0;});});if(typeof DeviceOrientationEvent.requestPermission==='function'){DeviceOrientationEvent.requestPermission().then(perm=>{if(perm==='granted')attach();}).catch(()=>{});}else attach();},{passive:true});
document.addEventListener('characterchange',()=>{clearDepth();if(dynamic()){balls.forEach((b,i)=>{b.vx+=(i%2?1:-1)*110;b.vy-=80;squash(b,160);});wakeBalls();}});
// A double tap sends nearby charms away from its origin, like touching a spring field.
poster.addEventListener('dblclick',e=>{if(e.target.closest('.chrome,.toy')||!dynamic())return;balls.forEach(b=>{const dx=b.x-e.clientX,dy=b.y-e.clientY,d=Math.max(40,Math.hypot(dx,dy));b.vx+=dx/d*600;b.vy+=dy/d*600;squash(b,280);});wakeBalls();burst(e.clientX,e.clientY);geometryButton.click();});
document.addEventListener('keydown',e=>{if(e.target.closest('input,button,a')||dialog.open||e.altKey||e.ctrlKey||e.metaKey)return;if(e.key==='ArrowLeft'){e.preventDefault();select(selected-1);}if(e.key==='ArrowRight'){e.preventDefault();select(selected+1);}});
