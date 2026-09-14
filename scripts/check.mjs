import {spawn} from 'node:child_process';
import {readFile,readdir} from 'node:fs/promises';
import {once} from 'node:events';
import assert from 'node:assert/strict';
const root=new URL('../',import.meta.url),publicRoot=new URL('public/',root);
let checks=0;
async function walk(dir){const out=[];for(const e of await readdir(dir,{withFileTypes:true})){const url=new URL(e.name+(e.isDirectory()?'/':''),dir);if(e.isDirectory())out.push(...await walk(url));else out.push(url)}return out}
const child=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,PORT:'0'},stdio:['ignore','pipe','pipe']});
let stderr='';child.stderr.on('data',data=>stderr+=data);
try{
 const origin=await new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(Error('Server startup timed out')),15000);child.stdout.on('data',data=>{const match=data.toString().match(/READY (http:\/\/localhost:\d+)/);if(match){clearTimeout(timeout);resolve(match[1])}});child.on('error',reject);child.on('exit',code=>{clearTimeout(timeout);reject(Error(`Server exited ${code}: ${stderr}`))})});
 const keys=['deepseek','noir','teru','testament','afterglow','tomo'];
 for(const path of ['/','/archive/','/pink/',...keys.map(k=>`/archive/${k}/`)]){const r=await fetch(origin+path);assert.equal(r.status,200,path);assert.match(await r.text(),/library\.js/,path);checks++}
 for(const file of await walk(publicRoot)){
  const path='/'+decodeURIComponent(file.href.slice(publicRoot.href.length));
  const r=await fetch(origin+encodeURI(path),{method:'HEAD'});assert.equal(r.status,200,path);assert(Number(r.headers.get('content-length'))>0,path);checks++;
  if(!path.endsWith('.html'))continue;
  const html=await readFile(file,'utf8');for(const [,src]of html.matchAll(/(?:src|href)="([^"]+)"/g)){if(/^(data:|https?:|#|mailto:)/.test(src))continue;const url=new URL(src,origin+path);const response=await fetch(url,{method:'HEAD'});assert.equal(response.status,200,url.href);checks++}
 }
 const health=await fetch(origin+'/healthz');assert.equal((await health.json()).status,'ok');checks++;
 assert.equal((await fetch(origin+'/missing-work/')).status,404);checks++;
 assert.equal((await fetch(origin+'/library.css',{method:'POST'})).status,405);checks++;
 const original=await fetch(origin+'/library.css');const etag=original.headers.get('etag');assert(etag);assert.equal((await fetch(origin+'/library.css',{headers:{'If-None-Match':etag}})).status,304);checks++;
 console.log(`PASS: ${checks} route, resource, health and cache checks.`);
}finally{child.kill();await once(child,'exit').catch(()=>{})}
