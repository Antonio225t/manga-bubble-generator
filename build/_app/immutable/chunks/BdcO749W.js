import{V as H,W as R,X as A,J as M,Y as P,G as V,Z as b,_ as $,$ as q,a0 as C,a1 as T,O as g,N as D,K as W,c as p,a2 as j,a3 as B,a4 as G,a5 as J,a6 as K,a7 as X,a8 as Z,a as z,q as F,e as Q,h as E,v as U}from"./B7lGpz4L.js";import{b as x}from"./gfAqA_ez.js";const rr=["touchstart","touchmove"];function ar(r){return rr.includes(r)}const I=new Set,N=new Set;function sr(r){for(var a=0;a<r.length;a++)I.add(r[a]);for(var t of N)t(r)}function m(r){var O;var a=this,t=a.ownerDocument,c=r.type,i=((O=r.composedPath)==null?void 0:O.call(r))||[],e=i[0]||r.target,d=0,_=r.__root;if(_){var u=i.indexOf(_);if(u!==-1&&(a===document||a===window)){r.__root=a;return}var h=i.indexOf(a);if(h===-1)return;u<=h&&(d=u)}if(e=i[d]||r.target,e!==a){H(r,"currentTarget",{configurable:!0,get(){return e||t}});var w=P,o=V;R(null),A(null);try{for(var n,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(M(l)){var[Y,...k]=l;Y.apply(e,[r,...k])}else l.call(e,r)}catch(y){n?s.push(y):n=y}if(r.cancelBubble||f===a||f===null)break;e=f}if(n){for(let y of s)queueMicrotask(()=>{throw y});throw n}}finally{r.__root=a,delete r.currentTarget,R(w),A(o)}}}function or(r,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=t,r.nodeValue=t+"")}function er(r,a){return L(r,a)}function ir(r,a){b(),a.intro=a.intro??!1;const t=a.target,c=E,i=p;try{for(var e=$(t);e&&(e.nodeType!==8||e.data!==q);)e=C(e);if(!e)throw T;g(!0),D(e),W();const d=L(r,{...a,anchor:e});if(p===null||p.nodeType!==8||p.data!==j)throw B(),T;return g(!1),d}catch(d){if(d===T)return a.recover===!1&&G(),b(),J(t),g(!1),er(r,a);throw d}finally{g(c),D(i)}}const v=new Map;function L(r,{target:a,anchor:t,props:c={},events:i,context:e,intro:d=!0}){b();var _=new Set,u=o=>{for(var n=0;n<o.length;n++){var s=o[n];if(!_.has(s)){_.add(s);var f=ar(s);a.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(K(I)),N.add(u);var h=void 0,w=X(()=>{var o=t??a.appendChild(Z());return z(()=>{if(e){F({});var n=Q;n.c=e}i&&(c.$$events=i),E&&x(o,null),h=r(o,c)||{},E&&(V.nodes_end=p),e&&U()}),()=>{var f;for(var n of _){a.removeEventListener(n,m);var s=v.get(n);--s===0?(document.removeEventListener(n,m),v.delete(n)):v.set(n,s)}N.delete(u),o!==t&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function fr(r,a){const t=S.get(r);return t?(S.delete(r),t(a)):Promise.resolve()}export{sr as d,ir as h,er as m,or as s,fr as u};
