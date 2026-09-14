const balls=[];
const toyTypes={heart:['♡','爱心',108,125],star:['✦','星星',108,125],patch:['✚ × ×','创可贴',105,120],bow:['⋈','蝴蝶结',114,125],ring:['◎','圆环',110,125],spark:['✳','闪光',100,125]};
let ballFrame=0,ballTime=0,gravity=false,bounce=.78,quietTime=0;
let previousWidth=innerWidth,previousHeight=poster.clientHeight;
const dynamic=()=>!paused&&!reduced.matches&&!document.hidden;
function bounds(b){return {left:b.radius+8,right:Math.max(b.radius+8,previousWidth-b.radius-8),top:b.radius+76,bottom:Math.max(b.radius+76,previousHeight-b.radius-94)};}
function constrain(b){const l=bounds(b);b.x=clamp(b.x,l.left,l.right);b.y=clamp(b.y,l.top,l.bottom);}
function paint(b){const position=`${(b.x-b.w/2).toFixed(2)}px ${(b.y-b.h/2).toFixed(2)}px`,shape=b.q.toFixed(3);if(b.lastPosition!==position){b.el.style.translate=position;b.lastPosition=position;}if(b.lastShape!==shape){b.skin.style.setProperty('--sx',1+Number(shape));b.skin.style.setProperty('--sy',1-Number(shape));b.lastShape=shape;}}
function squash(b,force,axis=1){if(!dynamic()||force<40)return;b.qv+=Math.min(force/160,3)*axis;}
function updateCount(){document.querySelector('#toy-count').textContent=`${String(balls.length).padStart(2,'0')} / 08`;document.querySelectorAll('[data-toy]').forEach(el=>el.disabled=balls.length>=8);}
function stopBalls(){cancelAnimationFrame(ballFrame);ballFrame=0;ballTime=0;for(const b of balls){b.vx=b.vy=b.q=b.qv=0;paint(b);}}
function wakeBalls(){if(!ballFrame&&dynamic()){quietTime=0;ballFrame=requestAnimationFrame(stepBalls);}}
function stepBalls(now){
  const elapsed=Math.min((now-(ballTime||now-16))/1000,.032);ballTime=now;
  const steps=Math.max(1,Math.ceil(elapsed/.008)),dt=elapsed/steps;
  for(let k=0;k<steps;k++){
    for(const b of balls){
      if(!b.drag){
        if(gravity)b.vy+=850*dt;
        b.x+=b.vx*dt;b.y+=b.vy*dt;
        const l=bounds(b);
        if(b.x<l.left||b.x>l.right){squash(b,Math.abs(b.vx),-1);b.x=clamp(b.x,l.left,l.right);b.vx=(b.x===l.left?1:-1)*Math.abs(b.vx)*bounce;}
        if(b.y<l.top||b.y>l.bottom){squash(b,Math.abs(b.vy));b.y=clamp(b.y,l.top,l.bottom);b.vy=(b.y===l.top?1:-1)*Math.abs(b.vy)*bounce;if(gravity&&b.y===l.bottom&&Math.abs(b.vy)<35)b.vy=0;}
        const friction=Math.exp(-1.25*dt);b.vx*=friction;b.vy*=friction;
        if(Math.abs(b.vx)<3)b.vx=0;if(!gravity&&Math.abs(b.vy)<3)b.vy=0;
      }
      b.qv+=(-190*b.q-15*b.qv)*dt;b.q+=b.qv*dt;b.q=clamp(b.q,-.23,.23);
      if(Math.abs(b.q)<.0005&&Math.abs(b.qv)<.002)b.q=b.qv=0;
    }
    for(let i=0;i<balls.length;i++)for(let j=i+1;j<balls.length;j++){
      const force=collideToys(balls[i],balls[j],bounce);if(force>25){squash(balls[i],force);squash(balls[j],force,-1);}
    }
    balls.forEach(constrain);
  }
  let moving=false;for(const b of balls){paint(b);if(!b.drag&&(Math.hypot(b.vx,b.vy)>3||Math.abs(b.q)+Math.abs(b.qv)>.002||gravity&&b.y<bounds(b).bottom-1))moving=true;}
  quietTime=balls.every(b=>!b.drag&&Math.hypot(b.vx,b.vy)<18&&Math.abs(b.q)+Math.abs(b.qv)<.01)?quietTime+elapsed:0;
  if(quietTime>.7)moving=false;
  ballFrame=moving?requestAnimationFrame(stepBalls):0;if(!moving)ballTime=0;
}
function addToy(type,x=innerWidth*.5,y=poster.clientHeight*.3,existing=null){
  if(balls.length>=8)return;
  const [symbol,label,baseW,baseH]=toyTypes[type],factor=innerWidth<700?.8:1;
  const el=existing||document.createElement('button');el.className=`sticker toy ${type}`;el.setAttribute('aria-label',`${label}物品，可拖动，方向键弹动，Delete移除`);el.title='拖动甩出 · 方向键弹动 · Delete移除';
  const skin=document.createElement('span');skin.className='toy-skin';skin.innerHTML=toyArtwork(type);el.replaceChildren(skin);
  const b={el,skin,type,w:baseW*factor,h:baseH*factor,radius:Math.max(baseW,baseH)*factor*.46,x,y,vx:0,vy:0,q:0,qv:0,drag:null,homeX:x/innerWidth,homeY:y/poster.clientHeight};
  el.style.setProperty('--toy-w',`${b.w}px`);el.style.setProperty('--toy-h',`${b.h}px`);el.style.setProperty('--toy-angle',`${type==='patch'?18:-12}deg`);if(!existing)poster.append(el);balls.push(b);constrain(b);paint(b);updateCount();
  el.addEventListener('pointerdown',e=>{if(e.button!==0||b.drag)return;b.vx=b.vy=0;b.drag={id:e.pointerId,px:e.clientX,py:e.clientY,time:e.timeStamp,startX:e.clientX,startY:e.clientY};el.classList.add('dragging');el.setPointerCapture(e.pointerId);});
  el.addEventListener('pointermove',e=>{if(!b.drag||b.drag.id!==e.pointerId)return;const dx=e.clientX-b.drag.px,dy=e.clientY-b.drag.py,dt=Math.max((e.timeStamp-b.drag.time)/1000,.008);b.x+=dx;b.y+=dy;constrain(b);b.vx=clamp(dx/dt,-1500,1500);b.vy=clamp(dy/dt,-1500,1500);Object.assign(b.drag,{px:e.clientX,py:e.clientY,time:e.timeStamp});paint(b);wakeBalls();});
  function cancel(){b.drag=null;el.classList.remove('dragging');b.vx=b.vy=0;wakeBalls();}
  el.addEventListener('pointerup',e=>{if(!b.drag||b.drag.id!==e.pointerId)return;const tap=Math.hypot(e.clientX-b.drag.startX,e.clientY-b.drag.startY)<5;if(e.timeStamp-b.drag.time>100)b.vx=b.vy=0;b.drag=null;el.classList.remove('dragging');if(!dynamic()){b.vx=b.vy=0;return;}if(tap){b.vx=(b.x<innerWidth/2?1:-1)*240;b.vy=-260;squash(b,300);burst(b.x,b.y);}wakeBalls();});
  el.addEventListener('pointercancel',cancel);el.addEventListener('lostpointercapture',()=>{if(b.drag)cancel();});
  el.addEventListener('keydown',e=>{
    if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();balls.splice(balls.indexOf(b),1);el.remove();updateCount();document.querySelector('#toy-toggle').focus();return;}
    const d={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key];if(!d)return;e.preventDefault();if(dynamic()){b.vx+=d[0]*430;b.vy+=d[1]*430;squash(b,180);wakeBalls();}else{b.x+=d[0]*15;b.y+=d[1]*15;constrain(b);paint(b);}
  });
  el.addEventListener('click',e=>{if(e.detail===0&&dynamic()){b.vy=-300;b.vx=180;squash(b,250);wakeBalls();}});
  squash(b,200);if(gravity)wakeBalls();return b;
}
const initial=[...document.querySelectorAll('.sticker')];initial.forEach((el,i)=>{const r=el.getBoundingClientRect();addToy(['heart','star','patch'][i],r.x+r.width/2,r.y+r.height/2,el);});
document.querySelectorAll('[data-toy]').forEach(el=>el.onclick=()=>{const b=addToy(el.dataset.toy,innerWidth*.42+Math.random()*innerWidth*.15,poster.clientHeight*.32);if(b){b.vx=(Math.random()-.5)*400;b.vy=-160;wakeBalls();document.querySelector('#status').textContent=`已添加${toyTypes[b.type][1]}物品`;}});
document.querySelector('#gravity').onclick=e=>{gravity=!gravity;e.currentTarget.setAttribute('aria-pressed',gravity);if(gravity)wakeBalls();};
document.querySelector('#scatter').onclick=()=>{if(!dynamic())return;balls.forEach((b,i)=>{b.vx=Math.cos(i*2.4)*650;b.vy=Math.sin(i*2.4)*650;squash(b,320);});wakeBalls();};
document.querySelector('#elasticity').oninput=e=>{bounce=Number(e.target.value)/100;document.querySelector('#elasticity-value').value=`${e.target.value}%`;};
function resetToys(){stopBalls();gravity=false;document.querySelector('#gravity').setAttribute('aria-pressed','false');balls.forEach(b=>b.el.remove());balls.length=0;[['heart',.1,.32],['star',.83,.2],['patch',.86,.66]].forEach(([t,x,y])=>addToy(t,x*innerWidth,y*poster.clientHeight));updateCount();}
document.querySelector('#reset-toys').onclick=resetToys;
window.addEventListener('resize',()=>{stopBalls();const width=innerWidth,height=poster.clientHeight,rx=width/previousWidth,ry=height/previousHeight;previousWidth=width;previousHeight=height;balls.forEach(b=>{b.x*=rx;b.y*=ry;constrain(b);paint(b);});});
document.addEventListener('visibilitychange',stopBalls);reduced.addEventListener('change',stopBalls);document.querySelector('#motion').addEventListener('click',()=>{stopBalls();if(!paused&&gravity)wakeBalls();});

