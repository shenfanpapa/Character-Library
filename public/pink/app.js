const $ = s => document.querySelector(s);
const poster = $('#poster'), cast = $('#cast'), characters = [...document.querySelectorAll('.character')];
const avatars = [...document.querySelectorAll('.avatar')], reduced = matchMedia('(prefers-reduced-motion: reduce)');
let selected = 1, paused = false, theme = 0;
function select(n) {
  selected = wrap(n);
  characters.forEach((el, i) => {
    const slot = wrap(i - selected + 1);
    el.style.setProperty('--slot', slot);
    el.dataset.slot=slot;
    el.style.setProperty('--tilt', '0deg');
    el.classList.toggle('selected', i === selected);
    el.setAttribute('aria-pressed', i === selected);
    avatars[i].classList.toggle('active', i === selected);
    avatars[i].setAttribute('aria-pressed', i === selected);
  });
  $('#count').innerHTML = `0${selected + 1} <i>/</i> 03`;
  $('#status').textContent = ['笹木咲', '魔界ノりりむ', '椎名唯華'][selected];
  document.dispatchEvent(new Event('characterchange'));
}
function burst(x, y) {
  if(reduced.matches || paused) return;
  for(let i=0;i<7;i++) {
    const p = document.createElement('span'); p.className='particle'; p.textContent=i%2?'✦':'♡';
    p.style.left=`${x}px`;p.style.top=`${y}px`;$('#particles').append(p);
    const angle=i*Math.PI*2/7;
    p.animate([{transform:'translate(-50%,-50%) scale(.2)',opacity:1},{transform:`translate(${Math.cos(angle)*90}px,${Math.sin(angle)*80-50}px) rotate(${i*30}deg) scale(.7)`,opacity:0}],{duration:650,easing:'ease-out'}).finished.finally(()=>p.remove());
  }
}
characters.forEach((el,i)=>el.addEventListener('click',e=>{if(suppressClick){suppressClick=false;return;}if(selected===i){const r=el.getBoundingClientRect();burst(e.detail?e.clientX:r.x+r.width/2,e.detail?e.clientY:r.y+r.height*.3);}else select(i);}));
avatars.forEach((el,i)=>el.addEventListener('click',()=>select(i)));
$('#prev').onclick=()=>select(selected-1);$('#next').onclick=$('#shuffle').onclick=()=>select(selected+1);
$('#palette').onclick=()=>{theme=1-theme;poster.dataset.theme=['pink','night'][theme];$('#status').textContent=['粉色背景','炭黑背景'][theme];};
function clean(on){poster.classList.toggle('clean',on);document.querySelectorAll('.chrome').forEach(el=>el.inert=on);(on?$('#restore'):$('#view')).focus();}
$('#view').onclick=()=>clean(true);$('#restore').onclick=()=>clean(false);
$('#motion').onclick=()=>{paused=!paused;poster.classList.toggle('paused',paused);$('#motion').textContent=paused?'▷':'Ⅱ';$('#motion').setAttribute('aria-pressed',paused);$('#motion').setAttribute('aria-label',paused?'恢复动态':'暂停动态');resetParallax();};
function resetParallax(){poster.style.setProperty('--px','0px');poster.style.setProperty('--py','0px');}
// No full-page inherited style updates on pointer movement; local controls retain feedback.
poster.addEventListener('pointerleave',resetParallax);document.addEventListener('visibilitychange',resetParallax);reduced.addEventListener('change',resetParallax);
let swipe=null,suppressClick=false;
cast.addEventListener('pointerdown',e=>{if(e.isPrimary)swipe={id:e.pointerId,x:e.clientX,y:e.clientY};suppressClick=false;});
cast.addEventListener('pointerup',e=>{if(!swipe||swipe.id!==e.pointerId)return;const direction=swipeDirection(e.clientX-swipe.x,e.clientY-swipe.y);swipe=null;if(direction){select(selected+direction);suppressClick=true;}});
cast.addEventListener('pointercancel',()=>{swipe=null;});
const dialog=$('#lightbox'), full=dialog.querySelector('img'), thumbnail=$('#gallery img');let zoom=null,closing=false;
function fromThumb(){const a=thumbnail.getBoundingClientRect(),b=full.getBoundingClientRect();const s=Math.min(a.width/b.width,a.height/b.height);return `translate(${a.x+a.width/2-b.x-b.width/2}px,${a.y+a.height/2-b.y-b.height/2}px) scale(${s})`;}
$('#gallery').onclick=()=>{if(dialog.open)return;closing=false;dialog.showModal();zoom=full.animate([{transform:fromThumb(),opacity:.5},{transform:'none',opacity:1}],{duration:reduced.matches?0:500,easing:'cubic-bezier(.22,.75,.22,1)',fill:'both'});};
async function closeGallery(){if(!dialog.open||closing)return;closing=true;const current=getComputedStyle(full).transform;zoom?.cancel();zoom=full.animate([{transform:current,opacity:1},{transform:fromThumb(),opacity:.2}],{duration:reduced.matches?0:350,easing:'ease-in',fill:'both'});await zoom.finished.catch(()=>{});dialog.close();zoom.cancel();closing=false;$('#gallery').focus();}
$('#close').onclick=closeGallery;dialog.addEventListener('cancel',e=>{e.preventDefault();closeGallery();});dialog.addEventListener('click',e=>{if(e.target===dialog)closeGallery();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&poster.classList.contains('clean'))clean(false);});
$('.brand').onclick=e=>{e.preventDefault();select(1);theme=0;poster.dataset.theme='pink';};
document.querySelectorAll('.magnetic').forEach(el=>{
  const visual=document.createElement('span');visual.textContent=el.textContent;el.replaceChildren(visual);
  el.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse'||paused||reduced.matches)return;const r=el.getBoundingClientRect();visual.style.transform=`translate(${(e.clientX-r.x-r.width/2)*.25}px,${(e.clientY-r.y-r.height/2)*.25}px)`;});
  el.addEventListener('pointerleave',()=>visual.style.transform='none');
});


select(1);




