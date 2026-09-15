import http from 'node:http';
import { readFileSync, readdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
const types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',png:'image/png',webp:'image/webp',jpg:'image/jpeg',svg:'image/svg+xml',woff2:'font/woff2'};
const files=new Map(),root=new URL('./public/',import.meta.url);
function collect(dir=''){
 for(const entry of readdirSync(new URL(dir,root),{withFileTypes:true})){
  if(entry.name.startsWith('.'))continue;const name=dir+entry.name;
  if(entry.isDirectory()){collect(name+'/');continue}
  if(!entry.isFile())continue;const ext=entry.name.split('.').pop();if(!types[ext])continue;
  const raw=readFileSync(new URL(name,root)),gz=['html','css','js','svg'].includes(ext)?gzipSync(raw,{level:6}):null,digest=createHash('sha256').update(raw).digest('hex');files.set('/'+name,{raw,gz,digest,type:types[ext]});
 }
}
collect();if(!files.has('/index.html'))throw new Error('Missing public/index.html');files.set('/',files.get('/index.html'));
const port=Number(process.env.PORT||3000);if(!Number.isInteger(port)||port<0||port>65535)throw new Error('Invalid PORT');
const acceptsGzip=(value='')=>value.split(',').some(part=>{const[encoding,...params]=part.trim().toLowerCase().split(';'),q=params.find(p=>p.trim().startsWith('q='));return encoding==='gzip'&&(!q||Number(q.trim().slice(2))>0)});
const server=http.createServer((req,res)=>{
 res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');res.setHeader('Cache-Control','no-cache');const head=req.method==='HEAD';
 if(req.method!=='GET'&&!head){res.writeHead(405,{Allow:'GET, HEAD'});return res.end('Method not allowed')}
 let pathname;try{pathname=decodeURIComponent((req.url||'/').split(/[?#]/,1)[0])}catch{res.writeHead(400);return res.end(head?undefined:'Bad request')}
 if(pathname==='/healthz'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(head?undefined:'{"status":"ok"}')}
 const shellRoutes=new Set(['/archive/','/archive','/pink/','/pink','/pink/noise/','/pink/noise',...['deepseek','noir','teru','testament','afterglow','tomo'].flatMap(key=>['/archive/'+key,'/archive/'+key+'/'])]);
 const file=files.get(shellRoutes.has(pathname)?'/index.html':pathname);if(!file){res.writeHead(404,{'Content-Type':'text/plain'});return res.end(head?undefined:'Not found')}
 const gzip=!!file.gz&&acceptsGzip(req.headers['accept-encoding']),body=gzip?file.gz:file.raw,etag='"'+file.digest+(gzip?'-gzip':'')+'"';res.setHeader('Content-Type',file.type);res.setHeader('ETag',etag);res.setHeader('Vary','Accept-Encoding');
 if((req.headers['if-none-match']||'').split(',').some(s=>s.trim().replace(/^W\//,'')===etag||s.trim()==='*')){res.writeHead(304);return res.end()}
 if(gzip)res.setHeader('Content-Encoding','gzip');res.setHeader('Content-Length',body.length);res.writeHead(200);res.end(head?undefined:body);
});
server.listen(port,'0.0.0.0',()=>console.log('READY http://localhost:'+server.address().port));
function shutdown(){server.close(()=>process.exit(0));setTimeout(()=>process.exit(1),8000).unref()}
process.once('SIGTERM',shutdown);process.once('SIGINT',shutdown);
