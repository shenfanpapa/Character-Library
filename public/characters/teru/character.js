'use strict';
window.TeruCharacter=(()=>{
  const lerp=(a,b,t)=>a+(b-a)*t;
  const smooth=(a,b,v)=>{const p=Math.max(0,Math.min(1,(v-a)/(b-a)));return p*p*(3-2*p);};
  function load(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>{if(img.decode)img.decode().then(()=>resolve(img),()=>resolve(img));else resolve(img);};img.onerror=()=>reject(new Error('A character layer could not be loaded.'));img.src=src;});}
  function loadScript(src){return new Promise((resolve,reject)=>{const tag=document.createElement('script');tag.src=src;tag.async=true;tag.onload=()=>{tag.remove();resolve();};tag.onerror=()=>{tag.remove();reject(new Error('Could not load '+src));};document.head.appendChild(tag);});}
  const later=fn=>typeof window.requestIdleCallback==='function'?window.requestIdleCallback(fn,{timeout:700}):setTimeout(fn,32);
  // Static buffers: the GPU performs morphing and anchored cloth movement.
  const vertex=`precision highp float;
    attribute vec2 a_from; attribute vec2 a_to; attribute vec2 a_uv; attribute vec2 a_uv_b;
    uniform mediump float u_mix;
    uniform float u_time; uniform float u_amp;
    uniform vec4 u_view; uniform vec4 u_rect_a; uniform vec4 u_rect_b;
    uniform vec2 u_pivot_a; uniform vec2 u_pivot_b; uniform vec4 u_motion;
    varying mediump vec2 v_uv; varying mediump vec2 v_uv_b;
    void main(){
      vec2 pos=mix(a_from,a_to,u_mix);vec4 rect=mix(u_rect_a,u_rect_b,u_mix);
      vec2 pivot=rect.xy+rect.zw*mix(u_pivot_a,u_pivot_b,u_mix);
      float angle=sin(u_time*u_motion.y+u_motion.z)*u_motion.x*0.01745329252*u_amp;
      float c=cos(angle),s=sin(angle);vec2 o=pos-pivot;float cloth=0.0;
      if(u_motion.w>0.5&&u_motion.w<1.5)cloth=sin(u_time*1.18)*5.0*u_amp*smoothstep(460.0,570.0,pos.y)*(1.0-smoothstep(780.0,835.0,pos.y));
      if(u_motion.w>1.5)cloth=sin(u_time*1.32+0.7)*3.0*u_amp*smoothstep(350.0,405.0,pos.y)*max(1.0-smoothstep(275.0,345.0,pos.x),smoothstep(400.0,455.0,pos.x));
      vec2 moved=pivot+vec2(o.x*c-o.y*s,o.x*s+o.y*c)+vec2(sin(u_time*0.7)*1.5*u_amp+cloth,sin(u_time*0.9)*1.3*u_amp);
      vec2 normalized=(moved-u_view.xy)/u_view.zw;
      gl_Position=vec4(normalized.x*2.0-1.0,1.0-normalized.y*2.0,0.0,1.0);v_uv=a_uv;v_uv_b=a_uv_b;
    }`;
  const fragment=`precision mediump float;
    uniform sampler2D u_a; uniform sampler2D u_b; uniform mediump float u_mix;
    varying mediump vec2 v_uv; varying mediump vec2 v_uv_b;
    void main(){
      if(u_mix<0.00001){vec4 a=texture2D(u_a,v_uv);float c=smoothstep(-0.65,0.65,(a.a-0.5)*64.0);gl_FragColor=vec4(a.rgb*c,c);return;}
      if(u_mix>0.99999){vec4 b=texture2D(u_b,v_uv_b);float c=smoothstep(-0.65,0.65,(b.a-0.5)*64.0);gl_FragColor=vec4(b.rgb*c,c);return;}
      vec4 a=texture2D(u_a,v_uv),b=texture2D(u_b,v_uv_b);
      float da=(a.a-0.5)*64.0,db=(b.a-0.5)*64.0;
      float coverage=smoothstep(-0.65,0.65,mix(da,db,u_mix));
      float aw=(1.0-u_mix)*smoothstep(-2.0,1.0,da),bw=u_mix*smoothstep(-2.0,1.0,db);
      float colorMix=aw+bw>0.0001?bw/(aw+bw):u_mix;
      gl_FragColor=vec4(mix(a.rgb,b.rgb,colorMix)*coverage,coverage);
    }`;
  function compile(gl,type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;}
  function rectFor(layer,edge,p){return layer.poses[edge].bounds.map((v,i)=>lerp(v,layer.poses[(edge+1)%3].bounds[i],p));}
  function drawTransform(layer,edge,p,t,amplitude){const rect=rectFor(layer,edge,p),a=layer.poses[edge].pivot||[.5,.15],b=layer.poses[(edge+1)%3].pivot||[.5,.15],motion=layer.motion||{};return{rect,pivot:[lerp(a[0],b[0],p),lerp(a[1],b[1],p)],angle:Math.sin(t*(motion.speed||1.25)+(motion.phase||0))*(motion.angle||0)*Math.PI/180*amplitude,dx:Math.sin(t*.7)*1.5*amplitude,dy:Math.sin(t*.9)*1.3*amplitude};}
  // CPU reference for QA only; the live GPU loop never allocates these arrays.
  function vertices(layer,edge,p,t,amp,view){const{rect:r,pivot,angle,dx,dy}=drawTransform(layer,edge,p,t,amp),[x,y,w,h]=r,px=x+w*pivot[0],py=y+h*pivot[1],c=Math.cos(angle),s=Math.sin(angle),mesh=layer.meshes[edge];return mesh.triangles.flatMap(tri=>tri.flatMap(i=>{const pos=mesh.from[i].map((v,j)=>lerp(v,mesh.to[i][j],p));let cloth=0;if(layer.name==='core')cloth=Math.sin(t*1.18)*5*amp*smooth(460,570,pos[1])*(1-smooth(780,835,pos[1]));if(layer.name==='headHair')cloth=Math.sin(t*1.32+.7)*3*amp*smooth(350,405,pos[1])*Math.max(1-smooth(275,345,pos[0]),smooth(400,455,pos[0]));const ox=pos[0]-px,oy=pos[1]-py;return[(px+ox*c-oy*s+dx+cloth-view[0])/view[2]*2-1,1-(py+ox*s+oy*c+dy-view[1])/view[3]*2,...mesh.uvFrom[i],...mesh.uvTo[i]];}));}
  function fitView(v,aspect){const[x,y,w,h]=v;if(w/h>aspect){const hh=w/aspect;return[x,y-(hh-h)/2,w,hh];}const ww=h*aspect;return[x-(ww-w)/2,y,ww,h];}
  async function create(canvas,data){
    const gl=canvas.getContext('webgl',{alpha:true,premultipliedAlpha:true,antialias:false,preserveDrawingBuffer:false});if(!gl)return fallback(canvas,data);
    let program;
    try{program=gl.createProgram();gl.attachShader(program,compile(gl,gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl,gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));}
    catch(error){console.warn('WebGL unavailable; using the compatible geometric transition.',error);const replacement=document.createElement('canvas');replacement.id=canvas.id;replacement.setAttribute('role','img');replacement.setAttribute('aria-label',canvas.getAttribute('aria-label'));canvas.replaceWith(replacement);return fallback(replacement,data);}
    gl.useProgram(program);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
    const attributes=['a_from','a_to','a_uv','a_uv_b'].map(name=>gl.getAttribLocation(program,name));attributes.forEach(i=>gl.enableVertexAttribArray(i));
    const uniforms={};for(const name of['u_mix','u_time','u_amp','u_view','u_rect_a','u_rect_b','u_pivot_a','u_pivot_b','u_motion'])uniforms[name]=gl.getUniformLocation(program,name);
    gl.uniform1i(gl.getUniformLocation(program,'u_a'),0);gl.uniform1i(gl.getUniformLocation(program,'u_b'),1);
    const stats={bufferUploads:0,frames:0,draws:0};
    const layers=await Promise.all(data.layers.map(async layer=>{
      const buffers=layer.meshes.map(mesh=>{const values=new Float32Array(mesh.triangles.length*3*8);let offset=0;for(const tri of mesh.triangles)for(const i of tri)for(const pair of[mesh.from[i],mesh.to[i],mesh.uvFrom[i],mesh.uvTo[i]]){values[offset++]=pair[0];values[offset++]=pair[1];}const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,values,gl.STATIC_DRAW);stats.bufferUploads++;return{buffer,count:values.length/8};});
      const textures=await Promise.all(layer.poses.map(async pose=>{const image=await load(pose.field),tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);return tex;}));
      return{...layer,buffers,textures};
    }));
    let lost=false;canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;});canvas.addEventListener('webglcontextrestored',()=>location.reload());
    return{type:'webgl-static-mesh',stats,layers:layers.length,resize(){const r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,r.width<=700?1.5:1.75,Math.sqrt(1200000/(r.width*r.height)));canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));gl.viewport(0,0,canvas.width,canvas.height);gl.uniform4f(uniforms.u_view,...fitView(data.viewBox,canvas.width/canvas.height));},draw(edge,p,t,amp){
      if(lost)return;stats.frames++;gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.uniform1f(uniforms.u_mix,p);gl.uniform1f(uniforms.u_time,t);gl.uniform1f(uniforms.u_amp,amp);
      for(const layer of layers){const a=layer.poses[edge],b=layer.poses[(edge+1)%3],motion=layer.motion||{},entry=layer.buffers[edge];gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,layer.textures[edge]);gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,layer.textures[(edge+1)%3]);gl.bindBuffer(gl.ARRAY_BUFFER,entry.buffer);attributes.forEach((attr,i)=>gl.vertexAttribPointer(attr,2,gl.FLOAT,false,32,i*8));gl.uniform4f(uniforms.u_rect_a,...a.bounds);gl.uniform4f(uniforms.u_rect_b,...b.bounds);gl.uniform2f(uniforms.u_pivot_a,...a.pivot);gl.uniform2f(uniforms.u_pivot_b,...b.pivot);gl.uniform4f(uniforms.u_motion,motion.angle||0,motion.speed||1.25,motion.phase||0,layer.name==='core'?1:layer.name==='headHair'?2:0);gl.drawArrays(gl.TRIANGLES,0,entry.count);stats.draws++;}
    }};
  }
  async function fallback(canvas,data){
    if(!data.compatibility)throw new Error('Compatible animation files are missing.');
    const ctx=canvas.getContext('2d');await loadScript(data.compatibility.parts);const sources=window.TERU_COMPAT_PARTS;
    const parts=await Promise.all(data.layers.map(layer=>Promise.all(sources[layer.name].map(load))));delete window.TERU_COMPAT_PARTS;
    const cache=new Map(),pending=new Map(),stats={decodedFrames:0,cachedEdges:0};let activeEdge=0,lastIdle=-1;
    async function prepare(edge){
      if(cache.has(edge))return;if(pending.has(edge))return pending.get(edge);
      const job=(async()=>{await loadScript(data.compatibility.edges[edge]);const sources=window.TERU_COMPAT_FRAMES[edge],images=[];
        for(let i=0;i<sources.length;i+=4){images.push(...await Promise.all(sources.slice(i,i+4).map(load)));if(i+4<sources.length)await new Promise(r=>setTimeout(r,0));}
        cache.set(edge,images);delete window.TERU_COMPAT_FRAMES[edge];stats.decodedFrames+=images.length;
        for(const key of cache.keys())if(cache.size>2&&key!==activeEdge&&key!==edge)cache.delete(key);stats.cachedEdges=cache.size;
      })();pending.set(edge,job);try{await job;}finally{pending.delete(edge);}
    }
    return{type:'canvas2d-lazy-morph',stats,prepare,resize(){const r=canvas.getBoundingClientRect(),d=Math.min(window.devicePixelRatio||1,1.5);canvas.width=Math.round(r.width*d);canvas.height=Math.round(r.height*d);},draw(edge,p,t,amp){activeEdge=edge;ctx.clearRect(0,0,canvas.width,canvas.height);const view=fitView(data.viewBox,canvas.width/canvas.height),scale=canvas.width/view[2];
      if(p===0||p===1){data.layers.forEach((layer,i)=>{const{rect:r,pivot,angle,dx,dy}=drawTransform(layer,edge,p,t,amp),[x,y,w,h]=r;ctx.save();ctx.translate((x+w*pivot[0]-view[0]+dx)*scale,(y+h*pivot[1]-view[1]+dy)*scale);ctx.rotate(angle);ctx.drawImage(parts[i][p===0?edge:(edge+1)%3],-w*pivot[0]*scale,-h*pivot[1]*scale,w*scale,h*scale);ctx.restore();});if(lastIdle!==edge){lastIdle=edge;later(()=>prepare(edge).catch(console.warn));}}
      else{const frames=cache.get(edge);if(!frames)return;const frame=frames[Math.round(p*(frames.length-1))];ctx.drawImage(frame,(data.frameBox[0]-view[0])*scale,(data.frameBox[1]-view[1])*scale,data.frameBox[2]*scale,data.frameBox[3]*scale);}
    }};
  }
  return{create,vertices,drawTransform,fitView,shaders:{vertex,fragment}};
})();
