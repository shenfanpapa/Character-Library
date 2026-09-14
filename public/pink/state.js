const wrap = n => ((n % 3) + 3) % 3;
function advanceBall(b,l,dt){
  let {x,y,vx,vy}=b;x+=vx*dt;y+=vy*dt;
  if(x<l.minX){x=l.minX;vx=Math.abs(vx)*.82;}else if(x>l.maxX){x=l.maxX;vx=-Math.abs(vx)*.82;}
  if(y<l.minY){y=l.minY;vy=Math.abs(vy)*.82;}else if(y>l.maxY){y=l.maxY;vy=-Math.abs(vy)*.82;}
  const drag=Math.exp(-1.25*dt);vx*=drag;vy*=drag;
  if(Math.hypot(vx,vy)<4)vx=vy=0;return{x,y,vx,vy};
}
const clamp = (n, min, max) => Math.min(Math.max(n, min), Math.max(min, max));
const swipeDirection = (dx, dy) => Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.3 ? (dx<0?1:-1) : 0;
// Circular collision envelopes keep irregular sticker shapes stable while dragging.
function collideToys(a,b,restitution=.78){
  const dx=b.x-a.x,dy=b.y-a.y,dist=Math.hypot(dx,dy),overlap=a.radius+b.radius-dist;
  if(overlap<=0)return 0;
  const nx=dist>0.001?dx/dist:1,ny=dist>0.001?dy/dist:0;
  const ma=a.drag?0:1,mb=b.drag?0:1,total=ma+mb;if(!total)return 0;
  a.x-=nx*overlap*ma/total;a.y-=ny*overlap*ma/total;b.x+=nx*overlap*mb/total;b.y+=ny*overlap*mb/total;
  const closing=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;
  if(closing>=0)return 0;
  const impulse=-(1+restitution)*closing/total;
  a.vx-=impulse*nx*ma;a.vy-=impulse*ny*ma;b.vx+=impulse*nx*mb;b.vy+=impulse*ny*mb;
  return Math.min(400,Math.abs(closing));
}
