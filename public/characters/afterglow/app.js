import {createPosePlayer} from '../_shared/pose-player.js';
window.posePlayer=createPosePlayer({
views:["frame", "glance"],layers:["base", "skirt", "scarf"],skirtStart:0.43,baseCenter:0.45,
textSelectors:'.eyebrow,h2,.detail-group p',labels:['切换到第二个姿态；长按暂停动态','切换到第一个姿态；长按暂停动态'],
copy(target){document.querySelector('#title').innerHTML=target?'A shy <br><em>glance.</em>':'A quiet <br><em>frame.</em>';document.querySelector('#eyebrow').textContent=target?'A LITTLE CLOSER, A LITTLE SHY':'THE WORLD, HELD STILL';document.querySelector('#chapter').textContent=target?'BETWEEN THE MOMENTS':'BEFORE THE SHUTTER';document.querySelector('#copy').innerHTML=target?'A small gesture.<br>A whole feeling.':'Some moments ask for nothing.<br>Only a little attention.';document.querySelector('#number').textContent=target?'02 / 02':'01 / 02';document.querySelector('#moment').textContent=target?'GLANCE / 02':'FRAME / 01';document.querySelector('#announcement').textContent=target?'Shy pose selected':'Camera pose selected';document.querySelector('#change').setAttribute('aria-label',target?'Change to the camera pose':'Change to the shy pose');}
});
