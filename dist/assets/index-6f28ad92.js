var EE=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var FU=EE((HU,bu)=>{function TE(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function IE(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fl={},DE={get exports(){return fl},set exports(e){fl=e}},Ud={},D={},NE={get exports(){return D},set exports(e){D=e}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sc=Symbol.for("react.element"),RE=Symbol.for("react.portal"),AE=Symbol.for("react.fragment"),OE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),ME=Symbol.for("react.provider"),FE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),jE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),Lv=Symbol.iterator;function UE(e){return e===null||typeof e!="object"?null:(e=Lv&&e[Lv]||e["@@iterator"],typeof e=="function"?e:null)}var Jw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ex=Object.assign,tx={};function pa(e,t,n){this.props=e,this.context=t,this.refs=tx,this.updater=n||Jw}pa.prototype.isReactComponent={};pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nx(){}nx.prototype=pa.prototype;function mg(e,t,n){this.props=e,this.context=t,this.refs=tx,this.updater=n||Jw}var gg=mg.prototype=new nx;gg.constructor=mg;ex(gg,pa.prototype);gg.isPureReactComponent=!0;var zv=Array.isArray,rx=Object.prototype.hasOwnProperty,yg={current:null},ix={key:!0,ref:!0,__self:!0,__source:!0};function sx(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)rx.call(t,r)&&!ix.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sc,type:e,key:s,ref:o,props:i,_owner:yg.current}}function BE(e,t){return{$$typeof:sc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function vg(e){return typeof e=="object"&&e!==null&&e.$$typeof===sc}function VE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var jv=/\/+/g;function ih(e,t){return typeof e=="object"&&e!==null&&e.key!=null?VE(""+e.key):t.toString(36)}function su(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case sc:case RE:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ih(o,0):r,zv(i)?(n="",e!=null&&(n=e.replace(jv,"$&/")+"/"),su(i,t,n,"",function(c){return c})):i!=null&&(vg(i)&&(i=BE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jv,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",zv(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+ih(s,a);o+=su(s,t,n,l,i)}else if(l=UE(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+ih(s,a++),o+=su(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ac(e,t,n){if(e==null)return e;var r=[],i=0;return su(e,r,"","",function(s){return t.call(n,s,i++)}),r}function WE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xn={current:null},ou={transition:null},HE={ReactCurrentDispatcher:xn,ReactCurrentBatchConfig:ou,ReactCurrentOwner:yg};Be.Children={map:Ac,forEach:function(e,t,n){Ac(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ac(e,function(){t++}),t},toArray:function(e){return Ac(e,function(t){return t})||[]},only:function(e){if(!vg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Be.Component=pa;Be.Fragment=AE;Be.Profiler=PE;Be.PureComponent=mg;Be.StrictMode=OE;Be.Suspense=zE;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;Be.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ex({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=yg.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)rx.call(t,l)&&!ix.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:sc,type:e.type,key:i,ref:s,props:r,_owner:o}};Be.createContext=function(e){return e={$$typeof:FE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ME,_context:e},e.Consumer=e};Be.createElement=sx;Be.createFactory=function(e){var t=sx.bind(null,e);return t.type=e,t};Be.createRef=function(){return{current:null}};Be.forwardRef=function(e){return{$$typeof:LE,render:e}};Be.isValidElement=vg;Be.lazy=function(e){return{$$typeof:$E,_payload:{_status:-1,_result:e},_init:WE}};Be.memo=function(e,t){return{$$typeof:jE,type:e,compare:t===void 0?null:t}};Be.startTransition=function(e){var t=ou.transition;ou.transition={};try{e()}finally{ou.transition=t}};Be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Be.useCallback=function(e,t){return xn.current.useCallback(e,t)};Be.useContext=function(e){return xn.current.useContext(e)};Be.useDebugValue=function(){};Be.useDeferredValue=function(e){return xn.current.useDeferredValue(e)};Be.useEffect=function(e,t){return xn.current.useEffect(e,t)};Be.useId=function(){return xn.current.useId()};Be.useImperativeHandle=function(e,t,n){return xn.current.useImperativeHandle(e,t,n)};Be.useInsertionEffect=function(e,t){return xn.current.useInsertionEffect(e,t)};Be.useLayoutEffect=function(e,t){return xn.current.useLayoutEffect(e,t)};Be.useMemo=function(e,t){return xn.current.useMemo(e,t)};Be.useReducer=function(e,t,n){return xn.current.useReducer(e,t,n)};Be.useRef=function(e){return xn.current.useRef(e)};Be.useState=function(e){return xn.current.useState(e)};Be.useSyncExternalStore=function(e,t,n){return xn.current.useSyncExternalStore(e,t,n)};Be.useTransition=function(){return xn.current.useTransition()};Be.version="18.2.0";(function(e){e.exports=Be})(NE);const we=IE(D),xp=TE({__proto__:null,default:we},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE=D,GE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),KE=Object.prototype.hasOwnProperty,qE=YE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QE={key:!0,ref:!0,__self:!0,__source:!0};function ox(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)KE.call(t,r)&&!QE.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:GE,type:e,key:s,ref:o,props:i,_owner:qE.current}}Ud.Fragment=ZE;Ud.jsx=ox;Ud.jsxs=ox;(function(e){e.exports=Ud})(DE);const XE=fl.Fragment,w=fl.jsx,M=fl.jsxs;var Sp={},kp={},JE={get exports(){return kp},set exports(e){kp=e}},Un={},bp={},eT={get exports(){return bp},set exports(e){bp=e}},ax={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,K){var oe=$.length;$.push(K);e:for(;0<oe;){var te=oe-1>>>1,O=$[te];if(0<i(O,K))$[te]=K,$[oe]=O,oe=te;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var K=$[0],oe=$.pop();if(oe!==K){$[0]=oe;e:for(var te=0,O=$.length,U=O>>>1;te<U;){var X=2*(te+1)-1,le=$[X],R=X+1,Ee=$[R];if(0>i(le,oe))R<O&&0>i(Ee,le)?($[te]=Ee,$[R]=oe,te=R):($[te]=le,$[X]=oe,te=X);else if(R<O&&0>i(Ee,oe))$[te]=Ee,$[R]=oe,te=R;else break e}}return K}function i($,K){var oe=$.sortIndex-K.sortIndex;return oe!==0?oe:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,g=!1,m=!1,p=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y($){for(var K=n(c);K!==null;){if(K.callback===null)r(c);else if(K.startTime<=$)r(c),K.sortIndex=K.expirationTime,t(l,K);else break;K=n(c)}}function b($){if(p=!1,y($),!m)if(n(l)!==null)m=!0,Oe(x);else{var K=n(c);K!==null&&We(b,K.startTime-$)}}function x($,K){m=!1,p&&(p=!1,v(N),N=-1),g=!0;var oe=f;try{for(y(K),d=n(l);d!==null&&(!(d.expirationTime>K)||$&&!_e());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var O=te(d.expirationTime<=K);K=e.unstable_now(),typeof O=="function"?d.callback=O:d===n(l)&&r(l),y(K)}else r(l);d=n(l)}if(d!==null)var U=!0;else{var X=n(c);X!==null&&We(b,X.startTime-K),U=!1}return U}finally{d=null,f=oe,g=!1}}var S=!1,C=null,N=-1,z=5,G=-1;function _e(){return!(e.unstable_now()-G<z)}function ee(){if(C!==null){var $=e.unstable_now();G=$;var K=!0;try{K=C(!0,$)}finally{K?ne():(S=!1,C=null)}}else S=!1}var ne;if(typeof h=="function")ne=function(){h(ee)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Te=pe.port2;pe.port1.onmessage=ee,ne=function(){Te.postMessage(null)}}else ne=function(){k(ee,0)};function Oe($){C=$,S||(S=!0,ne())}function We($,K){N=k(function(){$(e.unstable_now())},K)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){m||g||(m=!0,Oe(x))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var oe=f;f=K;try{return $()}finally{f=oe}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var oe=f;f=$;try{return K()}finally{f=oe}},e.unstable_scheduleCallback=function($,K,oe){var te=e.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?te+oe:te):oe=te,$){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=oe+O,$={id:u++,callback:K,priorityLevel:$,startTime:oe,expirationTime:O,sortIndex:-1},oe>te?($.sortIndex=oe,t(c,$),n(l)===null&&$===n(c)&&(p?(v(N),N=-1):p=!0,We(b,oe-te))):($.sortIndex=O,t(l,$),m||g||(m=!0,Oe(x))),$},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function($){var K=f;return function(){var oe=f;f=K;try{return $.apply(this,arguments)}finally{f=oe}}}})(ax);(function(e){e.exports=ax})(eT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lx=D,$n=bp;function B(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cx=new Set,hl={};function Ys(e,t){Ko(e,t),Ko(e+"Capture",t)}function Ko(e,t){for(hl[e]=t,e=0;e<t.length;e++)cx.add(t[e])}var pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cp=Object.prototype.hasOwnProperty,tT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$v={},Uv={};function nT(e){return Cp.call(Uv,e)?!0:Cp.call($v,e)?!1:tT.test(e)?Uv[e]=!0:($v[e]=!0,!1)}function rT(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function iT(e,t,n,r){if(t===null||typeof t>"u"||rT(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Sn(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){en[e]=new Sn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];en[t]=new Sn(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){en[e]=new Sn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){en[e]=new Sn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){en[e]=new Sn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){en[e]=new Sn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){en[e]=new Sn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){en[e]=new Sn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){en[e]=new Sn(e,5,!1,e.toLowerCase(),null,!1,!1)});var _g=/[\-:]([a-z])/g;function wg(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_g,wg);en[t]=new Sn(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_g,wg);en[t]=new Sn(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_g,wg);en[t]=new Sn(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){en[e]=new Sn(e,1,!1,e.toLowerCase(),null,!1,!1)});en.xlinkHref=new Sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){en[e]=new Sn(e,1,!1,e.toLowerCase(),null,!0,!0)});function xg(e,t,n,r){var i=en.hasOwnProperty(t)?en[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(iT(t,n,i,r)&&(n=null),r||i===null?nT(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Si=lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oc=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),Sg=Symbol.for("react.strict_mode"),Ep=Symbol.for("react.profiler"),ux=Symbol.for("react.provider"),dx=Symbol.for("react.context"),kg=Symbol.for("react.forward_ref"),Tp=Symbol.for("react.suspense"),Ip=Symbol.for("react.suspense_list"),bg=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),fx=Symbol.for("react.offscreen"),Bv=Symbol.iterator;function Ta(e){return e===null||typeof e!="object"?null:(e=Bv&&e[Bv]||e["@@iterator"],typeof e=="function"?e:null)}var kt=Object.assign,sh;function Ha(e){if(sh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sh=t&&t[1]||""}return`
`+sh+e}var oh=!1;function ah(e,t){if(!e||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ha(e):""}function sT(e){switch(e.tag){case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return e=ah(e.type,!1),e;case 11:return e=ah(e.type.render,!1),e;case 1:return e=ah(e.type,!0),e;default:return""}}function Dp(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mo:return"Fragment";case po:return"Portal";case Ep:return"Profiler";case Sg:return"StrictMode";case Tp:return"Suspense";case Ip:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dx:return(e.displayName||"Context")+".Consumer";case ux:return(e._context.displayName||"Context")+".Provider";case kg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bg:return t=e.displayName||null,t!==null?t:Dp(e.type)||"Memo";case Di:t=e._payload,e=e._init;try{return Dp(e(t))}catch{}}return null}function oT(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dp(t);case 8:return t===Sg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function es(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function aT(e){var t=hx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pc(e){e._valueTracker||(e._valueTracker=aT(e))}function px(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Np(e,t){var n=t.checked;return kt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=es(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mx(e,t){t=t.checked,t!=null&&xg(e,"checked",t,!1)}function Rp(e,t){mx(e,t);var n=es(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ap(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ap(e,t.type,es(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ap(e,t,n){(t!=="number"||Cu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ya=Array.isArray;function Oo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+es(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Op(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(B(91));return kt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(B(92));if(Ya(n)){if(1<n.length)throw Error(B(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:es(n)}}function gx(e,t){var n=es(t.value),r=es(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Yv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yx(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pp(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yx(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mc,vx=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mc=Mc||document.createElement("div"),Mc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lT=["Webkit","ms","Moz","O"];Object.keys(Ka).forEach(function(e){lT.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ka[t]=Ka[e]})});function _x(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ka.hasOwnProperty(e)&&Ka[e]?(""+t).trim():t+"px"}function wx(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_x(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var cT=kt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mp(e,t){if(t){if(cT[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(B(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(B(61))}if(t.style!=null&&typeof t.style!="object")throw Error(B(62))}}function Fp(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lp=null;function Cg(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zp=null,Po=null,Mo=null;function Gv(e){if(e=lc(e)){if(typeof zp!="function")throw Error(B(280));var t=e.stateNode;t&&(t=Yd(t),zp(e.stateNode,e.type,t))}}function xx(e){Po?Mo?Mo.push(e):Mo=[e]:Po=e}function Sx(){if(Po){var e=Po,t=Mo;if(Mo=Po=null,Gv(e),t)for(e=0;e<t.length;e++)Gv(t[e])}}function kx(e,t){return e(t)}function bx(){}var lh=!1;function Cx(e,t,n){if(lh)return e(t,n);lh=!0;try{return kx(e,t,n)}finally{lh=!1,(Po!==null||Mo!==null)&&(bx(),Sx())}}function ml(e,t){var n=e.stateNode;if(n===null)return null;var r=Yd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(B(231,t,typeof n));return n}var jp=!1;if(pi)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){jp=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{jp=!1}function uT(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var qa=!1,Eu=null,Tu=!1,$p=null,dT={onError:function(e){qa=!0,Eu=e}};function fT(e,t,n,r,i,s,o,a,l){qa=!1,Eu=null,uT.apply(dT,arguments)}function hT(e,t,n,r,i,s,o,a,l){if(fT.apply(this,arguments),qa){if(qa){var c=Eu;qa=!1,Eu=null}else throw Error(B(198));Tu||(Tu=!0,$p=c)}}function Gs(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ex(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zv(e){if(Gs(e)!==e)throw Error(B(188))}function pT(e){var t=e.alternate;if(!t){if(t=Gs(e),t===null)throw Error(B(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Zv(i),e;if(s===r)return Zv(i),t;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?e:t}function Tx(e){return e=pT(e),e!==null?Ix(e):null}function Ix(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ix(e);if(t!==null)return t;e=e.sibling}return null}var Dx=$n.unstable_scheduleCallback,Kv=$n.unstable_cancelCallback,mT=$n.unstable_shouldYield,gT=$n.unstable_requestPaint,At=$n.unstable_now,yT=$n.unstable_getCurrentPriorityLevel,Eg=$n.unstable_ImmediatePriority,Nx=$n.unstable_UserBlockingPriority,Iu=$n.unstable_NormalPriority,vT=$n.unstable_LowPriority,Rx=$n.unstable_IdlePriority,Bd=null,zr=null;function _T(e){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(Bd,e,void 0,(e.current.flags&128)===128)}catch{}}var pr=Math.clz32?Math.clz32:ST,wT=Math.log,xT=Math.LN2;function ST(e){return e>>>=0,e===0?32:31-(wT(e)/xT|0)|0}var Fc=64,Lc=4194304;function Ga(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Du(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ga(a):(s&=o,s!==0&&(r=Ga(s)))}else o=n&~i,o!==0?r=Ga(o):s!==0&&(r=Ga(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pr(t),i=1<<n,r|=e[n],t&=~i;return r}function kT(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bT(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-pr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kT(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Up(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ax(){var e=Fc;return Fc<<=1,!(Fc&4194240)&&(Fc=64),e}function ch(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pr(t),e[t]=n}function CT(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pr(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Tg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pr(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var et=0;function Ox(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Px,Ig,Mx,Fx,Lx,Bp=!1,zc=[],$i=null,Ui=null,Bi=null,gl=new Map,yl=new Map,Ri=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qv(e,t){switch(e){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":gl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function Da(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=lc(t),t!==null&&Ig(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function TT(e,t,n,r,i){switch(t){case"focusin":return $i=Da($i,e,t,n,r,i),!0;case"dragenter":return Ui=Da(Ui,e,t,n,r,i),!0;case"mouseover":return Bi=Da(Bi,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return gl.set(s,Da(gl.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,yl.set(s,Da(yl.get(s)||null,e,t,n,r,i)),!0}return!1}function zx(e){var t=vs(e.target);if(t!==null){var n=Gs(t);if(n!==null){if(t=n.tag,t===13){if(t=Ex(n),t!==null){e.blockedOn=t,Lx(e.priority,function(){Mx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Lp=r,n.target.dispatchEvent(r),Lp=null}else return t=lc(n),t!==null&&Ig(t),e.blockedOn=n,!1;t.shift()}return!0}function Qv(e,t,n){au(e)&&n.delete(t)}function IT(){Bp=!1,$i!==null&&au($i)&&($i=null),Ui!==null&&au(Ui)&&(Ui=null),Bi!==null&&au(Bi)&&(Bi=null),gl.forEach(Qv),yl.forEach(Qv)}function Na(e,t){e.blockedOn===t&&(e.blockedOn=null,Bp||(Bp=!0,$n.unstable_scheduleCallback($n.unstable_NormalPriority,IT)))}function vl(e){function t(i){return Na(i,e)}if(0<zc.length){Na(zc[0],e);for(var n=1;n<zc.length;n++){var r=zc[n];r.blockedOn===e&&(r.blockedOn=null)}}for($i!==null&&Na($i,e),Ui!==null&&Na(Ui,e),Bi!==null&&Na(Bi,e),gl.forEach(t),yl.forEach(t),n=0;n<Ri.length;n++)r=Ri[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ri.length&&(n=Ri[0],n.blockedOn===null);)zx(n),n.blockedOn===null&&Ri.shift()}var Fo=Si.ReactCurrentBatchConfig,Nu=!0;function DT(e,t,n,r){var i=et,s=Fo.transition;Fo.transition=null;try{et=1,Dg(e,t,n,r)}finally{et=i,Fo.transition=s}}function NT(e,t,n,r){var i=et,s=Fo.transition;Fo.transition=null;try{et=4,Dg(e,t,n,r)}finally{et=i,Fo.transition=s}}function Dg(e,t,n,r){if(Nu){var i=Vp(e,t,n,r);if(i===null)_h(e,t,r,Ru,n),qv(e,r);else if(TT(i,e,t,n,r))r.stopPropagation();else if(qv(e,r),t&4&&-1<ET.indexOf(e)){for(;i!==null;){var s=lc(i);if(s!==null&&Px(s),s=Vp(e,t,n,r),s===null&&_h(e,t,r,Ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _h(e,t,r,null,n)}}var Ru=null;function Vp(e,t,n,r){if(Ru=null,e=Cg(r),e=vs(e),e!==null)if(t=Gs(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ex(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ru=e,null}function jx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yT()){case Eg:return 1;case Nx:return 4;case Iu:case vT:return 16;case Rx:return 536870912;default:return 16}default:return 16}}var Pi=null,Ng=null,lu=null;function $x(){if(lu)return lu;var e,t=Ng,n=t.length,r,i="value"in Pi?Pi.value:Pi.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return lu=i.slice(e,1<r?1-r:void 0)}function cu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jc(){return!0}function Xv(){return!1}function Bn(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?jc:Xv,this.isPropagationStopped=Xv,this}return kt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=jc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=jc)},persist:function(){},isPersistent:jc}),t}var ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rg=Bn(ma),ac=kt({},ma,{view:0,detail:0}),RT=Bn(ac),uh,dh,Ra,Vd=kt({},ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ag,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(uh=e.screenX-Ra.screenX,dh=e.screenY-Ra.screenY):dh=uh=0,Ra=e),uh)},movementY:function(e){return"movementY"in e?e.movementY:dh}}),Jv=Bn(Vd),AT=kt({},Vd,{dataTransfer:0}),OT=Bn(AT),PT=kt({},ac,{relatedTarget:0}),fh=Bn(PT),MT=kt({},ma,{animationName:0,elapsedTime:0,pseudoElement:0}),FT=Bn(MT),LT=kt({},ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zT=Bn(LT),jT=kt({},ma,{data:0}),e0=Bn(jT),$T={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=BT[e])?!!t[e]:!1}function Ag(){return VT}var WT=kt({},ac,{key:function(e){if(e.key){var t=$T[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?UT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ag,charCode:function(e){return e.type==="keypress"?cu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HT=Bn(WT),YT=kt({},Vd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=Bn(YT),GT=kt({},ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ag}),ZT=Bn(GT),KT=kt({},ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),qT=Bn(KT),QT=kt({},Vd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),XT=Bn(QT),JT=[9,13,27,32],Og=pi&&"CompositionEvent"in window,Qa=null;pi&&"documentMode"in document&&(Qa=document.documentMode);var eI=pi&&"TextEvent"in window&&!Qa,Ux=pi&&(!Og||Qa&&8<Qa&&11>=Qa),n0=String.fromCharCode(32),r0=!1;function Bx(e,t){switch(e){case"keyup":return JT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var go=!1;function tI(e,t){switch(e){case"compositionend":return Vx(t);case"keypress":return t.which!==32?null:(r0=!0,n0);case"textInput":return e=t.data,e===n0&&r0?null:e;default:return null}}function nI(e,t){if(go)return e==="compositionend"||!Og&&Bx(e,t)?(e=$x(),lu=Ng=Pi=null,go=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ux&&t.locale!=="ko"?null:t.data;default:return null}}var rI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!rI[e.type]:t==="textarea"}function Wx(e,t,n,r){xx(r),t=Au(t,"onChange"),0<t.length&&(n=new Rg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xa=null,_l=null;function iI(e){t1(e,0)}function Wd(e){var t=_o(e);if(px(t))return e}function sI(e,t){if(e==="change")return t}var Hx=!1;if(pi){var hh;if(pi){var ph="oninput"in document;if(!ph){var s0=document.createElement("div");s0.setAttribute("oninput","return;"),ph=typeof s0.oninput=="function"}hh=ph}else hh=!1;Hx=hh&&(!document.documentMode||9<document.documentMode)}function o0(){Xa&&(Xa.detachEvent("onpropertychange",Yx),_l=Xa=null)}function Yx(e){if(e.propertyName==="value"&&Wd(_l)){var t=[];Wx(t,_l,e,Cg(e)),Cx(iI,t)}}function oI(e,t,n){e==="focusin"?(o0(),Xa=t,_l=n,Xa.attachEvent("onpropertychange",Yx)):e==="focusout"&&o0()}function aI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wd(_l)}function lI(e,t){if(e==="click")return Wd(t)}function cI(e,t){if(e==="input"||e==="change")return Wd(t)}function uI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wr=typeof Object.is=="function"?Object.is:uI;function wl(e,t){if(wr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cp.call(t,i)||!wr(e[i],t[i]))return!1}return!0}function a0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function l0(e,t){var n=a0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=a0(n)}}function Gx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zx(){for(var e=window,t=Cu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cu(e.document)}return t}function Pg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dI(e){var t=Zx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gx(n.ownerDocument.documentElement,n)){if(r!==null&&Pg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=l0(n,s);var o=l0(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fI=pi&&"documentMode"in document&&11>=document.documentMode,yo=null,Wp=null,Ja=null,Hp=!1;function c0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hp||yo==null||yo!==Cu(r)||(r=yo,"selectionStart"in r&&Pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ja&&wl(Ja,r)||(Ja=r,r=Au(Wp,"onSelect"),0<r.length&&(t=new Rg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=yo)))}function $c(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vo={animationend:$c("Animation","AnimationEnd"),animationiteration:$c("Animation","AnimationIteration"),animationstart:$c("Animation","AnimationStart"),transitionend:$c("Transition","TransitionEnd")},mh={},Kx={};pi&&(Kx=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function Hd(e){if(mh[e])return mh[e];if(!vo[e])return e;var t=vo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kx)return mh[e]=t[n];return e}var qx=Hd("animationend"),Qx=Hd("animationiteration"),Xx=Hd("animationstart"),Jx=Hd("transitionend"),e1=new Map,u0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(e,t){e1.set(e,t),Ys(t,[e])}for(var gh=0;gh<u0.length;gh++){var yh=u0[gh],hI=yh.toLowerCase(),pI=yh[0].toUpperCase()+yh.slice(1);ls(hI,"on"+pI)}ls(qx,"onAnimationEnd");ls(Qx,"onAnimationIteration");ls(Xx,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(Jx,"onTransitionEnd");Ko("onMouseEnter",["mouseout","mouseover"]);Ko("onMouseLeave",["mouseout","mouseover"]);Ko("onPointerEnter",["pointerout","pointerover"]);Ko("onPointerLeave",["pointerout","pointerover"]);Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function d0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hT(r,t,void 0,e),e.currentTarget=null}function t1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;d0(i,a,c),s=l}}}if(Tu)throw e=$p,Tu=!1,$p=null,e}function ht(e,t){var n=t[qp];n===void 0&&(n=t[qp]=new Set);var r=e+"__bubble";n.has(r)||(n1(t,e,2,!1),n.add(r))}function vh(e,t,n){var r=0;t&&(r|=4),n1(n,e,r,t)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function xl(e){if(!e[Uc]){e[Uc]=!0,cx.forEach(function(n){n!=="selectionchange"&&(mI.has(n)||vh(n,!1,e),vh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uc]||(t[Uc]=!0,vh("selectionchange",!1,t))}}function n1(e,t,n,r){switch(jx(t)){case 1:var i=DT;break;case 4:i=NT;break;default:i=Dg}n=i.bind(null,t,n,e),i=void 0,!jp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _h(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cx(function(){var c=s,u=Cg(n),d=[];e:{var f=e1.get(e);if(f!==void 0){var g=Rg,m=e;switch(e){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":g=HT;break;case"focusin":m="focus",g=fh;break;case"focusout":m="blur",g=fh;break;case"beforeblur":case"afterblur":g=fh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=OT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ZT;break;case qx:case Qx:case Xx:g=FT;break;case Jx:g=qT;break;case"scroll":g=RT;break;case"wheel":g=XT;break;case"copy":case"cut":case"paste":g=zT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=t0}var p=(t&4)!==0,k=!p&&e==="scroll",v=p?f!==null?f+"Capture":null:f;p=[];for(var h=c,y;h!==null;){y=h;var b=y.stateNode;if(y.tag===5&&b!==null&&(y=b,v!==null&&(b=ml(h,v),b!=null&&p.push(Sl(h,b,y)))),k)break;h=h.return}0<p.length&&(f=new g(f,m,null,n,u),d.push({event:f,listeners:p}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==Lp&&(m=n.relatedTarget||n.fromElement)&&(vs(m)||m[mi]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=c,m=m?vs(m):null,m!==null&&(k=Gs(m),m!==k||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=c),g!==m)){if(p=Jv,b="onMouseLeave",v="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(p=t0,b="onPointerLeave",v="onPointerEnter",h="pointer"),k=g==null?f:_o(g),y=m==null?f:_o(m),f=new p(b,h+"leave",g,n,u),f.target=k,f.relatedTarget=y,b=null,vs(u)===c&&(p=new p(v,h+"enter",m,n,u),p.target=y,p.relatedTarget=k,b=p),k=b,g&&m)t:{for(p=g,v=m,h=0,y=p;y;y=ro(y))h++;for(y=0,b=v;b;b=ro(b))y++;for(;0<h-y;)p=ro(p),h--;for(;0<y-h;)v=ro(v),y--;for(;h--;){if(p===v||v!==null&&p===v.alternate)break t;p=ro(p),v=ro(v)}p=null}else p=null;g!==null&&f0(d,f,g,p,!1),m!==null&&k!==null&&f0(d,k,m,p,!0)}}e:{if(f=c?_o(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=sI;else if(i0(f))if(Hx)x=cI;else{x=aI;var S=oI}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=lI);if(x&&(x=x(e,c))){Wx(d,x,n,u);break e}S&&S(e,f,c),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Ap(f,"number",f.value)}switch(S=c?_o(c):window,e){case"focusin":(i0(S)||S.contentEditable==="true")&&(yo=S,Wp=c,Ja=null);break;case"focusout":Ja=Wp=yo=null;break;case"mousedown":Hp=!0;break;case"contextmenu":case"mouseup":case"dragend":Hp=!1,c0(d,n,u);break;case"selectionchange":if(fI)break;case"keydown":case"keyup":c0(d,n,u)}var C;if(Og)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else go?Bx(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ux&&n.locale!=="ko"&&(go||N!=="onCompositionStart"?N==="onCompositionEnd"&&go&&(C=$x()):(Pi=u,Ng="value"in Pi?Pi.value:Pi.textContent,go=!0)),S=Au(c,N),0<S.length&&(N=new e0(N,e,null,n,u),d.push({event:N,listeners:S}),C?N.data=C:(C=Vx(n),C!==null&&(N.data=C)))),(C=eI?tI(e,n):nI(e,n))&&(c=Au(c,"onBeforeInput"),0<c.length&&(u=new e0("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}t1(d,t)})}function Sl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Au(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ml(e,n),s!=null&&r.unshift(Sl(e,s,i)),s=ml(e,t),s!=null&&r.push(Sl(e,s,i))),e=e.return}return r}function ro(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function f0(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=ml(n,s),l!=null&&o.unshift(Sl(n,l,a))):i||(l=ml(n,s),l!=null&&o.push(Sl(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gI=/\r\n?/g,yI=/\u0000|\uFFFD/g;function h0(e){return(typeof e=="string"?e:""+e).replace(gI,`
`).replace(yI,"")}function Bc(e,t,n){if(t=h0(t),h0(e)!==t&&n)throw Error(B(425))}function Ou(){}var Yp=null,Gp=null;function Zp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kp=typeof setTimeout=="function"?setTimeout:void 0,vI=typeof clearTimeout=="function"?clearTimeout:void 0,p0=typeof Promise=="function"?Promise:void 0,_I=typeof queueMicrotask=="function"?queueMicrotask:typeof p0<"u"?function(e){return p0.resolve(null).then(e).catch(wI)}:Kp;function wI(e){setTimeout(function(){throw e})}function wh(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),vl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);vl(t)}function Vi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function m0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Or="__reactFiber$"+ga,kl="__reactProps$"+ga,mi="__reactContainer$"+ga,qp="__reactEvents$"+ga,xI="__reactListeners$"+ga,SI="__reactHandles$"+ga;function vs(e){var t=e[Or];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mi]||n[Or]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=m0(e);e!==null;){if(n=e[Or])return n;e=m0(e)}return t}e=n,n=e.parentNode}return null}function lc(e){return e=e[Or]||e[mi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _o(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Yd(e){return e[kl]||null}var Qp=[],wo=-1;function cs(e){return{current:e}}function mt(e){0>wo||(e.current=Qp[wo],Qp[wo]=null,wo--)}function ut(e,t){wo++,Qp[wo]=e.current,e.current=t}var ts={},cn=cs(ts),Rn=cs(!1),Rs=ts;function qo(e,t){var n=e.type.contextTypes;if(!n)return ts;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function An(e){return e=e.childContextTypes,e!=null}function Pu(){mt(Rn),mt(cn)}function g0(e,t,n){if(cn.current!==ts)throw Error(B(168));ut(cn,t),ut(Rn,n)}function r1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(B(108,oT(e)||"Unknown",i));return kt({},n,r)}function Mu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ts,Rs=cn.current,ut(cn,e),ut(Rn,Rn.current),!0}function y0(e,t,n){var r=e.stateNode;if(!r)throw Error(B(169));n?(e=r1(e,t,Rs),r.__reactInternalMemoizedMergedChildContext=e,mt(Rn),mt(cn),ut(cn,e)):mt(Rn),ut(Rn,n)}var ni=null,Gd=!1,xh=!1;function i1(e){ni===null?ni=[e]:ni.push(e)}function kI(e){Gd=!0,i1(e)}function us(){if(!xh&&ni!==null){xh=!0;var e=0,t=et;try{var n=ni;for(et=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ni=null,Gd=!1}catch(i){throw ni!==null&&(ni=ni.slice(e+1)),Dx(Eg,us),i}finally{et=t,xh=!1}}return null}var xo=[],So=0,Fu=null,Lu=0,Hn=[],Yn=0,As=null,ri=1,ii="";function hs(e,t){xo[So++]=Lu,xo[So++]=Fu,Fu=e,Lu=t}function s1(e,t,n){Hn[Yn++]=ri,Hn[Yn++]=ii,Hn[Yn++]=As,As=e;var r=ri;e=ii;var i=32-pr(r)-1;r&=~(1<<i),n+=1;var s=32-pr(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ri=1<<32-pr(t)+i|n<<i|r,ii=s+e}else ri=1<<s|n<<i|r,ii=e}function Mg(e){e.return!==null&&(hs(e,1),s1(e,1,0))}function Fg(e){for(;e===Fu;)Fu=xo[--So],xo[So]=null,Lu=xo[--So],xo[So]=null;for(;e===As;)As=Hn[--Yn],Hn[Yn]=null,ii=Hn[--Yn],Hn[Yn]=null,ri=Hn[--Yn],Hn[Yn]=null}var jn=null,Ln=null,_t=!1,lr=null;function o1(e,t){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function v0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jn=e,Ln=Vi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jn=e,Ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=As!==null?{id:ri,overflow:ii}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,jn=e,Ln=null,!0):!1;default:return!1}}function Xp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Jp(e){if(_t){var t=Ln;if(t){var n=t;if(!v0(e,t)){if(Xp(e))throw Error(B(418));t=Vi(n.nextSibling);var r=jn;t&&v0(e,t)?o1(r,n):(e.flags=e.flags&-4097|2,_t=!1,jn=e)}}else{if(Xp(e))throw Error(B(418));e.flags=e.flags&-4097|2,_t=!1,jn=e}}}function _0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jn=e}function Vc(e){if(e!==jn)return!1;if(!_t)return _0(e),_t=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zp(e.type,e.memoizedProps)),t&&(t=Ln)){if(Xp(e))throw a1(),Error(B(418));for(;t;)o1(e,t),t=Vi(t.nextSibling)}if(_0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ln=Vi(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ln=null}}else Ln=jn?Vi(e.stateNode.nextSibling):null;return!0}function a1(){for(var e=Ln;e;)e=Vi(e.nextSibling)}function Qo(){Ln=jn=null,_t=!1}function Lg(e){lr===null?lr=[e]:lr.push(e)}var bI=Si.ReactCurrentBatchConfig;function or(e,t){if(e&&e.defaultProps){t=kt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zu=cs(null),ju=null,ko=null,zg=null;function jg(){zg=ko=ju=null}function $g(e){var t=zu.current;mt(zu),e._currentValue=t}function em(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lo(e,t){ju=e,zg=ko=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Dn=!0),e.firstContext=null)}function Xn(e){var t=e._currentValue;if(zg!==e)if(e={context:e,memoizedValue:t,next:null},ko===null){if(ju===null)throw Error(B(308));ko=e,ju.dependencies={lanes:0,firstContext:e}}else ko=ko.next=e;return t}var _s=null;function Ug(e){_s===null?_s=[e]:_s.push(e)}function l1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ug(t)):(n.next=i.next,i.next=n),t.interleaved=n,gi(e,r)}function gi(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Bg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function li(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wi(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ye&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gi(e,n)}return i=r.interleaved,i===null?(t.next=t,Ug(r)):(t.next=i.next,i.next=t),r.interleaved=t,gi(e,n)}function uu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tg(e,n)}}function w0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $u(e,t,n,r){var i=e.updateQueue;Ni=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,p=a;switch(f=t,g=n,p.tag){case 1:if(m=p.payload,typeof m=="function"){d=m.call(g,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=p.payload,f=typeof m=="function"?m.call(g,d,f):m,f==null)break e;d=kt({},d,f);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=g,l=d):u=u.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ps|=o,e.lanes=o,e.memoizedState=d}}function x0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var u1=new lx.Component().refs;function tm(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:kt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zd={isMounted:function(e){return(e=e._reactInternals)?Gs(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vn(),i=Yi(e),s=li(r,i);s.payload=t,n!=null&&(s.callback=n),t=Wi(e,s,i),t!==null&&(mr(t,e,i,r),uu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vn(),i=Yi(e),s=li(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Wi(e,s,i),t!==null&&(mr(t,e,i,r),uu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vn(),r=Yi(e),i=li(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wi(e,i,r),t!==null&&(mr(t,e,r,n),uu(t,e,r))}};function S0(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!wl(n,r)||!wl(i,s):!0}function d1(e,t,n){var r=!1,i=ts,s=t.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(i=An(t)?Rs:cn.current,r=t.contextTypes,s=(r=r!=null)?qo(e,i):ts),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function k0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zd.enqueueReplaceState(t,t.state,null)}function nm(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=u1,Bg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Xn(s):(s=An(t)?Rs:cn.current,i.context=qo(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(tm(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Zd.enqueueReplaceState(i,i.state,null),$u(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Aa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===u1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,e))}return e}function Wc(e,t){throw e=Object.prototype.toString.call(t),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function b0(e){var t=e._init;return t(e._payload)}function f1(e){function t(v,h){if(e){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!e)return null;for(;h!==null;)t(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Gi(v,h),v.index=0,v.sibling=null,v}function s(v,h,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return e&&v.alternate===null&&(v.flags|=2),v}function a(v,h,y,b){return h===null||h.tag!==6?(h=Ih(y,v.mode,b),h.return=v,h):(h=i(h,y),h.return=v,h)}function l(v,h,y,b){var x=y.type;return x===mo?u(v,h,y.props.children,b,y.key):h!==null&&(h.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Di&&b0(x)===h.type)?(b=i(h,y.props),b.ref=Aa(v,h,y),b.return=v,b):(b=gu(y.type,y.key,y.props,null,v.mode,b),b.ref=Aa(v,h,y),b.return=v,b)}function c(v,h,y,b){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Dh(y,v.mode,b),h.return=v,h):(h=i(h,y.children||[]),h.return=v,h)}function u(v,h,y,b,x){return h===null||h.tag!==7?(h=Ts(y,v.mode,b,x),h.return=v,h):(h=i(h,y),h.return=v,h)}function d(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ih(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Oc:return y=gu(h.type,h.key,h.props,null,v.mode,y),y.ref=Aa(v,null,h),y.return=v,y;case po:return h=Dh(h,v.mode,y),h.return=v,h;case Di:var b=h._init;return d(v,b(h._payload),y)}if(Ya(h)||Ta(h))return h=Ts(h,v.mode,y,null),h.return=v,h;Wc(v,h)}return null}function f(v,h,y,b){var x=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(v,h,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oc:return y.key===x?l(v,h,y,b):null;case po:return y.key===x?c(v,h,y,b):null;case Di:return x=y._init,f(v,h,x(y._payload),b)}if(Ya(y)||Ta(y))return x!==null?null:u(v,h,y,b,null);Wc(v,y)}return null}function g(v,h,y,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return v=v.get(y)||null,a(h,v,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Oc:return v=v.get(b.key===null?y:b.key)||null,l(h,v,b,x);case po:return v=v.get(b.key===null?y:b.key)||null,c(h,v,b,x);case Di:var S=b._init;return g(v,h,y,S(b._payload),x)}if(Ya(b)||Ta(b))return v=v.get(y)||null,u(h,v,b,x,null);Wc(h,b)}return null}function m(v,h,y,b){for(var x=null,S=null,C=h,N=h=0,z=null;C!==null&&N<y.length;N++){C.index>N?(z=C,C=null):z=C.sibling;var G=f(v,C,y[N],b);if(G===null){C===null&&(C=z);break}e&&C&&G.alternate===null&&t(v,C),h=s(G,h,N),S===null?x=G:S.sibling=G,S=G,C=z}if(N===y.length)return n(v,C),_t&&hs(v,N),x;if(C===null){for(;N<y.length;N++)C=d(v,y[N],b),C!==null&&(h=s(C,h,N),S===null?x=C:S.sibling=C,S=C);return _t&&hs(v,N),x}for(C=r(v,C);N<y.length;N++)z=g(C,v,N,y[N],b),z!==null&&(e&&z.alternate!==null&&C.delete(z.key===null?N:z.key),h=s(z,h,N),S===null?x=z:S.sibling=z,S=z);return e&&C.forEach(function(_e){return t(v,_e)}),_t&&hs(v,N),x}function p(v,h,y,b){var x=Ta(y);if(typeof x!="function")throw Error(B(150));if(y=x.call(y),y==null)throw Error(B(151));for(var S=x=null,C=h,N=h=0,z=null,G=y.next();C!==null&&!G.done;N++,G=y.next()){C.index>N?(z=C,C=null):z=C.sibling;var _e=f(v,C,G.value,b);if(_e===null){C===null&&(C=z);break}e&&C&&_e.alternate===null&&t(v,C),h=s(_e,h,N),S===null?x=_e:S.sibling=_e,S=_e,C=z}if(G.done)return n(v,C),_t&&hs(v,N),x;if(C===null){for(;!G.done;N++,G=y.next())G=d(v,G.value,b),G!==null&&(h=s(G,h,N),S===null?x=G:S.sibling=G,S=G);return _t&&hs(v,N),x}for(C=r(v,C);!G.done;N++,G=y.next())G=g(C,v,N,G.value,b),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?N:G.key),h=s(G,h,N),S===null?x=G:S.sibling=G,S=G);return e&&C.forEach(function(ee){return t(v,ee)}),_t&&hs(v,N),x}function k(v,h,y,b){if(typeof y=="object"&&y!==null&&y.type===mo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Oc:e:{for(var x=y.key,S=h;S!==null;){if(S.key===x){if(x=y.type,x===mo){if(S.tag===7){n(v,S.sibling),h=i(S,y.props.children),h.return=v,v=h;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Di&&b0(x)===S.type){n(v,S.sibling),h=i(S,y.props),h.ref=Aa(v,S,y),h.return=v,v=h;break e}n(v,S);break}else t(v,S);S=S.sibling}y.type===mo?(h=Ts(y.props.children,v.mode,b,y.key),h.return=v,v=h):(b=gu(y.type,y.key,y.props,null,v.mode,b),b.ref=Aa(v,h,y),b.return=v,v=b)}return o(v);case po:e:{for(S=y.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=i(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else t(v,h);h=h.sibling}h=Dh(y,v.mode,b),h.return=v,v=h}return o(v);case Di:return S=y._init,k(v,h,S(y._payload),b)}if(Ya(y))return m(v,h,y,b);if(Ta(y))return p(v,h,y,b);Wc(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,y),h.return=v,v=h):(n(v,h),h=Ih(y,v.mode,b),h.return=v,v=h),o(v)):n(v,h)}return k}var Xo=f1(!0),h1=f1(!1),cc={},jr=cs(cc),bl=cs(cc),Cl=cs(cc);function ws(e){if(e===cc)throw Error(B(174));return e}function Vg(e,t){switch(ut(Cl,t),ut(bl,e),ut(jr,cc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pp(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pp(t,e)}mt(jr),ut(jr,t)}function Jo(){mt(jr),mt(bl),mt(Cl)}function p1(e){ws(Cl.current);var t=ws(jr.current),n=Pp(t,e.type);t!==n&&(ut(bl,e),ut(jr,n))}function Wg(e){bl.current===e&&(mt(jr),mt(bl))}var xt=cs(0);function Uu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sh=[];function Hg(){for(var e=0;e<Sh.length;e++)Sh[e]._workInProgressVersionPrimary=null;Sh.length=0}var du=Si.ReactCurrentDispatcher,kh=Si.ReactCurrentBatchConfig,Os=0,St=null,Ft=null,Ht=null,Bu=!1,el=!1,El=0,CI=0;function sn(){throw Error(B(321))}function Yg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wr(e[n],t[n]))return!1;return!0}function Gg(e,t,n,r,i,s){if(Os=s,St=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,du.current=e===null||e.memoizedState===null?DI:NI,e=n(r,i),el){s=0;do{if(el=!1,El=0,25<=s)throw Error(B(301));s+=1,Ht=Ft=null,t.updateQueue=null,du.current=RI,e=n(r,i)}while(el)}if(du.current=Vu,t=Ft!==null&&Ft.next!==null,Os=0,Ht=Ft=St=null,Bu=!1,t)throw Error(B(300));return e}function Zg(){var e=El!==0;return El=0,e}function Nr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?St.memoizedState=Ht=e:Ht=Ht.next=e,Ht}function Jn(){if(Ft===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var t=Ht===null?St.memoizedState:Ht.next;if(t!==null)Ht=t,Ft=e;else{if(e===null)throw Error(B(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Ht===null?St.memoizedState=Ht=e:Ht=Ht.next=e}return Ht}function Tl(e,t){return typeof t=="function"?t(e):t}function bh(e){var t=Jn(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=Ft,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Os&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,St.lanes|=u,Ps|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,wr(r,t.memoizedState)||(Dn=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,St.lanes|=s,Ps|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ch(e){var t=Jn(),n=t.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);wr(s,t.memoizedState)||(Dn=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function m1(){}function g1(e,t){var n=St,r=Jn(),i=t(),s=!wr(r.memoizedState,i);if(s&&(r.memoizedState=i,Dn=!0),r=r.queue,Kg(_1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Il(9,v1.bind(null,n,r,i,t),void 0,null),Gt===null)throw Error(B(349));Os&30||y1(n,t,i)}return i}function y1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=St.updateQueue,t===null?(t={lastEffect:null,stores:null},St.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function v1(e,t,n,r){t.value=n,t.getSnapshot=r,w1(t)&&x1(e)}function _1(e,t,n){return n(function(){w1(t)&&x1(e)})}function w1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wr(e,n)}catch{return!0}}function x1(e){var t=gi(e,1);t!==null&&mr(t,e,1,-1)}function C0(e){var t=Nr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:e},t.queue=e,e=e.dispatch=II.bind(null,St,e),[t.memoizedState,e]}function Il(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=St.updateQueue,t===null?(t={lastEffect:null,stores:null},St.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function S1(){return Jn().memoizedState}function fu(e,t,n,r){var i=Nr();St.flags|=e,i.memoizedState=Il(1|t,n,void 0,r===void 0?null:r)}function Kd(e,t,n,r){var i=Jn();r=r===void 0?null:r;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,r!==null&&Yg(r,o.deps)){i.memoizedState=Il(t,n,s,r);return}}St.flags|=e,i.memoizedState=Il(1|t,n,s,r)}function E0(e,t){return fu(8390656,8,e,t)}function Kg(e,t){return Kd(2048,8,e,t)}function k1(e,t){return Kd(4,2,e,t)}function b1(e,t){return Kd(4,4,e,t)}function C1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E1(e,t,n){return n=n!=null?n.concat([e]):null,Kd(4,4,C1.bind(null,t,e),n)}function qg(){}function T1(e,t){var n=Jn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function I1(e,t){var n=Jn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function D1(e,t,n){return Os&21?(wr(n,t)||(n=Ax(),St.lanes|=n,Ps|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Dn=!0),e.memoizedState=n)}function EI(e,t){var n=et;et=n!==0&&4>n?n:4,e(!0);var r=kh.transition;kh.transition={};try{e(!1),t()}finally{et=n,kh.transition=r}}function N1(){return Jn().memoizedState}function TI(e,t,n){var r=Yi(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},R1(e))A1(t,n);else if(n=l1(e,t,n,r),n!==null){var i=vn();mr(n,e,r,i),O1(n,t,r)}}function II(e,t,n){var r=Yi(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(R1(e))A1(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wr(a,o)){var l=t.interleaved;l===null?(i.next=i,Ug(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=l1(e,t,i,r),n!==null&&(i=vn(),mr(n,e,r,i),O1(n,t,r))}}function R1(e){var t=e.alternate;return e===St||t!==null&&t===St}function A1(e,t){el=Bu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function O1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tg(e,n)}}var Vu={readContext:Xn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},DI={readContext:Xn,useCallback:function(e,t){return Nr().memoizedState=[e,t===void 0?null:t],e},useContext:Xn,useEffect:E0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fu(4194308,4,C1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fu(4194308,4,e,t)},useInsertionEffect:function(e,t){return fu(4,2,e,t)},useMemo:function(e,t){var n=Nr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=TI.bind(null,St,e),[r.memoizedState,e]},useRef:function(e){var t=Nr();return e={current:e},t.memoizedState=e},useState:C0,useDebugValue:qg,useDeferredValue:function(e){return Nr().memoizedState=e},useTransition:function(){var e=C0(!1),t=e[0];return e=EI.bind(null,e[1]),Nr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=St,i=Nr();if(_t){if(n===void 0)throw Error(B(407));n=n()}else{if(n=t(),Gt===null)throw Error(B(349));Os&30||y1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,E0(_1.bind(null,r,s,e),[e]),r.flags|=2048,Il(9,v1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Nr(),t=Gt.identifierPrefix;if(_t){var n=ii,r=ri;n=(r&~(1<<32-pr(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=El++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=CI++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},NI={readContext:Xn,useCallback:T1,useContext:Xn,useEffect:Kg,useImperativeHandle:E1,useInsertionEffect:k1,useLayoutEffect:b1,useMemo:I1,useReducer:bh,useRef:S1,useState:function(){return bh(Tl)},useDebugValue:qg,useDeferredValue:function(e){var t=Jn();return D1(t,Ft.memoizedState,e)},useTransition:function(){var e=bh(Tl)[0],t=Jn().memoizedState;return[e,t]},useMutableSource:m1,useSyncExternalStore:g1,useId:N1,unstable_isNewReconciler:!1},RI={readContext:Xn,useCallback:T1,useContext:Xn,useEffect:Kg,useImperativeHandle:E1,useInsertionEffect:k1,useLayoutEffect:b1,useMemo:I1,useReducer:Ch,useRef:S1,useState:function(){return Ch(Tl)},useDebugValue:qg,useDeferredValue:function(e){var t=Jn();return Ft===null?t.memoizedState=e:D1(t,Ft.memoizedState,e)},useTransition:function(){var e=Ch(Tl)[0],t=Jn().memoizedState;return[e,t]},useMutableSource:m1,useSyncExternalStore:g1,useId:N1,unstable_isNewReconciler:!1};function ea(e,t){try{var n="",r=t;do n+=sT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Eh(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rm(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var AI=typeof WeakMap=="function"?WeakMap:Map;function P1(e,t,n){n=li(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hu||(Hu=!0,hm=r),rm(e,t)},n}function M1(e,t,n){n=li(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rm(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rm(e,t),typeof r!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function T0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new AI;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=YI.bind(null,e,t,n),t.then(e,e))}function I0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function D0(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=li(-1,1),t.tag=2,Wi(n,t,1))),n.lanes|=1),e)}var OI=Si.ReactCurrentOwner,Dn=!1;function mn(e,t,n,r){t.child=e===null?h1(t,null,n,r):Xo(t,e.child,n,r)}function N0(e,t,n,r,i){n=n.render;var s=t.ref;return Lo(t,i),r=Gg(e,t,n,r,s,i),n=Zg(),e!==null&&!Dn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yi(e,t,i)):(_t&&n&&Mg(t),t.flags|=1,mn(e,t,r,i),t.child)}function R0(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!iy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,F1(e,t,s,r,i)):(e=gu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wl,n(o,r)&&e.ref===t.ref)return yi(e,t,i)}return t.flags|=1,e=Gi(s,r),e.ref=t.ref,e.return=t,t.child=e}function F1(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(wl(s,r)&&e.ref===t.ref)if(Dn=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Dn=!0);else return t.lanes=e.lanes,yi(e,t,i)}return im(e,t,n,r,i)}function L1(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Co,Pn),Pn|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ut(Co,Pn),Pn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ut(Co,Pn),Pn|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ut(Co,Pn),Pn|=r;return mn(e,t,i,n),t.child}function z1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function im(e,t,n,r,i){var s=An(n)?Rs:cn.current;return s=qo(t,s),Lo(t,i),n=Gg(e,t,n,r,s,i),r=Zg(),e!==null&&!Dn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yi(e,t,i)):(_t&&r&&Mg(t),t.flags|=1,mn(e,t,n,i),t.child)}function A0(e,t,n,r,i){if(An(n)){var s=!0;Mu(t)}else s=!1;if(Lo(t,i),t.stateNode===null)hu(e,t),d1(t,n,r),nm(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=An(n)?Rs:cn.current,c=qo(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&k0(t,o,r,c),Ni=!1;var f=t.memoizedState;o.state=f,$u(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Rn.current||Ni?(typeof u=="function"&&(tm(t,n,u,r),l=t.memoizedState),(a=Ni||S0(t,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,c1(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:or(t.type,a),o.props=c,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=An(n)?Rs:cn.current,l=qo(t,l));var g=n.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&k0(t,o,r,l),Ni=!1,f=t.memoizedState,o.state=f,$u(t,r,o,i);var m=t.memoizedState;a!==d||f!==m||Rn.current||Ni?(typeof g=="function"&&(tm(t,n,g,r),m=t.memoizedState),(c=Ni||S0(t,n,c,r,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return sm(e,t,n,r,s,i)}function sm(e,t,n,r,i,s){z1(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&y0(t,n,!1),yi(e,t,s);r=t.stateNode,OI.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Xo(t,e.child,null,s),t.child=Xo(t,null,a,s)):mn(e,t,a,s),t.memoizedState=r.state,i&&y0(t,n,!0),t.child}function j1(e){var t=e.stateNode;t.pendingContext?g0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&g0(e,t.context,!1),Vg(e,t.containerInfo)}function O0(e,t,n,r,i){return Qo(),Lg(i),t.flags|=256,mn(e,t,n,r),t.child}var om={dehydrated:null,treeContext:null,retryLane:0};function am(e){return{baseLanes:e,cachePool:null,transitions:null}}function $1(e,t,n){var r=t.pendingProps,i=xt.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ut(xt,i&1),e===null)return Jp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xd(o,r,0,null),e=Ts(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=am(n),t.memoizedState=om,e):Qg(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return PI(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Gi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gi(a,s):(s=Ts(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?am(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=om,r}return s=e.child,e=s.sibling,r=Gi(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qg(e,t){return t=Xd({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hc(e,t,n,r){return r!==null&&Lg(r),Xo(t,e.child,null,n),e=Qg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function PI(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Eh(Error(B(422))),Hc(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Xd({mode:"visible",children:r.children},i,0,null),s=Ts(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Xo(t,e.child,null,o),t.child.memoizedState=am(o),t.memoizedState=om,s);if(!(t.mode&1))return Hc(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Eh(s,r,void 0),Hc(e,t,o,r)}if(a=(o&e.childLanes)!==0,Dn||a){if(r=Gt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gi(e,i),mr(r,e,i,-1))}return ry(),r=Eh(Error(B(421))),Hc(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=GI.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ln=Vi(i.nextSibling),jn=t,_t=!0,lr=null,e!==null&&(Hn[Yn++]=ri,Hn[Yn++]=ii,Hn[Yn++]=As,ri=e.id,ii=e.overflow,As=t),t=Qg(t,r.children),t.flags|=4096,t)}function P0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),em(e.return,t,n)}function Th(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function U1(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(mn(e,t,r.children,n),r=xt.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&P0(e,n,t);else if(e.tag===19)P0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ut(xt,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Th(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Th(t,!0,n,null,s);break;case"together":Th(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function hu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yi(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ps|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(B(153));if(t.child!==null){for(e=t.child,n=Gi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function MI(e,t,n){switch(t.tag){case 3:j1(t),Qo();break;case 5:p1(t);break;case 1:An(t.type)&&Mu(t);break;case 4:Vg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ut(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ut(xt,xt.current&1),t.flags|=128,null):n&t.child.childLanes?$1(e,t,n):(ut(xt,xt.current&1),e=yi(e,t,n),e!==null?e.sibling:null);ut(xt,xt.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return U1(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ut(xt,xt.current),r)break;return null;case 22:case 23:return t.lanes=0,L1(e,t,n)}return yi(e,t,n)}var B1,lm,V1,W1;B1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lm=function(){};V1=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ws(jr.current);var s=null;switch(n){case"input":i=Np(e,i),r=Np(e,r),s=[];break;case"select":i=kt({},i,{value:void 0}),r=kt({},r,{value:void 0}),s=[];break;case"textarea":i=Op(e,i),r=Op(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ou)}Mp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(hl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(hl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};W1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oa(e,t){if(!_t)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function on(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function FI(e,t,n){var r=t.pendingProps;switch(Fg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(t),null;case 1:return An(t.type)&&Pu(),on(t),null;case 3:return r=t.stateNode,Jo(),mt(Rn),mt(cn),Hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lr!==null&&(gm(lr),lr=null))),lm(e,t),on(t),null;case 5:Wg(t);var i=ws(Cl.current);if(n=t.type,e!==null&&t.stateNode!=null)V1(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(B(166));return on(t),null}if(e=ws(jr.current),Vc(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Or]=t,r[kl]=s,e=(t.mode&1)!==0,n){case"dialog":ht("cancel",r),ht("close",r);break;case"iframe":case"object":case"embed":ht("load",r);break;case"video":case"audio":for(i=0;i<Za.length;i++)ht(Za[i],r);break;case"source":ht("error",r);break;case"img":case"image":case"link":ht("error",r),ht("load",r);break;case"details":ht("toggle",r);break;case"input":Vv(r,s),ht("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ht("invalid",r);break;case"textarea":Hv(r,s),ht("invalid",r)}Mp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Bc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Bc(r.textContent,a,e),i=["children",""+a]):hl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",r)}switch(n){case"input":Pc(r),Wv(r,s,!0);break;case"textarea":Pc(r),Yv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ou)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yx(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Or]=t,e[kl]=r,B1(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fp(n,r),n){case"dialog":ht("cancel",e),ht("close",e),i=r;break;case"iframe":case"object":case"embed":ht("load",e),i=r;break;case"video":case"audio":for(i=0;i<Za.length;i++)ht(Za[i],e);i=r;break;case"source":ht("error",e),i=r;break;case"img":case"image":case"link":ht("error",e),ht("load",e),i=r;break;case"details":ht("toggle",e),i=r;break;case"input":Vv(e,r),i=Np(e,r),ht("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=kt({},r,{value:void 0}),ht("invalid",e);break;case"textarea":Hv(e,r),i=Op(e,r),ht("invalid",e);break;default:i=r}Mp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wx(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vx(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pl(e,l):typeof l=="number"&&pl(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",e):l!=null&&xg(e,s,l,o))}switch(n){case"input":Pc(e),Wv(e,r,!1);break;case"textarea":Pc(e),Yv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+es(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Oo(e,!!r.multiple,s,!1):r.defaultValue!=null&&Oo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ou)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return on(t),null;case 6:if(e&&t.stateNode!=null)W1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(B(166));if(n=ws(Cl.current),ws(jr.current),Vc(t)){if(r=t.stateNode,n=t.memoizedProps,r[Or]=t,(s=r.nodeValue!==n)&&(e=jn,e!==null))switch(e.tag){case 3:Bc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bc(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Or]=t,t.stateNode=r}return on(t),null;case 13:if(mt(xt),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_t&&Ln!==null&&t.mode&1&&!(t.flags&128))a1(),Qo(),t.flags|=98560,s=!1;else if(s=Vc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(B(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[Or]=t}else Qo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;on(t),s=!1}else lr!==null&&(gm(lr),lr=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xt.current&1?jt===0&&(jt=3):ry())),t.updateQueue!==null&&(t.flags|=4),on(t),null);case 4:return Jo(),lm(e,t),e===null&&xl(t.stateNode.containerInfo),on(t),null;case 10:return $g(t.type._context),on(t),null;case 17:return An(t.type)&&Pu(),on(t),null;case 19:if(mt(xt),s=t.memoizedState,s===null)return on(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Oa(s,!1);else{if(jt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Uu(e),o!==null){for(t.flags|=128,Oa(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ut(xt,xt.current&1|2),t.child}e=e.sibling}s.tail!==null&&At()>ta&&(t.flags|=128,r=!0,Oa(s,!1),t.lanes=4194304)}else{if(!r)if(e=Uu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return on(t),null}else 2*At()-s.renderingStartTime>ta&&n!==1073741824&&(t.flags|=128,r=!0,Oa(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=At(),t.sibling=null,n=xt.current,ut(xt,r?n&1|2:n&1),t):(on(t),null);case 22:case 23:return ny(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pn&1073741824&&(on(t),t.subtreeFlags&6&&(t.flags|=8192)):on(t),null;case 24:return null;case 25:return null}throw Error(B(156,t.tag))}function LI(e,t){switch(Fg(t),t.tag){case 1:return An(t.type)&&Pu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jo(),mt(Rn),mt(cn),Hg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Wg(t),null;case 13:if(mt(xt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(B(340));Qo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mt(xt),null;case 4:return Jo(),null;case 10:return $g(t.type._context),null;case 22:case 23:return ny(),null;case 24:return null;default:return null}}var Yc=!1,an=!1,zI=typeof WeakSet=="function"?WeakSet:Set,ae=null;function bo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){bt(e,t,r)}else n.current=null}function cm(e,t,n){try{n()}catch(r){bt(e,t,r)}}var M0=!1;function jI(e,t){if(Yp=Nu,e=Zx(),Pg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=e,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===e)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gp={focusedElem:e,selectionRange:n},Nu=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var p=m.memoizedProps,k=m.memoizedState,v=t.stateNode,h=v.getSnapshotBeforeUpdate(t.elementType===t.type?p:or(t.type,p),k);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(b){bt(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return m=M0,M0=!1,m}function tl(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&cm(t,n,s)}i=i.next}while(i!==r)}}function qd(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function um(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function H1(e){var t=e.alternate;t!==null&&(e.alternate=null,H1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Or],delete t[kl],delete t[qp],delete t[xI],delete t[SI])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Y1(e){return e.tag===5||e.tag===3||e.tag===4}function F0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ou));else if(r!==4&&(e=e.child,e!==null))for(dm(e,t,n),e=e.sibling;e!==null;)dm(e,t,n),e=e.sibling}function fm(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fm(e,t,n),e=e.sibling;e!==null;)fm(e,t,n),e=e.sibling}var Qt=null,ar=!1;function Ei(e,t,n){for(n=n.child;n!==null;)G1(e,t,n),n=n.sibling}function G1(e,t,n){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(Bd,n)}catch{}switch(n.tag){case 5:an||bo(n,t);case 6:var r=Qt,i=ar;Qt=null,Ei(e,t,n),Qt=r,ar=i,Qt!==null&&(ar?(e=Qt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Qt.removeChild(n.stateNode));break;case 18:Qt!==null&&(ar?(e=Qt,n=n.stateNode,e.nodeType===8?wh(e.parentNode,n):e.nodeType===1&&wh(e,n),vl(e)):wh(Qt,n.stateNode));break;case 4:r=Qt,i=ar,Qt=n.stateNode.containerInfo,ar=!0,Ei(e,t,n),Qt=r,ar=i;break;case 0:case 11:case 14:case 15:if(!an&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cm(n,t,o),i=i.next}while(i!==r)}Ei(e,t,n);break;case 1:if(!an&&(bo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){bt(n,t,a)}Ei(e,t,n);break;case 21:Ei(e,t,n);break;case 22:n.mode&1?(an=(r=an)||n.memoizedState!==null,Ei(e,t,n),an=r):Ei(e,t,n);break;default:Ei(e,t,n)}}function L0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zI),t.forEach(function(r){var i=ZI.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function sr(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Qt=a.stateNode,ar=!1;break e;case 3:Qt=a.stateNode.containerInfo,ar=!0;break e;case 4:Qt=a.stateNode.containerInfo,ar=!0;break e}a=a.return}if(Qt===null)throw Error(B(160));G1(s,o,i),Qt=null,ar=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){bt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Z1(t,e),t=t.sibling}function Z1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sr(t,e),Ir(e),r&4){try{tl(3,e,e.return),qd(3,e)}catch(p){bt(e,e.return,p)}try{tl(5,e,e.return)}catch(p){bt(e,e.return,p)}}break;case 1:sr(t,e),Ir(e),r&512&&n!==null&&bo(n,n.return);break;case 5:if(sr(t,e),Ir(e),r&512&&n!==null&&bo(n,n.return),e.flags&32){var i=e.stateNode;try{pl(i,"")}catch(p){bt(e,e.return,p)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mx(i,s),Fp(a,o);var c=Fp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?wx(i,d):u==="dangerouslySetInnerHTML"?vx(i,d):u==="children"?pl(i,d):xg(i,u,d,c)}switch(a){case"input":Rp(i,s);break;case"textarea":gx(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Oo(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Oo(i,!!s.multiple,s.defaultValue,!0):Oo(i,!!s.multiple,s.multiple?[]:"",!1))}i[kl]=s}catch(p){bt(e,e.return,p)}}break;case 6:if(sr(t,e),Ir(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(p){bt(e,e.return,p)}}break;case 3:if(sr(t,e),Ir(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vl(t.containerInfo)}catch(p){bt(e,e.return,p)}break;case 4:sr(t,e),Ir(e);break;case 13:sr(t,e),Ir(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ey=At())),r&4&&L0(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(an=(c=an)||u,sr(t,e),an=c):sr(t,e),Ir(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(ae=e,u=e.child;u!==null;){for(d=ae=u;ae!==null;){switch(f=ae,g=f.child,f.tag){case 0:case 11:case 14:case 15:tl(4,f,f.return);break;case 1:bo(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(p){bt(r,n,p)}}break;case 5:bo(f,f.return);break;case 22:if(f.memoizedState!==null){j0(d);continue}}g!==null?(g.return=f,ae=g):j0(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_x("display",o))}catch(p){bt(e,e.return,p)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(p){bt(e,e.return,p)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sr(t,e),Ir(e),r&4&&L0(e);break;case 21:break;default:sr(t,e),Ir(e)}}function Ir(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Y1(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pl(i,""),r.flags&=-33);var s=F0(e);fm(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=F0(e);dm(e,a,o);break;default:throw Error(B(161))}}catch(l){bt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $I(e,t,n){ae=e,K1(e)}function K1(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var i=ae,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Yc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||an;a=Yc;var c=an;if(Yc=o,(an=l)&&!c)for(ae=i;ae!==null;)o=ae,l=o.child,o.tag===22&&o.memoizedState!==null?$0(i):l!==null?(l.return=o,ae=l):$0(i);for(;s!==null;)ae=s,K1(s),s=s.sibling;ae=i,Yc=a,an=c}z0(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ae=s):z0(e)}}function z0(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:an||qd(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!an)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:or(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&x0(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}x0(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&vl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}an||t.flags&512&&um(t)}catch(f){bt(t,t.return,f)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function j0(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function $0(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qd(4,t)}catch(l){bt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){bt(t,i,l)}}var s=t.return;try{um(t)}catch(l){bt(t,s,l)}break;case 5:var o=t.return;try{um(t)}catch(l){bt(t,o,l)}}}catch(l){bt(t,t.return,l)}if(t===e){ae=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ae=a;break}ae=t.return}}var UI=Math.ceil,Wu=Si.ReactCurrentDispatcher,Xg=Si.ReactCurrentOwner,Qn=Si.ReactCurrentBatchConfig,Ye=0,Gt=null,Ot=null,Jt=0,Pn=0,Co=cs(0),jt=0,Dl=null,Ps=0,Qd=0,Jg=0,nl=null,Tn=null,ey=0,ta=1/0,Jr=null,Hu=!1,hm=null,Hi=null,Gc=!1,Mi=null,Yu=0,rl=0,pm=null,pu=-1,mu=0;function vn(){return Ye&6?At():pu!==-1?pu:pu=At()}function Yi(e){return e.mode&1?Ye&2&&Jt!==0?Jt&-Jt:bI.transition!==null?(mu===0&&(mu=Ax()),mu):(e=et,e!==0||(e=window.event,e=e===void 0?16:jx(e.type)),e):1}function mr(e,t,n,r){if(50<rl)throw rl=0,pm=null,Error(B(185));oc(e,n,r),(!(Ye&2)||e!==Gt)&&(e===Gt&&(!(Ye&2)&&(Qd|=n),jt===4&&Ai(e,Jt)),On(e,r),n===1&&Ye===0&&!(t.mode&1)&&(ta=At()+500,Gd&&us()))}function On(e,t){var n=e.callbackNode;bT(e,t);var r=Du(e,e===Gt?Jt:0);if(r===0)n!==null&&Kv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kv(n),t===1)e.tag===0?kI(U0.bind(null,e)):i1(U0.bind(null,e)),_I(function(){!(Ye&6)&&us()}),n=null;else{switch(Ox(r)){case 1:n=Eg;break;case 4:n=Nx;break;case 16:n=Iu;break;case 536870912:n=Rx;break;default:n=Iu}n=rS(n,q1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function q1(e,t){if(pu=-1,mu=0,Ye&6)throw Error(B(327));var n=e.callbackNode;if(zo()&&e.callbackNode!==n)return null;var r=Du(e,e===Gt?Jt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gu(e,r);else{t=r;var i=Ye;Ye|=2;var s=X1();(Gt!==e||Jt!==t)&&(Jr=null,ta=At()+500,Es(e,t));do try{WI();break}catch(a){Q1(e,a)}while(1);jg(),Wu.current=s,Ye=i,Ot!==null?t=0:(Gt=null,Jt=0,t=jt)}if(t!==0){if(t===2&&(i=Up(e),i!==0&&(r=i,t=mm(e,i))),t===1)throw n=Dl,Es(e,0),Ai(e,r),On(e,At()),n;if(t===6)Ai(e,r);else{if(i=e.current.alternate,!(r&30)&&!BI(i)&&(t=Gu(e,r),t===2&&(s=Up(e),s!==0&&(r=s,t=mm(e,s))),t===1))throw n=Dl,Es(e,0),Ai(e,r),On(e,At()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(B(345));case 2:ps(e,Tn,Jr);break;case 3:if(Ai(e,r),(r&130023424)===r&&(t=ey+500-At(),10<t)){if(Du(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){vn(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Kp(ps.bind(null,e,Tn,Jr),t);break}ps(e,Tn,Jr);break;case 4:if(Ai(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-pr(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=At()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UI(r/1960))-r,10<r){e.timeoutHandle=Kp(ps.bind(null,e,Tn,Jr),r);break}ps(e,Tn,Jr);break;case 5:ps(e,Tn,Jr);break;default:throw Error(B(329))}}}return On(e,At()),e.callbackNode===n?q1.bind(null,e):null}function mm(e,t){var n=nl;return e.current.memoizedState.isDehydrated&&(Es(e,t).flags|=256),e=Gu(e,t),e!==2&&(t=Tn,Tn=n,t!==null&&gm(t)),e}function gm(e){Tn===null?Tn=e:Tn.push.apply(Tn,e)}function BI(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wr(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ai(e,t){for(t&=~Jg,t&=~Qd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pr(t),r=1<<n;e[n]=-1,t&=~r}}function U0(e){if(Ye&6)throw Error(B(327));zo();var t=Du(e,0);if(!(t&1))return On(e,At()),null;var n=Gu(e,t);if(e.tag!==0&&n===2){var r=Up(e);r!==0&&(t=r,n=mm(e,r))}if(n===1)throw n=Dl,Es(e,0),Ai(e,t),On(e,At()),n;if(n===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ps(e,Tn,Jr),On(e,At()),null}function ty(e,t){var n=Ye;Ye|=1;try{return e(t)}finally{Ye=n,Ye===0&&(ta=At()+500,Gd&&us())}}function Ms(e){Mi!==null&&Mi.tag===0&&!(Ye&6)&&zo();var t=Ye;Ye|=1;var n=Qn.transition,r=et;try{if(Qn.transition=null,et=1,e)return e()}finally{et=r,Qn.transition=n,Ye=t,!(Ye&6)&&us()}}function ny(){Pn=Co.current,mt(Co)}function Es(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vI(n)),Ot!==null)for(n=Ot.return;n!==null;){var r=n;switch(Fg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pu();break;case 3:Jo(),mt(Rn),mt(cn),Hg();break;case 5:Wg(r);break;case 4:Jo();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:$g(r.type._context);break;case 22:case 23:ny()}n=n.return}if(Gt=e,Ot=e=Gi(e.current,null),Jt=Pn=t,jt=0,Dl=null,Jg=Qd=Ps=0,Tn=nl=null,_s!==null){for(t=0;t<_s.length;t++)if(n=_s[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_s=null}return e}function Q1(e,t){do{var n=Ot;try{if(jg(),du.current=Vu,Bu){for(var r=St.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bu=!1}if(Os=0,Ht=Ft=St=null,el=!1,El=0,Xg.current=null,n===null||n.return===null){jt=1,Dl=t,Ot=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=I0(o);if(g!==null){g.flags&=-257,D0(g,o,a,s,t),g.mode&1&&T0(s,c,t),t=g,l=c;var m=t.updateQueue;if(m===null){var p=new Set;p.add(l),t.updateQueue=p}else m.add(l);break e}else{if(!(t&1)){T0(s,c,t),ry();break e}l=Error(B(426))}}else if(_t&&a.mode&1){var k=I0(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),D0(k,o,a,s,t),Lg(ea(l,a));break e}}s=l=ea(l,a),jt!==4&&(jt=2),nl===null?nl=[s]:nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var v=P1(s,l,t);w0(s,v);break e;case 1:a=l;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Hi===null||!Hi.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var b=M1(s,a,t);w0(s,b);break e}}s=s.return}while(s!==null)}eS(n)}catch(x){t=x,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(1)}function X1(){var e=Wu.current;return Wu.current=Vu,e===null?Vu:e}function ry(){(jt===0||jt===3||jt===2)&&(jt=4),Gt===null||!(Ps&268435455)&&!(Qd&268435455)||Ai(Gt,Jt)}function Gu(e,t){var n=Ye;Ye|=2;var r=X1();(Gt!==e||Jt!==t)&&(Jr=null,Es(e,t));do try{VI();break}catch(i){Q1(e,i)}while(1);if(jg(),Ye=n,Wu.current=r,Ot!==null)throw Error(B(261));return Gt=null,Jt=0,jt}function VI(){for(;Ot!==null;)J1(Ot)}function WI(){for(;Ot!==null&&!mT();)J1(Ot)}function J1(e){var t=nS(e.alternate,e,Pn);e.memoizedProps=e.pendingProps,t===null?eS(e):Ot=t,Xg.current=null}function eS(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=LI(n,t),n!==null){n.flags&=32767,Ot=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{jt=6,Ot=null;return}}else if(n=FI(n,t,Pn),n!==null){Ot=n;return}if(t=t.sibling,t!==null){Ot=t;return}Ot=t=e}while(t!==null);jt===0&&(jt=5)}function ps(e,t,n){var r=et,i=Qn.transition;try{Qn.transition=null,et=1,HI(e,t,n,r)}finally{Qn.transition=i,et=r}return null}function HI(e,t,n,r){do zo();while(Mi!==null);if(Ye&6)throw Error(B(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(CT(e,s),e===Gt&&(Ot=Gt=null,Jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gc||(Gc=!0,rS(Iu,function(){return zo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=et;et=1;var a=Ye;Ye|=4,Xg.current=null,jI(e,n),Z1(n,e),dI(Gp),Nu=!!Yp,Gp=Yp=null,e.current=n,$I(n),gT(),Ye=a,et=o,Qn.transition=s}else e.current=n;if(Gc&&(Gc=!1,Mi=e,Yu=i),s=e.pendingLanes,s===0&&(Hi=null),_T(n.stateNode),On(e,At()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hu)throw Hu=!1,e=hm,hm=null,e;return Yu&1&&e.tag!==0&&zo(),s=e.pendingLanes,s&1?e===pm?rl++:(rl=0,pm=e):rl=0,us(),null}function zo(){if(Mi!==null){var e=Ox(Yu),t=Qn.transition,n=et;try{if(Qn.transition=null,et=16>e?16:e,Mi===null)var r=!1;else{if(e=Mi,Mi=null,Yu=0,Ye&6)throw Error(B(331));var i=Ye;for(Ye|=4,ae=e.current;ae!==null;){var s=ae,o=s.child;if(ae.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ae=c;ae!==null;){var u=ae;switch(u.tag){case 0:case 11:case 15:tl(8,u,s)}var d=u.child;if(d!==null)d.return=u,ae=d;else for(;ae!==null;){u=ae;var f=u.sibling,g=u.return;if(H1(u),u===c){ae=null;break}if(f!==null){f.return=g,ae=f;break}ae=g}}}var m=s.alternate;if(m!==null){var p=m.child;if(p!==null){m.child=null;do{var k=p.sibling;p.sibling=null,p=k}while(p!==null)}}ae=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ae=o;else e:for(;ae!==null;){if(s=ae,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tl(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,ae=v;break e}ae=s.return}}var h=e.current;for(ae=h;ae!==null;){o=ae;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ae=y;else e:for(o=h;ae!==null;){if(a=ae,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:qd(9,a)}}catch(x){bt(a,a.return,x)}if(a===o){ae=null;break e}var b=a.sibling;if(b!==null){b.return=a.return,ae=b;break e}ae=a.return}}if(Ye=i,us(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(Bd,e)}catch{}r=!0}return r}finally{et=n,Qn.transition=t}}return!1}function B0(e,t,n){t=ea(n,t),t=P1(e,t,1),e=Wi(e,t,1),t=vn(),e!==null&&(oc(e,1,t),On(e,t))}function bt(e,t,n){if(e.tag===3)B0(e,e,n);else for(;t!==null;){if(t.tag===3){B0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hi===null||!Hi.has(r))){e=ea(n,e),e=M1(t,e,1),t=Wi(t,e,1),e=vn(),t!==null&&(oc(t,1,e),On(t,e));break}}t=t.return}}function YI(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=vn(),e.pingedLanes|=e.suspendedLanes&n,Gt===e&&(Jt&n)===n&&(jt===4||jt===3&&(Jt&130023424)===Jt&&500>At()-ey?Es(e,0):Jg|=n),On(e,t)}function tS(e,t){t===0&&(e.mode&1?(t=Lc,Lc<<=1,!(Lc&130023424)&&(Lc=4194304)):t=1);var n=vn();e=gi(e,t),e!==null&&(oc(e,t,n),On(e,n))}function GI(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tS(e,n)}function ZI(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(t),tS(e,n)}var nS;nS=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rn.current)Dn=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Dn=!1,MI(e,t,n);Dn=!!(e.flags&131072)}else Dn=!1,_t&&t.flags&1048576&&s1(t,Lu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;hu(e,t),e=t.pendingProps;var i=qo(t,cn.current);Lo(t,n),i=Gg(null,t,r,e,i,n);var s=Zg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,An(r)?(s=!0,Mu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bg(t),i.updater=Zd,t.stateNode=i,i._reactInternals=t,nm(t,r,e,n),t=sm(null,t,r,!0,s,n)):(t.tag=0,_t&&s&&Mg(t),mn(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(hu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=qI(r),e=or(r,e),i){case 0:t=im(null,t,r,e,n);break e;case 1:t=A0(null,t,r,e,n);break e;case 11:t=N0(null,t,r,e,n);break e;case 14:t=R0(null,t,r,or(r.type,e),n);break e}throw Error(B(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:or(r,i),im(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:or(r,i),A0(e,t,r,i,n);case 3:e:{if(j1(t),e===null)throw Error(B(387));r=t.pendingProps,s=t.memoizedState,i=s.element,c1(e,t),$u(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ea(Error(B(423)),t),t=O0(e,t,r,n,i);break e}else if(r!==i){i=ea(Error(B(424)),t),t=O0(e,t,r,n,i);break e}else for(Ln=Vi(t.stateNode.containerInfo.firstChild),jn=t,_t=!0,lr=null,n=h1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),r===i){t=yi(e,t,n);break e}mn(e,t,r,n)}t=t.child}return t;case 5:return p1(t),e===null&&Jp(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Zp(r,i)?o=null:s!==null&&Zp(r,s)&&(t.flags|=32),z1(e,t),mn(e,t,o,n),t.child;case 6:return e===null&&Jp(t),null;case 13:return $1(e,t,n);case 4:return Vg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Xo(t,null,r,n):mn(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:or(r,i),N0(e,t,r,i,n);case 7:return mn(e,t,t.pendingProps,n),t.child;case 8:return mn(e,t,t.pendingProps.children,n),t.child;case 12:return mn(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ut(zu,r._currentValue),r._currentValue=o,s!==null)if(wr(s.value,o)){if(s.children===i.children&&!Rn.current){t=yi(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=li(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),em(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),em(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mn(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lo(t,n),i=Xn(i),r=r(i),t.flags|=1,mn(e,t,r,n),t.child;case 14:return r=t.type,i=or(r,t.pendingProps),i=or(r.type,i),R0(e,t,r,i,n);case 15:return F1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:or(r,i),hu(e,t),t.tag=1,An(r)?(e=!0,Mu(t)):e=!1,Lo(t,n),d1(t,r,i),nm(t,r,i,n),sm(null,t,r,!0,e,n);case 19:return U1(e,t,n);case 22:return L1(e,t,n)}throw Error(B(156,t.tag))};function rS(e,t){return Dx(e,t)}function KI(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,t,n,r){return new KI(e,t,n,r)}function iy(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qI(e){if(typeof e=="function")return iy(e)?1:0;if(e!=null){if(e=e.$$typeof,e===kg)return 11;if(e===bg)return 14}return 2}function Gi(e,t){var n=e.alternate;return n===null?(n=Kn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gu(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")iy(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case mo:return Ts(n.children,i,s,t);case Sg:o=8,i|=8;break;case Ep:return e=Kn(12,n,t,i|2),e.elementType=Ep,e.lanes=s,e;case Tp:return e=Kn(13,n,t,i),e.elementType=Tp,e.lanes=s,e;case Ip:return e=Kn(19,n,t,i),e.elementType=Ip,e.lanes=s,e;case fx:return Xd(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ux:o=10;break e;case dx:o=9;break e;case kg:o=11;break e;case bg:o=14;break e;case Di:o=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return t=Kn(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Ts(e,t,n,r){return e=Kn(7,e,r,t),e.lanes=n,e}function Xd(e,t,n,r){return e=Kn(22,e,r,t),e.elementType=fx,e.lanes=n,e.stateNode={isHidden:!1},e}function Ih(e,t,n){return e=Kn(6,e,null,t),e.lanes=n,e}function Dh(e,t,n){return t=Kn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function QI(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ch(0),this.expirationTimes=ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ch(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sy(e,t,n,r,i,s,o,a,l){return e=new QI(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Kn(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bg(s),e}function XI(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function iS(e){if(!e)return ts;e=e._reactInternals;e:{if(Gs(e)!==e||e.tag!==1)throw Error(B(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(An(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(B(171))}if(e.tag===1){var n=e.type;if(An(n))return r1(e,n,t)}return t}function sS(e,t,n,r,i,s,o,a,l){return e=sy(n,r,!0,e,i,s,o,a,l),e.context=iS(null),n=e.current,r=vn(),i=Yi(n),s=li(r,i),s.callback=t??null,Wi(n,s,i),e.current.lanes=i,oc(e,i,r),On(e,r),e}function Jd(e,t,n,r){var i=t.current,s=vn(),o=Yi(i);return n=iS(n),t.context===null?t.context=n:t.pendingContext=n,t=li(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wi(i,t,o),e!==null&&(mr(e,i,o,s),uu(e,i,o)),o}function Zu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function V0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function oy(e,t){V0(e,t),(e=e.alternate)&&V0(e,t)}function JI(){return null}var oS=typeof reportError=="function"?reportError:function(e){console.error(e)};function ay(e){this._internalRoot=e}ef.prototype.render=ay.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(B(409));Jd(e,t,null,null)};ef.prototype.unmount=ay.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ms(function(){Jd(null,e,null,null)}),t[mi]=null}};function ef(e){this._internalRoot=e}ef.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ri.length&&t!==0&&t<Ri[n].priority;n++);Ri.splice(n,0,e),n===0&&zx(e)}};function ly(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function W0(){}function eD(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Zu(o);s.call(c)}}var o=sS(t,r,e,0,null,!1,!1,"",W0);return e._reactRootContainer=o,e[mi]=o.current,xl(e.nodeType===8?e.parentNode:e),Ms(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Zu(l);a.call(c)}}var l=sy(e,0,!1,null,null,!1,!1,"",W0);return e._reactRootContainer=l,e[mi]=l.current,xl(e.nodeType===8?e.parentNode:e),Ms(function(){Jd(t,l,n,r)}),l}function nf(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zu(o);a.call(l)}}Jd(t,o,e,i)}else o=eD(n,t,e,i,r);return Zu(o)}Px=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ga(t.pendingLanes);n!==0&&(Tg(t,n|1),On(t,At()),!(Ye&6)&&(ta=At()+500,us()))}break;case 13:Ms(function(){var r=gi(e,1);if(r!==null){var i=vn();mr(r,e,1,i)}}),oy(e,1)}};Ig=function(e){if(e.tag===13){var t=gi(e,134217728);if(t!==null){var n=vn();mr(t,e,134217728,n)}oy(e,134217728)}};Mx=function(e){if(e.tag===13){var t=Yi(e),n=gi(e,t);if(n!==null){var r=vn();mr(n,e,t,r)}oy(e,t)}};Fx=function(){return et};Lx=function(e,t){var n=et;try{return et=e,t()}finally{et=n}};zp=function(e,t,n){switch(t){case"input":if(Rp(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Yd(r);if(!i)throw Error(B(90));px(r),Rp(r,i)}}}break;case"textarea":gx(e,n);break;case"select":t=n.value,t!=null&&Oo(e,!!n.multiple,t,!1)}};kx=ty;bx=Ms;var tD={usingClientEntryPoint:!1,Events:[lc,_o,Yd,xx,Sx,ty]},Pa={findFiberByHostInstance:vs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nD={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tx(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||JI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zc.isDisabled&&Zc.supportsFiber)try{Bd=Zc.inject(nD),zr=Zc}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tD;Un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ly(t))throw Error(B(200));return XI(e,t,null,n)};Un.createRoot=function(e,t){if(!ly(e))throw Error(B(299));var n=!1,r="",i=oS;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=sy(e,1,!1,null,null,n,!1,r,i),e[mi]=t.current,xl(e.nodeType===8?e.parentNode:e),new ay(t)};Un.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=Tx(t),e=e===null?null:e.stateNode,e};Un.flushSync=function(e){return Ms(e)};Un.hydrate=function(e,t,n){if(!tf(t))throw Error(B(200));return nf(null,e,t,!0,n)};Un.hydrateRoot=function(e,t,n){if(!ly(e))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oS;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=sS(t,null,e,1,n??null,i,!1,s,o),e[mi]=t.current,xl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ef(t)};Un.render=function(e,t,n){if(!tf(t))throw Error(B(200));return nf(null,e,t,!1,n)};Un.unmountComponentAtNode=function(e){if(!tf(e))throw Error(B(40));return e._reactRootContainer?(Ms(function(){nf(null,null,e,!1,function(){e._reactRootContainer=null,e[mi]=null})}),!0):!1};Un.unstable_batchedUpdates=ty;Un.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!tf(n))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return nf(e,t,n,!1,r)};Un.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Un})(JE);var H0=kp;Sp.createRoot=H0.createRoot,Sp.hydrateRoot=H0.hydrateRoot;var ym=function(e,t){return ym=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},ym(e,t)};function rD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ym(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Vt=function(){return Vt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Vt.apply(this,arguments)};function iD(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function io(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(d){o(d)}}function l(u){try{c(r.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function so(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(n=0)),n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Ar(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function uy(e,t){return e(t={exports:{}},t.exports),t.exports}var ms=uy(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function r(){var i=this;this.locked=new Map,this.addToLocked=function(s,o){var a=i.locked.get(s);a===void 0?o===void 0?i.locked.set(s,[]):i.locked.set(s,[o]):o!==void 0&&(a.unshift(o),i.locked.set(s,a))},this.isLocked=function(s){return i.locked.has(s)},this.lock=function(s){return new Promise(function(o,a){i.isLocked(s)?i.addToLocked(s,o):(i.addToLocked(s),o())})},this.unlock=function(s){var o=i.locked.get(s);if(o!==void 0&&o.length!==0){var a=o.pop();i.locked.set(s,o),a!==void 0&&setTimeout(a,0)}else i.locked.delete(s)}}return r.getInstance=function(){return r.instance===void 0&&(r.instance=new r),r.instance},r}();t.default=function(){return n.getInstance()}});cy(ms);var sD=cy(uy(function(e,t){var n=Eo&&Eo.__awaiter||function(l,c,u,d){return new(u||(u=Promise))(function(f,g){function m(v){try{k(d.next(v))}catch(h){g(h)}}function p(v){try{k(d.throw(v))}catch(h){g(h)}}function k(v){v.done?f(v.value):new u(function(h){h(v.value)}).then(m,p)}k((d=d.apply(l,c||[])).next())})},r=Eo&&Eo.__generator||function(l,c){var u,d,f,g,m={label:0,sent:function(){if(1&f[0])throw f[1];return f[1]},trys:[],ops:[]};return g={next:p(0),throw:p(1),return:p(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function p(k){return function(v){return function(h){if(u)throw new TypeError("Generator is already executing.");for(;m;)try{if(u=1,d&&(f=2&h[0]?d.return:h[0]?d.throw||((f=d.return)&&f.call(d),0):d.next)&&!(f=f.call(d,h[1])).done)return f;switch(d=0,f&&(h=[2&h[0],f.value]),h[0]){case 0:case 1:f=h;break;case 4:return m.label++,{value:h[1],done:!1};case 5:m.label++,d=h[1],h=[0];continue;case 7:h=m.ops.pop(),m.trys.pop();continue;default:if(f=m.trys,!((f=f.length>0&&f[f.length-1])||h[0]!==6&&h[0]!==2)){m=0;continue}if(h[0]===3&&(!f||h[1]>f[0]&&h[1]<f[3])){m.label=h[1];break}if(h[0]===6&&m.label<f[1]){m.label=f[1],f=h;break}if(f&&m.label<f[2]){m.label=f[2],m.ops.push(h);break}f[2]&&m.ops.pop(),m.trys.pop();continue}h=c.call(l,m)}catch(y){h=[6,y],d=0}finally{u=f=0}if(5&h[0])throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}([k,v])}}};Object.defineProperty(t,"__esModule",{value:!0});var i="browser-tabs-lock-key";function s(l){return new Promise(function(c){return setTimeout(c,l)})}function o(l){for(var c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",u="",d=0;d<l;d++)u+=c[Math.floor(Math.random()*c.length)];return u}var a=function(){function l(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+o(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),l.waiters===void 0&&(l.waiters=[])}return l.prototype.acquireLock=function(c,u){return u===void 0&&(u=5e3),n(this,void 0,void 0,function(){var d,f,g,m,p,k;return r(this,function(v){switch(v.label){case 0:d=Date.now()+o(4),f=Date.now()+u,g=i+"-"+c,m=window.localStorage,v.label=1;case 1:return Date.now()<f?[4,s(30)]:[3,8];case 2:return v.sent(),m.getItem(g)!==null?[3,5]:(p=this.id+"-"+c+"-"+d,[4,s(Math.floor(25*Math.random()))]);case 3:return v.sent(),m.setItem(g,JSON.stringify({id:this.id,iat:d,timeoutKey:p,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,s(30)];case 4:return v.sent(),(k=m.getItem(g))!==null&&(k=JSON.parse(k)).id===this.id&&k.iat===d?(this.acquiredIatSet.add(d),this.refreshLockWhileAcquired(g,d),[2,!0]):[3,7];case 5:return l.lockCorrector(),[4,this.waitForSomethingToChange(f)];case 6:v.sent(),v.label=7;case 7:return d=Date.now()+o(4),[3,1];case 8:return[2,!1]}})})},l.prototype.refreshLockWhileAcquired=function(c,u){return n(this,void 0,void 0,function(){var d=this;return r(this,function(f){return setTimeout(function(){return n(d,void 0,void 0,function(){var g,m;return r(this,function(p){switch(p.label){case 0:return[4,ms.default().lock(u)];case 1:return p.sent(),this.acquiredIatSet.has(u)?(g=window.localStorage,(m=g.getItem(c))===null?(ms.default().unlock(u),[2]):((m=JSON.parse(m)).timeRefreshed=Date.now(),g.setItem(c,JSON.stringify(m)),ms.default().unlock(u),this.refreshLockWhileAcquired(c,u),[2])):(ms.default().unlock(u),[2])}})})},1e3),[2]})})},l.prototype.waitForSomethingToChange=function(c){return n(this,void 0,void 0,function(){return r(this,function(u){switch(u.label){case 0:return[4,new Promise(function(d){var f=!1,g=Date.now(),m=!1;function p(){if(m||(window.removeEventListener("storage",p),l.removeFromWaiting(p),clearTimeout(k),m=!0),!f){f=!0;var v=50-(Date.now()-g);v>0?setTimeout(d,v):d()}}window.addEventListener("storage",p),l.addToWaiting(p);var k=setTimeout(p,Math.max(0,c-Date.now()))})];case 1:return u.sent(),[2]}})})},l.addToWaiting=function(c){this.removeFromWaiting(c),l.waiters!==void 0&&l.waiters.push(c)},l.removeFromWaiting=function(c){l.waiters!==void 0&&(l.waiters=l.waiters.filter(function(u){return u!==c}))},l.notifyWaiters=function(){l.waiters!==void 0&&l.waiters.slice().forEach(function(c){return c()})},l.prototype.releaseLock=function(c){return n(this,void 0,void 0,function(){return r(this,function(u){switch(u.label){case 0:return[4,this.releaseLock__private__(c)];case 1:return[2,u.sent()]}})})},l.prototype.releaseLock__private__=function(c){return n(this,void 0,void 0,function(){var u,d,f;return r(this,function(g){switch(g.label){case 0:return u=window.localStorage,d=i+"-"+c,(f=u.getItem(d))===null?[2]:(f=JSON.parse(f)).id!==this.id?[3,2]:[4,ms.default().lock(f.iat)];case 1:g.sent(),this.acquiredIatSet.delete(f.iat),u.removeItem(d),ms.default().unlock(f.iat),l.notifyWaiters(),g.label=2;case 2:return[2]}})})},l.lockCorrector=function(){for(var c=Date.now()-5e3,u=window.localStorage,d=Object.keys(u),f=!1,g=0;g<d.length;g++){var m=d[g];if(m.includes(i)){var p=u.getItem(m);p!==null&&((p=JSON.parse(p)).timeRefreshed===void 0&&p.timeAcquired<c||p.timeRefreshed!==void 0&&p.timeRefreshed<c)&&(u.removeItem(m),f=!0)}}f&&l.notifyWaiters()},l.waiters=void 0,l}();t.default=a}));const oD={timeoutInSeconds:60},aS={name:"auth0-spa-js",version:"2.0.4"},lS=()=>Date.now();let ci=class vm extends Error{constructor(t,n){super(n),this.error=t,this.error_description=n,Object.setPrototypeOf(this,vm.prototype)}static fromPayload({error:t,error_description:n}){return new vm(t,n)}},aD=class cS extends ci{constructor(t,n,r,i=null){super(t,n),this.state=r,this.appState=i,Object.setPrototypeOf(this,cS.prototype)}},_m=class uS extends ci{constructor(){super("timeout","Timeout"),Object.setPrototypeOf(this,uS.prototype)}},lD=class dS extends _m{constructor(t){super(),this.popup=t,Object.setPrototypeOf(this,dS.prototype)}},cD=class fS extends ci{constructor(t){super("cancelled","Popup closed"),this.popup=t,Object.setPrototypeOf(this,fS.prototype)}},uD=class hS extends ci{constructor(t,n,r){super(t,n),this.mfa_token=r,Object.setPrototypeOf(this,hS.prototype)}},pS=class mS extends ci{constructor(t,n){super("missing_refresh_token",`Missing Refresh Token (audience: '${Y0(t,["default"])}', scope: '${Y0(n)}')`),this.audience=t,this.scope=n,Object.setPrototypeOf(this,mS.prototype)}};function Y0(e,t=[]){return e&&!t.includes(e)?e:""}const yu=()=>window.crypto,Nh=()=>{const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.";let t="";return Array.from(yu().getRandomValues(new Uint8Array(43))).forEach(n=>t+=e[n%e.length]),t},G0=e=>btoa(e),wm=e=>{var{clientId:t}=e,n=Ar(e,["clientId"]);return new URLSearchParams((r=>Object.keys(r).filter(i=>r[i]!==void 0).reduce((i,s)=>Object.assign(Object.assign({},i),{[s]:r[s]}),{}))(Object.assign({client_id:t},n))).toString()},Z0=e=>(t=>decodeURIComponent(atob(t).split("").map(n=>"%"+("00"+n.charCodeAt(0).toString(16)).slice(-2)).join("")))(e.replace(/_/g,"/").replace(/-/g,"+")),dD=async(e,t)=>{const n=await fetch(e,t);return{ok:n.ok,json:await n.json()}},fD=async(e,t,n)=>{const r=new AbortController;let i;return t.signal=r.signal,Promise.race([dD(e,t),new Promise((s,o)=>{i=setTimeout(()=>{r.abort(),o(new Error("Timeout when executing 'fetch'"))},n)})]).finally(()=>{clearTimeout(i)})},hD=async(e,t,n,r,i,s,o)=>{return a={auth:{audience:t,scope:n},timeout:i,fetchUrl:e,fetchOptions:r,useFormData:o},l=s,new Promise(function(c,u){const d=new MessageChannel;d.port1.onmessage=function(f){f.data.error?u(new Error(f.data.error)):c(f.data),d.port1.close()},l.postMessage(a,[d.port2])});var a,l},pD=async(e,t,n,r,i,s,o=1e4)=>i?hD(e,t,n,r,o,i,s):fD(e,r,o);async function mD(e,t){var{baseUrl:n,timeout:r,audience:i,scope:s,auth0Client:o,useFormData:a}=e,l=Ar(e,["baseUrl","timeout","audience","scope","auth0Client","useFormData"]);const c=a?wm(l):JSON.stringify(l);return await async function(u,d,f,g,m,p,k){let v,h=null;for(let N=0;N<3;N++)try{v=await pD(u,f,g,m,p,k,d),h=null;break}catch(z){h=z}if(h)throw h;const y=v.json,{error:b,error_description:x}=y,S=Ar(y,["error","error_description"]),{ok:C}=v;if(!C){const N=x||`HTTP error. Unable to fetch ${u}`;throw b==="mfa_required"?new uD(b,N,S.mfa_token):b==="missing_refresh_token"?new pS(f,g):new ci(b||"request_error",N)}return S}(`${n}/oauth/token`,r,i||"default",s,{method:"POST",body:c,headers:{"Content-Type":a?"application/x-www-form-urlencoded":"application/json","Auth0-Client":btoa(JSON.stringify(o||aS))}},t,a)}const Kc=(...e)=>{return(t=e.filter(Boolean).join(" ").trim().split(/\s+/),Array.from(new Set(t))).join(" ");var t};class Mr{constructor(t,n="@@auth0spajs@@",r){this.prefix=n,this.suffix=r,this.clientId=t.clientId,this.scope=t.scope,this.audience=t.audience}toKey(){return[this.prefix,this.clientId,this.audience,this.scope,this.suffix].filter(Boolean).join("::")}static fromKey(t){const[n,r,i,s]=t.split("::");return new Mr({clientId:r,scope:s,audience:i},n)}static fromCacheEntry(t){const{scope:n,audience:r,client_id:i}=t;return new Mr({scope:n,audience:r,clientId:i})}}let gD=class{set(t,n){localStorage.setItem(t,JSON.stringify(n))}get(t){const n=window.localStorage.getItem(t);if(n)try{return JSON.parse(n)}catch{return}}remove(t){localStorage.removeItem(t)}allKeys(){return Object.keys(window.localStorage).filter(t=>t.startsWith("@@auth0spajs@@"))}},gS=class{constructor(){this.enclosedCache=function(){let t={};return{set(n,r){t[n]=r},get(n){const r=t[n];if(r)return r},remove(n){delete t[n]},allKeys:()=>Object.keys(t)}}()}},yD=class{constructor(t,n,r){this.cache=t,this.keyManifest=n,this.nowProvider=r||lS}async setIdToken(t,n,r){var i;const s=this.getIdTokenCacheKey(t);await this.cache.set(s,{id_token:n,decodedToken:r}),await((i=this.keyManifest)===null||i===void 0?void 0:i.add(s))}async getIdToken(t){const n=await this.cache.get(this.getIdTokenCacheKey(t.clientId));if(!n&&t.scope&&t.audience){const r=await this.get(t);return!r||!r.id_token||!r.decodedToken?void 0:{id_token:r.id_token,decodedToken:r.decodedToken}}if(n)return{id_token:n.id_token,decodedToken:n.decodedToken}}async get(t,n=0){var r;let i=await this.cache.get(t.toKey());if(!i){const a=await this.getCacheKeys();if(!a)return;const l=this.matchExistingCacheKey(t,a);l&&(i=await this.cache.get(l))}if(!i)return;const s=await this.nowProvider(),o=Math.floor(s/1e3);return i.expiresAt-n<o?i.body.refresh_token?(i.body={refresh_token:i.body.refresh_token},await this.cache.set(t.toKey(),i),i.body):(await this.cache.remove(t.toKey()),void await((r=this.keyManifest)===null||r===void 0?void 0:r.remove(t.toKey()))):i.body}async set(t){var n;const r=new Mr({clientId:t.client_id,scope:t.scope,audience:t.audience}),i=await this.wrapCacheEntry(t);await this.cache.set(r.toKey(),i),await((n=this.keyManifest)===null||n===void 0?void 0:n.add(r.toKey()))}async clear(t){var n;const r=await this.getCacheKeys();r&&(await r.filter(i=>!t||i.includes(t)).reduce(async(i,s)=>{await i,await this.cache.remove(s)},Promise.resolve()),await((n=this.keyManifest)===null||n===void 0?void 0:n.clear()))}async wrapCacheEntry(t){const n=await this.nowProvider();return{body:t,expiresAt:Math.floor(n/1e3)+t.expires_in}}async getCacheKeys(){var t;return this.keyManifest?(t=await this.keyManifest.get())===null||t===void 0?void 0:t.keys:this.cache.allKeys?this.cache.allKeys():void 0}getIdTokenCacheKey(t){return new Mr({clientId:t},"@@auth0spajs@@","@@user@@").toKey()}matchExistingCacheKey(t,n){return n.filter(r=>{var i;const s=Mr.fromKey(r),o=new Set(s.scope&&s.scope.split(" ")),a=((i=t.scope)===null||i===void 0?void 0:i.split(" "))||[],l=s.scope&&a.reduce((c,u)=>c&&o.has(u),!0);return s.prefix==="@@auth0spajs@@"&&s.clientId===t.clientId&&s.audience===t.audience&&l})[0]}},vD=class{constructor(t,n){this.storage=t,this.clientId=n,this.storageKey=`a0.spajs.txs.${this.clientId}`,this.transaction=this.storage.get(this.storageKey)}create(t){this.transaction=t,this.storage.save(this.storageKey,t,{daysUntilExpire:1})}get(){return this.transaction}remove(){delete this.transaction,this.storage.remove(this.storageKey)}};const Ma=e=>typeof e=="number",_D=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],wD=e=>{if(!e.id_token)throw new Error("ID token is required but missing");const t=(s=>{const o=s.split("."),[a,l,c]=o;if(o.length!==3||!a||!l||!c)throw new Error("ID token could not be decoded");const u=JSON.parse(Z0(l)),d={__raw:s},f={};return Object.keys(u).forEach(g=>{d[g]=u[g],_D.includes(g)||(f[g]=u[g])}),{encoded:{header:a,payload:l,signature:c},header:JSON.parse(Z0(a)),claims:d,user:f}})(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error(`Issuer (iss) claim mismatch in the ID token; expected "${e.iss}", found "${t.claims.iss}"`);if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if(t.header.alg!=="RS256")throw new Error(`Signature algorithm of "${t.header.alg}" is not supported. Expected the ID token to be signed with "RS256".`);if(!t.claims.aud||typeof t.claims.aud!="string"&&!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but was not one of "${t.claims.aud.join(", ")}"`);if(t.claims.aud.length>1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error(`Authorized Party (azp) claim mismatch in the ID token; expected "${e.aud}", found "${t.claims.azp}"`)}}else if(t.claims.aud!==e.aud)throw new Error(`Audience (aud) claim mismatch in the ID token; expected "${e.aud}" but found "${t.claims.aud}"`);if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error(`Nonce (nonce) claim mismatch in the ID token; expected "${e.nonce}", found "${t.claims.nonce}"`)}if(e.max_age&&!Ma(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(t.claims.exp==null||!Ma(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!Ma(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");const n=e.leeway||60,r=new Date(e.now||Date.now()),i=new Date(0);if(i.setUTCSeconds(t.claims.exp+n),r>i)throw new Error(`Expiration Time (exp) claim error in the ID token; current time (${r}) is after expiration time (${i})`);if(t.claims.nbf!=null&&Ma(t.claims.nbf)){const s=new Date(0);if(s.setUTCSeconds(t.claims.nbf-n),r<s)throw new Error(`Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Current time (${r}) is before ${s}`)}if(t.claims.auth_time!=null&&Ma(t.claims.auth_time)){const s=new Date(0);if(s.setUTCSeconds(parseInt(t.claims.auth_time)+e.max_age+n),r>s)throw new Error(`Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Current time (${r}) is after last auth at ${s}`)}if(e.organizationId){if(!t.claims.org_id)throw new Error("Organization ID (org_id) claim must be a string present in the ID token");if(e.organizationId!==t.claims.org_id)throw new Error(`Organization ID (org_id) claim mismatch in the ID token; expected "${e.organizationId}", found "${t.claims.org_id}"`)}return t};var xs=uy(function(e,t){var n=Eo&&Eo.__assign||function(){return n=Object.assign||function(l){for(var c,u=1,d=arguments.length;u<d;u++)for(var f in c=arguments[u])Object.prototype.hasOwnProperty.call(c,f)&&(l[f]=c[f]);return l},n.apply(this,arguments)};function r(l,c){if(!c)return"";var u="; "+l;return c===!0?u:u+"="+c}function i(l,c,u){return encodeURIComponent(l).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(c).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(d){if(typeof d.expires=="number"){var f=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d.expires),d.expires=f}return r("Expires",d.expires?d.expires.toUTCString():"")+r("Domain",d.domain)+r("Path",d.path)+r("Secure",d.secure)+r("SameSite",d.sameSite)}(u)}function s(l){for(var c={},u=l?l.split("; "):[],d=/(%[\dA-F]{2})+/gi,f=0;f<u.length;f++){var g=u[f].split("="),m=g.slice(1).join("=");m.charAt(0)==='"'&&(m=m.slice(1,-1));try{c[g[0].replace(d,decodeURIComponent)]=m.replace(d,decodeURIComponent)}catch{}}return c}function o(){return s(document.cookie)}function a(l,c,u){document.cookie=i(l,c,n({path:"/"},u))}t.__esModule=!0,t.encode=i,t.parse=s,t.getAll=o,t.get=function(l){return o()[l]},t.set=a,t.remove=function(l,c){a(l,"",n(n({},c),{expires:-1}))}});cy(xs),xs.encode,xs.parse,xs.getAll;var xD=xs.get,yS=xs.set,vS=xs.remove;const co={get(e){const t=xD(e);if(t!==void 0)return JSON.parse(t)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0,sameSite:"none"}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),yS(e,JSON.stringify(t),r)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),vS(e,n)}},SD={get(e){return co.get(e)||co.get(`_legacy_${e}`)},save(e,t,n){let r={};window.location.protocol==="https:"&&(r={secure:!0}),n!=null&&n.daysUntilExpire&&(r.expires=n.daysUntilExpire),n!=null&&n.cookieDomain&&(r.domain=n.cookieDomain),yS(`_legacy_${e}`,JSON.stringify(t),r),co.save(e,t,n)},remove(e,t){let n={};t!=null&&t.cookieDomain&&(n.domain=t.cookieDomain),vS(e,n),co.remove(e,t),co.remove(`_legacy_${e}`,t)}},kD={get(e){if(typeof sessionStorage>"u")return;const t=sessionStorage.getItem(e);return t!=null?JSON.parse(t):void 0},save(e,t){sessionStorage.setItem(e,JSON.stringify(t))},remove(e){sessionStorage.removeItem(e)}};function bD(e,t,n){var r=t===void 0?null:t,i=function(l,c){var u=atob(l);if(c){for(var d=new Uint8Array(u.length),f=0,g=u.length;f<g;++f)d[f]=u.charCodeAt(f);return String.fromCharCode.apply(null,new Uint16Array(d.buffer))}return u}(e,n!==void 0&&n),s=i.indexOf(`
`,10)+1,o=i.substring(s)+(r?"//# sourceMappingURL="+r:""),a=new Blob([o],{type:"application/javascript"});return URL.createObjectURL(a)}var K0,q0,Q0,Rh,CD=(K0="Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Y2xhc3MgZSBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKHQscil7c3VwZXIociksdGhpcy5lcnJvcj10LHRoaXMuZXJyb3JfZGVzY3JpcHRpb249cixPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcyxlLnByb3RvdHlwZSl9c3RhdGljIGZyb21QYXlsb2FkKHtlcnJvcjp0LGVycm9yX2Rlc2NyaXB0aW9uOnJ9KXtyZXR1cm4gbmV3IGUodCxyKX19Y2xhc3MgdCBleHRlbmRzIGV7Y29uc3RydWN0b3IoZSxzKXtzdXBlcigibWlzc2luZ19yZWZyZXNoX3Rva2VuIixgTWlzc2luZyBSZWZyZXNoIFRva2VuIChhdWRpZW5jZTogJyR7cihlLFsiZGVmYXVsdCJdKX0nLCBzY29wZTogJyR7cihzKX0nKWApLHRoaXMuYXVkaWVuY2U9ZSx0aGlzLnNjb3BlPXMsT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsdC5wcm90b3R5cGUpfX1mdW5jdGlvbiByKGUsdD1bXSl7cmV0dXJuIGUmJiF0LmluY2x1ZGVzKGUpP2U6IiJ9Y29uc3Qgcz1lPT57dmFye2NsaWVudElkOnR9PWUscj1mdW5jdGlvbihlLHQpe3ZhciByPXt9O2Zvcih2YXIgcyBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHMpJiZ0LmluZGV4T2Yocyk8MCYmKHJbc109ZVtzXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKHM9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPHMubGVuZ3RoO28rKyl0LmluZGV4T2Yoc1tvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsc1tvXSkmJihyW3Nbb11dPWVbc1tvXV0pfXJldHVybiByfShlLFsiY2xpZW50SWQiXSk7cmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoKGU9Pk9iamVjdC5rZXlzKGUpLmZpbHRlcigodD0+dm9pZCAwIT09ZVt0XSkpLnJlZHVjZSgoKHQscik9Pk9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSx0KSx7W3JdOmVbcl19KSkse30pKShPYmplY3QuYXNzaWduKHtjbGllbnRfaWQ6dH0scikpKS50b1N0cmluZygpfTtsZXQgbz17fTtjb25zdCBuPShlLHQpPT5gJHtlfXwke3R9YDthZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoYXN5bmMoe2RhdGE6e3RpbWVvdXQ6ZSxhdXRoOnIsZmV0Y2hVcmw6aSxmZXRjaE9wdGlvbnM6Yyx1c2VGb3JtRGF0YTphfSxwb3J0czpbZl19KT0+e2xldCBwO2NvbnN0e2F1ZGllbmNlOmwsc2NvcGU6dX09cnx8e307dHJ5e2NvbnN0IHI9YT8oZT0+e2NvbnN0IHQ9bmV3IFVSTFNlYXJjaFBhcmFtcyhlKSxyPXt9O3JldHVybiB0LmZvckVhY2goKChlLHQpPT57clt0XT1lfSkpLHJ9KShjLmJvZHkpOkpTT04ucGFyc2UoYy5ib2R5KTtpZighci5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1yLmdyYW50X3R5cGUpe2NvbnN0IGU9KChlLHQpPT5vW24oZSx0KV0pKGwsdSk7aWYoIWUpdGhyb3cgbmV3IHQobCx1KTtjLmJvZHk9YT9zKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpOkpTT04uc3RyaW5naWZ5KE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSxyKSx7cmVmcmVzaF90b2tlbjplfSkpfWxldCBkLGc7ImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixjLnNpZ25hbD1kLnNpZ25hbCk7dHJ5e2c9YXdhaXQgUHJvbWlzZS5yYWNlKFsoaD1lLG5ldyBQcm9taXNlKChlPT5zZXRUaW1lb3V0KGUsaCkpKSksZmV0Y2goaSxPYmplY3QuYXNzaWduKHt9LGMpKV0pfWNhdGNoKGUpe3JldHVybiB2b2lkIGYucG9zdE1lc3NhZ2Uoe2Vycm9yOmUubWVzc2FnZX0pfWlmKCFnKXJldHVybiBkJiZkLmFib3J0KCksdm9pZCBmLnBvc3RNZXNzYWdlKHtlcnJvcjoiVGltZW91dCB3aGVuIGV4ZWN1dGluZyAnZmV0Y2gnIn0pO3A9YXdhaXQgZy5qc29uKCkscC5yZWZyZXNoX3Rva2VuPygoKGUsdCxyKT0+e29bbih0LHIpXT1lfSkocC5yZWZyZXNoX3Rva2VuLGwsdSksZGVsZXRlIHAucmVmcmVzaF90b2tlbik6KChlLHQpPT57ZGVsZXRlIG9bbihlLHQpXX0pKGwsdSksZi5wb3N0TWVzc2FnZSh7b2s6Zy5vayxqc29uOnB9KX1jYXRjaChlKXtmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcjplLmVycm9yLGVycm9yX2Rlc2NyaXB0aW9uOmUubWVzc2FnZX19KX12YXIgaH0pKX0oKTsKCg==",q0=null,Q0=!1,function(e){return Rh=Rh||bD(K0,q0,Q0),new Worker(Rh,e)});const Ah={};let ED=class{constructor(t,n){this.cache=t,this.clientId=n,this.manifestKey=this.createManifestKeyFrom(this.clientId)}async add(t){var n;const r=new Set(((n=await this.cache.get(this.manifestKey))===null||n===void 0?void 0:n.keys)||[]);r.add(t),await this.cache.set(this.manifestKey,{keys:[...r]})}async remove(t){const n=await this.cache.get(this.manifestKey);if(n){const r=new Set(n.keys);return r.delete(t),r.size>0?await this.cache.set(this.manifestKey,{keys:[...r]}):await this.cache.remove(this.manifestKey)}}get(){return this.cache.get(this.manifestKey)}clear(){return this.cache.remove(this.manifestKey)}createManifestKeyFrom(t){return`@@auth0spajs@@::${t}`}};const TD={memory:()=>new gS().enclosedCache,localstorage:()=>new gD},X0=e=>TD[e],J0=e=>{const{openUrl:t,onRedirect:n}=e,r=Ar(e,["openUrl","onRedirect"]);return Object.assign(Object.assign({},r),{openUrl:t===!1||t?t:n})},Oh=new sD;let ID=class{constructor(t){let n,r;if(this.userCache=new gS().enclosedCache,this.defaultOptions={authorizationParams:{scope:"openid profile email"},useRefreshTokensFallback:!1,useFormData:!0},this._releaseLockOnPageHide=async()=>{await Oh.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)},this.options=Object.assign(Object.assign(Object.assign({},this.defaultOptions),t),{authorizationParams:Object.assign(Object.assign({},this.defaultOptions.authorizationParams),t.authorizationParams)}),typeof window<"u"&&(()=>{if(!yu())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(yu().subtle===void 0)throw new Error(`
      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.
    `)})(),t.cache&&t.cacheLocation&&console.warn("Both `cache` and `cacheLocation` options have been specified in the Auth0Client configuration; ignoring `cacheLocation` and using `cache`."),t.cache)r=t.cache;else{if(n=t.cacheLocation||"memory",!X0(n))throw new Error(`Invalid cache location "${n}"`);r=X0(n)()}this.httpTimeoutMs=t.httpTimeoutInSeconds?1e3*t.httpTimeoutInSeconds:1e4,this.cookieStorage=t.legacySameSiteCookie===!1?co:SD,this.orgHintCookieName=`auth0.${this.options.clientId}.organization_hint`,this.isAuthenticatedCookieName=(o=>`auth0.${o}.is.authenticated`)(this.options.clientId),this.sessionCheckExpiryDays=t.sessionCheckExpiryDays||1;const i=t.useCookiesForTransactions?this.cookieStorage:kD;var s;this.scope=Kc("openid",this.options.authorizationParams.scope,this.options.useRefreshTokens?"offline_access":""),this.transactionManager=new vD(i,this.options.clientId),this.nowProvider=this.options.nowProvider||lS,this.cacheManager=new yD(r,r.allKeys?void 0:new ED(r,this.options.clientId),this.nowProvider),this.domainUrl=(s=this.options.domain,/^https?:\/\//.test(s)?s:`https://${s}`),this.tokenIssuer=((o,a)=>o?o.startsWith("https://")?o:`https://${o}/`:`${a}/`)(this.options.issuer,this.domainUrl),typeof window<"u"&&window.Worker&&this.options.useRefreshTokens&&n==="memory"&&(this.worker=new CD)}_url(t){const n=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client||aS)));return`${this.domainUrl}${t}&auth0Client=${n}`}_authorizeUrl(t){return this._url(`/authorize?${wm(t)}`)}async _verifyIdToken(t,n,r){const i=await this.nowProvider();return wD({iss:this.tokenIssuer,aud:this.options.clientId,id_token:t,nonce:n,organizationId:r,leeway:this.options.leeway,max_age:(s=this.options.authorizationParams.max_age,typeof s!="string"?s:parseInt(s,10)||void 0),now:i});var s}_processOrgIdHint(t){t?this.cookieStorage.save(this.orgHintCookieName,t,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}):this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain})}async _prepareAuthorizeUrl(t,n,r){const i=G0(Nh()),s=G0(Nh()),o=Nh(),a=(u=>{const d=new Uint8Array(u);return(f=>{const g={"+":"-","/":"_","=":""};return f.replace(/[+/=]/g,m=>g[m])})(window.btoa(String.fromCharCode(...Array.from(d))))})(await(async u=>await yu().subtle.digest({name:"SHA-256"},new TextEncoder().encode(u)))(o)),l=((u,d,f,g,m,p,k,v)=>Object.assign(Object.assign(Object.assign({client_id:u.clientId},u.authorizationParams),f),{scope:Kc(d,f.scope),response_type:"code",response_mode:v||"query",state:g,nonce:m,redirect_uri:k||u.authorizationParams.redirect_uri,code_challenge:p,code_challenge_method:"S256"}))(this.options,this.scope,t,i,s,a,t.redirect_uri||this.options.authorizationParams.redirect_uri||r,n==null?void 0:n.response_mode),c=this._authorizeUrl(l);return{nonce:s,code_verifier:o,scope:l.scope,audience:l.audience||"default",redirect_uri:l.redirect_uri,state:i,url:c}}async loginWithPopup(t,n){var r;if(t=t||{},!(n=n||{}).popup&&(n.popup=(a=>{const l=window.screenX+(window.innerWidth-400)/2,c=window.screenY+(window.innerHeight-600)/2;return window.open(a,"auth0:authorize:popup",`left=${l},top=${c},width=400,height=600,resizable,scrollbars=yes,status=1`)})(""),!n.popup))throw new Error("Unable to open a popup for loginWithPopup - window.open returned `null`");const i=await this._prepareAuthorizeUrl(t.authorizationParams||{},{response_mode:"web_message"},window.location.origin);n.popup.location.href=i.url;const s=await(a=>new Promise((l,c)=>{let u;const d=setInterval(()=>{a.popup&&a.popup.closed&&(clearInterval(d),clearTimeout(f),window.removeEventListener("message",u,!1),c(new cD(a.popup)))},1e3),f=setTimeout(()=>{clearInterval(d),c(new lD(a.popup)),window.removeEventListener("message",u,!1)},1e3*(a.timeoutInSeconds||60));u=function(g){if(g.data&&g.data.type==="authorization_response"){if(clearTimeout(f),clearInterval(d),window.removeEventListener("message",u,!1),a.popup.close(),g.data.response.error)return c(ci.fromPayload(g.data.response));l(g.data.response)}},window.addEventListener("message",u)}))(Object.assign(Object.assign({},n),{timeoutInSeconds:n.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}));if(i.state!==s.state)throw new Error("Invalid state");const o=((r=t.authorizationParams)===null||r===void 0?void 0:r.organization)||this.options.authorizationParams.organization;await this._requestToken({audience:i.audience,scope:i.scope,code_verifier:i.code_verifier,grant_type:"authorization_code",code:s.code,redirect_uri:i.redirect_uri},{nonceIn:i.nonce,organizationId:o})}async getUser(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.user}async getIdTokenClaims(){var t;const n=await this._getIdTokenFromCache();return(t=n==null?void 0:n.decodedToken)===null||t===void 0?void 0:t.claims}async loginWithRedirect(t={}){var n;const r=J0(t),{openUrl:i,fragment:s,appState:o}=r,a=Ar(r,["openUrl","fragment","appState"]),l=((n=a.authorizationParams)===null||n===void 0?void 0:n.organization)||this.options.authorizationParams.organization,c=await this._prepareAuthorizeUrl(a.authorizationParams||{}),{url:u}=c,d=Ar(c,["url"]);this.transactionManager.create(Object.assign(Object.assign(Object.assign({},d),{appState:o}),l&&{organizationId:l}));const f=s?`${u}#${s}`:u;i?await i(f):window.location.assign(f)}async handleRedirectCallback(t=window.location.href){const n=t.split("?").slice(1);if(n.length===0)throw new Error("There are no query params available for parsing.");const{state:r,code:i,error:s,error_description:o}=(d=>{d.indexOf("#")>-1&&(d=d.substring(0,d.indexOf("#")));const f=new URLSearchParams(d);return{state:f.get("state"),code:f.get("code")||void 0,error:f.get("error")||void 0,error_description:f.get("error_description")||void 0}})(n.join("")),a=this.transactionManager.get();if(!a)throw new Error("Invalid state");if(this.transactionManager.remove(),s)throw new aD(s,o||s,r,a.appState);if(!a.code_verifier||a.state&&a.state!==r)throw new Error("Invalid state");const l=a.organizationId,c=a.nonce,u=a.redirect_uri;return await this._requestToken(Object.assign({audience:a.audience,scope:a.scope,code_verifier:a.code_verifier,grant_type:"authorization_code",code:i},u?{redirect_uri:u}:{}),{nonceIn:c,organizationId:l}),{appState:a.appState}}async checkSession(t){if(!this.cookieStorage.get(this.isAuthenticatedCookieName)){if(!this.cookieStorage.get("auth0.is.authenticated"))return;this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove("auth0.is.authenticated")}try{await this.getTokenSilently(t)}catch{}}async getTokenSilently(t={}){var n;const r=Object.assign(Object.assign({cacheMode:"on"},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:Kc(this.scope,(n=t.authorizationParams)===null||n===void 0?void 0:n.scope)})}),i=await((s,o)=>{let a=Ah[o];return a||(a=s().finally(()=>{delete Ah[o],a=null}),Ah[o]=a),a})(()=>this._getTokenSilently(r),`${this.options.clientId}::${r.authorizationParams.audience}::${r.authorizationParams.scope}`);return t.detailedResponse?i:i==null?void 0:i.access_token}async _getTokenSilently(t){const{cacheMode:n}=t,r=Ar(t,["cacheMode"]);if(n!=="off"){const i=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(i)return i}if(n!=="cache-only"){if(!await(async(i,s=3)=>{for(let o=0;o<s;o++)if(await i())return!0;return!1})(()=>Oh.acquireLock("auth0.lock.getTokenSilently",5e3),10))throw new _m;try{if(window.addEventListener("pagehide",this._releaseLockOnPageHide),n!=="off"){const c=await this._getEntryFromCache({scope:r.authorizationParams.scope,audience:r.authorizationParams.audience||"default",clientId:this.options.clientId});if(c)return c}const i=this.options.useRefreshTokens?await this._getTokenUsingRefreshToken(r):await this._getTokenFromIFrame(r),{id_token:s,access_token:o,oauthTokenScope:a,expires_in:l}=i;return Object.assign(Object.assign({id_token:s,access_token:o},a?{scope:a}:null),{expires_in:l})}finally{await Oh.releaseLock("auth0.lock.getTokenSilently"),window.removeEventListener("pagehide",this._releaseLockOnPageHide)}}}async getTokenWithPopup(t={},n={}){var r;const i=Object.assign(Object.assign({},t),{authorizationParams:Object.assign(Object.assign(Object.assign({},this.options.authorizationParams),t.authorizationParams),{scope:Kc(this.scope,(r=t.authorizationParams)===null||r===void 0?void 0:r.scope)})});return n=Object.assign(Object.assign({},oD),n),await this.loginWithPopup(i,n),(await this.cacheManager.get(new Mr({scope:i.authorizationParams.scope,audience:i.authorizationParams.audience||"default",clientId:this.options.clientId}))).access_token}async isAuthenticated(){return!!await this.getUser()}_buildLogoutUrl(t){t.clientId!==null?t.clientId=t.clientId||this.options.clientId:delete t.clientId;const n=t.logoutParams||{},{federated:r}=n,i=Ar(n,["federated"]),s=r?"&federated":"";return this._url(`/v2/logout?${wm(Object.assign({clientId:t.clientId},i))}`)+s}async logout(t={}){const n=J0(t),{openUrl:r}=n,i=Ar(n,["openUrl"]);t.clientId===null?await this.cacheManager.clear():await this.cacheManager.clear(t.clientId||this.options.clientId),this.cookieStorage.remove(this.orgHintCookieName,{cookieDomain:this.options.cookieDomain}),this.cookieStorage.remove(this.isAuthenticatedCookieName,{cookieDomain:this.options.cookieDomain}),this.userCache.remove("@@user@@");const s=this._buildLogoutUrl(i);r?await r(s):r!==!1&&window.location.assign(s)}async _getTokenFromIFrame(t){const n=Object.assign(Object.assign({},t.authorizationParams),{prompt:"none"}),r=this.cookieStorage.get(this.orgHintCookieName);r&&!n.organization&&(n.organization=r);const{url:i,state:s,nonce:o,code_verifier:a,redirect_uri:l,scope:c,audience:u}=await this._prepareAuthorizeUrl(n,{response_mode:"web_message"},window.location.origin);try{if(window.crossOriginIsolated)throw new ci("login_required","The application is running in a Cross-Origin Isolated context, silently retrieving a token without refresh token is not possible.");const d=t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,f=await((m,p,k=60)=>new Promise((v,h)=>{const y=window.document.createElement("iframe");y.setAttribute("width","0"),y.setAttribute("height","0"),y.style.display="none";const b=()=>{window.document.body.contains(y)&&(window.document.body.removeChild(y),window.removeEventListener("message",x,!1))};let x;const S=setTimeout(()=>{h(new _m),b()},1e3*k);x=function(C){if(C.origin!=p||!C.data||C.data.type!=="authorization_response")return;const N=C.source;N&&N.close(),C.data.response.error?h(ci.fromPayload(C.data.response)):v(C.data.response),clearTimeout(S),window.removeEventListener("message",x,!1),setTimeout(b,2e3)},window.addEventListener("message",x,!1),window.document.body.appendChild(y),y.setAttribute("src",m)}))(i,this.domainUrl,d);if(s!==f.state)throw new Error("Invalid state");const g=await this._requestToken(Object.assign(Object.assign({},t.authorizationParams),{code_verifier:a,code:f.code,grant_type:"authorization_code",redirect_uri:l,timeout:t.authorizationParams.timeout||this.httpTimeoutMs}),{nonceIn:o});return Object.assign(Object.assign({},g),{scope:c,oauthTokenScope:g.scope,audience:u})}catch(d){throw d.error==="login_required"&&this.logout({openUrl:!1}),d}}async _getTokenUsingRefreshToken(t){const n=await this.cacheManager.get(new Mr({scope:t.authorizationParams.scope,audience:t.authorizationParams.audience||"default",clientId:this.options.clientId}));if(!(n&&n.refresh_token||this.worker)){if(this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw new pS(t.authorizationParams.audience||"default",t.authorizationParams.scope)}const r=t.authorizationParams.redirect_uri||this.options.authorizationParams.redirect_uri||window.location.origin,i=typeof t.timeoutInSeconds=="number"?1e3*t.timeoutInSeconds:null;try{const s=await this._requestToken(Object.assign(Object.assign(Object.assign({},t.authorizationParams),{grant_type:"refresh_token",refresh_token:n&&n.refresh_token,redirect_uri:r}),i&&{timeout:i}));return Object.assign(Object.assign({},s),{scope:t.authorizationParams.scope,oauthTokenScope:s.scope,audience:t.authorizationParams.audience||"default"})}catch(s){if((s.message.indexOf("Missing Refresh Token")>-1||s.message&&s.message.indexOf("invalid refresh token")>-1)&&this.options.useRefreshTokensFallback)return await this._getTokenFromIFrame(t);throw s}}async _saveEntryInCache(t){const{id_token:n,decodedToken:r}=t,i=Ar(t,["id_token","decodedToken"]);this.userCache.set("@@user@@",{id_token:n,decodedToken:r}),await this.cacheManager.setIdToken(this.options.clientId,t.id_token,t.decodedToken),await this.cacheManager.set(i)}async _getIdTokenFromCache(){const t=this.options.authorizationParams.audience||"default",n=await this.cacheManager.getIdToken(new Mr({clientId:this.options.clientId,audience:t,scope:this.scope})),r=this.userCache.get("@@user@@");return n&&n.id_token===(r==null?void 0:r.id_token)?r:(this.userCache.set("@@user@@",n),n)}async _getEntryFromCache({scope:t,audience:n,clientId:r}){const i=await this.cacheManager.get(new Mr({scope:t,audience:n,clientId:r}),60);if(i&&i.access_token){const{access_token:s,oauthTokenScope:o,expires_in:a}=i,l=await this._getIdTokenFromCache();return l&&Object.assign(Object.assign({id_token:l.id_token,access_token:s},o?{scope:o}:null),{expires_in:a})}}async _requestToken(t,n){const{nonceIn:r,organizationId:i}=n||{},s=await mD(Object.assign({baseUrl:this.domainUrl,client_id:this.options.clientId,auth0Client:this.options.auth0Client,useFormData:this.options.useFormData,timeout:this.httpTimeoutMs},t),this.worker),o=await this._verifyIdToken(s.id_token,r,i);return await this._saveEntryInCache(Object.assign(Object.assign(Object.assign(Object.assign({},s),{decodedToken:o,scope:t.scope,audience:t.audience||"default"}),s.scope?{oauthTokenScope:s.scope}:null),{client_id:this.options.clientId})),this.cookieStorage.save(this.isAuthenticatedCookieName,!0,{daysUntilExpire:this.sessionCheckExpiryDays,cookieDomain:this.options.cookieDomain}),this._processOrgIdHint(o.claims.org_id),Object.assign(Object.assign({},s),{decodedToken:o})}};var _S={isAuthenticated:!1,isLoading:!0},qr=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},DD=Vt(Vt({},_S),{buildAuthorizeUrl:qr,buildLogoutUrl:qr,getAccessTokenSilently:qr,getAccessTokenWithPopup:qr,getIdTokenClaims:qr,loginWithRedirect:qr,loginWithPopup:qr,logout:qr,handleRedirectCallback:qr}),wS=D.createContext(DD),e_=function(e){rD(t,e);function t(n,r){var i=e.call(this,r||n)||this;return i.error=n,i.error_description=r,Object.setPrototypeOf(i,t.prototype),i}return t}(Error),ND=/[?&]code=[^&]+/,RD=/[?&]state=[^&]+/,AD=/[?&]error=[^&]+/,OD=function(e){return e===void 0&&(e=window.location.search),(ND.test(e)||AD.test(e))&&RD.test(e)},xS=function(e){return function(t){return t instanceof Error?t:t!==null&&typeof t=="object"&&"error"in t&&typeof t.error=="string"?"error_description"in t&&typeof t.error_description=="string"?new e_(t.error,t.error_description):new e_(t.error):new Error(e)}},t_=xS("Login failed"),Ph=xS("Get access token failed"),SS=function(e){var t;e!=null&&e.redirectUri&&(console.warn("Using `redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `redirectUri` will be no longer supported in a future version"),e.authorizationParams=e.authorizationParams||{},e.authorizationParams.redirect_uri=e.redirectUri,delete e.redirectUri),!((t=e==null?void 0:e.authorizationParams)===null||t===void 0)&&t.redirectUri&&(console.warn("Using `authorizationParams.redirectUri` has been deprecated, please use `authorizationParams.redirect_uri` instead as `authorizationParams.redirectUri` will be removed in a future version"),e.authorizationParams.redirect_uri=e.authorizationParams.redirectUri,delete e.authorizationParams.redirectUri)},PD=function(e,t){switch(t.type){case"LOGIN_POPUP_STARTED":return Vt(Vt({},e),{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return Vt(Vt({},e),{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return e.user===t.user?e:Vt(Vt({},e),{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return Vt(Vt({},e),{isAuthenticated:!1,user:void 0});case"ERROR":return Vt(Vt({},e),{isLoading:!1,error:t.error})}},MD=function(e){return SS(e),Vt(Vt({},e),{auth0Client:{name:"auth0-react",version:"2.0.2"}})},FD=function(e){window.history.replaceState({},document.title,(e==null?void 0:e.returnTo)||window.location.pathname)},LD=function(e){var t=e.children,n=e.skipRedirectCallback,r=e.onRedirectCallback,i=r===void 0?FD:r,s=e.context,o=s===void 0?wS:s,a=iD(e,["children","skipRedirectCallback","onRedirectCallback","context"]),l=D.useState(function(){return new ID(MD(a))})[0],c=D.useReducer(PD,_S),u=c[0],d=c[1],f=D.useRef(!1);D.useEffect(function(){f.current||(f.current=!0,function(){return io(void 0,void 0,void 0,function(){var x,S,C;return so(this,function(N){switch(N.label){case 0:return N.trys.push([0,7,,8]),x=void 0,OD()&&!n?[4,l.handleRedirectCallback()]:[3,3];case 1:return S=N.sent().appState,[4,l.getUser()];case 2:return x=N.sent(),i(S,x),[3,6];case 3:return[4,l.checkSession()];case 4:return N.sent(),[4,l.getUser()];case 5:x=N.sent(),N.label=6;case 6:return d({type:"INITIALISED",user:x}),[3,8];case 7:return C=N.sent(),d({type:"ERROR",error:t_(C)}),[3,8];case 8:return[2]}})})}())},[l,i,n]);var g=D.useCallback(function(x){return SS(x),l.loginWithRedirect(x)},[l]),m=D.useCallback(function(x,S){return io(void 0,void 0,void 0,function(){var C,N;return so(this,function(z){switch(z.label){case 0:d({type:"LOGIN_POPUP_STARTED"}),z.label=1;case 1:return z.trys.push([1,3,,4]),[4,l.loginWithPopup(x,S)];case 2:return z.sent(),[3,4];case 3:return C=z.sent(),d({type:"ERROR",error:t_(C)}),[2];case 4:return[4,l.getUser()];case 5:return N=z.sent(),d({type:"LOGIN_POPUP_COMPLETE",user:N}),[2]}})})},[l]),p=D.useCallback(function(x){return x===void 0&&(x={}),io(void 0,void 0,void 0,function(){return so(this,function(S){switch(S.label){case 0:return[4,l.logout(x)];case 1:return S.sent(),(x.openUrl||x.openUrl===!1)&&d({type:"LOGOUT"}),[2]}})})},[l]),k=D.useCallback(function(x){return io(void 0,void 0,void 0,function(){var S,C,N,z;return so(this,function(G){switch(G.label){case 0:return G.trys.push([0,2,3,5]),[4,l.getTokenSilently(x)];case 1:return S=G.sent(),[3,5];case 2:throw C=G.sent(),Ph(C);case 3:return N=d,z={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return N.apply(void 0,[(z.user=G.sent(),z)]),[7];case 5:return[2,S]}})})},[l]),v=D.useCallback(function(x,S){return io(void 0,void 0,void 0,function(){var C,N,z,G;return so(this,function(_e){switch(_e.label){case 0:return _e.trys.push([0,2,3,5]),[4,l.getTokenWithPopup(x,S)];case 1:return C=_e.sent(),[3,5];case 2:throw N=_e.sent(),Ph(N);case 3:return z=d,G={type:"GET_ACCESS_TOKEN_COMPLETE"},[4,l.getUser()];case 4:return z.apply(void 0,[(G.user=_e.sent(),G)]),[7];case 5:return[2,C]}})})},[l]),h=D.useCallback(function(){return l.getIdTokenClaims()},[l]),y=D.useCallback(function(x){return io(void 0,void 0,void 0,function(){var S,C,N;return so(this,function(z){switch(z.label){case 0:return z.trys.push([0,2,3,5]),[4,l.handleRedirectCallback(x)];case 1:return[2,z.sent()];case 2:throw S=z.sent(),Ph(S);case 3:return C=d,N={type:"HANDLE_REDIRECT_COMPLETE"},[4,l.getUser()];case 4:return C.apply(void 0,[(N.user=z.sent(),N)]),[7];case 5:return[2]}})})},[l]),b=D.useMemo(function(){return Vt(Vt({},u),{getAccessTokenSilently:k,getAccessTokenWithPopup:v,getIdTokenClaims:h,loginWithRedirect:g,loginWithPopup:m,logout:p,handleRedirectCallback:y})},[u,k,v,h,g,m,p,y]);return we.createElement(o.Provider,{value:b},t)},Zs=function(e){return e===void 0&&(e=wS),D.useContext(e)},Ku={},zD={get exports(){return Ku},set exports(e){Ku=e}},tt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy=Symbol.for("react.element"),fy=Symbol.for("react.portal"),rf=Symbol.for("react.fragment"),sf=Symbol.for("react.strict_mode"),of=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),lf=Symbol.for("react.context"),jD=Symbol.for("react.server_context"),cf=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),df=Symbol.for("react.suspense_list"),ff=Symbol.for("react.memo"),hf=Symbol.for("react.lazy"),$D=Symbol.for("react.offscreen"),kS;kS=Symbol.for("react.module.reference");function tr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case dy:switch(e=e.type,e){case rf:case of:case sf:case uf:case df:return e;default:switch(e=e&&e.$$typeof,e){case jD:case lf:case cf:case hf:case ff:case af:return e;default:return t}}case fy:return t}}}tt.ContextConsumer=lf;tt.ContextProvider=af;tt.Element=dy;tt.ForwardRef=cf;tt.Fragment=rf;tt.Lazy=hf;tt.Memo=ff;tt.Portal=fy;tt.Profiler=of;tt.StrictMode=sf;tt.Suspense=uf;tt.SuspenseList=df;tt.isAsyncMode=function(){return!1};tt.isConcurrentMode=function(){return!1};tt.isContextConsumer=function(e){return tr(e)===lf};tt.isContextProvider=function(e){return tr(e)===af};tt.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===dy};tt.isForwardRef=function(e){return tr(e)===cf};tt.isFragment=function(e){return tr(e)===rf};tt.isLazy=function(e){return tr(e)===hf};tt.isMemo=function(e){return tr(e)===ff};tt.isPortal=function(e){return tr(e)===fy};tt.isProfiler=function(e){return tr(e)===of};tt.isStrictMode=function(e){return tr(e)===sf};tt.isSuspense=function(e){return tr(e)===uf};tt.isSuspenseList=function(e){return tr(e)===df};tt.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===rf||e===of||e===sf||e===uf||e===df||e===$D||typeof e=="object"&&e!==null&&(e.$$typeof===hf||e.$$typeof===ff||e.$$typeof===af||e.$$typeof===lf||e.$$typeof===cf||e.$$typeof===kS||e.getModuleId!==void 0)};tt.typeOf=tr;(function(e){e.exports=tt})(zD);function UD(e){function t(O,U,X,le,R){for(var Ee=0,Z=0,Ge=0,De=0,Pe,me,ot=0,xe=0,_,T=_=Pe=0,I=0,W=0,q=0,F=0,ce=X.length,Xe=ce-1,$e,ge="",ft="",Cr="",Zr="",A;I<ce;){if(me=X.charCodeAt(I),I===Xe&&Z+De+Ge+Ee!==0&&(Z!==0&&(me=Z===47?10:47),De=Ge=Ee=0,ce++,Xe++),Z+De+Ge+Ee===0){if(I===Xe&&(0<W&&(ge=ge.replace(f,"")),0<ge.trim().length)){switch(me){case 32:case 9:case 59:case 13:case 10:break;default:ge+=X.charAt(I)}me=59}switch(me){case 123:for(ge=ge.trim(),Pe=ge.charCodeAt(0),_=1,F=++I;I<ce;){switch(me=X.charCodeAt(I)){case 123:_++;break;case 125:_--;break;case 47:switch(me=X.charCodeAt(I+1)){case 42:case 47:e:{for(T=I+1;T<Xe;++T)switch(X.charCodeAt(T)){case 47:if(me===42&&X.charCodeAt(T-1)===42&&I+2!==T){I=T+1;break e}break;case 10:if(me===47){I=T+1;break e}}I=T}}break;case 91:me++;case 40:me++;case 34:case 39:for(;I++<Xe&&X.charCodeAt(I)!==me;);}if(_===0)break;I++}switch(_=X.substring(F,I),Pe===0&&(Pe=(ge=ge.replace(d,"").trim()).charCodeAt(0)),Pe){case 64:switch(0<W&&(ge=ge.replace(f,"")),me=ge.charCodeAt(1),me){case 100:case 109:case 115:case 45:W=U;break;default:W=Oe}if(_=t(U,W,_,me,R+1),F=_.length,0<$&&(W=n(Oe,ge,q),A=a(3,_,W,U,ne,ee,F,me,R,le),ge=W.join(""),A!==void 0&&(F=(_=A.trim()).length)===0&&(me=0,_="")),0<F)switch(me){case 115:ge=ge.replace(S,o);case 100:case 109:case 45:_=ge+"{"+_+"}";break;case 107:ge=ge.replace(h,"$1 $2"),_=ge+"{"+_+"}",_=Te===1||Te===2&&s("@"+_,3)?"@-webkit-"+_+"@"+_:"@"+_;break;default:_=ge+_,le===112&&(_=(ft+=_,""))}else _="";break;default:_=t(U,n(U,ge,q),_,le,R+1)}Cr+=_,_=q=W=T=Pe=0,ge="",me=X.charCodeAt(++I);break;case 125:case 59:if(ge=(0<W?ge.replace(f,""):ge).trim(),1<(F=ge.length))switch(T===0&&(Pe=ge.charCodeAt(0),Pe===45||96<Pe&&123>Pe)&&(F=(ge=ge.replace(" ",":")).length),0<$&&(A=a(1,ge,U,O,ne,ee,ft.length,le,R,le))!==void 0&&(F=(ge=A.trim()).length)===0&&(ge="\0\0"),Pe=ge.charCodeAt(0),me=ge.charCodeAt(1),Pe){case 0:break;case 64:if(me===105||me===99){Zr+=ge+X.charAt(I);break}default:ge.charCodeAt(F-1)!==58&&(ft+=i(ge,Pe,me,ge.charCodeAt(2)))}q=W=T=Pe=0,ge="",me=X.charCodeAt(++I)}}switch(me){case 13:case 10:Z===47?Z=0:1+Pe===0&&le!==107&&0<ge.length&&(W=1,ge+="\0"),0<$*oe&&a(0,ge,U,O,ne,ee,ft.length,le,R,le),ee=1,ne++;break;case 59:case 125:if(Z+De+Ge+Ee===0){ee++;break}default:switch(ee++,$e=X.charAt(I),me){case 9:case 32:if(De+Ee+Z===0)switch(ot){case 44:case 58:case 9:case 32:$e="";break;default:me!==32&&($e=" ")}break;case 0:$e="\\0";break;case 12:$e="\\f";break;case 11:$e="\\v";break;case 38:De+Z+Ee===0&&(W=q=1,$e="\f"+$e);break;case 108:if(De+Z+Ee+pe===0&&0<T)switch(I-T){case 2:ot===112&&X.charCodeAt(I-3)===58&&(pe=ot);case 8:xe===111&&(pe=xe)}break;case 58:De+Z+Ee===0&&(T=I);break;case 44:Z+Ge+De+Ee===0&&(W=1,$e+="\r");break;case 34:case 39:Z===0&&(De=De===me?0:De===0?me:De);break;case 91:De+Z+Ge===0&&Ee++;break;case 93:De+Z+Ge===0&&Ee--;break;case 41:De+Z+Ee===0&&Ge--;break;case 40:if(De+Z+Ee===0){if(Pe===0)switch(2*ot+3*xe){case 533:break;default:Pe=1}Ge++}break;case 64:Z+Ge+De+Ee+T+_===0&&(_=1);break;case 42:case 47:if(!(0<De+Ee+Ge))switch(Z){case 0:switch(2*me+3*X.charCodeAt(I+1)){case 235:Z=47;break;case 220:F=I,Z=42}break;case 42:me===47&&ot===42&&F+2!==I&&(X.charCodeAt(F+2)===33&&(ft+=X.substring(F,I+1)),$e="",Z=0)}}Z===0&&(ge+=$e)}xe=ot,ot=me,I++}if(F=ft.length,0<F){if(W=U,0<$&&(A=a(2,ft,W,O,ne,ee,F,le,R,le),A!==void 0&&(ft=A).length===0))return Zr+ft+Cr;if(ft=W.join(",")+"{"+ft+"}",Te*pe!==0){switch(Te!==2||s(ft,2)||(pe=0),pe){case 111:ft=ft.replace(b,":-moz-$1")+ft;break;case 112:ft=ft.replace(y,"::-webkit-input-$1")+ft.replace(y,"::-moz-$1")+ft.replace(y,":-ms-input-$1")+ft}pe=0}}return Zr+ft+Cr}function n(O,U,X){var le=U.trim().split(k);U=le;var R=le.length,Ee=O.length;switch(Ee){case 0:case 1:var Z=0;for(O=Ee===0?"":O[0]+" ";Z<R;++Z)U[Z]=r(O,U[Z],X).trim();break;default:var Ge=Z=0;for(U=[];Z<R;++Z)for(var De=0;De<Ee;++De)U[Ge++]=r(O[De]+" ",le[Z],X).trim()}return U}function r(O,U,X){var le=U.charCodeAt(0);switch(33>le&&(le=(U=U.trim()).charCodeAt(0)),le){case 38:return U.replace(v,"$1"+O.trim());case 58:return O.trim()+U.replace(v,"$1"+O.trim());default:if(0<1*X&&0<U.indexOf("\f"))return U.replace(v,(O.charCodeAt(0)===58?"":"$1")+O.trim())}return O+U}function i(O,U,X,le){var R=O+";",Ee=2*U+3*X+4*le;if(Ee===944){O=R.indexOf(":",9)+1;var Z=R.substring(O,R.length-1).trim();return Z=R.substring(0,O).trim()+Z+";",Te===1||Te===2&&s(Z,1)?"-webkit-"+Z+Z:Z}if(Te===0||Te===2&&!s(R,1))return R;switch(Ee){case 1015:return R.charCodeAt(10)===97?"-webkit-"+R+R:R;case 951:return R.charCodeAt(3)===116?"-webkit-"+R+R:R;case 963:return R.charCodeAt(5)===110?"-webkit-"+R+R:R;case 1009:if(R.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+R+R;case 978:return"-webkit-"+R+"-moz-"+R+R;case 1019:case 983:return"-webkit-"+R+"-moz-"+R+"-ms-"+R+R;case 883:if(R.charCodeAt(8)===45)return"-webkit-"+R+R;if(0<R.indexOf("image-set(",11))return R.replace(_e,"$1-webkit-$2")+R;break;case 932:if(R.charCodeAt(4)===45)switch(R.charCodeAt(5)){case 103:return"-webkit-box-"+R.replace("-grow","")+"-webkit-"+R+"-ms-"+R.replace("grow","positive")+R;case 115:return"-webkit-"+R+"-ms-"+R.replace("shrink","negative")+R;case 98:return"-webkit-"+R+"-ms-"+R.replace("basis","preferred-size")+R}return"-webkit-"+R+"-ms-"+R+R;case 964:return"-webkit-"+R+"-ms-flex-"+R+R;case 1023:if(R.charCodeAt(8)!==99)break;return Z=R.substring(R.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+Z+"-webkit-"+R+"-ms-flex-pack"+Z+R;case 1005:return m.test(R)?R.replace(g,":-webkit-")+R.replace(g,":-moz-")+R:R;case 1e3:switch(Z=R.substring(13).trim(),U=Z.indexOf("-")+1,Z.charCodeAt(0)+Z.charCodeAt(U)){case 226:Z=R.replace(x,"tb");break;case 232:Z=R.replace(x,"tb-rl");break;case 220:Z=R.replace(x,"lr");break;default:return R}return"-webkit-"+R+"-ms-"+Z+R;case 1017:if(R.indexOf("sticky",9)===-1)break;case 975:switch(U=(R=O).length-10,Z=(R.charCodeAt(U)===33?R.substring(0,U):R).substring(O.indexOf(":",7)+1).trim(),Ee=Z.charCodeAt(0)+(Z.charCodeAt(7)|0)){case 203:if(111>Z.charCodeAt(8))break;case 115:R=R.replace(Z,"-webkit-"+Z)+";"+R;break;case 207:case 102:R=R.replace(Z,"-webkit-"+(102<Ee?"inline-":"")+"box")+";"+R.replace(Z,"-webkit-"+Z)+";"+R.replace(Z,"-ms-"+Z+"box")+";"+R}return R+";";case 938:if(R.charCodeAt(5)===45)switch(R.charCodeAt(6)){case 105:return Z=R.replace("-items",""),"-webkit-"+R+"-webkit-box-"+Z+"-ms-flex-"+Z+R;case 115:return"-webkit-"+R+"-ms-flex-item-"+R.replace(N,"")+R;default:return"-webkit-"+R+"-ms-flex-line-pack"+R.replace("align-content","").replace(N,"")+R}break;case 973:case 989:if(R.charCodeAt(3)!==45||R.charCodeAt(4)===122)break;case 931:case 953:if(G.test(O)===!0)return(Z=O.substring(O.indexOf(":")+1)).charCodeAt(0)===115?i(O.replace("stretch","fill-available"),U,X,le).replace(":fill-available",":stretch"):R.replace(Z,"-webkit-"+Z)+R.replace(Z,"-moz-"+Z.replace("fill-",""))+R;break;case 962:if(R="-webkit-"+R+(R.charCodeAt(5)===102?"-ms-"+R:"")+R,X+le===211&&R.charCodeAt(13)===105&&0<R.indexOf("transform",10))return R.substring(0,R.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+R}return R}function s(O,U){var X=O.indexOf(U===1?":":"{"),le=O.substring(0,U!==3?X:10);return X=O.substring(X+1,O.length-1),K(U!==2?le:le.replace(z,"$1"),X,U)}function o(O,U){var X=i(U,U.charCodeAt(0),U.charCodeAt(1),U.charCodeAt(2));return X!==U+";"?X.replace(C," or ($1)").substring(4):"("+U+")"}function a(O,U,X,le,R,Ee,Z,Ge,De,Pe){for(var me=0,ot=U,xe;me<$;++me)switch(xe=We[me].call(u,O,ot,X,le,R,Ee,Z,Ge,De,Pe)){case void 0:case!1:case!0:case null:break;default:ot=xe}if(ot!==U)return ot}function l(O){switch(O){case void 0:case null:$=We.length=0;break;default:if(typeof O=="function")We[$++]=O;else if(typeof O=="object")for(var U=0,X=O.length;U<X;++U)l(O[U]);else oe=!!O|0}return l}function c(O){return O=O.prefix,O!==void 0&&(K=null,O?typeof O!="function"?Te=1:(Te=2,K=O):Te=0),c}function u(O,U){var X=O;if(33>X.charCodeAt(0)&&(X=X.trim()),te=X,X=[te],0<$){var le=a(-1,U,X,X,ne,ee,0,0,0,0);le!==void 0&&typeof le=="string"&&(U=le)}var R=t(Oe,X,U,0,0);return 0<$&&(le=a(-2,R,X,X,ne,ee,R.length,0,0,0),le!==void 0&&(R=le)),te="",pe=0,ee=ne=1,R}var d=/^\0+/g,f=/[\0\r\f]/g,g=/: */g,m=/zoo|gra/,p=/([,: ])(transform)/g,k=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,C=/([\s\S]*?);/g,N=/-self|flex-/g,z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,G=/stretch|:\s*\w+\-(?:conte|avail)/,_e=/([^-])(image-set\()/,ee=1,ne=1,pe=0,Te=1,Oe=[],We=[],$=0,K=null,oe=0,te="";return u.use=l,u.set=c,e!==void 0&&c(e),u}var BD={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function VD(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var WD=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,n_=VD(function(e){return WD.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),xm={},HD={get exports(){return xm},set exports(e){xm=e}},nt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=typeof Symbol=="function"&&Symbol.for,hy=Kt?Symbol.for("react.element"):60103,py=Kt?Symbol.for("react.portal"):60106,pf=Kt?Symbol.for("react.fragment"):60107,mf=Kt?Symbol.for("react.strict_mode"):60108,gf=Kt?Symbol.for("react.profiler"):60114,yf=Kt?Symbol.for("react.provider"):60109,vf=Kt?Symbol.for("react.context"):60110,my=Kt?Symbol.for("react.async_mode"):60111,_f=Kt?Symbol.for("react.concurrent_mode"):60111,wf=Kt?Symbol.for("react.forward_ref"):60112,xf=Kt?Symbol.for("react.suspense"):60113,YD=Kt?Symbol.for("react.suspense_list"):60120,Sf=Kt?Symbol.for("react.memo"):60115,kf=Kt?Symbol.for("react.lazy"):60116,GD=Kt?Symbol.for("react.block"):60121,ZD=Kt?Symbol.for("react.fundamental"):60117,KD=Kt?Symbol.for("react.responder"):60118,qD=Kt?Symbol.for("react.scope"):60119;function Vn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case hy:switch(e=e.type,e){case my:case _f:case pf:case gf:case mf:case xf:return e;default:switch(e=e&&e.$$typeof,e){case vf:case wf:case kf:case Sf:case yf:return e;default:return t}}case py:return t}}}function bS(e){return Vn(e)===_f}nt.AsyncMode=my;nt.ConcurrentMode=_f;nt.ContextConsumer=vf;nt.ContextProvider=yf;nt.Element=hy;nt.ForwardRef=wf;nt.Fragment=pf;nt.Lazy=kf;nt.Memo=Sf;nt.Portal=py;nt.Profiler=gf;nt.StrictMode=mf;nt.Suspense=xf;nt.isAsyncMode=function(e){return bS(e)||Vn(e)===my};nt.isConcurrentMode=bS;nt.isContextConsumer=function(e){return Vn(e)===vf};nt.isContextProvider=function(e){return Vn(e)===yf};nt.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===hy};nt.isForwardRef=function(e){return Vn(e)===wf};nt.isFragment=function(e){return Vn(e)===pf};nt.isLazy=function(e){return Vn(e)===kf};nt.isMemo=function(e){return Vn(e)===Sf};nt.isPortal=function(e){return Vn(e)===py};nt.isProfiler=function(e){return Vn(e)===gf};nt.isStrictMode=function(e){return Vn(e)===mf};nt.isSuspense=function(e){return Vn(e)===xf};nt.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===pf||e===_f||e===gf||e===mf||e===xf||e===YD||typeof e=="object"&&e!==null&&(e.$$typeof===kf||e.$$typeof===Sf||e.$$typeof===yf||e.$$typeof===vf||e.$$typeof===wf||e.$$typeof===ZD||e.$$typeof===KD||e.$$typeof===qD||e.$$typeof===GD)};nt.typeOf=Vn;(function(e){e.exports=nt})(HD);var gy=xm,QD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},XD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},JD={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},CS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yy={};yy[gy.ForwardRef]=JD;yy[gy.Memo]=CS;function r_(e){return gy.isMemo(e)?CS:yy[e.$$typeof]||QD}var eN=Object.defineProperty,tN=Object.getOwnPropertyNames,i_=Object.getOwnPropertySymbols,nN=Object.getOwnPropertyDescriptor,rN=Object.getPrototypeOf,s_=Object.prototype;function ES(e,t,n){if(typeof t!="string"){if(s_){var r=rN(t);r&&r!==s_&&ES(e,r,n)}var i=tN(t);i_&&(i=i.concat(i_(t)));for(var s=r_(e),o=r_(t),a=0;a<i.length;++a){var l=i[a];if(!XD[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var c=nN(t,l);try{eN(e,l,c)}catch{}}}}return e}var iN=ES;function ur(){return(ur=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o_=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Sm=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ku.typeOf(e)},qu=Object.freeze([]),Zi=Object.freeze({});function na(e){return typeof e=="function"}function a_(e){return e.displayName||e.name||"Component"}function vy(e){return e&&typeof e.styledComponentId=="string"}var ra=typeof process<"u"&&{}!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",_y=typeof window<"u"&&"HTMLElement"in window,sN=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),oN={};function Fs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var aN=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Fs(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(l,r[c])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),vu=new Map,Qu=new Map,il=1,qc=function(e){if(vu.has(e))return vu.get(e);for(;Qu.has(il);)il++;var t=il++;return vu.set(e,t),Qu.set(t,e),t},lN=function(e){return Qu.get(e)},cN=function(e,t){t>=il&&(il=t+1),vu.set(e,t),Qu.set(t,e)},uN="style["+ra+'][data-styled-version="5.3.9"]',dN=new RegExp("^"+ra+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),fN=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},hN=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(dN);if(a){var l=0|parseInt(a[1],10),c=a[2];l!==0&&(cN(c,l),fN(e,c,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},pN=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},TS=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,c=l.length;c>=0;c--){var u=l[c];if(u&&u.nodeType===1&&u.hasAttribute(ra))return u}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ra,"active"),r.setAttribute("data-styled-version","5.3.9");var o=pN();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},mN=function(){function e(n){var r=this.element=TS(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}Fs(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),gN=function(){function e(n){var r=this.element=TS(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),yN=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),l_=_y,vN={isServer:!_y,useCSSOMInjection:!sN},Xu=function(){function e(n,r,i){n===void 0&&(n=Zi),r===void 0&&(r={}),this.options=ur({},vN,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&_y&&l_&&(l_=!1,function(s){for(var o=document.querySelectorAll(uN),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(ra)!=="active"&&(hN(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return qc(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ur({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new yN(o):s?new mN(o):new gN(o),new aN(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(qc(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(qc(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(qc(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=lN(o);if(a!==void 0){var l=n.names.get(a),c=r.getGroup(o);if(l&&c&&l.size){var u=ra+".g"+o+'[id="'+a+'"]',d="";l!==void 0&&l.forEach(function(f){f.length>0&&(d+=f+",")}),s+=""+c+u+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),_N=/(a)(d)/gi,c_=function(e){return String.fromCharCode(e+(e>25?39:97))};function km(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=c_(t%52)+n;return(c_(t%52)+n).replace(_N,"$1-$2")}var To=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},IS=function(e){return To(5381,e)};function DS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(na(n)&&!vy(n))return!1}return!0}var wN=IS("5.3.9"),xN=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&DS(t),this.componentId=n,this.baseHash=To(wN,n),this.baseStyle=r,Xu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Ls(this.rules,t,n,r).join(""),a=km(To(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,u=To(this.baseHash,r.hash),d="",f=0;f<c;f++){var g=this.rules[f];if(typeof g=="string")d+=g;else if(g){var m=Ls(g,t,n,r),p=Array.isArray(m)?m.join(""):m;u=To(u,p+f),d+=p}}if(d){var k=km(u>>>0);if(!n.hasNameForId(i,k)){var v=r(d,"."+k,void 0,i);n.insertRules(i,k,v)}s.push(k)}}return s.join(" ")},e}(),SN=/^\s*\/\/.*$/gm,kN=[":","[",".","#"];function bN(e){var t,n,r,i,s=e===void 0?Zi:e,o=s.options,a=o===void 0?Zi:o,l=s.plugins,c=l===void 0?qu:l,u=new UD(a),d=[],f=function(p){function k(v){if(v)try{p(v+"}")}catch{}}return function(v,h,y,b,x,S,C,N,z,G){switch(v){case 1:if(z===0&&h.charCodeAt(0)===64)return p(h+";"),"";break;case 2:if(N===0)return h+"/*|*/";break;case 3:switch(N){case 102:case 112:return p(y[0]+h),"";default:return h+(G===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(k)}}}(function(p){d.push(p)}),g=function(p,k,v){return k===0&&kN.indexOf(v[n.length])!==-1||v.match(i)?p:"."+t};function m(p,k,v,h){h===void 0&&(h="&");var y=p.replace(SN,""),b=k&&v?v+" "+k+" { "+y+" }":y;return t=h,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),u(v||!k?"":k,b)}return u.use([].concat(c,[function(p,k,v){p===2&&v.length&&v[0].lastIndexOf(n)>0&&(v[0]=v[0].replace(r,g))},f,function(p){if(p===-2){var k=d;return d=[],k}}])),m.hash=c.length?c.reduce(function(p,k){return k.name||Fs(15),To(p,k.name)},5381).toString():"",m}var NS=we.createContext();NS.Consumer;var RS=we.createContext(),CN=(RS.Consumer,new Xu),bm=bN();function AS(){return D.useContext(NS)||CN}function OS(){return D.useContext(RS)||bm}var EN=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=bm);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Fs(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=bm),this.name+t.hash},e}(),TN=/([A-Z])/,IN=/([A-Z])/g,DN=/^ms-/,NN=function(e){return"-"+e.toLowerCase()};function u_(e){return TN.test(e)?e.replace(IN,NN).replace(DN,"-ms-"):e}var d_=function(e){return e==null||e===!1||e===""};function Ls(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,a=e.length;o<a;o+=1)(i=Ls(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(d_(e))return"";if(vy(e))return"."+e.styledComponentId;if(na(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var l=e(t);return Ls(l,t,n,r)}var c;return e instanceof EN?n?(e.inject(n,r),e.getName(r)):e:Sm(e)?function u(d,f){var g,m,p=[];for(var k in d)d.hasOwnProperty(k)&&!d_(d[k])&&(Array.isArray(d[k])&&d[k].isCss||na(d[k])?p.push(u_(k)+":",d[k],";"):Sm(d[k])?p.push.apply(p,u(d[k],k)):p.push(u_(k)+": "+(g=k,(m=d[k])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||g in BD?String(m).trim():m+"px")+";"));return f?[f+" {"].concat(p,["}"]):p}(e):e.toString()}var f_=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function PS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return na(e)||Sm(e)?f_(Ls(o_(qu,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:f_(Ls(o_(e,n)))}var MS=function(e,t,n){return n===void 0&&(n=Zi),e.theme!==n.theme&&e.theme||t||n.theme},RN=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,AN=/(^-|-$)/g;function Mh(e){return e.replace(RN,"-").replace(AN,"")}var FS=function(e){return km(IS(e)>>>0)};function Qc(e){return typeof e=="string"&&!0}var Cm=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},ON=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function PN(e,t,n){var r=e[n];Cm(t)&&Cm(r)?LS(r,t):e[n]=t}function LS(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Cm(o))for(var a in o)ON(a)&&PN(e,o[a],a)}return e}var Nl=we.createContext();Nl.Consumer;function Zt(e){var t=D.useContext(Nl),n=D.useMemo(function(){return function(r,i){if(!r)return Fs(14);if(na(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Fs(8):i?ur({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?we.createElement(Nl.Provider,{value:n},e.children):null}var Fh={};function zS(e,t,n){var r=vy(e),i=!Qc(e),s=t.attrs,o=s===void 0?qu:s,a=t.componentId,l=a===void 0?function(h,y){var b=typeof h!="string"?"sc":Mh(h);Fh[b]=(Fh[b]||0)+1;var x=b+"-"+FS("5.3.9"+b+Fh[b]);return y?y+"-"+x:x}(t.displayName,t.parentComponentId):a,c=t.displayName,u=c===void 0?function(h){return Qc(h)?"styled."+h:"Styled("+a_(h)+")"}(e):c,d=t.displayName&&t.componentId?Mh(t.displayName)+"-"+t.componentId:t.componentId||l,f=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,g=t.shouldForwardProp;r&&e.shouldForwardProp&&(g=t.shouldForwardProp?function(h,y,b){return e.shouldForwardProp(h,y,b)&&t.shouldForwardProp(h,y,b)}:e.shouldForwardProp);var m,p=new xN(n,d,r?e.componentStyle:void 0),k=p.isStatic&&o.length===0,v=function(h,y){return function(b,x,S,C){var N=b.attrs,z=b.componentStyle,G=b.defaultProps,_e=b.foldedComponentIds,ee=b.shouldForwardProp,ne=b.styledComponentId,pe=b.target,Te=function(le,R,Ee){le===void 0&&(le=Zi);var Z=ur({},R,{theme:le}),Ge={};return Ee.forEach(function(De){var Pe,me,ot,xe=De;for(Pe in na(xe)&&(xe=xe(Z)),xe)Z[Pe]=Ge[Pe]=Pe==="className"?(me=Ge[Pe],ot=xe[Pe],me&&ot?me+" "+ot:me||ot):xe[Pe]}),[Z,Ge]}(MS(x,D.useContext(Nl),G)||Zi,x,N),Oe=Te[0],We=Te[1],$=function(le,R,Ee,Z){var Ge=AS(),De=OS(),Pe=R?le.generateAndInjectStyles(Zi,Ge,De):le.generateAndInjectStyles(Ee,Ge,De);return Pe}(z,C,Oe),K=S,oe=We.$as||x.$as||We.as||x.as||pe,te=Qc(oe),O=We!==x?ur({},x,{},We):x,U={};for(var X in O)X[0]!=="$"&&X!=="as"&&(X==="forwardedAs"?U.as=O[X]:(ee?ee(X,n_,oe):!te||n_(X))&&(U[X]=O[X]));return x.style&&We.style!==x.style&&(U.style=ur({},x.style,{},We.style)),U.className=Array.prototype.concat(_e,ne,$!==ne?$:null,x.className,We.className).filter(Boolean).join(" "),U.ref=K,D.createElement(oe,U)}(m,h,y,k)};return v.displayName=u,(m=we.forwardRef(v)).attrs=f,m.componentStyle=p,m.displayName=u,m.shouldForwardProp=g,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):qu,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(h){var y=t.componentId,b=function(S,C){if(S==null)return{};var N,z,G={},_e=Object.keys(S);for(z=0;z<_e.length;z++)N=_e[z],C.indexOf(N)>=0||(G[N]=S[N]);return G}(t,["componentId"]),x=y&&y+"-"+(Qc(h)?h:Mh(a_(h)));return zS(h,ur({},b,{attrs:f,componentId:x}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?LS({},e.defaultProps,h):h}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),i&&iN(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var Em=function(e){return function t(n,r,i){if(i===void 0&&(i=Zi),!Ku.isValidElementType(r))return Fs(1,String(r));var s=function(){return n(r,i,PS.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,ur({},i,{},o))},s.attrs=function(o){return t(n,r,ur({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(zS,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Em[e]=Em(e)});var MN=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=DS(n),Xu.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Ls(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&Xu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function FN(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=PS.apply(void 0,[e].concat(n)),s="sc-global-"+FS(JSON.stringify(i)),o=new MN(i,s);function a(c){var u=AS(),d=OS(),f=D.useContext(Nl),g=D.useRef(u.allocateGSInstance(s)).current;return u.server&&l(g,c,u,f,d),D.useLayoutEffect(function(){if(!u.server)return l(g,c,u,f,d),function(){return o.removeStyles(g,u)}},[g,c,u,f,d]),null}function l(c,u,d,f,g){if(o.isStatic)o.renderStyles(c,oN,d,g);else{var m=ur({},u,{theme:MS(u,f,a.defaultProps)});o.renderStyles(c,m,d,g)}}return we.memo(a)}const E=Em;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function He(){return He=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},He.apply(this,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const h_="popstate";function LN(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vi(i)}return jN(t,n,null,e)}function Re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ia(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zN(){return Math.random().toString(36).substr(2,8)}function p_(e,t){return{usr:e.state,key:e.key,idx:t}}function Rl(e,t,n,r){return n===void 0&&(n=null),He({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ki(t):t,{state:n,key:t&&t.key||r||zN()})}function vi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ki(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jN(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Nt.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(He({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Nt.Pop;let k=u(),v=k==null?null:k-c;c=k,l&&l({action:a,location:p.location,delta:v})}function f(k,v){a=Nt.Push;let h=Rl(p.location,k,v);n&&n(h,k),c=u()+1;let y=p_(h,c),b=p.createHref(h);try{o.pushState(y,"",b)}catch{i.location.assign(b)}s&&l&&l({action:a,location:p.location,delta:1})}function g(k,v){a=Nt.Replace;let h=Rl(p.location,k,v);n&&n(h,k),c=u();let y=p_(h,c),b=p.createHref(h);o.replaceState(y,"",b),s&&l&&l({action:a,location:p.location,delta:0})}function m(k){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof k=="string"?k:vi(k);return Re(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let p={get action(){return a},get location(){return e(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(h_,d),l=k,()=>{i.removeEventListener(h_,d),l=null}},createHref(k){return t(i,k)},createURL:m,encodeLocation(k){let v=m(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(k){return o.go(k)}};return p}var Mt;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Mt||(Mt={}));const $N=new Set(["lazy","caseSensitive","path","id","index","children"]);function UN(e){return e.index===!0}function jS(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(Re(i.index!==!0||!i.children,"Cannot specify children on an index route"),Re(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),UN(i)){let l=He({},i,{hasErrorBoundary:t(i),id:a});return r[a]=l,l}else{let l=He({},i,{id:a,hasErrorBoundary:t(i),children:void 0});return r[a]=l,i.children&&(l.children=jS(i.children,t,o,r)),l}})}function Io(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?ki(t):t,i=uc(r.pathname||"/",n);if(i==null)return null;let s=$S(e);BN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=QN(s[a],e2(i));return o}function $S(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ui([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$S(s.children,t,u,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:KN(c,s.index),routesMeta:u})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of US(s.path))i(s,o,l)}),t}function US(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=US(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function BN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:qN(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VN=/^:\w+$/,WN=3,HN=2,YN=1,GN=10,ZN=-2,m_=e=>e==="*";function KN(e,t){let n=e.split("/"),r=n.length;return n.some(m_)&&(r+=ZN),t&&(r+=HN),n.filter(i=>!m_(i)).reduce((i,s)=>i+(VN.test(s)?WN:s===""?YN:GN),r)}function qN(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function QN(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",u=XN({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!u)return null;Object.assign(r,u.params);let d=a.route;s.push({params:r,pathname:ui([i,u.pathname]),pathnameBase:i2(ui([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=ui([i,u.pathnameBase]))}return s}function XN(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=JN(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return c[u]=t2(a[d]||"",u),c},{}),pathname:s,pathnameBase:o,pattern:e}}function JN(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ia(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function e2(e){try{return decodeURI(e)}catch(t){return ia(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function t2(e,t){try{return decodeURIComponent(e)}catch(n){return ia(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function uc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function n2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ki(e):e;return{pathname:n?n.startsWith("/")?n:r2(n,t):t,search:s2(r),hash:o2(i)}}function r2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function wy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ki(e):(i=He({},e),Re(!i.pathname||!i.pathname.includes("?"),Lh("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Lh("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Lh("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=t.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=n2(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const ui=e=>e.join("/").replace(/\/\/+/g,"/"),i2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class g_ extends Error{}class a2{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],Re(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((s,o)=>r=o),this.controller=new AbortController;let i=()=>r(new g_("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((s,o)=>{let[a,l]=o;return Object.assign(s,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof g_?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(s=>{t.removeEventListener("abort",r),(s||this.done)&&i(s)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return Re(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:c2(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function l2(e){return e instanceof Promise&&e._tracked===!0}function c2(e){if(!l2(e))return e;if(e._error)throw e._error;return e._data}class xy{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function BS(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const VS=["post","put","patch","delete"],u2=new Set(VS),d2=["get",...VS],f2=new Set(d2),h2=new Set([301,302,303,307,308]),p2=new Set([307,308]),zh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},m2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},y_={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},WS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g2=!HS,y2=e=>!!e.hasErrorBoundary;function v2(e){Re(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||y2,n={},r=jS(e.routes,t,void 0,n),i,s=null,o=new Set,a=null,l=null,c=null,u=e.hydrationData!=null,d=Io(r,e.history.location,e.basename),f=null;if(d==null){let A=Rr(404,{pathname:e.history.location.pathname}),{matches:P,route:j}=k_(r);d=P,f={[j.id]:A}}let g=!d.some(A=>A.route.lazy)&&(!d.some(A=>A.route.loader)||e.hydrationData!=null),m,p={historyAction:e.history.action,location:e.history.location,matches:d,initialized:g,navigation:zh,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||f,fetchers:new Map,blockers:new Map},k=Nt.Pop,v=!1,h,y=!1,b=!1,x=[],S=[],C=new Map,N=0,z=-1,G=new Map,_e=new Set,ee=new Map,ne=new Map,pe=new Map,Te=!1;function Oe(){if(s=e.history.listen(j=>{let{action:ue,location:de,delta:Se}=j;if(Te){Te=!1;return}ia(pe.size===0||Se!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ye=Xe({currentLocation:p.location,nextLocation:de,historyAction:ue});if(ye&&Se!=null){Te=!0,e.history.go(Se*-1),ce(ye,{state:"blocked",location:de,proceed(){ce(ye,{state:"proceeding",proceed:void 0,reset:void 0,location:de}),e.history.go(Se)},reset(){F(ye),K({blockers:new Map(m.state.blockers)})}});return}return U(ue,de)}),p.initialized)return m;let A=p.matches.filter(j=>j.route.lazy);if(A.length===0)return U(Nt.Pop,p.location),m;let P=A.map(j=>Tm(j.route,t,n));return Promise.all(P).then(()=>{!p.matches.some(ue=>ue.route.loader)||e.hydrationData!=null?K({initialized:!0}):U(Nt.Pop,p.location)}),m}function We(){s&&s(),o.clear(),h&&h.abort(),p.fetchers.forEach((A,P)=>xe(P)),p.blockers.forEach((A,P)=>F(P))}function $(A){return o.add(A),()=>o.delete(A)}function K(A){p=He({},p,A),o.forEach(P=>P(p))}function oe(A,P){var j,ue;let de=p.actionData!=null&&p.navigation.formMethod!=null&&ei(p.navigation.formMethod)&&p.navigation.state==="loading"&&((j=A.state)==null?void 0:j._isRedirect)!==!0,Se;P.actionData?Object.keys(P.actionData).length>0?Se=P.actionData:Se=null:de?Se=p.actionData:Se=null;let ye=P.loaderData?S_(p.loaderData,P.loaderData,P.matches||[],P.errors):p.loaderData;for(let[fe]of pe)F(fe);let Me=v===!0||p.navigation.formMethod!=null&&ei(p.navigation.formMethod)&&((ue=A.state)==null?void 0:ue._isRedirect)!==!0;i&&(r=i,i=void 0),K(He({},P,{actionData:Se,loaderData:ye,historyAction:k,location:A,initialized:!0,navigation:zh,revalidation:"idle",restoreScrollPosition:Cr(A,P.matches||p.matches),preventScrollReset:Me,blockers:new Map(p.blockers)})),y||k===Nt.Pop||(k===Nt.Push?e.history.push(A,A.state):k===Nt.Replace&&e.history.replace(A,A.state)),k=Nt.Pop,v=!1,y=!1,b=!1,x=[],S=[]}async function te(A,P){if(typeof A=="number"){e.history.go(A);return}let{path:j,submission:ue,error:de}=v_(A,P),Se=p.location,ye=Rl(p.location,j,P&&P.state);ye=He({},ye,e.history.encodeLocation(ye));let Me=P&&P.replace!=null?P.replace:void 0,fe=Nt.Push;Me===!0?fe=Nt.Replace:Me===!1||ue!=null&&ei(ue.formMethod)&&ue.formAction===p.location.pathname+p.location.search&&(fe=Nt.Replace);let nn=P&&"preventScrollReset"in P?P.preventScrollReset===!0:void 0,Je=Xe({currentLocation:Se,nextLocation:ye,historyAction:fe});if(Je){ce(Je,{state:"blocked",location:ye,proceed(){ce(Je,{state:"proceeding",proceed:void 0,reset:void 0,location:ye}),te(A,P)},reset(){F(Je),K({blockers:new Map(p.blockers)})}});return}return await U(fe,ye,{submission:ue,pendingError:de,preventScrollReset:nn,replace:P&&P.replace})}function O(){if(me(),K({revalidation:"loading"}),p.navigation.state!=="submitting"){if(p.navigation.state==="idle"){U(p.historyAction,p.location,{startUninterruptedRevalidation:!0});return}U(k||p.historyAction,p.navigation.location,{overrideNavigation:p.navigation})}}async function U(A,P,j){h&&h.abort(),h=null,k=A,y=(j&&j.startUninterruptedRevalidation)===!0,ft(p.location,p.matches),v=(j&&j.preventScrollReset)===!0;let ue=i||r,de=j&&j.overrideNavigation,Se=Io(ue,P,e.basename);if(!Se){let Tt=Rr(404,{pathname:P.pathname}),{matches:Er,route:ir}=k_(ue);$e(),oe(P,{matches:Er,loaderData:{},errors:{[ir.id]:Tt}});return}if(k2(p.location,P)&&!(j&&j.submission&&ei(j.submission.formMethod))){oe(P,{matches:Se});return}h=new AbortController;let ye=La(e.history,P,h.signal,j&&j.submission),Me,fe;if(j&&j.pendingError)fe={[Do(Se).route.id]:j.pendingError};else if(j&&j.submission&&ei(j.submission.formMethod)){let Tt=await X(ye,P,j.submission,Se,{replace:j.replace});if(Tt.shortCircuited)return;Me=Tt.pendingActionData,fe=Tt.pendingActionError,de=He({state:"loading",location:P},j.submission),ye=new Request(ye.url,{signal:ye.signal})}let{shortCircuited:nn,loaderData:Je,errors:hn}=await le(ye,P,Se,de,j&&j.submission,j&&j.replace,Me,fe);nn||(h=null,oe(P,He({matches:Se},Me?{actionData:Me}:{},{loaderData:Je,errors:hn})))}async function X(A,P,j,ue,de){me();let Se=He({state:"submitting",location:P},j);K({navigation:Se});let ye,Me=Im(ue,P);if(!Me.route.action&&!Me.route.lazy)ye={type:Mt.error,error:Rr(405,{method:A.method,pathname:P.pathname,routeId:Me.route.id})};else if(ye=await Fa("action",A,Me,ue,n,t,m.basename),A.signal.aborted)return{shortCircuited:!0};if(jo(ye)){let fe;return de&&de.replace!=null?fe=de.replace:fe=ye.location===p.location.pathname+p.location.search,await De(p,ye,{submission:j,replace:fe}),{shortCircuited:!0}}if(sl(ye)){let fe=Do(ue,Me.route.id);return(de&&de.replace)!==!0&&(k=Nt.Push),{pendingActionData:{},pendingActionError:{[fe.route.id]:ye.error}}}if(Ss(ye))throw Rr(400,{type:"defer-action"});return{pendingActionData:{[Me.route.id]:ye.data}}}async function le(A,P,j,ue,de,Se,ye,Me){let fe=ue;fe||(fe=He({state:"loading",location:P,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},de));let nn=de||(fe.formMethod&&fe.formAction&&fe.formData&&fe.formEncType?{formMethod:fe.formMethod,formAction:fe.formAction,formData:fe.formData,formEncType:fe.formEncType}:void 0),Je=i||r,[hn,Tt]=__(e.history,p,j,nn,P,b,x,S,ee,Je,e.basename,ye,Me);if($e(rn=>!(j&&j.some(Tr=>Tr.route.id===rn))||hn&&hn.some(Tr=>Tr.route.id===rn)),hn.length===0&&Tt.length===0)return oe(P,He({matches:j,loaderData:{},errors:Me||null},ye?{actionData:ye}:{})),{shortCircuited:!0};if(!y){Tt.forEach(Tr=>{let ds=p.fetchers.get(Tr.key),Rc={state:"loading",data:ds&&ds.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(Tr.key,Rc)});let rn=ye||p.actionData;K(He({navigation:fe},rn?Object.keys(rn).length===0?{actionData:null}:{actionData:rn}:{},Tt.length>0?{fetchers:new Map(p.fetchers)}:{}))}z=++N,Tt.forEach(rn=>C.set(rn.key,h));let{results:Er,loaderResults:ir,fetcherResults:Ea}=await Pe(p.matches,j,hn,Tt,A);if(A.signal.aborted)return{shortCircuited:!0};Tt.forEach(rn=>C.delete(rn.key));let Dc=b_(Er);if(Dc)return await De(p,Dc,{replace:Se}),{shortCircuited:!0};let{loaderData:Nc,errors:no}=x_(p,j,hn,ir,Me,Tt,Ea,ne);ne.forEach((rn,Tr)=>{rn.subscribe(ds=>{(ds||rn.done)&&ne.delete(Tr)})}),I();let th=W(z);return He({loaderData:Nc,errors:no},th||Tt.length>0?{fetchers:new Map(p.fetchers)}:{})}function R(A){return p.fetchers.get(A)||m2}function Ee(A,P,j,ue){if(g2)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");C.has(A)&&_(A);let Se=Io(i||r,j,e.basename);if(!Se){ot(A,P,Rr(404,{pathname:j}));return}let{path:ye,submission:Me}=v_(j,ue,!0),fe=Im(Se,ye);if(v=(ue&&ue.preventScrollReset)===!0,Me&&ei(Me.formMethod)){Z(A,P,ye,fe,Se,Me);return}ee.set(A,{routeId:P,path:ye}),Ge(A,P,ye,fe,Se,Me)}async function Z(A,P,j,ue,de,Se){if(me(),ee.delete(A),!ue.route.action&&!ue.route.lazy){let Kr=Rr(405,{method:Se.formMethod,pathname:j,routeId:P});ot(A,P,Kr);return}let ye=p.fetchers.get(A),Me=He({state:"submitting"},Se,{data:ye&&ye.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Me),K({fetchers:new Map(p.fetchers)});let fe=new AbortController,nn=La(e.history,j,fe.signal,Se);C.set(A,fe);let Je=await Fa("action",nn,ue,de,n,t,m.basename);if(nn.signal.aborted){C.get(A)===fe&&C.delete(A);return}if(jo(Je)){C.delete(A),_e.add(A);let Kr=He({state:"loading"},Se,{data:void 0," _hasFetcherDoneAnything ":!0});return p.fetchers.set(A,Kr),K({fetchers:new Map(p.fetchers)}),De(p,Je,{isFetchActionRedirect:!0})}if(sl(Je)){ot(A,P,Je.error);return}if(Ss(Je))throw Rr(400,{type:"defer-action"});let hn=p.navigation.location||p.location,Tt=La(e.history,hn,fe.signal),Er=i||r,ir=p.navigation.state!=="idle"?Io(Er,p.navigation.location,e.basename):p.matches;Re(ir,"Didn't find any matches after fetcher action");let Ea=++N;G.set(A,Ea);let Dc=He({state:"loading",data:Je.data},Se,{" _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Dc);let[Nc,no]=__(e.history,p,ir,Se,hn,b,x,S,ee,Er,e.basename,{[ue.route.id]:Je.data},void 0);no.filter(Kr=>Kr.key!==A).forEach(Kr=>{let rh=Kr.key,Fv=p.fetchers.get(rh),CE={state:"loading",data:Fv&&Fv.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(rh,CE),C.set(rh,fe)}),K({fetchers:new Map(p.fetchers)});let{results:th,loaderResults:rn,fetcherResults:Tr}=await Pe(p.matches,ir,Nc,no,Tt);if(fe.signal.aborted)return;G.delete(A),C.delete(A),no.forEach(Kr=>C.delete(Kr.key));let ds=b_(th);if(ds)return De(p,ds);let{loaderData:Rc,errors:nh}=x_(p,p.matches,Nc,rn,void 0,no,Tr,ne),kE={state:"idle",data:Je.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(A,kE);let bE=W(Ea);p.navigation.state==="loading"&&Ea>z?(Re(k,"Expected pending action"),h&&h.abort(),oe(p.navigation.location,{matches:ir,loaderData:Rc,errors:nh,fetchers:new Map(p.fetchers)})):(K(He({errors:nh,loaderData:S_(p.loaderData,Rc,ir,nh)},bE?{fetchers:new Map(p.fetchers)}:{})),b=!1)}async function Ge(A,P,j,ue,de,Se){let ye=p.fetchers.get(A),Me=He({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Se,{data:ye&&ye.data," _hasFetcherDoneAnything ":!0});p.fetchers.set(A,Me),K({fetchers:new Map(p.fetchers)});let fe=new AbortController,nn=La(e.history,j,fe.signal);C.set(A,fe);let Je=await Fa("loader",nn,ue,de,n,t,m.basename);if(Ss(Je)&&(Je=await KS(Je,nn.signal,!0)||Je),C.get(A)===fe&&C.delete(A),nn.signal.aborted)return;if(jo(Je)){await De(p,Je);return}if(sl(Je)){let Tt=Do(p.matches,P);p.fetchers.delete(A),K({fetchers:new Map(p.fetchers),errors:{[Tt.route.id]:Je.error}});return}Re(!Ss(Je),"Unhandled fetcher deferred data");let hn={state:"idle",data:Je.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(A,hn),K({fetchers:new Map(p.fetchers)})}async function De(A,P,j){var ue;let{submission:de,replace:Se,isFetchActionRedirect:ye}=j===void 0?{}:j;P.revalidate&&(b=!0);let Me=Rl(A.location,P.location,He({_isRedirect:!0},ye?{_isFetchActionRedirect:!0}:{}));if(Re(Me,"Expected a location on the redirect navigation"),WS.test(P.location)&&HS&&typeof((ue=window)==null?void 0:ue.location)<"u"){let Er=e.history.createURL(P.location),ir=uc(Er.pathname,e.basename||"/")==null;if(window.location.origin!==Er.origin||ir){Se?window.location.replace(P.location):window.location.assign(P.location);return}}h=null;let fe=Se===!0?Nt.Replace:Nt.Push,{formMethod:nn,formAction:Je,formEncType:hn,formData:Tt}=A.navigation;!de&&nn&&Je&&Tt&&hn&&(de={formMethod:nn,formAction:Je,formEncType:hn,formData:Tt}),p2.has(P.status)&&de&&ei(de.formMethod)?await U(fe,Me,{submission:He({},de,{formAction:P.location}),preventScrollReset:v}):await U(fe,Me,{overrideNavigation:{state:"loading",location:Me,formMethod:de?de.formMethod:void 0,formAction:de?de.formAction:void 0,formEncType:de?de.formEncType:void 0,formData:de?de.formData:void 0},preventScrollReset:v})}async function Pe(A,P,j,ue,de){let Se=await Promise.all([...j.map(fe=>Fa("loader",de,fe,P,n,t,m.basename)),...ue.map(fe=>fe.matches&&fe.match?Fa("loader",La(e.history,fe.path,de.signal),fe.match,fe.matches,n,t,m.basename):{type:Mt.error,error:Rr(404,{pathname:fe.path})})]),ye=Se.slice(0,j.length),Me=Se.slice(j.length);return await Promise.all([C_(A,j,ye,de.signal,!1,p.loaderData),C_(A,ue.map(fe=>fe.match),Me,de.signal,!0)]),{results:Se,loaderResults:ye,fetcherResults:Me}}function me(){b=!0,x.push(...$e()),ee.forEach((A,P)=>{C.has(P)&&(S.push(P),_(P))})}function ot(A,P,j){let ue=Do(p.matches,P);xe(A),K({errors:{[ue.route.id]:j},fetchers:new Map(p.fetchers)})}function xe(A){C.has(A)&&_(A),ee.delete(A),G.delete(A),_e.delete(A),p.fetchers.delete(A)}function _(A){let P=C.get(A);Re(P,"Expected fetch controller: "+A),P.abort(),C.delete(A)}function T(A){for(let P of A){let ue={state:"idle",data:R(P).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};p.fetchers.set(P,ue)}}function I(){let A=[];for(let P of _e){let j=p.fetchers.get(P);Re(j,"Expected fetcher: "+P),j.state==="loading"&&(_e.delete(P),A.push(P))}T(A)}function W(A){let P=[];for(let[j,ue]of G)if(ue<A){let de=p.fetchers.get(j);Re(de,"Expected fetcher: "+j),de.state==="loading"&&(_(j),G.delete(j),P.push(j))}return T(P),P.length>0}function q(A,P){let j=p.blockers.get(A)||y_;return pe.get(A)!==P&&pe.set(A,P),j}function F(A){p.blockers.delete(A),pe.delete(A)}function ce(A,P){let j=p.blockers.get(A)||y_;Re(j.state==="unblocked"&&P.state==="blocked"||j.state==="blocked"&&P.state==="blocked"||j.state==="blocked"&&P.state==="proceeding"||j.state==="blocked"&&P.state==="unblocked"||j.state==="proceeding"&&P.state==="unblocked","Invalid blocker state transition: "+j.state+" -> "+P.state),p.blockers.set(A,P),K({blockers:new Map(p.blockers)})}function Xe(A){let{currentLocation:P,nextLocation:j,historyAction:ue}=A;if(pe.size===0)return;pe.size>1&&ia(!1,"A router only supports one blocker at a time");let de=Array.from(pe.entries()),[Se,ye]=de[de.length-1],Me=p.blockers.get(Se);if(!(Me&&Me.state==="proceeding")&&ye({currentLocation:P,nextLocation:j,historyAction:ue}))return Se}function $e(A){let P=[];return ne.forEach((j,ue)=>{(!A||A(ue))&&(j.cancel(),P.push(ue),ne.delete(ue))}),P}function ge(A,P,j){if(a=A,c=P,l=j||(ue=>ue.key),!u&&p.navigation===zh){u=!0;let ue=Cr(p.location,p.matches);ue!=null&&K({restoreScrollPosition:ue})}return()=>{a=null,c=null,l=null}}function ft(A,P){if(a&&l&&c){let j=P.map(de=>E_(de,p.loaderData)),ue=l(A,j)||A.key;a[ue]=c()}}function Cr(A,P){if(a&&l&&c){let j=P.map(Se=>E_(Se,p.loaderData)),ue=l(A,j)||A.key,de=a[ue];if(typeof de=="number")return de}return null}function Zr(A){i=A}return m={get basename(){return e.basename},get state(){return p},get routes(){return r},initialize:Oe,subscribe:$,enableScrollRestoration:ge,navigate:te,fetch:Ee,revalidate:O,createHref:A=>e.history.createHref(A),encodeLocation:A=>e.history.encodeLocation(A),getFetcher:R,deleteFetcher:xe,dispose:We,getBlocker:q,deleteBlocker:F,_internalFetchControllers:C,_internalActiveDeferreds:ne,_internalSetRoutes:Zr},m}function _2(e){return e!=null&&"formData"in e}function v_(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:vi(e);if(!t||!_2(t))return{path:r};if(t.formMethod&&!C2(t.formMethod))return{path:r,error:Rr(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:ZS(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},ei(i.formMethod)))return{path:r,submission:i};let s=ki(r),o=GS(t.formData);return n&&s.search&&qS(s.search)&&o.append("index",""),s.search="?"+o,{path:vi(s),submission:i}}function w2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function __(e,t,n,r,i,s,o,a,l,c,u,d,f){let g=f?Object.values(f)[0]:d?Object.values(d)[0]:void 0,m=e.createURL(t.location),p=e.createURL(i),k=s||m.toString()===p.toString()||m.search!==p.search,v=f?Object.keys(f)[0]:void 0,y=w2(n,v).filter((x,S)=>{if(x.route.lazy)return!0;if(x.route.loader==null)return!1;if(x2(t.loaderData,t.matches[S],x)||o.some(z=>z===x.route.id))return!0;let C=t.matches[S],N=x;return w_(x,He({currentUrl:m,currentParams:C.params,nextUrl:p,nextParams:N.params},r,{actionResult:g,defaultShouldRevalidate:k||YS(C,N)}))}),b=[];return l.forEach((x,S)=>{if(!n.some(G=>G.route.id===x.routeId))return;let C=Io(c,x.path,u);if(!C){b.push(He({key:S},x,{matches:null,match:null}));return}let N=Im(C,x.path);if(a.includes(S)){b.push(He({key:S,matches:C,match:N},x));return}w_(N,He({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:g,defaultShouldRevalidate:k}))&&b.push(He({key:S,matches:C,match:N},x))}),[y,b]}function x2(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function YS(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function w_(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Tm(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Re(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";ia(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!$N.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,{hasErrorBoundary:t(He({},i)),lazy:void 0})}async function Fa(e,t,n,r,i,s,o,a,l,c){o===void 0&&(o="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let u,d,f,g=k=>{let v,h=new Promise((y,b)=>v=b);return f=()=>v(),t.signal.addEventListener("abort",f),Promise.race([k({request:t,params:n.params,context:c}),h])};try{let k=n.route[e];if(n.route.lazy)if(k)d=(await Promise.all([g(k),Tm(n.route,s,i)]))[0];else if(await Tm(n.route,s,i),k=n.route[e],k)d=await g(k);else{if(e==="action")throw Rr(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:Mt.data,data:void 0}}else Re(k,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),d=await g(k);Re(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(k){u=Mt.error,d=k}finally{f&&t.signal.removeEventListener("abort",f)}if(b2(d)){let k=d.status;if(h2.has(k)){let y=d.headers.get("Location");if(Re(y,"Redirects returned/thrown from loaders/actions must have a Location header"),WS.test(y)){if(!a){let b=new URL(t.url),x=y.startsWith("//")?new URL(b.protocol+y):new URL(y),S=uc(x.pathname,o)!=null;x.origin===b.origin&&S&&(y=x.pathname+x.search+x.hash)}}else{let b=r.slice(0,r.indexOf(n)+1),x=bf(b).map(C=>C.pathnameBase),S=wy(y,x,new URL(t.url).pathname);if(Re(vi(S),"Unable to resolve redirect location: "+y),o){let C=S.pathname;S.pathname=C==="/"?o:ui([o,C])}y=vi(S)}if(a)throw d.headers.set("Location",y),d;return{type:Mt.redirect,status:k,location:y,revalidate:d.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:u||Mt.data,response:d};let v,h=d.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?v=await d.json():v=await d.text(),u===Mt.error?{type:u,error:new xy(k,d.statusText,v),headers:d.headers}:{type:Mt.data,data:v,statusCode:d.status,headers:d.headers}}if(u===Mt.error)return{type:u,error:d};if(d instanceof a2){var m,p;return{type:Mt.deferred,deferredData:d,statusCode:(m=d.init)==null?void 0:m.status,headers:((p=d.init)==null?void 0:p.headers)&&new Headers(d.init.headers)}}return{type:Mt.data,data:d}}function La(e,t,n,r){let i=e.createURL(ZS(t)).toString(),s={signal:n};if(r&&ei(r.formMethod)){let{formMethod:o,formEncType:a,formData:l}=r;s.method=o.toUpperCase(),s.body=a==="application/x-www-form-urlencoded"?GS(l):l}return new Request(i,s)}function GS(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function S2(e,t,n,r,i){let s={},o=null,a,l=!1,c={};return n.forEach((u,d)=>{let f=t[d].route.id;if(Re(!jo(u),"Cannot handle redirect results in processLoaderData"),sl(u)){let g=Do(e,f),m=u.error;r&&(m=Object.values(r)[0],r=void 0),o=o||{},o[g.route.id]==null&&(o[g.route.id]=m),s[f]=void 0,l||(l=!0,a=BS(u.error)?u.error.status:500),u.headers&&(c[f]=u.headers)}else Ss(u)?(i.set(f,u.deferredData),s[f]=u.deferredData.data):s[f]=u.data,u.statusCode!=null&&u.statusCode!==200&&!l&&(a=u.statusCode),u.headers&&(c[f]=u.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:c}}function x_(e,t,n,r,i,s,o,a){let{loaderData:l,errors:c}=S2(t,n,r,i,a);for(let u=0;u<s.length;u++){let{key:d,match:f}=s[u];Re(o!==void 0&&o[u]!==void 0,"Did not find corresponding fetcher result");let g=o[u];if(sl(g)){let m=Do(e.matches,f==null?void 0:f.route.id);c&&c[m.route.id]||(c=He({},c,{[m.route.id]:g.error})),e.fetchers.delete(d)}else if(jo(g))Re(!1,"Unhandled fetcher revalidation redirect");else if(Ss(g))Re(!1,"Unhandled fetcher deferred data");else{let m={state:"idle",data:g.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(d,m)}}return{loaderData:l,errors:c}}function S_(e,t,n,r){let i=He({},t);for(let s of n){let o=s.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&s.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function Do(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function k_(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Rr(e,t){let{pathname:n,routeId:r,method:i,type:s}=t===void 0?{}:t,o="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"&&(a="defer() is not supported in actions")):e===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",a='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new xy(e||500,o,new Error(a),!0)}function b_(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(jo(n))return n}}function ZS(e){let t=typeof e=="string"?ki(e):e;return vi(He({},t,{hash:""}))}function k2(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Ss(e){return e.type===Mt.deferred}function sl(e){return e.type===Mt.error}function jo(e){return(e&&e.type)===Mt.redirect}function b2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function C2(e){return f2.has(e)}function ei(e){return u2.has(e)}async function C_(e,t,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=t[o];if(!l)continue;let c=e.find(d=>d.route.id===l.route.id),u=c!=null&&!YS(c,l)&&(s&&s[l.route.id])!==void 0;Ss(a)&&(i||u)&&await KS(a,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function KS(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Mt.data,data:e.deferredData.unwrappedData}}catch(i){return{type:Mt.error,error:i}}return{type:Mt.data,data:e.deferredData.data}}}function qS(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function E_(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function Im(e,t){let n=typeof t=="string"?ki(t).search:t.search;if(e[e.length-1].route.index&&qS(n||""))return e[e.length-1];let r=bf(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function E2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const T2=typeof Object.is=="function"?Object.is:E2,{useState:I2,useEffect:D2,useLayoutEffect:N2,useDebugValue:R2}=xp;function A2(e,t,n){const r=t(),[{inst:i},s]=I2({inst:{value:r,getSnapshot:t}});return N2(()=>{i.value=r,i.getSnapshot=t,jh(i)&&s({inst:i})},[e,r,t]),D2(()=>(jh(i)&&s({inst:i}),e(()=>{jh(i)&&s({inst:i})})),[e]),R2(r),r}function jh(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!T2(n,r)}catch{return!0}}function O2(e,t,n){return t()}const P2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M2=!P2,F2=M2?O2:A2,L2="useSyncExternalStore"in xp?(e=>e.useSyncExternalStore)(xp):F2,Sy=D.createContext(null),ky=D.createContext(null),dc=D.createContext(null),Cf=D.createContext(null),Ks=D.createContext({outlet:null,matches:[]}),QS=D.createContext(null);function Dm(){return Dm=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dm.apply(this,arguments)}function z2(e,t){let{relative:n}=t===void 0?{}:t;fc()||Re(!1);let{basename:r,navigator:i}=D.useContext(dc),{hash:s,pathname:o,search:a}=JS(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ui([r,o])),i.createHref({pathname:l,search:a,hash:s})}function fc(){return D.useContext(Cf)!=null}function qs(){return fc()||Re(!1),D.useContext(Cf).location}function ya(){fc()||Re(!1);let{basename:e,navigator:t}=D.useContext(dc),{matches:n}=D.useContext(Ks),{pathname:r}=qs(),i=JSON.stringify(bf(n).map(a=>a.pathnameBase)),s=D.useRef(!1);return D.useEffect(()=>{s.current=!0}),D.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){t.go(a);return}let c=wy(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:ui([e,c.pathname])),(l.replace?t.replace:t.push)(c,l.state,l)},[e,t,i,r])}const XS=D.createContext(null);function j2(){return D.useContext(XS)}function $2(e){let t=D.useContext(Ks).outlet;return t&&D.createElement(XS.Provider,{value:e},t)}function JS(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=D.useContext(Ks),{pathname:i}=qs(),s=JSON.stringify(bf(r).map(o=>o.pathnameBase));return D.useMemo(()=>wy(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function U2(e,t){fc()||Re(!1);let{navigator:n}=D.useContext(dc),r=D.useContext(ky),{matches:i}=D.useContext(Ks),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=qs(),c;if(t){var u;let p=typeof t=="string"?ki(t):t;a==="/"||(u=p.pathname)!=null&&u.startsWith(a)||Re(!1),c=p}else c=l;let d=c.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",g=Io(e,{pathname:f}),m=H2(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:ui([a,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?a:ui([a,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),i,r||void 0);return t&&m?D.createElement(Cf.Provider,{value:{location:Dm({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Nt.Pop}},m):m}function B2(){let e=K2(),t=BS(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},t),n?D.createElement("pre",{style:i},n):null,s)}class V2 extends D.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?D.createElement(Ks.Provider,{value:this.props.routeContext},D.createElement(QS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W2(e){let{routeContext:t,match:n,children:r}=e,i=D.useContext(Sy);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Ks.Provider,{value:t},r)}function H2(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Re(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=D.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=D.createElement(B2,null));let u=t.concat(r.slice(0,a+1)),d=()=>{let f=s;return l?f=c:o.route.Component?f=D.createElement(o.route.Component,null):o.route.element&&(f=o.route.element),D.createElement(W2,{match:o,routeContext:{outlet:s,matches:u},children:f})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?D.createElement(V2,{location:n.location,component:c,error:l,children:d(),routeContext:{outlet:null,matches:u}}):d()},null)}var T_;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(T_||(T_={}));var Ju;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Ju||(Ju={}));function Y2(e){let t=D.useContext(ky);return t||Re(!1),t}function G2(e){let t=D.useContext(Ks);return t||Re(!1),t}function Z2(e){let t=G2(),n=t.matches[t.matches.length-1];return n.route.id||Re(!1),n.route.id}function K2(){var e;let t=D.useContext(QS),n=Y2(Ju.UseRouteError),r=Z2(Ju.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function I_(e){let{fallbackElement:t,router:n}=e,r=D.useCallback(()=>n.state,[n]),i=L2(n.subscribe,r,r),s=D.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,c,u)=>n.navigate(l,{state:c,preventScrollReset:u==null?void 0:u.preventScrollReset}),replace:(l,c,u)=>n.navigate(l,{replace:!0,state:c,preventScrollReset:u==null?void 0:u.preventScrollReset})}),[n]),o=n.basename||"/",a=D.useMemo(()=>({router:n,navigator:s,static:!1,basename:o}),[n,s,o]);return D.createElement(D.Fragment,null,D.createElement(Sy.Provider,{value:a},D.createElement(ky.Provider,{value:i},D.createElement(Q2,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:s},n.state.initialized?D.createElement(X2,null):t))),null)}function q2(e){return $2(e.context)}function uo(e){Re(!1)}function Q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Nt.Pop,navigator:s,static:o=!1}=e;fc()&&Re(!1);let a=t.replace(/^\/*/,"/"),l=D.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ki(r));let{pathname:c="/",search:u="",hash:d="",state:f=null,key:g="default"}=r,m=D.useMemo(()=>{let p=uc(c,a);return p==null?null:{location:{pathname:p,search:u,hash:d,state:f,key:g},navigationType:i}},[a,c,u,d,f,g,i]);return m==null?null:D.createElement(dc.Provider,{value:l},D.createElement(Cf.Provider,{children:n,value:m}))}function X2(e){let{children:t,location:n}=e,r=D.useContext(Sy),i=r&&!t?r.router.routes:ed(t);return U2(i,n)}var D_;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(D_||(D_={}));new Promise(()=>{});function ed(e,t){t===void 0&&(t=[]);let n=[];return D.Children.forEach(e,(r,i)=>{if(!D.isValidElement(r))return;if(r.type===D.Fragment){n.push.apply(n,ed(r.props.children,t));return}r.type!==uo&&Re(!1),!r.props.index||!r.props.children||Re(!1);let s=[...t,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ed(r.props.children,s)),n.push(o)}),n}function J2(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function td(){return td=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},td.apply(this,arguments)}function eR(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function tR(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function nR(e,t){return e.button===0&&(!t||t==="_self")&&!tR(e)}function Nm(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function rR(e,t){let n=Nm(e);if(t)for(let r of t.keys())n.has(r)||t.getAll(r).forEach(i=>{n.append(r,i)});return n}const iR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function sR(e,t){return v2({basename:t==null?void 0:t.basename,history:LN({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||oR(),routes:e,detectErrorBoundary:J2}).initialize()}function oR(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=td({},t,{errors:aR(t.errors)})),t}function aR(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new xy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}const lR=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ek=D.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u}=t,d=eR(t,iR),{basename:f}=D.useContext(dc),g,m=!1;if(typeof c=="string"&&cR.test(c)&&(g=c,lR)){let h=new URL(window.location.href),y=c.startsWith("//")?new URL(h.protocol+c):new URL(c),b=uc(y.pathname,f);y.origin===h.origin&&b!=null?c=b+y.search+y.hash:m=!0}let p=z2(c,{relative:i}),k=uR(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i});function v(h){r&&r(h),h.defaultPrevented||k(h)}return D.createElement("a",td({},d,{href:g||p,onClick:m||s?r:v,ref:n,target:l}))});var N_;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(N_||(N_={}));var R_;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(R_||(R_={}));function uR(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=ya(),l=qs(),c=JS(e,{relative:o});return D.useCallback(u=>{if(nR(u,n)){u.preventDefault();let d=r!==void 0?r:vi(l)===vi(c);a(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,e,s,o])}function dR(e){let t=D.useRef(Nm(e)),n=D.useRef(!1),r=qs(),i=D.useMemo(()=>rR(r.search,n.current?null:t.current),[r.search]),s=ya(),o=D.useCallback((a,l)=>{const c=Nm(typeof a=="function"?a(i):a);n.current=!0,s("?"+c,l)},[s,i]);return[i,o]}const fR=E.h1`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 36px;
    font-weight: 700;
    line-height: 33px;
    letter-spacing: -1.125px;
`,Al=E.h1`
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
`;E.h2`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.75px;
`;const dt=E.h3`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.25px;
    text-align: left;
`;E.h4`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    text-align: left;
`;const hR=E.p`
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
`,Qs=E.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
`,by=E.p`
    font-family: 'League Spartan', Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.10000000149011612px;
    text-align: left;
    color:#DFE3FA;
`,zs=E.button`
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
`,hc=E.button`
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
`,tk=E.button`
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
`,Cy=E.button`
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
`,nk=E(ek)`
    color:inherit;
    text-decoration:none;
`;var pR=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s},mR=function(e){var t=e.split(/ ?; ?/);return t.reduce(function(n,r){var i=pR(r.split(/ ?: ?/),2),s=i[0],o=i[1];return s&&o&&(n[s.replace(/-(\w)/g,function(a,l){return l.toUpperCase()})]=Number.isNaN(Number(o))?o:Number(o)),n},{})};function gR(e){e===void 0&&(e=6);for(var t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n="",r=e;r>0;--r)n+=t[Math.round(Math.random()*(t.length-1))];return n}var yR=["br","col","colgroup","dl","hr","iframe","img","input","link","menuitem","meta","ol","param","select","table","tbody","tfoot","thead","tr","ul","wbr"],A_={"accept-charset":"acceptCharset",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",controlslist:"controlsList",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",datetime:"dateTime",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",enctype:"encType",for:"htmlFor",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",innerhtml:"innerHTML",inputmode:"inputMode",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",marginwidth:"marginWidth",marginheight:"marginHeight",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",nomodule:"noModule",novalidate:"noValidate",playsinline:"playsInline",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",typemustmatch:"typeMustMatch",usemap:"useMap",accentheight:"accentHeight","accent-height":"accentHeight",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",arabicform:"arabicForm","arabic-form":"arabicForm",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",diffuseconstant:"diffuseConstant",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",edgemode:"edgeMode",enablebackground:"enableBackground","enable-background":"enableBackground",externalresourcesrequired:"externalResourcesRequired",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",imagerendering:"imageRendering","image-rendering":"imageRendering",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",numoctaves:"numOctaves",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",specularconstant:"specularConstant",specularexponent:"specularExponent",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",vmathematical:"vMathematical","v-mathematical":"vMathematical",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",ychannelselector:"yChannelSelector",zoomandpan:"zoomAndPan",onblur:"onBlur",onchange:"onChange",onclick:"onClick",oncontextmenu:"onContextMenu",ondoubleclick:"onDoubleClick",ondrag:"onDrag",ondragend:"onDragEnd",ondragenter:"onDragEnter",ondragexit:"onDragExit",ondragleave:"onDragLeave",ondragover:"onDragOver",ondragstart:"onDragStart",ondrop:"onDrop",onerror:"onError",onfocus:"onFocus",oninput:"onInput",oninvalid:"onInvalid",onkeydown:"onKeyDown",onkeypress:"onKeyPress",onkeyup:"onKeyUp",onload:"onLoad",onmousedown:"onMouseDown",onmouseenter:"onMouseEnter",onmouseleave:"onMouseLeave",onmousemove:"onMouseMove",onmouseout:"onMouseOut",onmouseover:"onMouseOver",onmouseup:"onMouseUp",onscroll:"onScroll",onsubmit:"onSubmit",ontouchcancel:"onTouchCancel",ontouchend:"onTouchEnd",ontouchmove:"onTouchMove",ontouchstart:"onTouchStart",onwheel:"onWheel"},nd=globalThis&&globalThis.__assign||function(){return nd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nd.apply(this,arguments)},rk=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s},ik=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))};function vR(e,t){var n={key:t};if(e instanceof Element){var r=e.getAttribute("class");r&&(n.className=r),ik([],rk(e.attributes),!1).forEach(function(i){switch(i.name){case"class":break;case"style":n[i.name]=mR(i.value);break;case"allowfullscreen":case"allowpaymentrequest":case"async":case"autofocus":case"autoplay":case"checked":case"controls":case"default":case"defer":case"disabled":case"formnovalidate":case"hidden":case"ismap":case"itemscope":case"loop":case"multiple":case"muted":case"nomodule":case"novalidate":case"open":case"readonly":case"required":case"reversed":case"selected":case"typemustmatch":n[A_[i.name]||i.name]=!0;break;default:n[A_[i.name]||i.name]=i.value}})}return n}function _R(e,t,n){var r=ik([],rk(e),!1).map(function(i,s){return Ey(i,nd(nd({},n),{index:s,level:t+1}))}).filter(Boolean);return r.length?r:null}function wR(e){return/[a-z]+[A-Z]+[a-z]+/.test(e)?e:e.toLowerCase()}function Ey(e,t){var n;if(t===void 0&&(t={}),!e||!(e instanceof Node))return null;var r=t.actions,i=r===void 0?[]:r,s=t.index,o=s===void 0?0:s,a=t.level,l=a===void 0?0:a,c=t.randomKey,u=e,d="".concat(l,"-").concat(o),f=[];if(c&&l===0&&(d="".concat(gR(),"-").concat(d)),Array.isArray(i)&&i.forEach(function(p){p.condition(u,d,l)&&(typeof p.pre=="function"&&(u=p.pre(u,d,l),u instanceof Node||(u=e)),typeof p.post=="function"&&f.push(p.post(u,d,l)))}),f.length)return f;switch(u.nodeType){case 1:return D.createElement(wR(u.nodeName),vR(u,d),_R(u.childNodes,l,t));case 3:{var g=((n=u.nodeValue)===null||n===void 0?void 0:n.toString())||"";if(/^\s+$/.test(g)&&!/[\u00A0\u202F]/.test(g))return null;if(!u.parentNode)return g;var m=u.parentNode.nodeName.toLowerCase();return yR.includes(m)?(/\S/.test(g)&&console.warn("A textNode is not allowed inside '".concat(m,`'. Your text "`).concat(g,'" will be ignored')),null):g}case 8:return null;default:return null}}function xR(e,t){if(t===void 0&&(t={}),!e||typeof e!="string")return null;var n=t.nodeOnly,r=n===void 0?!1:n,i=t.selector,s=i===void 0?"body > *":i,o=t.type,a=o===void 0?"text/html":o;try{var l=new DOMParser,c=l.parseFromString(e,a),u=c.querySelector(s);if(!(u instanceof Node))throw new TypeError("Error parsing input");return r?u:Ey(u,t)}catch{}return null}function O_(e,t){return t===void 0&&(t={}),typeof e=="string"?xR(e,t):e instanceof Node?Ey(e,t):null}var Rm={},SR={get exports(){return Rm},set exports(e){Rm=e}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=n:window.ExecutionEnvironment=n})()})(SR);var pn={FAILED:"failed",LOADED:"loaded",LOADING:"loading",PENDING:"pending",READY:"ready",UNSUPPORTED:"unsupported"};function $h(){return Rm.canUseDOM}function kR(){return bR()&&typeof window<"u"&&window!==null}function bR(){if(!document)return!1;var e=document.createElement("div");e.innerHTML="<svg />";var t=e.firstChild;return!!t&&t.namespaceURI==="http://www.w3.org/2000/svg"}function CR(e){return e[Math.floor(Math.random()*e.length)]}function ER(e){for(var t="abcdefghijklmnopqrstuvwxyz",n="1234567890",r="".concat(t).concat(t.toUpperCase()).concat(n),i="",s=0;s<e;s++)i+=CR(r);return i}function TR(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r={};for(var i in e)({}).hasOwnProperty.call(e,i)&&(t.includes(i)||(r[i]=e[i]));return r}var IR=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(r[s]=i[s])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Am=globalThis&&globalThis.__assign||function(){return Am=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Am.apply(this,arguments)},P_=globalThis&&globalThis.__read||function(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,s=[],o;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s},DR=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))},Ti=Object.create(null),NR=function(e){IR(t,e);function t(n){var r=e.call(this,n)||this;return Object.defineProperty(r,"isInitialized",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(r,"isActive",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(r,"hash",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(r,"handleLoad",{enumerable:!0,configurable:!0,writable:!0,value:function(i,s){s===void 0&&(s=!1),r.isActive&&r.setState({content:i,hasCache:s,status:pn.LOADED},r.getElement)}}),Object.defineProperty(r,"handleError",{enumerable:!0,configurable:!0,writable:!0,value:function(i){var s=r.props.onError,o=i.message==="Browser does not support SVG"?pn.UNSUPPORTED:pn.FAILED;r.isActive&&r.setState({status:o},function(){typeof s=="function"&&s(i)})}}),Object.defineProperty(r,"request",{enumerable:!0,configurable:!0,writable:!0,value:function(){var i=r.props,s=i.cacheRequests,o=i.fetchOptions,a=i.src;try{return s&&(Ti[a]={content:"",status:pn.LOADING}),fetch(a,o).then(function(l){var c=l.headers.get("content-type"),u=P_((c||"").split(/ ?; ?/),1),d=u[0];if(l.status>299)throw new Error("Not found");if(!["image/svg+xml","text/plain"].some(function(f){return d.includes(f)}))throw new Error("Content type isn't valid: ".concat(d));return l.text()}).then(function(l){var c=r.props.src;if(a!==c){Ti[a].status===pn.LOADING&&delete Ti[a];return}if(r.handleLoad(l),s){var u=Ti[a];u&&(u.content=l,u.status=pn.LOADED)}}).catch(function(l){if(r.handleError(l),s){var c=Ti[a];c&&delete Ti[a]}})}catch(l){return r.handleError(new Error(l.message))}}}),r.state={content:"",element:null,hasCache:!!n.cacheRequests&&!!Ti[n.src],status:pn.PENDING},r.hash=n.uniqueHash||ER(8),r}return Object.defineProperty(t.prototype,"componentDidMount",{enumerable:!1,configurable:!0,writable:!0,value:function(){if(this.isActive=!0,!(!$h()||this.isInitialized)){var n=this.state.status,r=this.props.src;try{if(n===pn.PENDING){if(!kR())throw new Error("Browser does not support SVG");if(!r)throw new Error("Missing src");this.load()}}catch(i){this.handleError(i)}this.isInitialized=!0}}}),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(n,r){if($h()){var i=this.state,s=i.hasCache,o=i.status,a=this.props,l=a.onLoad,c=a.src;if(r.status!==pn.READY&&o===pn.READY&&l&&l(c,s),n.src!==c){if(!c){this.handleError(new Error("Missing src"));return}this.load()}}}}),Object.defineProperty(t.prototype,"componentWillUnmount",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.isActive=!1}}),Object.defineProperty(t.prototype,"getNode",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.props,r=n.description,i=n.title;try{var s=this.processSVG(),o=O_(s,{nodeOnly:!0});if(!o||!(o instanceof SVGSVGElement))throw new Error("Could not convert the src to a DOM Node");var a=this.updateSVGAttributes(o);if(r){var l=a.querySelector("desc");l&&l.parentNode&&l.parentNode.removeChild(l);var c=document.createElementNS("http://www.w3.org/2000/svg","desc");c.innerHTML=r,a.prepend(c)}if(typeof i<"u"){var u=a.querySelector("title");if(u&&u.parentNode&&u.parentNode.removeChild(u),i){var d=document.createElementNS("http://www.w3.org/2000/svg","title");d.innerHTML=i,a.prepend(d)}}return a}catch(f){return this.handleError(f)}}}),Object.defineProperty(t.prototype,"getElement",{enumerable:!1,configurable:!0,writable:!0,value:function(){try{var n=this.getNode(),r=O_(n);if(!r||!D.isValidElement(r))throw new Error("Could not convert the src to a React element");this.setState({element:r,status:pn.READY})}catch(i){this.handleError(new Error(i.message))}}}),Object.defineProperty(t.prototype,"load",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this;this.isActive&&this.setState({content:"",element:null,hasCache:!1,status:pn.LOADING},function(){var r=n.props,i=r.cacheRequests,s=r.src,o=i&&Ti[s];if(o&&o.status===pn.LOADED){n.handleLoad(o.content,!0);return}var a=s.match(/data:image\/svg[^,]*?(;base64)?,(.*)/),l;if(a?l=a[1]?window.atob(a[2]):decodeURIComponent(a[2]):s.includes("<svg")&&(l=s),l){n.handleLoad(l);return}n.request()})}}),Object.defineProperty(t.prototype,"updateSVGAttributes",{enumerable:!1,configurable:!0,writable:!0,value:function(n){var r=this,i=this.props,s=i.baseURL,o=s===void 0?"":s,a=i.uniquifyIDs,l=["id","href","xlink:href","xlink:role","xlink:arcrole"],c=["href","xlink:href"],u=function(d,f){return c.includes(d)&&(f?!f.includes("#"):!1)};return a&&DR([],P_(n.children),!1).map(function(d){if(d.attributes&&d.attributes.length){var f=Object.values(d.attributes).map(function(g){var m=g,p=g.value.match(/url\((.*?)\)/);return p&&p[1]&&(m.value=g.value.replace(p[0],"url(".concat(o).concat(p[1],"__").concat(r.hash,")"))),m});l.forEach(function(g){var m=f.find(function(p){return p.name===g});m&&!u(g,m.value)&&(m.value="".concat(m.value,"__").concat(r.hash))})}return d.children.length?r.updateSVGAttributes(d):d}),n}}),Object.defineProperty(t.prototype,"processSVG",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.state.content,r=this.props.preProcessor;return r?r(n):n}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var n=this.state,r=n.element,i=n.status,s=this.props,o=s.children,a=o===void 0?null:o,l=s.innerRef,c=s.loader,u=c===void 0?null:c,d=TR(this.props,"baseURL","cacheRequests","children","description","fetchOptions","innerRef","loader","onError","onLoad","preProcessor","src","title","uniqueHash","uniquifyIDs");return $h()?r?D.cloneElement(r,Am({ref:l},d)):[pn.UNSUPPORTED,pn.FAILED].includes(i)?a:u:u}}),Object.defineProperty(t,"defaultProps",{enumerable:!0,configurable:!0,writable:!0,value:{cacheRequests:!0,uniquifyIDs:!1}}),t}(D.PureComponent);const Vr=NR,RR=E.nav`
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
`,M_=E.img`
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
`,AR=E.div`
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
`,OR=E.img`
    height:50%;
`,PR=E.div`
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
    
`,F_=E.img`
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
`,MR=E.div`
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
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(e,t){if(!e)throw va(t)},va=function(e){return new Error("Firebase Database ("+sk.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},FR=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[u],n[d],n[f],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ok(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):FR(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new LR;const f=s<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const m=c<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class LR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ak=function(e){const t=ok(e);return Ty.encodeByteArray(t,!0)},rd=function(e){return ak(e).replace(/\./g,"")},Om=function(e){try{return Ty.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(e){return lk(void 0,e)}function lk(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!jR(n)||(e[n]=lk(e[n],t[n]));return e}function jR(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=()=>$R().__FIREBASE_DEFAULTS__,BR=()=>{if(typeof process>"u"||typeof{}>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},VR=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Om(e[1]);return t&&JSON.parse(t)},ck=()=>{try{return UR()||BR()||VR()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},WR=e=>{var t,n;return(n=(t=ck())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},HR=e=>{const t=WR(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},YR=()=>{var e;return(e=ck())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[rd(JSON.stringify(n)),rd(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ZR())}function KR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dk(){return sk.NODE_ADMIN===!0}function qR(){try{return typeof indexedDB=="object"}catch{return!1}}function QR(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="FirebaseError";class mc extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=XR,Object.setPrototypeOf(this,mc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fk.prototype.create)}}class fk{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?JR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new mc(i,a,r)}}function JR(e,t){return e.replace(eA,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const eA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(e){return JSON.parse(e)}function zt(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Ol(Om(s[0])||""),n=Ol(Om(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},tA=function(e){const t=hk(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nA=function(e){const t=hk(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function sa(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function L_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function id(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Pm(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(z_(s)&&z_(o)){if(!Pm(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function z_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let d=0;d<16;d++)r[d]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Ef(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Tf=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){return e&&e._delegate?e._delegate:e}class Pl{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(lA(t))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=gs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gs){return this.instances.has(t)}getOptions(t=gs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aA(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gs){return this.component?this.component.multipleInstances?t:gs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aA(e){return e===gs?void 0:e}function lA(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new oA(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(lt||(lt={}));const uA={debug:lt.DEBUG,verbose:lt.VERBOSE,info:lt.INFO,warn:lt.WARN,error:lt.ERROR,silent:lt.SILENT},dA=lt.INFO,fA={[lt.DEBUG]:"log",[lt.VERBOSE]:"log",[lt.INFO]:"info",[lt.WARN]:"warn",[lt.ERROR]:"error"},hA=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=fA[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pk{constructor(t){this.name=t,this._logLevel=dA,this._logHandler=hA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in lt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uA[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,lt.DEBUG,...t),this._logHandler(this,lt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,lt.VERBOSE,...t),this._logHandler(this,lt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,lt.INFO,...t),this._logHandler(this,lt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,lt.WARN,...t),this._logHandler(this,lt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,lt.ERROR,...t),this._logHandler(this,lt.ERROR,...t)}}const pA=(e,t)=>t.some(n=>e instanceof n);let j_,$_;function mA(){return j_||(j_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gA(){return $_||($_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mk=new WeakMap,Mm=new WeakMap,gk=new WeakMap,Uh=new WeakMap,Iy=new WeakMap;function yA(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ki(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&mk.set(n,e)}).catch(()=>{}),Iy.set(t,e),t}function vA(e){if(Mm.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Mm.set(e,t)}let Fm={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Mm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gk.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ki(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _A(e){Fm=e(Fm)}function wA(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Bh(this),t,...n);return gk.set(r,t.sort?t.sort():[t]),Ki(r)}:gA().includes(e)?function(...t){return e.apply(Bh(this),t),Ki(mk.get(this))}:function(...t){return Ki(e.apply(Bh(this),t))}}function xA(e){return typeof e=="function"?wA(e):(e instanceof IDBTransaction&&vA(e),pA(e,mA())?new Proxy(e,Fm):e)}function Ki(e){if(e instanceof IDBRequest)return yA(e);if(Uh.has(e))return Uh.get(e);const t=xA(e);return t!==e&&(Uh.set(e,t),Iy.set(t,e)),t}const Bh=e=>Iy.get(e);function SA(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ki(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ki(o.result),l.oldVersion,l.newVersion,Ki(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kA=["get","getKey","getAll","getAllKeys","count"],bA=["put","add","delete","clear"],Vh=new Map;function U_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Vh.get(t))return Vh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Vh.set(t,s),s}_A(e=>({...e,get:(t,n,r)=>U_(t,n)||e.get(t,n,r),has:(t,n)=>!!U_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EA(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Lm="@firebase/app",B_="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js=new pk("@firebase/app"),TA="@firebase/app-compat",IA="@firebase/analytics-compat",DA="@firebase/analytics",NA="@firebase/app-check-compat",RA="@firebase/app-check",AA="@firebase/auth",OA="@firebase/auth-compat",PA="@firebase/database",MA="@firebase/database-compat",FA="@firebase/functions",LA="@firebase/functions-compat",zA="@firebase/installations",jA="@firebase/installations-compat",$A="@firebase/messaging",UA="@firebase/messaging-compat",BA="@firebase/performance",VA="@firebase/performance-compat",WA="@firebase/remote-config",HA="@firebase/remote-config-compat",YA="@firebase/storage",GA="@firebase/storage-compat",ZA="@firebase/firestore",KA="@firebase/firestore-compat",qA="firebase",QA="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="[DEFAULT]",XA={[Lm]:"fire-core",[TA]:"fire-core-compat",[DA]:"fire-analytics",[IA]:"fire-analytics-compat",[RA]:"fire-app-check",[NA]:"fire-app-check-compat",[AA]:"fire-auth",[OA]:"fire-auth-compat",[PA]:"fire-rtdb",[MA]:"fire-rtdb-compat",[FA]:"fire-fn",[LA]:"fire-fn-compat",[zA]:"fire-iid",[jA]:"fire-iid-compat",[$A]:"fire-fcm",[UA]:"fire-fcm-compat",[BA]:"fire-perf",[VA]:"fire-perf-compat",[WA]:"fire-rc",[HA]:"fire-rc-compat",[YA]:"fire-gcs",[GA]:"fire-gcs-compat",[ZA]:"fire-fst",[KA]:"fire-fst-compat","fire-js":"fire-js",[qA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map,jm=new Map;function JA(e,t){try{e.container.addComponent(t)}catch(n){js.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function od(e){const t=e.name;if(jm.has(t))return js.debug(`There were multiple attempts to register component ${t}.`),!1;jm.set(t,e);for(const n of sd.values())JA(n,e);return!0}function eO(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qi=new fk("app","Firebase",tO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pl("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=QA;function _a(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:zm,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qi.create("bad-app-name",{appName:String(i)});if(n||(n=YR()),!n)throw qi.create("no-options");const s=sd.get(i);if(s){if(Pm(n,s.options)&&Pm(r,s.config))return s;throw qi.create("duplicate-app",{appName:i})}const o=new cA(i);for(const l of jm.values())o.addComponent(l);const a=new nO(n,r,o);return sd.set(i,a),a}function iO(e=zm){const t=sd.get(e);if(!t&&e===zm)return _a();if(!t)throw qi.create("no-app",{appName:e});return t}function $o(e,t,n){var r;let i=(r=XA[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),js.warn(a.join(" "));return}od(new Pl(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO="firebase-heartbeat-database",oO=1,Ml="firebase-heartbeat-store";let Wh=null;function yk(){return Wh||(Wh=SA(sO,oO,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ml)}}}).catch(e=>{throw qi.create("idb-open",{originalErrorMessage:e.message})})),Wh}async function aO(e){try{return(await yk()).transaction(Ml).objectStore(Ml).get(vk(e))}catch(t){if(t instanceof mc)js.warn(t.message);else{const n=qi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});js.warn(n.message)}}}async function V_(e,t){try{const r=(await yk()).transaction(Ml,"readwrite");return await r.objectStore(Ml).put(t,vk(e)),r.done}catch(n){if(n instanceof mc)js.warn(n.message);else{const r=qi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});js.warn(r.message)}}}function vk(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=1024,cO=30*24*60*60*1e3;class uO{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fO(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=W_();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=cO}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=W_(),{heartbeatsToSend:n,unsentEntries:r}=dO(this._heartbeatsCache.heartbeats),i=rd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function W_(){return new Date().toISOString().substring(0,10)}function dO(e,t=lO){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),H_(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),H_(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fO{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qR()?QR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await aO(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return V_(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function H_(e){return rd(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(e){od(new Pl("platform-logger",t=>new CA(t),"PRIVATE")),od(new Pl("heartbeat",t=>new uO(t),"PRIVATE")),$o(Lm,B_,e),$o(Lm,B_,"esm2017"),$o("fire-js","")}hO("");var pO="firebase",mO="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$o(pO,mO,"app");const Y_="@firebase/database",G_="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _k="";function gO(e){_k=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),zt(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ol(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Wr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new yO(t)}}catch{}return new vO},ks=wk("localStorage"),$m=wk("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new pk("@firebase/database"),_O=function(){let e=1;return function(){return e++}}(),xk=function(e){const t=sA(e),n=new iA;n.update(t);const r=n.digest();return Ty.encodeByteArray(r)},gc=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=gc.apply(null,r):typeof r=="object"?t+=zt(r):t+=r,t+=" "}return t};let Is=null,Z_=!0;const wO=function(e,t){H(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Uo.logLevel=lt.VERBOSE,Is=Uo.log.bind(Uo),t&&$m.set("logging_enabled",!0)):typeof e=="function"?Is=e:(Is=null,$m.remove("logging_enabled"))},Xt=function(...e){if(Z_===!0&&(Z_=!1,Is===null&&$m.get("logging_enabled")===!0&&wO(!0)),Is){const t=gc.apply(null,e);Is(t)}},yc=function(e){return function(...t){Xt(e,...t)}},Um=function(...e){const t="FIREBASE INTERNAL ERROR: "+gc(...e);Uo.error(t)},_i=function(...e){const t=`FIREBASE FATAL ERROR: ${gc(...e)}`;throw Uo.error(t),new Error(t)},_n=function(...e){const t="FIREBASE WARNING: "+gc(...e);Uo.warn(t)},xO=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&_n("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dy=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},SO=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},oa="[MIN_NAME]",$s="[MAX_NAME]",Js=function(e,t){if(e===t)return 0;if(e===oa||t===$s)return-1;if(t===oa||e===$s)return 1;{const n=K_(e),r=K_(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},kO=function(e,t){return e===t?0:e<t?-1:1},za=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+zt(t))},Ny=function(e){if(typeof e!="object"||e===null)return zt(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=zt(t[r]),n+=":",n+=Ny(e[t[r]]);return n+="}",n},Sk=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function tn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const kk=function(e){H(!Dy(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,a,l;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=a+r,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},bO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function EO(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const TO=new RegExp("^-?(0*)\\d{1,10}$"),IO=-2147483648,DO=2147483647,K_=function(e){if(TO.test(e)){const t=Number(e);if(t>=IO&&t<=DO)return t}return null},wa=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw _n("Exception was thrown by user callback.",n),t},Math.floor(0))}},NO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ol=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){_n(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_n(t)}}class Bo{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Bo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="5",bk="v",Ck="s",Ek="r",Tk="f",Ik=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dk="ls",Nk="p",Bm="ac",Rk="websocket",Ak="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(t,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function OO(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function Pk(e,t,n){H(typeof t=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(t===Rk)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===Ak)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);OO(e)&&(n.ns=e.namespace);const i=[];return tn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this.counters_={}}incrementCounter(t,n=1){Wr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return zR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh={},Yh={};function Ay(e){const t=e.toString();return Hh[t]||(Hh[t]=new PO),Hh[t]}function MO(e,t){const n=e.toString();return Yh[n]||(Yh[n]=t()),Yh[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="start",LO="close",zO="pLPCommand",jO="pRTLPCB",Mk="id",Fk="pw",Lk="ser",$O="cb",UO="seg",BO="ts",VO="d",WO="dframe",zk=1870,jk=30,HO=zk-jk,YO=25e3,GO=3e4;class No{constructor(t,n,r,i,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yc(t),this.stats_=Ay(n),this.urlFn=l=>(this.appCheckToken&&(l[Bm]=this.appCheckToken),Pk(n,Ak,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new FO(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GO)),SO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Oy((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===q_)this.id=a,this.password=l;else if(o===LO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[q_]="t",r[Lk]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$O]=this.scriptTagHolder.uniqueCallbackIdentifier),r[bk]=Ry,this.transportSessionId&&(r[Ck]=this.transportSessionId),this.lastSessionId&&(r[Dk]=this.lastSessionId),this.applicationId&&(r[Nk]=this.applicationId),this.appCheckToken&&(r[Bm]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ik.test(location.hostname)&&(r[Ek]=Tk);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){No.forceAllow_=!0}static forceDisallow(){No.forceDisallow_=!0}static isAvailable(){return No.forceAllow_?!0:!No.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bO()&&!CO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=zt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ak(n),i=Sk(r,HO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WO]="t",r[Mk]=t,r[Fk]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=zt(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Oy{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_O(),window[zO+this.uniqueCallbackIdentifier]=t,window[jO+this.uniqueCallbackIdentifier]=n,this.myIFrame=Oy.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Xt("frame writing exception"),a.stack&&Xt(a.stack),Xt(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Xt("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Mk]=this.myID,t[Fk]=this.myPW,t[Lk]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jk+r.length<=zk;){const o=this.pendingSegs.shift();r=r+"&"+UO+i+"="+o.seg+"&"+BO+i+"="+o.ts+"&"+VO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(YO)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Xt("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=16384,KO=45e3;let ad=null;typeof MozWebSocket<"u"?ad=MozWebSocket:typeof WebSocket<"u"&&(ad=WebSocket);class cr{constructor(t,n,r,i,s,o,a){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yc(this.connId),this.stats_=Ay(n),this.connURL=cr.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[bk]=Ry,typeof location<"u"&&location.hostname&&Ik.test(location.hostname)&&(o[Ek]=Tk),n&&(o[Ck]=n),r&&(o[Dk]=r),i&&(o[Bm]=i),s&&(o[Nk]=s),Pk(t,Rk,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let r;dk(),this.mySock=new ad(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){cr.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&ad!==null&&!cr.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ol(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(H(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=zt(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sk(n,ZO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KO))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}cr.responsesRequiredToBeHealthy=2;cr.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[No,cr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=cr&&cr.isAvailable();let r=n&&!cr.previouslyFailed();if(t.webSocketOnly&&(n||_n("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[cr];else{const i=this.transports_=[];for(const s of Fl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO=6e4,QO=5e3,XO=10*1024,JO=100*1024,Gh="t",Q_="d",eP="s",X_="r",tP="e",J_="o",ew="a",tw="n",nw="p",nP="h";class rP{constructor(t,n,r,i,s,o,a,l,c,u){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yc("c:"+this.id+":"),this.transportManager_=new Fl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=ol(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Gh in t){const n=t[Gh];n===ew?this.upgradeIfSecondaryHealthy_():n===X_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===J_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=za("t",t),r=za("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ew,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=za("t",t),r=za("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=za(Gh,t);if(Q_ in t){const r=t[Q_];if(n===nP){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eP?this.onConnectionShutdown_(r):n===X_?this.onReset_(r):n===tP?Um("Server Error: "+r):n===J_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Um("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ry!==r&&_n("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ol(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qO))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ol(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nw,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(t){this.allowedEvents_=t,this.listeners_={},H(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){H(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends Uk{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!uk()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ld}getInitialEvent(t){return H(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=32,iw=768;class it{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function Ke(){return new it("")}function Le(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ns(e){return e.pieces_.length-e.pieceNum_}function ct(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new it(e.pieces_,t)}function Py(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function iP(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Ll(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Bk(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new it(t,0)}function Ct(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof it)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new it(n,0)}function Ue(e){return e.pieceNum_>=e.pieces_.length}function yn(e,t){const n=Le(e),r=Le(t);if(n===null)return t;if(n===r)return yn(ct(e),ct(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function sP(e,t){const n=Ll(e,0),r=Ll(t,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Js(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function My(e,t){if(ns(e)!==ns(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function qn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(ns(e)>ns(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class oP{constructor(t,n){this.errorPrefix_=n,this.parts_=Ll(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Tf(this.parts_[r]);Vk(this)}}function aP(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Tf(t),Vk(e)}function lP(e){const t=e.parts_.pop();e.byteLength_-=Tf(t),e.parts_.length>0&&(e.byteLength_-=1)}function Vk(e){if(e.byteLength_>iw)throw new Error(e.errorPrefix_+"has a key path longer than "+iw+" bytes ("+e.byteLength_+").");if(e.parts_.length>rw)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rw+") or object contains a cycle "+ys(e))}function ys(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy extends Uk{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Fy}getInitialEvent(t){return H(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=1e3,cP=60*5*1e3,sw=30*1e3,uP=1.3,dP=3e4,fP="server_kill",ow=3;class di extends $k{constructor(t,n,r,i,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=di.nextPersistentConnectionId_++,this.log_=yc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ja,this.maxReconnectDelay_=cP,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!dk())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Fy.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&ld.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(zt(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new pc,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;di.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(c,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Wr(t,"w")){const r=sa(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();_n(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||nA(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sw)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=tA(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+zt(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):Um("Unrecognized action received from server: "+zt(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ja,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=ja,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dP&&(this.reconnectDelay_=ja),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uP)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+di.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Xt("getToken() completed but was canceled"):(Xt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new rP(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,g=>{_n(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(fP)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&_n(d),l())}}}interrupt(t){Xt("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Xt("Resuming connection for reason: "+t),delete this.interruptReasons_[t],L_(this.interruptReasons_)&&(this.reconnectDelay_=ja,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Ny(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new it(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Xt("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ow&&(this.reconnectDelay_=sw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Xt("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ow&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+_k.replace(/\./g,"-")]=1,uk()?t["framework.cordova"]=1:KR()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ld.getInstance().currentlyOnline();return L_(this.interruptReasons_)&&t}}di.nextPersistentConnectionId_=0;di.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new ze(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let If=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new ze(oa,t),i=new ze(oa,n);return this.compare(r,i)!==0}minPost(){return ze.MIN}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc;class Wk extends If{static get __EMPTY_NODE(){return Xc}static set __EMPTY_NODE(t){Xc=t}compare(t,n){return Js(t.name,n.name)}isDefinedOn(t){throw va("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return ze.MIN}maxPost(){return new ze($s,Xc)}makePost(t,n){return H(typeof t=="string","KeyIndex indexValue must always be a string."),new ze(t,Xc)}toString(){return".key"}}const Vo=new Wk;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Yt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Yt.RED,this.left=i??Nn.EMPTY_NODE,this.right=s??Nn.EMPTY_NODE}copy(t,n,r,i,s){return new Yt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nn.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Yt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Yt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Yt.RED=!0;Yt.BLACK=!1;class hP{copy(t,n,r,i,s){return this}insert(t,n,r){return new Yt(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nn{constructor(t,n=Nn.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Nn(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Yt.BLACK,null,null))}remove(t){return new Nn(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Yt.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Jc(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Jc(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Jc(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Jc(this.root_,null,this.comparator_,!0,t)}}Nn.EMPTY_NODE=new hP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(e,t){return Js(e.name,t.name)}function Ly(e,t){return Js(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm;function mP(e){Vm=e}const Hk=function(e){return typeof e=="number"?"number:"+kk(e):"string:"+e},Yk=function(e){if(e.isLeafNode()){const t=e.val();H(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Wr(t,".sv"),"Priority must be a string or number.")}else H(e===Vm||e.isEmpty(),"priority of unexpected type.");H(e===Vm||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aw;class Wt{constructor(t,n=Wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Yk(this.priorityNode_)}static set __childrenNodeConstructor(t){aw=t}static get __childrenNodeConstructor(){return aw}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Wt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Ue(t)?this:Le(t)===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=Le(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||ns(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Hk(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=kk(this.value_):t+=this.value_,this.lazyHash_=xk(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Wt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Wt.__childrenNodeConstructor?-1:(H(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Wt.VALUE_TYPE_ORDER.indexOf(n),s=Wt.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+n),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gk,Zk;function gP(e){Gk=e}function yP(e){Zk=e}class vP extends If{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Js(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return ze.MIN}maxPost(){return new ze($s,new Wt("[PRIORITY-POST]",Zk))}makePost(t,n){const r=Gk(t);return new ze(n,new Wt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Et=new vP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P=Math.log(2);class wP{constructor(t){const n=s=>parseInt(Math.log(s)/_P,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const cd=function(e,t,n,r){e.sort(t);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=e[l],f=n?n(d):d,new Yt(f,d.node,Yt.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=i(l,g),p=i(g+1,c);return d=e[g],f=n?n(d):d,new Yt(f,d.node,Yt.BLACK,m,p)}},s=function(l){let c=null,u=null,d=e.length;const f=function(m,p){const k=d-m,v=d;d-=m;const h=i(k+1,v),y=e[k],b=n?n(y):y;g(new Yt(b,y.node,p,null,h))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),k=Math.pow(2,l.count-(m+1));p?f(k,Yt.BLACK):(f(k,Yt.BLACK),f(k,Yt.RED))}return u},o=new wP(e.length),a=s(o);return new Nn(r||t,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh;const oo={};class si{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return H(oo&&Et,"ChildrenNode.ts has not been loaded"),Zh=Zh||new si({".priority":oo},{".priority":Et}),Zh}get(t){const n=sa(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Nn?n:null}hasIndex(t){return Wr(this.indexSet_,t.toString())}addIndex(t,n){H(t!==Vo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ze.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=cd(r,t.getCompare()):a=oo;const l=t.toString(),c=Object.assign({},this.indexSet_);c[l]=t;const u=Object.assign({},this.indexes_);return u[l]=a,new si(u,c)}addToIndexes(t,n){const r=id(this.indexes_,(i,s)=>{const o=sa(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===oo)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(ze.Wrap);let c=l.getNext();for(;c;)c.name!==t.name&&a.push(c),c=l.getNext();return a.push(t),cd(a,o.getCompare())}else return oo;else{const a=n.get(t.name);let l=i;return a&&(l=l.remove(new ze(t.name,a))),l.insert(t,t.node)}});return new si(r,this.indexSet_)}removeFromIndexes(t,n){const r=id(this.indexes_,i=>{if(i===oo)return i;{const s=n.get(t.name);return s?i.remove(new ze(t.name,s)):i}});return new si(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;class ke{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Yk(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $a||($a=new ke(new Nn(Ly),null,si.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$a}updatePriority(t){return this.children_.isEmpty()?this:new ke(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?$a:n}}getChild(t){const n=Le(t);return n===null?this:this.getImmediateChild(n).getChild(ct(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(H(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new ze(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?$a:this.priorityNode_;return new ke(i,o,s)}}updateChild(t,n){const r=Le(t);if(r===null)return n;{H(Le(t)!==".priority"||ns(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ct(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(t),r++,s&&ke.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Hk(this.getPriority().val())+":"),this.forEachChild(Et,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":xk(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ze(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new ze(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new ze(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,ze.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,ze.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===vc?-1:0}withIndex(t){if(t===Vo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new ke(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Vo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Et),i=n.getIterator(Et);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Vo?null:this.indexMap_.get(t.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xP extends ke{constructor(){super(new Nn(Ly),ke.EMPTY_NODE,si.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ke.EMPTY_NODE}isEmpty(){return!1}}const vc=new xP;Object.defineProperties(ze,{MIN:{value:new ze(oa,ke.EMPTY_NODE)},MAX:{value:new ze($s,vc)}});Wk.__EMPTY_NODE=ke.EMPTY_NODE;Wt.__childrenNodeConstructor=ke;mP(vc);yP(vc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=!0;function Lt(e,t=null){if(e===null)return ke.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),H(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Wt(n,Lt(t))}if(!(e instanceof Array)&&SP){const n=[];let r=!1;if(tn(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Lt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ze(o,l)))}}),n.length===0)return ke.EMPTY_NODE;const s=cd(n,pP,o=>o.name,Ly);if(r){const o=cd(n,Et.getCompare());return new ke(s,Lt(t),new si({".priority":o},{".priority":Et}))}else return new ke(s,Lt(t),si.Default)}else{let n=ke.EMPTY_NODE;return tn(e,(r,i)=>{if(Wr(e,r)&&r.substring(0,1)!=="."){const s=Lt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Lt(t))}}gP(Lt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP extends If{constructor(t){super(),this.indexPath_=t,H(!Ue(t)&&Le(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Js(t.name,n.name):s}makePost(t,n){const r=Lt(t),i=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new ze(n,i)}maxPost(){const t=ke.EMPTY_NODE.updateChild(this.indexPath_,vc);return new ze($s,t)}toString(){return Ll(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP extends If{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Js(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return ze.MIN}maxPost(){return ze.MAX}makePost(t,n){const r=Lt(t);return new ze(n,r)}toString(){return".value"}}const CP=new bP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(e){return{type:"value",snapshotNode:e}}function aa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function zl(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function jl(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function EP(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){H(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=t.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(zl(n,a)):H(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(aa(n,r)):o.trackChildChange(jl(n,r,a))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(Et,(i,s)=>{n.hasChild(i)||r.trackChildChange(zl(i,s))}),n.isLeafNode()||n.forEachChild(Et,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(jl(i,s,o))}else r.trackChildChange(aa(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?ke.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t){this.indexedFilter_=new zy(t.getIndex()),this.index_=t.getIndex(),this.startPost_=$l.getStartPost_(t),this.endPost_=$l.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new ze(n,r))||(r=ke.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=ke.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(ke.EMPTY_NODE);const s=this;return n.forEachChild(Et,(o,a)=>{s.matches(new ze(o,a))||(i=i.updateImmediateChild(o,ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $l(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new ze(n,r))||(r=ke.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=ke.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(ke.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=t;H(a.numChildren()===this.limit_,"");const l=new ze(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(u&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(jl(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(zl(n,d));const p=a.updateImmediateChild(n,ke.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(aa(f.name,f.node)),p.updateImmediateChild(f.name,f.node)):p}}else return r.isEmpty()?t:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(zl(c.name,c.node)),s.trackChildChange(aa(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,ke.EMPTY_NODE)):t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:oa}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$s}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const t=new jy;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function IP(e){return e.loadsAllData()?new zy(e.getIndex()):e.hasLimit()?new TP(e):new $l(e)}function lw(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Et?n="$priority":e.index_===CP?n="$value":e.index_===Vo?n="$key":(H(e.index_ instanceof kP,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=zt(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=zt(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+zt(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=zt(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+zt(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function cw(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Et&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud extends $k{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=yc("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(H(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=ud.getListenId_(t,r),a={};this.listens_[o]=a;const l=lw(t._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),sa(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(t,n){const r=ud.getListenId_(t,n);delete this.listens_[r]}get(t){const n=lw(t._queryParams),r=t._path.toString(),i=new pc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+rA(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ol(a.responseText)}catch{_n("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&_n("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return{value:null,children:new Map}}function qk(e,t,n){if(Ue(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=Le(t);e.children.has(r)||e.children.set(r,dd());const i=e.children.get(r);t=ct(t),qk(i,t,n)}}function Wm(e,t,n){e.value!==null?n(t,e.value):NP(e,(r,i)=>{const s=new it(t.toString()+"/"+r);Wm(i,s,n)})}function NP(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&tn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=10*1e3,AP=30*1e3,OP=5*60*1e3;class PP{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RP(t);const r=uw+(AP-uw)*Math.random();ol(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;tn(t,(i,s)=>{s>0&&Wr(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ol(this.reportStats_.bind(this),Math.floor(Math.random()*2*OP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(dr||(dr={}));function $y(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function By(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=dr.ACK_USER_WRITE,this.source=$y()}operationForChild(t){if(Ue(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new it(t));return new fd(Ke(),n,this.revert)}}else return H(Le(this.path)===t,"operationForChild called for unrelated child."),new fd(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,n){this.source=t,this.path=n,this.type=dr.LISTEN_COMPLETE}operationForChild(t){return Ue(this.path)?new Ul(this.source,Ke()):new Ul(this.source,ct(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=dr.OVERWRITE}operationForChild(t){return Ue(this.path)?new Us(this.source,Ke(),this.snap.getImmediateChild(t)):new Us(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=dr.MERGE}operationForChild(t){if(Ue(this.path)){const n=this.children.subtree(new it(t));return n.isEmpty()?null:n.value?new Us(this.source,Ke(),n.value):new la(this.source,Ke(),n)}else return H(Le(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new la(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Ue(t))return this.isFullyInitialized()&&!this.filtered_;const n=Le(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function FP(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(EP(o.childName,o.snapshotNode))}),Ua(e,i,"child_removed",t,r,n),Ua(e,i,"child_added",t,r,n),Ua(e,i,"child_moved",s,r,n),Ua(e,i,"child_changed",t,r,n),Ua(e,i,"value",t,r,n),i}function Ua(e,t,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>zP(e,a,l)),o.forEach(a=>{const l=LP(e,a,s);i.forEach(c=>{c.respondsTo(a.type)&&t.push(c.createEvent(l,e.query_))})})}function LP(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function zP(e,t,n){if(t.childName==null||n.childName==null)throw va("Should only compare child_ events.");const r=new ze(t.childName,t.snapshotNode),i=new ze(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(e,t){return{eventCache:e,serverCache:t}}function al(e,t,n,r){return Df(new rs(t,n,r),e.serverCache)}function Qk(e,t,n,r){return Df(e.eventCache,new rs(t,n,r))}function hd(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Bs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh;const jP=()=>(Kh||(Kh=new Nn(kO)),Kh);class at{constructor(t,n=jP()){this.value=t,this.children=n}static fromObject(t){let n=new at(null);return tn(t,(r,i)=>{n=n.set(new it(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:Ke(),value:this.value};if(Ue(t))return null;{const r=Le(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ct(t),n);return s!=null?{path:Ct(new it(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Ue(t))return this;{const n=Le(t),r=this.children.get(n);return r!==null?r.subtree(ct(t)):new at(null)}}set(t,n){if(Ue(t))return new at(n,this.children);{const r=Le(t),s=(this.children.get(r)||new at(null)).set(ct(t),n),o=this.children.insert(r,s);return new at(this.value,o)}}remove(t){if(Ue(t))return this.children.isEmpty()?new at(null):new at(null,this.children);{const n=Le(t),r=this.children.get(n);if(r){const i=r.remove(ct(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new at(null):new at(this.value,s)}else return this}}get(t){if(Ue(t))return this.value;{const n=Le(t),r=this.children.get(n);return r?r.get(ct(t)):null}}setTree(t,n){if(Ue(t))return n;{const r=Le(t),s=(this.children.get(r)||new at(null)).setTree(ct(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new at(this.value,o)}}fold(t){return this.fold_(Ke(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ct(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,Ke(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Ue(t))return null;{const s=Le(t),o=this.children.get(s);return o?o.findOnPath_(ct(t),Ct(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,Ke(),n)}foreachOnPath_(t,n,r){if(Ue(t))return this;{this.value&&r(n,this.value);const i=Le(t),s=this.children.get(i);return s?s.foreachOnPath_(ct(t),Ct(n,i),r):new at(null)}}foreach(t){this.foreach_(Ke(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ct(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.writeTree_=t}static empty(){return new gr(new at(null))}}function ll(e,t,n){if(Ue(t))return new gr(new at(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=yn(i,t);return s=s.updateChild(o,n),new gr(e.writeTree_.set(i,s))}else{const i=new at(n),s=e.writeTree_.setTree(t,i);return new gr(s)}}}function Hm(e,t,n){let r=e;return tn(n,(i,s)=>{r=ll(r,Ct(t,i),s)}),r}function dw(e,t){if(Ue(t))return gr.empty();{const n=e.writeTree_.setTree(t,new at(null));return new gr(n)}}function Ym(e,t){return eo(e,t)!=null}function eo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(yn(n.path,t)):null}function fw(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(r,i)=>{t.push(new ze(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new ze(r,i.value))}),t}function Qi(e,t){if(Ue(t))return e;{const n=eo(e,t);return n!=null?new gr(new at(n)):new gr(e.writeTree_.subtree(t))}}function Gm(e){return e.writeTree_.isEmpty()}function ca(e,t){return Xk(Ke(),e.writeTree_,t)}function Xk(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Xk(Ct(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Ct(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e,t){return nb(t,e)}function $P(e,t,n,r,i){H(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=ll(e.visibleWrites,t,n)),e.lastWriteId=r}function UP(e,t,n,r){H(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Hm(e.visibleWrites,t,n),e.lastWriteId=r}function BP(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function VP(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);H(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&WP(a,r.path)?i=!1:qn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return HP(e),!0;if(r.snap)e.visibleWrites=dw(e.visibleWrites,r.path);else{const a=r.children;tn(a,l=>{e.visibleWrites=dw(e.visibleWrites,Ct(r.path,l))})}return!0}else return!1}function WP(e,t){if(e.snap)return qn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&qn(Ct(e.path,n),t))return!0;return!1}function HP(e){e.visibleWrites=Jk(e.allWrites,YP,Ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function YP(e){return e.visible}function Jk(e,t,n){let r=gr.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let a;if(s.snap)qn(n,o)?(a=yn(n,o),r=ll(r,a,s.snap)):qn(o,n)&&(a=yn(o,n),r=ll(r,Ke(),s.snap.getChild(a)));else if(s.children){if(qn(n,o))a=yn(n,o),r=Hm(r,a,s.children);else if(qn(o,n))if(a=yn(o,n),Ue(a))r=Hm(r,Ke(),s.children);else{const l=sa(s.children,Le(a));if(l){const c=l.getChild(ct(a));r=ll(r,Ke(),c)}}}else throw va("WriteRecord should have .snap or .children")}}return r}function eb(e,t,n,r,i){if(!r&&!i){const s=eo(e.visibleWrites,t);if(s!=null)return s;{const o=Qi(e.visibleWrites,t);if(Gm(o))return n;if(n==null&&!Ym(o,Ke()))return null;{const a=n||ke.EMPTY_NODE;return ca(o,a)}}}else{const s=Qi(e.visibleWrites,t);if(!i&&Gm(s))return n;if(!i&&n==null&&!Ym(s,Ke()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(qn(c.path,t)||qn(t,c.path))},a=Jk(e.allWrites,o,t),l=n||ke.EMPTY_NODE;return ca(a,l)}}}function GP(e,t,n){let r=ke.EMPTY_NODE;const i=eo(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Et,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Qi(e.visibleWrites,t);return n.forEachChild(Et,(o,a)=>{const l=ca(Qi(s,new it(o)),a);r=r.updateImmediateChild(o,l)}),fw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Qi(e.visibleWrites,t);return fw(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZP(e,t,n,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ct(t,n);if(Ym(e.visibleWrites,s))return null;{const o=Qi(e.visibleWrites,s);return Gm(o)?i.getChild(n):ca(o,i.getChild(n))}}function KP(e,t,n,r){const i=Ct(t,n),s=eo(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Qi(e.visibleWrites,i);return ca(o,r.getNode().getImmediateChild(n))}else return null}function qP(e,t){return eo(e.visibleWrites,t)}function QP(e,t,n,r,i,s,o){let a;const l=Qi(e.visibleWrites,t),c=eo(l,Ke());if(c!=null)a=c;else if(n!=null)a=ca(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&u.length<i;)d(g,r)!==0&&u.push(g),g=f.getNext();return u}else return[]}function XP(){return{visibleWrites:gr.empty(),allWrites:[],lastWriteId:-1}}function pd(e,t,n,r){return eb(e.writeTree,e.treePath,t,n,r)}function Vy(e,t){return GP(e.writeTree,e.treePath,t)}function hw(e,t,n,r){return ZP(e.writeTree,e.treePath,t,n,r)}function md(e,t){return qP(e.writeTree,Ct(e.treePath,t))}function JP(e,t,n,r,i,s){return QP(e.writeTree,e.treePath,t,n,r,i,s)}function Wy(e,t,n){return KP(e.writeTree,e.treePath,t,n)}function tb(e,t){return nb(Ct(e.treePath,t),e.writeTree)}function nb(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,jl(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,zl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,aa(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,jl(r,t.snapshotNode,i.oldSnap));else throw va("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const rb=new tM;class Hy{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wy(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bs(this.viewCache_),s=JP(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(e){return{filter:e}}function rM(e,t){H(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),H(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function iM(e,t,n,r,i){const s=new eM;let o,a;if(n.type===dr.OVERWRITE){const c=n;c.source.fromUser?o=Zm(e,t,c.path,c.snap,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Ue(c.path),o=gd(e,t,c.path,c.snap,r,i,a,s))}else if(n.type===dr.MERGE){const c=n;c.source.fromUser?o=oM(e,t,c.path,c.children,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Km(e,t,c.path,c.children,r,i,a,s))}else if(n.type===dr.ACK_USER_WRITE){const c=n;c.revert?o=cM(e,t,c.path,r,i,s):o=aM(e,t,c.path,c.affectedTree,r,i,s)}else if(n.type===dr.LISTEN_COMPLETE)o=lM(e,t,n.path,r,s);else throw va("Unknown operation type: "+n.type);const l=s.getChanges();return sM(t,o,l),{viewCache:o,changes:l}}function sM(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=hd(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Kk(hd(t)))}}function ib(e,t,n,r,i,s){const o=t.eventCache;if(md(r,n)!=null)return t;{let a,l;if(Ue(n))if(H(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const c=Bs(t),u=c instanceof ke?c:ke.EMPTY_NODE,d=Vy(r,u);a=e.filter.updateFullNode(t.eventCache.getNode(),d,s)}else{const c=pd(r,Bs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const c=Le(n);if(c===".priority"){H(ns(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=t.serverCache.getNode();const d=hw(r,n,u,l);d!=null?a=e.filter.updatePriority(u,d):a=o.getNode()}else{const u=ct(n);let d;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const f=hw(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Wy(r,c,t.serverCache);d!=null?a=e.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return al(t,a,o.isFullyInitialized()||Ue(n),e.filter.filtersNodes())}}function gd(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Ue(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Le(n);if(!l.isCompleteForPath(n)&&ns(n)>1)return t;const m=ct(n),k=l.getNode().getImmediateChild(g).updateChild(m,r);g===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),g,k,m,rb,null)}const d=Qk(t,c,l.isFullyInitialized()||Ue(n),u.filtersNodes()),f=new Hy(i,d,s);return ib(e,d,n,i,f,a)}function Zm(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Hy(i,t,s);if(Ue(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=al(t,c,!0,e.filter.filtersNodes());else{const d=Le(n);if(d===".priority")c=e.filter.updatePriority(t.eventCache.getNode(),r),l=al(t,c,a.isFullyInitialized(),a.isFiltered());else{const f=ct(n),g=a.getNode().getImmediateChild(d);let m;if(Ue(f))m=r;else{const p=u.getCompleteChild(d);p!=null?Py(f)===".priority"&&p.getChild(Bk(f)).isEmpty()?m=p:m=p.updateChild(f,r):m=ke.EMPTY_NODE}if(g.equals(m))l=t;else{const p=e.filter.updateChild(a.getNode(),d,m,f,u,o);l=al(t,p,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function pw(e,t){return e.eventCache.isCompleteForChild(t)}function oM(e,t,n,r,i,s,o){let a=t;return r.foreach((l,c)=>{const u=Ct(n,l);pw(t,Le(u))&&(a=Zm(e,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=Ct(n,l);pw(t,Le(u))||(a=Zm(e,a,u,c,i,s,o))}),a}function mw(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Km(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,c;Ue(n)?c=r:c=new at(null).setTree(n,r);const u=t.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const g=t.serverCache.getNode().getImmediateChild(d),m=mw(e,g,f);l=gd(e,l,new it(d),m,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const g=!t.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!g){const m=t.serverCache.getNode().getImmediateChild(d),p=mw(e,m,f);l=gd(e,l,new it(d),p,i,s,o,a)}}),l}function aM(e,t,n,r,i,s,o){if(md(i,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(r.value!=null){if(Ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gd(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Ue(n)){let c=new at(null);return l.getNode().forEachChild(Vo,(u,d)=>{c=c.set(new it(u),d)}),Km(e,t,n,c,i,s,a,o)}else return t}else{let c=new at(null);return r.foreach((u,d)=>{const f=Ct(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Km(e,t,n,c,i,s,a,o)}}function lM(e,t,n,r,i){const s=t.serverCache,o=Qk(t,s.getNode(),s.isFullyInitialized()||Ue(n),s.isFiltered());return ib(e,o,n,r,rb,i)}function cM(e,t,n,r,i,s){let o;if(md(r,n)!=null)return t;{const a=new Hy(r,t,i),l=t.eventCache.getNode();let c;if(Ue(n)||Le(n)===".priority"){let u;if(t.serverCache.isFullyInitialized())u=pd(r,Bs(t));else{const d=t.serverCache.getNode();H(d instanceof ke,"serverChildren would be complete if leaf node"),u=Vy(r,d)}u=u,c=e.filter.updateFullNode(l,u,s)}else{const u=Le(n);let d=Wy(r,u,t.serverCache);d==null&&t.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=e.filter.updateChild(l,u,d,ct(n),a,s):t.eventCache.getNode().hasChild(u)?c=e.filter.updateChild(l,u,ke.EMPTY_NODE,ct(n),a,s):c=l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=pd(r,Bs(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||md(r,Ke())!=null,al(t,c,o,e.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new zy(r.getIndex()),s=IP(r);this.processor_=nM(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(ke.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(ke.EMPTY_NODE,a.getNode(),null),u=new rs(l,o.isFullyInitialized(),i.filtersNodes()),d=new rs(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Df(d,u),this.eventGenerator_=new MP(this.query_)}get query(){return this.query_}}function dM(e){return e.viewCache_.serverCache.getNode()}function fM(e){return hd(e.viewCache_)}function hM(e,t){const n=Bs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Ue(t)&&!n.getImmediateChild(Le(t)).isEmpty())?n.getChild(t):null}function gw(e){return e.eventRegistrations_.length===0}function pM(e,t){e.eventRegistrations_.push(t)}function yw(e,t,n){const r=[];if(n){H(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function vw(e,t,n,r){t.type===dr.MERGE&&t.source.queryId!==null&&(H(Bs(e.viewCache_),"We should always have a full cache before handling merges"),H(hd(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=iM(e.processor_,i,t,n,r);return rM(e.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,sb(e,s.changes,s.viewCache.eventCache.getNode(),null)}function mM(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Et,(s,o)=>{r.push(aa(s,o))}),n.isFullyInitialized()&&r.push(Kk(n.getNode())),sb(e,r,n.getNode(),t)}function sb(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return FP(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;class ob{constructor(){this.views=new Map}}function gM(e){H(!yd,"__referenceConstructor has already been defined"),yd=e}function yM(){return H(yd,"Reference.ts has not been loaded"),yd}function vM(e){return e.views.size===0}function Yy(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),vw(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(vw(o,t,n,r));return s}}function ab(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let a=pd(n,i?r:null),l=!1;a?l=!0:r instanceof ke?(a=Vy(n,r),l=!1):(a=ke.EMPTY_NODE,l=!1);const c=Df(new rs(a,l,!1),new rs(r,i,!1));return new uM(t,c)}return o}function _M(e,t,n,r,i,s){const o=ab(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),pM(o,n),mM(o,n)}function wM(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=is(e);if(i==="default")for(const[l,c]of e.views.entries())o=o.concat(yw(c,n,r)),gw(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=e.views.get(i);l&&(o=o.concat(yw(l,n,r)),gw(l)&&(e.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!is(e)&&s.push(new(yM())(t._repo,t._path)),{removed:s,events:o}}function lb(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Xi(e,t){let n=null;for(const r of e.views.values())n=n||hM(r,t);return n}function cb(e,t){if(t._queryParams.loadsAllData())return Rf(e);{const r=t._queryIdentifier;return e.views.get(r)}}function ub(e,t){return cb(e,t)!=null}function is(e){return Rf(e)!=null}function Rf(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd;function xM(e){H(!vd,"__referenceConstructor has already been defined"),vd=e}function SM(){return H(vd,"Reference.ts has not been loaded"),vd}let kM=1;class _w{constructor(t){this.listenProvider_=t,this.syncPointTree_=new at(null),this.pendingWriteTree_=XP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function db(e,t,n,r,i){return $P(e.pendingWriteTree_,t,n,r,i),i?xa(e,new Us($y(),t,n)):[]}function bM(e,t,n,r){UP(e.pendingWriteTree_,t,n,r);const i=at.fromObject(n);return xa(e,new la($y(),t,i))}function Fi(e,t,n=!1){const r=BP(e.pendingWriteTree_,t);if(VP(e.pendingWriteTree_,t)){let s=new at(null);return r.snap!=null?s=s.set(Ke(),!0):tn(r.children,o=>{s=s.set(new it(o),!0)}),xa(e,new fd(r.path,s,n))}else return[]}function _c(e,t,n){return xa(e,new Us(Uy(),t,n))}function CM(e,t,n){const r=at.fromObject(n);return xa(e,new la(Uy(),t,r))}function EM(e,t){return xa(e,new Ul(Uy(),t))}function TM(e,t,n){const r=Zy(e,n);if(r){const i=Ky(r),s=i.path,o=i.queryId,a=yn(s,t),l=new Ul(By(o),a);return qy(e,s,l)}else return[]}function _d(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&(t._queryIdentifier==="default"||ub(o,t))){const l=wM(o,t,n,r);vM(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=e.syncPointTree_.findOnPath(s,(f,g)=>is(g));if(u&&!d){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=NM(f);for(let m=0;m<g.length;++m){const p=g[m],k=p.query,v=mb(e,p);e.listenProvider_.startListening(cl(k),Bl(e,k),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?e.listenProvider_.stopListening(cl(t),null):c.forEach(f=>{const g=e.queryToTagMap.get(Af(f));e.listenProvider_.stopListening(cl(f),g)}))}RM(e,c)}return a}function fb(e,t,n,r){const i=Zy(e,r);if(i!=null){const s=Ky(i),o=s.path,a=s.queryId,l=yn(o,t),c=new Us(By(a),l,n);return qy(e,o,c)}else return[]}function IM(e,t,n,r){const i=Zy(e,r);if(i){const s=Ky(i),o=s.path,a=s.queryId,l=yn(o,t),c=at.fromObject(n),u=new la(By(a),l,c);return qy(e,o,u)}else return[]}function qm(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,g)=>{const m=yn(f,i);s=s||Xi(g,m),o=o||is(g)});let a=e.syncPointTree_.get(i);a?(o=o||is(a),s=s||Xi(a,Ke())):(a=new ob,e.syncPointTree_=e.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=ke.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((g,m)=>{const p=Xi(m,Ke());p&&(s=s.updateImmediateChild(g,p))}));const c=ub(a,t);if(!c&&!t._queryParams.loadsAllData()){const f=Af(t);H(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=AM();e.queryToTagMap.set(f,g),e.tagToQueryMap.set(g,f)}const u=Nf(e.pendingWriteTree_,i);let d=_M(a,t,n,u,s,l);if(!c&&!o&&!r){const f=cb(a,t);d=d.concat(OM(e,t,f))}return d}function Gy(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=yn(o,t),c=Xi(a,l);if(c)return c});return eb(i,t,s,n,!0)}function DM(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=yn(c,n);r=r||Xi(u,d)});let i=e.syncPointTree_.get(n);i?r=r||Xi(i,Ke()):(i=new ob,e.syncPointTree_=e.syncPointTree_.set(n,i));const s=r!=null,o=s?new rs(r,!0,!1):null,a=Nf(e.pendingWriteTree_,t._path),l=ab(i,t,a,s?o.getNode():ke.EMPTY_NODE,s);return fM(l)}function xa(e,t){return hb(t,e.syncPointTree_,null,Nf(e.pendingWriteTree_,Ke()))}function hb(e,t,n,r){if(Ue(e.path))return pb(e,t,n,r);{const i=t.get(Ke());n==null&&i!=null&&(n=Xi(i,Ke()));let s=[];const o=Le(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=tb(r,o);s=s.concat(hb(a,l,c,u))}return i&&(s=s.concat(Yy(i,e,r,n))),s}}function pb(e,t,n,r){const i=t.get(Ke());n==null&&i!=null&&(n=Xi(i,Ke()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=tb(r,o),u=e.operationForChild(o);u&&(s=s.concat(pb(u,a,l,c)))}),i&&(s=s.concat(Yy(i,e,r,n))),s}function mb(e,t){const n=t.query,r=Bl(e,n);return{hashFn:()=>(dM(t)||ke.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?TM(e,n._path,r):EM(e,n._path);{const s=EO(i,n);return _d(e,n,null,s)}}}}function Bl(e,t){const n=Af(t);return e.queryToTagMap.get(n)}function Af(e){return e._path.toString()+"$"+e._queryIdentifier}function Zy(e,t){return e.tagToQueryMap.get(t)}function Ky(e){const t=e.indexOf("$");return H(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new it(e.substr(0,t))}}function qy(e,t,n){const r=e.syncPointTree_.get(t);H(r,"Missing sync point for query tag that we're tracking");const i=Nf(e.pendingWriteTree_,t);return Yy(r,n,i,null)}function NM(e){return e.fold((t,n,r)=>{if(n&&is(n))return[Rf(n)];{let i=[];return n&&(i=lb(n)),tn(r,(s,o)=>{i=i.concat(o)}),i}})}function cl(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(SM())(e._repo,e._path):e}function RM(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=Af(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function AM(){return kM++}function OM(e,t,n){const r=t._path,i=Bl(e,t),s=mb(e,n),o=e.listenProvider_.startListening(cl(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)H(!is(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Ue(c)&&u&&is(u))return[Rf(u).query];{let f=[];return u&&(f=f.concat(lb(u).map(g=>g.query))),tn(d,(g,m)=>{f=f.concat(m)}),f}});for(let c=0;c<l.length;++c){const u=l[c];e.listenProvider_.stopListening(cl(u),Bl(e,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Qy(n)}node(){return this.node_}}class Xy{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Ct(this.path_,t);return new Xy(this.syncTree_,n)}node(){return Gy(this.syncTree_,this.path_)}}const PM=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},ww=function(e,t,n){if(!e||typeof e!="object")return e;if(H(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return MM(e[".sv"],t,n);if(typeof e[".sv"]=="object")return FM(e[".sv"],t);H(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},MM=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+e)}},FM=function(e,t,n){e.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=t.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},gb=function(e,t,n,r){return Jy(t,new Xy(n,e),r)},yb=function(e,t,n){return Jy(e,new Qy(t),n)};function Jy(e,t,n){const r=e.getPriority().val(),i=ww(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=ww(o.getValue(),t,n);return a!==o.getValue()||i!==o.getPriority().val()?new Wt(a,Lt(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Wt(i))),o.forEachChild(Et,(a,l)=>{const c=Jy(l,t.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function tv(e,t){let n=t instanceof it?t:new it(t),r=e,i=Le(n);for(;i!==null;){const s=sa(r.node.children,i)||{children:{},childCount:0};r=new ev(i,r,s),n=ct(n),i=Le(n)}return r}function Sa(e){return e.node.value}function vb(e,t){e.node.value=t,Qm(e)}function _b(e){return e.node.childCount>0}function LM(e){return Sa(e)===void 0&&!_b(e)}function Of(e,t){tn(e.node.children,(n,r)=>{t(new ev(n,e,r))})}function wb(e,t,n,r){n&&!r&&t(e),Of(e,i=>{wb(i,t,!0,r)}),n&&r&&t(e)}function zM(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function wc(e){return new it(e.parent===null?e.name:wc(e.parent)+"/"+e.name)}function Qm(e){e.parent!==null&&jM(e.parent,e.name,e)}function jM(e,t,n){const r=LM(n),i=Wr(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Qm(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Qm(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $M=/[\[\].#$\/\u0000-\u001F\u007F]/,UM=/[\[\].#$\u0000-\u001F\u007F]/,qh=10*1024*1024,nv=function(e){return typeof e=="string"&&e.length!==0&&!$M.test(e)},xb=function(e){return typeof e=="string"&&e.length!==0&&!UM.test(e)},BM=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),xb(e)},VM=function(e){return e===null||typeof e=="string"||typeof e=="number"&&!Dy(e)||e&&typeof e=="object"&&Wr(e,".sv")},Sb=function(e,t,n,r){r&&t===void 0||Pf(Ef(e,"value"),t,n)},Pf=function(e,t,n){const r=n instanceof it?new oP(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ys(r));if(typeof t=="function")throw new Error(e+"contains a function "+ys(r)+" with contents = "+t.toString());if(Dy(t))throw new Error(e+"contains "+t.toString()+" "+ys(r));if(typeof t=="string"&&t.length>qh/3&&Tf(t)>qh)throw new Error(e+"contains a string greater than "+qh+" utf8 bytes "+ys(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(tn(t,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!nv(o)))throw new Error(e+" contains an invalid key ("+o+") "+ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aP(r,o),Pf(e,a,r),lP(r)}),i&&s)throw new Error(e+' contains ".value" child '+ys(r)+" in addition to actual children.")}},WM=function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const s=Ll(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!nv(s[o]))throw new Error(e+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}t.sort(sP);let i=null;for(n=0;n<t.length;n++){if(r=t[n],i!==null&&qn(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},HM=function(e,t,n,r){if(r&&t===void 0)return;const i=Ef(e,"values");if(!(t&&typeof t=="object")||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];tn(t,(o,a)=>{const l=new it(o);if(Pf(i,a,Ct(n,l)),Py(l)===".priority"&&!VM(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),WM(i,s)},kb=function(e,t,n,r){if(!(r&&n===void 0)&&!xb(n))throw new Error(Ef(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},YM=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kb(e,t,n,r)},rv=function(e,t){if(Le(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},GM=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!nv(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!BM(n))throw new Error(Ef(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mf(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!My(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function bb(e,t,n){Mf(e,n),Cb(e,r=>My(r,t))}function er(e,t,n){Mf(e,n),Cb(e,r=>qn(r,t)||qn(t,r))}function Cb(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(KM(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function KM(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Is&&Xt("event: "+n.toString()),wa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM="repo_interrupt",QM=25;class XM{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ZM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dd(),this.transactionQueueTree_=new ev,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JM(e,t,n){if(e.stats_=Ay(e.repoInfo_),e.forceRestClient_||NO())e.server_=new ud(e.repoInfo_,(r,i,s,o)=>{xw(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Sw(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{zt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new di(e.repoInfo_,t,(r,i,s,o)=>{xw(e,r,i,s,o)},r=>{Sw(e,r)},r=>{eF(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=MO(e.repoInfo_,()=>new PP(e.stats_,e.server_)),e.infoData_=new DP,e.infoSyncTree_=new _w({startListening:(r,i,s,o)=>{let a=[];const l=e.infoData_.getNode(r._path);return l.isEmpty()||(a=_c(e.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),iv(e,"connected",!1),e.serverSyncTree_=new _w({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);er(e.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function Eb(e){const n=e.infoData_.getNode(new it(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ff(e){return PM({timestamp:Eb(e)})}function xw(e,t,n,r,i){e.dataUpdateCount++;const s=new it(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const l=id(n,c=>Lt(c));o=IM(e.serverSyncTree_,s,l,i)}else{const l=Lt(n);o=fb(e.serverSyncTree_,s,l,i)}else if(r){const l=id(n,c=>Lt(c));o=CM(e.serverSyncTree_,s,l)}else{const l=Lt(n);o=_c(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=ua(e,s)),er(e.eventQueue_,a,o)}function Sw(e,t){iv(e,"connected",t),t===!1&&iF(e)}function eF(e,t){tn(t,(n,r)=>{iv(e,n,r)})}function iv(e,t,n){const r=new it("/.info/"+t),i=Lt(n);e.infoData_.updateSnapshot(r,i);const s=_c(e.infoSyncTree_,r,i);er(e.eventQueue_,r,s)}function sv(e){return e.nextWriteId_++}function tF(e,t,n){const r=DM(e.serverSyncTree_,t);return r!=null?Promise.resolve(r):e.server_.get(t).then(i=>{const s=Lt(i).withIndex(t._queryParams.getIndex());qm(e.serverSyncTree_,t,n,!0);let o;if(t._queryParams.loadsAllData())o=_c(e.serverSyncTree_,t._path,s);else{const a=Bl(e.serverSyncTree_,t);o=fb(e.serverSyncTree_,t._path,s,a)}return er(e.eventQueue_,t._path,o),_d(e.serverSyncTree_,t,n,null,!0),s},i=>(xc(e,"get for query "+zt(t)+" failed: "+i),Promise.reject(new Error(i))))}function nF(e,t,n,r,i){xc(e,"set",{path:t.toString(),value:n,priority:r});const s=Ff(e),o=Lt(n,r),a=Gy(e.serverSyncTree_,t),l=yb(o,a,s),c=sv(e),u=db(e.serverSyncTree_,t,l,c,!0);Mf(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),(f,g)=>{const m=f==="ok";m||_n("set at "+t+" failed: "+f);const p=Fi(e.serverSyncTree_,c,!m);er(e.eventQueue_,t,p),Xm(e,i,f,g)});const d=av(e,t);ua(e,d),er(e.eventQueue_,d,[])}function rF(e,t,n,r){xc(e,"update",{path:t.toString(),value:n});let i=!0;const s=Ff(e),o={};if(tn(n,(a,l)=>{i=!1,o[a]=gb(Ct(t,a),Lt(l),e.serverSyncTree_,s)}),i)Xt("update() called with empty data.  Don't do anything."),Xm(e,r,"ok",void 0);else{const a=sv(e),l=bM(e.serverSyncTree_,t,o,a);Mf(e.eventQueue_,l),e.server_.merge(t.toString(),n,(c,u)=>{const d=c==="ok";d||_n("update at "+t+" failed: "+c);const f=Fi(e.serverSyncTree_,a,!d),g=f.length>0?ua(e,t):t;er(e.eventQueue_,g,f),Xm(e,r,c,u)}),tn(n,c=>{const u=av(e,Ct(t,c));ua(e,u)}),er(e.eventQueue_,t,[])}}function iF(e){xc(e,"onDisconnectEvents");const t=Ff(e),n=dd();Wm(e.onDisconnect_,Ke(),(i,s)=>{const o=gb(i,s,e.serverSyncTree_,t);qk(n,i,o)});let r=[];Wm(n,Ke(),(i,s)=>{r=r.concat(_c(e.serverSyncTree_,i,s));const o=av(e,i);ua(e,o)}),e.onDisconnect_=dd(),er(e.eventQueue_,Ke(),r)}function sF(e,t,n){let r;Le(t._path)===".info"?r=qm(e.infoSyncTree_,t,n):r=qm(e.serverSyncTree_,t,n),bb(e.eventQueue_,t._path,r)}function kw(e,t,n){let r;Le(t._path)===".info"?r=_d(e.infoSyncTree_,t,n):r=_d(e.serverSyncTree_,t,n),bb(e.eventQueue_,t._path,r)}function oF(e){e.persistentConnection_&&e.persistentConnection_.interrupt(qM)}function xc(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Xt(n,...t)}function Xm(e,t,n,r){t&&wa(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Tb(e,t,n){return Gy(e.serverSyncTree_,t,n)||ke.EMPTY_NODE}function ov(e,t=e.transactionQueueTree_){if(t||Lf(e,t),Sa(t)){const n=Db(e,t);H(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aF(e,wc(t),n)}else _b(t)&&Of(t,n=>{ov(e,n)})}function aF(e,t,n){const r=n.map(c=>c.currentWriteId),i=Tb(e,t,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];H(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=yn(t,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,c=>{xc(e,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Fi(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Lf(e,tv(e.transactionQueueTree_,t)),ov(e,e.transactionQueueTree_),er(e.eventQueue_,t,u);for(let f=0;f<d.length;f++)wa(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{_n("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ua(e,t)}},o)}function ua(e,t){const n=Ib(e,t),r=wc(n),i=Db(e,n);return lF(e,i,r),r}function lF(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],c=yn(n,l.path);let u=!1,d;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Fi(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=QM)u=!0,d="maxretry",i=i.concat(Fi(e.serverSyncTree_,l.currentWriteId,!0));else{const f=Tb(e,l.path,o);l.currentInputSnapshot=f;const g=t[a].update(f.val());if(g!==void 0){Pf("transaction failed: Data returned ",g,l.path);let m=Lt(g);typeof g=="object"&&g!=null&&Wr(g,".priority")||(m=m.updatePriority(f.getPriority()));const k=l.currentWriteId,v=Ff(e),h=yb(m,f,v);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=h,l.currentWriteId=sv(e),o.splice(o.indexOf(k),1),i=i.concat(db(e.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Fi(e.serverSyncTree_,k,!0))}else u=!0,d="nodata",i=i.concat(Fi(e.serverSyncTree_,l.currentWriteId,!0))}er(e.eventQueue_,n,i),i=[],u&&(t[a].status=2,function(f){setTimeout(f,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(d==="nodata"?r.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):r.push(()=>t[a].onComplete(new Error(d),!1,null))))}Lf(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)wa(r[a]);ov(e,e.transactionQueueTree_)}function Ib(e,t){let n,r=e.transactionQueueTree_;for(n=Le(t);n!==null&&Sa(r)===void 0;)r=tv(r,n),t=ct(t),n=Le(t);return r}function Db(e,t){const n=[];return Nb(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Nb(e,t,n){const r=Sa(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Of(t,i=>{Nb(e,i,n)})}function Lf(e,t){const n=Sa(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,vb(t,n.length>0?n:void 0)}Of(t,r=>{Lf(e,r)})}function av(e,t){const n=wc(Ib(e,t)),r=tv(e.transactionQueueTree_,t);return zM(r,i=>{Qh(e,i)}),Qh(e,r),wb(r,i=>{Qh(e,i)}),n}function Qh(e,t){const n=Sa(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Fi(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?vb(t,void 0):n.length=s+1,er(e.eventQueue_,wc(t),i);for(let o=0;o<r.length;o++)wa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cF(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function uF(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_n(`Invalid query segment '${n}' in query '${e}'`)}return t}const bw=function(e,t){const n=dF(e),r=n.namespace;n.domain==="firebase.com"&&_i(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_i("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xO();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ok(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new it(n.pathString)}},dF=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");u===-1&&(u=e.length);let d=e.indexOf("?");d===-1&&(d=e.length),t=e.substring(0,Math.min(u,d)),u<d&&(i=cF(e.substring(u,d)));const f=uF(e.substring(Math.min(e.length,d)));c=t.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(c+1),10)):c=t.length;const g=t.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=t.indexOf(".");r=t.substring(0,m).toLowerCase(),n=t.substring(m+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",fF=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Cw.charAt(n%64),n=Math.floor(n/64);H(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Cw.charAt(t[i]);return H(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+zt(this.snapshot.exportVal())}}class Ab{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Ue(this._path)?null:Py(this._path)}get ref(){return new Hr(this._repo,this._path)}get _queryIdentifier(){const t=cw(this._queryParams),n=Ny(t);return n==="{}"?"default":n}get _queryObject(){return cw(this._queryParams)}isEqual(t){if(t=Xs(t),!(t instanceof lv))return!1;const n=this._repo===t._repo,r=My(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iP(this._path)}}class Hr extends lv{constructor(t,n){super(t,n,new jy,!1)}get parent(){const t=Bk(this._path);return t===null?null:new Hr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class da{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new it(t),r=Fr(this.ref,t);return new da(this._node.getChild(n),r,Et)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new da(i,Fr(this.ref,r),Et)))}hasChild(t){const n=new it(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yr(e,t){return e=Xs(e),e._checkNotDeleted("ref"),t!==void 0?Fr(e._root,t):e._root}function Fr(e,t){return e=Xs(e),Le(e._path)===null?YM("child","path",t,!1):kb("child","path",t,!1),new Hr(e._repo,Ct(e._path,t))}function hF(e,t){e=Xs(e),rv("push",e._path),Sb("push",t,e._path,!0);const n=Eb(e._repo),r=fF(n),i=Fr(e,r),s=Fr(e,r);let o;return t!=null?o=Vl(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function pF(e){return rv("remove",e._path),Vl(e,null)}function Vl(e,t){e=Xs(e),rv("set",e._path),Sb("set",t,e._path,!1);const n=new pc;return nF(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function cv(e,t){HM("update",t,e._path,!1);const n=new pc;return rF(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Ew(e){e=Xs(e);const t=new Ob(()=>{}),n=new zf(t);return tF(e._repo,e,n).then(r=>new da(r,new Hr(e._repo,e._path),e._queryParams.getIndex()))}class zf{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Rb("value",this,new da(t.snapshotNode,new Hr(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Ab(this,t,n):null}matches(t){return t instanceof zf?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class uv{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Ab(this,t,n):null}createEvent(t,n){H(t.childName!=null,"Child events should have a childName.");const r=Fr(new Hr(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Rb(t.type,this,new da(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof uv?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function mF(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{kw(e._repo,e,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Ob(n,s||void 0),a=t==="value"?new zf(o):new uv(t,o);return sF(e._repo,e,a),()=>kw(e._repo,e,a)}function Wl(e,t,n,r){return mF(e,"value",t,n,r)}gM(Hr);xM(Hr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF="FIREBASE_DATABASE_EMULATOR_HOST",Jm={};let yF=!1;function vF(e,t,n,r){e.repoInfo_=new Ok(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function _F(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||_i("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Xt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=bw(s,i),a=o.repoInfo,l,c;typeof process<"u"&&{}&&(c={}[gF]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=bw(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Bo(Bo.OWNER):new AO(e.name,e.options,t);GM("Invalid Firebase Database URL",o),Ue(o.path)||_i("Database URL must point to the root of a Firebase Database (not including a child path).");const d=xF(a,e,u,new RO(e.name,n));return new SF(d,e)}function wF(e,t){const n=Jm[t];(!n||n[e.key]!==e)&&_i(`Database ${t}(${e.repoInfo_}) has already been deleted.`),oF(e),delete n[e.key]}function xF(e,t,n,r){let i=Jm[t.name];i||(i={},Jm[t.name]=i);let s=i[e.toURLString()];return s&&_i("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new XM(e,yF,n,r),i[e.toURLString()]=s,s}class SF{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Hr(this._repo,Ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(wF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&_i("Cannot call "+t+" on a deleted database.")}}function Sc(e=iO(),t){const n=eO(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=HR("database");r&&kF(n,...r)}return n}function kF(e,t,n,r={}){e=Xs(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&_i("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&_i('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Bo(Bo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:GR(r.mockUserToken,e.app.options.projectId);s=new Bo(o)}vF(i,t,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bF(e){gO(rO),od(new Pl("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return _F(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),$o(Y_,G_,e),$o(Y_,G_,"esm2017")}di.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};di.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};bF();function CF({isDarkMode:e,setIsDarkMode:t,isFormOpen:n}){ya();const i=_a({apiKey:"AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",authDomain:"invoice-app-b1eb0.firebaseapp.com",databaseURL:"https://invoice-app-b1eb0-default-rtdb.firebaseio.com",projectId:"invoice-app-b1eb0",storageBucket:"invoice-app-b1eb0.appspot.com",messagingSenderId:"730679038015",appId:"1:730679038015:web:57b0f244fffde30b77e88a"}),s=Sc(i);function o(){if(c){if(c&&(u!=null&&u.email)){t(m=>!m);const d={isDarkMode:!e},f=u==null?void 0:u.email.replace(".",","),g=yr(s,`users/${f}`);cv(g,d)}}else{t(f=>!f);const d=!e;localStorage.setItem("colorscheme",d)}}const a={borderRadius:"0px",logoRadius:"0px"},l={borderRadius:"0px 20px 20px 0px",logoRadius:"24px"},{isAuthenticated:c,user:u}=Zs();return w(Zt,{theme:n?a:l,children:M(RR,{children:[w(AR,{children:w(OR,{src:"\\assets\\logo.svg"})}),w(MR,{children:e?w(F_,{role:"theme-change-button",onClick:o,src:"\\assets\\icon-moon.svg"}):w(F_,{role:"theme-change-button",onClick:o,src:"\\assets\\icon-sun.svg"})}),w(PR,{children:u!=null&&u.picture?w(M_,{src:u==null?void 0:u.picture}):w(M_,{src:"\\assets\\image-avatar.jpg"})})]})})}function EF(){const{pathname:e}=qs();return D.useEffect(()=>{window.scrollTo(0,0)},[e]),null}var kc=e=>e.type==="checkbox",Ro=e=>e instanceof Date,gn=e=>e==null;const Pb=e=>typeof e=="object";var Ut=e=>!gn(e)&&!Array.isArray(e)&&Pb(e)&&!Ro(e),Mb=e=>Ut(e)&&e.target?kc(e.target)?e.target.checked:e.target.value:e,TF=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Fb=(e,t)=>e.has(TF(t)),IF=e=>{const t=e.constructor&&e.constructor.prototype;return Ut(t)&&t.hasOwnProperty("isPrototypeOf")},dv=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function In(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(dv&&(e instanceof Blob||e instanceof FileList))&&(n||Ut(e)))if(t=n?[]:{},!Array.isArray(e)&&!IF(e))t=e;else for(const r in e)t[r]=In(e[r]);else return e;return t}var ka=e=>Array.isArray(e)?e.filter(Boolean):[],pt=e=>e===void 0,J=(e,t,n)=>{if(!t||!Ut(e))return n;const r=ka(t.split(/[,[\].]+?/)).reduce((i,s)=>gn(i)?i:i[s],e);return pt(r)||r===e?pt(e[t])?n:e[t]:r};const wd={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Zn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Qr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},DF=we.createContext(null),jf=()=>we.useContext(DF);var Lb=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const s in e)Object.defineProperty(i,s,{get:()=>{const o=s;return t._proxyFormState[o]!==Zn.all&&(t._proxyFormState[o]=!r||Zn.all),n&&(n[o]=!0),e[o]}});return i},Mn=e=>Ut(e)&&!Object.keys(e).length,zb=(e,t,n,r)=>{n(e);const{name:i,...s}=e;return Mn(s)||Object.keys(s).length>=Object.keys(t).length||Object.keys(s).find(o=>t[o]===(!r||Zn.all))},zn=e=>Array.isArray(e)?e:[e],jb=(e,t,n)=>n&&t?e===t:!e||!t||e===t||zn(e).some(r=>r&&(r.startsWith(t)||t.startsWith(r)));function $f(e){const t=we.useRef(e);t.current=e,we.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}function NF(e){const t=jf(),{control:n=t.control,disabled:r,name:i,exact:s}=e||{},[o,a]=we.useState(n._formState),l=we.useRef(!0),c=we.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),u=we.useRef(i);return u.current=i,$f({disabled:r,next:d=>l.current&&jb(u.current,d.name,s)&&zb(d,c.current,n._updateFormState)&&a({...n._formState,...d}),subject:n._subjects.state}),we.useEffect(()=>(l.current=!0,c.current.isValid&&n._updateValid(!0),()=>{l.current=!1}),[n]),Lb(o,n,c.current,!1)}var Lr=e=>typeof e=="string",$b=(e,t,n,r,i)=>Lr(e)?(r&&t.watch.add(e),J(n,e,i)):Array.isArray(e)?e.map(s=>(r&&t.watch.add(s),J(n,s))):(r&&(t.watchAll=!0),n);function RF(e){const t=jf(),{control:n=t.control,name:r,defaultValue:i,disabled:s,exact:o}=e||{},a=we.useRef(r);a.current=r,$f({disabled:s,subject:n._subjects.values,next:u=>{jb(a.current,u.name,o)&&c(In($b(a.current,n._names,u.values||n._formValues,!1,i)))}});const[l,c]=we.useState(n._getWatch(r,i));return we.useEffect(()=>n._removeUnmounted()),l}var fv=e=>/^\w*$/.test(e),Ub=e=>ka(e.replace(/["|']|\]/g,"").split(/\.|\[/));function rt(e,t,n){let r=-1;const i=fv(t)?[t]:Ub(t),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const c=e[a];l=Ut(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e}function AF(e){const t=jf(),{name:n,control:r=t.control,shouldUnregister:i}=e,s=Fb(r._names.array,n),o=RF({control:r,name:n,defaultValue:J(r._formValues,n,J(r._defaultValues,n,e.defaultValue)),exact:!0}),a=NF({control:r,name:n}),l=we.useRef(r.register(n,{...e.rules,value:o}));return we.useEffect(()=>{const c=r._options.shouldUnregister||i,u=(d,f)=>{const g=J(r._fields,d);g&&(g._f.mount=f)};if(u(n,!0),c){const d=In(J(r._options.defaultValues,n));rt(r._defaultValues,n,d),pt(J(r._formValues,n))&&rt(r._formValues,n,d)}return()=>{(s?c&&!r._state.action:c)?r.unregister(n):u(n,!1)}},[n,r,s,i]),{field:{name:n,value:o,onChange:we.useCallback(c=>l.current.onChange({target:{value:Mb(c),name:n},type:wd.CHANGE}),[n]),onBlur:we.useCallback(()=>l.current.onBlur({target:{value:J(r._formValues,n),name:n},type:wd.BLUR}),[n,r]),ref:c=>{const u=J(r._fields,n);u&&c&&(u._f.ref={focus:()=>c.focus(),select:()=>c.select(),setCustomValidity:d=>c.setCustomValidity(d),reportValidity:()=>c.reportValidity()})}},formState:a,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!J(a.errors,n)},isDirty:{enumerable:!0,get:()=>!!J(a.dirtyFields,n)},isTouched:{enumerable:!0,get:()=>!!J(a.touchedFields,n)},error:{enumerable:!0,get:()=>J(a.errors,n)}})}}const Tw=e=>e.render(AF(e));var Bb=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const xd=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=J(e,r);if(i){const{_f:s,...o}=i;if(s&&t(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else Ut(o)&&xd(o,t)}}};var Ii=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const n=(Math.random()*16+e)%16|0;return(t=="x"?n:n&3|8).toString(16)})},Xh=(e,t,n={})=>n.shouldFocus||pt(n.shouldFocus)?n.focusName||`${e}.${pt(n.focusIndex)?t:n.focusIndex}.`:"",eg=e=>({isOnSubmit:!e||e===Zn.onSubmit,isOnBlur:e===Zn.onBlur,isOnChange:e===Zn.onChange,isOnAll:e===Zn.all,isOnTouch:e===Zn.onTouched}),tg=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),Vb=(e,t,n)=>{const r=ka(J(e,n));return rt(r,"root",t[n]),rt(e,n,r),e},Wo=e=>typeof e=="boolean",hv=e=>e.type==="file",Li=e=>typeof e=="function",Sd=e=>{if(!dv)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},_u=e=>Lr(e),pv=e=>e.type==="radio",kd=e=>e instanceof RegExp;const Iw={value:!1,isValid:!1},Dw={value:!0,isValid:!0};var Wb=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!pt(e[0].attributes.value)?pt(e[0].value)||e[0].value===""?Dw:{value:e[0].value,isValid:!0}:Dw:Iw}return Iw};const Nw={isValid:!1,value:null};var Hb=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,Nw):Nw;function Rw(e,t,n="validate"){if(_u(e)||Array.isArray(e)&&e.every(_u)||Wo(e)&&!e)return{type:n,message:_u(e)?e:"",ref:t}}var ao=e=>Ut(e)&&!kd(e)?e:{value:e,message:""},ng=async(e,t,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:c,min:u,max:d,pattern:f,validate:g,name:m,valueAsNumber:p,mount:k,disabled:v}=e._f,h=J(t,m);if(!k||v)return{};const y=o?o[0]:s,b=ee=>{r&&y.reportValidity&&(y.setCustomValidity(Wo(ee)?"":ee||""),y.reportValidity())},x={},S=pv(s),C=kc(s),N=S||C,z=(p||hv(s))&&pt(s.value)&&pt(h)||Sd(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,G=Bb.bind(null,m,n,x),_e=(ee,ne,pe,Te=Qr.maxLength,Oe=Qr.minLength)=>{const We=ee?ne:pe;x[m]={type:ee?Te:Oe,message:We,ref:s,...G(ee?Te:Oe,We)}};if(i?!Array.isArray(h)||!h.length:a&&(!N&&(z||gn(h))||Wo(h)&&!h||C&&!Wb(o).isValid||S&&!Hb(o).isValid)){const{value:ee,message:ne}=_u(a)?{value:!!a,message:a}:ao(a);if(ee&&(x[m]={type:Qr.required,message:ne,ref:y,...G(Qr.required,ne)},!n))return b(ne),x}if(!z&&(!gn(u)||!gn(d))){let ee,ne;const pe=ao(d),Te=ao(u);if(!gn(h)&&!isNaN(h)){const Oe=s.valueAsNumber||h&&+h;gn(pe.value)||(ee=Oe>pe.value),gn(Te.value)||(ne=Oe<Te.value)}else{const Oe=s.valueAsDate||new Date(h),We=oe=>new Date(new Date().toDateString()+" "+oe),$=s.type=="time",K=s.type=="week";Lr(pe.value)&&h&&(ee=$?We(h)>We(pe.value):K?h>pe.value:Oe>new Date(pe.value)),Lr(Te.value)&&h&&(ne=$?We(h)<We(Te.value):K?h<Te.value:Oe<new Date(Te.value))}if((ee||ne)&&(_e(!!ee,pe.message,Te.message,Qr.max,Qr.min),!n))return b(x[m].message),x}if((l||c)&&!z&&(Lr(h)||i&&Array.isArray(h))){const ee=ao(l),ne=ao(c),pe=!gn(ee.value)&&h.length>+ee.value,Te=!gn(ne.value)&&h.length<+ne.value;if((pe||Te)&&(_e(pe,ee.message,ne.message),!n))return b(x[m].message),x}if(f&&!z&&Lr(h)){const{value:ee,message:ne}=ao(f);if(kd(ee)&&!h.match(ee)&&(x[m]={type:Qr.pattern,message:ne,ref:s,...G(Qr.pattern,ne)},!n))return b(ne),x}if(g){if(Li(g)){const ee=await g(h,t),ne=Rw(ee,y);if(ne&&(x[m]={...ne,...G(Qr.validate,ne.message)},!n))return b(ne.message),x}else if(Ut(g)){let ee={};for(const ne in g){if(!Mn(ee)&&!n)break;const pe=Rw(await g[ne](h,t),y,ne);pe&&(ee={...pe,...G(ne,pe.message)},b(pe.message),n&&(x[m]=ee))}if(!Mn(ee)&&(x[m]={ref:y,...ee},!n))return x}}return b(!0),x};function Jh(e,t){return[...e,...zn(t)]}var ep=e=>Array.isArray(e)?e.map(()=>{}):void 0;function tp(e,t,n){return[...e.slice(0,t),...zn(n),...e.slice(t)]}var np=(e,t,n)=>Array.isArray(e)?(pt(e[n])&&(e[n]=void 0),e.splice(n,0,e.splice(t,1)[0]),e):[];function rp(e,t){return[...zn(t),...zn(e)]}function OF(e,t){let n=0;const r=[...e];for(const i of t)r.splice(i-n,1),n++;return ka(r).length?r:[]}var ip=(e,t)=>pt(t)?[]:OF(e,zn(t).sort((n,r)=>n-r)),sp=(e,t,n)=>{e[t]=[e[n],e[n]=e[t]][0]};function PF(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=pt(e)?r++:e[t[r++]];return e}function MF(e){for(const t in e)if(!pt(e[t]))return!1;return!0}function Bt(e,t){const n=Array.isArray(t)?t:fv(t)?[t]:Ub(t),r=n.length===1?e:PF(e,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Ut(r)&&Mn(r)||Array.isArray(r)&&MF(r))&&Bt(e,n.slice(0,-1)),e}var Aw=(e,t,n)=>(e[t]=n,e);function FF(e){const t=jf(),{control:n=t.control,name:r,keyName:i="id",shouldUnregister:s}=e,[o,a]=we.useState(n._getFieldArray(r)),l=we.useRef(n._getFieldArray(r).map(Ii)),c=we.useRef(o),u=we.useRef(r),d=we.useRef(!1);u.current=r,c.current=o,n._names.array.add(r),e.rules&&n.register(r,e.rules),$f({next:({values:x,name:S})=>{if(S===u.current||!S){const C=J(x,u.current);Array.isArray(C)&&(a(C),l.current=C.map(Ii))}},subject:n._subjects.array});const f=we.useCallback(x=>{d.current=!0,n._updateFieldArray(r,x)},[n,r]),g=(x,S)=>{const C=zn(In(x)),N=Jh(n._getFieldArray(r),C);n._names.focus=Xh(r,N.length-1,S),l.current=Jh(l.current,C.map(Ii)),f(N),a(N),n._updateFieldArray(r,N,Jh,{argA:ep(x)})},m=(x,S)=>{const C=zn(In(x)),N=rp(n._getFieldArray(r),C);n._names.focus=Xh(r,0,S),l.current=rp(l.current,C.map(Ii)),f(N),a(N),n._updateFieldArray(r,N,rp,{argA:ep(x)})},p=x=>{const S=ip(n._getFieldArray(r),x);l.current=ip(l.current,x),f(S),a(S),n._updateFieldArray(r,S,ip,{argA:x})},k=(x,S,C)=>{const N=zn(In(S)),z=tp(n._getFieldArray(r),x,N);n._names.focus=Xh(r,x,C),l.current=tp(l.current,x,N.map(Ii)),f(z),a(z),n._updateFieldArray(r,z,tp,{argA:x,argB:ep(S)})},v=(x,S)=>{const C=n._getFieldArray(r);sp(C,x,S),sp(l.current,x,S),f(C),a(C),n._updateFieldArray(r,C,sp,{argA:x,argB:S},!1)},h=(x,S)=>{const C=n._getFieldArray(r);np(C,x,S),np(l.current,x,S),f(C),a(C),n._updateFieldArray(r,C,np,{argA:x,argB:S},!1)},y=(x,S)=>{const C=In(S),N=Aw(n._getFieldArray(r),x,C);l.current=[...N].map((z,G)=>!z||G===x?Ii():l.current[G]),f(N),a([...N]),n._updateFieldArray(r,N,Aw,{argA:x,argB:C},!0,!1)},b=x=>{const S=zn(In(x));l.current=S.map(Ii),f([...S]),a([...S]),n._updateFieldArray(r,[...S],C=>C,{},!0,!1)};return we.useEffect(()=>{if(n._state.action=!1,tg(r,n._names)&&n._subjects.state.next({...n._formState}),d.current&&(!eg(n._options.mode).isOnSubmit||n._formState.isSubmitted))if(n._options.resolver)n._executeSchema([r]).then(x=>{const S=J(x.errors,r);S?rt(n._formState.errors,r,S):Bt(n._formState.errors,r),n._subjects.state.next({errors:n._formState.errors})});else{const x=J(n._fields,r);x&&x._f&&ng(x,n._formValues,n._options.criteriaMode===Zn.all,n._options.shouldUseNativeValidation,!0).then(S=>!Mn(S)&&n._subjects.state.next({errors:Vb(n._formState.errors,S,r)}))}n._subjects.values.next({name:r,values:{...n._formValues}}),n._names.focus&&xd(n._fields,x=>!!x&&x.startsWith(n._names.focus||"")),n._names.focus="",n._updateValid()},[o,r,n]),we.useEffect(()=>(!J(n._formValues,r)&&n._updateFieldArray(r),()=>{(n._options.shouldUnregister||s)&&n.unregister(r)}),[r,n,i,s]),{swap:we.useCallback(v,[f,r,n]),move:we.useCallback(h,[f,r,n]),prepend:we.useCallback(m,[f,r,n]),append:we.useCallback(g,[f,r,n]),remove:we.useCallback(p,[f,r,n]),insert:we.useCallback(k,[f,r,n]),update:we.useCallback(y,[f,r,n]),replace:we.useCallback(b,[f,r,n]),fields:we.useMemo(()=>o.map((x,S)=>({...x,[i]:l.current[S]||Ii()})),[o,i])}}function op(){let e=[];return{get observers(){return e},next:i=>{for(const s of e)s.next&&s.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(s=>s!==i)}}),unsubscribe:()=>{e=[]}}}var bd=e=>gn(e)||!Pb(e);function bs(e,t){if(bd(e)||bd(t))return e===t;if(Ro(e)&&Ro(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const s=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=t[i];if(Ro(s)&&Ro(o)||Ut(s)&&Ut(o)||Array.isArray(s)&&Array.isArray(o)?!bs(s,o):s!==o)return!1}}return!0}var Yb=e=>e.type==="select-multiple",LF=e=>pv(e)||kc(e),ap=e=>Sd(e)&&e.isConnected,Gb=e=>{for(const t in e)if(Li(e[t]))return!0;return!1};function Cd(e,t={}){const n=Array.isArray(e);if(Ut(e)||n)for(const r in e)Array.isArray(e[r])||Ut(e[r])&&!Gb(e[r])?(t[r]=Array.isArray(e[r])?[]:{},Cd(e[r],t[r])):gn(e[r])||(t[r]=!0);return t}function Zb(e,t,n){const r=Array.isArray(e);if(Ut(e)||r)for(const i in e)Array.isArray(e[i])||Ut(e[i])&&!Gb(e[i])?pt(t)||bd(n[i])?n[i]=Array.isArray(e[i])?Cd(e[i],[]):{...Cd(e[i])}:Zb(e[i],gn(t)?{}:t[i],n[i]):n[i]=!bs(e[i],t[i]);return n}var lp=(e,t)=>Zb(e,t,Cd(t)),Kb=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>pt(e)?e:t?e===""?NaN:e&&+e:n&&Lr(e)?new Date(e):r?r(e):e;function cp(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return hv(t)?t.files:pv(t)?Hb(e.refs).value:Yb(t)?[...t.selectedOptions].map(({value:n})=>n):kc(t)?Wb(e.refs).value:Kb(pt(t.value)?e.ref.value:t.value,e)}var zF=(e,t,n,r)=>{const i={};for(const s of e){const o=J(t,s);o&&rt(i,s,o._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Ba=e=>pt(e)?e:kd(e)?e.source:Ut(e)?kd(e.value)?e.value.source:e.value:e,jF=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ow(e,t,n){const r=J(e,n);if(r||fv(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=J(t,s),a=J(e,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var $F=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,UF=(e,t)=>!ka(J(e,t)).length&&Bt(e,t);const BF={mode:Zn.onSubmit,reValidateMode:Zn.onChange,shouldFocusError:!0};function VF(e={},t){let n={...BF,...e},r={submitCount:0,isDirty:!1,isLoading:Li(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=Ut(n.defaultValues)||Ut(n.values)?In(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:In(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},c,u=0;const d={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:op(),array:op(),state:op()},g=e.resetOptions&&e.resetOptions.keepDirtyValues,m=eg(n.mode),p=eg(n.reValidateMode),k=n.criteriaMode===Zn.all,v=_=>T=>{clearTimeout(u),u=setTimeout(_,T)},h=async _=>{if(d.isValid||_){const T=n.resolver?Mn((await z()).errors):await _e(i,!0);T!==r.isValid&&f.state.next({isValid:T})}},y=_=>d.isValidating&&f.state.next({isValidating:_}),b=(_,T=[],I,W,q=!0,F=!0)=>{if(W&&I){if(a.action=!0,F&&Array.isArray(J(i,_))){const ce=I(J(i,_),W.argA,W.argB);q&&rt(i,_,ce)}if(F&&Array.isArray(J(r.errors,_))){const ce=I(J(r.errors,_),W.argA,W.argB);q&&rt(r.errors,_,ce),UF(r.errors,_)}if(d.touchedFields&&F&&Array.isArray(J(r.touchedFields,_))){const ce=I(J(r.touchedFields,_),W.argA,W.argB);q&&rt(r.touchedFields,_,ce)}d.dirtyFields&&(r.dirtyFields=lp(s,o)),f.state.next({name:_,isDirty:ne(_,T),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else rt(o,_,T)},x=(_,T)=>{rt(r.errors,_,T),f.state.next({errors:r.errors})},S=(_,T,I,W)=>{const q=J(i,_);if(q){const F=J(o,_,pt(I)?J(s,_):I);pt(F)||W&&W.defaultChecked||T?rt(o,_,T?F:cp(q._f)):Oe(_,F),a.mount&&h()}},C=(_,T,I,W,q)=>{let F=!1,ce=!1;const Xe={name:_};if(!I||W){d.isDirty&&(ce=r.isDirty,r.isDirty=Xe.isDirty=ne(),F=ce!==Xe.isDirty);const $e=bs(J(s,_),T);ce=J(r.dirtyFields,_),$e?Bt(r.dirtyFields,_):rt(r.dirtyFields,_,!0),Xe.dirtyFields=r.dirtyFields,F=F||d.dirtyFields&&ce!==!$e}if(I){const $e=J(r.touchedFields,_);$e||(rt(r.touchedFields,_,I),Xe.touchedFields=r.touchedFields,F=F||d.touchedFields&&$e!==I)}return F&&q&&f.state.next(Xe),F?Xe:{}},N=(_,T,I,W)=>{const q=J(r.errors,_),F=d.isValid&&Wo(T)&&r.isValid!==T;if(e.delayError&&I?(c=v(()=>x(_,I)),c(e.delayError)):(clearTimeout(u),c=null,I?rt(r.errors,_,I):Bt(r.errors,_)),(I?!bs(q,I):q)||!Mn(W)||F){const ce={...W,...F&&Wo(T)?{isValid:T}:{},errors:r.errors,name:_};r={...r,...ce},f.state.next(ce)}y(!1)},z=async _=>n.resolver(o,n.context,zF(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),G=async _=>{const{errors:T}=await z();if(_)for(const I of _){const W=J(T,I);W?rt(r.errors,I,W):Bt(r.errors,I)}else r.errors=T;return T},_e=async(_,T,I={valid:!0})=>{for(const W in _){const q=_[W];if(q){const{_f:F,...ce}=q;if(F){const Xe=l.array.has(F.name),$e=await ng(q,o,k,n.shouldUseNativeValidation&&!T,Xe);if($e[F.name]&&(I.valid=!1,T))break;!T&&(J($e,F.name)?Xe?Vb(r.errors,$e,F.name):rt(r.errors,F.name,$e[F.name]):Bt(r.errors,F.name))}ce&&await _e(ce,T,I)}}return I.valid},ee=()=>{for(const _ of l.unMount){const T=J(i,_);T&&(T._f.refs?T._f.refs.every(I=>!ap(I)):!ap(T._f.ref))&&R(_)}l.unMount=new Set},ne=(_,T)=>(_&&T&&rt(o,_,T),!bs(te(),s)),pe=(_,T,I)=>$b(_,l,{...a.mount?o:pt(T)?s:Lr(_)?{[_]:T}:T},I,T),Te=_=>ka(J(a.mount?o:s,_,e.shouldUnregister?J(s,_,[]):[])),Oe=(_,T,I={})=>{const W=J(i,_);let q=T;if(W){const F=W._f;F&&(!F.disabled&&rt(o,_,Kb(T,F)),q=Sd(F.ref)&&gn(T)?"":T,Yb(F.ref)?[...F.ref.options].forEach(ce=>ce.selected=q.includes(ce.value)):F.refs?kc(F.ref)?F.refs.length>1?F.refs.forEach(ce=>(!ce.defaultChecked||!ce.disabled)&&(ce.checked=Array.isArray(q)?!!q.find(Xe=>Xe===ce.value):q===ce.value)):F.refs[0]&&(F.refs[0].checked=!!q):F.refs.forEach(ce=>ce.checked=ce.value===q):hv(F.ref)?F.ref.value="":(F.ref.value=q,F.ref.type||f.values.next({name:_,values:{...o}})))}(I.shouldDirty||I.shouldTouch)&&C(_,q,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&oe(_)},We=(_,T,I)=>{for(const W in T){const q=T[W],F=`${_}.${W}`,ce=J(i,F);(l.array.has(_)||!bd(q)||ce&&!ce._f)&&!Ro(q)?We(F,q,I):Oe(F,q,I)}},$=(_,T,I={})=>{const W=J(i,_),q=l.array.has(_),F=In(T);rt(o,_,F),q?(f.array.next({name:_,values:{...o}}),(d.isDirty||d.dirtyFields)&&I.shouldDirty&&f.state.next({name:_,dirtyFields:lp(s,o),isDirty:ne(_,F)})):W&&!W._f&&!gn(F)?We(_,F,I):Oe(_,F,I),tg(_,l)&&f.state.next({...r}),f.values.next({name:_,values:{...o}}),!a.mount&&t()},K=async _=>{const T=_.target;let I=T.name,W=!0;const q=J(i,I),F=()=>T.type?cp(q._f):Mb(_);if(q){let ce,Xe;const $e=F(),ge=_.type===wd.BLUR||_.type===wd.FOCUS_OUT,ft=!jF(q._f)&&!n.resolver&&!J(r.errors,I)&&!q._f.deps||$F(ge,J(r.touchedFields,I),r.isSubmitted,p,m),Cr=tg(I,l,ge);rt(o,I,$e),ge?(q._f.onBlur&&q._f.onBlur(_),c&&c(0)):q._f.onChange&&q._f.onChange(_);const Zr=C(I,$e,ge,!1),A=!Mn(Zr)||Cr;if(!ge&&f.values.next({name:I,type:_.type,values:{...o}}),ft)return d.isValid&&h(),A&&f.state.next({name:I,...Cr?{}:Zr});if(!ge&&Cr&&f.state.next({...r}),y(!0),n.resolver){const{errors:P}=await z([I]),j=Ow(r.errors,i,I),ue=Ow(P,i,j.name||I);ce=ue.error,I=ue.name,Xe=Mn(P)}else ce=(await ng(q,o,k,n.shouldUseNativeValidation))[I],W=isNaN($e)||$e===J(o,I,$e),W&&(ce?Xe=!1:d.isValid&&(Xe=await _e(i,!0)));W&&(q._f.deps&&oe(q._f.deps),N(I,Xe,ce,Zr))}},oe=async(_,T={})=>{let I,W;const q=zn(_);if(y(!0),n.resolver){const F=await G(pt(_)?_:q);I=Mn(F),W=_?!q.some(ce=>J(F,ce)):I}else _?(W=(await Promise.all(q.map(async F=>{const ce=J(i,F);return await _e(ce&&ce._f?{[F]:ce}:ce)}))).every(Boolean),!(!W&&!r.isValid)&&h()):W=I=await _e(i);return f.state.next({...!Lr(_)||d.isValid&&I!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:I}:{},errors:r.errors,isValidating:!1}),T.shouldFocus&&!W&&xd(i,F=>F&&J(r.errors,F),_?q:l.mount),W},te=_=>{const T={...s,...a.mount?o:{}};return pt(_)?T:Lr(_)?J(T,_):_.map(I=>J(T,I))},O=(_,T)=>({invalid:!!J((T||r).errors,_),isDirty:!!J((T||r).dirtyFields,_),isTouched:!!J((T||r).touchedFields,_),error:J((T||r).errors,_)}),U=_=>{_&&zn(_).forEach(T=>Bt(r.errors,T)),f.state.next({errors:_?r.errors:{}})},X=(_,T,I)=>{const W=(J(i,_,{_f:{}})._f||{}).ref;rt(r.errors,_,{...T,ref:W}),f.state.next({name:_,errors:r.errors,isValid:!1}),I&&I.shouldFocus&&W&&W.focus&&W.focus()},le=(_,T)=>Li(_)?f.values.subscribe({next:I=>_(pe(void 0,T),I)}):pe(_,T,!0),R=(_,T={})=>{for(const I of _?zn(_):l.mount)l.mount.delete(I),l.array.delete(I),T.keepValue||(Bt(i,I),Bt(o,I)),!T.keepError&&Bt(r.errors,I),!T.keepDirty&&Bt(r.dirtyFields,I),!T.keepTouched&&Bt(r.touchedFields,I),!n.shouldUnregister&&!T.keepDefaultValue&&Bt(s,I);f.values.next({values:{...o}}),f.state.next({...r,...T.keepDirty?{isDirty:ne()}:{}}),!T.keepIsValid&&h()},Ee=(_,T={})=>{let I=J(i,_);const W=Wo(T.disabled);return rt(i,_,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:_}},name:_,mount:!0,...T}}),l.mount.add(_),I?W&&rt(o,_,T.disabled?void 0:J(o,_,cp(I._f))):S(_,!0,T.value),{...W?{disabled:T.disabled}:{},...n.shouldUseNativeValidation?{required:!!T.required,min:Ba(T.min),max:Ba(T.max),minLength:Ba(T.minLength),maxLength:Ba(T.maxLength),pattern:Ba(T.pattern)}:{},name:_,onChange:K,onBlur:K,ref:q=>{if(q){Ee(_,T),I=J(i,_);const F=pt(q.value)&&q.querySelectorAll&&q.querySelectorAll("input,select,textarea")[0]||q,ce=LF(F),Xe=I._f.refs||[];if(ce?Xe.find($e=>$e===F):F===I._f.ref)return;rt(i,_,{_f:{...I._f,...ce?{refs:[...Xe.filter(ap),F,...Array.isArray(J(s,_))?[{}]:[]],ref:{type:F.type,name:_}}:{ref:F}}}),S(_,!1,void 0,F)}else I=J(i,_,{}),I._f&&(I._f.mount=!1),(n.shouldUnregister||T.shouldUnregister)&&!(Fb(l.array,_)&&a.action)&&l.unMount.add(_)}}},Z=()=>n.shouldFocusError&&xd(i,_=>_&&J(r.errors,_),l.mount),Ge=(_,T)=>async I=>{I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let W=In(o);if(f.state.next({isSubmitting:!0}),n.resolver){const{errors:q,values:F}=await z();r.errors=q,W=F}else await _e(i);Bt(r.errors,"root"),Mn(r.errors)?(f.state.next({errors:{}}),await _(W,I)):(T&&await T({...r.errors},I),Z(),setTimeout(Z)),f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},De=(_,T={})=>{J(i,_)&&(pt(T.defaultValue)?$(_,J(s,_)):($(_,T.defaultValue),rt(s,_,T.defaultValue)),T.keepTouched||Bt(r.touchedFields,_),T.keepDirty||(Bt(r.dirtyFields,_),r.isDirty=T.defaultValue?ne(_,J(s,_)):ne()),T.keepError||(Bt(r.errors,_),d.isValid&&h()),f.state.next({...r}))},Pe=(_,T={})=>{const I=_||s,W=In(I),q=_&&!Mn(_)?W:s;if(T.keepDefaultValues||(s=I),!T.keepValues){if(T.keepDirtyValues||g)for(const F of l.mount)J(r.dirtyFields,F)?rt(q,F,J(o,F)):$(F,J(q,F));else{if(dv&&pt(_))for(const F of l.mount){const ce=J(i,F);if(ce&&ce._f){const Xe=Array.isArray(ce._f.refs)?ce._f.refs[0]:ce._f.ref;if(Sd(Xe)){const $e=Xe.closest("form");if($e){$e.reset();break}}}}i={}}o=e.shouldUnregister?T.keepDefaultValues?In(s):{}:W,f.array.next({values:{...q}}),f.values.next({values:{...q}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!d.isValid||!!T.keepIsValid,a.watch=!!e.shouldUnregister,f.state.next({submitCount:T.keepSubmitCount?r.submitCount:0,isDirty:T.keepDirty?r.isDirty:!!(T.keepDefaultValues&&!bs(_,s)),isSubmitted:T.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:T.keepDirtyValues?r.dirtyFields:T.keepDefaultValues&&_?lp(s,_):{},touchedFields:T.keepTouched?r.touchedFields:{},errors:T.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},me=(_,T)=>Pe(Li(_)?_(o):_,T),ot=(_,T={})=>{const I=J(i,_),W=I&&I._f;if(W){const q=W.refs?W.refs[0]:W.ref;q.focus&&(q.focus(),T.shouldSelect&&q.select())}},xe=_=>{r={...r,..._}};return Li(n.defaultValues)&&n.defaultValues().then(_=>{me(_,n.resetOptions),f.state.next({isLoading:!1})}),{control:{register:Ee,unregister:R,getFieldState:O,_executeSchema:z,_getWatch:pe,_getDirty:ne,_updateValid:h,_removeUnmounted:ee,_updateFieldArray:b,_getFieldArray:Te,_reset:Pe,_updateFormState:xe,_subjects:f,_proxyFormState:d,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(_){a=_},get _defaultValues(){return s},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:oe,register:Ee,handleSubmit:Ge,watch:le,setValue:$,getValues:te,reset:me,resetField:De,clearErrors:U,unregister:R,setError:X,setFocus:ot,getFieldState:O}}function WF(e={}){const t=we.useRef(),[n,r]=we.useState({isDirty:!1,isValidating:!1,isLoading:Li(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:Li(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...VF(e,()=>r(s=>({...s}))),formState:n});const i=t.current.control;return i._options=e,$f({subject:i._subjects.state,next:s=>{zb(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),we.useEffect(()=>{e.values&&!bs(e.values,i._defaultValues)&&i._reset(e.values,i._options.resetOptions)},[e.values,i]),we.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Lb(n,i),t.current}const HF=["January","February","March","April","May","June","July","August","September","October","November","December"],YF=(e,t)=>new Date(e,t+1,0).getDate(),GF=(e,t)=>{const n=Math.abs((t-e)/1),{result:r}=Array.from({length:n}).reduce(({result:i,current:s})=>({result:[...i,s],current:s+1}),{result:[],current:e});return r};//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var qb;function Q(){return qb.apply(null,arguments)}function ZF(e){qb=e}function xr(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Ds(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function qe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function mv(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(qe(e,t))return!1;return!0}function Cn(e){return e===void 0}function wi(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function bc(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function Qb(e,t){var n=[],r,i=e.length;for(r=0;r<i;++r)n.push(t(e[r],r));return n}function zi(e,t){for(var n in t)qe(t,n)&&(e[n]=t[n]);return qe(t,"toString")&&(e.toString=t.toString),qe(t,"valueOf")&&(e.valueOf=t.valueOf),e}function Yr(e,t,n,r){return xC(e,t,n,r,!0).utc()}function KF(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function Ne(e){return e._pf==null&&(e._pf=KF()),e._pf}var rg;Array.prototype.some?rg=Array.prototype.some:rg=function(e){var t=Object(this),n=t.length>>>0,r;for(r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};function gv(e){if(e._isValid==null){var t=Ne(e),n=rg.call(t.parsedDateParts,function(i){return i!=null}),r=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(r=r&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=r;else return r}return e._isValid}function Uf(e){var t=Yr(NaN);return e!=null?zi(Ne(t),e):Ne(t).userInvalidated=!0,t}var Pw=Q.momentProperties=[],up=!1;function yv(e,t){var n,r,i,s=Pw.length;if(Cn(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),Cn(t._i)||(e._i=t._i),Cn(t._f)||(e._f=t._f),Cn(t._l)||(e._l=t._l),Cn(t._strict)||(e._strict=t._strict),Cn(t._tzm)||(e._tzm=t._tzm),Cn(t._isUTC)||(e._isUTC=t._isUTC),Cn(t._offset)||(e._offset=t._offset),Cn(t._pf)||(e._pf=Ne(t)),Cn(t._locale)||(e._locale=t._locale),s>0)for(n=0;n<s;n++)r=Pw[n],i=t[r],Cn(i)||(e[r]=i);return e}function Cc(e){yv(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),up===!1&&(up=!0,Q.updateOffset(this),up=!1)}function Sr(e){return e instanceof Cc||e!=null&&e._isAMomentObject!=null}function Xb(e){Q.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function nr(e,t){var n=!0;return zi(function(){if(Q.deprecationHandler!=null&&Q.deprecationHandler(null,e),n){var r=[],i,s,o,a=arguments.length;for(s=0;s<a;s++){if(i="",typeof arguments[s]=="object"){i+=`
[`+s+"] ";for(o in arguments[0])qe(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[s];r.push(i)}Xb(e+`
Arguments: `+Array.prototype.slice.call(r).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Mw={};function Jb(e,t){Q.deprecationHandler!=null&&Q.deprecationHandler(e,t),Mw[e]||(Xb(t),Mw[e]=!0)}Q.suppressDeprecationWarnings=!1;Q.deprecationHandler=null;function Gr(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function qF(e){var t,n;for(n in e)qe(e,n)&&(t=e[n],Gr(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function ig(e,t){var n=zi({},e),r;for(r in t)qe(t,r)&&(Ds(e[r])&&Ds(t[r])?(n[r]={},zi(n[r],e[r]),zi(n[r],t[r])):t[r]!=null?n[r]=t[r]:delete n[r]);for(r in e)qe(e,r)&&!qe(t,r)&&Ds(e[r])&&(n[r]=zi({},n[r]));return n}function vv(e){e!=null&&this.set(e)}var sg;Object.keys?sg=Object.keys:sg=function(e){var t,n=[];for(t in e)qe(e,t)&&n.push(t);return n};var QF={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function XF(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return Gr(r)?r.call(t,n):r}function $r(e,t,n){var r=""+Math.abs(e),i=t-r.length,s=e>=0;return(s?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r}var _v=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,eu=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,dp={},Ho={};function he(e,t,n,r){var i=r;typeof r=="string"&&(i=function(){return this[r]()}),e&&(Ho[e]=i),t&&(Ho[t[0]]=function(){return $r(i.apply(this,arguments),t[1],t[2])}),n&&(Ho[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function JF(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function eL(e){var t=e.match(_v),n,r;for(n=0,r=t.length;n<r;n++)Ho[t[n]]?t[n]=Ho[t[n]]:t[n]=JF(t[n]);return function(i){var s="",o;for(o=0;o<r;o++)s+=Gr(t[o])?t[o].call(i,e):t[o];return s}}function wu(e,t){return e.isValid()?(t=eC(t,e.localeData()),dp[t]=dp[t]||eL(t),dp[t](e)):e.localeData().invalidDate()}function eC(e,t){var n=5;function r(i){return t.longDateFormat(i)||i}for(eu.lastIndex=0;n>=0&&eu.test(e);)e=e.replace(eu,r),eu.lastIndex=0,n-=1;return e}var tL={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function nL(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(_v).map(function(r){return r==="MMMM"||r==="MM"||r==="DD"||r==="dddd"?r.slice(1):r}).join(""),this._longDateFormat[e])}var rL="Invalid date";function iL(){return this._invalidDate}var sL="%d",oL=/\d{1,2}/;function aL(e){return this._ordinal.replace("%d",e)}var lL={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function cL(e,t,n,r){var i=this._relativeTime[n];return Gr(i)?i(e,t,n,r):i.replace(/%d/i,e)}function uL(e,t){var n=this._relativeTime[e>0?"future":"past"];return Gr(n)?n(t):n.replace(/%s/i,t)}var ul={};function dn(e,t){var n=e.toLowerCase();ul[n]=ul[n+"s"]=ul[t]=e}function rr(e){return typeof e=="string"?ul[e]||ul[e.toLowerCase()]:void 0}function wv(e){var t={},n,r;for(r in e)qe(e,r)&&(n=rr(r),n&&(t[n]=e[r]));return t}var tC={};function fn(e,t){tC[e]=t}function dL(e){var t=[],n;for(n in e)qe(e,n)&&t.push({unit:n,priority:tC[n]});return t.sort(function(r,i){return r.priority-i.priority}),t}function Bf(e){return e%4===0&&e%100!==0||e%400===0}function Gn(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function je(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=Gn(t)),n}function ba(e,t){return function(n){return n!=null?(nC(this,e,n),Q.updateOffset(this,t),this):Ed(this,e)}}function Ed(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function nC(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&Bf(e.year())&&e.month()===1&&e.date()===29?(n=je(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Zf(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function fL(e){return e=rr(e),Gr(this[e])?this[e]():this}function hL(e,t){if(typeof e=="object"){e=wv(e);var n=dL(e),r,i=n.length;for(r=0;r<i;r++)this[n[r].unit](e[n[r].unit])}else if(e=rr(e),Gr(this[e]))return this[e](t);return this}var rC=/\d/,Wn=/\d\d/,iC=/\d{3}/,xv=/\d{4}/,Vf=/[+-]?\d{6}/,yt=/\d\d?/,sC=/\d\d\d\d?/,oC=/\d\d\d\d\d\d?/,Wf=/\d{1,3}/,Sv=/\d{1,4}/,Hf=/[+-]?\d{1,6}/,Ca=/\d+/,Yf=/[+-]?\d+/,pL=/Z|[+-]\d\d:?\d\d/gi,Gf=/Z|[+-]\d\d(?::?\d\d)?/gi,mL=/[+-]?\d+(\.\d{1,3})?/,Ec=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Td;Td={};function se(e,t,n){Td[e]=Gr(t)?t:function(r,i){return r&&n?n:t}}function gL(e,t){return qe(Td,e)?Td[e](t._strict,t._locale):new RegExp(yL(e))}function yL(e){return Fn(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,r,i,s){return n||r||i||s}))}function Fn(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var og={};function st(e,t){var n,r=t,i;for(typeof e=="string"&&(e=[e]),wi(t)&&(r=function(s,o){o[t]=je(s)}),i=e.length,n=0;n<i;n++)og[e[n]]=r}function Tc(e,t){st(e,function(n,r,i,s){i._w=i._w||{},t(n,i._w,i,s)})}function vL(e,t,n){t!=null&&qe(og,e)&&og[e](t,n._a,n,e)}var ln=0,oi=1,Pr=2,$t=3,fr=4,ai=5,Cs=6,_L=7,wL=8;function xL(e,t){return(e%t+t)%t}var Rt;Array.prototype.indexOf?Rt=Array.prototype.indexOf:Rt=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function Zf(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=xL(t,12);return e+=(t-n)/12,n===1?Bf(e)?29:28:31-n%7%2}he("M",["MM",2],"Mo",function(){return this.month()+1});he("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});he("MMMM",0,0,function(e){return this.localeData().months(this,e)});dn("month","M");fn("month",8);se("M",yt);se("MM",yt,Wn);se("MMM",function(e,t){return t.monthsShortRegex(e)});se("MMMM",function(e,t){return t.monthsRegex(e)});st(["M","MM"],function(e,t){t[oi]=je(e)-1});st(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);i!=null?t[oi]=i:Ne(n).invalidMonth=e});var SL="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),aC="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),lC=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,kL=Ec,bL=Ec;function CL(e,t){return e?xr(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||lC).test(t)?"format":"standalone"][e.month()]:xr(this._months)?this._months:this._months.standalone}function EL(e,t){return e?xr(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[lC.test(t)?"format":"standalone"][e.month()]:xr(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function TL(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)s=Yr([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(s,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(s,"").toLocaleLowerCase();return n?t==="MMM"?(i=Rt.call(this._shortMonthsParse,o),i!==-1?i:null):(i=Rt.call(this._longMonthsParse,o),i!==-1?i:null):t==="MMM"?(i=Rt.call(this._shortMonthsParse,o),i!==-1?i:(i=Rt.call(this._longMonthsParse,o),i!==-1?i:null)):(i=Rt.call(this._longMonthsParse,o),i!==-1?i:(i=Rt.call(this._shortMonthsParse,o),i!==-1?i:null))}function IL(e,t,n){var r,i,s;if(this._monthsParseExact)return TL.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=Yr([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),!n&&!this._monthsParse[r]&&(s="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[r].test(e))return r;if(n&&t==="MMM"&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}}function cC(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=je(t);else if(t=e.localeData().monthsParse(t),!wi(t))return e}return n=Math.min(e.date(),Zf(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function uC(e){return e!=null?(cC(this,e),Q.updateOffset(this,!0),this):Ed(this,"Month")}function DL(){return Zf(this.year(),this.month())}function NL(e){return this._monthsParseExact?(qe(this,"_monthsRegex")||dC.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(qe(this,"_monthsShortRegex")||(this._monthsShortRegex=kL),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function RL(e){return this._monthsParseExact?(qe(this,"_monthsRegex")||dC.call(this),e?this._monthsStrictRegex:this._monthsRegex):(qe(this,"_monthsRegex")||(this._monthsRegex=bL),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function dC(){function e(o,a){return a.length-o.length}var t=[],n=[],r=[],i,s;for(i=0;i<12;i++)s=Yr([2e3,i]),t.push(this.monthsShort(s,"")),n.push(this.months(s,"")),r.push(this.months(s,"")),r.push(this.monthsShort(s,""));for(t.sort(e),n.sort(e),r.sort(e),i=0;i<12;i++)t[i]=Fn(t[i]),n[i]=Fn(n[i]);for(i=0;i<24;i++)r[i]=Fn(r[i]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}he("Y",0,0,function(){var e=this.year();return e<=9999?$r(e,4):"+"+e});he(0,["YY",2],0,function(){return this.year()%100});he(0,["YYYY",4],0,"year");he(0,["YYYYY",5],0,"year");he(0,["YYYYYY",6,!0],0,"year");dn("year","y");fn("year",1);se("Y",Yf);se("YY",yt,Wn);se("YYYY",Sv,xv);se("YYYYY",Hf,Vf);se("YYYYYY",Hf,Vf);st(["YYYYY","YYYYYY"],ln);st("YYYY",function(e,t){t[ln]=e.length===2?Q.parseTwoDigitYear(e):je(e)});st("YY",function(e,t){t[ln]=Q.parseTwoDigitYear(e)});st("Y",function(e,t){t[ln]=parseInt(e,10)});function dl(e){return Bf(e)?366:365}Q.parseTwoDigitYear=function(e){return je(e)+(je(e)>68?1900:2e3)};var fC=ba("FullYear",!0);function AL(){return Bf(this.year())}function OL(e,t,n,r,i,s,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,r,i,s,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,r,i,s,o),a}function Hl(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Id(e,t,n){var r=7+t-n,i=(7+Hl(e,0,r).getUTCDay()-t)%7;return-i+r-1}function hC(e,t,n,r,i){var s=(7+n-r)%7,o=Id(e,r,i),a=1+7*(t-1)+s+o,l,c;return a<=0?(l=e-1,c=dl(l)+a):a>dl(e)?(l=e+1,c=a-dl(e)):(l=e,c=a),{year:l,dayOfYear:c}}function Yl(e,t,n){var r=Id(e.year(),t,n),i=Math.floor((e.dayOfYear()-r-1)/7)+1,s,o;return i<1?(o=e.year()-1,s=i+fi(o,t,n)):i>fi(e.year(),t,n)?(s=i-fi(e.year(),t,n),o=e.year()+1):(o=e.year(),s=i),{week:s,year:o}}function fi(e,t,n){var r=Id(e,t,n),i=Id(e+1,t,n);return(dl(e)-r+i)/7}he("w",["ww",2],"wo","week");he("W",["WW",2],"Wo","isoWeek");dn("week","w");dn("isoWeek","W");fn("week",5);fn("isoWeek",5);se("w",yt);se("ww",yt,Wn);se("W",yt);se("WW",yt,Wn);Tc(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=je(e)});function PL(e){return Yl(e,this._week.dow,this._week.doy).week}var ML={dow:0,doy:6};function FL(){return this._week.dow}function LL(){return this._week.doy}function zL(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function jL(e){var t=Yl(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}he("d",0,"do","day");he("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});he("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});he("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});he("e",0,0,"weekday");he("E",0,0,"isoWeekday");dn("day","d");dn("weekday","e");dn("isoWeekday","E");fn("day",11);fn("weekday",11);fn("isoWeekday",11);se("d",yt);se("e",yt);se("E",yt);se("dd",function(e,t){return t.weekdaysMinRegex(e)});se("ddd",function(e,t){return t.weekdaysShortRegex(e)});se("dddd",function(e,t){return t.weekdaysRegex(e)});Tc(["dd","ddd","dddd"],function(e,t,n,r){var i=n._locale.weekdaysParse(e,r,n._strict);i!=null?t.d=i:Ne(n).invalidWeekday=e});Tc(["d","e","E"],function(e,t,n,r){t[r]=je(e)});function $L(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function UL(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function kv(e,t){return e.slice(t,7).concat(e.slice(0,t))}var BL="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),pC="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),VL="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),WL=Ec,HL=Ec,YL=Ec;function GL(e,t){var n=xr(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?kv(n,this._week.dow):e?n[e.day()]:n}function ZL(e){return e===!0?kv(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function KL(e){return e===!0?kv(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function qL(e,t,n){var r,i,s,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)s=Yr([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(s,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(s,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(s,"").toLocaleLowerCase();return n?t==="dddd"?(i=Rt.call(this._weekdaysParse,o),i!==-1?i:null):t==="ddd"?(i=Rt.call(this._shortWeekdaysParse,o),i!==-1?i:null):(i=Rt.call(this._minWeekdaysParse,o),i!==-1?i:null):t==="dddd"?(i=Rt.call(this._weekdaysParse,o),i!==-1||(i=Rt.call(this._shortWeekdaysParse,o),i!==-1)?i:(i=Rt.call(this._minWeekdaysParse,o),i!==-1?i:null)):t==="ddd"?(i=Rt.call(this._shortWeekdaysParse,o),i!==-1||(i=Rt.call(this._weekdaysParse,o),i!==-1)?i:(i=Rt.call(this._minWeekdaysParse,o),i!==-1?i:null)):(i=Rt.call(this._minWeekdaysParse,o),i!==-1||(i=Rt.call(this._weekdaysParse,o),i!==-1)?i:(i=Rt.call(this._shortWeekdaysParse,o),i!==-1?i:null))}function QL(e,t,n){var r,i,s;if(this._weekdaysParseExact)return qL.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=Yr([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(s="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(s.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[r].test(e))return r;if(n&&t==="ddd"&&this._shortWeekdaysParse[r].test(e))return r;if(n&&t==="dd"&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}}function XL(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=$L(e,this.localeData()),this.add(e-t,"d")):t}function JL(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function ez(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=UL(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function tz(e){return this._weekdaysParseExact?(qe(this,"_weekdaysRegex")||bv.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(qe(this,"_weekdaysRegex")||(this._weekdaysRegex=WL),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function nz(e){return this._weekdaysParseExact?(qe(this,"_weekdaysRegex")||bv.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(qe(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=HL),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function rz(e){return this._weekdaysParseExact?(qe(this,"_weekdaysRegex")||bv.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(qe(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=YL),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function bv(){function e(u,d){return d.length-u.length}var t=[],n=[],r=[],i=[],s,o,a,l,c;for(s=0;s<7;s++)o=Yr([2e3,1]).day(s),a=Fn(this.weekdaysMin(o,"")),l=Fn(this.weekdaysShort(o,"")),c=Fn(this.weekdays(o,"")),t.push(a),n.push(l),r.push(c),i.push(a),i.push(l),i.push(c);t.sort(e),n.sort(e),r.sort(e),i.sort(e),this._weekdaysRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function Cv(){return this.hours()%12||12}function iz(){return this.hours()||24}he("H",["HH",2],0,"hour");he("h",["hh",2],0,Cv);he("k",["kk",2],0,iz);he("hmm",0,0,function(){return""+Cv.apply(this)+$r(this.minutes(),2)});he("hmmss",0,0,function(){return""+Cv.apply(this)+$r(this.minutes(),2)+$r(this.seconds(),2)});he("Hmm",0,0,function(){return""+this.hours()+$r(this.minutes(),2)});he("Hmmss",0,0,function(){return""+this.hours()+$r(this.minutes(),2)+$r(this.seconds(),2)});function mC(e,t){he(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}mC("a",!0);mC("A",!1);dn("hour","h");fn("hour",13);function gC(e,t){return t._meridiemParse}se("a",gC);se("A",gC);se("H",yt);se("h",yt);se("k",yt);se("HH",yt,Wn);se("hh",yt,Wn);se("kk",yt,Wn);se("hmm",sC);se("hmmss",oC);se("Hmm",sC);se("Hmmss",oC);st(["H","HH"],$t);st(["k","kk"],function(e,t,n){var r=je(e);t[$t]=r===24?0:r});st(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});st(["h","hh"],function(e,t,n){t[$t]=je(e),Ne(n).bigHour=!0});st("hmm",function(e,t,n){var r=e.length-2;t[$t]=je(e.substr(0,r)),t[fr]=je(e.substr(r)),Ne(n).bigHour=!0});st("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[$t]=je(e.substr(0,r)),t[fr]=je(e.substr(r,2)),t[ai]=je(e.substr(i)),Ne(n).bigHour=!0});st("Hmm",function(e,t,n){var r=e.length-2;t[$t]=je(e.substr(0,r)),t[fr]=je(e.substr(r))});st("Hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[$t]=je(e.substr(0,r)),t[fr]=je(e.substr(r,2)),t[ai]=je(e.substr(i))});function sz(e){return(e+"").toLowerCase().charAt(0)==="p"}var oz=/[ap]\.?m?\.?/i,az=ba("Hours",!0);function lz(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var yC={calendar:QF,longDateFormat:tL,invalidDate:rL,ordinal:sL,dayOfMonthOrdinalParse:oL,relativeTime:lL,months:SL,monthsShort:aC,week:ML,weekdays:BL,weekdaysMin:VL,weekdaysShort:pC,meridiemParse:oz},vt={},Va={},Gl;function cz(e,t){var n,r=Math.min(e.length,t.length);for(n=0;n<r;n+=1)if(e[n]!==t[n])return n;return r}function Fw(e){return e&&e.toLowerCase().replace("_","-")}function uz(e){for(var t=0,n,r,i,s;t<e.length;){for(s=Fw(e[t]).split("-"),n=s.length,r=Fw(e[t+1]),r=r?r.split("-"):null;n>0;){if(i=Kf(s.slice(0,n).join("-")),i)return i;if(r&&r.length>=n&&cz(s,r)>=n-1)break;n--}t++}return Gl}function dz(e){return e.match("^[^/\\\\]*$")!=null}function Kf(e){var t=null,n;if(vt[e]===void 0&&typeof bu<"u"&&bu&&bu.exports&&dz(e))try{t=Gl._abbr,n=require,n("./locale/"+e),Ji(t)}catch{vt[e]=null}return vt[e]}function Ji(e,t){var n;return e&&(Cn(t)?n=bi(e):n=Ev(e,t),n?Gl=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),Gl._abbr}function Ev(e,t){if(t!==null){var n,r=yC;if(t.abbr=e,vt[e]!=null)Jb("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=vt[e]._config;else if(t.parentLocale!=null)if(vt[t.parentLocale]!=null)r=vt[t.parentLocale]._config;else if(n=Kf(t.parentLocale),n!=null)r=n._config;else return Va[t.parentLocale]||(Va[t.parentLocale]=[]),Va[t.parentLocale].push({name:e,config:t}),null;return vt[e]=new vv(ig(r,t)),Va[e]&&Va[e].forEach(function(i){Ev(i.name,i.config)}),Ji(e),vt[e]}else return delete vt[e],null}function fz(e,t){if(t!=null){var n,r,i=yC;vt[e]!=null&&vt[e].parentLocale!=null?vt[e].set(ig(vt[e]._config,t)):(r=Kf(e),r!=null&&(i=r._config),t=ig(i,t),r==null&&(t.abbr=e),n=new vv(t),n.parentLocale=vt[e],vt[e]=n),Ji(e)}else vt[e]!=null&&(vt[e].parentLocale!=null?(vt[e]=vt[e].parentLocale,e===Ji()&&Ji(e)):vt[e]!=null&&delete vt[e]);return vt[e]}function bi(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Gl;if(!xr(e)){if(t=Kf(e),t)return t;e=[e]}return uz(e)}function hz(){return sg(vt)}function Tv(e){var t,n=e._a;return n&&Ne(e).overflow===-2&&(t=n[oi]<0||n[oi]>11?oi:n[Pr]<1||n[Pr]>Zf(n[ln],n[oi])?Pr:n[$t]<0||n[$t]>24||n[$t]===24&&(n[fr]!==0||n[ai]!==0||n[Cs]!==0)?$t:n[fr]<0||n[fr]>59?fr:n[ai]<0||n[ai]>59?ai:n[Cs]<0||n[Cs]>999?Cs:-1,Ne(e)._overflowDayOfYear&&(t<ln||t>Pr)&&(t=Pr),Ne(e)._overflowWeeks&&t===-1&&(t=_L),Ne(e)._overflowWeekday&&t===-1&&(t=wL),Ne(e).overflow=t),e}var pz=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mz=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gz=/Z|[+-]\d\d(?::?\d\d)?/,tu=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],fp=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],yz=/^\/?Date\((-?\d+)/i,vz=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,_z={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function vC(e){var t,n,r=e._i,i=pz.exec(r)||mz.exec(r),s,o,a,l,c=tu.length,u=fp.length;if(i){for(Ne(e).iso=!0,t=0,n=c;t<n;t++)if(tu[t][1].exec(i[1])){o=tu[t][0],s=tu[t][2]!==!1;break}if(o==null){e._isValid=!1;return}if(i[3]){for(t=0,n=u;t<n;t++)if(fp[t][1].exec(i[3])){a=(i[2]||" ")+fp[t][0];break}if(a==null){e._isValid=!1;return}}if(!s&&a!=null){e._isValid=!1;return}if(i[4])if(gz.exec(i[4]))l="Z";else{e._isValid=!1;return}e._f=o+(a||"")+(l||""),Dv(e)}else e._isValid=!1}function wz(e,t,n,r,i,s){var o=[xz(e),aC.indexOf(t),parseInt(n,10),parseInt(r,10),parseInt(i,10)];return s&&o.push(parseInt(s,10)),o}function xz(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Sz(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function kz(e,t,n){if(e){var r=pC.indexOf(e),i=new Date(t[0],t[1],t[2]).getDay();if(r!==i)return Ne(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function bz(e,t,n){if(e)return _z[e];if(t)return 0;var r=parseInt(n,10),i=r%100,s=(r-i)/100;return s*60+i}function _C(e){var t=vz.exec(Sz(e._i)),n;if(t){if(n=wz(t[4],t[3],t[2],t[5],t[6],t[7]),!kz(t[1],n,e))return;e._a=n,e._tzm=bz(t[8],t[9],t[10]),e._d=Hl.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),Ne(e).rfc2822=!0}else e._isValid=!1}function Cz(e){var t=yz.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(vC(e),e._isValid===!1)delete e._isValid;else return;if(_C(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:Q.createFromInputFallback(e)}Q.createFromInputFallback=nr("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function fo(e,t,n){return e??t??n}function Ez(e){var t=new Date(Q.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Iv(e){var t,n,r=[],i,s,o;if(!e._d){for(i=Ez(e),e._w&&e._a[Pr]==null&&e._a[oi]==null&&Tz(e),e._dayOfYear!=null&&(o=fo(e._a[ln],i[ln]),(e._dayOfYear>dl(o)||e._dayOfYear===0)&&(Ne(e)._overflowDayOfYear=!0),n=Hl(o,0,e._dayOfYear),e._a[oi]=n.getUTCMonth(),e._a[Pr]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=r[t]=i[t];for(;t<7;t++)e._a[t]=r[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[$t]===24&&e._a[fr]===0&&e._a[ai]===0&&e._a[Cs]===0&&(e._nextDay=!0,e._a[$t]=0),e._d=(e._useUTC?Hl:OL).apply(null,r),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[$t]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==s&&(Ne(e).weekdayMismatch=!0)}}function Tz(e){var t,n,r,i,s,o,a,l,c;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(s=1,o=4,n=fo(t.GG,e._a[ln],Yl(gt(),1,4).year),r=fo(t.W,1),i=fo(t.E,1),(i<1||i>7)&&(l=!0)):(s=e._locale._week.dow,o=e._locale._week.doy,c=Yl(gt(),s,o),n=fo(t.gg,e._a[ln],c.year),r=fo(t.w,c.week),t.d!=null?(i=t.d,(i<0||i>6)&&(l=!0)):t.e!=null?(i=t.e+s,(t.e<0||t.e>6)&&(l=!0)):i=s),r<1||r>fi(n,s,o)?Ne(e)._overflowWeeks=!0:l!=null?Ne(e)._overflowWeekday=!0:(a=hC(n,r,i,s,o),e._a[ln]=a.year,e._dayOfYear=a.dayOfYear)}Q.ISO_8601=function(){};Q.RFC_2822=function(){};function Dv(e){if(e._f===Q.ISO_8601){vC(e);return}if(e._f===Q.RFC_2822){_C(e);return}e._a=[],Ne(e).empty=!0;var t=""+e._i,n,r,i,s,o,a=t.length,l=0,c,u;for(i=eC(e._f,e._locale).match(_v)||[],u=i.length,n=0;n<u;n++)s=i[n],r=(t.match(gL(s,e))||[])[0],r&&(o=t.substr(0,t.indexOf(r)),o.length>0&&Ne(e).unusedInput.push(o),t=t.slice(t.indexOf(r)+r.length),l+=r.length),Ho[s]?(r?Ne(e).empty=!1:Ne(e).unusedTokens.push(s),vL(s,r,e)):e._strict&&!r&&Ne(e).unusedTokens.push(s);Ne(e).charsLeftOver=a-l,t.length>0&&Ne(e).unusedInput.push(t),e._a[$t]<=12&&Ne(e).bigHour===!0&&e._a[$t]>0&&(Ne(e).bigHour=void 0),Ne(e).parsedDateParts=e._a.slice(0),Ne(e).meridiem=e._meridiem,e._a[$t]=Iz(e._locale,e._a[$t],e._meridiem),c=Ne(e).era,c!==null&&(e._a[ln]=e._locale.erasConvertYear(c,e._a[ln])),Iv(e),Tv(e)}function Iz(e,t,n){var r;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(r=e.isPM(n),r&&t<12&&(t+=12),!r&&t===12&&(t=0)),t)}function Dz(e){var t,n,r,i,s,o,a=!1,l=e._f.length;if(l===0){Ne(e).invalidFormat=!0,e._d=new Date(NaN);return}for(i=0;i<l;i++)s=0,o=!1,t=yv({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[i],Dv(t),gv(t)&&(o=!0),s+=Ne(t).charsLeftOver,s+=Ne(t).unusedTokens.length*10,Ne(t).score=s,a?s<r&&(r=s,n=t):(r==null||s<r||o)&&(r=s,n=t,o&&(a=!0));zi(e,n||t)}function Nz(e){if(!e._d){var t=wv(e._i),n=t.day===void 0?t.date:t.day;e._a=Qb([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(r){return r&&parseInt(r,10)}),Iv(e)}}function Rz(e){var t=new Cc(Tv(wC(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function wC(e){var t=e._i,n=e._f;return e._locale=e._locale||bi(e._l),t===null||n===void 0&&t===""?Uf({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),Sr(t)?new Cc(Tv(t)):(bc(t)?e._d=t:xr(n)?Dz(e):n?Dv(e):Az(e),gv(e)||(e._d=null),e))}function Az(e){var t=e._i;Cn(t)?e._d=new Date(Q.now()):bc(t)?e._d=new Date(t.valueOf()):typeof t=="string"?Cz(e):xr(t)?(e._a=Qb(t.slice(0),function(n){return parseInt(n,10)}),Iv(e)):Ds(t)?Nz(e):wi(t)?e._d=new Date(t):Q.createFromInputFallback(e)}function xC(e,t,n,r,i){var s={};return(t===!0||t===!1)&&(r=t,t=void 0),(n===!0||n===!1)&&(r=n,n=void 0),(Ds(e)&&mv(e)||xr(e)&&e.length===0)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=i,s._l=n,s._i=e,s._f=t,s._strict=r,Rz(s)}function gt(e,t,n,r){return xC(e,t,n,r,!1)}var Oz=nr("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=gt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Uf()}),Pz=nr("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=gt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Uf()});function SC(e,t){var n,r;if(t.length===1&&xr(t[0])&&(t=t[0]),!t.length)return gt();for(n=t[0],r=1;r<t.length;++r)(!t[r].isValid()||t[r][e](n))&&(n=t[r]);return n}function Mz(){var e=[].slice.call(arguments,0);return SC("isBefore",e)}function Fz(){var e=[].slice.call(arguments,0);return SC("isAfter",e)}var Lz=function(){return Date.now?Date.now():+new Date},Wa=["year","quarter","month","week","day","hour","minute","second","millisecond"];function zz(e){var t,n=!1,r,i=Wa.length;for(t in e)if(qe(e,t)&&!(Rt.call(Wa,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(r=0;r<i;++r)if(e[Wa[r]]){if(n)return!1;parseFloat(e[Wa[r]])!==je(e[Wa[r]])&&(n=!0)}return!0}function jz(){return this._isValid}function $z(){return br(NaN)}function qf(e){var t=wv(e),n=t.year||0,r=t.quarter||0,i=t.month||0,s=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=zz(t),this._milliseconds=+u+c*1e3+l*6e4+a*1e3*60*60,this._days=+o+s*7,this._months=+i+r*3+n*12,this._data={},this._locale=bi(),this._bubble()}function xu(e){return e instanceof qf}function ag(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Uz(e,t,n){var r=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0,o;for(o=0;o<r;o++)(n&&e[o]!==t[o]||!n&&je(e[o])!==je(t[o]))&&s++;return s+i}function kC(e,t){he(e,0,0,function(){var n=this.utcOffset(),r="+";return n<0&&(n=-n,r="-"),r+$r(~~(n/60),2)+t+$r(~~n%60,2)})}kC("Z",":");kC("ZZ","");se("Z",Gf);se("ZZ",Gf);st(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nv(Gf,e)});var Bz=/([\+\-]|\d\d)/gi;function Nv(e,t){var n=(t||"").match(e),r,i,s;return n===null?null:(r=n[n.length-1]||[],i=(r+"").match(Bz)||["-",0,0],s=+(i[1]*60)+je(i[2]),s===0?0:i[0]==="+"?s:-s)}function Rv(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(Sr(e)||bc(e)?e.valueOf():gt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),Q.updateOffset(n,!1),n):gt(e).local()}function lg(e){return-Math.round(e._d.getTimezoneOffset())}Q.updateOffset=function(){};function Vz(e,t,n){var r=this._offset||0,i;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=Nv(Gf,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(i=lg(this)),this._offset=e,this._isUTC=!0,i!=null&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?EC(this,br(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,Q.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?r:lg(this)}function Wz(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Hz(e){return this.utcOffset(0,e)}function Yz(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(lg(this),"m")),this}function Gz(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=Nv(pL,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Zz(e){return this.isValid()?(e=e?gt(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Kz(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function qz(){if(!Cn(this._isDSTShifted))return this._isDSTShifted;var e={},t;return yv(e,this),e=wC(e),e._a?(t=e._isUTC?Yr(e._a):gt(e._a),this._isDSTShifted=this.isValid()&&Uz(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Qz(){return this.isValid()?!this._isUTC:!1}function Xz(){return this.isValid()?this._isUTC:!1}function bC(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Jz=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,e3=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function br(e,t){var n=e,r=null,i,s,o;return xu(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:wi(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(r=Jz.exec(e))?(i=r[1]==="-"?-1:1,n={y:0,d:je(r[Pr])*i,h:je(r[$t])*i,m:je(r[fr])*i,s:je(r[ai])*i,ms:je(ag(r[Cs]*1e3))*i}):(r=e3.exec(e))?(i=r[1]==="-"?-1:1,n={y:fs(r[2],i),M:fs(r[3],i),w:fs(r[4],i),d:fs(r[5],i),h:fs(r[6],i),m:fs(r[7],i),s:fs(r[8],i)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(o=t3(gt(n.from),gt(n.to)),n={},n.ms=o.milliseconds,n.M=o.months),s=new qf(n),xu(e)&&qe(e,"_locale")&&(s._locale=e._locale),xu(e)&&qe(e,"_isValid")&&(s._isValid=e._isValid),s}br.fn=qf.prototype;br.invalid=$z;function fs(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Lw(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function t3(e,t){var n;return e.isValid()&&t.isValid()?(t=Rv(t,e),e.isBefore(t)?n=Lw(e,t):(n=Lw(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function CC(e,t){return function(n,r){var i,s;return r!==null&&!isNaN(+r)&&(Jb(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=r,r=s),i=br(n,r),EC(this,i,e),this}}function EC(e,t,n,r){var i=t._milliseconds,s=ag(t._days),o=ag(t._months);e.isValid()&&(r=r??!0,o&&cC(e,Ed(e,"Month")+o*n),s&&nC(e,"Date",Ed(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&Q.updateOffset(e,s||o))}var n3=CC(1,"add"),r3=CC(-1,"subtract");function TC(e){return typeof e=="string"||e instanceof String}function i3(e){return Sr(e)||bc(e)||TC(e)||wi(e)||o3(e)||s3(e)||e===null||e===void 0}function s3(e){var t=Ds(e)&&!mv(e),n=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],i,s,o=r.length;for(i=0;i<o;i+=1)s=r[i],n=n||qe(e,s);return t&&n}function o3(e){var t=xr(e),n=!1;return t&&(n=e.filter(function(r){return!wi(r)&&TC(e)}).length===0),t&&n}function a3(e){var t=Ds(e)&&!mv(e),n=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],i,s;for(i=0;i<r.length;i+=1)s=r[i],n=n||qe(e,s);return t&&n}function l3(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function c3(e,t){arguments.length===1&&(arguments[0]?i3(arguments[0])?(e=arguments[0],t=void 0):a3(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||gt(),r=Rv(n,this).startOf("day"),i=Q.calendarFormat(this,r)||"sameElse",s=t&&(Gr(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,gt(n)))}function u3(){return new Cc(this)}function d3(e,t){var n=Sr(e)?e:gt(e);return this.isValid()&&n.isValid()?(t=rr(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function f3(e,t){var n=Sr(e)?e:gt(e);return this.isValid()&&n.isValid()?(t=rr(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function h3(e,t,n,r){var i=Sr(e)?e:gt(e),s=Sr(t)?t:gt(t);return this.isValid()&&i.isValid()&&s.isValid()?(r=r||"()",(r[0]==="("?this.isAfter(i,n):!this.isBefore(i,n))&&(r[1]===")"?this.isBefore(s,n):!this.isAfter(s,n))):!1}function p3(e,t){var n=Sr(e)?e:gt(e),r;return this.isValid()&&n.isValid()?(t=rr(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(r=n.valueOf(),this.clone().startOf(t).valueOf()<=r&&r<=this.clone().endOf(t).valueOf())):!1}function m3(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function g3(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function y3(e,t,n){var r,i,s;if(!this.isValid())return NaN;if(r=Rv(e,this),!r.isValid())return NaN;switch(i=(r.utcOffset()-this.utcOffset())*6e4,t=rr(t),t){case"year":s=Su(this,r)/12;break;case"month":s=Su(this,r);break;case"quarter":s=Su(this,r)/3;break;case"second":s=(this-r)/1e3;break;case"minute":s=(this-r)/6e4;break;case"hour":s=(this-r)/36e5;break;case"day":s=(this-r-i)/864e5;break;case"week":s=(this-r-i)/6048e5;break;default:s=this-r}return n?s:Gn(s)}function Su(e,t){if(e.date()<t.date())return-Su(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),r=e.clone().add(n,"months"),i,s;return t-r<0?(i=e.clone().add(n-1,"months"),s=(t-r)/(r-i)):(i=e.clone().add(n+1,"months"),s=(t-r)/(i-r)),-(n+s)||0}Q.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";Q.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function v3(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function _3(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?wu(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Gr(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",wu(n,"Z")):wu(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function w3(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,r,i,s;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",s=t+'[")]',this.format(n+r+i+s)}function x3(e){e||(e=this.isUtc()?Q.defaultFormatUtc:Q.defaultFormat);var t=wu(this,e);return this.localeData().postformat(t)}function S3(e,t){return this.isValid()&&(Sr(e)&&e.isValid()||gt(e).isValid())?br({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function k3(e){return this.from(gt(),e)}function b3(e,t){return this.isValid()&&(Sr(e)&&e.isValid()||gt(e).isValid())?br({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function C3(e){return this.to(gt(),e)}function IC(e){var t;return e===void 0?this._locale._abbr:(t=bi(e),t!=null&&(this._locale=t),this)}var DC=nr("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function NC(){return this._locale}var Dd=1e3,Yo=60*Dd,Nd=60*Yo,RC=(365*400+97)*24*Nd;function Go(e,t){return(e%t+t)%t}function AC(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-RC:new Date(e,t,n).valueOf()}function OC(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-RC:Date.UTC(e,t,n)}function E3(e){var t,n;if(e=rr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?OC:AC,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Go(t+(this._isUTC?0:this.utcOffset()*Yo),Nd);break;case"minute":t=this._d.valueOf(),t-=Go(t,Yo);break;case"second":t=this._d.valueOf(),t-=Go(t,Dd);break}return this._d.setTime(t),Q.updateOffset(this,!0),this}function T3(e){var t,n;if(e=rr(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?OC:AC,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Nd-Go(t+(this._isUTC?0:this.utcOffset()*Yo),Nd)-1;break;case"minute":t=this._d.valueOf(),t+=Yo-Go(t,Yo)-1;break;case"second":t=this._d.valueOf(),t+=Dd-Go(t,Dd)-1;break}return this._d.setTime(t),Q.updateOffset(this,!0),this}function I3(){return this._d.valueOf()-(this._offset||0)*6e4}function D3(){return Math.floor(this.valueOf()/1e3)}function N3(){return new Date(this.valueOf())}function R3(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function A3(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function O3(){return this.isValid()?this.toISOString():null}function P3(){return gv(this)}function M3(){return zi({},Ne(this))}function F3(){return Ne(this).overflow}function L3(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}he("N",0,0,"eraAbbr");he("NN",0,0,"eraAbbr");he("NNN",0,0,"eraAbbr");he("NNNN",0,0,"eraName");he("NNNNN",0,0,"eraNarrow");he("y",["y",1],"yo","eraYear");he("y",["yy",2],0,"eraYear");he("y",["yyy",3],0,"eraYear");he("y",["yyyy",4],0,"eraYear");se("N",Av);se("NN",Av);se("NNN",Av);se("NNNN",Z3);se("NNNNN",K3);st(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,r){var i=n._locale.erasParse(e,r,n._strict);i?Ne(n).era=i:Ne(n).invalidEra=e});se("y",Ca);se("yy",Ca);se("yyy",Ca);se("yyyy",Ca);se("yo",q3);st(["y","yy","yyy","yyyy"],ln);st(["yo"],function(e,t,n,r){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[ln]=n._locale.eraYearOrdinalParse(e,i):t[ln]=parseInt(e,10)});function z3(e,t){var n,r,i,s=this._eras||bi("en")._eras;for(n=0,r=s.length;n<r;++n){switch(typeof s[n].since){case"string":i=Q(s[n].since).startOf("day"),s[n].since=i.valueOf();break}switch(typeof s[n].until){case"undefined":s[n].until=1/0;break;case"string":i=Q(s[n].until).startOf("day").valueOf(),s[n].until=i.valueOf();break}}return s}function j3(e,t,n){var r,i,s=this.eras(),o,a,l;for(e=e.toUpperCase(),r=0,i=s.length;r<i;++r)if(o=s[r].name.toUpperCase(),a=s[r].abbr.toUpperCase(),l=s[r].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return s[r];break;case"NNNN":if(o===e)return s[r];break;case"NNNNN":if(l===e)return s[r];break}else if([o,a,l].indexOf(e)>=0)return s[r]}function $3(e,t){var n=e.since<=e.until?1:-1;return t===void 0?Q(e.since).year():Q(e.since).year()+(t-e.offset)*n}function U3(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].name;return""}function B3(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].narrow;return""}function V3(){var e,t,n,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),r[e].since<=n&&n<=r[e].until||r[e].until<=n&&n<=r[e].since)return r[e].abbr;return""}function W3(){var e,t,n,r,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e)if(n=i[e].since<=i[e].until?1:-1,r=this.clone().startOf("day").valueOf(),i[e].since<=r&&r<=i[e].until||i[e].until<=r&&r<=i[e].since)return(this.year()-Q(i[e].since).year())*n+i[e].offset;return this.year()}function H3(e){return qe(this,"_erasNameRegex")||Ov.call(this),e?this._erasNameRegex:this._erasRegex}function Y3(e){return qe(this,"_erasAbbrRegex")||Ov.call(this),e?this._erasAbbrRegex:this._erasRegex}function G3(e){return qe(this,"_erasNarrowRegex")||Ov.call(this),e?this._erasNarrowRegex:this._erasRegex}function Av(e,t){return t.erasAbbrRegex(e)}function Z3(e,t){return t.erasNameRegex(e)}function K3(e,t){return t.erasNarrowRegex(e)}function q3(e,t){return t._eraYearOrdinalRegex||Ca}function Ov(){var e=[],t=[],n=[],r=[],i,s,o=this.eras();for(i=0,s=o.length;i<s;++i)t.push(Fn(o[i].name)),e.push(Fn(o[i].abbr)),n.push(Fn(o[i].narrow)),r.push(Fn(o[i].name)),r.push(Fn(o[i].abbr)),r.push(Fn(o[i].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}he(0,["gg",2],0,function(){return this.weekYear()%100});he(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Qf(e,t){he(0,[e,e.length],0,t)}Qf("gggg","weekYear");Qf("ggggg","weekYear");Qf("GGGG","isoWeekYear");Qf("GGGGG","isoWeekYear");dn("weekYear","gg");dn("isoWeekYear","GG");fn("weekYear",1);fn("isoWeekYear",1);se("G",Yf);se("g",Yf);se("GG",yt,Wn);se("gg",yt,Wn);se("GGGG",Sv,xv);se("gggg",Sv,xv);se("GGGGG",Hf,Vf);se("ggggg",Hf,Vf);Tc(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=je(e)});Tc(["gg","GG"],function(e,t,n,r){t[r]=Q.parseTwoDigitYear(e)});function Q3(e){return PC.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function X3(e){return PC.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function J3(){return fi(this.year(),1,4)}function e5(){return fi(this.isoWeekYear(),1,4)}function t5(){var e=this.localeData()._week;return fi(this.year(),e.dow,e.doy)}function n5(){var e=this.localeData()._week;return fi(this.weekYear(),e.dow,e.doy)}function PC(e,t,n,r,i){var s;return e==null?Yl(this,r,i).year:(s=fi(e,r,i),t>s&&(t=s),r5.call(this,e,t,n,r,i))}function r5(e,t,n,r,i){var s=hC(e,t,n,r,i),o=Hl(s.year,0,s.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}he("Q",0,"Qo","quarter");dn("quarter","Q");fn("quarter",7);se("Q",rC);st("Q",function(e,t){t[oi]=(je(e)-1)*3});function i5(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}he("D",["DD",2],"Do","date");dn("date","D");fn("date",9);se("D",yt);se("DD",yt,Wn);se("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});st(["D","DD"],Pr);st("Do",function(e,t){t[Pr]=je(e.match(yt)[0])});var MC=ba("Date",!0);he("DDD",["DDDD",3],"DDDo","dayOfYear");dn("dayOfYear","DDD");fn("dayOfYear",4);se("DDD",Wf);se("DDDD",iC);st(["DDD","DDDD"],function(e,t,n){n._dayOfYear=je(e)});function s5(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}he("m",["mm",2],0,"minute");dn("minute","m");fn("minute",14);se("m",yt);se("mm",yt,Wn);st(["m","mm"],fr);var o5=ba("Minutes",!1);he("s",["ss",2],0,"second");dn("second","s");fn("second",15);se("s",yt);se("ss",yt,Wn);st(["s","ss"],ai);var a5=ba("Seconds",!1);he("S",0,0,function(){return~~(this.millisecond()/100)});he(0,["SS",2],0,function(){return~~(this.millisecond()/10)});he(0,["SSS",3],0,"millisecond");he(0,["SSSS",4],0,function(){return this.millisecond()*10});he(0,["SSSSS",5],0,function(){return this.millisecond()*100});he(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});he(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});he(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});he(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});dn("millisecond","ms");fn("millisecond",16);se("S",Wf,rC);se("SS",Wf,Wn);se("SSS",Wf,iC);var ji,FC;for(ji="SSSS";ji.length<=9;ji+="S")se(ji,Ca);function l5(e,t){t[Cs]=je(("0."+e)*1e3)}for(ji="S";ji.length<=9;ji+="S")st(ji,l5);FC=ba("Milliseconds",!1);he("z",0,0,"zoneAbbr");he("zz",0,0,"zoneName");function c5(){return this._isUTC?"UTC":""}function u5(){return this._isUTC?"Coordinated Universal Time":""}var V=Cc.prototype;V.add=n3;V.calendar=c3;V.clone=u3;V.diff=y3;V.endOf=T3;V.format=x3;V.from=S3;V.fromNow=k3;V.to=b3;V.toNow=C3;V.get=fL;V.invalidAt=F3;V.isAfter=d3;V.isBefore=f3;V.isBetween=h3;V.isSame=p3;V.isSameOrAfter=m3;V.isSameOrBefore=g3;V.isValid=P3;V.lang=DC;V.locale=IC;V.localeData=NC;V.max=Pz;V.min=Oz;V.parsingFlags=M3;V.set=hL;V.startOf=E3;V.subtract=r3;V.toArray=R3;V.toObject=A3;V.toDate=N3;V.toISOString=_3;V.inspect=w3;typeof Symbol<"u"&&Symbol.for!=null&&(V[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});V.toJSON=O3;V.toString=v3;V.unix=D3;V.valueOf=I3;V.creationData=L3;V.eraName=U3;V.eraNarrow=B3;V.eraAbbr=V3;V.eraYear=W3;V.year=fC;V.isLeapYear=AL;V.weekYear=Q3;V.isoWeekYear=X3;V.quarter=V.quarters=i5;V.month=uC;V.daysInMonth=DL;V.week=V.weeks=zL;V.isoWeek=V.isoWeeks=jL;V.weeksInYear=t5;V.weeksInWeekYear=n5;V.isoWeeksInYear=J3;V.isoWeeksInISOWeekYear=e5;V.date=MC;V.day=V.days=XL;V.weekday=JL;V.isoWeekday=ez;V.dayOfYear=s5;V.hour=V.hours=az;V.minute=V.minutes=o5;V.second=V.seconds=a5;V.millisecond=V.milliseconds=FC;V.utcOffset=Vz;V.utc=Hz;V.local=Yz;V.parseZone=Gz;V.hasAlignedHourOffset=Zz;V.isDST=Kz;V.isLocal=Qz;V.isUtcOffset=Xz;V.isUtc=bC;V.isUTC=bC;V.zoneAbbr=c5;V.zoneName=u5;V.dates=nr("dates accessor is deprecated. Use date instead.",MC);V.months=nr("months accessor is deprecated. Use month instead",uC);V.years=nr("years accessor is deprecated. Use year instead",fC);V.zone=nr("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Wz);V.isDSTShifted=nr("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",qz);function d5(e){return gt(e*1e3)}function f5(){return gt.apply(null,arguments).parseZone()}function LC(e){return e}var Qe=vv.prototype;Qe.calendar=XF;Qe.longDateFormat=nL;Qe.invalidDate=iL;Qe.ordinal=aL;Qe.preparse=LC;Qe.postformat=LC;Qe.relativeTime=cL;Qe.pastFuture=uL;Qe.set=qF;Qe.eras=z3;Qe.erasParse=j3;Qe.erasConvertYear=$3;Qe.erasAbbrRegex=Y3;Qe.erasNameRegex=H3;Qe.erasNarrowRegex=G3;Qe.months=CL;Qe.monthsShort=EL;Qe.monthsParse=IL;Qe.monthsRegex=RL;Qe.monthsShortRegex=NL;Qe.week=PL;Qe.firstDayOfYear=LL;Qe.firstDayOfWeek=FL;Qe.weekdays=GL;Qe.weekdaysMin=KL;Qe.weekdaysShort=ZL;Qe.weekdaysParse=QL;Qe.weekdaysRegex=tz;Qe.weekdaysShortRegex=nz;Qe.weekdaysMinRegex=rz;Qe.isPM=sz;Qe.meridiem=lz;function Rd(e,t,n,r){var i=bi(),s=Yr().set(r,t);return i[n](s,e)}function zC(e,t,n){if(wi(e)&&(t=e,e=void 0),e=e||"",t!=null)return Rd(e,t,n,"month");var r,i=[];for(r=0;r<12;r++)i[r]=Rd(e,r,n,"month");return i}function Pv(e,t,n,r){typeof e=="boolean"?(wi(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,wi(t)&&(n=t,t=void 0),t=t||"");var i=bi(),s=e?i._week.dow:0,o,a=[];if(n!=null)return Rd(t,(n+s)%7,r,"day");for(o=0;o<7;o++)a[o]=Rd(t,(o+s)%7,r,"day");return a}function h5(e,t){return zC(e,t,"months")}function p5(e,t){return zC(e,t,"monthsShort")}function m5(e,t,n){return Pv(e,t,n,"weekdays")}function g5(e,t,n){return Pv(e,t,n,"weekdaysShort")}function y5(e,t,n){return Pv(e,t,n,"weekdaysMin")}Ji("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=je(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});Q.lang=nr("moment.lang is deprecated. Use moment.locale instead.",Ji);Q.langData=nr("moment.langData is deprecated. Use moment.localeData instead.",bi);var Xr=Math.abs;function v5(){var e=this._data;return this._milliseconds=Xr(this._milliseconds),this._days=Xr(this._days),this._months=Xr(this._months),e.milliseconds=Xr(e.milliseconds),e.seconds=Xr(e.seconds),e.minutes=Xr(e.minutes),e.hours=Xr(e.hours),e.months=Xr(e.months),e.years=Xr(e.years),this}function jC(e,t,n,r){var i=br(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble()}function _5(e,t){return jC(this,e,t,1)}function w5(e,t){return jC(this,e,t,-1)}function zw(e){return e<0?Math.floor(e):Math.ceil(e)}function x5(){var e=this._milliseconds,t=this._days,n=this._months,r=this._data,i,s,o,a,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=zw(cg(n)+t)*864e5,t=0,n=0),r.milliseconds=e%1e3,i=Gn(e/1e3),r.seconds=i%60,s=Gn(i/60),r.minutes=s%60,o=Gn(s/60),r.hours=o%24,t+=Gn(o/24),l=Gn($C(t)),n+=l,t-=zw(cg(l)),a=Gn(n/12),n%=12,r.days=t,r.months=n,r.years=a,this}function $C(e){return e*4800/146097}function cg(e){return e*146097/4800}function S5(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if(e=rr(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+r/864e5,n=this._months+$C(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(cg(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return t*24+r/36e5;case"minute":return t*1440+r/6e4;case"second":return t*86400+r/1e3;case"millisecond":return Math.floor(t*864e5)+r;default:throw new Error("Unknown unit "+e)}}function k5(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+je(this._months/12)*31536e6:NaN}function Ci(e){return function(){return this.as(e)}}var b5=Ci("ms"),C5=Ci("s"),E5=Ci("m"),T5=Ci("h"),I5=Ci("d"),D5=Ci("w"),N5=Ci("M"),R5=Ci("Q"),A5=Ci("y");function O5(){return br(this)}function P5(e){return e=rr(e),this.isValid()?this[e+"s"]():NaN}function to(e){return function(){return this.isValid()?this._data[e]:NaN}}var M5=to("milliseconds"),F5=to("seconds"),L5=to("minutes"),z5=to("hours"),j5=to("days"),$5=to("months"),U5=to("years");function B5(){return Gn(this.days()/7)}var ti=Math.round,Ao={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function V5(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r)}function W5(e,t,n,r){var i=br(e).abs(),s=ti(i.as("s")),o=ti(i.as("m")),a=ti(i.as("h")),l=ti(i.as("d")),c=ti(i.as("M")),u=ti(i.as("w")),d=ti(i.as("y")),f=s<=n.ss&&["s",s]||s<n.s&&["ss",s]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(f=f||u<=1&&["w"]||u<n.w&&["ww",u]),f=f||c<=1&&["M"]||c<n.M&&["MM",c]||d<=1&&["y"]||["yy",d],f[2]=t,f[3]=+e>0,f[4]=r,V5.apply(null,f)}function H5(e){return e===void 0?ti:typeof e=="function"?(ti=e,!0):!1}function Y5(e,t){return Ao[e]===void 0?!1:t===void 0?Ao[e]:(Ao[e]=t,e==="s"&&(Ao.ss=t-1),!0)}function G5(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,r=Ao,i,s;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(r=Object.assign({},Ao,t),t.s!=null&&t.ss==null&&(r.ss=t.s-1)),i=this.localeData(),s=W5(this,!n,r,i),n&&(s=i.pastFuture(+this,s)),i.postformat(s)}var hp=Math.abs;function lo(e){return(e>0)-(e<0)||+e}function Xf(){if(!this.isValid())return this.localeData().invalidDate();var e=hp(this._milliseconds)/1e3,t=hp(this._days),n=hp(this._months),r,i,s,o,a=this.asSeconds(),l,c,u,d;return a?(r=Gn(e/60),i=Gn(r/60),e%=60,r%=60,s=Gn(n/12),n%=12,o=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=a<0?"-":"",c=lo(this._months)!==lo(a)?"-":"",u=lo(this._days)!==lo(a)?"-":"",d=lo(this._milliseconds)!==lo(a)?"-":"",l+"P"+(s?c+s+"Y":"")+(n?c+n+"M":"")+(t?u+t+"D":"")+(i||r||e?"T":"")+(i?d+i+"H":"")+(r?d+r+"M":"")+(e?d+o+"S":"")):"P0D"}var Ve=qf.prototype;Ve.isValid=jz;Ve.abs=v5;Ve.add=_5;Ve.subtract=w5;Ve.as=S5;Ve.asMilliseconds=b5;Ve.asSeconds=C5;Ve.asMinutes=E5;Ve.asHours=T5;Ve.asDays=I5;Ve.asWeeks=D5;Ve.asMonths=N5;Ve.asQuarters=R5;Ve.asYears=A5;Ve.valueOf=k5;Ve._bubble=x5;Ve.clone=O5;Ve.get=P5;Ve.milliseconds=M5;Ve.seconds=F5;Ve.minutes=L5;Ve.hours=z5;Ve.days=j5;Ve.weeks=B5;Ve.months=$5;Ve.years=U5;Ve.humanize=G5;Ve.toISOString=Xf;Ve.toString=Xf;Ve.toJSON=Xf;Ve.locale=IC;Ve.localeData=NC;Ve.toIsoString=nr("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Xf);Ve.lang=DC;he("X",0,0,"unix");he("x",0,0,"valueOf");se("x",Yf);se("X",mL);st("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});st("x",function(e,t,n){n._d=new Date(je(e))});//! moment.js
Q.version="2.29.4";ZF(gt);Q.fn=V;Q.min=Mz;Q.max=Fz;Q.now=Lz;Q.utc=Yr;Q.unix=d5;Q.months=h5;Q.isDate=bc;Q.locale=Ji;Q.invalid=Uf;Q.duration=br;Q.isMoment=Sr;Q.weekdays=m5;Q.parseZone=f5;Q.localeData=bi;Q.isDuration=xu;Q.monthsShort=p5;Q.weekdaysMin=y5;Q.defineLocale=Ev;Q.updateLocale=fz;Q.locales=hz;Q.weekdaysShort=g5;Q.normalizeUnits=rr;Q.relativeTimeRounding=H5;Q.relativeTimeThreshold=Y5;Q.calendarFormat=l3;Q.prototype=V;Q.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};const Z5=E.div`
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
`,K5=E.div`
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
`,q5=E.div`
    position:absolute;
    border-radius:8px;
    padding:20px;
    background: ${e=>e.theme.datePickerBg};
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    z-index:5;
    margin-top:10px;
    width:89%;
`,jw=E.div`
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
`,Q5=E.div`
    margin: 5px;
`,X5=E.div`
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
`;function J5({isSubmit:e,setIsSubmit:t,isDarkMode:n,invoiceData:r,isFormEdit:i,onChange:s,error:o}){const[a,l]=D.useState(!1),[c,u]=D.useState(new Date().getMonth()),[d,f]=D.useState(new Date().getFullYear()),[g,m]=D.useState(null);new Date().toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"});let p=D.useRef(null);function k(){l(!a)}function v(){c<11?u(S=>S+1):(u(0),f(S=>S+1))}function h(){c>0?u(S=>S-1):(u(11),f(S=>S-1))}function y(S){S.target.id==="day"&&(m(new Date(d,c,S.target.getAttribute("data-day"))),s(Q(new Date(d,c,S.target.getAttribute("data-day"))).format("YYYY-MM-DD")))}return D.useEffect(()=>{let S=C=>{var N;(N=p.current)!=null&&N.contains(C.target)||l(!1)};document.addEventListener("mousedown",S)}),D.useEffect(()=>{t(!1),m(null)},[e]),w(Zt,{theme:n?{datePickerHeaderBg:"#1E2139",datePickerBg:"#1E2139",datePickerBorder:"1px solid #252945",datePickerBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #1E2139",datePickerHeaderBorder:"1px solid #1E2139"}:{datePickerHeaderBg:"FFF",datePickerBg:"#FFF",datePickerBorder:"1px solid #DFE3FA",datePickerBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #DFE3FA",datePickerHeaderBorder:"1px solid #DFE3FA"},children:M(Z5,{role:"date-picker-container",className:o?"error":"",ref:p,children:[M(K5,{role:"date-picker-header",tabIndex:0,onClick:k,children:[i?g===null?w("p",{children:r.createdAt!=""?Q(r.createdAt).format("MMM DD YYYY"):"Select a date"}):w("p",{children:Q(g).format("MMM DD YYYY")}):g===null?w("p",{children:"Select a date"}):w("p",{children:Q(g).format("MMM DD YYYY")}),w(Vr,{src:"\\assets\\icon-calendar.svg"})]}),a&&M(q5,{role:"date-picker-calendar",className:o?"error":"",children:[M(jw,{children:[w("img",{src:"\\assets\\icon-arrow-left.svg",onClick:h,tabIndex:0,role:"prev-month"}),w(jw,{children:HF[c]+" "+d}),w("img",{src:"\\assets\\icon-arrow-right.svg",onClick:v,tabIndex:0,role:"next-month"})]}),w(Q5,{children:w(X5,{children:GF(1,YF(d,c)+1).map(S=>w("p",{onClick:y,id:"day","data-day":S,tabIndex:0,className:(g==null?void 0:g.getTime())===new Date(d,c,S).getTime()?"active":"",role:S,children:S},S))})})]})]})})}let nu;const e4=new Uint8Array(16);function t4(){if(!nu&&(nu=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!nu))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nu(e4)}const qt=[];for(let e=0;e<256;++e)qt.push((e+256).toString(16).slice(1));function n4(e,t=0){return(qt[e[t+0]]+qt[e[t+1]]+qt[e[t+2]]+qt[e[t+3]]+"-"+qt[e[t+4]]+qt[e[t+5]]+"-"+qt[e[t+6]]+qt[e[t+7]]+"-"+qt[e[t+8]]+qt[e[t+9]]+"-"+qt[e[t+10]]+qt[e[t+11]]+qt[e[t+12]]+qt[e[t+13]]+qt[e[t+14]]+qt[e[t+15]]).toLowerCase()}const r4=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$w={randomUUID:r4};function En(e,t,n){if($w.randomUUID&&!t&&!e)return $w.randomUUID();e=e||{};const r=e.random||(e.rng||t4)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){n=n||0;for(let i=0;i<16;++i)t[n+i]=r[i];return t}return n4(r)}const i4=E.div`
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
`,UC=E.div`
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
`,s4=E.div`
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
`;E.div`
    display:flex;
    align-items: flex-end;
    padding:10px;
`;E.input`
    cursor: pointer;
    margin-right:10px;
    &:checked{
        accent-color:#9277FF;
    }
`;E.label`
    cursor: pointer;
`;const o4=E(Vr)`
    ${UC}:hover & {
        transform: rotate(180deg);
        transition:0.5s;
    }
    transform: rotate(0deg);
    transition:0.5s;
`,a4=E(Vr)`

`,l4=E.ul`
    background: transparent;
    box-sizing: border-box;
    font-weight: 500;
    font-size:0.92rem;
    border-radius:10px;
    padding:20px;
    background: ${e=>e.theme.dropdownBg};
`,ru=E.li`
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
`;function c4({onChange:e,error:t,isSubmit:n,setIsSubmit:r,isDarkMode:i,invoiceData:s,isFormEdit:o}){const[a,l]=D.useState(!1),[c,u]=D.useState("Select The Day");let d=D.useRef(null);function f(){l(!a)}const g=k=>{k.key==="Enter"&&l(!0)};return D.useEffect(()=>{let k=v=>{var h;(h=d.current)!=null&&h.contains(v.target)||l(!1)};document.addEventListener("mousedown",k)}),D.useEffect(()=>{r(!1),u("Select The Day")},[n]),w(Zt,{theme:i?{dropdownHeaderBg:"#1E2139",dropdownBg:"#252945",dropdownBorder:"1px solid #252945",dropdownBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #1E2139",dropdownHeaderBorder:"1px solid #1E2139"}:{dropdownHeaderBg:"FFF",dropdownBg:"#FFF",dropdownBorder:"1px solid #DFE3FA",dropdownBorderHover:"1px solid #7C5DFA",listBorder:"1px solid #DFE3FA",dropdownHeaderBorder:"1px solid #DFE3FA"},children:M(i4,{className:t?"error":"",ref:d,children:[M(UC,{role:"form-dropdown",tabIndex:0,onKeyDown:g,onClick:f,children:[o?c!="Select The Day"?w(dt,{children:c}):w(dt,{children:s.paymentTerms!=""?"Net "+s.paymentTerms+(s.paymentTerms===1?" Day":" Days"):"Select The Day"}):w(dt,{children:c}),a?w(a4,{src:"\\assets\\icon-arrow-up.svg"}):w(o4,{src:"\\assets\\icon-arrow-down.svg"})]}),a&&w(s4,{className:t?"error":"",children:M(l4,{children:[w(ru,{onClick:()=>{l(!1),u("Net 1 Day"),e(1)},role:"Net 1",tabIndex:0,children:"Net 1 Day"},En()),w(ru,{onClick:()=>{l(!1),u("Net 7 Day"),e(7)},role:"Net 7",tabIndex:0,children:"Net 7 Day"},En()),w(ru,{onClick:()=>{l(!1),u("Net 14 Day"),e(14)},role:"Net 14",tabIndex:0,children:"Net 14 Day"},En()),w(ru,{onClick:()=>{l(!1),u("Net 30 Day"),e(30)},role:"Net 30",tabIndex:0,children:"Net 30 Day"},En())]})})]})})}var Ze;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const s={};for(const o of i)s[o]=o;return s},e.getValidEnumValues=i=>{const s=e.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),o={};for(const a of s)o[a]=i[a];return e.objectValues(o)},e.objectValues=i=>e.objectKeys(i).map(function(s){return i[s]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const s=[];for(const o in i)Object.prototype.hasOwnProperty.call(i,o)&&s.push(o);return s},e.find=(i,s)=>{for(const o of i)if(s(o))return o},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,s=" | "){return i.map(o=>typeof o=="string"?`'${o}'`:o).join(s)}e.joinValues=r,e.jsonStringifyReplacer=(i,s)=>typeof s=="bigint"?s.toString():s})(Ze||(Ze={}));var ug;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(ug||(ug={}));const re=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Oi=e=>{switch(typeof e){case"undefined":return re.undefined;case"string":return re.string;case"number":return isNaN(e)?re.nan:re.number;case"boolean":return re.boolean;case"function":return re.function;case"bigint":return re.bigint;case"symbol":return re.symbol;case"object":return Array.isArray(e)?re.array:e===null?re.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?re.promise:typeof Map<"u"&&e instanceof Map?re.map:typeof Set<"u"&&e instanceof Set?re.set:typeof Date<"u"&&e instanceof Date?re.date:re.object;default:return re.unknown}},Y=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),u4=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class vr extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(s){return s.message},r={_errors:[]},i=s=>{for(const o of s.issues)if(o.code==="invalid_union")o.unionErrors.map(i);else if(o.code==="invalid_return_type")i(o.returnTypeError);else if(o.code==="invalid_arguments")i(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let a=r,l=0;for(;l<o.path.length;){const c=o.path[l];l===o.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(o))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}vr.create=e=>new vr(e);const Zl=(e,t)=>{let n;switch(e.code){case Y.invalid_type:e.received===re.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case Y.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ze.jsonStringifyReplacer)}`;break;case Y.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ze.joinValues(e.keys,", ")}`;break;case Y.invalid_union:n="Invalid input";break;case Y.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;break;case Y.invalid_enum_value:n=`Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;break;case Y.invalid_arguments:n="Invalid function arguments";break;case Y.invalid_return_type:n="Invalid function return type";break;case Y.invalid_date:n="Invalid date";break;case Y.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ze.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case Y.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case Y.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case Y.custom:n="Invalid input";break;case Y.invalid_intersection_types:n="Intersection results could not be merged";break;case Y.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Y.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ze.assertNever(e)}return{message:n}};let BC=Zl;function d4(e){BC=e}function Ad(){return BC}const Od=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,s=[...n,...i.path||[]],o={...i,path:s};let a="";const l=r.filter(c=>!!c).slice().reverse();for(const c of l)a=c(o,{data:t,defaultError:a}).message;return{...i,path:s,message:i.message||a}},f4=[];function ie(e,t){const n=Od({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Ad(),Zl].filter(r=>!!r)});e.common.issues.push(n)}class un{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return Ie;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return un.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:s,value:o}=i;if(s.status==="aborted"||o.status==="aborted")return Ie;s.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),(typeof o.value<"u"||i.alwaysSet)&&(r[s.value]=o.value)}return{status:t.value,value:r}}}const Ie=Object.freeze({status:"aborted"}),VC=e=>({status:"dirty",value:e}),wn=e=>({status:"valid",value:e}),dg=e=>e.status==="aborted",fg=e=>e.status==="dirty",Pd=e=>e.status==="valid",Md=e=>typeof Promise<"u"&&e instanceof Promise;var ve;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(ve||(ve={}));class Ur{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Uw=(e,t)=>{if(Pd(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new vr(e.common.issues);return this._error=n,this._error}}};function Ae(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(o,a)=>o.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class Fe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Oi(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Oi(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new un,ctx:{common:t.parent.common,data:t.data,parsedType:Oi(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Md(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Oi(t)},s=this._parseSync({data:t,path:i.path,parent:i});return Uw(i,s)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Oi(t)},i=this._parse({data:t,path:r.path,parent:r}),s=await(Md(i)?i:Promise.resolve(i));return Uw(r,s)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,s)=>{const o=t(i),a=()=>s.addIssue({code:Y.custom,...r(i)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(a(),!1)):o?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new kr({schema:this,typeName:be.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return hi.create(this,this._def)}nullable(){return Hs.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return _r.create(this,this._def)}promise(){return ha.create(this,this._def)}or(t){return Xl.create([this,t],this._def)}and(t){return Jl.create(this,t,this._def)}transform(t){return new kr({...Ae(this._def),schema:this,typeName:be.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ic({...Ae(this._def),innerType:this,defaultValue:n,typeName:be.ZodDefault})}brand(){return new HC({typeName:be.ZodBranded,type:this,...Ae(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new jd({...Ae(this._def),innerType:this,catchValue:n,typeName:be.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Ic.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const h4=/^c[^\s-]{8,}$/i,p4=/^[a-z][a-z0-9]*$/,m4=/[0-9A-HJKMNP-TV-Z]{26}/,g4=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,y4=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,v4=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,_4=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,w4=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,x4=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function S4(e,t){return!!((t==="v4"||!t)&&_4.test(e)||(t==="v6"||!t)&&w4.test(e))}class hr extends Fe{constructor(){super(...arguments),this._regex=(t,n,r)=>this.refinement(i=>t.test(i),{validation:n,code:Y.invalid_string,...ve.errToObj(r)}),this.nonempty=t=>this.min(1,ve.errToObj(t)),this.trim=()=>new hr({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new hr({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new hr({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==re.string){const s=this._getOrReturnCtx(t);return ie(s,{code:Y.invalid_type,expected:re.string,received:s.parsedType}),Ie}const r=new un;let i;for(const s of this._def.checks)if(s.kind==="min")t.data.length<s.value&&(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="max")t.data.length>s.value&&(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),r.dirty());else if(s.kind==="length"){const o=t.data.length>s.value,a=t.data.length<s.value;(o||a)&&(i=this._getOrReturnCtx(t,i),o?ie(i,{code:Y.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):a&&ie(i,{code:Y.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),r.dirty())}else if(s.kind==="email")y4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"email",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="emoji")v4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"emoji",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="uuid")g4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"uuid",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid")h4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"cuid",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="cuid2")p4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"cuid2",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="ulid")m4.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"ulid",code:Y.invalid_string,message:s.message}),r.dirty());else if(s.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),ie(i,{validation:"url",code:Y.invalid_string,message:s.message}),r.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"regex",code:Y.invalid_string,message:s.message}),r.dirty())):s.kind==="trim"?t.data=t.data.trim():s.kind==="includes"?t.data.includes(s.value,s.position)||(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),r.dirty()):s.kind==="toLowerCase"?t.data=t.data.toLowerCase():s.kind==="toUpperCase"?t.data=t.data.toUpperCase():s.kind==="startsWith"?t.data.startsWith(s.value)||(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.invalid_string,validation:{startsWith:s.value},message:s.message}),r.dirty()):s.kind==="endsWith"?t.data.endsWith(s.value)||(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.invalid_string,validation:{endsWith:s.value},message:s.message}),r.dirty()):s.kind==="datetime"?x4(s).test(t.data)||(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.invalid_string,validation:"datetime",message:s.message}),r.dirty()):s.kind==="ip"?S4(t.data,s.version)||(i=this._getOrReturnCtx(t,i),ie(i,{validation:"ip",code:Y.invalid_string,message:s.message}),r.dirty()):Ze.assertNever(s);return{status:r.value,value:t.data}}_addCheck(t){return new hr({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ve.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ve.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ve.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ve.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ve.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ve.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ve.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ve.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...ve.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ve.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...ve.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ve.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ve.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ve.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ve.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ve.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}hr.create=e=>{var t;return new hr({checks:[],typeName:be.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ae(e)})};function k4(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,s=parseInt(e.toFixed(i).replace(".","")),o=parseInt(t.toFixed(i).replace(".",""));return s%o/Math.pow(10,i)}class ss extends Fe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==re.number){const s=this._getOrReturnCtx(t);return ie(s,{code:Y.invalid_type,expected:re.number,received:s.parsedType}),Ie}let r;const i=new un;for(const s of this._def.checks)s.kind==="int"?Ze.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.invalid_type,expected:"integer",received:"float",message:s.message}),i.dirty()):s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),i.dirty()):s.kind==="multipleOf"?k4(t.data,s.value)!==0&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):s.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.not_finite,message:s.message}),i.dirty()):Ze.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ve.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ve.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ve.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ve.toString(n))}setLimit(t,n,r,i){return new ss({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:ve.toString(i)}]})}_addCheck(t){return new ss({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ve.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ve.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ve.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ve.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ve.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ve.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ve.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ve.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ve.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ze.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}ss.create=e=>new ss({checks:[],typeName:be.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Ae(e)});class os extends Fe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==re.bigint){const s=this._getOrReturnCtx(t);return ie(s,{code:Y.invalid_type,expected:re.bigint,received:s.parsedType}),Ie}let r;const i=new un;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?t.data<s.value:t.data<=s.value)&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="max"?(s.inclusive?t.data>s.value:t.data>=s.value)&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),i.dirty()):s.kind==="multipleOf"?t.data%s.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),ie(r,{code:Y.not_multiple_of,multipleOf:s.value,message:s.message}),i.dirty()):Ze.assertNever(s);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ve.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ve.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ve.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ve.toString(n))}setLimit(t,n,r,i){return new os({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:ve.toString(i)}]})}_addCheck(t){return new os({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ve.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ve.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ve.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ve.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ve.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}os.create=e=>{var t;return new os({checks:[],typeName:be.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ae(e)})};class Kl extends Fe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==re.boolean){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.boolean,received:r.parsedType}),Ie}return wn(t.data)}}Kl.create=e=>new Kl({typeName:be.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Ae(e)});class Vs extends Fe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==re.date){const s=this._getOrReturnCtx(t);return ie(s,{code:Y.invalid_type,expected:re.date,received:s.parsedType}),Ie}if(isNaN(t.data.getTime())){const s=this._getOrReturnCtx(t);return ie(s,{code:Y.invalid_date}),Ie}const r=new un;let i;for(const s of this._def.checks)s.kind==="min"?t.data.getTime()<s.value&&(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),r.dirty()):s.kind==="max"?t.data.getTime()>s.value&&(i=this._getOrReturnCtx(t,i),ie(i,{code:Y.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),r.dirty()):Ze.assertNever(s);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new Vs({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ve.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ve.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}Vs.create=e=>new Vs({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:be.ZodDate,...Ae(e)});class Fd extends Fe{_parse(t){if(this._getType(t)!==re.symbol){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.symbol,received:r.parsedType}),Ie}return wn(t.data)}}Fd.create=e=>new Fd({typeName:be.ZodSymbol,...Ae(e)});class ql extends Fe{_parse(t){if(this._getType(t)!==re.undefined){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.undefined,received:r.parsedType}),Ie}return wn(t.data)}}ql.create=e=>new ql({typeName:be.ZodUndefined,...Ae(e)});class Ql extends Fe{_parse(t){if(this._getType(t)!==re.null){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.null,received:r.parsedType}),Ie}return wn(t.data)}}Ql.create=e=>new Ql({typeName:be.ZodNull,...Ae(e)});class fa extends Fe{constructor(){super(...arguments),this._any=!0}_parse(t){return wn(t.data)}}fa.create=e=>new fa({typeName:be.ZodAny,...Ae(e)});class Ns extends Fe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return wn(t.data)}}Ns.create=e=>new Ns({typeName:be.ZodUnknown,...Ae(e)});class xi extends Fe{_parse(t){const n=this._getOrReturnCtx(t);return ie(n,{code:Y.invalid_type,expected:re.never,received:n.parsedType}),Ie}}xi.create=e=>new xi({typeName:be.ZodNever,...Ae(e)});class Ld extends Fe{_parse(t){if(this._getType(t)!==re.undefined){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.void,received:r.parsedType}),Ie}return wn(t.data)}}Ld.create=e=>new Ld({typeName:be.ZodVoid,...Ae(e)});class _r extends Fe{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==re.array)return ie(n,{code:Y.invalid_type,expected:re.array,received:n.parsedType}),Ie;if(i.exactLength!==null){const o=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(o||a)&&(ie(n,{code:o?Y.too_big:Y.too_small,minimum:a?i.exactLength.value:void 0,maximum:o?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(ie(n,{code:Y.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(ie(n,{code:Y.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,a)=>i.type._parseAsync(new Ur(n,o,n.path,a)))).then(o=>un.mergeArray(r,o));const s=[...n.data].map((o,a)=>i.type._parseSync(new Ur(n,o,n.path,a)));return un.mergeArray(r,s)}get element(){return this._def.type}min(t,n){return new _r({...this._def,minLength:{value:t,message:ve.toString(n)}})}max(t,n){return new _r({...this._def,maxLength:{value:t,message:ve.toString(n)}})}length(t,n){return new _r({...this._def,exactLength:{value:t,message:ve.toString(n)}})}nonempty(t){return this.min(1,t)}}_r.create=(e,t)=>new _r({type:e,minLength:null,maxLength:null,exactLength:null,typeName:be.ZodArray,...Ae(t)});function ho(e){if(e instanceof wt){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=hi.create(ho(r))}return new wt({...e._def,shape:()=>t})}else return e instanceof _r?new _r({...e._def,type:ho(e.element)}):e instanceof hi?hi.create(ho(e.unwrap())):e instanceof Hs?Hs.create(ho(e.unwrap())):e instanceof Br?Br.create(e.items.map(t=>ho(t))):e}class wt extends Fe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ze.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==re.object){const c=this._getOrReturnCtx(t);return ie(c,{code:Y.invalid_type,expected:re.object,received:c.parsedType}),Ie}const{status:r,ctx:i}=this._processInputParams(t),{shape:s,keys:o}=this._getCached(),a=[];if(!(this._def.catchall instanceof xi&&this._def.unknownKeys==="strip"))for(const c in i.data)o.includes(c)||a.push(c);const l=[];for(const c of o){const u=s[c],d=i.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new Ur(i,d,i.path,c)),alwaysSet:c in i.data})}if(this._def.catchall instanceof xi){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:i.data[u]}});else if(c==="strict")a.length>0&&(ie(i,{code:Y.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of a){const d=i.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new Ur(i,d,i.path,u)),alwaysSet:u in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const d=await u.key;c.push({key:d,value:await u.value,alwaysSet:u.alwaysSet})}return c}).then(c=>un.mergeObjectSync(r,c)):un.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return ve.errToObj,new wt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,s,o,a;const l=(o=(s=(i=this._def).errorMap)===null||s===void 0?void 0:s.call(i,n,r).message)!==null&&o!==void 0?o:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=ve.errToObj(t).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new wt({...this._def,unknownKeys:"strip"})}passthrough(){return new wt({...this._def,unknownKeys:"passthrough"})}extend(t){return new wt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new wt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:be.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new wt({...this._def,catchall:t})}pick(t){const n={};return Ze.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new wt({...this._def,shape:()=>n})}omit(t){const n={};return Ze.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new wt({...this._def,shape:()=>n})}deepPartial(){return ho(this)}partial(t){const n={};return Ze.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new wt({...this._def,shape:()=>n})}required(t){const n={};return Ze.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let s=this.shape[r];for(;s instanceof hi;)s=s._def.innerType;n[r]=s}}),new wt({...this._def,shape:()=>n})}keyof(){return WC(Ze.objectKeys(this.shape))}}wt.create=(e,t)=>new wt({shape:()=>e,unknownKeys:"strip",catchall:xi.create(),typeName:be.ZodObject,...Ae(t)});wt.strictCreate=(e,t)=>new wt({shape:()=>e,unknownKeys:"strict",catchall:xi.create(),typeName:be.ZodObject,...Ae(t)});wt.lazycreate=(e,t)=>new wt({shape:e,unknownKeys:"strip",catchall:xi.create(),typeName:be.ZodObject,...Ae(t)});class Xl extends Fe{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(s){for(const a of s)if(a.result.status==="valid")return a.result;for(const a of s)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const o=s.map(a=>new vr(a.ctx.common.issues));return ie(n,{code:Y.invalid_union,unionErrors:o}),Ie}if(n.common.async)return Promise.all(r.map(async s=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await s._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(i);{let s;const o=[];for(const l of r){const c={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:c}),c.common.issues.length&&o.push(c.common.issues)}if(s)return n.common.issues.push(...s.ctx.common.issues),s.result;const a=o.map(l=>new vr(l));return ie(n,{code:Y.invalid_union,unionErrors:a}),Ie}}get options(){return this._def.options}}Xl.create=(e,t)=>new Xl({options:e,typeName:be.ZodUnion,...Ae(t)});const ku=e=>e instanceof tc?ku(e.schema):e instanceof kr?ku(e.innerType()):e instanceof nc?[e.value]:e instanceof as?e.options:e instanceof rc?Object.keys(e.enum):e instanceof ic?ku(e._def.innerType):e instanceof ql?[void 0]:e instanceof Ql?[null]:null;class Jf extends Fe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.object)return ie(n,{code:Y.invalid_type,expected:re.object,received:n.parsedType}),Ie;const r=this.discriminator,i=n.data[r],s=this.optionsMap.get(i);return s?n.common.async?s._parseAsync({data:n.data,path:n.path,parent:n}):s._parseSync({data:n.data,path:n.path,parent:n}):(ie(n,{code:Y.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Ie)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const s of n){const o=ku(s.shape[t]);if(!o)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of o){if(i.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);i.set(a,s)}}return new Jf({typeName:be.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Ae(r)})}}function hg(e,t){const n=Oi(e),r=Oi(t);if(e===t)return{valid:!0,data:e};if(n===re.object&&r===re.object){const i=Ze.objectKeys(t),s=Ze.objectKeys(e).filter(a=>i.indexOf(a)!==-1),o={...e,...t};for(const a of s){const l=hg(e[a],t[a]);if(!l.valid)return{valid:!1};o[a]=l.data}return{valid:!0,data:o}}else if(n===re.array&&r===re.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let s=0;s<e.length;s++){const o=e[s],a=t[s],l=hg(o,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===re.date&&r===re.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Jl extends Fe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(s,o)=>{if(dg(s)||dg(o))return Ie;const a=hg(s.value,o.value);return a.valid?((fg(s)||fg(o))&&n.dirty(),{status:n.value,value:a.data}):(ie(r,{code:Y.invalid_intersection_types}),Ie)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([s,o])=>i(s,o)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Jl.create=(e,t,n)=>new Jl({left:e,right:t,typeName:be.ZodIntersection,...Ae(n)});class Br extends Fe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.array)return ie(r,{code:Y.invalid_type,expected:re.array,received:r.parsedType}),Ie;if(r.data.length<this._def.items.length)return ie(r,{code:Y.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ie;!this._def.rest&&r.data.length>this._def.items.length&&(ie(r,{code:Y.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const s=[...r.data].map((o,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new Ur(r,o,r.path,a)):null}).filter(o=>!!o);return r.common.async?Promise.all(s).then(o=>un.mergeArray(n,o)):un.mergeArray(n,s)}get items(){return this._def.items}rest(t){return new Br({...this._def,rest:t})}}Br.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Br({items:e,typeName:be.ZodTuple,rest:null,...Ae(t)})};class ec extends Fe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.object)return ie(r,{code:Y.invalid_type,expected:re.object,received:r.parsedType}),Ie;const i=[],s=this._def.keyType,o=this._def.valueType;for(const a in r.data)i.push({key:s._parse(new Ur(r,a,r.path,a)),value:o._parse(new Ur(r,r.data[a],r.path,a))});return r.common.async?un.mergeObjectAsync(n,i):un.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Fe?new ec({keyType:t,valueType:n,typeName:be.ZodRecord,...Ae(r)}):new ec({keyType:hr.create(),valueType:t,typeName:be.ZodRecord,...Ae(n)})}}class zd extends Fe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.map)return ie(r,{code:Y.invalid_type,expected:re.map,received:r.parsedType}),Ie;const i=this._def.keyType,s=this._def.valueType,o=[...r.data.entries()].map(([a,l],c)=>({key:i._parse(new Ur(r,a,r.path,[c,"key"])),value:s._parse(new Ur(r,l,r.path,[c,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of o){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Ie;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of o){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Ie;(c.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(c.value,u.value)}return{status:n.value,value:a}}}}zd.create=(e,t,n)=>new zd({valueType:t,keyType:e,typeName:be.ZodMap,...Ae(n)});class Ws extends Fe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==re.set)return ie(r,{code:Y.invalid_type,expected:re.set,received:r.parsedType}),Ie;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(ie(r,{code:Y.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(ie(r,{code:Y.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const s=this._def.valueType;function o(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Ie;u.status==="dirty"&&n.dirty(),c.add(u.value)}return{status:n.value,value:c}}const a=[...r.data.values()].map((l,c)=>s._parse(new Ur(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>o(l)):o(a)}min(t,n){return new Ws({...this._def,minSize:{value:t,message:ve.toString(n)}})}max(t,n){return new Ws({...this._def,maxSize:{value:t,message:ve.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Ws.create=(e,t)=>new Ws({valueType:e,minSize:null,maxSize:null,typeName:be.ZodSet,...Ae(t)});class Zo extends Fe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.function)return ie(n,{code:Y.invalid_type,expected:re.function,received:n.parsedType}),Ie;function r(a,l){return Od({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ad(),Zl].filter(c=>!!c),issueData:{code:Y.invalid_arguments,argumentsError:l}})}function i(a,l){return Od({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ad(),Zl].filter(c=>!!c),issueData:{code:Y.invalid_return_type,returnTypeError:l}})}const s={errorMap:n.common.contextualErrorMap},o=n.data;return this._def.returns instanceof ha?wn(async(...a)=>{const l=new vr([]),c=await this._def.args.parseAsync(a,s).catch(f=>{throw l.addIssue(r(a,f)),l}),u=await o(...c);return await this._def.returns._def.type.parseAsync(u,s).catch(f=>{throw l.addIssue(i(u,f)),l})}):wn((...a)=>{const l=this._def.args.safeParse(a,s);if(!l.success)throw new vr([r(a,l.error)]);const c=o(...l.data),u=this._def.returns.safeParse(c,s);if(!u.success)throw new vr([i(c,u.error)]);return u.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Zo({...this._def,args:Br.create(t).rest(Ns.create())})}returns(t){return new Zo({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Zo({args:t||Br.create([]).rest(Ns.create()),returns:n||Ns.create(),typeName:be.ZodFunction,...Ae(r)})}}class tc extends Fe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}tc.create=(e,t)=>new tc({getter:e,typeName:be.ZodLazy,...Ae(t)});class nc extends Fe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ie(n,{received:n.data,code:Y.invalid_literal,expected:this._def.value}),Ie}return{status:"valid",value:t.data}}get value(){return this._def.value}}nc.create=(e,t)=>new nc({value:e,typeName:be.ZodLiteral,...Ae(t)});function WC(e,t){return new as({values:e,typeName:be.ZodEnum,...Ae(t)})}class as extends Fe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return ie(n,{expected:Ze.joinValues(r),received:n.parsedType,code:Y.invalid_type}),Ie}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return ie(n,{received:n.data,code:Y.invalid_enum_value,options:r}),Ie}return wn(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return as.create(t)}exclude(t){return as.create(this.options.filter(n=>!t.includes(n)))}}as.create=WC;class rc extends Fe{_parse(t){const n=Ze.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==re.string&&r.parsedType!==re.number){const i=Ze.objectValues(n);return ie(r,{expected:Ze.joinValues(i),received:r.parsedType,code:Y.invalid_type}),Ie}if(n.indexOf(t.data)===-1){const i=Ze.objectValues(n);return ie(r,{received:r.data,code:Y.invalid_enum_value,options:i}),Ie}return wn(t.data)}get enum(){return this._def.values}}rc.create=(e,t)=>new rc({values:e,typeName:be.ZodNativeEnum,...Ae(t)});class ha extends Fe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==re.promise&&n.common.async===!1)return ie(n,{code:Y.invalid_type,expected:re.promise,received:n.parsedType}),Ie;const r=n.parsedType===re.promise?n.data:Promise.resolve(n.data);return wn(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ha.create=(e,t)=>new ha({type:e,typeName:be.ZodPromise,...Ae(t)});class kr extends Fe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===be.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const o=i.transform(r.data);return r.common.async?Promise.resolve(o).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:o,path:r.path,parent:r})}const s={addIssue:o=>{ie(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(s.addIssue=s.addIssue.bind(s),i.type==="refinement"){const o=a=>{const l=i.refinement(a,s);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Ie:(a.status==="dirty"&&n.dirty(),o(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Ie:(a.status==="dirty"&&n.dirty(),o(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Pd(o))return o;const a=i.transform(o.value,s);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Pd(o)?Promise.resolve(i.transform(o.value,s)).then(a=>({status:n.value,value:a})):o);Ze.assertNever(i)}}kr.create=(e,t,n)=>new kr({schema:e,typeName:be.ZodEffects,effect:t,...Ae(n)});kr.createWithPreprocess=(e,t,n)=>new kr({schema:t,effect:{type:"preprocess",transform:e},typeName:be.ZodEffects,...Ae(n)});class hi extends Fe{_parse(t){return this._getType(t)===re.undefined?wn(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}hi.create=(e,t)=>new hi({innerType:e,typeName:be.ZodOptional,...Ae(t)});class Hs extends Fe{_parse(t){return this._getType(t)===re.null?wn(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Hs.create=(e,t)=>new Hs({innerType:e,typeName:be.ZodNullable,...Ae(t)});class ic extends Fe{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===re.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ic.create=(e,t)=>new ic({innerType:e,typeName:be.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ae(t)});class jd extends Fe{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Md(i)?i.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new vr(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new vr(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}jd.create=(e,t)=>new jd({innerType:e,typeName:be.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ae(t)});class $d extends Fe{_parse(t){if(this._getType(t)!==re.nan){const r=this._getOrReturnCtx(t);return ie(r,{code:Y.invalid_type,expected:re.nan,received:r.parsedType}),Ie}return{status:"valid",value:t.data}}}$d.create=e=>new $d({typeName:be.ZodNaN,...Ae(e)});const b4=Symbol("zod_brand");class HC extends Fe{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Ic extends Fe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?Ie:s.status==="dirty"?(n.dirty(),VC(s.value)):this._def.out._parseAsync({data:s.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Ie:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new Ic({in:t,out:n,typeName:be.ZodPipeline})}}const YC=(e,t={},n)=>e?fa.create().superRefine((r,i)=>{var s,o;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(o=(s=a.fatal)!==null&&s!==void 0?s:n)!==null&&o!==void 0?o:!0,c=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...c,fatal:l})}}):fa.create(),C4={object:wt.lazycreate};var be;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(be||(be={}));const E4=(e,t={message:`Input not instance of ${e.name}`})=>YC(n=>n instanceof e,t),GC=hr.create,ZC=ss.create,T4=$d.create,I4=os.create,KC=Kl.create,D4=Vs.create,N4=Fd.create,R4=ql.create,A4=Ql.create,O4=fa.create,P4=Ns.create,M4=xi.create,F4=Ld.create,L4=_r.create,z4=wt.create,j4=wt.strictCreate,$4=Xl.create,U4=Jf.create,B4=Jl.create,V4=Br.create,W4=ec.create,H4=zd.create,Y4=Ws.create,G4=Zo.create,Z4=tc.create,K4=nc.create,q4=as.create,Q4=rc.create,X4=ha.create,Bw=kr.create,J4=hi.create,ej=Hs.create,tj=kr.createWithPreprocess,nj=Ic.create,rj=()=>GC().optional(),ij=()=>ZC().optional(),sj=()=>KC().optional(),oj={string:e=>hr.create({...e,coerce:!0}),number:e=>ss.create({...e,coerce:!0}),boolean:e=>Kl.create({...e,coerce:!0}),bigint:e=>os.create({...e,coerce:!0}),date:e=>Vs.create({...e,coerce:!0})},aj=Ie;var Ce=Object.freeze({__proto__:null,defaultErrorMap:Zl,setErrorMap:d4,getErrorMap:Ad,makeIssue:Od,EMPTY_PATH:f4,addIssueToContext:ie,ParseStatus:un,INVALID:Ie,DIRTY:VC,OK:wn,isAborted:dg,isDirty:fg,isValid:Pd,isAsync:Md,get util(){return Ze},get objectUtil(){return ug},ZodParsedType:re,getParsedType:Oi,ZodType:Fe,ZodString:hr,ZodNumber:ss,ZodBigInt:os,ZodBoolean:Kl,ZodDate:Vs,ZodSymbol:Fd,ZodUndefined:ql,ZodNull:Ql,ZodAny:fa,ZodUnknown:Ns,ZodNever:xi,ZodVoid:Ld,ZodArray:_r,ZodObject:wt,ZodUnion:Xl,ZodDiscriminatedUnion:Jf,ZodIntersection:Jl,ZodTuple:Br,ZodRecord:ec,ZodMap:zd,ZodSet:Ws,ZodFunction:Zo,ZodLazy:tc,ZodLiteral:nc,ZodEnum:as,ZodNativeEnum:rc,ZodPromise:ha,ZodEffects:kr,ZodTransformer:kr,ZodOptional:hi,ZodNullable:Hs,ZodDefault:ic,ZodCatch:jd,ZodNaN:$d,BRAND:b4,ZodBranded:HC,ZodPipeline:Ic,custom:YC,Schema:Fe,ZodSchema:Fe,late:C4,get ZodFirstPartyTypeKind(){return be},coerce:oj,any:O4,array:L4,bigint:I4,boolean:KC,date:D4,discriminatedUnion:U4,effect:Bw,enum:q4,function:G4,instanceof:E4,intersection:B4,lazy:Z4,literal:K4,map:H4,nan:T4,nativeEnum:Q4,never:M4,null:A4,nullable:ej,number:ZC,object:z4,oboolean:sj,onumber:ij,optional:J4,ostring:rj,pipeline:nj,preprocess:tj,promise:X4,record:W4,set:Y4,strictObject:j4,string:GC,symbol:N4,transformer:Bw,tuple:V4,undefined:R4,union:$4,unknown:P4,void:F4,NEVER:aj,ZodIssueCode:Y,quotelessJson:u4,ZodError:vr}),Vw=function(e,t,n){if(e&&"reportValidity"in e){var r=J(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},qC=function(e,t){var n=function(i){var s=t.fields[i];s&&s.ref&&"reportValidity"in s.ref?Vw(s.ref,i,e):s.refs&&s.refs.forEach(function(o){return Vw(o,i,e)})};for(var r in t.fields)n(r)},lj=function(e,t){t.shouldUseNativeValidation&&qC(e,t);var n={};for(var r in e){var i=J(t.fields,r);rt(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},cj=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,s=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[o]={message:a.message,type:a.code}}else n[o]={message:s,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(u){return u.errors.forEach(function(d){return e.push(d)})}),t){var l=n[o].types,c=l&&l[r.code];n[o]=Bb(o,t,n,i,c?[].concat(c,r.message):r.message)}e.shift()}return n},uj=function(e,t,n){return n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(c){return s.shouldUseNativeValidation&&qC({},s),{errors:{},values:n.raw?r:c}})}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(function(a){return a.errors!=null}(o))return{values:{},errors:lj(cj(o.errors,!s.shouldUseNativeValidation&&s.criteriaMode==="all"),s)};throw o}))}catch(o){return Promise.reject(o)}}};const dj=E.div`
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
`,fj=E.div`    
    display:none;
    @media screen and (max-width:425px) {
        display:flex;
        align-items:center;
        gap:10px;
        cursor:pointer;
    }
`,hj=E.form`
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
`,pj=E.div`
    margin: 20px 0;
`,mj=E.div`
    margin: 20px 0;
`,bn=E.div`
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
`,kn=E.p`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.1px;
    color: #ec5757;
    font-weight: 700;
`,It=E.label`
    display: block;
    margin: 20px 0;
    font-size: 13px;
    color: ${e=>e.theme.labelColor};
`,Ww=E(dt)`
    color: #7c5dfa;
`,gj=E(dt)`
    color: #777F98;
`,Hw=E.div`
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
`,Dt=E.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,yj=E.div`
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
`,Yw=E.div`
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
`,pp=E(bn)`
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

`,vj=E.div`
    margin:20px 0;
`,_j=E.div`
    margin-top:10px;
`,wj=E.div`
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
`,xj=E(tk)`
    width:100%;
    background: ${e=>e.theme.altBg};
    &:hover{
        background:${e=>e.theme.altBgHover}
    }
    border-radius: 24px;
    padding:20px;
    margin: 20px 0;
`;E.div`
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
`;const Gw=E.div`
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
`,Sj=E(hc)`
    background: ${e=>e.theme.discardBg};
    justify-self:start;
`,kj=E(tk)`
    background: ${e=>e.theme.altBg};
    &:hover{
        background:${e=>e.theme.altBgHover}
    }
    border-radius: 24px;
`,Zw=E(hc)`
    background: #373B53;
    &:hover{
        background:${e=>e.theme.draftBgHover}
    }
    border-radius: 24px;
    color:${e=>e.theme.draftColor};
`;E.div`
    display:flex;
    justify-content: space-between;
    margin:20px 0;
    gap:50px;
    div{
        width:100%;
    }
`;const bj={formBg:"#141625",inputBorder:"1px solid #252945",inputBg:"#1E2139",altBg:"#252945",altBgHover:"#2b2e47",inputBorderHover:"1px solid #2d3153",labelColor:"#DFE3FA",scrollBg:"#141625",discardBg:"#F9FAFE",draftBgHover:"#1E2139",draftColor:"#888EB0",inputColor:"#FFFFFF"},Cj={formBg:"#FFF",inputBorder:"1px solid #DFE3FA",inputBg:"#FFF",altBg:"#F9FAFE;",altBgHover:"#DFE3FA",inputBorderHover:"1px solid #7C5DFA",labelColor:"#7E88C3",scrollBg:"#FFFFFF",discardBg:"#F9FAFE",draftBgHover:"#0C0E16",draftColor:"#DFE3FA",inputColor:"#000000"};function Ej({setIsFormOpen:e,isFormOpen:t,isDarkMode:n,userFormData:r,setUserFormData:i,isFormEdit:s,setIsFormEdit:o,invoiceData:a,setInvoiceData:l}){var $,K,oe,te,O,U,X,le,R,Ee,Z,Ge,De,Pe,me,ot;const[c,u]=D.useState(!1),[d,f]=D.useState(""),[g,m]=D.useState(0);D.useState();const p=ya(),k=Ce.object({clientAddress:Ce.object({city:Ce.string().nonempty({message:"can't be empty"}),country:Ce.string().nonempty({message:"can't be empty"}),postCode:Ce.string().nonempty({message:"can't be empty"}),street:Ce.string().nonempty({message:"can't be empty"})}),clientEmail:Ce.string().nonempty({message:"can't be empty"}).email({message:"invalid email address"}),clientName:Ce.string().nonempty({message:"can't be empty"}),createdAt:Ce.string(),description:Ce.string().nonempty({message:"can't be empty"}),id:Ce.string(),items:Ce.array(Ce.object({name:Ce.string().nonempty(),price:Ce.any(),quantity:Ce.any(),total:Ce.number()})).min(1,{message:"an item must be added"}),paymentDue:Ce.string(),paymentTerms:Ce.number().min(1).max(30),senderAddress:Ce.object({city:Ce.string().nonempty({message:"can't be empty"}),country:Ce.string().nonempty({message:"can't be empty"}),postCode:Ce.string().nonempty({message:"can't be empty"}),street:Ce.string().nonempty({message:"can't be empty"})}),status:Ce.string(),total:Ce.number()}),v=Ce.object({description:Ce.string().optional(),clientName:Ce.string().optional(),clientEmail:Ce.string().optional(),status:Ce.string().optional(),senderAddress:Ce.object({street:Ce.string().optional(),city:Ce.string().optional(),postCode:Ce.string().optional(),country:Ce.string().optional()}).optional(),clientAddress:Ce.object({street:Ce.string().optional(),city:Ce.string().optional(),postCode:Ce.string().optional(),country:Ce.string().optional()}).optional(),items:Ce.array(Ce.object({name:Ce.string().optional(),quantity:Ce.any().optional(),price:Ce.any().optional(),total:Ce.number().optional()})).optional()}),{register:h,formState:{errors:y},handleSubmit:b,control:x,reset:S,watch:C,getValues:N,setValue:z}=WF({resolver:uj(k),defaultValues:s?a.items?{clientAddress:{city:a.clientAddress.city,country:a.clientAddress.country,postCode:a.clientAddress.postCode,street:a.clientAddress.street},clientEmail:a.clientEmail,clientName:a.clientName,createdAt:a.createdAt,description:a.description,id:a.id,items:a.items.map(xe=>({name:xe.name,price:xe.price,quantity:xe.quantity,total:xe.total})),paymentDue:a.paymentDue,paymentTerms:a.paymentTerms,senderAddress:{city:a.senderAddress.city,country:a.senderAddress.country,postCode:a.senderAddress.postCode,street:a.senderAddress.street},status:a.status,total:a.total}:{clientAddress:{city:a.clientAddress.city,country:a.clientAddress.country,postCode:a.clientAddress.postCode,street:a.clientAddress.street},clientEmail:a.clientEmail,clientName:a.clientName,createdAt:a.createdAt,description:a.description,id:a.id,items:[],paymentDue:a.paymentDue,paymentTerms:a.paymentTerms,senderAddress:{city:a.senderAddress.city,country:a.senderAddress.country,postCode:a.senderAddress.postCode,street:a.senderAddress.street},status:a.status,total:a.total}:void 0}),{fields:G,append:_e,remove:ee}=FF({name:"items",control:x});function ne(xe){const _=C(`items.${xe}.quantity`),T=C(`items.${xe}.price`),I=C(`items.${xe}.total`);let W;_!==void 0&&T!==void 0&&(W=_*T),I!=W&&!Number.isNaN(I)&&!Number.isNaN(W)&&z(`items.${xe}.total`,W)}D.useEffect(()=>{C("paymentDue")!=null&&C("paymentTerms")!=null&&f(Q(C("createdAt")).add(C("paymentTerms"),"days").format("YYYY-MM-DD"))},[C("createdAt"),C("paymentTerms")]),D.useEffect(()=>{z("paymentDue",d)},[d]);function pe(xe){e(!1),o(!1)}function Te(){z("status","draft");const xe=N();v.parse(xe),s?(i(xe),p(".."),u(!0),e(!1),S()):(i(xe),u(!0),e(!1),S(),l(void 0))}function Oe(xe){if(!s)i(xe),u(!0),e(!1),S();else{const T={...N(),status:"pending"};i(T),p(".."),u(!0),e(!1),S()}}function We(){let xe="ABCDEFGHIJKLMNOPQRSTUVWXYZ",_="0123456789",T="";for(let I=0;I<2;I++)T+=xe.charAt(Math.floor(Math.random()*xe.length));for(let I=0;I<4;I++)T+=_.charAt(Math.floor(Math.random()*_.length));return T}return D.useEffect(()=>{C("createdAt")!=null&&C("paymentDue")!=null&&(f(Q(C("createdAt")).add(C("paymentTerms"),"days").format("YYYY-MM-DD")),z("paymentDue",d))},[C("createdAt"),C("paymentTerms")]),D.useEffect(()=>{let xe=0;for(let _=0;_<G.length;_++){const T=Number(C(`items.${_}.quantity`))||0,I=Number(C(`items.${_}.price`))||0;xe+=T*I}m(xe)},[C(),G]),D.useEffect(()=>{z("total",g)},[g]),w(Zt,{theme:n?bj:Cj,children:w(dj,{children:M(hj,{onSubmit:b(Oe),children:[M(fj,{onClick:pe,children:[w(Vr,{src:"\\assets\\icon-arrow-left.svg"}),w(dt,{children:"Go Back"})]}),s?M(Al,{children:["Edit #",a.id]}):w(Al,{children:"New Invoice"}),M(pj,{children:[w(Ww,{children:"Bill From"}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"senderStreet",children:"Street Address"}),(($=y.senderAddress)==null?void 0:$.street)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(K=y.senderAddress)!=null&&K.street?"full error":"full",type:"text",id:"senderStreet",...h("senderAddress.street",{required:!0})})]}),M(Hw,{children:[M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"senderCity",children:"City"}),((oe=y.senderAddress)==null?void 0:oe.city)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(te=y.senderAddress)!=null&&te.city?"error":"",type:"text",id:"senderCity",...h("senderAddress.city",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"senderPostCode",children:"Post Code"}),((O=y.senderAddress)==null?void 0:O.postCode)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(U=y.senderAddress)!=null&&U.postCode?"error":"",type:"text",id:"senderPostCode",...h("senderAddress.postCode",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"senderCountry",children:"Country"}),((X=y.senderAddress)==null?void 0:X.country)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(le=y.senderAddress)!=null&&le.country?"error":"",type:"text",id:"senderCountry",...h("senderAddress.country",{required:!0})})]})]})]}),M(mj,{children:[w(Ww,{children:"Bill To"}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientName",children:"Client's Name"}),y.clientName&&w(kn,{children:"can't be empty"})]}),w("input",{className:y.clientName?"full error":"full",type:"text",id:"clientName",...h("clientName",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientEmail",children:"Client's Email"}),y.clientEmail&&w(kn,{children:y.clientEmail.message})]}),w("input",{className:y.clientEmail?"full error":"full",type:"email",id:"clientEmail",...h("clientEmail",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientStreet",children:"Street Address"}),((R=y.clientAddress)==null?void 0:R.street)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(Ee=y.clientAddress)!=null&&Ee.street?"full error":"full",type:"text",id:"clientStreet",...h("clientAddress.street",{required:!0})})]}),M(Hw,{children:[M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientCity",children:"City"}),((Z=y.clientAddress)==null?void 0:Z.city)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(Ge=y.clientAddress)!=null&&Ge.city?"error":"",type:"text",id:"clientCity",...h("clientAddress.city",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientPostCode",children:"Post Code"}),((De=y.clientAddress)==null?void 0:De.postCode)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(Pe=y.clientAddress)!=null&&Pe.postCode?"error":"",type:"text",id:"clientPostCode",...h("clientAddress.postCode",{required:!0})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"clientCountry",children:"Country"}),((me=y.clientAddress)==null?void 0:me.country)&&w(kn,{children:"can't be empty"})]}),w("input",{className:(ot=y.clientAddress)!=null&&ot.country?"error":"",type:"text",id:"clientCountry",...h("clientAddress.country",{required:!0})})]})]})]}),M(yj,{children:[M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"createdAt",children:"Invoice Date"}),y.createdAt&&w(kn,{children:"date must be selected"})]}),w(Tw,{name:"createdAt",control:x,rules:{required:!0},render:({field:{onChange:xe,value:_}})=>w(J5,{value:_,onChange:xe,error:y.createdAt,isSubmit:c,setIsSubmit:u,isDarkMode:n,invoiceData:a,isFormEdit:s})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"paymentTerms",children:"Payment Terms"}),y.paymentTerms&&w(kn,{children:"select a payment term"})]}),w(Tw,{name:"paymentTerms",control:x,rules:{required:!0},render:({field:{onChange:xe,value:_}})=>w(c4,{value:_,onChange:xe,error:y.paymentTerms,isSubmit:c,setIsSubmit:u,isDarkMode:n,invoiceData:a,isFormEdit:s})})]}),M(bn,{children:[M(Dt,{children:[w(It,{htmlFor:"description",children:"Project Description"}),y.description&&w(kn,{children:"add a project description"})]}),w("input",{className:y.description?"error":"",type:"text",id:"description",...h("description",{required:!0})})]})]}),M(vj,{children:[w(gj,{children:"Item List"}),G.length>=1&&M(Yw,{children:[w(Dt,{className:"item-heading",children:w(It,{children:"Item Name"})}),w(Dt,{className:"item-heading",children:w(It,{children:"Qty."})}),w(Dt,{className:"item-heading",children:w(It,{children:"Price"})}),w(Dt,{className:"item-heading",children:w(It,{children:"Tot."})})]}),G.map((xe,_)=>{var T,I,W,q;return M(Yw,{children:[M(pp,{id:"nameContainer",children:[w(Dt,{className:"mapped-field",children:w(It,{children:"Item Name"})}),w("input",{className:y.items&&((T=y.items[_])!=null&&T.name)?"error":"",type:"text",role:`name${_}`,placeholder:"Item Name",...h(`items.${_}.name`,{required:!0})})]}),M(pp,{id:"quantityContainer",children:[w(Dt,{className:"mapped-field",children:w(It,{children:"Qty."})}),w("input",{className:y.items&&((I=y.items[_])!=null&&I.quantity)?"error":"",type:"number",step:"any",role:`quantity${_}`,placeholder:"Quantity",...h(`items.${_}.quantity`,{required:!0,valueAsNumber:!0})})]}),M(pp,{id:"priceContainer",children:[w(Dt,{className:"mapped-field",children:w(It,{children:"Price"})}),w("input",{className:y.items&&((W=y.items[_])!=null&&W.price)?"error":"",type:"number",step:"any",role:`price${_}`,placeholder:"Price",...h(`items.${_}.price`,{required:!0,valueAsNumber:!0})})]}),M(_j,{id:"totalContainer",children:[w(Dt,{className:"mapped-field",children:w(It,{htmlFor:"totalPrice",children:"Total"})}),w(wj,{children:w("input",{defaultValue:(Number(C([`items.${_}.quantity`]))*Number(C([`items.${_}.price`]))).toFixed(2),role:`total${_}`,placeholder:"Total Price",type:"number",...h(`items.${_}.total`,{valueAsNumber:!0}),onChange:ne(_),className:y.items&&((q=y.items[_])!=null&&q.price)?"error":"",disabled:!0})})]})]},xe.id)})]}),w(xj,{type:"button",onClick:()=>{_e({})},children:"+ Add New Item"}),y.items&&w(kn,{children:"- An item must be added and filled out"}),s?M(Gw,{children:[w("div",{children:w(kj,{onClick:pe,children:"Cancel"})}),M("div",{children:[w(Zw,{type:"button",onClick:Te,children:"Save Changes"}),w(zs,{name:"submit-btn",type:"submit",children:"Save & Send"})]})]}):M(Gw,{children:[w("div",{children:w(Sj,{onClick:pe,children:"Discard"})}),M("div",{children:[w(Zw,{type:"button",onClick:Te,children:"Save as Draft"}),w(zs,{name:"submit-btn",type:"submit",children:"Save & Send"})]})]}),w("input",{...h("id"),type:"hidden",role:"form-id",defaultValue:s?a.id:We()}),w("input",{...h("total"),type:"hidden",role:"form-total",defaultValue:0}),w("input",{...h("status"),value:"pending",type:"hidden",role:"form-status"}),w("input",{...h("paymentDue"),type:"hidden",role:"form-payment-due"})]})})})}const Tj=E.div`
        margin: 0;
        display: flex;
        height: 100vh;
        
    @media screen and (max-width:1024px) {
        margin:0;
        display:flex;
        flex-direction: column;
    }
`,Ij=E.main`
    margin: 0px auto;
    display:flex;
    flex-direction: column;
    width:80vw;
    margin-top:40px;
    @media screen and (max-width:1024px) {
        width:95vw;
    }
`,Dj=E.div`
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
`,Nj=E.div`
`,Rj=E.div`
    background: rgba(0, 0, 0, 0.45);
    height:100%;
    width:100%;
    position:fixed;
    z-index:2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;function Aj({isDarkMode:e,setIsDarkMode:t,data:n,setData:r}){const[i,s]=D.useState(!1),[o,a]=D.useState(void 0),[l,c]=D.useState(!1),[u,d]=D.useState(),f={isFormOpen:i,setIsDarkMode:t,isDarkMode:e},g={setIsFormOpen:s,isFormOpen:i,isDarkMode:e,userFormData:o,setUserFormData:a,isFormEdit:l,setIsFormEdit:c,invoiceData:u,setInvoiceData:d,data:n,setData:r};D.useEffect(()=>{const p=()=>{s(!1)};return window.addEventListener("popstate",p),()=>{window.removeEventListener("popstate",p)}},[]);const m={dark:{color:"white"},light:{color:"black"}};return w(Tj,{children:M(Zt,{theme:e?m.dark:m.light,children:[w(EF,{}),M(Dj,{children:[w(CF,{...f}),w(Nj,{children:i&&w(Ej,{...g})})]}),M(Ij,{children:[i&&w(Rj,{}),w(q2,{context:{setIsFormOpen:s,isDarkMode:e,setUserFormData:a,userFormData:o,isFormEdit:l,setIsFormEdit:c,setInvoiceData:d,invoiceData:u}})]})]})})}function eh(){return j2()}const Oj=E.div`
    margin: 0 auto;
    border-radius: 10px;
    position: relative;
    width:55%;
    z-index:1;
    @media screen and (max-width:1024px) {
        width:60%;
    }
`,QC=E.div`
    display:flex;
    align-items: center;
    background: transparent;
    padding: 0 20px;
    justify-content: space-between;
    border-radius:10px;
    cursor: pointer;
    user-select: none;
`,Pj=E.div`
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
`,mp=E.div`
    display:flex;
    align-items: flex-end;
    padding:10px;
`,gp=E.input`
    cursor: pointer;
    margin-right:10px;
    &:checked{
        accent-color:#9277FF;
    }
`,yp=E.label`
    cursor: pointer;
`,Mj=E(Vr)`
    ${QC}:hover & {
        transform: rotate(180deg);
        transition:0.5s;
    }
    transform: rotate(0deg);
    transition:0.5s;
`,Fj=E(Vr)`

`;function Lj({isOpen:e,setIsOpen:t,isDraft:n,setIsDraft:r,isPending:i,setIsPending:s,isPaid:o,setIsPaid:a}){const{isDarkMode:l}=eh();let c=D.useRef(null);function u(){t(!e)}const d=k=>{k.key==="Enter"&&t(!0)},f=k=>{k.key==="Enter"&&(k.target.id==="draft"?r(!n):k.target.id==="pending"?s(!i):k.target.id==="paid"&&a(!o))},g=k=>{k.target.id==="draft"?r(!n):k.target.id==="pending"?s(!i):k.target.id==="paid"&&a(!o)};return w(Zt,{theme:l?{dropdownBg:"#252945"}:{dropdownBg:"#FFF"},children:M(Oj,{ref:c,children:[M(QC,{role:"dropdown-header",tabIndex:0,onKeyDown:d,onClick:u,children:[w(dt,{children:"Filter By Status"}),e?w(Fj,{src:"\\assets\\icon-arrow-up.svg"}):w(Mj,{src:"\\assets\\icon-arrow-down.svg"})]}),e&&M(Pj,{role:"dropdown-list",children:[M(mp,{children:[w(gp,{role:"draft",id:"draft",type:"checkbox",checked:n,onKeyDown:f,onChange:g}),w(yp,{htmlFor:"draft",children:"Draft"})]}),M(mp,{children:[w(gp,{role:"pending",id:"pending",type:"checkbox",checked:i,onKeyDown:f,onChange:g}),w(yp,{htmlFor:"pending",children:"Pending"})]}),M(mp,{children:[w(gp,{role:"paid",id:"paid",type:"checkbox",checked:o,onKeyDown:f,onChange:g}),w(yp,{htmlFor:"paid",children:"Paid"})]})]})]})})}const zj=E.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
`,jj=E.div`
`,$j=E.div`
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
`,Uj=E.img`
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
`,Bj=E(zs)`
    padding:10px 5px;
    gap:10px;
    @media screen and (max-width:425px){
        gap:2px;
    }
`,Vj=E(Al)`
    @media screen and (max-width:425px){
        font-size:20px;
    }
`,Kw=E(hR)`
    color:${e=>e.theme.invoiceDataColor};
    @media screen and (max-width:425px){
        font-size:12px;
    }
`;function Wj({filteredData:e,isOpen:t,setIsOpen:n,isDraft:r,setIsDraft:i,isPending:s,setIsPending:o,isPaid:a,setIsPaid:l,isDarkMode:c,setIsFormOpen:u}){function d(){u(!0)}const f={invoiceDataColor:"#DFE3FA"},g={invoiceDataColor:"#888EB0"},m={isOpen:t,setIsOpen:n,isDraft:r,setIsDraft:i,isPending:s,setIsPending:o,isPaid:a,setIsPaid:l};return w(Zt,{theme:c?f:g,children:M(zj,{children:[M(jj,{children:[w(Vj,{children:"Invoices"}),e.length===0?w(Kw,{children:r&&a&&s?"No invoices":r&&a?"No draft or paid invoices":r&&s?"No draft or pending invoices":a&&s?"No paid or pending invoices":r?"No draft invoices":a?"No paid invoices":s?"No pending invoices":"No invoices selected"}):w(Kw,{children:`There are ${e.length} total invoices`})]}),M($j,{children:[w(Lj,{...m}),M(Bj,{role:"new-invoice-btn",onClick:d,children:[w("span",{children:w(Uj,{src:"\\assets\\icon-plus.svg"})}),"New Invoice"]})]})]})})}const Hj=E.div`
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
`,Yj=E(dt)`
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
`,Gj=E(by)`
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
`,Zj=E(Qs)`
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
`,Kj=E.span`
    color:#7E88C3;
`,qj=E(dt)`
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
`,Qj=E.div`
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
`,Xj=E(Vr)`
    @media screen and (max-width:425px) {
        display:none;
    }
    @media screen and (min-width:1025px){
        width:2%;
    }
`,Jj=E(Vr)`
    width: 8px;
    height: 8px;
    & circle {
        fill:${({color:e})=>e}
    }
`,e$=E(dt)`

    color:${({color:e})=>e};
`;E.div`
    display:grid;
    gap:20px;
`;const t$={invoiceBg:"#1E2139",invoiceDueDateColor:"#DFE3FA"},n$={invoiceBg:"#FFF",invoiceDueDateColor:"#858BB2"};function r$({id:e,paymentDue:t,clientName:n,total:r,paymentColor:i,status:s}){const{isDarkMode:o}=eh();return w(Zt,{theme:o?t$:n$,children:M(Hj,{children:[M(Yj,{children:[w(Kj,{children:"#"}),e||"Missing ID"]}),w(Gj,{children:t?"Due "+Q(t).format("MMM Do YY"):"Missing Due Date"}),w(Zj,{children:n||"Missing Client Name"}),w(qj,{children:r?"$ "+r.toFixed(2):"Missing Total Amount"}),M(Qj,{color:i+"1A",children:[w(Jj,{color:i,src:"\\assets\\icon-oval.svg"}),w(e$,{color:i,children:s||"Missing Status"})]}),w(Xj,{src:"\\assets\\icon-arrow-right.svg"})]})})}function pg(){return pg=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pg.apply(this,arguments)}function i$(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Pt(e,t){return t||(t=e.slice(0)),e.raw=t,e}var L={},s$={get exports(){return L},set exports(e){L=e}},o$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",a$=o$,l$=a$;function XC(){}function JC(){}JC.resetWarningCache=XC;var c$=function(){function e(r,i,s,o,a,l){if(l!==l$){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:JC,resetWarningCache:XC};return n.PropTypes=n,n};s$.exports=c$();function eE(){var e=Pt([`
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
`]);return eE=function(){return e},e}E.div(eE(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function tE(){var e=Pt([`
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
`]);return tE=function(){return e},e}E.div(tE(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.delayModifier},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function nE(){var e=Pt([`
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
`]);return nE=function(){return e},e}E.div(nE(),function(e){return e.size},function(e){return(e.size+e.circleMarginLeft)*e.circleNum},function(e){return e.size},function(e){return e.size},function(e){return e.circleMarginLeft},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.delay},function(e){return e.delay},function(e){return e.delay});L.number,L.number,L.string,L.string,L.object;function rE(){var e=Pt([`
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
`]);return rE=function(){return e},e}E.div(rE(),function(e){return e.size},function(e){return e.size},function(e){return e.containerPadding},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.ringBase+0*e.ringBase},function(e){return e.ringBase+0*e.ringBase},function(e){return e.ringBase+1*e.ringBase},function(e){return e.ringBase+1*e.ringBase},function(e){return e.ringBase+2*e.ringBase},function(e){return e.ringBase+2*e.ringBase},function(e){return e.ringBase+3*e.ringBase},function(e){return e.ringBase+3*e.ringBase},function(e){return e.ringBase+4*e.ringBase},function(e){return e.ringBase+4*e.ringBase},function(e){return e.ringBase+5*e.ringBase},function(e){return e.ringBase+5*e.ringBase},function(e){return e.ringBase+6*e.ringBase},function(e){return e.ringBase+6*e.ringBase},function(e){return e.ringBase+7*e.ringBase},function(e){return e.ringBase+7*e.ringBase},function(e){return e.ringBase+8*e.ringBase},function(e){return e.ringBase+8*e.ringBase});L.number,L.number,L.string,L.string,L.object;function iE(){var e=Pt([`
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
`]);return iE=function(){return e},e}E.div(iE(),function(e){return e.size},function(e){return e.size},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*2.6},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.dotSize*1.9},function(e){return e.dotSize*1.9},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize*1.4},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.dotSize},function(e){return e.dotSize},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color},function(e){return e.color});L.number,L.number,L.string,L.string,L.object;function sE(){var e=Pt([`
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
`]);return sE=function(){return e},e}E.div(sE(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function oE(){var e=Pt([`
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
`]);return oE=function(){return e},e}E.div(oE(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function aE(){var e=Pt([`
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
`]);return aE=function(){return e},e}E.div(aE(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function lE(){var e=Pt([`
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
`]);return lE=function(){return e},e}E.div(lE(),function(e){return e.size},function(e){return 2*e.size*e.dotsNum},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDelay},function(e){return e.animationDelay},function(e){return e.animationDelay});L.number,L.number,L.string,L.string,L.object;function cE(){var e=Pt([`
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
`]);return cE=function(){return e},e}E.div(cE(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.circleSize},function(e){return e.circleSize},function(e){return e.color},function(e){return e.circleSize*-.36},function(e){return e.circleSize*.2},function(e){return e.circleSize*-.36},function(e){return e.circleSize*-.2},function(e){return e.circleSize*-.36},function(e){return e.circleSize*.36},function(e){return e.circleSize*-.2},function(e){return e.circleSize*.36},function(e){return e.circleSize*.2},function(e){return e.circleSize*.36});L.number,L.number,L.string,L.string,L.object;function uE(){var e=Pt([`
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
`]);return uE=function(){return e},e}E.div(uE(),function(e){return e.size*4},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.size*4},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function dE(){var e=Pt([`
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
`]);return dE=function(){return e},e}E.div(dE(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.color});L.number,L.number,L.string,L.string,L.object;function fE(){var e=Pt([`
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
`]);return fE=function(){return e},e}E.div(fE(),function(e){return e.size},function(e){return e.size},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.color},function(e){return e.color},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*1.5},function(e){return e.pixelSize*-1.5},function(e){return e.pixelSize*-1.5},function(e){return e.animationDuration},function(e){return e.pixelSize*2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*-2},function(e){return e.pixelSize*2},function(e){return e.pixelSize},function(e){return e.pixelSize},function(e){return e.pixelSize*-1},function(e){return e.pixelSize*-1});L.number,L.number,L.string,L.string,L.object;function hE(){var e=Pt([`
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
`]);return hE=function(){return e},e}var u$=E.div(hE(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.borderWidth*2*0},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*1},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*2},function(e){return e.animationDuration*.15},function(e){return e.borderWidth*2*3},function(e){return e.borderWidth},function(e){return e.color},function(e){return e.color}),d$={size:L.number,animationDuration:L.number,color:L.string,className:L.string,style:L.object};function f$(e){return Array.from({length:e}).map(function(t,n){return we.createElement("div",{key:n,className:"circle"},we.createElement("div",{className:"circle-inner-container"},we.createElement("div",{className:"circle-inner"})))})}var pE=function(t){var n=t.size,r=n===void 0?110:n,i=t.color,s=i===void 0?"#fff":i,o=t.animationDuration,a=o===void 0?2e3:o,l=t.className,c=l===void 0?"":l,u=t.style,d=i$(t,["size","color","animationDuration","className","style"]),f=r*5/110;return we.createElement(u$,pg({size:r,color:s,animationDuration:a,className:"radar-spinner"+(c?" "+c:""),style:u,borderWidth:f},d),f$(4))};pE.propTypes=d$;function mE(){var e=Pt([`
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
`]);return mE=function(){return e},e}E.div(mE(),function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function gE(){var e=Pt([`
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
`]);return gE=function(){return e},e}E.div(gE(),function(e){return e.size},function(e){return e.size},function(e){return-1*e.initialTopPosition},function(e){return e.size/4},function(e){return e.size/4},function(e){return-1*e.initialTopPosition},function(e){return e.size/4},function(e){return e.size/4},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05},function(e){return e.animationDuration*.05});L.number,L.number,L.string,L.string,L.object;function yE(){var e=Pt([`
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
`]);return yE=function(){return e},e}E.div(yE(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;function vE(){var e=Pt([`
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
`]);return vE=function(){return e},e}E.div(vE(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.color},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size});L.number,L.number,L.string,L.string,L.object;function _E(){var e=Pt([`
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
`]);return _E=function(){return e},e}E.div(_E(),function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.animationDuration},function(e){return e.size},function(e){return e.color},function(e){return e.animationDuration*.5},function(e){return e.animationDuration*.5});L.number,L.number,L.string,L.string,L.object;function wE(){var e=Pt([`
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
`]);return wE=function(){return e},e}E.div(wE(),function(e){return e.size},function(e){return e.size},function(e){return e.color},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration},function(e){return e.outerWidth},function(e){return e.outerWidth},function(e){return e.animationDuration});L.number,L.number,L.string,L.string,L.object;const h$=E.div`
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
`,p$=E.h1`
    font-size:40px;
    color:${e=>e.theme.loadingColor};
`;function xE({isDarkMode:e}){return w(Zt,{theme:e?{loadingColor:"white"}:{loadingColor:"black"},children:M(h$,{role:"loader",children:[w(pE,{color:"#9277FF"}),w(p$,{children:"Loading..."})]})})}const m$=E.div`
    width: 40vw;
    background: ${e=>e.theme.modalBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        width: 75vw;
    }
    transition: ease-in 0.3s;
`,g$=E.p`
    font-family: "League Spartan";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: ${e=>e.theme.warningColor};
    @media screen and (min-width: 768px) {
        font-size: 20px;
    }
`,y$=E.div`
    background: rgba(0, 0, 0, 0.65);
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`,v$=E.div`
    display: flex;
    justify-content: flex-end;
`,_$=E(hc)`
    background-color: ${e=>e.theme.cancelBtnBg};
    color: ${e=>e.theme.cancelBtnColor};
    &:hover {
        background-color: ${e=>e.theme.cancelBgHover};
    }
`;function SE({data:e,invoiceData:t,setData:n,isDarkMode:r,handleWarning:i}){const s=ya(),{isAuthenticated:o,user:a}=Zs(),c=_a({apiKey:"AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",authDomain:"invoice-app-b1eb0.firebaseapp.com",databaseURL:"https://invoice-app-b1eb0-default-rtdb.firebaseio.com",projectId:"invoice-app-b1eb0",storageBucket:"invoice-app-b1eb0.appspot.com",messagingSenderId:"730679038015",appId:"1:730679038015:web:57b0f244fffde30b77e88a"}),u=Sc(c);function d(){if(!o){const m=e.filter(p=>{if(p.id!==t.id)return p});n(m),localStorage.setItem("data",JSON.stringify(m))}if(o&&(a!=null&&a.email)){const m=a==null?void 0:a.email.replace(".",","),p=yr(u,`users/${m}/invoices`);Wl(p,k=>{if(k.val()!==null){const y=Object.entries(k.val()).filter(b=>{if(b[1].id===t.id)return b});if(y.length>0&&y){const b=y[0][0],x=yr(u,`users/${m}/invoices/${b}`);pF(x)}}})}s("..")}return w(Zt,{theme:r?{modalBg:"#1E2139",cancelBtnColor:"#DFE3FA",cancelBtnBg:"#252945",cancelBgHover:"#2b2e47",cancelColor:"#DFE3FA",warningColor:"#DFE3FA"}:{modalBg:"#FFF",cancelBtnBg:"#DFE3FA",cancelBtnColor:"#7E88C3",cancelBgHover:"#F9FAFE",cancelColor:"#7E88C3",warningColor:"#7E88C3"},children:w(y$,{children:M(m$,{children:[w(Al,{children:"Confirm Deletion"}),M(g$,{children:["Are you sure you want to delete invoice #",t.id?t.id:"Missing ID","? This action cannot be undone."]}),M(v$,{children:[w(_$,{onClick:i,children:"Cancel"}),w(Cy,{role:"delete-button",onClick:d,children:"Delete"})]})]})})})}const w$=E.div`
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items:center;
    text-align: center;
`,x$=E.img`
    width:40%;
    @media screen and (max-width:1440px) {
        width:50%
    }
    @media screen and (max-width:768px) {
        width:100%;
    }
`,S$=E.div`
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
`,k$=E(by)`
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
`,b$=E(fR)`
    font-size:40px;
    @media screen and (max-width:768px) {
        font-size:30px
    }
`,C$=E.span`
    font-weight:700;
`;function E$({isDarkMode:e}){return w(Zt,{theme:e?{paragraphText:"#DFE3FA"}:{paragraphText:"#888EB0"},children:M(w$,{children:[w(x$,{src:"\\assets\\illustration-empty.svg"}),M(S$,{children:[w(b$,{children:"There is nothing here"}),M(k$,{children:["Create an invoice by clicking the ",w(C$,{children:"New Invoice "}),"button and get started"]})]})]})})}function T$(){const{loginWithRedirect:e,isAuthenticated:t}=Zs();return w(zs,{onClick:()=>e(),children:"Sign In"})}function I$(){const{logout:e}=Zs();return w(zs,{onClick:()=>e(),children:"Sign Out"})}const D$=E.div`
    display:grid;
    gap:25px;
    align-content:start;
`,N$=E.div`
    height:100%;
    @media screen and (max-width:1024px){
        margin-top:50px;
    }
`,R$=E.div`
    display:flex;
    justify-content: flex-end;
`;function A$({data:e,setData:t,dataLoaded:n,setDataLoaded:r}){dR();const[i,s]=D.useState(""),[o,a]=D.useState(!1),{setIsFormOpen:l,isDarkMode:c,setUserFormData:u,userFormData:d,isFormEdit:f,setIsFormEdit:g,invoiceData:m,setInvoiceData:p}=eh(),[k,v]=D.useState(!1),[h,y]=D.useState(!0),[b,x]=D.useState(!0),[S,C]=D.useState(!0),[N,z]=D.useState(e),[G,_e]=D.useState(n),[ee,ne]=D.useState(["draft","pending","paid"]),pe={data:e,setData:t,dataLoaded:n,setDataLoaded:r,filteredData:N,setFilteredData:z,isOpen:k,setIsOpen:v,isDraft:h,setIsDraft:y,isPending:b,setIsPending:x,isPaid:S,setIsPaid:C,isDarkMode:c},{isAuthenticated:Te,user:Oe}=Zs(),$=_a({apiKey:"AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",authDomain:"invoice-app-b1eb0.firebaseapp.com",databaseURL:"https://invoice-app-b1eb0-default-rtdb.firebaseio.com",projectId:"invoice-app-b1eb0",storageBucket:"invoice-app-b1eb0.appspot.com",messagingSenderId:"730679038015",appId:"1:730679038015:web:57b0f244fffde30b77e88a"}),K=Sc($),oe=yr(K,"users");return D.useEffect(()=>{if(Te&&(Oe!=null&&Oe.email)){const te=Oe==null?void 0:Oe.email.replace(".",",");Wl(oe,O=>{if(!Object.keys(O.val()).includes(te)){const X=Fr(oe,te);Fr(oe,te),Vl(X,"")}})}},[]),D.useEffect(()=>{if(Te&&(Oe!=null&&Oe.email)&&n&&d!==void 0){const te=Oe==null?void 0:Oe.email.replace(".",","),U=hF(Fr(oe,te)).key,X=yr(K,`users/${te}/invoices`);d.items&&d.items.forEach(le=>{(isNaN(le.quantity)||typeof le.quantity>"u")&&(le.quantity=0),(isNaN(le.price)||typeof le.price>"u")&&(le.price=0),(isNaN(le.total)||typeof le.total>"u")&&(le.total=0)}),d.createdAt===void 0&&(d.createdAt=""),d.paymentTerms===void 0&&(d.paymentTerms=""),f?Wl(X,R=>{if(d!==void 0){const Ee=d,Ge=Object.entries(R.val()).filter(me=>{if(me[1].id===Ee.id)return me}),De=Ge[0][0],Pe=yr(K,`users/${te}/invoices/${De}`);g(!1),u(void 0),Ge[0][1]!==d&&cv(Pe,d)}})():d!==void 0&&(Vl(Fr(oe,`${te}/invoices/${U}`),d),u(void 0))}else if(!Te&&n&&d!==void 0){const te=e.filter(U=>{if(U.id!==m.id)return U}),O=[d,...te];localStorage.setItem("data",JSON.stringify(O)),t(O),u(void 0)}},[d]),D.useEffect(()=>{h&&!ee.includes("draft")?ne([...ee,"draft"]):b&&!ee.includes("pending")?ne([...ee,"pending"]):S&&!ee.includes("paid")&&ne([...ee,"paid"]),!h&&ee.includes("draft")?ne(ee.filter(te=>!te.includes("draft"))):!b&&ee.includes("pending")?ne(ee.filter(te=>!te.includes("pending"))):!S&&ee.includes("paid")&&ne(ee.filter(te=>!te.includes("paid")))},[h,b,S]),D.useEffect(()=>{if(n)if(S&&!b&&!h){const te=e.filter(O=>{if(O.status.includes("paid"))return O});z(te)}else if(b&&!S&&!h){const te=e.filter(O=>{if(O.status.includes("pending"))return O});z(te)}else if(h&&!S&&!b){const te=e.filter(O=>{if(O.status.includes("draft"))return O});z(te)}else if(S&&b&&!h){const te=e.filter(O=>{if(O.status.includes("paid")||O.status.includes("pending"))return O});z(te)}else if(S&&!b&&h){const te=e.filter(O=>{if(O.status.includes("paid")||O.status.includes("draft"))return O});z(te)}else if(!S&&b&&h){const te=e.filter(O=>{if(O.status.includes("draft")||O.status.includes("pending"))return O});z(te)}else if(S&&b&&h){const te=e.filter(O=>{if(O.status.includes("paid")||O.status.includes("pending")||O.status.includes("draft"))return O});z(te)}else!S&&!b&&!h&&(e.filter(te=>{if(!te.status.includes("paid")||!te.status.includes("pending")||!te.status.includes("draft"))return te}),z([]))},[ee]),D.useEffect(()=>{n&&(z(e),_e(!0),console.log("changed data"),console.log(e))},[n,e]),D.useEffect(()=>{if(G&&N[0]!="empty"){const te=N.map(O=>{let U="black";return O.status==="paid"?U="#33D69F":O.status==="pending"?U="#FF8F00":O.status==="draft"&&(U="#DFE3FA"),w(nk,{to:{pathname:`/invoice/${O.id}`,search:`?data=${JSON.stringify(O)}`},children:w(r$,{id:O.id,paymentDue:O.paymentDue,clientName:O.clientName,status:O.status,total:O.total,paymentColor:U})},O.id)});s(te)}},[N]),M(N$,{children:[w(R$,{children:Te?w(I$,{}):w(T$,{})}),o&&w(SE,{}),G&&w(Wj,{...pe,setIsFormOpen:l}),G?w(D$,{children:i.length>0?i:w(E$,{isDarkMode:c})}):w(xE,{isDarkMode:c})]})}const O$=E.div`
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
`,P$=E.div`
    display:flex;
    align-items:center;
    gap:20px;
    @media screen and (max-width:425px) {
        justify-content: space-between;
        width:100%;
    }
`,M$=E.div`
    display:flex;
    align-items: center;
    gap:10px;
    @media screen and (max-width:425px) {
        display:none;
    }
`,F$=E.div`
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
`,L$=E(Vr)`
    width: 8px;
    height: 8px;
    @media screen and (max-width:425px) {
        width:5px;
        height:5px;
    }
    & circle {
        fill:${({color:e})=>e}
    }
`,z$=E(dt)`
    color:${({color:e})=>e};
`;E.div`
    display:flex;
    align-items: center;
    gap:15px;
    width:90%;
    padding: 10px 20px;
`;const j$=E(hc)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,$$=E(Cy)`
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,qw=E(zs)`
    white-space:nowrap;
    @media screen and (max-width: 768px) {
        padding:12px;
    }

`,U$=E(by)`
    color: ${e=>e.theme.statusHeading};
`,B$=E(j$)`
    background: ${({theme:e})=>e.editBtnBg};
    color: ${({theme:e})=>e.editBtnColor};
    &:hover{
        background: ${({theme:e})=>e.editBtnBgHover};
        color: ${({theme:e})=>e.editBtnColorHover};
    }
`;function V$({handleEdit:e,data:t,isDarkMode:n,handleWarning:r,handleStatus:i}){const s={invoiceHeaderBg:"#1E2139",statusHeading:"#DFE3FA",editBtnBg:"#252945",editBtnBgHover:"#FFFFFF",editBtnColor:"#DFE3FA",editBtnColorHover:"#7E88C3"},o={invoiceHeaderBg:"#FFF",statusHeading:"#858BB2",editBtnBg:"#F9FAFE",editBtnBgHover:"#DFE3FA",editBtnColor:"#7E88C3",editBtnColorHover:"#7E88C3"};let a="black";return t.status==="paid"?a="#33D69F":t.status==="pending"?a="#FF8F00":t.status==="draft"&&(a="#DFE3FA"),w(Zt,{theme:n?s:o,children:M(O$,{children:[M(P$,{children:[w(U$,{children:"Status"}),M(F$,{color:a+"1A",children:[w(L$,{color:a,src:"\\assets\\icon-oval.svg"}),w(z$,{color:a,children:t.status})]})]}),M(M$,{children:[w(B$,{onClick:e,children:"Edit"}),w($$,{onClick:r,children:"Delete"}),t.status!=="paid"&&Object.values(t).some(l=>l==="")?w(qw,{disabled:!0,children:"Mark as Paid"}):w(qw,{onClick:i,children:"Mark as Paid"})]})]})})}const W$=E.div`
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
`,H$=E.div`
    grid-area: desc;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,Y$=E.div`
    grid-area: addr;
    justify-self:center;
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,G$=E.div`
    grid-area: date;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,Z$=E.div`
    grid-area: bill;
    align-self: flex-end;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,K$=E.div`
    justify-self: flex-end;
    grid-area: email;
    @media screen and (max-width:425px){
        justify-self: flex-start;
    }
`,q$=E.div`
    grid-area: due;
    
    @media screen and (max-width:425px) {
        justify-self:flex-start;
    }
`,Q$=E(dt)`
    @media screen and (max-width:425px) {
        font-size:18px;
    }
    @media screen and (max-width:768px) {
    }
    @media screen and (min-width:426px){
        width:20%;
    }
`,X$=E.span`
    color:#7E88C3;
`,Dr=E(Qs)`
    color: ${e=>e.theme.paragraphColor};
`,iu=E(Dr)`
    text-align:right;
    @media screen and (max-width: 425px){
        text-align:left;
    }
`;function J$({data:e,isDarkMode:t}){return w(Zt,{theme:t?{paragraphColor:"#DFE3FA"}:{paragraphColor:"#7E88C3"},children:M(W$,{children:[M(H$,{children:[M(Q$,{children:[w(X$,{children:"#"}),e.id?e.id:"Missing ID"]}),w(Dr,{children:e.description?e.description:"Missing Description"})]}),M(Y$,{children:[w(iu,{children:e.senderAddress.street?e.senderAddress.street:"Missing Sender Street"}),w(iu,{children:e.senderAddress.city?e.senderAddress.city:"Missing Sender City"}),w(iu,{children:e.senderAddress.postCode?e.senderAddress.postCode:"Missing Sender Post Code"}),w(iu,{children:e.senderAddress.country?e.senderAddress.country:"Missing Sender Country"})]}),M(G$,{children:[w(Dr,{children:"Invoice Date"}),w(dt,{children:e.createdAt?e.createdAt:"Missing Creation Date"})]}),M(q$,{children:[w(Dr,{children:"Payment Due"}),w(dt,{children:e.paymentDue?e.paymentDue:"Missing Due Date"})]}),M(Z$,{children:[w(Dr,{children:"Bill To"}),w(dt,{children:e.clientName}),w(Dr,{children:e.clientAddress.street?e.clientAddress.street:"Missing Client Street"}),w(Dr,{children:e.clientAddress.city?e.clientAddress.city:"Missing Client City"}),w(Dr,{children:e.clientAddress.postCode?e.clientAddress.postCode:"Missing Client Post Code"}),w(Dr,{children:e.clientAddress.country?e.clientAddress.country:"Missing Client Country"})]}),M(K$,{children:[w(Dr,{children:"Sent to"}),w(dt,{children:e.clientEmail?e.clientEmail:"Missing Email"})]})]})})}const eU=E.div`
    display:flex;
    flex-direction:column;
    padding:50px;
    @media screen and (max-width:1024px){
        padding: 30px;
    }
    @media screen and (max-width:700px){
        padding:15px;
    }
`,tU=E.div`
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
`,nU=E.div`
    @media screen and (min-width:426px) {
        display:none;
    }
    grid-template-columns: none;
    display:grid;
    grid-template-areas: 
    "item . total"
    "container . total"
    ;
`,rU=E.div`
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
`,iU=E(Qs)`
    color: ${e=>e.theme.itemNameHeadingColor};
    font-size: 18px;
    @media screen and (max-width:425px){
        display:none;
    }
`,sU=E(Qs)`
    color: ${e=>e.theme.quantityHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,oU=E(Qs)`
    color: ${e=>e.theme.priceHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,aU=E(Qs)`
    color: ${e=>e.theme.totalHeadingColor};
    font-size: 18px;
    justify-self:flex-end;
    @media screen and (max-width:1024px){
        justify-self:flex-end;
    }
    @media screen and (max-width:425px){
        display:none;
    }
`,lU=E(dt)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (max-width:425px){
        display:none;
    }
`,cU=E(dt)`
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
`,uU=E(dt)`
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
`,dU=E(dt)`
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
`,fU=E(dt)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: item;
    margin:0;
`,hU=E(dt)`
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
`,pU=E(dt)`
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
`,mU=E(dt)`
    font-family: 'League Spartan';
    font-size: 15px;
    line-height: 15px;
    @media screen and (min-width:426px){
        display:none;
    }
    grid-area: total;
    align-self: center;
    margin:0;
`,gU=E(dt)`
    color: #FFFFFF;
`,yU=E(Al)`
    font-size: 24px;
    line-height: 32px;
    text-align: right;
    color:#FFF;
`,vU=E.div`
    display:flex;
    align-items: center;
    grid-area:container;
    gap:5px;
    color: ${e=>e.theme.mobileContainerColor};
`;function _U({data:e,isDarkMode:t}){const n={invoiceBillingBg:"#252945;",itemNameHeadingColor:"#DFE3FA",quantityHeadingColor:"#DFE3FA",priceHeadingColor:"#DFE3FA",totalHeadingColor:"#DFE3FA",quantityColor:"#DFE3FA",priceColor:"#DFE3FA",invoiceAmountBg:"#0C0E16",mobileContainerColor:"#888EB0"},r={invoiceBillingBg:"#F9FAFE",itemNameHeadingColor:"#7E88C3",quantityHeadingColor:"#7E88C3",priceHeadingColor:"#7E88C3",totalHeadingColor:"#7E88C3",quantityColor:"#7E88C3",priceColor:"#7E88C3",invoiceAmountBg:"#373B53",mobileContainerColor:"#7E88C3"},i=e.items?e.items.map(s=>M(D.Fragment,{children:[w(lU,{children:s.name?s.name:"Missing Name"},En()),w(cU,{children:s.quantity?s.quantity:0},En()),M(uU,{children:[w("span",{children:"$ "}),s.price?s.price.toFixed(2):0]},En()),M(dU,{children:[w("span",{children:"$ "}),s.total?s.total.toFixed(2):0]},En()),M(nU,{children:[w(fU,{children:s.name?s.name:"Missing Name"},En()),M(vU,{children:[w(hU,{children:s.quantity?s.quantity:0},En()),w(dt,{children:"x"}),M(pU,{children:[w("span",{children:"$ "}),s.price?s.price.toFixed(2):0]},En())]}),M(mU,{children:[w("span",{children:"$ "}),s.total?s.quantity.toFixed(2):0]},En())]})]},En())):w("div",{});return w(Zt,{theme:t?n:r,children:M(eU,{children:[M(tU,{children:[w(iU,{children:"Item Name"}),w(sU,{children:"QTY."}),w(oU,{children:"Price"}),w(aU,{children:"Total"}),i]},En()),M(rU,{children:[w(gU,{children:"Amount Due"}),M(yU,{children:[w("span",{children:"$"}),e.total?e.total.toFixed(2):0]})]})]})})}const wU=E.div`
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
`,xU=E(Vr)`
`,SU=E.div`
`,kU=E.div`
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
`,bU=E.div`
    display: none;
    width: 100vw;
    @media screen and (max-width:425px) {
        background: ${({theme:e})=>e.invoiceBg};
        display: flex;
        padding: 10px 0;
        justify-content: space-around;    
    }
    transition: 0.4s;
`,Mv=`
    padding: 10px;
    font-size: 12px;
    @media screen and (max-width: 270px) {
        padding: 10px;
        font-size: 12px;
    }
`,CU=E(hc)`
    ${Mv}
`,EU=E(Cy)`
    ${Mv}
`,Qw=E(zs)`
    white-space: nowrap;
    ${Mv}
`,TU=E.div`
    display: flex;
    flex-direction: column;
    background: ${({theme:e})=>e.invoiceBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`,IU=E.div`
    flex-direction: column;
    background: ${({theme:e})=>e.invoiceHeaderBg};
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    border-radius: 8px;
    width: 60vw;
    @media screen and (max-width:700px) {
        width: 90vw;
    }
`,DU=E(nk)`
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
`,NU=E(CU)`
    background: ${({theme:e})=>e.editBtnBg};
    color: ${({theme:e})=>e.editBtnColor};
    &:hover{
        background: ${({theme:e})=>e.editBtnBgHover};
        color: ${({theme:e})=>e.editBtnColorHover};
    }
`;function Xw({data:e,isDarkMode:t,setIsDarkMode:n,setData:r,dataLoaded:i,setDataLoaded:s}){const[o,a]=D.useState(!1),{setIsFormEdit:l,setIsFormOpen:c,setInvoiceData:u,invoiceData:d}=eh(),f=qs(),m=new URLSearchParams(f.search).get("data"),p=m?JSON.parse(m):null,k=ya(),{isAuthenticated:v,user:h}=Zs(),b=_a({apiKey:"AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",authDomain:"invoice-app-b1eb0.firebaseapp.com",databaseURL:"https://invoice-app-b1eb0-default-rtdb.firebaseio.com",projectId:"invoice-app-b1eb0",storageBucket:"invoice-app-b1eb0.appspot.com",messagingSenderId:"730679038015",appId:"1:730679038015:web:57b0f244fffde30b77e88a"}),x=Sc(b);D.useEffect(()=>{u(p)},[]);function S(){a(_e=>!_e)}const C={invoiceBg:"#1E2139",editBtnBg:"#252945",editBtnBgHover:"#252945",editBtnColor:"#DFE3FA",editBtnColorHover:"#7E88C3"},N={invoiceBg:"#FFF",editBtnBg:"#F9FAFE",editBtnBgHover:"#FFFFFF",editBtnColor:"#7E88C3",editBtnColorHover:"#DFE3FA"};function z(){l(!0),c(!0)}function G(){if(v&&(h!=null&&h.email)){const _e=h==null?void 0:h.email.replace(".",","),ee=yr(x,`users/${_e}/invoices`);Wl(ee,pe=>{const We=Object.entries(pe.val()).filter(K=>{if(K[1].id===e.id)return K})[0][0],$=yr(x,`users/${_e}/invoices/${We}`);cv($,{status:"paid"})})(),k("..")}else{const _e=e.filter(pe=>pe.id!==d.id),ne=[{...d,status:"paid"},..._e];r(ne),localStorage.setItem("data",JSON.stringify(ne)),k("..")}}return w(Zt,{theme:t?C:N,children:M(wU,{children:[o&&w(SE,{setData:r,data:e,invoiceData:p,isDarkMode:t,handleWarning:S}),w(SU,{children:w(kU,{children:M(DU,{to:"/",children:[w(xU,{src:"\\assets\\icon-arrow-left.svg"}),w(Qs,{children:"Go Back"})]})})}),w(IU,{children:w(V$,{handleEdit:z,setIsFormOpen:c,setIsFormEdit:l,data:p,isDarkMode:t,handleWarning:S,handleStatus:G})}),M(TU,{children:[w(J$,{data:p,isDarkMode:t}),w(_U,{data:p,isDarkMode:t})]}),M(bU,{children:[w(NU,{onClick:z,children:"Edit"}),w(EU,{onClick:S,children:"Delete"}),e.status!=="paid"&&Object.values(p).some(_e=>_e==="")?w(Qw,{disabled:!0,children:"Mark as Paid"}):w(Qw,{onClick:G,children:"Mark as Paid"})]})]})})}const RU=E.div`
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
    gap:20px;
`,AU=E(ek)`
    background-color: #7C5DFA;
    border-radius: 24px;
    padding:20px;
    text-decoration: none;
    color:white;
    width:40%;
    &:hover{
        background-color:#9277FF;
    }
`;function OU(){return M(RU,{children:[w("h1",{children:"Sorry, the page you were looking for was not found."}),w(AU,{to:"/",children:"Return to Home"})]})}const vp=FN`
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
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #9277FF;
    }

    background-color: ${e=>e.theme.appBg};
    color: ${e=>e.theme.color};
    transition: 0.4s;
    }
`,_p={appBg:"#F8F8F8",color:"#0C0E16",scrollBg:"#FFFFFF"},wp={appBg:"#141625",color:"white",scrollBg:"#141625"};function PU(){const{isAuthenticated:e,user:t,isLoading:n}=Zs(),[r,i]=D.useState(""),[s,o]=D.useState(!1),[a,l]=D.useState(!0),[c,u]=D.useState(!0),[d,f]=D.useState(!0),g=()=>!!(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),[m,p]=D.useState(g),k={isDarkMode:m,setIsDarkMode:p,data:r,setData:i,dataLoaded:s,setDataLoaded:o},h=sR(ed(M(uo,{path:"/",element:w(Aj,{...{isDraft:a,setIsDraft:l,isPending:c,setIsPending:u,isPaid:d,setIsPaid:f,isDarkMode:m,setIsDarkMode:p,data:r,setData:i}}),children:[w(uo,{path:"/",index:!0,element:w(A$,{...k})}),w(uo,{path:"/invoice",element:w(Xw,{...k}),children:w(uo,{path:"/invoice:id",element:w(Xw,{...k})})}),w(uo,{path:"*",element:w(OU,{})})]}))),b=_a({apiKey:"AIzaSyC0kmQknp7zr8l10lWYelt7AesZ4UA-x6Y",authDomain:"invoice-app-b1eb0.firebaseapp.com",databaseURL:"https://invoice-app-b1eb0-default-rtdb.firebaseio.com",projectId:"invoice-app-b1eb0",storageBucket:"invoice-app-b1eb0.appspot.com",messagingSenderId:"730679038015",appId:"1:730679038015:web:57b0f244fffde30b77e88a"}),x=Sc(b);return D.useEffect(()=>{if(e&&(t!=null&&t.email)){const S=t==null?void 0:t.email.replace(".",","),C=yr(x,`users/${S}/isDarkMode`);Ew(C).then(N=>{N.exists()&&Vl(C,m)}).catch(N=>{console.error("Error getting colorSchemeRef:",N)})}else localStorage.getItem("colorscheme")==="false"&&p(!1),localStorage.getItem("colorscheme")==="true"&&p(!0)},[m]),D.useEffect(()=>{if(e&&(t!=null&&t.email)){const S=t==null?void 0:t.email.replace(".",","),C=yr(x,`users/${S}/isDarkMode`);Ew(C).then(N=>{N.exists()&&p(N.val())})}},[e]),D.useEffect(()=>{if(e&&(t!=null&&t.email)){const S=t==null?void 0:t.email.replace(".",","),C=yr(x,`users/${S}/invoices`);Wl(C,N=>{if(N.val()===null)i([]),o(!0);else{const z=Object.values(N.val());i(z),o(!0)}})}else if(localStorage.getItem("data")===null)fetch("/assets/data.json").then(S=>S.json()).then(S=>{i(S),o(!0),localStorage.setItem("data",JSON.stringify(S))}),i(r),o(!0),localStorage.setItem("data",JSON.stringify(r));else if(localStorage.getItem("data")!==null&&!e&&!n){const S=localStorage.getItem("data"),C=S!==null?JSON.parse(S):null;i(C),o(!0)}},[n]),n?M(Zt,{theme:m?wp:_p,children:[w(vp,{}),w(xE,{isDarkMode:m})]}):e?M(Zt,{theme:m?wp:_p,children:[w(vp,{}),w(I_,{router:h})]}):M(Zt,{theme:m?wp:_p,children:[w(vp,{}),w(I_,{router:h})]})}function MU(){return w(XE,{children:w(LD,{...{domain:"dev-g4y2r5dknwja6vmn.us.auth0.com",clientId:"KGydycvxYPyKjwQxxcKUa8IrmcBtuqR6"},authorizationParams:{redirect_uri:window.location.origin},children:w(PU,{})})})}Sp.createRoot(document.getElementById("root")).render(w(we.StrictMode,{children:w(MU,{})}))});export default FU();
