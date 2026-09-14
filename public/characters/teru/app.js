'use strict';
(() => {
  const elements=new Map();
  const $ = id => {if(!elements.has(id))elements.set(id,document.getElementById(id));return elements.get(id);};
  const scene=$('scene'), geo=$('geometry'), canvas=$('character');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp=v=>Math.max(0,Math.min(1,v)), mix=(a,b,t)=>a+(b-a)*t;
  const smooth=v=>(v=clamp(v),v*v*(3-2*v));
  const segment=(p,a,b)=>smooth((p-a)/(b-a));
  const state={p:0,from:0,target:0,start:0,duration:2100,moving:false,paused:false,time:0,last:0,ready:false,label:0};
  const views=[{name:'Quiet Blessing',kicker:'THE QUIET BLESSING',title:'BLESSING / 01',line:'A little grace.<br>A world to explore.',description:'A rarely seen leader, with a heart that never stays indoors.'},{name:'A Little Secret',kicker:'JUST BETWEEN US',title:'SECRET / 02',line:'Keep it quiet.<br>Let curiosity lead.',description:'Even a leader deserves a little adventure beyond the ordinary.'},{name:'Festival Turn',kicker:'LET THE FESTIVAL BEGIN',title:'FESTIVAL / 03',line:'Bells in the air.<br>Not a care to spare.',description:'Duty can wait a moment. There is a whole city to discover.'}];
  const phase=(p,a,b,c,start=0,end=1)=>{const values=[a,b,c,a],i=Math.min(2,Math.floor(p));return mix(values[i],values[i+1],segment(p-i,start,end));};
  let width=0,height=0,dpr=1,renderer=null,raf=0,lastDraw=-Infinity,lastLayout=NaN,lastGeoP=NaN;
  const stats={geometryFrames:0,layoutFrames:0,characterFrames:0};
  const g=geo.getContext('2d');
  const tile=document.createElement('canvas');tile.width=tile.height=17;const dots=tile.getContext('2d');dots.fillStyle='#302240';for(const y of[1,18]){dots.beginPath();dots.arc(8,y,2.8,0,Math.PI*2);dots.fill();}const dotPattern=g.createPattern(tile,'repeat');
  function resize(){const r=scene.getBoundingClientRect();width=r.width;height=r.height;dpr=Math.min(window.devicePixelRatio||1,width<=700?1.25:1.5,Math.sqrt(1500000/(width*height)));geo.width=Math.round(width*dpr);geo.height=Math.round(height*dpr);g.setTransform(dpr,0,0,dpr,0,0);lastLayout=lastGeoP=NaN;if(renderer)renderer.resize();}
  function polygon(points,color,stroke=null,line=2){g.beginPath();points.forEach((p,i)=>i?g.lineTo(p[0],p[1]):g.moveTo(p[0],p[1]));g.closePath();g.fillStyle=color;g.fill();if(stroke){g.strokeStyle=stroke;g.lineWidth=line;g.stroke();}}
  function radial(cx,cy,r,n,angle=0,inner=1){return Array.from({length:n},(_,i)=>{const a=angle+i*Math.PI*2/n,rr=r*(i%2?inner:1);return[cx+Math.cos(a)*rr,cy+Math.sin(a)*rr];});}
  function geometry(p,t){
    stats.geometryFrames++;
    g.clearRect(0,0,width,height);const w=width,h=height,mobile=w<=700;
    g.fillStyle='#ffde35';g.fillRect(0,0,w,h);
    const edge=Math.min(2,Math.floor(p)),local=p-edge;
    // Main color field opens as a circle and folds into a clean octagonal frame.
    const cx=phase(p,mobile?.72:.79,mobile?.22:.24,.75,0,.65)*w,cy=phase(p,.46,.53,.56,0,.65)*h;
    const radius=(mobile?.68:.43)*Math.max(w,mobile?w:h);
    const ring=Array.from({length:48},(_,i)=>{const a=i*Math.PI*2/48;const sector=Math.PI/4;const corner=((a+sector/2)%sector)-sector/2;const polyR=Math.cos(sector/2)/Math.cos(corner);const rr=radius*phase(p,1,polyR,i%4===0?1.22:.94,0,.65);return[cx+Math.cos(a)*rr,cy+Math.sin(a)*rr];});
    polygon(ring,'#f9088a');
    // Large diagonal paper planes slide at different moments, rather than twist.
    polygon([[phase(p,-.1,.49,-.18,.08,.52)*w,-.1*h],[phase(p,.67,1.2,.65,.08,.52)*w,-.1*h],[phase(p,.30,.92,.44,.08,.52)*w,1.1*h],[phase(p,-.32,.26,-.3,.08,.52)*w,1.1*h]],'#fff9ef');
    polygon([[0,phase(p,.91,.85,.80,.22,.95)*h],[w,phase(p,.79,.92,.92,.22,.95)*h],[w,h],[0,h]],'#302240');
    polygon([[0,phase(p,.89,.82,.77,.22,.95)*h],[w,phase(p,.76,.89,.88,.22,.95)*h],[w,phase(p,.80,.93,.92,.22,.95)*h],[0,phase(p,.93,.86,.81,.22,.95)*h]],'#e73745');
    // Halftone field is clipped to the pink region, including on narrow screens.
    g.save();g.beginPath();ring.forEach((pt,i)=>i?g.lineTo(...pt):g.moveTo(...pt));g.closePath();g.clip();g.fillStyle=dotPattern;g.globalAlpha=.14;g.fillRect(0,35,w,h-35);g.restore();
    // Six solid paper shards unfold into an offset rosette in a staged sequence.
    const rx=phase(p,.84,.20,.78,.22,.95)*w,ry=phase(p,.43,.49,.47,.22,.95)*h;
    for(let i=0;i<6;i++){const begin=.10+i*.055,end=.54+i*.055;const angle=phase(p,-1.1+i*.14,i*Math.PI/3-.5,i*Math.PI/3+.25,begin,end);const length=(mobile?38:62)+i*3;const dist=phase(p,110,155,220,begin,end)*(mobile?.61:1);const x=rx+Math.cos(angle)*dist,y=ry+Math.sin(angle)*dist;g.save();g.translate(x,y);g.rotate(phase(p,-.3,i*.3,angle+.7,begin,end));polygon([[0,-length],[length*.38,0],[0,length],[-length*.17,0]],i%2?'#ffde35':'#81e5c5');g.restore();}
    // Separate wire rings and diagonal hatching provide a second scale of motion.
    g.save();g.translate(phase(p,.75,.22,.79,.3,.9)*w,phase(p,.49,.51,.54,.3,.9)*h);g.rotate(phase(p,-.2,.2,.5,.3,.9));g.strokeStyle='#302240';g.lineWidth=1.4;g.beginPath();g.ellipse(0,0,mobile?w*.42:w*.26,h*.43,0,.25,Math.PI*1.8);g.stroke();g.restore();
    const accents=[{a:[.44,.18],b:[.83,.18],r:25,c:'#e73745',n:8,inner:.28},{a:[.91,.76],b:[.43,.79],r:20,c:'#81e5c5',n:4,inner:1},{a:[.41,.75],b:[.07,.21],r:14,c:'#302240',n:4,inner:1}];
    accents.forEach((o,i)=>{const s=mobile?.7:1;const x=phase(p,o.a[0],o.b[0],.50+i*.13,.15+i*.11,.60+i*.11)*w,y=phase(p,o.a[1],o.b[1],.14+i*.29,.15+i*.11,.60+i*.11)*h;polygon(radial(x,y,o.r*s,o.n,phase(p,0,Math.PI/2,Math.PI,.15+i*.11,.60+i*.11),o.inner),o.c);});
    g.save();g.translate(phase(p,.91,.08,.91,0,.65)*w,.17*h);g.rotate(phase(p,.3,-.3,.7,0,.65));g.strokeStyle='#302240';g.lineWidth=2;for(let i=0;i<5;i++){g.beginPath();g.moveTo(i*9,0);g.lineTo(i*9-20,35);g.stroke();}g.restore();
  }
  function layout(p){
    if(p===lastLayout)return;lastLayout=p;stats.layoutFrames++;
    const mobile=width<=700;
    $('titleGroup').style.transform=`translate(${phase(p,0,mobile?.035:.48,mobile?0:.01,.14,.60)*width}px,${phase(p,0,mobile?-.01:-.04,mobile?0:-.06,.14,.60)*height}px)`;
    $('ruleGroup').style.transform=`translate(${phase(p,0,mobile?0:.48,0,.25,.72)*width}px,${phase(p,0,mobile?0:-.025,mobile?0:-.04,.25,.72)*height}px) scaleX(${phase(p,1,.91,.95,.25,.72)})`;
    $('copyGroup').style.transform=`translate(${phase(p,0,mobile?0:.48,0,.36,.83)*width}px,${phase(p,0,mobile?.015:-.01,mobile?.015:0,.36,.83)*height}px)`;
    $('characterWrap').style.transform=`translate(${phase(p,0,mobile?-.035:-.43,mobile?-.06:.01,.12,.90)*width}px,${phase(p,0,mobile?.01:0,mobile?.01:.01,.12,.90)*height}px)`;
    // Text changes once, under a short opacity valley; no per-letter scatter or idle pulse.
    const local=p-Math.min(2,Math.floor(p)),valley=1-.85*Math.sin(segment(local,.37,.62)*Math.PI);
    $('kicker').style.opacity=valley;$('chapterTitle').style.opacity=valley;$('statement').style.opacity=valley;$('description').style.opacity=valley;
    const label=Math.floor(p+.5)%3;if(label!==state.label){state.label=label;setCopy(label);}
  }
  function setCopy(i){const v=views[i];$('kicker').textContent=v.kicker;$('chapterTitle').textContent=v.title;$('statement').innerHTML=v.line;$('description').textContent=v.description;$('viewNumber').textContent='0'+(i+1);scene.dataset.view=['blessing','secret','festival'][i];}
  function beginTransition(){state.preparing=false;$('loadingNote').hidden=true;state.from=state.p;state.target=Math.floor(state.p)+1;state.start=performance.now();state.duration=reduced.matches?1:2200;state.moving=true;scene.setAttribute('aria-busy','true');scene.dataset.phase='transition';wake();}
  function switchView(){if(!state.ready)return;if(state.moving||state.preparing){state.pending=true;return;}if(renderer.prepare){state.preparing=true;scene.setAttribute('aria-busy','true');$('loadingNote').textContent='Preparing the next pose…';$('loadingNote').hidden=false;renderer.prepare(Math.floor(state.p)).then(beginTransition).catch(error=>{state.preparing=false;state.pending=false;scene.setAttribute('aria-busy','false');$('loadingNote').textContent='Could not load the next pose. Tap to retry.';console.error(error);});}else beginTransition();}
  function pause(){state.paused=!state.paused;scene.dataset.motion=state.paused?'paused':'playing';$('hint').textContent=state.paused?'MOTION PAUSED · PRESS P TO RESUME':'TAP ANYWHERE TO REFRAME';$('liveStatus').textContent=state.paused?'Ambient motion paused.':'Ambient motion resumed.';wake();}
  function tick(now){raf=0;if(now-lastDraw<15.7){raf=requestAnimationFrame(tick);return;}lastDraw=now;const dt=Math.min(.05,(now-(state.last||now))/1000);state.last=now;if(!state.paused&&!reduced.matches)state.time+=dt;    if(state.moving){const f=clamp((now-state.start)/state.duration);state.p=mix(state.from,state.target,smooth(f));if(f===1){state.moving=false;state.p=state.target%3;scene.dataset.phase='idle';scene.setAttribute('aria-busy','false');scene.setAttribute('aria-label',`Teru in ${views[state.p].name}. Activate to change to ${views[(state.p+1)%3].name}. Press P to pause motion.`);$('liveStatus').textContent=views[state.p].name;if(state.pending){state.pending=false;switchView();}}}
    if(state.p!==lastGeoP){geometry(state.p,state.time);lastGeoP=state.p;}layout(state.p);if(renderer){const edge=Math.min(2,Math.floor(state.p));renderer.draw(edge,segment(state.p-edge,.12,.9),state.time,reduced.matches?0:1);stats.characterFrames++;}
    if(!raf&&!document.hidden&&(!state.paused&&!reduced.matches||state.moving))raf=requestAnimationFrame(tick);
  }
  function wake(){if(!raf){state.last=performance.now();raf=requestAnimationFrame(tick);}}
  let down=null,dragged=false;
  scene.addEventListener('pointerdown',e=>{dragged=false;down={x:e.clientX,y:e.clientY};});
  scene.addEventListener('pointerup',e=>{dragged=Boolean(down&&Math.hypot(e.clientX-down.x,e.clientY-down.y)>=12);down=null;});
  scene.addEventListener('click',()=>{if(!dragged)switchView();dragged=false;});
  scene.addEventListener('pointercancel',()=>{down=null;dragged=true;});
  scene.addEventListener('keydown',e=>{if(e.repeat)return;if(e.key===' '||e.key==='Enter'){e.preventDefault();switchView();}if(e.key.toLowerCase()==='p'){e.preventDefault();pause();}});
  window.addEventListener('resize',()=>{resize();wake();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;}else wake();});
  reduced.addEventListener('change',()=>wake());
  window.TeruUI={state,stats,switchView,pause,drawAt(p,t=0){p=Math.max(0,Math.min(2.999999,p));geometry(p,t);layout(p);const edge=Math.floor(p);renderer?.draw(edge,segment(p-edge,.12,.9),t,1);},get renderer(){return renderer;}};
  resize();wake();
  async function initialize(){
    if(!window.TERU_ASSETS||!window.TeruCharacter)throw new Error('Character assets are missing.');
    renderer=await window.TeruCharacter.create(canvas,window.TERU_ASSETS);renderer.resize();state.ready=true;scene.dataset.renderer=renderer.type;scene.setAttribute('aria-busy','false');scene.dataset.phase='idle';$('loadingNote').hidden=true;wake();
  }
  initialize().catch(e=>{console.error(e);$('loadingNote').textContent='Unable to load Teru. Please reload the page.';scene.setAttribute('aria-busy','false');});
})();
