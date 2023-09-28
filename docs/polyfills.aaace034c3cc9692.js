"use strict";(self.webpackChunkGerenciadorCinema=self.webpackChunkGerenciadorCinema||[]).push([[429],{332:()=>{!function(e){const n=e.performance;function s(j){n&&n.mark&&n.mark(j)}function r(j,h){n&&n.measure&&n.measure(j,h)}s("Zone");const i=e.__Zone_symbol_prefix||"__zone_symbol__";function l(j){return i+j}const p=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(p||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let E=(()=>{class h{static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let t=h.current;for(;t.parent;)t=t.parent;return t}static get current(){return W.zone}static get currentTask(){return re}static __load_patch(t,_,w=!1){if(oe.hasOwnProperty(t)){if(!w&&p)throw Error("Already loaded patch: "+t)}else if(!e["__Zone_disable_"+t]){const L="Zone:"+t;s(L),oe[t]=_(e,h,Y),r(L,L)}}get parent(){return this._parent}get name(){return this._name}constructor(t,_){this._parent=t,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new v(this,this._parent&&this._parent._zoneDelegate,_)}get(t){const _=this.getZoneWith(t);if(_)return _._properties[t]}getZoneWith(t){let _=this;for(;_;){if(_._properties.hasOwnProperty(t))return _;_=_._parent}return null}fork(t){if(!t)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,t)}wrap(t,_){if("function"!=typeof t)throw new Error("Expecting function got: "+t);const w=this._zoneDelegate.intercept(this,t,_),L=this;return function(){return L.runGuarded(w,this,arguments,_)}}run(t,_,w,L){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,t,_,w,L)}finally{W=W.parent}}runGuarded(t,_=null,w,L){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,t,_,w,L)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{W=W.parent}}runTask(t,_,w){if(t.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===G&&(t.type===Q||t.type===P))return;const L=t.state!=y;L&&t._transitionTo(y,A),t.runCount++;const a=re;re=t,W={parent:W,zone:this};try{t.type==P&&t.data&&!t.data.isPeriodic&&(t.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,t,_,w)}catch(u){if(this._zoneDelegate.handleError(this,u))throw u}}finally{t.state!==G&&t.state!==d&&(t.type==Q||t.data&&t.data.isPeriodic?L&&t._transitionTo(A,y):(t.runCount=0,this._updateTaskCount(t,-1),L&&t._transitionTo(G,y,G))),W=W.parent,re=a}}scheduleTask(t){if(t.zone&&t.zone!==this){let w=this;for(;w;){if(w===t.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${t.zone.name}`);w=w.parent}}t._transitionTo(z,G);const _=[];t._zoneDelegates=_,t._zone=this;try{t=this._zoneDelegate.scheduleTask(this,t)}catch(w){throw t._transitionTo(d,z,G),this._zoneDelegate.handleError(this,w),w}return t._zoneDelegates===_&&this._updateTaskCount(t,1),t.state==z&&t._transitionTo(A,z),t}scheduleMicroTask(t,_,w,L){return this.scheduleTask(new m(I,t,_,w,L,void 0))}scheduleMacroTask(t,_,w,L,a){return this.scheduleTask(new m(P,t,_,w,L,a))}scheduleEventTask(t,_,w,L,a){return this.scheduleTask(new m(Q,t,_,w,L,a))}cancelTask(t){if(t.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(t.zone||J).name+"; Execution: "+this.name+")");if(t.state===A||t.state===y){t._transitionTo(V,A,y);try{this._zoneDelegate.cancelTask(this,t)}catch(_){throw t._transitionTo(d,V),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(t,-1),t._transitionTo(G,V),t.runCount=0,t}}_updateTaskCount(t,_){const w=t._zoneDelegates;-1==_&&(t._zoneDelegates=null);for(let L=0;L<w.length;L++)w[L]._updateTaskCount(t.type,_)}}return h.__symbol__=l,h})();const b={name:"",onHasTask:(j,h,c,t)=>j.hasTask(c,t),onScheduleTask:(j,h,c,t)=>j.scheduleTask(c,t),onInvokeTask:(j,h,c,t,_,w)=>j.invokeTask(c,t,_,w),onCancelTask:(j,h,c,t)=>j.cancelTask(c,t)};class v{constructor(h,c,t){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=h,this._parentDelegate=c,this._forkZS=t&&(t&&t.onFork?t:c._forkZS),this._forkDlgt=t&&(t.onFork?c:c._forkDlgt),this._forkCurrZone=t&&(t.onFork?this.zone:c._forkCurrZone),this._interceptZS=t&&(t.onIntercept?t:c._interceptZS),this._interceptDlgt=t&&(t.onIntercept?c:c._interceptDlgt),this._interceptCurrZone=t&&(t.onIntercept?this.zone:c._interceptCurrZone),this._invokeZS=t&&(t.onInvoke?t:c._invokeZS),this._invokeDlgt=t&&(t.onInvoke?c:c._invokeDlgt),this._invokeCurrZone=t&&(t.onInvoke?this.zone:c._invokeCurrZone),this._handleErrorZS=t&&(t.onHandleError?t:c._handleErrorZS),this._handleErrorDlgt=t&&(t.onHandleError?c:c._handleErrorDlgt),this._handleErrorCurrZone=t&&(t.onHandleError?this.zone:c._handleErrorCurrZone),this._scheduleTaskZS=t&&(t.onScheduleTask?t:c._scheduleTaskZS),this._scheduleTaskDlgt=t&&(t.onScheduleTask?c:c._scheduleTaskDlgt),this._scheduleTaskCurrZone=t&&(t.onScheduleTask?this.zone:c._scheduleTaskCurrZone),this._invokeTaskZS=t&&(t.onInvokeTask?t:c._invokeTaskZS),this._invokeTaskDlgt=t&&(t.onInvokeTask?c:c._invokeTaskDlgt),this._invokeTaskCurrZone=t&&(t.onInvokeTask?this.zone:c._invokeTaskCurrZone),this._cancelTaskZS=t&&(t.onCancelTask?t:c._cancelTaskZS),this._cancelTaskDlgt=t&&(t.onCancelTask?c:c._cancelTaskDlgt),this._cancelTaskCurrZone=t&&(t.onCancelTask?this.zone:c._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const _=t&&t.onHasTask;(_||c&&c._hasTaskZS)&&(this._hasTaskZS=_?t:b,this._hasTaskDlgt=c,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=h,t.onScheduleTask||(this._scheduleTaskZS=b,this._scheduleTaskDlgt=c,this._scheduleTaskCurrZone=this.zone),t.onInvokeTask||(this._invokeTaskZS=b,this._invokeTaskDlgt=c,this._invokeTaskCurrZone=this.zone),t.onCancelTask||(this._cancelTaskZS=b,this._cancelTaskDlgt=c,this._cancelTaskCurrZone=this.zone))}fork(h,c){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,h,c):new E(h,c)}intercept(h,c,t){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,h,c,t):c}invoke(h,c,t,_,w){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,h,c,t,_,w):c.apply(t,_)}handleError(h,c){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,h,c)}scheduleTask(h,c){let t=c;if(this._scheduleTaskZS)this._hasTaskZS&&t._zoneDelegates.push(this._hasTaskDlgtOwner),t=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,h,c),t||(t=c);else if(c.scheduleFn)c.scheduleFn(c);else{if(c.type!=I)throw new Error("Task is missing scheduleFn.");C(c)}return t}invokeTask(h,c,t,_){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,h,c,t,_):c.callback.apply(t,_)}cancelTask(h,c){let t;if(this._cancelTaskZS)t=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,h,c);else{if(!c.cancelFn)throw Error("Task is not cancelable");t=c.cancelFn(c)}return t}hasTask(h,c){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,h,c)}catch(t){this.handleError(h,t)}}_updateTaskCount(h,c){const t=this._taskCounts,_=t[h],w=t[h]=_+c;if(w<0)throw new Error("More tasks executed then were scheduled.");0!=_&&0!=w||this.hasTask(this.zone,{microTask:t.microTask>0,macroTask:t.macroTask>0,eventTask:t.eventTask>0,change:h})}}class m{constructor(h,c,t,_,w,L){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=h,this.source=c,this.data=_,this.scheduleFn=w,this.cancelFn=L,!t)throw new Error("callback is not defined");this.callback=t;const a=this;this.invoke=h===Q&&_&&_.useG?m.invokeTask:function(){return m.invokeTask.call(e,a,this,arguments)}}static invokeTask(h,c,t){h||(h=this),ee++;try{return h.runCount++,h.zone.runTask(h,c,t)}finally{1==ee&&T(),ee--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(G,z)}_transitionTo(h,c,t){if(this._state!==c&&this._state!==t)throw new Error(`${this.type} '${this.source}': can not transition to '${h}', expecting state '${c}'${t?" or '"+t+"'":""}, was '${this._state}'.`);this._state=h,h==G&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const M=l("setTimeout"),O=l("Promise"),N=l("then");let K,U=[],x=!1;function X(j){if(K||e[O]&&(K=e[O].resolve(0)),K){let h=K[N];h||(h=K.then),h.call(K,j)}else e[M](j,0)}function C(j){0===ee&&0===U.length&&X(T),j&&U.push(j)}function T(){if(!x){for(x=!0;U.length;){const j=U;U=[];for(let h=0;h<j.length;h++){const c=j[h];try{c.zone.runTask(c,null,null)}catch(t){Y.onUnhandledError(t)}}}Y.microtaskDrainDone(),x=!1}}const J={name:"NO ZONE"},G="notScheduled",z="scheduling",A="scheduled",y="running",V="canceling",d="unknown",I="microTask",P="macroTask",Q="eventTask",oe={},Y={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:C,showUncaughtError:()=>!E[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:X};let W={parent:null,zone:new E(null,null)},re=null,ee=0;function q(){}r("Zone","Zone"),e.Zone=E}(typeof window<"u"&&window||typeof self<"u"&&self||global);const ue=Object.getOwnPropertyDescriptor,pe=Object.defineProperty,ve=Object.getPrototypeOf,Se=Object.create,it=Array.prototype.slice,Ze="addEventListener",De="removeEventListener",Oe=Zone.__symbol__(Ze),Ne=Zone.__symbol__(De),ie="true",ce="false",me=Zone.__symbol__("");function Ie(e,n){return Zone.current.wrap(e,n)}function Me(e,n,s,r,i){return Zone.current.scheduleMacroTask(e,n,s,r,i)}const H=Zone.__symbol__,be=typeof window<"u",_e=be?window:void 0,$=be&&_e||"object"==typeof self&&self||global,ct="removeAttribute";function Le(e,n){for(let s=e.length-1;s>=0;s--)"function"==typeof e[s]&&(e[s]=Ie(e[s],n+"_"+s));return e}function Ve(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pe=!("nw"in $)&&typeof $.process<"u"&&"[object process]"==={}.toString.call($.process),Ae=!Pe&&!Fe&&!(!be||!_e.HTMLElement),Be=typeof $.process<"u"&&"[object process]"==={}.toString.call($.process)&&!Fe&&!(!be||!_e.HTMLElement),we={},Ue=function(e){if(!(e=e||$.event))return;let n=we[e.type];n||(n=we[e.type]=H("ON_PROPERTY"+e.type));const s=this||e.target||$,r=s[n];let i;return Ae&&s===_e&&"error"===e.type?(i=r&&r.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===i&&e.preventDefault()):(i=r&&r.apply(this,arguments),null!=i&&!i&&e.preventDefault()),i};function We(e,n,s){let r=ue(e,n);if(!r&&s&&ue(s,n)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const i=H("on"+n+"patched");if(e.hasOwnProperty(i)&&e[i])return;delete r.writable,delete r.value;const l=r.get,p=r.set,E=n.slice(2);let b=we[E];b||(b=we[E]=H("ON_PROPERTY"+E)),r.set=function(v){let m=this;!m&&e===$&&(m=$),m&&("function"==typeof m[b]&&m.removeEventListener(E,Ue),p&&p.call(m,null),m[b]=v,"function"==typeof v&&m.addEventListener(E,Ue,!1))},r.get=function(){let v=this;if(!v&&e===$&&(v=$),!v)return null;const m=v[b];if(m)return m;if(l){let M=l.call(this);if(M)return r.set.call(this,M),"function"==typeof v[ct]&&v.removeAttribute(n),M}return null},pe(e,n,r),e[i]=!0}function qe(e,n,s){if(n)for(let r=0;r<n.length;r++)We(e,"on"+n[r],s);else{const r=[];for(const i in e)"on"==i.slice(0,2)&&r.push(i);for(let i=0;i<r.length;i++)We(e,r[i],s)}}const ne=H("originalInstance");function ge(e){const n=$[e];if(!n)return;$[H(e)]=n,$[e]=function(){const i=Le(arguments,e);switch(i.length){case 0:this[ne]=new n;break;case 1:this[ne]=new n(i[0]);break;case 2:this[ne]=new n(i[0],i[1]);break;case 3:this[ne]=new n(i[0],i[1],i[2]);break;case 4:this[ne]=new n(i[0],i[1],i[2],i[3]);break;default:throw new Error("Arg list too long.")}},le($[e],n);const s=new n(function(){});let r;for(r in s)"XMLHttpRequest"===e&&"responseBlob"===r||function(i){"function"==typeof s[i]?$[e].prototype[i]=function(){return this[ne][i].apply(this[ne],arguments)}:pe($[e].prototype,i,{set:function(l){"function"==typeof l?(this[ne][i]=Ie(l,e+"."+i),le(this[ne][i],l)):this[ne][i]=l},get:function(){return this[ne][i]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&($[e][r]=n[r])}function ae(e,n,s){let r=e;for(;r&&!r.hasOwnProperty(n);)r=ve(r);!r&&e[n]&&(r=e);const i=H(n);let l=null;if(r&&(!(l=r[i])||!r.hasOwnProperty(i))&&(l=r[i]=r[n],Ve(r&&ue(r,n)))){const E=s(l,i,n);r[n]=function(){return E(this,arguments)},le(r[n],l)}return l}function lt(e,n,s){let r=null;function i(l){const p=l.data;return p.args[p.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(p.target,p.args),l}r=ae(e,n,l=>function(p,E){const b=s(p,E);return b.cbIdx>=0&&"function"==typeof E[b.cbIdx]?Me(b.name,E[b.cbIdx],b,i):l.apply(p,E)})}function le(e,n){e[H("OriginalDelegate")]=n}let Xe=!1,je=!1;function ft(){if(Xe)return je;Xe=!0;try{const e=_e.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(je=!0)}catch{}return je}Zone.__load_patch("ZoneAwarePromise",(e,n,s)=>{const r=Object.getOwnPropertyDescriptor,i=Object.defineProperty,p=s.symbol,E=[],b=!0===e[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],v=p("Promise"),m=p("then"),M="__creationTrace__";s.onUnhandledError=a=>{if(s.showUncaughtError()){const u=a&&a.rejection;u?console.error("Unhandled Promise rejection:",u instanceof Error?u.message:u,"; Zone:",a.zone.name,"; Task:",a.task&&a.task.source,"; Value:",u,u instanceof Error?u.stack:void 0):console.error(a)}},s.microtaskDrainDone=()=>{for(;E.length;){const a=E.shift();try{a.zone.runGuarded(()=>{throw a.throwOriginal?a.rejection:a})}catch(u){N(u)}}};const O=p("unhandledPromiseRejectionHandler");function N(a){s.onUnhandledError(a);try{const u=n[O];"function"==typeof u&&u.call(this,a)}catch{}}function U(a){return a&&a.then}function x(a){return a}function K(a){return c.reject(a)}const X=p("state"),C=p("value"),T=p("finally"),J=p("parentPromiseValue"),G=p("parentPromiseState"),z="Promise.then",A=null,y=!0,V=!1,d=0;function I(a,u){return o=>{try{Y(a,u,o)}catch(f){Y(a,!1,f)}}}const P=function(){let a=!1;return function(o){return function(){a||(a=!0,o.apply(null,arguments))}}},Q="Promise resolved with itself",oe=p("currentTaskTrace");function Y(a,u,o){const f=P();if(a===o)throw new TypeError(Q);if(a[X]===A){let k=null;try{("object"==typeof o||"function"==typeof o)&&(k=o&&o.then)}catch(R){return f(()=>{Y(a,!1,R)})(),a}if(u!==V&&o instanceof c&&o.hasOwnProperty(X)&&o.hasOwnProperty(C)&&o[X]!==A)re(o),Y(a,o[X],o[C]);else if(u!==V&&"function"==typeof k)try{k.call(o,f(I(a,u)),f(I(a,!1)))}catch(R){f(()=>{Y(a,!1,R)})()}else{a[X]=u;const R=a[C];if(a[C]=o,a[T]===T&&u===y&&(a[X]=a[G],a[C]=a[J]),u===V&&o instanceof Error){const g=n.currentTask&&n.currentTask.data&&n.currentTask.data[M];g&&i(o,oe,{configurable:!0,enumerable:!1,writable:!0,value:g})}for(let g=0;g<R.length;)ee(a,R[g++],R[g++],R[g++],R[g++]);if(0==R.length&&u==V){a[X]=d;let g=o;try{throw new Error("Uncaught (in promise): "+function l(a){return a&&a.toString===Object.prototype.toString?(a.constructor&&a.constructor.name||"")+": "+JSON.stringify(a):a?a.toString():Object.prototype.toString.call(a)}(o)+(o&&o.stack?"\n"+o.stack:""))}catch(S){g=S}b&&(g.throwOriginal=!0),g.rejection=o,g.promise=a,g.zone=n.current,g.task=n.currentTask,E.push(g),s.scheduleMicroTask()}}}return a}const W=p("rejectionHandledHandler");function re(a){if(a[X]===d){try{const u=n[W];u&&"function"==typeof u&&u.call(this,{rejection:a[C],promise:a})}catch{}a[X]=V;for(let u=0;u<E.length;u++)a===E[u].promise&&E.splice(u,1)}}function ee(a,u,o,f,k){re(a);const R=a[X],g=R?"function"==typeof f?f:x:"function"==typeof k?k:K;u.scheduleMicroTask(z,()=>{try{const S=a[C],Z=!!o&&T===o[T];Z&&(o[J]=S,o[G]=R);const D=u.run(g,void 0,Z&&g!==K&&g!==x?[]:[S]);Y(o,!0,D)}catch(S){Y(o,!1,S)}},o)}const j=function(){},h=e.AggregateError;class c{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(u){return Y(new this(null),y,u)}static reject(u){return Y(new this(null),V,u)}static any(u){if(!u||"function"!=typeof u[Symbol.iterator])return Promise.reject(new h([],"All promises were rejected"));const o=[];let f=0;try{for(let g of u)f++,o.push(c.resolve(g))}catch{return Promise.reject(new h([],"All promises were rejected"))}if(0===f)return Promise.reject(new h([],"All promises were rejected"));let k=!1;const R=[];return new c((g,S)=>{for(let Z=0;Z<o.length;Z++)o[Z].then(D=>{k||(k=!0,g(D))},D=>{R.push(D),f--,0===f&&(k=!0,S(new h(R,"All promises were rejected")))})})}static race(u){let o,f,k=new this((S,Z)=>{o=S,f=Z});function R(S){o(S)}function g(S){f(S)}for(let S of u)U(S)||(S=this.resolve(S)),S.then(R,g);return k}static all(u){return c.allWithCallback(u)}static allSettled(u){return(this&&this.prototype instanceof c?this:c).allWithCallback(u,{thenCallback:f=>({status:"fulfilled",value:f}),errorCallback:f=>({status:"rejected",reason:f})})}static allWithCallback(u,o){let f,k,R=new this((D,F)=>{f=D,k=F}),g=2,S=0;const Z=[];for(let D of u){U(D)||(D=this.resolve(D));const F=S;try{D.then(B=>{Z[F]=o?o.thenCallback(B):B,g--,0===g&&f(Z)},B=>{o?(Z[F]=o.errorCallback(B),g--,0===g&&f(Z)):k(B)})}catch(B){k(B)}g++,S++}return g-=2,0===g&&f(Z),R}constructor(u){const o=this;if(!(o instanceof c))throw new Error("Must be an instanceof Promise.");o[X]=A,o[C]=[];try{const f=P();u&&u(f(I(o,y)),f(I(o,V)))}catch(f){Y(o,!1,f)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return c}then(u,o){let f=this.constructor?.[Symbol.species];(!f||"function"!=typeof f)&&(f=this.constructor||c);const k=new f(j),R=n.current;return this[X]==A?this[C].push(R,k,u,o):ee(this,R,k,u,o),k}catch(u){return this.then(null,u)}finally(u){let o=this.constructor?.[Symbol.species];(!o||"function"!=typeof o)&&(o=c);const f=new o(j);f[T]=T;const k=n.current;return this[X]==A?this[C].push(k,f,u,u):ee(this,k,f,u,u),f}}c.resolve=c.resolve,c.reject=c.reject,c.race=c.race,c.all=c.all;const t=e[v]=e.Promise;e.Promise=c;const _=p("thenPatched");function w(a){const u=a.prototype,o=r(u,"then");if(o&&(!1===o.writable||!o.configurable))return;const f=u.then;u[m]=f,a.prototype.then=function(k,R){return new c((S,Z)=>{f.call(this,S,Z)}).then(k,R)},a[_]=!0}return s.patchThen=w,t&&(w(t),ae(e,"fetch",a=>function L(a){return function(u,o){let f=a.apply(u,o);if(f instanceof c)return f;let k=f.constructor;return k[_]||w(k),f}}(a))),Promise[n.__symbol__("uncaughtPromiseErrors")]=E,c}),Zone.__load_patch("toString",e=>{const n=Function.prototype.toString,s=H("OriginalDelegate"),r=H("Promise"),i=H("Error"),l=function(){if("function"==typeof this){const v=this[s];if(v)return"function"==typeof v?n.call(v):Object.prototype.toString.call(v);if(this===Promise){const m=e[r];if(m)return n.call(m)}if(this===Error){const m=e[i];if(m)return n.call(m)}}return n.call(this)};l[s]=n,Function.prototype.toString=l;const p=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":p.call(this)}});let Ee=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Ee=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Ee=!1}const ht={useG:!0},te={},ze={},Ye=new RegExp("^"+me+"(\\w+)(true|false)$"),$e=H("propagationStopped");function Je(e,n){const s=(n?n(e):e)+ce,r=(n?n(e):e)+ie,i=me+s,l=me+r;te[e]={},te[e][ce]=i,te[e][ie]=l}function dt(e,n,s,r){const i=r&&r.add||Ze,l=r&&r.rm||De,p=r&&r.listeners||"eventListeners",E=r&&r.rmAll||"removeAllListeners",b=H(i),v="."+i+":",m="prependListener",M="."+m+":",O=function(C,T,J){if(C.isRemoved)return;const G=C.callback;let z;"object"==typeof G&&G.handleEvent&&(C.callback=y=>G.handleEvent(y),C.originalDelegate=G);try{C.invoke(C,T,[J])}catch(y){z=y}const A=C.options;return A&&"object"==typeof A&&A.once&&T[l].call(T,J.type,C.originalDelegate?C.originalDelegate:C.callback,A),z};function N(C,T,J){if(!(T=T||e.event))return;const G=C||T.target||e,z=G[te[T.type][J?ie:ce]];if(z){const A=[];if(1===z.length){const y=O(z[0],G,T);y&&A.push(y)}else{const y=z.slice();for(let V=0;V<y.length&&(!T||!0!==T[$e]);V++){const d=O(y[V],G,T);d&&A.push(d)}}if(1===A.length)throw A[0];for(let y=0;y<A.length;y++){const V=A[y];n.nativeScheduleMicroTask(()=>{throw V})}}}const U=function(C){return N(this,C,!1)},x=function(C){return N(this,C,!0)};function K(C,T){if(!C)return!1;let J=!0;T&&void 0!==T.useG&&(J=T.useG);const G=T&&T.vh;let z=!0;T&&void 0!==T.chkDup&&(z=T.chkDup);let A=!1;T&&void 0!==T.rt&&(A=T.rt);let y=C;for(;y&&!y.hasOwnProperty(i);)y=ve(y);if(!y&&C[i]&&(y=C),!y||y[b])return!1;const V=T&&T.eventNameToString,d={},I=y[b]=y[i],P=y[H(l)]=y[l],Q=y[H(p)]=y[p],oe=y[H(E)]=y[E];let Y;T&&T.prepend&&(Y=y[H(T.prepend)]=y[T.prepend]);const c=J?function(o){if(!d.isExisting)return I.call(d.target,d.eventName,d.capture?x:U,d.options)}:function(o){return I.call(d.target,d.eventName,o.invoke,d.options)},t=J?function(o){if(!o.isRemoved){const f=te[o.eventName];let k;f&&(k=f[o.capture?ie:ce]);const R=k&&o.target[k];if(R)for(let g=0;g<R.length;g++)if(R[g]===o){R.splice(g,1),o.isRemoved=!0,0===R.length&&(o.allRemoved=!0,o.target[k]=null);break}}if(o.allRemoved)return P.call(o.target,o.eventName,o.capture?x:U,o.options)}:function(o){return P.call(o.target,o.eventName,o.invoke,o.options)},w=T&&T.diff?T.diff:function(o,f){const k=typeof f;return"function"===k&&o.callback===f||"object"===k&&o.originalDelegate===f},L=Zone[H("UNPATCHED_EVENTS")],a=e[H("PASSIVE_EVENTS")],u=function(o,f,k,R,g=!1,S=!1){return function(){const Z=this||e;let D=arguments[0];T&&T.transferEventName&&(D=T.transferEventName(D));let F=arguments[1];if(!F)return o.apply(this,arguments);if(Pe&&"uncaughtException"===D)return o.apply(this,arguments);let B=!1;if("function"!=typeof F){if(!F.handleEvent)return o.apply(this,arguments);B=!0}if(G&&!G(o,F,Z,arguments))return;const fe=Ee&&!!a&&-1!==a.indexOf(D),se=function W(o,f){return!Ee&&"object"==typeof o&&o?!!o.capture:Ee&&f?"boolean"==typeof o?{capture:o,passive:!0}:o?"object"==typeof o&&!1!==o.passive?{...o,passive:!0}:o:{passive:!0}:o}(arguments[2],fe);if(L)for(let de=0;de<L.length;de++)if(D===L[de])return fe?o.call(Z,D,F,se):o.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),tt=!(!se||"object"!=typeof se)&&se.once,kt=Zone.current;let Ge=te[D];Ge||(Je(D,V),Ge=te[D]);const nt=Ge[xe?ie:ce];let Ce,ye=Z[nt],rt=!1;if(ye){if(rt=!0,z)for(let de=0;de<ye.length;de++)if(w(ye[de],F))return}else ye=Z[nt]=[];const ot=Z.constructor.name,st=ze[ot];st&&(Ce=st[D]),Ce||(Ce=ot+f+(V?V(D):D)),d.options=se,tt&&(d.options.once=!1),d.target=Z,d.capture=xe,d.eventName=D,d.isExisting=rt;const ke=J?ht:void 0;ke&&(ke.taskData=d);const he=kt.scheduleEventTask(Ce,F,ke,k,R);return d.target=null,ke&&(ke.taskData=null),tt&&(se.once=!0),!Ee&&"boolean"==typeof he.options||(he.options=se),he.target=Z,he.capture=xe,he.eventName=D,B&&(he.originalDelegate=F),S?ye.unshift(he):ye.push(he),g?Z:void 0}};return y[i]=u(I,v,c,t,A),Y&&(y[m]=u(Y,M,function(o){return Y.call(d.target,d.eventName,o.invoke,d.options)},t,A,!0)),y[l]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=arguments[2],R=!!k&&("boolean"==typeof k||k.capture),g=arguments[1];if(!g)return P.apply(this,arguments);if(G&&!G(P,g,o,arguments))return;const S=te[f];let Z;S&&(Z=S[R?ie:ce]);const D=Z&&o[Z];if(D)for(let F=0;F<D.length;F++){const B=D[F];if(w(B,g))return D.splice(F,1),B.isRemoved=!0,0===D.length&&(B.allRemoved=!0,o[Z]=null,"string"==typeof f)&&(o[me+"ON_PROPERTY"+f]=null),B.zone.cancelTask(B),A?o:void 0}return P.apply(this,arguments)},y[p]=function(){const o=this||e;let f=arguments[0];T&&T.transferEventName&&(f=T.transferEventName(f));const k=[],R=Ke(o,V?V(f):f);for(let g=0;g<R.length;g++){const S=R[g];k.push(S.originalDelegate?S.originalDelegate:S.callback)}return k},y[E]=function(){const o=this||e;let f=arguments[0];if(f){T&&T.transferEventName&&(f=T.transferEventName(f));const k=te[f];if(k){const S=o[k[ce]],Z=o[k[ie]];if(S){const D=S.slice();for(let F=0;F<D.length;F++){const B=D[F];this[l].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}if(Z){const D=Z.slice();for(let F=0;F<D.length;F++){const B=D[F];this[l].call(this,f,B.originalDelegate?B.originalDelegate:B.callback,B.options)}}}}else{const k=Object.keys(o);for(let R=0;R<k.length;R++){const S=Ye.exec(k[R]);let Z=S&&S[1];Z&&"removeListener"!==Z&&this[E].call(this,Z)}this[E].call(this,"removeListener")}if(A)return this},le(y[i],I),le(y[l],P),oe&&le(y[E],oe),Q&&le(y[p],Q),!0}let X=[];for(let C=0;C<s.length;C++)X[C]=K(s[C],r);return X}function Ke(e,n){if(!n){const l=[];for(let p in e){const E=Ye.exec(p);let b=E&&E[1];if(b&&(!n||b===n)){const v=e[p];if(v)for(let m=0;m<v.length;m++)l.push(v[m])}}return l}let s=te[n];s||(Je(n),s=te[n]);const r=e[s[ce]],i=e[s[ie]];return r?i?r.concat(i):r.slice():i?i.slice():[]}function _t(e,n){const s=e.Event;s&&s.prototype&&n.patchMethod(s.prototype,"stopImmediatePropagation",r=>function(i,l){i[$e]=!0,r&&r.apply(i,l)})}function Et(e,n,s,r,i){const l=Zone.__symbol__(r);if(n[l])return;const p=n[l]=n[r];n[r]=function(E,b,v){return b&&b.prototype&&i.forEach(function(m){const M=`${s}.${r}::`+m,O=b.prototype;try{if(O.hasOwnProperty(m)){const N=e.ObjectGetOwnPropertyDescriptor(O,m);N&&N.value?(N.value=e.wrapWithCurrentZone(N.value,M),e._redefineProperty(b.prototype,m,N)):O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],M))}else O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],M))}catch{}}),p.call(n,E,b,v)},e.attachOriginToPatched(n[r],p)}function Qe(e,n,s){if(!s||0===s.length)return n;const r=s.filter(l=>l.target===e);if(!r||0===r.length)return n;const i=r[0].ignoreProperties;return n.filter(l=>-1===i.indexOf(l))}function et(e,n,s,r){e&&qe(e,Qe(e,n,s),r)}function He(e){return Object.getOwnPropertyNames(e).filter(n=>n.startsWith("on")&&n.length>2).map(n=>n.substring(2))}Zone.__load_patch("util",(e,n,s)=>{const r=He(e);s.patchOnProperties=qe,s.patchMethod=ae,s.bindArguments=Le,s.patchMacroTask=lt;const i=n.__symbol__("BLACK_LISTED_EVENTS"),l=n.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[i]=e[l]),e[i]&&(n[i]=n[l]=e[i]),s.patchEventPrototype=_t,s.patchEventTarget=dt,s.isIEOrEdge=ft,s.ObjectDefineProperty=pe,s.ObjectGetOwnPropertyDescriptor=ue,s.ObjectCreate=Se,s.ArraySlice=it,s.patchClass=ge,s.wrapWithCurrentZone=Ie,s.filterProperties=Qe,s.attachOriginToPatched=le,s._redefineProperty=Object.defineProperty,s.patchCallbacks=Et,s.getGlobalObjects=()=>({globalSources:ze,zoneSymbolEventNames:te,eventNames:r,isBrowser:Ae,isMix:Be,isNode:Pe,TRUE_STR:ie,FALSE_STR:ce,ZONE_SYMBOL_PREFIX:me,ADD_EVENT_LISTENER_STR:Ze,REMOVE_EVENT_LISTENER_STR:De})});const Re=H("zoneTask");function Te(e,n,s,r){let i=null,l=null;s+=r;const p={};function E(v){const m=v.data;return m.args[0]=function(){return v.invoke.apply(this,arguments)},m.handleId=i.apply(e,m.args),v}function b(v){return l.call(e,v.data.handleId)}i=ae(e,n+=r,v=>function(m,M){if("function"==typeof M[0]){const O={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?M[1]||0:void 0,args:M},N=M[0];M[0]=function(){try{return N.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete p[O.handleId]:O.handleId&&(O.handleId[Re]=null))}};const U=Me(n,M[0],O,E,b);if(!U)return U;const x=U.data.handleId;return"number"==typeof x?p[x]=U:x&&(x[Re]=U),x&&x.ref&&x.unref&&"function"==typeof x.ref&&"function"==typeof x.unref&&(U.ref=x.ref.bind(x),U.unref=x.unref.bind(x)),"number"==typeof x||x?x:U}return v.apply(e,M)}),l=ae(e,s,v=>function(m,M){const O=M[0];let N;"number"==typeof O?N=p[O]:(N=O&&O[Re],N||(N=O)),N&&"string"==typeof N.type?"notScheduled"!==N.state&&(N.cancelFn&&N.data.isPeriodic||0===N.runCount)&&("number"==typeof O?delete p[O]:O&&(O[Re]=null),N.zone.cancelTask(N)):v.apply(e,M)})}Zone.__load_patch("legacy",e=>{const n=e[Zone.__symbol__("legacyPatch")];n&&n()}),Zone.__load_patch("timers",e=>{const n="set",s="clear";Te(e,n,s,"Timeout"),Te(e,n,s,"Interval"),Te(e,n,s,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{Te(e,"request","cancel","AnimationFrame"),Te(e,"mozRequest","mozCancel","AnimationFrame"),Te(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,n)=>{const s=["alert","prompt","confirm"];for(let r=0;r<s.length;r++)ae(e,s[r],(l,p,E)=>function(b,v){return n.current.run(l,e,v,E)})}),Zone.__load_patch("EventTarget",(e,n,s)=>{(function gt(e,n){n.patchEventPrototype(e,n)})(e,s),function mt(e,n){if(Zone[n.symbol("patchEventTarget")])return;const{eventNames:s,zoneSymbolEventNames:r,TRUE_STR:i,FALSE_STR:l,ZONE_SYMBOL_PREFIX:p}=n.getGlobalObjects();for(let b=0;b<s.length;b++){const v=s[b],O=p+(v+l),N=p+(v+i);r[v]={},r[v][l]=O,r[v][i]=N}const E=e.EventTarget;E&&E.prototype&&n.patchEventTarget(e,n,[E&&E.prototype])}(e,s);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&s.patchEventTarget(e,s,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,n,s)=>{ge("MutationObserver"),ge("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,n,s)=>{ge("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,n,s)=>{ge("FileReader")}),Zone.__load_patch("on_property",(e,n,s)=>{!function Tt(e,n){if(Pe&&!Be||Zone[e.symbol("patchEvents")])return;const s=n.__Zone_ignore_on_properties;let r=[];if(Ae){const i=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ut(){try{const e=_e.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:i,ignoreProperties:["error"]}]:[];et(i,He(i),s&&s.concat(l),ve(i))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let i=0;i<r.length;i++){const l=n[r[i]];l&&l.prototype&&et(l.prototype,He(l.prototype),s)}}(s,e)}),Zone.__load_patch("customElements",(e,n,s)=>{!function pt(e,n){const{isBrowser:s,isMix:r}=n.getGlobalObjects();(s||r)&&e.customElements&&"customElements"in e&&n.patchCallbacks(n,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,s)}),Zone.__load_patch("XHR",(e,n)=>{!function b(v){const m=v.XMLHttpRequest;if(!m)return;const M=m.prototype;let N=M[Oe],U=M[Ne];if(!N){const d=v.XMLHttpRequestEventTarget;if(d){const I=d.prototype;N=I[Oe],U=I[Ne]}}const x="readystatechange",K="scheduled";function X(d){const I=d.data,P=I.target;P[l]=!1,P[E]=!1;const Q=P[i];N||(N=P[Oe],U=P[Ne]),Q&&U.call(P,x,Q);const oe=P[i]=()=>{if(P.readyState===P.DONE)if(!I.aborted&&P[l]&&d.state===K){const W=P[n.__symbol__("loadfalse")];if(0!==P.status&&W&&W.length>0){const re=d.invoke;d.invoke=function(){const ee=P[n.__symbol__("loadfalse")];for(let q=0;q<ee.length;q++)ee[q]===d&&ee.splice(q,1);!I.aborted&&d.state===K&&re.call(d)},W.push(d)}else d.invoke()}else!I.aborted&&!1===P[l]&&(P[E]=!0)};return N.call(P,x,oe),P[s]||(P[s]=d),y.apply(P,I.args),P[l]=!0,d}function C(){}function T(d){const I=d.data;return I.aborted=!0,V.apply(I.target,I.args)}const J=ae(M,"open",()=>function(d,I){return d[r]=0==I[2],d[p]=I[1],J.apply(d,I)}),z=H("fetchTaskAborting"),A=H("fetchTaskScheduling"),y=ae(M,"send",()=>function(d,I){if(!0===n.current[A]||d[r])return y.apply(d,I);{const P={target:d,url:d[p],isPeriodic:!1,args:I,aborted:!1},Q=Me("XMLHttpRequest.send",C,P,X,T);d&&!0===d[E]&&!P.aborted&&Q.state===K&&Q.invoke()}}),V=ae(M,"abort",()=>function(d,I){const P=function O(d){return d[s]}(d);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===n.current[z])return V.apply(d,I)})}(e);const s=H("xhrTask"),r=H("xhrSync"),i=H("xhrListener"),l=H("xhrScheduled"),p=H("xhrURL"),E=H("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,n){const s=e.constructor.name;for(let r=0;r<n.length;r++){const i=n[r],l=e[i];if(l){if(!Ve(ue(e,i)))continue;e[i]=(E=>{const b=function(){return E.apply(this,Le(arguments,s+"."+i))};return le(b,E),b})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,n)=>{function s(r){return function(i){Ke(e,r).forEach(p=>{const E=e.PromiseRejectionEvent;if(E){const b=new E(r,{promise:i.promise,reason:i.rejection});p.invoke(b)}})}}e.PromiseRejectionEvent&&(n[H("unhandledPromiseRejectionHandler")]=s("unhandledrejection"),n[H("rejectionHandledHandler")]=s("rejectionhandled"))}),Zone.__load_patch("queueMicrotask",(e,n,s)=>{!function yt(e,n){n.patchMethod(e,"queueMicrotask",s=>function(r,i){Zone.current.scheduleMicroTask("queueMicrotask",i[0])})}(e,s)})}},ue=>{ue(ue.s=332)}]);