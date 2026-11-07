"use strict";(()=>{var eh=Object.defineProperty,Yd=Object.defineProperties;var Zd=Object.getOwnPropertyDescriptors;var Qc=Object.getOwnPropertySymbols;var Jd=Object.prototype.hasOwnProperty,Kd=Object.prototype.propertyIsEnumerable;var jc=(i,e,t)=>e in i?eh(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,kt=(i,e)=>{for(var t in e||(e={}))Jd.call(e,t)&&jc(i,t,e[t]);if(Qc)for(var t of Qc(e))Kd.call(e,t)&&jc(i,t,e[t]);return i},Ds=(i,e)=>Yd(i,Zd(e));var $d=(i,e)=>{for(var t in e)eh(i,t,{get:e[t],enumerable:!0})};var Ph=0,Il=1,Ih=2;var Ui=1,Lh=2,vs=3,vi=0,tn=1,kn=2,Oi=0,bs=1,Ll=2,Nl=3,Dl=4,Nh=5;var Fi=100,Dh=101,Uh=102,Oh=103,Fh=104,kh=200,Bh=201,Hh=202,zh=203,Ul=204,Ol=205,Vh=206,Gh=207,Wh=208,Xh=209,qh=210,Yh=211,Zh=212,Jh=213,Kh=214,lo=0,co=1,ho=2,as=3,uo=4,fo=5,po=6,mo=7,Fl=0,$h=1,Qh=2,Bn=0,kl=1,Bl=2,Hl=3,dr=4,zl=5,Vl=6,Gl=7;var Wl=300,ki=301,Ss=302,Fo=303,ko=304,ls=1e3,Nn=1001,go=1002,Nt=1003,jh=1004;var fr=1005;var Qt=1006,Bo=1007;var ii=1008;var on=1009,Xl=1010,ql=1011,Ms=1012,Ho=1013,Rn=1014,yn=1015,Cn=1016,zo=1017,Vo=1018,Bi=1020,Yl=35902,Zl=35899,Jl=1021,Kl=1022,Pn=1023,Qn=1026,si=1027,Go=1028,Wo=1029,bi=1030,Xo=1031;var qo=1033,pr=33776,mr=33777,gr=33778,_r=33779,Yo=35840,Zo=35841,Jo=35842,Ko=35843,$o=36196,Qo=37492,jo=37496,ea=37488,ta=37489,xr=37490,na=37491,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,xa=36494,ya=36495,va=36283,ba=36284,yr=36285,Sa=36286;var Vs=2300,_o=2301,oo=2302,vl=2303,bl=2400,Sl=2401,Ml=2402;var eu=3200;var Ma=0,tu=1,ri="",Bt="srgb",Gs="srgb-linear",Ws="linear",nt="srgb";var ao=7680;var nu=519,iu=512,su=513,ru=514,$l=515,ou=516,au=517,Ql=518,jl=519,lu=35044;var ec="300 es",gn=2e3,cs=2001;function Qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cu(){let i=Xs("canvas");return i.style.display="block",i}var th={},hs=null;function tc(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function hu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=hu(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ne(...i){i=hu(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function zs(...i){let e=i.join(" ");e in th||(th[e]=!0,Le(...i))}function uu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var du={[lo]:lo,[ho]:po,[uo]:uo,[as]:fo,[co]:co,[po]:ho,[mo]:mo,[fo]:as},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qa=Math.PI/180,qs=180/Math.PI;function vr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function ja(i,e,t){return(1-t)*i+t*e}function fu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tf(i,e){if(e.constructor===Float32Array)return i;let t=nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function nf(i,e){if(e.constructor===Float32Array)return i;let t=nc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ac=class ac{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;var Xe=ac,Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],m=r[o+1],_=r[o+2],b=r[o+3];if(d!==b||l!==u||c!==m||h!==_){let f=l*u+c*m+h*_+d*b;f<0&&(u=-u,m=-m,_=-_,b=-b,f=-f);let p=1-a;if(f<.9995){let S=Math.acos(f),A=Math.sin(S);p=Math.sin(p*S)/A,a=Math.sin(a*S)/A,l=l*p+u*a,c=c*p+m*a,h=h*p+_*a,d=d*p+b*a}else{l=l*p+u*a,c=c*p+m*a,h=h*p+_*a,d=d*p+b*a;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*d+l*m-c*u,e[t+1]=l*_+h*u+c*d-a*m,e[t+2]=c*_+h*m+a*u-l*d,e[t+3]=h*_-a*d-l*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d+u*m*_;break;case"YZX":this._x=u*h*d+c*m*_,this._y=c*m*d+u*h*_,this._z=c*h*_-u*m*d,this._w=c*h*d-u*m*_;break;case"XZY":this._x=u*h*d-c*m*_,this._y=c*m*d-u*h*_,this._z=c*h*_+u*m*d,this._w=c*h*d+u*m*_;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){let m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lc=class lc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return el.copy(this).projectOnVector(e),this.sub(el)}reflect(e){return this.sub(el.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lc.prototype.isVector3=!0;var R=lc,el=new R,nh=new Un,cc=class cc{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],b=s[0],f=s[3],p=s[6],S=s[1],A=s[4],M=s[7],w=s[2],T=s[5],g=s[8];return r[0]=o*b+a*S+l*w,r[3]=o*f+a*A+l*T,r[6]=o*p+a*M+l*g,r[1]=c*b+h*S+d*w,r[4]=c*f+h*A+d*T,r[7]=c*p+h*M+d*g,r[2]=u*b+m*S+_*w,r[5]=u*f+m*A+_*T,r[8]=u*p+m*M+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,m=c*r-o*l,_=t*d+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return e[0]=d*b,e[1]=(s*c-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=u*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return zs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tl.makeScale(e,t)),this}rotate(e){return zs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return zs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cc.prototype.isMatrix3=!0;var Ue=cc,tl=new Ue,ih=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sf(){let i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?Ws:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:e,whitePoint:n,transfer:Ws,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}var Ze=sf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qi,xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=Xs("canvas")),qi.width=e.width,qi.height=e.height;let s=qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Xs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},rf=0,us=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=vr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function nl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var of=0,il=new R,jt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Qt,o=ii,a=Pn,l=on,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=vr(),this.name="",this.source=new us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(il).x}get height(){return this.source.getSize(il).y}get depth(){return this.source.getSize(il).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Wl;jt.DEFAULT_ANISOTROPY=1;var hc=class hc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],m=l[5],_=l[9],b=l[2],f=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-b)<.01&&Math.abs(_-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+b)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,M=(m+1)/2,w=(p+1)/2,T=(h+u)/4,g=(d+b)/4,v=(_+f)/4;return A>M&&A>w?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=g/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=g/r,s=v/r),this.set(n,s,r,t),this}let S=Math.sqrt((f-_)*(f-_)+(d-b)*(d-b)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(f-_)/S,this.y=(d-b)/S,this.z=(u-h)/S,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hc.prototype.isVector4=!0;var pt=hc,yo=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new us(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ys=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oo=class Oo{constructor(e,t,n,s,r,o,a,l,c,h,d,u,m,_,b,f){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,u,m,_,b,f)}set(e,t,n,s,r,o,a,l,c,h,d,u,m,_,b,f){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=_,p[11]=b,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,m=o*d,_=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=u-b*c,t[9]=-a*l,t[2]=b-u*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,m=l*d,_=c*h,b=c*d;t[0]=u+b*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=b+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,m=l*d,_=c*h,b=c*d;t[0]=u-b*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=b-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,m=o*d,_=a*h,b=a*d;t[0]=l*h,t[4]=_*c-m,t[8]=u*c+b,t[1]=l*d,t[5]=b*c+u,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*h,t[4]=b-u*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+_,t[10]=u-b*d}else if(e.order==="XZY"){let u=o*l,m=o*c,_=a*l,b=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+b,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=b*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(af,e,lf)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(n,ln),hi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(n,ln)),hi.normalize(),Fr.crossVectors(ln,hi),s[0]=hi.x,s[4]=Fr.x,s[8]=ln.x,s[1]=hi.y,s[5]=Fr.y,s[9]=ln.y,s[2]=hi.z,s[6]=Fr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],b=n[6],f=n[10],p=n[14],S=n[3],A=n[7],M=n[11],w=n[15],T=s[0],g=s[4],v=s[8],L=s[12],C=s[1],D=s[5],k=s[9],q=s[13],I=s[2],H=s[6],$=s[10],Y=s[14],se=s[3],J=s[7],te=s[11],ne=s[15];return r[0]=o*T+a*C+l*I+c*se,r[4]=o*g+a*D+l*H+c*J,r[8]=o*v+a*k+l*$+c*te,r[12]=o*L+a*q+l*Y+c*ne,r[1]=h*T+d*C+u*I+m*se,r[5]=h*g+d*D+u*H+m*J,r[9]=h*v+d*k+u*$+m*te,r[13]=h*L+d*q+u*Y+m*ne,r[2]=_*T+b*C+f*I+p*se,r[6]=_*g+b*D+f*H+p*J,r[10]=_*v+b*k+f*$+p*te,r[14]=_*L+b*q+f*Y+p*ne,r[3]=S*T+A*C+M*I+w*se,r[7]=S*g+A*D+M*H+w*J,r[11]=S*v+A*k+M*$+w*te,r[15]=S*L+A*q+M*Y+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],m=e[14],_=e[3],b=e[7],f=e[11],p=e[15],S=l*m-c*u,A=a*m-c*d,M=a*u-l*d,w=o*m-c*h,T=o*u-l*h,g=o*d-a*h;return t*(b*S-f*A+p*M)-n*(_*S-f*w+p*T)+s*(_*A-b*w+p*g)-r*(_*M-b*T+f*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],_=e[12],b=e[13],f=e[14],p=e[15],S=t*a-n*o,A=t*l-s*o,M=t*c-r*o,w=n*l-s*a,T=n*c-r*a,g=s*c-r*l,v=h*b-d*_,L=h*f-u*_,C=h*p-m*_,D=d*f-u*b,k=d*p-m*b,q=u*p-m*f,I=S*q-A*k+M*D+w*C-T*L+g*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return e[0]=(a*q-l*k+c*D)*H,e[1]=(s*k-n*q-r*D)*H,e[2]=(b*g-f*T+p*w)*H,e[3]=(u*T-d*g-m*w)*H,e[4]=(l*C-o*q-c*L)*H,e[5]=(t*q-s*C+r*L)*H,e[6]=(f*M-_*g-p*A)*H,e[7]=(h*g-u*M+m*A)*H,e[8]=(o*k-a*C+c*v)*H,e[9]=(n*C-t*k-r*v)*H,e[10]=(_*T-b*M+p*S)*H,e[11]=(d*M-h*T-m*S)*H,e[12]=(a*L-o*D-l*v)*H,e[13]=(t*D-n*L+s*v)*H,e[14]=(b*A-_*w-f*S)*H,e[15]=(h*w-d*A+u*S)*H,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,m=r*h,_=r*d,b=o*h,f=o*d,p=a*d,S=l*c,A=l*h,M=l*d,w=n.x,T=n.y,g=n.z;return s[0]=(1-(b+p))*w,s[1]=(m+M)*w,s[2]=(_-A)*w,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(u+p))*T,s[6]=(f+S)*T,s[7]=0,s[8]=(_+A)*g,s[9]=(f-S)*g,s[10]=(1-(u+b))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Yi.set(s[0],s[1],s[2]).length(),a=Yi.set(s[4],s[5],s[6]).length(),l=Yi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let c=1/o,h=1/a,d=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,t.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=gn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s),_,b;if(l)_=r/(o-r),b=o*r/(o-r);else if(a===gn)_=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===cs)_=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s),_,b;if(l)_=1/(o-r),b=o/(o-r);else if(a===gn)_=-2/(o-r),b=-(o+r)/(o-r);else if(a===cs)_=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Oo.prototype.isMatrix4=!0;var it=Oo,Yi=new R,Mn=new it,af=new R(0,0,0),lf=new R(1,1,1),hi=new R,Fr=new R,ln=new R,rh=new it,oh=new Un,_n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cf=0,ah=new R,Zi=new Un,qn=new it,kr=new R,Us=new R,hf=new R,uf=new Un,lh=new R(1,0,0),ch=new R(0,1,0),hh=new R(0,0,1),uh={type:"added"},df={type:"removed"},Ji={type:"childadded",child:null},sl={type:"childremoved",child:null},dt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new _n,n=new Un,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new Ue}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(hh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kr.copy(e):kr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Us,kr,this.up):qn.lookAt(kr,Us,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(qn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ne("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(df),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uh),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,hf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,uf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>Ds(kt({},a),{boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>kt({},a)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wt=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ff={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let f=t.getJointPose(b,n),p=this._getHandJoint(c,b);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&u>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Br={h:0,s:0,l:0};function rl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=ef(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rl(o,r,e+1/3),this.g=rl(o,r,e),this.b=rl(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ze.workingToColorSpace(Xt.copy(this),e),Math.round(Je(Xt.r*255,0,255))*65536+Math.round(Je(Xt.g*255,0,255))*256+Math.round(Je(Xt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,s=Xt.g,r=Xt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Bt){Ze.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,s=Xt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Br);let n=ja(ui.h,Br.h,t),s=ja(ui.s,Br.s,t),r=ja(ui.l,Br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new He;He.NAMES=pu;var ps=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Zs=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},En=new R,Yn=new R,ol=new R,Zn=new R,Ki=new R,$i=new R,dh=new R,al=new R,ll=new R,cl=new R,hl=new pt,ul=new pt,dl=new pt,mi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Yn.subVectors(n,t),ol.subVectors(e,t);let o=En.dot(En),a=En.dot(Yn),l=En.dot(ol),c=Yn.dot(Yn),h=Yn.dot(ol),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,m=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return hl.setScalar(0),ul.setScalar(0),dl.setScalar(0),hl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Yn.subVectors(e,t),En.cross(Yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),$i.subVectors(r,n),al.subVectors(e,n);let l=Ki.dot(al),c=$i.dot(al);if(l<=0&&c<=0)return t.copy(n);ll.subVectors(e,s);let h=Ki.dot(ll),d=$i.dot(ll);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Ki,o);cl.subVectors(e,r);let m=Ki.dot(cl),_=$i.dot(cl);if(_>=0&&m<=_)return t.copy(r);let b=m*c-l*_;if(b<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector($i,a);let f=h*_-m*d;if(f<=0&&d-h>=0&&m-_>=0)return dh.subVectors(r,s),a=(d-h)/(d-h+(m-_)),t.copy(s).addScaledVector(dh,a);let p=1/(f+b+u);return o=b*p,a=u*p,t.copy(n).addScaledVector(Ki,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},On=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),zr.subVectors(this.max,Os),Qi.subVectors(e.a,Os),ji.subVectors(e.b,Os),es.subVectors(e.c,Os),di.subVectors(ji,Qi),fi.subVectors(es,ji),Ci.subVectors(Qi,es);let t=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,fi.z,0,-fi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-fi.y,fi.x,0,-Ci.y,Ci.x,0];return!fl(t,Qi,ji,es,zr)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Qi,ji,es,zr))?!1:(Vr.crossVectors(di,fi),t=[Vr.x,Vr.y,Vr.z],fl(t,Qi,ji,es,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new R,new R,new R,new R,new R,new R,new R,new R],Tn=new R,Hr=new On,Qi=new R,ji=new R,es=new R,di=new R,fi=new R,Ci=new R,Os=new R,zr=new R,Vr=new R,Pi=new R;function fl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mt=new R,Gr=new Xe,pf=0,An=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=yn,this.version=0,this._normalizationScale=e!==void 0?nc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):nf(e,this.array)}};var Js=class extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ks=class extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}},mf=new On,Fs=new R,pl=new R,jn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);let t=Fs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(pl)),this.expandByPoint(Fs.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gf=0,mn=new it,ml=new dt,ts=new R,cn=new On,ks=new On,Lt=new R,qt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?Ks:Js)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return ml.lookAt(e),ml.updateMatrix(),this.applyMatrix4(ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(cn.min,ks.min),cn.expandByPoint(Lt),Lt.addVectors(cn.max,ks.max),cn.expandByPoint(Lt)):(cn.expandByPoint(ks.min),cn.expandByPoint(ks.max))}cn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Lt.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(e,c),Lt.add(ts)),s=Math.max(s,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new R,l[L]=new R;let h=new R,d=new R,u=new R,m=new Xe,_=new Xe,b=new Xe,f=new R,p=new R;function S(L,C,D){c[L]=c[C]=c[D]=1,h.fromBufferAttribute(n,L),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,D),m.fromBufferAttribute(r,L),_.fromBufferAttribute(r,C),b.fromBufferAttribute(r,D),d.sub(h),u.sub(h),_.sub(m),b.sub(m);let k=1/(_.x*b.y-b.x*_.y);isFinite(k)&&(f.copy(d).multiplyScalar(b.y).addScaledVector(u,-_.y).multiplyScalar(k),p.copy(u).multiplyScalar(_.x).addScaledVector(d,-b.x).multiplyScalar(k),a[L].add(f),a[C].add(f),a[D].add(f),l[L].add(p),l[C].add(p),l[D].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,C=A.length;L<C;++L){let D=A[L],k=D.start,q=D.count;for(let I=k,H=k+q;I<H;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new R,w=new R,T=new R,g=new R;function v(L){T.fromBufferAttribute(s,L),g.copy(T);let C=a[L];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(g,C);let k=w.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,k)}for(let L=0,C=n.count;L<C;++L)c[L]&&v(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,d=new R;if(e)for(let u=0,m=e.count;u<m;u+=3){let _=e.getX(u+0),b=e.getX(u+1),f=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,f),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),m=0,_=0;for(let b=0,f=l.length;b<f;b++){a.isInterleavedBufferAttribute?m=l[b]*a.data.stride+a.offset:m=l[b]*h;for(let p=0;p<h;p++)u[_++]=c[m++]}return new An(u,h,d)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],m=e(u,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var gl=new R,_f=new R,xf=new Ue,wn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=gl.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xf.getNormalMatrix(e),s=this.coplanarPoint(gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yf=0,ei=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=bs,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Ol,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Kn=new R,_l=new R,Wr=new R,Xr=new R,ms=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_l.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(_l);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),h=Math.abs(1-o*o),d,u,m,_;if(h>0)if(d=o*l-a,u=o*a-l,_=r*h,d>=0)if(u>=-_)if(u<=_){let b=1/h;d*=b,u*=b,m=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-r,-l),r),m=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_l).addScaledVector(Wr,u),m}intersectSphere(e,t){if(e.radius<0)return null;Kn.subVectors(e.center,this.origin);let n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,m=e.z-o.z,_=t.x-o.x,b=t.y-o.y,f=t.z-o.z,p=n.x-o.x,S=n.y-o.y,A=n.z-o.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),g,v,L,C,D,k,q,I,H,$,Y,se;if(M>=w&&M>=T?(L=l,k=d,H=_,se=p,l>=0?(g=c,v=h,C=u,D=m,q=b,I=f,$=S,Y=A):(g=h,v=c,C=m,D=u,q=f,I=b,$=A,Y=S)):w>=T?(L=c,k=u,H=b,se=S,c>=0?(g=h,v=l,C=m,D=d,q=f,I=_,$=A,Y=p):(g=l,v=h,C=d,D=m,q=_,I=f,$=p,Y=A)):(L=h,k=m,H=f,se=A,h>=0?(g=l,v=c,C=d,D=u,q=_,I=b,$=p,Y=S):(g=c,v=l,C=u,D=d,q=b,I=_,$=S,Y=p)),L===0)return null;let J=g/L,te=v/L,ne=1/L,pe=C-J*k,Pe=D-te*k,j=q-J*H,de=I-te*H,xe=$-J*se,Ae=Y-te*se,me=xe*de-Ae*j,Oe=pe*Ae-Pe*xe,_t=j*Pe-de*pe;if(s){if(me<0||Oe<0||_t<0)return null}else if((me<0||Oe<0||_t<0)&&(me>0||Oe>0||_t>0))return null;let Re=me+Oe+_t;if(Re===0)return null;let $e=ne*(me*k+Oe*H+_t*se);return(Re>0?$e<0:$e>0)?null:this.at($e/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fh=new it,Ii=new ms,qr=new jn,ph=new R,Yr=new R,Zr=new R,Jr=new R,xl=new R,Kr=new R,mh=new R,$r=new R,Ee=class extends dt{constructor(e=new qt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(xl.fromBufferAttribute(d,e),o?Kr.addScaledVector(xl,h):Kr.addScaledVector(xl.sub(t),h))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(qr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(qr,ph)===null||Ii.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let f=u[_],p=o[f.materialIndex],S=Math.max(f.start,m.start),A=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,w=A;M<w;M+=3){let T=a.getX(M),g=a.getX(M+1),v=a.getX(M+2);s=Qr(this,p,e,n,c,h,d,T,g,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let f=_,p=b;f<p;f+=3){let S=a.getX(f),A=a.getX(f+1),M=a.getX(f+2);s=Qr(this,o,e,n,c,h,d,S,A,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=u.length;_<b;_++){let f=u[_],p=o[f.materialIndex],S=Math.max(f.start,m.start),A=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=S,w=A;M<w;M+=3){let T=M,g=M+1,v=M+2;s=Qr(this,p,e,n,c,h,d,T,g,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let _=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let f=_,p=b;f<p;f+=3){let S=f,A=f+1,M=f+2;s=Qr(this,o,e,n,c,h,d,S,A,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};function vf(i,e,t,n,s,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===vi,a),l===null)return null;$r.copy(a),$r.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($r);return c<t.near||c>t.far?null:{distance:c,point:$r.clone(),object:i}}function Qr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,Jr);let h=vf(i,e,t,n,Yr,Zr,Jr,mh);if(h){let d=new R;mi.getBarycoord(mh,Yr,Zr,Jr,d),s&&(h.uv=mi.getInterpolatedAttribute(s,a,l,c,d,new Xe)),r&&(h.uv1=mi.getInterpolatedAttribute(r,a,l,c,d,new Xe)),o&&(h.normal=mi.getInterpolatedAttribute(o,a,l,c,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new R,materialIndex:0};mi.getNormal(Yr,Zr,Jr,u.normal),h.face=u,h.barycoord=d}return h}var $s=class extends jt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Nt,h=Nt,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qs=class extends An{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ns=new it,gh=new it,jr=[],_h=new On,bf=new it,Bs=new Ee,Hs=new jn,Ni=class extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),_h.copy(e.boundingBox).applyMatrix4(ns),this.boundingBox.union(_h)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ns),Hs.copy(e.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Bs.geometry=this.geometry,Bs.material=this.material,Bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),gh.multiplyMatrices(n,ns),Bs.matrixWorld=gh,Bs.raycast(e,jr);for(let o=0,a=jr.length;o<a;o++){let l=jr[o];l.instanceId=r,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(s*this.count),s,this.count,Go,yn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Li=new jn,Sf=new Xe(.5,.5),eo=new R,gi=class{constructor(e=new wn,t=new wn,n=new wn,s=new wn,r=new wn,o=new wn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],m=r[7],_=r[8],b=r[9],f=r[10],p=r[11],S=r[12],A=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-o,m-h,p-_,w-S).normalize(),s[1].setComponents(c+o,m+h,p+_,w+S).normalize(),s[2].setComponents(c+a,m+d,p+b,w+A).normalize(),s[3].setComponents(c-a,m-d,p-b,w-A).normalize(),n)s[4].setComponents(l,u,f,M).normalize(),s[5].setComponents(c-l,m-u,p-f,w-M).normalize();else if(s[4].setComponents(c-l,m-u,p-f,w-M).normalize(),t===gn)s[5].setComponents(c+l,m+u,p+f,w+M).normalize();else if(t===cs)s[5].setComponents(l,u,f,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Sf.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(eo.x=s.normal.x>0?e.max.x:e.min.x,eo.y=s.normal.y>0?e.max.y:e.min.y,eo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xh=new it,bo=class i{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new gi),n[s].setFromProjectionMatrix(xh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new gi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var gs=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yh=new it,El=new ms,to=new jn,no=new R,js=class extends dt{constructor(e=new qt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,e.ray.intersectsSphere(to)===!1)return;yh.copy(s).invert(),El.copy(e.ray).applyMatrix4(yh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=u,b=m;_<b;_++){let f=c.getX(_);no.fromBufferAttribute(d,f),vh(no,f,l,s,e,t,this)}}else{let u=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=u,b=m;_<b;_++)no.fromBufferAttribute(d,_),vh(no,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function vh(i,e,t,n,s,r,o){let a=El.distanceSqToPoint(i);if(a<t){let l=new R;El.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var er=class extends jt{constructor(e=[],t=ki,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},tr=class extends jt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ti=class extends jt{constructor(e,t,n=Rn,s,r,o,a=Nt,l=Nt,c,h=Qn,d=1){if(h!==Qn&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},nr=class extends ti{constructor(e,t=Rn,n=ki,s,r,o=Nt,a=Nt,l,c=Qn){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ir=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},At=class i extends qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function _(b,f,p,S,A,M,w,T,g,v,L){let C=M/g,D=w/v,k=M/2,q=w/2,I=T/2,H=g+1,$=v+1,Y=0,se=0,J=new R;for(let te=0;te<$;te++){let ne=te*D-q;for(let pe=0;pe<H;pe++){let Pe=pe*C-k;J[b]=Pe*S,J[f]=ne*A,J[p]=I,c.push(J.x,J.y,J.z),J[b]=0,J[f]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(pe/g),d.push(1-te/v),Y+=1}}for(let te=0;te<v;te++)for(let ne=0;ne<g;ne++){let pe=u+ne+H*te,Pe=u+ne+H*(te+1),j=u+(ne+1)+H*(te+1),de=u+(ne+1)+H*te;l.push(pe,Pe,de),l.push(Pe,j,de),se+=6}a.addGroup(m,se,L),m+=se,u+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Dt=class i extends qt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,m=2*d+u,_=n*2+r,b=s+1,f=new R,p=new R;for(let S=0;S<=_;S++){let A=0,M=0,w=0,T=0;if(S<=n){let L=S/n,C=L*Math.PI/2;M=-h-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),A=L*d}else if(S<=n+r){let L=(S-n)/r;M=-h+L*t,w=e,T=0,A=d+L*u}else{let L=(S-n-r)/n,C=L*Math.PI/2;M=h+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),A=d+u+L*d}let g=Math.max(0,Math.min(1,A/m)),v=0;S===0?v=.5/s:S===_&&(v=-.5/s);for(let L=0;L<=s;L++){let C=L/s,D=C*Math.PI*2,k=Math.sin(D),q=Math.cos(D);p.x=-w*q,p.y=M,p.z=w*k,a.push(p.x,p.y,p.z),f.set(-w*q,T,w*k),f.normalize(),l.push(f.x,f.y,f.z),c.push(C+v,g)}if(S>0){let L=(S-1)*b;for(let C=0;C<s;C++){let D=L+C,k=L+C+1,q=S*b+C,I=S*b+C+1;o.push(D,k,q),o.push(k,I,q)}}}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},sr=class i extends qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new Xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let m=n+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class i extends qt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],m=[],_=0,b=[],f=n/2,p=0;S(),o===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(m,2));function S(){let M=new R,w=new R,T=0,g=(t-e)/n;for(let v=0;v<=r;v++){let L=[],C=v/r,D=C*(t-e)+e;for(let k=0;k<=s;k++){let q=k/s,I=q*l+a,H=Math.sin(I),$=Math.cos(I);w.x=D*H,w.y=-C*n+f,w.z=D*$,d.push(w.x,w.y,w.z),M.set(H,g,$).normalize(),u.push(M.x,M.y,M.z),m.push(q,1-C),L.push(_++)}b.push(L)}for(let v=0;v<s;v++)for(let L=0;L<r;L++){let C=b[L][v],D=b[L+1][v],k=b[L+1][v+1],q=b[L][v+1];(e>0||L!==0)&&(h.push(C,D,q),T+=3),(t>0||L!==r-1)&&(h.push(D,k,q),T+=3)}c.addGroup(p,T,0),p+=T}function A(M){let w=_,T=new Xe,g=new R,v=0,L=M===!0?e:t,C=M===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,f*C,0),u.push(0,C,0),m.push(.5,.5),_++;let D=_;for(let k=0;k<=s;k++){let I=k/s*l+a,H=Math.cos(I),$=Math.sin(I);g.x=L*$,g.y=f*C,g.z=L*H,d.push(g.x,g.y,g.z),u.push(0,C,0),T.x=H*.5+.5,T.y=$*.5*C+.5,m.push(T.x,T.y),_++}for(let k=0;k<s;k++){let q=w+k,I=D+k;M===!0?h.push(I,I+1,q):h.push(I+1,I,q),v+=3}c.addGroup(p,v,M===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xn=class i extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ni=class i extends qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,m=[],_=[],b=[],f=[];for(let p=0;p<h;p++){let S=p*u-o;for(let A=0;A<c;A++){let M=A*d-r;_.push(M,-S,0),b.push(0,0,1),f.push(A/a),f.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let A=S+c*p,M=S+c*(p+1),w=S+1+c*(p+1),T=S+1+c*p;m.push(A,M,T),m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var en=class i extends qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new R,u=new R,m=[],_=[],b=[],f=[];for(let p=0;p<=n;p++){let S=[],A=p/n,M=o+A*a,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),g=0;p===0&&o===0?g=.5/t:p===n&&l===Math.PI&&(g=-.5/t);for(let v=0;v<=t;v++){let L=v/t,C=s+L*r;d.x=-T*Math.cos(C),d.y=w,d.z=T*Math.sin(C),_.push(d.x,d.y,d.z),u.copy(d).normalize(),b.push(u.x,u.y,u.z),f.push(L+g,1-A),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let A=h[p][S+1],M=h[p][S],w=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&m.push(A,M,T),(p!==n-1||l<Math.PI)&&m.push(M,w,T)}this.setIndex(m),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _s=class i extends qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new R,m=new R,_=new R;for(let b=0;b<=n;b++){let f=o+b/n*a;for(let p=0;p<=s;p++){let S=p/s*r;m.x=(e+t*Math.cos(f))*Math.cos(S),m.y=(e+t*Math.cos(f))*Math.sin(S),m.z=t*Math.sin(f),c.push(m.x,m.y,m.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),_.subVectors(m,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(b/n)}}for(let b=1;b<=n;b++)for(let f=1;f<=s;f++){let p=(s+1)*b+f-1,S=(s+1)*(b-1)+f-1,A=(s+1)*(b-1)+f,M=(s+1)*b+f;l.push(p,S,M),l.push(S,A,M)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bh(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Zt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let s in n)e[s]=n[s]}return e}function bh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var mu={clone:Hi,merge:Zt},Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Mf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new R().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new it().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fe=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Mo=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function is(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function io(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var _i=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},To=class extends _i{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sl:r=e,a=2*t-n;break;case Ml:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sl:o=e,l=2*n-t;break;case Ml:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,m=this._weightNext,_=(n-t)/(s-t),b=_*_,f=b*_,p=-u*f+2*u*b-u*_,S=(1+u)*f+(-1.5-2*u)*b+(-.5+u)*_+1,A=(-1-m)*f+(1.5+m)*b+.5*_,M=m*f-m*b;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+S*o[c+w]+A*o[l+w]+M*o[d+w];return r}},wo=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Ao=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ro=class extends _i{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(s-t),b=1-_;for(let f=0;f!==a;++f)r[f]=o[c+f]*b+o[l+f]*_;return r}let u=a*2,m=e-1;for(let _=0;_!==a;++_){let b=o[c+_],f=o[l+_],p=m*u+_*2,S=d[p],A=d[p+1],M=e*u+_*2,w=h[M],T=h[M+1],g=Af(n,t,S,w,s);r[_]=gu(g,b,A,T,f)}return r}};function gu(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function wf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Af(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=gu(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=wf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=is(t,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:is(e.times,Array),values:is(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),io(e.settings)&&(n.settings={inTangents:is(e.settings.inTangents,Array),outTangents:is(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ro(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case oo:t=this.InterpolantFactoryMethodSmooth;break;case vl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return oo;case this.InterpolantFactoryMethodBezier:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;io(this.settings)&&(Sh(this.settings.inTangents,e),Sh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;io(this.settings)&&(Mh(this.settings.inTangents,e),Mh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ne("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ne("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ne("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ne("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jd(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ne("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===oo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,u=d-n,m=d+n;for(let _=0;_!==n;++_){let b=t[d+_];if(b!==t[u+_]||b!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,u=o*n;for(let m=0;m!==n;++m)t[u+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,io(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Sh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Mh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}un.prototype.ValueTypeName="";un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=_o;var xi=class extends un{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Vs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Co.prototype.ValueTypeName="color";var Po=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Po.prototype.ValueTypeName="number";var Io=class extends _i{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},rr=class extends un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends un{constructor(e,t,n){super(e,t,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Vs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends un{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="vector";var No=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let m=c[d],_=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},_u=new No,Do=class{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Do.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di=class extends dt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},or=class extends Di{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yl=new it,Eh=new R,Th=new R,xs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eh),Th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},so=new R,ro=new Un,Ln=new R,ar=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(so,ro,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(so,ro,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ro,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new R,wh=new Xe,Ah=new Xe,Tt=class extends ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Ah),t.subVectors(Ah,wh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tl=class extends xs{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},lr=class extends Di{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},wl=class extends xs{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0}},dn=class extends Di{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},cr=class extends ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Al=class extends xs{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends Di{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Al}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ss=-90,rs=1,ys=class extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(ss,rs,e,t);s.layers=this.layers,this.add(s);let r=new Tt(ss,rs,e,t);r.layers=this.layers,this.add(r);let o=new Tt(ss,rs,e,t);o.layers=this.layers,this.add(o);let a=new Tt(ss,rs,e,t);a.layers=this.layers,this.add(a);let l=new Tt(ss,rs,e,t);l.layers=this.layers,this.add(l);let c=new Tt(ss,rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let f=!1;e.isWebGLRenderer===!0?f=e.state.buffers.depth.getReversed():f=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,s),f&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Uo=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sc="\\[\\]\\.:\\/",Rf=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",Cf="[^"+sc.replace("\\.","")+"]",Pf=/((?:WC+[\/:])*)/.source.replace("WC",rc),If=/(WCOD+)?/.source.replace("WCOD",Cf),Lf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),Nf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),Df=new RegExp("^"+Pf+If+Lf+Nf+"$"),Uf=["material","materials","bones","map"],Rl=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rf,"")}static parseTrackName(e){let t=Df.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Uf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ne("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Rl;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var Rh=new it,ur=class{constructor(e,t,n=0,s=1/0){this.ray=new ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ne("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(e,t=!0,n=[]){return Cl(e,this,n,t),n.sort(Ch),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Cl(e[s],this,n,t);return n.sort(Ch),n}};function Ch(i,e){return i.distance-e.distance}function Cl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Cl(r[o],e,t,!0)}}var uc=class uc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};uc.prototype.isMatrix2=!0;var Pl=uc;function oc(i,e,t,n){let s=Of(n);switch(t){case Jl:return i*e;case Go:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case bi:return i*e*2/s.components*s.byteLength;case Xo:return i*e*2/s.components*s.byteLength;case Kl:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gr:case _r:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Ko:return Math.max(i,16)*Math.max(e,8)/4;case Yo:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case $o:case Qo:case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:case xr:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case xa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yr:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Of(i){switch(i){case on:case Xl:return{byteLength:1,components:1};case Ms:case ql:case Cn:return{byteLength:2,components:1};case zo:case Vo:return{byteLength:2,components:4};case Rn:case Ho:case yn:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kf(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<d.length;m++){let _=d[u],b=d[m];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++u,d[u]=b)}d.length=u+1;for(let m=0,_=d.length;m<_;m++){let b=d[m];i.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Bf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hf=`#ifdef USE_ALPHAHASH
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
#endif`,zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Op=`uniform sampler2D dfgLUT;
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
}`,Fp=`
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zp=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qp=`#if defined( USE_MORPHCOLORS )
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
#endif`,jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ym=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform float backgroundBlurriness;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,Xm=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,jm=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,sg=`#define NORMAL
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
}`,rg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,cg=`#define STANDARD
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
}`,hg=`#define TOON
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
}`,ug=`#define TOON
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
}`,dg=`uniform float size;
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,_g=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Bf,alphahash_pars_fragment:Hf,alphamap_fragment:zf,alphamap_pars_fragment:Vf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:Kf,bsdfs:$f,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:op,color_vertex:ap,common:lp,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:up,emissivemap_fragment:dp,emissivemap_pars_fragment:fp,colorspace_fragment:pp,colorspace_pars_fragment:mp,envmap_fragment:gp,envmap_common_pars_fragment:_p,envmap_pars_fragment:xp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Pp,envmap_vertex:vp,fog_vertex:bp,fog_pars_vertex:Sp,fog_fragment:Mp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ap,lights_lambert_pars_fragment:Rp,lights_pars_begin:Cp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Lp,lights_phong_fragment:Np,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Op,lights_fragment_begin:Fp,lights_fragment_maps:kp,lights_fragment_end:Bp,lightprobes_pars_fragment:Hp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Wp,map_fragment:Xp,map_pars_fragment:qp,map_particle_fragment:Yp,map_particle_pars_fragment:Zp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Kp,morphinstance_vertex:$p,morphcolor_vertex:Qp,morphnormal_vertex:jp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:sm,normal_pars_vertex:rm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:cm,clearcoat_pars_fragment:hm,iridescence_pars_fragment:um,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:_m,roughnessmap_fragment:xm,roughnessmap_pars_fragment:ym,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:bm,shadowmap_vertex:Sm,shadowmask_pars_fragment:Mm,skinbase_vertex:Em,skinning_pars_vertex:Tm,skinning_vertex:wm,skinnormal_vertex:Am,specularmap_fragment:Rm,specularmap_pars_fragment:Cm,tonemapping_fragment:Pm,tonemapping_pars_fragment:Im,transmission_fragment:Lm,transmission_pars_fragment:Nm,uv_pars_fragment:Dm,uv_pars_vertex:Um,uv_vertex:Om,worldpos_vertex:Fm,background_vert:km,background_frag:Bm,backgroundCube_vert:Hm,backgroundCube_frag:zm,cube_vert:Vm,cube_frag:Gm,depth_vert:Wm,depth_frag:Xm,distance_vert:qm,distance_frag:Ym,equirect_vert:Zm,equirect_frag:Jm,linedashed_vert:Km,linedashed_frag:$m,meshbasic_vert:Qm,meshbasic_frag:jm,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:_g},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Zt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Zt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Zt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Zt([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Zt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Zt([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Zt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Zt([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Zt([ge.common,ge.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Zt([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Ea={r:0,b:0,g:0},xg=new it,Hu=new Ue;Hu.set(-1,0,0,0,1,0,0,0,1);function yg(i,e,t,n,s,r){let o=new He(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function m(S){let A=S.isScene===!0?S.background:null;if(A&&A.isTexture){let M=S.backgroundBlurriness>0;A=e.get(A,M)}return A}function _(S){let A=!1,M=m(S);M===null?f(o,a):M&&M.isColor&&(f(M,1),A=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(S,A){let M=m(A);M&&M.isCubeTexture?(c===void 0&&(c=new Ee(new At(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Hi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hu),c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==nt,(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ee(new ni(2,2),new Fn({name:"BackgroundMaterial",uniforms:Hi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,A){S.getRGB(Ea,ic(i)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,A=1){o.set(S),a=A,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,f(o,a)},render:_,addToRenderList:b,dispose:p}}function vg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,k,q,I,H){let $=!1,Y=d(D,I,q,k);r!==Y&&(r=Y,c(r.object)),$=m(D,I,q,H),$&&_(D,I,q,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,M(D,k,q,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,k,q,I){let H=I.wireframe===!0,$=n[k.id];$===void 0&&($={},n[k.id]=$);let Y=D.isInstancedMesh===!0?D.id:0,se=$[Y];se===void 0&&(se={},$[Y]=se);let J=se[q.id];J===void 0&&(J={},se[q.id]=J);let te=J[H];return te===void 0&&(te=u(l()),J[H]=te),te}function u(D){let k=[],q=[],I=[];for(let H=0;H<t;H++)k[H]=0,q[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:I,object:D,attributes:{},index:null}}function m(D,k,q,I){let H=r.attributes,$=k.attributes,Y=0,se=q.getAttributes();for(let J in se)if(se[J].location>=0){let ne=H[J],pe=$[J];if(pe===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),ne===void 0||ne.attribute!==pe||pe&&ne.data!==pe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function _(D,k,q,I){let H={},$=k.attributes,Y=0,se=q.getAttributes();for(let J in se)if(se[J].location>=0){let ne=$[J];ne===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let pe={};pe.attribute=ne,ne&&ne.data&&(pe.data=ne.data),H[J]=pe,Y++}r.attributes=H,r.attributesNum=Y,r.index=I}function b(){let D=r.newAttributes;for(let k=0,q=D.length;k<q;k++)D[k]=0}function f(D){p(D,0)}function p(D,k){let q=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;q[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),H[D]!==k&&(i.vertexAttribDivisor(D,k),H[D]=k)}function S(){let D=r.newAttributes,k=r.enabledAttributes;for(let q=0,I=k.length;q<I;q++)k[q]!==D[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function A(D,k,q,I,H,$,Y){Y===!0?i.vertexAttribIPointer(D,k,q,H,$):i.vertexAttribPointer(D,k,q,I,H,$)}function M(D,k,q,I){b();let H=I.attributes,$=q.getAttributes(),Y=k.defaultAttributeValues;for(let se in $){let J=$[se];if(J.location>=0){let te=H[se];if(te===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){let ne=te.normalized,pe=te.itemSize,Pe=e.get(te);if(Pe===void 0)continue;let j=Pe.buffer,de=Pe.type,xe=Pe.bytesPerElement,Ae=de===i.INT||de===i.UNSIGNED_INT||te.gpuType===Ho;if(te.isInterleavedBufferAttribute){let me=te.data,Oe=me.isInterleavedBuffer===!0?me.stride:me.itemSize,_t=te.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<J.locationSize;Re++)p(J.location+Re,me.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<J.locationSize;Re++)f(J.location+Re);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Re=0;Re<J.locationSize;Re++)A(J.location+Re,pe/J.locationSize,de,ne,Oe*xe,(_t+pe/J.locationSize*Re)*xe,Ae)}else{if(te.isInstancedBufferAttribute){for(let me=0;me<J.locationSize;me++)p(J.location+me,te.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let me=0;me<J.locationSize;me++)f(J.location+me);i.bindBuffer(i.ARRAY_BUFFER,j);for(let me=0;me<J.locationSize;me++)A(J.location+me,pe/J.locationSize,de,ne,pe*xe,pe/J.locationSize*me*xe,Ae)}}else if(Y!==void 0){let ne=Y[se];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(J.location,ne);break;case 3:i.vertexAttrib3fv(J.location,ne);break;case 4:i.vertexAttrib4fv(J.location,ne);break;default:i.vertexAttrib1fv(J.location,ne)}}}}S()}function w(){L();for(let D in n){let k=n[D];for(let q in k){let I=k[q];for(let H in I){let $=I[H];for(let Y in $)h($[Y].object),delete $[Y];delete I[H]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let q in k){let I=k[q];for(let H in I){let $=I[H];for(let Y in $)h($[Y].object),delete $[Y];delete I[H]}}delete n[D.id]}function g(D){for(let k in n){let q=n[k];for(let I in q){let H=q[I];if(H[D.id]===void 0)continue;let $=H[D.id];for(let Y in $)h($[Y].object),delete $[Y];delete H[D.id]}}}function v(D){for(let k in n){let q=n[k],I=D.isInstancedMesh===!0?D.id:0,H=q[I];if(H!==void 0){for(let $ in H){let Y=H[$];for(let se in Y)h(Y[se].object),delete Y[se];delete H[$]}delete q[I],Object.keys(q).length===0&&delete n[k]}}}function L(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:g,initAttributes:b,enableAttribute:f,disableUnusedAttributes:S}}function bg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let m=0;m<h;m++)u+=c[m];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Sg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Pn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){let v=g===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==on&&g!==yn&&!v&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:S,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:T}}function Mg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new wn,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){let _=d.clippingPlanes,b=d.clipIntersection,f=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!f)r?h(null):c();else{let S=r?0:n,A=S*4,M=p.clippingState||null;l.value=M,M=h(_,u,A,m);for(let w=0;w!==A;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,_){let b=d!==null?d.length:0,f=null;if(b!==0){if(f=l.value,_!==!0||f===null){let p=m+b*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let A=0,M=m;A!==b;++A,M+=4)o.copy(d[A]).applyMatrix4(S,a),o.normal.toArray(f,M),f[M+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,f}}var Mr=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new er(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new At(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Oi});r.uniforms.tEquirect.value=t;let o=new Ee(s,r),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=Qt),new ys(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xu=256,Eg=3,Tg=20,zu=256,Vu=16,wg=3,Ag=new R,Rg=new He,wa=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ys(1,10,null),this._boxMesh=new Ee(new At(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Ag}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,m=l.autoClearDepth,_=l.autoClearStencil,b=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,b===null&&(e.background=l.getClearColor(Rg));let f=new ys(n,s,h);return f.position.copy(a),f.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=m,l.autoClearStencil=_,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(xu,fu(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===Ss?this._setSize(e.image.length===0?xu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yu(e,!1,!1),n=Math.log2(e)-Eg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===Ss?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cg(),this._integrationMaterial=Pg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vu);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-wg)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(zu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ig());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function yu(i,e,t){return new Mr(i,{minFilter:ii,generateMipmaps:e,type:Cn,colorSpace:Gs,depthBuffer:t})}function Er(i,e,t){return new Fn({name:i,uniforms:e,vertexShader:Ve.cube_vert,fragmentShader:t,side:tn,blending:Oi,depthTest:!1,depthWrite:!1})}function Cg(){return Er("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${zu}u

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
	`)}function Pg(){return Er("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vu}},`

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
	`)}function Ig(){return Er("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Tg}
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
	`)}function vu(){return Er("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function bu(){return Er("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Lg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){let m=u.mapping;if(m===Fo||m===ko)if(e.has(u)){let _=e.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let b=new Mr(_.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let m=u.mapping,_=m===Fo||m===ko,b=m===ki||m===Ss;if(_||b){let f=t.get(u),p=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wa(i)),f=_?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),f.texture;if(f!==void 0)return f.texture;{let S=u.image;return _&&S&&S.height>0||b&&S&&l(S)?(n===null&&(n=new wa(i)),f=_?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,t.set(u,f),u.addEventListener("dispose",h),f.texture):null}}}return u}function a(u,m){return m===Fo?u.mapping=ki:m===ko&&(u.mapping=Ss),u}function l(u){let m=0,_=6;for(let b=0;b<_;b++)u[b]!==void 0&&m++;return m===_}function c(u){let m=u.target;m.removeEventListener("dispose",c);let _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(u){let m=u.target;m.removeEventListener("dispose",h);let _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Ng(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&zs("WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(_=>delete s[_]);function a(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(let f in _.attributes)e.remove(_.attributes[f]);_.removeEventListener("dispose",a),delete s[_.id],o.unregister(_);let b=r.get(_);b&&(e.remove(b),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,b){return s[b.id]!==void 0||(b.addEventListener("dispose",a),s[b.id]=new WeakRef(b),o.register(b,b.id,b),t.memory.geometries++),b}function h(_){let b=_.attributes;for(let f in b)e.update(b[f],i.ARRAY_BUFFER)}function d(_){let b=_.index,f=_.attributes.position,p=0;if(f===void 0)return;let S=b!==null?b.array.length:f.array.length/3-1,A=f.count>=65535?Ks:Js,M=new A(Math.ceil(S/3)*6,1),w=M.array;if(b!==null){let g=b.array;p=b.version;for(let v=0,L=0;v<S;v+=3){let C=g[v+0],D=g[v+1],k=g[v+2];w[L++]=C,w[L++]=D,w[L++]=D,w[L++]=k,w[L++]=k,w[L++]=C}}else{p=f.version;for(let g=0,v=0;g<S;g+=3){let L=g+0,C=g+1,D=g+2;w[v++]=L,w[v++]=C,w[v++]=C,w[v++]=D,w[v++]=D,w[v++]=L}}M.version=p;let T=r.get(_);T&&e.remove(T),r.set(_,M)}function u(_){let b=r.get(_);if(b){let f=_.index;f!==null&&b.version<f.version&&d(_)}else d(_);return r.get(_)}function m(){for(let _ in s){let b=s[_].deref();b!==void 0&&l(b)}}return{get:c,update:h,getWireframeAttribute:u,dispose:m}}function Ug(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),t.update(u,n,1)}function c(d,u,m){m!==0&&(i.drawElementsInstanced(n,u,r,d*o,m),t.update(u,n,m))}function h(d,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,m);let b=0;for(let f=0;f<m;f++)b+=u[f];t.update(b,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Og(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ne("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Fg(i,e,t){let n=new WeakMap,s=new pt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let L=function(){g.dispose(),n.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],A=0;m===!0&&(A=1),_===!0&&(A=2),b===!0&&(A=3);let M=a.attributes.position.count*A,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*w*4*d),g=new Ys(T,M,w,d);g.type=yn,g.needsUpdate=!0;let v=A*4;for(let C=0;C<d;C++){let D=f[C],k=p[C],q=S[C],I=M*w*4*C;for(let H=0;H<D.count;H++){let $=H*v;m===!0&&(s.fromBufferAttribute(D,H),T[I+$+0]=s.x,T[I+$+1]=s.y,T[I+$+2]=s.z,T[I+$+3]=0),_===!0&&(s.fromBufferAttribute(k,H),T[I+$+4]=s.x,T[I+$+5]=s.y,T[I+$+6]=s.z,T[I+$+7]=0),b===!0&&(s.fromBufferAttribute(q,H),T[I+$+8]=s.x,T[I+$+9]=s.y,T[I+$+10]=s.z,T[I+$+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:g,size:new Xe(M,w)},n.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let b=0;b<c.length;b++)m+=c[b];let _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function kg(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==h&&(m.update(),r.set(m,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var Bg={[kl]:"LINEAR_TONE_MAPPING",[Bl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[dr]:"ACES_FILMIC_TONE_MAPPING",[Vl]:"AGX_TONE_MAPPING",[Gl]:"NEUTRAL_TONE_MAPPING",[zl]:"CUSTOM_TONE_MAPPING"};function Hg(i,e,t,n,s,r){let o=new hn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new qt;h.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new st([0,2,0,0,2,0],2));let d=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ee(h,d),m=new cr(-1,1,1,-1,0,1),_=null,b=null,f=!1,p,S=null,A=[],M=!1;this.setSize=function(w,T){o.setSize(w,T),a!==null&&a.setSize(w,T),l!==null&&l.setSize(w,T);for(let g=0;g<A.length;g++){let v=A[g];v.setSize&&v.setSize(w,T)}},this.setEffects=function(w){A=w,M=A.length>0&&A[0].isRenderPass===!0;let T=o.width,g=o.height;A.length>0&&a===null&&(a=new hn(T,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(T,g,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&A.some(L=>L.needsDepthTexture===!0);v!==(o.depthTexture!==null)&&(v===!0&&c===null&&(c=new ti(T,g),r===!0&&(c.format=si,c.type=Bi)),o.dispose(),o.depthTexture=v?c:null,o.resolveDepthBuffer=v,o.storeMultisampledDepthBuffer=v);for(let L=0;L<A.length;L++){let C=A[L];C.setSize&&C.setSize(T,g),v&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(f||w.toneMapping===Bn&&A.length===0)return!1;if(S=T,T!==null){let g=T.width,v=T.height;(o.width!==g||o.height!==v)&&this.setSize(g,v)}return M===!1&&w.setRenderTarget(o),p=w.toneMapping,w.toneMapping=Bn,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=p,f=!0;let g=o,v=a;for(let L=0;L<A.length;L++){let C=A[L];C.enabled!==!1&&(C.render(w,v,g,T),C.needsSwap!==!1&&(g=v,v=v===a?l:a))}if(_!==w.outputColorSpace||b!==w.toneMapping){_=w.outputColorSpace,b=w.toneMapping,d.defines={},Ze.getTransfer(_)===nt&&(d.defines.SRGB_TRANSFER="");let L=Bg[b];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(S),w.render(u,m),S=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Gu=new jt,Wu=new ti(1,1),Xu=new nr(1),qu=new Ys,Yu=new vo,Zu=new er,Su=[],Mu=[],Eu=new Float32Array(16),Tu=new Float32Array(9),wu=new Float32Array(4);function Ts(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Rt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=Mu[e];t===void 0&&(t=new Int32Array(e),Mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Xg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;wu.set(n),i.uniformMatrix2fv(this.addr,!1,wu),Ct(t,n)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ct(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Rt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,n))return;Eu.set(n),i.uniformMatrix4fv(this.addr,!1,Eu),Ct(t,n)}}function Zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Qg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function e0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function t0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Ca(i){return i.version===0&&(i.compareFunction=jl,i.needsUpdate=!0),i}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ca(Wu):r=Gu,t.setTexture2D(e||r,s)}function i0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yu,s)}function s0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ca(Xu):r=Zu,t.setTextureCube(e||r,s)}function r0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qu,s)}function o0(i){switch(i){case 5126:return zg;case 35664:return Vg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return jg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function a0(i,e){i.uniform1fv(this.addr,e)}function l0(i,e){let t=Ts(e,this.size,2);i.uniform2fv(this.addr,t)}function c0(i,e){let t=Ts(e,this.size,3);i.uniform3fv(this.addr,t)}function h0(i,e){let t=Ts(e,this.size,4);i.uniform4fv(this.addr,t)}function u0(i,e){let t=Ts(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d0(i,e){let t=Ts(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f0(i,e){let t=Ts(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p0(i,e){i.uniform1iv(this.addr,e)}function m0(i,e){i.uniform2iv(this.addr,e)}function g0(i,e){i.uniform3iv(this.addr,e)}function _0(i,e){i.uniform4iv(this.addr,e)}function x0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function v0(i,e){i.uniform3uiv(this.addr,e)}function b0(i,e){i.uniform4uiv(this.addr,e)}function S0(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ca(Wu):o=Gu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function M0(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yu,r[o])}function E0(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ca(Xu):o=Zu;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function T0(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Rt(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||qu,r[o])}function w0(i){switch(i){case 5126:return a0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return y0;case 36295:return v0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return M0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}var pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=o0(t.type)}},mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=w0(t.type)}},gc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function Au(i,e){i.seq.push(e),i.map[e.id]=e}function A0(i,e,t){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),o=dc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Au(t,c===void 0?new pc(a,i,e):new mc(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new gc(a),Au(t,d)),t=d}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);A0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R0=37297,C0=0;function P0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Cu=new Ue;function I0(i){Ze._getMatrix(Cu,Ze.workingColorSpace,i);let e=`mat3( ${Cu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ws:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Pu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+P0(i.getShaderSource(e),a)}else return r}function L0(i,e){let t=I0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var N0={[kl]:"Linear",[Bl]:"Reinhard",[Hl]:"Cineon",[dr]:"ACESFilmic",[Vl]:"AgX",[Gl]:"Neutral",[zl]:"Custom"};function D0(i,e){let t=N0[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ta=new R;function U0(){Ze.getLuminanceCoefficients(Ta);let i=Ta.x.toFixed(4),e=Ta.y.toFixed(4),t=Ta.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function F0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function k0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Sr(i){return i!==""}function Iu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(B0,H0)}function H0(i,e){let t=Ve[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _c(t)}var z0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(z0,V0)}function V0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var G0={[Ui]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function W0(i){return G0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X0={[Ss]:"ENVMAP_MODE_REFRACTION"};function q0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":X0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y0={[Fl]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Qh]:"ENVMAP_BLENDING_ADD"};function Z0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Y0[i.combine]||"ENVMAP_BLENDING_NONE"}function J0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=W0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=q0(t),d=Z0(t),u=O0(t),m=F0(r),_=s.createProgram(),b,f,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Sr).join(`
`),f.length>0&&(f+=`
`)):(b=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),f=[Du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Bn?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,L0("linearToOutputTexel",t.outputColorSpace),U0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),o=_c(o),o=Iu(o,t),o=Lu(o,t),a=_c(a),a=Iu(a,t),a=Lu(a,t),o=Nu(o),a=Nu(a),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,b=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=p+b+o,A=p+f+a,M=Ru(s,s.VERTEX_SHADER,S),w=Ru(s,s.FRAGMENT_SHADER,A);s.attachShader(_,M),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",k=s.getShaderInfoLog(M)||"",q=s.getShaderInfoLog(w)||"",I=D.trim(),H=k.trim(),$=q.trim(),Y=!0,se=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,w);else{let J=Pu(s,M,"vertex"),te=Pu(s,w,"fragment");Ne("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+J+`
`+te)}else I!==""?Le("WebGLProgram: Program Info Log:",I):(H===""||$==="")&&(se=!1);se&&(C.diagnostics={runnable:Y,programLog:I,vertexShader:{log:H,prefix:b},fragmentShader:{log:$,prefix:f}})}s.deleteShader(M),s.deleteShader(w),g=new Es(s,_),v=k0(s,_)}let g;this.getUniforms=function(){return g===void 0&&T(this),g};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(_,R0)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var K0=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yc(e),t.set(e,n)),n}},yc=class{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}};function $0(i){return i===bi||i===xr||i===yr}function Q0(i,e,t,n,s,r){let o=new ds,a=new xc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,v,L,C,D,k){let q=C.fog,I=D.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Y=e.get(g.envMap||H,$),se=u[g.type],J=n.precision;g.precision!==null&&(J=n.getMaxPrecision(g.precision),J!==g.precision&&Le("WebGLProgram.getParameters:",g.precision,"not supported, using",J,"instead."));let te=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=te!==void 0?te.length:0,pe=0;I.morphAttributes.position!==void 0&&(pe=1),I.morphAttributes.normal!==void 0&&(pe=2),I.morphAttributes.color!==void 0&&(pe=3);let Pe,j,de,xe;if(se){let fe=zn[se];Pe=fe.vertexShader,j=fe.fragmentShader}else{Pe=g.vertexShader,j=g.fragmentShader;let fe=a.getVertexShaderStage(g),je=a.getFragmentShaderStage(g);a.update(g,fe,je),de=fe.id,xe=je.id}let Ae=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,_t=D.isBatchedMesh===!0,Re=!!g.map,$e=!!g.matcap,We=!!Y,De=We&&Y.isPMREMTexture===!0,yt=!!g.aoMap,xt=!!g.lightMap,Ut=!!g.bumpMap&&g.wireframe===!1,rt=!!g.normalMap,Ht=!!g.displacementMap,ft=!!g.emissiveMap,Kt=!!g.metalnessMap,sn=!!g.roughnessMap,Ot=g.anisotropy>0,O=g.clearcoat>0,zt=g.diffuseRoughness>0,at=g.dispersion>0,lt=g.retroreflectivity>0,ce=g.iridescence>0,mt=g.sheen>0,be=g.transmission>0,Ce=Ot&&!!g.anisotropyMap,E=O&&!!g.clearcoatMap,x=O&&!!g.clearcoatNormalMap,F=O&&!!g.clearcoatRoughnessMap,X=zt&&!!g.diffuseRoughnessMap,U=ce&&!!g.iridescenceMap,W=ce&&!!g.iridescenceThicknessMap,ee=mt&&!!g.sheenColorMap,B=mt&&!!g.sheenRoughnessMap,V=!!g.specularMap,re=!!g.specularColorMap,P=!!g.specularIntensityMap,Q=be&&!!g.transmissionMap,K=be&&!!g.thicknessMap,le=!!g.gradientMap,ie=!!g.alphaMap,ae=g.alphaTest>0,ye=!!g.alphaHash,Ie=!!g.extensions,oe=Bn;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(oe=i.toneMapping);let we=De?Y.isCompressedCubeTexture?Y.image[0].mipmaps:Y.mipmaps:null,Be={shaderID:se,shaderType:g.type,shaderName:g.name,vertexShader:Pe,fragmentShader:j,defines:g.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:J,batching:_t,batchingColor:_t&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:$e,envMap:We,envMapMode:We&&Y.mapping,envMapPMREM:De,envMapMaxLod:De?we.length-1:null,envMapSize:De?we[0].width:null,aoMap:yt,lightMap:xt,bumpMap:Ut,normalMap:rt,displacementMap:Ht,emissiveMap:ft,normalMapObjectSpace:rt&&g.normalMapType===tu,normalMapTangentSpace:rt&&g.normalMapType===Ma,packedNormalMap:rt&&g.normalMapType===Ma&&$0(g.normalMap.format),metalnessMap:Kt,roughnessMap:sn,anisotropy:Ot,anisotropyMap:Ce,clearcoat:O,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:zt,diffuseRoughnessMap:X,dispersion:at,retroreflection:lt,iridescence:ce,iridescenceMap:U,iridescenceThicknessMap:W,sheen:mt,sheenColorMap:ee,sheenRoughnessMap:B,specularMap:V,specularColorMap:re,specularIntensityMap:P,transmission:be,transmissionMap:Q,thicknessMap:K,gradientMap:le,opaque:g.transparent===!1&&g.blending===bs&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:ye,combine:g.combine,mapUv:Re&&m(g.map.channel),aoMapUv:yt&&m(g.aoMap.channel),lightMapUv:xt&&m(g.lightMap.channel),bumpMapUv:Ut&&m(g.bumpMap.channel),normalMapUv:rt&&m(g.normalMap.channel),displacementMapUv:Ht&&m(g.displacementMap.channel),emissiveMapUv:ft&&m(g.emissiveMap.channel),metalnessMapUv:Kt&&m(g.metalnessMap.channel),roughnessMapUv:sn&&m(g.roughnessMap.channel),anisotropyMapUv:Ce&&m(g.anisotropyMap.channel),clearcoatMapUv:E&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:X&&m(g.diffuseRoughnessMap.channel),iridescenceMapUv:U&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:W&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:B&&m(g.sheenRoughnessMap.channel),specularMapUv:V&&m(g.specularMap.channel),specularColorMapUv:re&&m(g.specularColorMap.channel),specularIntensityMapUv:P&&m(g.specularIntensityMap.channel),transmissionMapUv:Q&&m(g.transmissionMap.channel),thicknessMapUv:K&&m(g.thicknessMap.channel),alphaMapUv:ie&&m(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(rt||Ot),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Re||ie),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:pe,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:k.filter(fe=>fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&Ze.getTransfer(g.map.colorSpace)===nt,decodeVideoTextureEmissive:ft&&g.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(g.emissiveMap.colorSpace)===nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===kn,flipSided:g.side===tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ie&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&g.extensions.multiDraw===!0||_t)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function b(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let L in g.defines)v.push(L),v.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(f(v,g),p(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function f(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapPMREM),g.push(v.envMapMaxLod),g.push(v.envMapSize),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.diffuseRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.numLightProbeGrids),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function p(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.diffuseRoughness&&o.enable(25),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function S(g){let v=u[g.type],L;if(v){let C=zn[v];L=mu.clone(C.uniforms)}else L=g.uniforms;return L}function A(g,v){let L=h.get(v);return L!==void 0?++L.usedTimes:(L=new J0(i,v,g,s),c.push(L),h.set(v,L)),L}function M(g){if(--g.usedTimes===0){let v=c.indexOf(g);c[v]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){a.remove(g)}function T(){a.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:S,acquireProgram:A,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function j0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function e_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ou(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,_,b,f,p){let S=i[e];return S===void 0?(S={id:u.id,object:u,geometry:m,material:_,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:p},i[e]=S):(S.id=u.id,S.object=u,S.geometry=m,S.material=_,S.materialVariant=o(u),S.groupOrder=b,S.renderOrder=u.renderOrder,S.z=f,S.group=p),e++,S}function l(u,m,_,b,f,p,S){S.reversedDepth===!0&&(f=-f);let A=a(u,m,_,b,f,p);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):t.push(A)}function c(u,m,_,b,f,p){let S=a(u,m,_,b,f,p);_.transmission>0?n.unshift(S):_.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,m){t.length>1&&t.sort(u||e_),n.length>1&&n.sort(m||Uu),s.length>1&&s.sort(m||Uu)}function d(){for(let u=e,m=i.length;u<m;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function t_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ou,i.set(n,[o])):s>=r.length?(o=new Ou,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function n_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new He};break;case"SpotLight":t={position:new R,direction:new R,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function i_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var s_=0;function r_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o_(i){let e=new n_,t=i_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new it,o=new it;function a(c){let h=0,d=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,_=0,b=0,f=0,p=0,S=0,A=0,M=0,w=0,T=0,g=0,v=0,L=0,C=0;c.sort(r_);for(let k=0,q=c.length;k<q;k++){let I=c[k],H=I.color,$=I.intensity,Y=I.distance,se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===bi?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*$,d+=H.g*$,u+=H.b*$;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],$);C++}else if(I.isSunLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=se;let pe=te.getViewportCount();for(let Pe=0;Pe<pe;Pe++)n.sunShadowMatrix[b+Pe]=te.getMatrix(Pe),n.sunShadowCascade[b+Pe]=te._cascadeData[Pe];b+=pe,_++}n.sun[m]=J,m++}else if(I.isDirectionalLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[f]=ne,n.directionalShadowMap[f]=se,n.directionalShadowMatrix[f]=I.shadow.matrix,w++}n.directional[f]=J,f++}else if(I.isSpotLight){let J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(H).multiplyScalar($),J.distance=Y,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[S]=J;let te=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,te.updateMatrices(I),I.castShadow&&L++),n.spotLightMatrix[S]=te.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[S]=ne,n.spotShadowMap[S]=se,g++}S++}else if(I.isRectAreaLight){let J=e.get(I);J.color.copy(H).multiplyScalar($),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=J,A++}else if(I.isPointLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let te=I.shadow,ne=t.get(I);ne.shadowIntensity=te.intensity,ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[p]=ne,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=I.shadow.matrix,T++}n.point[p]=J,p++}else if(I.isHemisphereLight){let J=e.get(I);J.skyColor.copy(I.color).multiplyScalar($),J.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[M]=J,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==m||D.directionalLength!==f||D.pointLength!==p||D.spotLength!==S||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==g||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=m,n.directional.length=f,n.spot.length=S,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,D.sunLength=m,D.directionalLength=f,D.pointLength=p,D.spotLength=S,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=g,D.numSpotMaps=v,D.numLightProbes=C,n.version=s_++)}function l(c,h){let d=0,u=0,m=0,_=0,b=0,f=0,p=h.matrixWorldInverse;for(let S=0,A=c.length;S<A;S++){let M=c[S];if(M.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),_++}else if(M.isRectAreaLight){let w=n.rectArea[b];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),b++}else if(M.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),m++}else if(M.isHemisphereLight){let w=n.hemi[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),f++}}}return{setup:a,setupView:l,state:n}}function Fu(i){let e=new o_(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function a_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Fu(i),e.set(s,[a])):r>=o.length?(a=new Fu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
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
}`,h_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],u_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],ku=new it,br=new R,fc=new R;function d_(i,e,t){let n=new gi,s=new Xe,r=new Xe,o=new pt,a=new Mo,l=new Eo,c={},h=t.maxTextureSize,d={[vi]:tn,[tn]:vi,[kn]:kn},u=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;let _=new qt;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ee(_,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ui;let p=this.type;this.render=function(T,g,v){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;this.type===Lh&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ui);let L=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Oi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let q=p!==this.type;q&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=T.length;I<H;I++){let $=T[I],Y=$.shadow;if(Y===void 0){Le("WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let se=Y.getFrameExtents();s.multiply(se),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,Y.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=J,Y.map===null||q===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===vs){if($.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new hn(s.x,s.y,{format:bi,type:Cn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),Y.map.texture.name=$.name+".shadowMap",Y.map.depthTexture=new ti(s.x,s.y,yn),Y.map.depthTexture.name=$.name+".shadowMapDepth",Y.map.depthTexture.format=Qn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt}else $.isPointLight?(Y.map=new Mr(s.x),Y.map.depthTexture=new nr(s.x,Rn)):(Y.map=new hn(s.x,s.y),Y.map.depthTexture=new ti(s.x,s.y,Rn)),Y.map.depthTexture.name=$.name+".shadowMap",Y.map.depthTexture.format=Qn,this.type===Ui?(Y.map.depthTexture.compareFunction=J?Ql:$l,Y.map.depthTexture.minFilter=Qt,Y.map.depthTexture.magFilter=Qt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Nt,Y.map.depthTexture.magFilter=Nt);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let te=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();$.isPointLight!==!0&&Y.updateMatrices($,v);let ne=(Y.camera.layers.mask&4294967294)!==0?Y.camera.layers:v.layers;for(let pe=0;pe<te;pe++){let Pe=Y.getCamera(pe);if($.isPointLight){let j=Y.camera,de=Y.matrix,xe=$.distance||j.far;xe!==j.far&&(j.far=xe,j.updateProjectionMatrix()),br.setFromMatrixPosition($.matrixWorld),j.position.copy(br),fc.copy(j.position),fc.add(h_[pe]),j.up.copy(u_[pe]),j.lookAt(fc),j.updateMatrixWorld(),de.makeTranslation(-br.x,-br.y,-br.z),ku.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(ku,j.coordinateSystem,j.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,pe),i.clear();else{pe===0&&(i.setRenderTarget(Y.map),i.clear());let j=Y.getViewport(pe);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),k.viewport(o)}n=Y.getFrustum(pe),M(g,v,Pe,$,ne,this.type)}Y.isPointLightShadow!==!0&&this.type===vs&&S(Y,v),Y.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(L,C,D)};function S(T,g){let v=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new hn(s.x,s.y,{format:bi,type:Cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(g,null,v,u,b,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(g,null,v,m,b,null)}function A(T,g,v,L){let C=null,D=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let k=C.uuid,q=g.uuid,I=c[k];I===void 0&&(I={},c[k]=I);let H=I[q];H===void 0&&(H=C.clone(),I[q]=H,g.addEventListener("dispose",w)),C=H}if(C.visible=g.visible,C.wireframe=g.wireframe,L===vs?C.side=g.shadowSide!==null?g.shadowSide:g.side:C.side=g.shadowSide!==null?g.shadowSide:d[g.side],C.alphaMap=g.alphaMap,C.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,C.map=g.map,C.clipShadows=g.clipShadows,C.clippingPlanes=g.clippingPlanes,C.clipIntersection=g.clipIntersection,C.displacementMap=g.displacementMap,C.displacementScale=g.displacementScale,C.displacementBias=g.displacementBias,C.wireframeLinewidth=g.wireframeLinewidth,C.linewidth=g.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let k=i.properties.get(C);k.light=v}return C}function M(T,g,v,L,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===vs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);let I=e.update(T),H=T.material;if(Array.isArray(H)){let $=I.groups;for(let Y=0,se=$.length;Y<se;Y++){let J=$[Y],te=H[J.materialIndex];if(te&&te.visible){let ne=A(T,te,L,D);T.onBeforeShadow(i,T,g,v,I,ne,J),i.renderBufferDirect(v,null,I,ne,T,J),T.onAfterShadow(i,T,g,v,I,ne,J)}}}else if(H.visible){let $=A(T,H,L,D);T.onBeforeShadow(i,T,g,v,I,$,null),i.renderBufferDirect(v,null,I,$,T,null),T.onAfterShadow(i,T,g,v,I,$,null)}}let q=T.children;for(let I=0,H=q.length;I<H;I++)M(q[I],g,v,L,C,D)}function w(T){T.target.removeEventListener("dispose",w);for(let v in c){let L=c[v],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function f_(i,e){function t(){let P=!1,Q=new pt,K=null,le=new pt(0,0,0,0);return{setMask:function(ie){K!==ie&&!P&&(i.colorMask(ie,ie,ie,ie),K=ie)},setLocked:function(ie){P=ie},setClear:function(ie,ae,ye,Ie,oe){oe===!0&&(ie*=Ie,ae*=Ie,ye*=Ie),Q.set(ie,ae,ye,Ie),le.equals(Q)===!1&&(i.clearColor(ie,ae,ye,Ie),le.copy(Q))},reset:function(){P=!1,K=null,le.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,K=null,le=null,ie=null;return{setReversed:function(ae){if(Q!==ae){let ye=e.get("EXT_clip_control");ae?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Q=ae;let Ie=ie;ie=null,this.setClear(Ie)}},getReversed:function(){return Q},setTest:function(ae){ae?me(i.DEPTH_TEST):Oe(i.DEPTH_TEST)},setMask:function(ae){K!==ae&&!P&&(i.depthMask(ae),K=ae)},setFunc:function(ae){if(Q&&(ae=du[ae]),le!==ae){switch(ae){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case as:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){P=ae},setClear:function(ae){ie!==ae&&(ie=ae,Q&&(ae=1-ae),i.clearDepth(ae))},reset:function(){P=!1,K=null,le=null,ie=null,Q=!1}}}function s(){let P=!1,Q=null,K=null,le=null,ie=null,ae=null,ye=null,Ie=null,oe=null;return{setTest:function(we){P||(we?me(i.STENCIL_TEST):Oe(i.STENCIL_TEST))},setMask:function(we){Q!==we&&!P&&(i.stencilMask(we),Q=we)},setFunc:function(we,Be,fe){(K!==we||le!==Be||ie!==fe)&&(i.stencilFunc(we,Be,fe),K=we,le=Be,ie=fe)},setOp:function(we,Be,fe){(ae!==we||ye!==Be||Ie!==fe)&&(i.stencilOp(we,Be,fe),ae=we,ye=Be,Ie=fe)},setLocked:function(we){P=we},setClear:function(we){oe!==we&&(i.clearStencil(we),oe=we)},reset:function(){P=!1,Q=null,K=null,le=null,ie=null,ae=null,ye=null,Ie=null,oe=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,h={},d={},u={},m=new WeakMap,_=[],b=null,f=!1,p=null,S=null,A=null,M=null,w=null,T=null,g=null,v=new He(0,0,0),L=0,C=!1,D=null,k=null,q=null,I=null,H=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,se=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=se>=1):J.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=se>=2);let te=null,ne={},pe=i.getParameter(i.SCISSOR_BOX),Pe=i.getParameter(i.VIEWPORT),j=new pt().fromArray(pe),de=new pt().fromArray(Pe);function xe(P,Q,K,le){let ie=new Uint8Array(4),ae=i.createTexture();i.bindTexture(P,ae),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<K;ye++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(Q,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Q+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return ae}let Ae={};Ae[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(i.DEPTH_TEST),o.setFunc(as),Ut(!1),rt(Il),me(i.CULL_FACE),yt(Oi);function me(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Oe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function _t(P,Q){return u[P]!==Q?(i.bindFramebuffer(P,Q),u[P]=Q,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Q),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Q),!0):!1}function Re(P,Q){let K=_,le=!1;if(P){K=m.get(Q),K===void 0&&(K=[],m.set(Q,K));let ie=P.textures;if(K.length!==ie.length||K[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ye=ie.length;ae<ye;ae++)K[ae]=i.COLOR_ATTACHMENT0+ae;K.length=ie.length,le=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,le=!0);le&&i.drawBuffers(K)}function $e(P){return b!==P?(i.useProgram(P),b=P,!0):!1}let We={[Fi]:i.FUNC_ADD,[Dh]:i.FUNC_SUBTRACT,[Uh]:i.FUNC_REVERSE_SUBTRACT};We[Oh]=i.MIN,We[Fh]=i.MAX;let De={[kh]:i.ZERO,[Bh]:i.ONE,[Hh]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[qh]:i.SRC_ALPHA_SATURATE,[Wh]:i.DST_COLOR,[Vh]:i.DST_ALPHA,[zh]:i.ONE_MINUS_SRC_COLOR,[Ol]:i.ONE_MINUS_SRC_ALPHA,[Xh]:i.ONE_MINUS_DST_COLOR,[Gh]:i.ONE_MINUS_DST_ALPHA,[Yh]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Jh]:i.CONSTANT_ALPHA,[Kh]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(P,Q,K,le,ie,ae,ye,Ie,oe,we){if(P===Oi){f===!0&&(Oe(i.BLEND),f=!1);return}if(f===!1&&(me(i.BLEND),f=!0),P!==Nh){if(P!==p||we!==C){if((S!==Fi||w!==Fi)&&(i.blendEquation(i.FUNC_ADD),S=Fi,w=Fi),we)switch(P){case bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ne("WebGLState: Invalid blending: ",P);break}else switch(P){case bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ll:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",P);break}A=null,M=null,T=null,g=null,v.set(0,0,0),L=0,p=P,C=we}return}ie=ie||Q,ae=ae||K,ye=ye||le,(Q!==S||ie!==w)&&(i.blendEquationSeparate(We[Q],We[ie]),S=Q,w=ie),(K!==A||le!==M||ae!==T||ye!==g)&&(i.blendFuncSeparate(De[K],De[le],De[ae],De[ye]),A=K,M=le,T=ae,g=ye),(Ie.equals(v)===!1||oe!==L)&&(i.blendColor(Ie.r,Ie.g,Ie.b,oe),v.copy(Ie),L=oe),p=P,C=!1}function xt(P,Q){P.side===kn?Oe(i.CULL_FACE):me(i.CULL_FACE);let K=P.side===tn;Q&&(K=!K),Ut(K),P.blending===bs&&P.transparent===!1?yt(Oi):yt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let le=P.stencilWrite;a.setTest(le),le&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ft(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Oe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function rt(P){P!==Ph?(me(i.CULL_FACE),P!==k&&(P===Il?i.cullFace(i.BACK):P===Ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Oe(i.CULL_FACE),k=P}function Ht(P){P!==q&&(Y&&i.lineWidth(P),q=P)}function ft(P,Q,K){P?(me(i.POLYGON_OFFSET_FILL),(I!==Q||H!==K)&&(I=Q,H=K,o.getReversed()&&(Q=-Q,K=-K),i.polygonOffset(Q,K))):Oe(i.POLYGON_OFFSET_FILL)}function Kt(P){P?me(i.SCISSOR_TEST):Oe(i.SCISSOR_TEST)}function sn(P){P===void 0&&(P=i.TEXTURE0+$-1),te!==P&&(i.activeTexture(P),te=P)}function Ot(P,Q,K){K===void 0&&(te===null?K=i.TEXTURE0+$-1:K=te);let le=ne[K];le===void 0&&(le={type:void 0,texture:void 0},ne[K]=le),(le.type!==P||le.texture!==Q)&&(te!==K&&(i.activeTexture(K),te=K),i.bindTexture(P,Q||Ae[P]),le.type=P,le.texture=Q)}function O(){let P=ne[te];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function zt(){try{i.compressedTexImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function lt(){try{i.texSubImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function ce(){try{i.texSubImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function mt(){try{i.compressedTexSubImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function Ce(){try{i.texStorage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function E(){try{i.texStorage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function x(){try{i.texImage2D(...arguments)}catch(P){Ne("WebGLState:",P)}}function F(){try{i.texImage3D(...arguments)}catch(P){Ne("WebGLState:",P)}}function X(P){return d[P]!==void 0?d[P]:i.getParameter(P)}function U(P,Q){d[P]!==Q&&(i.pixelStorei(P,Q),d[P]=Q)}function W(P){j.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),j.copy(P))}function ee(P){de.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function B(P,Q){let K=c.get(Q);K===void 0&&(K=new WeakMap,c.set(Q,K));let le=K.get(P);le===void 0&&(le=i.getUniformBlockIndex(Q,P.name),i.uniformBlockBinding(Q,le,le),K.set(P,le))}function V(P,Q,K){let ie=c.get(Q).get(P);l[ie]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,K),l[ie]=K)}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,ne={},u={},l={},m=new WeakMap,_=[],b=null,f=!1,p=null,S=null,A=null,M=null,w=null,T=null,g=null,v=new He(0,0,0),L=0,C=!1,D=null,k=null,q=null,I=null,H=null,j.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:Oe,bindFramebuffer:_t,drawBuffers:Re,useProgram:$e,setBlending:yt,setMaterial:xt,setFlipSided:Ut,setCullFace:rt,setLineWidth:Ht,setPolygonOffset:ft,setScissorTest:Kt,activeTexture:sn,bindTexture:Ot,unbindTexture:O,compressedTexImage2D:zt,compressedTexImage3D:at,texImage2D:x,texImage3D:F,pixelStorei:U,getParameter:X,updateUBOMapping:B,uniformBlockBinding:V,texStorage2D:Ce,texStorage3D:E,texSubImage2D:lt,texSubImage3D:ce,compressedTexSubImage2D:mt,compressedTexSubImage3D:be,scissor:W,viewport:ee,reset:re}}function p_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,d=new Set,u,m=new WeakMap,_=new Set,b=new FinalizationRegistry(E=>_.delete(E)),f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function p(E,x){return f?new OffscreenCanvas(E,x):Xs("canvas")}function S(E,x,F){let X=1,U=Ce(E);if((U.width>F||U.height>F)&&(X=F/Math.max(U.width,U.height)),X<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let W=Math.floor(X*U.width),ee=Math.floor(X*U.height);u===void 0&&(u=p(W,ee));let B=x?p(W,ee):u;return B.width=W,B.height=ee,B.getContext("2d").drawImage(E,0,0,W,ee),Le("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+W+"x"+ee+")."),B}else return"data"in E&&Le("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),E;return E}function A(E){return E.generateMipmaps}function M(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,x,F,X,U,W=!1){if(E!==null){if(i[E]!==void 0)return i[E];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ee;X&&(ee=e.get("EXT_texture_norm16"),ee||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let B=x;if(x===i.RED&&(F===i.FLOAT&&(B=i.R32F),F===i.HALF_FLOAT&&(B=i.R16F),F===i.UNSIGNED_BYTE&&(B=i.R8),F===i.UNSIGNED_SHORT&&ee&&(B=ee.R16_EXT),F===i.SHORT&&ee&&(B=ee.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.R8UI),F===i.UNSIGNED_SHORT&&(B=i.R16UI),F===i.UNSIGNED_INT&&(B=i.R32UI),F===i.BYTE&&(B=i.R8I),F===i.SHORT&&(B=i.R16I),F===i.INT&&(B=i.R32I)),x===i.RG&&(F===i.FLOAT&&(B=i.RG32F),F===i.HALF_FLOAT&&(B=i.RG16F),F===i.UNSIGNED_BYTE&&(B=i.RG8),F===i.UNSIGNED_SHORT&&ee&&(B=ee.RG16_EXT),F===i.SHORT&&ee&&(B=ee.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RG8UI),F===i.UNSIGNED_SHORT&&(B=i.RG16UI),F===i.UNSIGNED_INT&&(B=i.RG32UI),F===i.BYTE&&(B=i.RG8I),F===i.SHORT&&(B=i.RG16I),F===i.INT&&(B=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RGB8UI),F===i.UNSIGNED_SHORT&&(B=i.RGB16UI),F===i.UNSIGNED_INT&&(B=i.RGB32UI),F===i.BYTE&&(B=i.RGB8I),F===i.SHORT&&(B=i.RGB16I),F===i.INT&&(B=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(B=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(B=i.RGBA16UI),F===i.UNSIGNED_INT&&(B=i.RGBA32UI),F===i.BYTE&&(B=i.RGBA8I),F===i.SHORT&&(B=i.RGBA16I),F===i.INT&&(B=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ee&&(B=ee.RGB16_EXT),F===i.SHORT&&ee&&(B=ee.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(B=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(B=i.R11F_G11F_B10F)),x===i.RGBA){let V=W?Ws:Ze.getTransfer(U);F===i.FLOAT&&(B=i.RGBA32F),F===i.HALF_FLOAT&&(B=i.RGBA16F),F===i.UNSIGNED_BYTE&&(B=V===nt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ee&&(B=ee.RGBA16_EXT),F===i.SHORT&&ee&&(B=ee.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(B=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(B=i.RGB5_A1)}return(B===i.R16F||B===i.R32F||B===i.RG16F||B===i.RG32F||B===i.RGBA16F||B===i.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function g(E,x){let F;return E?x===null||x===Rn||x===Bi?F=i.DEPTH24_STENCIL8:x===yn?F=i.DEPTH32F_STENCIL8:x===Ms&&(F=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Rn||x===Bi?F=i.DEPTH_COMPONENT24:x===yn?F=i.DEPTH_COMPONENT32F:x===Ms&&(F=i.DEPTH_COMPONENT16),F}function v(E,x){return A(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nt&&E.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function L(E){let x=new WeakRef(E);n.get(E).__ref=x,_.add(x),b.register(E,x,x)}function C(E){let x=n.get(E).__ref;x!==void 0&&(_.delete(x),b.unregister(x))}function D(E){q(E.target)}function k(E){I(E.target)}function q(E){E.removeEventListener("dispose",D),C(E),$(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&d.delete(E)}function I(E){E.removeEventListener("dispose",k),C(E),se(E)}function H(){for(let E of _){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):q(x))}_.clear(),d.clear()}function $(E){let x=n.get(E);if(x.__webglInit===void 0)return;let F=E.source,X=m.get(F);if(X){let U=X[x.__cacheKey];U.usedTimes--,U.usedTimes===0&&Y(E),Object.keys(X).length===0&&m.delete(F)}n.remove(E)}function Y(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let F=E.source,X=m.get(F);delete X[x.__cacheKey],o.memory.textures--}function se(E){let x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=E.depthTexture;if(F&&F.renderTarget===E&&q(F),E.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(x.__webglFramebuffer[U]))for(let W=0;W<x.__webglFramebuffer[U].length;W++)i.deleteFramebuffer(x.__webglFramebuffer[U][W]);else i.deleteFramebuffer(x.__webglFramebuffer[U]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[U])}else{if(Array.isArray(x.__webglFramebuffer))for(let U=0;U<x.__webglFramebuffer.length;U++)i.deleteFramebuffer(x.__webglFramebuffer[U]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let U=0;U<x.__webglColorRenderbuffer.length;U++)x.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[U]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let X=E.textures;for(let U=0,W=X.length;U<W;U++){let ee=n.get(X[U]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(X[U])}n.remove(E)}let J=0;function te(){J=0}function ne(){return J}function pe(E){J=E}function Pe(){let E=J;return E>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,E}function j(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function de(E,x){let F=n.get(E);if(E.isVideoTexture&&mt(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let X=E.image;if(X===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function xe(E,x){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){xt(F,E,x);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Ae(E,x){let F=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){xt(F,E,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function me(E,x){let F=n.get(E);if(E.version>0&&F.__version!==E.version){Ut(F,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let Oe={[ls]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},_t={[Nt]:i.NEAREST,[jh]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Re={[iu]:i.NEVER,[jl]:i.ALWAYS,[su]:i.LESS,[$l]:i.LEQUAL,[ru]:i.EQUAL,[Ql]:i.GEQUAL,[ou]:i.GREATER,[au]:i.NOTEQUAL};function $e(E,x){if(x.type===yn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===Bo||x.magFilter===fr||x.magFilter===ii||x.minFilter===Qt||x.minFilter===Bo||x.minFilter===fr||x.minFilter===ii)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Oe[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Oe[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Oe[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,_t[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,_t[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Re[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==fr&&x.minFilter!==ii||x.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function We(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",D),L(x));let X=x.source,U=m.get(X);U===void 0&&(U={},m.set(X,U));let W=j(x);if(W!==E.__cacheKey){U[W]===void 0&&(U[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),U[W].usedTimes++;let ee=U[E.__cacheKey];ee!==void 0&&(U[E.__cacheKey].usedTimes--,ee.usedTimes===0&&Y(x)),E.__cacheKey=W,E.__webglTexture=U[W].texture}return F}function De(E,x,F){return Math.floor(Math.floor(E/F)/x)}function yt(E,x,F,X){let W=E.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,X,x.data);else{W.sort((P,Q)=>P.start-Q.start);let ee=0;for(let P=1;P<W.length;P++){let Q=W[ee],K=W[P],le=Q.start+Q.count,ie=De(K.start,x.width,4),ae=De(Q.start,x.width,4);K.start<=le+1&&ie===ae&&De(K.start+K.count-1,x.width,4)===ie?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++ee,W[ee]=K)}W.length=ee+1;let B=t.getParameter(i.UNPACK_ROW_LENGTH),V=t.getParameter(i.UNPACK_SKIP_PIXELS),re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let P=0,Q=W.length;P<Q;P++){let K=W[P],le=Math.floor(K.start/4),ie=Math.ceil(K.count/4),ae=le%x.width,ye=Math.floor(le/x.width),Ie=ie,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,ae,ye,Ie,oe,F,X,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,B),t.pixelStorei(i.UNPACK_SKIP_PIXELS,V),t.pixelStorei(i.UNPACK_SKIP_ROWS,re)}}function xt(E,x,F){let X=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=i.TEXTURE_3D);let U=We(E,x),W=x.source;t.bindTexture(X,E.__webglTexture,i.TEXTURE0+F);let ee=n.get(W);if(W.version!==ee.__version||U===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let oe=Ze.getPrimaries(Ze.workingColorSpace),we=x.colorSpace===ri?null:Ze.getPrimaries(x.colorSpace),Be=x.colorSpace===ri||oe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let V=S(x.image,!1,s.maxTextureSize);V=be(x,V);let re=r.convert(x.format,x.colorSpace),P=r.convert(x.type),Q=T(x.internalFormat,re,P,x.normalized,x.colorSpace,x.isVideoTexture);$e(X,x);let K,le=x.mipmaps,ie=x.isVideoTexture!==!0,ae=ee.__version===void 0||U===!0,ye=W.dataReady,Ie=v(x,V);if(x.isDepthTexture)Q=g(x.format===si,x.type),ae&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Q,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,Q,V.width,V.height,0,re,P,null));else if(x.isDataTexture)if(le.length>0){ie&&ae&&t.texStorage2D(i.TEXTURE_2D,Ie,Q,le[0].width,le[0].height);for(let oe=0,we=le.length;oe<we;oe++)K=le[oe],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,K.width,K.height,re,P,K.data):t.texImage2D(i.TEXTURE_2D,oe,Q,K.width,K.height,0,re,P,K.data);x.generateMipmaps=!1}else ie?(ae&&t.texStorage2D(i.TEXTURE_2D,Ie,Q,V.width,V.height),ye&&yt(x,V,re,P)):t.texImage2D(i.TEXTURE_2D,0,Q,V.width,V.height,0,re,P,V.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Q,le[0].width,le[0].height,V.depth);for(let oe=0,we=le.length;oe<we;oe++)if(K=le[oe],x.format!==Pn)if(re!==null)if(ie){if(ye)if(x.layerUpdates.size>0){let Be=oc(K.width,K.height,x.format,x.type);for(let fe of x.layerUpdates){let je=K.data.subarray(fe*Be/K.data.BYTES_PER_ELEMENT,(fe+1)*Be/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,fe,K.width,K.height,1,re,je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,K.width,K.height,V.depth,re,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Q,K.width,K.height,V.depth,0,K.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,K.width,K.height,V.depth,re,P,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Q,K.width,K.height,V.depth,0,re,P,K.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&ae&&t.texStorage2D(i.TEXTURE_2D,Ie,Q,le[0].width,le[0].height);for(let oe=0,we=le.length;oe<we;oe++)K=le[oe],x.format!==Pn?re!==null?ie?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,K.width,K.height,re,K.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Q,K.width,K.height,0,K.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?ye&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,K.width,K.height,re,P,K.data):t.texImage2D(i.TEXTURE_2D,oe,Q,K.width,K.height,0,re,P,K.data)}else if(x.isDataArrayTexture)if(ie){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Q,V.width,V.height,V.depth),ye)if(x.layerUpdates.size>0){let oe=oc(V.width,V.height,x.format,x.type);for(let we of x.layerUpdates){let Be=V.data.subarray(we*oe/V.data.BYTES_PER_ELEMENT,(we+1)*oe/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,V.width,V.height,1,re,P,Be)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,re,P,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Q,V.width,V.height,V.depth,0,re,P,V.data);else if(x.isData3DTexture)ie?(ae&&t.texStorage3D(i.TEXTURE_3D,Ie,Q,V.width,V.height,V.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,re,P,V.data)):t.texImage3D(i.TEXTURE_3D,0,Q,V.width,V.height,V.depth,0,re,P,V.data);else if(x.isFramebufferTexture){if(ae)if(ie)t.texStorage2D(i.TEXTURE_2D,Ie,Q,V.width,V.height);else{let oe=V.width,we=V.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(i.TEXTURE_2D,Be,Q,oe,we,0,re,P,null),oe>>=1,we>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),V.parentNode!==oe){oe.appendChild(V),d.add(x),oe.onpaint=we=>{let Be=we.changedElements;for(let fe of d)Be.includes(fe.image)&&(fe.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,V);else{let Be=i.RGBA,fe=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,fe,je,V)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(ie&&ae){let oe=Ce(le[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Q,oe.width,oe.height)}for(let oe=0,we=le.length;oe<we;oe++)K=le[oe],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,re,P,K):t.texImage2D(i.TEXTURE_2D,oe,Q,re,P,K);x.generateMipmaps=!1}else if(ie){if(ae){let oe=Ce(V);t.texStorage2D(i.TEXTURE_2D,Ie,Q,oe.width,oe.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,P,V)}else t.texImage2D(i.TEXTURE_2D,0,Q,re,P,V);A(x)&&x.mipmapsAutoUpdate===!0&&M(X),ee.__version=W.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Ut(E,x,F){if(x.image.length!==6)return;let X=We(E,x),U=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+F);let W=n.get(U);if(U.version!==W.__version||X===!0){t.activeTexture(i.TEXTURE0+F);let ee=Ze.getPrimaries(Ze.workingColorSpace),B=x.colorSpace===ri?null:Ze.getPrimaries(x.colorSpace),V=x.colorSpace===ri||ee===B?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let re=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,Q=[];for(let fe=0;fe<6;fe++)!re&&!P?Q[fe]=S(x.image[fe],!0,s.maxCubemapSize):Q[fe]=P?x.image[fe].image:x.image[fe],Q[fe]=be(x,Q[fe]);let K=Q[0],le=r.convert(x.format,x.colorSpace),ie=r.convert(x.type),ae=T(x.internalFormat,le,ie,x.normalized,x.colorSpace),ye=x.isVideoTexture!==!0,Ie=W.__version===void 0||X===!0,oe=U.dataReady,we=v(x,K);$e(i.TEXTURE_CUBE_MAP,x);let Be;if(x.isDepthTexture){if(ae=g(x.format===si,x.type),Ie)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,K.width,K.height);else for(let fe=0;fe<6;fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,K.width,K.height,0,le,ie,null)}else if(re){ye&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ae,K.width,K.height);for(let fe=0;fe<6;fe++){Be=Q[fe].mipmaps;for(let je=0;je<Be.length;je++){let vt=Be[je];x.format!==Pn?le!==null?ye?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,vt.width,vt.height,le,vt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ae,vt.width,vt.height,0,vt.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,0,0,vt.width,vt.height,le,ie,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je,ae,vt.width,vt.height,0,le,ie,vt.data)}}}else{if(Be=x.mipmaps,ye&&Ie){Be.length>0&&we++;let fe=Ce(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,ae,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(P){ye?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Q[fe].width,Q[fe].height,le,ie,Q[fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,Q[fe].width,Q[fe].height,0,le,ie,Q[fe].data);for(let je=0;je<Be.length;je++){let vn=Be[je].image[fe].image;ye?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,vn.width,vn.height,le,ie,vn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ae,vn.width,vn.height,0,le,ie,vn.data)}}else{ye?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,le,ie,Q[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ae,le,ie,Q[fe]);for(let je=0;je<Be.length;je++){let vt=Be[je];ye?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,0,0,le,ie,vt.image[fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,je+1,ae,le,ie,vt.image[fe])}}}A(x)&&x.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),W.__version=U.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function rt(E,x,F,X,U,W){let ee=r.convert(F.format,F.colorSpace),B=r.convert(F.type),V=T(F.internalFormat,ee,B,F.normalized,F.colorSpace),re=n.get(x),P=n.get(F);if(P.__renderTarget=x,!re.__hasExternalTextures){let Q=Math.max(1,x.width>>W),K=Math.max(1,x.height>>W);U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?t.texImage3D(U,W,V,Q,K,x.depth,0,ee,B,null):t.texImage2D(U,W,V,Q,K,0,ee,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,U,P.__webglTexture,0,lt(x)):(U===i.TEXTURE_2D||U>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,U,P.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(E,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let X=x.depthTexture,U=X&&X.isDepthTexture?X.type:null,W=g(x.stencilBuffer,U),ee=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(x),W,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(x),W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,E)}else{let X=x.textures;for(let U=0;U<X.length;U++){let W=X[U],ee=r.convert(W.format,W.colorSpace),B=r.convert(W.type),V=T(W.internalFormat,ee,B,W.normalized,W.colorSpace);ce(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt(x),V,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt(x),V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(E,x,F){let X=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U=n.get(x.depthTexture);U.__renderTarget=x;let W=X?x.depthTexture.image[0]:x.depthTexture.image;(!U.__webglTexture||W.width!==x.width||W.height!==x.height)&&(W.width=x.width,W.height=x.height,x.depthTexture.needsUpdate=!0),X?me(x.depthTexture,0):de(x.depthTexture,0);let ee=U.__webglTexture,B=lt(x),V=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,re=x.depthTexture.format===si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Qn)ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,V,ee,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,re,V,ee,0);else if(x.depthTexture.format===si)ce(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,V,ee,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,re,V,ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Kt(E){let x=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let X=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let U=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",U)};X.addEventListener("dispose",U),x.__depthDisposeCallback=U}x.__boundDepthTexture=X}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let X=0;X<6;X++)ft(x.__webglFramebuffer[X],E,X);else E.texture.mipmaps.length>0?ft(x.__webglFramebuffer[0],E,0):ft(x.__webglFramebuffer,E,0);else if(F){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=i.createRenderbuffer(),Ht(x.__webglDepthbuffer[X],E,!1);else{let U=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,W)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ht(x.__webglDepthbuffer,E,!1);else{let U=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,U,i.RENDERBUFFER,W)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function sn(E,x,F){let X=n.get(E);x!==void 0&&rt(X.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Kt(E)}function Ot(E){let x=E.texture,F=n.get(E),X=n.get(x);E.addEventListener("dispose",k),L(E);let U=E.textures,W=E.isWebGLCubeRenderTarget===!0,ee=U.length>1;if(ee||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=x.version,o.memory.textures++),W){F.__webglFramebuffer=[];for(let B=0;B<6;B++)if(x.mipmaps.length>0){F.__webglFramebuffer[B]=[];for(let V=0;V<x.mipmaps.length;V++)F.__webglFramebuffer[B][V]=i.createFramebuffer()}else F.__webglFramebuffer[B]=i.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let B=0;B<x.mipmaps.length;B++)F.__webglFramebuffer[B]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ee)for(let B=0,V=U.length;B<V;B++){let re=n.get(U[B]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&ce(E)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let B=0;B<U.length;B++){let V=U[B];F.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[B]);let re=r.convert(V.format,V.colorSpace),P=r.convert(V.type),Q=T(V.internalFormat,re,P,V.normalized,V.colorSpace,E.isXRRenderTarget===!0),K=lt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,F.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),$e(i.TEXTURE_CUBE_MAP,x);for(let B=0;B<6;B++)if(x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)rt(F.__webglFramebuffer[B][V],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,V);else rt(F.__webglFramebuffer[B],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);A(x)?M(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(ee){for(let B=0,V=U.length;B<V;B++){let re=U[B],P=n.get(re),Q=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),$e(Q,re),rt(F.__webglFramebuffer,E,re,i.COLOR_ATTACHMENT0+B,Q,0),A(re)&&M(Q)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(B=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,X.__webglTexture),$e(B,x),x.mipmaps.length>0)for(let V=0;V<x.mipmaps.length;V++)rt(F.__webglFramebuffer[V],E,x,i.COLOR_ATTACHMENT0,B,V);else rt(F.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,B,0);A(x)?M(B):x.mipmaps.length>0&&i.texParameteri(B,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&Kt(E)}function O(E){let x=E.textures;for(let F=0,X=x.length;F<X;F++){let U=x[F];if(A(U)&&U.mipmapsAutoUpdate===!0){let W=w(E),ee=n.get(U).__webglTexture;t.bindTexture(W,ee),M(W),t.unbindTexture()}}}let zt=[];function at(E){if(E.samples>0){if(ce(E)===!1){let x=E.textures,F=E.width,X=E.height,U=i.COLOR_BUFFER_BIT,W=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=n.get(E),B=x.length>1;if(B)for(let re=0;re<x.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let re=0;re<x.length;re++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(U|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(U|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ee.__webglColorRenderbuffer[re]);let P=n.get(x[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,U,i.NEAREST),l===!0&&(zt.length=0,zt.push(i.COLOR_ATTACHMENT0+re),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&zt.push(W),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let re=0;re<x.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,ee.__webglColorRenderbuffer[re]);let P=n.get(x[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,P,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function lt(E){return Math.min(s.maxSamples,E.samples)}function ce(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function mt(E){let x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function be(E,x){let F=E.colorSpace,X=E.format,U=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Gs&&F!==ri&&(Ze.getTransfer(F)===nt?(X!==Pn||U!==on)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",F)),x}function Ce(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Pe,this.resetTextureUnits=te,this.getTextureUnits=ne,this.setTextureUnits=pe,this.setTexture2D=de,this.setTexture2DArray=xe,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=sn,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ce,this.dispose=H}function m_(i,e){function t(n,s=ri){let r,o=Ze.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===ql)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===Pn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===si)return i.DEPTH_STENCIL;if(n===Go)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===_r)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===Jo||n===Ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Qo||n===jo||n===ea||n===ta||n===xr||n===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Qo)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jo)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ea)return r.COMPRESSED_R11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xr)return r.COMPRESSED_RG11_EAC;if(n===na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===xa||n===ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===ba||n===yr||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var g_=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ir(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Fn({vertexShader:g_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,m=null,_=null,b=typeof XRWebGLBinding!="undefined",f=new vc,p={},S=t.getContextAttributes(),A=null,M=null,w=[],T=[],g=new Xe,v=null,L=null,C=new Tt;C.viewport=new pt;let D=new Tt;D.viewport=new pt;let k=[C,D],q=new Uo,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let de=w[j];return de===void 0&&(de=new fs,w[j]=de),de.getTargetRaySpace()},this.getControllerGrip=function(j){let de=w[j];return de===void 0&&(de=new fs,w[j]=de),de.getGripSpace()},this.getHand=function(j){let de=w[j];return de===void 0&&(de=new fs,w[j]=de),de.getHandSpace()};function $(j){let de=T.indexOf(j.inputSource);if(de===-1)return;let xe=w[de];xe!==void 0&&(xe.update(j.inputSource,j.frame,c||o),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",se);for(let j=0;j<w.length;j++){let de=T[j];de!==null&&(T[j]=null,w[j].disconnect(de))}I=null,H=null,f.reset();for(let j in p)delete p[j];if(e.setRenderTarget(A),m=null,u=null,d=null,s=null,M=null,Pe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(g.width,g.height,!1),L!==null){let j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",se),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(g),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Ae=null,me=null;S.depth&&(me=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=S.stencil?si:Qn,Ae=S.stencil?Bi:Rn);let Oe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new hn(u.textureWidth,u.textureHeight,{format:Pn,type:on,depthTexture:new ti(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let xe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new hn(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Pe.setContext(s),Pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function se(j){for(let de=0;de<j.removed.length;de++){let xe=j.removed[de],Ae=T.indexOf(xe);Ae>=0&&(T[Ae]=null,w[Ae].disconnect(xe))}for(let de=0;de<j.added.length;de++){let xe=j.added[de],Ae=T.indexOf(xe);if(Ae===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=T.length){T.push(xe),Ae=Oe;break}else if(T[Oe]===null){T[Oe]=xe,Ae=Oe;break}if(Ae===-1)break}let me=w[Ae];me&&me.connect(xe)}}function J(j,de){de===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(de.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let de=j.near,xe=j.far;f.texture!==null&&(f.depthNear>0&&(de=f.depthNear),f.depthFar>0&&(xe=f.depthFar)),q.near=D.near=C.near=de,q.far=D.far=C.far=xe,(I!==q.near||H!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),I=q.near,H=q.far),q.layers.mask=j.layers.mask|6,C.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let Ae=j.parent,me=q.cameras;J(q,Ae);for(let Oe=0;Oe<me.length;Oe++)J(me[Oe],Ae);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),te(j,q,Ae)};function te(j,de,xe){xe===null?j.matrix.copy(de.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(de.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(de.projectionMatrix),j.projectionMatrixInverse.copy(de.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=qs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(q)},this.getCameraTexture=function(j){return p[j]};let ne=null;function pe(j,de){if(h=de.getViewerPose(c||o),_=de,h!==null){let xe=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Ae=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,Ae=!0);for(let Re=0;Re<xe.length;Re++){let $e=xe[Re],We=null;if(m!==null)We=m.getViewport($e);else{let yt=d.getViewSubImage(u,$e);We=yt.viewport,Re===0&&(e.setRenderTargetTextures(M,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(M))}let De=k[Re];De===void 0&&(De=new Tt,De.layers.enable(Re),De.viewport=new pt,k[Re]=De),De.matrix.fromArray($e.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray($e.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(We.x,We.y,We.width,We.height),Re===0&&(q.matrix.copy(De.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ae===!0&&q.cameras.push(De)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let Re=d.getDepthInformation(xe[0]);Re&&Re.isValid&&Re.texture&&f.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&b){e.state.unbindTexture(),d=n.getBinding();for(let Re=0;Re<xe.length;Re++){let $e=xe[Re].camera;if($e){let We=p[$e];We||(We=new ir,p[$e]=We);let De=d.getCameraImage($e);We.sourceTexture=De}}}}for(let xe=0;xe<w.length;xe++){let Ae=T[xe],me=w[xe];Ae!==null&&me!==void 0&&me.update(Ae,de,c||o)}ne&&ne(j,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),_=null}let Pe=new Bu;Pe.setAnimationLoop(pe),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}},x_=new it,Ju=new Ue;Ju.set(-1,0,0,0,1,0,0,0,1);function y_(i,e){function t(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,ic(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,S,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(f,p):p.isMeshLambertMaterial?(r(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(f,p),d(f,p)):p.isMeshPhongMaterial?(r(f,p),h(f,p),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(f,p),u(f,p),p.isMeshPhysicalMaterial&&m(f,p,M)):p.isMeshMatcapMaterial?(r(f,p),_(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),b(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(o(f,p),p.isLineDashedMaterial&&a(f,p)):p.isPointsMaterial?l(f,p,S,A):p.isSpriteMaterial?c(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,t(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===tn&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,t(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===tn&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,t(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,t(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);let S=e.get(p),A=S.envMap,M=S.envMapRotation;A&&(f.envMap.value=A,f.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.envMapRotation.value.premultiply(Ju),f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,f.aoMapTransform))}function o(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform))}function a(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function l(f,p,S,A){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=A*.5,p.map&&(f.map.value=p.map,t(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function c(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,t(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,t(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function h(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function d(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function u(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,S){f.ior.value=p.ior,p.diffuseRoughness>0&&(f.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(f.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,f.diffuseRoughnessMapTransform))),p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.retroreflectivity>0&&(f.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,f.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,p){p.matcap&&(f.matcap.value=p.matcap)}function b(f,p){let S=e.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function v_(i,e,t,n){let s={},r={};function o(S,A){let M=A.program;n.uniformBlockBinding(S,M,s[S.id])}function a(S,A){let M=s[S.id];M===void 0&&(_(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",f));let w=A.program;n.updateUBOMapping(S,w);let T=e.render.frame;r[S.id]!==T&&(c(S),r[S.id]=T)}function l(S){let A=i.createBuffer(),M=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(S){let A=s[S.id],M=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let T=0,g=M.length;T<g;T++){let v=M[T];if(Array.isArray(v))for(let L=0,C=v.length;L<C;L++)h(v[L],T,L,w);else h(v,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,A,M,w){if(u(S,A,M,w)===!0){let T=S.__offset,g=S.value;if(Array.isArray(g)){let v=0;for(let L=0;L<g.length;L++){let C=g[L],D=b(C,!0);d(C,S.__data,v),v+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,S.__data)}}function d(S,A,M){typeof S=="number"||typeof S=="boolean"?A[M]=S:S.isMatrix3?(A[M]=S.elements[0],A[M+1]=S.elements[1],A[M+2]=S.elements[2],A[M+3]=0,A[M+4]=S.elements[3],A[M+5]=S.elements[4],A[M+6]=S.elements[5],A[M+7]=0,A[M+8]=S.elements[6],A[M+9]=S.elements[7],A[M+10]=S.elements[8],A[M+11]=0):ArrayBuffer.isView(S)?A.set(S.subarray(0,A.length-M),M):S.toArray(A,M)}function u(S,A,M,w){let T=S.value,g=A+"_"+M;if(Array.isArray(T)){w[g]===void 0&&(w[g]=[]);let v=w[g],L=!1;for(let C=0;C<T.length;C++)m(T[C],v,C)===!0&&(L=!0);return L}return m(T,w,g)}function m(S,A,M){if(A[M]===void 0)return typeof S=="number"||typeof S=="boolean"?A[M]=S:ArrayBuffer.isView(S)?A[M]=S.slice():A[M]=S.clone(),!0;{let w=A[M];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return A[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function _(S){let A=S.uniforms,M=0,w=16;for(let g=0,v=A.length;g<v;g++){let L=Array.isArray(A[g])?A[g]:[A[g]];for(let C=0,D=L.length;C<D;C++){let k=L[C],q=Array.isArray(k.value)?k.value:[k.value],I=Array.isArray(A[g])||Array.isArray(k.value),H=M;for(let Y=0,se=q.length;Y<se;Y++){let J=q[Y],te=b(J,I),ne=M%w,pe=ne%te.boundary,Pe=ne+pe;M+=pe,Pe!==0&&w-Pe<te.storage&&(M+=w-Pe),Y===0&&(H=M),M+=te.storage}let $=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new $((M-H)/Float32Array.BYTES_PER_ELEMENT),k.__offset=H}}let T=M%w;return T>0&&(M+=w-T),S.__size=M,S.__cache={},this}function b(S,A){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),A===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function f(S){let A=S.target;A.removeEventListener("dispose",f),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:o,update:a,dispose:p}}var b_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function S_(){return Hn===null&&(Hn=new $s(b_,16,16,bi,Cn),Hn.name="DFG_LUT",Hn.minFilter=Qt,Hn.magFilter=Qt,Hn.wrapS=Nn,Hn.wrapT=Nn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var Aa=class{constructor(e={}){let{canvas:t=cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:m=on}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let b=m,f=new Set([qo,Xo,Wo]),p=new Set([on,Rn,Ms,Bi,zo,Vo]),S=new Uint32Array(4),A=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,g=[],v=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,k=null,q=null,I=null,H=null;this._outputColorSpace=Bt;let $=0,Y=0,se=null,J=-1,te=null,ne=new pt,pe=new pt,Pe=null,j=new He(0),de=0,xe=t.width,Ae=t.height,me=1,Oe=null,_t=null,Re=new pt(0,0,xe,Ae),$e=new pt(0,0,xe,Ae),We=!1,De=new gi,yt=new bo,xt=!1,Ut=!1,rt=new it,Ht=new R,ft=new pt,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},sn=!1;function Ot(){return se===null?me:1}let O=n;function zt(y,N){return t.getContext(y,N)}let at,lt,ce,mt,be,Ce,E,x,F,X,U,W,ee,B,V,re,P,Q,K,le,ie,ae,ye;try{let y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",fe,!1),O===null){let N="webgl2";if(O=zt(N,y),O===null)throw zt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(y){throw t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ne("WebGLRenderer: "+y.message),y}function Ie(){at=new Ng(O),at.init(),ie=new m_(O,at),lt=new Sg(O,at,e,ie),ce=new f_(O,at),lt.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),q=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),mt=new Og(O),be=new j0,Ce=new p_(O,at,ce,be,lt,ie,mt),E=new Lg(C),x=new kf(O),ae=new vg(O,x),F=new Dg(O,x,mt,ae),X=new kg(O,F,x,ae,mt),Q=new Fg(O,lt,Ce),V=new Mg(be),U=new Q0(C,E,at,lt,ae,V),W=new y_(C,be),ee=new t_,B=new a_(at),P=new yg(C,E,ce,X,_,l),re=new d_(C,X,lt),ye=new v_(O,mt,lt,ce),K=new bg(O,at,mt),le=new Ug(O,at,mt),mt.programs=U.programs,C.capabilities=lt,C.extensions=at,C.properties=be,C.renderLists=ee,C.shadowMap=re,C.state=ce,C.info=mt}b!==on&&(L=new Hg(b,t.width,t.height,a,s,r));let oe=new bc(C,O);this.xr=oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(xe,Ae,!1))},this.getSize=function(y){return y.set(xe,Ae)},this.setSize=function(y,N,Z=!0){if(oe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=y,Ae=N,t.width=Math.floor(y*me),t.height=Math.floor(N*me),Z===!0&&(t.style.width=y+"px",t.style.height=N+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(xe*me,Ae*me).floor()},this.setDrawingBufferSize=function(y,N,Z){xe=y,Ae=N,me=Z,t.width=Math.floor(y*Z),t.height=Math.floor(N*Z),this.setViewport(0,0,y,N)},this.setEffects=function(y){if(b===on){Ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let N=0;N<y.length;N++)if(y[N].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,N,Z,z){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,N,Z,z),ce.viewport(ne.copy(Re).multiplyScalar(Ot()).round())},this.getScissor=function(y){return y.copy($e)},this.setScissor=function(y,N,Z,z){y.isVector4?$e.set(y.x,y.y,y.z,y.w):$e.set(y,N,Z,z),ce.scissor(pe.copy($e).multiplyScalar(Ot()).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(y){ce.setScissorTest(We=y)},this.setOpaqueSort=function(y){Oe=y},this.setTransparentSort=function(y){_t=y},this.getClearColor=function(y){return y.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,Z=!0){let z=0;if(y){let G=!1;if(se!==null){let ue=se.texture.format;G=f.has(ue)}if(G){let ue=se.texture.type,ve=p.has(ue),he=P.getClearColor(),_e=P.getClearAlpha(),Te=he.r,ke=he.g,qe=he.b;ve?(S[0]=Te,S[1]=ke,S[2]=qe,S[3]=_e,O.clearBufferuiv(O.COLOR,0,S)):(A[0]=Te,A[1]=ke,A[2]=qe,A[3]=_e,O.clearBufferiv(O.COLOR,0,A))}else z|=O.COLOR_BUFFER_BIT}N&&(z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),k=y},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),P.dispose(),ee.dispose(),B.dispose(),Ce.dispose(),be.dispose(),E.dispose(),X.dispose(),F.dispose(),ae.dispose(),ye.dispose(),U.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ls),oe.removeEventListener("sessionend",Gc),wi.stop()};function we(y){y.preventDefault(),tc("WebGLRenderer: Context Lost."),D=!0}function Be(){tc("WebGLRenderer: Context Restored."),D=!1;let y=mt.autoReset,N=re.enabled,Z=re.autoUpdate,z=re.needsUpdate,G=re.type;Ie(),mt.autoReset=y,re.enabled=N,re.autoUpdate=Z,re.needsUpdate=z,re.type=G}function fe(y){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function je(y){let N=y.target;N.removeEventListener("dispose",je),vt(N)}function vt(y){vn(y),be.remove(y)}function vn(y){let N=be.get(y).programs;N!==void 0&&(N.forEach(function(Z){U.releaseProgram(Z)}),y.isShaderMaterial&&U.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,Z,z,G,ue){N===null&&(N=Kt);let ve=G.isMesh&&G.matrixWorld.determinantAffine()<0,he=Wd(y,N,Z,z,G);ce.setMaterial(z,ve);let _e=Z.index,Te=1;if(z.wireframe===!0){if(_e=F.getWireframeAttribute(Z),_e===void 0)return;Te=2}let ke=Z.drawRange,qe=Z.attributes.position,Se=ke.start*Te,Ye=(ke.start+ke.count)*Te;ue!==null&&(Se=Math.max(Se,ue.start*Te),Ye=Math.min(Ye,(ue.start+ue.count)*Te)),_e!==null?(Se=Math.max(Se,0),Ye=Math.min(Ye,_e.count)):qe!=null&&(Se=Math.max(Se,0),Ye=Math.min(Ye,qe.count));let St=Ye-Se;if(St<0||St===1/0)return;ae.setup(G,z,he,Z,_e);let ct,ot=K;if(_e!==null&&(ct=x.get(_e),ot=le,ot.setIndex(ct)),G.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*Ot()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(G.isLine){let Vt=z.linewidth;Vt===void 0&&(Vt=1),ce.setLineWidth(Vt*Ot()),G.isLineSegments?ot.setMode(O.LINES):G.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else G.isPoints?ot.setMode(O.POINTS):G.isSprite&&ot.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(at.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Vt=G._multiDrawStarts,Me=G._multiDrawCounts,$t=G._multiDrawCount,tt=_e?x.get(_e).bytesPerElement:1,Ai=be.get(z).currentProgram.getUniforms();for(let Gt=0;Gt<$t;Gt++)Ai.setValue(O,"_gl_DrawID",Gt),ot.render(Vt[Gt]/tt,Me[Gt])}else if(G.isInstancedMesh)ot.renderInstances(Se,St,G.count);else if(Z.isInstancedBufferGeometry){let Vt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Me=Math.min(Z.instanceCount,Vt);ot.renderInstances(Se,St,Me)}else ot.render(Se,St)};function bn(y,N,Z,z){k!==null&&y.isNodeMaterial&&k.setObject(z,y),xt===!0&&V.setState(y,Z,!1),y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,Ns(y,N,z),y.side=vi,y.needsUpdate=!0,Ns(y,N,z),y.side=kn):Ns(y,N,z)}this.compile=function(y,N,Z=null){Z===null&&(Z=y),k!==null&&k.renderStart(y,N,Z),T=B.get(Z),T.init(N),v.push(T),Z.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),y!==Z&&y.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),k!==null&&k.updateLights(T.state.lightsArray),Ut=this.localClippingEnabled,xt=V.init(this.clippingPlanes,Ut),xt===!0&&V.setGlobalState(this.clippingPlanes,N),k!==null&&re.render(T.state.shadowsArray,Z,N);let z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ue=G.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let he=ue[ve];bn(he,Z,N,G),z.add(he)}else bn(ue,Z,N,G),z.add(ue)}),T=v.pop(),k!==null&&k.renderEnd(),z},this.compileAsync=function(y,N,Z=null){let z=this.compile(y,N,Z);return new Promise(G=>{function ue(){if(z.forEach(function(ve){let _e=be.get(ve).currentProgram;(_e===void 0||_e.isReady())&&z.delete(ve)}),z.size===0){G(y);return}setTimeout(ue,10)}at.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Gn=null;function Wn(y){Gn&&Gn(y)}function Ls(){wi.stop()}function Gc(){wi.start()}let wi=new Bu;wi.setAnimationLoop(Wn),typeof self!="undefined"&&wi.setContext(self),this.setAnimationLoop=function(y){Gn=y,oe.setAnimationLoop(y),y===null?wi.stop():wi.start()},oe.addEventListener("sessionstart",Ls),oe.addEventListener("sessionend",Gc),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(y,N);let Z=oe.enabled===!0&&oe.isPresenting===!0,z=L!==null&&(se===null||Z)&&L.begin(C,se);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,N,se),T=B.get(y,v.length),T.init(N),T.state.textureUnits=Ce.getTextureUnits(),v.push(T),rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?yt.setFromArrayCamera(N):De.setFromProjectionMatrix(rt,gn,N.reversedDepth),Ut=this.localClippingEnabled,xt=V.init(this.clippingPlanes,Ut),w=ee.get(y,g.length),w.init(),g.push(w),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){let ve=C.xr.getDepthSensingMesh();ve!==null&&$a(ve,N,-1/0,C.sortObjects)}$a(y,N,0,C.sortObjects),w.finish(),k!==null&&k.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Oe,_t),sn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,sn&&P.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),xt===!0&&V.beginShadows();let G=T.state.shadowsArray;if(re.render(G,y,N),xt===!0&&V.endShadows(),(z&&L.hasRenderPass())===!1){let ve=w.opaque,he=w.transmissive;if(T.setupLights(),N.isArrayCamera){let _e=N.cameras;if(he.length>0)for(let Te=0,ke=_e.length;Te<ke;Te++){let qe=_e[Te];Xc(ve,he,y,qe)}sn&&P.render(y);for(let Te=0,ke=_e.length;Te<ke;Te++){let qe=_e[Te];Wc(w,y,qe,qe.viewport)}}else he.length>0&&Xc(ve,he,y,N),sn&&P.render(y),Wc(w,y,N)}se!==null&&Y===0&&(Ce.updateMultisampleRenderTarget(se),Ce.updateRenderTargetMipmap(se)),z&&L.end(C),y.isScene===!0&&y.onAfterRender(C,y,N),ae.resetDefaultState(),J=-1,te=null,v.pop(),v.length>0?(T=v[v.length-1],Ce.setTextureUnits(T.state.textureUnits),xt===!0&&V.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,k!==null&&k.renderEnd()};function $a(y,N,Z,z){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){let ve=N.isArrayCamera?yt:De;if(!y.frustumCulled||y.intersectsFrustum(ve)){z&&ft.setFromMatrixPosition(y.matrixWorld).applyMatrix4(rt);let he=X.update(y),_e=y.material;_e.visible&&w.push(y,he,_e,Z,ft.z,null,N)}}else if(y.isMesh||y.isLine||y.isPoints){let ve=N.isArrayCamera?yt:De;if(!y.frustumCulled||y.intersectsFrustum(ve)){let he=X.update(y),_e=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ft.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ft.copy(he.boundingSphere.center)),ft.applyMatrix4(y.matrixWorld).applyMatrix4(rt)),Array.isArray(_e)){let Te=he.groups;for(let ke=0,qe=Te.length;ke<qe;ke++){let Se=Te[ke],Ye=_e[Se.materialIndex];Ye&&Ye.visible&&w.push(y,he,Ye,Z,ft.z,Se,N)}}else _e.visible&&w.push(y,he,_e,Z,ft.z,null,N)}}}let ue=y.children;for(let ve=0,he=ue.length;ve<he;ve++)$a(ue[ve],N,Z,z)}function Wc(y,N,Z,z){let{opaque:G,transmissive:ue,transparent:ve}=y;T.setupLightsView(Z),xt===!0&&V.setGlobalState(C.clippingPlanes,Z),z&&ce.viewport(ne.copy(z)),G.length>0&&Ur(G,N,Z),ue.length>0&&Ur(ue,N,Z),ve.length>0&&Ur(ve,N,Z),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Xc(y,N,Z,z){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){let Se=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new hn(1,1,{generateMipmaps:!0,type:Se?Cn:on,minFilter:ii,samples:Math.max(4,lt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ue=T.state.transmissionRenderTarget[z.id],ve=z.viewport||ne;ue.setSize(ve.z*C.transmissionResolutionScale,ve.w*C.transmissionResolutionScale);let he=C.getRenderTarget(),_e=C.getActiveCubeFace(),Te=C.getActiveMipmapLevel();C.setRenderTarget(ue),C.getClearColor(j),de=C.getClearAlpha(),de<1&&C.setClearColor(16777215,.5),C.clear(),sn&&P.render(Z);let ke=C.toneMapping;C.toneMapping=Bn;let qe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),xt===!0&&V.setGlobalState(C.clippingPlanes,z),Ur(y,Z,z),Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue),at.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Ye=0,St=N.length;Ye<St;Ye++){let ct=N[Ye],{object:ot,geometry:Vt,material:Me,group:$t}=ct;if(Me.side===kn&&ot.layers.test(z.layers)){let tt=Me.side;Me.side=tn,Me.needsUpdate=!0,qc(ot,Z,z,Vt,Me,$t),Me.side=tt,Me.needsUpdate=!0,Se=!0}}Se===!0&&(Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue))}C.setRenderTarget(he,_e,Te),C.setClearColor(j,de),qe!==void 0&&(z.viewport=qe),C.toneMapping=ke}function Ur(y,N,Z){let z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,ue=y.length;G<ue;G++){let ve=y[G],{object:he,geometry:_e,group:Te}=ve,ke=ve.material;ke.allowOverride===!0&&z!==null&&(ke=z),he.layers.test(Z.layers)&&qc(he,N,Z,_e,ke,Te)}}function qc(y,N,Z,z,G,ue){k!==null&&G.isNodeMaterial&&k.setObject(y,G),y.onBeforeRender(C,N,Z,z,G,ue),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(C,N,Z,z,y,ue),G.transparent===!0&&G.side===kn&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,C.renderBufferDirect(Z,N,z,G,y,ue),G.side=vi,G.needsUpdate=!0,C.renderBufferDirect(Z,N,z,G,y,ue),G.side=kn):C.renderBufferDirect(Z,N,z,G,y,ue),y.onAfterRender(C,N,Z,z,G,ue)}function Yc(y){let N=0;for(let Z of y)Z.texture!==null&&N++;return N}function Ns(y,N,Z){N.isScene!==!0&&(N=Kt);let z=be.get(y),G=T.state.lights,ue=T.state.shadowsArray,ve=G.state.version,he=U.getParameters(y,G.state,ue,N,Z,T.state.lightProbeGridArray),_e=U.getProgramCacheKey(he),Te=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,z.fog=N.fog;let ke=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=E.get(y.envMap||z.environment,ke),z.envMapRotation=z.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Te===void 0&&(y.addEventListener("dispose",je),Te=new Map,z.programs=Te,z.programVariants=new Map);let qe=Te.get(_e);if(qe!==void 0){if(z.currentProgram===qe&&z.lightsStateVersion===ve)return Jc(y,he),qe}else he.uniforms=U.getUniforms(y),k!==null&&y.isNodeMaterial&&k.build(y,Z,he),y.onBeforeCompile(he,C),qe=U.acquireProgram(he,_e),Te.set(_e,qe),z.uniforms=he.uniforms;let Se=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=V.uniform),Jc(y,he),z.needsLights=qd(y),z.lightsStateVersion=ve,z.needsLights&&(Se.ambientLightColor.value=G.state.ambient,Se.lightProbe.value=G.state.probe,Se.sunLights.value=G.state.sun,Se.sunLightShadows.value=G.state.sunShadow,Se.directionalLights.value=G.state.directional,Se.directionalLightShadows.value=G.state.directionalShadow,Se.spotLights.value=G.state.spot,Se.spotLightShadows.value=G.state.spotShadow,Se.rectAreaLights.value=G.state.rectArea,Se.ltc_1.value=G.state.rectAreaLTC1,Se.ltc_2.value=G.state.rectAreaLTC2,Se.pointLights.value=G.state.point,Se.pointLightShadows.value=G.state.pointShadow,Se.hemisphereLights.value=G.state.hemi,Se.sunShadowMatrix.value=G.state.sunShadowMatrix,Se.sunShadowCascade.value=G.state.sunShadowCascade,Se.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Se.spotLightMatrix.value=G.state.spotLightMatrix,Se.spotLightMap.value=G.state.spotLightMap,Se.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Yc(T.state.lightProbeGridArray),z.currentProgram=qe,z.uniformsList=null,qe}function Gd(y,N,Z,z,G){let ue=be.get(y),ve=ue.currentProgram.id+","+z+","+G,he=ue.programVariants.get(ve);return he===void 0?(he=Ns(y,N,Z),ue.programVariants.set(ve,he)):(ue.currentProgram=he,ue.uniformsList=null,ue.outputColorSpace=z,ue.toneMapping=G),he}function Zc(y){if(y.uniformsList===null){let N=y.currentProgram.getUniforms();y.uniformsList=Es.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Jc(y,N){let Z=be.get(y);Z.outputColorSpace=N.outputColorSpace,Z.batching=N.batching,Z.batchingColor=N.batchingColor,Z.instancing=N.instancing,Z.instancingColor=N.instancingColor,Z.instancingMorph=N.instancingMorph,Z.skinning=N.skinning,Z.morphTargets=N.morphTargets,Z.morphNormals=N.morphNormals,Z.morphColors=N.morphColors,Z.morphTargetsCount=N.morphTargetsCount,Z.numClippingPlanes=N.numClippingPlanes,Z.numIntersection=N.numClipIntersection,Z.vertexAlphas=N.vertexAlphas,Z.vertexTangents=N.vertexTangents,Z.toneMapping=N.toneMapping}function Wd(y,N,Z,z,G){N.isScene!==!0&&(N=Kt),Ce.resetTextureUnits();let ue=N.fog,ve=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?N.environment:null,he=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ze.workingColorSpace,_e=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Te=E.get(z.envMap||ve,_e),ke=z.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,qe=!!Z.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Se=!!Z.morphAttributes.position,Ye=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color,ct=Bn;z.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ct=C.toneMapping);let ot=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Vt=ot!==void 0?ot.length:0,Me=be.get(z),$t=T.state.lights;if(xt===!0&&(Ut===!0||y!==te)){let gt=y===te&&z.id===J;V.setState(z,y,gt)}let tt=!1,Ai=!1;z.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==$t.state.version||G.isBatchedMesh&&Me.batching===!1||!G.isBatchedMesh&&Me.batching===!0||G.isBatchedMesh&&Me.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Me.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Me.instancing===!1||!G.isInstancedMesh&&Me.instancing===!0||G.isSkinnedMesh&&Me.skinning===!1||!G.isSkinnedMesh&&Me.skinning===!0||G.isInstancedMesh&&Me.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Me.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Me.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Me.instancingMorph===!1&&G.morphTexture!==null||Me.envMap!==Te||z.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==V.numPlanes||Me.numIntersection!==V.numIntersection)||Me.vertexAlphas!==ke||Me.vertexTangents!==qe||Me.morphTargets!==Se||Me.morphNormals!==Ye||Me.morphColors!==St||Me.morphTargetsCount!==Vt||Me.numLightProbeGrids!==Yc(T.state.lightProbeGridArray)?tt=!0:(Me.outputColorSpace!==he||Me.toneMapping!==ct)&&(Ai=!0):(tt=!0,Me.__version=z.version);let Gt=Me.currentProgram;(tt===!0||Ai===!0)&&(Gt=Ai===!0?Gd(z,N,G,he,ct):Ns(z,N,G),k&&z.isNodeMaterial&&k.onUpdateProgram(z,Gt,Me));let Or=!1,ci=!1,Ri=!1,Qe=Gt.getUniforms(),Ft=Me.uniforms;if(ce.useProgram(Gt.program)&&(Or=!0,ci=!0,Ri=!0),z.id!==J&&(J=z.id,ci=!0),Or||te!==y){ce.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Qe.setValue(O,"projectionMatrix",y.projectionMatrix),Qe.setValue(O,"viewMatrix",y.matrixWorldInverse);let It=Qe.map.cameraPosition;It!==void 0&&It.setValue(O,Ht.setFromMatrixPosition(y.matrixWorld)),lt.logarithmicDepthBuffer&&Qe.setValue(O,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Qe.setValue(O,"isOrthographic",y.isOrthographicCamera===!0),te!==y&&(te=y,ci=!0,Ri=!0)}if(Me.needsLights&&($t.state.sunShadowMap.length>0&&Qe.setValue(O,"sunShadowMap",$t.state.sunShadowMap,Ce),$t.state.directionalShadowMap.length>0&&Qe.setValue(O,"directionalShadowMap",$t.state.directionalShadowMap,Ce),$t.state.spotShadowMap.length>0&&Qe.setValue(O,"spotShadowMap",$t.state.spotShadowMap,Ce),$t.state.pointShadowMap.length>0&&Qe.setValue(O,"pointShadowMap",$t.state.pointShadowMap,Ce)),G.isSkinnedMesh){Qe.setOptional(O,G,"bindMatrix"),Qe.setOptional(O,G,"bindMatrixInverse");let gt=G.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),Qe.setValue(O,"boneTexture",gt.boneTexture,Ce))}G.isBatchedMesh&&(Qe.setOptional(O,G,"batchingTexture"),Qe.setValue(O,"batchingTexture",G._matricesTexture,Ce),Qe.setOptional(O,G,"batchingIdTexture"),Qe.setValue(O,"batchingIdTexture",G._indirectTexture,Ce),Qe.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Qe.setValue(O,"batchingColorTexture",G._colorsTexture,Ce));let Sn=Z.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Q.update(G,Z,Gt),(ci||Me.receiveShadow!==G.receiveShadow)&&(Me.receiveShadow=G.receiveShadow,Qe.setValue(O,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&N.environment!==null&&(Ft.envMapIntensity.value=N.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=S_()),ci){if(Qe.setValue(O,"toneMappingExposure",C.toneMappingExposure),Me.needsLights&&Xd(Ft,Ri),ue&&z.fog===!0&&W.refreshFogUniforms(Ft,ue),W.refreshMaterialUniforms(Ft,z,me,Ae,T.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){let gt=M,It=0;for(let Xn of T.state.lightProbeGridArray)Xn.texture!==null&&(gt.textures[It]=Xn.texture,gt.min[It]=Xn.boundingBox.min,gt.max[It]=Xn.boundingBox.max,gt.resolution[It]=Xn.resolution,It++);for(let Xn in gt)gt[Xn].length=It;Ft.probesSH.value=gt.textures,Ft.probesMin.value=gt.min,Ft.probesMax.value=gt.max,Ft.probesResolution.value=gt.resolution}Es.upload(O,Zc(Me),Ft,Ce)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Es.upload(O,Zc(Me),Ft,Ce),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Qe.setValue(O,"center",G.center),Qe.setValue(O,"modelViewMatrix",G.modelViewMatrix),Qe.setValue(O,"normalMatrix",G.normalMatrix),Qe.setValue(O,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){let gt=z.uniformsGroups;for(let It=0,Xn=gt.length;It<Xn;It++){let $c=gt[It];ye.update($c,Gt),ye.bind($c,Gt)}}return Gt}function Xd(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.sunLights.needsUpdate=N,y.sunLightShadows.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function qd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(y,N,Z){let z=be.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),be.get(y.texture).__webglTexture=N,be.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:Z,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){let Z=be.get(y);Z.__webglFramebuffer=N,Z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(y,N=0,Z=0){se=y,$=N,Y=Z;let z=null,G=!1,ue=!1;if(y){let he=be.get(y);if(he.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(O.FRAMEBUFFER,he.__webglFramebuffer),ne.copy(y.viewport),pe.copy(y.scissor),Pe=y.scissorTest,ce.viewport(ne),ce.scissor(pe),ce.setScissorTest(Pe),J=-1;return}else if(he.__webglFramebuffer===void 0)Ce.setupRenderTarget(y);else if(he.__hasExternalTextures)Ce.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let ke=y.depthTexture;if(he.__boundDepthTexture!==ke){if(ke!==null&&be.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(y)}}let _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(ue=!0);let Te=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?z=Te[N][Z]:z=Te[N],G=!0):y.samples>0&&Ce.useMultisampledRTT(y)===!1?z=be.get(y).__webglMultisampledFramebuffer:Array.isArray(Te)?z=Te[Z]:z=Te,ne.copy(y.viewport),pe.copy(y.scissor),Pe=y.scissorTest}else ne.copy(Re).multiplyScalar(me).floor(),pe.copy($e).multiplyScalar(me).floor(),Pe=We;if(Z!==0&&(z=q),ce.bindFramebuffer(O.FRAMEBUFFER,z)&&ce.drawBuffers(y,z),ce.viewport(ne),ce.scissor(pe),ce.setScissorTest(Pe),G){let he=be.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,he.__webglTexture,Z)}else if(ue){let he=N;for(let _e=0;_e<y.textures.length;_e++){let Te=be.get(y.textures[_e]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+_e,Te.__webglTexture,Z,he)}}else if(y!==null&&Z!==0){let he=be.get(y.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,he.__webglTexture,Z)}J=-1};function Kc(y){let N=be.get(y);return(N.__readFormat!==y.format||N.__readType!==y.type)&&(N.__readFormat=y.format,N.__readType=y.type,N.__formatReadable=lt.textureFormatReadable(y.format),N.__typeReadable=lt.textureTypeReadable(y.type)),N}this.readRenderTargetPixels=function(y,N,Z,z,G,ue,ve,he=0){if(!(y&&y.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve],Array.isArray(_e)&&(_e=_e[0])),_e){ce.bindFramebuffer(O.FRAMEBUFFER,_e);try{let Te=y.textures[he],ke=Te.format,qe=Te.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he);let Se=Kc(Te);if(Se.__formatReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-z&&Z>=0&&Z<=y.height-G&&O.readPixels(N,Z,z,G,ie.convert(ke),ie.convert(qe),ue)}finally{let Te=se!==null?be.get(se).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(y,N,Z,z,G,ue,ve,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ve!==void 0&&(_e=_e[ve],Array.isArray(_e)&&(_e=_e[0])),_e)if(N>=0&&N<=y.width-z&&Z>=0&&Z<=y.height-G){ce.bindFramebuffer(O.FRAMEBUFFER,_e);let Te=y.textures[he],ke=Te.format,qe=Te.type;y.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+he);let Se=Kc(Te);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.bufferData(O.PIXEL_PACK_BUFFER,ue.byteLength,O.STREAM_READ),O.readPixels(N,Z,z,G,ie.convert(ke),ie.convert(qe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let St=se!==null?be.get(se).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,St);let ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await uu(O,ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ue),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Ye),O.deleteSync(ct),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,Z=0){let z=Math.pow(2,-Z),G=Math.floor(y.image.width*z),ue=Math.floor(y.image.height*z),ve=N!==null?N.x:0,he=N!==null?N.y:0;Ce.setTexture2D(y,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,ve,he,G,ue),ce.unbindTexture()},this.copyTextureToTexture=function(y,N,Z=null,z=null,G=0,ue=0){let ve,he,_e,Te,ke,qe,Se,Ye,St,ct=y.isCompressedTexture?y.mipmaps[ue]:y.image;if(Z!==null)ve=Z.max.x-Z.min.x,he=Z.max.y-Z.min.y,_e=Z.isBox3?Z.max.z-Z.min.z:1,Te=Z.min.x,ke=Z.min.y,qe=Z.isBox3?Z.min.z:0;else{let Qe=Math.pow(2,-G);ve=Math.floor(ct.width*Qe),he=Math.floor(ct.height*Qe),y.isDataArrayTexture?_e=ct.depth:y.isData3DTexture?_e=Math.floor(ct.depth*Qe):_e=1,Te=0,ke=0,qe=0}z!==null?(Se=z.x,Ye=z.y,St=z.z):(Se=0,Ye=0,St=0);let ot=ie.convert(N.format),Vt=ie.convert(N.type),Me;N.isData3DTexture?(Ce.setTexture3D(N,0),Me=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Ce.setTexture2DArray(N,0),Me=O.TEXTURE_2D_ARRAY):(Ce.setTexture2D(N,0),Me=O.TEXTURE_2D),ce.activeTexture(O.TEXTURE0),ce.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),ce.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),ce.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let $t=ce.getParameter(O.UNPACK_ROW_LENGTH),tt=ce.getParameter(O.UNPACK_IMAGE_HEIGHT),Ai=ce.getParameter(O.UNPACK_SKIP_PIXELS),Gt=ce.getParameter(O.UNPACK_SKIP_ROWS),Or=ce.getParameter(O.UNPACK_SKIP_IMAGES);ce.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),ce.pixelStorei(O.UNPACK_SKIP_PIXELS,Te),ce.pixelStorei(O.UNPACK_SKIP_ROWS,ke),ce.pixelStorei(O.UNPACK_SKIP_IMAGES,qe);let ci=y.isDataArrayTexture||y.isData3DTexture,Ri=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){let Qe=be.get(y),Ft=be.get(N),Sn=be.get(Qe.__renderTarget),gt=be.get(Ft.__renderTarget);ce.bindFramebuffer(O.READ_FRAMEBUFFER,Sn.__webglFramebuffer),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let It=0;It<_e;It++)ci&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(y).__webglTexture,G,qe+It),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.get(N).__webglTexture,ue,St+It)),O.blitFramebuffer(Te,ke,Te+ve,ke+he,Se,Ye,Se+ve,Ye+he,O.DEPTH_BUFFER_BIT,O.NEAREST);ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||be.has(y)){let Qe=be.get(y),Ft=be.get(N);ce.bindFramebuffer(O.READ_FRAMEBUFFER,I),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let Sn=0;Sn<_e;Sn++)ci?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Qe.__webglTexture,G,qe+Sn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Qe.__webglTexture,G),Ri?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,ue,St+Sn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,ue),G!==0?O.blitFramebuffer(Te,ke,Te+ve,ke+he,Se,Ye,Se+ve,Ye+he,O.COLOR_BUFFER_BIT,O.NEAREST):Ri?O.copyTexSubImage3D(Me,ue,Se,Ye,St+Sn,Te,ke,ve,he):O.copyTexSubImage2D(Me,ue,Se,Ye,Te,ke,ve,he);ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ri?y.isDataTexture||y.isData3DTexture?O.texSubImage3D(Me,ue,Se,Ye,St,ve,he,_e,ot,Vt,ct.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Me,ue,Se,Ye,St,ve,he,_e,ot,ct.data):O.texSubImage3D(Me,ue,Se,Ye,St,ve,he,_e,ot,Vt,ct):y.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ue,Se,Ye,ve,he,ot,Vt,ct.data):y.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ue,Se,Ye,ct.width,ct.height,ot,ct.data):O.texSubImage2D(O.TEXTURE_2D,ue,Se,Ye,ve,he,ot,Vt,ct);ce.pixelStorei(O.UNPACK_ROW_LENGTH,$t),ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),ce.pixelStorei(O.UNPACK_SKIP_PIXELS,Ai),ce.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),ce.pixelStorei(O.UNPACK_SKIP_IMAGES,Or),ue===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&O.generateMipmap(Me),ce.unbindTexture()},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&Ce.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ce.setTextureCube(y,0):y.isData3DTexture?Ce.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ce.setTexture2DArray(y,0):Ce.setTexture2D(y,0),ce.unbindTexture()},this.resetState=function(){$=0,Y=0,se=null,ce.reset(),ae.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var et=(i,e,t)=>Math.min(t,Math.max(e,i));function Vi(i){let e=i>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ju="hv_settings_v1";function Ku(){let i=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,e=window.HV_CONFIG||{};return{quality:i?"medium":"high",sensitivity:1,invertY:!1,volume:.8,camMode:"third",serverUrl:e.serverUrl||"",showTouch:"auto",playerName:"Survivor"}}function ed(){try{let i=localStorage.getItem(ju);if(i)return kt(kt({},Ku()),JSON.parse(i))}catch(i){}return Ku()}function td(i){try{localStorage.setItem(ju,JSON.stringify(i))}catch(e){}}var Sc="hv_sp_v1";function nd(){try{let i=localStorage.getItem(Sc);if(i)return JSON.parse(i)}catch(i){}return null}function id(i){try{localStorage.setItem(Sc,JSON.stringify(i))}catch(e){}}function sd(){try{localStorage.removeItem(Sc)}catch(i){}}var $u=new Map;function fn(i,e,t,n,s=1){let r=document.createElement("canvas");r.width=r.height=i;let o=r.getContext("2d"),a=Vi(s);o.fillStyle=e,o.fillRect(0,0,i,i);for(let c=0;c<t.length;c++){o.fillStyle=t[c];for(let h=0;h<i*i*.02;h++){let d=a()*i,u=a()*i,m=1+a()*(i/32);o.globalAlpha=.12+a()*.22,o.beginPath(),o.arc(d,u,m,0,Math.PI*2),o.fill()}}o.globalAlpha=1;let l=o.getImageData(0,0,i,i);for(let c=0;c<l.data.length;c+=4){let h=(a()-.5)*n;l.data[c]=et(l.data[c]+h,0,255),l.data[c+1]=et(l.data[c+1]+h,0,255),l.data[c+2]=et(l.data[c+2]+h,0,255)}return o.putImageData(l,0,0),r}function Jt(i){let e=$u.get(i);if(e)return e;let t=256,n=fn(t,"#333",["#2a2a2a"],10,1),s=n.getContext("2d");switch(i){case"ground":n=fn(t,"#2b2a24",["#232420","#332f26","#1d1e19"],26,11);break;case"dirt":n=fn(t,"#3a3227",["#2e2820","#453a2c"],22,22);break;case"grass":n=fn(t,"#252e1c",["#1c2416","#2e3a22","#161c10"],30,33);break;case"plank":{n=fn(t,"#4a3a28",["#3c2f20","#55422e"],14,44),s.strokeStyle="rgba(20,14,8,0.9)";for(let o=0;o<t;o+=32)s.lineWidth=2,s.beginPath(),s.moveTo(0,o),s.lineTo(t,o),s.stroke(),s.lineWidth=1,s.beginPath(),s.moveTo(0,o+16+Math.random()*4),s.lineTo(t,o+14+Math.random()*6),s.stroke();break}case"plankdark":{n=fn(t,"#2e2618",["#241d12","#382e1e"],16,55),s.strokeStyle="rgba(10,8,4,0.9)";for(let o=0;o<t;o+=32)s.lineWidth=2,s.beginPath(),s.moveTo(0,o),s.lineTo(t,o),s.stroke();break}case"stone":{n=fn(t,"#4a4a48",["#3c3c3a","#565652","#323230"],20,66),s.strokeStyle="rgba(18,18,16,0.85)";for(let o=0;o<t;o+=42){s.lineWidth=2.5,s.beginPath(),s.moveTo(0,o),s.lineTo(t,o),s.stroke();let a=o/42%2===0?0:32;for(let l=a;l<t;l+=64)s.beginPath(),s.moveTo(l,o),s.lineTo(l,Math.min(t,o+42)),s.stroke()}break}case"roof":{n=fn(t,"#33262a",["#281d21","#3e2e33"],18,77),s.strokeStyle="rgba(12,8,10,0.9)";for(let o=0;o<t;o+=20)s.lineWidth=3,s.beginPath(),s.moveTo(0,o),s.lineTo(t,o),s.stroke();for(let o=0;o<t;o+=40)for(let a=o/40%2*20;a<t;a+=40)s.beginPath(),s.moveTo(a,o),s.lineTo(a,o+20),s.stroke();break}case"bark":{n=fn(t,"#2c231a",["#221b13","#382c1f"],30,88),s.strokeStyle="rgba(14,10,6,0.5)";for(let o=0;o<40;o++){let a=Math.random()*t;s.lineWidth=1+Math.random()*2,s.beginPath(),s.moveTo(a,0),s.bezierCurveTo(a+8,t/3,a-8,2*t/3,a+3,t),s.stroke()}break}case"cloth":n=fn(t,"#3a3630",["#302c26","#443f38"],24,99);break;case"metal":n=fn(t,"#3c4044",["#303438","#484c50"],12,111);break;case"curtain":n=fn(t,"#2a2028",["#221a20","#342832"],18,122);break;case"paper":n=fn(t,"#c9bfa4",["#bfb498","#d4cab0"],10,133);break}let r=new tr(n);return r.wrapS=r.wrapT=ls,r.colorSpace=Bt,r.anisotropy=4,$u.set(i,r),r}function Si(i,e,t){let n=i.clone();return n.needsUpdate=!0,n.repeat.set(e,t),n}var Pa=class{constructor(){this.ctx=null;this.master=null;this.windGain=null;this.droneOsc=null;this.droneGain=null;this.dissGain=null;this.growlGain=null;this.growlOsc=null;this.heartTimer=0;this.danger=0;this.volume=.8}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination),this.startAmbience()}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}noiseBuffer(e=2){let t=this.ctx,n=t.createBuffer(1,Math.max(1,Math.floor(t.sampleRate*e)),t.sampleRate),s=n.getChannelData(0),r=0;for(let o=0;o<s.length;o++){let a=Math.random()*2-1;r=(r+.02*a)/1.02,s[o]=r*3.2}return n}startAmbience(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.noiseBuffer(4),t.loop=!0;let n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=420,n.Q.value=.6,this.windGain=e.createGain(),this.windGain.gain.value=.14;let s=e.createOscillator();s.frequency.value=.09;let r=e.createGain();r.gain.value=.05,s.connect(r),r.connect(this.windGain.gain),t.connect(n),n.connect(this.windGain),this.windGain.connect(this.master),t.start(),s.start(),this.droneOsc=e.createOscillator(),this.droneOsc.type="sine",this.droneOsc.frequency.value=46;let o=e.createOscillator();o.type="sine",o.frequency.value=46.7,this.droneGain=e.createGain(),this.droneGain.gain.value=.05,this.dissGain=e.createGain(),this.dissGain.gain.value=0;let a=e.createOscillator();a.type="sawtooth",a.frequency.value=92;let l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=300,this.droneOsc.connect(this.droneGain),o.connect(this.droneGain),this.droneGain.connect(this.master),a.connect(l),l.connect(this.dissGain),this.dissGain.connect(this.master),this.droneOsc.start(),o.start(),a.start(),this.growlOsc=e.createOscillator(),this.growlOsc.type="sawtooth",this.growlOsc.frequency.value=58;let c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=190;let h=e.createOscillator();h.frequency.value=5.2;let d=e.createGain();d.gain.value=14,h.connect(d),d.connect(this.growlOsc.frequency),this.growlGain=e.createGain(),this.growlGain.gain.value=0,this.growlOsc.connect(c),c.connect(this.growlGain),this.growlGain.connect(this.master),this.growlOsc.start(),h.start()}update(e){if(!this.ctx||!this.droneGain||!this.droneOsc||!this.dissGain)return;let t=this.ctx.currentTime;if(this.droneGain.gain.setTargetAtTime(.04+this.danger*.09,t,.4),this.droneOsc.frequency.setTargetAtTime(46+this.danger*10,t,.6),this.dissGain.gain.setTargetAtTime(this.danger*.045,t,.5),this.windGain&&this.windGain.gain.setTargetAtTime(.1+this.danger*.08,t,1.2),this.danger>.25&&(this.heartTimer-=e,this.heartTimer<=0)){let n=42+this.danger*78;this.heartTimer=60/n,this.thump(.5+this.danger*.5),setTimeout(()=>this.thump(.35+this.danger*.35),150)}}thump(e){let t=this.ctx;if(!t||!this.master)return;let n=t.createOscillator();n.type="sine",n.frequency.setValueAtTime(58,t.currentTime),n.frequency.exponentialRampToValueAtTime(30,t.currentTime+.12);let s=t.createGain();s.gain.setValueAtTime(e*.5,t.currentTime),s.gain.exponentialRampToValueAtTime(.001,t.currentTime+.22),n.connect(s),s.connect(this.master),n.start(),n.stop(t.currentTime+.25)}env(e,t,n,s=.005){let r=this.ctx,o=r.createGain();return o.gain.setValueAtTime(1e-4,r.currentTime),o.gain.linearRampToValueAtTime(t,r.currentTime+s),o.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+n),e.connect(o),o.connect(this.master),o}spatial(e,t,n,s){if(!e||!n)return[s,0];let r=n.x-e.x,o=n.z-e.z,a=Math.hypot(r,o),l=s*et(1-a/38,0,1)**1.4,c=Math.atan2(r,o)-t,h=et(Math.sin(c),-1,1)*et(1-a/40,0,1);return[l,h]}play3d(e,t,n,s,r=.5){let[o,a]=this.spatial(t,n,s,r);o<.004||this.play(e,o,a)}play(e,t=.5,n=0){let s=this.ctx;if(!s||!this.master)return;let r=s.createStereoPanner();r.pan.value=et(n,-1,1),r.connect(this.master);let o=s.currentTime;switch(e){case"step":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.1);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=240+Math.random()*160,l.Q.value=1.1,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.5,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.09),l.connect(c),c.connect(r),a.start(),a.stop(o+.1);break}case"shot":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.4);let l=s.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(3200,o),l.frequency.exponentialRampToValueAtTime(180,o+.28),a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.32),l.connect(c),c.connect(r);let h=s.createOscillator();h.type="triangle",h.frequency.setValueAtTime(110,o),h.frequency.exponentialRampToValueAtTime(38,o+.16);let d=s.createGain();d.gain.setValueAtTime(t*.9,o),d.gain.exponentialRampToValueAtTime(1e-4,o+.2),h.connect(d),d.connect(r),a.start(),a.stop(o+.4),h.start(),h.stop(o+.22);break}case"dry":{this.blip(r,1400,.04,t*.4,"square");break}case"reload":{this.blip(r,900,.05,t*.5,"square"),setTimeout(()=>this.blip(r,620,.06,t*.5,"square"),130),setTimeout(()=>this.blip(r,1100,.05,t*.6,"square"),300);break}case"knife":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.2);let l=s.createBiquadFilter();l.type="bandpass",l.Q.value=2.5,l.frequency.setValueAtTime(600,o),l.frequency.exponentialRampToValueAtTime(3600,o+.12),a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.7,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.15),l.connect(c),c.connect(r),a.start(),a.stop(o+.2);break}case"flesh":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.25);let l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=380,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.9,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.22),l.connect(c),c.connect(r),a.start(),a.stop(o+.25);break}case"pickup":{this.tone(r,520,.09,t*.35,"sine"),setTimeout(()=>this.tone(r,780,.12,t*.35,"sine"),80);break}case"paper":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.3);let l=s.createBiquadFilter();l.type="highpass",l.frequency.value=1800,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.35,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.28),l.connect(c),c.connect(r),a.start(),a.stop(o+.3);break}case"door":{let a=s.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(85,o),a.frequency.exponentialRampToValueAtTime(55,o+.7);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=300,l.Q.value=4,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.45,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.75),l.connect(c),c.connect(r),a.start(),a.stop(o+.8);break}case"brazier":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(1.2);let l=s.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(300,o),l.frequency.exponentialRampToValueAtTime(2400,o+.5),a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.8,o),c.gain.exponentialRampToValueAtTime(1e-4,o+1.1),l.connect(c),c.connect(r),a.start(),a.stop(o+1.2);break}case"click":{this.blip(r,2e3,.03,t*.3,"square");break}case"flash":{this.blip(r,2600,.025,t*.35,"square");break}case"scare":{for(let h=0;h<5;h++){let d=s.createOscillator();d.type="sawtooth";let u=620+h*47;d.frequency.setValueAtTime(u,o),d.frequency.linearRampToValueAtTime(u*1.9,o+.5);let m=s.createGain();m.gain.setValueAtTime(1e-4,o),m.gain.linearRampToValueAtTime(t*.16,o+.03),m.gain.exponentialRampToValueAtTime(1e-4,o+.55),d.connect(m),m.connect(r),d.start(),d.stop(o+.6)}let a=s.createBufferSource();a.buffer=this.noiseBuffer(.6);let l=s.createBiquadFilter();l.type="highpass",l.frequency.value=900,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.5,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.5),l.connect(c),c.connect(r),a.start(),a.stop(o+.6);break}case"scream":{let a=s.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(780,o),a.frequency.exponentialRampToValueAtTime(160,o+.9);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=700,l.Q.value=2,a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t*.55,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.95),l.connect(c),c.connect(r),a.start(),a.stop(o+1);break}case"whisper":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(1.4);let l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=1150,l.Q.value=6;let c=s.createOscillator();c.frequency.value=6.5;let h=s.createGain();h.gain.value=420,c.connect(h),h.connect(l.frequency),a.connect(l);let d=s.createGain();d.gain.setValueAtTime(1e-4,o),d.gain.linearRampToValueAtTime(t*.28,o+.4),d.gain.linearRampToValueAtTime(1e-4,o+1.3),l.connect(d),d.connect(r),a.start(),a.stop(o+1.4),c.start(),c.stop(o+1.4);break}case"bang":{let a=s.createBufferSource();a.buffer=this.noiseBuffer(.8);let l=s.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(5200,o),l.frequency.exponentialRampToValueAtTime(120,o+.5),a.connect(l);let c=s.createGain();c.gain.setValueAtTime(t,o),c.gain.exponentialRampToValueAtTime(1e-4,o+.7),l.connect(c),c.connect(r),a.start(),a.stop(o+.8);let h=s.createOscillator();h.type="sine",h.frequency.setValueAtTime(180,o),h.frequency.exponentialRampToValueAtTime(40,o+.5);let d=s.createGain();d.gain.setValueAtTime(t*.9,o),d.gain.exponentialRampToValueAtTime(1e-4,o+.6),h.connect(d),d.connect(r),h.start(),h.stop(o+.65);break}case"heal":{this.tone(r,420,.15,t*.3,"sine"),setTimeout(()=>this.tone(r,560,.2,t*.3,"sine"),140);break}case"craft":{this.blip(r,500,.07,t*.5,"square"),setTimeout(()=>this.blip(r,760,.07,t*.5,"square"),120),setTimeout(()=>this.blip(r,1e3,.1,t*.5,"square"),240);break}case"win":{[392,494,587,784].forEach((l,c)=>setTimeout(()=>this.tone(r,l,.5,t*.25,"sine"),c*220));break}case"lose":{[392,330,262,175].forEach((l,c)=>setTimeout(()=>this.tone(r,l,.6,t*.3,"sine"),c*300));break}case"bell":{let a=s.createOscillator();a.type="sine",a.frequency.value=660;let l=s.createOscillator();l.type="sine",l.frequency.value=663;let c=s.createGain();c.gain.setValueAtTime(t*.4,o),c.gain.exponentialRampToValueAtTime(1e-4,o+2.4),a.connect(c),l.connect(c),c.connect(r),a.start(),l.start(),a.stop(o+2.5),l.stop(o+2.5);break}}}blip(e,t,n,s,r){let o=this.ctx,a=o.currentTime,l=o.createOscillator();l.type=r,l.frequency.value=t;let c=o.createGain();c.gain.setValueAtTime(s,a),c.gain.exponentialRampToValueAtTime(1e-4,a+n),l.connect(c),c.connect(e),l.start(),l.stop(a+n+.01)}tone(e,t,n,s,r){this.blip(e,t,n,s,r)}setGrowl(e,t=58){!this.growlGain||!this.growlOsc||!this.ctx||(this.growlGain.gain.setTargetAtTime(e,this.ctx.currentTime,.15),this.growlOsc.frequency.setTargetAtTime(t,this.ctx.currentTime,.2))}},M_={w:"KeyW",a:"KeyA",s:"KeyS",d:"KeyD",e:"KeyE",r:"KeyR",f:"KeyF",q:"KeyQ",h:"KeyH",v:"KeyV",c:"KeyC",i:"KeyI",escape:"Escape",shift:"ShiftLeft",control:"ControlLeft",1:"Digit1",2:"Digit2",3:"Digit3"," ":"Space",arrowup:"ArrowUp",arrowdown:"ArrowDown",arrowleft:"ArrowLeft",arrowright:"ArrowRight"};function Qu(i){if(i.code)return i.code;let e=i.key.toLowerCase();return M_[e]||"Key_"+e.toUpperCase()}var Ia=class{constructor(){this.keys={};this.buttons={};this.look={x:0,y:0};this.touchMove={x:0,y:0};this.pointerLocked=!1;this.el=null;this.onKeyExtra=null;this.kd=e=>{if(e.repeat)return;let t=Qu(e);this.keys[t]=!0,this.onKeyExtra&&this.onKeyExtra(t),["Space","Tab"].includes(t)&&e.preventDefault()};this.ku=e=>{this.keys[Qu(e)]=!1};this.md=e=>{var t,n;!this.pointerLocked&&this.el&&((n=(t=this.el).requestPointerLock)==null||n.call(t)),e.button===0&&(this.buttons.attack=!0),e.button===2&&(this.buttons.aim=!0)};this.mu=e=>{e.button===0&&(this.buttons.attack=!1),e.button===2&&(this.buttons.aim=!1)};this.mm=e=>{this.pointerLocked&&(this.look.x+=e.movementX*.0022,this.look.y+=e.movementY*.0022)};this.plc=()=>{this.pointerLocked=document.pointerLockElement===this.el}}attach(e){this.el=e,window.addEventListener("keydown",this.kd),window.addEventListener("keyup",this.ku),e.addEventListener("mousedown",this.md),window.addEventListener("mouseup",this.mu),window.addEventListener("mousemove",this.mm),document.addEventListener("pointerlockchange",this.plc),e.addEventListener("contextmenu",t=>t.preventDefault())}detach(){window.removeEventListener("keydown",this.kd),window.removeEventListener("keyup",this.ku),window.removeEventListener("mouseup",this.mu),window.removeEventListener("mousemove",this.mm),document.removeEventListener("pointerlockchange",this.plc)}requestLock(){var e,t;this.el&&!this.pointerLocked&&((t=(e=this.el).requestPointerLock)==null||t.call(e))}exitLock(){document.pointerLockElement&&document.exitPointerLock()}touchLook(e,t){this.look.x+=e*.0045,this.look.y+=t*.0045}touchMoveVec(e,t){this.touchMove.x=e,this.touchMove.y=t}setButton(e,t){this.buttons[e]=t,t&&this.onKeyExtra&&this.onKeyExtra("T_"+e)}consumeLook(){let e={x:this.look.x,y:this.look.y};return this.look.x=0,this.look.y=0,e}moveVector(){let e=0,t=0;(this.keys.KeyW||this.keys.ArrowUp)&&(t-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(t+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(e-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(e+=1);let n=Math.hypot(e,t);return n>1&&(e/=n,t/=n),Math.hypot(this.touchMove.x,this.touchMove.y)>.12&&(e=this.touchMove.x,t=this.touchMove.y),{x:e,y:t}}down(e){return!!this.keys[e]||!!this.buttons[e]}};var Ec=[new R(0,0,14),new R(14,0,2),new R(10,0,-16),new R(-12,0,-18),new R(-22,0,0),new R(-14,0,18),new R(4,0,28),new R(24,0,8),new R(-30,0,-22),new R(30,0,-22),new R(0,0,42)],Rb=new R(0,0,52),an=Vi(20240613);function Ge(i,e,t,n,s,r,o,a=0,l){let c=new At(i,e,t),h=new Ee(c,n);return h.position.set(s,r,o),h.rotation.y=a,l&&l.add(h),h}function bt(i,e,t,n){return{minX:i-t/2,maxX:i+t/2,minZ:e-n/2,maxZ:e+n/2}}function Vn(i,e,t){for(let n of t){let s=Math.max(n.minX,Math.min(i.x,n.maxX)),r=Math.max(n.minZ,Math.min(i.z,n.maxZ)),o=i.x-s,a=i.z-r,l=o*o+a*a;if(l<e*e)if(l>1e-8){let c=Math.sqrt(l);i.x=s+o/c*e,i.z=r+a/c*e}else{let c=Math.min(i.x-n.minX,n.maxX-i.x),h=Math.min(i.z-n.minZ,n.maxZ-i.z);c<h?i.x=i.x-n.minX<n.maxX-i.x?n.minX-e:n.maxX+e:i.z=i.z-n.minZ<n.maxZ-i.z?n.minZ-e:n.maxZ+e}}}var Mc=new ur;function ws(i,e,t){let n=new R().subVectors(e,i),s=n.length();return s<.01?!0:(n.normalize(),Mc.set(i,n),Mc.far=s-.1,Mc.intersectObjects(t,!1).length===0)}function rd(i,e){let t=new wt;i.add(t);let n=[],s=[],r=[],o=[],a=[],l=new Map,c=e==="high",h=new Fe({map:Si(Jt("ground"),48,48),roughness:1}),d=new Fe({map:Si(Jt("dirt"),8,3),roughness:1}),u=new Fe({map:Si(Jt("plank"),2,1),roughness:.95}),m=new Fe({map:Si(Jt("plankdark"),2,1),roughness:.95}),_=new Fe({map:Si(Jt("stone"),3,1.5),roughness:.9}),b=new Fe({map:Si(Jt("roof"),3,2),roughness:.9}),f=new Fe({map:Jt("bark"),roughness:1}),p=new Fe({color:1450255,roughness:1}),S=new Fe({map:Jt("plankdark"),roughness:.95}),A=new Fe({map:Jt("metal"),roughness:.6,metalness:.5}),M=new Fe({map:Si(Jt("stone"),1,1),roughness:.95,color:9079432}),w=new Fe({color:2765880,roughness:.2,metalness:.4,transparent:!0,opacity:.55}),T=new Fe({color:1709072,roughness:1}),g=new Ee(new ni(180,180),h);g.rotation.x=-Math.PI/2,g.receiveShadow=c,t.add(g);let v=(X,U,W,ee)=>{let B=new Ee(new ni(W,ee),d);B.rotation.x=-Math.PI/2,B.position.set(X,.02,U),t.add(B)};v(0,20,4,66),v(0,-16,4,30),v(16,-8,34,3.4),v(-16,8,26,3.4),v(-12,-20,24,3.2),v(12,-24,18,3.2),v(16,10,14,3.2),v(2,24,18,3.2);let L=new qt,C=[];for(let X=0;X<500;X++){let U=an()*Math.PI*2,W=300+an()*100,ee=60+an()*160;C.push(Math.cos(U)*W,ee,Math.sin(U)*W)}L.setAttribute("position",new st(C,3));let D=new js(L,new gs({color:10466520,size:1.4,sizeAttenuation:!0,fog:!1}));t.add(D);let k=new Ee(new sr(9,32),new rn({color:13621480,fog:!1,transparent:!0,opacity:.9}));k.position.set(-120,110,-160),k.lookAt(0,0,0),t.add(k);let q=new or(2569037,658440,.72);i.add(q);let I=new hr(9348812,.68);I.position.set(-60,90,-80),c&&(I.castShadow=!0,I.shadow.mapSize.set(2048,2048),I.shadow.camera.left=-90,I.shadow.camera.right=90,I.shadow.camera.top=90,I.shadow.camera.bottom=-90,I.shadow.camera.far=260),i.add(I);let H=X=>n.push(X),$=(X,U,W,ee,B,V,re,P=!0)=>{let Q=Ge(ee,B,V,re,X,U,W);return Q.castShadow=c,Q.receiveShadow=c,t.add(Q),s.push(Q),P&&H(bt(X,W,ee,V)),Q},Y=(X,U,W,ee,B)=>{let V=new Ee(new At(ee+.8,.25,B*.78),b);V.position.set(X,U+B*.19,W-B*.22),V.rotation.x=Math.atan2(B*.5,B*.42)*.9,V.castShadow=c,t.add(V),s.push(V);let re=V.clone();re.position.z=W+B*.22,re.rotation.x=-V.rotation.x,t.add(re),s.push(re);let P=Ge(ee+.9,.3,.6,S,X,U+B*.36,W);t.add(P)},se=(X,U,W,ee,B)=>{let V=Ge(1.3,1.1,.08,new Fe({color:B?16757850:790292,emissive:B?16751150:0,emissiveIntensity:B?.7:0,roughness:.4}),X,U,W,ee);return t.add(V),V},J=(X,U)=>{let W=Ge(.16,3.2,.16,S,X,1.6,U);t.add(W);let ee=Ge(.5,.5,.5,A,X,3.3,U);t.add(ee);let B=Ge(.36,.36,.36,new Fe({color:1118481,emissive:16753978,emissiveIntensity:1.4}),X,3.3,U);t.add(B),H(bt(X,U,.3,.3));let V=new dn(16751162,9,17,1.7);V.position.set(X,3.4,U),t.add(V),o.push({light:V,base:9,phase:an()*10})},te=(X,U,W)=>{let ee=new Ee(new Yt(.55,.35,.5,10),A);ee.position.set(U,.9,W),t.add(ee);let B=new Ee(new Yt(.09,.14,.8,8),A);B.position.set(U,.4,W),t.add(B),H(bt(U,W,.9,.9));let V=new Ee(new xn(.34,.8,8),T);V.position.set(U,1.55,W),t.add(V);let re={id:X,pos:new R(U,1.2,W),light:null,flame:V,lit:!1,pos3:new R(U,1.2,W)};a.push(re),r.push({id:X,pos:new R(U,1.2,W),radius:2.4,prompt:"Light the brazier",enabled:!0,once:!0,highlight:ee,onInteract:()=>{}})},ne=(X,U,W,ee=0)=>{switch(X){case"table":Ge(1.8,.08,1,S,U,.78,W,ee,t),Ge(.12,.78,.12,S,U-.75,.39,W-.35,0,t),Ge(.12,.78,.12,S,U+.75,.39,W-.35,0,t),Ge(.12,.78,.12,S,U-.75,.39,W+.35,0,t),Ge(.12,.78,.12,S,U+.75,.39,W+.35,0,t),H(bt(U,W,1.8,1));break;case"bed":Ge(1.2,.35,2.2,S,U,.28,W,ee,t),Ge(1.1,.18,1.9,new Fe({map:Jt("cloth"),roughness:1}),U,.55,W,ee,t),H(bt(U,W,1.3,2.3));break;case"shelf":Ge(.4,1.8,1.6,S,U,.9,W,ee,t),H(bt(U,W,.5,1.7));break;case"crate":Ge(.9,.9,.9,u,U,.45,W,ee+(an()-.5)*.4,t),H(bt(U,W,1,1));break;case"hay":Ge(1.4,1,1.4,new Fe({color:7035434,roughness:1}),U,.5,W,ee,t),H(bt(U,W,1.5,1.5));break;case"pew":Ge(2.4,.45,.5,S,U,.45,W,ee,t),Ge(2.4,.5,.12,S,U,.85,W-.2,ee,t),H(bt(U,W,2.5,.6));break;case"mortar":{let B=new Ee(new Yt(.22,.16,.24,10),M);B.position.set(U,.92,W),t.add(B);break}case"workbench":Ge(2.2,.1,.9,u,U,.85,W,ee,t),Ge(.15,.85,.15,S,U-.9,.42,W-.3,0,t),Ge(.15,.85,.15,S,U+.9,.42,W-.3,0,t),Ge(.15,.85,.15,S,U-.9,.42,W+.3,0,t),Ge(.15,.85,.15,S,U+.9,.42,W+.3,0,t),H(bt(U,W,2.3,1));break;case"grave":{let B=Ge(.7,.9+an()*.3,.16,M,U,.5,W,(an()-.5)*.2);B.castShadow=c,t.add(B),H(bt(U,W,.8,.5));break}}},pe=X=>{var le;let{x:U,z:W,w:ee,d:B,h:V}=X,re=X.stone?_:u,P=(le=X.doorW)!=null?le:1.4,Q=(ie,ae)=>{var fe,je,vt,vn;let ye=ie==="N"||ie==="S",Ie=ie==="N"?W-B/2:ie==="S"?W+B/2:ie==="W"?U-ee/2:U+ee/2,oe=ye?ee:B,we=ie===X.door,Be=we?[[-oe/2,-P/2],[P/2,oe/2]]:[[-oe/2,oe/2]];for(let[bn,Gn]of Be){let Wn=Gn-bn;if(Wn<.05)continue;let Ls=(bn+Gn)/2;ye?$(U+Ls,V/2,Ie,Wn,V,.3,re):$(Ie,V/2,W+Ls,.3,V,Wn,re)}we&&(ye?$(U,V-.35,Ie,P,.7,.3,re,!1):$(Ie,V-.35,W,.3,.7,P,re,!1));for(let bn of ae){if(we&&Math.abs(bn)<2)continue;let Gn=V*.55;ye?se(U+bn,Gn,Ie+(ie==="N"?-.18:.18),0,!!((je=(fe=X.windows)==null?void 0:fe.find(Wn=>Wn.off===bn))!=null&&je.lit)):se(Ie+(ie==="W"?-.18:.18),Gn,W+bn,Math.PI/2,!!((vn=(vt=X.windows)==null?void 0:vt.find(Wn=>Wn.off===bn))!=null&&vn.lit))}};["N","S","E","W"].forEach(ie=>{let ae=(X.windows||[]).filter(ye=>ye.side===ie).map(ye=>ye.off);Q(ie,ae)});let K=new Ee(new ni(ee,B),S);K.rotation.x=-Math.PI/2,K.position.set(U,.03,W),t.add(K),X.roof!==!1&&Y(U,V,W,ee,B),(X.interior||[]).forEach(([ie,ae,ye,Ie])=>ne(ie,U+ae,W+ye,Ie||0))},Pe=(X,U,W,ee,B)=>{let V=new dt;V.position.set(U,0,W),V.rotation.y=ee;let re=Ge(1.36,2.2,.12,m,.68,1.1,0);re.castShadow=c,V.add(re);let P=Ge(.1,.1,.16,A,1.15,1.05,0);V.add(P),t.add(V);let K=Math.abs(Math.sin(ee))<.5?bt(U+.68*Math.cos(ee),W,1.4,.5):bt(U,W+.68*Math.cos(ee),.5,1.4);H(K);let le={id:X,locked:B,open:!1,pivot:V,collider:K};return l.set(X,le),r.push({id:"door_"+X,pos:new R(U,1.2,W),radius:2.6,prompt:B?"Locked":"Open door",enabled:!0,onInteract:()=>{}}),le};pe({x:0,z:-30,w:15,d:10,h:5,stone:!0,door:"S",windows:[{side:"E",off:-3,lit:!1},{side:"W",off:3,lit:!1}],interior:[["pew",-3,-2.5,0],["pew",0,-2.5,0],["pew",3,-2.5,0],["pew",-3,.5,0],["pew",3,.5,0],["table",0,-4.2,0]]});let j=new Ee(new xn(1.6,4.5,4),b);j.position.set(0,8,-34.5),j.castShadow=c,t.add(j),$(0,7,-34.5,2.6,4.5,2.6,_,!1);let de=Pe("church",.75,-24.9,0,!0);Ge(.14,1.6,.14,S,0,4.3,-34.4,0,t),Ge(.8,.14,.14,S,0,4.6,-34.4,0,t),pe({x:28,z:-8,w:13,d:9,h:4.2,door:"W",doorW:2.2,interior:[["hay",3.5,-2],["hay",3.5,1.5],["crate",-3,-2.5],["crate",-1.5,2.8,.5],["workbench",1,3.6,0]]});let xe=new Ee(new Yt(1.7,1.7,6,12),A);xe.position.set(36.5,3,-11),xe.castShadow=c,t.add(xe),s.push(xe),H(bt(36.5,-11,3.4,3.4)),pe({x:-20,z:12,w:10,d:8,h:3.4,door:"E",windows:[{side:"S",off:-2,lit:!0},{side:"W",off:0}],interior:[["table",-2.5,-2],["bed",3,-2.2,0],["shelf",-4.4,1.5,Math.PI/2],["crate",2,2.6]]}),pe({x:22,z:18,w:12,d:9,h:3.6,door:"W",windows:[{side:"S",off:-3,lit:!0},{side:"N",off:2}],interior:[["table",2.5,-2.4],["bed",-4,-2.6],["shelf",5.4,2,Math.PI/2],["crate",-2,2.8],["crate",.5,3.2]]}),pe({x:18,z:-28,w:8,d:7,h:3.4,stone:!0,door:"S",windows:[{side:"W",off:0}],interior:[["table",0,-2.4],["pew",0,1.2,0]]}),pe({x:-28,z:10,w:10,d:8,h:3.4,door:"E",windows:[{side:"N",off:-2,lit:!1},{side:"S",off:2,lit:!0}],interior:[["bed",-3,-2.2],["bed",-3,1.4],["table",2.8,-2],["mortar",2.8,-2],["shelf",-4.4,0,Math.PI/2]]}),pe({x:-5,z:30,w:7,d:6,h:3,door:"N",interior:[["workbench",0,-1.6,0],["crate",2.4,1.8],["crate",-2.2,1.6,.7]]}),pe({x:45,z:-30,w:7,d:6,h:3,door:"W",interior:[["bed",1.8,-1.5],["shelf",-2.9,0,Math.PI/2],["crate",1.5,1.8]]});let Ae=new wt,me=new Ee(new At(6,2.6,4.4),w);me.position.set(-40,1.3,20),Ae.add(me);let Oe=Ge(6.2,.12,4.6,S,-40,2.6,20);t.add(Oe),Ae.position.set(0,0,0),t.add(Ae),H(bt(-40,20,6.2,4.6));let _t=S,Re=(X,U,W,ee)=>{$(X,.75,U,W,1.5,.18,_t)};Re(-33,-46.4,26,.18),Re(-33,-24.4,26,.18),Re(-46.4,-35.4,.18,22),Re(-19.6,-40,.18,14);for(let X=-44;X<=-24;X+=4)for(let U=-44;U<=-28;U+=4)an()<.75&&ne("grave",X+(an()-.5),U+(an()-.5));let $e=Ge(1.6,1,1,M,-33,.5,-41);$e.castShadow=c,t.add($e),H(bt(-33,-41,1.7,1.1)),r.push({id:"cemetery_altar",pos:new R(-33,1,-41),radius:2.6,prompt:"Place the amulet",enabled:!0,once:!0,highlight:$e,onInteract:()=>{}});let We=0,De=2,yt=new Ee(new Yt(1.3,1.4,1.2,12),M);yt.position.set(We,.6,De),t.add(yt),s.push(yt),H(bt(We,De,2.6,2.6)),Ge(.12,2.4,.12,S,We-1.1,1.2,De,0,t),Ge(.12,2.4,.12,S,We+1.1,1.2,De,0,t),Y(We,2.4,De,3,2.4);let xt=Ge(.03,2,.03,new Fe({color:9075290}),We,1.4,De);t.add(xt);let Ut=Ge(.4,.35,.4,S,We,.5,De);t.add(Ut);let rt=new Ee(new Yt(.07,.07,1.4,8),A);rt.rotation.z=Math.PI/2,rt.position.set(We,2.1,De),t.add(rt),r.push({id:"well_crank",pos:new R(We+1.4,1.4,De),radius:2.6,prompt:"Turn the crank",enabled:!0,once:!1,highlight:rt,onInteract:()=>{}});let Ht=55;$(-6.5,1.6,Ht,9,3.2,.5,m),$(6.5,1.6,Ht,9,3.2,.5,m);let ft=new dt;ft.position.set(-1.8,0,Ht);let Kt=Ge(3.5,3,.3,m,1.75,1.5,0);ft.add(Kt),Ge(.25,.25,.5,A,3.3,1.5,0,0,ft),t.add(ft),H(bt(0,Ht,3.8,.7)),r.push({id:"forest_gate",pos:new R(0,1.4,Ht),radius:3.2,prompt:"Open the gate",enabled:!0,once:!1,highlight:Kt,onInteract:()=>{}});let sn=Ge(1.2,.5,1.2,M,8,.25,8,.4);t.add(sn),H(bt(8,8,1.3,1.3)),J(-6,8),J(6,8),J(-4,-18),J(4,42),J(24,-14),J(-26,6),te("brazier_miller",-20,15.2),te("brazier_farm",22,21.2),te("brazier_annex",18,-30.2);let Ot=e==="low"?90:150,O=new Yt(.22,.34,5.5,6),zt=new Ni(O,f,Ot),at=new xn(1.9,4.6,7),lt=new xn(1.4,3.4,7),ce=new Ni(at,p,Ot),mt=new Ni(lt,p,Ot),be=new dt,Ce=0,E=[[-88,88,-88,-66],[-88,88,66,88],[-88,-66,-66,66],[66,88,-66,66],[-88,-52,26,52],[52,88,8,48],[-52,-44,28,44],[30,50,26,44],[-58,-40,-58,-46],[36,56,-52,-34]];for(;Ce<Ot;){let X=E[Ce%E.length],U=X[0]+an()*(X[1]-X[0]),W=X[2]+an()*(X[3]-X[2]),ee=.8+an()*.9;be.position.set(U,2.6*ee,W),be.scale.setScalar(ee),be.rotation.y=an()*Math.PI,be.updateMatrix(),zt.setMatrixAt(Ce,be.matrix),be.position.y=5.6*ee,be.updateMatrix(),ce.setMatrixAt(Ce,be.matrix),be.position.y=7.6*ee,be.updateMatrix(),mt.setMatrixAt(Ce,be.matrix),n.push(bt(U,W,.7,.7)),Ce++}zt.instanceMatrix.needsUpdate=!0,ce.instanceMatrix.needsUpdate=!0,mt.instanceMatrix.needsUpdate=!0,t.add(zt,ce,mt);let x=Ge(.5,5,.5,f,-33,2.5,-33,.2);x.castShadow=c,t.add(x),Ge(.2,2.4,.2,f,-32,5.6,-33,.7,t),Ge(.2,2,.2,f,-34,5.2,-33.2,-.6,t),H(bt(-33,-33,.8,.8));let F=62;return H({minX:-F-6,maxX:-F,minZ:-F-6,maxZ:F+6}),H({minX:F,maxX:F+6,minZ:-F-6,maxZ:F+6}),H({minX:-F-6,maxX:F+6,minZ:-F-6,maxZ:-F}),H({minX:-F-6,maxX:F+6,minZ:F,maxZ:F+6}),{root:t,colliders:n,occluders:s,interactables:r,lamps:o,braziers:a,doors:l,gatePivot:ft,stars:D,moonMesh:k,groundMesh:g,wellBucket:Ut,wellRope:xt}}var Tc={knife:{id:"knife",name:"Knife",melee:!0,dmg:26,rate:.55,range:2,magSize:0,reloadTime:0,ammoKey:""},pistol:{id:"pistol",name:"Revolver",melee:!1,dmg:14,rate:.5,range:60,magSize:6,reloadTime:1.9,ammoKey:"ammo_pistol"},rifle:{id:"rifle",name:"Hunter's Rifle",melee:!1,dmg:48,rate:1.25,range:80,magSize:2,reloadTime:2.9,ammoKey:"ammo_rifle"}},La=class{constructor(e){this.pos=new R(0,0,52);this.yaw=0;this.pitch=0;this.vel=new R;this.health=100;this.maxHealth=100;this.stamina=100;this.fear=0;this.crouching=!1;this.sprinting=!1;this.flashlightOn=!0;this.battery=100;this.weapons=["knife"];this.current="knife";this.mag={pistol:6,rifle:0};this.inv={bandage:1,pills:1,grenade:0,battery:0,ammo_pistol:6,ammo_rifle:0,herb:0,church_key:0,iron_key:0,amulet:0,rifle_stock:0,rifle_barrel:0};this.downed=!1;this.dead=!1;this.downTimer=0;this.moving=!1;this.stepDist=0;this.fireCd=0;this.reloadT=0;this.knifeAnim=0;this.fearPills=0;this.interactTarget=null;this.name="Survivor";this.color=8952234;this.id="p0";this.isLocal=!0;this.cam=new Tt(70,1,.1,400);this.flashTarget=new dt;this.bobT=0;this.shakeT=0;this.shakeAmp=0;this.lowBatFlicker=0;this.onNoise=null;this.onDamage=null;this.cam.name="playerCam",e.add(this.cam),this.flash=new lr(16771524,0,30,.46,.5,1.4),this.flash.position.set(0,0,0),e.add(this.flash),e.add(this.flashTarget),this.flash.target=this.flashTarget,this.muzzle=new dn(16761706,0,9,1.8),e.add(this.muzzle),this.model=new wt;let t=new Fe({color:5919820,roughness:.9}),n=new Fe({color:this.color,roughness:.95}),s=new Ee(new Dt(.26,.7,4,8),n);s.position.y=1.05,this.model.add(s);let r=new Ee(new en(.17,10,8),t);r.position.y=1.68,this.model.add(r);let o=new Ee(new Dt(.09,.5,3,6),t);o.position.set(-.12,.35,0);let a=o.clone();a.position.x=.12,this.model.add(o,a);let l=new Ee(new At(.34,.44,.2),new Fe({map:Jt("cloth"),roughness:1}));l.position.set(0,1.15,-.26),this.model.add(l),this.model.visible=!1,e.add(this.model)}get camera(){return this.cam}get eyePos(){return new R(this.pos.x,this.pos.y+(this.crouching?1.05:1.62),this.pos.z)}get chestPos(){return new R(this.pos.x,this.pos.y+1.25,this.pos.z)}hasWeapon(e){return this.weapons.includes(e)}giveWeapon(e){this.weapons.includes(e)||this.weapons.push(e),e==="pistol"&&(this.mag.pistol=Math.max(this.mag.pistol,6)),e==="rifle"&&(this.mag.rifle=Math.max(this.mag.rifle,2))}weaponDef(){return Tc[this.current]}addShake(e,t){this.shakeAmp=Math.max(this.shakeAmp,e),this.shakeT=Math.max(this.shakeT,t)}damage(e,t){this.dead||(this.fearPills>0&&t&&e<=25&&(e*=.85),this.health=et(this.health-e,0,100),this.fear=et(this.fear+e*.5,0,100),this.addShake(.5,.35),this.onDamage&&this.onDamage(e,t),this.health<=0&&(this.downed=!0,this.downTimer=60))}heal(e){this.health=et(this.health+e,0,this.maxHealth)}calmFear(e){this.fear=et(this.fear-e,0,100)}useItem(e,t){if((this.inv[e]||0)<=0)return!1;switch(e){case"bandage":return this.inv.bandage--,this.heal(40),t.play("heal",.6),!0;case"pills":return this.inv.pills--,this.calmFear(50),this.fearPills=45,t.play("heal",.5),!0;case"battery":return this.inv.battery--,this.battery=100,t.play("flash",.6),!0;default:return!1}}reload(e){let t=this.weaponDef();if(!(t.melee||this.reloadT>0)&&!(this.mag[t.id]>=t.magSize)){if((this.inv[t.ammoKey]||0)<=0){e.play("dry",.4);return}this.reloadT=t.reloadTime,e.play("reload",.5)}}finishReload(){let e=this.weaponDef();if(e.melee)return;let t=e.magSize-this.mag[e.id],n=Math.min(t,this.inv[e.ammoKey]||0);this.mag[e.id]+=n,this.inv[e.ammoKey]=(this.inv[e.ammoKey]||0)-n}fire(e,t,n,s){let r=this.weaponDef();if(this.fireCd>0)return"cooldown";if(this.reloadT>0)return"reloading";if(r.melee){this.fireCd=r.rate,this.knifeAnim=.28,e.play("knife",.45);let c=this.eyePos;for(let h of t){let d=h.pos();if(d.distanceTo(this.chestPos)<r.range+.4){let m=new R().subVectors(d,c).normalize(),_=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(-1);if(m.dot(_)>.4&&ws(c,d,n)){e.play("flesh",.6),h.onHit(r.dmg,!1);break}}}return"melee"}if(this.mag[r.id]<=0)return e.play("dry",.5),this.fireCd=.3,"empty";this.mag[r.id]--,this.fireCd=r.rate,e.play("shot",.85),this.addShake(.35,.18),this.muzzle.intensity=30,this.muzzle.position.copy(this.chestPos).addScaledVector(s,.5),this.onNoise&&this.onNoise(this.pos.clone(),48),this.fear=et(this.fear-3,0,100);let o=this.chestPos.clone().addScaledVector(s,.4),a=null,l=new R;for(let c of t){let h=c.pos(),d=h.distanceTo(o);if(d>r.range)continue;l.copy(h).sub(o).normalize();let u=l.dot(s),m=et(.986-d*4e-4,.955,.986);u>m&&ws(o,h,n)&&(!a||d<a.d)&&(a={t:c,d})}return a&&(e.play("flesh",.7,0),a.t.onHit(r.dmg,!1)),"fired"}throwGrenade(e){if((this.inv.grenade||0)<=0)return null;this.inv.grenade--,e.play("knife",.3);let t=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(-1),n=t.multiplyScalar(11).add(new R(0,4.6,0));return{pos:this.chestPos.clone().addScaledVector(t,.6),vel:n}}toggleFlashlight(e){this.battery<=0&&!this.flashlightOn||(this.flashlightOn=!this.flashlightOn,e.play("flash",.5))}update(e,t,n,s,r,o,a,l,c,h){let d=t.consumeLook();this.yaw-=d.x*o,this.pitch-=(a?-d.y:d.y)*o,this.pitch=et(this.pitch,-1.35,1.35),this.fireCd>0&&(this.fireCd-=e),this.reloadT>0&&(this.reloadT-=e,this.reloadT<=0&&this.finishReload()),this.knifeAnim>0&&(this.knifeAnim-=e),this.shakeT>0&&(this.shakeT-=e,this.shakeT<=0&&(this.shakeAmp=0)),this.muzzle.intensity=Math.max(0,this.muzzle.intensity-e*400),this.fearPills>0&&(this.fearPills-=e);let u=h?{x:0,y:0}:t.moveVector();this.moving=Math.hypot(u.x,u.y)>.1;let m=(t.down("ShiftLeft")||t.down("ShiftRight")||t.down("sprint"))&&this.moving&&!this.crouching;this.downed?this.sprinting=!1:m&&this.stamina>1?this.sprinting=!0:this.sprinting=!1,this.sprinting?this.stamina=et(this.stamina-17*e,0,100):this.stamina=et(this.stamina+(this.crouching?14:9)*e,0,100),this.crouching=!this.downed&&(t.down("KeyC")||t.down("ControlLeft")||t.down("crouch"));let _=3.1;this.sprinting?_=4.7:this.crouching&&(_=1.55),this.downed&&(_=.9);let b=Math.sin(this.yaw),f=Math.cos(this.yaw),p=-b,S=-f,A=f,M=-b,w=p*-u.y+A*u.x,T=S*-u.y+M*u.x,g=Math.hypot(w,T)||1,v=w/g*_*Math.min(1,Math.hypot(u.x,u.y)),L=T/g*_*Math.min(1,Math.hypot(u.x,u.y));if(this.pos.x+=v*e,this.pos.z+=L*e,Vn(this.pos,.42,n.colliders),this.moving&&!this.downed){this.stepDist+=Math.hypot(v,L)*e;let Y=this.sprinting?1.7:this.crouching?1.3:1.05;if(this.stepDist>Y){this.stepDist=0,s.play("step",this.sprinting?.5:this.crouching?.16:.3);let se=this.sprinting?16:this.crouching?2.6:7.5;this.onNoise&&this.onNoise(this.pos.clone(),se)}}this.flashlightOn&&(this.battery=et(this.battery-e*.55,0,100),this.battery<=0&&(this.flashlightOn=!1,s.play("flash",.4)));let C=this.flashlightOn?85:0;this.flashlightOn&&this.battery<20&&(this.lowBatFlicker-=e,this.lowBatFlicker<=0&&(this.lowBatFlicker=.06+Math.random()*.2,C*=Math.random()<.24?.25:1)),this.flash.intensity=C;let D=this.eyePos;this.flash.position.copy(D);let k=new R(0,0,-1).applyEuler(new _n(this.pitch,this.yaw,0,"YXZ"));this.flashTarget.position.copy(D).addScaledVector(k,10),this.fearPills<=0&&(l?this.fear=et(this.fear+e*1.05,0,100):this.fear=et(this.fear-e*2.4,0,100),c&&(this.fear=et(this.fear+e*5.5,0,100)));let q=this.shakeAmp*(this.shakeT>0?this.shakeT:0),I=this.moving&&r==="first"?Math.sin(this.bobT*8.5)*.035:0;this.bobT+=e*(this.sprinting?1.5:1);let H=new _n(this.pitch,this.yaw,Math.sin(this.bobT*4)*.012+(Math.random()-.5)*q*.1,"YXZ");if(r==="first")this.cam.position.set(D.x+(Math.random()-.5)*q*.3,D.y+I,D.z+(Math.random()-.5)*q*.3),this.cam.quaternion.setFromEuler(H);else{let Y=new R(Math.sin(this.yaw),0,Math.cos(this.yaw)),se=D.clone().addScaledVector(Y,3.3).add(new R(0,.85+this.pitch*-.4,0)),J=new R().subVectors(se,D),te=J.length();J.normalize();let ne=te,pe=D.clone();for(let Pe=.4;Pe<=te;Pe+=.4){pe.copy(D).addScaledVector(J,Pe);let j=!1;for(let de of n.colliders)if(pe.x>de.minX-.25&&pe.x<de.maxX+.25&&pe.z>de.minZ-.25&&pe.z<de.maxZ+.25){j=!0;break}if(pe.y<.25&&(j=!0),j){ne=Math.max(.5,Pe-.4);break}}this.cam.position.copy(D).addScaledVector(J,ne),this.cam.position.y+=Math.sin(this.bobT*4)*.02,this.cam.quaternion.setFromEuler(H)}this.model.visible=r==="third",this.model.position.copy(this.pos),this.model.rotation.y=this.yaw+Math.PI;let $=this.moving?Math.sin(this.bobT*9)*.5:0;this.model.children[2].rotation.x=$*.6,this.model.children[3].rotation.x=-$*.6,this.model.scale.y=this.crouching?.72:1,this.downed?(this.model.rotation.x=Math.PI/2.2,this.model.position.y=.3):(this.model.rotation.x=0,this.model.position.y=0)}serialize(){return{id:this.id,name:this.name,x:this.pos.x,z:this.pos.z,yaw:this.yaw,pitch:this.pitch,hp:this.health,downed:this.downed,dead:this.dead,crouch:this.crouching,moving:this.moving,weapon:this.current,flash:this.flashlightOn,color:this.color}}};var Pt=Vi(777);function E_(i){let e=new wt,t=new Fe({color:1315343,roughness:1}),n=new Fe({color:9076856,roughness:.9}),s=new Ee(new Dt(.3,1.15,4,8),t);s.position.y=1.55,e.add(s);let r=new Ee(new en(.2,10,8),n);r.position.y=2.42,r.scale.set(.9,1.25,.9),e.add(r);let o=new Ee(new xn(.3,.55,8),t);o.position.y=2.62,e.add(o);let a=new Ee(new Dt(.075,1.05,3,6),n);a.position.set(-.34,1.7,0);let l=a.clone();l.position.x=.34,e.add(a,l);let c=new Ee(new Dt(.1,.85,3,6),n);c.position.set(-.14,.55,0);let h=c.clone();h.position.x=.14,e.add(c,h);let d=new rn({color:16757546}),u=new Ee(new en(.035,6,6),d);u.position.set(-.07,2.44,.17);let m=u.clone();m.position.x=.07,e.add(u,m);let _=new Ee(new At(.18,.26,.18),new Fe({color:2236962,emissive:16747546,emissiveIntensity:.9}));_.position.set(-.34,.55,.18),e.add(_);let b=new dn(16747546,5,9,1.8);return b.position.set(-.34,.7,.2),e.add(b),e.visible=!1,i.add(e),{group:e,parts:{body:s,head:r,cowl:o,armL:a,armR:l,legL:c,legR:h,lantern:_},eyes:[u,m]}}var Na=class{constructor(e){this.pos=new R(20,0,40);this.state="patrol";this.target=new R;this.stateT=0;this.wpIndex=0;this.poise=0;this.attackCd=0;this.stuckT=0;this.lastPos=new R;this.stepDist=0;this.twitchT=0;this.animT=0;this.controlled=!1;this.netPos=new R;this.netYaw=0;this.active=!1;this.rage=0;let t=E_(e);this.group=t.group,this.parts=t.parts,this.eyes=t.eyes}spawn(e){this.pos.copy(e),this.group.visible=!0,this.active=!0,this.state="patrol"}despawn(){this.active=!1,this.group.visible=!1}mesh(){return this.group}headPos(){return new R(this.pos.x,this.pos.y+2.3,this.pos.z)}hear(e,t){if(!this.active||this.controlled||this.state==="chase"||this.state==="stagger"||this.state==="down")return;let n=this.pos.distanceTo(e),s=t*(1+this.rage*.35);n<s&&(this.state="investigate",this.target.copy(e),this.stateT=0)}onHit(e,t,n,s,r){if(this.active){if(n.play3d("flesh",s,r,this.pos,.8),t){this.knockdown(5.5);return}this.poise+=e,this.poise>=55?(this.poise=0,this.knockdown(5)):(this.state="stagger",this.stateT=1.4)}}knockdown(e){this.state="down",this.stateT=e,this.poise=0,this.group.rotation.z=1.2}update(e,t,n,s,r,o,a){if(!this.active){s.setGrowl(0);return}if(this.controlled){this.pos.lerp(this.netPos,et(e*8,0,1)),this.group.position.copy(this.pos),this.group.rotation.y=this.netYaw;return}if(this.stateT-=e,this.attackCd-=e,this.animT+=e,this.state==="stagger")this.group.rotation.z=Math.sin(this.animT*30)*.08,this.stateT<=0&&(this.state="chase",this.group.rotation.z=0);else if(this.state==="down")this.stateT<=0&&(this.state="search",this.stateT=6,this.target.copy(n[0]?n[0].pos:this.pos),this.group.rotation.z=0);else{let _=null;for(let b of n){if(b.dead)continue;let f=this.headPos(),p=new R(b.pos.x,1.5,b.pos.z),S=f.distanceTo(p),A=b.flashlightOn?34:26;if(S<5.5||S<A&&this.inFov(p)&&ws(f,p,t.occluders)){_=b;break}}switch(_&&this.state!=="chase"&&(this.state="chase",this.stateT=0,s.play3d("scream",r,o,this.pos,.95)),this.state){case"patrol":{(this.stateT<=0||this.target.distanceTo(this.pos)<1.2)&&(this.wpIndex=(this.wpIndex+1+Math.floor(Pt()*2))%Ec.length,this.target.copy(Ec[this.wpIndex]),this.stateT=30),this.moveTowards(this.target,(1.65+this.rage*.5)*e,t);break}case"investigate":{this.moveTowards(this.target,(2.5+this.rage*.7)*e,t),this.target.distanceTo(this.pos)<1.4&&(this.state="search",this.stateT=5,this.target.copy(this.pos).add(new R((Pt()-.5)*14,0,(Pt()-.5)*14)));break}case"chase":{let b=null,f=1e9;for(let p of n){if(p.dead)continue;let S=this.pos.distanceTo(p.pos);S<f&&(f=S,b=p)}if(!b){this.state="patrol";break}this.target.copy(b.pos),this.moveTowards(this.target,(3.45+this.rage*.85)*e,t),f<1.9&&this.attackCd<=0&&!b.downed&&(this.attackCd=1.6,a(b),this.state="stagger",this.stateT=2.1,s.play3d("scream",r,o,this.pos,1)),_?this.stateT=0:this.stateT<=-6&&(this.state="search",this.stateT=9,this.target.copy(b.pos));break}case"search":{this.moveTowards(this.target,2.1*e,t),(this.target.distanceTo(this.pos)<1.4||this.stateT<=0)&&(this.stateT<=0?(this.state="patrol",this.stateT=0):this.target.copy(this.pos).add(new R((Pt()-.5)*18,0,(Pt()-.5)*18)));break}}}if(this.state==="patrol"&&n[0]){let _=1e9;for(let b of n)_=Math.min(_,this.pos.distanceTo(b.pos));if(_>75){let b=n[Math.floor(Pt()*n.length)],f=Pt()*Math.PI*2,p=new R(b.pos.x+Math.cos(f)*34,0,b.pos.z+Math.sin(f)*34);Vn(p,.5,t.colliders),this.pos.copy(p)}}this.pos.distanceTo(this.lastPos)<.02&&this.state!=="down"&&this.state!=="stagger"?(this.stuckT+=e,this.stuckT>1.1&&(this.target.copy(this.pos).add(new R((Pt()-.5)*12,0,(Pt()-.5)*12)),this.stuckT=0)):this.stuckT=0,this.lastPos.copy(this.pos);let l=this.state==="chase"?2.2:this.state==="down"?0:1.1,c=Math.sin(this.animT*l*4.5);this.parts.legL.rotation.x=c*.55,this.parts.legR.rotation.x=-c*.55,this.parts.armL.rotation.x=this.state==="chase"?-1.1+Math.sin(this.animT*9)*.25:c*.3,this.parts.armR.rotation.x=-c*.35,this.twitchT-=e,this.twitchT<=0&&(this.twitchT=this.state==="chase"?.12:.8+Pt()*1.6,this.parts.head.rotation.z=(Pt()-.5)*.5,this.parts.head.rotation.x=(Pt()-.5)*.3);let h=this.state==="chase"?2.6:1.2;this.eyes.forEach(_=>{_.material.color.setHex(this.state==="chase"?16726815:16757546)}),this.group.position.copy(this.pos);let d=new R().subVectors(this.target,this.pos);d.lengthSq()>.01&&(this.group.rotation.y=Math.atan2(d.x,d.z)),this.stepDist+=this.pos.distanceTo(this.lastPos),this.stepDist>1.6&&this.state!=="down"&&(this.stepDist=0,s.play3d("step",r,o,this.pos,1.4));let u=r?this.pos.distanceTo(r):99,m=this.state==="chase"?et(.28*(1-u/34),0,.3):et(.07*(1-u/20),0,.08);s.setGrowl(m,this.state==="chase"?66:52)}inFov(e){let t=new R(e.x-this.pos.x,0,e.z-this.pos.z).normalize(),n=new R(Math.sin(this.group.rotation.y),0,Math.cos(this.group.rotation.y));return t.dot(n)>.15}moveTowards(e,t,n){let s=new R(e.x-this.pos.x,0,e.z-this.pos.z),r=s.length();if(r<.01)return;s.divideScalar(r);let o=this.pos.x+s.x*t,a=this.pos.z+s.z*t,l=this.pos.clone();if(this.pos.set(o,0,a),Vn(this.pos,.5,n.colliders),this.pos.distanceTo(l)<t*.35){let h=new R(-s.z,0,s.x).multiplyScalar(Pt()<.5?1:-1);this.pos.addScaledVector(h,t*.9),Vn(this.pos,.5,n.colliders)}}};function T_(){let i=new wt,e=new Fe({color:7235422,roughness:1}),t=new Ee(new Dt(.22,.6,4,7),e);t.position.y=.85,i.add(t);let n=new Ee(new en(.15,8,7),e);n.position.y=1.36,n.rotation.x=.5,i.add(n);let s=new Ee(new Dt(.06,.62,3,5),e);s.position.set(-.24,1.05,.18),s.rotation.x=-.7;let r=s.clone();r.position.x=.24,i.add(s,r);let o=new Ee(new Dt(.08,.42,3,5),e);o.position.set(-.11,.3,0);let a=o.clone();return a.position.x=.11,i.add(o,a),w_(i),{group:i,parts:{body:t,head:n,armL:s,armR:r,legL:o,legR:a}}}var wc=null;function od(i){wc=i}function w_(i){wc&&wc.add(i)}var Da=class{constructor(e){this.hp=40;this.dead=!1;this.deadT=0;this.animT=Pt()*10;this.attackCd=0;this.wanderT=0;let t=T_();this.group=t.group,this.parts=t.parts,this.pos=e.pos.clone(),this.home=e.pos.clone(),this.target=e.pos.clone(),this.group.position.copy(this.pos),this.group.rotation.y=Pt()*Math.PI*2}mesh(){return this.group}chest(){return new R(this.pos.x,1,this.pos.z)}hear(e,t){this.dead||this.pos.distanceTo(e)<t*.9&&this.target.copy(e)}onHit(e){this.dead||(this.hp-=e,this.hp<=0?(this.dead=!0,this.deadT=0):this.target.set(this.pos.x,0,this.pos.z))}update(e,t,n,s,r,o,a){if(this.dead){this.deadT+=e,this.group.rotation.x=et(this.deadT*3,0,Math.PI/2),this.group.position.y=-et((this.deadT-.5)*.4,0,1.2),this.deadT>12&&(this.group.visible=!1);return}this.animT+=e,this.attackCd-=e,this.wanderT-=e;let l=null,c=1e9;for(let u of n){if(u.dead)continue;let m=this.pos.distanceTo(u.pos);m<c&&(c=m,l=u)}l&&c<9&&ws(this.chest().add(new R(0,.4,0)),new R(l.pos.x,1.2,l.pos.z),t.occluders)?this.target.copy(l.pos):this.target.distanceTo(this.pos)<.8&&this.wanderT<=0&&(this.wanderT=3+Pt()*5,this.target.copy(this.home).add(new R((Pt()-.5)*8,0,(Pt()-.5)*8)));let h=l&&c<11?1.55:.85,d=new R(this.target.x-this.pos.x,0,this.target.z-this.pos.z);if(d.length()>.6){d.normalize(),this.pos.addScaledVector(d,h*e),Vn(this.pos,.4,t.colliders);let u=Math.sin(this.animT*3.2);this.parts.legL.rotation.x=u*.4,this.parts.legR.rotation.x=-u*.4,this.group.position.copy(this.pos),this.group.rotation.y=Math.atan2(d.x,d.z),this.group.position.y=Math.abs(Math.sin(this.animT*3.2))*.04,Pt()<e*.7&&s.play3d("step",r,o,this.pos,.7)}l&&c<1.3&&this.attackCd<=0&&!l.downed&&(this.attackCd=1.5,a(l,12),s.play3d("flesh",r,o,this.pos,.7))}},ad=[new R(26,0,-6),new R(-30,0,8),new R(-20,0,10),new R(20,0,16),new R(-33,0,-30),new R(12,0,-20),new R(42,0,-28),new R(6,0,24)];var ka=[{id:"note_priest",num:1,title:"The Priest's Last Letter",text:`They came at dusk... the bell rang backwards...

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

\u2014 the survivors of '43`}],Ke=(i,e,t,n,s,r)=>({id:i,type:e,pos:new R(t,n,s),label:r}),Ua=[Ke("pk_church_key","church_key",28,.5,-4.5,"Church Key"),Ke("pk_ammo_1","ammo_pistol",-19,.8,10.5,"Revolver Ammo"),Ke("pk_bandage_1","bandage",-27,.9,10,"Bandage"),Ke("pk_ammo_2","ammo_pistol",23,.8,16.5,"Revolver Ammo"),Ke("pk_battery_1","battery",8,.4,8.5,"Battery"),Ke("pk_pills_1","pills",-28.5,.8,11.5,"Sedative Pills"),Ke("pk_battery_2","battery",18.5,.4,-29,"Battery"),Ke("pk_ammo_3","ammo_pistol",3,1,-32.5,"Revolver Ammo"),Ke("pk_bandage_2","bandage",44.5,.8,-31,"Bandage"),Ke("pk_grenade_1","grenade",-5,.9,29,"Noise Grenade"),Ke("pk_ammo_4","ammo_pistol",27.5,1.1,-9.5,"Revolver Ammo"),Ke("pk_battery_3","battery",-40,.6,19,"Battery"),Ke("pk_grenade_2","grenade",21,.8,19.5,"Noise Grenade"),Ke("pk_ammo_5","ammo_pistol",-6.5,.9,-30,"Revolver Ammo"),Ke("pk_pills_2","pills",-33,.9,-43,"Sedative Pills"),Ke("pk_bandage_3","bandage",29,.5,-6.5,"Bandage"),Ke("pk_grenade_3","grenade",-44,.7,-34,"Noise Grenade"),Ke("pk_battery_4","battery",30,.5,24,"Battery"),Ke("pk_ammo_rifle_1","ammo_rifle",43,.8,-28.5,"Rifle Rounds"),Ke("pk_pills_3","pills",0,1.1,-35,"Sedative Pills"),Ke("pk_stock","rifle_stock",29.5,.5,-10.5,"Rifle Stock"),Ke("pk_barrel","rifle_barrel",46.5,.9,-29.5,"Rifle Barrel"),Ke("pk_herb_1","herb",-39,.6,21,"Nightshade Sprig"),Ke("pk_herb_2","herb",-35,.5,-38,"Nightshade Sprig"),Ke("pk_herb_3","herb",50,.5,6,"Nightshade Sprig"),Ke("nt_priest","note_priest",0,1.15,-34.2,"Read the letter"),Ke("nt_miller","note_miller",-22,.85,12.5,"Read the page"),Ke("nt_clinic","note_clinic",-25.2,.9,8.4,"Read the log"),Ke("nt_barn","note_barn",26.5,.5,-11,"Read the plank"),Ke("nt_farm","note_farm",23.5,.85,19.5,"Read the card"),Ke("nt_annex","note_annex",18,1.1,-30.4,"Read the hymnal"),Ke("nt_hunter","note_hunter",43,.9,-29.8,"Read the warning"),Ke("nt_cemetery","note_cemetery",-36.5,.7,-40,"Read the marker"),Ke("pk_iron_key","iron_key",-33,1,-38.8,"Iron Key"),Ke("pk_amulet","amulet",0,1.35,2,"Drowned Amulet")],Ac=new Set(["pk_iron_key","pk_amulet"]),Oa={ammo_pistol:11569726,ammo_rifle:9071150,bandage:14209732,pills:10473664,battery:8366296,grenade:12872250,herb:5933626,church_key:14206058,iron_key:13153370,amulet:9067231,rifle_stock:6965802,rifle_barrel:9080724,note_priest:13617067,note_miller:13617067,note_clinic:13617067,note_barn:13617067,note_farm:13617067,note_annex:13617067,note_hunter:13617067,note_cemetery:13617067},Fa=new Set(["note_priest","note_miller","note_clinic","note_barn","note_farm","note_annex","note_hunter","note_cemetery"]),Ba=class{constructor(e,t){this.state={stage:0,braziersLit:[],picked:[],notesRead:[],rifleCrafted:!1,doctorDone:!1,whisperReward:!1,gateOpen:!1,shepherdActive:!1};this.pickupMeshes=new Map;this.rnd=Vi(555);this.amuletSpawned=!1;this.wellAnimating=0;this.localPlayerRef=null;this.world=e,this.hooks=t,this.buildPickups(),this.wireWorld()}buildPickups(){let e=new Fe({map:Jt("paper"),roughness:.9});for(let t of Ua){let n=new wt;if(Fa.has(t.type)){let r=new Ee(new At(.3,.02,.4),e);n.add(r)}else if(t.type==="church_key"||t.type==="iron_key"){let r=new Fe({color:Oa[t.type],metalness:.6,roughness:.4}),o=new Ee(new At(.04,.04,.26),r);o.position.z=.06;let a=new Ee(new _s(.07,.02,6,12),r);a.position.z=-.1;let l=new Ee(new At(.03,.09,.05),r);l.position.set(0,-.05,.16),n.add(o,a,l)}else if(t.type==="amulet"){let r=new Fe({color:Oa[t.type],metalness:.7,roughness:.3,emissive:3807850,emissiveIntensity:.6});n.add(new Ee(new _s(.11,.03,8,16),r));let o=new Ee(new en(.05,8,8),new Fe({color:1706538,emissive:6957823,emissiveIntensity:1}));o.position.z=.09,n.add(o)}else if(t.type==="herb"){let r=new Fe({color:Oa[t.type],roughness:1});for(let o=0;o<3;o++){let a=new Ee(new xn(.03,.18,5),r);a.position.set((this.rnd()-.5)*.12,.09,(this.rnd()-.5)*.12),a.rotation.z=(this.rnd()-.5)*.8,n.add(a)}}else{let r=new Fe({color:Oa[t.type]||11184810,roughness:.6,metalness:t.type.startsWith("ammo")?.4:.1}),o=new Ee(new At(.22,.16,.16),r);if(n.add(o),t.type.startsWith("ammo"))for(let a=0;a<3;a++){let l=new Ee(new Yt(.018,.018,.09,6),new Fe({color:13214282,metalness:.7,roughness:.35}));l.position.set(-.06+a*.06,.12,0),n.add(l)}}n.position.copy(t.pos),n.visible=!Ac.has(t.id),this.world.root.add(n),this.pickupMeshes.set(t.id,n);let s={id:t.id,pos:t.pos.clone(),radius:2.1,prompt:Fa.has(t.type)?t.label:"Take "+t.label,enabled:!Ac.has(t.id),once:!0,highlight:n,onInteract:()=>this.takePickup(t.id)};this.world.interactables.push(s),Ac.has(t.id)&&(s.used=!0)}}takePickup(e){let t=Ua.find(s=>s.id===e);if(!t||this.state.picked.includes(e))return;this.state.picked.push(e);let n=this.pickupMeshes.get(e);if(n&&(n.visible=!1),this.disableInteractable(e),Fa.has(t.type)){let s=ka.find(r=>r.id===t.type);s&&(this.state.notesRead.includes(t.type)||this.state.notesRead.push(t.type),this.hooks.onNoteRead(s),this.checkWhispers(),this.checkPriestNote(t.type)),this.hooks.onPickup(e,t.type);return}switch(this.hooks.onPickup(e,t.type),t.type){case"church_key":this.hooks.message("Church Key acquired",!0),this.setStage(1);break;case"iron_key":this.hooks.message("Iron Key acquired",!0),this.setStage(5);break;case"amulet":this.hooks.message("The Drowned Amulet",!0),this.setStage(4);break;case"rifle_stock":this.hooks.message("Rifle Stock acquired");break;case"rifle_barrel":this.hooks.message("Rifle Barrel acquired");break;case"herb":{let s=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(r=>this.state.picked.includes(r)).length;this.hooks.message(`Nightshade (${s}/3)`);break}default:break}}checkPriestNote(e){e==="note_priest"&&this.state.stage===1&&(this.setStage(2),this.hooks.subtitle("Three flames. Three calls. The braziers wait in the houses.",6))}checkWhispers(){this.state.whisperReward||this.state.notesRead.length>=ka.length&&(this.state.whisperReward=!0,this.hooks.message("All whispers collected: Revolver Ammo +6, Pills +2",!0),this.hooks.subtitle("The last page reveals the gate-ward sigil. The village finally rests.",6),this.hooks.netEmit("give",{items:{ammo_pistol:6,pills:2}}))}wireWorld(){let e=new Map;for(let r of this.world.interactables)e.set(r.id,r);for(let[r,o]of this.world.doors){let a=e.get("door_"+r);a&&(a.prompt=o.locked?"Locked \u2014 needs a key":"Open door",a.onInteract=()=>this.useDoor(r))}for(let r of this.world.braziers){let o=e.get(r.id);o&&(o.onInteract=()=>this.lightBrazier(r.id))}let t=e.get("well_crank");t&&(t.onInteract=()=>this.useWell());let n=e.get("cemetery_altar");n&&(n.onInteract=()=>this.useAltar());let s=e.get("forest_gate");s&&(s.onInteract=()=>this.useGate()),this.world.interactables.push({id:"workbench",pos:new R(-4,.9,28.4),radius:2.6,prompt:"Use workbench",enabled:!0,onInteract:()=>this.useWorkbench()}),this.world.interactables.push({id:"mortar",pos:new R(-25.2,.9,8),radius:2.6,prompt:"Use mortar",enabled:!0,onInteract:()=>this.useMortar()})}useDoor(e){var n;let t=this.world.doors.get(e);if(t){if(t.locked){e==="church"&&((((n=this.localPlayerRef)==null?void 0:n.inv.church_key)||0)>0?(t.locked=!1,this.hooks.message("Unlocked the church",!0),this.openDoor(e)):this.hooks.subtitle("Locked. The keyhole is cold iron. The key is somewhere in the barn.",4));return}t.open?this.closeDoor(e):this.openDoor(e)}}openDoor(e){let t=this.world.doors.get(e);if(!t||t.open)return;t.open=!0,t.pivot.rotation.y=-Math.PI*.55;let n=this.world.colliders.indexOf(t.collider);n>=0&&this.world.colliders.splice(n,1),this.hooks.onNoise(t.pivot.position,11),this.hooks.netEmit("door",{id:e,open:!0})}closeDoor(e){let t=this.world.doors.get(e);!t||!t.open||(t.open=!1,t.pivot.rotation.y=0,this.world.colliders.push(t.collider),this.hooks.onNoise(t.pivot.position,9),this.hooks.netEmit("door",{id:e,open:!1}))}lightBrazier(e){let t=this.world.braziers.find(s=>s.id===e);if(!t||t.lit)return;if(this.state.stage<2){this.hooks.subtitle("The coals are dead. Something must call the flame first.",4);return}t.lit=!0,this.state.braziersLit.push(e);let n=new dn(16742938,16,14,1.6);n.position.copy(t.pos3).add(new R(0,.6,0)),this.world.root.add(n),t.light=n,t.flame.material=new rn({color:16747050}),t.flame.scale.setScalar(1.4),this.hooks.onNoise(t.pos3,34),this.hooks.netEmit("brazier",{id:e}),this.hooks.message(`Brazier lit (${this.state.braziersLit.length}/3)`,!0),this.state.braziersLit.length>=3&&this.state.stage===2&&(this.setStage(3),this.hooks.subtitle("A bell tolls far away. The well is calling something up.",6))}useWell(){if(this.wellAnimating>0)return;if(this.state.stage<3){this.hooks.subtitle("The rope is frozen in the crank. Nothing answers your pull.",4);return}if(this.amuletSpawned){this.hooks.subtitle("The well is quiet now. What it held is already in your hands.",4);return}this.wellAnimating=3,this.hooks.subtitle("The crank groans... the rope strains... something heavy rises.",5),this.hooks.onNoise(this.world.wellBucket?this.world.wellBucket.position:new R(0,0,2),42),this.hooks.netEmit("well",{});let e=performance.now(),t=()=>{let n=(performance.now()-e)/1e3;if(this.world.wellBucket&&this.world.wellRope){let s=n/2.4,r=s<.55?.5-s*2.6:.5-(1.1-s*2)*2.6+(s-.55)*5.2;this.world.wellBucket.position.y=Math.max(.45,Math.min(r,1.8)),this.world.wellRope.scale.y=A_(1-this.world.wellBucket.position.y*.45,.15,1),this.world.wellRope.position.y=1.4+(2-2*this.world.wellRope.scale.y)/2}if(n<2.6)requestAnimationFrame(t);else if(!this.state.picked.includes("pk_amulet")){let s=this.pickupMeshes.get("pk_amulet");s&&(s.visible=!0),this.enableInteractable("pk_amulet"),this.hooks.subtitle("The amulet gleams at the lip of the well.",5)}};requestAnimationFrame(t)}useAltar(){var e;if(this.state.stage<4){this.hooks.subtitle("The altar is cold stone. It wants what drowned.",4);return}if(!this.state.picked.includes("pk_amulet")&&!((e=this.localPlayerRef)!=null&&e.inv.amulet)){this.hooks.subtitle("You need the amulet.",3);return}if(this.localPlayerRef&&(this.localPlayerRef.inv.amulet=0),this.state.picked.includes("pk_iron_key"))this.hooks.subtitle("The stone is still warm.",3);else{let t=this.world.interactables.find(s=>s.id==="cemetery_altar");t&&(t.used=!0,t.enabled=!1),this.enableInteractable("pk_iron_key");let n=this.pickupMeshes.get("pk_iron_key");n&&(n.visible=!0),this.hooks.subtitle("The amulet sinks into the stone. An iron key rises from the grave dirt.",6),this.hooks.onNoise(new R(-33,1,-41),46),this.hooks.netEmit("altar",{})}}useGate(){if(this.state.gateOpen)return;if(this.state.stage<5||!(this.localPlayerRef&&this.localPlayerRef.inv.iron_key>0)){this.hooks.subtitle("Locked. A sigil of three flames is carved above the keyhole.",4);return}this.state.gateOpen=!0,this.setStage(6),this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let e=this.world.colliders.find(t=>t.minX>-3&&t.maxX<3&&t.minZ>54&&t.maxZ<56);if(e){let t=this.world.colliders.indexOf(e);t>=0&&this.world.colliders.splice(t,1)}this.hooks.message("The gate is open \u2014 RUN.",!0),this.hooks.onNoise(new R(0,1,55),40),this.hooks.netEmit("gate",{})}useWorkbench(){if(this.state.rifleCrafted){this.hooks.subtitle("The bench is picked clean.",3);return}let e=this.state.picked.includes("pk_stock"),t=this.state.picked.includes("pk_barrel");e&&t?(this.state.rifleCrafted=!0,this.hooks.netEmit("craft",{what:"rifle"}),this.hooks.message("Hunter's Rifle crafted",!0),this.hooks.subtitle("The old rifle clicks together. Heavy. Hungry.",5),this.hooks.onNoise(new R(-4,1,28.4),22)):this.hooks.subtitle(`Missing parts. Stock ${e?"\u2713":"\u2717"} \u2014 Barrel ${t?"\u2713":"\u2717"}`,4)}useMortar(){if(this.state.doctorDone){this.hooks.subtitle("The mortar smells of bitter leaves.",3);return}let e=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(t=>this.state.picked.includes(t)).length;e>=3?(this.state.doctorDone=!0,this.hooks.netEmit("craft",{what:"remedy"}),this.hooks.message("Doctor's Remedy: Pills +3, Bandages +2",!0),this.hooks.subtitle("The tincture settles your hands. For now.",5),this.hooks.netEmit("give",{items:{pills:3,bandage:2}})):this.hooks.subtitle(`Nightshade sprigs: ${e}/3. Greenhouse, cemetery, forest edge.`,4)}disableInteractable(e){let t=this.world.interactables.find(n=>n.id===e);t&&(t.enabled=!1,t.used=!0)}enableInteractable(e){let t=this.world.interactables.find(n=>n.id===e);t&&(t.enabled=!0,t.used=!1)}setStage(e){e<=this.state.stage||(this.state.stage=e,this.hooks.onStage(e),this.hooks.netEmit("stage",{stage:e}))}applyRemote(e,t){switch(e){case"pickup":{let n=t.id;if(!this.state.picked.includes(n)){this.state.picked.push(n);let s=this.pickupMeshes.get(n);s&&(s.visible=!1),this.disableInteractable(n);let r=Ua.find(o=>o.id===n);r&&Fa.has(r.type)&&!this.state.notesRead.includes(r.type)&&this.state.notesRead.push(r.type)}break}case"door":{let n=this.world.doors.get(t.id);if(n){n.open=t.open,n.pivot.rotation.y=n.open?-Math.PI*.55:0;let s=this.world.colliders.indexOf(n.collider);n.open&&s>=0&&this.world.colliders.splice(s,1),!n.open&&s<0&&this.world.colliders.push(n.collider)}break}case"brazier":{let n=this.world.braziers.find(s=>s.id===t.id);if(n&&!n.lit){n.lit=!0,this.state.braziersLit.includes(n.id)||this.state.braziersLit.push(n.id);let s=new dn(16742938,16,14,1.6);s.position.copy(n.pos3).add(new R(0,.6,0)),this.world.root.add(s),n.light=s,n.flame&&(n.flame.material=new rn({color:16747050}),n.flame.scale.setScalar(1.4))}break}case"stage":this.state.stage=Math.max(this.state.stage,t.stage);break;case"well":{if(!this.state.picked.includes("pk_amulet")&&!this.amuletSpawned){this.amuletSpawned=!0;let n=this.pickupMeshes.get("pk_amulet");n&&(n.visible=!0),this.enableInteractable("pk_amulet")}break}case"altar":{if(!this.state.picked.includes("pk_iron_key")){let n=this.pickupMeshes.get("pk_iron_key");n&&(n.visible=!0),this.enableInteractable("pk_iron_key")}break}case"gate":{this.state.gateOpen=!0,this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let n=this.world.colliders.find(s=>s.minX>-3&&s.maxX<3&&s.minZ>54&&s.maxZ<56);if(n){let s=this.world.colliders.indexOf(n);s>=0&&this.world.colliders.splice(s,1)}break}case"craft":{t.what==="rifle"&&(this.state.rifleCrafted=!0),t.what==="remedy"&&(this.state.doctorDone=!0);break}}}giveToPlayer(e,t){for(let[n,s]of Object.entries(t))e.inv[n]=(e.inv[n]||0)+s}update(e){for(let[t,n]of this.pickupMeshes)n.visible&&(n.rotation.y+=e*1.4,n.position.y=Ua.find(s=>s.id===t).pos.y+Math.sin(performance.now()*.002+n.position.x)*.06);for(let t of this.world.braziers)t.lit&&t.light&&(t.light.intensity=14+Math.sin(performance.now()*.011+t.pos3.x)*3.5),t.lit&&t.flame&&(t.flame.scale.y=1.3+Math.sin(performance.now()*.013+t.pos3.z)*.25)}objectiveText(){let e=this.state.stage,t=["Find the church key in the old barn (east)","Unlock the church and read the priest\u2019s letter",`Light the three braziers (${this.state.braziersLit.length}/3) \u2014 Miller\u2019s, Farmhouse, Annex`,"Crank the well and take what rises","Place the amulet on the cemetery altar (north-west)","Open the forest gate (south) and escape","Escape through the forest gate"],n=[];if(!this.state.rifleCrafted){let s=this.state.picked.includes("pk_stock")?1:0,r=this.state.picked.includes("pk_barrel")?1:0;n.push(`The Hunter\u2019s Rifle: stock ${s}/1, barrel ${r}/1 \u2192 workbench`)}if(!this.state.doctorDone){let s=["pk_herb_1","pk_herb_2","pk_herb_3"].filter(r=>this.state.picked.includes(r)).length;n.push(`Doctor\u2019s Remedy: nightshade ${s}/3 \u2192 clinic mortar`)}return this.state.whisperReward||n.push(`Whispers of the Dead: notes ${this.state.notesRead.length}/8`),{main:t[Math.min(e,t.length-1)],sides:n}}serialize(){return kt({},this.state)}restore(e){Object.assign(this.state,e);for(let n of this.state.picked){let s=this.pickupMeshes.get(n);s&&(s.visible=!1),this.disableInteractable(n)}for(let n of this.state.braziersLit){let s=this.world.braziers.find(r=>r.id===n);if(s&&!s.lit){s.lit=!0;let r=new dn(16742938,16,14,1.6);r.position.copy(s.pos3).add(new R(0,.6,0)),this.world.root.add(r),s.light=r,s.flame&&(s.flame.material=new rn({color:16747050}),s.flame.scale.setScalar(1.4))}}this.state.gateOpen&&this.world.gatePivot&&(this.world.gatePivot.rotation.y=-Math.PI*.5);let t=this.world.doors.get("church")}};function A_(i,e,t){return Math.min(t,Math.max(e,i))}var R_=`
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
#hv-teammates { position: absolute; top: 14px; right: 16px; text-align: right; }
.hv-mate { font-size: 11px; color: #9a9284; margin: 3px 0; text-shadow: 0 1px 3px #000; }
.hv-mate .mbar { display: inline-block; width: 60px; height: 5px; background: #221e1a; margin-left: 8px; vertical-align: middle; }
.hv-mate .mbar i { display: block; height: 100%; background: #7a4a2a; }
#hv-timer { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 20px; letter-spacing: 0.2em; color: #b8a888; text-shadow: 0 1px 4px #000; }
#hv-role { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.3em; color: #7a6f5c; text-transform: uppercase; }
/* touch */
#hv-touch { position: absolute; inset: 0; z-index: 12; pointer-events: none; }
#hv-touch .zone { position: absolute; pointer-events: auto; }
#hv-stick-base { position: absolute; width: 120px; height: 120px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.25); background: rgba(20,16,14,0.25); }
#hv-stick-nub { position: absolute; width: 52px; height: 52px; border-radius: 50%; background: rgba(180,168,145,0.3); border: 1px solid rgba(200,190,165,0.4); }
.hv-tbtn { position: absolute; width: 62px; height: 62px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.35); background: rgba(20,16,14,0.4); color: #cfc4a8; font-family: inherit; font-size: 10px; letter-spacing: 0.06em; display: flex; align-items: center; justify-content: center; pointer-events: auto; text-transform: uppercase; }
.hv-tbtn:active, .hv-tbtn.on { background: rgba(143,29,29,0.45); border-color: rgba(220,120,100,0.6); }
.hv-tbtn.small { width: 48px; height: 48px; font-size: 9px; }
#hv-lookzone { position: absolute; right: 0; top: 0; width: 55%; height: 100%; pointer-events: auto; }
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
`,Ha=class{constructor(e,t,n,s){this.screens={};this.bars={};this.subtitleTimer=0;this.touchEnabled=!1;this.sprintToggle=!1;this.onSprintToggle=null;this.lobbyListEl=null;this.lobbyStartBtn=null;this.lobbyModeEl=null;this.noteCloseCb=null;this.crouchToggle=!1;this.lobbyCodeEl=null;this._returnScreen=null;this.cb=s,this.input=t,this._settings=n;let r=document.createElement("style");r.textContent=R_,document.head.appendChild(r),this.root=document.createElement("div"),this.root.id="hv-root",e.appendChild(this.root);let o=document.createElement("div");o.className="hv-scan",this.root.appendChild(o),this.hud=document.createElement("div"),this.hud.id="hv-hud",this.hud.classList.add("hv-hidden"),this.root.appendChild(this.hud);let a=document.createElement("div");a.id="hv-objective",this.objMain=document.createElement("div"),this.objMain.className="main",this.objSides=document.createElement("div"),this.objSides.className="side",a.append(this.objMain,this.objSides),this.hud.appendChild(a),this.teammatesEl=document.createElement("div"),this.teammatesEl.id="hv-teammates",this.hud.appendChild(this.teammatesEl),this.timerEl=document.createElement("div"),this.timerEl.id="hv-timer",this.timerEl.classList.add("hv-hidden"),this.hud.appendChild(this.timerEl),this.roleEl=document.createElement("div"),this.roleEl.id="hv-role",this.hud.appendChild(this.roleEl);let l=document.createElement("div");l.id="hv-vitals";let c=(h,d)=>{let u=document.createElement("div");u.className="hv-vlabel",u.textContent=d;let m=document.createElement("div");m.className="hv-bar "+h;let _=document.createElement("i");m.appendChild(_),this.bars[h]=_,l.append(u,m)};c("hp","VITALITY"),c("st","STAMINA"),c("fe","DREAD"),c("ba","TORCH"),this.hud.appendChild(l),this.hotbarEl=document.createElement("div"),this.hotbarEl.id="hv-hotbar",this.hud.appendChild(this.hotbarEl),this.crosshair=document.createElement("div"),this.crosshair.id="hv-crosshair",this.hud.appendChild(this.crosshair),this.promptEl=document.createElement("div"),this.promptEl.id="hv-prompt",this.promptEl.classList.add("hv-hidden"),this.hud.appendChild(this.promptEl),this.subtitleEl=document.createElement("div"),this.subtitleEl.id="hv-subtitle",this.hud.appendChild(this.subtitleEl),this.messagesEl=document.createElement("div"),this.messagesEl.id="hv-messages",this.hud.appendChild(this.messagesEl),this.vignette=document.createElement("div"),this.vignette.id="hv-vignette",this.hud.appendChild(this.vignette),this.damageEl=document.createElement("div"),this.damageEl.id="hv-damage",this.hud.appendChild(this.damageEl),this.touchWrap=document.createElement("div"),this.touchWrap.id="hv-touch",this.root.appendChild(this.touchWrap),this.stickBase=document.createElement("div"),this.stickBase.id="hv-stick-base",this.stickNub=document.createElement("div"),this.stickNub.id="hv-stick-nub",this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"),this.touchWrap.append(this.stickBase,this.stickNub),this.bindTouch(n),this.fadeEl=document.createElement("div"),this.fadeEl.className="hv-fade",this.root.appendChild(this.fadeEl),this.buildMainScreen(n),this.buildMPScreen(n),this.buildLobbyScreen(),this.buildSettingsScreen(n),this.buildHelpScreen(),this.buildNoteScreen(),this.buildDeathScreen(),this.buildWinScreen(),this.buildPauseScreen(),this.buildLoadingScreen()}screen(e,t){let n=document.createElement("div");return n.id="hv-"+e,n.className="hv-screen hv-hidden",t&&t.forEach(s=>n.appendChild(s)),this.root.appendChild(n),this.screens[e]=n,n}show(e){for(let t of Object.keys(this.screens))this.screens[t].classList.toggle("hv-hidden",t!==e);e&&this.input.exitLock()}buildMainScreen(e){let t=!!localStorage.getItem("hv_sp_v1"),n=document.createElement("div");n.style.textAlign="center";let s=document.createElement("h1");s.className="hv-title",s.innerHTML='HOLLOW <span class="red">VALE</span>';let r=document.createElement("div");r.className="hv-sub",r.textContent="they hear everything",n.append(s,r);let o=document.createElement("div");o.style.marginTop="34px";let a=Et("New Game",()=>{this.cb.onStartSP(!1)},!0),l=Et("Continue",()=>{this.cb.onStartSP(!0)},!1);t||l.classList.add("hv-hidden");let c=Et("Multiplayer",()=>{this.show("mp")}),h=Et("How to Play",()=>{this.show("help")}),d=Et("Settings",()=>{this.show("settings")});o.append(a,l,c,h,d),n.appendChild(o);let u=document.createElement("div");u.style.cssText="position:absolute;bottom:12px;font-size:10px;letter-spacing:0.2em;color:#4a453c;",u.textContent="V1.0 \u2014 SURVIVE THE SHEPHERD",this.screen("menu",[n,u]),this.screens.menu.classList.remove("hv-hidden")}buildMPScreen(e){let t=document.createElement("div");t.className="hv-panel";let n=document.createElement("div");n.className="hv-h2",n.textContent="Multiplayer";let s=document.createElement("input");s.className="hv-input",s.placeholder="Your name",s.value=e.playerName!=="Survivor"?e.playerName:"",s.maxLength=14;let r=Et("Create Room",()=>{let m=s.value.trim()||"Survivor";e.playerName=m,this.cb.onCreateRoom(m,this.screens.mp.dataset.mode||"coop")},!0),o=document.createElement("input");o.className="hv-input",o.placeholder="Room code (e.g. K7QF)",o.maxLength=6,o.style.textTransform="uppercase";let a=Et("Join Room",()=>{let m=s.value.trim()||"Survivor";e.playerName=m,this.cb.onJoinRoom(m,o.value.trim().toUpperCase())}),l=document.createElement("div");l.className="hv-row";let c=document.createElement("label");c.textContent="Room mode (host)";let h=document.createElement("select");h.className="hv-select",h.innerHTML='<option value="coop">Co-op \u2014 survive together</option><option value="versus">Shepherd vs Survivors</option>',h.onchange=()=>{this.screens.mp.dataset.mode=h.value},l.append(c,h);let d=document.createElement("div");d.style.cssText="font-size:11px;color:#8f1d1d;margin-top:8px;min-height:16px;letter-spacing:0.06em;",d.id="hv-mp-status";let u=Et("Back",()=>{this.show("menu"),this.cb.onLeaveRoom()});t.append(n,s,l,r,o,a,d,u),this.screen("mp",[t])}mpStatus(e){let t=document.getElementById("hv-mp-status");t&&(t.textContent=e)}buildLobbyScreen(){let e=document.createElement("div");e.className="hv-panel",e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.textContent="Room Lobby";let n=document.createElement("div");n.className="hv-mode-tag",n.textContent="CO-OP",n.style.margin="0 auto",this.lobbyModeEl=n;let s=document.createElement("div");s.id="hv-lobby-code",this.lobbyCodeEl=s;let r=document.createElement("div");r.style.cssText="font-size:11px;color:#6f695e;letter-spacing:0.1em;",r.textContent="share this code \u2014 friends join from Multiplayer";let o=document.createElement("div");o.className="hv-players",this.lobbyListEl=o;let a=Et("Begin the Night",()=>this.cb.onStartGame(),!0);this.lobbyStartBtn=a;let l=Et("Leave",()=>{this.cb.onLeaveRoom(),this.show("menu")});e.append(t,n,s,r,o,a,l),this.screen("lobby",[e])}lobbyUpdate(e){this.lobbyCodeEl&&(this.lobbyCodeEl.textContent=e.code),this.lobbyModeEl&&(this.lobbyModeEl.textContent=e.mode==="versus"?"SHEPHERD VS SURVIVORS":"CO-OP"),this.lobbyListEl&&(this.lobbyListEl.innerHTML="",e.players.forEach(t=>{let n=document.createElement("div");n.className="hv-player-row",n.innerHTML=`<span>${t.isHost?"\u2302 ":"\xB7 "}${Gi(t.name)}</span><span style="color:#5f594e;">${t.isHost?"HOST":"ready"}</span>`,this.lobbyListEl.appendChild(n)})),this.lobbyStartBtn&&(this.lobbyStartBtn.disabled=!e.isHost||e.players.length<1)}buildSettingsScreen(e){let t=document.createElement("div");t.className="hv-panel";let n=document.createElement("div");n.className="hv-h2",n.textContent="Settings",t.appendChild(n);let s=()=>this.cb.onSettingsChanged(kt({},e));As(t,"Quality",Rc(["low","medium","high"],e.quality,c=>{e.quality=c,s()})),As(t,"Camera",Rc(["first","third"],e.camMode,c=>{e.camMode=c,s()})),As(t,"Touch controls",Rc(["auto","on","off"],e.showTouch,c=>{e.showTouch=c,this.applyTouchSetting(e),s()})),As(t,"Sensitivity",ld(.3,2.5,e.sensitivity,c=>{e.sensitivity=c,s()})),As(t,"Volume",ld(0,1,e.volume,c=>{e.volume=c,s()})),As(t,"Invert Y",C_(e.invertY,c=>{e.invertY=c,s()}));let r=document.createElement("div");r.className="hv-row",r.style.flexDirection="column",r.style.alignItems="stretch";let o=document.createElement("label");o.textContent="Multiplayer server (blank = built-in)",o.style.marginBottom="6px";let a=document.createElement("input");a.className="hv-input",a.placeholder="ws://192.168.x.x:8787 or leave empty",a.value=e.serverUrl,a.onchange=()=>{e.serverUrl=a.value.trim(),s()},r.append(o,a),t.appendChild(r);let l=Et("Back",()=>this.show(this._returnScreen||"menu"));t.appendChild(l),this.screen("settings",[t])}buildHelpScreen(){let e=document.createElement("div");e.className="hv-panel";let t=document.createElement("div");t.className="hv-h2",t.textContent="How to Play",e.appendChild(t);let n=document.createElement("div");n.style.cssText="font-size:13px;line-height:2.1;color:#a89f8c;",n.innerHTML=[["W A S D","move"],["MOUSE","look"],["SHIFT","sprint (loud!)"],["C","crouch (quiet)"],["E","interact / pick up"],["LMB","attack / shoot"],["R","reload"],["F","torch"],["Q","throw noise grenade"],["H","heal (bandage / pills)"],["V","switch 1st / 3rd person"],["1 2 3","knife / revolver / rifle"],["ESC","pause"]].map(o=>`<span class="hv-kbd">${o[0]}</span> ${o[1]}`).join("<br>"),e.appendChild(n);let s=document.createElement("div");s.style.cssText="margin-top:14px;font-size:12px;color:#7d766a;line-height:1.8;font-style:italic;",s.innerHTML="\u2022 The Shepherd hunts by sound. Sprinting screams through the night.<br>\u2022 Your torch betrays you in the dark \u2014 but total darkness feeds the Dread.<br>\u2022 Gunshots stagger him. The old rifle drops him to his knees.<br>\u2022 In Co-op, revive the fallen before the night takes them.",e.appendChild(s);let r=Et("Back",()=>this.show("menu"));e.appendChild(r),this.screen("help",[e])}buildNoteScreen(){let e=document.createElement("div");e.className="hv-note-text";let t=Et("Put away",()=>{this.show(null);let n=this.noteCloseCb;this.noteCloseCb=null,n&&n()});t.style.marginTop="18px",this.screen("note",[e,t])}showNote(e,t){let s=this.screens.note.querySelector(".hv-note-text");s.innerHTML=`<div class="hv-note-title">${Gi(e.title)}</div>${Gi(e.text).replace(/\n/g,"<br>")}`,this.noteCloseCb=t,this.show("note")}buildDeathScreen(){let e=document.createElement("div");e.className="hv-death",e.style.textAlign="center",e.style.justifyContent="center";let t=document.createElement("h1");t.className="hv-title",t.textContent="TAKEN";let n=document.createElement("div");n.className="hv-sub",n.textContent="the bell tolls for you";let s=document.createElement("div");s.style.marginTop="30px";let r=Et("Rise Again",()=>{this.show(null),this.cb.onRespawn()},!0);r.id="hv-respawn-btn";let o=Et("Give Up",()=>this.cb.onQuitToMenu());s.append(r,o),e.append(t,n,s),this.screens.death=this.screen("death",[e]),this.screens.death.classList.add("hv-death")}buildWinScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("h1");t.className="hv-title",t.innerHTML='YOU <span class="red">ESCAPED</span>';let n=document.createElement("div");n.className="hv-sub",n.id="hv-win-sub",n.textContent="the curse is broken... for now";let s=document.createElement("div");s.id="hv-win-stats",s.style.cssText="margin-top:20px;font-size:13px;color:#8f887a;line-height:2;letter-spacing:0.08em;";let r=Et("Main Menu",()=>this.cb.onQuitToMenu(),!0);r.style.margin="26px auto 0",e.append(t,n,s,r),this.screen("win",[e])}buildPauseScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("div");t.className="hv-h2",t.style.border="none",t.textContent="Paused";let n=Et("Resume",()=>{this.show(null),this.cb.onResume()},!0),s=Et("Controls",()=>{this._returnScreen="pause",this.show("help")}),r=Et("Settings",()=>{this._returnScreen="pause",this.show("settings")}),o=Et("Quit to Menu",()=>this.cb.onQuitToMenu());e.append(t,n,s,r,o),this.screen("pause",[e])}buildLoadingScreen(){let e=document.createElement("div");e.style.textAlign="center";let t=document.createElement("div");t.className="hv-title",t.style.fontSize="clamp(30px, 6vw, 60px)",t.textContent="HOLLOW VALE";let n=document.createElement("div");n.className="hv-loadingbar";let s=document.createElement("i");s.id="hv-load-fill",n.appendChild(s);let r=document.createElement("div");r.className="hv-tip",r.id="hv-load-tip",r.textContent="the village remembers",e.append(t,n,r),this.screen("loading",[e])}loading(e,t){let n=document.getElementById("hv-load-fill");if(n&&(n.style.width=Math.round(e*100)+"%"),t){let s=document.getElementById("hv-load-tip");s&&(s.textContent=t)}}showWin(e,t){let n=document.getElementById("hv-win-stats");if(n&&(n.innerHTML=e),t){let s=document.getElementById("hv-win-sub");s&&(s.textContent=t)}this.show("win")}showDeath(e){let t=document.getElementById("hv-respawn-btn");t&&t.classList.toggle("hv-hidden",!e),this.show("death")}setHUDEnabled(e){this.hud.classList.toggle("hv-hidden",!e),e?this.applyTouchSetting(this._settings):this.touchWrap.classList.add("hv-hidden")}updateHUD(e,t,n){this.bars.hp.style.width=e.health+"%",this.bars.st.style.width=e.stamina+"%",this.bars.fe.style.width=e.fear+"%",this.bars.ba.style.width=e.battery+"%",this.vignette.style.opacity=String(Math.max(e.fear/145,e.health<35?.35:0));let s=t.objectiveText();this.objMain.textContent=n.isMonster?"Hunt them all before dawn":s.main,this.objSides.innerHTML=n.isMonster?"":s.sides.map(o=>Gi(o)).join("<br>");let r=[];r.push({key:"knife",label:"1 KNIFE",cnt:null}),e.hasWeapon("pistol")&&r.push({key:"pistol",label:"2 REVOLVER",cnt:String(e.mag.pistol)+"/"+(e.inv.ammo_pistol||0)}),e.hasWeapon("rifle")&&r.push({key:"rifle",label:"3 RIFLE",cnt:String(e.mag.rifle)+"/"+(e.inv.ammo_rifle||0)}),r.push({key:"bandage",label:"H BANDAGE",cnt:String(e.inv.bandage||0)}),r.push({key:"pills",label:"H PILLS",cnt:String(e.inv.pills||0)}),r.push({key:"grenade",label:"Q GRENADE",cnt:String(e.inv.grenade||0)}),this.hotbarEl.innerHTML="";for(let o of r){let a=document.createElement("div");a.className="hv-slot"+(e.current===o.key?" active":""),a.innerHTML=Gi(o.label)+(o.cnt!==null?`<span class="cnt">${Gi(o.cnt)}</span>`:""),this.hotbarEl.appendChild(a)}if(this.crosshair.style.display=e.current==="knife"?"none":"block",n.versus){this.timerEl.classList.remove("hv-hidden");let o=Math.floor((n.timeLeft||0)/60),a=Math.floor((n.timeLeft||0)%60);this.timerEl.textContent=`${o}:${String(a).padStart(2,"0")}`,this.roleEl.textContent=n.isMonster?"YOU ARE THE SHEPHERD":"SURVIVE"}else this.timerEl.classList.add("hv-hidden"),this.roleEl.textContent=n.coopTotal?`CO-OP \u2014 ${n.coopAlive}/${n.coopTotal} ALIVE`:""}prompt(e){e?(this.promptEl.textContent=e,this.promptEl.classList.remove("hv-hidden")):this.promptEl.classList.add("hv-hidden")}message(e,t=!1){var s;let n=document.createElement("div");for(n.className="hv-msg"+(t?" big":""),n.textContent=e,this.messagesEl.appendChild(n),setTimeout(()=>n.remove(),3500);this.messagesEl.children.length>4;)(s=this.messagesEl.firstChild)==null||s.remove()}subtitle(e,t=4){this.subtitleEl.textContent=e,this.subtitleTimer=t}flashDamage(){this.damageEl.style.opacity="0.9",setTimeout(()=>{this.damageEl.style.opacity="0"},240)}fadeIn(){this.fadeEl.style.opacity="0"}fadeOut(){this.fadeEl.style.opacity="1"}setTeammates(e){this.teammatesEl.innerHTML=e.map(t=>`<div class="hv-mate">${t.downed?"\u2620":t.dead?"\u271D":"\u2022"} ${Gi(t.name)}<span class="mbar"><i style="width:${Math.max(0,t.hp)}%;${t.downed?"background:#8f1d1d":""}"></i></span></div>`).join("")}update(e){this.subtitleTimer>0&&(this.subtitleTimer-=e,this.subtitleTimer<=0&&(this.subtitleEl.textContent=""))}applyTouchSetting(e){let t=e.showTouch==="on"||e.showTouch!=="off"&&(matchMedia("(pointer: coarse)").matches||"ontouchstart"in window);this.touchEnabled=t,this.touchWrap.classList.toggle("hv-hidden",!t),t||(this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"))}refreshTouch(e){this.applyTouchSetting(e)}bindTouch(e){this.applyTouchSetting(e);let t=-1,n={x:0,y:0},s=52,r=document.createElement("div");r.className="zone",r.style.cssText="left:0;bottom:0;width:45%;height:70%;",r.addEventListener("touchstart",b=>{b.preventDefault();let f=b.changedTouches[0];t>=0||(t=f.identifier,n.x=f.clientX,n.y=f.clientY,this.stickBase.classList.remove("hv-hidden"),this.stickNub.classList.remove("hv-hidden"),this.stickBase.style.left=f.clientX-60+"px",this.stickBase.style.top=f.clientY-60+"px",this.stickNub.style.left=f.clientX-26+"px",this.stickNub.style.top=f.clientY-26+"px")},{passive:!1}),r.addEventListener("touchmove",b=>{b.preventDefault();for(let f of Array.from(b.changedTouches)){if(f.identifier!==t)continue;let p=f.clientX-n.x,S=f.clientY-n.y,A=Math.hypot(p,S);A>s&&(p=p/A*s,S=S/A*s),this.stickNub.style.left=n.x+p-26+"px",this.stickNub.style.top=n.y+S-26+"px",this.input.touchMoveVec(p/s,S/s)}},{passive:!1});let o=b=>{for(let f of Array.from(b.changedTouches))f.identifier===t&&(t=-1,this.input.touchMoveVec(0,0),this.stickBase.classList.add("hv-hidden"),this.stickNub.classList.add("hv-hidden"))};r.addEventListener("touchend",o),r.addEventListener("touchcancel",o),this.touchWrap.appendChild(r);let a=document.createElement("div");a.id="hv-lookzone";let l=-1,c={x:0,y:0};a.addEventListener("touchstart",b=>{b.preventDefault();let f=b.changedTouches[0];l>=0||(l=f.identifier,c.x=f.clientX,c.y=f.clientY)},{passive:!1}),a.addEventListener("touchmove",b=>{b.preventDefault();for(let f of Array.from(b.changedTouches))f.identifier===l&&(this.input.touchLook(f.clientX-c.x,f.clientY-c.y),c.x=f.clientX,c.y=f.clientY)},{passive:!1});let h=b=>{for(let f of Array.from(b.changedTouches))f.identifier===l&&(l=-1)};a.addEventListener("touchend",h),a.addEventListener("touchcancel",h),this.touchWrap.appendChild(a);let d=(b,f,p,S,A)=>{let M=document.createElement("button");return M.className="hv-tbtn",M.textContent=b,M.setAttribute("style",f),M.addEventListener("touchstart",w=>{w.preventDefault(),M.classList.add("on"),p(),A&&!A()&&M.classList.remove("on")},{passive:!1}),M.addEventListener("touchend",w=>{w.preventDefault(),A||M.classList.remove("on"),S&&S()},{passive:!1}),this.touchWrap.appendChild(M),M},u=b=>b;d("ATK","right:22px;bottom:86px;",()=>this.input.setButton("attack",!0),()=>this.input.setButton("attack",!1)),d("USE","right:100px;bottom:26px;",()=>this.input.setButton("interact",!0),()=>this.input.setButton("interact",!1)),d("RLD","right:24px;bottom:168px;",()=>this.input.setButton("reload",!0),()=>this.input.setButton("reload",!1)),d("TORCH","left:150px;top:18px;",()=>this.input.setButton("flash",!0));let m=d("CROUCH","left:20px;top:18px;",()=>{},void 0,()=>(this.crouchToggle=!this.crouchToggle,this.input.buttons.crouch=this.crouchToggle,this.crouchToggle));m.id="hv-crouch-btn";let _=d("RUN","left:150px;top:88px;",()=>{},void 0,()=>(this.sprintToggle=!this.sprintToggle,this.input.buttons.sprint=this.sprintToggle,this.sprintToggle));_.id="hv-sprint-btn",d("CAM","left:20px;top:88px;",()=>this.input.setButton("cam",!0)),d("BOMB","right:100px;bottom:110px;",()=>this.input.setButton("grenade",!0)),d("HEAL","right:22px;bottom:250px;",()=>this.input.setButton("heal",!0)),d("MENU","right:16px;top:14px;width:44px;height:36px;border-radius:4px;",()=>this.input.setButton("pause",!0))}resetSprintToggle(){this.sprintToggle=!1,this.crouchToggle=!1,this.input.buttons.sprint=!1,this.input.buttons.crouch=!1;let e=document.getElementById("hv-sprint-btn");e&&e.classList.remove("on");let t=document.getElementById("hv-crouch-btn");t&&t.classList.remove("on")}};function Et(i,e,t=!1){let n=document.createElement("button");return n.className="hv-btn"+(t?" primary":""),n.textContent=i,n.addEventListener("click",e),n}function As(i,e,t){let n=document.createElement("div");n.className="hv-row";let s=document.createElement("label");s.textContent=e,n.append(s,t),i.appendChild(n)}function Rc(i,e,t){let n=document.createElement("select");return n.className="hv-select",i.forEach(s=>{let r=document.createElement("option");r.value=s,r.textContent=s.toUpperCase(),s===e&&(r.selected=!0),n.appendChild(r)}),n.onchange=()=>t(n.value),n}function ld(i,e,t,n){let s=document.createElement("input");return s.type="range",s.className="hv-range",s.min=String(i),s.max=String(e),s.step="0.05",s.value=String(t),s.style.width="140px",s.oninput=()=>n(parseFloat(s.value)),s}function C_(i,e){let t=document.createElement("input");return t.type="checkbox",t.checked=i,t.style.accentColor="#8f1d1d",t.onchange=()=>e(t.checked),t}function Gi(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var In=Object.create(null);In.open="0";In.close="1";In.ping="2";In.pong="3";In.message="4";In.upgrade="5";In.noop="6";var Tr=Object.create(null);Object.keys(In).forEach(i=>{Tr[In[i]]=i});var wr={type:"error",data:"parser error"};var ud=typeof Blob=="function"||typeof Blob!="undefined"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",dd=typeof ArrayBuffer=="function",fd=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Ar=({type:i,data:e},t,n)=>ud&&e instanceof Blob?t?n(e):cd(e,n):dd&&(e instanceof ArrayBuffer||fd(e))?t?n(e):cd(new Blob([e]),n):n(In[i]+(e||"")),cd=(i,e)=>{let t=new FileReader;return t.onload=function(){let n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function hd(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}var Cc;function pd(i,e){if(ud&&i.data instanceof Blob)return i.data.arrayBuffer().then(hd).then(e);if(dd&&(i.data instanceof ArrayBuffer||fd(i.data)))return e(hd(i.data));Ar(i,!1,t=>{Cc||(Cc=new TextEncoder),e(Cc.encode(t))})}var md="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Rr=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(let i=0;i<md.length;i++)Rr[md.charCodeAt(i)]=i;var gd=i=>{let e=i.length*.75,t=i.length,n,s=0,r,o,a,l;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);let c=new ArrayBuffer(e),h=new Uint8Array(c);for(n=0;n<t;n+=4)r=Rr[i.charCodeAt(n)],o=Rr[i.charCodeAt(n+1)],a=Rr[i.charCodeAt(n+2)],l=Rr[i.charCodeAt(n+3)],h[s++]=r<<2|o>>4,h[s++]=(o&15)<<4|a>>2,h[s++]=(a&3)<<6|l&63;return c};var P_=typeof ArrayBuffer=="function",Cr=(i,e)=>{if(typeof i!="string")return{type:"message",data:_d(i,e)};let t=i.charAt(0);return t==="b"?{type:"message",data:I_(i.substring(1),e)}:Tr[t]?i.length>1?{type:Tr[t],data:i.substring(1)}:{type:Tr[t]}:wr},I_=(i,e)=>{if(P_){let t=gd(i);return _d(t,e)}else return{base64:!0,data:i}},_d=(i,e)=>e==="blob"?i instanceof Blob?i:new Blob([i]):i instanceof ArrayBuffer?i:i.buffer;var xd="",yd=(i,e)=>{let t=i.length,n=new Array(t),s=0;i.forEach((r,o)=>{Ar(r,!1,a=>{n[o]=a,++s===t&&e(n.join(xd))})})},vd=(i,e)=>{let t=i.split(xd),n=[];for(let s=0;s<t.length;s++){let r=Cr(t[s],e);if(n.push(r),r.type==="error")break}return n};function bd(){return new TransformStream({transform(i,e){pd(i,t=>{let n=t.length,s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);let r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);let r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}var Pc;function za(i){return i.reduce((e,t)=>e+t.length,0)}function Va(i,e){if(i[0].length===e)return i.shift();let t=new Uint8Array(e),n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function Sd(i,e){Pc||(Pc=new TextDecoder);let t=[],n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(za(t)<1)break;let l=Va(t,1);r=(l[0]&128)===128,s=l[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(za(t)<2)break;let l=Va(t,2);s=new DataView(l.buffer,l.byteOffset,l.length).getUint16(0),n=3}else if(n===2){if(za(t)<8)break;let l=Va(t,8),c=new DataView(l.buffer,l.byteOffset,l.length),h=c.getUint32(0);if(h>Math.pow(2,21)-1){a.enqueue(wr);break}s=h*Math.pow(2,32)+c.getUint32(4),n=3}else{if(za(t)<s)break;let l=Va(t,s);a.enqueue(Cr(r?l:Pc.decode(l),e)),n=0}if(s===0||s>i){a.enqueue(wr);break}}}})}var Ic=4;function ht(i){if(i)return L_(i)}function L_(i){for(var e in ht.prototype)i[e]=ht.prototype[e];return i}ht.prototype.on=ht.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};ht.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};ht.prototype.off=ht.prototype.removeListener=ht.prototype.removeAllListeners=ht.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};ht.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};ht.prototype.emitReserved=ht.prototype.emit;ht.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};ht.prototype.hasListeners=function(i){return!!this.listeners(i).length};var oi=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),nn=typeof self!="undefined"?self:typeof window!="undefined"?window:Function("return this")(),Md="arraybuffer";function Ga(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}var N_=nn.setTimeout,D_=nn.clearTimeout;function ai(i,e){e.useNativeTimers?(i.setTimeoutFn=N_.bind(nn),i.clearTimeoutFn=D_.bind(nn)):(i.setTimeoutFn=nn.setTimeout.bind(nn),i.clearTimeoutFn=nn.clearTimeout.bind(nn))}var U_=1.33;function Ed(i){return typeof i=="string"?O_(i):Math.ceil((i.byteLength||i.size)*U_)}function O_(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Wa(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Td(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function wd(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}var Xa=class extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}},li=class extends ht{constructor(e){super(),this.writable=!1,ai(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new Xa(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){let t=Cr(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){let e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){let t=Td(e);return t.length?"?"+t:""}};var Pr=class extends li{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";let t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){let t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};vd(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){let e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,yd(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Wa()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}};var Ad=!1;try{Ad=typeof XMLHttpRequest!="undefined"&&"withCredentials"in new XMLHttpRequest}catch(i){}var Rd=Ad;function F_(){}var Lc=class extends Pr{constructor(e){if(super(e),typeof location!="undefined"){let t=location.protocol==="https:",n=location.port;n||(n=t?"443":"80"),this.xd=typeof location!="undefined"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){let n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){let e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}},Mi=class i extends ht{constructor(e,t,n){super(),this.createRequest=e,ai(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;let t=Ga(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;let n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch(s){}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(s){}try{n.setRequestHeader("Accept","*/*")}catch(s){}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document!="undefined"&&(this._index=i.requestsCount++,i.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr=="undefined"||this._xhr===null)){if(this._xhr.onreadystatechange=F_,e)try{this._xhr.abort()}catch(t){}typeof document!="undefined"&&delete i.requests[this._index],this._xhr=null}}_onLoad(){let e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}};Mi.requestsCount=0;Mi.requests={};if(typeof document!="undefined"){if(typeof attachEvent=="function")attachEvent("onunload",Cd);else if(typeof addEventListener=="function"){let i="onpagehide"in nn?"pagehide":"unload";addEventListener(i,Cd,!1)}}function Cd(){for(let i in Mi.requests)Mi.requests.hasOwnProperty(i)&&Mi.requests[i].abort()}var k_=(function(){let i=Pd({xdomain:!1});return i&&i.responseType!==null})(),Ei=class extends Lc{constructor(e){super(e);let t=e&&e.forceBase64;this.supportsBinary=k_&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mi(Pd,this.uri(),e)}};function Pd(i){let e=i.xdomain;try{if(typeof XMLHttpRequest!="undefined"&&(!e||Rd))return new XMLHttpRequest}catch(t){}if(!e)try{return new nn[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(t){}}var Id=typeof navigator!="undefined"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative",Dc=class extends li{get name(){return"websocket"}doOpen(){let e=this.uri(),t=this.opts.protocols,n=Id?{}:Ga(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],s=t===e.length-1;Ar(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch(o){}s&&oi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws!="undefined"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){let e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Wa()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}},Nc=nn.WebSocket||nn.MozWebSocket,Ti=class extends Dc{createSocket(e,t,n){return Id?new Nc(e,t,n):t?new Nc(e,t):new Nc(e)}doWrite(e,t){this.ws.send(t)}};var Rs=class extends li{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{let t=Sd(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=bd();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();let r=()=>{n.read().then(({done:a,value:l})=>{a||(this.onPacket(l),r())}).catch(a=>{})};r();let o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){let n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&oi(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}};var Uc={websocket:Ti,webtransport:Rs,polling:Ei};var B_=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,H_=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Cs(i){if(i.length>8e3)throw"URI too long";let e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=B_.exec(i||""),r={},o=14;for(;o--;)r[H_[o]]=s[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=z_(r,r.path),r.queryKey=V_(r,r.query),r}function z_(i,e){let t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function V_(i,e){let t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}var Oc=typeof addEventListener=="function"&&typeof removeEventListener=="function",qa=[];Oc&&addEventListener("offline",()=>{qa.forEach(i=>i())},!1);var Wi=class i extends ht{constructor(e,t={}){var n,s;if(super(),this.binaryType=Md,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){let r=Cs(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Cs(t.host).host);if(ai(this,t),this.secure=t.secure!=null?t.secure:typeof location!="undefined"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location!="undefined"?location.hostname:"localhost"),this.port=t.port||(typeof location!="undefined"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((n=t.transports)===null||n===void 0)&&n.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=t.transportImplementations)!==null&&s!==void 0?s:t.transports).forEach(r=>{let o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=Uc),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=wd(this.opts.query)),Oc&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},qa.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){let t=Object.assign({},this.opts.query);t.EIO=Ic,t.transport=e,this.id&&(t.sid=this.id);let n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}let e=this.opts.rememberUpgrade&&i.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";let t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),n=!1;i.priorWebsocketSuccess=!1;let s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",d=>{if(!n)if(d.type==="pong"&&d.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;i.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(h(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{let u=new Error("probe error");u.transport=t.name,this.emitReserved("upgradeError",u)}}))};function r(){n||(n=!0,h(),t.close(),t=null)}let o=d=>{let u=new Error("probe error: "+d);u.transport=t.name,r(),this.emitReserved("upgradeError",u)};function a(){o("transport closed")}function l(){o("socket closed")}function c(d){t&&d.name!==t.name&&r()}let h=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",l),this.off("upgrading",c)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",l),this.once("upgrading",c),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",i.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":let t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);let e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){let s=this.writeBuffer[n].data;if(s&&(t+=Ed(s)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;let e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,oi(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;let r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){let e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(i.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),Oc&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){let n=qa.indexOf(this._offlineEventListener);n!==-1&&qa.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){let t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Wi.protocol=Ic;var KS=Wi.protocol;function Ld(i,e="",t){let n=i;t=t||typeof location!="undefined"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t!="undefined"?i=t.protocol+"//"+i:i="https://"+i),n=Cs(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";let r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}var zc={};$d(zc,{Decoder:()=>Bc,Encoder:()=>kc,PacketType:()=>ze,isPacketValid:()=>$_,protocol:()=>Fd});var W_=typeof ArrayBuffer=="function",X_=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Nd=Object.prototype.toString,q_=typeof Blob=="function"||typeof Blob!="undefined"&&Nd.call(Blob)==="[object BlobConstructor]",Y_=typeof File=="function"||typeof File!="undefined"&&Nd.call(File)==="[object FileConstructor]";function Lr(i){return W_&&(i instanceof ArrayBuffer||X_(i))||q_&&i instanceof Blob||Y_&&i instanceof File}function Ir(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Ir(i[t]))return!0;return!1}if(Lr(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Ir(i.toJSON(),!0);for(let t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Ir(i[t]))return!0;return!1}function Dd(i){let e=[],t=i.data,n=i;return n.data=Ya(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Ya(i,e,t){if(!i)return i;if(Lr(i)){let n={_placeholder:!0,num:e.length};return e.push(i),n}else if(Array.isArray(i)){let n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=Ya(i[s],e);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!t)return Ya(i.toJSON(),e,!0);let n={};for(let s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=Ya(i[s],e));return n}return i}function Ud(i,e){return i.data=Fc(i.data,e),delete i.attachments,i}function Fc(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Fc(i[t],e);else if(typeof i=="object")for(let t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Fc(i[t],e));return i}var Od=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],Fd=5,ze;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(ze||(ze={}));var kc=class{constructor(e){this.replacer=e}encode(e){return(e.type===ze.EVENT||e.type===ze.ACK)&&Ir(e)?this.encodeAsBinary({type:e.type===ze.EVENT?ze.BINARY_EVENT:ze.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===ze.BINARY_EVENT||e.type===ze.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){let t=Dd(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}},Bc=class i extends ht{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);let n=t.type===ze.BINARY_EVENT;n||t.type===ze.BINARY_ACK?(t.type=n?ze.EVENT:ze.ACK,this.reconstructor=new Hc(t)):super.emitReserved("decoded",t)}else if(Lr(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0,n={type:Number(e.charAt(0))};if(ze[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===ze.BINARY_EVENT||n.type===ze.BINARY_ACK){let r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);let o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");let a=Number(o);if(!kd(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(t+1)==="/"){let r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";let s=e.charAt(t+1);if(s!==""&&Number(s)==s){let r=t+1;for(;++t;){let o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){let r=this.tryParse(e.substr(t));if(i.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch(t){return!1}}static isPayloadValid(e,t){switch(e){case ze.CONNECT:return Za(t);case ze.DISCONNECT:return t===void 0;case ze.CONNECT_ERROR:return typeof t=="string"||Za(t);case ze.EVENT:case ze.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&Od.indexOf(t[0])===-1);case ze.ACK:case ze.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}},Hc=class{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){let t=Ud(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}};function Z_(i){return typeof i=="string"}var kd=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function J_(i){return i===void 0||kd(i)}function Za(i){return Object.prototype.toString.call(i)==="[object Object]"}function K_(i,e){switch(i){case ze.CONNECT:return e===void 0||Za(e);case ze.DISCONNECT:return e===void 0;case ze.EVENT:return Array.isArray(e)&&(typeof e[0]=="number"||typeof e[0]=="string"&&Od.indexOf(e[0])===-1);case ze.ACK:return Array.isArray(e);case ze.CONNECT_ERROR:return typeof e=="string"||Za(e);default:return!1}}function $_(i){return Z_(i.nsp)&&J_(i.id)&&K_(i.type,i.data)}function pn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}var Q_=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1}),Ps=class extends ht{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let e=this.io;this.subs=[pn(e,"open",this.onopen.bind(this)),pn(e,"packet",this.onpacket.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,s,r;if(Q_.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;let o={type:ze.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){let h=this.ids++,d=t.pop();this._registerAckCallback(h,d),o.id=h}let a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,l=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(l?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;let s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,s)=>{let r=(o,a)=>o?s(o):n(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());let n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;let t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:ze.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){let n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case ze.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case ze.EVENT:case ze.BINARY_EVENT:this.onevent(e);break;case ze.ACK:case ze.BINARY_ACK:this.onack(e);break;case ze.DISCONNECT:this.ondisconnect();break;case ze.CONNECT_ERROR:this.destroy();let n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){let t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){let t=this._anyListeners.slice();for(let n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){let t=this,n=!1;return function(...s){n||(n=!0,t.packet({type:ze.ACK,id:e,data:s}))}}onack(e){let t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:ze.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){let t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){let t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let t=this._anyOutgoingListeners.slice();for(let n of t)n.apply(this,e.data)}}};function Xi(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}Xi.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=(Math.floor(e*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};Xi.prototype.reset=function(){this.attempts=0};Xi.prototype.setMin=function(i){this.ms=i};Xi.prototype.setMax=function(i){this.max=i};Xi.prototype.setJitter=function(i){this.jitter=i};var Is=class extends ht{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,ai(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new Xi({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;let s=t.parser||zc;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Wi(this.uri,this.opts);let t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;let s=pn(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=pn(t,"error",r);if(this._timeout!==!1){let a=this._timeout,l=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&l.unref(),this.subs.push(()=>{this.clearTimeoutFn(l)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let e=this.engine;this.subs.push(pn(e,"ping",this.onping.bind(this)),pn(e,"data",this.ondata.bind(this)),pn(e,"error",this.onerror.bind(this)),pn(e,"close",this.onclose.bind(this)),pn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){oi(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new Ps(this,e,t),this.nsps[e]=n),n}_destroy(e){let t=Object.keys(this.nsps);for(let n of t)if(this.nsps[n].active)return;this._close()}_packet(e){let t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let t=this.backoff.duration();this._reconnecting=!0;let n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){let e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}};var Nr={};function Dr(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};let t=Ld(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,o=Nr[s]&&r in Nr[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o,l;return a?l=new Is(n,e):(Nr[s]||(Nr[s]=new Is(n,e)),l=Nr[s]),t.query&&!e.query&&(e.query=t.queryKey),l.socket(t.path,e)}Object.assign(Dr,{Manager:Is,Socket:Ps,io:Dr,connect:Dr});var Ja=class{constructor(){this.socket=null;this.connected=!1;this.connecting=!1;this.room=null;this.isShepherd=!1;this.myColor=8030874;this.remotes=new Map;this.scene=null;this.lastSnap=null;this.onLobby=null;this.onError=null;this.onStart=null;this.onSnap=null;this.onQuestEvent=null;this.onGameEvent=null;this.onDisconnected=null}setScene(e){this.scene=e}url(e){if(e.serverUrl){let t=e.serverUrl.trim();return!/^wss?:\/\//.test(t)&&!/^https?:\/\//.test(t)&&(t="ws://"+t),{uri:t,opts:{transports:["websocket"],path:"/socket.io",reconnection:!0,reconnectionAttempts:6}}}return{uri:"/?XTransformPort=3003",opts:{transports:["websocket","polling"],forceNew:!0,reconnection:!0,reconnectionAttempts:6,reconnectionDelay:1e3,timeout:1e4}}}connect(e){return this.connected?Promise.resolve():this.connecting?new Promise((t,n)=>{let s=setInterval(()=>{this.connected?(clearInterval(s),t()):this.connecting||(clearInterval(s),n(new Error("failed")))},200);setTimeout(()=>{clearInterval(s),n(new Error("timeout"))},12e3)}):(this.connecting=!0,new Promise((t,n)=>{let{uri:s,opts:r}=this.url(e);this.socket=Dr(s,r);let o=setTimeout(()=>{this.connecting=!1,n(new Error("Connection timeout"))},12e3);this.socket.on("connect",()=>{clearTimeout(o),this.connected=!0,this.connecting=!1,t()}),this.socket.on("connect_error",a=>{this.connected||(clearTimeout(o),this.connecting=!1,n(a))}),this.socket.on("disconnect",()=>{this.connected=!1,this.onDisconnected&&this.onDisconnected()}),this.socket.on("room:update",a=>{this.room=a,this.onLobby&&this.onLobby(a)}),this.socket.on("room:error",a=>{this.onError&&this.onError(a.message)}),this.socket.on("game:start",a=>{var l;this.room=a,this.isShepherd=a.shepherdId===((l=this.socket)==null?void 0:l.id),this.myColor=8030874,this.onStart&&this.onStart(a)}),this.socket.on("snap",a=>{this.lastSnap=a,this.onSnap&&this.onSnap(a)}),this.socket.on("qevent",a=>{this.onQuestEvent&&this.onQuestEvent(a.event,a.data)}),this.socket.on("gevent",a=>{this.onGameEvent&&this.onGameEvent(a.event,a.data)})}))}create(e,t){var n;(n=this.socket)==null||n.emit("room:create",{name:e,mode:t})}join(e,t){var n;(n=this.socket)==null||n.emit("room:join",{name:e,code:t})}leave(){var e;(e=this.socket)==null||e.emit("room:leave"),this.clearRemotes(),this.room=null}start(){var e;(e=this.socket)==null||e.emit("game:start")}sendState(e){var t,n;this.connected&&((t=this.room)!=null&&t.started)&&((n=this.socket)==null||n.emit("pstate",e))}sendMonster(e){var t,n;this.connected&&((t=this.room)!=null&&t.started)&&((n=this.socket)==null||n.emit("mstate",e))}sendNoise(e,t,n){var s,r;this.connected&&((s=this.room)!=null&&s.started)&&((r=this.socket)==null||r.emit("noise",{x:e,z:t,radius:n}))}sendQuest(e,t){var n,s;this.connected&&((n=this.room)!=null&&n.started)&&((s=this.socket)==null||s.emit("qevent",{event:e,data:t}))}sendGame(e,t){var n,s;this.connected&&((n=this.room)!=null&&n.started)&&((s=this.socket)==null||s.emit("gevent",{event:e,data:t}))}ensureRemote(e){let t=this.remotes.get(e.id);if(t)return t;let n=new wt,s=new Fe({color:5919820,roughness:.9}),r=new Fe({color:e.color,roughness:.95}),o=new Ee(new Dt(.26,.7,4,8),r);o.position.y=1.05,n.add(o);let a=new Ee(new en(.17,10,8),s);a.position.y=1.68,n.add(a);let l=new Ee(new Dt(.09,.5,3,6),s);l.position.set(-.12,.35,0);let c=l.clone();c.position.x=.12,n.add(l,c);let h=new Ee(new Yt(.03,.035,.3,6),new Fe({color:3355440}));return h.position.set(.3,1.1,.15),h.rotation.x=Math.PI/2,n.add(h),this.scene&&this.scene.add(n),t={id:e.id,name:e.name,color:e.color,group:n,head:a,tx:e.x,tz:e.z,tyaw:e.yaw,tpitch:e.pitch,moving:e.moving,crouch:e.crouch,downed:e.downed,dead:e.dead,flash:e.flash,walkT:0},this.remotes.set(e.id,t),t}clearRemotes(){for(let[,e]of this.remotes)this.scene&&this.scene.remove(e.group);this.remotes.clear()}applySnapshot(e){let t=new Set;for(let n of e.players){t.add(n.id);let s=this.ensureRemote(n);s.tx=n.x,s.tz=n.z,s.tyaw=n.yaw,s.tpitch=n.pitch,s.moving=n.moving,s.crouch=n.crouch,s.downed=n.downed,s.dead=n.dead,s.flash=n.flash,s.name=n.name}for(let[n,s]of this.remotes)t.has(n)||(this.scene&&this.scene.remove(s.group),this.remotes.delete(n))}update(e){for(let[,t]of this.remotes){let n=t.group,s=t.tx-n.position.x,r=t.tz-n.position.z,o=Math.min(1,e*10);n.position.x+=s*o,n.position.z+=r*o,n.rotation.y=t.tyaw+Math.PI,n.scale.y=t.crouch?.72:1,n.visible=!t.dead,t.downed?(n.rotation.x=Math.PI/2.2,n.position.y=.3):n.rotation.x=0,Math.hypot(s,r)>.01?(t.walkT+=e*9,n.children[2].rotation.x=Math.sin(t.walkT)*.55,n.children[3].rotation.x=-Math.sin(t.walkT)*.55):(n.children[2].rotation.x*=.8,n.children[3].rotation.x*=.8)}}remoteList(){let e=[];for(let[t,n]of this.remotes)e.push({id:t,pos:new R(n.tx,1,n.tz)});return e}};var Bd=["they hear everything","crouch to move in silence","the torch is a beacon \u2014 and a comfort","gunshots buy seconds, not safety","three flames, three calls","the bell remembers who drowned it"],Vc=class{constructor(e){this.scene=new Zs;this.audio=new Pa;this.input=new Ia;this.net=new Ja;this.world=null;this.player=null;this.shepherd=null;this.husks=[];this.quests=null;this.grenades=[];this.halluc=null;this.hallucT=0;this.whisperT=8;this.state="menu";this.mode="sp";this.camMode="third";this.timeLeft=720;this.sendT=0;this.playTime=0;this.monsterHp=500;this.netPlayerId="p0";this.isHost=!1;this.lastStageRage=-1;this.downedBleed=0;this.respawnTimer=-1;this.escapedSent=!1;this.gameEnded=!1;this.pendingNote=null;this.loop=()=>{requestAnimationFrame(this.loop);let e=performance.now(),t=(e-this._last)/1e3;this._last=e;let n=Math.min(.1,t);this.ui.update(n),this.audio.update(n),this.autoPerf(t),this.state==="playing"&&this.player&&this.world&&this.quests&&(this.playTime+=n,this.step(n)),this.player?this.renderer.render(this.scene,this.player.camera):this.renderer.render(this.scene,this.menuCam)};this._last=performance.now();this.menuCam=new Tt(60,1,.1,400);this.perfEma=60;this.perfTier=0;this.perfT=0;this._attackHeld=!1;this.container=e,this.settings=ed(),this.camMode=this.settings.camMode,this.renderer=new Aa({antialias:this.settings.quality!=="low",powerPreference:"high-performance"}),this.applyQuality(),e.appendChild(this.renderer.domElement),this.scene.background=new He(263692),this.scene.fog=new ps(263692,.032),this.input.attach(this.renderer.domElement),this.net.setScene(this.scene),od(this.scene),this.ui=new Ha(e,this.input,this.settings,{onStartSP:t=>this.startSP(t),onCreateRoom:(t,n)=>this.createRoom(t,n),onJoinRoom:(t,n)=>this.joinRoom(t,n),onStartGame:()=>this.net.start(),onLeaveRoom:()=>this.net.leave(),onRespawn:()=>this.respawn(),onQuitToMenu:()=>this.quitToMenu(),onResume:()=>this.resume(),onSettingsChanged:t=>this.applySettings(t)}),this.ui.onSprintToggle=()=>{},this.input.onKeyExtra=t=>this.onKey(t),window.addEventListener("resize",()=>this.resize()),document.addEventListener("pointerlockchange",()=>{!document.pointerLockElement&&this.state==="playing"&&!this.isTouch()&&this.pause()}),window.addEventListener("blur",()=>{this.state==="playing"&&this.pause()}),this.renderer.domElement.addEventListener("click",()=>{this.audio.ensure(),this.state==="playing"&&!this.isTouch()&&this.input.requestLock()}),this.resize(),this.loop()}isTouch(){return matchMedia("(pointer: coarse)").matches||"ontouchstart"in window}applyQuality(){let e=this.settings.quality;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,e==="low"?1:e==="medium"?1.35:2)),this.renderer.shadowMap.enabled=e==="high",this.renderer.shadowMap.type=Ui,this.renderer.toneMapping=dr,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Bt,this.resize()}resize(){let e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.player&&(this.player.camera.aspect=e/t,this.player.camera.updateProjectionMatrix())}applySettings(e){let t=e.quality!==this.settings.quality;this.settings=e,td(e),this.audio.setVolume(e.volume),this.camMode=e.camMode,this.ui.refreshTouch(e),t&&this.applyQuality()}onKey(e){if(e==="T_pause"&&this.state==="playing"){this.pause();return}if(this.state==="playing"&&this.player)switch(e){case"KeyE":case"T_interact":this.tryInteract();break;case"KeyR":case"T_reload":this.player&&this.player.reload(this.audio);break;case"KeyF":case"T_flash":this.player.toggleFlashlight(this.audio);break;case"KeyQ":case"T_grenade":this.throwGrenade();break;case"KeyH":case"T_heal":this.autoHeal();break;case"KeyV":case"T_cam":this.camMode=this.camMode==="first"?"third":"first";break;case"Digit1":this.switchWeapon("knife");break;case"Digit2":this.switchWeapon("pistol");break;case"Digit3":this.switchWeapon("rifle");break}}switchWeapon(e){!this.player||!this.player.hasWeapon(e)||this.player.current!==e&&(this.player.current=e,this.player.reloadT=0,this.audio.play("click",.4))}async startSP(e){var n,s,r,o;this.audio.ensure(),this.mode="sp",this.isHost=!0,this.ui.show("loading"),this.ui.loading(.05,Bd[Math.floor(Math.random()*Bd.length)]),await this.buildGame();let t=e?nd():null;e&&t?(this.player.pos.set((s=(n=t.pos)==null?void 0:n.x)!=null?s:0,0,(o=(r=t.pos)==null?void 0:r.z)!=null?o:52),this.player.inv=kt(kt({},this.player.inv),t.inventory),this.player.weapons=t.weapons.filter(a=>a==="knife"||a==="pistol"||a==="rifle"),this.player.weapons.length===0&&(this.player.weapons=["knife"]),this.quests.restore(Ds(kt({},t.flags),{notesRead:t.notes})),this.playTime=t.playTime||0,this.ui.message("Welcome back to Hollow Vale",!0)):(sd(),this.player.pos.set(0,0,52),this.ui.subtitle("Hollow Vale, 1897. The village answered a bell that never rang...",6)),this.beginPlay()}async createRoom(e,t){this.audio.ensure(),this.ui.mpStatus("Connecting to the night...");try{await this.net.connect(this.settings),this.net.create(e,t),this.ui.mpStatus("")}catch(n){this.ui.mpStatus("Cannot reach the server. Check the address in Settings.")}}async joinRoom(e,t){if(this.audio.ensure(),!t){this.ui.mpStatus("Enter a room code.");return}this.ui.mpStatus("Knocking on the door...");try{await this.net.connect(this.settings),this.net.join(e,t)}catch(n){this.ui.mpStatus("Cannot reach the server. Check the address in Settings.")}}async buildGame(){this.world&&(this.scene.remove(this.world.root),this.world=null);for(let t of this.husks)this.scene.remove(t.mesh());this.husks=[],this.shepherd&&(this.scene.remove(this.shepherd.mesh()),this.shepherd=null);for(let t of this.grenades)this.scene.remove(t.mesh);this.grenades=[],this.net.clearRemotes(),this.ui.loading(.3,"raising the houses..."),await Ka(),this.world=rd(this.scene,this.settings.quality),this.ui.loading(.62,"waking the dead..."),await Ka(),this.player=new La(this.scene),this.player.id=this.netPlayerId,this.player.name=this.settings.playerName,this.player.onNoise=(t,n)=>{var s;if(this.mode==="sp"||this.mode==="coop"&&this.isHost){(s=this.shepherd)==null||s.hear(t,n);for(let r of this.husks)r.hear(t,n)}else this.net.sendNoise(t.x,t.z,n)},this.player.onDamage=()=>{this.ui.flashDamage(),this.audio.play("flesh",.8),this.player&&this.player.downed&&(this.downedBleed=60,this.ui.message(this.mode==="versus"?"You are dying...":"You are down \u2014 crawl to a friend",!0))},this.shepherd=new Na(this.scene),this.shepherd.controlled=!1;for(let t of ad)this.husks.push(new Da({pos:t}));this.ui.loading(.85,"binding the curse..."),await Ka();let e={message:(t,n)=>this.ui.message(t,n),subtitle:(t,n)=>this.ui.subtitle(t,n),onNoise:(t,n)=>{var s;if(this.mode==="sp"||this.mode==="coop"&&this.isHost){(s=this.shepherd)==null||s.hear(t,n);for(let r of this.husks)r.hear(t,n)}else this.net.sendNoise(t.x,t.z,n)},onStage:t=>this.onStage(t),onNoteRead:t=>{this.pendingNote=t},onPickup:(t,n)=>this.onPickup(t,n),netEmit:(t,n)=>this.questEmit(t,n),isNet:()=>this.mode!=="sp"};this.quests=new Ba(this.world,e),this.quests.localPlayerRef=this.player,this.ui.loading(1,"ready..."),await Ka()}beginPlay(){this.state="playing",this.gameEnded=!1,this.escapedSent=!1,this.ui.show(null),this.ui.setHUDEnabled(!0),this.ui.fadeIn(),this.isTouch()||setTimeout(()=>this.input.requestLock(),60),this.timeLeft=720,this.mode==="versus"&&this.net.isShepherd?(this.shepherd.spawn(new R(0,0,-40)),this.shepherd.controlled=!0,this.shepherd.active=!0,this.shepherd.group.visible=!0,this.camMode="third",this.player.pos.set(0,0,-36),this.ui.message("You are THE SHEPHERD. Ring the bell one last time.",!0)):this.mode==="versus"?(this.shepherd.despawn(),this.player.pos.set(0,0,52),this.ui.message("Survive. The Shepherd walks tonight.",!0)):(this.player.pos.y=0,this.world.doors.get("church").locked,this.shepherd.despawn())}wireNet(){this.net.onLobby=e=>{var t;this.ui.show("lobby"),this.ui.lobbyUpdate(Ds(kt({},e),{isHost:((t=e.players[0])==null?void 0:t.isHost)||!1}))},this.net.onError=e=>this.ui.mpStatus(e),this.net.onStart=async e=>{var t,n;this.mode=e.mode==="versus"?"versus":"coop",this.isHost=((t=e.players[0])==null?void 0:t.isHost)||!1,this.netPlayerId=((n=this.net.socket)==null?void 0:n.id)||"p"+Math.floor(Math.random()*999),this.ui.show("loading"),this.ui.loading(.2,"summoning the others..."),await this.buildGame(),this.mode==="coop"&&(this.isHost=!0),this.mode==="versus"&&(this.isHost=!1),this.beginPlay()},this.net.onSnap=e=>this.applySnap(e),this.net.onQuestEvent=(e,t)=>{this.quests&&(this.quests.applyRemote(e,t),e==="give"&&this.player&&this.quests.giveToPlayer(this.player,t.items),e==="craft"&&(t.what==="rifle"&&this.ui.message("Someone crafted the Hunter's Rifle"),t.what==="remedy"&&this.ui.message("The remedy is brewed")))},this.net.onGameEvent=(e,t)=>this.applyGameEvent(e,t),this.net.onDisconnected=()=>{this.state==="playing"&&(this.ui.message("Connection lost \u2014 the night swallows you",!0),this.quitToMenu())}}applySnap(e){this.player&&(this.net.applySnapshot(e),e.monster&&this.shepherd&&(this.shepherd.netPos.set(e.monster.x,0,e.monster.z),this.shepherd.netYaw=e.monster.yaw,this.shepherd.group.visible=!0,this.shepherd.active=!0,this.shepherd.state=e.monster.state),typeof e.time=="number"&&(this.timeLeft=e.time))}applyGameEvent(e,t){switch(e){case"mhit":{t.target===this.netPlayerId&&this.player&&!this.player.downed&&this.monsterAttackLocal(t.dmg);break}case"revive":{t.target===this.netPlayerId&&this.player&&(this.player.downed=!1,this.player.dead=!1,this.player.health=40,this.ui.message("Your friend pulled you back from the dark",!0));break}case"died":{this.ui.message(`${t.name||"A friend"} was taken`);break}case"escaped":{this.gameEnded||this.endGame(!0,"A survivor slipped through the gate.");break}case"gameover":{this.gameEnded||t.winner==="monster"&&this.endGame(!1,t.text||"The Shepherd claimed the night.");break}case"noise":{if(this.mode==="coop"&&this.isHost&&this.shepherd){this.shepherd.hear(new R(t.x,0,t.z),t.radius);for(let n of this.husks)n.hear(new R(t.x,0,t.z),t.radius)}break}}}questEmit(e,t){switch(e){case"give":{this.player&&this.quests&&this.quests.giveToPlayer(this.player,t.items),this.net.sendQuest("give",t);break}case"craft":{t.what==="rifle"&&this.player&&(this.player.giveWeapon("rifle"),this.player.inv.rifle_stock=0,this.player.inv.rifle_barrel=0,this.player.inv.ammo_rifle=(this.player.inv.ammo_rifle||0)+6,this.switchWeapon("rifle")),this.net.sendQuest("craft",t);break}case"pickup":{this.net.sendQuest("pickup",t);break}default:this.net.sendQuest(e,t)}}onStage(e){this.mode==="sp"&&this.saveGame(),this.shepherd&&(this.mode==="sp"||this.mode==="coop"&&this.isHost)&&(e>=1&&!this.shepherd.active&&(this.shepherd.spawn(new R(24,0,30)),this.ui.subtitle("Something answered. The lantern light drifts between the houses...",6),this.audio.play("bell",.5)),this.shepherd.rage=et(e*.14,0,.85));let t={1:"CHAPTER II \u2014 THE CHURCH OF THE BACKWARDS BELL",2:"CHAPTER III \u2014 THREE FLAMES",3:"CHAPTER IV \u2014 THE DROWNED AMULET",4:"CHAPTER V \u2014 THE UNMAKING",5:"CHAPTER VI \u2014 RUN FOR THE GATE"};t[e]&&this.ui.message(t[e],!0)}onPickup(e,t){if(this.questEmit("pickup",{id:e}),this.player&&this.quests){let n={ammo_pistol:["ammo_pistol",6],ammo_rifle:["ammo_rifle",4],bandage:["bandage",1],pills:["pills",1],battery:["battery",1],grenade:["grenade",1],herb:["herb",1]};if(n[t]){let[s,r]=n[t];this.player.inv[s]=(this.player.inv[s]||0)+r,this.audio.play("pickup",.5)}else t==="church_key"||t==="iron_key"?(this.player.inv[t]=1,this.audio.play("pickup",.6)):t==="amulet"?(this.player.inv.amulet=1,this.audio.play("bell",.4)):this.audio.play("pickup",.4)}}tryInteract(){if(!this.player||!this.world||!this.quests||this.player.downed||this.mode==="versus"&&this.net.isShepherd)return;let e=this.player.pos,t=null;for(let n of this.world.interactables){if(!n.enabled||n.used)continue;let s=Math.hypot(n.pos.x-e.x,n.pos.z-e.z);s<n.radius&&(!t||s<t.d)&&(t={it:n,d:s})}if(t){if(this.mode!=="sp"){let n=this.net.remoteList().find(s=>{var o;let r=(o=this.net.lastSnap)==null?void 0:o.players.find(a=>a.id===s.id);return(r==null?void 0:r.downed)&&!r.dead});if(n&&Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<2.4){this.net.sendGame("revive",{target:n.id}),this.ui.message("Reviving...",!1);return}}this.audio.play("click",.3),t.it.onInteract(this.player)}}targets(){let e=[];if(!this.player)return e;this.shepherd&&this.shepherd.active&&!this.shepherd.controlled&&e.push({mesh:this.shepherd.mesh(),pos:()=>new R(this.shepherd.pos.x,1.55,this.shepherd.pos.z),onHit:(t,n)=>this.shepherd.onHit(t,n,this.audio,this.player.pos.clone(),this.player.yaw)});for(let t of this.husks)t.dead||e.push({mesh:t.mesh(),pos:()=>t.chest(),onHit:n=>t.onHit(n)});return e}doAttack(){var n;if(!this.player||this.state!=="playing"||this.player.downed)return;if(this.mode==="versus"&&this.net.isShepherd){this.shepherdAttack();return}let e=new R(0,0,-1).applyQuaternion(this.player.camera.quaternion),t=this.player.fire(this.audio,this.targets(),((n=this.world)==null?void 0:n.occluders)||[],e);if((t==="fired"||t==="melee")&&this.mode==="versus"&&this.shepherd&&this.shepherd.active&&this.shepherd.pos.distanceTo(this.player.pos)<40){let r=new R().subVectors(this.shepherd.pos,this.player.pos).normalize(),o=e.clone();r.dot(o)>.985&&this.net.sendGame("mdamage",{dmg:Tc[this.player.current].dmg})}}throwGrenade(){if(!this.player||this.player.downed)return;let e=this.player.throwGrenade(this.audio);if(!e)return;let t=new Ee(new en(.09,8,8),new Fe({color:12872250,emissive:6299648,emissiveIntensity:.5}));t.position.copy(e.pos),this.scene.add(t),this.grenades.push({mesh:t,vel:e.vel,t:0})}autoHeal(){this.player&&(this.player.health<60&&(this.player.inv.bandage||0)>0?this.player.useItem("bandage",this.audio):(this.player.inv.pills||0)>0?this.player.useItem("pills",this.audio):(this.player.inv.bandage||0)>0?this.player.useItem("bandage",this.audio):this.ui.message("Nothing left to ease the pain"))}monsterAttackLocal(e){var t;if(!(!this.player||this.player.dead)&&(this.audio.play("scare",.9),this.player.damage(e,!0),this.shepherd)){let n=new R().subVectors(this.player.pos,this.shepherd.pos).normalize();this.player.pos.addScaledVector(n,2.4),Vn(this.player.pos,.42,((t=this.world)==null?void 0:t.colliders)||[])}}shepherdAttack(){if(!(!this.shepherd||!this.player)){this.audio.play("knife",.6);for(let e of this.net.remoteList())e.pos.distanceTo(this.shepherd.pos)<2.2&&(this.net.sendGame("mhit",{target:e.id,dmg:30}),this.audio.play("flesh",.8))}}pause(){this.state==="playing"&&(this.state="paused",this.ui.show("pause"),this.input.exitLock(),this.mode==="sp"&&this.saveGame())}resume(){this.state="playing",this.ui.show(null),this.isTouch()||setTimeout(()=>this.input.requestLock(),50)}saveGame(){this.mode!=="sp"||!this.player||!this.quests||id({chapter:this.quests.state.stage,inventory:kt({},this.player.inv),weapons:[...this.player.weapons],notes:[...this.quests.state.notesRead],flags:kt({},this.quests.state),playTime:this.playTime,pos:{x:this.player.pos.x,z:this.player.pos.z}})}quitToMenu(){this.saveGame(),this.state="menu",this.mode="sp",this.ui.resetSprintToggle(),this.ui.setHUDEnabled(!1),this.ui.show("menu"),this.net.leave(),this.audio.danger=0,this.audio.setGrowl(0),this.player&&(this.scene.remove(this.player.camera),this.player=null),this.shepherd&&(this.scene.remove(this.shepherd.mesh()),this.shepherd=null);for(let e of this.husks)this.scene.remove(e.mesh());this.husks=[],this.world&&(this.scene.remove(this.world.root),this.world=null),this.quests=null,location.reload()}respawn(){this.player&&(this.player.downed=!1,this.player.dead=!1,this.player.health=50,this.player.fear=45,this.player.pos.set(0,0,-20),this.state="playing",this.ui.show(null),this.respawnTimer=-1)}endGame(e,t){var s,r,o,a,l,c;if(this.gameEnded)return;this.gameEnded=!0,this.state="win",this.audio.play(e?"win":"lose",.9),this.audio.setGrowl(0),this.input.exitLock();let n=[`Time in the vale: ${Math.floor(this.playTime/60)}m ${Math.floor(this.playTime%60)}s`,`Notes found: ${(r=(s=this.quests)==null?void 0:s.state.notesRead.length)!=null?r:0} / ${ka.length}`,`Chapter reached: ${(a=(o=this.quests)==null?void 0:o.state.stage)!=null?a:0} / 6`,this.mode!=="sp"?`Survivors: ${(c=(l=this.net.lastSnap)==null?void 0:l.players.filter(h=>!h.dead).length)!=null?c:"?"}`:""].filter(Boolean).join("<br>");if(e)this.ui.showWin(n,t);else{let h=document.querySelector("#hv-death .hv-title");h&&(h.textContent="THE NIGHT WINS");let d=document.getElementById("hv-respawn-btn");d&&d.classList.add("hv-hidden"),this.ui.show("death");let u=document.querySelector("#hv-death .hv-sub");u&&(u.textContent=t)}}autoPerf(e){if(this.state!=="playing")return;let t=1/Math.max(e,.001);if(this.perfEma=this.perfEma*.95+t*.05,this.perfT+=e,!(this.perfT<4)&&(this.perfT=0,this.perfEma<24&&this.perfTier<2)){this.perfTier++;let n=this.renderer.getPixelRatio();this.renderer.setPixelRatio(Math.max(.66,n-.35)),this.renderer.shadowMap.enabled=!1,this.perfTier===2&&this.scene.fog instanceof ps&&(this.scene.fog.density=.045),this.resize()}}step(e){var _,b,f,p,S,A,M,w,T;let t=this.player,n=this.world,s=this.quests,r=!1;for(let g of n.lamps)if(g.light.position.distanceTo(t.pos)<9){r=!0;break}if(!r){for(let g of n.braziers)if(g.lit&&g.pos3.distanceTo(t.pos)<8){r=!0;break}}let o=!t.flashlightOn&&!r,a=!1;if(this.shepherd&&this.shepherd.active&&this.shepherd.group.visible&&this.shepherd.pos.distanceTo(t.pos)<40){let v=new R(0,0,-1).applyQuaternion(t.camera.quaternion),L=new R().subVectors(this.shepherd.headPos(),t.eyePos).normalize();v.dot(L)>.5&&(a=!0)}t.update(e,this.input,n,this.audio,this.camMode,this.settings.sensitivity,this.settings.invertY,o,a,!1),this.input.buttons.attack&&!this.isTouchHeld()?this._attackHeld||(this._attackHeld=!0,this.doAttack()):this.input.buttons.attack&&this.isTouchHeld()?t.fireCd<=0&&this.doAttack():this._attackHeld=!1;let c=null;if(!(this.mode==="versus"&&this.net.isShepherd))for(let g of n.interactables){if(!g.enabled||g.used)continue;if(Math.hypot(g.pos.x-t.pos.x,g.pos.z-t.pos.z)<g.radius){if(g.id.startsWith("door_")){let C=g.id.slice(5),D=n.doors.get(C);D!=null&&D.locked?c="E \u2014 Locked":c=D!=null&&D.open?"E \u2014 Close door":"E \u2014 Open door"}else c="E \u2014 "+g.prompt;break}}if(this.mode!=="sp")for(let g of this.net.remoteList()){let v=(_=this.net.lastSnap)==null?void 0:_.players.find(L=>L.id===g.id);if(v!=null&&v.downed&&!v.dead&&Math.hypot(g.pos.x-t.pos.x,g.pos.z-t.pos.z)<2.4){c="HOLD E \u2014 Revive "+v.name;break}}this.ui.prompt(c),t.downed&&!t.dead&&(this.downedBleed-=e,this.downedBleed<=0&&(t.dead=!0,t.downed=!1,this.audio.play("lose",.8),this.mode==="sp"?(this.state="dead",this.ui.showDeath(!0)):this.mode==="coop"?(this.respawnTimer=25,this.net.sendGame("died",{name:t.name}),this.ui.showDeath(!0),this.ui.message("You will rise at the church in 25s",!0)):(this.net.sendGame("died",{name:t.name}),this.state="dead",this.ui.showDeath(!1)))),this.respawnTimer>0&&this.state!=="menu"&&(this.respawnTimer-=e,this.respawnTimer<=0&&this.mode==="coop"&&(this.respawn(),this.ui.message("The church floor accepts you back",!1)));let d=[{pos:t.pos,crouching:t.crouching,sprinting:t.sprinting,flashlightOn:t.flashlightOn,downed:t.downed,dead:t.dead},...this.net.remoteList().map(g=>{var L;let v=(L=this.net.lastSnap)==null?void 0:L.players.find(C=>C.id===g.id);return{pos:g.pos,crouching:!!(v!=null&&v.crouch),sprinting:!!(v!=null&&v.moving)&&!(v!=null&&v.crouch),flashlightOn:!!(v!=null&&v.flash),downed:!!(v!=null&&v.downed),dead:!!(v!=null&&v.dead)}})];if(this.shepherd){let g=this.mode==="sp"||this.mode==="coop"&&this.isHost;g&&this.shepherd.active?(this.shepherd.update(e,n,d,this.audio,t.pos.clone(),t.yaw,v=>{if(v===d[0])this.monsterAttackLocal(40);else{let L=d.indexOf(v),C=this.net.remoteList()[L-1];C&&this.net.sendGame("mhit",{target:C.id,dmg:40})}}),this.net.sendMonster({x:this.shepherd.pos.x,z:this.shepherd.pos.z,yaw:this.shepherd.group.rotation.y,state:this.shepherd.state})):g||this.shepherd.update(e,n,[],this.audio,t.pos.clone(),t.yaw,()=>{})}for(let g of this.husks)g.update(e,n,d,this.audio,t.pos.clone(),t.yaw,(v,L)=>{v===d[0]&&this.monsterAttackLocal(L)});for(let g=this.grenades.length-1;g>=0;g--){let v=this.grenades[g];if(v.t+=e,v.vel.y-=12*e,v.mesh.position.addScaledVector(v.vel,e),v.mesh.position.y<.08&&(v.mesh.position.y=.08,v.vel.y*=-.35,v.vel.x*=.7,v.vel.z*=.7),Vn(v.mesh.position,.1,n.colliders),v.t>1.6){this.audio.play("bang",1),(b=this.player)==null||b.addShake(.6,.3);let L=v.mesh.position.clone();this.shepherd&&this.shepherd.active&&this.shepherd.pos.distanceTo(L)<13&&this.shepherd.knockdown(6);for(let C of this.husks)!C.dead&&C.pos.distanceTo(L)<6&&C.onHit(100);(f=this.shepherd)==null||f.hear(L,60);for(let C of this.husks)C.hear(L,30);this.mode!=="sp"&&this.net.sendNoise(L.x,L.z,60),this.scene.remove(v.mesh),this.grenades.splice(g,1)}}if(s.update(e),t.fear>82?(this.hallucT-=e,this.hallucT<=0&&(this.hallucT=6+Math.random()*8,this.spawnHallucination())):this.hallucT=4,this.halluc){this.hallucT-=e;let g=this.halluc.material;g.opacity=et(this.hallucT*2,0,.75),this.hallucT<=0&&(this.scene.remove(this.halluc),this.halluc=null)}this.whisperT-=e,this.whisperT<=0&&(this.whisperT=14+Math.random()*20,(t.fear>45||(p=this.shepherd)!=null&&p.active&&this.shepherd.pos.distanceTo(t.pos)<26)&&this.audio.play("whisper",.5+t.fear/200));let u=0;if((S=this.shepherd)!=null&&S.active){let g=this.shepherd.pos.distanceTo(t.pos);u=et(1-g/30,0,1),this.shepherd.state==="chase"&&(u=Math.max(u,.75))}u=Math.max(u,t.fear/160),this.audio.danger+=(u-this.audio.danger)*et(e*2,0,1),this.mode==="versus"&&(this.timeLeft-=e,this.isHost||this.net.socket,this.timeLeft<=0&&!this.gameEnded&&this.endGame(!this.net.isShepherd,"Dawn breaks. The lantern flickers out.")),s.state.gateOpen&&t.pos.z>56.5&&!this.escapedSent&&!this.net.isShepherd&&(this.escapedSent=!0,this.mode==="sp"?this.endGame(!0,"You crossed the treeline as the bell fell silent."):(this.net.sendGame("escaped",{}),this.endGame(!0,"You escaped the vale."))),this.mode!=="sp"&&this.net.connected&&(this.sendT-=e,this.sendT<=0&&(this.sendT=.08,this.net.sendState(t.serialize())),this.net.update(e));let m=(M=(A=this.net.lastSnap)==null?void 0:A.players.filter(g=>!g.dead).length)!=null?M:1;if(this.ui.updateHUD(t,s,{versus:this.mode==="versus",timeLeft:this.timeLeft,isMonster:this.mode==="versus"&&this.net.isShepherd,coopAlive:this.mode==="coop"?m:void 0,coopTotal:this.mode==="coop"?(T=(w=this.net.lastSnap)==null?void 0:w.players.length)!=null?T:1:void 0}),this.pendingNote&&this.state==="playing"){let g=this.pendingNote;this.pendingNote=null,this.state="note",this.audio.play("paper",.5),this.ui.showNote(g,()=>{this.state="playing",this.isTouch()||setTimeout(()=>this.input.requestLock(),50)})}}isTouchHeld(){return!1}spawnHallucination(){if(!this.player)return;if(!this.halluc){let n=new Dt(.3,1.4,3,6),s=new rn({color:0,transparent:!0,opacity:.7,fog:!0});this.halluc=new Ee(n,s),this.halluc.scale.y=1.5}let e=Math.random()*Math.PI*2,t=7+Math.random()*4;this.halluc.position.set(this.player.pos.x+Math.cos(e)*t,1.6,this.player.pos.z+Math.sin(e)*t),this.halluc.material.opacity=.75,this.hallucT=.7,this.scene.add(this.halluc),this.audio.play("whisper",.7)}};function Ka(){return new Promise(i=>requestAnimationFrame(()=>i()))}var Hd=!1;function zd(i){if(Hd)return;Hd=!0;let e=new Vc(i);e.wireNet(),window.hvGame=e}function Vd(){let i=document.getElementById("hv-container");i&&zd(i)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vd):Vd();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
