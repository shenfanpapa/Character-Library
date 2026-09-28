var WW="180";var HW=0,fQ=1,YW=2;var bQ=1,XW=2,q8=3,m8=0,h0=1,i0=2,u8=0,F6=1,xQ=2,gQ=3,pQ=4,KW=5,b9=100,UW=101,GW=102,EW=103,qW=104,NW=200,OW=201,FW=202,RW=203,kW=204,MW=205,DW=206,LW=207,VW=208,zW=209,BW=210,_W=211,CW=212,wW=213,IW=214,q7=0,N7=1,O7=2,R6=3,F7=4,R7=5,k7=6,M7=7,PW=0,TW=1,AW=2,H8=0,SW=1,jW=2,vW=3,yW=4,hW=5,fW=6,bW=7;var x9=301,G9=302,D7=303,L7=304,k6=306,g9=1000,V7=1001,z7=1002,S8=1003,B7=1004;var E9=1005;var Y8=1006,p9=1007;var j8=1008;var c8=1009,xW=1010,gW=1011,M6=1012,lQ=1013,l9=1014,n8=1015,D6=1016,dQ=1017,mQ=1018,d9=1020,pW=35902,lW=35899,dW=1021,mW=1022,N8=1023,_7=1026,L6=1027,uW=1028,uQ=1029,cW=1030,cQ=1031;var nQ=1033,C7=33776,w7=33777,I7=33778,P7=33779,sQ=35840,oQ=35841,iQ=35842,aQ=35843,rQ=36196,tQ=37492,eQ=37496,JZ=37808,QZ=37809,ZZ=37810,$Z=37811,WZ=37812,HZ=37813,YZ=37814,XZ=37815,KZ=37816,UZ=37817,GZ=37818,EZ=37819,qZ=37820,NZ=37821,OZ=36492,FZ=36494,RZ=36495,kZ=36283,MZ=36284,DZ=36285,LZ=36286;var VZ=2300,T7=2301;var zZ=0,V6=1,m9=2;var nW=3201;var sW=0,oW=1,O8="",F8="srgb",T0="srgb-linear",BZ="linear",J0="srgb";var iW=512,aW=513,rW=514,_Z=515,tW=516,eW=517,JH=518,QH=519;var CZ="300 es",wZ=2000;class s8{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let Z=this._listeners;if(Z[J]===void 0)Z[J]=[];if(Z[J].indexOf(Q)===-1)Z[J].push(Q)}hasEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return!1;return Z[J]!==void 0&&Z[J].indexOf(Q)!==-1}removeEventListener(J,Q){let Z=this._listeners;if(Z===void 0)return;let $=Z[J];if($!==void 0){let W=$.indexOf(Q);if(W!==-1)$.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J.type];if(Z!==void 0){J.target=this;let $=Z.slice(0);for(let W=0,H=$.length;W<H;W++)$[W].call(this,J);J.target=null}}}var z0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],z$=1234567,N6=Math.PI/180,K9=180/Math.PI;function $8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0,$=Math.random()*4294967295|0;return(z0[J&255]+z0[J>>8&255]+z0[J>>16&255]+z0[J>>24&255]+"-"+z0[Q&255]+z0[Q>>8&255]+"-"+z0[Q>>16&15|64]+z0[Q>>24&255]+"-"+z0[Z&63|128]+z0[Z>>8&255]+"-"+z0[Z>>16&255]+z0[Z>>24&255]+z0[$&255]+z0[$>>8&255]+z0[$>>16&255]+z0[$>>24&255]).toLowerCase()}function gJ(J,Q,Z){return Math.max(Q,Math.min(Z,J))}function IZ(J,Q){return(J%Q+Q)%Q}function dY(J,Q,Z,$,W){return $+(J-Q)*(W-$)/(Z-Q)}function mY(J,Q,Z){if(J!==Q)return(Z-J)/(Q-J);else return 0}function O6(J,Q,Z){return(1-Z)*J+Z*Q}function uY(J,Q,Z,$){return O6(J,Q,1-Math.exp(-Z*$))}function cY(J,Q=1){return Q-Math.abs(IZ(J,Q*2)-Q)}function nY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*(3-2*J)}function sY(J,Q,Z){if(J<=Q)return 0;if(J>=Z)return 1;return J=(J-Q)/(Z-Q),J*J*J*(J*(J*6-15)+10)}function oY(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function iY(J,Q){return J+Math.random()*(Q-J)}function aY(J){return J*(0.5-Math.random())}function rY(J){if(J!==void 0)z$=J;let Q=z$+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function tY(J){return J*N6}function eY(J){return J*K9}function JX(J){return(J&J-1)===0&&J!==0}function QX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function ZX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function $X(J,Q,Z,$,W){let{cos:H,sin:Y}=Math,X=H(Z/2),K=Y(Z/2),U=H((Q+$)/2),G=Y((Q+$)/2),E=H((Q-$)/2),q=Y((Q-$)/2),F=H(($-Q)/2),M=Y(($-Q)/2);switch(W){case"XYX":J.set(X*G,K*E,K*q,X*U);break;case"YZY":J.set(K*q,X*G,K*E,X*U);break;case"ZXZ":J.set(K*E,K*q,X*G,X*U);break;case"XZX":J.set(X*G,K*M,K*F,X*U);break;case"YXY":J.set(K*F,X*G,K*M,X*U);break;case"ZYZ":J.set(K*M,K*F,X*G,X*U);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function Z8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function iJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}var o8={DEG2RAD:N6,RAD2DEG:K9,generateUUID:$8,clamp:gJ,euclideanModulo:IZ,mapLinear:dY,inverseLerp:mY,lerp:O6,damp:uY,pingpong:cY,smoothstep:nY,smootherstep:sY,randInt:oY,randFloat:iY,randFloatSpread:aY,seededRandom:rY,degToRad:tY,radToDeg:eY,isPowerOfTwo:JX,ceilPowerOfTwo:QX,floorPowerOfTwo:ZX,setQuaternionFromProperEuler:$X,normalize:iJ,denormalize:Z8};class pJ{constructor(J=0,Q=0){pJ.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,Z=this.y,$=J.elements;return this.x=$[0]*Q+$[3]*Z+$[6],this.y=$[1]*Q+$[4]*Z+$[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(gJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y;return Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=this.x-J.x,H=this.y-J.y;return this.x=W*Z-H*$+J.x,this.y=W*$+H*Z+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class X8{constructor(J=0,Q=0,Z=0,$=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=Z,this._w=$}static slerpFlat(J,Q,Z,$,W,H,Y){let X=Z[$+0],K=Z[$+1],U=Z[$+2],G=Z[$+3],E=W[H+0],q=W[H+1],F=W[H+2],M=W[H+3];if(Y===0){J[Q+0]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G;return}if(Y===1){J[Q+0]=E,J[Q+1]=q,J[Q+2]=F,J[Q+3]=M;return}if(G!==M||X!==E||K!==q||U!==F){let k=1-Y,N=X*E+K*q+U*F+G*M,O=N>=0?1:-1,_=1-N*N;if(_>Number.EPSILON){let C=Math.sqrt(_),j=Math.atan2(C,N*O);k=Math.sin(k*j)/C,Y=Math.sin(Y*j)/C}let L=Y*O;if(X=X*k+E*L,K=K*k+q*L,U=U*k+F*L,G=G*k+M*L,k===1-Y){let C=1/Math.sqrt(X*X+K*K+U*U+G*G);X*=C,K*=C,U*=C,G*=C}}J[Q]=X,J[Q+1]=K,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,Z,$,W,H){let Y=Z[$],X=Z[$+1],K=Z[$+2],U=Z[$+3],G=W[H],E=W[H+1],q=W[H+2],F=W[H+3];return J[Q]=Y*F+U*G+X*q-K*E,J[Q+1]=X*F+U*E+K*G-Y*q,J[Q+2]=K*F+U*q+Y*E-X*G,J[Q+3]=U*F-Y*G-X*E-K*q,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,Z,$){return this._x=J,this._y=Q,this._z=Z,this._w=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:Z,_y:$,_z:W,_order:H}=J,Y=Math.cos,X=Math.sin,K=Y(Z/2),U=Y($/2),G=Y(W/2),E=X(Z/2),q=X($/2),F=X(W/2);switch(H){case"XYZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"YXZ":this._x=E*U*G+K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"ZXY":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G-E*q*F;break;case"ZYX":this._x=E*U*G-K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G+E*q*F;break;case"YZX":this._x=E*U*G+K*q*F,this._y=K*q*G+E*U*F,this._z=K*U*F-E*q*G,this._w=K*U*G-E*q*F;break;case"XZY":this._x=E*U*G-K*q*F,this._y=K*q*G-E*U*F,this._z=K*U*F+E*q*G,this._w=K*U*G+E*q*F;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+H)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let Z=Q/2,$=Math.sin(Z);return this._x=J.x*$,this._y=J.y*$,this._z=J.z*$,this._w=Math.cos(Z),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,Z=Q[0],$=Q[4],W=Q[8],H=Q[1],Y=Q[5],X=Q[9],K=Q[2],U=Q[6],G=Q[10],E=Z+Y+G;if(E>0){let q=0.5/Math.sqrt(E+1);this._w=0.25/q,this._x=(U-X)*q,this._y=(W-K)*q,this._z=(H-$)*q}else if(Z>Y&&Z>G){let q=2*Math.sqrt(1+Z-Y-G);this._w=(U-X)/q,this._x=0.25*q,this._y=($+H)/q,this._z=(W+K)/q}else if(Y>G){let q=2*Math.sqrt(1+Y-Z-G);this._w=(W-K)/q,this._x=($+H)/q,this._y=0.25*q,this._z=(X+U)/q}else{let q=2*Math.sqrt(1+G-Z-Y);this._w=(H-$)/q,this._x=(W+K)/q,this._y=(X+U)/q,this._z=0.25*q}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let Z=J.dot(Q)+1;if(Z<0.00000001)if(Z=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Z;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Z;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=Z;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(gJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let Z=this.angleTo(J);if(Z===0)return this;let $=Math.min(1,Q/Z);return this.slerp(J,$),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:Z,_y:$,_z:W,_w:H}=J,Y=Q._x,X=Q._y,K=Q._z,U=Q._w;return this._x=Z*U+H*Y+$*K-W*X,this._y=$*U+H*X+W*Y-Z*K,this._z=W*U+H*K+Z*X-$*Y,this._w=H*U-Z*Y-$*X-W*K,this._onChangeCallback(),this}slerp(J,Q){if(Q===0)return this;if(Q===1)return this.copy(J);let Z=this._x,$=this._y,W=this._z,H=this._w,Y=H*J._w+Z*J._x+$*J._y+W*J._z;if(Y<0)this._w=-J._w,this._x=-J._x,this._y=-J._y,this._z=-J._z,Y=-Y;else this.copy(J);if(Y>=1)return this._w=H,this._x=Z,this._y=$,this._z=W,this;let X=1-Y*Y;if(X<=Number.EPSILON){let q=1-Q;return this._w=q*H+Q*this._w,this._x=q*Z+Q*this._x,this._y=q*$+Q*this._y,this._z=q*W+Q*this._z,this.normalize(),this}let K=Math.sqrt(X),U=Math.atan2(K,Y),G=Math.sin((1-Q)*U)/K,E=Math.sin(Q*U)/K;return this._w=H*G+this._w*E,this._x=Z*G+this._x*E,this._y=$*G+this._y*E,this._z=W*G+this._z*E,this._onChangeCallback(),this}slerpQuaternions(J,Q,Z){return this.copy(J).slerp(Q,Z)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),Z=Math.random(),$=Math.sqrt(1-Z),W=Math.sqrt(Z);return this.set($*Math.sin(J),$*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{constructor(J=0,Q=0,Z=0){S.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=Z}set(J,Q,Z){if(Z===void 0)Z=this.z;return this.x=J,this.y=Q,this.z=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(B$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(B$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*Z+W[6]*$,this.y=W[1]*Q+W[4]*Z+W[7]*$,this.z=W[2]*Q+W[5]*Z+W[8]*$,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements,H=1/(W[3]*Q+W[7]*Z+W[11]*$+W[15]);return this.x=(W[0]*Q+W[4]*Z+W[8]*$+W[12])*H,this.y=(W[1]*Q+W[5]*Z+W[9]*$+W[13])*H,this.z=(W[2]*Q+W[6]*Z+W[10]*$+W[14])*H,this}applyQuaternion(J){let Q=this.x,Z=this.y,$=this.z,W=J.x,H=J.y,Y=J.z,X=J.w,K=2*(H*$-Y*Z),U=2*(Y*Q-W*$),G=2*(W*Z-H*Q);return this.x=Q+X*K+H*G-Y*U,this.y=Z+X*U+Y*K-W*G,this.z=$+X*G+W*U-H*K,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,Z=this.y,$=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*Z+W[8]*$,this.y=W[1]*Q+W[5]*Z+W[9]*$,this.z=W[2]*Q+W[6]*Z+W[10]*$,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this.z=gJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this.z=gJ(this.z,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:Z,y:$,z:W}=J,H=Q.x,Y=Q.y,X=Q.z;return this.x=$*X-W*Y,this.y=W*H-Z*X,this.z=Z*Y-$*H,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let Z=J.dot(this)/Q;return this.copy(J).multiplyScalar(Z)}projectOnPlane(J){return KQ.copy(this).projectOnVector(J),this.sub(KQ)}reflect(J){return this.sub(KQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let Z=this.dot(J)/Q;return Math.acos(gJ(Z,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,Z=this.y-J.y,$=this.z-J.z;return Q*Q+Z*Z+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,Z){let $=Math.sin(Q)*J;return this.x=$*Math.sin(Z),this.y=Math.cos(Q)*J,this.z=$*Math.cos(Z),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,Z){return this.x=J*Math.sin(Q),this.y=Z,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),Z=this.setFromMatrixColumn(J,1).length(),$=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=Z,this.z=$,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,Z=Math.sqrt(1-Q*Q);return this.x=Z*Math.cos(J),this.y=Q,this.z=Z*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var KQ=new S,B$=new X8;class fJ{constructor(J,Q,Z,$,W,H,Y,X,K){if(fJ.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,Y,X,K)}set(J,Q,Z,$,W,H,Y,X,K){let U=this.elements;return U[0]=J,U[1]=$,U[2]=Y,U[3]=Q,U[4]=W,U[5]=X,U[6]=Z,U[7]=H,U[8]=K,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],this}extractBasis(J,Q,Z){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),Z.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],Y=Z[3],X=Z[6],K=Z[1],U=Z[4],G=Z[7],E=Z[2],q=Z[5],F=Z[8],M=$[0],k=$[3],N=$[6],O=$[1],_=$[4],L=$[7],C=$[2],j=$[5],w=$[8];return W[0]=H*M+Y*O+X*C,W[3]=H*k+Y*_+X*j,W[6]=H*N+Y*L+X*w,W[1]=K*M+U*O+G*C,W[4]=K*k+U*_+G*j,W[7]=K*N+U*L+G*w,W[2]=E*M+q*O+F*C,W[5]=E*k+q*_+F*j,W[8]=E*N+q*L+F*w,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8];return Q*H*U-Q*Y*K-Z*W*U+Z*Y*X+$*W*K-$*H*X}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=U*H-Y*K,E=Y*X-U*W,q=K*W-H*X,F=Q*G+Z*E+$*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/F;return J[0]=G*M,J[1]=($*K-U*Z)*M,J[2]=(Y*Z-$*H)*M,J[3]=E*M,J[4]=(U*Q-$*X)*M,J[5]=($*W-Y*Q)*M,J[6]=q*M,J[7]=(Z*X-K*Q)*M,J[8]=(H*Q-Z*W)*M,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,Z,$,W,H,Y){let X=Math.cos(W),K=Math.sin(W);return this.set(Z*X,Z*K,-Z*(X*H+K*Y)+H+J,-$*K,$*X,-$*(-K*H+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return this.premultiply(UQ.makeScale(J,Q)),this}rotate(J){return this.premultiply(UQ.makeRotation(-J)),this}translate(J,Q){return this.premultiply(UQ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,Z,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<9;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<9;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var UQ=new fJ;function PZ(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function h9(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function ZH(){let J=h9("canvas");return J.style.display="block",J}var _$={};function f9(J){if(J in _$)return;_$[J]=!0,console.warn(J)}function $H(J,Q,Z){return new Promise(function($,W){function H(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(H,Z);break;default:$()}}setTimeout(H,Z)})}var C$=new fJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),w$=new fJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function WX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,H,Y){if(this.enabled===!1||H===Y||!H||!Y)return W;if(this.spaces[H].transfer==="srgb")W.r=P8(W.r),W.g=P8(W.g),W.b=P8(W.b);if(this.spaces[H].primaries!==this.spaces[Y].primaries)W.applyMatrix3(this.spaces[H].toXYZ),W.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")W.r=y9(W.r),W.g=y9(W.g),W.b=y9(W.b);return W},workingToColorSpace:function(W,H){return this.convert(W,this.workingColorSpace,H)},colorSpaceToWorking:function(W,H){return this.convert(W,H,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,H=this.workingColorSpace){return W.fromArray(this.spaces[H].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,H,Y){return W.copy(this.spaces[H].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,H){return f9("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,H)},toWorkingColorSpace:function(W,H){return f9("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,H)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],Z=[0.2126,0.7152,0.0722],$=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:$,transfer:"linear",toXYZ:C$,fromXYZ:w$,luminanceCoefficients:Z,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:$,transfer:"srgb",toXYZ:C$,fromXYZ:w$,luminanceCoefficients:Z,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var mJ=WX();function P8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function y9(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var L9;class TZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Z;if(J instanceof HTMLCanvasElement)Z=J;else{if(L9===void 0)L9=h9("canvas");L9.width=J.width,L9.height=J.height;let $=L9.getContext("2d");if(J instanceof ImageData)$.putImageData(J,0,0);else $.drawImage(J,0,0,J.width,J.height);Z=L9}return Z.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=h9("canvas");Q.width=J.width,Q.height=J.height;let Z=Q.getContext("2d");Z.drawImage(J,0,0,J.width,J.height);let $=Z.getImageData(0,0,J.width,J.height),W=$.data;for(let H=0;H<W.length;H++)W[H]=P8(W[H]/255)*255;return Z.putImageData($,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let Z=0;Z<Q.length;Z++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[Z]=Math.floor(P8(Q[Z]/255)*255);else Q[Z]=P8(Q[Z]);return{data:Q,width:J.width,height:J.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var HX=0;class z6{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HX++}),this.uuid=$8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Z={uuid:this.uuid,url:""},$=this.data;if($!==null){let W;if(Array.isArray($)){W=[];for(let H=0,Y=$.length;H<Y;H++)if($[H].isDataTexture)W.push(GQ($[H].image));else W.push(GQ($[H]))}else W=GQ($);Z.url=W}if(!Q)J.images[this.uuid]=Z;return Z}}function GQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return TZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var YX=0,EQ=new S;class G0 extends s8{constructor(J=G0.DEFAULT_IMAGE,Q=G0.DEFAULT_MAPPING,Z=1001,$=1001,W=1006,H=1008,Y=1023,X=1009,K=G0.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:YX++}),this.uuid=$8(),this.name="",this.source=new z6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=Z,this.wrapT=$,this.magFilter=W,this.minFilter=H,this.anisotropy=K,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new pJ(0,0),this.repeat=new pJ(1,1),this.center=new pJ(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(EQ).x}get height(){return this.source.getSize(EQ).y}get depth(){return this.source.getSize(EQ).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Texture.setValues(): property '${Q}' does not exist.`);continue}if($&&Z&&($.isVector2&&Z.isVector2))$.copy(Z);else if($&&Z&&($.isVector3&&Z.isVector3))$.copy(Z);else if($&&Z&&($.isMatrix3&&Z.isMatrix3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Z={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(!Q)J.textures[this.uuid]=Z;return Z}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}G0.DEFAULT_IMAGE=null;G0.DEFAULT_MAPPING=300;G0.DEFAULT_ANISOTROPY=1;class sJ{constructor(J=0,Q=0,Z=0,$=1){sJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=Z,this.w=$}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,Z,$){return this.x=J,this.y=Q,this.z=Z,this.w=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,Z=this.y,$=this.z,W=this.w,H=J.elements;return this.x=H[0]*Q+H[4]*Z+H[8]*$+H[12]*W,this.y=H[1]*Q+H[5]*Z+H[9]*$+H[13]*W,this.z=H[2]*Q+H[6]*Z+H[10]*$+H[14]*W,this.w=H[3]*Q+H[7]*Z+H[11]*$+H[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,Z,$,W,H=0.01,Y=0.1,X=J.elements,K=X[0],U=X[4],G=X[8],E=X[1],q=X[5],F=X[9],M=X[2],k=X[6],N=X[10];if(Math.abs(U-E)<0.01&&Math.abs(G-M)<0.01&&Math.abs(F-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+M)<0.1&&Math.abs(F+k)<0.1&&Math.abs(K+q+N-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(K+1)/2,L=(q+1)/2,C=(N+1)/2,j=(U+E)/4,w=(G+M)/4,A=(F+k)/4;if(_>L&&_>C)if(_<0.01)Z=0,$=0.707106781,W=0.707106781;else Z=Math.sqrt(_),$=j/Z,W=w/Z;else if(L>C)if(L<0.01)Z=0.707106781,$=0,W=0.707106781;else $=Math.sqrt(L),Z=j/$,W=A/$;else if(C<0.01)Z=0.707106781,$=0.707106781,W=0;else W=Math.sqrt(C),Z=w/W,$=A/W;return this.set(Z,$,W,Q),this}let O=Math.sqrt((k-F)*(k-F)+(G-M)*(G-M)+(E-U)*(E-U));if(Math.abs(O)<0.001)O=1;return this.x=(k-F)/O,this.y=(G-M)/O,this.z=(E-U)/O,this.w=Math.acos((K+q+N-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=gJ(this.x,J.x,Q.x),this.y=gJ(this.y,J.y,Q.y),this.z=gJ(this.z,J.z,Q.z),this.w=gJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=gJ(this.x,J,Q),this.y=gJ(this.y,J,Q),this.z=gJ(this.z,J,Q),this.w=gJ(this.w,J,Q),this}clampLength(J,Q){let Z=this.length();return this.divideScalar(Z||1).multiplyScalar(gJ(Z,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,Z){return this.x=J.x+(Q.x-J.x)*Z,this.y=J.y+(Q.y-J.y)*Z,this.z=J.z+(Q.z-J.z)*Z,this.w=J.w+(Q.w-J.w)*Z,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AZ extends s8{constructor(J=1,Q=1,Z={}){super();Z=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},Z),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=Z.depth,this.scissor=new sJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new sJ(0,0,J,Q);let $={width:J,height:Q,depth:Z.depth},W=new G0($);this.textures=[];let H=Z.count;for(let Y=0;Y<H;Y++)this.textures[Y]=W.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions(Z),this.depthBuffer=Z.depthBuffer,this.stencilBuffer=Z.stencilBuffer,this.resolveDepthBuffer=Z.resolveDepthBuffer,this.resolveStencilBuffer=Z.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=Z.depthTexture,this.samples=Z.samples,this.multiview=Z.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let Z=0;Z<this.textures.length;Z++)this.textures[Z].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,Z=1){if(this.width!==J||this.height!==Q||this.depth!==Z){this.width=J,this.height=Q,this.depth=Z;for(let $=0,W=this.textures.length;$<W;$++)this.textures[$].image.width=J,this.textures[$].image.height=Q,this.textures[$].image.depth=Z,this.textures[$].isArrayTexture=this.textures[$].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,Z=J.textures.length;Q<Z;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let $=Object.assign({},J.textures[Q].image);this.textures[Q].source=new z6($)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class v8 extends AZ{constructor(J=1,Q=1,Z={}){super(J,Q,Z);this.isWebGLRenderTarget=!0}}class A7 extends G0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class SZ extends G0{constructor(J=null,Q=1,Z=1,$=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:Z,depth:$},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class a0{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q+=3)this.expandByPoint(e0.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,Z=J.count;Q<Z;Q++)this.expandByPoint(e0.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,Z=J.length;Q<Z;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let Z=e0.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub(Z),this.max.copy(J).add(Z),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let Z=J.geometry;if(Z!==void 0){let W=Z.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let H=0,Y=W.count;H<Y;H++){if(J.isMesh===!0)J.getVertexPosition(H,e0);else e0.fromBufferAttribute(W,H);e0.applyMatrix4(J.matrixWorld),this.expandByPoint(e0)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();p6.copy(J.boundingBox)}else{if(Z.boundingBox===null)Z.computeBoundingBox();p6.copy(Z.boundingBox)}p6.applyMatrix4(J.matrixWorld),this.union(p6)}}let $=J.children;for(let W=0,H=$.length;W<H;W++)this.expandByObject($[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,e0),e0.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,Z;if(J.normal.x>0)Q=J.normal.x*this.min.x,Z=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,Z=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,Z+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,Z+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,Z+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,Z+=J.normal.z*this.min.z;return Q<=-J.constant&&Z>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(H6),l6.subVectors(this.max,H6),V9.subVectors(J.a,H6),z9.subVectors(J.b,H6),B9.subVectors(J.c,H6),b8.subVectors(z9,V9),x8.subVectors(B9,z9),W9.subVectors(V9,B9);let Q=[0,-b8.z,b8.y,0,-x8.z,x8.y,0,-W9.z,W9.y,b8.z,0,-b8.x,x8.z,0,-x8.x,W9.z,0,-W9.x,-b8.y,b8.x,0,-x8.y,x8.x,0,-W9.y,W9.x,0];if(!qQ(Q,V9,z9,B9,l6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!qQ(Q,V9,z9,B9,l6))return!1;return d6.crossVectors(b8,x8),Q=[d6.x,d6.y,d6.z],qQ(Q,V9,z9,B9,l6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,e0).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(e0).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return V8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),V8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),V8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),V8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),V8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),V8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),V8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),V8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(V8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var V8=[new S,new S,new S,new S,new S,new S,new S,new S],e0=new S,p6=new a0,V9=new S,z9=new S,B9=new S,b8=new S,x8=new S,W9=new S,H6=new S,l6=new S,d6=new S,H9=new S;function qQ(J,Q,Z,$,W){for(let H=0,Y=J.length-3;H<=Y;H+=3){H9.fromArray(J,H);let X=W.x*Math.abs(H9.x)+W.y*Math.abs(H9.y)+W.z*Math.abs(H9.z),K=Q.dot(H9),U=Z.dot(H9),G=$.dot(H9);if(Math.max(-Math.max(K,U,G),Math.min(K,U,G))>X)return!1}return!0}var XX=new a0,Y6=new S,NQ=new S;class f0{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let Z=this.center;if(Q!==void 0)Z.copy(Q);else XX.setFromPoints(J).getCenter(Z);let $=0;for(let W=0,H=J.length;W<H;W++)$=Math.max($,Z.distanceToSquared(J[W]));return this.radius=Math.sqrt($),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let Z=this.center.distanceToSquared(J);if(Q.copy(J),Z>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Y6.subVectors(J,this.center);let Q=Y6.lengthSq();if(Q>this.radius*this.radius){let Z=Math.sqrt(Q),$=(Z-this.radius)*0.5;this.center.addScaledVector(Y6,$/Z),this.radius+=$}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else NQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Y6.copy(J.center).add(NQ)),this.expandByPoint(Y6.copy(J.center).sub(NQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var z8=new S,OQ=new S,m6=new S,g8=new S,FQ=new S,u6=new S,RQ=new S;class u9{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,z8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let Z=Q.dot(this.direction);if(Z<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,Z)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=z8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return z8.copy(this.origin).addScaledVector(this.direction,Q),z8.distanceToSquared(J)}distanceSqToSegment(J,Q,Z,$){OQ.copy(J).add(Q).multiplyScalar(0.5),m6.copy(Q).sub(J).normalize(),g8.copy(this.origin).sub(OQ);let W=J.distanceTo(Q)*0.5,H=-this.direction.dot(m6),Y=g8.dot(this.direction),X=-g8.dot(m6),K=g8.lengthSq(),U=Math.abs(1-H*H),G,E,q,F;if(U>0)if(G=H*X-Y,E=H*Y-X,F=W*U,G>=0)if(E>=-F)if(E<=F){let M=1/U;G*=M,E*=M,q=G*(G+H*E+2*Y)+E*(H*G+E+2*X)+K}else E=W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else E=-W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;else if(E<=-F)G=Math.max(0,-(-H*W+Y)),E=G>0?-W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else if(E<=F)G=0,E=Math.min(Math.max(-W,-X),W),q=E*(E+2*X)+K;else G=Math.max(0,-(H*W+Y)),E=G>0?W:Math.min(Math.max(-W,-X),W),q=-G*G+E*(E+2*X)+K;else E=H>0?-W:W,G=Math.max(0,-(H*E+Y)),q=-G*G+E*(E+2*X)+K;if(Z)Z.copy(this.origin).addScaledVector(this.direction,G);if($)$.copy(OQ).addScaledVector(m6,E);return q}intersectSphere(J,Q){z8.subVectors(J.center,this.origin);let Z=z8.dot(this.direction),$=z8.dot(z8)-Z*Z,W=J.radius*J.radius;if($>W)return null;let H=Math.sqrt(W-$),Y=Z-H,X=Z+H;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Z=-(this.origin.dot(J.normal)+J.constant)/Q;return Z>=0?Z:null}intersectPlane(J,Q){let Z=this.distanceToPlane(J);if(Z===null)return null;return this.at(Z,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let Z,$,W,H,Y,X,K=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(K>=0)Z=(J.min.x-E.x)*K,$=(J.max.x-E.x)*K;else Z=(J.max.x-E.x)*K,$=(J.min.x-E.x)*K;if(U>=0)W=(J.min.y-E.y)*U,H=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,H=(J.min.y-E.y)*U;if(Z>H||W>$)return null;if(W>Z||isNaN(Z))Z=W;if(H<$||isNaN($))$=H;if(G>=0)Y=(J.min.z-E.z)*G,X=(J.max.z-E.z)*G;else Y=(J.max.z-E.z)*G,X=(J.min.z-E.z)*G;if(Z>X||Y>$)return null;if(Y>Z||Z!==Z)Z=Y;if(X<$||$!==$)$=X;if($<0)return null;return this.at(Z>=0?Z:$,Q)}intersectsBox(J){return this.intersectBox(J,z8)!==null}intersectTriangle(J,Q,Z,$,W){FQ.subVectors(Q,J),u6.subVectors(Z,J),RQ.crossVectors(FQ,u6);let H=this.direction.dot(RQ),Y;if(H>0){if($)return null;Y=1}else if(H<0)Y=-1,H=-H;else return null;g8.subVectors(this.origin,J);let X=Y*this.direction.dot(u6.crossVectors(g8,u6));if(X<0)return null;let K=Y*this.direction.dot(FQ.cross(g8));if(K<0)return null;if(X+K>H)return null;let U=-Y*g8.dot(RQ);if(U<0)return null;return this.at(U/H,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yJ{constructor(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,M,k){if(yJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,M,k)}set(J,Q,Z,$,W,H,Y,X,K,U,G,E,q,F,M,k){let N=this.elements;return N[0]=J,N[4]=Q,N[8]=Z,N[12]=$,N[1]=W,N[5]=H,N[9]=Y,N[13]=X,N[2]=K,N[6]=U,N[10]=G,N[14]=E,N[3]=q,N[7]=F,N[11]=M,N[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yJ().fromArray(this.elements)}copy(J){let Q=this.elements,Z=J.elements;return Q[0]=Z[0],Q[1]=Z[1],Q[2]=Z[2],Q[3]=Z[3],Q[4]=Z[4],Q[5]=Z[5],Q[6]=Z[6],Q[7]=Z[7],Q[8]=Z[8],Q[9]=Z[9],Q[10]=Z[10],Q[11]=Z[11],Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],Q[15]=Z[15],this}copyPosition(J){let Q=this.elements,Z=J.elements;return Q[12]=Z[12],Q[13]=Z[13],Q[14]=Z[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,Z){return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),Z.setFromMatrixColumn(this,2),this}makeBasis(J,Q,Z){return this.set(J.x,Q.x,Z.x,0,J.y,Q.y,Z.y,0,J.z,Q.z,Z.z,0,0,0,0,1),this}extractRotation(J){let Q=this.elements,Z=J.elements,$=1/_9.setFromMatrixColumn(J,0).length(),W=1/_9.setFromMatrixColumn(J,1).length(),H=1/_9.setFromMatrixColumn(J,2).length();return Q[0]=Z[0]*$,Q[1]=Z[1]*$,Q[2]=Z[2]*$,Q[3]=0,Q[4]=Z[4]*W,Q[5]=Z[5]*W,Q[6]=Z[6]*W,Q[7]=0,Q[8]=Z[8]*H,Q[9]=Z[9]*H,Q[10]=Z[10]*H,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z,H=Math.cos(Z),Y=Math.sin(Z),X=Math.cos($),K=Math.sin($),U=Math.cos(W),G=Math.sin(W);if(J.order==="XYZ"){let E=H*U,q=H*G,F=Y*U,M=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=K,Q[1]=q+F*K,Q[5]=E-M*K,Q[9]=-Y*X,Q[2]=M-E*K,Q[6]=F+q*K,Q[10]=H*X}else if(J.order==="YXZ"){let E=X*U,q=X*G,F=K*U,M=K*G;Q[0]=E+M*Y,Q[4]=F*Y-q,Q[8]=H*K,Q[1]=H*G,Q[5]=H*U,Q[9]=-Y,Q[2]=q*Y-F,Q[6]=M+E*Y,Q[10]=H*X}else if(J.order==="ZXY"){let E=X*U,q=X*G,F=K*U,M=K*G;Q[0]=E-M*Y,Q[4]=-H*G,Q[8]=F+q*Y,Q[1]=q+F*Y,Q[5]=H*U,Q[9]=M-E*Y,Q[2]=-H*K,Q[6]=Y,Q[10]=H*X}else if(J.order==="ZYX"){let E=H*U,q=H*G,F=Y*U,M=Y*G;Q[0]=X*U,Q[4]=F*K-q,Q[8]=E*K+M,Q[1]=X*G,Q[5]=M*K+E,Q[9]=q*K-F,Q[2]=-K,Q[6]=Y*X,Q[10]=H*X}else if(J.order==="YZX"){let E=H*X,q=H*K,F=Y*X,M=Y*K;Q[0]=X*U,Q[4]=M-E*G,Q[8]=F*G+q,Q[1]=G,Q[5]=H*U,Q[9]=-Y*U,Q[2]=-K*U,Q[6]=q*G+F,Q[10]=E-M*G}else if(J.order==="XZY"){let E=H*X,q=H*K,F=Y*X,M=Y*K;Q[0]=X*U,Q[4]=-G,Q[8]=K*U,Q[1]=E*G+M,Q[5]=H*U,Q[9]=q*G-F,Q[2]=F*G-q,Q[6]=Y*U,Q[10]=M*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(KX,J,UX)}lookAt(J,Q,Z){let $=this.elements;if(v0.subVectors(J,Q),v0.lengthSq()===0)v0.z=1;if(v0.normalize(),p8.crossVectors(Z,v0),p8.lengthSq()===0){if(Math.abs(Z.z)===1)v0.x+=0.0001;else v0.z+=0.0001;v0.normalize(),p8.crossVectors(Z,v0)}return p8.normalize(),c6.crossVectors(v0,p8),$[0]=p8.x,$[4]=c6.x,$[8]=v0.x,$[1]=p8.y,$[5]=c6.y,$[9]=v0.y,$[2]=p8.z,$[6]=c6.z,$[10]=v0.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let Z=J.elements,$=Q.elements,W=this.elements,H=Z[0],Y=Z[4],X=Z[8],K=Z[12],U=Z[1],G=Z[5],E=Z[9],q=Z[13],F=Z[2],M=Z[6],k=Z[10],N=Z[14],O=Z[3],_=Z[7],L=Z[11],C=Z[15],j=$[0],w=$[4],A=$[8],x=$[12],z=$[1],V=$[5],T=$[9],d=$[13],c=$[2],l=$[6],i=$[10],m=$[14],r=$[3],g=$[7],HJ=$[11],GJ=$[15];return W[0]=H*j+Y*z+X*c+K*r,W[4]=H*w+Y*V+X*l+K*g,W[8]=H*A+Y*T+X*i+K*HJ,W[12]=H*x+Y*d+X*m+K*GJ,W[1]=U*j+G*z+E*c+q*r,W[5]=U*w+G*V+E*l+q*g,W[9]=U*A+G*T+E*i+q*HJ,W[13]=U*x+G*d+E*m+q*GJ,W[2]=F*j+M*z+k*c+N*r,W[6]=F*w+M*V+k*l+N*g,W[10]=F*A+M*T+k*i+N*HJ,W[14]=F*x+M*d+k*m+N*GJ,W[3]=O*j+_*z+L*c+C*r,W[7]=O*w+_*V+L*l+C*g,W[11]=O*A+_*T+L*i+C*HJ,W[15]=O*x+_*d+L*m+C*GJ,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],Z=J[4],$=J[8],W=J[12],H=J[1],Y=J[5],X=J[9],K=J[13],U=J[2],G=J[6],E=J[10],q=J[14],F=J[3],M=J[7],k=J[11],N=J[15];return F*(+W*X*G-$*K*G-W*Y*E+Z*K*E+$*Y*q-Z*X*q)+M*(+Q*X*q-Q*K*E+W*H*E-$*H*q+$*K*U-W*X*U)+k*(+Q*K*G-Q*Y*q-W*H*G+Z*H*q+W*Y*U-Z*K*U)+N*(-$*Y*U-Q*X*G+Q*Y*E+$*H*G-Z*H*E+Z*X*U)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,Z){let $=this.elements;if(J.isVector3)$[12]=J.x,$[13]=J.y,$[14]=J.z;else $[12]=J,$[13]=Q,$[14]=Z;return this}invert(){let J=this.elements,Q=J[0],Z=J[1],$=J[2],W=J[3],H=J[4],Y=J[5],X=J[6],K=J[7],U=J[8],G=J[9],E=J[10],q=J[11],F=J[12],M=J[13],k=J[14],N=J[15],O=G*k*K-M*E*K+M*X*q-Y*k*q-G*X*N+Y*E*N,_=F*E*K-U*k*K-F*X*q+H*k*q+U*X*N-H*E*N,L=U*M*K-F*G*K+F*Y*q-H*M*q-U*Y*N+H*G*N,C=F*G*X-U*M*X-F*Y*E+H*M*E+U*Y*k-H*G*k,j=Q*O+Z*_+$*L+W*C;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/j;return J[0]=O*w,J[1]=(M*E*W-G*k*W-M*$*q+Z*k*q+G*$*N-Z*E*N)*w,J[2]=(Y*k*W-M*X*W+M*$*K-Z*k*K-Y*$*N+Z*X*N)*w,J[3]=(G*X*W-Y*E*W-G*$*K+Z*E*K+Y*$*q-Z*X*q)*w,J[4]=_*w,J[5]=(U*k*W-F*E*W+F*$*q-Q*k*q-U*$*N+Q*E*N)*w,J[6]=(F*X*W-H*k*W-F*$*K+Q*k*K+H*$*N-Q*X*N)*w,J[7]=(H*E*W-U*X*W+U*$*K-Q*E*K-H*$*q+Q*X*q)*w,J[8]=L*w,J[9]=(F*G*W-U*M*W-F*Z*q+Q*M*q+U*Z*N-Q*G*N)*w,J[10]=(H*M*W-F*Y*W+F*Z*K-Q*M*K-H*Z*N+Q*Y*N)*w,J[11]=(U*Y*W-H*G*W-U*Z*K+Q*G*K+H*Z*q-Q*Y*q)*w,J[12]=C*w,J[13]=(U*M*$-F*G*$+F*Z*E-Q*M*E-U*Z*k+Q*G*k)*w,J[14]=(F*Y*$-H*M*$-F*Z*X+Q*M*X+H*Z*k-Q*Y*k)*w,J[15]=(H*G*$-U*Y*$+U*Z*X-Q*G*X-H*Z*E+Q*Y*E)*w,this}scale(J){let Q=this.elements,Z=J.x,$=J.y,W=J.z;return Q[0]*=Z,Q[4]*=$,Q[8]*=W,Q[1]*=Z,Q[5]*=$,Q[9]*=W,Q[2]*=Z,Q[6]*=$,Q[10]*=W,Q[3]*=Z,Q[7]*=$,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Z=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],$=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,Z,$))}makeTranslation(J,Q,Z){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,Z,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(1,0,0,0,0,Q,-Z,0,0,Z,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,0,Z,0,0,1,0,0,-Z,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),Z=Math.sin(J);return this.set(Q,-Z,0,0,Z,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let Z=Math.cos(Q),$=Math.sin(Q),W=1-Z,H=J.x,Y=J.y,X=J.z,K=W*H,U=W*Y;return this.set(K*H+Z,K*Y-$*X,K*X+$*Y,0,K*Y+$*X,U*Y+Z,U*X-$*H,0,K*X-$*Y,U*X+$*H,W*X*X+Z,0,0,0,0,1),this}makeScale(J,Q,Z){return this.set(J,0,0,0,0,Q,0,0,0,0,Z,0,0,0,0,1),this}makeShear(J,Q,Z,$,W,H){return this.set(1,Z,W,0,J,1,H,0,Q,$,1,0,0,0,0,1),this}compose(J,Q,Z){let $=this.elements,W=Q._x,H=Q._y,Y=Q._z,X=Q._w,K=W+W,U=H+H,G=Y+Y,E=W*K,q=W*U,F=W*G,M=H*U,k=H*G,N=Y*G,O=X*K,_=X*U,L=X*G,C=Z.x,j=Z.y,w=Z.z;return $[0]=(1-(M+N))*C,$[1]=(q+L)*C,$[2]=(F-_)*C,$[3]=0,$[4]=(q-L)*j,$[5]=(1-(E+N))*j,$[6]=(k+O)*j,$[7]=0,$[8]=(F+_)*w,$[9]=(k-O)*w,$[10]=(1-(E+M))*w,$[11]=0,$[12]=J.x,$[13]=J.y,$[14]=J.z,$[15]=1,this}decompose(J,Q,Z){let $=this.elements,W=_9.set($[0],$[1],$[2]).length(),H=_9.set($[4],$[5],$[6]).length(),Y=_9.set($[8],$[9],$[10]).length();if(this.determinant()<0)W=-W;J.x=$[12],J.y=$[13],J.z=$[14],J8.copy(this);let K=1/W,U=1/H,G=1/Y;return J8.elements[0]*=K,J8.elements[1]*=K,J8.elements[2]*=K,J8.elements[4]*=U,J8.elements[5]*=U,J8.elements[6]*=U,J8.elements[8]*=G,J8.elements[9]*=G,J8.elements[10]*=G,Q.setFromRotationMatrix(J8),Z.x=W,Z.y=H,Z.z=Y,this}makePerspective(J,Q,Z,$,W,H,Y=2000,X=!1){let K=this.elements,U=2*W/(Q-J),G=2*W/(Z-$),E=(Q+J)/(Q-J),q=(Z+$)/(Z-$),F,M;if(X)F=W/(H-W),M=H*W/(H-W);else if(Y===2000)F=-(H+W)/(H-W),M=-2*H*W/(H-W);else if(Y===2001)F=-H/(H-W),M=-H*W/(H-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=E,K[12]=0,K[1]=0,K[5]=G,K[9]=q,K[13]=0,K[2]=0,K[6]=0,K[10]=F,K[14]=M,K[3]=0,K[7]=0,K[11]=-1,K[15]=0,this}makeOrthographic(J,Q,Z,$,W,H,Y=2000,X=!1){let K=this.elements,U=2/(Q-J),G=2/(Z-$),E=-(Q+J)/(Q-J),q=-(Z+$)/(Z-$),F,M;if(X)F=1/(H-W),M=H/(H-W);else if(Y===2000)F=-2/(H-W),M=-(H+W)/(H-W);else if(Y===2001)F=-1/(H-W),M=-W/(H-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return K[0]=U,K[4]=0,K[8]=0,K[12]=E,K[1]=0,K[5]=G,K[9]=0,K[13]=q,K[2]=0,K[6]=0,K[10]=F,K[14]=M,K[3]=0,K[7]=0,K[11]=0,K[15]=1,this}equals(J){let Q=this.elements,Z=J.elements;for(let $=0;$<16;$++)if(Q[$]!==Z[$])return!1;return!0}fromArray(J,Q=0){for(let Z=0;Z<16;Z++)this.elements[Z]=J[Z+Q];return this}toArray(J=[],Q=0){let Z=this.elements;return J[Q]=Z[0],J[Q+1]=Z[1],J[Q+2]=Z[2],J[Q+3]=Z[3],J[Q+4]=Z[4],J[Q+5]=Z[5],J[Q+6]=Z[6],J[Q+7]=Z[7],J[Q+8]=Z[8],J[Q+9]=Z[9],J[Q+10]=Z[10],J[Q+11]=Z[11],J[Q+12]=Z[12],J[Q+13]=Z[13],J[Q+14]=Z[14],J[Q+15]=Z[15],J}}var _9=new S,J8=new yJ,KX=new S(0,0,0),UX=new S(1,1,1),p8=new S,c6=new S,v0=new S,I$=new yJ,P$=new X8;class W8{constructor(J=0,Q=0,Z=0,$=W8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=Z,this._order=$}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,Z,$=this._order){return this._x=J,this._y=Q,this._z=Z,this._order=$,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,Z=!0){let $=J.elements,W=$[0],H=$[4],Y=$[8],X=$[1],K=$[5],U=$[9],G=$[2],E=$[6],q=$[10];switch(Q){case"XYZ":if(this._y=Math.asin(gJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,q),this._z=Math.atan2(-H,W);else this._x=Math.atan2(E,K),this._z=0;break;case"YXZ":if(this._x=Math.asin(-gJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,q),this._z=Math.atan2(X,K);else this._y=Math.atan2(-G,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(gJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,q),this._z=Math.atan2(-H,K);else this._y=0,this._z=Math.atan2(X,W);break;case"ZYX":if(this._y=Math.asin(-gJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,q),this._z=Math.atan2(X,W);else this._x=0,this._z=Math.atan2(-H,K);break;case"YZX":if(this._z=Math.asin(gJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,K),this._y=Math.atan2(-G,W);else this._x=0,this._y=Math.atan2(Y,q);break;case"XZY":if(this._z=Math.asin(-gJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(E,K),this._y=Math.atan2(Y,W);else this._x=Math.atan2(-U,q),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,Z===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,Z){return I$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(I$,Q,Z)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return P$.setFromEuler(this),this.setFromQuaternion(P$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}W8.DEFAULT_ORDER="XYZ";class S7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var GX=0,T$=new S,C9=new X8,B8=new yJ,n6=new S,X6=new S,EX=new S,qX=new X8,A$=new S(1,0,0),S$=new S(0,1,0),j$=new S(0,0,1),v$={type:"added"},NX={type:"removed"},w9={type:"childadded",child:null},kQ={type:"childremoved",child:null};class Z0 extends s8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:GX++}),this.uuid=$8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Z0.DEFAULT_UP.clone();let J=new S,Q=new W8,Z=new X8,$=new S(1,1,1);function W(){Z.setFromEuler(Q,!1)}function H(){Q.setFromQuaternion(Z,void 0,!1)}Q._onChange(W),Z._onChange(H),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:Z},scale:{configurable:!0,enumerable:!0,value:$},modelViewMatrix:{value:new yJ},normalMatrix:{value:new fJ}}),this.matrix=new yJ,this.matrixWorld=new yJ,this.matrixAutoUpdate=Z0.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Z0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return C9.setFromAxisAngle(J,Q),this.quaternion.multiply(C9),this}rotateOnWorldAxis(J,Q){return C9.setFromAxisAngle(J,Q),this.quaternion.premultiply(C9),this}rotateX(J){return this.rotateOnAxis(A$,J)}rotateY(J){return this.rotateOnAxis(S$,J)}rotateZ(J){return this.rotateOnAxis(j$,J)}translateOnAxis(J,Q){return T$.copy(J).applyQuaternion(this.quaternion),this.position.add(T$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(A$,J)}translateY(J){return this.translateOnAxis(S$,J)}translateZ(J){return this.translateOnAxis(j$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(B8.copy(this.matrixWorld).invert())}lookAt(J,Q,Z){if(J.isVector3)n6.copy(J);else n6.set(J,Q,Z);let $=this.parent;if(this.updateWorldMatrix(!0,!1),X6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)B8.lookAt(X6,n6,this.up);else B8.lookAt(n6,X6,this.up);if(this.quaternion.setFromRotationMatrix(B8),$)B8.extractRotation($.matrixWorld),C9.setFromRotationMatrix(B8),this.quaternion.premultiply(C9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(v$),w9.child=J,this.dispatchEvent(w9),w9.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Z=0;Z<arguments.length;Z++)this.remove(arguments[Z]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(NX),kQ.child=J,this.dispatchEvent(kQ),kQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),B8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),B8.multiply(J.parent.matrixWorld);return J.applyMatrix4(B8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(v$),w9.child=J,this.dispatchEvent(w9),w9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let Z=0,$=this.children.length;Z<$;Z++){let H=this.children[Z].getObjectByProperty(J,Q);if(H!==void 0)return H}return}getObjectsByProperty(J,Q,Z=[]){if(this[J]===Q)Z.push(this);let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].getObjectsByProperty(J,Q,Z);return Z}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X6,J,EX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(X6,qX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let Z=0,$=Q.length;Z<$;Z++)Q[Z].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let $=this.children;for(let W=0,H=$.length;W<H;W++)$[W].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",Z={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Z.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let $={};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.castShadow===!0)$.castShadow=!0;if(this.receiveShadow===!0)$.receiveShadow=!0;if(this.visible===!1)$.visible=!1;if(this.frustumCulled===!1)$.frustumCulled=!1;if(this.renderOrder!==0)$.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)$.userData=this.userData;if($.layers=this.layers.mask,$.matrix=this.matrix.toArray(),$.up=this.up.toArray(),this.matrixAutoUpdate===!1)$.matrixAutoUpdate=!1;if(this.isInstancedMesh){if($.type="InstancedMesh",$.count=this.count,$.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)$.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if($.type="BatchedMesh",$.perObjectFrustumCulled=this.perObjectFrustumCulled,$.sortObjects=this.sortObjects,$.drawRanges=this._drawRanges,$.reservedRanges=this._reservedRanges,$.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),$.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),$.availableInstanceIds=this._availableInstanceIds.slice(),$.availableGeometryIds=this._availableGeometryIds.slice(),$.nextIndexStart=this._nextIndexStart,$.nextVertexStart=this._nextVertexStart,$.geometryCount=this._geometryCount,$.maxInstanceCount=this._maxInstanceCount,$.maxVertexCount=this._maxVertexCount,$.maxIndexCount=this._maxIndexCount,$.geometryInitialized=this._geometryInitialized,$.matricesTexture=this._matricesTexture.toJSON(J),$.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)$.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)$.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)$.boundingBox=this.boundingBox.toJSON()}function W(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)$.background=this.background.toJSON();else if(this.background.isTexture)$.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)$.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){$.geometry=W(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let K=0,U=X.length;K<U;K++){let G=X[K];W(J.shapes,G)}else W(J.shapes,X)}}if(this.isSkinnedMesh){if($.bindMode=this.bindMode,$.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),$.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,K=this.material.length;X<K;X++)Y.push(W(J.materials,this.material[X]));$.material=Y}else $.material=W(J.materials,this.material);if(this.children.length>0){$.children=[];for(let Y=0;Y<this.children.length;Y++)$.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){$.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];$.animations.push(W(J.animations,X))}}if(Q){let Y=H(J.geometries),X=H(J.materials),K=H(J.textures),U=H(J.images),G=H(J.shapes),E=H(J.skeletons),q=H(J.animations),F=H(J.nodes);if(Y.length>0)Z.geometries=Y;if(X.length>0)Z.materials=X;if(K.length>0)Z.textures=K;if(U.length>0)Z.images=U;if(G.length>0)Z.shapes=G;if(E.length>0)Z.skeletons=E;if(q.length>0)Z.animations=q;if(F.length>0)Z.nodes=F}return Z.object=$,Z;function H(Y){let X=[];for(let K in Y){let U=Y[K];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let Z=0;Z<J.children.length;Z++){let $=J.children[Z];this.add($.clone())}return this}}Z0.DEFAULT_UP=new S(0,1,0);Z0.DEFAULT_MATRIX_AUTO_UPDATE=!0;Z0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Q8=new S,_8=new S,MQ=new S,C8=new S,I9=new S,P9=new S,y$=new S,DQ=new S,LQ=new S,VQ=new S,zQ=new sJ,BQ=new sJ,_Q=new sJ;class n0{constructor(J=new S,Q=new S,Z=new S){this.a=J,this.b=Q,this.c=Z}static getNormal(J,Q,Z,$){$.subVectors(Z,Q),Q8.subVectors(J,Q),$.cross(Q8);let W=$.lengthSq();if(W>0)return $.multiplyScalar(1/Math.sqrt(W));return $.set(0,0,0)}static getBarycoord(J,Q,Z,$,W){Q8.subVectors($,Q),_8.subVectors(Z,Q),MQ.subVectors(J,Q);let H=Q8.dot(Q8),Y=Q8.dot(_8),X=Q8.dot(MQ),K=_8.dot(_8),U=_8.dot(MQ),G=H*K-Y*Y;if(G===0)return W.set(0,0,0),null;let E=1/G,q=(K*X-Y*U)*E,F=(H*U-Y*X)*E;return W.set(1-q-F,F,q)}static containsPoint(J,Q,Z,$){if(this.getBarycoord(J,Q,Z,$,C8)===null)return!1;return C8.x>=0&&C8.y>=0&&C8.x+C8.y<=1}static getInterpolation(J,Q,Z,$,W,H,Y,X){if(this.getBarycoord(J,Q,Z,$,C8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(W,C8.x),X.addScaledVector(H,C8.y),X.addScaledVector(Y,C8.z),X}static getInterpolatedAttribute(J,Q,Z,$,W,H){return zQ.setScalar(0),BQ.setScalar(0),_Q.setScalar(0),zQ.fromBufferAttribute(J,Q),BQ.fromBufferAttribute(J,Z),_Q.fromBufferAttribute(J,$),H.setScalar(0),H.addScaledVector(zQ,W.x),H.addScaledVector(BQ,W.y),H.addScaledVector(_Q,W.z),H}static isFrontFacing(J,Q,Z,$){return Q8.subVectors(Z,Q),_8.subVectors(J,Q),Q8.cross(_8).dot($)<0?!0:!1}set(J,Q,Z){return this.a.copy(J),this.b.copy(Q),this.c.copy(Z),this}setFromPointsAndIndices(J,Q,Z,$){return this.a.copy(J[Q]),this.b.copy(J[Z]),this.c.copy(J[$]),this}setFromAttributeAndIndices(J,Q,Z,$){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,Z),this.c.fromBufferAttribute(J,$),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Q8.subVectors(this.c,this.b),_8.subVectors(this.a,this.b),Q8.cross(_8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return n0.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return n0.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,Z,$,W){return n0.getInterpolation(J,this.a,this.b,this.c,Q,Z,$,W)}containsPoint(J){return n0.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return n0.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let Z=this.a,$=this.b,W=this.c,H,Y;I9.subVectors($,Z),P9.subVectors(W,Z),DQ.subVectors(J,Z);let X=I9.dot(DQ),K=P9.dot(DQ);if(X<=0&&K<=0)return Q.copy(Z);LQ.subVectors(J,$);let U=I9.dot(LQ),G=P9.dot(LQ);if(U>=0&&G<=U)return Q.copy($);let E=X*G-U*K;if(E<=0&&X>=0&&U<=0)return H=X/(X-U),Q.copy(Z).addScaledVector(I9,H);VQ.subVectors(J,W);let q=I9.dot(VQ),F=P9.dot(VQ);if(F>=0&&q<=F)return Q.copy(W);let M=q*K-X*F;if(M<=0&&K>=0&&F<=0)return Y=K/(K-F),Q.copy(Z).addScaledVector(P9,Y);let k=U*F-q*G;if(k<=0&&G-U>=0&&q-F>=0)return y$.subVectors(W,$),Y=(G-U)/(G-U+(q-F)),Q.copy($).addScaledVector(y$,Y);let N=1/(k+M+E);return H=M*N,Y=E*N,Q.copy(Z).addScaledVector(I9,H).addScaledVector(P9,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}var WH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l8={h:0,s:0,l:0},s6={h:0,s:0,l:0};function CQ(J,Q,Z){if(Z<0)Z+=1;if(Z>1)Z-=1;if(Z<0.16666666666666666)return J+(Q-J)*6*Z;if(Z<0.5)return Q;if(Z<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-Z);return J}class AJ{constructor(J,Q,Z){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,Z)}set(J,Q,Z){if(Q===void 0&&Z===void 0){let $=J;if($&&$.isColor)this.copy($);else if(typeof $==="number")this.setHex($);else if(typeof $==="string")this.setStyle($)}else this.setRGB(J,Q,Z);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,mJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,Z,$=mJ.workingColorSpace){return this.r=J,this.g=Q,this.b=Z,mJ.colorSpaceToWorking(this,$),this}setHSL(J,Q,Z,$=mJ.workingColorSpace){if(J=IZ(J,1),Q=gJ(Q,0,1),Z=gJ(Z,0,1),Q===0)this.r=this.g=this.b=Z;else{let W=Z<=0.5?Z*(1+Q):Z+Q-Z*Q,H=2*Z-W;this.r=CQ(H,W,J+0.3333333333333333),this.g=CQ(H,W,J),this.b=CQ(H,W,J-0.3333333333333333)}return mJ.colorSpaceToWorking(this,$),this}setStyle(J,Q="srgb"){function Z(W){if(W===void 0)return;if(parseFloat(W)<1)console.warn("THREE.Color: Alpha component of "+J+" will be ignored.")}let $;if($=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,H=$[1],Y=$[2];switch(H){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Z(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:console.warn("THREE.Color: Unknown color model "+J)}}else if($=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=$[1],H=W.length;if(H===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(H===6)return this.setHex(parseInt(W,16),Q);else console.warn("THREE.Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let Z=WH[J.toLowerCase()];if(Z!==void 0)this.setHex(Z,Q);else console.warn("THREE.Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=P8(J.r),this.g=P8(J.g),this.b=P8(J.b),this}copyLinearToSRGB(J){return this.r=y9(J.r),this.g=y9(J.g),this.b=y9(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return mJ.workingToColorSpace(B0.copy(this),J),Math.round(gJ(B0.r*255,0,255))*65536+Math.round(gJ(B0.g*255,0,255))*256+Math.round(gJ(B0.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=mJ.workingColorSpace){mJ.workingToColorSpace(B0.copy(this),Q);let{r:Z,g:$,b:W}=B0,H=Math.max(Z,$,W),Y=Math.min(Z,$,W),X,K,U=(Y+H)/2;if(Y===H)X=0,K=0;else{let G=H-Y;switch(K=U<=0.5?G/(H+Y):G/(2-H-Y),H){case Z:X=($-W)/G+($<W?6:0);break;case $:X=(W-Z)/G+2;break;case W:X=(Z-$)/G+4;break}X/=6}return J.h=X,J.s=K,J.l=U,J}getRGB(J,Q=mJ.workingColorSpace){return mJ.workingToColorSpace(B0.copy(this),Q),J.r=B0.r,J.g=B0.g,J.b=B0.b,J}getStyle(J="srgb"){mJ.workingToColorSpace(B0.copy(this),J);let{r:Q,g:Z,b:$}=B0;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${Z.toFixed(3)} ${$.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round(Z*255)},${Math.round($*255)})`}offsetHSL(J,Q,Z){return this.getHSL(l8),this.setHSL(l8.h+J,l8.s+Q,l8.l+Z)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,Z){return this.r=J.r+(Q.r-J.r)*Z,this.g=J.g+(Q.g-J.g)*Z,this.b=J.b+(Q.b-J.b)*Z,this}lerpHSL(J,Q){this.getHSL(l8),J.getHSL(s6);let Z=O6(l8.h,s6.h,Q),$=O6(l8.s,s6.s,Q),W=O6(l8.l,s6.l,Q);return this.setHSL(Z,$,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,Z=this.g,$=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*Z+W[6]*$,this.g=W[1]*Q+W[4]*Z+W[7]*$,this.b=W[2]*Q+W[5]*Z+W[8]*$,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var B0=new AJ;AJ.NAMES=WH;var OX=0;class b0 extends s8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:OX++}),this.uuid=$8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new AJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let Z=J[Q];if(Z===void 0){console.warn(`THREE.Material: parameter '${Q}' has value of undefined.`);continue}let $=this[Q];if($===void 0){console.warn(`THREE.Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if($&&$.isColor)$.set(Z);else if($&&$.isVector3&&(Z&&Z.isVector3))$.copy(Z);else this[Q]=Z}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let Z={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.color&&this.color.isColor)Z.color=this.color.getHex();if(this.roughness!==void 0)Z.roughness=this.roughness;if(this.metalness!==void 0)Z.metalness=this.metalness;if(this.sheen!==void 0)Z.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Z.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Z.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Z.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)Z.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Z.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Z.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Z.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Z.shininess=this.shininess;if(this.clearcoat!==void 0)Z.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Z.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Z.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Z.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Z.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Z.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Z.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Z.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Z.dispersion=this.dispersion;if(this.iridescence!==void 0)Z.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Z.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Z.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Z.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Z.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Z.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Z.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Z.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Z.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Z.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Z.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Z.lightMap=this.lightMap.toJSON(J).uuid,Z.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Z.aoMap=this.aoMap.toJSON(J).uuid,Z.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Z.bumpMap=this.bumpMap.toJSON(J).uuid,Z.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Z.normalMap=this.normalMap.toJSON(J).uuid,Z.normalMapType=this.normalMapType,Z.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Z.displacementMap=this.displacementMap.toJSON(J).uuid,Z.displacementScale=this.displacementScale,Z.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Z.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Z.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Z.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Z.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Z.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Z.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Z.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Z.combine=this.combine}if(this.envMapRotation!==void 0)Z.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Z.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Z.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Z.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Z.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Z.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Z.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Z.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Z.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)Z.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Z.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Z.size=this.size;if(this.shadowSide!==null)Z.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)Z.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)Z.blending=this.blending;if(this.side!==0)Z.side=this.side;if(this.vertexColors===!0)Z.vertexColors=!0;if(this.opacity<1)Z.opacity=this.opacity;if(this.transparent===!0)Z.transparent=!0;if(this.blendSrc!==204)Z.blendSrc=this.blendSrc;if(this.blendDst!==205)Z.blendDst=this.blendDst;if(this.blendEquation!==100)Z.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)Z.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)Z.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)Z.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)Z.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)Z.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)Z.depthFunc=this.depthFunc;if(this.depthTest===!1)Z.depthTest=this.depthTest;if(this.depthWrite===!1)Z.depthWrite=this.depthWrite;if(this.colorWrite===!1)Z.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)Z.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)Z.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)Z.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)Z.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)Z.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)Z.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)Z.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)Z.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)Z.rotation=this.rotation;if(this.polygonOffset===!0)Z.polygonOffset=!0;if(this.polygonOffsetFactor!==0)Z.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)Z.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)Z.linewidth=this.linewidth;if(this.dashSize!==void 0)Z.dashSize=this.dashSize;if(this.gapSize!==void 0)Z.gapSize=this.gapSize;if(this.scale!==void 0)Z.scale=this.scale;if(this.dithering===!0)Z.dithering=!0;if(this.alphaTest>0)Z.alphaTest=this.alphaTest;if(this.alphaHash===!0)Z.alphaHash=!0;if(this.alphaToCoverage===!0)Z.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)Z.premultipliedAlpha=!0;if(this.forceSinglePass===!0)Z.forceSinglePass=!0;if(this.wireframe===!0)Z.wireframe=!0;if(this.wireframeLinewidth>1)Z.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")Z.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")Z.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)Z.flatShading=!0;if(this.visible===!1)Z.visible=!1;if(this.toneMapped===!1)Z.toneMapped=!1;if(this.fog===!1)Z.fog=!1;if(Object.keys(this.userData).length>0)Z.userData=this.userData;function $(W){let H=[];for(let Y in W){let X=W[Y];delete X.metadata,H.push(X)}return H}if(Q){let W=$(J.textures),H=$(J.images);if(W.length>0)Z.textures=W;if(H.length>0)Z.images=H}return Z}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,Z=null;if(Q!==null){let $=Q.length;Z=Array($);for(let W=0;W!==$;++W)Z[W]=Q[W].clone()}return this.clippingPlanes=Z,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class x0 extends b0{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new AJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new W8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var E0=new S,o6=new pJ,FX=0;class N0{constructor(J,Q,Z=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=Z,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,Z){J*=this.itemSize,Z*=Q.itemSize;for(let $=0,W=this.itemSize;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,Z=this.count;Q<Z;Q++)o6.fromBufferAttribute(this,Q),o6.applyMatrix3(J),this.setXY(Q,o6.x,o6.y);else if(this.itemSize===3)for(let Q=0,Z=this.count;Q<Z;Q++)E0.fromBufferAttribute(this,Q),E0.applyMatrix3(J),this.setXYZ(Q,E0.x,E0.y,E0.z);return this}applyMatrix4(J){for(let Q=0,Z=this.count;Q<Z;Q++)E0.fromBufferAttribute(this,Q),E0.applyMatrix4(J),this.setXYZ(Q,E0.x,E0.y,E0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)E0.fromBufferAttribute(this,Q),E0.applyNormalMatrix(J),this.setXYZ(Q,E0.x,E0.y,E0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)E0.fromBufferAttribute(this,Q),E0.transformDirection(J),this.setXYZ(Q,E0.x,E0.y,E0.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let Z=this.array[J*this.itemSize+Q];if(this.normalized)Z=Z8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=iJ(Z,this.array);return this.array[J*this.itemSize+Q]=Z,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=Z8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=Z8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=Z8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=Z8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,Z){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array),$=iJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J*=this.itemSize,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array),$=iJ($,this.array),W=iJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=Z,this.array[J+2]=$,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class j7 extends N0{constructor(J,Q,Z){super(new Uint16Array(J),Q,Z)}}class v7 extends N0{constructor(J,Q,Z){super(new Uint32Array(J),Q,Z)}}class o0 extends N0{constructor(J,Q,Z){super(new Float32Array(J),Q,Z)}}var RX=0,c0=new yJ,wQ=new Z0,T9=new S,y0=new a0,K6=new a0,M0=new S;class g0 extends s8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RX++}),this.uuid=$8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((PZ(J))?v7:j7)(J,1);else this.index=J;return this}setIndirect(J){return this.indirect=J,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,Z=0){this.groups.push({start:J,count:Q,materialIndex:Z})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let Z=this.attributes.normal;if(Z!==void 0){let W=new fJ().getNormalMatrix(J);Z.applyNormalMatrix(W),Z.needsUpdate=!0}let $=this.attributes.tangent;if($!==void 0)$.transformDirection(J),$.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return c0.makeRotationFromQuaternion(J),this.applyMatrix4(c0),this}rotateX(J){return c0.makeRotationX(J),this.applyMatrix4(c0),this}rotateY(J){return c0.makeRotationY(J),this.applyMatrix4(c0),this}rotateZ(J){return c0.makeRotationZ(J),this.applyMatrix4(c0),this}translate(J,Q,Z){return c0.makeTranslation(J,Q,Z),this.applyMatrix4(c0),this}scale(J,Q,Z){return c0.makeScale(J,Q,Z),this.applyMatrix4(c0),this}lookAt(J){return wQ.lookAt(J),wQ.updateMatrix(),this.applyMatrix4(wQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(T9).negate(),this.translate(T9.x,T9.y,T9.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let Z=[];for(let $=0,W=J.length;$<W;$++){let H=J[$];Z.push(H.x,H.y,H.z||0)}this.setAttribute("position",new o0(Z,3))}else{let Z=Math.min(J.length,Q.count);for(let $=0;$<Z;$++){let W=J[$];Q.setXYZ($,W.x,W.y,W.z||0)}if(J.length>Q.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new a0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(y0.setFromBufferAttribute(W),this.morphTargetsRelative)M0.addVectors(this.boundingBox.min,y0.min),this.boundingBox.expandByPoint(M0),M0.addVectors(this.boundingBox.max,y0.max),this.boundingBox.expandByPoint(M0);else this.boundingBox.expandByPoint(y0.min),this.boundingBox.expandByPoint(y0.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new f0;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let Z=this.boundingSphere.center;if(y0.setFromBufferAttribute(J),Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W];if(K6.setFromBufferAttribute(Y),this.morphTargetsRelative)M0.addVectors(y0.min,K6.min),y0.expandByPoint(M0),M0.addVectors(y0.max,K6.max),y0.expandByPoint(M0);else y0.expandByPoint(K6.min),y0.expandByPoint(K6.max)}y0.getCenter(Z);let $=0;for(let W=0,H=J.count;W<H;W++)M0.fromBufferAttribute(J,W),$=Math.max($,Z.distanceToSquared(M0));if(Q)for(let W=0,H=Q.length;W<H;W++){let Y=Q[W],X=this.morphTargetsRelative;for(let K=0,U=Y.count;K<U;K++){if(M0.fromBufferAttribute(Y,K),X)T9.fromBufferAttribute(J,K),M0.add(T9);$=Math.max($,Z.distanceToSquared(M0))}}if(this.boundingSphere.radius=Math.sqrt($),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Z,normal:$,uv:W}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new N0(new Float32Array(4*Z.count),4));let H=this.getAttribute("tangent"),Y=[],X=[];for(let A=0;A<Z.count;A++)Y[A]=new S,X[A]=new S;let K=new S,U=new S,G=new S,E=new pJ,q=new pJ,F=new pJ,M=new S,k=new S;function N(A,x,z){K.fromBufferAttribute(Z,A),U.fromBufferAttribute(Z,x),G.fromBufferAttribute(Z,z),E.fromBufferAttribute(W,A),q.fromBufferAttribute(W,x),F.fromBufferAttribute(W,z),U.sub(K),G.sub(K),q.sub(E),F.sub(E);let V=1/(q.x*F.y-F.x*q.y);if(!isFinite(V))return;M.copy(U).multiplyScalar(F.y).addScaledVector(G,-q.y).multiplyScalar(V),k.copy(G).multiplyScalar(q.x).addScaledVector(U,-F.x).multiplyScalar(V),Y[A].add(M),Y[x].add(M),Y[z].add(M),X[A].add(k),X[x].add(k),X[z].add(k)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let A=0,x=O.length;A<x;++A){let z=O[A],V=z.start,T=z.count;for(let d=V,c=V+T;d<c;d+=3)N(J.getX(d+0),J.getX(d+1),J.getX(d+2))}let _=new S,L=new S,C=new S,j=new S;function w(A){C.fromBufferAttribute($,A),j.copy(C);let x=Y[A];_.copy(x),_.sub(C.multiplyScalar(C.dot(x))).normalize(),L.crossVectors(j,x);let V=L.dot(X[A])<0?-1:1;H.setXYZW(A,_.x,_.y,_.z,V)}for(let A=0,x=O.length;A<x;++A){let z=O[A],V=z.start,T=z.count;for(let d=V,c=V+T;d<c;d+=3)w(J.getX(d+0)),w(J.getX(d+1)),w(J.getX(d+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let Z=this.getAttribute("normal");if(Z===void 0)Z=new N0(new Float32Array(Q.count*3),3),this.setAttribute("normal",Z);else for(let E=0,q=Z.count;E<q;E++)Z.setXYZ(E,0,0,0);let $=new S,W=new S,H=new S,Y=new S,X=new S,K=new S,U=new S,G=new S;if(J)for(let E=0,q=J.count;E<q;E+=3){let F=J.getX(E+0),M=J.getX(E+1),k=J.getX(E+2);$.fromBufferAttribute(Q,F),W.fromBufferAttribute(Q,M),H.fromBufferAttribute(Q,k),U.subVectors(H,W),G.subVectors($,W),U.cross(G),Y.fromBufferAttribute(Z,F),X.fromBufferAttribute(Z,M),K.fromBufferAttribute(Z,k),Y.add(U),X.add(U),K.add(U),Z.setXYZ(F,Y.x,Y.y,Y.z),Z.setXYZ(M,X.x,X.y,X.z),Z.setXYZ(k,K.x,K.y,K.z)}else for(let E=0,q=Q.count;E<q;E+=3)$.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),H.fromBufferAttribute(Q,E+2),U.subVectors(H,W),G.subVectors($,W),U.cross(G),Z.setXYZ(E+0,U.x,U.y,U.z),Z.setXYZ(E+1,U.x,U.y,U.z),Z.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),Z.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,Z=J.count;Q<Z;Q++)M0.fromBufferAttribute(J,Q),M0.normalize(),J.setXYZ(Q,M0.x,M0.y,M0.z)}toNonIndexed(){function J(Y,X){let{array:K,itemSize:U,normalized:G}=Y,E=new K.constructor(X.length*U),q=0,F=0;for(let M=0,k=X.length;M<k;M++){if(Y.isInterleavedBufferAttribute)q=X[M]*Y.data.stride+Y.offset;else q=X[M]*U;for(let N=0;N<U;N++)E[F++]=K[q++]}return new N0(E,U,G)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new g0,Z=this.index.array,$=this.attributes;for(let Y in $){let X=$[Y],K=J(X,Z);Q.setAttribute(Y,K)}let W=this.morphAttributes;for(let Y in W){let X=[],K=W[Y];for(let U=0,G=K.length;U<G;U++){let E=K[U],q=J(E,Z);X.push(q)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;for(let Y=0,X=H.length;Y<X;Y++){let K=H[Y];Q.addGroup(K.start,K.count,K.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let X=this.parameters;for(let K in X)if(X[K]!==void 0)J[K]=X[K];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let Z=this.attributes;for(let X in Z){let K=Z[X];J.data.attributes[X]=K.toJSON(J.data)}let $={},W=!1;for(let X in this.morphAttributes){let K=this.morphAttributes[X],U=[];for(let G=0,E=K.length;G<E;G++){let q=K[G];U.push(q.toJSON(J.data))}if(U.length>0)$[X]=U,W=!0}if(W)J.data.morphAttributes=$,J.data.morphTargetsRelative=this.morphTargetsRelative;let H=this.groups;if(H.length>0)J.data.groups=JSON.parse(JSON.stringify(H));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let Z=J.index;if(Z!==null)this.setIndex(Z.clone());let $=J.attributes;for(let K in $){let U=$[K];this.setAttribute(K,U.clone(Q))}let W=J.morphAttributes;for(let K in W){let U=[],G=W[K];for(let E=0,q=G.length;E<q;E++)U.push(G[E].clone(Q));this.morphAttributes[K]=U}this.morphTargetsRelative=J.morphTargetsRelative;let H=J.groups;for(let K=0,U=H.length;K<U;K++){let G=H[K];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var h$=new yJ,Y9=new u9,i6=new f0,f$=new S,a6=new S,r6=new S,t6=new S,IQ=new S,e6=new S,b$=new S,J7=new S;class D0 extends Z0{constructor(J=new g0,Q=new x0){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}getVertexPosition(J,Q){let Z=this.geometry,$=Z.attributes.position,W=Z.morphAttributes.position,H=Z.morphTargetsRelative;Q.fromBufferAttribute($,J);let Y=this.morphTargetInfluences;if(W&&Y){e6.set(0,0,0);for(let X=0,K=W.length;X<K;X++){let U=Y[X],G=W[X];if(U===0)continue;if(IQ.fromBufferAttribute(G,J),H)e6.addScaledVector(IQ,U);else e6.addScaledVector(IQ.sub(Q),U)}Q.add(e6)}return Q}raycast(J,Q){let Z=this.geometry,$=this.material,W=this.matrixWorld;if($===void 0)return;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(i6.copy(Z.boundingSphere),i6.applyMatrix4(W),Y9.copy(J.ray).recast(J.near),i6.containsPoint(Y9.origin)===!1){if(Y9.intersectSphere(i6,f$)===null)return;if(Y9.origin.distanceToSquared(f$)>(J.far-J.near)**2)return}if(h$.copy(W).invert(),Y9.copy(J.ray).applyMatrix4(h$),Z.boundingBox!==null){if(Y9.intersectsBox(Z.boundingBox)===!1)return}this._computeIntersections(J,Q,Y9)}_computeIntersections(J,Q,Z){let $,W=this.geometry,H=this.material,Y=W.index,X=W.attributes.position,K=W.attributes.uv,U=W.attributes.uv1,G=W.attributes.normal,E=W.groups,q=W.drawRange;if(Y!==null)if(Array.isArray(H))for(let F=0,M=E.length;F<M;F++){let k=E[F],N=H[k.materialIndex],O=Math.max(k.start,q.start),_=Math.min(Y.count,Math.min(k.start+k.count,q.start+q.count));for(let L=O,C=_;L<C;L+=3){let j=Y.getX(L),w=Y.getX(L+1),A=Y.getX(L+2);if($=Q7(this,N,J,Z,K,U,G,j,w,A),$)$.faceIndex=Math.floor(L/3),$.face.materialIndex=k.materialIndex,Q.push($)}}else{let F=Math.max(0,q.start),M=Math.min(Y.count,q.start+q.count);for(let k=F,N=M;k<N;k+=3){let O=Y.getX(k),_=Y.getX(k+1),L=Y.getX(k+2);if($=Q7(this,H,J,Z,K,U,G,O,_,L),$)$.faceIndex=Math.floor(k/3),Q.push($)}}else if(X!==void 0)if(Array.isArray(H))for(let F=0,M=E.length;F<M;F++){let k=E[F],N=H[k.materialIndex],O=Math.max(k.start,q.start),_=Math.min(X.count,Math.min(k.start+k.count,q.start+q.count));for(let L=O,C=_;L<C;L+=3){let j=L,w=L+1,A=L+2;if($=Q7(this,N,J,Z,K,U,G,j,w,A),$)$.faceIndex=Math.floor(L/3),$.face.materialIndex=k.materialIndex,Q.push($)}}else{let F=Math.max(0,q.start),M=Math.min(X.count,q.start+q.count);for(let k=F,N=M;k<N;k+=3){let O=k,_=k+1,L=k+2;if($=Q7(this,H,J,Z,K,U,G,O,_,L),$)$.faceIndex=Math.floor(k/3),Q.push($)}}}}function kX(J,Q,Z,$,W,H,Y,X){let K;if(Q.side===1)K=$.intersectTriangle(Y,H,W,!0,X);else K=$.intersectTriangle(W,H,Y,Q.side===0,X);if(K===null)return null;J7.copy(X),J7.applyMatrix4(J.matrixWorld);let U=Z.ray.origin.distanceTo(J7);if(U<Z.near||U>Z.far)return null;return{distance:U,point:J7.clone(),object:J}}function Q7(J,Q,Z,$,W,H,Y,X,K,U){J.getVertexPosition(X,a6),J.getVertexPosition(K,r6),J.getVertexPosition(U,t6);let G=kX(J,Q,Z,$,a6,r6,t6,b$);if(G){let E=new S;if(n0.getBarycoord(b$,a6,r6,t6,E),W)G.uv=n0.getInterpolatedAttribute(W,X,K,U,E,new pJ);if(H)G.uv1=n0.getInterpolatedAttribute(H,X,K,U,E,new pJ);if(Y){if(G.normal=n0.getInterpolatedAttribute(Y,X,K,U,E,new S),G.normal.dot($.direction)>0)G.normal.multiplyScalar(-1)}let q={a:X,b:K,c:U,normal:new S,materialIndex:0};n0.getNormal(a6,r6,t6,q.normal),G.face=q,G.barycoord=E}return G}class c9 extends g0{constructor(J=1,Q=1,Z=1,$=1,W=1,H=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:Z,widthSegments:$,heightSegments:W,depthSegments:H};let Y=this;$=Math.floor($),W=Math.floor(W),H=Math.floor(H);let X=[],K=[],U=[],G=[],E=0,q=0;F("z","y","x",-1,-1,Z,Q,J,H,W,0),F("z","y","x",1,-1,Z,Q,-J,H,W,1),F("x","z","y",1,1,J,Z,Q,$,H,2),F("x","z","y",1,-1,J,Z,-Q,$,H,3),F("x","y","z",1,-1,J,Q,Z,$,W,4),F("x","y","z",-1,-1,J,Q,-Z,$,W,5),this.setIndex(X),this.setAttribute("position",new o0(K,3)),this.setAttribute("normal",new o0(U,3)),this.setAttribute("uv",new o0(G,2));function F(M,k,N,O,_,L,C,j,w,A,x){let z=L/w,V=C/A,T=L/2,d=C/2,c=j/2,l=w+1,i=A+1,m=0,r=0,g=new S;for(let HJ=0;HJ<i;HJ++){let GJ=HJ*V-d;for(let PJ=0;PJ<l;PJ++){let uJ=PJ*z-T;g[M]=uJ*O,g[k]=GJ*_,g[N]=c,K.push(g.x,g.y,g.z),g[M]=0,g[k]=0,g[N]=j>0?1:-1,U.push(g.x,g.y,g.z),G.push(PJ/w),G.push(1-HJ/A),m+=1}}for(let HJ=0;HJ<A;HJ++)for(let GJ=0;GJ<w;GJ++){let PJ=E+GJ+l*HJ,uJ=E+GJ+l*(HJ+1),K0=E+(GJ+1)+l*(HJ+1),cJ=E+(GJ+1)+l*HJ;X.push(PJ,uJ,cJ),X.push(uJ,K0,cJ),r+=6}Y.addGroup(q,r,x),q+=r,E+=m}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new c9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}function q9(J){let Q={};for(let Z in J){Q[Z]={};for(let $ in J[Z]){let W=J[Z][$];if(W&&(W.isColor||W.isMatrix3||W.isMatrix4||W.isVector2||W.isVector3||W.isVector4||W.isTexture||W.isQuaternion))if(W.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[Z][$]=null;else Q[Z][$]=W.clone();else if(Array.isArray(W))Q[Z][$]=W.slice();else Q[Z][$]=W}}return Q}function _0(J){let Q={};for(let Z=0;Z<J.length;Z++){let $=q9(J[Z]);for(let W in $)Q[W]=$[W]}return Q}function MX(J){let Q=[];for(let Z=0;Z<J.length;Z++)Q.push(J[Z].clone());return Q}function jZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return mJ.workingColorSpace}var HH={clone:q9,merge:_0},DX=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LX=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class r0 extends b0{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DX,this.fragmentShader=LX,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=q9(J.uniforms),this.uniformsGroups=MX(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let $ in this.uniforms){let H=this.uniforms[$].value;if(H&&H.isTexture)Q.uniforms[$]={type:"t",value:H.toJSON(J).uuid};else if(H&&H.isColor)Q.uniforms[$]={type:"c",value:H.getHex()};else if(H&&H.isVector2)Q.uniforms[$]={type:"v2",value:H.toArray()};else if(H&&H.isVector3)Q.uniforms[$]={type:"v3",value:H.toArray()};else if(H&&H.isVector4)Q.uniforms[$]={type:"v4",value:H.toArray()};else if(H&&H.isMatrix3)Q.uniforms[$]={type:"m3",value:H.toArray()};else if(H&&H.isMatrix4)Q.uniforms[$]={type:"m4",value:H.toArray()};else Q.uniforms[$]={value:H}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let Z={};for(let $ in this.extensions)if(this.extensions[$]===!0)Z[$]=!0;if(Object.keys(Z).length>0)Q.extensions=Z;return Q}}class y7 extends Z0{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yJ,this.projectionMatrix=new yJ,this.projectionMatrixInverse=new yJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){super.updateMatrixWorld(J),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(J,Q){super.updateWorldMatrix(J,Q),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var d8=new S,x$=new pJ,g$=new pJ;class V0 extends y7{constructor(J=50,Q=1,Z=0.1,$=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Z,this.far=$,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=K9*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(N6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return K9*2*Math.atan(Math.tan(N6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,Z){d8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(d8.x,d8.y).multiplyScalar(-J/d8.z),d8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Z.set(d8.x,d8.y).multiplyScalar(-J/d8.z)}getViewSize(J,Q){return this.getViewBounds(J,x$,g$),Q.subVectors(g$,x$)}setViewOffset(J,Q,Z,$,W,H){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(N6*0.5*this.fov)/this.zoom,Z=2*Q,$=this.aspect*Z,W=-0.5*$,H=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:K}=H;W+=H.offsetX*$/X,Q-=H.offsetY*Z/K,$*=H.width/X,Z*=H.height/K}let Y=this.filmOffset;if(Y!==0)W+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+$,Q,Q-Z,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}var A9=-90,S9=1;class vZ extends Z0{constructor(J,Q,Z){super();this.type="CubeCamera",this.renderTarget=Z,this.coordinateSystem=null,this.activeMipmapLevel=0;let $=new V0(A9,S9,J,Q);$.layers=this.layers,this.add($);let W=new V0(A9,S9,J,Q);W.layers=this.layers,this.add(W);let H=new V0(A9,S9,J,Q);H.layers=this.layers,this.add(H);let Y=new V0(A9,S9,J,Q);Y.layers=this.layers,this.add(Y);let X=new V0(A9,S9,J,Q);X.layers=this.layers,this.add(X);let K=new V0(A9,S9,J,Q);K.layers=this.layers,this.add(K)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[Z,$,W,H,Y,X]=Q;for(let K of Q)this.remove(K);if(J===2000)Z.up.set(0,1,0),Z.lookAt(1,0,0),$.up.set(0,1,0),$.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),H.up.set(0,0,1),H.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Z.up.set(0,-1,0),Z.lookAt(-1,0,0),$.up.set(0,-1,0),$.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),H.up.set(0,0,-1),H.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let K of Q)this.add(K),K.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Z,activeMipmapLevel:$}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,H,Y,X,K,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),q=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let M=Z.texture.generateMipmaps;Z.texture.generateMipmaps=!1,J.setRenderTarget(Z,0,$),J.render(Q,W),J.setRenderTarget(Z,1,$),J.render(Q,H),J.setRenderTarget(Z,2,$),J.render(Q,Y),J.setRenderTarget(Z,3,$),J.render(Q,X),J.setRenderTarget(Z,4,$),J.render(Q,K),Z.texture.generateMipmaps=M,J.setRenderTarget(Z,5,$),J.render(Q,U),J.setRenderTarget(G,E,q),J.xr.enabled=F,Z.texture.needsPMREMUpdate=!0}}class h7 extends G0{constructor(J=[],Q=301,Z,$,W,H,Y,X,K,U){super(J,Q,Z,$,W,H,Y,X,K,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class yZ extends v8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let Z={width:J,height:J,depth:1},$=[Z,Z,Z,Z,Z,Z];this.texture=new h7($),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let Z={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},$=new c9(5,5,5),W=new r0({name:"CubemapFromEquirect",uniforms:q9(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,side:1,blending:0});W.uniforms.tEquirect.value=Q;let H=new D0($,W),Y=Q.minFilter;if(Q.minFilter===1008)Q.minFilter=1006;return new vZ(1,10,this).update(J,H),Q.minFilter=Y,H.geometry.dispose(),H.material.dispose(),this}clear(J,Q=!0,Z=!0,$=!0){let W=J.getRenderTarget();for(let H=0;H<6;H++)J.setRenderTarget(this,H),J.clear(Q,Z,$);J.setRenderTarget(W)}}class s0 extends Z0{constructor(){super();this.isGroup=!0,this.type="Group"}}var VX={type:"move"};class B6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new s0,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new s0,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new s0,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let Z of J.hand.values())this._getHandJoint(Q,Z)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,Z){let $=null,W=null,H=null,Y=this._targetRay,X=this._grip,K=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(K&&J.hand){H=!0;for(let M of J.hand.values()){let k=Q.getJointPose(M,Z),N=this._getHandJoint(K,M);if(k!==null)N.matrix.fromArray(k.transform.matrix),N.matrix.decompose(N.position,N.rotation,N.scale),N.matrixWorldNeedsUpdate=!0,N.jointRadius=k.radius;N.visible=k!==null}let U=K.joints["index-finger-tip"],G=K.joints["thumb-tip"],E=U.position.distanceTo(G.position),q=0.02,F=0.005;if(K.inputState.pinching&&E>q+F)K.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!K.inputState.pinching&&E<=q-F)K.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,Z),W!==null){if(X.matrix.fromArray(W.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,W.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(W.linearVelocity);else X.hasLinearVelocity=!1;if(W.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(W.angularVelocity);else X.hasAngularVelocity=!1}}if(Y!==null){if($=Q.getPose(J.targetRaySpace,Z),$===null&&W!==null)$=W;if($!==null){if(Y.matrix.fromArray($.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,$.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy($.linearVelocity);else Y.hasLinearVelocity=!1;if($.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy($.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(VX)}}}if(Y!==null)Y.visible=$!==null;if(X!==null)X.visible=W!==null;if(K!==null)K.visible=H!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let Z=new s0;Z.matrixAutoUpdate=!1,Z.visible=!1,J.joints[Q.jointName]=Z,J.add(Z)}return J.joints[Q.jointName]}}class f7 extends Z0{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new W8,this.environmentIntensity=1,this.environmentRotation=new W8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}class _6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=$8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,Z){J*=this.stride,Z*=Q.stride;for(let $=0,W=this.stride;$<W;$++)this.array[J+$]=Q.array[Z+$];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Z=new this.constructor(Q,this.stride);return Z.setUsage(this.usage),Z}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=$8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var P0=new S;class n9{constructor(J,Q,Z,$=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=Z,this.normalized=$}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,Z=this.data.count;Q<Z;Q++)P0.fromBufferAttribute(this,Q),P0.applyMatrix4(J),this.setXYZ(Q,P0.x,P0.y,P0.z);return this}applyNormalMatrix(J){for(let Q=0,Z=this.count;Q<Z;Q++)P0.fromBufferAttribute(this,Q),P0.applyNormalMatrix(J),this.setXYZ(Q,P0.x,P0.y,P0.z);return this}transformDirection(J){for(let Q=0,Z=this.count;Q<Z;Q++)P0.fromBufferAttribute(this,Q),P0.transformDirection(J),this.setXYZ(Q,P0.x,P0.y,P0.z);return this}getComponent(J,Q){let Z=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)Z=Z8(Z,this.array);return Z}setComponent(J,Q,Z){if(this.normalized)Z=iJ(Z,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=Z,this}setX(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=iJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=Z8(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=Z8(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=Z8(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=Z8(Q,this.array);return Q}setXY(J,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this}setXYZ(J,Q,Z,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array),$=iJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this}setXYZW(J,Q,Z,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=iJ(Q,this.array),Z=iJ(Z,this.array),$=iJ($,this.array),W=iJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=Z,this.data.array[J+2]=$,this.data.array[J+3]=W,this}clone(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return new N0(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new n9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let Z=0;Z<this.count;Z++){let $=Z*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[$+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var p$=new S,l$=new sJ,d$=new sJ,zX=new S,m$=new yJ,Z7=new S,PQ=new f0,u$=new yJ,TQ=new u9;class b7 extends D0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new yJ,this.bindMatrixInverse=new yJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new a0;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,Z7),this.boundingBox.expandByPoint(Z7)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new f0;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let Z=0;Z<Q.count;Z++)this.getVertexPosition(Z,Z7),this.boundingSphere.expandByPoint(Z7)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let Z=this.material,$=this.matrixWorld;if(Z===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(PQ.copy(this.boundingSphere),PQ.applyMatrix4($),J.ray.intersectsSphere(PQ)===!1)return;if(u$.copy($).invert(),TQ.copy(J.ray).applyMatrix4(u$),this.boundingBox!==null){if(TQ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,TQ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new sJ,Q=this.geometry.attributes.skinWeight;for(let Z=0,$=Q.count;Z<$;Z++){J.fromBufferAttribute(Q,Z);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW(Z,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let Z=this.skeleton,$=this.geometry;l$.fromBufferAttribute($.attributes.skinIndex,J),d$.fromBufferAttribute($.attributes.skinWeight,J),p$.copy(Q).applyMatrix4(this.bindMatrix),Q.set(0,0,0);for(let W=0;W<4;W++){let H=d$.getComponent(W);if(H!==0){let Y=l$.getComponent(W);m$.multiplyMatrices(Z.bones[Y].matrixWorld,Z.boneInverses[Y]),Q.addScaledVector(zX.copy(p$).applyMatrix4(m$),H)}}return Q.applyMatrix4(this.bindMatrixInverse)}}class C6 extends Z0{constructor(){super();this.isBone=!0,this.type="Bone"}}class s9 extends G0{constructor(J=null,Q=1,Z=1,$,W,H,Y,X,K=1003,U=1003,G,E){super(null,H,Y,X,K,U,$,W,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:Z},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var c$=new yJ,BX=new yJ;class w6{constructor(J=[],Q=[]){this.uuid=$8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let Z=0,$=this.bones.length;Z<$;Z++)this.boneInverses.push(new yJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let Z=new yJ;if(this.bones[J])Z.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push(Z)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z)Z.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let Z=this.bones[J];if(Z){if(Z.parent&&Z.parent.isBone)Z.matrix.copy(Z.parent.matrixWorld).invert(),Z.matrix.multiply(Z.matrixWorld);else Z.matrix.copy(Z.matrixWorld);Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)}}}update(){let J=this.bones,Q=this.boneInverses,Z=this.boneMatrices,$=this.boneTexture;for(let W=0,H=J.length;W<H;W++){let Y=J[W]?J[W].matrixWorld:BX;c$.multiplyMatrices(Y,Q[W]),c$.toArray(Z,W*16)}if($!==null)$.needsUpdate=!0}clone(){return new w6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let Z=new s9(Q,J,J,1023,1015);return Z.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=Z,this}getBoneByName(J){for(let Q=0,Z=this.bones.length;Q<Z;Q++){let $=this.bones[Q];if($.name===J)return $}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let Z=0,$=J.bones.length;Z<$;Z++){let W=J.bones[Z],H=Q[W];if(H===void 0)console.warn("THREE.Skeleton: No bone found with UUID:",W),H=new C6;this.bones.push(H),this.boneInverses.push(new yJ().fromArray(J.boneInverses[Z]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,Z=this.boneInverses;for(let $=0,W=Q.length;$<W;$++){let H=Q[$];J.bones.push(H.uuid);let Y=Z[$];J.boneInverses.push(Y.toArray())}return J}}class U9 extends N0{constructor(J,Q,Z,$=1){super(J,Q,Z);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=$}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var j9=new yJ,n$=new yJ,$7=[],s$=new a0,_X=new yJ,U6=new D0,G6=new f0;class x7 extends D0{constructor(J,Q,Z){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new U9(new Float32Array(Z*16),16),this.instanceColor=null,this.morphTexture=null,this.count=Z,this.boundingBox=null,this.boundingSphere=null;for(let $=0;$<Z;$++)this.setMatrixAt($,_X)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new a0;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,j9),s$.copy(J.boundingBox).applyMatrix4(j9),this.boundingBox.union(s$)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new f0;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let Z=0;Z<Q;Z++)this.getMatrixAt(Z,j9),G6.copy(J.boundingSphere).applyMatrix4(j9),this.boundingSphere.union(G6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=this.morphTexture.source.data.data,W=Z.length+1,H=J*W+1;for(let Y=0;Y<Z.length;Y++)Z[Y]=$[H+Y]}raycast(J,Q){let Z=this.matrixWorld,$=this.count;if(U6.geometry=this.geometry,U6.material=this.material,U6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(G6.copy(this.boundingSphere),G6.applyMatrix4(Z),J.ray.intersectsSphere(G6)===!1)return;for(let W=0;W<$;W++){this.getMatrixAt(W,j9),n$.multiplyMatrices(Z,j9),U6.matrixWorld=n$,U6.raycast(J,$7);for(let H=0,Y=$7.length;H<Y;H++){let X=$7[H];X.instanceId=W,X.object=this,Q.push(X)}$7.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new U9(new Float32Array(this.instanceMatrix.count*3).fill(1),3);Q.toArray(this.instanceColor.array,J*3)}setMatrixAt(J,Q){Q.toArray(this.instanceMatrix.array,J*16)}setMorphAt(J,Q){let Z=Q.morphTargetInfluences,$=Z.length+1;if(this.morphTexture===null)this.morphTexture=new s9(new Float32Array($*this.count),$,this.count,1028,1015);let W=this.morphTexture.source.data.data,H=0;for(let K=0;K<Z.length;K++)H+=Z[K];let Y=this.geometry.morphTargetsRelative?1:1-H,X=$*J;W[X]=Y,W.set(Z,X+1)}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var AQ=new S,CX=new S,wX=new fJ;class I8{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,Z,$){return this.normal.set(J,Q,Z),this.constant=$,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,Z){let $=AQ.subVectors(Z,Q).cross(CX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint($,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let Z=J.delta(AQ),$=this.normal.dot(Z);if($===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/$;if(W<0||W>1)return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),Z=this.distanceToPoint(J.end);return Q<0&&Z>0||Z<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let Z=Q||wX.getNormalMatrix(J),$=this.coplanarPoint(AQ).applyMatrix4(J),W=this.normal.applyMatrix3(Z).normalize();return this.constant=-$.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var X9=new f0,IX=new pJ(0.5,0.5),W7=new S;class I6{constructor(J=new I8,Q=new I8,Z=new I8,$=new I8,W=new I8,H=new I8){this.planes=[J,Q,Z,$,W,H]}set(J,Q,Z,$,W,H){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy(Z),Y[3].copy($),Y[4].copy(W),Y[5].copy(H),this}copy(J){let Q=this.planes;for(let Z=0;Z<6;Z++)Q[Z].copy(J.planes[Z]);return this}setFromProjectionMatrix(J,Q=2000,Z=!1){let $=this.planes,W=J.elements,H=W[0],Y=W[1],X=W[2],K=W[3],U=W[4],G=W[5],E=W[6],q=W[7],F=W[8],M=W[9],k=W[10],N=W[11],O=W[12],_=W[13],L=W[14],C=W[15];if($[0].setComponents(K-H,q-U,N-F,C-O).normalize(),$[1].setComponents(K+H,q+U,N+F,C+O).normalize(),$[2].setComponents(K+Y,q+G,N+M,C+_).normalize(),$[3].setComponents(K-Y,q-G,N-M,C-_).normalize(),Z)$[4].setComponents(X,E,k,L).normalize(),$[5].setComponents(K-X,q-E,N-k,C-L).normalize();else if($[4].setComponents(K-X,q-E,N-k,C-L).normalize(),Q===2000)$[5].setComponents(K+X,q+E,N+k,C+L).normalize();else if(Q===2001)$[5].setComponents(X,E,k,L).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();X9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();X9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(X9)}intersectsSprite(J){X9.center.set(0,0,0);let Q=IX.distanceTo(J.center);return X9.radius=0.7071067811865476+Q,X9.applyMatrix4(J.matrixWorld),this.intersectsSphere(X9)}intersectsSphere(J){let Q=this.planes,Z=J.center,$=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint(Z)<$)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let Z=0;Z<6;Z++){let $=Q[Z];if(W7.x=$.normal.x>0?J.max.x:J.min.x,W7.y=$.normal.y>0?J.max.y:J.min.y,W7.z=$.normal.z>0?J.max.z:J.min.z,$.distanceToPoint(W7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class P6 extends b0{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new AJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var G7=new S,E7=new S,o$=new yJ,E6=new u9,H7=new f0,SQ=new S,i$=new S;class o9 extends Z0{constructor(J=new g0,Q=new P6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[0];for(let $=1,W=Q.count;$<W;$++)G7.fromBufferAttribute(Q,$-1),E7.fromBufferAttribute(Q,$),Z[$]=Z[$-1],Z[$]+=G7.distanceTo(E7);J.setAttribute("lineDistance",new o0(Z,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Line.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(H7.copy(Z.boundingSphere),H7.applyMatrix4($),H7.radius+=W,J.ray.intersectsSphere(H7)===!1)return;o$.copy($).invert(),E6.copy(J.ray).applyMatrix4(o$);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=this.isLineSegments?2:1,U=Z.index,E=Z.attributes.position;if(U!==null){let q=Math.max(0,H.start),F=Math.min(U.count,H.start+H.count);for(let M=q,k=F-1;M<k;M+=K){let N=U.getX(M),O=U.getX(M+1),_=Y7(this,J,E6,X,N,O,M);if(_)Q.push(_)}if(this.isLineLoop){let M=U.getX(F-1),k=U.getX(q),N=Y7(this,J,E6,X,M,k,F-1);if(N)Q.push(N)}}else{let q=Math.max(0,H.start),F=Math.min(E.count,H.start+H.count);for(let M=q,k=F-1;M<k;M+=K){let N=Y7(this,J,E6,X,M,M+1,M);if(N)Q.push(N)}if(this.isLineLoop){let M=Y7(this,J,E6,X,F-1,q,F-1);if(M)Q.push(M)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function Y7(J,Q,Z,$,W,H,Y){let X=J.geometry.attributes.position;if(G7.fromBufferAttribute(X,W),E7.fromBufferAttribute(X,H),Z.distanceSqToSegment(G7,E7,SQ,i$)>$)return;SQ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(SQ);if(U<Q.near||U>Q.far)return;return{distance:U,point:i$.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var a$=new S,r$=new S;class g7 extends o9{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,Z=[];for(let $=0,W=Q.count;$<W;$+=2)a$.fromBufferAttribute(Q,$),r$.fromBufferAttribute(Q,$+1),Z[$]=$===0?0:Z[$-1],Z[$+1]=Z[$]+a$.distanceTo(r$);J.setAttribute("lineDistance",new o0(Z,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class p7 extends o9{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class T6 extends b0{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new AJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var t$=new yJ,hQ=new u9,X7=new f0,K7=new S;class l7 extends Z0{constructor(J=new g0,Q=new T6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}raycast(J,Q){let Z=this.geometry,$=this.matrixWorld,W=J.params.Points.threshold,H=Z.drawRange;if(Z.boundingSphere===null)Z.computeBoundingSphere();if(X7.copy(Z.boundingSphere),X7.applyMatrix4($),X7.radius+=W,J.ray.intersectsSphere(X7)===!1)return;t$.copy($).invert(),hQ.copy(J.ray).applyMatrix4(t$);let Y=W/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,K=Z.index,G=Z.attributes.position;if(K!==null){let E=Math.max(0,H.start),q=Math.min(K.count,H.start+H.count);for(let F=E,M=q;F<M;F++){let k=K.getX(F);K7.fromBufferAttribute(G,k),e$(K7,k,X,$,J,Q,this)}}else{let E=Math.max(0,H.start),q=Math.min(G.count,H.start+H.count);for(let F=E,M=q;F<M;F++)K7.fromBufferAttribute(G,F),e$(K7,F,X,$,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,Z=Object.keys(Q);if(Z.length>0){let $=Q[Z[0]];if($!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,H=$.length;W<H;W++){let Y=$[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=W}}}}}function e$(J,Q,Z,$,W,H,Y){let X=hQ.distanceSqToPoint(J);if(X<Z){let K=new S;hQ.closestPointToPoint(J,K),K.applyMatrix4($);let U=W.ray.origin.distanceTo(K);if(U<W.near||U>W.far)return;H.push({distance:U,distanceToRay:Math.sqrt(X),point:K,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class d7 extends G0{constructor(J,Q,Z,$,W,H,Y,X,K){super(J,Q,Z,$,W,H,Y,X,K);this.isCanvasTexture=!0,this.needsUpdate=!0}}class m7 extends G0{constructor(J,Q,Z=1014,$,W,H,Y=1003,X=1003,K,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,$,W,H,Y,X,U,Z,K);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new z6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class u7 extends G0{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class N9 extends g0{constructor(J=1,Q=1,Z=1,$=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:Z,heightSegments:$};let W=J/2,H=Q/2,Y=Math.floor(Z),X=Math.floor($),K=Y+1,U=X+1,G=J/Y,E=Q/X,q=[],F=[],M=[],k=[];for(let N=0;N<U;N++){let O=N*E-H;for(let _=0;_<K;_++){let L=_*G-W;F.push(L,-O,0),M.push(0,0,1),k.push(_/Y),k.push(1-N/X)}}for(let N=0;N<X;N++)for(let O=0;O<Y;O++){let _=O+K*N,L=O+K*(N+1),C=O+1+K*(N+1),j=O+1+K*N;q.push(_,L,j),q.push(L,C,j)}this.setIndex(q),this.setAttribute("position",new o0(F,3)),this.setAttribute("normal",new o0(M,3)),this.setAttribute("uv",new o0(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new N9(J.width,J.height,J.widthSegments,J.heightSegments)}}class i9 extends b0{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new AJ(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new AJ(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pJ(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new W8,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class p0 extends i9{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pJ(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new AJ(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new AJ(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new AJ(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class hZ extends b0{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class fZ extends b0{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function U7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function PX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function TX(J){function Q(W,H){return J[W]-J[H]}let Z=J.length,$=Array(Z);for(let W=0;W!==Z;++W)$[W]=W;return $.sort(Q),$}function JW(J,Q,Z){let $=J.length,W=new J.constructor($);for(let H=0,Y=0;Y!==$;++H){let X=Z[H]*Q;for(let K=0;K!==Q;++K)W[Y++]=J[X+K]}return W}function YH(J,Q,Z,$){let W=1,H=J[0];while(H!==void 0&&H[$]===void 0)H=J[W++];if(H===void 0)return;let Y=H[$];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=H[$],Y!==void 0)Q.push(H.time),Z.push(...Y);H=J[W++]}while(H!==void 0);else if(Y.toArray!==void 0)do{if(Y=H[$],Y!==void 0)Q.push(H.time),Y.toArray(Z,Z.length);H=J[W++]}while(H!==void 0);else do{if(Y=H[$],Y!==void 0)Q.push(H.time),Z.push(Y);H=J[W++]}while(H!==void 0)}class i8{constructor(J,Q,Z,$){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=$!==void 0?$:new Q.constructor(Z),this.sampleValues=Q,this.valueSize=Z,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,Z=this._cachedIndex,$=Q[Z],W=Q[Z-1];Z:{J:{let H;Q:{$:if(!(J<$)){for(let Y=Z+2;;){if($===void 0){if(J<W)break $;return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}if(Z===Y)break;if(W=$,$=Q[++Z],J<$)break J}H=Q.length;break Q}if(!(J>=W)){let Y=Q[1];if(J<Y)Z=2,W=Y;for(let X=Z-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===X)break;if($=W,W=Q[--Z-1],J>=W)break J}H=Z,Z=0;break Q}break Z}while(Z<H){let Y=Z+H>>>1;if(J<Q[Y])H=Y;else Z=Y+1}if($=Q[Z],W=Q[Z-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===void 0)return Z=Q.length,this._cachedIndex=Z,this.copySampleValue_(Z-1)}this._cachedIndex=Z,this.intervalChanged_(Z,W,$)}return this.interpolate_(Z,W,J,$)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$;for(let H=0;H!==$;++H)Q[H]=Z[W+H];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class bZ extends i8{constructor(J,Q,Z,$){super(J,Q,Z,$);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,Z){let $=this.parameterPositions,W=J-2,H=J+1,Y=$[W],X=$[H];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,Y=2*Q-Z;break;case 2402:W=$.length-2,Y=Q+$[W]-$[W+1];break;default:W=J,Y=Z}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:H=J,X=2*Z-Q;break;case 2402:H=1,X=Z+$[1]-$[0];break;default:H=J-1,X=Q}let K=(Z-Q)*0.5,U=this.valueSize;this._weightPrev=K/(Q-Y),this._weightNext=K/(X-Z),this._offsetPrev=W*U,this._offsetNext=H*U}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,q=this._weightNext,F=(Z-Q)/($-Q),M=F*F,k=M*F,N=-E*k+2*E*M-E*F,O=(1+E)*k+(-1.5-2*E)*M+(-0.5+E)*F+1,_=(-1-q)*k+(1.5+q)*M+0.5*F,L=q*k-q*M;for(let C=0;C!==Y;++C)W[C]=N*H[U+C]+O*H[K+C]+_*H[X+C]+L*H[G+C];return W}}class xZ extends i8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=J*Y,K=X-Y,U=(Z-Q)/($-Q),G=1-U;for(let E=0;E!==Y;++E)W[E]=H[K+E]*G+H[X+E]*U;return W}}class gZ extends i8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J){return this.copySampleValue_(J-1)}}class l0{constructor(J,Q,Z,$){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=U7(Q,this.TimeBufferType),this.values=U7(Z,this.ValueBufferType),this.setInterpolation($||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,Z;if(Q.toJSON!==this.toJSON)Z=Q.toJSON(J);else{Z={name:J.name,times:U7(J.times,Array),values:U7(J.values,Array)};let $=J.getInterpolation();if($!==J.DefaultInterpolation)Z.interpolation=$}return Z.type=J.ValueTypeName,Z}InterpolantFactoryMethodDiscrete(J){return new gZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new xZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new bZ(this.times,this.values,this.getValueSize(),J)}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break}if(Q===void 0){let Z="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Z);return console.warn("THREE.KeyframeTrack:",Z),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let Z=0,$=Q.length;Z!==$;++Z)Q[Z]*=J}return this}trim(J,Q){let Z=this.times,$=Z.length,W=0,H=$-1;while(W!==$&&Z[W]<J)++W;while(H!==-1&&Z[H]>Q)--H;if(++H,W!==0||H!==$){if(W>=H)H=Math.max(H,1),W=H-1;let Y=this.getValueSize();this.times=Z.slice(W,H),this.values=this.values.slice(W*Y,H*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),J=!1;let Z=this.times,$=this.values,W=Z.length;if(W===0)console.error("THREE.KeyframeTrack: Track is empty.",this),J=!1;let H=null;for(let Y=0;Y!==W;Y++){let X=Z[Y];if(typeof X==="number"&&isNaN(X)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(H!==null&&H>X){console.error("THREE.KeyframeTrack: Out of order keys.",this,Y,X,H),J=!1;break}H=X}if($!==void 0){if(PX($))for(let Y=0,X=$.length;Y!==X;++Y){let K=$[Y];if(isNaN(K)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,Y,K),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),Z=this.getValueSize(),$=this.getInterpolation()===2302,W=J.length-1,H=1;for(let Y=1;Y<W;++Y){let X=!1,K=J[Y],U=J[Y+1];if(K!==U&&(Y!==1||K!==J[0]))if(!$){let G=Y*Z,E=G-Z,q=G+Z;for(let F=0;F!==Z;++F){let M=Q[G+F];if(M!==Q[E+F]||M!==Q[q+F]){X=!0;break}}}else X=!0;if(X){if(Y!==H){J[H]=J[Y];let G=Y*Z,E=H*Z;for(let q=0;q!==Z;++q)Q[E+q]=Q[G+q]}++H}}if(W>0){J[H]=J[W];for(let Y=W*Z,X=H*Z,K=0;K!==Z;++K)Q[X+K]=Q[Y+K];++H}if(H!==J.length)this.times=J.slice(0,H),this.values=Q.slice(0,H*Z);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),$=new this.constructor(this.name,J,Q);return $.createInterpolant=this.createInterpolant,$}}l0.prototype.ValueTypeName="";l0.prototype.TimeBufferType=Float32Array;l0.prototype.ValueBufferType=Float32Array;l0.prototype.DefaultInterpolation=2301;class a8 extends l0{constructor(J,Q,Z){super(J,Q,Z)}}a8.prototype.ValueTypeName="bool";a8.prototype.ValueBufferType=Array;a8.prototype.DefaultInterpolation=2300;a8.prototype.InterpolantFactoryMethodLinear=void 0;a8.prototype.InterpolantFactoryMethodSmooth=void 0;class c7 extends l0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}c7.prototype.ValueTypeName="color";class T8 extends l0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}T8.prototype.ValueTypeName="number";class pZ extends i8{constructor(J,Q,Z,$){super(J,Q,Z,$)}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=(Z-Q)/($-Q),K=J*Y;for(let U=K+Y;K!==U;K+=4)X8.slerpFlat(W,0,H,K-Y,H,K,X);return W}}class y8 extends l0{constructor(J,Q,Z,$){super(J,Q,Z,$)}InterpolantFactoryMethodLinear(J){return new pZ(this.times,this.values,this.getValueSize(),J)}}y8.prototype.ValueTypeName="quaternion";y8.prototype.InterpolantFactoryMethodSmooth=void 0;class r8 extends l0{constructor(J,Q,Z){super(J,Q,Z)}}r8.prototype.ValueTypeName="string";r8.prototype.ValueBufferType=Array;r8.prototype.DefaultInterpolation=2300;r8.prototype.InterpolantFactoryMethodLinear=void 0;r8.prototype.InterpolantFactoryMethodSmooth=void 0;class A8 extends l0{constructor(J,Q,Z,$){super(J,Q,Z,$)}}A8.prototype.ValueTypeName="vector";class n7{constructor(J="",Q=-1,Z=[],$=2500){if(this.name=J,this.tracks=Z,this.duration=Q,this.blendMode=$,this.uuid=$8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],Z=J.tracks,$=1/(J.fps||1);for(let H=0,Y=Z.length;H!==Y;++H)Q.push(SX(Z[H]).scale($));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],Z=J.tracks,$={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,H=Z.length;W!==H;++W)Q.push(l0.toJSON(Z[W]));return $}static CreateFromMorphTargetSequence(J,Q,Z,$){let W=Q.length,H=[];for(let Y=0;Y<W;Y++){let X=[],K=[];X.push((Y+W-1)%W,Y,(Y+1)%W),K.push(0,1,0);let U=TX(X);if(X=JW(X,1,U),K=JW(K,1,U),!$&&X[0]===0)X.push(W),K.push(K[0]);H.push(new T8(".morphTargetInfluences["+Q[Y].name+"]",X,K).scale(1/Z))}return new this(J,-1,H)}static findByName(J,Q){let Z=J;if(!Array.isArray(J)){let $=J;Z=$.geometry&&$.geometry.animations||$.animations}for(let $=0;$<Z.length;$++)if(Z[$].name===Q)return Z[$];return null}static CreateClipsFromMorphTargetSequences(J,Q,Z){let $={},W=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=K.name.match(W);if(U&&U.length>1){let G=U[1],E=$[G];if(!E)$[G]=E=[];E.push(K)}}let H=[];for(let Y in $)H.push(this.CreateFromMorphTargetSequence(Y,$[Y],Q,Z));return H}static parseAnimation(J,Q){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!J)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let Z=function(G,E,q,F,M){if(q.length!==0){let k=[],N=[];if(YH(q,k,N,F),k.length!==0)M.push(new G(E,k,N))}},$=[],W=J.name||"default",H=J.fps||30,Y=J.blendMode,X=J.length||-1,K=J.hierarchy||[];for(let G=0;G<K.length;G++){let E=K[G].keys;if(!E||E.length===0)continue;if(E[0].morphTargets){let q={},F;for(F=0;F<E.length;F++)if(E[F].morphTargets)for(let M=0;M<E[F].morphTargets.length;M++)q[E[F].morphTargets[M]]=-1;for(let M in q){let k=[],N=[];for(let O=0;O!==E[F].morphTargets.length;++O){let _=E[F];k.push(_.time),N.push(_.morphTarget===M?1:0)}$.push(new T8(".morphTargetInfluence["+M+"]",k,N))}X=q.length*H}else{let q=".bones["+Q[G].name+"]";Z(A8,q+".position",E,"pos",$),Z(y8,q+".quaternion",E,"rot",$),Z(A8,q+".scale",E,"scl",$)}}if($.length===0)return null;return new this(W,X,$,Y)}resetDuration(){let J=this.tracks,Q=0;for(let Z=0,$=J.length;Z!==$;++Z){let W=this.tracks[Z];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let Z=0;Z<this.tracks.length;Z++)J.push(this.tracks[Z].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function AX(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return T8;case"vector":case"vector2":case"vector3":case"vector4":return A8;case"color":return c7;case"quaternion":return y8;case"bool":case"boolean":return a8;case"string":return r8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function SX(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=AX(J.type);if(J.times===void 0){let Z=[],$=[];YH(J.keys,Z,$,"value"),J.times=Z,J.values=$}if(Q.parse!==void 0)return Q.parse(J);else return new Q(J.name,J.times,J.values,J.interpolation)}var E8={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};class lZ{constructor(J,Q,Z){let $=this,W=!1,H=0,Y=0,X=void 0,K=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=Z,this.abortController=new AbortController,this.itemStart=function(U){if(Y++,W===!1){if($.onStart!==void 0)$.onStart(U,H,Y)}W=!0},this.itemEnd=function(U){if(H++,$.onProgress!==void 0)$.onProgress(U,H,Y);if(H===Y){if(W=!1,$.onLoad!==void 0)$.onLoad()}},this.itemError=function(U){if($.onError!==void 0)$.onError(U)},this.resolveURL=function(U){if(X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return K.push(U,G),this},this.removeHandler=function(U){let G=K.indexOf(U);if(G!==-1)K.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=K.length;G<E;G+=2){let q=K[G],F=K[G+1];if(q.global)q.lastIndex=0;if(q.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}var XH=new lZ;class h8{constructor(J){this.manager=J!==void 0?J:XH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(J,Q){let Z=this;return new Promise(function($,W){Z.load(J,$,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}h8.DEFAULT_MATERIAL_NAME="__DEFAULT";var w8={};class KH extends Error{constructor(J,Q){super(J);this.response=Q}}class A6 extends h8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=E8.get(`file:${J}`);if(W!==void 0)return this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0),W;if(w8[J]!==void 0){w8[J].push({onLoad:Q,onProgress:Z,onError:$});return}w8[J]=[],w8[J].push({onLoad:Q,onProgress:Z,onError:$});let H=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(H).then((K)=>{if(K.status===200||K.status===0){if(K.status===0)console.warn("THREE.FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||K.body===void 0||K.body.getReader===void 0)return K;let U=w8[J],G=K.body.getReader(),E=K.headers.get("X-File-Size")||K.headers.get("Content-Length"),q=E?parseInt(E):0,F=q!==0,M=0,k=new ReadableStream({start(N){O();function O(){G.read().then(({done:_,value:L})=>{if(_)N.close();else{M+=L.byteLength;let C=new ProgressEvent("progress",{lengthComputable:F,loaded:M,total:q});for(let j=0,w=U.length;j<w;j++){let A=U[j];if(A.onProgress)A.onProgress(C)}N.enqueue(L),O()}},(_)=>{N.error(_)})}}});return new Response(k)}else throw new KH(`fetch for "${K.url}" responded with ${K.status}: ${K.statusText}`,K)}).then((K)=>{switch(X){case"arraybuffer":return K.arrayBuffer();case"blob":return K.blob();case"document":return K.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return K.json();default:if(Y==="")return K.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),E=G&&G[1]?G[1].toLowerCase():void 0,q=new TextDecoder(E);return K.arrayBuffer().then((F)=>q.decode(F))}}}).then((K)=>{E8.add(`file:${J}`,K);let U=w8[J];delete w8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onLoad)q.onLoad(K)}}).catch((K)=>{let U=w8[J];if(U===void 0)throw this.manager.itemError(J),K;delete w8[J];for(let G=0,E=U.length;G<E;G++){let q=U[G];if(q.onError)q.onError(K)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var v9=new WeakMap;class dZ extends h8{constructor(J){super(J)}load(J,Q,Z,$){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=E8.get(`image:${J}`);if(H!==void 0){if(H.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0);else{let G=v9.get(H);if(G===void 0)G=[],v9.set(H,G);G.push({onLoad:Q,onError:$})}return H}let Y=h9("img");function X(){if(U(),Q)Q(this);let G=v9.get(this)||[];for(let E=0;E<G.length;E++){let q=G[E];if(q.onLoad)q.onLoad(this)}v9.delete(this),W.manager.itemEnd(J)}function K(G){if(U(),$)$(G);E8.remove(`image:${J}`);let E=v9.get(this)||[];for(let q=0;q<E.length;q++){let F=E[q];if(F.onError)F.onError(G)}v9.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",K,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",K,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return E8.add(`image:${J}`,Y),W.manager.itemStart(J),Y.src=J,Y}}class a9 extends h8{constructor(J){super(J)}load(J,Q,Z,$){let W=new G0,H=new dZ(this.manager);return H.setCrossOrigin(this.crossOrigin),H.setPath(this.path),H.load(J,function(Y){if(W.image=Y,W.needsUpdate=!0,Q!==void 0)Q(W)},Z,$),W}}class S6 extends Z0{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new AJ(J),this.intensity=Q}dispose(){}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);if(Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,this.groundColor!==void 0)Q.object.groundColor=this.groundColor.getHex();if(this.distance!==void 0)Q.object.distance=this.distance;if(this.angle!==void 0)Q.object.angle=this.angle;if(this.decay!==void 0)Q.object.decay=this.decay;if(this.penumbra!==void 0)Q.object.penumbra=this.penumbra;if(this.shadow!==void 0)Q.object.shadow=this.shadow.toJSON();if(this.target!==void 0)Q.object.target=this.target.uuid;return Q}}var jQ=new yJ,QW=new S,ZW=new S;class s7{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pJ(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new yJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new I6,this._frameExtents=new pJ(1,1),this._viewportCount=1,this._viewports=[new sJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera,Z=this.matrix;if(QW.setFromMatrixPosition(J.matrixWorld),Q.position.copy(QW),ZW.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(ZW),Q.updateMatrixWorld(),jQ.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jQ,Q.coordinateSystem,Q.reversedDepth),Q.reversedDepth)Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else Z.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);Z.multiply(jQ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};if(this.intensity!==1)J.intensity=this.intensity;if(this.bias!==0)J.bias=this.bias;if(this.normalBias!==0)J.normalBias=this.normalBias;if(this.radius!==1)J.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)J.mapSize=this.mapSize.toArray();return J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}class UH extends s7{constructor(){super(new V0(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,Z=K9*2*J.angle*this.focus,$=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if(Z!==Q.fov||$!==Q.aspect||W!==Q.far)Q.fov=Z,Q.aspect=$,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this}}class o7 extends S6{constructor(J,Q,Z=0,$=Math.PI/3,W=0,H=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Z0.DEFAULT_UP),this.updateMatrix(),this.target=new Z0,this.distance=Z,this.angle=$,this.penumbra=W,this.decay=H,this.map=null,this.shadow=new UH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}var $W=new yJ,q6=new S,vQ=new S;class GH extends s7{constructor(){super(new V0(90,1,0.5,500));this.isPointLightShadow=!0,this._frameExtents=new pJ(4,2),this._viewportCount=6,this._viewports=[new sJ(2,1,1,1),new sJ(0,1,1,1),new sJ(3,1,1,1),new sJ(1,1,1,1),new sJ(3,0,1,1),new sJ(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(J,Q=0){let Z=this.camera,$=this.matrix,W=J.distance||Z.far;if(W!==Z.far)Z.far=W,Z.updateProjectionMatrix();q6.setFromMatrixPosition(J.matrixWorld),Z.position.copy(q6),vQ.copy(Z.position),vQ.add(this._cubeDirections[Q]),Z.up.copy(this._cubeUps[Q]),Z.lookAt(vQ),Z.updateMatrixWorld(),$.makeTranslation(-q6.x,-q6.y,-q6.z),$W.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),this._frustum.setFromProjectionMatrix($W,Z.coordinateSystem,Z.reversedDepth)}}class i7 extends S6{constructor(J,Q,Z=0,$=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=Z,this.decay=$,this.shadow=new GH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}}class t8 extends y7{constructor(J=-1,Q=1,Z=1,$=-1,W=0.1,H=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=Z,this.bottom=$,this.near=W,this.far=H,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,Z,$,W,H){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=Z,this.view.offsetY=$,this.view.width=W,this.view.height=H,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),Z=(this.right+this.left)/2,$=(this.top+this.bottom)/2,W=Z-J,H=Z+J,Y=$+Q,X=$-Q;if(this.view!==null&&this.view.enabled){let K=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=K*this.view.offsetX,H=W+K*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(W,H,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class EH extends s7{constructor(){super(new t8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class a7 extends S6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Z0.DEFAULT_UP),this.updateMatrix(),this.target=new Z0,this.shadow=new EH}dispose(){this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}}class e8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var yQ=new WeakMap;class r7 extends h8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")console.warn("THREE.ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,Z,$){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,H=E8.get(`image-bitmap:${J}`);if(H!==void 0){if(W.manager.itemStart(J),H.then){H.then((K)=>{if(yQ.has(H)===!0){if($)$(yQ.get(H));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(K);return W.manager.itemEnd(J),K}});return}return setTimeout(function(){if(Q)Q(H);W.manager.itemEnd(J)},0),H}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(K){return K.blob()}).then(function(K){return createImageBitmap(K,Object.assign(W.options,{colorSpaceConversion:"none"}))}).then(function(K){if(E8.add(`image-bitmap:${J}`,K),Q)Q(K);return W.manager.itemEnd(J),K}).catch(function(K){if($)$(K);yQ.set(X,K),E8.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});E8.add(`image-bitmap:${J}`,X),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class mZ extends V0{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var uZ="\\[\\]\\.:\\/",jX=new RegExp("["+uZ+"]","g"),cZ="[^"+uZ+"]",vX="[^"+uZ.replace("\\.","")+"]",yX=/((?:WC+[\/:])*)/.source.replace("WC",cZ),hX=/(WCOD+)?/.source.replace("WCOD",vX),fX=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cZ),bX=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cZ),xX=new RegExp("^"+yX+hX+fX+bX+"$"),gX=["material","materials","bones","map"];class qH{constructor(J,Q,Z){let $=Z||oJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,$)}getValue(J,Q){this.bind();let Z=this._targetGroup.nCachedObjects_,$=this._bindings[Z];if($!==void 0)$.getValue(J,Q)}setValue(J,Q){let Z=this._bindings;for(let $=this._targetGroup.nCachedObjects_,W=Z.length;$!==W;++$)Z[$].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,Z=J.length;Q!==Z;++Q)J[Q].unbind()}}class oJ{constructor(J,Q,Z){this.path=Q,this.parsedPath=Z||oJ.parseTrackName(Q),this.node=oJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,Z){if(!(J&&J.isAnimationObjectGroup))return new oJ(J,Q,Z);else return new oJ.Composite(J,Q,Z)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(jX,"")}static parseTrackName(J){let Q=xX.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let Z={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},$=Z.nodeName&&Z.nodeName.lastIndexOf(".");if($!==void 0&&$!==-1){let W=Z.nodeName.substring($+1);if(gX.indexOf(W)!==-1)Z.nodeName=Z.nodeName.substring(0,$),Z.objectName=W}if(Z.propertyName===null||Z.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return Z}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let Z=J.skeleton.getBoneByName(Q);if(Z!==void 0)return Z}if(J.children){let Z=function(W){for(let H=0;H<W.length;H++){let Y=W[H];if(Y.name===Q||Y.uuid===Q)return Y;let X=Z(Y.children);if(X)return X}return null},$=Z(J.children);if($)return $}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)J[Q++]=Z[$]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let Z=this.resolvedProperty;for(let $=0,W=Z.length;$!==W;++$)Z[$]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,Z=Q.objectName,$=Q.propertyName,W=Q.propertyIndex;if(!J)J=oJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(Z){let K=Q.objectIndex;switch(Z){case"materials":if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===K){K=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Z]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Z]}if(K!==void 0){if(J[K]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[K]}}let H=J[$];if(H===void 0){let K=Q.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+K+"."+$+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(W!==void 0){if($==="morphTargetInfluences"){if(!J.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}X=this.BindingType.ArrayElement,this.resolvedProperty=H,this.propertyIndex=W}else if(H.fromArray!==void 0&&H.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=H;else if(Array.isArray(H))X=this.BindingType.EntireArray,this.resolvedProperty=H;else this.propertyName=$;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}oJ.Composite=qH;oJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oJ.prototype.GetterByBindingType=[oJ.prototype._getValue_direct,oJ.prototype._getValue_array,oJ.prototype._getValue_arrayElement,oJ.prototype._getValue_toArray];oJ.prototype.SetterByBindingTypeAndVersioning=[[oJ.prototype._setValue_direct,oJ.prototype._setValue_direct_setNeedsUpdate,oJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oJ.prototype._setValue_array,oJ.prototype._setValue_array_setNeedsUpdate,oJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oJ.prototype._setValue_arrayElement,oJ.prototype._setValue_arrayElement_setNeedsUpdate,oJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oJ.prototype._setValue_fromArray,oJ.prototype._setValue_fromArray_setNeedsUpdate,oJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g1=new Float32Array(1);function nZ(J,Q,Z,$){let W=pX($);switch(Z){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${Z} format.`)}function pX(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="180";function fH(){let J=null,Q=!1,Z=null,$=null;function W(H,Y){Z(H,Y),$=J.requestAnimationFrame(W)}return{start:function(){if(Q===!0)return;if(Z===null)return;$=J.requestAnimationFrame(W),Q=!0},stop:function(){J.cancelAnimationFrame($),Q=!1},setAnimationLoop:function(H){Z=H},setContext:function(H){J=H}}}function lX(J){let Q=new WeakMap;function Z(X,K){let{array:U,usage:G}=X,E=U.byteLength,q=J.createBuffer();J.bindBuffer(K,q),J.bufferData(K,U,G),X.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:q,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:E}}function $(X,K,U){let{array:G,updateRanges:E}=K;if(J.bindBuffer(U,X),E.length===0)J.bufferSubData(U,0,G);else{E.sort((F,M)=>F.start-M.start);let q=0;for(let F=1;F<E.length;F++){let M=E[q],k=E[F];if(k.start<=M.start+M.count+1)M.count=Math.max(M.count,k.start+k.count-M.start);else++q,E[q]=k}E.length=q+1;for(let F=0,M=E.length;F<M;F++){let k=E[F];J.bufferSubData(U,k.start*G.BYTES_PER_ELEMENT,G,k.start,k.count)}K.clearUpdateRanges()}K.onUploadCallback()}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function H(X){if(X.isInterleavedBufferAttribute)X=X.data;let K=Q.get(X);if(K)J.deleteBuffer(K.buffer),Q.delete(X)}function Y(X,K){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,Z(X,K));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");$(U.buffer,X,K),U.version=X.version}}return{get:W,remove:H,update:Y}}var dX=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mX=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uX=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cX=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nX=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sX=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oX=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iX=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aX=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rX=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tX=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eX=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ZK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$K=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,EK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,NK=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FK=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MK="gl_FragColor = linearToOutputTexel( gl_FragColor );",DK=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zK=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_K=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CK=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wK=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IK=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PK=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TK=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AK=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SK=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jK=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vK=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yK=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hK=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fK=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bK=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xK=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gK=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pK=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lK=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dK=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mK=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cK=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sK=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oK=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iK=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aK=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rK=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tK=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eK=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JU=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QU=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZU=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$U=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,WU=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HU=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YU=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KU=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UU=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GU=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EU=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qU=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NU=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RU=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BU=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_U=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wU=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PU=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,TU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AU=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SU=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yU=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hU=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fU=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lU=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dU=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uU=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nU=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sU=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oU=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iU=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aU=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rU=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tU=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eU=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JG=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QG=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZG=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$G=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WG=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,UG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kG=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bJ={alphahash_fragment:dX,alphahash_pars_fragment:mX,alphamap_fragment:uX,alphamap_pars_fragment:cX,alphatest_fragment:nX,alphatest_pars_fragment:sX,aomap_fragment:oX,aomap_pars_fragment:iX,batching_pars_vertex:aX,batching_vertex:rX,begin_vertex:tX,beginnormal_vertex:eX,bsdfs:JK,iridescence_fragment:QK,bumpmap_pars_fragment:ZK,clipping_planes_fragment:$K,clipping_planes_pars_fragment:WK,clipping_planes_pars_vertex:HK,clipping_planes_vertex:YK,color_fragment:XK,color_pars_fragment:KK,color_pars_vertex:UK,color_vertex:GK,common:EK,cube_uv_reflection_fragment:qK,defaultnormal_vertex:NK,displacementmap_pars_vertex:OK,displacementmap_vertex:FK,emissivemap_fragment:RK,emissivemap_pars_fragment:kK,colorspace_fragment:MK,colorspace_pars_fragment:DK,envmap_fragment:LK,envmap_common_pars_fragment:VK,envmap_pars_fragment:zK,envmap_pars_vertex:BK,envmap_physical_pars_fragment:yK,envmap_vertex:_K,fog_vertex:CK,fog_pars_vertex:wK,fog_fragment:IK,fog_pars_fragment:PK,gradientmap_pars_fragment:TK,lightmap_pars_fragment:AK,lights_lambert_fragment:SK,lights_lambert_pars_fragment:jK,lights_pars_begin:vK,lights_toon_fragment:hK,lights_toon_pars_fragment:fK,lights_phong_fragment:bK,lights_phong_pars_fragment:xK,lights_physical_fragment:gK,lights_physical_pars_fragment:pK,lights_fragment_begin:lK,lights_fragment_maps:dK,lights_fragment_end:mK,logdepthbuf_fragment:uK,logdepthbuf_pars_fragment:cK,logdepthbuf_pars_vertex:nK,logdepthbuf_vertex:sK,map_fragment:oK,map_pars_fragment:iK,map_particle_fragment:aK,map_particle_pars_fragment:rK,metalnessmap_fragment:tK,metalnessmap_pars_fragment:eK,morphinstance_vertex:JU,morphcolor_vertex:QU,morphnormal_vertex:ZU,morphtarget_pars_vertex:$U,morphtarget_vertex:WU,normal_fragment_begin:HU,normal_fragment_maps:YU,normal_pars_fragment:XU,normal_pars_vertex:KU,normal_vertex:UU,normalmap_pars_fragment:GU,clearcoat_normal_fragment_begin:EU,clearcoat_normal_fragment_maps:qU,clearcoat_pars_fragment:NU,iridescence_pars_fragment:OU,opaque_fragment:FU,packing:RU,premultiplied_alpha_fragment:kU,project_vertex:MU,dithering_fragment:DU,dithering_pars_fragment:LU,roughnessmap_fragment:VU,roughnessmap_pars_fragment:zU,shadowmap_pars_fragment:BU,shadowmap_pars_vertex:_U,shadowmap_vertex:CU,shadowmask_pars_fragment:wU,skinbase_vertex:IU,skinning_pars_vertex:PU,skinning_vertex:TU,skinnormal_vertex:AU,specularmap_fragment:SU,specularmap_pars_fragment:jU,tonemapping_fragment:vU,tonemapping_pars_fragment:yU,transmission_fragment:hU,transmission_pars_fragment:fU,uv_pars_fragment:bU,uv_pars_vertex:xU,uv_vertex:gU,worldpos_vertex:pU,background_vert:lU,background_frag:dU,backgroundCube_vert:mU,backgroundCube_frag:uU,cube_vert:cU,cube_frag:nU,depth_vert:sU,depth_frag:oU,distanceRGBA_vert:iU,distanceRGBA_frag:aU,equirect_vert:rU,equirect_frag:tU,linedashed_vert:eU,linedashed_frag:JG,meshbasic_vert:QG,meshbasic_frag:ZG,meshlambert_vert:$G,meshlambert_frag:WG,meshmatcap_vert:HG,meshmatcap_frag:YG,meshnormal_vert:XG,meshnormal_frag:KG,meshphong_vert:UG,meshphong_frag:GG,meshphysical_vert:EG,meshphysical_frag:qG,meshtoon_vert:NG,meshtoon_frag:OG,points_vert:FG,points_frag:RG,shadow_vert:kG,shadow_frag:MG,sprite_vert:DG,sprite_frag:LG},$J={common:{diffuse:{value:new AJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fJ},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fJ}},envmap:{envMap:{value:null},envMapRotation:{value:new fJ},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fJ},normalScale:{value:new pJ(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new AJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new AJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0},uvTransform:{value:new fJ}},sprite:{diffuse:{value:new AJ(16777215)},opacity:{value:1},center:{value:new pJ(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fJ},alphaMap:{value:null},alphaMapTransform:{value:new fJ},alphaTest:{value:0}}},R8={basic:{uniforms:_0([$J.common,$J.specularmap,$J.envmap,$J.aomap,$J.lightmap,$J.fog]),vertexShader:bJ.meshbasic_vert,fragmentShader:bJ.meshbasic_frag},lambert:{uniforms:_0([$J.common,$J.specularmap,$J.envmap,$J.aomap,$J.lightmap,$J.emissivemap,$J.bumpmap,$J.normalmap,$J.displacementmap,$J.fog,$J.lights,{emissive:{value:new AJ(0)}}]),vertexShader:bJ.meshlambert_vert,fragmentShader:bJ.meshlambert_frag},phong:{uniforms:_0([$J.common,$J.specularmap,$J.envmap,$J.aomap,$J.lightmap,$J.emissivemap,$J.bumpmap,$J.normalmap,$J.displacementmap,$J.fog,$J.lights,{emissive:{value:new AJ(0)},specular:{value:new AJ(1118481)},shininess:{value:30}}]),vertexShader:bJ.meshphong_vert,fragmentShader:bJ.meshphong_frag},standard:{uniforms:_0([$J.common,$J.envmap,$J.aomap,$J.lightmap,$J.emissivemap,$J.bumpmap,$J.normalmap,$J.displacementmap,$J.roughnessmap,$J.metalnessmap,$J.fog,$J.lights,{emissive:{value:new AJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bJ.meshphysical_vert,fragmentShader:bJ.meshphysical_frag},toon:{uniforms:_0([$J.common,$J.aomap,$J.lightmap,$J.emissivemap,$J.bumpmap,$J.normalmap,$J.displacementmap,$J.gradientmap,$J.fog,$J.lights,{emissive:{value:new AJ(0)}}]),vertexShader:bJ.meshtoon_vert,fragmentShader:bJ.meshtoon_frag},matcap:{uniforms:_0([$J.common,$J.bumpmap,$J.normalmap,$J.displacementmap,$J.fog,{matcap:{value:null}}]),vertexShader:bJ.meshmatcap_vert,fragmentShader:bJ.meshmatcap_frag},points:{uniforms:_0([$J.points,$J.fog]),vertexShader:bJ.points_vert,fragmentShader:bJ.points_frag},dashed:{uniforms:_0([$J.common,$J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bJ.linedashed_vert,fragmentShader:bJ.linedashed_frag},depth:{uniforms:_0([$J.common,$J.displacementmap]),vertexShader:bJ.depth_vert,fragmentShader:bJ.depth_frag},normal:{uniforms:_0([$J.common,$J.bumpmap,$J.normalmap,$J.displacementmap,{opacity:{value:1}}]),vertexShader:bJ.meshnormal_vert,fragmentShader:bJ.meshnormal_frag},sprite:{uniforms:_0([$J.sprite,$J.fog]),vertexShader:bJ.sprite_vert,fragmentShader:bJ.sprite_frag},background:{uniforms:{uvTransform:{value:new fJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bJ.background_vert,fragmentShader:bJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fJ}},vertexShader:bJ.backgroundCube_vert,fragmentShader:bJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bJ.cube_vert,fragmentShader:bJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bJ.equirect_vert,fragmentShader:bJ.equirect_frag},distanceRGBA:{uniforms:_0([$J.common,$J.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:bJ.distanceRGBA_vert,fragmentShader:bJ.distanceRGBA_frag},shadow:{uniforms:_0([$J.lights,$J.fog,{color:{value:new AJ(0)},opacity:{value:1}}]),vertexShader:bJ.shadow_vert,fragmentShader:bJ.shadow_frag}};R8.physical={uniforms:_0([R8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fJ},clearcoatNormalScale:{value:new pJ(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fJ},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fJ},sheen:{value:0},sheenColor:{value:new AJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fJ},transmissionSamplerSize:{value:new pJ},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fJ},attenuationDistance:{value:0},attenuationColor:{value:new AJ(0)},specularColor:{value:new AJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fJ},anisotropyVector:{value:new pJ},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fJ}}]),vertexShader:bJ.meshphysical_vert,fragmentShader:bJ.meshphysical_frag};var t7={r:0,b:0,g:0},O9=new W8,VG=new yJ;function zG(J,Q,Z,$,W,H,Y){let X=new AJ(0),K=H===!0?0:1,U,G,E=null,q=0,F=null;function M(L){let C=L.isScene===!0?L.background:null;if(C&&C.isTexture)C=(L.backgroundBlurriness>0?Z:Q).get(C);return C}function k(L){let C=!1,j=M(L);if(j===null)O(X,K);else if(j&&j.isColor)O(j,1),C=!0;let w=J.xr.getEnvironmentBlendMode();if(w==="additive")$.buffers.color.setClear(0,0,0,1,Y);else if(w==="alpha-blend")$.buffers.color.setClear(0,0,0,0,Y);if(J.autoClear||C)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function N(L,C){let j=M(C);if(j&&(j.isCubeTexture||j.mapping===k6)){if(G===void 0)G=new D0(new c9(1,1,1),new r0({name:"BackgroundCubeMaterial",uniforms:q9(R8.backgroundCube.uniforms),vertexShader:R8.backgroundCube.vertexShader,fragmentShader:R8.backgroundCube.fragmentShader,side:h0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),G.geometry.deleteAttribute("uv"),G.onBeforeRender=function(w,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(G.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(G);if(O9.copy(C.backgroundRotation),O9.x*=-1,O9.y*=-1,O9.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1)O9.y*=-1,O9.z*=-1;if(G.material.uniforms.envMap.value=j,G.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,G.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,G.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,G.material.uniforms.backgroundRotation.value.setFromMatrix4(VG.makeRotationFromEuler(O9)),G.material.toneMapped=mJ.getTransfer(j.colorSpace)!==J0,E!==j||q!==j.version||F!==J.toneMapping)G.material.needsUpdate=!0,E=j,q=j.version,F=J.toneMapping;G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null)}else if(j&&j.isTexture){if(U===void 0)U=new D0(new N9(2,2),new r0({name:"BackgroundMaterial",uniforms:q9(R8.background.uniforms),vertexShader:R8.background.vertexShader,fragmentShader:R8.background.fragmentShader,side:m8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(U);if(U.material.uniforms.t2D.value=j,U.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,U.material.toneMapped=mJ.getTransfer(j.colorSpace)!==J0,j.matrixAutoUpdate===!0)j.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(j.matrix),E!==j||q!==j.version||F!==J.toneMapping)U.material.needsUpdate=!0,E=j,q=j.version,F=J.toneMapping;U.layers.enableAll(),L.unshift(U,U.geometry,U.material,0,0,null)}}function O(L,C){L.getRGB(t7,jZ(J)),$.buffers.color.setClear(t7.r,t7.g,t7.b,C,Y)}function _(){if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return X},setClearColor:function(L,C=1){X.set(L),K=C,O(X,K)},getClearAlpha:function(){return K},setClearAlpha:function(L){K=L,O(X,K)},render:k,addToRenderList:N,dispose:_}}function BG(J,Q){let Z=J.getParameter(J.MAX_VERTEX_ATTRIBS),$={},W=q(null),H=W,Y=!1;function X(V,T,d,c,l){let i=!1,m=E(c,d,T);if(H!==m)H=m,U(H.object);if(i=F(V,c,d,l),i)M(V,c,d,l);if(l!==null)Q.update(l,J.ELEMENT_ARRAY_BUFFER);if(i||Y){if(Y=!1,C(V,T,d,c),l!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(l).buffer)}}function K(){return J.createVertexArray()}function U(V){return J.bindVertexArray(V)}function G(V){return J.deleteVertexArray(V)}function E(V,T,d){let c=d.wireframe===!0,l=$[V.id];if(l===void 0)l={},$[V.id]=l;let i=l[T.id];if(i===void 0)i={},l[T.id]=i;let m=i[c];if(m===void 0)m=q(K()),i[c]=m;return m}function q(V){let T=[],d=[],c=[];for(let l=0;l<Z;l++)T[l]=0,d[l]=0,c[l]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:d,attributeDivisors:c,object:V,attributes:{},index:null}}function F(V,T,d,c){let l=H.attributes,i=T.attributes,m=0,r=d.getAttributes();for(let g in r)if(r[g].location>=0){let GJ=l[g],PJ=i[g];if(PJ===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)PJ=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)PJ=V.instanceColor}if(GJ===void 0)return!0;if(GJ.attribute!==PJ)return!0;if(PJ&&GJ.data!==PJ.data)return!0;m++}if(H.attributesNum!==m)return!0;if(H.index!==c)return!0;return!1}function M(V,T,d,c){let l={},i=T.attributes,m=0,r=d.getAttributes();for(let g in r)if(r[g].location>=0){let GJ=i[g];if(GJ===void 0){if(g==="instanceMatrix"&&V.instanceMatrix)GJ=V.instanceMatrix;if(g==="instanceColor"&&V.instanceColor)GJ=V.instanceColor}let PJ={};if(PJ.attribute=GJ,GJ&&GJ.data)PJ.data=GJ.data;l[g]=PJ,m++}H.attributes=l,H.attributesNum=m,H.index=c}function k(){let V=H.newAttributes;for(let T=0,d=V.length;T<d;T++)V[T]=0}function N(V){O(V,0)}function O(V,T){let{newAttributes:d,enabledAttributes:c,attributeDivisors:l}=H;if(d[V]=1,c[V]===0)J.enableVertexAttribArray(V),c[V]=1;if(l[V]!==T)J.vertexAttribDivisor(V,T),l[V]=T}function _(){let{newAttributes:V,enabledAttributes:T}=H;for(let d=0,c=T.length;d<c;d++)if(T[d]!==V[d])J.disableVertexAttribArray(d),T[d]=0}function L(V,T,d,c,l,i,m){if(m===!0)J.vertexAttribIPointer(V,T,d,l,i);else J.vertexAttribPointer(V,T,d,c,l,i)}function C(V,T,d,c){k();let l=c.attributes,i=d.getAttributes(),m=T.defaultAttributeValues;for(let r in i){let g=i[r];if(g.location>=0){let HJ=l[r];if(HJ===void 0){if(r==="instanceMatrix"&&V.instanceMatrix)HJ=V.instanceMatrix;if(r==="instanceColor"&&V.instanceColor)HJ=V.instanceColor}if(HJ!==void 0){let{normalized:GJ,itemSize:PJ}=HJ,uJ=Q.get(HJ);if(uJ===void 0)continue;let{buffer:K0,type:cJ,bytesPerElement:n}=uJ,WJ=cJ===J.INT||cJ===J.UNSIGNED_INT||HJ.gpuType===lQ;if(HJ.isInterleavedBufferAttribute){let QJ=HJ.data,MJ=QJ.stride,SJ=HJ.offset;if(QJ.isInstancedInterleavedBuffer){for(let jJ=0;jJ<g.locationSize;jJ++)O(g.location+jJ,QJ.meshPerAttribute);if(V.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=QJ.meshPerAttribute*QJ.count}else for(let jJ=0;jJ<g.locationSize;jJ++)N(g.location+jJ);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let jJ=0;jJ<g.locationSize;jJ++)L(g.location+jJ,PJ/g.locationSize,cJ,GJ,MJ*n,(SJ+PJ/g.locationSize*jJ)*n,WJ)}else{if(HJ.isInstancedBufferAttribute){for(let QJ=0;QJ<g.locationSize;QJ++)O(g.location+QJ,HJ.meshPerAttribute);if(V.isInstancedMesh!==!0&&c._maxInstanceCount===void 0)c._maxInstanceCount=HJ.meshPerAttribute*HJ.count}else for(let QJ=0;QJ<g.locationSize;QJ++)N(g.location+QJ);J.bindBuffer(J.ARRAY_BUFFER,K0);for(let QJ=0;QJ<g.locationSize;QJ++)L(g.location+QJ,PJ/g.locationSize,cJ,GJ,PJ*n,PJ/g.locationSize*QJ*n,WJ)}}else if(m!==void 0){let GJ=m[r];if(GJ!==void 0)switch(GJ.length){case 2:J.vertexAttrib2fv(g.location,GJ);break;case 3:J.vertexAttrib3fv(g.location,GJ);break;case 4:J.vertexAttrib4fv(g.location,GJ);break;default:J.vertexAttrib1fv(g.location,GJ)}}}}_()}function j(){x();for(let V in $){let T=$[V];for(let d in T){let c=T[d];for(let l in c)G(c[l].object),delete c[l];delete T[d]}delete $[V]}}function w(V){if($[V.id]===void 0)return;let T=$[V.id];for(let d in T){let c=T[d];for(let l in c)G(c[l].object),delete c[l];delete T[d]}delete $[V.id]}function A(V){for(let T in $){let d=$[T];if(d[V.id]===void 0)continue;let c=d[V.id];for(let l in c)G(c[l].object),delete c[l];delete d[V.id]}}function x(){if(z(),Y=!0,H===W)return;H=W,U(H.object)}function z(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:X,reset:x,resetDefaultState:z,dispose:j,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:k,enableAttribute:N,disableUnusedAttributes:_}}function _G(J,Q,Z){let $;function W(U){$=U}function H(U,G){J.drawArrays($,U,G),Z.update(G,$,1)}function Y(U,G,E){if(E===0)return;J.drawArraysInstanced($,U,G,E),Z.update(G,$,E)}function X(U,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL($,U,0,G,0,E);let F=0;for(let M=0;M<E;M++)F+=G[M];Z.update(F,$,1)}function K(U,G,E,q){if(E===0)return;let F=Q.get("WEBGL_multi_draw");if(F===null)for(let M=0;M<U.length;M++)Y(U[M],G[M],q[M]);else{F.multiDrawArraysInstancedWEBGL($,U,0,G,0,q,0,E);let M=0;for(let k=0;k<E;k++)M+=G[k]*q[k];Z.update(M,$,1)}}this.setMode=W,this.render=H,this.renderInstances=Y,this.renderMultiDraw=X,this.renderMultiDrawInstances=K}function CG(J,Q,Z,$){let W;function H(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function Y(A){if(A!==N8&&$.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let x=A===D6&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==c8&&$.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==n8&&!x)return!1;return!0}function K(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=Z.precision!==void 0?Z.precision:"highp",G=K(U);if(G!==U)console.warn("THREE.WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=Z.logarithmicDepthBuffer===!0,q=Z.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),N=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),L=J.getParameter(J.MAX_VARYING_VECTORS),C=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,w=J.getParameter(J.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:H,getMaxPrecision:K,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:q,maxTextures:F,maxVertexTextures:M,maxTextureSize:k,maxCubemapSize:N,maxAttributes:O,maxVertexUniforms:_,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:j,maxSamples:w}}function wG(J){let Q=this,Z=null,$=0,W=!1,H=!1,Y=new I8,X=new fJ,K={value:null,needsUpdate:!1};this.uniform=K,this.numPlanes=0,this.numIntersection=0,this.init=function(E,q){let F=E.length!==0||q||$!==0||W;return W=q,$=E.length,F},this.beginShadows=function(){H=!0,G(null)},this.endShadows=function(){H=!1},this.setGlobalState=function(E,q){Z=G(E,q,0)},this.setState=function(E,q,F){let{clippingPlanes:M,clipIntersection:k,clipShadows:N}=E,O=J.get(E);if(!W||M===null||M.length===0||H&&!N)if(H)G(null);else U();else{let _=H?0:$,L=_*4,C=O.clippingState||null;K.value=C,C=G(M,q,L,F);for(let j=0;j!==L;++j)C[j]=Z[j];O.clippingState=C,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=_}};function U(){if(K.value!==Z)K.value=Z,K.needsUpdate=$>0;Q.numPlanes=$,Q.numIntersection=0}function G(E,q,F,M){let k=E!==null?E.length:0,N=null;if(k!==0){if(N=K.value,M!==!0||N===null){let O=F+k*4,_=q.matrixWorldInverse;if(X.getNormalMatrix(_),N===null||N.length<O)N=new Float32Array(O);for(let L=0,C=F;L!==k;++L,C+=4)Y.copy(E[L]).applyMatrix4(_,X),Y.normal.toArray(N,C),N[C+3]=Y.constant}K.value=N,K.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,N}}function IG(J){let Q=new WeakMap;function Z(Y,X){if(X===D7)Y.mapping=x9;else if(X===L7)Y.mapping=G9;return Y}function $(Y){if(Y&&Y.isTexture){let X=Y.mapping;if(X===D7||X===L7)if(Q.has(Y)){let K=Q.get(Y).texture;return Z(K,Y.mapping)}else{let K=Y.image;if(K&&K.height>0){let U=new yZ(K.height);return U.fromEquirectangularTexture(J,Y),Q.set(Y,U),Y.addEventListener("dispose",W),Z(U.texture,Y.mapping)}else return null}}return Y}function W(Y){let X=Y.target;X.removeEventListener("dispose",W);let K=Q.get(X);if(K!==void 0)Q.delete(X),K.dispose()}function H(){Q=new WeakMap}return{get:$,dispose:H}}var t9=4,NH=[0.125,0.215,0.35,0.446,0.526,0.582],k9=20,sZ=new t8,OH=new AJ,oZ=null,iZ=0,aZ=0,rZ=!1,R9=(1+Math.sqrt(5))/2,r9=1/R9,FH=[new S(-R9,r9,0),new S(R9,r9,0),new S(-r9,0,R9),new S(r9,0,R9),new S(0,R9,-r9),new S(0,R9,r9),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],PG=new S;class eZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(J,Q=0,Z=0.1,$=100,W={}){let{size:H=256,position:Y=PG}=W;oZ=this._renderer.getRenderTarget(),iZ=this._renderer.getActiveCubeFace(),aZ=this._renderer.getActiveMipmapLevel(),rZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(H);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,Z,$,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=MH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=kH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodPlanes.length;J++)this._lodPlanes[J].dispose()}_cleanup(J){this._renderer.setRenderTarget(oZ,iZ,aZ),this._renderer.xr.enabled=rZ,J.scissorTest=!1,e7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===x9||J.mapping===G9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);oZ=this._renderer.getRenderTarget(),iZ=this._renderer.getActiveCubeFace(),aZ=this._renderer.getActiveMipmapLevel(),rZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Z=Q||this._allocateTargets();return this._textureToCubeUV(J,Z),this._applyPMREM(Z),this._cleanup(Z),Z}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,Z={magFilter:Y8,minFilter:Y8,generateMipmaps:!1,type:D6,format:N8,colorSpace:T0,depthBuffer:!1},$=RH(J,Q,Z);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=RH(J,Q,Z);let{_lodMax:W}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TG(W)),this._blurMaterial=AG(W,J,Q)}return $}_compileMaterial(J){let Q=new D0(this._lodPlanes[0],J);this._renderer.compile(Q,sZ)}_sceneToCubeUV(J,Q,Z,$,W){let X=new V0(90,1,Q,Z),K=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,q=G.toneMapping;if(G.getClearColor(OH),G.toneMapping=H8,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget($),G.clearDepth(),G.setRenderTarget(null);let M=new x0({name:"PMREM.Background",side:h0,depthWrite:!1,depthTest:!1}),k=new D0(new c9,M),N=!1,O=J.background;if(O){if(O.isColor)M.color.copy(O),J.background=null,N=!0}else M.color.copy(OH),N=!0;for(let _=0;_<6;_++){let L=_%3;if(L===0)X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x+U[_],W.y,W.z);else if(L===1)X.up.set(0,0,K[_]),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y+U[_],W.z);else X.up.set(0,K[_],0),X.position.set(W.x,W.y,W.z),X.lookAt(W.x,W.y,W.z+U[_]);let C=this._cubeSize;if(e7($,L*C,_>2?C:0,C,C),G.setRenderTarget($),N)G.render(k,X);G.render(J,X)}k.geometry.dispose(),k.material.dispose(),G.toneMapping=q,G.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let Z=this._renderer,$=J.mapping===x9||J.mapping===G9;if($){if(this._cubemapMaterial===null)this._cubemapMaterial=MH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=kH();let W=$?this._cubemapMaterial:this._equirectMaterial,H=new D0(this._lodPlanes[0],W),Y=W.uniforms;Y.envMap.value=J;let X=this._cubeSize;e7(Q,0,0,3*X,2*X),Z.setRenderTarget(Q),Z.render(H,sZ)}_applyPMREM(J){let Q=this._renderer,Z=Q.autoClear;Q.autoClear=!1;let $=this._lodPlanes.length;for(let W=1;W<$;W++){let H=Math.sqrt(this._sigmas[W]*this._sigmas[W]-this._sigmas[W-1]*this._sigmas[W-1]),Y=FH[($-W-1)%FH.length];this._blur(J,W-1,W,H,Y)}Q.autoClear=Z}_blur(J,Q,Z,$,W){let H=this._pingPongRenderTarget;this._halfBlur(J,H,Q,Z,$,"latitudinal",W),this._halfBlur(H,J,Z,Z,$,"longitudinal",W)}_halfBlur(J,Q,Z,$,W,H,Y){let X=this._renderer,K=this._blurMaterial;if(H!=="latitudinal"&&H!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let U=3,G=new D0(this._lodPlanes[$],K),E=K.uniforms,q=this._sizeLods[Z]-1,F=isFinite(W)?Math.PI/(2*q):2*Math.PI/(2*k9-1),M=W/F,k=isFinite(W)?1+Math.floor(U*M):k9;if(k>k9)console.warn(`sigmaRadians, ${W}, is too large and will clip, as it requested ${k} samples when the maximum is set to ${k9}`);let N=[],O=0;for(let w=0;w<k9;++w){let A=w/M,x=Math.exp(-A*A/2);if(N.push(x),w===0)O+=x;else if(w<k)O+=2*x}for(let w=0;w<N.length;w++)N[w]=N[w]/O;if(E.envMap.value=J.texture,E.samples.value=k,E.weights.value=N,E.latitudinal.value=H==="latitudinal",Y)E.poleAxis.value=Y;let{_lodMax:_}=this;E.dTheta.value=F,E.mipInt.value=_-Z;let L=this._sizeLods[$],C=3*L*($>_-t9?$-_+t9:0),j=4*(this._cubeSize-L);e7(Q,C,j,3*L,2*L),X.setRenderTarget(Q),X.render(G,sZ)}}function TG(J){let Q=[],Z=[],$=[],W=J,H=J-t9+1+NH.length;for(let Y=0;Y<H;Y++){let X=Math.pow(2,W);Z.push(X);let K=1/X;if(Y>J-t9)K=NH[Y-J+t9-1];else if(Y===0)K=0;$.push(K);let U=1/(X-2),G=-U,E=1+U,q=[G,G,E,G,E,E,G,G,E,E,G,E],F=6,M=6,k=3,N=2,O=1,_=new Float32Array(k*M*F),L=new Float32Array(N*M*F),C=new Float32Array(O*M*F);for(let w=0;w<F;w++){let A=w%3*2/3-1,x=w>2?0:-1,z=[A,x,0,A+0.6666666666666666,x,0,A+0.6666666666666666,x+1,0,A,x,0,A+0.6666666666666666,x+1,0,A,x+1,0];_.set(z,k*M*w),L.set(q,N*M*w);let V=[w,w,w,w,w,w];C.set(V,O*M*w)}let j=new g0;if(j.setAttribute("position",new N0(_,k)),j.setAttribute("uv",new N0(L,N)),j.setAttribute("faceIndex",new N0(C,O)),Q.push(j),W>t9)W--}return{lodPlanes:Q,sizeLods:Z,sigmas:$}}function RH(J,Q,Z){let $=new v8(J,Q,Z);return $.texture.mapping=k6,$.texture.name="PMREM.cubeUv",$.scissorTest=!0,$}function e7(J,Q,Z,$,W){J.viewport.set(Q,Z,$,W),J.scissor.set(Q,Z,$,W)}function AG(J,Q,Z){let $=new Float32Array(k9),W=new S(0,1,0);return new r0({name:"SphericalGaussianBlur",defines:{n:k9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/Z,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:$},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:W}},vertexShader:Q$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function kH(){return new r0({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Q$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function MH(){return new r0({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Q$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:u8,depthTest:!1,depthWrite:!1})}function Q$(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SG(J){let Q=new WeakMap,Z=null;function $(X){if(X&&X.isTexture){let K=X.mapping,U=K===D7||K===L7,G=K===x9||K===G9;if(U||G){let E=Q.get(X),q=E!==void 0?E.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==q){if(Z===null)Z=new eZ(J);return E=U?Z.fromEquirectangular(X,E):Z.fromCubemap(X,E),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),E.texture}else if(E!==void 0)return E.texture;else{let F=X.image;if(U&&F&&F.height>0||G&&F&&W(F)){if(Z===null)Z=new eZ(J);return E=U?Z.fromEquirectangular(X):Z.fromCubemap(X),E.texture.pmremVersion=X.pmremVersion,Q.set(X,E),X.addEventListener("dispose",H),E.texture}else return null}}}return X}function W(X){let K=0,U=6;for(let G=0;G<U;G++)if(X[G]!==void 0)K++;return K===U}function H(X){let K=X.target;K.removeEventListener("dispose",H);let U=Q.get(K);if(U!==void 0)Q.delete(K),U.dispose()}function Y(){if(Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:$,dispose:Y}}function jG(J){let Q={};function Z($){if(Q[$]!==void 0)return Q[$];let W;switch($){case"WEBGL_depth_texture":W=J.getExtension("WEBGL_depth_texture")||J.getExtension("MOZ_WEBGL_depth_texture")||J.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":W=J.getExtension("EXT_texture_filter_anisotropic")||J.getExtension("MOZ_EXT_texture_filter_anisotropic")||J.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":W=J.getExtension("WEBGL_compressed_texture_s3tc")||J.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":W=J.getExtension("WEBGL_compressed_texture_pvrtc")||J.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:W=J.getExtension($)}return Q[$]=W,W}return{has:function($){return Z($)!==null},init:function(){Z("EXT_color_buffer_float"),Z("WEBGL_clip_cull_distance"),Z("OES_texture_float_linear"),Z("EXT_color_buffer_half_float"),Z("WEBGL_multisampled_render_to_texture"),Z("WEBGL_render_shared_exponent")},get:function($){let W=Z($);if(W===null)f9("THREE.WebGLRenderer: "+$+" extension not supported.");return W}}}function vG(J,Q,Z,$){let W={},H=new WeakMap;function Y(E){let q=E.target;if(q.index!==null)Q.remove(q.index);for(let M in q.attributes)Q.remove(q.attributes[M]);q.removeEventListener("dispose",Y),delete W[q.id];let F=H.get(q);if(F)Q.remove(F),H.delete(q);if($.releaseStatesOfGeometry(q),q.isInstancedBufferGeometry===!0)delete q._maxInstanceCount;Z.memory.geometries--}function X(E,q){if(W[q.id]===!0)return q;return q.addEventListener("dispose",Y),W[q.id]=!0,Z.memory.geometries++,q}function K(E){let q=E.attributes;for(let F in q)Q.update(q[F],J.ARRAY_BUFFER)}function U(E){let q=[],F=E.index,M=E.attributes.position,k=0;if(F!==null){let _=F.array;k=F.version;for(let L=0,C=_.length;L<C;L+=3){let j=_[L+0],w=_[L+1],A=_[L+2];q.push(j,w,w,A,A,j)}}else if(M!==void 0){let _=M.array;k=M.version;for(let L=0,C=_.length/3-1;L<C;L+=3){let j=L+0,w=L+1,A=L+2;q.push(j,w,w,A,A,j)}}else return;let N=new((PZ(q))?v7:j7)(q,1);N.version=k;let O=H.get(E);if(O)Q.remove(O);H.set(E,N)}function G(E){let q=H.get(E);if(q){let F=E.index;if(F!==null){if(q.version<F.version)U(E)}}else U(E);return H.get(E)}return{get:X,update:K,getWireframeAttribute:G}}function yG(J,Q,Z){let $;function W(q){$=q}let H,Y;function X(q){H=q.type,Y=q.bytesPerElement}function K(q,F){J.drawElements($,F,H,q*Y),Z.update(F,$,1)}function U(q,F,M){if(M===0)return;J.drawElementsInstanced($,F,H,q*Y,M),Z.update(F,$,M)}function G(q,F,M){if(M===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL($,F,0,H,q,0,M);let N=0;for(let O=0;O<M;O++)N+=F[O];Z.update(N,$,1)}function E(q,F,M,k){if(M===0)return;let N=Q.get("WEBGL_multi_draw");if(N===null)for(let O=0;O<q.length;O++)U(q[O]/Y,F[O],k[O]);else{N.multiDrawElementsInstancedWEBGL($,F,0,H,q,0,k,0,M);let O=0;for(let _=0;_<M;_++)O+=F[_]*k[_];Z.update(O,$,1)}}this.setMode=W,this.setIndex=X,this.render=K,this.renderInstances=U,this.renderMultiDraw=G,this.renderMultiDrawInstances=E}function hG(J){let Q={geometries:0,textures:0},Z={frame:0,calls:0,triangles:0,points:0,lines:0};function $(H,Y,X){switch(Z.calls++,Y){case J.TRIANGLES:Z.triangles+=X*(H/3);break;case J.LINES:Z.lines+=X*(H/2);break;case J.LINE_STRIP:Z.lines+=X*(H-1);break;case J.LINE_LOOP:Z.lines+=X*H;break;case J.POINTS:Z.points+=X*H;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Y);break}}function W(){Z.calls=0,Z.triangles=0,Z.points=0,Z.lines=0}return{memory:Q,render:Z,programs:null,autoReset:!0,reset:W,update:$}}function fG(J,Q,Z){let $=new WeakMap,W=new sJ;function H(Y,X,K){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,E=G!==void 0?G.length:0,q=$.get(X);if(q===void 0||q.count!==E){let z=function(){A.dispose(),$.delete(X),X.removeEventListener("dispose",z)};if(q!==void 0)q.texture.dispose();let F=X.morphAttributes.position!==void 0,M=X.morphAttributes.normal!==void 0,k=X.morphAttributes.color!==void 0,N=X.morphAttributes.position||[],O=X.morphAttributes.normal||[],_=X.morphAttributes.color||[],L=0;if(F===!0)L=1;if(M===!0)L=2;if(k===!0)L=3;let C=X.attributes.position.count*L,j=1;if(C>Q.maxTextureSize)j=Math.ceil(C/Q.maxTextureSize),C=Q.maxTextureSize;let w=new Float32Array(C*j*4*E),A=new A7(w,C,j,E);A.type=n8,A.needsUpdate=!0;let x=L*4;for(let V=0;V<E;V++){let T=N[V],d=O[V],c=_[V],l=C*j*4*V;for(let i=0;i<T.count;i++){let m=i*x;if(F===!0)W.fromBufferAttribute(T,i),w[l+m+0]=W.x,w[l+m+1]=W.y,w[l+m+2]=W.z,w[l+m+3]=0;if(M===!0)W.fromBufferAttribute(d,i),w[l+m+4]=W.x,w[l+m+5]=W.y,w[l+m+6]=W.z,w[l+m+7]=0;if(k===!0)W.fromBufferAttribute(c,i),w[l+m+8]=W.x,w[l+m+9]=W.y,w[l+m+10]=W.z,w[l+m+11]=c.itemSize===4?W.w:1}}q={count:E,texture:A,size:new pJ(C,j)},$.set(X,q),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)K.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Z);else{let F=0;for(let k=0;k<U.length;k++)F+=U[k];let M=X.morphTargetsRelative?1:1-F;K.getUniforms().setValue(J,"morphTargetBaseInfluence",M),K.getUniforms().setValue(J,"morphTargetInfluences",U)}K.getUniforms().setValue(J,"morphTargetsTexture",q.texture,Z),K.getUniforms().setValue(J,"morphTargetsTextureSize",q.size)}return{update:H}}function bG(J,Q,Z,$){let W=new WeakMap;function H(K){let U=$.render.frame,G=K.geometry,E=Q.get(K,G);if(W.get(E)!==U)Q.update(E),W.set(E,U);if(K.isInstancedMesh){if(K.hasEventListener("dispose",X)===!1)K.addEventListener("dispose",X);if(W.get(K)!==U){if(Z.update(K.instanceMatrix,J.ARRAY_BUFFER),K.instanceColor!==null)Z.update(K.instanceColor,J.ARRAY_BUFFER);W.set(K,U)}}if(K.isSkinnedMesh){let q=K.skeleton;if(W.get(q)!==U)q.update(),W.set(q,U)}return E}function Y(){W=new WeakMap}function X(K){let U=K.target;if(U.removeEventListener("dispose",X),Z.remove(U.instanceMatrix),U.instanceColor!==null)Z.remove(U.instanceColor)}return{update:H,dispose:Y}}var bH=new G0,DH=new m7(1,1),xH=new A7,gH=new SZ,pH=new h7,LH=[],VH=[],zH=new Float32Array(16),BH=new Float32Array(9),_H=new Float32Array(4);function e9(J,Q,Z){let $=J[0];if($<=0||$>0)return J;let W=Q*Z,H=LH[W];if(H===void 0)H=new Float32Array(W),LH[W]=H;if(Q!==0){$.toArray(H,0);for(let Y=1,X=0;Y!==Q;++Y)X+=Z,J[Y].toArray(H,X)}return H}function O0(J,Q){if(J.length!==Q.length)return!1;for(let Z=0,$=J.length;Z<$;Z++)if(J[Z]!==Q[Z])return!1;return!0}function F0(J,Q){for(let Z=0,$=Q.length;Z<$;Z++)J[Z]=Q[Z]}function QQ(J,Q){let Z=VH[Q];if(Z===void 0)Z=new Int32Array(Q),VH[Q]=Z;for(let $=0;$!==Q;++$)Z[$]=J.allocateTextureUnit();return Z}function xG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1f(this.addr,Q),Z[0]=Q}function gG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(O0(Z,Q))return;J.uniform2fv(this.addr,Q),F0(Z,Q)}}function pG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else if(Q.r!==void 0){if(Z[0]!==Q.r||Z[1]!==Q.g||Z[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),Z[0]=Q.r,Z[1]=Q.g,Z[2]=Q.b}else{if(O0(Z,Q))return;J.uniform3fv(this.addr,Q),F0(Z,Q)}}function lG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(O0(Z,Q))return;J.uniform4fv(this.addr,Q),F0(Z,Q)}}function dG(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(O0(Z,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),F0(Z,Q)}else{if(O0(Z,$))return;_H.set($),J.uniformMatrix2fv(this.addr,!1,_H),F0(Z,$)}}function mG(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(O0(Z,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),F0(Z,Q)}else{if(O0(Z,$))return;BH.set($),J.uniformMatrix3fv(this.addr,!1,BH),F0(Z,$)}}function uG(J,Q){let Z=this.cache,$=Q.elements;if($===void 0){if(O0(Z,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),F0(Z,Q)}else{if(O0(Z,$))return;zH.set($),J.uniformMatrix4fv(this.addr,!1,zH),F0(Z,$)}}function cG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1i(this.addr,Q),Z[0]=Q}function nG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(O0(Z,Q))return;J.uniform2iv(this.addr,Q),F0(Z,Q)}}function sG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(O0(Z,Q))return;J.uniform3iv(this.addr,Q),F0(Z,Q)}}function oG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(O0(Z,Q))return;J.uniform4iv(this.addr,Q),F0(Z,Q)}}function iG(J,Q){let Z=this.cache;if(Z[0]===Q)return;J.uniform1ui(this.addr,Q),Z[0]=Q}function aG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),Z[0]=Q.x,Z[1]=Q.y}else{if(O0(Z,Q))return;J.uniform2uiv(this.addr,Q),F0(Z,Q)}}function rG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z}else{if(O0(Z,Q))return;J.uniform3uiv(this.addr,Q),F0(Z,Q)}}function tG(J,Q){let Z=this.cache;if(Q.x!==void 0){if(Z[0]!==Q.x||Z[1]!==Q.y||Z[2]!==Q.z||Z[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),Z[0]=Q.x,Z[1]=Q.y,Z[2]=Q.z,Z[3]=Q.w}else{if(O0(Z,Q))return;J.uniform4uiv(this.addr,Q),F0(Z,Q)}}function eG(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;let H;if(this.type===J.SAMPLER_2D_SHADOW)DH.compareFunction=_Z,H=DH;else H=bH;Z.setTexture2D(Q||H,W)}function JE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture3D(Q||gH,W)}function QE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTextureCube(Q||pH,W)}function ZE(J,Q,Z){let $=this.cache,W=Z.allocateTextureUnit();if($[0]!==W)J.uniform1i(this.addr,W),$[0]=W;Z.setTexture2DArray(Q||xH,W)}function $E(J){switch(J){case 5126:return xG;case 35664:return gG;case 35665:return pG;case 35666:return lG;case 35674:return dG;case 35675:return mG;case 35676:return uG;case 5124:case 35670:return cG;case 35667:case 35671:return nG;case 35668:case 35672:return sG;case 35669:case 35673:return oG;case 5125:return iG;case 36294:return aG;case 36295:return rG;case 36296:return tG;case 35678:case 36198:case 36298:case 36306:case 35682:return eG;case 35679:case 36299:case 36307:return JE;case 35680:case 36300:case 36308:case 36293:return QE;case 36289:case 36303:case 36311:case 36292:return ZE}}function WE(J,Q){J.uniform1fv(this.addr,Q)}function HE(J,Q){let Z=e9(Q,this.size,2);J.uniform2fv(this.addr,Z)}function YE(J,Q){let Z=e9(Q,this.size,3);J.uniform3fv(this.addr,Z)}function XE(J,Q){let Z=e9(Q,this.size,4);J.uniform4fv(this.addr,Z)}function KE(J,Q){let Z=e9(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,Z)}function UE(J,Q){let Z=e9(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,Z)}function GE(J,Q){let Z=e9(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,Z)}function EE(J,Q){J.uniform1iv(this.addr,Q)}function qE(J,Q){J.uniform2iv(this.addr,Q)}function NE(J,Q){J.uniform3iv(this.addr,Q)}function OE(J,Q){J.uniform4iv(this.addr,Q)}function FE(J,Q){J.uniform1uiv(this.addr,Q)}function RE(J,Q){J.uniform2uiv(this.addr,Q)}function kE(J,Q){J.uniform3uiv(this.addr,Q)}function ME(J,Q){J.uniform4uiv(this.addr,Q)}function DE(J,Q,Z){let $=this.cache,W=Q.length,H=QQ(Z,W);if(!O0($,H))J.uniform1iv(this.addr,H),F0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture2D(Q[Y]||bH,H[Y])}function LE(J,Q,Z){let $=this.cache,W=Q.length,H=QQ(Z,W);if(!O0($,H))J.uniform1iv(this.addr,H),F0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture3D(Q[Y]||gH,H[Y])}function VE(J,Q,Z){let $=this.cache,W=Q.length,H=QQ(Z,W);if(!O0($,H))J.uniform1iv(this.addr,H),F0($,H);for(let Y=0;Y!==W;++Y)Z.setTextureCube(Q[Y]||pH,H[Y])}function zE(J,Q,Z){let $=this.cache,W=Q.length,H=QQ(Z,W);if(!O0($,H))J.uniform1iv(this.addr,H),F0($,H);for(let Y=0;Y!==W;++Y)Z.setTexture2DArray(Q[Y]||xH,H[Y])}function BE(J){switch(J){case 5126:return WE;case 35664:return HE;case 35665:return YE;case 35666:return XE;case 35674:return KE;case 35675:return UE;case 35676:return GE;case 5124:case 35670:return EE;case 35667:case 35671:return qE;case 35668:case 35672:return NE;case 35669:case 35673:return OE;case 5125:return FE;case 36294:return RE;case 36295:return kE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return zE}}class lH{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.setValue=$E(Q.type)}}class dH{constructor(J,Q,Z){this.id=J,this.addr=Z,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=BE(Q.type)}}class mH{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,Z){let $=this.seq;for(let W=0,H=$.length;W!==H;++W){let Y=$[W];Y.setValue(J,Q[Y.id],Z)}}}var tZ=/(\w+)(\])?(\[|\.)?/g;function CH(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function _E(J,Q,Z){let $=J.name,W=$.length;tZ.lastIndex=0;while(!0){let H=tZ.exec($),Y=tZ.lastIndex,X=H[1],K=H[2]==="]",U=H[3];if(K)X=X|0;if(U===void 0||U==="["&&Y+2===W){CH(Z,U===void 0?new lH(X,J,Q):new dH(X,J,Q));break}else{let E=Z.map[X];if(E===void 0)E=new mH(X),CH(Z,E);Z=E}}}class v6{constructor(J,Q){this.seq=[],this.map={};let Z=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let $=0;$<Z;++$){let W=J.getActiveUniform(Q,$),H=J.getUniformLocation(Q,W.name);_E(W,H,this)}}setValue(J,Q,Z,$){let W=this.map[Q];if(W!==void 0)W.setValue(J,Z,$)}setOptional(J,Q,Z){let $=Q[Z];if($!==void 0)this.setValue(J,Z,$)}static upload(J,Q,Z,$){for(let W=0,H=Q.length;W!==H;++W){let Y=Q[W],X=Z[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,$)}}static seqWithValue(J,Q){let Z=[];for(let $=0,W=J.length;$!==W;++$){let H=J[$];if(H.id in Q)Z.push(H)}return Z}}function wH(J,Q,Z){let $=J.createShader(Q);return J.shaderSource($,Z),J.compileShader($),$}var CE=37297,wE=0;function IE(J,Q){let Z=J.split(`
`),$=[],W=Math.max(Q-6,0),H=Math.min(Q+6,Z.length);for(let Y=W;Y<H;Y++){let X=Y+1;$.push(`${X===Q?">":" "} ${X}: ${Z[Y]}`)}return $.join(`
`)}var IH=new fJ;function PE(J){mJ._getMatrix(IH,mJ.workingColorSpace,J);let Q=`mat3( ${IH.elements.map((Z)=>Z.toFixed(4))} )`;switch(mJ.getTransfer(J)){case BZ:return[Q,"LinearTransferOETF"];case J0:return[Q,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function PH(J,Q,Z){let $=J.getShaderParameter(Q,J.COMPILE_STATUS),H=(J.getShaderInfoLog(Q)||"").trim();if($&&H==="")return"";let Y=/ERROR: 0:(\d+)/.exec(H);if(Y){let X=parseInt(Y[1]);return Z.toUpperCase()+`

`+H+`

`+IE(J.getShaderSource(Q),X)}else return H}function TE(J,Q){let Z=PE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${Z[1]}( vec4( value.rgb * ${Z[0]}, value.a ) );`,"}"].join(`
`)}function AE(J,Q){let Z;switch(Q){case SW:Z="Linear";break;case jW:Z="Reinhard";break;case vW:Z="Cineon";break;case yW:Z="ACESFilmic";break;case fW:Z="AgX";break;case bW:Z="Neutral";break;case hW:Z="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",Q),Z="Linear"}return"vec3 "+J+"( vec3 color ) { return "+Z+"ToneMapping( color ); }"}var JQ=new S;function SE(){mJ.getLuminanceCoefficients(JQ);let J=JQ.x.toFixed(4),Q=JQ.y.toFixed(4),Z=JQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${Z} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function jE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(j6).join(`
`)}function vE(J){let Q=[];for(let Z in J){let $=J[Z];if($===!1)continue;Q.push("#define "+Z+" "+$)}return Q.join(`
`)}function yE(J,Q){let Z={},$=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<$;W++){let H=J.getActiveAttrib(Q,W),Y=H.name,X=1;if(H.type===J.FLOAT_MAT2)X=2;if(H.type===J.FLOAT_MAT3)X=3;if(H.type===J.FLOAT_MAT4)X=4;Z[Y]={type:H.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return Z}function j6(J){return J!==""}function TH(J,Q){let Z=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Z).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function AH(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function J$(J){return J.replace(hE,bE)}var fE=new Map;function bE(J,Q){let Z=bJ[Q];if(Z===void 0){let $=fE.get(Q);if($!==void 0)Z=bJ[$],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,$);else throw Error("Can not resolve #include <"+Q+">")}return J$(Z)}var xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function SH(J){return J.replace(xE,gE)}function gE(J,Q,Z,$){let W="";for(let H=parseInt(Q);H<parseInt(Z);H++)W+=$.replace(/\[\s*i\s*\]/g,"[ "+H+" ]").replace(/UNROLLED_LOOP_INDEX/g,H);return W}function jH(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}function pE(J){let Q="SHADOWMAP_TYPE_BASIC";if(J.shadowMapType===bQ)Q="SHADOWMAP_TYPE_PCF";else if(J.shadowMapType===XW)Q="SHADOWMAP_TYPE_PCF_SOFT";else if(J.shadowMapType===q8)Q="SHADOWMAP_TYPE_VSM";return Q}function lE(J){let Q="ENVMAP_TYPE_CUBE";if(J.envMap)switch(J.envMapMode){case x9:case G9:Q="ENVMAP_TYPE_CUBE";break;case k6:Q="ENVMAP_TYPE_CUBE_UV";break}return Q}function dE(J){let Q="ENVMAP_MODE_REFLECTION";if(J.envMap)switch(J.envMapMode){case G9:Q="ENVMAP_MODE_REFRACTION";break}return Q}function mE(J){let Q="ENVMAP_BLENDING_NONE";if(J.envMap)switch(J.combine){case PW:Q="ENVMAP_BLENDING_MULTIPLY";break;case TW:Q="ENVMAP_BLENDING_MIX";break;case AW:Q="ENVMAP_BLENDING_ADD";break}return Q}function uE(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let Z=Math.log2(Q)-2,$=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:$,maxMip:Z}}function cE(J,Q,Z,$){let W=J.getContext(),H=Z.defines,Y=Z.vertexShader,X=Z.fragmentShader,K=pE(Z),U=lE(Z),G=dE(Z),E=mE(Z),q=uE(Z),F=jE(Z),M=vE(H),k=W.createProgram(),N,O,_=Z.glslVersion?"#version "+Z.glslVersion+`
`:"";if(Z.isRawShaderMaterial){if(N=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,M].filter(j6).join(`
`),N.length>0)N+=`
`;if(O=["#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,M].filter(j6).join(`
`),O.length>0)O+=`
`}else N=[jH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,M,Z.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Z.batching?"#define USE_BATCHING":"",Z.batchingColor?"#define USE_BATCHING_COLOR":"",Z.instancing?"#define USE_INSTANCING":"",Z.instancingColor?"#define USE_INSTANCING_COLOR":"",Z.instancingMorph?"#define USE_INSTANCING_MORPH":"",Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.map?"#define USE_MAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+G:"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.displacementMap?"#define USE_DISPLACEMENTMAP":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.mapUv?"#define MAP_UV "+Z.mapUv:"",Z.alphaMapUv?"#define ALPHAMAP_UV "+Z.alphaMapUv:"",Z.lightMapUv?"#define LIGHTMAP_UV "+Z.lightMapUv:"",Z.aoMapUv?"#define AOMAP_UV "+Z.aoMapUv:"",Z.emissiveMapUv?"#define EMISSIVEMAP_UV "+Z.emissiveMapUv:"",Z.bumpMapUv?"#define BUMPMAP_UV "+Z.bumpMapUv:"",Z.normalMapUv?"#define NORMALMAP_UV "+Z.normalMapUv:"",Z.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Z.displacementMapUv:"",Z.metalnessMapUv?"#define METALNESSMAP_UV "+Z.metalnessMapUv:"",Z.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Z.roughnessMapUv:"",Z.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Z.anisotropyMapUv:"",Z.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Z.clearcoatMapUv:"",Z.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Z.clearcoatNormalMapUv:"",Z.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Z.clearcoatRoughnessMapUv:"",Z.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Z.iridescenceMapUv:"",Z.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Z.iridescenceThicknessMapUv:"",Z.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Z.sheenColorMapUv:"",Z.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Z.sheenRoughnessMapUv:"",Z.specularMapUv?"#define SPECULARMAP_UV "+Z.specularMapUv:"",Z.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Z.specularColorMapUv:"",Z.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Z.specularIntensityMapUv:"",Z.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Z.transmissionMapUv:"",Z.thicknessMapUv?"#define THICKNESSMAP_UV "+Z.thicknessMapUv:"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.flatShading?"#define FLAT_SHADED":"",Z.skinning?"#define USE_SKINNING":"",Z.morphTargets?"#define USE_MORPHTARGETS":"",Z.morphNormals&&Z.flatShading===!1?"#define USE_MORPHNORMALS":"",Z.morphColors?"#define USE_MORPHCOLORS":"",Z.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Z.morphTextureStride:"",Z.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Z.morphTargetsCount:"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(j6).join(`
`),O=[jH(Z),"#define SHADER_TYPE "+Z.shaderType,"#define SHADER_NAME "+Z.shaderName,M,Z.useFog&&Z.fog?"#define USE_FOG":"",Z.useFog&&Z.fogExp2?"#define FOG_EXP2":"",Z.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Z.map?"#define USE_MAP":"",Z.matcap?"#define USE_MATCAP":"",Z.envMap?"#define USE_ENVMAP":"",Z.envMap?"#define "+U:"",Z.envMap?"#define "+G:"",Z.envMap?"#define "+E:"",q?"#define CUBEUV_TEXEL_WIDTH "+q.texelWidth:"",q?"#define CUBEUV_TEXEL_HEIGHT "+q.texelHeight:"",q?"#define CUBEUV_MAX_MIP "+q.maxMip+".0":"",Z.lightMap?"#define USE_LIGHTMAP":"",Z.aoMap?"#define USE_AOMAP":"",Z.bumpMap?"#define USE_BUMPMAP":"",Z.normalMap?"#define USE_NORMALMAP":"",Z.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Z.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Z.emissiveMap?"#define USE_EMISSIVEMAP":"",Z.anisotropy?"#define USE_ANISOTROPY":"",Z.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Z.clearcoat?"#define USE_CLEARCOAT":"",Z.clearcoatMap?"#define USE_CLEARCOATMAP":"",Z.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Z.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Z.dispersion?"#define USE_DISPERSION":"",Z.iridescence?"#define USE_IRIDESCENCE":"",Z.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Z.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Z.specularMap?"#define USE_SPECULARMAP":"",Z.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Z.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Z.roughnessMap?"#define USE_ROUGHNESSMAP":"",Z.metalnessMap?"#define USE_METALNESSMAP":"",Z.alphaMap?"#define USE_ALPHAMAP":"",Z.alphaTest?"#define USE_ALPHATEST":"",Z.alphaHash?"#define USE_ALPHAHASH":"",Z.sheen?"#define USE_SHEEN":"",Z.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Z.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Z.transmission?"#define USE_TRANSMISSION":"",Z.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Z.thicknessMap?"#define USE_THICKNESSMAP":"",Z.vertexTangents&&Z.flatShading===!1?"#define USE_TANGENT":"",Z.vertexColors||Z.instancingColor||Z.batchingColor?"#define USE_COLOR":"",Z.vertexAlphas?"#define USE_COLOR_ALPHA":"",Z.vertexUv1s?"#define USE_UV1":"",Z.vertexUv2s?"#define USE_UV2":"",Z.vertexUv3s?"#define USE_UV3":"",Z.pointsUvs?"#define USE_POINTS_UV":"",Z.gradientMap?"#define USE_GRADIENTMAP":"",Z.flatShading?"#define FLAT_SHADED":"",Z.doubleSided?"#define DOUBLE_SIDED":"",Z.flipSided?"#define FLIP_SIDED":"",Z.shadowMapEnabled?"#define USE_SHADOWMAP":"",Z.shadowMapEnabled?"#define "+K:"",Z.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Z.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Z.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Z.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Z.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Z.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Z.toneMapping!==H8?"#define TONE_MAPPING":"",Z.toneMapping!==H8?bJ.tonemapping_pars_fragment:"",Z.toneMapping!==H8?AE("toneMapping",Z.toneMapping):"",Z.dithering?"#define DITHERING":"",Z.opaque?"#define OPAQUE":"",bJ.colorspace_pars_fragment,TE("linearToOutputTexel",Z.outputColorSpace),SE(),Z.useDepthPacking?"#define DEPTH_PACKING "+Z.depthPacking:"",`
`].filter(j6).join(`
`);if(Y=J$(Y),Y=TH(Y,Z),Y=AH(Y,Z),X=J$(X),X=TH(X,Z),X=AH(X,Z),Y=SH(Y),X=SH(X),Z.isRawShaderMaterial!==!0)_=`#version 300 es
`,N=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+N,O=["#define varying in",Z.glslVersion===CZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Z.glslVersion===CZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let L=_+N+Y,C=_+O+X,j=wH(W,W.VERTEX_SHADER,L),w=wH(W,W.FRAGMENT_SHADER,C);if(W.attachShader(k,j),W.attachShader(k,w),Z.index0AttributeName!==void 0)W.bindAttribLocation(k,0,Z.index0AttributeName);else if(Z.morphTargets===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function A(T){if(J.debug.checkShaderErrors){let d=W.getProgramInfoLog(k)||"",c=W.getShaderInfoLog(j)||"",l=W.getShaderInfoLog(w)||"",i=d.trim(),m=c.trim(),r=l.trim(),g=!0,HJ=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(g=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,j,w);else{let GJ=PH(W,j,"vertex"),PJ=PH(W,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+i+`
`+GJ+`
`+PJ)}else if(i!=="")console.warn("THREE.WebGLProgram: Program Info Log:",i);else if(m===""||r==="")HJ=!1;if(HJ)T.diagnostics={runnable:g,programLog:i,vertexShader:{log:m,prefix:N},fragmentShader:{log:r,prefix:O}}}W.deleteShader(j),W.deleteShader(w),x=new v6(W,k),z=yE(W,k)}let x;this.getUniforms=function(){if(x===void 0)A(this);return x};let z;this.getAttributes=function(){if(z===void 0)A(this);return z};let V=Z.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(V===!1)V=W.getProgramParameter(k,CE);return V},this.destroy=function(){$.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=Z.shaderType,this.name=Z.shaderName,this.id=wE++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=j,this.fragmentShader=w,this}var nE=0;class uH{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:Z}=J,$=this._getShaderStage(Q),W=this._getShaderStage(Z),H=this._getShaderCacheForMaterial(J);if(H.has($)===!1)H.add($),$.usedTimes++;if(H.has(W)===!1)H.add(W),W.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let Z of Q)if(Z.usedTimes--,Z.usedTimes===0)this.shaderCache.delete(Z.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,Z=Q.get(J);if(Z===void 0)Z=new Set,Q.set(J,Z);return Z}_getShaderStage(J){let Q=this.shaderCache,Z=Q.get(J);if(Z===void 0)Z=new cH(J),Q.set(J,Z);return Z}}class cH{constructor(J){this.id=nE++,this.code=J,this.usedTimes=0}}function sE(J,Q,Z,$,W,H,Y){let X=new S7,K=new uH,U=new Set,G=[],E=W.logarithmicDepthBuffer,q=W.vertexTextures,F=W.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(z){if(U.add(z),z===0)return"uv";return`uv${z}`}function N(z,V,T,d,c){let l=d.fog,i=c.geometry,m=z.isMeshStandardMaterial?d.environment:null,r=(z.isMeshStandardMaterial?Z:Q).get(z.envMap||m),g=!!r&&r.mapping===k6?r.image.height:null,HJ=M[z.type];if(z.precision!==null){if(F=W.getMaxPrecision(z.precision),F!==z.precision)console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",F,"instead.")}let GJ=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,PJ=GJ!==void 0?GJ.length:0,uJ=0;if(i.morphAttributes.position!==void 0)uJ=1;if(i.morphAttributes.normal!==void 0)uJ=2;if(i.morphAttributes.color!==void 0)uJ=3;let K0,cJ,n,WJ;if(HJ){let aJ=R8[HJ];K0=aJ.vertexShader,cJ=aJ.fragmentShader}else K0=z.vertexShader,cJ=z.fragmentShader,K.update(z),n=K.getVertexShaderID(z),WJ=K.getFragmentShaderID(z);let QJ=J.getRenderTarget(),MJ=J.state.buffers.depth.getReversed(),SJ=c.isInstancedMesh===!0,jJ=c.isBatchedMesh===!0,R0=!!z.map,I=!!z.matcap,$0=!!r,hJ=!!z.aoMap,TJ=!!z.lightMap,RJ=!!z.bumpMap,W0=!!z.normalMap,VJ=!!z.displacementMap,_J=!!z.emissiveMap,L0=!!z.metalnessMap,k0=!!z.roughnessMap,U0=z.anisotropy>0,B=z.clearcoat>0,R=z.dispersion>0,h=z.iridescence>0,u=z.sheen>0,o=z.transmission>0,p=U0&&!!z.anisotropyMap,qJ=B&&!!z.clearcoatMap,JJ=B&&!!z.clearcoatNormalMap,kJ=B&&!!z.clearcoatRoughnessMap,wJ=h&&!!z.iridescenceMap,e=h&&!!z.iridescenceThicknessMap,KJ=u&&!!z.sheenColorMap,DJ=u&&!!z.sheenRoughnessMap,LJ=!!z.specularMap,UJ=!!z.specularColorMap,xJ=!!z.specularIntensityMap,P=o&&!!z.transmissionMap,YJ=o&&!!z.thicknessMap,ZJ=!!z.gradientMap,NJ=!!z.alphaMap,a=z.alphaTest>0,s=!!z.alphaHash,FJ=!!z.extensions,vJ=H8;if(z.toneMapped){if(QJ===null||QJ.isXRRenderTarget===!0)vJ=J.toneMapping}let tJ={shaderID:HJ,shaderType:z.type,shaderName:z.name,vertexShader:K0,fragmentShader:cJ,defines:z.defines,customVertexShaderID:n,customFragmentShaderID:WJ,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:F,batching:jJ,batchingColor:jJ&&c._colorsTexture!==null,instancing:SJ,instancingColor:SJ&&c.instanceColor!==null,instancingMorph:SJ&&c.morphTexture!==null,supportsVertexTextures:q,outputColorSpace:QJ===null?J.outputColorSpace:QJ.isXRRenderTarget===!0?QJ.texture.colorSpace:T0,alphaToCoverage:!!z.alphaToCoverage,map:R0,matcap:I,envMap:$0,envMapMode:$0&&r.mapping,envMapCubeUVHeight:g,aoMap:hJ,lightMap:TJ,bumpMap:RJ,normalMap:W0,displacementMap:q&&VJ,emissiveMap:_J,normalMapObjectSpace:W0&&z.normalMapType===oW,normalMapTangentSpace:W0&&z.normalMapType===sW,metalnessMap:L0,roughnessMap:k0,anisotropy:U0,anisotropyMap:p,clearcoat:B,clearcoatMap:qJ,clearcoatNormalMap:JJ,clearcoatRoughnessMap:kJ,dispersion:R,iridescence:h,iridescenceMap:wJ,iridescenceThicknessMap:e,sheen:u,sheenColorMap:KJ,sheenRoughnessMap:DJ,specularMap:LJ,specularColorMap:UJ,specularIntensityMap:xJ,transmission:o,transmissionMap:P,thicknessMap:YJ,gradientMap:ZJ,opaque:z.transparent===!1&&z.blending===F6&&z.alphaToCoverage===!1,alphaMap:NJ,alphaTest:a,alphaHash:s,combine:z.combine,mapUv:R0&&k(z.map.channel),aoMapUv:hJ&&k(z.aoMap.channel),lightMapUv:TJ&&k(z.lightMap.channel),bumpMapUv:RJ&&k(z.bumpMap.channel),normalMapUv:W0&&k(z.normalMap.channel),displacementMapUv:VJ&&k(z.displacementMap.channel),emissiveMapUv:_J&&k(z.emissiveMap.channel),metalnessMapUv:L0&&k(z.metalnessMap.channel),roughnessMapUv:k0&&k(z.roughnessMap.channel),anisotropyMapUv:p&&k(z.anisotropyMap.channel),clearcoatMapUv:qJ&&k(z.clearcoatMap.channel),clearcoatNormalMapUv:JJ&&k(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kJ&&k(z.clearcoatRoughnessMap.channel),iridescenceMapUv:wJ&&k(z.iridescenceMap.channel),iridescenceThicknessMapUv:e&&k(z.iridescenceThicknessMap.channel),sheenColorMapUv:KJ&&k(z.sheenColorMap.channel),sheenRoughnessMapUv:DJ&&k(z.sheenRoughnessMap.channel),specularMapUv:LJ&&k(z.specularMap.channel),specularColorMapUv:UJ&&k(z.specularColorMap.channel),specularIntensityMapUv:xJ&&k(z.specularIntensityMap.channel),transmissionMapUv:P&&k(z.transmissionMap.channel),thicknessMapUv:YJ&&k(z.thicknessMap.channel),alphaMapUv:NJ&&k(z.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(W0||U0),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:c.isPoints===!0&&!!i.attributes.uv&&(R0||NJ),fog:!!l,useFog:z.fog===!0,fogExp2:!!l&&l.isFogExp2,flatShading:z.flatShading===!0&&z.wireframe===!1,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:MJ,skinning:c.isSkinnedMesh===!0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:PJ,morphTextureStride:uJ,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numClippingPlanes:Y.numPlanes,numClipIntersection:Y.numIntersection,dithering:z.dithering,shadowMapEnabled:J.shadowMap.enabled&&T.length>0,shadowMapType:J.shadowMap.type,toneMapping:vJ,decodeVideoTexture:R0&&z.map.isVideoTexture===!0&&mJ.getTransfer(z.map.colorSpace)===J0,decodeVideoTextureEmissive:_J&&z.emissiveMap.isVideoTexture===!0&&mJ.getTransfer(z.emissiveMap.colorSpace)===J0,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===i0,flipSided:z.side===h0,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:FJ&&z.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(FJ&&z.extensions.multiDraw===!0||jJ)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return tJ.vertexUv1s=U.has(1),tJ.vertexUv2s=U.has(2),tJ.vertexUv3s=U.has(3),U.clear(),tJ}function O(z){let V=[];if(z.shaderID)V.push(z.shaderID);else V.push(z.customVertexShaderID),V.push(z.customFragmentShaderID);if(z.defines!==void 0)for(let T in z.defines)V.push(T),V.push(z.defines[T]);if(z.isRawShaderMaterial===!1)_(V,z),L(V,z),V.push(J.outputColorSpace);return V.push(z.customProgramCacheKey),V.join()}function _(z,V){z.push(V.precision),z.push(V.outputColorSpace),z.push(V.envMapMode),z.push(V.envMapCubeUVHeight),z.push(V.mapUv),z.push(V.alphaMapUv),z.push(V.lightMapUv),z.push(V.aoMapUv),z.push(V.bumpMapUv),z.push(V.normalMapUv),z.push(V.displacementMapUv),z.push(V.emissiveMapUv),z.push(V.metalnessMapUv),z.push(V.roughnessMapUv),z.push(V.anisotropyMapUv),z.push(V.clearcoatMapUv),z.push(V.clearcoatNormalMapUv),z.push(V.clearcoatRoughnessMapUv),z.push(V.iridescenceMapUv),z.push(V.iridescenceThicknessMapUv),z.push(V.sheenColorMapUv),z.push(V.sheenRoughnessMapUv),z.push(V.specularMapUv),z.push(V.specularColorMapUv),z.push(V.specularIntensityMapUv),z.push(V.transmissionMapUv),z.push(V.thicknessMapUv),z.push(V.combine),z.push(V.fogExp2),z.push(V.sizeAttenuation),z.push(V.morphTargetsCount),z.push(V.morphAttributeCount),z.push(V.numDirLights),z.push(V.numPointLights),z.push(V.numSpotLights),z.push(V.numSpotLightMaps),z.push(V.numHemiLights),z.push(V.numRectAreaLights),z.push(V.numDirLightShadows),z.push(V.numPointLightShadows),z.push(V.numSpotLightShadows),z.push(V.numSpotLightShadowsWithMaps),z.push(V.numLightProbes),z.push(V.shadowMapType),z.push(V.toneMapping),z.push(V.numClippingPlanes),z.push(V.numClipIntersection),z.push(V.depthPacking)}function L(z,V){if(X.disableAll(),V.supportsVertexTextures)X.enable(0);if(V.instancing)X.enable(1);if(V.instancingColor)X.enable(2);if(V.instancingMorph)X.enable(3);if(V.matcap)X.enable(4);if(V.envMap)X.enable(5);if(V.normalMapObjectSpace)X.enable(6);if(V.normalMapTangentSpace)X.enable(7);if(V.clearcoat)X.enable(8);if(V.iridescence)X.enable(9);if(V.alphaTest)X.enable(10);if(V.vertexColors)X.enable(11);if(V.vertexAlphas)X.enable(12);if(V.vertexUv1s)X.enable(13);if(V.vertexUv2s)X.enable(14);if(V.vertexUv3s)X.enable(15);if(V.vertexTangents)X.enable(16);if(V.anisotropy)X.enable(17);if(V.alphaHash)X.enable(18);if(V.batching)X.enable(19);if(V.dispersion)X.enable(20);if(V.batchingColor)X.enable(21);if(V.gradientMap)X.enable(22);if(z.push(X.mask),X.disableAll(),V.fog)X.enable(0);if(V.useFog)X.enable(1);if(V.flatShading)X.enable(2);if(V.logarithmicDepthBuffer)X.enable(3);if(V.reversedDepthBuffer)X.enable(4);if(V.skinning)X.enable(5);if(V.morphTargets)X.enable(6);if(V.morphNormals)X.enable(7);if(V.morphColors)X.enable(8);if(V.premultipliedAlpha)X.enable(9);if(V.shadowMapEnabled)X.enable(10);if(V.doubleSided)X.enable(11);if(V.flipSided)X.enable(12);if(V.useDepthPacking)X.enable(13);if(V.dithering)X.enable(14);if(V.transmission)X.enable(15);if(V.sheen)X.enable(16);if(V.opaque)X.enable(17);if(V.pointsUvs)X.enable(18);if(V.decodeVideoTexture)X.enable(19);if(V.decodeVideoTextureEmissive)X.enable(20);if(V.alphaToCoverage)X.enable(21);z.push(X.mask)}function C(z){let V=M[z.type],T;if(V){let d=R8[V];T=HH.clone(d.uniforms)}else T=z.uniforms;return T}function j(z,V){let T;for(let d=0,c=G.length;d<c;d++){let l=G[d];if(l.cacheKey===V){T=l,++T.usedTimes;break}}if(T===void 0)T=new cE(J,V,z,H),G.push(T);return T}function w(z){if(--z.usedTimes===0){let V=G.indexOf(z);G[V]=G[G.length-1],G.pop(),z.destroy()}}function A(z){K.remove(z)}function x(){K.dispose()}return{getParameters:N,getProgramCacheKey:O,getUniforms:C,acquireProgram:j,releaseProgram:w,releaseShaderCache:A,programs:G,dispose:x}}function oE(){let J=new WeakMap;function Q(Y){return J.has(Y)}function Z(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function $(Y){J.delete(Y)}function W(Y,X,K){J.get(Y)[X]=K}function H(){J=new WeakMap}return{has:Q,get:Z,remove:$,update:W,dispose:H}}function iE(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function vH(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function yH(){let J=[],Q=0,Z=[],$=[],W=[];function H(){Q=0,Z.length=0,$.length=0,W.length=0}function Y(E,q,F,M,k,N){let O=J[Q];if(O===void 0)O={id:E.id,object:E,geometry:q,material:F,groupOrder:M,renderOrder:E.renderOrder,z:k,group:N},J[Q]=O;else O.id=E.id,O.object=E,O.geometry=q,O.material=F,O.groupOrder=M,O.renderOrder=E.renderOrder,O.z=k,O.group=N;return Q++,O}function X(E,q,F,M,k,N){let O=Y(E,q,F,M,k,N);if(F.transmission>0)$.push(O);else if(F.transparent===!0)W.push(O);else Z.push(O)}function K(E,q,F,M,k,N){let O=Y(E,q,F,M,k,N);if(F.transmission>0)$.unshift(O);else if(F.transparent===!0)W.unshift(O);else Z.unshift(O)}function U(E,q){if(Z.length>1)Z.sort(E||iE);if($.length>1)$.sort(q||vH);if(W.length>1)W.sort(q||vH)}function G(){for(let E=Q,q=J.length;E<q;E++){let F=J[E];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:Z,transmissive:$,transparent:W,init:H,push:X,unshift:K,finish:G,sort:U}}function aE(){let J=new WeakMap;function Q($,W){let H=J.get($),Y;if(H===void 0)Y=new yH,J.set($,[Y]);else if(W>=H.length)Y=new yH,H.push(Y);else Y=H[W];return Y}function Z(){J=new WeakMap}return{get:Q,dispose:Z}}function rE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={direction:new S,color:new AJ};break;case"SpotLight":Z={position:new S,direction:new S,color:new AJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Z={position:new S,color:new AJ,distance:0,decay:0};break;case"HemisphereLight":Z={direction:new S,skyColor:new AJ,groundColor:new AJ};break;case"RectAreaLight":Z={color:new AJ,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=Z,Z}}}function tE(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let Z;switch(Q.type){case"DirectionalLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pJ};break;case"SpotLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pJ};break;case"PointLight":Z={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pJ,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=Z,Z}}}var eE=0;function J1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Q1(J){let Q=new rE,Z=tE(),$={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)$.probe.push(new S);let W=new S,H=new yJ,Y=new yJ;function X(U){let G=0,E=0,q=0;for(let z=0;z<9;z++)$.probe[z].set(0,0,0);let F=0,M=0,k=0,N=0,O=0,_=0,L=0,C=0,j=0,w=0,A=0;U.sort(J1);for(let z=0,V=U.length;z<V;z++){let T=U[z],d=T.color,c=T.intensity,l=T.distance,i=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)G+=d.r*c,E+=d.g*c,q+=d.b*c;else if(T.isLightProbe){for(let m=0;m<9;m++)$.probe[m].addScaledVector(T.sh.coefficients[m],c);A++}else if(T.isDirectionalLight){let m=Q.get(T);if(m.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let r=T.shadow,g=Z.get(T);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,$.directionalShadow[F]=g,$.directionalShadowMap[F]=i,$.directionalShadowMatrix[F]=T.shadow.matrix,_++}$.directional[F]=m,F++}else if(T.isSpotLight){let m=Q.get(T);m.position.setFromMatrixPosition(T.matrixWorld),m.color.copy(d).multiplyScalar(c),m.distance=l,m.coneCos=Math.cos(T.angle),m.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),m.decay=T.decay,$.spot[k]=m;let r=T.shadow;if(T.map){if($.spotLightMap[j]=T.map,j++,r.updateMatrices(T),T.castShadow)w++}if($.spotLightMatrix[k]=r.matrix,T.castShadow){let g=Z.get(T);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,$.spotShadow[k]=g,$.spotShadowMap[k]=i,C++}k++}else if(T.isRectAreaLight){let m=Q.get(T);m.color.copy(d).multiplyScalar(c),m.halfWidth.set(T.width*0.5,0,0),m.halfHeight.set(0,T.height*0.5,0),$.rectArea[N]=m,N++}else if(T.isPointLight){let m=Q.get(T);if(m.color.copy(T.color).multiplyScalar(T.intensity),m.distance=T.distance,m.decay=T.decay,T.castShadow){let r=T.shadow,g=Z.get(T);g.shadowIntensity=r.intensity,g.shadowBias=r.bias,g.shadowNormalBias=r.normalBias,g.shadowRadius=r.radius,g.shadowMapSize=r.mapSize,g.shadowCameraNear=r.camera.near,g.shadowCameraFar=r.camera.far,$.pointShadow[M]=g,$.pointShadowMap[M]=i,$.pointShadowMatrix[M]=T.shadow.matrix,L++}$.point[M]=m,M++}else if(T.isHemisphereLight){let m=Q.get(T);m.skyColor.copy(T.color).multiplyScalar(c),m.groundColor.copy(T.groundColor).multiplyScalar(c),$.hemi[O]=m,O++}}if(N>0)if(J.has("OES_texture_float_linear")===!0)$.rectAreaLTC1=$J.LTC_FLOAT_1,$.rectAreaLTC2=$J.LTC_FLOAT_2;else $.rectAreaLTC1=$J.LTC_HALF_1,$.rectAreaLTC2=$J.LTC_HALF_2;$.ambient[0]=G,$.ambient[1]=E,$.ambient[2]=q;let x=$.hash;if(x.directionalLength!==F||x.pointLength!==M||x.spotLength!==k||x.rectAreaLength!==N||x.hemiLength!==O||x.numDirectionalShadows!==_||x.numPointShadows!==L||x.numSpotShadows!==C||x.numSpotMaps!==j||x.numLightProbes!==A)$.directional.length=F,$.spot.length=k,$.rectArea.length=N,$.point.length=M,$.hemi.length=O,$.directionalShadow.length=_,$.directionalShadowMap.length=_,$.pointShadow.length=L,$.pointShadowMap.length=L,$.spotShadow.length=C,$.spotShadowMap.length=C,$.directionalShadowMatrix.length=_,$.pointShadowMatrix.length=L,$.spotLightMatrix.length=C+j-w,$.spotLightMap.length=j,$.numSpotLightShadowsWithMaps=w,$.numLightProbes=A,x.directionalLength=F,x.pointLength=M,x.spotLength=k,x.rectAreaLength=N,x.hemiLength=O,x.numDirectionalShadows=_,x.numPointShadows=L,x.numSpotShadows=C,x.numSpotMaps=j,x.numLightProbes=A,$.version=eE++}function K(U,G){let E=0,q=0,F=0,M=0,k=0,N=G.matrixWorldInverse;for(let O=0,_=U.length;O<_;O++){let L=U[O];if(L.isDirectionalLight){let C=$.directional[E];C.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(N),E++}else if(L.isSpotLight){let C=$.spot[F];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),C.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(W),C.direction.transformDirection(N),F++}else if(L.isRectAreaLight){let C=$.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),Y.identity(),H.copy(L.matrixWorld),H.premultiply(N),Y.extractRotation(H),C.halfWidth.set(L.width*0.5,0,0),C.halfHeight.set(0,L.height*0.5,0),C.halfWidth.applyMatrix4(Y),C.halfHeight.applyMatrix4(Y),M++}else if(L.isPointLight){let C=$.point[q];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(N),q++}else if(L.isHemisphereLight){let C=$.hemi[k];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(N),k++}}}return{setup:X,setupView:K,state:$}}function hH(J){let Q=new Q1(J),Z=[],$=[];function W(G){U.camera=G,Z.length=0,$.length=0}function H(G){Z.push(G)}function Y(G){$.push(G)}function X(){Q.setup(Z)}function K(G){Q.setupView(Z,G)}let U={lightsArray:Z,shadowsArray:$,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:W,state:U,setupLights:X,setupLightsView:K,pushLight:H,pushShadow:Y}}function Z1(J){let Q=new WeakMap;function Z(W,H=0){let Y=Q.get(W),X;if(Y===void 0)X=new hH(J),Q.set(W,[X]);else if(H>=Y.length)X=new hH(J),Y.push(X);else X=Y[H];return X}function $(){Q=new WeakMap}return{get:Z,dispose:$}}var $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H1(J,Q,Z){let $=new I6,W=new pJ,H=new pJ,Y=new sJ,X=new hZ({depthPacking:nW}),K=new fZ,U={},G=Z.maxTextureSize,E={[m8]:h0,[h0]:m8,[i0]:i0},q=new r0({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pJ},radius:{value:4}},vertexShader:$1,fragmentShader:W1}),F=q.clone();F.defines.HORIZONTAL_PASS=1;let M=new g0;M.setAttribute("position",new N0(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new D0(M,q),N=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bQ;let O=this.type;this.render=function(w,A,x){if(N.enabled===!1)return;if(N.autoUpdate===!1&&N.needsUpdate===!1)return;if(w.length===0)return;let z=J.getRenderTarget(),V=J.getActiveCubeFace(),T=J.getActiveMipmapLevel(),d=J.state;if(d.setBlending(u8),d.buffers.depth.getReversed()===!0)d.buffers.color.setClear(0,0,0,0);else d.buffers.color.setClear(1,1,1,1);d.buffers.depth.setTest(!0),d.setScissorTest(!1);let c=O!==q8&&this.type===q8,l=O===q8&&this.type!==q8;for(let i=0,m=w.length;i<m;i++){let r=w[i],g=r.shadow;if(g===void 0){console.warn("THREE.WebGLShadowMap:",r,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;W.copy(g.mapSize);let HJ=g.getFrameExtents();if(W.multiply(HJ),H.copy(g.mapSize),W.x>G||W.y>G){if(W.x>G)H.x=Math.floor(G/HJ.x),W.x=H.x*HJ.x,g.mapSize.x=H.x;if(W.y>G)H.y=Math.floor(G/HJ.y),W.y=H.y*HJ.y,g.mapSize.y=H.y}if(g.map===null||c===!0||l===!0){let PJ=this.type!==q8?{minFilter:S8,magFilter:S8}:{};if(g.map!==null)g.map.dispose();g.map=new v8(W.x,W.y,PJ),g.map.texture.name=r.name+".shadowMap",g.camera.updateProjectionMatrix()}J.setRenderTarget(g.map),J.clear();let GJ=g.getViewportCount();for(let PJ=0;PJ<GJ;PJ++){let uJ=g.getViewport(PJ);Y.set(H.x*uJ.x,H.y*uJ.y,H.x*uJ.z,H.y*uJ.w),d.viewport(Y),g.updateMatrices(r,PJ),$=g.getFrustum(),C(A,x,g.camera,r,this.type)}if(g.isPointLightShadow!==!0&&this.type===q8)_(g,x);g.needsUpdate=!1}O=this.type,N.needsUpdate=!1,J.setRenderTarget(z,V,T)};function _(w,A){let x=Q.update(k);if(q.defines.VSM_SAMPLES!==w.blurSamples)q.defines.VSM_SAMPLES=w.blurSamples,F.defines.VSM_SAMPLES=w.blurSamples,q.needsUpdate=!0,F.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new v8(W.x,W.y);q.uniforms.shadow_pass.value=w.map.texture,q.uniforms.resolution.value=w.mapSize,q.uniforms.radius.value=w.radius,J.setRenderTarget(w.mapPass),J.clear(),J.renderBufferDirect(A,null,x,q,k,null),F.uniforms.shadow_pass.value=w.mapPass.texture,F.uniforms.resolution.value=w.mapSize,F.uniforms.radius.value=w.radius,J.setRenderTarget(w.map),J.clear(),J.renderBufferDirect(A,null,x,F,k,null)}function L(w,A,x,z){let V=null,T=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)V=T;else if(V=x.isPointLight===!0?K:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let d=V.uuid,c=A.uuid,l=U[d];if(l===void 0)l={},U[d]=l;let i=l[c];if(i===void 0)i=V.clone(),l[c]=i,A.addEventListener("dispose",j);V=i}if(V.visible=A.visible,V.wireframe=A.wireframe,z===q8)V.side=A.shadowSide!==null?A.shadowSide:A.side;else V.side=A.shadowSide!==null?A.shadowSide:E[A.side];if(V.alphaMap=A.alphaMap,V.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,V.map=A.map,V.clipShadows=A.clipShadows,V.clippingPlanes=A.clippingPlanes,V.clipIntersection=A.clipIntersection,V.displacementMap=A.displacementMap,V.displacementScale=A.displacementScale,V.displacementBias=A.displacementBias,V.wireframeLinewidth=A.wireframeLinewidth,V.linewidth=A.linewidth,x.isPointLight===!0&&V.isMeshDistanceMaterial===!0){let d=J.properties.get(V);d.light=x}return V}function C(w,A,x,z,V){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&V===q8)&&(!w.frustumCulled||$.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let c=Q.update(w),l=w.material;if(Array.isArray(l)){let i=c.groups;for(let m=0,r=i.length;m<r;m++){let g=i[m],HJ=l[g.materialIndex];if(HJ&&HJ.visible){let GJ=L(w,HJ,z,V);w.onBeforeShadow(J,w,A,x,c,GJ,g),J.renderBufferDirect(x,null,c,GJ,w,g),w.onAfterShadow(J,w,A,x,c,GJ,g)}}}else if(l.visible){let i=L(w,l,z,V);w.onBeforeShadow(J,w,A,x,c,i,null),J.renderBufferDirect(x,null,c,i,w,null),w.onAfterShadow(J,w,A,x,c,i,null)}}}let d=w.children;for(let c=0,l=d.length;c<l;c++)C(d[c],A,x,z,V)}function j(w){w.target.removeEventListener("dispose",j);for(let x in U){let z=U[x],V=w.target.uuid;if(V in z)z[V].dispose(),delete z[V]}}}var Y1={[q7]:N7,[O7]:k7,[F7]:M7,[R6]:R7,[N7]:q7,[k7]:O7,[M7]:F7,[R7]:R6};function X1(J,Q){function Z(){let P=!1,YJ=new sJ,ZJ=null,NJ=new sJ(0,0,0,0);return{setMask:function(a){if(ZJ!==a&&!P)J.colorMask(a,a,a,a),ZJ=a},setLocked:function(a){P=a},setClear:function(a,s,FJ,vJ,tJ){if(tJ===!0)a*=vJ,s*=vJ,FJ*=vJ;if(YJ.set(a,s,FJ,vJ),NJ.equals(YJ)===!1)J.clearColor(a,s,FJ,vJ),NJ.copy(YJ)},reset:function(){P=!1,ZJ=null,NJ.set(-1,0,0,0)}}}function $(){let P=!1,YJ=!1,ZJ=null,NJ=null,a=null;return{setReversed:function(s){if(YJ!==s){let FJ=Q.get("EXT_clip_control");if(s)FJ.clipControlEXT(FJ.LOWER_LEFT_EXT,FJ.ZERO_TO_ONE_EXT);else FJ.clipControlEXT(FJ.LOWER_LEFT_EXT,FJ.NEGATIVE_ONE_TO_ONE_EXT);YJ=s;let vJ=a;a=null,this.setClear(vJ)}},getReversed:function(){return YJ},setTest:function(s){if(s)QJ(J.DEPTH_TEST);else MJ(J.DEPTH_TEST)},setMask:function(s){if(ZJ!==s&&!P)J.depthMask(s),ZJ=s},setFunc:function(s){if(YJ)s=Y1[s];if(NJ!==s){switch(s){case q7:J.depthFunc(J.NEVER);break;case N7:J.depthFunc(J.ALWAYS);break;case O7:J.depthFunc(J.LESS);break;case R6:J.depthFunc(J.LEQUAL);break;case F7:J.depthFunc(J.EQUAL);break;case R7:J.depthFunc(J.GEQUAL);break;case k7:J.depthFunc(J.GREATER);break;case M7:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}NJ=s}},setLocked:function(s){P=s},setClear:function(s){if(a!==s){if(YJ)s=1-s;J.clearDepth(s),a=s}},reset:function(){P=!1,ZJ=null,NJ=null,a=null,YJ=!1}}}function W(){let P=!1,YJ=null,ZJ=null,NJ=null,a=null,s=null,FJ=null,vJ=null,tJ=null;return{setTest:function(aJ){if(!P)if(aJ)QJ(J.STENCIL_TEST);else MJ(J.STENCIL_TEST)},setMask:function(aJ){if(YJ!==aJ&&!P)J.stencilMask(aJ),YJ=aJ},setFunc:function(aJ,U8,G8){if(ZJ!==aJ||NJ!==U8||a!==G8)J.stencilFunc(aJ,U8,G8),ZJ=aJ,NJ=U8,a=G8},setOp:function(aJ,U8,G8){if(s!==aJ||FJ!==U8||vJ!==G8)J.stencilOp(aJ,U8,G8),s=aJ,FJ=U8,vJ=G8},setLocked:function(aJ){P=aJ},setClear:function(aJ){if(tJ!==aJ)J.clearStencil(aJ),tJ=aJ},reset:function(){P=!1,YJ=null,ZJ=null,NJ=null,a=null,s=null,FJ=null,vJ=null,tJ=null}}}let H=new Z,Y=new $,X=new W,K=new WeakMap,U=new WeakMap,G={},E={},q=new WeakMap,F=[],M=null,k=!1,N=null,O=null,_=null,L=null,C=null,j=null,w=null,A=new AJ(0,0,0),x=0,z=!1,V=null,T=null,d=null,c=null,l=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),m=!1,r=0,g=J.getParameter(J.VERSION);if(g.indexOf("WebGL")!==-1)r=parseFloat(/^WebGL (\d)/.exec(g)[1]),m=r>=1;else if(g.indexOf("OpenGL ES")!==-1)r=parseFloat(/^OpenGL ES (\d)/.exec(g)[1]),m=r>=2;let HJ=null,GJ={},PJ=J.getParameter(J.SCISSOR_BOX),uJ=J.getParameter(J.VIEWPORT),K0=new sJ().fromArray(PJ),cJ=new sJ().fromArray(uJ);function n(P,YJ,ZJ,NJ){let a=new Uint8Array(4),s=J.createTexture();J.bindTexture(P,s),J.texParameteri(P,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(P,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let FJ=0;FJ<ZJ;FJ++)if(P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texImage3D(YJ,0,J.RGBA,1,1,NJ,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D(YJ+FJ,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return s}let WJ={};WJ[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1),WJ[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),WJ[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),WJ[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1),H.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),QJ(J.DEPTH_TEST),Y.setFunc(R6),RJ(!1),W0(fQ),QJ(J.CULL_FACE),hJ(u8);function QJ(P){if(G[P]!==!0)J.enable(P),G[P]=!0}function MJ(P){if(G[P]!==!1)J.disable(P),G[P]=!1}function SJ(P,YJ){if(E[P]!==YJ){if(J.bindFramebuffer(P,YJ),E[P]=YJ,P===J.DRAW_FRAMEBUFFER)E[J.FRAMEBUFFER]=YJ;if(P===J.FRAMEBUFFER)E[J.DRAW_FRAMEBUFFER]=YJ;return!0}return!1}function jJ(P,YJ){let ZJ=F,NJ=!1;if(P){if(ZJ=q.get(YJ),ZJ===void 0)ZJ=[],q.set(YJ,ZJ);let a=P.textures;if(ZJ.length!==a.length||ZJ[0]!==J.COLOR_ATTACHMENT0){for(let s=0,FJ=a.length;s<FJ;s++)ZJ[s]=J.COLOR_ATTACHMENT0+s;ZJ.length=a.length,NJ=!0}}else if(ZJ[0]!==J.BACK)ZJ[0]=J.BACK,NJ=!0;if(NJ)J.drawBuffers(ZJ)}function R0(P){if(M!==P)return J.useProgram(P),M=P,!0;return!1}let I={[b9]:J.FUNC_ADD,[UW]:J.FUNC_SUBTRACT,[GW]:J.FUNC_REVERSE_SUBTRACT};I[EW]=J.MIN,I[qW]=J.MAX;let $0={[NW]:J.ZERO,[OW]:J.ONE,[FW]:J.SRC_COLOR,[kW]:J.SRC_ALPHA,[BW]:J.SRC_ALPHA_SATURATE,[VW]:J.DST_COLOR,[DW]:J.DST_ALPHA,[RW]:J.ONE_MINUS_SRC_COLOR,[MW]:J.ONE_MINUS_SRC_ALPHA,[zW]:J.ONE_MINUS_DST_COLOR,[LW]:J.ONE_MINUS_DST_ALPHA,[_W]:J.CONSTANT_COLOR,[CW]:J.ONE_MINUS_CONSTANT_COLOR,[wW]:J.CONSTANT_ALPHA,[IW]:J.ONE_MINUS_CONSTANT_ALPHA};function hJ(P,YJ,ZJ,NJ,a,s,FJ,vJ,tJ,aJ){if(P===u8){if(k===!0)MJ(J.BLEND),k=!1;return}if(k===!1)QJ(J.BLEND),k=!0;if(P!==KW){if(P!==N||aJ!==z){if(O!==b9||C!==b9)J.blendEquation(J.FUNC_ADD),O=b9,C=b9;if(aJ)switch(P){case F6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case xQ:J.blendFunc(J.ONE,J.ONE);break;case gQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case pQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case F6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case xQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case gQ:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pQ:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,L=null,j=null,w=null,A.set(0,0,0),x=0,N=P,z=aJ}return}if(a=a||YJ,s=s||ZJ,FJ=FJ||NJ,YJ!==O||a!==C)J.blendEquationSeparate(I[YJ],I[a]),O=YJ,C=a;if(ZJ!==_||NJ!==L||s!==j||FJ!==w)J.blendFuncSeparate($0[ZJ],$0[NJ],$0[s],$0[FJ]),_=ZJ,L=NJ,j=s,w=FJ;if(vJ.equals(A)===!1||tJ!==x)J.blendColor(vJ.r,vJ.g,vJ.b,tJ),A.copy(vJ),x=tJ;N=P,z=!1}function TJ(P,YJ){P.side===i0?MJ(J.CULL_FACE):QJ(J.CULL_FACE);let ZJ=P.side===h0;if(YJ)ZJ=!ZJ;RJ(ZJ),P.blending===F6&&P.transparent===!1?hJ(u8):hJ(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),Y.setFunc(P.depthFunc),Y.setTest(P.depthTest),Y.setMask(P.depthWrite),H.setMask(P.colorWrite);let NJ=P.stencilWrite;if(X.setTest(NJ),NJ)X.setMask(P.stencilWriteMask),X.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),X.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);_J(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?QJ(J.SAMPLE_ALPHA_TO_COVERAGE):MJ(J.SAMPLE_ALPHA_TO_COVERAGE)}function RJ(P){if(V!==P){if(P)J.frontFace(J.CW);else J.frontFace(J.CCW);V=P}}function W0(P){if(P!==HW){if(QJ(J.CULL_FACE),P!==T)if(P===fQ)J.cullFace(J.BACK);else if(P===YW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else MJ(J.CULL_FACE);T=P}function VJ(P){if(P!==d){if(m)J.lineWidth(P);d=P}}function _J(P,YJ,ZJ){if(P){if(QJ(J.POLYGON_OFFSET_FILL),c!==YJ||l!==ZJ)J.polygonOffset(YJ,ZJ),c=YJ,l=ZJ}else MJ(J.POLYGON_OFFSET_FILL)}function L0(P){if(P)QJ(J.SCISSOR_TEST);else MJ(J.SCISSOR_TEST)}function k0(P){if(P===void 0)P=J.TEXTURE0+i-1;if(HJ!==P)J.activeTexture(P),HJ=P}function U0(P,YJ,ZJ){if(ZJ===void 0)if(HJ===null)ZJ=J.TEXTURE0+i-1;else ZJ=HJ;let NJ=GJ[ZJ];if(NJ===void 0)NJ={type:void 0,texture:void 0},GJ[ZJ]=NJ;if(NJ.type!==P||NJ.texture!==YJ){if(HJ!==ZJ)J.activeTexture(ZJ),HJ=ZJ;J.bindTexture(P,YJ||WJ[P]),NJ.type=P,NJ.texture=YJ}}function B(){let P=GJ[HJ];if(P!==void 0&&P.type!==void 0)J.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function R(){try{J.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function h(){try{J.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function u(){try{J.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function o(){try{J.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function p(){try{J.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qJ(){try{J.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function JJ(){try{J.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function kJ(){try{J.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wJ(){try{J.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function e(){try{J.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function KJ(P){if(K0.equals(P)===!1)J.scissor(P.x,P.y,P.z,P.w),K0.copy(P)}function DJ(P){if(cJ.equals(P)===!1)J.viewport(P.x,P.y,P.z,P.w),cJ.copy(P)}function LJ(P,YJ){let ZJ=U.get(YJ);if(ZJ===void 0)ZJ=new WeakMap,U.set(YJ,ZJ);let NJ=ZJ.get(P);if(NJ===void 0)NJ=J.getUniformBlockIndex(YJ,P.name),ZJ.set(P,NJ)}function UJ(P,YJ){let NJ=U.get(YJ).get(P);if(K.get(YJ)!==NJ)J.uniformBlockBinding(YJ,NJ,P.__bindingPointIndex),K.set(YJ,NJ)}function xJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),G={},HJ=null,GJ={},E={},q=new WeakMap,F=[],M=null,k=!1,N=null,O=null,_=null,L=null,C=null,j=null,w=null,A=new AJ(0,0,0),x=0,z=!1,V=null,T=null,d=null,c=null,l=null,K0.set(0,0,J.canvas.width,J.canvas.height),cJ.set(0,0,J.canvas.width,J.canvas.height),H.reset(),Y.reset(),X.reset()}return{buffers:{color:H,depth:Y,stencil:X},enable:QJ,disable:MJ,bindFramebuffer:SJ,drawBuffers:jJ,useProgram:R0,setBlending:hJ,setMaterial:TJ,setFlipSided:RJ,setCullFace:W0,setLineWidth:VJ,setPolygonOffset:_J,setScissorTest:L0,activeTexture:k0,bindTexture:U0,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:h,texImage2D:wJ,texImage3D:e,updateUBOMapping:LJ,uniformBlockBinding:UJ,texStorage2D:JJ,texStorage3D:kJ,texSubImage2D:u,texSubImage3D:o,compressedTexSubImage2D:p,compressedTexSubImage3D:qJ,scissor:KJ,viewport:DJ,reset:xJ}}function K1(J,Q,Z,$,W,H,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,K=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new pJ,G=new WeakMap,E,q=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(B){}function M(B,R){return F?new OffscreenCanvas(B,R):h9("canvas")}function k(B,R,h){let u=1,o=U0(B);if(o.width>h||o.height>h)u=h/Math.max(o.width,o.height);if(u<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let p=Math.floor(u*o.width),qJ=Math.floor(u*o.height);if(E===void 0)E=M(p,qJ);let JJ=R?M(p,qJ):E;return JJ.width=p,JJ.height=qJ,JJ.getContext("2d").drawImage(B,0,0,p,qJ),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+o.width+"x"+o.height+") to ("+p+"x"+qJ+")."),JJ}else{if("data"in B)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+o.width+"x"+o.height+").");return B}return B}function N(B){return B.generateMipmaps}function O(B){J.generateMipmap(B)}function _(B){if(B.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(B.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(B,R,h,u,o=!1){if(B!==null){if(J[B]!==void 0)return J[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let p=R;if(R===J.RED){if(h===J.FLOAT)p=J.R32F;if(h===J.HALF_FLOAT)p=J.R16F;if(h===J.UNSIGNED_BYTE)p=J.R8}if(R===J.RED_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.R8UI;if(h===J.UNSIGNED_SHORT)p=J.R16UI;if(h===J.UNSIGNED_INT)p=J.R32UI;if(h===J.BYTE)p=J.R8I;if(h===J.SHORT)p=J.R16I;if(h===J.INT)p=J.R32I}if(R===J.RG){if(h===J.FLOAT)p=J.RG32F;if(h===J.HALF_FLOAT)p=J.RG16F;if(h===J.UNSIGNED_BYTE)p=J.RG8}if(R===J.RG_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RG8UI;if(h===J.UNSIGNED_SHORT)p=J.RG16UI;if(h===J.UNSIGNED_INT)p=J.RG32UI;if(h===J.BYTE)p=J.RG8I;if(h===J.SHORT)p=J.RG16I;if(h===J.INT)p=J.RG32I}if(R===J.RGB_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGB8UI;if(h===J.UNSIGNED_SHORT)p=J.RGB16UI;if(h===J.UNSIGNED_INT)p=J.RGB32UI;if(h===J.BYTE)p=J.RGB8I;if(h===J.SHORT)p=J.RGB16I;if(h===J.INT)p=J.RGB32I}if(R===J.RGBA_INTEGER){if(h===J.UNSIGNED_BYTE)p=J.RGBA8UI;if(h===J.UNSIGNED_SHORT)p=J.RGBA16UI;if(h===J.UNSIGNED_INT)p=J.RGBA32UI;if(h===J.BYTE)p=J.RGBA8I;if(h===J.SHORT)p=J.RGBA16I;if(h===J.INT)p=J.RGBA32I}if(R===J.RGB){if(h===J.UNSIGNED_INT_5_9_9_9_REV)p=J.RGB9_E5;if(h===J.UNSIGNED_INT_10F_11F_11F_REV)p=J.R11F_G11F_B10F}if(R===J.RGBA){let qJ=o?BZ:mJ.getTransfer(u);if(h===J.FLOAT)p=J.RGBA32F;if(h===J.HALF_FLOAT)p=J.RGBA16F;if(h===J.UNSIGNED_BYTE)p=qJ===J0?J.SRGB8_ALPHA8:J.RGBA8;if(h===J.UNSIGNED_SHORT_4_4_4_4)p=J.RGBA4;if(h===J.UNSIGNED_SHORT_5_5_5_1)p=J.RGB5_A1}if(p===J.R16F||p===J.R32F||p===J.RG16F||p===J.RG32F||p===J.RGBA16F||p===J.RGBA32F)Q.get("EXT_color_buffer_float");return p}function C(B,R){let h;if(B){if(R===null||R===l9||R===d9)h=J.DEPTH24_STENCIL8;else if(R===n8)h=J.DEPTH32F_STENCIL8;else if(R===M6)h=J.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(R===null||R===l9||R===d9)h=J.DEPTH_COMPONENT24;else if(R===n8)h=J.DEPTH_COMPONENT32F;else if(R===M6)h=J.DEPTH_COMPONENT16;return h}function j(B,R){if(N(B)===!0||B.isFramebufferTexture&&B.minFilter!==S8&&B.minFilter!==Y8)return Math.log2(Math.max(R.width,R.height))+1;else if(B.mipmaps!==void 0&&B.mipmaps.length>0)return B.mipmaps.length;else if(B.isCompressedTexture&&Array.isArray(B.image))return R.mipmaps.length;else return 1}function w(B){let R=B.target;if(R.removeEventListener("dispose",w),x(R),R.isVideoTexture)G.delete(R)}function A(B){let R=B.target;R.removeEventListener("dispose",A),V(R)}function x(B){let R=$.get(B);if(R.__webglInit===void 0)return;let h=B.source,u=q.get(h);if(u){let o=u[R.__cacheKey];if(o.usedTimes--,o.usedTimes===0)z(B);if(Object.keys(u).length===0)q.delete(h)}$.remove(B)}function z(B){let R=$.get(B);J.deleteTexture(R.__webglTexture);let h=B.source,u=q.get(h);delete u[R.__cacheKey],Y.memory.textures--}function V(B){let R=$.get(B);if(B.depthTexture)B.depthTexture.dispose(),$.remove(B.depthTexture);if(B.isWebGLCubeRenderTarget)for(let u=0;u<6;u++){if(Array.isArray(R.__webglFramebuffer[u]))for(let o=0;o<R.__webglFramebuffer[u].length;o++)J.deleteFramebuffer(R.__webglFramebuffer[u][o]);else J.deleteFramebuffer(R.__webglFramebuffer[u]);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer[u])}else{if(Array.isArray(R.__webglFramebuffer))for(let u=0;u<R.__webglFramebuffer.length;u++)J.deleteFramebuffer(R.__webglFramebuffer[u]);else J.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer)J.deleteRenderbuffer(R.__webglDepthbuffer);if(R.__webglMultisampledFramebuffer)J.deleteFramebuffer(R.__webglMultisampledFramebuffer);if(R.__webglColorRenderbuffer){for(let u=0;u<R.__webglColorRenderbuffer.length;u++)if(R.__webglColorRenderbuffer[u])J.deleteRenderbuffer(R.__webglColorRenderbuffer[u])}if(R.__webglDepthRenderbuffer)J.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let h=B.textures;for(let u=0,o=h.length;u<o;u++){let p=$.get(h[u]);if(p.__webglTexture)J.deleteTexture(p.__webglTexture),Y.memory.textures--;$.remove(h[u])}$.remove(B)}let T=0;function d(){T=0}function c(){let B=T;if(B>=W.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+W.maxTextures);return T+=1,B}function l(B){let R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function i(B,R){let h=$.get(B);if(B.isVideoTexture)L0(B);if(B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&h.__version!==B.version){let u=B.image;if(u===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(u.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{WJ(h,B,R);return}}else if(B.isExternalTexture)h.__webglTexture=B.sourceTexture?B.sourceTexture:null;Z.bindTexture(J.TEXTURE_2D,h.__webglTexture,J.TEXTURE0+R)}function m(B,R){let h=$.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){WJ(h,B,R);return}Z.bindTexture(J.TEXTURE_2D_ARRAY,h.__webglTexture,J.TEXTURE0+R)}function r(B,R){let h=$.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&h.__version!==B.version){WJ(h,B,R);return}Z.bindTexture(J.TEXTURE_3D,h.__webglTexture,J.TEXTURE0+R)}function g(B,R){let h=$.get(B);if(B.version>0&&h.__version!==B.version){QJ(h,B,R);return}Z.bindTexture(J.TEXTURE_CUBE_MAP,h.__webglTexture,J.TEXTURE0+R)}let HJ={[g9]:J.REPEAT,[V7]:J.CLAMP_TO_EDGE,[z7]:J.MIRRORED_REPEAT},GJ={[S8]:J.NEAREST,[B7]:J.NEAREST_MIPMAP_NEAREST,[E9]:J.NEAREST_MIPMAP_LINEAR,[Y8]:J.LINEAR,[p9]:J.LINEAR_MIPMAP_NEAREST,[j8]:J.LINEAR_MIPMAP_LINEAR},PJ={[iW]:J.NEVER,[QH]:J.ALWAYS,[aW]:J.LESS,[_Z]:J.LEQUAL,[rW]:J.EQUAL,[JH]:J.GEQUAL,[tW]:J.GREATER,[eW]:J.NOTEQUAL};function uJ(B,R){if(R.type===n8&&Q.has("OES_texture_float_linear")===!1&&(R.magFilter===Y8||R.magFilter===p9||R.magFilter===E9||R.magFilter===j8||R.minFilter===Y8||R.minFilter===p9||R.minFilter===E9||R.minFilter===j8))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(B,J.TEXTURE_WRAP_S,HJ[R.wrapS]),J.texParameteri(B,J.TEXTURE_WRAP_T,HJ[R.wrapT]),B===J.TEXTURE_3D||B===J.TEXTURE_2D_ARRAY)J.texParameteri(B,J.TEXTURE_WRAP_R,HJ[R.wrapR]);if(J.texParameteri(B,J.TEXTURE_MAG_FILTER,GJ[R.magFilter]),J.texParameteri(B,J.TEXTURE_MIN_FILTER,GJ[R.minFilter]),R.compareFunction)J.texParameteri(B,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(B,J.TEXTURE_COMPARE_FUNC,PJ[R.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===S8)return;if(R.minFilter!==E9&&R.minFilter!==j8)return;if(R.type===n8&&Q.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||$.get(R).__currentAnisotropy){let h=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(B,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,W.getMaxAnisotropy())),$.get(R).__currentAnisotropy=R.anisotropy}}}function K0(B,R){let h=!1;if(B.__webglInit===void 0)B.__webglInit=!0,R.addEventListener("dispose",w);let u=R.source,o=q.get(u);if(o===void 0)o={},q.set(u,o);let p=l(R);if(p!==B.__cacheKey){if(o[p]===void 0)o[p]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,h=!0;o[p].usedTimes++;let qJ=o[B.__cacheKey];if(qJ!==void 0){if(o[B.__cacheKey].usedTimes--,qJ.usedTimes===0)z(R)}B.__cacheKey=p,B.__webglTexture=o[p].texture}return h}function cJ(B,R,h){return Math.floor(Math.floor(B/h)/R)}function n(B,R,h,u){let p=B.updateRanges;if(p.length===0)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,R.width,R.height,h,u,R.data);else{p.sort((e,KJ)=>e.start-KJ.start);let qJ=0;for(let e=1;e<p.length;e++){let KJ=p[qJ],DJ=p[e],LJ=KJ.start+KJ.count,UJ=cJ(DJ.start,R.width,4),xJ=cJ(KJ.start,R.width,4);if(DJ.start<=LJ+1&&UJ===xJ&&cJ(DJ.start+DJ.count-1,R.width,4)===UJ)KJ.count=Math.max(KJ.count,DJ.start+DJ.count-KJ.start);else++qJ,p[qJ]=DJ}p.length=qJ+1;let JJ=J.getParameter(J.UNPACK_ROW_LENGTH),kJ=J.getParameter(J.UNPACK_SKIP_PIXELS),wJ=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,R.width);for(let e=0,KJ=p.length;e<KJ;e++){let DJ=p[e],LJ=Math.floor(DJ.start/4),UJ=Math.ceil(DJ.count/4),xJ=LJ%R.width,P=Math.floor(LJ/R.width),YJ=UJ,ZJ=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,xJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,P),Z.texSubImage2D(J.TEXTURE_2D,0,xJ,P,YJ,1,h,u,R.data)}B.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,JJ),J.pixelStorei(J.UNPACK_SKIP_PIXELS,kJ),J.pixelStorei(J.UNPACK_SKIP_ROWS,wJ)}}function WJ(B,R,h){let u=J.TEXTURE_2D;if(R.isDataArrayTexture||R.isCompressedArrayTexture)u=J.TEXTURE_2D_ARRAY;if(R.isData3DTexture)u=J.TEXTURE_3D;let o=K0(B,R),p=R.source;Z.bindTexture(u,B.__webglTexture,J.TEXTURE0+h);let qJ=$.get(p);if(p.version!==qJ.__version||o===!0){Z.activeTexture(J.TEXTURE0+h);let JJ=mJ.getPrimaries(mJ.workingColorSpace),kJ=R.colorSpace===O8?null:mJ.getPrimaries(R.colorSpace),wJ=R.colorSpace===O8||JJ===kJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,wJ);let e=k(R.image,!1,W.maxTextureSize);e=k0(R,e);let KJ=H.convert(R.format,R.colorSpace),DJ=H.convert(R.type),LJ=L(R.internalFormat,KJ,DJ,R.colorSpace,R.isVideoTexture);uJ(u,R);let UJ,xJ=R.mipmaps,P=R.isVideoTexture!==!0,YJ=qJ.__version===void 0||o===!0,ZJ=p.dataReady,NJ=j(R,e);if(R.isDepthTexture){if(LJ=C(R.format===L6,R.type),YJ)if(P)Z.texStorage2D(J.TEXTURE_2D,1,LJ,e.width,e.height);else Z.texImage2D(J.TEXTURE_2D,0,LJ,e.width,e.height,0,KJ,DJ,null)}else if(R.isDataTexture)if(xJ.length>0){if(P&&YJ)Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,xJ[0].width,xJ[0].height);for(let a=0,s=xJ.length;a<s;a++)if(UJ=xJ[a],P){if(ZJ)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,UJ.width,UJ.height,KJ,DJ,UJ.data)}else Z.texImage2D(J.TEXTURE_2D,a,LJ,UJ.width,UJ.height,0,KJ,DJ,UJ.data);R.generateMipmaps=!1}else if(P){if(YJ)Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,e.width,e.height);if(ZJ)n(R,e,KJ,DJ)}else Z.texImage2D(J.TEXTURE_2D,0,LJ,e.width,e.height,0,KJ,DJ,e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){if(P&&YJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,NJ,LJ,xJ[0].width,xJ[0].height,e.depth);for(let a=0,s=xJ.length;a<s;a++)if(UJ=xJ[a],R.format!==N8)if(KJ!==null)if(P){if(ZJ)if(R.layerUpdates.size>0){let FJ=nZ(UJ.width,UJ.height,R.format,R.type);for(let vJ of R.layerUpdates){let tJ=UJ.data.subarray(vJ*FJ/UJ.data.BYTES_PER_ELEMENT,(vJ+1)*FJ/UJ.data.BYTES_PER_ELEMENT);Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,vJ,UJ.width,UJ.height,1,KJ,tJ)}R.clearLayerUpdates()}else Z.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,UJ.width,UJ.height,e.depth,KJ,UJ.data)}else Z.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,LJ,UJ.width,UJ.height,e.depth,0,UJ.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(ZJ)Z.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,UJ.width,UJ.height,e.depth,KJ,DJ,UJ.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,a,LJ,UJ.width,UJ.height,e.depth,0,KJ,DJ,UJ.data)}else{if(P&&YJ)Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,xJ[0].width,xJ[0].height);for(let a=0,s=xJ.length;a<s;a++)if(UJ=xJ[a],R.format!==N8)if(KJ!==null)if(P){if(ZJ)Z.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,UJ.width,UJ.height,KJ,UJ.data)}else Z.compressedTexImage2D(J.TEXTURE_2D,a,LJ,UJ.width,UJ.height,0,UJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,UJ.width,UJ.height,KJ,DJ,UJ.data)}else Z.texImage2D(J.TEXTURE_2D,a,LJ,UJ.width,UJ.height,0,KJ,DJ,UJ.data)}else if(R.isDataArrayTexture)if(P){if(YJ)Z.texStorage3D(J.TEXTURE_2D_ARRAY,NJ,LJ,e.width,e.height,e.depth);if(ZJ)if(R.layerUpdates.size>0){let a=nZ(e.width,e.height,R.format,R.type);for(let s of R.layerUpdates){let FJ=e.data.subarray(s*a/e.data.BYTES_PER_ELEMENT,(s+1)*a/e.data.BYTES_PER_ELEMENT);Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,s,e.width,e.height,1,KJ,DJ,FJ)}R.clearLayerUpdates()}else Z.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,KJ,DJ,e.data)}else Z.texImage3D(J.TEXTURE_2D_ARRAY,0,LJ,e.width,e.height,e.depth,0,KJ,DJ,e.data);else if(R.isData3DTexture)if(P){if(YJ)Z.texStorage3D(J.TEXTURE_3D,NJ,LJ,e.width,e.height,e.depth);if(ZJ)Z.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,KJ,DJ,e.data)}else Z.texImage3D(J.TEXTURE_3D,0,LJ,e.width,e.height,e.depth,0,KJ,DJ,e.data);else if(R.isFramebufferTexture){if(YJ)if(P)Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,e.width,e.height);else{let{width:a,height:s}=e;for(let FJ=0;FJ<NJ;FJ++)Z.texImage2D(J.TEXTURE_2D,FJ,LJ,a,s,0,KJ,DJ,null),a>>=1,s>>=1}}else if(xJ.length>0){if(P&&YJ){let a=U0(xJ[0]);Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,a.width,a.height)}for(let a=0,s=xJ.length;a<s;a++)if(UJ=xJ[a],P){if(ZJ)Z.texSubImage2D(J.TEXTURE_2D,a,0,0,KJ,DJ,UJ)}else Z.texImage2D(J.TEXTURE_2D,a,LJ,KJ,DJ,UJ);R.generateMipmaps=!1}else if(P){if(YJ){let a=U0(e);Z.texStorage2D(J.TEXTURE_2D,NJ,LJ,a.width,a.height)}if(ZJ)Z.texSubImage2D(J.TEXTURE_2D,0,0,0,KJ,DJ,e)}else Z.texImage2D(J.TEXTURE_2D,0,LJ,KJ,DJ,e);if(N(R))O(u);if(qJ.__version=p.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function QJ(B,R,h){if(R.image.length!==6)return;let u=K0(B,R),o=R.source;Z.bindTexture(J.TEXTURE_CUBE_MAP,B.__webglTexture,J.TEXTURE0+h);let p=$.get(o);if(o.version!==p.__version||u===!0){Z.activeTexture(J.TEXTURE0+h);let qJ=mJ.getPrimaries(mJ.workingColorSpace),JJ=R.colorSpace===O8?null:mJ.getPrimaries(R.colorSpace),kJ=R.colorSpace===O8||qJ===JJ?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,R.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,R.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,kJ);let wJ=R.isCompressedTexture||R.image[0].isCompressedTexture,e=R.image[0]&&R.image[0].isDataTexture,KJ=[];for(let s=0;s<6;s++){if(!wJ&&!e)KJ[s]=k(R.image[s],!0,W.maxCubemapSize);else KJ[s]=e?R.image[s].image:R.image[s];KJ[s]=k0(R,KJ[s])}let DJ=KJ[0],LJ=H.convert(R.format,R.colorSpace),UJ=H.convert(R.type),xJ=L(R.internalFormat,LJ,UJ,R.colorSpace),P=R.isVideoTexture!==!0,YJ=p.__version===void 0||u===!0,ZJ=o.dataReady,NJ=j(R,DJ);uJ(J.TEXTURE_CUBE_MAP,R);let a;if(wJ){if(P&&YJ)Z.texStorage2D(J.TEXTURE_CUBE_MAP,NJ,xJ,DJ.width,DJ.height);for(let s=0;s<6;s++){a=KJ[s].mipmaps;for(let FJ=0;FJ<a.length;FJ++){let vJ=a[FJ];if(R.format!==N8)if(LJ!==null)if(P){if(ZJ)Z.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,0,0,vJ.width,vJ.height,LJ,vJ.data)}else Z.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,xJ,vJ.width,vJ.height,0,vJ.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,0,0,vJ.width,vJ.height,LJ,UJ,vJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ,xJ,vJ.width,vJ.height,0,LJ,UJ,vJ.data)}}}else{if(a=R.mipmaps,P&&YJ){if(a.length>0)NJ++;let s=U0(KJ[0]);Z.texStorage2D(J.TEXTURE_CUBE_MAP,NJ,xJ,s.width,s.height)}for(let s=0;s<6;s++)if(e){if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,KJ[s].width,KJ[s].height,LJ,UJ,KJ[s].data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,xJ,KJ[s].width,KJ[s].height,0,LJ,UJ,KJ[s].data);for(let FJ=0;FJ<a.length;FJ++){let tJ=a[FJ].image[s].image;if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,0,0,tJ.width,tJ.height,LJ,UJ,tJ.data)}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,xJ,tJ.width,tJ.height,0,LJ,UJ,tJ.data)}}else{if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,0,0,LJ,UJ,KJ[s])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,xJ,LJ,UJ,KJ[s]);for(let FJ=0;FJ<a.length;FJ++){let vJ=a[FJ];if(P){if(ZJ)Z.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,0,0,LJ,UJ,vJ.image[s])}else Z.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+s,FJ+1,xJ,LJ,UJ,vJ.image[s])}}}if(N(R))O(J.TEXTURE_CUBE_MAP);if(p.__version=o.version,R.onUpdate)R.onUpdate(R)}B.__version=R.version}function MJ(B,R,h,u,o,p){let qJ=H.convert(h.format,h.colorSpace),JJ=H.convert(h.type),kJ=L(h.internalFormat,qJ,JJ,h.colorSpace),wJ=$.get(R),e=$.get(h);if(e.__renderTarget=R,!wJ.__hasExternalTextures){let KJ=Math.max(1,R.width>>p),DJ=Math.max(1,R.height>>p);if(o===J.TEXTURE_3D||o===J.TEXTURE_2D_ARRAY)Z.texImage3D(o,p,kJ,KJ,DJ,R.depth,0,qJ,JJ,null);else Z.texImage2D(o,p,kJ,KJ,DJ,0,qJ,JJ,null)}if(Z.bindFramebuffer(J.FRAMEBUFFER,B),_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,u,o,e.__webglTexture,0,VJ(R));else if(o===J.TEXTURE_2D||o>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,u,o,e.__webglTexture,p);Z.bindFramebuffer(J.FRAMEBUFFER,null)}function SJ(B,R,h){if(J.bindRenderbuffer(J.RENDERBUFFER,B),R.depthBuffer){let u=R.depthTexture,o=u&&u.isDepthTexture?u.type:null,p=C(R.stencilBuffer,o),qJ=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,JJ=VJ(R);if(_J(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,JJ,p,R.width,R.height);else if(h)J.renderbufferStorageMultisample(J.RENDERBUFFER,JJ,p,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,p,R.width,R.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,qJ,J.RENDERBUFFER,B)}else{let u=R.textures;for(let o=0;o<u.length;o++){let p=u[o],qJ=H.convert(p.format,p.colorSpace),JJ=H.convert(p.type),kJ=L(p.internalFormat,qJ,JJ,p.colorSpace),wJ=VJ(R);if(h&&_J(R)===!1)J.renderbufferStorageMultisample(J.RENDERBUFFER,wJ,kJ,R.width,R.height);else if(_J(R))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,wJ,kJ,R.width,R.height);else J.renderbufferStorage(J.RENDERBUFFER,kJ,R.width,R.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function jJ(B,R){if(R&&R.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(Z.bindFramebuffer(J.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let u=$.get(R.depthTexture);if(u.__renderTarget=R,!u.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0;i(R.depthTexture,0);let o=u.__webglTexture,p=VJ(R);if(R.depthTexture.format===_7)if(_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_ATTACHMENT,J.TEXTURE_2D,o,0);else if(R.depthTexture.format===L6)if(_J(R))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0,p);else J.framebufferTexture2D(J.FRAMEBUFFER,J.DEPTH_STENCIL_ATTACHMENT,J.TEXTURE_2D,o,0);else throw Error("Unknown depthTexture format")}function R0(B){let R=$.get(B),h=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){let u=B.depthTexture;if(R.__depthDisposeCallback)R.__depthDisposeCallback();if(u){let o=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,u.removeEventListener("dispose",o)};u.addEventListener("dispose",o),R.__depthDisposeCallback=o}R.__boundDepthTexture=u}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(h)throw Error("target.depthTexture not supported in Cube render targets");let u=B.texture.mipmaps;if(u&&u.length>0)jJ(R.__webglFramebuffer[0],B);else jJ(R.__webglFramebuffer,B)}else if(h){R.__webglDepthbuffer=[];for(let u=0;u<6;u++)if(Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[u]),R.__webglDepthbuffer[u]===void 0)R.__webglDepthbuffer[u]=J.createRenderbuffer(),SJ(R.__webglDepthbuffer[u],B,!1);else{let o=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=R.__webglDepthbuffer[u];J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,p)}}else{let u=B.texture.mipmaps;if(u&&u.length>0)Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer[0]);else Z.bindFramebuffer(J.FRAMEBUFFER,R.__webglFramebuffer);if(R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=J.createRenderbuffer(),SJ(R.__webglDepthbuffer,B,!1);else{let o=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,p=R.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,p),J.framebufferRenderbuffer(J.FRAMEBUFFER,o,J.RENDERBUFFER,p)}}Z.bindFramebuffer(J.FRAMEBUFFER,null)}function I(B,R,h){let u=$.get(B);if(R!==void 0)MJ(u.__webglFramebuffer,B,B.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(h!==void 0)R0(B)}function $0(B){let R=B.texture,h=$.get(B),u=$.get(R);B.addEventListener("dispose",A);let o=B.textures,p=B.isWebGLCubeRenderTarget===!0,qJ=o.length>1;if(!qJ){if(u.__webglTexture===void 0)u.__webglTexture=J.createTexture();u.__version=R.version,Y.memory.textures++}if(p){h.__webglFramebuffer=[];for(let JJ=0;JJ<6;JJ++)if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer[JJ]=[];for(let kJ=0;kJ<R.mipmaps.length;kJ++)h.__webglFramebuffer[JJ][kJ]=J.createFramebuffer()}else h.__webglFramebuffer[JJ]=J.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){h.__webglFramebuffer=[];for(let JJ=0;JJ<R.mipmaps.length;JJ++)h.__webglFramebuffer[JJ]=J.createFramebuffer()}else h.__webglFramebuffer=J.createFramebuffer();if(qJ)for(let JJ=0,kJ=o.length;JJ<kJ;JJ++){let wJ=$.get(o[JJ]);if(wJ.__webglTexture===void 0)wJ.__webglTexture=J.createTexture(),Y.memory.textures++}if(B.samples>0&&_J(B)===!1){h.__webglMultisampledFramebuffer=J.createFramebuffer(),h.__webglColorRenderbuffer=[],Z.bindFramebuffer(J.FRAMEBUFFER,h.__webglMultisampledFramebuffer);for(let JJ=0;JJ<o.length;JJ++){let kJ=o[JJ];h.__webglColorRenderbuffer[JJ]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,h.__webglColorRenderbuffer[JJ]);let wJ=H.convert(kJ.format,kJ.colorSpace),e=H.convert(kJ.type),KJ=L(kJ.internalFormat,wJ,e,kJ.colorSpace,B.isXRRenderTarget===!0),DJ=VJ(B);J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ,KJ,B.width,B.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+JJ,J.RENDERBUFFER,h.__webglColorRenderbuffer[JJ])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),B.depthBuffer)h.__webglDepthRenderbuffer=J.createRenderbuffer(),SJ(h.__webglDepthRenderbuffer,B,!0);Z.bindFramebuffer(J.FRAMEBUFFER,null)}}if(p){Z.bindTexture(J.TEXTURE_CUBE_MAP,u.__webglTexture),uJ(J.TEXTURE_CUBE_MAP,R);for(let JJ=0;JJ<6;JJ++)if(R.mipmaps&&R.mipmaps.length>0)for(let kJ=0;kJ<R.mipmaps.length;kJ++)MJ(h.__webglFramebuffer[JJ][kJ],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+JJ,kJ);else MJ(h.__webglFramebuffer[JJ],B,R,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+JJ,0);if(N(R))O(J.TEXTURE_CUBE_MAP);Z.unbindTexture()}else if(qJ){for(let JJ=0,kJ=o.length;JJ<kJ;JJ++){let wJ=o[JJ],e=$.get(wJ),KJ=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)KJ=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(KJ,e.__webglTexture),uJ(KJ,wJ),MJ(h.__webglFramebuffer,B,wJ,J.COLOR_ATTACHMENT0+JJ,KJ,0),N(wJ))O(KJ)}Z.unbindTexture()}else{let JJ=J.TEXTURE_2D;if(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)JJ=B.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Z.bindTexture(JJ,u.__webglTexture),uJ(JJ,R),R.mipmaps&&R.mipmaps.length>0)for(let kJ=0;kJ<R.mipmaps.length;kJ++)MJ(h.__webglFramebuffer[kJ],B,R,J.COLOR_ATTACHMENT0,JJ,kJ);else MJ(h.__webglFramebuffer,B,R,J.COLOR_ATTACHMENT0,JJ,0);if(N(R))O(JJ);Z.unbindTexture()}if(B.depthBuffer)R0(B)}function hJ(B){let R=B.textures;for(let h=0,u=R.length;h<u;h++){let o=R[h];if(N(o)){let p=_(B),qJ=$.get(o).__webglTexture;Z.bindTexture(p,qJ),O(p),Z.unbindTexture()}}}let TJ=[],RJ=[];function W0(B){if(B.samples>0){if(_J(B)===!1){let{textures:R,width:h,height:u}=B,o=J.COLOR_BUFFER_BIT,p=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,qJ=$.get(B),JJ=R.length>1;if(JJ)for(let wJ=0;wJ<R.length;wJ++)Z.bindFramebuffer(J.FRAMEBUFFER,qJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+wJ,J.RENDERBUFFER,null),Z.bindFramebuffer(J.FRAMEBUFFER,qJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+wJ,J.TEXTURE_2D,null,0);Z.bindFramebuffer(J.READ_FRAMEBUFFER,qJ.__webglMultisampledFramebuffer);let kJ=B.texture.mipmaps;if(kJ&&kJ.length>0)Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,qJ.__webglFramebuffer[0]);else Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,qJ.__webglFramebuffer);for(let wJ=0;wJ<R.length;wJ++){if(B.resolveDepthBuffer){if(B.depthBuffer)o|=J.DEPTH_BUFFER_BIT;if(B.stencilBuffer&&B.resolveStencilBuffer)o|=J.STENCIL_BUFFER_BIT}if(JJ){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,qJ.__webglColorRenderbuffer[wJ]);let e=$.get(R[wJ]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,h,u,0,0,h,u,o,J.NEAREST),K===!0){if(TJ.length=0,RJ.length=0,TJ.push(J.COLOR_ATTACHMENT0+wJ),B.depthBuffer&&B.resolveDepthBuffer===!1)TJ.push(p),RJ.push(p),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,RJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,TJ)}}if(Z.bindFramebuffer(J.READ_FRAMEBUFFER,null),Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),JJ)for(let wJ=0;wJ<R.length;wJ++){Z.bindFramebuffer(J.FRAMEBUFFER,qJ.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+wJ,J.RENDERBUFFER,qJ.__webglColorRenderbuffer[wJ]);let e=$.get(R[wJ]).__webglTexture;Z.bindFramebuffer(J.FRAMEBUFFER,qJ.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+wJ,J.TEXTURE_2D,e,0)}Z.bindFramebuffer(J.DRAW_FRAMEBUFFER,qJ.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&K){let R=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[R])}}}function VJ(B){return Math.min(W.maxSamples,B.samples)}function _J(B){let R=$.get(B);return B.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function L0(B){let R=Y.render.frame;if(G.get(B)!==R)G.set(B,R),B.update()}function k0(B,R){let{colorSpace:h,format:u,type:o}=B;if(B.isCompressedTexture===!0||B.isVideoTexture===!0)return R;if(h!==T0&&h!==O8)if(mJ.getTransfer(h)===J0){if(u!==N8||o!==c8)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",h);return R}function U0(B){if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement)U.width=B.naturalWidth||B.width,U.height=B.naturalHeight||B.height;else if(typeof VideoFrame<"u"&&B instanceof VideoFrame)U.width=B.displayWidth,U.height=B.displayHeight;else U.width=B.width,U.height=B.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=d,this.setTexture2D=i,this.setTexture2DArray=m,this.setTexture3D=r,this.setTextureCube=g,this.rebindTextures=I,this.setupRenderTarget=$0,this.updateRenderTargetMipmap=hJ,this.updateMultisampleRenderTarget=W0,this.setupDepthRenderbuffer=R0,this.setupFrameBufferTexture=MJ,this.useMultisampledRTT=_J}function U1(J,Q){function Z($,W=O8){let H,Y=mJ.getTransfer(W);if($===c8)return J.UNSIGNED_BYTE;if($===dQ)return J.UNSIGNED_SHORT_4_4_4_4;if($===mQ)return J.UNSIGNED_SHORT_5_5_5_1;if($===pW)return J.UNSIGNED_INT_5_9_9_9_REV;if($===lW)return J.UNSIGNED_INT_10F_11F_11F_REV;if($===xW)return J.BYTE;if($===gW)return J.SHORT;if($===M6)return J.UNSIGNED_SHORT;if($===lQ)return J.INT;if($===l9)return J.UNSIGNED_INT;if($===n8)return J.FLOAT;if($===D6)return J.HALF_FLOAT;if($===dW)return J.ALPHA;if($===mW)return J.RGB;if($===N8)return J.RGBA;if($===_7)return J.DEPTH_COMPONENT;if($===L6)return J.DEPTH_STENCIL;if($===uW)return J.RED;if($===uQ)return J.RED_INTEGER;if($===cW)return J.RG;if($===cQ)return J.RG_INTEGER;if($===nQ)return J.RGBA_INTEGER;if($===C7||$===w7||$===I7||$===P7)if(Y===J0)if(H=Q.get("WEBGL_compressed_texture_s3tc_srgb"),H!==null){if($===C7)return H.COMPRESSED_SRGB_S3TC_DXT1_EXT;if($===w7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if($===I7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if($===P7)return H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(H=Q.get("WEBGL_compressed_texture_s3tc"),H!==null){if($===C7)return H.COMPRESSED_RGB_S3TC_DXT1_EXT;if($===w7)return H.COMPRESSED_RGBA_S3TC_DXT1_EXT;if($===I7)return H.COMPRESSED_RGBA_S3TC_DXT3_EXT;if($===P7)return H.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if($===sQ||$===oQ||$===iQ||$===aQ)if(H=Q.get("WEBGL_compressed_texture_pvrtc"),H!==null){if($===sQ)return H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if($===oQ)return H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if($===iQ)return H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if($===aQ)return H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if($===rQ||$===tQ||$===eQ)if(H=Q.get("WEBGL_compressed_texture_etc"),H!==null){if($===rQ||$===tQ)return Y===J0?H.COMPRESSED_SRGB8_ETC2:H.COMPRESSED_RGB8_ETC2;if($===eQ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:H.COMPRESSED_RGBA8_ETC2_EAC}else return null;if($===JZ||$===QZ||$===ZZ||$===$Z||$===WZ||$===HZ||$===YZ||$===XZ||$===KZ||$===UZ||$===GZ||$===EZ||$===qZ||$===NZ)if(H=Q.get("WEBGL_compressed_texture_astc"),H!==null){if($===JZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:H.COMPRESSED_RGBA_ASTC_4x4_KHR;if($===QZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:H.COMPRESSED_RGBA_ASTC_5x4_KHR;if($===ZZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:H.COMPRESSED_RGBA_ASTC_5x5_KHR;if($===$Z)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:H.COMPRESSED_RGBA_ASTC_6x5_KHR;if($===WZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:H.COMPRESSED_RGBA_ASTC_6x6_KHR;if($===HZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:H.COMPRESSED_RGBA_ASTC_8x5_KHR;if($===YZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:H.COMPRESSED_RGBA_ASTC_8x6_KHR;if($===XZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:H.COMPRESSED_RGBA_ASTC_8x8_KHR;if($===KZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:H.COMPRESSED_RGBA_ASTC_10x5_KHR;if($===UZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:H.COMPRESSED_RGBA_ASTC_10x6_KHR;if($===GZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:H.COMPRESSED_RGBA_ASTC_10x8_KHR;if($===EZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:H.COMPRESSED_RGBA_ASTC_10x10_KHR;if($===qZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:H.COMPRESSED_RGBA_ASTC_12x10_KHR;if($===NZ)return Y===J0?H.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:H.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if($===OZ||$===FZ||$===RZ)if(H=Q.get("EXT_texture_compression_bptc"),H!==null){if($===OZ)return Y===J0?H.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:H.COMPRESSED_RGBA_BPTC_UNORM_EXT;if($===FZ)return H.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if($===RZ)return H.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if($===kZ||$===MZ||$===DZ||$===LZ)if(H=Q.get("EXT_texture_compression_rgtc"),H!==null){if($===kZ)return H.COMPRESSED_RED_RGTC1_EXT;if($===MZ)return H.COMPRESSED_SIGNED_RED_RGTC1_EXT;if($===DZ)return H.COMPRESSED_RED_GREEN_RGTC2_EXT;if($===LZ)return H.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if($===d9)return J.UNSIGNED_INT_24_8;return J[$]!==void 0?J[$]:null}return{convert:Z}}var G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nH{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let Z=new u7(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Z}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,Z=new r0({vertexShader:G1,fragmentShader:E1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new D0(new N9(20,20),Z)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sH extends s8{constructor(J,Q){super();let Z=this,$=null,W=1,H=null,Y="local-floor",X=1,K=null,U=null,G=null,E=null,q=null,F=null,M=typeof XRWebGLBinding<"u",k=new nH,N={},O=Q.getContextAttributes(),_=null,L=null,C=[],j=[],w=new pJ,A=null,x=new V0;x.viewport=new sJ;let z=new V0;z.viewport=new sJ;let V=[x,z],T=new mZ,d=null,c=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let WJ=C[n];if(WJ===void 0)WJ=new B6,C[n]=WJ;return WJ.getTargetRaySpace()},this.getControllerGrip=function(n){let WJ=C[n];if(WJ===void 0)WJ=new B6,C[n]=WJ;return WJ.getGripSpace()},this.getHand=function(n){let WJ=C[n];if(WJ===void 0)WJ=new B6,C[n]=WJ;return WJ.getHandSpace()};function l(n){let WJ=j.indexOf(n.inputSource);if(WJ===-1)return;let QJ=C[WJ];if(QJ!==void 0)QJ.update(n.inputSource,n.frame,K||H),QJ.dispatchEvent({type:n.type,data:n.inputSource})}function i(){$.removeEventListener("select",l),$.removeEventListener("selectstart",l),$.removeEventListener("selectend",l),$.removeEventListener("squeeze",l),$.removeEventListener("squeezestart",l),$.removeEventListener("squeezeend",l),$.removeEventListener("end",i),$.removeEventListener("inputsourceschange",m);for(let n=0;n<C.length;n++){let WJ=j[n];if(WJ===null)continue;j[n]=null,C[n].disconnect(WJ)}d=null,c=null,k.reset();for(let n in N)delete N[n];J.setRenderTarget(_),q=null,E=null,G=null,$=null,L=null,cJ.stop(),Z.isPresenting=!1,J.setPixelRatio(A),J.setSize(w.width,w.height,!1),Z.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(W=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(Y=n,Z.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return K||H},this.setReferenceSpace=function(n){K=n},this.getBaseLayer=function(){return E!==null?E:q},this.getBinding=function(){if(G===null&&M)G=new XRWebGLBinding($,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return $},this.setSession=async function(n){if($=n,$!==null){if(_=J.getRenderTarget(),$.addEventListener("select",l),$.addEventListener("selectstart",l),$.addEventListener("selectend",l),$.addEventListener("squeeze",l),$.addEventListener("squeezestart",l),$.addEventListener("squeezeend",l),$.addEventListener("end",i),$.addEventListener("inputsourceschange",m),O.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(w),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let QJ={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:W};q=new XRWebGLLayer($,Q,QJ),$.updateRenderState({baseLayer:q}),J.setPixelRatio(1),J.setSize(q.framebufferWidth,q.framebufferHeight,!1),L=new v8(q.framebufferWidth,q.framebufferHeight,{format:N8,type:c8,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1})}else{let QJ=null,MJ=null,SJ=null;if(O.depth)SJ=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,QJ=O.stencil?L6:_7,MJ=O.stencil?d9:l9;let jJ={colorFormat:Q.RGBA8,depthFormat:SJ,scaleFactor:W};G=this.getBinding(),E=G.createProjectionLayer(jJ),$.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),L=new v8(E.textureWidth,E.textureHeight,{format:N8,type:c8,depthTexture:new m7(E.textureWidth,E.textureHeight,MJ,void 0,void 0,void 0,void 0,void 0,void 0,QJ),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(X),K=null,H=await $.requestReferenceSpace(Y),cJ.setContext($),cJ.start(),Z.isPresenting=!0,Z.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if($!==null)return $.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function m(n){for(let WJ=0;WJ<n.removed.length;WJ++){let QJ=n.removed[WJ],MJ=j.indexOf(QJ);if(MJ>=0)j[MJ]=null,C[MJ].disconnect(QJ)}for(let WJ=0;WJ<n.added.length;WJ++){let QJ=n.added[WJ],MJ=j.indexOf(QJ);if(MJ===-1){for(let jJ=0;jJ<C.length;jJ++)if(jJ>=j.length){j.push(QJ),MJ=jJ;break}else if(j[jJ]===null){j[jJ]=QJ,MJ=jJ;break}if(MJ===-1)break}let SJ=C[MJ];if(SJ)SJ.connect(QJ)}}let r=new S,g=new S;function HJ(n,WJ,QJ){r.setFromMatrixPosition(WJ.matrixWorld),g.setFromMatrixPosition(QJ.matrixWorld);let MJ=r.distanceTo(g),SJ=WJ.projectionMatrix.elements,jJ=QJ.projectionMatrix.elements,R0=SJ[14]/(SJ[10]-1),I=SJ[14]/(SJ[10]+1),$0=(SJ[9]+1)/SJ[5],hJ=(SJ[9]-1)/SJ[5],TJ=(SJ[8]-1)/SJ[0],RJ=(jJ[8]+1)/jJ[0],W0=R0*TJ,VJ=R0*RJ,_J=MJ/(-TJ+RJ),L0=_J*-TJ;if(WJ.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(L0),n.translateZ(_J),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),SJ[10]===-1)n.projectionMatrix.copy(WJ.projectionMatrix),n.projectionMatrixInverse.copy(WJ.projectionMatrixInverse);else{let k0=R0+_J,U0=I+_J,B=W0-L0,R=VJ+(MJ-L0),h=$0*I/U0*k0,u=hJ*I/U0*k0;n.projectionMatrix.makePerspective(B,R,h,u,k0,U0),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function GJ(n,WJ){if(WJ===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(WJ.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if($===null)return;let{near:WJ,far:QJ}=n;if(k.texture!==null){if(k.depthNear>0)WJ=k.depthNear;if(k.depthFar>0)QJ=k.depthFar}if(T.near=z.near=x.near=WJ,T.far=z.far=x.far=QJ,d!==T.near||c!==T.far)$.updateRenderState({depthNear:T.near,depthFar:T.far}),d=T.near,c=T.far;T.layers.mask=n.layers.mask|6,x.layers.mask=T.layers.mask&3,z.layers.mask=T.layers.mask&5;let MJ=n.parent,SJ=T.cameras;GJ(T,MJ);for(let jJ=0;jJ<SJ.length;jJ++)GJ(SJ[jJ],MJ);if(SJ.length===2)HJ(T,x,z);else T.projectionMatrix.copy(x.projectionMatrix);PJ(n,T,MJ)};function PJ(n,WJ,QJ){if(QJ===null)n.matrix.copy(WJ.matrixWorld);else n.matrix.copy(QJ.matrixWorld),n.matrix.invert(),n.matrix.multiply(WJ.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(WJ.projectionMatrix),n.projectionMatrixInverse.copy(WJ.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=K9*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return T},this.getFoveation=function(){if(E===null&&q===null)return;return X},this.setFoveation=function(n){if(X=n,E!==null)E.fixedFoveation=n;if(q!==null&&q.fixedFoveation!==void 0)q.fixedFoveation=n},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(T)},this.getCameraTexture=function(n){return N[n]};let uJ=null;function K0(n,WJ){if(U=WJ.getViewerPose(K||H),F=WJ,U!==null){let QJ=U.views;if(q!==null)J.setRenderTargetFramebuffer(L,q.framebuffer),J.setRenderTarget(L);let MJ=!1;if(QJ.length!==T.cameras.length)T.cameras.length=0,MJ=!0;for(let I=0;I<QJ.length;I++){let $0=QJ[I],hJ=null;if(q!==null)hJ=q.getViewport($0);else{let RJ=G.getViewSubImage(E,$0);if(hJ=RJ.viewport,I===0)J.setRenderTargetTextures(L,RJ.colorTexture,RJ.depthStencilTexture),J.setRenderTarget(L)}let TJ=V[I];if(TJ===void 0)TJ=new V0,TJ.layers.enable(I),TJ.viewport=new sJ,V[I]=TJ;if(TJ.matrix.fromArray($0.transform.matrix),TJ.matrix.decompose(TJ.position,TJ.quaternion,TJ.scale),TJ.projectionMatrix.fromArray($0.projectionMatrix),TJ.projectionMatrixInverse.copy(TJ.projectionMatrix).invert(),TJ.viewport.set(hJ.x,hJ.y,hJ.width,hJ.height),I===0)T.matrix.copy(TJ.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale);if(MJ===!0)T.cameras.push(TJ)}let SJ=$.enabledFeatures;if(SJ&&SJ.includes("depth-sensing")&&$.depthUsage=="gpu-optimized"&&M){G=Z.getBinding();let I=G.getDepthInformation(QJ[0]);if(I&&I.isValid&&I.texture)k.init(I,$.renderState)}if(SJ&&SJ.includes("camera-access")&&M){J.state.unbindTexture(),G=Z.getBinding();for(let I=0;I<QJ.length;I++){let $0=QJ[I].camera;if($0){let hJ=N[$0];if(!hJ)hJ=new u7,N[$0]=hJ;let TJ=G.getCameraImage($0);hJ.sourceTexture=TJ}}}}for(let QJ=0;QJ<C.length;QJ++){let MJ=j[QJ],SJ=C[QJ];if(MJ!==null&&SJ!==void 0)SJ.update(MJ,WJ,K||H)}if(uJ)uJ(n,WJ);if(WJ.detectedPlanes)Z.dispatchEvent({type:"planesdetected",data:WJ});F=null}let cJ=new fH;cJ.setAnimationLoop(K0),this.setAnimationLoop=function(n){uJ=n},this.dispose=function(){}}}var F9=new W8,q1=new yJ;function N1(J,Q){function Z(N,O){if(N.matrixAutoUpdate===!0)N.updateMatrix();O.value.copy(N.matrix)}function $(N,O){if(O.color.getRGB(N.fogColor.value,jZ(J)),O.isFog)N.fogNear.value=O.near,N.fogFar.value=O.far;else if(O.isFogExp2)N.fogDensity.value=O.density}function W(N,O,_,L,C){if(O.isMeshBasicMaterial)H(N,O);else if(O.isMeshLambertMaterial)H(N,O);else if(O.isMeshToonMaterial)H(N,O),E(N,O);else if(O.isMeshPhongMaterial)H(N,O),G(N,O);else if(O.isMeshStandardMaterial){if(H(N,O),q(N,O),O.isMeshPhysicalMaterial)F(N,O,C)}else if(O.isMeshMatcapMaterial)H(N,O),M(N,O);else if(O.isMeshDepthMaterial)H(N,O);else if(O.isMeshDistanceMaterial)H(N,O),k(N,O);else if(O.isMeshNormalMaterial)H(N,O);else if(O.isLineBasicMaterial){if(Y(N,O),O.isLineDashedMaterial)X(N,O)}else if(O.isPointsMaterial)K(N,O,_,L);else if(O.isSpriteMaterial)U(N,O);else if(O.isShadowMaterial)N.color.value.copy(O.color),N.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function H(N,O){if(N.opacity.value=O.opacity,O.color)N.diffuse.value.copy(O.color);if(O.emissive)N.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)N.map.value=O.map,Z(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,Z(O.alphaMap,N.alphaMapTransform);if(O.bumpMap){if(N.bumpMap.value=O.bumpMap,Z(O.bumpMap,N.bumpMapTransform),N.bumpScale.value=O.bumpScale,O.side===h0)N.bumpScale.value*=-1}if(O.normalMap){if(N.normalMap.value=O.normalMap,Z(O.normalMap,N.normalMapTransform),N.normalScale.value.copy(O.normalScale),O.side===h0)N.normalScale.value.negate()}if(O.displacementMap)N.displacementMap.value=O.displacementMap,Z(O.displacementMap,N.displacementMapTransform),N.displacementScale.value=O.displacementScale,N.displacementBias.value=O.displacementBias;if(O.emissiveMap)N.emissiveMap.value=O.emissiveMap,Z(O.emissiveMap,N.emissiveMapTransform);if(O.specularMap)N.specularMap.value=O.specularMap,Z(O.specularMap,N.specularMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest;let _=Q.get(O),L=_.envMap,C=_.envMapRotation;if(L){if(N.envMap.value=L,F9.copy(C),F9.x*=-1,F9.y*=-1,F9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)F9.y*=-1,F9.z*=-1;N.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(F9)),N.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,N.reflectivity.value=O.reflectivity,N.ior.value=O.ior,N.refractionRatio.value=O.refractionRatio}if(O.lightMap)N.lightMap.value=O.lightMap,N.lightMapIntensity.value=O.lightMapIntensity,Z(O.lightMap,N.lightMapTransform);if(O.aoMap)N.aoMap.value=O.aoMap,N.aoMapIntensity.value=O.aoMapIntensity,Z(O.aoMap,N.aoMapTransform)}function Y(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,O.map)N.map.value=O.map,Z(O.map,N.mapTransform)}function X(N,O){N.dashSize.value=O.dashSize,N.totalSize.value=O.dashSize+O.gapSize,N.scale.value=O.scale}function K(N,O,_,L){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.size.value=O.size*_,N.scale.value=L*0.5,O.map)N.map.value=O.map,Z(O.map,N.uvTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,Z(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function U(N,O){if(N.diffuse.value.copy(O.color),N.opacity.value=O.opacity,N.rotation.value=O.rotation,O.map)N.map.value=O.map,Z(O.map,N.mapTransform);if(O.alphaMap)N.alphaMap.value=O.alphaMap,Z(O.alphaMap,N.alphaMapTransform);if(O.alphaTest>0)N.alphaTest.value=O.alphaTest}function G(N,O){N.specular.value.copy(O.specular),N.shininess.value=Math.max(O.shininess,0.0001)}function E(N,O){if(O.gradientMap)N.gradientMap.value=O.gradientMap}function q(N,O){if(N.metalness.value=O.metalness,O.metalnessMap)N.metalnessMap.value=O.metalnessMap,Z(O.metalnessMap,N.metalnessMapTransform);if(N.roughness.value=O.roughness,O.roughnessMap)N.roughnessMap.value=O.roughnessMap,Z(O.roughnessMap,N.roughnessMapTransform);if(O.envMap)N.envMapIntensity.value=O.envMapIntensity}function F(N,O,_){if(N.ior.value=O.ior,O.sheen>0){if(N.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),N.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)N.sheenColorMap.value=O.sheenColorMap,Z(O.sheenColorMap,N.sheenColorMapTransform);if(O.sheenRoughnessMap)N.sheenRoughnessMap.value=O.sheenRoughnessMap,Z(O.sheenRoughnessMap,N.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(N.clearcoat.value=O.clearcoat,N.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)N.clearcoatMap.value=O.clearcoatMap,Z(O.clearcoatMap,N.clearcoatMapTransform);if(O.clearcoatRoughnessMap)N.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,Z(O.clearcoatRoughnessMap,N.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(N.clearcoatNormalMap.value=O.clearcoatNormalMap,Z(O.clearcoatNormalMap,N.clearcoatNormalMapTransform),N.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===h0)N.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)N.dispersion.value=O.dispersion;if(O.iridescence>0){if(N.iridescence.value=O.iridescence,N.iridescenceIOR.value=O.iridescenceIOR,N.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],N.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)N.iridescenceMap.value=O.iridescenceMap,Z(O.iridescenceMap,N.iridescenceMapTransform);if(O.iridescenceThicknessMap)N.iridescenceThicknessMap.value=O.iridescenceThicknessMap,Z(O.iridescenceThicknessMap,N.iridescenceThicknessMapTransform)}if(O.transmission>0){if(N.transmission.value=O.transmission,N.transmissionSamplerMap.value=_.texture,N.transmissionSamplerSize.value.set(_.width,_.height),O.transmissionMap)N.transmissionMap.value=O.transmissionMap,Z(O.transmissionMap,N.transmissionMapTransform);if(N.thickness.value=O.thickness,O.thicknessMap)N.thicknessMap.value=O.thicknessMap,Z(O.thicknessMap,N.thicknessMapTransform);N.attenuationDistance.value=O.attenuationDistance,N.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(N.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)N.anisotropyMap.value=O.anisotropyMap,Z(O.anisotropyMap,N.anisotropyMapTransform)}if(N.specularIntensity.value=O.specularIntensity,N.specularColor.value.copy(O.specularColor),O.specularColorMap)N.specularColorMap.value=O.specularColorMap,Z(O.specularColorMap,N.specularColorMapTransform);if(O.specularIntensityMap)N.specularIntensityMap.value=O.specularIntensityMap,Z(O.specularIntensityMap,N.specularIntensityMapTransform)}function M(N,O){if(O.matcap)N.matcap.value=O.matcap}function k(N,O){let _=Q.get(O).light;N.referencePosition.value.setFromMatrixPosition(_.matrixWorld),N.nearDistance.value=_.shadow.camera.near,N.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:$,refreshMaterialUniforms:W}}function O1(J,Q,Z,$){let W={},H={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function K(_,L){let C=L.program;$.uniformBlockBinding(_,C)}function U(_,L){let C=W[_.id];if(C===void 0)M(_),C=G(_),W[_.id]=C,_.addEventListener("dispose",N);let j=L.program;$.updateUBOMapping(_,j);let w=Q.render.frame;if(H[_.id]!==w)q(_),H[_.id]=w}function G(_){let L=E();_.__bindingPointIndex=L;let C=J.createBuffer(),j=_.__size,w=_.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,j,w),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,C),C}function E(){for(let _=0;_<X;_++)if(Y.indexOf(_)===-1)return Y.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function q(_){let L=W[_.id],C=_.uniforms,j=_.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let w=0,A=C.length;w<A;w++){let x=Array.isArray(C[w])?C[w]:[C[w]];for(let z=0,V=x.length;z<V;z++){let T=x[z];if(F(T,w,z,j)===!0){let d=T.__offset,c=Array.isArray(T.value)?T.value:[T.value],l=0;for(let i=0;i<c.length;i++){let m=c[i],r=k(m);if(typeof m==="number"||typeof m==="boolean")T.__data[0]=m,J.bufferSubData(J.UNIFORM_BUFFER,d+l,T.__data);else if(m.isMatrix3)T.__data[0]=m.elements[0],T.__data[1]=m.elements[1],T.__data[2]=m.elements[2],T.__data[3]=0,T.__data[4]=m.elements[3],T.__data[5]=m.elements[4],T.__data[6]=m.elements[5],T.__data[7]=0,T.__data[8]=m.elements[6],T.__data[9]=m.elements[7],T.__data[10]=m.elements[8],T.__data[11]=0;else m.toArray(T.__data,l),l+=r.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,d,T.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(_,L,C,j){let w=_.value,A=L+"_"+C;if(j[A]===void 0){if(typeof w==="number"||typeof w==="boolean")j[A]=w;else j[A]=w.clone();return!0}else{let x=j[A];if(typeof w==="number"||typeof w==="boolean"){if(x!==w)return j[A]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function M(_){let L=_.uniforms,C=0,j=16;for(let A=0,x=L.length;A<x;A++){let z=Array.isArray(L[A])?L[A]:[L[A]];for(let V=0,T=z.length;V<T;V++){let d=z[V],c=Array.isArray(d.value)?d.value:[d.value];for(let l=0,i=c.length;l<i;l++){let m=c[l],r=k(m),g=C%j,HJ=g%r.boundary,GJ=g+HJ;if(C+=HJ,GJ!==0&&j-GJ<r.storage)C+=j-GJ;d.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),d.__offset=C,C+=r.storage}}}let w=C%j;if(w>0)C+=j-w;return _.__size=C,_.__cache={},this}function k(_){let L={boundary:0,storage:0};if(typeof _==="number"||typeof _==="boolean")L.boundary=4,L.storage=4;else if(_.isVector2)L.boundary=8,L.storage=8;else if(_.isVector3||_.isColor)L.boundary=16,L.storage=12;else if(_.isVector4)L.boundary=16,L.storage=16;else if(_.isMatrix3)L.boundary=48,L.storage=48;else if(_.isMatrix4)L.boundary=64,L.storage=64;else if(_.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_);return L}function N(_){let L=_.target;L.removeEventListener("dispose",N);let C=Y.indexOf(L.__bindingPointIndex);Y.splice(C,1),J.deleteBuffer(W[L.id]),delete W[L.id],delete H[L.id]}function O(){for(let _ in W)J.deleteBuffer(W[_]);Y=[],W={},H={}}return{bind:K,update:U,dispose:O}}class ZQ{constructor(J={}){let{canvas:Q=ZH(),context:Z=null,depth:$=!0,stencil:W=!1,alpha:H=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:K=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1}=J;this.isWebGLRenderer=!0;let q;if(Z!==null){if(typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=Z.getContextAttributes().alpha}else q=H;let F=new Uint32Array(4),M=new Int32Array(4),k=null,N=null,O=[],_=[];this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=H8,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,C=!1;this._outputColorSpace=F8;let j=0,w=0,A=null,x=-1,z=null,V=new sJ,T=new sJ,d=null,c=new AJ(0),l=0,i=Q.width,m=Q.height,r=1,g=null,HJ=null,GJ=new sJ(0,0,i,m),PJ=new sJ(0,0,i,m),uJ=!1,K0=new I6,cJ=!1,n=!1,WJ=new yJ,QJ=new S,MJ=new sJ,SJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},jJ=!1;function R0(){return A===null?r:1}let I=Z;function $0(D,v){return Q.getContext(D,v)}try{let D={alpha:!0,depth:$,stencil:W,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:K,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${WW}`);if(Q.addEventListener("webglcontextlost",YJ,!1),Q.addEventListener("webglcontextrestored",ZJ,!1),Q.addEventListener("webglcontextcreationerror",NJ,!1),I===null){if(I=$0("webgl2",D),I===null)if($0("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let hJ,TJ,RJ,W0,VJ,_J,L0,k0,U0,B,R,h,u,o,p,qJ,JJ,kJ,wJ,e,KJ,DJ,LJ,UJ;function xJ(){if(hJ=new jG(I),hJ.init(),DJ=new U1(I,hJ),TJ=new CG(I,hJ,J,DJ),RJ=new X1(I,hJ),TJ.reversedDepthBuffer&&E)RJ.buffers.depth.setReversed(!0);W0=new hG(I),VJ=new oE,_J=new K1(I,hJ,RJ,VJ,TJ,DJ,W0),L0=new IG(L),k0=new SG(L),U0=new lX(I),LJ=new BG(I,U0),B=new vG(I,U0,W0,LJ),R=new bG(I,B,U0,W0),wJ=new fG(I,TJ,_J),qJ=new wG(VJ),h=new sE(L,L0,k0,hJ,TJ,LJ,qJ),u=new N1(L,VJ),o=new aE,p=new Z1(hJ),kJ=new zG(L,L0,k0,RJ,R,q,X),JJ=new H1(L,R,TJ),UJ=new O1(I,W0,TJ,RJ),e=new _G(I,hJ,W0),KJ=new yG(I,hJ,W0),W0.programs=h.programs,L.capabilities=TJ,L.extensions=hJ,L.properties=VJ,L.renderLists=o,L.shadowMap=JJ,L.state=RJ,L.info=W0}xJ();let P=new sH(L,I);this.xr=P,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let D=hJ.get("WEBGL_lose_context");if(D)D.loseContext()},this.forceContextRestore=function(){let D=hJ.get("WEBGL_lose_context");if(D)D.restoreContext()},this.getPixelRatio=function(){return r},this.setPixelRatio=function(D){if(D===void 0)return;r=D,this.setSize(i,m,!1)},this.getSize=function(D){return D.set(i,m)},this.setSize=function(D,v,f=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(i=D,m=v,Q.width=Math.floor(D*r),Q.height=Math.floor(v*r),f===!0)Q.style.width=D+"px",Q.style.height=v+"px";this.setViewport(0,0,D,v)},this.getDrawingBufferSize=function(D){return D.set(i*r,m*r).floor()},this.setDrawingBufferSize=function(D,v,f){i=D,m=v,r=f,Q.width=Math.floor(D*f),Q.height=Math.floor(v*f),this.setViewport(0,0,D,v)},this.getCurrentViewport=function(D){return D.copy(V)},this.getViewport=function(D){return D.copy(GJ)},this.setViewport=function(D,v,f,b){if(D.isVector4)GJ.set(D.x,D.y,D.z,D.w);else GJ.set(D,v,f,b);RJ.viewport(V.copy(GJ).multiplyScalar(r).round())},this.getScissor=function(D){return D.copy(PJ)},this.setScissor=function(D,v,f,b){if(D.isVector4)PJ.set(D.x,D.y,D.z,D.w);else PJ.set(D,v,f,b);RJ.scissor(T.copy(PJ).multiplyScalar(r).round())},this.getScissorTest=function(){return uJ},this.setScissorTest=function(D){RJ.setScissorTest(uJ=D)},this.setOpaqueSort=function(D){g=D},this.setTransparentSort=function(D){HJ=D},this.getClearColor=function(D){return D.copy(kJ.getClearColor())},this.setClearColor=function(){kJ.setClearColor(...arguments)},this.getClearAlpha=function(){return kJ.getClearAlpha()},this.setClearAlpha=function(){kJ.setClearAlpha(...arguments)},this.clear=function(D=!0,v=!0,f=!0){let b=0;if(D){let y=!1;if(A!==null){let t=A.texture.format;y=t===nQ||t===cQ||t===uQ}if(y){let t=A.texture.type,XJ=t===c8||t===l9||t===M6||t===d9||t===dQ||t===mQ,OJ=kJ.getClearColor(),EJ=kJ.getClearAlpha(),CJ=OJ.r,IJ=OJ.g,zJ=OJ.b;if(XJ)F[0]=CJ,F[1]=IJ,F[2]=zJ,F[3]=EJ,I.clearBufferuiv(I.COLOR,0,F);else M[0]=CJ,M[1]=IJ,M[2]=zJ,M[3]=EJ,I.clearBufferiv(I.COLOR,0,M)}else b|=I.COLOR_BUFFER_BIT}if(v)b|=I.DEPTH_BUFFER_BIT;if(f)b|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(b)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",YJ,!1),Q.removeEventListener("webglcontextrestored",ZJ,!1),Q.removeEventListener("webglcontextcreationerror",NJ,!1),kJ.dispose(),o.dispose(),p.dispose(),VJ.dispose(),L0.dispose(),k0.dispose(),R.dispose(),LJ.dispose(),UJ.dispose(),h.dispose(),P.dispose(),P.removeEventListener("sessionstart",U8),P.removeEventListener("sessionend",G8),Z9.stop()};function YJ(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ZJ(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let D=W0.autoReset,v=JJ.enabled,f=JJ.autoUpdate,b=JJ.needsUpdate,y=JJ.type;xJ(),W0.autoReset=D,JJ.enabled=v,JJ.autoUpdate=f,JJ.needsUpdate=b,JJ.type=y}function NJ(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function a(D){let v=D.target;v.removeEventListener("dispose",a),s(v)}function s(D){FJ(D),VJ.remove(D)}function FJ(D){let v=VJ.get(D).programs;if(v!==void 0){if(v.forEach(function(f){h.releaseProgram(f)}),D.isShaderMaterial)h.releaseShaderCache(D)}}this.renderBufferDirect=function(D,v,f,b,y,t){if(v===null)v=SJ;let XJ=y.isMesh&&y.matrixWorld.determinant()<0,OJ=fY(D,v,f,b,y);RJ.setMaterial(b,XJ);let EJ=f.index,CJ=1;if(b.wireframe===!0){if(EJ=B.getWireframeAttribute(f),EJ===void 0)return;CJ=2}let IJ=f.drawRange,zJ=f.attributes.position,dJ=IJ.start*CJ,rJ=(IJ.start+IJ.count)*CJ;if(t!==null)dJ=Math.max(dJ,t.start*CJ),rJ=Math.min(rJ,(t.start+t.count)*CJ);if(EJ!==null)dJ=Math.max(dJ,0),rJ=Math.min(rJ,EJ.count);else if(zJ!==void 0&&zJ!==null)dJ=Math.max(dJ,0),rJ=Math.min(rJ,zJ.count);let X0=rJ-dJ;if(X0<0||X0===1/0)return;LJ.setup(y,b,OJ,f,EJ);let Q0,eJ=e;if(EJ!==null)Q0=U0.get(EJ),eJ=KJ,eJ.setIndex(Q0);if(y.isMesh)if(b.wireframe===!0)RJ.setLineWidth(b.wireframeLinewidth*R0()),eJ.setMode(I.LINES);else eJ.setMode(I.TRIANGLES);else if(y.isLine){let BJ=b.linewidth;if(BJ===void 0)BJ=1;if(RJ.setLineWidth(BJ*R0()),y.isLineSegments)eJ.setMode(I.LINES);else if(y.isLineLoop)eJ.setMode(I.LINE_LOOP);else eJ.setMode(I.LINE_STRIP)}else if(y.isPoints)eJ.setMode(I.POINTS);else if(y.isSprite)eJ.setMode(I.TRIANGLES);if(y.isBatchedMesh)if(y._multiDrawInstances!==null)f9("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),eJ.renderMultiDrawInstances(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount,y._multiDrawInstances);else if(!hJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:BJ,_multiDrawCounts:H0,_multiDrawCount:nJ}=y,S0=EJ?U0.get(EJ).bytesPerElement:1,D9=VJ.get(b).currentProgram.getUniforms();for(let j0=0;j0<nJ;j0++)D9.setValue(I,"_gl_DrawID",j0),eJ.render(BJ[j0]/S0,H0[j0])}else eJ.renderMultiDraw(y._multiDrawStarts,y._multiDrawCounts,y._multiDrawCount);else if(y.isInstancedMesh)eJ.renderInstances(dJ,X0,y.count);else if(f.isInstancedBufferGeometry){let BJ=f._maxInstanceCount!==void 0?f._maxInstanceCount:1/0,H0=Math.min(f.instanceCount,BJ);eJ.renderInstances(dJ,X0,H0)}else eJ.render(dJ,X0)};function vJ(D,v,f){if(D.transparent===!0&&D.side===i0&&D.forceSinglePass===!1)D.side=h0,D.needsUpdate=!0,g6(D,v,f),D.side=m8,D.needsUpdate=!0,g6(D,v,f),D.side=i0;else g6(D,v,f)}this.compile=function(D,v,f=null){if(f===null)f=D;if(N=p.get(f),N.init(v),_.push(N),f.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}}),D!==f)D.traverseVisible(function(y){if(y.isLight&&y.layers.test(v.layers)){if(N.pushLight(y),y.castShadow)N.pushShadow(y)}});N.setupLights();let b=new Set;return D.traverse(function(y){if(!(y.isMesh||y.isPoints||y.isLine||y.isSprite))return;let t=y.material;if(t)if(Array.isArray(t))for(let XJ=0;XJ<t.length;XJ++){let OJ=t[XJ];vJ(OJ,f,y),b.add(OJ)}else vJ(t,f,y),b.add(t)}),N=_.pop(),b},this.compileAsync=function(D,v,f=null){let b=this.compile(D,v,f);return new Promise((y)=>{function t(){if(b.forEach(function(XJ){if(VJ.get(XJ).currentProgram.isReady())b.delete(XJ)}),b.size===0){y(D);return}setTimeout(t,10)}if(hJ.get("KHR_parallel_shader_compile")!==null)t();else setTimeout(t,10)})};let tJ=null;function aJ(D){if(tJ)tJ(D)}function U8(){Z9.stop()}function G8(){Z9.start()}let Z9=new fH;if(Z9.setAnimationLoop(aJ),typeof self<"u")Z9.setContext(self);this.setAnimationLoop=function(D){tJ=D,P.setAnimationLoop(D),D===null?Z9.stop():Z9.start()},P.addEventListener("sessionstart",U8),P.addEventListener("sessionend",G8),this.render=function(D,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0)D.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(P.enabled===!0&&P.isPresenting===!0){if(P.cameraAutoUpdate===!0)P.updateCamera(v);v=P.getCamera()}if(D.isScene===!0)D.onBeforeRender(L,D,v,A);if(N=p.get(D,_.length),N.init(v),_.push(N),WJ.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),K0.setFromProjectionMatrix(WJ,wZ,v.reversedDepth),n=this.localClippingEnabled,cJ=qJ.init(this.clippingPlanes,n),k=o.get(D,O.length),k.init(),O.push(k),P.enabled===!0&&P.isPresenting===!0){let t=L.xr.getDepthSensingMesh();if(t!==null)YQ(t,v,-1/0,L.sortObjects)}if(YQ(D,v,0,L.sortObjects),k.finish(),L.sortObjects===!0)k.sort(g,HJ);if(jJ=P.enabled===!1||P.isPresenting===!1||P.hasDepthSensing()===!1,jJ)kJ.addToRenderList(k,D);if(this.info.render.frame++,cJ===!0)qJ.beginShadows();let f=N.state.shadowsArray;if(JJ.render(f,D,v),cJ===!0)qJ.endShadows();if(this.info.autoReset===!0)this.info.reset();let{opaque:b,transmissive:y}=k;if(N.setupLights(),v.isArrayCamera){let t=v.cameras;if(y.length>0)for(let XJ=0,OJ=t.length;XJ<OJ;XJ++){let EJ=t[XJ];M$(b,y,D,EJ)}if(jJ)kJ.render(D);for(let XJ=0,OJ=t.length;XJ<OJ;XJ++){let EJ=t[XJ];k$(k,D,EJ,EJ.viewport)}}else{if(y.length>0)M$(b,y,D,v);if(jJ)kJ.render(D);k$(k,D,v)}if(A!==null&&w===0)_J.updateMultisampleRenderTarget(A),_J.updateRenderTargetMipmap(A);if(D.isScene===!0)D.onAfterRender(L,D,v);if(LJ.resetDefaultState(),x=-1,z=null,_.pop(),_.length>0){if(N=_[_.length-1],cJ===!0)qJ.setGlobalState(L.clippingPlanes,N.state.camera)}else N=null;if(O.pop(),O.length>0)k=O[O.length-1];else k=null};function YQ(D,v,f,b){if(D.visible===!1)return;if(D.layers.test(v.layers)){if(D.isGroup)f=D.renderOrder;else if(D.isLOD){if(D.autoUpdate===!0)D.update(v)}else if(D.isLight){if(N.pushLight(D),D.castShadow)N.pushShadow(D)}else if(D.isSprite){if(!D.frustumCulled||K0.intersectsSprite(D)){if(b)MJ.setFromMatrixPosition(D.matrixWorld).applyMatrix4(WJ);let XJ=R.update(D),OJ=D.material;if(OJ.visible)k.push(D,XJ,OJ,f,MJ.z,null)}}else if(D.isMesh||D.isLine||D.isPoints){if(!D.frustumCulled||K0.intersectsObject(D)){let XJ=R.update(D),OJ=D.material;if(b){if(D.boundingSphere!==void 0){if(D.boundingSphere===null)D.computeBoundingSphere();MJ.copy(D.boundingSphere.center)}else{if(XJ.boundingSphere===null)XJ.computeBoundingSphere();MJ.copy(XJ.boundingSphere.center)}MJ.applyMatrix4(D.matrixWorld).applyMatrix4(WJ)}if(Array.isArray(OJ)){let EJ=XJ.groups;for(let CJ=0,IJ=EJ.length;CJ<IJ;CJ++){let zJ=EJ[CJ],dJ=OJ[zJ.materialIndex];if(dJ&&dJ.visible)k.push(D,XJ,dJ,f,MJ.z,zJ)}}else if(OJ.visible)k.push(D,XJ,OJ,f,MJ.z,null)}}}let t=D.children;for(let XJ=0,OJ=t.length;XJ<OJ;XJ++)YQ(t[XJ],v,f,b)}function k$(D,v,f,b){let{opaque:y,transmissive:t,transparent:XJ}=D;if(N.setupLightsView(f),cJ===!0)qJ.setGlobalState(L.clippingPlanes,f);if(b)RJ.viewport(V.copy(b));if(y.length>0)x6(y,v,f);if(t.length>0)x6(t,v,f);if(XJ.length>0)x6(XJ,v,f);RJ.buffers.depth.setTest(!0),RJ.buffers.depth.setMask(!0),RJ.buffers.color.setMask(!0),RJ.setPolygonOffset(!1)}function M$(D,v,f,b){if((f.isScene===!0?f.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[b.id]===void 0)N.state.transmissionRenderTarget[b.id]=new v8(1,1,{generateMipmaps:!0,type:hJ.has("EXT_color_buffer_half_float")||hJ.has("EXT_color_buffer_float")?D6:c8,minFilter:j8,samples:4,stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mJ.workingColorSpace});let t=N.state.transmissionRenderTarget[b.id],XJ=b.viewport||V;t.setSize(XJ.z*L.transmissionResolutionScale,XJ.w*L.transmissionResolutionScale);let OJ=L.getRenderTarget(),EJ=L.getActiveCubeFace(),CJ=L.getActiveMipmapLevel();if(L.setRenderTarget(t),L.getClearColor(c),l=L.getClearAlpha(),l<1)L.setClearColor(16777215,0.5);if(L.clear(),jJ)kJ.render(f);let IJ=L.toneMapping;L.toneMapping=H8;let zJ=b.viewport;if(b.viewport!==void 0)b.viewport=void 0;if(N.setupLightsView(b),cJ===!0)qJ.setGlobalState(L.clippingPlanes,b);if(x6(D,f,b),_J.updateMultisampleRenderTarget(t),_J.updateRenderTargetMipmap(t),hJ.has("WEBGL_multisampled_render_to_texture")===!1){let dJ=!1;for(let rJ=0,X0=v.length;rJ<X0;rJ++){let Q0=v[rJ],eJ=Q0.object,BJ=Q0.geometry,H0=Q0.material,nJ=Q0.group;if(H0.side===i0&&eJ.layers.test(b.layers)){let S0=H0.side;H0.side=h0,H0.needsUpdate=!0,D$(eJ,f,b,BJ,H0,nJ),H0.side=S0,H0.needsUpdate=!0,dJ=!0}}if(dJ===!0)_J.updateMultisampleRenderTarget(t),_J.updateRenderTargetMipmap(t)}if(L.setRenderTarget(OJ,EJ,CJ),L.setClearColor(c,l),zJ!==void 0)b.viewport=zJ;L.toneMapping=IJ}function x6(D,v,f){let b=v.isScene===!0?v.overrideMaterial:null;for(let y=0,t=D.length;y<t;y++){let XJ=D[y],OJ=XJ.object,EJ=XJ.geometry,CJ=XJ.group,IJ=XJ.material;if(IJ.allowOverride===!0&&b!==null)IJ=b;if(OJ.layers.test(f.layers))D$(OJ,v,f,EJ,IJ,CJ)}}function D$(D,v,f,b,y,t){if(D.onBeforeRender(L,v,f,b,y,t),D.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),y.onBeforeRender(L,v,f,b,D,t),y.transparent===!0&&y.side===i0&&y.forceSinglePass===!1)y.side=h0,y.needsUpdate=!0,L.renderBufferDirect(f,v,b,y,D,t),y.side=m8,y.needsUpdate=!0,L.renderBufferDirect(f,v,b,y,D,t),y.side=i0;else L.renderBufferDirect(f,v,b,y,D,t);D.onAfterRender(L,v,f,b,y,t)}function g6(D,v,f){if(v.isScene!==!0)v=SJ;let b=VJ.get(D),y=N.state.lights,t=N.state.shadowsArray,XJ=y.state.version,OJ=h.getParameters(D,y.state,t,v,f),EJ=h.getProgramCacheKey(OJ),CJ=b.programs;if(b.environment=D.isMeshStandardMaterial?v.environment:null,b.fog=v.fog,b.envMap=(D.isMeshStandardMaterial?k0:L0).get(D.envMap||b.environment),b.envMapRotation=b.environment!==null&&D.envMap===null?v.environmentRotation:D.envMapRotation,CJ===void 0)D.addEventListener("dispose",a),CJ=new Map,b.programs=CJ;let IJ=CJ.get(EJ);if(IJ!==void 0){if(b.currentProgram===IJ&&b.lightsStateVersion===XJ)return V$(D,OJ),IJ}else OJ.uniforms=h.getUniforms(D),D.onBeforeCompile(OJ,L),IJ=h.acquireProgram(OJ,EJ),CJ.set(EJ,IJ),b.uniforms=OJ.uniforms;let zJ=b.uniforms;if(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)zJ.clippingPlanes=qJ.uniform;if(V$(D,OJ),b.needsLights=xY(D),b.lightsStateVersion=XJ,b.needsLights)zJ.ambientLightColor.value=y.state.ambient,zJ.lightProbe.value=y.state.probe,zJ.directionalLights.value=y.state.directional,zJ.directionalLightShadows.value=y.state.directionalShadow,zJ.spotLights.value=y.state.spot,zJ.spotLightShadows.value=y.state.spotShadow,zJ.rectAreaLights.value=y.state.rectArea,zJ.ltc_1.value=y.state.rectAreaLTC1,zJ.ltc_2.value=y.state.rectAreaLTC2,zJ.pointLights.value=y.state.point,zJ.pointLightShadows.value=y.state.pointShadow,zJ.hemisphereLights.value=y.state.hemi,zJ.directionalShadowMap.value=y.state.directionalShadowMap,zJ.directionalShadowMatrix.value=y.state.directionalShadowMatrix,zJ.spotShadowMap.value=y.state.spotShadowMap,zJ.spotLightMatrix.value=y.state.spotLightMatrix,zJ.spotLightMap.value=y.state.spotLightMap,zJ.pointShadowMap.value=y.state.pointShadowMap,zJ.pointShadowMatrix.value=y.state.pointShadowMatrix;return b.currentProgram=IJ,b.uniformsList=null,IJ}function L$(D){if(D.uniformsList===null){let v=D.currentProgram.getUniforms();D.uniformsList=v6.seqWithValue(v.seq,D.uniforms)}return D.uniformsList}function V$(D,v){let f=VJ.get(D);f.outputColorSpace=v.outputColorSpace,f.batching=v.batching,f.batchingColor=v.batchingColor,f.instancing=v.instancing,f.instancingColor=v.instancingColor,f.instancingMorph=v.instancingMorph,f.skinning=v.skinning,f.morphTargets=v.morphTargets,f.morphNormals=v.morphNormals,f.morphColors=v.morphColors,f.morphTargetsCount=v.morphTargetsCount,f.numClippingPlanes=v.numClippingPlanes,f.numIntersection=v.numClipIntersection,f.vertexAlphas=v.vertexAlphas,f.vertexTangents=v.vertexTangents,f.toneMapping=v.toneMapping}function fY(D,v,f,b,y){if(v.isScene!==!0)v=SJ;_J.resetTextureUnits();let t=v.fog,XJ=b.isMeshStandardMaterial?v.environment:null,OJ=A===null?L.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:T0,EJ=(b.isMeshStandardMaterial?k0:L0).get(b.envMap||XJ),CJ=b.vertexColors===!0&&!!f.attributes.color&&f.attributes.color.itemSize===4,IJ=!!f.attributes.tangent&&(!!b.normalMap||b.anisotropy>0),zJ=!!f.morphAttributes.position,dJ=!!f.morphAttributes.normal,rJ=!!f.morphAttributes.color,X0=H8;if(b.toneMapped){if(A===null||A.isXRRenderTarget===!0)X0=L.toneMapping}let Q0=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,eJ=Q0!==void 0?Q0.length:0,BJ=VJ.get(b),H0=N.state.lights;if(cJ===!0){if(n===!0||D!==z){let I0=D===z&&b.id===x;qJ.setState(b,D,I0)}}let nJ=!1;if(b.version===BJ.__version){if(BJ.needsLights&&BJ.lightsStateVersion!==H0.state.version)nJ=!0;else if(BJ.outputColorSpace!==OJ)nJ=!0;else if(y.isBatchedMesh&&BJ.batching===!1)nJ=!0;else if(!y.isBatchedMesh&&BJ.batching===!0)nJ=!0;else if(y.isBatchedMesh&&BJ.batchingColor===!0&&y.colorTexture===null)nJ=!0;else if(y.isBatchedMesh&&BJ.batchingColor===!1&&y.colorTexture!==null)nJ=!0;else if(y.isInstancedMesh&&BJ.instancing===!1)nJ=!0;else if(!y.isInstancedMesh&&BJ.instancing===!0)nJ=!0;else if(y.isSkinnedMesh&&BJ.skinning===!1)nJ=!0;else if(!y.isSkinnedMesh&&BJ.skinning===!0)nJ=!0;else if(y.isInstancedMesh&&BJ.instancingColor===!0&&y.instanceColor===null)nJ=!0;else if(y.isInstancedMesh&&BJ.instancingColor===!1&&y.instanceColor!==null)nJ=!0;else if(y.isInstancedMesh&&BJ.instancingMorph===!0&&y.morphTexture===null)nJ=!0;else if(y.isInstancedMesh&&BJ.instancingMorph===!1&&y.morphTexture!==null)nJ=!0;else if(BJ.envMap!==EJ)nJ=!0;else if(b.fog===!0&&BJ.fog!==t)nJ=!0;else if(BJ.numClippingPlanes!==void 0&&(BJ.numClippingPlanes!==qJ.numPlanes||BJ.numIntersection!==qJ.numIntersection))nJ=!0;else if(BJ.vertexAlphas!==CJ)nJ=!0;else if(BJ.vertexTangents!==IJ)nJ=!0;else if(BJ.morphTargets!==zJ)nJ=!0;else if(BJ.morphNormals!==dJ)nJ=!0;else if(BJ.morphColors!==rJ)nJ=!0;else if(BJ.toneMapping!==X0)nJ=!0;else if(BJ.morphTargetsCount!==eJ)nJ=!0}else nJ=!0,BJ.__version=b.version;let S0=BJ.currentProgram;if(nJ===!0)S0=g6(b,v,y);let D9=!1,j0=!1,W6=!1,Y0=S0.getUniforms(),m0=BJ.uniforms;if(RJ.useProgram(S0.program))D9=!0,j0=!0,W6=!0;if(b.id!==x)x=b.id,j0=!0;if(D9||z!==D){if(RJ.buffers.depth.getReversed()&&D.reversedDepth!==!0)D._reversedDepth=!0,D.updateProjectionMatrix();Y0.setValue(I,"projectionMatrix",D.projectionMatrix),Y0.setValue(I,"viewMatrix",D.matrixWorldInverse);let A0=Y0.map.cameraPosition;if(A0!==void 0)A0.setValue(I,QJ.setFromMatrixPosition(D.matrixWorld));if(TJ.logarithmicDepthBuffer)Y0.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2));if(b.isMeshPhongMaterial||b.isMeshToonMaterial||b.isMeshLambertMaterial||b.isMeshBasicMaterial||b.isMeshStandardMaterial||b.isShaderMaterial)Y0.setValue(I,"isOrthographic",D.isOrthographicCamera===!0);if(z!==D)z=D,j0=!0,W6=!0}if(y.isSkinnedMesh){Y0.setOptional(I,y,"bindMatrix"),Y0.setOptional(I,y,"bindMatrixInverse");let I0=y.skeleton;if(I0){if(I0.boneTexture===null)I0.computeBoneTexture();Y0.setValue(I,"boneTexture",I0.boneTexture,_J)}}if(y.isBatchedMesh){if(Y0.setOptional(I,y,"batchingTexture"),Y0.setValue(I,"batchingTexture",y._matricesTexture,_J),Y0.setOptional(I,y,"batchingIdTexture"),Y0.setValue(I,"batchingIdTexture",y._indirectTexture,_J),Y0.setOptional(I,y,"batchingColorTexture"),y._colorsTexture!==null)Y0.setValue(I,"batchingColorTexture",y._colorsTexture,_J)}let u0=f.morphAttributes;if(u0.position!==void 0||u0.normal!==void 0||u0.color!==void 0)wJ.update(y,f,S0);if(j0||BJ.receiveShadow!==y.receiveShadow)BJ.receiveShadow=y.receiveShadow,Y0.setValue(I,"receiveShadow",y.receiveShadow);if(b.isMeshGouraudMaterial&&b.envMap!==null)m0.envMap.value=EJ,m0.flipEnvMap.value=EJ.isCubeTexture&&EJ.isRenderTargetTexture===!1?-1:1;if(b.isMeshStandardMaterial&&b.envMap===null&&v.environment!==null)m0.envMapIntensity.value=v.environmentIntensity;if(j0){if(Y0.setValue(I,"toneMappingExposure",L.toneMappingExposure),BJ.needsLights)bY(m0,W6);if(t&&b.fog===!0)u.refreshFogUniforms(m0,t);u.refreshMaterialUniforms(m0,b,r,m,N.state.transmissionRenderTarget[D.id]),v6.upload(I,L$(BJ),m0,_J)}if(b.isShaderMaterial&&b.uniformsNeedUpdate===!0)v6.upload(I,L$(BJ),m0,_J),b.uniformsNeedUpdate=!1;if(b.isSpriteMaterial)Y0.setValue(I,"center",y.center);if(Y0.setValue(I,"modelViewMatrix",y.modelViewMatrix),Y0.setValue(I,"normalMatrix",y.normalMatrix),Y0.setValue(I,"modelMatrix",y.matrixWorld),b.isShaderMaterial||b.isRawShaderMaterial){let I0=b.uniformsGroups;for(let A0=0,XQ=I0.length;A0<XQ;A0++){let $9=I0[A0];UJ.update($9,S0),UJ.bind($9,S0)}}return S0}function bY(D,v){D.ambientLightColor.needsUpdate=v,D.lightProbe.needsUpdate=v,D.directionalLights.needsUpdate=v,D.directionalLightShadows.needsUpdate=v,D.pointLights.needsUpdate=v,D.pointLightShadows.needsUpdate=v,D.spotLights.needsUpdate=v,D.spotLightShadows.needsUpdate=v,D.rectAreaLights.needsUpdate=v,D.hemisphereLights.needsUpdate=v}function xY(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,v,f){let b=VJ.get(D);if(b.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,b.__autoAllocateDepthBuffer===!1)b.__useRenderToTexture=!1;VJ.get(D.texture).__webglTexture=v,VJ.get(D.depthTexture).__webglTexture=b.__autoAllocateDepthBuffer?void 0:f,b.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,v){let f=VJ.get(D);f.__webglFramebuffer=v,f.__useDefaultFramebuffer=v===void 0};let gY=I.createFramebuffer();this.setRenderTarget=function(D,v=0,f=0){A=D,j=v,w=f;let b=!0,y=null,t=!1,XJ=!1;if(D){let EJ=VJ.get(D);if(EJ.__useDefaultFramebuffer!==void 0)RJ.bindFramebuffer(I.FRAMEBUFFER,null),b=!1;else if(EJ.__webglFramebuffer===void 0)_J.setupRenderTarget(D);else if(EJ.__hasExternalTextures)_J.rebindTextures(D,VJ.get(D.texture).__webglTexture,VJ.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let zJ=D.depthTexture;if(EJ.__boundDepthTexture!==zJ){if(zJ!==null&&VJ.has(zJ)&&(D.width!==zJ.image.width||D.height!==zJ.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_J.setupDepthRenderbuffer(D)}}let CJ=D.texture;if(CJ.isData3DTexture||CJ.isDataArrayTexture||CJ.isCompressedArrayTexture)XJ=!0;let IJ=VJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget){if(Array.isArray(IJ[v]))y=IJ[v][f];else y=IJ[v];t=!0}else if(D.samples>0&&_J.useMultisampledRTT(D)===!1)y=VJ.get(D).__webglMultisampledFramebuffer;else if(Array.isArray(IJ))y=IJ[f];else y=IJ;V.copy(D.viewport),T.copy(D.scissor),d=D.scissorTest}else V.copy(GJ).multiplyScalar(r).floor(),T.copy(PJ).multiplyScalar(r).floor(),d=uJ;if(f!==0)y=gY;if(RJ.bindFramebuffer(I.FRAMEBUFFER,y)&&b)RJ.drawBuffers(D,y);if(RJ.viewport(V),RJ.scissor(T),RJ.setScissorTest(d),t){let EJ=VJ.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+v,EJ.__webglTexture,f)}else if(XJ){let EJ=v;for(let CJ=0;CJ<D.textures.length;CJ++){let IJ=VJ.get(D.textures[CJ]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+CJ,IJ.__webglTexture,f,EJ)}}else if(D!==null&&f!==0){let EJ=VJ.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,EJ.__webglTexture,f)}x=-1},this.readRenderTargetPixels=function(D,v,f,b,y,t,XJ,OJ=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let EJ=VJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&XJ!==void 0)EJ=EJ[XJ];if(EJ){RJ.bindFramebuffer(I.FRAMEBUFFER,EJ);try{let CJ=D.textures[OJ],IJ=CJ.format,zJ=CJ.type;if(!TJ.textureFormatReadable(IJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!TJ.textureTypeReadable(zJ)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=D.width-b&&(f>=0&&f<=D.height-y)){if(D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+OJ);I.readPixels(v,f,b,y,DJ.convert(IJ),DJ.convert(zJ),t)}}finally{let CJ=A!==null?VJ.get(A).__webglFramebuffer:null;RJ.bindFramebuffer(I.FRAMEBUFFER,CJ)}}},this.readRenderTargetPixelsAsync=async function(D,v,f,b,y,t,XJ,OJ=0){if(!(D&&D.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let EJ=VJ.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&XJ!==void 0)EJ=EJ[XJ];if(EJ)if(v>=0&&v<=D.width-b&&(f>=0&&f<=D.height-y)){RJ.bindFramebuffer(I.FRAMEBUFFER,EJ);let CJ=D.textures[OJ],IJ=CJ.format,zJ=CJ.type;if(!TJ.textureFormatReadable(IJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!TJ.textureTypeReadable(zJ))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dJ=I.createBuffer();if(I.bindBuffer(I.PIXEL_PACK_BUFFER,dJ),I.bufferData(I.PIXEL_PACK_BUFFER,t.byteLength,I.STREAM_READ),D.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+OJ);I.readPixels(v,f,b,y,DJ.convert(IJ),DJ.convert(zJ),0);let rJ=A!==null?VJ.get(A).__webglFramebuffer:null;RJ.bindFramebuffer(I.FRAMEBUFFER,rJ);let X0=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await $H(I,X0,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,dJ),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,t),I.deleteBuffer(dJ),I.deleteSync(X0),t}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,v=null,f=0){let b=Math.pow(2,-f),y=Math.floor(D.image.width*b),t=Math.floor(D.image.height*b),XJ=v!==null?v.x:0,OJ=v!==null?v.y:0;_J.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,f,0,0,XJ,OJ,y,t),RJ.unbindTexture()};let pY=I.createFramebuffer(),lY=I.createFramebuffer();if(this.copyTextureToTexture=function(D,v,f=null,b=null,y=0,t=null){if(t===null)if(y!==0)f9("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),t=y,y=0;else t=0;let XJ,OJ,EJ,CJ,IJ,zJ,dJ,rJ,X0,Q0=D.isCompressedTexture?D.mipmaps[t]:D.image;if(f!==null)XJ=f.max.x-f.min.x,OJ=f.max.y-f.min.y,EJ=f.isBox3?f.max.z-f.min.z:1,CJ=f.min.x,IJ=f.min.y,zJ=f.isBox3?f.min.z:0;else{let u0=Math.pow(2,-y);if(XJ=Math.floor(Q0.width*u0),OJ=Math.floor(Q0.height*u0),D.isDataArrayTexture)EJ=Q0.depth;else if(D.isData3DTexture)EJ=Math.floor(Q0.depth*u0);else EJ=1;CJ=0,IJ=0,zJ=0}if(b!==null)dJ=b.x,rJ=b.y,X0=b.z;else dJ=0,rJ=0,X0=0;let eJ=DJ.convert(v.format),BJ=DJ.convert(v.type),H0;if(v.isData3DTexture)_J.setTexture3D(v,0),H0=I.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)_J.setTexture2DArray(v,0),H0=I.TEXTURE_2D_ARRAY;else _J.setTexture2D(v,0),H0=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,v.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,v.unpackAlignment);let nJ=I.getParameter(I.UNPACK_ROW_LENGTH),S0=I.getParameter(I.UNPACK_IMAGE_HEIGHT),D9=I.getParameter(I.UNPACK_SKIP_PIXELS),j0=I.getParameter(I.UNPACK_SKIP_ROWS),W6=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Q0.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Q0.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,CJ),I.pixelStorei(I.UNPACK_SKIP_ROWS,IJ),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zJ);let Y0=D.isDataArrayTexture||D.isData3DTexture,m0=v.isDataArrayTexture||v.isData3DTexture;if(D.isDepthTexture){let u0=VJ.get(D),I0=VJ.get(v),A0=VJ.get(u0.__renderTarget),XQ=VJ.get(I0.__renderTarget);RJ.bindFramebuffer(I.READ_FRAMEBUFFER,A0.__webglFramebuffer),RJ.bindFramebuffer(I.DRAW_FRAMEBUFFER,XQ.__webglFramebuffer);for(let $9=0;$9<EJ;$9++){if(Y0)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,VJ.get(D).__webglTexture,y,zJ+$9),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,VJ.get(v).__webglTexture,t,X0+$9);I.blitFramebuffer(CJ,IJ,XJ,OJ,dJ,rJ,XJ,OJ,I.DEPTH_BUFFER_BIT,I.NEAREST)}RJ.bindFramebuffer(I.READ_FRAMEBUFFER,null),RJ.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(y!==0||D.isRenderTargetTexture||VJ.has(D)){let u0=VJ.get(D),I0=VJ.get(v);RJ.bindFramebuffer(I.READ_FRAMEBUFFER,pY),RJ.bindFramebuffer(I.DRAW_FRAMEBUFFER,lY);for(let A0=0;A0<EJ;A0++){if(Y0)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,u0.__webglTexture,y,zJ+A0);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,u0.__webglTexture,y);if(m0)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I0.__webglTexture,t,X0+A0);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,I0.__webglTexture,t);if(y!==0)I.blitFramebuffer(CJ,IJ,XJ,OJ,dJ,rJ,XJ,OJ,I.COLOR_BUFFER_BIT,I.NEAREST);else if(m0)I.copyTexSubImage3D(H0,t,dJ,rJ,X0+A0,CJ,IJ,XJ,OJ);else I.copyTexSubImage2D(H0,t,dJ,rJ,CJ,IJ,XJ,OJ)}RJ.bindFramebuffer(I.READ_FRAMEBUFFER,null),RJ.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(m0)if(D.isDataTexture||D.isData3DTexture)I.texSubImage3D(H0,t,dJ,rJ,X0,XJ,OJ,EJ,eJ,BJ,Q0.data);else if(v.isCompressedArrayTexture)I.compressedTexSubImage3D(H0,t,dJ,rJ,X0,XJ,OJ,EJ,eJ,Q0.data);else I.texSubImage3D(H0,t,dJ,rJ,X0,XJ,OJ,EJ,eJ,BJ,Q0);else if(D.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,t,dJ,rJ,XJ,OJ,eJ,BJ,Q0.data);else if(D.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,t,dJ,rJ,Q0.width,Q0.height,eJ,Q0.data);else I.texSubImage2D(I.TEXTURE_2D,t,dJ,rJ,XJ,OJ,eJ,BJ,Q0);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,nJ),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,S0),I.pixelStorei(I.UNPACK_SKIP_PIXELS,D9),I.pixelStorei(I.UNPACK_SKIP_ROWS,j0),I.pixelStorei(I.UNPACK_SKIP_IMAGES,W6),t===0&&v.generateMipmaps)I.generateMipmap(H0);RJ.unbindTexture()},this.initRenderTarget=function(D){if(VJ.get(D).__webglFramebuffer===void 0)_J.setupRenderTarget(D)},this.initTexture=function(D){if(D.isCubeTexture)_J.setTextureCube(D,0);else if(D.isData3DTexture)_J.setTexture3D(D,0);else if(D.isDataArrayTexture||D.isCompressedArrayTexture)_J.setTexture2DArray(D,0);else _J.setTexture2D(D,0);RJ.unbindTexture()},this.resetState=function(){j=0,w=0,A=null,RJ.reset(),LJ.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=mJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=mJ._getUnpackColorSpace()}}function Z$(J,Q){if(Q===zZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===m9||Q===V6){let Z=J.getIndex();if(Z===null){let Y=[],X=J.getAttribute("position");if(X!==void 0){for(let K=0;K<X.count;K++)Y.push(K);J.setIndex(Y),Z=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let $=Z.count-2,W=[];if(Q===m9)for(let Y=1;Y<=$;Y++)W.push(Z.getX(0)),W.push(Z.getX(Y)),W.push(Z.getX(Y+1));else for(let Y=0;Y<$;Y++)if(Y%2===0)W.push(Z.getX(Y)),W.push(Z.getX(Y+1)),W.push(Z.getX(Y+2));else W.push(Z.getX(Y+2)),W.push(Z.getX(Y+1)),W.push(Z.getX(Y));if(W.length/3!==$)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let H=J.clone();return H.setIndex(W),H.clearGroups(),H}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}class K$ extends h8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new QY(Q)}),this.register(function(Q){return new ZY(Q)}),this.register(function(Q){return new EY(Q)}),this.register(function(Q){return new qY(Q)}),this.register(function(Q){return new NY(Q)}),this.register(function(Q){return new WY(Q)}),this.register(function(Q){return new HY(Q)}),this.register(function(Q){return new YY(Q)}),this.register(function(Q){return new XY(Q)}),this.register(function(Q){return new JY(Q)}),this.register(function(Q){return new KY(Q)}),this.register(function(Q){return new $Y(Q)}),this.register(function(Q){return new GY(Q)}),this.register(function(Q){return new UY(Q)}),this.register(function(Q){return new tH(Q)}),this.register(function(Q){return new OY(Q)}),this.register(function(Q){return new FY(Q)})}load(J,Q,Z,$){let W=this,H;if(this.resourcePath!=="")H=this.resourcePath;else if(this.path!==""){let K=e8.extractUrlBase(J);H=e8.resolveURL(K,this.path)}else H=e8.extractUrlBase(J);this.manager.itemStart(J);let Y=function(K){if($)$(K);else console.error(K);W.manager.itemError(J),W.manager.itemEnd(J)},X=new A6(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(K){try{W.parse(K,H,function(U){Q(U),W.manager.itemEnd(J)},Y)}catch(U){Y(U)}},Z,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,Z,$){let W,H={},Y={},X=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===RY){try{H[lJ.KHR_BINARY_GLTF]=new kY(J)}catch(G){if($)$(G);return}W=JSON.parse(H[lJ.KHR_BINARY_GLTF].content)}else W=JSON.parse(X.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if($)$(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let K=new zY(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});K.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](K);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,H[G.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let G=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(G){case lJ.KHR_MATERIALS_UNLIT:H[G]=new eH;break;case lJ.KHR_DRACO_MESH_COMPRESSION:H[G]=new MY(W,this.dracoLoader);break;case lJ.KHR_TEXTURE_TRANSFORM:H[G]=new DY;break;case lJ.KHR_MESH_QUANTIZATION:H[G]=new LY;break;default:if(E.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}K.setExtensions(H),K.setPlugins(Y),K.parse(Z,$)}parseAsync(J,Q){let Z=this;return new Promise(function($,W){Z.parse(J,Q,$,W)})}}function R1(){let J={};return{get:function(Q){return J[Q]},add:function(Q,Z){J[Q]=Z},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}var lJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tH{constructor(J){this.parser=J,this.name=lJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let Z=0,$=Q.length;Z<$;Z++){let W=Q[Z];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,Z="light:"+J,$=Q.cache.get(Z);if($)return $;let W=Q.json,X=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],K,U=new AJ(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],T0);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":K=new a7(U),K.target.position.set(0,0,-1),K.add(K.target);break;case"point":K=new i7(U),K.distance=G;break;case"spot":K=new o7(U),K.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,K.angle=X.spot.outerConeAngle,K.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,K.target.position.set(0,0,-1),K.add(K.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(K.position.set(0,0,0),k8(K,X),X.intensity!==void 0)K.intensity=X.intensity;return K.name=Q.createUniqueName(X.name||"light_"+J),$=Promise.resolve(K),Q.cache.add(Z,$),$}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,Z=this.parser,W=Z.json.nodes[J],Y=(W.extensions&&W.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return Z._getNodeRef(Q.cache,Y,X)})}}class eH{constructor(){this.name=lJ.KHR_MATERIALS_UNLIT}getMaterialType(){return x0}extendParams(J,Q,Z){let $=[];J.color=new AJ(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let H=W.baseColorFactor;J.color.setRGB(H[0],H[1],H[2],T0),J.opacity=H[3]}if(W.baseColorTexture!==void 0)$.push(Z.assignTexture(J,"map",W.baseColorTexture,F8))}return Promise.all($)}}class JY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name].emissiveStrength;if(W!==void 0)Q.emissiveIntensity=W;return Promise.resolve()}}class QY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.clearcoatFactor!==void 0)Q.clearcoat=H.clearcoatFactor;if(H.clearcoatTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatMap",H.clearcoatTexture));if(H.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=H.clearcoatRoughnessFactor;if(H.clearcoatRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"clearcoatRoughnessMap",H.clearcoatRoughnessTexture));if(H.clearcoatNormalTexture!==void 0){if(W.push(Z.assignTexture(Q,"clearcoatNormalMap",H.clearcoatNormalTexture)),H.clearcoatNormalTexture.scale!==void 0){let Y=H.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new pJ(Y,Y)}}return Promise.all(W)}}class ZY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.dispersion=W.dispersion!==void 0?W.dispersion:0,Promise.resolve()}}class $Y{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.iridescenceFactor!==void 0)Q.iridescence=H.iridescenceFactor;if(H.iridescenceTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceMap",H.iridescenceTexture));if(H.iridescenceIor!==void 0)Q.iridescenceIOR=H.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if(H.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=H.iridescenceThicknessMinimum;if(H.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=H.iridescenceThicknessMaximum;if(H.iridescenceThicknessTexture!==void 0)W.push(Z.assignTexture(Q,"iridescenceThicknessMap",H.iridescenceThicknessTexture));return Promise.all(W)}}class WY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_SHEEN}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[];Q.sheenColor=new AJ(0,0,0),Q.sheenRoughness=0,Q.sheen=1;let H=$.extensions[this.name];if(H.sheenColorFactor!==void 0){let Y=H.sheenColorFactor;Q.sheenColor.setRGB(Y[0],Y[1],Y[2],T0)}if(H.sheenRoughnessFactor!==void 0)Q.sheenRoughness=H.sheenRoughnessFactor;if(H.sheenColorTexture!==void 0)W.push(Z.assignTexture(Q,"sheenColorMap",H.sheenColorTexture,F8));if(H.sheenRoughnessTexture!==void 0)W.push(Z.assignTexture(Q,"sheenRoughnessMap",H.sheenRoughnessTexture));return Promise.all(W)}}class HY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.transmissionFactor!==void 0)Q.transmission=H.transmissionFactor;if(H.transmissionTexture!==void 0)W.push(Z.assignTexture(Q,"transmissionMap",H.transmissionTexture));return Promise.all(W)}}class YY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_VOLUME}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.thickness=H.thicknessFactor!==void 0?H.thicknessFactor:0,H.thicknessTexture!==void 0)W.push(Z.assignTexture(Q,"thicknessMap",H.thicknessTexture));Q.attenuationDistance=H.attenuationDistance||1/0;let Y=H.attenuationColor||[1,1,1];return Q.attenuationColor=new AJ().setRGB(Y[0],Y[1],Y[2],T0),Promise.all(W)}}class XY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_IOR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let $=this.parser.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=$.extensions[this.name];return Q.ior=W.ior!==void 0?W.ior:1.5,Promise.resolve()}}class KY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.specularIntensity=H.specularFactor!==void 0?H.specularFactor:1,H.specularTexture!==void 0)W.push(Z.assignTexture(Q,"specularIntensityMap",H.specularTexture));let Y=H.specularColorFactor||[1,1,1];if(Q.specularColor=new AJ().setRGB(Y[0],Y[1],Y[2],T0),H.specularColorTexture!==void 0)W.push(Z.assignTexture(Q,"specularColorMap",H.specularColorTexture,F8));return Promise.all(W)}}class UY{constructor(J){this.parser=J,this.name=lJ.EXT_MATERIALS_BUMP}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(Q.bumpScale=H.bumpFactor!==void 0?H.bumpFactor:1,H.bumpTexture!==void 0)W.push(Z.assignTexture(Q,"bumpMap",H.bumpTexture));return Promise.all(W)}}class GY{constructor(J){this.parser=J,this.name=lJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){let Z=this.parser.json.materials[J];if(!Z.extensions||!Z.extensions[this.name])return null;return p0}extendMaterialParams(J,Q){let Z=this.parser,$=Z.json.materials[J];if(!$.extensions||!$.extensions[this.name])return Promise.resolve();let W=[],H=$.extensions[this.name];if(H.anisotropyStrength!==void 0)Q.anisotropy=H.anisotropyStrength;if(H.anisotropyRotation!==void 0)Q.anisotropyRotation=H.anisotropyRotation;if(H.anisotropyTexture!==void 0)W.push(Z.assignTexture(Q,"anisotropyMap",H.anisotropyTexture));return Promise.all(W)}}class EY{constructor(J){this.parser=J,this.name=lJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,Z=Q.json,$=Z.textures[J];if(!$.extensions||!$.extensions[this.name])return null;let W=$.extensions[this.name],H=Q.options.ktx2Loader;if(!H)if(Z.extensionsRequired&&Z.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,H)}}class qY{constructor(J){this.parser=J,this.name=lJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=$.images[H.source],X=Z.textureLoader;if(Y.uri){let K=Z.options.manager.getHandler(Y.uri);if(K!==null)X=K}return Z.loadTextureImage(J,H.source,X)}}class NY{constructor(J){this.parser=J,this.name=lJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,Z=this.parser,$=Z.json,W=$.textures[J];if(!W.extensions||!W.extensions[Q])return null;let H=W.extensions[Q],Y=$.images[H.source],X=Z.textureLoader;if(Y.uri){let K=Z.options.manager.getHandler(Y.uri);if(K!==null)X=K}return Z.loadTextureImage(J,H.source,X)}}class OY{constructor(J){this.name=lJ.EXT_MESHOPT_COMPRESSION,this.parser=J}loadBufferView(J){let Q=this.parser.json,Z=Q.bufferViews[J];if(Z.extensions&&Z.extensions[this.name]){let $=Z.extensions[this.name],W=this.parser.getDependency("buffer",$.buffer),H=this.parser.options.meshoptDecoder;if(!H||!H.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(Y){let X=$.byteOffset||0,K=$.byteLength||0,U=$.count,G=$.byteStride,E=new Uint8Array(Y,X,K);if(H.decodeGltfBufferAsync)return H.decodeGltfBufferAsync(U,G,E,$.mode,$.filter).then(function(q){return q.buffer});else return H.ready.then(function(){let q=new ArrayBuffer(U*G);return H.decodeGltfBuffer(new Uint8Array(q),U,G,E,$.mode,$.filter),q})})}else return null}}class FY{constructor(J){this.name=lJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,Z=Q.nodes[J];if(!Z.extensions||!Z.extensions[this.name]||Z.mesh===void 0)return null;let $=Q.meshes[Z.mesh];for(let K of $.primitives)if(K.mode!==t0.TRIANGLES&&K.mode!==t0.TRIANGLE_STRIP&&K.mode!==t0.TRIANGLE_FAN&&K.mode!==void 0)return null;let H=Z.extensions[this.name].attributes,Y=[],X={};for(let K in H)Y.push(this.parser.getDependency("accessor",H[K]).then((U)=>{return X[K]=U,X[K]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((K)=>{let U=K.pop(),G=U.isGroup?U.children:[U],E=K[0].count,q=[];for(let F of G){let M=new yJ,k=new S,N=new X8,O=new S(1,1,1),_=new x7(F.geometry,F.material,E);for(let L=0;L<E;L++){if(X.TRANSLATION)k.fromBufferAttribute(X.TRANSLATION,L);if(X.ROTATION)N.fromBufferAttribute(X.ROTATION,L);if(X.SCALE)O.fromBufferAttribute(X.SCALE,L);_.setMatrixAt(L,M.compose(k,N,O))}for(let L in X)if(L==="_COLOR_0"){let C=X[L];_.instanceColor=new U9(C.array,C.itemSize,C.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE")F.geometry.setAttribute(L,X[L]);Z0.prototype.copy.call(_,F),this.parser.assignFinalMaterial(_),q.push(_)}if(U.isGroup)return U.clear(),U.add(...q),U;return q[0]})}}var RY="glTF",y6=12,oH={JSON:1313821514,BIN:5130562};class kY{constructor(J){this.name=lJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,y6),Z=new TextDecoder;if(this.header={magic:Z.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==RY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let $=this.header.length-y6,W=new DataView(J,y6),H=0;while(H<$){let Y=W.getUint32(H,!0);H+=4;let X=W.getUint32(H,!0);if(H+=4,X===oH.JSON){let K=new Uint8Array(J,y6+H,Y);this.content=Z.decode(K)}else if(X===oH.BIN){let K=y6+H;this.body=J.slice(K,K+Y)}H+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class MY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let Z=this.json,$=this.dracoLoader,W=J.extensions[this.name].bufferView,H=J.extensions[this.name].attributes,Y={},X={},K={};for(let U in H){let G=Y$[U]||U.toLowerCase();Y[G]=H[U]}for(let U in J.attributes){let G=Y$[U]||U.toLowerCase();if(H[U]!==void 0){let E=Z.accessors[J.attributes[U]],q=J6[E.componentType];K[G]=q.name,X[G]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(G,E){$.decodeDracoFile(U,function(q){for(let F in q.attributes){let M=q.attributes[F],k=X[F];if(k!==void 0)M.normalized=k}G(q)},Y,K,T0,E)})})}}class DY{constructor(){this.name=lJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);return J.needsUpdate=!0,J}}class LY{constructor(){this.name=lJ.KHR_MESH_QUANTIZATION}}class U$ extends i8{constructor(J,Q,Z,$){super(J,Q,Z,$)}copySampleValue_(J){let Q=this.resultBuffer,Z=this.sampleValues,$=this.valueSize,W=J*$*3+$;for(let H=0;H!==$;H++)Q[H]=Z[W+H];return Q}interpolate_(J,Q,Z,$){let W=this.resultBuffer,H=this.sampleValues,Y=this.valueSize,X=Y*2,K=Y*3,U=$-Q,G=(Z-Q)/U,E=G*G,q=E*G,F=J*K,M=F-K,k=-2*q+3*E,N=q-E,O=1-k,_=N-E+G;for(let L=0;L!==Y;L++){let C=H[M+L+Y],j=H[M+L+X]*U,w=H[F+L+Y],A=H[F+L]*U;W[L]=O*C+_*j+k*w+N*A}return W}}var k1=new X8;class VY extends U${interpolate_(J,Q,Z,$){let W=super.interpolate_(J,Q,Z,$);return k1.fromArray(W).normalize().toArray(W),W}}var t0={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},J6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iH={9728:S8,9729:Y8,9984:B7,9985:p9,9986:E9,9987:j8},aH={33071:V7,33648:z7,10497:g9},$$={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Y$={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},J9={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M1={CUBICSPLINE:void 0,LINEAR:T7,STEP:VZ},W$={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function D1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new i9({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:m8});return J.DefaultMaterial}function M9(J,Q,Z){for(let $ in Z.extensions)if(J[$]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[$]=Z.extensions[$]}function k8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function L1(J,Q,Z){let $=!1,W=!1,H=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)$=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)H=!0;if($&&W&&H)break}if(!$&&!W&&!H)return Promise.resolve(J);let Y=[],X=[],K=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if($){let q=E.POSITION!==void 0?Z.getDependency("accessor",E.POSITION):J.attributes.position;Y.push(q)}if(W){let q=E.NORMAL!==void 0?Z.getDependency("accessor",E.NORMAL):J.attributes.normal;X.push(q)}if(H){let q=E.COLOR_0!==void 0?Z.getDependency("accessor",E.COLOR_0):J.attributes.color;K.push(q)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(K)]).then(function(U){let G=U[0],E=U[1],q=U[2];if($)J.morphAttributes.position=G;if(W)J.morphAttributes.normal=E;if(H)J.morphAttributes.color=q;return J.morphTargetsRelative=!0,J})}function V1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let Z=0,$=Q.weights.length;Z<$;Z++)J.morphTargetInfluences[Z]=Q.weights[Z];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let Z=Q.extras.targetNames;if(J.morphTargetInfluences.length===Z.length){J.morphTargetDictionary={};for(let $=0,W=Z.length;$<W;$++)J.morphTargetDictionary[Z[$]]=$}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z1(J){let Q,Z=J.extensions&&J.extensions[lJ.KHR_DRACO_MESH_COMPRESSION];if(Z)Q="draco:"+Z.bufferView+":"+Z.indices+":"+H$(Z.attributes);else Q=J.indices+":"+H$(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let $=0,W=J.targets.length;$<W;$++)Q+=":"+H$(J.targets[$]);return Q}function H$(J){let Q="",Z=Object.keys(J).sort();for(let $=0,W=Z.length;$<W;$++)Q+=Z[$]+":"+J[Z[$]]+";";return Q}function X$(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var _1=new yJ;class zY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new R1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let Z=!1,$=-1,W=!1,H=-1;if(typeof navigator<"u"){let Y=navigator.userAgent;Z=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);$=Z&&X?parseInt(X[1],10):-1,W=Y.indexOf("Firefox")>-1,H=W?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||Z&&$<17||W&&H<98)this.textureLoader=new a9(this.options.manager);else this.textureLoader=new r7(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new A6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let Z=this,$=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(H){return H._markDefs&&H._markDefs()}),Promise.all(this._invokeAll(function(H){return H.beforeRoot&&H.beforeRoot()})).then(function(){return Promise.all([Z.getDependencies("scene"),Z.getDependencies("animation"),Z.getDependencies("camera")])}).then(function(H){let Y={scene:H[0][$.scene||0],scenes:H[0],animations:H[1],cameras:H[2],asset:$.asset,parser:Z,userData:{}};return M9(W,Y,$),k8(Y,$),Promise.all(Z._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],Z=this.json.meshes||[];for(let $=0,W=Q.length;$<W;$++){let H=Q[$].joints;for(let Y=0,X=H.length;Y<X;Y++)J[H[Y]].isBone=!0}for(let $=0,W=J.length;$<W;$++){let H=J[$];if(H.mesh!==void 0){if(this._addNodeRef(this.meshCache,H.mesh),H.skin!==void 0)Z[H.mesh].isSkinnedMesh=!0}if(H.camera!==void 0)this._addNodeRef(this.cameraCache,H.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,Z){if(J.refs[Q]<=1)return Z;let $=Z.clone(),W=(H,Y)=>{let X=this.associations.get(H);if(X!=null)this.associations.set(Y,X);for(let[K,U]of H.children.entries())W(U,Y.children[K])};return W(Z,$),$.name+="_instance_"+J.uses[Q]++,$}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let Z=0;Z<Q.length;Z++){let $=J(Q[Z]);if($)return $}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let Z=[];for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)Z.push(W)}return Z}getDependency(J,Q){let Z=J+":"+Q,$=this.cache.get(Z);if(!$){switch(J){case"scene":$=this.loadScene(Q);break;case"node":$=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":$=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":$=this.loadAccessor(Q);break;case"bufferView":$=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":$=this.loadBuffer(Q);break;case"material":$=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":$=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":$=this.loadSkin(Q);break;case"animation":$=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":$=this.loadCamera(Q);break;default:if($=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!$)throw Error("Unknown type: "+J);break}this.cache.add(Z,$)}return $}getDependencies(J){let Q=this.cache.get(J);if(!Q){let Z=this,$=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all($.map(function(W,H){return Z.getDependency(J,H)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],Z=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[lJ.KHR_BINARY_GLTF].body);let $=this.options;return new Promise(function(W,H){Z.load(e8.resolveURL(Q.uri,$.path),W,void 0,function(){H(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function(Z){let $=Q.byteLength||0,W=Q.byteOffset||0;return Z.slice(W,W+$)})}loadAccessor(J){let Q=this,Z=this.json,$=this.json.accessors[J];if($.bufferView===void 0&&$.sparse===void 0){let H=$$[$.type],Y=J6[$.componentType],X=$.normalized===!0,K=new Y($.count*H);return Promise.resolve(new N0(K,H,X))}let W=[];if($.bufferView!==void 0)W.push(this.getDependency("bufferView",$.bufferView));else W.push(null);if($.sparse!==void 0)W.push(this.getDependency("bufferView",$.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",$.sparse.values.bufferView));return Promise.all(W).then(function(H){let Y=H[0],X=$$[$.type],K=J6[$.componentType],U=K.BYTES_PER_ELEMENT,G=U*X,E=$.byteOffset||0,q=$.bufferView!==void 0?Z.bufferViews[$.bufferView].byteStride:void 0,F=$.normalized===!0,M,k;if(q&&q!==G){let N=Math.floor(E/q),O="InterleavedBuffer:"+$.bufferView+":"+$.componentType+":"+N+":"+$.count,_=Q.cache.get(O);if(!_)M=new K(Y,N*q,$.count*q/U),_=new _6(M,q/U),Q.cache.add(O,_);k=new n9(_,X,E%q/U,F)}else{if(Y===null)M=new K($.count*X);else M=new K(Y,E,$.count*X);k=new N0(M,X,F)}if($.sparse!==void 0){let N=$$.SCALAR,O=J6[$.sparse.indices.componentType],_=$.sparse.indices.byteOffset||0,L=$.sparse.values.byteOffset||0,C=new O(H[1],_,$.sparse.count*N),j=new K(H[2],L,$.sparse.count*X);if(Y!==null)k=new N0(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let w=0,A=C.length;w<A;w++){let x=C[w];if(k.setX(x,j[w*X]),X>=2)k.setY(x,j[w*X+1]);if(X>=3)k.setZ(x,j[w*X+2]);if(X>=4)k.setW(x,j[w*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=F}return k})}loadTexture(J){let Q=this.json,Z=this.options,W=Q.textures[J].source,H=Q.images[W],Y=this.textureLoader;if(H.uri){let X=Z.manager.getHandler(H.uri);if(X!==null)Y=X}return this.loadTextureImage(J,W,Y)}loadTextureImage(J,Q,Z){let $=this,W=this.json,H=W.textures[J],Y=W.images[Q],X=(Y.uri||Y.bufferView)+":"+H.sampler;if(this.textureCache[X])return this.textureCache[X];let K=this.loadImageSource(Q,Z).then(function(U){if(U.flipY=!1,U.name=H.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let E=(W.samplers||{})[H.sampler]||{};return U.magFilter=iH[E.magFilter]||Y8,U.minFilter=iH[E.minFilter]||j8,U.wrapS=aH[E.wrapS]||g9,U.wrapT=aH[E.wrapT]||g9,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==S8&&U.minFilter!==Y8,$.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=K,K}loadImageSource(J,Q){let Z=this,$=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let H=$.images[J],Y=self.URL||self.webkitURL,X=H.uri||"",K=!1;if(H.bufferView!==void 0)X=Z.getDependency("bufferView",H.bufferView).then(function(G){K=!0;let E=new Blob([G],{type:H.mimeType});return X=Y.createObjectURL(E),X});else if(H.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(E,q){let F=E;if(Q.isImageBitmapLoader===!0)F=function(M){let k=new G0(M);k.needsUpdate=!0,E(k)};Q.load(e8.resolveURL(G,W.path),F,void 0,q)})}).then(function(G){if(K===!0)Y.revokeObjectURL(X);return k8(G,H),G.userData.mimeType=H.mimeType||B1(H.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,Z,$){let W=this;return this.getDependency("texture",Z.index).then(function(H){if(!H)return null;if(Z.texCoord!==void 0&&Z.texCoord>0)H=H.clone(),H.channel=Z.texCoord;if(W.extensions[lJ.KHR_TEXTURE_TRANSFORM]){let Y=Z.extensions!==void 0?Z.extensions[lJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=W.associations.get(H);H=W.extensions[lJ.KHR_TEXTURE_TRANSFORM].extendTexture(H,Y),W.associations.set(H,X)}}if($!==void 0)H.colorSpace=$;return J[Q]=H,H})}assignFinalMaterial(J){let{geometry:Q,material:Z}=J,$=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,H=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+Z.uuid,X=this.cache.get(Y);if(!X)X=new T6,b0.prototype.copy.call(X,Z),X.color.copy(Z.color),X.map=Z.map,X.sizeAttenuation=!1,this.cache.add(Y,X);Z=X}else if(J.isLine){let Y="LineBasicMaterial:"+Z.uuid,X=this.cache.get(Y);if(!X)X=new P6,b0.prototype.copy.call(X,Z),X.color.copy(Z.color),X.map=Z.map,this.cache.add(Y,X);Z=X}if($||W||H){let Y="ClonedMaterial:"+Z.uuid+":";if($)Y+="derivative-tangents:";if(W)Y+="vertex-colors:";if(H)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=Z.clone(),W)X.vertexColors=!0;if(H)X.flatShading=!0;if($){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get(Z))}Z=X}J.material=Z}getMaterialType(){return i9}loadMaterial(J){let Q=this,Z=this.json,$=this.extensions,W=Z.materials[J],H,Y={},X=W.extensions||{},K=[];if(X[lJ.KHR_MATERIALS_UNLIT]){let G=$[lJ.KHR_MATERIALS_UNLIT];H=G.getMaterialType(),K.push(G.extendParams(Y,W,Q))}else{let G=W.pbrMetallicRoughness||{};if(Y.color=new AJ(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;Y.color.setRGB(E[0],E[1],E[2],T0),Y.opacity=E[3]}if(G.baseColorTexture!==void 0)K.push(Q.assignTexture(Y,"map",G.baseColorTexture,F8));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)K.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),K.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));H=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),K.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,Y)})))}if(W.doubleSided===!0)Y.side=i0;let U=W.alphaMode||W$.OPAQUE;if(U===W$.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===W$.MASK)Y.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&H!==x0){if(K.push(Q.assignTexture(Y,"normalMap",W.normalTexture)),Y.normalScale=new pJ(1,1),W.normalTexture.scale!==void 0){let G=W.normalTexture.scale;Y.normalScale.set(G,G)}}if(W.occlusionTexture!==void 0&&H!==x0){if(K.push(Q.assignTexture(Y,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)Y.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&H!==x0){let G=W.emissiveFactor;Y.emissive=new AJ().setRGB(G[0],G[1],G[2],T0)}if(W.emissiveTexture!==void 0&&H!==x0)K.push(Q.assignTexture(Y,"emissiveMap",W.emissiveTexture,F8));return Promise.all(K).then(function(){let G=new H(Y);if(W.name)G.name=W.name;if(k8(G,W),Q.associations.set(G,{materials:J}),W.extensions)M9($,G,W);return G})}createUniqueName(J){let Q=oJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,Z=this.extensions,$=this.primitiveCache;function W(Y){return Z[lJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return rH(X,Y,Q)})}let H=[];for(let Y=0,X=J.length;Y<X;Y++){let K=J[Y],U=z1(K),G=$[U];if(G)H.push(G.promise);else{let E;if(K.extensions&&K.extensions[lJ.KHR_DRACO_MESH_COMPRESSION])E=W(K);else E=rH(new g0,K,Q);$[U]={primitive:K,promise:E},H.push(E)}}return Promise.all(H)}loadMesh(J){let Q=this,Z=this.json,$=this.extensions,W=Z.meshes[J],H=W.primitives,Y=[];for(let X=0,K=H.length;X<K;X++){let U=H[X].material===void 0?D1(this.cache):this.getDependency("material",H[X].material);Y.push(U)}return Y.push(Q.loadGeometries(H)),Promise.all(Y).then(function(X){let K=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let q=0,F=U.length;q<F;q++){let M=U[q],k=H[q],N,O=K[q];if(k.mode===t0.TRIANGLES||k.mode===t0.TRIANGLE_STRIP||k.mode===t0.TRIANGLE_FAN||k.mode===void 0){if(N=W.isSkinnedMesh===!0?new b7(M,O):new D0(M,O),N.isSkinnedMesh===!0)N.normalizeSkinWeights();if(k.mode===t0.TRIANGLE_STRIP)N.geometry=Z$(N.geometry,V6);else if(k.mode===t0.TRIANGLE_FAN)N.geometry=Z$(N.geometry,m9)}else if(k.mode===t0.LINES)N=new g7(M,O);else if(k.mode===t0.LINE_STRIP)N=new o9(M,O);else if(k.mode===t0.LINE_LOOP)N=new p7(M,O);else if(k.mode===t0.POINTS)N=new l7(M,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(N.geometry.morphAttributes).length>0)V1(N,W);if(N.name=Q.createUniqueName(W.name||"mesh_"+J),k8(N,W),k.extensions)M9($,N,k);Q.assignFinalMaterial(N),G.push(N)}for(let q=0,F=G.length;q<F;q++)Q.associations.set(G[q],{meshes:J,primitives:q});if(G.length===1){if(W.extensions)M9($,G[0],W);return G[0]}let E=new s0;if(W.extensions)M9($,E,W);Q.associations.set(E,{meshes:J});for(let q=0,F=G.length;q<F;q++)E.add(G[q]);return E})}loadCamera(J){let Q,Z=this.json.cameras[J],$=Z[Z.type];if(!$){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if(Z.type==="perspective")Q=new V0(o8.radToDeg($.yfov),$.aspectRatio||1,$.znear||1,$.zfar||2000000);else if(Z.type==="orthographic")Q=new t8(-$.xmag,$.xmag,$.ymag,-$.ymag,$.znear,$.zfar);if(Z.name)Q.name=this.createUniqueName(Z.name);return k8(Q,Z),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],Z=[];for(let $=0,W=Q.joints.length;$<W;$++)Z.push(this._loadNodeShallow(Q.joints[$]));if(Q.inverseBindMatrices!==void 0)Z.push(this.getDependency("accessor",Q.inverseBindMatrices));else Z.push(null);return Promise.all(Z).then(function($){let W=$.pop(),H=$,Y=[],X=[];for(let K=0,U=H.length;K<U;K++){let G=H[K];if(G){Y.push(G);let E=new yJ;if(W!==null)E.fromArray(W.array,K*16);X.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[K])}return new w6(Y,X)})}loadAnimation(J){let Q=this.json,Z=this,$=Q.animations[J],W=$.name?$.name:"animation_"+J,H=[],Y=[],X=[],K=[],U=[];for(let G=0,E=$.channels.length;G<E;G++){let q=$.channels[G],F=$.samplers[q.sampler],M=q.target,k=M.node,N=$.parameters!==void 0?$.parameters[F.input]:F.input,O=$.parameters!==void 0?$.parameters[F.output]:F.output;if(M.node===void 0)continue;H.push(this.getDependency("node",k)),Y.push(this.getDependency("accessor",N)),X.push(this.getDependency("accessor",O)),K.push(F),U.push(M)}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(K),Promise.all(U)]).then(function(G){let E=G[0],q=G[1],F=G[2],M=G[3],k=G[4],N=[];for(let _=0,L=E.length;_<L;_++){let C=E[_],j=q[_],w=F[_],A=M[_],x=k[_];if(C===void 0)continue;if(C.updateMatrix)C.updateMatrix();let z=Z._createAnimationTracks(C,j,w,A,x);if(z)for(let V=0;V<z.length;V++)N.push(z[V])}let O=new n7(W,void 0,N);return k8(O,$),O})}createNodeMesh(J){let Q=this.json,Z=this,$=Q.nodes[J];if($.mesh===void 0)return null;return Z.getDependency("mesh",$.mesh).then(function(W){let H=Z._getNodeRef(Z.meshCache,$.mesh,W);if($.weights!==void 0)H.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,K=$.weights.length;X<K;X++)Y.morphTargetInfluences[X]=$.weights[X]});return H})}loadNode(J){let Q=this.json,Z=this,$=Q.nodes[J],W=Z._loadNodeShallow(J),H=[],Y=$.children||[];for(let K=0,U=Y.length;K<U;K++)H.push(Z.getDependency("node",Y[K]));let X=$.skin===void 0?Promise.resolve(null):Z.getDependency("skin",$.skin);return Promise.all([W,Promise.all(H),X]).then(function(K){let U=K[0],G=K[1],E=K[2];if(E!==null)U.traverse(function(q){if(!q.isSkinnedMesh)return;q.bind(E,_1)});for(let q=0,F=G.length;q<F;q++)U.add(G[q]);return U})}_loadNodeShallow(J){let Q=this.json,Z=this.extensions,$=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],H=W.name?$.createUniqueName(W.name):"",Y=[],X=$._invokeOne(function(K){return K.createNodeMesh&&K.createNodeMesh(J)});if(X)Y.push(X);if(W.camera!==void 0)Y.push($.getDependency("camera",W.camera).then(function(K){return $._getNodeRef($.cameraCache,W.camera,K)}));return $._invokeAll(function(K){return K.createNodeAttachment&&K.createNodeAttachment(J)}).forEach(function(K){Y.push(K)}),this.nodeCache[J]=Promise.all(Y).then(function(K){let U;if(W.isBone===!0)U=new C6;else if(K.length>1)U=new s0;else if(K.length===1)U=K[0];else U=new Z0;if(U!==K[0])for(let G=0,E=K.length;G<E;G++)U.add(K[G]);if(W.name)U.userData.name=W.name,U.name=H;if(k8(U,W),W.extensions)M9(Z,U,W);if(W.matrix!==void 0){let G=new yJ;G.fromArray(W.matrix),U.applyMatrix4(G)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!$.associations.has(U))$.associations.set(U,{});else if(W.mesh!==void 0&&$.meshCache.refs[W.mesh]>1){let G=$.associations.get(U);$.associations.set(U,{...G})}return $.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,Z=this.json.scenes[J],$=this,W=new s0;if(Z.name)W.name=$.createUniqueName(Z.name);if(k8(W,Z),Z.extensions)M9(Q,W,Z);let H=Z.nodes||[],Y=[];for(let X=0,K=H.length;X<K;X++)Y.push($.getDependency("node",H[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++)W.add(X[U]);let K=(U)=>{let G=new Map;for(let[E,q]of $.associations)if(E instanceof b0||E instanceof G0)G.set(E,q);return U.traverse((E)=>{let q=$.associations.get(E);if(q!=null)G.set(E,q)}),G};return $.associations=K(W),W})}_createAnimationTracks(J,Q,Z,$,W){let H=[],Y=J.name?J.name:J.uuid,X=[];if(J9[W.path]===J9.weights)J.traverse(function(E){if(E.morphTargetInfluences)X.push(E.name?E.name:E.uuid)});else X.push(Y);let K;switch(J9[W.path]){case J9.weights:K=T8;break;case J9.rotation:K=y8;break;case J9.translation:case J9.scale:K=A8;break;default:switch(Z.itemSize){case 1:K=T8;break;case 2:case 3:default:K=A8;break}break}let U=$.interpolation!==void 0?M1[$.interpolation]:T7,G=this._getArrayFromAccessor(Z);for(let E=0,q=X.length;E<q;E++){let F=new K(X[E]+"."+J9[W.path],Q.array,G,U);if($.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);H.push(F)}return H}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let Z=X$(Q.constructor),$=new Float32Array(Q.length);for(let W=0,H=Q.length;W<H;W++)$[W]=Q[W]*Z;Q=$}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function(Z){return new(this instanceof y8?VY:U$)(this.times,this.values,this.getValueSize()/3,Z)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function C1(J,Q,Z){let $=Q.attributes,W=new a0;if($.POSITION!==void 0){let X=Z.json.accessors[$.POSITION],K=X.min,U=X.max;if(K!==void 0&&U!==void 0){if(W.set(new S(K[0],K[1],K[2]),new S(U[0],U[1],U[2])),X.normalized){let G=X$(J6[X.componentType]);W.min.multiplyScalar(G),W.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let H=Q.targets;if(H!==void 0){let X=new S,K=new S;for(let U=0,G=H.length;U<G;U++){let E=H[U];if(E.POSITION!==void 0){let q=Z.json.accessors[E.POSITION],F=q.min,M=q.max;if(F!==void 0&&M!==void 0){if(K.setX(Math.max(Math.abs(F[0]),Math.abs(M[0]))),K.setY(Math.max(Math.abs(F[1]),Math.abs(M[1]))),K.setZ(Math.max(Math.abs(F[2]),Math.abs(M[2]))),q.normalized){let k=X$(J6[q.componentType]);K.multiplyScalar(k)}X.max(K)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(X)}J.boundingBox=W;let Y=new f0;W.getCenter(Y.center),Y.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=Y}function rH(J,Q,Z){let $=Q.attributes,W=[];function H(Y,X){return Z.getDependency("accessor",Y).then(function(K){J.setAttribute(X,K)})}for(let Y in $){let X=Y$[Y]||Y.toLowerCase();if(X in J.attributes)continue;W.push(H($[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=Z.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});W.push(Y)}if(mJ.workingColorSpace!==T0&&"COLOR_0"in $)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mJ.workingColorSpace}" not supported.`);return k8(J,Q),C1(J,Q,Z),Promise.all(W).then(function(){return Q.targets!==void 0?L1(J,Q.targets,Z):J})}var N$={miko:{no:"01",name:"巫女",subtitle:"三神御主"},parasol:{no:"02",name:"蓝伞",subtitle:"羁绊皮肤"},nurse:{no:"03",name:"护士",subtitle:"小护士"},idol:{no:"04",name:"歌姬",subtitle:"魔旅歌姬"}},BY=["subject","background","text","lineart","back"],E$=(J,Q)=>`./cards/${J}/${Q}.webp`,h6={scale:1,depth:0,fxDepth:0.8,bgDepth:-0.4,foil:0.52},O$={pearl:0,silver:1,original:2,gold:3},w1={pearl:"珠光",silver:"银箔",gold:"烫金",original:"原画"},d0=(J)=>document.getElementById(J),w0=d0("stage"),f8=matchMedia("(prefers-reduced-motion: reduce)"),f6=new f7,D8=new t8(-6,6,6,-6,0.1,100);D8.position.set(0,0,20);var I1=new yJ,q0,C0,Q9,HQ;var _Y,CY=0,$Q=0,Z6=!1,L8=!1,G$=!1,b6="original",$6=null,wY=0,M8=-0.035,K8=-0.15,WQ={x:0,y:0},P1=`
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - uv.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,F$=`
precision highp float;
varying vec2 vUv;
uniform float uTime, uFoil, uScale, uDepth, uBgDepth, uFinish;
uniform vec3 uView;
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float inside(vec2 p) { return step(0.,p.x)*step(0.,p.y)*step(p.x,1.)*step(p.y,1.); }
vec2 parallax(vec2 uv, float depth) {
  return uv + uView.xy / max(abs(uView.z), .4) * depth * .10;
}
vec3 spectrum(float phase) {
  return .66 + .25 * cos(6.28318 * (phase + vec3(0., .33, .67)));
}
// Only "original" (uFinish ~ 2) disables the foil; pearl/silver/gold all use it.
float strength() { return abs(uFinish - 2.0) < 0.05 ? 0. : uFoil; }
vec3 film(vec2 uv) {
  float phase = uv.x * .85 + uv.y * .55 + uView.x * 1.5 - uView.y * .9;
  if (uFinish > 2.5) {
    // 烫金 (gold foil): warm gold laminate that shifts with the viewing angle.
    float hi = 0.5 + 0.5 * sin(phase * 6.28318);
    float glint = 0.5 + 0.5 * cos((phase + 0.25) * 6.28318);
    vec3 deep = vec3(.72, .50, .20);
    vec3 bright = vec3(1.00, .90, .60);
    return mix(deep, bright, hi * .7 + glint * .3);
  }
  vec3 color = spectrum(phase);
  return mix(color, vec3(dot(color,vec3(.2126,.7152,.0722))), step(.5,uFinish));
}
float sweep(vec2 uv) {
  return pow(.5+.5*sin((uv.x*.72+uv.y*.45+uView.x*1.2+uView.y*.6)*6.283),10.);
}
`,T1=F$+`
uniform sampler2D tSubject, tBackground, tText, tLine;
void main() {
  vec2 uv = vUv;
  vec2 su = (parallax(uv,uDepth)-.5)*uScale+.5;
  vec2 bu = parallax(uv,uBgDepth);
  vec4 subject = texture2D(tSubject,clamp(su,0.,1.));
  subject.a *= inside(su);
  vec3 bg = texture2D(tBackground,clamp(bu,0.,1.)).rgb;
  vec3 col = mix(bg,subject.rgb,subject.a);
  if (uFinish > 2.5) col = col * vec3(1.02, .95, .78) + vec3(.05, .012, 0.0);
  vec3 foil = film(uv);
  float amount = strength();
  float luminance = dot(col,vec3(.2126,.7152,.0722));
  float band = sweep(uv);
  // Laminate changes with the card-local viewing direction; black print stays readable.
  float goldBoost = uFinish > 2.5 ? 1.7 : 1.0;
  col *= 1. - amount * .21 * (1.-foil) * (.2 + band*.8);
  col += foil * amount * band * goldBoost * (.065 + .11*(1.-luminance));
  float edge = 1.-smoothstep(.015,.06,min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y)));
  col = mix(col,foil*.75+.21,edge*amount*(uFinish > 2.5 ? .42 : .3));
  vec2 cell = floor(uv*vec2(480.,720.));
  float flake = step(.994,hash(cell))*pow(.5+.5*sin(hash(cell+8.)*30.+uView.x*20.+uTime*.6),10.);
  col += foil*flake*amount*.13;
  float line = 1.-smoothstep(.06,.25,texture2D(tLine,clamp(su,0.,1.)).r);
  col += line*inside(su)*subject.a*band*amount*.055;
  vec4 text = texture2D(tText,uv);
  col = mix(col,text.rgb,text.a);
  gl_FragColor = vec4(pow(clamp(col,0.,1.),vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`,A1=F$+`
void main() {
  vec3 col = mix(vec3(.66,.69,.67),film(vUv)*.6+.35,strength()*.7);
  gl_FragColor=vec4(pow(col,vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`,S1=F$+`
uniform sampler2D tBack;
void main() {
  vec2 uv=vec2(1.-vUv.x,vUv.y);
  vec4 art=texture2D(tBack,uv);
  vec3 col=vec3(.956,.961,.946);
  col*=1.-strength()*.12*(1.-film(vUv));
  col+=film(vUv)*sweep(vUv)*strength()*.055;
  col=mix(col,art.rgb,art.a);
  gl_FragColor=vec4(pow(clamp(col,0.,1.),vec3(2.2)),1.);
  #include <colorspace_fragment>
}
`;function q$(J){clearTimeout(_Y),d0("notice").textContent=J,d0("notice").hidden=!1,_Y=setTimeout(()=>d0("notice").hidden=!0,2600)}function j1(){let J=document.createElement("canvas");J.width=J.height=256;let Q=J.getContext("2d"),Z=Q.createRadialGradient(128,128,6,128,128,128);Z.addColorStop(0,"rgba(29,35,25,0.13)"),Z.addColorStop(0.4,"rgba(29,35,25,0.055)"),Z.addColorStop(1,"rgba(29,35,25,0)"),Q.fillStyle=Z,Q.fillRect(0,0,256,256);let $=new d7(J);$.colorSpace=O8,HQ=new D0(new N9(8.8,11.8),new x0({map:$,transparent:!0,depthWrite:!1})),HQ.position.set(0.28,-0.48,-0.5),f6.add(HQ)}function v1(){let J={antialias:!0,alpha:!0,premultipliedAlpha:!1};try{return new ZQ({...J,powerPreference:"high-performance"})}catch{return new ZQ({...J,failIfMajorPerformanceCaveat:!1})}}function y1(){let J=new URLSearchParams(location.search).get("card");return J in N$?J:"miko"}async function h1(){let J=y1();try{q0=v1()}catch(X){TY(J,X);return}q0.setClearColor(0,0),q0.setPixelRatio(Math.min(devicePixelRatio,2)),q0.outputColorSpace=F8,q0.toneMapping=H8,q0.domElement.setAttribute("aria-hidden","true"),w0.append(q0.domElement);let Q=new s9(new Uint8Array([0,0,0,0]),1,1);Q.needsUpdate=!0,Q9={tSubject:{value:Q},tBackground:{value:Q},tText:{value:Q},tLine:{value:Q},tBack:{value:Q},uTime:{value:0},uView:{value:new S(0,0,1)},uFoil:{value:h6.foil},uScale:{value:h6.scale},uDepth:{value:h6.depth},uBgDepth:{value:h6.bgDepth},uFinish:{value:O$[b6]}};let Z=(X)=>new r0({uniforms:Q9,vertexShader:P1,fragmentShader:X}),$={web_front:Z(T1),web_back:Z(S1),web_edge:Z(A1),web_gold:new x0({color:"#34105d"})},[W]=await Promise.all([new K$().loadAsync("./assets/card.glb"),SY(J)]);C0=new s0,C0.add(W.scene),f6.add(C0);let H=0;if(W.scene.traverse((X)=>{if(!X.isMesh)return;let K=X.material?.name;if(["web_subject","web_effects","web_text"].includes(K)){X.visible=!1;return}if(K==="web_front")H++;X.material=$[K]||$.web_edge}),!H)throw Error("卡片模型缺少正面材质");if(j1(),f1(),new ResizeObserver(IY).observe(w0),IY(),q0.compile(f6,D8),q0.render(f6,D8),(q0.info.programs||[]).some((X)=>X.diagnostics&&!X.diagnostics.runnable)){q0.dispose(),q0.domElement.remove(),q0=null,TY($6,Error("当前设备无法显示卡面材质"));return}if(d0("loading").remove(),f8.matches)C0.rotation.set(M8,K8,0);else C0.rotation.set(0.5,K8-Math.PI*2,0),C0.position.y=-9,document.body.classList.add("is-intro"),setTimeout(()=>document.body.classList.remove("is-intro"),1900);R$(b6),Q6(!f8.matches),q0.setAnimationLoop(b1),vY(),window.__holo={ready:!0,getState:()=>({card:$6,flipped:L8,finish:b6,auto:Z6})}}async function SY(J){let Q=++wY;jY(J);let Z=new a9,$=await Promise.all(BY.map((H)=>Z.loadAsync(E$(J,H))));if(Q!==wY){$.forEach((H)=>H.dispose());return}let W={subject:"tSubject",background:"tBackground",text:"tText",lineart:"tLine",back:"tBack"};BY.forEach((H,Y)=>{let X=$[Y];X.colorSpace=O8,X.anisotropy=Math.min(8,q0.capabilities.getMaxAnisotropy());let K=Q9[W[H]].value;if(Q9[W[H]].value=X,K.isTexture&&!K.isDataTexture)K.dispose()}),$6=J}function jY(J){document.querySelectorAll("[data-card]").forEach((Z)=>Z.setAttribute("aria-pressed",String(Z.dataset.card===J)));let Q=N$[J];d0("card-name").textContent=`${Q.no} / ${Q.subtitle}`,document.title=`照 · ${Q.subtitle} | 吉星派对全息闪卡`;try{history.replaceState(null,"",`?card=${J}`)}catch{}}function vY(){document.querySelectorAll("button[disabled]").forEach((J)=>J.disabled=!1)}function IY(){if(!q0)return;let{clientWidth:J,clientHeight:Q}=w0,Z=J/Q,$=Math.max(5.45,4.5/Z);D8.left=-$*Z,D8.right=$*Z,D8.top=$,D8.bottom=-$,D8.updateProjectionMatrix(),q0.setSize(J,Q)}function Q6(J){Z6=J}function R$(J){if(b6=J,Q9)Q9.uFinish.value=O$[J];document.querySelectorAll("[data-finish]").forEach((Q)=>Q.setAttribute("aria-pressed",String(Q.dataset.finish===J))),d0("finish-name").textContent=w1[J]}function yY(){d0("front").setAttribute("aria-pressed",String(!L8)),d0("back").setAttribute("aria-pressed",String(L8))}function PY(J=!L8){L8=J,Q6(!1),K8=L8?Math.PI:0,M8=0,yY()}function hY({onCard:J,onFace:Q,onFinish:Z}){document.querySelectorAll("[data-card]").forEach(($)=>$.onclick=()=>J($.dataset.card)),d0("front").onclick=()=>Q(!1),d0("back").onclick=()=>Q(!0),document.querySelectorAll("[data-finish]").forEach(($)=>$.onclick=()=>Z($.dataset.finish))}function f1(){hY({onCard:(Q)=>{if(Q===$6)return;SY(Q).then(()=>{if(!f8.matches&&$6===Q)C0.rotation.y-=Math.PI*2}).catch(()=>q$("这张卡暂时无法加载，请重试"))},onFace:PY,onFinish:R$}),w0.addEventListener("pointerdown",(Q)=>{if(Q.button!==0)return;G$=!0,Q6(!1),WQ={x:Q.clientX,y:Q.clientY},w0.setPointerCapture(Q.pointerId),w0.classList.add("dragging"),w0.focus({preventScroll:!0})}),w0.addEventListener("pointermove",(Q)=>{if(!G$)return;let Z=L8?Math.PI:0;K8=o8.clamp(K8+(Q.clientX-WQ.x)*0.006,Z-0.65,Z+0.65),M8=o8.clamp(M8+(Q.clientY-WQ.y)*0.004,-0.36,0.36),WQ={x:Q.clientX,y:Q.clientY}});let J=()=>{G$=!1,w0.classList.remove("dragging")};["pointerup","pointercancel","lostpointercapture"].forEach((Q)=>w0.addEventListener(Q,J)),w0.addEventListener("keydown",(Q)=>{let Z=Q.key.length===1?Q.key.toLowerCase():Q.key;if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","f"," "].includes(Z))return;if(Q.preventDefault(),Z===" ")return Q6(!Z6);if(Z==="f")return PY();Q6(!1);let $=L8?Math.PI:0;if(Z==="ArrowLeft")K8-=0.08;if(Z==="ArrowRight")K8+=0.08;if(Z==="ArrowUp")M8-=0.06;if(Z==="ArrowDown")M8+=0.06;K8=o8.clamp(K8,$-0.65,$+0.65),M8=o8.clamp(M8,-0.36,0.36)}),f8.addEventListener("change",()=>f8.matches&&Q6(!1)),q0.domElement.addEventListener("webglcontextlost",(Q)=>{Q.preventDefault(),q0.setAnimationLoop(null),q$("图形显示已暂停，请刷新页面恢复")})}function b1(J){let Q=Math.min((J-CY)/1000,0.06)||0;if(CY=J,document.hidden)return;if(!f8.matches||Z6)$Q+=Q;if(Z6)K8=Math.sin($Q*0.55)*0.42-0.025,M8=Math.sin($Q*0.53)*0.055-0.018;let Z=f8.matches?1:1-Math.exp(-Q*8);C0.rotation.x+=(M8-C0.rotation.x)*Z,C0.rotation.y+=(K8-C0.rotation.y)*Z,C0.position.y+=(0-C0.position.y)*Z,C0.updateMatrixWorld(!0),Q9.uView.value.copy(D8.position).applyMatrix4(I1.copy(C0.matrixWorld).invert()).normalize(),Q9.uTime.value=f8.matches&&!Z6?0:$Q,HQ.scale.x=1-Math.abs(Math.sin(C0.rotation.y))*0.14,q0.render(f6,D8)}function TY(J,Q){console.warn("[holo-card] WebGL unavailable, using CSS-3D fallback:",Q),d0("loading")?.remove();let Z={background:-48,subject:-8,lineart:24,text:28},$=document.createElement("div");$.className="fallback3d",$.innerHTML='<div class="flipper3d"><div class="card3d"><div class="face3d front3d"></div><div class="face3d back3d"></div></div></div>';let W=$.querySelector(".flipper3d"),H=$.querySelector(".card3d"),Y=$.querySelector(".front3d"),X=$.querySelector(".back3d");w0.append($);let K=(_)=>{$6=_,jY(_),Y.replaceChildren();for(let C of["background","subject","lineart","text"]){let j=document.createElement("div");if(j.className="layer3d",j.style.transform=`translateZ(${Z[C]}px)`,C==="lineart")j.style.mixBlendMode="multiply";let w=document.createElement("img");w.src=E$(_,C),w.alt=C==="subject"?`照 · ${N$[_].subtitle}`:"",j.append(w),Y.append(j)}let L=document.createElement("div");L.className="foil3d",Y.append(L),Y.style.setProperty("--foil-amount",h6.foil),X.style.background=`url(${E$(_,"back")}) center / cover`},U=(_)=>{Y.classList.remove(...Object.keys(O$).map((L)=>"finish-"+L)),Y.classList.add("finish-"+_),R$(_)},G=-0.03,E=-0.06,q=0,F=0,M=0,k=0,N=0;w0.addEventListener("pointermove",(_)=>{let L=w0.getBoundingClientRect();G=Math.max(-0.5,Math.min(0.5,((_.clientY-L.top)/L.height-0.5)*0.9)),E=Math.max(-0.5,Math.min(0.5,((_.clientX-L.left)/L.width-0.5)*1.1)),N=performance.now();let C=H.getBoundingClientRect();Y.style.setProperty("--mx",Math.round((_.clientX-C.left)/C.width*100)+"%"),Y.style.setProperty("--my",Math.round((_.clientY-C.top)/C.height*100)+"%")}),w0.addEventListener("pointerleave",()=>N=0);let O=(_)=>{if(!f8.matches&&_-N>1500){let L=_/1000;G=Math.sin(L*0.7)*0.07+0.05,E=Math.sin(L*0.55)*0.11-0.18}q+=(G-q)*0.08,F+=(E-F)*0.08,M+=(k-M)*0.12,W.style.transform=`rotateX(${q.toFixed(4)}rad) rotateY(${F.toFixed(4)}rad)`,H.style.transform=`rotateY(${M.toFixed(4)}rad)`,requestAnimationFrame(O)};requestAnimationFrame(O),hY({onCard:K,onFace:(_)=>{L8=_,k=L8?Math.PI:0,yY()},onFinish:U}),K(J),U(b6),vY(),q$("浏览器未开启 WebGL：已用轻量 3D 模式显示"),window.__holo={ready:!1,fallback3d:!0,error:String(Q)}}function x1(J){let Q=d0("loading");if(!Q)return;Q.classList.add("error"),Q.setAttribute("role","alert");let Z=document.createElement("span");Z.textContent=J;let $=document.createElement("button");$.textContent="重新加载",$.onclick=()=>location.reload(),Q.replaceChildren(Z,$),window.__holo={ready:!1,error:J}}var AY=!1;Promise.race([h1().then(()=>AY=!0),new Promise((J,Q)=>setTimeout(()=>Q(Error("卡片加载超时，请检查网络或刷新重试")),12000))]).catch((J)=>{if(AY)return;console.error(J),x1(`卡片暂时无法加载。
`+J.message)});
