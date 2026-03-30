const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BlogListView-DLdAFboq.js","assets/content-CjF6t_8j.js","assets/BlogPostView-CHFqGJRk.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ep(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const kt={},oa=[],Tr=()=>{},$g=()=>!1,zu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),tp=n=>n.startsWith("onUpdate:"),En=Object.assign,np=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Db=Object.prototype.hasOwnProperty,wt=(n,e)=>Db.call(n,e),Je=Array.isArray,aa=n=>Vu(n)==="[object Map]",jg=n=>Vu(n)==="[object Set]",nt=n=>typeof n=="function",Qt=n=>typeof n=="string",zs=n=>typeof n=="symbol",Gt=n=>n!==null&&typeof n=="object",Kg=n=>(Gt(n)||nt(n))&&nt(n.then)&&nt(n.catch),Zg=Object.prototype.toString,Vu=n=>Zg.call(n),Ib=n=>Vu(n).slice(8,-1),Jg=n=>Vu(n)==="[object Object]",ip=n=>Qt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ol=ep(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hu=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Lb=/-\w/g,Ls=Hu(n=>n.replace(Lb,e=>e.slice(1).toUpperCase())),Nb=/\B([A-Z])/g,Po=Hu(n=>n.replace(Nb,"-$1").toLowerCase()),Qg=Hu(n=>n.charAt(0).toUpperCase()+n.slice(1)),cf=Hu(n=>n?`on${Qg(n)}`:""),Rs=(n,e)=>!Object.is(n,e),Zc=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},e_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},rp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Ub=n=>{const e=Qt(n)?Number(n):NaN;return isNaN(e)?n:e};let um;const Gu=()=>um||(um=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ql(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Qt(i)?kb(i):Ql(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Qt(n)||Gt(n))return n}const Fb=/;(?![^(]*\))/g,Ob=/:([^]+)/,Bb=/\/\*[^]*?\*\//g;function kb(n){const e={};return n.replace(Bb,"").split(Fb).forEach(t=>{if(t){const i=t.split(Ob);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function gt(n){let e="";if(Qt(n))e=n;else if(Je(n))for(let t=0;t<n.length;t++){const i=gt(n[t]);i&&(e+=i+" ")}else if(Gt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vb=ep(zb);function t_(n){return!!n||n===""}const n_=n=>!!(n&&n.__v_isRef===!0),dt=n=>Qt(n)?n:n==null?"":Je(n)||Gt(n)&&(n.toString===Zg||!nt(n.toString))?n_(n)?dt(n.value):JSON.stringify(n,i_,2):String(n),i_=(n,e)=>n_(e)?i_(n,e.value):aa(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[uf(i,s)+" =>"]=r,t),{})}:jg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>uf(t))}:zs(e)?uf(e):Gt(e)&&!Je(e)&&!Jg(e)?String(e):e,uf=(n,e="")=>{var t;return zs(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let di;class r_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=di,!e&&di&&(this.index=(di.scopes||(di.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=di;try{return di=this,e()}finally{di=t}}}on(){++this._on===1&&(this.prevScope=di,di=this)}off(){this._on>0&&--this._on===0&&(di=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hb(n){return new r_(n)}function Gb(){return di}let Ht;const ff=new WeakSet;class s_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,di&&di.active&&di.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ff.has(this)&&(ff.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||a_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fm(this),l_(this);const e=Ht,t=lr;Ht=this,lr=!0;try{return this.fn()}finally{c_(this),Ht=e,lr=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ap(e);this.deps=this.depsTail=void 0,fm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ff.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vd(this)&&this.run()}get dirty(){return vd(this)}}let o_=0,al,ll;function a_(n,e=!1){if(n.flags|=8,e){n.next=ll,ll=n;return}n.next=al,al=n}function sp(){o_++}function op(){if(--o_>0)return;if(ll){let e=ll;for(ll=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;al;){let e=al;for(al=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function l_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function c_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),ap(i),Wb(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function vd(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(u_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function u_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Pl)||(n.globalVersion=Pl,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vd(n))))return;n.flags|=2;const e=n.dep,t=Ht,i=lr;Ht=n,lr=!0;try{l_(n);const r=n.fn(n._value);(e.version===0||Rs(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ht=t,lr=i,c_(n),n.flags&=-3}}function ap(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)ap(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wb(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let lr=!0;const f_=[];function es(){f_.push(lr),lr=!1}function ts(){const n=f_.pop();lr=n===void 0?!0:n}function fm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ht;Ht=void 0;try{e()}finally{Ht=t}}}let Pl=0;class Xb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lp{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ht||!lr||Ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ht)t=this.activeLink=new Xb(Ht,this),Ht.deps?(t.prevDep=Ht.depsTail,Ht.depsTail.nextDep=t,Ht.depsTail=t):Ht.deps=Ht.depsTail=t,d_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ht.depsTail,t.nextDep=void 0,Ht.depsTail.nextDep=t,Ht.depsTail=t,Ht.deps===t&&(Ht.deps=i)}return t}trigger(e){this.version++,Pl++,this.notify(e)}notify(e){sp();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{op()}}}function d_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)d_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const xd=new WeakMap,mo=Symbol(""),bd=Symbol(""),Dl=Symbol("");function Un(n,e,t){if(lr&&Ht){let i=xd.get(n);i||xd.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new lp),r.map=i,r.key=t),r.track()}}function Xr(n,e,t,i,r,s){const o=xd.get(n);if(!o){Pl++;return}const a=l=>{l&&l.trigger()};if(sp(),e==="clear")o.forEach(a);else{const l=Je(n),c=l&&ip(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Dl||!zs(d)&&d>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Dl)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mo)),aa(n)&&a(o.get(bd)));break;case"delete":l||(a(o.get(mo)),aa(n)&&a(o.get(bd)));break;case"set":aa(n)&&a(o.get(mo));break}}op()}function No(n){const e=Mt(n);return e===n?e:(Un(e,"iterate",Dl),Ji(n)?e:e.map(cr))}function Wu(n){return Un(n=Mt(n),"iterate",Dl),n}function vs(n,e){return ns(n)?go(n)?va(cr(e)):va(e):cr(e)}const qb={__proto__:null,[Symbol.iterator](){return df(this,Symbol.iterator,n=>vs(this,n))},concat(...n){return No(this).concat(...n.map(e=>Je(e)?No(e):e))},entries(){return df(this,"entries",n=>(n[1]=vs(this,n[1]),n))},every(n,e){return Lr(this,"every",n,e,void 0,arguments)},filter(n,e){return Lr(this,"filter",n,e,t=>t.map(i=>vs(this,i)),arguments)},find(n,e){return Lr(this,"find",n,e,t=>vs(this,t),arguments)},findIndex(n,e){return Lr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Lr(this,"findLast",n,e,t=>vs(this,t),arguments)},findLastIndex(n,e){return Lr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Lr(this,"forEach",n,e,void 0,arguments)},includes(...n){return hf(this,"includes",n)},indexOf(...n){return hf(this,"indexOf",n)},join(n){return No(this).join(n)},lastIndexOf(...n){return hf(this,"lastIndexOf",n)},map(n,e){return Lr(this,"map",n,e,void 0,arguments)},pop(){return Oa(this,"pop")},push(...n){return Oa(this,"push",n)},reduce(n,...e){return dm(this,"reduce",n,e)},reduceRight(n,...e){return dm(this,"reduceRight",n,e)},shift(){return Oa(this,"shift")},some(n,e){return Lr(this,"some",n,e,void 0,arguments)},splice(...n){return Oa(this,"splice",n)},toReversed(){return No(this).toReversed()},toSorted(n){return No(this).toSorted(n)},toSpliced(...n){return No(this).toSpliced(...n)},unshift(...n){return Oa(this,"unshift",n)},values(){return df(this,"values",n=>vs(this,n))}};function df(n,e,t){const i=Wu(n),r=i[e]();return i!==n&&!Ji(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Yb=Array.prototype;function Lr(n,e,t,i,r,s){const o=Wu(n),a=o!==n&&!Ji(n),l=o[e];if(l!==Yb[e]){const f=l.apply(n,s);return a?cr(f):f}let c=t;o!==n&&(a?c=function(f,d){return t.call(this,vs(n,f),d,n)}:t.length>2&&(c=function(f,d){return t.call(this,f,d,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function dm(n,e,t,i){const r=Wu(n);let s=t;return r!==n&&(Ji(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,vs(n,a),l,n)}),r[e](s,...i)}function hf(n,e,t){const i=Mt(n);Un(i,"iterate",Dl);const r=i[e](...t);return(r===-1||r===!1)&&fp(t[0])?(t[0]=Mt(t[0]),i[e](...t)):r}function Oa(n,e,t=[]){es(),sp();const i=Mt(n)[e].apply(n,t);return op(),ts(),i}const $b=ep("__proto__,__v_isRef,__isVue"),h_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zs));function jb(n){zs(n)||(n=String(n));const e=Mt(this);return Un(e,"has",n),e.hasOwnProperty(n)}class p_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?sy:v_:s?__:g_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Je(e);if(!r){let l;if(o&&(l=qb[t]))return l;if(t==="hasOwnProperty")return jb}const a=Reflect.get(e,t,zn(e)?e:i);if((zs(t)?h_.has(t):$b(t))||(r||Un(e,"get",t),s))return a;if(zn(a)){const l=o&&ip(t)?a:a.value;return r&&Gt(l)?Sd(l):l}return Gt(a)?r?Sd(a):Xu(a):a}}class m_ extends p_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=Je(e)&&ip(t);if(!this._isShallow){const c=ns(s);if(!Ji(i)&&!ns(i)&&(s=Mt(s),i=Mt(i)),!o&&zn(s)&&!zn(i))return c||(s.value=i),!0}const a=o?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,zn(e)?e:r);return e===Mt(r)&&(a?Rs(i,s)&&Xr(e,"set",t,i):Xr(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Xr(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!zs(t)||!h_.has(t))&&Un(e,"has",t),i}ownKeys(e){return Un(e,"iterate",Je(e)?"length":mo),Reflect.ownKeys(e)}}class Kb extends p_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Zb=new m_,Jb=new Kb,Qb=new m_(!0);const yd=n=>n,uc=n=>Reflect.getPrototypeOf(n);function ey(n,e,t){return function(...i){const r=this.__v_raw,s=Mt(r),o=aa(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?yd:e?va:cr;return!e&&Un(s,"iterate",l?bd:mo),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function fc(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ty(n,e){const t={get(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);n||(Rs(r,a)&&Un(o,"get",r),Un(o,"get",a));const{has:l}=uc(o),c=e?yd:n?va:cr;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Un(Mt(r),"iterate",mo),r.size},has(r){const s=this.__v_raw,o=Mt(s),a=Mt(r);return n||(Rs(r,a)&&Un(o,"has",r),Un(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Mt(a),c=e?yd:n?va:cr;return!n&&Un(l,"iterate",mo),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return En(t,n?{add:fc("add"),set:fc("set"),delete:fc("delete"),clear:fc("clear")}:{add(r){!e&&!Ji(r)&&!ns(r)&&(r=Mt(r));const s=Mt(this);return uc(s).has.call(s,r)||(s.add(r),Xr(s,"add",r,r)),this},set(r,s){!e&&!Ji(s)&&!ns(s)&&(s=Mt(s));const o=Mt(this),{has:a,get:l}=uc(o);let c=a.call(o,r);c||(r=Mt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Rs(s,u)&&Xr(o,"set",r,s):Xr(o,"add",r,s),this},delete(r){const s=Mt(this),{has:o,get:a}=uc(s);let l=o.call(s,r);l||(r=Mt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Xr(s,"delete",r,void 0),c},clear(){const r=Mt(this),s=r.size!==0,o=r.clear();return s&&Xr(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=ey(r,n,e)}),t}function cp(n,e){const t=ty(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const ny={get:cp(!1,!1)},iy={get:cp(!1,!0)},ry={get:cp(!0,!1)};const g_=new WeakMap,__=new WeakMap,v_=new WeakMap,sy=new WeakMap;function oy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ay(n){return n.__v_skip||!Object.isExtensible(n)?0:oy(Ib(n))}function Xu(n){return ns(n)?n:up(n,!1,Zb,ny,g_)}function x_(n){return up(n,!1,Qb,iy,__)}function Sd(n){return up(n,!0,Jb,ry,v_)}function up(n,e,t,i,r){if(!Gt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=ay(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function go(n){return ns(n)?go(n.__v_raw):!!(n&&n.__v_isReactive)}function ns(n){return!!(n&&n.__v_isReadonly)}function Ji(n){return!!(n&&n.__v_isShallow)}function fp(n){return n?!!n.__v_raw:!1}function Mt(n){const e=n&&n.__v_raw;return e?Mt(e):n}function b_(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&e_(n,"__v_skip",!0),n}const cr=n=>Gt(n)?Xu(n):n,va=n=>Gt(n)?Sd(n):n;function zn(n){return n?n.__v_isRef===!0:!1}function pt(n){return y_(n,!1)}function ly(n){return y_(n,!0)}function y_(n,e){return zn(n)?n:new cy(n,e)}class cy{constructor(e,t){this.dep=new lp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Mt(e),this._value=t?e:cr(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Ji(e)||ns(e);e=i?e:Mt(e),Rs(e,t)&&(this._rawValue=e,this._value=i?e:cr(e),this.dep.trigger())}}function Kr(n){return zn(n)?n.value:n}const uy={get:(n,e,t)=>e==="__v_raw"?n:Kr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return zn(r)&&!zn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function S_(n){return go(n)?n:new Proxy(n,uy)}class fy{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ht!==this)return a_(this,!0),!0}get value(){const e=this.dep.track();return u_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dy(n,e,t=!1){let i,r;return nt(n)?i=n:(i=n.get,r=n.set),new fy(i,r,t)}const dc={},vu=new WeakMap;let to;function hy(n,e=!1,t=to){if(t){let i=vu.get(t);i||vu.set(t,i=[]),i.push(n)}}function py(n,e,t=kt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=b=>r?b:Ji(b)||r===!1||r===0?qr(b,1):qr(b);let u,f,d,h,_=!1,g=!1;if(zn(n)?(f=()=>n.value,_=Ji(n)):go(n)?(f=()=>c(n),_=!0):Je(n)?(g=!0,_=n.some(b=>go(b)||Ji(b)),f=()=>n.map(b=>{if(zn(b))return b.value;if(go(b))return c(b);if(nt(b))return l?l(b,2):b()})):nt(n)?e?f=l?()=>l(n,2):n:f=()=>{if(d){es();try{d()}finally{ts()}}const b=to;to=u;try{return l?l(n,3,[h]):n(h)}finally{to=b}}:f=Tr,e&&r){const b=f,E=r===!0?1/0:r;f=()=>qr(b(),E)}const m=Gb(),p=()=>{u.stop(),m&&m.active&&np(m.effects,u)};if(s&&e){const b=e;e=(...E)=>{b(...E),p()}}let y=g?new Array(n.length).fill(dc):dc;const M=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(r||_||(g?E.some((w,T)=>Rs(w,y[T])):Rs(E,y))){d&&d();const w=to;to=u;try{const T=[E,y===dc?void 0:g&&y[0]===dc?[]:y,h];y=E,l?l(e,3,T):e(...T)}finally{to=w}}}else u.run()};return a&&a(M),u=new s_(f),u.scheduler=o?()=>o(M,!1):M,h=b=>hy(b,!1,u),d=u.onStop=()=>{const b=vu.get(u);if(b){if(l)l(b,4);else for(const E of b)E();vu.delete(u)}},e?i?M(!0):y=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qr(n,e=1/0,t){if(e<=0||!Gt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,zn(n))qr(n.value,e,t);else if(Je(n))for(let i=0;i<n.length;i++)qr(n[i],e,t);else if(jg(n)||aa(n))n.forEach(i=>{qr(i,e,t)});else if(Jg(n)){for(const i in n)qr(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qr(n[i],e,t)}return n}function ec(n,e,t,i){try{return i?n(...i):n()}catch(r){qu(r,e,t)}}function ur(n,e,t,i){if(nt(n)){const r=ec(n,e,t,i);return r&&Kg(r)&&r.catch(s=>{qu(s,e,t)}),r}if(Je(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ur(n[s],e,t,i));return r}}function qu(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||kt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){es(),ec(s,null,10,[n,l,c]),ts();return}}my(n,t,r,i,o)}function my(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Qn=[];let mr=-1;const la=[];let xs=null,Jo=0;const M_=Promise.resolve();let xu=null;function dp(n){const e=xu||M_;return n?e.then(this?n.bind(this):n):e}function gy(n){let e=mr+1,t=Qn.length;for(;e<t;){const i=e+t>>>1,r=Qn[i],s=Il(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function hp(n){if(!(n.flags&1)){const e=Il(n),t=Qn[Qn.length-1];!t||!(n.flags&2)&&e>=Il(t)?Qn.push(n):Qn.splice(gy(e),0,n),n.flags|=1,E_()}}function E_(){xu||(xu=M_.then(w_))}function _y(n){Je(n)?la.push(...n):xs&&n.id===-1?xs.splice(Jo+1,0,n):n.flags&1||(la.push(n),n.flags|=1),E_()}function hm(n,e,t=mr+1){for(;t<Qn.length;t++){const i=Qn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Qn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function T_(n){if(la.length){const e=[...new Set(la)].sort((t,i)=>Il(t)-Il(i));if(la.length=0,xs){xs.push(...e);return}for(xs=e,Jo=0;Jo<xs.length;Jo++){const t=xs[Jo];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xs=null,Jo=0}}const Il=n=>n.id==null?n.flags&2?-1:1/0:n.id;function w_(n){try{for(mr=0;mr<Qn.length;mr++){const e=Qn[mr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ec(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mr<Qn.length;mr++){const e=Qn[mr];e&&(e.flags&=-2)}mr=-1,Qn.length=0,T_(),xu=null,(Qn.length||la.length)&&w_()}}let $i=null,A_=null;function bu(n){const e=$i;return $i=n,A_=n&&n.type.__scopeId||null,e}function Eo(n,e=$i,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Mu(-1);const s=bu(e);let o;try{o=n(...r)}finally{bu(s),i._d&&Mu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function vy(n,e){if($i===null)return n;const t=Zu($i),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=kt]=e[r];s&&(nt(s)&&(s={mounted:s,updated:s}),s.deep&&qr(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Gs(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(es(),ur(l,t,8,[n.el,a,n,e]),ts())}}function Jc(n,e){if(ti){let t=ti.provides;const i=ti.parent&&ti.parent.provides;i===t&&(t=ti.provides=Object.create(i)),t[n]=e}}function wr(n,e,t=!1){const i=sv();if(i||ca){let r=ca?ca._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&nt(e)?e.call(i&&i.proxy):e}}const xy=Symbol.for("v-scx"),by=()=>wr(xy);function cl(n,e,t){return C_(n,e,t)}function C_(n,e,t=kt){const{immediate:i,deep:r,flush:s,once:o}=t,a=En({},t),l=e&&i||!e&&s!=="post";let c;if(Ul){if(s==="sync"){const h=by();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Tr,h.resume=Tr,h.pause=Tr,h}}const u=ti;a.call=(h,_,g)=>ur(h,u,_,g);let f=!1;s==="post"?a.scheduler=h=>{$n(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,_)=>{_?h():hp(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=py(n,e,a);return Ul&&(c?c.push(d):l&&d()),d}function yy(n,e,t){const i=this.proxy,r=Qt(n)?n.includes(".")?R_(i,n):()=>i[n]:n.bind(i,i);let s;nt(e)?s=e:(s=e.handler,t=e);const o=nc(this),a=C_(r,s.bind(i),t);return o(),a}function R_(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const P_=Symbol("_vte"),D_=n=>n.__isTeleport,ul=n=>n&&(n.disabled||n.disabled===""),pm=n=>n&&(n.defer||n.defer===""),mm=n=>typeof SVGElement<"u"&&n instanceof SVGElement,gm=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Md=(n,e)=>{const t=n&&n.to;return Qt(t)?e?e(t):null:t},I_={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:_,createText:g,createComment:m}}=c,p=ul(e.props);let{shapeFlag:y,children:M,dynamicChildren:b}=e;if(n==null){const E=e.el=g(""),w=e.anchor=g("");h(E,t,i),h(w,t,i);const T=(v,S)=>{y&16&&u(M,v,S,r,s,o,a,l)},L=()=>{const v=e.target=Md(e.props,_),S=L_(v,e,g,h);v&&(o!=="svg"&&mm(v)?o="svg":o!=="mathml"&&gm(v)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(v),p||(T(v,S),Qc(e,!1)))};p&&(T(t,w),Qc(e,!0)),pm(e.props)?(e.el.__isMounted=!1,$n(()=>{L(),delete e.el.__isMounted},s)):L()}else{if(pm(e.props)&&n.el.__isMounted===!1){$n(()=>{I_.process(n,e,t,i,r,s,o,a,l,c)},s);return}e.el=n.el,e.targetStart=n.targetStart;const E=e.anchor=n.anchor,w=e.target=n.target,T=e.targetAnchor=n.targetAnchor,L=ul(n.props),v=L?t:w,S=L?E:T;if(o==="svg"||mm(w)?o="svg":(o==="mathml"||gm(w))&&(o="mathml"),b?(d(n.dynamicChildren,b,v,r,s,o,a),_p(n,e,!0)):l||f(n,e,v,S,r,s,o,a,!1),p)L?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):hc(e,t,E,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const F=e.target=Md(e.props,_);F&&hc(e,F,null,c,0)}else L&&hc(e,w,T,c,1);Qc(e,p)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=n;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!ul(d);for(let _=0;_<a.length;_++){const g=a[_];i(g,e,t,h,!!g.dynamicChildren)}}},move:hc,hydrate:Sy};function hc(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=s===2;if(f&&i(o,e,t),(!f||ul(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,t,2);f&&i(a,e,t)}function Sy(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(g,m,p,y){m.anchor=f(o(g),m,a(g),t,i,r,s),m.targetStart=p,m.targetAnchor=y}const h=e.target=Md(e.props,l),_=ul(e.props);if(h){const g=h._lpa||h.firstChild;if(e.shapeFlag&16)if(_)d(n,e,g,g&&o(g));else{e.anchor=o(n);let m=g;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||L_(h,e,u,c),f(g&&o(g),e,h,t,i,r,s)}Qc(e,_)}else _&&e.shapeFlag&16&&d(n,e,n,o(n));return e.anchor&&o(e.anchor)}const My=I_;function Qc(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function L_(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[P_]=s,n&&(i(r,n),i(s,n)),s}const Gr=Symbol("_leaveCb"),pc=Symbol("_enterCb");function Ey(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dr(()=>{n.isMounted=!0}),V_(()=>{n.isUnmounting=!0}),n}const Vi=[Function,Array],N_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Vi,onEnter:Vi,onAfterEnter:Vi,onEnterCancelled:Vi,onBeforeLeave:Vi,onLeave:Vi,onAfterLeave:Vi,onLeaveCancelled:Vi,onBeforeAppear:Vi,onAppear:Vi,onAfterAppear:Vi,onAppearCancelled:Vi},U_=n=>{const e=n.subTree;return e.component?U_(e.component):e},Ty={name:"BaseTransition",props:N_,setup(n,{slots:e}){const t=sv(),i=Ey();return()=>{const r=e.default&&B_(e.default(),!0);if(!r||!r.length)return;const s=F_(r),o=Mt(n),{mode:a}=o;if(i.isLeaving)return pf(s);const l=_m(s);if(!l)return pf(s);let c=Ed(l,o,i,t,f=>c=f);l.type!==ei&&Ll(l,c);let u=t.subTree&&_m(t.subTree);if(u&&u.type!==ei&&!oo(u,l)&&U_(t).type!==ei){let f=Ed(u,o,i,t);if(Ll(u,f),a==="out-in"&&l.type!==ei)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},pf(s);a==="in-out"&&l.type!==ei?f.delayLeave=(d,h,_)=>{const g=O_(i,u);g[String(u.key)]=u,d[Gr]=()=>{h(),d[Gr]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function F_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ei){e=t;break}}return e}const wy=Ty;function O_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ed(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:M}=e,b=String(n.key),E=O_(t,n),w=(v,S)=>{v&&ur(v,i,9,S)},T=(v,S)=>{const F=S[1];w(v,S),Je(v)?v.every(N=>N.length<=1)&&F():v.length<=1&&F()},L={mode:o,persisted:a,beforeEnter(v){let S=l;if(!t.isMounted)if(s)S=m||l;else return;v[Gr]&&v[Gr](!0);const F=E[b];F&&oo(n,F)&&F.el[Gr]&&F.el[Gr](),w(S,[v])},enter(v){let S=c,F=u,N=f;if(!t.isMounted)if(s)S=p||c,F=y||u,N=M||f;else return;let H=!1;const q=v[pc]=Z=>{H||(H=!0,Z?w(N,[v]):w(F,[v]),L.delayedLeave&&L.delayedLeave(),v[pc]=void 0)};S?T(S,[v,q]):q()},leave(v,S){const F=String(n.key);if(v[pc]&&v[pc](!0),t.isUnmounting)return S();w(d,[v]);let N=!1;const H=v[Gr]=q=>{N||(N=!0,S(),q?w(g,[v]):w(_,[v]),v[Gr]=void 0,E[F]===n&&delete E[F])};E[F]=n,h?T(h,[v,H]):H()},clone(v){const S=Ed(v,e,t,i,r);return r&&r(S),S}};return L}function pf(n){if(Yu(n))return n=Ns(n),n.children=null,n}function _m(n){if(!Yu(n))return D_(n.type)&&n.children?F_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&nt(t.default))return t.default()}}function Ll(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ll(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function B_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&r++,i=i.concat(B_(o.children,e,a))):(e||o.type!==ei)&&i.push(a!=null?Ns(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function pp(n,e){return nt(n)?En({name:n.name},e,{setup:n}):n}function k_(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const yu=new WeakMap;function fl(n,e,t,i,r=!1){if(Je(n)){n.forEach((_,g)=>fl(_,e&&(Je(e)?e[g]:e),t,i,r));return}if(dl(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fl(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Zu(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===kt?a.refs={}:a.refs,f=a.setupState,d=Mt(f),h=f===kt?$g:_=>wt(d,_);if(c!=null&&c!==l){if(vm(e),Qt(c))u[c]=null,h(c)&&(f[c]=null);else if(zn(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(nt(l))ec(l,a,12,[o,u]);else{const _=Qt(l),g=zn(l);if(_||g){const m=()=>{if(n.f){const p=_?h(l)?f[l]:u[l]:l.value;if(r)Je(p)&&np(p,s);else if(Je(p))p.includes(s)||p.push(s);else if(_)u[l]=[s],h(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,n.k&&(u[n.k]=y)}}else _?(u[l]=o,h(l)&&(f[l]=o)):g&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),yu.delete(n)};p.id=-1,yu.set(n,p),$n(p,t)}else vm(n),m()}}}function vm(n){const e=yu.get(n);e&&(e.flags|=8,yu.delete(n))}Gu().requestIdleCallback;Gu().cancelIdleCallback;const dl=n=>!!n.type.__asyncLoader,Yu=n=>n.type.__isKeepAlive;function Ay(n,e){z_(n,"a",e)}function Cy(n,e){z_(n,"da",e)}function z_(n,e,t=ti){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if($u(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Yu(r.parent.vnode)&&Ry(i,e,t,r),r=r.parent}}function Ry(n,e,t,i){const r=$u(e,n,i,!0);tc(()=>{np(i[e],r)},t)}function $u(n,e,t=ti,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{es();const a=nc(t),l=ur(e,t,n,o);return a(),ts(),l});return i?r.unshift(s):r.push(s),s}}const ls=n=>(e,t=ti)=>{(!Ul||n==="sp")&&$u(n,(...i)=>e(...i),t)},Py=ls("bm"),dr=ls("m"),Dy=ls("bu"),Iy=ls("u"),V_=ls("bum"),tc=ls("um"),Ly=ls("sp"),Ny=ls("rtg"),Uy=ls("rtc");function Fy(n,e=ti){$u("ec",n,e)}const Oy=Symbol.for("v-ndc");function Bn(n,e,t,i){let r;const s=t,o=Je(n);if(o||Qt(n)){const a=o&&go(n);let l=!1,c=!1;a&&(l=!Ji(n),c=ns(n),n=Wu(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?va(cr(n[u])):cr(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Gt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Td=n=>n?ov(n)?Zu(n):Td(n.parent):null,hl=En(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Td(n.parent),$root:n=>Td(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>G_(n),$forceUpdate:n=>n.f||(n.f=()=>{hp(n.update)}),$nextTick:n=>n.n||(n.n=dp.bind(n.proxy)),$watch:n=>yy.bind(n)}),mf=(n,e)=>n!==kt&&!n.__isScriptSetup&&wt(n,e),By={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(mf(i,e))return o[e]=1,i[e];if(r!==kt&&wt(r,e))return o[e]=2,r[e];if(wt(s,e))return o[e]=3,s[e];if(t!==kt&&wt(t,e))return o[e]=4,t[e];wd&&(o[e]=0)}}const c=hl[e];let u,f;if(c)return e==="$attrs"&&Un(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==kt&&wt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return mf(r,e)?(r[e]=t,!0):i!==kt&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(t[a]||n!==kt&&a[0]!=="$"&&wt(n,a)||mf(e,a)||wt(s,a)||wt(i,a)||wt(hl,a)||wt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xm(n){return Je(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wd=!0;function ky(n){const e=G_(n),t=n.proxy,i=n.ctx;wd=!1,e.beforeCreate&&bm(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:M,unmounted:b,render:E,renderTracked:w,renderTriggered:T,errorCaptured:L,serverPrefetch:v,expose:S,inheritAttrs:F,components:N,directives:H,filters:q}=e;if(c&&zy(c,i,null),o)for(const G in o){const j=o[G];nt(j)&&(i[G]=j.bind(t))}if(r){const G=r.call(t,t);Gt(G)&&(n.data=Xu(G))}if(wd=!0,s)for(const G in s){const j=s[G],he=nt(j)?j.bind(t,t):nt(j.get)?j.get.bind(t,t):Tr,O=!nt(j)&&nt(j.set)?j.set.bind(t):Tr,pe=rr({get:he,set:O});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Oe=>pe.value=Oe})}if(a)for(const G in a)H_(a[G],i,t,G);if(l){const G=nt(l)?l.call(t):l;Reflect.ownKeys(G).forEach(j=>{Jc(j,G[j])})}u&&bm(u,n,"c");function X(G,j){Je(j)?j.forEach(he=>G(he.bind(t))):j&&G(j.bind(t))}if(X(Py,f),X(dr,d),X(Dy,h),X(Iy,_),X(Ay,g),X(Cy,m),X(Fy,L),X(Uy,w),X(Ny,T),X(V_,y),X(tc,b),X(Ly,v),Je(S))if(S.length){const G=n.exposed||(n.exposed={});S.forEach(j=>{Object.defineProperty(G,j,{get:()=>t[j],set:he=>t[j]=he,enumerable:!0})})}else n.exposed||(n.exposed={});E&&n.render===Tr&&(n.render=E),F!=null&&(n.inheritAttrs=F),N&&(n.components=N),H&&(n.directives=H),v&&k_(n)}function zy(n,e,t=Tr){Je(n)&&(n=Ad(n));for(const i in n){const r=n[i];let s;Gt(r)?"default"in r?s=wr(r.from||i,r.default,!0):s=wr(r.from||i):s=wr(r),zn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bm(n,e,t){ur(Je(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function H_(n,e,t,i){let r=i.includes(".")?R_(t,i):()=>t[i];if(Qt(n)){const s=e[n];nt(s)&&cl(r,s)}else if(nt(n))cl(r,n.bind(t));else if(Gt(n))if(Je(n))n.forEach(s=>H_(s,e,t,i));else{const s=nt(n.handler)?n.handler.bind(t):e[n.handler];nt(s)&&cl(r,s,n)}}function G_(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Su(l,c,o,!0)),Su(l,e,o)),Gt(e)&&s.set(e,l),l}function Su(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Su(n,s,t,!0),r&&r.forEach(o=>Su(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Vy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Vy={data:ym,props:Sm,emits:Sm,methods:Ka,computed:Ka,beforeCreate:Xn,created:Xn,beforeMount:Xn,mounted:Xn,beforeUpdate:Xn,updated:Xn,beforeDestroy:Xn,beforeUnmount:Xn,destroyed:Xn,unmounted:Xn,activated:Xn,deactivated:Xn,errorCaptured:Xn,serverPrefetch:Xn,components:Ka,directives:Ka,watch:Gy,provide:ym,inject:Hy};function ym(n,e){return e?n?function(){return En(nt(n)?n.call(this,this):n,nt(e)?e.call(this,this):e)}:e:n}function Hy(n,e){return Ka(Ad(n),Ad(e))}function Ad(n){if(Je(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ka(n,e){return n?En(Object.create(null),n,e):e}function Sm(n,e){return n?Je(n)&&Je(e)?[...new Set([...n,...e])]:En(Object.create(null),xm(n),xm(e??{})):e}function Gy(n,e){if(!n)return e;if(!e)return n;const t=En(Object.create(null),n);for(const i in e)t[i]=Xn(n[i],e[i]);return t}function W_(){return{app:null,config:{isNativeTag:$g,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wy=0;function Xy(n,e){return function(i,r=null){nt(i)||(i=En({},i)),r!=null&&!Gt(r)&&(r=null);const s=W_(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Wy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:S1,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&nt(u.install)?(o.add(u),u.install(c,...f)):nt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Nt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),n(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Zu(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ur(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ca;ca=c;try{return u()}finally{ca=f}}};return c}}let ca=null;const qy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ls(e)}Modifiers`]||n[`${Po(e)}Modifiers`];function Yy(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||kt;let r=t;const s=e.startsWith("update:"),o=s&&qy(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Qt(u)?u.trim():u)),o.number&&(r=t.map(rp)));let a,l=i[a=cf(e)]||i[a=cf(Ls(e))];!l&&s&&(l=i[a=cf(Po(e))]),l&&ur(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ur(c,n,6,r)}}const $y=new WeakMap;function X_(n,e,t=!1){const i=t?$y:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!nt(n)){const l=c=>{const u=X_(c,e,!0);u&&(a=!0,En(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(Gt(n)&&i.set(n,null),null):(Je(s)?s.forEach(l=>o[l]=null):En(o,s),Gt(n)&&i.set(n,o),o)}function ju(n,e){return!n||!zu(e)?!1:(e=e.slice(2).replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,Po(e))||wt(n,e))}function Mm(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:_,inheritAttrs:g}=n,m=bu(n);let p,y;try{if(t.shapeFlag&4){const b=r||i,E=b;p=vr(c.call(E,b,u,f,h,d,_)),y=a}else{const b=e;p=vr(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),y=e.props?a:jy(a)}}catch(b){pl.length=0,qu(b,n,1),p=Nt(ei)}let M=p;if(y&&g!==!1){const b=Object.keys(y),{shapeFlag:E}=M;b.length&&E&7&&(s&&b.some(tp)&&(y=Ky(y,s)),M=Ns(M,y,!1,!0))}return t.dirs&&(M=Ns(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Ll(M,t.transition),p=M,bu(m),p}const jy=n=>{let e;for(const t in n)(t==="class"||t==="style"||zu(t))&&((e||(e={}))[t]=n[t]);return e},Ky=(n,e)=>{const t={};for(const i in n)(!tp(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Zy(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Em(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ju(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Em(i,o,c):!0:!!o;return!1}function Em(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ju(t,s))return!0}return!1}function Jy({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const q_={},Y_=()=>Object.create(q_),$_=n=>Object.getPrototypeOf(n)===q_;function Qy(n,e,t,i=!1){const r={},s=Y_();n.propsDefaults=Object.create(null),j_(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:x_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function e1(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Mt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ju(n.emitsOptions,d))continue;const h=e[d];if(l)if(wt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const _=Ls(d);r[_]=Cd(l,a,_,h,n,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{j_(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!wt(e,f)&&((u=Po(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Cd(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!wt(e,f))&&(delete s[f],c=!0)}c&&Xr(n.attrs,"set","")}function j_(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ol(l))continue;const c=e[l];let u;r&&wt(r,u=Ls(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ju(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Mt(t),c=a||kt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Cd(r,l,f,c[f],n,!wt(c,f))}}return o}function Cd(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=wt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=nc(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Po(t))&&(i=!0))}return i}const t1=new WeakMap;function K_(n,e,t=!1){const i=t?t1:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!nt(n)){const u=f=>{l=!0;const[d,h]=K_(f,e,!0);En(o,d),h&&a.push(...h)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Gt(n)&&i.set(n,oa),oa;if(Je(s))for(let u=0;u<s.length;u++){const f=Ls(s[u]);Tm(f)&&(o[f]=kt)}else if(s)for(const u in s){const f=Ls(u);if(Tm(f)){const d=s[u],h=o[f]=Je(d)||nt(d)?{type:d}:En({},d),_=h.type;let g=!1,m=!0;if(Je(_))for(let p=0;p<_.length;++p){const y=_[p],M=nt(y)&&y.name;if(M==="Boolean"){g=!0;break}else M==="String"&&(m=!1)}else g=nt(_)&&_.name==="Boolean";h[0]=g,h[1]=m,(g||wt(h,"default"))&&a.push(f)}}const c=[o,a];return Gt(n)&&i.set(n,c),c}function Tm(n){return n[0]!=="$"&&!ol(n)}const mp=n=>n==="_"||n==="_ctx"||n==="$stable",gp=n=>Je(n)?n.map(vr):[vr(n)],n1=(n,e,t)=>{if(e._n)return e;const i=Eo((...r)=>gp(e(...r)),t);return i._c=!1,i},Z_=(n,e,t)=>{const i=n._ctx;for(const r in n){if(mp(r))continue;const s=n[r];if(nt(s))e[r]=n1(r,s,i);else if(s!=null){const o=gp(s);e[r]=()=>o}}},J_=(n,e)=>{const t=gp(e);n.slots.default=()=>t},Q_=(n,e,t)=>{for(const i in e)(t||!mp(i))&&(n[i]=e[i])},i1=(n,e,t)=>{const i=n.slots=Y_();if(n.vnode.shapeFlag&32){const r=e._;r?(Q_(i,e,t),t&&e_(i,"_",r,!0)):Z_(e,i)}else e&&J_(n,e)},r1=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=kt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:Q_(r,e,t):(s=!e.$stable,Z_(e,r)),o=e}else e&&(J_(n,e),o={default:1});if(s)for(const a in r)!mp(a)&&o[a]==null&&delete r[a]},$n=c1;function s1(n){return o1(n)}function o1(n,e){const t=Gu();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Tr,insertStaticContent:_}=n,g=(I,P,V,Q=null,J=null,U=null,R=void 0,de=null,ce=!!P.dynamicChildren)=>{if(I===P)return;I&&!oo(I,P)&&(Q=k(I),Oe(I,J,U,!0),I=null),P.patchFlag===-2&&(ce=!1,P.dynamicChildren=null);const{type:ne,ref:ue,shapeFlag:C}=P;switch(ne){case Ku:m(I,P,V,Q);break;case ei:p(I,P,V,Q);break;case eu:I==null&&y(P,V,Q,R);break;case Dt:N(I,P,V,Q,J,U,R,de,ce);break;default:C&1?E(I,P,V,Q,J,U,R,de,ce):C&6?H(I,P,V,Q,J,U,R,de,ce):(C&64||C&128)&&ne.process(I,P,V,Q,J,U,R,de,ce,le)}ue!=null&&J?fl(ue,I&&I.ref,U,P||I,!P):ue==null&&I&&I.ref!=null&&fl(I.ref,null,U,I,!0)},m=(I,P,V,Q)=>{if(I==null)i(P.el=a(P.children),V,Q);else{const J=P.el=I.el;P.children!==I.children&&c(J,P.children)}},p=(I,P,V,Q)=>{I==null?i(P.el=l(P.children||""),V,Q):P.el=I.el},y=(I,P,V,Q)=>{[I.el,I.anchor]=_(I.children,P,V,Q,I.el,I.anchor)},M=({el:I,anchor:P},V,Q)=>{let J;for(;I&&I!==P;)J=d(I),i(I,V,Q),I=J;i(P,V,Q)},b=({el:I,anchor:P})=>{let V;for(;I&&I!==P;)V=d(I),r(I),I=V;r(P)},E=(I,P,V,Q,J,U,R,de,ce)=>{if(P.type==="svg"?R="svg":P.type==="math"&&(R="mathml"),I==null)w(P,V,Q,J,U,R,de,ce);else{const ne=I.el&&I.el._isVueCE?I.el:null;try{ne&&ne._beginPatch(),v(I,P,J,U,R,de,ce)}finally{ne&&ne._endPatch()}}},w=(I,P,V,Q,J,U,R,de)=>{let ce,ne;const{props:ue,shapeFlag:C,transition:x,dirs:B}=I;if(ce=I.el=o(I.type,U,ue&&ue.is,ue),C&8?u(ce,I.children):C&16&&L(I.children,ce,null,Q,J,gf(I,U),R,de),B&&Gs(I,null,Q,"created"),T(ce,I,I.scopeId,R,Q),ue){for(const ee in ue)ee!=="value"&&!ol(ee)&&s(ce,ee,null,ue[ee],U,Q);"value"in ue&&s(ce,"value",null,ue.value,U),(ne=ue.onVnodeBeforeMount)&&hr(ne,Q,I)}B&&Gs(I,null,Q,"beforeMount");const K=a1(J,x);K&&x.beforeEnter(ce),i(ce,P,V),((ne=ue&&ue.onVnodeMounted)||K||B)&&$n(()=>{ne&&hr(ne,Q,I),K&&x.enter(ce),B&&Gs(I,null,Q,"mounted")},J)},T=(I,P,V,Q,J)=>{if(V&&h(I,V),Q)for(let U=0;U<Q.length;U++)h(I,Q[U]);if(J){let U=J.subTree;if(P===U||nv(U.type)&&(U.ssContent===P||U.ssFallback===P)){const R=J.vnode;T(I,R,R.scopeId,R.slotScopeIds,J.parent)}}},L=(I,P,V,Q,J,U,R,de,ce=0)=>{for(let ne=ce;ne<I.length;ne++){const ue=I[ne]=de?bs(I[ne]):vr(I[ne]);g(null,ue,P,V,Q,J,U,R,de)}},v=(I,P,V,Q,J,U,R)=>{const de=P.el=I.el;let{patchFlag:ce,dynamicChildren:ne,dirs:ue}=P;ce|=I.patchFlag&16;const C=I.props||kt,x=P.props||kt;let B;if(V&&Ws(V,!1),(B=x.onVnodeBeforeUpdate)&&hr(B,V,P,I),ue&&Gs(P,I,V,"beforeUpdate"),V&&Ws(V,!0),(C.innerHTML&&x.innerHTML==null||C.textContent&&x.textContent==null)&&u(de,""),ne?S(I.dynamicChildren,ne,de,V,Q,gf(P,J),U):R||j(I,P,de,null,V,Q,gf(P,J),U,!1),ce>0){if(ce&16)F(de,C,x,V,J);else if(ce&2&&C.class!==x.class&&s(de,"class",null,x.class,J),ce&4&&s(de,"style",C.style,x.style,J),ce&8){const K=P.dynamicProps;for(let ee=0;ee<K.length;ee++){const Y=K[ee],Se=C[Y],ge=x[Y];(ge!==Se||Y==="value")&&s(de,Y,Se,ge,J,V)}}ce&1&&I.children!==P.children&&u(de,P.children)}else!R&&ne==null&&F(de,C,x,V,J);((B=x.onVnodeUpdated)||ue)&&$n(()=>{B&&hr(B,V,P,I),ue&&Gs(P,I,V,"updated")},Q)},S=(I,P,V,Q,J,U,R)=>{for(let de=0;de<P.length;de++){const ce=I[de],ne=P[de],ue=ce.el&&(ce.type===Dt||!oo(ce,ne)||ce.shapeFlag&198)?f(ce.el):V;g(ce,ne,ue,null,Q,J,U,R,!0)}},F=(I,P,V,Q,J)=>{if(P!==V){if(P!==kt)for(const U in P)!ol(U)&&!(U in V)&&s(I,U,P[U],null,J,Q);for(const U in V){if(ol(U))continue;const R=V[U],de=P[U];R!==de&&U!=="value"&&s(I,U,de,R,J,Q)}"value"in V&&s(I,"value",P.value,V.value,J)}},N=(I,P,V,Q,J,U,R,de,ce)=>{const ne=P.el=I?I.el:a(""),ue=P.anchor=I?I.anchor:a("");let{patchFlag:C,dynamicChildren:x,slotScopeIds:B}=P;B&&(de=de?de.concat(B):B),I==null?(i(ne,V,Q),i(ue,V,Q),L(P.children||[],V,ue,J,U,R,de,ce)):C>0&&C&64&&x&&I.dynamicChildren&&I.dynamicChildren.length===x.length?(S(I.dynamicChildren,x,V,J,U,R,de),(P.key!=null||J&&P===J.subTree)&&_p(I,P,!0)):j(I,P,V,ue,J,U,R,de,ce)},H=(I,P,V,Q,J,U,R,de,ce)=>{P.slotScopeIds=de,I==null?P.shapeFlag&512?J.ctx.activate(P,V,Q,R,ce):q(P,V,Q,J,U,R,ce):Z(I,P,ce)},q=(I,P,V,Q,J,U,R)=>{const de=I.component=g1(I,Q,J);if(Yu(I)&&(de.ctx.renderer=le),_1(de,!1,R),de.asyncDep){if(J&&J.registerDep(de,X,R),!I.el){const ce=de.subTree=Nt(ei);p(null,ce,P,V),I.placeholder=ce.el}}else X(de,I,P,V,J,U,R)},Z=(I,P,V)=>{const Q=P.component=I.component;if(Zy(I,P,V))if(Q.asyncDep&&!Q.asyncResolved){G(Q,P,V);return}else Q.next=P,Q.update();else P.el=I.el,Q.vnode=P},X=(I,P,V,Q,J,U,R)=>{const de=()=>{if(I.isMounted){let{next:C,bu:x,u:B,parent:K,vnode:ee}=I;{const Ce=ev(I);if(Ce){C&&(C.el=ee.el,G(I,C,R)),Ce.asyncDep.then(()=>{I.isUnmounted||de()});return}}let Y=C,Se;Ws(I,!1),C?(C.el=ee.el,G(I,C,R)):C=ee,x&&Zc(x),(Se=C.props&&C.props.onVnodeBeforeUpdate)&&hr(Se,K,C,ee),Ws(I,!0);const ge=Mm(I),Pe=I.subTree;I.subTree=ge,g(Pe,ge,f(Pe.el),k(Pe),I,J,U),C.el=ge.el,Y===null&&Jy(I,ge.el),B&&$n(B,J),(Se=C.props&&C.props.onVnodeUpdated)&&$n(()=>hr(Se,K,C,ee),J)}else{let C;const{el:x,props:B}=P,{bm:K,m:ee,parent:Y,root:Se,type:ge}=I,Pe=dl(P);Ws(I,!1),K&&Zc(K),!Pe&&(C=B&&B.onVnodeBeforeMount)&&hr(C,Y,P),Ws(I,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(ge);const Ce=I.subTree=Mm(I);g(null,Ce,V,Q,I,J,U),P.el=Ce.el}if(ee&&$n(ee,J),!Pe&&(C=B&&B.onVnodeMounted)){const Ce=P;$n(()=>hr(C,Y,Ce),J)}(P.shapeFlag&256||Y&&dl(Y.vnode)&&Y.vnode.shapeFlag&256)&&I.a&&$n(I.a,J),I.isMounted=!0,P=V=Q=null}};I.scope.on();const ce=I.effect=new s_(de);I.scope.off();const ne=I.update=ce.run.bind(ce),ue=I.job=ce.runIfDirty.bind(ce);ue.i=I,ue.id=I.uid,ce.scheduler=()=>hp(ue),Ws(I,!0),ne()},G=(I,P,V)=>{P.component=I;const Q=I.vnode.props;I.vnode=P,I.next=null,e1(I,P.props,Q,V),r1(I,P.children,V),es(),hm(I),ts()},j=(I,P,V,Q,J,U,R,de,ce=!1)=>{const ne=I&&I.children,ue=I?I.shapeFlag:0,C=P.children,{patchFlag:x,shapeFlag:B}=P;if(x>0){if(x&128){O(ne,C,V,Q,J,U,R,de,ce);return}else if(x&256){he(ne,C,V,Q,J,U,R,de,ce);return}}B&8?(ue&16&&oe(ne,J,U),C!==ne&&u(V,C)):ue&16?B&16?O(ne,C,V,Q,J,U,R,de,ce):oe(ne,J,U,!0):(ue&8&&u(V,""),B&16&&L(C,V,Q,J,U,R,de,ce))},he=(I,P,V,Q,J,U,R,de,ce)=>{I=I||oa,P=P||oa;const ne=I.length,ue=P.length,C=Math.min(ne,ue);let x;for(x=0;x<C;x++){const B=P[x]=ce?bs(P[x]):vr(P[x]);g(I[x],B,V,null,J,U,R,de,ce)}ne>ue?oe(I,J,U,!0,!1,C):L(P,V,Q,J,U,R,de,ce,C)},O=(I,P,V,Q,J,U,R,de,ce)=>{let ne=0;const ue=P.length;let C=I.length-1,x=ue-1;for(;ne<=C&&ne<=x;){const B=I[ne],K=P[ne]=ce?bs(P[ne]):vr(P[ne]);if(oo(B,K))g(B,K,V,null,J,U,R,de,ce);else break;ne++}for(;ne<=C&&ne<=x;){const B=I[C],K=P[x]=ce?bs(P[x]):vr(P[x]);if(oo(B,K))g(B,K,V,null,J,U,R,de,ce);else break;C--,x--}if(ne>C){if(ne<=x){const B=x+1,K=B<ue?P[B].el:Q;for(;ne<=x;)g(null,P[ne]=ce?bs(P[ne]):vr(P[ne]),V,K,J,U,R,de,ce),ne++}}else if(ne>x)for(;ne<=C;)Oe(I[ne],J,U,!0),ne++;else{const B=ne,K=ne,ee=new Map;for(ne=K;ne<=x;ne++){const Te=P[ne]=ce?bs(P[ne]):vr(P[ne]);Te.key!=null&&ee.set(Te.key,ne)}let Y,Se=0;const ge=x-K+1;let Pe=!1,Ce=0;const _e=new Array(ge);for(ne=0;ne<ge;ne++)_e[ne]=0;for(ne=B;ne<=C;ne++){const Te=I[ne];if(Se>=ge){Oe(Te,J,U,!0);continue}let De;if(Te.key!=null)De=ee.get(Te.key);else for(Y=K;Y<=x;Y++)if(_e[Y-K]===0&&oo(Te,P[Y])){De=Y;break}De===void 0?Oe(Te,J,U,!0):(_e[De-K]=ne+1,De>=Ce?Ce=De:Pe=!0,g(Te,P[De],V,null,J,U,R,de,ce),Se++)}const xe=Pe?l1(_e):oa;for(Y=xe.length-1,ne=ge-1;ne>=0;ne--){const Te=K+ne,De=P[Te],be=P[Te+1],Ke=Te+1<ue?be.el||tv(be):Q;_e[ne]===0?g(null,De,V,Ke,J,U,R,de,ce):Pe&&(Y<0||ne!==xe[Y]?pe(De,V,Ke,2):Y--)}}},pe=(I,P,V,Q,J=null)=>{const{el:U,type:R,transition:de,children:ce,shapeFlag:ne}=I;if(ne&6){pe(I.component.subTree,P,V,Q);return}if(ne&128){I.suspense.move(P,V,Q);return}if(ne&64){R.move(I,P,V,le);return}if(R===Dt){i(U,P,V);for(let C=0;C<ce.length;C++)pe(ce[C],P,V,Q);i(I.anchor,P,V);return}if(R===eu){M(I,P,V);return}if(Q!==2&&ne&1&&de)if(Q===0)de.beforeEnter(U),i(U,P,V),$n(()=>de.enter(U),J);else{const{leave:C,delayLeave:x,afterLeave:B}=de,K=()=>{I.ctx.isUnmounted?r(U):i(U,P,V)},ee=()=>{U._isLeaving&&U[Gr](!0),C(U,()=>{K(),B&&B()})};x?x(U,K,ee):ee()}else i(U,P,V)},Oe=(I,P,V,Q=!1,J=!1)=>{const{type:U,props:R,ref:de,children:ce,dynamicChildren:ne,shapeFlag:ue,patchFlag:C,dirs:x,cacheIndex:B}=I;if(C===-2&&(J=!1),de!=null&&(es(),fl(de,null,V,I,!0),ts()),B!=null&&(P.renderCache[B]=void 0),ue&256){P.ctx.deactivate(I);return}const K=ue&1&&x,ee=!dl(I);let Y;if(ee&&(Y=R&&R.onVnodeBeforeUnmount)&&hr(Y,P,I),ue&6)je(I.component,V,Q);else{if(ue&128){I.suspense.unmount(V,Q);return}K&&Gs(I,null,P,"beforeUnmount"),ue&64?I.type.remove(I,P,V,le,Q):ne&&!ne.hasOnce&&(U!==Dt||C>0&&C&64)?oe(ne,P,V,!1,!0):(U===Dt&&C&384||!J&&ue&16)&&oe(ce,P,V),Q&&Ve(I)}(ee&&(Y=R&&R.onVnodeUnmounted)||K)&&$n(()=>{Y&&hr(Y,P,I),K&&Gs(I,null,P,"unmounted")},V)},Ve=I=>{const{type:P,el:V,anchor:Q,transition:J}=I;if(P===Dt){qe(V,Q);return}if(P===eu){b(I);return}const U=()=>{r(V),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(I.shapeFlag&1&&J&&!J.persisted){const{leave:R,delayLeave:de}=J,ce=()=>R(V,U);de?de(I.el,U,ce):ce()}else U()},qe=(I,P)=>{let V;for(;I!==P;)V=d(I),r(I),I=V;r(P)},je=(I,P,V)=>{const{bum:Q,scope:J,job:U,subTree:R,um:de,m:ce,a:ne}=I;wm(ce),wm(ne),Q&&Zc(Q),J.stop(),U&&(U.flags|=8,Oe(R,I,P,V)),de&&$n(de,P),$n(()=>{I.isUnmounted=!0},P)},oe=(I,P,V,Q=!1,J=!1,U=0)=>{for(let R=U;R<I.length;R++)Oe(I[R],P,V,Q,J)},k=I=>{if(I.shapeFlag&6)return k(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const P=d(I.anchor||I.el),V=P&&P[P_];return V?d(V):P};let re=!1;const ae=(I,P,V)=>{let Q;I==null?P._vnode&&(Oe(P._vnode,null,null,!0),Q=P._vnode.component):g(P._vnode||null,I,P,null,null,null,V),P._vnode=I,re||(re=!0,hm(Q),T_(),re=!1)},le={p:g,um:Oe,m:pe,r:Ve,mt:q,mc:L,pc:j,pbc:S,n:k,o:n};return{render:ae,hydrate:void 0,createApp:Xy(ae)}}function gf({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ws({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function a1(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _p(n,e,t=!1){const i=n.children,r=e.children;if(Je(i)&&Je(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bs(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&_p(o,a)),a.type===Ku&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(n.type===Dt?1:0)),a.type===ei&&!a.el&&(a.el=o.el)}}function l1(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function ev(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ev(e)}function wm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function tv(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?tv(e.subTree):null}const nv=n=>n.__isSuspense;function c1(n,e){e&&e.pendingBranch?Je(n)?e.effects.push(...n):e.effects.push(n):_y(n)}const Dt=Symbol.for("v-fgt"),Ku=Symbol.for("v-txt"),ei=Symbol.for("v-cmt"),eu=Symbol.for("v-stc"),pl=[];let Ni=null;function ke(n=!1){pl.push(Ni=n?null:[])}function u1(){pl.pop(),Ni=pl[pl.length-1]||null}let Nl=1;function Mu(n,e=!1){Nl+=n,n<0&&Ni&&e&&(Ni.hasOnce=!0)}function iv(n){return n.dynamicChildren=Nl>0?Ni||oa:null,u1(),Nl>0&&Ni&&Ni.push(n),n}function We(n,e,t,i,r,s){return iv(D(n,e,t,i,r,s,!0))}function ml(n,e,t,i,r){return iv(Nt(n,e,t,i,r,!0))}function Eu(n){return n?n.__v_isVNode===!0:!1}function oo(n,e){return n.type===e.type&&n.key===e.key}const rv=({key:n})=>n??null,tu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Qt(n)||zn(n)||nt(n)?{i:$i,r:n,k:e,f:!!t}:n:null);function D(n,e=null,t=null,i=0,r=null,s=n===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rv(e),ref:e&&tu(e),scopeId:A_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$i};return a?(vp(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Qt(t)?8:16),Nl>0&&!o&&Ni&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ni.push(l),l}const Nt=f1;function f1(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Oy)&&(n=ei),Eu(n)){const a=Ns(n,e,!0);return t&&vp(a,t),Nl>0&&!s&&Ni&&(a.shapeFlag&6?Ni[Ni.indexOf(n)]=a:Ni.push(a)),a.patchFlag=-2,a}if(y1(n)&&(n=n.__vccOpts),e){e=d1(e);let{class:a,style:l}=e;a&&!Qt(a)&&(e.class=gt(a)),Gt(l)&&(fp(l)&&!Je(l)&&(l=En({},l)),e.style=Ql(l))}const o=Qt(n)?1:nv(n)?128:D_(n)?64:Gt(n)?4:nt(n)?2:0;return D(n,e,t,i,r,o,s,!0)}function d1(n){return n?fp(n)||$_(n)?En({},n):n:null}function Ns(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?h1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&rv(c),ref:e&&e.ref?t&&s?Je(s)?s.concat(tu(e)):[s,tu(e)]:tu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ns(n.ssContent),ssFallback:n.ssFallback&&Ns(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Ll(u,l.clone(u)),u}function pi(n=" ",e=0){return Nt(Ku,null,n,e)}function ji(n,e){const t=Nt(eu,null,n);return t.staticCount=e,t}function mn(n="",e=!1){return e?(ke(),ml(ei,null,n)):Nt(ei,null,n)}function vr(n){return n==null||typeof n=="boolean"?Nt(ei):Je(n)?Nt(Dt,null,n.slice()):Eu(n)?bs(n):Nt(Ku,null,String(n))}function bs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ns(n)}function vp(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Je(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vp(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!$_(e)?e._ctx=$i:r===3&&$i&&($i.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:$i},t=32):(e=String(e),i&64?(t=16,e=[pi(e)]):t=8);n.children=e,n.shapeFlag|=t}function h1(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=gt([e.class,i.class]));else if(r==="style")e.style=Ql([e.style,i.style]);else if(zu(r)){const s=e[r],o=i[r];o&&s!==o&&!(Je(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function hr(n,e,t,i=null){ur(n,e,7,[t,i])}const p1=W_();let m1=0;function g1(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||p1,s={uid:m1++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new r_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:K_(i,r),emitsOptions:X_(i,r),emit:null,emitted:null,propsDefaults:kt,inheritAttrs:i.inheritAttrs,ctx:kt,data:kt,props:kt,attrs:kt,slots:kt,refs:kt,setupState:kt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Yy.bind(null,s),n.ce&&n.ce(s),s}let ti=null;const sv=()=>ti||$i;let Tu,Rd;{const n=Gu(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Tu=e("__VUE_INSTANCE_SETTERS__",t=>ti=t),Rd=e("__VUE_SSR_SETTERS__",t=>Ul=t)}const nc=n=>{const e=ti;return Tu(n),n.scope.on(),()=>{n.scope.off(),Tu(e)}},Am=()=>{ti&&ti.scope.off(),Tu(null)};function ov(n){return n.vnode.shapeFlag&4}let Ul=!1;function _1(n,e=!1,t=!1){e&&Rd(e);const{props:i,children:r}=n.vnode,s=ov(n);Qy(n,i,s,e),i1(n,r,t||e);const o=s?v1(n,e):void 0;return e&&Rd(!1),o}function v1(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,By);const{setup:i}=t;if(i){es();const r=n.setupContext=i.length>1?b1(n):null,s=nc(n),o=ec(i,n,0,[n.props,r]),a=Kg(o);if(ts(),s(),(a||n.sp)&&!dl(n)&&k_(n),a){if(o.then(Am,Am),e)return o.then(l=>{Cm(n,l)}).catch(l=>{qu(l,n,0)});n.asyncDep=o}else Cm(n,o)}else av(n)}function Cm(n,e,t){nt(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Gt(e)&&(n.setupState=S_(e)),av(n)}function av(n,e,t){const i=n.type;n.render||(n.render=i.render||Tr);{const r=nc(n);es();try{ky(n)}finally{ts(),r()}}}const x1={get(n,e){return Un(n,"get",""),n[e]}};function b1(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,x1),slots:n.slots,emit:n.emit,expose:e}}function Zu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(S_(b_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in hl)return hl[t](n)},has(e,t){return t in e||t in hl}})):n.proxy}function y1(n){return nt(n)&&"__vccOpts"in n}const rr=(n,e)=>dy(n,e,Ul);function xp(n,e,t){try{Mu(-1);const i=arguments.length;return i===2?Gt(e)&&!Je(e)?Eu(e)?Nt(n,null,[e]):Nt(n,e):Nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Eu(t)&&(t=[t]),Nt(n,e,t))}finally{Mu(1)}}const S1="3.5.26";let Pd;const Rm=typeof window<"u"&&window.trustedTypes;if(Rm)try{Pd=Rm.createPolicy("vue",{createHTML:n=>n})}catch{}const lv=Pd?n=>Pd.createHTML(n):n=>n,M1="http://www.w3.org/2000/svg",E1="http://www.w3.org/1998/Math/MathML",Vr=typeof document<"u"?document:null,Pm=Vr&&Vr.createElement("template"),T1={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Vr.createElementNS(M1,n):e==="mathml"?Vr.createElementNS(E1,n):t?Vr.createElement(n,{is:t}):Vr.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Vr.createTextNode(n),createComment:n=>Vr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Vr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pm.innerHTML=lv(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pm.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},cs="transition",Ba="animation",Fl=Symbol("_vtc"),cv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w1=En({},N_,cv),A1=n=>(n.displayName="Transition",n.props=w1,n),Ol=A1((n,{slots:e})=>xp(wy,C1(n),e)),Xs=(n,e=[])=>{Je(n)?n.forEach(t=>t(...e)):n&&n(...e)},Dm=n=>n?Je(n)?n.some(e=>e.length>1):n.length>1:!1;function C1(n){const e={};for(const N in n)N in cv||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=n,_=R1(r),g=_&&_[0],m=_&&_[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:M,onLeave:b,onLeaveCancelled:E,onBeforeAppear:w=p,onAppear:T=y,onAppearCancelled:L=M}=e,v=(N,H,q,Z)=>{N._enterCancelled=Z,qs(N,H?u:a),qs(N,H?c:o),q&&q()},S=(N,H)=>{N._isLeaving=!1,qs(N,f),qs(N,h),qs(N,d),H&&H()},F=N=>(H,q)=>{const Z=N?T:y,X=()=>v(H,N,q);Xs(Z,[H,X]),Im(()=>{qs(H,N?l:s),Nr(H,N?u:a),Dm(Z)||Lm(H,i,g,X)})};return En(e,{onBeforeEnter(N){Xs(p,[N]),Nr(N,s),Nr(N,o)},onBeforeAppear(N){Xs(w,[N]),Nr(N,l),Nr(N,c)},onEnter:F(!1),onAppear:F(!0),onLeave(N,H){N._isLeaving=!0;const q=()=>S(N,H);Nr(N,f),N._enterCancelled?(Nr(N,d),Fm(N)):(Fm(N),Nr(N,d)),Im(()=>{N._isLeaving&&(qs(N,f),Nr(N,h),Dm(b)||Lm(N,i,m,q))}),Xs(b,[N,q])},onEnterCancelled(N){v(N,!1,void 0,!0),Xs(M,[N])},onAppearCancelled(N){v(N,!0,void 0,!0),Xs(L,[N])},onLeaveCancelled(N){S(N),Xs(E,[N])}})}function R1(n){if(n==null)return null;if(Gt(n))return[_f(n.enter),_f(n.leave)];{const e=_f(n);return[e,e]}}function _f(n){return Ub(n)}function Nr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Fl]||(n[Fl]=new Set)).add(e)}function qs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Fl];t&&(t.delete(e),t.size||(n[Fl]=void 0))}function Im(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let P1=0;function Lm(n,e,t,i){const r=n._endId=++P1,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=D1(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,d),s()},d=h=>{h.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,d)}function D1(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${cs}Delay`),s=i(`${cs}Duration`),o=Nm(r,s),a=i(`${Ba}Delay`),l=i(`${Ba}Duration`),c=Nm(a,l);let u=null,f=0,d=0;e===cs?o>0&&(u=cs,f=o,d=s.length):e===Ba?c>0&&(u=Ba,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?cs:Ba:null,d=u?u===cs?s.length:l.length:0);const h=u===cs&&/\b(?:transform|all)(?:,|$)/.test(i(`${cs}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Nm(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Um(t)+Um(n[i])))}function Um(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Fm(n){return(n?n.ownerDocument:document).body.offsetHeight}function I1(n,e,t){const i=n[Fl];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Om=Symbol("_vod"),L1=Symbol("_vsh"),N1=Symbol(""),U1=/(?:^|;)\s*display\s*:/;function F1(n,e,t){const i=n.style,r=Qt(t);let s=!1;if(t&&!r){if(e)if(Qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&nu(i,a,"")}else for(const o in e)t[o]==null&&nu(i,o,"");for(const o in t)o==="display"&&(s=!0),nu(i,o,t[o])}else if(r){if(e!==t){const o=i[N1];o&&(t+=";"+o),i.cssText=t,s=U1.test(t)}}else e&&n.removeAttribute("style");Om in n&&(n[Om]=s?i.display:"",n[L1]&&(i.display="none"))}const Bm=/\s*!important$/;function nu(n,e,t){if(Je(t))t.forEach(i=>nu(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=O1(n,e);Bm.test(t)?n.setProperty(Po(i),t.replace(Bm,""),"important"):n[i]=t}}const km=["Webkit","Moz","ms"],vf={};function O1(n,e){const t=vf[e];if(t)return t;let i=Ls(e);if(i!=="filter"&&i in n)return vf[e]=i;i=Qg(i);for(let r=0;r<km.length;r++){const s=km[r]+i;if(s in n)return vf[e]=s}return e}const zm="http://www.w3.org/1999/xlink";function Vm(n,e,t,i,r,s=Vb(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zm,e.slice(6,e.length)):n.setAttributeNS(zm,e,t):t==null||s&&!t_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":zs(t)?String(t):t)}function Hm(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?lv(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=t_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Qo(n,e,t,i){n.addEventListener(e,t,i)}function B1(n,e,t,i){n.removeEventListener(e,t,i)}const Gm=Symbol("_vei");function k1(n,e,t,i,r=null){const s=n[Gm]||(n[Gm]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=z1(e);if(i){const c=s[e]=G1(i,r);Qo(n,a,c,l)}else o&&(B1(n,a,o,l),s[e]=void 0)}}const Wm=/(?:Once|Passive|Capture)$/;function z1(n){let e;if(Wm.test(n)){e={};let i;for(;i=n.match(Wm);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Po(n.slice(2)),e]}let xf=0;const V1=Promise.resolve(),H1=()=>xf||(V1.then(()=>xf=0),xf=Date.now());function G1(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ur(W1(i,t.value),e,5,[i])};return t.value=n,t.attached=H1(),t}function W1(n,e){if(Je(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,X1=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?I1(n,i,o):e==="style"?F1(n,t,i):zu(e)?tp(e)||k1(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):q1(n,e,i,o))?(Hm(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vm(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Qt(i))?Hm(n,Ls(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vm(n,e,i,o))};function q1(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xm(e)&&nt(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xm(e)&&Qt(t)?!1:e in n}const qm=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Je(e)?t=>Zc(e,t):e};function Y1(n){n.target.composing=!0}function Ym(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bf=Symbol("_assign");function $m(n,e,t){return e&&(n=n.trim()),t&&(n=rp(n)),n}const $1={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[bf]=qm(r);const s=i||r.props&&r.props.type==="number";Qo(n,e?"change":"input",o=>{o.target.composing||n[bf]($m(n.value,t,s))}),(t||s)&&Qo(n,"change",()=>{n.value=$m(n.value,t,s)}),e||(Qo(n,"compositionstart",Y1),Qo(n,"compositionend",Ym),Qo(n,"change",Ym))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[bf]=qm(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?rp(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},j1=["ctrl","shift","alt","meta"],K1={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>j1.some(t=>n[`${t}Key`]&&!e.includes(t))},Z1=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=K1[e[o]];if(a&&a(r,e))return}return n(r,...s)}))},J1=En({patchProp:X1},T1);let jm;function Q1(){return jm||(jm=s1(J1))}const eS=((...n)=>{const e=Q1().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=nS(i);if(!r)return;const s=e._component;!nt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,tS(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function tS(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function nS(n){return Qt(n)?document.querySelector(n):n}const iS=Symbol();var Km;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Km||(Km={}));function rS(){const n=Hb(!0),e=n.run(()=>pt({}));let t=[],i=[];const r=b_({install(s){r._a=s,s.provide(iS,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const ea=typeof document<"u";function uv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function sS(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&uv(n.default)}const Et=Object.assign;function yf(n,e){const t={};for(const i in e){const r=e[i];t[i]=fr(r)?r.map(n):n(r)}return t}const gl=()=>{},fr=Array.isArray;function Zm(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const fv=/#/g,oS=/&/g,aS=/\//g,lS=/=/g,cS=/\?/g,dv=/\+/g,uS=/%5B/g,fS=/%5D/g,hv=/%5E/g,dS=/%60/g,pv=/%7B/g,hS=/%7C/g,mv=/%7D/g,pS=/%20/g;function bp(n){return n==null?"":encodeURI(""+n).replace(hS,"|").replace(uS,"[").replace(fS,"]")}function mS(n){return bp(n).replace(pv,"{").replace(mv,"}").replace(hv,"^")}function Dd(n){return bp(n).replace(dv,"%2B").replace(pS,"+").replace(fv,"%23").replace(oS,"%26").replace(dS,"`").replace(pv,"{").replace(mv,"}").replace(hv,"^")}function gS(n){return Dd(n).replace(lS,"%3D")}function _S(n){return bp(n).replace(fv,"%23").replace(cS,"%3F")}function vS(n){return _S(n).replace(aS,"%2F")}function Bl(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const xS=/\/$/,bS=n=>n.replace(xS,"");function Sf(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=n(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=ES(i??e,t),{fullPath:i+s+o,path:i,query:r,hash:Bl(o)}}function yS(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Jm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function SS(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&xa(e.matched[i],t.matched[r])&&gv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function xa(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function gv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!MS(n[t],e[t]))return!1;return!0}function MS(n,e){return fr(n)?Qm(n,e):fr(e)?Qm(e,n):n?.valueOf()===e?.valueOf()}function Qm(n,e){return fr(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function ES(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Id=(function(n){return n.pop="pop",n.push="push",n})({}),Mf=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function TS(n){if(!n)if(ea){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),bS(n)}const wS=/^[^#]+#/;function AS(n,e){return n.replace(wS,"#")+e}function CS(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ju=()=>({left:window.scrollX,top:window.scrollY});function RS(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=CS(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function e0(n,e){return(history.state?history.state.position-e:-1)+n}const Ld=new Map;function PS(n,e){Ld.set(n,e)}function DS(n){const e=Ld.get(n);return Ld.delete(n),e}function IS(n){return typeof n=="string"||n&&typeof n=="object"}function _v(n){return typeof n=="string"||typeof n=="symbol"}let Zt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const vv=Symbol("");Zt.MATCHER_NOT_FOUND+"",Zt.NAVIGATION_GUARD_REDIRECT+"",Zt.NAVIGATION_ABORTED+"",Zt.NAVIGATION_CANCELLED+"",Zt.NAVIGATION_DUPLICATED+"";function ba(n,e){return Et(new Error,{type:n,[vv]:!0},e)}function Ur(n,e){return n instanceof Error&&vv in n&&(e==null||!!(n.type&e))}const LS=["params","query","hash"];function NS(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of LS)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function US(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(dv," "),s=r.indexOf("="),o=Bl(s<0?r:r.slice(0,s)),a=s<0?null:Bl(r.slice(s+1));if(o in e){let l=e[o];fr(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function t0(n){let e="";for(let t in n){const i=n[t];if(t=gS(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(fr(i)?i.map(r=>r&&Dd(r)):[i&&Dd(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function FS(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=fr(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const OS=Symbol(""),n0=Symbol(""),yp=Symbol(""),Sp=Symbol(""),Nd=Symbol("");function ka(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function ys(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(ba(Zt.NAVIGATION_ABORTED,{from:t,to:e})):d instanceof Error?l(d):IS(d)?l(ba(Zt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ef(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(uv(l)){const c=(l.__vccOpts||l)[e];c&&s.push(ys(c,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=sS(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&ys(d,t,i,o,a,r)()}))}}return s}function BS(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>xa(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>xa(c,l))||r.push(l))}return[t,i,r]}let kS=()=>location.protocol+"//"+location.host;function xv(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),Jm(a,"")}return Jm(t,n)+i+r}function zS(n,e,t,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=xv(n,location),_=t.value,g=e.value;let m=0;if(d){if(t.value=h,e.value=d,o&&o===_){o=null;return}m=g?d.position-g.position:0}else i(h);r.forEach(p=>{p(t.value,_,{delta:m,type:Id.pop,direction:m?m>0?Mf.forward:Mf.back:Mf.unknown})})};function l(){o=t.value}function c(d){r.push(d);const h=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(Et({},d.state,{scroll:Ju()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function i0(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Ju():null}}function VS(n){const{history:e,location:t}=window,i={value:xv(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),d=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:kS()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),t[u?"replace":"assign"](d)}}function o(l,c){s(l,Et({},e.state,i0(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=Et({},r.value,e.state,{forward:l,scroll:Ju()});s(u.current,u,!0),s(l,Et({},i0(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function HS(n){n=TS(n);const e=VS(n),t=zS(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=Et({location:"",base:n,go:i,createHref:AS.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let co=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var hn=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(hn||{});const GS={type:co.Static,value:""},WS=/[a-zA-Z0-9_]/;function XS(n){if(!n)return[[]];if(n==="/")return[[GS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(h){throw new Error(`ERR (${t})/"${c}": ${h}`)}let t=hn.Static,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===hn.Static?s.push({type:co.Static,value:c}):t===hn.Param||t===hn.ParamRegExp||t===hn.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:co.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==hn.ParamRegExp){i=t,t=hn.EscapeNext;continue}switch(t){case hn.Static:l==="/"?(c&&f(),o()):l===":"?(f(),t=hn.Param):d();break;case hn.EscapeNext:d(),t=i;break;case hn.Param:l==="("?t=hn.ParamRegExp:WS.test(l)?d():(f(),t=hn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case hn.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=hn.ParamRegExpEnd:u+=l;break;case hn.ParamRegExpEnd:f(),t=hn.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===hn.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const r0="[^/]+?",qS={sensitive:!1,strict:!1,start:!0,end:!0};var jn=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(jn||{});const YS=/[.+*?^${}()[\]/\\]/g;function $S(n,e){const t=Et({},qS,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[jn.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=jn.Segment+(t.sensitive?jn.BonusCaseSensitive:0);if(d.type===co.Static)f||(r+="/"),r+=d.value.replace(YS,"\\$&"),h+=jn.Static;else if(d.type===co.Param){const{value:_,repeatable:g,optional:m,regexp:p}=d;s.push({name:_,repeatable:g,optional:m});const y=p||r0;if(y!==r0){h+=jn.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+b.message)}}let M=g?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(M=m&&c.length<2?`(?:/${M})`:"/"+M),m&&(M+="?"),r+=M,h+=jn.Dynamic,m&&(h+=jn.BonusOptional),g&&(h+=jn.BonusRepeatable),y===".*"&&(h+=jn.BonusWildcard)}u.push(h)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=jn.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",_=s[d-1];f[_.name]=h&&_.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===co.Static)u+=h.value;else if(h.type===co.Param){const{value:_,repeatable:g,optional:m}=h,p=_ in c?c[_]:"";if(fr(p)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=fr(p)?p.join("/"):p;if(!y)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function jS(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===jn.Static+jn.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===jn.Static+jn.Segment?1:-1:0}function bv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=jS(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(s0(i))return 1;if(s0(r))return-1}return r.length-i.length}function s0(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const KS={strict:!1,end:!0,sensitive:!1};function ZS(n,e,t){const i=$S(XS(n.path),t),r=Et(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function JS(n,e){const t=[],i=new Map;e=Zm(KS,e);function r(f){return i.get(f)}function s(f,d,h){const _=!h,g=a0(f);g.aliasOf=h&&h.record;const m=Zm(e,f),p=[g];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of b)p.push(a0(Et({},g,{components:h?h.record.components:g.components,path:E,aliasOf:h?h.record:g})))}let y,M;for(const b of p){const{path:E}=b;if(d&&E[0]!=="/"){const w=d.record.path,T=w[w.length-1]==="/"?"":"/";b.path=d.record.path+(E&&T+E)}if(y=ZS(b,d,m),h?h.alias.push(y):(M=M||y,M!==y&&M.alias.push(y),_&&f.name&&!l0(y)&&o(f.name)),yv(y)&&l(y),g.children){const w=g.children;for(let T=0;T<w.length;T++)s(w[T],y,h&&h.children[T])}h=h||y}return M?()=>{o(M)}:gl}function o(f){if(_v(f)){const d=i.get(f);d&&(i.delete(f),t.splice(t.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=t.indexOf(f);d>-1&&(t.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const d=tM(f,t);t.splice(d,0,f),f.record.name&&!l0(f)&&i.set(f.record.name,f)}function c(f,d){let h,_={},g,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw ba(Zt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,_=Et(o0(d.params,h.keys.filter(M=>!M.optional).concat(h.parent?h.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&o0(f.params,h.keys.map(M=>M.name))),g=h.stringify(_)}else if(f.path!=null)g=f.path,h=t.find(M=>M.re.test(g)),h&&(_=h.parse(g),m=h.record.name);else{if(h=d.name?i.get(d.name):t.find(M=>M.re.test(d.path)),!h)throw ba(Zt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,_=Et({},d.params,f.params),g=h.stringify(_)}const p=[];let y=h;for(;y;)p.unshift(y.record),y=y.parent;return{name:m,path:g,params:_,matched:p,meta:eM(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function o0(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function a0(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:QS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function QS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function l0(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function eM(n){return n.reduce((e,t)=>Et(e,t.meta),{})}function tM(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;bv(n,e[s])<0?i=s:t=s+1}const r=nM(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function nM(n){let e=n;for(;e=e.parent;)if(yv(e)&&bv(n,e)===0)return e}function yv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function c0(n){const e=wr(yp),t=wr(Sp),i=rr(()=>{const l=Kr(n.to);return e.resolve(l)}),r=rr(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const d=f.findIndex(xa.bind(null,u));if(d>-1)return d;const h=u0(l[c-2]);return c>1&&u0(u)===h&&f[f.length-1].path!==h?f.findIndex(xa.bind(null,l[c-2])):d}),s=rr(()=>r.value>-1&&oM(t.params,i.value.params)),o=rr(()=>r.value>-1&&r.value===t.matched.length-1&&gv(t.params,i.value.params));function a(l={}){if(sM(l)){const c=e[Kr(n.replace)?"replace":"push"](Kr(n.to)).catch(gl);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:rr(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function iM(n){return n.length===1?n[0]:n}const rM=pp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:c0,setup(n,{slots:e}){const t=Xu(c0(n)),{options:i}=wr(yp),r=rr(()=>({[f0(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[f0(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&iM(e.default(t));return n.custom?s:xp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Sv=rM;function sM(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function oM(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!fr(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function u0(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const f0=(n,e,t)=>n??e??t,aM=pp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=wr(Nd),r=rr(()=>n.route||i.value),s=wr(n0,0),o=rr(()=>{let c=Kr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=rr(()=>r.value.matched[o.value]);Jc(n0,rr(()=>o.value+1)),Jc(OS,a),Jc(Nd,r);const l=pt();return cl(()=>[l.value,a.value,n.name],([c,u,f],[d,h,_])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!xa(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,d=f&&f.components[u];if(!d)return d0(t.default,{Component:d,route:c});const h=f.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=xp(d,Et({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return d0(t.default,{Component:m,route:c})||m}}});function d0(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Mv=aM;function lM(n){const e=JS(n.routes,n),t=n.parseQuery||US,i=n.stringifyQuery||t0,r=n.history,s=ka(),o=ka(),a=ka(),l=ly(us);let c=us;ea&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=yf.bind(null,k=>""+k),f=yf.bind(null,vS),d=yf.bind(null,Bl);function h(k,re){let ae,le;return _v(k)?(ae=e.getRecordMatcher(k),le=re):le=k,e.addRoute(le,ae)}function _(k){const re=e.getRecordMatcher(k);re&&e.removeRoute(re)}function g(){return e.getRoutes().map(k=>k.record)}function m(k){return!!e.getRecordMatcher(k)}function p(k,re){if(re=Et({},re||l.value),typeof k=="string"){const V=Sf(t,k,re.path),Q=e.resolve({path:V.path},re),J=r.createHref(V.fullPath);return Et(V,Q,{params:d(Q.params),hash:Bl(V.hash),redirectedFrom:void 0,href:J})}let ae;if(k.path!=null)ae=Et({},k,{path:Sf(t,k.path,re.path).path});else{const V=Et({},k.params);for(const Q in V)V[Q]==null&&delete V[Q];ae=Et({},k,{params:f(V)}),re.params=f(re.params)}const le=e.resolve(ae,re),Ee=k.hash||"";le.params=u(d(le.params));const I=yS(i,Et({},k,{hash:mS(Ee),path:le.path})),P=r.createHref(I);return Et({fullPath:I,hash:Ee,query:i===t0?FS(k.query):k.query||{}},le,{redirectedFrom:void 0,href:P})}function y(k){return typeof k=="string"?Sf(t,k,l.value.path):Et({},k)}function M(k,re){if(c!==k)return ba(Zt.NAVIGATION_CANCELLED,{from:re,to:k})}function b(k){return T(k)}function E(k){return b(Et(y(k),{replace:!0}))}function w(k,re){const ae=k.matched[k.matched.length-1];if(ae&&ae.redirect){const{redirect:le}=ae;let Ee=typeof le=="function"?le(k,re):le;return typeof Ee=="string"&&(Ee=Ee.includes("?")||Ee.includes("#")?Ee=y(Ee):{path:Ee},Ee.params={}),Et({query:k.query,hash:k.hash,params:Ee.path!=null?{}:k.params},Ee)}}function T(k,re){const ae=c=p(k),le=l.value,Ee=k.state,I=k.force,P=k.replace===!0,V=w(ae,le);if(V)return T(Et(y(V),{state:typeof V=="object"?Et({},Ee,V.state):Ee,force:I,replace:P}),re||ae);const Q=ae;Q.redirectedFrom=re;let J;return!I&&SS(i,le,ae)&&(J=ba(Zt.NAVIGATION_DUPLICATED,{to:Q,from:le}),pe(le,le,!0,!1)),(J?Promise.resolve(J):S(Q,le)).catch(U=>Ur(U)?Ur(U,Zt.NAVIGATION_GUARD_REDIRECT)?U:O(U):j(U,Q,le)).then(U=>{if(U){if(Ur(U,Zt.NAVIGATION_GUARD_REDIRECT))return T(Et({replace:P},y(U.to),{state:typeof U.to=="object"?Et({},Ee,U.to.state):Ee,force:I}),re||Q)}else U=N(Q,le,!0,P,Ee);return F(Q,le,U),U})}function L(k,re){const ae=M(k,re);return ae?Promise.reject(ae):Promise.resolve()}function v(k){const re=qe.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(k):k()}function S(k,re){let ae;const[le,Ee,I]=BS(k,re);ae=Ef(le.reverse(),"beforeRouteLeave",k,re);for(const V of le)V.leaveGuards.forEach(Q=>{ae.push(ys(Q,k,re))});const P=L.bind(null,k,re);return ae.push(P),oe(ae).then(()=>{ae=[];for(const V of s.list())ae.push(ys(V,k,re));return ae.push(P),oe(ae)}).then(()=>{ae=Ef(Ee,"beforeRouteUpdate",k,re);for(const V of Ee)V.updateGuards.forEach(Q=>{ae.push(ys(Q,k,re))});return ae.push(P),oe(ae)}).then(()=>{ae=[];for(const V of I)if(V.beforeEnter)if(fr(V.beforeEnter))for(const Q of V.beforeEnter)ae.push(ys(Q,k,re));else ae.push(ys(V.beforeEnter,k,re));return ae.push(P),oe(ae)}).then(()=>(k.matched.forEach(V=>V.enterCallbacks={}),ae=Ef(I,"beforeRouteEnter",k,re,v),ae.push(P),oe(ae))).then(()=>{ae=[];for(const V of o.list())ae.push(ys(V,k,re));return ae.push(P),oe(ae)}).catch(V=>Ur(V,Zt.NAVIGATION_CANCELLED)?V:Promise.reject(V))}function F(k,re,ae){a.list().forEach(le=>v(()=>le(k,re,ae)))}function N(k,re,ae,le,Ee){const I=M(k,re);if(I)return I;const P=re===us,V=ea?history.state:{};ae&&(le||P?r.replace(k.fullPath,Et({scroll:P&&V&&V.scroll},Ee)):r.push(k.fullPath,Ee)),l.value=k,pe(k,re,ae,P),O()}let H;function q(){H||(H=r.listen((k,re,ae)=>{if(!je.listening)return;const le=p(k),Ee=w(le,je.currentRoute.value);if(Ee){T(Et(Ee,{replace:!0,force:!0}),le).catch(gl);return}c=le;const I=l.value;ea&&PS(e0(I.fullPath,ae.delta),Ju()),S(le,I).catch(P=>Ur(P,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_CANCELLED)?P:Ur(P,Zt.NAVIGATION_GUARD_REDIRECT)?(T(Et(y(P.to),{force:!0}),le).then(V=>{Ur(V,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===Id.pop&&r.go(-1,!1)}).catch(gl),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),j(P,le,I))).then(P=>{P=P||N(le,I,!1),P&&(ae.delta&&!Ur(P,Zt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===Id.pop&&Ur(P,Zt.NAVIGATION_ABORTED|Zt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),F(le,I,P)}).catch(gl)}))}let Z=ka(),X=ka(),G;function j(k,re,ae){O(k);const le=X.list();return le.length?le.forEach(Ee=>Ee(k,re,ae)):console.error(k),Promise.reject(k)}function he(){return G&&l.value!==us?Promise.resolve():new Promise((k,re)=>{Z.add([k,re])})}function O(k){return G||(G=!k,q(),Z.list().forEach(([re,ae])=>k?ae(k):re()),Z.reset()),k}function pe(k,re,ae,le){const{scrollBehavior:Ee}=n;if(!ea||!Ee)return Promise.resolve();const I=!ae&&DS(e0(k.fullPath,0))||(le||!ae)&&history.state&&history.state.scroll||null;return dp().then(()=>Ee(k,re,I)).then(P=>P&&RS(P)).catch(P=>j(P,k,re))}const Oe=k=>r.go(k);let Ve;const qe=new Set,je={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:n,push:b,replace:E,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:he,install(k){k.component("RouterLink",Sv),k.component("RouterView",Mv),k.config.globalProperties.$router=je,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>Kr(l)}),ea&&!Ve&&l.value===us&&(Ve=!0,b(r.location).catch(le=>{}));const re={};for(const le in us)Object.defineProperty(re,le,{get:()=>l.value[le],enumerable:!0});k.provide(yp,je),k.provide(Sp,x_(re)),k.provide(Nd,l);const ae=k.unmount;qe.add(k),k.unmount=function(){qe.delete(k),qe.size<1&&(c=us,H&&H(),H=null,l.value=us,Ve=!1,G=!1),ae()}}};function oe(k){return k.reduce((re,ae)=>re.then(()=>v(ae)),Promise.resolve())}return je}function cM(n){return wr(Sp)}var uM="@vercel/speed-insights",fM="1.3.1",dM=()=>{window.si||(window.si=function(...e){(window.siq=window.siq||[]).push(e)})};function hM(){return typeof window<"u"}function pM(){try{const n="production"}catch{}return"production"}function Ev(){return pM()==="development"}function mM(n,e){if(!n||!e)return n;let t=n;try{const i=Object.entries(e);for(const[r,s]of i)if(!Array.isArray(s)){const o=h0(s);o.test(t)&&(t=t.replace(o,`/[${r}]`))}for(const[r,s]of i)if(Array.isArray(s)){const o=h0(s.join("/"));o.test(t)&&(t=t.replace(o,`/[...${r}]`))}return t}catch{return n}}function h0(n){return new RegExp(`/${gM(n)}(?=[/?#]|$)`)}function gM(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function _M(n){return n.scriptSrc?n.scriptSrc:Ev()?"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js":n.dsn?"https://va.vercel-scripts.com/v1/speed-insights/script.js":n.basePath?`${n.basePath}/speed-insights/script.js`:"/_vercel/speed-insights/script.js"}function vM(n={}){var e;if(!hM()||n.route===null)return null;dM();const t=_M(n);if(document.head.querySelector(`script[src*="${t}"]`))return null;n.beforeSend&&((e=window.si)==null||e.call(window,"beforeSend",n.beforeSend));const i=document.createElement("script");return i.src=t,i.defer=!0,i.dataset.sdkn=uM+(n.framework?`/${n.framework}`:""),i.dataset.sdkv=fM,n.sampleRate&&(i.dataset.sampleRate=n.sampleRate.toString()),n.route&&(i.dataset.route=n.route),n.endpoint?i.dataset.endpoint=n.endpoint:n.basePath&&(i.dataset.endpoint=`${n.basePath}/speed-insights/vitals`),n.dsn&&(i.dataset.dsn=n.dsn),Ev()&&n.debug===!1&&(i.dataset.debug="false"),i.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${t}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(i),{setRoute:r=>{i.dataset.route=r??void 0}}}function xM(){try{return}catch{}}function bM(n="vue"){return pp({props:["dsn","sampleRate","beforeSend","debug","scriptSrc","endpoint"],setup(e){const t=cM(),i=vM({...e,framework:n,basePath:xM()});if(t&&i){const r=()=>{i.setRoute(mM(t.path,t.params))};r(),cl(t,r)}},render(){return null}})}var yM=bM();const Mp="182",SM=0,p0=1,MM=2,iu=1,EM=2,Za=3,Us=0,ri=1,sr=2,Zr=0,ua=1,To=2,m0=3,g0=4,TM=5,ao=100,wM=101,AM=102,CM=103,RM=104,PM=200,DM=201,IM=202,LM=203,Ud=204,Fd=205,NM=206,UM=207,FM=208,OM=209,BM=210,kM=211,zM=212,VM=213,HM=214,Od=0,Bd=1,kd=2,ya=3,zd=4,Vd=5,Hd=6,Gd=7,Tv=0,GM=1,WM=2,Ar=0,wv=1,Av=2,Cv=3,Rv=4,Pv=5,Dv=6,Iv=7,Lv=300,wo=301,Sa=302,Wd=303,Xd=304,Qu=306,qd=1e3,$r=1001,Yd=1002,wn=1003,XM=1004,mc=1005,kn=1006,Tf=1007,uo=1008,Yi=1009,Nv=1010,Uv=1011,kl=1012,Ep=1013,Pr=1014,yr=1015,is=1016,Tp=1017,wp=1018,zl=1020,Fv=35902,Ov=35899,Bv=1021,kv=1022,ar=1023,rs=1026,fo=1027,zv=1028,Ap=1029,Ma=1030,Cp=1031,Rp=1033,ru=33776,su=33777,ou=33778,au=33779,$d=35840,jd=35841,Kd=35842,Zd=35843,Jd=36196,Qd=37492,eh=37496,th=37488,nh=37489,ih=37490,rh=37491,sh=37808,oh=37809,ah=37810,lh=37811,ch=37812,uh=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,gh=37819,_h=37820,vh=37821,xh=36492,bh=36494,yh=36495,Sh=36283,Mh=36284,Eh=36285,Th=36286,qM=3200,YM=0,$M=1,Ss="",Wi="srgb",Ea="srgb-linear",wu="linear",Pt="srgb",Uo=7680,_0=519,jM=512,KM=513,ZM=514,Pp=515,JM=516,QM=517,Dp=518,eE=519,v0=35044,x0="300 es",Sr=2e3,Au=2001;function Vv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tE(){const n=Cu("canvas");return n.style.display="block",n}const b0={};function y0(...n){const e="THREE."+n.shift();console.log(e,...n)}function tt(...n){const e="THREE."+n.shift();console.warn(e,...n)}function yt(...n){const e="THREE."+n.shift();console.error(e,...n)}function Vl(...n){const e=n.join(" ");e in b0||(b0[e]=!0,tt(...n))}function nE(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class La{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wf=Math.PI/180,wh=180/Math.PI;function ic(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function iE(n,e){return(n%e+e)%e}function Af(n,e,t){return(1-t)*n+t*e}function za(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rc{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],_=s[o+2],g=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a>=1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==d||c!==h||u!==_){let m=l*d+c*h+u*_+f*g;m<0&&(d=-d,h=-h,_=-_,g=-g,m=-m);let p=1-a;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+g*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+_*a,f=f*p+g*a;const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*h-c*d,e[t+1]=l*_+u*d+c*f-a*h,e[t+2]=c*_+u*h+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class te{constructor(e=0,t=0,i=0){te.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cf.copy(this).projectOnVector(e),this.sub(Cf)}reflect(e){return this.sub(Cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cf=new te,S0=new rc;class rt{constructor(e,t,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],_=i[8],g=r[0],m=r[3],p=r[6],y=r[1],M=r[4],b=r[7],E=r[2],w=r[5],T=r[8];return s[0]=o*g+a*y+l*E,s[3]=o*m+a*M+l*w,s[6]=o*p+a*b+l*T,s[1]=c*g+u*y+f*E,s[4]=c*m+u*M+f*w,s[7]=c*p+u*b+f*T,s[2]=d*g+h*y+_*E,s[5]=d*m+h*M+_*w,s[8]=d*p+h*b+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=h*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new rt,M0=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const n={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Pt&&(r.r=Jr(r.r),r.g=Jr(r.g),r.b=Jr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(r.r=fa(r.r),r.g=fa(r.g),r.b=fa(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ss?wu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ea]:{primaries:e,whitePoint:i,transfer:wu,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wi},outputColorSpaceConfig:{drawingBufferColorSpace:Wi}},[Wi]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wi}}}),n}const _t=rE();function Jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fo;class sE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fo===void 0&&(Fo=Cu("canvas")),Fo.width=e.width,Fo.height=e.height;const r=Fo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Fo}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jr(t[i]/255)*255):t[i]=Jr(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oE=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=ic(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pf(r[o].image)):s.push(Pf(r[o]))}else s=Pf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Pf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let aE=0;const Df=new te;class si extends La{constructor(e=si.DEFAULT_IMAGE,t=si.DEFAULT_MAPPING,i=$r,r=$r,s=kn,o=uo,a=ar,l=Yi,c=si.DEFAULT_ANISOTROPY,u=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=ic(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Df).x}get height(){return this.source.getSize(Df).y}get depth(){return this.source.getSize(Df).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Lv;si.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,r=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(h+1)/2,E=(p+1)/2,w=(u+d)/4,T=(f+g)/4,L=(_+m)/4;return M>b&&M>E?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=T/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=w/r,s=L/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lE extends La{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new si(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ip(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends lE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hv extends si{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends si{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sc{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(er.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(er.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,er):er.fromBufferAttribute(s,o),er.applyMatrix4(e.matrixWorld),this.expandByPoint(er);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),_c.subVectors(this.max,Va),Oo.subVectors(e.a,Va),Bo.subVectors(e.b,Va),ko.subVectors(e.c,Va),fs.subVectors(Bo,Oo),ds.subVectors(ko,Bo),Ys.subVectors(Oo,ko);let t=[0,-fs.z,fs.y,0,-ds.z,ds.y,0,-Ys.z,Ys.y,fs.z,0,-fs.x,ds.z,0,-ds.x,Ys.z,0,-Ys.x,-fs.y,fs.x,0,-ds.y,ds.x,0,-Ys.y,Ys.x,0];return!If(t,Oo,Bo,ko,_c)||(t=[1,0,0,0,1,0,0,0,1],!If(t,Oo,Bo,ko,_c))?!1:(vc.crossVectors(fs,ds),t=[vc.x,vc.y,vc.z],If(t,Oo,Bo,ko,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,er).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(er).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fr=[new te,new te,new te,new te,new te,new te,new te,new te],er=new te,gc=new sc,Oo=new te,Bo=new te,ko=new te,fs=new te,ds=new te,Ys=new te,Va=new te,_c=new te,vc=new te,$s=new te;function If(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){$s.fromArray(n,s);const a=r.x*Math.abs($s.x)+r.y*Math.abs($s.y)+r.z*Math.abs($s.z),l=e.dot($s),c=t.dot($s),u=i.dot($s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uE=new sc,Ha=new te,Lf=new te;class ef{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);const t=Ha.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Lf)),this.expandByPoint(Ha.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Or=new te,Nf=new te,xc=new te,hs=new te,Uf=new te,bc=new te,Ff=new te;class Gv{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Or.copy(this.origin).addScaledVector(this.direction,t),Or.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Nf.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(Nf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=hs.dot(this.direction),l=-hs.dot(xc),c=hs.lengthSq(),u=Math.abs(1-o*o);let f,d,h,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nf).addScaledVector(xc,d),h}intersectSphere(e,t){Or.subVectors(e.center,this.origin);const i=Or.dot(this.direction),r=Or.dot(Or)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Or)!==null}intersectTriangle(e,t,i,r,s){Uf.subVectors(t,e),bc.subVectors(i,e),Ff.crossVectors(Uf,bc);let o=this.direction.dot(Ff),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);const l=a*this.direction.dot(bc.crossVectors(hs,bc));if(l<0)return null;const c=a*this.direction.dot(Uf.cross(hs));if(c<0||l+c>o)return null;const u=-a*hs.dot(Ff);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,h,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/zo.setFromMatrixColumn(e,0).length(),s=1/zo.setFromMatrixColumn(e,1).length(),o=1/zo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+h*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d+g*a,t[4]=_*a-h,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=h*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,_=c*u,g=c*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+h*a,t[1]=h+_*a,t[5]=o*u,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-h,t[8]=d*c+g,t[1]=l*f,t[5]=g*c+d,t[9]=h*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-d*f,t[8]=_*f+h,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,h=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+g,t[5]=o*u,t[9]=h*f-_,t[2]=_*f-h,t[6]=a*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fE,e,dE)}lookAt(e,t,i){const r=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),ps.crossVectors(i,wi),ps.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),ps.crossVectors(i,wi)),ps.normalize(),yc.crossVectors(wi,ps),r[0]=ps.x,r[4]=yc.x,r[8]=wi.x,r[1]=ps.y,r[5]=yc.y,r[9]=wi.y,r[2]=ps.z,r[6]=yc.z,r[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],_=i[2],g=i[6],m=i[10],p=i[14],y=i[3],M=i[7],b=i[11],E=i[15],w=r[0],T=r[4],L=r[8],v=r[12],S=r[1],F=r[5],N=r[9],H=r[13],q=r[2],Z=r[6],X=r[10],G=r[14],j=r[3],he=r[7],O=r[11],pe=r[15];return s[0]=o*w+a*S+l*q+c*j,s[4]=o*T+a*F+l*Z+c*he,s[8]=o*L+a*N+l*X+c*O,s[12]=o*v+a*H+l*G+c*pe,s[1]=u*w+f*S+d*q+h*j,s[5]=u*T+f*F+d*Z+h*he,s[9]=u*L+f*N+d*X+h*O,s[13]=u*v+f*H+d*G+h*pe,s[2]=_*w+g*S+m*q+p*j,s[6]=_*T+g*F+m*Z+p*he,s[10]=_*L+g*N+m*X+p*O,s[14]=_*v+g*H+m*G+p*pe,s[3]=y*w+M*S+b*q+E*j,s[7]=y*T+M*F+b*Z+E*he,s[11]=y*L+M*N+b*X+E*O,s[15]=y*v+M*H+b*G+E*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],_=e[3],g=e[7],m=e[11],p=e[15],y=l*h-c*d,M=a*h-c*f,b=a*d-l*f,E=o*h-c*u,w=o*d-l*u,T=o*f-a*u;return t*(g*y-m*M+p*b)-i*(_*y-m*E+p*w)+r*(_*M-g*E+p*T)-s*(_*b-g*w+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],_=e[12],g=e[13],m=e[14],p=e[15],y=f*m*c-g*d*c+g*l*h-a*m*h-f*l*p+a*d*p,M=_*d*c-u*m*c-_*l*h+o*m*h+u*l*p-o*d*p,b=u*g*c-_*f*c+_*a*h-o*g*h-u*a*p+o*f*p,E=_*f*l-u*g*l-_*a*d+o*g*d+u*a*m-o*f*m,w=t*y+i*M+r*b+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(g*d*s-f*m*s-g*r*h+i*m*h+f*r*p-i*d*p)*T,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*T,e[4]=M*T,e[5]=(u*m*s-_*d*s+_*r*h-t*m*h-u*r*p+t*d*p)*T,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*h+t*l*h)*T,e[8]=b*T,e[9]=(_*f*s-u*g*s-_*i*h+t*g*h+u*i*p-t*f*p)*T,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*h-t*a*h)*T,e[12]=E*T,e[13]=(u*g*r-_*f*r+_*i*d-t*g*d-u*i*m+t*f*m)*T,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,_=s*f,g=o*u,m=o*f,p=a*f,y=l*c,M=l*u,b=l*f,E=i.x,w=i.y,T=i.z;return r[0]=(1-(g+p))*E,r[1]=(h+b)*E,r[2]=(_-M)*E,r[3]=0,r[4]=(h-b)*w,r[5]=(1-(d+p))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(_+M)*T,r[9]=(m-y)*T,r[10]=(1-(d+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=zo.set(r[0],r[1],r[2]).length();const o=zo.set(r[4],r[5],r[6]).length(),a=zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),tr.copy(this);const c=1/s,u=1/o,f=1/a;return tr.elements[0]*=c,tr.elements[1]*=c,tr.elements[2]*=c,tr.elements[4]*=u,tr.elements[5]*=u,tr.elements[6]*=u,tr.elements[8]*=f,tr.elements[9]*=f,tr.elements[10]*=f,t.setFromRotationMatrix(tr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Sr,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Sr)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Au)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Sr,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Sr)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Au)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zo=new te,tr=new sn,fE=new te(0,0,0),dE=new te(1,1,1),ps=new te,yc=new te,wi=new te,T0=new sn,w0=new rc;class ss{constructor(e=0,t=0,i=0,r=ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return T0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(T0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ss.DEFAULT_ORDER="XYZ";class Wv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hE=0;const A0=new te,Vo=new rc,Br=new sn,Sc=new te,Ga=new te,pE=new te,mE=new rc,C0=new te(1,0,0),R0=new te(0,1,0),P0=new te(0,0,1),D0={type:"added"},gE={type:"removed"},Ho={type:"childadded",child:null},Of={type:"childremoved",child:null};class gi extends La{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=ic(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new te,t=new ss,i=new rc,r=new te(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new sn},normalMatrix:{value:new rt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.multiply(Vo),this}rotateOnWorldAxis(e,t){return Vo.setFromAxisAngle(e,t),this.quaternion.premultiply(Vo),this}rotateX(e){return this.rotateOnAxis(C0,e)}rotateY(e){return this.rotateOnAxis(R0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,t){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(C0,e)}translateY(e){return this.translateOnAxis(R0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Br.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Sc.copy(e):Sc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Br.lookAt(Ga,Sc,this.up):Br.lookAt(Sc,Ga,this.up),this.quaternion.setFromRotationMatrix(Br),r&&(Br.extractRotation(r.matrixWorld),Vo.setFromRotationMatrix(Br),this.quaternion.premultiply(Vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gE),Of.child=e,this.dispatchEvent(Of),Of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Br.multiply(e.parent.matrixWorld)),e.applyMatrix4(Br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,pE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,mE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gi.DEFAULT_UP=new te(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nr=new te,kr=new te,Bf=new te,zr=new te,Go=new te,Wo=new te,I0=new te,kf=new te,zf=new te,Vf=new te,Hf=new nn,Gf=new nn,Wf=new nn;class or{constructor(e=new te,t=new te,i=new te){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nr.subVectors(e,t),r.cross(nr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nr.subVectors(r,t),kr.subVectors(i,t),Bf.subVectors(e,t);const o=nr.dot(nr),a=nr.dot(kr),l=nr.dot(Bf),c=kr.dot(kr),u=kr.dot(Bf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zr)===null?!1:zr.x>=0&&zr.y>=0&&zr.x+zr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,zr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,zr.x),l.addScaledVector(o,zr.y),l.addScaledVector(a,zr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Hf.setScalar(0),Gf.setScalar(0),Wf.setScalar(0),Hf.fromBufferAttribute(e,t),Gf.fromBufferAttribute(e,i),Wf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Hf,s.x),o.addScaledVector(Gf,s.y),o.addScaledVector(Wf,s.z),o}static isFrontFacing(e,t,i,r){return nr.subVectors(i,t),kr.subVectors(e,t),nr.cross(kr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nr.subVectors(this.c,this.b),kr.subVectors(this.a,this.b),nr.cross(kr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return or.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return or.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return or.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return or.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return or.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Go.subVectors(r,i),Wo.subVectors(s,i),kf.subVectors(e,i);const l=Go.dot(kf),c=Wo.dot(kf);if(l<=0&&c<=0)return t.copy(i);zf.subVectors(e,r);const u=Go.dot(zf),f=Wo.dot(zf);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Go,o);Vf.subVectors(e,s);const h=Go.dot(Vf),_=Wo.dot(Vf);if(_>=0&&h<=_)return t.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Wo,a);const m=u*_-h*f;if(m<=0&&f-u>=0&&h-_>=0)return I0.subVectors(s,r),a=(f-u)/(f-u+(h-_)),t.copy(r).addScaledVector(I0,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Go,o).addScaledVector(Wo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Mc={h:0,s:0,l:0};function Xf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=_t.workingColorSpace){if(e=iE(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Xf(o,s,e+1/3),this.g=Xf(o,s,e),this.b=Xf(o,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Wi){function i(s){s!==void 0&&parseFloat(s)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wi){const i=Xv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jr(e.r),this.g=Jr(e.g),this.b=Jr(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wi){return _t.workingToColorSpace(In.copy(this),e),Math.round(ht(In.r*255,0,255))*65536+Math.round(ht(In.g*255,0,255))*256+Math.round(ht(In.b*255,0,255))}getHexString(e=Wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(In.copy(this),t);const i=In.r,r=In.g,s=In.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Wi){_t.workingToColorSpace(In.copy(this),e);const t=In.r,i=In.g,r=In.b;return e!==Wi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+t,ms.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ms),e.getHSL(Mc);const i=Af(ms.h,Mc.h,t),r=Af(ms.s,Mc.s,t),s=Af(ms.l,Mc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new St;St.NAMES=Xv;let _E=0;class oc extends La{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=ic(),this.name="",this.type="Material",this.blending=ua,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Fd,this.blendEquation=ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(i.blending=this.blending),this.side!==Us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Fd&&(i.blendDst=this.blendDst),this.blendEquation!==ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Uo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Uo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Uo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qv extends oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ss,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new te,Ec=new At;let vE=0;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=v0,this.updateRanges=[],this.gpuType=yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXY(t,Ec.x,Ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=za(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=fi(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=za(t,this.array)),t}setX(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=za(t,this.array)),t}setY(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=za(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=za(t,this.array)),t}setW(e,t){return this.normalized&&(t=fi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array),r=fi(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=fi(t,this.array),i=fi(i,this.array),r=fi(r,this.array),s=fi(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==v0&&(e.usage=this.usage),e}}class Yv extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $v extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class oi extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let xE=0;const Hi=new sn,qf=new gi,Xo=new te,Ai=new sc,Wa=new sc,yn=new te;class ai extends La{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=ic(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vv(e)?$v:Yv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,i){return Hi.makeTranslation(e,t,i),this.applyMatrix4(Hi),this}scale(e,t,i){return Hi.makeScale(e,t,i),this.applyMatrix4(Hi),this}lookAt(e){return qf.lookAt(e),qf.updateMatrix(),this.applyMatrix4(qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xo).negate(),this.translate(Xo.x,Xo.y,Xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ai.setFromBufferAttribute(s),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ef);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const i=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Wa.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(Ai.min,Wa.min),Ai.expandByPoint(yn),yn.addVectors(Ai.max,Wa.max),Ai.expandByPoint(yn)):(Ai.expandByPoint(Wa.min),Ai.expandByPoint(Wa.max))}Ai.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)yn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(yn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)yn.fromBufferAttribute(a,c),l&&(Xo.fromBufferAttribute(e,c),yn.add(Xo)),r=Math.max(r,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new te,l[L]=new te;const c=new te,u=new te,f=new te,d=new At,h=new At,_=new At,g=new te,m=new te;function p(L,v,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,L),h.fromBufferAttribute(s,v),_.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const F=1/(h.x*_.y-_.x*h.y);isFinite(F)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(F),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(F),a[L].add(g),a[v].add(g),a[S].add(g),l[L].add(m),l[v].add(m),l[S].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,v=y.length;L<v;++L){const S=y[L],F=S.start,N=S.count;for(let H=F,q=F+N;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new te,b=new te,E=new te,w=new te;function T(L){E.fromBufferAttribute(r,L),w.copy(E);const v=a[L];M.copy(v),M.sub(E.multiplyScalar(E.dot(v))).normalize(),b.crossVectors(w,v);const F=b.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,F)}for(let L=0,v=y.length;L<v;++L){const S=y[L],F=S.start,N=S.count;for(let H=F,q=F+N;H<q;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new te,s=new te,o=new te,a=new te,l=new te,c=new te,u=new te,f=new te;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?h=l[g]*a.data.stride+a.offset:h=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[h++]}return new Vn(d,u,f)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const L0=new sn,js=new Gv,Tc=new ef,N0=new te,wc=new te,Ac=new te,Cc=new te,Yf=new te,Rc=new te,U0=new te,Pc=new te;class _i extends gi{constructor(e=new ai,t=new qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Rc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Yf.fromBufferAttribute(f,e),o?Rc.addScaledVector(Yf,u):Rc.addScaledVector(Yf.sub(t),u))}t.add(Rc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tc.copy(i.boundingSphere),Tc.applyMatrix4(s),js.copy(e.ray).recast(e.near),!(Tc.containsPoint(js.origin)===!1&&(js.intersectSphere(Tc,N0)===null||js.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(L0.copy(s).invert(),js.copy(e.ray).applyMatrix4(L0),!(i.boundingBox!==null&&js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,js)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],y=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,E=M;b<E;b+=3){const w=a.getX(b),T=a.getX(b+1),L=a.getX(b+2);r=Dc(this,p,e,i,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),b=a.getX(m+2);r=Dc(this,o,e,i,c,u,f,y,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],y=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,E=M;b<E;b+=3){const w=b,T=b+1,L=b+2;r=Dc(this,p,e,i,c,u,f,w,T,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=_,p=g;m<p;m+=3){const y=m,M=m+1,b=m+2;r=Dc(this,o,e,i,c,u,f,y,M,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function bE(n,e,t,i,r,s,o,a){let l;if(e.side===ri?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Us,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Pc);return c<t.near||c>t.far?null:{distance:c,point:Pc.clone(),object:n}}function Dc(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,wc),n.getVertexPosition(l,Ac),n.getVertexPosition(c,Cc);const u=bE(n,e,t,i,wc,Ac,Cc,U0);if(u){const f=new te;or.getBarycoord(U0,wc,Ac,Cc,f),r&&(u.uv=or.getInterpolatedAttribute(r,a,l,c,f,new At)),s&&(u.uv1=or.getInterpolatedAttribute(s,a,l,c,f,new At)),o&&(u.normal=or.getInterpolatedAttribute(o,a,l,c,f,new te),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new te,materialIndex:0};or.getNormal(wc,Ac,Cc,d.normal),u.face=d,u.barycoord=f}return u}class ac extends ai{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new oi(c,3)),this.setAttribute("normal",new oi(u,3)),this.setAttribute("uv",new oi(f,2));function _(g,m,p,y,M,b,E,w,T,L,v){const S=b/T,F=E/L,N=b/2,H=E/2,q=w/2,Z=T+1,X=L+1;let G=0,j=0;const he=new te;for(let O=0;O<X;O++){const pe=O*F-H;for(let Oe=0;Oe<Z;Oe++){const Ve=Oe*S-N;he[g]=Ve*y,he[m]=pe*M,he[p]=q,c.push(he.x,he.y,he.z),he[g]=0,he[m]=0,he[p]=w>0?1:-1,u.push(he.x,he.y,he.z),f.push(Oe/T),f.push(1-O/L),G+=1}}for(let O=0;O<L;O++)for(let pe=0;pe<T;pe++){const Oe=d+pe+Z*O,Ve=d+pe+Z*(O+1),qe=d+(pe+1)+Z*(O+1),je=d+(pe+1)+Z*O;l.push(Oe,Ve,je),l.push(Ve,qe,je),j+=6}a.addGroup(h,j,v),h+=j,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ta(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Yn(n){const e={};for(let t=0;t<n.length;t++){const i=Ta(n[t]);for(const r in i)e[r]=i[r]}return e}function yE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function jv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const SE={clone:Ta,merge:Yn};var ME=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ME,this.fragmentShader=EE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ta(e.uniforms),this.uniformsGroups=yE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kv extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new te,F0=new At,O0=new At;class mi extends Kv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wh*2*Math.atan(Math.tan(wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gs.x,gs.y).multiplyScalar(-e/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-e/gs.z)}getViewSize(e,t){return this.getViewBounds(e,F0,O0),t.subVectors(O0,F0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qo=-90,Yo=1;class TE extends gi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mi(qo,Yo,e,t);r.layers=this.layers,this.add(r);const s=new mi(qo,Yo,e,t);s.layers=this.layers,this.add(s);const o=new mi(qo,Yo,e,t);o.layers=this.layers,this.add(o);const a=new mi(qo,Yo,e,t);a.layers=this.layers,this.add(a);const l=new mi(qo,Yo,e,t);l.layers=this.layers,this.add(l);const c=new mi(qo,Yo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Au)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Zv extends si{constructor(e=[],t=wo,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ac(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Ta(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:Zr});s.uniforms.tEquirect.value=t;const o=new _i(r,s),a=t.minFilter;return t.minFilter===uo&&(t.minFilter=kn),new TE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ic extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class $f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ic;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Lp extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ss,this.environmentIntensity=1,this.environmentRotation=new ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class AE extends si{constructor(e=null,t=1,i=1,r,s,o,a,l,c=wn,u=wn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jf=new te,CE=new te,RE=new rt;class no{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=jf.subVectors(i,t).cross(CE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(jf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RE.getNormalMatrix(e),r=this.coplanarPoint(jf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new ef,PE=new At(.5,.5),Lc=new te;class Qv{constructor(e=new no,t=new no,i=new no,r=new no,s=new no,o=new no){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Sr,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],_=s[8],g=s[9],m=s[10],p=s[11],y=s[12],M=s[13],b=s[14],E=s[15];if(r[0].setComponents(c-o,h-u,p-_,E-y).normalize(),r[1].setComponents(c+o,h+u,p+_,E+y).normalize(),r[2].setComponents(c+a,h+f,p+g,E+M).normalize(),r[3].setComponents(c-a,h-f,p-g,E-M).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,h-d,p-m,E-b).normalize();else if(r[4].setComponents(c-l,h-d,p-m,E-b).normalize(),t===Sr)r[5].setComponents(c+l,h+d,p+m,E+b).normalize();else if(t===Au)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const t=PE.distanceTo(e.center);return Ks.radius=.7071067811865476+t,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Lc.x=r.normal.x>0?e.max.x:e.min.x,Lc.y=r.normal.y>0?e.max.y:e.min.y,Lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ex extends oc{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const B0=new sn,Ah=new Gv,Nc=new ef,Uc=new te;class Np extends gi{constructor(e=new ai,t=new ex){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),Nc.radius+=s,e.ray.intersectsSphere(Nc)===!1)return;B0.copy(r).invert(),Ah.copy(e.ray).applyMatrix4(B0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let _=d,g=h;_<g;_++){const m=c.getX(_);Uc.fromBufferAttribute(f,m),k0(Uc,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let _=d,g=h;_<g;_++)Uc.fromBufferAttribute(f,_),k0(Uc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function k0(n,e,t,i,r,s,o){const a=Ah.distanceSqToPoint(n);if(a<t){const l=new te;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hl extends si{constructor(e,t,i=Pr,r,s,o,a=wn,l=wn,c,u=rs,f=1){if(u!==rs&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class DE extends Hl{constructor(e,t=Pr,i=wo,r,s,o=wn,a=wn,l,c=rs){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tx extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lc extends ai{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,h=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*d-o;for(let M=0;M<c;M++){const b=M*f-s;_.push(b,-y,0),g.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,b=y+c*(p+1),E=y+1+c*(p+1),w=y+1+c*p;h.push(M,b,w),h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Up extends ai{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let f=e;const d=(t-e)/r,h=new te,_=new At;for(let g=0;g<=r;g++){for(let m=0;m<=i;m++){const p=s+m/i*o;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}f+=d}for(let g=0;g<r;g++){const m=g*(i+1);for(let p=0;p<i;p++){const y=p+m,M=y,b=y+i+1,E=y+i+2,w=y+1;a.push(M,b,w),a.push(b,E,w)}}this.setIndex(a),this.setAttribute("position",new oi(l,3)),this.setAttribute("normal",new oi(c,3)),this.setAttribute("uv",new oi(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gl extends ai{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new te,d=new te,h=[],_=[],g=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let b=0;p===0&&o===0?b=.5/t:p===i&&l===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const w=E/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+M*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),m.push(w+b,1-M),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=u[p][y+1],b=u[p][y],E=u[p+1][y],w=u[p+1][y+1];(p!==0||o>0)&&h.push(M,b,w),(p!==i-1||l<Math.PI)&&h.push(b,E,w)}this.setIndex(h),this.setAttribute("position",new oi(_,3)),this.setAttribute("normal",new oi(g,3)),this.setAttribute("uv",new oi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class IE extends Cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class LE extends oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nx extends Kv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class UE extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function z0(n,e,t,i){const r=FE(i);switch(t){case Bv:return n*e;case zv:return n*e/r.components*r.byteLength;case Ap:return n*e/r.components*r.byteLength;case Ma:return n*e*2/r.components*r.byteLength;case Cp:return n*e*2/r.components*r.byteLength;case kv:return n*e*3/r.components*r.byteLength;case ar:return n*e*4/r.components*r.byteLength;case Rp:return n*e*4/r.components*r.byteLength;case ru:case su:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ou:case au:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jd:case Zd:return Math.max(n,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(n,8)*Math.max(e,8)/2;case Jd:case Qd:case th:case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eh:case ih:case rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case lh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xh:case bh:case yh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sh:case Mh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Eh:case Th:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FE(n){switch(n){case Yi:case Nv:return{byteLength:1,components:1};case kl:case Uv:case is:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case Pr:case Ep:case yr:return{byteLength:4,components:1};case Fv:case Ov:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);function ix(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function OE(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],g=f[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const g=f[h];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kE=`#ifdef USE_ALPHAHASH
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
#endif`,zE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WE=`#ifdef USE_AOMAP
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
#endif`,XE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qE=`#ifdef USE_BATCHING
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
#endif`,YE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$E=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZE=`#ifdef USE_IRIDESCENCE
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
#endif`,JE=`#ifdef USE_BUMPMAP
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
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,oT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aT=`#define PI 3.141592653589793
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
} // validated`,lT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cT=`vec3 transformedNormal = objectNormal;
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
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pT="gl_FragColor = linearToOutputTexel( gl_FragColor );",mT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TT=`#ifdef USE_GRADIENTMAP
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
}`,wT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RT=`uniform bool receiveShadow;
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
#endif`,PT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,DT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
#endif`,FT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,OT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
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
#endif`,kT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
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
#endif`,ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ow=`#ifdef USE_NORMALMAP
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
#endif`,aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sw=`float getShadowMask() {
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
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
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
#endif`,Tw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
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
#endif`,Aw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ow=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bw=`uniform sampler2D t2D;
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
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`#include <common>
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
}`,Ww=`#if DEPTH_PACKING == 3200
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
}`,Xw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
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
}`,Kw=`uniform vec3 diffuse;
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
}`,Zw=`#include <common>
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#define LAMBERT
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
}`,eA=`#define LAMBERT
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
}`,tA=`#define MATCAP
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
}`,nA=`#define MATCAP
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
}`,iA=`#define NORMAL
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
}`,rA=`#define NORMAL
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
}`,sA=`#define PHONG
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
}`,oA=`#define PHONG
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
}`,aA=`#define STANDARD
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
}`,lA=`#define STANDARD
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
}`,cA=`#define TOON
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
}`,uA=`#define TOON
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
}`,fA=`uniform float size;
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
}`,dA=`uniform vec3 diffuse;
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
}`,hA=`#include <common>
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
}`,pA=`uniform vec3 color;
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
}`,mA=`uniform float rotation;
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
}`,gA=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:BE,alphahash_pars_fragment:kE,alphamap_fragment:zE,alphamap_pars_fragment:VE,alphatest_fragment:HE,alphatest_pars_fragment:GE,aomap_fragment:WE,aomap_pars_fragment:XE,batching_pars_vertex:qE,batching_vertex:YE,begin_vertex:$E,beginnormal_vertex:jE,bsdfs:KE,iridescence_fragment:ZE,bumpmap_pars_fragment:JE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:eT,clipping_planes_pars_vertex:tT,clipping_planes_vertex:nT,color_fragment:iT,color_pars_fragment:rT,color_pars_vertex:sT,color_vertex:oT,common:aT,cube_uv_reflection_fragment:lT,defaultnormal_vertex:cT,displacementmap_pars_vertex:uT,displacementmap_vertex:fT,emissivemap_fragment:dT,emissivemap_pars_fragment:hT,colorspace_fragment:pT,colorspace_pars_fragment:mT,envmap_fragment:gT,envmap_common_pars_fragment:_T,envmap_pars_fragment:vT,envmap_pars_vertex:xT,envmap_physical_pars_fragment:PT,envmap_vertex:bT,fog_vertex:yT,fog_pars_vertex:ST,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:TT,lightmap_pars_fragment:wT,lights_lambert_fragment:AT,lights_lambert_pars_fragment:CT,lights_pars_begin:RT,lights_toon_fragment:DT,lights_toon_pars_fragment:IT,lights_phong_fragment:LT,lights_phong_pars_fragment:NT,lights_physical_fragment:UT,lights_physical_pars_fragment:FT,lights_fragment_begin:OT,lights_fragment_maps:BT,lights_fragment_end:kT,logdepthbuf_fragment:zT,logdepthbuf_pars_fragment:VT,logdepthbuf_pars_vertex:HT,logdepthbuf_vertex:GT,map_fragment:WT,map_pars_fragment:XT,map_particle_fragment:qT,map_particle_pars_fragment:YT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:jT,morphinstance_vertex:KT,morphcolor_vertex:ZT,morphnormal_vertex:JT,morphtarget_pars_vertex:QT,morphtarget_vertex:ew,normal_fragment_begin:tw,normal_fragment_maps:nw,normal_pars_fragment:iw,normal_pars_vertex:rw,normal_vertex:sw,normalmap_pars_fragment:ow,clearcoat_normal_fragment_begin:aw,clearcoat_normal_fragment_maps:lw,clearcoat_pars_fragment:cw,iridescence_pars_fragment:uw,opaque_fragment:fw,packing:dw,premultiplied_alpha_fragment:hw,project_vertex:pw,dithering_fragment:mw,dithering_pars_fragment:gw,roughnessmap_fragment:_w,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:bw,shadowmap_vertex:yw,shadowmask_pars_fragment:Sw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:Tw,skinnormal_vertex:ww,specularmap_fragment:Aw,specularmap_pars_fragment:Cw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Pw,transmission_fragment:Dw,transmission_pars_fragment:Iw,uv_pars_fragment:Lw,uv_pars_vertex:Nw,uv_vertex:Uw,worldpos_vertex:Fw,background_vert:Ow,background_frag:Bw,backgroundCube_vert:kw,backgroundCube_frag:zw,cube_vert:Vw,cube_frag:Hw,depth_vert:Gw,depth_frag:Ww,distance_vert:Xw,distance_frag:qw,equirect_vert:Yw,equirect_frag:$w,linedashed_vert:jw,linedashed_frag:Kw,meshbasic_vert:Zw,meshbasic_frag:Jw,meshlambert_vert:Qw,meshlambert_frag:eA,meshmatcap_vert:tA,meshmatcap_frag:nA,meshnormal_vert:iA,meshnormal_frag:rA,meshphong_vert:sA,meshphong_frag:oA,meshphysical_vert:aA,meshphysical_frag:lA,meshtoon_vert:cA,meshtoon_frag:uA,points_vert:fA,points_frag:dA,shadow_vert:hA,shadow_frag:pA,sprite_vert:mA,sprite_frag:gA},Le={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},xr={basic:{uniforms:Yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Yn([Le.points,Le.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Yn([Le.common,Le.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Yn([Le.sprite,Le.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:Yn([Le.common,Le.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:Yn([Le.lights,Le.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};xr.physical={uniforms:Yn([xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Fc={r:0,b:0,g:0},Zs=new ss,_A=new sn;function vA(n,e,t,i,r,s,o){const a=new St(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function g(M){let b=!1;const E=_(M);E===null?p(a,l):E&&E.isColor&&(p(E,1),b=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,b){const E=_(b);E&&(E.isCubeTexture||E.mapping===Qu)?(u===void 0&&(u=new _i(new ac(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ta(xr.backgroundCube.uniforms),vertexShader:xr.backgroundCube.vertexShader,fragmentShader:xr.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zs.copy(b.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_A.makeRotationFromEuler(Zs)),u.material.toneMapped=_t.getTransfer(E.colorSpace)!==Pt,(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _i(new lc(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ta(xr.background.uniforms),vertexShader:xr.background.vertexShader,fragmentShader:xr.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==Pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,b){M.getRGB(Fc,jv(n)),i.buffers.color.setClear(Fc.r,Fc.g,Fc.b,b,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m,dispose:y}}function xA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,F,N,H,q){let Z=!1;const X=f(H,N,F);s!==X&&(s=X,c(s.object)),Z=h(S,H,N,q),Z&&_(S,H,N,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,b(S,F,N,H),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,F,N){const H=N.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let Z=q[F.id];Z===void 0&&(Z={},q[F.id]=Z);let X=Z[H];return X===void 0&&(X=d(l()),Z[H]=X),X}function d(S){const F=[],N=[],H=[];for(let q=0;q<t;q++)F[q]=0,N[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:H,object:S,attributes:{},index:null}}function h(S,F,N,H){const q=s.attributes,Z=F.attributes;let X=0;const G=N.getAttributes();for(const j in G)if(G[j].location>=0){const O=q[j];let pe=Z[j];if(pe===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor)),O===void 0||O.attribute!==pe||pe&&O.data!==pe.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function _(S,F,N,H){const q={},Z=F.attributes;let X=0;const G=N.getAttributes();for(const j in G)if(G[j].location>=0){let O=Z[j];O===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(O=S.instanceColor));const pe={};pe.attribute=O,O&&O.data&&(pe.data=O.data),q[j]=pe,X++}s.attributes=q,s.attributesNum=X,s.index=H}function g(){const S=s.newAttributes;for(let F=0,N=S.length;F<N;F++)S[F]=0}function m(S){p(S,0)}function p(S,F){const N=s.newAttributes,H=s.enabledAttributes,q=s.attributeDivisors;N[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),q[S]!==F&&(n.vertexAttribDivisor(S,F),q[S]=F)}function y(){const S=s.newAttributes,F=s.enabledAttributes;for(let N=0,H=F.length;N<H;N++)F[N]!==S[N]&&(n.disableVertexAttribArray(N),F[N]=0)}function M(S,F,N,H,q,Z,X){X===!0?n.vertexAttribIPointer(S,F,N,q,Z):n.vertexAttribPointer(S,F,N,H,q,Z)}function b(S,F,N,H){g();const q=H.attributes,Z=N.getAttributes(),X=F.defaultAttributeValues;for(const G in Z){const j=Z[G];if(j.location>=0){let he=q[G];if(he===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const O=he.normalized,pe=he.itemSize,Oe=e.get(he);if(Oe===void 0)continue;const Ve=Oe.buffer,qe=Oe.type,je=Oe.bytesPerElement,oe=qe===n.INT||qe===n.UNSIGNED_INT||he.gpuType===Ep;if(he.isInterleavedBufferAttribute){const k=he.data,re=k.stride,ae=he.offset;if(k.isInstancedInterleavedBuffer){for(let le=0;le<j.locationSize;le++)p(j.location+le,k.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<j.locationSize;le++)m(j.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let le=0;le<j.locationSize;le++)M(j.location+le,pe/j.locationSize,qe,O,re*je,(ae+pe/j.locationSize*le)*je,oe)}else{if(he.isInstancedBufferAttribute){for(let k=0;k<j.locationSize;k++)p(j.location+k,he.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let k=0;k<j.locationSize;k++)m(j.location+k);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let k=0;k<j.locationSize;k++)M(j.location+k,pe/j.locationSize,qe,O,pe*je,pe/j.locationSize*k*je,oe)}}else if(X!==void 0){const O=X[G];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(j.location,O);break;case 3:n.vertexAttrib3fv(j.location,O);break;case 4:n.vertexAttrib4fv(j.location,O);break;default:n.vertexAttrib1fv(j.location,O)}}}}y()}function E(){L();for(const S in i){const F=i[S];for(const N in F){const H=F[N];for(const q in H)u(H[q].object),delete H[q];delete F[N]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const F=i[S.id];for(const N in F){const H=F[N];for(const q in H)u(H[q].object),delete H[q];delete F[N]}delete i[S.id]}function T(S){for(const F in i){const N=i[F];if(N[S.id]===void 0)continue;const H=N[S.id];for(const q in H)u(H[q].object),delete H[q];delete N[S.id]}}function L(){v(),o=!0,s!==r&&(s=r,c(s.object))}function v(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function bA(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];t.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==ar&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===is&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Yi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yr&&!L)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(tt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:E,samples:w}}function SA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new no,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,M=y*4;let b=p.clippingState||null;l.value=b,b=u(_,d,M,h);for(let E=0;E!==M;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=h+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=h;M!==g;++M,b+=4)o.copy(f[M]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function MA(n){let e=new WeakMap;function t(o,a){return a===Wd?o.mapping=wo:a===Xd&&(o.mapping=Sa),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wd||a===Xd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jv(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ms=4,V0=[.125,.215,.35,.446,.526,.582],lo=20,EA=256,Xa=new nx,H0=new St;let Kf=null,Zf=0,Jf=0,Qf=!1;const TA=new te;class G0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=TA}=s;Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kf,Zf,Jf),this._renderer.xr.enabled=Qf,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kf=this._renderer.getRenderTarget(),Zf=this._renderer.getActiveCubeFace(),Jf=this._renderer.getActiveMipmapLevel(),Qf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:is,format:ar,colorSpace:Ea,depthBuffer:!1},r=W0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wA(s)),this._blurMaterial=CA(s,e,t),this._ggxMaterial=AA(s,e,t)}return r}_compileMaterial(e){const t=new _i(new ai,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,i,r,s){const l=new mi(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(H0),f.toneMapping=Ar,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new ac,new qv({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(H0),p=!0);for(let M=0;M<6;M++){const b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const E=this._cubeSize;$o(r,b*E,M>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(g,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===wo||e.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$o(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:_}=this,g=this._sizeLods[i],m=3*g*(i>_-Ms?i-_+Ms:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,$o(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(a,Xa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,$o(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(a,Xa)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*lo-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):lo;m>lo&&tt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lo}`);const p=[];let y=0;for(let T=0;T<lo;++T){const L=T/g,v=Math.exp(-L*L/2);p.push(v),T===0?y+=v:T<m&&(y+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const b=this._sizeLods[r],E=3*b*(r>M-Ms?r-M+Ms:0),w=4*(this._cubeSize-b);$o(t,E,w,3*b,2*b),l.setRenderTarget(t),l.render(f,Xa)}}function wA(n){const e=[],t=[],i=[];let r=n;const s=n-Ms+1+V0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-Ms?l=V0[o-n+Ms-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*h),M=new Float32Array(m*_*h),b=new Float32Array(p*_*h);for(let w=0;w<h;w++){const T=w%3*2/3-1,L=w>2?0:-1,v=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];y.set(v,g*_*w),M.set(d,m*_*w);const S=[w,w,w,w,w,w];b.set(S,p*_*w)}const E=new ai;E.setAttribute("position",new Vn(y,g)),E.setAttribute("uv",new Vn(M,m)),E.setAttribute("faceIndex",new Vn(b,p)),i.push(new _i(E,null)),r>Ms&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function W0(n,e,t){const i=new Cr(n,e,t);return i.texture.mapping=Qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AA(n,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function CA(n,e,t){const i=new Float32Array(lo),r=new te(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tf(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function X0(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tf(),fragmentShader:`

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
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function q0(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zr,depthTest:!1,depthWrite:!1})}function tf(){return`

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
	`}function RA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wd||l===Xd,u=l===wo||l===Sa;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new G0(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new G0(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function PA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vl("WebGLRenderer: "+i+" extension not supported."),r}}}function DA(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let M=0,b=y.length;M<b;M+=3){const E=y[M+0],w=y[M+1],T=y[M+2];d.push(E,w,w,T,T,E)}}else if(_!==void 0){const y=_.array;g=_.version;for(let M=0,b=y.length/3-1;M<b;M+=3){const E=M+0,w=M+1,T=M+2;d.push(E,w,w,T,T,E)}}else return;const m=new(Vv(d)?$v:Yv)(d,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function IA(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),t.update(h,i,1)}function c(d,h,_){_!==0&&(n.drawElementsInstanced(i,h,s,d*o,_),t.update(h,i,_))}function u(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,i,1)}function f(d,h,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=h[y]*g[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function NA(n,e,t){const i=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let v=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let b=a.attributes.position.count*M,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*E*4*f),T=new Hv(w,b,E,f);T.type=yr,T.needsUpdate=!0;const L=M*4;for(let S=0;S<f;S++){const F=m[S],N=p[S],H=y[S],q=b*E*4*S;for(let Z=0;Z<F.count;Z++){const X=Z*L;h===!0&&(r.fromBufferAttribute(F,Z),w[q+X+0]=r.x,w[q+X+1]=r.y,w[q+X+2]=r.z,w[q+X+3]=0),_===!0&&(r.fromBufferAttribute(N,Z),w[q+X+4]=r.x,w[q+X+5]=r.y,w[q+X+6]=r.z,w[q+X+7]=0),g===!0&&(r.fromBufferAttribute(H,Z),w[q+X+8]=r.x,w[q+X+9]=r.y,w[q+X+10]=r.z,w[q+X+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:T,size:new At(b,E)},i.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function UA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const FA={[wv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Cv]:"CINEON_TONE_MAPPING",[Rv]:"ACES_FILMIC_TONE_MAPPING",[Dv]:"AGX_TONE_MAPPING",[Iv]:"NEUTRAL_TONE_MAPPING",[Pv]:"CUSTOM_TONE_MAPPING"};function OA(n,e,t,i,r){const s=new Cr(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Cr(e,t,{type:is,depthBuffer:!1,stencilBuffer:!1}),a=new ai;a.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new oi([0,2,0,0,2,0],2));const l=new IE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _i(a,l),u=new nx(-1,1,1,-1,0,1);let f=null,d=null,h=!1,_,g=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),o.setSize(y,M);for(let b=0;b<m.length;b++){const E=m[b];E.setSize&&E.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=s.width,b=s.height;for(let E=0;E<m.length;E++){const w=m[E];w.setSize&&w.setSize(M,b)}},this.begin=function(y,M){if(h||y.toneMapping===Ar&&m.length===0)return!1;if(g=M,M!==null){const b=M.width,E=M.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return p===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=Ar,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=_,h=!0;let b=s,E=o;for(let w=0;w<m.length;w++){const T=m[w];if(T.enabled!==!1&&(T.render(y,E,b,M),T.needsSwap!==!1)){const L=b;b=E,E=L}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},_t.getTransfer(f)===Pt&&(l.defines.SRGB_TRANSFER="");const w=FA[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(g),y.render(c,u),g=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const rx=new si,Ch=new Hl(1,1),sx=new Hv,ox=new cE,ax=new Zv,Y0=[],$0=[],j0=new Float32Array(16),K0=new Float32Array(9),Z0=new Float32Array(4);function Na(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Y0[r];if(s===void 0&&(s=new Float32Array(r),Y0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function nf(n,e){let t=$0[e];t===void 0&&(t=new Int32Array(e),$0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function BA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function kA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),vn(t,e)}}function zA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),vn(t,e)}}function VA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),vn(t,e)}}function HA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;Z0.set(i),n.uniformMatrix2fv(this.addr,!1,Z0),vn(t,i)}}function GA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;K0.set(i),n.uniformMatrix3fv(this.addr,!1,K0),vn(t,i)}}function WA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(_n(t,i))return;j0.set(i),n.uniformMatrix4fv(this.addr,!1,j0),vn(t,i)}}function XA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),vn(t,e)}}function YA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),vn(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),vn(t,e)}}function jA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),vn(t,e)}}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),vn(t,e)}}function JA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),vn(t,e)}}function QA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ch.compareFunction=t.isReversedDepthBuffer()?Dp:Pp,s=Ch):s=rx,t.setTexture2D(e||s,r)}function e2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ox,r)}function t2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ax,r)}function n2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sx,r)}function i2(n){switch(n){case 5126:return BA;case 35664:return kA;case 35665:return zA;case 35666:return VA;case 35674:return HA;case 35675:return GA;case 35676:return WA;case 5124:case 35670:return XA;case 35667:case 35671:return qA;case 35668:case 35672:return YA;case 35669:case 35673:return $A;case 5125:return jA;case 36294:return KA;case 36295:return ZA;case 36296:return JA;case 35678:case 36198:case 36298:case 36306:case 35682:return QA;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}function r2(n,e){n.uniform1fv(this.addr,e)}function s2(n,e){const t=Na(e,this.size,2);n.uniform2fv(this.addr,t)}function o2(n,e){const t=Na(e,this.size,3);n.uniform3fv(this.addr,t)}function a2(n,e){const t=Na(e,this.size,4);n.uniform4fv(this.addr,t)}function l2(n,e){const t=Na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c2(n,e){const t=Na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u2(n,e){const t=Na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f2(n,e){n.uniform1iv(this.addr,e)}function d2(n,e){n.uniform2iv(this.addr,e)}function h2(n,e){n.uniform3iv(this.addr,e)}function p2(n,e){n.uniform4iv(this.addr,e)}function m2(n,e){n.uniform1uiv(this.addr,e)}function g2(n,e){n.uniform2uiv(this.addr,e)}function _2(n,e){n.uniform3uiv(this.addr,e)}function v2(n,e){n.uniform4uiv(this.addr,e)}function x2(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ch:o=rx;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function b2(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ox,s[o])}function y2(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ax,s[o])}function S2(n,e,t){const i=this.cache,r=e.length,s=nf(t,r);_n(i,s)||(n.uniform1iv(this.addr,s),vn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sx,s[o])}function M2(n){switch(n){case 5126:return r2;case 35664:return s2;case 35665:return o2;case 35666:return a2;case 35674:return l2;case 35675:return c2;case 35676:return u2;case 5124:case 35670:return f2;case 35667:case 35671:return d2;case 35668:case 35672:return h2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return y2;case 36289:case 36303:case 36311:case 36292:return S2}}class E2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i2(t.type)}}class T2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M2(t.type)}}class w2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function J0(n,e){n.seq.push(e),n.map[e.id]=e}function A2(n,e,t){const i=n.name,r=i.length;for(ed.lastIndex=0;;){const s=ed.exec(i),o=ed.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){J0(t,c===void 0?new E2(a,n,e):new T2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new w2(a),J0(t,f)),t=f}}}class lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);A2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Q0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const C2=37297;let R2=0;function P2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const eg=new rt;function D2(n){_t._getMatrix(eg,_t.workingColorSpace,n);const e=`mat3( ${eg.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(n)){case wu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function tg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+P2(n.getShaderSource(e),a)}else return s}function I2(n,e){const t=D2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const L2={[wv]:"Linear",[Av]:"Reinhard",[Cv]:"Cineon",[Rv]:"ACESFilmic",[Dv]:"AgX",[Iv]:"Neutral",[Pv]:"Custom"};function N2(n,e){const t=L2[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new te;function U2(){_t.getLuminanceCoefficients(Oc);const n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function O2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ja(n){return n!==""}function ng(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(n){return n.replace(k2,V2)}const z2=new Map;function V2(n,e){let t=st[e];if(t===void 0){const i=z2.get(e);if(i!==void 0)t=st[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rh(t)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(n){return n.replace(H2,G2)}function G2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const W2={[iu]:"SHADOWMAP_TYPE_PCF",[Za]:"SHADOWMAP_TYPE_VSM"};function X2(n){return W2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q2={[wo]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function Y2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":q2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $2={[Sa]:"ENVMAP_MODE_REFRACTION"};function j2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const K2={[Tv]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[WM]:"ENVMAP_BLENDING_ADD"};function Z2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":K2[n.combine]||"ENVMAP_BLENDING_NONE"}function J2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Q2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=X2(t),c=Y2(t),u=j2(t),f=Z2(t),d=J2(t),h=F2(t),_=O2(s),g=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ja).join(`
`),p.length>0&&(p+=`
`)):(m=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),p=[sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?st.tonemapping_pars_fragment:"",t.toneMapping!==Ar?N2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,I2("linearToOutputTexel",t.outputColorSpace),U2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),o=Rh(o),o=ng(o,t),o=ig(o,t),a=Rh(a),a=ng(a,t),a=ig(a,t),o=rg(o),a=rg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,b=y+p+a,E=Q0(r,r.VERTEX_SHADER,M),w=Q0(r,r.FRAGMENT_SHADER,b);r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(F){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(E)||"",q=r.getShaderInfoLog(w)||"",Z=N.trim(),X=H.trim(),G=q.trim();let j=!0,he=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,w);else{const O=tg(r,E,"vertex"),pe=tg(r,w,"fragment");yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Z+`
`+O+`
`+pe)}else Z!==""?tt("WebGLProgram: Program Info Log:",Z):(X===""||G==="")&&(he=!1);he&&(F.diagnostics={runnable:j,programLog:Z,vertexShader:{log:X,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(E),r.deleteShader(w),L=new lu(r,g),v=B2(r,g)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,C2)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new nC(e),t.set(e,i)),i}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(n,e,t,i,r,s,o){const a=new Wv,l=new tC,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,F,N,H){const q=N.fog,Z=H.geometry,X=v.isMeshStandardMaterial?N.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),j=G&&G.mapping===Qu?G.image.height:null,he=_[v.type];v.precision!==null&&(h=r.getMaxPrecision(v.precision),h!==v.precision&&tt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const O=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pe=O!==void 0?O.length:0;let Oe=0;Z.morphAttributes.position!==void 0&&(Oe=1),Z.morphAttributes.normal!==void 0&&(Oe=2),Z.morphAttributes.color!==void 0&&(Oe=3);let Ve,qe,je,oe;if(he){const Ne=xr[he];Ve=Ne.vertexShader,qe=Ne.fragmentShader}else Ve=v.vertexShader,qe=v.fragmentShader,l.update(v),je=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const k=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=H.isInstancedMesh===!0,le=H.isBatchedMesh===!0,Ee=!!v.map,I=!!v.matcap,P=!!G,V=!!v.aoMap,Q=!!v.lightMap,J=!!v.bumpMap,U=!!v.normalMap,R=!!v.displacementMap,de=!!v.emissiveMap,ce=!!v.metalnessMap,ne=!!v.roughnessMap,ue=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,B=v.iridescence>0,K=v.sheen>0,ee=v.transmission>0,Y=ue&&!!v.anisotropyMap,Se=C&&!!v.clearcoatMap,ge=C&&!!v.clearcoatNormalMap,Pe=C&&!!v.clearcoatRoughnessMap,Ce=B&&!!v.iridescenceMap,_e=B&&!!v.iridescenceThicknessMap,xe=K&&!!v.sheenColorMap,Te=K&&!!v.sheenRoughnessMap,De=!!v.specularMap,be=!!v.specularColorMap,Ke=!!v.specularIntensityMap,z=ee&&!!v.transmissionMap,we=ee&&!!v.thicknessMap,ve=!!v.gradientMap,Ae=!!v.alphaMap,me=v.alphaTest>0,fe=!!v.alphaHash,Me=!!v.extensions;let Xe=Ar;v.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const vt={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:qe,defines:v.defines,customVertexShaderID:je,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:le,batchingColor:le&&H._colorsTexture!==null,instancing:ae,instancingColor:ae&&H.instanceColor!==null,instancingMorph:ae&&H.morphTexture!==null,outputColorSpace:k===null?n.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ea,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:I,envMap:P,envMapMode:P&&G.mapping,envMapCubeUVHeight:j,aoMap:V,lightMap:Q,bumpMap:J,normalMap:U,displacementMap:R,emissiveMap:de,normalMapObjectSpace:U&&v.normalMapType===$M,normalMapTangentSpace:U&&v.normalMapType===YM,metalnessMap:ce,roughnessMap:ne,anisotropy:ue,anisotropyMap:Y,clearcoat:C,clearcoatMap:Se,clearcoatNormalMap:ge,clearcoatRoughnessMap:Pe,dispersion:x,iridescence:B,iridescenceMap:Ce,iridescenceThicknessMap:_e,sheen:K,sheenColorMap:xe,sheenRoughnessMap:Te,specularMap:De,specularColorMap:be,specularIntensityMap:Ke,transmission:ee,transmissionMap:z,thicknessMap:we,gradientMap:ve,opaque:v.transparent===!1&&v.blending===ua&&v.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:fe,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:V&&g(v.aoMap.channel),lightMapUv:Q&&g(v.lightMap.channel),bumpMapUv:J&&g(v.bumpMap.channel),normalMapUv:U&&g(v.normalMap.channel),displacementMapUv:R&&g(v.displacementMap.channel),emissiveMapUv:de&&g(v.emissiveMap.channel),metalnessMapUv:ce&&g(v.metalnessMap.channel),roughnessMapUv:ne&&g(v.roughnessMap.channel),anisotropyMapUv:Y&&g(v.anisotropyMap.channel),clearcoatMapUv:Se&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(v.sheenRoughnessMap.channel),specularMapUv:De&&g(v.specularMap.channel),specularColorMapUv:be&&g(v.specularColorMap.channel),specularIntensityMapUv:Ke&&g(v.specularIntensityMap.channel),transmissionMapUv:z&&g(v.transmissionMap.channel),thicknessMapUv:we&&g(v.thicknessMap.channel),alphaMapUv:Ae&&g(v.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(U||ue),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Ee||Ae),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&_t.getTransfer(v.map.colorSpace)===Pt,decodeVideoTextureEmissive:de&&v.emissiveMap.isVideoTexture===!0&&_t.getTransfer(v.emissiveMap.colorSpace)===Pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===sr,flipSided:v.side===ri,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)S.push(F),S.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(y(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){const S=_[v.type];let F;if(S){const N=xr[S];F=SE.clone(N.uniforms)}else F=v.uniforms;return F}function E(v,S){let F=f.get(S);return F!==void 0?++F.usedTimes:(F=new Q2(n,S,v,s),u.push(F),f.set(S,F)),F}function w(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function T(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:L}}function rC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function sC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function og(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ag(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,h,_,g,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,_,g,m){const p=o(f,d,h,_,g,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||sC),i.length>1&&i.sort(d||og),r.length>1&&r.sort(d||og)}function u(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function oC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new ag,n.set(i,[o])):r>=s.length?(o=new ag,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function aC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new St};break;case"SpotLight":t={position:new te,direction:new te,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new te,halfWidth:new te,halfHeight:new te};break}return n[e.id]=t,t}}}function lC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cC=0;function uC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fC(n){const e=new aC,t=lC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new te);const r=new te,s=new sn,o=new sn;function a(c){let u=0,f=0,d=0;for(let v=0;v<9;v++)i.probe[v].set(0,0,0);let h=0,_=0,g=0,m=0,p=0,y=0,M=0,b=0,E=0,w=0,T=0;c.sort(uC);for(let v=0,S=c.length;v<S;v++){const F=c[v],N=F.color,H=F.intensity,q=F.distance;let Z=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ma?Z=F.shadow.map.texture:Z=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)u+=N.r*H,f+=N.g*H,d+=N.b*H;else if(F.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(F.sh.coefficients[X],H);T++}else if(F.isDirectionalLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const G=F.shadow,j=t.get(F);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=Z,i.directionalShadowMatrix[h]=F.shadow.matrix,y++}i.directional[h]=X,h++}else if(F.isSpotLight){const X=e.get(F);X.position.setFromMatrixPosition(F.matrixWorld),X.color.copy(N).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(F.angle),X.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),X.decay=F.decay,i.spot[g]=X;const G=F.shadow;if(F.map&&(i.spotLightMap[E]=F.map,E++,G.updateMatrices(F),F.castShadow&&w++),i.spotLightMatrix[g]=G.matrix,F.castShadow){const j=t.get(F);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,i.spotShadow[g]=j,i.spotShadowMap[g]=Z,b++}g++}else if(F.isRectAreaLight){const X=e.get(F);X.color.copy(N).multiplyScalar(H),X.halfWidth.set(F.width*.5,0,0),X.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=X,m++}else if(F.isPointLight){const X=e.get(F);if(X.color.copy(F.color).multiplyScalar(F.intensity),X.distance=F.distance,X.decay=F.decay,F.castShadow){const G=F.shadow,j=t.get(F);j.shadowIntensity=G.intensity,j.shadowBias=G.bias,j.shadowNormalBias=G.normalBias,j.shadowRadius=G.radius,j.shadowMapSize=G.mapSize,j.shadowCameraNear=G.camera.near,j.shadowCameraFar=G.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=F.shadow.matrix,M++}i.point[_]=X,_++}else if(F.isHemisphereLight){const X=e.get(F);X.skyColor.copy(F.color).multiplyScalar(H),X.groundColor.copy(F.groundColor).multiplyScalar(H),i.hemi[p]=X,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==h||L.pointLength!==_||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==b||L.numSpotMaps!==E||L.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,L.directionalLength=h,L.pointLength=_,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=b,L.numSpotMaps=E,L.numLightProbes=T,i.version=cC++)}function l(c,u){let f=0,d=0,h=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(M.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function lg(n){const e=new fC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dC(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lg(n),e.set(r,[a])):s>=o.length?(a=new lg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const hC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pC=`uniform sampler2D shadow_pass;
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
}`,mC=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],gC=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],cg=new sn,qa=new te,td=new te;function _C(n,e,t){let i=new Qv;const r=new At,s=new At,o=new nn,a=new LE,l=new NE,c={},u=t.maxTextureSize,f={[Us]:ri,[ri]:Us,[sr]:sr},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:hC,fragmentShader:pC}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new ai;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _i(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(w,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===EM&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=iu);const v=n.getRenderTarget(),S=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Zr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=p!==this.type;H&&T.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(Z=>Z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,Z=w.length;q<Z;q++){const X=w[q],G=X.shadow;if(G===void 0){tt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const j=G.getFrameExtents();if(r.multiply(j),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,G.mapSize.y=s.y)),G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Za){if(X.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Cr(r.x,r.y,{format:Ma,type:is,minFilter:kn,magFilter:kn,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Hl(r.x,r.y,yr),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=rs,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn}else{X.isPointLight?(G.map=new Jv(r.x),G.map.depthTexture=new DE(r.x,Pr)):(G.map=new Cr(r.x,r.y),G.map.depthTexture=new Hl(r.x,r.y,Pr)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=rs;const O=n.state.buffers.depth.getReversed();this.type===iu?(G.map.depthTexture.compareFunction=O?Dp:Pp,G.map.depthTexture.minFilter=kn,G.map.depthTexture.magFilter=kn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wn,G.map.depthTexture.magFilter=wn)}G.camera.updateProjectionMatrix()}const he=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<he;O++){if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,O),n.clear();else{O===0&&(n.setRenderTarget(G.map),n.clear());const pe=G.getViewport(O);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),N.viewport(o)}if(X.isPointLight){const pe=G.camera,Oe=G.matrix,Ve=X.distance||pe.far;Ve!==pe.far&&(pe.far=Ve,pe.updateProjectionMatrix()),qa.setFromMatrixPosition(X.matrixWorld),pe.position.copy(qa),td.copy(pe.position),td.add(mC[O]),pe.up.copy(gC[O]),pe.lookAt(td),pe.updateMatrixWorld(),Oe.makeTranslation(-qa.x,-qa.y,-qa.z),cg.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(cg,pe.coordinateSystem,pe.reversedDepth)}else G.updateMatrices(X);i=G.getFrustum(),b(T,L,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===Za&&y(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(v,S,F)};function y(w,T){const L=e.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Cr(r.x,r.y,{format:Ma,type:is})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,L,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,L,h,g,null)}function M(w,T,L,v){let S=null;const F=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)S=F;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=S.uuid,H=T.uuid;let q=c[N];q===void 0&&(q={},c[N]=q);let Z=q[H];Z===void 0&&(Z=S.clone(),q[H]=Z,T.addEventListener("dispose",E)),S=Z}if(S.visible=T.visible,S.wireframe=T.wireframe,v===Za?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=L}return S}function b(w,T,L,v,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Za)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const H=e.update(w),q=w.material;if(Array.isArray(q)){const Z=H.groups;for(let X=0,G=Z.length;X<G;X++){const j=Z[X],he=q[j.materialIndex];if(he&&he.visible){const O=M(w,he,v,S);w.onBeforeShadow(n,w,T,L,H,O,j),n.renderBufferDirect(L,null,H,O,w,j),w.onAfterShadow(n,w,T,L,H,O,j)}}}else if(q.visible){const Z=M(w,q,v,S);w.onBeforeShadow(n,w,T,L,H,Z,null),n.renderBufferDirect(L,null,H,Z,w,null),w.onAfterShadow(n,w,T,L,H,Z,null)}}const N=w.children;for(let H=0,q=N.length;H<q;H++)b(N[H],T,L,v,S)}function E(w){w.target.removeEventListener("dispose",E);for(const L in c){const v=c[L],S=w.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const vC={[Od]:Bd,[kd]:Hd,[zd]:Gd,[ya]:Vd,[Bd]:Od,[Hd]:kd,[Gd]:zd,[Vd]:ya};function xC(n,e){function t(){let z=!1;const we=new nn;let ve=null;const Ae=new nn(0,0,0,0);return{setMask:function(me){ve!==me&&!z&&(n.colorMask(me,me,me,me),ve=me)},setLocked:function(me){z=me},setClear:function(me,fe,Me,Xe,vt){vt===!0&&(me*=Xe,fe*=Xe,Me*=Xe),we.set(me,fe,Me,Xe),Ae.equals(we)===!1&&(n.clearColor(me,fe,Me,Xe),Ae.copy(we))},reset:function(){z=!1,ve=null,Ae.set(-1,0,0,0)}}}function i(){let z=!1,we=!1,ve=null,Ae=null,me=null;return{setReversed:function(fe){if(we!==fe){const Me=e.get("EXT_clip_control");fe?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return we},setTest:function(fe){fe?k(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(fe){ve!==fe&&!z&&(n.depthMask(fe),ve=fe)},setFunc:function(fe){if(we&&(fe=vC[fe]),Ae!==fe){switch(fe){case Od:n.depthFunc(n.NEVER);break;case Bd:n.depthFunc(n.ALWAYS);break;case kd:n.depthFunc(n.LESS);break;case ya:n.depthFunc(n.LEQUAL);break;case zd:n.depthFunc(n.EQUAL);break;case Vd:n.depthFunc(n.GEQUAL);break;case Hd:n.depthFunc(n.GREATER);break;case Gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=fe}},setLocked:function(fe){z=fe},setClear:function(fe){me!==fe&&(we&&(fe=1-fe),n.clearDepth(fe),me=fe)},reset:function(){z=!1,ve=null,Ae=null,me=null,we=!1}}}function r(){let z=!1,we=null,ve=null,Ae=null,me=null,fe=null,Me=null,Xe=null,vt=null;return{setTest:function(Ne){z||(Ne?k(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(Ne){we!==Ne&&!z&&(n.stencilMask(Ne),we=Ne)},setFunc:function(Ne,ze,it){(ve!==Ne||Ae!==ze||me!==it)&&(n.stencilFunc(Ne,ze,it),ve=Ne,Ae=ze,me=it)},setOp:function(Ne,ze,it){(fe!==Ne||Me!==ze||Xe!==it)&&(n.stencilOp(Ne,ze,it),fe=Ne,Me=ze,Xe=it)},setLocked:function(Ne){z=Ne},setClear:function(Ne){vt!==Ne&&(n.clearStencil(Ne),vt=Ne)},reset:function(){z=!1,we=null,ve=null,Ae=null,me=null,fe=null,Me=null,Xe=null,vt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],_=null,g=!1,m=null,p=null,y=null,M=null,b=null,E=null,w=null,T=new St(0,0,0),L=0,v=!1,S=null,F=null,N=null,H=null,q=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(j)[1]),X=G>=1):j.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),X=G>=2);let he=null,O={};const pe=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ve=new nn().fromArray(pe),qe=new nn().fromArray(Oe);function je(z,we,ve,Ae){const me=new Uint8Array(4),fe=n.createTexture();n.bindTexture(z,fe),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Me=0;Me<ve;Me++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(we+Me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return fe}const oe={};oe[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(n.DEPTH_TEST),o.setFunc(ya),J(!1),U(p0),k(n.CULL_FACE),V(Zr);function k(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function re(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function ae(z,we){return f[z]!==we?(n.bindFramebuffer(z,we),f[z]=we,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=we),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=we),!0):!1}function le(z,we){let ve=h,Ae=!1;if(z){ve=d.get(we),ve===void 0&&(ve=[],d.set(we,ve));const me=z.textures;if(ve.length!==me.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,Me=me.length;fe<Me;fe++)ve[fe]=n.COLOR_ATTACHMENT0+fe;ve.length=me.length,Ae=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ve)}function Ee(z){return _!==z?(n.useProgram(z),_=z,!0):!1}const I={[ao]:n.FUNC_ADD,[wM]:n.FUNC_SUBTRACT,[AM]:n.FUNC_REVERSE_SUBTRACT};I[CM]=n.MIN,I[RM]=n.MAX;const P={[PM]:n.ZERO,[DM]:n.ONE,[IM]:n.SRC_COLOR,[Ud]:n.SRC_ALPHA,[BM]:n.SRC_ALPHA_SATURATE,[FM]:n.DST_COLOR,[NM]:n.DST_ALPHA,[LM]:n.ONE_MINUS_SRC_COLOR,[Fd]:n.ONE_MINUS_SRC_ALPHA,[OM]:n.ONE_MINUS_DST_COLOR,[UM]:n.ONE_MINUS_DST_ALPHA,[kM]:n.CONSTANT_COLOR,[zM]:n.ONE_MINUS_CONSTANT_COLOR,[VM]:n.CONSTANT_ALPHA,[HM]:n.ONE_MINUS_CONSTANT_ALPHA};function V(z,we,ve,Ae,me,fe,Me,Xe,vt,Ne){if(z===Zr){g===!0&&(re(n.BLEND),g=!1);return}if(g===!1&&(k(n.BLEND),g=!0),z!==TM){if(z!==m||Ne!==v){if((p!==ao||b!==ao)&&(n.blendEquation(n.FUNC_ADD),p=ao,b=ao),Ne)switch(z){case ua:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFunc(n.ONE,n.ONE);break;case m0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case g0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:yt("WebGLState: Invalid blending: ",z);break}else switch(z){case ua:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case To:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case m0:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g0:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",z);break}y=null,M=null,E=null,w=null,T.set(0,0,0),L=0,m=z,v=Ne}return}me=me||we,fe=fe||ve,Me=Me||Ae,(we!==p||me!==b)&&(n.blendEquationSeparate(I[we],I[me]),p=we,b=me),(ve!==y||Ae!==M||fe!==E||Me!==w)&&(n.blendFuncSeparate(P[ve],P[Ae],P[fe],P[Me]),y=ve,M=Ae,E=fe,w=Me),(Xe.equals(T)===!1||vt!==L)&&(n.blendColor(Xe.r,Xe.g,Xe.b,vt),T.copy(Xe),L=vt),m=z,v=!1}function Q(z,we){z.side===sr?re(n.CULL_FACE):k(n.CULL_FACE);let ve=z.side===ri;we&&(ve=!ve),J(ve),z.blending===ua&&z.transparent===!1?V(Zr):V(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ae=z.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),de(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?k(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(z){S!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),S=z)}function U(z){z!==SM?(k(n.CULL_FACE),z!==F&&(z===p0?n.cullFace(n.BACK):z===MM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),F=z}function R(z){z!==N&&(X&&n.lineWidth(z),N=z)}function de(z,we,ve){z?(k(n.POLYGON_OFFSET_FILL),(H!==we||q!==ve)&&(n.polygonOffset(we,ve),H=we,q=ve)):re(n.POLYGON_OFFSET_FILL)}function ce(z){z?k(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function ne(z){z===void 0&&(z=n.TEXTURE0+Z-1),he!==z&&(n.activeTexture(z),he=z)}function ue(z,we,ve){ve===void 0&&(he===null?ve=n.TEXTURE0+Z-1:ve=he);let Ae=O[ve];Ae===void 0&&(Ae={type:void 0,texture:void 0},O[ve]=Ae),(Ae.type!==z||Ae.texture!==we)&&(he!==ve&&(n.activeTexture(ve),he=ve),n.bindTexture(z,we||oe[z]),Ae.type=z,Ae.texture=we)}function C(){const z=O[he];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function K(){try{n.texSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function ee(){try{n.texSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function ge(){try{n.texStorage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Pe(){try{n.texStorage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function Ce(){try{n.texImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function _e(){try{n.texImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function xe(z){Ve.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Te(z){qe.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),qe.copy(z))}function De(z,we){let ve=c.get(we);ve===void 0&&(ve=new WeakMap,c.set(we,ve));let Ae=ve.get(z);Ae===void 0&&(Ae=n.getUniformBlockIndex(we,z.name),ve.set(z,Ae))}function be(z,we){const Ae=c.get(we).get(z);l.get(we)!==Ae&&(n.uniformBlockBinding(we,Ae,z.__bindingPointIndex),l.set(we,Ae))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,O={},f={},d=new WeakMap,h=[],_=null,g=!1,m=null,p=null,y=null,M=null,b=null,E=null,w=null,T=new St(0,0,0),L=0,v=!1,S=null,F=null,N=null,H=null,q=null,Ve.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:k,disable:re,bindFramebuffer:ae,drawBuffers:le,useProgram:Ee,setBlending:V,setMaterial:Q,setFlipSided:J,setCullFace:U,setLineWidth:R,setPolygonOffset:de,setScissorTest:ce,activeTexture:ne,bindTexture:ue,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:B,texImage2D:Ce,texImage3D:_e,updateUBOMapping:De,uniformBlockBinding:be,texStorage2D:ge,texStorage3D:Pe,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Se,scissor:xe,viewport:Te,reset:Ke}}function bC(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return h?new OffscreenCanvas(C,x):Cu("canvas")}function g(C,x,B){let K=1;const ee=ue(C);if((ee.width>B||ee.height>B)&&(K=B/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*ee.width),Se=Math.floor(K*ee.height);f===void 0&&(f=_(Y,Se));const ge=x?_(Y,Se):f;return ge.width=Y,ge.height=Se,ge.getContext("2d").drawImage(C,0,0,Y,Se),tt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Se+")."),ge}else return"data"in C&&tt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,x,B,K,ee=!1){if(C!==null){if(n[C]!==void 0)return n[C];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=x;if(x===n.RED&&(B===n.FLOAT&&(Y=n.R32F),B===n.HALF_FLOAT&&(Y=n.R16F),B===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.R8UI),B===n.UNSIGNED_SHORT&&(Y=n.R16UI),B===n.UNSIGNED_INT&&(Y=n.R32UI),B===n.BYTE&&(Y=n.R8I),B===n.SHORT&&(Y=n.R16I),B===n.INT&&(Y=n.R32I)),x===n.RG&&(B===n.FLOAT&&(Y=n.RG32F),B===n.HALF_FLOAT&&(Y=n.RG16F),B===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RG8UI),B===n.UNSIGNED_SHORT&&(Y=n.RG16UI),B===n.UNSIGNED_INT&&(Y=n.RG32UI),B===n.BYTE&&(Y=n.RG8I),B===n.SHORT&&(Y=n.RG16I),B===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),B===n.UNSIGNED_INT&&(Y=n.RGB32UI),B===n.BYTE&&(Y=n.RGB8I),B===n.SHORT&&(Y=n.RGB16I),B===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),B===n.UNSIGNED_INT&&(Y=n.RGBA32UI),B===n.BYTE&&(Y=n.RGBA8I),B===n.SHORT&&(Y=n.RGBA16I),B===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),x===n.RGBA){const Se=ee?wu:_t.getTransfer(K);B===n.FLOAT&&(Y=n.RGBA32F),B===n.HALF_FLOAT&&(Y=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Y=Se===Pt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(C,x){let B;return C?x===null||x===Pr||x===zl?B=n.DEPTH24_STENCIL8:x===yr?B=n.DEPTH32F_STENCIL8:x===kl&&(B=n.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pr||x===zl?B=n.DEPTH_COMPONENT24:x===yr?B=n.DEPTH_COMPONENT32F:x===kl&&(B=n.DEPTH_COMPONENT16),B}function E(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==kn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),L(x),x.isVideoTexture&&u.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),S(x)}function L(C){const x=i.get(C);if(x.__webglInit===void 0)return;const B=C.source,K=d.get(B);if(K){const ee=K[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&v(C),Object.keys(K).length===0&&d.delete(B)}i.remove(C)}function v(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const B=C.source,K=d.get(B);delete K[x.__cacheKey],o.memory.textures--}function S(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ee=0;ee<x.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=C.textures;for(let K=0,ee=B.length;K<ee;K++){const Y=i.get(B[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(C)}let F=0;function N(){F=0}function H(){const C=F;return C>=r.maxTextures&&tt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function q(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Z(C,x){const B=i.get(C);if(C.isVideoTexture&&ce(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,C,x);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function X(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){oe(B,C,x);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function G(C,x){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){oe(B,C,x);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function j(C,x){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){k(B,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const he={[qd]:n.REPEAT,[$r]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},O={[wn]:n.NEAREST,[XM]:n.NEAREST_MIPMAP_NEAREST,[mc]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[Tf]:n.LINEAR_MIPMAP_NEAREST,[uo]:n.LINEAR_MIPMAP_LINEAR},pe={[jM]:n.NEVER,[eE]:n.ALWAYS,[KM]:n.LESS,[Pp]:n.LEQUAL,[ZM]:n.EQUAL,[Dp]:n.GEQUAL,[JM]:n.GREATER,[QM]:n.NOTEQUAL};function Oe(C,x){if(x.type===yr&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===kn||x.magFilter===Tf||x.magFilter===mc||x.magFilter===uo||x.minFilter===kn||x.minFilter===Tf||x.minFilter===mc||x.minFilter===uo)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,he[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,O[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,O[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==mc&&x.minFilter!==uo||x.type===yr&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ve(C,x){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const K=x.source;let ee=d.get(K);ee===void 0&&(ee={},d.set(K,ee));const Y=q(x);if(Y!==C.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ee[Y].usedTimes++;const Se=ee[C.__cacheKey];Se!==void 0&&(ee[C.__cacheKey].usedTimes--,Se.usedTimes===0&&v(x)),C.__cacheKey=Y,C.__webglTexture=ee[Y].texture}return B}function qe(C,x,B){return Math.floor(Math.floor(C/B)/x)}function je(C,x,B,K){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,B,K,x.data);else{Y.sort((_e,xe)=>_e.start-xe.start);let Se=0;for(let _e=1;_e<Y.length;_e++){const xe=Y[Se],Te=Y[_e],De=xe.start+xe.count,be=qe(Te.start,x.width,4),Ke=qe(xe.start,x.width,4);Te.start<=De+1&&be===Ke&&qe(Te.start+Te.count-1,x.width,4)===be?xe.count=Math.max(xe.count,Te.start+Te.count-xe.start):(++Se,Y[Se]=Te)}Y.length=Se+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ce=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _e=0,xe=Y.length;_e<xe;_e++){const Te=Y[_e],De=Math.floor(Te.start/4),be=Math.ceil(Te.count/4),Ke=De%x.width,z=Math.floor(De/x.width),we=be,ve=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Ke,z,we,ve,B,K,x.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function oe(C,x,B){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const ee=Ve(C,x),Y=x.source;t.bindTexture(K,C.__webglTexture,n.TEXTURE0+B);const Se=i.get(Y);if(Y.version!==Se.__version||ee===!0){t.activeTexture(n.TEXTURE0+B);const ge=_t.getPrimaries(_t.workingColorSpace),Pe=x.colorSpace===Ss?null:_t.getPrimaries(x.colorSpace),Ce=x.colorSpace===Ss||ge===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let _e=g(x.image,!1,r.maxTextureSize);_e=ne(x,_e);const xe=s.convert(x.format,x.colorSpace),Te=s.convert(x.type);let De=M(x.internalFormat,xe,Te,x.colorSpace,x.isVideoTexture);Oe(K,x);let be;const Ke=x.mipmaps,z=x.isVideoTexture!==!0,we=Se.__version===void 0||ee===!0,ve=Y.dataReady,Ae=E(x,_e);if(x.isDepthTexture)De=b(x.format===fo,x.type),we&&(z?t.texStorage2D(n.TEXTURE_2D,1,De,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,xe,Te,null));else if(x.isDataTexture)if(Ke.length>0){z&&we&&t.texStorage2D(n.TEXTURE_2D,Ae,De,Ke[0].width,Ke[0].height);for(let me=0,fe=Ke.length;me<fe;me++)be=Ke[me],z?ve&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,xe,Te,be.data):t.texImage2D(n.TEXTURE_2D,me,De,be.width,be.height,0,xe,Te,be.data);x.generateMipmaps=!1}else z?(we&&t.texStorage2D(n.TEXTURE_2D,Ae,De,_e.width,_e.height),ve&&je(x,_e,xe,Te)):t.texImage2D(n.TEXTURE_2D,0,De,_e.width,_e.height,0,xe,Te,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,Ke[0].width,Ke[0].height,_e.depth);for(let me=0,fe=Ke.length;me<fe;me++)if(be=Ke[me],x.format!==ar)if(xe!==null)if(z){if(ve)if(x.layerUpdates.size>0){const Me=z0(be.width,be.height,x.format,x.type);for(const Xe of x.layerUpdates){const vt=be.data.subarray(Xe*Me/be.data.BYTES_PER_ELEMENT,(Xe+1)*Me/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,Xe,be.width,be.height,1,xe,vt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,_e.depth,xe,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,De,be.width,be.height,_e.depth,0,be.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ve&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,_e.depth,xe,Te,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,De,be.width,be.height,_e.depth,0,xe,Te,be.data)}else{z&&we&&t.texStorage2D(n.TEXTURE_2D,Ae,De,Ke[0].width,Ke[0].height);for(let me=0,fe=Ke.length;me<fe;me++)be=Ke[me],x.format!==ar?xe!==null?z?ve&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,De,be.width,be.height,0,be.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ve&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,xe,Te,be.data):t.texImage2D(n.TEXTURE_2D,me,De,be.width,be.height,0,xe,Te,be.data)}else if(x.isDataArrayTexture)if(z){if(we&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,De,_e.width,_e.height,_e.depth),ve)if(x.layerUpdates.size>0){const me=z0(_e.width,_e.height,x.format,x.type);for(const fe of x.layerUpdates){const Me=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,xe,Te,Me)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,xe,Te,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,_e.width,_e.height,_e.depth,0,xe,Te,_e.data);else if(x.isData3DTexture)z?(we&&t.texStorage3D(n.TEXTURE_3D,Ae,De,_e.width,_e.height,_e.depth),ve&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,xe,Te,_e.data)):t.texImage3D(n.TEXTURE_3D,0,De,_e.width,_e.height,_e.depth,0,xe,Te,_e.data);else if(x.isFramebufferTexture){if(we)if(z)t.texStorage2D(n.TEXTURE_2D,Ae,De,_e.width,_e.height);else{let me=_e.width,fe=_e.height;for(let Me=0;Me<Ae;Me++)t.texImage2D(n.TEXTURE_2D,Me,De,me,fe,0,xe,Te,null),me>>=1,fe>>=1}}else if(Ke.length>0){if(z&&we){const me=ue(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ae,De,me.width,me.height)}for(let me=0,fe=Ke.length;me<fe;me++)be=Ke[me],z?ve&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,xe,Te,be):t.texImage2D(n.TEXTURE_2D,me,De,xe,Te,be);x.generateMipmaps=!1}else if(z){if(we){const me=ue(_e);t.texStorage2D(n.TEXTURE_2D,Ae,De,me.width,me.height)}ve&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Te,_e)}else t.texImage2D(n.TEXTURE_2D,0,De,xe,Te,_e);m(x)&&p(K),Se.__version=Y.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function k(C,x,B){if(x.image.length!==6)return;const K=Ve(C,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const Y=i.get(ee);if(ee.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+B);const Se=_t.getPrimaries(_t.workingColorSpace),ge=x.colorSpace===Ss?null:_t.getPrimaries(x.colorSpace),Pe=x.colorSpace===Ss||Se===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,xe=[];for(let fe=0;fe<6;fe++)!Ce&&!_e?xe[fe]=g(x.image[fe],!0,r.maxCubemapSize):xe[fe]=_e?x.image[fe].image:x.image[fe],xe[fe]=ne(x,xe[fe]);const Te=xe[0],De=s.convert(x.format,x.colorSpace),be=s.convert(x.type),Ke=M(x.internalFormat,De,be,x.colorSpace),z=x.isVideoTexture!==!0,we=Y.__version===void 0||K===!0,ve=ee.dataReady;let Ae=E(x,Te);Oe(n.TEXTURE_CUBE_MAP,x);let me;if(Ce){z&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ke,Te.width,Te.height);for(let fe=0;fe<6;fe++){me=xe[fe].mipmaps;for(let Me=0;Me<me.length;Me++){const Xe=me[Me];x.format!==ar?De!==null?z?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me,0,0,Xe.width,Xe.height,De,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me,Ke,Xe.width,Xe.height,0,Xe.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me,0,0,Xe.width,Xe.height,De,be,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me,Ke,Xe.width,Xe.height,0,De,be,Xe.data)}}}else{if(me=x.mipmaps,z&&we){me.length>0&&Ae++;const fe=ue(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ke,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,xe[fe].width,xe[fe].height,De,be,xe[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ke,xe[fe].width,xe[fe].height,0,De,be,xe[fe].data);for(let Me=0;Me<me.length;Me++){const vt=me[Me].image[fe].image;z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me+1,0,0,vt.width,vt.height,De,be,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me+1,Ke,vt.width,vt.height,0,De,be,vt.data)}}else{z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De,be,xe[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ke,De,be,xe[fe]);for(let Me=0;Me<me.length;Me++){const Xe=me[Me];z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me+1,0,0,De,be,Xe.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Me+1,Ke,De,be,Xe.image[fe])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function re(C,x,B,K,ee,Y){const Se=s.convert(B.format,B.colorSpace),ge=s.convert(B.type),Pe=M(B.internalFormat,Se,ge,B.colorSpace),Ce=i.get(x),_e=i.get(B);if(_e.__renderTarget=x,!Ce.__hasExternalTextures){const xe=Math.max(1,x.width>>Y),Te=Math.max(1,x.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,Pe,xe,Te,x.depth,0,Se,ge,null):t.texImage2D(ee,Y,Pe,xe,Te,0,Se,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,_e.__webglTexture,0,R(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,_e.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(C,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Y=b(x.stencilBuffer,ee),Se=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;de(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),Y,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,C)}else{const K=x.textures;for(let ee=0;ee<K.length;ee++){const Y=K[ee],Se=s.convert(Y.format,Y.colorSpace),ge=s.convert(Y.type),Pe=M(Y.internalFormat,Se,ge,Y.colorSpace);de(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),Pe,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),Pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(C,x,B){const K=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(x.depthTexture);if(ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ce=s.convert(x.depthTexture.format),_e=s.convert(x.depthTexture.type);let xe;x.depthTexture.format===rs?xe=n.DEPTH_COMPONENT24:x.depthTexture.format===fo&&(xe=n.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,xe,x.width,x.height,0,Ce,_e,null)}}else Z(x.depthTexture,0);const Y=ee.__webglTexture,Se=R(x),ge=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Pe=x.depthTexture.format===fo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===rs)de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ge,Y,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ge,Y,0);else if(x.depthTexture.format===fo)de(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ge,Y,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ge,Y,0);else throw new Error("Unknown depthTexture format")}function Ee(C){const x=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let K=0;K<6;K++)le(x.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?le(x.__webglFramebuffer[0],C,0):le(x.__webglFramebuffer,C,0)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[K],C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(C,x,B){const K=i.get(C);x!==void 0&&re(K.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Ee(C)}function P(C){const x=C.texture,B=i.get(C),K=i.get(x);C.addEventListener("dispose",T);const ee=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ge]=[];for(let Pe=0;Pe<x.mipmaps.length;Pe++)B.__webglFramebuffer[ge][Pe]=n.createFramebuffer()}else B.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)B.__webglFramebuffer[ge]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ge=0,Pe=ee.length;ge<Pe;ge++){const Ce=i.get(ee[ge]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&de(C)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ge=0;ge<ee.length;ge++){const Pe=ee[ge];B.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ge]);const Ce=s.convert(Pe.format,Pe.colorSpace),_e=s.convert(Pe.type),xe=M(Pe.internalFormat,Ce,_e,Pe.colorSpace,C.isXRRenderTarget===!0),Te=R(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,xe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,B.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)re(B.__webglFramebuffer[ge][Pe],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Pe);else re(B.__webglFramebuffer[ge],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ge=0,Pe=ee.length;ge<Pe;ge++){const Ce=ee[ge],_e=i.get(Ce);let xe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,_e.__webglTexture),Oe(xe,Ce),re(B.__webglFramebuffer,C,Ce,n.COLOR_ATTACHMENT0+ge,xe,0),m(Ce)&&p(xe)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,K.__webglTexture),Oe(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Pe=0;Pe<x.mipmaps.length;Pe++)re(B.__webglFramebuffer[Pe],C,x,n.COLOR_ATTACHMENT0,ge,Pe);else re(B.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,ge,0);m(x)&&p(ge),t.unbindTexture()}C.depthBuffer&&Ee(C)}function V(C){const x=C.textures;for(let B=0,K=x.length;B<K;B++){const ee=x[B];if(m(ee)){const Y=y(C),Se=i.get(ee).__webglTexture;t.bindTexture(Y,Se),p(Y),t.unbindTexture()}}}const Q=[],J=[];function U(C){if(C.samples>0){if(de(C)===!1){const x=C.textures,B=C.width,K=C.height;let ee=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),ge=x.length>1;if(ge)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=C.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const _e=i.get(x[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,ee,n.NEAREST),l===!0&&(Q.length=0,J.length=0,Q.push(n.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Q.push(Y),J.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,J)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ce]);const _e=i.get(x[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function R(C){return Math.min(r.maxSamples,C.samples)}function de(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ce(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ne(C,x){const B=C.colorSpace,K=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Ea&&B!==Ss&&(_t.getTransfer(B)===Pt?(K!==ar||ee!==Yi)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",B)),x}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=j,this.rebindTextures=I,this.setupRenderTarget=P,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=re,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yC(n,e){function t(i,r=Ss){let s;const o=_t.getTransfer(r);if(i===Yi)return n.UNSIGNED_BYTE;if(i===Tp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===wp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ov)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Nv)return n.BYTE;if(i===Uv)return n.SHORT;if(i===kl)return n.UNSIGNED_SHORT;if(i===Ep)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===yr)return n.FLOAT;if(i===is)return n.HALF_FLOAT;if(i===Bv)return n.ALPHA;if(i===kv)return n.RGB;if(i===ar)return n.RGBA;if(i===rs)return n.DEPTH_COMPONENT;if(i===fo)return n.DEPTH_STENCIL;if(i===zv)return n.RED;if(i===Ap)return n.RED_INTEGER;if(i===Ma)return n.RG;if(i===Cp)return n.RG_INTEGER;if(i===Rp)return n.RGBA_INTEGER;if(i===ru||i===su||i===ou||i===au)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ru)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ru)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===su)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ou)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===au)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$d||i===jd||i===Kd||i===Zd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$d)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jd||i===Qd)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===eh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===th)return s.COMPRESSED_R11_EAC;if(i===nh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ih)return s.COMPRESSED_RG11_EAC;if(i===rh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph||i===mh||i===gh||i===_h||i===vh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ah)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ch)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_h)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===vh)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xh||i===bh||i===yh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xh)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===Mh||i===Eh||i===Th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const SC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MC=`
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

}`;class EC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new tx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Cn({vertexShader:SC,fragmentShader:MC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new lc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TC extends La{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const g=typeof XRWebGLBinding<"u",m=new EC,p={},y=t.getContextAttributes();let M=null,b=null;const E=[],w=[],T=new At;let L=null;const v=new mi;v.viewport=new nn;const S=new mi;S.viewport=new nn;const F=[v,S],N=new UE;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let k=E[oe];return k===void 0&&(k=new $f,E[oe]=k),k.getTargetRaySpace()},this.getControllerGrip=function(oe){let k=E[oe];return k===void 0&&(k=new $f,E[oe]=k),k.getGripSpace()},this.getHand=function(oe){let k=E[oe];return k===void 0&&(k=new $f,E[oe]=k),k.getHandSpace()};function Z(oe){const k=w.indexOf(oe.inputSource);if(k===-1)return;const re=E[k];re!==void 0&&(re.update(oe.inputSource,oe.frame,c||o),re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",G);for(let oe=0;oe<E.length;oe++){const k=w[oe];k!==null&&(w[oe]=null,E[oe].disconnect(k))}H=null,q=null,m.reset();for(const oe in p)delete p[oe];e.setRenderTarget(M),h=null,d=null,f=null,r=null,b=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,ae=null,le=null;y.depth&&(le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?fo:rs,ae=y.stencil?zl:Pr);const Ee={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ee),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Cr(d.textureWidth,d.textureHeight,{format:ar,type:Yi,depthTexture:new Hl(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Cr(h.framebufferWidth,h.framebufferHeight,{format:ar,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(oe){for(let k=0;k<oe.removed.length;k++){const re=oe.removed[k],ae=w.indexOf(re);ae>=0&&(w[ae]=null,E[ae].disconnect(re))}for(let k=0;k<oe.added.length;k++){const re=oe.added[k];let ae=w.indexOf(re);if(ae===-1){for(let Ee=0;Ee<E.length;Ee++)if(Ee>=w.length){w.push(re),ae=Ee;break}else if(w[Ee]===null){w[Ee]=re,ae=Ee;break}if(ae===-1)break}const le=E[ae];le&&le.connect(re)}}const j=new te,he=new te;function O(oe,k,re){j.setFromMatrixPosition(k.matrixWorld),he.setFromMatrixPosition(re.matrixWorld);const ae=j.distanceTo(he),le=k.projectionMatrix.elements,Ee=re.projectionMatrix.elements,I=le[14]/(le[10]-1),P=le[14]/(le[10]+1),V=(le[9]+1)/le[5],Q=(le[9]-1)/le[5],J=(le[8]-1)/le[0],U=(Ee[8]+1)/Ee[0],R=I*J,de=I*U,ce=ae/(-J+U),ne=ce*-J;if(k.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ne),oe.translateZ(ce),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),le[10]===-1)oe.projectionMatrix.copy(k.projectionMatrix),oe.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const ue=I+ce,C=P+ce,x=R-ne,B=de+(ae-ne),K=V*P/C*ue,ee=Q*P/C*ue;oe.projectionMatrix.makePerspective(x,B,K,ee,ue,C),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function pe(oe,k){k===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(k.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let k=oe.near,re=oe.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(re=m.depthFar)),N.near=S.near=v.near=k,N.far=S.far=v.far=re,(H!==N.near||q!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,q=N.far),N.layers.mask=oe.layers.mask|6,v.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;const ae=oe.parent,le=N.cameras;pe(N,ae);for(let Ee=0;Ee<le.length;Ee++)pe(le[Ee],ae);le.length===2?O(N,v,S):N.projectionMatrix.copy(v.projectionMatrix),Oe(oe,N,ae)};function Oe(oe,k,re){re===null?oe.matrix.copy(k.matrixWorld):(oe.matrix.copy(re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(k.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(k.projectionMatrix),oe.projectionMatrixInverse.copy(k.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=wh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(oe){l=oe,d!==null&&(d.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(oe){return p[oe]};let Ve=null;function qe(oe,k){if(u=k.getViewerPose(c||o),_=k,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ae=!1;re.length!==N.cameras.length&&(N.cameras.length=0,ae=!0);for(let P=0;P<re.length;P++){const V=re[P];let Q=null;if(h!==null)Q=h.getViewport(V);else{const U=f.getViewSubImage(d,V);Q=U.viewport,P===0&&(e.setRenderTargetTextures(b,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(b))}let J=F[P];J===void 0&&(J=new mi,J.layers.enable(P),J.viewport=new nn,F[P]=J),J.matrix.fromArray(V.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(V.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(N.matrix.copy(J.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ae===!0&&N.cameras.push(J)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const P=f.getDepthInformation(re[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if(le&&le.includes("camera-access")&&g){e.state.unbindTexture(),f=i.getBinding();for(let P=0;P<re.length;P++){const V=re[P].camera;if(V){let Q=p[V];Q||(Q=new tx,p[V]=Q);const J=f.getCameraImage(V);Q.sourceTexture=J}}}}for(let re=0;re<E.length;re++){const ae=w[re],le=E[re];ae!==null&&le!==void 0&&le.update(ae,k,c||o)}Ve&&Ve(oe,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),_=null}const je=new ix;je.setAnimationLoop(qe),this.setAnimationLoop=function(oe){Ve=oe},this.dispose=function(){}}}const Js=new ss,wC=new sn;function AC(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,jv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ri&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ri&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,b=y.envMapRotation;M&&(m.envMap.value=M,Js.copy(b),Js.x*=-1,Js.y*=-1,Js.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(wC.makeRotationFromEuler(Js)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ri&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CC(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const b=M.program;i.uniformBlockBinding(y,b)}function c(y,M){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",m));const E=M.program;i.updateUBOMapping(y,E);const w=e.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const M=f();y.__bindingPointIndex=M;const b=n.createBuffer(),E=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=r[y.id],b=y.uniforms,E=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,T=b.length;w<T;w++){const L=Array.isArray(b[w])?b[w]:[b[w]];for(let v=0,S=L.length;v<S;v++){const F=L[v];if(h(F,w,v,E)===!0){const N=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let q=0;for(let Z=0;Z<H.length;Z++){const X=H[Z],G=g(X);typeof X=="number"||typeof X=="boolean"?(F.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,N+q,F.__data)):X.isMatrix3?(F.__data[0]=X.elements[0],F.__data[1]=X.elements[1],F.__data[2]=X.elements[2],F.__data[3]=0,F.__data[4]=X.elements[3],F.__data[5]=X.elements[4],F.__data[6]=X.elements[5],F.__data[7]=0,F.__data[8]=X.elements[6],F.__data[9]=X.elements[7],F.__data[10]=X.elements[8],F.__data[11]=0):(X.toArray(F.__data,q),q+=G.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,M,b,E){const w=y.value,T=M+"_"+b;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const L=E[T];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return E[T]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(y){const M=y.uniforms;let b=0;const E=16;for(let T=0,L=M.length;T<L;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,F=v.length;S<F;S++){const N=v[S],H=Array.isArray(N.value)?N.value:[N.value];for(let q=0,Z=H.length;q<Z;q++){const X=H[q],G=g(X),j=b%E,he=j%G.boundary,O=j+he;b+=he,O!==0&&E-O<G.storage&&(b+=E-O),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=G.storage}}}const w=b%E;return w>0&&(b+=E-w),y.__size=b,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}const RC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pr=null;function PC(){return pr===null&&(pr=new AE(RC,16,16,Ma,is),pr.name="DFG_LUT",pr.minFilter=kn,pr.magFilter=kn,pr.wrapS=$r,pr.wrapT=$r,pr.generateMipmaps=!1,pr.needsUpdate=!0),pr}class Fp{constructor(e={}){const{canvas:t=tE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Yi}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const g=h,m=new Set([Rp,Cp,Ap]),p=new Set([Yi,Pr,kl,zl,Tp,wp]),y=new Uint32Array(4),M=new Int32Array(4);let b=null,E=null;const w=[],T=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Wi;let F=0,N=0,H=null,q=-1,Z=null;const X=new nn,G=new nn;let j=null;const he=new St(0);let O=0,pe=t.width,Oe=t.height,Ve=1,qe=null,je=null;const oe=new nn(0,0,pe,Oe),k=new nn(0,0,pe,Oe);let re=!1;const ae=new Qv;let le=!1,Ee=!1;const I=new sn,P=new te,V=new nn,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function U(){return H===null?Ve:1}let R=i;function de(A,W){return t.getContext(A,W)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),R===null){const W="webgl2";if(R=de(W,A),R===null)throw de(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw yt("WebGLRenderer: "+A.message),A}let ce,ne,ue,C,x,B,K,ee,Y,Se,ge,Pe,Ce,_e,xe,Te,De,be,Ke,z,we,ve,Ae,me;function fe(){ce=new PA(R),ce.init(),ve=new yC(R,ce),ne=new yA(R,ce,e,ve),ue=new xC(R,ce),ne.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),C=new LA(R),x=new rC,B=new bC(R,ce,ue,x,ne,ve,C),K=new MA(v),ee=new RA(v),Y=new OE(R),Ae=new xA(R,Y),Se=new DA(R,Y,C,Ae),ge=new UA(R,Se,Y,C),Ke=new NA(R,ne,B),Te=new SA(x),Pe=new iC(v,K,ee,ce,ne,Ae,Te),Ce=new AC(v,x),_e=new oC,xe=new dC(ce),be=new vA(v,K,ee,ue,ge,_,l),De=new _C(v,ge,ne),me=new CC(R,C,ne,ue),z=new bA(R,ce,C),we=new IA(R,ce,C),C.programs=Pe.programs,v.capabilities=ne,v.extensions=ce,v.properties=x,v.renderLists=_e,v.shadowMap=De,v.state=ue,v.info=C}fe(),g!==Yi&&(L=new OA(g,t.width,t.height,r,s));const Me=new TC(v,R);this.xr=Me,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(A){A!==void 0&&(Ve=A,this.setSize(pe,Oe,!1))},this.getSize=function(A){return A.set(pe,Oe)},this.setSize=function(A,W,se=!0){if(Me.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=A,Oe=W,t.width=Math.floor(A*Ve),t.height=Math.floor(W*Ve),se===!0&&(t.style.width=A+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(pe*Ve,Oe*Ve).floor()},this.setDrawingBufferSize=function(A,W,se){pe=A,Oe=W,Ve=se,t.width=Math.floor(A*se),t.height=Math.floor(W*se),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(g===Yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,W,se,ie){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,W,se,ie),ue.viewport(X.copy(oe).multiplyScalar(Ve).round())},this.getScissor=function(A){return A.copy(k)},this.setScissor=function(A,W,se,ie){A.isVector4?k.set(A.x,A.y,A.z,A.w):k.set(A,W,se,ie),ue.scissor(G.copy(k).multiplyScalar(Ve).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){ue.setScissorTest(re=A)},this.setOpaqueSort=function(A){qe=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,se=!0){let ie=0;if(A){let $=!1;if(H!==null){const ye=H.texture.format;$=m.has(ye)}if($){const ye=H.texture.type,Ue=p.has(ye),Re=be.getClearColor(),Fe=be.getClearAlpha(),He=Re.r,Ze=Re.g,Ye=Re.b;Ue?(y[0]=He,y[1]=Ze,y[2]=Ye,y[3]=Fe,R.clearBufferuiv(R.COLOR,0,y)):(M[0]=He,M[1]=Ze,M[2]=Ye,M[3]=Fe,R.clearBufferiv(R.COLOR,0,M))}else ie|=R.COLOR_BUFFER_BIT}W&&(ie|=R.DEPTH_BUFFER_BIT),se&&(ie|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),be.dispose(),_e.dispose(),xe.dispose(),x.dispose(),K.dispose(),ee.dispose(),ge.dispose(),Ae.dispose(),me.dispose(),Pe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",en),Me.removeEventListener("sessionend",lt),Ct.stop()};function Xe(A){A.preventDefault(),y0("WebGLRenderer: Context Lost."),S=!0}function vt(){y0("WebGLRenderer: Context Restored."),S=!1;const A=C.autoReset,W=De.enabled,se=De.autoUpdate,ie=De.needsUpdate,$=De.type;fe(),C.autoReset=A,De.enabled=W,De.autoUpdate=se,De.needsUpdate=ie,De.type=$}function Ne(A){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ze(A){const W=A.target;W.removeEventListener("dispose",ze),it(W)}function it(A){Ie(A),x.remove(A)}function Ie(A){const W=x.get(A).programs;W!==void 0&&(W.forEach(function(se){Pe.releaseProgram(se)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,se,ie,$,ye){W===null&&(W=Q);const Ue=$.isMesh&&$.matrixWorld.determinant()<0,Re=fn(A,W,se,ie,$);ue.setMaterial(ie,Ue);let Fe=se.index,He=1;if(ie.wireframe===!0){if(Fe=Se.getWireframeAttribute(se),Fe===void 0)return;He=2}const Ze=se.drawRange,Ye=se.attributes.position;let ct=Ze.start*He,Lt=(Ze.start+Ze.count)*He;ye!==null&&(ct=Math.max(ct,ye.start*He),Lt=Math.min(Lt,(ye.start+ye.count)*He)),Fe!==null?(ct=Math.max(ct,0),Lt=Math.min(Lt,Fe.count)):Ye!=null&&(ct=Math.max(ct,0),Lt=Math.min(Lt,Ye.count));const jt=Lt-ct;if(jt<0||jt===1/0)return;Ae.setup($,ie,Re,se,Fe);let Kt,Ft=z;if(Fe!==null&&(Kt=Y.get(Fe),Ft=we,Ft.setIndex(Kt)),$.isMesh)ie.wireframe===!0?(ue.setLineWidth(ie.wireframeLinewidth*U()),Ft.setMode(R.LINES)):Ft.setMode(R.TRIANGLES);else if($.isLine){let $e=ie.linewidth;$e===void 0&&($e=1),ue.setLineWidth($e*U()),$.isLineSegments?Ft.setMode(R.LINES):$.isLineLoop?Ft.setMode(R.LINE_LOOP):Ft.setMode(R.LINE_STRIP)}else $.isPoints?Ft.setMode(R.POINTS):$.isSprite&&Ft.setMode(R.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,Rt=$._multiDrawCounts,bt=$._multiDrawCount,Ei=Fe?Y.get(Fe).bytesPerElement:1,Lo=x.get(ie).currentProgram.getUniforms();for(let Ti=0;Ti<bt;Ti++)Lo.setValue(R,"_gl_DrawID",Ti),Ft.render($e[Ti]/Ei,Rt[Ti])}else if($.isInstancedMesh)Ft.renderInstances(ct,jt,$.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Rt=Math.min(se.instanceCount,$e);Ft.renderInstances(ct,jt,Rt)}else Ft.render(ct,jt)};function Qe(A,W,se){A.transparent===!0&&A.side===sr&&A.forceSinglePass===!1?(A.side=ri,A.needsUpdate=!0,It(A,W,se),A.side=Us,A.needsUpdate=!0,It(A,W,se),A.side=sr):It(A,W,se)}this.compile=function(A,W,se=null){se===null&&(se=A),E=xe.get(se),E.init(W),T.push(E),se.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),A!==se&&A.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(E.pushLight($),$.castShadow&&E.pushShadow($))}),E.setupLights();const ie=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Ue=0;Ue<ye.length;Ue++){const Re=ye[Ue];Qe(Re,se,$),ie.add(Re)}else Qe(ye,se,$),ie.add(ye)}),E=T.pop(),ie},this.compileAsync=function(A,W,se=null){const ie=this.compile(A,W,se);return new Promise($=>{function ye(){if(ie.forEach(function(Ue){x.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){$(A);return}setTimeout(ye,10)}ce.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ge=null;function et(A){Ge&&Ge(A)}function en(){Ct.stop()}function lt(){Ct.start()}const Ct=new ix;Ct.setAnimationLoop(et),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(A){Ge=A,Me.setAnimationLoop(A),A===null?Ct.stop():Ct.start()},Me.addEventListener("sessionstart",en),Me.addEventListener("sessionend",lt),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const se=Me.enabled===!0&&Me.isPresenting===!0,ie=L!==null&&(H===null||se)&&L.begin(v,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(W),W=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,W,H),E=xe.get(A,T.length),E.init(W),T.push(E),I.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ae.setFromProjectionMatrix(I,Sr,W.reversedDepth),Ee=this.localClippingEnabled,le=Te.init(this.clippingPlanes,Ee),b=_e.get(A,w.length),b.init(),w.push(b),Me.enabled===!0&&Me.isPresenting===!0){const Ue=v.xr.getDepthSensingMesh();Ue!==null&&on(Ue,W,-1/0,v.sortObjects)}on(A,W,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(qe,je),J=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,J&&be.addToRenderList(b,A),this.info.render.frame++,le===!0&&Te.beginShadows();const $=E.state.shadowsArray;if(De.render($,A,W),le===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&L.hasRenderPass())===!1){const Ue=b.opaque,Re=b.transmissive;if(E.setupLights(),W.isArrayCamera){const Fe=W.cameras;if(Re.length>0)for(let He=0,Ze=Fe.length;He<Ze;He++){const Ye=Fe[He];Ut(Ue,Re,A,Ye)}J&&be.render(A);for(let He=0,Ze=Fe.length;He<Ze;He++){const Ye=Fe[He];Wt(b,A,Ye,Ye.viewport)}}else Re.length>0&&Ut(Ue,Re,A,W),J&&be.render(A),Wt(b,A,W)}H!==null&&N===0&&(B.updateMultisampleRenderTarget(H),B.updateRenderTargetMipmap(H)),ie&&L.end(v),A.isScene===!0&&A.onAfterRender(v,A,W),Ae.resetDefaultState(),q=-1,Z=null,T.pop(),T.length>0?(E=T[T.length-1],le===!0&&Te.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?b=w[w.length-1]:b=null};function on(A,W,se,ie){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ae.intersectsSprite(A)){ie&&V.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ue=ge.update(A),Re=A.material;Re.visible&&b.push(A,Ue,Re,se,V.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ae.intersectsObject(A))){const Ue=ge.update(A),Re=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),V.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),V.copy(Ue.boundingSphere.center)),V.applyMatrix4(A.matrixWorld).applyMatrix4(I)),Array.isArray(Re)){const Fe=Ue.groups;for(let He=0,Ze=Fe.length;He<Ze;He++){const Ye=Fe[He],ct=Re[Ye.materialIndex];ct&&ct.visible&&b.push(A,Ue,ct,se,V.z,Ye)}}else Re.visible&&b.push(A,Ue,Re,se,V.z,null)}}const ye=A.children;for(let Ue=0,Re=ye.length;Ue<Re;Ue++)on(ye[Ue],W,se,ie)}function Wt(A,W,se,ie){const{opaque:$,transmissive:ye,transparent:Ue}=A;E.setupLightsView(se),le===!0&&Te.setGlobalState(v.clippingPlanes,se),ie&&ue.viewport(X.copy(ie)),$.length>0&&xt($,W,se),ye.length>0&&xt(ye,W,se),Ue.length>0&&xt(Ue,W,se),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Ut(A,W,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ie.id]===void 0){const ct=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ie.id]=new Cr(1,1,{generateMipmaps:!0,type:ct?is:Yi,minFilter:uo,samples:ne.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const ye=E.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||X;ye.setSize(Ue.z*v.transmissionResolutionScale,Ue.w*v.transmissionResolutionScale);const Re=v.getRenderTarget(),Fe=v.getActiveCubeFace(),He=v.getActiveMipmapLevel();v.setRenderTarget(ye),v.getClearColor(he),O=v.getClearAlpha(),O<1&&v.setClearColor(16777215,.5),v.clear(),J&&be.render(se);const Ze=v.toneMapping;v.toneMapping=Ar;const Ye=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),E.setupLightsView(ie),le===!0&&Te.setGlobalState(v.clippingPlanes,ie),xt(A,se,ie),B.updateMultisampleRenderTarget(ye),B.updateRenderTargetMipmap(ye),ce.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Lt=0,jt=W.length;Lt<jt;Lt++){const Kt=W[Lt],{object:Ft,geometry:$e,material:Rt,group:bt}=Kt;if(Rt.side===sr&&Ft.layers.test(ie.layers)){const Ei=Rt.side;Rt.side=ri,Rt.needsUpdate=!0,li(Ft,se,ie,$e,Rt,bt),Rt.side=Ei,Rt.needsUpdate=!0,ct=!0}}ct===!0&&(B.updateMultisampleRenderTarget(ye),B.updateRenderTargetMipmap(ye))}v.setRenderTarget(Re,Fe,He),v.setClearColor(he,O),Ye!==void 0&&(ie.viewport=Ye),v.toneMapping=Ze}function xt(A,W,se){const ie=W.isScene===!0?W.overrideMaterial:null;for(let $=0,ye=A.length;$<ye;$++){const Ue=A[$],{object:Re,geometry:Fe,group:He}=Ue;let Ze=Ue.material;Ze.allowOverride===!0&&ie!==null&&(Ze=ie),Re.layers.test(se.layers)&&li(Re,W,se,Fe,Ze,He)}}function li(A,W,se,ie,$,ye){A.onBeforeRender(v,W,se,ie,$,ye),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(v,W,se,ie,A,ye),$.transparent===!0&&$.side===sr&&$.forceSinglePass===!1?($.side=ri,$.needsUpdate=!0,v.renderBufferDirect(se,W,ie,$,A,ye),$.side=Us,$.needsUpdate=!0,v.renderBufferDirect(se,W,ie,$,A,ye),$.side=sr):v.renderBufferDirect(se,W,ie,$,A,ye),A.onAfterRender(v,W,se,ie,$,ye)}function It(A,W,se){W.isScene!==!0&&(W=Q);const ie=x.get(A),$=E.state.lights,ye=E.state.shadowsArray,Ue=$.state.version,Re=Pe.getParameters(A,$.state,ye,W,se),Fe=Pe.getProgramCacheKey(Re);let He=ie.programs;ie.environment=A.isMeshStandardMaterial?W.environment:null,ie.fog=W.fog,ie.envMap=(A.isMeshStandardMaterial?ee:K).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",ze),He=new Map,ie.programs=He);let Ze=He.get(Fe);if(Ze!==void 0){if(ie.currentProgram===Ze&&ie.lightsStateVersion===Ue)return Mi(A,Re),Ze}else Re.uniforms=Pe.getUniforms(A),A.onBeforeCompile(Re,v),Ze=Pe.acquireProgram(Re,Fe),He.set(Fe,Ze),ie.uniforms=Re.uniforms;const Ye=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),Mi(A,Re),ie.needsLights=xn(A),ie.lightsStateVersion=Ue,ie.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix),ie.currentProgram=Ze,ie.uniformsList=null,Ze}function Pn(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=lu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Mi(A,W){const se=x.get(A);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function fn(A,W,se,ie,$){W.isScene!==!0&&(W=Q),B.resetTextureUnits();const ye=W.fog,Ue=ie.isMeshStandardMaterial?W.environment:null,Re=H===null?v.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ea,Fe=(ie.isMeshStandardMaterial?ee:K).get(ie.envMap||Ue),He=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ze=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ye=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Lt=!!se.morphAttributes.color;let jt=Ar;ie.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(jt=v.toneMapping);const Kt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ft=Kt!==void 0?Kt.length:0,$e=x.get(ie),Rt=E.state.lights;if(le===!0&&(Ee===!0||A!==Z)){const Gn=A===Z&&ie.id===q;Te.setState(ie,A,Gn)}let bt=!1;ie.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Rt.state.version||$e.outputColorSpace!==Re||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==Fe||ie.fog===!0&&$e.fog!==ye||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Te.numPlanes||$e.numIntersection!==Te.numIntersection)||$e.vertexAlphas!==He||$e.vertexTangents!==Ze||$e.morphTargets!==Ye||$e.morphNormals!==ct||$e.morphColors!==Lt||$e.toneMapping!==jt||$e.morphTargetsCount!==Ft)&&(bt=!0):(bt=!0,$e.__version=ie.version);let Ei=$e.currentProgram;bt===!0&&(Ei=It(ie,W,$));let Lo=!1,Ti=!1,Fa=!1;const zt=Ei.getUniforms(),ci=$e.uniforms;if(ue.useProgram(Ei.program)&&(Lo=!0,Ti=!0,Fa=!0),ie.id!==q&&(q=ie.id,Ti=!0),Lo||Z!==A){ue.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(R,"projectionMatrix",A.projectionMatrix),zt.setValue(R,"viewMatrix",A.matrixWorldInverse);const ui=zt.map.cameraPosition;ui!==void 0&&ui.setValue(R,P.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&zt.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&zt.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),Z!==A&&(Z=A,Ti=!0,Fa=!0)}if($e.needsLights&&(Rt.state.directionalShadowMap.length>0&&zt.setValue(R,"directionalShadowMap",Rt.state.directionalShadowMap,B),Rt.state.spotShadowMap.length>0&&zt.setValue(R,"spotShadowMap",Rt.state.spotShadowMap,B),Rt.state.pointShadowMap.length>0&&zt.setValue(R,"pointShadowMap",Rt.state.pointShadowMap,B)),$.isSkinnedMesh){zt.setOptional(R,$,"bindMatrix"),zt.setOptional(R,$,"bindMatrixInverse");const Gn=$.skeleton;Gn&&(Gn.boneTexture===null&&Gn.computeBoneTexture(),zt.setValue(R,"boneTexture",Gn.boneTexture,B))}$.isBatchedMesh&&(zt.setOptional(R,$,"batchingTexture"),zt.setValue(R,"batchingTexture",$._matricesTexture,B),zt.setOptional(R,$,"batchingIdTexture"),zt.setValue(R,"batchingIdTexture",$._indirectTexture,B),zt.setOptional(R,$,"batchingColorTexture"),$._colorsTexture!==null&&zt.setValue(R,"batchingColorTexture",$._colorsTexture,B));const zi=se.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&Ke.update($,se,Ei),(Ti||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,zt.setValue(R,"receiveShadow",$.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(ci.envMap.value=Fe,ci.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&W.environment!==null&&(ci.envMapIntensity.value=W.environmentIntensity),ci.dfgLUT!==void 0&&(ci.dfgLUT.value=PC()),Ti&&(zt.setValue(R,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&dn(ci,Fa),ye&&ie.fog===!0&&Ce.refreshFogUniforms(ci,ye),Ce.refreshMaterialUniforms(ci,ie,Ve,Oe,E.state.transmissionRenderTarget[A.id]),lu.upload(R,Pn($e),ci,B)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(lu.upload(R,Pn($e),ci,B),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&zt.setValue(R,"center",$.center),zt.setValue(R,"modelViewMatrix",$.modelViewMatrix),zt.setValue(R,"normalMatrix",$.normalMatrix),zt.setValue(R,"modelMatrix",$.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Gn=ie.uniformsGroups;for(let ui=0,lf=Gn.length;ui<lf;ui++){const Hs=Gn[ui];me.update(Hs,Ei),me.bind(Hs,Ei)}}return Ei}function dn(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function xn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,se){const ie=x.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),x.get(A.texture).__webglTexture=W,x.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const se=x.get(A);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Ir=R.createFramebuffer();this.setRenderTarget=function(A,W=0,se=0){H=A,F=W,N=se;let ie=null,$=!1,ye=!1;if(A){const Re=x.get(A);if(Re.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(R.FRAMEBUFFER,Re.__webglFramebuffer),X.copy(A.viewport),G.copy(A.scissor),j=A.scissorTest,ue.viewport(X),ue.scissor(G),ue.setScissorTest(j),q=-1;return}else if(Re.__webglFramebuffer===void 0)B.setupRenderTarget(A);else if(Re.__hasExternalTextures)B.rebindTextures(A,x.get(A.texture).__webglTexture,x.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Re.__boundDepthTexture!==Ze){if(Ze!==null&&x.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const He=x.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[W])?ie=He[W][se]:ie=He[W],$=!0):A.samples>0&&B.useMultisampledRTT(A)===!1?ie=x.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?ie=He[se]:ie=He,X.copy(A.viewport),G.copy(A.scissor),j=A.scissorTest}else X.copy(oe).multiplyScalar(Ve).floor(),G.copy(k).multiplyScalar(Ve).floor(),j=re;if(se!==0&&(ie=Ir),ue.bindFramebuffer(R.FRAMEBUFFER,ie)&&ue.drawBuffers(A,ie),ue.viewport(X),ue.scissor(G),ue.setScissorTest(j),$){const Re=x.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+W,Re.__webglTexture,se)}else if(ye){const Re=W;for(let Fe=0;Fe<A.textures.length;Fe++){const He=x.get(A.textures[Fe]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Fe,He.__webglTexture,se,Re)}}else if(A!==null&&se!==0){const Re=x.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,se)}q=-1},this.readRenderTargetPixels=function(A,W,se,ie,$,ye,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){ue.bindFramebuffer(R.FRAMEBUFFER,Fe);try{const He=A.textures[Re],Ze=He.format,Ye=He.type;if(!ne.textureFormatReadable(Ze)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ye)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ie&&se>=0&&se<=A.height-$&&(A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(W,se,ie,$,ve.convert(Ze),ve.convert(Ye),ye))}finally{const He=H!==null?x.get(H).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,W,se,ie,$,ye,Ue,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=x.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(W>=0&&W<=A.width-ie&&se>=0&&se<=A.height-$){ue.bindFramebuffer(R.FRAMEBUFFER,Fe);const He=A.textures[Re],Ze=He.format,Ye=He.type;if(!ne.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.bufferData(R.PIXEL_PACK_BUFFER,ye.byteLength,R.STREAM_READ),A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Re),R.readPixels(W,se,ie,$,ve.convert(Ze),ve.convert(Ye),0);const Lt=H!==null?x.get(H).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Lt);const jt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await nE(R,jt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ct),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ye),R.deleteBuffer(ct),R.deleteSync(jt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,se=0){const ie=Math.pow(2,-se),$=Math.floor(A.image.width*ie),ye=Math.floor(A.image.height*ie),Ue=W!==null?W.x:0,Re=W!==null?W.y:0;B.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,se,0,0,Ue,Re,$,ye),ue.unbindTexture()};const Io=R.createFramebuffer(),bn=R.createFramebuffer();this.copyTextureToTexture=function(A,W,se=null,ie=null,$=0,ye=null){ye===null&&($!==0?(Vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=$,$=0):ye=0);let Ue,Re,Fe,He,Ze,Ye,ct,Lt,jt;const Kt=A.isCompressedTexture?A.mipmaps[ye]:A.image;if(se!==null)Ue=se.max.x-se.min.x,Re=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,He=se.min.x,Ze=se.min.y,Ye=se.isBox3?se.min.z:0;else{const zi=Math.pow(2,-$);Ue=Math.floor(Kt.width*zi),Re=Math.floor(Kt.height*zi),A.isDataArrayTexture?Fe=Kt.depth:A.isData3DTexture?Fe=Math.floor(Kt.depth*zi):Fe=1,He=0,Ze=0,Ye=0}ie!==null?(ct=ie.x,Lt=ie.y,jt=ie.z):(ct=0,Lt=0,jt=0);const Ft=ve.convert(W.format),$e=ve.convert(W.type);let Rt;W.isData3DTexture?(B.setTexture3D(W,0),Rt=R.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(B.setTexture2DArray(W,0),Rt=R.TEXTURE_2D_ARRAY):(B.setTexture2D(W,0),Rt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,W.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,W.unpackAlignment);const bt=R.getParameter(R.UNPACK_ROW_LENGTH),Ei=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Lo=R.getParameter(R.UNPACK_SKIP_PIXELS),Ti=R.getParameter(R.UNPACK_SKIP_ROWS),Fa=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Kt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ye);const zt=A.isDataArrayTexture||A.isData3DTexture,ci=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const zi=x.get(A),Gn=x.get(W),ui=x.get(zi.__renderTarget),lf=x.get(Gn.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,ui.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,lf.__webglFramebuffer);for(let Hs=0;Hs<Fe;Hs++)zt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(A).__webglTexture,$,Ye+Hs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(W).__webglTexture,ye,jt+Hs)),R.blitFramebuffer(He,Ze,Ue,Re,ct,Lt,Ue,Re,R.DEPTH_BUFFER_BIT,R.NEAREST);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||x.has(A)){const zi=x.get(A),Gn=x.get(W);ue.bindFramebuffer(R.READ_FRAMEBUFFER,Io),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,bn);for(let ui=0;ui<Fe;ui++)zt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zi.__webglTexture,$,Ye+ui):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zi.__webglTexture,$),ci?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Gn.__webglTexture,ye,jt+ui):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Gn.__webglTexture,ye),$!==0?R.blitFramebuffer(He,Ze,Ue,Re,ct,Lt,Ue,Re,R.COLOR_BUFFER_BIT,R.NEAREST):ci?R.copyTexSubImage3D(Rt,ye,ct,Lt,jt+ui,He,Ze,Ue,Re):R.copyTexSubImage2D(Rt,ye,ct,Lt,He,Ze,Ue,Re);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ci?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Rt,ye,ct,Lt,jt,Ue,Re,Fe,Ft,$e,Kt.data):W.isCompressedArrayTexture?R.compressedTexSubImage3D(Rt,ye,ct,Lt,jt,Ue,Re,Fe,Ft,Kt.data):R.texSubImage3D(Rt,ye,ct,Lt,jt,Ue,Re,Fe,Ft,$e,Kt):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ye,ct,Lt,Ue,Re,Ft,$e,Kt.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ye,ct,Lt,Kt.width,Kt.height,Ft,Kt.data):R.texSubImage2D(R.TEXTURE_2D,ye,ct,Lt,Ue,Re,Ft,$e,Kt);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ei),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Lo),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ti),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Fa),ye===0&&W.generateMipmaps&&R.generateMipmap(Rt),ue.unbindTexture()},this.initRenderTarget=function(A){x.get(A).__webglFramebuffer===void 0&&B.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?B.setTextureCube(A,0):A.isData3DTexture?B.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?B.setTexture2DArray(A,0):B.setTexture2D(A,0),ue.unbindTexture()},this.resetState=function(){F=0,N=0,H=null,ue.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function Hr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function lx(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wa={duration:.5,overwrite:!1,delay:0},Op,Rn,Xt,Ki=1e8,Bt=1/Ki,Ph=Math.PI*2,DC=Ph/4,IC=0,cx=Math.sqrt,LC=Math.cos,NC=Math.sin,Tn=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},os=function(e){return typeof e=="number"},Bp=function(e){return typeof e>"u"},Dr=function(e){return typeof e=="object"},vi=function(e){return e!==!1},kp=function(){return typeof window<"u"},Bc=function(e){return Jt(e)||Tn(e)},ux=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,UC=/random\([^)]+\)/g,FC=/,\s*/g,ug=/(?:-?\.?\d|\.)+/gi,fx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,nd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dx=/[+-]=-?[.\d]+/,OC=/[^,'"\[\]\s]+/gi,BC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yt,gr,Dh,zp,Bi={},Ru={},hx,px=function(e){return(Ru=Aa(e,Bi))&&Si},Vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wl=function(e,t){return!t&&console.warn(e)},mx=function(e,t){return e&&(Bi[e]=t)&&Ru&&(Ru[e]=t)||Bi},Xl=function(){return 0},kC={suppressEvents:!0,isStart:!0,kill:!1},cu={suppressEvents:!0,kill:!1},zC={suppressEvents:!0},Hp={},Ps=[],Ih={},gx,Pi={},id={},fg=30,uu=[],Gp="",Wp=function(e){var t=e[0],i,r;if(Dr(t)||Jt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=uu.length;r--&&!uu[r].targetTest(t););i=uu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new zx(e[r],i)))||e.splice(r,1);return e},_o=function(e){return e._gsap||Wp(Zi(e))[0]._gsap},_x=function(e,t,i){return(i=e[t])&&Jt(i)?e[t]():Bp(i)&&e.getAttribute&&e.getAttribute(t)||i},xi=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},da=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},VC=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Pu=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(Ih={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Xp=function(e){return!!(e._initted||e._startAt||e.add)},vx=function(e,t,i,r){Ps.length&&!Rn&&Pu(),e.render(t,i,!!(Rn&&t<0&&Xp(e))),Ps.length&&!Rn&&Pu()},xx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(OC).length<2?t:Tn(e)?e.trim():e},bx=function(e){return e},ki=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},HC=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Aa=function(e,t){for(var i in t)e[i]=t[i];return e},dg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Dr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Du=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},_l=function(e){var t=e.parent||Yt,i=e.keyframes?HC(Hn(e.keyframes)):ki;if(vi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},GC=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},yx=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},rf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},WC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lh=function(e,t,i,r){return e._startAt&&(Rn?e._startAt.revert(cu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},XC=function n(e){return!e||e._ts&&n(e.parent)},hg=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var i=Math.floor(e=qt(e/t));return e&&i===e?i-1:i},Iu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},sf=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},of=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=qt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),sf(e),i._dirty||vo(i,e)),e},Sx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Iu(e.rawTime(),t),(!t._dur||cc(0,t.totalDuration(),i)-t._tTime>Bt)&&t.render(i,!0)),vo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Bt}},br=function(e,t,i,r){return t.parent&&Fs(t),t._start=qt((os(i)?i:i||e!==Yt?Gi(e,i,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),yx(e,t,"_first","_last",e._sort?"_start":0),Nh(t)||(e._recent=t),r||Sx(e,t),e._ts<0&&of(e,e._tTime),e},Mx=function(e,t){return(Bi.ScrollTrigger||Vp("scrollTrigger",t))&&Bi.ScrollTrigger.create(t,e)},Ex=function(e,t,i,r,s){if(Yp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Rn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gx!==Ii.frame)return Ps.push(e),e._lazy=[s,r],1},qC=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Nh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},YC=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&qC(e)&&!(!e._initted&&Nh(e))||(e._ts<0||e._dp._ts<0)&&!Nh(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=cc(0,e._tDur,t),u=Ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rn||r||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&Ex(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Bt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Lh(e,t,i,!0),e._onUpdate&&!i&&Ui(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ui(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fs(e,1),!i&&!Rn&&(Ui(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$C=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ra=function(e,t,i,r){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&of(e,e._tTime=e._tDur*a),e.parent&&sf(e),i||vo(e.parent,e),e},pg=function(e){return e instanceof ni?vo(e):Ra(e,e._dur)},jC={_start:0,endTime:Xl,totalDuration:Xl},Gi=function n(e,t,i){var r=e.labels,s=e._recent||jC,o=e.duration()>=Ki?s.endTime(!1):e._dur,a,l,c;return Tn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},vl=function(e,t,i){var r=os(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vi(l.vars.inherit)&&l.parent;o.immediateRender=vi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new cn(t[0],o,t[s+1])},Vs=function(e,t){return e||e===0?t(e):t},cc=function(e,t,i){return i<e?e:i>t?t:i},Fn=function(e,t){return!Tn(e)||!(t=BC.exec(e))?"":t[1]},KC=function(e,t,i){return Vs(i,function(r){return cc(e,t,r)})},Uh=[].slice,Tx=function(e,t){return e&&Dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Dr(e[0]))&&!e.nodeType&&e!==gr},ZC=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Tn(r)&&!t||Tx(r,1)?(s=i).push.apply(s,Zi(r)):i.push(r)})||i},Zi=function(e,t,i){return Xt&&!t&&Xt.selector?Xt.selector(e):Tn(e)&&!i&&(Dh||!Pa())?Uh.call((t||zp).querySelectorAll(e),0):Hn(e)?ZC(e,i):Tx(e)?Uh.call(e,0):e?[e]:[]},Fh=function(e){return e=Zi(e)[0]||Wl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Zi(t,i.querySelectorAll?i:i===e?Wl("Invalid scope")||zp.createElement("div"):e)}},wx=function(e){return e.sort(function(){return .5-Math.random()})},Ax=function(e){if(Jt(e))return e;var t=Dr(e)?e:{each:e},i=xo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Tn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(d,h,_){var g=(_||t).length,m=o[g],p,y,M,b,E,w,T,L,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,Ki])[1],!v){for(T=-Ki;T<(T=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=o[g]=[],p=l?Math.min(v,g)*u-.5:r%v,y=v===Ki?0:l?g*f/v-.5:r/v|0,T=0,L=Ki,w=0;w<g;w++)M=w%v-p,b=y-(w/v|0),m[w]=E=c?Math.abs(c==="y"?b:M):cx(M*M+b*b),E>T&&(T=E),E<L&&(L=E);r==="random"&&wx(m),m.max=T-L,m.min=L,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Fn(t.amount||t.each)||0,i=i&&g<0?Ox(i):i}return g=(m[d]-m.min)/m.max||0,qt(m.b+(i?i(g):g)*m.v)+m.u}},Oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=qt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(os(i)?0:Fn(i))}},Cx=function(e,t){var i=Hn(e),r,s;return!i&&Dr(e)&&(r=i=e.radius||Ki,e.values?(e=Zi(e.values),(s=!os(e[0]))&&(r*=r)):e=Oh(e.increment)),Vs(t,i?Jt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ki,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-a,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-a),d<c&&(c=d,u=f);return u=!r||c<=r?e[u]:o,s||u===o||os(o)?u:u+Fn(o)}:Oh(e))},Rx=function(e,t,i,r){return Vs(Hn(e)?!t:i===!0?!!(i=0):!r,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},JC=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},QC=function(e,t){return function(i){return e(parseFloat(i))+(t||Fn(i))}},e3=function(e,t,i){return Dx(e,t,0,1,i)},Px=function(e,t,i){return Vs(i,function(r){return e[~~t(r)]})},t3=function n(e,t,i){var r=t-e;return Hn(e)?Px(e,n(0,e.length),t):Vs(i,function(s){return(r+(s-e)%r)%r+e})},n3=function n(e,t,i){var r=t-e,s=r*2;return Hn(e)?Px(e,n(0,e.length-1),t):Vs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ql=function(e){return e.replace(UC,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(FC);return Rx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Dx=function(e,t,i,r,s){var o=t-e,a=r-i;return Vs(s,function(l){return i+((l-e)/o*a||0)})},i3=function n(e,t,i,r){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var o=Tn(e),a={},l,c,u,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},i=t}else r||(e=Aa(Hn(e)?[]:{},e));if(!u){for(l in t)qp.call(a,e,l,"get",t[l]);s=function(_){return Kp(_,a)||(o?e.p:e)}}}return Vs(i,s)},mg=function(e,t,i){var r=e.labels,s=Ki,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ui=function(e,t,i){var r=e.vars,s=r[t],o=Xt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&Ps.length&&Pu(),a&&(Xt=a),u=l?s.apply(c,l):s.call(c),Xt=o,u},Qa=function(e){return Fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rn),e.progress()<1&&Ui(e,"onInterrupt"),e},ra,Ix=[],Lx=function(e){if(e)if(e=!e.name&&e.default||e,kp()||e.headless){var t=e.name,i=Jt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Xl,render:Kp,add:qp,kill:x3,modifier:v3,rawVars:0},o={targetTest:0,get:0,getSetter:jp,aliases:{},register:0};if(Pa(),e!==r){if(Pi[t])return;ki(r,ki(Du(e,s),o)),Aa(r.prototype,Aa(s,Du(e,o))),Pi[r.prop=t]=r,e.targetTest&&(uu.push(r),Hp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mx(t,r),e.register&&e.register(Si,r,bi)}else Ix.push(e)},Ot=255,el={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},rd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ot+.5|0},Nx=function(e,t,i){var r=e?os(e)?[e>>16,e>>8&Ot,e&Ot]:0:el.black,s,o,a,l,c,u,f,d,h,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),el[e])r=el[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ot,r&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(ug),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=rd(l+1/3,s,o),r[1]=rd(l,s,o),r[2]=rd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(fx),i&&r.length<4&&(r[3]=1),r}else r=e.match(ug)||el.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Ot,o=r[1]/Ot,a=r[2]/Ot,f=Math.max(s,o,a),d=Math.min(s,o,a),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(o-a)/h+(o<a?6:0):f===o?(a-s)/h+2:(s-o)/h+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Ux=function(e){var t=[],i=[],r=-1;return e.split(Ds).forEach(function(s){var o=s.match(ia)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},gg=function(e,t,i){var r="",s=(e+r).match(Ds),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Nx(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(u=Ux(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ds,"1").split(ia),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ds),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ds=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in el)n+="|"+e+"\\b";return new RegExp(n+")","gi")})(),r3=/hsl[a]?\(/,Fx=function(e){var t=e.join(" "),i;if(Ds.lastIndex=0,Ds.test(t))return i=r3.test(t),e[1]=gg(e[1],i),e[0]=gg(e[0],i,Ux(e[1])),!0},Yl,Ii=(function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,d,h,_=function g(m){var p=n()-r,y=m===!0,M,b,E,w;if((p>e||p<0)&&(i+=p-t),r+=p,E=r-i,M=E-o,(M>0||y)&&(w=++f.frame,d=E-f.time*1e3,f.time=E=E/1e3,o+=M+(M>=s?4:s-M),b=1),y||(l=c(g)),b)for(h=0;h<a.length;h++)a[h](E,d,w,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){hx&&(!Dh&&kp()&&(gr=Dh=window,zp=gr.document||{},Bi.gsap=Si,(gr.gsapVersions||(gr.gsapVersions=[])).push(Si.version),px(Ru||gr.GreenSockGlobals||!gr.gsap&&gr||{}),Ix.forEach(Lx)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Yl=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Yl=0,c=Xl},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var M=p?function(b,E,w,T){m(b,E,w,T),f.remove(M)}:m;return f.remove(m),a[y?"unshift":"push"](M),Pa(),M},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&h>=p&&h--},_listeners:a},f})(),Pa=function(){return!Yl&&Ii.wake()},mt={},s3=/^[\d.\-M][\d.\-,\s]/,o3=/["']/g,a3=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(o3,"").trim():+c,r=l.substr(a+1).trim();return t},l3=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},c3=function(e){var t=(e+"").split("("),i=mt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[a3(t[1])]:l3(e).split(",").map(xx)):mt._CE&&s3.test(e)?mt._CE("",e):i},Ox=function(e){return function(t){return 1-e(1-t)}},Bx=function n(e,t){for(var i=e._first,r;i;)i instanceof ni?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},xo=function(e,t){return e&&(Jt(e)?e:mt[e]||c3(e))||t},Do=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return xi(e,function(a){mt[a]=Bi[a]=s,mt[o=a.toLowerCase()]=i;for(var l in s)mt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=mt[a+"."+l]=s[l]}),s},kx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},sd=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ph*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*NC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kx(a);return s=Ph/s,l.config=function(c,u){return n(e,c,u)},l},od=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:kx(i);return r.config=function(s){return n(e,s)},r};xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Do(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});mt.Linear.easeNone=mt.none=mt.Linear.easeIn;Do("Elastic",sd("in"),sd("out"),sd());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Do("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Do("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Do("Circ",function(n){return-(cx(1-n*n)-1)});Do("Sine",function(n){return n===1?1:-LC(n*DC)+1});Do("Back",od("in"),od("out"),od());mt.SteppedEase=mt.steps=Bi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Bt;return function(a){return((r*cc(0,o,a)|0)+s)*i}}};wa.ease=mt["quad.out"];xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Gp+=n+","+n+"Params,"});var zx=function(e,t){this.id=IC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:_x,this.set=t?t.getSetter:jp},$l=(function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),Yl||Ii.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Pa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(of(this,i),!s._dp||s.parent||Sx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&br(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Bt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),vx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+hg(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+hg(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Iu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Bt?0:this._rts,this.totalTime(cc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),sf(this),WC(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Pa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=qt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&br(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Iu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=zC);var r=Rn;return Rn=i,Xp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Rn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,pg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,pg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Gi(this,i),vi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vi(r)),this._dur||(this._zTime=-Bt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Bt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Jt(i)?i:bx,l=function(){var u=r.then;r.then=null,s&&s(),Jt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Qa(this)},n})();ki($l.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var ni=(function(n){lx(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vi(i.sortChildren),Yt&&br(i.parent||Yt,Hr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Mx(Hr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return vl(0,arguments,this),this},t.from=function(r,s,o){return vl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return vl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,_l(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new cn(r,s,Gi(this,o),1),this},t.call=function(r,s,o){return br(this,cn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new cn(r,o,Gi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,_l(o).immediateRender=vi(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,_l(a).immediateRender=vi(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:qt(r),f=this._zTime<0!=r<0&&(this._initted||!c),d,h,_,g,m,p,y,M,b,E,w,T;if(this!==Yt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,b=this._start,M=this._ts,p=!M,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=qt(u%m),u===l?(g=this._repeat,d=c):(E=qt(u/m),g=~~E,g&&g===E&&(d=c,g--),d>c&&(d=c)),E=Ca(this._tTime,m),!a&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),w&&g&1&&(d=c-d,T=1),g!==E&&!this._lock){var L=w&&E&1,v=L===(w&&g&1);if(g<E&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(T?0:qt(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Ui(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,E=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Bx(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$C(this,qt(a),qt(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&c&&!s&&!E&&(Ui(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(h=this._first;h;){if(_=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,o),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-Bt);break}}h=_}else{h=this._last;for(var S=r<0?r:d;h;){if(_=h._prev,(h._act||S<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(r,s,o);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,o||Rn&&Xp(h)),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=S?-Bt:Bt);break}}h=_}}if(y&&!s&&(this.pause(),y.render(d>=a?0:-Bt)._zTime=d>=a?1:-1,this._ts))return this._start=b,sf(this),this.render(r,s,o);this._onUpdate&&!s&&Ui(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(b===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fs(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Ui(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(os(s)||(s=Gi(this,s,r)),!(r instanceof $l)){if(Hn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Tn(r))return this.addLabel(r,s);if(Jt(r))r=cn.delayedCall(0,r);else return this}return this!==r?br(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ki);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof cn?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Tn(r)?this.removeLabel(r):Jt(r)?this.killTweensOf(r):(r.parent===this&&rf(this,r),r===this._recent&&(this._recent=this._last),vo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Gi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=cn.delayedCall(0,s||Xl,o);return a.data="isPause",this._hasPause=1,br(this,a,Gi(this,r))},t.removePause=function(r){var s=this._first;for(r=Gi(this,r);s;)s._start===r&&s.data==="isPause"&&Fs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Zi(r),l=this._first,c=os(s),u;l;)l instanceof cn?VC(l._targets,a)&&(c?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Gi(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,_=cn.to(o,ki({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Bt,onStart:function(){if(o.pause(),!h){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Ra(_,m,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ki({startAt:{time:Gi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),mg(this,Gi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),mg(this,Gi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(r=qt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return vo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Ki,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,br(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=qt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ra(o,o===Yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Yt._ts&&(vx(Yt,Iu(r,Yt)),gx=Ii.frame),Ii.frame>=fg){fg+=Oi.autoSleep||120;var s=Yt._first;if((!s||!s._ts)&&Oi.autoSleep&&Ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ii.sleep()}}},e})($l);ki(ni.prototype,{_lock:0,_hasPause:0,_forcing:0});var u3=function(e,t,i,r,s,o,a){var l=new bi(this._pt,e,t,0,1,qx,null,s),c=0,u=0,f,d,h,_,g,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ql(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),d=i.match(nd)||[];f=nd.exec(r);)_=f[0],g=r.substring(c,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?da(m,_)-m:parseFloat(_)-m,m:h&&h<4?Math.round:0},c=nd.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(dx.test(r)||p)&&(l.e=0),this._pt=l,l},qp=function(e,t,i,r,s,o,a,l,c,u){Jt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Jt(f)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Jt(f)?c?m3:Wx:$p,_;if(Tn(r)&&(~r.indexOf("random(")&&(r=ql(r)),r.charAt(1)==="="&&(_=da(d,r)+(Fn(d)||0),(_||_===0)&&(r=_))),!u||d!==r||Bh)return!isNaN(d*r)&&r!==""?(_=new bi(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?_3:Xx,0,h),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Vp(t,r),u3.call(this,e,t,d,r,h,l||Oi.stringFilter,c))},f3=function(e,t,i,r,s){if(Jt(e)&&(e=xl(e,s,t,i,r)),!Dr(e)||e.style&&e.nodeType||Hn(e)||ux(e))return Tn(e)?xl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=xl(e[a],s,t,i,r);return o},Vx=function(e,t,i,r,s,o){var a,l,c,u;if(Pi[e]&&(a=new Pi[e]).init(s,a.rawVars?t[e]:f3(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new bi(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ra))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Es,Bh,Yp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,d=r.keyframes,h=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=e._overwrite==="auto"&&!Op,b=e.timeline,E,w,T,L,v,S,F,N,H,q,Z,X,G;if(b&&(!d||!s)&&(s="none"),e._ease=xo(s,wa.ease),e._yEase=f?Ox(xo(f===!0?s:f,wa.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!b&&!!r.runBackwards,!b||d&&!r.stagger){if(N=m[0]?_o(m[0]).harness:0,X=N&&r[N.prop],E=Du(r,Hp),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!h?g.render(-1,!0):g.revert(u&&_?cu:kC),g._lazy=0),o){if(Fs(e._startAt=cn.set(m,ki({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&vi(l),startAt:null,delay:0,onUpdate:c&&function(){return Ui(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn||!a&&!h)&&e._startAt.revert(cu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),T=ki({overwrite:!1,data:"isFromStart",lazy:a&&!g&&vi(l),immediateRender:a,stagger:0,parent:p},E),X&&(T[N.prop]=X),Fs(e._startAt=cn.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rn?e._startAt.revert(cu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&vi(l)||l&&!_,w=0;w<m.length;w++){if(v=m[w],F=v._gsap||Wp(m)[w]._gsap,e._ptLookup[w]=q={},Ih[F.id]&&Ps.length&&Pu(),Z=y===m?w:y.indexOf(v),N&&(H=new N).init(v,X||E,e,Z,y)!==!1&&(e._pt=L=new bi(e._pt,v,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(j){q[j]=L}),H.priority&&(S=1)),!N||X)for(T in E)Pi[T]&&(H=Vx(T,E,e,Z,v,y))?H.priority&&(S=1):q[T]=L=qp.call(e,v,T,"get",E[T],Z,y,0,r.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),M&&e._pt&&(Es=e,Yt.killTweensOf(v,q,e.globalTime(t)),G=!e.parent,Es=0),e._pt&&l&&(Ih[F.id]=1)}S&&Yx(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,d&&t<=0&&b.render(Ki,!0,!0)},d3=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Bh=1,e.vars[t]="+=0",Yp(e,a),Bh=0,l?Wl(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=tn(i)+Fn(f.e)),f.b&&(f.b=u.s+Fn(f.b))},h3=function(e,t){var i=e[0]?_o(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Aa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},p3=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Hn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},xl=function(e,t,i,r,s){return Jt(e)?e.call(t,i,r,s):Tn(e)&&~e.indexOf("random(")?ql(e):e},Hx=Gp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Gx={};xi(Hx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return Gx[n]=1});var cn=(function(n){lx(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:_l(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||Yt,M=(Hn(i)||ux(i)?os(i[0]):"length"in r)?[i]:Zi(i),b,E,w,T,L,v,S,F;if(a._targets=M.length?Wp(M):Wl("GSAP target "+i+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=h,_||d||Bc(c)||Bc(u)){if(r=a.vars,b=a.timeline=new ni({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:M}),b.kill(),b.parent=b._dp=Hr(a),b._start=0,d||Bc(c)||Bc(u)){if(T=M.length,S=d&&Ax(d),Dr(d))for(L in d)~Hx.indexOf(L)&&(F||(F={}),F[L]=d[L]);for(E=0;E<T;E++)w=Du(r,Gx),w.stagger=0,p&&(w.yoyoEase=p),F&&Aa(w,F),v=M[E],w.duration=+xl(c,Hr(a),E,v,M),w.delay=(+xl(u,Hr(a),E,v,M)||0)-a._delay,!d&&T===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),b.to(v,w,S?S(E,v,M):0),b._ease=mt.none;b.duration()?c=u=0:a.timeline=0}else if(_){_l(ki(b.vars.defaults,{ease:"none"})),b._ease=xo(_.ease||r.ease||"none");var N=0,H,q,Z;if(Hn(_))_.forEach(function(X){return b.to(M,X,">")}),b.duration();else{w={};for(L in _)L==="ease"||L==="easeEach"||p3(L,_[L],w,_.easeEach);for(L in w)for(H=w[L].sort(function(X,G){return X.t-G.t}),N=0,E=0;E<H.length;E++)q=H[E],Z={ease:q.e,duration:(q.t-(E?H[E-1].t:0))/100*c},Z[L]=q.v,b.to(M,Z,N),N+=Z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return h===!0&&!Op&&(Es=Hr(a),Yt.killTweensOf(M),Es=0),br(y,Hr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!_&&a._start===qt(y._time)&&vi(f)&&XC(Hr(a))&&y.data!=="nested")&&(a._tTime=-Bt,a.render(Math.max(0,-u)||0)),m&&Mx(Hr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Bt&&!u?l:r<Bt?0:r,d,h,_,g,m,p,y,M,b;if(!c)YC(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(d=qt(f%g),f===l?(_=this._repeat,d=c):(m=qt(f/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,d=c-d),m=Ca(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=f,this;_!==m&&(M&&this._yEase&&Bx(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(qt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ex(this,u?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!a&&f&&!s&&!m&&(Ui(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;M&&M.render(r<0?r:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Lh(this,r,s,o),Ui(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Ui(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Lh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Fs(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Ui(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Yl||Ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Yp(this,c),u=this._ease(c/this._dur),d3(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(of(this,0),this.parent||yx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Qa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||Qa(this),this.parent&&o!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Zi(r):a,c=this._ptLookup,u=this._pt,f,d,h,_,g,m,p;if((!s||s==="all")&&GC(a,l))return s==="all"&&(this._pt=0),Qa(this);for(f=this._op=this._op||[],s!=="all"&&(Tn(s)&&(g={},xi(s,function(y){return g[y]=1}),s=g),s=h3(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(f[p]=s,_=d,h={}):(h=f[p]=f[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&rf(this,m,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&Qa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return vl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return vl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Yt.killTweensOf(r,s,o)},e})($l);ki(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xi("staggerTo,staggerFrom,staggerFromTo",function(n){cn[n]=function(){var e=new ni,t=Uh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var $p=function(e,t,i){return e[t]=i},Wx=function(e,t,i){return e[t](i)},m3=function(e,t,i,r){return e[t](r.fp,i)},g3=function(e,t,i){return e.setAttribute(t,i)},jp=function(e,t){return Jt(e[t])?Wx:Bp(e[t])&&e.setAttribute?g3:$p},Xx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},_3=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Kp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},v3=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},x3=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?rf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},b3=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Yx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},bi=(function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||Xx,this.d=l||this,this.set=c||$p,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=b3,this.m=i,this.mt=s,this.tween=r},n})();xi(Gp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Hp[n]=1});Bi.TweenMax=Bi.TweenLite=cn;Bi.TimelineLite=Bi.TimelineMax=ni;Yt=new ni({sortChildren:!1,defaults:wa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=Fx;var bo=[],fu={},y3=[],_g=0,S3=0,ad=function(e){return(fu[e]||y3).map(function(t){return t()})},kh=function(){var e=Date.now(),t=[];e-_g>2&&(ad("matchMediaInit"),bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=gr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),ad("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),_g=e,ad("matchMedia"))},$x=(function(){function n(t,i){this.selector=i&&Fh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=S3++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Jt(i)&&(s=r,r=i,i=Jt);var o=this,a=function(){var c=Xt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Fh(s)),Xt=o,f=r.apply(o,arguments),Jt(f)&&o._r.push(f),Xt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Jt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Xt;Xt=null,i(this),Xt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof cn&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof ni?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof cn)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bo.length;o--;)bo[o].id===this.id&&bo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n})(),M3=(function(){function n(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Dr(i)||(i={matches:i});var o=new $x(0,s||this.scope),a=o.conditions={},l,c,u;Xt&&!o.selector&&(o.selector=Xt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=gr.matchMedia(i[c]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(kh):l.addEventListener("change",kh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Lu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return Lx(r)})},timeline:function(e){return new ni(e)},getTweensOf:function(e,t){return Yt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Tn(e)&&(e=Zi(e)[0]);var s=_o(e||{}).get,o=i?bx:xx;return i==="native"&&(i=""),e&&(t?o((Pi[t]&&Pi[t].get||s)(e,t,i,r)):function(a,l,c){return o((Pi[a]&&Pi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Zi(e),e.length>1){var r=e.map(function(u){return Si.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Pi[t],a=_o(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;ra._pt=0,f.init(e,i?u+i:u,ra,0,[e]),f.render(1,f),ra._pt&&Kp(1,ra)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=Si.to(e,ki((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xo(e.ease,wa.ease)),dg(wa,e||{})},config:function(e){return dg(Oi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Pi[a]&&!Bi[a]&&Wl(t+" effect requires "+a+" plugin.")}),id[t]=function(a,l,c){return i(Zi(a),ki(l||{},s),c)},o&&(ni.prototype[t]=function(a,l,c){return this.add(id[t](a,Dr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){mt[e]=xo(t)},parseEase:function(e,t){return arguments.length?xo(e,t):mt},getById:function(e){return Yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new ni(e),r,s;for(i.smoothChildTiming=vi(e.smoothChildTiming),Yt.remove(i),i._dp=0,i._time=i._tTime=Yt._time,r=Yt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof cn&&r.vars.onComplete===r._targets[0]))&&br(i,r,r._start-r._delay),r=s;return br(Yt,i,0),i},context:function(e,t){return e?new $x(e,t):Xt},matchMedia:function(e){return new M3(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||kh()},addEventListener:function(e,t){var i=fu[e]||(fu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=fu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:t3,wrapYoyo:n3,distribute:Ax,random:Rx,snap:Cx,normalize:e3,getUnit:Fn,clamp:KC,splitColor:Nx,toArray:Zi,selector:Fh,mapRange:Dx,pipe:JC,unitize:QC,interpolate:i3,shuffle:wx},install:px,effects:id,ticker:Ii,updateRoot:ni.updateRoot,plugins:Pi,globalTimeline:Yt,core:{PropTween:bi,globals:mx,Tween:cn,Timeline:ni,Animation:$l,getCache:_o,_removeLinkedListItem:rf,reverting:function(){return Rn},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return Op=e}}};xi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Lu[n]=cn[n]});Ii.add(ni.updateRoot);ra=Lu.to({},{duration:0});var E3=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},T3=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=E3(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ld=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Tn(s)&&(l={},xi(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}T3(a,s)}}}},Si=Lu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Rn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ld("roundProps",Oh),ld("modifiers"),ld("snap",Cx))||Lu;cn.version=ni.version=Si.version="3.14.2";hx=1;kp()&&Pa();mt.Power0;mt.Power1;mt.Power2;mt.Power3;mt.Power4;mt.Linear;mt.Quad;mt.Cubic;mt.Quart;mt.Quint;mt.Strong;mt.Elastic;mt.Back;mt.SteppedEase;mt.Bounce;mt.Sine;mt.Expo;mt.Circ;var vg,Ts,ha,Zp,ho,xg,Jp,w3=function(){return typeof window<"u"},as={},io=180/Math.PI,pa=Math.PI/180,jo=Math.atan2,bg=1e8,Qp=/([A-Z])/g,A3=/(left|right|width|margin|padding|x)/i,C3=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},R3=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},P3=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},D3=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},I3=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},jx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Kx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},L3=function(e,t,i){return e.style[t]=i},N3=function(e,t,i){return e.style.setProperty(t,i)},U3=function(e,t,i){return e._gsap[t]=i},F3=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},O3=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},B3=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},$t="transform",yi=$t+"Origin",k3=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in as&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Wr(r,a)}):this.tfm[e]=o.x?o[e]:Wr(r,e),e===yi&&(this.tfm.zOrigin=o.zOrigin);else return Mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf($t)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(yi,t,"")),e=$t}(s||t)&&this.props.push(e,t,s[e])},Zx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},z3=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Qp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Jp(),(!s||!s.isStart)&&!i[$t]&&(Zx(i),r.zOrigin&&i[yi]&&(i[yi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Jx=function(e,t){var i={target:e,props:[],revert:z3,save:k3};return e._gsap||Si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Qx,Vh=function(e,t){var i=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return i&&i.style?i:Ts.createElement(e)},Fi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Qp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Da(t)||t,1)||""},yg="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yg[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yg[o]:"")+e},Hh=function(){w3()&&window.document&&(vg=window,Ts=vg.document,ha=Ts.documentElement,ho=Vh("div")||{style:{}},Vh("div"),$t=Da($t),yi=$t+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qx=!!Da("perspective"),Jp=Si.core.reverting,Zp=1)},Sg=function(e){var t=e.ownerSVGElement,i=Vh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ha.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ha.removeChild(i),s},Mg=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},eb=function(e){var t,i;try{t=e.getBBox()}catch{t=Sg(e),i=1}return t&&(t.width||t.height)||i||(t=Sg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mg(e,["x","cx","x1"])||0,y:+Mg(e,["y","cy","y1"])||0,width:0,height:0}:t},tb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&eb(e))},Os=function(e,t){if(t){var i=e.style,r;t in as&&t!==yi&&(t=$t),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Qp,"-$1").toLowerCase())):i.removeAttribute(t)}},ws=function(e,t,i,r,s,o){var a=new bi(e._pt,t,i,0,1,o?Kx:jx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Eg={deg:1,rad:1,turn:1},V3={grid:1,flex:1},Bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=A3.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",h=r==="%",_,g,m,p;if(r===o||!s||Eg[r]||Eg[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),p=e.getCTM&&tb(e),(h||o==="%")&&(as[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],tn(h?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Ts||!g.appendChild)&&(g=Ts.body),m=g._gsap,m&&h&&m.width&&l&&m.time===Ii.time&&!m.uncache)return tn(s/m.width*f);if(h&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,_=e[u],y?e.style[t]=y:Os(e,t)}else(h||o==="%")&&!V3[Fi(g,"display")]&&(a.position=Fi(e,"position")),g===e&&(a.position="static"),g.appendChild(ho),_=ho[u],g.removeChild(ho),a.position="absolute";return l&&h&&(m=_o(g),m.time=Ii.time,m.width=g[u]),tn(d?_*s/f:_&&s?f/_*s:0)},Wr=function(e,t,i,r){var s;return Zp||Hh(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),as[t]&&t!=="transform"?(s=Kl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Uu(Fi(e,yi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Nu[t]&&Nu[t](e,t,i)||Fi(e,t)||_x(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bs(e,t,s,i)+i:s},H3=function(e,t,i,r){if(!i||i==="none"){var s=Da(t,e,1),o=s&&Fi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Fi(e,"borderTopColor"))}var a=new bi(this._pt,e.style,t,0,1,qx),l=0,c=0,u,f,d,h,_,g,m,p,y,M,b,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Fi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Fi(e,t)||r,g?e.style[t]=g:Os(e,t)),u=[i,r],Fx(u),i=u[0],r=u[1],d=i.match(ia)||[],E=r.match(ia)||[],E.length){for(;f=ia.exec(r);)m=f[0],y=r.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(h=parseFloat(g)||0,b=g.substr((h+"").length),m.charAt(1)==="="&&(m=da(h,m)+b),p=parseFloat(m),M=m.substr((p+"").length),l=ia.lastIndex-M.length,M||(M=M||Oi.units[t]||b,l===r.length&&(r+=M,a.e+=M)),b!==M&&(h=Bs(e,t,g,M)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:h,c:p-h,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Kx:jx;return dx.test(r)&&(a.e=0),this._pt=a,a},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G3=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Tg[i]||i,t[1]=Tg[r]||r,t.join(" ")},W3=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],as[a]&&(l=1,a=a==="transformOrigin"?yi:$t),Os(i,a);l&&(Os(i,$t),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Kl(i,1),o.uncache=1,Zx(r)))}},Nu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new bi(e._pt,t,i,0,0,W3);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},jl=[1,0,0,1,0,0],nb={},ib=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wg=function(e){var t=Fi(e,$t);return ib(t)?jl:t.substr(7).match(fx).map(tn)},em=function(e,t){var i=e._gsap||_o(e),r=e.style,s=wg(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?jl:s):(s===jl&&!e.offsetParent&&e!==ha&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ha.appendChild(e)),s=wg(e),l?r.display=l:Os(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ha.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gh=function(e,t,i,r,s,o){var a=e._gsap,l=s||em(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,h=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],M=t.split(" "),b=parseFloat(M[0])||0,E=parseFloat(M[1])||0,w,T,L,v;i?l!==jl&&(T=h*m-_*g)&&(L=b*(m/T)+E*(-g/T)+(g*y-m*p)/T,v=b*(-_/T)+E*(h/T)-(h*y-_*p)/T,b=L,E=v):(w=eb(e),b=w.x+(~M[0].indexOf("%")?b/100*w.width:b),E=w.y+(~(M[1]||M[0]).indexOf("%")?E/100*w.height:E)),r||r!==!1&&a.smooth?(p=b-c,y=E-u,a.xOffset=f+(p*h+y*g)-p,a.yOffset=d+(p*_+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[yi]="0px 0px",o&&(ws(o,a,"xOrigin",c,b),ws(o,a,"yOrigin",u,E),ws(o,a,"xOffset",f,a.xOffset),ws(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Kl=function(e,t){var i=e._gsap||new zx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Fi(e,yi)||"0",u,f,d,h,_,g,m,p,y,M,b,E,w,T,L,v,S,F,N,H,q,Z,X,G,j,he,O,pe,Oe,Ve,qe,je;return u=f=d=g=m=p=y=M=b=0,h=_=1,i.svg=!!(e.getCTM&&tb(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[$t]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$t]!=="none"?l[$t]:"")),r.scale=r.rotate=r.translate="none"),T=em(e,i.svg),i.svg&&(i.uncache?(j=e.getBBox(),c=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Gh(e,G||c,!!G||i.originIsAbsolute,i.smooth!==!1,T)),E=i.xOrigin||0,w=i.yOrigin||0,T!==jl&&(F=T[0],N=T[1],H=T[2],q=T[3],u=Z=T[4],f=X=T[5],T.length===6?(h=Math.sqrt(F*F+N*N),_=Math.sqrt(q*q+H*H),g=F||N?jo(N,F)*io:0,y=H||q?jo(H,q)*io+g:0,y&&(_*=Math.abs(Math.cos(y*pa))),i.svg&&(u-=E-(E*F+w*H),f-=w-(E*N+w*q))):(je=T[6],Ve=T[7],O=T[8],pe=T[9],Oe=T[10],qe=T[11],u=T[12],f=T[13],d=T[14],L=jo(je,Oe),m=L*io,L&&(v=Math.cos(-L),S=Math.sin(-L),G=Z*v+O*S,j=X*v+pe*S,he=je*v+Oe*S,O=Z*-S+O*v,pe=X*-S+pe*v,Oe=je*-S+Oe*v,qe=Ve*-S+qe*v,Z=G,X=j,je=he),L=jo(-H,Oe),p=L*io,L&&(v=Math.cos(-L),S=Math.sin(-L),G=F*v-O*S,j=N*v-pe*S,he=H*v-Oe*S,qe=q*S+qe*v,F=G,N=j,H=he),L=jo(N,F),g=L*io,L&&(v=Math.cos(L),S=Math.sin(L),G=F*v+N*S,j=Z*v+X*S,N=N*v-F*S,X=X*v-Z*S,F=G,Z=j),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),h=tn(Math.sqrt(F*F+N*N+H*H)),_=tn(Math.sqrt(X*X+je*je)),L=jo(Z,X),y=Math.abs(L)>2e-4?L*io:0,b=qe?1/(qe<0?-qe:qe):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ib(Fi(e,$t)),G&&e.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=tn(h),i.scaleY=tn(_),i.rotation=tn(g)+a,i.rotationX=tn(m)+a,i.rotationY=tn(p)+a,i.skewX=y+a,i.skewY=M+a,i.transformPerspective=b+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[yi]=Uu(c)),i.xOffset=i.yOffset=0,i.force3D=Oi.force3D,i.renderTransform=i.svg?q3:Qx?rb:X3,i.uncache=0,i},Uu=function(e){return(e=e.split(" "))[0]+" "+e[1]},cd=function(e,t,i){var r=Fn(t);return tn(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",r)))+r},X3=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rb(e,t)},Qs="0deg",Ya="0px",eo=") ",rb=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,d=i.skewX,h=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,M=i.zOrigin,b="",E=p==="auto"&&e&&e!==1||p===!0;if(M&&(f!==Qs||u!==Qs)){var w=parseFloat(u)*pa,T=Math.sin(w),L=Math.cos(w),v;w=parseFloat(f)*pa,v=Math.cos(w),o=cd(y,o,T*v*-M),a=cd(y,a,-Math.sin(w)*-M),l=cd(y,l,L*v*-M+M)}m!==Ya&&(b+="perspective("+m+eo),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||o!==Ya||a!==Ya||l!==Ya)&&(b+=l!==Ya||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+eo),c!==Qs&&(b+="rotate("+c+eo),u!==Qs&&(b+="rotateY("+u+eo),f!==Qs&&(b+="rotateX("+f+eo),(d!==Qs||h!==Qs)&&(b+="skew("+d+", "+h+eo),(_!==1||g!==1)&&(b+="scale("+_+", "+g+eo),y.style[$t]=b||"translate(0, 0)"},q3=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,d=i.scaleY,h=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,M=parseFloat(o),b=parseFloat(a),E,w,T,L,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pa,c*=pa,E=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-d,L=Math.cos(l-c)*d,c&&(u*=pa,v=Math.tan(c-u),v=Math.sqrt(1+v*v),T*=v,L*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),E*=v,w*=v)),E=tn(E),w=tn(w),T=tn(T),L=tn(L)):(E=f,L=d,w=T=0),(M&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(M=Bs(h,"x",o,"px"),b=Bs(h,"y",a,"px")),(_||g||m||p)&&(M=tn(M+_-(_*E+g*T)+m),b=tn(b+g-(_*w+g*L)+p)),(r||s)&&(v=h.getBBox(),M=tn(M+r/100*v.width),b=tn(b+s/100*v.height)),v="matrix("+E+","+w+","+T+","+L+","+M+","+b+")",h.setAttribute("transform",v),y&&(h.style[$t]=v)},Y3=function(e,t,i,r,s){var o=360,a=Tn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?io:1),c=l-r,u=r+c+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*bg)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*bg)%o-~~(c/o)*o)),e._pt=d=new bi(e._pt,t,i,r,c,R3),d.e=u,d.u="deg",e._props.push(i),d},Ag=function(e,t){for(var i in t)e[i]=t[i];return e},$3=function(e,t,i){var r=Ag({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,d,h,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[$t]=t,a=Kl(i,1),Os(i,$t),i.setAttribute("transform",c)):(c=getComputedStyle(i)[$t],o[$t]=t,a=Kl(i,1),o[$t]=c);for(l in as)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(h=Fn(c),_=Fn(u),f=h!==_?Bs(i,l,c,_):parseFloat(c),d=parseFloat(u),e._pt=new bi(e._pt,a,l,f,d-f,zh),e._pt.u=_||0,e._props.push(l));Ag(a,r)};xi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Nu[e>1?"border"+n:n]=function(a,l,c,u,f){var d,h;if(arguments.length<4)return d=o.map(function(_){return Wr(a,_,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},o.forEach(function(_,g){return h[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,h,f)}});var sb={name:"css",register:Hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,d,h,_,g,m,p,y,M,b,E,w,T,L,v;Zp||Hh(),this.styles=this.styles||Jx(e),L=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Pi[g]&&Vx(g,t,i,r,e,s)))){if(h=typeof u,_=Nu[g],h==="function"&&(u=u.call(i,r,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=ql(u)),_)_(this,e,g,u,i)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ds.lastIndex=0,Ds.test(c)||(m=Fn(c),p=Fn(u),p?m!==p&&(c=Bs(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,r,s,0,0,g),o.push(g),L.push(g,0,a[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Tn(c)&&~c.indexOf("random(")&&(c=ql(c)),Fn(c+"")||c==="auto"||(c+=Oi.units[g]||Fn(Wr(e,g))||""),(c+"").charAt(1)==="="&&(c=Wr(e,g))):c=Wr(e,g),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in Mr&&(g==="autoAlpha"&&(d===1&&Wr(e,"visibility")==="hidden"&&f&&(d=0),L.push("visibility",0,a.visibility),ws(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Mr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in as,M){if(this.styles.save(g),v=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Fi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=Fi(e,"perspective"),S?e.style.perspective=S:Os(e,"perspective")}f=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!t.parseTransform||Kl(e,t.parseTransform),w=t.smoothOrigin!==!1&&E.smooth,b=this._pt=new bi(this._pt,a,$t,0,1,E.renderTransform,E,0,-1),b.dep=1),g==="scale")this._pt=new bi(this._pt,E,"scaleY",E.scaleY,(y?da(E.scaleY,y+f):f)-E.scaleY||0,zh),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(yi,0,a[yi]),u=G3(u),E.svg?Gh(e,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==E.zOrigin&&ws(this,E,"zOrigin",E.zOrigin,p),ws(this,a,g,Uu(c),Uu(u)));continue}else if(g==="svgOrigin"){Gh(e,u,1,w,0,this);continue}else if(g in nb){Y3(this,E,g,d,y?da(d,y+u):u);continue}else if(g==="smoothOrigin"){ws(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){$3(this,u,e);continue}}else g in a||(g=Da(g)||g);if(M||(f||f===0)&&(d||d===0)&&!C3.test(u)&&g in a)m=(c+"").substr((d+"").length),f||(f=0),p=Fn(u)||(g in Oi.units?Oi.units[g]:m),m!==p&&(d=Bs(e,g,c,p)),this._pt=new bi(this._pt,M?E:a,g,d,(y?da(d,y+f):f)-d,!M&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?I3:zh),this._pt.u=p||0,M&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=D3):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=P3);else if(g in a)H3.call(this,e,g,c,y?y+u:u);else if(g in e)this.add(e,g,c||e[g],y?y+u:u,r,s);else if(g!=="parseTransform"){Vp(g,u);continue}M||(g in a?L.push(g,0,a[g]):typeof e[g]=="function"?L.push(g,2,e[g]()):L.push(g,1,c||e[g])),o.push(g)}}T&&Yx(this)},render:function(e,t){if(t.tween._time||!Jp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Wr,aliases:Mr,getSetter:function(e,t,i){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in as&&t!==yi&&(e._gsap.x||Wr(e,"x"))?i&&xg===i?t==="scale"?F3:U3:(xg=i||{})&&(t==="scale"?O3:B3):e.style&&!Bp(e.style[t])?L3:~t.indexOf("-")?N3:jp(e,t)},core:{_removeProperty:Os,_getMatrix:em}};Si.utils.checkPrefix=Da;Si.core.getStyleSaver=Jx;(function(n,e,t,i){var r=xi(n+","+e+","+t,function(s){as[s]=1});xi(e,function(s){Oi.units[s]="deg",nb[s]=1}),Mr[r[13]]=n+","+e,xi(i,function(s){var o=s.split(":");Mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Oi.units[n]="px"});Si.registerPlugin(sb);var un=Si.registerPlugin(sb)||Si;un.core.Tween;const j3={class:"fixed inset-0 z-50 bg-black flex items-center justify-center"},K3={class:"relative z-10 text-center"},Z3={class:"text-cyan-400/80 text-sm tracking-widest uppercase animate-pulse"},J3={class:"flex justify-center gap-2 mt-6"},Q3={__name:"LoadingScreen",props:{duration:{type:Number,default:3e3}},emits:["complete"],setup(n,{emit:e}){const t=pt(null),i=pt(0),r=pt(!1);let s,o,a,l,c,u,f;const d=e,h=n,_=()=>{const b=new Gl(2,64,64),E=new Cn({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float rim = 1.0 - max(dot(viewDir, vNormal), 0.0);
        rim = pow(rim, 4.0);
        
        vec3 rimColor = vec3(0.0, 0.8, 1.0) * rim * 0.5;
        
        gl_FragColor = vec4(rimColor, 1.0);
      }
    `});c=new _i(b,E),s.add(c)},g=()=>{const b=new Up(3,8,128,32),E=new Cn({uniforms:{uTime:{value:0},uProgress:{value:0}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uProgress;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        float dist = length(vPosition.xy);
        float normalizedDist = (dist - 3.0) / 5.0;
        
        float angle = atan(vPosition.y, vPosition.x);
        float spiral = sin(angle * 4.0 - uTime * 3.0 + normalizedDist * 8.0) * 0.5 + 0.5;
        
        // Color gradient
        vec3 innerColor = vec3(1.0, 0.9, 0.8);
        vec3 outerColor = vec3(1.0, 0.3, 0.1);
        vec3 color = mix(innerColor, outerColor, normalizedDist);
        
        // Loading progress effect - disk fills as it loads
        float progressAngle = uProgress * 3.14159 * 2.0 - 3.14159;
        float angleMask = smoothstep(progressAngle - 0.5, progressAngle, angle);
        
        float alpha = spiral * smoothstep(0.0, 0.1, normalizedDist) * smoothstep(1.0, 0.8, normalizedDist);
        alpha *= 0.8;
        
        gl_FragColor = vec4(color * (1.0 + spiral * 0.5), alpha);
      }
    `,transparent:!0,blending:To,side:sr,depthWrite:!1});u=new _i(b,E),u.rotation.x=Math.PI*.35,s.add(u)},m=()=>{const E=new ai,w=new Float32Array(500*3),T=new Float32Array(500);for(let v=0;v<500;v++){const S=Math.random()*Math.PI*2,F=10+Math.random()*20;w[v*3]=Math.cos(S)*F,w[v*3+1]=(Math.random()-.5)*5,w[v*3+2]=Math.sin(S)*F,T[v]=.5+Math.random()*1.5}E.setAttribute("position",new Vn(w,3)),E.setAttribute("velocity",new Vn(T,1));const L=new Cn({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float velocity;
      uniform float uTime;
      uniform float uPixelRatio;
      varying float vAlpha;
      
      void main() {
        vec3 pos = position;
        
        // Spiral inward
        float angle = atan(pos.z, pos.x);
        float dist = length(pos.xz);
        float newDist = max(2.0, dist - uTime * velocity * 2.0);
        float newAngle = angle + uTime * velocity * 0.5;
        
        pos.x = cos(newAngle) * newDist;
        pos.z = sin(newAngle) * newDist;
        pos.y *= (newDist / dist);
        
        vAlpha = smoothstep(2.0, 5.0, newDist);
        
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 2.0 * uPixelRatio * (50.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vAlpha;
      
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        vec3 color = vec3(1.0, 0.6, 0.3);
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,blending:To,depthWrite:!1});f=new Np(E,L),s.add(f)},p=()=>{s=new Lp,o=new mi(60,t.value.clientWidth/t.value.clientHeight,.1,100),o.position.z=15,o.position.y=5,o.lookAt(0,0,0),a=new Fp({antialias:!0,alpha:!0}),a.setSize(t.value.clientWidth,t.value.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.value.appendChild(a.domElement),_(),g(),m(),un.to(i,{value:1,duration:h.duration/1e3,ease:"power2.inOut",onComplete:()=>{r.value=!0,un.to(o.position,{z:0,y:0,duration:1,ease:"power2.in",onComplete:()=>{d("complete")}})}})},y=()=>{l=requestAnimationFrame(y);const b=performance.now()*.001;c&&(c.material.uniforms.uTime.value=b,c.rotation.y+=.005),u&&(u.material.uniforms.uTime.value=b,u.material.uniforms.uProgress.value=i.value),f&&(f.material.uniforms.uTime.value=b*.3),o.position.x=Math.sin(b*.2)*.5,o.lookAt(0,0,0),a.render(s,o)},M=()=>{t.value&&(o.aspect=t.value.clientWidth/t.value.clientHeight,o.updateProjectionMatrix(),a.setSize(t.value.clientWidth,t.value.clientHeight))};return dr(()=>{p(),y(),window.addEventListener("resize",M)}),tc(()=>{cancelAnimationFrame(l),window.removeEventListener("resize",M),c&&(c.geometry.dispose(),c.material.dispose()),u&&(u.geometry.dispose(),u.material.dispose()),f&&(f.geometry.dispose(),f.material.dispose()),a&&(a.dispose(),a.forceContextLoss(),a.domElement=null,t.value?.removeChild(a.domElement)),s=null,o=null,a=null}),(b,E)=>(ke(),We("div",j3,[D("div",{ref_key:"containerRef",ref:t,class:"absolute inset-0"},null,512),D("div",K3,[E[0]||(E[0]=D("h1",{class:"text-4xl md:text-6xl font-bold text-white mb-8 tracking-wider"},[D("span",{class:"bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"}," ENTERING INTO TIISETSO'S UNIVERSE ")],-1)),D("p",Z3,dt(r.value?"Initializing...":"Loading Portfolio"),1),D("div",J3,[(ke(),We(Dt,null,Bn(5,w=>D("div",{key:w,class:"h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-300",style:Ql({width:i.value>(w-1)*.2?"24px":"8px",opacity:i.value>(w-1)*.2?1:.3})},null,4)),64))])])]))}},ud="/Chatbot_Logo.png",Ua=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},eR={class:"bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 p-4 border-b border-cyan-500/20"},tR={class:"flex items-center justify-between mb-3"},nR={class:"flex items-center gap-3"},iR={class:"flex items-center gap-2"},rR={class:"flex items-center gap-2"},sR=["title"],oR={key:0,xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},aR={key:1,xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},lR={key:0,class:"mb-3 p-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl border border-purple-500/20"},cR={class:"flex gap-2"},uR={key:0,class:"flex items-start gap-2 mb-1"},fR={class:"text-xs text-gray-500"},dR={class:"whitespace-pre-wrap leading-relaxed"},hR={key:1,class:"mt-2 pt-2 border-t border-slate-600/50"},pR={class:"flex flex-wrap gap-1"},mR={key:2,class:"text-right mt-1"},gR={class:"text-xs text-cyan-200/70"},_R={key:0,class:"flex justify-start"},vR={class:"bg-slate-800/80 rounded-2xl rounded-bl-md px-4 py-3 border border-slate-700/50"},xR={class:"flex items-center gap-2"},bR={class:"text-lg"},yR={key:0,class:"px-4 pb-2"},SR={class:"flex flex-wrap gap-2"},MR=["onClick"],ER={class:"p-4 border-t border-cyan-500/20 bg-slate-800/50"},TR={class:"flex gap-2"},wR=["placeholder","disabled"],AR=["disabled"],CR={__name:"ChatBot",setup(n){const e=pt(!1),t=pt(!1),i=pt("professional"),r=pt(""),s=pt([]),o=pt(!1),a=pt(null),l=pt(!1),c="https://tiisetso-khumalo-portfolio.onrender.com",u=()=>{e.value=!e.value,e.value&&s.value.length===0&&_(h())},f=()=>{t.value=!t.value},d=()=>{l.value=!l.value},h=()=>i.value==="professional"?"👋 Hi there! I'm Tii's AI Assistant. Ask me anything about Tiisetso's professional experience, skills, projects, or qualifications!":"🚀 Welcome to the Space Tutorial! I can explain how the BlackHole, Starfield, Wormhole, and other Three.js effects were created. What would you like to learn?",_=(w,T=[])=>{s.value.push({id:Date.now(),role:"bot",content:w,sources:T,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),m()},g=w=>{s.value.push({id:Date.now(),role:"user",content:w,timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),m()},m=async()=>{await dp(),a.value&&(a.value.scrollTop=a.value.scrollHeight)},p=async()=>{if(!r.value.trim()||o.value)return;const w=r.value.trim();r.value="",g(w),o.value=!0;try{const T=s.value.slice(-6).map(S=>({role:S.role==="user"?"user":"assistant",content:S.content})),L=await fetch(`${c}/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:w,mode:i.value,history:T})});if(!L.ok)throw new Error("Failed to get response");const v=await L.json();_(v.answer,v.sources||[])}catch(T){console.error("Chat error:",T),_("Oops! I'm having trouble connecting. Please make sure the backend server is running.")}finally{o.value=!1}},y=w=>{i.value!==w&&(i.value=w,s.value=[],_(h()))},M=w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),p())},b={professional:["What are Tiisetso's main skills?","Tell me about her work experience","What projects has she worked on?"],tutorial:["How does the BlackHole effect work?","Explain the Starfield animation","How is the Wormhole created?"]},E=w=>{r.value=w,p()};return(w,T)=>(ke(),We(Dt,null,[e.value?mn("",!0):(ke(),We("button",{key:0,onClick:u,class:"fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 group","aria-label":"Open chat"},[...T[3]||(T[3]=[D("img",{src:ud,alt:"Chat",class:"w-10 h-10 rounded-full object-cover group-hover:animate-bounce"},null,-1),D("span",{class:"absolute inset-0 rounded-full bg-cyan-400/30 animate-ping"},null,-1)])])),Nt(Ol,{name:"chat"},{default:Eo(()=>[e.value?(ke(),We("div",{key:0,class:gt(["fixed z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden transition-all duration-300",t.value?"bottom-4 right-4 left-4 top-4 md:left-auto md:top-auto md:bottom-6 md:right-6 md:w-[600px] md:h-[700px]":"bottom-6 right-6 w-[380px] h-[550px]"])},[D("div",eR,[D("div",tR,[D("div",nR,[T[7]||(T[7]=D("div",{class:"w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5"},[D("img",{src:ud,alt:"Tii's AI",class:"w-full h-full rounded-full object-cover"})],-1)),D("div",null,[T[6]||(T[6]=D("h3",{class:"text-white font-bold text-sm"},"Tii's AI Assistant",-1)),D("div",iR,[T[4]||(T[4]=D("span",{class:"w-2 h-2 bg-green-400 rounded-full animate-pulse"},null,-1)),T[5]||(T[5]=D("span",{class:"text-green-400 text-xs"},"Online",-1)),D("button",{onClick:d,class:gt(["w-5 h-5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all text-xs font-bold",{"bg-cyan-500/40 ring-1 ring-cyan-400":l.value}]),title:"About this chatbot"}," ? ",2)])])]),D("div",rR,[D("button",{onClick:f,class:"w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors",title:t.value?"Collapse":"Expand"},[t.value?(ke(),We("svg",aR,[...T[9]||(T[9]=[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"},null,-1)])])):(ke(),We("svg",oR,[...T[8]||(T[8]=[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},null,-1)])]))],8,sR),D("button",{onClick:u,class:"w-8 h-8 rounded-lg bg-slate-700/50 hover:bg-red-500/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"},[...T[10]||(T[10]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])]),Nt(Ol,{name:"slide"},{default:Eo(()=>[l.value?(ke(),We("div",lR,[...T[11]||(T[11]=[D("div",{class:"flex items-start gap-2"},[D("span",{class:"text-lg"},"💡"),D("p",{class:"text-gray-300 text-xs leading-relaxed"},[pi(" This chatbot is a "),D("span",{class:"text-cyan-400 font-medium"},"portfolio-specific AI assistant"),pi(" with two modes: one for my experience, projects, and Build Log, and one for the interactive space visuals. It uses "),D("span",{class:"text-purple-400"},"OpenAI"),pi(" for responses and a "),D("span",{class:"text-purple-400"},"Supabase-backed knowledge store"),pi(" for retrieval, with local fallback when needed. Ask about my work, the content system, or how the visuals were built. ")])],-1)])])):mn("",!0)]),_:1}),T[14]||(T[14]=D("div",{class:"text-center mb-3"},[D("p",{class:"text-cyan-300 text-xs leading-relaxed"},[pi(" Get to know more about "),D("span",{class:"font-bold text-white"},"Tiisetso Khumalo"),pi(" 🎉😊 "),D("br"),D("span",{class:"text-purple-300"},"Learn about the space journey & Three.js magic! 🚀✨")])],-1)),D("div",cR,[D("button",{onClick:T[0]||(T[0]=L=>y("professional")),class:gt(["flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2",i.value==="professional"?"bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30":"bg-slate-700/50 text-gray-400 hover:text-white hover:bg-slate-600/50"])},[...T[12]||(T[12]=[D("span",null,"Professional",-1)])],2),D("button",{onClick:T[1]||(T[1]=L=>y("tutorial")),class:gt(["flex-1 py-2 px-3 rounded-xl text-xs font-medium transition-all duration-300 flex items-center justify-center gap-2",i.value==="tutorial"?"bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30":"bg-slate-700/50 text-gray-400 hover:text-white hover:bg-slate-600/50"])},[...T[13]||(T[13]=[D("span",null,"Space Tutorial",-1)])],2)])]),D("div",{ref_key:"chatContainerRef",ref:a,class:"flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent"},[(ke(!0),We(Dt,null,Bn(s.value,L=>(ke(),We("div",{key:L.id,class:gt(["flex",L.role==="user"?"justify-end":"justify-start"])},[D("div",{class:gt(["max-w-[85%] rounded-2xl px-4 py-3 text-sm",L.role==="user"?"bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-br-md":"bg-slate-800/80 text-gray-200 rounded-bl-md border border-slate-700/50"])},[L.role==="bot"?(ke(),We("div",uR,[T[15]||(T[15]=D("img",{src:ud,alt:"Bot",class:"w-5 h-5 rounded-full object-cover"},null,-1)),D("span",fR,dt(L.timestamp),1)])):mn("",!0),D("p",dR,dt(L.content),1),L.role==="bot"&&L.sources&&L.sources.length>0?(ke(),We("div",hR,[T[16]||(T[16]=D("p",{class:"text-xs text-gray-500 mb-1"},"Sources:",-1)),D("div",pR,[(ke(!0),We(Dt,null,Bn([...new Set(L.sources)],(v,S)=>(ke(),We("span",{key:S,class:"text-xs px-2 py-0.5 rounded-full bg-slate-700/50 text-cyan-400"},dt(v),1))),128))])])):mn("",!0),L.role==="user"?(ke(),We("div",mR,[D("span",gR,dt(L.timestamp),1)])):mn("",!0)],2)],2))),128)),o.value?(ke(),We("div",_R,[D("div",vR,[D("div",xR,[D("span",bR,dt(i.value==="professional"?"💼":"🚀"),1),T[17]||(T[17]=D("div",{class:"flex gap-1"},[D("span",{class:"w-2 h-2 bg-cyan-400 rounded-full animate-bounce",style:{"animation-delay":"0ms"}}),D("span",{class:"w-2 h-2 bg-purple-400 rounded-full animate-bounce",style:{"animation-delay":"150ms"}}),D("span",{class:"w-2 h-2 bg-pink-400 rounded-full animate-bounce",style:{"animation-delay":"300ms"}})],-1))])])])):mn("",!0)],512),s.value.length<=1?(ke(),We("div",yR,[T[18]||(T[18]=D("p",{class:"text-xs text-gray-500 mb-2"},"💡 Quick questions:",-1)),D("div",SR,[(ke(!0),We(Dt,null,Bn(b[i.value],(L,v)=>(ke(),We("button",{key:v,onClick:S=>E(L),class:"text-xs px-3 py-1.5 rounded-full bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white transition-colors border border-slate-600/30"},dt(L),9,MR))),128))])])):mn("",!0),D("div",ER,[D("div",TR,[vy(D("input",{"onUpdate:modelValue":T[2]||(T[2]=L=>r.value=L),onKeypress:M,placeholder:i.value==="professional"?"Ask about Tiisetso...":"Ask about Three.js effects...",disabled:o.value,class:"flex-1 bg-slate-700/50 border border-slate-600/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all disabled:opacity-50"},null,40,wR),[[$1,r.value]]),D("button",{onClick:p,disabled:!r.value.trim()||o.value,class:"w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"},[...T[19]||(T[19]=[D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})],-1)])],8,AR)])])],2)):mn("",!0)]),_:1})],64))}},RR=Ua(CR,[["__scopeId","data-v-52c54932"]]),PR={class:"app-container min-h-screen bg-[#0a0e1a] text-white overflow-x-hidden"},DR={__name:"App",setup(n){const e=pt(!0),t=pt(!1),i=()=>{e.value=!1,setTimeout(()=>{t.value=!0},300)};return dr(()=>{setTimeout(()=>{e.value&&i()},5e3)}),(r,s)=>(ke(),We(Dt,null,[Nt(Kr(yM)),D("div",PR,[Nt(Ol,{name:"loading-fade"},{default:Eo(()=>[e.value?(ke(),ml(Q3,{key:0,duration:3e3,onComplete:i})):mn("",!0)]),_:1}),Nt(Ol,{name:"content-fade"},{default:Eo(()=>[t.value?(ke(),ml(Kr(Mv),{key:0})):mn("",!0)]),_:1}),t.value?(ke(),ml(RR,{key:0})):mn("",!0)])],64))}},IR="modulepreload",LR=function(n){return"/"+n},Cg={},Rg=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(t.map(c=>{if(c=LR(c),c in Cg)return;Cg[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":IR,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((h,_)=>{d.addEventListener("load",h),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},NR={__name:"Starfield",props:{starCount:{type:Number,default:5e3},speed:{type:Number,default:.5},depth:{type:Number,default:1e3}},emits:["ready"],setup(n,{expose:e,emit:t}){const i=pt(null);let r,s,o,a,l;const c=n,u=t,f=()=>{const g=new ai,m=new Float32Array(c.starCount*3),p=new Float32Array(c.starCount*3),y=new Float32Array(c.starCount);for(let b=0;b<c.starCount;b++){const E=b*3,w=Math.random()*c.depth+100,T=Math.random()*Math.PI*2,L=Math.acos(Math.random()*2-1);m[E]=w*Math.sin(L)*Math.cos(T),m[E+1]=w*Math.sin(L)*Math.sin(T),m[E+2]=w*Math.cos(L);const v=Math.random();v<.6?(p[E]=.8+Math.random()*.2,p[E+1]=.8+Math.random()*.2,p[E+2]=1):v<.8?(p[E]=1,p[E+1]=.9+Math.random()*.1,p[E+2]=.6+Math.random()*.2):(p[E]=1,p[E+1]=.5+Math.random()*.3,p[E+2]=.3+Math.random()*.2),y[b]=Math.random()*2+.5}g.setAttribute("position",new Vn(m,3)),g.setAttribute("color",new Vn(p,3)),g.setAttribute("size",new Vn(y,1));const M=new Cn({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:`
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      varying float vSize;
      uniform float uTime;
      uniform float uPixelRatio;
      
      void main() {
        vColor = color;
        vSize = size;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        
        // Twinkle effect
        float twinkle = sin(uTime * 2.0 + position.x * 0.01 + position.y * 0.01) * 0.5 + 0.5;
        
        gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z) * (0.5 + twinkle * 0.5);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vSize;
      
      void main() {
        // Circular star shape with glow
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        
        float intensity = 1.0 - (dist * 2.0);
        intensity = pow(intensity, 1.5);
        
        // Add glow
        float glow = exp(-dist * 4.0) * 0.5;
        
        gl_FragColor = vec4(vColor * (intensity + glow), intensity + glow);
      }
    `,transparent:!0,blending:To,depthWrite:!1});a=new Np(g,M),r.add(a)},d=()=>{r=new Lp,s=new mi(75,i.value.clientWidth/i.value.clientHeight,.1,2e3),s.position.z=0,o=new Fp({antialias:!0,alpha:!0,powerPreference:"high-performance"}),o.setSize(i.value.clientWidth,i.value.clientHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.value.appendChild(o.domElement),f(),u("ready",{scene:r,camera:s,renderer:o})},h=()=>{l=requestAnimationFrame(h),a&&(a.material.uniforms.uTime.value+=.01,a.rotation.y+=1e-4,a.rotation.x+=5e-5),o.render(r,s)},_=()=>{i.value&&(s.aspect=i.value.clientWidth/i.value.clientHeight,s.updateProjectionMatrix(),o.setSize(i.value.clientWidth,i.value.clientHeight))};return dr(()=>{d(),h(),window.addEventListener("resize",_)}),tc(()=>{if(cancelAnimationFrame(l),window.removeEventListener("resize",_),a&&(a.geometry.dispose(),a.material.dispose()),o){const g=o.domElement;o.dispose(),o.forceContextLoss(),o.domElement=null,g&&i.value?.contains(g)&&i.value.removeChild(g)}r=null,s=null,o=null,a=null}),e({scene:r,camera:s,renderer:o,stars:a}),(g,m)=>(ke(),We("div",{ref_key:"containerRef",ref:i,class:"absolute inset-0 w-full h-full"},null,512))}},UR={class:"absolute inset-0 w-full h-full"},FR={class:"relative z-20 mx-auto flex min-h-screen max-w-[1440px] items-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"},OR={class:"grid w-full items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(480px,1.05fr)] xl:gap-20"},BR={class:"flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between"},kR={class:"flex w-full max-w-[280px] flex-col gap-3"},zR="/TiisetsoKhumalo.jpg",VR="/documents/TIISETSO_KHUMALO_CV.pdf",HR={__name:"HeroSection",setup(n){const e=pt(null),t=pt(null),i=pt(null),r=pt(null),s=pt(null),o=pt(null),a=l=>{window.open(l,"_blank")};return dr(()=>{const l=un.timeline({defaults:{ease:"power3.out"}});un.to(o.value,{y:"100vh",duration:2,repeat:-1,ease:"none",opacity:.3}),l.fromTo(t.value,{opacity:0,y:50},{opacity:1,y:0,duration:1}).fromTo(i.value,{opacity:0,y:30},{opacity:1,y:0,duration:.8},"-=0.5").fromTo(r.value,{opacity:0,x:50,scale:.96},{opacity:1,x:0,scale:1,duration:1},"-=0.5").fromTo(s.value?.children||[],{opacity:0,y:20},{opacity:1,y:0,stagger:.15,duration:.6},"-=0.3"),un.to(".float-element",{y:-15,duration:2,repeat:-1,yoyo:!0,ease:"power1.inOut",stagger:.3}),un.to(".hero-orbit",{rotate:360,transformOrigin:"center center",duration:18,repeat:-1,ease:"none"})}),(l,c)=>(ke(),We("section",{ref_key:"heroRef",ref:e,class:"relative min-h-screen w-full overflow-hidden"},[D("div",UR,[Nt(NR,{"star-count":3e3,depth:800})]),c[13]||(c[13]=D("div",{class:"absolute inset-0 w-full h-full grid-background opacity-30"},null,-1)),D("div",{ref_key:"scanLineRef",ref:o,class:"absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none z-10",style:{top:"-10px"}},null,512),c[14]||(c[14]=ji('<div class="absolute top-20 left-10 float-element" data-v-27d97306><div class="w-20 h-20 border border-cyan-500/30 rotate-45 animate-pulse" data-v-27d97306></div></div><div class="absolute top-40 right-20 float-element" data-v-27d97306><div class="w-16 h-16 border-2 border-purple-500/40 rounded-full" data-v-27d97306></div></div><div class="absolute bottom-32 left-20 float-element" data-v-27d97306><div class="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm" data-v-27d97306></div></div><div class="absolute bottom-20 right-32 float-element" data-v-27d97306><svg class="w-24 h-24 text-cyan-500/20" viewBox="0 0 100 100" data-v-27d97306><polygon points="50,5 95,75 5,75" fill="none" stroke="currentColor" stroke-width="1" data-v-27d97306></polygon></svg></div><div class="absolute top-0 left-0 w-32 h-32" data-v-27d97306><div class="absolute top-4 left-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" data-v-27d97306></div><div class="absolute top-4 left-4 w-[2px] h-16 bg-gradient-to-b from-cyan-400 to-transparent" data-v-27d97306></div></div><div class="absolute top-0 right-0 w-32 h-32" data-v-27d97306><div class="absolute top-4 right-4 w-16 h-[2px] bg-gradient-to-l from-purple-400 to-transparent" data-v-27d97306></div><div class="absolute top-4 right-4 w-[2px] h-16 bg-gradient-to-b from-purple-400 to-transparent" data-v-27d97306></div></div><div class="absolute bottom-0 left-0 w-32 h-32" data-v-27d97306><div class="absolute bottom-4 left-4 w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent" data-v-27d97306></div><div class="absolute bottom-4 left-4 w-[2px] h-16 bg-gradient-to-t from-cyan-400 to-transparent" data-v-27d97306></div></div><div class="absolute bottom-0 right-0 w-32 h-32" data-v-27d97306><div class="absolute bottom-4 right-4 w-16 h-[2px] bg-gradient-to-l from-purple-400 to-transparent" data-v-27d97306></div><div class="absolute bottom-4 right-4 w-[2px] h-16 bg-gradient-to-t from-purple-400 to-transparent" data-v-27d97306></div></div>',8)),D("div",FR,[D("div",OR,[D("div",null,[D("div",{ref_key:"introRef",ref:t,class:"max-w-3xl"},[...c[1]||(c[1]=[ji('<div class="mb-12 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/65 px-4 py-2 backdrop-blur-md" data-v-27d97306><span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" data-v-27d97306></span><span class="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-300/80" data-v-27d97306>Johannesburg, South Africa</span></div><p class="mb-4 mt-12 pt-4 text-sm font-semibold uppercase tracking-[0.38em] text-cyan-300/70" data-v-27d97306>AI Developer • Engineer • Builder</p><h1 class="font-orbitron text-5xl font-bold tracking-[0.08em] text-white sm:text-6xl lg:text-7xl xl:text-8xl" data-v-27d97306><span class="bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-500 bg-clip-text text-transparent" data-v-27d97306>Tiisetso</span><br data-v-27d97306><span class="text-white" data-v-27d97306>Khumalo</span></h1><div class="mt-6 inline-flex flex-wrap items-center gap-4 rounded-full border border-cyan-500/25 bg-slate-950/55 px-5 py-4 backdrop-blur-sm" data-v-27d97306><div class="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-purple-500" data-v-27d97306></div><h2 class="text-lg font-light tracking-wide text-slate-100 sm:text-2xl lg:text-[1.7rem]" data-v-27d97306><span class="text-purple-300" data-v-27d97306>AI Developer</span><span class="mx-3 text-slate-600" data-v-27d97306>|</span><span class="text-sky-300" data-v-27d97306>AI Engineer</span></h2><div class="h-6 w-1 rounded-full bg-gradient-to-b from-purple-500 to-cyan-300" data-v-27d97306></div></div><p class="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl" data-v-27d97306> Building intelligent systems that bridge <span class="text-cyan-300" data-v-27d97306> cutting-edge AI </span> with <span class="text-purple-300" data-v-27d97306> real-world impact</span>, while documenting the projects, decisions, and lessons that shape my growth. </p>',5)])],512),D("div",{ref_key:"ctaPanelRef",ref:i,class:"mt-10 rounded-[2rem] border border-cyan-400/18 bg-slate-950/65 p-6 shadow-[0_0_60px_rgba(0,240,255,0.08)] backdrop-blur-md"},[D("div",BR,[c[4]||(c[4]=D("div",{class:"max-w-2xl"},[D("p",{class:"mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/70"},"Build Log"),D("h3",{class:"text-2xl font-semibold leading-tight text-white sm:text-3xl"},"Follow my journey through shipped work, project writeups, technical notes, and skill growth."),D("p",{class:"mt-3 text-sm leading-7 text-slate-300 sm:text-base"},"A clear view into how I learn, what I build, and how I’m deepening my work across AI, ML, IoT, and engineering.")],-1)),D("div",kR,[c[3]||(c[3]=D("a",{href:"/blog",class:"group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold"},[D("span",{class:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 transition-opacity group-hover:opacity-100"}),D("span",{class:"absolute inset-[1px] rounded-full bg-slate-900 transition-colors group-hover:bg-slate-800"}),D("span",{class:"relative z-10 text-white"},"Explore Build Log")],-1)),D("button",{onClick:c[0]||(c[0]=u=>a(VR)),class:"group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold"},[...c[2]||(c[2]=[D("span",{class:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-90 transition-opacity group-hover:opacity-100"},null,-1),D("span",{class:"absolute inset-[1px] rounded-full bg-slate-900 transition-colors group-hover:bg-slate-800"},null,-1),D("span",{class:"relative z-10 text-white"},"Download CV",-1)])])])])],512),D("div",{ref_key:"linksRef",ref:s,class:"mt-8 flex flex-wrap items-center align-middle gap-4"},[...c[5]||(c[5]=[ji('<a href="https://github.com/TiiCoder28" target="_blank" class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300" data-v-27d97306><svg class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" data-v-27d97306><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-27d97306></path></svg><span class="text-gray-300 group-hover:text-white transition-colors" data-v-27d97306>GitHub</span></a><a href="https://www.linkedin.com/in/tiisetso-khumalo-605725236/" target="_blank" class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300" data-v-27d97306><svg class="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24" data-v-27d97306><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-v-27d97306></path></svg><span class="text-gray-300 group-hover:text-white transition-colors" data-v-27d97306>LinkedIn</span></a><a href="mailto:tiisoh1998@gmail.com" class="group flex items-center gap-2 px-5 py-3 border border-gray-700 rounded-lg bg-gray-900/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300" data-v-27d97306><svg class="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-27d97306><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-v-27d97306></path></svg><span class="text-gray-300 group-hover:text-white transition-colors" data-v-27d97306>Email</span></a>',3)])],512)]),D("div",{ref_key:"imagePanelRef",ref:r,class:"relative mx-auto w-full max-w-[620px]"},[c[10]||(c[10]=D("div",{class:"absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,_rgba(0,240,255,0.18),_transparent_60%)] blur-3xl"},null,-1)),c[11]||(c[11]=D("div",{class:"absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/18"},null,-1)),c[12]||(c[12]=D("div",{class:"hero-orbit absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-purple-400/20"},null,-1)),D("div",{class:"relative overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-slate-950/75 p-5 shadow-[0_0_90px_rgba(0,240,255,0.08)] backdrop-blur-md"},[c[9]||(c[9]=D("div",{class:"absolute inset-0 bg-[linear-gradient(135deg,rgba(0,240,255,0.08),transparent_35%,rgba(168,85,247,0.08))]"},null,-1)),D("div",{class:"relative rounded-[2rem] border border-cyan-400/20 bg-slate-900/80 p-5"},[c[7]||(c[7]=D("div",{class:"absolute left-6 top-6 z-20 rounded-full border border-cyan-400/30 bg-slate-950/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200"},"Building in public",-1)),D("div",{class:"relative mx-auto mt-12 flex h-[440px] w-[320px] items-center justify-center rounded-[2rem] border border-cyan-300/35 bg-[radial-gradient(circle_at_top,_rgba(0,240,255,0.18),_rgba(15,23,42,0.96)_55%)] p-3 shadow-[0_0_60px_rgba(0,240,255,0.15)] sm:h-[520px] sm:w-[380px]"},[c[6]||(c[6]=D("div",{class:"absolute inset-0 rounded-[2rem] border-2 border-transparent bg-[linear-gradient(135deg,rgba(0,240,255,0.6),rgba(168,85,247,0.55))] opacity-70 blur-sm"},null,-1)),D("img",{src:zR,alt:"Portrait of Tiisetso Khumalo",class:"relative z-10 h-full w-full rounded-[1.6rem] object-cover object-center"})]),c[8]||(c[8]=ji('<div class="relative mt-6 grid gap-3 sm:grid-cols-3" data-v-27d97306><div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center" data-v-27d97306><p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70" data-v-27d97306>Focus</p><p class="mt-2 text-sm font-semibold text-white" data-v-27d97306>AI Systems</p></div><div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center" data-v-27d97306><p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70" data-v-27d97306>Now Learning</p><p class="mt-2 text-sm font-semibold text-white" data-v-27d97306>ML, IoT</p></div><div class="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-center" data-v-27d97306><p class="text-[11px] uppercase tracking-[0.28em] text-cyan-300/70" data-v-27d97306>Approach</p><p class="mt-2 text-sm font-semibold text-white" data-v-27d97306>Build + Reflect</p></div></div>',1))])])],512)])]),c[15]||(c[15]=D("div",{class:"absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e1a] pointer-events-none"},null,-1))],512))}},GR=Ua(HR,[["__scopeId","data-v-27d97306"]]);function WR(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function XR(n,e,t){return e&&WR(n.prototype,e),n}var An,du,Li,As,Cs,ma,ob,ro,bl,ab,jr,ir,lb,cb=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},ub=1,sa=[],ft=[],Rr=[],yl=Date.now,Wh=function(e,t){return t},qR=function(){var e=bl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ft),r.push.apply(r,Rr),ft=i,Rr=r,Wh=function(o,a){return t[o](a)}},Is=function(e,t){return~Rr.indexOf(e)&&Rr[Rr.indexOf(e)+1][t]},Sl=function(e){return!!~ab.indexOf(e)},qn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Wn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},kc="scrollLeft",zc="scrollTop",Xh=function(){return jr&&jr.isPressed||ft.cache++},Fu=function(e,t){var i=function r(s){if(s||s===0){ub&&(Li.history.scrollRestoration="manual");var o=jr&&jr.isPressed;s=r.v=Math.round(s)||(jr&&jr.iOS?1:0),e(s),r.cacheID=ft.cache,o&&Wh("ss",s)}else(t||ft.cache!==r.cacheID||Wh("ref"))&&(r.cacheID=ft.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},ii={s:kc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Fu(function(n){return arguments.length?Li.scrollTo(n,gn.sc()):Li.pageXOffset||As[kc]||Cs[kc]||ma[kc]||0})},gn={s:zc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ii,sc:Fu(function(n){return arguments.length?Li.scrollTo(ii.sc(),n):Li.pageYOffset||As[zc]||Cs[zc]||ma[zc]||0})},hi=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},YR=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ks=function(e,t){var i=t.s,r=t.sc;Sl(e)&&(e=As.scrollingElement||Cs);var s=ft.indexOf(e),o=r===gn.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||qn(e,"scroll",Xh);var a=ft[s+o],l=a||(ft[s+o]=Fu(Is(e,i),!0)||(Sl(e)?r:Fu(function(c){return arguments.length?e[i]=c:e[i]})));return l.target=e,a||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},qh=function(e,t,i){var r=e,s=e,o=yl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=yl();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(_){var g=a,m=s,p=yl();return(_||_===0)&&_!==r&&u(_),o===a||p-a>c?0:(r+(i?m:-m))/((i?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:d}},$a=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Pg=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},fb=function(){bl=An.core.globals().ScrollTrigger,bl&&bl.core&&qR()},db=function(e){return An=e||cb(),!du&&An&&typeof document<"u"&&document.body&&(Li=window,As=document,Cs=As.documentElement,ma=As.body,ab=[Li,As,Cs,ma],An.utils.clamp,lb=An.core.context||function(){},ro="onpointerenter"in ma?"pointer":"mouse",ob=rn.isTouch=Li.matchMedia&&Li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ir=rn.eventTypes=("ontouchstart"in Cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ub=0},500),fb(),du=1),du};ii.op=gn;ft.cache=0;var rn=(function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){du||db(An)||console.warn("Please gsap.registerPlugin(Observer)"),bl||fb();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,f=i.onStop,d=i.onStopDelay,h=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,p=i.onDragEnd,y=i.onDrag,M=i.onPress,b=i.onRelease,E=i.onRight,w=i.onLeft,T=i.onUp,L=i.onDown,v=i.onChangeX,S=i.onChangeY,F=i.onChange,N=i.onToggleX,H=i.onToggleY,q=i.onHover,Z=i.onHoverEnd,X=i.onMove,G=i.ignoreCheck,j=i.isNormalizer,he=i.onGestureStart,O=i.onGestureEnd,pe=i.onWheel,Oe=i.onEnable,Ve=i.onDisable,qe=i.onClick,je=i.scrollSpeed,oe=i.capture,k=i.allowClicks,re=i.lockAxis,ae=i.onLockAxis;this.target=a=hi(a)||Cs,this.vars=i,h&&(h=An.utils.toArray(h)),r=r||1e-9,s=s||0,_=_||1,je=je||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Li.getComputedStyle(ma).lineHeight)||22);var le,Ee,I,P,V,Q,J,U=this,R=0,de=0,ce=i.passive||!u&&i.passive!==!1,ne=ks(a,ii),ue=ks(a,gn),C=ne(),x=ue(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ir[0]==="pointerdown",K=Sl(a),ee=a.ownerDocument||As,Y=[0,0,0],Se=[0,0,0],ge=0,Pe=function(){return ge=yl()},Ce=function(ze,it){return(U.event=ze)&&h&&YR(ze.target,h)||it&&B&&ze.pointerType!=="touch"||G&&G(ze,it)},_e=function(){U._vx.reset(),U._vy.reset(),Ee.pause(),f&&f(U)},xe=function(){var ze=U.deltaX=Pg(Y),it=U.deltaY=Pg(Se),Ie=Math.abs(ze)>=r,Qe=Math.abs(it)>=r;F&&(Ie||Qe)&&F(U,ze,it,Y,Se),Ie&&(E&&U.deltaX>0&&E(U),w&&U.deltaX<0&&w(U),v&&v(U),N&&U.deltaX<0!=R<0&&N(U),R=U.deltaX,Y[0]=Y[1]=Y[2]=0),Qe&&(L&&U.deltaY>0&&L(U),T&&U.deltaY<0&&T(U),S&&S(U),H&&U.deltaY<0!=de<0&&H(U),de=U.deltaY,Se[0]=Se[1]=Se[2]=0),(P||I)&&(X&&X(U),I&&(m&&I===1&&m(U),y&&y(U),I=0),P=!1),Q&&!(Q=!1)&&ae&&ae(U),V&&(pe(U),V=!1),le=0},Te=function(ze,it,Ie){Y[Ie]+=ze,Se[Ie]+=it,U._vx.update(ze),U._vy.update(it),c?le||(le=requestAnimationFrame(xe)):xe()},De=function(ze,it){re&&!J&&(U.axis=J=Math.abs(ze)>Math.abs(it)?"x":"y",Q=!0),J!=="y"&&(Y[2]+=ze,U._vx.update(ze,!0)),J!=="x"&&(Se[2]+=it,U._vy.update(it,!0)),c?le||(le=requestAnimationFrame(xe)):xe()},be=function(ze){if(!Ce(ze,1)){ze=$a(ze,u);var it=ze.clientX,Ie=ze.clientY,Qe=it-U.x,Ge=Ie-U.y,et=U.isDragging;U.x=it,U.y=Ie,(et||(Qe||Ge)&&(Math.abs(U.startX-it)>=s||Math.abs(U.startY-Ie)>=s))&&(I||(I=et?2:1),et||(U.isDragging=!0),De(Qe,Ge))}},Ke=U.onPress=function(Ne){Ce(Ne,1)||Ne&&Ne.button||(U.axis=J=null,Ee.pause(),U.isPressed=!0,Ne=$a(Ne),R=de=0,U.startX=U.x=Ne.clientX,U.startY=U.y=Ne.clientY,U._vx.reset(),U._vy.reset(),qn(j?a:ee,ir[1],be,ce,!0),U.deltaX=U.deltaY=0,M&&M(U))},z=U.onRelease=function(Ne){if(!Ce(Ne,1)){Wn(j?a:ee,ir[1],be,!0);var ze=!isNaN(U.y-U.startY),it=U.isDragging,Ie=it&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Qe=$a(Ne);!Ie&&ze&&(U._vx.reset(),U._vy.reset(),u&&k&&An.delayedCall(.08,function(){if(yl()-ge>300&&!Ne.defaultPrevented){if(Ne.target.click)Ne.target.click();else if(ee.createEvent){var Ge=ee.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,Li,1,Qe.screenX,Qe.screenY,Qe.clientX,Qe.clientY,!1,!1,!1,!1,0,null),Ne.target.dispatchEvent(Ge)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&it&&!j&&Ee.restart(!0),I&&xe(),p&&it&&p(U),b&&b(U,Ie)}},we=function(ze){return ze.touches&&ze.touches.length>1&&(U.isGesturing=!0)&&he(ze,U.isDragging)},ve=function(){return(U.isGesturing=!1)||O(U)},Ae=function(ze){if(!Ce(ze)){var it=ne(),Ie=ue();Te((it-C)*je,(Ie-x)*je,1),C=it,x=Ie,f&&Ee.restart(!0)}},me=function(ze){if(!Ce(ze)){ze=$a(ze,u),pe&&(V=!0);var it=(ze.deltaMode===1?l:ze.deltaMode===2?Li.innerHeight:1)*_;Te(ze.deltaX*it,ze.deltaY*it,0),f&&!j&&Ee.restart(!0)}},fe=function(ze){if(!Ce(ze)){var it=ze.clientX,Ie=ze.clientY,Qe=it-U.x,Ge=Ie-U.y;U.x=it,U.y=Ie,P=!0,f&&Ee.restart(!0),(Qe||Ge)&&De(Qe,Ge)}},Me=function(ze){U.event=ze,q(U)},Xe=function(ze){U.event=ze,Z(U)},vt=function(ze){return Ce(ze)||$a(ze,u)&&qe(U)};Ee=U._dc=An.delayedCall(d||.25,_e).pause(),U.deltaX=U.deltaY=0,U._vx=qh(0,50,!0),U._vy=qh(0,50,!0),U.scrollX=ne,U.scrollY=ue,U.isDragging=U.isGesturing=U.isPressed=!1,lb(this),U.enable=function(Ne){return U.isEnabled||(qn(K?ee:a,"scroll",Xh),o.indexOf("scroll")>=0&&qn(K?ee:a,"scroll",Ae,ce,oe),o.indexOf("wheel")>=0&&qn(a,"wheel",me,ce,oe),(o.indexOf("touch")>=0&&ob||o.indexOf("pointer")>=0)&&(qn(a,ir[0],Ke,ce,oe),qn(ee,ir[2],z),qn(ee,ir[3],z),k&&qn(a,"click",Pe,!0,!0),qe&&qn(a,"click",vt),he&&qn(ee,"gesturestart",we),O&&qn(ee,"gestureend",ve),q&&qn(a,ro+"enter",Me),Z&&qn(a,ro+"leave",Xe),X&&qn(a,ro+"move",fe)),U.isEnabled=!0,U.isDragging=U.isGesturing=U.isPressed=P=I=!1,U._vx.reset(),U._vy.reset(),C=ne(),x=ue(),Ne&&Ne.type&&Ke(Ne),Oe&&Oe(U)),U},U.disable=function(){U.isEnabled&&(sa.filter(function(Ne){return Ne!==U&&Sl(Ne.target)}).length||Wn(K?ee:a,"scroll",Xh),U.isPressed&&(U._vx.reset(),U._vy.reset(),Wn(j?a:ee,ir[1],be,!0)),Wn(K?ee:a,"scroll",Ae,oe),Wn(a,"wheel",me,oe),Wn(a,ir[0],Ke,oe),Wn(ee,ir[2],z),Wn(ee,ir[3],z),Wn(a,"click",Pe,!0),Wn(a,"click",vt),Wn(ee,"gesturestart",we),Wn(ee,"gestureend",ve),Wn(a,ro+"enter",Me),Wn(a,ro+"leave",Xe),Wn(a,ro+"move",fe),U.isEnabled=U.isPressed=U.isDragging=!1,Ve&&Ve(U))},U.kill=U.revert=function(){U.disable();var Ne=sa.indexOf(U);Ne>=0&&sa.splice(Ne,1),jr===U&&(jr=0)},sa.push(U),j&&Sl(a)&&(jr=U),U.enable(g)},XR(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n})();rn.version="3.14.2";rn.create=function(n){return new rn(n)};rn.register=db;rn.getAll=function(){return sa.slice()};rn.getById=function(n){return sa.filter(function(e){return e.vars.id===n})[0]};cb()&&An.registerPlugin(rn);var Be,ta,ut,Vt,Di,Tt,tm,Ou,Zl,Ml,tl,Vc,Ln,af,Yh,Zn,Dg,Ig,na,hb,fd,pb,Kn,$h,mb,gb,_s,jh,nm,ga,im,El,Kh,dd,Hc=1,Nn=Date.now,hd=Nn(),Qi=0,nl=0,Lg=function(e,t,i){var r=Ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ng=function(e,t){return t&&(!Ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$R=function n(){return nl&&requestAnimationFrame(n)},Ug=function(){return af=1},Fg=function(){return af=0},_r=function(e){return e},il=function(e){return Math.round(e*1e5)/1e5||0},_b=function(){return typeof window<"u"},vb=function(){return Be||_b()&&(Be=window.gsap)&&Be.registerPlugin&&Be},Ao=function(e){return!!~tm.indexOf(e)},xb=function(e){return(e==="Height"?im:ut["inner"+e])||Di["client"+e]||Tt["client"+e]},bb=function(e){return Is(e,"getBoundingClientRect")||(Ao(e)?function(){return _u.width=ut.innerWidth,_u.height=im,_u}:function(){return Yr(e)})},jR=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Is(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?xb(s):e["client"+s])||0}},KR=function(e,t){return!t||~Rr.indexOf(e)?bb(e):function(){return _u}},Er=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Is(e,i))?o()-bb(e)()[s]:Ao(e)?(Di[i]||Tt[i])-xb(r):e[i]-e["offset"+r])},Gc=function(e,t){for(var i=0;i<na.length;i+=3)(!t||~t.indexOf(na[i+1]))&&e(na[i],na[i+1],na[i+2])},Ri=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},rl=function(e){return typeof e=="number"},so=function(e){return typeof e=="object"},ja=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},pd=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Ko=Math.abs,yb="left",Sb="top",rm="right",sm="bottom",yo="width",So="height",Tl="Right",wl="Left",Al="Top",Cl="Bottom",ln="padding",Xi="margin",Ia="Width",om="Height",pn="px",qi=function(e){return ut.getComputedStyle(e)},ZR=function(e){var t=qi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Og=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Yr=function(e,t){var i=t&&qi(e)[Yh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Be.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Bu=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},Mb=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},JR=function(e){return function(t){return Be.utils.snap(Mb(e),t)}},am=function(e){var t=Be.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},QR=function(e){return function(t,i){return am(Mb(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},Mn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},Sn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Bg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},qc={toggleActions:"play",anticipatePin:0},ku={top:0,left:0,center:.5,bottom:1,right:1},hu=function(e,t){if(Ri(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ku?ku[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yc=function(e,t,i,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,_=Vt.createElement("div"),g=Ao(i)||Is(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?Tt:i,y=e.indexOf("start")!==-1,M=y?c:u,b="border-color:"+M+";font-size:"+f+";color:"+M+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(b+=(r===gn?rm:sm)+":"+(o+parseFloat(d))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=b,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],pu(_,0,r,y),_},pu=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ia]=1,s["border"+a+Ia]=0,s[i.p]=t+"px",Be.set(e,s)},at=[],Zh={},Jl,kg=function(){return Nn()-Qi>34&&(Jl||(Jl=requestAnimationFrame(Qr)))},Zo=function(){(!Kn||!Kn.isPressed||Kn.startX>Tt.clientWidth)&&(ft.cache++,Kn?Jl||(Jl=requestAnimationFrame(Qr)):Qr(),Qi||Ro("scrollStart"),Qi=Nn())},md=function(){gb=ut.innerWidth,mb=ut.innerHeight},sl=function(e){ft.cache++,(e===!0||!Ln&&!pb&&!Vt.fullscreenElement&&!Vt.webkitFullscreenElement&&(!$h||gb!==ut.innerWidth||Math.abs(ut.innerHeight-mb)>ut.innerHeight*.25))&&Ou.restart(!0)},Co={},eP=[],Eb=function n(){return Sn(ot,"scrollEnd",n)||po(!0)},Ro=function(e){return Co[e]&&Co[e].map(function(t){return t()})||eP},Ci=[],Tb=function(e){for(var t=0;t<Ci.length;t+=5)(!e||Ci[t+4]&&Ci[t+4].query===e)&&(Ci[t].style.cssText=Ci[t+1],Ci[t].getBBox&&Ci[t].setAttribute("transform",Ci[t+2]||""),Ci[t+3].uncache=1)},wb=function(){return ft.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},lm=function(e,t){var i;for(Zn=0;Zn<at.length;Zn++)i=at[Zn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));El=!0,t&&Tb(t),t||Ro("revert")},Ab=function(e,t){ft.cache++,(t||!Jn)&&ft.forEach(function(i){return On(i)&&i.cacheID++&&(i.rec=0)}),Ri(e)&&(ut.history.scrollRestoration=nm=e)},Jn,Mo=0,zg,tP=function(){if(zg!==Mo){var e=zg=Mo;requestAnimationFrame(function(){return e===Mo&&po(!0)})}},Cb=function(){Tt.appendChild(ga),im=!Kn&&ga.offsetHeight||ut.innerHeight,Tt.removeChild(ga)},Vg=function(e){return Zl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},po=function(e,t){if(Di=Vt.documentElement,Tt=Vt.body,tm=[ut,Vt,Di,Tt],Qi&&!e&&!El){Mn(ot,"scrollEnd",Eb);return}Cb(),Jn=ot.isRefreshing=!0,El||wb();var i=Ro("refreshInit");hb&&ot.sort(),t||lm(),ft.forEach(function(r){On(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),at.slice(0).forEach(function(r){return r.refresh()}),El=!1,at.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Kh=1,Vg(!0),at.forEach(function(r){var s=Er(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Vg(!1),Kh=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ft.forEach(function(r){On(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Ab(nm,1),Ou.pause(),Mo++,Jn=2,Qr(2),at.forEach(function(r){return On(r.vars.onRefresh)&&r.vars.onRefresh(r)}),Jn=ot.isRefreshing=!1,Ro("refresh")},Jh=0,mu=1,Rl,Qr=function(e){if(e===2||!Jn&&!El){ot.isUpdating=!0,Rl&&Rl.update(0);var t=at.length,i=Nn(),r=i-hd>=50,s=t&&at[0].scroll();if(mu=Jh>s?-1:1,Jn||(Jh=s),r&&(Qi&&!af&&i-Qi>200&&(Qi=0,Ro("scrollEnd")),tl=hd,hd=i),mu<0){for(Zn=t;Zn-- >0;)at[Zn]&&at[Zn].update(0,r);mu=1}else for(Zn=0;Zn<t;Zn++)at[Zn]&&at[Zn].update(0,r);ot.isUpdating=!1}Jl=0},Qh=[yb,Sb,sm,rm,Xi+Cl,Xi+Tl,Xi+Al,Xi+wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gu=Qh.concat([yo,So,"boxSizing","max"+Ia,"max"+om,"position",Xi,ln,ln+Al,ln+Tl,ln+Cl,ln+wl]),nP=function(e,t,i){_a(i);var r=e._gsap;if(r.spacerIsNative)_a(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},gd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Qh.length,o=t.style,a=e.style,l;s--;)l=Qh[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[sm]=a[rm]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[yo]=Bu(e,ii)+pn,o[So]=Bu(e,gn)+pn,o[ln]=a[Xi]=a[Sb]=a[yb]="0",_a(r),a[yo]=a["max"+Ia]=i[yo],a[So]=a["max"+om]=i[So],a[ln]=i[ln],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iP=/([A-Z])/g,_a=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Be.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(iP,"-$1").toLowerCase())}},$c=function(e){for(var t=gu.length,i=e.style,r=[],s=0;s<t;s++)r.push(gu[s],i[gu[s]]);return r.t=e,r},rP=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},_u={left:0,top:0},Hg=function(e,t,i,r,s,o,a,l,c,u,f,d,h,_){On(e)&&(e=e(l)),Ri(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?hu("0"+e.substr(3),i):0));var g=h?h.time():0,m,p,y;if(h&&h.seek(0),isNaN(e)||(e=+e),rl(e))h&&(e=Be.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),a&&pu(a,i,r,!0);else{On(t)&&(t=t(l));var M=(e||"0").split(" "),b,E,w,T;y=hi(t,l)||Tt,b=Yr(y)||{},(!b||!b.left&&!b.top)&&qi(y).display==="none"&&(T=y.style.display,y.style.display="block",b=Yr(y),T?y.style.display=T:y.style.removeProperty("display")),E=hu(M[0],b[r.d]),w=hu(M[1]||"0",i),e=b[r.p]-c[r.p]-u+E+s-w,a&&pu(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var L=e+i,v=o._isStart;m="scroll"+r.d2,pu(o,L,r,v&&L>20||!v&&(f?Math.max(Tt[m],Di[m]):o.parentNode[m])<=L+1),f&&(c=Yr(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+pn))}return h&&y&&(m=Yr(y),h.seek(d),p=Yr(y),h._caScrollDist=m[r.p]-p[r.p],e=e/h._caScrollDist*d),h&&h.seek(g),h?e:Math.round(e)},sP=/(webkit|moz|length|cssText|inset)/i,Gg=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=qi(e);for(o in a)!+o&&!sP.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Be.core.getCache(e).uncache=1,t.appendChild(e)}},Rb=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},jc=function(e,t,i){var r={};r[t.p]="+="+i,Be.set(e,r)},Wg=function(e,t){var i=ks(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var d=o.tween,h=l.onComplete,_={};c=c||i();var g=Rb(i,c,function(){d.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&Qr()},l.onComplete=function(){o.tween=0,h&&h.call(d)},d=o.tween=Be.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Mn(e,"wheel",i.wheelHandler),ot.isTouch&&Mn(e,"touchmove",i.wheelHandler),s},ot=(function(){function n(t,i){ta||n.register(Be)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),jh(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nl){this.update=this.refresh=this.kill=_r;return}i=Og(Ri(i)||rl(i)||i.nodeType?{trigger:i}:i,qc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,M=s.once,b=s.snap,E=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,L=s.fastScrollEnd,v=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ii:gn,F=!f&&f!==0,N=hi(i.scroller||ut),H=Be.core.getCache(N),q=Ao(N),Z=("pinType"in i?i.pinType:Is(N,"pinType")||q&&"fixed")==="fixed",X=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],G=F&&i.toggleActions.split(" "),j="markers"in i?i.markers:qc.markers,he=q?0:parseFloat(qi(N)["border"+S.p2+Ia])||0,O=this,pe=i.onRefreshInit&&function(){return i.onRefreshInit(O)},Oe=jR(N,q,S),Ve=KR(N,q),qe=0,je=0,oe=0,k=ks(N,S),re,ae,le,Ee,I,P,V,Q,J,U,R,de,ce,ne,ue,C,x,B,K,ee,Y,Se,ge,Pe,Ce,_e,xe,Te,De,be,Ke,z,we,ve,Ae,me,fe,Me,Xe;if(O._startClamp=O._endClamp=!1,O._dir=S,m*=45,O.scroller=N,O.scroll=T?T.time.bind(T):k,Ee=k(),O.vars=i,r=r||i.animation,"refreshPriority"in i&&(hb=1,i.refreshPriority===-9999&&(Rl=O)),H.tweenScroll=H.tweenScroll||{top:Wg(N,gn),left:Wg(N,ii)},O.tweenTo=re=H.tweenScroll[S.p],O.scrubDuration=function(Ie){we=rl(Ie)&&Ie,we?z?z.duration(Ie):z=Be.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:we,paused:!0,onComplete:function(){return p&&p(O)}}):(z&&z.progress(1).kill(),z=0)},r&&(r.vars.lazy=!1,r._initted&&!O.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),O.animation=r.pause(),r.scrollTrigger=O,O.scrubDuration(f),be=0,l||(l=r.vars.id)),b&&((!so(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in Tt.style&&Be.set(q?[Tt,Di]:N,{scrollBehavior:"auto"}),ft.forEach(function(Ie){return On(Ie)&&Ie.target===(q?Vt.scrollingElement||Di:N)&&(Ie.smooth=!1)}),le=On(b.snapTo)?b.snapTo:b.snapTo==="labels"?JR(r):b.snapTo==="labelsDirectional"?QR(r):b.directional!==!1?function(Ie,Qe){return am(b.snapTo)(Ie,Nn()-je<500?0:Qe.direction)}:Be.utils.snap(b.snapTo),ve=b.duration||{min:.1,max:2},ve=so(ve)?Ml(ve.min,ve.max):Ml(ve,ve),Ae=Be.delayedCall(b.delay||we/2||.1,function(){var Ie=k(),Qe=Nn()-je<500,Ge=re.tween;if((Qe||Math.abs(O.getVelocity())<10)&&!Ge&&!af&&qe!==Ie){var et=(Ie-P)/ne,en=r&&!F?r.totalProgress():et,lt=Qe?0:(en-Ke)/(Nn()-tl)*1e3||0,Ct=Be.utils.clamp(-et,1-et,Ko(lt/2)*lt/.185),on=et+(b.inertia===!1?0:Ct),Wt,Ut,xt=b,li=xt.onStart,It=xt.onInterrupt,Pn=xt.onComplete;if(Wt=le(on,O),rl(Wt)||(Wt=on),Ut=Math.max(0,Math.round(P+Wt*ne)),Ie<=V&&Ie>=P&&Ut!==Ie){if(Ge&&!Ge._initted&&Ge.data<=Ko(Ut-Ie))return;b.inertia===!1&&(Ct=Wt-et),re(Ut,{duration:ve(Ko(Math.max(Ko(on-en),Ko(Wt-en))*.185/lt/.05||0)),ease:b.ease||"power3",data:Ko(Ut-Ie),onInterrupt:function(){return Ae.restart(!0)&&It&&It(O)},onComplete:function(){O.update(),qe=k(),r&&!F&&(z?z.resetTo("totalProgress",Wt,r._tTime/r._tDur):r.progress(Wt)),be=Ke=r&&!F?r.totalProgress():O.progress,y&&y(O),Pn&&Pn(O)}},Ie,Ct*ne,Ut-Ie-Ct*ne),li&&li(O,re.tween)}}else O.isActive&&qe!==Ie&&Ae.restart(!0)}).pause()),l&&(Zh[l]=O),d=O.trigger=hi(d||h!==!0&&h),Xe=d&&d._gsap&&d._gsap.stRevert,Xe&&(Xe=Xe(O)),h=h===!0?d:hi(h),Ri(a)&&(a={targets:d,className:a}),h&&(_===!1||_===Xi||(_=!_&&h.parentNode&&h.parentNode.style&&qi(h.parentNode).display==="flex"?!1:ln),O.pin=h,ae=Be.core.getCache(h),ae.spacer?ue=ae.pinState:(w&&(w=hi(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),ae.spacerIsNative=!!w,w&&(ae.spacerState=$c(w))),ae.spacer=B=w||Vt.createElement("div"),B.classList.add("pin-spacer"),l&&B.classList.add("pin-spacer-"+l),ae.pinState=ue=$c(h)),i.force3D!==!1&&Be.set(h,{force3D:!0}),O.spacer=B=ae.spacer,De=qi(h),Pe=De[_+S.os2],ee=Be.getProperty(h),Y=Be.quickSetter(h,S.a,pn),gd(h,B,De),x=$c(h)),j){de=so(j)?Og(j,Bg):Bg,U=Yc("scroller-start",l,N,S,de,0),R=Yc("scroller-end",l,N,S,de,0,U),K=U["offset"+S.op.d2];var vt=hi(Is(N,"content")||N);Q=this.markerStart=Yc("start",l,vt,S,de,K,0,T),J=this.markerEnd=Yc("end",l,vt,S,de,K,0,T),T&&(Me=Be.quickSetter([Q,J],S.a,pn)),!Z&&!(Rr.length&&Is(N,"fixedMarkers")===!0)&&(ZR(q?Tt:N),Be.set([U,R],{force3D:!0}),_e=Be.quickSetter(U,S.a,pn),Te=Be.quickSetter(R,S.a,pn))}if(T){var Ne=T.vars.onUpdate,ze=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){O.update(0,0,1),Ne&&Ne.apply(T,ze||[])})}if(O.previous=function(){return at[at.indexOf(O)-1]},O.next=function(){return at[at.indexOf(O)+1]},O.revert=function(Ie,Qe){if(!Qe)return O.kill(!0);var Ge=Ie!==!1||!O.enabled,et=Ln;Ge!==O.isReverted&&(Ge&&(me=Math.max(k(),O.scroll.rec||0),oe=O.progress,fe=r&&r.progress()),Q&&[Q,J,U,R].forEach(function(en){return en.style.display=Ge?"none":"block"}),Ge&&(Ln=O,O.update(Ge)),h&&(!E||!O.isActive)&&(Ge?nP(h,B,ue):gd(h,B,qi(h),Ce)),Ge||O.update(Ge),Ln=et,O.isReverted=Ge)},O.refresh=function(Ie,Qe,Ge,et){if(!((Ln||!O.enabled)&&!Qe)){if(h&&Ie&&Qi){Mn(n,"scrollEnd",Eb);return}!Jn&&pe&&pe(O),Ln=O,re.tween&&!Ge&&(re.tween.kill(),re.tween=0),z&&z.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Fe){return Fe.vars.immediateRender&&Fe.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var en=Oe(),lt=Ve(),Ct=T?T.duration():Er(N,S),on=ne<=.01||!ne,Wt=0,Ut=et||0,xt=so(Ge)?Ge.end:i.end,li=i.endTrigger||d,It=so(Ge)?Ge.start:i.start||(i.start===0||!d?0:h?"0 0":"0 100%"),Pn=O.pinnedContainer=i.pinnedContainer&&hi(i.pinnedContainer,O),Mi=d&&Math.max(0,at.indexOf(O))||0,fn=Mi,dn,xn,Ir,Io,bn,A,W,se,ie,$,ye,Ue,Re;for(j&&so(Ge)&&(Ue=Be.getProperty(U,S.p),Re=Be.getProperty(R,S.p));fn-- >0;)A=at[fn],A.end||A.refresh(0,1)||(Ln=O),W=A.pin,W&&(W===d||W===h||W===Pn)&&!A.isReverted&&($||($=[]),$.unshift(A),A.revert(!0,!0)),A!==at[fn]&&(Mi--,fn--);for(On(It)&&(It=It(O)),It=Lg(It,"start",O),P=Hg(It,d,en,S,k(),Q,U,O,lt,he,Z,Ct,T,O._startClamp&&"_startClamp")||(h?-.001:0),On(xt)&&(xt=xt(O)),Ri(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(Ri(It)?It.split(" ")[0]:"")+xt:(Wt=hu(xt.substr(2),en),xt=Ri(It)?It:(T?Be.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,P):P)+Wt,li=d)),xt=Lg(xt,"end",O),V=Math.max(P,Hg(xt||(li?"100% 0":Ct),li,en,S,k()+Wt,J,R,O,lt,he,Z,Ct,T,O._endClamp&&"_endClamp"))||-.001,Wt=0,fn=Mi;fn--;)A=at[fn]||{},W=A.pin,W&&A.start-A._pinPush<=P&&!T&&A.end>0&&(dn=A.end-(O._startClamp?Math.max(0,A.start):A.start),(W===d&&A.start-A._pinPush<P||W===Pn)&&isNaN(It)&&(Wt+=dn*(1-A.progress)),W===h&&(Ut+=dn));if(P+=Wt,V+=Wt,O._startClamp&&(O._startClamp+=Wt),O._endClamp&&!Jn&&(O._endClamp=V||-.001,V=Math.min(V,Er(N,S))),ne=V-P||(P-=.01)&&.001,on&&(oe=Be.utils.clamp(0,1,Be.utils.normalize(P,V,me))),O._pinPush=Ut,Q&&Wt&&(dn={},dn[S.a]="+="+Wt,Pn&&(dn[S.p]="-="+k()),Be.set([Q,J],dn)),h&&!(Kh&&O.end>=Er(N,S)))dn=qi(h),Io=S===gn,Ir=k(),Se=parseFloat(ee(S.a))+Ut,!Ct&&V>1&&(ye=(q?Vt.scrollingElement||Di:N).style,ye={style:ye,value:ye["overflow"+S.a.toUpperCase()]},q&&qi(Tt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ye.style["overflow"+S.a.toUpperCase()]="scroll")),gd(h,B,dn),x=$c(h),xn=Yr(h,!0),se=Z&&ks(N,Io?ii:gn)(),_?(Ce=[_+S.os2,ne+Ut+pn],Ce.t=B,fn=_===ln?Bu(h,S)+ne+Ut:0,fn&&(Ce.push(S.d,fn+pn),B.style.flexBasis!=="auto"&&(B.style.flexBasis=fn+pn)),_a(Ce),Pn&&at.forEach(function(Fe){Fe.pin===Pn&&Fe.vars.pinSpacing!==!1&&(Fe._subPinOffset=!0)}),Z&&k(me)):(fn=Bu(h,S),fn&&B.style.flexBasis!=="auto"&&(B.style.flexBasis=fn+pn)),Z&&(bn={top:xn.top+(Io?Ir-P:se)+pn,left:xn.left+(Io?se:Ir-P)+pn,boxSizing:"border-box",position:"fixed"},bn[yo]=bn["max"+Ia]=Math.ceil(xn.width)+pn,bn[So]=bn["max"+om]=Math.ceil(xn.height)+pn,bn[Xi]=bn[Xi+Al]=bn[Xi+Tl]=bn[Xi+Cl]=bn[Xi+wl]="0",bn[ln]=dn[ln],bn[ln+Al]=dn[ln+Al],bn[ln+Tl]=dn[ln+Tl],bn[ln+Cl]=dn[ln+Cl],bn[ln+wl]=dn[ln+wl],C=rP(ue,bn,E),Jn&&k(0)),r?(ie=r._initted,fd(1),r.render(r.duration(),!0,!0),ge=ee(S.a)-Se+ne+Ut,xe=Math.abs(ne-ge)>1,Z&&xe&&C.splice(C.length-2,2),r.render(0,!0,!0),ie||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),fd(0)):ge=ne,ye&&(ye.value?ye.style["overflow"+S.a.toUpperCase()]=ye.value:ye.style.removeProperty("overflow-"+S.a));else if(d&&k()&&!T)for(xn=d.parentNode;xn&&xn!==Tt;)xn._pinOffset&&(P-=xn._pinOffset,V-=xn._pinOffset),xn=xn.parentNode;$&&$.forEach(function(Fe){return Fe.revert(!1,!0)}),O.start=P,O.end=V,Ee=I=Jn?me:k(),!T&&!Jn&&(Ee<me&&k(me),O.scroll.rec=0),O.revert(!1,!0),je=Nn(),Ae&&(qe=-1,Ae.restart(!0)),Ln=0,r&&F&&(r._initted||fe)&&r.progress()!==fe&&r.progress(fe||0,!0).render(r.time(),!0,!0),(on||oe!==O.progress||T||g||r&&!r._initted)&&(r&&!F&&(r._initted||oe||r.vars.immediateRender!==!1)&&r.totalProgress(T&&P<-.001&&!oe?Be.utils.normalize(P,V,0):oe,!0),O.progress=on||(Ee-P)/ne===oe?0:oe),h&&_&&(B._pinOffset=Math.round(O.progress*ge)),z&&z.invalidate(),isNaN(Ue)||(Ue-=Be.getProperty(U,S.p),Re-=Be.getProperty(R,S.p),jc(U,S,Ue),jc(Q,S,Ue-(et||0)),jc(R,S,Re),jc(J,S,Re-(et||0))),on&&!Jn&&O.update(),u&&!Jn&&!ce&&(ce=!0,u(O),ce=!1)}},O.getVelocity=function(){return(k()-I)/(Nn()-tl)*1e3||0},O.endAnimation=function(){ja(O.callbackAnimation),r&&(z?z.progress(1):r.paused()?F||ja(r,O.direction<0,1):ja(r,r.reversed()))},O.labelToScroll=function(Ie){return r&&r.labels&&(P||O.refresh()||P)+r.labels[Ie]/r.duration()*ne||0},O.getTrailing=function(Ie){var Qe=at.indexOf(O),Ge=O.direction>0?at.slice(0,Qe).reverse():at.slice(Qe+1);return(Ri(Ie)?Ge.filter(function(et){return et.vars.preventOverlaps===Ie}):Ge).filter(function(et){return O.direction>0?et.end<=P:et.start>=V})},O.update=function(Ie,Qe,Ge){if(!(T&&!Ge&&!Ie)){var et=Jn===!0?me:O.scroll(),en=Ie?0:(et-P)/ne,lt=en<0?0:en>1?1:en||0,Ct=O.progress,on,Wt,Ut,xt,li,It,Pn,Mi;if(Qe&&(I=Ee,Ee=T?k():et,b&&(Ke=be,be=r&&!F?r.totalProgress():lt)),m&&h&&!Ln&&!Hc&&Qi&&(!lt&&P<et+(et-I)/(Nn()-tl)*m?lt=1e-4:lt===1&&V>et+(et-I)/(Nn()-tl)*m&&(lt=.9999)),lt!==Ct&&O.enabled){if(on=O.isActive=!!lt&&lt<1,Wt=!!Ct&&Ct<1,It=on!==Wt,li=It||!!lt!=!!Ct,O.direction=lt>Ct?1:-1,O.progress=lt,li&&!Ln&&(Ut=lt&&!Ct?0:lt===1?1:Ct===1?2:3,F&&(xt=!It&&G[Ut+1]!=="none"&&G[Ut+1]||G[Ut],Mi=r&&(xt==="complete"||xt==="reset"||xt in r))),v&&(It||Mi)&&(Mi||f||!r)&&(On(v)?v(O):O.getTrailing(v).forEach(function(Ir){return Ir.endAnimation()})),F||(z&&!Ln&&!Hc?(z._dp._time-z._start!==z._time&&z.render(z._dp._time-z._start),z.resetTo?z.resetTo("totalProgress",lt,r._tTime/r._tDur):(z.vars.totalProgress=lt,z.invalidate().restart())):r&&r.totalProgress(lt,!!(Ln&&(je||Ie)))),h){if(Ie&&_&&(B.style[_+S.os2]=Pe),!Z)Y(il(Se+ge*lt));else if(li){if(Pn=!Ie&&lt>Ct&&V+1>et&&et+1>=Er(N,S),E)if(!Ie&&(on||Pn)){var fn=Yr(h,!0),dn=et-P;Gg(h,Tt,fn.top+(S===gn?dn:0)+pn,fn.left+(S===gn?0:dn)+pn)}else Gg(h,B);_a(on||Pn?C:x),xe&&lt<1&&on||Y(Se+(lt===1&&!Pn?ge:0))}}b&&!re.tween&&!Ln&&!Hc&&Ae.restart(!0),a&&(It||M&&lt&&(lt<1||!dd))&&Zl(a.targets).forEach(function(Ir){return Ir.classList[on||M?"add":"remove"](a.className)}),o&&!F&&!Ie&&o(O),li&&!Ln?(F&&(Mi&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(O)),(It||!dd)&&(c&&It&&pd(O,c),X[Ut]&&pd(O,X[Ut]),M&&(lt===1?O.kill(!1,1):X[Ut]=0),It||(Ut=lt===1?1:3,X[Ut]&&pd(O,X[Ut]))),L&&!on&&Math.abs(O.getVelocity())>(rl(L)?L:2500)&&(ja(O.callbackAnimation),z?z.progress(1):ja(r,xt==="reverse"?1:!lt,1))):F&&o&&!Ln&&o(O)}if(Te){var xn=T?et/T.duration()*(T._caScrollDist||0):et;_e(xn+(U._isFlipped?1:0)),Te(xn)}Me&&Me(-et/T.duration()*(T._caScrollDist||0))}},O.enable=function(Ie,Qe){O.enabled||(O.enabled=!0,Mn(N,"resize",sl),q||Mn(N,"scroll",Zo),pe&&Mn(n,"refreshInit",pe),Ie!==!1&&(O.progress=oe=0,Ee=I=qe=k()),Qe!==!1&&O.refresh())},O.getTween=function(Ie){return Ie&&re?re.tween:z},O.setPositions=function(Ie,Qe,Ge,et){if(T){var en=T.scrollTrigger,lt=T.duration(),Ct=en.end-en.start;Ie=en.start+Ct*Ie/lt,Qe=en.start+Ct*Qe/lt}O.refresh(!1,!1,{start:Ng(Ie,Ge&&!!O._startClamp),end:Ng(Qe,Ge&&!!O._endClamp)},et),O.update()},O.adjustPinSpacing=function(Ie){if(Ce&&Ie){var Qe=Ce.indexOf(S.d)+1;Ce[Qe]=parseFloat(Ce[Qe])+Ie+pn,Ce[1]=parseFloat(Ce[1])+Ie+pn,_a(Ce)}},O.disable=function(Ie,Qe){if(Ie!==!1&&O.revert(!0,!0),O.enabled&&(O.enabled=O.isActive=!1,Qe||z&&z.pause(),me=0,ae&&(ae.uncache=1),pe&&Sn(n,"refreshInit",pe),Ae&&(Ae.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!q)){for(var Ge=at.length;Ge--;)if(at[Ge].scroller===N&&at[Ge]!==O)return;Sn(N,"resize",sl),q||Sn(N,"scroll",Zo)}},O.kill=function(Ie,Qe){O.disable(Ie,Qe),z&&!Qe&&z.kill(),l&&delete Zh[l];var Ge=at.indexOf(O);Ge>=0&&at.splice(Ge,1),Ge===Zn&&mu>0&&Zn--,Ge=0,at.forEach(function(et){return et.scroller===O.scroller&&(Ge=1)}),Ge||Jn||(O.scroll.rec=0),r&&(r.scrollTrigger=null,Ie&&r.revert({kill:!1}),Qe||r.kill()),Q&&[Q,J,U,R].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),Rl===O&&(Rl=0),h&&(ae&&(ae.uncache=1),Ge=0,at.forEach(function(et){return et.pin===h&&Ge++}),Ge||(ae.spacer=0)),i.onKill&&i.onKill(O)},at.push(O),O.enable(!1,!1),Xe&&Xe(O),r&&r.add&&!ne){var it=O.update;O.update=function(){O.update=it,ft.cache++,P||V||O.refresh()},Be.delayedCall(.01,O.update),ne=.01,P=V=0}else O.refresh();h&&tP()},n.register=function(i){return ta||(Be=i||vb(),_b()&&window.document&&n.enable(),ta=nl),ta},n.defaults=function(i){if(i)for(var r in i)qc[r]=i[r];return qc},n.disable=function(i,r){nl=0,at.forEach(function(o){return o[r?"kill":"disable"](i)}),Sn(ut,"wheel",Zo),Sn(Vt,"scroll",Zo),clearInterval(Vc),Sn(Vt,"touchcancel",_r),Sn(Tt,"touchstart",_r),Wc(Sn,Vt,"pointerdown,touchstart,mousedown",Ug),Wc(Sn,Vt,"pointerup,touchend,mouseup",Fg),Ou.kill(),Gc(Sn);for(var s=0;s<ft.length;s+=3)Xc(Sn,ft[s],ft[s+1]),Xc(Sn,ft[s],ft[s+2])},n.enable=function(){if(ut=window,Vt=document,Di=Vt.documentElement,Tt=Vt.body,Be&&(Zl=Be.utils.toArray,Ml=Be.utils.clamp,jh=Be.core.context||_r,fd=Be.core.suppressOverwrites||_r,nm=ut.history.scrollRestoration||"auto",Jh=ut.pageYOffset||0,Be.core.globals("ScrollTrigger",n),Tt)){nl=1,ga=document.createElement("div"),ga.style.height="100vh",ga.style.position="absolute",Cb(),$R(),rn.register(Be),n.isTouch=rn.isTouch,_s=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$h=rn.isTouch===1,Mn(ut,"wheel",Zo),tm=[ut,Vt,Di,Tt],Be.matchMedia?(n.matchMedia=function(c){var u=Be.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Be.addEventListener("matchMediaInit",function(){wb(),lm()}),Be.addEventListener("matchMediaRevert",function(){return Tb()}),Be.addEventListener("matchMedia",function(){po(0,1),Ro("matchMedia")}),Be.matchMedia().add("(orientation: portrait)",function(){return md(),md})):console.warn("Requires GSAP 3.11.0 or later"),md(),Mn(Vt,"scroll",Zo);var i=Tt.hasAttribute("style"),r=Tt.style,s=r.borderTopStyle,o=Be.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Yr(Tt),gn.m=Math.round(a.top+gn.sc())||0,ii.m=Math.round(a.left+ii.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),Vc=setInterval(kg,250),Be.delayedCall(.5,function(){return Hc=0}),Mn(Vt,"touchcancel",_r),Mn(Tt,"touchstart",_r),Wc(Mn,Vt,"pointerdown,touchstart,mousedown",Ug),Wc(Mn,Vt,"pointerup,touchend,mouseup",Fg),Yh=Be.utils.checkPrefix("transform"),gu.push(Yh),ta=Nn(),Ou=Be.delayedCall(.2,po).pause(),na=[Vt,"visibilitychange",function(){var c=ut.innerWidth,u=ut.innerHeight;Vt.hidden?(Dg=c,Ig=u):(Dg!==c||Ig!==u)&&sl()},Vt,"DOMContentLoaded",po,ut,"load",po,ut,"resize",sl],Gc(Mn),at.forEach(function(c){return c.enable(0,1)}),l=0;l<ft.length;l+=3)Xc(Sn,ft[l],ft[l+1]),Xc(Sn,ft[l],ft[l+2])}},n.config=function(i){"limitCallbacks"in i&&(dd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Vc)||(Vc=r)&&setInterval(kg,r),"ignoreMobileResize"in i&&($h=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Gc(Sn)||Gc(Mn,i.autoRefreshEvents||"none"),pb=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=hi(i),o=ft.indexOf(s),a=Ao(s);~o&&ft.splice(o,a?6:2),r&&(a?Rr.unshift(ut,r,Tt,r,Di,r):Rr.unshift(s,r))},n.clearMatchMedia=function(i){at.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(Ri(i)?hi(i):i).getBoundingClientRect(),a=o[s?yo:So]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},n.positionInViewport=function(i,r,s){Ri(i)&&(i=hi(i));var o=i.getBoundingClientRect(),a=o[s?yo:So],l=r==null?a/2:r in ku?ku[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ut.innerWidth:(o.top+l)/ut.innerHeight},n.killAll=function(i){if(at.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Co.killAll||[];Co={},r.forEach(function(s){return s()})}},n})();ot.version="3.14.2";ot.saveStyles=function(n){return n?Zl(n).forEach(function(e){if(e&&e.style){var t=Ci.indexOf(e);t>=0&&Ci.splice(t,5),Ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Be.core.getCache(e),jh())}}):Ci};ot.revert=function(n,e){return lm(!n,e)};ot.create=function(n,e){return new ot(n,e)};ot.refresh=function(n){return n?sl(!0):(ta||ot.register())&&po(!0)};ot.update=function(n){return++ft.cache&&Qr(n===!0?2:0)};ot.clearScrollMemory=Ab;ot.maxScroll=function(n,e){return Er(n,e?ii:gn)};ot.getScrollFunc=function(n,e){return ks(hi(n),e?ii:gn)};ot.getById=function(n){return Zh[n]};ot.getAll=function(){return at.filter(function(n){return n.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Qi};ot.snapDirectional=am;ot.addEventListener=function(n,e){var t=Co[n]||(Co[n]=[]);~t.indexOf(e)||t.push(e)};ot.removeEventListener=function(n,e){var t=Co[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};ot.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],d=[],h=Be.delayedCall(r,function(){u(f,d),f=[],d=[]}).pause();return function(_){f.length||h.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&h.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),Mn(ot,"refresh",function(){return s=e.batchMax()})),Zl(n).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,t.push(ot.create(c))}),t};var Xg=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},_d=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Di&&n(Tt,t)},Kc={auto:1,scroll:1},oP=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Be.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=qi(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Ao(s)&&(Kc[(l=qi(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Pb=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&oP,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&Mn(Vt,rn.eventTypes[0],Yg,!1,!0)},onDisable:function(){return Sn(Vt,rn.eventTypes[0],Yg,!0)}})},aP=/(input|label|select|textarea)/i,qg,Yg=function(e){var t=aP.test(e.target.tagName);(t||qg)&&(e._gsapAllow=!0,qg=t)},lP=function(e){so(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=hi(e.target)||Di,u=Be.core.globals().ScrollSmoother,f=u&&u.get(),d=_s&&(e.content&&hi(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=ks(c,gn),_=ks(c,ii),g=1,m=(rn.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,p=0,y=On(r)?function(){return r(a)}:function(){return r||2.8},M,b,E=Pb(c,e.type,!0,s),w=function(){return b=!1},T=_r,L=_r,v=function(){l=Er(c,gn),L=Ml(_s?1:0,l),i&&(T=Ml(0,Er(c,ii))),M=Mo},S=function(){d._gsap.y=il(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},F=function(){if(b){requestAnimationFrame(w);var j=il(a.deltaY/2),he=L(h.v-j);if(d&&he!==h.v+h.offset){h.offset=he-h.v;var O=il((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",d._gsap.y=O+"px",h.cacheID=ft.cache,Qr()}return!0}h.offset&&S(),b=!0},N,H,q,Z,X=function(){v(),N.isActive()&&N.vars.scrollY>l&&(h()>l?N.progress(1)&&h(l):N.resetTo("scrollY",l))};return d&&Be.set(d,{y:"+=0"}),e.ignoreCheck=function(G){return _s&&G.type==="touchmove"&&F()||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){b=!1;var G=g;g=il((ut.visualViewport&&ut.visualViewport.scale||1)/m),N.pause(),G!==g&&_d(c,g>1.01?!0:i?!1:"x"),H=_(),q=h(),v(),M=Mo},e.onRelease=e.onGestureStart=function(G,j){if(h.offset&&S(),!j)Z.restart(!0);else{ft.cache++;var he=y(),O,pe;i&&(O=_(),pe=O+he*.05*-G.velocityX/.227,he*=Xg(_,O,pe,Er(c,ii)),N.vars.scrollX=T(pe)),O=h(),pe=O+he*.05*-G.velocityY/.227,he*=Xg(h,O,pe,Er(c,gn)),N.vars.scrollY=L(pe),N.invalidate().duration(he).play(.01),(_s&&N.vars.scrollY>=l||O>=l-1)&&Be.to({},{onUpdate:X,duration:he})}o&&o(G)},e.onWheel=function(){N._ts&&N.pause(),Nn()-p>1e3&&(M=0,p=Nn())},e.onChange=function(G,j,he,O,pe){if(Mo!==M&&v(),j&&i&&_(T(O[2]===j?H+(G.startX-G.x):_()+j-O[1])),he){h.offset&&S();var Oe=pe[2]===he,Ve=Oe?q+G.startY-G.y:h()+he-pe[1],qe=L(Ve);Oe&&Ve!==qe&&(q+=qe-Ve),h(qe)}(he||j)&&Qr()},e.onEnable=function(){_d(c,i?!1:"x"),ot.addEventListener("refresh",X),Mn(ut,"resize",X),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){_d(c,!0),Sn(ut,"resize",X),ot.removeEventListener("refresh",X),E.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=_s,_s&&!h()&&h(1),_s&&Be.ticker.add(_r),Z=a._dc,N=Be.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Rb(h,h(),function(){return N.pause()})},onUpdate:Qr,onComplete:Z.vars.onComplete}),a};ot.sort=function(n){if(On(n))return at.sort(n);var e=ut.pageYOffset||0;return ot.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),at.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ot.observe=function(n){return new rn(n)};ot.normalizeScroll=function(n){if(typeof n>"u")return Kn;if(n===!0&&Kn)return Kn.enable();if(n===!1){Kn&&Kn.kill(),Kn=n;return}var e=n instanceof rn?n:lP(n);return Kn&&Kn.target===e.target&&Kn.kill(),Ao(e.target)&&(Kn=e),e};ot.core={_getVelocityProp:qh,_inputObserver:Pb,_scrollers:ft,_proxies:Rr,bridge:{ss:function(){Qi||Ro("scrollStart"),Qi=Nn()},ref:function(){return Ln}}};vb()&&Be.registerPlugin(ot);const cP={__name:"SpacetimeWarp",props:{gridSize:{type:Number,default:40},gridDivisions:{type:Number,default:40},warpStrength:{type:Number,default:3},planetSize:{type:Number,default:2}},setup(n){const e=pt(null);let t,i,r,s,o,a,l;const c=n,u=()=>{const m=new lc(c.gridSize,c.gridSize,c.gridDivisions,c.gridDivisions),p=m.attributes.position.array.slice();m.userData.originalPositions=p;const y=new Cn({uniforms:{uTime:{value:0},uWarpCenter:{value:new At(0,0)},uWarpStrength:{value:c.warpStrength},uGridColor:{value:new St(65535)},uGlowColor:{value:new St(9133302)}},vertexShader:`
      uniform float uTime;
      uniform vec2 uWarpCenter;
      uniform float uWarpStrength;
      
      varying vec2 vUv;
      varying float vWarp;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        
        // Calculate distance from warp center
        vec2 pos2D = position.xy - uWarpCenter;
        float dist = length(pos2D);
        
        // Gravitational well effect - inverse square-ish falloff
        float warpFactor = uWarpStrength / (dist * dist + 1.0);
        
        // Create the dip in spacetime
        vec3 warped = position;
        warped.z = -warpFactor * 2.0;
        
        // Add subtle ripples
        warped.z += sin(dist * 2.0 - uTime * 0.5) * 0.1 * warpFactor;
        
        vWarp = warpFactor;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(warped, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uGridColor;
      uniform vec3 uGlowColor;
      
      varying vec2 vUv;
      varying float vWarp;
      varying vec3 vPosition;
      
      void main() {
        // Create grid pattern
        vec2 grid = abs(fract(vPosition.xy * 0.5) - 0.5);
        float line = min(grid.x, grid.y);
        float gridPattern = 1.0 - smoothstep(0.0, 0.05, line);
        
        // Color based on warp intensity
        vec3 color = mix(uGridColor, uGlowColor, vWarp * 0.5);
        
        // Increase brightness near warp center
        float glow = vWarp * 2.0;
        color += uGlowColor * glow * 0.3;
        
        // Fade edges
        float edgeFade = smoothstep(0.0, 0.1, vUv.x) * smoothstep(1.0, 0.9, vUv.x) *
                         smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
        
        float alpha = gridPattern * (0.3 + glow * 0.2) * edgeFade;
        
        gl_FragColor = vec4(color, alpha);
      }
    `,transparent:!0,side:sr,depthWrite:!1});o=new _i(m,y),o.rotation.x=-Math.PI*.6,o.position.y=-3,t.add(o)},f=()=>{const m=new Gl(c.planetSize,64,64),p=new Cn({uniforms:{uTime:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      varying vec3 vNormal;
      varying vec3 vPosition;
      
      void main() {
        vec3 viewDir = normalize(cameraPosition - vPosition);
        float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
        
        // Dark core with bright rim
        vec3 coreColor = vec3(0.05, 0.05, 0.15);
        vec3 rimColor = vec3(0.3, 0.6, 1.0);
        vec3 glowColor = vec3(0.5, 0.2, 1.0);
        
        vec3 color = mix(coreColor, rimColor, fresnel);
        color += glowColor * fresnel * 0.5;
        
        // Subtle surface pattern
        float pattern = sin(vPosition.x * 10.0 + uTime * 0.2) * 
                       sin(vPosition.y * 10.0 + uTime * 0.3) * 
                       sin(vPosition.z * 10.0 + uTime * 0.1);
        color += vec3(0.0, 0.1, 0.2) * pattern * 0.1;
        
        gl_FragColor = vec4(color, 1.0);
      }
    `});a=new _i(m,p),a.position.set(0,-1,0),t.add(a);const y=new Gl(c.planetSize*1.5,32,32),M=new Cn({uniforms:{uTime:{value:0},uColor:{value:new St(9133302)}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uColor;
      varying vec3 vNormal;
      
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        vec3 color = uColor * intensity;
        float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
        gl_FragColor = vec4(color * pulse, intensity * 0.5);
      }
    `,transparent:!0,blending:To,side:ri,depthWrite:!1});l=new _i(y,M),l.position.set(0,-1,0),t.add(l)},d=()=>{const p=new ai,y=new Float32Array(600);for(let E=0;E<200;E++)y[E*3]=(Math.random()-.5)*30,y[E*3+1]=(Math.random()-.5)*20,y[E*3+2]=(Math.random()-.5)*10-5;p.setAttribute("position",new Vn(y,3));const M=new ex({size:.05,color:65535,transparent:!0,opacity:.6,blending:To}),b=new Np(p,M);t.add(b)},h=()=>{t=new Lp,i=new mi(60,e.value.clientWidth/e.value.clientHeight,.1,100),i.position.set(0,6,12),i.lookAt(0,-2,0),r=new Fp({antialias:!0,alpha:!0}),r.setSize(e.value.clientWidth,e.value.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(r.domElement),u(),f(),d()},_=()=>{s=requestAnimationFrame(_);const m=performance.now()*.001;o&&(o.material.uniforms.uTime.value=m),a&&(a.material.uniforms.uTime.value=m,a.rotation.y=m*.1),l&&(l.material.uniforms.uTime.value=m),r.render(t,i)},g=()=>{e.value&&(i.aspect=e.value.clientWidth/e.value.clientHeight,i.updateProjectionMatrix(),r.setSize(e.value.clientWidth,e.value.clientHeight))};return dr(()=>{h(),_(),window.addEventListener("resize",g)}),tc(()=>{if(cancelAnimationFrame(s),window.removeEventListener("resize",g),o&&(o.geometry.dispose(),o.material.dispose()),a&&(a.geometry.dispose(),a.material.dispose()),l&&(l.geometry.dispose(),l.material.dispose()),r){const m=r.domElement;r.dispose(),r.forceContextLoss(),r.domElement=null,m&&e.value?.contains(m)&&e.value.removeChild(m)}t=null,i=null,r=null}),(m,p)=>(ke(),We("div",{ref_key:"containerRef",ref:e,class:"absolute inset-0 w-full h-full"},null,512))}},uP={class:"absolute inset-x-0 bottom-0 w-full h-[70%]"},fP={class:"relative z-10 max-w-7xl mx-auto justify-center flex flex-col items-center"},dP={class:"flex flex-col gap-8 w-full max-w-5xl mx-auto"},hP={class:"relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10"},pP={class:"p-6 md:p-8 font-mono text-base md:text-lg lg:text-xl"},mP={class:"text-purple-400 select-none"},gP={class:"relative text-center"},_P={class:"text-2xl md:text-3xl mb-2 block"},vP={class:"text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1"},xP={class:"text-gray-400 text-xs md:text-sm uppercase tracking-wider leading-tight"},bP={__name:"AboutSection",setup(n){un.registerPlugin(ot);const e=pt(null),t=pt(null),i=pt(null),r=[{value:"1+",label:"Years Experience",icon:"⚡"},{value:"2",label:"Microsoft Certs",icon:"🎖️"},{value:"3+",label:"AI Projects",icon:"🤖"},{value:"10+",label:"Junior Devs Trained in Python and Prompt engineering",icon:"👥"}],s=[{prefix:"$",text:"whoami",delay:0},{prefix:">",text:"Tiisetso Khumalo",delay:.5,isOutput:!0},{prefix:"$",text:"cat professional_summary.txt",delay:1},{prefix:">",text:"Innovative Web and AI Developer with expertise in",delay:1.5,isOutput:!0},{prefix:">",text:"LLMs, RAG systems, and AI-driven workflows, Web design and development.",delay:2,isOutput:!0},{prefix:">",text:"Building production-ready AI applications",delay:2.5,isOutput:!0},{prefix:">",text:"across all sectors.",delay:3,isOutput:!0},{prefix:"$",text:"echo $STATUS",delay:3.5},{prefix:">",text:"🟢 Available for opportunities",delay:4,isOutput:!0,highlight:!0}],o=pt([]);return dr(()=>{s.forEach((a,l)=>{un.delayedCall(a.delay,()=>{o.value.push(a)})}),un.fromTo(e.value,{opacity:0},{opacity:1,duration:1,scrollTrigger:{trigger:e.value,start:"top 80%",end:"top 50%",scrub:1}}),un.fromTo(".highlight-card",{opacity:0,y:50,scale:.9},{opacity:1,y:0,scale:1,stagger:.15,duration:.8,ease:"back.out(1.7)",scrollTrigger:{trigger:i.value,start:"top 85%"}})}),(a,l)=>(ke(),We("section",{ref_key:"sectionRef",ref:e,id:"about",class:"relative min-h-screen w-full pt-16 pb-32 px-4 md:px-8 overflow-hidden"},[D("div",uP,[Nt(cP,{"warp-strength":5,"planet-size":2})]),l[8]||(l[8]=D("div",{class:"absolute items-center inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-transparent"},null,-1)),D("div",fP,[l[7]||(l[7]=ji('<div class="text-center items-center mb-10" data-v-d23048a6><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6" data-v-d23048a6><div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" data-v-d23048a6></div><span class="text-cyan-400 text-sm tracking-widest uppercase" data-v-d23048a6>System Profile</span></div><h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-v-d23048a6><span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text items-center justify-center text-transparent" data-v-d23048a6> About Me </span></h2><div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" data-v-d23048a6></div></div>',1)),D("div",dP,[D("div",{ref_key:"terminalRef",ref:t,class:"relative group w-full"},[D("div",hP,[l[1]||(l[1]=ji('<div class="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-cyan-500/20" data-v-d23048a6><div class="w-3 h-3 rounded-full bg-red-500/80" data-v-d23048a6></div><div class="w-3 h-3 rounded-full bg-yellow-500/80" data-v-d23048a6></div><div class="w-3 h-3 rounded-full bg-green-500/80" data-v-d23048a6></div><span class="ml-4 text-cyan-400/60 text-sm font-mono" data-v-d23048a6>tiisetso@portfolio:~</span></div>',1)),D("div",pP,[(ke(!0),We(Dt,null,Bn(o.value,(c,u)=>(ke(),We("div",{key:u,class:gt(["mb-2 md:mb-3 flex items-start gap-3",{"text-cyan-400":!c.isOutput,"text-gray-300":c.isOutput&&!c.highlight,"text-green-400":c.highlight}])},[D("span",mP,dt(c.prefix),1),D("span",{class:gt({"typing-effect":!c.isOutput})},dt(c.text),3)],2))),128)),l[0]||(l[0]=D("div",{class:"flex items-center gap-2 text-cyan-400"},[D("span",{class:"text-purple-400"},"$"),D("span",{class:"w-2 h-5 bg-cyan-400 animate-pulse"})],-1))])]),l[2]||(l[2]=D("div",{class:"absolute -top-4 -right-4 w-24 h-24 border border-cyan-500/20 rounded-lg rotate-12 -z-10"},null,-1)),l[3]||(l[3]=D("div",{class:"absolute -bottom-4 -left-4 w-32 h-32 border border-purple-500/20 rounded-full -z-10"},null,-1))],512),D("div",{ref_key:"highlightsRef",ref:i,class:"grid grid-cols-2 md:grid-cols-4 gap-4"},[(ke(),We(Dt,null,Bn(r,(c,u)=>D("div",{key:u,class:"highlight-card group relative p-4 md:p-6 bg-slate-800/60 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"},[l[4]||(l[4]=D("div",{class:"absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-xl transition-all duration-300"},null,-1)),D("div",gP,[D("span",_P,dt(c.icon),1),D("div",vP,dt(c.value),1),D("div",xP,dt(c.label),1)]),l[5]||(l[5]=D("div",{class:"absolute top-0 right-0 w-6 h-6"},[D("div",{class:"absolute top-1.5 right-1.5 w-3 h-[1px] bg-cyan-400/50"}),D("div",{class:"absolute top-1.5 right-1.5 w-[1px] h-3 bg-cyan-400/50"})],-1))])),64))],512),l[6]||(l[6]=ji('<div class="p-6 md:p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl border border-purple-500/20" data-v-d23048a6><h3 class="text-xl md:text-2xl font-semibold text-white mb-4 flex items-center gap-3" data-v-d23048a6><svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-d23048a6><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" data-v-d23048a6></path></svg> Quick Facts </h3><div class="grid md:grid-cols-2 gap-3 text-gray-300 text-base md:text-lg" data-v-d23048a6><div class="flex items-center gap-3" data-v-d23048a6><span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" data-v-d23048a6></span> Based in Johannesburg, South Africa </div><div class="flex items-center gap-3" data-v-d23048a6><span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" data-v-d23048a6></span> BSc Mathematics &amp; Computer Science (UNISA) - In progress </div><div class="flex items-center gap-3" data-v-d23048a6><span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" data-v-d23048a6></span> Azure AI Engineer Associate Certified </div><div class="flex items-center gap-3" data-v-d23048a6><span class="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" data-v-d23048a6></span> Specializing in AI, RAG systems &amp; LLM integrations </div></div></div>',1))])])],512))}},yP=Ua(bP,[["__scopeId","data-v-d23048a6"]]),SP={class:"relative z-10 max-w-7xl mx-auto"},MP={class:"relative"},EP={class:"flex items-center gap-3 mb-6"},TP={class:"text-3xl"},wP={class:"text-xl font-bold text-white"},AP={class:"space-y-4"},CP={class:"flex justify-between items-center mb-1"},RP={class:"text-gray-300 text-sm"},PP={class:"h-2 bg-slate-700/50 rounded-full overflow-hidden"},DP=["data-level"],IP={class:"absolute top-0 left-0 w-8 h-8 opacity-50"},LP={class:"absolute bottom-0 right-0 w-8 h-8 opacity-50"},NP={class:"certifications-container"},UP={class:"flex flex-wrap justify-center gap-6"},FP={class:"relative flex items-center gap-4"},OP={class:"text-xs text-gray-400 uppercase tracking-wider mb-1"},BP={class:"text-white font-semibold"},kP={class:"text-cyan-400 text-sm font-mono mt-1"},zP=["onClick"],VP={class:"mt-16 text-center"},HP={class:"flex flex-wrap justify-center gap-4"},GP={__name:"SkillsSection",setup(n){un.registerPlugin(ot);const e=pt(null),t=pt(null),i=[{title:"AI & Machine Learning",icon:"🧠",color:"cyan",skills:[{name:"LLM Integration (OpenAI)",level:100},{name:"RAG Systems",level:100},{name:"Prompt Engineering",level:100},{name:"Fine-tuning & Evaluation",level:90},{name:"Agentic Workflows(OpenAI Agents SDK)",level:100}]},{title:"Backend Development",icon:"⚙️",color:"purple",skills:[{name:"Python",level:90},{name:"FastAPI",level:88},{name:"Flask",level:85},{name:"Node.js",level:65},{name:"RESTful API Design",level:85},{name:"Database Architecture",level:80}]},{title:"Frontend Development",icon:"🎨",color:"blue",skills:[{name:"Vanilla JavaScript",level:85},{name:"Vue.js",level:82},{name:"HTML/CSS",level:88},{name:"Tailwind CSS",level:85},{name:"Responsive Design",level:80},{name:"Three.js",level:60}]},{title:"Cloud & DevOps",icon:"☁️",color:"green",skills:[{name:"AWS EC2",level:78},{name:"Linux Administration",level:75},{name:"Nginx",level:72},{name:"PostgreSQL",level:80},{name:"CI/CD Pipelines",level:70}]}],r=[{title:"Azure AI Engineer Associate",code:"AI-102",icon:"🎖️",issuer:"Microsoft",color:"from-cyan-400 to-blue-500",certificateFile:"/certificates/Tiisetso_Khumalo_Azure_AI_Engineer_Associate.pdf"},{title:"Security, Compliance & Identity",code:"SC-900",icon:"🛡️",issuer:"Microsoft",color:"from-purple-400 to-pink-500",certificateFile:"/certificates/Tiisetso_Khumalo_Azure_Security_Compliance_Identity.pdf"}],s=a=>{console.log(a),console.log(a.certificateFile),console.log("Button clicked");const l=`${a.certificateFile}`;window.open(l,"_blank")};dr(()=>{un.fromTo(".skill-card",{opacity:0,y:60,rotateX:-15},{opacity:1,y:0,rotateX:0,stagger:.2,duration:.8,ease:"power3.out",scrollTrigger:{trigger:t.value,start:"top 80%"}}),un.fromTo(".skill-progress",{width:"0%"},{width:(a,l)=>l.dataset.level+"%",duration:1.5,ease:"power2.out",stagger:.05,scrollTrigger:{trigger:t.value,start:"top 70%"}}),un.fromTo(".cert-card",{opacity:0,scale:.8,rotateY:-20},{opacity:1,scale:1,rotateY:0,stagger:.2,duration:.8,ease:"back.out(1.7)",scrollTrigger:{trigger:".certifications-container",start:"top 85%"}})});const o=a=>{const l={cyan:{border:"border-cyan-500/30 hover:border-cyan-400/60",bg:"from-cyan-500/10 to-cyan-500/5",text:"text-cyan-400",bgSolid:"bg-cyan-400",progress:"from-cyan-400 to-cyan-600",glow:"shadow-cyan-500/20"},purple:{border:"border-purple-500/30 hover:border-purple-400/60",bg:"from-purple-500/10 to-purple-500/5",text:"text-purple-400",bgSolid:"bg-purple-400",progress:"from-purple-400 to-purple-600",glow:"shadow-purple-500/20"},blue:{border:"border-blue-500/30 hover:border-blue-400/60",bg:"from-blue-500/10 to-blue-500/5",text:"text-blue-400",bgSolid:"bg-blue-400",progress:"from-blue-400 to-blue-600",glow:"shadow-blue-500/20"},green:{border:"border-green-500/30 hover:border-green-400/60",bg:"from-green-500/10 to-green-500/5",text:"text-green-400",bgSolid:"bg-green-400",progress:"from-green-400 to-green-600",glow:"shadow-green-500/20"}};return l[a]||l.cyan};return(a,l)=>(ke(),We("section",{ref_key:"sectionRef",ref:e,id:"skills",class:"relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden"},[l[5]||(l[5]=ji('<div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" data-v-a2f1abd2></div><div class="absolute inset-0" data-v-a2f1abd2><div class="absolute top-1/3 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" data-v-a2f1abd2></div><div class="absolute top-2/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping" style="animation-delay:1s;" data-v-a2f1abd2></div><div class="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style="animation-delay:2s;" data-v-a2f1abd2></div></div><div class="absolute inset-0 opacity-5" style="background-image:url(&#39;data:image/svg+xml,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2228%22 height=%2249%22 viewBox=%220 0 28 49%22&gt;&lt;g fill-rule=%22evenodd%22&gt;&lt;g fill=%22%2300ffff%22 fill-rule=%22nonzero%22&gt;&lt;path d=%22M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z%22/&gt;&lt;/g&gt;&lt;/g&gt;&lt;/svg&gt;&#39;);" data-v-a2f1abd2></div>',3)),D("div",SP,[l[4]||(l[4]=ji('<div class="text-center mb-16" data-v-a2f1abd2><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6" data-v-a2f1abd2><div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse" data-v-a2f1abd2></div><span class="text-purple-400 text-sm tracking-widest uppercase" data-v-a2f1abd2>Technical Skills</span></div><h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-v-a2f1abd2><span class="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent" data-v-a2f1abd2> Skills &amp; Expertise </span></h2><div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" data-v-a2f1abd2></div></div>',1)),D("div",{ref_key:"skillsGridRef",ref:t,class:"grid md:grid-cols-2 gap-6 mb-16"},[(ke(),We(Dt,null,Bn(i,(c,u)=>D("div",{key:u,class:gt(["skill-card group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500 hover:shadow-xl",[o(c.color).border,o(c.color).glow]])},[D("div",{class:gt(["absolute inset-0 bg-gradient-to-br rounded-2xl opacity-50",o(c.color).bg])},null,2),D("div",MP,[D("div",EP,[D("span",TP,dt(c.icon),1),D("h3",wP,dt(c.title),1)]),D("div",AP,[(ke(!0),We(Dt,null,Bn(c.skills,(f,d)=>(ke(),We("div",{key:d,class:"group/skill"},[D("div",CP,[D("span",RP,dt(f.name),1),D("span",{class:gt(["text-xs font-mono",o(c.color).text])},dt(f.level)+"% ",3)]),D("div",PP,[D("div",{class:gt(["skill-progress h-full bg-gradient-to-r rounded-full transition-all duration-300",o(c.color).progress]),"data-level":f.level,style:{width:"0%"}},null,10,DP)])]))),128))])]),D("div",IP,[D("div",{class:gt(["absolute top-2 left-2 w-4 h-[1px]",o(c.color).text.replace("text-","bg-")])},null,2),D("div",{class:gt(["absolute top-2 left-2 w-[1px] h-4",o(c.color).text.replace("text-","bg-")])},null,2)]),D("div",LP,[D("div",{class:gt(["absolute bottom-2 right-2 w-4 h-[1px]",o(c.color).text.replace("text-","bg-")])},null,2),D("div",{class:gt(["absolute bottom-2 right-2 w-[1px] h-4",o(c.color).text.replace("text-","bg-")])},null,2)])],2)),64))],512),D("div",NP,[l[2]||(l[2]=D("div",{class:"text-center mb-8"},[D("h3",{class:"text-2xl md:text-3xl font-bold text-white mb-2 mt-16"},[D("span",{class:"bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"}," 🏆 Certifications ")])],-1)),D("div",UP,[(ke(),We(Dt,null,Bn(r,(c,u)=>D("div",{key:u,class:"cert-card group relative w-full md:w-auto md:min-w-[320px] p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"},[l[0]||(l[0]=D("div",{class:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"},null,-1)),D("div",FP,[D("div",{class:gt(["flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-3xl",c.color])},dt(c.icon),3),D("div",null,[D("div",OP,dt(c.issuer),1),D("h4",BP,dt(c.title),1),D("div",kP,dt(c.code),1),D("button",{onClick:f=>s(c),class:"text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center mr-2 mb-2"},"View Certificate",8,zP)])]),l[1]||(l[1]=ji('<div class="absolute top-3 right-3" data-v-a2f1abd2><div class="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-full" data-v-a2f1abd2><svg class="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20" data-v-a2f1abd2><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" data-v-a2f1abd2></path></svg><span class="text-green-400 text-xs" data-v-a2f1abd2>Verified</span></div></div>',1))])),64))])]),D("div",VP,[l[3]||(l[3]=D("p",{class:"text-gray-400 text-sm uppercase tracking-widest mb-6"},"Technologies I Work With",-1)),D("div",HP,[(ke(),We(Dt,null,Bn(["Python","Vue.js","FastAPI","PostgreSQL","AWS","OpenAI","Tailwind CSS","Nginx","Linux"],c=>D("div",{key:c,class:"px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 text-gray-300 text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"},dt(c),1)),64))])])])],512))}},WP=Ua(GP,[["__scopeId","data-v-a2f1abd2"]]),XP={class:"absolute inset-0 overflow-hidden pointer-events-none"},qP={class:"relative z-10 max-w-6xl mx-auto px-4"},YP={class:"space-y-12"},$P={class:"flex flex-wrap items-start justify-between gap-4 mb-4"},jP={class:"flex items-center gap-3 mb-2"},KP={class:"text-3xl"},ZP={class:"text-xl md:text-2xl font-bold text-white"},JP={class:"flex flex-col items-end gap-2"},QP={class:"px-3 py-1 text-sm rounded-full bg-slate-700/50 text-gray-300 border border-gray-600/30"},eD={key:0,class:"px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30"},tD={key:0,class:"mb-4"},nD={class:"inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/30"},iD={class:"space-y-3"},rD={class:"text-base md:text-lg"},sD={__name:"ExperienceSection",setup(n){un.registerPlugin(ot);const e=pt(null),t=pt(null),i=[{title:"AI Developer & Full-Stack Engineer",company:"Kion Consulting",period:"Feb 2025 – Present",type:"current",icon:"🤖",highlights:["Built and deployed multiple AI-powered applications using OpenAI API, LangChain, and Agents SDK","Implemented vector-based search and retrieval using FAISS and an in-house developed vectorstore","Fine-tuned language models using OpenAI Fine-Tuning API with custom datasets","Integrated chatbots and AI assistants into web applications using Vue.js, Python, and RESTful APIs","Developed AI functionalities like text embedding, image & audio analysis using Whisper API"]},{title:"Developer Trainee",company:"GirlCode",period:"Sept 2024 – Sept 2025",type:"training",icon:"👩‍💻",badge:"SETA NQF Level 5 – Systems Development",highlights:["Completed comprehensive system development program with practical full-stack training","Built and maintained robust applications using FastAPI, Flask, and Vue.js + Vite","Gained foundational experience in SDLC, database design, REST API development, and deployment"]}];return dr(()=>{un.fromTo(".timeline-item",{opacity:0,x:-50},{opacity:1,x:0,stagger:.3,duration:.8,ease:"power3.out",scrollTrigger:{trigger:t.value,start:"top 80%"}}),un.fromTo(".timeline-line",{scaleY:0},{scaleY:1,duration:1.5,ease:"power2.out",scrollTrigger:{trigger:t.value,start:"top 80%"}})}),(r,s)=>(ke(),We("section",{ref_key:"sectionRef",ref:e,id:"experience",class:"relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"},[s[3]||(s[3]=D("div",{class:"absolute inset-0 opacity-10"},[D("div",{class:"absolute inset-0",style:{"background-image":"linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)","background-size":"50px 50px"}})],-1)),D("div",XP,[(ke(),We(Dt,null,Bn(20,o=>D("div",{key:o,class:"absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse",style:Ql({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${2+Math.random()*2}s`})},null,4)),64))]),D("div",qP,[s[2]||(s[2]=ji('<div class="text-center mb-16" data-v-459edcb9><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6" data-v-459edcb9><div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" data-v-459edcb9></div><span class="text-cyan-400 text-sm tracking-widest uppercase" data-v-459edcb9>Career Path</span></div><h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-v-459edcb9><span class="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" data-v-459edcb9> Experience </span></h2><div class="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" data-v-459edcb9></div></div>',1)),D("div",{ref_key:"timelineRef",ref:t,class:"relative"},[s[1]||(s[1]=D("div",{class:"timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 transform md:-translate-x-1/2 origin-top"},null,-1)),D("div",YP,[(ke(),We(Dt,null,Bn(i,(o,a)=>D("div",{key:a,class:gt(["timeline-item relative",a%2===0?"md:pr-1/2":"md:pl-1/2 md:ml-auto"])},[D("div",{class:gt(["absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10",o.type==="current"?"bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50":"bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50"])},[D("div",{class:gt(["absolute inset-0 rounded-full animate-ping opacity-30",o.type==="current"?"bg-cyan-400":"bg-purple-500"])},null,2)],2),D("div",{class:gt(["ml-8 md:ml-0 p-6 md:p-8 bg-slate-800/60 backdrop-blur-sm rounded-2xl border w-full md:w-[95%] transition-all duration-300 hover:shadow-xl group",[a%2===0?"md:mr-4":"md:ml-4",o.type==="current"?"border-cyan-500/30 hover:border-cyan-400/60 hover:shadow-cyan-500/20":"border-purple-500/30 hover:border-purple-400/60 hover:shadow-purple-500/20"]])},[D("div",$P,[D("div",null,[D("div",jP,[D("span",KP,dt(o.icon),1),D("h3",ZP,dt(o.title),1)]),D("p",{class:gt(["text-lg md:text-xl",o.type==="current"?"text-cyan-400":"text-purple-400"])},dt(o.company),3)]),D("div",JP,[D("span",QP,dt(o.period),1),o.type==="current"?(ke(),We("span",eD," ● Current ")):mn("",!0)])]),o.badge?(ke(),We("div",tD,[D("span",nD,[s[0]||(s[0]=D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})],-1)),pi(" "+dt(o.badge),1)])])):mn("",!0),D("ul",iD,[(ke(!0),We(Dt,null,Bn(o.highlights,(l,c)=>(ke(),We("li",{key:c,class:"flex items-start gap-3 text-gray-300 group-hover:text-gray-200 transition-colors"},[D("span",{class:gt(["mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0",o.type==="current"?"bg-cyan-400":"bg-purple-400"])},null,2),D("span",rD,dt(l),1)]))),128))])],2)],2)),64))])],512)])],512))}},oD=Ua(sD,[["__scopeId","data-v-459edcb9"]]),aD={class:"relative z-10 max-w-6xl mx-auto"},lD=["onClick"],cD={class:"relative flex items-start justify-between mb-4"},uD={class:"flex items-center gap-3"},fD=["src","alt"],dD={key:1,class:"text-4xl"},hD={class:"text-xl font-bold text-white group-hover:text-white transition-colors"},pD={class:"relative text-gray-400 text-sm md:text-base mb-4 line-clamp-4"},mD={class:"relative flex flex-wrap gap-2 mb-4"},gD={class:"relative flex items-center justify-between text-sm"},_D={class:"space-y-2 mb-4"},vD={key:0,class:"flex flex-wrap gap-3"},xD=["href"],bD=["href"],yD=["href"],SD=["href"],MD={class:"relative w-full max-w-md bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 shadow-2xl shadow-purple-500/20 overflow-hidden"},ED={class:"p-6 space-y-4"},TD=["href"],wD={class:"text-white group-hover:text-cyan-400 transition-colors"},AD=["href"],CD={class:"text-white group-hover:text-green-400 transition-colors"},RD=["href"],PD=["href"],DD={__name:"ProjectsSection",setup(n){un.registerPlugin(ot);const e=pt(null),t=pt(null),i=pt(null),r=pt(!1),s={email:"tiisoh1998@gmail.com",phone:"0678017642",linkedin:"https://www.linkedin.com/in/tiisetso-khumalo-605725236/",github:"https://github.com/TiiCoder28"},o=()=>{r.value=!r.value},a=[{id:"weatherApp",title:"CloudChaser",subtitle:"Weather Forecasting App",status:"Live",icon:"☁️",color:"cyan",description:"A sleek web application that provides accurate and up-to-date weather forecasts using OpenWeatherMap API. This was my first app that I developed using HTML, CSS, and JavaScript and deployed using github pages.",tech:["OpenWeatherMap API","CSS","HTML","JavaScript"],features:["Current weather data for any location. The user can either enter the location of their choice or allow the app to access their geolocation.","5-day weather forecasts","Responsive design for mobile and desktop","Backgrounds that changes every 5 seconds"],links:{website:"https://tiicoder28.github.io/weatherApp/"}},{id:"radai",title:"RadAI",subtitle:"Medical Assistant",status:"In Testing",icon:"🏥",color:"cyan",description:"AI-powered medical assistant chatbot that processes user symptoms and provides medical guidance through WhatsApp. I developed this application while at Kion Consulting for a client.",tech:["WhatsApp Graph API","OpenAI API","Python","FastAPI"],features:["Symptom analysis and medical guidance","Natural language processing for health queries","WhatsApp integration for accessibility","Real-time AI-powered responses","Provides potential diagnoses based on the image and additional context given by doctor","Powered by OpenAI GPT-Models and created using the OpenAI Agents SDK","Has patient management features for doctors to keep track of their patients"],links:{github:"https://github.com/tiisetsok28/RadAI"}},{id:"tutoring",title:"Thuto",subtitle:"School Tutoring Assistant",status:"Live",icon:"📚",color:"purple",description:"Assisted in developing the backend(AI tutors, chat sessions, user management, etc) for the in-house tutoring assistant for assignment help and study tips, built with intelligent AI responses.",tech:["Vue.js","Flask","OpenAI API","WhatsApp API"],features:["Assignment help and explanations","Study tips and learning strategies","Multi-platform access (Web + WhatsApp)","Personalized tutoring experience"],links:{website:"http://thuto.kion.co.za/"}},{id:"tutoring",title:"Smart Varsity Assistant",subtitle:"University Tutor Chatbot",status:"In Testing",icon:"📚",color:"purple",description:"AI-powered chatbot that assists university students with assignment help, study tips, and academic guidance through a web interface.",tech:["Vue.js","Flask","OpenAI API","OpenAI Assistants API(about to be depricated)"],features:["Assignment help and explanations","Study tips and learning strategies","Personalized tutoring experience","Web-based access for convenience","Can create different sessions for different modules","Specialises in C++, Calculus, Linear Algebra, Introduction to Programming, Data Structures and Algorithms, etc","I've been using it in my first year to assist me with assignements that I had"],links:{github:"https://github.com/TiiCoder28/Smart-Varsity-Assistant"}},{id:"email-scheduler",title:"Email Scheduler",subtitle:"Meeting Automation",status:"Completed",icon:"📧",color:"green",description:"Assisted in developing an intelligent scheduling app that automates meeting invites and checks participant availability using AI agents.",tech:["Microsoft Graph API","OpenAI Agents SDK","Python","FastAPI"],features:["Automated meeting scheduling","Participant availability checking","AI-powered agent orchestration","Microsoft Graph API integration"],links:{}},{id:"portfolio",title:"Personal Portfolio",subtitle:"Showcase Website",status:"Live",icon:"img:/Chatbot_Logo.png",color:"purple",description:"My personal portfolio website built with Vue.js and Vite, showcasing my projects, skills, and experience as a web and AI developer.",tech:["Vue.js","Vite","GSAP","Three.js"],features:["Implemented three.js components in the space journey and on certain sections","Implemented GSAP scroll-triggered animations for a dynamic user experience","Implemented backend for chatbot intergration using FastAPI and deployed on Render.com","Frontend deployed on Vercel for optimal performance","Interactive project showcase","Smooth animations with GSAP","3D space journey experience using Three.js"],links:{github:"https://github.com/TiiCoder28/Tiisetso_Khumalo_Portfolio"}}],l=f=>{i.value=i.value===f?null:f};dr(()=>{un.fromTo(".project-card",{opacity:0,y:60,rotateX:-10},{opacity:1,y:0,rotateX:0,stagger:.2,duration:.8,ease:"power3.out",scrollTrigger:{trigger:t.value,start:"top 85%"}})});const c=f=>{const d={cyan:{border:"border-cyan-500/30 hover:border-cyan-400/60",bg:"bg-cyan-500/10",text:"text-cyan-400",shadow:"hover:shadow-cyan-500/20",glow:"from-cyan-500/20 to-transparent"},purple:{border:"border-purple-500/30 hover:border-purple-400/60",bg:"bg-purple-500/10",text:"text-purple-400",shadow:"hover:shadow-purple-500/20",glow:"from-purple-500/20 to-transparent"},green:{border:"border-green-500/30 hover:border-green-400/60",bg:"bg-green-500/10",text:"text-green-400",shadow:"hover:shadow-green-500/20",glow:"from-green-500/20 to-transparent"}};return d[f]||d.cyan},u=f=>{switch(f){case"Live":return"bg-green-500/20 text-green-400 border-green-500/30";case"In Testing":return"bg-yellow-500/20 text-yellow-400 border-yellow-500/30";case"Completed":return"bg-blue-500/20 text-blue-400 border-blue-500/30";default:return"bg-gray-500/20 text-gray-400 border-gray-500/30"}};return(f,d)=>(ke(),We("section",{ref_key:"sectionRef",ref:e,id:"projects",class:"relative min-h-screen w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"},[d[21]||(d[21]=D("div",{class:"absolute inset-0 overflow-hidden"},[D("div",{class:"absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"}),D("div",{class:"absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"})],-1)),D("div",aD,[d[8]||(d[8]=ji('<div class="text-center mb-16" data-v-4d1a0737><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6" data-v-4d1a0737><div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse" data-v-4d1a0737></div><span class="text-purple-400 text-sm tracking-widest uppercase" data-v-4d1a0737>Featured Work</span></div><h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-v-4d1a0737><span class="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent" data-v-4d1a0737> Projects </span></h2><div class="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto rounded-full text-center" data-v-4d1a0737></div><p class="mt-6 text-gray-400 text-lg max-w-2xl mx-auto" data-v-4d1a0737> Some of the projects I have worked on recently, showcasing my skills in web development, AI integration, and automation. </p></div>',1)),D("div",{ref_key:"projectsRef",ref:t,class:"grid md:grid-cols-2 lg:grid-cols-3 gap-6"},[(ke(),We(Dt,null,Bn(a,h=>D("div",{key:h.id,class:"project-card group relative"},[D("div",{class:gt(["relative h-full p-6 bg-slate-800/60 backdrop-blur-sm rounded-2xl border transition-all duration-500 cursor-pointer hover:shadow-xl hover:-translate-y-2",[c(h.color).border,c(h.color).shadow]]),onClick:_=>l(h.id)},[D("div",{class:gt(["absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",c(h.color).glow])},null,2),D("div",cD,[D("div",uD,[h.icon.startsWith("img:")?(ke(),We("img",{key:0,src:h.icon.replace("img:",""),alt:h.title,class:"w-10 h-10 rounded-lg object-cover"},null,8,fD)):(ke(),We("span",dD,dt(h.icon),1)),D("div",null,[D("h3",hD,dt(h.title),1),D("p",{class:gt(["text-sm",c(h.color).text])},dt(h.subtitle),3)])]),D("span",{class:gt(["px-2 py-1 text-xs rounded-full border",u(h.status)])},dt(h.status),3)]),D("p",pD,dt(h.description),1),D("div",mD,[(ke(!0),We(Dt,null,Bn(h.tech,_=>(ke(),We("span",{key:_,class:"px-2 py-1 text-xs rounded-md bg-slate-700/50 text-gray-300 border border-slate-600/50"},dt(_),1))),128))]),D("div",gD,[D("span",{class:gt(c(h.color).text)},"View details",2),(ke(),We("svg",{class:gt(["w-5 h-5 transition-transform duration-300",[c(h.color).text,i.value===h.id?"rotate-180":""]]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[...d[0]||(d[0]=[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)])],2))]),D("div",{class:gt(["relative overflow-hidden transition-all duration-500",i.value===h.id?"max-h-96 mt-4 pt-4 border-t border-slate-700/50":"max-h-0"])},[d[5]||(d[5]=D("h4",{class:"text-sm font-semibold text-white mb-3"},"Key Features",-1)),D("ul",_D,[(ke(!0),We(Dt,null,Bn(h.features,_=>(ke(),We("li",{key:_,class:"flex items-start gap-2 text-sm text-gray-400"},[D("span",{class:gt(["mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0",c(h.color).text.replace("text-","bg-")])},null,2),pi(" "+dt(_),1)]))),128))]),Object.keys(h.links).length>0?(ke(),We("div",vD,[h.links.website?(ke(),We("a",{key:0,href:h.links.website,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/50 text-white text-sm hover:bg-slate-600/50 transition-colors"},[...d[1]||(d[1]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"})],-1),pi(" Website ",-1)])],8,xD)):mn("",!0),h.links.whatsapp?(ke(),We("a",{key:1,href:h.links.whatsapp,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm hover:bg-green-500/30 transition-colors"},[...d[2]||(d[2]=[D("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[D("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})],-1),pi(" WhatsApp ",-1)])],8,bD)):mn("",!0),h.links.github?(ke(),We("a",{key:2,href:h.links.github,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 text-gray-300 text-sm hover:bg-gray-600/50 transition-colors"},[...d[3]||(d[3]=[D("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[D("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})],-1),pi(" GitHub ",-1)])],8,yD)):mn("",!0),h.links.in-f.development?(ke(),We("a",{key:3,href:h.links.in-f.development,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 text-sm hover:bg-yellow-500/30 transition-colors"},[...d[4]||(d[4]=[D("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1),pi(" In Development ",-1)])],8,SD)):mn("",!0)])):mn("",!0)],2)],10,lD)])),64))],512),D("div",{class:"mt-16 text-center"},[d[7]||(d[7]=D("p",{class:"text-gray-400 mb-6"},"Interested in hiring me, collaborating or have a project in mind?",-1)),D("button",{onClick:o,class:"inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105"},[...d[6]||(d[6]=[D("span",null,"Let's Build Something Amazing",-1),D("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)])])])]),(ke(),ml(My,{to:"body"},[Nt(Ol,{name:"modal"},{default:Eo(()=>[r.value?(ke(),We("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center p-4",onClick:Z1(o,["self"])},[d[20]||(d[20]=D("div",{class:"absolute inset-0 bg-black/60 backdrop-blur-sm"},null,-1)),D("div",MD,[D("div",{class:"bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-6 border-b border-slate-700/50"},[D("div",{class:"flex items-center justify-between"},[d[10]||(d[10]=D("div",null,[D("h3",{class:"text-2xl font-bold text-white mb-1"},"Let's Connect!"),D("p",{class:"text-gray-400 text-sm"},"I'd love to hear from you")],-1)),D("button",{onClick:o,class:"w-10 h-10 rounded-full bg-slate-800/80 hover:bg-red-500/30 flex items-center justify-center text-gray-400 hover:text-white transition-all"},[...d[9]||(d[9]=[D("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])])]),D("div",ED,[D("a",{href:`mailto:${s.email}`,class:"group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"},[d[12]||(d[12]=D("div",{class:"w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"},[D("svg",{class:"w-6 h-6 text-cyan-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})])],-1)),D("div",null,[d[11]||(d[11]=D("p",{class:"text-xs text-gray-500 uppercase tracking-wider"},"Email",-1)),D("p",wD,dt(s.email),1)]),d[13]||(d[13]=D("svg",{class:"w-5 h-5 text-gray-600 group-hover:text-cyan-400 ml-auto transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],8,TD),D("a",{href:`tel:${s.phone}`,class:"group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"},[d[15]||(d[15]=D("div",{class:"w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"},[D("svg",{class:"w-6 h-6 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})])],-1)),D("div",null,[d[14]||(d[14]=D("p",{class:"text-xs text-gray-500 uppercase tracking-wider"},"Phone",-1)),D("p",CD,dt(s.phone),1)]),d[16]||(d[16]=D("svg",{class:"w-5 h-5 text-gray-600 group-hover:text-green-400 ml-auto transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1))],8,AD),D("a",{href:s.linkedin,target:"_blank",class:"group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"},[...d[17]||(d[17]=[D("div",{class:"w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"},[D("svg",{class:"w-6 h-6 text-blue-400",fill:"currentColor",viewBox:"0 0 24 24"},[D("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})])],-1),D("div",null,[D("p",{class:"text-xs text-gray-500 uppercase tracking-wider"},"LinkedIn"),D("p",{class:"text-white group-hover:text-blue-400 transition-colors"},"Tiisetso Khumalo")],-1),D("svg",{class:"w-5 h-5 text-gray-600 group-hover:text-blue-400 ml-auto transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1)])],8,RD),D("a",{href:s.github,target:"_blank",class:"group flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"},[...d[18]||(d[18]=[D("div",{class:"w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform"},[D("svg",{class:"w-6 h-6 text-purple-400",fill:"currentColor",viewBox:"0 0 24 24"},[D("path",{d:"M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"})])],-1),D("div",null,[D("p",{class:"text-xs text-gray-500 uppercase tracking-wider"},"GitHub"),D("p",{class:"text-white group-hover:text-purple-400 transition-colors"},"TiiCoder28")],-1),D("svg",{class:"w-5 h-5 text-gray-600 group-hover:text-purple-400 ml-auto transition-colors",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[D("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})],-1)])],8,PD)]),d[19]||(d[19]=D("div",{class:"px-6 pb-6"},[D("p",{class:"text-center text-gray-500 text-sm"}," Looking forward to connecting with you! ")],-1))])])):mn("",!0)]),_:1})]))],512))}},ID=Ua(DD,[["__scopeId","data-v-4d1a0737"]]),LD={class:"w-full"},ND={class:"fixed top-6 left-6 z-50"},UD={__name:"HomeView",setup(n){return(e,t)=>(ke(),We("main",LD,[D("div",ND,[Nt(Kr(Sv),{to:"/blog",class:"inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-slate-950/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_30px_rgba(0,240,255,0.18)] transition hover:border-cyan-200/70 hover:bg-slate-900"},{default:Eo(()=>[...t[0]||(t[0]=[D("span",{class:"h-2 w-2 rounded-full bg-cyan-300 animate-pulse"},null,-1),pi(" Build Log / Journey ",-1)])]),_:1})]),Nt(GR),Nt(yP),Nt(WP),Nt(oD),Nt(ID)]))}},FD=lM({history:HS("/"),routes:[{path:"/",name:"home",component:UD},{path:"/blog",name:"blog",component:()=>Rg(()=>import("./BlogListView-DLdAFboq.js"),__vite__mapDeps([0,1]))},{path:"/blog/:slug",name:"blog-post",component:()=>Rg(()=>import("./BlogPostView-CHFqGJRk.js"),__vite__mapDeps([2,1]))}]}),cm=eS(DR);cm.use(rS());cm.use(FD);cm.mount("#app");export{Dt as F,Sv as R,Rg as _,We as a,D as b,rr as c,Nt as d,ml as e,mn as f,Bn as g,ke as h,pi as i,cl as j,Z1 as k,cM as l,gt as n,dr as o,pt as r,dt as t,Kr as u,Eo as w};
