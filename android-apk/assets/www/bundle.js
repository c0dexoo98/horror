"use strict";(()=>{var ju=Object.defineProperty,pm=Object.defineProperties;var mm=Object.getOwnPropertyDescriptors;var $u=Object.getOwnPropertySymbols;var gm=Object.prototype.hasOwnProperty,ym=Object.prototype.propertyIsEnumerable;var Ju=(s,e,t)=>e in s?ju(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,ti=(s,e)=>{for(var t in e||(e={}))gm.call(e,t)&&Ju(s,t,e[t]);if($u)for(var t of $u(e))ym.call(e,t)&&Ju(s,t,e[t]);return s},qr=(s,e)=>pm(s,mm(e));var xm=(s,e)=>{for(var t in e)ju(s,t,{get:e[t],enumerable:!0})};var Bd=0,Sh=1,Hd=2;var Is=1,zd=2,Mr=3,fs=0,Ci=1,Ei=2,Ls=0,Tr=1,ps=2,wh=3,Rh=4,Vd=5;var Ns=100,Gd=101,Wd=102,qd=103,Xd=104,Yd=200,Kd=201,Zd=202,$d=203,Ah=204,Ch=205,Jd=206,jd=207,Qd=208,ef=209,tf=210,nf=211,sf=212,rf=213,of=214,za=0,Va=1,Ga=2,cr=3,Wa=4,qa=5,Xa=6,Ya=7,Ph=0,af=1,lf=2,Sn=0,Ih=1,Lh=2,Nh=3,Do=4,kh=5,Dh=6,Oh=7;var Uh=300,ks=301,Sr=302,El=303,Ml=304,as=1e3,xn=1001,Ka=1002,ci=1003,cf=1004;var Oo=1005;var wi=1006,Tl=1007;var Vn=1008;var Di=1009,Fh=1010,Bh=1011,wr=1012,Sl=1013,ln=1014,Zi=1015,cn=1016,wl=1017,Rl=1018,Ds=1020,Hh=35902,zh=35899,Vh=1021,Gh=1022,hn=1023,Un=1026,Gn=1027,Al=1028,Cl=1029,ms=1030,Pl=1031;var Il=1033,Uo=33776,Fo=33777,Bo=33778,Ho=33779,Ll=35840,Nl=35841,kl=35842,Dl=35843,Ol=36196,Ul=37492,Fl=37496,Bl=37488,Hl=37489,zo=37490,zl=37491,Vl=37808,Gl=37809,Wl=37810,ql=37811,Xl=37812,Yl=37813,Kl=37814,Zl=37815,$l=37816,Jl=37817,jl=37818,Ql=37819,ec=37820,tc=37821,ic=36492,nc=36494,sc=36495,rc=36283,oc=36284,Vo=36285,ac=36286;var ao=2300,Za=2301,Ba=2302,uh=2303,dh=2400,fh=2401,ph=2402;var hf=3200;var lc=0,uf=1,Wn="",Ft="srgb",lo="srgb-linear",co="linear",Mt="srgb";var Ha=7680;var df=519,ff=512,pf=513,mf=514,Wh=515,gf=516,yf=517,qh=518,Xh=519,Yh=35044;var Kh="300 es",qi=2e3,hr=2001;function vm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function _m(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ho(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xf(){let s=ho("canvas");return s.style.display="block",s}var Qu={},ur=null;function uo(...s){let e="THREE."+s.shift();ur?ur("log",e,...s):console.log(e,...s)}function vf(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ve(...s){s=vf(s);let e="THREE."+s.shift();if(ur)ur("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function We(...s){s=vf(s);let e="THREE."+s.shift();if(ur)ur("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function io(...s){let e=s.join(" ");e in Qu||(Qu[e]=!0,Ve(...s))}function _f(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var bf={[za]:za,[Ga]:Xa,[Wa]:Wa,[cr]:qa,[Va]:Va,[Xa]:Ga,[Ya]:Ya,[qa]:cr},vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,e);e.target=null}}},vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ed=1234567,no=Math.PI/180,Ss=180/Math.PI;function qn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vi[s&255]+vi[s>>8&255]+vi[s>>16&255]+vi[s>>24&255]+"-"+vi[e&255]+vi[e>>8&255]+"-"+vi[e>>16&15|64]+vi[e>>24&255]+"-"+vi[t&63|128]+vi[t>>8&255]+"-"+vi[t>>16&255]+vi[t>>24&255]+vi[i&255]+vi[i>>8&255]+vi[i>>16&255]+vi[i>>24&255]).toLowerCase()}function lt(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function bm(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Em(s,e,t){return s!==e?(t-s)/(e-s):0}function so(s,e,t){return(1-t)*s+t*e}function Mm(s,e,t,i){return so(s,e,1-Math.exp(-t*i))}function Tm(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function Sm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Am(s,e){return s+Math.random()*(e-s)}function Cm(s){return s*(.5-Math.random())}function Pm(s){s!==void 0&&(ed=s);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Im(s){return s*no}function Lm(s){return s*Ss}function Nm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function km(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $h(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dm(s,e,t,i,n){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),u=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(n){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function cc(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jh(s,e){if(e.constructor===Float32Array)return s;let t=cc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function jh(s,e){if(e.constructor===Float32Array)return s;let t=cc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}var hc={DEG2RAD:no,RAD2DEG:Ss,generateUUID:qn,clamp:lt,euclideanModulo:Zh,mapLinear:bm,inverseLerp:Em,lerp:so,damp:Mm,pingpong:Tm,smoothstep:Sm,smootherstep:wm,randInt:Rm,randFloat:Am,randFloatSpread:Cm,seededRandom:Pm,degToRad:Im,radToDeg:Lm,isPowerOfTwo:Nm,ceilPowerOfTwo:km,floorPowerOfTwo:$h,setQuaternionFromProperEuler:Dm,normalize:jh,denormalize:Jh},su=class su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*n+e.x,this.y=r*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var Ce=su,_n=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);m=Math.sin(m*v)/T,a=Math.sin(a*v)/T,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+g*a,d=d*m+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-a*f,e[t+2]=c*g+h*f+a*u-l*d,e[t+3]=h*g-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+n*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-r*n),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var M=ru,zc=new M,td=new _n,ou=class ou{constructor(e,t,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c)}set(e,t,i,n,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],p=n[3],m=n[6],v=n[1],T=n[4],E=n[7],C=n[2],w=n[5],y=n[8];return r[0]=o*x+a*v+l*C,r[3]=o*p+a*T+l*w,r[6]=o*m+a*E+l*y,r[1]=c*x+h*v+d*C,r[4]=c*p+h*T+d*w,r[7]=c*m+h*E+d*y,r[2]=u*x+f*v+g*C,r[5]=u*p+f*T+g*w,r[8]=u*m+f*E+g*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*o)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return io("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vc.makeScale(e,t)),this}rotate(e){return io("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vc.makeRotation(-e)),this}translate(e,t){return io("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ou.prototype.isMatrix3=!0;var Je=ou,Vc=new Je,id=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Om(){let s={enabled:!0,workingColorSpace:lo,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Mt&&(n.r=On(n.r),n.g=On(n.g),n.b=On(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(n.r=ar(n.r),n.g=ar(n.g),n.b=ar(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Wn?co:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[lo]:{primaries:e,whitePoint:i,transfer:co,toXYZ:id,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:id,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}var ut=Om();function On(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Gs,$a=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gs===void 0&&(Gs=ho("canvas")),Gs.width=e.width,Gs.height=e.height;let n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Gs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ho("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Um=0,dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Gc(n[o].image)):r.push(Gc(n[o]))}else r=Gc(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Gc(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?$a.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var Fm=0,Wc=new M,Ri=class s extends vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=xn,n=xn,r=wi,o=Vn,a=hn,l=Di,c=s.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=qn(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case Ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case Ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ri.DEFAULT_IMAGE=null;Ri.DEFAULT_MAPPING=Uh;Ri.DEFAULT_ANISOTROPY=1;var au=class au{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,E=(f+1)/2,C=(m+1)/2,w=(h+u)/4,y=(d+x)/4,S=(g+p)/4;return T>E&&T>C?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=w/i,r=y/i):E>C?E<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(E),i=w/n,r=S/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=y/r,n=S/r),this.set(i,n,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};au.prototype.isVector4=!0;var zt=au,Ja=class extends vn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let n=i.count;for(let r=0;r<n;r++)this.textures[r]=new Ri({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:wi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends Ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fo=class extends Ri{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ja=class extends Ri{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bl=class bl{constructor(e,t,i,n,r,o,a,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,o,a,l,c,h,d,u,f,g,x,p)}set(e,t,i,n,r,o,a,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-a*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*a,t[4]=-o*d,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=o*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,Hm)}lookAt(e,t,i){let n=this.elements;return Fi.subVectors(e,t),Fi.lengthSq()===0&&(Fi.z=1),Fi.normalize(),is.crossVectors(i,Fi),is.lengthSq()===0&&(Math.abs(i.z)===1?Fi.x+=1e-4:Fi.z+=1e-4,Fi.normalize(),is.crossVectors(i,Fi)),is.normalize(),ua.crossVectors(Fi,is),n[0]=is.x,n[4]=ua.x,n[8]=Fi.x,n[1]=is.y,n[5]=ua.y,n[9]=Fi.y,n[2]=is.z,n[6]=ua.z,n[10]=Fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],v=i[3],T=i[7],E=i[11],C=i[15],w=n[0],y=n[4],S=n[8],L=n[12],P=n[1],k=n[5],U=n[9],q=n[13],R=n[2],F=n[6],H=n[10],K=n[14],le=n[3],Y=n[7],D=n[11],B=n[15];return r[0]=o*w+a*P+l*R+c*le,r[4]=o*y+a*k+l*F+c*Y,r[8]=o*S+a*U+l*H+c*D,r[12]=o*L+a*q+l*K+c*B,r[1]=h*w+d*P+u*R+f*le,r[5]=h*y+d*k+u*F+f*Y,r[9]=h*S+d*U+u*H+f*D,r[13]=h*L+d*q+u*K+f*B,r[2]=g*w+x*P+p*R+m*le,r[6]=g*y+x*k+p*F+m*Y,r[10]=g*S+x*U+p*H+m*D,r[14]=g*L+x*q+p*K+m*B,r[3]=v*w+T*P+E*R+C*le,r[7]=v*y+T*k+E*F+C*Y,r[11]=v*S+T*U+E*H+C*D,r[15]=v*L+T*q+E*K+C*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],v=l*f-c*u,T=a*f-c*d,E=a*u-l*d,C=o*f-c*h,w=o*u-l*h,y=o*d-a*h;return t*(x*v-p*T+m*E)-i*(g*v-p*C+m*w)+n*(g*T-x*C+m*y)-r*(g*E-x*w+p*y)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],v=t*a-i*o,T=t*l-n*o,E=t*c-r*o,C=i*l-n*a,w=i*c-r*a,y=n*c-r*l,S=h*x-d*g,L=h*p-u*g,P=h*m-f*g,k=d*p-u*x,U=d*m-f*x,q=u*m-f*p,R=v*q-T*U+E*k+C*P-w*L+y*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return e[0]=(a*q-l*U+c*k)*F,e[1]=(n*U-i*q-r*k)*F,e[2]=(x*y-p*w+m*C)*F,e[3]=(u*w-d*y-f*C)*F,e[4]=(l*P-o*q-c*L)*F,e[5]=(t*q-n*P+r*L)*F,e[6]=(p*E-g*y-m*T)*F,e[7]=(h*y-u*E+f*T)*F,e[8]=(o*U-a*P+c*S)*F,e[9]=(i*P-t*U-r*S)*F,e[10]=(g*w-x*E+m*v)*F,e[11]=(d*E-h*w-f*v)*F,e[12]=(a*L-o*k-l*S)*F,e[13]=(t*k-i*L+n*S)*F,e[14]=(x*T-g*C-p*v)*F,e[15]=(h*C-d*T+u*v)*F,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,o){return this.set(1,i,r,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,p=o*d,m=a*d,v=l*c,T=l*h,E=l*d,C=i.x,w=i.y,y=i.z;return n[0]=(1-(x+m))*C,n[1]=(f+E)*C,n[2]=(g-T)*C,n[3]=0,n[4]=(f-E)*w,n[5]=(1-(u+m))*w,n[6]=(p+v)*w,n[7]=0,n[8]=(g+T)*y,n[9]=(p-v)*y,n[10]=(1-(u+x))*y,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Ws.set(n[0],n[1],n[2]).length(),a=Ws.set(n[4],n[5],n[6]).length(),l=Ws.set(n[8],n[9],n[10]).length();r<0&&(o=-o),en.copy(this);let c=1/o,h=1/a,d=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,n,r,o,a=qi,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===qi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,r,o,a=qi,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-n),u=-(t+e)/(t-e),f=-(i+n)/(i-n),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===qi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};bl.prototype.isMatrix4=!0;var vt=bl,Ws=new M,en=new vt,Bm=new M(0,0,0),Hm=new M(1,1,1),is=new M,ua=new M,Fi=new M,sd=new vt,rd=new _n,Xi=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zm=0,od=new M,qs=new _n,Pn=new vt,da=new M,Xr=new M,Vm=new M,Gm=new _n,ad=new M(1,0,0),ld=new M(0,1,0),cd=new M(0,0,1),hd={type:"added"},Wm={type:"removed"},Xs={type:"childadded",child:null},qc={type:"childremoved",child:null},wt=class s extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new M,t=new Xi,i=new _n,n=new M(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new vt},normalMatrix:{value:new Je}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?da.copy(e):da.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Xr,da,this.up):Pn.lookAt(da,Xr,this.up),this.quaternion.setFromRotationMatrix(Pn),n&&(Pn.extractRotation(n.matrixWorld),qs.setFromRotationMatrix(Pn),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wm),qc.child=e,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Xs.child=e,this.dispatchEvent(Xs),Xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,Gm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>qr(ti({},a),{boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>ti({},a)),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));n.material=a}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new M(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},qm={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Xc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var qe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=ut.workingColorSpace){if(e=Zh(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xc(o,r,e+1/3),this.g=Xc(o,r,e),this.b=Xc(o,r,e-1/3)}return ut.colorSpaceToWorking(this,n),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=Ef[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ut.workingToColorSpace(_i.copy(this),e),Math.round(lt(_i.r*255,0,255))*65536+Math.round(lt(_i.g*255,0,255))*256+Math.round(lt(_i.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(_i.copy(this),t);let i=_i.r,n=_i.g,r=_i.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=Ft){ut.workingToColorSpace(_i.copy(this),e);let t=_i.r,i=_i.g,n=_i.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(fa);let i=so(ns.h,fa.h,t),n=so(ns.s,fa.s,t),r=so(ns.l,fa.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_i=new qe;qe.NAMES=Ef;var mr=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var gr=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tn=new M,In=new M,Yc=new M,Ln=new M,Ys=new M,Ks=new M,ud=new M,Kc=new M,Zc=new M,$c=new M,Jc=new zt,jc=new zt,Qc=new zt,Dn=class s{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),tn.subVectors(e,t),n.cross(tn);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){tn.subVectors(n,t),In.subVectors(i,t),Yc.subVectors(e,t);let o=tn.dot(tn),a=tn.dot(In),l=tn.dot(Yc),c=In.dot(In),h=In.dot(Yc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,i,n,r,o,a,l){return this.getBarycoord(e,t,i,n,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,i,n,r,o){return Jc.setScalar(0),jc.setScalar(0),Qc.setScalar(0),Jc.fromBufferAttribute(e,t),jc.fromBufferAttribute(e,i),Qc.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Jc,r.x),o.addScaledVector(jc,r.y),o.addScaledVector(Qc,r.z),o}static isFrontFacing(e,t,i,n){return tn.subVectors(i,t),In.subVectors(e,t),tn.cross(In).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),tn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,o,a;Ys.subVectors(n,i),Ks.subVectors(r,i),Kc.subVectors(e,i);let l=Ys.dot(Kc),c=Ks.dot(Kc);if(l<=0&&c<=0)return t.copy(i);Zc.subVectors(e,n);let h=Ys.dot(Zc),d=Ks.dot(Zc);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(Ys,o);$c.subVectors(e,r);let f=Ys.dot($c),g=Ks.dot($c);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ks,a);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return ud.subVectors(r,n),a=(d-h)/(d-h+(f-g)),t.copy(n).addScaledVector(ud,a);let m=1/(p+x+u);return o=x*m,a=u*m,t.copy(i).addScaledVector(Ys,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bn=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(e.matrixWorld),this.union(pa)}let n=e.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ma.subVectors(this.max,Yr),Zs.subVectors(e.a,Yr),$s.subVectors(e.b,Yr),Js.subVectors(e.c,Yr),ss.subVectors($s,Zs),rs.subVectors(Js,$s),bs.subVectors(Zs,Js);let t=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-bs.z,bs.y,ss.z,0,-ss.x,rs.z,0,-rs.x,bs.z,0,-bs.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-bs.y,bs.x,0];return!eh(t,Zs,$s,Js,ma)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Zs,$s,Js,ma))?!1:(ga.crossVectors(ss,rs),t=[ga.x,ga.y,ga.z],eh(t,Zs,$s,Js,ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Nn=[new M,new M,new M,new M,new M,new M,new M,new M],nn=new M,pa=new bn,Zs=new M,$s=new M,Js=new M,ss=new M,rs=new M,bs=new M,Yr=new M,ma=new M,ga=new M,Es=new M;function eh(s,e,t,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Es.fromArray(s,r);let a=n.x*Math.abs(Es.x)+n.y*Math.abs(Es.y)+n.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=i.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jt=new M,ya=new Ce,Xm=0,bi=class extends vn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=Zi,this.version=0,this._normalizationScale=e!==void 0?cc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jh(e,this.array)}};var po=class extends bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var mo=class extends bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var mt=class extends bi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ym=new bn,Kr=new M,th=new M,Fn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Ym.setFromPoints(e).getCenter(i);let n=0;for(let r=0,o=e.length;r<o;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Kr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(th)),this.expandByPoint(Kr.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Km=0,Wi=new vt,ih=new wt,js=new M,Bi=new bn,Zr=new bn,li=new M,$t=class s extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Km++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?mo:po)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Wi.makeRotationFromQuaternion(e),this.applyMatrix4(Wi),this}rotateX(e){return Wi.makeRotationX(e),this.applyMatrix4(Wi),this}rotateY(e){return Wi.makeRotationY(e),this.applyMatrix4(Wi),this}rotateZ(e){return Wi.makeRotationZ(e),this.applyMatrix4(Wi),this}translate(e,t,i){return Wi.makeTranslation(e,t,i),this.applyMatrix4(Wi),this}scale(e,t,i){return Wi.makeScale(e,t,i),this.applyMatrix4(Wi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mt(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){let i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(li.addVectors(Bi.min,Zr.min),Bi.expandByPoint(li),li.addVectors(Bi.max,Zr.max),Bi.expandByPoint(li)):(Bi.expandByPoint(Zr.min),Bi.expandByPoint(Zr.max))}Bi.getCenter(i);let n=0;for(let r=0,o=e.count;r<o;r++)li.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(li));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)li.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),li.add(js)),n=Math.max(n,i.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new bi(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new M,l[L]=new M;let h=new M,d=new M,u=new M,f=new Ce,g=new Ce,x=new Ce,p=new M,m=new M;function v(L,P,k){c[L]=c[P]=c[k]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,P),u.fromBufferAttribute(i,k),f.fromBufferAttribute(r,L),g.fromBufferAttribute(r,P),x.fromBufferAttribute(r,k),d.sub(h),u.sub(h),g.sub(f),x.sub(f);let U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(U),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(U),a[L].add(p),a[P].add(p),a[k].add(p),l[L].add(m),l[P].add(m),l[k].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,P=T.length;L<P;++L){let k=T[L],U=k.start,q=k.count;for(let R=U,F=U+q;R<F;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let E=new M,C=new M,w=new M,y=new M;function S(L){w.fromBufferAttribute(n,L),y.copy(w);let P=a[L];E.copy(P),E.sub(w.multiplyScalar(w.dot(P))).normalize(),C.crossVectors(y,P);let U=C.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,U)}for(let L=0,P=i.count;L<P;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,d=new M;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new bi(u,h,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=dd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function dd(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=qn()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Si=new M,go=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n,this._normalizationScale=e!==void 0?cc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.applyMatrix4(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.applyNormalMatrix(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Si.fromBufferAttribute(this,t),Si.transformDirection(e),this.setXYZ(t,Si.x,Si.y,Si.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new bi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):jh(e,this.data.array)}},nh=new M,Zm=new M,$m=new Je,sn=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=nh.subVectors(i,t).cross(Zm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(nh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||$m.getNormalMatrix(e),n=this.coplanarPoint(nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Jm=0,En=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=Tr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ah,this.blendDst=Ch,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=n(e.textures),o=n(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new sn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},rn=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qs,$r=new M,er=new M,tr=new M,ir=new Ce,Jr=new Ce,Mf=new vt,xa=new M,jr=new M,va=new M,fd=new Ce,sh=new Ce,pd=new Ce,Mn=class extends wt{constructor(e=new rn){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new $t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Qa(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new go(i,3,0,!1)),Qs.setAttribute("uv",new go(i,2,3,!1))}this.geometry=Qs,this.material=e,this.center=new Ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),er.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&er.multiplyScalar(-tr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;_a(xa.set(-.5,-.5,0),tr,o,er,n,r),_a(jr.set(.5,-.5,0),tr,o,er,n,r),_a(va.set(.5,.5,0),tr,o,er,n,r),fd.set(0,0),sh.set(1,0),pd.set(1,1);let a=e.ray.intersectTriangle(xa,jr,va,!1,$r);if(a===null&&(_a(jr.set(-.5,.5,0),tr,o,er,n,r),sh.set(0,1),a=e.ray.intersectTriangle(xa,va,jr,!1,$r),a===null))return;let l=e.ray.origin.distanceTo($r);l<e.near||l>e.far||t.push({distance:l,point:$r.clone(),uv:Dn.getInterpolation($r,xa,jr,va,fd,sh,pd,new Ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function _a(s,e,t,i,n,r){ir.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(Jr.x=r*ir.x-n*ir.y,Jr.y=n*ir.x+r*ir.y):Jr.copy(ir),s.copy(e),s.x+=Jr.x,s.y+=Jr.y,s.applyMatrix4(Mf)}var kn=new M,rh=new M,ba=new M,Ea=new M,yr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){rh.copy(e).add(t).multiplyScalar(.5),ba.copy(t).sub(e).normalize(),Ea.copy(this.origin).sub(rh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ba),a=Ea.dot(this.direction),l=-Ea.dot(ba),c=Ea.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(rh).addScaledVector(ba,u),f}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);let i=kn.dot(this.direction),n=kn.dot(kn)-i*i,r=e.radius*e.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,g=t.x-o.x,x=t.y-o.y,p=t.z-o.z,m=i.x-o.x,v=i.y-o.y,T=i.z-o.z,E=Math.abs(l),C=Math.abs(c),w=Math.abs(h),y,S,L,P,k,U,q,R,F,H,K,le;if(E>=C&&E>=w?(L=l,U=d,F=g,le=m,l>=0?(y=c,S=h,P=u,k=f,q=x,R=p,H=v,K=T):(y=h,S=c,P=f,k=u,q=p,R=x,H=T,K=v)):C>=w?(L=c,U=u,F=x,le=v,c>=0?(y=h,S=l,P=f,k=d,q=p,R=g,H=T,K=m):(y=l,S=h,P=d,k=f,q=g,R=p,H=m,K=T)):(L=h,U=f,F=p,le=T,h>=0?(y=l,S=c,P=d,k=u,q=g,R=x,H=m,K=v):(y=c,S=l,P=u,k=d,q=x,R=g,H=v,K=m)),L===0)return null;let Y=y/L,D=S/L,B=1/L,ce=P-Y*U,Ae=k-D*U,J=q-Y*F,_e=R-D*F,Me=H-Y*le,Le=K-D*le,Se=Me*_e-Le*J,$e=ce*Le-Ae*Me,Vt=J*Ae-_e*ce;if(n){if(Se<0||$e<0||Vt<0)return null}else if((Se<0||$e<0||Vt<0)&&(Se>0||$e>0||Vt>0))return null;let Be=Se+$e+Vt;if(Be===0)return null;let gt=B*(Se*U+$e*F+Vt*le);return(Be>0?gt<0:gt>0)?null:this.at(gt/Be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},md=new vt,Ms=new yr,Ma=new Fn,gd=new M,Ta=new M,Sa=new M,wa=new M,oh=new M,Ra=new M,yd=new M,Aa=new M,Q=class extends wt{constructor(e=new $t,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(oh.fromBufferAttribute(d,e),o?Ra.addScaledVector(oh,h):Ra.addScaledVector(oh.sub(t),h))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(Ma.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ma,gd)===null||Ms.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,C=T;E<C;E+=3){let w=a.getX(E),y=a.getX(E+1),S=a.getX(E+2);n=Ca(this,m,e,i,c,h,d,w,y,S),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=a.getX(p),T=a.getX(p+1),E=a.getX(p+2);n=Ca(this,o,e,i,c,h,d,v,T,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=o[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=v,C=T;E<C;E+=3){let w=E,y=E+1,S=E+2;n=Ca(this,m,e,i,c,h,d,w,y,S),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let v=p,T=p+1,E=p+2;n=Ca(this,o,e,i,c,h,d,v,T,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function jm(s,e,t,i,n,r,o,a){let l;if(e.side===Ci?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,e.side===fs,a),l===null)return null;Aa.copy(a),Aa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Aa);return c<t.near||c>t.far?null:{distance:c,point:Aa.clone(),object:s}}function Ca(s,e,t,i,n,r,o,a,l,c){s.getVertexPosition(a,Ta),s.getVertexPosition(l,Sa),s.getVertexPosition(c,wa);let h=jm(s,e,t,i,Ta,Sa,wa,yd);if(h){let d=new M;Dn.getBarycoord(yd,Ta,Sa,wa,d),n&&(h.uv=Dn.getInterpolatedAttribute(n,a,l,c,d,new Ce)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,d,new Ce)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,d,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new M,materialIndex:0};Dn.getNormal(Ta,Sa,wa,u.normal),h.face=u,h.barycoord=d}return h}var yo=class extends Ri{constructor(e=null,t=1,i=1,n,r,o,a,l,c=ci,h=ci,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xo=class extends bi{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new vt,xd=new vt,Pa=[],vd=new bn,Qm=new vt,Qr=new Q,eo=new Fn,Tn=class extends Q{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Qm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),vd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(vd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,nr),eo.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(eo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(Qr.geometry=this.geometry,Qr.material=this.material,Qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),e.ray.intersectsSphere(eo)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,nr),xd.multiplyMatrices(i,nr),Qr.matrixWorld=xd,Qr.raycast(e,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=r,l.object=this,t.push(l)}Pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new yo(new Float32Array(n*this.count),n,this.count,Al,Zi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ts=new Fn,e0=new Ce(.5,.5),Ia=new M,ls=class{constructor(e=new sn,t=new sn,i=new sn,n=new sn,r=new sn,o=new sn){this.planes=[e,t,i,n,r,o]}set(e,t,i,n,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qi,i=!1){let n=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],p=r[10],m=r[11],v=r[12],T=r[13],E=r[14],C=r[15];if(n[0].setComponents(c-o,f-h,m-g,C-v).normalize(),n[1].setComponents(c+o,f+h,m+g,C+v).normalize(),n[2].setComponents(c+a,f+d,m+x,C+T).normalize(),n[3].setComponents(c-a,f-d,m-x,C-T).normalize(),i)n[4].setComponents(l,u,p,E).normalize(),n[5].setComponents(c-l,f-u,m-p,C-E).normalize();else if(n[4].setComponents(c-l,f-u,m-p,C-E).normalize(),t===qi)n[5].setComponents(c+l,f+u,m+p,C+E).normalize();else if(t===hr)n[5].setComponents(l,u,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){Ts.center.set(0,0,0);let t=e0.distanceTo(e.center);return Ts.radius=.7071067811865476+t,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ia.x=n.normal.x>0?e.max.x:e.min.x,Ia.y=n.normal.y>0?e.max.y:e.min.y,Ia.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_d=new vt,el=class s{constructor(){this.coordinateSystem=qi,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let n=0;n<t.length;n++){let r=t[n];_d.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[n]===void 0&&(i[n]=new ls),i[n].setFromProjectionMatrix(_d,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let n=0;n<e._count;n++)t[n]===void 0&&(t[n]=new ls),t[n].copy(i[n]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Bn=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bd=new vt,mh=new yr,La=new Fn,Na=new M,cs=class extends wt{constructor(e=new $t,t=new Bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(n),La.radius+=r,e.ray.intersectsSphere(La)===!1)return;bd.copy(n).invert(),mh.copy(e.ray).applyMatrix4(bd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);Na.fromBufferAttribute(d,p),Ed(Na,p,l,n,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Na.fromBufferAttribute(d,g),Ed(Na,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ed(s,e,t,i,n,r,o){let a=mh.distanceSqToPoint(s);if(a<t){let l=new M;mh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ws=class extends Ri{constructor(e=[],t=ks,i,n,r,o,a,l,c,h){super(e,t,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yi=class extends Ri{constructor(e,t,i,n,r,o,a,l,c){super(e,t,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends Ri{constructor(e,t,i=ln,n,r,o,a=ci,l=ci,c,h=Un,d=1){if(h!==Un&&h!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},vo=class extends Hn{constructor(e,t=ln,i=ks,n,r,o=ci,a=ci,l,c=Un){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_o=class extends Ri{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},at=class s extends $t{constructor(e=1,t=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,n,o,2),g("x","z","y",1,-1,e,i,-t,n,o,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function g(x,p,m,v,T,E,C,w,y,S,L){let P=E/y,k=C/S,U=E/2,q=C/2,R=w/2,F=y+1,H=S+1,K=0,le=0,Y=new M;for(let D=0;D<H;D++){let B=D*k-q;for(let ce=0;ce<F;ce++){let Ae=ce*P-U;Y[x]=Ae*v,Y[p]=B*T,Y[m]=R,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[m]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(ce/y),d.push(1-D/S),K+=1}}for(let D=0;D<S;D++)for(let B=0;B<y;B++){let ce=u+B+F*D,Ae=u+B+F*(D+1),J=u+(B+1)+F*(D+1),_e=u+(B+1)+F*D;l.push(ce,Ae,_e),l.push(Ae,J,_e),le+=6}a.addGroup(f,le,L),f+=le,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},on=class s extends $t{constructor(e=1,t=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:n,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=i*2+r,x=n+1,p=new M,m=new M;for(let v=0;v<=g;v++){let T=0,E=0,C=0,w=0;if(v<=i){let L=v/i,P=L*Math.PI/2;E=-h-e*Math.cos(P),C=e*Math.sin(P),w=-e*Math.cos(P),T=L*d}else if(v<=i+r){let L=(v-i)/r;E=-h+L*t,C=e,w=0,T=d+L*u}else{let L=(v-i-r)/i,P=L*Math.PI/2;E=h+e*Math.sin(P),C=e*Math.cos(P),w=e*Math.sin(P),T=d+u+L*d}let y=Math.max(0,Math.min(1,T/f)),S=0;v===0?S=.5/n:v===g&&(S=-.5/n);for(let L=0;L<=n;L++){let P=L/n,k=P*Math.PI*2,U=Math.sin(k),q=Math.cos(k);m.x=-C*q,m.y=E,m.z=C*U,a.push(m.x,m.y,m.z),p.set(-C*q,w,C*U),p.normalize(),l.push(p.x,p.y,p.z),c.push(P+S,y)}if(v>0){let L=(v-1)*x;for(let P=0;P<n;P++){let k=L+P,U=L+P+1,q=v*x+P,R=v*x+P+1;o.push(k,U,q),o.push(U,R,q)}}}this.setIndex(o),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zn=class s extends $t{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new M,h=new Ce;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(a,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},je=class s extends $t{constructor(e=1,t=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;v(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function v(){let E=new M,C=new M,w=0,y=(t-e)/i;for(let S=0;S<=r;S++){let L=[],P=S/r,k=P*(t-e)+e;for(let U=0;U<=n;U++){let q=U/n,R=q*l+a,F=Math.sin(R),H=Math.cos(R);C.x=k*F,C.y=-P*i+p,C.z=k*H,d.push(C.x,C.y,C.z),E.set(F,y,H).normalize(),u.push(E.x,E.y,E.z),f.push(q,1-P),L.push(g++)}x.push(L)}for(let S=0;S<n;S++)for(let L=0;L<r;L++){let P=x[L][S],k=x[L+1][S],U=x[L+1][S+1],q=x[L][S+1];(e>0||L!==0)&&(h.push(P,k,q),w+=3),(t>0||L!==r-1)&&(h.push(k,U,q),w+=3)}c.addGroup(m,w,0),m+=w}function T(E){let C=g,w=new Ce,y=new M,S=0,L=E===!0?e:t,P=E===!0?1:-1;for(let U=1;U<=n;U++)d.push(0,p*P,0),u.push(0,P,0),f.push(.5,.5),g++;let k=g;for(let U=0;U<=n;U++){let R=U/n*l+a,F=Math.cos(R),H=Math.sin(R);y.x=L*H,y.y=p*P,y.z=L*F,d.push(y.x,y.y,y.z),u.push(0,P,0),w.x=F*.5+.5,w.y=H*.5*P+.5,f.push(w.x,w.y),g++}for(let U=0;U<n;U++){let q=C+U,R=k+U;E===!0?h.push(R,R+1,q):h.push(R+1,R,q),S+=3}c.addGroup(m,S,E===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hi=class s extends je{constructor(e=1,t=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(r-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let o=this.getPoint(n),a=this.getPoint(r),l=t||(o.isVector2?new Ce:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new M,n=[],r=[],o=[],a=new M,l=new vt;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],a),o[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(lt(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),o[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},xr=class extends Hi{constructor(e=0,t=0,i=1,n=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(o?r=0:r=n),this.aClockwise===!0&&!o&&(r===n?r=-n:r=r-n);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends xr{constructor(e,t,i,n,r,o){super(e,t,i,i,n,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let s=0,e=0,t=0,i=0;function n(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){n(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+i*a}}}var Md=new M,Td=new M,ah=new Qh,lh=new Qh,ch=new Qh,il=class extends Hi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new M){let i=t,n=this.points,r=n.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%r]:(Td.subVectors(n[0],n[1]).add(n[0]),c=Td);let d=n[a%r],u=n[(a+1)%r];if(this.closed||a+2<r?h=n[(a+2)%r]:(Md.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),ah.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),lh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),ch.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(ah.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),lh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ch.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(ah.calc(l),lh.calc(l),ch.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new M().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sd(s,e,t,i,n){let r=(i-e)*.5,o=(n-t)*.5,a=s*s,l=s*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*s+t}function t0(s,e){let t=1-s;return t*t*e}function i0(s,e){return 2*(1-s)*s*e}function n0(s,e){return s*s*e}function ro(s,e,t,i){return t0(s,e)+i0(s,t)+n0(s,i)}function s0(s,e){let t=1-s;return t*t*t*e}function r0(s,e){let t=1-s;return 3*t*t*s*e}function o0(s,e){return 3*(1-s)*s*s*e}function a0(s,e){return s*s*s*e}function oo(s,e,t,i,n){return s0(s,e)+r0(s,t)+o0(s,i)+a0(s,n)}var bo=class extends Hi{constructor(e=new Ce,t=new Ce,i=new Ce,n=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Ce){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,n.x,r.x,o.x,a.x),oo(e,n.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends Hi{constructor(e=new M,t=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new M){let i=t,n=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,n.x,r.x,o.x,a.x),oo(e,n.y,r.y,o.y,a.y),oo(e,n.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eo=class extends Hi{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Hi{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends Hi{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,n.x,r.x,o.x),ro(e,n.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Hi{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){let i=t,n=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,n.x,r.x,o.x),ro(e,n.y,r.y,o.y),ro(e,n.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},To=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){let i=t,n=this.points,r=(n.length-1)*e,o=Math.floor(r),a=r-o,l=n[o===0?o:o-1],c=n[o],h=n[o>n.length-2?n.length-1:o+1],d=n[o>n.length-3?n.length-1:o+2];return i.set(Sd(a,l.x,c.x,h.x,d.x),Sd(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new Ce().fromArray(n))}return this}},wd=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:il,CubicBezierCurve:bo,CubicBezierCurve3:nl,EllipseCurve:xr,LineCurve:Eo,LineCurve3:sl,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:rl,SplineCurve:To}),ol=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wd[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let o=n[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let o=r[n],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new wd[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},So=class extends ol{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Eo(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Mo(this.currentPoint.clone(),new Ce(e,t),new Ce(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,o){let a=new bo(this.currentPoint.clone(),new Ce(e,t),new Ce(i,n),new Ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new To(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,n,r,o),this}absarc(e,t,i,n,r,o){return this.absellipse(e,t,i,i,n,r,o),this}ellipse(e,t,i,n,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,o,a,l),this}absellipse(e,t,i,n,r,o,a,l){let c=new xr(e,t,i,n,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},vr=class extends So{constructor(e){super(e),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new So().fromJSON(n))}return this}};function l0(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=Tf(s,0,n,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=f0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,d=l;for(let u=t;u<n;u+=t){let f=s[u],g=s[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return wo(r,o,t,a,l,c,0),o}function Tf(s,e,t,i,n){let r;if(n===T0(s,e,t,i)>0)for(let o=e;o<t;o+=i)r=Rd(o/i|0,s[o],s[o+1],r);else for(let o=t-i;o>=e;o-=i)r=Rd(o/i|0,s[o],s[o+1],r);return r&&_r(r,r.next)&&(Ao(r),r=r.next),r}function Rs(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(_r(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ao(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function wo(s,e,t,i,n,r,o){if(!s)return;!o&&r&&x0(s,i,n,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?h0(s,i,n,r):c0(s)){e.push(l.i,s.i,c.i),Ao(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=u0(Rs(s),e),wo(s,e,t,i,n,r,2)):o===2&&d0(s,e,t,i,n,r):wo(Rs(s),e,t,i,n,r,1);break}}}function c0(s){let e=s.prev,t=s,i=s.next;if(Wt(e,t,i)>=0)return!1;let n=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(n,r,o),d=Math.min(a,l,c),u=Math.max(n,r,o),f=Math.max(a,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&to(n,a,r,l,o,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function h0(s,e,t,i){let n=s.prev,r=s,o=s.next;if(Wt(n,r,o)>=0)return!1;let a=n.x,l=r.x,c=o.x,h=n.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),p=Math.max(h,d,u),m=gh(f,g,e,t,i),v=gh(x,p,e,t,i),T=s.prevZ,E=s.nextZ;for(;T&&T.z>=m&&E&&E.z<=v;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==n&&T!==o&&to(a,h,l,d,c,u,T.x,T.y)&&Wt(T.prev,T,T.next)>=0||(T=T.prevZ,E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==n&&E!==o&&to(a,h,l,d,c,u,E.x,E.y)&&Wt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;T&&T.z>=m;){if(T.x>=f&&T.x<=x&&T.y>=g&&T.y<=p&&T!==n&&T!==o&&to(a,h,l,d,c,u,T.x,T.y)&&Wt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;E&&E.z<=v;){if(E.x>=f&&E.x<=x&&E.y>=g&&E.y<=p&&E!==n&&E!==o&&to(a,h,l,d,c,u,E.x,E.y)&&Wt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function u0(s,e){let t=s;do{let i=t.prev,n=t.next.next;!_r(i,n)&&wf(i,t,t.next,n)&&Ro(i,n)&&Ro(n,i)&&(e.push(i.i,t.i,n.i),Ao(t),Ao(t.next),t=s=n),t=t.next}while(t!==s);return Rs(t)}function d0(s,e,t,i,n,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&b0(o,a)){let l=Rf(o,a);o=Rs(o,o.next),l=Rs(l,l.next),wo(o,e,t,i,n,r,0),wo(l,e,t,i,n,r,0);return}a=a.next}o=o.next}while(o!==s)}function f0(s,e,t,i){let n=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:s.length,c=Tf(s,a,l,i,!1);c===c.next&&(c.steiner=!0),n.push(_0(c))}n.sort(p0);for(let r=0;r<n.length;r++)t=m0(n[r],t);return t}function p0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function m0(s,e){let t=g0(s,e);if(!t)return e;let i=Rf(t,s);return Rs(i,i.next),Rs(t,t.next)}function g0(s,e){let t=e,i=s.x,n=s.y,r=-1/0,o;if(_r(s,t))return t;do{if(_r(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let d=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Sf(n<c?i:r,n,l,c,n<c?r:i,n,t.x,t.y)){let d=Math.abs(n-t.y)/(i-t.x);Ro(t,s)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&y0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function y0(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function x0(s,e,t,i){let n=s;do n.z===0&&(n.z=gh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,v0(n)}function v0(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(n=i,i=i.nextZ,a--):(n=o,o=o.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=o}r.nextZ=null,t*=2}while(e>1);return s}function gh(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function _0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Sf(s,e,t,i,n,r,o,a){return(n-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(n-o)*(i-a)}function to(s,e,t,i,n,r,o,a){return!(s===o&&e===a)&&Sf(s,e,t,i,n,r,o,a)}function b0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!E0(s,e)&&(Ro(s,e)&&Ro(e,s)&&M0(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||_r(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _r(s,e){return s.x===e.x&&s.y===e.y}function wf(s,e,t,i){let n=Da(Wt(s,e,t)),r=Da(Wt(s,e,i)),o=Da(Wt(t,i,s)),a=Da(Wt(t,i,e));return!!(n!==r&&o!==a||n===0&&ka(s,t,e)||r===0&&ka(s,i,e)||o===0&&ka(t,s,i)||a===0&&ka(t,e,i))}function ka(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Da(s){return s>0?1:s<0?-1:0}function E0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&wf(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ro(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function M0(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Rf(s,e){let t=yh(s.i,s.x,s.y),i=yh(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rd(s,e,t,i){let n=yh(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ao(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function T0(s,e,t,i){let n=0;for(let r=e,o=t-i;r<t;r+=i)n+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return n}var xh=class{static triangulate(e,t,i=2){return l0(e,t,i)}},lr=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Ad(e),Cd(i,e);let o=e.length;t.forEach(Ad);for(let l=0;l<t.length;l++)n.push(o),o+=t[l].length,Cd(i,t[l]);let a=xh.triangulate(i,n);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ad(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Cd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Dt=class s extends $t{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=e/a,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*u-o;for(let T=0;T<c;T++){let E=T*d-r;g.push(E,-v,0),x.push(0,0,1),p.push(T/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let T=v+c*m,E=v+c*(m+1),C=v+1+c*(m+1),w=v+1+c*m;f.push(T,E,w),f.push(E,C,w)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Co=class s extends $t{constructor(e=new vr([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new mt(n,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(o,2));function c(h){let d=n.length/3,u=h.extractPoints(t),f=u.shape,g=u.holes;lr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];lr.isClockWise(v)===!0&&(g[p]=v.reverse())}let x=lr.triangulateShape(f,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];f=f.concat(v)}for(let p=0,m=f.length;p<m;p++){let v=f[p];n.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=x.length;p<m;p++){let v=x[p],T=v[0]+d,E=v[1]+d,C=v[2]+d;i.push(T,E,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return S0(t,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let o=t[e.shapes[n]];i.push(o)}return new s(i,e.curveSegments)}};function S0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){let n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}var Jt=class s extends $t{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new M,u=new M,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let v=[],T=m/i,E=o+T*a,C=e*Math.cos(E),w=Math.sqrt(e*e-C*C),y=0;m===0&&o===0?y=.5/t:m===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){let L=S/t,P=n+L*r;d.x=-w*Math.cos(P),d.y=C,d.z=w*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(L+y,1-T),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let T=h[m][v+1],E=h[m][v],C=h[m+1][v],w=h[m+1][v+1];(m!==0||o>0)&&f.push(T,E,w),(m!==i-1||l<Math.PI)&&f.push(E,C,w)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var an=class s extends $t{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new M,f=new M,g=new M;for(let x=0;x<=i;x++){let p=o+x/i*a;for(let m=0;m<=n;m++){let v=m/n*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=n;p++){let m=(n+1)*x+p-1,v=(n+1)*(x-1)+p-1,T=(n+1)*(x-1)+p,E=(n+1)*x+p;l.push(m,v,E),l.push(v,T,E)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Os(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(Pd(n))n.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Pd(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function Mi(s){let e={};for(let t=0;t<s.length;t++){let i=Os(s[t]);for(let n in i)e[n]=i[n]}return e}function Pd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function w0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Af={clone:Os,merge:Mi},R0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ki=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=w0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ce().fromArray(n.value);break;case"v3":this.uniforms[i].value=new M().fromArray(n.value);break;case"v4":this.uniforms[i].value=new zt().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Je().fromArray(n.value);break;case"m4":this.uniforms[i].value=new vt().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},al=class extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ue=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ll=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Oa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var hs=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let o=0;o!==n;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends hs{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,o=e+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:r=e,a=2*t-i;break;case ph:r=n.length-2,a=t+n[r]-n[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,l=2*i-t;break;case ph:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,T=(-1-f)*p+(1.5+f)*x+.5*g,E=f*p-f*x;for(let C=0;C!==a;++C)r[C]=m*o[h+C]+v*o[c+C]+T*o[l+C]+E*o[d+C];return r}},ul=class extends hs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},dl=class extends hs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends hs{interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-t)/(n-t),x=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*x+o[l+p]*g;return r}let u=a*2,f=e-1;for(let g=0;g!==a;++g){let x=o[c+g],p=o[l+g],m=f*u+g*2,v=d[m],T=d[m+1],E=e*u+g*2,C=h[E],w=h[E+1],y=P0(i,t,v,C,n);r[g]=Cf(y,x,T,w,p)}return r}};function Cf(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function C0(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function P0(s,e,t,i,n){let r=(s-e)/(n-e);for(let o=0;o<8;o++){let a=Cf(r,e,t,i,n)-s;if(Math.abs(a)<1e-10)break;let l=C0(r,e,t,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var zi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),Oa(e.settings)&&(i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Ba:t=this.InterpolantFactoryMethodSmooth;break;case uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Ba;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e;Oa(this.settings)&&(Id(this.settings.inTangents,e),Id(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;Oa(this.settings)&&(Ld(this.settings.inTangents,e),Ld(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){We("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(n!==void 0&&_m(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ba,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,Oa(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Id(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]+=e}function Ld(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Za;var us=class extends zi{constructor(e,t,i){super(e,t,i)}};us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=ao;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};pl.prototype.ValueTypeName="color";var ml=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};ml.prototype.ValueTypeName="number";var gl=class extends hs{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(r,0,o,c-a,o,c,l);return r}},Po=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new gl(this.times,this.values,this.getValueSize(),e)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var ds=class extends zi{constructor(e,t,i){super(e,t,i)}};ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=ao;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends zi{constructor(e,t,i,n){super(e,t,i,n)}};yl.prototype.ValueTypeName="vector";var xl=class{constructor(e,t,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pf=new xl,vl=class{constructor(e){this.manager=e!==void 0?e:Pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Io=class extends As{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hh=new vt,Nd=new M,kd=new M,br=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;e.coordinateSystem===hr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ua=new M,Fa=new _n,yn=new M,Lo=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ua,Fa,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ua,Fa,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ua,Fa,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new M,Dd=new Ce,Od=new Ce,ii=class extends Lo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ss*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(no*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(no*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,Dd,Od),t.subVectors(Od,Dd)}setViewOffset(e,t,i,n,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(no*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},vh=class extends br{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ss*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},No=class extends As{constructor(e,t,i=0,n=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_h=class extends br{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}},Zt=class extends As{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Cs=class extends Lo{constructor(e=-1,t=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends br{constructor(){super(new Cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rr=-90,or=1,Er=class extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ii(rr,or,e,t);n.layers=this.layers,this.add(n);let r=new ii(rr,or,e,t);r.layers=this.layers,this.add(r);let o=new ii(rr,or,e,t);o.layers=this.layers,this.add(o);let a=new ii(rr,or,e,t);a.layers=this.layers,this.add(a);let l=new ii(rr,or,e,t);l.layers=this.layers,this.add(l);let c=new ii(rr,or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},_l=class extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var tu="\\[\\]\\.:\\/",I0=new RegExp("["+tu+"]","g"),iu="[^"+tu+"]",L0="[^"+tu.replace("\\.","")+"]",N0=/((?:WC+[\/:])*)/.source.replace("WC",iu),k0=/(WCOD+)?/.source.replace("WCOD",L0),D0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),O0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),U0=new RegExp("^"+N0+k0+D0+O0+"$"),F0=["material","materials","bones","map"],Eh=class{constructor(e,t,i){let n=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ut=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(e){let t=U0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);F0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Eh;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yb=new Float32Array(1);var Ud=new vt,Ps=class{constructor(e,t,i=0,n=1/0){this.ray=new yr(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):We("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ud.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ud),this}intersectObject(e,t=!0,i=[]){return Mh(e,this,i,t),i.sort(Fd),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Mh(e[n],this,i,t);return i.sort(Fd),i}};function Fd(s,e){return s.distance-e.distance}function Mh(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Mh(r[o],e,t,!0)}}var lu=class lu{constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};lu.prototype.isMatrix2=!0;var Th=lu;function nu(s,e,t,i){let n=B0(i);switch(t){case Vh:return s*e;case Al:return s*e/n.components*n.byteLength;case Cl:return s*e/n.components*n.byteLength;case ms:return s*e*2/n.components*n.byteLength;case Pl:return s*e*2/n.components*n.byteLength;case Gh:return s*e*3/n.components*n.byteLength;case hn:return s*e*4/n.components*n.byteLength;case Il:return s*e*4/n.components*n.byteLength;case Uo:case Fo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bo:case Ho:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Dl:return Math.max(s,16)*Math.max(e,8)/4;case Ll:case kl:return Math.max(s,8)*Math.max(e,8)/2;case Ol:case Ul:case Bl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case zo:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ic:case nc:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rc:case oc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vo:case ac:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(s){switch(s){case Di:case Fh:return{byteLength:1,components:1};case wr:case Bh:case cn:return{byteLength:2,components:1};case wl:case Rl:return{byteLength:2,components:4};case ln:case Sl:case Zi:return{byteLength:4,components:1};case Hh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function jf(){let s=null,e=!1,t=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function z0(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,Z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tg=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ag=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,dg=`vec3 transformedNormal = objectNormal;
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
#endif`,fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",xg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ag=`#ifdef USE_GRADIENTMAP
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
}`,Cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Ng=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Og=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Bg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jg=`#if defined( USE_POINTS_UV )
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
#endif`,jg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ty=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
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
#endif`,uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,my=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,wy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ay=`#ifdef USE_SKINNING
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
#endif`,Cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Iy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ny=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,Fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,By=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,Hy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wy=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,$y=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,nx=`#define LAMBERT
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
}`,sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rx=`#define MATCAP
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
}`,ox=`#define MATCAP
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
}`,ax=`#define NORMAL
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
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cx=`#define PHONG
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
}`,hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ux=`#define STANDARD
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
}`,dx=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,fx=`#define TOON
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
}`,px=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mx=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,xx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,vx=`uniform float rotation;
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
}`,_x=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:q0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:K0,aomap_pars_fragment:Z0,batching_pars_vertex:$0,batching_vertex:J0,begin_vertex:j0,beginnormal_vertex:Q0,bsdfs:eg,iridescence_fragment:tg,bumpmap_pars_fragment:ig,clipping_planes_fragment:ng,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:og,color_fragment:ag,color_pars_fragment:lg,color_pars_vertex:cg,color_vertex:hg,common:ug,defaultnormal_vertex:dg,displacementmap_pars_vertex:fg,displacementmap_vertex:pg,emissivemap_fragment:mg,emissivemap_pars_fragment:gg,colorspace_fragment:yg,colorspace_pars_fragment:xg,envmap_fragment:vg,envmap_common_pars_fragment:_g,envmap_pars_fragment:bg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Ng,envmap_vertex:Mg,fog_vertex:Tg,fog_pars_vertex:Sg,fog_fragment:wg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Ag,lightmap_pars_fragment:Cg,lights_lambert_fragment:Pg,lights_lambert_pars_fragment:Ig,lights_pars_begin:Lg,lights_toon_fragment:kg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Og,lights_phong_pars_fragment:Ug,lights_physical_fragment:Fg,lights_physical_pars_fragment:Bg,lights_fragment_begin:Hg,lights_fragment_maps:zg,lights_fragment_end:Vg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:Wg,logdepthbuf_pars_fragment:qg,logdepthbuf_pars_vertex:Xg,logdepthbuf_vertex:Yg,map_fragment:Kg,map_pars_fragment:Zg,map_particle_fragment:$g,map_particle_pars_fragment:Jg,metalnessmap_fragment:jg,metalnessmap_pars_fragment:Qg,morphinstance_vertex:ey,morphcolor_vertex:ty,morphnormal_vertex:iy,morphtarget_pars_vertex:ny,morphtarget_vertex:sy,normal_fragment_begin:ry,normal_fragment_maps:oy,normal_pars_fragment:ay,normal_pars_vertex:ly,normal_vertex:cy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:uy,clearcoat_normal_fragment_maps:dy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:py,opaque_fragment:my,packing:gy,premultiplied_alpha_fragment:yy,project_vertex:xy,dithering_fragment:vy,dithering_pars_fragment:_y,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Ty,shadowmap_vertex:Sy,shadowmask_pars_fragment:wy,skinbase_vertex:Ry,skinning_pars_vertex:Ay,skinning_vertex:Cy,skinnormal_vertex:Py,specularmap_fragment:Iy,specularmap_pars_fragment:Ly,tonemapping_fragment:Ny,tonemapping_pars_fragment:ky,transmission_fragment:Dy,transmission_pars_fragment:Oy,uv_pars_fragment:Uy,uv_pars_vertex:Fy,uv_vertex:By,worldpos_vertex:Hy,background_vert:zy,background_frag:Vy,backgroundCube_vert:Gy,backgroundCube_frag:Wy,cube_vert:qy,cube_frag:Xy,depth_vert:Yy,depth_frag:Ky,distance_vert:Zy,distance_frag:$y,equirect_vert:Jy,equirect_frag:jy,linedashed_vert:Qy,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:ix,meshlambert_vert:nx,meshlambert_frag:sx,meshmatcap_vert:rx,meshmatcap_frag:ox,meshnormal_vert:ax,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:hx,meshphysical_vert:ux,meshphysical_frag:dx,meshtoon_vert:fx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:yx,shadow_frag:xx,sprite_vert:vx,sprite_frag:_x},Re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Rn={basic:{uniforms:Mi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Mi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Mi([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Mi([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Mi([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new qe(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Mi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Mi([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Mi([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Mi([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Mi([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Mi([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:Mi([Re.common,Re.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:Mi([Re.lights,Re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Rn.physical={uniforms:Mi([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var uc={r:0,b:0,g:0},bx=new vt,Qf=new Je;Qf.set(-1,0,0,0,1,0,0,0,1);function Ex(s,e,t,i,n,r){let o=new qe(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let E=v.backgroundBlurriness>0;T=e.get(T,E)}return T}function g(v){let T=!1,E=f(v);E===null?p(o,a):E&&E.isColor&&(p(E,1),T=!0);let C=s.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let E=f(T);E&&E.isCubeTexture?(c===void 0&&(c=new Q(new at(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Os(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qf),c.material.toneMapped=ut.getTransfer(E.colorSpace)!==Mt,(h!==E||d!==E.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Q(new Dt(2,2),new Ki({name:"BackgroundMaterial",uniforms:Os(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=ut.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,T){v.getRGB(uc,eu(s)),t.buffers.color.setClear(uc.r,uc.g,uc.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Mx(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(k,U,q,R,F){let H=!1,K=d(k,R,q,U);r!==K&&(r=K,c(r.object)),H=f(k,R,q,F),H&&g(k,R,q,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,E(k,U,q,R),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(k){return s.bindVertexArray(k)}function h(k){return s.deleteVertexArray(k)}function d(k,U,q,R){let F=R.wireframe===!0,H=i[U.id];H===void 0&&(H={},i[U.id]=H);let K=k.isInstancedMesh===!0?k.id:0,le=H[K];le===void 0&&(le={},H[K]=le);let Y=le[q.id];Y===void 0&&(Y={},le[q.id]=Y);let D=Y[F];return D===void 0&&(D=u(l()),Y[F]=D),D}function u(k){let U=[],q=[],R=[];for(let F=0;F<t;F++)U[F]=0,q[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:R,object:k,attributes:{},index:null}}function f(k,U,q,R){let F=r.attributes,H=U.attributes,K=0,le=q.getAttributes();for(let Y in le)if(le[Y].location>=0){let B=F[Y],ce=H[Y];if(ce===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),B===void 0||B.attribute!==ce||ce&&B.data!==ce.data)return!0;K++}return r.attributesNum!==K||r.index!==R}function g(k,U,q,R){let F={},H=U.attributes,K=0,le=q.getAttributes();for(let Y in le)if(le[Y].location>=0){let B=H[Y];B===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(B=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(B=k.instanceColor));let ce={};ce.attribute=B,B&&B.data&&(ce.data=B.data),F[Y]=ce,K++}r.attributes=F,r.attributesNum=K,r.index=R}function x(){let k=r.newAttributes;for(let U=0,q=k.length;U<q;U++)k[U]=0}function p(k){m(k,0)}function m(k,U){let q=r.newAttributes,R=r.enabledAttributes,F=r.attributeDivisors;q[k]=1,R[k]===0&&(s.enableVertexAttribArray(k),R[k]=1),F[k]!==U&&(s.vertexAttribDivisor(k,U),F[k]=U)}function v(){let k=r.newAttributes,U=r.enabledAttributes;for(let q=0,R=U.length;q<R;q++)U[q]!==k[q]&&(s.disableVertexAttribArray(q),U[q]=0)}function T(k,U,q,R,F,H,K){K===!0?s.vertexAttribIPointer(k,U,q,F,H):s.vertexAttribPointer(k,U,q,R,F,H)}function E(k,U,q,R){x();let F=R.attributes,H=q.getAttributes(),K=U.defaultAttributeValues;for(let le in H){let Y=H[le];if(Y.location>=0){let D=F[le];if(D===void 0&&(le==="instanceMatrix"&&k.instanceMatrix&&(D=k.instanceMatrix),le==="instanceColor"&&k.instanceColor&&(D=k.instanceColor)),D!==void 0){let B=D.normalized,ce=D.itemSize,Ae=e.get(D);if(Ae===void 0)continue;let J=Ae.buffer,_e=Ae.type,Me=Ae.bytesPerElement,Le=_e===s.INT||_e===s.UNSIGNED_INT||D.gpuType===Sl;if(D.isInterleavedBufferAttribute){let Se=D.data,$e=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Vt=D.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Be=0;Be<Y.locationSize;Be++)m(Y.location+Be,Se.meshPerAttribute);k.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Be=0;Be<Y.locationSize;Be++)p(Y.location+Be);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Be=0;Be<Y.locationSize;Be++)T(Y.location+Be,ce/Y.locationSize,_e,B,$e*Me,(Vt+ce/Y.locationSize*Be)*Me,Le)}else{if(D.isInstancedBufferAttribute){for(let Se=0;Se<Y.locationSize;Se++)m(Y.location+Se,D.meshPerAttribute);k.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let Se=0;Se<Y.locationSize;Se++)p(Y.location+Se);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Se=0;Se<Y.locationSize;Se++)T(Y.location+Se,ce/Y.locationSize,_e,B,ce*Me,ce/Y.locationSize*Se*Me,Le)}}else if(K!==void 0){let B=K[le];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(Y.location,B);break;case 3:s.vertexAttrib3fv(Y.location,B);break;case 4:s.vertexAttrib4fv(Y.location,B);break;default:s.vertexAttrib1fv(Y.location,B)}}}}v()}function C(){L();for(let k in i){let U=i[k];for(let q in U){let R=U[q];for(let F in R){let H=R[F];for(let K in H)h(H[K].object),delete H[K];delete R[F]}}delete i[k]}}function w(k){if(i[k.id]===void 0)return;let U=i[k.id];for(let q in U){let R=U[q];for(let F in R){let H=R[F];for(let K in H)h(H[K].object),delete H[K];delete R[F]}}delete i[k.id]}function y(k){for(let U in i){let q=i[U];for(let R in q){let F=q[R];if(F[k.id]===void 0)continue;let H=F[k.id];for(let K in H)h(H[K].object),delete H[K];delete F[k.id]}}}function S(k){for(let U in i){let q=i[U],R=k.isInstancedMesh===!0?k.id:0,F=q[R];if(F!==void 0){for(let H in F){let K=F[H];for(let le in K)h(K[le].object),delete K[le];delete F[H]}delete q[R],Object.keys(q).length===0&&delete i[U]}}}function L(){P(),o=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:L,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:y,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Tx(s,e,t){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sx(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(y){return!(y!==hn&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(y){let S=y===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Di&&y!==Zi&&!S&&i.convert(y)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ve("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:E,maxSamples:C,samples:w}}function wx(s){let e=this,t=null,i=0,n=!1,r=!1,o=new sn,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:i,T=v*4,E=m.clippingState||null;l.value=E,E=h(g,u,T,f);for(let C=0;C!==T;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,E=f;T!==x;++T,E+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var qo=class extends Ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ws(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new at(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:Ls});r.uniforms.tEquirect.value=t;let o=new Q(n,r),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=wi),new Er(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(r)}},If=256,Rx=3,Ax=20,ep=256,tp=16,Cx=3,Px=new M,Ix=new qe,fc=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Er(1,10,null),this._boxMesh=new Q(new at(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:o=256,position:a=Px}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Ix));let p=new Er(i,n,h);return p.position.copy(a),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(If,$h(e))}_fromTexture(e,t){e.mapping===ks||e.mapping===Sr?this._setSize(e.image.length===0?If:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Lf(e,!1,!1),i=Math.log2(e)-Rx;for(let n=0;n<=i;n++)t.texture.mipmaps.push({width:e>>n,height:e>>n});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Lf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let n=this._boxMesh,r=this._cubeCamera;n.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,n),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ks||e.mapping===Sr?(this._cubemapMaterial===null&&(this._cubemapMaterial=kf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Lx(),this._integrationMaterial=Nx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/tp);for(let o=0;o<=i;o++){let a=s.lodToRoughness(o,i);if(o>i-Cx)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(ep*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=kx());let i=this._blurMaterial,n=i.uniforms,r=this._sourceTarget;n.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,n.envMap.value=r.texture,this._renderCube(e,0,i),n.envMap.value=e.texture,this._renderCube(r,0,i)}};function Lf(s,e,t){return new qo(s,{minFilter:Vn,generateMipmaps:e,type:cn,colorSpace:lo,depthBuffer:t})}function Xo(s,e,t){return new Ki({name:s,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:Ci,blending:Ls,depthTest:!1,depthWrite:!1})}function Lx(){return Xo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ep}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Nx(){return Xo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kx(){return Xo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ax}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Nf(){return Xo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function kf(){return Xo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Dx(s){let e=new WeakMap,t=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===El||f===Ml)if(e.has(u)){let g=e.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new qo(g.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===El||f===Ml,x=f===ks||f===Sr;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new fc(s)),p=g?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new fc(s)),p=g?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===El?u.mapping=ks:f===Ml&&(u.mapping=Sr),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Ox(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&io("WebGLRenderer: "+i+" extension not supported."),n}}}function Ux(s,e,t,i){let n={},r=new WeakMap,o=new FinalizationRegistry(g=>delete n[g]);function a(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete n[g.id],o.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return n[x.id]!==void 0||(x.addEventListener("dispose",a),n[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(g){let x=g.attributes;for(let p in x)e.update(x[p],s.ARRAY_BUFFER)}function d(g){let x=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,T=p.count>=65535?mo:po,E=new T(Math.ceil(v/3)*6,1),C=E.array;if(x!==null){let y=x.array;m=x.version;for(let S=0,L=0;S<v;S+=3){let P=y[S+0],k=y[S+1],U=y[S+2];C[L++]=P,C[L++]=k,C[L++]=k,C[L++]=U,C[L++]=U,C[L++]=P}}else{m=p.version;for(let y=0,S=0;y<v;y+=3){let L=y+0,P=y+1,k=y+2;C[S++]=L,C[S++]=P,C[S++]=P,C[S++]=k,C[S++]=k,C[S++]=L}}E.version=m;let w=r.get(g);w&&e.remove(w),r.set(g,E)}function u(g){let x=r.get(g);if(x){let p=g.index;p!==null&&x.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in n){let x=n[g].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Fx(s,e,t){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Bx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:We("WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Hx(s,e,t){let i=new WeakMap,n=new zt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let L=function(){y.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let E=a.attributes.position.count*T,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*C*4*d),y=new fo(w,E,C,d);y.type=Zi,y.needsUpdate=!0;let S=T*4;for(let P=0;P<d;P++){let k=p[P],U=m[P],q=v[P],R=E*C*4*P;for(let F=0;F<k.count;F++){let H=F*S;f===!0&&(n.fromBufferAttribute(k,F),w[R+H+0]=n.x,w[R+H+1]=n.y,w[R+H+2]=n.z,w[R+H+3]=0),g===!0&&(n.fromBufferAttribute(U,F),w[R+H+4]=n.x,w[R+H+5]=n.y,w[R+H+6]=n.z,w[R+H+7]=0),x===!0&&(n.fromBufferAttribute(q,F),w[R+H+8]=n.x,w[R+H+9]=n.y,w[R+H+10]=n.z,w[R+H+11]=q.itemSize===4?n.w:1)}}u={count:d,texture:y,size:new Ce(E,C)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function zx(s,e,t,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Vx={[Ih]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Do]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function Gx(s,e,t,i,n,r){let o=new Ai(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new $t;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let d=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Q(h,d),f=new Cs(-1,1,1,-1,0,1),g=null,x=null,p=!1,m,v=null,T=[],E=!1;this.setSize=function(C,w){o.setSize(C,w),a!==null&&a.setSize(C,w),l!==null&&l.setSize(C,w);for(let y=0;y<T.length;y++){let S=T[y];S.setSize&&S.setSize(C,w)}},this.setEffects=function(C){T=C,E=T.length>0&&T[0].isRenderPass===!0;let w=o.width,y=o.height;T.length>0&&a===null&&(a=new Ai(w,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Ai(w,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}));let S=n===!0&&T.some(L=>L.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new Hn(w,y),r===!0&&(c.format=Gn,c.type=Ds)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let L=0;L<T.length;L++){let P=T[L];P.setSize&&P.setSize(w,y),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(C,w){if(p||C.toneMapping===Sn&&T.length===0)return!1;if(v=w,w!==null){let y=w.width,S=w.height;(o.width!==y||o.height!==S)&&this.setSize(y,S)}return E===!1&&C.setRenderTarget(o),m=C.toneMapping,C.toneMapping=Sn,!0},this.hasRenderPass=function(){return E},this.end=function(C,w){C.toneMapping=m,p=!0;let y=o,S=a;for(let L=0;L<T.length;L++){let P=T[L];P.enabled!==!1&&(P.render(C,S,y,w),P.needsSwap!==!1&&(y=S,S=S===a?l:a))}if(g!==C.outputColorSpace||x!==C.toneMapping){g=C.outputColorSpace,x=C.toneMapping,d.defines={},ut.getTransfer(g)===Mt&&(d.defines.SRGB_TRANSFER="");let L=Vx[x];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=y.texture,C.setRenderTarget(v),C.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var ip=new Ri,np=new Hn(1,1),sp=new vo(1),rp=new fo,op=new ja,ap=new ws,Df=[],Of=[],Uf=new Float32Array(16),Ff=new Float32Array(9),Bf=new Float32Array(4);function Ar(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Df[n];if(r===void 0&&(r=new Float32Array(n),Df[n]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function ni(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function si(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function mc(s,e){let t=Of[e];t===void 0&&(t=new Int32Array(e),Of[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Wx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;s.uniform2fv(this.addr,e),si(t,e)}}function Xx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ni(t,e))return;s.uniform3fv(this.addr,e),si(t,e)}}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;s.uniform4fv(this.addr,e),si(t,e)}}function Kx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),si(t,e)}else{if(ni(t,i))return;Bf.set(i),s.uniformMatrix2fv(this.addr,!1,Bf),si(t,i)}}function Zx(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),si(t,e)}else{if(ni(t,i))return;Ff.set(i),s.uniformMatrix3fv(this.addr,!1,Ff),si(t,i)}}function $x(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(ni(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),si(t,e)}else{if(ni(t,i))return;Uf.set(i),s.uniformMatrix4fv(this.addr,!1,Uf),si(t,i)}}function Jx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;s.uniform2iv(this.addr,e),si(t,e)}}function Qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;s.uniform3iv(this.addr,e),si(t,e)}}function ev(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;s.uniform4iv(this.addr,e),si(t,e)}}function tv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ni(t,e))return;s.uniform2uiv(this.addr,e),si(t,e)}}function nv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ni(t,e))return;s.uniform3uiv(this.addr,e),si(t,e)}}function sv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ni(t,e))return;s.uniform4uiv(this.addr,e),si(t,e)}}function gc(s){return s.version===0&&(s.compareFunction=Xh,s.needsUpdate=!0),s}function rv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?r=gc(np):r=ip,t.setTexture2D(e||r,n)}function ov(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||op,n)}function av(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=gc(sp):r=ap,t.setTextureCube(e||r,n)}function lv(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||rp,n)}function cv(s){switch(s){case 5126:return Wx;case 35664:return qx;case 35665:return Xx;case 35666:return Yx;case 35674:return Kx;case 35675:return Zx;case 35676:return $x;case 5124:case 35670:return Jx;case 35667:case 35671:return jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return iv;case 36295:return nv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return rv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}function hv(s,e){s.uniform1fv(this.addr,e)}function uv(s,e){let t=Ar(e,this.size,2);s.uniform2fv(this.addr,t)}function dv(s,e){let t=Ar(e,this.size,3);s.uniform3fv(this.addr,t)}function fv(s,e){let t=Ar(e,this.size,4);s.uniform4fv(this.addr,t)}function pv(s,e){let t=Ar(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mv(s,e){let t=Ar(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gv(s,e){let t=Ar(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yv(s,e){s.uniform1iv(this.addr,e)}function xv(s,e){s.uniform2iv(this.addr,e)}function vv(s,e){s.uniform3iv(this.addr,e)}function _v(s,e){s.uniform4iv(this.addr,e)}function bv(s,e){s.uniform1uiv(this.addr,e)}function Ev(s,e){s.uniform2uiv(this.addr,e)}function Mv(s,e){s.uniform3uiv(this.addr,e)}function Tv(s,e){s.uniform4uiv(this.addr,e)}function Sv(s,e,t){let i=this.cache,n=e.length,r=mc(t,n);ni(i,r)||(s.uniform1iv(this.addr,r),si(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=gc(np):o=ip;for(let a=0;a!==n;++a)t.setTexture2D(e[a]||o,r[a])}function wv(s,e,t){let i=this.cache,n=e.length,r=mc(t,n);ni(i,r)||(s.uniform1iv(this.addr,r),si(i,r));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||op,r[o])}function Rv(s,e,t){let i=this.cache,n=e.length,r=mc(t,n);ni(i,r)||(s.uniform1iv(this.addr,r),si(i,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=gc(sp):o=ap;for(let a=0;a!==n;++a)t.setTextureCube(e[a]||o,r[a])}function Av(s,e,t){let i=this.cache,n=e.length,r=mc(t,n);ni(i,r)||(s.uniform1iv(this.addr,r),si(i,r));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||rp,r[o])}function Cv(s){switch(s){case 5126:return hv;case 35664:return uv;case 35665:return dv;case 35666:return fv;case 35674:return pv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return yv;case 35667:case 35671:return xv;case 35668:case 35672:return vv;case 35669:case 35673:return _v;case 5125:return bv;case 36294:return Ev;case 36295:return Mv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return wv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Av}}var uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cv(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cv(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(e,t[a.id],i)}}},cu=/(\w+)(\])?(\[|\.)?/g;function Hf(s,e){s.seq.push(e),s.map[e.id]=e}function Pv(s,e,t){let i=s.name,n=i.length;for(cu.lastIndex=0;;){let r=cu.exec(i),o=cu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Hf(t,c===void 0?new uu(a,s,e):new du(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new fu(a),Hf(t,d)),t=d}}}var Rr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Pv(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function zf(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var Iv=37297,Lv=0;function Nv(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Vf=new Je;function kv(s){ut._getMatrix(Vf,ut.workingColorSpace,s);let e=`mat3( ${Vf.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(s)){case co:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Gf(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Nv(s.getShaderSource(e),a)}else return r}function Dv(s,e){let t=kv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Ov={[Ih]:"Linear",[Lh]:"Reinhard",[Nh]:"Cineon",[Do]:"ACESFilmic",[Dh]:"AgX",[Oh]:"Neutral",[kh]:"Custom"};function Uv(s,e){let t=Ov[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new M;function Fv(){ut.getLuminanceCoefficients(dc);let s=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Hv(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zv(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wo(s){return s!==""}function Wf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(s){return s.replace(Vv,Gv)}function Gv(s,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pu(t)}var Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(s){return s.replace(Wv,qv)}function qv(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Yf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Xv={[Is]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function Yv(s){return Xv[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kv={[Sr]:"ENVMAP_MODE_REFRACTION"};function Zv(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Kv[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={[Ph]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[lf]:"ENVMAP_BLENDING_ADD"};function Jv(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":$v[s.combine]||"ENVMAP_BLENDING_NONE"}function jv(s,e,t,i){let n=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Yv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Zv(t),d=Jv(t),u=Bv(t),f=Hv(r),g=n.createProgram(),x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Wo).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(x=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=pu(o),o=Wf(o,t),o=qf(o,t),a=pu(a),a=Wf(a,t),a=qf(a,t),o=Xf(o),a=Xf(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+x+o,T=m+p+a,E=zf(n,n.VERTEX_SHADER,v),C=zf(n,n.FRAGMENT_SHADER,T);n.attachShader(g,E),n.attachShader(g,C),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(P){if(s.debug.checkShaderErrors){let k=n.getProgramInfoLog(g)||"",U=n.getShaderInfoLog(E)||"",q=n.getShaderInfoLog(C)||"",R=k.trim(),F=U.trim(),H=q.trim(),K=!0,le=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,g,E,C);else{let Y=Gf(n,E,"vertex"),D=Gf(n,C,"fragment");We("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+R+`
`+Y+`
`+D)}else R!==""?Ve("WebGLProgram: Program Info Log:",R):(F===""||H==="")&&(le=!1);le&&(P.diagnostics={runnable:K,programLog:R,vertexShader:{log:F,prefix:x},fragmentShader:{log:H,prefix:p}})}n.deleteShader(E),n.deleteShader(C),y=new Rr(n,g),S=zv(n,g)}let y;this.getUniforms=function(){return y===void 0&&w(this),y};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=n.getProgramParameter(g,Iv)),L},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=C,this}var Qv=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gu(e),t.set(e,i)),i}},gu=class{constructor(e){this.id=Qv++,this.code=e,this.usedTimes=0}};function e_(s){return s===ms||s===zo||s===Vo}function t_(s,e,t,i,n,r){let o=new fr,a=new mu,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,S,L,P,k,U){let q=P.fog,R=k.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,K=e.get(y.envMap||F,H),le=u[y.type],Y=i.precision;y.precision!==null&&(Y=i.getMaxPrecision(y.precision),Y!==y.precision&&Ve("WebGLProgram.getParameters:",y.precision,"not supported, using",Y,"instead."));let D=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,B=D!==void 0?D.length:0,ce=0;R.morphAttributes.position!==void 0&&(ce=1),R.morphAttributes.normal!==void 0&&(ce=2),R.morphAttributes.color!==void 0&&(ce=3);let Ae,J,_e,Me;if(le){let Te=Rn[le];Ae=Te.vertexShader,J=Te.fragmentShader}else{Ae=y.vertexShader,J=y.fragmentShader;let Te=a.getVertexShaderStage(y),pt=a.getFragmentShaderStage(y);a.update(y,Te,pt),_e=Te.id,Me=pt.id}let Le=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),$e=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,Be=!!y.map,gt=!!y.matcap,_t=!!K,Xe=_t&&K.isPMREMTexture===!0,Ge=!!y.aoMap,Pt=!!y.lightMap,fi=!!y.bumpMap&&y.wireframe===!1,Lt=!!y.normalMap,pi=!!y.displacementMap,Xt=!!y.emissiveMap,Li=!!y.metalnessMap,Bt=!!y.roughnessMap,mi=y.anisotropy>0,O=y.clearcoat>0,Ni=y.diffuseRoughness>0,St=y.dispersion>0,Nt=y.retroreflectivity>0,Ee=y.iridescence>0,Yt=y.sheen>0,Fe=y.transmission>0,Ye=mi&&!!y.anisotropyMap,A=O&&!!y.clearcoatMap,_=O&&!!y.clearcoatNormalMap,V=O&&!!y.clearcoatRoughnessMap,he=Ni&&!!y.diffuseRoughnessMap,se=Ee&&!!y.iridescenceMap,me=Ee&&!!y.iridescenceThicknessMap,ge=Yt&&!!y.sheenColorMap,te=Yt&&!!y.sheenRoughnessMap,ie=!!y.specularMap,fe=!!y.specularColorMap,I=!!y.specularIntensityMap,ne=Fe&&!!y.transmissionMap,ee=Fe&&!!y.thicknessMap,ye=!!y.gradientMap,de=!!y.alphaMap,pe=y.alphaTest>0,Ue=!!y.alphaHash,et=!!y.extensions,ae=Sn;y.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ae=s.toneMapping);let ke=Xe?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,Qe={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:J,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:Y,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:$e,instancingColor:$e&&k.instanceColor!==null,instancingMorph:$e&&k.morphTexture!==null,outputColorSpace:Le===null?s.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Be,matcap:gt,envMap:_t,envMapMode:_t&&K.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?ke.length-1:null,envMapSize:Xe?ke[0].width:null,aoMap:Ge,lightMap:Pt,bumpMap:fi,normalMap:Lt,displacementMap:pi,emissiveMap:Xt,normalMapObjectSpace:Lt&&y.normalMapType===uf,normalMapTangentSpace:Lt&&y.normalMapType===lc,packedNormalMap:Lt&&y.normalMapType===lc&&e_(y.normalMap.format),metalnessMap:Li,roughnessMap:Bt,anisotropy:mi,anisotropyMap:Ye,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:_,clearcoatRoughnessMap:V,diffuseRoughness:Ni,diffuseRoughnessMap:he,dispersion:St,retroreflection:Nt,iridescence:Ee,iridescenceMap:se,iridescenceThicknessMap:me,sheen:Yt,sheenColorMap:ge,sheenRoughnessMap:te,specularMap:ie,specularColorMap:fe,specularIntensityMap:I,transmission:Fe,transmissionMap:ne,thicknessMap:ee,gradientMap:ye,opaque:y.transparent===!1&&y.blending===Tr&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:pe,alphaHash:Ue,combine:y.combine,mapUv:Be&&f(y.map.channel),aoMapUv:Ge&&f(y.aoMap.channel),lightMapUv:Pt&&f(y.lightMap.channel),bumpMapUv:fi&&f(y.bumpMap.channel),normalMapUv:Lt&&f(y.normalMap.channel),displacementMapUv:pi&&f(y.displacementMap.channel),emissiveMapUv:Xt&&f(y.emissiveMap.channel),metalnessMapUv:Li&&f(y.metalnessMap.channel),roughnessMapUv:Bt&&f(y.roughnessMap.channel),anisotropyMapUv:Ye&&f(y.anisotropyMap.channel),clearcoatMapUv:A&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:_&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&f(y.diffuseRoughnessMap.channel),iridescenceMapUv:se&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:te&&f(y.sheenRoughnessMap.channel),specularMapUv:ie&&f(y.specularMap.channel),specularColorMapUv:fe&&f(y.specularColorMap.channel),specularIntensityMapUv:I&&f(y.specularIntensityMap.channel),transmissionMapUv:ne&&f(y.transmissionMap.channel),thicknessMapUv:ee&&f(y.thicknessMap.channel),alphaMapUv:de&&f(y.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Lt||mi),vertexNormals:!!R.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!R.attributes.uv&&(Be||de),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||R.attributes.normal===void 0&&Lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&ut.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:Xt&&y.emissiveMap.isVideoTexture===!0&&ut.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===Ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||Vt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function x(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)S.push(L),S.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(p(S,y),m(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapPMREM),y.push(S.envMapMaxLod),y.push(S.envMapSize),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.diffuseRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.numSunLights),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numSunLightShadows),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.numLightProbeGrids),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function m(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function v(y){let S=u[y.type],L;if(S){let P=Rn[S];L=Af.clone(P.uniforms)}else L=y.uniforms;return L}function T(y,S){let L=h.get(S);return L!==void 0?++L.usedTimes:(L=new jv(s,S,y,n),c.push(L),h.set(S,L)),L}function E(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function C(y){a.remove(y)}function w(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:w}}function i_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function n_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Kf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zf(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,p,m){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},s[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function l(u,f,g,x,p,m,v){v.reversedDepth===!0&&(p=-p);let T=a(u,f,g,x,p,m);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):t.push(T)}function c(u,f,g,x,p,m){let v=a(u,f,g,x,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||n_),i.length>1&&i.sort(f||Kf),n.length>1&&n.sort(f||Kf)}function d(){for(let u=e,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function s_(){let s=new WeakMap;function e(i,n){let r=s.get(i),o;return r===void 0?(o=new Zf,s.set(i,[o])):n>=r.length?(o=new Zf,r.push(o)):o=r[n],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function r_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new M,color:new qe};break;case"SpotLight":t={position:new M,direction:new M,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function o_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var a_=0;function l_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function c_(s){let e=new r_,t=o_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);let n=new M,r=new vt,o=new vt;function a(c){let h=0,d=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,v=0,T=0,E=0,C=0,w=0,y=0,S=0,L=0,P=0;c.sort(l_);for(let U=0,q=c.length;U<q;U++){let R=c[U],F=R.color,H=R.intensity,K=R.distance,le=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ms?le=R.shadow.map.texture:le=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*H,d+=F.g*H,u+=F.b*H;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],H);P++}else if(R.isSunLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let D=R.shadow,B=t.get(R);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),i.sunShadow[g]=B,i.sunShadowMap[g]=le;let ce=D.getViewportCount();for(let Ae=0;Ae<ce;Ae++)i.sunShadowMatrix[x+Ae]=D.getMatrix(Ae),i.sunShadowCascade[x+Ae]=D._cascadeData[Ae];x+=ce,g++}i.sun[f]=Y,f++}else if(R.isDirectionalLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let D=R.shadow,B=t.get(R);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=le,i.directionalShadowMatrix[p]=R.shadow.matrix,C++}i.directional[p]=Y,p++}else if(R.isSpotLight){let Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(F).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[v]=Y;let D=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,D.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[v]=D.matrix,R.castShadow){let B=t.get(R);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=le,y++}v++}else if(R.isRectAreaLight){let Y=e.get(R);Y.color.copy(F).multiplyScalar(H),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[T]=Y,T++}else if(R.isPointLight){let Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){let D=R.shadow,B=t.get(R);B.shadowIntensity=D.intensity,B.shadowBias=D.bias,B.shadowNormalBias=D.normalBias,B.shadowRadius=D.radius,B.shadowMapSize=D.mapSize,B.shadowCameraNear=D.camera.near,B.shadowCameraFar=D.camera.far,i.pointShadow[m]=B,i.pointShadowMap[m]=le,i.pointShadowMatrix[m]=R.shadow.matrix,w++}i.point[m]=Y,m++}else if(R.isHemisphereLight){let Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(H),Y.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[E]=Y,E++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let k=i.hash;(k.sunLength!==f||k.directionalLength!==p||k.pointLength!==m||k.spotLength!==v||k.rectAreaLength!==T||k.hemiLength!==E||k.numSunShadows!==g||k.numDirectionalShadows!==C||k.numPointShadows!==w||k.numSpotShadows!==y||k.numSpotMaps!==S||k.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=p,i.spot.length=v,i.rectArea.length=T,i.point.length=m,i.hemi.length=E,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,k.sunLength=f,k.directionalLength=p,k.pointLength=m,k.spotLength=v,k.rectAreaLength=T,k.hemiLength=E,k.numSunShadows=g,k.numDirectionalShadows=C,k.numPointShadows=w,k.numSpotShadows=y,k.numSpotMaps=S,k.numLightProbes=P,i.version=a_++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let E=c[v];if(E.isSunLight){let C=i.sun[d];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),d++}else if(E.isDirectionalLight){let C=i.directional[u];C.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(m),u++}else if(E.isSpotLight){let C=i.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),n.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(n),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){let C=i.rectArea[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){let C=i.point[f];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:i}}function $f(s){let e=new c_(s),t=[],i=[],n=[];function r(d){h.camera=d,t.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function h_(s){let e=new WeakMap;function t(n,r=0){let o=e.get(n),a;return o===void 0?(a=new $f(s),e.set(n,[a])):r>=o.length?(a=new $f(s),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var u_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,f_=[new M(1,0,0),new M(-1,0,0),new M(0,1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1)],p_=[new M(0,-1,0),new M(0,-1,0),new M(0,0,1),new M(0,0,-1),new M(0,-1,0),new M(0,-1,0)],Jf=new vt,Go=new M,hu=new M;function m_(s,e,t){let i=new ls,n=new Ce,r=new Ce,o=new zt,a=new ll,l=new cl,c={},h=t.maxTextureSize,d={[fs]:Ci,[Ci]:fs,[Ei]:Ei},u=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:u_,fragmentShader:d_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new $t;g.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Q(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Is;let m=this.type;this.render=function(w,y,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===zd&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Is);let L=s.getRenderTarget(),P=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Ls),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=m!==this.type;q&&y.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(F=>F.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,F=w.length;R<F;R++){let H=w[R],K=H.shadow;if(K===void 0){Ve("WebGLShadowMap:",H,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);let le=K.getFrameExtents();n.multiply(le),r.copy(K.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/le.x),n.x=r.x*le.x,K.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/le.y),n.y=r.y*le.y,K.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=Y,K.map===null||q===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Mr){if(H.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Ai(n.x,n.y,{format:ms,type:cn,minFilter:wi,magFilter:wi,generateMipmaps:!1}),K.map.texture.name=H.name+".shadowMap",K.map.depthTexture=new Hn(n.x,n.y,Zi),K.map.depthTexture.name=H.name+".shadowMapDepth",K.map.depthTexture.format=Un,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=ci,K.map.depthTexture.magFilter=ci}else H.isPointLight?(K.map=new qo(n.x),K.map.depthTexture=new vo(n.x,ln)):(K.map=new Ai(n.x,n.y),K.map.depthTexture=new Hn(n.x,n.y,ln)),K.map.depthTexture.name=H.name+".shadowMap",K.map.depthTexture.format=Un,this.type===Is?(K.map.depthTexture.compareFunction=Y?qh:Wh,K.map.depthTexture.minFilter=wi,K.map.depthTexture.magFilter=wi):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=ci,K.map.depthTexture.magFilter=ci);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==n.x||K.map.height!==n.y)&&K.map.setSize(n.x,n.y);let D=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();H.isPointLight!==!0&&K.updateMatrices(H,S);let B=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:S.layers;for(let ce=0;ce<D;ce++){let Ae=K.getCamera(ce);if(H.isPointLight){let J=K.camera,_e=K.matrix,Me=H.distance||J.far;Me!==J.far&&(J.far=Me,J.updateProjectionMatrix()),Go.setFromMatrixPosition(H.matrixWorld),J.position.copy(Go),hu.copy(J.position),hu.add(f_[ce]),J.up.copy(p_[ce]),J.lookAt(hu),J.updateMatrixWorld(),_e.makeTranslation(-Go.x,-Go.y,-Go.z),Jf.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Jf,J.coordinateSystem,J.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,ce),s.clear();else{ce===0&&(s.setRenderTarget(K.map),s.clear());let J=K.getViewport(ce);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),U.viewport(o)}i=K.getFrustum(ce),E(y,S,Ae,H,B,this.type)}K.isPointLightShadow!==!0&&this.type===Mr&&v(K,S),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(L,P,k)};function v(w,y){let S=e.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ai(n.x,n.y,{format:ms,type:cn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(y,null,S,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(y,null,S,f,x,null)}function T(w,y,S,L){let P=null,k=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(k!==void 0)P=k;else if(P=S.isPointLight===!0?l:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){let U=P.uuid,q=y.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let F=R[q];F===void 0&&(F=P.clone(),R[q]=F,y.addEventListener("dispose",C)),P=F}if(P.visible=y.visible,P.wireframe=y.wireframe,L===Mr?P.side=y.shadowSide!==null?y.shadowSide:y.side:P.side=y.shadowSide!==null?y.shadowSide:d[y.side],P.alphaMap=y.alphaMap,P.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,P.map=y.map,P.clipShadows=y.clipShadows,P.clippingPlanes=y.clippingPlanes,P.clipIntersection=y.clipIntersection,P.displacementMap=y.displacementMap,P.displacementScale=y.displacementScale,P.displacementBias=y.displacementBias,P.wireframeLinewidth=y.wireframeLinewidth,P.linewidth=y.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=s.properties.get(P);U.light=S}return P}function E(w,y,S,L,P,k){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&k===Mr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let R=e.update(w),F=w.material;if(Array.isArray(F)){let H=R.groups;for(let K=0,le=H.length;K<le;K++){let Y=H[K],D=F[Y.materialIndex];if(D&&D.visible){let B=T(w,D,L,k);w.onBeforeShadow(s,w,y,S,R,B,Y),s.renderBufferDirect(S,null,R,B,w,Y),w.onAfterShadow(s,w,y,S,R,B,Y)}}}else if(F.visible){let H=T(w,F,L,k);w.onBeforeShadow(s,w,y,S,R,H,null),s.renderBufferDirect(S,null,R,H,w,null),w.onAfterShadow(s,w,y,S,R,H,null)}}let q=w.children;for(let R=0,F=q.length;R<F;R++)E(q[R],y,S,L,P,k)}function C(w){w.target.removeEventListener("dispose",C);for(let S in c){let L=c[S],P=w.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function g_(s,e){function t(){let I=!1,ne=new zt,ee=null,ye=new zt(0,0,0,0);return{setMask:function(de){ee!==de&&!I&&(s.colorMask(de,de,de,de),ee=de)},setLocked:function(de){I=de},setClear:function(de,pe,Ue,et,ae){ae===!0&&(de*=et,pe*=et,Ue*=et),ne.set(de,pe,Ue,et),ye.equals(ne)===!1&&(s.clearColor(de,pe,Ue,et),ye.copy(ne))},reset:function(){I=!1,ee=null,ye.set(-1,0,0,0)}}}function i(){let I=!1,ne=!1,ee=null,ye=null,de=null;return{setReversed:function(pe){if(ne!==pe){let Ue=e.get("EXT_clip_control");pe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ne=pe;let et=de;de=null,this.setClear(et)}},getReversed:function(){return ne},setTest:function(pe){pe?Se(s.DEPTH_TEST):$e(s.DEPTH_TEST)},setMask:function(pe){ee!==pe&&!I&&(s.depthMask(pe),ee=pe)},setFunc:function(pe){if(ne&&(pe=bf[pe]),ye!==pe){switch(pe){case za:s.depthFunc(s.NEVER);break;case Va:s.depthFunc(s.ALWAYS);break;case Ga:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case qa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=pe}},setLocked:function(pe){I=pe},setClear:function(pe){de!==pe&&(de=pe,ne&&(pe=1-pe),s.clearDepth(pe))},reset:function(){I=!1,ee=null,ye=null,de=null,ne=!1}}}function n(){let I=!1,ne=null,ee=null,ye=null,de=null,pe=null,Ue=null,et=null,ae=null;return{setTest:function(ke){I||(ke?Se(s.STENCIL_TEST):$e(s.STENCIL_TEST))},setMask:function(ke){ne!==ke&&!I&&(s.stencilMask(ke),ne=ke)},setFunc:function(ke,Qe,Te){(ee!==ke||ye!==Qe||de!==Te)&&(s.stencilFunc(ke,Qe,Te),ee=ke,ye=Qe,de=Te)},setOp:function(ke,Qe,Te){(pe!==ke||Ue!==Qe||et!==Te)&&(s.stencilOp(ke,Qe,Te),pe=ke,Ue=Qe,et=Te)},setLocked:function(ke){I=ke},setClear:function(ke){ae!==ke&&(s.clearStencil(ke),ae=ke)},reset:function(){I=!1,ne=null,ee=null,ye=null,de=null,pe=null,Ue=null,et=null,ae=null}}}let r=new t,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,E=null,C=null,w=null,y=null,S=new qe(0,0,0),L=0,P=!1,k=null,U=null,q=null,R=null,F=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,le=0,Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=le>=1):Y.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=le>=2);let D=null,B={},ce=s.getParameter(s.SCISSOR_BOX),Ae=s.getParameter(s.VIEWPORT),J=new zt().fromArray(ce),_e=new zt().fromArray(Ae);function Me(I,ne,ee,ye){let de=new Uint8Array(4),pe=s.createTexture();s.bindTexture(I,pe),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<ee;Ue++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,de):s.texImage2D(ne+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,de);return pe}let Le={};Le[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(s.DEPTH_TEST),o.setFunc(cr),fi(!1),Lt(Sh),Se(s.CULL_FACE),Ge(Ls);function Se(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function $e(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Vt(I,ne){return u[I]!==ne?(s.bindFramebuffer(I,ne),u[I]=ne,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Be(I,ne){let ee=g,ye=!1;if(I){ee=f.get(ne),ee===void 0&&(ee=[],f.set(ne,ee));let de=I.textures;if(ee.length!==de.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,Ue=de.length;pe<Ue;pe++)ee[pe]=s.COLOR_ATTACHMENT0+pe;ee.length=de.length,ye=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,ye=!0);ye&&s.drawBuffers(ee)}function gt(I){return x!==I?(s.useProgram(I),x=I,!0):!1}let _t={[Ns]:s.FUNC_ADD,[Gd]:s.FUNC_SUBTRACT,[Wd]:s.FUNC_REVERSE_SUBTRACT};_t[qd]=s.MIN,_t[Xd]=s.MAX;let Xe={[Yd]:s.ZERO,[Kd]:s.ONE,[Zd]:s.SRC_COLOR,[Ah]:s.SRC_ALPHA,[tf]:s.SRC_ALPHA_SATURATE,[Qd]:s.DST_COLOR,[Jd]:s.DST_ALPHA,[$d]:s.ONE_MINUS_SRC_COLOR,[Ch]:s.ONE_MINUS_SRC_ALPHA,[ef]:s.ONE_MINUS_DST_COLOR,[jd]:s.ONE_MINUS_DST_ALPHA,[nf]:s.CONSTANT_COLOR,[sf]:s.ONE_MINUS_CONSTANT_COLOR,[rf]:s.CONSTANT_ALPHA,[of]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(I,ne,ee,ye,de,pe,Ue,et,ae,ke){if(I===Ls){p===!0&&($e(s.BLEND),p=!1);return}if(p===!1&&(Se(s.BLEND),p=!0),I!==Vd){if(I!==m||ke!==P){if((v!==Ns||C!==Ns)&&(s.blendEquation(s.FUNC_ADD),v=Ns,C=Ns),ke)switch(I){case Tr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ps:s.blendFunc(s.ONE,s.ONE);break;case wh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Rh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:We("WebGLState: Invalid blending: ",I);break}else switch(I){case Tr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",I);break}T=null,E=null,w=null,y=null,S.set(0,0,0),L=0,m=I,P=ke}return}de=de||ne,pe=pe||ee,Ue=Ue||ye,(ne!==v||de!==C)&&(s.blendEquationSeparate(_t[ne],_t[de]),v=ne,C=de),(ee!==T||ye!==E||pe!==w||Ue!==y)&&(s.blendFuncSeparate(Xe[ee],Xe[ye],Xe[pe],Xe[Ue]),T=ee,E=ye,w=pe,y=Ue),(et.equals(S)===!1||ae!==L)&&(s.blendColor(et.r,et.g,et.b,ae),S.copy(et),L=ae),m=I,P=!1}function Pt(I,ne){I.side===Ei?$e(s.CULL_FACE):Se(s.CULL_FACE);let ee=I.side===Ci;ne&&(ee=!ee),fi(ee),I.blending===Tr&&I.transparent===!1?Ge(Ls):Ge(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let ye=I.stencilWrite;a.setTest(ye),ye&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Xt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):$e(s.SAMPLE_ALPHA_TO_COVERAGE)}function fi(I){k!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),k=I)}function Lt(I){I!==Bd?(Se(s.CULL_FACE),I!==U&&(I===Sh?s.cullFace(s.BACK):I===Hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$e(s.CULL_FACE),U=I}function pi(I){I!==q&&(K&&s.lineWidth(I),q=I)}function Xt(I,ne,ee){I?(Se(s.POLYGON_OFFSET_FILL),(R!==ne||F!==ee)&&(R=ne,F=ee,o.getReversed()&&(ne=-ne,ee=-ee),s.polygonOffset(ne,ee))):$e(s.POLYGON_OFFSET_FILL)}function Li(I){I?Se(s.SCISSOR_TEST):$e(s.SCISSOR_TEST)}function Bt(I){I===void 0&&(I=s.TEXTURE0+H-1),D!==I&&(s.activeTexture(I),D=I)}function mi(I,ne,ee){ee===void 0&&(D===null?ee=s.TEXTURE0+H-1:ee=D);let ye=B[ee];ye===void 0&&(ye={type:void 0,texture:void 0},B[ee]=ye),(ye.type!==I||ye.texture!==ne)&&(D!==ee&&(s.activeTexture(ee),D=ee),s.bindTexture(I,ne||Le[I]),ye.type=I,ye.texture=ne)}function O(){let I=B[D];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ni(){try{s.compressedTexImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function St(){try{s.compressedTexImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function Nt(){try{s.texSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function Ee(){try{s.texSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function Yt(){try{s.compressedTexSubImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function Fe(){try{s.compressedTexSubImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function Ye(){try{s.texStorage2D(...arguments)}catch(I){We("WebGLState:",I)}}function A(){try{s.texStorage3D(...arguments)}catch(I){We("WebGLState:",I)}}function _(){try{s.texImage2D(...arguments)}catch(I){We("WebGLState:",I)}}function V(){try{s.texImage3D(...arguments)}catch(I){We("WebGLState:",I)}}function he(I){return d[I]!==void 0?d[I]:s.getParameter(I)}function se(I,ne){d[I]!==ne&&(s.pixelStorei(I,ne),d[I]=ne)}function me(I){J.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),J.copy(I))}function ge(I){_e.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function te(I,ne){let ee=c.get(ne);ee===void 0&&(ee=new WeakMap,c.set(ne,ee));let ye=ee.get(I);ye===void 0&&(ye=s.getUniformBlockIndex(ne,I.name),s.uniformBlockBinding(ne,ye,ye),ee.set(I,ye))}function ie(I,ne,ee){let de=c.get(ne).get(I);l[de]!==ee&&(s.bindBufferBase(s.UNIFORM_BUFFER,de,ee),l[de]=ee)}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},D=null,B={},u={},l={},f=new WeakMap,g=[],x=null,p=!1,m=null,v=null,T=null,E=null,C=null,w=null,y=null,S=new qe(0,0,0),L=0,P=!1,k=null,U=null,q=null,R=null,F=null,J.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:$e,bindFramebuffer:Vt,drawBuffers:Be,useProgram:gt,setBlending:Ge,setMaterial:Pt,setFlipSided:fi,setCullFace:Lt,setLineWidth:pi,setPolygonOffset:Xt,setScissorTest:Li,activeTexture:Bt,bindTexture:mi,unbindTexture:O,compressedTexImage2D:Ni,compressedTexImage3D:St,texImage2D:_,texImage3D:V,pixelStorei:se,getParameter:he,updateUBOMapping:te,uniformBlockBinding:ie,texStorage2D:Ye,texStorage3D:A,texSubImage2D:Nt,texSubImage3D:Ee,compressedTexSubImage2D:Yt,compressedTexSubImage3D:Fe,scissor:me,viewport:ge,reset:fe}}function y_(s,e,t,i,n,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,x=new FinalizationRegistry(A=>g.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,_){return p?new OffscreenCanvas(A,_):ho("canvas")}function v(A,_,V){let he=1,se=Ye(A);if((se.width>V||se.height>V)&&(he=V/Math.max(se.width,se.height)),he<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let me=Math.floor(he*se.width),ge=Math.floor(he*se.height);u===void 0&&(u=m(me,ge));let te=_?m(me,ge):u;return te.width=me,te.height=ge,te.getContext("2d").drawImage(A,0,0,me,ge),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+me+"x"+ge+")."),te}else return"data"in A&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),A;return A}function T(A){return A.generateMipmaps}function E(A){s.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(A,_,V,he,se,me=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ge;he&&(ge=e.get("EXT_texture_norm16"),ge||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=_;if(_===s.RED&&(V===s.FLOAT&&(te=s.R32F),V===s.HALF_FLOAT&&(te=s.R16F),V===s.UNSIGNED_BYTE&&(te=s.R8),V===s.UNSIGNED_SHORT&&ge&&(te=ge.R16_EXT),V===s.SHORT&&ge&&(te=ge.R16_SNORM_EXT)),_===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(te=s.R8UI),V===s.UNSIGNED_SHORT&&(te=s.R16UI),V===s.UNSIGNED_INT&&(te=s.R32UI),V===s.BYTE&&(te=s.R8I),V===s.SHORT&&(te=s.R16I),V===s.INT&&(te=s.R32I)),_===s.RG&&(V===s.FLOAT&&(te=s.RG32F),V===s.HALF_FLOAT&&(te=s.RG16F),V===s.UNSIGNED_BYTE&&(te=s.RG8),V===s.UNSIGNED_SHORT&&ge&&(te=ge.RG16_EXT),V===s.SHORT&&ge&&(te=ge.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(te=s.RG8UI),V===s.UNSIGNED_SHORT&&(te=s.RG16UI),V===s.UNSIGNED_INT&&(te=s.RG32UI),V===s.BYTE&&(te=s.RG8I),V===s.SHORT&&(te=s.RG16I),V===s.INT&&(te=s.RG32I)),_===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(te=s.RGB8UI),V===s.UNSIGNED_SHORT&&(te=s.RGB16UI),V===s.UNSIGNED_INT&&(te=s.RGB32UI),V===s.BYTE&&(te=s.RGB8I),V===s.SHORT&&(te=s.RGB16I),V===s.INT&&(te=s.RGB32I)),_===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),V===s.UNSIGNED_INT&&(te=s.RGBA32UI),V===s.BYTE&&(te=s.RGBA8I),V===s.SHORT&&(te=s.RGBA16I),V===s.INT&&(te=s.RGBA32I)),_===s.RGB&&(V===s.UNSIGNED_SHORT&&ge&&(te=ge.RGB16_EXT),V===s.SHORT&&ge&&(te=ge.RGB16_SNORM_EXT),V===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),V===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),_===s.RGBA){let ie=me?co:ut.getTransfer(se);V===s.FLOAT&&(te=s.RGBA32F),V===s.HALF_FLOAT&&(te=s.RGBA16F),V===s.UNSIGNED_BYTE&&(te=ie===Mt?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT&&ge&&(te=ge.RGBA16_EXT),V===s.SHORT&&ge&&(te=ge.RGBA16_SNORM_EXT),V===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(A,_){let V;return A?_===null||_===ln||_===Ds?V=s.DEPTH24_STENCIL8:_===Zi?V=s.DEPTH32F_STENCIL8:_===wr&&(V=s.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ln||_===Ds?V=s.DEPTH_COMPONENT24:_===Zi?V=s.DEPTH_COMPONENT32F:_===wr&&(V=s.DEPTH_COMPONENT16),V}function S(A,_){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==ci&&A.minFilter!==wi?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function L(A){let _=new WeakRef(A);i.get(A).__ref=_,g.add(_),x.register(A,_,_)}function P(A){let _=i.get(A).__ref;_!==void 0&&(g.delete(_),x.unregister(_))}function k(A){q(A.target)}function U(A){R(A.target)}function q(A){A.removeEventListener("dispose",k),P(A),H(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function R(A){A.removeEventListener("dispose",U),P(A),le(A)}function F(){for(let A of g){let _=A.deref();_!==void 0&&(_.isRenderTarget===!0?R(_):q(_))}g.clear(),d.clear()}function H(A){let _=i.get(A);if(_.__webglInit===void 0)return;let V=A.source,he=f.get(V);if(he){let se=he[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&K(A),Object.keys(he).length===0&&f.delete(V)}i.remove(A)}function K(A){let _=i.get(A);s.deleteTexture(_.__webglTexture);let V=A.source,he=f.get(V);delete he[_.__cacheKey],o.memory.textures--}function le(A){let _=i.get(A);_.__depthDisposeCallback&&_.__depthDisposeCallback();let V=A.depthTexture;if(V&&V.renderTarget===A&&q(V),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(_.__webglFramebuffer[se]))for(let me=0;me<_.__webglFramebuffer[se].length;me++)s.deleteFramebuffer(_.__webglFramebuffer[se][me]);else s.deleteFramebuffer(_.__webglFramebuffer[se]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[se])}else{if(Array.isArray(_.__webglFramebuffer))for(let se=0;se<_.__webglFramebuffer.length;se++)s.deleteFramebuffer(_.__webglFramebuffer[se]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let se=0;se<_.__webglColorRenderbuffer.length;se++)_.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[se]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let he=A.textures;for(let se=0,me=he.length;se<me;se++){let ge=i.get(he[se]);ge.__webglTexture&&(s.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(he[se])}i.remove(A)}let Y=0;function D(){Y=0}function B(){return Y}function ce(A){Y=A}function Ae(){let A=Y;return A>=n.maxTextures&&Ve("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),Y+=1,A}function J(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.mipmapsAutoUpdate),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function _e(A,_){let V=i.get(A);if(A.isVideoTexture&&Yt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let he=A.image;if(he===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(V,A,_);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+_)}function Me(A,_){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Pt(V,A,_);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+_)}function Le(A,_){let V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){Pt(V,A,_);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+_)}function Se(A,_){let V=i.get(A);if(A.version>0&&V.__version!==A.version){fi(V,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+_)}let $e={[as]:s.REPEAT,[xn]:s.CLAMP_TO_EDGE,[Ka]:s.MIRRORED_REPEAT},Vt={[ci]:s.NEAREST,[cf]:s.NEAREST_MIPMAP_NEAREST,[Oo]:s.NEAREST_MIPMAP_LINEAR,[wi]:s.LINEAR,[Tl]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},Be={[ff]:s.NEVER,[Xh]:s.ALWAYS,[pf]:s.LESS,[Wh]:s.LEQUAL,[mf]:s.EQUAL,[qh]:s.GEQUAL,[gf]:s.GREATER,[yf]:s.NOTEQUAL};function gt(A,_){if(_.type===Zi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===wi||_.magFilter===Tl||_.magFilter===Oo||_.magFilter===Vn||_.minFilter===wi||_.minFilter===Tl||_.minFilter===Oo||_.minFilter===Vn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,$e[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,$e[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,$e[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Vt[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Vt[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Be[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ci||_.minFilter!==Oo&&_.minFilter!==Vn||_.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function _t(A,_){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",k),L(_));let he=_.source,se=f.get(he);se===void 0&&(se={},f.set(he,se));let me=J(_);if(me!==A.__cacheKey){se[me]===void 0&&(se[me]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),se[me].usedTimes++;let ge=se[A.__cacheKey];ge!==void 0&&(se[A.__cacheKey].usedTimes--,ge.usedTimes===0&&K(_)),A.__cacheKey=me,A.__webglTexture=se[me].texture}return V}function Xe(A,_,V){return Math.floor(Math.floor(A/V)/_)}function Ge(A,_,V,he){let me=A.updateRanges;if(me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,V,he,_.data);else{me.sort((I,ne)=>I.start-ne.start);let ge=0;for(let I=1;I<me.length;I++){let ne=me[ge],ee=me[I],ye=ne.start+ne.count,de=Xe(ee.start,_.width,4),pe=Xe(ne.start,_.width,4);ee.start<=ye+1&&de===pe&&Xe(ee.start+ee.count-1,_.width,4)===de?ne.count=Math.max(ne.count,ee.start+ee.count-ne.start):(++ge,me[ge]=ee)}me.length=ge+1;let te=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let I=0,ne=me.length;I<ne;I++){let ee=me[I],ye=Math.floor(ee.start/4),de=Math.ceil(ee.count/4),pe=ye%_.width,Ue=Math.floor(ye/_.width),et=de,ae=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(s.TEXTURE_2D,0,pe,Ue,et,ae,V,he,_.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,te),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function Pt(A,_,V){let he=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(he=s.TEXTURE_3D);let se=_t(A,_),me=_.source;t.bindTexture(he,A.__webglTexture,s.TEXTURE0+V);let ge=i.get(me);if(me.version!==ge.__version||se===!0){if(t.activeTexture(s.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let ae=ut.getPrimaries(ut.workingColorSpace),ke=_.colorSpace===Wn?null:ut.getPrimaries(_.colorSpace),Qe=_.colorSpace===Wn||ae===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=v(_.image,!1,n.maxTextureSize);ie=Fe(_,ie);let fe=r.convert(_.format,_.colorSpace),I=r.convert(_.type),ne=w(_.internalFormat,fe,I,_.normalized,_.colorSpace,_.isVideoTexture);gt(he,_);let ee,ye=_.mipmaps,de=_.isVideoTexture!==!0,pe=ge.__version===void 0||se===!0,Ue=me.dataReady,et=S(_,ie);if(_.isDepthTexture)ne=y(_.format===Gn,_.type),pe&&(de?t.texStorage2D(s.TEXTURE_2D,1,ne,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,ne,ie.width,ie.height,0,fe,I,null));else if(_.isDataTexture)if(ye.length>0){de&&pe&&t.texStorage2D(s.TEXTURE_2D,et,ne,ye[0].width,ye[0].height);for(let ae=0,ke=ye.length;ae<ke;ae++)ee=ye[ae],de?Ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ee.width,ee.height,fe,I,ee.data):t.texImage2D(s.TEXTURE_2D,ae,ne,ee.width,ee.height,0,fe,I,ee.data);_.generateMipmaps=!1}else de?(pe&&t.texStorage2D(s.TEXTURE_2D,et,ne,ie.width,ie.height),Ue&&Ge(_,ie,fe,I)):t.texImage2D(s.TEXTURE_2D,0,ne,ie.width,ie.height,0,fe,I,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){de&&pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,ne,ye[0].width,ye[0].height,ie.depth);for(let ae=0,ke=ye.length;ae<ke;ae++)if(ee=ye[ae],_.format!==hn)if(fe!==null)if(de){if(Ue)if(_.layerUpdates.size>0){let Qe=nu(ee.width,ee.height,_.format,_.type);for(let Te of _.layerUpdates){let pt=ee.data.subarray(Te*Qe/ee.data.BYTES_PER_ELEMENT,(Te+1)*Qe/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Te,ee.width,ee.height,1,fe,pt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ee.width,ee.height,ie.depth,fe,ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,ne,ee.width,ee.height,ie.depth,0,ee.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Ue&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,ee.width,ee.height,ie.depth,fe,I,ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,ne,ee.width,ee.height,ie.depth,0,fe,I,ee.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{de&&pe&&t.texStorage2D(s.TEXTURE_2D,et,ne,ye[0].width,ye[0].height);for(let ae=0,ke=ye.length;ae<ke;ae++)ee=ye[ae],_.format!==hn?fe!==null?de?Ue&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,ee.width,ee.height,fe,ee.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,ne,ee.width,ee.height,0,ee.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ee.width,ee.height,fe,I,ee.data):t.texImage2D(s.TEXTURE_2D,ae,ne,ee.width,ee.height,0,fe,I,ee.data)}else if(_.isDataArrayTexture)if(de){if(pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,et,ne,ie.width,ie.height,ie.depth),Ue)if(_.layerUpdates.size>0){let ae=nu(ie.width,ie.height,_.format,_.type);for(let ke of _.layerUpdates){let Qe=ie.data.subarray(ke*ae/ie.data.BYTES_PER_ELEMENT,(ke+1)*ae/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,ie.width,ie.height,1,fe,I,Qe)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,I,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ne,ie.width,ie.height,ie.depth,0,fe,I,ie.data);else if(_.isData3DTexture)de?(pe&&t.texStorage3D(s.TEXTURE_3D,et,ne,ie.width,ie.height,ie.depth),Ue&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,I,ie.data)):t.texImage3D(s.TEXTURE_3D,0,ne,ie.width,ie.height,ie.depth,0,fe,I,ie.data);else if(_.isFramebufferTexture){if(pe)if(de)t.texStorage2D(s.TEXTURE_2D,et,ne,ie.width,ie.height);else{let ae=ie.width,ke=ie.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(s.TEXTURE_2D,Qe,ne,ae,ke,0,fe,I,null),ae>>=1,ke>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let ae=s.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),ie.parentNode!==ae){ae.appendChild(ie),d.add(_),ae.onpaint=ke=>{let Qe=ke.changedElements;for(let Te of d)Qe.includes(Te.image)&&(Te.needsUpdate=!0)},ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let Qe=s.RGBA,Te=s.RGBA,pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Qe,Te,pt,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ye.length>0){if(de&&pe){let ae=Ye(ye[0]);t.texStorage2D(s.TEXTURE_2D,et,ne,ae.width,ae.height)}for(let ae=0,ke=ye.length;ae<ke;ae++)ee=ye[ae],de?Ue&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,fe,I,ee):t.texImage2D(s.TEXTURE_2D,ae,ne,fe,I,ee);_.generateMipmaps=!1}else if(de){if(pe){let ae=Ye(ie);t.texStorage2D(s.TEXTURE_2D,et,ne,ae.width,ae.height)}Ue&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,I,ie)}else t.texImage2D(s.TEXTURE_2D,0,ne,fe,I,ie);T(_)&&_.mipmapsAutoUpdate===!0&&E(he),ge.__version=me.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function fi(A,_,V){if(_.image.length!==6)return;let he=_t(A,_),se=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+V);let me=i.get(se);if(se.version!==me.__version||he===!0){t.activeTexture(s.TEXTURE0+V);let ge=ut.getPrimaries(ut.workingColorSpace),te=_.colorSpace===Wn?null:ut.getPrimaries(_.colorSpace),ie=_.colorSpace===Wn||ge===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let fe=_.isCompressedTexture||_.image[0].isCompressedTexture,I=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let Te=0;Te<6;Te++)!fe&&!I?ne[Te]=v(_.image[Te],!0,n.maxCubemapSize):ne[Te]=I?_.image[Te].image:_.image[Te],ne[Te]=Fe(_,ne[Te]);let ee=ne[0],ye=r.convert(_.format,_.colorSpace),de=r.convert(_.type),pe=w(_.internalFormat,ye,de,_.normalized,_.colorSpace),Ue=_.isVideoTexture!==!0,et=me.__version===void 0||he===!0,ae=se.dataReady,ke=S(_,ee);gt(s.TEXTURE_CUBE_MAP,_);let Qe;if(_.isDepthTexture){if(pe=y(_.format===Gn,_.type),et)if(Ue)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,pe,ee.width,ee.height);else for(let Te=0;Te<6;Te++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pe,ee.width,ee.height,0,ye,de,null)}else if(fe){Ue&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pe,ee.width,ee.height);for(let Te=0;Te<6;Te++){Qe=ne[Te].mipmaps;for(let pt=0;pt<Qe.length;pt++){let Gt=Qe[pt];_.format!==hn?ye!==null?Ue?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Gt.width,Gt.height,ye,Gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,pe,Gt.width,Gt.height,0,Gt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,0,0,Gt.width,Gt.height,ye,de,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt,pe,Gt.width,Gt.height,0,ye,de,Gt.data)}}}else{if(Qe=_.mipmaps,Ue&&et){Qe.length>0&&ke++;let Te=Ye(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pe,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(I){Ue?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ne[Te].width,ne[Te].height,ye,de,ne[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pe,ne[Te].width,ne[Te].height,0,ye,de,ne[Te].data);for(let pt=0;pt<Qe.length;pt++){let ki=Qe[pt].image[Te].image;Ue?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,ki.width,ki.height,ye,de,ki.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,pe,ki.width,ki.height,0,ye,de,ki.data)}}else{Ue?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ye,de,ne[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,pe,ye,de,ne[Te]);for(let pt=0;pt<Qe.length;pt++){let Gt=Qe[pt];Ue?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,0,0,ye,de,Gt.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,pt+1,pe,ye,de,Gt.image[Te])}}}T(_)&&_.mipmapsAutoUpdate===!0&&E(s.TEXTURE_CUBE_MAP),me.__version=se.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Lt(A,_,V,he,se,me){let ge=r.convert(V.format,V.colorSpace),te=r.convert(V.type),ie=w(V.internalFormat,ge,te,V.normalized,V.colorSpace),fe=i.get(_),I=i.get(V);if(I.__renderTarget=_,!fe.__hasExternalTextures){let ne=Math.max(1,_.width>>me),ee=Math.max(1,_.height>>me);se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,me,ie,ne,ee,_.depth,0,ge,te,null):t.texImage2D(se,me,ie,ne,ee,0,ge,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ee(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,se,I.__webglTexture,0,Nt(_)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,se,I.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function pi(A,_,V){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){let he=_.depthTexture,se=he&&he.isDepthTexture?he.type:null,me=y(_.stencilBuffer,se),ge=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ee(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(_),me,_.width,_.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(_),me,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,me,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,A)}else{let he=_.textures;for(let se=0;se<he.length;se++){let me=he[se],ge=r.convert(me.format,me.colorSpace),te=r.convert(me.type),ie=w(me.internalFormat,ge,te,me.normalized,me.colorSpace);Ee(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt(_),ie,_.width,_.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt(_),ie,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ie,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xt(A,_,V){let he=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=i.get(_.depthTexture);se.__renderTarget=_;let me=he?_.depthTexture.image[0]:_.depthTexture.image;(!se.__webglTexture||me.width!==_.width||me.height!==_.height)&&(me.width=_.width,me.height=_.height,_.depthTexture.needsUpdate=!0),he?Se(_.depthTexture,0):_e(_.depthTexture,0);let ge=se.__webglTexture,te=Nt(_),ie=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+V:s.TEXTURE_2D,fe=_.depthTexture.format===Gn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Un)Ee(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ie,ge,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ie,ge,0);else if(_.depthTexture.format===Gn)Ee(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,ie,ge,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,fe,ie,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Li(A){let _=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let he=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),he){let se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,he.removeEventListener("dispose",se)};he.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=he}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let he=0;he<6;he++)Xt(_.__webglFramebuffer[he],A,he);else A.texture.mipmaps.length>0?Xt(_.__webglFramebuffer[0],A,0):Xt(_.__webglFramebuffer,A,0);else if(V){_.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[he]),_.__webglDepthbuffer[he]===void 0)_.__webglDepthbuffer[he]=s.createRenderbuffer(),pi(_.__webglDepthbuffer[he],A,!1);else{let se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,me)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),pi(_.__webglDepthbuffer,A,!1);else{let se=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,se,s.RENDERBUFFER,me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(A,_,V){let he=i.get(A);_!==void 0&&Lt(he.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Li(A)}function mi(A){let _=A.texture,V=i.get(A),he=i.get(_);A.addEventListener("dispose",U),L(A);let se=A.textures,me=A.isWebGLCubeRenderTarget===!0,ge=se.length>1;if(ge||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=_.version,o.memory.textures++),me){V.__webglFramebuffer=[];for(let te=0;te<6;te++)if(_.mipmaps.length>0){V.__webglFramebuffer[te]=[];for(let ie=0;ie<_.mipmaps.length;ie++)V.__webglFramebuffer[te][ie]=s.createFramebuffer()}else V.__webglFramebuffer[te]=s.createFramebuffer()}else{if(_.mipmaps.length>0){V.__webglFramebuffer=[];for(let te=0;te<_.mipmaps.length;te++)V.__webglFramebuffer[te]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ge)for(let te=0,ie=se.length;te<ie;te++){let fe=i.get(se[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Ee(A)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){let ie=se[te];V.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[te]);let fe=r.convert(ie.format,ie.colorSpace),I=r.convert(ie.type),ne=w(ie.internalFormat,fe,I,ie.normalized,ie.colorSpace,A.isXRRenderTarget===!0),ee=Nt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,ne,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,V.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),pi(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),gt(s.TEXTURE_CUBE_MAP,_);for(let te=0;te<6;te++)if(_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Lt(V.__webglFramebuffer[te][ie],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else Lt(V.__webglFramebuffer[te],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);T(_)?E(s.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let te=0,ie=se.length;te<ie;te++){let fe=se[te],I=i.get(fe),ne=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ne,I.__webglTexture),gt(ne,fe),Lt(V.__webglFramebuffer,A,fe,s.COLOR_ATTACHMENT0+te,ne,0),T(fe)&&E(ne)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(te=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,he.__webglTexture),gt(te,_),_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Lt(V.__webglFramebuffer[ie],A,_,s.COLOR_ATTACHMENT0,te,ie);else Lt(V.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,te,0);T(_)?E(te):_.mipmaps.length>0&&s.texParameteri(te,s.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&Li(A)}function O(A){let _=A.textures;for(let V=0,he=_.length;V<he;V++){let se=_[V];if(T(se)&&se.mipmapsAutoUpdate===!0){let me=C(A),ge=i.get(se).__webglTexture;t.bindTexture(me,ge),E(me),t.unbindTexture()}}}let Ni=[];function St(A){if(A.samples>0){if(Ee(A)===!1){let _=A.textures,V=A.width,he=A.height,se=s.COLOR_BUFFER_BIT,me=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=i.get(A),te=_.length>1;if(te)for(let fe=0;fe<_.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let fe=0;fe<_.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let I=i.get(_[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,I,0)}s.blitFramebuffer(0,0,V,he,0,0,V,he,se,s.NEAREST),l===!0&&(Ni.length=0,Ni.push(s.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Ni.push(me),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ni))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let fe=0;fe<_.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ge.__webglColorRenderbuffer[fe]);let I=i.get(_[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,I,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Nt(A){return Math.min(n.maxSamples,A.samples)}function Ee(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Yt(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Fe(A,_){let V=A.colorSpace,he=A.format,se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==lo&&V!==Wn&&(ut.getTransfer(V)===Mt?(he!==hn||se!==Di)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",V)),_}function Ye(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Ae,this.resetTextureUnits=D,this.getTextureUnits=B,this.setTextureUnits=ce,this.setTexture2D=_e,this.setTexture2DArray=Me,this.setTexture3D=Le,this.setTextureCube=Se,this.rebindTextures=Bt,this.setupRenderTarget=mi,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Li,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=Ee,this.dispose=F}function x_(s,e){function t(i,n=Wn){let r,o=ut.getTransfer(n);if(i===Di)return s.UNSIGNED_BYTE;if(i===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Hh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fh)return s.BYTE;if(i===Bh)return s.SHORT;if(i===wr)return s.UNSIGNED_SHORT;if(i===Sl)return s.INT;if(i===ln)return s.UNSIGNED_INT;if(i===Zi)return s.FLOAT;if(i===cn)return s.HALF_FLOAT;if(i===Vh)return s.ALPHA;if(i===Gh)return s.RGB;if(i===hn)return s.RGBA;if(i===Un)return s.DEPTH_COMPONENT;if(i===Gn)return s.DEPTH_STENCIL;if(i===Al)return s.RED;if(i===Cl)return s.RED_INTEGER;if(i===ms)return s.RG;if(i===Pl)return s.RG_INTEGER;if(i===Il)return s.RGBA_INTEGER;if(i===Uo||i===Fo||i===Bo||i===Ho)if(o===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Nl||i===kl||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Ul||i===Fl||i===Bl||i===Hl||i===zo||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Ul)return o===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bl)return r.COMPRESSED_R11_EAC;if(i===Hl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===zo)return r.COMPRESSED_RG11_EAC;if(i===zl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vl||i===Gl||i===Wl||i===ql||i===Xl||i===Yl||i===Kl||i===Zl||i===$l||i===Jl||i===jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$l)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return o===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===nc||i===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return o===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===oc||i===Vo||i===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var v_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
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

}`,yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new _o(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ki({vertexShader:v_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new Dt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xu=class extends vn{constructor(e,t){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding!="undefined",p=new yu,m={},v=t.getContextAttributes(),T=null,E=null,C=[],w=[],y=new Ce,S=null,L=null,P=new ii;P.viewport=new zt;let k=new ii;k.viewport=new zt;let U=[P,k],q=new _l,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let _e=C[J];return _e===void 0&&(_e=new pr,C[J]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(J){let _e=C[J];return _e===void 0&&(_e=new pr,C[J]=_e),_e.getGripSpace()},this.getHand=function(J){let _e=C[J];return _e===void 0&&(_e=new pr,C[J]=_e),_e.getHandSpace()};function H(J){let _e=w.indexOf(J.inputSource);if(_e===-1)return;let Me=C[_e];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||o),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function K(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",le);for(let J=0;J<C.length;J++){let _e=w[J];_e!==null&&(w[J]=null,C[J].disconnect(_e))}R=null,F=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(T),f=null,u=null,d=null,n=null,E=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(y.width,y.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(T=e.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",K),n.addEventListener("inputsourceschange",le),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(y),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Le=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=v.stencil?Gn:Un,Le=v.stencil?Ds:ln);let $e={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($e),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Ai(u.textureWidth,u.textureHeight,{format:hn,type:Di,depthTexture:new Hn(u.textureWidth,u.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Ai(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ae.setContext(n),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function le(J){for(let _e=0;_e<J.removed.length;_e++){let Me=J.removed[_e],Le=w.indexOf(Me);Le>=0&&(w[Le]=null,C[Le].disconnect(Me))}for(let _e=0;_e<J.added.length;_e++){let Me=J.added[_e],Le=w.indexOf(Me);if(Le===-1){for(let $e=0;$e<C.length;$e++)if($e>=w.length){w.push(Me),Le=$e;break}else if(w[$e]===null){w[$e]=Me,Le=$e;break}if(Le===-1)break}let Se=C[Le];Se&&Se.connect(Me)}}function Y(J,_e){_e===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(_e.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let _e=J.near,Me=J.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),q.near=k.near=P.near=_e,q.far=k.far=P.far=Me,(R!==q.near||F!==q.far)&&(n.updateRenderState({depthNear:q.near,depthFar:q.far}),R=q.near,F=q.far),q.layers.mask=J.layers.mask|6,P.layers.mask=q.layers.mask&-5,k.layers.mask=q.layers.mask&-3;let Le=J.parent,Se=q.cameras;Y(q,Le);for(let $e=0;$e<Se.length;$e++)Y(Se[$e],Le);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),D(J,q,Le)};function D(J,_e,Me){Me===null?J.matrix.copy(_e.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(_e.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(_e.projectionMatrix),J.projectionMatrixInverse.copy(_e.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ss*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(J){return m[J]};let B=null;function ce(J,_e){if(h=_e.getViewerPose(c||o),g=_e,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Le=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,Le=!0);for(let Be=0;Be<Me.length;Be++){let gt=Me[Be],_t=null;if(f!==null)_t=f.getViewport(gt);else{let Ge=d.getViewSubImage(u,gt);_t=Ge.viewport,Be===0&&(e.setRenderTargetTextures(E,Ge.colorTexture,Ge.depthStencilTexture),e.setRenderTarget(E))}let Xe=U[Be];Xe===void 0&&(Xe=new ii,Xe.layers.enable(Be),Xe.viewport=new zt,U[Be]=Xe),Xe.matrix.fromArray(gt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(gt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(_t.x,_t.y,_t.width,_t.height),Be===0&&(q.matrix.copy(Xe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Le===!0&&q.cameras.push(Xe)}let Se=n.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Be=d.getDepthInformation(Me[0]);Be&&Be.isValid&&Be.texture&&p.init(Be,n.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Be=0;Be<Me.length;Be++){let gt=Me[Be].camera;if(gt){let _t=m[gt];_t||(_t=new _o,m[gt]=_t);let Xe=d.getCameraImage(gt);_t.sourceTexture=Xe}}}}for(let Me=0;Me<C.length;Me++){let Le=w[Me],Se=C[Me];Le!==null&&Se!==void 0&&Se.update(Le,_e,c||o)}B&&B(J,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}let Ae=new jf;Ae.setAnimationLoop(ce),this.setAnimationLoop=function(J){B=J},this.dispose=function(){}}},b_=new vt,lp=new Je;lp.set(-1,0,0,0,1,0,0,0,1);function E_(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,eu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,v,T,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ci&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ci&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),T=v.envMap,E=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(lp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ci&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function M_(s,e,t,i){let n={},r={};function o(v,T){let E=T.program;i.uniformBlockBinding(v,E,n[v.id])}function a(v,T){let E=n[v.id];E===void 0&&(g(v),E=l(v),n[v.id]=E,v.addEventListener("dispose",p));let C=T.program;i.updateUBOMapping(v,C);let w=e.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let T=s.createBuffer(),E=v.__size,C=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,C),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(v){let T=n[v.id],E=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,y=E.length;w<y;w++){let S=E[w];if(Array.isArray(S))for(let L=0,P=S.length;L<P;L++)h(S[L],w,L,C);else h(S,w,0,C)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,E,C){if(u(v,T,E,C)===!0){let w=v.__offset,y=v.value;if(Array.isArray(y)){let S=0;for(let L=0;L<y.length;L++){let P=y[L],k=x(P,!0);d(P,v.__data,S),S+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else d(y,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,v.__data)}}function d(v,T,E){typeof v=="number"||typeof v=="boolean"?T[E]=v:v.isMatrix3?(T[E]=v.elements[0],T[E+1]=v.elements[1],T[E+2]=v.elements[2],T[E+3]=0,T[E+4]=v.elements[3],T[E+5]=v.elements[4],T[E+6]=v.elements[5],T[E+7]=0,T[E+8]=v.elements[6],T[E+9]=v.elements[7],T[E+10]=v.elements[8],T[E+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-E),E):v.toArray(T,E)}function u(v,T,E,C){let w=v.value,y=T+"_"+E;if(Array.isArray(w)){C[y]===void 0&&(C[y]=[]);let S=C[y],L=!1;for(let P=0;P<w.length;P++)f(w[P],S,P)===!0&&(L=!0);return L}return f(w,C,y)}function f(v,T,E){if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{let C=T[E];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function g(v){let T=v.uniforms,E=0,C=16;for(let y=0,S=T.length;y<S;y++){let L=Array.isArray(T[y])?T[y]:[T[y]];for(let P=0,k=L.length;P<k;P++){let U=L[P],q=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(T[y])||Array.isArray(U.value),F=E;for(let K=0,le=q.length;K<le;K++){let Y=q[K],D=x(Y,R),B=E%C,ce=B%D.boundary,Ae=B+ce;E+=ce,Ae!==0&&C-Ae<D.storage&&(E+=C-Ae),K===0&&(F=E),E+=D.storage}let H=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new H((E-F)/Float32Array.BYTES_PER_ELEMENT),U.__offset=F}}let w=E%C;return w>0&&(E+=C-w),v.__size=E,v.__cache={},this}function x(v,T){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=16,E.storage=48):v.isMatrix4?(E.boundary=16,E.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),T===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(v){let T=v.target;T.removeEventListener("dispose",p),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function m(){for(let v in n)s.deleteBuffer(n[v]);n={},r={}}return{bind:o,update:a,dispose:m}}var T_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wn=null;function S_(){return wn===null&&(wn=new yo(T_,16,16,ms,cn),wn.name="DFG_LUT",wn.minFilter=wi,wn.magFilter=wi,wn.wrapS=xn,wn.wrapT=xn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}var pc=class{constructor(e={}){let{canvas:t=xf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Di}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,p=new Set([Il,Pl,Cl]),m=new Set([Di,ln,wr,Ds,wl,Rl]),v=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},C=null,w=null,y=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,k=!1,U=null,q=null,R=null,F=null;this._outputColorSpace=Ft;let H=0,K=0,le=null,Y=-1,D=null,B=new zt,ce=new zt,Ae=null,J=new qe(0),_e=0,Me=t.width,Le=t.height,Se=1,$e=null,Vt=null,Be=new zt(0,0,Me,Le),gt=new zt(0,0,Me,Le),_t=!1,Xe=new ls,Ge=new el,Pt=!1,fi=!1,Lt=new vt,pi=new M,Xt=new zt,Li={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function mi(){return le===null?Se:1}let O=i;function Ni(b,N){return t.getContext(b,N)}let St,Nt,Ee,Yt,Fe,Ye,A,_,V,he,se,me,ge,te,ie,fe,I,ne,ee,ye,de,pe,Ue;try{let b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){let N="webgl2";if(O=Ni(N,b),O===null)throw Ni(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(b){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),We("WebGLRenderer: "+b.message),b}function et(){St=new Ox(O),St.init(),de=new x_(O,St),Nt=new Sx(O,St,e,de),Ee=new g_(O,St),Nt.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),q=O.createFramebuffer(),R=O.createFramebuffer(),F=O.createFramebuffer(),Yt=new Bx(O),Fe=new i_,Ye=new y_(O,St,Ee,Fe,Nt,de,Yt),A=new Dx(P),_=new z0(O),pe=new Mx(O,_),V=new Ux(O,_,Yt,pe),he=new zx(O,V,_,pe,Yt),ne=new Hx(O,Nt,Ye),ie=new wx(Fe),se=new t_(P,A,St,Nt,pe,ie),me=new E_(P,Fe),ge=new s_,te=new h_(St),I=new Ex(P,A,Ee,he,g,l),fe=new m_(P,he,Nt),Ue=new M_(O,Yt,Nt,Ee),ee=new Tx(O,St,Yt),ye=new Fx(O,St,Yt),Yt.programs=se.programs,P.capabilities=Nt,P.extensions=St,P.properties=Fe,P.renderLists=ge,P.shadowMap=fe,P.state=Ee,P.info=Yt}x!==Di&&(L=new Gx(x,t.width,t.height,a,n,r));let ae=new xu(P,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(b){b!==void 0&&(Se=b,this.setSize(Me,Le,!1))},this.getSize=function(b){return b.set(Me,Le)},this.setSize=function(b,N,Z=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=b,Le=N,t.width=Math.floor(b*Se),t.height=Math.floor(N*Se),Z===!0&&(t.style.width=b+"px",t.style.height=N+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(Me*Se,Le*Se).floor()},this.setDrawingBufferSize=function(b,N,Z){Me=b,Le=N,Se=Z,t.width=Math.floor(b*Z),t.height=Math.floor(N*Z),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(x===Di){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(Be)},this.setViewport=function(b,N,Z,z){b.isVector4?Be.set(b.x,b.y,b.z,b.w):Be.set(b,N,Z,z),Ee.viewport(B.copy(Be).multiplyScalar(mi()).round())},this.getScissor=function(b){return b.copy(gt)},this.setScissor=function(b,N,Z,z){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,N,Z,z),Ee.scissor(ce.copy(gt).multiplyScalar(mi()).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(b){Ee.setScissorTest(_t=b)},this.setOpaqueSort=function(b){$e=b},this.setTransparentSort=function(b){Vt=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,Z=!0){let z=0;if(b){let G=!1;if(le!==null){let xe=le.texture.format;G=p.has(xe)}if(G){let xe=le.texture.type,Ne=m.has(xe),ve=I.getClearColor(),we=I.getClearAlpha(),De=ve.r,Ke=ve.g,tt=ve.b;Ne?(v[0]=De,v[1]=Ke,v[2]=tt,v[3]=we,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=De,T[1]=Ke,T[2]=tt,T[3]=we,O.clearBufferiv(O.COLOR,0,T))}else z|=O.COLOR_BUFFER_BIT}N&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),I.dispose(),ge.dispose(),te.dispose(),Ye.dispose(),Fe.dispose(),A.dispose(),he.dispose(),V.dispose(),pe.dispose(),Ue.dispose(),se.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",aa),ae.removeEventListener("sessionend",la),fn.stop()};function ke(b){b.preventDefault(),uo("WebGLRenderer: Context Lost."),k=!0}function Qe(){uo("WebGLRenderer: Context Restored."),k=!1;let b=Yt.autoReset,N=fe.enabled,Z=fe.autoUpdate,z=fe.needsUpdate,G=fe.type;et(),Yt.autoReset=b,fe.enabled=N,fe.autoUpdate=Z,fe.needsUpdate=z,fe.type=G}function Te(b){We("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function pt(b){let N=b.target;N.removeEventListener("dispose",pt),Gt(N)}function Gt(b){ki(b),Fe.remove(b)}function ki(b){let N=Fe.get(b).programs;N!==void 0&&(N.forEach(function(Z){se.releaseProgram(Z)}),b.isShaderMaterial&&se.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,Z,z,G,xe){N===null&&(N=Li);let Ne=G.isMesh&&G.matrixWorld.determinantAffine()<0,ve=Vr(b,N,Z,z,G);Ee.setMaterial(z,Ne);let we=Z.index,De=1;if(z.wireframe===!0){if(we=V.getWireframeAttribute(Z),we===void 0)return;De=2}let Ke=Z.drawRange,tt=Z.attributes.position,Pe=Ke.start*De,st=(Ke.start+Ke.count)*De;xe!==null&&(Pe=Math.max(Pe,xe.start*De),st=Math.min(st,(xe.start+xe.count)*De)),we!==null?(Pe=Math.max(Pe,0),st=Math.min(st,we.count)):tt!=null&&(Pe=Math.max(Pe,0),st=Math.min(st,tt.count));let Ht=st-Pe;if(Ht<0||Ht===1/0)return;pe.setup(G,z,ve,Z,we);let bt,yt=ee;if(we!==null&&(bt=_.get(we),yt=ye,yt.setIndex(bt)),G.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*mi()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(G.isLine){let gi=z.linewidth;gi===void 0&&(gi=1),Ee.setLineWidth(gi*mi()),G.isLineSegments?yt.setMode(O.LINES):G.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else G.isPoints?yt.setMode(O.POINTS):G.isSprite&&yt.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(St.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let gi=G._multiDrawStarts,Ie=G._multiDrawCounts,ri=G._multiDrawCount,dt=we?_.get(we).bytesPerElement:1,An=Fe.get(z).currentProgram.getUniforms();for(let oi=0;oi<ri;oi++)An.setValue(O,"_gl_DrawID",oi),yt.render(gi[oi]/dt,Ie[oi])}else if(G.isInstancedMesh)yt.renderInstances(Pe,Ht,G.count);else if(Z.isInstancedBufferGeometry){let gi=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ie=Math.min(Z.instanceCount,gi);yt.renderInstances(Pe,Ht,Ie)}else yt.render(Pe,Ht)};function jn(b,N,Z,z){U!==null&&b.isNodeMaterial&&U.setObject(z,b),Pt===!0&&ie.setState(b,Z,!1),b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Ci,b.needsUpdate=!0,mn(b,N,z),b.side=fs,b.needsUpdate=!0,mn(b,N,z),b.side=Ei):mn(b,N,z)}this.compile=function(b,N,Z=null){Z===null&&(Z=b),U!==null&&U.renderStart(b,N,Z),w=te.get(Z),w.init(N),S.push(w),Z.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),b!==Z&&b.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),fi=this.localClippingEnabled,Pt=ie.init(this.clippingPlanes,fi),Pt===!0&&ie.setGlobalState(this.clippingPlanes,N),U!==null&&fe.render(w.state.shadowsArray,Z,N);let z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let xe=G.material;if(xe)if(Array.isArray(xe))for(let Ne=0;Ne<xe.length;Ne++){let ve=xe[Ne];jn(ve,Z,N,G),z.add(ve)}else jn(xe,Z,N,G),z.add(xe)}),w=S.pop(),U!==null&&U.renderEnd(),z},this.compileAsync=function(b,N,Z=null){let z=this.compile(b,N,Z);return new Promise(G=>{function xe(){if(z.forEach(function(Ne){let we=Fe.get(Ne).currentProgram;(we===void 0||we.isReady())&&z.delete(Ne)}),z.size===0){G(b);return}setTimeout(xe,10)}St.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Bs=null;function Fc(b){Bs&&Bs(b)}function aa(){fn.stop()}function la(){fn.start()}let fn=new jf;fn.setAnimationLoop(Fc),typeof self!="undefined"&&fn.setContext(self),this.setAnimationLoop=function(b){Bs=b,ae.setAnimationLoop(b),b===null?fn.stop():fn.start()},ae.addEventListener("sessionstart",aa),ae.addEventListener("sessionend",la),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;U!==null&&U.renderStart(b,N);let Z=ae.enabled===!0&&ae.isPresenting===!0,z=L!==null&&(le===null||Z)&&L.begin(P,le);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,N,le),w=te.get(b,S.length),w.init(N),w.state.textureUnits=Ye.getTextureUnits(),S.push(w),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?Ge.setFromArrayCamera(N):Xe.setFromProjectionMatrix(Lt,qi,N.reversedDepth),fi=this.localClippingEnabled,Pt=ie.init(this.clippingPlanes,fi),C=ge.get(b,y.length),C.init(),y.push(C),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ne=P.xr.getDepthSensingMesh();Ne!==null&&Fr(Ne,N,-1/0,P.sortObjects)}Fr(b,N,0,P.sortObjects),C.finish(),U!==null&&U.updateLights(w.state.lightsArray),P.sortObjects===!0&&C.sort($e,Vt),Bt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Bt&&I.addToRenderList(C,b),this.info.autoReset===!0&&this.info.reset(),Pt===!0&&ie.beginShadows();let G=w.state.shadowsArray;if(fe.render(G,b,N),Pt===!0&&ie.endShadows(),(z&&L.hasRenderPass())===!1){let Ne=C.opaque,ve=C.transmissive;if(w.setupLights(),N.isArrayCamera){let we=N.cameras;if(ve.length>0)for(let De=0,Ke=we.length;De<Ke;De++){let tt=we[De];Hs(Ne,ve,b,tt)}Bt&&I.render(b);for(let De=0,Ke=we.length;De<Ke;De++){let tt=we[De];Qn(C,b,tt,tt.viewport)}}else ve.length>0&&Hs(Ne,ve,b,N),Bt&&I.render(b),Qn(C,b,N)}le!==null&&K===0&&(Ye.updateMultisampleRenderTarget(le),Ye.updateRenderTargetMipmap(le)),z&&L.end(P),b.isScene===!0&&b.onAfterRender(P,b,N),pe.resetDefaultState(),Y=-1,D=null,S.pop(),S.length>0?(w=S[S.length-1],Ye.setTextureUnits(w.state.textureUnits),Pt===!0&&ie.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,y.pop(),y.length>0?C=y[y.length-1]:C=null,U!==null&&U.renderEnd()};function Fr(b,N,Z,z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let Ne=N.isArrayCamera?Ge:Xe;if(!b.frustumCulled||b.intersectsFrustum(Ne)){z&&Xt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);let ve=he.update(b),we=b.material;we.visible&&C.push(b,ve,we,Z,Xt.z,null,N)}}else if(b.isMesh||b.isLine||b.isPoints){let Ne=N.isArrayCamera?Ge:Xe;if(!b.frustumCulled||b.intersectsFrustum(Ne)){let ve=he.update(b),we=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Xt.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Xt.copy(ve.boundingSphere.center)),Xt.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(we)){let De=ve.groups;for(let Ke=0,tt=De.length;Ke<tt;Ke++){let Pe=De[Ke],st=we[Pe.materialIndex];st&&st.visible&&C.push(b,ve,st,Z,Xt.z,Pe,N)}}else we.visible&&C.push(b,ve,we,Z,Xt.z,null,N)}}}let xe=b.children;for(let Ne=0,ve=xe.length;Ne<ve;Ne++)Fr(xe[Ne],N,Z,z)}function Qn(b,N,Z,z){let{opaque:G,transmissive:xe,transparent:Ne}=b;w.setupLightsView(Z),Pt===!0&&ie.setGlobalState(P.clippingPlanes,Z),z&&Ee.viewport(B.copy(z)),G.length>0&&pn(G,N,Z),xe.length>0&&pn(xe,N,Z),Ne.length>0&&pn(Ne,N,Z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Hs(b,N,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Pe=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Ai(1,1,{generateMipmaps:!0,type:Pe?cn:Di,minFilter:Vn,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let xe=w.state.transmissionRenderTarget[z.id],Ne=z.viewport||B;xe.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);let ve=P.getRenderTarget(),we=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(J),_e=P.getClearAlpha(),_e<1&&P.setClearColor(16777215,.5),P.clear(),Bt&&I.render(Z);let Ke=P.toneMapping;P.toneMapping=Sn;let tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Pt===!0&&ie.setGlobalState(P.clippingPlanes,z),pn(b,Z,z),Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe),St.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let st=0,Ht=N.length;st<Ht;st++){let bt=N[st],{object:yt,geometry:gi,material:Ie,group:ri}=bt;if(Ie.side===Ei&&yt.layers.test(z.layers)){let dt=Ie.side;Ie.side=Ci,Ie.needsUpdate=!0,Br(yt,Z,z,gi,Ie,ri),Ie.side=dt,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe))}P.setRenderTarget(ve,we,De),P.setClearColor(J,_e),tt!==void 0&&(z.viewport=tt),P.toneMapping=Ke}function pn(b,N,Z){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,xe=b.length;G<xe;G++){let Ne=b[G],{object:ve,geometry:we,group:De}=Ne,Ke=Ne.material;Ke.allowOverride===!0&&z!==null&&(Ke=z),ve.layers.test(Z.layers)&&Br(ve,N,Z,we,Ke,De)}}function Br(b,N,Z,z,G,xe){U!==null&&G.isNodeMaterial&&U.setObject(b,G),b.onBeforeRender(P,N,Z,z,G,xe),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(P,N,Z,z,b,xe),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=Ci,G.needsUpdate=!0,P.renderBufferDirect(Z,N,z,G,b,xe),G.side=fs,G.needsUpdate=!0,P.renderBufferDirect(Z,N,z,G,b,xe),G.side=Ei):P.renderBufferDirect(Z,N,z,G,b,xe),b.onAfterRender(P,N,Z,z,G,xe)}function zs(b){let N=0;for(let Z of b)Z.texture!==null&&N++;return N}function mn(b,N,Z){N.isScene!==!0&&(N=Li);let z=Fe.get(b),G=w.state.lights,xe=w.state.shadowsArray,Ne=G.state.version,ve=se.getParameters(b,G.state,xe,N,Z,w.state.lightProbeGridArray),we=se.getProgramCacheKey(ve),De=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let Ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=A.get(b.envMap||z.environment,Ke),z.envMapRotation=z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",pt),De=new Map,z.programs=De,z.programVariants=new Map);let tt=De.get(we);if(tt!==void 0){if(z.currentProgram===tt&&z.lightsStateVersion===Ne)return Vs(b,ve),tt}else ve.uniforms=se.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,Z,ve),b.onBeforeCompile(ve,P),tt=se.acquireProgram(ve,we),De.set(we,tt),z.uniforms=ve.uniforms;let Pe=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Pe.clippingPlanes=ie.uniform),Vs(b,ve),z.needsLights=Oi(b),z.lightsStateVersion=Ne,z.needsLights&&(Pe.ambientLightColor.value=G.state.ambient,Pe.lightProbe.value=G.state.probe,Pe.sunLights.value=G.state.sun,Pe.sunLightShadows.value=G.state.sunShadow,Pe.directionalLights.value=G.state.directional,Pe.directionalLightShadows.value=G.state.directionalShadow,Pe.spotLights.value=G.state.spot,Pe.spotLightShadows.value=G.state.spotShadow,Pe.rectAreaLights.value=G.state.rectArea,Pe.ltc_1.value=G.state.rectAreaLTC1,Pe.ltc_2.value=G.state.rectAreaLTC2,Pe.pointLights.value=G.state.point,Pe.pointLightShadows.value=G.state.pointShadow,Pe.hemisphereLights.value=G.state.hemi,Pe.sunShadowMatrix.value=G.state.sunShadowMatrix,Pe.sunShadowCascade.value=G.state.sunShadowCascade,Pe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pe.spotLightMatrix.value=G.state.spotLightMatrix,Pe.spotLightMap.value=G.state.spotLightMap,Pe.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=zs(w.state.lightProbeGridArray),z.currentProgram=tt,z.uniformsList=null,tt}function Hr(b,N,Z,z,G){let xe=Fe.get(b),Ne=xe.currentProgram.id+","+z+","+G,ve=xe.programVariants.get(Ne);return ve===void 0?(ve=mn(b,N,Z),xe.programVariants.set(Ne,ve)):(xe.currentProgram=ve,xe.uniformsList=null,xe.outputColorSpace=z,xe.toneMapping=G),ve}function zr(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Vs(b,N){let Z=Fe.get(b);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function Vr(b,N,Z,z,G){N.isScene!==!0&&(N=Li),Ye.resetTextureUnits();let xe=N.fog,Ne=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,ve=le===null?P.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ut.workingColorSpace,we=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,De=A.get(z.envMap||Ne,we),Ke=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pe=!!Z.morphAttributes.position,st=!!Z.morphAttributes.normal,Ht=!!Z.morphAttributes.color,bt=Sn;z.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(bt=P.toneMapping);let yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gi=yt!==void 0?yt.length:0,Ie=Fe.get(z),ri=w.state.lights;if(Pt===!0&&(fi===!0||b!==D)){let It=b===D&&z.id===Y;ie.setState(z,b,It)}let dt=!1,An=!1;z.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==ri.state.version||G.isBatchedMesh&&Ie.batching===!1||!G.isBatchedMesh&&Ie.batching===!0||G.isBatchedMesh&&Ie.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ie.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ie.instancing===!1||!G.isInstancedMesh&&Ie.instancing===!0||G.isSkinnedMesh&&Ie.skinning===!1||!G.isSkinnedMesh&&Ie.skinning===!0||G.isInstancedMesh&&Ie.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ie.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ie.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ie.instancingMorph===!1&&G.morphTexture!==null||Ie.envMap!==De||z.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ie.numPlanes||Ie.numIntersection!==ie.numIntersection)||Ie.vertexAlphas!==Ke||Ie.vertexTangents!==tt||Ie.morphTargets!==Pe||Ie.morphNormals!==st||Ie.morphColors!==Ht||Ie.morphTargetsCount!==gi||Ie.numLightProbeGrids!==zs(w.state.lightProbeGridArray)?dt=!0:(Ie.outputColorSpace!==ve||Ie.toneMapping!==bt)&&(An=!0):(dt=!0,Ie.__version=z.version);let oi=Ie.currentProgram;(dt===!0||An===!0)&&(oi=An===!0?Hr(z,N,G,ve,bt):mn(z,N,G),U&&z.isNodeMaterial&&U.onUpdateProgram(z,oi,Ie));let Cn=!1,gn=!1,Qi=!1,ft=oi.getUniforms(),ei=Ie.uniforms;if(Ee.useProgram(oi.program)&&(Cn=!0,gn=!0,Qi=!0),z.id!==Y&&(Y=z.id,gn=!0),Cn||D!==b){Ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",b.projectionMatrix),ft.setValue(O,"viewMatrix",b.matrixWorldInverse);let Et=ft.map.cameraPosition;Et!==void 0&&Et.setValue(O,pi.setFromMatrixPosition(b.matrixWorld)),Nt.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ft.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),D!==b&&(D=b,gn=!0,Qi=!0)}if(Ie.needsLights&&(ri.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",ri.state.sunShadowMap,Ye),ri.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",ri.state.directionalShadowMap,Ye),ri.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",ri.state.spotShadowMap,Ye),ri.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",ri.state.pointShadowMap,Ye)),G.isSkinnedMesh){ft.setOptional(O,G,"bindMatrix"),ft.setOptional(O,G,"bindMatrixInverse");let It=G.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ft.setValue(O,"boneTexture",It.boneTexture,Ye))}G.isBatchedMesh&&(ft.setOptional(O,G,"batchingTexture"),ft.setValue(O,"batchingTexture",G._matricesTexture,Ye),ft.setOptional(O,G,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",G._indirectTexture,Ye),ft.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",G._colorsTexture,Ye));let Ti=Z.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ne.update(G,Z,oi),(gn||Ie.receiveShadow!==G.receiveShadow)&&(Ie.receiveShadow=G.receiveShadow,ft.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(ei.envMapIntensity.value=N.environmentIntensity),ei.dfgLUT!==void 0&&(ei.dfgLUT.value=S_()),gn){if(ft.setValue(O,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&Bc(ei,Qi),xe&&z.fog===!0&&me.refreshFogUniforms(ei,xe),me.refreshMaterialUniforms(ei,z,Se,Le,w.state.transmissionRenderTarget[b.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let It=E,Et=0;for(let yi of w.state.lightProbeGridArray)yi.texture!==null&&(It.textures[Et]=yi.texture,It.min[Et]=yi.boundingBox.min,It.max[Et]=yi.boundingBox.max,It.resolution[Et]=yi.resolution,Et++);for(let yi in It)It[yi].length=Et;ei.probesSH.value=It.textures,ei.probesMin.value=It.min,ei.probesMax.value=It.max,ei.probesResolution.value=It.resolution}Rr.upload(O,zr(Ie),ei,Ye)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Rr.upload(O,zr(Ie),ei,Ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ft.setValue(O,"center",G.center),ft.setValue(O,"modelViewMatrix",G.modelViewMatrix),ft.setValue(O,"normalMatrix",G.normalMatrix),ft.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let It=z.uniformsGroups;for(let Et=0,yi=It.length;Et<yi;Et++){let Gr=It[Et];Ue.update(Gr,oi),Ue.bind(Gr,oi)}}return oi}function Bc(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Oi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(b,N,Z){let z=Fe.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=N,Fe.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Z,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let Z=Fe.get(b);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,Z=0){le=b,H=N,K=Z;let z=null,G=!1,xe=!1;if(b){let ve=Fe.get(b);if(ve.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(O.FRAMEBUFFER,ve.__webglFramebuffer),B.copy(b.viewport),ce.copy(b.scissor),Ae=b.scissorTest,Ee.viewport(B),Ee.scissor(ce),Ee.setScissorTest(Ae),Y=-1;return}else if(ve.__webglFramebuffer===void 0)Ye.setupRenderTarget(b);else if(ve.__hasExternalTextures)Ye.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ke=b.depthTexture;if(ve.__boundDepthTexture!==Ke){if(Ke!==null&&Fe.has(Ke)&&(b.width!==Ke.image.width||b.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(b)}}let we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);let De=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[N])?z=De[N][Z]:z=De[N],G=!0):b.samples>0&&Ye.useMultisampledRTT(b)===!1?z=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[Z]:z=De,B.copy(b.viewport),ce.copy(b.scissor),Ae=b.scissorTest}else B.copy(Be).multiplyScalar(Se).floor(),ce.copy(gt).multiplyScalar(Se).floor(),Ae=_t;if(Z!==0&&(z=q),Ee.bindFramebuffer(O.FRAMEBUFFER,z)&&Ee.drawBuffers(b,z),Ee.viewport(B),Ee.scissor(ce),Ee.setScissorTest(Ae),G){let ve=Fe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,Z)}else if(xe){let ve=N;for(let we=0;we<b.textures.length;we++){let De=Fe.get(b.textures[we]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+we,De.__webglTexture,Z,ve)}}else if(b!==null&&Z!==0){let ve=Fe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ve.__webglTexture,Z)}Y=-1};function ca(b){let N=Fe.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=Nt.textureFormatReadable(b.format),N.__typeReadable=Nt.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,Z,z,G,xe,Ne,ve=0){if(!(b&&b.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne],Array.isArray(we)&&(we=we[0])),we){Ee.bindFramebuffer(O.FRAMEBUFFER,we);try{let De=b.textures[ve],Ke=De.format,tt=De.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let Pe=ca(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-z&&Z>=0&&Z<=b.height-G&&O.readPixels(N,Z,z,G,de.convert(Ke),de.convert(tt),xe)}finally{let De=le!==null?Fe.get(le).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(b,N,Z,z,G,xe,Ne,ve=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(we=we[Ne],Array.isArray(we)&&(we=we[0])),we)if(N>=0&&N<=b.width-z&&Z>=0&&Z<=b.height-G){Ee.bindFramebuffer(O.FRAMEBUFFER,we);let De=b.textures[ve],Ke=De.format,tt=De.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ve);let Pe=ca(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),O.readPixels(N,Z,z,G,de.convert(Ke),de.convert(tt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ht=le!==null?Fe.get(le).__webglFramebuffer:null;Ee.bindFramebuffer(O.FRAMEBUFFER,Ht);let bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await _f(O,bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,st),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(st),O.deleteSync(bt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,Z=0){let z=Math.pow(2,-Z),G=Math.floor(b.image.width*z),xe=Math.floor(b.image.height*z),Ne=N!==null?N.x:0,ve=N!==null?N.y:0;Ye.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ne,ve,G,xe),Ee.unbindTexture()},this.copyTextureToTexture=function(b,N,Z=null,z=null,G=0,xe=0){let Ne,ve,we,De,Ke,tt,Pe,st,Ht,bt=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(Z!==null)Ne=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ke=Z.min.y,tt=Z.isBox3?Z.min.z:0;else{let ft=Math.pow(2,-G);Ne=Math.floor(bt.width*ft),ve=Math.floor(bt.height*ft),b.isDataArrayTexture?we=bt.depth:b.isData3DTexture?we=Math.floor(bt.depth*ft):we=1,De=0,Ke=0,tt=0}z!==null?(Pe=z.x,st=z.y,Ht=z.z):(Pe=0,st=0,Ht=0);let yt=de.convert(N.format),gi=de.convert(N.type),Ie;N.isData3DTexture?(Ye.setTexture3D(N,0),Ie=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ye.setTexture2DArray(N,0),Ie=O.TEXTURE_2D_ARRAY):(Ye.setTexture2D(N,0),Ie=O.TEXTURE_2D),Ee.activeTexture(O.TEXTURE0),Ee.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),Ee.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),Ee.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let ri=Ee.getParameter(O.UNPACK_ROW_LENGTH),dt=Ee.getParameter(O.UNPACK_IMAGE_HEIGHT),An=Ee.getParameter(O.UNPACK_SKIP_PIXELS),oi=Ee.getParameter(O.UNPACK_SKIP_ROWS),Cn=Ee.getParameter(O.UNPACK_SKIP_IMAGES);Ee.pixelStorei(O.UNPACK_ROW_LENGTH,bt.width),Ee.pixelStorei(O.UNPACK_IMAGE_HEIGHT,bt.height),Ee.pixelStorei(O.UNPACK_SKIP_PIXELS,De),Ee.pixelStorei(O.UNPACK_SKIP_ROWS,Ke),Ee.pixelStorei(O.UNPACK_SKIP_IMAGES,tt);let gn=b.isDataArrayTexture||b.isData3DTexture,Qi=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let ft=Fe.get(b),ei=Fe.get(N),Ti=Fe.get(ft.__renderTarget),It=Fe.get(ei.__renderTarget);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,Ti.__webglFramebuffer),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Et=0;Et<we;Et++)gn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,G,tt+Et),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Fe.get(N).__webglTexture,xe,Ht+Et)),O.blitFramebuffer(De,Ke,De+Ne,Ke+ve,Pe,st,Pe+Ne,st+ve,O.DEPTH_BUFFER_BIT,O.NEAREST);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Fe.has(b)){let ft=Fe.get(b),ei=Fe.get(N);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,R),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let Ti=0;Ti<we;Ti++)gn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,G,tt+Ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,G),Qi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ei.__webglTexture,xe,Ht+Ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ei.__webglTexture,xe),G!==0?O.blitFramebuffer(De,Ke,De+Ne,Ke+ve,Pe,st,Pe+Ne,st+ve,O.COLOR_BUFFER_BIT,O.NEAREST):Qi?O.copyTexSubImage3D(Ie,xe,Pe,st,Ht+Ti,De,Ke,Ne,ve):O.copyTexSubImage2D(Ie,xe,Pe,st,De,Ke,Ne,ve);Ee.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qi?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ie,xe,Pe,st,Ht,Ne,ve,we,yt,gi,bt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,xe,Pe,st,Ht,Ne,ve,we,yt,bt.data):O.texSubImage3D(Ie,xe,Pe,st,Ht,Ne,ve,we,yt,gi,bt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,Pe,st,Ne,ve,yt,gi,bt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,Pe,st,bt.width,bt.height,yt,bt.data):O.texSubImage2D(O.TEXTURE_2D,xe,Pe,st,Ne,ve,yt,gi,bt);Ee.pixelStorei(O.UNPACK_ROW_LENGTH,ri),Ee.pixelStorei(O.UNPACK_IMAGE_HEIGHT,dt),Ee.pixelStorei(O.UNPACK_SKIP_PIXELS,An),Ee.pixelStorei(O.UNPACK_SKIP_ROWS,oi),Ee.pixelStorei(O.UNPACK_SKIP_IMAGES,Cn),xe===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(Ie),Ee.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&Ye.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ye.setTextureCube(b,0):b.isData3DTexture?Ye.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ye.setTexture2DArray(b,0):Ye.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){H=0,K=0,le=null,Ee.reset(),pe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var He=(s,e,t)=>Math.min(t,Math.max(e,s)),Xn=(s,e,t)=>s+(e-s)*t;function $i(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var dp="hv_settings_v1";function cp(){let s=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,e=window.HV_CONFIG||{};return{quality:s?"medium":"high",sensitivity:1,invertY:!1,volume:.8,camMode:"third",serverUrl:e.serverUrl||"",showTouch:"auto",playerName:"Survivor"}}function fp(){try{let s=localStorage.getItem(dp);if(s)return ti(ti({},cp()),JSON.parse(s))}catch(s){}return cp()}function pp(s){try{localStorage.setItem(dp,JSON.stringify(s))}catch(e){}}var Qt={rain:0,storm:0,night:1},vu="hv_sp_v1";function mp(){try{let s=localStorage.getItem(vu);if(s)return JSON.parse(s)}catch(s){}return null}function gp(s){try{localStorage.setItem(vu,JSON.stringify(s))}catch(e){}}function yp(){try{localStorage.removeItem(vu)}catch(s){}}var yc=new Map;function qt(s,e,t,i,n=1){let r=document.createElement("canvas");r.width=r.height=s;let o=r.getContext("2d"),a=$i(n);o.fillStyle=e,o.fillRect(0,0,s,s);for(let c=0;c<t.length;c++){o.fillStyle=t[c];for(let h=0;h<s*s*.02;h++){let d=a()*s,u=a()*s,f=1+a()*(s/32);o.globalAlpha=.12+a()*.22,o.beginPath(),o.arc(d,u,f,0,Math.PI*2),o.fill()}}o.globalAlpha=1;let l=o.getImageData(0,0,s,s);for(let c=0;c<l.data.length;c+=4){let h=(a()-.5)*i;l.data[c]=He(l.data[c]+h,0,255),l.data[c+1]=He(l.data[c+1]+h,0,255),l.data[c+2]=He(l.data[c+2]+h,0,255)}return o.putImageData(l,0,0),r}function At(s){let e=yc.get(s);if(e)return e;let t=256,i=qt(t,"#333",["#2a2a2a"],10,1),n=i.getContext("2d");switch(s){case"ground":i=qt(t,"#2b2a24",["#232420","#332f26","#1d1e19"],26,11);break;case"dirt":i=qt(t,"#3a3227",["#2e2820","#453a2c"],22,22);break;case"grass":i=qt(t,"#252e1c",["#1c2416","#2e3a22","#161c10"],30,33);break;case"plank":{i=qt(t,"#4a3a28",["#3c2f20","#55422e"],14,44),n.strokeStyle="rgba(20,14,8,0.9)";for(let o=0;o<t;o+=32)n.lineWidth=2,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke(),n.lineWidth=1,n.beginPath(),n.moveTo(0,o+16+Math.random()*4),n.lineTo(t,o+14+Math.random()*6),n.stroke();break}case"plankdark":{i=qt(t,"#2e2618",["#241d12","#382e1e"],16,55),n.strokeStyle="rgba(10,8,4,0.9)";for(let o=0;o<t;o+=32)n.lineWidth=2,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();break}case"stone":{i=qt(t,"#4a4a48",["#3c3c3a","#565652","#323230"],20,66),n.strokeStyle="rgba(18,18,16,0.85)";for(let o=0;o<t;o+=42){n.lineWidth=2.5,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();let a=o/42%2===0?0:32;for(let l=a;l<t;l+=64)n.beginPath(),n.moveTo(l,o),n.lineTo(l,Math.min(t,o+42)),n.stroke()}break}case"roof":{i=qt(t,"#33262a",["#281d21","#3e2e33"],18,77),n.strokeStyle="rgba(12,8,10,0.9)";for(let o=0;o<t;o+=20)n.lineWidth=3,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();for(let o=0;o<t;o+=40)for(let a=o/40%2*20;a<t;a+=40)n.beginPath(),n.moveTo(a,o),n.lineTo(a,o+20),n.stroke();break}case"bark":{i=qt(t,"#2c231a",["#221b13","#382c1f"],30,88),n.strokeStyle="rgba(14,10,6,0.5)";for(let o=0;o<40;o++){let a=Math.random()*t;n.lineWidth=1+Math.random()*2,n.beginPath(),n.moveTo(a,0),n.bezierCurveTo(a+8,t/3,a-8,2*t/3,a+3,t),n.stroke()}break}case"cloth":i=qt(t,"#3a3630",["#302c26","#443f38"],24,99);break;case"metal":i=qt(t,"#3c4044",["#303438","#484c50"],12,111);break;case"curtain":i=qt(t,"#2a2028",["#221a20","#342832"],18,122);break;case"paper":i=qt(t,"#c9bfa4",["#bfb498","#d4cab0"],10,133);break;case"brick":{i=qt(t,"#3d2c26",["#332420","#48352c"],16,144),n.strokeStyle="rgba(16,12,10,0.9)";for(let o=0;o<t;o+=26){n.lineWidth=2.5,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();let a=o/26%2===0?0:26;for(let l=a;l<t;l+=52)n.beginPath(),n.moveTo(l,o),n.lineTo(l,Math.min(t,o+26)),n.stroke()}break}case"shingle":{i=qt(t,"#26222b",["#1d1a22","#302a35"],14,155),n.strokeStyle="rgba(10,8,12,0.95)";for(let o=0;o<t;o+=18){n.lineWidth=2,n.beginPath(),n.moveTo(0,o),n.lineTo(t,o),n.stroke();let a=o/18%2*14;for(let l=a;l<t;l+=28)n.beginPath(),n.arc(l+14,o,14,Math.PI,0),n.stroke()}break}case"hay":i=qt(t,"#6b5a2a",["#57491f","#7d6b34","#4a3d18"],34,166);break;case"water":i=qt(t,"#101c20",["#0c161a","#14242a","#0a1216"],10,177);break;case"iron":{i=qt(t,"#26282c",["#1c1e22","#303338"],14,188),n.strokeStyle="rgba(70,60,40,0.35)";for(let o=0;o<22;o++){let a=Math.random()*t,l=Math.random()*t,c=2+Math.random()*7;n.beginPath(),n.arc(a,l,c,0,Math.PI*2),n.stroke()}break}case"corn":{i=qt(t,"#1a2410",["#131c0b","#223016"],26,199),n.strokeStyle="rgba(50,72,28,0.8)";for(let o=0;o<60;o++){let a=Math.random()*t;n.lineWidth=1.5,n.beginPath(),n.moveTo(a,t),n.quadraticCurveTo(a+8,t/2,a+2,0),n.stroke()}break}case"wallpaper":{i=qt(t,"#3a3226",["#312a20","#443a2c"],18,211),n.strokeStyle="rgba(90,74,50,0.4)";for(let o=8;o<t;o+=32)for(let a=8;a<t;a+=32)n.beginPath(),n.arc(a,o,5,0,Math.PI*2),n.stroke();break}case"dress":i=qt(t,"#6a6560",["#57534e","#7a756e","#48443f"],22,222);break;case"coat":i=qt(t,"#2c3038",["#232730","#363c46"],18,233);break;case"ritual":{i=qt(t,"#20261e",["#181d16","#2a3226"],20,244),n.strokeStyle="rgba(120,140,90,0.5)";for(let o=0;o<5;o++)n.beginPath(),n.arc(t/2,t/2,30+o*22,0,Math.PI*2),n.stroke();break}}let r=new Yi(i);return r.wrapS=r.wrapT=as,r.colorSpace=Ft,r.anisotropy=4,yc.set(s,r),r}function Ji(s){let e="sprite_"+s,t=yc.get(e);if(t)return t;let i=128,n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d");if(s==="puff"||s==="glow"||s==="flame"){let a=r.createRadialGradient(i/2,i/2,2,i/2,i/2,i/2);s==="puff"?(a.addColorStop(0,"rgba(180,185,200,0.55)"),a.addColorStop(.5,"rgba(150,155,175,0.22)"),a.addColorStop(1,"rgba(140,145,165,0)")):s==="glow"?(a.addColorStop(0,"rgba(255,214,150,0.9)"),a.addColorStop(.4,"rgba(255,170,80,0.35)"),a.addColorStop(1,"rgba(255,150,50,0)")):(a.addColorStop(0,"rgba(255,235,190,0.95)"),a.addColorStop(.35,"rgba(255,160,60,0.8)"),a.addColorStop(.7,"rgba(200,70,20,0.35)"),a.addColorStop(1,"rgba(120,30,10,0)")),r.fillStyle=a,r.fillRect(0,0,i,i)}else if(s==="blood"){let a=$i(31);r.fillStyle="rgba(90,8,8,0.9)",r.beginPath(),r.arc(i/2,i/2,i*.22,0,Math.PI*2),r.fill();for(let l=0;l<26;l++){let c=a()*Math.PI*2,h=i*(.16+a()*.3);r.beginPath(),r.arc(i/2+Math.cos(c)*h,i/2+Math.sin(c)*h,1.5+a()*5,0,Math.PI*2),r.fillStyle=`rgba(${70+a()*40},6,6,${.5+a()*.45})`,r.fill()}}else if(s==="hole"){let a=r.createRadialGradient(i/2,i/2,1,i/2,i/2,i/2);a.addColorStop(0,"rgba(8,8,8,0.95)"),a.addColorStop(.35,"rgba(20,18,16,0.8)"),a.addColorStop(.6,"rgba(40,36,30,0.35)"),a.addColorStop(1,"rgba(40,36,30,0)"),r.fillStyle=a,r.fillRect(0,0,i,i)}else{let a=r.createLinearGradient(0,0,0,i);a.addColorStop(0,"rgba(160,180,210,0)"),a.addColorStop(.5,"rgba(170,190,220,0.5)"),a.addColorStop(1,"rgba(160,180,210,0)"),r.fillStyle=a,r.fillRect(i/2-1,0,2,i)}let o=new Yi(n);return o.colorSpace=Ft,yc.set(e,o),o}function ui(s,e,t){let i=s.clone();return i.needsUpdate=!0,i.repeat.set(e,t),i}var xc=class{constructor(){this.ctx=null;this.master=null;this.windGain=null;this.droneOsc=null;this.droneGain=null;this.dissGain=null;this.growlGain=null;this.growlOsc=null;this.heartTimer=0;this.danger=0;this.volume=.8;this.rainGain=null;this.chaseGain=null;this.chaseOsc=null}setChase(e){!this.chaseGain||!this.ctx||(this.chaseGain.gain.setTargetAtTime(He(e,0,1)*.16,this.ctx.currentTime,.35),this.chaseOsc&&this.chaseOsc.frequency.setTargetAtTime(98+e*40,this.ctx.currentTime,.5))}setRain(e){!this.rainGain||!this.ctx||this.rainGain.gain.setTargetAtTime(He(e,0,1)*.16,this.ctx.currentTime,1.2)}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),this.startAmbience()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}noiseBuffer(e=2){let t=this.ctx,i=t.createBuffer(1,Math.max(1,Math.floor(t.sampleRate*e)),t.sampleRate),n=i.getChannelData(0),r=0;for(let o=0;o<n.length;o++){let a=Math.random()*2-1;r=(r+.02*a)/1.02,n[o]=r*3.2}return i}startAmbience(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.noiseBuffer(4),t.loop=!0;let i=e.createBiquadFilter();i.type="lowpass",i.frequency.value=420,i.Q.value=.6,this.windGain=e.createGain(),this.windGain.gain.value=.14;let n=e.createOscillator();n.frequency.value=.09;let r=e.createGain();r.gain.value=.05,n.connect(r),r.connect(this.windGain.gain),t.connect(i),i.connect(this.windGain),this.windGain.connect(this.master),t.start(),n.start(),this.droneOsc=e.createOscillator(),this.droneOsc.type="sine",this.droneOsc.frequency.value=46;let o=e.createOscillator();o.type="sine",o.frequency.value=46.7,this.droneGain=e.createGain(),this.droneGain.gain.value=.05,this.dissGain=e.createGain(),this.dissGain.gain.value=0;let a=e.createOscillator();a.type="sawtooth",a.frequency.value=92;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=300,this.droneOsc.connect(this.droneGain),o.connect(this.droneGain),this.droneGain.connect(this.master),a.connect(l),l.connect(this.dissGain),this.dissGain.connect(this.master),this.droneOsc.start(),o.start(),a.start(),this.growlOsc=e.createOscillator(),this.growlOsc.type="sawtooth",this.growlOsc.frequency.value=58;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=190;let h=e.createOscillator();h.frequency.value=5.2;let d=e.createGain();d.gain.value=14,h.connect(d),d.connect(this.growlOsc.frequency),this.growlGain=e.createGain(),this.growlGain.gain.value=0,this.growlOsc.connect(c),c.connect(this.growlGain),this.growlGain.connect(this.master),this.growlOsc.start(),h.start();let u=e.createBufferSource();u.buffer=this.noiseBuffer(3),u.loop=!0;let f=e.createBiquadFilter();f.type="highpass",f.frequency.value=1400;let g=e.createBiquadFilter();g.type="lowpass",g.frequency.value=6500,this.rainGain=e.createGain(),this.rainGain.gain.value=0,u.connect(f),f.connect(g),g.connect(this.rainGain),this.rainGain.connect(this.master),u.start(),this.chaseGain=e.createGain(),this.chaseGain.gain.value=0,this.chaseOsc=e.createOscillator(),this.chaseOsc.type="sawtooth",this.chaseOsc.frequency.value=98;let x=e.createOscillator();x.type="sawtooth",x.frequency.value=98.9;let p=e.createBiquadFilter();p.type="lowpass",p.frequency.value=700;let m=e.createOscillator();m.type="sine",m.frequency.value=7.4;let v=e.createGain();v.gain.value=.5;let T=e.createGain();T.gain.value=.5,m.connect(v),this.chaseOsc.connect(p),x.connect(p),p.connect(T),v.connect(T.gain),T.connect(this.chaseGain),this.chaseGain.connect(this.master),this.chaseOsc.start(),x.start(),m.start();let E=e.createOscillator();E.type="sine",E.frequency.value=55;let C=e.createGain();C.gain.value=0;let w=e.createOscillator();w.type="square",w.frequency.value=2.2;let y=e.createGain();y.gain.value=.06,w.connect(y),y.connect(C.gain),E.connect(C),C.connect(this.chaseGain),E.start(),w.start()}update(e){if(!this.ctx||!this.droneGain||!this.droneOsc||!this.dissGain)return;let t=this.ctx.currentTime;if(this.droneGain.gain.setTargetAtTime(.04+this.danger*.09,t,.4),this.droneOsc.frequency.setTargetAtTime(46+this.danger*10,t,.6),this.dissGain.gain.setTargetAtTime(this.danger*.045,t,.5),this.windGain&&this.windGain.gain.setTargetAtTime(.1+this.danger*.08,t,1.2),this.danger>.25&&(this.heartTimer-=e,this.heartTimer<=0)){let i=42+this.danger*78;this.heartTimer=60/i,this.thump(.5+this.danger*.5),setTimeout(()=>this.thump(.35+this.danger*.35),150)}}thump(e){let t=this.ctx;if(!t||!this.master)return;let i=t.createOscillator();i.type="sine",i.frequency.setValueAtTime(58,t.currentTime),i.frequency.exponentialRampToValueAtTime(30,t.currentTime+.12);let n=t.createGain();n.gain.setValueAtTime(e*.5,t.currentTime),n.gain.exponentialRampToValueAtTime(.001,t.currentTime+.22),i.connect(n),n.connect(this.master),i.start(),i.stop(t.currentTime+.25)}env(e,t,i,n=.005){let r=this.ctx,o=r.createGain();return o.gain.setValueAtTime(1e-4,r.currentTime),o.gain.linearRampToValueAtTime(t,r.currentTime+n),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+i),e.connect(o),o.connect(this.master),o}spatial(e,t,i,n){if(!e||!i)return[n,0];let r=i.x-e.x,o=i.z-e.z,a=Math.hypot(r,o),l=n*He(1-a/38,0,1)**1.4,c=Math.atan2(r,o)-t,h=He(Math.sin(c),-1,1)*He(1-a/40,0,1);return[l,h]}play3d(e,t,i,n,r=.5){let[o,a]=this.spatial(t,i,n,r);o<.004||this.play(e,o,a)}play(e,t=.5,i=0){let n=this.ctx;if(!n||!this.master)return;let r=n.createStereoPanner();r.pan.value=He(i,-1,1),r.connect(this.master);let o=n.currentTime;switch(e){case"step":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.1);let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=240+Math.random()*160,l.Q.value=1.1,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.5,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.09),l.connect(c),c.connect(r),a.start(),a.stop(o+.1);break}case"shot":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.4);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3200,o),l.frequency.exponentialRampToValueAtTime(180,o+.28),a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.32),l.connect(c),c.connect(r);let h=n.createOscillator();h.type="triangle",h.frequency.setValueAtTime(110,o),h.frequency.exponentialRampToValueAtTime(38,o+.16);let d=n.createGain();d.gain.setValueAtTime(t*.9,o),d.gain.exponentialRampToValueAtTime(1e-4,o+.2),h.connect(d),d.connect(r),a.start(),a.stop(o+.4),h.start(),h.stop(o+.22);break}case"dry":{this.blip(r,1400,.04,t*.4,"square");break}case"reload":{this.blip(r,900,.05,t*.5,"square"),setTimeout(()=>this.blip(r,620,.06,t*.5,"square"),130),setTimeout(()=>this.blip(r,1100,.05,t*.6,"square"),300);break}case"knife":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.2);let l=n.createBiquadFilter();l.type="bandpass",l.Q.value=2.5,l.frequency.setValueAtTime(600,o),l.frequency.exponentialRampToValueAtTime(3600,o+.12),a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.7,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.15),l.connect(c),c.connect(r),a.start(),a.stop(o+.2);break}case"flesh":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.25);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=380,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.9,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.22),l.connect(c),c.connect(r),a.start(),a.stop(o+.25);break}case"pickup":{this.tone(r,520,.09,t*.35,"sine"),setTimeout(()=>this.tone(r,780,.12,t*.35,"sine"),80);break}case"paper":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.3);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=1800,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.35,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.28),l.connect(c),c.connect(r),a.start(),a.stop(o+.3);break}case"door":{let a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(85,o),a.frequency.exponentialRampToValueAtTime(55,o+.7);let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=300,l.Q.value=4,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.45,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.75),l.connect(c),c.connect(r),a.start(),a.stop(o+.8);break}case"brazier":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(1.2);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(300,o),l.frequency.exponentialRampToValueAtTime(2400,o+.5),a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.8,o),c.gain.exponentialRampToValueAtTime(1e-4,o+1.1),l.connect(c),c.connect(r),a.start(),a.stop(o+1.2);break}case"click":{this.blip(r,2e3,.03,t*.3,"square");break}case"flash":{this.blip(r,2600,.025,t*.35,"square");break}case"scare":{for(let h=0;h<5;h++){let d=n.createOscillator();d.type="sawtooth";let u=620+h*47;d.frequency.setValueAtTime(u,o),d.frequency.linearRampToValueAtTime(u*1.9,o+.5);let f=n.createGain();f.gain.setValueAtTime(1e-4,o),f.gain.linearRampToValueAtTime(t*.16,o+.03),f.gain.exponentialRampToValueAtTime(1e-4,o+.55),d.connect(f),f.connect(r),d.start(),d.stop(o+.6)}let a=n.createBufferSource();a.buffer=this.noiseBuffer(.6);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=900,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.5,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.5),l.connect(c),c.connect(r),a.start(),a.stop(o+.6);break}case"scream":{let a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(780,o),a.frequency.exponentialRampToValueAtTime(160,o+.9);let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=2,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.55,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.95),l.connect(c),c.connect(r),a.start(),a.stop(o+1);break}case"whisper":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(1.4);let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=1150,l.Q.value=6;let c=n.createOscillator();c.frequency.value=6.5;let h=n.createGain();h.gain.value=420,c.connect(h),h.connect(l.frequency),a.connect(l);let d=n.createGain();d.gain.setValueAtTime(1e-4,o),d.gain.linearRampToValueAtTime(t*.28,o+.4),d.gain.linearRampToValueAtTime(1e-4,o+1.3),l.connect(d),d.connect(r),a.start(),a.stop(o+1.4),c.start(),c.stop(o+1.4);break}case"bang":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.8);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(5200,o),l.frequency.exponentialRampToValueAtTime(120,o+.5),a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.7),l.connect(c),c.connect(r),a.start(),a.stop(o+.8);let h=n.createOscillator();h.type="sine",h.frequency.setValueAtTime(180,o),h.frequency.exponentialRampToValueAtTime(40,o+.5);let d=n.createGain();d.gain.setValueAtTime(t*.9,o),d.gain.exponentialRampToValueAtTime(1e-4,o+.6),h.connect(d),d.connect(r),h.start(),h.stop(o+.65);break}case"heal":{this.tone(r,420,.15,t*.3,"sine"),setTimeout(()=>this.tone(r,560,.2,t*.3,"sine"),140);break}case"craft":{this.blip(r,500,.07,t*.5,"square"),setTimeout(()=>this.blip(r,760,.07,t*.5,"square"),120),setTimeout(()=>this.blip(r,1e3,.1,t*.5,"square"),240);break}case"win":{[392,494,587,784].forEach((l,c)=>setTimeout(()=>this.tone(r,l,.5,t*.25,"sine"),c*220));break}case"lose":{[392,330,262,175].forEach((l,c)=>setTimeout(()=>this.tone(r,l,.6,t*.3,"sine"),c*300));break}case"bell":{let a=n.createOscillator();a.type="sine",a.frequency.value=660;let l=n.createOscillator();l.type="sine",l.frequency.value=663;let c=n.createGain();c.gain.setValueAtTime(t*.4,o),c.gain.exponentialRampToValueAtTime(1e-4,o+2.4),a.connect(c),l.connect(c),c.connect(r),a.start(),l.start(),a.stop(o+2.5),l.stop(o+2.5);break}case"thunder":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(2.6);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1400,o),l.frequency.exponentialRampToValueAtTime(60,o+2.2),a.connect(l);let c=n.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(t*.9,o+.08),c.gain.exponentialRampToValueAtTime(1e-4,o+2.5),l.connect(c),c.connect(r),a.start(),a.stop(o+2.6);let h=n.createOscillator();h.type="sine",h.frequency.setValueAtTime(44,o),h.frequency.exponentialRampToValueAtTime(24,o+1.8);let d=n.createGain();d.gain.setValueAtTime(t*.5,o),d.gain.exponentialRampToValueAtTime(1e-4,o+1.9),h.connect(d),d.connect(r),h.start(),h.stop(o+2);break}case"crow":{for(let a=0;a<3;a++)setTimeout(()=>{let l=n.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(720+Math.random()*120,n.currentTime),l.frequency.exponentialRampToValueAtTime(420,n.currentTime+.14);let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=900,c.Q.value=1.6,l.connect(c);let h=n.createGain();h.gain.setValueAtTime(t*.3,n.currentTime),h.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.16),c.connect(h),h.connect(r),l.start(),l.stop(n.currentTime+.18)},a*170);break}case"crank":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.3);let l=n.createBiquadFilter();l.type="bandpass",l.frequency.value=500+Math.random()*300,l.Q.value=3,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.3,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.22),l.connect(c),c.connect(r),a.start(),a.stop(o+.3);break}case"shutter":{this.blip(r,1800,.03,t*.5,"square"),setTimeout(()=>this.blip(r,900,.04,t*.4,"square"),60);break}case"static":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.5);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=1200,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.22,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.45),l.connect(c),c.connect(r),a.start(),a.stop(o+.5);break}case"unjam":{this.blip(r,420,.07,t*.5,"square"),setTimeout(()=>this.blip(r,300,.09,t*.5,"square"),120);break}case"stab":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(.3);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.85,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.3),l.connect(c),c.connect(r),a.start(),a.stop(o+.32),this.blip(r,90,.2,t*.4,"sine");break}case"glass":{for(let h=0;h<6;h++)setTimeout(()=>this.blip(r,2200+Math.random()*2600,.05,t*.2,"triangle"),h*40);let a=n.createBufferSource();a.buffer=this.noiseBuffer(.3);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=2600,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.4,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.28),l.connect(c),c.connect(r),a.start(),a.stop(o+.3);break}case"chime":{[523,659,784].forEach((l,c)=>setTimeout(()=>this.tone(r,l,.4,t*.2,"sine"),c*120));break}case"sizzle":{let a=n.createBufferSource();a.buffer=this.noiseBuffer(1);let l=n.createBiquadFilter();l.type="highpass",l.frequency.value=3e3,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(t*.3,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.9),l.connect(c),c.connect(r),a.start(),a.stop(o+1);break}case"moan":{let a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(210,o),a.frequency.linearRampToValueAtTime(150,o+1.1);let l=n.createBiquadFilter();l.type="lowpass",l.frequency.value=500,l.Q.value=2,a.connect(l);let c=n.createGain();c.gain.setValueAtTime(1e-4,o),c.gain.linearRampToValueAtTime(t*.4,o+.25),c.gain.exponentialRampToValueAtTime(1e-4,o+1.2),l.connect(c),c.connect(r),a.start(),a.stop(o+1.3);break}case"coo":{[0,180,360].forEach((l,c)=>setTimeout(()=>{let h=n.createOscillator();h.type="sine",h.frequency.setValueAtTime(330+c*20,n.currentTime),h.frequency.exponentialRampToValueAtTime(250,n.currentTime+.15);let d=n.createGain();d.gain.setValueAtTime(t*.3,n.currentTime),d.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.18),h.connect(d),d.connect(r),h.start(),h.stop(n.currentTime+.2)},l));break}case"ritual":{[196,233,175,147].forEach((l,c)=>setTimeout(()=>{let h=n.createOscillator();h.type="sine",h.frequency.value=l;let d=n.createOscillator();d.type="sine",d.frequency.value=l*1.005;let u=n.createGain();u.gain.setValueAtTime(1e-4,n.currentTime),u.gain.linearRampToValueAtTime(t*.22,n.currentTime+.4),u.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+1.6),h.connect(u),d.connect(u),u.connect(r),h.start(),d.start(),h.stop(n.currentTime+1.7),d.stop(n.currentTime+1.7)},c*500));break}}}blip(e,t,i,n,r){let o=this.ctx,a=o.currentTime,l=o.createOscillator();l.type=r,l.frequency.value=t;let c=o.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+i),l.connect(c),c.connect(e),l.start(),l.stop(a+i+.01)}tone(e,t,i,n,r){this.blip(e,t,i,n,r)}setGrowl(e,t=58){!this.growlGain||!this.growlOsc||!this.ctx||(this.growlGain.gain.setTargetAtTime(e,this.ctx.currentTime,.15),this.growlOsc.frequency.setTargetAtTime(t,this.ctx.currentTime,.2))}},w_={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",r:"KeyR",f:"KeyF",q:"KeyQ",h:"KeyH",v:"KeyV",c:"KeyC",i:"KeyI",escape:"Escape",shift:"ShiftLeft",control:"ControlLeft",1:"Digit1",2:"Digit2",3:"Digit3",4:"Digit4",5:"Digit5"," ":"Space",g:"KeyG",m:"KeyM",j:"KeyJ",b:"KeyB",n:"KeyN",u:"KeyU",t:"KeyT",x:"KeyX",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"};function hp(s){if(s.code)return s.code;let e=s.key.toLowerCase();return w_[e]||"Key_"+e.toUpperCase()}var vc=class{constructor(){this.keys={};this.buttons={};this.look={x:0,y:0};this.touchMove={x:0,y:0};this.pointerLocked=!1;this.el=null;this.onKeyExtra=null;this.kd=e=>{if(e.repeat)return;let t=hp(e);this.keys[t]=!0,this.onKeyExtra&&this.onKeyExtra(t),["Space","Tab"].includes(t)&&e.preventDefault()};this.ku=e=>{this.keys[hp(e)]=!1};this.md=e=>{var t,i;!this.pointerLocked&&this.el&&((i=(t=this.el).requestPointerLock)==null||i.call(t)),e.button===0&&(this.buttons.attack=!0),e.button===2&&(this.buttons.aim=!0)};this.mu=e=>{e.button===0&&(this.buttons.attack=!1),e.button===2&&(this.buttons.aim=!1)};this.mm=e=>{this.pointerLocked&&(this.look.x+=e.movementX*.0022,this.look.y+=e.movementY*.0022)};this.plc=()=>{this.pointerLocked=document.pointerLockElement===this.el}}attach(e){this.el=e,window.addEventListener("keydown",this.kd),window.addEventListener("keyup",this.ku),e.addEventListener("mousedown",this.md),window.addEventListener("mouseup",this.mu),window.addEventListener("mousemove",this.mm),document.addEventListener("pointerlockchange",this.plc),e.addEventListener("contextmenu",t=>t.preventDefault())}detach(){window.removeEventListener("keydown",this.kd),window.removeEventListener("keyup",this.ku),window.removeEventListener("mouseup",this.mu),window.removeEventListener("mousemove",this.mm),document.removeEventListener("pointerlockchange",this.plc)}requestLock(){var e,t;this.el&&!this.pointerLocked&&((t=(e=this.el).requestPointerLock)==null||t.call(e))}exitLock(){document.pointerLockElement&&document.exitPointerLock()}touchLook(e,t){this.look.x+=e*.0045,this.look.y+=t*.0045}touchMoveVec(e,t){this.touchMove.x=e,this.touchMove.y=t}setButton(e,t){this.buttons[e]=t,t&&this.onKeyExtra&&this.onKeyExtra("T_"+e)}consumeLook(){let e={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,e}moveVector(){let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1);let i=Math.hypot(e,t);return i>1&&(e/=i,t/=i),Math.hypot(this.touchMove.x,this.touchMove.y)>.12&&(e=this.touchMove.x,t=this.touchMove.y),{x:e,y:t}}down(e){return!!this.keys[e]||!!this.buttons[e]}},_u="hv_touch_layout_v1";function xp(){try{let s=localStorage.getItem(_u);if(s)return JSON.parse(s)}catch(s){}return null}function vp(s){try{localStorage.setItem(_u,JSON.stringify(s))}catch(e){}}function _p(){try{localStorage.removeItem(_u)}catch(s){}}var up={run:'<circle cx="15.5" cy="4.5" r="2" fill="currentColor" stroke="none"/><path d="M4 21.5l4.5-7-2-3.5 4-4.5 3.5 3 4.5 1.2"/><path d="M10.5 10.5L7 14l-3.5-.8"/><path d="M12.5 9.5l-1.5 6 3.5 2.5 1 4"/>',crouch:'<circle cx="12" cy="5" r="2" fill="currentColor" stroke="none"/><path d="M12 7.5v4l-3.5 2.5 1 6"/><path d="M12 11.5l3.5 2.5-1 6"/><path d="M5 21.5h14"/>',attack:'<path d="M4 20L17 4l3 3L8 21l-5 1z"/><path d="M14 7l3 3"/>',interact:'<path d="M8 12V5.5a1.5 1.5 0 013 0V11"/><path d="M11 11V4.5a1.5 1.5 0 013 0V11"/><path d="M14 11V6a1.5 1.5 0 013 0v6.5"/><path d="M17 12.5l2.2-1.8c.9-.7 2 .4 1.4 1.4L17 19c-1 1.6-2.6 2.5-4.5 2.5H10c-2 0-3.4-.8-4.5-2.5L3.6 15c-.6-1 .5-2.1 1.4-1.4L8 16"/>',reload:'<path d="M19.5 12a7.5 7.5 0 11-2.2-5.3"/><path d="M19.5 3.5v4h-4"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/>',flash:'<path d="M6 3h8l2 4v2l-2 2v10a2 2 0 01-2 2h-4a2 2 0 01-2-2V11L6 9V7z"/><path d="M6 7h10"/><path d="M9 13h2"/>',cam:'<path d="M4 9a8 8 0 0114-3"/><path d="M18 2.5V6h-3.5"/><path d="M20 15a8 8 0 01-14 3"/><path d="M6 21.5V18h3.5"/>',grenade:'<circle cx="10.5" cy="14.5" r="6"/><path d="M13 9l2-3 3-1"/><path d="M18 5l1.5-1.5"/><path d="M8.5 12.5a3 3 0 013-2"/>',heal:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',pause:'<rect x="6.5" y="4.5" width="4" height="15" rx="1"/><rect x="13.5" y="4.5" width="4" height="15" rx="1"/>',throw:'<path d="M3 19c3-6 8-10 14-11"/><path d="M15 6l4 1 1 4-3 2-3-3z"/><circle cx="6" cy="19" r="1.5" fill="currentColor" stroke="none"/>',map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',quest:'<path d="M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/><path d="M14.5 17.5l1.5 1.5 3-3"/>',dynamo:'<circle cx="12" cy="13" r="7"/><path d="M12 6V3"/><path d="M9 3h6"/><path d="M12 13l3-2.5"/>',radio:'<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M6 8l9-5"/><circle cx="8" cy="14" r="2.4"/><path d="M14 12h4M14 15h4"/>',breath:'<path d="M3 8h7a2.5 2.5 0 100 5H5"/><path d="M3 17h9a3 3 0 110 6"/><path d="M16 6c2.5 0 2.5 4 0 4s-2.5 4 0 4 2.5 4 0 4"/>',edit:'<path d="M12 3l1.2 3 3.2-.8 1.4 2.8 3 1.2-1.2 3 2.4 2.3-2.4 2.3 1.2 3-3 1.2-1.4 2.8-3.2-.8L12 27" transform="scale(0.82) translate(2.6 -1)"/><circle cx="12" cy="12" r="3"/>',swap:'<path d="M6 8h10l-2.5-2.5M18 16H8l2.5 2.5"/><path d="M16 8a7 7 0 01-8 11"/><path d="M8 16a7 7 0 018-11"/>',torch:'<path d="M12 2c2.8 3 4.5 5.2 4.5 8a4.5 4.5 0 11-9 0c0-2.8 1.7-5 4.5-8z"/><path d="M12 21v-5"/><path d="M9 22h6"/>',axe:'<path d="M13 6l6 6"/><path d="M11 8l5-5c2 1 3.5 2.5 4.5 4.5L15 12z"/><path d="M12 9L4 20l1.5 1.5L15 12"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',battery:'<rect x="3" y="8" width="16" height="8" rx="2"/><path d="M21 10.5v3"/><path d="M7 10.5v3M10.5 10.5v3"/>',skull:'<path d="M12 3a7 7 0 00-7 7c0 2.6 1.4 4.4 3 5.4V19h8v-3.6c1.6-1 3-2.8 3-5.4a7 7 0 00-7-7z"/><circle cx="9.5" cy="11" r="1.4" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r="1.4" fill="currentColor" stroke="none"/><path d="M10 19v2M14 19v2"/>',drop:'<path d="M12 3s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z"/>',bone:'<path d="M7 10l7-7 3 3-7 7"/><path d="M7 10c-2 0-3.5 1.5-3.5 3.5S5 17 7 17s3.5-1.5 3.5-3.5"/><path d="M17 14c2 0 3.5 1.5 3.5 3.5S19 21 17 21s-3.5-1.5-3.5-3.5"/><path d="M10 13.5L13.5 17"/>',eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="2.6"/>',film:'<rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="12" cy="10" r="2.6"/><path d="M8 20c.8-2.4 2.2-3.6 4-3.6s3.2 1.2 4 3.6"/>'};function bu(s,e=24){let t=up[s]||up.interact;return`<svg viewBox="0 0 24 24" width="${e}" height="${e}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="display:block">${t}</svg>`}var Yo=[new M(0,0,14),new M(14,0,2),new M(10,0,-16),new M(-12,0,-18),new M(-22,0,0),new M(-14,0,18),new M(4,0,28),new M(24,0,8),new M(-30,0,-22),new M(30,0,-22),new M(0,0,42)],TT=new M(0,0,52),Ze=$i(20240613);function be(s,e,t,i,n,r,o,a=0,l){let c=new at(s,e,t),h=new Q(c,i);return h.position.set(n,r,o),h.rotation.y=a,l&&l.add(h),h}function Tt(s,e,t,i){return{minX:s-t/2,maxX:s+t/2,minZ:e-i/2,maxZ:e+i/2}}function Vi(s,e,t){for(let i of t){let n=Math.max(i.minX,Math.min(s.x,i.maxX)),r=Math.max(i.minZ,Math.min(s.z,i.maxZ)),o=s.x-n,a=s.z-r,l=o*o+a*a;if(l<e*e)if(l>1e-8){let c=Math.sqrt(l);s.x=n+o/c*e,s.z=r+a/c*e}else{let c=Math.min(s.x-i.minX,i.maxX-s.x),h=Math.min(s.z-i.minZ,i.maxZ-s.z);c<h?s.x=s.x-i.minX<i.maxX-s.x?i.minX-e:i.maxX+e:s.z=s.z-i.minZ<i.maxZ-s.z?i.minZ-e:i.maxZ+e}}}var Eu=new Ps;function ji(s,e,t){let i=new M().subVectors(e,s),n=i.length();return n<.01?!0:(i.normalize(),Eu.set(s,i),Eu.far=n-.1,Eu.intersectObjects(t,!1).length===0)}function Cr(s,e){let t=document.createElement("canvas");t.width=64,t.height=64;let i=t.getContext("2d"),n=i.createLinearGradient(0,0,0,64);return n.addColorStop(0,s),n.addColorStop(1,e),i.fillStyle=n,i.fillRect(0,0,64,64),t}function R_(){let s=[Cr("#1a2436","#05060a"),Cr("#1a2436","#05060a"),Cr("#243049","#1a2436"),Cr("#05060a","#030406"),Cr("#1a2436","#05060a"),Cr("#1a2436","#05060a")],e=new ws(s);return e.colorSpace=Ft,e.needsUpdate=!0,e}function A_(){let s=document.createElement("canvas");s.width=128,s.height=192;let e=s.getContext("2d"),t=$i(777);e.fillStyle="#141008",e.fillRect(0,0,128,192);let i=["#5a1010","#10204a","#6a5210","#3a1030","#0e2a22","#4a1808"],n=16;for(let o=0;o<192;o+=n)for(let a=0;a<128;a+=n)e.fillStyle=i[Math.floor(t()*i.length)],e.fillRect(a+1,o+1,n-2,n-2);e.strokeStyle="rgba(12,10,8,0.95)",e.lineWidth=2;for(let o=0;o<=192;o+=n)e.beginPath(),e.moveTo(0,o),e.lineTo(128,o),e.stroke();for(let o=0;o<=128;o+=n)e.beginPath(),e.moveTo(o,0),e.lineTo(o,192),e.stroke();e.strokeStyle="#7a5e18",e.lineWidth=3,e.beginPath(),e.arc(64,96,30,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(64,96,16,0,Math.PI*2),e.stroke();let r=new Yi(s);return r.colorSpace=Ft,r}var bp=["RIP|1843","MOTHER|1831 - 1859","THE|SHEPHERD","ELIAS|1802 - 1843","ABIGAIL|1851","FATHER|REST HERE","MARTHA|1877","THE WATCHER|1843"];function C_(s){let e=document.createElement("canvas");e.width=64,e.height=96;let t=e.getContext("2d"),i=$i(500+s*31);t.fillStyle="#585850",t.fillRect(0,0,64,96);for(let o=0;o<240;o++){let a=i();t.fillStyle=a<.5?"rgba(40,40,38,0.35)":"rgba(110,110,104,0.3)",t.fillRect(i()*64,i()*96,1+i()*2,1+i()*2)}t.strokeStyle="rgba(30,30,28,0.6)",t.lineWidth=2,t.strokeRect(4,4,56,88);let n=bp[s%bp.length].split("|");t.textAlign="center",t.font="bold 10px monospace",n.forEach((o,a)=>{let l=34+a*18;t.fillStyle="rgba(190,190,182,0.28)",t.fillText(o,33,l+1),t.fillStyle="rgba(26,26,24,0.92)",t.fillText(o,32,l)});let r=new Yi(e);return r.colorSpace=Ft,r}var Ko=new vr;Ko.moveTo(-.65,0);Ko.lineTo(.65,0);Ko.lineTo(0,.62);Ko.closePath();var P_=new Co(Ko);function Ep(s,e){let t=new xt;s.add(t);let i=[],n=[],r=[],o=[],a=[],l=new Map,c=e==="high",h=[],d=[],u=[],f=[],g=[],x=[],p=[],m=[],v=1,T=.15,E=new ue({map:ui(At("ground"),48,48),bumpMap:ui(At("ground"),48,48),bumpScale:.03,roughness:1}),C=new ue({map:ui(At("dirt"),8,3),roughness:1}),w=new ue({map:ui(At("plank"),2,1),bumpMap:ui(At("plank"),2,1),bumpScale:.02,roughness:.95}),y=new ue({map:ui(At("plankdark"),2,1),bumpMap:ui(At("plankdark"),2,1),bumpScale:.02,roughness:.95}),S=new ue({map:ui(At("stone"),3,1.5),bumpMap:ui(At("stone"),3,1.5),bumpScale:.025,roughness:.9}),L=new ue({map:ui(At("shingle"),3,2),bumpMap:ui(At("shingle"),3,2),bumpScale:.02,roughness:.9}),P=new ue({map:ui(At("brick"),1,1),bumpMap:ui(At("brick"),1,1),bumpScale:.03,roughness:.95}),k=new ue({map:At("iron"),color:10133672,metalness:.75,roughness:.5}),U=new ue({map:At("bark"),roughness:1}),q=new ue({color:1450255,roughness:1}),R=new ue({map:At("plankdark"),roughness:.95}),F=new ue({map:At("metal"),roughness:.6,metalness:.5}),H=new ue({map:ui(At("stone"),1,1),roughness:.95,color:9079432}),K=new ue({color:2765880,roughness:.2,metalness:.4,transparent:!0,opacity:.55}),le=new ue({color:1581610,metalness:.9,roughness:.15,envMapIntensity:1.3,transparent:!0,opacity:.85}),Y=new ue({color:1581610,metalness:.9,roughness:.15,envMapIntensity:1.3,transparent:!0,opacity:.85,emissive:16751150,emissiveIntensity:.9}),D=new ue({color:13616290,roughness:.85}),B=new ue({color:9071146,metalness:.9,roughness:.3}),ce=new ue({color:723726,roughness:.9}),Ae=new ue({color:723726,roughness:.9,side:Ei}),J=new Rt({color:12087326}),_e=new ue({color:1709072,roughness:1});s.environment=R_(),s.environmentIntensity=.3;let Me=new Q(new Dt(180,180),E);Me.rotation.x=-Math.PI/2,Me.receiveShadow=c,t.add(Me);let Le=(W,$,j,re)=>{let X=new Q(new Dt(j,re),C);X.rotation.x=-Math.PI/2,X.position.set(W,.02,$),t.add(X)};Le(0,20,4,66),Le(0,-16,4,30),Le(16,-8,34,3.4),Le(-16,8,26,3.4),Le(-12,-20,24,3.2),Le(12,-24,18,3.2),Le(16,10,14,3.2),Le(2,24,18,3.2);let Se=new $t,$e=[];for(let W=0;W<500;W++){let $=Ze()*Math.PI*2,j=300+Ze()*100,re=60+Ze()*160;$e.push(Math.cos($)*j,re,Math.sin($)*j)}Se.setAttribute("position",new mt($e,3));let Vt=new cs(Se,new Bn({color:10466520,size:1.4,sizeAttenuation:!0,fog:!1}));t.add(Vt);let Be=new Q(new zn(9,32),new Rt({color:13621480,fog:!1,transparent:!0,opacity:.9}));Be.position.set(-120,110,-160),Be.lookAt(0,0,0),t.add(Be);let gt=new Io(2898518,856075,1);s.add(gt);let _t=1.05,Xe=new ko(9348812,_t);Xe.position.set(-60,90,-80),c&&(Xe.castShadow=!0,Xe.shadow.mapSize.set(2048,2048),Xe.shadow.camera.left=-90,Xe.shadow.camera.right=90,Xe.shadow.camera.top=90,Xe.shadow.camera.bottom=-90,Xe.shadow.camera.far=260),s.add(Xe);let Ge=W=>i.push(W),Pt=(W,$,j,re,X,oe,it,ct=!0)=>{let ze=be(re,X,oe,it,W,$,j);return ze.castShadow=c,ze.receiveShadow=c,t.add(ze),n.push(ze),ct&&Ge(Tt(W,j,re,oe)),ze},fi=(W,$,j,re,X)=>{let oe=Math.max(1,re/2),it=Math.max(1,X/2),ct=new ue({map:ui(At("shingle"),oe,it),bumpMap:ui(At("shingle"),oe,it),bumpScale:.02,roughness:.9}),ze=Math.atan2(X*.5,X*.42)*.9,rt=new Q(new at(re+.8,.25,X*.78),ct);rt.position.set(W,$+X*.19,j-X*.22),rt.rotation.x=ze,rt.castShadow=c,t.add(rt),n.push(rt);let kt=rt.clone();kt.position.z=j+X*.22,kt.rotation.x=-rt.rotation.x,t.add(kt),n.push(kt);let Kt=be(re+.9,.3,.6,R,W,$+X*.36,j);t.add(Kt);let Ui=X*.22+X*.39*Math.cos(ze),ai=$+X*.19-X*.39*Math.sin(ze);t.add(be(re+.8,.22,.12,R,W,ai+.04,j-Ui-.02)),t.add(be(re+.8,.22,.12,R,W,ai+.04,j+Ui+.02))},Lt=(W,$,j,re,X)=>{let oe=new xt;return oe.position.set(W,$,j),oe.rotation.y=re,be(1.48,.1,.14,R,0,.6,0,0,oe),be(1.48,.1,.14,R,0,-.6,0,0,oe),be(.1,1.3,.14,R,-.69,0,0,0,oe),be(.1,1.3,.14,R,.69,0,0,0,oe),be(.05,1.1,.06,R,0,0,.01,0,oe),be(1.3,.05,.06,R,0,0,.01,0,oe),be(1.3,1.1,.05,X?Y:le,0,0,0,0,oe),t.add(oe),oe},pi=(W,$)=>{let j=be(.16,3.2,.16,R,W,1.6,$);t.add(j);let re=be(.5,.5,.5,F,W,3.3,$);t.add(re);let X=be(.36,.36,.36,new ue({color:1118481,emissive:16753978,emissiveIntensity:1.4}),W,3.3,$);t.add(X),Ge(Tt(W,$,.3,.3));let oe=new Zt(16751162,9,17,1.7);oe.position.set(W,3.4,$),t.add(oe);let it={light:oe,base:9,phase:Ze()*10};o.push(it);let ct=null,ze=null;if(e!=="low"){ct=new rn({map:Ji("glow"),transparent:!0,opacity:.5,depthWrite:!1});let rt=new Mn(ct);rt.scale.setScalar(2.2),rt.position.set(W,3.35,$),t.add(rt),ze=new Rt({color:16753978,transparent:!0,opacity:.045,side:Ei,depthWrite:!1,blending:ps});let kt=new Q(new hi(1.6,3.4,12,1,!0),ze);kt.position.set(W,1.6,$),t.add(kt)}f.push({lamp:it,glowMat:ct,shaftMat:ze})},Xt=(W,$,j)=>{let re=new Q(new je(.55,.35,.5,10),F);re.position.set($,.9,j),t.add(re);let X=new Q(new je(.09,.14,.8,8),F);X.position.set($,.4,j),t.add(X),Ge(Tt($,j,.9,.9));let oe=new Q(new hi(.34,.8,8),_e);oe.position.set($,1.55,j),t.add(oe);let it={id:W,pos:new M($,1.2,j),light:null,flame:oe,lit:!1,pos3:new M($,1.2,j)};a.push(it),r.push({id:W,pos:new M($,1.2,j),radius:2.4,prompt:"Light the brazier",enabled:!0,once:!0,highlight:re,onInteract:()=>{}})},Li=(W,$,j,re=0)=>{switch(W){case"table":be(1.8,.08,1,R,$,.78,j,re,t),be(.12,.78,.12,R,$-.75,.39,j-.35,0,t),be(.12,.78,.12,R,$+.75,.39,j-.35,0,t),be(.12,.78,.12,R,$-.75,.39,j+.35,0,t),be(.12,.78,.12,R,$+.75,.39,j+.35,0,t),Ge(Tt($,j,1.8,1));break;case"bed":be(1.2,.35,2.2,R,$,.28,j,re,t),be(1.1,.18,1.9,new ue({map:At("cloth"),roughness:1}),$,.55,j,re,t),Ge(Tt($,j,1.3,2.3));break;case"shelf":be(.4,1.8,1.6,R,$,.9,j,re,t),Ge(Tt($,j,.5,1.7));break;case"crate":be(.9,.9,.9,w,$,.45,j,re+(Ze()-.5)*.4,t),Ge(Tt($,j,1,1));break;case"hay":be(1.4,1,1.4,new ue({color:7035434,roughness:1}),$,.5,j,re,t),Ge(Tt($,j,1.5,1.5));break;case"pew":be(2.4,.45,.5,R,$,.45,j,re,t),be(2.4,.5,.12,R,$,.85,j-.2,re,t),Ge(Tt($,j,2.5,.6));break;case"mortar":{let X=new Q(new je(.22,.16,.24,10),H);X.position.set($,.92,j),t.add(X);break}case"workbench":be(2.2,.1,.9,w,$,.85,j,re,t),be(.15,.85,.15,R,$-.9,.42,j-.3,0,t),be(.15,.85,.15,R,$+.9,.42,j-.3,0,t),be(.15,.85,.15,R,$-.9,.42,j+.3,0,t),be(.15,.85,.15,R,$+.9,.42,j+.3,0,t),Ge(Tt($,j,2.3,1));break;case"grave":{let X=be(.7,.9+Ze()*.3,.16,H,$,.5,j,(Ze()-.5)*.2);X.castShadow=c,t.add(X),Ge(Tt($,j,.8,.5));break}}},Bt=W=>{var kt;let{x:$,z:j,w:re,d:X,h:oe}=W,it=W.stone?S:w,ct=(kt=W.doorW)!=null?kt:1.4,ze=(Kt,Ui)=>{var qu,Xu,Yu,Ku;let ai=Kt==="N"||Kt==="S",es=Kt==="N"?j-X/2:Kt==="S"?j+X/2:Kt==="W"?$-re/2:$+re/2,ha=ai?re:X,Hc=Kt===W.door,fm=Hc?[[-ha/2,-ct/2],[ct/2,ha/2]]:[[-ha/2,ha/2]];for(let[ts,Wr]of fm){let _s=Wr-ts;if(_s<.05)continue;let Zu=(ts+Wr)/2;ai?Pt($+Zu,oe/2,es,_s,oe,.3,it):Pt(es,oe/2,j+Zu,.3,oe,_s,it)}Hc&&(ai?Pt($,oe-.35,es,ct,.7,.3,it,!1):Pt(es,oe-.35,j,.3,.7,ct,it,!1));for(let ts of Ui){if(Hc&&Math.abs(ts)<2)continue;let Wr=oe*.55;ai?Lt($+ts,Wr,es+(Kt==="N"?-.18:.18),0,!!((Xu=(qu=W.windows)==null?void 0:qu.find(_s=>_s.off===ts))!=null&&Xu.lit)):Lt(es+(Kt==="W"?-.18:.18),Wr,j+ts,Math.PI/2,!!((Ku=(Yu=W.windows)==null?void 0:Yu.find(_s=>_s.off===ts))!=null&&Ku.lit))}};["N","S","E","W"].forEach(Kt=>{let Ui=(W.windows||[]).filter(ai=>ai.side===Kt).map(ai=>ai.off);ze(Kt,Ui)});let rt=new Q(new Dt(re,X),R);rt.rotation.x=-Math.PI/2,rt.position.set($,.03,j),t.add(rt),W.roof!==!1&&fi($,oe,j,re,X),(W.interior||[]).forEach(([Kt,Ui,ai,es])=>Li(Kt,$+Ui,j+ai,es||0))},mi=(W,$,j,re,X)=>{let oe=new wt;oe.position.set($,0,j),oe.rotation.y=re;let it=be(1.36,2.2,.12,y,.68,1.1,0);it.castShadow=c,oe.add(it);let ct=be(.1,.1,.16,F,1.15,1.05,0);oe.add(ct),t.add(oe);let rt=Math.abs(Math.sin(re))<.5?Tt($+.68*Math.cos(re),j,1.4,.5):Tt($,j+.68*Math.cos(re),.5,1.4);Ge(rt);let kt={id:W,locked:X,open:!1,pivot:oe,collider:rt};return l.set(W,kt),r.push({id:"door_"+W,pos:new M($,1.2,j),radius:2.6,prompt:X?"Locked":"Open door",enabled:!0,onInteract:()=>{}}),kt},O=(W,$,j)=>{let re=be(.7,1.6,.7,P,W,j+.2,$);re.castShadow=c,t.add(re),n.push(re),be(.92,.12,.92,H,W,j+1.06,$,0,t);let X=new Q(new Dt(.36,.36),new Rt({color:16734746}));X.rotation.x=-Math.PI/2,X.position.set(W,j+1,$),t.add(X),h.push({x:W,z:$,topY:j+1.1})},Ni=new je(.03,.03,1.5,6),St=(W,$,j,re)=>{Ge(Tt(W,$,j,re));let X=j>re,oe=X?j:re,it=Math.max(2,Math.floor(oe/.5)),ct=new Tn(Ni,k,it),ze=new wt;for(let kt=0;kt<it;kt++){let Kt=-oe/2+.25+kt*(oe-.5)/(it-1);X?ze.position.set(W+Kt,.75,$):ze.position.set(W,.75,$+Kt),ze.updateMatrix(),ct.setMatrixAt(kt,ze.matrix)}ct.instanceMatrix.needsUpdate=!0,t.add(ct);let rt=be(X?oe:.09,.09,X?.09:oe,k,W,1.52,$);t.add(rt),n.push(rt)},Nt=(W,$,j)=>{let re=new xt;re.position.set($,0,j),re.rotation.y=(Ze()-.5)*.7,Ze()<.35&&(re.rotation.z=(Ze()<.5?-1:1)*.12);let X=Math.floor(Ze()*3),oe=.95+Ze()*.3,it=C_(W),ct=new ue({map:it,bumpMap:it,bumpScale:.02,roughness:.95});if(X===0){let ze=be(.7,oe,.16,H,0,oe/2,0,0,re);ze.castShadow=c;let rt=new Q(new Dt(.56,Math.min(.8,oe-.15)),ct);rt.position.set(0,oe/2-.05,.085),re.add(rt)}else if(X===1){be(.5,.25,.3,H,0,.125,0,0,re);let ze=be(.16,oe,.14,H,0,.25+oe/2,0,0,re);ze.castShadow=c,be(.56,.15,.14,H,0,.25+oe*.72,0,0,re);let rt=new Q(new Dt(.3,.55),ct);rt.position.set(0,.25+oe*.45,.075),re.add(rt)}else{let ze=new Q(new je(.09,.2,oe+.4,4),H);ze.position.y=(oe+.4)/2,ze.rotation.y=Math.PI/4,ze.castShadow=c,re.add(ze);let rt=new Q(new Dt(.26,.6),ct);rt.position.set(0,(oe+.4)*.45,.148),re.add(rt)}t.add(re),Ge(Tt($,j,.8,.5))},Ee=(W,$,j)=>{let re=new Q(new je(.14,.3,j,6),U);re.position.set(W,j/2,$),re.castShadow=c,t.add(re),n.push(re);for(let X=0;X<4;X++){let oe=.9+Ze()*.9,it=new Q(new hi(.05,oe,5),U);it.position.set(W+Math.cos(X*1.7)*.35,j*(.62+X*.09),$+Math.sin(X*1.7)*.35),it.rotation.z=(X%2===0?1:-1)*(.8+Ze()*.5),it.rotation.x=(Ze()-.5)*.8,t.add(it)}Ge(Tt(W,$,.7,.7))},Yt=new Rt({map:A_(),side:Ei}),Fe=(W,$,j)=>{let re=new Q(new Dt(1.3,1.9),Yt);re.position.set(W,$,j),t.add(re);let X=new Q(P_,Yt);X.position.set(W,$+.95,j),t.add(X)},Ye=new Dt(.24,.1);Ye.translate(.12,0,0);let A=new Dt(.24,.1);A.translate(-.12,0,0);let _=(W,$,j)=>{let re=new xt;re.position.set(W,$,j),t.add(re);let X={group:re,birds:[],flying:!1,t:0,done:!1},oe=[[0,0,0],[.3,.02,-.2],[-.24,.04,.16]];for(let ct=0;ct<3;ct++){let ze=new xt;ze.position.set(oe[ct][0],oe[ct][1],oe[ct][2]),ze.rotation.y=Ze()*Math.PI*2;let rt=new Q(new Jt(1,8,6),ce);rt.scale.set(.09,.07,.16),ze.add(rt);let kt=new Q(new hi(.035,.15,5),ce);kt.rotation.x=Math.PI/2-.35,kt.position.set(0,.01,.17),ze.add(kt);let Kt=new Q(new hi(.02,.07,5),J);Kt.rotation.x=-Math.PI/2,Kt.position.set(0,.005,-.18),ze.add(Kt);let Ui=new Q(Ye,Ae);Ui.position.set(.03,.03,0),Ui.rotation.z=.95,ze.add(Ui);let ai=new Q(A,Ae);ai.position.set(-.03,.03,0),ai.rotation.z=-.95,ze.add(ai),re.add(ze),X.birds.push({bird:ze,wl:Ui,wr:ai,phase:Ze()*10,ang0:Ze()*Math.PI*2,spin:1.5+Ze()})}let it={pos:new M(W,$,j),group:re,flown:!1,fly:()=>{!X.flying&&!X.done&&(X.flying=!0,X.t=0,it.flown=!0)}};g.push(X),x.push(it)};Bt({x:0,z:-30,w:15,d:10,h:5,stone:!0,door:"S",windows:[{side:"E",off:-3,lit:!1},{side:"W",off:3,lit:!1}],interior:[["pew",-3,-2.5,0],["pew",0,-2.5,0],["pew",3,-2.5,0],["pew",-3,.5,0],["pew",3,.5,0],["table",0,-4.2,0]]});let V=new Q(new hi(1.6,4.5,4),L);V.position.set(0,8,-34.5),V.castShadow=c,t.add(V),Pt(0,7,-34.5,2.6,4.5,2.6,S,!1);let he=mi("church",.75,-24.9,0,!0);be(.14,1.6,.14,R,0,4.3,-34.4,0,t),be(.8,.14,.14,R,0,4.6,-34.4,0,t),Fe(-3.4,2.3,-24.83),Fe(3.4,2.3,-24.83),Fe(0,2.5,-34.83);let se=new xt;se.position.set(0,4.2,-30),t.add(se),be(.05,.7,.05,F,0,.45,0,0,se);let me=new Q(new an(.55,.045,8,24),F);me.rotation.x=Math.PI/2,se.add(me);for(let W=0;W<6;W++){let $=W/6*Math.PI*2,j=Math.cos($)*.55,re=Math.sin($)*.55,X=new Q(new je(.04,.048,.3,8),D);X.position.set(j,-.18,re),se.add(X);let oe=new Q(new Jt(.035,6,5),new Rt({color:16764794}));oe.position.set(j,-.36,re),se.add(oe)}let ge=new Zt(16756832,7,12,1.8);ge.position.set(0,3.85,-30),t.add(ge),o.push({light:ge,base:7,phase:Ze()*10});let te=new Q(new Dt(1.7,1.35),new Rt({color:329226}));te.position.set(0,6.2,-33.19),t.add(te);let ie=new Q(new Jt(.34,12,10),B);ie.scale.y=1.25,ie.position.set(0,6.2,-33.02),ie.castShadow=c,t.add(ie),be(.16,1.5,.16,H,-.88,6.2,-33.1,0,t),be(.16,1.5,.16,H,.88,6.2,-33.1,0,t),be(.3,2.6,.42,H,-.86,1.3,-24.72,0,t),be(.3,2.6,.42,H,.86,1.3,-24.72,0,t),be(2.02,.3,.42,H,0,2.6,-24.72,0,t),Bt({x:28,z:-8,w:13,d:9,h:4.2,door:"W",doorW:2.2,interior:[["hay",3.5,-2],["hay",3.5,1.5],["crate",-3,-2.5],["crate",-1.5,2.8,.5],["workbench",1,3.6,0]]});let fe=new Q(new je(1.7,1.7,6,12),F);fe.position.set(36.5,3,-11),fe.castShadow=c,t.add(fe),n.push(fe),Ge(Tt(36.5,-11,3.4,3.4)),Bt({x:-20,z:12,w:10,d:8,h:3.4,door:"E",windows:[{side:"S",off:-2,lit:!0},{side:"W",off:0}],interior:[["table",-2.5,-2],["bed",3,-2.2,0],["shelf",-4.4,1.5,Math.PI/2],["crate",2,2.6]]}),O(-16.6,9.2,3.4),Bt({x:22,z:18,w:12,d:9,h:3.6,door:"W",windows:[{side:"S",off:-3,lit:!0},{side:"N",off:2}],interior:[["table",2.5,-2.4],["bed",-4,-2.6],["shelf",5.4,2,Math.PI/2],["crate",-2,2.8],["crate",.5,3.2]]}),O(25.6,15.2,3.6),Bt({x:18,z:-28,w:8,d:7,h:3.4,stone:!0,door:"S",windows:[{side:"W",off:0}],interior:[["table",0,-2.4],["pew",0,1.2,0]]}),Bt({x:-28,z:10,w:10,d:8,h:3.4,door:"E",windows:[{side:"N",off:-2,lit:!1},{side:"S",off:2,lit:!0}],interior:[["bed",-3,-2.2],["bed",-3,1.4],["table",2.8,-2],["mortar",2.8,-2],["shelf",-4.4,0,Math.PI/2]]}),O(-31.4,7.4,3.4),Bt({x:-5,z:30,w:7,d:6,h:3,door:"N",interior:[["workbench",0,-1.6,0],["crate",2.4,1.8],["crate",-2.2,1.6,.7]]}),Bt({x:45,z:-30,w:7,d:6,h:3,door:"W",interior:[["bed",1.8,-1.5],["shelf",-2.9,0,Math.PI/2],["crate",1.5,1.8]]});let I=new xt,ne=new Q(new at(6,2.6,4.4),K);ne.position.set(-40,1.3,20),I.add(ne);let ee=be(6.2,.12,4.6,R,-40,2.6,20);t.add(ee),I.position.set(0,0,0),t.add(I),Ge(Tt(-40,20,6.2,4.6)),St(-33,-46.4,26,.18),St(-33,-24.4,26,.18),St(-46.4,-35.4,.18,22),St(-19.6,-40,.18,14);let ye=[[-44,-30],[-33,-41],[-33,-33],[-30,-38],[-28,-43],[-41,-36]],de=0;for(let W=-44;W<=-24;W+=4)for(let $=-44;$<=-28;$+=4)if(Ze()<.75){let j=W+(Ze()-.5),re=$+(Ze()-.5),X=!1;for(let oe of ye)if(Math.hypot(j-oe[0],re-oe[1])<2.3){X=!0;break}X||Nt(de++,j,re)}Ee(-28,-43,4.6),Ee(-41,-36,5.2);let pe=be(1.6,1,1,H,-33,.5,-41);pe.castShadow=c,t.add(pe),Ge(Tt(-33,-41,1.7,1.1)),r.push({id:"cemetery_altar",pos:new M(-33,1,-41),radius:2.6,prompt:"Place the amulet",enabled:!0,once:!0,highlight:pe,onInteract:()=>{}});let Ue={minX:-46,minZ:-46,maxX:-20,maxZ:-24},et=[new M(-42,0,-41),new M(-26,0,-42),new M(-42,0,-27),new M(-25,0,-26.5),new M(-38,0,-33),new M(-27,0,-33)],ae=0,ke=2,Qe=new Q(new je(1.3,1.4,1.2,12),H);Qe.position.set(ae,.6,ke),t.add(Qe),n.push(Qe),Ge(Tt(ae,ke,2.6,2.6)),be(.12,2.4,.12,R,ae-1.1,1.2,ke,0,t),be(.12,2.4,.12,R,ae+1.1,1.2,ke,0,t),fi(ae,2.4,ke,3,2.4);let Te=be(.03,2,.03,new ue({color:9075290}),ae,1.4,ke);t.add(Te);let pt=be(.4,.35,.4,R,ae,.5,ke);t.add(pt);let Gt=new Q(new je(.07,.07,1.4,8),F);Gt.rotation.z=Math.PI/2,Gt.position.set(ae,2.1,ke),t.add(Gt),r.push({id:"well_crank",pos:new M(ae+1.4,1.4,ke),radius:2.6,prompt:"Turn the crank",enabled:!0,once:!1,highlight:Gt,onInteract:()=>{}});let ki=55;Pt(-6.5,1.6,ki,9,3.2,.5,y),Pt(6.5,1.6,ki,9,3.2,.5,y);let jn=new wt;jn.position.set(-1.8,0,ki);let Bs=be(3.5,3,.3,y,1.75,1.5,0);jn.add(Bs),be(.25,.25,.5,F,3.3,1.5,0,0,jn),t.add(jn),Ge(Tt(0,ki,3.8,.7)),r.push({id:"forest_gate",pos:new M(0,1.4,ki),radius:3.2,prompt:"Open the gate",enabled:!0,once:!1,highlight:Bs,onInteract:()=>{}});let Fc=be(1.2,.5,1.2,H,8,.25,8,.4);t.add(Fc),Ge(Tt(8,8,1.3,1.3)),pi(-6,8),pi(6,8),pi(-4,-18),pi(4,42),pi(24,-14),pi(-26,6),Xt("brazier_miller",-20,15.2),Xt("brazier_farm",22,21.2),Xt("brazier_annex",18,-30.2);let aa=new ue({map:ui(At("water"),2,2),color:659992,metalness:.9,roughness:.08,envMapIntensity:1.6}),la=[[2,20,2.2],[-3,34,1.8],[18,8,2.4],[-16,6,2],[8,-14,1.6],[-22,-18,2.6]];for(let W of la){let $=new Q(new zn(W[2],22),aa);$.rotation.x=-Math.PI/2,$.rotation.z=Ze()*Math.PI*2,$.position.set(W[0],.035,W[1]),t.add($),p.push({pos:new M(W[0],0,W[1]),radius:W[2],mesh:$})}let fn=[[0,14],[-8,24],[10,34],[-14,6],[12,-6],[0,-12],[-30,-34],[-24,-26],[26,-14],[34,6],[-8,44],[14,24]],Fr=e==="low"?6:12;for(let W=0;W<Fr;W++){let $=fn[W][0],j=fn[W][1],re=new Rt({map:Ji("puff"),transparent:!0,opacity:.15,depthWrite:!1}),X=new Q(new Dt(12,12),re);X.rotation.x=-Math.PI/2,X.rotation.z=Ze()*Math.PI*2,X.position.set($,.35,j),t.add(X),u.push({mesh:X,mat:re,rotSpeed:(Ze()-.5)*.08,phase:Ze()*Math.PI*2,x:$,z:j,target:.15})}let Qn=e==="low"?0:e==="medium"?160:250,Hs=new $t,pn=new Float32Array(Qn*3),Br=new Float32Array(Qn);for(let W=0;W<Qn;W++)pn[W*3]=(Ze()-.5)*40,pn[W*3+1]=.2+Ze()*6.6,pn[W*3+2]=(Ze()-.5)*40,Br[W]=Ze()*Math.PI*2;Hs.setAttribute("position",new bi(pn,3));let zs=new cs(Hs,new Bn({map:Ji("puff"),size:.14,transparent:!0,opacity:.22,depthWrite:!1,blending:ps,sizeAttenuation:!0}));zs.frustumCulled=!1,t.add(zs);let mn=new xt;mn.position.set(43,0,5),t.add(mn);let Hr=new Dt(.55,1.9);Hr.translate(0,.95,0);let zr=new ue({map:At("corn"),side:Ei,roughness:1}),Vs=new Tn(Hr,zr,130),Vr=new Tn(Hr,zr,130);{let W=new wt,$=0;for(;$<130;){let j=34+Ze()*18,re=-4+Ze()*18;if(re>8&&re<10&&j<40||Math.hypot(j-44,re-4)<1.4)continue;let X=.8+Ze()*.4;W.position.set(j-43,0,re-5),W.scale.set(X,X*(.95+Ze()*.1),X),W.rotation.set((Ze()-.5)*.16,Ze()*Math.PI,(Ze()-.5)*.12),W.updateMatrix(),Vs.setMatrixAt($,W.matrix),W.rotation.y+=Math.PI/2,W.updateMatrix(),Vr.setMatrixAt($,W.matrix),$++}Vs.instanceMatrix.needsUpdate=!0,Vr.instanceMatrix.needsUpdate=!0}mn.add(Vs,Vr),Ge(Tt(43,-4.6,19.6,1.2)),Ge(Tt(43,14.6,19.6,1.2)),Ge(Tt(52.6,5,1.2,19.2));let Bc=new M(10,0,48),Oi=new xt;Oi.position.set(10,0,48),Oi.rotation.y=.12,t.add(Oi);let ca=be(1.2,.8,2.2,w,0,.9,0,0,Oi);ca.castShadow=c;for(let W of[-1,1]){let $=new Q(new je(.45,.45,.09,12),y);$.rotation.z=Math.PI/2,$.position.set(W*.66,.45,0),$.castShadow=c,Oi.add($),be(.08,.08,1.7,R,W*.4,.7,-1.75,0,Oi)}let b=new je(1.1,1.1,2.2,10,1,!0,0,Math.PI);b.rotateZ(Math.PI/2),b.rotateY(Math.PI/2);let N=new Q(b,new ue({map:At("cloth"),color:10129536,side:Ei,roughness:1}));N.position.set(0,.75,0),N.castShadow=c,Oi.add(N);let Z=new Q(new je(.09,.09,1.1,8),new ue({color:5909548,roughness:1}));Z.rotation.z=Math.PI/2,Z.position.set(-.25,1.36,.3),Oi.add(Z),be(.07,1.7,.07,R,.75,.85,1.25,0,Oi),be(.32,.06,.06,R,.6,1.62,1.25,0,Oi),be(.16,.22,.16,new ue({color:2234896,emissive:16756816,emissiveIntensity:1.6}),.45,1.44,1.25,0,Oi);let z=new Zt(16756832,6,9,1.8);z.position.set(10.45,1.5,49.25),t.add(z),o.push({light:z,base:6,phase:Ze()*10}),be(.75,.75,.75,w,8.4,.38,47.1,.3,t),be(.75,.75,.75,w,11.5,.38,46.5,-.2,t),Ge(Tt(10,48,2.7,3.4));let G=new M(-30,0,-38),xe=new Q(new zn(2.4,24),new ue({map:At("ritual"),emissive:1713176,emissiveIntensity:.3,roughness:1}));xe.rotation.x=-Math.PI/2,xe.position.set(-30,.02,-38),t.add(xe);for(let W=0;W<8;W++){let $=W/8*Math.PI*2+.2,j=-30+Math.cos($)*2.2,re=-38+Math.sin($)*2.2,X=.75+Ze()*.35,oe=be(.34,X,.24,H,j,X/2,re,$);oe.castShadow=c,t.add(oe),Ge(Tt(j,re,.5,.5))}for(let W=0;W<5;W++){let $=Ze()*Math.PI*2,j=1.1+Ze()*.8,re=new Q(new je(.045,.055,.22,8),D);re.position.set(-30+Math.cos($)*j,.11,-38+Math.sin($)*j),t.add(re)}be(.14,.14,1.3,U,-31.4,.09,-39.4,.2,t),be(.14,.14,1.3,U,-31.5,.09,-39.2,-.4,t),be(.14,.14,1.2,U,-31.45,.24,-39.3,.9,t),[{rarity:"green",color:2789178,x:-44,y:.7,z:-30,ry:.4},{rarity:"blue",color:2775711,x:30,y:.4,z:-11.6,ry:.2},{rarity:"blue",color:2775711,x:45,y:.4,z:-32,ry:-.3},{rarity:"purple",color:6957727,x:-36.6,y:.6,z:20,ry:Math.PI/2},{rarity:"purple",color:6957727,x:44,y:.5,z:4,ry:.7},{rarity:"gold",color:13606960,x:-5,y:.4,z:31.4,ry:0}].forEach((W,$)=>{let j="lootcrate_"+$;$===0&&be(1,.5,1,H,W.x,.25,W.z,0,t);let re=new xt;re.position.set(W.x,W.y,W.z),re.rotation.y=W.ry;let X=be(.8,.8,.8,w,0,0,0,0,re);X.castShadow=c,be(.84,.09,.84,F,0,.2,0,0,re),be(.84,.09,.84,F,0,-.2,0,0,re);let oe=new Q(new Dt(.34,.34),new Rt({color:W.color}));oe.position.set(0,0,.41),re.add(oe);let it=new Zt(W.color,.9,3,2);it.position.set(0,.35,.55),re.add(it),t.add(re),m.push({id:j,rarity:W.rarity,pos:new M(W.x,W.y,W.z),opened:!1}),r.push({id:j,pos:new M(W.x,W.y+.4,W.z),radius:2.1,prompt:"Search the cache",enabled:!0,once:!0,onInteract:()=>{}}),Ge(Tt(W.x,W.z,.95,.95))});let ve=new M(-7.35,1.6,-30),we=new M(1,0,0),De=new Q(new Dt(1.1,1.5),new ue({color:6977672,metalness:1,roughness:.06,envMapIntensity:2.2}));De.position.copy(ve),De.rotation.y=Math.PI/2,t.add(De),be(.1,1.66,.12,R,-7.38,1.6,-30.61,0,t),be(.1,1.66,.12,R,-7.38,1.6,-29.39,0,t),be(.1,.12,1.34,R,-7.38,2.41,-30,0,t),be(.1,.12,1.34,R,-7.38,.79,-30,0,t),Bt({x:-12,z:30,w:3,d:2.2,h:2.4,door:"N",interior:[["crate",.8,.3],["shelf",-1.1,0]]}),mi("barn_storage",-12.7,28.9,0,!0),Bt({x:-28,z:4.5,w:2.8,d:2.2,h:2.3,door:"N",interior:[["crate",.7,0],["shelf",-1,0]]}),mi("clinic_back",-28.7,3.4,0,!0),Bt({x:14,z:22,w:3,d:2.4,h:2.4,stone:!0,door:"S",interior:[["crate",.8,.4],["shelf",-1.1,0]]}),mi("shed",13.3,23.4,0,!0);let Ke=(W,$,j,re=0)=>{let X=be(2.2,.02,1.4,new ue({color:j,roughness:1}),W,.045,$,re);X.receiveShadow=c,t.add(X)};Ke(-20.5,12.5,4856860),Ke(23,18.5,3815968),Ke(0,-31.2,4856860,Math.PI/2);let tt=-15.27,Pe=12.5,st=be(.5,1.4,1.6,P,tt,.7,Pe);st.castShadow=c,t.add(st),n.push(st);let Ht=new Q(new Dt(.9,.7),new Rt({color:657157}));Ht.position.set(tt+.256,.5,Pe),Ht.rotation.y=Math.PI/2,t.add(Ht);let bt=new Q(new Dt(.8,.45),new Rt({color:16738846}));bt.rotation.x=-Math.PI/2,bt.position.set(tt+.45,.05,Pe),t.add(bt);let yt=new Zt(16742960,5,8,1.8);yt.position.set(tt+.6,.9,Pe),t.add(yt),o.push({light:yt,base:5,phase:Ze()*10}),[new ue({color:3828298,metalness:.2,roughness:.15,transparent:!0,opacity:.55}),new ue({color:3820138,metalness:.2,roughness:.15,transparent:!0,opacity:.55}),new ue({color:6969898,metalness:.2,roughness:.15,transparent:!0,opacity:.55})].forEach((W,$)=>{let j=new Q(new je(.055,.07,.2,8),W);j.position.set(-32.9+$*.32,1.92,10+($%2===0?.05:-.06)),t.add(j)}),be(.04,.5,.04,F,-26.5,3.1,9,0,t);let Ie=new Q(new hi(.3,.18,10),F);Ie.position.set(-26.5,2.78,9),t.add(Ie);let ri=new Q(new Jt(.06,8,6),new Rt({color:16767392}));ri.position.set(-26.5,2.68,9),t.add(ri);let dt=new Zt(16760944,4,9,1.8);dt.position.set(-26.5,2.6,9),t.add(dt),o.push({light:dt,base:4,phase:Ze()*10});let An=Ji("puff"),oi=e==="low"?h.slice(0,1):h;for(let W of oi)for(let $=0;$<3;$++){let j=new rn({map:An,transparent:!0,opacity:0,depthWrite:!1}),re=new Mn(j);re.scale.setScalar(.8),re.position.set(W.x,W.topY,W.z),t.add(re),d.push({s:re,mat:j,x:W.x,z:W.z,topY:W.topY,phase:$/3})}let Cn=e==="low"?90:150,gn=new je(.22,.34,5.5,6),Qi=new Tn(gn,U,Cn),ft=new hi(1.9,4.6,7),ei=new hi(1.4,3.4,7),Ti=new Tn(ft,q,Cn),It=new Tn(ei,q,Cn),Et=new wt,yi=0,Gr=[[-88,88,-88,-66],[-88,88,66,88],[-88,-66,-66,66],[66,88,-66,66],[-88,-52,26,52],[52,88,8,48],[-52,-44,28,44],[30,50,26,44],[-58,-40,-58,-46],[36,56,-52,-34]];for(;yi<Cn;){let W=Gr[yi%Gr.length],$=W[0]+Ze()*(W[1]-W[0]),j=W[2]+Ze()*(W[3]-W[2]),re=.8+Ze()*.9;Et.position.set($,2.6*re,j),Et.scale.setScalar(re),Et.rotation.y=Ze()*Math.PI,Et.updateMatrix(),Qi.setMatrixAt(yi,Et.matrix),Et.position.y=5.6*re,Et.updateMatrix(),Ti.setMatrixAt(yi,Et.matrix),Et.position.y=7.6*re,Et.updateMatrix(),It.setMatrixAt(yi,Et.matrix),i.push(Tt($,j,.7,.7)),yi++}Qi.instanceMatrix.needsUpdate=!0,Ti.instanceMatrix.needsUpdate=!0,It.instanceMatrix.needsUpdate=!0,t.add(Qi,Ti,It);let Wu=be(.5,5,.5,U,-33,2.5,-33,.2);Wu.castShadow=c,t.add(Wu),be(.2,2.4,.2,U,-32,5.6,-33,.7,t),be(.2,2,.2,U,-34,5.2,-33.2,-.6,t),Ge(Tt(-33,-33,.8,.8));let dm=e!=="low";_(28,7.75,-8),_(-33,5.3,-33),_(0,3.5,2);let xi=62;return Ge({minX:-xi-6,maxX:-xi,minZ:-xi-6,maxZ:xi+6}),Ge({minX:xi,maxX:xi+6,minZ:-xi-6,maxZ:xi+6}),Ge({minX:-xi-6,maxX:xi+6,minZ:-xi-6,maxZ:-xi}),Ge({minX:-xi-6,maxX:xi+6,minZ:xi,maxZ:xi+6}),{root:t,colliders:i,occluders:n,interactables:r,lamps:o,braziers:a,doors:l,gatePivot:jn,stars:Vt,moonMesh:Be,groundMesh:Me,wellBucket:pt,wellRope:Te,updateAmbient:(W,$,j)=>{for(let X of o){let oe=.86+.14*Math.sin(j*7+X.phase);Math.sin(j*13+X.phase)>.985&&(oe*=.35),X.light.intensity=X.base*oe}for(let X of f){let oe=.86+.14*Math.sin(j*7+X.lamp.phase);Math.sin(j*13+X.lamp.phase)>.985&&(oe*=.35),X.glowMat&&(X.glowMat.opacity=v*.5*oe),X.shaftMat&&(X.shaftMat.opacity=.045*oe)}for(let X of d){let oe=(j*.22+X.phase)%1;X.s.position.set(X.x+oe*.55+Math.sin(j*.7+X.phase*9)*.12,X.topY+oe*1.5,X.z+Math.cos(j*.5+X.phase*7)*.1),X.mat.opacity=.34*Math.sin(oe*Math.PI)*(.75+.25*Math.sin(j*1.3+X.phase*5)),X.s.scale.setScalar(.7+oe*1.2)}for(let X of u)X.mesh.rotation.z+=X.rotSpeed*W,X.mesh.position.x=X.x+Math.sin(j*.05+X.phase)*.5,X.mesh.position.z=X.z+Math.cos(j*.04+X.phase)*.4,X.mat.opacity+=(X.target-X.mat.opacity)*Math.min(1,W*1.5);if(Qn>0){let X=pn,oe=$.x,it=$.z;for(let ct=0;ct<Qn;ct++){let ze=ct*3;X[ze+1]+=.05*W,X[ze]+=Math.sin(j*.35+Br[ct])*.12*W;let rt=X[ze]-oe;rt=(rt%40+40)%40-20,X[ze]=oe+rt;let kt=X[ze+2]-it;kt=(kt%40+40)%40-20,X[ze+2]=it+kt,X[ze+1]>7&&(X[ze+1]=.1)}Hs.attributes.position.needsUpdate=!0}for(let X of g)if(X.flying){if(X.t+=W,X.t>=4){X.group.visible=!1,X.flying=!1,X.done=!0;continue}for(let oe of X.birds){let it=X.t/4,ct=oe.ang0+oe.spin*X.t,ze=.3+X.t*.9;if(oe.bird.position.set(Math.cos(ct)*ze,it*it*3.4+.15,Math.sin(ct)*ze),oe.bird.rotation.y=-ct,dm){let rt=Math.sin(j*16+oe.phase)*.55;oe.wl.rotation.z=.25+rt,oe.wr.rotation.z=-.25-rt}}}else if(!X.done)for(let oe of X.birds)oe.bird.rotation.x=Math.sin(j*1.9+oe.phase)*.05;mn.rotation.z=Math.sin(j*.55)*.005;let re=1.6+Math.sin(j*.8)*.18;for(let X of p)X.mesh.material.envMapIntensity=re},setEnv:(W,$)=>{E.roughness=1-W*.45,E.envMapIntensity=W*.5,T=.15+$*.12;for(let j of u)j.target=T;v=1-W*.25,Xe.intensity=_t-$*.25},dust:{object:zs},puddles:p,crowSpots:x,graveArea:Ue,gravePoints:et,mirrorPos:ve,mirrorNormal:we,merchantPos:Bc,lootCrates:m,moonLight:Xe,ritualPos:G}}var Pi=$i(4242),Mp=new Map;function I_(s,e="#8a7f70"){let t=s+e,i=Mp.get(t);if(i)return i;let n=256,r=document.createElement("canvas");r.width=n,r.height=n;let o=r.getContext("2d");o.fillStyle=e,o.fillRect(0,0,n,n);for(let d=0;d<220;d++)o.fillStyle=`rgba(${Pi()<.5?"0,0,0":"255,255,255"},${.02+Pi()*.05})`,o.beginPath(),o.arc(Pi()*n,Pi()*n,2+Pi()*9,0,Math.PI*2),o.fill();let a=n*.42,l=n*.115,c=(d,u,f,g,x,p=!1)=>{if(p){let m=o.createRadialGradient(d,u,1,d,u,f*3);m.addColorStop(0,g),m.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=m,o.beginPath(),o.arc(d,u,f*3,0,Math.PI*2),o.fill()}else o.fillStyle="#d8d2c4",o.beginPath(),o.ellipse(d,u,f,f*.62,0,0,Math.PI*2),o.fill();o.fillStyle=g,o.beginPath(),o.arc(d,u,f*.55,0,Math.PI*2),o.fill(),o.fillStyle=x,o.beginPath(),o.arc(d,u,f*.26,0,Math.PI*2),o.fill()};switch(s){case"player":{c(n/2-l,a,11,"#4a5a3a","#101410"),c(n/2+l,a,11,"#4a5a3a","#101410"),o.strokeStyle="rgba(30,22,14,0.9)",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(n/2-l-16,a-20),o.lineTo(n/2-l+12,a-26),o.stroke(),o.beginPath(),o.moveTo(n/2+l-12,a-26),o.lineTo(n/2+l+16,a-20),o.stroke(),o.strokeStyle="rgba(40,30,20,0.5)",o.lineWidth=3,o.beginPath(),o.moveTo(n/2,a+6),o.lineTo(n/2-6,a+34),o.stroke(),o.strokeStyle="rgba(50,26,20,0.85)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-14,n*.62),o.quadraticCurveTo(n/2,n*.64,n/2+14,n*.62),o.stroke(),o.fillStyle="rgba(30,22,14,0.25)",o.beginPath(),o.ellipse(n/2,n*.7,26,14,0,0,Math.PI*2),o.fill();break}case"husk":{o.fillStyle="rgba(8,6,6,0.95)",o.beginPath(),o.ellipse(n/2-l,a,15,11,0,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(n/2+l,a,15,11,0,0,Math.PI*2),o.fill(),o.fillStyle="rgba(120,100,90,0.4)",o.beginPath(),o.ellipse(n/2-l,a+10,20,8,0,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(n/2+l,a+10,20,8,0,0,Math.PI*2),o.fill(),o.strokeStyle="rgba(20,10,8,0.9)",o.lineWidth=5,o.beginPath(),o.moveTo(n/2-16,n*.64),o.quadraticCurveTo(n/2,n*.7,n/2+16,n*.62),o.stroke(),o.strokeStyle="rgba(70,10,8,0.5)",o.lineWidth=3;for(let d=0;d<5;d++){let u=n*.3+Pi()*n*.4;o.beginPath(),o.moveTo(u,a+18+Pi()*10),o.lineTo(u+(Pi()-.5)*8,n*.8),o.stroke()}break}case"mother":{c(n/2-l,a,14,"#cfd8d8","#0a0a0c"),c(n/2+l,a,14,"#cfd8d8","#0a0a0c"),o.strokeStyle="rgba(6,6,8,0.85)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-l,a+14),o.lineTo(n/2-l-4,n*.72),o.stroke(),o.beginPath(),o.moveTo(n/2+l,a+14),o.lineTo(n/2+l+4,n*.72),o.stroke(),o.strokeStyle="rgba(40,16,18,0.9)",o.lineWidth=3,o.beginPath(),o.moveTo(n/2-9,n*.66),o.quadraticCurveTo(n/2,n*.69,n/2+9,n*.66),o.stroke();break}case"shepherd":{c(n/2-l,a,12,"#ffb32a","#3a1600",!0),c(n/2+l,a,12,"#ffb32a","#3a1600",!0),o.strokeStyle="rgba(14,10,8,0.95)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-20,n*.63),o.lineTo(n/2+20,n*.63),o.stroke(),o.lineWidth=2.4;for(let d=-16;d<=16;d+=8)o.beginPath(),o.moveTo(n/2+d,n*.63-7),o.lineTo(n/2+d,n*.63+7),o.stroke();o.strokeStyle="rgba(30,16,12,0.7)",o.lineWidth=3,o.beginPath(),o.moveTo(n/2+22,a-14),o.lineTo(n/2+34,a+30),o.stroke();break}case"merchant":{c(n/2-l,a,10,"#3a2a18","#0e0a06"),c(n/2+l,a,10,"#3a2a18","#0e0a06"),o.strokeStyle="rgba(30,22,14,0.9)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-l-14,a-18),o.lineTo(n/2-l+12,a-24),o.stroke(),o.beginPath(),o.moveTo(n/2+l-12,a-24),o.lineTo(n/2+l+14,a-18),o.stroke(),o.strokeStyle="rgba(50,26,20,0.85)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-13,n*.62),o.quadraticCurveTo(n/2,n*.66,n/2+13,n*.62),o.stroke(),o.fillStyle="rgba(30,22,14,0.3)",o.beginPath(),o.ellipse(n/2,n*.7,24,12,0,0,Math.PI*2),o.fill();break}case"priest":{c(n/2-l,a,11,"#8a9aa8","#0a0c10"),c(n/2+l,a,11,"#8a9aa8","#0a0c10"),o.strokeStyle="rgba(20,14,10,0.9)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-12,n*.63),o.lineTo(n/2+12,n*.63),o.stroke();break}case"ghost":{c(n/2-l,a,13,"#0c0c10","#000",!1),c(n/2+l,a,13,"#0c0c10","#000",!1),o.strokeStyle="rgba(10,10,14,0.8)",o.lineWidth=4,o.beginPath(),o.moveTo(n/2-15,n*.64),o.quadraticCurveTo(n/2,n*.6,n/2+15,n*.64),o.stroke();break}}let h=new Yi(r);return h.colorSpace=Ft,Mp.set(t,h),h}var Tp=new Map;function L_(s){let e=Tp.get(s);if(e)return e;let t=256,i=document.createElement("canvas");i.width=t,i.height=t;let n=i.getContext("2d"),r={coat:["#2b313c",["#232833","#343b48"]],dress:["#6a6560",["#57534e","#7a756e"]],apron:["#4a3a2c",["#3c2f24","#56452f"]],robe:["#1c1a20",["#141318","#26242c"]],rags:["#4a4438",["#3c362c","#565044"]],shirt:["#5a5248",["#4c453c","#675e52"]]},[o,a]=r[s];n.fillStyle=o,n.fillRect(0,0,t,t);for(let c of a){n.fillStyle=c;for(let h=0;h<140;h++)n.globalAlpha=.1+Pi()*.2,n.beginPath(),n.arc(Pi()*t,Pi()*t,2+Pi()*10,0,Math.PI*2),n.fill()}n.globalAlpha=1,n.strokeStyle="rgba(0,0,0,0.12)",n.lineWidth=1;for(let c=0;c<t;c+=4)n.beginPath(),n.moveTo(0,c),n.lineTo(t,c),n.stroke();if(s==="rags"){n.fillStyle="rgba(60,14,10,0.35)";for(let c=0;c<8;c++)n.beginPath(),n.arc(Pi()*t,Pi()*t,6+Pi()*16,0,Math.PI*2),n.fill()}s==="apron"&&(n.fillStyle="rgba(200,190,170,0.16)",n.fillRect(t*.3,t*.15,t*.4,t*.75)),s==="robe"&&(n.strokeStyle="rgba(90,14,14,0.5)",n.lineWidth=6,n.beginPath(),n.moveTo(t/2,0),n.lineTo(t/2,t),n.stroke());let l=new Yi(i);return l.colorSpace=Ft,l.wrapS=l.wrapT=as,Tp.set(s,l),l}function _c(s,e,t,i,n){let r=new xt,o=new Q(s,e);return o.position.set(t,i,n),o.castShadow=!0,r.add(o),r}function Yn(s={}){var S,L,P,k,U,q;let e=(S=s.scale)!=null?S:1,t=new xt,i=(L=s.skin)!=null?L:"#8a7f70",n=I_((P=s.face)!=null?P:"player",i),r=new ue({color:new qe(i),roughness:.85}),o=new ue({map:n,roughness:.8}),a=new ue({map:L_((k=s.outfit)!=null?k:"coat"),roughness:.95,color:s.outfitTint!==void 0?new qe(s.outfitTint):16777215}),l=new je(.16,.2,.62,8),c=new Q(l,a);c.position.y=1.12,c.castShadow=!0,t.add(c);let h=new Q(new je(.24,.24,.14,8),a);h.position.y=1.4,t.add(h);let d=new xt;d.position.y=1.62;let u=new Q(new Jt(.155,14,12),o);u.castShadow=!0,d.add(u),u.rotation.y=Math.PI,d.add(u);let f=null,g=(U=s.hairColor)!=null?U:"#241c12";if(s.hair==="short"||!s.hair||s.hair==="long"){let R=new ue({color:new qe(g),roughness:1}),F=new Q(new Jt(.165,12,8,0,Math.PI*2,0,Math.PI*.55),R);if(F.position.y=.02,d.add(F),s.hair==="long"){let H=new Q(new je(.16,.11,.42,8,1,!0),R);H.position.set(0,-.18,-.05),d.add(H),f=H}else f=F}else if(s.hair==="hat"){let R=new ue({color:2761760,roughness:.95}),F=new Q(new je(.3,.32,.03,12),R);F.position.y=.1;let H=new Q(new je(.14,.17,.22,10),R);H.position.y=.22,d.add(F,H),f=F}else if(s.hair==="cowl"){let R=new ue({color:1315343,roughness:1}),F=new Q(new hi(.26,.5,8),R);F.position.y=.18,d.add(F),f=F}t.add(d);let x=new on(.055,.5,3,6),p=_c(x,a,0,-.26,0);p.position.set(-.3,1.38,0);let m=_c(x,a,0,-.26,0);m.position.set(.3,1.38,0);let v=new Q(new Jt(.05,6,6),r);v.position.set(0,-.56,0),p.add(v);let T=v.clone();m.add(T),t.add(p,m);let E=new on(.075,.52,3,6),C=a,w=_c(E,C,0,-.32,0);w.position.set(-.11,.78,0);let y=_c(E,C,0,-.32,0);if(y.position.set(.11,.78,0),s.boots!==!1){let R=new ue({color:1840656,roughness:1}),F=new Q(new at(.13,.09,.22),R);F.position.set(0,-.62,.03),w.add(F);let H=F.clone();y.add(H)}if(t.add(w,y),s.pack){let R=new ue({color:3813926,roughness:1}),F=new Q(new at(.3,.4,.18),R);F.position.set(0,1.12,-.24),t.add(F)}if(s.glowEyes){let R=new Rt({color:(q=s.eyes)!=null?q:16757546}),F=new Q(new Jt(.026,6,6),R);F.position.set(-.06,1.64,-.13);let H=F.clone();H.position.x=.06,t.add(F,H)}if(s.lantern){let R=new xt,F=new Q(new at(.14,.2,.14),new ue({color:2236962,metalness:.6,roughness:.5})),H=new Q(new at(.09,.13,.09),new ue({color:2234888,emissive:16747546,emissiveIntensity:1.6})),K=new Zt(16747546,4.5,9,1.8);K.position.y=.1,R.add(F,H,K),R.position.set(-.42,.72,.12),t.add(R)}return t.scale.setScalar(e),t.traverse(R=>{R.castShadow=!0}),{group:t,parts:{torso:c,head:u,hair:f,armL:p,armR:m,legL:w,legR:y},headPivot:d}}function Pr(s,e,t,i=.55){let n=Math.sin(e*t);s.parts.legL.rotation.x=n*i,s.parts.legR.rotation.x=-n*i,s.parts.armL.rotation.x=-n*i*.7,s.parts.armR.rotation.x=n*i*.7,s.parts.torso.rotation.z=Math.sin(e*t)*.03}function un(s,e){s.parts.legL.rotation.x*=.9,s.parts.legR.rotation.x*=.9,s.parts.armL.rotation.x=Math.sin(e*1.2)*.05,s.parts.armR.rotation.x=-Math.sin(e*1.2)*.05,s.parts.torso.rotation.z=Math.sin(e*.8)*.015}function Mu(s,e,t=.9){let i=s.group.worldToLocal(e.clone()),n=Math.atan2(-i.x,-i.z),r=Math.atan2(i.y-1.62,Math.hypot(i.x,i.z));s.headPivot.rotation.y=hc.clamp(n,-t,t)*.6,s.headPivot.rotation.x=hc.clamp(-r,-.5,.5)*.6}var Ec={knife:{id:"knife",name:"Knife",melee:!0,dmg:26,rate:.55,range:2,magSize:0,reloadTime:0,ammoKey:""},pistol:{id:"pistol",name:"Revolver",melee:!1,dmg:14,rate:.5,range:60,magSize:6,reloadTime:1.9,ammoKey:"ammo_pistol"},rifle:{id:"rifle",name:"Hunter's Rifle",melee:!1,dmg:48,rate:1.25,range:80,magSize:2,reloadTime:2.9,ammoKey:"ammo_rifle"},axe:{id:"axe",name:"Fire Axe",melee:!0,dmg:55,rate:1.15,range:2.3,magSize:0,reloadTime:0,ammoKey:""},torch:{id:"torch",name:"Torch",melee:!0,dmg:20,rate:.75,range:2.1,magSize:0,reloadTime:0,ammoKey:""}},bc=class{constructor(e){this.pos=new M(0,0,52);this.yaw=0;this.pitch=0;this.vel=new M;this.health=100;this.maxHealth=100;this.stamina=100;this.fear=0;this.crouching=!1;this.sprinting=!1;this.flashlightOn=!0;this.battery=100;this.weapons=["knife"];this.current="knife";this.mag={pistol:6,rifle:0};this.inv={bandage:1,pills:1,grenade:0,battery:0,battery_lith:0,battery_nuc:0,splint:0,herb:0,candle:0,bottle:0,brick:0,ammo_pistol:6,ammo_rifle:0,church_key:0,iron_key:0,amulet:0,rifle_stock:0,rifle_barrel:0};this.downed=!1;this.dead=!1;this.downTimer=0;this.moving=!1;this.stepDist=0;this.fireCd=0;this.reloadT=0;this.knifeAnim=0;this.fearPills=0;this.interactTarget=null;this.name="Survivor";this.color=8952234;this.id="p0";this.isLocal=!0;this.statuses={bleeding:0,poison:0,brokenLeg:0};this.jammed=!1;this.batteryType="std";this.breathT=0;this.stealthKillT=0;this.stealthTarget=null;this.stealthLanded=!1;this.onStealthKill=null;this.onBulletImpact=null;this.onCandlePlace=null;this.ritualBlessed=!1;this.cam=new ii(70,1,.1,400);this.flashTarget=new wt;this.bobT=0;this.shakeT=0;this.shakeAmp=0;this.lowBatFlicker=0;this.heartT=0;this.unjamT=0;this.crankT=0;this.weaponProps=[];this.onNoise=null;this.onDamage=null;this.cam.name="playerCam",e.add(this.cam),this.flash=new No(16771524,0,30,.46,.5,1.4),this.flash.position.set(0,0,0),e.add(this.flash),e.add(this.flashTarget),this.flash.target=this.flashTarget,this.muzzle=new Zt(16761706,0,9,1.8),e.add(this.muzzle),this.torchLight=new Zt(16751168,0,9,1.8),e.add(this.torchLight),this.humanoid=Yn({scale:1,face:"player",outfit:"coat",outfitTint:3752526,hair:"short",pack:!0,skin:"#8a7f70"}),this.model=this.humanoid.group,this.buildWeaponProps(),this.model.visible=!1,e.add(this.model)}get batteryCap(){return this.batteryType==="lith"?200:this.batteryType==="nuc"?300:100}buildWeaponProps(){let e=this.humanoid.parts.armR,t=new ue({color:13159634,metalness:.7,roughness:.35}),i=new ue({color:2237482,metalness:.4,roughness:.6}),n=new ue({color:7031338,roughness:.9}),r=new ue({color:2760986,roughness:1}),o=(a,l)=>{let c=new xt;c.position.set(0,-.55,.05),l(c),c.visible=!1,e.add(c),this.weaponProps.push({id:a,group:c})};o("knife",a=>{let l=new Q(new at(.02,.03,.28),t);l.position.z=.16;let c=new Q(new at(.03,.045,.09),i);c.position.z=-.01,a.add(l,c)}),o("pistol",a=>{let l=new Q(new at(.05,.09,.16),i);l.position.z=.1;let c=new Q(new at(.045,.11,.05),n);c.position.set(0,-.07,.03),c.rotation.x=.25,a.add(l,c)}),o("rifle",a=>{let l=new Q(new at(.05,.08,.55),i);l.position.z=.22;let c=new Q(new at(.055,.1,.2),n);c.position.set(0,-.02,-.1),a.add(l,c)}),o("axe",a=>{let l=new Q(new je(.02,.025,.5,6),n);l.rotation.x=Math.PI/2,l.position.z=.14;let c=new Q(new at(.05,.16,.1),t);c.position.z=.36,a.add(l,c)}),o("torch",a=>{let l=new Q(new je(.02,.025,.34,6),r);l.rotation.x=Math.PI/2,l.position.z=.14;let c=new Q(new je(.032,.032,.07,6),new ue({color:9067040,roughness:1,emissive:5579264,emissiveIntensity:.6}));c.rotation.x=Math.PI/2,c.position.z=.28;let h=new Mn(new rn({map:Ji("flame"),color:16756816,blending:ps,depthWrite:!1}));h.scale.setScalar(.22),h.position.z=.34,a.add(l,c,h)})}get camera(){return this.cam}get eyePos(){return new M(this.pos.x,this.pos.y+(this.crouching?1.05:1.62),this.pos.z)}get chestPos(){return new M(this.pos.x,this.pos.y+1.25,this.pos.z)}hasWeapon(e){return this.weapons.includes(e)}giveWeapon(e){this.weapons.includes(e)||this.weapons.push(e),e==="pistol"&&(this.mag.pistol=Math.max(this.mag.pistol,6)),e==="rifle"&&(this.mag.rifle=Math.max(this.mag.rifle,2))}weaponDef(){return Ec[this.current]}addShake(e,t){this.shakeAmp=Math.max(this.shakeAmp,e),this.shakeT=Math.max(this.shakeT,t)}damage(e,t,i=!1){this.dead||(this.fearPills>0&&t&&e<=25&&(e*=.85),this.health=He(this.health-e,0,100),this.fear=He(this.fear+e*.5,0,100),this.addShake(.5,.35),t&&(i?(Math.random()<.22&&(this.statuses.brokenLeg=45),Math.random()<.3&&(this.statuses.bleeding=30)):(Math.random()<.12&&(this.statuses.poison=40),Math.random()<.25&&(this.statuses.bleeding=25))),this.onDamage&&this.onDamage(e,t),this.health<=0&&(this.downed=!0,this.downTimer=60))}heal(e){this.health=He(this.health+e,0,this.maxHealth)}calmFear(e){this.fear=He(this.fear-e,0,100)}useItem(e,t){var i;if((this.inv[e]||0)<=0)return!1;switch(e){case"bandage":return this.inv.bandage--,this.heal(35),this.statuses.bleeding=0,t.play("heal",.6),!0;case"pills":return this.inv.pills--,this.calmFear(50),this.fearPills=45,t.play("heal",.5),!0;case"battery":case"battery_std":return this.inv[e]--,this.batteryType="std",this.battery=this.batteryCap,t.play("flash",.6),!0;case"battery_lith":return this.inv.battery_lith--,this.batteryType="lith",this.battery=this.batteryCap,t.play("flash",.6),!0;case"battery_nuc":return this.inv.battery_nuc--,this.batteryType="nuc",this.battery=this.batteryCap,t.play("flash",.6),!0;case"splint":return this.inv.splint--,this.statuses.brokenLeg=0,t.play("heal",.7),!0;case"herb":return this.inv.herb--,this.statuses.poison>0?this.statuses.poison=0:this.fear=Math.max(0,this.fear-25),t.play("heal",.5),!0;case"candle":return this.inv.candle--,(i=this.onCandlePlace)==null||i.call(this,this.chestPos.clone().setY(.2)),t.play("flash",.5),!0;default:return!1}}reload(e){let t=this.weaponDef();if(!(t.melee||this.reloadT>0)){if(this.jammed){this.unjamT<=0&&(this.unjamT=1.6,e.play("unjam",.6));return}if(!(this.mag[t.id]>=t.magSize)){if((this.inv[t.ammoKey]||0)<=0){e.play("dry",.4);return}this.reloadT=t.reloadTime,e.play("reload",.5)}}}finishReload(){let e=this.weaponDef();if(e.melee)return;let t=e.magSize-this.mag[e.id],i=Math.min(t,this.inv[e.ammoKey]||0);this.mag[e.id]+=i,this.inv[e.ammoKey]=(this.inv[e.ammoKey]||0)-i}beginStealthKill(e,t){return this.stealthKillT>0?!1:(this.stealthKillT=1.25,this.stealthTarget=t.clone(),e.play("stab",.6),!0)}fire(e,t,i,n){var u;let r=this.weaponDef();if(this.fireCd>0)return"cooldown";if(this.reloadT>0)return"reloading";if(r.melee){this.fireCd=r.rate,this.knifeAnim=.28,e.play("knife",.45);let f=this.eyePos;for(let g of t){let x=g.pos();if(x.distanceTo(this.chestPos)<r.range+.4){let m=new M().subVectors(x,f).normalize(),v=new M(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(-1);if(m.dot(v)>.4&&ji(f,x,i)){e.play("flesh",.6),g.onHit(r.dmg,!1),this.current==="torch"&&e.play("brazier",.35);break}}}return"melee"}if(this.jammed)return e.play("dry",.5),this.fireCd=.25,"empty";if(this.mag[r.id]<=0)return e.play("dry",.5),this.fireCd=.3,"empty";this.mag[r.id]--,this.fireCd=r.rate,e.play("shot",.85),this.addShake(.35,.18),this.muzzle.intensity=30,this.muzzle.position.copy(this.chestPos).addScaledVector(n,.5),this.onNoise&&this.onNoise(this.pos.clone(),48),this.fear=He(this.fear-3,0,100);let o=this.chestPos.clone().addScaledVector(n,.4),a=null,l=new M;for(let f of t){let g=f.pos(),x=g.distanceTo(o);if(x>r.range)continue;l.copy(g).sub(o).normalize();let p=l.dot(n),m=He(.986-x*4e-4,.955,.986);p>m&&ji(o,g,i)&&(!a||x<a.d)&&(a={t:f,d:x})}a&&(e.play("flesh",.7,0),a.t.onHit(r.dmg,!1));let h=new Ps(o,n.clone().normalize(),.05,r.range).intersectObjects(i,!1);if(h.length>0){let f=h[0],g=f.face?f.face.normal.clone().transformDirection(f.object.matrixWorld):n.clone().negate();(u=this.onBulletImpact)==null||u.call(this,f.point.clone(),g)}let d=.1+(r.id==="pistol"?.04:r.id==="rifle"?.08:0);return Math.random()<d&&(this.jammed=!0,e.play("unjam",.5)),"fired"}throwGrenade(e){if((this.inv.grenade||0)<=0)return null;this.inv.grenade--,e.play("knife",.3);let t=new M(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(-1),i=t.multiplyScalar(11).add(new M(0,4.6,0));return{pos:this.chestPos.clone().addScaledVector(t,.6),vel:i}}throwObject(e){let t;if((this.inv.bottle||0)>0)this.inv.bottle--,t="bottle";else if((this.inv.brick||0)>0)this.inv.brick--,t="brick";else return null;e.play("knife",.25);let i=new M(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(-1),n=i.clone().multiplyScalar(9.5).add(new M(0,4.6,0));return{pos:this.chestPos.clone().addScaledVector(i,.6),vel:n,kind:t}}chargeDynamo(e,t,i){this.battery=Math.min(this.batteryCap,this.battery+9*e),this.crankT-=e,this.crankT<=0&&(this.crankT=.45,t.play("crank",.28),i(this.pos.clone(),11))}toggleFlashlight(e){this.battery<=0&&!this.flashlightOn||(this.flashlightOn=!this.flashlightOn,e.play("flash",.5))}update(e,t,i,n,r,o,a,l,c,h,d){let u=t.consumeLook();this.yaw-=u.x*o,this.pitch-=(a?-u.y:u.y)*o,this.pitch=He(this.pitch,-1.35,1.35),this.fireCd>0&&(this.fireCd-=e),this.reloadT>0&&(this.reloadT-=e,this.reloadT<=0&&this.finishReload()),this.knifeAnim>0&&(this.knifeAnim-=e),this.shakeT>0&&(this.shakeT-=e,this.shakeT<=0&&(this.shakeAmp=0)),this.muzzle.intensity=Math.max(0,this.muzzle.intensity-e*400),this.fearPills>0&&(this.fearPills-=e),this.unjamT>0&&(this.unjamT-=e,this.unjamT<=0&&(this.jammed=!1)),!!(d!=null&&d.breathHold)&&this.stamina>2&&!this.downed?(this.breathT=Math.min(6,this.breathT+e*3),this.stamina=He(this.stamina-9*e,0,100)):this.breathT=Math.max(0,this.breathT-e*2);let g=this.statuses;g.bleeding>0&&(this.health>5&&(this.health=Math.max(5,this.health-1.1*e)),g.bleeding-=e),g.poison>0&&(this.health=He(this.health-.7*e,0,100),this.ritualBlessed||(this.fear=Math.min(100,this.fear+.6*e)),g.poison-=e),g.brokenLeg>0&&(g.brokenLeg-=e);let x=h||this.stealthKillT>0?{x:0,y:0}:t.moveVector();this.moving=Math.hypot(x.x,x.y)>.1;let p=(t.down("ShiftLeft")||t.down("ShiftRight")||t.down("sprint"))&&this.moving&&!this.crouching;this.downed?this.sprinting=!1:p&&this.stamina>1?this.sprinting=!0:this.sprinting=!1,this.sprinting?this.stamina=He(this.stamina-17*e,0,100):this.stamina=He(this.stamina+(this.crouching?14:9)*e,0,100),this.crouching=!this.downed&&(t.down("KeyC")||t.down("ControlLeft")||t.down("crouch"));let m=3.1;this.sprinting?m=4.7:this.crouching&&(m=1.55),this.downed&&(m=.9),g.brokenLeg>0&&(m*=.62),g.poison>0&&(m*=.9);let v=Math.sin(this.yaw),T=Math.cos(this.yaw),E=-v,C=-T,w=T,y=-v,S=E*-x.y+w*x.x,L=C*-x.y+y*x.x,P=Math.hypot(S,L)||1,k=S/P*m*Math.min(1,Math.hypot(x.x,x.y)),U=L/P*m*Math.min(1,Math.hypot(x.x,x.y));if(this.pos.x+=k*e,this.pos.z+=U*e,Vi(this.pos,.42,i.colliders),this.moving&&!this.downed){this.stepDist+=Math.hypot(k,U)*e;let Y=this.sprinting?1.7:this.crouching?1.3:1.05;if(this.stepDist>Y){this.stepDist=0,n.play("step",this.sprinting?.5:this.crouching?.16:.3);let D=this.sprinting?16:this.crouching?2.6:7.5;this.breathT>1&&(D*=.5),g.brokenLeg>0&&!this.crouching&&(D*=1.5,n.play("moan",.12)),this.onNoise&&this.onNoise(this.pos.clone(),D)}}if(this.flashlightOn){let Y=this.batteryType==="lith"?.3:this.batteryType==="nuc"?.08:.55;this.battery=He(this.battery-e*Y,0,this.batteryCap),this.battery<=0&&(this.flashlightOn=!1,n.play("flash",.4))}let q=this.flashlightOn?85:0;this.flashlightOn&&this.battery<20&&(this.lowBatFlicker-=e,this.lowBatFlicker<=0&&(this.lowBatFlicker=.06+Math.random()*.2,q*=Math.random()<.24?.25:1)),this.flash.intensity=q;let R=this.eyePos;this.flash.position.copy(R);let F=new M(0,0,-1).applyEuler(new Xi(this.pitch,this.yaw,0,"YXZ"));this.flashTarget.position.copy(R).addScaledVector(F,10),this.current==="torch"?(this.torchLight.intensity=22*(.9+Math.random()*.2),this.torchLight.position.copy(this.chestPos).addScaledVector(F,.4)):this.torchLight.intensity=0,this.ritualBlessed?this.fear=0:this.fearPills<=0&&(l?this.fear=He(this.fear+e*1.05,0,100):this.fear=He(this.fear-e*2.4,0,100),c&&(this.fear=He(this.fear+e*5.5,0,100))),this.fear>65&&(this.heartT-=e,this.heartT<=0&&(this.heartT=.9-this.fear/400,this.addShake(.05,.12)));let H=this.shakeAmp*(this.shakeT>0?this.shakeT:0),K=this.moving&&r==="first"?Math.sin(this.bobT*8.5)*.035:0;this.bobT+=e*(this.sprinting?1.5:1);let le=new Xi(this.pitch,this.yaw,Math.sin(this.bobT*4)*.012+(Math.random()-.5)*H*.1,"YXZ");if(r==="first")this.cam.position.set(R.x+(Math.random()-.5)*H*.3,R.y+K,R.z+(Math.random()-.5)*H*.3),this.cam.quaternion.setFromEuler(le);else{let Y=new M(Math.sin(this.yaw),0,Math.cos(this.yaw)),D=R.clone().addScaledVector(Y,3.3).add(new M(0,.85+this.pitch*-.4,0)),B=new M().subVectors(D,R),ce=B.length();B.normalize();let Ae=ce,J=R.clone();for(let _e=.4;_e<=ce;_e+=.4){J.copy(R).addScaledVector(B,_e);let Me=!1;for(let Le of i.colliders)if(J.x>Le.minX-.25&&J.x<Le.maxX+.25&&J.z>Le.minZ-.25&&J.z<Le.maxZ+.25){Me=!0;break}if(J.y<.25&&(Me=!0),Me){Ae=Math.max(.5,_e-.4);break}}this.cam.position.copy(R).addScaledVector(B,Ae),this.cam.position.y+=Math.sin(this.bobT*4)*.02,this.cam.quaternion.setFromEuler(le)}if(this.model.visible=r==="third",this.model.position.copy(this.pos),this.model.rotation.y=this.yaw+Math.PI,this.moving&&!this.downed?Pr(this.humanoid,this.bobT,8.5,this.sprinting?.8:.55):un(this.humanoid,this.bobT),this.model.scale.set(1,this.crouching?.72:1,1),this.downed?(this.model.rotation.x=Math.PI/2.2,this.model.position.y=.3):(this.model.rotation.x=0,this.model.position.y=0),this.stealthKillT>0){this.stealthKillT-=e;let Y=He(1-this.stealthKillT/1.25,0,1),D=this.humanoid.parts.armR;D.rotation.x=Y<.35?-.4+-1.5*(Y/.35):-1.9+2.1*((Y-.35)/.65),this.stealthKillT<=0&&(this.stealthLanded=!0,this.onStealthKill&&this.onStealthKill())}for(let Y of this.weaponProps)Y.group.visible=Y.id===this.current}serialize(){return{id:this.id,name:this.name,x:this.pos.x,z:this.pos.z,yaw:this.yaw,pitch:this.pitch,hp:this.health,downed:this.downed,dead:this.dead,crouch:this.crouching,moving:this.moving,weapon:this.current,flash:this.flashlightOn,color:this.color,jammed:this.jammed,batteryType:this.batteryType,statuses:ti({},this.statuses)}}};var ht=$i(777);function Su(s){s.group.rotation.y=Math.PI;let e=new xt;return e.add(s.group),e}function N_(s){let e=Yn({scale:1.42,face:"shepherd",hair:"cowl",outfit:"robe",skin:"#8a8078",glowEyes:!0,eyes:"#ffb32a",lantern:!0}),t=Su(e),i=[],n=null;t.traverse(a=>{let l=a;if(l.isMesh){let h=l.material;h&&h.isMeshBasicMaterial&&i.push(l)}let c=a;c.isPointLight&&(n=c)});let r=e.parts,o={torso:r.torso,head:r.head,armL:r.armL,armR:r.armR,legL:r.legL,legR:r.legR};return t.visible=!1,s.add(t),{group:t,humanoid:e,parts:o,eyes:i,lanternLight:n}}var Mc=class{constructor(e){this.pos=new M(20,0,40);this.state="patrol";this.target=new M;this.stateT=0;this.wpIndex=0;this.poise=0;this.attackCd=0;this.windupT=0;this.pendingCatch=null;this.stuckT=0;this.lastPos=new M;this.stepDist=0;this.twitchT=0;this.animT=0;this.controlled=!1;this.netPos=new M;this.netYaw=0;this.active=!1;this.rage=0;let t=N_(e);this.group=t.group,this.humanoid=t.humanoid,this.headPivot=t.humanoid.headPivot,this.parts=t.parts,this.eyes=t.eyes,this.lanternLight=t.lanternLight}spawn(e){this.pos.copy(e),this.group.visible=!0,this.active=!0,this.state="patrol",this.windupT=0,this.pendingCatch=null,this.poise=0}despawn(){this.active=!1,this.group.visible=!1}mesh(){return this.group}headPos(){return new M(this.pos.x,this.pos.y+2.3,this.pos.z)}hear(e,t){if(!this.active||this.controlled||this.state==="chase"||this.state==="stagger"||this.state==="down")return;let i=this.pos.distanceTo(e),n=t*(1-.45*Qt.rain)*(1-.15*Qt.storm)*(1+this.rage*.35);i<n&&(this.state="investigate",this.target.copy(e),this.stateT=0)}onHit(e,t,i,n,r){if(this.active){if(i.play3d("flesh",n,r,this.pos,.8),this.windupT=0,this.pendingCatch=null,t){this.knockdown(5.5);return}this.poise+=e,this.poise>=55?(this.poise=0,this.knockdown(5)):(this.state="stagger",this.stateT=1.4)}}knockdown(e){this.state="down",this.stateT=e,this.poise=0,this.windupT=0,this.pendingCatch=null,this.group.rotation.z=1.2}update(e,t,i,n,r,o,a){if(!this.active){n.setGrowl(0);return}if(this.controlled){this.pos.lerp(this.netPos,He(e*8,0,1)),this.group.position.copy(this.pos),this.group.rotation.y=this.netYaw;return}if(this.stateT-=e,this.attackCd-=e,this.animT+=e,this.twitchT-=e,this.state==="stagger")this.group.rotation.z=Math.sin(this.animT*30)*.08,this.stateT<=0&&(this.state="chase",this.group.rotation.z=0);else if(this.state==="down")this.stateT<=0&&(this.state="search",this.stateT=6,this.target.copy(i[0]?i[0].pos:this.pos),this.group.rotation.z=0);else{let x=null;for(let p of i){if(p.dead)continue;let m=this.headPos(),v=new M(p.pos.x,1.5,p.pos.z),T=m.distanceTo(v),E=26;p.flashlightOn?E=p.crouching?24:38:p.crouching&&(E=15);let C=p.breathHold?2.6:5.5,w=this.fovDot(v),y=p.flashlightOn?.05:.34;if(T<C||T<E&&w>y&&ji(m,v,t.occluders)){x=p;break}}switch(x&&this.state!=="chase"&&(this.state="chase",this.stateT=0,n.play3d("scream",r,o,this.pos,.95)),this.state){case"patrol":{(this.stateT<=0||this.target.distanceTo(this.pos)<1.2)&&(this.wpIndex=(this.wpIndex+1+Math.floor(ht()*2))%Yo.length,this.target.copy(Yo[this.wpIndex]),this.stateT=30),this.moveTowards(this.target,(1.65+this.rage*.5)*e,t);break}case"investigate":{this.moveTowards(this.target,(2.5+this.rage*.7)*e,t),this.target.distanceTo(this.pos)<1.4&&(this.state="search",this.stateT=5,this.target.copy(this.pos).add(new M((ht()-.5)*14,0,(ht()-.5)*14)));break}case"chase":{let p=null,m=1e9;for(let v of i){if(v.dead)continue;let T=this.pos.distanceTo(v.pos);T<m&&(m=T,p=v)}if(!p){this.state="patrol",this.windupT=0,this.pendingCatch=null;break}if(this.windupT>0){if(this.windupT-=e,this.target.copy(p.pos),this.windupT<=0){let v=this.pendingCatch;this.pendingCatch=null,v&&!v.dead&&ji(this.headPos(),new M(v.pos.x,1.3,v.pos.z),t.occluders)&&(this.humanoid.parts.armR.rotation.x=.7,n.play3d("scream",r,o,this.pos,1),a(v),this.state="stagger",this.stateT=2.1)}break}this.target.copy(p.pos),this.moveTowards(this.target,(3.45+this.rage*.85)*(1-.08*Qt.storm)*e,t),m<1.9&&this.attackCd<=0&&!p.downed&&ji(this.headPos(),new M(p.pos.x,1.3,p.pos.z),t.occluders)&&(this.attackCd=1.6,this.windupT=.42,this.pendingCatch=p),x?this.stateT=0:this.stateT<=-6&&(this.state="search",this.stateT=9,this.target.copy(p.pos));break}case"search":{this.moveTowards(this.target,2.1*e,t),(this.target.distanceTo(this.pos)<1.4||this.stateT<=0)&&(this.stateT<=0?(this.state="patrol",this.stateT=0):this.target.copy(this.pos).add(new M((ht()-.5)*18,0,(ht()-.5)*18)));break}}}if(this.state==="patrol"&&i[0]){let x=1e9;for(let p of i)x=Math.min(x,this.pos.distanceTo(p.pos));if(x>75){let p=i[Math.floor(ht()*i.length)],m=ht()*Math.PI*2,v=new M(p.pos.x+Math.cos(m)*34,0,p.pos.z+Math.sin(m)*34);Vi(v,.5,t.colliders),this.pos.copy(v)}}this.pos.distanceTo(this.lastPos)<.02&&this.state!=="down"&&this.state!=="stagger"?(this.stuckT+=e,this.stuckT>1.1&&(this.target.copy(this.pos).add(new M((ht()-.5)*12,0,(ht()-.5)*12)),this.stuckT=0)):this.stuckT=0;let l=this.pos.distanceTo(this.lastPos);this.lastPos.copy(this.pos);let c=this.state==="chase",h=l>.01&&this.state!=="down"&&this.state!=="stagger";if(this.state==="down"?un(this.humanoid,this.animT):h?Pr(this.humanoid,this.animT,c?9:4.5,c?.75:.5):un(this.humanoid,this.animT),c){let x=this.humanoid.parts;x.armL.rotation.x=-1.1+Math.sin(this.animT*9)*.2,this.windupT>0?x.armR.rotation.x=Xn(x.armR.rotation.x,-2.5,He(e*14,0,1)):x.armR.rotation.x=-.9+Math.sin(this.animT*9+1.2)*.2}let d=null;if(this.state==="investigate"||c||this.state==="search"){let x=20;for(let p of i){if(p.dead)continue;let m=this.pos.distanceTo(p.pos);m<x&&(x=m,d=new M(p.pos.x,1.6,p.pos.z))}}d?(Mu(this.humanoid,d,.9),this.twitchT=Math.max(this.twitchT,.35)):this.twitchT<=0&&(this.twitchT=c?.12:.8+ht()*1.6,this.headPivot.rotation.z=(ht()-.5)*.5,this.headPivot.rotation.x=(ht()-.5)*.3,this.headPivot.rotation.y*=.6),this.lanternLight&&(this.lanternLight.intensity=4.5*(.85+.15*Math.sin(this.animT*11)));for(let x of this.eyes)x.material.color.setHex(c?16726815:16757546);this.group.position.copy(this.pos);let u=new M().subVectors(this.target,this.pos);u.lengthSq()>.01&&(this.group.rotation.y=Math.atan2(u.x,u.z)),this.stepDist+=l,this.stepDist>1.6&&this.state!=="down"&&(this.stepDist=0,n.play3d("step",r,o,this.pos,1.4));let f=r?this.pos.distanceTo(r):99,g=c?He(.28*(1-f/34),0,.3):He(.07*(1-f/20),0,.08);n.setGrowl(g,c?66:52)}fovDot(e){let t=new M(e.x-this.pos.x,0,e.z-this.pos.z).normalize(),i=new M(Math.sin(this.group.rotation.y),0,Math.cos(this.group.rotation.y));return t.dot(i)}moveTowards(e,t,i){let n=new M(e.x-this.pos.x,0,e.z-this.pos.z),r=n.length();if(r<.01)return;n.divideScalar(r);let o=this.pos.x+n.x*t,a=this.pos.z+n.z*t,l=this.pos.clone();if(this.pos.set(o,0,a),Vi(this.pos,.5,i.colliders),this.pos.distanceTo(l)<t*.35){let h=new M(-n.z,0,n.x).multiplyScalar(ht()<.5?1:-1);this.pos.addScaledVector(h,t*.9),Vi(this.pos,.5,i.colliders)}}},wu=new M(38,0,8);function k_(s){let e=Yn({scale:1.36,face:"mother",hair:"long",hairColor:"#0a0a0c",outfit:"dress",skin:"#b8b2ac",glowEyes:!0,eyes:"#d8e8f0"}),t=Su(e);return t.visible=!1,s.add(t),{group:t,humanoid:e}}var Tc=class{constructor(e){this.pos=wu.clone();this.state="patrol";this.target=new M;this.stateT=0;this.wpIndex=0;this.poise=0;this.attackCd=0;this.windupT=0;this.pendingCatch=null;this.stuckT=0;this.lastPos=new M;this.stepDist=0;this.twitchT=0;this.moanT=4+ht()*8;this.animT=ht()*10;this.controlled=!1;this.netPos=new M;this.netYaw=0;this.active=!1;this.rage=0;let t=k_(e);this.group=t.group,this.humanoid=t.humanoid,this.headPivot=t.humanoid.headPivot}spawn(e){this.pos.copy(e),this.group.visible=!0,this.active=!0,this.state="patrol",this.windupT=0,this.pendingCatch=null,this.poise=0}despawn(){this.active=!1,this.group.visible=!1}mesh(){return this.group}headPos(){return new M(this.pos.x,this.pos.y+2.2,this.pos.z)}hear(e,t){if(!this.active||this.controlled||this.state==="chase"||this.state==="stagger"||this.state==="down")return;let i=this.pos.distanceTo(e),n=t*.3*(1-.45*Qt.rain)*(1-.15*Qt.storm)*(1+this.rage*.35);i<n&&(this.state="investigate",this.target.copy(e),this.stateT=0)}onHit(e,t,i,n,r){if(this.active){if(i.play3d("flesh",n,r,this.pos,.8),this.windupT=0,this.pendingCatch=null,t){this.knockdown(5);return}this.poise+=e,this.poise>=70?(this.poise=0,this.knockdown(5)):(this.state="stagger",this.stateT=1.4)}}knockdown(e){this.state="down",this.stateT=e,this.poise=0,this.windupT=0,this.pendingCatch=null,this.group.rotation.z=1.2}update(e,t,i,n,r,o,a){if(!this.active)return;if(this.controlled){this.pos.lerp(this.netPos,He(e*8,0,1)),this.animT+=e,this.group.position.copy(this.pos),this.group.position.y=.06+Math.sin(this.animT*1.7)*.04,this.group.rotation.y=this.netYaw;return}if(this.stateT-=e,this.attackCd-=e,this.animT+=e,this.twitchT-=e,this.state==="stagger")this.group.rotation.z=Math.sin(this.animT*30)*.08,this.stateT<=0&&(this.state="chase",this.group.rotation.z=0);else if(this.state==="down")this.stateT<=0&&(this.state="search",this.stateT=6,this.target.copy(i[0]?i[0].pos:this.pos),this.group.rotation.z=0);else{let x=null;for(let p of i){if(p.dead)continue;let m=this.headPos(),v=new M(p.pos.x,1.5,p.pos.z),T=m.distanceTo(v),E=44;p.flashlightOn&&(E=48),p.crouching&&(E=18);let C=p.breathHold?3:4.5,w=this.fovDot(v);if(T<C||T<E&&w>0&&ji(m,v,t.occluders)){x=p;break}}switch(x&&this.state!=="chase"&&(this.state="chase",this.stateT=0,n.play3d("coo",r,o,this.pos,.95)),this.state){case"patrol":{(this.stateT<=0||this.target.distanceTo(this.pos)<1.2)&&(this.wpIndex=(this.wpIndex+1+Math.floor(ht()*2))%Yo.length,this.target.copy(Yo[this.wpIndex]),this.stateT=30),this.moveTowards(this.target,2.4*e,t);break}case"investigate":{this.moveTowards(this.target,3.2*e,t),this.target.distanceTo(this.pos)<1.4&&(this.state="search",this.stateT=5,this.target.copy(this.pos).add(new M((ht()-.5)*14,0,(ht()-.5)*14)));break}case"chase":{let p=null,m=1e9;for(let v of i){if(v.dead)continue;let T=this.pos.distanceTo(v.pos);T<m&&(m=T,p=v)}if(!p){this.state="patrol",this.windupT=0,this.pendingCatch=null;break}if(this.windupT>0){if(this.windupT-=e,this.target.copy(p.pos),this.windupT<=0){let v=this.pendingCatch;this.pendingCatch=null,v&&!v.dead&&ji(this.headPos(),new M(v.pos.x,1.3,v.pos.z),t.occluders)&&(this.humanoid.parts.armR.rotation.x=.6,n.play3d("flesh",r,o,this.pos,.9),a(v),this.state="stagger",this.stateT=1.6)}break}this.target.copy(p.pos),this.moveTowards(this.target,(4.9+this.rage*.4)*(1-.08*Qt.storm)*e,t),m<2&&this.attackCd<=0&&!p.downed&&ji(this.headPos(),new M(p.pos.x,1.3,p.pos.z),t.occluders)&&(this.attackCd=1.4,this.windupT=.32,this.pendingCatch=p),x?this.stateT=0:this.stateT<=-6&&(this.state="search",this.stateT=9,this.target.copy(p.pos));break}case"search":{this.moveTowards(this.target,2.2*e,t),(this.target.distanceTo(this.pos)<1.4||this.stateT<=0)&&(this.stateT<=0?(this.state="patrol",this.stateT=0):this.target.copy(this.pos).add(new M((ht()-.5)*18,0,(ht()-.5)*18)));break}}(this.state==="patrol"||this.state==="investigate")&&(this.moanT-=e,this.moanT<=0&&(this.moanT=3+ht()*8,n.play3d("moan",r,o,this.pos,.5)))}if(this.state==="patrol"&&i[0]){let x=1e9;for(let p of i)x=Math.min(x,this.pos.distanceTo(p.pos));if(x>75){let p=i[Math.floor(ht()*i.length)],m=ht()*Math.PI*2,v=new M(p.pos.x+Math.cos(m)*34,0,p.pos.z+Math.sin(m)*34);Vi(v,.5,t.colliders),this.pos.copy(v)}}this.pos.distanceTo(this.lastPos)<.02&&this.state!=="down"&&this.state!=="stagger"?(this.stuckT+=e,this.stuckT>1.1&&(this.target.copy(this.pos).add(new M((ht()-.5)*12,0,(ht()-.5)*12)),this.stuckT=0)):this.stuckT=0;let l=this.pos.distanceTo(this.lastPos);this.lastPos.copy(this.pos);let c=this.state==="chase",h=l>.01&&this.state!=="down"&&this.state!=="stagger";this.state==="down"?un(this.humanoid,this.animT):h?Pr(this.humanoid,this.animT,c?7:3.6,c?.6:.42):un(this.humanoid,this.animT);let d=c?-1.35:.15,u=He(e*(c?5:3),0,1);this.humanoid.parts.armL.rotation.x=Xn(this.humanoid.parts.armL.rotation.x,d,u),this.humanoid.parts.armR.rotation.x=Xn(this.humanoid.parts.armR.rotation.x,d,u),c&&this.windupT>0&&(this.humanoid.parts.armR.rotation.x=Xn(this.humanoid.parts.armR.rotation.x,-2.2,He(e*14,0,1)));let f=null;if(this.state==="investigate"||c||this.state==="search"){let x=20;for(let p of i){if(p.dead)continue;let m=this.pos.distanceTo(p.pos);m<x&&(x=m,f=new M(p.pos.x,1.6,p.pos.z))}}f?(Mu(this.humanoid,f,.9),this.twitchT=Math.max(this.twitchT,.35)):this.twitchT<=0&&(this.twitchT=c?.12:.8+ht()*1.6,this.headPivot.rotation.z=(ht()-.5)*.4,this.headPivot.rotation.x=(ht()-.5)*.25,this.headPivot.rotation.y*=.6),this.group.position.copy(this.pos),this.group.position.y=this.state==="down"?.02:.06+Math.sin(this.animT*1.7)*.04;let g=new M().subVectors(this.target,this.pos);g.lengthSq()>.01&&(this.group.rotation.y=Math.atan2(g.x,g.z)),this.stepDist+=l,this.stepDist>1.7&&this.state!=="down"&&(this.stepDist=0,n.play3d("step",r,o,this.pos,.8))}fovDot(e){let t=new M(e.x-this.pos.x,0,e.z-this.pos.z).normalize(),i=new M(Math.sin(this.group.rotation.y),0,Math.cos(this.group.rotation.y));return t.dot(i)}moveTowards(e,t,i){let n=new M(e.x-this.pos.x,0,e.z-this.pos.z),r=n.length();if(r<.01)return;n.divideScalar(r);let o=this.pos.x+n.x*t,a=this.pos.z+n.z*t,l=this.pos.clone();if(this.pos.set(o,0,a),Vi(this.pos,.5,i.colliders),this.pos.distanceTo(l)<t*.35){let h=new M(-n.z,0,n.x).multiplyScalar(ht()<.5?1:-1);this.pos.addScaledVector(h,t*.9),Vi(this.pos,.5,i.colliders)}}},Sp=["#6e675e","#66665a","#5e6458","#6a6a5c"],D_=0;function O_(s,e){let t=Yn({scale:e,face:"husk",outfit:"rags",skin:s}),i=Su(t);return U_(i),{group:i,humanoid:t}}var Tu=null;function wp(s){Tu=s}function U_(s){Tu&&Tu.add(s)}var Zo=class{constructor(e,t){this.hp=40;this.dead=!1;this.deadT=0;this.lootable=!1;this.looted=!1;this.emerging=0;this.animT=ht()*10;this.attackCd=0;this.wanderT=0;var o,a;let i=D_++,n=O_((o=t==null?void 0:t.skin)!=null?o:Sp[i%Sp.length],.88+i%6*.02);this.group=n.group,this.humanoid=n.humanoid,this.headPivot=n.humanoid.headPivot;let r=n.humanoid.parts;this.parts={torso:r.torso,head:r.head,armL:r.armL,armR:r.armR,legL:r.legL,legR:r.legR},this.pos=e.pos.clone(),this.home=e.pos.clone(),this.target=e.pos.clone(),this.emerging=(a=t==null?void 0:t.emerging)!=null?a:0,this.group.position.copy(this.pos),this.emerging>0&&(this.group.position.y=-1.15),this.group.rotation.y=ht()*Math.PI*2}mesh(){return this.group}chest(){return new M(this.pos.x,1,this.pos.z)}hear(e,t){this.dead||this.emerging>0||this.pos.distanceTo(e)<t*.9&&this.target.copy(e)}onHit(e){this.dead||(this.hp-=e,this.hp<=0?(this.dead=!0,this.deadT=0,this.lootable=!0,this.looted=!1):this.target.set(this.pos.x,0,this.pos.z))}searchLoot(){if(!this.lootable||this.looted)return null;this.looted=!0;let e=ht();return e<.35?{cloth:1}:e<.55?{ammo_pistol:3}:e<.7?{herb:1}:e<.82?{battery:1}:e<.92?{trinket:1}:{bandage:1}}update(e,t,i,n,r,o,a){if(this.dead){this.deadT+=e,this.group.rotation.x=He(this.deadT*3,0,Math.PI/2),this.group.position.y=-He((this.deadT-.5)*.12,0,.25),this.deadT>30&&(this.group.visible=!1,this.lootable=!1);return}if(this.emerging>0){this.emerging-=e,this.group.position.y=-1.15*He(this.emerging/1.4,0,1),ht()<e*3&&n.play3d("flesh",r,o,this.pos,.8);return}this.animT+=e,this.attackCd-=e,this.wanderT-=e;let l=null,c=1e9;for(let x of i){if(x.dead)continue;let p=this.pos.distanceTo(x.pos);p<c&&(c=p,l=x)}let h=!1;if(l){let x=l.breathHold?4:l.crouching?5.5:9;x*=1-.3*Qt.rain;let p=l.pos.x-this.pos.x,m=l.pos.z-this.pos.z,v=Math.hypot(p,m),T=l.crouching&&v>.001&&p/v*Math.sin(this.group.rotation.y)+m/v*Math.cos(this.group.rotation.y)<=.05,E=c<2.5&&!T||v>.001&&p/v*Math.sin(this.group.rotation.y)+m/v*Math.cos(this.group.rotation.y)>.05;h=c<x&&E&&ji(this.chest().add(new M(0,.4,0)),new M(l.pos.x,1.2,l.pos.z),t.occluders),h&&this.target.copy(l.pos)}!h&&this.target.distanceTo(this.pos)<.8&&this.wanderT<=0&&(this.wanderT=3+ht()*5,this.target.copy(this.home).add(new M((ht()-.5)*8,0,(ht()-.5)*8)));let d=l&&c<11?1.55:.85,u=new M(this.target.x-this.pos.x,0,this.target.z-this.pos.z),f=u.length()>.6;if(f?(u.normalize(),this.pos.addScaledVector(u,d*e),Vi(this.pos,.4,t.colliders),Pr(this.humanoid,this.animT,3.2,.4),this.humanoid.parts.legR.rotation.x*=.45,this.group.position.copy(this.pos),this.group.rotation.y=Math.atan2(u.x,u.z),this.group.position.y=Math.abs(Math.sin(this.animT*3.2))*.04,ht()<e*.7&&n.play3d("step",r,o,this.pos,.7)):(un(this.humanoid,this.animT),this.group.position.copy(this.pos)),l!==null&&c<6){let x=He(e*5,0,1);this.humanoid.parts.armL.rotation.x=Xn(this.humanoid.parts.armL.rotation.x,-.95,x),this.humanoid.parts.armR.rotation.x=Xn(this.humanoid.parts.armR.rotation.x,-.95,x)}else if(!f){let x=He(e*2,0,1);this.humanoid.parts.armL.rotation.x=Xn(this.humanoid.parts.armL.rotation.x,0,x),this.humanoid.parts.armR.rotation.x=Xn(this.humanoid.parts.armR.rotation.x,0,x)}this.headPivot.rotation.z=.28+Math.sin(this.animT*2.3)*.05,l&&c<1.3&&this.attackCd<=0&&!l.downed&&ji(this.chest().add(new M(0,.4,0)),new M(l.pos.x,1.3,l.pos.z),t.occluders)&&(this.attackCd=1.5,a(l,12),n.play3d("flesh",r,o,this.pos,.7))}};function Rp(s){return new Zo({pos:s},{skin:"#565048",emerging:1.4})}var Ap=[new M(26,0,-6),new M(-30,0,8),new M(-20,0,10),new M(20,0,16),new M(-33,0,-30),new M(12,0,-20),new M(42,0,-28),new M(6,0,24)];var Lr=[{id:"note_priest",num:1,title:"The Priest's Last Letter",text:`They came at dusk... the bell rang backwards...

We sealed the church, but the Shepherd knows hymns. Do not light three flames unless you are ready to know what sleeps in the well.

Whoever reads this: the key to my church lies in the old barn, under the hay, where we hid from him.

\u2014 Father Abeln`},{id:"note_miller",num:2,title:"Torn Page \u2014 Miller's Diary",text:`My wife walks the fields at night. She doesn't answer to her name anymore.

The doctor gives me pills that don't help. Last night I heard her humming OUR song under the window.

I will not open the curtains. I will not open the curtains. I will not`},{id:"note_clinic",num:3,title:"Patient Log \u2014 Final Entry",text:`The tincture only delays it. They hear the bell in their sleep.

If you read this: nightshade, three sprigs, steeped slow at the mortar. It steadies the hands.

It does not steady the soul.

\u2014 Dr. H.`},{id:"note_barn",num:4,title:"Scratched Plank \u2014 Barn",text:`The rifle is split for safety. Stock here in the barn. Barrel at the hunter's cabin, north-east past the fields.

A steady hand can put it back at the workshop bench.

Bullets don't kill him. Nothing kills him. But he KNEELS.

\u2014 old man Grothe`},{id:"note_farm",num:5,title:"Recipe Card \u2014 Farmhouse",text:`Sleeping tea: valerian, honey, and a prayer you don't believe in.

The children must not see the lantern pass the window.

If the lantern STOPS outside \u2014 put out the fire, and get under the floor.`},{id:"note_annex",num:6,title:"Charred Hymnal \u2014 Chapel Annex",text:`Brother Tomas scratched this before they took him:

THE FLAMES FEED IT. Three braziers, three calls. Light them and the well will give up what it swallowed.

God forgive us for what we buried with the bell.`},{id:"note_hunter",num:7,title:"Hunter's Warning",text:`Shot it twice at the treeline. It knelt. Then it stood. Then it was INSIDE my house.

Left the barrel in the rack. Moving to the chapel.

The gate key comes with the amulet \u2014 after the altar takes it back. Don't wear the thing. It whispers.`},{id:"note_cemetery",num:8,title:"Grave Marker \u2014 Unmarked Row",text:`Here lies the Shepherd of Hollow Vale, keeper of the bell, drowned in the well by his own flock.

We were starving. He promised a harvest. He kept his promise.

Do not let it ring again.

\u2014 the survivors of '43`},{id:"note_s1",num:9,title:"Letters from the Dead I",text:`...to whoever outlives us: the shed past the farm answers only to its numbers. Seven... three... the rest the ravens took...

We were going to burn it. We were going to burn all of it.

\u2014 A.`},{id:"note_s2",num:10,title:"Letters from the Dead II",text:`...one... nine. Four numbers, two lost. If you are reading this you already know the door I mean. Take what we hid and finish what we could not.

\u2014 M.`},{id:"note_s3",num:11,title:"Letters from the Dead III",text:`The salts bind what the bell unbinds. Three circles of salt at the old stones, after the amulet, before the gate. The village does not want your death. It wants permission to rest.

\u2014 the last letter of Father Abeln`}],Oe=(s,e,t,i,n,r)=>({id:s,type:e,pos:new M(t,i,n),label:r}),Ir=[Oe("pk_church_key","church_key",28,.5,-4.5,"Church Key"),Oe("pk_ammo_1","ammo_pistol",-19,.8,10.5,"Revolver Ammo"),Oe("pk_bandage_1","bandage",-27,.9,10,"Bandage"),Oe("pk_ammo_2","ammo_pistol",23,.8,16.5,"Revolver Ammo"),Oe("pk_battery_1","battery",8,.4,8.5,"Battery"),Oe("pk_pills_1","pills",-28.5,.8,11.5,"Sedative Pills"),Oe("pk_battery_2","battery",18.5,.4,-29,"Battery"),Oe("pk_ammo_3","ammo_pistol",3,1,-32.5,"Revolver Ammo"),Oe("pk_bandage_2","bandage",44.5,.8,-31,"Bandage"),Oe("pk_grenade_1","grenade",-5,.9,29,"Noise Grenade"),Oe("pk_ammo_4","ammo_pistol",27.5,1.1,-9.5,"Revolver Ammo"),Oe("pk_battery_3","battery",-40,.6,19,"Battery"),Oe("pk_grenade_2","grenade",21,.8,19.5,"Noise Grenade"),Oe("pk_ammo_5","ammo_pistol",-6.5,.9,-30,"Revolver Ammo"),Oe("pk_pills_2","pills",-33,.9,-43,"Sedative Pills"),Oe("pk_bandage_3","bandage",29,.5,-6.5,"Bandage"),Oe("pk_grenade_3","grenade",-44,.7,-34,"Noise Grenade"),Oe("pk_battery_4","battery",30,.5,24,"Battery"),Oe("pk_ammo_rifle_1","ammo_rifle",43,.8,-28.5,"Rifle Rounds"),Oe("pk_pills_3","pills",0,1.1,-35,"Sedative Pills"),Oe("pk_stock","rifle_stock",29.5,.5,-10.5,"Rifle Stock"),Oe("pk_barrel","rifle_barrel",46.5,.9,-29.5,"Rifle Barrel"),Oe("pk_herb_1","herb",-39,.6,21,"Nightshade Sprig"),Oe("pk_herb_2","herb",-35,.5,-38,"Nightshade Sprig"),Oe("pk_herb_3","herb",50,.5,6,"Nightshade Sprig"),Oe("nt_priest","note_priest",0,1.15,-34.2,"Read the letter"),Oe("nt_miller","note_miller",-22,.85,12.5,"Read the page"),Oe("nt_clinic","note_clinic",-25.2,.9,8.4,"Read the log"),Oe("nt_barn","note_barn",26.5,.5,-11,"Read the plank"),Oe("nt_farm","note_farm",23.5,.85,19.5,"Read the card"),Oe("nt_annex","note_annex",18,1.1,-30.4,"Read the hymnal"),Oe("nt_hunter","note_hunter",43,.9,-29.8,"Read the warning"),Oe("nt_cemetery","note_cemetery",-36.5,.7,-40,"Read the marker"),Oe("pk_iron_key","iron_key",-33,1,-38.8,"Iron Key"),Oe("pk_amulet","amulet",0,1.35,2,"Drowned Amulet"),Oe("nt_s1","note_s1",22.5,.85,16.5,"Read the letter"),Oe("nt_s2","note_s2",-33,.8,-36,"Read the letter"),Oe("nt_s3","note_s3",18,1.1,-29.5,"Read the letter"),Oe("pk_salt_1","salt",-40,.6,21,"Ritual Salt"),Oe("pk_salt_2","salt",45,.8,-28,"Ritual Salt"),Oe("pk_salt_3","salt",3,.5,6,"Ritual Salt"),Oe("pk_bottle_1","bottle",14,.4,30,"Bottle"),Oe("pk_bottle_2","bottle",-14,.4,-6,"Bottle"),Oe("pk_bottle_3","bottle",30,.4,12,"Bottle"),Oe("pk_bottle_4","bottle",-26,.4,-18,"Bottle"),Oe("pk_brick_1","brick",-8,.4,24,"Brick"),Oe("pk_brick_2","brick",20,.4,-20,"Brick"),Oe("pk_cloth_1","cloth",-27,.9,12.5,"Cloth"),Oe("pk_cloth_2","cloth",26,.5,-7,"Cloth"),Oe("pk_cloth_3","cloth",-4,.9,29.5,"Cloth"),Oe("pk_splint_1","splint",-28,.9,8,"Splint"),Oe("pk_battery_lith","battery_lith",44.5,.8,-31.5,"Lithium Cell"),Oe("pk_battery_nuc","battery_nuc",-44,.7,-34,"Experimental Cell"),Oe("pk_lockpick_1","lockpick",29.5,.5,-9,"Lockpick"),Oe("pk_camera_1","camera",0,1.15,-33,"Antique Camera"),Oe("pk_radio_1","radio",-5,.9,29,"Hand Radio"),Oe("pk_candle_1","candle",18.5,1,-29,"Candle"),Oe("pk_candle_2","candle",-20,.85,10,"Candle"),Oe("pk_torch_1","torch",-5,.9,30.5,"Torch"),Oe("pk_axe_1","axe",28,.5,-10,"Fire Axe"),Oe("pk_trinket_1","trinket",35.5,.6,-9,"Trinket"),Oe("pk_trinket_2","trinket",-40,.7,19.5,"Trinket"),Oe("pk_trinket_3","trinket",8,.6,8.5,"Trinket"),Oe("pk_cables_1","cables",2,.9,28,"Splice Cables")],Ru=new Set(["pk_iron_key","pk_amulet"]),di={ammo_pistol:11569726,ammo_rifle:9071150,bandage:14209732,pills:10473664,battery:8366296,grenade:12872250,herb:5933626,church_key:14206058,iron_key:13153370,amulet:9067231,rifle_stock:6965802,rifle_barrel:9080724,note_priest:13617067,note_miller:13617067,note_clinic:13617067,note_barn:13617067,note_farm:13617067,note_annex:13617067,note_hunter:13617067,note_cemetery:13617067,note_s1:13617067,note_s2:13617067,note_s3:13617067,salt:12572864,bottle:8366264,brick:9067074,cloth:14209732,splint:13153418,battery_lith:10475760,battery_nuc:9437096,lockpick:12105928,camera:9071178,radio:6969914,candle:15259816,torch:12876346,axe:10111546,trinket:14202970,cables:9080724,master_key:14202970},Sc=new Set(["note_priest","note_miller","note_clinic","note_barn","note_farm","note_annex","note_hunter","note_cemetery","note_s1","note_s2","note_s3"]),Cp=["note_s1","note_s2","note_s3"],wc=class{constructor(e,t){this.state={stage:0,braziersLit:[],picked:[],notesRead:[],rifleCrafted:!1,doctorDone:!1,whisperReward:!1,gateOpen:!1,shepherdActive:!1,lettersFound:[],shedOpen:!1,ritualDone:!1,salts:0,codeKnown:!1};this.pickupMeshes=new Map;this.rnd=$i(555);this.amuletSpawned=!1;this.wellAnimating=0;this.localPlayerRef=null;if(this.world=e,this.hooks=t,!Ir.some(i=>i.id==="pk_master_key")){let n=[{id:"well",pos:new M(.9,.6,3.2)},{id:"miller",pos:new M(-21,.85,14)},{id:"silo",pos:new M(35.5,.6,-9)}][Math.floor(this.rnd()*3)];Ir.push({id:"pk_master_key",type:"master_key",pos:n.pos,label:"Master Key"})}this.buildPickups(),this.wireWorld()}buildPickups(){let e=new ue({map:At("paper"),roughness:.9});for(let t of Ir){let i=new xt;if(Sc.has(t.type)){let r=new Q(new at(.3,.02,.4),e);i.add(r)}else if(t.type==="church_key"||t.type==="iron_key"||t.type==="master_key"){let r=new ue({color:di[t.type]||14202970,metalness:.6,roughness:.4}),o=new Q(new at(.04,.04,.26),r);o.position.z=.06;let a=new Q(new an(.07,.02,6,12),r);a.position.z=-.1;let l=new Q(new at(.03,.09,.05),r);l.position.set(0,-.05,.16),i.add(o,a,l),t.type==="master_key"&&i.add(new Zt(14202970,.7,2.5))}else if(t.type==="amulet"){let r=new ue({color:di[t.type],metalness:.7,roughness:.3,emissive:3807850,emissiveIntensity:.6});i.add(new Q(new an(.11,.03,8,16),r));let o=new Q(new Jt(.05,8,8),new ue({color:1706538,emissive:6957823,emissiveIntensity:1}));o.position.z=.09,i.add(o)}else if(t.type==="herb"){let r=new ue({color:di[t.type],roughness:1});for(let o=0;o<3;o++){let a=new Q(new hi(.03,.18,5),r);a.position.set((this.rnd()-.5)*.12,.09,(this.rnd()-.5)*.12),a.rotation.z=(this.rnd()-.5)*.8,i.add(a)}}else if(t.type==="salt"){let r=new ue({color:di.salt,roughness:.9}),o=new Q(new Jt(.11,8,6),r);o.scale.set(1,.75,1);let a=new Q(new je(.03,.045,.05,6),new ue({color:9075290}));a.position.y=.09,i.add(o,a)}else if(t.type==="bottle"){let r=new ue({color:di.bottle,roughness:.25,metalness:.1}),o=new Q(new je(.06,.07,.2,8),r),a=new Q(new je(.025,.035,.09,8),r);a.position.y=.14,i.add(o,a)}else if(t.type==="brick")i.add(new Q(new at(.22,.09,.11),new ue({color:di.brick,roughness:.95})));else if(t.type==="cloth")i.add(new Q(new at(.26,.05,.2),new ue({color:di.cloth,roughness:1})));else if(t.type==="splint"){let r=new ue({color:di.splint,roughness:.9}),o=new Q(new je(.012,.012,.24,5),r),a=new Q(new je(.012,.012,.24,5),r);a.position.x=.05;let l=new Q(new an(.035,.012,6,10),new ue({color:11575440}));l.position.y=.02,l.rotation.x=Math.PI/2,i.add(o,a,l)}else if(t.type==="battery_lith"||t.type==="battery_nuc"){let r=t.type==="battery_lith"?3836632:3856490,o=new Q(new at(.12,.2,.12),new ue({color:di[t.type],roughness:.5,metalness:.3})),a=new Q(new at(.125,.04,.125),new ue({color:r,emissive:r,emissiveIntensity:1}));a.position.y=.05,i.add(o,a)}else if(t.type==="lockpick"){let r=new ue({color:di.lockpick,metalness:.85,roughness:.3}),o=new Q(new at(.02,.02,.24),r),a=new Q(new at(.02,.02,.24),r);o.rotation.y=-Math.PI/2.4,a.rotation.y=Math.PI/2.4,i.add(o,a)}else if(t.type==="camera"){let r=new Q(new at(.2,.14,.1),new ue({color:di.camera,roughness:.7})),o=new Q(new je(.05,.05,.06,10),new ue({color:2236966,roughness:.3,metalness:.5}));o.rotation.x=Math.PI/2,o.position.z=.08,i.add(r,o)}else if(t.type==="radio"){let r=new Q(new at(.16,.1,.06),new ue({color:di.radio,roughness:.8})),o=new Q(new zn(.03,10),new ue({color:14202970,emissive:14202970,emissiveIntensity:.8}));o.position.set(.03,.02,.032),i.add(r,o)}else if(t.type==="candle"){let r=new Q(new je(.045,.05,.16,8),new ue({color:di.candle,roughness:.6})),o=new Q(new hi(.02,.06,6),new Rt({color:16758858}));o.position.y=.11,i.add(r,o)}else if(t.type==="torch"){let r=new Q(new je(.02,.025,.3,6),new ue({color:di.torch,roughness:.9})),o=new Q(new Jt(.05,8,6),new Rt({color:16747050}));o.position.y=.18,i.add(r,o)}else if(t.type==="axe"){let r=new Q(new je(.018,.022,.34,6),new ue({color:6965802,roughness:.9})),o=new Q(new at(.12,.08,.03),new ue({color:di.axe,metalness:.6,roughness:.35}));o.position.set(.05,.15,0),i.add(r,o)}else if(t.type==="trinket")i.add(new Q(new an(.06,.02,6,12),new ue({color:di.trinket,metalness:.9,roughness:.25})));else if(t.type==="cables"){let r=new Q(new an(.09,.02,6,14),new ue({color:di.cables,roughness:.6})),o=new Q(new at(.03,.03,.03),new ue({color:12597288}));o.position.set(.09,.03,0);let a=new Q(new at(.03,.03,.03),new ue({color:1710618}));a.position.set(-.09,-.03,0),i.add(r,o,a)}else{let r=new ue({color:di[t.type]||11184810,roughness:.6,metalness:t.type.startsWith("ammo")?.4:.1}),o=new Q(new at(.22,.16,.16),r);if(i.add(o),t.type.startsWith("ammo"))for(let a=0;a<3;a++){let l=new Q(new je(.018,.018,.09,6),new ue({color:13214282,metalness:.7,roughness:.35}));l.position.set(-.06+a*.06,.12,0),i.add(l)}}i.position.copy(t.pos),i.visible=!Ru.has(t.id),this.world.root.add(i),this.pickupMeshes.set(t.id,i);let n={id:t.id,pos:t.pos.clone(),radius:2.1,prompt:Sc.has(t.type)?t.label:"Take "+t.label,enabled:!Ru.has(t.id),once:!0,highlight:i,onInteract:()=>this.takePickup(t.id)};this.world.interactables.push(n),Ru.has(t.id)&&(n.used=!0)}}takePickup(e){let t=Ir.find(n=>n.id===e);if(!t||this.state.picked.includes(e))return;this.state.picked.push(e);let i=this.pickupMeshes.get(e);if(i&&(i.visible=!1),this.disableInteractable(e),Sc.has(t.type)){let n=Lr.find(r=>r.id===t.type);n&&(this.state.notesRead.includes(t.type)||this.state.notesRead.push(t.type),this.hooks.onNoteRead(n),this.checkWhispers(),this.checkPriestNote(t.type)),Cp.includes(t.type)&&(this.state.lettersFound.includes(t.type)||this.state.lettersFound.push(t.type),!this.state.codeKnown&&this.state.lettersFound.includes("note_s1")&&this.state.lettersFound.includes("note_s2")&&(this.state.codeKnown=!0,this.hooks.message("You remember the numbers: 7 3 1 9",!0))),this.hooks.onPickup(e,t.type);return}switch(this.hooks.onPickup(e,t.type),t.type){case"church_key":this.hooks.message("Church Key acquired",!0),this.setStage(1);break;case"iron_key":this.hooks.message("Iron Key acquired",!0),this.setStage(5);break;case"amulet":this.hooks.message("The Drowned Amulet",!0),this.setStage(4);break;case"rifle_stock":this.hooks.message("Rifle Stock acquired");break;case"rifle_barrel":this.hooks.message("Rifle Barrel acquired");break;case"herb":{let n=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(r=>this.state.picked.includes(r)).length;this.hooks.message(`Nightshade (${n}/3)`);break}case"salt":{this.state.salts++,this.hooks.message(`Ritual Salt (${this.state.salts}/3)`);break}case"master_key":this.hooks.message("The Master Key \u2014 it fits every locked thing in the vale",!0),this.hooks.netEmit("give",{items:{master_key:1}});break;case"camera":this.hooks.message("Antique Camera acquired \u2014 press I to raise it");break;case"radio":this.hooks.message("Hand Radio acquired \u2014 press U to listen");break;case"torch":this.hooks.message("Torch acquired \u2014 press 5");break;case"axe":this.hooks.message("Fire Axe acquired \u2014 press 4");break;case"bottle":case"brick":this.hooks.message("Throwable acquired \u2014 press G");break;case"candle":this.hooks.message("Candle acquired \u2014 press T to place");break;case"cloth":this.hooks.message("Cloth acquired");break;case"splint":this.hooks.message("Splint acquired");break;case"battery_lith":this.hooks.message("Lithium Cell acquired");break;case"battery_nuc":this.hooks.message("Experimental Cell acquired");break;case"lockpick":this.hooks.message("Lockpick acquired");break;case"trinket":this.hooks.message("Trinket acquired \u2014 the peddler pays for these");break;case"cables":this.hooks.message("Splice Cables acquired \u2014 use X near water");break;default:break}}checkPriestNote(e){e==="note_priest"&&this.state.stage===1&&(this.setStage(2),this.hooks.subtitle("Three flames. Three calls. The braziers wait in the houses.",6))}checkWhispers(){this.state.whisperReward||this.state.notesRead.length>=Lr.length&&(this.state.whisperReward=!0,this.hooks.message("All whispers collected: Revolver Ammo +6, Pills +2",!0),this.hooks.subtitle("The last page reveals the gate-ward sigil. The village finally rests.",6),this.hooks.netEmit("give",{items:{ammo_pistol:6,pills:2}}))}wireWorld(){let e=new Map;for(let o of this.world.interactables)e.set(o.id,o);for(let[o,a]of this.world.doors){let l=e.get("door_"+o);l&&(l.prompt=a.locked?"Locked \u2014 needs a key":"Open door",l.onInteract=()=>this.useDoor(o))}for(let o of this.world.braziers){let a=e.get(o.id);a&&(a.onInteract=()=>this.lightBrazier(o.id))}let t=e.get("well_crank");t&&(t.onInteract=()=>this.useWell());let i=e.get("cemetery_altar");i&&(i.onInteract=()=>this.useAltar());let n=e.get("forest_gate");n&&(n.onInteract=()=>this.useGate()),this.world.interactables.push({id:"workbench",pos:new M(-4,.9,28.4),radius:2.6,prompt:"Use workbench",enabled:!0,onInteract:()=>this.useWorkbench()}),this.world.interactables.push({id:"mortar",pos:new M(-25.2,.9,8),radius:2.6,prompt:"Use mortar",enabled:!0,onInteract:()=>this.useMortar()});let r=this.ritualSpot();r&&this.world.interactables.push({id:"ritual_circle",pos:r.clone().setY(.6),radius:2.8,prompt:"Perform the ritual",enabled:!0,onInteract:()=>this.useRitual()})}useDoor(e){var i;let t=this.world.doors.get(e);if(t){if(t.locked){if(e==="church"&&((((i=this.localPlayerRef)==null?void 0:i.inv.church_key)||0)>0?(t.locked=!1,this.hooks.message("Unlocked the church",!0),this.openDoor(e)):this.hooks.subtitle("Locked. The keyhole is cold iron. The key is somewhere in the barn.",4)),e==="shed"){this.state.codeKnown?(t.locked=!1,this.state.shedOpen=!0,this.hooks.message("The combination turns \u2014 7319 accepted",!0),this.openDoor("shed"),this.hooks.netEmit("shed",{open:!0})):this.hooks.subtitle("A combination lock. Four digits. The letters might remember.",4);return}if(e==="barn_storage"||e==="clinic_back"){this.localPlayerRef&&this.localPlayerRef.inv.lockpick>0?(t.locked=!1,this.hooks.message("The pick springs the lock"),this.openDoor(e),this.hooks.netEmit("door",{id:e,open:!0})):this.hooks.subtitle("Locked \u2014 a thin pick could open this.",4);return}return}t.open?this.closeDoor(e):this.openDoor(e)}}openDoor(e){let t=this.world.doors.get(e);if(!t||t.open)return;t.open=!0,t.pivot.rotation.y=-Math.PI*.55;let i=this.world.colliders.indexOf(t.collider);i>=0&&this.world.colliders.splice(i,1),this.hooks.onNoise(t.pivot.position,11),this.hooks.netEmit("door",{id:e,open:!0})}closeDoor(e){let t=this.world.doors.get(e);!t||!t.open||(t.open=!1,t.pivot.rotation.y=0,this.world.colliders.push(t.collider),this.hooks.onNoise(t.pivot.position,9),this.hooks.netEmit("door",{id:e,open:!1}))}lightBrazier(e){let t=this.world.braziers.find(n=>n.id===e);if(!t||t.lit)return;if(this.state.stage<2){this.hooks.subtitle("The coals are dead. Something must call the flame first.",4);return}t.lit=!0,this.state.braziersLit.push(e);let i=new Zt(16742938,16,14,1.6);i.position.copy(t.pos3).add(new M(0,.6,0)),this.world.root.add(i),t.light=i,t.flame.material=new Rt({color:16747050}),t.flame.scale.setScalar(1.4),this.hooks.onNoise(t.pos3,34),this.hooks.netEmit("brazier",{id:e}),this.hooks.message(`Brazier lit (${this.state.braziersLit.length}/3)`,!0),this.state.braziersLit.length>=3&&this.state.stage===2&&(this.setStage(3),this.hooks.subtitle("A bell tolls far away. The well is calling something up.",6))}useWell(){if(this.wellAnimating>0)return;if(this.state.stage<3){this.hooks.subtitle("The rope is frozen in the crank. Nothing answers your pull.",4);return}if(this.amuletSpawned){this.hooks.subtitle("The well is quiet now. What it held is already in your hands.",4);return}this.wellAnimating=3,this.hooks.subtitle("The crank groans... the rope strains... something heavy rises.",5),this.hooks.onNoise(this.world.wellBucket?this.world.wellBucket.position:new M(0,0,2),42),this.hooks.netEmit("well",{});let e=performance.now(),t=()=>{let i=(performance.now()-e)/1e3;if(this.world.wellBucket&&this.world.wellRope){let n=i/2.4,r=n<.55?.5-n*2.6:.5-(1.1-n*2)*2.6+(n-.55)*5.2;this.world.wellBucket.position.y=Math.max(.45,Math.min(r,1.8)),this.world.wellRope.scale.y=F_(1-this.world.wellBucket.position.y*.45,.15,1),this.world.wellRope.position.y=1.4+(2-2*this.world.wellRope.scale.y)/2}if(i<2.6)requestAnimationFrame(t);else if(!this.state.picked.includes("pk_amulet")){let n=this.pickupMeshes.get("pk_amulet");n&&(n.visible=!0),this.enableInteractable("pk_amulet"),this.hooks.subtitle("The amulet gleams at the lip of the well.",5)}};requestAnimationFrame(t)}useAltar(){var e;if(this.state.stage<4){this.hooks.subtitle("The altar is cold stone. It wants what drowned.",4);return}if(!this.state.picked.includes("pk_amulet")&&!((e=this.localPlayerRef)!=null&&e.inv.amulet)){this.hooks.subtitle("You need the amulet.",3);return}if(this.localPlayerRef&&(this.localPlayerRef.inv.amulet=0),this.state.picked.includes("pk_iron_key"))this.hooks.subtitle("The stone is still warm.",3);else{let t=this.world.interactables.find(n=>n.id==="cemetery_altar");t&&(t.used=!0,t.enabled=!1),this.enableInteractable("pk_iron_key");let i=this.pickupMeshes.get("pk_iron_key");i&&(i.visible=!0),this.hooks.subtitle("The amulet sinks into the stone. An iron key rises from the grave dirt.",6),this.hooks.onNoise(new M(-33,1,-41),46),this.hooks.netEmit("altar",{})}}useGate(){if(this.state.gateOpen)return;if(this.state.stage<5||!(this.localPlayerRef&&this.localPlayerRef.inv.iron_key>0)){this.hooks.subtitle("Locked. A sigil of three flames is carved above the keyhole.",4);return}this.state.gateOpen=!0,this.setStage(6),this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let e=this.world.colliders.find(t=>t.minX>-3&&t.maxX<3&&t.minZ>54&&t.maxZ<56);if(e){let t=this.world.colliders.indexOf(e);t>=0&&this.world.colliders.splice(t,1)}this.hooks.message("The gate is open \u2014 RUN.",!0),this.hooks.onNoise(new M(0,1,55),40),this.hooks.netEmit("gate",{})}useWorkbench(){if(this.state.rifleCrafted){this.hooks.subtitle("The bench is picked clean.",3);return}let e=this.state.picked.includes("pk_stock"),t=this.state.picked.includes("pk_barrel");e&&t?(this.state.rifleCrafted=!0,this.hooks.netEmit("craft",{what:"rifle"}),this.hooks.message("Hunter's Rifle crafted",!0),this.hooks.subtitle("The old rifle clicks together. Heavy. Hungry.",5),this.hooks.onNoise(new M(-4,1,28.4),22)):this.hooks.subtitle(`Missing parts. Stock ${e?"\u2713":"\u2717"} \u2014 Barrel ${t?"\u2713":"\u2717"}`,4)}ritualSpot(){return this.world.ritualPos||null}useRitual(){var e;if(this.state.ritualDone){this.hooks.subtitle("The stones are warm. It is done.",4);return}if(this.state.stage<5){this.hooks.subtitle("The circle is inert. Finish the unmaking first.",4);return}if(this.state.salts<3){this.hooks.subtitle(`You need three circles of salt (${this.state.salts}/3).`,4);return}this.state.ritualDone=!0,this.hooks.netEmit("ritual",{}),this.hooks.message("THE VILLAGE EXHALES \u2014 THE CURSE IS UNBOUND",!0),this.hooks.subtitle("The bell will not call for you again. Walk out of Hollow Vale a free soul.",8),this.hooks.onNoise((e=this.ritualSpot())!=null?e:new M(0,1,0),30),this.hooks.netEmit("give",{items:{pills:2}})}useMortar(){if(this.state.doctorDone){this.hooks.subtitle("The mortar smells of bitter leaves.",3);return}let e=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(t=>this.state.picked.includes(t)).length;e>=3?(this.state.doctorDone=!0,this.hooks.netEmit("craft",{what:"remedy"}),this.hooks.message("Doctor's Remedy: Pills +3, Bandages +2",!0),this.hooks.subtitle("The tincture settles your hands. For now.",5),this.hooks.netEmit("give",{items:{pills:3,bandage:2}})):this.hooks.subtitle(`Nightshade sprigs: ${e}/3. Greenhouse, cemetery, forest edge.`,4)}disableInteractable(e){let t=this.world.interactables.find(i=>i.id===e);t&&(t.enabled=!1,t.used=!0)}enableInteractable(e){let t=this.world.interactables.find(i=>i.id===e);t&&(t.enabled=!0,t.used=!1)}setStage(e){e<=this.state.stage||(this.state.stage=e,this.hooks.onStage(e),this.hooks.netEmit("stage",{stage:e}))}applyRemote(e,t){switch(e){case"pickup":{let i=t.id;if(!this.state.picked.includes(i)){this.state.picked.push(i);let n=this.pickupMeshes.get(i);n&&(n.visible=!1),this.disableInteractable(i);let r=Ir.find(o=>o.id===i);r&&Sc.has(r.type)&&!this.state.notesRead.includes(r.type)&&this.state.notesRead.push(r.type),r&&Cp.includes(r.type)&&!this.state.lettersFound.includes(r.type)&&this.state.lettersFound.push(r.type)}break}case"door":{let i=this.world.doors.get(t.id);if(i){i.open=t.open,i.pivot.rotation.y=i.open?-Math.PI*.55:0;let n=this.world.colliders.indexOf(i.collider);i.open&&n>=0&&this.world.colliders.splice(n,1),!i.open&&n<0&&this.world.colliders.push(i.collider)}break}case"brazier":{let i=this.world.braziers.find(n=>n.id===t.id);if(i&&!i.lit){i.lit=!0,this.state.braziersLit.includes(i.id)||this.state.braziersLit.push(i.id);let n=new Zt(16742938,16,14,1.6);n.position.copy(i.pos3).add(new M(0,.6,0)),this.world.root.add(n),i.light=n,i.flame&&(i.flame.material=new Rt({color:16747050}),i.flame.scale.setScalar(1.4))}break}case"stage":this.state.stage=Math.max(this.state.stage,t.stage);break;case"well":{if(!this.state.picked.includes("pk_amulet")&&!this.amuletSpawned){this.amuletSpawned=!0;let i=this.pickupMeshes.get("pk_amulet");i&&(i.visible=!0),this.enableInteractable("pk_amulet")}break}case"altar":{if(!this.state.picked.includes("pk_iron_key")){let i=this.pickupMeshes.get("pk_iron_key");i&&(i.visible=!0),this.enableInteractable("pk_iron_key")}break}case"gate":{this.state.gateOpen=!0,this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let i=this.world.colliders.find(n=>n.minX>-3&&n.maxX<3&&n.minZ>54&&n.maxZ<56);if(i){let n=this.world.colliders.indexOf(i);n>=0&&this.world.colliders.splice(n,1)}break}case"shed":{this.state.shedOpen=!0;let i=this.world.doors.get("shed");if(i){i.locked=!1,i.open=!0,i.pivot.rotation.y=-Math.PI*.55;let n=this.world.colliders.indexOf(i.collider);n>=0&&this.world.colliders.splice(n,1)}break}case"ritual":this.state.ritualDone=!0;break;case"craft":{t.what==="rifle"&&(this.state.rifleCrafted=!0),t.what==="remedy"&&(this.state.doctorDone=!0);break}}}giveToPlayer(e,t){for(let[i,n]of Object.entries(t))e.inv[i]=(e.inv[i]||0)+n}update(e){for(let[t,i]of this.pickupMeshes)i.visible&&(i.rotation.y+=e*1.4,i.position.y=Ir.find(n=>n.id===t).pos.y+Math.sin(performance.now()*.002+i.position.x)*.06);for(let t of this.world.braziers)t.lit&&t.light&&(t.light.intensity=14+Math.sin(performance.now()*.011+t.pos3.x)*3.5),t.lit&&t.flame&&(t.flame.scale.y=1.3+Math.sin(performance.now()*.013+t.pos3.z)*.25)}objectiveText(){let e=this.state.stage,t=["Find the church key in the old barn (east)","Unlock the church and read the priest\u2019s letter",`Light the three braziers (${this.state.braziersLit.length}/3) \u2014 Miller\u2019s, Farmhouse, Annex`,"Crank the well and take what rises","Place the amulet on the cemetery altar (north-west)","Open the forest gate (south) and escape","Escape through the forest gate"],i=[];if(!this.state.rifleCrafted){let n=this.state.picked.includes("pk_stock")?1:0,r=this.state.picked.includes("pk_barrel")?1:0;i.push(`The Hunter\u2019s Rifle: stock ${n}/1, barrel ${r}/1 \u2192 workbench`)}if(!this.state.doctorDone){let n=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(r=>this.state.picked.includes(r)).length;i.push(`Doctor\u2019s Remedy: nightshade ${n}/3 \u2192 clinic mortar`)}return this.state.whisperReward||i.push(`Whispers of the Dead: notes ${this.state.notesRead.length}/${Lr.length}`),this.state.lettersFound.length<3&&i.push(`Letters from the Dead: ${this.state.lettersFound.length}/3`),this.state.shedOpen||i.push(`The Locked Shed: ${this.state.codeKnown?"dial in 7319":"find the four digits in the letters"}`),!this.state.ritualDone&&(this.state.salts>0||e>=5)&&i.push(`The Old Stones: salt circles ${this.state.salts}/3`),{main:t[Math.min(e,t.length-1)],sides:i}}getQuestLog(){let e=this.state,t=["The Key in the Barn","The Church of the Backwards Bell","Three Flames","What the Well Swallowed","The Unmaking","Run for the Gate"],i=["Find the church key in the old barn (east)","Unlock the church and read the priest's letter",`Light the three braziers (${e.braziersLit.length}/3) \u2014 Miller's, Farmhouse, Annex`,"Crank the well and take what rises","Place the amulet on the cemetery altar (north-west)",e.stage>=6?"Escape through the forest gate":"Open the forest gate (south) and escape"],n=t.map((l,c)=>({id:"m"+(c+1),title:l,desc:i[c],done:e.stage>c,active:e.stage===c,side:!1})),r=e.picked.includes("pk_stock")?1:0,o=e.picked.includes("pk_barrel")?1:0,a=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(l=>e.picked.includes(l)).length;return n.push({id:"s_rifle",title:"The Hunter's Rifle",desc:`stock ${r}/1, barrel ${o}/1 \u2192 workbench`,done:e.rifleCrafted,active:!e.rifleCrafted,side:!0}),n.push({id:"s_remedy",title:"Doctor's Remedy",desc:`nightshade ${a}/3 \u2192 clinic mortar`,done:e.doctorDone,active:!e.doctorDone,side:!0}),n.push({id:"s_whispers",title:"Whispers of the Dead",desc:`notes ${e.notesRead.length}/${Lr.length}`,done:e.whisperReward,active:!e.whisperReward,side:!0}),n.push({id:"s_letters",title:"Letters from the Dead",desc:`${e.lettersFound.length}/3 found`,done:e.lettersFound.length>=3,active:e.lettersFound.length<3,side:!0}),n.push({id:"s_shed",title:"The Locked Shed",desc:e.codeKnown?"You know the numbers \u2014 7319":"Find the four digits in the letters",done:e.shedOpen,active:!e.shedOpen,side:!0}),n.push({id:"s_ritual",title:"The Old Stones",desc:`Salt circles ${e.salts}/3 at the old stones`,done:e.ritualDone,active:!e.ritualDone,side:!0}),n}currentTarget(){let e=this.state.stage;if(e===0)return{x:28,z:-8,label:"Old barn"};if(e===1)return{x:0,z:-25,label:"The church"};if(e===2){let t=this.world.braziers.find(i=>!i.lit);return t?{x:t.pos3.x,z:t.pos3.z,label:"Brazier"}:null}return e===3?{x:0,z:2,label:"The well"}:e===4?{x:-33,z:-41,label:"The altar"}:e===5||e===6?{x:0,z:55,label:"The gate"}:null}serialize(){return ti({},this.state)}restore(e){Object.assign(this.state,e),this.state.lettersFound=this.state.lettersFound||[],this.state.salts=this.state.salts||0,this.state.codeKnown=!!this.state.codeKnown,this.state.shedOpen=!!this.state.shedOpen,this.state.ritualDone=!!this.state.ritualDone;for(let i of this.state.picked){let n=this.pickupMeshes.get(i);n&&(n.visible=!1),this.disableInteractable(i)}for(let i of this.state.braziersLit){let n=this.world.braziers.find(r=>r.id===i);if(n&&!n.lit){n.lit=!0;let r=new Zt(16742938,16,14,1.6);r.position.copy(n.pos3).add(new M(0,.6,0)),this.world.root.add(r),n.light=r,n.flame&&(n.flame.material=new Rt({color:16747050}),n.flame.scale.setScalar(1.4))}}this.state.gateOpen&&this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let t=this.world.doors.get("church")}};function F_(s,e,t){return Math.min(t,Math.max(e,s))}var B_=`
#hv-root { position: fixed; inset: 0; z-index: 50; font-family: 'Courier New', monospace; color: #cfc9bd; overflow: hidden; user-select: none; -webkit-user-select: none; touch-action: none; }
#hv-root * { box-sizing: border-box; }
#hv-root canvas { position: absolute; inset: 0; width: 100% !important; height: 100% !important; }
.hv-screen { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(ellipse at 50% 40%, rgba(10,8,6,0.88), rgba(2,2,3,0.97)); z-index: 20; }
.hv-hidden { display: none !important; }
.hv-title { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(42px, 9vw, 96px); letter-spacing: 0.18em; color: #b8b2a4; text-shadow: 0 0 24px rgba(160,20,20,0.35), 0 2px 0 #000; margin: 0; }
.hv-title .red { color: #8f1d1d; }
.hv-sub { letter-spacing: 0.35em; font-size: clamp(10px, 1.6vw, 14px); color: #6f695e; margin-top: 6px; text-transform: uppercase; }
.hv-btn { font-family: inherit; display: block; width: min(320px, 78vw); margin: 7px 0; padding: 13px 18px; background: rgba(18,14,12,0.82); border: 1px solid #3a332c; color: #c8c1b2; font-size: 15px; letter-spacing: 0.14em; cursor: pointer; text-transform: uppercase; transition: all 0.15s; text-align: center; }
.hv-btn:hover { border-color: #8f1d1d; color: #e8e0cf; background: rgba(40,16,14,0.6); box-shadow: 0 0 18px rgba(143,29,29,0.25); }
.hv-btn.primary { border-color: #5a1515; background: rgba(50,14,12,0.55); }
.hv-btn:disabled { opacity: 0.4; cursor: default; }
.hv-input { font-family: inherit; display: block; width: min(320px, 78vw); margin: 6px 0; padding: 12px 14px; background: rgba(8,7,6,0.9); border: 1px solid #3a332c; color: #d8d0be; font-size: 15px; letter-spacing: 0.08em; outline: none; }
.hv-input:focus { border-color: #6a5a3a; }
.hv-panel { background: rgba(10,9,8,0.92); border: 1px solid #2e2924; padding: 22px 26px; width: min(560px, 92vw); max-height: 82vh; overflow-y: auto; }
.hv-h2 { font-family: Georgia, serif; letter-spacing: 0.2em; font-size: 20px; color: #a89f8c; margin: 0 0 14px; text-transform: uppercase; border-bottom: 1px solid #2e2924; padding-bottom: 10px; }
.hv-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 10px 0; font-size: 13px; }
.hv-row label { color: #8f887a; letter-spacing: 0.08em; }
.hv-select, .hv-range { accent-color: #8f1d1d; }
.hv-select { font-family: inherit; background: #14100d; color: #cfc7b5; border: 1px solid #3a332c; padding: 7px 10px; }
.hv-note-text { white-space: pre-wrap; font-family: Georgia, serif; font-size: 16px; line-height: 1.75; color: #3a3226; background: #c9bfa4; padding: 26px 28px; width: min(560px, 92vw); max-height: 70vh; overflow-y: auto; box-shadow: 0 12px 60px rgba(0,0,0,0.8); transform: rotate(-0.4deg); }
.hv-note-title { font-family: Georgia, serif; font-size: 22px; margin-bottom: 14px; border-bottom: 1px solid #8a7f66; padding-bottom: 8px; }
.hv-kbd { display:inline-block; min-width: 26px; text-align:center; border: 1px solid #4a443a; border-radius: 3px; padding: 2px 7px; margin-right: 8px; color: #d8cfb8; background: #17130f; font-size: 12px; }
/* HUD */
#hv-hud { position: absolute; inset: 0; pointer-events: none; z-index: 10; }
#hv-objective { position: absolute; top: 14px; left: 16px; max-width: 340px; }
#hv-objective .main { font-size: 14px; color: #d8cfae; text-shadow: 0 1px 3px #000; letter-spacing: 0.06em; }
#hv-objective .main::before { content: '\u25C6 '; color: #8f1d1d; }
#hv-objective .side { font-size: 11px; color: #7d766a; margin-top: 4px; text-shadow: 0 1px 3px #000; }
#hv-objective .side::before { content: '\xB7 '; }
#hv-vitals { position: absolute; left: 16px; bottom: 16px; width: 190px; }
.hv-bar { height: 8px; background: rgba(10,8,8,0.7); border: 1px solid #2e2822; margin-top: 6px; position: relative; }
.hv-bar > i { display: block; height: 100%; transition: width 0.2s; }
.hv-bar.hp > i { background: linear-gradient(90deg, #6a1414, #a82a2a); }
.hv-bar.st > i { background: #5a6a3a; }
.hv-bar.fe > i { background: #4a3a6a; }
.hv-bar.ba > i { background: #8a7a3a; }
.hv-vlabel { font-size: 9px; letter-spacing: 0.2em; color: #6f695e; margin-top: 7px; }
#hv-status { position: absolute; left: 16px; bottom: 150px; display: flex; flex-wrap: wrap; max-width: 46vw; }
.hv-st { display: inline-flex; gap: 4px; align-items: center; background: rgba(10,8,8,0.7); border: 1px solid #2e2822; padding: 3px 6px; margin-right: 5px; font-size: 10px; }
.hv-st svg { pointer-events: none; }
#hv-hotbar { position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; }
.hv-slot { width: 52px; height: 52px; border: 1px solid #2e2822; background: rgba(10,8,8,0.6); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #8f887a; position: relative; letter-spacing: 0.05em; text-align: center; }
.hv-slot.active { border-color: #8f1d1d; color: #d8cfae; box-shadow: 0 0 12px rgba(143,29,29,0.35); }
.hv-slot .cnt { position: absolute; bottom: 2px; right: 4px; font-size: 10px; color: #c8b47a; }
#hv-crosshair { position: absolute; left: 50%; top: 50%; width: 4px; height: 4px; margin: -2px; background: rgba(216,207,174,0.85); border-radius: 50%; box-shadow: 0 0 4px #000; }
#hv-prompt { position: absolute; left: 50%; bottom: 24%; transform: translateX(-50%); font-size: 14px; letter-spacing: 0.1em; color: #e0d7bf; text-shadow: 0 1px 4px #000; background: rgba(8,6,5,0.55); padding: 8px 16px; border: 1px solid rgba(90,80,60,0.4); }
#hv-subtitle { position: absolute; left: 50%; bottom: 13%; transform: translateX(-50%); width: min(680px, 86vw); text-align: center; font-family: Georgia, serif; font-size: clamp(14px, 2.2vw, 19px); color: #d8d0bc; text-shadow: 0 2px 6px #000, 0 0 20px rgba(0,0,0,0.9); font-style: italic; }
#hv-messages { position: absolute; left: 50%; top: 18%; transform: translateX(-50%); text-align: center; width: 80vw; }
.hv-msg { font-size: 15px; letter-spacing: 0.12em; color: #cfc4a4; text-shadow: 0 1px 4px #000; margin: 4px 0; animation: hvmsg 3.4s forwards; }
.hv-msg.big { font-family: Georgia, serif; font-size: 24px; color: #b8a888; letter-spacing: 0.2em; }
@keyframes hvmsg { 0% {opacity: 0; transform: translateY(8px);} 10% {opacity: 1; transform: none;} 78% {opacity: 1;} 100% {opacity: 0;} }
#hv-vignette { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at center, transparent 42%, rgba(60,0,0,0.55) 100%); opacity: 0; transition: opacity 0.4s; }
#hv-damage { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at center, transparent 30%, rgba(150,10,10,0.5) 100%); opacity: 0; }
#hv-blood { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.hv-splat { position: absolute; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(120,10,10,0.55), transparent 70%); }
#hv-teammates { position: absolute; top: 14px; right: 16px; text-align: right; }
.hv-mate { font-size: 11px; color: #9a9284; margin: 3px 0; text-shadow: 0 1px 3px #000; }
.hv-mate .mbar { display: inline-block; width: 60px; height: 5px; background: #221e1a; margin-left: 8px; vertical-align: middle; }
.hv-mate .mbar i { display: block; height: 100%; background: #7a4a2a; }
#hv-timer { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 20px; letter-spacing: 0.2em; color: #b8a888; text-shadow: 0 1px 4px #000; }
#hv-role { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.3em; color: #7a6f5c; text-transform: uppercase; }
#hv-compass { position: absolute; top: 66px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; }
#hv-compass .arrow { display: inline-block; width: 26px; height: 26px; line-height: 24px; text-align: center; border: 1px solid #3a332c; border-radius: 50%; background: rgba(10,8,8,0.6); color: #d8cfae; font-size: 15px; transition: transform 0.08s linear; }
#hv-compass .clabel { font-size: 11px; letter-spacing: 0.14em; color: #b8a888; text-shadow: 0 1px 4px #000; text-transform: uppercase; }
#hv-camframe { position: absolute; inset: 0; pointer-events: none; box-shadow: inset 0 0 140px rgba(0,0,0,0.8); }
#hv-camframe .cbr { position: absolute; width: 34px; height: 34px; border: 2px solid rgba(240,238,228,0.9); }
#hv-camframe .c1 { top: 18px; left: 18px; border-right: none; border-bottom: none; }
#hv-camframe .c2 { top: 18px; right: 18px; border-left: none; border-bottom: none; }
#hv-camframe .c3 { bottom: 18px; left: 18px; border-right: none; border-top: none; }
#hv-camframe .c4 { bottom: 18px; right: 18px; border-left: none; border-top: none; }
#hv-camframe .clabel { position: absolute; bottom: 12%; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.28em; color: rgba(240,238,228,0.9); text-shadow: 0 1px 4px #000; white-space: nowrap; }
/* touch */
#hv-touch { position: absolute; inset: 0; z-index: 12; pointer-events: none; }
#hv-touch .zone { position: absolute; pointer-events: auto; }
#hv-stick-base { position: absolute; width: 120px; height: 120px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.25); background: rgba(20,16,14,0.25); }
#hv-stick-nub { position: absolute; width: 52px; height: 52px; border-radius: 50%; background: rgba(180,168,145,0.3); border: 1px solid rgba(200,190,165,0.4); }
.hv-tbtn { position: absolute; width: 62px; height: 62px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.35); background: rgba(20,16,14,0.4); color: #cfc4a8; font-family: inherit; font-size: 10px; letter-spacing: 0.06em; display: flex; flex-direction: column; align-items: center; justify-content: center; pointer-events: auto; text-transform: uppercase; }
.hv-tbtn:active, .hv-tbtn.on { background: rgba(143,29,29,0.45); border-color: rgba(220,120,100,0.6); }
.hv-tbtn.small { width: 48px; height: 48px; font-size: 9px; }
.hv-tico { display: block; line-height: 0; }
.hv-tico svg { pointer-events: none; }
.hv-tbtn.hv-editing { border-color: rgba(216,178,90,0.7); cursor: move; }
.hv-tbtn.hv-sel { outline: 2px solid #d8b25a; outline-offset: 2px; z-index: 6; }
#hv-editbar { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); z-index: 30; display: flex; align-items: center; gap: 10px; pointer-events: auto; background: rgba(12,10,8,0.94); border: 1px solid #6a5a2a; padding: 8px 12px; font-size: 11px; letter-spacing: 0.08em; color: #d8c9a0; max-width: 94vw; flex-wrap: wrap; justify-content: center; }
#hv-editbar .hv-ebtn { width: auto; margin: 0; padding: 6px 12px; font-size: 10px; display: inline-block; }
#hv-edit-size { width: 110px; accent-color: #d8b25a; }
#hv-lookzone { position: absolute; right: 0; top: 0; width: 55%; height: 100%; pointer-events: auto; }
/* journal / quest log */
.hv-quest-row { padding: 9px 6px; border-bottom: 1px dashed #26221c; }
.hv-quest-row .qt { font-size: 14px; letter-spacing: 0.04em; }
.hv-quest-row .qd { font-size: 12px; color: #7d766a; margin-top: 3px; }
/* map */
#hv-root #hv-map-canvas { position: relative; inset: auto; width: min(460px, 86vw) !important; height: min(460px, 86vw) !important; border: 1px solid #2e2924; background: #1a1712; }
/* radio */
.hv-radio-readout { font-size: 36px; letter-spacing: 0.15em; color: #9ab05a; text-shadow: 0 0 18px rgba(120,180,60,0.35); }
#hv-radio-bars { display: flex; gap: 5px; justify-content: center; margin: 12px 0 4px; }
.hv-rbar { width: 20px; height: 24px; background: #1c1812; border: 1px solid #2e2822; }
.hv-rbar.lit { background: #7a9a3a; box-shadow: 0 0 8px rgba(130,170,60,0.5); }
#hv-radio-msg { font-family: 'Courier New', monospace; font-size: 13px; color: #7aa04a; min-height: 54px; margin-top: 12px; white-space: pre-wrap; text-align: left; background: rgba(14,18,10,0.5); border: 1px solid #242a1a; padding: 10px 12px; }
/* trade */
.hv-trade-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 9px 4px; border-bottom: 1px dashed #26221c; font-size: 13px; color: #a89f8c; }
.hv-tbuy { width: auto; margin: 0; padding: 6px 16px; font-size: 11px; display: inline-block; }
/* lobby */
#hv-lobby-code { font-family: Georgia, serif; font-size: 54px; letter-spacing: 0.3em; color: #d8c9a0; text-shadow: 0 0 30px rgba(160,130,60,0.4); margin: 8px 0; }
.hv-players { margin: 12px 0; width: 100%; }
.hv-player-row { display: flex; justify-content: space-between; padding: 8px 4px; border-bottom: 1px dashed #2a251f; font-size: 13px; color: #a89f8c; }
.hv-mode-tag { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #7a6a4a; border: 1px solid #3a3020; padding: 3px 10px; }
.hv-death { background: radial-gradient(ellipse at center, rgba(60,4,4,0.55), rgba(5,0,0,0.97)) !important; }
.hv-death .hv-title { color: #7a1212; font-size: clamp(50px, 10vw, 110px); }
.hv-fade { position: absolute; inset: 0; background: #000; z-index: 40; pointer-events: none; transition: opacity 0.6s; opacity: 0; }
.hv-halluc { position: absolute; inset: 0; pointer-events: none; z-index: 9; }
.hv-scan { position:absolute; inset:0; pointer-events:none; opacity:0.06; background: repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.9) 2px 3px); }
.hv-loadingbar { width: min(400px, 70vw); height: 3px; background: #1a1712; margin-top: 26px; }
.hv-loadingbar i { display: block; height: 100%; background: #8f1d1d; width: 0%; transition: width 0.3s; }
.hv-tip { margin-top: 14px; font-size: 11px; color: #5f594e; letter-spacing: 0.12em; }
::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #2e2822; } ::-webkit-scrollbar-track { background: transparent; }
`,H_=[[-58,14,40,14],[0,-25,0,55],[14,14,28,14],[28,14,28,-3],[0,14,22,14]],z_=[{label:"CHURCH",x:0,z:-30,w:15,h:10},{label:"BARN",x:28,z:-8,w:13,h:9},{label:"MILL",x:-20,z:12,w:10,h:8},{label:"FARM",x:22,z:18,w:12,h:9},{label:"ANNEX",x:18,z:-28,w:8,h:7},{label:"CLINIC",x:-28,z:10,w:10,h:8},{label:"WORK",x:-5,z:30,w:7,h:6},{label:"CABIN",x:45,z:-30,w:7,h:6}],Ip,Rc=class{constructor(e,t,i,n){this.screens={};this.bars={};this.barLabels={};this.subtitleTimer=0;this.touchEnabled=!1;this.sprintToggle=!1;this.onSprintToggle=null;this.lobbyListEl=null;this.lobbyStartBtn=null;this.lobbyModeEl=null;this.noteCloseCb=null;this.crouchToggle=!1;this.journalCloseCb=null;this.mapCloseCb=null;this.radioCloseCb=null;this.tradeBuyCb=null;this.tradeCloseCb=null;this.questListEl=null;this.tradeListEl=null;this.layout=(Ip=xp())!=null?Ip:{};this.touchBtns={};this.touchDefaults={};this.editMode=!1;this.editBar=null;this.editSlider=null;this.selectedBtn=null;this.mapCanvas=null;this.mapCtx=null;this.mapData=null;this.mapAcc=0;this.lastBearing=0;this.lastLabel="";this.compassOn=!1;this.lobbyCodeEl=null;this._returnScreen=null;this.cb=n,this.input=t,this._settings=i;let r=document.createElement("style");r.textContent=B_,document.head.appendChild(r),this.root=document.createElement("div"),this.root.id="hv-root",e.appendChild(this.root);let o=document.createElement("div");o.className="hv-scan",this.root.appendChild(o),this.hud=document.createElement("div"),this.hud.id="hv-hud",this.hud.classList.add("hv-hidden"),this.root.appendChild(this.hud);let a=document.createElement("div");a.id="hv-objective",this.objMain=document.createElement("div"),this.objMain.className="main",this.objSides=document.createElement("div"),this.objSides.className="side",a.append(this.objMain,this.objSides),this.hud.appendChild(a),this.teammatesEl=document.createElement("div"),this.teammatesEl.id="hv-teammates",this.hud.appendChild(this.teammatesEl),this.timerEl=document.createElement("div"),this.timerEl.id="hv-timer",this.timerEl.classList.add("hv-hidden"),this.hud.appendChild(this.timerEl),this.roleEl=document.createElement("div"),this.roleEl.id="hv-role",this.hud.appendChild(this.roleEl);let l=document.createElement("div");l.id="hv-vitals";let c=(h,d)=>{let u=document.createElement("div");u.className="hv-vlabel",u.textContent=d,this.barLabels[h]=u;let f=document.createElement("div");f.className="hv-bar "+h;let g=document.createElement("i");f.appendChild(g),this.bars[h]=g,l.append(u,f)};c("hp","VITALITY"),c("st","STAMINA"),c("fe","DREAD"),c("ba","TORCH"),this.hud.appendChild(l),this.statusEl=document.createElement("div"),this.statusEl.id="hv-status",this.statusEl.classList.add("hv-hidden"),this.hud.appendChild(this.statusEl),this.hotbarEl=document.createElement("div"),this.hotbarEl.id="hv-hotbar",this.hud.appendChild(this.hotbarEl),this.crosshair=document.createElement("div"),this.crosshair.id="hv-crosshair",this.hud.appendChild(this.crosshair),this.promptEl=document.createElement("div"),this.promptEl.id="hv-prompt",this.promptEl.classList.add("hv-hidden"),this.hud.appendChild(this.promptEl),this.subtitleEl=document.createElement("div"),this.subtitleEl.id="hv-subtitle",this.hud.appendChild(this.subtitleEl),this.messagesEl=document.createElement("div"),this.messagesEl.id="hv-messages",this.hud.appendChild(this.messagesEl),this.vignette=document.createElement("div"),this.vignette.id="hv-vignette",this.hud.appendChild(this.vignette),this.damageEl=document.createElement("div"),this.damageEl.id="hv-damage",this.hud.appendChild(this.damageEl),this.bloodEl=document.createElement("div"),this.bloodEl.id="hv-blood",this.hud.appendChild(this.bloodEl),this.compassEl=document.createElement("div"),this.compassEl.id="hv-compass",this.compassEl.classList.add("hv-hidden"),this.compassArrow=document.createElement("span"),this.compassArrow.className="arrow",this.compassArrow.textContent="\u2191",this.compassLabelEl=document.createElement("span"),this.compassLabelEl.className="clabel",this.compassEl.append(this.compassArrow,this.compassLabelEl),this.hud.appendChild(this.compassEl),this.camframeEl=document.createElement("div"),this.camframeEl.id="hv-camframe",this.camframeEl.classList.add("hv-hidden");for(let h=1;h<=4;h++){let d=document.createElement("div");d.className="cbr c"+h,this.camframeEl.appendChild(d)}this.camframeLabel=document.createElement("div"),this.camframeLabel.className="clabel",this.camframeEl.appendChild(this.camframeLabel),this.hud.appendChild(this.camframeEl),this.touchWrap=document.createElement("div"),this.touchWrap.id="hv-touch",this.root.appendChild(this.touchWrap),this.stickBase=document.createElement("div"),this.stickBase.id="hv-stick-base",this.stickNub=document.createElement("div"),this.stickNub.id="hv-stick-nub",this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"),this.touchWrap.append(this.stickBase,this.stickNub),this.bindTouch(i),this.buildEditBar(),this.fadeEl=document.createElement("div"),this.fadeEl.className="hv-fade",this.root.appendChild(this.fadeEl),this.buildMainScreen(i),this.buildMPScreen(i),this.buildLobbyScreen(),this.buildSettingsScreen(i),this.buildHelpScreen(),this.buildNoteScreen(),this.buildDeathScreen(),this.buildWinScreen(),this.buildPauseScreen(),this.buildLoadingScreen(),this.buildQuestLogScreen(),this.buildMapScreen(),this.buildRadioScreen(),this.buildTradeScreen()}screen(e,t){let i=document.createElement("div");return i.id="hv-"+e,i.className="hv-screen hv-hidden",t&&t.forEach(n=>i.appendChild(n)),this.root.appendChild(i),this.screens[e]=i,i}show(e){for(let t of Object.keys(this.screens))this.screens[t].classList.toggle("hv-hidden",t!==e);e&&this.input.exitLock()}buildMainScreen(e){let t=!!localStorage.getItem("hv_sp_v1"),i=document.createElement("div");i.style.textAlign="center";let n=document.createElement("h1");n.className="hv-title",n.innerHTML='HOLLOW <span class="red">VALE</span>';let r=document.createElement("div");r.className="hv-sub",r.textContent="they hear everything",i.append(n,r);let o=document.createElement("div");o.style.marginTop="34px";let a=Ct("New Game",()=>{this.cb.onStartSP(!1)},!0),l=Ct("Continue",()=>{this.cb.onStartSP(!0)},!1);t||l.classList.add("hv-hidden");let c=Ct("Multiplayer",()=>{this.show("mp")}),h=Ct("How to Play",()=>{this.show("help")}),d=Ct("Settings",()=>{this.show("settings")});o.append(a,l,c,h,d),i.appendChild(o);let u=document.createElement("div");u.style.cssText="position:absolute;bottom:12px;font-size:10px;letter-spacing:0.2em;color:#4a453c;",u.textContent="V1.0 \u2014 SURVIVE THE SHEPHERD",this.screen("menu",[i,u]),this.screens.menu.classList.remove("hv-hidden")}buildMPScreen(e){let t=document.createElement("div");t.className="hv-panel";let i=document.createElement("div");i.className="hv-h2",i.textContent="Multiplayer";let n=document.createElement("input");n.className="hv-input",n.placeholder="Your name",n.value=e.playerName!=="Survivor"?e.playerName:"",n.maxLength=14;let r=Ct("Create Room",()=>{let f=n.value.trim()||"Survivor";e.playerName=f,this.cb.onCreateRoom(f,this.screens.mp.dataset.mode||"coop")},!0),o=document.createElement("input");o.className="hv-input",o.placeholder="Room code (e.g. K7QF)",o.maxLength=6,o.style.textTransform="uppercase";let a=Ct("Join Room",()=>{let f=n.value.trim()||"Survivor";e.playerName=f,this.cb.onJoinRoom(f,o.value.trim().toUpperCase())}),l=document.createElement("div");l.className="hv-row";let c=document.createElement("label");c.textContent="Room mode (host)";let h=document.createElement("select");h.className="hv-select",h.innerHTML='<option value="coop">Co-op \u2014 survive together</option><option value="versus">Shepherd vs Survivors</option>',h.onchange=()=>{this.screens.mp.dataset.mode=h.value},l.append(c,h);let d=document.createElement("div");d.style.cssText="font-size:11px;color:#8f1d1d;margin-top:8px;min-height:16px;letter-spacing:0.06em;",d.id="hv-mp-status";let u=Ct("Back",()=>{this.show("menu"),this.cb.onLeaveRoom()});t.append(i,n,l,r,o,a,d,u),this.screen("mp",[t])}mpStatus(e){let t=document.getElementById("hv-mp-status");t&&(t.textContent=e)}buildLobbyScreen(){let e=document.createElement("div");e.className="hv-panel",e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.textContent="Room Lobby";let i=document.createElement("div");i.className="hv-mode-tag",i.textContent="CO-OP",i.style.margin="0 auto",this.lobbyModeEl=i;let n=document.createElement("div");n.id="hv-lobby-code",this.lobbyCodeEl=n;let r=document.createElement("div");r.style.cssText="font-size:11px;color:#6f695e;letter-spacing:0.1em;",r.textContent="share this code \u2014 friends join from Multiplayer";let o=document.createElement("div");o.className="hv-players",this.lobbyListEl=o;let a=Ct("Begin the Night",()=>this.cb.onStartGame(),!0);this.lobbyStartBtn=a;let l=Ct("Leave",()=>{this.cb.onLeaveRoom(),this.show("menu")});e.append(t,i,n,r,o,a,l),this.screen("lobby",[e])}lobbyUpdate(e){this.lobbyCodeEl&&(this.lobbyCodeEl.textContent=e.code),this.lobbyModeEl&&(this.lobbyModeEl.textContent=e.mode==="versus"?"SHEPHERD VS SURVIVORS":"CO-OP"),this.lobbyListEl&&(this.lobbyListEl.innerHTML="",e.players.forEach(t=>{let i=document.createElement("div");i.className="hv-player-row",i.innerHTML=`<span>${t.isHost?"\u2302 ":"\xB7 "}${Kn(t.name)}</span><span style="color:#5f594e;">${t.isHost?"HOST":"ready"}</span>`,this.lobbyListEl.appendChild(i)})),this.lobbyStartBtn&&(this.lobbyStartBtn.disabled=!e.isHost||e.players.length<1)}buildSettingsScreen(e){let t=document.createElement("div");t.className="hv-panel";let i=document.createElement("div");i.className="hv-h2",i.textContent="Settings",t.appendChild(i);let n=()=>this.cb.onSettingsChanged(ti({},e));Nr(t,"Quality",Au(["low","medium","high"],e.quality,c=>{e.quality=c,n()})),Nr(t,"Camera",Au(["first","third"],e.camMode,c=>{e.camMode=c,n()})),Nr(t,"Touch controls",Au(["auto","on","off"],e.showTouch,c=>{e.showTouch=c,this.applyTouchSetting(e),n()})),Nr(t,"Sensitivity",Pp(.3,2.5,e.sensitivity,c=>{e.sensitivity=c,n()})),Nr(t,"Volume",Pp(0,1,e.volume,c=>{e.volume=c,n()})),Nr(t,"Invert Y",V_(e.invertY,c=>{e.invertY=c,n()}));let r=document.createElement("div");r.className="hv-row",r.style.flexDirection="column",r.style.alignItems="stretch";let o=document.createElement("label");o.textContent="Multiplayer server (blank = built-in)",o.style.marginBottom="6px";let a=document.createElement("input");a.className="hv-input",a.placeholder="ws://192.168.x.x:8787 or leave empty",a.value=e.serverUrl,a.onchange=()=>{e.serverUrl=a.value.trim(),n()},r.append(o,a),t.appendChild(r);let l=Ct("Back",()=>this.show(this._returnScreen||"menu"));t.appendChild(l),this.screen("settings",[t])}buildHelpScreen(){let e=document.createElement("div");e.className="hv-panel";let t=document.createElement("div");t.className="hv-h2",t.textContent="How to Play",e.appendChild(t);let i=document.createElement("div");i.style.cssText="font-size:13px;line-height:2.1;color:#a89f8c;",i.innerHTML=[["W A S D","move"],["MOUSE","look"],["SHIFT","sprint (loud!)"],["C","crouch (quiet)"],["E","interact / pick up"],["LMB","attack / shoot"],["R","reload"],["F","torch"],["Q","throw noise grenade"],["H","heal (bandage / pills)"],["V","switch 1st / 3rd person"],["1 2 3","knife / revolver / rifle"],["ESC","pause"],["G","throw bottle / brick"],["M","village map"],["J","journal"],["B","hold breath"],["N","hand dynamo"],["U","hand radio"],["4 / 5","axe / torch"],["T","place candle"],["X","splice cables near water"],["I","antique camera"]].map(o=>`<span class="hv-kbd">${o[0]}</span> ${o[1]}`).join("<br>"),e.appendChild(i);let n=document.createElement("div");n.style.cssText="margin-top:14px;font-size:12px;color:#7d766a;line-height:1.8;font-style:italic;",n.innerHTML="\u2022 The Shepherd hunts by sound. Sprinting screams through the night.<br>\u2022 Your torch betrays you in the dark \u2014 but total darkness feeds the Dread.<br>\u2022 Gunshots stagger him. The old rifle drops him to his knees.<br>\u2022 In Co-op, revive the fallen before the night takes them.<br>\u2022 Touch: EDIT button rearranges &amp; resizes buttons (saved).",e.appendChild(n);let r=Ct("Back",()=>this.show("menu"));e.appendChild(r),this.screen("help",[e])}buildNoteScreen(){let e=document.createElement("div");e.className="hv-note-text";let t=Ct("Put away",()=>{this.show(null);let i=this.noteCloseCb;this.noteCloseCb=null,i&&i()});t.style.marginTop="18px",this.screen("note",[e,t])}showNote(e,t){let n=this.screens.note.querySelector(".hv-note-text");n.innerHTML=`<div class="hv-note-title">${Kn(e.title)}</div>${Kn(e.text).replace(/\n/g,"<br>")}`,this.noteCloseCb=t,this.show("note")}buildQuestLogScreen(){let e=document.createElement("div");e.className="hv-panel";let t=document.createElement("div");t.className="hv-h2",t.textContent="JOURNAL \u2014 Hollow Vale";let i=document.createElement("div");i.id="hv-quest-list",this.questListEl=i;let n=Ct("Close",()=>{this.show(null);let r=this.journalCloseCb;this.journalCloseCb=null,r&&r()});n.style.marginTop="16px",e.append(t,i,n),this.screen("questlog",[e])}showQuestLog(e,t){this.journalCloseCb=t;let i=this.questListEl;if(i){i.innerHTML="";for(let n of e){let r=document.createElement("div");r.className="hv-quest-row";let o=n.done?'<span style="color:#4a8f3a">\u2714</span>':n.active?'<span style="color:#b83a2a">\u25C6</span>':'<span style="color:#4a443a">\u25CB</span>',a=n.done?"text-decoration:line-through;color:#6f695e;":n.active?"color:#e8dfc8;":"color:#a89f8c;";r.innerHTML=`<div class="qt">${o} <span style="${a}">${Kn(n.title)}</span></div><div class="qd">${Kn(n.desc)}</div>`,n.side&&(r.style.paddingLeft="24px",r.style.fontSize="12px"),i.appendChild(r)}this.show("questlog")}}buildMapScreen(){let e=document.createElement("div");e.className="hv-panel",e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.textContent="VILLAGE MAP";let i=document.createElement("canvas");i.id="hv-map-canvas",i.width=460,i.height=460;let n=Ct("Close",()=>{this.show(null);let r=this.mapCloseCb;this.mapCloseCb=null,r&&r()});n.style.marginTop="14px",e.append(t,i,n),this.screen("map",[e]),this.mapCanvas=i,this.mapCtx=i.getContext("2d")}setMapData(e){this.mapData=e;let t=this.screens.map;t&&!t.classList.contains("hv-hidden")&&this.drawMap()}openMap(e){this.mapCloseCb=e,this.show("map"),this.drawMap()}drawMap(){let e=this.mapCtx,t=this.mapData;if(!e||!t)return;let i=460,n=i/124,r=u=>(u+62)*n,o=u=>(u+62)*n,a=(u,f)=>!t.visited||t.visited.has(`${Math.floor(u/4)*4},${Math.floor(f/4)*4}`);if(e.clearRect(0,0,i,i),e.fillStyle="#1a1712",e.fillRect(0,0,i,i),t.visited){e.fillStyle="#221e18";for(let u of t.visited){let f=u.split(","),g=parseFloat(f[0]),x=parseFloat(f[1]);!isFinite(g)||!isFinite(x)||g<-62||g>=62||x<-62||x>=62||e.fillRect(r(g),o(x),4*n,4*n)}}e.strokeStyle="rgba(120,108,84,0.07)",e.lineWidth=1,e.beginPath();for(let u=-62;u<=62;u+=4)e.moveTo(r(u),0),e.lineTo(r(u),i),e.moveTo(0,o(u)),e.lineTo(i,o(u));e.stroke(),e.strokeStyle="rgba(140,124,96,0.22)",e.lineWidth=4,e.beginPath();for(let u of H_)a((u[0]+u[2])/2,(u[1]+u[3])/2)&&(e.moveTo(r(u[0]),o(u[1])),e.lineTo(r(u[2]),o(u[3])));e.stroke(),e.lineWidth=1.5,e.font='8px "Courier New", monospace',e.textAlign="center";for(let u of z_)a(u.x+u.w/2,u.z+u.h/2)&&(e.strokeStyle="#6a5f4a",e.strokeRect(r(u.x),o(u.z),u.w*n,u.h*n),e.fillStyle="#8f8570",e.fillText(u.label,r(u.x+u.w/2),o(u.z+u.h/2)+3));if(a(0,2)&&(e.strokeStyle="#8f8570",e.lineWidth=1.5,e.beginPath(),e.arc(r(0),o(2),5,0,Math.PI*2),e.stroke(),e.fillStyle="#8f8570",e.fillText("WELL",r(0),o(2)-8)),a(0,55)&&(e.strokeStyle="#a89f8c",e.lineWidth=2,e.beginPath(),e.moveTo(r(-2.5),o(55)),e.lineTo(r(2.5),o(55)),e.stroke(),e.fillStyle="#a89f8c",e.fillText("GATE",r(0),o(55)+13)),a(-33,-35)&&(e.strokeStyle="#5a544a",e.lineWidth=1.5,e.strokeRect(r(-46),o(-46),26*n,22*n),e.fillStyle="#7d766a",e.fillText("CEMETERY",r(-33),o(-35)+3)),a(10,48)&&(e.strokeStyle="#8a7a3a",e.lineWidth=1.5,e.strokeRect(r(8.5),o(46.5),3*n,3*n),e.fillStyle="#8a7a3a",e.fillText("CART",r(10),o(46.5)-5)),a(-30,-38)&&(e.strokeStyle="#7a2a2a",e.lineWidth=1.5,e.beginPath(),e.arc(r(-30),o(-38),4*n,0,Math.PI*2),e.stroke(),e.fillStyle="#8a3a3a",e.fillText("RITUAL",r(-30),o(-38)-4*n-5)),t.target){let u=.5+.5*Math.sin(performance.now()/240),f=r(t.target.x),g=o(t.target.z),x=7;e.strokeStyle=`rgba(200,42,30,${u.toFixed(2)})`,e.lineWidth=2.5,e.beginPath(),e.moveTo(f-x,g-x),e.lineTo(f+x,g+x),e.moveTo(f+x,g-x),e.lineTo(f-x,g+x),e.stroke(),e.fillStyle=`rgba(224,130,110,${u.toFixed(2)})`,e.font='10px "Courier New", monospace',e.fillText(t.target.label,f,g-12)}let l=-Math.sin(t.yaw),c=-Math.cos(t.yaw),h=Math.min(Math.max(r(t.px),10),i-10),d=Math.min(Math.max(o(t.pz),10),i-10);e.beginPath(),e.moveTo(h+l*9,d+c*9),e.lineTo(h-l*6-c*5,d-c*6+l*5),e.lineTo(h-l*6+c*5,d-c*6-l*5),e.closePath(),e.fillStyle="#e8dfc8",e.fill(),e.strokeStyle="rgba(20,16,12,0.9)",e.lineWidth=1,e.stroke(),e.fillStyle="#b8a888",e.font='10px "Courier New", monospace',e.fillText("N",i/2,11),e.strokeStyle="#b8a888",e.lineWidth=1.5,e.beginPath(),e.moveTo(i/2,26),e.lineTo(i/2,16),e.stroke(),e.beginPath(),e.moveTo(i/2-3,20),e.lineTo(i/2,15),e.lineTo(i/2+3,20),e.stroke()}setCompass(e,t){if(e===null){this.compassOn&&(this.compassEl.classList.add("hv-hidden"),this.compassOn=!1);return}this.compassOn||(this.compassEl.classList.remove("hv-hidden"),this.compassOn=!0),(Math.abs(e-this.lastBearing)>.03||t!==this.lastLabel)&&(this.lastBearing=e,this.lastLabel=t,this.compassArrow.style.transform=`rotate(${e}rad)`,this.compassLabelEl.textContent=t)}buildRadioScreen(){let e=document.createElement("div");e.className="hv-panel",e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.textContent="HAND RADIO";let i=document.createElement("div");i.className="hv-radio-readout",i.textContent="\u2014.\u2014 MHz";let n=document.createElement("input");n.type="range",n.min="88",n.max="108",n.step="0.1",n.value="100",n.className="hv-range",n.style.cssText="width:min(320px,80vw);margin:14px auto 4px;display:block;",n.setAttribute("aria-label","Radio frequency"),n.oninput=()=>{var c,h;let l=parseFloat(n.value);i.textContent=l.toFixed(1)+" MHz",(h=(c=this.cb).onRadioTune)==null||h.call(c,l)};let r=document.createElement("div");r.id="hv-radio-bars";for(let l=0;l<5;l++){let c=document.createElement("span");c.className="hv-rbar",r.appendChild(c)}let o=document.createElement("div");o.id="hv-radio-msg",o.textContent="...only static...";let a=Ct("Close",()=>{this.show(null);let l=this.radioCloseCb;this.radioCloseCb=null,l&&l()});a.style.marginTop="16px",e.append(t,i,n,r,o,a),this.screen("radio",[e]),this.radioFreqEl=i,this.radioSlider=n,this.radioBarsEl=r,this.radioMsgEl=o}setRadioData(e){var i;this.radioFreqEl.textContent=e.freq.toFixed(1)+" MHz",document.activeElement!==this.radioSlider&&(this.radioSlider.value=String(e.freq));let t=this.radioBarsEl.children;for(let n=0;n<t.length;n++)t[n].classList.toggle("lit",n<Math.round(e.level));this.radioMsgEl.textContent=(i=e.message)!=null?i:"...only static..."}openRadio(e){this.radioCloseCb=e,this.show("radio")}buildTradeScreen(){let e=document.createElement("div");e.className="hv-panel";let t=document.createElement("div");t.className="hv-h2",t.textContent="WANDERING PEDDLER";let i=document.createElement("div");i.id="hv-trade-list",this.tradeListEl=i;let n=Ct("Close",()=>{this.show(null);let r=this.tradeCloseCb;this.tradeCloseCb=null,r&&r()});n.style.marginTop="16px",e.append(t,i,n),this.screen("trade",[e])}showTrade(e,t,i){this.tradeBuyCb=t,this.tradeCloseCb=i;let n=this.tradeListEl;n&&(n.innerHTML="",e.forEach((r,o)=>{let a=document.createElement("div");a.className="hv-trade-row";let l=document.createElement("span");l.textContent=r.label,r.afford||(l.style.color="#5f594e");let c=Ct("Buy",()=>{var h;return(h=this.tradeBuyCb)==null?void 0:h.call(this,o)});c.classList.add("hv-tbuy"),c.disabled=!r.afford,a.append(l,c),n.appendChild(a)}),this.show("trade"))}buildDeathScreen(){let e=document.createElement("div");e.className="hv-death",e.style.textAlign="center",e.style.justifyContent="center";let t=document.createElement("h1");t.className="hv-title",t.textContent="TAKEN";let i=document.createElement("div");i.className="hv-sub",i.textContent="the bell tolls for you";let n=document.createElement("div");n.style.marginTop="30px";let r=Ct("Rise Again",()=>{this.show(null),this.cb.onRespawn()},!0);r.id="hv-respawn-btn";let o=Ct("Give Up",()=>this.cb.onQuitToMenu());n.append(r,o),e.append(t,i,n),this.screens.death=this.screen("death",[e]),this.screens.death.classList.add("hv-death")}buildWinScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("h1");t.className="hv-title",t.innerHTML='YOU <span class="red">ESCAPED</span>';let i=document.createElement("div");i.className="hv-sub",i.id="hv-win-sub",i.textContent="the curse is broken... for now";let n=document.createElement("div");n.id="hv-win-stats",n.style.cssText="margin-top:20px;font-size:13px;color:#8f887a;line-height:2;letter-spacing:0.08em;";let r=Ct("Main Menu",()=>this.cb.onQuitToMenu(),!0);r.style.margin="26px auto 0",e.append(t,i,n,r),this.screen("win",[e])}buildPauseScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.style.border="none",t.textContent="Paused";let i=Ct("Resume",()=>{this.show(null),this.cb.onResume()},!0),n=Ct("Controls",()=>{this._returnScreen="pause",this.show("help")}),r=Ct("Settings",()=>{this._returnScreen="pause",this.show("settings")}),o=Ct("Quit to Menu",()=>this.cb.onQuitToMenu());e.append(t,i,n,r,o),this.screen("pause",[e])}buildLoadingScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("div");t.className="hv-title",t.style.fontSize="clamp(30px, 6vw, 60px)",t.textContent="HOLLOW VALE";let i=document.createElement("div");i.className="hv-loadingbar";let n=document.createElement("i");n.id="hv-load-fill",i.appendChild(n);let r=document.createElement("div");r.className="hv-tip",r.id="hv-load-tip",r.textContent="the village remembers",e.append(t,i,r),this.screen("loading",[e])}loading(e,t){let i=document.getElementById("hv-load-fill");if(i&&(i.style.width=Math.round(e*100)+"%"),t){let n=document.getElementById("hv-load-tip");n&&(n.textContent=t)}}showWin(e,t){let i=document.getElementById("hv-win-stats");if(i&&(i.innerHTML=e),t){let n=document.getElementById("hv-win-sub");n&&(n.textContent=t)}this.show("win")}showDeath(e){let t=document.getElementById("hv-respawn-btn");t&&t.classList.toggle("hv-hidden",!e),this.show("death")}setHUDEnabled(e){this.hud.classList.toggle("hv-hidden",!e),e?this.applyTouchSetting(this._settings):this.touchWrap.classList.add("hv-hidden")}pst(e){let t=e,i=t.statuses&&typeof t.statuses=="object"?t.statuses:{},n=r=>typeof t[r]=="number"?t[r]:0;return{jammed:!!t.jammed,unjamT:n("unjamT"),bleeding:i.bleeding||0,poison:i.poison||0,brokenLeg:i.brokenLeg||0,breathT:n("breathT"),batteryType:typeof t.batteryType=="string"?t.batteryType:"alkaline",has:r=>e.weapons.includes(r)}}updateHUD(e,t,i){this.bars.hp.style.width=e.health+"%",this.bars.st.style.width=e.stamina+"%",this.bars.fe.style.width=e.fear+"%",this.bars.ba.style.width=Math.min(100,e.battery/(e.batteryCap||100)*100)+"%",this.vignette.style.opacity=String(Math.max(e.fear/145,e.health<35?.35:0));let n=t.objectiveText();this.objMain.textContent=i.isMonster?"Hunt them all before dawn":n.main,this.objSides.innerHTML=i.isMonster?"":n.sides.map(h=>Kn(h)).join("<br>");let r=this.pst(e);this.barLabels.ba.textContent="TORCH ("+r.batteryType.toUpperCase()+")";let o=h=>Math.max(1,Math.ceil(h))+"s",a=[];r.jammed&&a.push($o("reload","#c23a2a","JAM",o(r.unjamT))),r.bleeding>0&&a.push($o("drop","#c23a2a","",o(r.bleeding))),r.poison>0&&a.push($o("skull","#6a9a3a","",o(r.poison))),r.brokenLeg>0&&a.push($o("bone","#c2a23a","",o(r.brokenLeg))),r.breathT>0&&a.push($o("breath","#4aa8a8","",o(r.breathT))),this.statusEl.innerHTML=a.join(""),this.statusEl.classList.toggle("hv-hidden",a.length===0);let l=[];l.push({key:"knife",label:"1 KNIFE",cnt:null}),e.hasWeapon("pistol")&&l.push({key:"pistol",label:"2 REVOLVER",cnt:String(e.mag.pistol)+"/"+(e.inv.ammo_pistol||0)}),e.hasWeapon("rifle")&&l.push({key:"rifle",label:"3 RIFLE",cnt:String(e.mag.rifle)+"/"+(e.inv.ammo_rifle||0)}),r.has("axe")&&l.push({key:"axe",label:"4 AXE",cnt:null}),r.has("torch")&&l.push({key:"torch",label:"5 TORCH",cnt:null}),l.push({key:"bandage",label:"H BANDAGE",cnt:String(e.inv.bandage||0)}),l.push({key:"pills",label:"H PILLS",cnt:String(e.inv.pills||0)}),l.push({key:"grenade",label:"Q GRENADE",cnt:String(e.inv.grenade||0)}),this.hotbarEl.innerHTML="";let c=String(e.current);for(let h of l){let d=document.createElement("div");d.className="hv-slot"+(c===h.key?" active":""),d.innerHTML=Kn(h.label)+(h.cnt!==null?`<span class="cnt">${Kn(h.cnt)}</span>`:""),this.hotbarEl.appendChild(d)}if(this.crosshair.style.display=e.current==="knife"?"none":"block",i.versus){this.timerEl.classList.remove("hv-hidden");let h=Math.floor((i.timeLeft||0)/60),d=Math.floor((i.timeLeft||0)%60);this.timerEl.textContent=`${h}:${String(d).padStart(2,"0")}`,this.roleEl.textContent=i.isMonster?"YOU ARE THE SHEPHERD":"SURVIVE"}else this.timerEl.classList.add("hv-hidden"),this.roleEl.textContent=i.coopTotal?`CO-OP \u2014 ${i.coopAlive}/${i.coopTotal} ALIVE`:""}prompt(e){e?(this.promptEl.textContent=e,this.promptEl.classList.remove("hv-hidden")):this.promptEl.classList.add("hv-hidden")}message(e,t=!1){var n;let i=document.createElement("div");for(i.className="hv-msg"+(t?" big":""),i.textContent=e,this.messagesEl.appendChild(i),setTimeout(()=>i.remove(),3500);this.messagesEl.children.length>4;)(n=this.messagesEl.firstChild)==null||n.remove()}subtitle(e,t=4){this.subtitleEl.textContent=e,this.subtitleTimer=t}flashDamage(){this.damageEl.style.opacity="0.9",setTimeout(()=>{this.damageEl.style.opacity="0"},240);let e=1+Math.floor(Math.random()*2);for(let t=0;t<e;t++)this.spawnSplat()}spawnSplat(){var i;let e=document.createElement("div");e.className="hv-splat";let t=90+Math.random()*130;for(e.style.width=t+"px",e.style.height=t*(.7+Math.random()*.5)+"px",e.style.left=Math.random()*100+"%",e.style.top=Math.random()*100+"%",e.style.transform=`rotate(${Math.floor(Math.random()*360)}deg)`,e.style.opacity="0.9",e.style.transition="opacity 6s linear",this.bloodEl.appendChild(e);this.bloodEl.childElementCount>6;)(i=this.bloodEl.firstElementChild)==null||i.remove();setTimeout(()=>{e.style.opacity="0"},80),setTimeout(()=>{e.remove()},7e3)}setCameraMode(e,t){this.camframeEl.classList.toggle("hv-hidden",!e),e&&(this.camframeLabel.textContent=`ANTIQUE CAMERA \u2014 FILM ${t}`)}fadeIn(){this.fadeEl.style.opacity="0"}fadeOut(){this.fadeEl.style.opacity="1"}setTeammates(e){this.teammatesEl.innerHTML=e.map(t=>`<div class="hv-mate">${t.downed?"\u2620":t.dead?"\u271D":"\u2022"} ${Kn(t.name)}<span class="mbar"><i style="width:${Math.max(0,t.hp)}%;${t.downed?"background:#8f1d1d":""}"></i></span></div>`).join("")}update(e){if(this.subtitleTimer>0&&(this.subtitleTimer-=e,this.subtitleTimer<=0&&(this.subtitleEl.textContent="")),this.mapAcc+=e,this.mapAcc>=.25){this.mapAcc=0;let t=this.screens.map;t&&!t.classList.contains("hv-hidden")&&this.drawMap()}}applyTouchSetting(e){let t=e.showTouch==="on"||e.showTouch!=="off"&&(matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);this.touchEnabled=t,this.touchWrap.classList.toggle("hv-hidden",!t),t||(this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"))}refreshTouch(e){this.applyTouchSetting(e)}applyLayoutFor(e,t){let i=this.layout[t];if(!i)return;let n=62*(i.scale||1);e.style.right="auto",e.style.bottom="auto",e.style.width=n+"px",e.style.height=n+"px",e.style.left=i.x*window.innerWidth-n/2+"px",e.style.top=i.y*window.innerHeight-n/2+"px"}collectLayout(){let e={};for(let t of Object.keys(this.touchBtns)){let i=this.touchBtns[t].getBoundingClientRect();e[t]={x:(i.left+i.width/2)/window.innerWidth,y:(i.top+i.height/2)/window.innerHeight,scale:i.width/62}}return e}toggleEditMode(){this.editMode=!this.editMode,this.editBar&&this.editBar.classList.toggle("hv-hidden",!this.editMode);for(let e of Object.keys(this.touchBtns))this.touchBtns[e].classList.toggle("hv-editing",this.editMode),this.editMode||this.touchBtns[e].classList.remove("hv-sel");this.editMode?(this.selectedBtn=null,this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"),this.lookZoneEl.style.pointerEvents="none",this.editSlider&&(this.editSlider.value="1")):(this.selectedBtn=null,this.lookZoneEl.style.pointerEvents="")}selectTouchBtn(e){this.selectedBtn&&this.selectedBtn!==e&&this.selectedBtn.classList.remove("hv-sel"),this.selectedBtn=e,e.classList.add("hv-sel"),this.editSlider&&(this.editSlider.value=String(Math.round(e.getBoundingClientRect().width/62*100)/100))}buildEditBar(){let e=document.createElement("div");e.id="hv-editbar",e.classList.add("hv-hidden");let t=document.createElement("span");t.textContent="EDITING \u2014 drag buttons, slider = size, then SAVE";let i=document.createElement("input");i.type="range",i.id="hv-edit-size",i.min="0.7",i.max="1.6",i.step="0.05",i.value="1",i.setAttribute("aria-label","Selected button size"),i.oninput=()=>{let a=this.selectedBtn;if(!a)return;let l=parseFloat(i.value),c=a.getBoundingClientRect(),h=c.left+c.width/2,d=c.top+c.height/2,u=62*l;a.style.right="auto",a.style.bottom="auto",a.style.width=u+"px",a.style.height=u+"px",a.style.left=Math.min(Math.max(h-u/2,0),window.innerWidth-u)+"px",a.style.top=Math.min(Math.max(d-u/2,0),window.innerHeight-u)+"px"};let n=Ct("Save",()=>{let a=this.collectLayout();this.layout=a,vp(a),this.toggleEditMode()}),r=Ct("Reset",()=>{_p(),this.layout={};for(let a of Object.keys(this.touchBtns))this.touchBtns[a].style.cssText=this.touchDefaults[a]||"",this.touchBtns[a].classList.remove("hv-sel");this.selectedBtn=null,i.value="1"}),o=Ct("Done",()=>this.toggleEditMode());for(let a of[n,r,o])a.classList.add("hv-ebtn");e.append(t,i,n,r,o),this.touchWrap.appendChild(e),this.editBar=e,this.editSlider=i}bindTouch(e){this.applyTouchSetting(e);let t=-1,i={x:0,y:0},n=52,r=document.createElement("div");r.className="zone",r.style.cssText="left:0;bottom:0;width:45%;height:70%;",r.addEventListener("touchstart",u=>{if(u.preventDefault(),this.editMode)return;let f=u.changedTouches[0];t>=0||(t=f.identifier,i.x=f.clientX,i.y=f.clientY,this.stickBase.classList.remove("hv-hidden"),this.stickNub.classList.remove("hv-hidden"),this.stickBase.style.left=f.clientX-60+"px",this.stickBase.style.top=f.clientY-60+"px",this.stickNub.style.left=f.clientX-26+"px",this.stickNub.style.top=f.clientY-26+"px")},{passive:!1}),r.addEventListener("touchmove",u=>{if(u.preventDefault(),!this.editMode)for(let f of Array.from(u.changedTouches)){if(f.identifier!==t)continue;let g=f.clientX-i.x,x=f.clientY-i.y,p=Math.hypot(g,x);p>n&&(g=g/p*n,x=x/p*n),this.stickNub.style.left=i.x+g-26+"px",this.stickNub.style.top=i.y+x-26+"px",this.input.touchMoveVec(g/n,x/n)}},{passive:!1});let o=u=>{for(let f of Array.from(u.changedTouches))f.identifier===t&&(t=-1,this.input.touchMoveVec(0,0),this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"))};r.addEventListener("touchend",o),r.addEventListener("touchcancel",o),this.touchWrap.appendChild(r);let a=document.createElement("div");a.id="hv-lookzone",this.lookZoneEl=a;let l=-1,c={x:0,y:0};a.addEventListener("touchstart",u=>{if(u.preventDefault(),this.editMode)return;let f=u.changedTouches[0];l>=0||(l=f.identifier,c.x=f.clientX,c.y=f.clientY)},{passive:!1}),a.addEventListener("touchmove",u=>{if(u.preventDefault(),!this.editMode)for(let f of Array.from(u.changedTouches))f.identifier===l&&(this.input.touchLook(f.clientX-c.x,f.clientY-c.y),c.x=f.clientX,c.y=f.clientY)},{passive:!1});let h=u=>{for(let f of Array.from(u.changedTouches))f.identifier===l&&(l=-1)};a.addEventListener("touchend",h),a.addEventListener("touchcancel",h),this.touchWrap.appendChild(a);let d=(u,f,g,x,p,m,v)=>{let T=document.createElement("button");T.id="hv-tb-"+u,T.className="hv-tbtn",T.setAttribute("aria-label",g),T.title=g,T.innerHTML=`<span class="hv-tico">${bu(f,26)}</span>`,this.touchDefaults[u]=x,T.setAttribute("style",x);let E=L=>{if(this.editMode){L==null||L.preventDefault();return}T.classList.add("on"),p(),v&&!v()&&T.classList.remove("on")},C=L=>{if(this.editMode){L==null||L.preventDefault();return}v||T.classList.remove("on"),m&&m()};T.addEventListener("touchstart",L=>{L.preventDefault(),E()},{passive:!1}),T.addEventListener("touchend",L=>{L.preventDefault(),C()},{passive:!1});let w=!1,y={x:0,y:0};T.addEventListener("pointerdown",L=>{if(!this.editMode)return;L.preventDefault(),L.stopPropagation(),this.selectTouchBtn(T);try{T.setPointerCapture(L.pointerId)}catch(k){}let P=T.getBoundingClientRect();y={x:L.clientX-P.left,y:L.clientY-P.top},T.style.right="auto",T.style.bottom="auto",w=!0}),T.addEventListener("pointermove",L=>{if(!w||!this.editMode)return;L.preventDefault();let P=T.getBoundingClientRect().width;T.style.left=Math.min(Math.max(L.clientX-y.x,0),window.innerWidth-P)+"px",T.style.top=Math.min(Math.max(L.clientY-y.y,0),window.innerHeight-P)+"px"});let S=()=>{w=!1};return T.addEventListener("pointerup",S),T.addEventListener("pointercancel",S),this.applyLayoutFor(T,u),this.touchBtns[u]=T,this.touchWrap.appendChild(T),T};d("attack","attack","Attack","right:22px;bottom:86px;",()=>this.input.setButton("attack",!0),()=>this.input.setButton("attack",!1)),d("interact","interact","Interact","right:100px;bottom:26px;",()=>this.input.setButton("interact",!0),()=>this.input.setButton("interact",!1)),d("reload","reload","Reload","right:24px;bottom:168px;",()=>this.input.setButton("reload",!0),()=>this.input.setButton("reload",!1)),d("flash","flash","Torch","left:150px;top:18px;",()=>this.input.setButton("flash",!0)),d("crouch","crouch","Crouch","left:20px;top:18px;",()=>{},void 0,()=>(this.crouchToggle=!this.crouchToggle,this.input.buttons.crouch=this.crouchToggle,this.crouchToggle)),d("sprint","run","Sprint","left:150px;top:88px;",()=>{},void 0,()=>(this.sprintToggle=!this.sprintToggle,this.input.buttons.sprint=this.sprintToggle,this.sprintToggle)),d("cam","cam","Camera view","left:20px;top:88px;",()=>this.input.setButton("cam",!0)),d("grenade","grenade","Noise grenade","right:100px;bottom:110px;",()=>this.input.setButton("grenade",!0)),d("heal","heal","Heal","right:22px;bottom:250px;",()=>this.input.setButton("heal",!0)),d("pause","pause","Menu","right:16px;top:14px;width:44px;height:36px;border-radius:4px;",()=>this.input.setButton("pause",!0)),d("throw","throw","Throw bottle / brick","right:178px;bottom:26px;",()=>this.input.setButton("throw",!0)),d("map","map","Map","right:100px;top:80px;",()=>{var u,f;return(f=(u=this.cb).onToggleOverlay)==null?void 0:f.call(u,"map")}),d("quest","quest","Journal","right:100px;top:18px;",()=>{var u,f;return(f=(u=this.cb).onToggleOverlay)==null?void 0:f.call(u,"quest")}),d("radio","radio","Hand radio","left:20px;top:158px;",()=>{var u,f;return(f=(u=this.cb).onToggleOverlay)==null?void 0:f.call(u,"radio")}),d("dynamo","dynamo","Hand dynamo","right:24px;bottom:332px;",()=>this.input.setButton("dynamo",!0),()=>this.input.setButton("dynamo",!1)),d("breath","breath","Hold breath","right:100px;bottom:194px;",()=>this.input.setButton("breath",!0),()=>this.input.setButton("breath",!1)),d("swap","swap","Swap weapon","right:178px;bottom:110px;",()=>{var u,f;return(f=(u=this.cb).onCycleWeapon)==null?void 0:f.call(u)}),d("edit","edit","Edit button layout","right:70px;top:14px;width:44px;height:36px;border-radius:4px;",()=>this.toggleEditMode())}resetSprintToggle(){var e,t;this.sprintToggle=!1,this.crouchToggle=!1,this.input.buttons.sprint=!1,this.input.buttons.crouch=!1,(e=this.touchBtns.sprint)==null||e.classList.remove("on"),(t=this.touchBtns.crouch)==null||t.classList.remove("on")}};function Ct(s,e,t=!1){let i=document.createElement("button");return i.className="hv-btn"+(t?" primary":""),i.textContent=s,i.addEventListener("click",e),i}function Nr(s,e,t){let i=document.createElement("div");i.className="hv-row";let n=document.createElement("label");n.textContent=e,i.append(n,t),s.appendChild(i)}function Au(s,e,t){let i=document.createElement("select");return i.className="hv-select",s.forEach(n=>{let r=document.createElement("option");r.value=n,r.textContent=n.toUpperCase(),n===e&&(r.selected=!0),i.appendChild(r)}),i.onchange=()=>t(i.value),i}function Pp(s,e,t,i){let n=document.createElement("input");return n.type="range",n.className="hv-range",n.min=String(s),n.max=String(e),n.step="0.05",n.value=String(t),n.style.width="140px",n.oninput=()=>i(parseFloat(n.value)),n}function V_(s,e){let t=document.createElement("input");return t.type="checkbox",t.checked=s,t.style.accentColor="#8f1d1d",t.onchange=()=>e(t.checked),t}function $o(s,e,t,i){return`<span class="hv-st" style="color:${e}">${bu(s,18)}${t?`<b>${t}</b>`:""}<b>${i}</b></span>`}function Kn(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var dn=Object.create(null);dn.open="0";dn.close="1";dn.ping="2";dn.pong="3";dn.message="4";dn.upgrade="5";dn.noop="6";var Jo=Object.create(null);Object.keys(dn).forEach(s=>{Jo[dn[s]]=s});var jo={type:"error",data:"parser error"};var kp=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",Dp=typeof ArrayBuffer=="function",Op=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s&&s.buffer instanceof ArrayBuffer,Qo=({type:s,data:e},t,i)=>kp&&e instanceof Blob?t?i(e):Lp(e,i):Dp&&(e instanceof ArrayBuffer||Op(e))?t?i(e):Lp(new Blob([e]),i):i(dn[s]+(e||"")),Lp=(s,e)=>{let t=new FileReader;return t.onload=function(){let i=t.result.split(",")[1];e("b"+(i||""))},t.readAsDataURL(s)};function Np(s){return s instanceof Uint8Array?s:s instanceof ArrayBuffer?new Uint8Array(s):new Uint8Array(s.buffer,s.byteOffset,s.byteLength)}var Cu;function Up(s,e){if(kp&&s.data instanceof Blob)return s.data.arrayBuffer().then(Np).then(e);if(Dp&&(s.data instanceof ArrayBuffer||Op(s.data)))return e(Np(s.data));Qo(s,!1,t=>{Cu||(Cu=new TextEncoder),e(Cu.encode(t))})}var Fp="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ea=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let s=0;s<Fp.length;s++)ea[Fp.charCodeAt(s)]=s;var Bp=s=>{let e=s.length*.75,t=s.length,i,n=0,r,o,a,l;s[s.length-1]==="="&&(e--,s[s.length-2]==="="&&e--);let c=new ArrayBuffer(e),h=new Uint8Array(c);for(i=0;i<t;i+=4)r=ea[s.charCodeAt(i)],o=ea[s.charCodeAt(i+1)],a=ea[s.charCodeAt(i+2)],l=ea[s.charCodeAt(i+3)],h[n++]=r<<2|o>>4,h[n++]=(o&15)<<4|a>>2,h[n++]=(a&3)<<6|l&63;return c};var G_=typeof ArrayBuffer=="function",ta=(s,e)=>{if(typeof s!="string")return{type:"message",data:Hp(s,e)};let t=s.charAt(0);return t==="b"?{type:"message",data:W_(s.substring(1),e)}:Jo[t]?s.length>1?{type:Jo[t],data:s.substring(1)}:{type:Jo[t]}:jo},W_=(s,e)=>{if(G_){let t=Bp(s);return Hp(t,e)}else return{base64:!0,data:s}},Hp=(s,e)=>e==="blob"?s instanceof Blob?s:new Blob([s]):s instanceof ArrayBuffer?s:s.buffer;var zp="",Vp=(s,e)=>{let t=s.length,i=new Array(t),n=0;s.forEach((r,o)=>{Qo(r,!1,a=>{i[o]=a,++n===t&&e(i.join(zp))})})},Gp=(s,e)=>{let t=s.split(zp),i=[];for(let n=0;n<t.length;n++){let r=ta(t[n],e);if(i.push(r),r.type==="error")break}return i};function Wp(){return new TransformStream({transform(s,e){Up(s,t=>{let i=t.length,n;if(i<126)n=new Uint8Array(1),new DataView(n.buffer).setUint8(0,i);else if(i<65536){n=new Uint8Array(3);let r=new DataView(n.buffer);r.setUint8(0,126),r.setUint16(1,i)}else{n=new Uint8Array(9);let r=new DataView(n.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(i))}s.data&&typeof s.data!="string"&&(n[0]|=128),e.enqueue(n),e.enqueue(t)})}})}var Pu;function Ac(s){return s.reduce((e,t)=>e+t.length,0)}function Cc(s,e){if(s[0].length===e)return s.shift();let t=new Uint8Array(e),i=0;for(let n=0;n<e;n++)t[n]=s[0][i++],i===s[0].length&&(s.shift(),i=0);return s.length&&i<s[0].length&&(s[0]=s[0].slice(i)),t}function qp(s,e){Pu||(Pu=new TextDecoder);let t=[],i=0,n=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(i===0){if(Ac(t)<1)break;let l=Cc(t,1);r=(l[0]&128)===128,n=l[0]&127,n<126?i=3:n===126?i=1:i=2}else if(i===1){if(Ac(t)<2)break;let l=Cc(t,2);n=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),i=3}else if(i===2){if(Ac(t)<8)break;let l=Cc(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(jo);break}n=h*Math.pow(2,32)+c.getUint32(4),i=3}else{if(Ac(t)<n)break;let l=Cc(t,n);a.enqueue(ta(r?l:Pu.decode(l),e)),i=0}if(n===0||n>s){a.enqueue(jo);break}}}})}var Iu=4;function Ot(s){if(s)return q_(s)}function q_(s){for(var e in Ot.prototype)s[e]=Ot.prototype[e];return s}Ot.prototype.on=Ot.prototype.addEventListener=function(s,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+s]=this._callbacks["$"+s]||[]).push(e),this};Ot.prototype.once=function(s,e){function t(){this.off(s,t),e.apply(this,arguments)}return t.fn=e,this.on(s,t),this};Ot.prototype.off=Ot.prototype.removeListener=Ot.prototype.removeAllListeners=Ot.prototype.removeEventListener=function(s,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+s];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+s],this;for(var i,n=0;n<t.length;n++)if(i=t[n],i===e||i.fn===e){t.splice(n,1);break}return t.length===0&&delete this._callbacks["$"+s],this};Ot.prototype.emit=function(s){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+s],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(t){t=t.slice(0);for(var i=0,n=t.length;i<n;++i)t[i].apply(this,e)}return this};Ot.prototype.emitReserved=Ot.prototype.emit;Ot.prototype.listeners=function(s){return this._callbacks=this._callbacks||{},this._callbacks["$"+s]||[]};Ot.prototype.hasListeners=function(s){return!!this.listeners(s).length};var Zn=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),Ii=typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")(),Xp="arraybuffer";function Pc(s,...e){return e.reduce((t,i)=>(s.hasOwnProperty(i)&&(t[i]=s[i]),t),{})}var X_=Ii.setTimeout,Y_=Ii.clearTimeout;function $n(s,e){e.useNativeTimers?(s.setTimeoutFn=X_.bind(Ii),s.clearTimeoutFn=Y_.bind(Ii)):(s.setTimeoutFn=Ii.setTimeout.bind(Ii),s.clearTimeoutFn=Ii.clearTimeout.bind(Ii))}var K_=1.33;function Yp(s){return typeof s=="string"?Z_(s):Math.ceil((s.byteLength||s.size)*K_)}function Z_(s){let e=0,t=0;for(let i=0,n=s.length;i<n;i++)e=s.charCodeAt(i),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(i++,t+=4);return t}function Ic(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Kp(s){let e="";for(let t in s)s.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(s[t]));return e}function Zp(s){let e={},t=s.split("&");for(let i=0,n=t.length;i<n;i++){let r=t[i].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}var Lc=class extends Error{constructor(e,t,i){super(e),this.description=t,this.context=i,this.type="TransportError"}},Jn=class extends Ot{constructor(e){super(),this.writable=!1,$n(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,i){return super.emitReserved("error",new Lc(e,t,i)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){let t=ta(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){let t=Kp(e);return t.length?"?"+t:""}};var ia=class extends Jn{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let i=0;this._polling&&(i++,this.once("pollComplete",function(){--i||t()})),this.writable||(i++,this.once("drain",function(){--i||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){let t=i=>{if(this.readyState==="opening"&&i.type==="open"&&this.onOpen(),i.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(i)};Gp(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Vp(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Ic()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}};var $p=!1;try{$p=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch(s){}var Jp=$p;function $_(){}var Lu=class extends ia{constructor(e){if(super(e),typeof location!="undefined"){let t=location.protocol==="https:",i=location.port;i||(i=t?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||i!==e.port}}doWrite(e,t){let i=this.request({method:"POST",data:e});i.on("success",t),i.on("error",(n,r)=>{this.onError("xhr post error",n,r)})}doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,i)=>{this.onError("xhr poll error",t,i)}),this.pollXhr=e}},ys=class s extends Ot{constructor(e,t,i){super(),this.createRequest=e,$n(this,i),this._opts=i,this._method=i.method||"GET",this._uri=t,this._data=i.data!==void 0?i.data:null,this._create()}_create(){var e;let t=Pc(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;let i=this._xhr=this.createRequest(t);try{i.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){i.setDisableHeaderCheck&&i.setDisableHeaderCheck(!0);for(let n in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(n)&&i.setRequestHeader(n,this._opts.extraHeaders[n])}}catch(n){}if(this._method==="POST")try{i.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(n){}try{i.setRequestHeader("Accept","*/*")}catch(n){}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(i),"withCredentials"in i&&(i.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(i.timeout=this._opts.requestTimeout),i.onreadystatechange=()=>{var n;i.readyState===3&&((n=this._opts.cookieJar)===null||n===void 0||n.parseCookies(i.getResponseHeader("set-cookie"))),i.readyState===4&&(i.status===200||i.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof i.status=="number"?i.status:0)},0))},i.send(this._data)}catch(n){this.setTimeoutFn(()=>{this._onError(n)},0);return}typeof document!="undefined"&&(this._index=s.requestsCount++,s.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr=="undefined"||this._xhr===null)){if(this._xhr.onreadystatechange=$_,e)try{this._xhr.abort()}catch(t){}typeof document!="undefined"&&delete s.requests[this._index],this._xhr=null}}_onLoad(){let e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};ys.requestsCount=0;ys.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",jp);else if(typeof addEventListener=="function"){let s="onpagehide"in Ii?"pagehide":"unload";addEventListener(s,jp,!1)}}function jp(){for(let s in ys.requests)ys.requests.hasOwnProperty(s)&&ys.requests[s].abort()}var J_=(function(){let s=Qp({xdomain:!1});return s&&s.responseType!==null})(),xs=class extends Lu{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=J_&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new ys(Qp,this.uri(),e)}};function Qp(s){let e=s.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||Jp))return new XMLHttpRequest}catch(t){}if(!e)try{return new Ii[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(t){}}var em=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",ku=class extends Jn{get name(){return"websocket"}doOpen(){let e=this.uri(),t=this.opts.protocols,i=em?{}:Pc(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(i.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,i)}catch(n){return this.emitReserved("error",n)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let i=e[t],n=t===e.length-1;Qo(i,this.supportsBinary,r=>{try{this.doWrite(i,r)}catch(o){}n&&Zn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Ic()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}},Nu=Ii.WebSocket||Ii.MozWebSocket,vs=class extends ku{createSocket(e,t,i){return em?new Nu(e,t,i):t?new Nu(e,t):new Nu(e)}doWrite(e,t){this.ws.send(t)}};var kr=class extends Jn{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=qp(Number.MAX_SAFE_INTEGER,this.socket.binaryType),i=e.readable.pipeThrough(t).getReader(),n=Wp();n.readable.pipeTo(e.writable),this._writer=n.writable.getWriter();let r=()=>{i.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let i=e[t],n=t===e.length-1;this._writer.write(i).then(()=>{n&&Zn(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}};var Du={websocket:vs,webtransport:kr,polling:xs};var j_=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Q_=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Dr(s){if(s.length>8e3)throw"URI too long";let e=s,t=s.indexOf("["),i=s.indexOf("]");t!=-1&&i!=-1&&(s=s.substring(0,t)+s.substring(t,i).replace(/:/g,";")+s.substring(i,s.length));let n=j_.exec(s||""),r={},o=14;for(;o--;)r[Q_[o]]=n[o]||"";return t!=-1&&i!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=eb(r,r.path),r.queryKey=tb(r,r.query),r}function eb(s,e){let t=/\/{2,9}/g,i=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&i.splice(0,1),e.slice(-1)=="/"&&i.splice(i.length-1,1),i}function tb(s,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(i,n,r){n&&(t[n]=r)}),t}var Ou=typeof addEventListener=="function"&&typeof removeEventListener=="function",Nc=[];Ou&&addEventListener("offline",()=>{Nc.forEach(s=>s())},!1);var Us=class s extends Ot{constructor(e,t={}){var i,n;if(super(),this.binaryType=Xp,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){let r=Dr(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Dr(t.host).host);if($n(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((i=t.transports)===null||i===void 0)&&i.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((n=t.transportImplementations)!==null&&n!==void 0?n:t.transports).forEach(r=>{let o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=Du),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Zp(this.opts.query)),Ou&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Nc.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=Iu,t.transport=e,this.id&&(t.sid=this.id);let i=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](i)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let e=this.opts.rememberUpgrade&&s.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),i=!1;s.priorWebsocketSuccess=!1;let n=()=>{i||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!i)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;s.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{i||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){i||(i=!0,h(),t.close(),t=null)}let o=d=>{let u=new Error("probe error: "+d);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function l(){o("socket closed")}function c(d){t&&d.name!==t.name&&r()}let h=()=>{t.removeListener("open",n),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",n),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{i||t.open()},200):t.open()}onOpen(){if(this.readyState="open",s.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let i=0;i<this.writeBuffer.length;i++){let n=this.writeBuffer[i].data;if(n&&(t+=Yp(n)),i>0&&t>this._maxPayload)return this.writeBuffer.slice(0,i);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Zn(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,i){return this._sendPacket("message",e,t,i),this}send(e,t,i){return this._sendPacket("message",e,t,i),this}_sendPacket(e,t,i,n){if(typeof t=="function"&&(n=t,t=void 0),typeof i=="function"&&(n=i,i=null),this.readyState==="closing"||this.readyState==="closed")return;i=i||{},i.compress=i.compress!==!1;let r={type:e,data:t,options:i};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),n&&this.once("flush",n),this.flush()}close(){let e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},i=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?i():e()}):this.upgrading?i():e()),this}_onError(e){if(s.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Ou&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let i=Nc.indexOf(this._offlineEventListener);i!==-1&&Nc.splice(i,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){let t=[];for(let i=0;i<e.length;i++)~this.transports.indexOf(e[i])&&t.push(e[i]);return t}};Us.protocol=Iu;var jS=Us.protocol;function tm(s,e="",t){let i=s;t=t||typeof location!="undefined"&&location,s==null&&(s=t.protocol+"//"+t.host),typeof s=="string"&&(s.charAt(0)==="/"&&(s.charAt(1)==="/"?s=t.protocol+s:s=t.host+s),/^(https?|wss?):\/\//.test(s)||(typeof t!="undefined"?s=t.protocol+"//"+s:s="https://"+s),i=Dr(s)),i.port||(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";let r=i.host.indexOf(":")!==-1?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+r+":"+i.port+e,i.href=i.protocol+"://"+r+(t&&t.port===i.port?"":":"+i.port),i}var zu={};xm(zu,{Decoder:()=>Bu,Encoder:()=>Fu,PacketType:()=>nt,isPacketValid:()=>hb,protocol:()=>om});var nb=typeof ArrayBuffer=="function",sb=s=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(s):s.buffer instanceof ArrayBuffer,im=Object.prototype.toString,rb=typeof Blob=="function"||typeof Blob!="undefined"&&im.call(Blob)==="[object BlobConstructor]",ob=typeof File=="function"||typeof File!="undefined"&&im.call(File)==="[object FileConstructor]";function sa(s){return nb&&(s instanceof ArrayBuffer||sb(s))||rb&&s instanceof Blob||ob&&s instanceof File}function na(s,e){if(!s||typeof s!="object")return!1;if(Array.isArray(s)){for(let t=0,i=s.length;t<i;t++)if(na(s[t]))return!0;return!1}if(sa(s))return!0;if(s.toJSON&&typeof s.toJSON=="function"&&arguments.length===1)return na(s.toJSON(),!0);for(let t in s)if(Object.prototype.hasOwnProperty.call(s,t)&&na(s[t]))return!0;return!1}function nm(s){let e=[],t=s.data,i=s;return i.data=kc(t,e),i.attachments=e.length,{packet:i,buffers:e}}function kc(s,e,t){if(!s)return s;if(sa(s)){let i={_placeholder:!0,num:e.length};return e.push(s),i}else if(Array.isArray(s)){let i=new Array(s.length);for(let n=0;n<s.length;n++)i[n]=kc(s[n],e);return i}else if(typeof s=="object"&&!(s instanceof Date)){if(s.toJSON&&typeof s.toJSON=="function"&&!t)return kc(s.toJSON(),e,!0);let i={};for(let n in s)Object.prototype.hasOwnProperty.call(s,n)&&(i[n]=kc(s[n],e));return i}return s}function sm(s,e){return s.data=Uu(s.data,e),delete s.attachments,s}function Uu(s,e){if(!s)return s;if(s&&s._placeholder===!0){if(typeof s.num=="number"&&s.num>=0&&s.num<e.length)return e[s.num];throw new Error("illegal attachments")}else if(Array.isArray(s))for(let t=0;t<s.length;t++)s[t]=Uu(s[t],e);else if(typeof s=="object")for(let t in s)Object.prototype.hasOwnProperty.call(s,t)&&(s[t]=Uu(s[t],e));return s}var rm=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],om=5,nt;(function(s){s[s.CONNECT=0]="CONNECT",s[s.DISCONNECT=1]="DISCONNECT",s[s.EVENT=2]="EVENT",s[s.ACK=3]="ACK",s[s.CONNECT_ERROR=4]="CONNECT_ERROR",s[s.BINARY_EVENT=5]="BINARY_EVENT",s[s.BINARY_ACK=6]="BINARY_ACK"})(nt||(nt={}));var Fu=class{constructor(e){this.replacer=e}encode(e){return(e.type===nt.EVENT||e.type===nt.ACK)&&na(e)?this.encodeAsBinary({type:e.type===nt.EVENT?nt.BINARY_EVENT:nt.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===nt.BINARY_EVENT||e.type===nt.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=nm(e),i=this.encodeAsString(t.packet),n=t.buffers;return n.unshift(i),n}},Bu=class s extends Ot{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);let i=t.type===nt.BINARY_EVENT;i||t.type===nt.BINARY_ACK?(t.type=i?nt.EVENT:nt.ACK,this.reconstructor=new Hu(t)):super.emitReserved("decoded",t)}else if(sa(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0,i={type:Number(e.charAt(0))};if(nt[i.type]===void 0)throw new Error("unknown packet type "+i.type);if(i.type===nt.BINARY_EVENT||i.type===nt.BINARY_ACK){let r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);let o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");let a=Number(o);if(!am(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");i.attachments=a}if(e.charAt(t+1)==="/"){let r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););i.nsp=e.substring(r,t)}else i.nsp="/";let n=e.charAt(t+1);if(n!==""&&Number(n)==n){let r=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}i.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){let r=this.tryParse(e.substr(t));if(s.isPayloadValid(i.type,r))i.data=r;else throw new Error("invalid payload")}return i}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch(t){return!1}}static isPayloadValid(e,t){switch(e){case nt.CONNECT:return Dc(t);case nt.DISCONNECT:return t===void 0;case nt.CONNECT_ERROR:return typeof t=="string"||Dc(t);case nt.EVENT:case nt.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&rm.indexOf(t[0])===-1);case nt.ACK:case nt.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},Hu=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=sm(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function ab(s){return typeof s=="string"}var am=Number.isInteger||function(s){return typeof s=="number"&&isFinite(s)&&Math.floor(s)===s};function lb(s){return s===void 0||am(s)}function Dc(s){return Object.prototype.toString.call(s)==="[object Object]"}function cb(s,e){switch(s){case nt.CONNECT:return e===void 0||Dc(e);case nt.DISCONNECT:return e===void 0;case nt.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&rm.indexOf(e[0])===-1);case nt.ACK:return Array.isArray(e);case nt.CONNECT_ERROR:return typeof e=="string"||Dc(e);default:return!1}}function hb(s){return ab(s.nsp)&&lb(s.id)&&cb(s.type,s.data)}function Gi(s,e,t){return s.on(e,t),function(){s.off(e,t)}}var ub=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Or=class extends Ot{constructor(e,t,i){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,i&&i.auth&&(this.auth=i.auth),this._opts=Object.assign({},i),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[Gi(e,"open",this.onopen.bind(this)),Gi(e,"packet",this.onpacket.bind(this)),Gi(e,"error",this.onerror.bind(this)),Gi(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var i,n,r;if(ub.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let o={type:nt.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let h=this.ids++,d=t.pop();this._registerAckCallback(h,d),o.id=h}let a=(n=(i=this.io.engine)===null||i===void 0?void 0:i.transport)===null||n===void 0?void 0:n.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var i;let n=(i=this.flags.timeout)!==null&&i!==void 0?i:this._opts.ackTimeout;if(n===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},n),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((i,n)=>{let r=(o,a)=>o?n(o):i(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());let i={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((n,...r)=>(this._queue[0],n!==null?i.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(n)):(this._queue.shift(),t&&t(null,...r)),i.pending=!1,this._drainQueue())),this._queue.push(i),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:nt.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(i=>String(i.id)===e)){let i=this.acks[e];delete this.acks[e],i.withError&&i.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case nt.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case nt.EVENT:case nt.BINARY_EVENT:this.onevent(e);break;case nt.ACK:case nt.BINARY_ACK:this.onack(e);break;case nt.DISCONNECT:this.ondisconnect();break;case nt.CONNECT_ERROR:this.destroy();let i=new Error(e.data.message);i.data=e.data.data,this.emitReserved("connect_error",i);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let i of t)i.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,i=!1;return function(...n){i||(i=!0,t.packet({type:nt.ACK,id:e,data:n}))}}onack(e){let t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:nt.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let i=0;i<t.length;i++)if(e===t[i])return t.splice(i,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let i of t)i.apply(this,e.data)}}};function Fs(s){s=s||{},this.ms=s.min||100,this.max=s.max||1e4,this.factor=s.factor||2,this.jitter=s.jitter>0&&s.jitter<=1?s.jitter:0,this.attempts=0}Fs.prototype.duration=function(){var s=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*s);s=(Math.floor(e*10)&1)==0?s-t:s+t}return Math.min(s,this.max)|0};Fs.prototype.reset=function(){this.attempts=0};Fs.prototype.setMin=function(s){this.ms=s};Fs.prototype.setMax=function(s){this.max=s};Fs.prototype.setJitter=function(s){this.jitter=s};var Ur=class extends Ot{constructor(e,t){var i;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,$n(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((i=t.randomizationFactor)!==null&&i!==void 0?i:.5),this.backoff=new Fs({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;let n=t.parser||zu;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Us(this.uri,this.opts);let t=this.engine,i=this;this._readyState="opening",this.skipReconnect=!1;let n=Gi(t,"open",function(){i.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=Gi(t,"error",r);if(this._timeout!==!1){let a=this._timeout,l=this.setTimeoutFn(()=>{n(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(n),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let e=this.engine;this.subs.push(Gi(e,"ping",this.onping.bind(this)),Gi(e,"data",this.ondata.bind(this)),Gi(e,"error",this.onerror.bind(this)),Gi(e,"close",this.onclose.bind(this)),Gi(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Zn(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let i=this.nsps[e];return i?this._autoConnect&&!i.active&&i.connect():(i=new Or(this,e,t),this.nsps[e]=i),i}_destroy(e){let t=Object.keys(this.nsps);for(let i of t)if(this.nsps[i].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let i=0;i<t.length;i++)this.engine.write(t[i],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var i;this.cleanup(),(i=this.engine)===null||i===void 0||i.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let i=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(n=>{n?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",n)):e.onreconnect()}))},t);this.opts.autoUnref&&i.unref(),this.subs.push(()=>{this.clearTimeoutFn(i)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}};var ra={};function oa(s,e){typeof s=="object"&&(e=s,s=void 0),e=e||{};let t=tm(s,e.path||"/socket.io"),i=t.source,n=t.id,r=t.path,o=ra[n]&&r in ra[n].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o,l;return a?l=new Ur(i,e):(ra[n]||(ra[n]=new Ur(i,e)),l=ra[n]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(oa,{Manager:Ur,Socket:Or,io:oa,connect:oa});var Oc=class{constructor(){this.socket=null;this.connected=!1;this.connecting=!1;this.room=null;this.isShepherd=!1;this.myColor=8030874;this.remotes=new Map;this.scene=null;this.lastSnap=null;this.onLobby=null;this.onError=null;this.onStart=null;this.onSnap=null;this.onQuestEvent=null;this.onGameEvent=null;this.onDisconnected=null}setScene(e){this.scene=e}url(e){if(e.serverUrl){let t=e.serverUrl.trim();return!/^wss?:\/\//.test(t)&&!/^https?:\/\//.test(t)&&(t="ws://"+t),{uri:t,opts:{transports:["websocket"],path:"/socket.io",reconnection:!0,reconnectionAttempts:6}}}return{uri:"/?XTransformPort=3003",opts:{transports:["websocket","polling"],forceNew:!0,reconnection:!0,reconnectionAttempts:6,reconnectionDelay:1e3,timeout:1e4}}}connect(e){return this.connected?Promise.resolve():this.connecting?new Promise((t,i)=>{let n=setInterval(()=>{this.connected?(clearInterval(n),t()):this.connecting||(clearInterval(n),i(new Error("failed")))},200);setTimeout(()=>{clearInterval(n),i(new Error("timeout"))},12e3)}):(this.connecting=!0,new Promise((t,i)=>{let{uri:n,opts:r}=this.url(e);this.socket=oa(n,r);let o=setTimeout(()=>{this.connecting=!1,i(new Error("Connection timeout"))},12e3);this.socket.on("connect",()=>{clearTimeout(o),this.connected=!0,this.connecting=!1,t()}),this.socket.on("connect_error",a=>{this.connected||(clearTimeout(o),this.connecting=!1,i(a))}),this.socket.on("disconnect",()=>{this.connected=!1,this.onDisconnected&&this.onDisconnected()}),this.socket.on("room:update",a=>{this.room=a,this.onLobby&&this.onLobby(a)}),this.socket.on("room:error",a=>{this.onError&&this.onError(a.message)}),this.socket.on("game:start",a=>{var l;this.room=a,this.isShepherd=a.shepherdId===((l=this.socket)==null?void 0:l.id),this.myColor=8030874,this.onStart&&this.onStart(a)}),this.socket.on("snap",a=>{this.lastSnap=a,this.onSnap&&this.onSnap(a)}),this.socket.on("qevent",a=>{this.onQuestEvent&&this.onQuestEvent(a.event,a.data)}),this.socket.on("gevent",a=>{this.onGameEvent&&this.onGameEvent(a.event,a.data)})}))}create(e,t){var i;(i=this.socket)==null||i.emit("room:create",{name:e,mode:t})}join(e,t){var i;(i=this.socket)==null||i.emit("room:join",{name:e,code:t})}leave(){var e;(e=this.socket)==null||e.emit("room:leave"),this.clearRemotes(),this.room=null}start(){var e;(e=this.socket)==null||e.emit("game:start")}sendState(e){var t,i;this.connected&&((t=this.room)!=null&&t.started)&&((i=this.socket)==null||i.emit("pstate",e))}sendMonster(e){var t,i;this.connected&&((t=this.room)!=null&&t.started)&&((i=this.socket)==null||i.emit("mstate",e))}sendNoise(e,t,i){var n,r;this.connected&&((n=this.room)!=null&&n.started)&&((r=this.socket)==null||r.emit("noise",{x:e,z:t,radius:i}))}sendQuest(e,t){var i,n;this.connected&&((i=this.room)!=null&&i.started)&&((n=this.socket)==null||n.emit("qevent",{event:e,data:t}))}sendGame(e,t){var i,n;this.connected&&((i=this.room)!=null&&i.started)&&((n=this.socket)==null||n.emit("gevent",{event:e,data:t}))}ensureRemote(e){let t=this.remotes.get(e.id);if(t)return t;let i=new xt,n=new ue({color:5919820,roughness:.9}),r=new ue({color:e.color,roughness:.95}),o=new Q(new on(.26,.7,4,8),r);o.position.y=1.05,i.add(o);let a=new Q(new Jt(.17,10,8),n);a.position.y=1.68,i.add(a);let l=new Q(new on(.09,.5,3,6),n);l.position.set(-.12,.35,0);let c=l.clone();c.position.x=.12,i.add(l,c);let h=new Q(new je(.03,.035,.3,6),new ue({color:3355440}));return h.position.set(.3,1.1,.15),h.rotation.x=Math.PI/2,i.add(h),this.scene&&this.scene.add(i),t={id:e.id,name:e.name,color:e.color,group:i,head:a,tx:e.x,tz:e.z,tyaw:e.yaw,tpitch:e.pitch,moving:e.moving,crouch:e.crouch,downed:e.downed,dead:e.dead,flash:e.flash,walkT:0},this.remotes.set(e.id,t),t}clearRemotes(){for(let[,e]of this.remotes)this.scene&&this.scene.remove(e.group);this.remotes.clear()}applySnapshot(e){let t=new Set;for(let i of e.players){t.add(i.id);let n=this.ensureRemote(i);n.tx=i.x,n.tz=i.z,n.tyaw=i.yaw,n.tpitch=i.pitch,n.moving=i.moving,n.crouch=i.crouch,n.downed=i.downed,n.dead=i.dead,n.flash=i.flash,n.name=i.name}for(let[i,n]of this.remotes)t.has(i)||(this.scene&&this.scene.remove(n.group),this.remotes.delete(i))}update(e){for(let[,t]of this.remotes){let i=t.group,n=t.tx-i.position.x,r=t.tz-i.position.z,o=Math.min(1,e*10);i.position.x+=n*o,i.position.z+=r*o,i.rotation.y=t.tyaw+Math.PI,i.scale.y=t.crouch?.72:1,i.visible=!t.dead,t.downed?(i.rotation.x=Math.PI/2.2,i.position.y=.3):i.rotation.x=0,Math.hypot(n,r)>.01?(t.walkT+=e*9,i.children[2].rotation.x=Math.sin(t.walkT)*.55,i.children[3].rotation.x=-Math.sin(t.walkT)*.55):(i.children[2].rotation.x*=.8,i.children[3].rotation.x*=.8)}}remoteList(){let e=[];for(let[t,i]of this.remotes)e.push({id:t,pos:new M(i.tx,1,i.tz)});return e}};var lm=["they hear everything","crouch to move in silence","hold your breath when they are close","the torch is a beacon \u2014 and a comfort","gunshots buy seconds, not safety","three flames, three calls","the lens shows what the eye denies","static gathers where they walk","the crows know before you do","water carries lightning","the bell remembers who drowned it"],db=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,fb=`
varying vec2 vUv;
uniform sampler2D tDiffuse;
uniform float uTime, uGrain, uVig, uCA, uBlur, uFlash, uDamage, uFear, uPoison, uCamMode;
float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec2 uv = vUv;
  uv += vec2(sin(uv.y * 18.0 + uTime * 2.2), cos(uv.x * 15.0 + uTime * 1.7)) * (uFear * 0.0045);
  vec2 center = uv - 0.5;
  float r2 = dot(center, center);
  vec3 col;
  if (uBlur > 0.02) {
    col = vec3(0.0);
    for (int i = 0; i < 5; i++) {
      float t = float(i) / 4.0;
      col += texture2D(tDiffuse, uv - center * uBlur * 0.055 * t).rgb;
    }
    col /= 5.0;
  } else {
    col = texture2D(tDiffuse, uv).rgb;
  }
  float ca = uCA * (0.4 + r2 * 2.2);
  col.r = texture2D(tDiffuse, uv + center * ca).r;
  col.b = texture2D(tDiffuse, uv - center * ca).b;
  col += (rand(uv * (1.0 + fract(uTime) * 7.0)) - 0.5) * uGrain;
  float vig = smoothstep(0.92, 0.22, r2 * (1.0 + uVig * 1.6));
  col *= mix(1.0, vig, clamp(uVig + 0.25, 0.0, 1.0));
  col = mix(col, col * vec3(0.72, 1.08, 0.78), uPoison * 0.7);
  col = mix(col, vec3(0.42, 0.03, 0.03), uDamage * smoothstep(0.04, 0.5, r2));
  if (uCamMode > 0.01) {
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 sepia = vec3(lum) * vec3(1.18, 1.02, 0.78);
    col = mix(col, sepia, uCamMode * 0.94);
    col += (rand(uv * 3.7 + uTime) - 0.5) * 0.16 * uCamMode;
    col *= 1.0 - smoothstep(0.12, 0.55, r2) * 0.6 * uCamMode;
  }
  col += vec3(uFlash);
  gl_FragColor = vec4(col, 1.0);
}
`,Vu=class{constructor(e,t,i){this.holeTex=t;this.bloodTex=i;this.pool=[];this.idx=0;let n=new Dt(1,1);for(let r=0;r<44;r++){let o=new Q(n,new Rt({map:t,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));o.visible=!1,e.add(o),this.pool.push(o)}}place(e,t,i){let n=this.pool[this.idx];this.idx=(this.idx+1)%this.pool.length;let r=n.material;r.map=i==="hole"?this.holeTex:this.bloodTex,r.needsUpdate=!0,n.position.copy(e).addScaledVector(t,.02);let o=e.clone().add(t);n.lookAt(o);let a=i==="hole"?.16+Math.random()*.07:1.1+Math.random()*.9;n.scale.setScalar(a),i==="blood"&&(n.rotation.z=Math.random()*Math.PI*2),n.visible=!0}},Gu=class{constructor(e){this.scene=new gr;this.audio=new xc;this.input=new vc;this.net=new Oc;this.world=null;this.player=null;this.shepherd=null;this.mother=null;this.husks=[];this.quests=null;this.projectiles=[];this.halluc=null;this.hallucT=0;this.whisperT=8;this.decals=null;this.candles=[];this.ghosts=[];this.merchant=null;this.graveTriggered=!1;this.electrified=new Map;this.doorHits=new Map;this.lootStock={};this.state="menu";this.mode="sp";this.camMode="third";this.timeLeft=720;this.sendT=0;this.playTime=0;this.monsterHp=500;this.netPlayerId="p0";this.isHost=!1;this.downedBleed=0;this.respawnTimer=-1;this.escapedSent=!1;this.gameEnded=!1;this.overlayOpen=!1;this.overlayName=null;this.camView=!1;this.cameraFilm=0;this.radioFreq=94.7;this.radioMsgT=0;this.weatherT=20;this.weatherPhase="clear";this.rain=null;this.rainPos=null;this.lightningT=8;this.flashV=0;this.flashBoost=0;this.rt=null;this.postScene=new gr;this.postCam=new Cs(-1,1,1,-1,0,1);this.postUniforms={tDiffuse:{value:null},uTime:{value:0},uGrain:{value:.045},uVig:{value:.5},uCA:{value:.0016},uBlur:{value:0},uFlash:{value:0},uDamage:{value:0},uFear:{value:0},uPoison:{value:0},uCamMode:{value:0}};this.postEnabled=!1;this.damageV=0;this.pendingNote=null;this.loop=()=>{requestAnimationFrame(this.loop);let e=performance.now(),t=(e-this._last)/1e3;this._last=e;let i=Math.min(.1,t);if(this.ui.update(i),this.audio.update(i),this.autoPerf(t),this.postUniforms.uTime.value=e*.001,this.state==="playing"&&this.player&&this.world&&this.quests?(this.playTime+=i,this.step(i)):this.world&&this.player===null&&this.world.updateAmbient(i,new M,this.playTime),this.player){this.postUniforms.uBlur.value+=((this.player.sprinting?.8:0)-this.postUniforms.uBlur.value)*He(i*6,0,1);let r=this.player.fear>70?(this.player.fear-70)/30:0;this.postUniforms.uFear.value+=(r-this.postUniforms.uFear.value)*He(i*3,0,1),this.postUniforms.uPoison.value+=((this.player.statuses.poison>0?1:0)-this.postUniforms.uPoison.value)*He(i*4,0,1),this.postUniforms.uVig.value=.45+this.player.fear/260+(this.player.health<35?.25:0)}this.flashV=Math.max(0,this.flashV-i*1.8),this.flashBoost=Math.max(0,this.flashBoost-i*.9),this.damageV=Math.max(0,this.damageV-i*1.4),this.postUniforms.uFlash.value=this.flashV,this.postUniforms.uDamage.value=this.damageV,this.postUniforms.uCamMode.value+=((this.camView?1:0)-this.postUniforms.uCamMode.value)*He(i*8,0,1),this.overlayOpen&&this.player&&this.quests&&(this.overlayName==="map"?this.ui.setMapData({px:this.player.pos.x,pz:this.player.pos.z,yaw:this.player.yaw,target:this.quests.currentTarget(),visited:this.mapVisited}):this.overlayName==="radio"&&this.refreshRadio());let n=this.player?this.player.camera:this.menuCam;this.postEnabled&&this.rt?(this.renderer.setRenderTarget(this.rt),this.renderer.render(this.scene,n),this.renderer.setRenderTarget(null),this.postUniforms.tDiffuse.value=this.rt.texture,this.renderer.render(this.postScene,this.postCam)):this.renderer.render(this.scene,n)};this._last=performance.now();this.menuCam=new ii(60,1,.1,400);this.perfEma=60;this.perfTier=0;this.perfT=0;this._attackHeld=!1;this.mapVisited=new Set;this.container=e,this.settings=fp(),this.camMode=this.settings.camMode,this.renderer=new pc({antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.applyQuality(),e.appendChild(this.renderer.domElement),this.scene.background=new qe(263692),this.scene.fog=new mr(263692,.032),this.input.attach(this.renderer.domElement),this.net.setScene(this.scene),wp(this.scene),this.buildPostFX(),this.ui=new Rc(e,this.input,this.settings,{onStartSP:t=>this.startSP(t),onCreateRoom:(t,i)=>this.createRoom(t,i),onJoinRoom:(t,i)=>this.joinRoom(t,i),onStartGame:()=>this.net.start(),onLeaveRoom:()=>this.net.leave(),onRespawn:()=>this.respawn(),onQuitToMenu:()=>this.quitToMenu(),onResume:()=>this.resume(),onSettingsChanged:t=>this.applySettings(t),onToggleOverlay:t=>this.toggleOverlay(t),onCycleWeapon:()=>this.cycleWeapon(),onRadioTune:t=>{this.radioFreq=t,this.radioMsgT=0}}),this.ui.onSprintToggle=()=>{},this.input.onKeyExtra=t=>this.onKey(t),window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state==="playing"&&!this.isTouch()&&!this.overlayOpen&&this.pause()}),window.addEventListener("blur",()=>{this.state==="playing"&&this.pause()}),this.renderer.domElement.addEventListener("click",()=>{this.audio.ensure(),this.state==="playing"&&!this.isTouch()&&!this.overlayOpen&&this.input.requestLock()}),this.resize(),this.loop()}isTouch(){return matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}applyQuality(){let e=this.settings.quality;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e==="low"?1:e==="medium"?1.35:2)),this.renderer.shadowMap.enabled=e==="high",this.renderer.shadowMap.type=Is,this.renderer.toneMapping=Do,this.renderer.toneMappingExposure=1.22,this.renderer.outputColorSpace=Ft,this.postEnabled=e!=="low",this.resize()}buildPostFX(){let e=new Ki({uniforms:this.postUniforms,vertexShader:db,fragmentShader:fb,depthTest:!1,depthWrite:!1}),t=new Q(new Dt(2,2),e);t.frustumCulled=!1,this.postScene.add(t)}resize(){let e=window.innerWidth,t=window.innerHeight;if(this.renderer.setSize(e,t),this.postEnabled){let i=new Ce;this.renderer.getDrawingBufferSize(i),this.rt?this.rt.setSize(Math.max(2,i.x),Math.max(2,i.y)):this.rt=new Ai(Math.max(2,i.x),Math.max(2,i.y))}this.player&&(this.player.camera.aspect=e/t,this.player.camera.updateProjectionMatrix())}applySettings(e){let t=e.quality!==this.settings.quality;this.settings=e,pp(e),this.audio.setVolume(e.volume),this.camMode=e.camMode,this.ui.refreshTouch(e),t&&this.applyQuality()}onKey(e){if(e==="T_pause"&&this.state==="playing"){this.pause();return}if(this.state==="overlay"){(e==="KeyM"||e==="KeyJ"||e==="KeyU"||e==="Escape"||e==="T_pause")&&this.closeOverlay();return}if(this.state==="playing"&&this.player)switch(e){case"KeyE":case"T_interact":this.tryInteract();break;case"KeyR":case"T_reload":this.player&&this.player.reload(this.audio);break;case"KeyF":case"T_flash":this.player.toggleFlashlight(this.audio);break;case"KeyQ":case"T_grenade":this.throwGrenade();break;case"KeyH":case"T_heal":this.autoHeal();break;case"KeyV":case"T_cam":this.camMode=this.camMode==="first"?"third":"first";break;case"KeyG":case"T_throw":this.throwSupply();break;case"KeyT":this.placeCandle();break;case"KeyX":this.useCables();break;case"KeyI":this.toggleCameraView();break;case"KeyM":this.toggleOverlay("map");break;case"KeyJ":this.toggleOverlay("quest");break;case"KeyU":this.toggleOverlay("radio");break;case"Digit1":this.switchWeapon("knife");break;case"Digit2":this.switchWeapon("pistol");break;case"Digit3":this.switchWeapon("rifle");break;case"Digit4":this.switchWeapon("axe");break;case"Digit5":this.switchWeapon("torch");break}}switchWeapon(e){!this.player||!this.player.hasWeapon(e)||this.player.current!==e&&(this.player.current=e,this.player.reloadT=0,this.audio.play("click",.4))}cycleWeapon(){if(!this.player)return;let t=["knife","pistol","rifle","axe","torch"].filter(n=>this.player.hasWeapon(n));if(t.length<2)return;let i=t.indexOf(this.player.current);this.switchWeapon(t[(i+1)%t.length])}toggleOverlay(e){if(this.overlayOpen&&this.overlayName===e){this.closeOverlay();return}if(this.overlayOpen&&this.closeOverlay(),this.state!=="playing"||!this.player||!this.quests)return;this.overlayOpen=!0,this.overlayName=e,this.state="overlay",this.input.exitLock();let t=()=>{this.closeOverlay()};e==="map"?this.ui.openMap(t):e==="radio"?(this.refreshRadio(),this.ui.openRadio(t)):this.ui.showQuestLog(this.quests.getQuestLog(),t),this.audio.play("paper",.4)}closeOverlay(){this.overlayOpen&&(this.overlayOpen=!1,this.overlayName=null,this.ui.show(null),this.state==="overlay"&&(this.state="playing"),this.isTouch()||setTimeout(()=>this.input.requestLock(),50))}refreshRadio(){let e=this.nearestHunterDist(),t=e<4?5:e<8?4:e<14?3:e<22?2:e<34?1:0,i=null;Math.abs(this.radioFreq-94.7)<.15?i=". .. / 7 3 1 9 / the shed by the farm remembers":Math.abs(this.radioFreq-101.3)<.15?i="...do not let it ring again... we were starving...":Math.abs(this.radioFreq-88.3)<.15&&(i="salt... three circles... at the old stones..."),this.ui.setRadioData({freq:this.radioFreq,level:t,message:i})}nearestHunterDist(){var i,n,r;let e=1e9,t=(i=this.player)==null?void 0:i.pos;if(!t)return 1e9;(n=this.shepherd)!=null&&n.active&&(e=Math.min(e,this.shepherd.pos.distanceTo(t))),(r=this.mother)!=null&&r.active&&(e=Math.min(e,this.mother.pos.distanceTo(t)));for(let o of this.husks)o.dead||(e=Math.min(e,o.pos.distanceTo(t)));return e}toggleCameraView(){if(!this.player||(this.player.inv.camera||0)<=0){this.ui.message("You have no camera");return}if(this.camView)this.camView=!1;else{if(this.cameraFilm<=0){this.ui.message("The film is spent");return}this.camView=!0}this.audio.play("click",.5),this.ui.setCameraMode(this.camView,this.cameraFilm)}updateGhosts(e){if(!this.player||!this.world)return;let t=this.player;for(let i of this.ghosts){i.t+=e,i.hiddenT>0&&(i.hiddenT-=e);let n=i.t*.05,r=i.humanoid;r.group.position.set(i.anchor.x+Math.cos(n)*1.6,.05+Math.sin(i.t*.7)*.06,i.anchor.z+Math.sin(n)*1.6),r.group.rotation.y=n+Math.PI/2,un(r,i.t);let o=r.group.position.distanceTo(this.world.mirrorPos)<4.5,a=t.pos.distanceTo(this.world.mirrorPos)<5.5&&new M().subVectors(this.world.mirrorPos,t.pos).normalize().dot(new M(-Math.sin(t.yaw),0,-Math.cos(t.yaw)))>.4,l=this.camView||o&&a;r.group.visible=l&&i.hiddenT<=0,l&&i.hiddenT<=0&&r.group.position.distanceTo(t.pos)<12&&(this.whisperT-=e*2.5,Math.random()<e*.25&&this.audio.play3d("whisper",t.pos,t.yaw,r.group.position,.5))}}photograph(){if(!this.player)return;if(this.cameraFilm<=0){this.ui.message("The film is spent"),this.camView=!1,this.ui.setCameraMode(!1,0);return}this.cameraFilm--,this.audio.play("shutter",.8),this.ui.setCameraMode(this.camView,this.cameraFilm);let e=new M(0,0,-1).applyQuaternion(this.player.camera.quaternion);for(let t of this.ghosts){if(t.hiddenT>0)continue;let n=t.humanoid.group.position.clone().add(new M(0,1.2,0)).clone().sub(this.player.eyePos);if(n.length()<20&&n.normalize().dot(e)>.93){t.hiddenT=30,this.player.calmFear(35),this.audio.play("chime",.6),this.ui.message("The lens drank its image. You feel lighter.",!1);return}}this.ui.message("Nothing but the dark on this frame",!1)}stepWeather(e){var n,r,o;if(this.weatherT-=e,this.weatherT<=0){let a={clear:"mist",mist:"rain",rain:"storm",storm:"clear"};this.weatherPhase=a[this.weatherPhase],this.weatherT=this.weatherPhase==="clear"?70+Math.random()*50:this.weatherPhase==="mist"?40:this.weatherPhase==="rain"?55+Math.random()*35:30+Math.random()*25}let t=this.weatherPhase==="rain"?.55:this.weatherPhase==="storm"?1:0,i=this.weatherPhase==="storm"?1:0;if(Qt.rain+=(t-Qt.rain)*He(e*.35,0,1),Qt.storm+=(i-Qt.storm)*He(e*.3,0,1),this.audio.setRain(Qt.rain),(n=this.world)==null||n.setEnv(Qt.rain,Qt.storm),this.rain&&this.rainPos&&this.player){let a=this.rainPos.length/3,l=24*e;for(let c=0;c<a;c++){let h=this.rainPos[c*3+1]-l;h<0&&(h=16+Math.random()*3,this.rainPos[c*3]=(Math.random()-.5)*34,this.rainPos[c*3+2]=(Math.random()-.5)*34),this.rainPos[c*3+1]=h}this.rain.geometry.getAttribute("position").needsUpdate=!0,this.rain.position.set(this.player.pos.x,0,this.player.pos.z),this.rain.material.opacity=.06+Qt.rain*.4,this.rain.visible=Qt.rain>.04}if(Qt.storm>.5&&(this.lightningT-=e,this.lightningT<=0)){this.lightningT=5+Math.random()*9,this.flashV=.85+Math.random()*.15,this.flashBoost=.18;let a=350+Math.random()*1200;if(setTimeout(()=>this.audio.play("thunder",.9),a),this.world)for(let l=0;l<this.world.puddles.length;l++){let c=this.world.puddles[l],h=d=>d.pos.distanceTo(c.pos)<c.radius+.6;(r=this.shepherd)!=null&&r.active&&h(this.shepherd)&&(this.shepherd.knockdown(4.5),this.audio.play("sizzle",.7)),(o=this.mother)!=null&&o.active&&h(this.mother)&&(this.mother.knockdown(4.5),this.audio.play("sizzle",.7));for(let d of this.husks)!d.dead&&h(d)&&d.onHit(45)}}if(this.world){let a=1.05-Qt.storm*.3;this.world.moonLight.intensity=a+this.flashBoost*4}}async startSP(e){var i,n,r,o;this.audio.ensure(),this.mode="sp",this.isHost=!0,this.ui.show("loading"),this.ui.loading(.05,lm[Math.floor(Math.random()*lm.length)]),await this.buildGame();let t=e?mp():null;if(e&&t){this.player.pos.set((n=(i=t.pos)==null?void 0:i.x)!=null?n:0,0,(o=(r=t.pos)==null?void 0:r.z)!=null?o:52),this.player.inv=ti(ti({},this.player.inv),t.inventory),this.player.weapons=t.weapons.filter(l=>l==="knife"||l==="pistol"||l==="rifle"||l==="axe"||l==="torch"),this.player.weapons.length===0&&(this.player.weapons=["knife"]),this.quests.restore(qr(ti({},t.flags),{notesRead:t.notes})),this.playTime=t.playTime||0;let a=t.stats||{};a.batteryType===1?this.player.batteryType="lith":a.batteryType===2&&(this.player.batteryType="nuc"),this.player.ritualBlessed=!!a.ritualBlessed,this.cameraFilm=a.cameraFilm||0,this.graveTriggered=!!a.graveTriggered,this.ui.message("Welcome back to Hollow Vale",!0)}else yp(),this.player.pos.set(0,0,52),this.ui.subtitle("Hollow Vale, 1897. The village answered a bell that never rang...",6);this.beginPlay()}async createRoom(e,t){this.audio.ensure(),this.ui.mpStatus("Connecting to the night...");try{await this.net.connect(this.settings),this.net.create(e,t),this.ui.mpStatus("")}catch(i){this.ui.mpStatus("Cannot reach the server. Check the address in Settings.")}}async joinRoom(e,t){if(this.audio.ensure(),!t){this.ui.mpStatus("Enter a room code.");return}this.ui.mpStatus("Knocking on the door...");try{await this.net.connect(this.settings),this.net.join(e,t)}catch(i){this.ui.mpStatus("Cannot reach the server. Check the address in Settings.")}}async buildGame(){this.world&&(this.scene.remove(this.world.root),this.world=null);for(let n of this.husks)this.scene.remove(n.mesh());this.husks=[],this.shepherd&&(this.scene.remove(this.shepherd.mesh()),this.shepherd=null),this.mother&&(this.scene.remove(this.mother.mesh()),this.mother=null);for(let n of this.projectiles)this.scene.remove(n.mesh);this.projectiles=[];for(let n of this.candles)this.scene.remove(n.light),this.scene.remove(n.flame);this.candles=[];for(let n of this.ghosts)this.scene.remove(n.humanoid.group);this.ghosts=[],this.merchant&&(this.scene.remove(this.merchant.group),this.merchant=null),this.graveTriggered=!1,this.electrified.clear(),this.doorHits.clear(),this.net.clearRemotes(),this.ui.loading(.3,"raising the houses..."),await Uc(),this.world=Ep(this.scene,this.settings.quality),this.ui.loading(.62,"waking the dead..."),await Uc(),this.decals=new Vu(this.scene,Ji("hole"),Ji("blood"));let e=this.settings.quality==="low"?350:800;this.rainPos=new Float32Array(e*3);for(let n=0;n<e;n++)this.rainPos[n*3]=(Math.random()-.5)*34,this.rainPos[n*3+1]=Math.random()*18,this.rainPos[n*3+2]=(Math.random()-.5)*34;let t=new $t;t.setAttribute("position",new bi(this.rainPos,3)),this.rain=new cs(t,new Bn({map:Ji("rain"),size:.85,transparent:!0,opacity:0,depthWrite:!1,sizeAttenuation:!0})),this.rain.visible=!1,this.scene.add(this.rain);for(let n of[new M(1.6,0,-33),new M(-36,0,-39)]){let r=Yn({face:"ghost",outfit:"robe",skin:"#cfd4dc",scale:1.04,glowEyes:!1});r.group.traverse(o=>{let a=o;if(a.isMesh){let l=a.material;l.transparent=!0,l.opacity=.4,l.depthWrite=!1,l.emissive=new qe(1712168),l.emissiveIntensity=.5}}),r.group.visible=!1,this.scene.add(r.group),this.ghosts.push({humanoid:r,anchor:n,t:Math.random()*20,hiddenT:0,captured:!1})}this.player=new bc(this.scene),this.player.id=this.netPlayerId,this.player.name=this.settings.playerName,this.player.onNoise=(n,r)=>{var o,a;if(this.mode==="sp"||this.mode==="coop"&&this.isHost){(o=this.shepherd)==null||o.hear(n,r),(a=this.mother)==null||a.hear(n,r);for(let l of this.husks)l.hear(n,r)}else this.net.sendNoise(n.x,n.z,r)},this.player.onDamage=()=>{this.ui.flashDamage(),this.damageV=.85,this.audio.play("flesh",.8),this.decals&&this.player&&this.decals.place(new M(this.player.pos.x+(Math.random()-.5),.03,this.player.pos.z+(Math.random()-.5)),new M(0,1,0),"blood"),this.player&&this.player.downed&&(this.downedBleed=60,this.ui.message(this.mode==="versus"?"You are dying...":"You are down \u2014 crawl to a friend",!0))},this.player.onBulletImpact=(n,r)=>{var o;return(o=this.decals)==null?void 0:o.place(n,r,"hole")},this.player.onCandlePlace=n=>this.spawnCandle(n),this.shepherd=new Mc(this.scene),this.shepherd.controlled=!1,this.mother=new Tc(this.scene),this.mother.controlled=!1;for(let n of Ap)this.husks.push(new Zo({pos:n}));this.merchant=Yn({face:"merchant",outfit:"apron",hair:"hat",skin:"#8a7f70",scale:1.02}),this.merchant.group.position.copy(this.world.merchantPos),this.merchant.group.rotation.y=Math.PI,this.scene.add(this.merchant.group),this.world.interactables.push({id:"peddler",pos:this.world.merchantPos.clone().setY(1.2),radius:2.8,prompt:"Trade with the peddler",enabled:!0,onInteract:()=>this.openTrade()}),this.lootStock={green:{cloth:2,bottle:1,bandage:1},blue:{bandage:1,ammo_pistol:6,battery:1,brick:1},purple:{ammo_rifle:4,pills:2,battery_lith:1,grenade:1},gold:{ammo_rifle:4,bandage:2,battery_nuc:1,grenade:2,trinket:2}},this.world.lootCrates.forEach((n,r)=>{let o=this.world.interactables.find(a=>a.id===n.id);o&&(o.onInteract=()=>this.openCrate(r))}),this.ui.loading(.85,"binding the curse..."),await Uc();let i={message:(n,r)=>this.ui.message(n,r),subtitle:(n,r)=>this.ui.subtitle(n,r),onNoise:(n,r)=>{var o,a;if(this.mode==="sp"||this.mode==="coop"&&this.isHost){(o=this.shepherd)==null||o.hear(n,r),(a=this.mother)==null||a.hear(n,r);for(let l of this.husks)l.hear(n,r)}else this.net.sendNoise(n.x,n.z,r)},onStage:n=>this.onStage(n),onNoteRead:n=>{this.pendingNote=n},onPickup:(n,r)=>this.onPickup(n,r),netEmit:(n,r)=>this.questEmit(n,r),isNet:()=>this.mode!=="sp"};this.quests=new wc(this.world,i),this.quests.localPlayerRef=this.player,this.ui.loading(1,"ready..."),await Uc()}spawnCandle(e){if(this.candles.length>=4){let n=this.candles.shift();this.scene.remove(n.light),this.scene.remove(n.flame)}let t=new Zt(16756832,3.5,7,1.8);t.position.copy(e).add(new M(0,.25,0));let i=new Mn(new rn({map:Ji("flame"),transparent:!0,depthWrite:!1,opacity:.9}));i.scale.setScalar(.3),i.position.copy(t.position),this.scene.add(t,i),this.candles.push({light:t,flame:i,t:480}),this.audio.play("brazier",.3),this.ui.message("A candle keeps the dread at arm's length")}openCrate(e){if(!this.world||!this.player)return;let t=this.world.lootCrates[e];if(!t||t.opened)return;t.opened=!0;let i=this.world.interactables.find(h=>h.id===t.id);i&&(i.used=!0,i.enabled=!1);let n=this.lootStock[t.rarity]||{},r=Object.keys(n),o={},a=2+Math.floor(Math.random()*2);for(let h=0;h<a&&r.length;h++){let d=r.splice(Math.floor(Math.random()*r.length),1)[0];o[d]=n[d]}for(let[h,d]of Object.entries(o))this.player.inv[h]=(this.player.inv[h]||0)+d;o.ammo_pistol&&(this.player.mag.pistol=Math.min(Ec.pistol.magSize,this.player.mag.pistol)),this.audio.play("pickup",.7);let l=Object.entries(o).map(([h,d])=>`${h.replace("_"," ")} x${d}`).join(", "),c=t.rarity==="gold"?"GOLD cache":t.rarity==="purple"?"violet cache":t.rarity==="blue"?"blue cache":"worn cache";this.ui.message(`${c}: ${l}`,t.rarity==="gold"||t.rarity==="purple")}openTrade(){if(!this.player)return;let e=this.player.inv.trinket||0,t=[{label:`Bandage \u2014 1 trinket (you have ${e})`,afford:e>=1,give:{bandage:1},cost:1},{label:"Revolver Ammo x6 \u2014 1 trinket",afford:e>=1,give:{ammo_pistol:6},cost:1},{label:"Nightshade Sprig \u2014 1 trinket",afford:e>=1,give:{herb:1},cost:1},{label:"Lithium Cell \u2014 2 trinkets",afford:e>=2,give:{battery_lith:1},cost:2},{label:"Morphine Pills \u2014 1 trinket",afford:e>=1,give:{pills:1},cost:1},{label:"Fresh Candle \u2014 1 trinket",afford:e>=1,give:{candle:1},cost:1}];this.ui.showTrade(t.map(i=>({label:i.label,afford:i.afford})),i=>{let n=t[i];if(!(!n||(this.player.inv.trinket||0)<n.cost)){this.player.inv.trinket-=n.cost;for(let[r,o]of Object.entries(n.give))this.player.inv[r]=(this.player.inv[r]||0)+o;this.audio.play("pickup",.6),this.openTrade()}},()=>{}),this.state==="playing"&&(this.overlayOpen=!0,this.overlayName="trade",this.state="overlay",this.input.exitLock())}useCables(){if(!this.player||!this.world)return;if((this.player.inv.cables||0)<=0){this.ui.message("You have no splice cables");return}let e=-1,t=3.6;if(this.world.puddles.forEach((n,r)=>{let o=n.pos.distanceTo(this.player.pos);o<t&&(t=o,e=r)}),e<0){this.ui.message("No water here to splice into");return}this.player.inv.cables--,this.electrified.set(e,25);let i=this.world.puddles[e].mesh.material;i.emissive=new qe(2818008),this.audio.play("sizzle",.8),this.ui.message("The water hums with current \u2014 lure them in",!0)}stepElectric(e){var i,n,r,o,a,l;if(!this.world)return;for(let[c,h]of[...this.electrified.entries()]){let d=h-e;if(d<=0){this.electrified.delete(c);let u=this.world.puddles[c].mesh.material;u.emissive=new qe(0)}else this.electrified.set(c,d),Math.random()<e*2&&this.audio.play3d("sizzle",(n=(i=this.player)==null?void 0:i.pos)!=null?n:null,(o=(r=this.player)==null?void 0:r.yaw)!=null?o:0,this.world.puddles[c].pos,.25)}let t=(c,h)=>{for(let[d,u]of this.electrified){let f=this.world.puddles[d];if(u>0&&c.pos.distanceTo(f.pos)<f.radius+.5){h();break}}};(a=this.shepherd)!=null&&a.active&&t(this.shepherd,()=>{this.shepherd.state!=="down"&&(this.shepherd.knockdown(8),this.audio.play("sizzle",.9),this.ui.message("The Shepherd convulses in the charged water",!1))}),(l=this.mother)!=null&&l.active&&t(this.mother,()=>{this.mother.state!=="down"&&(this.mother.knockdown(8),this.audio.play("sizzle",.9),this.ui.message("The Mother collapses in the charged water",!1))});for(let c of this.husks)c.dead||t(c,()=>c.onHit(60))}stepCrows(){if(this.world)for(let e of this.world.crowSpots){if(e.flown)continue;this.nearestHunterDistTo(e.pos)<14&&(e.fly(),this.audio.play("crow",.75))}}nearestHunterDistTo(e){var i,n;let t=1e9;return(i=this.shepherd)!=null&&i.active&&(t=Math.min(t,this.shepherd.pos.distanceTo(e))),(n=this.mother)!=null&&n.active&&(t=Math.min(t,this.mother.pos.distanceTo(e))),t}stepGraves(){if(!this.world||!this.player||this.graveTriggered)return;let e=this.world.graveArea,t=this.player.pos;if(t.x>e.minX&&t.x<e.maxX&&t.z>e.minZ&&t.z<e.maxZ){this.graveTriggered=!0;let i=[...this.world.gravePoints].sort(()=>Math.random()-.5).slice(0,3);for(let n of i){let r=Rp(n.clone());this.husks.push(r)}this.audio.play("scare",.9),this.ui.subtitle("The ground gives them back. Walk softly among the graves.",5)}}stealthPrompt(){if(!this.player||!this.quests||this.player.current!=="knife"||this.player.stealthKillT>0)return null;for(let e of this.husks){if(e.dead||e.pos.distanceTo(this.player.pos)>1.8)continue;let i=new M(Math.sin(e.group.rotation.y),0,Math.cos(e.group.rotation.y)),n=new M().subVectors(this.player.pos,e.pos).normalize();if(i.dot(n)>.45&&e.target.distanceTo(e.pos)>3)return"E \u2014 Silent kill"}return null}beginPlay(){this.state="playing",this.gameEnded=!1,this.escapedSent=!1,this.overlayOpen=!1,this.ui.show(null),this.ui.setHUDEnabled(!0),this.ui.fadeIn(),this.isTouch()||setTimeout(()=>this.input.requestLock(),60),this.timeLeft=720,this.mode==="versus"&&this.net.isShepherd?(this.shepherd.spawn(new M(0,0,-40)),this.shepherd.controlled=!0,this.shepherd.active=!0,this.shepherd.group.visible=!0,this.camMode="third",this.player.pos.set(0,0,-36),this.ui.message("You are THE SHEPHERD. Ring the bell one last time.",!0)):this.mode==="versus"?(this.shepherd.despawn(),this.mother.despawn(),this.player.pos.set(0,0,52),this.ui.message("Survive. The Shepherd walks tonight.",!0)):(this.player.pos.y=0,this.shepherd.despawn(),this.mother.despawn())}wireNet(){this.net.onLobby=e=>{var t;this.ui.show("lobby"),this.ui.lobbyUpdate(qr(ti({},e),{isHost:((t=e.players[0])==null?void 0:t.isHost)||!1}))},this.net.onError=e=>this.ui.mpStatus(e),this.net.onStart=async e=>{var t,i;this.mode=e.mode==="versus"?"versus":"coop",this.isHost=((t=e.players[0])==null?void 0:t.isHost)||!1,this.netPlayerId=((i=this.net.socket)==null?void 0:i.id)||"p"+Math.floor(Math.random()*999),this.ui.show("loading"),this.ui.loading(.2,"summoning the others..."),await this.buildGame(),this.mode==="coop"&&(this.isHost=!0),this.mode==="versus"&&(this.isHost=!1),this.beginPlay()},this.net.onSnap=e=>this.applySnap(e),this.net.onQuestEvent=(e,t)=>{this.quests&&(this.quests.applyRemote(e,t),e==="give"&&this.player&&this.quests.giveToPlayer(this.player,t.items),e==="craft"&&(t.what==="rifle"&&this.ui.message("Someone crafted the Hunter's Rifle"),t.what==="remedy"&&this.ui.message("The remedy is brewed")))},this.net.onGameEvent=(e,t)=>this.applyGameEvent(e,t),this.net.onDisconnected=()=>{this.state==="playing"&&(this.ui.message("Connection lost \u2014 the night swallows you",!0),this.quitToMenu())}}applySnap(e){this.player&&(this.net.applySnapshot(e),e.monster&&this.shepherd&&(this.shepherd.netPos.set(e.monster.x,0,e.monster.z),this.shepherd.netYaw=e.monster.yaw,this.shepherd.group.visible=!0,this.shepherd.active=!0,this.shepherd.state=e.monster.state),typeof e.time=="number"&&(this.timeLeft=e.time))}applyGameEvent(e,t){switch(e){case"mhit":{t.target===this.netPlayerId&&this.player&&!this.player.downed&&this.monsterAttackLocal(t.dmg);break}case"revive":{t.target===this.netPlayerId&&this.player&&(this.player.downed=!1,this.player.dead=!1,this.player.health=40,this.ui.message("Your friend pulled you back from the dark",!0));break}case"died":{this.ui.message(`${t.name||"A friend"} was taken`);break}case"escaped":{this.gameEnded||this.endGame(!0,"A survivor slipped through the gate.");break}case"gameover":{this.gameEnded||t.winner==="monster"&&this.endGame(!1,t.text||"The Shepherd claimed the night.");break}case"noise":{if(this.mode==="coop"&&this.isHost&&this.shepherd){this.shepherd.hear(new M(t.x,0,t.z),t.radius);for(let i of this.husks)i.hear(new M(t.x,0,t.z),t.radius)}break}}}questEmit(e,t){switch(e){case"give":{this.player&&this.quests&&this.quests.giveToPlayer(this.player,t.items),this.net.sendQuest("give",t);break}case"craft":{t.what==="rifle"&&this.player&&(this.player.giveWeapon("rifle"),this.player.inv.rifle_stock=0,this.player.inv.rifle_barrel=0,this.player.inv.ammo_rifle=(this.player.inv.ammo_rifle||0)+6,this.switchWeapon("rifle")),this.net.sendQuest("craft",t);break}case"pickup":{this.net.sendQuest("pickup",t);break}default:this.net.sendQuest(e,t)}}onStage(e){this.mode==="sp"&&this.saveGame(),this.shepherd&&(this.mode==="sp"||this.mode==="coop"&&this.isHost)&&(e>=1&&!this.shepherd.active&&(this.shepherd.spawn(new M(24,0,30)),this.ui.subtitle("Something answered. The lantern light drifts between the houses...",6),this.audio.play("bell",.5)),this.shepherd.rage=He(e*.14,0,.85)),this.mother&&this.mode==="sp"&&(e>=3&&!this.mother.active&&(this.mother.spawn(wu.clone()),this.ui.subtitle("A second lantern? No \u2014 a long white dress drifts past the eastern fields.",7),this.audio.play("coo",.8)),this.mother.rage=He(e*.12,0,.7));let t={1:"CHAPTER II \u2014 THE CHURCH OF THE BACKWARDS BELL",2:"CHAPTER III \u2014 THREE FLAMES",3:"CHAPTER IV \u2014 THE DROWNED AMULET",4:"CHAPTER V \u2014 THE UNMAKING",5:"CHAPTER VI \u2014 RUN FOR THE GATE"};t[e]&&this.ui.message(t[e],!0)}onPickup(e,t){if(this.questEmit("pickup",{id:e}),this.player&&this.quests){let i={ammo_pistol:["ammo_pistol",6],ammo_rifle:["ammo_rifle",4],bandage:["bandage",1],pills:["pills",1],battery:["battery",1],grenade:["grenade",1],herb:["herb",1],cloth:["cloth",1],splint:["splint",1],battery_lith:["battery_lith",1],battery_nuc:["battery_nuc",1],lockpick:["lockpick",1],camera:["camera",1],radio:["radio",1],candle:["candle",1],bottle:["bottle",1],brick:["brick",1],trinket:["trinket",1],cables:["cables",1],master_key:["master_key",1],salt:["salt",0]};if(i[t]){let[n,r]=i[t];r>0&&(this.player.inv[n]=(this.player.inv[n]||0)+r),t==="camera"&&(this.cameraFilm=Math.max(this.cameraFilm,8)),this.audio.play("pickup",.5)}else t==="church_key"||t==="iron_key"?(this.player.inv[t]=1,this.audio.play("pickup",.6)):t==="amulet"?(this.player.inv.amulet=1,this.audio.play("bell",.4)):t==="torch"||t==="axe"?(this.player.giveWeapon(t),this.audio.play("craft",.6)):this.audio.play("pickup",.4)}}tryInteract(){if(!this.player||!this.world||!this.quests||this.player.downed||this.mode==="versus"&&this.net.isShepherd)return;let e=this.player.pos;if(this.stealthPrompt()){let n=this.husks.find(r=>!r.dead&&r.pos.distanceTo(e)<1.8);if(n){let r=n;this.player.beginStealthKill(this.audio,r.pos),this.player.onStealthKill=()=>{r.onHit(999),this.decals&&this.decals.place(new M(r.pos.x,.03,r.pos.z),new M(0,1,0),"blood"),this.audio.play("stab",.8)};return}}for(let n of this.husks)if(n.dead&&n.lootable&&!n.looted&&n.pos.distanceTo(e)<2.2){let r=n.searchLoot();if(r){for(let[o,a]of Object.entries(r))this.player.inv[o]=(this.player.inv[o]||0)+a;this.audio.play("paper",.5),this.ui.message("Searched the remains: "+Object.entries(r).map(([o,a])=>`${o} x${a}`).join(", "))}return}if(this.player.current==="axe"){for(let[n,r]of this.world.doors)if(r.locked&&!(n!=="barn_storage"&&n!=="clinic_back")&&Math.hypot(r.pivot.position.x-e.x,r.pivot.position.z-e.z)<2.6){let o=(this.doorHits.get(n)||0)+1;this.doorHits.set(n,o),this.audio.play("bang",.5),this.player.addShake(.3,.15),o>=3?(r.locked=!1,this.ui.message("The door bursts open under the axe",!0)):this.ui.message(`The axe bites the wood (${o}/3)`);return}}let i=null;for(let n of this.world.interactables){if(!n.enabled||n.used)continue;let r=Math.hypot(n.pos.x-e.x,n.pos.z-e.z);r<n.radius&&(!i||r<i.d)&&(i={it:n,d:r})}if(i){if(this.mode!=="sp"){let n=this.net.remoteList().find(r=>{var a;let o=(a=this.net.lastSnap)==null?void 0:a.players.find(l=>l.id===r.id);return(o==null?void 0:o.downed)&&!o.dead});if(n&&Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<2.4){this.net.sendGame("revive",{target:n.id}),this.ui.message("Reviving...",!1);return}}this.audio.play("click",.3),i.it.onInteract(this.player)}}targets(){let e=[];if(!this.player)return e;this.shepherd&&this.shepherd.active&&!this.shepherd.controlled&&e.push({mesh:this.shepherd.mesh(),pos:()=>new M(this.shepherd.pos.x,1.55,this.shepherd.pos.z),onHit:(t,i)=>{this.shepherd.onHit(t,i,this.audio,this.player.pos.clone(),this.player.yaw),this.decals&&this.decals.place(new M(this.shepherd.pos.x,.03,this.shepherd.pos.z),new M(0,1,0),"blood")}}),this.mother&&this.mother.active&&!this.mother.controlled&&e.push({mesh:this.mother.mesh(),pos:()=>new M(this.mother.pos.x,1.45,this.mother.pos.z),onHit:(t,i)=>{this.mother.onHit(t,i,this.audio,this.player.pos.clone(),this.player.yaw),this.decals&&this.decals.place(new M(this.mother.pos.x,.03,this.mother.pos.z),new M(0,1,0),"blood")}});for(let t of this.husks)t.dead||e.push({mesh:t.mesh(),pos:()=>t.chest(),onHit:i=>{t.onHit(i),this.decals&&this.decals.place(new M(t.pos.x,.03,t.pos.z),new M(0,1,0),"blood")}});return e}doAttack(){var i;if(!this.player||this.state!=="playing"||this.player.downed)return;if(this.mode==="versus"&&this.net.isShepherd){this.shepherdAttack();return}if(this.camView){this.photograph();return}let e=new M(0,0,-1).applyQuaternion(this.player.camera.quaternion),t=this.player.fire(this.audio,this.targets(),((i=this.world)==null?void 0:i.occluders)||[],e);if((t==="fired"||t==="melee")&&(this.player.jammed&&t==="fired"&&this.ui.message("The gun JAMS \u2014 press R to clear it"),this.mode==="versus"&&this.shepherd&&this.shepherd.active&&this.shepherd.pos.distanceTo(this.player.pos)<40)){let r=new M().subVectors(this.shepherd.pos,this.player.pos).normalize(),o=e.clone();r.dot(o)>.985&&this.net.sendGame("mdamage",{dmg:Ec[this.player.current].dmg})}}throwGrenade(){if(!this.player||this.player.downed)return;let e=this.player.throwGrenade(this.audio);if(!e)return;let t=new Q(new Jt(.09,8,8),new ue({color:12872250,emissive:6299648,emissiveIntensity:.5}));t.position.copy(e.pos),this.scene.add(t),this.projectiles.push({mesh:t,vel:e.vel,t:0,kind:"grenade"})}throwSupply(){if(!this.player||this.player.downed)return;let e=this.player.throwObject(this.audio);if(!e){this.ui.message("Nothing to throw \u2014 find bottles or bricks");return}let t=new Q(new je(.05,.05,e.kind==="bottle"?.16:.1,6),new ue({color:e.kind==="bottle"?4876890:6965818,roughness:.5}));t.position.copy(e.pos),this.scene.add(t),this.projectiles.push({mesh:t,vel:e.vel,t:0,kind:e.kind})}placeCandle(){this.player&&(this.player.useItem("candle",this.audio)||this.ui.message("No candles left"))}autoHeal(){this.player&&(this.player.statuses.bleeding>0&&(this.player.inv.bandage||0)>0?this.player.useItem("bandage",this.audio):this.player.statuses.poison>0&&(this.player.inv.herb||0)>0?this.player.useItem("herb",this.audio):this.player.statuses.brokenLeg>0&&(this.player.inv.splint||0)>0?this.player.useItem("splint",this.audio):this.player.health<60&&(this.player.inv.bandage||0)>0?this.player.useItem("bandage",this.audio):(this.player.inv.pills||0)>0?this.player.useItem("pills",this.audio):(this.player.inv.bandage||0)>0?this.player.useItem("bandage",this.audio):this.ui.message("Nothing left to ease the pain"))}monsterAttackLocal(e){var n,r,o;if(!this.player||this.player.dead)return;this.audio.play("scare",.9);let t=e>=40;this.player.damage(e,!0,t);let i=(n=this.shepherd)!=null&&n.active?this.shepherd:(r=this.mother)!=null&&r.active?this.mother:null;if(i){let a=new M().subVectors(this.player.pos,i.pos).normalize();this.player.pos.addScaledVector(a,2.4),Vi(this.player.pos,.42,((o=this.world)==null?void 0:o.colliders)||[])}}shepherdAttack(){if(!(!this.shepherd||!this.player)){this.audio.play("knife",.6);for(let e of this.net.remoteList())e.pos.distanceTo(this.shepherd.pos)<2.2&&(this.net.sendGame("mhit",{target:e.id,dmg:30}),this.audio.play("flesh",.8))}}pause(){this.state==="playing"&&(this.state="paused",this.ui.show("pause"),this.input.exitLock(),this.mode==="sp"&&this.saveGame())}resume(){this.state="playing",this.ui.show(null),this.isTouch()||setTimeout(()=>this.input.requestLock(),50)}saveGame(){this.mode!=="sp"||!this.player||!this.quests||gp({chapter:this.quests.state.stage,inventory:ti({},this.player.inv),weapons:[...this.player.weapons],notes:[...this.quests.state.notesRead],flags:ti({},this.quests.state),playTime:this.playTime,stats:{batteryType:this.player.batteryType==="lith"?1:this.player.batteryType==="nuc"?2:0,ritualBlessed:this.player.ritualBlessed?1:0,cameraFilm:this.cameraFilm,graveTriggered:this.graveTriggered?1:0},pos:{x:this.player.pos.x,z:this.player.pos.z}})}quitToMenu(){this.saveGame(),this.state="menu",this.mode="sp",this.ui.resetSprintToggle(),this.ui.setHUDEnabled(!1),this.ui.show("menu"),this.net.leave(),this.audio.danger=0,this.audio.setGrowl(0),this.audio.setChase(0),this.player&&(this.scene.remove(this.player.camera),this.player=null),this.shepherd&&(this.scene.remove(this.shepherd.mesh()),this.shepherd=null),this.mother&&(this.scene.remove(this.mother.mesh()),this.mother=null);for(let e of this.husks)this.scene.remove(e.mesh());this.husks=[],this.world&&(this.scene.remove(this.world.root),this.world=null),this.quests=null,location.reload()}respawn(){if(!this.player)return;let e=["bandage","pills","battery","battery_lith","battery_nuc","ammo_pistol","ammo_rifle","grenade","bottle","brick","cloth","candle","herb","splint","salt"];for(let t of e){let i=this.player.inv[t]||0;i>0&&(this.player.inv[t]=Math.floor(i/2))}this.player.downed=!1,this.player.dead=!1,this.player.health=50,this.player.fear=45,this.player.statuses.bleeding=0,this.player.statuses.poison=0,this.player.pos.set(0,0,-20),this.state="playing",this.ui.show(null),this.ui.message("You lost half your supplies to the dark",!1),this.respawnTimer=-1}endGame(e,t){var r,o,a,l,c,h,d;if(this.gameEnded)return;this.gameEnded=!0,this.state="win",this.audio.play(e?"win":"lose",.9),this.audio.setGrowl(0),this.audio.setChase(0),this.input.exitLock();let i=(r=this.quests)==null?void 0:r.state.ritualDone,n=[`Time in the vale: ${Math.floor(this.playTime/60)}m ${Math.floor(this.playTime%60)}s`,`Notes found: ${(a=(o=this.quests)==null?void 0:o.state.notesRead.length)!=null?a:0} / ${Lr.length}`,`Chapter reached: ${(c=(l=this.quests)==null?void 0:l.state.stage)!=null?c:0} / 6`,i?"The ritual of salts was completed":"",this.mode!=="sp"?`Survivors: ${(d=(h=this.net.lastSnap)==null?void 0:h.players.filter(u=>!u.dead).length)!=null?d:"?"}`:""].filter(Boolean).join("<br>");if(e){let u=i&&t.includes("gate")?"The bell sleeps. You walked out of Hollow Vale alive \u2014 and free.":t;this.ui.showWin(n,u)}else{let u=document.querySelector("#hv-death .hv-title");u&&(u.textContent="THE NIGHT WINS");let f=document.getElementById("hv-respawn-btn");f&&f.classList.add("hv-hidden"),this.ui.show("death");let g=document.querySelector("#hv-death .hv-sub");g&&(g.textContent=t)}}autoPerf(e){if(this.state!=="playing")return;let t=1/Math.max(e,.001);if(this.perfEma=this.perfEma*.95+t*.05,this.perfT+=e,!(this.perfT<4)&&(this.perfT=0,this.perfEma<24&&this.perfTier<2)){this.perfTier++;let i=this.renderer.getPixelRatio();this.renderer.setPixelRatio(Math.max(.66,i-.35)),this.renderer.shadowMap.enabled=!1,this.perfTier===2&&(this.scene.fog instanceof mr&&(this.scene.fog.density=.045),this.postEnabled=!1),this.resize()}}step(e){var C,w,y,S,L,P,k,U,q,R,F,H,K,le,Y;let t=this.player,i=this.world,n=this.quests;i.updateAmbient(e,t.pos,this.playTime),this.stepWeather(e),this.stepElectric(e),this.stepCrows(),this.stepGraves(),this.updateGhosts(e),this.merchant&&un(this.merchant,this.playTime);for(let D=this.candles.length-1;D>=0;D--){let B=this.candles[D];B.t-=e,B.light.intensity=3.5*(.85+Math.random()*.3)*He(B.t/30,0,1),B.flame.material.opacity=.9*He(B.t/30,0,1),B.t<=0&&(this.scene.remove(B.light),this.scene.remove(B.flame),this.candles.splice(D,1))}let r=!1;for(let D of i.lamps)if(D.light.position.distanceTo(t.pos)<9){r=!0;break}if(!r){for(let D of i.braziers)if(D.lit&&D.pos3.distanceTo(t.pos)<8){r=!0;break}}if(!r){for(let D of this.candles)if(D.light.position.distanceTo(t.pos)<6){r=!0;break}}!r&&t.current==="torch"&&(r=!0);let o=!t.flashlightOn&&!r,a=!1,l=(D,B)=>{if(D.distanceTo(t.pos)<40){let Ae=new M(0,0,-1).applyQuaternion(t.camera.quaternion),J=new M(D.x,B,D.z).sub(t.eyePos).normalize();Ae.dot(J)>.5&&(a=!0)}};this.shepherd&&this.shepherd.active&&this.shepherd.group.visible&&l(this.shepherd.pos,2.3),this.mother&&this.mother.active&&this.mother.group.visible&&l(this.mother.pos,2.1);let c=this.input.down("KeyB")||this.input.down("breath");t.update(e,this.input,i,this.audio,this.camMode,this.settings.sensitivity,this.settings.invertY,o,a,!1,{breathHold:c}),(this.input.down("KeyN")||this.input.down("dynamo"))&&t.chargeDynamo(e,this.audio,(D,B)=>{var ce,Ae;this.mode==="sp"||this.mode==="coop"&&this.isHost?((ce=this.shepherd)==null||ce.hear(D,B),(Ae=this.mother)==null||Ae.hear(D,B)):this.net.sendNoise(D.x,D.z,B)}),this.input.buttons.attack&&!this.isTouchHeld()?this._attackHeld||(this._attackHeld=!0,this.doAttack()):this.input.buttons.attack&&this.isTouchHeld()?t.fireCd<=0&&this.doAttack():this._attackHeld=!1;let h=this.stealthPrompt(),d=this.mode==="versus"&&this.net.isShepherd;if(!h&&!d){for(let D of this.husks)if(D.dead&&D.lootable&&!D.looted&&D.pos.distanceTo(t.pos)<2.2){h="E \u2014 Search the remains";break}}if(!h&&!d)for(let D of i.interactables){if(!D.enabled||D.used)continue;if(Math.hypot(D.pos.x-t.pos.x,D.pos.z-t.pos.z)<D.radius){if(D.id.startsWith("door_")){let Ae=D.id.slice(5),J=i.doors.get(Ae);J!=null&&J.locked?Ae==="barn_storage"||Ae==="clinic_back"?h=t.current==="axe"?"E \u2014 Break it down (axe)":"E \u2014 Locked (pick or axe)":h="E \u2014 Locked":h=J!=null&&J.open?"E \u2014 Close door":"E \u2014 Open door"}else h="E \u2014 "+D.prompt;break}}if(!h&&this.mode!=="sp")for(let D of this.net.remoteList()){let B=(C=this.net.lastSnap)==null?void 0:C.players.find(ce=>ce.id===D.id);if(B!=null&&B.downed&&!B.dead&&Math.hypot(D.pos.x-t.pos.x,D.pos.z-t.pos.z)<2.4){h="HOLD E \u2014 Revive "+B.name;break}}this.ui.prompt(h),t.downed&&!t.dead&&(this.downedBleed-=e,this.downedBleed<=0&&(t.dead=!0,t.downed=!1,this.audio.play("lose",.8),this.mode==="sp"?(this.state="dead",this.ui.showDeath(!0)):this.mode==="coop"?(this.respawnTimer=25,this.net.sendGame("died",{name:t.name}),this.ui.showDeath(!0),this.ui.message("You will rise at the church in 25s",!0)):(this.net.sendGame("died",{name:t.name}),this.state="dead",this.ui.showDeath(!1)))),this.respawnTimer>0&&this.state!=="menu"&&(this.respawnTimer-=e,this.respawnTimer<=0&&this.mode==="coop"&&(this.respawn(),this.ui.message("The church floor accepts you back",!1)));let u=[{pos:t.pos,crouching:t.crouching,sprinting:t.sprinting,flashlightOn:t.flashlightOn,downed:t.downed,dead:t.dead,breathHold:t.breathT>1},...this.net.remoteList().map(D=>{var ce;let B=(ce=this.net.lastSnap)==null?void 0:ce.players.find(Ae=>Ae.id===D.id);return{pos:D.pos,crouching:!!(B!=null&&B.crouch),sprinting:!!(B!=null&&B.moving)&&!(B!=null&&B.crouch),flashlightOn:!!(B!=null&&B.flash),downed:!!(B!=null&&B.downed),dead:!!(B!=null&&B.dead),breathHold:!1}})];if(this.shepherd){let D=this.mode==="sp"||this.mode==="coop"&&this.isHost;D&&this.shepherd.active?(this.shepherd.update(e,i,u,this.audio,t.pos.clone(),t.yaw,B=>{if(B===u[0])this.monsterAttackLocal(40);else{let ce=u.indexOf(B),Ae=this.net.remoteList()[ce-1];Ae&&this.net.sendGame("mhit",{target:Ae.id,dmg:40})}}),this.net.sendMonster({x:this.shepherd.pos.x,z:this.shepherd.pos.z,yaw:this.shepherd.group.rotation.y,state:this.shepherd.state})):D||this.shepherd.update(e,i,[],this.audio,t.pos.clone(),t.yaw,()=>{})}this.mother&&this.mode==="sp"&&this.mother.active&&this.mother.update(e,i,u,this.audio,t.pos.clone(),t.yaw,D=>{D===u[0]&&this.monsterAttackLocal(24)});for(let D of this.husks)D.update(e,i,u,this.audio,t.pos.clone(),t.yaw,(B,ce)=>{B===u[0]&&this.monsterAttackLocal(ce)});this.husks=this.husks.filter(D=>!(D.dead&&!D.lootable&&!D.group.visible)),this.shepherd&&this.mother&&this.shepherd.active&&this.mother.active&&(this.shepherd.state==="chase"&&this.mother.state!=="chase"&&this.mother.hear(t.pos.clone(),999),this.mother.state==="chase"&&this.shepherd.state!=="chase"&&this.shepherd.hear(t.pos.clone(),999));for(let D=this.projectiles.length-1;D>=0;D--){let B=this.projectiles[D];if(B.t+=e,B.vel.y-=12*e,B.mesh.position.addScaledVector(B.vel,e),B.mesh.rotation.x+=e*6,B.mesh.position.y<.08)if(B.kind==="grenade")B.mesh.position.y=.08,B.vel.y*=-.35,B.vel.x*=.7,B.vel.z*=.7;else{let ce=B.mesh.position.clone().setY(.1);if(this.audio.play("glass",.9),(w=this.player)==null||w.addShake(.15,.1),this.mode==="sp"||this.mode==="coop"&&this.isHost){(y=this.shepherd)==null||y.hear(ce,17),(S=this.mother)==null||S.hear(ce,6);for(let Ae of this.husks)Ae.hear(ce,12)}else this.net.sendNoise(ce.x,ce.z,17);this.scene.remove(B.mesh),this.projectiles.splice(D,1);continue}if(Vi(B.mesh.position,.1,i.colliders),B.t>1.6&&B.kind==="grenade"){this.audio.play("bang",1),(L=this.player)==null||L.addShake(.6,.3);let ce=B.mesh.position.clone();this.shepherd&&this.shepherd.active&&this.shepherd.pos.distanceTo(ce)<13&&this.shepherd.knockdown(6),this.mother&&this.mother.active&&this.mother.pos.distanceTo(ce)<13&&this.mother.knockdown(6);for(let Ae of this.husks)!Ae.dead&&Ae.pos.distanceTo(ce)<6&&Ae.onHit(100);(P=this.shepherd)==null||P.hear(ce,60),(k=this.mother)==null||k.hear(ce,20);for(let Ae of this.husks)Ae.hear(ce,30);this.mode!=="sp"&&this.net.sendNoise(ce.x,ce.z,60),this.scene.remove(B.mesh),this.projectiles.splice(D,1)}}if(n.update(e),n.state.ritualDone&&!t.ritualBlessed&&(t.ritualBlessed=!0,this.ui.message("A quiet calm settles over you. Fear loosens its grip.",!1)),t.fear>82?(this.hallucT-=e,this.hallucT<=0&&(this.hallucT=6+Math.random()*8,this.spawnHallucination(),Math.random()<.4&&this.audio.play("step",.4))):this.hallucT=4,this.halluc){this.hallucT-=e;let D=this.halluc.material;D.opacity=He(this.hallucT*2,0,.75),this.hallucT<=0&&(this.scene.remove(this.halluc),this.halluc=null)}this.whisperT-=e,this.whisperT<=0&&(this.whisperT=14+Math.random()*20,(t.fear>45||(U=this.shepherd)!=null&&U.active&&this.shepherd.pos.distanceTo(t.pos)<26||(q=this.mother)!=null&&q.active&&this.mother.pos.distanceTo(t.pos)<26)&&this.audio.play("whisper",.5+t.fear/200));let f=0,g=!1;if((R=this.shepherd)!=null&&R.active){let D=this.shepherd.pos.distanceTo(t.pos);f=Math.max(f,He(1-D/30,0,1)),this.shepherd.state==="chase"&&(f=Math.max(f,.75),g=!0)}if((F=this.mother)!=null&&F.active){let D=this.mother.pos.distanceTo(t.pos);f=Math.max(f,He(1-D/26,0,1)),this.mother.state==="chase"&&(f=Math.max(f,.8),g=!0)}this.nearestHunterDist()<12&&(f=Math.max(f,.35)),f=Math.max(f,t.fear/160),this.audio.danger+=(f-this.audio.danger)*He(e*2,0,1),this.audio.setChase(g?1:0),this.mode==="versus"&&(this.timeLeft-=e,this.timeLeft<=0&&!this.gameEnded&&this.endGame(!this.net.isShepherd,"Dawn breaks. The lantern flickers out.")),n.state.gateOpen&&t.pos.z>56.5&&!this.escapedSent&&!this.net.isShepherd&&(this.escapedSent=!0,this.mode==="sp"?this.endGame(!0,"You crossed the treeline as the bell fell silent."):(this.net.sendGame("escaped",{}),this.endGame(!0,"You escaped the vale."))),this.mode!=="sp"&&this.net.connected&&(this.sendT-=e,this.sendT<=0&&(this.sendT=.08,this.net.sendState(t.serialize())),this.net.update(e));let p=(K=(H=this.net.lastSnap)==null?void 0:H.players.filter(D=>!D.dead).length)!=null?K:1;this.ui.updateHUD(t,n,{versus:this.mode==="versus",timeLeft:this.timeLeft,isMonster:this.mode==="versus"&&this.net.isShepherd,coopAlive:this.mode==="coop"?p:void 0,coopTotal:this.mode==="coop"?(Y=(le=this.net.lastSnap)==null?void 0:le.players.length)!=null?Y:1:void 0});let m=n.currentTarget();if(m){let D=-Math.sin(t.yaw),B=-Math.cos(t.yaw),ce=Math.atan2(D,B),Ae=m.x-t.pos.x,J=m.z-t.pos.z,_e=Math.atan2(Ae,J),Me=ce-_e;for(;Me>Math.PI;)Me-=Math.PI*2;for(;Me<-Math.PI;)Me+=Math.PI*2;this.ui.setCompass(Me,m.label)}else this.ui.setCompass(null,"");let v=this.mapVisited,T=Math.floor(t.pos.x/4),E=Math.floor(t.pos.z/4);for(let D=-1;D<=1;D++)for(let B=-1;B<=1;B++)v.add(`${T+D},${E+B}`);if(this.overlayOpen&&this.overlayName==="radio"&&this.refreshRadio(),this.pendingNote&&this.state==="playing"){let D=this.pendingNote;this.pendingNote=null,this.state="note",this.audio.play("paper",.5),this.ui.showNote(D,()=>{this.state="playing",this.isTouch()||setTimeout(()=>this.input.requestLock(),50)})}}isTouchHeld(){return!1}spawnHallucination(){if(!this.player)return;if(!this.halluc){let i=new on(.3,1.4,3,6),n=new Rt({color:0,transparent:!0,opacity:.7,fog:!0});this.halluc=new Q(i,n),this.halluc.scale.y=1.5}let e=Math.random()*Math.PI*2,t=7+Math.random()*4;this.halluc.position.set(this.player.pos.x+Math.cos(e)*t,1.6,this.player.pos.z+Math.sin(e)*t),this.halluc.material.opacity=.75,this.hallucT=.7,this.scene.add(this.halluc),this.audio.play("whisper",.7)}};function Uc(){return new Promise(s=>requestAnimationFrame(()=>s()))}var cm=!1;function hm(s){if(cm)return;cm=!0;let e=new Gu(s);e.wireNet(),window.hvGame=e}function um(){let s=document.getElementById("hv-container");s&&hm(s)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",um):um();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
