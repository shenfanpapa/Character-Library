'use strict';
(()=>{
 const stage=document.getElementById('stage'),toggle=document.getElementById('sceneToggle'),dossier=document.getElementById('dossier'),status=document.getElementById('assetStatus'),art=document.getElementById('characterArt'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let open=false,down=null,drag=false,userPaused=false;
 const motion={ 'hair-left':{sway:1.5,duration:5.8},'hair-right':{sway:1.6,duration:6.5},'cloth-left':{sway:2.4,duration:7.2},'cloth-right':{sway:2.2,duration:7.9} };
 const updatePause=()=>stage.classList.toggle('is-paused',userPaused||document.hidden);
 function setOpen(value){
   window.getSelection()?.removeAllRanges();open=value;stage.dataset.state=open?'story':'portrait';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Return to Testament portrait':"Reveal Testament's story");dossier.inert=!open;dossier.setAttribute('aria-hidden',String(!open));document.getElementById('liveStatus').textContent=open?'Character introduction expanded. Press Escape to return.':'Character portrait.';
   if(!open&&dossier.contains(document.activeElement))toggle.focus({preventScroll:true});
   if(!open&&window.scrollY>100)window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});
   resize();
 }
 toggle.addEventListener('pointerdown',e=>{down=[e.clientX,e.clientY];drag=false;e.preventDefault();toggle.focus({preventScroll:true})});
 toggle.addEventListener('pointerup',e=>{drag=!!down&&Math.hypot(e.clientX-down[0],e.clientY-down[1])>12;down=null});
 toggle.addEventListener('pointercancel',()=>{drag=true;down=null});
 toggle.addEventListener('click',()=>{if(!drag)setOpen(!open);drag=false});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&open)setOpen(false);if(e.key.toLowerCase()==='p'&&!e.repeat){userPaused=!userPaused;updatePause()}});
 document.addEventListener('visibilitychange',updatePause);
 let frame=null,manifest=null;
 function resize(){if(frame&&manifest){const r=art.getBoundingClientRect(),w=manifest.width,h=manifest.height,scale=Math.min(r.width/w,r.height/h);frame.style.width=(w*scale)+'px';frame.style.height=(h*scale)+'px'}if(open){stage.style.minHeight=(innerWidth<=700?Math.max(1300,680+dossier.scrollHeight+105):Math.max(780,Math.ceil((dossier.scrollHeight+100)/.68)))+'px'}else stage.style.minHeight=''}
 async function initialize(){
   manifest=window.TESTAMENT_ART;if(!manifest||!manifest.layers?.length)throw new Error('Character artwork is missing.');
   frame=document.createElement('div');frame.className='art-canvas';frame.style.setProperty('--art-ratio',manifest.width+'/'+manifest.height);art.append(frame);
   await Promise.all(manifest.layers.map(async part=>{const layer=document.createElement('div');layer.className='character-layer'+(part.rigid?' rigid':'');layer.style.left=part.x/manifest.width*100+'%';layer.style.top=part.y/manifest.height*100+'%';layer.style.width=part.width/manifest.width*100+'%';layer.style.height=part.height/manifest.height*100+'%';layer.style.setProperty('--pivot-x',(part.pivot?.[0]??.5)*100+'%');layer.style.setProperty('--pivot-y',(part.pivot?.[1]??.1)*100+'%');layer.style.setProperty('--sway',(part.sway??.25)+'deg');layer.style.setProperty('--drift','0px');layer.style.setProperty('--duration',(part.duration??6)+'s');layer.style.setProperty('--delay',-(part.delay??0)+'s');const img=new Image();img.alt='';img.decoding='async';img.draggable=false;img.width=part.width;img.height=part.height;layer.append(img);frame.append(layer);await new Promise((resolve,reject)=>{img.onload=resolve;img.onerror=()=>reject(new Error('Character layer could not load'));img.src=part.src});if(img.decode)await img.decode().catch(()=>{});}));
   [...frame.children].forEach((layer,i)=>{const settings=motion[manifest.layers[i].id];if(settings){layer.style.setProperty('--sway',settings.sway+'deg');layer.style.setProperty('--duration',settings.duration+'s')}});
   resize();updatePause();status.hidden=true;stage.dataset.ready='true';
 }
 window.addEventListener('resize',resize);const observer=new ResizeObserver(resize);observer.observe(art);observer.observe(dossier);initialize().catch(error=>{status.textContent='Portrait unavailable. Please reload the page.';console.error(error)});
 window.TestamentUI={setOpen,get open(){return open},resize};
})();
