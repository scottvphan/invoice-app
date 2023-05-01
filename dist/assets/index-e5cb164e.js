var S1=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var VI=S1((XI,Ol)=>{function b1(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function C1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pl={},D1={get exports(){return Pl},set exports(e){Pl=e}},Pu={},T={},E1={get exports(){return T},set exports(e){T=e}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),T1=Symbol.for("react.portal"),O1=Symbol.for("react.fragment"),P1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),M1=Symbol.for("react.provider"),I1=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),N1=Symbol.for("react.suspense"),z1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),Xp=Symbol.iterator;function L1(e){return e===null||typeof e!="object"?null:(e=Xp&&e[Xp]||e["@@iterator"],typeof e=="function"?e:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cy=Object.assign,Dy={};function to(e,t,n){this.props=e,this.context=t,this.refs=Dy,this.updater=n||by}to.prototype.isReactComponent={};to.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};to.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ey(){}Ey.prototype=to.prototype;function hh(e,t,n){this.props=e,this.context=t,this.refs=Dy,this.updater=n||by}var ph=hh.prototype=new Ey;ph.constructor=hh;Cy(ph,to.prototype);ph.isPureReactComponent=!0;var Qp=Array.isArray,Ty=Object.prototype.hasOwnProperty,mh={current:null},Oy={key:!0,ref:!0,__self:!0,__source:!0};function Py(e,t,n){var r,i={},a=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(a=""+t.key),t)Ty.call(t,r)&&!Oy.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ks,type:e,key:a,ref:o,props:i,_owner:mh.current}}function j1(e,t){return{$$typeof:ks,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function gh(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function $1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jp=/\/+/g;function Ic(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$1(""+e.key):t.toString(36)}function cl(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ks:case T1:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ic(o,0):r,Qp(i)?(n="",e!=null&&(n=e.replace(Jp,"$&/")+"/"),cl(i,t,n,"",function(u){return u})):i!=null&&(gh(i)&&(i=j1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Ic(a,s);o+=cl(a,t,n,l,i)}else if(l=L1(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Ic(a,s++),o+=cl(a,t,n,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function $s(e,t,n){if(e==null)return e;var r=[],i=0;return cl(e,r,"","",function(a){return t.call(n,a,i++)}),r}function U1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var en={current:null},dl={transition:null},B1={ReactCurrentDispatcher:en,ReactCurrentBatchConfig:dl,ReactCurrentOwner:mh};ze.Children={map:$s,forEach:function(e,t,n){$s(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $s(e,function(){t++}),t},toArray:function(e){return $s(e,function(t){return t})||[]},only:function(e){if(!gh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ze.Component=to;ze.Fragment=O1;ze.Profiler=A1;ze.PureComponent=hh;ze.StrictMode=P1;ze.Suspense=N1;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;ze.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cy({},e.props),i=e.key,a=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,o=mh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)Ty.call(t,l)&&!Oy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:ks,type:e.type,key:i,ref:a,props:r,_owner:o}};ze.createContext=function(e){return e={$$typeof:I1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M1,_context:e},e.Consumer=e};ze.createElement=Py;ze.createFactory=function(e){var t=Py.bind(null,e);return t.type=e,t};ze.createRef=function(){return{current:null}};ze.forwardRef=function(e){return{$$typeof:R1,render:e}};ze.isValidElement=gh;ze.lazy=function(e){return{$$typeof:F1,_payload:{_status:-1,_result:e},_init:U1}};ze.memo=function(e,t){return{$$typeof:z1,type:e,compare:t===void 0?null:t}};ze.startTransition=function(e){var t=dl.transition;dl.transition={};try{e()}finally{dl.transition=t}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(e,t){return en.current.useCallback(e,t)};ze.useContext=function(e){return en.current.useContext(e)};ze.useDebugValue=function(){};ze.useDeferredValue=function(e){return en.current.useDeferredValue(e)};ze.useEffect=function(e,t){return en.current.useEffect(e,t)};ze.useId=function(){return en.current.useId()};ze.useImperativeHandle=function(e,t,n){return en.current.useImperativeHandle(e,t,n)};ze.useInsertionEffect=function(e,t){return en.current.useInsertionEffect(e,t)};ze.useLayoutEffect=function(e,t){return en.current.useLayoutEffect(e,t)};ze.useMemo=function(e,t){return en.current.useMemo(e,t)};ze.useReducer=function(e,t,n){return en.current.useReducer(e,t,n)};ze.useRef=function(e){return en.current.useRef(e)};ze.useState=function(e){return en.current.useState(e)};ze.useSyncExternalStore=function(e,t,n){return en.current.useSyncExternalStore(e,t,n)};ze.useTransition=function(){return en.current.useTransition()};ze.version="18.2.0";(function(e){e.exports=ze})(E1);const ye=C1(T),jd=b1({__proto__:null,default:ye},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=T,Y1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),H1=Object.prototype.hasOwnProperty,Z1=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G1={key:!0,ref:!0,__self:!0,__source:!0};function Ay(e,t,n){var r,i={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)H1.call(t,r)&&!G1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Y1,type:e,key:a,ref:o,props:i,_owner:Z1.current}}Pu.Fragment=W1;Pu.jsx=Ay;Pu.jsxs=Ay;(function(e){e.exports=Pu})(D1);const y=Pl.jsx,R=Pl.jsxs;var $d={},Ud={},K1={get exports(){return Ud},set exports(e){Ud=e}},wn={},Bd={},q1={get exports(){return Bd},set exports(e){Bd=e}},My={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(V,Q){var ue=V.length;V.push(Q);e:for(;0<ue;){var Ne=ue-1>>>1,H=V[Ne];if(0<i(H,Q))V[Ne]=Q,V[ue]=H,ue=Ne;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Q=V[0],ue=V.pop();if(ue!==Q){V[0]=ue;e:for(var Ne=0,H=V.length,Z=H>>>1;Ne<Z;){var J=2*(Ne+1)-1,ge=V[J],b=J+1,ee=V[b];if(0>i(ge,ue))b<H&&0>i(ee,ge)?(V[Ne]=ee,V[b]=ue,Ne=b):(V[Ne]=ge,V[J]=ue,Ne=J);else if(b<H&&0>i(ee,ue))V[Ne]=ee,V[b]=ue,Ne=b;else break e}}return Q}function i(V,Q){var ue=V.sortIndex-Q.sortIndex;return ue!==0?ue:V.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,f=3,x=!1,v=!1,p=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(V){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=V)r(u),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=n(u)}}function C(V){if(p=!1,g(V),!v)if(n(l)!==null)v=!0,Xe(w);else{var Q=n(u);Q!==null&&Ve(C,Q.startTime-V)}}function w(V,Q){v=!1,p&&(p=!1,m(M),M=-1),x=!0;var ue=f;try{for(g(Q),d=n(l);d!==null&&(!(d.expirationTime>Q)||V&&!$());){var Ne=d.callback;if(typeof Ne=="function"){d.callback=null,f=d.priorityLevel;var H=Ne(d.expirationTime<=Q);Q=e.unstable_now(),typeof H=="function"?d.callback=H:d===n(l)&&r(l),g(Q)}else r(l);d=n(l)}if(d!==null)var Z=!0;else{var J=n(u);J!==null&&Ve(C,J.startTime-Q),Z=!1}return Z}finally{d=null,f=ue,x=!1}}var D=!1,E=null,M=-1,W=5,z=-1;function $(){return!(e.unstable_now()-z<W)}function ae(){if(E!==null){var V=e.unstable_now();z=V;var Q=!0;try{Q=E(!0,V)}finally{Q?oe():(D=!1,E=null)}}else D=!1}var oe;if(typeof h=="function")oe=function(){h(ae)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Me=ke.port2;ke.port1.onmessage=ae,oe=function(){Me.postMessage(null)}}else oe=function(){S(ae,0)};function Xe(V){E=V,D||(D=!0,oe())}function Ve(V,Q){M=S(function(){V(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Xe(w))},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(V){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var ue=f;f=Q;try{return V()}finally{f=ue}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(V,Q){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ue=f;f=V;try{return Q()}finally{f=ue}},e.unstable_scheduleCallback=function(V,Q,ue){var Ne=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?Ne+ue:Ne):ue=Ne,V){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ue+H,V={id:c++,callback:Q,priorityLevel:V,startTime:ue,expirationTime:H,sortIndex:-1},ue>Ne?(V.sortIndex=ue,t(u,V),n(l)===null&&V===n(u)&&(p?(m(M),M=-1):p=!0,Ve(C,ue-Ne))):(V.sortIndex=H,t(l,V),v||x||(v=!0,Xe(w))),V},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(V){var Q=f;return function(){var ue=f;f=Q;try{return V.apply(this,arguments)}finally{f=ue}}}})(My);(function(e){e.exports=My})(q1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iy=T,xn=Bd;function U(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ry=new Set,Bo={};function Qi(e,t){Va(e,t),Va(e+"Capture",t)}function Va(e,t){for(Bo[e]=t,e=0;e<t.length;e++)Ry.add(t[e])}var zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vd=Object.prototype.hasOwnProperty,X1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function Q1(e){return Vd.call(tm,e)?!0:Vd.call(em,e)?!1:X1.test(e)?tm[e]=!0:(em[e]=!0,!1)}function J1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function e_(e,t,n,r){if(t===null||typeof t>"u"||J1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function tn(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ft[e]=new tn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ft[t]=new tn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ft[e]=new tn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ft[e]=new tn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ft[e]=new tn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ft[e]=new tn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ft[e]=new tn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ft[e]=new tn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ft[e]=new tn(e,5,!1,e.toLowerCase(),null,!1,!1)});var yh=/[\-:]([a-z])/g;function vh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yh,vh);Ft[t]=new tn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yh,vh);Ft[t]=new tn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yh,vh);Ft[t]=new tn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ft[e]=new tn(e,1,!1,e.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new tn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ft[e]=new tn(e,1,!1,e.toLowerCase(),null,!0,!0)});function xh(e,t,n,r){var i=Ft.hasOwnProperty(t)?Ft[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(e_(t,n,i,r)&&(n=null),r||i===null?Q1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vr=Iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),ha=Symbol.for("react.portal"),pa=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Ny=Symbol.for("react.provider"),zy=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),Fy=Symbol.for("react.offscreen"),nm=Symbol.iterator;function co(e){return e===null||typeof e!="object"?null:(e=nm&&e[nm]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Object.assign,Rc;function Co(e){if(Rc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Rc=t&&t[1]||""}return`
`+Rc+e}var Nc=!1;function zc(e,t){if(!e||Nc)return"";Nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Nc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Co(e):""}function t_(e){switch(e.tag){case 5:return Co(e.type);case 16:return Co("Lazy");case 13:return Co("Suspense");case 19:return Co("SuspenseList");case 0:case 2:case 15:return e=zc(e.type,!1),e;case 11:return e=zc(e.type.render,!1),e;case 1:return e=zc(e.type,!0),e;default:return""}}function Zd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pa:return"Fragment";case ha:return"Portal";case Yd:return"Profiler";case wh:return"StrictMode";case Wd:return"Suspense";case Hd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zy:return(e.displayName||"Context")+".Consumer";case Ny:return(e._context.displayName||"Context")+".Provider";case _h:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kh:return t=e.displayName||null,t!==null?t:Zd(e.type)||"Memo";case qr:t=e._payload,e=e._init;try{return Zd(e(t))}catch{}}return null}function n_(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zd(t);case 8:return t===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ly(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r_(e){var t=Ly(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bs(e){e._valueTracker||(e._valueTracker=r_(e))}function jy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ly(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gd(e,t){var n=t.checked;return ft({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function rm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=gi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $y(e,t){t=t.checked,t!=null&&xh(e,"checked",t,!1)}function Kd(e,t){$y(e,t);var n=gi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qd(e,t.type,n):t.hasOwnProperty("defaultValue")&&qd(e,t.type,gi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function im(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qd(e,t,n){(t!=="number"||Al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Do=Array.isArray;function Aa(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+gi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(U(91));return ft({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function am(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(U(92));if(Do(n)){if(1<n.length)throw Error(U(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:gi(n)}}function Uy(e,t){var n=gi(t.value),r=gi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function om(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function By(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?By(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vs,Vy=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vs=Vs||document.createElement("div"),Vs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(e){i_.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oo[t]=Oo[e]})});function Yy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Oo.hasOwnProperty(e)&&Oo[e]?(""+t).trim():t+"px"}function Wy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var a_=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jd(e,t){if(t){if(a_[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(U(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(U(61))}if(t.style!=null&&typeof t.style!="object")throw Error(U(62))}}function ef(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function Sh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nf=null,Ma=null,Ia=null;function sm(e){if(e=Cs(e)){if(typeof nf!="function")throw Error(U(280));var t=e.stateNode;t&&(t=Nu(t),nf(e.stateNode,e.type,t))}}function Hy(e){Ma?Ia?Ia.push(e):Ia=[e]:Ma=e}function Zy(){if(Ma){var e=Ma,t=Ia;if(Ia=Ma=null,sm(e),t)for(e=0;e<t.length;e++)sm(t[e])}}function Gy(e,t){return e(t)}function Ky(){}var Fc=!1;function qy(e,t,n){if(Fc)return e(t,n);Fc=!0;try{return Gy(e,t,n)}finally{Fc=!1,(Ma!==null||Ia!==null)&&(Ky(),Zy())}}function Yo(e,t){var n=e.stateNode;if(n===null)return null;var r=Nu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(U(231,t,typeof n));return n}var rf=!1;if(zr)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){rf=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{rf=!1}function o_(e,t,n,r,i,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Po=!1,Ml=null,Il=!1,af=null,s_={onError:function(e){Po=!0,Ml=e}};function l_(e,t,n,r,i,a,o,s,l){Po=!1,Ml=null,o_.apply(s_,arguments)}function u_(e,t,n,r,i,a,o,s,l){if(l_.apply(this,arguments),Po){if(Po){var u=Ml;Po=!1,Ml=null}else throw Error(U(198));Il||(Il=!0,af=u)}}function Ji(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Xy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lm(e){if(Ji(e)!==e)throw Error(U(188))}function c_(e){var t=e.alternate;if(!t){if(t=Ji(e),t===null)throw Error(U(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return lm(i),e;if(a===r)return lm(i),t;a=a.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?e:t}function Qy(e){return e=c_(e),e!==null?Jy(e):null}function Jy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jy(e);if(t!==null)return t;e=e.sibling}return null}var e0=xn.unstable_scheduleCallback,um=xn.unstable_cancelCallback,d_=xn.unstable_shouldYield,f_=xn.unstable_requestPaint,xt=xn.unstable_now,h_=xn.unstable_getCurrentPriorityLevel,bh=xn.unstable_ImmediatePriority,t0=xn.unstable_UserBlockingPriority,Rl=xn.unstable_NormalPriority,p_=xn.unstable_LowPriority,n0=xn.unstable_IdlePriority,Au=null,dr=null;function m_(e){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(Au,e,void 0,(e.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:v_,g_=Math.log,y_=Math.LN2;function v_(e){return e>>>=0,e===0?32:31-(g_(e)/y_|0)|0}var Ys=64,Ws=4194304;function Eo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=Eo(s):(a&=o,a!==0&&(r=Eo(a)))}else o=n&~i,o!==0?r=Eo(o):a!==0&&(r=Eo(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Yn(t),i=1<<n,r|=e[n],t&=~i;return r}function x_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-Yn(a),s=1<<o,l=i[o];l===-1?(!(s&n)||s&r)&&(i[o]=x_(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function of(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function r0(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function Lc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ss(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yn(t),e[t]=n}function __(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Yn(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Ch(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Yn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var He=0;function i0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var a0,Dh,o0,s0,l0,sf=!1,Hs=[],oi=null,si=null,li=null,Wo=new Map,Ho=new Map,Qr=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cm(e,t){switch(e){case"focusin":case"focusout":oi=null;break;case"dragenter":case"dragleave":si=null;break;case"mouseover":case"mouseout":li=null;break;case"pointerover":case"pointerout":Wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function ho(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Cs(t),t!==null&&Dh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function S_(e,t,n,r,i){switch(t){case"focusin":return oi=ho(oi,e,t,n,r,i),!0;case"dragenter":return si=ho(si,e,t,n,r,i),!0;case"mouseover":return li=ho(li,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Wo.set(a,ho(Wo.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ho.set(a,ho(Ho.get(a)||null,e,t,n,r,i)),!0}return!1}function u0(e){var t=Pi(e.target);if(t!==null){var n=Ji(t);if(n!==null){if(t=n.tag,t===13){if(t=Xy(n),t!==null){e.blockedOn=t,l0(e.priority,function(){o0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tf=r,n.target.dispatchEvent(r),tf=null}else return t=Cs(n),t!==null&&Dh(t),e.blockedOn=n,!1;t.shift()}return!0}function dm(e,t,n){fl(e)&&n.delete(t)}function b_(){sf=!1,oi!==null&&fl(oi)&&(oi=null),si!==null&&fl(si)&&(si=null),li!==null&&fl(li)&&(li=null),Wo.forEach(dm),Ho.forEach(dm)}function po(e,t){e.blockedOn===t&&(e.blockedOn=null,sf||(sf=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,b_)))}function Zo(e){function t(i){return po(i,e)}if(0<Hs.length){po(Hs[0],e);for(var n=1;n<Hs.length;n++){var r=Hs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(oi!==null&&po(oi,e),si!==null&&po(si,e),li!==null&&po(li,e),Wo.forEach(t),Ho.forEach(t),n=0;n<Qr.length;n++)r=Qr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qr.length&&(n=Qr[0],n.blockedOn===null);)u0(n),n.blockedOn===null&&Qr.shift()}var Ra=Vr.ReactCurrentBatchConfig,zl=!0;function C_(e,t,n,r){var i=He,a=Ra.transition;Ra.transition=null;try{He=1,Eh(e,t,n,r)}finally{He=i,Ra.transition=a}}function D_(e,t,n,r){var i=He,a=Ra.transition;Ra.transition=null;try{He=4,Eh(e,t,n,r)}finally{He=i,Ra.transition=a}}function Eh(e,t,n,r){if(zl){var i=lf(e,t,n,r);if(i===null)Gc(e,t,r,Fl,n),cm(e,r);else if(S_(i,e,t,n,r))r.stopPropagation();else if(cm(e,r),t&4&&-1<k_.indexOf(e)){for(;i!==null;){var a=Cs(i);if(a!==null&&a0(a),a=lf(e,t,n,r),a===null&&Gc(e,t,r,Fl,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gc(e,t,r,null,n)}}var Fl=null;function lf(e,t,n,r){if(Fl=null,e=Sh(r),e=Pi(e),e!==null)if(t=Ji(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Xy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fl=e,null}function c0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h_()){case bh:return 1;case t0:return 4;case Rl:case p_:return 16;case n0:return 536870912;default:return 16}default:return 16}}var ti=null,Th=null,hl=null;function d0(){if(hl)return hl;var e,t=Th,n=t.length,r,i="value"in ti?ti.value:ti.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return hl=i.slice(e,1<r?1-r:void 0)}function pl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zs(){return!0}function fm(){return!1}function _n(e){function t(n,r,i,a,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Zs:fm,this.isPropagationStopped=fm,this}return ft(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zs)},persist:function(){},isPersistent:Zs}),t}var no={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oh=_n(no),bs=ft({},no,{view:0,detail:0}),E_=_n(bs),jc,$c,mo,Mu=ft({},bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(jc=e.screenX-mo.screenX,$c=e.screenY-mo.screenY):$c=jc=0,mo=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:$c}}),hm=_n(Mu),T_=ft({},Mu,{dataTransfer:0}),O_=_n(T_),P_=ft({},bs,{relatedTarget:0}),Uc=_n(P_),A_=ft({},no,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=_n(A_),I_=ft({},no,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R_=_n(I_),N_=ft({},no,{data:0}),pm=_n(N_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},L_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=L_[e])?!!t[e]:!1}function Ph(){return j_}var $_=ft({},bs,{key:function(e){if(e.key){var t=z_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),U_=_n($_),B_=ft({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=_n(B_),V_=ft({},bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),Y_=_n(V_),W_=ft({},no,{propertyName:0,elapsedTime:0,pseudoElement:0}),H_=_n(W_),Z_=ft({},Mu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G_=_n(Z_),K_=[9,13,27,32],Ah=zr&&"CompositionEvent"in window,Ao=null;zr&&"documentMode"in document&&(Ao=document.documentMode);var q_=zr&&"TextEvent"in window&&!Ao,f0=zr&&(!Ah||Ao&&8<Ao&&11>=Ao),gm=String.fromCharCode(32),ym=!1;function h0(e,t){switch(e){case"keyup":return K_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ma=!1;function X_(e,t){switch(e){case"compositionend":return p0(t);case"keypress":return t.which!==32?null:(ym=!0,gm);case"textInput":return e=t.data,e===gm&&ym?null:e;default:return null}}function Q_(e,t){if(ma)return e==="compositionend"||!Ah&&h0(e,t)?(e=d0(),hl=Th=ti=null,ma=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return f0&&t.locale!=="ko"?null:t.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!J_[e.type]:t==="textarea"}function m0(e,t,n,r){Hy(r),t=Ll(t,"onChange"),0<t.length&&(n=new Oh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mo=null,Go=null;function ek(e){D0(e,0)}function Iu(e){var t=va(e);if(jy(t))return e}function tk(e,t){if(e==="change")return t}var g0=!1;if(zr){var Bc;if(zr){var Vc="oninput"in document;if(!Vc){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Vc=typeof xm.oninput=="function"}Bc=Vc}else Bc=!1;g0=Bc&&(!document.documentMode||9<document.documentMode)}function wm(){Mo&&(Mo.detachEvent("onpropertychange",y0),Go=Mo=null)}function y0(e){if(e.propertyName==="value"&&Iu(Go)){var t=[];m0(t,Go,e,Sh(e)),qy(ek,t)}}function nk(e,t,n){e==="focusin"?(wm(),Mo=t,Go=n,Mo.attachEvent("onpropertychange",y0)):e==="focusout"&&wm()}function rk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(Go)}function ik(e,t){if(e==="click")return Iu(t)}function ak(e,t){if(e==="input"||e==="change")return Iu(t)}function ok(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Gn=typeof Object.is=="function"?Object.is:ok;function Ko(e,t){if(Gn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vd.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function _m(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function km(e,t){var n=_m(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function v0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function x0(){for(var e=window,t=Al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Al(e.document)}return t}function Mh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sk(e){var t=x0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&Mh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=km(n,a);var o=km(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var lk=zr&&"documentMode"in document&&11>=document.documentMode,ga=null,uf=null,Io=null,cf=!1;function Sm(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cf||ga==null||ga!==Al(r)||(r=ga,"selectionStart"in r&&Mh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Ko(Io,r)||(Io=r,r=Ll(uf,"onSelect"),0<r.length&&(t=new Oh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ga)))}function Gs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ya={animationend:Gs("Animation","AnimationEnd"),animationiteration:Gs("Animation","AnimationIteration"),animationstart:Gs("Animation","AnimationStart"),transitionend:Gs("Transition","TransitionEnd")},Yc={},w0={};zr&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Ru(e){if(Yc[e])return Yc[e];if(!ya[e])return e;var t=ya[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in w0)return Yc[e]=t[n];return e}var _0=Ru("animationend"),k0=Ru("animationiteration"),S0=Ru("animationstart"),b0=Ru("transitionend"),C0=new Map,bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(e,t){C0.set(e,t),Qi(t,[e])}for(var Wc=0;Wc<bm.length;Wc++){var Hc=bm[Wc],uk=Hc.toLowerCase(),ck=Hc[0].toUpperCase()+Hc.slice(1);_i(uk,"on"+ck)}_i(_0,"onAnimationEnd");_i(k0,"onAnimationIteration");_i(S0,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(b0,"onTransitionEnd");Va("onMouseEnter",["mouseout","mouseover"]);Va("onMouseLeave",["mouseout","mouseover"]);Va("onPointerEnter",["pointerout","pointerover"]);Va("onPointerLeave",["pointerout","pointerover"]);Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dk=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Cm(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,u_(r,t,void 0,e),e.currentTarget=null}function D0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Cm(i,s,u),a=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Cm(i,s,u),a=l}}}if(Il)throw e=af,Il=!1,af=null,e}function tt(e,t){var n=t[mf];n===void 0&&(n=t[mf]=new Set);var r=e+"__bubble";n.has(r)||(E0(t,e,2,!1),n.add(r))}function Zc(e,t,n){var r=0;t&&(r|=4),E0(n,e,r,t)}var Ks="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Ks]){e[Ks]=!0,Ry.forEach(function(n){n!=="selectionchange"&&(dk.has(n)||Zc(n,!1,e),Zc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ks]||(t[Ks]=!0,Zc("selectionchange",!1,t))}}function E0(e,t,n,r){switch(c0(t)){case 1:var i=C_;break;case 4:i=D_;break;default:i=Eh}n=i.bind(null,t,n,e),i=void 0,!rf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Gc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Pi(s),o===null)return;if(l=o.tag,l===5||l===6){r=a=o;continue e}s=s.parentNode}}r=r.return}qy(function(){var u=a,c=Sh(n),d=[];e:{var f=C0.get(e);if(f!==void 0){var x=Oh,v=e;switch(e){case"keypress":if(pl(n)===0)break e;case"keydown":case"keyup":x=U_;break;case"focusin":v="focus",x=Uc;break;case"focusout":v="blur",x=Uc;break;case"beforeblur":case"afterblur":x=Uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=O_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Y_;break;case _0:case k0:case S0:x=M_;break;case b0:x=H_;break;case"scroll":x=E_;break;case"wheel":x=G_;break;case"copy":case"cut":case"paste":x=R_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=mm}var p=(t&4)!==0,S=!p&&e==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var h=u,g;h!==null;){g=h;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,m!==null&&(C=Yo(h,m),C!=null&&p.push(Xo(h,C,g)))),S)break;h=h.return}0<p.length&&(f=new x(f,v,null,n,c),d.push({event:f,listeners:p}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==tf&&(v=n.relatedTarget||n.fromElement)&&(Pi(v)||v[Fr]))break e;if((x||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?Pi(v):null,v!==null&&(S=Ji(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(p=hm,C="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(p=mm,C="onPointerLeave",m="onPointerEnter",h="pointer"),S=x==null?f:va(x),g=v==null?f:va(v),f=new p(C,h+"leave",x,n,c),f.target=S,f.relatedTarget=g,C=null,Pi(c)===u&&(p=new p(m,h+"enter",v,n,c),p.target=g,p.relatedTarget=S,C=p),S=C,x&&v)t:{for(p=x,m=v,h=0,g=p;g;g=aa(g))h++;for(g=0,C=m;C;C=aa(C))g++;for(;0<h-g;)p=aa(p),h--;for(;0<g-h;)m=aa(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate)break t;p=aa(p),m=aa(m)}p=null}else p=null;x!==null&&Dm(d,f,x,p,!1),v!==null&&S!==null&&Dm(d,S,v,p,!0)}}e:{if(f=u?va(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var w=tk;else if(vm(f))if(g0)w=ak;else{w=rk;var D=nk}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=ik);if(w&&(w=w(e,u))){m0(d,w,n,c);break e}D&&D(e,f,u),e==="focusout"&&(D=f._wrapperState)&&D.controlled&&f.type==="number"&&qd(f,"number",f.value)}switch(D=u?va(u):window,e){case"focusin":(vm(D)||D.contentEditable==="true")&&(ga=D,uf=u,Io=null);break;case"focusout":Io=uf=ga=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,Sm(d,n,c);break;case"selectionchange":if(lk)break;case"keydown":case"keyup":Sm(d,n,c)}var E;if(Ah)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else ma?h0(e,n)&&(M="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(f0&&n.locale!=="ko"&&(ma||M!=="onCompositionStart"?M==="onCompositionEnd"&&ma&&(E=d0()):(ti=c,Th="value"in ti?ti.value:ti.textContent,ma=!0)),D=Ll(u,M),0<D.length&&(M=new pm(M,e,null,n,c),d.push({event:M,listeners:D}),E?M.data=E:(E=p0(n),E!==null&&(M.data=E)))),(E=q_?X_(e,n):Q_(e,n))&&(u=Ll(u,"onBeforeInput"),0<u.length&&(c=new pm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}D0(d,t)})}function Xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ll(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Yo(e,n),a!=null&&r.unshift(Xo(e,a,i)),a=Yo(e,t),a!=null&&r.push(Xo(e,a,i))),e=e.return}return r}function aa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Dm(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,i?(l=Yo(n,a),l!=null&&o.unshift(Xo(n,l,s))):i||(l=Yo(n,a),l!=null&&o.push(Xo(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var fk=/\r\n?/g,hk=/\u0000|\uFFFD/g;function Em(e){return(typeof e=="string"?e:""+e).replace(fk,`
`).replace(hk,"")}function qs(e,t,n){if(t=Em(t),Em(e)!==t&&n)throw Error(U(425))}function jl(){}var df=null,ff=null;function hf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,pk=typeof clearTimeout=="function"?clearTimeout:void 0,Tm=typeof Promise=="function"?Promise:void 0,mk=typeof queueMicrotask=="function"?queueMicrotask:typeof Tm<"u"?function(e){return Tm.resolve(null).then(e).catch(gk)}:pf;function gk(e){setTimeout(function(){throw e})}function Kc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Zo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zo(t)}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Om(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ro=Math.random().toString(36).slice(2),sr="__reactFiber$"+ro,Qo="__reactProps$"+ro,Fr="__reactContainer$"+ro,mf="__reactEvents$"+ro,yk="__reactListeners$"+ro,vk="__reactHandles$"+ro;function Pi(e){var t=e[sr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fr]||n[sr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Om(e);e!==null;){if(n=e[sr])return n;e=Om(e)}return t}e=n,n=e.parentNode}return null}function Cs(e){return e=e[sr]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function va(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function Nu(e){return e[Qo]||null}var gf=[],xa=-1;function ki(e){return{current:e}}function rt(e){0>xa||(e.current=gf[xa],gf[xa]=null,xa--)}function Qe(e,t){xa++,gf[xa]=e.current,e.current=t}var yi={},Yt=ki(yi),un=ki(!1),Ui=yi;function Ya(e,t){var n=e.type.contextTypes;if(!n)return yi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function cn(e){return e=e.childContextTypes,e!=null}function $l(){rt(un),rt(Yt)}function Pm(e,t,n){if(Yt.current!==yi)throw Error(U(168));Qe(Yt,t),Qe(un,n)}function T0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(U(108,n_(e)||"Unknown",i));return ft({},n,r)}function Ul(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yi,Ui=Yt.current,Qe(Yt,e),Qe(un,un.current),!0}function Am(e,t,n){var r=e.stateNode;if(!r)throw Error(U(169));n?(e=T0(e,t,Ui),r.__reactInternalMemoizedMergedChildContext=e,rt(un),rt(Yt),Qe(Yt,e)):rt(un),Qe(un,n)}var Dr=null,zu=!1,qc=!1;function O0(e){Dr===null?Dr=[e]:Dr.push(e)}function xk(e){zu=!0,O0(e)}function Si(){if(!qc&&Dr!==null){qc=!0;var e=0,t=He;try{var n=Dr;for(He=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dr=null,zu=!1}catch(i){throw Dr!==null&&(Dr=Dr.slice(e+1)),e0(bh,Si),i}finally{He=t,qc=!1}}return null}var wa=[],_a=0,Bl=null,Vl=0,bn=[],Cn=0,Bi=null,Er=1,Tr="";function Di(e,t){wa[_a++]=Vl,wa[_a++]=Bl,Bl=e,Vl=t}function P0(e,t,n){bn[Cn++]=Er,bn[Cn++]=Tr,bn[Cn++]=Bi,Bi=e;var r=Er;e=Tr;var i=32-Yn(r)-1;r&=~(1<<i),n+=1;var a=32-Yn(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Er=1<<32-Yn(t)+i|n<<i|r,Tr=a+e}else Er=1<<a|n<<i|r,Tr=e}function Ih(e){e.return!==null&&(Di(e,1),P0(e,1,0))}function Rh(e){for(;e===Bl;)Bl=wa[--_a],wa[_a]=null,Vl=wa[--_a],wa[_a]=null;for(;e===Bi;)Bi=bn[--Cn],bn[Cn]=null,Tr=bn[--Cn],bn[Cn]=null,Er=bn[--Cn],bn[Cn]=null}var yn=null,mn=null,st=!1,$n=null;function A0(e,t){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mm(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,yn=e,mn=ui(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,yn=e,mn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bi!==null?{id:Er,overflow:Tr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,yn=e,mn=null,!0):!1;default:return!1}}function yf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vf(e){if(st){var t=mn;if(t){var n=t;if(!Mm(e,t)){if(yf(e))throw Error(U(418));t=ui(n.nextSibling);var r=yn;t&&Mm(e,t)?A0(r,n):(e.flags=e.flags&-4097|2,st=!1,yn=e)}}else{if(yf(e))throw Error(U(418));e.flags=e.flags&-4097|2,st=!1,yn=e}}}function Im(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;yn=e}function Xs(e){if(e!==yn)return!1;if(!st)return Im(e),st=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!hf(e.type,e.memoizedProps)),t&&(t=mn)){if(yf(e))throw M0(),Error(U(418));for(;t;)A0(e,t),t=ui(t.nextSibling)}if(Im(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){mn=ui(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}mn=null}}else mn=yn?ui(e.stateNode.nextSibling):null;return!0}function M0(){for(var e=mn;e;)e=ui(e.nextSibling)}function Wa(){mn=yn=null,st=!1}function Nh(e){$n===null?$n=[e]:$n.push(e)}var wk=Vr.ReactCurrentBatchConfig;function Ln(e,t){if(e&&e.defaultProps){t=ft({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yl=ki(null),Wl=null,ka=null,zh=null;function Fh(){zh=ka=Wl=null}function Lh(e){var t=Yl.current;rt(Yl),e._currentValue=t}function xf(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Na(e,t){Wl=e,zh=ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ln=!0),e.firstContext=null)}function Pn(e){var t=e._currentValue;if(zh!==e)if(e={context:e,memoizedValue:t,next:null},ka===null){if(Wl===null)throw Error(U(308));ka=e,Wl.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var Ai=null;function jh(e){Ai===null?Ai=[e]:Ai.push(e)}function I0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,jh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Lr(e,r)}function Lr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xr=!1;function $h(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function R0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ci(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Lr(e,n)}return i=r.interleaved,i===null?(t.next=t,jh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Lr(e,n)}function ml(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ch(e,n)}}function Rm(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hl(e,t,n,r){var i=e.updateQueue;Xr=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=0,c=u=l=null,s=a;do{var f=s.lane,x=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,p=s;switch(f=t,x=n,p.tag){case 1:if(v=p.payload,typeof v=="function"){d=v.call(x,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,f=typeof v=="function"?v.call(x,d,f):v,f==null)break e;d=ft({},d,f);break e;case 2:Xr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else x={eventTime:x,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=x,l=d):c=c.next=x,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Yi|=o,e.lanes=o,e.memoizedState=d}}function Nm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var N0=new Iy.Component().refs;function wf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ft({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fu={isMounted:function(e){return(e=e._reactInternals)?Ji(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qt(),i=fi(e),a=Ar(r,i);a.payload=t,n!=null&&(a.callback=n),t=ci(e,a,i),t!==null&&(Wn(t,e,i,r),ml(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qt(),i=fi(e),a=Ar(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ci(e,a,i),t!==null&&(Wn(t,e,i,r),ml(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qt(),r=fi(e),i=Ar(n,r);i.tag=2,t!=null&&(i.callback=t),t=ci(e,i,r),t!==null&&(Wn(t,e,r,n),ml(t,e,r))}};function zm(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ko(n,r)||!Ko(i,a):!0}function z0(e,t,n){var r=!1,i=yi,a=t.contextType;return typeof a=="object"&&a!==null?a=Pn(a):(i=cn(t)?Ui:Yt.current,r=t.contextTypes,a=(r=r!=null)?Ya(e,i):yi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Fm(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fu.enqueueReplaceState(t,t.state,null)}function _f(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=N0,$h(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Pn(a):(a=cn(t)?Ui:Yt.current,i.context=Ya(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(wf(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fu.enqueueReplaceState(i,i.state,null),Hl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function go(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(o){var s=i.refs;s===N0&&(s=i.refs={}),o===null?delete s[a]:s[a]=o},t._stringRef=a,t)}if(typeof e!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,e))}return e}function Qs(e,t){throw e=Object.prototype.toString.call(t),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lm(e){var t=e._init;return t(e._payload)}function F0(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=hi(m,h),m.index=0,m.sibling=null,m}function a(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,h,g,C){return h===null||h.tag!==6?(h=rd(g,m.mode,C),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,C){var w=g.type;return w===pa?c(m,h,g.props.children,C,g.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qr&&Lm(w)===h.type)?(C=i(h,g.props),C.ref=go(m,h,g),C.return=m,C):(C=_l(g.type,g.key,g.props,null,m.mode,C),C.ref=go(m,h,g),C.return=m,C)}function u(m,h,g,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=id(g,m.mode,C),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function c(m,h,g,C,w){return h===null||h.tag!==7?(h=Li(g,m.mode,C,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=rd(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Us:return g=_l(h.type,h.key,h.props,null,m.mode,g),g.ref=go(m,null,h),g.return=m,g;case ha:return h=id(h,m.mode,g),h.return=m,h;case qr:var C=h._init;return d(m,C(h._payload),g)}if(Do(h)||co(h))return h=Li(h,m.mode,g,null),h.return=m,h;Qs(m,h)}return null}function f(m,h,g,C){var w=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:s(m,h,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:return g.key===w?l(m,h,g,C):null;case ha:return g.key===w?u(m,h,g,C):null;case qr:return w=g._init,f(m,h,w(g._payload),C)}if(Do(g)||co(g))return w!==null?null:c(m,h,g,C,null);Qs(m,g)}return null}function x(m,h,g,C,w){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(g)||null,s(h,m,""+C,w);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Us:return m=m.get(C.key===null?g:C.key)||null,l(h,m,C,w);case ha:return m=m.get(C.key===null?g:C.key)||null,u(h,m,C,w);case qr:var D=C._init;return x(m,h,g,D(C._payload),w)}if(Do(C)||co(C))return m=m.get(g)||null,c(h,m,C,w,null);Qs(h,C)}return null}function v(m,h,g,C){for(var w=null,D=null,E=h,M=h=0,W=null;E!==null&&M<g.length;M++){E.index>M?(W=E,E=null):W=E.sibling;var z=f(m,E,g[M],C);if(z===null){E===null&&(E=W);break}e&&E&&z.alternate===null&&t(m,E),h=a(z,h,M),D===null?w=z:D.sibling=z,D=z,E=W}if(M===g.length)return n(m,E),st&&Di(m,M),w;if(E===null){for(;M<g.length;M++)E=d(m,g[M],C),E!==null&&(h=a(E,h,M),D===null?w=E:D.sibling=E,D=E);return st&&Di(m,M),w}for(E=r(m,E);M<g.length;M++)W=x(E,m,M,g[M],C),W!==null&&(e&&W.alternate!==null&&E.delete(W.key===null?M:W.key),h=a(W,h,M),D===null?w=W:D.sibling=W,D=W);return e&&E.forEach(function($){return t(m,$)}),st&&Di(m,M),w}function p(m,h,g,C){var w=co(g);if(typeof w!="function")throw Error(U(150));if(g=w.call(g),g==null)throw Error(U(151));for(var D=w=null,E=h,M=h=0,W=null,z=g.next();E!==null&&!z.done;M++,z=g.next()){E.index>M?(W=E,E=null):W=E.sibling;var $=f(m,E,z.value,C);if($===null){E===null&&(E=W);break}e&&E&&$.alternate===null&&t(m,E),h=a($,h,M),D===null?w=$:D.sibling=$,D=$,E=W}if(z.done)return n(m,E),st&&Di(m,M),w;if(E===null){for(;!z.done;M++,z=g.next())z=d(m,z.value,C),z!==null&&(h=a(z,h,M),D===null?w=z:D.sibling=z,D=z);return st&&Di(m,M),w}for(E=r(m,E);!z.done;M++,z=g.next())z=x(E,m,M,z.value,C),z!==null&&(e&&z.alternate!==null&&E.delete(z.key===null?M:z.key),h=a(z,h,M),D===null?w=z:D.sibling=z,D=z);return e&&E.forEach(function(ae){return t(m,ae)}),st&&Di(m,M),w}function S(m,h,g,C){if(typeof g=="object"&&g!==null&&g.type===pa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:e:{for(var w=g.key,D=h;D!==null;){if(D.key===w){if(w=g.type,w===pa){if(D.tag===7){n(m,D.sibling),h=i(D,g.props.children),h.return=m,m=h;break e}}else if(D.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===qr&&Lm(w)===D.type){n(m,D.sibling),h=i(D,g.props),h.ref=go(m,D,g),h.return=m,m=h;break e}n(m,D);break}else t(m,D);D=D.sibling}g.type===pa?(h=Li(g.props.children,m.mode,C,g.key),h.return=m,m=h):(C=_l(g.type,g.key,g.props,null,m.mode,C),C.ref=go(m,h,g),C.return=m,m=C)}return o(m);case ha:e:{for(D=g.key;h!==null;){if(h.key===D)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=id(g,m.mode,C),h.return=m,m=h}return o(m);case qr:return D=g._init,S(m,h,D(g._payload),C)}if(Do(g))return v(m,h,g,C);if(co(g))return p(m,h,g,C);Qs(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=rd(g,m.mode,C),h.return=m,m=h),o(m)):n(m,h)}return S}var Ha=F0(!0),L0=F0(!1),Ds={},fr=ki(Ds),Jo=ki(Ds),es=ki(Ds);function Mi(e){if(e===Ds)throw Error(U(174));return e}function Uh(e,t){switch(Qe(es,t),Qe(Jo,e),Qe(fr,Ds),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qd(t,e)}rt(fr),Qe(fr,t)}function Za(){rt(fr),rt(Jo),rt(es)}function j0(e){Mi(es.current);var t=Mi(fr.current),n=Qd(t,e.type);t!==n&&(Qe(Jo,e),Qe(fr,n))}function Bh(e){Jo.current===e&&(rt(fr),rt(Jo))}var ct=ki(0);function Zl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xc=[];function Vh(){for(var e=0;e<Xc.length;e++)Xc[e]._workInProgressVersionPrimary=null;Xc.length=0}var gl=Vr.ReactCurrentDispatcher,Qc=Vr.ReactCurrentBatchConfig,Vi=0,dt=null,bt=null,Pt=null,Gl=!1,Ro=!1,ts=0,_k=0;function $t(){throw Error(U(321))}function Yh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Wh(e,t,n,r,i,a){if(Vi=a,dt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,gl.current=e===null||e.memoizedState===null?Ck:Dk,e=n(r,i),Ro){a=0;do{if(Ro=!1,ts=0,25<=a)throw Error(U(301));a+=1,Pt=bt=null,t.updateQueue=null,gl.current=Ek,e=n(r,i)}while(Ro)}if(gl.current=Kl,t=bt!==null&&bt.next!==null,Vi=0,Pt=bt=dt=null,Gl=!1,t)throw Error(U(300));return e}function Hh(){var e=ts!==0;return ts=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?dt.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function An(){if(bt===null){var e=dt.alternate;e=e!==null?e.memoizedState:null}else e=bt.next;var t=Pt===null?dt.memoizedState:Pt.next;if(t!==null)Pt=t,bt=e;else{if(e===null)throw Error(U(310));bt=e,e={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Pt===null?dt.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function ns(e,t){return typeof t=="function"?t(e):t}function Jc(e){var t=An(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=bt,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Vi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=r):l=l.next=d,dt.lanes|=c,Yi|=c}u=u.next}while(u!==null&&u!==a);l===null?o=r:l.next=s,Gn(r,t.memoizedState)||(ln=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,dt.lanes|=a,Yi|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ed(e){var t=An(),n=t.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Gn(a,t.memoizedState)||(ln=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $0(){}function U0(e,t){var n=dt,r=An(),i=t(),a=!Gn(r.memoizedState,i);if(a&&(r.memoizedState=i,ln=!0),r=r.queue,Zh(Y0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,rs(9,V0.bind(null,n,r,i,t),void 0,null),At===null)throw Error(U(349));Vi&30||B0(n,t,i)}return i}function B0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function V0(e,t,n,r){t.value=n,t.getSnapshot=r,W0(t)&&H0(e)}function Y0(e,t,n){return n(function(){W0(t)&&H0(e)})}function W0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch{return!0}}function H0(e){var t=Lr(e,1);t!==null&&Wn(t,e,1,-1)}function jm(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:e},t.queue=e,e=e.dispatch=bk.bind(null,dt,e),[t.memoizedState,e]}function rs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=dt.updateQueue,t===null?(t={lastEffect:null,stores:null},dt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Z0(){return An().memoizedState}function yl(e,t,n,r){var i=ir();dt.flags|=e,i.memoizedState=rs(1|t,n,void 0,r===void 0?null:r)}function Lu(e,t,n,r){var i=An();r=r===void 0?null:r;var a=void 0;if(bt!==null){var o=bt.memoizedState;if(a=o.destroy,r!==null&&Yh(r,o.deps)){i.memoizedState=rs(t,n,a,r);return}}dt.flags|=e,i.memoizedState=rs(1|t,n,a,r)}function $m(e,t){return yl(8390656,8,e,t)}function Zh(e,t){return Lu(2048,8,e,t)}function G0(e,t){return Lu(4,2,e,t)}function K0(e,t){return Lu(4,4,e,t)}function q0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function X0(e,t,n){return n=n!=null?n.concat([e]):null,Lu(4,4,q0.bind(null,t,e),n)}function Gh(){}function Q0(e,t){var n=An();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function J0(e,t){var n=An();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ev(e,t,n){return Vi&21?(Gn(n,t)||(n=r0(),dt.lanes|=n,Yi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ln=!0),e.memoizedState=n)}function kk(e,t){var n=He;He=n!==0&&4>n?n:4,e(!0);var r=Qc.transition;Qc.transition={};try{e(!1),t()}finally{He=n,Qc.transition=r}}function tv(){return An().memoizedState}function Sk(e,t,n){var r=fi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(e))rv(t,n);else if(n=I0(e,t,n,r),n!==null){var i=Qt();Wn(n,e,r,i),iv(n,t,r)}}function bk(e,t,n){var r=fi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(e))rv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gn(s,o)){var l=t.interleaved;l===null?(i.next=i,jh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=I0(e,t,i,r),n!==null&&(i=Qt(),Wn(n,e,r,i),iv(n,t,r))}}function nv(e){var t=e.alternate;return e===dt||t!==null&&t===dt}function rv(e,t){Ro=Gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function iv(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ch(e,n)}}var Kl={readContext:Pn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},Ck={readContext:Pn,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:Pn,useEffect:$m,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yl(4194308,4,q0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yl(4194308,4,e,t)},useInsertionEffect:function(e,t){return yl(4,2,e,t)},useMemo:function(e,t){var n=ir();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ir();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sk.bind(null,dt,e),[r.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:jm,useDebugValue:Gh,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=jm(!1),t=e[0];return e=kk.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=dt,i=ir();if(st){if(n===void 0)throw Error(U(407));n=n()}else{if(n=t(),At===null)throw Error(U(349));Vi&30||B0(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,$m(Y0.bind(null,r,a,e),[e]),r.flags|=2048,rs(9,V0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ir(),t=At.identifierPrefix;if(st){var n=Tr,r=Er;n=(r&~(1<<32-Yn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ts++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_k++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dk={readContext:Pn,useCallback:Q0,useContext:Pn,useEffect:Zh,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:K0,useMemo:J0,useReducer:Jc,useRef:Z0,useState:function(){return Jc(ns)},useDebugValue:Gh,useDeferredValue:function(e){var t=An();return ev(t,bt.memoizedState,e)},useTransition:function(){var e=Jc(ns)[0],t=An().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:U0,useId:tv,unstable_isNewReconciler:!1},Ek={readContext:Pn,useCallback:Q0,useContext:Pn,useEffect:Zh,useImperativeHandle:X0,useInsertionEffect:G0,useLayoutEffect:K0,useMemo:J0,useReducer:ed,useRef:Z0,useState:function(){return ed(ns)},useDebugValue:Gh,useDeferredValue:function(e){var t=An();return bt===null?t.memoizedState=e:ev(t,bt.memoizedState,e)},useTransition:function(){var e=ed(ns)[0],t=An().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:U0,useId:tv,unstable_isNewReconciler:!1};function Ga(e,t){try{var n="",r=t;do n+=t_(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function td(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Tk=typeof WeakMap=="function"?WeakMap:Map;function av(e,t,n){n=Ar(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xl||(Xl=!0,Mf=r),kf(e,t)},n}function ov(e,t,n){n=Ar(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){kf(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){kf(e,t),typeof r!="function"&&(di===null?di=new Set([this]):di.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Um(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Tk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bk.bind(null,e,t,n),t.then(e,e))}function Bm(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ar(-1,1),t.tag=2,ci(n,t,1))),n.lanes|=1),e)}var Ok=Vr.ReactCurrentOwner,ln=!1;function qt(e,t,n,r){t.child=e===null?L0(t,null,n,r):Ha(t,e.child,n,r)}function Ym(e,t,n,r,i){n=n.render;var a=t.ref;return Na(t,i),r=Wh(e,t,n,r,a,i),n=Hh(),e!==null&&!ln?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jr(e,t,i)):(st&&n&&Ih(t),t.flags|=1,qt(e,t,r,i),t.child)}function Wm(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!np(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,sv(e,t,a,r,i)):(e=_l(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,r)&&e.ref===t.ref)return jr(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function sv(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ko(a,r)&&e.ref===t.ref)if(ln=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(ln=!0);else return t.lanes=e.lanes,jr(e,t,i)}return Sf(e,t,n,r,i)}function lv(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(ba,fn),fn|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qe(ba,fn),fn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Qe(ba,fn),fn|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Qe(ba,fn),fn|=r;return qt(e,t,i,n),t.child}function uv(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sf(e,t,n,r,i){var a=cn(n)?Ui:Yt.current;return a=Ya(t,a),Na(t,i),n=Wh(e,t,n,r,a,i),r=Hh(),e!==null&&!ln?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jr(e,t,i)):(st&&r&&Ih(t),t.flags|=1,qt(e,t,n,i),t.child)}function Hm(e,t,n,r,i){if(cn(n)){var a=!0;Ul(t)}else a=!1;if(Na(t,i),t.stateNode===null)vl(e,t),z0(t,n,r),_f(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Pn(u):(u=cn(n)?Ui:Yt.current,u=Ya(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==u)&&Fm(t,o,r,u),Xr=!1;var f=t.memoizedState;o.state=f,Hl(t,r,o,i),l=t.memoizedState,s!==r||f!==l||un.current||Xr?(typeof c=="function"&&(wf(t,n,c,r),l=t.memoizedState),(s=Xr||zm(t,n,s,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,R0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ln(t.type,s),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Pn(l):(l=cn(n)?Ui:Yt.current,l=Ya(t,l));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||f!==l)&&Fm(t,o,r,l),Xr=!1,f=t.memoizedState,o.state=f,Hl(t,r,o,i);var v=t.memoizedState;s!==d||f!==v||un.current||Xr?(typeof x=="function"&&(wf(t,n,x,r),v=t.memoizedState),(u=Xr||zm(t,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return bf(e,t,n,r,a,i)}function bf(e,t,n,r,i,a){uv(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Am(t,n,!1),jr(e,t,a);r=t.stateNode,Ok.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ha(t,e.child,null,a),t.child=Ha(t,null,s,a)):qt(e,t,s,a),t.memoizedState=r.state,i&&Am(t,n,!0),t.child}function cv(e){var t=e.stateNode;t.pendingContext?Pm(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pm(e,t.context,!1),Uh(e,t.containerInfo)}function Zm(e,t,n,r,i){return Wa(),Nh(i),t.flags|=256,qt(e,t,n,r),t.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function Df(e){return{baseLanes:e,cachePool:null,transitions:null}}function dv(e,t,n){var r=t.pendingProps,i=ct.current,a=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Qe(ct,i&1),e===null)return vf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Uu(o,r,0,null),e=Li(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Df(n),t.memoizedState=Cf,e):Kh(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Pk(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=hi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=hi(s,a):(a=Li(a,o,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Df(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Cf,r}return a=e.child,e=a.sibling,r=hi(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Kh(e,t){return t=Uu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Js(e,t,n,r){return r!==null&&Nh(r),Ha(t,e.child,null,n),e=Kh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pk(e,t,n,r,i,a,o){if(n)return t.flags&256?(t.flags&=-257,r=td(Error(U(422))),Js(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Uu({mode:"visible",children:r.children},i,0,null),a=Li(a,i,o,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ha(t,e.child,null,o),t.child.memoizedState=Df(o),t.memoizedState=Cf,a);if(!(t.mode&1))return Js(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(U(419)),r=td(a,r,void 0),Js(e,t,o,r)}if(s=(o&e.childLanes)!==0,ln||s){if(r=At,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Lr(e,i),Wn(r,e,i,-1))}return tp(),r=td(Error(U(421))),Js(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Vk.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,mn=ui(i.nextSibling),yn=t,st=!0,$n=null,e!==null&&(bn[Cn++]=Er,bn[Cn++]=Tr,bn[Cn++]=Bi,Er=e.id,Tr=e.overflow,Bi=t),t=Kh(t,r.children),t.flags|=4096,t)}function Gm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xf(e.return,t,n)}function nd(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function fv(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(qt(e,t,r.children,n),r=ct.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,n,t);else if(e.tag===19)Gm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Qe(ct,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nd(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nd(t,!0,n,null,a);break;case"together":nd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Yi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(U(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ak(e,t,n){switch(t.tag){case 3:cv(t),Wa();break;case 5:j0(t);break;case 1:cn(t.type)&&Ul(t);break;case 4:Uh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Qe(Yl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Qe(ct,ct.current&1),t.flags|=128,null):n&t.child.childLanes?dv(e,t,n):(Qe(ct,ct.current&1),e=jr(e,t,n),e!==null?e.sibling:null);Qe(ct,ct.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fv(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(ct,ct.current),r)break;return null;case 22:case 23:return t.lanes=0,lv(e,t,n)}return jr(e,t,n)}var hv,Ef,pv,mv;hv=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};pv=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mi(fr.current);var a=null;switch(n){case"input":i=Gd(e,i),r=Gd(e,r),a=[];break;case"select":i=ft({},i,{value:void 0}),r=ft({},r,{value:void 0}),a=[];break;case"textarea":i=Xd(e,i),r=Xd(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jl)}Jd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&tt("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};mv=function(e,t,n,r){n!==r&&(t.flags|=4)};function yo(e,t){if(!st)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ut(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mk(e,t,n){var r=t.pendingProps;switch(Rh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(t),null;case 1:return cn(t.type)&&$l(),Ut(t),null;case 3:return r=t.stateNode,Za(),rt(un),rt(Yt),Vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$n!==null&&(Nf($n),$n=null))),Ef(e,t),Ut(t),null;case 5:Bh(t);var i=Mi(es.current);if(n=t.type,e!==null&&t.stateNode!=null)pv(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(U(166));return Ut(t),null}if(e=Mi(fr.current),Xs(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sr]=t,r[Qo]=a,e=(t.mode&1)!==0,n){case"dialog":tt("cancel",r),tt("close",r);break;case"iframe":case"object":case"embed":tt("load",r);break;case"video":case"audio":for(i=0;i<To.length;i++)tt(To[i],r);break;case"source":tt("error",r);break;case"img":case"image":case"link":tt("error",r),tt("load",r);break;case"details":tt("toggle",r);break;case"input":rm(r,a),tt("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},tt("invalid",r);break;case"textarea":am(r,a),tt("invalid",r)}Jd(n,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&qs(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&qs(r.textContent,s,e),i=["children",""+s]):Bo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&tt("scroll",r)}switch(n){case"input":Bs(r),im(r,a,!0);break;case"textarea":Bs(r),om(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=jl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=By(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[sr]=t,e[Qo]=r,hv(e,t,!1,!1),t.stateNode=e;e:{switch(o=ef(n,r),n){case"dialog":tt("cancel",e),tt("close",e),i=r;break;case"iframe":case"object":case"embed":tt("load",e),i=r;break;case"video":case"audio":for(i=0;i<To.length;i++)tt(To[i],e);i=r;break;case"source":tt("error",e),i=r;break;case"img":case"image":case"link":tt("error",e),tt("load",e),i=r;break;case"details":tt("toggle",e),i=r;break;case"input":rm(e,r),i=Gd(e,r),tt("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ft({},r,{value:void 0}),tt("invalid",e);break;case"textarea":am(e,r),i=Xd(e,r),tt("invalid",e);break;default:i=r}Jd(n,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Wy(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Vo(e,l):typeof l=="number"&&Vo(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&tt("scroll",e):l!=null&&xh(e,a,l,o))}switch(n){case"input":Bs(e),im(e,r,!1);break;case"textarea":Bs(e),om(e);break;case"option":r.value!=null&&e.setAttribute("value",""+gi(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Aa(e,!!r.multiple,a,!1):r.defaultValue!=null&&Aa(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ut(t),null;case 6:if(e&&t.stateNode!=null)mv(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(U(166));if(n=Mi(es.current),Mi(fr.current),Xs(t)){if(r=t.stateNode,n=t.memoizedProps,r[sr]=t,(a=r.nodeValue!==n)&&(e=yn,e!==null))switch(e.tag){case 3:qs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qs(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sr]=t,t.stateNode=r}return Ut(t),null;case 13:if(rt(ct),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(st&&mn!==null&&t.mode&1&&!(t.flags&128))M0(),Wa(),t.flags|=98560,a=!1;else if(a=Xs(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(U(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(U(317));a[sr]=t}else Wa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ut(t),a=!1}else $n!==null&&(Nf($n),$n=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ct.current&1?Ct===0&&(Ct=3):tp())),t.updateQueue!==null&&(t.flags|=4),Ut(t),null);case 4:return Za(),Ef(e,t),e===null&&qo(t.stateNode.containerInfo),Ut(t),null;case 10:return Lh(t.type._context),Ut(t),null;case 17:return cn(t.type)&&$l(),Ut(t),null;case 19:if(rt(ct),a=t.memoizedState,a===null)return Ut(t),null;if(r=(t.flags&128)!==0,o=a.rendering,o===null)if(r)yo(a,!1);else{if(Ct!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zl(e),o!==null){for(t.flags|=128,yo(a,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Qe(ct,ct.current&1|2),t.child}e=e.sibling}a.tail!==null&&xt()>Ka&&(t.flags|=128,r=!0,yo(a,!1),t.lanes=4194304)}else{if(!r)if(e=Zl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!st)return Ut(t),null}else 2*xt()-a.renderingStartTime>Ka&&n!==1073741824&&(t.flags|=128,r=!0,yo(a,!1),t.lanes=4194304);a.isBackwards?(o.sibling=t.child,t.child=o):(n=a.last,n!==null?n.sibling=o:t.child=o,a.last=o)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xt(),t.sibling=null,n=ct.current,Qe(ct,r?n&1|2:n&1),t):(Ut(t),null);case 22:case 23:return ep(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?fn&1073741824&&(Ut(t),t.subtreeFlags&6&&(t.flags|=8192)):Ut(t),null;case 24:return null;case 25:return null}throw Error(U(156,t.tag))}function Ik(e,t){switch(Rh(t),t.tag){case 1:return cn(t.type)&&$l(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Za(),rt(un),rt(Yt),Vh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Bh(t),null;case 13:if(rt(ct),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(U(340));Wa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return rt(ct),null;case 4:return Za(),null;case 10:return Lh(t.type._context),null;case 22:case 23:return ep(),null;case 24:return null;default:return null}}var el=!1,Bt=!1,Rk=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Sa(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ht(e,t,r)}else n.current=null}function Tf(e,t,n){try{n()}catch(r){ht(e,t,r)}}var Km=!1;function Nk(e,t){if(df=zl,e=x0(),Mh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(s=o+i),d!==a||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(x=d.firstChild)!==null;)f=d,d=x;for(;;){if(d===e)break t;if(f===n&&++u===i&&(s=o),f===a&&++c===r&&(l=o),(x=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=x}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ff={focusedElem:e,selectionRange:n},zl=!1,ie=t;ie!==null;)if(t=ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ie=e;else for(;ie!==null;){t=ie;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,S=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?p:Ln(t.type,p),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(C){ht(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,ie=e;break}ie=t.return}return v=Km,Km=!1,v}function No(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Tf(t,n,a)}i=i.next}while(i!==r)}}function ju(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gv(e){var t=e.alternate;t!==null&&(e.alternate=null,gv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sr],delete t[Qo],delete t[mf],delete t[yk],delete t[vk])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yv(e){return e.tag===5||e.tag===3||e.tag===4}function qm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jl));else if(r!==4&&(e=e.child,e!==null))for(Pf(e,t,n),e=e.sibling;e!==null;)Pf(e,t,n),e=e.sibling}function Af(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Af(e,t,n),e=e.sibling;e!==null;)Af(e,t,n),e=e.sibling}var Nt=null,jn=!1;function Zr(e,t,n){for(n=n.child;n!==null;)vv(e,t,n),n=n.sibling}function vv(e,t,n){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(Au,n)}catch{}switch(n.tag){case 5:Bt||Sa(n,t);case 6:var r=Nt,i=jn;Nt=null,Zr(e,t,n),Nt=r,jn=i,Nt!==null&&(jn?(e=Nt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(jn?(e=Nt,n=n.stateNode,e.nodeType===8?Kc(e.parentNode,n):e.nodeType===1&&Kc(e,n),Zo(e)):Kc(Nt,n.stateNode));break;case 4:r=Nt,i=jn,Nt=n.stateNode.containerInfo,jn=!0,Zr(e,t,n),Nt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Tf(n,t,o),i=i.next}while(i!==r)}Zr(e,t,n);break;case 1:if(!Bt&&(Sa(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ht(n,t,s)}Zr(e,t,n);break;case 21:Zr(e,t,n);break;case 22:n.mode&1?(Bt=(r=Bt)||n.memoizedState!==null,Zr(e,t,n),Bt=r):Zr(e,t,n);break;default:Zr(e,t,n)}}function Xm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Rk),t.forEach(function(r){var i=Yk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Nt=s.stateNode,jn=!1;break e;case 3:Nt=s.stateNode.containerInfo,jn=!0;break e;case 4:Nt=s.stateNode.containerInfo,jn=!0;break e}s=s.return}if(Nt===null)throw Error(U(160));vv(a,o,i),Nt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ht(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xv(t,e),t=t.sibling}function xv(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zn(t,e),nr(e),r&4){try{No(3,e,e.return),ju(3,e)}catch(p){ht(e,e.return,p)}try{No(5,e,e.return)}catch(p){ht(e,e.return,p)}}break;case 1:zn(t,e),nr(e),r&512&&n!==null&&Sa(n,n.return);break;case 5:if(zn(t,e),nr(e),r&512&&n!==null&&Sa(n,n.return),e.flags&32){var i=e.stateNode;try{Vo(i,"")}catch(p){ht(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&$y(i,a),ef(s,o);var u=ef(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Wy(i,d):c==="dangerouslySetInnerHTML"?Vy(i,d):c==="children"?Vo(i,d):xh(i,c,d,u)}switch(s){case"input":Kd(i,a);break;case"textarea":Uy(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?Aa(i,!!a.multiple,x,!1):f!==!!a.multiple&&(a.defaultValue!=null?Aa(i,!!a.multiple,a.defaultValue,!0):Aa(i,!!a.multiple,a.multiple?[]:"",!1))}i[Qo]=a}catch(p){ht(e,e.return,p)}}break;case 6:if(zn(t,e),nr(e),r&4){if(e.stateNode===null)throw Error(U(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(p){ht(e,e.return,p)}}break;case 3:if(zn(t,e),nr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(t.containerInfo)}catch(p){ht(e,e.return,p)}break;case 4:zn(t,e),nr(e);break;case 13:zn(t,e),nr(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Qh=xt())),r&4&&Xm(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Bt=(u=Bt)||c,zn(t,e),Bt=u):zn(t,e),nr(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(ie=e,c=e.child;c!==null;){for(d=ie=c;ie!==null;){switch(f=ie,x=f.child,f.tag){case 0:case 11:case 14:case 15:No(4,f,f.return);break;case 1:Sa(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(p){ht(r,n,p)}}break;case 5:Sa(f,f.return);break;case 22:if(f.memoizedState!==null){Jm(d);continue}}x!==null?(x.return=f,ie=x):Jm(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Yy("display",o))}catch(p){ht(e,e.return,p)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(p){ht(e,e.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(t,e),nr(e),r&4&&Xm(e);break;case 21:break;default:zn(t,e),nr(e)}}function nr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var a=qm(e);Af(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=qm(e);Pf(e,s,o);break;default:throw Error(U(161))}}catch(l){ht(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zk(e,t,n){ie=e,wv(e)}function wv(e,t,n){for(var r=(e.mode&1)!==0;ie!==null;){var i=ie,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==null||Bt;s=el;var u=Bt;if(el=o,(Bt=l)&&!u)for(ie=i;ie!==null;)o=ie,l=o.child,o.tag===22&&o.memoizedState!==null?eg(i):l!==null?(l.return=o,ie=l):eg(i);for(;a!==null;)ie=a,wv(a),a=a.sibling;ie=i,el=s,Bt=u}Qm(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,ie=a):Qm(e)}}function Qm(e){for(;ie!==null;){var t=ie;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Bt||ju(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Bt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ln(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Nm(t,a,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nm(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Bt||t.flags&512&&Of(t)}catch(f){ht(t,t.return,f)}}if(t===e){ie=null;break}if(n=t.sibling,n!==null){n.return=t.return,ie=n;break}ie=t.return}}function Jm(e){for(;ie!==null;){var t=ie;if(t===e){ie=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ie=n;break}ie=t.return}}function eg(e){for(;ie!==null;){var t=ie;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ju(4,t)}catch(l){ht(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ht(t,i,l)}}var a=t.return;try{Of(t)}catch(l){ht(t,a,l)}break;case 5:var o=t.return;try{Of(t)}catch(l){ht(t,o,l)}}}catch(l){ht(t,t.return,l)}if(t===e){ie=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ie=s;break}ie=t.return}}var Fk=Math.ceil,ql=Vr.ReactCurrentDispatcher,qh=Vr.ReactCurrentOwner,On=Vr.ReactCurrentBatchConfig,je=0,At=null,_t=null,zt=0,fn=0,ba=ki(0),Ct=0,is=null,Yi=0,$u=0,Xh=0,zo=null,on=null,Qh=0,Ka=1/0,Sr=null,Xl=!1,Mf=null,di=null,tl=!1,ni=null,Ql=0,Fo=0,If=null,xl=-1,wl=0;function Qt(){return je&6?xt():xl!==-1?xl:xl=xt()}function fi(e){return e.mode&1?je&2&&zt!==0?zt&-zt:wk.transition!==null?(wl===0&&(wl=r0()),wl):(e=He,e!==0||(e=window.event,e=e===void 0?16:c0(e.type)),e):1}function Wn(e,t,n,r){if(50<Fo)throw Fo=0,If=null,Error(U(185));Ss(e,n,r),(!(je&2)||e!==At)&&(e===At&&(!(je&2)&&($u|=n),Ct===4&&Jr(e,zt)),dn(e,r),n===1&&je===0&&!(t.mode&1)&&(Ka=xt()+500,zu&&Si()))}function dn(e,t){var n=e.callbackNode;w_(e,t);var r=Nl(e,e===At?zt:0);if(r===0)n!==null&&um(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&um(n),t===1)e.tag===0?xk(tg.bind(null,e)):O0(tg.bind(null,e)),mk(function(){!(je&6)&&Si()}),n=null;else{switch(i0(r)){case 1:n=bh;break;case 4:n=t0;break;case 16:n=Rl;break;case 536870912:n=n0;break;default:n=Rl}n=Tv(n,_v.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _v(e,t){if(xl=-1,wl=0,je&6)throw Error(U(327));var n=e.callbackNode;if(za()&&e.callbackNode!==n)return null;var r=Nl(e,e===At?zt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jl(e,r);else{t=r;var i=je;je|=2;var a=Sv();(At!==e||zt!==t)&&(Sr=null,Ka=xt()+500,Fi(e,t));do try{$k();break}catch(s){kv(e,s)}while(1);Fh(),ql.current=a,je=i,_t!==null?t=0:(At=null,zt=0,t=Ct)}if(t!==0){if(t===2&&(i=of(e),i!==0&&(r=i,t=Rf(e,i))),t===1)throw n=is,Fi(e,0),Jr(e,r),dn(e,xt()),n;if(t===6)Jr(e,r);else{if(i=e.current.alternate,!(r&30)&&!Lk(i)&&(t=Jl(e,r),t===2&&(a=of(e),a!==0&&(r=a,t=Rf(e,a))),t===1))throw n=is,Fi(e,0),Jr(e,r),dn(e,xt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(U(345));case 2:Ei(e,on,Sr);break;case 3:if(Jr(e,r),(r&130023424)===r&&(t=Qh+500-xt(),10<t)){if(Nl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pf(Ei.bind(null,e,on,Sr),t);break}Ei(e,on,Sr);break;case 4:if(Jr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Yn(r);a=1<<o,o=t[o],o>i&&(i=o),r&=~a}if(r=i,r=xt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fk(r/1960))-r,10<r){e.timeoutHandle=pf(Ei.bind(null,e,on,Sr),r);break}Ei(e,on,Sr);break;case 5:Ei(e,on,Sr);break;default:throw Error(U(329))}}}return dn(e,xt()),e.callbackNode===n?_v.bind(null,e):null}function Rf(e,t){var n=zo;return e.current.memoizedState.isDehydrated&&(Fi(e,t).flags|=256),e=Jl(e,t),e!==2&&(t=on,on=n,t!==null&&Nf(t)),e}function Nf(e){on===null?on=e:on.push.apply(on,e)}function Lk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gn(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jr(e,t){for(t&=~Xh,t&=~$u,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Yn(t),r=1<<n;e[n]=-1,t&=~r}}function tg(e){if(je&6)throw Error(U(327));za();var t=Nl(e,0);if(!(t&1))return dn(e,xt()),null;var n=Jl(e,t);if(e.tag!==0&&n===2){var r=of(e);r!==0&&(t=r,n=Rf(e,r))}if(n===1)throw n=is,Fi(e,0),Jr(e,t),dn(e,xt()),n;if(n===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ei(e,on,Sr),dn(e,xt()),null}function Jh(e,t){var n=je;je|=1;try{return e(t)}finally{je=n,je===0&&(Ka=xt()+500,zu&&Si())}}function Wi(e){ni!==null&&ni.tag===0&&!(je&6)&&za();var t=je;je|=1;var n=On.transition,r=He;try{if(On.transition=null,He=1,e)return e()}finally{He=r,On.transition=n,je=t,!(je&6)&&Si()}}function ep(){fn=ba.current,rt(ba)}function Fi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pk(n)),_t!==null)for(n=_t.return;n!==null;){var r=n;switch(Rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:Za(),rt(un),rt(Yt),Vh();break;case 5:Bh(r);break;case 4:Za();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:Lh(r.type._context);break;case 22:case 23:ep()}n=n.return}if(At=e,_t=e=hi(e.current,null),zt=fn=t,Ct=0,is=null,Xh=$u=Yi=0,on=zo=null,Ai!==null){for(t=0;t<Ai.length;t++)if(n=Ai[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ai=null}return e}function kv(e,t){do{var n=_t;try{if(Fh(),gl.current=Kl,Gl){for(var r=dt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Gl=!1}if(Vi=0,Pt=bt=dt=null,Ro=!1,ts=0,qh.current=null,n===null||n.return===null){Ct=1,is=t,_t=null;break}e:{var a=e,o=n.return,s=n,l=t;if(t=zt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=Bm(o);if(x!==null){x.flags&=-257,Vm(x,o,s,a,t),x.mode&1&&Um(a,u,t),t=x,l=u;var v=t.updateQueue;if(v===null){var p=new Set;p.add(l),t.updateQueue=p}else v.add(l);break e}else{if(!(t&1)){Um(a,u,t),tp();break e}l=Error(U(426))}}else if(st&&s.mode&1){var S=Bm(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Vm(S,o,s,a,t),Nh(Ga(l,s));break e}}a=l=Ga(l,s),Ct!==4&&(Ct=2),zo===null?zo=[a]:zo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=av(a,l,t);Rm(a,m);break e;case 1:s=l;var h=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(di===null||!di.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=ov(a,s,t);Rm(a,C);break e}}a=a.return}while(a!==null)}Cv(n)}catch(w){t=w,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(1)}function Sv(){var e=ql.current;return ql.current=Kl,e===null?Kl:e}function tp(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),At===null||!(Yi&268435455)&&!($u&268435455)||Jr(At,zt)}function Jl(e,t){var n=je;je|=2;var r=Sv();(At!==e||zt!==t)&&(Sr=null,Fi(e,t));do try{jk();break}catch(i){kv(e,i)}while(1);if(Fh(),je=n,ql.current=r,_t!==null)throw Error(U(261));return At=null,zt=0,Ct}function jk(){for(;_t!==null;)bv(_t)}function $k(){for(;_t!==null&&!d_();)bv(_t)}function bv(e){var t=Ev(e.alternate,e,fn);e.memoizedProps=e.pendingProps,t===null?Cv(e):_t=t,qh.current=null}function Cv(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ik(n,t),n!==null){n.flags&=32767,_t=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ct=6,_t=null;return}}else if(n=Mk(n,t,fn),n!==null){_t=n;return}if(t=t.sibling,t!==null){_t=t;return}_t=t=e}while(t!==null);Ct===0&&(Ct=5)}function Ei(e,t,n){var r=He,i=On.transition;try{On.transition=null,He=1,Uk(e,t,n,r)}finally{On.transition=i,He=r}return null}function Uk(e,t,n,r){do za();while(ni!==null);if(je&6)throw Error(U(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(__(e,a),e===At&&(_t=At=null,zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,Tv(Rl,function(){return za(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=On.transition,On.transition=null;var o=He;He=1;var s=je;je|=4,qh.current=null,Nk(e,n),xv(n,e),sk(ff),zl=!!df,ff=df=null,e.current=n,zk(n),f_(),je=s,He=o,On.transition=a}else e.current=n;if(tl&&(tl=!1,ni=e,Ql=i),a=e.pendingLanes,a===0&&(di=null),m_(n.stateNode),dn(e,xt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xl)throw Xl=!1,e=Mf,Mf=null,e;return Ql&1&&e.tag!==0&&za(),a=e.pendingLanes,a&1?e===If?Fo++:(Fo=0,If=e):Fo=0,Si(),null}function za(){if(ni!==null){var e=i0(Ql),t=On.transition,n=He;try{if(On.transition=null,He=16>e?16:e,ni===null)var r=!1;else{if(e=ni,ni=null,Ql=0,je&6)throw Error(U(331));var i=je;for(je|=4,ie=e.current;ie!==null;){var a=ie,o=a.child;if(ie.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(ie=u;ie!==null;){var c=ie;switch(c.tag){case 0:case 11:case 15:No(8,c,a)}var d=c.child;if(d!==null)d.return=c,ie=d;else for(;ie!==null;){c=ie;var f=c.sibling,x=c.return;if(gv(c),c===u){ie=null;break}if(f!==null){f.return=x,ie=f;break}ie=x}}}var v=a.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var S=p.sibling;p.sibling=null,p=S}while(p!==null)}}ie=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,ie=o;else e:for(;ie!==null;){if(a=ie,a.flags&2048)switch(a.tag){case 0:case 11:case 15:No(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,ie=m;break e}ie=a.return}}var h=e.current;for(ie=h;ie!==null;){o=ie;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ie=g;else e:for(o=h;ie!==null;){if(s=ie,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ju(9,s)}}catch(w){ht(s,s.return,w)}if(s===o){ie=null;break e}var C=s.sibling;if(C!==null){C.return=s.return,ie=C;break e}ie=s.return}}if(je=i,Si(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(Au,e)}catch{}r=!0}return r}finally{He=n,On.transition=t}}return!1}function ng(e,t,n){t=Ga(n,t),t=av(e,t,1),e=ci(e,t,1),t=Qt(),e!==null&&(Ss(e,1,t),dn(e,t))}function ht(e,t,n){if(e.tag===3)ng(e,e,n);else for(;t!==null;){if(t.tag===3){ng(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(di===null||!di.has(r))){e=Ga(n,e),e=ov(t,e,1),t=ci(t,e,1),e=Qt(),t!==null&&(Ss(t,1,e),dn(t,e));break}}t=t.return}}function Bk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qt(),e.pingedLanes|=e.suspendedLanes&n,At===e&&(zt&n)===n&&(Ct===4||Ct===3&&(zt&130023424)===zt&&500>xt()-Qh?Fi(e,0):Xh|=n),dn(e,t)}function Dv(e,t){t===0&&(e.mode&1?(t=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):t=1);var n=Qt();e=Lr(e,t),e!==null&&(Ss(e,t,n),dn(e,n))}function Vk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dv(e,n)}function Yk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(t),Dv(e,n)}var Ev;Ev=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||un.current)ln=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ln=!1,Ak(e,t,n);ln=!!(e.flags&131072)}else ln=!1,st&&t.flags&1048576&&P0(t,Vl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vl(e,t),e=t.pendingProps;var i=Ya(t,Yt.current);Na(t,n),i=Wh(null,t,r,e,i,n);var a=Hh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,cn(r)?(a=!0,Ul(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$h(t),i.updater=Fu,t.stateNode=i,i._reactInternals=t,_f(t,r,e,n),t=bf(null,t,r,!0,a,n)):(t.tag=0,st&&a&&Ih(t),qt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Hk(r),e=Ln(r,e),i){case 0:t=Sf(null,t,r,e,n);break e;case 1:t=Hm(null,t,r,e,n);break e;case 11:t=Ym(null,t,r,e,n);break e;case 14:t=Wm(null,t,r,Ln(r.type,e),n);break e}throw Error(U(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Sf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Hm(e,t,r,i,n);case 3:e:{if(cv(t),e===null)throw Error(U(387));r=t.pendingProps,a=t.memoizedState,i=a.element,R0(e,t),Hl(t,r,null,n);var o=t.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ga(Error(U(423)),t),t=Zm(e,t,r,n,i);break e}else if(r!==i){i=Ga(Error(U(424)),t),t=Zm(e,t,r,n,i);break e}else for(mn=ui(t.stateNode.containerInfo.firstChild),yn=t,st=!0,$n=null,n=L0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wa(),r===i){t=jr(e,t,n);break e}qt(e,t,r,n)}t=t.child}return t;case 5:return j0(t),e===null&&vf(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,hf(r,i)?o=null:a!==null&&hf(r,a)&&(t.flags|=32),uv(e,t),qt(e,t,o,n),t.child;case 6:return e===null&&vf(t),null;case 13:return dv(e,t,n);case 4:return Uh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):qt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),Ym(e,t,r,i,n);case 7:return qt(e,t,t.pendingProps,n),t.child;case 8:return qt(e,t,t.pendingProps.children,n),t.child;case 12:return qt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,o=i.value,Qe(Yl,r._currentValue),r._currentValue=o,a!==null)if(Gn(a.value,o)){if(a.children===i.children&&!un.current){t=jr(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=Ar(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),xf(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===t.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(U(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),xf(o,n,t),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===t){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}qt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Na(t,n),i=Pn(i),r=r(i),t.flags|=1,qt(e,t,r,n),t.child;case 14:return r=t.type,i=Ln(r,t.pendingProps),i=Ln(r.type,i),Wm(e,t,r,i,n);case 15:return sv(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ln(r,i),vl(e,t),t.tag=1,cn(r)?(e=!0,Ul(t)):e=!1,Na(t,n),z0(t,r,i),_f(t,r,i,n),bf(null,t,r,!0,e,n);case 19:return fv(e,t,n);case 22:return lv(e,t,n)}throw Error(U(156,t.tag))};function Tv(e,t){return e0(e,t)}function Wk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(e,t,n,r){return new Wk(e,t,n,r)}function np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hk(e){if(typeof e=="function")return np(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_h)return 11;if(e===kh)return 14}return 2}function hi(e,t){var n=e.alternate;return n===null?(n=Tn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _l(e,t,n,r,i,a){var o=2;if(r=e,typeof e=="function")np(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case pa:return Li(n.children,i,a,t);case wh:o=8,i|=8;break;case Yd:return e=Tn(12,n,t,i|2),e.elementType=Yd,e.lanes=a,e;case Wd:return e=Tn(13,n,t,i),e.elementType=Wd,e.lanes=a,e;case Hd:return e=Tn(19,n,t,i),e.elementType=Hd,e.lanes=a,e;case Fy:return Uu(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ny:o=10;break e;case zy:o=9;break e;case _h:o=11;break e;case kh:o=14;break e;case qr:o=16,r=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return t=Tn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Li(e,t,n,r){return e=Tn(7,e,r,t),e.lanes=n,e}function Uu(e,t,n,r){return e=Tn(22,e,r,t),e.elementType=Fy,e.lanes=n,e.stateNode={isHidden:!1},e}function rd(e,t,n){return e=Tn(6,e,null,t),e.lanes=n,e}function id(e,t,n){return t=Tn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lc(0),this.expirationTimes=Lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function rp(e,t,n,r,i,a,o,s,l){return e=new Zk(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Tn(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$h(a),e}function Gk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ha,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ov(e){if(!e)return yi;e=e._reactInternals;e:{if(Ji(e)!==e||e.tag!==1)throw Error(U(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(cn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(U(171))}if(e.tag===1){var n=e.type;if(cn(n))return T0(e,n,t)}return t}function Pv(e,t,n,r,i,a,o,s,l){return e=rp(n,r,!0,e,i,a,o,s,l),e.context=Ov(null),n=e.current,r=Qt(),i=fi(n),a=Ar(r,i),a.callback=t??null,ci(n,a,i),e.current.lanes=i,Ss(e,i,r),dn(e,r),e}function Bu(e,t,n,r){var i=t.current,a=Qt(),o=fi(i);return n=Ov(n),t.context===null?t.context=n:t.pendingContext=n,t=Ar(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ci(i,t,o),e!==null&&(Wn(e,i,o,a),ml(e,i,o)),o}function eu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function rg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rg(e,t),(e=e.alternate)&&rg(e,t)}function Kk(){return null}var Av=typeof reportError=="function"?reportError:function(e){console.error(e)};function ap(e){this._internalRoot=e}Vu.prototype.render=ap.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(U(409));Bu(e,t,null,null)};Vu.prototype.unmount=ap.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wi(function(){Bu(null,e,null,null)}),t[Fr]=null}};function Vu(e){this._internalRoot=e}Vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=s0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qr.length&&t!==0&&t<Qr[n].priority;n++);Qr.splice(n,0,e),n===0&&u0(e)}};function op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ig(){}function qk(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=eu(o);a.call(u)}}var o=Pv(t,r,e,0,null,!1,!1,"",ig);return e._reactRootContainer=o,e[Fr]=o.current,qo(e.nodeType===8?e.parentNode:e),Wi(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var u=eu(l);s.call(u)}}var l=rp(e,0,!1,null,null,!1,!1,"",ig);return e._reactRootContainer=l,e[Fr]=l.current,qo(e.nodeType===8?e.parentNode:e),Wi(function(){Bu(t,l,n,r)}),l}function Wu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=eu(o);s.call(l)}}Bu(t,o,e,i)}else o=qk(n,t,e,i,r);return eu(o)}a0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Eo(t.pendingLanes);n!==0&&(Ch(t,n|1),dn(t,xt()),!(je&6)&&(Ka=xt()+500,Si()))}break;case 13:Wi(function(){var r=Lr(e,1);if(r!==null){var i=Qt();Wn(r,e,1,i)}}),ip(e,1)}};Dh=function(e){if(e.tag===13){var t=Lr(e,134217728);if(t!==null){var n=Qt();Wn(t,e,134217728,n)}ip(e,134217728)}};o0=function(e){if(e.tag===13){var t=fi(e),n=Lr(e,t);if(n!==null){var r=Qt();Wn(n,e,t,r)}ip(e,t)}};s0=function(){return He};l0=function(e,t){var n=He;try{return He=e,t()}finally{He=n}};nf=function(e,t,n){switch(t){case"input":if(Kd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Nu(r);if(!i)throw Error(U(90));jy(r),Kd(r,i)}}}break;case"textarea":Uy(e,n);break;case"select":t=n.value,t!=null&&Aa(e,!!n.multiple,t,!1)}};Gy=Jh;Ky=Wi;var Xk={usingClientEntryPoint:!1,Events:[Cs,va,Nu,Hy,Zy,Jh]},vo={findFiberByHostInstance:Pi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qk={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qy(e),e===null?null:e.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||Kk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Au=nl.inject(Qk),dr=nl}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xk;wn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(t))throw Error(U(200));return Gk(e,t,null,n)};wn.createRoot=function(e,t){if(!op(e))throw Error(U(299));var n=!1,r="",i=Av;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=rp(e,1,!1,null,null,n,!1,r,i),e[Fr]=t.current,qo(e.nodeType===8?e.parentNode:e),new ap(t)};wn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=Qy(t),e=e===null?null:e.stateNode,e};wn.flushSync=function(e){return Wi(e)};wn.hydrate=function(e,t,n){if(!Yu(t))throw Error(U(200));return Wu(null,e,t,!0,n)};wn.hydrateRoot=function(e,t,n){if(!op(e))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",o=Av;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Pv(t,null,e,1,n??null,i,!1,a,o),e[Fr]=t.current,qo(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vu(t)};wn.render=function(e,t,n){if(!Yu(t))throw Error(U(200));return Wu(null,e,t,!1,n)};wn.unmountComponentAtNode=function(e){if(!Yu(e))throw Error(U(40));return e._reactRootContainer?(Wi(function(){Wu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1};wn.unstable_batchedUpdates=Jh;wn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yu(n))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Wu(e,t,n,!1,r)};wn.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=wn})(K1);var ag=Ud;$d.createRoot=ag.createRoot,$d.hydrateRoot=ag.hydrateRoot;var zf=function(e,t){return zf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zf(e,t)};function Jk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zf(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ot=function(){return Ot=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ot.apply(this,arguments)};function eS(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function oa(e,t,n,r){function i(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function s(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?a(c.value):i(c.value).then(s,l)}u((r=r.apply(e,t||[])).next())})}function sa(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(n=0)),n;)try{if(r=1,i&&(a=u[0]&2?i.return:u[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,u[1])).done)return a;switch(i=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){n.label=u[1];break}if(u[0]===6&&n.label<a[1]){n.label=a[1],a=u;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(u);break}a[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],i=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function or(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function lp(e,t){return e(t={exports:{}},t.exports),t.exports}var Ti=lp(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function r(){var i=this;this.locked=new Map,this.addToLocked=function(a,o){var s=i.locked.get(a);s===void 0?o===void 0?i.locked.set(a,[]):i.locked.set(a,[o]):o!==void 0&&(s.unshift(o),i.locked.set(a,s))},this.isLocked=function(a){return i.locked.has(a)},this.lock=function(a){return new Promise(function(o,s){i.isLocked(a)?i.addToLocked(a,o):(i.addToLocked(a),o())})},this.unlock=function(a){var o=i.locked.get(a);if(o!==void 0&&o.length!==0){var s=o.pop();i.locked.set(a,o),s!==void 0&&setTimeout(s,0)}else i.locked.delete(a)}}return r.getInstance=function(){return r.instance===void 0&&(r.instance=new r),r.instance},r}();t.default=function(){return n.getInstance()}});sp(Ti);var tS=sp(lp(function(e,t){var n=Ca&&Ca.__awaiter||function(l,u,c,d){return new(c||(c=Promise))(function(f,x){function v(m){try{S(d.next(m))}catch(h){x(h)}}function p(m){try{S(d.throw(m))}catch(h){x(h)}}function S(m){m.done?f(m.value):new c(function(h){h(m.value)}).then(v,p)}S((d=d.apply(l,u||[])).next())})},r=Ca&&Ca.__generator||function(l,u){var c,d,f,x,v={label:0,sent:function(){if(1&f[0])throw f[1];return f[1]},trys:[],ops:[]};return x={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(x[Symbol.iterator]=function(){return this}),x;function p(S){return function(m){return function(h){if(c)throw new TypeError("Generator is already executing.");for(;v;)try{if(c=1,d&&(f=2&h[0]?d.return:h[0]?d.throw||((f=d.return)&&f.call(d),0):d.next)&&!(f=f.call(d,h[1])).done)return f;switch(d=0,f&&(h=[2&h[0],f.value]),h[0]){case 0:case 1:f=h;break;case 4:return v.label++,{value:h[1],done:!1};case 5:v.label++,d=h[1],h=[0];continue;case 7:h=v.ops.pop(),v.trys.pop();continue;default:if(f=v.trys,!((f=f.length>0&&f[f.length-1])||h[0]!==6&&h[0]!==2)){v=0;continue}if(h[0]===3&&(!f||h[1]>f[0]&&h[1]<f[3])){v.label=h[1];break}if(h[0]===6&&v.label<f[1]){v.label=f[1],f=h;break}if(f&&v.label<f[2]){v.label=f[2],v.ops.push(h);break}f[2]&&v.ops.pop(),v.trys.pop();continue}h=u.call(l,v)}catch(g){h=[6,g],d=0}finally{c=f=0}if(5&h[0])throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}([S,m])}}};Object.defineProperty(t,"__esModule",{value:!0});var i="browser-tabs-lock-key";function a(l){return new Promise(function(u){return setTimeout(u,l)})}function o(l){for(var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",c="",d=0;d<l;d++)c+=u[Math.floor(Math.random()*u.length)];return c}var s=function(){function l(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+o(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),l.waiters===void 0&&(l.waiters=[])}return l.prototype.acquireLock=function(u,c){return c===void 0&&(c=5e3),n(this,void 0,void 0,function(){var d,f,x,v,p,S;return r(this,function(m){switch(m.label){case 0:d=Date.now()+o(4),f=Date.now()+c,x=i+"-"+u,v=window.localStorage,m.label=1;case 1:return Date.now()<f?[4,a(30)]:[3,8];case 2:return m.sent(),v.getItem(x)!==null?[3,5]:(p=this.id+"-"+u+"-"+d,[4,a(Math.floor(25*Math.random()))]);case 3:return m.sent(),v.setItem(x,JSON.stringify({id:this.id,iat:d,timeoutKey:p,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,a(30)];case 4:return m.sent(),(S=v.getItem(x))!==null&&(S=JSON.parse(S)).id===this.id&&S.iat===d?(this.acquiredIatSet.add(d),this.refreshLockWhileAcquired(x,d),[2,!0]):[3,7];case 5:return l.lockCorrector(),[4,this.waitForSomethingToChange(f)];case 6:m.sent(),m.label=7;case 7:return d=Date.now()+o(4),[3,1];case 8:return[2,!1]}})})},l.prototype.refreshLockWhileAcquired=function(u,c){return n(this,void 0,void 0,function(){var d=this;return r(this,function(f){return setTimeout(function(){return n(d,void 0,void 0,function(){var x,v;return r(this,function(p){switch(p.label){case 0:return[4,Ti.default().lock(c)];case 1:return p.sent(),this.acquiredIatSet.has(c)?(x=window.localStorage,(v=x.getItem(u))===null?(Ti.default().unlock(c),[2]):((v=JSON.parse(v)).timeRefreshed=Date.now(),x.setItem(u,JSON.stringify(v)),Ti.default().unlock(c),this.refreshLockWhileAcquired(u,c),[2])):(Ti.default().unlock(c),[2])}})})},1e3),[2]})})},l.prototype.waitForSomethingToChange=function(u){return n(this,void 0,void 0,function(){return r(this,function(c){switch(c.label){case 0:return[4,new Promise(function(d){var f=!1,x=Date.now(),v=!1;function p(){if(v||(window.removeEventListener("storage",p),l.removeFromWaiting(p),clearTimeout(S),v=!0),!f){f=!0;var m=50-(Date.now()-x);m>0?setTimeout(d,m):d()}}window.addEventListener("storage",p),l.addToWaiting(p);var S=setTimeout(p,Math.max(0,u-Date.now()))})];case 1:return c.sent(),[2]}})})},l.addToWaiting=function(u){this.removeFromWaiting(u),l.waiters!==void 0&&l.waiters.push(u)},l.removeFromWaiting=function(u){l.waiters!==void 0&&(l.waiters=l.waiters.filter(function(c){return c!==u}))},l.notifyWaiters=function(){l.waiters!==void 0&&l.waiters.slice().forEach(function(u){return u()})},l.prototype.releaseLock=function(u){return n(this,void 0,void 0,function(){return r(this,function(c){switch(c.label){case 0:return[4,this.releaseLock__private__(u)];case 1:return[2,c.sent()]}})})},l.prototype.releaseLock__private__=function(u){return n(this,void 0,void 0,function(){var c,d,f;return r(this,function(x){switch(x.label){case 0:return c=window.localStorage,d=i+"-"+u,(f=c.getItem(d))===null?[2]:(f=JSON.parse(f)).id!==this.id?[3,2]:[4,Ti.default().lock(f.iat)];case 1:x.sent(),this.acquiredIatSet.delete(f.iat),c.removeItem(d),Ti.default().unlock(f.iat),l.notifyWaiters(),x.label=2;case 2:return[2]}})})},l.lockCorrector=function(){for(var u=Date.now()-5e3,c=window.localStorage,d=Object.keys(c),f=!1,x=0;x<d.length;x++){var v=d[x];if(v.includes(i)){var p=c.getItem(v);p!==null&&((p=JSON.parse(p)).timeRefreshed===void 0&&p.timeAcquired<u||p.timeRefreshed!==void 0&&p.timeRefreshed<u)&&(c.removeItem(v),f=!0)}}f&&l.notifyWaiters()},l.waiters=void 0,l}();t.default=s}));const nS={timeoutInSeconds:60},Mv={name:"auth0-spa-js",version:"2.0.4"},Iv=()=>Date.now();let Mr=class Ff extends Error{constructor(t,n){super(n),this.error=t,this.error_description=n,Object.setPrototypeOf(this,Ff.prototype)}static fromPayload({error:t,error_description:n}){return new Ff(t,n)}},rS=class Rv extends Mr{constructor(t,n,r,i=null){super(t,n),this.state=r,this.appState=i,Object.setPrototypeOf(this,Rv.prototype)}},Lf=class Nv extends Mr{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,Nv.prototype)}},iS=class zv extends Lf{constructor(t){super(),this.popup=t,Object.setPrototypeOf(this,zv.prototype)}},aS=class Fv extends Mr{constructor(t){super("cancelled","Popup closed"),this.popup=t,Object.setPrototypeOf(this,Fv.prototype)}},oS=class Lv extends Mr{constructor(t,n,r){super(t,n),this.mfa_token=r,Object.setPrototypeOf(this,Lv.prototype)}},jv=class $v extends Mr{constructor(t,n){super("missing_refresh_token",`Missing Refresh Token (audience: '${og(t,["default"])}', scope: '${og(n)}')`),this.audience=t,this.scope=n,Object.setPrototypeOf(this,$v.prototype)}};function og(e,t=[]){return e&&!t.includes(e)?e:""}const kl=()=>window.crypto,ad=()=>{const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";let t="";return Array.from(kl().getRandomValues(new Uint8Array(43))).forEach(n=>t+=e[n%e.length]),t},sg=e=>btoa(e),jf=e=>{var{clientId:t}=e,n=or(e,["clientId"]);return new URLSearchParams((r=>Object.keys(r).filter(i=>r[i]!==void 0).reduce((i,a)=>Object.assign(Object.assign({},i),{[a]:r[a]}),{}))(Object.assign({client_id:t},n))).toString()},lg=e=>(t=>decodeURIComponent(atob(t).split("").map(n=>"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)).join("")))(e.replace(/_/g,"/").replace(/-/g,"+")),sS=async(e,t)=>{const n=await fetch(e,t);return{ok:n.ok,json:await n.json()}},lS=async(e,t,n)=>{const r=new AbortController;let i;return t.signal=r.signal,Promise.race([sS(e,t),new Promise((a,o)=>{i=setTimeout(()=>{r.abort(),o(new Error("Timeout when executing 'fetch'"))},n)})]).finally(()=>{clearTimeout(i)})},uS=async(e,t,n,r,i,a,o)=>{return s={auth:{audience:t,scope:n},timeout:i,fetchUrl:e,fetchOptions:r,useFormData:o},l=a,new Promise(function(u,c){const d=new MessageChannel;d.port1.onmessage=function(f){f.data.error?c(new Error(f.data.error)):u(f.data),d.port1.close()},l.postMessage(s,[d.port2])});var s,l},cS=async(e,t,n,r,i,a,o=1e4)=>i?uS(e,t,n,r,o,i,a):lS(e,r,o);async function dS(e,t){var{baseUrl:n,timeout:r,audience:i,scope:a,auth0Client:o,useFormData:s}=e,l=or(e,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);const u=s?jf(l):JSON.stringify(l);return await async function(c,d,f,x,v,p,S){let m,h=null;for(let M=0;M<3;M++)try{m=await cS(c,f,x,v,p,S,d),h=null;break}catch(W){h=W}if(h)throw h;const g=m.json,{error:C,error_description:w}=g,D=or(g,["error","error_description"]),{ok:E}=m;if(!E){const M=w||`HTTP error. Unable to fetch ${c}`;throw C==="mfa_required"?new oS(C,M,D.mfa_token):C==="missing_refresh_token"?new jv(f,x):new Mr(C||"request_error",M)}return D}(`${n}/oauth/token`,r,i||"default",a,{method:"POST",body:u,headers:{"Content-Type":s?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(o||Mv))}},t,s)}const rl=(...e)=>{return(t=e.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(t))).join(" ");var t};class ur{constructor(t,n="@@auth0spajs@@",r){this.prefix=n,this.suffix=r,this.clientId=t.clientId,this.scope=t.scope,this.audience=t.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(t){const[n,r,i,a]=t.split("::");return new ur({clientId:r,scope:a,audience:i},n)}static fromCacheEntry(t){const{scope:n,audience:r,client_id:i}=t;return new ur({scope:n,audience:r,clientId:i})}}let fS=class{set(t,n){localStorage.setItem(t,JSON.stringify(n))}get(t){const n=window.localStorage.getItem(t);if(n)try{return JSON.parse(n)}catch{return}}remove(t){localStorage.removeItem(t)}allKeys(){return Object.keys(window.localStorage).filter(t=>t.startsWith("@@auth0spajs@@"))}},Uv=class{constructor(){this.enclosedCache=function(){let t={};return{set(n,r){t[n]=r},get(n){const r=t[n];if(r)return r},remove(n){delete t[n]},allKeys:()=>Object.keys(t)}}()}},hS=class{constructor(t,n,r){this.cache=t,this.keyManifest=n,this.nowProvider=r||Iv}async setIdToken(t,n,r){var i;const a=this.getIdTokenCacheKey(t);await this.cache.set(a,{id_token:n,decodedToken:r}),await((i=this.keyManifest)===null||i===void 0?void 0:i.add(a))}async getIdToken(t){const n=await this.cache.get(this.getIdTokenCacheKey(t.clientId));if(!n&&t.scope&&t.audience){const r=await this.get(t);return!r||!r.id_token||!r.decodedToken?void 0:{id_token:r.id_token,decodedToken:r.decodedToken}}if(n)return{id_token:n.id_token,decodedToken:n.decodedToken}}async get(t,n=0){var r;let i=await this.cache.get(t.toKey());if(!i){const s=await this.getCacheKeys();if(!s)return;const l=this.matchExistingCacheKey(t,s);l&&(i=await this.cache.get(l))}if(!i)return;const a=await this.nowProvider(),o=Math.floor(a/1e3);return i.expiresAt-n<o?i.body.refresh_token?(i.body={refresh_token:i.body.refresh_token},await this.cache.set(t.toKey(),i),i.body):(await this.cache.remove(t.toKey()),void await((r=this.keyManifest)===null||r===void 0?void 0:r.remove(t.toKey()))):i.body}async set(t){var n;const r=new ur({clientId:t.client_id,scope:t.scope,audience:t.audience}),i=await this.wrapCacheEntry(t);await this.cache.set(r.toKey(),i),await((n=this.keyManifest)===null||n===void 0?void 0:n.add(r.toKey()))}async clear(t){var n;const r=await this.getCacheKeys();r&&(await r.filter(i=>!t||i.includes(t)).reduce(async(i,a)=>{await i,await this.cache.remove(a)},Promise.resolve()),await((n=this.keyManifest)===null||n===void 0?void 0:n.clear()))}async wrapCacheEntry(t){const n=await this.nowProvider();return{body:t,expiresAt:Math.floor(n/1e3)+t.expires_in}}async getCacheKeys(){var t;return this.keyManifest?(t=await this.keyManifest.get())===null||t===void 0?void 0:t.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(t){return new ur({clientId:t},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(t,n){return n.filter(r=>{var i;const a=ur.fromKey(r),o=new Set(a.scope&&a.scope.split(" ")),s=((i=t.scope)===null||i===void 0?void 0:i.split(" "))||[],l=a.scope&&s.reduce((u,c)=>u&&o.has(c),!0);return a.prefix==="@@auth0spajs@@"&&a.clientId===t.clientId&&a.audience===t.audience&&l})[0]}},pS=class{constructor(t,n){this.storage=t,this.clientId=n,this.storageKey=`a0.spajs.txs.${this.clientId}`,this.transaction=this.storage.get(this.storageKey)}create(t){this.transaction=t,this.storage.save(this.storageKey,t,{daysUntilExpire:1})}get(){return this.transaction}remove(){delete this.transaction,this.storage.remove(this.storageKey)}};const xo=e=>typeof e=="number",mS=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],gS=e=>{if(!e.id_token)throw new Error("ID token is required but missing");const t=(a=>{const o=a.split("."),[s,l,u]=o;if(o.length!==3||!s||!l||!u)throw new Error("ID token could not be decoded");const c=JSON.parse(lg(l)),d={__raw:a},f={};return Object.keys(c).forEach(x=>{d[x]=c[x],mS.includes(x)||(f[x]=c[x])}),{encoded:{header:s,payload:l,signature:u},header:JSON.parse(lg(s)),claims:d,user:f}})(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(t.header.alg!=="RS256")throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!t.claims.aud||typeof t.claims.aud!="string"&&!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);if(t.claims.aud.length>1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`)}}else if(t.claims.aud!==e.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`)}if(e.max_age&&!xo(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(t.claims.exp==null||!xo(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!xo(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");const n=e.leeway||60,r=new Date(e.now||Date.now()),i=new Date(0);if(i.setUTCSeconds(t.claims.exp+n),r>i)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${i})`);if(t.claims.nbf!=null&&xo(t.claims.nbf)){const a=new Date(0);if(a.setUTCSeconds(t.claims.nbf-n),r<a)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${a}`)}if(t.claims.auth_time!=null&&xo(t.claims.auth_time)){const a=new Date(0);if(a.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+n),r>a)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${a}`)}if(e.organizationId){if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(e.organizationId!==t.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e.organizationId}", found "${t.claims.org_id}"`)}return t};var Ii=lp(function(e,t){var n=Ca&&Ca.__assign||function(){return n=Object.assign||function(l){for(var u,c=1,d=arguments.length;c<d;c++)for(var f in u=arguments[c])Object.prototype.hasOwnProperty.call(u,f)&&(l[f]=u[f]);return l},n.apply(this,arguments)};function r(l,u){if(!u)return"";var c="; "+l;return u===!0?c:c+"="+u}function i(l,u,c){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(u).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(d){if(typeof d.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d.expires),d.expires=f}return r("Expires",d.expires?d.expires.toUTCString():"")+r("Domain",d.domain)+r("Path",d.path)+r("Secure",d.secure)+r("SameSite",d.sameSite)}(c)}function a(l){for(var u={},c=l?l.split("; "):[],d=/(%[\dA-F]{2})+/gi,f=0;f<c.length;f++){var x=c[f].split("="),v=x.slice(1).join("=");v.charAt(0)==='"'&&(v=v.slice(1,-1));try{u[x[0].replace(d,decodeURIComponent)]=v.replace(d,decodeURIComponent)}catch{}}return u}function o(){return a(document.cookie)}function s(l,u,c){document.cookie=i(l,u,n({path:"/"},c))}t.__esModule=!0,t.encode=i,t.parse=a,t.getAll=o,t.get=function(l){return o()[l]},t.set=s,t.remove=function(l,u){s(l,"",n(n({},u),{expires:-1}))}});sp(Ii),Ii.encode,Ii.parse,Ii.getAll;var yS=Ii.get,Bv=Ii.set,Vv=Ii.remove;const ca={get(e){const t=yS(e);if(t!==void 0)return JSON.parse(t)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0,sameSite:"none"}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),Bv(e,JSON.stringify(t),r)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),Vv(e,n)}},vS={get(e){return ca.get(e)||ca.get(`_legacy_${e}`)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),Bv(`_legacy_${e}`,JSON.stringify(t),r),ca.save(e,t,n)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),Vv(e,n),ca.remove(e,t),ca.remove(`_legacy_${e}`,t)}},xS={get(e){if(typeof sessionStorage>"u")return;const t=sessionStorage.getItem(e);return t!=null?JSON.parse(t):void 0},save(e,t){sessionStorage.setItem(e,JSON.stringify(t))},remove(e){sessionStorage.removeItem(e)}};function wS(e,t,n){var r=t===void 0?null:t,i=function(l,u){var c=atob(l);if(u){for(var d=new Uint8Array(c.length),f=0,x=c.length;f<x;++f)d[f]=c.charCodeAt(f);return String.fromCharCode.apply(null,new Uint16Array(d.buffer))}return c}(e,n!==void 0&&n),a=i.indexOf(`
`,10)+1,o=i.substring(a)+(r?"//# sourceMappingURL="+r:""),s=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(s)}var ug,cg,dg,od,_S=(ug="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==",cg=null,dg=!1,function(e){return od=od||wS(ug,cg,dg),new Worker(od,e)});const sd={};let kS=class{constructor(t,n){this.cache=t,this.clientId=n,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(t){var n;const r=new Set(((n=await this.cache.get(this.manifestKey))===null||n===void 0?void 0:n.keys)||[]);r.add(t),await this.cache.set(this.manifestKey,{keys:[...r]})}async remove(t){const n=await this.cache.get(this.manifestKey);if(n){const r=new Set(n.keys);return r.delete(t),r.size>0?await this.cache.set(this.manifestKey,{keys:[...r]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(t){return`@@auth0spajs@@::${t}`}};const SS={memory:()=>new Uv().enclosedCache,localstorage:()=>new fS},fg=e=>SS[e],hg=e=>{const{openUrl:t,onRedirect:n}=e,r=or(e,["openUrl","onRedirect"]);return Object.assign(Object.assign({},r),{openUrl:t===!1||t?t:n})},ld=new tS;let bS=class{constructor(t){let n,r;if(this.userCache=new Uv().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await ld.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),t),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),t.authorizationParams)}),typeof window<"u"&&(()=>{if(!kl())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(kl().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),t.cache&&t.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),t.cache)r=t.cache;else{if(n=t.cacheLocation||"memory",!fg(n))throw new Error(`Invalid cache location "${n}"`);r=fg(n)()}this.httpTimeoutMs=t.httpTimeoutInSeconds?1e3*t.httpTimeoutInSeconds:1e4,this.cookieStorage=t.legacySameSiteCookie===!1?ca:vS,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(o=>`auth0.${o}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=t.sessionCheckExpiryDays||1;const i=t.useCookiesForTransactions?this.cookieStorage:xS;var a;this.scope=rl("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new pS(i,this.options.clientId),this.nowProvider=this.options.nowProvider||Iv,this.cacheManager=new hS(r,r.allKeys?void 0:new kS(r,this.options.clientId),this.nowProvider),this.domainUrl=(a=this.options.domain,/^https?:\/\//.test(a)?a:`https://${a}`),this.tokenIssuer=((o,s)=>o?o.startsWith("https://")?o:`https://${o}/`:`${s}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&n==="memory"&&(this.worker=new _S)}_url(t){const n=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||Mv)));return`${this.domainUrl}${t}&auth0Client=${n}`}_authorizeUrl(t){return this._url(`/authorize?${jf(t)}`)}async _verifyIdToken(t,n,r){const i=await this.nowProvider();return gS({iss:this.tokenIssuer,aud:this.options.clientId,id_token:t,nonce:n,organizationId:r,leeway:this.options.leeway,max_age:(a=this.options.authorizationParams.max_age,typeof a!="string"?a:parseInt(a,10)||void 0),now:i});var a}_processOrgIdHint(t){t?this.cookieStorage.save(this.orgHintCookieName,t,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(t,n,r){const i=sg(ad()),a=sg(ad()),o=ad(),s=(c=>{const d=new Uint8Array(c);return(f=>{const x={"+":"-","/":"_","=":""};return f.replace(/[+/=]/g,v=>x[v])})(window.btoa(String.fromCharCode(...Array.from(d))))})(await(async c=>await kl().subtle.digest({name:"SHA-256"},new TextEncoder().encode(c)))(o)),l=((c,d,f,x,v,p,S,m)=>Object.assign(Object.assign(Object.assign({client_id:c.clientId},c.authorizationParams),f),{scope:rl(d,f.scope),response_type:"code",response_mode:m||"query",state:x,nonce:v,redirect_uri:S||c.authorizationParams.redirect_uri,code_challenge:p,code_challenge_method:"S256"}))(this.options,this.scope,t,i,a,s,t.redirect_uri||this.options.authorizationParams.redirect_uri||r,n==null?void 0:n.response_mode),u=this._authorizeUrl(l);return{nonce:a,code_verifier:o,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:i,url:u}}async loginWithPopup(t,n){var r;if(t=t||{},!(n=n||{}).popup&&(n.popup=(s=>{const l=window.screenX+(window.innerWidth-400)/2,u=window.screenY+(window.innerHeight-600)/2;return window.open(s,"auth0:authorize:popup",`left=${l},top=${u},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!n.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");const i=await this._prepareAuthorizeUrl(t.authorizationParams||{},{response_mode:"web_message"},window.location.origin);n.popup.location.href=i.url;const a=await(s=>new Promise((l,u)=>{let c;const d=setInterval(()=>{s.popup&&s.popup.closed&&(clearInterval(d),clearTimeout(f),window.removeEventListener("message",c,!1),u(new aS(s.popup)))},1e3),f=setTimeout(()=>{clearInterval(d),u(new iS(s.popup)),window.removeEventListener("message",c,!1)},1e3*(s.timeoutInSeconds||60));c=function(x){if(x.data&&x.data.type==="authorization_response"){if(clearTimeout(f),clearInterval(d),window.removeEventListener("message",c,!1),s.popup.close(),x.data.response.error)return u(Mr.fromPayload(x.data.response));l(x.data.response)}},window.addEventListener("message",c)}))(Object.assign(Object.assign({},n),{timeoutInSeconds:n.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(i.state!==a.state)throw new Error("Invalid state");const o=((r=t.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:i.audience,scope:i.scope,code_verifier:i.code_verifier,grant_type:"authorization_code",code:a.code,redirect_uri:i.redirect_uri},{nonceIn:i.nonce,organizationId:o})}async getUser(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.user}async getIdTokenClaims(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.claims}async loginWithRedirect(t={}){var n;const r=hg(t),{openUrl:i,fragment:a,appState:o}=r,s=or(r,["openUrl","fragment","appState"]),l=((n=s.authorizationParams)===null||n===void 0?void 0:n.organization)||this.options.authorizationParams.organization,u=await this._prepareAuthorizeUrl(s.authorizationParams||{}),{url:c}=u,d=or(u,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},d),{appState:o}),l&&{organizationId:l}));const f=a?`${c}#${a}`:c;i?await i(f):window.location.assign(f)}async handleRedirectCallback(t=window.location.href){const n=t.split("?").slice(1);if(n.length===0)throw new Error("There are no query params available for parsing.");const{state:r,code:i,error:a,error_description:o}=(d=>{d.indexOf("#")>-1&&(d=d.substring(0,d.indexOf("#")));const f=new URLSearchParams(d);return{state:f.get("state"),code:f.get("code")||void 0,error:f.get("error")||void 0,error_description:f.get("error_description")||void 0}})(n.join("")),s=this.transactionManager.get();if(!s)throw new Error("Invalid state");if(this.transactionManager.remove(),a)throw new rS(a,o||a,r,s.appState);if(!s.code_verifier||s.state&&s.state!==r)throw new Error("Invalid state");const l=s.organizationId,u=s.nonce,c=s.redirect_uri;return await this._requestToken(Object.assign({audience:s.audience,scope:s.scope,code_verifier:s.code_verifier,grant_type:"authorization_code",code:i},c?{redirect_uri:c}:{}),{nonceIn:u,organizationId:l}),{appState:s.appState}}async checkSession(t){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(t)}catch{}}async getTokenSilently(t={}){var n;const r=Object.assign(Object.assign({cacheMode:"on"},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:rl(this.scope,(n=t.authorizationParams)===null||n===void 0?void 0:n.scope)})}),i=await((a,o)=>{let s=sd[o];return s||(s=a().finally(()=>{delete sd[o],s=null}),sd[o]=s),s})(()=>this._getTokenSilently(r),`${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`);return t.detailedResponse?i:i==null?void 0:i.access_token}async _getTokenSilently(t){const{cacheMode:n}=t,r=or(t,["cacheMode"]);if(n!=="off"){const i=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(i)return i}if(n!=="cache-only"){if(!await(async(i,a=3)=>{for(let o=0;o<a;o++)if(await i())return!0;return!1})(()=>ld.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new Lf;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),n!=="off"){const u=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(u)return u}const i=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(r):await this._getTokenFromIFrame(r),{id_token:a,access_token:o,oauthTokenScope:s,expires_in:l}=i;return Object.assign(Object.assign({id_token:a,access_token:o},s?{scope:s}:null),{expires_in:l})}finally{await ld.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(t={},n={}){var r;const i=Object.assign(Object.assign({},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:rl(this.scope,(r=t.authorizationParams)===null||r===void 0?void 0:r.scope)})});return n=Object.assign(Object.assign({},nS),n),await this.loginWithPopup(i,n),(await this.cacheManager.get(new ur({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(t){t.clientId!==null?t.clientId=t.clientId||this.options.clientId:delete t.clientId;const n=t.logoutParams||{},{federated:r}=n,i=or(n,["federated"]),a=r?"&federated":"";return this._url(`/v2/logout?${jf(Object.assign({clientId:t.clientId},i))}`)+a}async logout(t={}){const n=hg(t),{openUrl:r}=n,i=or(n,["openUrl"]);t.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(t.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");const a=this._buildLogoutUrl(i);r?await r(a):r!==!1&&window.location.assign(a)}async _getTokenFromIFrame(t){const n=Object.assign(Object.assign({},t.authorizationParams),{prompt:"none"}),r=this.cookieStorage.get(this.orgHintCookieName);r&&!n.organization&&(n.organization=r);const{url:i,state:a,nonce:o,code_verifier:s,redirect_uri:l,scope:u,audience:c}=await this._prepareAuthorizeUrl(n,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new Mr("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");const d=t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,f=await((v,p,S=60)=>new Promise((m,h)=>{const g=window.document.createElement("iframe");g.setAttribute("width","0"),g.setAttribute("height","0"),g.style.display="none";const C=()=>{window.document.body.contains(g)&&(window.document.body.removeChild(g),window.removeEventListener("message",w,!1))};let w;const D=setTimeout(()=>{h(new Lf),C()},1e3*S);w=function(E){if(E.origin!=p||!E.data||E.data.type!=="authorization_response")return;const M=E.source;M&&M.close(),E.data.response.error?h(Mr.fromPayload(E.data.response)):m(E.data.response),clearTimeout(D),window.removeEventListener("message",w,!1),setTimeout(C,2e3)},window.addEventListener("message",w,!1),window.document.body.appendChild(g),g.setAttribute("src",v)}))(i,this.domainUrl,d);if(a!==f.state)throw new Error("Invalid state");const x=await this._requestToken(Object.assign(Object.assign({},t.authorizationParams),{code_verifier:s,code:f.code,grant_type:"authorization_code",redirect_uri:l,timeout:t.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:o});return Object.assign(Object.assign({},x),{scope:u,oauthTokenScope:x.scope,audience:c})}catch(d){throw d.error==="login_required"&&this.logout({openUrl:!1}),d}}async _getTokenUsingRefreshToken(t){const n=await this.cacheManager.get(new ur({scope:t.authorizationParams.scope,audience:t.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(n&&n.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw new jv(t.authorizationParams.audience||"default",t.authorizationParams.scope)}const r=t.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,i=typeof t.timeoutInSeconds=="number"?1e3*t.timeoutInSeconds:null;try{const a=await this._requestToken(Object.assign(Object.assign(Object.assign({},t.authorizationParams),{grant_type:"refresh_token",refresh_token:n&&n.refresh_token,redirect_uri:r}),i&&{timeout:i}));return Object.assign(Object.assign({},a),{scope:t.authorizationParams.scope,oauthTokenScope:a.scope,audience:t.authorizationParams.audience||"default"})}catch(a){if((a.message.indexOf("Missing Refresh Token")>-1||a.message&&a.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw a}}async _saveEntryInCache(t){const{id_token:n,decodedToken:r}=t,i=or(t,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:n,decodedToken:r}),await this.cacheManager.setIdToken(this.options.clientId,t.id_token,t.decodedToken),await this.cacheManager.set(i)}async _getIdTokenFromCache(){const t=this.options.authorizationParams.audience||"default",n=await this.cacheManager.getIdToken(new ur({clientId:this.options.clientId,audience:t,scope:this.scope})),r=this.userCache.get("@@user@@");return n&&n.id_token===(r==null?void 0:r.id_token)?r:(this.userCache.set("@@user@@",n),n)}async _getEntryFromCache({scope:t,audience:n,clientId:r}){const i=await this.cacheManager.get(new ur({scope:t,audience:n,clientId:r}),60);if(i&&i.access_token){const{access_token:a,oauthTokenScope:o,expires_in:s}=i,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:a},o?{scope:o}:null),{expires_in:s})}}async _requestToken(t,n){const{nonceIn:r,organizationId:i}=n||{},a=await dS(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},t),this.worker),o=await this._verifyIdToken(a.id_token,r,i);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},a),{decodedToken:o,scope:t.scope,audience:t.audience||"default"}),a.scope?{oauthTokenScope:a.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(o.claims.org_id),Object.assign(Object.assign({},a),{decodedToken:o})}};var Yv={isAuthenticated:!1,isLoading:!0},wr=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},CS=Ot(Ot({},Yv),{buildAuthorizeUrl:wr,buildLogoutUrl:wr,getAccessTokenSilently:wr,getAccessTokenWithPopup:wr,getIdTokenClaims:wr,loginWithRedirect:wr,loginWithPopup:wr,logout:wr,handleRedirectCallback:wr}),Wv=T.createContext(CS),pg=function(e){Jk(t,e);function t(n,r){var i=e.call(this,r||n)||this;return i.error=n,i.error_description=r,Object.setPrototypeOf(i,t.prototype),i}return t}(Error),DS=/[?&]code=[^&]+/,ES=/[?&]state=[^&]+/,TS=/[?&]error=[^&]+/,OS=function(e){return e===void 0&&(e=window.location.search),(DS.test(e)||TS.test(e))&&ES.test(e)},Hv=function(e){return function(t){return t instanceof Error?t:t!==null&&typeof t=="object"&&"error"in t&&typeof t.error=="string"?"error_description"in t&&typeof t.error_description=="string"?new pg(t.error,t.error_description):new pg(t.error):new Error(e)}},mg=Hv("Login failed"),ud=Hv("Get access token failed"),Zv=function(e){var t;e!=null&&e.redirectUri&&(console.warn("Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"),e.authorizationParams=e.authorizationParams||{},e.authorizationParams.redirect_uri=e.redirectUri,delete e.redirectUri),!((t=e==null?void 0:e.authorizationParams)===null||t===void 0)&&t.redirectUri&&(console.warn("Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"),e.authorizationParams.redirect_uri=e.authorizationParams.redirectUri,delete e.authorizationParams.redirectUri)},PS=function(e,t){switch(t.type){case"LOGIN_POPUP_STARTED":return Ot(Ot({},e),{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return Ot(Ot({},e),{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return e.user===t.user?e:Ot(Ot({},e),{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return Ot(Ot({},e),{isAuthenticated:!1,user:void 0});case"ERROR":return Ot(Ot({},e),{isLoading:!1,error:t.error})}},AS=function(e){return Zv(e),Ot(Ot({},e),{auth0Client:{name:"auth0-react",version:"2.0.2"}})},MS=function(e){window.history.replaceState({},document.title,(e==null?void 0:e.returnTo)||window.location.pathname)},IS=function(e){var t=e.children,n=e.skipRedirectCallback,r=e.onRedirectCallback,i=r===void 0?MS:r,a=e.context,o=a===void 0?Wv:a,s=eS(e,["children","skipRedirectCallback","onRedirectCallback","context"]),l=T.useState(function(){return new bS(AS(s))})[0],u=T.useReducer(PS,Yv),c=u[0],d=u[1],f=T.useRef(!1);T.useEffect(function(){f.current||(f.current=!0,function(){return oa(void 0,void 0,void 0,function(){var w,D,E;return sa(this,function(M){switch(M.label){case 0:return M.trys.push([0,7,,8]),w=void 0,OS()&&!n?[4,l.handleRedirectCallback()]:[3,3];case 1:return D=M.sent().appState,[4,l.getUser()];case 2:return w=M.sent(),i(D,w),[3,6];case 3:return[4,l.checkSession()];case 4:return M.sent(),[4,l.getUser()];case 5:w=M.sent(),M.label=6;case 6:return d({type:"INITIALISED",user:w}),[3,8];case 7:return E=M.sent(),d({type:"ERROR",error:mg(E)}),[3,8];case 8:return[2]}})})}())},[l,i,n]);var x=T.useCallback(function(w){return Zv(w),l.loginWithRedirect(w)},[l]),v=T.useCallback(function(w,D){return oa(void 0,void 0,void 0,function(){var E,M;return sa(this,function(W){switch(W.label){case 0:d({type:"LOGIN_POPUP_STARTED"}),W.label=1;case 1:return W.trys.push([1,3,,4]),[4,l.loginWithPopup(w,D)];case 2:return W.sent(),[3,4];case 3:return E=W.sent(),d({type:"ERROR",error:mg(E)}),[2];case 4:return[4,l.getUser()];case 5:return M=W.sent(),d({type:"LOGIN_POPUP_COMPLETE",user:M}),[2]}})})},[l]),p=T.useCallback(function(w){return w===void 0&&(w={}),oa(void 0,void 0,void 0,function(){return sa(this,function(D){switch(D.label){case 0:return[4,l.logout(w)];case 1:return D.sent(),(w.openUrl||w.openUrl===!1)&&d({type:"LOGOUT"}),[2]}})})},[l]),S=T.useCallback(function(w){return oa(void 0,void 0,void 0,function(){var D,E,M,W;return sa(this,function(z){switch(z.label){case 0:return z.trys.push([0,2,3,5]),[4,l.getTokenSilently(w)];case 1:return D=z.sent(),[3,5];case 2:throw E=z.sent(),ud(E);case 3:return M=d,W={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return M.apply(void 0,[(W.user=z.sent(),W)]),[7];case 5:return[2,D]}})})},[l]),m=T.useCallback(function(w,D){return oa(void 0,void 0,void 0,function(){var E,M,W,z;return sa(this,function($){switch($.label){case 0:return $.trys.push([0,2,3,5]),[4,l.getTokenWithPopup(w,D)];case 1:return E=$.sent(),[3,5];case 2:throw M=$.sent(),ud(M);case 3:return W=d,z={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return W.apply(void 0,[(z.user=$.sent(),z)]),[7];case 5:return[2,E]}})})},[l]),h=T.useCallback(function(){return l.getIdTokenClaims()},[l]),g=T.useCallback(function(w){return oa(void 0,void 0,void 0,function(){var D,E,M;return sa(this,function(W){switch(W.label){case 0:return W.trys.push([0,2,3,5]),[4,l.handleRedirectCallback(w)];case 1:return[2,W.sent()];case 2:throw D=W.sent(),ud(D);case 3:return E=d,M={type:"HANDLE_REDIRECT_COMPLETE"},[4,l.getUser()];case 4:return E.apply(void 0,[(M.user=W.sent(),M)]),[7];case 5:return[2]}})})},[l]),C=T.useMemo(function(){return Ot(Ot({},c),{getAccessTokenSilently:S,getAccessTokenWithPopup:m,getIdTokenClaims:h,loginWithRedirect:x,loginWithPopup:v,logout:p,handleRedirectCallback:g})},[c,S,m,h,x,v,p,g]);return ye.createElement(o.Provider,{value:C},t)},io=function(e){return e===void 0&&(e=Wv),T.useContext(e)},tu={},RS={get exports(){return tu},set exports(e){tu=e}},Ze={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=Symbol.for("react.element"),cp=Symbol.for("react.portal"),Hu=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),qu=Symbol.for("react.context"),NS=Symbol.for("react.server_context"),Xu=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Ju=Symbol.for("react.suspense_list"),ec=Symbol.for("react.memo"),tc=Symbol.for("react.lazy"),zS=Symbol.for("react.offscreen"),Gv;Gv=Symbol.for("react.module.reference");function Mn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case up:switch(e=e.type,e){case Hu:case Gu:case Zu:case Qu:case Ju:return e;default:switch(e=e&&e.$$typeof,e){case NS:case qu:case Xu:case tc:case ec:case Ku:return e;default:return t}}case cp:return t}}}Ze.ContextConsumer=qu;Ze.ContextProvider=Ku;Ze.Element=up;Ze.ForwardRef=Xu;Ze.Fragment=Hu;Ze.Lazy=tc;Ze.Memo=ec;Ze.Portal=cp;Ze.Profiler=Gu;Ze.StrictMode=Zu;Ze.Suspense=Qu;Ze.SuspenseList=Ju;Ze.isAsyncMode=function(){return!1};Ze.isConcurrentMode=function(){return!1};Ze.isContextConsumer=function(e){return Mn(e)===qu};Ze.isContextProvider=function(e){return Mn(e)===Ku};Ze.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===up};Ze.isForwardRef=function(e){return Mn(e)===Xu};Ze.isFragment=function(e){return Mn(e)===Hu};Ze.isLazy=function(e){return Mn(e)===tc};Ze.isMemo=function(e){return Mn(e)===ec};Ze.isPortal=function(e){return Mn(e)===cp};Ze.isProfiler=function(e){return Mn(e)===Gu};Ze.isStrictMode=function(e){return Mn(e)===Zu};Ze.isSuspense=function(e){return Mn(e)===Qu};Ze.isSuspenseList=function(e){return Mn(e)===Ju};Ze.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Hu||e===Gu||e===Zu||e===Qu||e===Ju||e===zS||typeof e=="object"&&e!==null&&(e.$$typeof===tc||e.$$typeof===ec||e.$$typeof===Ku||e.$$typeof===qu||e.$$typeof===Xu||e.$$typeof===Gv||e.getModuleId!==void 0)};Ze.typeOf=Mn;(function(e){e.exports=Ze})(RS);function FS(e){function t(H,Z,J,ge,b){for(var ee=0,j=0,Ce=0,ve=0,Pe,we,lt=0,wt=0,_,O=_=Pe=0,P=0,G=0,q=0,N=0,se=J.length,Ye=se-1,Re,he="",et="",Jn="",vr="",A;P<se;){if(we=J.charCodeAt(P),P===Ye&&j+ve+Ce+ee!==0&&(j!==0&&(we=j===47?10:47),ve=Ce=ee=0,se++,Ye++),j+ve+Ce+ee===0){if(P===Ye&&(0<G&&(he=he.replace(f,"")),0<he.trim().length)){switch(we){case 32:case 9:case 59:case 13:case 10:break;default:he+=J.charAt(P)}we=59}switch(we){case 123:for(he=he.trim(),Pe=he.charCodeAt(0),_=1,N=++P;P<se;){switch(we=J.charCodeAt(P)){case 123:_++;break;case 125:_--;break;case 47:switch(we=J.charCodeAt(P+1)){case 42:case 47:e:{for(O=P+1;O<Ye;++O)switch(J.charCodeAt(O)){case 47:if(we===42&&J.charCodeAt(O-1)===42&&P+2!==O){P=O+1;break e}break;case 10:if(we===47){P=O+1;break e}}P=O}}break;case 91:we++;case 40:we++;case 34:case 39:for(;P++<Ye&&J.charCodeAt(P)!==we;);}if(_===0)break;P++}switch(_=J.substring(N,P),Pe===0&&(Pe=(he=he.replace(d,"").trim()).charCodeAt(0)),Pe){case 64:switch(0<G&&(he=he.replace(f,"")),we=he.charCodeAt(1),we){case 100:case 109:case 115:case 45:G=Z;break;default:G=Xe}if(_=t(Z,G,_,we,b+1),N=_.length,0<V&&(G=n(Xe,he,q),A=s(3,_,G,Z,oe,ae,N,we,b,ge),he=G.join(""),A!==void 0&&(N=(_=A.trim()).length)===0&&(we=0,_="")),0<N)switch(we){case 115:he=he.replace(D,o);case 100:case 109:case 45:_=he+"{"+_+"}";break;case 107:he=he.replace(h,"$1 $2"),_=he+"{"+_+"}",_=Me===1||Me===2&&a("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=he+_,ge===112&&(_=(et+=_,""))}else _="";break;default:_=t(Z,n(Z,he,q),_,ge,b+1)}Jn+=_,_=q=G=O=Pe=0,he="",we=J.charCodeAt(++P);break;case 125:case 59:if(he=(0<G?he.replace(f,""):he).trim(),1<(N=he.length))switch(O===0&&(Pe=he.charCodeAt(0),Pe===45||96<Pe&&123>Pe)&&(N=(he=he.replace(" ",":")).length),0<V&&(A=s(1,he,Z,H,oe,ae,et.length,ge,b,ge))!==void 0&&(N=(he=A.trim()).length)===0&&(he="\0\0"),Pe=he.charCodeAt(0),we=he.charCodeAt(1),Pe){case 0:break;case 64:if(we===105||we===99){vr+=he+J.charAt(P);break}default:he.charCodeAt(N-1)!==58&&(et+=i(he,Pe,we,he.charCodeAt(2)))}q=G=O=Pe=0,he="",we=J.charCodeAt(++P)}}switch(we){case 13:case 10:j===47?j=0:1+Pe===0&&ge!==107&&0<he.length&&(G=1,he+="\0"),0<V*ue&&s(0,he,Z,H,oe,ae,et.length,ge,b,ge),ae=1,oe++;break;case 59:case 125:if(j+ve+Ce+ee===0){ae++;break}default:switch(ae++,Re=J.charAt(P),we){case 9:case 32:if(ve+ee+j===0)switch(lt){case 44:case 58:case 9:case 32:Re="";break;default:we!==32&&(Re=" ")}break;case 0:Re="\\0";break;case 12:Re="\\f";break;case 11:Re="\\v";break;case 38:ve+j+ee===0&&(G=q=1,Re="\f"+Re);break;case 108:if(ve+j+ee+ke===0&&0<O)switch(P-O){case 2:lt===112&&J.charCodeAt(P-3)===58&&(ke=lt);case 8:wt===111&&(ke=wt)}break;case 58:ve+j+ee===0&&(O=P);break;case 44:j+Ce+ve+ee===0&&(G=1,Re+="\r");break;case 34:case 39:j===0&&(ve=ve===we?0:ve===0?we:ve);break;case 91:ve+j+Ce===0&&ee++;break;case 93:ve+j+Ce===0&&ee--;break;case 41:ve+j+ee===0&&Ce--;break;case 40:if(ve+j+ee===0){if(Pe===0)switch(2*lt+3*wt){case 533:break;default:Pe=1}Ce++}break;case 64:j+Ce+ve+ee+O+_===0&&(_=1);break;case 42:case 47:if(!(0<ve+ee+Ce))switch(j){case 0:switch(2*we+3*J.charCodeAt(P+1)){case 235:j=47;break;case 220:N=P,j=42}break;case 42:we===47&&lt===42&&N+2!==P&&(J.charCodeAt(N+2)===33&&(et+=J.substring(N,P+1)),Re="",j=0)}}j===0&&(he+=Re)}wt=lt,lt=we,P++}if(N=et.length,0<N){if(G=Z,0<V&&(A=s(2,et,G,H,oe,ae,N,ge,b,ge),A!==void 0&&(et=A).length===0))return vr+et+Jn;if(et=G.join(",")+"{"+et+"}",Me*ke!==0){switch(Me!==2||a(et,2)||(ke=0),ke){case 111:et=et.replace(C,":-moz-$1")+et;break;case 112:et=et.replace(g,"::-webkit-input-$1")+et.replace(g,"::-moz-$1")+et.replace(g,":-ms-input-$1")+et}ke=0}}return vr+et+Jn}function n(H,Z,J){var ge=Z.trim().split(S);Z=ge;var b=ge.length,ee=H.length;switch(ee){case 0:case 1:var j=0;for(H=ee===0?"":H[0]+" ";j<b;++j)Z[j]=r(H,Z[j],J).trim();break;default:var Ce=j=0;for(Z=[];j<b;++j)for(var ve=0;ve<ee;++ve)Z[Ce++]=r(H[ve]+" ",ge[j],J).trim()}return Z}function r(H,Z,J){var ge=Z.charCodeAt(0);switch(33>ge&&(ge=(Z=Z.trim()).charCodeAt(0)),ge){case 38:return Z.replace(m,"$1"+H.trim());case 58:return H.trim()+Z.replace(m,"$1"+H.trim());default:if(0<1*J&&0<Z.indexOf("\f"))return Z.replace(m,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+Z}function i(H,Z,J,ge){var b=H+";",ee=2*Z+3*J+4*ge;if(ee===944){H=b.indexOf(":",9)+1;var j=b.substring(H,b.length-1).trim();return j=b.substring(0,H).trim()+j+";",Me===1||Me===2&&a(j,1)?"-webkit-"+j+j:j}if(Me===0||Me===2&&!a(b,1))return b;switch(ee){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace($,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return j=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+j+"-webkit-"+b+"-ms-flex-pack"+j+b;case 1005:return v.test(b)?b.replace(x,":-webkit-")+b.replace(x,":-moz-")+b:b;case 1e3:switch(j=b.substring(13).trim(),Z=j.indexOf("-")+1,j.charCodeAt(0)+j.charCodeAt(Z)){case 226:j=b.replace(w,"tb");break;case 232:j=b.replace(w,"tb-rl");break;case 220:j=b.replace(w,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+j+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(Z=(b=H).length-10,j=(b.charCodeAt(Z)===33?b.substring(0,Z):b).substring(H.indexOf(":",7)+1).trim(),ee=j.charCodeAt(0)+(j.charCodeAt(7)|0)){case 203:if(111>j.charCodeAt(8))break;case 115:b=b.replace(j,"-webkit-"+j)+";"+b;break;case 207:case 102:b=b.replace(j,"-webkit-"+(102<ee?"inline-":"")+"box")+";"+b.replace(j,"-webkit-"+j)+";"+b.replace(j,"-ms-"+j+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return j=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+j+"-ms-flex-"+j+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(M,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(M,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(z.test(H)===!0)return(j=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?i(H.replace("stretch","fill-available"),Z,J,ge).replace(":fill-available",":stretch"):b.replace(j,"-webkit-"+j)+b.replace(j,"-moz-"+j.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,J+ge===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+b}return b}function a(H,Z){var J=H.indexOf(Z===1?":":"{"),ge=H.substring(0,Z!==3?J:10);return J=H.substring(J+1,H.length-1),Q(Z!==2?ge:ge.replace(W,"$1"),J,Z)}function o(H,Z){var J=i(Z,Z.charCodeAt(0),Z.charCodeAt(1),Z.charCodeAt(2));return J!==Z+";"?J.replace(E," or ($1)").substring(4):"("+Z+")"}function s(H,Z,J,ge,b,ee,j,Ce,ve,Pe){for(var we=0,lt=Z,wt;we<V;++we)switch(wt=Ve[we].call(c,H,lt,J,ge,b,ee,j,Ce,ve,Pe)){case void 0:case!1:case!0:case null:break;default:lt=wt}if(lt!==Z)return lt}function l(H){switch(H){case void 0:case null:V=Ve.length=0;break;default:if(typeof H=="function")Ve[V++]=H;else if(typeof H=="object")for(var Z=0,J=H.length;Z<J;++Z)l(H[Z]);else ue=!!H|0}return l}function u(H){return H=H.prefix,H!==void 0&&(Q=null,H?typeof H!="function"?Me=1:(Me=2,Q=H):Me=0),u}function c(H,Z){var J=H;if(33>J.charCodeAt(0)&&(J=J.trim()),Ne=J,J=[Ne],0<V){var ge=s(-1,Z,J,J,oe,ae,0,0,0,0);ge!==void 0&&typeof ge=="string"&&(Z=ge)}var b=t(Xe,J,Z,0,0);return 0<V&&(ge=s(-2,b,J,J,oe,ae,b.length,0,0,0),ge!==void 0&&(b=ge)),Ne="",ke=0,ae=oe=1,b}var d=/^\0+/g,f=/[\0\r\f]/g,x=/: */g,v=/zoo|gra/,p=/([,: ])(transform)/g,S=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,C=/:(read-only)/g,w=/[svh]\w+-[tblr]{2}/,D=/\(\s*(.*)\s*\)/g,E=/([\s\S]*?);/g,M=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,z=/stretch|:\s*\w+\-(?:conte|avail)/,$=/([^-])(image-set\()/,ae=1,oe=1,ke=0,Me=1,Xe=[],Ve=[],V=0,Q=null,ue=0,Ne="";return c.use=l,c.set=u,e!==void 0&&u(e),c}var LS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function jS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var $S=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gg=jS(function(e){return $S.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$f={},US={get exports(){return $f},set exports(e){$f=e}},Ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var It=typeof Symbol=="function"&&Symbol.for,dp=It?Symbol.for("react.element"):60103,fp=It?Symbol.for("react.portal"):60106,nc=It?Symbol.for("react.fragment"):60107,rc=It?Symbol.for("react.strict_mode"):60108,ic=It?Symbol.for("react.profiler"):60114,ac=It?Symbol.for("react.provider"):60109,oc=It?Symbol.for("react.context"):60110,hp=It?Symbol.for("react.async_mode"):60111,sc=It?Symbol.for("react.concurrent_mode"):60111,lc=It?Symbol.for("react.forward_ref"):60112,uc=It?Symbol.for("react.suspense"):60113,BS=It?Symbol.for("react.suspense_list"):60120,cc=It?Symbol.for("react.memo"):60115,dc=It?Symbol.for("react.lazy"):60116,VS=It?Symbol.for("react.block"):60121,YS=It?Symbol.for("react.fundamental"):60117,WS=It?Symbol.for("react.responder"):60118,HS=It?Symbol.for("react.scope"):60119;function kn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dp:switch(e=e.type,e){case hp:case sc:case nc:case ic:case rc:case uc:return e;default:switch(e=e&&e.$$typeof,e){case oc:case lc:case dc:case cc:case ac:return e;default:return t}}case fp:return t}}}function Kv(e){return kn(e)===sc}Ge.AsyncMode=hp;Ge.ConcurrentMode=sc;Ge.ContextConsumer=oc;Ge.ContextProvider=ac;Ge.Element=dp;Ge.ForwardRef=lc;Ge.Fragment=nc;Ge.Lazy=dc;Ge.Memo=cc;Ge.Portal=fp;Ge.Profiler=ic;Ge.StrictMode=rc;Ge.Suspense=uc;Ge.isAsyncMode=function(e){return Kv(e)||kn(e)===hp};Ge.isConcurrentMode=Kv;Ge.isContextConsumer=function(e){return kn(e)===oc};Ge.isContextProvider=function(e){return kn(e)===ac};Ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dp};Ge.isForwardRef=function(e){return kn(e)===lc};Ge.isFragment=function(e){return kn(e)===nc};Ge.isLazy=function(e){return kn(e)===dc};Ge.isMemo=function(e){return kn(e)===cc};Ge.isPortal=function(e){return kn(e)===fp};Ge.isProfiler=function(e){return kn(e)===ic};Ge.isStrictMode=function(e){return kn(e)===rc};Ge.isSuspense=function(e){return kn(e)===uc};Ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nc||e===sc||e===ic||e===rc||e===uc||e===BS||typeof e=="object"&&e!==null&&(e.$$typeof===dc||e.$$typeof===cc||e.$$typeof===ac||e.$$typeof===oc||e.$$typeof===lc||e.$$typeof===YS||e.$$typeof===WS||e.$$typeof===HS||e.$$typeof===VS)};Ge.typeOf=kn;(function(e){e.exports=Ge})(US);var pp=$f,ZS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mp={};mp[pp.ForwardRef]=KS;mp[pp.Memo]=qv;function yg(e){return pp.isMemo(e)?qv:mp[e.$$typeof]||ZS}var qS=Object.defineProperty,XS=Object.getOwnPropertyNames,vg=Object.getOwnPropertySymbols,QS=Object.getOwnPropertyDescriptor,JS=Object.getPrototypeOf,xg=Object.prototype;function Xv(e,t,n){if(typeof t!="string"){if(xg){var r=JS(t);r&&r!==xg&&Xv(e,r,n)}var i=XS(t);vg&&(i=i.concat(vg(t)));for(var a=yg(e),o=yg(t),s=0;s<i.length;++s){var l=i[s];if(!GS[l]&&!(n&&n[l])&&!(o&&o[l])&&!(a&&a[l])){var u=QS(t,l);try{qS(e,l,u)}catch{}}}}return e}var eb=Xv;function Un(){return(Un=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var wg=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Uf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!tu.typeOf(e)},nu=Object.freeze([]),pi=Object.freeze({});function qa(e){return typeof e=="function"}function _g(e){return e.displayName||e.name||"Component"}function gp(e){return e&&typeof e.styledComponentId=="string"}var Xa=typeof process<"u"&&{}!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",yp=typeof window<"u"&&"HTMLElement"in window,tb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),nb={};function Hi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var rb=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,o=a;n>=o;)(o<<=1)<0&&Hi(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=a;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),a=i+r;this.groupSizes[n]=0;for(var o=i;o<a;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),o=a+i,s=a;s<o;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),Sl=new Map,ru=new Map,Lo=1,il=function(e){if(Sl.has(e))return Sl.get(e);for(;ru.has(Lo);)Lo++;var t=Lo++;return Sl.set(e,t),ru.set(t,e),t},ib=function(e){return ru.get(e)},ab=function(e,t){t>=Lo&&(Lo=t+1),Sl.set(e,t),ru.set(t,e)},ob="style["+Xa+'][data-styled-version="5.3.9"]',sb=new RegExp("^"+Xa+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lb=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},ub=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,a=n.length;i<a;i++){var o=n[i].trim();if(o){var s=o.match(sb);if(s){var l=0|parseInt(s[1],10),u=s[2];l!==0&&(ab(u,l),lb(e,u,s[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},cb=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Qv=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){for(var l=s.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Xa))return c}}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(Xa,"active"),r.setAttribute("data-styled-version","5.3.9");var o=cb();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},db=function(){function e(n){var r=this.element=Qv(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var a=document.styleSheets,o=0,s=a.length;o<s;o++){var l=a[o];if(l.ownerNode===i)return l}Hi(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),fb=function(){function e(n){var r=this.element=Qv(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(i,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),hb=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),kg=yp,pb={isServer:!yp,useCSSOMInjection:!tb},iu=function(){function e(n,r,i){n===void 0&&(n=pi),r===void 0&&(r={}),this.options=Un({},pb,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&yp&&kg&&(kg=!1,function(a){for(var o=document.querySelectorAll(ob),s=0,l=o.length;s<l;s++){var u=o[s];u&&u.getAttribute(Xa)!=="active"&&(ub(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return il(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Un({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,a=r.useCSSOMInjection,o=r.target,n=i?new hb(o):a?new db(o):new fb(o),new rb(n)));var n,r,i,a,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(il(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(il(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(il(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,a="",o=0;o<i;o++){var s=ib(o);if(s!==void 0){var l=n.names.get(s),u=r.getGroup(o);if(l&&u&&l.size){var c=Xa+".g"+o+'[id="'+s+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),a+=""+u+c+'{content:"'+d+`"}/*!sc*/
`}}}return a}(this)},e}(),mb=/(a)(d)/gi,Sg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Sg(t%52)+n;return(Sg(t%52)+n).replace(mb,"$1-$2")}var Da=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jv=function(e){return Da(5381,e)};function ex(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(qa(n)&&!gp(n))return!1}return!0}var gb=Jv("5.3.9"),yb=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&ex(t),this.componentId=n,this.baseHash=Da(gb,n),this.baseStyle=r,iu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))a.push(this.staticRulesId);else{var o=Zi(this.rules,t,n,r).join(""),s=Bf(Da(this.baseHash,o)>>>0);if(!n.hasNameForId(i,s)){var l=r(o,"."+s,void 0,i);n.insertRules(i,s,l)}a.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,c=Da(this.baseHash,r.hash),d="",f=0;f<u;f++){var x=this.rules[f];if(typeof x=="string")d+=x;else if(x){var v=Zi(x,t,n,r),p=Array.isArray(v)?v.join(""):v;c=Da(c,p+f),d+=p}}if(d){var S=Bf(c>>>0);if(!n.hasNameForId(i,S)){var m=r(d,"."+S,void 0,i);n.insertRules(i,S,m)}a.push(S)}}return a.join(" ")},e}(),vb=/^\s*\/\/.*$/gm,xb=[":","[",".","#"];function wb(e){var t,n,r,i,a=e===void 0?pi:e,o=a.options,s=o===void 0?pi:o,l=a.plugins,u=l===void 0?nu:l,c=new FS(s),d=[],f=function(p){function S(m){if(m)try{p(m+"}")}catch{}}return function(m,h,g,C,w,D,E,M,W,z){switch(m){case 1:if(W===0&&h.charCodeAt(0)===64)return p(h+";"),"";break;case 2:if(M===0)return h+"/*|*/";break;case 3:switch(M){case 102:case 112:return p(g[0]+h),"";default:return h+(z===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(S)}}}(function(p){d.push(p)}),x=function(p,S,m){return S===0&&xb.indexOf(m[n.length])!==-1||m.match(i)?p:"."+t};function v(p,S,m,h){h===void 0&&(h="&");var g=p.replace(vb,""),C=S&&m?m+" "+S+" { "+g+" }":g;return t=h,n=S,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!S?"":S,C)}return c.use([].concat(u,[function(p,S,m){p===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,x))},f,function(p){if(p===-2){var S=d;return d=[],S}}])),v.hash=u.length?u.reduce(function(p,S){return S.name||Hi(15),Da(p,S.name)},5381).toString():"",v}var tx=ye.createContext();tx.Consumer;var nx=ye.createContext(),_b=(nx.Consumer,new iu),Vf=wb();function rx(){return T.useContext(tx)||_b}function ix(){return T.useContext(nx)||Vf}var kb=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=Vf);var o=r.name+a.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,a(r.rules,o,"@keyframes"))},this.toString=function(){return Hi(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Vf),this.name+t.hash},e}(),Sb=/([A-Z])/,bb=/([A-Z])/g,Cb=/^ms-/,Db=function(e){return"-"+e.toLowerCase()};function bg(e){return Sb.test(e)?e.replace(bb,Db).replace(Cb,"-ms-"):e}var Cg=function(e){return e==null||e===!1||e===""};function Zi(e,t,n,r){if(Array.isArray(e)){for(var i,a=[],o=0,s=e.length;o<s;o+=1)(i=Zi(e[o],t,n,r))!==""&&(Array.isArray(i)?a.push.apply(a,i):a.push(i));return a}if(Cg(e))return"";if(gp(e))return"."+e.styledComponentId;if(qa(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return Zi(l,t,n,r)}var u;return e instanceof kb?n?(e.inject(n,r),e.getName(r)):e:Uf(e)?function c(d,f){var x,v,p=[];for(var S in d)d.hasOwnProperty(S)&&!Cg(d[S])&&(Array.isArray(d[S])&&d[S].isCss||qa(d[S])?p.push(bg(S)+":",d[S],";"):Uf(d[S])?p.push.apply(p,c(d[S],S)):p.push(bg(S)+": "+(x=S,(v=d[S])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||x in LS?String(v).trim():v+"px")+";"));return f?[f+" {"].concat(p,["}"]):p}(e):e.toString()}var Dg=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ax(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return qa(e)||Uf(e)?Dg(Zi(wg(nu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Dg(Zi(wg(e,n)))}var ox=function(e,t,n){return n===void 0&&(n=pi),e.theme!==n.theme&&e.theme||t||n.theme},Eb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tb=/(^-|-$)/g;function cd(e){return e.replace(Eb,"-").replace(Tb,"")}var sx=function(e){return Bf(Jv(e)>>>0)};function al(e){return typeof e=="string"&&!0}var Yf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ob=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Pb(e,t,n){var r=e[n];Yf(t)&&Yf(r)?lx(r,t):e[n]=t}function lx(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,a=n;i<a.length;i++){var o=a[i];if(Yf(o))for(var s in o)Ob(s)&&Pb(e,o[s],s)}return e}var as=ye.createContext();as.Consumer;function Mt(e){var t=T.useContext(as),n=T.useMemo(function(){return function(r,i){if(!r)return Hi(14);if(qa(r)){var a=r(i);return a}return Array.isArray(r)||typeof r!="object"?Hi(8):i?Un({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?ye.createElement(as.Provider,{value:n},e.children):null}var dd={};function ux(e,t,n){var r=gp(e),i=!al(e),a=t.attrs,o=a===void 0?nu:a,s=t.componentId,l=s===void 0?function(h,g){var C=typeof h!="string"?"sc":cd(h);dd[C]=(dd[C]||0)+1;var w=C+"-"+sx("5.3.9"+C+dd[C]);return g?g+"-"+w:w}(t.displayName,t.parentComponentId):s,u=t.displayName,c=u===void 0?function(h){return al(h)?"styled."+h:"Styled("+_g(h)+")"}(e):u,d=t.displayName&&t.componentId?cd(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(h,g,C){return e.shouldForwardProp(h,g,C)&&t.shouldForwardProp(h,g,C)}:e.shouldForwardProp);var v,p=new yb(n,d,r?e.componentStyle:void 0),S=p.isStatic&&o.length===0,m=function(h,g){return function(C,w,D,E){var M=C.attrs,W=C.componentStyle,z=C.defaultProps,$=C.foldedComponentIds,ae=C.shouldForwardProp,oe=C.styledComponentId,ke=C.target,Me=function(ge,b,ee){ge===void 0&&(ge=pi);var j=Un({},b,{theme:ge}),Ce={};return ee.forEach(function(ve){var Pe,we,lt,wt=ve;for(Pe in qa(wt)&&(wt=wt(j)),wt)j[Pe]=Ce[Pe]=Pe==="className"?(we=Ce[Pe],lt=wt[Pe],we&&lt?we+" "+lt:we||lt):wt[Pe]}),[j,Ce]}(ox(w,T.useContext(as),z)||pi,w,M),Xe=Me[0],Ve=Me[1],V=function(ge,b,ee,j){var Ce=rx(),ve=ix(),Pe=b?ge.generateAndInjectStyles(pi,Ce,ve):ge.generateAndInjectStyles(ee,Ce,ve);return Pe}(W,E,Xe),Q=D,ue=Ve.$as||w.$as||Ve.as||w.as||ke,Ne=al(ue),H=Ve!==w?Un({},w,{},Ve):w,Z={};for(var J in H)J[0]!=="$"&&J!=="as"&&(J==="forwardedAs"?Z.as=H[J]:(ae?ae(J,gg,ue):!Ne||gg(J))&&(Z[J]=H[J]));return w.style&&Ve.style!==w.style&&(Z.style=Un({},w.style,{},Ve.style)),Z.className=Array.prototype.concat($,oe,V!==oe?V:null,w.className,Ve.className).filter(Boolean).join(" "),Z.ref=Q,T.createElement(ue,Z)}(v,h,g,S)};return m.displayName=c,(v=ye.forwardRef(m)).attrs=f,v.componentStyle=p,v.displayName=c,v.shouldForwardProp=x,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):nu,v.styledComponentId=d,v.target=r?e.target:e,v.withComponent=function(h){var g=t.componentId,C=function(D,E){if(D==null)return{};var M,W,z={},$=Object.keys(D);for(W=0;W<$.length;W++)M=$[W],E.indexOf(M)>=0||(z[M]=D[M]);return z}(t,["componentId"]),w=g&&g+"-"+(al(h)?h:cd(_g(h)));return ux(h,Un({},C,{attrs:f,componentId:w}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?lx({},e.defaultProps,h):h}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&eb(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Wf=function(e){return function t(n,r,i){if(i===void 0&&(i=pi),!tu.isValidElementType(r))return Hi(1,String(r));var a=function(){return n(r,i,ax.apply(void 0,arguments))};return a.withConfig=function(o){return t(n,r,Un({},i,{},o))},a.attrs=function(o){return t(n,r,Un({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},a}(ux,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Wf[e]=Wf(e)});var Ab=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=ex(n),iu.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,a){var o=a(Zi(this.rules,r,i,a).join(""),""),s=this.componentId+n;i.insertRules(s,s,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,a){n>2&&iu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,a)},e}();function Mb(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ax.apply(void 0,[e].concat(n)),a="sc-global-"+sx(JSON.stringify(i)),o=new Ab(i,a);function s(u){var c=rx(),d=ix(),f=T.useContext(as),x=T.useRef(c.allocateGSInstance(a)).current;return c.server&&l(x,u,c,f,d),T.useLayoutEffect(function(){if(!c.server)return l(x,u,c,f,d),function(){return o.removeStyles(x,c)}},[x,u,c,f,d]),null}function l(u,c,d,f,x){if(o.isStatic)o.renderStyles(u,nb,d,x);else{var v=Un({},c,{theme:ox(c,f,s.defaultProps)});o.renderStyles(u,v,d,x)}}return ye.memo(s)}const k=Wf;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}var yt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(yt||(yt={}));const Eg="popstate";function Ib(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:o,hash:s}=r.location;return os("",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:$r(i)}return Nb(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Rb(){return Math.random().toString(36).substr(2,8)}function Tg(e,t){return{usr:e.state,key:e.key,idx:t}}function os(e,t,n,r){return n===void 0&&(n=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Yr(t):t,{state:n,key:t&&t.key||r||Rb()})}function $r(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Yr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=yt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Le({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=yt.Pop;let S=c(),m=S==null?null:S-u;u=S,l&&l({action:s,location:p.location,delta:m})}function f(S,m){s=yt.Push;let h=os(p.location,S,m);n&&n(h,S),u=c()+1;let g=Tg(h,u),C=p.createHref(h);try{o.pushState(g,"",C)}catch{i.location.assign(C)}a&&l&&l({action:s,location:p.location,delta:1})}function x(S,m){s=yt.Replace;let h=os(p.location,S,m);n&&n(h,S),u=c();let g=Tg(h,u),C=p.createHref(h);o.replaceState(g,"",C),a&&l&&l({action:s,location:p.location,delta:0})}function v(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:$r(S);return Ee(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let p={get action(){return s},get location(){return e(i,o)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Eg,d),l=S,()=>{i.removeEventListener(Eg,d),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let m=v(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:x,go(S){return o.go(S)}};return p}var St;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(St||(St={}));const zb=new Set(["lazy","caseSensitive","path","id","index","children"]);function Fb(e){return e.index===!0}function cx(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,a)=>{let o=[...n,a],s=typeof i.id=="string"?i.id:o.join("-");if(Ee(i.index!==!0||!i.children,"Cannot specify children on an index route"),Ee(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),Fb(i)){let l=Le({},i,{hasErrorBoundary:t(i),id:s});return r[s]=l,l}else{let l=Le({},i,{id:s,hasErrorBoundary:t(i),children:void 0});return r[s]=l,i.children&&(l.children=cx(i.children,t,o,r)),l}})}function Ea(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Yr(t):t,i=Es(r.pathname||"/",n);if(i==null)return null;let a=dx(e);Lb(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=Zb(a[s],qb(i));return o}function dx(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ir([r,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(Ee(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dx(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Wb(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of fx(a.path))i(a,o,l)}),t}function fx(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=fx(r.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Lb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Hb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jb=/^:\w+$/,$b=3,Ub=2,Bb=1,Vb=10,Yb=-2,Og=e=>e==="*";function Wb(e,t){let n=e.split("/"),r=n.length;return n.some(Og)&&(r+=Yb),t&&(r+=Ub),n.filter(i=>!Og(i)).reduce((i,a)=>i+(jb.test(a)?$b:a===""?Bb:Vb),r)}function Hb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zb(e,t){let{routesMeta:n}=e,r={},i="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Gb({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=s.route;a.push({params:r,pathname:Ir([i,c.pathname]),pathnameBase:e2(Ir([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Ir([i,c.pathnameBase]))}return a}function Gb(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kb(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=s[d]||"";o=a.slice(0,a.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=Xb(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Kb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(r.push(s),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function qb(e){try{return decodeURI(e)}catch(t){return Qa(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Xb(e,t){try{return decodeURIComponent(e)}catch(n){return Qa(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Es(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Qb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Yr(e):e;return{pathname:n?n.startsWith("/")?n:Jb(n,t):t,search:t2(r),hash:n2(i)}}function Jb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fd(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fc(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Yr(e):(i=Le({},e),Ee(!i.pathname||!i.pathname.includes("?"),fd("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),fd("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),fd("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,s;if(r||o==null)s=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?t[d]:"/"}let l=Qb(i,s),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Ir=e=>e.join("/").replace(/\/\/+/g,"/"),e2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),t2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,n2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Pg extends Error{}class r2{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Ee(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((a,o)=>r=o),this.controller=new AbortController;let i=()=>r(new Pg("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((a,o)=>{let[s,l]=o;return Object.assign(a,{[s]:this.trackPromise(s,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof Pg?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(a=>{t.removeEventListener("abort",r),(a||this.done)&&i(a)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Ee(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:a2(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function i2(e){return e instanceof Promise&&e._tracked===!0}function a2(e){if(!i2(e))return e;if(e._error)throw e._error;return e._data}class xp{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function hx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const px=["post","put","patch","delete"],o2=new Set(px),s2=["get",...px],l2=new Set(s2),u2=new Set([301,302,303,307,308]),c2=new Set([307,308]),hd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},d2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Ag={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f2=!gx,h2=e=>!!e.hasErrorBoundary;function p2(e){Ee(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||h2,n={},r=cx(e.routes,t,void 0,n),i,a=null,o=new Set,s=null,l=null,u=null,c=e.hydrationData!=null,d=Ea(r,e.history.location,e.basename),f=null;if(d==null){let A=ar(404,{pathname:e.history.location.pathname}),{matches:I,route:L}=Fg(r);d=I,f={[L.id]:A}}let x=!d.some(A=>A.route.lazy)&&(!d.some(A=>A.route.loader)||e.hydrationData!=null),v,p={historyAction:e.history.action,location:e.history.location,matches:d,initialized:x,navigation:hd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},S=yt.Pop,m=!1,h,g=!1,C=!1,w=[],D=[],E=new Map,M=0,W=-1,z=new Map,$=new Set,ae=new Map,oe=new Map,ke=new Map,Me=!1;function Xe(){if(a=e.history.listen(L=>{let{action:le,location:ce,delta:xe}=L;if(Me){Me=!1;return}Qa(ke.size===0||xe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let pe=Ye({currentLocation:p.location,nextLocation:ce,historyAction:le});if(pe&&xe!=null){Me=!0,e.history.go(xe*-1),se(pe,{state:"blocked",location:ce,proceed(){se(pe,{state:"proceeding",proceed:void 0,reset:void 0,location:ce}),e.history.go(xe)},reset(){N(pe),Q({blockers:new Map(v.state.blockers)})}});return}return Z(le,ce)}),p.initialized)return v;let A=p.matches.filter(L=>L.route.lazy);if(A.length===0)return Z(yt.Pop,p.location),v;let I=A.map(L=>Hf(L.route,t,n));return Promise.all(I).then(()=>{!p.matches.some(le=>le.route.loader)||e.hydrationData!=null?Q({initialized:!0}):Z(yt.Pop,p.location)}),v}function Ve(){a&&a(),o.clear(),h&&h.abort(),p.fetchers.forEach((A,I)=>wt(I)),p.blockers.forEach((A,I)=>N(I))}function V(A){return o.add(A),()=>o.delete(A)}function Q(A){p=Le({},p,A),o.forEach(I=>I(p))}function ue(A,I){var L,le;let ce=p.actionData!=null&&p.navigation.formMethod!=null&&br(p.navigation.formMethod)&&p.navigation.state==="loading"&&((L=A.state)==null?void 0:L._isRedirect)!==!0,xe;I.actionData?Object.keys(I.actionData).length>0?xe=I.actionData:xe=null:ce?xe=p.actionData:xe=null;let pe=I.loaderData?zg(p.loaderData,I.loaderData,I.matches||[],I.errors):p.loaderData;for(let[de]of ke)N(de);let Oe=m===!0||p.navigation.formMethod!=null&&br(p.navigation.formMethod)&&((le=A.state)==null?void 0:le._isRedirect)!==!0;i&&(r=i,i=void 0),Q(Le({},I,{actionData:xe,loaderData:pe,historyAction:S,location:A,initialized:!0,navigation:hd,revalidation:"idle",restoreScrollPosition:Jn(A,I.matches||p.matches),preventScrollReset:Oe,blockers:new Map(p.blockers)})),g||S===yt.Pop||(S===yt.Push?e.history.push(A,A.state):S===yt.Replace&&e.history.replace(A,A.state)),S=yt.Pop,m=!1,g=!1,C=!1,w=[],D=[]}async function Ne(A,I){if(typeof A=="number"){e.history.go(A);return}let{path:L,submission:le,error:ce}=Mg(A,I),xe=p.location,pe=os(p.location,L,I&&I.state);pe=Le({},pe,e.history.encodeLocation(pe));let Oe=I&&I.replace!=null?I.replace:void 0,de=yt.Push;Oe===!0?de=yt.Replace:Oe===!1||le!=null&&br(le.formMethod)&&le.formAction===p.location.pathname+p.location.search&&(de=yt.Replace);let Lt=I&&"preventScrollReset"in I?I.preventScrollReset===!0:void 0,We=Ye({currentLocation:xe,nextLocation:pe,historyAction:de});if(We){se(We,{state:"blocked",location:pe,proceed(){se(We,{state:"proceeding",proceed:void 0,reset:void 0,location:pe}),Ne(A,I)},reset(){N(We),Q({blockers:new Map(p.blockers)})}});return}return await Z(de,pe,{submission:le,pendingError:ce,preventScrollReset:Lt,replace:I&&I.replace})}function H(){if(we(),Q({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){Z(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}Z(S||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function Z(A,I,L){h&&h.abort(),h=null,S=A,g=(L&&L.startUninterruptedRevalidation)===!0,et(p.location,p.matches),m=(L&&L.preventScrollReset)===!0;let le=i||r,ce=L&&L.overrideNavigation,xe=Ea(le,I,e.basename);if(!xe){let pt=ar(404,{pathname:I.pathname}),{matches:er,route:Nn}=Fg(le);Re(),ue(I,{matches:er,loaderData:{},errors:{[Nn.id]:pt}});return}if(x2(p.location,I)&&!(L&&L.submission&&br(L.submission.formMethod))){ue(I,{matches:xe});return}h=new AbortController;let pe=_o(e.history,I,h.signal,L&&L.submission),Oe,de;if(L&&L.pendingError)de={[Ta(xe).route.id]:L.pendingError};else if(L&&L.submission&&br(L.submission.formMethod)){let pt=await J(pe,I,L.submission,xe,{replace:L.replace});if(pt.shortCircuited)return;Oe=pt.pendingActionData,de=pt.pendingActionError,ce=Le({state:"loading",location:I},L.submission),pe=new Request(pe.url,{signal:pe.signal})}let{shortCircuited:Lt,loaderData:We,errors:Gt}=await ge(pe,I,xe,ce,L&&L.submission,L&&L.replace,Oe,de);Lt||(h=null,ue(I,Le({matches:xe},Oe?{actionData:Oe}:{},{loaderData:We,errors:Gt})))}async function J(A,I,L,le,ce){we();let xe=Le({state:"submitting",location:I},L);Q({navigation:xe});let pe,Oe=Zf(le,I);if(!Oe.route.action&&!Oe.route.lazy)pe={type:St.error,error:ar(405,{method:A.method,pathname:I.pathname,routeId:Oe.route.id})};else if(pe=await wo("action",A,Oe,le,n,t,v.basename),A.signal.aborted)return{shortCircuited:!0};if(Fa(pe)){let de;return ce&&ce.replace!=null?de=ce.replace:de=pe.location===p.location.pathname+p.location.search,await ve(p,pe,{submission:L,replace:de}),{shortCircuited:!0}}if(jo(pe)){let de=Ta(le,Oe.route.id);return(ce&&ce.replace)!==!0&&(S=yt.Push),{pendingActionData:{},pendingActionError:{[de.route.id]:pe.error}}}if(Ri(pe))throw ar(400,{type:"defer-action"});return{pendingActionData:{[Oe.route.id]:pe.data}}}async function ge(A,I,L,le,ce,xe,pe,Oe){let de=le;de||(de=Le({state:"loading",location:I,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ce));let Lt=ce||(de.formMethod&&de.formAction&&de.formData&&de.formEncType?{formMethod:de.formMethod,formAction:de.formAction,formData:de.formData,formEncType:de.formEncType}:void 0),We=i||r,[Gt,pt]=Ig(e.history,p,L,Lt,I,C,w,D,ae,We,e.basename,pe,Oe);if(Re(jt=>!(L&&L.some(tr=>tr.route.id===jt))||Gt&&Gt.some(tr=>tr.route.id===jt)),Gt.length===0&&pt.length===0)return ue(I,Le({matches:L,loaderData:{},errors:Oe||null},pe?{actionData:pe}:{})),{shortCircuited:!0};if(!g){pt.forEach(tr=>{let bi=p.fetchers.get(tr.key),js={state:"loading",data:bi&&bi.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(tr.key,js)});let jt=pe||p.actionData;Q(Le({navigation:de},jt?Object.keys(jt).length===0?{actionData:null}:{actionData:jt}:{},pt.length>0?{fetchers:new Map(p.fetchers)}:{}))}W=++M,pt.forEach(jt=>E.set(jt.key,h));let{results:er,loaderResults:Nn,fetcherResults:uo}=await Pe(p.matches,L,Gt,pt,A);if(A.signal.aborted)return{shortCircuited:!0};pt.forEach(jt=>E.delete(jt.key));let Fs=Lg(er);if(Fs)return await ve(p,Fs,{replace:xe}),{shortCircuited:!0};let{loaderData:Ls,errors:ia}=Ng(p,L,Gt,Nn,Oe,pt,uo,oe);oe.forEach((jt,tr)=>{jt.subscribe(bi=>{(bi||jt.done)&&oe.delete(tr)})}),P();let Pc=G(W);return Le({loaderData:Ls,errors:ia},Pc||pt.length>0?{fetchers:new Map(p.fetchers)}:{})}function b(A){return p.fetchers.get(A)||d2}function ee(A,I,L,le){if(f2)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");E.has(A)&&_(A);let xe=Ea(i||r,L,e.basename);if(!xe){lt(A,I,ar(404,{pathname:L}));return}let{path:pe,submission:Oe}=Mg(L,le,!0),de=Zf(xe,pe);if(m=(le&&le.preventScrollReset)===!0,Oe&&br(Oe.formMethod)){j(A,I,pe,de,xe,Oe);return}ae.set(A,{routeId:I,path:pe}),Ce(A,I,pe,de,xe,Oe)}async function j(A,I,L,le,ce,xe){if(we(),ae.delete(A),!le.route.action&&!le.route.lazy){let xr=ar(405,{method:xe.formMethod,pathname:L,routeId:I});lt(A,I,xr);return}let pe=p.fetchers.get(A),Oe=Le({state:"submitting"},xe,{data:pe&&pe.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Oe),Q({fetchers:new Map(p.fetchers)});let de=new AbortController,Lt=_o(e.history,L,de.signal,xe);E.set(A,de);let We=await wo("action",Lt,le,ce,n,t,v.basename);if(Lt.signal.aborted){E.get(A)===de&&E.delete(A);return}if(Fa(We)){E.delete(A),$.add(A);let xr=Le({state:"loading"},xe,{data:void 0," _hasFetcherDoneAnything ":!0});return p.fetchers.set(A,xr),Q({fetchers:new Map(p.fetchers)}),ve(p,We,{isFetchActionRedirect:!0})}if(jo(We)){lt(A,I,We.error);return}if(Ri(We))throw ar(400,{type:"defer-action"});let Gt=p.navigation.location||p.location,pt=_o(e.history,Gt,de.signal),er=i||r,Nn=p.navigation.state!=="idle"?Ea(er,p.navigation.location,e.basename):p.matches;Ee(Nn,"Didn't find any matches after fetcher action");let uo=++M;z.set(A,uo);let Fs=Le({state:"loading",data:We.data},xe,{" _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Fs);let[Ls,ia]=Ig(e.history,p,Nn,xe,Gt,C,w,D,ae,er,e.basename,{[le.route.id]:We.data},void 0);ia.filter(xr=>xr.key!==A).forEach(xr=>{let Mc=xr.key,qp=p.fetchers.get(Mc),k1={state:"loading",data:qp&&qp.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(Mc,k1),E.set(Mc,de)}),Q({fetchers:new Map(p.fetchers)});let{results:Pc,loaderResults:jt,fetcherResults:tr}=await Pe(p.matches,Nn,Ls,ia,pt);if(de.signal.aborted)return;z.delete(A),E.delete(A),ia.forEach(xr=>E.delete(xr.key));let bi=Lg(Pc);if(bi)return ve(p,bi);let{loaderData:js,errors:Ac}=Ng(p,p.matches,Ls,jt,void 0,ia,tr,oe),w1={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(A,w1);let _1=G(uo);p.navigation.state==="loading"&&uo>W?(Ee(S,"Expected pending action"),h&&h.abort(),ue(p.navigation.location,{matches:Nn,loaderData:js,errors:Ac,fetchers:new Map(p.fetchers)})):(Q(Le({errors:Ac,loaderData:zg(p.loaderData,js,Nn,Ac)},_1?{fetchers:new Map(p.fetchers)}:{})),C=!1)}async function Ce(A,I,L,le,ce,xe){let pe=p.fetchers.get(A),Oe=Le({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},xe,{data:pe&&pe.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Oe),Q({fetchers:new Map(p.fetchers)});let de=new AbortController,Lt=_o(e.history,L,de.signal);E.set(A,de);let We=await wo("loader",Lt,le,ce,n,t,v.basename);if(Ri(We)&&(We=await wx(We,Lt.signal,!0)||We),E.get(A)===de&&E.delete(A),Lt.signal.aborted)return;if(Fa(We)){await ve(p,We);return}if(jo(We)){let pt=Ta(p.matches,I);p.fetchers.delete(A),Q({fetchers:new Map(p.fetchers),errors:{[pt.route.id]:We.error}});return}Ee(!Ri(We),"Unhandled fetcher deferred data");let Gt={state:"idle",data:We.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(A,Gt),Q({fetchers:new Map(p.fetchers)})}async function ve(A,I,L){var le;let{submission:ce,replace:xe,isFetchActionRedirect:pe}=L===void 0?{}:L;I.revalidate&&(C=!0);let Oe=os(A.location,I.location,Le({_isRedirect:!0},pe?{_isFetchActionRedirect:!0}:{}));if(Ee(Oe,"Expected a location on the redirect navigation"),mx.test(I.location)&&gx&&typeof((le=window)==null?void 0:le.location)<"u"){let er=e.history.createURL(I.location),Nn=Es(er.pathname,e.basename||"/")==null;if(window.location.origin!==er.origin||Nn){xe?window.location.replace(I.location):window.location.assign(I.location);return}}h=null;let de=xe===!0?yt.Replace:yt.Push,{formMethod:Lt,formAction:We,formEncType:Gt,formData:pt}=A.navigation;!ce&&Lt&&We&&pt&&Gt&&(ce={formMethod:Lt,formAction:We,formEncType:Gt,formData:pt}),c2.has(I.status)&&ce&&br(ce.formMethod)?await Z(de,Oe,{submission:Le({},ce,{formAction:I.location}),preventScrollReset:m}):await Z(de,Oe,{overrideNavigation:{state:"loading",location:Oe,formMethod:ce?ce.formMethod:void 0,formAction:ce?ce.formAction:void 0,formEncType:ce?ce.formEncType:void 0,formData:ce?ce.formData:void 0},preventScrollReset:m})}async function Pe(A,I,L,le,ce){let xe=await Promise.all([...L.map(de=>wo("loader",ce,de,I,n,t,v.basename)),...le.map(de=>de.matches&&de.match?wo("loader",_o(e.history,de.path,ce.signal),de.match,de.matches,n,t,v.basename):{type:St.error,error:ar(404,{pathname:de.path})})]),pe=xe.slice(0,L.length),Oe=xe.slice(L.length);return await Promise.all([jg(A,L,pe,ce.signal,!1,p.loaderData),jg(A,le.map(de=>de.match),Oe,ce.signal,!0)]),{results:xe,loaderResults:pe,fetcherResults:Oe}}function we(){C=!0,w.push(...Re()),ae.forEach((A,I)=>{E.has(I)&&(D.push(I),_(I))})}function lt(A,I,L){let le=Ta(p.matches,I);wt(A),Q({errors:{[le.route.id]:L},fetchers:new Map(p.fetchers)})}function wt(A){E.has(A)&&_(A),ae.delete(A),z.delete(A),$.delete(A),p.fetchers.delete(A)}function _(A){let I=E.get(A);Ee(I,"Expected fetch controller: "+A),I.abort(),E.delete(A)}function O(A){for(let I of A){let le={state:"idle",data:b(I).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(I,le)}}function P(){let A=[];for(let I of $){let L=p.fetchers.get(I);Ee(L,"Expected fetcher: "+I),L.state==="loading"&&($.delete(I),A.push(I))}O(A)}function G(A){let I=[];for(let[L,le]of z)if(le<A){let ce=p.fetchers.get(L);Ee(ce,"Expected fetcher: "+L),ce.state==="loading"&&(_(L),z.delete(L),I.push(L))}return O(I),I.length>0}function q(A,I){let L=p.blockers.get(A)||Ag;return ke.get(A)!==I&&ke.set(A,I),L}function N(A){p.blockers.delete(A),ke.delete(A)}function se(A,I){let L=p.blockers.get(A)||Ag;Ee(L.state==="unblocked"&&I.state==="blocked"||L.state==="blocked"&&I.state==="blocked"||L.state==="blocked"&&I.state==="proceeding"||L.state==="blocked"&&I.state==="unblocked"||L.state==="proceeding"&&I.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+I.state),p.blockers.set(A,I),Q({blockers:new Map(p.blockers)})}function Ye(A){let{currentLocation:I,nextLocation:L,historyAction:le}=A;if(ke.size===0)return;ke.size>1&&Qa(!1,"A router only supports one blocker at a time");let ce=Array.from(ke.entries()),[xe,pe]=ce[ce.length-1],Oe=p.blockers.get(xe);if(!(Oe&&Oe.state==="proceeding")&&pe({currentLocation:I,nextLocation:L,historyAction:le}))return xe}function Re(A){let I=[];return oe.forEach((L,le)=>{(!A||A(le))&&(L.cancel(),I.push(le),oe.delete(le))}),I}function he(A,I,L){if(s=A,u=I,l=L||(le=>le.key),!c&&p.navigation===hd){c=!0;let le=Jn(p.location,p.matches);le!=null&&Q({restoreScrollPosition:le})}return()=>{s=null,u=null,l=null}}function et(A,I){if(s&&l&&u){let L=I.map(ce=>$g(ce,p.loaderData)),le=l(A,L)||A.key;s[le]=u()}}function Jn(A,I){if(s&&l&&u){let L=I.map(xe=>$g(xe,p.loaderData)),le=l(A,L)||A.key,ce=s[le];if(typeof ce=="number")return ce}return null}function vr(A){i=A}return v={get basename(){return e.basename},get state(){return p},get routes(){return r},initialize:Xe,subscribe:V,enableScrollRestoration:he,navigate:Ne,fetch:ee,revalidate:H,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:b,deleteFetcher:wt,dispose:Ve,getBlocker:q,deleteBlocker:N,_internalFetchControllers:E,_internalActiveDeferreds:oe,_internalSetRoutes:vr},v}function m2(e){return e!=null&&"formData"in e}function Mg(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:$r(e);if(!t||!m2(t))return{path:r};if(t.formMethod&&!_2(t.formMethod))return{path:r,error:ar(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:xx(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},br(i.formMethod)))return{path:r,submission:i};let a=Yr(r),o=vx(t.formData);return n&&a.search&&_x(a.search)&&o.append("index",""),a.search="?"+o,{path:$r(a),submission:i}}function g2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Ig(e,t,n,r,i,a,o,s,l,u,c,d,f){let x=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,v=e.createURL(t.location),p=e.createURL(i),S=a||v.toString()===p.toString()||v.search!==p.search,m=f?Object.keys(f)[0]:void 0,g=g2(n,m).filter((w,D)=>{if(w.route.lazy)return!0;if(w.route.loader==null)return!1;if(y2(t.loaderData,t.matches[D],w)||o.some(W=>W===w.route.id))return!0;let E=t.matches[D],M=w;return Rg(w,Le({currentUrl:v,currentParams:E.params,nextUrl:p,nextParams:M.params},r,{actionResult:x,defaultShouldRevalidate:S||yx(E,M)}))}),C=[];return l.forEach((w,D)=>{if(!n.some(z=>z.route.id===w.routeId))return;let E=Ea(u,w.path,c);if(!E){C.push(Le({key:D},w,{matches:null,match:null}));return}let M=Zf(E,w.path);if(s.includes(D)){C.push(Le({key:D,matches:E,match:M},w));return}Rg(M,Le({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:x,defaultShouldRevalidate:S}))&&C.push(Le({key:D,matches:E,match:M},w))}),[g,C]}function y2(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function yx(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Rg(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Hf(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Ee(i,"No route found in manifest");let a={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Qa(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!zb.has(o)&&(a[o]=r[o])}Object.assign(i,a),Object.assign(i,{hasErrorBoundary:t(Le({},i)),lazy:void 0})}async function wo(e,t,n,r,i,a,o,s,l,u){o===void 0&&(o="/"),s===void 0&&(s=!1),l===void 0&&(l=!1);let c,d,f,x=S=>{let m,h=new Promise((g,C)=>m=C);return f=()=>m(),t.signal.addEventListener("abort",f),Promise.race([S({request:t,params:n.params,context:u}),h])};try{let S=n.route[e];if(n.route.lazy)if(S)d=(await Promise.all([x(S),Hf(n.route,a,i)]))[0];else if(await Hf(n.route,a,i),S=n.route[e],S)d=await x(S);else{if(e==="action")throw ar(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:St.data,data:void 0}}else Ee(S,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),d=await x(S);Ee(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(S){c=St.error,d=S}finally{f&&t.signal.removeEventListener("abort",f)}if(w2(d)){let S=d.status;if(u2.has(S)){let g=d.headers.get("Location");if(Ee(g,"Redirects returned/thrown from loaders/actions must have a Location header"),mx.test(g)){if(!s){let C=new URL(t.url),w=g.startsWith("//")?new URL(C.protocol+g):new URL(g),D=Es(w.pathname,o)!=null;w.origin===C.origin&&D&&(g=w.pathname+w.search+w.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),w=fc(C).map(E=>E.pathnameBase),D=vp(g,w,new URL(t.url).pathname);if(Ee($r(D),"Unable to resolve redirect location: "+g),o){let E=D.pathname;D.pathname=E==="/"?o:Ir([o,E])}g=$r(D)}if(s)throw d.headers.set("Location",g),d;return{type:St.redirect,status:S,location:g,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:c||St.data,response:d};let m,h=d.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?m=await d.json():m=await d.text(),c===St.error?{type:c,error:new xp(S,d.statusText,m),headers:d.headers}:{type:St.data,data:m,statusCode:d.status,headers:d.headers}}if(c===St.error)return{type:c,error:d};if(d instanceof r2){var v,p;return{type:St.deferred,deferredData:d,statusCode:(v=d.init)==null?void 0:v.status,headers:((p=d.init)==null?void 0:p.headers)&&new Headers(d.init.headers)}}return{type:St.data,data:d}}function _o(e,t,n,r){let i=e.createURL(xx(t)).toString(),a={signal:n};if(r&&br(r.formMethod)){let{formMethod:o,formEncType:s,formData:l}=r;a.method=o.toUpperCase(),a.body=s==="application/x-www-form-urlencoded"?vx(l):l}return new Request(i,a)}function vx(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function v2(e,t,n,r,i){let a={},o=null,s,l=!1,u={};return n.forEach((c,d)=>{let f=t[d].route.id;if(Ee(!Fa(c),"Cannot handle redirect results in processLoaderData"),jo(c)){let x=Ta(e,f),v=c.error;r&&(v=Object.values(r)[0],r=void 0),o=o||{},o[x.route.id]==null&&(o[x.route.id]=v),a[f]=void 0,l||(l=!0,s=hx(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else Ri(c)?(i.set(f,c.deferredData),a[f]=c.deferredData.data):a[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(s=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,a[Object.keys(r)[0]]=void 0),{loaderData:a,errors:o,statusCode:s||200,loaderHeaders:u}}function Ng(e,t,n,r,i,a,o,s){let{loaderData:l,errors:u}=v2(t,n,r,i,s);for(let c=0;c<a.length;c++){let{key:d,match:f}=a[c];Ee(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let x=o[c];if(jo(x)){let v=Ta(e.matches,f==null?void 0:f.route.id);u&&u[v.route.id]||(u=Le({},u,{[v.route.id]:x.error})),e.fetchers.delete(d)}else if(Fa(x))Ee(!1,"Unhandled fetcher revalidation redirect");else if(Ri(x))Ee(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:x.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,v)}}return{loaderData:l,errors:u}}function zg(e,t,n,r){let i=Le({},t);for(let a of n){let o=a.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&a.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Ta(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fg(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ar(e,t){let{pathname:n,routeId:r,method:i,type:a}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"&&(s="defer() is not supported in actions")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new xp(e||500,o,new Error(s),!0)}function Lg(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Fa(n))return n}}function xx(e){let t=typeof e=="string"?Yr(e):e;return $r(Le({},t,{hash:""}))}function x2(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Ri(e){return e.type===St.deferred}function jo(e){return e.type===St.error}function Fa(e){return(e&&e.type)===St.redirect}function w2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function _2(e){return l2.has(e)}function br(e){return o2.has(e)}async function jg(e,t,n,r,i,a){for(let o=0;o<n.length;o++){let s=n[o],l=t[o];if(!l)continue;let u=e.find(d=>d.route.id===l.route.id),c=u!=null&&!yx(u,l)&&(a&&a[l.route.id])!==void 0;Ri(s)&&(i||c)&&await wx(s,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function wx(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:St.data,data:e.deferredData.unwrappedData}}catch(i){return{type:St.error,error:i}}return{type:St.data,data:e.deferredData.data}}}function _x(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function $g(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Zf(e,t){let n=typeof t=="string"?Yr(t).search:t.search;if(e[e.length-1].route.index&&_x(n||""))return e[e.length-1];let r=fc(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const S2=typeof Object.is=="function"?Object.is:k2,{useState:b2,useEffect:C2,useLayoutEffect:D2,useDebugValue:E2}=jd;function T2(e,t,n){const r=t(),[{inst:i},a]=b2({inst:{value:r,getSnapshot:t}});return D2(()=>{i.value=r,i.getSnapshot=t,pd(i)&&a({inst:i})},[e,r,t]),C2(()=>(pd(i)&&a({inst:i}),e(()=>{pd(i)&&a({inst:i})})),[e]),E2(r),r}function pd(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!S2(n,r)}catch{return!0}}function O2(e,t,n){return t()}const P2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A2=!P2,M2=A2?O2:T2,I2="useSyncExternalStore"in jd?(e=>e.useSyncExternalStore)(jd):M2,wp=T.createContext(null),_p=T.createContext(null),Ts=T.createContext(null),hc=T.createContext(null),ea=T.createContext({outlet:null,matches:[]}),kx=T.createContext(null);function Gf(){return Gf=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gf.apply(this,arguments)}function R2(e,t){let{relative:n}=t===void 0?{}:t;Os()||Ee(!1);let{basename:r,navigator:i}=T.useContext(Ts),{hash:a,pathname:o,search:s}=bx(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ir([r,o])),i.createHref({pathname:l,search:s,hash:a})}function Os(){return T.useContext(hc)!=null}function ta(){return Os()||Ee(!1),T.useContext(hc).location}function ao(){Os()||Ee(!1);let{basename:e,navigator:t}=T.useContext(Ts),{matches:n}=T.useContext(ea),{pathname:r}=ta(),i=JSON.stringify(fc(n).map(s=>s.pathnameBase)),a=T.useRef(!1);return T.useEffect(()=>{a.current=!0}),T.useCallback(function(s,l){if(l===void 0&&(l={}),!a.current)return;if(typeof s=="number"){t.go(s);return}let u=vp(s,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ir([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const Sx=T.createContext(null);function N2(){return T.useContext(Sx)}function z2(e){let t=T.useContext(ea).outlet;return t&&T.createElement(Sx.Provider,{value:e},t)}function bx(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=T.useContext(ea),{pathname:i}=ta(),a=JSON.stringify(fc(r).map(o=>o.pathnameBase));return T.useMemo(()=>vp(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function F2(e,t){Os()||Ee(!1);let{navigator:n}=T.useContext(Ts),r=T.useContext(_p),{matches:i}=T.useContext(ea),a=i[i.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=ta(),u;if(t){var c;let p=typeof t=="string"?Yr(t):t;s==="/"||(c=p.pathname)!=null&&c.startsWith(s)||Ee(!1),u=p}else u=l;let d=u.pathname||"/",f=s==="/"?d:d.slice(s.length)||"/",x=Ea(e,{pathname:f}),v=U2(x&&x.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Ir([s,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?s:Ir([s,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,r||void 0);return t&&v?T.createElement(hc.Provider,{value:{location:Gf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:yt.Pop}},v):v}function L2(){let e=W2(),t=hx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),n?T.createElement("pre",{style:i},n):null,a)}class j2 extends T.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?T.createElement(ea.Provider,{value:this.props.routeContext},T.createElement(kx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $2(e){let{routeContext:t,match:n,children:r}=e,i=T.useContext(wp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(ea.Provider,{value:t},r)}function U2(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let a=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));a>=0||Ee(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,o,s)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=T.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=T.createElement(L2,null));let c=t.concat(r.slice(0,s+1)),d=()=>{let f=a;return l?f=u:o.route.Component?f=T.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),T.createElement($2,{match:o,routeContext:{outlet:a,matches:c},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||s===0)?T.createElement(j2,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Ug;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Ug||(Ug={}));var au;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(au||(au={}));function B2(e){let t=T.useContext(_p);return t||Ee(!1),t}function V2(e){let t=T.useContext(ea);return t||Ee(!1),t}function Y2(e){let t=V2(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function W2(){var e;let t=T.useContext(kx),n=B2(au.UseRouteError),r=Y2(au.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Bg(e){let{fallbackElement:t,router:n}=e,r=T.useCallback(()=>n.state,[n]),i=I2(n.subscribe,r,r),a=T.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,c)=>n.navigate(l,{state:u,preventScrollReset:c==null?void 0:c.preventScrollReset}),replace:(l,u,c)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:c==null?void 0:c.preventScrollReset})}),[n]),o=n.basename||"/",s=T.useMemo(()=>({router:n,navigator:a,static:!1,basename:o}),[n,a,o]);return T.createElement(T.Fragment,null,T.createElement(wp.Provider,{value:s},T.createElement(_p.Provider,{value:i},T.createElement(Z2,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:a},n.state.initialized?T.createElement(G2,null):t))),null)}function H2(e){return z2(e.context)}function Oi(e){Ee(!1)}function Z2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=yt.Pop,navigator:a,static:o=!1}=e;Os()&&Ee(!1);let s=t.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof r=="string"&&(r=Yr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:x="default"}=r,v=T.useMemo(()=>{let p=Es(u,s);return p==null?null:{location:{pathname:p,search:c,hash:d,state:f,key:x},navigationType:i}},[s,u,c,d,f,x,i]);return v==null?null:T.createElement(Ts.Provider,{value:l},T.createElement(hc.Provider,{children:n,value:v}))}function G2(e){let{children:t,location:n}=e,r=T.useContext(wp),i=r&&!t?r.router.routes:ou(t);return F2(i,n)}var Vg;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Vg||(Vg={}));new Promise(()=>{});function ou(e,t){t===void 0&&(t=[]);let n=[];return T.Children.forEach(e,(r,i)=>{if(!T.isValidElement(r))return;if(r.type===T.Fragment){n.push.apply(n,ou(r.props.children,t));return}r.type!==Oi&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let a=[...t,i],o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ou(r.props.children,a)),n.push(o)}),n}function K2(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function su(){return su=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},su.apply(this,arguments)}function q2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function X2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q2(e,t){return e.button===0&&(!t||t==="_self")&&!X2(e)}function Kf(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function J2(e,t){let n=Kf(e);if(t)for(let r of t.keys())n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)});return n}const eC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function tC(e,t){return p2({basename:t==null?void 0:t.basename,history:Ib({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||nC(),routes:e,detectErrorBoundary:K2}).initialize()}function nC(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=su({},t,{errors:rC(t.errors)})),t}function rC(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new xp(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let a=new Error(i.message);a.stack="",n[r]=a}else n[r]=i;return n}const iC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cx=T.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,preventScrollReset:c}=t,d=q2(t,eC),{basename:f}=T.useContext(Ts),x,v=!1;if(typeof u=="string"&&aC.test(u)&&(x=u,iC)){let h=new URL(window.location.href),g=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=Es(g.pathname,f);g.origin===h.origin&&C!=null?u=C+g.search+g.hash:v=!0}let p=R2(u,{relative:i}),S=oC(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i});function m(h){r&&r(h),h.defaultPrevented||S(h)}return T.createElement("a",su({},d,{href:x||p,onClick:v||a?r:m,ref:n,target:l}))});var Yg;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Yg||(Yg={}));var Wg;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Wg||(Wg={}));function oC(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o}=t===void 0?{}:t,s=ao(),l=ta(),u=bx(e,{relative:o});return T.useCallback(c=>{if(Q2(c,n)){c.preventDefault();let d=r!==void 0?r:$r(l)===$r(u);s(e,{replace:d,state:i,preventScrollReset:a,relative:o})}},[l,s,u,r,i,n,e,a,o])}function sC(e){let t=T.useRef(Kf(e)),n=T.useRef(!1),r=ta(),i=T.useMemo(()=>J2(r.search,n.current?null:t.current),[r.search]),a=ao(),o=T.useCallback((s,l)=>{const u=Kf(typeof s=="function"?s(i):s);n.current=!0,a("?"+u,l)},[a,i]);return[i,o]}const lC=k.h1`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: -1.125px;
`,ss=k.h1`
    @media screen and (max-width:768px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: -0.75px;
    }
    @media screen and (min-width:1025px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 36px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: -1.125px;
    }
`;k.h2`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.75px;
`;const Je=k.h3`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.25px;
    text-align: left;
`;k.h4`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
`;const uC=k.p`
    @media screen and (max-width:768px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 15px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color:#DFE3FA;
    }

    @media screen and (min-width:1025px) {
        font-family: 'League Spartan', Arial, Helvetica, sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: -0.10000000149011612px;
        text-align: left;
        color:#DFE3FA;
    }
`,na=k.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
`,kp=k.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
    color:#DFE3FA;
`,Gi=k.button`
    cursor: pointer;
    background-color: #7C5DFA;
    padding:15px 20px;
    border-radius: 24px;
    color:white;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    display:flex;
    align-items: center;
    border:none;
    &:hover{
        background-color: #9277FF;
    }
    @media screen and (max-width:768px){
        font-size:13px;
    }
`,Ps=k.button`
    cursor: pointer;
    background-color: #F9FAFE;
    border-radius: 24px;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color:#7E88C3;
    padding:15px 20px;
    border:none;
    &:hover{
        background: #DFE3FA;
        border-radius: 24px;
    }
`,Dx=k.button`
    cursor: pointer;
    background-color: #373B53;
    border-radius: 24px;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color:#888EB0;
    padding:15px 20px;
    border:none;
    &:hover{
        color:#888EB0
    }
`,Sp=k.button`
    cursor: pointer;
    background-color: #EC5757;
    border-radius: 24px;
    padding:15px 20px;
    color:white;
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
    border:none;
    &:hover{
        background-color:#FF9797;
        border-radius: 24px;
    }
`,Ex=k(Cx)`
    color:inherit;
    text-decoration:none;
`;var cC=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},dC=function(e){var t=e.split(/ ?; ?/);return t.reduce(function(n,r){var i=cC(r.split(/ ?: ?/),2),a=i[0],o=i[1];return a&&o&&(n[a.replace(/-(\w)/g,function(s,l){return l.toUpperCase()})]=Number.isNaN(Number(o))?o:Number(o)),n},{})};function fC(e){e===void 0&&(e=6);for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.round(Math.random()*(t.length-1))];return n}var hC=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],Hg={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},lu=globalThis&&globalThis.__assign||function(){return lu=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lu.apply(this,arguments)},Tx=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},Ox=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))};function pC(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),Ox([],Tx(e.attributes),!1).forEach(function(i){switch(i.name){case"class":break;case"style":n[i.name]=dC(i.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[Hg[i.name]||i.name]=!0;break;default:n[Hg[i.name]||i.name]=i.value}})}return n}function mC(e,t,n){var r=Ox([],Tx(e),!1).map(function(i,a){return bp(i,lu(lu({},n),{index:a,level:t+1}))}).filter(Boolean);return r.length?r:null}function gC(e){return/[a-z]+[A-Z]+[a-z]+/.test(e)?e:e.toLowerCase()}function bp(e,t){var n;if(t===void 0&&(t={}),!e||!(e instanceof Node))return null;var r=t.actions,i=r===void 0?[]:r,a=t.index,o=a===void 0?0:a,s=t.level,l=s===void 0?0:s,u=t.randomKey,c=e,d="".concat(l,"-").concat(o),f=[];if(u&&l===0&&(d="".concat(fC(),"-").concat(d)),Array.isArray(i)&&i.forEach(function(p){p.condition(c,d,l)&&(typeof p.pre=="function"&&(c=p.pre(c,d,l),c instanceof Node||(c=e)),typeof p.post=="function"&&f.push(p.post(c,d,l)))}),f.length)return f;switch(c.nodeType){case 1:return T.createElement(gC(c.nodeName),pC(c,d),mC(c.childNodes,l,t));case 3:{var x=((n=c.nodeValue)===null||n===void 0?void 0:n.toString())||"";if(/^\s+$/.test(x)&&!/[\u00A0\u202F]/.test(x))return null;if(!c.parentNode)return x;var v=c.parentNode.nodeName.toLowerCase();return hC.includes(v)?(/\S/.test(x)&&console.warn("A textNode is not allowed inside '".concat(v,`'. Your text "`).concat(x,'" will be ignored')),null):x}case 8:return null;default:return null}}function yC(e,t){if(t===void 0&&(t={}),!e||typeof e!="string")return null;var n=t.nodeOnly,r=n===void 0?!1:n,i=t.selector,a=i===void 0?"body > *":i,o=t.type,s=o===void 0?"text/html":o;try{var l=new DOMParser,u=l.parseFromString(e,s),c=u.querySelector(a);if(!(c instanceof Node))throw new TypeError("Error parsing input");return r?c:bp(c,t)}catch{}return null}function Zg(e,t){return t===void 0&&(t={}),typeof e=="string"?yC(e,t):e instanceof Node?bp(e,t):null}var qf={},vC={get exports(){return qf},set exports(e){qf=e}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(vC);var Kt={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function md(){return qf.canUseDOM}function xC(){return wC()&&typeof window<"u"&&window!==null}function wC(){if(!document)return!1;var e=document.createElement("div");e.innerHTML="<svg />";var t=e.firstChild;return!!t&&t.namespaceURI==="http://www.w3.org/2000/svg"}function _C(e){return e[Math.floor(Math.random()*e.length)]}function kC(e){for(var t="abcdefghijklmnopqrstuvwxyz",n="1234567890",r="".concat(t).concat(t.toUpperCase()).concat(n),i="",a=0;a<e;a++)i+=_C(r);return i}function SC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var i in e)({}).hasOwnProperty.call(e,i)&&(t.includes(i)||(r[i]=e[i]));return r}var bC=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(r[a]=i[a])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Xf=globalThis&&globalThis.__assign||function(){return Xf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xf.apply(this,arguments)},Gg=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,a=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a},CC=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))},Gr=Object.create(null),DC=function(e){bC(t,e);function t(n){var r=e.call(this,n)||this;return Object.defineProperty(r,"isInitialized",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(r,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(r,"hash",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(r,"handleLoad",{enumerable:!0,configurable:!0,writable:!0,value:function(i,a){a===void 0&&(a=!1),r.isActive&&r.setState({content:i,hasCache:a,status:Kt.LOADED},r.getElement)}}),Object.defineProperty(r,"handleError",{enumerable:!0,configurable:!0,writable:!0,value:function(i){var a=r.props.onError,o=i.message==="Browser does not support SVG"?Kt.UNSUPPORTED:Kt.FAILED;r.isActive&&r.setState({status:o},function(){typeof a=="function"&&a(i)})}}),Object.defineProperty(r,"request",{enumerable:!0,configurable:!0,writable:!0,value:function(){var i=r.props,a=i.cacheRequests,o=i.fetchOptions,s=i.src;try{return a&&(Gr[s]={content:"",status:Kt.LOADING}),fetch(s,o).then(function(l){var u=l.headers.get("content-type"),c=Gg((u||"").split(/ ?; ?/),1),d=c[0];if(l.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some(function(f){return d.includes(f)}))throw new Error("Content type isn't valid: ".concat(d));return l.text()}).then(function(l){var u=r.props.src;if(s!==u){Gr[s].status===Kt.LOADING&&delete Gr[s];return}if(r.handleLoad(l),a){var c=Gr[s];c&&(c.content=l,c.status=Kt.LOADED)}}).catch(function(l){if(r.handleError(l),a){var u=Gr[s];u&&delete Gr[s]}})}catch(l){return r.handleError(new Error(l.message))}}}),r.state={content:"",element:null,hasCache:!!n.cacheRequests&&!!Gr[n.src],status:Kt.PENDING},r.hash=n.uniqueHash||kC(8),r}return Object.defineProperty(t.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(this.isActive=!0,!(!md()||this.isInitialized)){var n=this.state.status,r=this.props.src;try{if(n===Kt.PENDING){if(!xC())throw new Error("Browser does not support SVG");if(!r)throw new Error("Missing src");this.load()}}catch(i){this.handleError(i)}this.isInitialized=!0}}}),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(n,r){if(md()){var i=this.state,a=i.hasCache,o=i.status,s=this.props,l=s.onLoad,u=s.src;if(r.status!==Kt.READY&&o===Kt.READY&&l&&l(u,a),n.src!==u){if(!u){this.handleError(new Error("Missing src"));return}this.load()}}}}),Object.defineProperty(t.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isActive=!1}}),Object.defineProperty(t.prototype,"getNode",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.props,r=n.description,i=n.title;try{var a=this.processSVG(),o=Zg(a,{nodeOnly:!0});if(!o||!(o instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var s=this.updateSVGAttributes(o);if(r){var l=s.querySelector("desc");l&&l.parentNode&&l.parentNode.removeChild(l);var u=document.createElementNS("http://www.w3.org/2000/svg","desc");u.innerHTML=r,s.prepend(u)}if(typeof i<"u"){var c=s.querySelector("title");if(c&&c.parentNode&&c.parentNode.removeChild(c),i){var d=document.createElementNS("http://www.w3.org/2000/svg","title");d.innerHTML=i,s.prepend(d)}}return s}catch(f){return this.handleError(f)}}}),Object.defineProperty(t.prototype,"getElement",{enumerable:!1,configurable:!0,writable:!0,value:function(){try{var n=this.getNode(),r=Zg(n);if(!r||!T.isValidElement(r))throw new Error("Could not convert the src to a React element");this.setState({element:r,status:Kt.READY})}catch(i){this.handleError(new Error(i.message))}}}),Object.defineProperty(t.prototype,"load",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this;this.isActive&&this.setState({content:"",element:null,hasCache:!1,status:Kt.LOADING},function(){var r=n.props,i=r.cacheRequests,a=r.src,o=i&&Gr[a];if(o&&o.status===Kt.LOADED){n.handleLoad(o.content,!0);return}var s=a.match(/data:image\/svg[^,]*?(;base64)?,(.*)/),l;if(s?l=s[1]?window.atob(s[2]):decodeURIComponent(s[2]):a.includes("<svg")&&(l=a),l){n.handleLoad(l);return}n.request()})}}),Object.defineProperty(t.prototype,"updateSVGAttributes",{enumerable:!1,configurable:!0,writable:!0,value:function(n){var r=this,i=this.props,a=i.baseURL,o=a===void 0?"":a,s=i.uniquifyIDs,l=["id","href","xlink:href","xlink:role","xlink:arcrole"],u=["href","xlink:href"],c=function(d,f){return u.includes(d)&&(f?!f.includes("#"):!1)};return s&&CC([],Gg(n.children),!1).map(function(d){if(d.attributes&&d.attributes.length){var f=Object.values(d.attributes).map(function(x){var v=x,p=x.value.match(/url\((.*?)\)/);return p&&p[1]&&(v.value=x.value.replace(p[0],"url(".concat(o).concat(p[1],"__").concat(r.hash,")"))),v});l.forEach(function(x){var v=f.find(function(p){return p.name===x});v&&!c(x,v.value)&&(v.value="".concat(v.value,"__").concat(r.hash))})}return d.children.length?r.updateSVGAttributes(d):d}),n}}),Object.defineProperty(t.prototype,"processSVG",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.state.content,r=this.props.preProcessor;return r?r(n):n}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.state,r=n.element,i=n.status,a=this.props,o=a.children,s=o===void 0?null:o,l=a.innerRef,u=a.loader,c=u===void 0?null:u,d=SC(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return md()?r?T.cloneElement(r,Xf({ref:l},d)):[Kt.UNSUPPORTED,Kt.FAILED].includes(i)?s:c:c}}),Object.defineProperty(t,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{cacheRequests:!0,uniquifyIDs:!1}}),t}(T.PureComponent);const vn=DC,EC=k.nav`
    display:flex;
    background: #1E2139;
    flex-direction: column;
    border-radius: ${e=>e.theme.borderRadius};
    justify-content: center;
    align-items: center;
    z-index:5;
    @media screen and (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        justify-content: flex-start;
        border-radius:0;
        position:static;
    }
`,Kg=k.img`
    width: 75%;
    @media screen and (max-width:1024px) {
        width: 50%;
    }
    border-radius: 50%;
    border-top: 1px solid #494E6E;
    background-color: black;
    opacity:1;
    transition:0.5s;
    user-select: none;
    &:hover{
        cursor:pointer;
        opacity:0.5;
        transition:0.5s;
    }
`,TC=k.div`
    background:#7C5DFA;
    flex-grow:0;
    @media screen and (max-width: 768px) {
        height:100%;
        width:15%;
        display:flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: ${e=>e.theme.logoRadius};
        border-bottom-right-radius: ${e=>e.theme.logoRadius};
    }
    @media screen and (max-width: 1024px) {
        width:10%;
        display:flex;
        align-items: center;
        justify-content: center;
        padding:20px;
        border-top-right-radius:20px;
        border-bottom-right-radius:20px;
    }
        height:10%;
        width:100%;
        display:flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: ${e=>e.theme.logoRadius};
        border-bottom-right-radius: ${e=>e.theme.logoRadius};
`,OC=k.img`
    height:50%;
`,PC=k.div`
    flex-grow:0;
    display:flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width:1024px) {
        padding:0px 20px;
        border-left:1px solid #494E6E;
        height:100%;
    }
    @media screen and (min-width: 1025px) {
        border-top:1px solid #494E6E;
        width:100%;
        padding:20px 0px;
    }
    
`,qg=k.img`
    height:30px;
    transition:0.4s;
    transform: scale(1);
    user-select: none;
    @media screen and (max-width:1024px){
        height:20px;
    }
    &:hover{
        cursor:pointer;
        transform: scale(1.3);
        transition:0.4s;
    }
`,AC=k.div`
    display:flex;
    margin-bottom:10px;
    flex-grow:2;
    align-items: flex-end;
    justify-content:center;
    @media screen and (max-width:1024px){
        margin-right:10px;
        flex-grow:1;
        align-items: flex-start;
        margin-bottom:0;
        justify-content: flex-end;
    }
`;function MC(e){ao();function t(){e.setIsDarkMode(s=>!s);const o=!e.isDarkMode;localStorage.setItem("colorscheme",o)}const n={borderRadius:"0px",logoRadius:"0px"},r={borderRadius:"0px 20px 20px 0px",logoRadius:"24px"},{isAuthenticated:i,user:a}=io();return y(Mt,{theme:e.isFormOpen?n:r,children:R(EC,{children:[y(TC,{children:y(OC,{src:"\\assets\\logo.svg"})}),y(AC,{children:e.isDarkMode?y(qg,{onClick:t,src:"\\assets\\icon-moon.svg"}):y(qg,{onClick:t,src:"\\assets\\icon-sun.svg"})}),y(PC,{children:a!=null&&a.picture?y(Kg,{src:a==null?void 0:a.picture}):y(Kg,{src:"\\assets\\image-avatar.jpg"})})]})})}function IC(){const{pathname:e}=ta();return T.useEffect(()=>{window.scrollTo(0,0)},[e]),null}var As=e=>e.type==="checkbox",Oa=e=>e instanceof Date,Xt=e=>e==null;const Px=e=>typeof e=="object";var Et=e=>!Xt(e)&&!Array.isArray(e)&&Px(e)&&!Oa(e),Ax=e=>Et(e)&&e.target?As(e.target)?e.target.checked:e.target.value:e,RC=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Mx=(e,t)=>e.has(RC(t)),NC=e=>{const t=e.constructor&&e.constructor.prototype;return Et(t)&&t.hasOwnProperty("isPrototypeOf")},Cp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function sn(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Cp&&(e instanceof Blob||e instanceof FileList))&&(n||Et(e)))if(t=n?[]:{},!Array.isArray(e)&&!NC(e))t=e;else for(const r in e)t[r]=sn(e[r]);else return e;return t}var oo=e=>Array.isArray(e)?e.filter(Boolean):[],nt=e=>e===void 0,X=(e,t,n)=>{if(!t||!Et(e))return n;const r=oo(t.split(/[,[\].]+?/)).reduce((i,a)=>Xt(i)?i:i[a],e);return nt(r)||r===e?nt(e[t])?n:e[t]:r};const uu={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},En={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},_r={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},zC=ye.createContext(null),pc=()=>ye.useContext(zC);var Ix=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(i,a,{get:()=>{const o=a;return t._proxyFormState[o]!==En.all&&(t._proxyFormState[o]=!r||En.all),n&&(n[o]=!0),e[o]}});return i},hn=e=>Et(e)&&!Object.keys(e).length,Rx=(e,t,n,r)=>{n(e);const{name:i,...a}=e;return hn(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(o=>t[o]===(!r||En.all))},gn=e=>Array.isArray(e)?e:[e],Nx=(e,t,n)=>n&&t?e===t:!e||!t||e===t||gn(e).some(r=>r&&(r.startsWith(t)||t.startsWith(r)));function mc(e){const t=ye.useRef(e);t.current=e,ye.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function FC(e){const t=pc(),{control:n=t.control,disabled:r,name:i,exact:a}=e||{},[o,s]=ye.useState(n._formState),l=ye.useRef(!0),u=ye.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=ye.useRef(i);return c.current=i,mc({disabled:r,next:d=>l.current&&Nx(c.current,d.name,a)&&Rx(d,u.current,n._updateFormState)&&s({...n._formState,...d}),subject:n._subjects.state}),ye.useEffect(()=>(l.current=!0,u.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),Ix(o,n,u.current,!1)}var cr=e=>typeof e=="string",zx=(e,t,n,r,i)=>cr(e)?(r&&t.watch.add(e),X(n,e,i)):Array.isArray(e)?e.map(a=>(r&&t.watch.add(a),X(n,a))):(r&&(t.watchAll=!0),n);function LC(e){const t=pc(),{control:n=t.control,name:r,defaultValue:i,disabled:a,exact:o}=e||{},s=ye.useRef(r);s.current=r,mc({disabled:a,subject:n._subjects.values,next:c=>{Nx(s.current,c.name,o)&&u(sn(zx(s.current,n._names,c.values||n._formValues,!1,i)))}});const[l,u]=ye.useState(n._getWatch(r,i));return ye.useEffect(()=>n._removeUnmounted()),l}var Dp=e=>/^\w*$/.test(e),Fx=e=>oo(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ke(e,t,n){let r=-1;const i=Dp(t)?[t]:Fx(t),a=i.length,o=a-1;for(;++r<a;){const s=i[r];let l=n;if(r!==o){const u=e[s];l=Et(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[s]=l,e=e[s]}return e}function jC(e){const t=pc(),{name:n,control:r=t.control,shouldUnregister:i}=e,a=Mx(r._names.array,n),o=LC({control:r,name:n,defaultValue:X(r._formValues,n,X(r._defaultValues,n,e.defaultValue)),exact:!0}),s=FC({control:r,name:n}),l=ye.useRef(r.register(n,{...e.rules,value:o}));return ye.useEffect(()=>{const u=r._options.shouldUnregister||i,c=(d,f)=>{const x=X(r._fields,d);x&&(x._f.mount=f)};if(c(n,!0),u){const d=sn(X(r._options.defaultValues,n));Ke(r._defaultValues,n,d),nt(X(r._formValues,n))&&Ke(r._formValues,n,d)}return()=>{(a?u&&!r._state.action:u)?r.unregister(n):c(n,!1)}},[n,r,a,i]),{field:{name:n,value:o,onChange:ye.useCallback(u=>l.current.onChange({target:{value:Ax(u),name:n},type:uu.CHANGE}),[n]),onBlur:ye.useCallback(()=>l.current.onBlur({target:{value:X(r._formValues,n),name:n},type:uu.BLUR}),[n,r]),ref:u=>{const c=X(r._fields,n);c&&u&&(c._f.ref={focus:()=>u.focus(),select:()=>u.select(),setCustomValidity:d=>u.setCustomValidity(d),reportValidity:()=>u.reportValidity()})}},formState:s,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!X(s.errors,n)},isDirty:{enumerable:!0,get:()=>!!X(s.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!X(s.touchedFields,n)},error:{enumerable:!0,get:()=>X(s.errors,n)}})}}const Xg=e=>e.render(jC(e));var Lx=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const cu=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=X(e,r);if(i){const{_f:a,...o}=i;if(a&&t(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else Et(o)&&cu(o,t)}}};var Kr=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(Math.random()*16+e)%16|0;return(t=="x"?n:n&3|8).toString(16)})},gd=(e,t,n={})=>n.shouldFocus||nt(n.shouldFocus)?n.focusName||`${e}.${nt(n.focusIndex)?t:n.focusIndex}.`:"",Qf=e=>({isOnSubmit:!e||e===En.onSubmit,isOnBlur:e===En.onBlur,isOnChange:e===En.onChange,isOnAll:e===En.all,isOnTouch:e===En.onTouched}),Jf=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),jx=(e,t,n)=>{const r=oo(X(e,n));return Ke(r,"root",t[n]),Ke(e,n,r),e},La=e=>typeof e=="boolean",Ep=e=>e.type==="file",ri=e=>typeof e=="function",du=e=>{if(!Cp)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},bl=e=>cr(e),Tp=e=>e.type==="radio",fu=e=>e instanceof RegExp;const Qg={value:!1,isValid:!1},Jg={value:!0,isValid:!0};var $x=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!nt(e[0].attributes.value)?nt(e[0].value)||e[0].value===""?Jg:{value:e[0].value,isValid:!0}:Jg:Qg}return Qg};const ey={isValid:!1,value:null};var Ux=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,ey):ey;function ty(e,t,n="validate"){if(bl(e)||Array.isArray(e)&&e.every(bl)||La(e)&&!e)return{type:n,message:bl(e)?e:"",ref:t}}var la=e=>Et(e)&&!fu(e)?e:{value:e,message:""},eh=async(e,t,n,r,i)=>{const{ref:a,refs:o,required:s,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:x,name:v,valueAsNumber:p,mount:S,disabled:m}=e._f,h=X(t,v);if(!S||m)return{};const g=o?o[0]:a,C=ae=>{r&&g.reportValidity&&(g.setCustomValidity(La(ae)?"":ae||""),g.reportValidity())},w={},D=Tp(a),E=As(a),M=D||E,W=(p||Ep(a))&&nt(a.value)&&nt(h)||du(a)&&a.value===""||h===""||Array.isArray(h)&&!h.length,z=Lx.bind(null,v,n,w),$=(ae,oe,ke,Me=_r.maxLength,Xe=_r.minLength)=>{const Ve=ae?oe:ke;w[v]={type:ae?Me:Xe,message:Ve,ref:a,...z(ae?Me:Xe,Ve)}};if(i?!Array.isArray(h)||!h.length:s&&(!M&&(W||Xt(h))||La(h)&&!h||E&&!$x(o).isValid||D&&!Ux(o).isValid)){const{value:ae,message:oe}=bl(s)?{value:!!s,message:s}:la(s);if(ae&&(w[v]={type:_r.required,message:oe,ref:g,...z(_r.required,oe)},!n))return C(oe),w}if(!W&&(!Xt(c)||!Xt(d))){let ae,oe;const ke=la(d),Me=la(c);if(!Xt(h)&&!isNaN(h)){const Xe=a.valueAsNumber||h&&+h;Xt(ke.value)||(ae=Xe>ke.value),Xt(Me.value)||(oe=Xe<Me.value)}else{const Xe=a.valueAsDate||new Date(h),Ve=ue=>new Date(new Date().toDateString()+" "+ue),V=a.type=="time",Q=a.type=="week";cr(ke.value)&&h&&(ae=V?Ve(h)>Ve(ke.value):Q?h>ke.value:Xe>new Date(ke.value)),cr(Me.value)&&h&&(oe=V?Ve(h)<Ve(Me.value):Q?h<Me.value:Xe<new Date(Me.value))}if((ae||oe)&&($(!!ae,ke.message,Me.message,_r.max,_r.min),!n))return C(w[v].message),w}if((l||u)&&!W&&(cr(h)||i&&Array.isArray(h))){const ae=la(l),oe=la(u),ke=!Xt(ae.value)&&h.length>+ae.value,Me=!Xt(oe.value)&&h.length<+oe.value;if((ke||Me)&&($(ke,ae.message,oe.message),!n))return C(w[v].message),w}if(f&&!W&&cr(h)){const{value:ae,message:oe}=la(f);if(fu(ae)&&!h.match(ae)&&(w[v]={type:_r.pattern,message:oe,ref:a,...z(_r.pattern,oe)},!n))return C(oe),w}if(x){if(ri(x)){const ae=await x(h,t),oe=ty(ae,g);if(oe&&(w[v]={...oe,...z(_r.validate,oe.message)},!n))return C(oe.message),w}else if(Et(x)){let ae={};for(const oe in x){if(!hn(ae)&&!n)break;const ke=ty(await x[oe](h,t),g,oe);ke&&(ae={...ke,...z(oe,ke.message)},C(ke.message),n&&(w[v]=ae))}if(!hn(ae)&&(w[v]={ref:g,...ae},!n))return w}}return C(!0),w};function yd(e,t){return[...e,...gn(t)]}var vd=e=>Array.isArray(e)?e.map(()=>{}):void 0;function xd(e,t,n){return[...e.slice(0,t),...gn(n),...e.slice(t)]}var wd=(e,t,n)=>Array.isArray(e)?(nt(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(t,1)[0]),e):[];function _d(e,t){return[...gn(t),...gn(e)]}function $C(e,t){let n=0;const r=[...e];for(const i of t)r.splice(i-n,1),n++;return oo(r).length?r:[]}var kd=(e,t)=>nt(t)?[]:$C(e,gn(t).sort((n,r)=>n-r)),Sd=(e,t,n)=>{e[t]=[e[n],e[n]=e[t]][0]};function UC(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=nt(e)?r++:e[t[r++]];return e}function BC(e){for(const t in e)if(!nt(e[t]))return!1;return!0}function Tt(e,t){const n=Array.isArray(t)?t:Dp(t)?[t]:Fx(t),r=n.length===1?e:UC(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(Et(r)&&hn(r)||Array.isArray(r)&&BC(r))&&Tt(e,n.slice(0,-1)),e}var ny=(e,t,n)=>(e[t]=n,e);function VC(e){const t=pc(),{control:n=t.control,name:r,keyName:i="id",shouldUnregister:a}=e,[o,s]=ye.useState(n._getFieldArray(r)),l=ye.useRef(n._getFieldArray(r).map(Kr)),u=ye.useRef(o),c=ye.useRef(r),d=ye.useRef(!1);c.current=r,u.current=o,n._names.array.add(r),e.rules&&n.register(r,e.rules),mc({next:({values:w,name:D})=>{if(D===c.current||!D){const E=X(w,c.current);Array.isArray(E)&&(s(E),l.current=E.map(Kr))}},subject:n._subjects.array});const f=ye.useCallback(w=>{d.current=!0,n._updateFieldArray(r,w)},[n,r]),x=(w,D)=>{const E=gn(sn(w)),M=yd(n._getFieldArray(r),E);n._names.focus=gd(r,M.length-1,D),l.current=yd(l.current,E.map(Kr)),f(M),s(M),n._updateFieldArray(r,M,yd,{argA:vd(w)})},v=(w,D)=>{const E=gn(sn(w)),M=_d(n._getFieldArray(r),E);n._names.focus=gd(r,0,D),l.current=_d(l.current,E.map(Kr)),f(M),s(M),n._updateFieldArray(r,M,_d,{argA:vd(w)})},p=w=>{const D=kd(n._getFieldArray(r),w);l.current=kd(l.current,w),f(D),s(D),n._updateFieldArray(r,D,kd,{argA:w})},S=(w,D,E)=>{const M=gn(sn(D)),W=xd(n._getFieldArray(r),w,M);n._names.focus=gd(r,w,E),l.current=xd(l.current,w,M.map(Kr)),f(W),s(W),n._updateFieldArray(r,W,xd,{argA:w,argB:vd(D)})},m=(w,D)=>{const E=n._getFieldArray(r);Sd(E,w,D),Sd(l.current,w,D),f(E),s(E),n._updateFieldArray(r,E,Sd,{argA:w,argB:D},!1)},h=(w,D)=>{const E=n._getFieldArray(r);wd(E,w,D),wd(l.current,w,D),f(E),s(E),n._updateFieldArray(r,E,wd,{argA:w,argB:D},!1)},g=(w,D)=>{const E=sn(D),M=ny(n._getFieldArray(r),w,E);l.current=[...M].map((W,z)=>!W||z===w?Kr():l.current[z]),f(M),s([...M]),n._updateFieldArray(r,M,ny,{argA:w,argB:E},!0,!1)},C=w=>{const D=gn(sn(w));l.current=D.map(Kr),f([...D]),s([...D]),n._updateFieldArray(r,[...D],E=>E,{},!0,!1)};return ye.useEffect(()=>{if(n._state.action=!1,Jf(r,n._names)&&n._subjects.state.next({...n._formState}),d.current&&(!Qf(n._options.mode).isOnSubmit||n._formState.isSubmitted))if(n._options.resolver)n._executeSchema([r]).then(w=>{const D=X(w.errors,r);D?Ke(n._formState.errors,r,D):Tt(n._formState.errors,r),n._subjects.state.next({errors:n._formState.errors})});else{const w=X(n._fields,r);w&&w._f&&eh(w,n._formValues,n._options.criteriaMode===En.all,n._options.shouldUseNativeValidation,!0).then(D=>!hn(D)&&n._subjects.state.next({errors:jx(n._formState.errors,D,r)}))}n._subjects.values.next({name:r,values:{...n._formValues}}),n._names.focus&&cu(n._fields,w=>!!w&&w.startsWith(n._names.focus||"")),n._names.focus="",n._updateValid()},[o,r,n]),ye.useEffect(()=>(!X(n._formValues,r)&&n._updateFieldArray(r),()=>{(n._options.shouldUnregister||a)&&n.unregister(r)}),[r,n,i,a]),{swap:ye.useCallback(m,[f,r,n]),move:ye.useCallback(h,[f,r,n]),prepend:ye.useCallback(v,[f,r,n]),append:ye.useCallback(x,[f,r,n]),remove:ye.useCallback(p,[f,r,n]),insert:ye.useCallback(S,[f,r,n]),update:ye.useCallback(g,[f,r,n]),replace:ye.useCallback(C,[f,r,n]),fields:ye.useMemo(()=>o.map((w,D)=>({...w,[i]:l.current[D]||Kr()})),[o,i])}}function bd(){let e=[];return{get observers(){return e},next:i=>{for(const a of e)a.next&&a.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(a=>a!==i)}}),unsubscribe:()=>{e=[]}}}var hu=e=>Xt(e)||!Px(e);function Ni(e,t){if(hu(e)||hu(t))return e===t;if(Oa(e)&&Oa(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const a=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(Oa(a)&&Oa(o)||Et(a)&&Et(o)||Array.isArray(a)&&Array.isArray(o)?!Ni(a,o):a!==o)return!1}}return!0}var Bx=e=>e.type==="select-multiple",YC=e=>Tp(e)||As(e),Cd=e=>du(e)&&e.isConnected,Vx=e=>{for(const t in e)if(ri(e[t]))return!0;return!1};function pu(e,t={}){const n=Array.isArray(e);if(Et(e)||n)for(const r in e)Array.isArray(e[r])||Et(e[r])&&!Vx(e[r])?(t[r]=Array.isArray(e[r])?[]:{},pu(e[r],t[r])):Xt(e[r])||(t[r]=!0);return t}function Yx(e,t,n){const r=Array.isArray(e);if(Et(e)||r)for(const i in e)Array.isArray(e[i])||Et(e[i])&&!Vx(e[i])?nt(t)||hu(n[i])?n[i]=Array.isArray(e[i])?pu(e[i],[]):{...pu(e[i])}:Yx(e[i],Xt(t)?{}:t[i],n[i]):n[i]=!Ni(e[i],t[i]);return n}var Dd=(e,t)=>Yx(e,t,pu(t)),Wx=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>nt(e)?e:t?e===""?NaN:e&&+e:n&&cr(e)?new Date(e):r?r(e):e;function Ed(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return Ep(t)?t.files:Tp(t)?Ux(e.refs).value:Bx(t)?[...t.selectedOptions].map(({value:n})=>n):As(t)?$x(e.refs).value:Wx(nt(t.value)?e.ref.value:t.value,e)}var WC=(e,t,n,r)=>{const i={};for(const a of e){const o=X(t,a);o&&Ke(i,a,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},ko=e=>nt(e)?e:fu(e)?e.source:Et(e)?fu(e.value)?e.value.source:e.value:e,HC=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ry(e,t,n){const r=X(e,n);if(r||Dp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const a=i.join("."),o=X(t,a),s=X(e,a);if(o&&!Array.isArray(o)&&n!==a)return{name:n};if(s&&s.type)return{name:a,error:s};i.pop()}return{name:n}}var ZC=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,GC=(e,t)=>!oo(X(e,t)).length&&Tt(e,t);const KC={mode:En.onSubmit,reValidateMode:En.onChange,shouldFocusError:!0};function qC(e={},t){let n={...KC,...e},r={submitCount:0,isDirty:!1,isLoading:ri(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},a=Et(n.defaultValues)||Et(n.values)?sn(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:sn(a),s={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:bd(),array:bd(),state:bd()},x=e.resetOptions&&e.resetOptions.keepDirtyValues,v=Qf(n.mode),p=Qf(n.reValidateMode),S=n.criteriaMode===En.all,m=_=>O=>{clearTimeout(c),c=setTimeout(_,O)},h=async _=>{if(d.isValid||_){const O=n.resolver?hn((await W()).errors):await $(i,!0);O!==r.isValid&&f.state.next({isValid:O})}},g=_=>d.isValidating&&f.state.next({isValidating:_}),C=(_,O=[],P,G,q=!0,N=!0)=>{if(G&&P){if(s.action=!0,N&&Array.isArray(X(i,_))){const se=P(X(i,_),G.argA,G.argB);q&&Ke(i,_,se)}if(N&&Array.isArray(X(r.errors,_))){const se=P(X(r.errors,_),G.argA,G.argB);q&&Ke(r.errors,_,se),GC(r.errors,_)}if(d.touchedFields&&N&&Array.isArray(X(r.touchedFields,_))){const se=P(X(r.touchedFields,_),G.argA,G.argB);q&&Ke(r.touchedFields,_,se)}d.dirtyFields&&(r.dirtyFields=Dd(a,o)),f.state.next({name:_,isDirty:oe(_,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ke(o,_,O)},w=(_,O)=>{Ke(r.errors,_,O),f.state.next({errors:r.errors})},D=(_,O,P,G)=>{const q=X(i,_);if(q){const N=X(o,_,nt(P)?X(a,_):P);nt(N)||G&&G.defaultChecked||O?Ke(o,_,O?N:Ed(q._f)):Xe(_,N),s.mount&&h()}},E=(_,O,P,G,q)=>{let N=!1,se=!1;const Ye={name:_};if(!P||G){d.isDirty&&(se=r.isDirty,r.isDirty=Ye.isDirty=oe(),N=se!==Ye.isDirty);const Re=Ni(X(a,_),O);se=X(r.dirtyFields,_),Re?Tt(r.dirtyFields,_):Ke(r.dirtyFields,_,!0),Ye.dirtyFields=r.dirtyFields,N=N||d.dirtyFields&&se!==!Re}if(P){const Re=X(r.touchedFields,_);Re||(Ke(r.touchedFields,_,P),Ye.touchedFields=r.touchedFields,N=N||d.touchedFields&&Re!==P)}return N&&q&&f.state.next(Ye),N?Ye:{}},M=(_,O,P,G)=>{const q=X(r.errors,_),N=d.isValid&&La(O)&&r.isValid!==O;if(e.delayError&&P?(u=m(()=>w(_,P)),u(e.delayError)):(clearTimeout(c),u=null,P?Ke(r.errors,_,P):Tt(r.errors,_)),(P?!Ni(q,P):q)||!hn(G)||N){const se={...G,...N&&La(O)?{isValid:O}:{},errors:r.errors,name:_};r={...r,...se},f.state.next(se)}g(!1)},W=async _=>n.resolver(o,n.context,WC(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),z=async _=>{const{errors:O}=await W();if(_)for(const P of _){const G=X(O,P);G?Ke(r.errors,P,G):Tt(r.errors,P)}else r.errors=O;return O},$=async(_,O,P={valid:!0})=>{for(const G in _){const q=_[G];if(q){const{_f:N,...se}=q;if(N){const Ye=l.array.has(N.name),Re=await eh(q,o,S,n.shouldUseNativeValidation&&!O,Ye);if(Re[N.name]&&(P.valid=!1,O))break;!O&&(X(Re,N.name)?Ye?jx(r.errors,Re,N.name):Ke(r.errors,N.name,Re[N.name]):Tt(r.errors,N.name))}se&&await $(se,O,P)}}return P.valid},ae=()=>{for(const _ of l.unMount){const O=X(i,_);O&&(O._f.refs?O._f.refs.every(P=>!Cd(P)):!Cd(O._f.ref))&&b(_)}l.unMount=new Set},oe=(_,O)=>(_&&O&&Ke(o,_,O),!Ni(Ne(),a)),ke=(_,O,P)=>zx(_,l,{...s.mount?o:nt(O)?a:cr(_)?{[_]:O}:O},P,O),Me=_=>oo(X(s.mount?o:a,_,e.shouldUnregister?X(a,_,[]):[])),Xe=(_,O,P={})=>{const G=X(i,_);let q=O;if(G){const N=G._f;N&&(!N.disabled&&Ke(o,_,Wx(O,N)),q=du(N.ref)&&Xt(O)?"":O,Bx(N.ref)?[...N.ref.options].forEach(se=>se.selected=q.includes(se.value)):N.refs?As(N.ref)?N.refs.length>1?N.refs.forEach(se=>(!se.defaultChecked||!se.disabled)&&(se.checked=Array.isArray(q)?!!q.find(Ye=>Ye===se.value):q===se.value)):N.refs[0]&&(N.refs[0].checked=!!q):N.refs.forEach(se=>se.checked=se.value===q):Ep(N.ref)?N.ref.value="":(N.ref.value=q,N.ref.type||f.values.next({name:_,values:{...o}})))}(P.shouldDirty||P.shouldTouch)&&E(_,q,P.shouldTouch,P.shouldDirty,!0),P.shouldValidate&&ue(_)},Ve=(_,O,P)=>{for(const G in O){const q=O[G],N=`${_}.${G}`,se=X(i,N);(l.array.has(_)||!hu(q)||se&&!se._f)&&!Oa(q)?Ve(N,q,P):Xe(N,q,P)}},V=(_,O,P={})=>{const G=X(i,_),q=l.array.has(_),N=sn(O);Ke(o,_,N),q?(f.array.next({name:_,values:{...o}}),(d.isDirty||d.dirtyFields)&&P.shouldDirty&&f.state.next({name:_,dirtyFields:Dd(a,o),isDirty:oe(_,N)})):G&&!G._f&&!Xt(N)?Ve(_,N,P):Xe(_,N,P),Jf(_,l)&&f.state.next({...r}),f.values.next({name:_,values:{...o}}),!s.mount&&t()},Q=async _=>{const O=_.target;let P=O.name,G=!0;const q=X(i,P),N=()=>O.type?Ed(q._f):Ax(_);if(q){let se,Ye;const Re=N(),he=_.type===uu.BLUR||_.type===uu.FOCUS_OUT,et=!HC(q._f)&&!n.resolver&&!X(r.errors,P)&&!q._f.deps||ZC(he,X(r.touchedFields,P),r.isSubmitted,p,v),Jn=Jf(P,l,he);Ke(o,P,Re),he?(q._f.onBlur&&q._f.onBlur(_),u&&u(0)):q._f.onChange&&q._f.onChange(_);const vr=E(P,Re,he,!1),A=!hn(vr)||Jn;if(!he&&f.values.next({name:P,type:_.type,values:{...o}}),et)return d.isValid&&h(),A&&f.state.next({name:P,...Jn?{}:vr});if(!he&&Jn&&f.state.next({...r}),g(!0),n.resolver){const{errors:I}=await W([P]),L=ry(r.errors,i,P),le=ry(I,i,L.name||P);se=le.error,P=le.name,Ye=hn(I)}else se=(await eh(q,o,S,n.shouldUseNativeValidation))[P],G=isNaN(Re)||Re===X(o,P,Re),G&&(se?Ye=!1:d.isValid&&(Ye=await $(i,!0)));G&&(q._f.deps&&ue(q._f.deps),M(P,Ye,se,vr))}},ue=async(_,O={})=>{let P,G;const q=gn(_);if(g(!0),n.resolver){const N=await z(nt(_)?_:q);P=hn(N),G=_?!q.some(se=>X(N,se)):P}else _?(G=(await Promise.all(q.map(async N=>{const se=X(i,N);return await $(se&&se._f?{[N]:se}:se)}))).every(Boolean),!(!G&&!r.isValid)&&h()):G=P=await $(i);return f.state.next({...!cr(_)||d.isValid&&P!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:P}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!G&&cu(i,N=>N&&X(r.errors,N),_?q:l.mount),G},Ne=_=>{const O={...a,...s.mount?o:{}};return nt(_)?O:cr(_)?X(O,_):_.map(P=>X(O,P))},H=(_,O)=>({invalid:!!X((O||r).errors,_),isDirty:!!X((O||r).dirtyFields,_),isTouched:!!X((O||r).touchedFields,_),error:X((O||r).errors,_)}),Z=_=>{_&&gn(_).forEach(O=>Tt(r.errors,O)),f.state.next({errors:_?r.errors:{}})},J=(_,O,P)=>{const G=(X(i,_,{_f:{}})._f||{}).ref;Ke(r.errors,_,{...O,ref:G}),f.state.next({name:_,errors:r.errors,isValid:!1}),P&&P.shouldFocus&&G&&G.focus&&G.focus()},ge=(_,O)=>ri(_)?f.values.subscribe({next:P=>_(ke(void 0,O),P)}):ke(_,O,!0),b=(_,O={})=>{for(const P of _?gn(_):l.mount)l.mount.delete(P),l.array.delete(P),O.keepValue||(Tt(i,P),Tt(o,P)),!O.keepError&&Tt(r.errors,P),!O.keepDirty&&Tt(r.dirtyFields,P),!O.keepTouched&&Tt(r.touchedFields,P),!n.shouldUnregister&&!O.keepDefaultValue&&Tt(a,P);f.values.next({values:{...o}}),f.state.next({...r,...O.keepDirty?{isDirty:oe()}:{}}),!O.keepIsValid&&h()},ee=(_,O={})=>{let P=X(i,_);const G=La(O.disabled);return Ke(i,_,{...P||{},_f:{...P&&P._f?P._f:{ref:{name:_}},name:_,mount:!0,...O}}),l.mount.add(_),P?G&&Ke(o,_,O.disabled?void 0:X(o,_,Ed(P._f))):D(_,!0,O.value),{...G?{disabled:O.disabled}:{},...n.shouldUseNativeValidation?{required:!!O.required,min:ko(O.min),max:ko(O.max),minLength:ko(O.minLength),maxLength:ko(O.maxLength),pattern:ko(O.pattern)}:{},name:_,onChange:Q,onBlur:Q,ref:q=>{if(q){ee(_,O),P=X(i,_);const N=nt(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,se=YC(N),Ye=P._f.refs||[];if(se?Ye.find(Re=>Re===N):N===P._f.ref)return;Ke(i,_,{_f:{...P._f,...se?{refs:[...Ye.filter(Cd),N,...Array.isArray(X(a,_))?[{}]:[]],ref:{type:N.type,name:_}}:{ref:N}}}),D(_,!1,void 0,N)}else P=X(i,_,{}),P._f&&(P._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(Mx(l.array,_)&&s.action)&&l.unMount.add(_)}}},j=()=>n.shouldFocusError&&cu(i,_=>_&&X(r.errors,_),l.mount),Ce=(_,O)=>async P=>{P&&(P.preventDefault&&P.preventDefault(),P.persist&&P.persist());let G=sn(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:N}=await W();r.errors=q,G=N}else await $(i);Tt(r.errors,"root"),hn(r.errors)?(f.state.next({errors:{}}),await _(G,P)):(O&&await O({...r.errors},P),j(),setTimeout(j)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:hn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ve=(_,O={})=>{X(i,_)&&(nt(O.defaultValue)?V(_,X(a,_)):(V(_,O.defaultValue),Ke(a,_,O.defaultValue)),O.keepTouched||Tt(r.touchedFields,_),O.keepDirty||(Tt(r.dirtyFields,_),r.isDirty=O.defaultValue?oe(_,X(a,_)):oe()),O.keepError||(Tt(r.errors,_),d.isValid&&h()),f.state.next({...r}))},Pe=(_,O={})=>{const P=_||a,G=sn(P),q=_&&!hn(_)?G:a;if(O.keepDefaultValues||(a=P),!O.keepValues){if(O.keepDirtyValues||x)for(const N of l.mount)X(r.dirtyFields,N)?Ke(q,N,X(o,N)):V(N,X(q,N));else{if(Cp&&nt(_))for(const N of l.mount){const se=X(i,N);if(se&&se._f){const Ye=Array.isArray(se._f.refs)?se._f.refs[0]:se._f.ref;if(du(Ye)){const Re=Ye.closest("form");if(Re){Re.reset();break}}}}i={}}o=e.shouldUnregister?O.keepDefaultValues?sn(a):{}:G,f.array.next({values:{...q}}),f.values.next({values:{...q}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!s.mount&&t(),s.mount=!d.isValid||!!O.keepIsValid,s.watch=!!e.shouldUnregister,f.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!Ni(_,a)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&_?Dd(a,_):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},we=(_,O)=>Pe(ri(_)?_(o):_,O),lt=(_,O={})=>{const P=X(i,_),G=P&&P._f;if(G){const q=G.refs?G.refs[0]:G.ref;q.focus&&(q.focus(),O.shouldSelect&&q.select())}},wt=_=>{r={...r,..._}};return ri(n.defaultValues)&&n.defaultValues().then(_=>{we(_,n.resetOptions),f.state.next({isLoading:!1})}),{control:{register:ee,unregister:b,getFieldState:H,_executeSchema:W,_getWatch:ke,_getDirty:oe,_updateValid:h,_removeUnmounted:ae,_updateFieldArray:C,_getFieldArray:Me,_reset:Pe,_updateFormState:wt,_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return s},set _state(_){s=_},get _defaultValues(){return a},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:ue,register:ee,handleSubmit:Ce,watch:ge,setValue:V,getValues:Ne,reset:we,resetField:ve,clearErrors:Z,unregister:b,setError:J,setFocus:lt,getFieldState:H}}function XC(e={}){const t=ye.useRef(),[n,r]=ye.useState({isDirty:!1,isValidating:!1,isLoading:ri(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ri(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...qC(e,()=>r(a=>({...a}))),formState:n});const i=t.current.control;return i._options=e,mc({subject:i._subjects.state,next:a=>{Rx(a,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),ye.useEffect(()=>{e.values&&!Ni(e.values,i._defaultValues)&&i._reset(e.values,i._options.resetOptions)},[e.values,i]),ye.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Ix(n,i),t.current}const QC=["January","February","March","April","May","June","July","August","September","October","November","December"],JC=(e,t)=>new Date(e,t+1,0).getDate(),eD=(e,t)=>{const n=Math.abs((t-e)/1),{result:r}=Array.from({length:n}).reduce(({result:i,current:a})=>({result:[...i,a],current:a+1}),{result:[],current:e});return r};//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Hx;function K(){return Hx.apply(null,arguments)}function tD(e){Hx=e}function Kn(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function ji(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function Ue(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Op(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(Ue(e,t))return!1;return!0}function an(e){return e===void 0}function Ur(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function Ms(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Zx(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function ii(e,t){for(var n in t)Ue(t,n)&&(e[n]=t[n]);return Ue(t,"toString")&&(e.toString=t.toString),Ue(t,"valueOf")&&(e.valueOf=t.valueOf),e}function gr(e,t,n,r){return yw(e,t,n,r,!0).utc()}function nD(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function De(e){return e._pf==null&&(e._pf=nD()),e._pf}var th;Array.prototype.some?th=Array.prototype.some:th=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function Pp(e){if(e._isValid==null){var t=De(e),n=th.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function gc(e){var t=gr(NaN);return e!=null?ii(De(t),e):De(t).userInvalidated=!0,t}var iy=K.momentProperties=[],Td=!1;function Ap(e,t){var n,r,i,a=iy.length;if(an(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),an(t._i)||(e._i=t._i),an(t._f)||(e._f=t._f),an(t._l)||(e._l=t._l),an(t._strict)||(e._strict=t._strict),an(t._tzm)||(e._tzm=t._tzm),an(t._isUTC)||(e._isUTC=t._isUTC),an(t._offset)||(e._offset=t._offset),an(t._pf)||(e._pf=De(t)),an(t._locale)||(e._locale=t._locale),a>0)for(n=0;n<a;n++)r=iy[n],i=t[r],an(i)||(e[r]=i);return e}function Is(e){Ap(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),Td===!1&&(Td=!0,K.updateOffset(this),Td=!1)}function qn(e){return e instanceof Is||e!=null&&e._isAMomentObject!=null}function Gx(e){K.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function In(e,t){var n=!0;return ii(function(){if(K.deprecationHandler!=null&&K.deprecationHandler(null,e),n){var r=[],i,a,o,s=arguments.length;for(a=0;a<s;a++){if(i="",typeof arguments[a]=="object"){i+=`
[`+a+"] ";for(o in arguments[0])Ue(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[a];r.push(i)}Gx(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var ay={};function Kx(e,t){K.deprecationHandler!=null&&K.deprecationHandler(e,t),ay[e]||(Gx(t),ay[e]=!0)}K.suppressDeprecationWarnings=!1;K.deprecationHandler=null;function yr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function rD(e){var t,n;for(n in e)Ue(e,n)&&(t=e[n],yr(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function nh(e,t){var n=ii({},e),r;for(r in t)Ue(t,r)&&(ji(e[r])&&ji(t[r])?(n[r]={},ii(n[r],e[r]),ii(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)Ue(e,r)&&!Ue(t,r)&&ji(e[r])&&(n[r]=ii({},n[r]));return n}function Mp(e){e!=null&&this.set(e)}var rh;Object.keys?rh=Object.keys:rh=function(e){var t,n=[];for(t in e)Ue(e,t)&&n.push(t);return n};var iD={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function aD(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return yr(r)?r.call(t,n):r}function hr(e,t,n){var r=""+Math.abs(e),i=t-r.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var Ip=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,ol=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Od={},ja={};function fe(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(ja[e]=i),t&&(ja[t[0]]=function(){return hr(i.apply(this,arguments),t[1],t[2])}),n&&(ja[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function oD(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function sD(e){var t=e.match(Ip),n,r;for(n=0,r=t.length;n<r;n++)ja[t[n]]?t[n]=ja[t[n]]:t[n]=oD(t[n]);return function(i){var a="",o;for(o=0;o<r;o++)a+=yr(t[o])?t[o].call(i,e):t[o];return a}}function Cl(e,t){return e.isValid()?(t=qx(t,e.localeData()),Od[t]=Od[t]||sD(t),Od[t](e)):e.localeData().invalidDate()}function qx(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(ol.lastIndex=0;n>=0&&ol.test(e);)e=e.replace(ol,r),ol.lastIndex=0,n-=1;return e}var lD={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function uD(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Ip).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var cD="Invalid date";function dD(){return this._invalidDate}var fD="%d",hD=/\d{1,2}/;function pD(e){return this._ordinal.replace("%d",e)}var mD={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function gD(e,t,n,r){var i=this._relativeTime[n];return yr(i)?i(e,t,n,r):i.replace(/%d/i,e)}function yD(e,t){var n=this._relativeTime[e>0?"future":"past"];return yr(n)?n(t):n.replace(/%s/i,t)}var $o={};function Ht(e,t){var n=e.toLowerCase();$o[n]=$o[n+"s"]=$o[t]=e}function Rn(e){return typeof e=="string"?$o[e]||$o[e.toLowerCase()]:void 0}function Rp(e){var t={},n,r;for(r in e)Ue(e,r)&&(n=Rn(r),n&&(t[n]=e[r]));return t}var Xx={};function Zt(e,t){Xx[e]=t}function vD(e){var t=[],n;for(n in e)Ue(e,n)&&t.push({unit:n,priority:Xx[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function yc(e){return e%4===0&&e%100!==0||e%400===0}function Dn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Ie(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=Dn(t)),n}function so(e,t){return function(n){return n!=null?(Qx(this,e,n),K.updateOffset(this,t),this):mu(this,e)}}function mu(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Qx(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&yc(e.year())&&e.month()===1&&e.date()===29?(n=Ie(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Sc(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function xD(e){return e=Rn(e),yr(this[e])?this[e]():this}function wD(e,t){if(typeof e=="object"){e=Rp(e);var n=vD(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=Rn(e),yr(this[e]))return this[e](t);return this}var Jx=/\d/,Sn=/\d\d/,ew=/\d{3}/,Np=/\d{4}/,vc=/[+-]?\d{6}/,at=/\d\d?/,tw=/\d\d\d\d?/,nw=/\d\d\d\d\d\d?/,xc=/\d{1,3}/,zp=/\d{1,4}/,wc=/[+-]?\d{1,6}/,lo=/\d+/,_c=/[+-]?\d+/,_D=/Z|[+-]\d\d:?\d\d/gi,kc=/Z|[+-]\d\d(?::?\d\d)?/gi,kD=/[+-]?\d+(\.\d{1,3})?/,Rs=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,gu;gu={};function re(e,t,n){gu[e]=yr(t)?t:function(r,i){return r&&n?n:t}}function SD(e,t){return Ue(gu,e)?gu[e](t._strict,t._locale):new RegExp(bD(e))}function bD(e){return pn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,a){return n||r||i||a}))}function pn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var ih={};function qe(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),Ur(t)&&(r=function(a,o){o[t]=Ie(a)}),i=e.length,n=0;n<i;n++)ih[e[n]]=r}function Ns(e,t){qe(e,function(n,r,i,a){i._w=i._w||{},t(n,i._w,i,a)})}function CD(e,t,n){t!=null&&Ue(ih,e)&&ih[e](t,n._a,n,e)}var Vt=0,Or=1,lr=2,Dt=3,Bn=4,Pr=5,zi=6,DD=7,ED=8;function TD(e,t){return(e%t+t)%t}var vt;Array.prototype.indexOf?vt=Array.prototype.indexOf:vt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Sc(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=TD(t,12);return e+=(t-n)/12,n===1?yc(e)?29:28:31-n%7%2}fe("M",["MM",2],"Mo",function(){return this.month()+1});fe("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});fe("MMMM",0,0,function(e){return this.localeData().months(this,e)});Ht("month","M");Zt("month",8);re("M",at);re("MM",at,Sn);re("MMM",function(e,t){return t.monthsShortRegex(e)});re("MMMM",function(e,t){return t.monthsRegex(e)});qe(["M","MM"],function(e,t){t[Or]=Ie(e)-1});qe(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[Or]=i:De(n).invalidMonth=e});var OD="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),rw="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),iw=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,PD=Rs,AD=Rs;function MD(e,t){return e?Kn(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||iw).test(t)?"format":"standalone"][e.month()]:Kn(this._months)?this._months:this._months.standalone}function ID(e,t){return e?Kn(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[iw.test(t)?"format":"standalone"][e.month()]:Kn(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function RD(e,t,n){var r,i,a,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)a=gr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(a,"").toLocaleLowerCase();return n?t==="MMM"?(i=vt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=vt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=vt.call(this._shortMonthsParse,o),i!==-1?i:(i=vt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=vt.call(this._longMonthsParse,o),i!==-1?i:(i=vt.call(this._shortMonthsParse,o),i!==-1?i:null))}function ND(e,t,n){var r,i,a;if(this._monthsParseExact)return RD.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=gr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(a="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(a.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function aw(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=Ie(t);else if(t=e.localeData().monthsParse(t),!Ur(t))return e}return n=Math.min(e.date(),Sc(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ow(e){return e!=null?(aw(this,e),K.updateOffset(this,!0),this):mu(this,"Month")}function zD(){return Sc(this.year(),this.month())}function FD(e){return this._monthsParseExact?(Ue(this,"_monthsRegex")||sw.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(Ue(this,"_monthsShortRegex")||(this._monthsShortRegex=PD),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function LD(e){return this._monthsParseExact?(Ue(this,"_monthsRegex")||sw.call(this),e?this._monthsStrictRegex:this._monthsRegex):(Ue(this,"_monthsRegex")||(this._monthsRegex=AD),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function sw(){function e(o,s){return s.length-o.length}var t=[],n=[],r=[],i,a;for(i=0;i<12;i++)a=gr([2e3,i]),t.push(this.monthsShort(a,"")),n.push(this.months(a,"")),r.push(this.months(a,"")),r.push(this.monthsShort(a,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=pn(t[i]),n[i]=pn(n[i]);for(i=0;i<24;i++)r[i]=pn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}fe("Y",0,0,function(){var e=this.year();return e<=9999?hr(e,4):"+"+e});fe(0,["YY",2],0,function(){return this.year()%100});fe(0,["YYYY",4],0,"year");fe(0,["YYYYY",5],0,"year");fe(0,["YYYYYY",6,!0],0,"year");Ht("year","y");Zt("year",1);re("Y",_c);re("YY",at,Sn);re("YYYY",zp,Np);re("YYYYY",wc,vc);re("YYYYYY",wc,vc);qe(["YYYYY","YYYYYY"],Vt);qe("YYYY",function(e,t){t[Vt]=e.length===2?K.parseTwoDigitYear(e):Ie(e)});qe("YY",function(e,t){t[Vt]=K.parseTwoDigitYear(e)});qe("Y",function(e,t){t[Vt]=parseInt(e,10)});function Uo(e){return yc(e)?366:365}K.parseTwoDigitYear=function(e){return Ie(e)+(Ie(e)>68?1900:2e3)};var lw=so("FullYear",!0);function jD(){return yc(this.year())}function $D(e,t,n,r,i,a,o){var s;return e<100&&e>=0?(s=new Date(e+400,t,n,r,i,a,o),isFinite(s.getFullYear())&&s.setFullYear(e)):s=new Date(e,t,n,r,i,a,o),s}function ls(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function yu(e,t,n){var r=7+t-n,i=(7+ls(e,0,r).getUTCDay()-t)%7;return-i+r-1}function uw(e,t,n,r,i){var a=(7+n-r)%7,o=yu(e,r,i),s=1+7*(t-1)+a+o,l,u;return s<=0?(l=e-1,u=Uo(l)+s):s>Uo(e)?(l=e+1,u=s-Uo(e)):(l=e,u=s),{year:l,dayOfYear:u}}function us(e,t,n){var r=yu(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,a,o;return i<1?(o=e.year()-1,a=i+Rr(o,t,n)):i>Rr(e.year(),t,n)?(a=i-Rr(e.year(),t,n),o=e.year()+1):(o=e.year(),a=i),{week:a,year:o}}function Rr(e,t,n){var r=yu(e,t,n),i=yu(e+1,t,n);return(Uo(e)-r+i)/7}fe("w",["ww",2],"wo","week");fe("W",["WW",2],"Wo","isoWeek");Ht("week","w");Ht("isoWeek","W");Zt("week",5);Zt("isoWeek",5);re("w",at);re("ww",at,Sn);re("W",at);re("WW",at,Sn);Ns(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Ie(e)});function UD(e){return us(e,this._week.dow,this._week.doy).week}var BD={dow:0,doy:6};function VD(){return this._week.dow}function YD(){return this._week.doy}function WD(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function HD(e){var t=us(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}fe("d",0,"do","day");fe("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});fe("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});fe("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});fe("e",0,0,"weekday");fe("E",0,0,"isoWeekday");Ht("day","d");Ht("weekday","e");Ht("isoWeekday","E");Zt("day",11);Zt("weekday",11);Zt("isoWeekday",11);re("d",at);re("e",at);re("E",at);re("dd",function(e,t){return t.weekdaysMinRegex(e)});re("ddd",function(e,t){return t.weekdaysShortRegex(e)});re("dddd",function(e,t){return t.weekdaysRegex(e)});Ns(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:De(n).invalidWeekday=e});Ns(["d","e","E"],function(e,t,n,r){t[r]=Ie(e)});function ZD(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function GD(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Fp(e,t){return e.slice(t,7).concat(e.slice(0,t))}var KD="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),cw="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),qD="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),XD=Rs,QD=Rs,JD=Rs;function eE(e,t){var n=Kn(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Fp(n,this._week.dow):e?n[e.day()]:n}function tE(e){return e===!0?Fp(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function nE(e){return e===!0?Fp(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function rE(e,t,n){var r,i,a,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)a=gr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(a,"").toLocaleLowerCase();return n?t==="dddd"?(i=vt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=vt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=vt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=vt.call(this._weekdaysParse,o),i!==-1||(i=vt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=vt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=vt.call(this._shortWeekdaysParse,o),i!==-1||(i=vt.call(this._weekdaysParse,o),i!==-1)?i:(i=vt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=vt.call(this._minWeekdaysParse,o),i!==-1||(i=vt.call(this._weekdaysParse,o),i!==-1)?i:(i=vt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function iE(e,t,n){var r,i,a;if(this._weekdaysParseExact)return rE.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=gr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(a="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(a.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function aE(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=ZD(e,this.localeData()),this.add(e-t,"d")):t}function oE(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function sE(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=GD(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function lE(e){return this._weekdaysParseExact?(Ue(this,"_weekdaysRegex")||Lp.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(Ue(this,"_weekdaysRegex")||(this._weekdaysRegex=XD),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function uE(e){return this._weekdaysParseExact?(Ue(this,"_weekdaysRegex")||Lp.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(Ue(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=QD),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function cE(e){return this._weekdaysParseExact?(Ue(this,"_weekdaysRegex")||Lp.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(Ue(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=JD),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Lp(){function e(c,d){return d.length-c.length}var t=[],n=[],r=[],i=[],a,o,s,l,u;for(a=0;a<7;a++)o=gr([2e3,1]).day(a),s=pn(this.weekdaysMin(o,"")),l=pn(this.weekdaysShort(o,"")),u=pn(this.weekdays(o,"")),t.push(s),n.push(l),r.push(u),i.push(s),i.push(l),i.push(u);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function jp(){return this.hours()%12||12}function dE(){return this.hours()||24}fe("H",["HH",2],0,"hour");fe("h",["hh",2],0,jp);fe("k",["kk",2],0,dE);fe("hmm",0,0,function(){return""+jp.apply(this)+hr(this.minutes(),2)});fe("hmmss",0,0,function(){return""+jp.apply(this)+hr(this.minutes(),2)+hr(this.seconds(),2)});fe("Hmm",0,0,function(){return""+this.hours()+hr(this.minutes(),2)});fe("Hmmss",0,0,function(){return""+this.hours()+hr(this.minutes(),2)+hr(this.seconds(),2)});function dw(e,t){fe(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}dw("a",!0);dw("A",!1);Ht("hour","h");Zt("hour",13);function fw(e,t){return t._meridiemParse}re("a",fw);re("A",fw);re("H",at);re("h",at);re("k",at);re("HH",at,Sn);re("hh",at,Sn);re("kk",at,Sn);re("hmm",tw);re("hmmss",nw);re("Hmm",tw);re("Hmmss",nw);qe(["H","HH"],Dt);qe(["k","kk"],function(e,t,n){var r=Ie(e);t[Dt]=r===24?0:r});qe(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});qe(["h","hh"],function(e,t,n){t[Dt]=Ie(e),De(n).bigHour=!0});qe("hmm",function(e,t,n){var r=e.length-2;t[Dt]=Ie(e.substr(0,r)),t[Bn]=Ie(e.substr(r)),De(n).bigHour=!0});qe("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Dt]=Ie(e.substr(0,r)),t[Bn]=Ie(e.substr(r,2)),t[Pr]=Ie(e.substr(i)),De(n).bigHour=!0});qe("Hmm",function(e,t,n){var r=e.length-2;t[Dt]=Ie(e.substr(0,r)),t[Bn]=Ie(e.substr(r))});qe("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Dt]=Ie(e.substr(0,r)),t[Bn]=Ie(e.substr(r,2)),t[Pr]=Ie(e.substr(i))});function fE(e){return(e+"").toLowerCase().charAt(0)==="p"}var hE=/[ap]\.?m?\.?/i,pE=so("Hours",!0);function mE(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var hw={calendar:iD,longDateFormat:lD,invalidDate:cD,ordinal:fD,dayOfMonthOrdinalParse:hD,relativeTime:mD,months:OD,monthsShort:rw,week:BD,weekdays:KD,weekdaysMin:qD,weekdaysShort:cw,meridiemParse:hE},ot={},So={},cs;function gE(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function oy(e){return e&&e.toLowerCase().replace("_","-")}function yE(e){for(var t=0,n,r,i,a;t<e.length;){for(a=oy(e[t]).split("-"),n=a.length,r=oy(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=bc(a.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&gE(a,r)>=n-1)break;n--}t++}return cs}function vE(e){return e.match("^[^/\\\\]*$")!=null}function bc(e){var t=null,n;if(ot[e]===void 0&&typeof Ol<"u"&&Ol&&Ol.exports&&vE(e))try{t=cs._abbr,n=require,n("./locale/"+e),mi(t)}catch{ot[e]=null}return ot[e]}function mi(e,t){var n;return e&&(an(t)?n=Wr(e):n=$p(e,t),n?cs=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),cs._abbr}function $p(e,t){if(t!==null){var n,r=hw;if(t.abbr=e,ot[e]!=null)Kx("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=ot[e]._config;else if(t.parentLocale!=null)if(ot[t.parentLocale]!=null)r=ot[t.parentLocale]._config;else if(n=bc(t.parentLocale),n!=null)r=n._config;else return So[t.parentLocale]||(So[t.parentLocale]=[]),So[t.parentLocale].push({name:e,config:t}),null;return ot[e]=new Mp(nh(r,t)),So[e]&&So[e].forEach(function(i){$p(i.name,i.config)}),mi(e),ot[e]}else return delete ot[e],null}function xE(e,t){if(t!=null){var n,r,i=hw;ot[e]!=null&&ot[e].parentLocale!=null?ot[e].set(nh(ot[e]._config,t)):(r=bc(e),r!=null&&(i=r._config),t=nh(i,t),r==null&&(t.abbr=e),n=new Mp(t),n.parentLocale=ot[e],ot[e]=n),mi(e)}else ot[e]!=null&&(ot[e].parentLocale!=null?(ot[e]=ot[e].parentLocale,e===mi()&&mi(e)):ot[e]!=null&&delete ot[e]);return ot[e]}function Wr(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return cs;if(!Kn(e)){if(t=bc(e),t)return t;e=[e]}return yE(e)}function wE(){return rh(ot)}function Up(e){var t,n=e._a;return n&&De(e).overflow===-2&&(t=n[Or]<0||n[Or]>11?Or:n[lr]<1||n[lr]>Sc(n[Vt],n[Or])?lr:n[Dt]<0||n[Dt]>24||n[Dt]===24&&(n[Bn]!==0||n[Pr]!==0||n[zi]!==0)?Dt:n[Bn]<0||n[Bn]>59?Bn:n[Pr]<0||n[Pr]>59?Pr:n[zi]<0||n[zi]>999?zi:-1,De(e)._overflowDayOfYear&&(t<Vt||t>lr)&&(t=lr),De(e)._overflowWeeks&&t===-1&&(t=DD),De(e)._overflowWeekday&&t===-1&&(t=ED),De(e).overflow=t),e}var _E=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,kE=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,SE=/Z|[+-]\d\d(?::?\d\d)?/,sl=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Pd=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],bE=/^\/?Date\((-?\d+)/i,CE=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,DE={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function pw(e){var t,n,r=e._i,i=_E.exec(r)||kE.exec(r),a,o,s,l,u=sl.length,c=Pd.length;if(i){for(De(e).iso=!0,t=0,n=u;t<n;t++)if(sl[t][1].exec(i[1])){o=sl[t][0],a=sl[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=c;t<n;t++)if(Pd[t][1].exec(i[3])){s=(i[2]||" ")+Pd[t][0];break}if(s==null){e._isValid=!1;return}}if(!a&&s!=null){e._isValid=!1;return}if(i[4])if(SE.exec(i[4]))l="Z";else{e._isValid=!1;return}e._f=o+(s||"")+(l||""),Vp(e)}else e._isValid=!1}function EE(e,t,n,r,i,a){var o=[TE(e),rw.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return a&&o.push(parseInt(a,10)),o}function TE(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function OE(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function PE(e,t,n){if(e){var r=cw.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return De(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function AE(e,t,n){if(e)return DE[e];if(t)return 0;var r=parseInt(n,10),i=r%100,a=(r-i)/100;return a*60+i}function mw(e){var t=CE.exec(OE(e._i)),n;if(t){if(n=EE(t[4],t[3],t[2],t[5],t[6],t[7]),!PE(t[1],n,e))return;e._a=n,e._tzm=AE(t[8],t[9],t[10]),e._d=ls.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),De(e).rfc2822=!0}else e._isValid=!1}function ME(e){var t=bE.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(pw(e),e._isValid===!1)delete e._isValid;else return;if(mw(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:K.createFromInputFallback(e)}K.createFromInputFallback=In("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function da(e,t,n){return e??t??n}function IE(e){var t=new Date(K.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Bp(e){var t,n,r=[],i,a,o;if(!e._d){for(i=IE(e),e._w&&e._a[lr]==null&&e._a[Or]==null&&RE(e),e._dayOfYear!=null&&(o=da(e._a[Vt],i[Vt]),(e._dayOfYear>Uo(o)||e._dayOfYear===0)&&(De(e)._overflowDayOfYear=!0),n=ls(o,0,e._dayOfYear),e._a[Or]=n.getUTCMonth(),e._a[lr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[Dt]===24&&e._a[Bn]===0&&e._a[Pr]===0&&e._a[zi]===0&&(e._nextDay=!0,e._a[Dt]=0),e._d=(e._useUTC?ls:$D).apply(null,r),a=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Dt]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==a&&(De(e).weekdayMismatch=!0)}}function RE(e){var t,n,r,i,a,o,s,l,u;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(a=1,o=4,n=da(t.GG,e._a[Vt],us(it(),1,4).year),r=da(t.W,1),i=da(t.E,1),(i<1||i>7)&&(l=!0)):(a=e._locale._week.dow,o=e._locale._week.doy,u=us(it(),a,o),n=da(t.gg,e._a[Vt],u.year),r=da(t.w,u.week),t.d!=null?(i=t.d,(i<0||i>6)&&(l=!0)):t.e!=null?(i=t.e+a,(t.e<0||t.e>6)&&(l=!0)):i=a),r<1||r>Rr(n,a,o)?De(e)._overflowWeeks=!0:l!=null?De(e)._overflowWeekday=!0:(s=uw(n,r,i,a,o),e._a[Vt]=s.year,e._dayOfYear=s.dayOfYear)}K.ISO_8601=function(){};K.RFC_2822=function(){};function Vp(e){if(e._f===K.ISO_8601){pw(e);return}if(e._f===K.RFC_2822){mw(e);return}e._a=[],De(e).empty=!0;var t=""+e._i,n,r,i,a,o,s=t.length,l=0,u,c;for(i=qx(e._f,e._locale).match(Ip)||[],c=i.length,n=0;n<c;n++)a=i[n],r=(t.match(SD(a,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&De(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),l+=r.length),ja[a]?(r?De(e).empty=!1:De(e).unusedTokens.push(a),CD(a,r,e)):e._strict&&!r&&De(e).unusedTokens.push(a);De(e).charsLeftOver=s-l,t.length>0&&De(e).unusedInput.push(t),e._a[Dt]<=12&&De(e).bigHour===!0&&e._a[Dt]>0&&(De(e).bigHour=void 0),De(e).parsedDateParts=e._a.slice(0),De(e).meridiem=e._meridiem,e._a[Dt]=NE(e._locale,e._a[Dt],e._meridiem),u=De(e).era,u!==null&&(e._a[Vt]=e._locale.erasConvertYear(u,e._a[Vt])),Bp(e),Up(e)}function NE(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function zE(e){var t,n,r,i,a,o,s=!1,l=e._f.length;if(l===0){De(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<l;i++)a=0,o=!1,t=Ap({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Vp(t),Pp(t)&&(o=!0),a+=De(t).charsLeftOver,a+=De(t).unusedTokens.length*10,De(t).score=a,s?a<r&&(r=a,n=t):(r==null||a<r||o)&&(r=a,n=t,o&&(s=!0));ii(e,n||t)}function FE(e){if(!e._d){var t=Rp(e._i),n=t.day===void 0?t.date:t.day;e._a=Zx([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),Bp(e)}}function LE(e){var t=new Is(Up(gw(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function gw(e){var t=e._i,n=e._f;return e._locale=e._locale||Wr(e._l),t===null||n===void 0&&t===""?gc({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),qn(t)?new Is(Up(t)):(Ms(t)?e._d=t:Kn(n)?zE(e):n?Vp(e):jE(e),Pp(e)||(e._d=null),e))}function jE(e){var t=e._i;an(t)?e._d=new Date(K.now()):Ms(t)?e._d=new Date(t.valueOf()):typeof t=="string"?ME(e):Kn(t)?(e._a=Zx(t.slice(0),function(n){return parseInt(n,10)}),Bp(e)):ji(t)?FE(e):Ur(t)?e._d=new Date(t):K.createFromInputFallback(e)}function yw(e,t,n,r,i){var a={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(ji(e)&&Op(e)||Kn(e)&&e.length===0)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=r,LE(a)}function it(e,t,n,r){return yw(e,t,n,r,!1)}var $E=In("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=it.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:gc()}),UE=In("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=it.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:gc()});function vw(e,t){var n,r;if(t.length===1&&Kn(t[0])&&(t=t[0]),!t.length)return it();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function BE(){var e=[].slice.call(arguments,0);return vw("isBefore",e)}function VE(){var e=[].slice.call(arguments,0);return vw("isAfter",e)}var YE=function(){return Date.now?Date.now():+new Date},bo=["year","quarter","month","week","day","hour","minute","second","millisecond"];function WE(e){var t,n=!1,r,i=bo.length;for(t in e)if(Ue(e,t)&&!(vt.call(bo,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[bo[r]]){if(n)return!1;parseFloat(e[bo[r]])!==Ie(e[bo[r]])&&(n=!0)}return!0}function HE(){return this._isValid}function ZE(){return Qn(NaN)}function Cc(e){var t=Rp(e),n=t.year||0,r=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,o=t.day||0,s=t.hour||0,l=t.minute||0,u=t.second||0,c=t.millisecond||0;this._isValid=WE(t),this._milliseconds=+c+u*1e3+l*6e4+s*1e3*60*60,this._days=+o+a*7,this._months=+i+r*3+n*12,this._data={},this._locale=Wr(),this._bubble()}function Dl(e){return e instanceof Cc}function ah(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function GE(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),a=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&Ie(e[o])!==Ie(t[o]))&&a++;return a+i}function xw(e,t){fe(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+hr(~~(n/60),2)+t+hr(~~n%60,2)})}xw("Z",":");xw("ZZ","");re("Z",kc);re("ZZ",kc);qe(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Yp(kc,e)});var KE=/([\+\-]|\d\d)/gi;function Yp(e,t){var n=(t||"").match(e),r,i,a;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(KE)||["-",0,0],a=+(i[1]*60)+Ie(i[2]),a===0?0:i[0]==="+"?a:-a)}function Wp(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(qn(e)||Ms(e)?e.valueOf():it(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),K.updateOffset(n,!1),n):it(e).local()}function oh(e){return-Math.round(e._d.getTimezoneOffset())}K.updateOffset=function(){};function qE(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Yp(kc,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=oh(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?kw(this,Qn(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,K.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:oh(this)}function XE(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function QE(e){return this.utcOffset(0,e)}function JE(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(oh(this),"m")),this}function eT(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Yp(_D,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function tT(e){return this.isValid()?(e=e?it(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function nT(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function rT(){if(!an(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Ap(e,this),e=gw(e),e._a?(t=e._isUTC?gr(e._a):it(e._a),this._isDSTShifted=this.isValid()&&GE(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function iT(){return this.isValid()?!this._isUTC:!1}function aT(){return this.isValid()?this._isUTC:!1}function ww(){return this.isValid()?this._isUTC&&this._offset===0:!1}var oT=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,sT=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Qn(e,t){var n=e,r=null,i,a,o;return Dl(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:Ur(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=oT.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:Ie(r[lr])*i,h:Ie(r[Dt])*i,m:Ie(r[Bn])*i,s:Ie(r[Pr])*i,ms:Ie(ah(r[zi]*1e3))*i}):(r=sT.exec(e))?(i=r[1]==="-"?-1:1,n={y:Ci(r[2],i),M:Ci(r[3],i),w:Ci(r[4],i),d:Ci(r[5],i),h:Ci(r[6],i),m:Ci(r[7],i),s:Ci(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=lT(it(n.from),it(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),a=new Cc(n),Dl(e)&&Ue(e,"_locale")&&(a._locale=e._locale),Dl(e)&&Ue(e,"_isValid")&&(a._isValid=e._isValid),a}Qn.fn=Cc.prototype;Qn.invalid=ZE;function Ci(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function sy(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function lT(e,t){var n;return e.isValid()&&t.isValid()?(t=Wp(t,e),e.isBefore(t)?n=sy(e,t):(n=sy(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function _w(e,t){return function(n,r){var i,a;return r!==null&&!isNaN(+r)&&(Kx(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=r,r=a),i=Qn(n,r),kw(this,i,e),this}}function kw(e,t,n,r){var i=t._milliseconds,a=ah(t._days),o=ah(t._months);e.isValid()&&(r=r??!0,o&&aw(e,mu(e,"Month")+o*n),a&&Qx(e,"Date",mu(e,"Date")+a*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&K.updateOffset(e,a||o))}var uT=_w(1,"add"),cT=_w(-1,"subtract");function Sw(e){return typeof e=="string"||e instanceof String}function dT(e){return qn(e)||Ms(e)||Sw(e)||Ur(e)||hT(e)||fT(e)||e===null||e===void 0}function fT(e){var t=ji(e)&&!Op(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,a,o=r.length;for(i=0;i<o;i+=1)a=r[i],n=n||Ue(e,a);return t&&n}function hT(e){var t=Kn(e),n=!1;return t&&(n=e.filter(function(r){return!Ur(r)&&Sw(e)}).length===0),t&&n}function pT(e){var t=ji(e)&&!Op(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,a;for(i=0;i<r.length;i+=1)a=r[i],n=n||Ue(e,a);return t&&n}function mT(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function gT(e,t){arguments.length===1&&(arguments[0]?dT(arguments[0])?(e=arguments[0],t=void 0):pT(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||it(),r=Wp(n,this).startOf("day"),i=K.calendarFormat(this,r)||"sameElse",a=t&&(yr(t[i])?t[i].call(this,n):t[i]);return this.format(a||this.localeData().calendar(i,this,it(n)))}function yT(){return new Is(this)}function vT(e,t){var n=qn(e)?e:it(e);return this.isValid()&&n.isValid()?(t=Rn(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function xT(e,t){var n=qn(e)?e:it(e);return this.isValid()&&n.isValid()?(t=Rn(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function wT(e,t,n,r){var i=qn(e)?e:it(e),a=qn(t)?t:it(t);return this.isValid()&&i.isValid()&&a.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(a,n):!this.isAfter(a,n))):!1}function _T(e,t){var n=qn(e)?e:it(e),r;return this.isValid()&&n.isValid()?(t=Rn(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function kT(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ST(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function bT(e,t,n){var r,i,a;if(!this.isValid())return NaN;if(r=Wp(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=Rn(t),t){case"year":a=El(this,r)/12;break;case"month":a=El(this,r);break;case"quarter":a=El(this,r)/3;break;case"second":a=(this-r)/1e3;break;case"minute":a=(this-r)/6e4;break;case"hour":a=(this-r)/36e5;break;case"day":a=(this-r-i)/864e5;break;case"week":a=(this-r-i)/6048e5;break;default:a=this-r}return n?a:Dn(a)}function El(e,t){if(e.date()<t.date())return-El(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,a;return t-r<0?(i=e.clone().add(n-1,"months"),a=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),a=(t-r)/(i-r)),-(n+a)||0}K.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";K.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function CT(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function DT(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Cl(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):yr(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Cl(n,"Z")):Cl(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function ET(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,a;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",a=t+'[")]',this.format(n+r+i+a)}function TT(e){e||(e=this.isUtc()?K.defaultFormatUtc:K.defaultFormat);var t=Cl(this,e);return this.localeData().postformat(t)}function OT(e,t){return this.isValid()&&(qn(e)&&e.isValid()||it(e).isValid())?Qn({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function PT(e){return this.from(it(),e)}function AT(e,t){return this.isValid()&&(qn(e)&&e.isValid()||it(e).isValid())?Qn({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function MT(e){return this.to(it(),e)}function bw(e){var t;return e===void 0?this._locale._abbr:(t=Wr(e),t!=null&&(this._locale=t),this)}var Cw=In("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Dw(){return this._locale}var vu=1e3,$a=60*vu,xu=60*$a,Ew=(365*400+97)*24*xu;function Ua(e,t){return(e%t+t)%t}function Tw(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Ew:new Date(e,t,n).valueOf()}function Ow(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Ew:Date.UTC(e,t,n)}function IT(e){var t,n;if(e=Rn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Ow:Tw,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Ua(t+(this._isUTC?0:this.utcOffset()*$a),xu);break;case"minute":t=this._d.valueOf(),t-=Ua(t,$a);break;case"second":t=this._d.valueOf(),t-=Ua(t,vu);break}return this._d.setTime(t),K.updateOffset(this,!0),this}function RT(e){var t,n;if(e=Rn(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Ow:Tw,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=xu-Ua(t+(this._isUTC?0:this.utcOffset()*$a),xu)-1;break;case"minute":t=this._d.valueOf(),t+=$a-Ua(t,$a)-1;break;case"second":t=this._d.valueOf(),t+=vu-Ua(t,vu)-1;break}return this._d.setTime(t),K.updateOffset(this,!0),this}function NT(){return this._d.valueOf()-(this._offset||0)*6e4}function zT(){return Math.floor(this.valueOf()/1e3)}function FT(){return new Date(this.valueOf())}function LT(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function jT(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function $T(){return this.isValid()?this.toISOString():null}function UT(){return Pp(this)}function BT(){return ii({},De(this))}function VT(){return De(this).overflow}function YT(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}fe("N",0,0,"eraAbbr");fe("NN",0,0,"eraAbbr");fe("NNN",0,0,"eraAbbr");fe("NNNN",0,0,"eraName");fe("NNNNN",0,0,"eraNarrow");fe("y",["y",1],"yo","eraYear");fe("y",["yy",2],0,"eraYear");fe("y",["yyy",3],0,"eraYear");fe("y",["yyyy",4],0,"eraYear");re("N",Hp);re("NN",Hp);re("NNN",Hp);re("NNNN",tO);re("NNNNN",nO);qe(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?De(n).era=i:De(n).invalidEra=e});re("y",lo);re("yy",lo);re("yyy",lo);re("yyyy",lo);re("yo",rO);qe(["y","yy","yyy","yyyy"],Vt);qe(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[Vt]=n._locale.eraYearOrdinalParse(e,i):t[Vt]=parseInt(e,10)});function WT(e,t){var n,r,i,a=this._eras||Wr("en")._eras;for(n=0,r=a.length;n<r;++n){switch(typeof a[n].since){case"string":i=K(a[n].since).startOf("day"),a[n].since=i.valueOf();break}switch(typeof a[n].until){case"undefined":a[n].until=1/0;break;case"string":i=K(a[n].until).startOf("day").valueOf(),a[n].until=i.valueOf();break}}return a}function HT(e,t,n){var r,i,a=this.eras(),o,s,l;for(e=e.toUpperCase(),r=0,i=a.length;r<i;++r)if(o=a[r].name.toUpperCase(),s=a[r].abbr.toUpperCase(),l=a[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(s===e)return a[r];break;case"NNNN":if(o===e)return a[r];break;case"NNNNN":if(l===e)return a[r];break}else if([o,s,l].indexOf(e)>=0)return a[r]}function ZT(e,t){var n=e.since<=e.until?1:-1;return t===void 0?K(e.since).year():K(e.since).year()+(t-e.offset)*n}function GT(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function KT(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function qT(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function XT(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-K(i[e].since).year())*n+i[e].offset;return this.year()}function QT(e){return Ue(this,"_erasNameRegex")||Zp.call(this),e?this._erasNameRegex:this._erasRegex}function JT(e){return Ue(this,"_erasAbbrRegex")||Zp.call(this),e?this._erasAbbrRegex:this._erasRegex}function eO(e){return Ue(this,"_erasNarrowRegex")||Zp.call(this),e?this._erasNarrowRegex:this._erasRegex}function Hp(e,t){return t.erasAbbrRegex(e)}function tO(e,t){return t.erasNameRegex(e)}function nO(e,t){return t.erasNarrowRegex(e)}function rO(e,t){return t._eraYearOrdinalRegex||lo}function Zp(){var e=[],t=[],n=[],r=[],i,a,o=this.eras();for(i=0,a=o.length;i<a;++i)t.push(pn(o[i].name)),e.push(pn(o[i].abbr)),n.push(pn(o[i].narrow)),r.push(pn(o[i].name)),r.push(pn(o[i].abbr)),r.push(pn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}fe(0,["gg",2],0,function(){return this.weekYear()%100});fe(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Dc(e,t){fe(0,[e,e.length],0,t)}Dc("gggg","weekYear");Dc("ggggg","weekYear");Dc("GGGG","isoWeekYear");Dc("GGGGG","isoWeekYear");Ht("weekYear","gg");Ht("isoWeekYear","GG");Zt("weekYear",1);Zt("isoWeekYear",1);re("G",_c);re("g",_c);re("GG",at,Sn);re("gg",at,Sn);re("GGGG",zp,Np);re("gggg",zp,Np);re("GGGGG",wc,vc);re("ggggg",wc,vc);Ns(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Ie(e)});Ns(["gg","GG"],function(e,t,n,r){t[r]=K.parseTwoDigitYear(e)});function iO(e){return Pw.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function aO(e){return Pw.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function oO(){return Rr(this.year(),1,4)}function sO(){return Rr(this.isoWeekYear(),1,4)}function lO(){var e=this.localeData()._week;return Rr(this.year(),e.dow,e.doy)}function uO(){var e=this.localeData()._week;return Rr(this.weekYear(),e.dow,e.doy)}function Pw(e,t,n,r,i){var a;return e==null?us(this,r,i).year:(a=Rr(e,r,i),t>a&&(t=a),cO.call(this,e,t,n,r,i))}function cO(e,t,n,r,i){var a=uw(e,t,n,r,i),o=ls(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}fe("Q",0,"Qo","quarter");Ht("quarter","Q");Zt("quarter",7);re("Q",Jx);qe("Q",function(e,t){t[Or]=(Ie(e)-1)*3});function dO(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}fe("D",["DD",2],"Do","date");Ht("date","D");Zt("date",9);re("D",at);re("DD",at,Sn);re("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});qe(["D","DD"],lr);qe("Do",function(e,t){t[lr]=Ie(e.match(at)[0])});var Aw=so("Date",!0);fe("DDD",["DDDD",3],"DDDo","dayOfYear");Ht("dayOfYear","DDD");Zt("dayOfYear",4);re("DDD",xc);re("DDDD",ew);qe(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Ie(e)});function fO(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}fe("m",["mm",2],0,"minute");Ht("minute","m");Zt("minute",14);re("m",at);re("mm",at,Sn);qe(["m","mm"],Bn);var hO=so("Minutes",!1);fe("s",["ss",2],0,"second");Ht("second","s");Zt("second",15);re("s",at);re("ss",at,Sn);qe(["s","ss"],Pr);var pO=so("Seconds",!1);fe("S",0,0,function(){return~~(this.millisecond()/100)});fe(0,["SS",2],0,function(){return~~(this.millisecond()/10)});fe(0,["SSS",3],0,"millisecond");fe(0,["SSSS",4],0,function(){return this.millisecond()*10});fe(0,["SSSSS",5],0,function(){return this.millisecond()*100});fe(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});fe(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});fe(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});fe(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});Ht("millisecond","ms");Zt("millisecond",16);re("S",xc,Jx);re("SS",xc,Sn);re("SSS",xc,ew);var ai,Mw;for(ai="SSSS";ai.length<=9;ai+="S")re(ai,lo);function mO(e,t){t[zi]=Ie(("0."+e)*1e3)}for(ai="S";ai.length<=9;ai+="S")qe(ai,mO);Mw=so("Milliseconds",!1);fe("z",0,0,"zoneAbbr");fe("zz",0,0,"zoneName");function gO(){return this._isUTC?"UTC":""}function yO(){return this._isUTC?"Coordinated Universal Time":""}var B=Is.prototype;B.add=uT;B.calendar=gT;B.clone=yT;B.diff=bT;B.endOf=RT;B.format=TT;B.from=OT;B.fromNow=PT;B.to=AT;B.toNow=MT;B.get=xD;B.invalidAt=VT;B.isAfter=vT;B.isBefore=xT;B.isBetween=wT;B.isSame=_T;B.isSameOrAfter=kT;B.isSameOrBefore=ST;B.isValid=UT;B.lang=Cw;B.locale=bw;B.localeData=Dw;B.max=UE;B.min=$E;B.parsingFlags=BT;B.set=wD;B.startOf=IT;B.subtract=cT;B.toArray=LT;B.toObject=jT;B.toDate=FT;B.toISOString=DT;B.inspect=ET;typeof Symbol<"u"&&Symbol.for!=null&&(B[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});B.toJSON=$T;B.toString=CT;B.unix=zT;B.valueOf=NT;B.creationData=YT;B.eraName=GT;B.eraNarrow=KT;B.eraAbbr=qT;B.eraYear=XT;B.year=lw;B.isLeapYear=jD;B.weekYear=iO;B.isoWeekYear=aO;B.quarter=B.quarters=dO;B.month=ow;B.daysInMonth=zD;B.week=B.weeks=WD;B.isoWeek=B.isoWeeks=HD;B.weeksInYear=lO;B.weeksInWeekYear=uO;B.isoWeeksInYear=oO;B.isoWeeksInISOWeekYear=sO;B.date=Aw;B.day=B.days=aE;B.weekday=oE;B.isoWeekday=sE;B.dayOfYear=fO;B.hour=B.hours=pE;B.minute=B.minutes=hO;B.second=B.seconds=pO;B.millisecond=B.milliseconds=Mw;B.utcOffset=qE;B.utc=QE;B.local=JE;B.parseZone=eT;B.hasAlignedHourOffset=tT;B.isDST=nT;B.isLocal=iT;B.isUtcOffset=aT;B.isUtc=ww;B.isUTC=ww;B.zoneAbbr=gO;B.zoneName=yO;B.dates=In("dates accessor is deprecated. Use date instead.",Aw);B.months=In("months accessor is deprecated. Use month instead",ow);B.years=In("years accessor is deprecated. Use year instead",lw);B.zone=In("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",XE);B.isDSTShifted=In("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",rT);function vO(e){return it(e*1e3)}function xO(){return it.apply(null,arguments).parseZone()}function Iw(e){return e}var Be=Mp.prototype;Be.calendar=aD;Be.longDateFormat=uD;Be.invalidDate=dD;Be.ordinal=pD;Be.preparse=Iw;Be.postformat=Iw;Be.relativeTime=gD;Be.pastFuture=yD;Be.set=rD;Be.eras=WT;Be.erasParse=HT;Be.erasConvertYear=ZT;Be.erasAbbrRegex=JT;Be.erasNameRegex=QT;Be.erasNarrowRegex=eO;Be.months=MD;Be.monthsShort=ID;Be.monthsParse=ND;Be.monthsRegex=LD;Be.monthsShortRegex=FD;Be.week=UD;Be.firstDayOfYear=YD;Be.firstDayOfWeek=VD;Be.weekdays=eE;Be.weekdaysMin=nE;Be.weekdaysShort=tE;Be.weekdaysParse=iE;Be.weekdaysRegex=lE;Be.weekdaysShortRegex=uE;Be.weekdaysMinRegex=cE;Be.isPM=fE;Be.meridiem=mE;function wu(e,t,n,r){var i=Wr(),a=gr().set(r,t);return i[n](a,e)}function Rw(e,t,n){if(Ur(e)&&(t=e,e=void 0),e=e||"",t!=null)return wu(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=wu(e,r,n,"month");return i}function Gp(e,t,n,r){typeof e=="boolean"?(Ur(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,Ur(t)&&(n=t,t=void 0),t=t||"");var i=Wr(),a=e?i._week.dow:0,o,s=[];if(n!=null)return wu(t,(n+a)%7,r,"day");for(o=0;o<7;o++)s[o]=wu(t,(o+a)%7,r,"day");return s}function wO(e,t){return Rw(e,t,"months")}function _O(e,t){return Rw(e,t,"monthsShort")}function kO(e,t,n){return Gp(e,t,n,"weekdays")}function SO(e,t,n){return Gp(e,t,n,"weekdaysShort")}function bO(e,t,n){return Gp(e,t,n,"weekdaysMin")}mi("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=Ie(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});K.lang=In("moment.lang is deprecated. Use moment.locale instead.",mi);K.langData=In("moment.langData is deprecated. Use moment.localeData instead.",Wr);var kr=Math.abs;function CO(){var e=this._data;return this._milliseconds=kr(this._milliseconds),this._days=kr(this._days),this._months=kr(this._months),e.milliseconds=kr(e.milliseconds),e.seconds=kr(e.seconds),e.minutes=kr(e.minutes),e.hours=kr(e.hours),e.months=kr(e.months),e.years=kr(e.years),this}function Nw(e,t,n,r){var i=Qn(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function DO(e,t){return Nw(this,e,t,1)}function EO(e,t){return Nw(this,e,t,-1)}function ly(e){return e<0?Math.floor(e):Math.ceil(e)}function TO(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,a,o,s,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=ly(sh(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=Dn(e/1e3),r.seconds=i%60,a=Dn(i/60),r.minutes=a%60,o=Dn(a/60),r.hours=o%24,t+=Dn(o/24),l=Dn(zw(t)),n+=l,t-=ly(sh(l)),s=Dn(n/12),n%=12,r.days=t,r.months=n,r.years=s,this}function zw(e){return e*4800/146097}function sh(e){return e*146097/4800}function OO(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=Rn(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+zw(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(sh(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function PO(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+Ie(this._months/12)*31536e6:NaN}function Hr(e){return function(){return this.as(e)}}var AO=Hr("ms"),MO=Hr("s"),IO=Hr("m"),RO=Hr("h"),NO=Hr("d"),zO=Hr("w"),FO=Hr("M"),LO=Hr("Q"),jO=Hr("y");function $O(){return Qn(this)}function UO(e){return e=Rn(e),this.isValid()?this[e+"s"]():NaN}function ra(e){return function(){return this.isValid()?this._data[e]:NaN}}var BO=ra("milliseconds"),VO=ra("seconds"),YO=ra("minutes"),WO=ra("hours"),HO=ra("days"),ZO=ra("months"),GO=ra("years");function KO(){return Dn(this.days()/7)}var Cr=Math.round,Pa={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function qO(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function XO(e,t,n,r){var i=Qn(e).abs(),a=Cr(i.as("s")),o=Cr(i.as("m")),s=Cr(i.as("h")),l=Cr(i.as("d")),u=Cr(i.as("M")),c=Cr(i.as("w")),d=Cr(i.as("y")),f=a<=n.ss&&["s",a]||a<n.s&&["ss",a]||o<=1&&["m"]||o<n.m&&["mm",o]||s<=1&&["h"]||s<n.h&&["hh",s]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(f=f||c<=1&&["w"]||c<n.w&&["ww",c]),f=f||u<=1&&["M"]||u<n.M&&["MM",u]||d<=1&&["y"]||["yy",d],f[2]=t,f[3]=+e>0,f[4]=r,qO.apply(null,f)}function QO(e){return e===void 0?Cr:typeof e=="function"?(Cr=e,!0):!1}function JO(e,t){return Pa[e]===void 0?!1:t===void 0?Pa[e]:(Pa[e]=t,e==="s"&&(Pa.ss=t-1),!0)}function eP(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Pa,i,a;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Pa,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),a=XO(this,!n,r,i),n&&(a=i.pastFuture(+this,a)),i.postformat(a)}var Ad=Math.abs;function ua(e){return(e>0)-(e<0)||+e}function Ec(){if(!this.isValid())return this.localeData().invalidDate();var e=Ad(this._milliseconds)/1e3,t=Ad(this._days),n=Ad(this._months),r,i,a,o,s=this.asSeconds(),l,u,c,d;return s?(r=Dn(e/60),i=Dn(r/60),e%=60,r%=60,a=Dn(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=s<0?"-":"",u=ua(this._months)!==ua(s)?"-":"",c=ua(this._days)!==ua(s)?"-":"",d=ua(this._milliseconds)!==ua(s)?"-":"",l+"P"+(a?u+a+"Y":"")+(n?u+n+"M":"")+(t?c+t+"D":"")+(i||r||e?"T":"")+(i?d+i+"H":"")+(r?d+r+"M":"")+(e?d+o+"S":"")):"P0D"}var Fe=Cc.prototype;Fe.isValid=HE;Fe.abs=CO;Fe.add=DO;Fe.subtract=EO;Fe.as=OO;Fe.asMilliseconds=AO;Fe.asSeconds=MO;Fe.asMinutes=IO;Fe.asHours=RO;Fe.asDays=NO;Fe.asWeeks=zO;Fe.asMonths=FO;Fe.asQuarters=LO;Fe.asYears=jO;Fe.valueOf=PO;Fe._bubble=TO;Fe.clone=$O;Fe.get=UO;Fe.milliseconds=BO;Fe.seconds=VO;Fe.minutes=YO;Fe.hours=WO;Fe.days=HO;Fe.weeks=KO;Fe.months=ZO;Fe.years=GO;Fe.humanize=eP;Fe.toISOString=Ec;Fe.toString=Ec;Fe.toJSON=Ec;Fe.locale=bw;Fe.localeData=Dw;Fe.toIsoString=In("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ec);Fe.lang=Cw;fe("X",0,0,"unix");fe("x",0,0,"valueOf");re("x",_c);re("X",kD);qe("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});qe("x",function(e,t,n){n._d=new Date(Ie(e))});//! moment.js
K.version="2.29.4";tD(it);K.fn=B;K.min=BE;K.max=VE;K.now=YE;K.utc=gr;K.unix=vO;K.months=wO;K.isDate=Ms;K.locale=mi;K.invalid=gc;K.duration=Qn;K.isMoment=qn;K.weekdays=kO;K.parseZone=xO;K.localeData=Wr;K.isDuration=Dl;K.monthsShort=_O;K.weekdaysMin=bO;K.defineLocale=$p;K.updateLocale=xE;K.locales=wE;K.weekdaysShort=SO;K.normalizeUnits=Rn;K.relativeTimeRounding=QO;K.relativeTimeThreshold=JO;K.calendarFormat=mT;K.prototype=B;K.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const tP=k.div`
    background: ${e=>e.theme.datePickerBg};
    border: ${e=>e.theme.datePickerBorder};
    &:hover{
        border: ${e=>e.theme.datePickerBorderHover};
    }
    &:focus{
        outline: ${e=>e.theme.datePickerBorderHover};
    }
    border-radius: 8px;
    width:100%;
    position:relative;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`,nP=k.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    cursor:pointer;
    border-radius: 8px;
    padding:5px 20px;
    &:hover{
        border: ${e=>e.theme.datePickerBorderHover};
    }
    &:focus{
        outline: ${e=>e.theme.datePickerBorderHover};
    }
`,rP=k.div`
    position:absolute;
    border-radius:8px;
    padding:20px;
    background: ${e=>e.theme.datePickerBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index:5;
    margin-top:10px;
    width:89%;
`,uy=k.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    p{
        flex: 1 0 0;
    }
    SVG{
        transition:0.2s;
        cursor:pointer;
        &:hover, :focus{
            transform: scale(2);
            transition: 0.2s;
            outline: none;
        }
    }
`,iP=k.div`
    margin: 5px;
`,aP=k.div`
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    p{
        cursor:pointer;
        justify-self:center;
        transition:0.2s;
        &:hover, :focus{
            outline: none;
            color:#7C5DFA;
            transform: scale(1.5);
        }
    }
    .active{
        color:#7C5DFA;
        transform: scale(1.5);
        transition:0.2s;
    }
`;function oP(e){const[t,n]=T.useState(!1),[r,i]=T.useState(new Date().getMonth()),[a,o]=T.useState(new Date().getFullYear()),[s,l]=T.useState(null);new Date().toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"});let u=T.useRef(null);function c(){n(!t)}function d(){r<11?i(S=>S+1):(i(0),o(S=>S+1))}function f(){r>0?i(S=>S-1):(i(11),o(S=>S-1))}function x(S){S.target.id==="day"&&(l(new Date(a,r,S.target.getAttribute("data-day"))),e.onChange(K(new Date(a,r,S.target.getAttribute("data-day"))).format("YYYY-MM-DD")))}T.useEffect(()=>{let S=m=>{var h;(h=u.current)!=null&&h.contains(m.target)||n(!1)};document.addEventListener("mousedown",S)}),T.useEffect(()=>{e.setIsSubmit(!1),l(null)},[e.isSubmit]);const v={datePickerHeaderBg:"#1E2139",datePickerBg:"#1E2139",datePickerBorder:"1px solid #252945",datePickerBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #1E2139",datePickerHeaderBorder:"1px solid #1E2139"},p={datePickerHeaderBg:"FFF",datePickerBg:"#FFF",datePickerBorder:"1px solid #DFE3FA",datePickerBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #DFE3FA",datePickerHeaderBorder:"1px solid #DFE3FA"};return y(Mt,{theme:e.isDarkMode?v:p,children:R(tP,{className:e.error?"error":"",ref:u,children:[R(nP,{tabIndex:0,onClick:c,children:[e.isFormEdit?s===null?y("p",{children:e.invoiceData.createdAt!=null?K(e.invoiceData.createdAt).format("MMM DD YYYY"):"Select a date"}):y("p",{children:K(s).format("MMM DD YYYY")}):s===null?y("p",{children:"Select a date"}):y("p",{children:K(s).format("MMM DD YYYY")}),y(vn,{src:"\\assets\\icon-calendar.svg"})]}),t&&R(rP,{className:e.error?"error":"",children:[R(uy,{children:[y(vn,{src:"\\assets\\icon-arrow-left.svg",onClick:f,tabIndex:0}),y(uy,{children:QC[r]+" "+a}),y(vn,{src:"\\assets\\icon-arrow-right.svg",onClick:d,tabIndex:0})]}),y(iP,{children:y(aP,{children:eD(1,JC(a,r)+1).map(S=>y("p",{onClick:x,id:"day","data-day":S,tabIndex:0,className:(s==null?void 0:s.getTime())===new Date(a,r,S).getTime()?"active":"",children:S},S))})})]})]})})}let ll;const sP=new Uint8Array(16);function lP(){if(!ll&&(ll=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ll))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ll(sP)}const Rt=[];for(let e=0;e<256;++e)Rt.push((e+256).toString(16).slice(1));function uP(e,t=0){return(Rt[e[t+0]]+Rt[e[t+1]]+Rt[e[t+2]]+Rt[e[t+3]]+"-"+Rt[e[t+4]]+Rt[e[t+5]]+"-"+Rt[e[t+6]]+Rt[e[t+7]]+"-"+Rt[e[t+8]]+Rt[e[t+9]]+"-"+Rt[e[t+10]]+Rt[e[t+11]]+Rt[e[t+12]]+Rt[e[t+13]]+Rt[e[t+14]]+Rt[e[t+15]]).toLowerCase()}const cP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),cy={randomUUID:cP};function Fn(e,t,n){if(cy.randomUUID&&!t&&!e)return cy.randomUUID();e=e||{};const r=e.random||(e.rng||lP)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return uP(r)}const dP=k.div`
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    width:100%;
    z-index:2;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`,Fw=k.div`
    display:flex;
    align-items: center;
    background: ${e=>e.theme.dropdownHeaderBg};
    border: ${e=>e.theme.dropdownHeaderBorder};
    &:hover{
        border:${e=>e.theme.dropdownBorderHover}
    }
    &:focus{
        outline:${e=>e.theme.dropdownBorderHover}
    }
    border-radius: 4px;
    padding: 0 20px;
    justify-content: space-between;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
`,fP=k.div`
    display:flex;
    flex-direction: column;
    background: ${e=>e.theme.dropdownBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position:absolute;
    left:0;
    right:0;
    margin-top:10px;
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
`;k.div`
    display:flex;
    align-items: flex-end;
    padding:10px;
`;k.input`
    cursor: pointer;
    margin-right:10px;
    &:checked{
        accent-color:#9277FF;
    }
`;k.label`
    cursor: pointer;
`;const hP=k(vn)`
    ${Fw}:hover & {
        transform: rotate(180deg);
        transition:0.5s;
    }
    transform: rotate(0deg);
    transition:0.5s;
`,pP=k(vn)`

`,mP=k.ul`
    background: transparent;
    box-sizing: border-box;
    font-weight: 500;
    font-size:0.92rem;
    border-radius:10px;
    padding:20px;
    background: ${e=>e.theme.dropdownBg};
`,gP=k.li`
    list-style: none;
    padding:15px 0px;
    border-bottom: ${e=>e.theme.listBorder};
    &:last-of-type{
        border-bottom:none;
    }
    &:hover{
        color: #9277FF;
        cursor: pointer;
    }
    &:focus{
        color:#9277FF;
        outline: none;
    }
`;function yP(e){const[t,n]=T.useState(!1),[r,i]=T.useState("Select The Day"),a=["Net 1 Day","Net 7 Days","Net 14 Days","Net 30 Days"];let o=T.useRef(null);function s(){n(!t)}const l=d=>{d.key==="Enter"&&n(!0)};T.useEffect(()=>{let d=f=>{var x;(x=o.current)!=null&&x.contains(f.target)||n(!1)};document.addEventListener("mousedown",d)}),T.useEffect(()=>{e.setIsSubmit(!1),i("Select The Day")},[e.isSubmit]);const u={dropdownHeaderBg:"#1E2139",dropdownBg:"#252945",dropdownBorder:"1px solid #252945",dropdownBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #1E2139",dropdownHeaderBorder:"1px solid #1E2139"},c={dropdownHeaderBg:"FFF",dropdownBg:"#FFF",dropdownBorder:"1px solid #DFE3FA",dropdownBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #DFE3FA",dropdownHeaderBorder:"1px solid #DFE3FA"};return y(Mt,{theme:e.isDarkMode?u:c,children:R(dP,{className:e.error?"error":"",ref:o,children:[R(Fw,{tabIndex:0,onKeyDown:l,onClick:s,children:[e.isFormEdit?r!="Select The Day"?y(Je,{children:r}):y(Je,{children:e.invoiceData.paymentTerms!=null?"Net "+e.invoiceData.paymentTerms+(e.invoiceData.paymentTerms===1?" Day":" Days"):"Select The Day"}):y(Je,{children:r}),t?y(pP,{src:"\\assets\\icon-arrow-up.svg"}):y(hP,{src:"\\assets\\icon-arrow-down.svg"})]}),t&&y(fP,{className:e.error?"error":"",children:y(mP,{children:a.map(d=>y(gP,{onClick:f=>{n(!1),i(f.target.innerText);const x=f.target.innerText.replace("Net ","").replace(" Day","").replace("s","");e.onChange(Number(x))},tabIndex:0,children:d},Fn()))})})]})})}var $e;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const a={};for(const o of i)a[o]=o;return a},e.getValidEnumValues=i=>{const a=e.objectKeys(i).filter(s=>typeof i[i[s]]!="number"),o={};for(const s of a)o[s]=i[s];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(a){return i[a]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const a=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&a.push(o);return a},e.find=(i,a)=>{for(const o of i)if(a(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,a=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(a)}e.joinValues=r,e.jsonStringifyReplacer=(i,a)=>typeof a=="bigint"?a.toString():a})($e||($e={}));var lh;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(lh||(lh={}));const te=$e.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ei=e=>{switch(typeof e){case"undefined":return te.undefined;case"string":return te.string;case"number":return isNaN(e)?te.nan:te.number;case"boolean":return te.boolean;case"function":return te.function;case"bigint":return te.bigint;case"symbol":return te.symbol;case"object":return Array.isArray(e)?te.array:e===null?te.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?te.promise:typeof Map<"u"&&e instanceof Map?te.map:typeof Set<"u"&&e instanceof Set?te.set:typeof Date<"u"&&e instanceof Date?te.date:te.object;default:return te.unknown}},Y=$e.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),vP=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Hn extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},r={_errors:[]},i=a=>{for(const o of a.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let s=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(s[u]=s[u]||{_errors:[]},s[u]._errors.push(n(o))):s[u]=s[u]||{_errors:[]},s=s[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,$e.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}Hn.create=e=>new Hn(e);const ds=(e,t)=>{let n;switch(e.code){case Y.invalid_type:e.received===te.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case Y.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,$e.jsonStringifyReplacer)}`;break;case Y.unrecognized_keys:n=`Unrecognized key(s) in object: ${$e.joinValues(e.keys,", ")}`;break;case Y.invalid_union:n="Invalid input";break;case Y.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${$e.joinValues(e.options)}`;break;case Y.invalid_enum_value:n=`Invalid enum value. Expected ${$e.joinValues(e.options)}, received '${e.received}'`;break;case Y.invalid_arguments:n="Invalid function arguments";break;case Y.invalid_return_type:n="Invalid function return type";break;case Y.invalid_date:n="Invalid date";break;case Y.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:$e.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case Y.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case Y.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case Y.custom:n="Invalid input";break;case Y.invalid_intersection_types:n="Intersection results could not be merged";break;case Y.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Y.not_finite:n="Number must be finite";break;default:n=t.defaultError,$e.assertNever(e)}return{message:n}};let Lw=ds;function xP(e){Lw=e}function _u(){return Lw}const ku=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};let s="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)s=u(o,{data:t,defaultError:s}).message;return{...i,path:a,message:i.message||s}},wP=[];function ne(e,t){const n=ku({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,_u(),ds].filter(r=>!!r)});e.common.issues.push(n)}class Wt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return be;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return Wt.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:a,value:o}=i;if(a.status==="aborted"||o.status==="aborted")return be;a.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),(typeof o.value<"u"||i.alwaysSet)&&(r[a.value]=o.value)}return{status:t.value,value:r}}}const be=Object.freeze({status:"aborted"}),jw=e=>({status:"dirty",value:e}),Jt=e=>({status:"valid",value:e}),uh=e=>e.status==="aborted",ch=e=>e.status==="dirty",Su=e=>e.status==="valid",bu=e=>typeof Promise<"u"&&e instanceof Promise;var me;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(me||(me={}));class pr{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const dy=(e,t)=>{if(Su(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Hn(e.common.issues);return this._error=n,this._error}}};function Te(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,s)=>o.code!=="invalid_type"?{message:s.defaultError}:typeof s.data>"u"?{message:r??s.defaultError}:{message:n??s.defaultError},description:i}}class Ae{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return ei(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:ei(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Wt,ctx:{common:t.parent.common,data:t.data,parsedType:ei(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(bu(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ei(t)},a=this._parseSync({data:t,path:i.path,parent:i});return dy(i,a)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:ei(t)},i=this._parse({data:t,path:r.path,parent:r}),a=await(bu(i)?i:Promise.resolve(i));return dy(r,a)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,a)=>{const o=t(i),s=()=>a.addIssue({code:Y.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(s(),!1)):o?!0:(s(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new Xn({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Nr.create(this,this._def)}nullable(){return Xi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Zn.create(this,this._def)}promise(){return eo.create(this,this._def)}or(t){return ms.create([this,t],this._def)}and(t){return gs.create(this,t,this._def)}transform(t){return new Xn({...Te(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new _s({...Te(this._def),innerType:this,defaultValue:n,typeName:_e.ZodDefault})}brand(){return new Uw({typeName:_e.ZodBranded,type:this,...Te(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Tu({...Te(this._def),innerType:this,catchValue:n,typeName:_e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return zs.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const _P=/^c[^\s-]{8,}$/i,kP=/^[a-z][a-z0-9]*$/,SP=/[0-9A-HJKMNP-TV-Z]{26}/,bP=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,CP=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,DP=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,EP=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,TP=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,OP=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function PP(e,t){return!!((t==="v4"||!t)&&EP.test(e)||(t==="v6"||!t)&&TP.test(e))}class Vn extends Ae{constructor(){super(...arguments),this._regex=(t,n,r)=>this.refinement(i=>t.test(i),{validation:n,code:Y.invalid_string,...me.errToObj(r)}),this.nonempty=t=>this.min(1,me.errToObj(t)),this.trim=()=>new Vn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Vn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Vn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==te.string){const a=this._getOrReturnCtx(t);return ne(a,{code:Y.invalid_type,expected:te.string,received:a.parsedType}),be}const r=new Wt;let i;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")t.data.length>a.value&&(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const o=t.data.length>a.value,s=t.data.length<a.value;(o||s)&&(i=this._getOrReturnCtx(t,i),o?ne(i,{code:Y.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):s&&ne(i,{code:Y.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")CP.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"email",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")DP.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"emoji",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")bP.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"uuid",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")_P.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"cuid",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")kP.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"cuid2",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")SP.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"ulid",code:Y.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),ne(i,{validation:"url",code:Y.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"regex",code:Y.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?OP(a).test(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="ip"?PP(t.data,a.version)||(i=this._getOrReturnCtx(t,i),ne(i,{validation:"ip",code:Y.invalid_string,message:a.message}),r.dirty()):$e.assertNever(a);return{status:r.value,value:t.data}}_addCheck(t){return new Vn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...me.errToObj(t)})}url(t){return this._addCheck({kind:"url",...me.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...me.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...me.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...me.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...me.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...me.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...me.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...me.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...me.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...me.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...me.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...me.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...me.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...me.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...me.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Vn.create=e=>{var t;return new Vn({checks:[],typeName:_e.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Te(e)})};function AP(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,a=parseInt(e.toFixed(i).replace(".","")),o=parseInt(t.toFixed(i).replace(".",""));return a%o/Math.pow(10,i)}class vi extends Ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==te.number){const a=this._getOrReturnCtx(t);return ne(a,{code:Y.invalid_type,expected:te.number,received:a.parsedType}),be}let r;const i=new Wt;for(const a of this._def.checks)a.kind==="int"?$e.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.invalid_type,expected:"integer",received:"float",message:a.message}),i.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),i.dirty()):a.kind==="multipleOf"?AP(t.data,a.value)!==0&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.not_finite,message:a.message}),i.dirty()):$e.assertNever(a);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,r,i){return new vi({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:me.toString(i)}]})}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:me.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:me.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:me.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:me.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&$e.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}vi.create=e=>new vi({checks:[],typeName:_e.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Te(e)});class xi extends Ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==te.bigint){const a=this._getOrReturnCtx(t);return ne(a,{code:Y.invalid_type,expected:te.bigint,received:a.parsedType}),be}let r;const i=new Wt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),i.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),ne(r,{code:Y.not_multiple_of,multipleOf:a.value,message:a.message}),i.dirty()):$e.assertNever(a);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,r,i){return new xi({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:me.toString(i)}]})}_addCheck(t){return new xi({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}xi.create=e=>{var t;return new xi({checks:[],typeName:_e.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Te(e)})};class fs extends Ae{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==te.boolean){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.boolean,received:r.parsedType}),be}return Jt(t.data)}}fs.create=e=>new fs({typeName:_e.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Te(e)});class Ki extends Ae{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==te.date){const a=this._getOrReturnCtx(t);return ne(a,{code:Y.invalid_type,expected:te.date,received:a.parsedType}),be}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ne(a,{code:Y.invalid_date}),be}const r=new Wt;let i;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(i=this._getOrReturnCtx(t,i),ne(i,{code:Y.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):$e.assertNever(a);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Ki({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:me.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:me.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}Ki.create=e=>new Ki({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:_e.ZodDate,...Te(e)});class Cu extends Ae{_parse(t){if(this._getType(t)!==te.symbol){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.symbol,received:r.parsedType}),be}return Jt(t.data)}}Cu.create=e=>new Cu({typeName:_e.ZodSymbol,...Te(e)});class hs extends Ae{_parse(t){if(this._getType(t)!==te.undefined){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.undefined,received:r.parsedType}),be}return Jt(t.data)}}hs.create=e=>new hs({typeName:_e.ZodUndefined,...Te(e)});class ps extends Ae{_parse(t){if(this._getType(t)!==te.null){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.null,received:r.parsedType}),be}return Jt(t.data)}}ps.create=e=>new ps({typeName:_e.ZodNull,...Te(e)});class Ja extends Ae{constructor(){super(...arguments),this._any=!0}_parse(t){return Jt(t.data)}}Ja.create=e=>new Ja({typeName:_e.ZodAny,...Te(e)});class $i extends Ae{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Jt(t.data)}}$i.create=e=>new $i({typeName:_e.ZodUnknown,...Te(e)});class Br extends Ae{_parse(t){const n=this._getOrReturnCtx(t);return ne(n,{code:Y.invalid_type,expected:te.never,received:n.parsedType}),be}}Br.create=e=>new Br({typeName:_e.ZodNever,...Te(e)});class Du extends Ae{_parse(t){if(this._getType(t)!==te.undefined){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.void,received:r.parsedType}),be}return Jt(t.data)}}Du.create=e=>new Du({typeName:_e.ZodVoid,...Te(e)});class Zn extends Ae{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==te.array)return ne(n,{code:Y.invalid_type,expected:te.array,received:n.parsedType}),be;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,s=n.data.length<i.exactLength.value;(o||s)&&(ne(n,{code:o?Y.too_big:Y.too_small,minimum:s?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(ne(n,{code:Y.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(ne(n,{code:Y.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,s)=>i.type._parseAsync(new pr(n,o,n.path,s)))).then(o=>Wt.mergeArray(r,o));const a=[...n.data].map((o,s)=>i.type._parseSync(new pr(n,o,n.path,s)));return Wt.mergeArray(r,a)}get element(){return this._def.type}min(t,n){return new Zn({...this._def,minLength:{value:t,message:me.toString(n)}})}max(t,n){return new Zn({...this._def,maxLength:{value:t,message:me.toString(n)}})}length(t,n){return new Zn({...this._def,exactLength:{value:t,message:me.toString(n)}})}nonempty(t){return this.min(1,t)}}Zn.create=(e,t)=>new Zn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Te(t)});function fa(e){if(e instanceof ut){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Nr.create(fa(r))}return new ut({...e._def,shape:()=>t})}else return e instanceof Zn?new Zn({...e._def,type:fa(e.element)}):e instanceof Nr?Nr.create(fa(e.unwrap())):e instanceof Xi?Xi.create(fa(e.unwrap())):e instanceof mr?mr.create(e.items.map(t=>fa(t))):e}class ut extends Ae{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=$e.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==te.object){const u=this._getOrReturnCtx(t);return ne(u,{code:Y.invalid_type,expected:te.object,received:u.parsedType}),be}const{status:r,ctx:i}=this._processInputParams(t),{shape:a,keys:o}=this._getCached(),s=[];if(!(this._def.catchall instanceof Br&&this._def.unknownKeys==="strip"))for(const u in i.data)o.includes(u)||s.push(u);const l=[];for(const u of o){const c=a[u],d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new pr(i,d,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof Br){const u=this._def.unknownKeys;if(u==="passthrough")for(const c of s)l.push({key:{status:"valid",value:c},value:{status:"valid",value:i.data[c]}});else if(u==="strict")s.length>0&&(ne(i,{code:Y.unrecognized_keys,keys:s}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const c of s){const d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new pr(i,d,i.path,c)),alwaysSet:c in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const c of l){const d=await c.key;u.push({key:d,value:await c.value,alwaysSet:c.alwaysSet})}return u}).then(u=>Wt.mergeObjectSync(r,u)):Wt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return me.errToObj,new ut({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,a,o,s;const l=(o=(a=(i=this._def).errorMap)===null||a===void 0?void 0:a.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(s=me.errToObj(t).message)!==null&&s!==void 0?s:l}:{message:l}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(t){return new ut({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ut({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:_e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ut({...this._def,catchall:t})}pick(t){const n={};return $e.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new ut({...this._def,shape:()=>n})}omit(t){const n={};return $e.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new ut({...this._def,shape:()=>n})}deepPartial(){return fa(this)}partial(t){const n={};return $e.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new ut({...this._def,shape:()=>n})}required(t){const n={};return $e.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof Nr;)a=a._def.innerType;n[r]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return $w($e.objectKeys(this.shape))}}ut.create=(e,t)=>new ut({shape:()=>e,unknownKeys:"strip",catchall:Br.create(),typeName:_e.ZodObject,...Te(t)});ut.strictCreate=(e,t)=>new ut({shape:()=>e,unknownKeys:"strict",catchall:Br.create(),typeName:_e.ZodObject,...Te(t)});ut.lazycreate=(e,t)=>new ut({shape:e,unknownKeys:"strip",catchall:Br.create(),typeName:_e.ZodObject,...Te(t)});class ms extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(a){for(const s of a)if(s.result.status==="valid")return s.result;for(const s of a)if(s.result.status==="dirty")return n.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(s=>new Hn(s.ctx.common.issues));return ne(n,{code:Y.invalid_union,unionErrors:o}),be}if(n.common.async)return Promise.all(r.map(async a=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let a;const o=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},c=l._parseSync({data:n.data,path:n.path,parent:u});if(c.status==="valid")return c;c.status==="dirty"&&!a&&(a={result:c,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(l=>new Hn(l));return ne(n,{code:Y.invalid_union,unionErrors:s}),be}}get options(){return this._def.options}}ms.create=(e,t)=>new ms({options:e,typeName:_e.ZodUnion,...Te(t)});const Tl=e=>e instanceof vs?Tl(e.schema):e instanceof Xn?Tl(e.innerType()):e instanceof xs?[e.value]:e instanceof wi?e.options:e instanceof ws?Object.keys(e.enum):e instanceof _s?Tl(e._def.innerType):e instanceof hs?[void 0]:e instanceof ps?[null]:null;class Tc extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.object)return ne(n,{code:Y.invalid_type,expected:te.object,received:n.parsedType}),be;const r=this.discriminator,i=n.data[r],a=this.optionsMap.get(i);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ne(n,{code:Y.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),be)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const a of n){const o=Tl(a.shape[t]);if(!o)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const s of o){if(i.has(s))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);i.set(s,a)}}return new Tc({typeName:_e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Te(r)})}}function dh(e,t){const n=ei(e),r=ei(t);if(e===t)return{valid:!0,data:e};if(n===te.object&&r===te.object){const i=$e.objectKeys(t),a=$e.objectKeys(e).filter(s=>i.indexOf(s)!==-1),o={...e,...t};for(const s of a){const l=dh(e[s],t[s]);if(!l.valid)return{valid:!1};o[s]=l.data}return{valid:!0,data:o}}else if(n===te.array&&r===te.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let a=0;a<e.length;a++){const o=e[a],s=t[a],l=dh(o,s);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===te.date&&r===te.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class gs extends Ae{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(a,o)=>{if(uh(a)||uh(o))return be;const s=dh(a.value,o.value);return s.valid?((ch(a)||ch(o))&&n.dirty(),{status:n.value,value:s.data}):(ne(r,{code:Y.invalid_intersection_types}),be)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,o])=>i(a,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}gs.create=(e,t,n)=>new gs({left:e,right:t,typeName:_e.ZodIntersection,...Te(n)});class mr extends Ae{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==te.array)return ne(r,{code:Y.invalid_type,expected:te.array,received:r.parsedType}),be;if(r.data.length<this._def.items.length)return ne(r,{code:Y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),be;!this._def.rest&&r.data.length>this._def.items.length&&(ne(r,{code:Y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...r.data].map((o,s)=>{const l=this._def.items[s]||this._def.rest;return l?l._parse(new pr(r,o,r.path,s)):null}).filter(o=>!!o);return r.common.async?Promise.all(a).then(o=>Wt.mergeArray(n,o)):Wt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new mr({...this._def,rest:t})}}mr.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new mr({items:e,typeName:_e.ZodTuple,rest:null,...Te(t)})};class ys extends Ae{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==te.object)return ne(r,{code:Y.invalid_type,expected:te.object,received:r.parsedType}),be;const i=[],a=this._def.keyType,o=this._def.valueType;for(const s in r.data)i.push({key:a._parse(new pr(r,s,r.path,s)),value:o._parse(new pr(r,r.data[s],r.path,s))});return r.common.async?Wt.mergeObjectAsync(n,i):Wt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Ae?new ys({keyType:t,valueType:n,typeName:_e.ZodRecord,...Te(r)}):new ys({keyType:Vn.create(),valueType:t,typeName:_e.ZodRecord,...Te(n)})}}class Eu extends Ae{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==te.map)return ne(r,{code:Y.invalid_type,expected:te.map,received:r.parsedType}),be;const i=this._def.keyType,a=this._def.valueType,o=[...r.data.entries()].map(([s,l],u)=>({key:i._parse(new pr(r,s,r.path,[u,"key"])),value:a._parse(new pr(r,l,r.path,[u,"value"]))}));if(r.common.async){const s=new Map;return Promise.resolve().then(async()=>{for(const l of o){const u=await l.key,c=await l.value;if(u.status==="aborted"||c.status==="aborted")return be;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(u.value,c.value)}return{status:n.value,value:s}})}else{const s=new Map;for(const l of o){const u=l.key,c=l.value;if(u.status==="aborted"||c.status==="aborted")return be;(u.status==="dirty"||c.status==="dirty")&&n.dirty(),s.set(u.value,c.value)}return{status:n.value,value:s}}}}Eu.create=(e,t,n)=>new Eu({valueType:t,keyType:e,typeName:_e.ZodMap,...Te(n)});class qi extends Ae{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==te.set)return ne(r,{code:Y.invalid_type,expected:te.set,received:r.parsedType}),be;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(ne(r,{code:Y.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(ne(r,{code:Y.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const a=this._def.valueType;function o(l){const u=new Set;for(const c of l){if(c.status==="aborted")return be;c.status==="dirty"&&n.dirty(),u.add(c.value)}return{status:n.value,value:u}}const s=[...r.data.values()].map((l,u)=>a._parse(new pr(r,l,r.path,u)));return r.common.async?Promise.all(s).then(l=>o(l)):o(s)}min(t,n){return new qi({...this._def,minSize:{value:t,message:me.toString(n)}})}max(t,n){return new qi({...this._def,maxSize:{value:t,message:me.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}qi.create=(e,t)=>new qi({valueType:e,minSize:null,maxSize:null,typeName:_e.ZodSet,...Te(t)});class Ba extends Ae{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.function)return ne(n,{code:Y.invalid_type,expected:te.function,received:n.parsedType}),be;function r(s,l){return ku({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,_u(),ds].filter(u=>!!u),issueData:{code:Y.invalid_arguments,argumentsError:l}})}function i(s,l){return ku({data:s,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,_u(),ds].filter(u=>!!u),issueData:{code:Y.invalid_return_type,returnTypeError:l}})}const a={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof eo?Jt(async(...s)=>{const l=new Hn([]),u=await this._def.args.parseAsync(s,a).catch(f=>{throw l.addIssue(r(s,f)),l}),c=await o(...u);return await this._def.returns._def.type.parseAsync(c,a).catch(f=>{throw l.addIssue(i(c,f)),l})}):Jt((...s)=>{const l=this._def.args.safeParse(s,a);if(!l.success)throw new Hn([r(s,l.error)]);const u=o(...l.data),c=this._def.returns.safeParse(u,a);if(!c.success)throw new Hn([i(u,c.error)]);return c.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ba({...this._def,args:mr.create(t).rest($i.create())})}returns(t){return new Ba({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Ba({args:t||mr.create([]).rest($i.create()),returns:n||$i.create(),typeName:_e.ZodFunction,...Te(r)})}}class vs extends Ae{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}vs.create=(e,t)=>new vs({getter:e,typeName:_e.ZodLazy,...Te(t)});class xs extends Ae{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ne(n,{received:n.data,code:Y.invalid_literal,expected:this._def.value}),be}return{status:"valid",value:t.data}}get value(){return this._def.value}}xs.create=(e,t)=>new xs({value:e,typeName:_e.ZodLiteral,...Te(t)});function $w(e,t){return new wi({values:e,typeName:_e.ZodEnum,...Te(t)})}class wi extends Ae{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return ne(n,{expected:$e.joinValues(r),received:n.parsedType,code:Y.invalid_type}),be}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return ne(n,{received:n.data,code:Y.invalid_enum_value,options:r}),be}return Jt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return wi.create(t)}exclude(t){return wi.create(this.options.filter(n=>!t.includes(n)))}}wi.create=$w;class ws extends Ae{_parse(t){const n=$e.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==te.string&&r.parsedType!==te.number){const i=$e.objectValues(n);return ne(r,{expected:$e.joinValues(i),received:r.parsedType,code:Y.invalid_type}),be}if(n.indexOf(t.data)===-1){const i=$e.objectValues(n);return ne(r,{received:r.data,code:Y.invalid_enum_value,options:i}),be}return Jt(t.data)}get enum(){return this._def.values}}ws.create=(e,t)=>new ws({values:e,typeName:_e.ZodNativeEnum,...Te(t)});class eo extends Ae{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.promise&&n.common.async===!1)return ne(n,{code:Y.invalid_type,expected:te.promise,received:n.parsedType}),be;const r=n.parsedType===te.promise?n.data:Promise.resolve(n.data);return Jt(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}eo.create=(e,t)=>new eo({type:e,typeName:_e.ZodPromise,...Te(t)});class Xn extends Ae{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const o=i.transform(r.data);return r.common.async?Promise.resolve(o).then(s=>this._def.schema._parseAsync({data:s,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const a={addIssue:o=>{ne(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),i.type==="refinement"){const o=s=>{const l=i.refinement(s,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return s};if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?be:(s.status==="dirty"&&n.dirty(),o(s.value),{status:n.value,value:s.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>s.status==="aborted"?be:(s.status==="dirty"&&n.dirty(),o(s.value).then(()=>({status:n.value,value:s.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Su(o))return o;const s=i.transform(o.value,a);if(s instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:s}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Su(o)?Promise.resolve(i.transform(o.value,a)).then(s=>({status:n.value,value:s})):o);$e.assertNever(i)}}Xn.create=(e,t,n)=>new Xn({schema:e,typeName:_e.ZodEffects,effect:t,...Te(n)});Xn.createWithPreprocess=(e,t,n)=>new Xn({schema:t,effect:{type:"preprocess",transform:e},typeName:_e.ZodEffects,...Te(n)});class Nr extends Ae{_parse(t){return this._getType(t)===te.undefined?Jt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Nr.create=(e,t)=>new Nr({innerType:e,typeName:_e.ZodOptional,...Te(t)});class Xi extends Ae{_parse(t){return this._getType(t)===te.null?Jt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Xi.create=(e,t)=>new Xi({innerType:e,typeName:_e.ZodNullable,...Te(t)});class _s extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===te.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}_s.create=(e,t)=>new _s({innerType:e,typeName:_e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Te(t)});class Tu extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return bu(i)?i.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Hn(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Hn(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Tu.create=(e,t)=>new Tu({innerType:e,typeName:_e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Te(t)});class Ou extends Ae{_parse(t){if(this._getType(t)!==te.nan){const r=this._getOrReturnCtx(t);return ne(r,{code:Y.invalid_type,expected:te.nan,received:r.parsedType}),be}return{status:"valid",value:t.data}}}Ou.create=e=>new Ou({typeName:_e.ZodNaN,...Te(e)});const MP=Symbol("zod_brand");class Uw extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class zs extends Ae{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?be:a.status==="dirty"?(n.dirty(),jw(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?be:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new zs({in:t,out:n,typeName:_e.ZodPipeline})}}const Bw=(e,t={},n)=>e?Ja.create().superRefine((r,i)=>{var a,o;if(!e(r)){const s=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(o=(a=s.fatal)!==null&&a!==void 0?a:n)!==null&&o!==void 0?o:!0,u=typeof s=="string"?{message:s}:s;i.addIssue({code:"custom",...u,fatal:l})}}):Ja.create(),IP={object:ut.lazycreate};var _e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(_e||(_e={}));const RP=(e,t={message:`Input not instance of ${e.name}`})=>Bw(n=>n instanceof e,t),Vw=Vn.create,Yw=vi.create,NP=Ou.create,zP=xi.create,Ww=fs.create,FP=Ki.create,LP=Cu.create,jP=hs.create,$P=ps.create,UP=Ja.create,BP=$i.create,VP=Br.create,YP=Du.create,WP=Zn.create,HP=ut.create,ZP=ut.strictCreate,GP=ms.create,KP=Tc.create,qP=gs.create,XP=mr.create,QP=ys.create,JP=Eu.create,eA=qi.create,tA=Ba.create,nA=vs.create,rA=xs.create,iA=wi.create,aA=ws.create,oA=eo.create,fy=Xn.create,sA=Nr.create,lA=Xi.create,uA=Xn.createWithPreprocess,cA=zs.create,dA=()=>Vw().optional(),fA=()=>Yw().optional(),hA=()=>Ww().optional(),pA={string:e=>Vn.create({...e,coerce:!0}),number:e=>vi.create({...e,coerce:!0}),boolean:e=>fs.create({...e,coerce:!0}),bigint:e=>xi.create({...e,coerce:!0}),date:e=>Ki.create({...e,coerce:!0})},mA=be;var Se=Object.freeze({__proto__:null,defaultErrorMap:ds,setErrorMap:xP,getErrorMap:_u,makeIssue:ku,EMPTY_PATH:wP,addIssueToContext:ne,ParseStatus:Wt,INVALID:be,DIRTY:jw,OK:Jt,isAborted:uh,isDirty:ch,isValid:Su,isAsync:bu,get util(){return $e},get objectUtil(){return lh},ZodParsedType:te,getParsedType:ei,ZodType:Ae,ZodString:Vn,ZodNumber:vi,ZodBigInt:xi,ZodBoolean:fs,ZodDate:Ki,ZodSymbol:Cu,ZodUndefined:hs,ZodNull:ps,ZodAny:Ja,ZodUnknown:$i,ZodNever:Br,ZodVoid:Du,ZodArray:Zn,ZodObject:ut,ZodUnion:ms,ZodDiscriminatedUnion:Tc,ZodIntersection:gs,ZodTuple:mr,ZodRecord:ys,ZodMap:Eu,ZodSet:qi,ZodFunction:Ba,ZodLazy:vs,ZodLiteral:xs,ZodEnum:wi,ZodNativeEnum:ws,ZodPromise:eo,ZodEffects:Xn,ZodTransformer:Xn,ZodOptional:Nr,ZodNullable:Xi,ZodDefault:_s,ZodCatch:Tu,ZodNaN:Ou,BRAND:MP,ZodBranded:Uw,ZodPipeline:zs,custom:Bw,Schema:Ae,ZodSchema:Ae,late:IP,get ZodFirstPartyTypeKind(){return _e},coerce:pA,any:UP,array:WP,bigint:zP,boolean:Ww,date:FP,discriminatedUnion:KP,effect:fy,enum:iA,function:tA,instanceof:RP,intersection:qP,lazy:nA,literal:rA,map:JP,nan:NP,nativeEnum:aA,never:VP,null:$P,nullable:lA,number:Yw,object:HP,oboolean:hA,onumber:fA,optional:sA,ostring:dA,pipeline:cA,preprocess:uA,promise:oA,record:QP,set:eA,strictObject:ZP,string:Vw,symbol:LP,transformer:fy,tuple:XP,undefined:jP,union:GP,unknown:BP,void:YP,NEVER:mA,ZodIssueCode:Y,quotelessJson:vP,ZodError:Hn}),hy=function(e,t,n){if(e&&"reportValidity"in e){var r=X(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},Hw=function(e,t){var n=function(i){var a=t.fields[i];a&&a.ref&&"reportValidity"in a.ref?hy(a.ref,i,e):a.refs&&a.refs.forEach(function(o){return hy(o,i,e)})};for(var r in t.fields)n(r)},gA=function(e,t){t.shouldUseNativeValidation&&Hw(e,t);var n={};for(var r in e){var i=X(t.fields,r);Ke(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},yA=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,a=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var s=r.unionErrors[0].errors[0];n[o]={message:s.message,type:s.code}}else n[o]={message:a,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(c){return c.errors.forEach(function(d){return e.push(d)})}),t){var l=n[o].types,u=l&&l[r.code];n[o]=Lx(o,t,n,i,u?[].concat(u,r.message):r.message)}e.shift()}return n},vA=function(e,t,n){return n===void 0&&(n={}),function(r,i,a){try{return Promise.resolve(function(o,s){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return a.shouldUseNativeValidation&&Hw({},a),{errors:{},values:n.raw?r:u}})}catch(u){return s(u)}return l&&l.then?l.then(void 0,s):l}(0,function(o){if(function(s){return s.errors!=null}(o))return{values:{},errors:gA(yA(o.errors,!a.shouldUseNativeValidation&&a.criteriaMode==="all"),a)};throw o}))}catch(o){return Promise.reject(o)}}};const xA=k.div`
    background: ${e=>e.theme.formBg};
    position: fixed;
    transition: 0.4s;
    height:100vh;
    @media screen and (max-width:1024px){
        width:80%;
    }
    @media screen and (max-width:768px){
        width:100%;
    }
    @media screen and (max-width:425px) {
        width: 100%;
    }
`,wA=k.div`    
    display:none;
    @media screen and (max-width:425px) {
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
    }
`,_A=k.form`
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.2) 100%); */
    height:100%;
    padding: 0 50px;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${e=>e.theme.scrollBg};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #7C5DFA, #5e35ff);
      /* background: #7C5DFA; */
    }
    overflow-x: hidden;
    overflow-y: scroll;
    input[type="text"] {
        cursor: text;
    }
    @media screen and (max-width:768px){
        padding:0 25px;
    }
    @media screen and (max-width:425px){
        padding: 0 10px;
    }
    display:grid;
`,kA=k.div`
    margin: 20px 0;
`,SA=k.div`
    margin: 20px 0;
`,rn=k.div`
    input {
        background: ${e=>e.theme.inputBg};
        padding:10px 15px;
        border: ${e=>e.theme.inputBorder};
        &:hover{
            border: ${e=>e.theme.inputBorderHover};
        }
        border-radius: 4px;
        height: 15px;
        color: ${e=>e.theme.inputColor};
        font-weight:700;
        transition:0.4s;
        font-family: "League Spartan", Arial, Helvetica, sans-serif;
        &:focus {
            outline-style: solid;
            outline-color: #7c5dfa;
            outline-width: 3px;
        }
    }
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
    .full {
        width: 100%;
    }
`,nn=k.p`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: #ec5757;
    font-weight: 700;
`,mt=k.label`
    display: block;
    margin: 20px 0;
    font-size: 13px;
    color: ${e=>e.theme.labelColor};
`,py=k(Je)`
    color: #7c5dfa;
`,bA=k(Je)`
    color: #777F98;
`,my=k.div`
    display: flex;
    justify-content: space-between;
    gap:50px;
    @media screen and (max-width:800px){
        gap:50px;
        input{
            width:100%;
        }
    }
    @media screen and (max-width:425px){
        display:grid;
        grid-template:
        "a b"
        "c c";
        gap:0 50px;
        div{
            input{
                width:100%;
            }
        }
        div:nth-of-type(3){
            width:100%;
            grid-column-start: span 2;
            input{
                width:99%;
            }
        }
    }
`,gt=k.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,CA=k.div`
    margin: 20px 0;
    display:grid;
    align-items:center;
    gap:10px 50px;
    @media screen and (min-width: 426px) {
        grid-template-areas:
        "a b"
        "c c"
        ;
        div:nth-of-type(3){
            grid-area:c;
            input{
                width:100%;
            }
        }    
    }
    div:nth-of-type(3){
        input{
            width:100%;
        }
    }
`,gy=k.div`
    display: grid;
    align-items: center;
    gap:15px 45px;
    @media screen and (min-width:426px){
        grid-template-columns: 0.65fr 0.25fr 0.25fr 0.7fr;
    }
    @media screen and (max-width:425px){
        grid-template-areas:
        "a a a a a a a a"
        "b b c c d d d d"
        ;
        #nameContainer{
            grid-area: a;
            input{
                width:100%;
            }
            
        }
        #quantityContainer{
            grid-area: b;
            input{
                width:100%;
            }
            
        }
        #priceContainer{
            grid-area: c;
            input{
                width:100%;
            }
            
        }
        #totalContainer{
            grid-area: d;
            width:100%;
            overflow-x: scroll;
        }
    }
    .mapped-field{
        display:none;
        @media screen and (max-width:425px) {
            display:block;
        }
    }
    .item-heading{
        @media screen and (max-width:425px){
            display:none;
        }
    }
`,Md=k(rn)`
    margin-top:10px;
    input {
        overflow-x:hidden;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        &:hover, &:focus{
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        color: ${e=>e.theme.inputColor};
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }

`,DA=k.div`
    margin:20px 0;
`,EA=k.div`
    margin-top:10px;
`,TA=k.div`
    height:15px;
    display:flex;
    align-items: center;
    height:100%;
    padding:0px 0px;
    justify-content: space-between;
    input:disabled{
            background: ${e=>e.theme.inputBg};
            padding:10px 15px;
            border: ${e=>e.theme.inputBorder};
            &:hover{
                border: ${e=>e.theme.inputBorderHover};
            }
            border-radius: 4px;
            color: ${e=>e.theme.inputColor};
            font-weight:700;
            transition:0.4s;
            font-family: "League Spartan", Arial, Helvetica, sans-serif;
            &:focus {
                outline-style: solid;
                outline-color: #7c5dfa;
                outline-width: 3px;
            }
            width:70%;
            overflow-x:hidden;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            &:hover, &:focus{
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }
        }
    .error {
        outline-color: red;
        outline-style: solid;
        outline-width: 2px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        display: none;
    }
    h3{
        color: ${e=>e.theme.labelColor};
    }
    SVG{
        cursor:pointer;
        transform:scale(1);
        transition:0.5s;
        &:hover{
            transform: scale(1.3);
            transition:0.5s;
            & path{
                fill:red;
            }
        }
    }
`,OA=k(Dx)`
    width:100%;
    background: ${e=>e.theme.altBg};
    &:hover{
        background:${e=>e.theme.altBgHover}
    }
    border-radius: 24px;
    padding:20px;
    margin: 20px 0;
`;k.div`
    border-radius: 0px 20px 20px 0px;
    width:100%;
    margin: 20px 0;
    display:flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap:10px;
    @media screen and (max-width:1024px){
        margin-bottom:100px;
    }
`;const yy=k.div`
    border-radius: 0px 20px 20px 0px;
    width:100%;
    margin: 20px 0;
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
    gap:10px;
    @media screen and (max-width:1024px){
        margin-bottom:100px;
    }
    div:last-of-type{
        display:flex;
        gap:10px;
    }
`,PA=k(Ps)`
    background: ${e=>e.theme.discardBg};
    justify-self:start;
`,AA=k(Dx)`
    background: ${e=>e.theme.altBg};
    &:hover{
        background:${e=>e.theme.altBgHover}
    }
    border-radius: 24px;
`,vy=k(Ps)`
    background: #373B53;
    &:hover{
        background:${e=>e.theme.draftBgHover}
    }
    border-radius: 24px;
    color:${e=>e.theme.draftColor};
`;k.div`
    display:flex;
    justify-content: space-between;
    margin:20px 0;
    gap:50px;
    div{
        width:100%;
    }
`;const MA={formBg:"#141625",inputBorder:"1px solid #252945",inputBg:"#1E2139",altBg:"#252945",altBgHover:"#2b2e47",inputBorderHover:"1px solid #2d3153",labelColor:"#DFE3FA",scrollBg:"#141625",discardBg:"#F9FAFE",draftBgHover:"#1E2139",draftColor:"#888EB0",inputColor:"#FFFFFF"},IA={formBg:"#FFF",inputBorder:"1px solid #DFE3FA",inputBg:"#FFF",altBg:"#F9FAFE;",altBgHover:"#DFE3FA",inputBorderHover:"1px solid #7C5DFA",labelColor:"#7E88C3",scrollBg:"#FFFFFF",discardBg:"#F9FAFE",draftBgHover:"#0C0E16",draftColor:"#DFE3FA",inputColor:"#000000"};function RA(e){var z,$,ae,oe,ke,Me,Xe,Ve,V,Q,ue,Ne,H,Z,J,ge;const[t,n]=T.useState(!1),[r,i]=T.useState(""),[a,o]=T.useState(0);T.useState();const s=ao(),l=Se.object({id:Se.string(),createdAt:Se.string(),paymentDue:Se.string(),description:Se.string().nonempty({message:"can't be empty"}),paymentTerms:Se.number().min(1).max(30),clientName:Se.string().nonempty({message:"can't be empty"}),clientEmail:Se.string().nonempty({message:"can't be empty"}).email({message:"invalid email address"}),status:Se.string(),senderAddress:Se.object({street:Se.string().nonempty({message:"can't be empty"}),city:Se.string().nonempty({message:"can't be empty"}),postCode:Se.string().nonempty({message:"can't be empty"}),country:Se.string().nonempty({message:"can't be empty"})}),clientAddress:Se.object({street:Se.string().nonempty({message:"can't be empty"}),city:Se.string().nonempty({message:"can't be empty"}),postCode:Se.string().nonempty({message:"can't be empty"}),country:Se.string().nonempty({message:"can't be empty"})}),items:Se.array(Se.object({name:Se.string().nonempty(),quantity:Se.number(),price:Se.number(),total:Se.number()})).min(1,{message:"an item must be added"}),total:Se.number()}),u=Se.object({description:Se.string().optional(),clientName:Se.string().optional(),clientEmail:Se.string().optional(),status:Se.string().optional(),senderAddress:Se.object({street:Se.string().optional(),city:Se.string().optional(),postCode:Se.string().optional(),country:Se.string().optional()}).optional(),clientAddress:Se.object({street:Se.string().optional(),city:Se.string().optional(),postCode:Se.string().optional(),country:Se.string().optional()}).optional(),items:Se.array(Se.object({name:Se.string().optional(),quantity:Se.number().optional(),price:Se.number().optional(),total:Se.number().optional()})).optional()}),{register:c,formState:{errors:d},handleSubmit:f,control:x,reset:v,watch:p,getValues:S,setValue:m}=XC({resolver:vA(l),defaultValues:e.isFormEdit?{id:e.invoiceData.id,createdAt:e.invoiceData.createdAt,paymentDue:e.invoiceData.paymentDue,description:e.invoiceData.description,paymentTerms:e.invoiceData.paymentTerms,clientName:e.invoiceData.clientName,clientEmail:e.invoiceData.clientEmail,status:e.invoiceData.status,senderAddress:{street:e.invoiceData.senderAddress.street,city:e.invoiceData.senderAddress.city,postCode:e.invoiceData.senderAddress.postCode,country:e.invoiceData.senderAddress.country},clientAddress:{street:e.invoiceData.clientAddress.street,city:e.invoiceData.clientAddress.city,postCode:e.invoiceData.clientAddress.postCode,country:e.invoiceData.clientAddress.country},items:e.invoiceData.items.map(b=>({name:b.name,quantity:b.quantity,price:b.price,total:b.total})),total:e.invoiceData.total}:void 0}),{fields:h,append:g,remove:C}=VC({name:"items",control:x});function w(b){const ee=p(`items.${b}.quantity`),j=p(`items.${b}.price`),Ce=p(`items.${b}.total`);let ve;return ee!==void 0&&j!==void 0&&(ve=ee*j),Ce!=ve&&!Number.isNaN(Ce)&&!Number.isNaN(ve)&&m(`items.${b}.total`,ve),Pe=>{}}T.useEffect(()=>{p("paymentDue")!=null&&p("paymentTerms")!=null&&i(K(p("createdAt")).add(p("paymentTerms"),"days").format("YYYY-MM-DD"))},[p("createdAt"),p("paymentTerms")]),T.useEffect(()=>{m("paymentDue",r)},[r]);function D(b){e.setIsFormOpen(!1),e.setIsFormEdit(!1)}function E(){m("status","draft");const b=S();if(u.parse(b),!e.isFormEdit)e.setUserFormData(b),n(!0),e.setIsFormOpen(!1),v(),e.setInvoiceData(void 0);else{const ee=e.data.filter(j=>{if(j.id!==e.invoiceData.id)return j});e.setData(ee),e.setUserFormData(b),s(".."),n(!0),e.setIsFormOpen(!1),v(),e.setIsFormEdit(!1),e.setInvoiceData(void 0)}}function M(b){if(!e.isFormEdit)e.setUserFormData(b),n(!0),e.setIsFormOpen(!1),v();else{const ee=e.data.filter(ve=>{if(ve.id!==e.invoiceData.id)return ve}),Ce={...S(),status:"pending"};e.setData(ee),e.setUserFormData(Ce),s(".."),n(!0),e.setIsFormOpen(!1),v(),e.setIsFormEdit(!1)}}function W(){let b="ABCDEFGHIJKLMNOPQRSTUVWXYZ",ee="0123456789",j="";for(let Ce=0;Ce<2;Ce++)j+=b.charAt(Math.floor(Math.random()*b.length));for(let Ce=0;Ce<4;Ce++)j+=ee.charAt(Math.floor(Math.random()*ee.length));return j}return T.useEffect(()=>{p("createdAt")!=null&&p("paymentDue")!=null&&(i(K(p("createdAt")).add(p("paymentTerms"),"days").format("YYYY-MM-DD")),m("paymentDue",r))},[p("createdAt"),p("paymentTerms")]),T.useEffect(()=>{let b=0;for(let ee=0;ee<h.length;ee++){const j=Number(p(`items.${ee}.quantity`))||0,Ce=Number(p(`items.${ee}.price`))||0;b+=j*Ce}o(b)},[p(),h]),T.useEffect(()=>{m("total",a)},[a]),y(Mt,{theme:e.isDarkMode?MA:IA,children:y(xA,{children:R(_A,{onSubmit:f(M),children:[R(wA,{onClick:D,children:[y(vn,{src:"\\assets\\icon-arrow-left.svg"}),y(Je,{children:"Go Back"})]}),e.isFormEdit?R(ss,{children:["Edit #",e.invoiceData.id]}):y(ss,{children:"New Invoice"}),R(kA,{children:[y(py,{children:"Bill From"}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"senderAddress",children:"Street Address"}),((z=d.senderAddress)==null?void 0:z.street)&&y(nn,{children:"can't be empty"})]}),y("input",{className:($=d.senderAddress)!=null&&$.street?"full error":"full",type:"text",id:"streetAddress",...c("senderAddress.street",{required:!0})})]}),R(my,{children:[R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"city",children:"City"}),((ae=d.senderAddress)==null?void 0:ae.city)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(oe=d.senderAddress)!=null&&oe.city?"error":"",type:"text",id:"city",...c("senderAddress.city",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"postCode",children:"Post Code"}),((ke=d.senderAddress)==null?void 0:ke.postCode)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(Me=d.senderAddress)!=null&&Me.postCode?"error":"",type:"text",...c("senderAddress.postCode",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"country",children:"Country"}),((Xe=d.senderAddress)==null?void 0:Xe.country)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(Ve=d.senderAddress)!=null&&Ve.country?"error":"",type:"text",...c("senderAddress.country",{required:!0})})]})]})]}),R(SA,{children:[y(py,{children:"Bill To"}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientName",children:"Client's Name"}),d.clientName&&y(nn,{children:"can't be empty"})]}),y("input",{className:d.clientName?"full error":"full",type:"text",id:"clientName",...c("clientName",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientEmail",children:"Client's Email"}),d.clientEmail&&y(nn,{children:d.clientEmail.message})]}),y("input",{className:d.clientEmail?"full error":"full",type:"email",id:"clientEmail",...c("clientEmail",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientAddress",children:"Street Address"}),((V=d.clientAddress)==null?void 0:V.street)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(Q=d.clientAddress)!=null&&Q.street?"full error":"full",type:"text",id:"clientAddress",...c("clientAddress.street",{required:!0})})]}),R(my,{children:[R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientCity",children:"City"}),((ue=d.clientAddress)==null?void 0:ue.city)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(Ne=d.clientAddress)!=null&&Ne.city?"error":"",type:"text",...c("clientAddress.city",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientPostCode",children:"Post Code"}),((H=d.clientAddress)==null?void 0:H.postCode)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(Z=d.clientAddress)!=null&&Z.postCode?"error":"",type:"text",...c("clientAddress.postCode",{required:!0})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"clientCountry",children:"Country"}),((J=d.clientAddress)==null?void 0:J.country)&&y(nn,{children:"can't be empty"})]}),y("input",{className:(ge=d.clientAddress)!=null&&ge.country?"error":"",type:"text",...c("clientAddress.country",{required:!0})})]})]})]}),R(CA,{children:[R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"createdAt",children:"Invoice Date"}),d.createdAt&&y(nn,{children:"date must be selected"})]}),y(Xg,{name:"createdAt",control:x,rules:{required:!0},render:({field:{onChange:b,value:ee}})=>y(oP,{value:ee,onChange:b,error:d.createdAt,isSubmit:t,setIsSubmit:n,isDarkMode:e.isDarkMode,invoiceData:e.invoiceData,isFormEdit:e.isFormEdit})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"paymentTerms",children:"Payment Terms"}),d.paymentTerms&&y(nn,{children:"select a payment term"})]}),y(Xg,{name:"paymentTerms",control:x,rules:{required:!0},render:({field:{onChange:b,value:ee}})=>y(yP,{value:ee,onChange:b,error:d.paymentTerms,isSubmit:t,setIsSubmit:n,isDarkMode:e.isDarkMode,invoiceData:e.invoiceData,isFormEdit:e.isFormEdit})})]}),R(rn,{children:[R(gt,{children:[y(mt,{htmlFor:"description",children:"Project Description"}),d.description&&y(nn,{children:"add a project description"})]}),y("input",{className:d.description?"error":"",type:"text",...c("description",{required:!0})})]})]}),R(DA,{children:[y(bA,{children:"Item List"}),h.length>=1&&R(gy,{children:[y(gt,{className:"item-heading",children:y(mt,{children:"Item Name"})}),y(gt,{className:"item-heading",children:y(mt,{children:"Qty."})}),y(gt,{className:"item-heading",children:y(mt,{children:"Price"})}),y(gt,{className:"item-heading",children:y(mt,{children:"Tot."})})]}),h.map((b,ee)=>{var j,Ce,ve,Pe;return R(gy,{children:[R(Md,{id:"nameContainer",children:[y(gt,{className:"mapped-field",children:y(mt,{children:"Item Name"})}),y("input",{className:d.items&&((j=d.items[ee])!=null&&j.name)?"error":"",type:"text",id:"name",placeholder:"Item Name",...c(`items.${ee}.name`,{required:!0})})]}),R(Md,{id:"quantityContainer",children:[y(gt,{className:"mapped-field",children:y(mt,{children:"Qty."})}),y("input",{className:d.items&&((Ce=d.items[ee])!=null&&Ce.quantity)?"error":"",type:"number",id:"quantity",placeholder:"Quantity",...c(`items.${ee}.quantity`,{required:!0,valueAsNumber:!0})})]}),R(Md,{id:"priceContainer",children:[y(gt,{className:"mapped-field",children:y(mt,{children:"Price"})}),y("input",{className:d.items&&((ve=d.items[ee])!=null&&ve.price)?"error":"",type:"number",id:"price",placeholder:"Price",...c(`items.${ee}.price`,{required:!0,valueAsNumber:!0})})]}),R(EA,{id:"totalContainer",children:[y(gt,{className:"mapped-field",children:y(mt,{htmlFor:"totalPrice",children:"Total"})}),R(TA,{children:[y("input",{defaultValue:(Number(p([`items.${ee}.quantity`]))*Number(p([`items.${ee}.price`]))).toFixed(2),id:"total",placeholder:"Total Price",type:"number",...c(`items.${ee}.total`,{valueAsNumber:!0}),onChange:w(ee),className:d.items&&((Pe=d.items[ee])!=null&&Pe.price)?"error":"",disabled:!0}),y(vn,{onClick:()=>{C(ee)},src:"\\assets\\icon-delete.svg"})]})]})]},b.id)})]}),y(OA,{type:"button",onClick:()=>{g({})},children:"+ Add New Item"}),d.items&&y(nn,{children:"- An item must be added and filled out"}),e.isFormEdit?R(yy,{children:[y("div",{children:y(AA,{onClick:D,children:"Cancel"})}),R("div",{children:[y(vy,{type:"button",onClick:E,children:"Save Changes"}),y(Gi,{type:"submit",children:"Save & Send"})]})]}):R(yy,{children:[y("div",{children:y(PA,{onClick:D,children:"Discard"})}),R("div",{children:[y(vy,{type:"button",onClick:E,children:"Save as Draft"}),y(Gi,{type:"submit",children:"Save & Send"})]})]}),y("input",{...c("id"),type:"hidden",defaultValue:e.isFormEdit?e.invoiceData.id:W()}),y("input",{...c("total"),type:"hidden",defaultValue:0}),y("input",{...c("status"),value:"pending",type:"hidden"}),y("input",{...c("paymentDue"),type:"hidden"})]})})})}const NA=k.div`
        margin: 0;
        display: flex;
        height: 100vh;
        
    @media screen and (max-width:1024px) {
        margin:0;
        display:flex;
        flex-direction: column;
    }
`,zA=k.main`
    margin: 0px auto;
    display:flex;
    flex-direction: column;
    width:80vw;
    margin-top:40px;
    @media screen and (max-width:1024px) {
        width:95vw;
    }
`,FA=k.div`
    display:flex;
    z-index:3;
    @media screen and (min-width:1025px){
        height:100%;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        width:100%;
    }
    position:fixed;
`,LA=k.div`
`,jA=k.div`
    background: rgba(0, 0, 0, 0.45);
    height:100%;
    width:100%;
    position:fixed;
    z-index:2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;function $A(e){const[t,n]=T.useState(!1),[r,i]=T.useState(),[a,o]=T.useState(!1),[s,l]=T.useState(),u=e.isDarkMode,c=e.setIsDarkMode,d={isDraft:e.isDraft,setIsDraft:e.setIsDraft,isPending:e.isPending,setIsPending:e.setIsPending,isPaid:e.isPaid,setIsPaid:e.setIsPaid,isFormOpen:t,setIsDarkMode:c,isDarkMode:u},f={setIsFormOpen:n,isFormOpen:t,isDarkMode:u,userFormData:r,setUserFormData:i,isFormEdit:a,setIsFormEdit:o,invoiceData:s,setInvoiceData:l,data:e.data,setData:e.setData};T.useEffect(()=>{const v=()=>{n(!1)};return window.addEventListener("popstate",v),()=>{window.removeEventListener("popstate",v)}},[]);const x={dark:{color:"white"},light:{color:"black"}};return y(NA,{children:R(Mt,{theme:u?x.dark:x.light,children:[y(IC,{}),R(FA,{children:[y(MC,{...d}),y(LA,{children:t&&y(RA,{...f})})]}),R(zA,{children:[t&&y(jA,{}),y(H2,{context:{setIsFormOpen:n,isDarkMode:u,setUserFormData:i,userFormData:r,isFormEdit:a,setIsFormEdit:o,setInvoiceData:l,invoiceData:s}})]})]})})}function Oc(){return N2()}const UA=k.div`
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    width:55%;
    z-index:1;
    @media screen and (max-width:1024px) {
        width:60%;
    }
`,Zw=k.div`
    display:flex;
    align-items: center;
    background: transparent;
    padding: 0 20px;
    justify-content: space-between;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
`,BA=k.div`
    display:flex;
    flex-direction: column;
    padding:10px;
    background: ${e=>e.theme.dropdownBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    position:absolute;
    left:0;
    right:0;
    margin-top:10px;
    @media screen and (max-width:425px) {
        width:90px;
    }
`,Id=k.div`
    display:flex;
    align-items: flex-end;
    padding:10px;
`,Rd=k.input`
    cursor: pointer;
    margin-right:10px;
    &:checked{
        accent-color:#9277FF;
    }
`,Nd=k.label`
    cursor: pointer;
`,VA=k(vn)`
    ${Zw}:hover & {
        transform: rotate(180deg);
        transition:0.5s;
    }
    transform: rotate(0deg);
    transition:0.5s;
`,YA=k(vn)`

`;function WA(e){const{isDarkMode:t}=Oc();let n=T.useRef(null);function r(){e.setIsOpen(!e.isOpen)}const i=u=>{u.key==="Enter"&&e.setIsOpen(!0)},a=u=>{u.key==="Enter"&&(u.target.id==="draft"?e.setIsDraft(!e.isDraft):u.target.id==="pending"?e.setIsPending(!e.isPending):u.target.id==="paid"&&e.setIsPaid(!e.isPaid))},o=u=>{u.target.id==="draft"?e.setIsDraft(!e.isDraft):u.target.id==="pending"?e.setIsPending(!e.isPending):u.target.id==="paid"&&e.setIsPaid(!e.isPaid)};return T.useEffect(()=>{let u=c=>{var d;(d=n.current)!=null&&d.contains(c.target)||e.setIsOpen(!1)};document.addEventListener("mousedown",u)}),y(Mt,{theme:t?{dropdownBg:"#252945"}:{dropdownBg:"#FFF"},children:R(UA,{ref:n,children:[R(Zw,{tabIndex:0,onKeyDown:i,onClick:r,children:[y(Je,{children:window.innerWidth>1024?"Filter by status":"Filter"}),e.isOpen?y(YA,{src:"\\assets\\icon-arrow-up.svg"}):y(VA,{src:"\\assets\\icon-arrow-down.svg"})]}),e.isOpen&&R(BA,{children:[R(Id,{children:[y(Rd,{id:"draft",type:"checkbox",checked:e.isDraft,onKeyDown:a,onChange:o}),y(Nd,{htmlFor:"draft",children:"Draft"})]}),R(Id,{children:[y(Rd,{id:"pending",type:"checkbox",checked:e.isPending,onKeyDown:a,onChange:o}),y(Nd,{htmlFor:"pending",children:"Pending"})]}),R(Id,{children:[y(Rd,{id:"paid",type:"checkbox",checked:e.isPaid,onKeyDown:a,onChange:o}),y(Nd,{htmlFor:"paid",children:"Paid"})]})]})]})})}const HA=k.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`,ZA=k.div`
`,GA=k.div`
    display:flex;
    align-items: center;
    width:45%;
    @media screen and (max-width:1024px){
        height:10vh;
    }
    @media screen and (max-width:768px){
        height:7vh;
    }
    @media screen and (max-width:425px){
        width:75%;
    }
`,KA=k.img`
    padding:10px;
    height:15px;
    width:15px;
    background-color: white;
    border-radius: 50%;
    @media screen and (max-width:1024px){
        padding:5px;
        height:10px;
        width:10px;
    }
    @media screen and (max-width:425px){
        padding:5px;
        height:8px;
        width:8px;
    }
`,qA=k(Gi)`
    padding:10px 5px;
    gap:10px;
    @media screen and (max-width:425px){
        gap:2px;
    }
`,XA=k(ss)`
    @media screen and (max-width:425px){
        font-size:20px;
    }
`,xy=k(uC)`
    color:${e=>e.theme.invoiceDataColor};
    @media screen and (max-width:425px){
        font-size:12px;
    }
`;function QA(e){function t(){e.setIsFormOpen(!0)}const n={invoiceDataColor:"#DFE3FA"},r={invoiceDataColor:"#888EB0"},i={isOpen:e.isOpen,setIsOpen:e.setIsOpen,isDraft:e.isDraft,setIsDraft:e.setIsDraft,isPending:e.isPending,setIsPending:e.setIsPending,isPaid:e.isPaid,setIsPaid:e.setIsPaid};return y(Mt,{theme:e.isDarkMode?n:r,children:R(HA,{children:[R(ZA,{children:[y(XA,{children:"Invoices"}),e.data.length===0?y(xy,{children:"No invoices"}):R(xy,{children:["There are ",e.data.length," total invoices"]})]}),R(GA,{children:[y(WA,{...i}),R(qA,{onClick:t,children:[y("span",{children:y(KA,{src:"\\assets\\icon-plus.svg"})}),window.innerWidth>1024?"New Invoice":"New"]})]})]})})}const JA=k.div`
    display:flex;
    background: ${e=>e.theme.invoiceBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    align-items: center;
    padding:10px 50px;
    justify-content: space-between;
    height:72px;
    transform: scale(1);
    transition:0.4s;
    &:hover{
        transform: scale(1.05);
        transition:0.4s;
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        padding:10px;
    }
    @media screen and (max-width:425px) {
        display:grid;
        padding:20px;
        height:80%;
        grid-template-areas: 
        "a b"
        "c d"
        "e d"
        ;
    }
`,eM=k(Je)`
    @media screen and (max-width:425px) {
        font-size:18px;
        grid-area:a;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,tM=k(kp)`
    color:${e=>e.theme.invoiceDueDateColor};
    @media screen and (max-width:425px){
        font-size:14px;
        grid-area:c;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,nM=k(na)`
    @media screen and (max-width:425px){
        font-size:16px;
        grid-area:b;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,rM=k.span`
    color:#7E88C3;
`,iM=k(Je)`
    @media screen and (max-width:425px){
        font-size:18px;
        grid-area:e;
    }
    @media screen and (max-width:768px) {
        font-size:12px
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,aM=k.div`
    grid-area:d;
    display:flex;
    align-items: center;
    gap:5px;
    border-radius: 6px;
    background-color:${({color:e})=>e};
    width:100px;
    justify-content: center;
    text-transform: capitalize;
    @media screen and (max-width:768px) {
        width:80px;
        font-size:12px;
    }
    @media screen and (min-width:1025px){
        width:8%;
    }
`,oM=k(vn)`
    @media screen and (max-width:425px) {
        display:none;
    }
    @media screen and (min-width:1025px){
        width:2%;
    }
`,sM=k(vn)`
    width: 8px;
    height: 8px;
    & circle {
        fill:${({color:e})=>e}
    }
`,lM=k(Je)`

    color:${({color:e})=>e};
`;k.div`
    display:grid;
    gap:20px;
`;const uM={invoiceBg:"#1E2139",invoiceDueDateColor:"#DFE3FA"},cM={invoiceBg:"#FFF",invoiceDueDateColor:"#858BB2"};function dM(e){const{isDarkMode:t}=Oc();return y(Mt,{theme:t?uM:cM,children:R(JA,{children:[R(eM,{children:[y(rM,{children:"#"}),e!=null&&e.id?e==null?void 0:e.id:"Missing ID"]}),y(tM,{children:e!=null&&e.paymentDue?"Due "+K(e==null?void 0:e.paymentDue).format("MMM Do YY"):"Missing Due Date"}),y(nM,{children:e!=null&&e.clientName?e==null?void 0:e.clientName:"Missing Client Name"}),y(iM,{children:e!=null&&e.total?"$ "+e.total.toFixed(2):"Missing Total Amount"}),R(aM,{color:e.paymentColor+"1A",children:[y(sM,{color:e.paymentColor,src:"\\assets\\icon-oval.svg"}),y(lM,{color:e.paymentColor,children:e!=null&&e.status?e==null?void 0:e.status:"Missing Status"})]}),y(oM,{src:"\\assets\\icon-arrow-right.svg"})]})})}function fh(){return fh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fh.apply(this,arguments)}function fM(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kt(e,t){return t||(t=e.slice(0)),e.raw=t,e}var F={},hM={get exports(){return F},set exports(e){F=e}},pM="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mM=pM,gM=mM;function Gw(){}function Kw(){}Kw.resetWarningCache=Gw;var yM=function(){function e(r,i,a,o,s,l){if(l!==gM){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Kw,resetWarningCache:Gw};return n.PropTypes=n,n};hM.exports=yM();function qw(){var e=kt([`
  height: `,`px;
  width: `,`px;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .spinner-circle {
    display: block;
    position: absolute;
    color: `,`;
    font-size: calc(`,`px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: `,`ms;
    border-left-width: calc(`,`px / 25);
    border-top-width: calc(`,`px / 25);
    border-left-color: `,`;
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
  }

  .spinner-line:nth-child(1) {
    animation: atom-spinner-animation-1 `,`ms
      linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(2) {
    animation: atom-spinner-animation-2 `,`ms
      linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(3) {
    animation: atom-spinner-animation-3 `,`ms
      linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
`]);return qw=function(){return e},e}k.div(qw(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function Xw(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  transform: rotate(45deg);

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: calc(`,`px / 7.5);
    width: calc(`,`px / 7.5);
    animation-duration: `,`ms;
    top: calc(`,`px / 2.3077);
    left: calc(`,`px / 2.3077);
    background-color: `,`;
    position: absolute;
    animation-iteration-count: infinite;
  }

  .rhombus:nth-child(2n + 0) {
    margin-right: 0;
  }

  .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(`,`ms * 1);
  }

  .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(`,`ms * 2);
  }

  .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(`,`ms * 3);
  }

  .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(`,`ms * 4);
  }

  .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(`,`ms * 5);
  }

  .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(`,`ms * 6);
  }

  .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(`,`ms * 7);
  }

  .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(`,`ms * 8);
  }

  .rhombus.big {
    height: calc(`,`px / 3);
    width: calc(`,`px / 3);
    animation-duration: `,`ms;
    top: calc(`,`px / 3);
    left: calc(`,`px / 3);
    background-color: `,`;
    animation: breeding-rhombus-spinner-animation-child-big
      `,` infinite;
    animation-delay: 0.5s;
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
`]);return Xw=function(){return e},e}k.div(Xw(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function Qw(){var e=kt([`
  height: `,`px;
  width: `,`px;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .circle {
    height: `,`px;
    width: `,`px;
    margin-left: `,`px;
    transform: rotate(45deg);
    border-radius: 10%;
    border: 3px solid `,`;
    overflow: hidden;
    background: transparent;
    animation: circles-to-rhombuses-animation
      `,`ms linear infinite;
  }
  .circle:nth-child(1) {
    animation-delay: calc(`,`ms * 1);
    margin-left: 0;
  }
  .circle:nth-child(2) {
    animation-delay: calc(`,`ms * 2);
  }
  .circle:nth-child(3) {
    animation-delay: calc(`,`ms * 3);
  }
  @keyframes circles-to-rhombuses-animation {
    0% {
      border-radius: 10%;
    }
    17.5% {
      border-radius: 10%;
    }
    50% {
      border-radius: 100%;
    }
    93.5% {
      border-radius: 10%;
    }
    100% {
      border-radius: 10%;
    }
  }
`]);return Qw=function(){return e},e}k.div(Qw(),function(e){return e.size},function(e){return(e.size+e.circleMarginLeft)*e.circleNum},function(e){return e.size},function(e){return e.size},function(e){return e.circleMarginLeft},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.delay},function(e){return e.delay},function(e){return e.delay});F.number,F.number,F.string,F.string,F.object;function Jw(){var e=kt([`
  height: `,`px;
  width: `,`px;
  padding: `,`px;
  overflow: hidden;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: `,`;
    animation: fingerprint-spinner-animation
      `,`ms
      cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .spinner-ring:nth-child(1) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 1);
  }
  .spinner-ring:nth-child(2) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 2);
  }
  .spinner-ring:nth-child(3) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 3);
  }
  .spinner-ring:nth-child(4) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 4);
  }
  .spinner-ring:nth-child(5) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 5);
  }
  .spinner-ring:nth-child(6) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 6);
  }
  .spinner-ring:nth-child(7) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 7);
  }
  .spinner-ring:nth-child(8) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 8);
  }
  .spinner-ring:nth-child(9) {
    height: `,`px;
    width: `,`px;
    animation-delay: calc(50ms * 9);
  }

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
`]);return Jw=function(){return e},e}k.div(Jw(),function(e){return e.size},function(e){return e.size},function(e){return e.containerPadding},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.ringBase+0*e.ringBase},function(e){return e.ringBase+0*e.ringBase},function(e){return e.ringBase+1*e.ringBase},function(e){return e.ringBase+1*e.ringBase},function(e){return e.ringBase+2*e.ringBase},function(e){return e.ringBase+2*e.ringBase},function(e){return e.ringBase+3*e.ringBase},function(e){return e.ringBase+3*e.ringBase},function(e){return e.ringBase+4*e.ringBase},function(e){return e.ringBase+4*e.ringBase},function(e){return e.ringBase+5*e.ringBase},function(e){return e.ringBase+5*e.ringBase},function(e){return e.ringBase+6*e.ringBase},function(e){return e.ringBase+6*e.ringBase},function(e){return e.ringBase+7*e.ringBase},function(e){return e.ringBase+7*e.ringBase},function(e){return e.ringBase+8*e.ringBase},function(e){return e.ringBase+8*e.ringBase});F.number,F.number,F.string,F.string,F.object;function e1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .dots-container {
    height: `,`px;
    width: `,`px;
  }
  .smaller-dot {
    background: `,`;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: flower-spinner-smaller-dot-animation
      `,`ms 0s infinite both;
  }
  .bigger-dot {
    background: `,`;
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation: flower-spinner-bigger-dot-animation
      `,`ms 0s infinite both;
  }
  @keyframes flower-spinner-bigger-dot-animation {
    0%,
    100% {
      box-shadow: 0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`;
    }
    50% {
      transform: rotate(180deg);
    }
    25%,
    75% {
      box-shadow: `,`px 0 0
          `,`,
        -`,"px 0 0 ",`,
        0 `,"px 0 ",`,
        0 -`,"px 0 ",`,
        `,"px -",`px
          0 `,`,
        `,"px ",`px
          0 `,`,
        -`,"px -",`px
          0 `,`,
        -`,"px ",`px
          0 `,`;
    }
    100% {
      transform: rotate(360deg);
      box-shadow: 0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`;
    }
  }
  @keyframes flower-spinner-smaller-dot-animation {
    0%,
    100% {
      box-shadow: 0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`;
    }
    25%,
    75% {
      box-shadow: `,`px 0 0
          `,`,
        -`,"px 0 0 ",`,
        0 `,"px 0 ",`,
        0 -`,"px 0 ",`,
        `,"px -","px 0 ",`,
        `,"px ",`px 0
          `,`,
        -`,"px -",`px 0
          `,`,
        -`,"px ","px 0 ",`;
    }
    100% {
      box-shadow: 0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`,
        0px 0px 0px `,`;
    }
  }
`]);return e1=function(){return e},e}k.div(e1(),function(e){return e.size},function(e){return e.size},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color});F.number,F.number,F.string,F.string,F.object;function t1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  animation: fulfilling-bouncing-circle-spinner-animation infinite
    `,`ms ease;

  * {
    box-sizing: border-box;
  }

  .orbit {
    height: `,`px;
    width: `,`px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: calc(`,`px * 0.03) solid
      `,`;
    animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite
      `,`ms ease;
  }
  .circle {
    height: `,`px;
    width: `,`px;
    color: `,`;
    display: block;
    border-radius: 50%;
    position: relative;
    border: calc(`,`px * 0.1) solid
      `,`;
    animation: fulfilling-bouncing-circle-spinner-circle-animation infinite
      `,`ms ease;
    transform: rotate(0deg) scale(1);
  }
  @keyframes fulfilling-bouncing-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1);
    }
    62.5% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1);
    }
    87.5% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
    0% {
      transform: scale(1);
      border-color: transparent;
      border-top-color: inherit;
    }
    16.7% {
      border-color: transparent;
      border-top-color: initial;
      border-right-color: initial;
    }
    33.4% {
      border-color: transparent;
      border-top-color: inherit;
      border-right-color: inherit;
      border-bottom-color: inherit;
    }
    50% {
      border-color: inherit;
      transform: scale(1);
    }
    62.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    75% {
      border-color: inherit;
      transform: scale(1);
      opacity: 1;
    }
    87.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    100% {
      border-color: transparent;
      border-top-color: inherit;
      transform: scale(1);
    }
  }
`]);return t1=function(){return e},e}k.div(t1(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function n1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  border: 4px solid `,`;
  animation: fulfilling-square-spinner-animation
    `,`ms infinite ease;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: `,`;
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation
      `,`ms infinite ease-in;
  }

  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`]);return n1=function(){return e},e}k.div(n1(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function r1(){var e=kt([`
  width: `,`px;
  height: `,`px;
  border-radius: 100%;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(`,`px / 10) solid transparent;
  }
  .circle.circle-1 {
    border-top-color: `,`;
    animation: half-circle-spinner-animation
      `,`ms infinite;
  }
  .circle.circle-2 {
    border-bottom-color: `,`;
    animation: half-circle-spinner-animation
      `,`ms infinite alternate;
  }
  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]);return r1=function(){return e},e}k.div(r1(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function i1(){var e=kt([`
  height: `,`px;
  width: `,`px;

  * {
    box-sizing: border-box;
  }

  .dot {
    width: `,`px;
    height: `,`px;
    margin: 0 calc(`,`px / 2);
    border: calc(`,"px / 5) solid ",`;
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation
      `,`ms ease infinite 0ms;
  }
  .dot:nth-child(1) {
    animation-delay: calc(`,`ms * 1);
  }
  .dot:nth-child(2) {
    animation-delay: calc(`,`ms * 2);
  }
  .dot:nth-child(3) {
    animation-delay: calc(`,`ms * 3);
  }
  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`]);return i1=function(){return e},e}k.div(i1(),function(e){return e.size},function(e){return 2*e.size*e.dotsNum},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDelay},function(e){return e.animationDelay},function(e){return e.animationDelay});F.number,F.number,F.string,F.string,F.object;function a1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .spinnerBlock {
    animation: intersecting-circles-spinners-animation
      `,`ms linear infinite;
    transform-origin: center;
    display: block;
    height: `,`px;
    width: `,`px;
  }
  .circle {
    display: block;
    border: 2px solid `,`;
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .circle:nth-child(1) {
    left: 0;
    top: 0;
  }
  .circle:nth-child(2) {
    left: `,`px;
    top: `,`px;
  }
  .circle:nth-child(3) {
    left: `,`px;
    top: `,`px;
  }
  .circle:nth-child(4) {
    left: 0;
    top: `,`px;
  }
  .circle:nth-child(5) {
    left: `,`px;
    top: `,`px;
  }
  .circle:nth-child(6) {
    left: `,`px;
    top: `,`px;
  }
  .circle:nth-child(7) {
    left: 0;
    top: `,`px;
  }
  @keyframes intersecting-circles-spinners-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`]);return a1=function(){return e},e}k.div(a1(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.circleSize},function(e){return e.circleSize},function(e){return e.color},function(e){return e.circleSize*-.36},function(e){return e.circleSize*.2},function(e){return e.circleSize*-.36},function(e){return e.circleSize*-.2},function(e){return e.circleSize*-.36},function(e){return e.circleSize*.36},function(e){return e.circleSize*-.2},function(e){return e.circleSize*.36},function(e){return e.circleSize*.2},function(e){return e.circleSize*.36});F.number,F.number,F.string,F.string,F.object;function o1(){var e=kt([`
  width: `,`px;
  height: `,`px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: `,`px;
    width: `,`px;
    background-color: `,`;
    left: `,`px;
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation
      `,`ms linear infinite;
  }
  .rhombus:nth-child(1) {
    animation-delay: calc(`,`ms * 1 / -1.5);
  }
  .rhombus:nth-child(2) {
    animation-delay: calc(`,`ms * 2 / -1.5);
  }
  .rhombus:nth-child(3) {
    animation-delay: calc(`,`ms * 3 / -1.5);
  }
  @keyframes looping-rhombuses-spinner-animation {
    0% {
      transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
    }
  }
`]);return o1=function(){return e},e}k.div(o1(),function(e){return e.size*4},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size*4},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function s1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  border-radius: 50%;
  perspective: 800px;

  * {
    box-sizing: border-box;
  }

  .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .orbit:nth-child(1) {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation
      `,`ms linear infinite;
    border-bottom: 3px solid `,`;
  }
  .orbit:nth-child(2) {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation
      `,`ms linear infinite;
    border-right: 3px solid `,`;
  }
  .orbit:nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation
      `,`ms linear infinite;
    border-top: 3px solid `,`;
  }
  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`]);return s1=function(){return e},e}k.div(s1(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color});F.number,F.number,F.string,F.string,F.object;function l1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .pixel-spinner-inner {
    width: `,`px;
    height: `,`px;
    background-color: `,`;
    color: `,`;

    box-shadow: `,`px
        `,`px 0 0,
      `,`px
        `,`px 0 0,
      `,`px
        `,`px 0 0,
      `,`px
        `,`px 0 0,
      0 `,`px 0 0,
      `,`px 0 0 0,
      `,`px 0 0 0,
      0 `,`px 0 0;
    animation: pixel-spinner-animation `,`ms
      linear infinite;
  }

  @keyframes pixel-spinner-animation {
    50% {
      box-shadow: `,`px
          `,`px 0 0,
        `,`px
          `,`px 0 0,
        `,"px ",`px
          0 0,
        `,"px ",`px
          0 0,
        0 `,`px 0 0,
        `,`px 0 0 0,
        `,`px 0 0 0,
        0 `,`px 0 0;
    }
    75% {
      box-shadow: `,`px
          `,`px 0 0,
        `,`px
          `,`px 0 0,
        `,"px ",`px
          0 0,
        `,"px ",`px
          0 0,
        0 `,`px 0 0,
        `,`px 0 0 0,
        `,`px 0 0 0,
        0 `,`px 0 0;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`]);return l1=function(){return e},e}k.div(l1(),function(e){return e.size},function(e){return e.size},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.color},function(e){return e.color},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.animationDuration},function(e){return e.pixelSize*2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*-1});F.number,F.number,F.string,F.string,F.object;function u1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: radar-spinner-animation `,`ms
      infinite;
  }
  .circle:nth-child(1) {
    padding: `,`px;
    animation-delay: `,`ms;
  }
  .circle:nth-child(2) {
    padding: `,`px;
    animation-delay: `,`ms;
  }
  .circle:nth-child(3) {
    padding: `,`px;
    animation-delay: `,`ms;
  }
  .circle:nth-child(4) {
    padding: `,`px;
    animation-delay: 0ms;
  }
  .circle-inner,
  .circle-inner-container {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: `,`px solid transparent;
  }
  .circle-inner {
    border-left-color: `,`;
    border-right-color: `,`;
  }
  @keyframes radar-spinner-animation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`]);return u1=function(){return e},e}var vM=k.div(u1(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.borderWidth*2*0},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*1},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*2},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*3},function(e){return e.borderWidth},function(e){return e.color},function(e){return e.color}),xM={size:F.number,animationDuration:F.number,color:F.string,className:F.string,style:F.object};function wM(e){return Array.from({length:e}).map(function(t,n){return ye.createElement("div",{key:n,className:"circle"},ye.createElement("div",{className:"circle-inner-container"},ye.createElement("div",{className:"circle-inner"})))})}var c1=function(t){var n=t.size,r=n===void 0?110:n,i=t.color,a=i===void 0?"#fff":i,o=t.animationDuration,s=o===void 0?2e3:o,l=t.className,u=l===void 0?"":l,c=t.style,d=fM(t,["size","color","animationDuration","className","style"]),f=r*5/110;return ye.createElement(vM,fh({size:r,color:a,animationDuration:s,className:"radar-spinner"+(u?" "+u:""),style:c,borderWidth:f},d),wM(4))};c1.propTypes=xM;function d1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation `,`ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(`,`px * 0.25 / 1.3);
    width: calc(`,`px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(`,`px * 0.04 / 1.3) solid
      `,`;
    position: absolute;
    animation-duration: `,`ms;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
  }
  .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
  }
  .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
  }
  .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
  }
  @keyframes scaling-squares-animation {
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`]);return d1=function(){return e},e}k.div(d1(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function f1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  top: `,`px;

  * {
    box-sizing: border-box;
  }

  .square {
    height: `,`px;
    width: `,`px;
    top: `,`px;
    margin-right: calc(`,`px / 3);
    margin-top: calc(`,`px / 3);
    background: `,`;
    float: left;
    position: relative;
    opacity: 0;
    animation: self-building-square-spinner
      `,`ms infinite;
  }
  .square:nth-child(1) {
    animation-delay: calc(`,`ms * 6);
  }
  .square:nth-child(2) {
    animation-delay: calc(`,`ms * 7);
  }
  .square:nth-child(3) {
    animation-delay: calc(`,`ms * 8);
  }
  .square:nth-child(4) {
    animation-delay: calc(`,`ms * 3);
  }
  .square:nth-child(5) {
    animation-delay: calc(`,`ms * 4);
  }
  .square:nth-child(6) {
    animation-delay: calc(`,`ms * 5);
  }
  .square:nth-child(7) {
    animation-delay: calc(`,`ms * 0);
  }
  .square:nth-child(8) {
    animation-delay: calc(`,`ms * 1);
  }
  .square:nth-child(9) {
    animation-delay: calc(`,`ms * 2);
  }
  .clear {
    clear: both;
  }
  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }
`]);return f1=function(){return e},e}k.div(f1(),function(e){return e.size},function(e){return e.size},function(e){return-1*e.initialTopPosition},function(e){return e.size/4},function(e){return e.size/4},function(e){return-1*e.initialTopPosition},function(e){return e.size/4},function(e){return e.size/4},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05});F.number,F.number,F.string,F.string,F.object;function h1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(`,`px * 0.05) solid transparent;
    border-top-color: `,`;
    border-left-color: `,`;
    animation: semipolar-spinner-animation
      `,`ms infinite;
  }
  .ring:nth-child(1) {
    height: calc(
      `,"px - ",`px * 0.2 * 0
    );
    width: calc(
      `,"px - ",`px * 0.2 * 0
    );
    top: calc(`,`px * 0.1 * 0);
    left: calc(`,`px * 0.1 * 0);
    animation-delay: calc(`,`ms * 0.1 * 4);
    z-index: 5;
  }
  .ring:nth-child(2) {
    height: calc(
      `,"px - ",`px * 0.2 * 1
    );
    width: calc(
      `,"px - ",`px * 0.2 * 1
    );
    top: calc(`,`px * 0.1 * 1);
    left: calc(`,`px * 0.1 * 1);
    animation-delay: calc(`,`ms * 0.1 * 3);
    z-index: 4;
  }
  .ring:nth-child(3) {
    height: calc(
      `,"px - ",`px * 0.2 * 2
    );
    width: calc(
      `,"px - ",`px * 0.2 * 2
    );
    top: calc(`,`px * 0.1 * 2);
    left: calc(`,`px * 0.1 * 2);
    animation-delay: calc(`,`ms * 0.1 * 2);
    z-index: 3;
  }
  .ring:nth-child(4) {
    height: calc(
      `,"px - ",`px * 0.2 * 3
    );
    width: calc(
      `,"px - ",`px * 0.2 * 3
    );
    top: calc(`,`px * 0.1 * 3);
    left: calc(`,`px * 0.1 * 3);
    animation-delay: calc(`,`ms * 0.1 * 1);
    z-index: 2;
  }
  .ring:nth-child(5) {
    height: calc(
      `,"px - ",`px * 0.2 * 4
    );
    width: calc(
      `,"px - ",`px * 0.2 * 4
    );
    top: calc(`,`px * 0.1 * 4);
    left: calc(`,`px * 0.1 * 4);
    animation-delay: calc(`,`ms * 0.1 * 0);
    z-index: 1;
  }
  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.7);
    }
  }
`]);return h1=function(){return e},e}k.div(h1(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;function p1(){var e=kt([`
  height: `,`px;
  width: `,`px;

  * {
    box-sizing: border-box;
  }

  .spring-spinner-part {
    overflow: hidden;
    height: calc(`,`px / 2);
    width: `,`px;
  }
  .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }
  .spring-spinner-rotator {
    width: `,`px;
    height: `,`px;
    border: calc(`,`px / 7) solid transparent;
    border-right-color: `,`;
    border-top-color: `,`;
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation `,`ms
      ease-in-out infinite;
    transform: rotate(-200deg);
  }
  @keyframes spring-spinner-animation {
    0% {
      border-width: calc(`,`px / 7);
    }
    25% {
      border-width: calc(`,`px / 23.33);
    }
    50% {
      transform: rotate(115deg);
      border-width: calc(`,`px / 7);
    }
    75% {
      border-width: calc(`,`px / 23.33);
    }
    100% {
      border-width: calc(`,`px / 7);
    }
  }
`]);return p1=function(){return e},e}k.div(p1(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size});F.number,F.number,F.string,F.string,F.object;function m1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(`,`px * 0.25 / 1.3);
    width: calc(`,`px * 0.25 / 1.3);
    animation-duration: `,`ms;
    border: calc(`,`px * 0.04 / 1.3) solid
      `,`;
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: swapping-squares-animation-child-1;
    animation-delay: `,`ms;
  }
  .square:nth-child(2) {
    animation-name: swapping-squares-animation-child-2;
    animation-delay: 0ms;
  }
  .square:nth-child(3) {
    animation-name: swapping-squares-animation-child-3;
    animation-delay: `,`ms;
  }
  .square:nth-child(4) {
    animation-name: swapping-squares-animation-child-4;
    animation-delay: 0ms;
  }
  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`]);return m1=function(){return e},e}k.div(m1(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration*.5},function(e){return e.animationDuration*.5});F.number,F.number,F.string,F.string,F.object;function g1(){var e=kt([`
  height: `,`px;
  width: `,`px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    display: block;
    border-radius: 50%;
    border: 3px solid `,`;
    opacity: 1;
  }
  .circle:nth-child(1) {
    height: `,`px;
    width: `,`px;
    animation: trinity-rings-spinner-circle1-animation
      `,`ms infinite linear;
    border-width: 3px;
  }
  .circle:nth-child(2) {
    height: calc(`,`px * 0.65);
    width: calc(`,`px * 0.65);
    animation: trinity-rings-spinner-circle2-animation
      `,`ms infinite linear;
    border-width: 2px;
  }
  .circle:nth-child(3) {
    height: calc(`,`px * 0.1);
    width: calc(`,`px * 0.1);
    animation: trinity-rings-spinner-circle3-animation
      `,`ms infinite linear;
    border-width: 1px;
  }
  @keyframes trinity-rings-spinner-circle1-animation {
    0% {
      transform: rotateZ(20deg) rotateY(0deg);
    }
    100% {
      transform: rotateZ(100deg) rotateY(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle2-animation {
    0% {
      transform: rotateZ(100deg) rotateX(0deg);
    }
    100% {
      transform: rotateZ(0deg) rotateX(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle3-animation {
    0% {
      transform: rotateZ(100deg) rotateX(-360deg);
    }
    100% {
      transform: rotateZ(-360deg) rotateX(360deg);
    }
  }
`]);return g1=function(){return e},e}k.div(g1(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration});F.number,F.number,F.string,F.string,F.object;const _M=k.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-100;
`,kM=k.h1`
    font-size:40px;
    color:${e=>e.theme.loadingColor};
`;function y1(e){const t={loadingColor:"white"},n={loadingColor:"black"};return y(Mt,{theme:e.isDarkMode?t:n,children:R(_M,{children:[y(c1,{color:"#9277FF"}),y(kM,{children:"Loading..."})]})})}const SM=k.div`
    width:40vw;
    background: ${e=>e.theme.modalBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding:20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:10;
    display:flex;
    flex-direction:column;
    @media screen and (max-width:768px) {
        width:75vw;
    }
    transition: ease-in 0.3s;
`,bM=k.p`
    font-family: 'League Spartan';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: ${e=>e.theme.warningColor};
    @media screen and (min-width:768px) {
        font-size:20px;
    }
`,CM=k.div`
    background: rgba(0, 0, 0, 0.65);
    height:100%;
    width:100%;
    position:fixed;
    z-index:5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,DM=k.div`
    display:flex;
    justify-content:flex-end;
`,EM=k(Ps)`
    background-color:${e=>e.theme.cancelBtnBg};
    color:${e=>e.theme.cancelBtnColor};
    &:hover{
        background-color:${e=>e.theme.cancelBgHover};
    }
`;function v1(e){const t=ao(),{isAuthenticated:n,user:r}=io();function i(){if(n){if(n){const s=e.data.filter(l=>{if(l.id!==e.invoiceData.id)return l});e.setData(s),localStorage.setItem(`${r==null?void 0:r.email}`,JSON.stringify(s))}}else{const s=e.data.filter(l=>{if(l.id!==e.invoiceData.id)return l});e.setData(s),localStorage.setItem("data",JSON.stringify(s))}t("..")}const a={modalBg:"#1E2139",cancelBtnColor:"#DFE3FA",cancelBtnBg:"#252945",cancelBgHover:"#2b2e47",cancelColor:"#DFE3FA",warningColor:"#DFE3FA"},o={modalBg:"#FFF",cancelBtnBg:"#DFE3FA",cancelBtnColor:"#7E88C3",cancelBgHover:"#F9FAFE",cancelColor:"#7E88C3",warningColor:"#7E88C3"};return y(Mt,{theme:e.isDarkMode?a:o,children:y(CM,{children:R(SM,{children:[y(ss,{children:"Confirm Deletion"}),R(bM,{children:["Are you sure you want to delete invoice #",e.invoiceData.id,"? This action cannot be undone."]}),R(DM,{children:[y(EM,{onClick:e.handleWarning,children:"Cancel"}),y(Sp,{onClick:i,children:"Delete"})]})]})})})}const TM=k.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    text-align: center;
`,OM=k.img`
    width:40%;
    @media screen and (max-width:1440px) {
        width:50%
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`,PM=k.div`
    width:30%;
    text-align: center;
    @media screen and (max-width:1440px) {
        width:50%
    }
    @media screen and (max-width:1024px) {
        width:40%;
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`,AM=k(kp)`
    font-family: League Spartan;
    font-size:28px;
    text-align:center;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
    color: ${({theme:e})=>e.paragraphText};
    @media screen and (max-width:768px) {
        font-size:20px
    }
`,MM=k(lC)`
    font-size:40px;
    @media screen and (max-width:768px) {
        font-size:30px
    }
`,IM=k.span`
    font-weight:700;
`;function wy(e){const t={paragraphText:"#DFE3FA"},n={paragraphText:"#888EB0"};return y(Mt,{theme:e.isDarkMode?t:n,children:R(TM,{children:[y(OM,{src:"\\assets\\illustration-empty.svg"}),R(PM,{children:[y(MM,{children:"There is nothing here"}),R(AM,{children:["Create an invoice by clicking the ",y(IM,{children:"New Invoice "}),"button and get started"]})]})]})})}function RM(){const{loginWithRedirect:e,isAuthenticated:t}=io();return y(Gi,{onClick:()=>e(),children:"Sign In"})}function x1(){const{logout:e}=io();return y(Gi,{onClick:()=>e(),children:"Sign Out"})}const NM=k.div`
    display:grid;
    gap:25px;
    align-content:start;
`,zM=k.div`
    height:100%;
    @media screen and (max-width:1024px){
        margin-top:50px;
    }
`,FM=k.div`
    display:flex;
    justify-content: flex-end;
`;function LM(e){sC();const[t,n]=T.useState(""),[r,i]=T.useState(!1),{setIsFormOpen:a,isDarkMode:o,setUserFormData:s,userFormData:l}=Oc(),[u,c]=T.useState(!1),[d,f]=T.useState(!0),[x,v]=T.useState(!0),[p,S]=T.useState(!0),[m,h]=T.useState(e.data),[g,C]=T.useState(e.dataLoaded),[w,D]=T.useState(["draft","pending","paid"]),E={data:e.data,setData:e.setData,dataLoaded:e.dataLoaded,setDataLoaded:e.setDataLoaded,isOpen:u,setIsOpen:c,isDraft:d,setIsDraft:f,isPending:x,setIsPending:v,isPaid:p,setIsPaid:S},{isAuthenticated:M,user:W}=io();return T.useEffect(()=>{if(M&&e.dataLoaded&&l!==void 0){const z=e.data,$=[l,...z];localStorage.setItem(`${W==null?void 0:W.email}`,JSON.stringify($)),e.setData($),s(void 0)}else if(!M&&e.dataLoaded&&l!==void 0){const z=e.data,$=[l,...z];localStorage.setItem("data",JSON.stringify($)),e.setData($),s(void 0)}},[l]),T.useEffect(()=>{d&&!w.includes("draft")?D([...w,"draft"]):x&&!w.includes("pending")?D([...w,"pending"]):p&&!w.includes("paid")&&D([...w,"paid"]),!d&&w.includes("draft")?D(w.filter(z=>!z.includes("draft"))):!x&&w.includes("pending")?D(w.filter(z=>!z.includes("pending"))):!p&&w.includes("paid")&&D(w.filter(z=>!z.includes("paid")))},[d,x,p]),T.useEffect(()=>{if(e.dataLoaded)if(p&&!x&&!d){const z=e.data.filter($=>{if($.status.includes("paid"))return $});h(z)}else if(x&&!p&&!d){const z=e.data.filter($=>{if($.status.includes("pending"))return $});h(z)}else if(d&&!p&&!x){const z=e.data.filter($=>{if($.status.includes("draft"))return $});h(z)}else if(p&&x&&!d){const z=e.data.filter($=>{if($.status.includes("paid")||$.status.includes("pending"))return $});h(z)}else if(p&&!x&&d){const z=e.data.filter($=>{if($.status.includes("paid")||$.status.includes("draft"))return $});h(z)}else if(!p&&x&&d){const z=e.data.filter($=>{if($.status.includes("draft")||$.status.includes("pending"))return $});h(z)}else if(p&&x&&d){const z=e.data.filter($=>{if($.status.includes("paid")||$.status.includes("pending")||$.status.includes("draft"))return $});h(z)}else!p&&!x&&!d&&h(["empty"])},[w]),T.useEffect(()=>{e.dataLoaded&&(h(e.data),C(!0))},[e.dataLoaded,e.data]),T.useEffect(()=>{if(g&&m[0]!="empty"){const z=m.map($=>{let ae="black";return e.data.length>0&&($.status==="paid"?ae="#33D69F":$.status==="pending"?ae="#FF8F00":$.status==="draft"&&(ae="#DFE3FA")),y(Ex,{to:{pathname:`/invoice/${$.id}`,search:`?data=${JSON.stringify($)}`},children:y(dM,{id:$.id,createdAt:$.createdAt,paymentDue:$.paymentDue,description:$.description,paymentTerms:$.paymentTerms,clientName:$.clientName,clientEmail:$.clientEmail,senderAddress:$.senderAddress,status:$.status,clientAddress:$.clientAddress,items:$.items,total:$.total,isDarkMode:o,paymentColor:ae})},$.id)});n(z)}else n(y(wy,{}))},[m]),R(zM,{children:[y(FM,{children:M?y(x1,{}):y(RM,{})}),r&&y(v1,{}),g&&y(QA,{...E,setIsFormOpen:a}),g?y(NM,{children:t.length>=1?t:y(wy,{isDarkMode:o})}):y(y1,{isDarkMode:o})]})}const jM=k.div`
    background: ${e=>e.theme.invoiceHeaderBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    display:flex;
    justify-content:space-between;
    padding:20px 50px;
    @media screen and (max-width:1024px){
        padding:10px;
    }
    @media screen and (max-width:425px){
        padding:5px;
    }
`,$M=k.div`
    display:flex;
    align-items:center;
    gap:20px;
    @media screen and (max-width:425px) {
        justify-content: space-between;
        width:100%;
    }
`,UM=k.div`
    display:flex;
    align-items: center;
    gap:10px;
    @media screen and (max-width:425px) {
        display:none;
    }
`,BM=k.div`
    display:flex;
    align-items: center;
    gap:5px;
    border-radius: 6px;
    background-color:${({color:e})=>e};
    width:100px;
    justify-content: center;
    text-transform: capitalize;
    @media screen and (max-width:768px) {
        width:70px;
        margin-right:5px;
    }
    @media screen and (max-width:425px) {
        width:100px;
        padding:0 5px;
    }
`,VM=k(vn)`
    width: 8px;
    height: 8px;
    @media screen and (max-width:425px) {
        width:5px;
        height:5px;
    }
    & circle {
        fill:${({color:e})=>e}
    }
`,YM=k(Je)`
    color:${({color:e})=>e};
`;k.div`
    display:flex;
    align-items: center;
    gap:15px;
    width:90%;
    padding: 10px 20px;
`;const WM=k(Ps)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,HM=k(Sp)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,_y=k(Gi)`
    white-space:nowrap;
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,ZM=k(kp)`
    color: ${e=>e.theme.statusHeading};
`,GM=k(WM)`
    background: ${({theme:e})=>e.editBtnBg};
    color: ${({theme:e})=>e.editBtnColor};
    &:hover{
        background: ${({theme:e})=>e.editBtnBgHover};
        color: ${({theme:e})=>e.editBtnColorHover};
    }
`;function KM(e){const t={invoiceHeaderBg:"#1E2139",statusHeading:"#DFE3FA",editBtnBg:"#252945",editBtnBgHover:"#FFFFFF",editBtnColor:"#DFE3FA",editBtnColorHover:"#7E88C3"},n={invoiceHeaderBg:"#FFF",statusHeading:"#858BB2",editBtnBg:"#F9FAFE",editBtnBgHover:"#DFE3FA",editBtnColor:"#7E88C3",editBtnColorHover:"#7E88C3"};let r="black";return e.data.status==="paid"?r="#33D69F":e.data.status==="pending"?r="#FF8F00":e.data.status==="draft"&&(r="#DFE3FA"),y(Mt,{theme:e.isDarkMode?t:n,children:R(jM,{children:[R($M,{children:[y(ZM,{children:"Status"}),R(BM,{color:r+"1A",children:[y(VM,{color:r,src:"\\assets\\icon-oval.svg"}),y(YM,{color:r,children:e.data.status})]})]}),R(UM,{children:[y(GM,{onClick:e.handleEdit,children:"Edit"}),y(HM,{onClick:e.handleWarning,children:"Delete"}),e.data.status!=="paid"&&Object.values(e.data).some(i=>i==="")?y(_y,{disabled:!0,children:"Mark as Paid"}):y(_y,{onClick:e.handleStatus,children:"Mark as Paid"})]})]})})}const qM=k.div`
    display:grid;
    grid-template-areas: 
    "desc . . . addr"
    "desc . . . addr"
    "date bill email email ."
    "due bill . . ."
    ;
    padding:50px;
    justify-content: space-betweeen;
    @media screen and (max-width:1024px){
        padding:10px;
    }
    @media screen and (max-width:425px){
        padding:15px;
        grid-template-areas:
        "desc desc"
        "addr addr"
        "date bill"
        "due bill"
        "email ."
    }
`,XM=k.div`
    grid-area: desc;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,QM=k.div`
    grid-area: addr;
    justify-self:center;
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,JM=k.div`
    grid-area: date;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,eI=k.div`
    grid-area: bill;
    align-self: flex-end;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,tI=k.div`
    justify-self: flex-end;
    grid-area: email;
    @media screen and (max-width:425px){
        justify-self: flex-start;
    }
`,nI=k.div`
    grid-area: due;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,rI=k(Je)`
    @media screen and (max-width:425px) {
        font-size:18px;
    }
    @media screen and (max-width:768px) {
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,iI=k.span`
    color:#7E88C3;
`,rr=k(na)`
    color: ${e=>e.theme.paragraphColor};
`,ul=k(rr)`
    text-align:right;
    @media screen and (max-width: 425px){
        text-align:left;
    }
`;function aI(e){const t={paragraphColor:"#DFE3FA"},n={paragraphColor:"#7E88C3"};return y(Mt,{theme:e.isDarkMode?t:n,children:R(qM,{children:[R(XM,{children:[R(rI,{children:[y(iI,{children:"#"}),e.data.id?e.data.id:"Missing ID"]}),y(rr,{children:e.data.description?e.data.description:"Missing Description"})]}),R(QM,{children:[y(ul,{children:e.data.senderAddress.street?e.data.senderAddress.street:"Missing Street"}),y(ul,{children:e.data.senderAddress.city?e.data.senderAddress.city:"Missing City"}),y(ul,{children:e.data.senderAddress.postCode?e.data.senderAddress.postCode:"Missing Post Code"}),y(ul,{children:e.data.senderAddress.country?e.data.senderAddress.country:"Missing Country"})]}),R(JM,{children:[y(rr,{children:"Invoice Date"}),y(Je,{children:e.data.createdAt?e.data.createdAt:"Missing Creation Date"})]}),R(nI,{children:[y(rr,{children:"Payment Due"}),y(Je,{children:e.data.paymentDue?e.data.paymentDue:"Missing Due Date"})]}),R(eI,{children:[y(rr,{children:"Bill To"}),y(Je,{children:e.data.clientName}),y(rr,{children:e.data.clientAddress.street?e.data.clientAddress.street:"Missing Street"}),y(rr,{children:e.data.clientAddress.city?e.data.clientAddress.city:"Missing City"}),y(rr,{children:e.data.clientAddress.postCode?e.data.clientAddress.postCode:"Missing Post Code"}),y(rr,{children:e.data.clientAddress.country?e.data.clientAddress.country:"Missing Country"})]}),R(tI,{children:[y(rr,{children:"Sent to"}),y(Je,{children:e.data.clientEmail?e.data.clientEmail:"Missing Email"})]})]})})}const oI=k.div`
    display:flex;
    flex-direction:column;
    padding:50px;
    @media screen and (max-width:1024px){
        padding: 30px;
    }
    @media screen and (max-width:700px){
        padding:15px;
    }
`,sI=k.div`
    @media screen and (max-width:700px){
        padding:5px;
        gap:5px;
        grid-template-columns: 1.5fr 1fr 1fr 1fr;
    }
    padding:10px 30px;
    background: ${e=>e.theme.invoiceBillingBg};
    border-radius: 8px 8px 0px 0px;
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    @media screen and (max-width:425px){
        grid-template-columns: 1fr;
        padding:30px;
    }
`,lI=k.div`
    @media screen and (min-width:426px) {
        display:none;
    }
    grid-template-columns: none;
    display:grid;
    grid-template-areas: 
    "item . total"
    "container . total"
    ;
`,uI=k.div`
    @media screen and (max-width:700px){
        padding:5px;
    }
    padding:10px 30px;
    height:10vh;
    border-radius: 0px 0px 8px 8px;
    background:${e=>e.theme.invoiceAmountBg};
    display:flex;
    align-items: center;
    justify-content: space-between;
`,cI=k(na)`
    color: ${e=>e.theme.itemNameHeadingColor};
    font-size: 18px;
    @media screen and (max-width:425px){
        display:none;
    }
`,dI=k(na)`
    color: ${e=>e.theme.quantityHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,fI=k(na)`
    color: ${e=>e.theme.priceHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,hI=k(na)`
    color: ${e=>e.theme.totalHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,pI=k(Je)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (max-width:425px){
        display:none;
    }
`,mI=k(Je)`
    color: ${e=>e.theme.quantityColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,gI=k(Je)`
    color: ${e=>e.theme.priceColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,yI=k(Je)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,vI=k(Je)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: item;
    margin:0;
`,xI=k(Je)`
    color: ${e=>e.theme.quantityColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: quantity;
    color: ${e=>e.theme.mobileContainerColor};
    margin:0;
`,wI=k(Je)`
    color: ${e=>e.theme.priceColor};
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: price;
    color: ${e=>e.theme.mobileContainerColor};
    margin:0;
`,_I=k(Je)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: total;
    align-self: center;
    margin:0;
`,kI=k(Je)`
    color: #FFFFFF;
`,SI=k(ss)`
    font-size: 24px;
    line-height: 32px;
    text-align: right;
    color:#FFF;
`,bI=k.div`
    display:flex;
    align-items: center;
    grid-area:container;
    gap:5px;
    color: ${e=>e.theme.mobileContainerColor};
`;function CI(e){const t={invoiceBillingBg:"#252945;",itemNameHeadingColor:"#DFE3FA",quantityHeadingColor:"#DFE3FA",priceHeadingColor:"#DFE3FA",totalHeadingColor:"#DFE3FA",quantityColor:"#DFE3FA",priceColor:"#DFE3FA",invoiceAmountBg:"#0C0E16",mobileContainerColor:"#888EB0"},n={invoiceBillingBg:"#F9FAFE",itemNameHeadingColor:"#7E88C3",quantityHeadingColor:"#7E88C3",priceHeadingColor:"#7E88C3",totalHeadingColor:"#7E88C3",quantityColor:"#7E88C3",priceColor:"#7E88C3",invoiceAmountBg:"#373B53",mobileContainerColor:"#7E88C3"},r=e.data.items.map(i=>R(T.Fragment,{children:[y(pI,{children:i.name},Fn()),y(mI,{children:i.quantity},Fn()),R(gI,{children:[y("span",{children:"$ "}),i.price.toFixed(2)]},Fn()),R(yI,{children:[y("span",{children:"$ "}),i.total.toFixed(2)]},Fn()),R(lI,{children:[y(vI,{children:i.name},Fn()),R(bI,{children:[y(xI,{children:i.quantity},Fn()),y(Je,{children:"x"}),R(wI,{children:[y("span",{children:"$ "}),i.price.toFixed(2)]},Fn())]}),R(_I,{children:[y("span",{children:"$ "}),i.total.toFixed(2)]},Fn())]})]},Fn()));return y(Mt,{theme:e.isDarkMode?t:n,children:R(oI,{children:[R(sI,{children:[y(cI,{children:"Item Name"}),y(dI,{children:"QTY."}),y(fI,{children:"Price"}),y(hI,{children:"Total"}),r]},Fn()),R(uI,{children:[y(kI,{children:"Amount Due"}),R(SI,{children:[y("span",{children:"$"}),e.data.total.toFixed(2)]})]})]})})}const DI=k.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media screen and (max-width:425px) {
    }
    @media screen and (max-width: 768px){
    }
    @media screen and (max-width: 1024px){
        margin-top:50px;
    }
`,EI=k(vn)`
`,TI=k.div`
`,OI=k.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 60vw;
    padding: 20px 50px;
    @media screen and (max-width:1024px){
        padding: 10px;
    }
    @media screen and (max-width:700px){
        width: 90vw;
    }
    @media screen and (max-width:425px){
        padding: 5px;
    }
`,PI=k.div`
    display: none;
    width: 100vw;
    @media screen and (max-width:425px) {
        background: ${({theme:e})=>e.invoiceBg};
        display: flex;
        padding: 10px 0;
        justify-content: space-around;    
    }
    transition: 0.4s;
`,Kp=`
    padding: 10px;
    font-size: 12px;
    @media screen and (max-width: 270px) {
        padding: 10px;
        font-size: 12px;
    }
`,AI=k(Ps)`
    ${Kp}
`,MI=k(Sp)`
    ${Kp}
`,ky=k(Gi)`
    white-space: nowrap;
    ${Kp}
`,II=k.div`
    display: flex;
    flex-direction: column;
    background: ${({theme:e})=>e.invoiceBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`,RI=k.div`
    flex-direction: column;
    background: ${({theme:e})=>e.invoiceHeaderBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`,NI=k(Ex)`
    color:inherit;
    text-decoration:none;
    display:flex;
    align-items: center;
    width:10%;
    gap:5px;
    flex-wrap:nowrap;
    @media screen and (max-width:1024px) {
        width:30%;
    }
`,zI=k(AI)`
    background: ${({theme:e})=>e.editBtnBg};
    color: ${({theme:e})=>e.editBtnColor};
    &:hover{
        background: ${({theme:e})=>e.editBtnBgHover};
        color: ${({theme:e})=>e.editBtnColorHover};
    }
`;function Sy(e){const[t,n]=T.useState(!1),{isDarkMode:r,setIsFormEdit:i,setIsFormOpen:a,setInvoiceData:o,invoiceData:s}=Oc(),l=ta(),c=new URLSearchParams(l.search).get("data"),d=c?JSON.parse(c):null,f=ao();T.useEffect(()=>{o(d)},[]);function x(){n(h=>!h)}const v={invoiceBg:"#1E2139",editBtnBg:"#252945",editBtnBgHover:"#252945",editBtnColor:"#DFE3FA",editBtnColorHover:"#7E88C3"},p={invoiceBg:"#FFF",editBtnBg:"#F9FAFE",editBtnBgHover:"#FFFFFF",editBtnColor:"#7E88C3",editBtnColorHover:"#DFE3FA"};function S(){i(!0),a(!0)}function m(){const h=e.data.filter(w=>{if(!w.id.includes(d.id))return w}),C=[{...d,status:"paid"},...h];e.setData(C),localStorage.setItem("data",JSON.stringify(C)),f("..")}return T.useEffect(()=>{},[]),y(Mt,{theme:r?v:p,children:R(DI,{children:[t&&y(v1,{data:e.data,setData:e.setData,invoiceData:d,isDarkMode:r,handleWarning:x}),y(TI,{children:y(OI,{children:R(NI,{to:"/",children:[y(EI,{src:"\\assets\\icon-arrow-left.svg"}),y(na,{children:"Go Back"})]})})}),y(RI,{children:y(KM,{handleEdit:S,setIsFormOpen:a,setIsFormEdit:i,data:d,isDarkMode:r,handleWarning:x,handleStatus:m})}),R(II,{children:[y(aI,{data:d,isDarkMode:r}),y(CI,{data:d,isDarkMode:r})]}),R(PI,{children:[y(zI,{onClick:S,children:"Edit"}),y(MI,{onClick:x,children:"Delete"}),d.status!=="paid"&&Object.values(d).some(h=>h==="")?y(ky,{disabled:!0,children:"Mark as Paid"}):y(ky,{onClick:m,children:"Mark as Paid"})]})]})})}const FI=k.div`
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    gap:20px;
`,LI=k(Cx)`
    background-color: #7C5DFA;
    border-radius: 24px;
    padding:20px;
    text-decoration: none;
    color:white;
    width:40%;
    &:hover{
        background-color:#9277FF;
    }
`;function jI(){return R(FI,{children:[y("h1",{children:"Sorry, the page you were looking for was not found."}),y(LI,{to:"/",children:"Return to Home"})]})}function $I(){return y(x1,{})}const zd=Mb`
    body{
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin:0;
    padding:0;
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${e=>e.theme.scrollBg};
    }

    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #7C5DFA, #5e35ff)
      /* background: #7C5DFA; */
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #9277FF;
    }

    background-color: ${e=>e.theme.appBg};
    color: ${e=>e.theme.color};
    transition: 0.4s;
    }
`,Fd={appBg:"#F8F8F8",color:"#0C0E16",scrollBg:"#FFFFFF"},Ld={appBg:"#141625",color:"white",scrollBg:"#141625"};function UI(){const{isAuthenticated:e,user:t,isLoading:n}=io();T.useState(!1);const[r,i]=T.useState(""),[a,o]=T.useState(!1);T.useState(!1);const[s,l]=T.useState(!0),[u,c]=T.useState(!0),[d,f]=T.useState(!0);T.useState("");const x=()=>!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),[v,p]=T.useState(x),S={isDarkMode:v,setIsDarkMode:p,data:r,setData:i,dataLoaded:a,setDataLoaded:o},h=tC(ou(R(Oi,{path:"/",element:y($A,{...{isDraft:s,setIsDraft:l,isPending:u,setIsPending:c,isPaid:d,setIsPaid:f,isDarkMode:v,setIsDarkMode:p,data:r,setData:i}}),children:[y(Oi,{path:"/",index:!0,element:y(LM,{...S})}),y(Oi,{path:"/invoice",element:y(Sy,{...S}),children:y(Oi,{path:"/invoice:id",element:y(Sy,{...S})})}),y(Oi,{path:"*",element:y(jI,{})}),y(Oi,{path:"/account",element:y($I,{})})]})));return T.useEffect(()=>{localStorage.getItem("colorscheme")==="false"&&p(!1),localStorage.getItem("colorscheme")==="true"&&p(!0)},[v]),T.useEffect(()=>{if(e){if(localStorage.getItem(`${t==null?void 0:t.email}`)===null)fetch("../../data.json").then(g=>g.json()).then(g=>{i([]),o(!0),localStorage.setItem(`${t==null?void 0:t.email}`,JSON.stringify([]))});else if(localStorage.getItem(`${t==null?void 0:t.email}`)!==null){const g=JSON.parse(localStorage.getItem(`${t==null?void 0:t.email}`));i(g),o(!0)}}else if(localStorage.getItem("data")===null)fetch("../../data.json").then(g=>g.json()).then(g=>{i(g),o(!0),localStorage.setItem("data",JSON.stringify(g))});else if(localStorage.getItem("data")!==null){const g=JSON.parse(localStorage.getItem("data"));i(g),o(!0)}},[e]),n?R(Mt,{theme:v?Ld:Fd,children:[y(zd,{}),y(y1,{isDarkMode:v})]}):e?R(Mt,{theme:v?Ld:Fd,children:[y(zd,{}),y(Bg,{router:h})]}):R(Mt,{theme:v?Ld:Fd,children:[y(zd,{}),y(Bg,{router:h})]})}function BI(){return y("div",{children:y(IS,{...{domain:"dev-g4y2r5dknwja6vmn.us.auth0.com",clientId:"KGydycvxYPyKjwQxxcKUa8IrmcBtuqR6"},authorizationParams:{redirect_uri:window.location.origin},children:y(UI,{})})})}$d.createRoot(document.getElementById("root")).render(y(ye.StrictMode,{children:y(BI,{})}))});export default VI();
