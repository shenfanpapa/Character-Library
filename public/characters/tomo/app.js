import {createPosePlayer} from '../../motion/pose-player.js';
window.posePlayer=createPosePlayer({
views:["portrait", "keys"],layers:["base", "skirt"],skirtStart:0.45,baseCenter:0.17,
textSelectors:'.eyebrow,h2,.detail-group p',labels:['切换到第二个姿态；长按暂停动态','切换到第一个姿态；长按暂停动态'],
copy(target){document.querySelector('#eyebrow').textContent=target?'KEYS / TOGENASHI TOGEARI':'TOGENASHI TOGEARI';document.querySelector('#chapter').textContent=target?'鍵盤の向こう側。':'静けさにも、棘がある。';document.querySelector('#copy').innerHTML=target?'裕福な家庭に育ち、現在はルームシェアで暮らす。<br>警戒心が強く、簡単には心を開かない。':'トゲナシトゲアリのキーボード担当。<br>宮城県仙台市出身の16歳。';document.querySelector('#number').textContent=target?'02 / 02':'01 / 02';document.querySelector('#moment').textContent=target?'KEYS / 02':'PORTRAIT / 01';document.querySelector('#announcement').textContent=target?'鍵盤の前の姿':'立ち姿';document.querySelector('#change').setAttribute('aria-label',target?'立ち姿に切り替える':'鍵盤の前の姿に切り替える');}
});
