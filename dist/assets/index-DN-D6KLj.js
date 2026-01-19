function $m(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ms(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zf={exports:{}},Uo={},ed={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=Symbol.for("react.element"),Vm=Symbol.for("react.portal"),Qm=Symbol.for("react.fragment"),Km=Symbol.for("react.strict_mode"),qm=Symbol.for("react.profiler"),Ym=Symbol.for("react.provider"),Gm=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),eg=Symbol.for("react.lazy"),Du=Symbol.iterator;function tg(e){return e===null||typeof e!="object"?null:(e=Du&&e[Du]||e["@@iterator"],typeof e=="function"?e:null)}var td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nd=Object.assign,rd={};function yr(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}yr.prototype.isReactComponent={};yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function id(){}id.prototype=yr.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=rd,this.updater=n||td}var ys=gs.prototype=new id;ys.constructor=gs;nd(ys,yr.prototype);ys.isPureReactComponent=!0;var Fu=Array.isArray,od=Object.prototype.hasOwnProperty,ks={current:null},ld={key:!0,ref:!0,__self:!0,__source:!0};function ad(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)od.call(t,r)&&!ld.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ki,type:e,key:o,ref:l,props:i,_owner:ks.current}}function ng(e,t){return{$$typeof:ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===ki}function rg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mu=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rg(""+e.key):t.toString(36)}function Yi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ki:case Vm:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+pl(l,0):r,Fu(i)?(n="",e!=null&&(n=e.replace(Mu,"$&/")+"/"),Yi(i,t,n,"",function(u){return u})):i!=null&&(ws(i)&&(i=ng(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Mu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Fu(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+pl(o,a);l+=Yi(o,t,n,s,i)}else if(s=tg(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+pl(o,a++),l+=Yi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Ti(e,t,n){if(e==null)return e;var r=[],i=0;return Yi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ig(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Gi={transition:null},og={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Gi,ReactCurrentOwner:ks};function sd(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:Ti,forEach:function(e,t,n){Ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ti(e,function(){t++}),t},toArray:function(e){return Ti(e,function(t){return t})||[]},only:function(e){if(!ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=yr;$.Fragment=Qm;$.Profiler=qm;$.PureComponent=gs;$.StrictMode=Km;$.Suspense=Jm;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=og;$.act=sd;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=nd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ks.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)od.call(t,s)&&!ld.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ki,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:Gm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ym,_context:e},e.Consumer=e};$.createElement=ad;$.createFactory=function(e){var t=ad.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:Xm,render:e}};$.isValidElement=ws;$.lazy=function(e){return{$$typeof:eg,_payload:{_status:-1,_result:e},_init:ig}};$.memo=function(e,t){return{$$typeof:Zm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Gi.transition;Gi.transition={};try{e()}finally{Gi.transition=t}};$.unstable_act=sd;$.useCallback=function(e,t){return Fe.current.useCallback(e,t)};$.useContext=function(e){return Fe.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};$.useEffect=function(e,t){return Fe.current.useEffect(e,t)};$.useId=function(){return Fe.current.useId()};$.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return Fe.current.useMemo(e,t)};$.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};$.useRef=function(e){return Fe.current.useRef(e)};$.useState=function(e){return Fe.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return Fe.current.useTransition()};$.version="18.3.1";ed.exports=$;var R=ed.exports;const ud=ms(R),lg=$m({__proto__:null,default:ud},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag=R,sg=Symbol.for("react.element"),ug=Symbol.for("react.fragment"),cg=Object.prototype.hasOwnProperty,fg=ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dg={key:!0,ref:!0,__self:!0,__source:!0};function cd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)cg.call(t,r)&&!dg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sg,type:e,key:o,ref:l,props:i,_owner:fg.current}}Uo.Fragment=ug;Uo.jsx=cd;Uo.jsxs=cd;Zf.exports=Uo;var v=Zf.exports,ia={},fd={exports:{}},Ze={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,B){var w=N.length;N.push(B);e:for(;0<w;){var Y=w-1>>>1,J=N[Y];if(0<i(J,B))N[Y]=B,N[w]=J,w=Y;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var B=N[0],w=N.pop();if(w!==B){N[0]=w;e:for(var Y=0,J=N.length,x=J>>>1;Y<x;){var ke=2*(Y+1)-1,st=N[ke],ie=ke+1,kt=N[ie];if(0>i(st,w))ie<J&&0>i(kt,st)?(N[Y]=kt,N[ie]=w,Y=ie):(N[Y]=st,N[ke]=w,Y=ke);else if(ie<J&&0>i(kt,w))N[Y]=kt,N[ie]=w,Y=ie;else break e}}return B}function i(N,B){var w=N.sortIndex-B.sortIndex;return w!==0?w:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,c=null,d=3,h=!1,g=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=N)r(u),B.sortIndex=B.expirationTime,t(s,B);else break;B=n(u)}}function P(N){if(k=!1,y(N),!g)if(n(s)!==null)g=!0,me(A);else{var B=n(u);B!==null&&he(P,B.startTime-N)}}function A(N,B){g=!1,k&&(k=!1,p(z),z=-1),h=!0;var w=d;try{for(y(B),c=n(s);c!==null&&(!(c.expirationTime>B)||N&&!D());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,d=c.priorityLevel;var J=Y(c.expirationTime<=B);B=e.unstable_now(),typeof J=="function"?c.callback=J:c===n(s)&&r(s),y(B)}else r(s);c=n(s)}if(c!==null)var x=!0;else{var ke=n(u);ke!==null&&he(P,ke.startTime-B),x=!1}return x}finally{c=null,d=w,h=!1}}var b=!1,T=null,z=-1,j=5,C=-1;function D(){return!(e.unstable_now()-C<j)}function M(){if(T!==null){var N=e.unstable_now();C=N;var B=!0;try{B=T(!0,N)}finally{B?q():(b=!1,T=null)}}else b=!1}var q;if(typeof m=="function")q=function(){m(M)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,V=te.port2;te.port1.onmessage=M,q=function(){V.postMessage(null)}}else q=function(){S(M,0)};function me(N){T=N,b||(b=!0,q())}function he(N,B){z=S(function(){N(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){g||h||(g=!0,me(A))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(N){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var w=d;d=B;try{return N()}finally{d=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var w=d;d=N;try{return B()}finally{d=w}},e.unstable_scheduleCallback=function(N,B,w){var Y=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?Y+w:Y):w=Y,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=w+J,N={id:f++,callback:B,priorityLevel:N,startTime:w,expirationTime:J,sortIndex:-1},w>Y?(N.sortIndex=w,t(u,N),n(s)===null&&N===n(u)&&(k?(p(z),z=-1):k=!0,he(P,w-Y))):(N.sortIndex=J,t(s,N),g||h||(g=!0,me(A))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var B=d;return function(){var w=d;d=B;try{return N.apply(this,arguments)}finally{d=w}}}})(hd);dd.exports=hd;var hg=dd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg=R,Je=hg;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,Xr={};function zn(e,t){ar(e,t),ar(e+"Capture",t)}function ar(e,t){for(Xr[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oa=Object.prototype.hasOwnProperty,mg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ju={},Ou={};function gg(e){return oa.call(Ou,e)?!0:oa.call(ju,e)?!1:mg.test(e)?Ou[e]=!0:(ju[e]=!0,!1)}function yg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kg(e,t,n,r){if(t===null||typeof t>"u"||yg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ee[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ee[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ee[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ee[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ee[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ee[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ee[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ee[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ee[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var vs=/[\-:]([a-z])/g;function xs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(vs,xs);Ee[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(vs,xs);Ee[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(vs,xs);Ee[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ee[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ee[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function bs(e,t,n,r){var i=Ee.hasOwnProperty(t)?Ee[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kg(t,n,i,r)&&(n=null),r||i===null?gg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ot=pg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Li=Symbol.for("react.element"),Un=Symbol.for("react.portal"),Hn=Symbol.for("react.fragment"),Ss=Symbol.for("react.strict_mode"),la=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),gd=Symbol.for("react.context"),Cs=Symbol.for("react.forward_ref"),aa=Symbol.for("react.suspense"),sa=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),yd=Symbol.for("react.offscreen"),Bu=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ml;function Dr(e){if(ml===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ml=t&&t[1]||""}return`
`+ml+e}var gl=!1;function yl(e,t){if(!e||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function wg(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=yl(e.type,!1),e;case 11:return e=yl(e.type.render,!1),e;case 1:return e=yl(e.type,!0),e;default:return""}}function ua(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hn:return"Fragment";case Un:return"Portal";case la:return"Profiler";case Ss:return"StrictMode";case aa:return"Suspense";case sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case Cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:ua(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return ua(e(t))}catch{}}return null}function vg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ua(t);case 8:return t===Ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xg(e){var t=kd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=xg(e))}function wd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ca(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Wu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vd(e,t){t=t.checked,t!=null&&bs(e,"checked",t,!1)}function fa(e,t){vd(e,t);var n=sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+sn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(Fr(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:sn(n)}}function xd(e,t){var n=sn(t.value),r=sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function $u(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ri,Sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bg=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){bg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Cd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Pd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Sg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ma(e,t){if(t){if(Sg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function Es(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,tr=null,nr=null;function Vu(e){if(e=xi(e)){if(typeof ka!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ko(t),ka(e.stateNode,e.type,t))}}function Ed(e){tr?nr?nr.push(e):nr=[e]:tr=e}function Ad(){if(tr){var e=tr,t=nr;if(nr=tr=null,Vu(e),t)for(e=0;e<t.length;e++)Vu(t[e])}}function Td(e,t){return e(t)}function Ld(){}var kl=!1;function Id(e,t,n){if(kl)return e(t,n);kl=!0;try{return Td(e,t,n)}finally{kl=!1,(tr!==null||nr!==null)&&(Ld(),Ad())}}function Zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ko(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var wa=!1;if(Dt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){wa=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{wa=!1}function Cg(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Br=!1,fo=null,ho=!1,va=null,Pg={onError:function(e){Br=!0,fo=e}};function Eg(e,t,n,r,i,o,l,a,s){Br=!1,fo=null,Cg.apply(Pg,arguments)}function Ag(e,t,n,r,i,o,l,a,s){if(Eg.apply(this,arguments),Br){if(Br){var u=fo;Br=!1,fo=null}else throw Error(L(198));ho||(ho=!0,va=u)}}function _n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qu(e){if(_n(e)!==e)throw Error(L(188))}function Tg(e){var t=e.alternate;if(!t){if(t=_n(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Qu(i),e;if(o===r)return Qu(i),t;o=o.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function zd(e){return e=Tg(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_d(e);if(t!==null)return t;e=e.sibling}return null}var Nd=Je.unstable_scheduleCallback,Ku=Je.unstable_cancelCallback,Lg=Je.unstable_shouldYield,Ig=Je.unstable_requestPaint,pe=Je.unstable_now,Rg=Je.unstable_getCurrentPriorityLevel,As=Je.unstable_ImmediatePriority,Dd=Je.unstable_UserBlockingPriority,po=Je.unstable_NormalPriority,zg=Je.unstable_LowPriority,Fd=Je.unstable_IdlePriority,Ho=null,Ct=null;function _g(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:Fg,Ng=Math.log,Dg=Math.LN2;function Fg(e){return e>>>=0,e===0?32:31-(Ng(e)/Dg|0)|0}var zi=64,_i=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Mr(a):(o&=l,o!==0&&(r=Mr(o)))}else l=n&~i,l!==0?r=Mr(l):o!==0&&(r=Mr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),i=1<<n,r|=e[n],t&=~i;return r}function Mg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-pt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Mg(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Md(){var e=zi;return zi<<=1,!(zi&4194240)&&(zi=64),e}function wl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function wi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function Og(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function jd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Od,Ls,Bd,Wd,Ud,ba=!1,Ni=[],Jt=null,Zt=null,en=null,ei=new Map,ti=new Map,Kt=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Zt=null;break;case"mouseover":case"mouseout":en=null;break;case"pointerover":case"pointerout":ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ti.delete(t.pointerId)}}function Ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xi(t),t!==null&&Ls(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Wg(e,t,n,r,i){switch(t){case"focusin":return Jt=Ar(Jt,e,t,n,r,i),!0;case"dragenter":return Zt=Ar(Zt,e,t,n,r,i),!0;case"mouseover":return en=Ar(en,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ei.set(o,Ar(ei.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ti.set(o,Ar(ti.get(o)||null,e,t,n,r,i)),!0}return!1}function Hd(e){var t=xn(e.target);if(t!==null){var n=_n(t);if(n!==null){if(t=n.tag,t===13){if(t=Rd(n),t!==null){e.blockedOn=t,Ud(e.priority,function(){Bd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ya=r,n.target.dispatchEvent(r),ya=null}else return t=xi(n),t!==null&&Ls(t),e.blockedOn=n,!1;t.shift()}return!0}function Yu(e,t,n){Xi(e)&&n.delete(t)}function Ug(){ba=!1,Jt!==null&&Xi(Jt)&&(Jt=null),Zt!==null&&Xi(Zt)&&(Zt=null),en!==null&&Xi(en)&&(en=null),ei.forEach(Yu),ti.forEach(Yu)}function Tr(e,t){e.blockedOn===t&&(e.blockedOn=null,ba||(ba=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,Ug)))}function ni(e){function t(i){return Tr(i,e)}if(0<Ni.length){Tr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&Tr(Jt,e),Zt!==null&&Tr(Zt,e),en!==null&&Tr(en,e),ei.forEach(t),ti.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)Hd(n),n.blockedOn===null&&Kt.shift()}var rr=Ot.ReactCurrentBatchConfig,go=!0;function Hg(e,t,n,r){var i=X,o=rr.transition;rr.transition=null;try{X=1,Is(e,t,n,r)}finally{X=i,rr.transition=o}}function $g(e,t,n,r){var i=X,o=rr.transition;rr.transition=null;try{X=4,Is(e,t,n,r)}finally{X=i,rr.transition=o}}function Is(e,t,n,r){if(go){var i=Sa(e,t,n,r);if(i===null)Ll(e,t,r,yo,n),qu(e,r);else if(Wg(i,e,t,n,r))r.stopPropagation();else if(qu(e,r),t&4&&-1<Bg.indexOf(e)){for(;i!==null;){var o=xi(i);if(o!==null&&Od(o),o=Sa(e,t,n,r),o===null&&Ll(e,t,r,yo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var yo=null;function Sa(e,t,n,r){if(yo=null,e=Es(r),e=xn(e),e!==null)if(t=_n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Rd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yo=e,null}function $d(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rg()){case As:return 1;case Dd:return 4;case po:case zg:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var Yt=null,Rs=null,Ji=null;function Vd(){if(Ji)return Ji;var e,t=Rs,n=t.length,r,i="value"in Yt?Yt.value:Yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ji=i.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Gu(){return!1}function et(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Di:Gu,this.isPropagationStopped=Gu,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=et(kr),vi=ce({},kr,{view:0,detail:0}),Vg=et(vi),vl,xl,Lr,$o=ce({},vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(vl=e.screenX-Lr.screenX,xl=e.screenY-Lr.screenY):xl=vl=0,Lr=e),vl)},movementY:function(e){return"movementY"in e?e.movementY:xl}}),Xu=et($o),Qg=ce({},$o,{dataTransfer:0}),Kg=et(Qg),qg=ce({},vi,{relatedTarget:0}),bl=et(qg),Yg=ce({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gg=et(Yg),Xg=ce({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Jg=et(Xg),Zg=ce({},kr,{data:0}),Ju=et(Zg),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ty={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ny[e])?!!t[e]:!1}function _s(){return ry}var iy=ce({},vi,{key:function(e){if(e.key){var t=ey[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ty[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=et(iy),ly=ce({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zu=et(ly),ay=ce({},vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),sy=et(ay),uy=ce({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=et(uy),fy=ce({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=et(fy),hy=[9,13,27,32],Ns=Dt&&"CompositionEvent"in window,Wr=null;Dt&&"documentMode"in document&&(Wr=document.documentMode);var py=Dt&&"TextEvent"in window&&!Wr,Qd=Dt&&(!Ns||Wr&&8<Wr&&11>=Wr),ec=" ",tc=!1;function Kd(e,t){switch(e){case"keyup":return hy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function my(e,t){switch(e){case"compositionend":return qd(t);case"keypress":return t.which!==32?null:(tc=!0,ec);case"textInput":return e=t.data,e===ec&&tc?null:e;default:return null}}function gy(e,t){if($n)return e==="compositionend"||!Ns&&Kd(e,t)?(e=Vd(),Ji=Rs=Yt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qd&&t.locale!=="ko"?null:t.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!yy[e.type]:t==="textarea"}function Yd(e,t,n,r){Ed(r),t=ko(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,ri=null;function ky(e){lh(e,0)}function Vo(e){var t=Kn(e);if(wd(t))return e}function wy(e,t){if(e==="change")return t}var Gd=!1;if(Dt){var Sl;if(Dt){var Cl="oninput"in document;if(!Cl){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),Cl=typeof rc.oninput=="function"}Sl=Cl}else Sl=!1;Gd=Sl&&(!document.documentMode||9<document.documentMode)}function ic(){Ur&&(Ur.detachEvent("onpropertychange",Xd),ri=Ur=null)}function Xd(e){if(e.propertyName==="value"&&Vo(ri)){var t=[];Yd(t,ri,e,Es(e)),Id(ky,t)}}function vy(e,t,n){e==="focusin"?(ic(),Ur=t,ri=n,Ur.attachEvent("onpropertychange",Xd)):e==="focusout"&&ic()}function xy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Vo(ri)}function by(e,t){if(e==="click")return Vo(t)}function Sy(e,t){if(e==="input"||e==="change")return Vo(t)}function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Cy;function ii(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!oa.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,t){var n=oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=oc(n)}}function Jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function Ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Py(e){var t=Zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jd(n.ownerDocument.documentElement,n)){if(r!==null&&Ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=lc(n,o);var l=lc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ey=Dt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ca=null,Hr=null,Pa=!1;function ac(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pa||Vn==null||Vn!==co(r)||(r=Vn,"selectionStart"in r&&Ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ii(Hr,r)||(Hr=r,r=ko(Ca,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Fi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Fi("Animation","AnimationEnd"),animationiteration:Fi("Animation","AnimationIteration"),animationstart:Fi("Animation","AnimationStart"),transitionend:Fi("Transition","TransitionEnd")},Pl={},eh={};Dt&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function Qo(e){if(Pl[e])return Pl[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eh)return Pl[e]=t[n];return e}var th=Qo("animationend"),nh=Qo("animationiteration"),rh=Qo("animationstart"),ih=Qo("transitionend"),oh=new Map,sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,t){oh.set(e,t),zn(t,[e])}for(var El=0;El<sc.length;El++){var Al=sc[El],Ay=Al.toLowerCase(),Ty=Al[0].toUpperCase()+Al.slice(1);fn(Ay,"on"+Ty)}fn(th,"onAnimationEnd");fn(nh,"onAnimationIteration");fn(rh,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(ih,"onTransitionEnd");ar("onMouseEnter",["mouseout","mouseover"]);ar("onMouseLeave",["mouseout","mouseover"]);ar("onPointerEnter",["pointerout","pointerover"]);ar("onPointerLeave",["pointerout","pointerover"]);zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zn("onBeforeInput",["compositionend","keypress","textInput","paste"]);zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));function uc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ag(r,t,void 0,e),e.currentTarget=null}function lh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;uc(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;uc(i,a,u),o=s}}}if(ho)throw e=va,ho=!1,va=null,e}function oe(e,t){var n=t[Ia];n===void 0&&(n=t[Ia]=new Set);var r=e+"__bubble";n.has(r)||(ah(t,e,2,!1),n.add(r))}function Tl(e,t,n){var r=0;t&&(r|=4),ah(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function oi(e){if(!e[Mi]){e[Mi]=!0,pd.forEach(function(n){n!=="selectionchange"&&(Ly.has(n)||Tl(n,!1,e),Tl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Tl("selectionchange",!1,t))}}function ah(e,t,n,r){switch($d(t)){case 1:var i=Hg;break;case 4:i=$g;break;default:i=Is}n=i.bind(null,t,n,e),i=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=xn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Id(function(){var u=o,f=Es(n),c=[];e:{var d=oh.get(e);if(d!==void 0){var h=zs,g=e;switch(e){case"keypress":if(Zi(n)===0)break e;case"keydown":case"keyup":h=oy;break;case"focusin":g="focus",h=bl;break;case"focusout":g="blur",h=bl;break;case"beforeblur":case"afterblur":h=bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=sy;break;case th:case nh:case rh:h=Gg;break;case ih:h=cy;break;case"scroll":h=Vg;break;case"wheel":h=dy;break;case"copy":case"cut":case"paste":h=Jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zu}var k=(t&4)!==0,S=!k&&e==="scroll",p=k?d!==null?d+"Capture":null:d;k=[];for(var m=u,y;m!==null;){y=m;var P=y.stateNode;if(y.tag===5&&P!==null&&(y=P,p!==null&&(P=Zr(m,p),P!=null&&k.push(li(m,P,y)))),S)break;m=m.return}0<k.length&&(d=new h(d,g,null,n,f),c.push({event:d,listeners:k}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==ya&&(g=n.relatedTarget||n.fromElement)&&(xn(g)||g[Ft]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=u,g=g?xn(g):null,g!==null&&(S=_n(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=u),h!==g)){if(k=Xu,P="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(k=Zu,P="onPointerLeave",p="onPointerEnter",m="pointer"),S=h==null?d:Kn(h),y=g==null?d:Kn(g),d=new k(P,m+"leave",h,n,f),d.target=S,d.relatedTarget=y,P=null,xn(f)===u&&(k=new k(p,m+"enter",g,n,f),k.target=y,k.relatedTarget=S,P=k),S=P,h&&g)t:{for(k=h,p=g,m=0,y=k;y;y=On(y))m++;for(y=0,P=p;P;P=On(P))y++;for(;0<m-y;)k=On(k),m--;for(;0<y-m;)p=On(p),y--;for(;m--;){if(k===p||p!==null&&k===p.alternate)break t;k=On(k),p=On(p)}k=null}else k=null;h!==null&&cc(c,d,h,k,!1),g!==null&&S!==null&&cc(c,S,g,k,!0)}}e:{if(d=u?Kn(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var A=wy;else if(nc(d))if(Gd)A=Sy;else{A=xy;var b=vy}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=by);if(A&&(A=A(e,u))){Yd(c,A,n,f);break e}b&&b(e,d,u),e==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&da(d,"number",d.value)}switch(b=u?Kn(u):window,e){case"focusin":(nc(b)||b.contentEditable==="true")&&(Vn=b,Ca=u,Hr=null);break;case"focusout":Hr=Ca=Vn=null;break;case"mousedown":Pa=!0;break;case"contextmenu":case"mouseup":case"dragend":Pa=!1,ac(c,n,f);break;case"selectionchange":if(Ey)break;case"keydown":case"keyup":ac(c,n,f)}var T;if(Ns)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else $n?Kd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Qd&&n.locale!=="ko"&&($n||z!=="onCompositionStart"?z==="onCompositionEnd"&&$n&&(T=Vd()):(Yt=f,Rs="value"in Yt?Yt.value:Yt.textContent,$n=!0)),b=ko(u,z),0<b.length&&(z=new Ju(z,e,null,n,f),c.push({event:z,listeners:b}),T?z.data=T:(T=qd(n),T!==null&&(z.data=T)))),(T=py?my(e,n):gy(e,n))&&(u=ko(u,"onBeforeInput"),0<u.length&&(f=new Ju("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=T))}lh(c,t)})}function li(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Zr(e,n),o!=null&&r.unshift(li(e,o,i)),o=Zr(e,t),o!=null&&r.push(li(e,o,i))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Zr(n,o),s!=null&&l.unshift(li(n,s,a))):i||(s=Zr(n,o),s!=null&&l.push(li(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Iy=/\r\n?/g,Ry=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(Ry,"")}function ji(e,t,n){if(t=fc(t),fc(e)!==t&&n)throw Error(L(425))}function wo(){}var Ea=null,Aa=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,dc=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof dc<"u"?function(e){return dc.resolve(null).then(e).catch(Ny)}:La;function Ny(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ni(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ni(t)}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wr=Math.random().toString(36).slice(2),St="__reactFiber$"+wr,ai="__reactProps$"+wr,Ft="__reactContainer$"+wr,Ia="__reactEvents$"+wr,Dy="__reactListeners$"+wr,Fy="__reactHandles$"+wr;function xn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hc(e);e!==null;){if(n=e[St])return n;e=hc(e)}return t}e=n,n=e.parentNode}return null}function xi(e){return e=e[St]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ko(e){return e[ai]||null}var Ra=[],qn=-1;function dn(e){return{current:e}}function le(e){0>qn||(e.current=Ra[qn],Ra[qn]=null,qn--)}function re(e,t){qn++,Ra[qn]=e.current,e.current=t}var un={},Re=dn(un),Ue=dn(!1),En=un;function sr(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function vo(){le(Ue),le(Re)}function pc(e,t,n){if(Re.current!==un)throw Error(L(168));re(Re,t),re(Ue,n)}function sh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,vg(e)||"Unknown",i));return ce({},n,r)}function xo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,En=Re.current,re(Re,e),re(Ue,Ue.current),!0}function mc(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=sh(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,le(Ue),le(Re),re(Re,e)):le(Ue),re(Ue,n)}var Rt=null,qo=!1,Rl=!1;function uh(e){Rt===null?Rt=[e]:Rt.push(e)}function My(e){qo=!0,uh(e)}function hn(){if(!Rl&&Rt!==null){Rl=!0;var e=0,t=X;try{var n=Rt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Rt=null,qo=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Nd(As,hn),i}finally{X=t,Rl=!1}}return null}var Yn=[],Gn=0,bo=null,So=0,tt=[],nt=0,An=null,zt=1,_t="";function kn(e,t){Yn[Gn++]=So,Yn[Gn++]=bo,bo=e,So=t}function ch(e,t,n){tt[nt++]=zt,tt[nt++]=_t,tt[nt++]=An,An=e;var r=zt;e=_t;var i=32-pt(r)-1;r&=~(1<<i),n+=1;var o=32-pt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,zt=1<<32-pt(t)+i|n<<i|r,_t=o+e}else zt=1<<o|n<<i|r,_t=e}function Fs(e){e.return!==null&&(kn(e,1),ch(e,1,0))}function Ms(e){for(;e===bo;)bo=Yn[--Gn],Yn[Gn]=null,So=Yn[--Gn],Yn[Gn]=null;for(;e===An;)An=tt[--nt],tt[nt]=null,_t=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null}var Ge=null,Ye=null,ae=!1,ht=null;function fh(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=tn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=An!==null?{id:zt,overflow:_t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ye=null,!0):!1;default:return!1}}function za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _a(e){if(ae){var t=Ye;if(t){var n=t;if(!gc(e,t)){if(za(e))throw Error(L(418));t=tn(n.nextSibling);var r=Ge;t&&gc(e,t)?fh(r,n):(e.flags=e.flags&-4097|2,ae=!1,Ge=e)}}else{if(za(e))throw Error(L(418));e.flags=e.flags&-4097|2,ae=!1,Ge=e}}}function yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Oi(e){if(e!==Ge)return!1;if(!ae)return yc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=Ye)){if(za(e))throw dh(),Error(L(418));for(;t;)fh(e,t),t=tn(t.nextSibling)}if(yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Ge?tn(e.stateNode.nextSibling):null;return!0}function dh(){for(var e=Ye;e;)e=tn(e.nextSibling)}function ur(){Ye=Ge=null,ae=!1}function js(e){ht===null?ht=[e]:ht.push(e)}var jy=Ot.ReactCurrentBatchConfig;function Ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kc(e){var t=e._init;return t(e._payload)}function hh(e){function t(p,m){if(e){var y=p.deletions;y===null?(p.deletions=[m],p.flags|=16):y.push(m)}}function n(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=ln(p,m),p.index=0,p.sibling=null,p}function o(p,m,y){return p.index=y,e?(y=p.alternate,y!==null?(y=y.index,y<m?(p.flags|=2,m):y):(p.flags|=2,m)):(p.flags|=1048576,m)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,m,y,P){return m===null||m.tag!==6?(m=jl(y,p.mode,P),m.return=p,m):(m=i(m,y),m.return=p,m)}function s(p,m,y,P){var A=y.type;return A===Hn?f(p,m,y.props.children,P,y.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&kc(A)===m.type)?(P=i(m,y.props),P.ref=Ir(p,m,y),P.return=p,P):(P=lo(y.type,y.key,y.props,null,p.mode,P),P.ref=Ir(p,m,y),P.return=p,P)}function u(p,m,y,P){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Ol(y,p.mode,P),m.return=p,m):(m=i(m,y.children||[]),m.return=p,m)}function f(p,m,y,P,A){return m===null||m.tag!==7?(m=Pn(y,p.mode,P,A),m.return=p,m):(m=i(m,y),m.return=p,m)}function c(p,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=jl(""+m,p.mode,y),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Li:return y=lo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ir(p,null,m),y.return=p,y;case Un:return m=Ol(m,p.mode,y),m.return=p,m;case Vt:var P=m._init;return c(p,P(m._payload),y)}if(Fr(m)||Pr(m))return m=Pn(m,p.mode,y,null),m.return=p,m;Bi(p,m)}return null}function d(p,m,y,P){var A=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:a(p,m,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Li:return y.key===A?s(p,m,y,P):null;case Un:return y.key===A?u(p,m,y,P):null;case Vt:return A=y._init,d(p,m,A(y._payload),P)}if(Fr(y)||Pr(y))return A!==null?null:f(p,m,y,P,null);Bi(p,y)}return null}function h(p,m,y,P,A){if(typeof P=="string"&&P!==""||typeof P=="number")return p=p.get(y)||null,a(m,p,""+P,A);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Li:return p=p.get(P.key===null?y:P.key)||null,s(m,p,P,A);case Un:return p=p.get(P.key===null?y:P.key)||null,u(m,p,P,A);case Vt:var b=P._init;return h(p,m,y,b(P._payload),A)}if(Fr(P)||Pr(P))return p=p.get(y)||null,f(m,p,P,A,null);Bi(m,P)}return null}function g(p,m,y,P){for(var A=null,b=null,T=m,z=m=0,j=null;T!==null&&z<y.length;z++){T.index>z?(j=T,T=null):j=T.sibling;var C=d(p,T,y[z],P);if(C===null){T===null&&(T=j);break}e&&T&&C.alternate===null&&t(p,T),m=o(C,m,z),b===null?A=C:b.sibling=C,b=C,T=j}if(z===y.length)return n(p,T),ae&&kn(p,z),A;if(T===null){for(;z<y.length;z++)T=c(p,y[z],P),T!==null&&(m=o(T,m,z),b===null?A=T:b.sibling=T,b=T);return ae&&kn(p,z),A}for(T=r(p,T);z<y.length;z++)j=h(T,p,z,y[z],P),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?z:j.key),m=o(j,m,z),b===null?A=j:b.sibling=j,b=j);return e&&T.forEach(function(D){return t(p,D)}),ae&&kn(p,z),A}function k(p,m,y,P){var A=Pr(y);if(typeof A!="function")throw Error(L(150));if(y=A.call(y),y==null)throw Error(L(151));for(var b=A=null,T=m,z=m=0,j=null,C=y.next();T!==null&&!C.done;z++,C=y.next()){T.index>z?(j=T,T=null):j=T.sibling;var D=d(p,T,C.value,P);if(D===null){T===null&&(T=j);break}e&&T&&D.alternate===null&&t(p,T),m=o(D,m,z),b===null?A=D:b.sibling=D,b=D,T=j}if(C.done)return n(p,T),ae&&kn(p,z),A;if(T===null){for(;!C.done;z++,C=y.next())C=c(p,C.value,P),C!==null&&(m=o(C,m,z),b===null?A=C:b.sibling=C,b=C);return ae&&kn(p,z),A}for(T=r(p,T);!C.done;z++,C=y.next())C=h(T,p,z,C.value,P),C!==null&&(e&&C.alternate!==null&&T.delete(C.key===null?z:C.key),m=o(C,m,z),b===null?A=C:b.sibling=C,b=C);return e&&T.forEach(function(M){return t(p,M)}),ae&&kn(p,z),A}function S(p,m,y,P){if(typeof y=="object"&&y!==null&&y.type===Hn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Li:e:{for(var A=y.key,b=m;b!==null;){if(b.key===A){if(A=y.type,A===Hn){if(b.tag===7){n(p,b.sibling),m=i(b,y.props.children),m.return=p,p=m;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Vt&&kc(A)===b.type){n(p,b.sibling),m=i(b,y.props),m.ref=Ir(p,b,y),m.return=p,p=m;break e}n(p,b);break}else t(p,b);b=b.sibling}y.type===Hn?(m=Pn(y.props.children,p.mode,P,y.key),m.return=p,p=m):(P=lo(y.type,y.key,y.props,null,p.mode,P),P.ref=Ir(p,m,y),P.return=p,p=P)}return l(p);case Un:e:{for(b=y.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(p,m.sibling),m=i(m,y.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else t(p,m);m=m.sibling}m=Ol(y,p.mode,P),m.return=p,p=m}return l(p);case Vt:return b=y._init,S(p,m,b(y._payload),P)}if(Fr(y))return g(p,m,y,P);if(Pr(y))return k(p,m,y,P);Bi(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,y),m.return=p,p=m):(n(p,m),m=jl(y,p.mode,P),m.return=p,p=m),l(p)):n(p,m)}return S}var cr=hh(!0),ph=hh(!1),Co=dn(null),Po=null,Xn=null,Os=null;function Bs(){Os=Xn=Po=null}function Ws(e){var t=Co.current;le(Co),e._currentValue=t}function Na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Po=e,Os=Xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(We=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},Xn===null){if(Po===null)throw Error(L(308));Xn=e,Po.dependencies={lanes:0,firstContext:e}}else Xn=Xn.next=e;return t}var bn=null;function Us(e){bn===null?bn=[e]:bn.push(e)}function mh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Us(t)):(n.next=i.next,i.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Mt(e,n)}return i=r.interleaved,i===null?(t.next=t,Us(r)):(t.next=i.next,i.next=t),r.interleaved=t,Mt(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function wc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Eo(e,t,n,r){var i=e.updateQueue;Qt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var c=i.baseState;l=0,f=u=s=null,a=o;do{var d=a.lane,h=a.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,k=a;switch(d=t,h=n,k.tag){case 1:if(g=k.payload,typeof g=="function"){c=g.call(h,c,d);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=k.payload,d=typeof g=="function"?g.call(h,c,d):g,d==null)break e;c=ce({},c,d);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else h={eventTime:h,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=h,s=c):f=f.next=h,l|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(s=c),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=c}}function vc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var bi={},Pt=dn(bi),si=dn(bi),ui=dn(bi);function Sn(e){if(e===bi)throw Error(L(174));return e}function $s(e,t){switch(re(ui,t),re(si,e),re(Pt,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}le(Pt),re(Pt,t)}function fr(){le(Pt),le(si),le(ui)}function yh(e){Sn(ui.current);var t=Sn(Pt.current),n=pa(t,e.type);t!==n&&(re(si,e),re(Pt,n))}function Vs(e){si.current===e&&(le(Pt),le(si))}var se=dn(0);function Ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var zl=[];function Qs(){for(var e=0;e<zl.length;e++)zl[e]._workInProgressVersionPrimary=null;zl.length=0}var to=Ot.ReactCurrentDispatcher,_l=Ot.ReactCurrentBatchConfig,Tn=0,ue=null,we=null,xe=null,To=!1,$r=!1,ci=0,Oy=0;function Ae(){throw Error(L(321))}function Ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function qs(e,t,n,r,i,o){if(Tn=o,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?Hy:$y,e=n(r,i),$r){o=0;do{if($r=!1,ci=0,25<=o)throw Error(L(301));o+=1,xe=we=null,t.updateQueue=null,to.current=Vy,e=n(r,i)}while($r)}if(to.current=Lo,t=we!==null&&we.next!==null,Tn=0,xe=we=ue=null,To=!1,t)throw Error(L(300));return e}function Ys(){var e=ci!==0;return ci=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ue.memoizedState=xe=e:xe=xe.next=e,xe}function at(){if(we===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=xe===null?ue.memoizedState:xe.next;if(t!==null)xe=t,we=e;else{if(e===null)throw Error(L(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},xe===null?ue.memoizedState=xe=e:xe=xe.next=e}return xe}function fi(e,t){return typeof t=="function"?t(e):t}function Nl(e){var t=at(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((Tn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ue.lanes|=f,Ln|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,yt(r,t.memoizedState)||(We=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ue.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Dl(e){var t=at(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);yt(o,t.memoizedState)||(We=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function kh(){}function wh(e,t){var n=ue,r=at(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,We=!0),r=r.queue,Gs(bh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,di(9,xh.bind(null,n,r,i,t),void 0,null),Se===null)throw Error(L(349));Tn&30||vh(n,t,i)}return i}function vh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xh(e,t,n,r){t.value=n,t.getSnapshot=r,Sh(t)&&Ch(e)}function bh(e,t,n){return n(function(){Sh(t)&&Ch(e)})}function Sh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Ch(e){var t=Mt(e,1);t!==null&&mt(t,e,1,-1)}function xc(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fi,lastRenderedState:e},t.queue=e,e=e.dispatch=Uy.bind(null,ue,e),[t.memoizedState,e]}function di(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ue.updateQueue,t===null?(t={lastEffect:null,stores:null},ue.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ph(){return at().memoizedState}function no(e,t,n,r){var i=xt();ue.flags|=e,i.memoizedState=di(1|t,n,void 0,r===void 0?null:r)}function Yo(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(we!==null){var l=we.memoizedState;if(o=l.destroy,r!==null&&Ks(r,l.deps)){i.memoizedState=di(t,n,o,r);return}}ue.flags|=e,i.memoizedState=di(1|t,n,o,r)}function bc(e,t){return no(8390656,8,e,t)}function Gs(e,t){return Yo(2048,8,e,t)}function Eh(e,t){return Yo(4,2,e,t)}function Ah(e,t){return Yo(4,4,e,t)}function Th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lh(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4,4,Th.bind(null,t,e),n)}function Xs(){}function Ih(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zh(e,t,n){return Tn&21?(yt(n,t)||(n=Md(),ue.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=n)}function By(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=_l.transition;_l.transition={};try{e(!1),t()}finally{X=n,_l.transition=r}}function _h(){return at().memoizedState}function Wy(e,t,n){var r=on(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nh(e))Dh(t,n);else if(n=mh(e,t,n,r),n!==null){var i=De();mt(n,e,r,i),Fh(n,t,r)}}function Uy(e,t,n){var r=on(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Dh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,l)){var s=t.interleaved;s===null?(i.next=i,Us(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=mh(e,t,i,r),n!==null&&(i=De(),mt(n,e,r,i),Fh(n,t,r))}}function Nh(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function Dh(e,t){$r=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Lo={readContext:lt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Hy={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:bc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,Th.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wy.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:xc,useDebugValue:Xs,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=xc(!1),t=e[0];return e=By.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ue,i=xt();if(ae){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Se===null)throw Error(L(349));Tn&30||vh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,bc(bh.bind(null,r,o,e),[e]),r.flags|=2048,di(9,xh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=Se.identifierPrefix;if(ae){var n=_t,r=zt;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ci++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Oy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$y={readContext:lt,useCallback:Ih,useContext:lt,useEffect:Gs,useImperativeHandle:Lh,useInsertionEffect:Eh,useLayoutEffect:Ah,useMemo:Rh,useReducer:Nl,useRef:Ph,useState:function(){return Nl(fi)},useDebugValue:Xs,useDeferredValue:function(e){var t=at();return zh(t,we.memoizedState,e)},useTransition:function(){var e=Nl(fi)[0],t=at().memoizedState;return[e,t]},useMutableSource:kh,useSyncExternalStore:wh,useId:_h,unstable_isNewReconciler:!1},Vy={readContext:lt,useCallback:Ih,useContext:lt,useEffect:Gs,useImperativeHandle:Lh,useInsertionEffect:Eh,useLayoutEffect:Ah,useMemo:Rh,useReducer:Dl,useRef:Ph,useState:function(){return Dl(fi)},useDebugValue:Xs,useDeferredValue:function(e){var t=at();return we===null?t.memoizedState=e:zh(t,we.memoizedState,e)},useTransition:function(){var e=Dl(fi)[0],t=at().memoizedState;return[e,t]},useMutableSource:kh,useSyncExternalStore:wh,useId:_h,unstable_isNewReconciler:!1};function ft(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Da(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Go={isMounted:function(e){return(e=e._reactInternals)?_n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=on(e),o=Nt(r,i);o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(mt(t,e,i,r),eo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=on(e),o=Nt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=nn(e,o,i),t!==null&&(mt(t,e,i,r),eo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=on(e),i=Nt(n,r);i.tag=2,t!=null&&(i.callback=t),t=nn(e,i,r),t!==null&&(mt(t,e,r,n),eo(t,e,r))}};function Sc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!ii(n,r)||!ii(i,o):!0}function Mh(e,t,n){var r=!1,i=un,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=He(t)?En:Re.current,r=t.contextTypes,o=(r=r!=null)?sr(e,i):un),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Go,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Cc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Go.enqueueReplaceState(t,t.state,null)}function Fa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Hs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=He(t)?En:Re.current,i.context=sr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Da(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Go.enqueueReplaceState(i,i.state,null),Eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,t){try{var n="",r=t;do n+=wg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Fl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ma(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function jh(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ro||(Ro=!0,Ka=r),Ma(e,t)},n}function Oh(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ma(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ma(e,t),typeof r!="function"&&(rn===null?rn=new Set([this]):rn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=lk.bind(null,e,t,n),t.then(e,e))}function Ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,nn(n,t,1))),n.lanes|=1),e)}var Ky=Ot.ReactCurrentOwner,We=!1;function _e(e,t,n,r){t.child=e===null?ph(t,null,n,r):cr(t,e.child,n,r)}function Tc(e,t,n,r,i){n=n.render;var o=t.ref;return ir(t,i),r=qs(e,t,n,r,o,i),n=Ys(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ae&&n&&Fs(t),t.flags|=1,_e(e,t,r,i),t.child)}function Lc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Bh(e,t,o,r,i)):(e=lo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:ii,n(l,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function Bh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ii(o,r)&&e.ref===t.ref)if(We=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(We=!0);else return t.lanes=e.lanes,jt(e,t,i)}return ja(e,t,n,r,i)}function Wh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Zn,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Zn,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,re(Zn,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,re(Zn,qe),qe|=r;return _e(e,t,i,n),t.child}function Uh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,i){var o=He(n)?En:Re.current;return o=sr(t,o),ir(t,i),n=qs(e,t,n,r,o,i),r=Ys(),e!==null&&!We?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ae&&r&&Fs(t),t.flags|=1,_e(e,t,n,i),t.child)}function Ic(e,t,n,r,i){if(He(n)){var o=!0;xo(t)}else o=!1;if(ir(t,i),t.stateNode===null)ro(e,t),Mh(t,n,r),Fa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=He(n)?En:Re.current,u=sr(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Cc(t,l,r,u),Qt=!1;var d=t.memoizedState;l.state=d,Eo(t,r,l,i),s=t.memoizedState,a!==r||d!==s||Ue.current||Qt?(typeof f=="function"&&(Da(t,n,f,r),s=t.memoizedState),(a=Qt||Sc(t,n,a,r,d,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,gh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ft(t.type,a),l.props=u,c=t.pendingProps,d=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=lt(s):(s=He(n)?En:Re.current,s=sr(t,s));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||d!==s)&&Cc(t,l,r,s),Qt=!1,d=t.memoizedState,l.state=d,Eo(t,r,l,i);var g=t.memoizedState;a!==c||d!==g||Ue.current||Qt?(typeof h=="function"&&(Da(t,n,h,r),g=t.memoizedState),(u=Qt||Sc(t,n,u,r,d,g,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Oa(e,t,n,r,o,i)}function Oa(e,t,n,r,i,o){Uh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&mc(t,n,!1),jt(e,t,o);r=t.stateNode,Ky.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=cr(t,e.child,null,o),t.child=cr(t,null,a,o)):_e(e,t,a,o),t.memoizedState=r.state,i&&mc(t,n,!0),t.child}function Hh(e){var t=e.stateNode;t.pendingContext?pc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pc(e,t.context,!1),$s(e,t.containerInfo)}function Rc(e,t,n,r,i){return ur(),js(i),t.flags|=256,_e(e,t,n,r),t.child}var Ba={dehydrated:null,treeContext:null,retryLane:0};function Wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function $h(e,t,n){var r=t.pendingProps,i=se.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(se,i&1),e===null)return _a(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Zo(l,r,0,null),e=Pn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Wa(n),t.memoizedState=Ba,e):Js(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qy(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=ln(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=ln(a,o):(o=Pn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Wa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ba,r}return o=e.child,e=o.sibling,r=ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Js(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Wi(e,t,n,r){return r!==null&&js(r),cr(t,e.child,null,n),e=Js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qy(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Fl(Error(L(422))),Wi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Zo({mode:"visible",children:r.children},i,0,null),o=Pn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&cr(t,e.child,null,l),t.child.memoizedState=Wa(l),t.memoizedState=Ba,o);if(!(t.mode&1))return Wi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(L(419)),r=Fl(o,r,void 0),Wi(e,t,l,r)}if(a=(l&e.childLanes)!==0,We||a){if(r=Se,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Mt(e,i),mt(r,e,i,-1))}return iu(),r=Fl(Error(L(421))),Wi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ak.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=tn(i.nextSibling),Ge=t,ae=!0,ht=null,e!==null&&(tt[nt++]=zt,tt[nt++]=_t,tt[nt++]=An,zt=e.id,_t=e.overflow,An=t),t=Js(t,r.children),t.flags|=4096,t)}function zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Na(e.return,t,n)}function Ml(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Vh(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(_e(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,n,t);else if(e.tag===19)zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ao(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ml(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ao(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ml(t,!0,n,null,o);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yy(e,t,n){switch(t.tag){case 3:Hh(t),ur();break;case 5:yh(t);break;case 1:He(t.type)&&xo(t);break;case 4:$s(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(Co,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?$h(e,t,n):(re(se,se.current&1),e=jt(e,t,n),e!==null?e.sibling:null);re(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,Wh(e,t,n)}return jt(e,t,n)}var Qh,Ua,Kh,qh;Qh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};Kh=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Sn(Pt.current);var o=null;switch(n){case"input":i=ca(e,i),r=ca(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=ha(e,i),r=ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wo)}ma(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};qh=function(e,t,n,r){n!==r&&(t.flags|=4)};function Rr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Gy(e,t,n){var r=t.pendingProps;switch(Ms(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return He(t.type)&&vo(),Te(t),null;case 3:return r=t.stateNode,fr(),le(Ue),le(Re),Qs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ht!==null&&(Ga(ht),ht=null))),Ua(e,t),Te(t),null;case 5:Vs(t);var i=Sn(ui.current);if(n=t.type,e!==null&&t.stateNode!=null)Kh(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Te(t),null}if(e=Sn(Pt.current),Oi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[ai]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<jr.length;i++)oe(jr[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":Wu(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Hu(r,o),oe("invalid",r)}ma(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",""+a]):Xr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&oe("scroll",r)}switch(n){case"input":Ii(r),Uu(r,o,!0);break;case"textarea":Ii(r),$u(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=wo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[ai]=r,Qh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ga(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<jr.length;i++)oe(jr[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":Wu(e,r),i=ca(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Hu(e,r),i=ha(e,r),oe("invalid",e);break;default:i=r}ma(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Pd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Sd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Jr(e,s):typeof s=="number"&&Jr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&oe("scroll",e):s!=null&&bs(e,o,s,l))}switch(n){case"input":Ii(e),Uu(e,r,!1);break;case"textarea":Ii(e),$u(e);break;case"option":r.value!=null&&e.setAttribute("value",""+sn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?er(e,!!r.multiple,o,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)qh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Sn(ui.current),Sn(Pt.current),Oi(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Te(t),null;case 13:if(le(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Ye!==null&&t.mode&1&&!(t.flags&128))dh(),ur(),t.flags|=98560,o=!1;else if(o=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(L(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(L(317));o[St]=t}else ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),o=!1}else ht!==null&&(Ga(ht),ht=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):iu())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return fr(),Ua(e,t),e===null&&oi(t.stateNode.containerInfo),Te(t),null;case 10:return Ws(t.type._context),Te(t),null;case 17:return He(t.type)&&vo(),Te(t),null;case 19:if(le(se),o=t.memoizedState,o===null)return Te(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Rr(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ao(e),l!==null){for(t.flags|=128,Rr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&pe()>hr&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ao(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ae)return Te(t),null}else 2*pe()-o.renderingStartTime>hr&&n!==1073741824&&(t.flags|=128,r=!0,Rr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=pe(),t.sibling=null,n=se.current,re(se,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Xy(e,t){switch(Ms(t),t.tag){case 1:return He(t.type)&&vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fr(),le(Ue),le(Re),Qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(le(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(se),null;case 4:return fr(),null;case 10:return Ws(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Ui=!1,Le=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,F=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(e,t,r)}else n.current=null}function Ha(e,t,n){try{n()}catch(r){fe(e,t,r)}}var _c=!1;function Zy(e,t){if(Ea=go,e=Zd(),Ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(a=l+i),c!==o||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===e)break t;if(d===n&&++u===i&&(a=l),d===o&&++f===r&&(s=l),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:e,selectionRange:n},go=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var k=g.memoizedProps,S=g.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:ft(t.type,k),S);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(P){fe(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return g=_c,_c=!1,g}function Vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ha(t,n,o)}i=i.next}while(i!==r)}}function Xo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yh(e){var t=e.alternate;t!==null&&(e.alternate=null,Yh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[ai],delete t[Ia],delete t[Dy],delete t[Fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gh(e){return e.tag===5||e.tag===3||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wo));else if(r!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Qa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Qa(e,t,n),e=e.sibling;e!==null;)Qa(e,t,n),e=e.sibling}var Ce=null,dt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Xh(e,t,n),n=n.sibling}function Xh(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ho,n)}catch{}switch(n.tag){case 5:Le||Jn(n,t);case 6:var r=Ce,i=dt;Ce=null,Ht(e,t,n),Ce=r,dt=i,Ce!==null&&(dt?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(dt?(e=Ce,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),ni(e)):Il(Ce,n.stateNode));break;case 4:r=Ce,i=dt,Ce=n.stateNode.containerInfo,dt=!0,Ht(e,t,n),Ce=r,dt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Ha(n,t,l),i=i.next}while(i!==r)}Ht(e,t,n);break;case 1:if(!Le&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ht(e,t,n),Le=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function Dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Jy),t.forEach(function(r){var i=sk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,dt=!1;break e;case 3:Ce=a.stateNode.containerInfo,dt=!0;break e;case 4:Ce=a.stateNode.containerInfo,dt=!0;break e}a=a.return}if(Ce===null)throw Error(L(160));Xh(o,l,i),Ce=null,dt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){fe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Jh(t,e),t=t.sibling}function Jh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Vr(3,e,e.return),Xo(3,e)}catch(k){fe(e,e.return,k)}try{Vr(5,e,e.return)}catch(k){fe(e,e.return,k)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{Jr(i,"")}catch(k){fe(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vd(i,o),ga(a,l);var u=ga(a,o);for(l=0;l<s.length;l+=2){var f=s[l],c=s[l+1];f==="style"?Pd(i,c):f==="dangerouslySetInnerHTML"?Sd(i,c):f==="children"?Jr(i,c):bs(i,f,c,u)}switch(a){case"input":fa(i,o);break;case"textarea":xd(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;h!=null?er(i,!!o.multiple,h,!1):d!==!!o.multiple&&(o.defaultValue!=null?er(i,!!o.multiple,o.defaultValue,!0):er(i,!!o.multiple,o.multiple?[]:"",!1))}i[ai]=o}catch(k){fe(e,e.return,k)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){fe(e,e.return,k)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ni(t.containerInfo)}catch(k){fe(e,e.return,k)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(tu=pe())),r&4&&Dc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(u=Le)||f,ct(t,e),Le=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(F=e,f=e.child;f!==null;){for(c=F=f;F!==null;){switch(d=F,h=d.child,d.tag){case 0:case 11:case 14:case 15:Vr(4,d,d.return);break;case 1:Jn(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(k){fe(r,n,k)}}break;case 5:Jn(d,d.return);break;case 22:if(d.memoizedState!==null){Mc(c);continue}}h!==null?(h.return=d,F=h):Mc(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Cd("display",l))}catch(k){fe(e,e.return,k)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(k){fe(e,e.return,k)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ct(t,e),wt(e),r&4&&Dc(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gh(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jr(i,""),r.flags&=-33);var o=Nc(e);Qa(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Nc(e);Va(e,a,l);break;default:throw Error(L(161))}}catch(s){fe(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ek(e,t,n){F=e,Zh(e)}function Zh(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ui;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Le;a=Ui;var u=Le;if(Ui=l,(Le=s)&&!u)for(F=i;F!==null;)l=F,s=l.child,l.tag===22&&l.memoizedState!==null?jc(i):s!==null?(s.return=l,F=s):jc(i);for(;o!==null;)F=o,Zh(o),o=o.sibling;F=i,Ui=a,Le=u}Fc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,F=o):Fc(e)}}function Fc(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||Xo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&vc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}vc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&ni(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Le||t.flags&512&&$a(t)}catch(d){fe(t,t.return,d)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Mc(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function jc(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Xo(4,t)}catch(s){fe(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){fe(t,i,s)}}var o=t.return;try{$a(t)}catch(s){fe(t,o,s)}break;case 5:var l=t.return;try{$a(t)}catch(s){fe(t,l,s)}}}catch(s){fe(t,t.return,s)}if(t===e){F=null;break}var a=t.sibling;if(a!==null){a.return=t.return,F=a;break}F=t.return}}var tk=Math.ceil,Io=Ot.ReactCurrentDispatcher,Zs=Ot.ReactCurrentOwner,ot=Ot.ReactCurrentBatchConfig,G=0,Se=null,ye=null,Pe=0,qe=0,Zn=dn(0),ve=0,hi=null,Ln=0,Jo=0,eu=0,Qr=null,Oe=null,tu=0,hr=1/0,It=null,Ro=!1,Ka=null,rn=null,Hi=!1,Gt=null,zo=0,Kr=0,qa=null,io=-1,oo=0;function De(){return G&6?pe():io!==-1?io:io=pe()}function on(e){return e.mode&1?G&2&&Pe!==0?Pe&-Pe:jy.transition!==null?(oo===0&&(oo=Md()),oo):(e=X,e!==0||(e=window.event,e=e===void 0?16:$d(e.type)),e):1}function mt(e,t,n,r){if(50<Kr)throw Kr=0,qa=null,Error(L(185));wi(e,n,r),(!(G&2)||e!==Se)&&(e===Se&&(!(G&2)&&(Jo|=n),ve===4&&qt(e,Pe)),$e(e,r),n===1&&G===0&&!(t.mode&1)&&(hr=pe()+500,qo&&hn()))}function $e(e,t){var n=e.callbackNode;jg(e,t);var r=mo(e,e===Se?Pe:0);if(r===0)n!==null&&Ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ku(n),t===1)e.tag===0?My(Oc.bind(null,e)):uh(Oc.bind(null,e)),_y(function(){!(G&6)&&hn()}),n=null;else{switch(jd(r)){case 1:n=As;break;case 4:n=Dd;break;case 16:n=po;break;case 536870912:n=Fd;break;default:n=po}n=ap(n,ep.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ep(e,t){if(io=-1,oo=0,G&6)throw Error(L(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=mo(e,e===Se?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=_o(e,r);else{t=r;var i=G;G|=2;var o=np();(Se!==e||Pe!==t)&&(It=null,hr=pe()+500,Cn(e,t));do try{ik();break}catch(a){tp(e,a)}while(!0);Bs(),Io.current=o,G=i,ye!==null?t=0:(Se=null,Pe=0,t=ve)}if(t!==0){if(t===2&&(i=xa(e),i!==0&&(r=i,t=Ya(e,i))),t===1)throw n=hi,Cn(e,0),qt(e,r),$e(e,pe()),n;if(t===6)qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!nk(i)&&(t=_o(e,r),t===2&&(o=xa(e),o!==0&&(r=o,t=Ya(e,o))),t===1))throw n=hi,Cn(e,0),qt(e,r),$e(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:wn(e,Oe,It);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=tu+500-pe(),10<t)){if(mo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=La(wn.bind(null,e,Oe,It),t);break}wn(e,Oe,It);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-pt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tk(r/1960))-r,10<r){e.timeoutHandle=La(wn.bind(null,e,Oe,It),r);break}wn(e,Oe,It);break;case 5:wn(e,Oe,It);break;default:throw Error(L(329))}}}return $e(e,pe()),e.callbackNode===n?ep.bind(null,e):null}function Ya(e,t){var n=Qr;return e.current.memoizedState.isDehydrated&&(Cn(e,t).flags|=256),e=_o(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ga(t)),e}function Ga(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function nk(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~eu,t&=~Jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function Oc(e){if(G&6)throw Error(L(327));or();var t=mo(e,0);if(!(t&1))return $e(e,pe()),null;var n=_o(e,t);if(e.tag!==0&&n===2){var r=xa(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=hi,Cn(e,0),qt(e,t),$e(e,pe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wn(e,Oe,It),$e(e,pe()),null}function nu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(hr=pe()+500,qo&&hn())}}function In(e){Gt!==null&&Gt.tag===0&&!(G&6)&&or();var t=G;G|=1;var n=ot.transition,r=X;try{if(ot.transition=null,X=1,e)return e()}finally{X=r,ot.transition=n,G=t,!(G&6)&&hn()}}function ru(){qe=Zn.current,le(Zn)}function Cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zy(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Ms(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vo();break;case 3:fr(),le(Ue),le(Re),Qs();break;case 5:Vs(r);break;case 4:fr();break;case 13:le(se);break;case 19:le(se);break;case 10:Ws(r.type._context);break;case 22:case 23:ru()}n=n.return}if(Se=e,ye=e=ln(e.current,null),Pe=qe=t,ve=0,hi=null,eu=Jo=Ln=0,Oe=Qr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}bn=null}return e}function tp(e,t){do{var n=ye;try{if(Bs(),to.current=Lo,To){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}To=!1}if(Tn=0,xe=we=ue=null,$r=!1,ci=0,Zs.current=null,n===null||n.return===null){ve=1,hi=t,ye=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Pe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Ec(l);if(h!==null){h.flags&=-257,Ac(h,l,a,o,t),h.mode&1&&Pc(o,u,t),t=h,s=u;var g=t.updateQueue;if(g===null){var k=new Set;k.add(s),t.updateQueue=k}else g.add(s);break e}else{if(!(t&1)){Pc(o,u,t),iu();break e}s=Error(L(426))}}else if(ae&&a.mode&1){var S=Ec(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ac(S,l,a,o,t),js(dr(s,a));break e}}o=s=dr(s,a),ve!==4&&(ve=2),Qr===null?Qr=[o]:Qr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=jh(o,s,t);wc(o,p);break e;case 1:a=s;var m=o.type,y=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(rn===null||!rn.has(y)))){o.flags|=65536,t&=-t,o.lanes|=t;var P=Oh(o,a,t);wc(o,P);break e}}o=o.return}while(o!==null)}ip(n)}catch(A){t=A,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function np(){var e=Io.current;return Io.current=Lo,e===null?Lo:e}function iu(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(Ln&268435455)&&!(Jo&268435455)||qt(Se,Pe)}function _o(e,t){var n=G;G|=2;var r=np();(Se!==e||Pe!==t)&&(It=null,Cn(e,t));do try{rk();break}catch(i){tp(e,i)}while(!0);if(Bs(),G=n,Io.current=r,ye!==null)throw Error(L(261));return Se=null,Pe=0,ve}function rk(){for(;ye!==null;)rp(ye)}function ik(){for(;ye!==null&&!Lg();)rp(ye)}function rp(e){var t=lp(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?ip(e):ye=t,Zs.current=null}function ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xy(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,ye=null;return}}else if(n=Gy(n,t,qe),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);ve===0&&(ve=5)}function wn(e,t,n){var r=X,i=ot.transition;try{ot.transition=null,X=1,ok(e,t,n,r)}finally{ot.transition=i,X=r}return null}function ok(e,t,n,r){do or();while(Gt!==null);if(G&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Og(e,o),e===Se&&(ye=Se=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hi||(Hi=!0,ap(po,function(){return or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var l=X;X=1;var a=G;G|=4,Zs.current=null,Zy(e,n),Jh(n,e),Py(Aa),go=!!Ea,Aa=Ea=null,e.current=n,ek(n),Ig(),G=a,X=l,ot.transition=o}else e.current=n;if(Hi&&(Hi=!1,Gt=e,zo=i),o=e.pendingLanes,o===0&&(rn=null),_g(n.stateNode),$e(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ro)throw Ro=!1,e=Ka,Ka=null,e;return zo&1&&e.tag!==0&&or(),o=e.pendingLanes,o&1?e===qa?Kr++:(Kr=0,qa=e):Kr=0,hn(),null}function or(){if(Gt!==null){var e=jd(zo),t=ot.transition,n=X;try{if(ot.transition=null,X=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,zo=0,G&6)throw Error(L(331));var i=G;for(G|=4,F=e.current;F!==null;){var o=F,l=o.child;if(F.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(F=u;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Vr(8,f,o)}var c=f.child;if(c!==null)c.return=f,F=c;else for(;F!==null;){f=F;var d=f.sibling,h=f.return;if(Yh(f),f===u){F=null;break}if(d!==null){d.return=h,F=d;break}F=h}}}var g=o.alternate;if(g!==null){var k=g.child;if(k!==null){g.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}F=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,F=l;else e:for(;F!==null;){if(o=F,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,F=p;break e}F=o.return}}var m=e.current;for(F=m;F!==null;){l=F;var y=l.child;if(l.subtreeFlags&2064&&y!==null)y.return=l,F=y;else e:for(l=m;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xo(9,a)}}catch(A){fe(a,a.return,A)}if(a===l){F=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,F=P;break e}F=a.return}}if(G=i,hn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{X=n,ot.transition=t}}return!1}function Bc(e,t,n){t=dr(n,t),t=jh(e,t,1),e=nn(e,t,1),t=De(),e!==null&&(wi(e,1,t),$e(e,t))}function fe(e,t,n){if(e.tag===3)Bc(e,e,n);else for(;t!==null;){if(t.tag===3){Bc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rn===null||!rn.has(r))){e=dr(n,e),e=Oh(t,e,1),t=nn(t,e,1),e=De(),t!==null&&(wi(t,1,e),$e(t,e));break}}t=t.return}}function lk(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,Se===e&&(Pe&n)===n&&(ve===4||ve===3&&(Pe&130023424)===Pe&&500>pe()-tu?Cn(e,0):eu|=n),$e(e,t)}function op(e,t){t===0&&(e.mode&1?(t=_i,_i<<=1,!(_i&130023424)&&(_i=4194304)):t=1);var n=De();e=Mt(e,t),e!==null&&(wi(e,t,n),$e(e,n))}function ak(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),op(e,n)}function sk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),op(e,n)}var lp;lp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)We=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return We=!1,Yy(e,t,n);We=!!(e.flags&131072)}else We=!1,ae&&t.flags&1048576&&ch(t,So,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var i=sr(t,Re.current);ir(t,n),i=qs(null,t,r,e,i,n);var o=Ys();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,xo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hs(t),i.updater=Go,t.stateNode=i,i._reactInternals=t,Fa(t,r,e,n),t=Oa(null,t,r,!0,o,n)):(t.tag=0,ae&&o&&Fs(t),_e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=ck(r),e=ft(r,e),i){case 0:t=ja(null,t,r,e,n);break e;case 1:t=Ic(null,t,r,e,n);break e;case 11:t=Tc(null,t,r,e,n);break e;case 14:t=Lc(null,t,r,ft(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),ja(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Ic(e,t,r,i,n);case 3:e:{if(Hh(t),e===null)throw Error(L(387));r=t.pendingProps,o=t.memoizedState,i=o.element,gh(e,t),Eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=dr(Error(L(423)),t),t=Rc(e,t,r,n,i);break e}else if(r!==i){i=dr(Error(L(424)),t),t=Rc(e,t,r,n,i);break e}else for(Ye=tn(t.stateNode.containerInfo.firstChild),Ge=t,ae=!0,ht=null,n=ph(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ur(),r===i){t=jt(e,t,n);break e}_e(e,t,r,n)}t=t.child}return t;case 5:return yh(t),e===null&&_a(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ta(r,i)?l=null:o!==null&&Ta(r,o)&&(t.flags|=32),Uh(e,t),_e(e,t,l,n),t.child;case 6:return e===null&&_a(t),null;case 13:return $h(e,t,n);case 4:return $s(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=cr(t,null,r,n):_e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Tc(e,t,r,i,n);case 7:return _e(e,t,t.pendingProps,n),t.child;case 8:return _e(e,t,t.pendingProps.children,n),t.child;case 12:return _e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,re(Co,r._currentValue),r._currentValue=l,o!==null)if(yt(o.value,l)){if(o.children===i.children&&!Ue.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Nt(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Na(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(L(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Na(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}_e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ir(t,n),i=lt(i),r=r(i),t.flags|=1,_e(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Lc(e,t,r,i,n);case 15:return Bh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),ro(e,t),t.tag=1,He(r)?(e=!0,xo(t)):e=!1,ir(t,n),Mh(t,r,i),Fa(t,r,i,n),Oa(null,t,r,!0,e,n);case 19:return Vh(e,t,n);case 22:return Wh(e,t,n)}throw Error(L(156,t.tag))};function ap(e,t){return Nd(e,t)}function uk(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new uk(e,t,n,r)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ck(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Cs)return 11;if(e===Ps)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function lo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")ou(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Hn:return Pn(n.children,i,o,t);case Ss:l=8,i|=8;break;case la:return e=it(12,n,t,i|2),e.elementType=la,e.lanes=o,e;case aa:return e=it(13,n,t,i),e.elementType=aa,e.lanes=o,e;case sa:return e=it(19,n,t,i),e.elementType=sa,e.lanes=o,e;case yd:return Zo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:l=10;break e;case gd:l=9;break e;case Cs:l=11;break e;case Ps:l=14;break e;case Vt:l=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=it(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Pn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=it(22,e,r,t),e.elementType=yd,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ol(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lu(e,t,n,r,i,o,l,a,s){return e=new fk(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(o),e}function dk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sp(e){if(!e)return un;e=e._reactInternals;e:{if(_n(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(He(n))return sh(e,n,t)}return t}function up(e,t,n,r,i,o,l,a,s){return e=lu(n,r,!0,e,i,o,l,a,s),e.context=sp(null),n=e.current,r=De(),i=on(n),o=Nt(r,i),o.callback=t??null,nn(n,o,i),e.current.lanes=i,wi(e,i,r),$e(e,r),e}function el(e,t,n,r){var i=t.current,o=De(),l=on(i);return n=sp(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=nn(i,t,l),e!==null&&(mt(e,i,l,o),eo(e,i,l)),l}function No(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){Wc(e,t),(e=e.alternate)&&Wc(e,t)}function hk(){return null}var cp=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}tl.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));el(e,t,null,null)};tl.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;In(function(){el(null,e,null,null)}),t[Ft]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&Hd(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uc(){}function pk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=No(l);o.call(u)}}var l=up(t,r,e,0,null,!1,!1,"",Uc);return e._reactRootContainer=l,e[Ft]=l.current,oi(e.nodeType===8?e.parentNode:e),In(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=No(s);a.call(u)}}var s=lu(e,0,!1,null,null,!1,!1,"",Uc);return e._reactRootContainer=s,e[Ft]=s.current,oi(e.nodeType===8?e.parentNode:e),In(function(){el(t,s,n,r)}),s}function rl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=No(l);a.call(s)}}el(t,l,e,i)}else l=pk(n,t,e,i,r);return No(l)}Od=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Mr(t.pendingLanes);n!==0&&(Ts(t,n|1),$e(t,pe()),!(G&6)&&(hr=pe()+500,hn()))}break;case 13:In(function(){var r=Mt(e,1);if(r!==null){var i=De();mt(r,e,1,i)}}),au(e,1)}};Ls=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}au(e,134217728)}};Bd=function(e){if(e.tag===13){var t=on(e),n=Mt(e,t);if(n!==null){var r=De();mt(n,e,t,r)}au(e,t)}};Wd=function(){return X};Ud=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};ka=function(e,t,n){switch(t){case"input":if(fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ko(r);if(!i)throw Error(L(90));wd(r),fa(r,i)}}}break;case"textarea":xd(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Td=nu;Ld=In;var mk={usingClientEntryPoint:!1,Events:[xi,Kn,Ko,Ed,Ad,nu]},zr={findFiberByHostInstance:xn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gk={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||hk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $i=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$i.isDisabled&&$i.supportsFiber)try{Ho=$i.inject(gk),Ct=$i}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(L(200));return dk(e,t,null,n)};Ze.createRoot=function(e,t){if(!uu(e))throw Error(L(299));var n=!1,r="",i=cp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=lu(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,oi(e.nodeType===8?e.parentNode:e),new su(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return In(e)};Ze.hydrate=function(e,t,n){if(!nl(t))throw Error(L(200));return rl(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!uu(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=cp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=up(t,null,e,1,n??null,i,!1,o,l),e[Ft]=t.current,oi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tl(t)};Ze.render=function(e,t,n){if(!nl(t))throw Error(L(200));return rl(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!nl(e))throw Error(L(40));return e._reactRootContainer?(In(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};Ze.unstable_batchedUpdates=nu;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return rl(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function fp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fp)}catch(e){console.error(e)}}fp(),fd.exports=Ze;var yk=fd.exports,Hc=yk;ia.createRoot=Hc.createRoot,ia.hydrateRoot=Hc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pi(){return pi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pi.apply(this,arguments)}var Xt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Xt||(Xt={}));const $c="popstate";function kk(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Xa("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Do(i)}return vk(t,n,null,e)}function de(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function cu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wk(){return Math.random().toString(36).substr(2,8)}function Vc(e,t){return{usr:e.state,key:e.key,idx:t}}function Xa(e,t,n,r){return n===void 0&&(n=null),pi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?vr(t):t,{state:n,key:t&&t.key||r||wk()})}function Do(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function vr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Xt.Pop,s=null,u=f();u==null&&(u=0,l.replaceState(pi({},l.state,{idx:u}),""));function f(){return(l.state||{idx:null}).idx}function c(){a=Xt.Pop;let S=f(),p=S==null?null:S-u;u=S,s&&s({action:a,location:k.location,delta:p})}function d(S,p){a=Xt.Push;let m=Xa(k.location,S,p);u=f()+1;let y=Vc(m,u),P=k.createHref(m);try{l.pushState(y,"",P)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(P)}o&&s&&s({action:a,location:k.location,delta:1})}function h(S,p){a=Xt.Replace;let m=Xa(k.location,S,p);u=f();let y=Vc(m,u),P=k.createHref(m);l.replaceState(y,"",P),o&&s&&s({action:a,location:k.location,delta:0})}function g(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof S=="string"?S:Do(S);return m=m.replace(/ $/,"%20"),de(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let k={get action(){return a},get location(){return e(i,l)},listen(S){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener($c,c),s=S,()=>{i.removeEventListener($c,c),s=null}},createHref(S){return t(i,S)},createURL:g,encodeLocation(S){let p=g(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:h,go(S){return l.go(S)}};return k}var Qc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qc||(Qc={}));function xk(e,t,n){return n===void 0&&(n="/"),bk(e,t,n)}function bk(e,t,n,r){let i=typeof t=="string"?vr(t):t,o=pr(i.pathname||"/",n);if(o==null)return null;let l=dp(e);Sk(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Nk(o);a=zk(l[s],u)}return a}function dp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(de(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=an([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(de(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dp(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Ik(u,o.index),routesMeta:f})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of hp(o.path))i(o,l,s)}),t}function hp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=hp(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Sk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Rk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ck=/^:[\w-]+$/,Pk=3,Ek=2,Ak=1,Tk=10,Lk=-2,Kc=e=>e==="*";function Ik(e,t){let n=e.split("/"),r=n.length;return n.some(Kc)&&(r+=Lk),t&&(r+=Ek),n.filter(i=>!Kc(i)).reduce((i,o)=>i+(Ck.test(o)?Pk:o===""?Ak:Tk),r)}function Rk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zk(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",c=Ja({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},f),d=s.route;if(!c)return null;Object.assign(i,c.params),l.push({params:i,pathname:an([o,c.pathname]),pathnameBase:Ok(an([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=an([o,c.pathnameBase]))}return l}function Ja(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_k(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,c)=>{let{paramName:d,isOptional:h}=f;if(d==="*"){let k=a[c]||"";l=o.slice(0,o.length-k.length).replace(/(.)\/+$/,"$1")}const g=a[c];return h&&!g?u[d]=void 0:u[d]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function _k(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),cu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Nk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return cu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function pr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Dk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fk=e=>Dk.test(e);function Mk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?vr(e):e,o;if(n)if(Fk(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),cu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=qc(n.substring(1),"/"):o=qc(n,t)}else o=t;return{pathname:o,search:Bk(r),hash:Wk(i)}}function qc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function pp(e,t){let n=jk(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function mp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=vr(e):(i=pi({},e),de(!i.pathname||!i.pathname.includes("?"),Bl("?","pathname","search",i)),de(!i.pathname||!i.pathname.includes("#"),Bl("#","pathname","hash",i)),de(!i.search||!i.search.includes("#"),Bl("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let d=l.split("/");for(;d[0]==="..";)d.shift(),c-=1;i.pathname=d.join("/")}a=c>=0?t[c]:"/"}let s=Mk(i,a),u=l&&l!=="/"&&l.endsWith("/"),f=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const an=e=>e.join("/").replace(/\/\/+/g,"/"),Ok=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Uk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gp=["post","put","patch","delete"];new Set(gp);const Hk=["get",...gp];new Set(Hk);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mi(){return mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mi.apply(this,arguments)}const il=R.createContext(null),yp=R.createContext(null),pn=R.createContext(null),ol=R.createContext(null),Bt=R.createContext({outlet:null,matches:[],isDataRoute:!1}),kp=R.createContext(null);function $k(e,t){let{relative:n}=t===void 0?{}:t;Si()||de(!1);let{basename:r,navigator:i}=R.useContext(pn),{hash:o,pathname:l,search:a}=ll(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:an([r,l])),i.createHref({pathname:s,search:a,hash:o})}function Si(){return R.useContext(ol)!=null}function Nn(){return Si()||de(!1),R.useContext(ol).location}function wp(e){R.useContext(pn).static||R.useLayoutEffect(e)}function vp(){let{isDataRoute:e}=R.useContext(Bt);return e?lw():Vk()}function Vk(){Si()||de(!1);let e=R.useContext(il),{basename:t,future:n,navigator:r}=R.useContext(pn),{matches:i}=R.useContext(Bt),{pathname:o}=Nn(),l=JSON.stringify(pp(i,n.v7_relativeSplatPath)),a=R.useRef(!1);return wp(()=>{a.current=!0}),R.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=mp(u,JSON.parse(l),o,f.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:an([t,c.pathname])),(f.replace?r.replace:r.push)(c,f.state,f)},[t,r,l,o,e])}const Qk=R.createContext(null);function Kk(e){let t=R.useContext(Bt).outlet;return t&&R.createElement(Qk.Provider,{value:e},t)}function qk(){let{matches:e}=R.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function ll(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(pn),{matches:i}=R.useContext(Bt),{pathname:o}=Nn(),l=JSON.stringify(pp(i,r.v7_relativeSplatPath));return R.useMemo(()=>mp(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function Yk(e,t){return Gk(e,t)}function Gk(e,t,n,r){Si()||de(!1);let{navigator:i}=R.useContext(pn),{matches:o}=R.useContext(Bt),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Nn(),f;if(t){var c;let S=typeof t=="string"?vr(t):t;s==="/"||(c=S.pathname)!=null&&c.startsWith(s)||de(!1),f=S}else f=u;let d=f.pathname||"/",h=d;if(s!=="/"){let S=s.replace(/^\//,"").split("/");h="/"+d.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=xk(e,{pathname:h}),k=tw(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:an([s,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?s:an([s,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&k?R.createElement(ol.Provider,{value:{location:mi({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Xt.Pop}},k):k}function Xk(){let e=ow(),t=Uk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:i},n):null,null)}const Jk=R.createElement(Xk,null);class Zk extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(Bt.Provider,{value:this.props.routeContext},R.createElement(kp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ew(e){let{routeContext:t,match:n,children:r}=e,i=R.useContext(il);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Bt.Provider,{value:t},r)}function tw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=l.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);f>=0||de(!1),l=l.slice(0,Math.min(l.length,f+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<l.length;f++){let c=l[f];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=f),c.route.id){let{loaderData:d,errors:h}=n,g=c.route.loader&&d[c.route.id]===void 0&&(!h||h[c.route.id]===void 0);if(c.route.lazy||g){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((f,c,d)=>{let h,g=!1,k=null,S=null;n&&(h=a&&c.route.id?a[c.route.id]:void 0,k=c.route.errorElement||Jk,s&&(u<0&&d===0?(aw("route-fallback"),g=!0,S=null):u===d&&(g=!0,S=c.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,d+1)),m=()=>{let y;return h?y=k:g?y=S:c.route.Component?y=R.createElement(c.route.Component,null):c.route.element?y=c.route.element:y=f,R.createElement(ew,{match:c,routeContext:{outlet:f,matches:p,isDataRoute:n!=null},children:y})};return n&&(c.route.ErrorBoundary||c.route.errorElement||d===0)?R.createElement(Zk,{location:n.location,revalidation:n.revalidation,component:k,error:h,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var xp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xp||{}),bp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bp||{});function nw(e){let t=R.useContext(il);return t||de(!1),t}function rw(e){let t=R.useContext(yp);return t||de(!1),t}function iw(e){let t=R.useContext(Bt);return t||de(!1),t}function Sp(e){let t=iw(),n=t.matches[t.matches.length-1];return n.route.id||de(!1),n.route.id}function ow(){var e;let t=R.useContext(kp),n=rw(),r=Sp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function lw(){let{router:e}=nw(xp.UseNavigateStable),t=Sp(bp.UseNavigateStable),n=R.useRef(!1);return wp(()=>{n.current=!0}),R.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,mi({fromRouteId:t},o)))},[e,t])}const Yc={};function aw(e,t,n){Yc[e]||(Yc[e]=!0)}function sw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function uw(e){return Kk(e.context)}function Lt(e){de(!1)}function cw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Xt.Pop,navigator:o,static:l=!1,future:a}=e;Si()&&de(!1);let s=t.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:s,navigator:o,static:l,future:mi({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=vr(r));let{pathname:f="/",search:c="",hash:d="",state:h=null,key:g="default"}=r,k=R.useMemo(()=>{let S=pr(f,s);return S==null?null:{location:{pathname:S,search:c,hash:d,state:h,key:g},navigationType:i}},[s,f,c,d,h,g,i]);return k==null?null:R.createElement(pn.Provider,{value:u},R.createElement(ol.Provider,{children:n,value:k}))}function fw(e){let{children:t,location:n}=e;return Yk(Za(t),n)}new Promise(()=>{});function Za(e,t){t===void 0&&(t=[]);let n=[];return R.Children.forEach(e,(r,i)=>{if(!R.isValidElement(r))return;let o=[...t,i];if(r.type===R.Fragment){n.push.apply(n,Za(r.props.children,o));return}r.type!==Lt&&de(!1),!r.props.index||!r.props.children||de(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Za(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fo.apply(this,arguments)}function Cp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function dw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hw(e,t){return e.button===0&&(!t||t==="_self")&&!dw(e)}function es(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function pw(e,t){let n=es(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const mw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gw=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],yw="6";try{window.__reactRouterVersion=yw}catch{}const kw=R.createContext({isTransitioning:!1}),ww="startTransition",Gc=lg[ww];function vw(e){let{basename:t,children:n,future:r,window:i}=e,o=R.useRef();o.current==null&&(o.current=kk({window:i,v5Compat:!0}));let l=o.current,[a,s]=R.useState({action:l.action,location:l.location}),{v7_startTransition:u}=r||{},f=R.useCallback(c=>{u&&Gc?Gc(()=>s(c)):s(c)},[s,u]);return R.useLayoutEffect(()=>l.listen(f),[l,f]),R.useEffect(()=>sw(r),[r]),R.createElement(cw,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:l,future:r})}const xw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=R.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:u,preventScrollReset:f,viewTransition:c}=t,d=Cp(t,mw),{basename:h}=R.useContext(pn),g,k=!1;if(typeof u=="string"&&bw.test(u)&&(g=u,xw))try{let y=new URL(window.location.href),P=u.startsWith("//")?new URL(y.protocol+u):new URL(u),A=pr(P.pathname,h);P.origin===y.origin&&A!=null?u=A+P.search+P.hash:k=!0}catch{}let S=$k(u,{relative:i}),p=Cw(u,{replace:l,state:a,target:s,preventScrollReset:f,relative:i,viewTransition:c});function m(y){r&&r(y),y.defaultPrevented||p(y)}return R.createElement("a",Fo({},d,{href:g||S,onClick:k||o?r:m,ref:n,target:s}))}),Wl=R.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:a,to:s,viewTransition:u,children:f}=t,c=Cp(t,gw),d=ll(s,{relative:c.relative}),h=Nn(),g=R.useContext(yp),{navigator:k,basename:S}=R.useContext(pn),p=g!=null&&Ew(d)&&u===!0,m=k.encodeLocation?k.encodeLocation(d).pathname:d.pathname,y=h.pathname,P=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;i||(y=y.toLowerCase(),P=P?P.toLowerCase():null,m=m.toLowerCase()),P&&S&&(P=pr(P,S)||P);const A=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let b=y===m||!l&&y.startsWith(m)&&y.charAt(A)==="/",T=P!=null&&(P===m||!l&&P.startsWith(m)&&P.charAt(m.length)==="/"),z={isActive:b,isPending:T,isTransitioning:p},j=b?r:void 0,C;typeof o=="function"?C=o(z):C=[o,b?"active":null,T?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(z):a;return R.createElement(be,Fo({},c,{"aria-current":j,className:C,ref:n,style:D,to:s,viewTransition:u}),typeof f=="function"?f(z):f)});var ts;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ts||(ts={}));var Xc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xc||(Xc={}));function Sw(e){let t=R.useContext(il);return t||de(!1),t}function Cw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:a}=t===void 0?{}:t,s=vp(),u=Nn(),f=ll(e,{relative:l});return R.useCallback(c=>{if(hw(c,n)){c.preventDefault();let d=r!==void 0?r:Do(u)===Do(f);s(e,{replace:d,state:i,preventScrollReset:o,relative:l,viewTransition:a})}},[u,s,f,r,i,n,e,o,l,a])}function Pw(e){let t=R.useRef(es(e)),n=R.useRef(!1),r=Nn(),i=R.useMemo(()=>pw(r.search,n.current?null:t.current),[r.search]),o=vp(),l=R.useCallback((a,s)=>{const u=es(typeof a=="function"?a(i):a);n.current=!0,o("?"+u,s)},[o,i]);return[i,l]}function Ew(e,t){t===void 0&&(t={});let n=R.useContext(kw);n==null&&de(!1);let{basename:r}=Sw(ts.useViewTransitionState),i=ll(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=pr(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=pr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ja(i.pathname,l)!=null||Ja(i.pathname,o)!=null}const Pp="sulitfinds-theme";function Ep(){const e=localStorage.getItem(Pp);return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ns(e){document.documentElement.classList.toggle("dark",e==="dark"),localStorage.setItem(Pp,e)}function Aw(){ns(Ep())}function Tw(){const[e,t]=R.useState("light");R.useEffect(()=>{const r=Ep();t(r),ns(r)},[]);const n=()=>{const r=e==="dark"?"light":"dark";t(r),ns(r)};return v.jsxs("button",{type:"button",onClick:n,className:"btn-ghost h-11 w-11 p-0 transition-colors","aria-label":"Toggle theme",title:"Toggle theme",children:[v.jsx("span",{className:"sr-only",children:"Toggle theme"}),e==="dark"?v.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("circle",{cx:"12",cy:"12",r:"4"}),v.jsx("path",{d:"M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"})]}):v.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",className:"h-5 w-5",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z"})})]})}const Jc=({isActive:e})=>`nav-link text-sm ${e?"border-[color:var(--color-accent)] bg-surface text-text":"text-muted"}`;function Lw(){return v.jsx("header",{className:"border-b-2 border-border bg-bg",children:v.jsx("div",{className:"mx-auto w-full max-w-5xl px-6 py-4",children:v.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[v.jsxs(Wl,{to:"/",className:"flex items-center gap-3 text-lg font-semibold text-text",children:[v.jsx("img",{src:"/logo/websitelogo.png",alt:"SulitFinds logo",className:"h-9 w-9 rounded-full object-cover",loading:"lazy"}),"SulitFinds"]}),v.jsxs("div",{className:"flex w-full items-center justify-between gap-3 sm:w-auto",children:[v.jsxs("nav",{className:"flex flex-wrap items-center gap-2","aria-label":"Primary",children:[v.jsx(Wl,{to:"/blog",className:Jc,children:"Blog"}),v.jsx(Wl,{to:"/about",className:Jc,children:"About"})]}),v.jsx("div",{className:"flex items-center",children:v.jsx(Tw,{})})]})]})})})}function Iw(){return v.jsx("footer",{className:"border-t-2 border-border bg-bg py-6 text-sm text-muted",children:v.jsxs("div",{className:"mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 text-center",children:[v.jsx("span",{children:"© 2026 SulitFinds. All rights reserved."}),v.jsxs("span",{children:["Affiliate links may earn us a commission at no extra cost to you. View the"," ",v.jsx(be,{to:"/disclaimer",className:"link",children:"disclaimer"})," ","and"," ",v.jsx(be,{to:"/privacy",className:"link",children:"privacy policy"}),"."]})]})})}const Ul="sulitfinds_cookie_consent";function Rw(){const[e,t]=R.useState(!1);R.useEffect(()=>{if(!localStorage.getItem(Ul)){const o=setTimeout(()=>t(!0),1e3);return()=>clearTimeout(o)}},[]);function n(){localStorage.setItem(Ul,"accepted"),t(!1)}function r(){localStorage.setItem(Ul,"declined"),t(!1);const i=window;i.gtag&&i.gtag("consent","update",{analytics_storage:"denied"})}return e?v.jsx("div",{className:"fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-surface p-4 shadow-lg",children:v.jsxs("div",{className:"mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",children:[v.jsxs("p",{className:"text-sm text-muted",children:["We use cookies and analytics to understand how visitors use our site and to improve your experience."," ",v.jsx(be,{to:"/privacy",className:"link",children:"Learn more"})]}),v.jsxs("div",{className:"flex gap-3",children:[v.jsx("button",{onClick:r,className:"btn-ghost px-4 py-2 text-sm",children:"Decline"}),v.jsx("button",{onClick:n,className:"btn-primary px-4 py-2 text-sm",children:"Accept"})]})]})}):null}function zw(){return v.jsxs("div",{className:"min-h-screen bg-bg text-text",children:[v.jsx(Lw,{}),v.jsx("main",{className:"mx-auto w-full max-w-5xl px-6 pb-16 pt-10",children:v.jsx(uw,{})}),v.jsx(Iw,{}),v.jsx(Rw,{})]})}function _w(){const e=Nn();return R.useEffect(()=>{if(e.hash){const t=document.querySelector(e.hash);if(t){t.scrollIntoView({behavior:"auto",block:"start"});return}}window.scrollTo({top:0,left:0,behavior:"auto"})},[e.pathname,e.search,e.hash]),null}const mr="SulitFinds",Be="https://sulitfinds.com",Nw="Budget-friendly product recommendations and guides for Filipino buyers.",Dw=`${Be}/og-default.png`;function vt(e,t,n){let r=document.querySelector(`meta[${n}="${e}"]`);r||(r=document.createElement("meta"),r.setAttribute(n,e),document.head.appendChild(r)),r.setAttribute("content",t)}function Fw(e,t){let n=document.querySelector(`link[rel="${e}"]`);n||(n=document.createElement("link"),n.setAttribute("rel",e),document.head.appendChild(n)),n.setAttribute("href",t)}function cn({title:e,description:t=Nw,canonicalPath:n="",image:r=Dw,type:i="website"}){return R.useEffect(()=>{const o=e?`${e} | ${mr}`:mr,l=`${Be}${n}`,a=r!=null&&r.startsWith("http")?r:`${Be}${r}`;document.title=o,vt("description",t,"name"),vt("og:title",o,"property"),vt("og:description",t,"property"),vt("og:type",i,"property"),vt("og:url",l,"property"),vt("og:image",a,"property"),vt("twitter:card","summary_large_image","name"),vt("twitter:title",o,"name"),vt("twitter:description",t,"name"),vt("twitter:image",a,"name"),Fw("canonical",l)},[e,t,n,r,i]),null}function Mw(e){const t={"@context":"https://schema.org","@type":"Article",headline:e.title,description:e.description,image:e.coverImage?e.coverImage.startsWith("http")?e.coverImage:`${Be}${e.coverImage}`:`${Be}/og-default.png`,datePublished:e.date,dateModified:e.date,author:{"@type":"Organization",name:mr,url:Be},publisher:{"@type":"Organization",name:mr,url:Be,logo:{"@type":"ImageObject",url:`${Be}/logo/websitelogo.png`}},mainEntityOfPage:{"@type":"WebPage","@id":`${Be}/blog/${e.slug}`}};return JSON.stringify(t)}function jw(e){const t={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:e.map((n,r)=>({"@type":"ListItem",position:r+1,name:n.name,item:n.url}))};return JSON.stringify(t)}function Ow(){return JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:mr,url:Be,description:"Budget-friendly product recommendations and guides for Filipino buyers.",publisher:{"@type":"Organization",name:mr,url:Be}})}function Bw({post:e}){const t=Mw(e),n=jw([{name:"Home",url:Be},{name:"Blog",url:`${Be}/blog`},{name:e.title,url:`${Be}/blog/${e.slug}`}]);return v.jsxs(v.Fragment,{children:[v.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:t}}),v.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:n}})]})}function Ap(e){const t=new Date(e);return Number.isNaN(t.getTime())?e:new Intl.DateTimeFormat("en-PH",{month:"long",day:"2-digit",year:"numeric"}).format(t)}function Mo({post:e}){return v.jsxs("article",{className:"card",children:[e.coverImage?v.jsx(be,{to:`/blog/${e.slug}`,className:"mb-4 block overflow-hidden rounded-xl",children:v.jsx("img",{src:e.coverImage,alt:e.title,className:"h-44 w-full object-cover",loading:"lazy"})}):null,v.jsxs("div",{className:"mb-3 flex items-center gap-3 text-xs font-medium text-muted",children:[v.jsx("span",{children:Ap(e.date)}),v.jsx("span",{className:"chip",children:e.category}),v.jsx("span",{children:e.readingTime})]}),v.jsx("h3",{className:"text-xl font-semibold text-text",children:v.jsx(be,{to:`/blog/${e.slug}`,className:"link-muted",children:e.title})}),v.jsx("p",{className:"mt-2 text-sm leading-relaxed text-muted",children:e.description}),e.tags.length>0?v.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:e.tags.slice(0,3).map(t=>v.jsxs("span",{className:"tag",children:["#",t]},t))}):null,v.jsx(be,{to:`/blog/${e.slug}`,className:"mt-4 inline-flex text-sm font-semibold link",children:"Read more →"})]})}const Ww=`---\r
title: "Budget Air Purifiers for Small Bedrooms in the Philippines"\r
slug: "budget-air-purifiers-small-bedrooms-ph"\r
date: "2026-01-19"\r
category: "Home Essentials"\r
tags: ["air purifier", "bedroom", "budget", "philippines", "allergy"]\r
description: "A practical guide to choosing a compact air purifier for small bedrooms, with simple tips and budget friendly picks." \r
coverImage: "/images/cover-air-purifier.png"\r
---\r
\r
Air purifiers can help small bedrooms feel fresher, especially when dust, smoke, or pet dander builds up. The challenge is choosing one that is small enough for a tight room while still moving enough air. This guide focuses on affordable, compact models that fit small spaces in the Philippines and explains what to check before you buy.\r
\r
**Disclosure:** Some links in this post are affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Match purifier size to room size\r
- Understand filters and maintenance costs\r
- Keep noise low for better sleep\r
- Compare four compact budget picks\r
\r
## Start with room size and airflow\r
\r
Small bedrooms often range from 8 to 15 square meters. A purifier should be rated for a similar area. If the listing uses square meters or square feet, pick a model that covers your room size or slightly above it. Bigger is fine, but very large units can be noisy and take up floor space.\r
\r
Look for these listing details:\r
\r
- **Coverage area** in square meters or square feet\r
- **CADR or airflow** if listed, higher is better for faster cleaning\r
- **Power draw** so you can estimate electricity use\r
\r
Do not rely on marketing terms like "large room" without the actual coverage number.\r
\r
## Filter types that matter for small rooms\r
\r
Most budget purifiers use a basic filter stack. For small bedrooms, you can keep it simple.\r
\r
- **Pre filter** catches hair and large dust. It extends the life of the main filter.\r
- **HEPA or high efficiency filter** is the main filter for dust and fine particles.\r
- **Activated carbon** helps reduce odors from cooking or smoke.\r
\r
Some listings mention UV or ionizer features. These can be optional. If you are sensitive to smells, focus on carbon filter quality and replacement availability instead of extra features.\r
\r
## Noise and sleep comfort\r
\r
A purifier that runs at night should not be too loud. Budget units often have a lower noise level only on the lowest fan setting. That is fine for sleep, but it also means slower cleaning.\r
\r
Use this approach:\r
\r
- Run the unit at a higher speed for 15 to 30 minutes before bedtime.\r
- Switch to low or sleep mode while you sleep.\r
- Place the purifier slightly away from the bed so airflow does not blow directly at your face.\r
\r
Check reviews for noise comments. If many buyers say the unit is loud even on low, skip it.\r
\r
## Placement tips for tight spaces\r
\r
In a small bedroom, placement matters more than you think.\r
\r
- Keep the air intake at least 20 cm away from walls or curtains.\r
- Avoid placing it under a desk where airflow is blocked.\r
- Place it near the center or closer to where you sleep, but not against the bed.\r
\r
A purifier cannot work well if its intake is blocked by furniture or walls.\r
\r
## Maintenance and filter costs\r
\r
The purifier is only half the cost. Filters need replacing every few months depending on use and dust levels.\r
\r
Before buying, confirm:\r
\r
- Replacement filters are easy to find locally\r
- The price of filters fits your budget\r
- The filter shape and model name are clear\r
\r
If filters are hard to find, you may end up with a purifier you cannot maintain.\r
\r
## Estimate filter cost before buying\r
\r
Budget purifiers can become expensive if filters are costly or replaced too often. Use a simple estimate:\r
\r
- Check the recommended replacement interval in months\r
- Check the price of the replacement filter\r
- Multiply the filter price by how many times you expect to replace it each year\r
\r
If the annual filter cost is too high, consider a slightly different model with cheaper filters. A modestly higher upfront price can still be cheaper in the long run.\r
\r
## Common mistakes to avoid\r
\r
These mistakes are common in small bedrooms:\r
\r
- Buying a purifier for a large room and then running it only on low because it is too loud\r
- Placing the purifier in a tight corner where air intake is blocked\r
- Ignoring filter availability until after purchase\r
- Expecting the purifier to solve odors from strong sources like cooking smoke without proper ventilation\r
\r
Avoid these and the purifier will work better with less effort.\r
\r
## Recommendation section 1: Compact smart purifier for very small rooms\r
\r
This is a good fit for tiny bedrooms or shared spaces where you want a compact body and easy controls.\r
\r
**Model to look up:**\r
\r
- [Xiaomi Smart Air Purifier 4 Compact](https://s.shopee.ph/3fxXopT10r)\r
\r
**Why it is a solid choice**\r
\r
- Small footprint for desks or bedside placement\r
- Simple controls and easy filter access\r
- Widely available replacement filters\r
\r
## Recommendation section 2: Mini purifier for bedside use\r
\r
If you want a small unit just for sleeping comfort, a mini purifier can be enough when the room is small.\r
\r
**Model to look up:**\r
\r
- [Levoit Core Mini Air Purifier](https://s.shopee.ph/qdMReqOoC)\r
\r
**Why it is a solid choice**\r
\r
- Compact body that fits on a small table\r
- Low noise at night on the lowest setting\r
- Simple design with easy to replace filter\r
\r
## Recommendation section 3: Simple budget model for light dust control\r
\r
This model is a basic pick if you want straightforward filtration without extras.\r
\r
**Model to look up:**\r
\r
- [Sharp FP-J30E Air Purifier](https://s.shopee.ph/60LSbRuSmn)\r
\r
**Why it is a solid choice**\r
\r
- Straightforward filter stack for dust and odors\r
- Easy to place near a wall or corner\r
- Good for small rooms with light dust levels\r
\r
## Recommendation section 4: Low cost compact HEPA option\r
\r
This is a generic option that can be useful if you want the lowest price for a tiny room. Confirm filter availability before buying.\r
\r
**Model to look up:**\r
\r
- [Compact HEPA Air Purifier with UV](https://s.shopee.ph/2VlaR6wMGR)\r
\r
**Why it is a solid choice**\r
\r
- Very small and easy to move\r
- Basic filtration for light use\r
- Suitable for dorms or small bedrooms\r
\r
## Quick checklist before you buy\r
\r
Use this list to avoid common mistakes:\r
\r
- The coverage area matches your room size\r
- Replacement filters are available locally\r
- The purifier has a low or sleep mode\r
- The intake is not blocked by furniture\r
\r
## Simple routine for better results\r
\r
A purifier works best when the room is kept reasonably clean. Add these habits:\r
\r
- Dust surfaces once a week to reduce filter load\r
- Keep windows closed during heavy traffic or smoke hours\r
- Run the purifier for 30 minutes before bedtime\r
\r
## Related posts\r
\r
- See emergency lighting tips in [rechargeable-led-emergency-lights-ph](/blog/rechargeable-led-emergency-lights-ph)\r
- Compare cooking options in [budget-induction-cookers-small-apartments-ph](/blog/budget-induction-cookers-small-apartments-ph)\r
\r
## Soft CTA\r
\r
Pick a purifier that fits your room size and budget, then focus on filter availability. A compact model with easy filter access is often better than a bigger unit that is hard to maintain.\r
\r
*Details may change. Always confirm coverage area, filter model, and power details in the listing.*\r
\r
## Quick FAQ\r
\r
**Do I need a purifier with an app?**\r
\r
No. Apps are convenient, but they are not required for small rooms. Focus on filter quality and noise level first.\r
\r
**Can a purifier replace cleaning?**\r
\r
No. Purifiers help reduce airborne dust, but you still need basic cleaning to keep surfaces clear.\r
\r
**How long should I run it each day?**\r
\r
If your room is small, 2 to 4 hours can help, especially before bedtime. You can also run it longer on low mode.\r
\r
## Link Map (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Xiaomi Smart Air Purifier 4 Compact - https://s.shopee.ph/3fxXopT10r - Recommendation section 1\r
- Levoit Core Mini Air Purifier - https://s.shopee.ph/qdMReqOoC - Recommendation section 2\r
- Sharp FP-J30E Air Purifier - https://s.shopee.ph/60LSbRuSmn - Recommendation section 3\r
- Compact HEPA Air Purifier with UV - https://s.shopee.ph/2VlaR6wMGR - Recommendation section 4\r
\r
## Affiliate Link Audit (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Xiaomi Smart Air Purifier 4 Compact - https://s.shopee.ph/3fxXopT10r\r
- Levoit Core Mini Air Purifier - https://s.shopee.ph/qdMReqOoC\r
- Sharp FP-J30E Air Purifier - https://s.shopee.ph/60LSbRuSmn\r
- Compact HEPA Air Purifier with UV - https://s.shopee.ph/2VlaR6wMGR\r
\r
## Affiliate Placeholder Replacement Report\r
\r
Do not publish this section.\r
\r
No affiliate placeholders were found in this article.\r
\r
- Total recommended products: 4\r
- Total placeholders found: 0\r
- Counts match: YES\r
`,Uw=`---\r
title: "Budget Baby Essentials for New Parents in the Philippines"\r
slug: "budget-baby-essentials-new-parents-ph"\r
date: "2026-01-19"\r
category: "Baby"\r
tags: ["baby", "parenting", "baby care", "essentials", "budget", "philippines"]\r
description: "A practical guide to budget baby essentials for new parents in the Philippines, with five Shopee picks for feeding, bathing, and everyday care."\r
coverImage: "/images/cover-baby-essentials.jpg"\r
---\r
\r
New parents face a long list of baby essentials, and costs add up quickly. Many budget options work just as well as premium brands for everyday needs. This guide covers what to prioritize and shares five picks from Shopee that help new parents save without sacrificing quality.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Identify must-have vs nice-to-have items.\r
- Prioritize safety and hygiene basics.\r
- Choose practical feeding and bathing items.\r
- Review five budget picks for new parents.\r
- Quick FAQ and tips for first-time buyers.\r
\r
## Must-haves vs nice-to-haves\r
\r
Before buying, separate essentials from extras:\r
\r
**Must-haves:**\r
- Feeding bottles and nipples\r
- Diapers and wipes\r
- Bath towels and washcloths\r
- Basic skincare (lotion, soap)\r
- Thermometer for health monitoring\r
\r
**Nice-to-haves (can wait):**\r
- Fancy bottle warmers\r
- Automated rockers\r
- Matching nursery decor\r
\r
Focus your initial budget on items you will use daily from day one.\r
\r
## Safety and hygiene basics\r
\r
For baby products, safety is non-negotiable:\r
\r
- **BPA-free materials** for anything that touches food or mouth.\r
- **Soft, non-toxic fabrics** for items against baby skin.\r
- **Proper labeling** with age recommendations and certifications.\r
\r
Budget products can meet safety standards. Check product descriptions for BPA-free claims and look for consistent positive reviews mentioning material quality.\r
\r
## Feeding essentials\r
\r
Feeding gear gets heavy daily use. Consider:\r
\r
- **Bottle material:** Plastic is lighter and less breakable; glass is easier to clean and more durable long-term.\r
- **Nipple flow rate:** Match to baby age (slow flow for newborns).\r
- **Easy cleaning:** Wide-neck bottles are simpler to scrub.\r
\r
Buy a starter set of 2-3 bottles first. You can add more once you know your baby's preferences.\r
\r
## Bathing and skincare\r
\r
Baby skin is sensitive. For budget bathing:\r
\r
- **Gentle, fragrance-free soap** to avoid irritation.\r
- **Soft hooded towels** that dry baby quickly after baths.\r
- **Basic lotion** for dry patches, especially in air-conditioned rooms.\r
\r
Avoid overbuying skincare. Most babies need only soap, lotion, and occasional diaper cream.\r
\r
## Budget baby essentials picks\r
\r
These picks come from the batch list and match common new parent needs. Prices and availability may change, so always confirm details before checkout.\r
\r
### Pick 1: Digital thermometer for health monitoring\r
\r
**Recommended product:**\r
- [Omron MC-343F Digital Pencil-type Thermometer with Flexible Tip for Baby and Body Temperature](https://s.shopee.ph/5VPC7VsQa7)\r
\r
**Why it fits:**\r
- Omron is a trusted health brand.\r
- Flexible tip is safer and more comfortable for babies.\r
- Fast reading for fussy moments.\r
\r
**What to check:**\r
- Battery included or sold separately.\r
- Instructions for proper use and cleaning.\r
\r
### Pick 2: Training cup for transitioning from bottles\r
\r
**Recommended product:**\r
- [Dr.Isla Childern's Training Cup 240 & 300ml BPA Free Tritan Leak Proof Cartoon Cup Easy-Clean](https://s.shopee.ph/BNfliCjPb)\r
\r
**Why it fits:**\r
- BPA-free Tritan material is safe and durable.\r
- Leak-proof design for less mess.\r
- Cartoon designs appeal to toddlers during weaning.\r
\r
**What to check:**\r
- Spout type (soft vs hard) based on baby age.\r
- Dishwasher safe or hand-wash only.\r
\r
### Pick 3: PPSU feeding bottle set\r
\r
**Recommended product:**\r
- [Minitutu PPSU High capacity Feeding Bottle And Straw cup Temperature scale Leak-proof and drop-proof](https://s.shopee.ph/8pfe5dfjox)\r
\r
**Why it fits:**\r
- PPSU material is safer and more durable than standard plastic.\r
- Temperature scale helps avoid feeding at wrong temps.\r
- Leak-proof and drop-proof for active babies.\r
\r
**What to check:**\r
- Nipple size included in the set.\r
- Capacity matches your feeding needs.\r
\r
### Pick 4: Baby wipes travel pack\r
\r
**Recommended product:**\r
- [Kleenfant Baby Wipes Travel Pack 11 Sheets Mini Wipes Collection Pack of 6 Wet Wipes for Baby](https://s.shopee.ph/8pfe5dfjpy)\r
\r
**Why it fits:**\r
- Travel-sized packs fit in diaper bags.\r
- 6-pack bundle gives good value.\r
- Gentle formula for baby skin.\r
\r
**What to check:**\r
- Ingredient list if baby has sensitive skin.\r
- Seal quality to prevent drying out.\r
\r
### Pick 5: Baby moisturizing lotion\r
\r
**Recommended product:**\r
- [Tenderoo Baby Moisturizing Lotion Avocado Plant Extract Gentle Safe Soothing 200ml](https://s.shopee.ph/7pn6tnjXrc)\r
\r
**Why it fits:**\r
- FDA-approved for safety assurance.\r
- Avocado plant extract is gentle and moisturizing.\r
- 200ml size lasts several weeks with regular use.\r
\r
**What to check:**\r
- Patch test on a small skin area first.\r
- Fragrance level if baby is sensitive to scents.\r
\r
## Tips for first-time buyers\r
\r
- **Start small:** Buy starter quantities and restock as needed rather than bulk buying before you know preferences.\r
- **Check reviews:** Look for feedback from other Filipino parents about local weather and conditions.\r
- **Watch for sales:** Baby essentials often go on sale during 11.11, 12.12, and payday promotions.\r
- **Accept hand-me-downs:** Gently used items like clothes and non-feeding gear can save significant money.\r
\r
## Quick FAQ\r
\r
- **Question:** Is it safe to buy budget baby bottles?\r
\r
  **Answer:** Yes, as long as they are BPA-free and from reputable sellers. Check reviews for any quality concerns.\r
\r
- **Question:** How many feeding bottles do I need to start?\r
\r
  **Answer:** Start with 3-4 bottles. This gives you enough rotation for washing and sterilizing between feeds.\r
\r
- **Question:** What baby skincare is really necessary?\r
\r
  **Answer:** Most babies only need gentle soap, a basic lotion, and diaper cream. Add other products only if specific issues arise.\r
\r
## Soft CTA\r
\r
Focus your budget on daily-use items first. Fancy accessories can wait until you understand your baby's actual needs.\r
\r
*Prices and availability may change. Always confirm details on the listing before checkout.*\r
\r
## Related posts\r
\r
- [Budget Home Organization Ideas for Small Spaces in the Philippines](/blog/budget-home-organization-small-spaces-ph)\r
- [Budget Electric Kettles for Dorms and Small Kitchens in the Philippines](/blog/budget-electric-kettles-dorms-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: Omron MC-343F Digital Pencil-type Thermometer with Flexible Tip for Baby and Body Temperature\r
  - URL: https://s.shopee.ph/5VPC7VsQa7\r
  - Section: Pick 1: Digital thermometer for health monitoring\r
- Product: Dr.Isla Childern's Training Cup 240 & 300ml BPA Free Tritan Leak Proof Cartoon Cup Easy-Clean\r
  - URL: https://s.shopee.ph/BNfliCjPb\r
  - Section: Pick 2: Training cup for transitioning from bottles\r
- Product: Minitutu PPSU High capacity Feeding Bottle And Straw cup Temperature scale Leak-proof and drop-proof\r
  - URL: https://s.shopee.ph/8pfe5dfjox\r
  - Section: Pick 3: PPSU feeding bottle set\r
- Product: Kleenfant Baby Wipes Travel Pack 11 Sheets Mini Wipes Collection Pack of 6 Wet Wipes for Baby\r
  - URL: https://s.shopee.ph/8pfe5dfjpy\r
  - Section: Pick 4: Baby wipes travel pack\r
- Product: Tenderoo Baby Moisturizing Lotion Avocado Plant Extract Gentle Safe Soothing 200ml\r
  - URL: https://s.shopee.ph/7pn6tnjXrc\r
  - Section: Pick 5: Baby moisturizing lotion\r
`,Hw=`---\r
title: "Budget Home Organization Ideas for Small Spaces in the Philippines"\r
slug: "budget-home-organization-small-spaces-ph"\r
date: "2026-01-19"\r
category: "Home Essentials"\r
tags: ["home", "organization", "storage", "small spaces", "budget", "philippines"]\r
description: "A practical guide to budget home organization solutions for small Filipino homes, with five Shopee picks for storage, curtains, and everyday tidying."\r
coverImage: "/images/cover-home-organization.jpg"\r
---\r
\r
Small homes need smart organization to feel spacious and functional. Clutter builds up fast when storage is limited. This guide covers practical organization strategies and shares five budget picks from Shopee that help maximize small spaces.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Identify your main clutter zones.\r
- Use vertical space and hidden storage.\r
- Choose multi-functional items.\r
- Review five budget picks for home organization.\r
- Quick FAQ and small space tips.\r
\r
## Identify your clutter zones\r
\r
Walk through your home and note where clutter accumulates:\r
\r
- **Entryway:** Shoes, bags, keys, and mail.\r
- **Living area:** Remote controls, magazines, and random items.\r
- **Bedroom:** Clothes, accessories, and bedside clutter.\r
- **Kitchen:** Utensils, food containers, and cleaning supplies.\r
\r
Each zone needs a specific solution. A catch-all basket helps the entryway; drawer dividers fix kitchen chaos.\r
\r
## Use vertical space\r
\r
In small homes, walls and vertical surfaces are underused storage. Consider:\r
\r
- **Wall-mounted shelves** for books, decor, and small items.\r
- **Over-door organizers** for shoes, cleaning supplies, or accessories.\r
- **Stackable containers** that build upward instead of outward.\r
- **Tiered racks** for kitchen or bathroom counters.\r
\r
Vertical storage keeps floor space clear and makes rooms feel larger.\r
\r
## Multi-functional furniture and items\r
\r
When space is tight, every item should earn its place:\r
\r
- **Storage ottomans** serve as seating and hidden storage.\r
- **Bed frames with drawers** use under-bed space efficiently.\r
- **Foldable furniture** can be stored away when not needed.\r
- **Curtains with pockets** or hooks add functionality to window coverings.\r
\r
Before buying any home item, ask if it can serve more than one purpose.\r
\r
## Decluttering before organizing\r
\r
Organizing clutter just creates organized clutter. Before adding storage:\r
\r
- **Remove items you do not use or need.**\r
- **Donate or sell duplicates and outgrown items.**\r
- **Set a "one in, one out" rule for new purchases.**\r
\r
Less stuff means less storage needed and easier maintenance.\r
\r
## Budget home organization picks\r
\r
These picks come from the batch list and match common small home needs. Prices and availability may change, so always confirm details before checkout.\r
\r
### Pick 1: Multi-layer food storage box\r
\r
**Recommended product:**\r
- [5 Layer Household Multi layer Food Storage Box Anti flies Insulation food keeper](https://s.shopee.ph/W0WAKBSjd)\r
\r
**Why it fits:**\r
- 5 layers maximize vertical space for food storage.\r
- Anti-fly design keeps food clean and safe.\r
- Insulated layers help maintain food temperature.\r
\r
**What to check:**\r
- Overall dimensions to fit your counter or cabinet.\r
- Material quality and ease of cleaning.\r
\r
### Pick 2: Budget window curtains for room division\r
\r
**Recommended product:**\r
- [6 For 150 Window Curtain kurtina 85x185cm Elegant Kurtain non ring door curtain](https://s.shopee.ph/AUns4hZORN)\r
\r
**Why it fits:**\r
- Affordable bundle pricing (6 pieces).\r
- Can be used as window curtains or room dividers.\r
- 85x185cm size fits standard windows and doorways.\r
\r
**What to check:**\r
- Color options to match your interior.\r
- Curtain rod or hanging method needed.\r
\r
### Pick 3: Roller blinds for windows\r
\r
**Recommended product:**\r
- [180cm/160cm/150cm/120cm/90cm Curtain Blinds for Windows Korean Blinds Venetians Duo Roller Blinds](https://s.shopee.ph/2qOQwc2a0N)\r
\r
**Why it fits:**\r
- Multiple size options for different window widths.\r
- Korean-style blinds look clean and modern.\r
- Roller mechanism saves space compared to fabric curtains.\r
\r
**What to check:**\r
- Measure window width carefully before ordering.\r
- Installation method (drill or no-drill).\r
\r
### Pick 4: Sweeping robot for effortless cleaning\r
\r
**Recommended product:**\r
- [MINI Sweeping Machine Mopping Smart Automatic Cleaning Robot Sweeping Robot for Home Use Ultra-thin](https://s.shopee.ph/7KqqIslRrW)\r
\r
**Why it fits:**\r
- Automated cleaning saves time for busy households.\r
- Ultra-thin design reaches under furniture.\r
- Budget-friendly entry into robot vacuums.\r
\r
**What to check:**\r
- Battery life and charging time.\r
- Surface compatibility (tiles, wood, carpet).\r
\r
### Pick 5: Carpet for living room or bedroom\r
\r
**Recommended product:**\r
- [IMUTO Colorful Carpet Living Room Carpet Bedroom/Livingroom Rug Soft and Comfortable Antislip Floor Mat](https://s.shopee.ph/6AesujptEB)\r
\r
**Why it fits:**\r
- Adds warmth and comfort to bare floors.\r
- Anti-slip backing keeps it in place.\r
- Colorful options to match any decor style.\r
\r
**What to check:**\r
- Size options for your intended area.\r
- Cleaning instructions for maintenance.\r
\r
## Small space organization tips\r
\r
- **Use door backs:** Hang organizers on closet and bathroom doors.\r
- **Label containers:** Clear labels speed up finding items.\r
- **Rotate seasonal items:** Store off-season clothes and decor elsewhere.\r
- **Keep surfaces clear:** A clutter-free table looks bigger than it is.\r
- **Daily tidying:** 10 minutes of daily tidying prevents weekend cleaning marathons.\r
\r
## Quick FAQ\r
\r
- **Question:** How do I organize a studio apartment with no closets?\r
\r
  **Answer:** Use portable wardrobes, under-bed storage, and wall-mounted hooks. Curtains can create visual separation for a makeshift closet area.\r
\r
- **Question:** Are budget organizers durable enough for daily use?\r
\r
  **Answer:** Many budget options last well with proper use. Check reviews for durability feedback before buying.\r
\r
- **Question:** What should I organize first in a cluttered home?\r
\r
  **Answer:** Start with the area that bothers you most or the one you use daily. Quick wins build motivation for bigger projects.\r
\r
## Soft CTA\r
\r
Pick one clutter zone and solve it with a single organizer. Small improvements compound into a tidier, more functional home.\r
\r
*Prices and availability may change. Always confirm details on the listing before checkout.*\r
\r
## Related posts\r
\r
- [Budget Kitchen Organizers for Small Spaces in the Philippines](/blog/budget-kitchen-organizers-small-spaces-ph)\r
- [Rechargeable LED Emergency Lights for Brownouts in the Philippines](/blog/rechargeable-led-emergency-lights-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: 5 Layer Household Multi layer Food Storage Box Anti flies Insulation food keeper\r
  - URL: https://s.shopee.ph/W0WAKBSjd\r
  - Section: Pick 1: Multi-layer food storage box\r
- Product: 6 For 150 Window Curtain kurtina 85x185cm Elegant Kurtain non ring door curtain\r
  - URL: https://s.shopee.ph/AUns4hZORN\r
  - Section: Pick 2: Budget window curtains for room division\r
- Product: 180cm/160cm/150cm/120cm/90cm Curtain Blinds for Windows Korean Blinds Venetians Duo Roller Blinds\r
  - URL: https://s.shopee.ph/2qOQwc2a0N\r
  - Section: Pick 3: Roller blinds for windows\r
- Product: MINI Sweeping Machine Mopping Smart Automatic Cleaning Robot Sweeping Robot for Home Use Ultra-thin\r
  - URL: https://s.shopee.ph/7KqqIslRrW\r
  - Section: Pick 4: Sweeping robot for effortless cleaning\r
- Product: IMUTO Colorful Carpet Living Room Carpet Bedroom/Livingroom Rug Soft and Comfortable Antislip Floor Mat\r
  - URL: https://s.shopee.ph/6AesujptEB\r
  - Section: Pick 5: Carpet for living room or bedroom\r
`,$w=`---\r
title: "Budget Kitchen Organizers for Small Spaces in the Philippines"\r
slug: "budget-kitchen-organizers-small-spaces-ph"\r
date: "2026-01-19"\r
category: "Kitchen"\r
tags: ["kitchen", "organizers", "dish rack", "storage", "budget", "philippines"]\r
description: "A practical guide to budget kitchen organizers for small Filipino kitchens, with five Shopee picks for dish racks, sink caddies, and storage solutions."\r
coverImage: "/images/cover-kitchen-organizer.jpg"\r
---\r
\r
A cluttered kitchen counter makes cooking harder and cleanup slower. Small kitchens need smart storage that fits tight spaces without costing too much. This guide covers what to look for in budget kitchen organizers and shares five picks from Shopee that match common needs.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Identify your kitchen storage gaps.\r
- Choose organizers that fit your counter and sink area.\r
- Check materials and drainage features.\r
- Review five budget picks for small kitchens.\r
- Quick FAQ and decision checklist.\r
\r
## Start with your kitchen pain points\r
\r
Before buying any organizer, note where clutter builds up. Most small kitchens struggle with:\r
\r
- Wet dishes piling up near the sink.\r
- Sponges and soap bottles scattered around.\r
- Cooking oils and seasonings without a proper holder.\r
- Limited cabinet space for plates and bowls.\r
\r
Your pain points tell you which organizer type to prioritize.\r
\r
## Size and layout considerations\r
\r
Measure your counter space before shopping. A dish rack that fits a large kitchen might overwhelm a studio apartment counter. Consider these guidelines:\r
\r
- **Compact dish racks** work for 1-2 person households with light dishwashing loads.\r
- **Tiered racks** add vertical storage without taking more counter space.\r
- **Over-sink racks** use dead space above the sink bowl.\r
- **Sink caddies** keep sponges and brushes organized without a full rack.\r
\r
For very small kitchens, a foldable or collapsible rack can be stored away when not in use.\r
\r
## Materials that last on a budget\r
\r
Budget organizers come in different materials. Each has trade-offs:\r
\r
- **Plastic** is lightweight and cheap but can stain over time and may feel flimsy.\r
- **Carbon steel with coating** offers better durability and often includes rust-resistant finishes.\r
- **Stainless steel** is the most durable but costs more at budget price points.\r
\r
For wet environments like the sink area, prioritize rust-resistant coatings or stainless steel. Drainage holes and drip trays help keep counters dry.\r
\r
## Drainage and ventilation\r
\r
A good dish rack needs proper drainage. Look for:\r
\r
- Sloped drip trays that direct water toward the sink.\r
- Open grid designs that let air circulate for faster drying.\r
- Removable trays for easy cleaning.\r
\r
Enclosed cabinets or racks with poor ventilation can trap moisture and cause mold or mildew smells.\r
\r
## Budget kitchen organizer picks\r
\r
These picks come from the batch list and match common small kitchen needs. Prices and availability may change, so always confirm details on the listing before checkout.\r
\r
### Pick 1: Foldable dish cabinet with dust cover\r
\r
**Recommended product:**\r
- [SIV Plastic Dish Cabinet Foldable Dish Drainer Drying Rack Aesthetic With Cover For Plates Bowls](https://s.shopee.ph/9pYBHTbvnJ)\r
\r
**Why it fits:**\r
- Foldable design saves space when not in use.\r
- Dust cover keeps dishes clean between uses.\r
- Aesthetic look suits modern kitchens.\r
\r
**What to check:**\r
- Interior dimensions for your plate sizes.\r
- Weight capacity if you have heavy ceramic dishes.\r
\r
### Pick 2: Multi-tier kitchen storage cabinet\r
\r
**Recommended product:**\r
- [Kitchen Dust Cabinet Rack Dustproof Storage Cabinet Carbon Steel Multi-function Rack Enclosed Rack](https://s.shopee.ph/2VlaY03qg5)\r
\r
**Why it fits:**\r
- Carbon steel frame with dust protection.\r
- Multiple tiers maximize vertical space.\r
- Enclosed design keeps dishes and utensils clean.\r
\r
**What to check:**\r
- Assembly instructions and included hardware.\r
- Tier height adjustability for different dish sizes.\r
\r
### Pick 3: Metallic dish rack with cabinet door\r
\r
**Recommended product:**\r
- [Metallic Dish Rack Dustproof Kitchen Drain With Cabinet Door Drying Multi-functional Sink Rack](https://s.shopee.ph/1BGCxY8vNh)\r
\r
**Why it fits:**\r
- Metal construction feels sturdier than plastic.\r
- Cabinet door adds dust protection.\r
- Multi-functional design includes drainage.\r
\r
**What to check:**\r
- Drainage tray direction and spout position.\r
- Shelf spacing for bowls and larger items.\r
\r
### Pick 4: Sink sponge and soap organizer\r
\r
**Recommended product:**\r
- [Metal Sponge Drainer Rack With Towel Holder Kitchen Bathroom Sink Organizer Rack Soap Holder Organizer](https://s.shopee.ph/4q9VKHuxwp)\r
\r
**Why it fits:**\r
- Compact design for sink area essentials.\r
- Includes towel holder for added convenience.\r
- Metal frame with drainage for sponges.\r
\r
**What to check:**\r
- Base dimensions to fit your sink edge.\r
- Weight and stability with loaded items.\r
\r
### Pick 5: Budget dish drainage basket\r
\r
**Recommended product:**\r
- [Kitchen dishes, storage, drainage baskets, drying appliances, Dish drainer, Plate organizer](https://s.shopee.ph/7fTghUkBBY)\r
\r
**Why it fits:**\r
- Simple drainage basket for basic needs.\r
- Budget-friendly price point.\r
- Lightweight and easy to move.\r
\r
**What to check:**\r
- Material thickness and build quality.\r
- Drainage hole size for water flow.\r
\r
## Quick decision checklist\r
\r
- If you need dust protection, choose a cabinet-style rack with doors or covers.\r
- If counter space is very limited, pick a foldable or over-sink option.\r
- If you only need sponge and soap storage, a sink caddy is enough.\r
- If you have heavy dishes, prioritize metal frames over plastic.\r
\r
## Quick FAQ\r
\r
- **Question:** Do I need a dish rack if I have a dishwasher?\r
\r
  **Answer:** A small drying rack still helps for hand-wash-only items, quick rinses, and items that do not fit in the dishwasher.\r
\r
- **Question:** How do I prevent rust on metal dish racks?\r
\r
  **Answer:** Wipe the rack dry after heavy use, empty the drip tray regularly, and avoid leaving steel wool or abrasive sponges on the rack.\r
\r
- **Question:** Are plastic dish racks safe for food contact?\r
\r
  **Answer:** Most kitchen plastic organizers are food-safe, but dishes typically air dry without direct plastic contact. Check for BPA-free labels if concerned.\r
\r
## Soft CTA\r
\r
Start with your biggest clutter problem and pick one organizer that solves it. A single well-chosen rack can transform a messy sink area into a functional space.\r
\r
*Prices and availability may change. Always confirm details on the listing before checkout.*\r
\r
## Related posts\r
\r
- [Budget Electric Kettles for Dorms and Small Kitchens in the Philippines](/blog/budget-electric-kettles-dorms-ph)\r
- [Budget Induction Cookers for Small Apartments in the Philippines](/blog/budget-induction-cookers-small-apartments-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: SIV Plastic Dish Cabinet Foldable Dish Drainer Drying Rack Aesthetic With Cover For Plates Bowls\r
  - URL: https://s.shopee.ph/9pYBHTbvnJ\r
  - Section: Pick 1: Foldable dish cabinet with dust cover\r
- Product: Kitchen Dust Cabinet Rack Dustproof Storage Cabinet Carbon Steel Multi-function Rack Enclosed Rack\r
  - URL: https://s.shopee.ph/2VlaY03qg5\r
  - Section: Pick 2: Multi-tier kitchen storage cabinet\r
- Product: Metallic Dish Rack Dustproof Kitchen Drain With Cabinet Door Drying Multi-functional Sink Rack\r
  - URL: https://s.shopee.ph/1BGCxY8vNh\r
  - Section: Pick 3: Metallic dish rack with cabinet door\r
- Product: Metal Sponge Drainer Rack With Towel Holder Kitchen Bathroom Sink Organizer Rack Soap Holder Organizer\r
  - URL: https://s.shopee.ph/4q9VKHuxwp\r
  - Section: Pick 4: Sink sponge and soap organizer\r
- Product: Kitchen dishes, storage, drainage baskets, drying appliances, Dish drainer, Plate organizer\r
  - URL: https://s.shopee.ph/7fTghUkBBY\r
  - Section: Pick 5: Budget dish drainage basket\r
`,Vw=`---\r
title: "Budget Pet Food Options for Cats and Dogs in the Philippines"\r
slug: "budget-pet-food-cats-dogs-ph"\r
date: "2026-01-19"\r
category: "Pets"\r
tags: ["pets", "cat food", "dog food", "pet care", "budget", "philippines"]\r
description: "A practical guide to choosing budget pet food for cats and dogs in the Philippines, with four Shopee picks for everyday feeding."\r
coverImage: "/images/cover-pet-food.jpg"\r
---\r
\r
Feeding pets well does not have to drain your budget. Many affordable pet food options provide decent nutrition for everyday meals. This guide explains what to consider when choosing budget pet food and shares four picks from Shopee for cats and dogs.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Understand basic pet nutrition needs.\r
- Choose between dry kibble and wet food.\r
- Check ingredients and feeding guidelines.\r
- Review four budget picks for cats and dogs.\r
- Quick FAQ and feeding tips.\r
\r
## Basic nutrition considerations\r
\r
Pets need balanced nutrition just like humans. For cats and dogs, key nutrients include:\r
\r
- **Protein** from meat sources for muscle health.\r
- **Fats** for energy and coat condition.\r
- **Carbohydrates** for energy (more important for dogs than cats).\r
- **Vitamins and minerals** for overall health.\r
\r
Budget pet food can still provide adequate nutrition. Look for products that list a protein source (chicken, fish, beef) as the first ingredient rather than fillers.\r
\r
## Dry kibble vs wet food\r
\r
Both formats have advantages:\r
\r
**Dry kibble:**\r
- More affordable per serving.\r
- Longer shelf life after opening.\r
- Helps with dental health through chewing.\r
- Easier to store and portion.\r
\r
**Wet food (pouches or cans):**\r
- Higher moisture content, good for hydration.\r
- Often more palatable for picky eaters.\r
- Useful for pets with dental issues.\r
- Shorter shelf life once opened.\r
\r
Many pet owners mix both: dry kibble as the main diet with occasional wet food treats or toppers.\r
\r
## Reading ingredient lists\r
\r
When comparing budget options, check:\r
\r
- **First ingredient** should be a protein source, not grain or by-product meal.\r
- **Avoid excessive fillers** like corn gluten or wheat as primary ingredients.\r
- **Look for named proteins** (chicken, tuna, beef) rather than generic "meat."\r
\r
Budget pet food may use more fillers than premium brands, but a reasonable protein content still supports pet health.\r
\r
## Portion and feeding guidelines\r
\r
Overfeeding is common with budget pet food because owners assume cheaper food needs larger portions. Follow the package guidelines based on your pet's weight and activity level. Adjust portions if your pet gains or loses weight unexpectedly.\r
\r
## Budget pet food picks\r
\r
These picks come from the batch list and match common feeding needs. Prices and availability may change, so always confirm details before checkout.\r
\r
### Pick 1: Dry cat food with multiple flavors\r
\r
**Recommended product:**\r
- [PetMarra Adult Cat Kitten Dry Food Oceanfish Chicken Liver Flavor 1kg Collection cats kibble](https://s.shopee.ph/6KyJ72pFuD)\r
\r
**Why it fits:**\r
- 1kg size is practical for single-cat households.\r
- Multiple flavor options let you find what your cat prefers.\r
- Budget-friendly price point for everyday feeding.\r
\r
**What to check:**\r
- Ingredient list for protein content.\r
- Transition gradually if switching from another brand.\r
\r
### Pick 2: Wet cat food pouches for variety\r
\r
**Recommended product:**\r
- [PetMarra Natural Meat Loaf Kitten / Cat Wet Food Pouch Oceanfish Tuna Chicken Salmon 80g Collection](https://s.shopee.ph/4VWevfwEcn)\r
\r
**Why it fits:**\r
- Wet food pouches add variety to a dry kibble diet.\r
- 80g portions are good for single servings.\r
- Multiple flavors (oceanfish, tuna, chicken, salmon) for rotation.\r
\r
**What to check:**\r
- Refrigerate unused portions after opening.\r
- Use as a topper or occasional treat rather than sole diet for cost savings.\r
\r
### Pick 3: Dry dog food for puppies and adults\r
\r
**Recommended product:**\r
- [PetMarra Adult Dog / Puppy Dry Food Beef Milk and Chicken Flavor 1kg Collection dogs kibble](https://s.shopee.ph/AAB1g5af8M)\r
\r
**Why it fits:**\r
- Available in puppy and adult formulas.\r
- 1kg size suits small to medium dogs.\r
- Beef, milk, and chicken flavors offer variety.\r
\r
**What to check:**\r
- Match the formula to your dog's life stage (puppy vs adult).\r
- Monitor portion sizes based on dog weight.\r
\r
### Pick 4: Baby bottle nipples for pet feeding (rescue use)\r
\r
**Recommended product:**\r
- [Natural Nipple Replacement Feeding bottle nipples Spiral Soft silicone teat Pacifier BPA FREE](https://s.shopee.ph/4AtoX3xVIl)\r
\r
**Why it fits:**\r
- Useful for feeding orphaned kittens or puppies.\r
- Soft silicone is gentle for young animals.\r
- BPA-free material for safety.\r
\r
**What to check:**\r
- Nipple size compatibility with your feeding bottle.\r
- Flow rate for the age of the animal.\r
\r
## Quick feeding tips\r
\r
- **Transition slowly** when switching pet food brands. Mix old and new food over 7-10 days to avoid digestive upset.\r
- **Store kibble properly** in airtight containers to maintain freshness.\r
- **Provide fresh water** at all times, especially with dry food diets.\r
- **Avoid human food** as a regular supplement; many common foods are toxic to pets.\r
\r
## Quick FAQ\r
\r
- **Question:** Is budget pet food safe for long-term feeding?\r
\r
  **Answer:** Budget pet food from reputable brands is generally safe. Check for proper packaging, expiration dates, and avoid products with damaged seals.\r
\r
- **Question:** How do I know if my pet needs a different food?\r
\r
  **Answer:** Signs include dull coat, low energy, digestive issues, or weight changes. Consult a vet if you notice persistent problems.\r
\r
- **Question:** Can I feed cat food to dogs or vice versa?\r
\r
  **Answer:** Occasionally, it is not harmful, but cat and dog nutritional needs differ. Long-term feeding of the wrong species food can cause health issues.\r
\r
## Soft CTA\r
\r
Start with a small bag to test if your pet likes the food before buying in bulk. A budget pet food that your pet actually eats is better than a premium brand they refuse.\r
\r
*Prices and availability may change. Always confirm details on the listing before checkout.*\r
\r
## Related posts\r
\r
- [Budget Kitchen Organizers for Small Spaces in the Philippines](/blog/budget-kitchen-organizers-small-spaces-ph)\r
- [Budget Home Organization Ideas for Small Spaces in the Philippines](/blog/budget-home-organization-small-spaces-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: PetMarra Adult Cat Kitten Dry Food Oceanfish Chicken Liver Flavor 1kg Collection cats kibble\r
  - URL: https://s.shopee.ph/6KyJ72pFuD\r
  - Section: Pick 1: Dry cat food with multiple flavors\r
- Product: PetMarra Natural Meat Loaf Kitten / Cat Wet Food Pouch Oceanfish Tuna Chicken Salmon 80g Collection\r
  - URL: https://s.shopee.ph/4VWevfwEcn\r
  - Section: Pick 2: Wet cat food pouches for variety\r
- Product: PetMarra Adult Dog / Puppy Dry Food Beef Milk and Chicken Flavor 1kg Collection dogs kibble\r
  - URL: https://s.shopee.ph/AAB1g5af8M\r
  - Section: Pick 3: Dry dog food for puppies and adults\r
- Product: Natural Nipple Replacement Feeding bottle nipples Spiral Soft silicone teat Pacifier BPA FREE\r
  - URL: https://s.shopee.ph/4AtoX3xVIl\r
  - Section: Pick 4: Baby bottle nipples for pet feeding (rescue use)\r
`,Qw=`---\r
title: "Budget Power Banks for Daily Carry in the Philippines"\r
slug: "budget-power-banks-daily-carry-ph"\r
date: "2026-01-19"\r
category: "Tech"\r
tags: ["power bank", "tech", "gadgets", "commute", "budget", "philippines"]\r
description: "A practical guide to choosing a budget power bank for daily use, with four Shopee picks for commuters and students in the Philippines."\r
coverImage: "/images/cover-power-bank.jpg"\r
---\r
\r
Running out of battery during a commute or a long day out is frustrating. A reliable power bank keeps your phone charged without hunting for outlets. This guide explains what to look for in a budget power bank and shares four picks from Shopee that fit common needs.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Understand capacity and charging speed basics.\r
- Match the power bank to your daily usage.\r
- Check size, weight, and port options.\r
- Review four budget picks for different needs.\r
- Quick FAQ and decision checklist.\r
\r
## Capacity basics: mAh explained\r
\r
Power bank capacity is measured in milliamp hours (mAh). Higher numbers mean more stored power, but real-world charging depends on efficiency losses.\r
\r
- **5,000mAh** typically gives 1-1.5 full charges for most smartphones.\r
- **10,000mAh** gives 2-3 full charges, good for all-day use.\r
- **20,000mAh and above** suits heavy users or charging multiple devices.\r
\r
For daily commutes and office use, 10,000mAh hits a practical balance between size and capacity.\r
\r
## Charging speed: watts matter\r
\r
Not all power banks charge at the same speed. Look for:\r
\r
- **Standard 5W-10W** charging is slow but works with any device.\r
- **18W fast charging** cuts charging time significantly for compatible phones.\r
- **20W or higher** supports faster protocols like PD (Power Delivery).\r
\r
If your phone supports fast charging, a power bank with matching output saves time. Check your phone specs before buying.\r
\r
## Size and portability\r
\r
A power bank only helps if you actually carry it. Consider:\r
\r
- **Pocket-friendly size** for light carry in jeans or small bags.\r
- **Slim designs** fit better in crowded bags.\r
- **Weight** matters for long commutes, especially in messenger bags.\r
\r
Mini or capsule-style power banks sacrifice capacity for portability. Choose based on how much you need versus how much you want to carry.\r
\r
## Port options and cables\r
\r
Check what ports the power bank offers:\r
\r
- **USB-A** is the standard port for most cables.\r
- **USB-C** supports newer devices and often enables faster charging.\r
- **Built-in cables** eliminate the need to carry separate cords.\r
\r
A power bank with both USB-A and USB-C gives flexibility for different devices.\r
\r
## Budget power bank picks\r
\r
These picks come from the batch list and match common daily carry needs. Prices and availability may change, so always confirm details before checkout.\r
\r
### Pick 1: Slim power bank with built-in cables\r
\r
**Recommended product:**\r
- [Orashare OH10 Power Bank With Built in Dual Cable Slim and Portable Fast Charging 10000mAh Capacity](https://s.shopee.ph/7AXQ6Zm5CX)\r
\r
**Why it fits:**\r
- Built-in cables mean no separate cords to carry.\r
- 10,000mAh capacity covers a full day of use.\r
- Slim design fits easily in bags and pockets.\r
- Fast charging support speeds up top-ups.\r
\r
**What to check:**\r
- Cable compatibility with your phone (Type-C, Lightning, etc.).\r
- Actual charging speed with your specific device.\r
\r
### Pick 2: Mini capsule power bank for light carry\r
\r
**Recommended product:**\r
- [Orashare PNC03 3000mAh Capsule Mini Fast Charging Powerbank With TYPE-C/iPh Port Portable Power Bank](https://s.shopee.ph/7AXQ6Zm5DY)\r
\r
**Why it fits:**\r
- Ultra-compact capsule design for pocket carry.\r
- Plugs directly into phone port, no cable needed.\r
- Good for emergency top-ups when you forget your main charger.\r
\r
**What to check:**\r
- 3,000mAh gives about 0.5-1 full charge, so it is for light backup only.\r
- Make sure the plug type matches your phone.\r
\r
### Pick 3: Digital storage bag for power bank and cables\r
\r
**Recommended product:**\r
- [Hagibis Multi-functional Digital Storage Bag Electronic Storage Bag Travel Cable Storage Bag Portable Cable Organizer](https://s.shopee.ph/9KbugYdpoE)\r
\r
**Why it fits:**\r
- Keeps your power bank, cables, and small gadgets organized.\r
- Useful for commuters who carry multiple tech accessories.\r
- Protects devices from scratches inside your main bag.\r
\r
**What to check:**\r
- Interior compartment sizes for your specific power bank.\r
- Zipper quality for frequent use.\r
\r
### Pick 4: Budget Bluetooth speaker with power features\r
\r
**Recommended product:**\r
- [Bluetooth Speaker with mic Wireless Bluetooth Dual Microphone Karaoke Speaker 3D](https://s.shopee.ph/7VAGVBkoWZ)\r
\r
**Why it fits:**\r
- Some portable speakers include power bank functionality for emergency charging.\r
- Good for group gatherings where you want music and backup power.\r
\r
**What to check:**\r
- Confirm if this model includes phone charging output.\r
- Battery capacity for power bank mode.\r
\r
## Quick decision checklist\r
\r
- If you want no cables to carry, pick a power bank with built-in cords.\r
- If you only need emergency backup, a mini capsule is enough.\r
- If you carry multiple devices, choose 10,000mAh or higher with dual ports.\r
- If organization matters, add a cable organizer bag to your setup.\r
\r
## Quick FAQ\r
\r
- **Question:** How many times can a 10,000mAh power bank charge my phone?\r
\r
  **Answer:** It depends on your phone battery size, but most smartphones with 4,000-5,000mAh batteries get 1.5-2 full charges after accounting for efficiency losses.\r
\r
- **Question:** Is it safe to use my phone while it charges from a power bank?\r
\r
  **Answer:** Yes, but heavy use while charging generates more heat. Avoid direct sunlight or hot environments during charging.\r
\r
- **Question:** How long does it take to recharge the power bank itself?\r
\r
  **Answer:** A 10,000mAh power bank typically takes 3-5 hours with a standard charger, faster with PD or QC chargers.\r
\r
## Soft CTA\r
\r
Pick a power bank that matches your daily routine. A slim 10,000mAh model handles most needs without adding bulk to your bag.\r
\r
*Prices and availability may change. Always confirm details on the listing before checkout.*\r
\r
## Related posts\r
\r
- [Affordable Bluetooth Earbuds for Daily Commutes in the Philippines](/blog/affordable-bluetooth-earbuds-commute-ph)\r
- [GOOJODOQ Turbo Mini Fan for PH Commuters: A Practical Buying Guide](/blog/goojodoq-turbo-mini-fan-commuter-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: Orashare OH10 Power Bank With Built in Dual Cable Slim and Portable Fast Charging 10000mAh Capacity\r
  - URL: https://s.shopee.ph/7AXQ6Zm5CX\r
  - Section: Pick 1: Slim power bank with built-in cables\r
- Product: Orashare PNC03 3000mAh Capsule Mini Fast Charging Powerbank With TYPE-C/iPh Port Portable Power Bank\r
  - URL: https://s.shopee.ph/7AXQ6Zm5DY\r
  - Section: Pick 2: Mini capsule power bank for light carry\r
- Product: Hagibis Multi-functional Digital Storage Bag Electronic Storage Bag Travel Cable Storage Bag Portable Cable Organizer\r
  - URL: https://s.shopee.ph/9KbugYdpoE\r
  - Section: Pick 3: Digital storage bag for power bank and cables\r
- Product: Bluetooth Speaker with mic Wireless Bluetooth Dual Microphone Karaoke Speaker 3D\r
  - URL: https://s.shopee.ph/7VAGVBkoWZ\r
  - Section: Pick 4: Budget Bluetooth speaker with power features\r
`,Kw=`---\r
title: "GOOJODOQ Turbo Mini Fan for PH Commuters: A Practical Buying Guide"\r
slug: "goojodoq-turbo-mini-fan-commuter-ph"\r
date: "2026-01-19"\r
category: "Tech"\r
tags: ["mini fan", "cooling", "commute", "portable", "budget"]\r
description: "A practical guide to handheld mini fans for hot commutes in the Philippines, with one budget friendly pick from Shopee." \r
coverImage: "/images/cover-mini-fan.jpg"\r
---\r
\r
Hot commutes are a daily reality in many Philippine cities. A handheld mini fan is a small fix that can make a bus, jeep, or tricycle ride more comfortable without taking much space. This guide focuses on one high demand option from the batch list, and it explains what to verify before you buy, so you avoid weak airflow or short battery life.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Who this mini fan is for.\r
- What the listing claims and what to verify.\r
- Key specs that matter for commuters.\r
- A practical recommendation and how to use it well.\r
- Quick FAQ.\r
\r
## Who this mini fan is for\r
\r
A handheld fan makes sense if you walk to a terminal, wait in line outdoors, or ride a packed vehicle with limited airflow. It also helps students who walk between buildings and anyone who wants a compact cooling option that fits a small bag.\r
\r
It is less useful if you expect it to cool a whole room. Handheld fans are personal cooling tools, not room coolers. For room airflow, a desk or tower fan is still a better fit.\r
\r
## What the listing claims and what you should verify\r
\r
From the listing name, the product is a rechargeable handheld mini fan with a claimed 4000 mAh battery and a turbo style airflow. These are listing claims and should be checked in the actual listing details and reviews.\r
\r
**Listing claims based on the product name**\r
\r
- Rechargeable handheld mini fan.\r
- Claimed 4000 mAh battery.\r
- Turbo or strong wind positioning.\r
\r
**What you should verify before checkout**\r
\r
- Battery capacity shown in the listing specs, not just the title.\r
- Number of speed levels and whether the fan has a low setting for quieter use.\r
- Charging port type, ideally USB C for easier cable matching.\r
- Weight and size, so it fits your bag and is comfortable to carry.\r
\r
If any spec is missing, look at review photos or Q and A sections. If those are also unclear, treat the listing as a risk and consider another option.\r
\r
## Key specs that matter for commuting\r
\r
### Battery capacity and realistic runtime\r
\r
A 4000 mAh claim often suggests longer use than a 2000 or 3000 mAh unit. Actual runtime still depends on speed level. A turbo setting can drain a battery faster, while a low or medium setting can stretch it longer. Plan your use around short bursts instead of running it at full speed the whole trip.\r
\r
### Airflow focus over room coverage\r
\r
For commuters, the goal is a steady airflow aimed at your face or neck. A compact fan with a focused airflow is often more useful than a wide but weak breeze. A turbo style fan usually focuses airflow, which can feel stronger at close range.\r
\r
### Size, grip, and portability\r
\r
Look for a grip that feels secure even with sweaty hands. A slim body and a lanyard loop can help if you walk a lot. If you carry a small sling bag, a compact fan matters more than a large battery.\r
\r
### Noise level\r
\r
Handheld fans can be noisy at high speed. If you ride public transport daily, a moderate speed option is useful. If the listing mentions multiple speed levels, that is a good sign, but check reviews to confirm.\r
\r
### Charging and convenience\r
\r
USB C charging is easier for most phones today. If the fan uses Micro USB, that is still workable, but you may need to carry an extra cable. Also check if the fan can run while charging if you plan to use it at a desk.\r
\r
## When a handheld mini fan is a smart buy\r
\r
- You commute during late morning or early afternoon when heat builds fast.\r
- You spend time waiting outdoors before boarding.\r
- You want a compact backup for office desks or classroom study areas.\r
\r
If you have a short commute and already carry a power bank, you may prefer a smaller fan with a smaller battery to save space. The best fan is the one you actually bring with you.\r
\r
## Recommended pick for budget commuters\r
\r
This is the recommended item from the batch list, chosen because it matches the commuter use case and shows strong sales in the export list. Availability and pricing may change.\r
\r
**Recommendation**\r
\r
- [GOOJODOQ Fan 4000 mAh Turbo Mini Fan Rechargeable Handheld Portable Strong Wind Electric Jet Hand](https://s.shopee.ph/7pn6tnjXqb)\r
\r
**Why it fits this use case**\r
\r
- The listing name indicates a 4000 mAh battery, which is useful for longer commutes when used at moderate speed.\r
- A turbo or strong wind positioning suggests focused airflow, which is helpful in crowded, warm rides.\r
- It is marketed as portable and handheld, which fits small bags and daily carry.\r
\r
**What to check before you buy**\r
\r
- Confirm the charging port type and included cable.\r
- Check the listed fan speeds and expected runtime per level.\r
- Review size photos to make sure it fits your daily bag.\r
\r
## Practical use tips for better value\r
\r
1. **Charge it the night before** so you start the day at full power.\r
2. **Use mid level speed on long rides** to extend runtime.\r
3. **Aim airflow slightly downward** to cool the neck and face at the same time.\r
4. **Wipe the intake grill weekly** to reduce dust buildup and keep airflow strong.\r
5. **Store it in a pouch** if your bag carries loose coins or keys, so the fan blades stay clean.\r
\r
## Who should skip this and consider another option\r
\r
- If you need to cool a whole room, get a desk or tower fan instead.\r
- If you carry almost nothing, look for a smaller 2000 to 3000 mAh fan to save weight.\r
- If you are sensitive to noise, pick a fan that clearly lists a quiet or low speed mode.\r
\r
## Mini fan vs desk fan for small rooms\r
\r
A handheld fan is for personal cooling. A desk fan is for steady airflow in a fixed spot. If your room is small and you stay at a desk, a desk fan can give more consistent airflow without holding it. If you move around or commute, the handheld fan is more practical.\r
\r
## Quick FAQ\r
\r
- Q: How long does a 4000 mAh mini fan usually last.\r
  A: It varies by speed. High speed drains faster, while mid or low speed can last longer for multiple short trips.\r
\r
- Q: Can I use it while charging.\r
  A: Some models allow it, but not all. Check the listing details or reviews for confirmation.\r
\r
- Q: Is strong wind safe for eyes.\r
  A: Avoid direct airflow into eyes at close range. Aim it slightly downward.\r
\r
- Q: Will it replace a room fan.\r
  A: No, it is for personal cooling only.\r
\r
## Related posts\r
\r
- [Budget Air Purifiers for Small Bedrooms in the Philippines](/blog/budget-air-purifiers-small-bedrooms-ph)\r
- [Affordable Bluetooth Earbuds for Daily Commutes in the Philippines](/blog/affordable-bluetooth-earbuds-commute-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: GOOJODOQ Fan 4000 mAh Turbo Mini Fan Rechargeable Handheld Portable Strong Wind Electric Jet Hand\r
  - URL: https://s.shopee.ph/7pn6tnjXqb\r
  - Section: Recommended pick for budget commuters\r
`,qw=`---\r
title: "Affordable Bluetooth Earbuds for Daily Commutes in the Philippines"\r
slug: "affordable-bluetooth-earbuds-commute-ph"\r
date: "2026-01-20"\r
category: "Tech"\r
tags: ["earbuds", "bluetooth", "commute", "budget", "philippines"]\r
description: "A practical guide to picking budget earbuds for commuting, with fit, mic, and battery tips plus affordable picks." \r
coverImage: "/images/cover-bluetooth-earbuds.jpg"\r
---\r
\r
Daily commutes in the Philippines are noisy and crowded, so earbuds need to fit well, stay stable, and keep calls clear. Many budget models look similar, but small differences in fit, mic quality, and battery life matter a lot. This guide explains what to check and lists affordable earbuds that are commonly available on Shopee.\r
\r
**Disclosure:** Some links in this post are affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Choose a fit that stays stable\r
- Prioritize clear calls and wind handling\r
- Balance battery life with case size\r
- Compare four commuter friendly budget picks\r
\r
## Fit and stability matter most\r
\r
Earbuds that do not fit well will sound worse and fall out easily. For commuting, stable fit is more important than extra features.\r
\r
Look for these signs in listings and reviews:\r
\r
- Multiple ear tip sizes included\r
- Buyers mention stable fit for walking or riding\r
- Compact shape that does not stick out too far\r
\r
If you usually wear one earbud for calls, check if the model supports single earbud use.\r
\r
## Sound and noise awareness\r
\r
Budget earbuds rarely have strong noise canceling. That is fine for commuting as long as the fit creates a good seal.\r
\r
- A good seal improves bass and blocks some noise\r
- Poor seal makes music thin and calls harder to hear\r
\r
If you want awareness of traffic sounds, keep volume moderate and use a model with balanced tuning rather than heavy bass.\r
\r
## Call quality and mic performance\r
\r
Calls are where budget earbuds often struggle. Look for reviews that mention clear voice pickup. Windy sidewalks and jeepney rides can make noise worse.\r
\r
Helpful tips:\r
\r
- Choose earbuds with multiple mics if the listing mentions it\r
- Avoid models with weak mic complaints in reviews\r
- Position your phone closer during calls if you are outside\r
\r
## Battery life and real usage\r
\r
Battery specs on listings are often optimistic. Focus on two numbers:\r
\r
- **Earbud play time** per charge\r
- **Total case battery** for a full day\r
\r
For commuters, 4 to 6 hours per charge is usually enough. The case matters more if you do long trips or forget to charge at night.\r
\r
## Controls and comfort\r
\r
Touch controls can be sensitive. If you often wear a face mask, accidental taps can be annoying. Some budget models have large touch panels that trigger easily.\r
\r
To reduce issues:\r
\r
- Look for reviews that mention reliable controls\r
- Keep hair away from touch panels when possible\r
- Use the phone for volume if controls are too sensitive\r
\r
## Latency for video and casual games\r
\r
If you watch videos on the commute, basic latency is usually fine. For casual games, some models offer a low latency or gaming mode. It will not be perfect, but it helps reduce audio delay.\r
\r
## Weather and sweat resistance\r
\r
Commutes often include heat, rain, or sweat. If you walk a lot, look for a basic IP rating. Even IPX4 can help with light rain or sweat. Do not wash earbuds under running water, and always dry them before returning them to the case.\r
\r
## Common mistakes to avoid\r
\r
- Buying a bass heavy model that becomes tiring at high volume\r
- Choosing a shiny finish that scratches quickly in pockets\r
- Ignoring single earbud use if you take calls while walking\r
- Using the largest ear tips by default, which can cause pain and poor seal\r
\r
## Recommendation section 1: Compact buds with balanced sound\r
\r
A compact option with a small case for easy pocket carry.\r
\r
**Model to look up:**\r
\r
- [Anker Soundcore Life P2 Mini](https://s.shopee.ph/7KqqC7eiJC)\r
\r
**Why it is a solid choice**\r
\r
- Small case that fits in a front pocket\r
- Balanced sound for mixed content\r
- Good fit for many ear shapes\r
\r
## Recommendation section 2: Simple entry level buds for daily use\r
\r
A straightforward model for commuters who want a basic, reliable pair.\r
\r
**Model to look up:**\r
\r
- [Redmi Buds 4 Lite](https://s.shopee.ph/6Aeso57P9Z)\r
\r
**Why it is a solid choice**\r
\r
- Lightweight fit for longer wear\r
- Simple pairing and controls\r
- Good value for casual listening\r
\r
## Recommendation section 3: Slim case earbuds for tight pockets\r
\r
If you carry a small bag or pocket wallet, a slimmer case helps.\r
\r
**Model to look up:**\r
\r
- [Baseus Bowie WM02](https://s.shopee.ph/30hr2I5nSV)\r
\r
**Why it is a solid choice**\r
\r
- Slim case design\r
- Easy to handle for quick stops\r
- Affordable price with decent battery\r
\r
## Recommendation section 4: Budget buds with longer total battery\r
\r
If you want more total hours across the day, this is a strong budget pick.\r
\r
**Model to look up:**\r
\r
- [QCY T13](https://s.shopee.ph/Lh5rR5O4s)\r
\r
**Why it is a solid choice**\r
\r
- Longer total battery from the case\r
- Good value for long commutes\r
- Comfortable shape for daily use\r
\r
## Care tips for longer life\r
\r
Earbuds collect dust and earwax. Simple care helps them last longer.\r
\r
- Wipe the ear tips weekly with a clean cloth\r
- Keep the case dry and close the lid when not in use\r
- Avoid charging in very hot places like a parked car\r
\r
If the ear tips feel loose or worn, replace them. Many generic ear tips fit budget earbuds, and a better seal can improve both sound and mic performance.\r
\r
## Quick checklist before you buy\r
\r
- Ear tips included in multiple sizes\r
- Review comments mention stable fit\r
- Mic quality is acceptable in noisy areas\r
- The case is small enough for your pocket or bag\r
\r
## Related posts\r
\r
- Improve home comfort with [budget-air-purifiers-small-bedrooms-ph](/blog/budget-air-purifiers-small-bedrooms-ph)\r
- Plan for brownouts with [rechargeable-led-emergency-lights-ph](/blog/rechargeable-led-emergency-lights-ph)\r
\r
## Soft CTA\r
\r
Pick earbuds that fit your ears first, then compare battery and mic comments. A stable fit and clear calls matter more than extra features during daily commutes.\r
\r
*Details may change. Always confirm battery ratings, controls, and warranty details in the listing.*\r
\r
## Quick FAQ\r
\r
**Are cheap earbuds safe for daily use?**\r
\r
Yes, as long as you keep volume moderate and take breaks during long listening sessions.\r
\r
**How do I improve call quality?**\r
\r
Use one earbud, hold your phone closer in noisy areas, and avoid windy spots when possible.\r
\r
**Do I need noise canceling for commuting?**\r
\r
Not always. A good seal and balanced sound are enough for most daily commutes.\r
\r
## Link Map (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Anker Soundcore Life P2 Mini - https://s.shopee.ph/7KqqC7eiJC - Recommendation section 1\r
- Redmi Buds 4 Lite - https://s.shopee.ph/6Aeso57P9Z - Recommendation section 2\r
- Baseus Bowie WM02 - https://s.shopee.ph/30hr2I5nSV - Recommendation section 3\r
- QCY T13 - https://s.shopee.ph/Lh5rR5O4s - Recommendation section 4\r
\r
## Affiliate Link Audit (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Anker Soundcore Life P2 Mini - https://s.shopee.ph/7KqqC7eiJC\r
- Redmi Buds 4 Lite - https://s.shopee.ph/6Aeso57P9Z\r
- Baseus Bowie WM02 - https://s.shopee.ph/30hr2I5nSV\r
- QCY T13 - https://s.shopee.ph/Lh5rR5O4s\r
\r
## Affiliate Placeholder Replacement Report\r
\r
Do not publish this section.\r
\r
No affiliate placeholders were found in this article because real links were provided in Phase 2.\r
\r
- Total recommended products: 4\r
- Total placeholders found: 0\r
- Counts match: YES\r
`,Yw=`---\r
title: "Budget Electric Kettles for Dorms and Small Kitchens in the Philippines"\r
slug: "budget-electric-kettles-dorms-ph"\r
date: "2026-01-21"\r
category: "Home Essentials"\r
tags: ["electric kettle", "kitchen", "dorm", "budget", "philippines"]\r
description: "A simple guide to choosing a compact electric kettle for small kitchens, with safety tips and budget picks." \r
coverImage: "/images/cover-electric-kettle.jpg"\r
---\r
\r
Electric kettles are practical for dorms and small kitchens because they boil water fast and take up little space. The right kettle should match your daily routine, be easy to clean, and include basic safety features. This guide covers what to look for and highlights affordable models that are commonly available in the Philippines.\r
\r
**Disclosure:** Some links in this post are affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Choose the right capacity for your space\r
- Focus on safety and build quality\r
- Make cleaning easy with the right materials\r
- Compare three budget friendly kettles\r
\r
## Capacity and size basics\r
\r
For dorms and small kitchens, smaller kettles are easier to store and faster to boil. Use these ranges:\r
\r
- **1.0L** for solo use or light daily drinks\r
- **1.5L** for couples or shared dorm use\r
- **1.8L** for small families or frequent cooking use\r
\r
If you rarely boil a full pot, a 1.0L or 1.5L kettle is usually enough. Larger kettles take more counter space and may boil slower if you only fill them halfway.\r
\r
## Safety features that matter\r
\r
Budget kettles can still be safe if they have basic protections.\r
\r
- **Auto shutoff** to prevent overheating\r
- **Boil dry protection** so the kettle turns off if empty\r
- **Secure lid** to avoid splashing when you pour\r
\r
Check listings for these terms. If a kettle does not mention auto shutoff, skip it.\r
\r
## Material and cleaning\r
\r
Two common materials are plastic and stainless steel.\r
\r
- **Plastic** is lighter and often cheaper. It can hold odors if not cleaned well.\r
- **Stainless steel** is sturdier and easier to clean, but it can get hot on the outside.\r
\r
If you are sensitive to smell, choose a stainless kettle and wash it before first use. Use mild soap and rinse thoroughly.\r
\r
## Spout and pouring control\r
\r
Small dorm kitchens often have tight sinks. A controlled spout helps prevent spills.\r
\r
- Look for a spout that pours in a smooth stream\r
- Avoid overly wide spouts that splash\r
- Choose a handle that feels stable in your grip\r
\r
## Power and boiling speed\r
\r
Most budget kettles range from 1500W to 2000W. Higher wattage boils faster, but it can draw more power. If your dorm has shared outlets, a 1500W model is usually enough.\r
\r
## Taste and odor tips for new kettles\r
\r
New kettles can have a slight smell. You can reduce it with a quick rinse routine:\r
\r
- Boil a full pot of water and discard it\r
- Add a slice of lemon or a small amount of vinegar and boil again\r
- Rinse and boil plain water once more\r
\r
This simple routine helps remove manufacturing odors before daily use.\r
\r
## Recommendation section 1: Reliable 1.5L stainless kettle\r
\r
A good mid size kettle that fits small kitchens and daily use.\r
\r
**Model to look up:**\r
\r
- [Hanabishi 1.5L Stainless Electric Kettle](https://s.shopee.ph/1gCTTTn3wC)\r
\r
**Why it is a solid choice**\r
\r
- Balanced size for solo or small households\r
- Stainless body is easy to clean\r
- Common model with easy to find parts\r
\r
## Recommendation section 2: Larger 1.8L kettle for shared use\r
\r
A budget option if you boil water for multiple people or for cooking.\r
\r
**Model to look up:**\r
\r
- [Tough Mama 1.8L Electric Kettle](https://s.shopee.ph/gJwHfhXMT)\r
\r
**Why it is a solid choice**\r
\r
- Larger capacity for shared kitchens\r
- Simple controls and wide lid\r
- Easy to find replacement parts\r
\r
## Recommendation section 3: Compact 1.0L travel kettle\r
\r
If space is very tight, a small kettle can be the most practical option.\r
\r
**Model to look up:**\r
\r
- [Asahi 1.0L Travel Electric Kettle](https://s.shopee.ph/806X1KoQiZ)\r
\r
**Why it is a solid choice**\r
\r
- Compact footprint and light weight\r
- Fast for small water portions\r
- Easy to store in a cabinet\r
\r
## Descaling and maintenance tips\r
\r
Kettles build mineral scale over time. You can clean it with basic items.\r
\r
- Mix equal parts water and vinegar\r
- Boil the mixture, then let it sit for 15 minutes\r
- Rinse thoroughly and boil clean water once\r
\r
Do this once a month if you use the kettle daily.\r
\r
## Common mistakes to avoid\r
\r
- Filling above the max line, which can cause splashes\r
- Leaving water inside for days, which speeds up scaling\r
- Pulling the kettle by the cord, which damages the base\r
- Using abrasive scrubbers that scratch the inner surface\r
\r
## Quick checklist before checkout\r
\r
- Capacity matches your daily use\r
- Auto shutoff and boil dry protection are listed\r
- The lid opens wide enough for cleaning\r
- The cord length fits your outlet placement\r
\r
## Related posts\r
\r
- Plan backup power with [rechargeable-led-emergency-lights-ph](/blog/rechargeable-led-emergency-lights-ph)\r
- Compare cooking options in [budget-induction-cookers-small-apartments-ph](/blog/budget-induction-cookers-small-apartments-ph)\r
\r
## Soft CTA\r
\r
Choose a kettle that fits your space and daily routine. A small, safe kettle with a clean pour is more useful than a larger unit that is hard to store.\r
\r
*Details may change. Always confirm capacity, materials, and safety features in the listing.*\r
\r
## Quick FAQ\r
\r
**Is plastic safe for boiling water?**\r
\r
Food safe plastic kettles are common, but if you are sensitive to smell, stainless is a safer pick.\r
\r
**Can I boil small amounts of water?**\r
\r
Yes, but stay above the minimum line so the kettle does not overheat.\r
\r
**Do I need temperature control?**\r
\r
Not for basic use. It is a nice extra for tea lovers, but not required for most dorm routines.\r
\r
## Link Map (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Hanabishi 1.5L Stainless Electric Kettle - https://s.shopee.ph/1gCTTTn3wC - Recommendation section 1\r
- Tough Mama 1.8L Electric Kettle - https://s.shopee.ph/gJwHfhXMT - Recommendation section 2\r
- Asahi 1.0L Travel Electric Kettle - https://s.shopee.ph/806X1KoQiZ - Recommendation section 3\r
\r
## Affiliate Link Audit (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Hanabishi 1.5L Stainless Electric Kettle - https://s.shopee.ph/1gCTTTn3wC\r
- Tough Mama 1.8L Electric Kettle - https://s.shopee.ph/gJwHfhXMT\r
- Asahi 1.0L Travel Electric Kettle - https://s.shopee.ph/806X1KoQiZ\r
\r
## Affiliate Placeholder Replacement Report\r
\r
Do not publish this section.\r
\r
No affiliate placeholders were found in this article because real links were provided in Phase 2.\r
\r
- Total recommended products: 3\r
- Total placeholders found: 0\r
- Counts match: YES\r
`,Gw=`---\r
title: "Rechargeable LED Emergency Lights for Brownouts in the Philippines"\r
slug: "rechargeable-led-emergency-lights-ph"\r
date: "2026-01-22"\r
category: "Home Essentials"\r
tags: ["emergency light", "brownout", "backup power", "budget", "philippines"]\r
description: "A practical guide to choosing rechargeable LED emergency lights, with runtime tips and budget friendly picks." \r
coverImage: "/images/cover-emergency-light.jpg"\r
---\r
\r
Brownouts happen in many parts of the Philippines, and a simple rechargeable LED light can make them much easier to manage. The best budget emergency light is easy to charge, lasts long enough for a typical outage, and is safe to keep in a small home. This guide explains what to check and includes affordable options that are commonly available on Shopee.\r
\r
**Disclosure:** Some links in this post are affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Pick a light that fits your room size\r
- Understand battery capacity and runtime\r
- Charge and store safely for longer life\r
- Compare four budget emergency lights\r
\r
## Choose the right size and brightness\r
\r
Emergency lights are usually labeled by wattage or by the number of LEDs. For a small room, a basic 6W to 9W unit is often enough. For a larger living room, a bigger unit may be better.\r
\r
Practical tips:\r
\r
- A single light can cover a small bedroom or kitchen\r
- For larger rooms, place the light higher or use two smaller units\r
- Choose a unit that can stand or hang if you want flexible placement\r
\r
## Battery capacity and realistic runtime\r
\r
Listings may claim long runtime, but actual use depends on brightness level.\r
\r
- High brightness drains battery faster\r
- Medium mode is usually enough for reading or cooking\r
- Low mode can stretch runtime for long outages\r
\r
If a light has multiple brightness modes, it is easier to manage during long brownouts.\r
\r
## Charging habits for longer life\r
\r
Rechargeable lights last longer with consistent charging habits.\r
\r
- Charge fully after each brownout\r
- Avoid leaving the light plugged in all the time if the battery gets hot\r
- Top up once a month if you have not used it\r
\r
Check if the model uses a standard plug or USB so you can charge it easily.\r
\r
## Placement and safety\r
\r
Keep emergency lights in places that are easy to reach.\r
\r
- One near the bedroom for quick access at night\r
- One near the kitchen if you cook during brownouts\r
- Keep cables tidy and away from walkways\r
\r
Do not place lights near water sources or gas stoves when charging.\r
\r
## Plan runtime for long outages\r
\r
If outages in your area last several hours, plan how to stretch runtime:\r
\r
- Use medium brightness for cooking and tasks\r
- Switch to low mode for background lighting\r
- Turn off lights in rooms you are not using\r
\r
This simple routine can add an extra hour or two depending on the unit.\r
\r
## Recommendation section 1: Budget 7W emergency light\r
\r
A common wattage that is bright enough for small rooms.\r
\r
**Model to look up:**\r
\r
- [Akari Rechargeable LED Emergency Light 7W](https://s.shopee.ph/2qOQsNYR2d)\r
\r
**Why it is a solid choice**\r
\r
- Balanced brightness for small rooms\r
- Common model with easy availability\r
- Simple controls that are easy to use in the dark\r
\r
## Recommendation section 2: Basic 8W emergency light\r
\r
A slightly brighter unit for shared spaces.\r
\r
**Model to look up:**\r
\r
- [Firefly Rechargeable LED Emergency Light 8W](https://s.shopee.ph/8zz4DQQgZv)\r
\r
**Why it is a solid choice**\r
\r
- Bright enough for a living room or kitchen\r
- Easy to mount or place on a shelf\r
- Straightforward charging\r
\r
## Recommendation section 3: 9W emergency light for longer use\r
\r
If your outages are longer, a slightly stronger unit helps.\r
\r
**Model to look up:**\r
\r
- [Omni Rechargeable LED Emergency Light 9W](https://s.shopee.ph/2g50frDZwk)\r
\r
**Why it is a solid choice**\r
\r
- Strong light output for larger rooms\r
- Multiple modes for better battery control\r
- Reliable for repeated use\r
\r
## Recommendation section 4: Portable USB LED lantern\r
\r
A portable option that works well for small spaces and shared rooms.\r
\r
**Model to look up:**\r
\r
- [USB Rechargeable LED Lantern with Hook](https://s.shopee.ph/5L5lqqFudm)\r
\r
**Why it is a solid choice**\r
\r
- Easy to carry between rooms\r
- Hook and handle for flexible placement\r
- USB charging for convenience\r
\r
## Simple brownout routine\r
\r
A short routine makes brownouts less stressful.\r
\r
- Keep one light fully charged in the bedroom\r
- Test each light once a month for a few minutes\r
- Store a backup power bank if you have USB lights\r
\r
## Common mistakes to avoid\r
\r
- Waiting for a brownout before charging your lights\r
- Leaving units in direct sunlight, which can damage batteries\r
- Using very long extension cords across walkways\r
- Placing the light too low, which reduces coverage\r
\r
## Quick checklist before you buy\r
\r
- Brightness level matches your room size\r
- The unit has at least two brightness modes\r
- Charging method fits your available outlets\r
- The light can stand or hang where you need it\r
\r
## Related posts\r
\r
- Improve air quality in [budget-air-purifiers-small-bedrooms-ph](/blog/budget-air-purifiers-small-bedrooms-ph)\r
- Compare cooking gear in [budget-electric-kettles-dorms-ph](/blog/budget-electric-kettles-dorms-ph)\r
\r
## Soft CTA\r
\r
Choose one reliable emergency light first, then add a second unit if your home needs more coverage. A small, dependable light is better than a large unit you forget to charge.\r
\r
*Details may change. Always confirm wattage, runtime, and charging method in the listing.*\r
\r
## Quick FAQ\r
\r
**How often should I test the light?**\r
\r
Once a month is enough. A quick 2 to 3 minute test helps confirm the battery still holds charge.\r
\r
**Is a USB lantern enough for a whole room?**\r
\r
It can work for small rooms, but a larger wall unit is better for full room coverage.\r
\r
**Can I keep it plugged in all the time?**\r
\r
Some models allow it, but if the battery feels warm, unplug and charge only when needed.\r
\r
## Link Map (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Akari Rechargeable LED Emergency Light 7W - https://s.shopee.ph/2qOQsNYR2d - Recommendation section 1\r
- Firefly Rechargeable LED Emergency Light 8W - https://s.shopee.ph/8zz4DQQgZv - Recommendation section 2\r
- Omni Rechargeable LED Emergency Light 9W - https://s.shopee.ph/2g50frDZwk - Recommendation section 3\r
- USB Rechargeable LED Lantern with Hook - https://s.shopee.ph/5L5lqqFudm - Recommendation section 4\r
\r
## Affiliate Link Audit (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Akari Rechargeable LED Emergency Light 7W - https://s.shopee.ph/2qOQsNYR2d\r
- Firefly Rechargeable LED Emergency Light 8W - https://s.shopee.ph/8zz4DQQgZv\r
- Omni Rechargeable LED Emergency Light 9W - https://s.shopee.ph/2g50frDZwk\r
- USB Rechargeable LED Lantern with Hook - https://s.shopee.ph/5L5lqqFudm\r
\r
## Affiliate Placeholder Replacement Report\r
\r
Do not publish this section.\r
\r
No affiliate placeholders were found in this article because real links were provided in Phase 2.\r
\r
- Total recommended products: 4\r
- Total placeholders found: 0\r
- Counts match: YES\r
`,Xw=`---\r
title: "Budget Induction Cookers for Small Apartments in the Philippines"\r
slug: "budget-induction-cookers-small-apartments-ph"\r
date: "2026-01-23"\r
category: "Home Essentials"\r
tags: ["induction cooker", "small apartment", "budget", "philippines", "kitchen"]\r
description: "A practical guide to choosing an affordable induction cooker for small apartments, with safety tips and budget picks." \r
coverImage: "/images/cover-induction-cooker.jpg"\r
---\r
\r
Induction cookers are a good fit for small apartments because they heat fast and are easy to store. The right unit should match your cookware, have clear controls, and fit your counter space. This guide focuses on budget friendly induction cookers that are commonly available on Shopee and explains how to choose one without overspending.\r
\r
**Disclosure:** Some links in this post are affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Check cookware compatibility first\r
- Understand wattage and power needs\r
- Keep safety and ventilation in mind\r
- Compare three budget induction cookers\r
\r
## Cookware compatibility basics\r
\r
Induction cookers only work with magnetic cookware. The easiest test is a magnet.\r
\r
- If a magnet sticks to the bottom of the pot, it will work\r
- Stainless steel and cast iron usually work\r
- Aluminum and glass usually do not, unless they have a magnetic base\r
\r
Before buying, check the diameter range. Some induction cookers require a minimum pot size to activate.\r
\r
## Power and wattage\r
\r
Most budget models in the Philippines range from 1800W to 2000W. Higher wattage heats faster but draws more power.\r
\r
- For small apartments, 1800W to 2000W is common and enough for daily meals\r
- Use a stable outlet and avoid overloading extension cords\r
- If your breaker trips often, use the cooker on a separate outlet\r
\r
## Controls and cooking modes\r
\r
Many models include preset modes, but basic temperature and power control matters more. Look for clear buttons and a readable display so you can adjust quickly.\r
\r
For daily cooking, you only need:\r
\r
- Low for simmering and reheating\r
- Medium for frying and sauté\r
- High for boiling or quick sear\r
\r
## Energy use and meal planning\r
\r
Induction cookers are efficient, but energy use still matters in small apartments. You can save power by covering pots with lids and using the right pot size. A wide pot on low heat often cooks faster than a small pot on high heat.\r
\r
## Safety and ventilation tips\r
\r
Induction cookers produce less ambient heat, but good airflow still helps.\r
\r
- Keep the back vent clear\r
- Place the cooker on a flat, stable surface\r
- Do not block the underside intake\r
\r
If you cook in a small room, keep a small window open to reduce heat buildup.\r
\r
## Recommendation section 1: Standard 2000W induction cooker\r
\r
A reliable wattage level for quick cooking and daily meals.\r
\r
**Model to look up:**\r
\r
- [Imarflex Induction Cooker 2000W](https://s.shopee.ph/3fxXrocQhX)\r
\r
**Why it is a solid choice**\r
\r
- Common power level for daily cooking\r
- Simple control layout\r
- Easy to find in local listings\r
\r
## Recommendation section 2: Budget preset model for basic meals\r
\r
A basic model with simple controls for daily use.\r
\r
**Model to look up:**\r
\r
- [Hanabishi Induction Cooker 2000W](https://s.shopee.ph/60LSe8WepL)\r
\r
**Why it is a solid choice**\r
\r
- Practical presets for simple cooking\r
- Suitable for small apartments\r
- Good price to performance balance\r
\r
## Recommendation section 3: Entry level induction cooker\r
\r
If you want the most affordable option, this model fits the budget category.\r
\r
**Model to look up:**\r
\r
- [Kyowa Induction Cooker 2000W](https://s.shopee.ph/60LSeAnNbd)\r
\r
**Why it is a solid choice**\r
\r
- Affordable entry point\r
- Simple to use for basic meals\r
- Compact footprint for small counters\r
\r
## Cleaning and care tips\r
\r
Induction cookers are easy to maintain if you clean them after each use.\r
\r
- Wipe the surface with a soft cloth after it cools\r
- Avoid abrasive scrubbers that scratch the glass\r
- Keep the vent area dust free for better airflow\r
\r
## Common mistakes to avoid\r
\r
- Using a pot that is too small to activate the cooker\r
- Sliding pots across the surface and scratching the glass\r
- Blocking the rear vent with a wall or curtain\r
- Cooking on an unstable table that wobbles\r
\r
## Quick checklist before checkout\r
\r
- Your cookware is magnetic and fits the size range\r
- The wattage matches your outlet capacity\r
- Controls are clear and easy to read\r
- The cooker fits your counter or storage space\r
\r
## Related posts\r
\r
- Pair with fast boiling in [budget-electric-kettles-dorms-ph](/blog/budget-electric-kettles-dorms-ph)\r
- Prepare for outages with [rechargeable-led-emergency-lights-ph](/blog/rechargeable-led-emergency-lights-ph)\r
\r
## Soft CTA\r
\r
Pick a model that matches your cookware and your counter size. A simple, reliable induction cooker can cover daily meals without the bulk of a stove.\r
\r
*Details may change. Always confirm wattage, pot size range, and safety notes in the listing.*\r
\r
## Quick FAQ\r
\r
- **Do I need special cookware?**\r
	Magnetic cookware only. Stainless and cast iron usually work.\r
- **Is induction safe for small spaces?**\r
	Yes. Keep ventilation clear and use a stable surface.\r
- **Can I use it for frying?**\r
	Yes. Use moderate oil and avoid very high power for long periods.\r
\r
## Link Map (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Imarflex Induction Cooker 2000W - https://s.shopee.ph/3fxXrocQhX - Recommendation section 1\r
- Hanabishi Induction Cooker 2000W - https://s.shopee.ph/60LSe8WepL - Recommendation section 2\r
- Kyowa Induction Cooker 2000W - https://s.shopee.ph/60LSeAnNbd - Recommendation section 3\r
\r
## Affiliate Link Audit (Editorial Review Only - Non-publishable)\r
\r
Do not publish this section.\r
\r
- Imarflex Induction Cooker 2000W - https://s.shopee.ph/3fxXrocQhX\r
- Hanabishi Induction Cooker 2000W - https://s.shopee.ph/60LSe8WepL\r
- Kyowa Induction Cooker 2000W - https://s.shopee.ph/60LSeAnNbd\r
\r
## Affiliate Placeholder Replacement Report\r
\r
Do not publish this section.\r
\r
No affiliate placeholders were found in this article because real links were provided in Phase 2.\r
\r
- Total recommended products: 3\r
- Total placeholders found: 0\r
- Counts match: YES\r
`,Jw=`---\r
title: "Budget Bags for Daily Carry in the Philippines: Sling, Tote, and Compact Picks"\r
slug: "budget-bags-daily-carry-ph"\r
date: "2026-01-24"\r
category: "Bags"\r
tags: ["bags", "sling bag", "tote bag", "wallet", "budget", "philippines"]\r
description: "A practical guide to choosing a budget friendly daily carry bag, with six Shopee ready picks for commuters and students."\r
coverImage: "/images/cover-bags.jpg"\r
---\r
\r
A good daily carry bag should fit your essentials, stay comfortable for commutes, and handle the weather. Many budget options look similar, so focus on size, strap comfort, and pocket layout. This guide explains what to check and shares six budget picks from the batch list for common use cases.\r
\r
**Affiliate disclosure:** This post contains affiliate links. If you buy through them, SulitFinds may earn a small commission at no extra cost to you.\r
\r
## Outline\r
\r
- Identify your daily carry needs.\r
- Choose the right size and layout.\r
- Check materials, straps, and closures.\r
- Review six budget bag picks by use case.\r
- Quick FAQ and checklist.\r
\r
## Start with your daily carry list\r
\r
Write down what you bring every day. Most people carry a phone, wallet, keys, power bank, and a small pouch. Your list tells you the minimum bag size you need and whether you need room for items like a bottle or a compact lunch container.\r
\r
## Size and shape that match your routine\r
\r
A bag that is too large feels heavy and gets in the way. A bag that is too small becomes cluttered and hard to use.\r
\r
- **Compact sling or chest bag** for phone, wallet, keys, and a small power bank.\r
- **Medium sling or shoulder bag** for a small tablet, makeup kit, or folded umbrella.\r
- **Small tote** if you carry a lunch bag or light office items.\r
\r
For quick errands, a compact sling is easier to carry and safer in crowded places.\r
\r
## Material, straps, and closures\r
\r
Budget bags can last if you choose the right basics.\r
\r
- **Material:** Canvas is light and easy to clean. PU or faux leather looks neat but needs gentle care. Nylon or coated fabric handles light rain better.\r
- **Straps:** Wide straps are easier for heavier loads. Thin straps work for light carry only.\r
- **Closures:** Zippers are safer for commuting than magnetic buttons.\r
\r
## Pocket layout and comfort\r
\r
Pocket layout affects how fast you can reach essentials. Aim for at least one inner pocket for coins or small items and a front pocket for transit cards. Check size charts or review photos so the bag depth matches what you carry.\r
\r
## Budget bag picks by use case\r
\r
These picks are from the batch list and match common daily carry needs. Availability and pricing may change, so always review the listing details before checkout.\r
\r
### Pick 1: Canvas sling bag for students and light commuters\r
\r
**Recommended product:**\r
- [Mumu 5079 Japanese Casual Unisex Canvas Sling Bag Multi-pocket Women Shoulder Crossbody Students Bag](https://s.shopee.ph/5AmLitthGr)\r
\r
**Why it fits:**\r
- Canvas is light and easy to clean.\r
- The listing name suggests multiple pockets for daily organization.\r
\r
**What to check:**\r
- Exact dimensions and strap length.\r
\r
### Pick 2: Classic shoulder bag for office or casual wear\r
\r
**Recommended product:**\r
- [Bostanten Ladies Shoulder Bag Leather Crossybody Multi-use Bag For Woman](https://s.shopee.ph/14FZPDMkY)\r
\r
**Why it fits:**\r
- A shoulder bag suits office outfits and casual weekends.\r
- Multi use design suggests it can be worn as shoulder or crossbody.\r
\r
**What to check:**\r
- Strap adjustability and interior pockets.\r
\r
### Pick 3: Small tote for lunch and short errands\r
\r
**Recommended product:**\r
- [（Ann sweet home)Cute Canvas Lunch Bag Mini Handbag Gift Bag Small Tote Bag With Button](https://s.shopee.ph/gJwMdApPf)\r
\r
**Why it fits:**\r
- A compact tote works for lunch containers or short trips.\r
- Canvas material is light and easy to wipe.\r
\r
**What to check:**\r
- Depth and fabric thickness.\r
\r
### Pick 4: Tote style bag for students and office carry\r
\r
**Recommended product:**\r
- [Mumu 3006 Leather Light Luxury PU Tote Bag Fashionable Shoulder Bag For Office Women Students](https://s.shopee.ph/8fMDtKgNAx)\r
\r
**Why it fits:**\r
- Tote shape fits notebooks, folders, and light office items.\r
- PU finish looks neat for work settings.\r
\r
**What to check:**\r
- Bag height for notebooks or small tablets.\r
- Reinforced straps for heavier loads.\r
\r
### Pick 5: Compact waterproof chest bag for hands free travel\r
\r
**Recommended product:**\r
- [JNK #Q0033 Light Weight Waterproof Chest Bag Cross Body Bag](https://s.shopee.ph/9UvKsrdCTH)\r
\r
**Why it fits:**\r
- Chest bags keep items close and reduce snatch risk.\r
- Waterproof claim is useful for rainy commutes.\r
\r
**What to check:**\r
- Actual water resistance notes or review photos.\r
- Strap padding if you carry a power bank.\r
\r
### Pick 6: Small pouch for coins and keys inside any bag\r
\r
**Recommended product:**\r
- [Card Holder Key Wallet PU Zipper Pouch Korean Creative Pearl Laser Coin Purse Women](https://s.shopee.ph/9zrbTmbISI)\r
\r
**Why it fits:**\r
- Small pouches help keep coins and keys from scratching your phone.\r
- Zipper closure prevents loose items from falling out.\r
\r
**What to check:**\r
- Zipper quality and interior space.\r
- Whether it fits your main cards and spare keys.\r
\r
## Quick decision checklist\r
\r
- If you carry only essentials, a compact sling or chest bag is enough.\r
- If you bring lunch or a notebook, a small tote is more practical.\r
- For rainy months, choose coated fabric or a bag with a water resistance note.\r
\r
## Quick FAQ\r
\r
- **Question:** What size sling bag is enough for daily commuting?\r
\r
  **Answer:** A sling bag that fits your phone, wallet, keys, and a small power bank is enough for most commutes. Check the width and depth, not just the length.\r
\r
- **Question:** Is PU leather good for budget bags?\r
\r
  **Answer:** PU leather is fine for light daily use if you keep it dry and wipe it clean. It is not as durable as real leather but can still last with careful use.\r
\r
- **Question:** Do I need a waterproof bag for Manila rain?\r
\r
  **Answer:** It helps during sudden showers, but most budget bags are only splash resistant. Use a small rain cover or keep a plastic pouch inside for extra protection.\r
\r
## Soft CTA\r
\r
Pick a bag that matches how you move every day, not just how it looks. Compare size details and recent review photos before you decide.\r
\r
*Details may change. Always confirm size, material, and closures in the listing.*\r
\r
## Related posts\r
\r
- [GOOJODOQ Turbo Mini Fan for PH Commuters: A Practical Buying Guide](/blog/goojodoq-turbo-mini-fan-commuter-ph)\r
- [Affordable Bluetooth Earbuds for Daily Commutes in the Philippines](/blog/affordable-bluetooth-earbuds-commute-ph)\r
\r
## Affiliate Link Audit\r
\r
- Product: Mumu 5079 Japanese Casual Unisex Canvas Sling Bag Multi-pocket Women Shoulder Crossbody Students Bag\r
  - URL: https://s.shopee.ph/5AmLitthGr\r
  - Section: Pick 1: Canvas sling bag for students and light commuters\r
- Product: Bostanten Ladies Shoulder Bag Leather Crossybody Multi-use Bag For Woman\r
  - URL: https://s.shopee.ph/14FZPDMkY\r
  - Section: Pick 2: Classic shoulder bag for office or casual wear\r
- Product: （Ann sweet home)Cute Canvas Lunch Bag Mini Handbag Gift Bag Small Tote Bag With Button\r
  - URL: https://s.shopee.ph/gJwMdApPf\r
  - Section: Pick 3: Small tote for lunch and short errands\r
- Product: Mumu 3006 Leather Light Luxury PU Tote Bag Fashionable Shoulder Bag For Office Women Students\r
  - URL: https://s.shopee.ph/8fMDtKgNAx\r
  - Section: Pick 4: Tote style bag for students and office carry\r
- Product: JNK #Q0033 Light Weight Waterproof Chest Bag Cross Body Bag\r
  - URL: https://s.shopee.ph/9UvKsrdCTH\r
  - Section: Pick 5: Compact waterproof chest bag for hands free travel\r
- Product: Card Holder Key Wallet PU Zipper Pouch Korean Creative Pearl Laser Coin Purse Women\r
  - URL: https://s.shopee.ph/9zrbTmbISI\r
  - Section: Pick 6: Small pouch for coins and keys inside any bag\r
`;function Zw(e){const t=e.trim().split(/\s+/).filter(Boolean).length,n=Math.max(1,Math.ceil(t/200));return{minutes:n,label:`${n} min read`}}const ev=[[/\bMoreover,\s*/gi,"Also, "],[/\bFurthermore,\s*/gi,"Also, "],[/\bIn conclusion,\s*/gi,"In short, "],[/\bIn conclusion\./gi,"In short."],[/\bIn conclusion\b/gi,"In short"]];function Zc(e){let t=e.replace(/\s*[\u2014\u2013]\s*/g," - ");return ev.forEach(([n,r])=>{t=t.replace(n,r)}),t}const tv=/^\s*#{1,6}\s+(Link Map|Affiliate Placeholder Replacement Report|Affiliate Link Audit)(\b|\s|:|\()/i,nv=Object.assign({"../../content/posts/2026-01-19-budget-air-purifiers-small-bedrooms-ph.md":Ww,"../../content/posts/2026-01-19-budget-baby-essentials-new-parents-ph.md":Uw,"../../content/posts/2026-01-19-budget-home-organization-small-spaces-ph.md":Hw,"../../content/posts/2026-01-19-budget-kitchen-organizers-small-spaces-ph.md":$w,"../../content/posts/2026-01-19-budget-pet-food-cats-dogs-ph.md":Vw,"../../content/posts/2026-01-19-budget-power-banks-daily-carry-ph.md":Qw,"../../content/posts/2026-01-19-goojodoq-turbo-mini-fan-commuter-ph.md":Kw,"../../content/posts/2026-01-20-affordable-bluetooth-earbuds-commute-ph.md":qw,"../../content/posts/2026-01-21-budget-electric-kettles-dorms-ph.md":Yw,"../../content/posts/2026-01-22-rechargeable-led-emergency-lights-ph.md":Gw,"../../content/posts/2026-01-23-budget-induction-cookers-small-apartments-ph.md":Xw,"../../content/posts/2026-01-24-budget-bags-daily-carry-ph.md":Jw});function rv(e){const t=e.trim();if(t.startsWith("[")&&t.endsWith("]")){const n=t.slice(1,-1).trim();return n?n.split(",").map(r=>r.trim().replace(/^['"]|['"]$/g,"")).filter(Boolean):[]}return t.replace(/^['"]|['"]$/g,"")}function iv(e){const t=e.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);if(!t)return{data:{},content:e.trim()};const n=t[1],r=e.slice(t[0].length).trim(),i={};return n.split(/\r?\n/).forEach(o=>{if(!o.trim())return;const[l,...a]=o.split(":");if(!l||a.length===0)return;const s=a.join(":"),u=rv(s);i[l.trim()]=u}),{data:i,content:r}}function ov(e){return(e.split("/").pop()||"").replace(/\.md$/,"")}function ef(e){const t=e.match(/^\s*(#{1,6})\s+/);return t?t[1].length:0}function lv(e){const t=e.split(/\r?\n/),n=[];let r=!1,i=0;for(const o of t){if(!r&&tv.test(o)){r=!0,i=ef(o);continue}if(r){const l=ef(o);if(l>0&&l<=i)r=!1;else continue}n.push(o)}return n.join(`
`).trim()}function al(){return Object.entries(nv).map(([t,n])=>{const{data:r,content:i}=iv(n),o=Zc(lv(i)),l=r.slug||ov(t),a=Zc(r.description||o.slice(0,160).trim()),{label:s}=Zw(o);return{title:r.title||"Untitled",slug:l,date:r.date||"",category:r.category||"General",tags:Array.isArray(r.tags)?r.tags:[],description:a,coverImage:r.coverImage,content:o,readingTime:s}}).sort((t,n)=>new Date(n.date).getTime()-new Date(t.date).getTime())}function av(e){return al().find(t=>t.slug===e)}function Tp(e){return Array.from(new Set(e.map(t=>t.category))).sort()}function sv(e){return Array.from(new Set(e.flatMap(t=>t.tags))).sort()}function uv(e,t){let n=0;e.category===t.category&&(n+=2);const r=e.tags.filter(i=>t.tags.includes(i));return n+=r.length,n}function cv(e,t=3){return al().filter(r=>r.slug!==e.slug).map(r=>({post:r,score:uv(e,r)})).filter(r=>r.score>0).sort((r,i)=>i.score!==r.score?i.score-r.score:new Date(i.post.date).getTime()-new Date(r.post.date).getTime()).slice(0,t).map(r=>r.post)}function fv(){const e=al(),t=e.slice(0,2),n=e.slice(0,6),r=Tp(e);return v.jsxs("div",{className:"space-y-12",children:[v.jsx(cn,{title:"Budget-friendly finds for Filipino buyers",description:"SulitFinds curates affordable, practical product recommendations and guides for budget-conscious shoppers in the Philippines.",canonicalPath:"/"}),"      ",v.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:Ow()}}),v.jsx("section",{className:"rounded-[28px] border-2 border-border bg-surface p-10 shadow-[6px_6px_0_var(--color-border)]",children:v.jsxs("div",{className:"max-w-2xl space-y-4",children:[v.jsx("p",{className:"section-kicker",children:"SulitFinds"}),v.jsx("h1",{className:"text-4xl font-bold text-text",children:"Budget-friendly recommendations for smarter Filipino shoppers."}),v.jsx("p",{className:"text-base text-muted",children:"We highlight sulit picks, practical buying guides, and product roundups so you can shop with confidence without overspending."}),v.jsxs("div",{className:"flex flex-wrap gap-4",children:[v.jsx(be,{to:"/blog",className:"btn-primary px-6 py-3",children:"Browse the blog"}),v.jsx(be,{to:"/about",className:"btn-secondary px-6 py-3",children:"Learn about SulitFinds"})]})]})}),v.jsxs("section",{className:"space-y-6",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsx("h2",{className:"section-title",children:"Featured guides"}),v.jsx(be,{to:"/blog",className:"link",children:"View all"})]}),v.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:t.map(i=>v.jsx(Mo,{post:i},i.slug))})]}),v.jsxs("section",{className:"space-y-4",children:[v.jsx("h2",{className:"section-title",children:"Shop by category"}),v.jsx("div",{className:"flex flex-wrap gap-3",children:r.map(i=>v.jsx(be,{to:`/blog?category=${encodeURIComponent(i)}`,className:"chip",children:i},i))})]}),v.jsxs("section",{className:"space-y-6",children:[v.jsx("h2",{className:"section-title",children:"Latest posts"}),v.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:n.map(i=>v.jsx(Mo,{post:i},i.slug))})]})]})}function dv({categories:e,selected:t,onChange:n}){return v.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[v.jsx("label",{htmlFor:"category",className:"text-sm font-medium text-muted",children:"Filter by category"}),v.jsxs("select",{id:"category",value:t,onChange:r=>n(r.target.value),className:"input max-w-[200px]",children:[v.jsx("option",{value:"All",children:"All"}),e.map(r=>v.jsx("option",{value:r,children:r},r))]})]})}function hv(){const e=al(),t=Tp(e),n=sv(e),[r,i]=Pw(),[o,l]=R.useState(r.get("category")||"All"),[a,s]=R.useState(r.get("q")||""),[u,f]=R.useState(r.get("tag")||"All"),c=R.useMemo(()=>e.filter(k=>{const S=o==="All"||k.category===o,p=u==="All"||k.tags.includes(u),m=a.trim().toLowerCase(),y=!m||k.title.toLowerCase().includes(m)||k.description.toLowerCase().includes(m)||k.tags.some(P=>P.toLowerCase().includes(m));return S&&p&&y}),[e,o,u,a]),d=k=>{l(k);const S=new URLSearchParams(r);k==="All"?S.delete("category"):S.set("category",k),i(S,{replace:!0})},h=k=>{f(k);const S=new URLSearchParams(r);k==="All"?S.delete("tag"):S.set("tag",k),i(S,{replace:!0})},g=k=>{s(k);const S=new URLSearchParams(r);k.trim()?S.set("q",k):S.delete("q"),i(S,{replace:!0})};return v.jsxs("div",{className:"space-y-8",children:[v.jsx(cn,{title:"Blog",description:"Browse the latest SulitFinds posts, including guides, product roundups, and budget tips.",canonicalPath:"/blog"}),v.jsxs("header",{className:"space-y-4",children:[v.jsx("h1",{className:"text-3xl font-bold text-text",children:"Blog"}),v.jsx("p",{className:"text-base text-muted",children:"Explore budget-friendly recommendations curated for Filipino shoppers."}),v.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[v.jsx(dv,{categories:t,selected:o,onChange:d}),v.jsxs("div",{className:"flex flex-1 items-center gap-3",children:[v.jsx("label",{htmlFor:"search",className:"text-sm font-medium text-muted",children:"Search"}),v.jsx("input",{id:"search",value:a,onChange:k=>g(k.target.value),placeholder:"Search posts, tags, or keywords",className:"input max-w-sm"})]})]}),v.jsxs("div",{className:"flex flex-wrap gap-2",children:[v.jsx("button",{type:"button",onClick:()=>h("All"),className:`chip transition ${u==="All"?"border-[color:var(--color-accent)] text-[color:var(--color-accent-2)]":"hover:border-[color:var(--color-accent)]"}`,children:"All tags"}),n.map(k=>v.jsxs("button",{type:"button",onClick:()=>h(k),className:`chip transition ${u===k?"border-[color:var(--color-accent)] text-[color:var(--color-accent-2)]":"hover:border-[color:var(--color-accent)]"}`,children:["#",k]},k))]})]}),v.jsx("section",{className:"grid gap-6 md:grid-cols-2",children:c.map(k=>v.jsx(Mo,{post:k},k.slug))})]})}function pv(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const mv=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gv=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yv={};function tf(e,t){return(yv.jsx?gv:mv).test(e)}const kv=/[ \t\n\f\r]/g;function wv(e){return typeof e=="object"?e.type==="text"?nf(e.value):!1:nf(e)}function nf(e){return e.replace(kv,"")===""}class Ci{constructor(t,n,r){this.normal=n,this.property=t,r&&(this.space=r)}}Ci.prototype.normal={};Ci.prototype.property={};Ci.prototype.space=void 0;function Lp(e,t){const n={},r={};for(const i of e)Object.assign(n,i.property),Object.assign(r,i.normal);return new Ci(n,r,t)}function rs(e){return e.toLowerCase()}class Ve{constructor(t,n){this.attribute=n,this.property=t}}Ve.prototype.attribute="";Ve.prototype.booleanish=!1;Ve.prototype.boolean=!1;Ve.prototype.commaOrSpaceSeparated=!1;Ve.prototype.commaSeparated=!1;Ve.prototype.defined=!1;Ve.prototype.mustUseProperty=!1;Ve.prototype.number=!1;Ve.prototype.overloadedBoolean=!1;Ve.prototype.property="";Ve.prototype.spaceSeparated=!1;Ve.prototype.space=void 0;let vv=0;const U=Dn(),ge=Dn(),is=Dn(),I=Dn(),ne=Dn(),lr=Dn(),Ke=Dn();function Dn(){return 2**++vv}const os=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:ge,commaOrSpaceSeparated:Ke,commaSeparated:lr,number:I,overloadedBoolean:is,spaceSeparated:ne},Symbol.toStringTag,{value:"Module"})),Hl=Object.keys(os);class fu extends Ve{constructor(t,n,r,i){let o=-1;if(super(t,n),rf(this,"space",i),typeof r=="number")for(;++o<Hl.length;){const l=Hl[o];rf(this,Hl[o],(r&os[l])===os[l])}}}fu.prototype.defined=!0;function rf(e,t,n){n&&(e[t]=n)}function xr(e){const t={},n={};for(const[r,i]of Object.entries(e.properties)){const o=new fu(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,n[rs(r)]=r,n[rs(o.attribute)]=r}return new Ci(t,n,e.space)}const Ip=xr({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:I,ariaColIndex:I,ariaColSpan:I,ariaControls:ne,ariaCurrent:null,ariaDescribedBy:ne,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:ne,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:ne,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ne,ariaLevel:I,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:ne,ariaPlaceholder:null,ariaPosInSet:I,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:ne,ariaRowCount:I,ariaRowIndex:I,ariaRowSpan:I,ariaSelected:ge,ariaSetSize:I,ariaSort:null,ariaValueMax:I,ariaValueMin:I,ariaValueNow:I,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Rp(e,t){return t in e?e[t]:t}function zp(e,t){return Rp(e,t.toLowerCase())}const xv=xr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:lr,acceptCharset:ne,accessKey:ne,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:ne,autoFocus:U,autoPlay:U,blocking:ne,capture:null,charSet:null,checked:U,cite:null,className:ne,cols:I,colSpan:null,content:null,contentEditable:ge,controls:U,controlsList:ne,coords:I|lr,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:is,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:ne,height:I,hidden:is,high:I,href:null,hrefLang:null,htmlFor:ne,httpEquiv:ne,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:ne,itemRef:ne,itemScope:U,itemType:ne,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:I,manifest:null,max:null,maxLength:I,media:null,method:null,min:null,minLength:I,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:I,pattern:null,ping:ne,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:ne,required:U,reversed:U,rows:I,rowSpan:I,sandbox:ne,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:I,sizes:null,slot:null,span:I,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:I,step:null,style:null,tabIndex:I,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:ge,width:I,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ne,axis:null,background:null,bgColor:null,border:I,borderColor:null,bottomMargin:I,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:I,leftMargin:I,link:null,longDesc:null,lowSrc:null,marginHeight:I,marginWidth:I,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:I,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:I,valueType:null,version:null,vAlign:null,vLink:null,vSpace:I,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:I,security:null,unselectable:null},space:"html",transform:zp}),bv=xr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ke,accentHeight:I,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:I,amplitude:I,arabicForm:null,ascent:I,attributeName:null,attributeType:null,azimuth:I,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:I,by:null,calcMode:null,capHeight:I,className:ne,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:I,diffuseConstant:I,direction:null,display:null,dur:null,divisor:I,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:I,enableBackground:null,end:null,event:null,exponent:I,externalResourcesRequired:null,fill:null,fillOpacity:I,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:lr,g2:lr,glyphName:lr,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:I,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:I,horizOriginX:I,horizOriginY:I,id:null,ideographic:I,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:I,k:I,k1:I,k2:I,k3:I,k4:I,kernelMatrix:Ke,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:I,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:I,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:I,overlineThickness:I,paintOrder:null,panose1:null,path:null,pathLength:I,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ne,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:I,pointsAtY:I,pointsAtZ:I,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ke,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ke,rev:Ke,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ke,requiredFeatures:Ke,requiredFonts:Ke,requiredFormats:Ke,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:I,specularExponent:I,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:I,strikethroughThickness:I,string:null,stroke:null,strokeDashArray:Ke,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:I,strokeOpacity:I,strokeWidth:null,style:null,surfaceScale:I,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ke,tabIndex:I,tableValues:null,target:null,targetX:I,targetY:I,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ke,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:I,underlineThickness:I,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:I,values:null,vAlphabetic:I,vMathematical:I,vectorEffect:null,vHanging:I,vIdeographic:I,version:null,vertAdvY:I,vertOriginX:I,vertOriginY:I,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:I,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Rp}),_p=xr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Np=xr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:zp}),Dp=xr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Sv={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Cv=/[A-Z]/g,of=/-[a-z]/g,Pv=/^data[-\w.:]+$/i;function Ev(e,t){const n=rs(t);let r=t,i=Ve;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&Pv.test(t)){if(t.charAt(4)==="-"){const o=t.slice(5).replace(of,Tv);r="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=t.slice(4);if(!of.test(o)){let l=o.replace(Cv,Av);l.charAt(0)!=="-"&&(l="-"+l),t="data"+l}}i=fu}return new i(r,t)}function Av(e){return"-"+e.toLowerCase()}function Tv(e){return e.charAt(1).toUpperCase()}const Lv=Lp([Ip,xv,_p,Np,Dp],"html"),du=Lp([Ip,bv,_p,Np,Dp],"svg");function Iv(e){return e.join(" ").trim()}var hu={},lf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Rv=/\n/g,zv=/^\s*/,_v=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Nv=/^:\s*/,Dv=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Fv=/^[;\s]*/,Mv=/^\s+|\s+$/g,jv=`
`,af="/",sf="*",vn="",Ov="comment",Bv="declaration";function Wv(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,r=1;function i(g){var k=g.match(Rv);k&&(n+=k.length);var S=g.lastIndexOf(jv);r=~S?g.length-S:r+g.length}function o(){var g={line:n,column:r};return function(k){return k.position=new l(g),u(),k}}function l(g){this.start=g,this.end={line:n,column:r},this.source=t.source}l.prototype.content=e;function a(g){var k=new Error(t.source+":"+n+":"+r+": "+g);if(k.reason=g,k.filename=t.source,k.line=n,k.column=r,k.source=e,!t.silent)throw k}function s(g){var k=g.exec(e);if(k){var S=k[0];return i(S),e=e.slice(S.length),k}}function u(){s(zv)}function f(g){var k;for(g=g||[];k=c();)k!==!1&&g.push(k);return g}function c(){var g=o();if(!(af!=e.charAt(0)||sf!=e.charAt(1))){for(var k=2;vn!=e.charAt(k)&&(sf!=e.charAt(k)||af!=e.charAt(k+1));)++k;if(k+=2,vn===e.charAt(k-1))return a("End of comment missing");var S=e.slice(2,k-2);return r+=2,i(S),e=e.slice(k),r+=2,g({type:Ov,comment:S})}}function d(){var g=o(),k=s(_v);if(k){if(c(),!s(Nv))return a("property missing ':'");var S=s(Dv),p=g({type:Bv,property:uf(k[0].replace(lf,vn)),value:S?uf(S[0].replace(lf,vn)):vn});return s(Fv),p}}function h(){var g=[];f(g);for(var k;k=d();)k!==!1&&(g.push(k),f(g));return g}return u(),h()}function uf(e){return e?e.replace(Mv,vn):vn}var Uv=Wv,Hv=uo&&uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(hu,"__esModule",{value:!0});hu.default=Vv;const $v=Hv(Uv);function Vv(e,t){let n=null;if(!e||typeof e!="string")return n;const r=(0,$v.default)(e),i=typeof t=="function";return r.forEach(o=>{if(o.type!=="declaration")return;const{property:l,value:a}=o;i?t(l,a,o):a&&(n=n||{},n[l]=a)}),n}var sl={};Object.defineProperty(sl,"__esModule",{value:!0});sl.camelCase=void 0;var Qv=/^--[a-zA-Z0-9_-]+$/,Kv=/-([a-z])/g,qv=/^[^-]+$/,Yv=/^-(webkit|moz|ms|o|khtml)-/,Gv=/^-(ms)-/,Xv=function(e){return!e||qv.test(e)||Qv.test(e)},Jv=function(e,t){return t.toUpperCase()},cf=function(e,t){return"".concat(t,"-")},Zv=function(e,t){return t===void 0&&(t={}),Xv(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(Gv,cf):e=e.replace(Yv,cf),e.replace(Kv,Jv))};sl.camelCase=Zv;var ex=uo&&uo.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},tx=ex(hu),nx=sl;function ls(e,t){var n={};return!e||typeof e!="string"||(0,tx.default)(e,function(r,i){r&&i&&(n[(0,nx.camelCase)(r,t)]=i)}),n}ls.default=ls;var rx=ls;const ix=ms(rx),Fp=Mp("end"),pu=Mp("start");function Mp(e){return t;function t(n){const r=n&&n.position&&n.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function ox(e){const t=pu(e),n=Fp(e);if(t&&n)return{start:t,end:n}}function qr(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ff(e.position):"start"in e||"end"in e?ff(e):"line"in e||"column"in e?as(e):""}function as(e){return df(e&&e.line)+":"+df(e&&e.column)}function ff(e){return as(e&&e.start)+"-"+as(e&&e.end)}function df(e){return e&&typeof e=="number"?e:1}class ze extends Error{constructor(t,n,r){super(),typeof n=="string"&&(r=n,n=void 0);let i="",o={},l=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof t=="string"?i=t:!o.cause&&t&&(l=!0,i=t.message,o.cause=t),!o.ruleId&&!o.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?o.ruleId=r:(o.source=r.slice(0,s),o.ruleId=r.slice(s+1))}if(!o.place&&o.ancestors&&o.ancestors){const s=o.ancestors[o.ancestors.length-1];s&&(o.place=s.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=a?a.line:void 0,this.name=qr(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=l&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ze.prototype.file="";ze.prototype.name="";ze.prototype.reason="";ze.prototype.message="";ze.prototype.stack="";ze.prototype.column=void 0;ze.prototype.line=void 0;ze.prototype.ancestors=void 0;ze.prototype.cause=void 0;ze.prototype.fatal=void 0;ze.prototype.place=void 0;ze.prototype.ruleId=void 0;ze.prototype.source=void 0;const mu={}.hasOwnProperty,lx=new Map,ax=/[A-Z]/g,sx=new Set(["table","tbody","thead","tfoot","tr"]),ux=new Set(["td","th"]),jp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function cx(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let r;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=kx(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=yx(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?du:Lv,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},o=Op(i,e,void 0);return o&&typeof o!="string"?o:i.create(e,i.Fragment,{children:o||void 0},void 0)}function Op(e,t,n){if(t.type==="element")return fx(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return dx(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return px(e,t,n);if(t.type==="mdxjsEsm")return hx(e,t);if(t.type==="root")return mx(e,t,n);if(t.type==="text")return gx(e,t)}function fx(e,t,n){const r=e.schema;let i=r;t.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=Wp(e,t.tagName,!1),l=wx(e,t);let a=yu(e,t);return sx.has(t.tagName)&&(a=a.filter(function(s){return typeof s=="string"?!wv(s):!0})),Bp(e,l,o,t),gu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function dx(e,t){if(t.data&&t.data.estree&&e.evaluater){const r=t.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}gi(e,t.position)}function hx(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);gi(e,t.position)}function px(e,t,n){const r=e.schema;let i=r;t.name==="svg"&&r.space==="html"&&(i=du,e.schema=i),e.ancestors.push(t);const o=t.name===null?e.Fragment:Wp(e,t.name,!0),l=vx(e,t),a=yu(e,t);return Bp(e,l,o,t),gu(l,a),e.ancestors.pop(),e.schema=r,e.create(t,o,l,n)}function mx(e,t,n){const r={};return gu(r,yu(e,t)),e.create(t,e.Fragment,r,n)}function gx(e,t){return t.value}function Bp(e,t,n,r){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=r)}function gu(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function yx(e,t,n){return r;function r(i,o,l,a){const u=Array.isArray(l.children)?n:t;return a?u(o,l,a):u(o,l)}}function kx(e,t){return n;function n(r,i,o,l){const a=Array.isArray(o.children),s=pu(r);return t(i,o,l,a,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function wx(e,t){const n={};let r,i;for(i in t.properties)if(i!=="children"&&mu.call(t.properties,i)){const o=xx(e,i,t.properties[i]);if(o){const[l,a]=o;e.tableCellAlignToStyle&&l==="align"&&typeof a=="string"&&ux.has(t.tagName)?r=a:n[l]=a}}if(r){const o=n.style||(n.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return n}function vx(e,t){const n={};for(const r of t.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const o=r.data.estree.body[0];o.type;const l=o.expression;l.type;const a=l.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else gi(e,t.position);else{const i=r.name;let o;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const a=r.value.data.estree.body[0];a.type,o=e.evaluater.evaluateExpression(a.expression)}else gi(e,t.position);else o=r.value===null?!0:r.value;n[i]=o}return n}function yu(e,t){const n=[];let r=-1;const i=e.passKeys?new Map:lx;for(;++r<t.children.length;){const o=t.children[r];let l;if(e.passKeys){const s=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(s){const u=i.get(s)||0;l=s+"-"+u,i.set(s,u+1)}}const a=Op(e,o,l);a!==void 0&&n.push(a)}return n}function xx(e,t,n){const r=Ev(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?pv(n):Iv(n)),r.property==="style"){let i=typeof n=="object"?n:bx(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Sx(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Sv[r.property]||r.property:r.attribute,n]}}function bx(e,t){try{return ix(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const r=n,i=new ze("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=jp+"#cannot-parse-style-attribute",i}}function Wp(e,t,n){let r;if(!n)r={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let o=-1,l;for(;++o<i.length;){const a=tf(i[o])?{type:"Identifier",name:i[o]}:{type:"Literal",value:i[o]};l=l?{type:"MemberExpression",object:l,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}r=l}else r=tf(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(r.type==="Literal"){const i=r.value;return mu.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);gi(e)}function gi(e,t){const n=new ze("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=jp+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Sx(e){const t={};let n;for(n in e)mu.call(e,n)&&(t[Cx(n)]=e[n]);return t}function Cx(e){let t=e.replace(ax,Px);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Px(e){return"-"+e.toLowerCase()}const $l={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Ex={};function ku(e,t){const n=Ex,r=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return Up(e,r,i)}function Up(e,t,n){if(Ax(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return hf(e.children,t,n)}return Array.isArray(e)?hf(e,t,n):""}function hf(e,t,n){const r=[];let i=-1;for(;++i<e.length;)r[i]=Up(e[i],t,n);return r.join("")}function Ax(e){return!!(e&&typeof e=="object")}const pf=document.createElement("i");function wu(e){const t="&"+e+";";pf.innerHTML=t;const n=pf.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Xe(e,t,n,r){const i=e.length;let o=0,l;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,r.length<1e4)l=Array.from(r),l.unshift(t,n),e.splice(...l);else for(n&&e.splice(t,n);o<r.length;)l=r.slice(o,o+1e4),l.unshift(t,0),e.splice(...l),o+=1e4,t+=1e4}function rt(e,t){return e.length>0?(Xe(e,e.length,0,t),e):t}const mf={}.hasOwnProperty;function Hp(e){const t={};let n=-1;for(;++n<e.length;)Tx(t,e[n]);return t}function Tx(e,t){let n;for(n in t){const i=(mf.call(e,n)?e[n]:void 0)||(e[n]={}),o=t[n];let l;if(o)for(l in o){mf.call(i,l)||(i[l]=[]);const a=o[l];Lx(i[l],Array.isArray(a)?a:a?[a]:[])}}}function Lx(e,t){let n=-1;const r=[];for(;++n<t.length;)(t[n].add==="after"?e:r).push(t[n]);Xe(e,0,0,r)}function $p(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function gt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ne=mn(/[A-Za-z]/),Ie=mn(/[\dA-Za-z]/),Ix=mn(/[#-'*+\--9=?A-Z^-~]/);function jo(e){return e!==null&&(e<32||e===127)}const ss=mn(/\d/),Rx=mn(/[\dA-Fa-f]/),zx=mn(/[!-/:-@[-`{-~]/);function O(e){return e!==null&&e<-2}function ee(e){return e!==null&&(e<0||e===32)}function H(e){return e===-2||e===-1||e===32}const ul=mn(new RegExp("\\p{P}|\\p{S}","u")),Rn=mn(/\s/);function mn(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function br(e){const t=[];let n=-1,r=0,i=0;for(;++n<e.length;){const o=e.charCodeAt(n);let l="";if(o===37&&Ie(e.charCodeAt(n+1))&&Ie(e.charCodeAt(n+2)))i=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o));else if(o>55295&&o<57344){const a=e.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(l=String.fromCharCode(o,a),i=1):l="�"}else l=String.fromCharCode(o);l&&(t.push(e.slice(r,n),encodeURIComponent(l)),r=n+i+1,l=""),i&&(n+=i,i=0)}return t.join("")+e.slice(r)}function K(e,t,n,r){const i=r?r-1:Number.POSITIVE_INFINITY;let o=0;return l;function l(s){return H(s)?(e.enter(n),a(s)):t(s)}function a(s){return H(s)&&o++<i?(e.consume(s),a):(e.exit(n),t(s))}}const _x={tokenize:Nx};function Nx(e){const t=e.attempt(this.parser.constructs.contentInitial,r,i);let n;return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),K(e,t,"linePrefix")}function i(a){return e.enter("paragraph"),o(a)}function o(a){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,l(a)}function l(a){if(a===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(a);return}return O(a)?(e.consume(a),e.exit("chunkText"),o):(e.consume(a),l)}}const Dx={tokenize:Fx},gf={tokenize:Mx};function Fx(e){const t=this,n=[];let r=0,i,o,l;return a;function a(y){if(r<n.length){const P=n[r];return t.containerState=P[1],e.attempt(P[0].continuation,s,u)(y)}return u(y)}function s(y){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const P=t.events.length;let A=P,b;for(;A--;)if(t.events[A][0]==="exit"&&t.events[A][1].type==="chunkFlow"){b=t.events[A][1].end;break}p(r);let T=P;for(;T<t.events.length;)t.events[T][1].end={...b},T++;return Xe(t.events,A+1,0,t.events.slice(P)),t.events.length=T,u(y)}return a(y)}function u(y){if(r===n.length){if(!i)return d(y);if(i.currentConstruct&&i.currentConstruct.concrete)return g(y);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(gf,f,c)(y)}function f(y){return i&&m(),p(r),d(y)}function c(y){return t.parser.lazy[t.now().line]=r!==n.length,l=t.now().offset,g(y)}function d(y){return t.containerState={},e.attempt(gf,h,g)(y)}function h(y){return r++,n.push([t.currentConstruct,t.containerState]),d(y)}function g(y){if(y===null){i&&m(),p(0),e.consume(y);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:o}),k(y)}function k(y){if(y===null){S(e.exit("chunkFlow"),!0),p(0),e.consume(y);return}return O(y)?(e.consume(y),S(e.exit("chunkFlow")),r=0,t.interrupt=void 0,a):(e.consume(y),k)}function S(y,P){const A=t.sliceStream(y);if(P&&A.push(null),y.previous=o,o&&(o.next=y),o=y,i.defineSkip(y.start),i.write(A),t.parser.lazy[y.start.line]){let b=i.events.length;for(;b--;)if(i.events[b][1].start.offset<l&&(!i.events[b][1].end||i.events[b][1].end.offset>l))return;const T=t.events.length;let z=T,j,C;for(;z--;)if(t.events[z][0]==="exit"&&t.events[z][1].type==="chunkFlow"){if(j){C=t.events[z][1].end;break}j=!0}for(p(r),b=T;b<t.events.length;)t.events[b][1].end={...C},b++;Xe(t.events,z+1,0,t.events.slice(T)),t.events.length=b}}function p(y){let P=n.length;for(;P-- >y;){const A=n[P];t.containerState=A[1],A[0].exit.call(t,e)}n.length=y}function m(){i.write([null]),o=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Mx(e,t,n){return K(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function gr(e){if(e===null||ee(e)||Rn(e))return 1;if(ul(e))return 2}function cl(e,t,n){const r=[];let i=-1;for(;++i<e.length;){const o=e[i].resolveAll;o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const us={name:"attention",resolveAll:jx,tokenize:Ox};function jx(e,t){let n=-1,r,i,o,l,a,s,u,f;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(r=n;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const c={...e[r][1].end},d={...e[n][1].start};yf(c,-s),yf(d,s),l={type:s>1?"strongSequence":"emphasisSequence",start:c,end:{...e[r][1].end}},a={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:d},o={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...l.start},end:{...a.end}},e[r][1].end={...l.start},e[n][1].start={...a.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=rt(u,[["enter",e[r][1],t],["exit",e[r][1],t]])),u=rt(u,[["enter",i,t],["enter",l,t],["exit",l,t],["enter",o,t]]),u=rt(u,cl(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),u=rt(u,[["exit",o,t],["enter",a,t],["exit",a,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(f=2,u=rt(u,[["enter",e[n][1],t],["exit",e[n][1],t]])):f=0,Xe(e,r-1,n-r+3,u),n=r+u.length-f-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Ox(e,t){const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=gr(r);let o;return l;function l(s){return o=s,e.enter("attentionSequence"),a(s)}function a(s){if(s===o)return e.consume(s),a;const u=e.exit("attentionSequence"),f=gr(s),c=!f||f===2&&i||n.includes(s),d=!i||i===2&&f||n.includes(r);return u._open=!!(o===42?c:c&&(i||!d)),u._close=!!(o===42?d:d&&(f||!c)),t(s)}}function yf(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Bx={name:"autolink",tokenize:Wx};function Wx(e,t,n){let r=0;return i;function i(h){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(h){return Ne(h)?(e.consume(h),l):h===64?n(h):u(h)}function l(h){return h===43||h===45||h===46||Ie(h)?(r=1,a(h)):u(h)}function a(h){return h===58?(e.consume(h),r=0,s):(h===43||h===45||h===46||Ie(h))&&r++<32?(e.consume(h),a):(r=0,u(h))}function s(h){return h===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):h===null||h===32||h===60||jo(h)?n(h):(e.consume(h),s)}function u(h){return h===64?(e.consume(h),f):Ix(h)?(e.consume(h),u):n(h)}function f(h){return Ie(h)?c(h):n(h)}function c(h){return h===46?(e.consume(h),r=0,f):h===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(h),e.exit("autolinkMarker"),e.exit("autolink"),t):d(h)}function d(h){if((h===45||Ie(h))&&r++<63){const g=h===45?d:c;return e.consume(h),g}return n(h)}}const Pi={partial:!0,tokenize:Ux};function Ux(e,t,n){return r;function r(o){return H(o)?K(e,i,"linePrefix")(o):i(o)}function i(o){return o===null||O(o)?t(o):n(o)}}const Vp={continuation:{tokenize:$x},exit:Vx,name:"blockQuote",tokenize:Hx};function Hx(e,t,n){const r=this;return i;function i(l){if(l===62){const a=r.containerState;return a.open||(e.enter("blockQuote",{_container:!0}),a.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),o}return n(l)}function o(l){return H(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(l))}}function $x(e,t,n){const r=this;return i;function i(l){return H(l)?K(e,o,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):o(l)}function o(l){return e.attempt(Vp,t,n)(l)}}function Vx(e){e.exit("blockQuote")}const Qp={name:"characterEscape",tokenize:Qx};function Qx(e,t,n){return r;function r(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),i}function i(o){return zx(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(o)}}const Kp={name:"characterReference",tokenize:Kx};function Kx(e,t,n){const r=this;let i=0,o,l;return a;function a(c){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),s}function s(c){return c===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(c),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),o=31,l=Ie,f(c))}function u(c){return c===88||c===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(c),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,l=Rx,f):(e.enter("characterReferenceValue"),o=7,l=ss,f(c))}function f(c){if(c===59&&i){const d=e.exit("characterReferenceValue");return l===Ie&&!wu(r.sliceSerialize(d))?n(c):(e.enter("characterReferenceMarker"),e.consume(c),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return l(c)&&i++<o?(e.consume(c),f):n(c)}}const kf={partial:!0,tokenize:Yx},wf={concrete:!0,name:"codeFenced",tokenize:qx};function qx(e,t,n){const r=this,i={partial:!0,tokenize:A};let o=0,l=0,a;return s;function s(b){return u(b)}function u(b){const T=r.events[r.events.length-1];return o=T&&T[1].type==="linePrefix"?T[2].sliceSerialize(T[1],!0).length:0,a=b,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(b)}function f(b){return b===a?(l++,e.consume(b),f):l<3?n(b):(e.exit("codeFencedFenceSequence"),H(b)?K(e,c,"whitespace")(b):c(b))}function c(b){return b===null||O(b)?(e.exit("codeFencedFence"),r.interrupt?t(b):e.check(kf,k,P)(b)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),d(b))}function d(b){return b===null||O(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(b)):H(b)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),K(e,h,"whitespace")(b)):b===96&&b===a?n(b):(e.consume(b),d)}function h(b){return b===null||O(b)?c(b):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),g(b))}function g(b){return b===null||O(b)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(b)):b===96&&b===a?n(b):(e.consume(b),g)}function k(b){return e.attempt(i,P,S)(b)}function S(b){return e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),p}function p(b){return o>0&&H(b)?K(e,m,"linePrefix",o+1)(b):m(b)}function m(b){return b===null||O(b)?e.check(kf,k,P)(b):(e.enter("codeFlowValue"),y(b))}function y(b){return b===null||O(b)?(e.exit("codeFlowValue"),m(b)):(e.consume(b),y)}function P(b){return e.exit("codeFenced"),t(b)}function A(b,T,z){let j=0;return C;function C(V){return b.enter("lineEnding"),b.consume(V),b.exit("lineEnding"),D}function D(V){return b.enter("codeFencedFence"),H(V)?K(b,M,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(V):M(V)}function M(V){return V===a?(b.enter("codeFencedFenceSequence"),q(V)):z(V)}function q(V){return V===a?(j++,b.consume(V),q):j>=l?(b.exit("codeFencedFenceSequence"),H(V)?K(b,te,"whitespace")(V):te(V)):z(V)}function te(V){return V===null||O(V)?(b.exit("codeFencedFence"),T(V)):z(V)}}}function Yx(e,t,n){const r=this;return i;function i(l){return l===null?n(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}const Vl={name:"codeIndented",tokenize:Xx},Gx={partial:!0,tokenize:Jx};function Xx(e,t,n){const r=this;return i;function i(u){return e.enter("codeIndented"),K(e,o,"linePrefix",5)(u)}function o(u){const f=r.events[r.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?l(u):n(u)}function l(u){return u===null?s(u):O(u)?e.attempt(Gx,l,s)(u):(e.enter("codeFlowValue"),a(u))}function a(u){return u===null||O(u)?(e.exit("codeFlowValue"),l(u)):(e.consume(u),a)}function s(u){return e.exit("codeIndented"),t(u)}}function Jx(e,t,n){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?n(l):O(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):K(e,o,"linePrefix",5)(l)}function o(l){const a=r.events[r.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):O(l)?i(l):n(l)}}const Zx={name:"codeText",previous:t1,resolve:e1,tokenize:n1};function e1(e){let t=e.length-4,n=3,r,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(r=n;++r<t;)if(e[r][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!=="lineEnding"&&(i=r):(r===t||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function t1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function n1(e,t,n){let r=0,i,o;return l;function l(c){return e.enter("codeText"),e.enter("codeTextSequence"),a(c)}function a(c){return c===96?(e.consume(c),r++,a):(e.exit("codeTextSequence"),s(c))}function s(c){return c===null?n(c):c===32?(e.enter("space"),e.consume(c),e.exit("space"),s):c===96?(o=e.enter("codeTextSequence"),i=0,f(c)):O(c)?(e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(c))}function u(c){return c===null||c===32||c===96||O(c)?(e.exit("codeTextData"),s(c)):(e.consume(c),u)}function f(c){return c===96?(e.consume(c),i++,f):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),t(c)):(o.type="codeTextData",u(c))}}class r1{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const r=n??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(t,r):t>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(t,n,r){const i=n||0;this.setCursor(Math.trunc(t));const o=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&_r(this.left,r),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),_r(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),_r(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);_r(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);_r(this.left,n.reverse())}}}function _r(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function qp(e){const t={};let n=-1,r,i,o,l,a,s,u;const f=new r1(e);for(;++n<f.length;){for(;n in t;)n=t[n];if(r=f.get(n),n&&r[1].type==="chunkFlow"&&f.get(n-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,o=0,o<s.length&&s[o][1].type==="lineEndingBlank"&&(o+=2),o<s.length&&s[o][1].type==="content"))for(;++o<s.length&&s[o][1].type!=="content";)s[o][1].type==="chunkText"&&(s[o][1]._isInFirstContentOfListItem=!0,o++);if(r[0]==="enter")r[1].contentType&&(Object.assign(t,i1(f,n)),n=t[n],u=!0);else if(r[1]._container){for(o=n,i=void 0;o--;)if(l=f.get(o),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(f.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=o);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...f.get(i)[1].start},a=f.slice(i,n),a.unshift(r),f.splice(i,n-i+1,a))}}return Xe(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!u}function i1(e,t){const n=e.get(t)[1],r=e.get(t)[2];let i=t-1;const o=[];let l=n._tokenizer;l||(l=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const a=l.events,s=[],u={};let f,c,d=-1,h=n,g=0,k=0;const S=[k];for(;h;){for(;e.get(++i)[1]!==h;);o.push(i),h._tokenizer||(f=r.sliceStream(h),h.next||f.push(null),c&&l.defineSkip(h.start),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(f),h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),c=h,h=h.next}for(h=n;++d<a.length;)a[d][0]==="exit"&&a[d-1][0]==="enter"&&a[d][1].type===a[d-1][1].type&&a[d][1].start.line!==a[d][1].end.line&&(k=d+1,S.push(k),h._tokenizer=void 0,h.previous=void 0,h=h.next);for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):S.pop(),d=S.length;d--;){const p=a.slice(S[d],S[d+1]),m=o.pop();s.push([m,m+p.length-1]),e.splice(m,2,p)}for(s.reverse(),d=-1;++d<s.length;)u[g+s[d][0]]=g+s[d][1],g+=s[d][1]-s[d][0]-1;return u}const o1={resolve:a1,tokenize:s1},l1={partial:!0,tokenize:u1};function a1(e){return qp(e),e}function s1(e,t){let n;return r;function r(a){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(a)}function i(a){return a===null?o(a):O(a)?e.check(l1,l,o)(a):(e.consume(a),i)}function o(a){return e.exit("chunkContent"),e.exit("content"),t(a)}function l(a){return e.consume(a),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function u1(e,t,n){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),K(e,o,"linePrefix")}function o(l){if(l===null||O(l))return n(l);const a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?t(l):e.interrupt(r.parser.constructs.flow,n,t)(l)}}function Yp(e,t,n,r,i,o,l,a,s){const u=s||Number.POSITIVE_INFINITY;let f=0;return c;function c(p){return p===60?(e.enter(r),e.enter(i),e.enter(o),e.consume(p),e.exit(o),d):p===null||p===32||p===41||jo(p)?n(p):(e.enter(r),e.enter(l),e.enter(a),e.enter("chunkString",{contentType:"string"}),k(p))}function d(p){return p===62?(e.enter(o),e.consume(p),e.exit(o),e.exit(i),e.exit(r),t):(e.enter(a),e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===62?(e.exit("chunkString"),e.exit(a),d(p)):p===null||p===60||O(p)?n(p):(e.consume(p),p===92?g:h)}function g(p){return p===60||p===62||p===92?(e.consume(p),h):h(p)}function k(p){return!f&&(p===null||p===41||ee(p))?(e.exit("chunkString"),e.exit(a),e.exit(l),e.exit(r),t(p)):f<u&&p===40?(e.consume(p),f++,k):p===41?(e.consume(p),f--,k):p===null||p===32||p===40||jo(p)?n(p):(e.consume(p),p===92?S:k)}function S(p){return p===40||p===41||p===92?(e.consume(p),k):k(p)}}function Gp(e,t,n,r,i,o){const l=this;let a=0,s;return u;function u(h){return e.enter(r),e.enter(i),e.consume(h),e.exit(i),e.enter(o),f}function f(h){return a>999||h===null||h===91||h===93&&!s||h===94&&!a&&"_hiddenFootnoteSupport"in l.parser.constructs?n(h):h===93?(e.exit(o),e.enter(i),e.consume(h),e.exit(i),e.exit(r),t):O(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===null||h===91||h===93||O(h)||a++>999?(e.exit("chunkString"),f(h)):(e.consume(h),s||(s=!H(h)),h===92?d:c)}function d(h){return h===91||h===92||h===93?(e.consume(h),a++,c):c(h)}}function Xp(e,t,n,r,i,o){let l;return a;function a(d){return d===34||d===39||d===40?(e.enter(r),e.enter(i),e.consume(d),e.exit(i),l=d===40?41:d,s):n(d)}function s(d){return d===l?(e.enter(i),e.consume(d),e.exit(i),e.exit(r),t):(e.enter(o),u(d))}function u(d){return d===l?(e.exit(o),s(l)):d===null?n(d):O(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),K(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(d))}function f(d){return d===l||d===null||O(d)?(e.exit("chunkString"),u(d)):(e.consume(d),d===92?c:f)}function c(d){return d===l||d===92?(e.consume(d),f):f(d)}}function Yr(e,t){let n;return r;function r(i){return O(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,r):H(i)?K(e,r,n?"linePrefix":"lineSuffix")(i):t(i)}}const c1={name:"definition",tokenize:d1},f1={partial:!0,tokenize:h1};function d1(e,t,n){const r=this;let i;return o;function o(h){return e.enter("definition"),l(h)}function l(h){return Gp.call(r,e,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(h)}function a(h){return i=gt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),h===58?(e.enter("definitionMarker"),e.consume(h),e.exit("definitionMarker"),s):n(h)}function s(h){return ee(h)?Yr(e,u)(h):u(h)}function u(h){return Yp(e,f,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(h)}function f(h){return e.attempt(f1,c,c)(h)}function c(h){return H(h)?K(e,d,"whitespace")(h):d(h)}function d(h){return h===null||O(h)?(e.exit("definition"),r.parser.defined.push(i),t(h)):n(h)}}function h1(e,t,n){return r;function r(a){return ee(a)?Yr(e,i)(a):n(a)}function i(a){return Xp(e,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return H(a)?K(e,l,"whitespace")(a):l(a)}function l(a){return a===null||O(a)?t(a):n(a)}}const p1={name:"hardBreakEscape",tokenize:m1};function m1(e,t,n){return r;function r(o){return e.enter("hardBreakEscape"),e.consume(o),i}function i(o){return O(o)?(e.exit("hardBreakEscape"),t(o)):n(o)}}const g1={name:"headingAtx",resolve:y1,tokenize:k1};function y1(e,t){let n=e.length-2,r=3,i,o;return e[r][1].type==="whitespace"&&(r+=2),n-2>r&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(r===n-1||n-4>r&&e[n-2][1].type==="whitespace")&&(n-=r+1===n?2:4),n>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[n][1].end},o={type:"chunkText",start:e[r][1].start,end:e[n][1].end,contentType:"text"},Xe(e,r,n-r+1,[["enter",i,t],["enter",o,t],["exit",o,t],["exit",i,t]])),e}function k1(e,t,n){let r=0;return i;function i(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),l(f)}function l(f){return f===35&&r++<6?(e.consume(f),l):f===null||ee(f)?(e.exit("atxHeadingSequence"),a(f)):n(f)}function a(f){return f===35?(e.enter("atxHeadingSequence"),s(f)):f===null||O(f)?(e.exit("atxHeading"),t(f)):H(f)?K(e,a,"whitespace")(f):(e.enter("atxHeadingText"),u(f))}function s(f){return f===35?(e.consume(f),s):(e.exit("atxHeadingSequence"),a(f))}function u(f){return f===null||f===35||ee(f)?(e.exit("atxHeadingText"),a(f)):(e.consume(f),u)}}const w1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],vf=["pre","script","style","textarea"],v1={concrete:!0,name:"htmlFlow",resolveTo:S1,tokenize:C1},x1={partial:!0,tokenize:E1},b1={partial:!0,tokenize:P1};function S1(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function C1(e,t,n){const r=this;let i,o,l,a,s;return u;function u(x){return f(x)}function f(x){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(x),c}function c(x){return x===33?(e.consume(x),d):x===47?(e.consume(x),o=!0,k):x===63?(e.consume(x),i=3,r.interrupt?t:w):Ne(x)?(e.consume(x),l=String.fromCharCode(x),S):n(x)}function d(x){return x===45?(e.consume(x),i=2,h):x===91?(e.consume(x),i=5,a=0,g):Ne(x)?(e.consume(x),i=4,r.interrupt?t:w):n(x)}function h(x){return x===45?(e.consume(x),r.interrupt?t:w):n(x)}function g(x){const ke="CDATA[";return x===ke.charCodeAt(a++)?(e.consume(x),a===ke.length?r.interrupt?t:M:g):n(x)}function k(x){return Ne(x)?(e.consume(x),l=String.fromCharCode(x),S):n(x)}function S(x){if(x===null||x===47||x===62||ee(x)){const ke=x===47,st=l.toLowerCase();return!ke&&!o&&vf.includes(st)?(i=1,r.interrupt?t(x):M(x)):w1.includes(l.toLowerCase())?(i=6,ke?(e.consume(x),p):r.interrupt?t(x):M(x)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(x):o?m(x):y(x))}return x===45||Ie(x)?(e.consume(x),l+=String.fromCharCode(x),S):n(x)}function p(x){return x===62?(e.consume(x),r.interrupt?t:M):n(x)}function m(x){return H(x)?(e.consume(x),m):C(x)}function y(x){return x===47?(e.consume(x),C):x===58||x===95||Ne(x)?(e.consume(x),P):H(x)?(e.consume(x),y):C(x)}function P(x){return x===45||x===46||x===58||x===95||Ie(x)?(e.consume(x),P):A(x)}function A(x){return x===61?(e.consume(x),b):H(x)?(e.consume(x),A):y(x)}function b(x){return x===null||x===60||x===61||x===62||x===96?n(x):x===34||x===39?(e.consume(x),s=x,T):H(x)?(e.consume(x),b):z(x)}function T(x){return x===s?(e.consume(x),s=null,j):x===null||O(x)?n(x):(e.consume(x),T)}function z(x){return x===null||x===34||x===39||x===47||x===60||x===61||x===62||x===96||ee(x)?A(x):(e.consume(x),z)}function j(x){return x===47||x===62||H(x)?y(x):n(x)}function C(x){return x===62?(e.consume(x),D):n(x)}function D(x){return x===null||O(x)?M(x):H(x)?(e.consume(x),D):n(x)}function M(x){return x===45&&i===2?(e.consume(x),me):x===60&&i===1?(e.consume(x),he):x===62&&i===4?(e.consume(x),Y):x===63&&i===3?(e.consume(x),w):x===93&&i===5?(e.consume(x),B):O(x)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(x1,J,q)(x)):x===null||O(x)?(e.exit("htmlFlowData"),q(x)):(e.consume(x),M)}function q(x){return e.check(b1,te,J)(x)}function te(x){return e.enter("lineEnding"),e.consume(x),e.exit("lineEnding"),V}function V(x){return x===null||O(x)?q(x):(e.enter("htmlFlowData"),M(x))}function me(x){return x===45?(e.consume(x),w):M(x)}function he(x){return x===47?(e.consume(x),l="",N):M(x)}function N(x){if(x===62){const ke=l.toLowerCase();return vf.includes(ke)?(e.consume(x),Y):M(x)}return Ne(x)&&l.length<8?(e.consume(x),l+=String.fromCharCode(x),N):M(x)}function B(x){return x===93?(e.consume(x),w):M(x)}function w(x){return x===62?(e.consume(x),Y):x===45&&i===2?(e.consume(x),w):M(x)}function Y(x){return x===null||O(x)?(e.exit("htmlFlowData"),J(x)):(e.consume(x),Y)}function J(x){return e.exit("htmlFlow"),t(x)}}function P1(e,t,n){const r=this;return i;function i(l){return O(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),o):n(l)}function o(l){return r.parser.lazy[r.now().line]?n(l):t(l)}}function E1(e,t,n){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Pi,t,n)}}const A1={name:"htmlText",tokenize:T1};function T1(e,t,n){const r=this;let i,o,l;return a;function a(w){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(w),s}function s(w){return w===33?(e.consume(w),u):w===47?(e.consume(w),A):w===63?(e.consume(w),y):Ne(w)?(e.consume(w),z):n(w)}function u(w){return w===45?(e.consume(w),f):w===91?(e.consume(w),o=0,g):Ne(w)?(e.consume(w),m):n(w)}function f(w){return w===45?(e.consume(w),h):n(w)}function c(w){return w===null?n(w):w===45?(e.consume(w),d):O(w)?(l=c,he(w)):(e.consume(w),c)}function d(w){return w===45?(e.consume(w),h):c(w)}function h(w){return w===62?me(w):w===45?d(w):c(w)}function g(w){const Y="CDATA[";return w===Y.charCodeAt(o++)?(e.consume(w),o===Y.length?k:g):n(w)}function k(w){return w===null?n(w):w===93?(e.consume(w),S):O(w)?(l=k,he(w)):(e.consume(w),k)}function S(w){return w===93?(e.consume(w),p):k(w)}function p(w){return w===62?me(w):w===93?(e.consume(w),p):k(w)}function m(w){return w===null||w===62?me(w):O(w)?(l=m,he(w)):(e.consume(w),m)}function y(w){return w===null?n(w):w===63?(e.consume(w),P):O(w)?(l=y,he(w)):(e.consume(w),y)}function P(w){return w===62?me(w):y(w)}function A(w){return Ne(w)?(e.consume(w),b):n(w)}function b(w){return w===45||Ie(w)?(e.consume(w),b):T(w)}function T(w){return O(w)?(l=T,he(w)):H(w)?(e.consume(w),T):me(w)}function z(w){return w===45||Ie(w)?(e.consume(w),z):w===47||w===62||ee(w)?j(w):n(w)}function j(w){return w===47?(e.consume(w),me):w===58||w===95||Ne(w)?(e.consume(w),C):O(w)?(l=j,he(w)):H(w)?(e.consume(w),j):me(w)}function C(w){return w===45||w===46||w===58||w===95||Ie(w)?(e.consume(w),C):D(w)}function D(w){return w===61?(e.consume(w),M):O(w)?(l=D,he(w)):H(w)?(e.consume(w),D):j(w)}function M(w){return w===null||w===60||w===61||w===62||w===96?n(w):w===34||w===39?(e.consume(w),i=w,q):O(w)?(l=M,he(w)):H(w)?(e.consume(w),M):(e.consume(w),te)}function q(w){return w===i?(e.consume(w),i=void 0,V):w===null?n(w):O(w)?(l=q,he(w)):(e.consume(w),q)}function te(w){return w===null||w===34||w===39||w===60||w===61||w===96?n(w):w===47||w===62||ee(w)?j(w):(e.consume(w),te)}function V(w){return w===47||w===62||ee(w)?j(w):n(w)}function me(w){return w===62?(e.consume(w),e.exit("htmlTextData"),e.exit("htmlText"),t):n(w)}function he(w){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),N}function N(w){return H(w)?K(e,B,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(w):B(w)}function B(w){return e.enter("htmlTextData"),l(w)}}const vu={name:"labelEnd",resolveAll:z1,resolveTo:_1,tokenize:N1},L1={tokenize:D1},I1={tokenize:F1},R1={tokenize:M1};function z1(e){let t=-1;const n=[];for(;++t<e.length;){const r=e[t][1];if(n.push(e[t]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",t+=i}}return e.length!==n.length&&Xe(e,0,e.length,n),e}function _1(e,t){let n=e.length,r=0,i,o,l,a;for(;n--;)if(i=e[n][1],o){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(o=n,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=n);const s={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[o][1].start},end:{...e[l][1].end}},f={type:"labelText",start:{...e[o+r+2][1].end},end:{...e[l-2][1].start}};return a=[["enter",s,t],["enter",u,t]],a=rt(a,e.slice(o+1,o+r+3)),a=rt(a,[["enter",f,t]]),a=rt(a,cl(t.parser.constructs.insideSpan.null,e.slice(o+r+4,l-3),t)),a=rt(a,[["exit",f,t],e[l-2],e[l-1],["exit",u,t]]),a=rt(a,e.slice(l+1)),a=rt(a,[["exit",s,t]]),Xe(e,o,e.length,a),e}function N1(e,t,n){const r=this;let i=r.events.length,o,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){o=r.events[i][1];break}return a;function a(d){return o?o._inactive?c(d):(l=r.parser.defined.includes(gt(r.sliceSerialize({start:o.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(d),e.exit("labelMarker"),e.exit("labelEnd"),s):n(d)}function s(d){return d===40?e.attempt(L1,f,l?f:c)(d):d===91?e.attempt(I1,f,l?u:c)(d):l?f(d):c(d)}function u(d){return e.attempt(R1,f,c)(d)}function f(d){return t(d)}function c(d){return o._balanced=!0,n(d)}}function D1(e,t,n){return r;function r(c){return e.enter("resource"),e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),i}function i(c){return ee(c)?Yr(e,o)(c):o(c)}function o(c){return c===41?f(c):Yp(e,l,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(c)}function l(c){return ee(c)?Yr(e,s)(c):f(c)}function a(c){return n(c)}function s(c){return c===34||c===39||c===40?Xp(e,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(c):f(c)}function u(c){return ee(c)?Yr(e,f)(c):f(c)}function f(c){return c===41?(e.enter("resourceMarker"),e.consume(c),e.exit("resourceMarker"),e.exit("resource"),t):n(c)}}function F1(e,t,n){const r=this;return i;function i(a){return Gp.call(r,e,o,l,"reference","referenceMarker","referenceString")(a)}function o(a){return r.parser.defined.includes(gt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(a):n(a)}function l(a){return n(a)}}function M1(e,t,n){return r;function r(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),i}function i(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),t):n(o)}}const j1={name:"labelStartImage",resolveAll:vu.resolveAll,tokenize:O1};function O1(e,t,n){const r=this;return i;function i(a){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(a),e.exit("labelImageMarker"),o}function o(a){return a===91?(e.enter("labelMarker"),e.consume(a),e.exit("labelMarker"),e.exit("labelImage"),l):n(a)}function l(a){return a===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(a):t(a)}}const B1={name:"labelStartLink",resolveAll:vu.resolveAll,tokenize:W1};function W1(e,t,n){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),o}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?n(l):t(l)}}const Ql={name:"lineEnding",tokenize:U1};function U1(e,t){return n;function n(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),K(e,t,"linePrefix")}}const ao={name:"thematicBreak",tokenize:H1};function H1(e,t,n){let r=0,i;return o;function o(u){return e.enter("thematicBreak"),l(u)}function l(u){return i=u,a(u)}function a(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||O(u))?(e.exit("thematicBreak"),t(u)):n(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),H(u)?K(e,a,"whitespace")(u):a(u))}}const je={continuation:{tokenize:K1},exit:Y1,name:"list",tokenize:Q1},$1={partial:!0,tokenize:G1},V1={partial:!0,tokenize:q1};function Q1(e,t,n){const r=this,i=r.events[r.events.length-1];let o=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return a;function a(h){const g=r.containerState.type||(h===42||h===43||h===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!r.containerState.marker||h===r.containerState.marker:ss(h)){if(r.containerState.type||(r.containerState.type=g,e.enter(g,{_container:!0})),g==="listUnordered")return e.enter("listItemPrefix"),h===42||h===45?e.check(ao,n,u)(h):u(h);if(!r.interrupt||h===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(h)}return n(h)}function s(h){return ss(h)&&++l<10?(e.consume(h),s):(!r.interrupt||l<2)&&(r.containerState.marker?h===r.containerState.marker:h===41||h===46)?(e.exit("listItemValue"),u(h)):n(h)}function u(h){return e.enter("listItemMarker"),e.consume(h),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||h,e.check(Pi,r.interrupt?n:f,e.attempt($1,d,c))}function f(h){return r.containerState.initialBlankLine=!0,o++,d(h)}function c(h){return H(h)?(e.enter("listItemPrefixWhitespace"),e.consume(h),e.exit("listItemPrefixWhitespace"),d):n(h)}function d(h){return r.containerState.size=o+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(h)}}function K1(e,t,n){const r=this;return r.containerState._closeFlow=void 0,e.check(Pi,i,o);function i(a){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,K(e,t,"listItemIndent",r.containerState.size+1)(a)}function o(a){return r.containerState.furtherBlankLines||!H(a)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(a)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(V1,t,l)(a))}function l(a){return r.containerState._closeFlow=!0,r.interrupt=void 0,K(e,e.attempt(je,t,n),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function q1(e,t,n){const r=this;return K(e,i,"listItemIndent",r.containerState.size+1);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?t(o):n(o)}}function Y1(e){e.exit(this.containerState.type)}function G1(e,t,n){const r=this;return K(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(o){const l=r.events[r.events.length-1];return!H(o)&&l&&l[1].type==="listItemPrefixWhitespace"?t(o):n(o)}}const xf={name:"setextUnderline",resolveTo:X1,tokenize:J1};function X1(e,t){let n=e.length,r,i,o;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){r=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!o&&e[n][1].type==="definition"&&(o=n);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",o?(e.splice(i,0,["enter",l,t]),e.splice(o+1,0,["exit",e[r][1],t]),e[r][1].end={...e[o][1].end}):e[r][1]=l,e.push(["exit",l,t]),e}function J1(e,t,n){const r=this;let i;return o;function o(u){let f=r.events.length,c;for(;f--;)if(r.events[f][1].type!=="lineEnding"&&r.events[f][1].type!=="linePrefix"&&r.events[f][1].type!=="content"){c=r.events[f][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||c)?(e.enter("setextHeadingLine"),i=u,l(u)):n(u)}function l(u){return e.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===i?(e.consume(u),a):(e.exit("setextHeadingLineSequence"),H(u)?K(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||O(u)?(e.exit("setextHeadingLine"),t(u)):n(u)}}const Z1={tokenize:e0};function e0(e){const t=this,n=e.attempt(Pi,r,e.attempt(this.parser.constructs.flowInitial,i,K(e,e.attempt(this.parser.constructs.flow,i,e.attempt(o1,i)),"linePrefix")));return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const t0={resolveAll:Zp()},n0=Jp("string"),r0=Jp("text");function Jp(e){return{resolveAll:Zp(e==="text"?i0:void 0),tokenize:t};function t(n){const r=this,i=this.parser.constructs[e],o=n.attempt(i,l,a);return l;function l(f){return u(f)?o(f):a(f)}function a(f){if(f===null){n.consume(f);return}return n.enter("data"),n.consume(f),s}function s(f){return u(f)?(n.exit("data"),o(f)):(n.consume(f),s)}function u(f){if(f===null)return!0;const c=i[f];let d=-1;if(c)for(;++d<c.length;){const h=c[d];if(!h.previous||h.previous.call(r,r.previous))return!0}return!1}}}function Zp(e){return t;function t(n,r){let i=-1,o;for(;++i<=n.length;)o===void 0?n[i]&&n[i][1].type==="data"&&(o=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==o+2&&(n[o][1].end=n[i-1][1].end,n.splice(o+2,i-o-2),i=o+2),o=void 0);return e?e(n,r):n}}function i0(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const r=e[n-1][1],i=t.sliceStream(r);let o=i.length,l=-1,a=0,s;for(;o--;){const u=i[o];if(typeof u=="string"){for(l=u.length;u.charCodeAt(l-1)===32;)a++,l--;if(l)break;l=-1}else if(u===-2)s=!0,a++;else if(u!==-1){o++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(a=0),a){const u={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?l:r.start._bufferIndex+l,_index:r.start._index+o,line:r.end.line,column:r.end.column-a,offset:r.end.offset-a},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(n,0,["enter",u,t],["exit",u,t]),n+=2)}n++}return e}const o0={42:je,43:je,45:je,48:je,49:je,50:je,51:je,52:je,53:je,54:je,55:je,56:je,57:je,62:Vp},l0={91:c1},a0={[-2]:Vl,[-1]:Vl,32:Vl},s0={35:g1,42:ao,45:[xf,ao],60:v1,61:xf,95:ao,96:wf,126:wf},u0={38:Kp,92:Qp},c0={[-5]:Ql,[-4]:Ql,[-3]:Ql,33:j1,38:Kp,42:us,60:[Bx,A1],91:B1,92:[p1,Qp],93:vu,95:us,96:Zx},f0={null:[us,t0]},d0={null:[42,95]},h0={null:[]},p0=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:d0,contentInitial:l0,disable:h0,document:o0,flow:s0,flowInitial:a0,insideSpan:f0,string:u0,text:c0},Symbol.toStringTag,{value:"Module"}));function m0(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},o=[];let l=[],a=[];const s={attempt:T(A),check:T(b),consume:m,enter:y,exit:P,interrupt:T(b,{interrupt:!0})},u={code:null,containerState:{},defineSkip:k,events:[],now:g,parser:e,previous:null,sliceSerialize:d,sliceStream:h,write:c};let f=t.tokenize.call(u,s);return t.resolveAll&&o.push(t),u;function c(D){return l=rt(l,D),S(),l[l.length-1]!==null?[]:(z(t,0),u.events=cl(o,u.events,u),u.events)}function d(D,M){return y0(h(D),M)}function h(D){return g0(l,D)}function g(){const{_bufferIndex:D,_index:M,line:q,column:te,offset:V}=r;return{_bufferIndex:D,_index:M,line:q,column:te,offset:V}}function k(D){i[D.line]=D.column,C()}function S(){let D;for(;r._index<l.length;){const M=l[r._index];if(typeof M=="string")for(D=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===D&&r._bufferIndex<M.length;)p(M.charCodeAt(r._bufferIndex));else p(M)}}function p(D){f=f(D)}function m(D){O(D)?(r.line++,r.column=1,r.offset+=D===-3?2:1,C()):D!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=D}function y(D,M){const q=M||{};return q.type=D,q.start=g(),u.events.push(["enter",q,u]),a.push(q),q}function P(D){const M=a.pop();return M.end=g(),u.events.push(["exit",M,u]),M}function A(D,M){z(D,M.from)}function b(D,M){M.restore()}function T(D,M){return q;function q(te,V,me){let he,N,B,w;return Array.isArray(te)?J(te):"tokenize"in te?J([te]):Y(te);function Y(ie){return kt;function kt(Ut){const Fn=Ut!==null&&ie[Ut],Mn=Ut!==null&&ie.null,Ai=[...Array.isArray(Fn)?Fn:Fn?[Fn]:[],...Array.isArray(Mn)?Mn:Mn?[Mn]:[]];return J(Ai)(Ut)}}function J(ie){return he=ie,N=0,ie.length===0?me:x(ie[N])}function x(ie){return kt;function kt(Ut){return w=j(),B=ie,ie.partial||(u.currentConstruct=ie),ie.name&&u.parser.constructs.disable.null.includes(ie.name)?st():ie.tokenize.call(M?Object.assign(Object.create(u),M):u,s,ke,st)(Ut)}}function ke(ie){return D(B,w),V}function st(ie){return w.restore(),++N<he.length?x(he[N]):me}}}function z(D,M){D.resolveAll&&!o.includes(D)&&o.push(D),D.resolve&&Xe(u.events,M,u.events.length-M,D.resolve(u.events.slice(M),u)),D.resolveTo&&(u.events=D.resolveTo(u.events,u))}function j(){const D=g(),M=u.previous,q=u.currentConstruct,te=u.events.length,V=Array.from(a);return{from:te,restore:me};function me(){r=D,u.previous=M,u.currentConstruct=q,u.events.length=te,a=V,C()}}function C(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function g0(e,t){const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex;let l;if(n===i)l=[e[n].slice(r,o)];else{if(l=e.slice(n,i),r>-1){const a=l[0];typeof a=="string"?l[0]=a.slice(r):l.shift()}o>0&&l.push(e[i].slice(0,o))}return l}function y0(e,t){let n=-1;const r=[];let i;for(;++n<e.length;){const o=e[n];let l;if(typeof o=="string")l=o;else switch(o){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=t?" ":"	";break}case-1:{if(!t&&i)continue;l=" ";break}default:l=String.fromCharCode(o)}i=o===-2,r.push(l)}return r.join("")}function k0(e){const r={constructs:Hp([p0,...(e||{}).extensions||[]]),content:i(_x),defined:[],document:i(Dx),flow:i(Z1),lazy:{},string:i(n0),text:i(r0)};return r;function i(o){return l;function l(a){return m0(r,o,a)}}}function w0(e){for(;!qp(e););return e}const bf=/[\0\t\n\r]/g;function v0(){let e=1,t="",n=!0,r;return i;function i(o,l,a){const s=[];let u,f,c,d,h;for(o=t+(typeof o=="string"?o.toString():new TextDecoder(l||void 0).decode(o)),c=0,t="",n&&(o.charCodeAt(0)===65279&&c++,n=void 0);c<o.length;){if(bf.lastIndex=c,u=bf.exec(o),d=u&&u.index!==void 0?u.index:o.length,h=o.charCodeAt(d),!u){t=o.slice(c);break}if(h===10&&c===d&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),c<d&&(s.push(o.slice(c,d)),e+=d-c),h){case 0:{s.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,s.push(-2);e++<f;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}c=d+1}return a&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}const x0=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function b0(e){return e.replace(x0,S0)}function S0(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const i=n.charCodeAt(1),o=i===120||i===88;return $p(n.slice(o?2:1),o?16:10)}return wu(n)||e}const em={}.hasOwnProperty;function C0(e,t,n){return typeof t!="string"&&(n=t,t=void 0),P0(n)(w0(k0(n).document().write(v0()(e,t,!0))))}function P0(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(_u),autolinkProtocol:j,autolinkEmail:j,atxHeading:o(Iu),blockQuote:o(Mn),characterEscape:j,characterReference:j,codeFenced:o(Ai),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:o(Ai,l),codeText:o(Dm,l),codeTextData:j,data:j,codeFlowValue:j,definition:o(Fm),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:o(Mm),hardBreakEscape:o(Ru),hardBreakTrailing:o(Ru),htmlFlow:o(zu,l),htmlFlowData:j,htmlText:o(zu,l),htmlTextData:j,image:o(jm),label:l,link:o(_u),listItem:o(Om),listItemValue:d,listOrdered:o(Nu,c),listUnordered:o(Nu),paragraph:o(Bm),reference:x,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:o(Iu),strong:o(Wm),thematicBreak:o(Hm)},exit:{atxHeading:s(),atxHeadingSequence:A,autolink:s(),autolinkEmail:Fn,autolinkProtocol:Ut,blockQuote:s(),characterEscapeValue:C,characterReferenceMarkerHexadecimal:st,characterReferenceMarkerNumeric:st,characterReferenceValue:ie,characterReference:kt,codeFenced:s(S),codeFencedFence:k,codeFencedFenceInfo:h,codeFencedFenceMeta:g,codeFlowValue:C,codeIndented:s(p),codeText:s(V),codeTextData:C,data:C,definition:s(),definitionDestinationString:P,definitionLabelString:m,definitionTitleString:y,emphasis:s(),hardBreakEscape:s(M),hardBreakTrailing:s(M),htmlFlow:s(q),htmlFlowData:C,htmlText:s(te),htmlTextData:C,image:s(he),label:B,labelText:N,lineEnding:D,link:s(me),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ke,resourceDestinationString:w,resourceTitleString:Y,resource:J,setextHeading:s(z),setextHeadingLineSequence:T,setextHeadingText:b,strong:s(),thematicBreak:s()}};tm(t,(e||{}).mdastExtensions||[]);const n={};return r;function r(E){let _={type:"root",children:[]};const W={stack:[_],tokenStack:[],config:t,enter:a,exit:u,buffer:l,resume:f,data:n},Q=[];let Z=-1;for(;++Z<E.length;)if(E[Z][1].type==="listOrdered"||E[Z][1].type==="listUnordered")if(E[Z][0]==="enter")Q.push(Z);else{const ut=Q.pop();Z=i(E,ut,Z)}for(Z=-1;++Z<E.length;){const ut=t[E[Z][0]];em.call(ut,E[Z][1].type)&&ut[E[Z][1].type].call(Object.assign({sliceSerialize:E[Z][2].sliceSerialize},W),E[Z][1])}if(W.tokenStack.length>0){const ut=W.tokenStack[W.tokenStack.length-1];(ut[1]||Sf).call(W,void 0,ut[0])}for(_.position={start:$t(E.length>0?E[0][1].start:{line:1,column:1,offset:0}),end:$t(E.length>0?E[E.length-2][1].end:{line:1,column:1,offset:0})},Z=-1;++Z<t.transforms.length;)_=t.transforms[Z](_)||_;return _}function i(E,_,W){let Q=_-1,Z=-1,ut=!1,gn,At,Sr,Cr;for(;++Q<=W;){const Qe=E[Q];switch(Qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Qe[0]==="enter"?Z++:Z--,Cr=void 0;break}case"lineEndingBlank":{Qe[0]==="enter"&&(gn&&!Cr&&!Z&&!Sr&&(Sr=Q),Cr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Cr=void 0}if(!Z&&Qe[0]==="enter"&&Qe[1].type==="listItemPrefix"||Z===-1&&Qe[0]==="exit"&&(Qe[1].type==="listUnordered"||Qe[1].type==="listOrdered")){if(gn){let jn=Q;for(At=void 0;jn--;){const Tt=E[jn];if(Tt[1].type==="lineEnding"||Tt[1].type==="lineEndingBlank"){if(Tt[0]==="exit")continue;At&&(E[At][1].type="lineEndingBlank",ut=!0),Tt[1].type="lineEnding",At=jn}else if(!(Tt[1].type==="linePrefix"||Tt[1].type==="blockQuotePrefix"||Tt[1].type==="blockQuotePrefixWhitespace"||Tt[1].type==="blockQuoteMarker"||Tt[1].type==="listItemIndent"))break}Sr&&(!At||Sr<At)&&(gn._spread=!0),gn.end=Object.assign({},At?E[At][1].start:Qe[1].end),E.splice(At||Q,0,["exit",gn,Qe[2]]),Q++,W++}if(Qe[1].type==="listItemPrefix"){const jn={type:"listItem",_spread:!1,start:Object.assign({},Qe[1].start),end:void 0};gn=jn,E.splice(Q,0,["enter",jn,Qe[2]]),Q++,W++,Sr=void 0,Cr=!0}}}return E[_][1]._spread=ut,W}function o(E,_){return W;function W(Q){a.call(this,E(Q),Q),_&&_.call(this,Q)}}function l(){this.stack.push({type:"fragment",children:[]})}function a(E,_,W){this.stack[this.stack.length-1].children.push(E),this.stack.push(E),this.tokenStack.push([_,W||void 0]),E.position={start:$t(_.start),end:void 0}}function s(E){return _;function _(W){E&&E.call(this,W),u.call(this,W)}}function u(E,_){const W=this.stack.pop(),Q=this.tokenStack.pop();if(Q)Q[0].type!==E.type&&(_?_.call(this,E,Q[0]):(Q[1]||Sf).call(this,E,Q[0]));else throw new Error("Cannot close `"+E.type+"` ("+qr({start:E.start,end:E.end})+"): it’s not open");W.position.end=$t(E.end)}function f(){return ku(this.stack.pop())}function c(){this.data.expectingFirstListItemValue=!0}function d(E){if(this.data.expectingFirstListItemValue){const _=this.stack[this.stack.length-2];_.start=Number.parseInt(this.sliceSerialize(E),10),this.data.expectingFirstListItemValue=void 0}}function h(){const E=this.resume(),_=this.stack[this.stack.length-1];_.lang=E}function g(){const E=this.resume(),_=this.stack[this.stack.length-1];_.meta=E}function k(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function S(){const E=this.resume(),_=this.stack[this.stack.length-1];_.value=E.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function p(){const E=this.resume(),_=this.stack[this.stack.length-1];_.value=E.replace(/(\r?\n|\r)$/g,"")}function m(E){const _=this.resume(),W=this.stack[this.stack.length-1];W.label=_,W.identifier=gt(this.sliceSerialize(E)).toLowerCase()}function y(){const E=this.resume(),_=this.stack[this.stack.length-1];_.title=E}function P(){const E=this.resume(),_=this.stack[this.stack.length-1];_.url=E}function A(E){const _=this.stack[this.stack.length-1];if(!_.depth){const W=this.sliceSerialize(E).length;_.depth=W}}function b(){this.data.setextHeadingSlurpLineEnding=!0}function T(E){const _=this.stack[this.stack.length-1];_.depth=this.sliceSerialize(E).codePointAt(0)===61?1:2}function z(){this.data.setextHeadingSlurpLineEnding=void 0}function j(E){const W=this.stack[this.stack.length-1].children;let Q=W[W.length-1];(!Q||Q.type!=="text")&&(Q=Um(),Q.position={start:$t(E.start),end:void 0},W.push(Q)),this.stack.push(Q)}function C(E){const _=this.stack.pop();_.value+=this.sliceSerialize(E),_.position.end=$t(E.end)}function D(E){const _=this.stack[this.stack.length-1];if(this.data.atHardBreak){const W=_.children[_.children.length-1];W.position.end=$t(E.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(_.type)&&(j.call(this,E),C.call(this,E))}function M(){this.data.atHardBreak=!0}function q(){const E=this.resume(),_=this.stack[this.stack.length-1];_.value=E}function te(){const E=this.resume(),_=this.stack[this.stack.length-1];_.value=E}function V(){const E=this.resume(),_=this.stack[this.stack.length-1];_.value=E}function me(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=_,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function he(){const E=this.stack[this.stack.length-1];if(this.data.inReference){const _=this.data.referenceType||"shortcut";E.type+="Reference",E.referenceType=_,delete E.url,delete E.title}else delete E.identifier,delete E.label;this.data.referenceType=void 0}function N(E){const _=this.sliceSerialize(E),W=this.stack[this.stack.length-2];W.label=b0(_),W.identifier=gt(_).toLowerCase()}function B(){const E=this.stack[this.stack.length-1],_=this.resume(),W=this.stack[this.stack.length-1];if(this.data.inReference=!0,W.type==="link"){const Q=E.children;W.children=Q}else W.alt=_}function w(){const E=this.resume(),_=this.stack[this.stack.length-1];_.url=E}function Y(){const E=this.resume(),_=this.stack[this.stack.length-1];_.title=E}function J(){this.data.inReference=void 0}function x(){this.data.referenceType="collapsed"}function ke(E){const _=this.resume(),W=this.stack[this.stack.length-1];W.label=_,W.identifier=gt(this.sliceSerialize(E)).toLowerCase(),this.data.referenceType="full"}function st(E){this.data.characterReferenceType=E.type}function ie(E){const _=this.sliceSerialize(E),W=this.data.characterReferenceType;let Q;W?(Q=$p(_,W==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Q=wu(_);const Z=this.stack[this.stack.length-1];Z.value+=Q}function kt(E){const _=this.stack.pop();_.position.end=$t(E.end)}function Ut(E){C.call(this,E);const _=this.stack[this.stack.length-1];_.url=this.sliceSerialize(E)}function Fn(E){C.call(this,E);const _=this.stack[this.stack.length-1];_.url="mailto:"+this.sliceSerialize(E)}function Mn(){return{type:"blockquote",children:[]}}function Ai(){return{type:"code",lang:null,meta:null,value:""}}function Dm(){return{type:"inlineCode",value:""}}function Fm(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Mm(){return{type:"emphasis",children:[]}}function Iu(){return{type:"heading",depth:0,children:[]}}function Ru(){return{type:"break"}}function zu(){return{type:"html",value:""}}function jm(){return{type:"image",title:null,url:"",alt:null}}function _u(){return{type:"link",title:null,url:"",children:[]}}function Nu(E){return{type:"list",ordered:E.type==="listOrdered",start:null,spread:E._spread,children:[]}}function Om(E){return{type:"listItem",spread:E._spread,checked:null,children:[]}}function Bm(){return{type:"paragraph",children:[]}}function Wm(){return{type:"strong",children:[]}}function Um(){return{type:"text",value:""}}function Hm(){return{type:"thematicBreak"}}}function $t(e){return{line:e.line,column:e.column,offset:e.offset}}function tm(e,t){let n=-1;for(;++n<t.length;){const r=t[n];Array.isArray(r)?tm(e,r):E0(e,r)}}function E0(e,t){let n;for(n in t)if(em.call(t,n))switch(n){case"canContainEols":{const r=t[n];r&&e[n].push(...r);break}case"transforms":{const r=t[n];r&&e[n].push(...r);break}case"enter":case"exit":{const r=t[n];r&&Object.assign(e[n],r);break}}}function Sf(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+qr({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+qr({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+qr({start:t.start,end:t.end})+") is still open")}function A0(e){const t=this;t.parser=n;function n(r){return C0(r,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function T0(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function L0(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function I0(e,t){const n=t.value?t.value+`
`:"",r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let o={type:"element",tagName:"code",properties:r,children:[{type:"text",value:n}]};return t.meta&&(o.data={meta:t.meta}),e.patch(t,o),o=e.applyData(t,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(t,o),o}function R0(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function z0(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function _0(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(t.identifier).toUpperCase(),i=br(r.toLowerCase()),o=e.footnoteOrder.indexOf(r);let l,a=e.footnoteCounts.get(r);a===void 0?(a=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=o+1,a+=1,e.footnoteCounts.set(r,a);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(t,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,u),e.applyData(t,u)}function N0(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function D0(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function nm(e,t){const n=t.referenceType;let r="]";if(n==="collapsed"?r+="[]":n==="full"&&(r+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+r}];const i=e.all(t),o=i[0];o&&o.type==="text"?o.value="["+o.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function F0(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return nm(e,t);const i={src:br(r.url||""),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,o),e.applyData(t,o)}function M0(e,t){const n={src:br(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function j0(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const r={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function O0(e,t){const n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return nm(e,t);const i={href:br(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const o={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,o),e.applyData(t,o)}function B0(e,t){const n={href:br(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const r={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function W0(e,t,n){const r=e.all(t),i=n?U0(n):rm(t),o={},l=[];if(typeof t.checked=="boolean"){const f=r[0];let c;f&&f.type==="element"&&f.tagName==="p"?c=f:(c={type:"element",tagName:"p",properties:{},children:[]},r.unshift(c)),c.children.length>0&&c.children.unshift({type:"text",value:" "}),c.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<r.length;){const f=r[a];(i||a!==0||f.type!=="element"||f.tagName!=="p")&&l.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!i?l.push(...f.children):l.push(f)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&l.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:l};return e.patch(t,u),e.applyData(t,u)}function U0(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let r=-1;for(;!t&&++r<n.length;)t=rm(n[r])}return t}function rm(e){const t=e.spread;return t??e.children.length>1}function H0(e,t){const n={},r=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(r,!0)};return e.patch(t,o),e.applyData(t,o)}function $0(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function V0(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Q0(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function K0(e,t){const n=e.all(t),r=n.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],l),i.push(l)}if(n.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},a=pu(t.children[1]),s=Fp(t.children[t.children.length-1]);a&&s&&(l.position={start:a,end:s}),i.push(l)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,o),e.applyData(t,o)}function q0(e,t,n){const r=n?n.children:void 0,o=(r?r.indexOf(t):1)===0?"th":"td",l=n&&n.type==="table"?n.align:void 0,a=l?l.length:t.children.length;let s=-1;const u=[];for(;++s<a;){const c=t.children[s],d={},h=l?l[s]:void 0;h&&(d.align=h);let g={type:"element",tagName:o,properties:d,children:[]};c&&(g.children=e.all(c),e.patch(c,g),g=e.applyData(c,g)),u.push(g)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(t,f),e.applyData(t,f)}function Y0(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Cf=9,Pf=32;function G0(e){const t=String(e),n=/\r?\n|\r/g;let r=n.exec(t),i=0;const o=[];for(;r;)o.push(Ef(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return o.push(Ef(t.slice(i),i>0,!1)),o.join("")}function Ef(e,t,n){let r=0,i=e.length;if(t){let o=e.codePointAt(r);for(;o===Cf||o===Pf;)r++,o=e.codePointAt(r)}if(n){let o=e.codePointAt(i-1);for(;o===Cf||o===Pf;)i--,o=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function X0(e,t){const n={type:"text",value:G0(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function J0(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const Z0={blockquote:T0,break:L0,code:I0,delete:R0,emphasis:z0,footnoteReference:_0,heading:N0,html:D0,imageReference:F0,image:M0,inlineCode:j0,linkReference:O0,link:B0,listItem:W0,list:H0,paragraph:$0,root:V0,strong:Q0,table:K0,tableCell:Y0,tableRow:q0,text:X0,thematicBreak:J0,toml:Vi,yaml:Vi,definition:Vi,footnoteDefinition:Vi};function Vi(){}const im=-1,fl=0,Gr=1,Oo=2,xu=3,bu=4,Su=5,Cu=6,om=7,lm=8,Af=typeof self=="object"?self:globalThis,eb=(e,t)=>{const n=(i,o)=>(e.set(o,i),i),r=i=>{if(e.has(i))return e.get(i);const[o,l]=t[i];switch(o){case fl:case im:return n(l,i);case Gr:{const a=n([],i);for(const s of l)a.push(r(s));return a}case Oo:{const a=n({},i);for(const[s,u]of l)a[r(s)]=r(u);return a}case xu:return n(new Date(l),i);case bu:{const{source:a,flags:s}=l;return n(new RegExp(a,s),i)}case Su:{const a=n(new Map,i);for(const[s,u]of l)a.set(r(s),r(u));return a}case Cu:{const a=n(new Set,i);for(const s of l)a.add(r(s));return a}case om:{const{name:a,message:s}=l;return n(new Af[a](s),i)}case lm:return n(BigInt(l),i);case"BigInt":return n(Object(BigInt(l)),i);case"ArrayBuffer":return n(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:a}=new Uint8Array(l);return n(new DataView(a),l)}}return n(new Af[o](l),i)};return r},Tf=e=>eb(new Map,e)(0),Bn="",{toString:tb}={},{keys:nb}=Object,Nr=e=>{const t=typeof e;if(t!=="object"||!e)return[fl,t];const n=tb.call(e).slice(8,-1);switch(n){case"Array":return[Gr,Bn];case"Object":return[Oo,Bn];case"Date":return[xu,Bn];case"RegExp":return[bu,Bn];case"Map":return[Su,Bn];case"Set":return[Cu,Bn];case"DataView":return[Gr,n]}return n.includes("Array")?[Gr,n]:n.includes("Error")?[om,n]:[Oo,n]},Qi=([e,t])=>e===fl&&(t==="function"||t==="symbol"),rb=(e,t,n,r)=>{const i=(l,a)=>{const s=r.push(l)-1;return n.set(a,s),s},o=l=>{if(n.has(l))return n.get(l);let[a,s]=Nr(l);switch(a){case fl:{let f=l;switch(s){case"bigint":a=lm,f=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);f=null;break;case"undefined":return i([im],l)}return i([a,f],l)}case Gr:{if(s){let d=l;return s==="DataView"?d=new Uint8Array(l.buffer):s==="ArrayBuffer"&&(d=new Uint8Array(l)),i([s,[...d]],l)}const f=[],c=i([a,f],l);for(const d of l)f.push(o(d));return c}case Oo:{if(s)switch(s){case"BigInt":return i([s,l.toString()],l);case"Boolean":case"Number":case"String":return i([s,l.valueOf()],l)}if(t&&"toJSON"in l)return o(l.toJSON());const f=[],c=i([a,f],l);for(const d of nb(l))(e||!Qi(Nr(l[d])))&&f.push([o(d),o(l[d])]);return c}case xu:return i([a,l.toISOString()],l);case bu:{const{source:f,flags:c}=l;return i([a,{source:f,flags:c}],l)}case Su:{const f=[],c=i([a,f],l);for(const[d,h]of l)(e||!(Qi(Nr(d))||Qi(Nr(h))))&&f.push([o(d),o(h)]);return c}case Cu:{const f=[],c=i([a,f],l);for(const d of l)(e||!Qi(Nr(d)))&&f.push(o(d));return c}}const{message:u}=l;return i([a,{name:s,message:u}],l)};return o},Lf=(e,{json:t,lossy:n}={})=>{const r=[];return rb(!(t||n),!!t,new Map,r)(e),r},Bo=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?Tf(Lf(e,t)):structuredClone(e):(e,t)=>Tf(Lf(e,t));function ib(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function ob(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function lb(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||ib,r=e.options.footnoteBackLabel||ob,i=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const f=e.all(u),c=String(u.identifier).toUpperCase(),d=br(c.toLowerCase());let h=0;const g=[],k=e.footnoteCounts.get(c);for(;k!==void 0&&++h<=k;){g.length>0&&g.push({type:"text",value:" "});let m=typeof n=="string"?n:n(s,h);typeof m=="string"&&(m={type:"text",value:m}),g.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+d+(h>1?"-"+h:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,h),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const S=f[f.length-1];if(S&&S.type==="element"&&S.tagName==="p"){const m=S.children[S.children.length-1];m&&m.type==="text"?m.value+=" ":S.children.push({type:"text",value:" "}),S.children.push(...g)}else f.push(...g);const p={type:"element",tagName:"li",properties:{id:t+"fn-"+d},children:e.wrap(f,!0)};e.patch(u,p),a.push(p)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...Bo(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(a,!0)},{type:"text",value:`
`}]}}const dl=function(e){if(e==null)return cb;if(typeof e=="function")return hl(e);if(typeof e=="object")return Array.isArray(e)?ab(e):sb(e);if(typeof e=="string")return ub(e);throw new Error("Expected function, string, or object as test")};function ab(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=dl(e[n]);return hl(r);function r(...i){let o=-1;for(;++o<t.length;)if(t[o].apply(this,i))return!0;return!1}}function sb(e){const t=e;return hl(n);function n(r){const i=r;let o;for(o in e)if(i[o]!==t[o])return!1;return!0}}function ub(e){return hl(t);function t(n){return n&&n.type===e}}function hl(e){return t;function t(n,r,i){return!!(fb(n)&&e.call(this,n,typeof r=="number"?r:void 0,i||void 0))}}function cb(){return!0}function fb(e){return e!==null&&typeof e=="object"&&"type"in e}const am=[],db=!0,cs=!1,hb="skip";function sm(e,t,n,r){let i;typeof t=="function"&&typeof n!="function"?(r=n,n=t):i=t;const o=dl(i),l=r?-1:1;a(e,void 0,[])();function a(s,u,f){const c=s&&typeof s=="object"?s:{};if(typeof c.type=="string"){const h=typeof c.tagName=="string"?c.tagName:typeof c.name=="string"?c.name:void 0;Object.defineProperty(d,"name",{value:"node ("+(s.type+(h?"<"+h+">":""))+")"})}return d;function d(){let h=am,g,k,S;if((!t||o(s,u,f[f.length-1]||void 0))&&(h=pb(n(s,f)),h[0]===cs))return h;if("children"in s&&s.children){const p=s;if(p.children&&h[0]!==hb)for(k=(r?p.children.length:-1)+l,S=f.concat(p);k>-1&&k<p.children.length;){const m=p.children[k];if(g=a(m,k,S)(),g[0]===cs)return g;k=typeof g[1]=="number"?g[1]:k+l}}return h}}}function pb(e){return Array.isArray(e)?e:typeof e=="number"?[db,e]:e==null?am:[e]}function Pu(e,t,n,r){let i,o,l;typeof t=="function"&&typeof n!="function"?(o=void 0,l=t,i=n):(o=t,l=n,i=r),sm(e,o,a,i);function a(s,u){const f=u[u.length-1],c=f?f.children.indexOf(s):void 0;return l(s,c,f)}}const fs={}.hasOwnProperty,mb={};function gb(e,t){const n=t||mb,r=new Map,i=new Map,o=new Map,l={...Z0,...n.handlers},a={all:u,applyData:kb,definitionById:r,footnoteById:i,footnoteCounts:o,footnoteOrder:[],handlers:l,one:s,options:n,patch:yb,wrap:vb};return Pu(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const c=f.type==="definition"?r:i,d=String(f.identifier).toUpperCase();c.has(d)||c.set(d,f)}}),a;function s(f,c){const d=f.type,h=a.handlers[d];if(fs.call(a.handlers,d)&&h)return h(a,f,c);if(a.options.passThrough&&a.options.passThrough.includes(d)){if("children"in f){const{children:k,...S}=f,p=Bo(S);return p.children=a.all(f),p}return Bo(f)}return(a.options.unknownHandler||wb)(a,f,c)}function u(f){const c=[];if("children"in f){const d=f.children;let h=-1;for(;++h<d.length;){const g=a.one(d[h],f);if(g){if(h&&d[h-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=If(g.value)),!Array.isArray(g)&&g.type==="element")){const k=g.children[0];k&&k.type==="text"&&(k.value=If(k.value))}Array.isArray(g)?c.push(...g):c.push(g)}}}return c}}function yb(e,t){e.position&&(t.position=ox(e))}function kb(e,t){let n=t;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,o=e.data.hProperties;if(typeof r=="string")if(n.type==="element")n.tagName=r;else{const l="children"in n?n.children:[n];n={type:"element",tagName:r,properties:{},children:l}}n.type==="element"&&o&&Object.assign(n.properties,Bo(o)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function wb(e,t){const n=t.data||{},r="value"in t&&!(fs.call(n,"hProperties")||fs.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function vb(e,t){const n=[];let r=-1;for(t&&n.push({type:"text",value:`
`});++r<e.length;)r&&n.push({type:"text",value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function If(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Rf(e,t){const n=gb(e,t),r=n.one(e,void 0),i=lb(n),o=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&o.children.push({type:"text",value:`
`},i),o}function xb(e,t){return e&&"run"in e?async function(n,r){const i=Rf(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Rf(n,{file:r,...e||t})}}function zf(e){if(e)throw e}var so=Object.prototype.hasOwnProperty,um=Object.prototype.toString,_f=Object.defineProperty,Nf=Object.getOwnPropertyDescriptor,Df=function(t){return typeof Array.isArray=="function"?Array.isArray(t):um.call(t)==="[object Array]"},Ff=function(t){if(!t||um.call(t)!=="[object Object]")return!1;var n=so.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&so.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;var i;for(i in t);return typeof i>"u"||so.call(t,i)},Mf=function(t,n){_f&&n.name==="__proto__"?_f(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},jf=function(t,n){if(n==="__proto__")if(so.call(t,n)){if(Nf)return Nf(t,n).value}else return;return t[n]},bb=function e(){var t,n,r,i,o,l,a=arguments[0],s=1,u=arguments.length,f=!1;for(typeof a=="boolean"&&(f=a,a=arguments[1]||{},s=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});s<u;++s)if(t=arguments[s],t!=null)for(n in t)r=jf(a,n),i=jf(t,n),a!==i&&(f&&i&&(Ff(i)||(o=Df(i)))?(o?(o=!1,l=r&&Df(r)?r:[]):l=r&&Ff(r)?r:{},Mf(a,{name:n,newValue:e(f,l,i)})):typeof i<"u"&&Mf(a,{name:n,newValue:i}));return a};const Kl=ms(bb);function ds(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Sb(){const e=[],t={run:n,use:r};return t;function n(...i){let o=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);a(null,...i);function a(s,...u){const f=e[++o];let c=-1;if(s){l(s);return}for(;++c<i.length;)(u[c]===null||u[c]===void 0)&&(u[c]=i[c]);i=u,f?Cb(f,a)(...u):l(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function Cb(e,t){let n;return r;function r(...l){const a=e.length>l.length;let s;a&&l.push(i);try{s=e.apply(this,l)}catch(u){const f=u;if(a&&n)throw f;return i(f)}a||(s&&s.then&&typeof s.then=="function"?s.then(o,i):s instanceof Error?i(s):o(s))}function i(l,...a){n||(n=!0,t(l,...a))}function o(l){i(null,l)}}const bt={basename:Pb,dirname:Eb,extname:Ab,join:Tb,sep:"/"};function Pb(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');Ei(e);let n=0,r=-1,i=e.length,o;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else r<0&&(o=!0,r=i+1);return r<0?"":e.slice(n,r)}if(t===e)return"";let l=-1,a=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(o){n=i+1;break}}else l<0&&(o=!0,l=i+1),a>-1&&(e.codePointAt(i)===t.codePointAt(a--)?a<0&&(r=i):(a=-1,r=l));return n===r?r=l:r<0&&(r=e.length),e.slice(n,r)}function Eb(e){if(Ei(e),e.length===0)return".";let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||(r=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function Ab(e){Ei(e);let t=e.length,n=-1,r=0,i=-1,o=0,l;for(;t--;){const a=e.codePointAt(t);if(a===47){if(l){r=t+1;break}continue}n<0&&(l=!0,n=t+1),a===46?i<0?i=t:o!==1&&(o=1):i>-1&&(o=-1)}return i<0||n<0||o===0||o===1&&i===n-1&&i===r+1?"":e.slice(i,n)}function Tb(...e){let t=-1,n;for(;++t<e.length;)Ei(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":Lb(n)}function Lb(e){Ei(e);const t=e.codePointAt(0)===47;let n=Ib(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Ib(e,t){let n="",r=0,i=-1,o=0,l=-1,a,s;for(;++l<=e.length;){if(l<e.length)a=e.codePointAt(l);else{if(a===47)break;a=47}if(a===47){if(!(i===l-1||o===1))if(i!==l-1&&o===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",r=0):(n=n.slice(0,s),r=n.length-1-n.lastIndexOf("/")),i=l,o=0;continue}}else if(n.length>0){n="",r=0,i=l,o=0;continue}}t&&(n=n.length>0?n+"/..":"..",r=2)}else n.length>0?n+="/"+e.slice(i+1,l):n=e.slice(i+1,l),r=l-i-1;i=l,o=0}else a===46&&o>-1?o++:o=-1}return n}function Ei(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Rb={cwd:zb};function zb(){return"/"}function hs(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function _b(e){if(typeof e=="string")e=new URL(e);else if(!hs(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Nb(e)}function Nb(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const r=t.codePointAt(n+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const ql=["history","path","basename","stem","extname","dirname"];class cm{constructor(t){let n;t?hs(t)?n={path:t}:typeof t=="string"||Db(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":Rb.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<ql.length;){const o=ql[r];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let i;for(i in n)ql.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?bt.basename(this.path):void 0}set basename(t){Gl(t,"basename"),Yl(t,"basename"),this.path=bt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?bt.dirname(this.path):void 0}set dirname(t){Of(this.basename,"dirname"),this.path=bt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?bt.extname(this.path):void 0}set extname(t){if(Yl(t,"extname"),Of(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=bt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){hs(t)&&(t=_b(t)),Gl(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?bt.basename(this.path,this.extname):void 0}set stem(t){Gl(t,"stem"),Yl(t,"stem"),this.path=bt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,r){const i=this.message(t,n,r);throw i.fatal=!0,i}info(t,n,r){const i=this.message(t,n,r);return i.fatal=void 0,i}message(t,n,r){const i=new ze(t,n,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function Yl(e,t){if(e&&e.includes(bt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+bt.sep+"`")}function Gl(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Of(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Db(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Fb=function(e){const r=this.constructor.prototype,i=r[e],o=function(){return i.apply(o,arguments)};return Object.setPrototypeOf(o,r),o},Mb={}.hasOwnProperty;class Eu extends Fb{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Sb()}copy(){const t=new Eu;let n=-1;for(;++n<this.attachers.length;){const r=this.attachers[n];t.use(...r)}return t.data(Kl(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Zl("data",this.frozen),this.namespace[t]=n,this):Mb.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Zl("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=n.call(t,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=Ki(t),r=this.parser||this.Parser;return Xl("parse",r),r(String(n),n)}process(t,n){const r=this;return this.freeze(),Xl("process",this.parser||this.Parser),Jl("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(o,l){const a=Ki(t),s=r.parse(a);r.run(s,a,function(f,c,d){if(f||!c||!d)return u(f);const h=c,g=r.stringify(h,d);Bb(g)?d.value=g:d.result=g,u(f,d)});function u(f,c){f||!c?l(f):o?o(c):n(void 0,c)}}}processSync(t){let n=!1,r;return this.freeze(),Xl("processSync",this.parser||this.Parser),Jl("processSync",this.compiler||this.Compiler),this.process(t,i),Wf("processSync","process",n),r;function i(o,l){n=!0,zf(o),r=l}}run(t,n,r){Bf(t),this.freeze();const i=this.transformers;return!r&&typeof n=="function"&&(r=n,n=void 0),r?o(void 0,r):new Promise(o);function o(l,a){const s=Ki(n);i.run(t,s,u);function u(f,c,d){const h=c||t;f?a(f):l?l(h):r(void 0,h,d)}}}runSync(t,n){let r=!1,i;return this.run(t,n,o),Wf("runSync","run",r),i;function o(l,a){zf(l),i=a,r=!0}}stringify(t,n){this.freeze();const r=Ki(n),i=this.compiler||this.Compiler;return Jl("stringify",i),Bf(t),i(t,r)}use(t,...n){const r=this.attachers,i=this.namespace;if(Zl("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?a(t):l(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function o(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[f,...c]=u;s(f,c)}else l(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function l(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(i.settings=Kl(!0,i.settings,u.settings))}function a(u){let f=-1;if(u!=null)if(Array.isArray(u))for(;++f<u.length;){const c=u[f];o(c)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,f){let c=-1,d=-1;for(;++c<r.length;)if(r[c][0]===u){d=c;break}if(d===-1)r.push([u,...f]);else if(f.length>0){let[h,...g]=f;const k=r[d][1];ds(k)&&ds(h)&&(h=Kl(!0,k,h)),r[d]=[u,h,...g]}}}}const jb=new Eu().freeze();function Xl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Jl(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Zl(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Bf(e){if(!ds(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Wf(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function Ki(e){return Ob(e)?e:new cm(e)}function Ob(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Bb(e){return typeof e=="string"||Wb(e)}function Wb(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Ub="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Uf=[],Hf={allowDangerousHtml:!0},Hb=/^(https?|ircs?|mailto|xmpp)$/i,$b=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Vb(e){const t=Qb(e),n=Kb(e);return qb(t.runSync(t.parse(n),n),e)}function Qb(e){const t=e.rehypePlugins||Uf,n=e.remarkPlugins||Uf,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...Hf}:Hf;return jb().use(A0).use(n).use(xb,r).use(t)}function Kb(e){const t=e.children||"",n=new cm;return typeof t=="string"&&(n.value=t),n}function qb(e,t){const n=t.allowedElements,r=t.allowElement,i=t.components,o=t.disallowedElements,l=t.skipHtml,a=t.unwrapDisallowed,s=t.urlTransform||Yb;for(const f of $b)Object.hasOwn(t,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+Ub+f.id,void 0);return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Pu(e,u),cx(e,{Fragment:v.Fragment,components:i,ignoreInvalidStyle:!0,jsx:v.jsx,jsxs:v.jsxs,passKeys:!0,passNode:!0});function u(f,c,d){if(f.type==="raw"&&d&&typeof c=="number")return l?d.children.splice(c,1):d.children[c]={type:"text",value:f.value},c;if(f.type==="element"){let h;for(h in $l)if(Object.hasOwn($l,h)&&Object.hasOwn(f.properties,h)){const g=f.properties[h],k=$l[h];(k===null||k.includes(f.tagName))&&(f.properties[h]=s(String(g||""),h,f))}}if(f.type==="element"){let h=n?!n.includes(f.tagName):o?o.includes(f.tagName):!1;if(!h&&r&&typeof c=="number"&&(h=!r(f,c,d)),h&&d&&typeof c=="number")return a&&f.children?d.children.splice(c,1,...f.children):d.children.splice(c,1),c}}}function Yb(e){const t=e.indexOf(":"),n=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||Hb.test(e.slice(0,t))?e:""}function $f(e,t){const n=String(e);if(typeof t!="string")throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Gb(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Xb(e,t,n){const i=dl((n||{}).ignore||[]),o=Jb(t);let l=-1;for(;++l<o.length;)sm(e,"text",a);function a(u,f){let c=-1,d;for(;++c<f.length;){const h=f[c],g=d?d.children:void 0;if(i(h,g?g.indexOf(h):void 0,d))return;d=h}if(d)return s(u,f)}function s(u,f){const c=f[f.length-1],d=o[l][0],h=o[l][1];let g=0;const S=c.children.indexOf(u);let p=!1,m=[];d.lastIndex=0;let y=d.exec(u.value);for(;y;){const P=y.index,A={index:y.index,input:y.input,stack:[...f,u]};let b=h(...y,A);if(typeof b=="string"&&(b=b.length>0?{type:"text",value:b}:void 0),b===!1?d.lastIndex=P+1:(g!==P&&m.push({type:"text",value:u.value.slice(g,P)}),Array.isArray(b)?m.push(...b):b&&m.push(b),g=P+y[0].length,p=!0),!d.global)break;y=d.exec(u.value)}return p?(g<u.value.length&&m.push({type:"text",value:u.value.slice(g)}),c.children.splice(S,1,...m)):m=[u],S+m.length}}function Jb(e){const t=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const n=!e[0]||Array.isArray(e[0])?e:[e];let r=-1;for(;++r<n.length;){const i=n[r];t.push([Zb(i[0]),eS(i[1])])}return t}function Zb(e){return typeof e=="string"?new RegExp(Gb(e),"g"):e}function eS(e){return typeof e=="function"?e:function(){return e}}const ea="phrasing",ta=["autolink","link","image","label"];function tS(){return{transforms:[sS],enter:{literalAutolink:rS,literalAutolinkEmail:na,literalAutolinkHttp:na,literalAutolinkWww:na},exit:{literalAutolink:aS,literalAutolinkEmail:lS,literalAutolinkHttp:iS,literalAutolinkWww:oS}}}function nS(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:ea,notInConstruct:ta},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:ea,notInConstruct:ta},{character:":",before:"[ps]",after:"\\/",inConstruct:ea,notInConstruct:ta}]}}function rS(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function na(e){this.config.enter.autolinkProtocol.call(this,e)}function iS(e){this.config.exit.autolinkProtocol.call(this,e)}function oS(e){this.config.exit.data.call(this,e);const t=this.stack[this.stack.length-1];t.type,t.url="http://"+this.sliceSerialize(e)}function lS(e){this.config.exit.autolinkEmail.call(this,e)}function aS(e){this.exit(e)}function sS(e){Xb(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,uS],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),cS]],{ignore:["link","linkReference"]})}function uS(e,t,n,r,i){let o="";if(!fm(i)||(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!fS(n)))return!1;const l=dS(n+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function cS(e,t,n,r){return!fm(r,!0)||/[-\d_]$/.test(n)?!1:{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function fS(e){const t=e.split(".");return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function dS(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=$f(e,"(");let o=$f(e,")");for(;r!==-1&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}function fm(e,t){const n=e.input.charCodeAt(e.index-1);return(e.index===0||Rn(n)||ul(n))&&(!t||n!==47)}dm.peek=xS;function hS(){this.buffer()}function pS(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function mS(){this.buffer()}function gS(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function yS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function kS(e){this.exit(e)}function wS(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=gt(this.sliceSerialize(e)).toLowerCase(),n.label=t}function vS(e){this.exit(e)}function xS(){return"["}function dm(e,t,n,r){const i=n.createTracker(r);let o=i.move("[^");const l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(n.safe(n.associationId(e),{after:"]",before:o})),a(),l(),o+=i.move("]"),o}function bS(){return{enter:{gfmFootnoteCallString:hS,gfmFootnoteCall:pS,gfmFootnoteDefinitionLabelString:mS,gfmFootnoteDefinition:gS},exit:{gfmFootnoteCallString:yS,gfmFootnoteCall:kS,gfmFootnoteDefinitionLabelString:wS,gfmFootnoteDefinition:vS}}}function SS(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:dm},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function n(r,i,o,l){const a=o.createTracker(l);let s=a.move("[^");const u=o.enter("footnoteDefinition"),f=o.enter("label");return s+=a.move(o.safe(o.associationId(r),{before:s,after:"]"})),f(),s+=a.move("]:"),r.children&&r.children.length>0&&(a.shift(4),s+=a.move((t?`
`:" ")+o.indentLines(o.containerFlow(r,a.current()),t?hm:CS))),u(),s}}function CS(e,t,n){return t===0?e:hm(e,t,n)}function hm(e,t,n){return(n?"":"    ")+e}const PS=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];pm.peek=IS;function ES(){return{canContainEols:["delete"],enter:{strikethrough:TS},exit:{strikethrough:LS}}}function AS(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:PS}],handlers:{delete:pm}}}function TS(e){this.enter({type:"delete",children:[]},e)}function LS(e){this.exit(e)}function pm(e,t,n,r){const i=n.createTracker(r),o=n.enter("strikethrough");let l=i.move("~~");return l+=n.containerPhrasing(e,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function IS(){return"~"}function RS(e){return e.length}function zS(e,t){const n=t||{},r=(n.align||[]).concat(),i=n.stringLength||RS,o=[],l=[],a=[],s=[];let u=0,f=-1;for(;++f<e.length;){const k=[],S=[];let p=-1;for(e[f].length>u&&(u=e[f].length);++p<e[f].length;){const m=_S(e[f][p]);if(n.alignDelimiters!==!1){const y=i(m);S[p]=y,(s[p]===void 0||y>s[p])&&(s[p]=y)}k.push(m)}l[f]=k,a[f]=S}let c=-1;if(typeof r=="object"&&"length"in r)for(;++c<u;)o[c]=Vf(r[c]);else{const k=Vf(r);for(;++c<u;)o[c]=k}c=-1;const d=[],h=[];for(;++c<u;){const k=o[c];let S="",p="";k===99?(S=":",p=":"):k===108?S=":":k===114&&(p=":");let m=n.alignDelimiters===!1?1:Math.max(1,s[c]-S.length-p.length);const y=S+"-".repeat(m)+p;n.alignDelimiters!==!1&&(m=S.length+m+p.length,m>s[c]&&(s[c]=m),h[c]=m),d[c]=y}l.splice(1,0,d),a.splice(1,0,h),f=-1;const g=[];for(;++f<l.length;){const k=l[f],S=a[f];c=-1;const p=[];for(;++c<u;){const m=k[c]||"";let y="",P="";if(n.alignDelimiters!==!1){const A=s[c]-(S[c]||0),b=o[c];b===114?y=" ".repeat(A):b===99?A%2?(y=" ".repeat(A/2+.5),P=" ".repeat(A/2-.5)):(y=" ".repeat(A/2),P=y):P=" ".repeat(A)}n.delimiterStart!==!1&&!c&&p.push("|"),n.padding!==!1&&!(n.alignDelimiters===!1&&m==="")&&(n.delimiterStart!==!1||c)&&p.push(" "),n.alignDelimiters!==!1&&p.push(y),p.push(m),n.alignDelimiters!==!1&&p.push(P),n.padding!==!1&&p.push(" "),(n.delimiterEnd!==!1||c!==u-1)&&p.push("|")}g.push(n.delimiterEnd===!1?p.join("").replace(/ +$/,""):p.join(""))}return g.join(`
`)}function _S(e){return e==null?"":String(e)}function Vf(e){const t=typeof e=="string"?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function NS(e,t,n,r){const i=n.enter("blockquote"),o=n.createTracker(r);o.move("> "),o.shift(2);const l=n.indentLines(n.containerFlow(e,o.current()),DS);return i(),l}function DS(e,t,n){return">"+(n?"":" ")+e}function FS(e,t){return Qf(e,t.inConstruct,!0)&&!Qf(e,t.notInConstruct,!1)}function Qf(e,t,n){if(typeof t=="string"&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function Kf(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&FS(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function MS(e,t){const n=String(e);let r=n.indexOf(t),i=r,o=0,l=0;if(typeof t!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===i?++o>l&&(l=o):o=1,i=r+t.length,r=n.indexOf(t,i);return l}function jS(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function OS(e){const t=e.options.fence||"`";if(t!=="`"&&t!=="~")throw new Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function BS(e,t,n,r){const i=OS(n),o=e.value||"",l=i==="`"?"GraveAccent":"Tilde";if(jS(e,n)){const c=n.enter("codeIndented"),d=n.indentLines(o,WS);return c(),d}const a=n.createTracker(r),s=i.repeat(Math.max(MS(o,i)+1,3)),u=n.enter("codeFenced");let f=a.move(s);if(e.lang){const c=n.enter(`codeFencedLang${l}`);f+=a.move(n.safe(e.lang,{before:f,after:" ",encode:["`"],...a.current()})),c()}if(e.lang&&e.meta){const c=n.enter(`codeFencedMeta${l}`);f+=a.move(" "),f+=a.move(n.safe(e.meta,{before:f,after:`
`,encode:["`"],...a.current()})),c()}return f+=a.move(`
`),o&&(f+=a.move(o+`
`)),f+=a.move(s),u(),f}function WS(e,t,n){return(n?"":"    ")+e}function Au(e){const t=e.options.quote||'"';if(t!=='"'&&t!=="'")throw new Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function US(e,t,n,r){const i=Au(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("definition");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("[");return u+=s.move(n.safe(n.associationId(e),{before:u,after:"]",...s.current()})),u+=s.move("]: "),a(),!e.url||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":`
`,...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),l(),u}function HS(e){const t=e.options.emphasis||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function yi(e){return"&#x"+e.toString(16).toUpperCase()+";"}function Wo(e,t,n){const r=gr(e),i=gr(t);return r===void 0?i===void 0?n==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}mm.peek=$S;function mm(e,t,n,r){const i=HS(n),o=n.enter("emphasis"),l=n.createTracker(r),a=l.move(i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Wo(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=yi(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Wo(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+yi(c));const h=l.move(i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+h}function $S(e,t,n){return n.options.emphasis||"*"}function VS(e,t){let n=!1;return Pu(e,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return n=!0,cs}),!!((!e.depth||e.depth<3)&&ku(e)&&(t.options.setext||n))}function QS(e,t,n,r){const i=Math.max(Math.min(6,e.depth||1),1),o=n.createTracker(r);if(VS(e,n)){const f=n.enter("headingSetext"),c=n.enter("phrasing"),d=n.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return c(),f(),d+`
`+(i===1?"=":"-").repeat(d.length-(Math.max(d.lastIndexOf("\r"),d.lastIndexOf(`
`))+1))}const l="#".repeat(i),a=n.enter("headingAtx"),s=n.enter("phrasing");o.move(l+" ");let u=n.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(u)&&(u=yi(u.charCodeAt(0))+u.slice(1)),u=u?l+" "+u:l,n.options.closeAtx&&(u+=" "+l),s(),a(),u}gm.peek=KS;function gm(e){return e.value||""}function KS(){return"<"}ym.peek=qS;function ym(e,t,n,r){const i=Au(n),o=i==='"'?"Quote":"Apostrophe",l=n.enter("image");let a=n.enter("label");const s=n.createTracker(r);let u=s.move("![");return u+=s.move(n.safe(e.alt,{before:u,after:"]",...s.current()})),u+=s.move("]("),a(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(a=n.enter("destinationLiteral"),u+=s.move("<"),u+=s.move(n.safe(e.url,{before:u,after:">",...s.current()})),u+=s.move(">")):(a=n.enter("destinationRaw"),u+=s.move(n.safe(e.url,{before:u,after:e.title?" ":")",...s.current()}))),a(),e.title&&(a=n.enter(`title${o}`),u+=s.move(" "+i),u+=s.move(n.safe(e.title,{before:u,after:i,...s.current()})),u+=s.move(i),a()),u+=s.move(")"),l(),u}function qS(){return"!"}km.peek=YS;function km(e,t,n,r){const i=e.referenceType,o=n.enter("imageReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("![");const u=n.safe(e.alt,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function YS(){return"!"}wm.peek=GS;function wm(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const l=n.unsafe[o],a=n.compilePattern(l);let s;if(l.atBreak)for(;s=a.exec(r);){let u=s.index;r.charCodeAt(u)===10&&r.charCodeAt(u-1)===13&&u--,r=r.slice(0,u)+" "+r.slice(s.index+1)}}return i+r+i}function GS(){return"`"}function vm(e,t){const n=ku(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(n===e.url||"mailto:"+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}xm.peek=XS;function xm(e,t,n,r){const i=Au(n),o=i==='"'?"Quote":"Apostrophe",l=n.createTracker(r);let a,s;if(vm(e,n)){const f=n.stack;n.stack=[],a=n.enter("autolink");let c=l.move("<");return c+=l.move(n.containerPhrasing(e,{before:c,after:">",...l.current()})),c+=l.move(">"),a(),n.stack=f,c}a=n.enter("link"),s=n.enter("label");let u=l.move("[");return u+=l.move(n.containerPhrasing(e,{before:u,after:"](",...l.current()})),u+=l.move("]("),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter("destinationLiteral"),u+=l.move("<"),u+=l.move(n.safe(e.url,{before:u,after:">",...l.current()})),u+=l.move(">")):(s=n.enter("destinationRaw"),u+=l.move(n.safe(e.url,{before:u,after:e.title?" ":")",...l.current()}))),s(),e.title&&(s=n.enter(`title${o}`),u+=l.move(" "+i),u+=l.move(n.safe(e.title,{before:u,after:i,...l.current()})),u+=l.move(i),s()),u+=l.move(")"),a(),u}function XS(e,t,n){return vm(e,n)?"<":"["}bm.peek=JS;function bm(e,t,n,r){const i=e.referenceType,o=n.enter("linkReference");let l=n.enter("label");const a=n.createTracker(r);let s=a.move("[");const u=n.containerPhrasing(e,{before:s,after:"]",...a.current()});s+=a.move(u+"]["),l();const f=n.stack;n.stack=[],l=n.enter("reference");const c=n.safe(n.associationId(e),{before:s,after:"]",...a.current()});return l(),n.stack=f,o(),i==="full"||!u||u!==c?s+=a.move(c+"]"):i==="shortcut"?s=s.slice(0,-1):s+=a.move("]"),s}function JS(){return"["}function Tu(e){const t=e.options.bullet||"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function ZS(e){const t=Tu(e),n=e.options.bulletOther;if(!n)return t==="*"?"-":"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw new Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function eC(e){const t=e.options.bulletOrdered||".";if(t!=="."&&t!==")")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Sm(e){const t=e.options.rule||"*";if(t!=="*"&&t!=="-"&&t!=="_")throw new Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function tC(e,t,n,r){const i=n.enter("list"),o=n.bulletCurrent;let l=e.ordered?eC(n):Tu(n);const a=e.ordered?l==="."?")":".":ZS(n);let s=t&&n.bulletLastUsed?l===n.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((l==="*"||l==="-")&&f&&(!f.children||!f.children[0])&&n.stack[n.stack.length-1]==="list"&&n.stack[n.stack.length-2]==="listItem"&&n.stack[n.stack.length-3]==="list"&&n.stack[n.stack.length-4]==="listItem"&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(s=!0),Sm(n)===l&&f){let c=-1;for(;++c<e.children.length;){const d=e.children[c];if(d&&d.type==="listItem"&&d.children&&d.children[0]&&d.children[0].type==="thematicBreak"){s=!0;break}}}}s&&(l=a),n.bulletCurrent=l;const u=n.containerFlow(e,r);return n.bulletLastUsed=l,n.bulletCurrent=o,i(),u}function nC(e){const t=e.options.listItemIndent||"one";if(t!=="tab"&&t!=="one"&&t!=="mixed")throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function rC(e,t,n,r){const i=nC(n);let o=n.bulletCurrent||Tu(n);t&&t.type==="list"&&t.ordered&&(o=(typeof t.start=="number"&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+o);let l=o.length+1;(i==="tab"||i==="mixed"&&(t&&t.type==="list"&&t.spread||e.spread))&&(l=Math.ceil(l/4)*4);const a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const s=n.enter("listItem"),u=n.indentLines(n.containerFlow(e,a.current()),f);return s(),u;function f(c,d,h){return d?(h?"":" ".repeat(l))+c:(h?o:o+" ".repeat(l-o.length))+c}}function iC(e,t,n,r){const i=n.enter("paragraph"),o=n.enter("phrasing"),l=n.containerPhrasing(e,r);return o(),i(),l}const oC=dl(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function lC(e,t,n,r){return(e.children.some(function(l){return oC(l)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function aC(e){const t=e.options.strong||"*";if(t!=="*"&&t!=="_")throw new Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}Cm.peek=sC;function Cm(e,t,n,r){const i=aC(n),o=n.enter("strong"),l=n.createTracker(r),a=l.move(i+i);let s=l.move(n.containerPhrasing(e,{after:i,before:a,...l.current()}));const u=s.charCodeAt(0),f=Wo(r.before.charCodeAt(r.before.length-1),u,i);f.inside&&(s=yi(u)+s.slice(1));const c=s.charCodeAt(s.length-1),d=Wo(r.after.charCodeAt(0),c,i);d.inside&&(s=s.slice(0,-1)+yi(c));const h=l.move(i+i);return o(),n.attentionEncodeSurroundingInfo={after:d.outside,before:f.outside},a+s+h}function sC(e,t,n){return n.options.strong||"*"}function uC(e,t,n,r){return n.safe(e.value,r)}function cC(e){const t=e.options.ruleRepetition||3;if(t<3)throw new Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function fC(e,t,n){const r=(Sm(n)+(n.options.ruleSpaces?" ":"")).repeat(cC(n));return n.options.ruleSpaces?r.slice(0,-1):r}const Pm={blockquote:NS,break:Kf,code:BS,definition:US,emphasis:mm,hardBreak:Kf,heading:QS,html:gm,image:ym,imageReference:km,inlineCode:wm,link:xm,linkReference:bm,list:tC,listItem:rC,paragraph:iC,root:lC,strong:Cm,text:uC,thematicBreak:fC};function dC(){return{enter:{table:hC,tableData:qf,tableHeader:qf,tableRow:mC},exit:{codeText:gC,table:pC,tableData:ra,tableHeader:ra,tableRow:ra}}}function hC(e){const t=e._align;this.enter({type:"table",align:t.map(function(n){return n==="none"?null:n}),children:[]},e),this.data.inTable=!0}function pC(e){this.exit(e),this.data.inTable=void 0}function mC(e){this.enter({type:"tableRow",children:[]},e)}function ra(e){this.exit(e)}function qf(e){this.enter({type:"tableCell",children:[]},e)}function gC(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,yC));const n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function yC(e,t){return t==="|"?t:e}function kC(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:d,table:l,tableCell:s,tableRow:a}};function l(h,g,k,S){return u(f(h,k,S),h.align)}function a(h,g,k,S){const p=c(h,k,S),m=u([p]);return m.slice(0,m.indexOf(`
`))}function s(h,g,k,S){const p=k.enter("tableCell"),m=k.enter("phrasing"),y=k.containerPhrasing(h,{...S,before:o,after:o});return m(),p(),y}function u(h,g){return zS(h,{align:g,alignDelimiters:r,padding:n,stringLength:i})}function f(h,g,k){const S=h.children;let p=-1;const m=[],y=g.enter("table");for(;++p<S.length;)m[p]=c(S[p],g,k);return y(),m}function c(h,g,k){const S=h.children;let p=-1;const m=[],y=g.enter("tableRow");for(;++p<S.length;)m[p]=s(S[p],h,g,k);return y(),m}function d(h,g,k){let S=Pm.inlineCode(h,g,k);return k.stack.includes("tableCell")&&(S=S.replace(/\|/g,"\\$&")),S}}function wC(){return{exit:{taskListCheckValueChecked:Yf,taskListCheckValueUnchecked:Yf,paragraph:xC}}}function vC(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:bC}}}function Yf(e){const t=this.stack[this.stack.length-2];t.type,t.checked=e.type==="taskListCheckValueChecked"}function xC(e){const t=this.stack[this.stack.length-2];if(t&&t.type==="listItem"&&typeof t.checked=="boolean"){const n=this.stack[this.stack.length-1];n.type;const r=n.children[0];if(r&&r.type==="text"){const i=t.children;let o=-1,l;for(;++o<i.length;){const a=i[o];if(a.type==="paragraph"){l=a;break}}l===n&&(r.value=r.value.slice(1),r.value.length===0?n.children.shift():n.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,n.position.start=Object.assign({},r.position.start)))}}this.exit(e)}function bC(e,t,n,r){const i=e.children[0],o=typeof e.checked=="boolean"&&i&&i.type==="paragraph",l="["+(e.checked?"x":" ")+"] ",a=n.createTracker(r);o&&a.move(l);let s=Pm.listItem(e,t,n,{...r,...a.current()});return o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,u)),s;function u(f){return f+l}}function SC(){return[tS(),bS(),ES(),dC(),wC()]}function CC(e){return{extensions:[nS(),SS(e),AS(),kC(e),vC()]}}const PC={tokenize:RC,partial:!0},Em={tokenize:zC,partial:!0},Am={tokenize:_C,partial:!0},Tm={tokenize:NC,partial:!0},EC={tokenize:DC,partial:!0},Lm={name:"wwwAutolink",tokenize:LC,previous:Rm},Im={name:"protocolAutolink",tokenize:IC,previous:zm},Wt={name:"emailAutolink",tokenize:TC,previous:_m},Et={};function AC(){return{text:Et}}let yn=48;for(;yn<123;)Et[yn]=Wt,yn++,yn===58?yn=65:yn===91&&(yn=97);Et[43]=Wt;Et[45]=Wt;Et[46]=Wt;Et[95]=Wt;Et[72]=[Wt,Im];Et[104]=[Wt,Im];Et[87]=[Wt,Lm];Et[119]=[Wt,Lm];function TC(e,t,n){const r=this;let i,o;return l;function l(c){return!ps(c)||!_m.call(r,r.previous)||Lu(r.events)?n(c):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(c))}function a(c){return ps(c)?(e.consume(c),a):c===64?(e.consume(c),s):n(c)}function s(c){return c===46?e.check(EC,f,u)(c):c===45||c===95||Ie(c)?(o=!0,e.consume(c),s):f(c)}function u(c){return e.consume(c),i=!0,s}function f(c){return o&&i&&Ne(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(c)):n(c)}}function LC(e,t,n){const r=this;return i;function i(l){return l!==87&&l!==119||!Rm.call(r,r.previous)||Lu(r.events)?n(l):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(PC,e.attempt(Em,e.attempt(Am,o),n),n)(l))}function o(l){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(l)}}function IC(e,t,n){const r=this;let i="",o=!1;return l;function l(c){return(c===72||c===104)&&zm.call(r,r.previous)&&!Lu(r.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),i+=String.fromCodePoint(c),e.consume(c),a):n(c)}function a(c){if(Ne(c)&&i.length<5)return i+=String.fromCodePoint(c),e.consume(c),a;if(c===58){const d=i.toLowerCase();if(d==="http"||d==="https")return e.consume(c),s}return n(c)}function s(c){return c===47?(e.consume(c),o?u:(o=!0,s)):n(c)}function u(c){return c===null||jo(c)||ee(c)||Rn(c)||ul(c)?n(c):e.attempt(Em,e.attempt(Am,f),n)(c)}function f(c){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(c)}}function RC(e,t,n){let r=0;return i;function i(l){return(l===87||l===119)&&r<3?(r++,e.consume(l),i):l===46&&r===3?(e.consume(l),o):n(l)}function o(l){return l===null?n(l):t(l)}}function zC(e,t,n){let r,i,o;return l;function l(u){return u===46||u===95?e.check(Tm,s,a)(u):u===null||ee(u)||Rn(u)||u!==45&&ul(u)?s(u):(o=!0,e.consume(u),l)}function a(u){return u===95?r=!0:(i=r,r=void 0),e.consume(u),l}function s(u){return i||r||!o?n(u):t(u)}}function _C(e,t){let n=0,r=0;return i;function i(l){return l===40?(n++,e.consume(l),i):l===41&&r<n?o(l):l===33||l===34||l===38||l===39||l===41||l===42||l===44||l===46||l===58||l===59||l===60||l===63||l===93||l===95||l===126?e.check(Tm,t,o)(l):l===null||ee(l)||Rn(l)?t(l):(e.consume(l),i)}function o(l){return l===41&&r++,e.consume(l),i}}function NC(e,t,n){return r;function r(a){return a===33||a===34||a===39||a===41||a===42||a===44||a===46||a===58||a===59||a===63||a===95||a===126?(e.consume(a),r):a===38?(e.consume(a),o):a===93?(e.consume(a),i):a===60||a===null||ee(a)||Rn(a)?t(a):n(a)}function i(a){return a===null||a===40||a===91||ee(a)||Rn(a)?t(a):r(a)}function o(a){return Ne(a)?l(a):n(a)}function l(a){return a===59?(e.consume(a),r):Ne(a)?(e.consume(a),l):n(a)}}function DC(e,t,n){return r;function r(o){return e.consume(o),i}function i(o){return Ie(o)?n(o):t(o)}}function Rm(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||ee(e)}function zm(e){return!Ne(e)}function _m(e){return!(e===47||ps(e))}function ps(e){return e===43||e===45||e===46||e===95||Ie(e)}function Lu(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}const FC={tokenize:$C,partial:!0};function MC(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:WC,continuation:{tokenize:UC},exit:HC}},text:{91:{name:"gfmFootnoteCall",tokenize:BC},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:jC,resolveTo:OC}}}}function jC(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const s=r.events[i][1];if(s.type==="labelImage"){l=s;break}if(s.type==="gfmFootnoteCall"||s.type==="labelLink"||s.type==="label"||s.type==="image"||s.type==="link")break}return a;function a(s){if(!l||!l._balanced)return n(s);const u=gt(r.sliceSerialize({start:l.end,end:r.now()}));return u.codePointAt(0)!==94||!o.includes(u.slice(1))?n(s):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),t(s))}}function OC(e,t){let n=e.length;for(;n--;)if(e[n][1].type==="labelImage"&&e[n][0]==="enter"){e[n][1];break}e[n+1][1].type="data",e[n+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:"gfmFootnoteCallMarker",start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},l={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},a=[e[n+1],e[n+2],["enter",r,t],e[n+3],e[n+4],["enter",i,t],["exit",i,t],["enter",o,t],["enter",l,t],["exit",l,t],["exit",o,t],e[e.length-2],e[e.length-1],["exit",r,t]];return e.splice(n,e.length-n+1,...a),e}function BC(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o=0,l;return a;function a(c){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),s}function s(c){return c!==94?n(c):(e.enter("gfmFootnoteCallMarker"),e.consume(c),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",u)}function u(c){if(o>999||c===93&&!l||c===null||c===91||ee(c))return n(c);if(c===93){e.exit("chunkString");const d=e.exit("gfmFootnoteCallString");return i.includes(gt(r.sliceSerialize(d)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(c),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(c)}return ee(c)||(l=!0),o++,e.consume(c),c===92?f:u}function f(c){return c===91||c===92||c===93?(e.consume(c),o++,u):u(c)}}function WC(e,t,n){const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let o,l=0,a;return s;function s(g){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),u}function u(g){return g===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):n(g)}function f(g){if(l>999||g===93&&!a||g===null||g===91||ee(g))return n(g);if(g===93){e.exit("chunkString");const k=e.exit("gfmFootnoteDefinitionLabelString");return o=gt(r.sliceSerialize(k)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(g),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),d}return ee(g)||(a=!0),l++,e.consume(g),g===92?c:f}function c(g){return g===91||g===92||g===93?(e.consume(g),l++,f):f(g)}function d(g){return g===58?(e.enter("definitionMarker"),e.consume(g),e.exit("definitionMarker"),i.includes(o)||i.push(o),K(e,h,"gfmFootnoteDefinitionWhitespace")):n(g)}function h(g){return t(g)}}function UC(e,t,n){return e.check(Pi,t,e.attempt(FC,t,n))}function HC(e){e.exit("gfmFootnoteDefinition")}function $C(e,t,n){const r=this;return K(e,i,"gfmFootnoteDefinitionIndent",5);function i(o){const l=r.events[r.events.length-1];return l&&l[1].type==="gfmFootnoteDefinitionIndent"&&l[2].sliceSerialize(l[1],!0).length===4?t(o):n(o)}}function VC(e){let n=(e||{}).singleTilde;const r={name:"strikethrough",tokenize:o,resolveAll:i};return n==null&&(n=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function i(l,a){let s=-1;for(;++s<l.length;)if(l[s][0]==="enter"&&l[s][1].type==="strikethroughSequenceTemporary"&&l[s][1]._close){let u=s;for(;u--;)if(l[u][0]==="exit"&&l[u][1].type==="strikethroughSequenceTemporary"&&l[u][1]._open&&l[s][1].end.offset-l[s][1].start.offset===l[u][1].end.offset-l[u][1].start.offset){l[s][1].type="strikethroughSequence",l[u][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},l[u][1].start),end:Object.assign({},l[s][1].end)},c={type:"strikethroughText",start:Object.assign({},l[u][1].end),end:Object.assign({},l[s][1].start)},d=[["enter",f,a],["enter",l[u][1],a],["exit",l[u][1],a],["enter",c,a]],h=a.parser.constructs.insideSpan.null;h&&Xe(d,d.length,0,cl(h,l.slice(u+1,s),a)),Xe(d,d.length,0,[["exit",c,a],["enter",l[s][1],a],["exit",l[s][1],a],["exit",f,a]]),Xe(l,u-1,s-u+3,d),s=u+d.length-2;break}}for(s=-1;++s<l.length;)l[s][1].type==="strikethroughSequenceTemporary"&&(l[s][1].type="data");return l}function o(l,a,s){const u=this.previous,f=this.events;let c=0;return d;function d(g){return u===126&&f[f.length-1][1].type!=="characterEscape"?s(g):(l.enter("strikethroughSequenceTemporary"),h(g))}function h(g){const k=gr(u);if(g===126)return c>1?s(g):(l.consume(g),c++,h);if(c<2&&!n)return s(g);const S=l.exit("strikethroughSequenceTemporary"),p=gr(g);return S._open=!p||p===2&&!!k,S._close=!k||k===2&&!!p,a(g)}}}class QC{constructor(){this.map=[]}add(t,n,r){KC(this,t,n,r)}consume(t){if(this.map.sort(function(o,l){return o[0]-l[0]}),this.map.length===0)return;let n=this.map.length;const r=[];for(;n>0;)n-=1,r.push(t.slice(this.map[n][0]+this.map[n][1]),this.map[n][2]),t.length=this.map[n][0];r.push(t.slice()),t.length=0;let i=r.pop();for(;i;){for(const o of i)t.push(o);i=r.pop()}this.map.length=0}}function KC(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function qC(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if(i[0]==="enter")i[1].type==="tableContent"&&r.push(e[t+1][1].type==="tableDelimiterMarker"?"left":"none");else if(i[1].type==="tableContent"){if(e[t-1][1].type==="tableDelimiterMarker"){const o=r.length-1;r[o]=r[o]==="left"?"center":"right"}}else if(i[1].type==="tableDelimiterRow")break}else i[0]==="enter"&&i[1].type==="tableDelimiterRow"&&(n=!0);t+=1}return r}function YC(){return{flow:{null:{name:"table",tokenize:GC,resolveAll:XC}}}}function GC(e,t,n){const r=this;let i=0,o=0,l;return a;function a(C){let D=r.events.length-1;for(;D>-1;){const te=r.events[D][1].type;if(te==="lineEnding"||te==="linePrefix")D--;else break}const M=D>-1?r.events[D][1].type:null,q=M==="tableHead"||M==="tableRow"?b:s;return q===b&&r.parser.lazy[r.now().line]?n(C):q(C)}function s(C){return e.enter("tableHead"),e.enter("tableRow"),u(C)}function u(C){return C===124||(l=!0,o+=1),f(C)}function f(C){return C===null?n(C):O(C)?o>1?(o=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(C),e.exit("lineEnding"),h):n(C):H(C)?K(e,f,"whitespace")(C):(o+=1,l&&(l=!1,i+=1),C===124?(e.enter("tableCellDivider"),e.consume(C),e.exit("tableCellDivider"),l=!0,f):(e.enter("data"),c(C)))}function c(C){return C===null||C===124||ee(C)?(e.exit("data"),f(C)):(e.consume(C),C===92?d:c)}function d(C){return C===92||C===124?(e.consume(C),c):c(C)}function h(C){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(C):(e.enter("tableDelimiterRow"),l=!1,H(C)?K(e,g,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(C):g(C))}function g(C){return C===45||C===58?S(C):C===124?(l=!0,e.enter("tableCellDivider"),e.consume(C),e.exit("tableCellDivider"),k):A(C)}function k(C){return H(C)?K(e,S,"whitespace")(C):S(C)}function S(C){return C===58?(o+=1,l=!0,e.enter("tableDelimiterMarker"),e.consume(C),e.exit("tableDelimiterMarker"),p):C===45?(o+=1,p(C)):C===null||O(C)?P(C):A(C)}function p(C){return C===45?(e.enter("tableDelimiterFiller"),m(C)):A(C)}function m(C){return C===45?(e.consume(C),m):C===58?(l=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(C),e.exit("tableDelimiterMarker"),y):(e.exit("tableDelimiterFiller"),y(C))}function y(C){return H(C)?K(e,P,"whitespace")(C):P(C)}function P(C){return C===124?g(C):C===null||O(C)?!l||i!==o?A(C):(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(C)):A(C)}function A(C){return n(C)}function b(C){return e.enter("tableRow"),T(C)}function T(C){return C===124?(e.enter("tableCellDivider"),e.consume(C),e.exit("tableCellDivider"),T):C===null||O(C)?(e.exit("tableRow"),t(C)):H(C)?K(e,T,"whitespace")(C):(e.enter("data"),z(C))}function z(C){return C===null||C===124||ee(C)?(e.exit("data"),T(C)):(e.consume(C),C===92?j:z)}function j(C){return C===92||C===124?(e.consume(C),z):z(C)}}function XC(e,t){let n=-1,r=!0,i=0,o=[0,0,0,0],l=[0,0,0,0],a=!1,s=0,u,f,c;const d=new QC;for(;++n<e.length;){const h=e[n],g=h[1];h[0]==="enter"?g.type==="tableHead"?(a=!1,s!==0&&(Gf(d,t,s,u,f),f=void 0,s=0),u={type:"table",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",u,t]])):g.type==="tableRow"||g.type==="tableDelimiterRow"?(r=!0,c=void 0,o=[0,0,0,0],l=[0,n+1,0,0],a&&(a=!1,f={type:"tableBody",start:Object.assign({},g.start),end:Object.assign({},g.end)},d.add(n,0,[["enter",f,t]])),i=g.type==="tableDelimiterRow"?2:f?3:1):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")?(r=!1,l[2]===0&&(o[1]!==0&&(l[0]=l[1],c=qi(d,t,o,i,void 0,c),o=[0,0,0,0]),l[2]=n)):g.type==="tableCellDivider"&&(r?r=!1:(o[1]!==0&&(l[0]=l[1],c=qi(d,t,o,i,void 0,c)),o=l,l=[o[1],n,0,0])):g.type==="tableHead"?(a=!0,s=n):g.type==="tableRow"||g.type==="tableDelimiterRow"?(s=n,o[1]!==0?(l[0]=l[1],c=qi(d,t,o,i,n,c)):l[1]!==0&&(c=qi(d,t,l,i,n,c)),i=0):i&&(g.type==="data"||g.type==="tableDelimiterMarker"||g.type==="tableDelimiterFiller")&&(l[3]=n)}for(s!==0&&Gf(d,t,s,u,f),d.consume(t.events),n=-1;++n<t.events.length;){const h=t.events[n];h[0]==="enter"&&h[1].type==="table"&&(h[1]._align=qC(t.events,n))}return e}function qi(e,t,n,r,i,o){const l=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",a="tableContent";n[0]!==0&&(o.end=Object.assign({},Wn(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const s=Wn(t.events,n[1]);if(o={type:l,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[["enter",o,t]]),n[2]!==0){const u=Wn(t.events,n[2]),f=Wn(t.events,n[3]),c={type:a,start:Object.assign({},u),end:Object.assign({},f)};if(e.add(n[2],0,[["enter",c,t]]),r!==2){const d=t.events[n[2]],h=t.events[n[3]];if(d[1].end=Object.assign({},h[1].end),d[1].type="chunkText",d[1].contentType="text",n[3]>n[2]+1){const g=n[2]+1,k=n[3]-n[2]-1;e.add(g,k,[])}}e.add(n[3]+1,0,[["exit",c,t]])}return i!==void 0&&(o.end=Object.assign({},Wn(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function Gf(e,t,n,r,i){const o=[],l=Wn(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function Wn(e,t){const n=e[t],r=n[0]==="enter"?"start":"end";return n[1][r]}const JC={name:"tasklistCheck",tokenize:eP};function ZC(){return{text:{91:JC}}}function eP(e,t,n){const r=this;return i;function i(s){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(s):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),o)}function o(s){return ee(s)?(e.enter("taskListCheckValueUnchecked"),e.consume(s),e.exit("taskListCheckValueUnchecked"),l):s===88||s===120?(e.enter("taskListCheckValueChecked"),e.consume(s),e.exit("taskListCheckValueChecked"),l):n(s)}function l(s){return s===93?(e.enter("taskListCheckMarker"),e.consume(s),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(s)}function a(s){return O(s)?t(s):H(s)?e.check({tokenize:tP},t,n)(s):n(s)}}function tP(e,t,n){return K(e,r,"whitespace");function r(i){return i===null?n(i):t(i)}}function nP(e){return Hp([AC(),MC(),VC(e),YC(),ZC()])}const rP={};function iP(e){const t=this,n=e||rP,r=t.data(),i=r.micromarkExtensions||(r.micromarkExtensions=[]),o=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),l=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);i.push(nP(n)),o.push(SC()),l.push(CC(n))}const oP=/^(?:https?:\/\/)?(?:www\.)?(shopee\.ph|shopee\.com\.ph)/i,lP=/^(?:https?:\/\/)?(?:www\.)?(shope\.ee|s\.shopee\.ph)\//i,aP=/[?&](affiliate_id=|utm_source=an_|uls_trackid=)/i;function sP(e,t,n){if(!oP.test(e)||lP.test(e)||aP.test(e))return e;const r=new URLSearchParams({origin_link:e,affiliate_id:t});return n&&r.set("sub_id",n),`https://s.shopee.ph/an_redir?${r.toString()}`}function Nm({href:e,children:t,className:n}){const r="YOUR_AFFILIATE_ID".trim(),i="YOUR_SUB_ID".trim(),o=r?sP(e,r,i):e;return v.jsx("a",{href:o,target:"_blank",rel:"sponsored noopener noreferrer",className:n??"link",children:t})}function uP({name:e,description:t,url:n}){const i=/tiktok/i.test(n)?"View on TikTok Shop":"Check on Shopee";return v.jsx("section",{className:"card border-[color:var(--color-accent)]",children:v.jsxs("div",{className:"space-y-3",children:[v.jsx("div",{className:"flex flex-wrap items-center justify-between gap-2",children:v.jsx("h3",{className:"text-lg font-semibold text-text",children:e})}),v.jsx("p",{className:"text-sm leading-relaxed text-muted",children:t}),v.jsx(Nm,{href:n,className:"btn-primary",children:i})]})})}function cP(){const{slug:e}=qk(),t=e?av(e):void 0;if(!t)return v.jsxs("div",{className:"space-y-4",children:[v.jsx(cn,{title:"Post not found",description:"This post could not be found."}),v.jsx("h1",{className:"text-3xl font-bold",children:"Post not found"}),v.jsx("p",{className:"text-muted",children:"The post you are looking for does not exist or has been moved."}),v.jsx(be,{to:"/blog",className:"link",children:"Back to blog"})]});const n=cv(t,3),r=pP(dP(t.content));return v.jsxs("div",{className:"space-y-12",children:[v.jsx(cn,{title:t.title,description:t.description,canonicalPath:`/blog/${t.slug}`,type:"article",image:t.coverImage}),v.jsx(Bw,{post:t}),v.jsxs("article",{className:"mx-auto flex w-full max-w-[70ch] flex-col gap-10 pb-12 text-[1.05rem] leading-[1.75]",children:[v.jsxs("header",{className:"space-y-5",children:[v.jsx(be,{to:"/blog",className:"link",children:"← Back to blog"}),v.jsx("h1",{className:"text-3xl font-bold text-text",children:t.title}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-sm text-muted",children:[v.jsx("span",{children:Ap(t.date)}),v.jsx(be,{to:"/blog",className:"chip",children:t.category}),v.jsx("span",{children:t.readingTime})]}),t.coverImage?v.jsx("img",{src:t.coverImage,alt:t.title,className:"h-72 w-full rounded-2xl object-cover",loading:"lazy"}):null,v.jsx("p",{className:"text-lg leading-relaxed text-muted",children:t.description}),t.tags.length>0?v.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.map(i=>v.jsxs(be,{to:`/blog?tag=${encodeURIComponent(i)}`,className:"tag",children:["#",i]},i))}):null]}),null,v.jsx("div",{className:"space-y-10",children:r.map((i,o)=>i.type==="product"?v.jsx(uP,{...i.data},`product-${o}`):v.jsx("div",{className:"prose prose-lg dark:prose-invert",children:v.jsx(Vb,{remarkPlugins:[iP],components:{a:({href:l,children:a,...s})=>{const u=l||"";return/(?:^https?:\/\/)?(?:www\.)?(shopee\.ph|tiktok\.com|tiktok\.shop)/i.test(u)?v.jsx(Nm,{href:u,children:a}):v.jsx("a",{href:u,className:"link",...s,children:a})}},children:i.content})},`markdown-${o}`))}),null,null,v.jsx("p",{className:"text-sm text-muted",children:"Links may lead to Shopee or TikTok Shop listings."})]}),n.length>0?v.jsx("section",{className:"border-t-2 border-border pt-10",children:v.jsxs("div",{className:"mx-auto w-full max-w-5xl space-y-4",children:[v.jsx("h2",{className:"section-title",children:"Related articles"}),v.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:n.map(i=>v.jsx(Mo,{post:i},i.slug))})]})}):null]})}const Xf=/\[product-recommendation\s+([^\]]+)\]/g,fP=/^\s*#{1,6}\s+(Link Map|Affiliate Placeholder Replacement Report|Affiliate Link Audit)(\b|\s|:|\()/i;function Jf(e){const t=e.match(/^\s*(#{1,6})\s+/);return t?t[1].length:0}function dP(e){const t=e.split(/\r?\n/),n=[];let r=!1,i=0;for(const o of t){if(!r&&fP.test(o)){r=!0,i=Jf(o);continue}if(r){const l=Jf(o);if(l>0&&l<=i)r=!1;else continue}n.push(o)}return n.join(`
`).trim()}function hP(e){const t={},n=/(\w+)="([^"]*)"/g;let r=n.exec(e);for(;r;)t[r[1]]=r[2],r=n.exec(e);return t}function pP(e){const t=[];let n=0,r=Xf.exec(e);for(;r;){const[o,l]=r,a=r.index,s=a+o.length,u=e.slice(n,a).trim();u&&t.push({type:"markdown",content:u});const f=hP(l);f.name&&f.description&&f.url&&t.push({type:"product",data:{name:f.name,description:f.description,url:f.url}}),n=s,r=Xf.exec(e)}const i=e.slice(n).trim();return i&&t.push({type:"markdown",content:i}),t}function mP(){return v.jsxs("div",{className:"space-y-6",children:[v.jsx(cn,{title:"About",description:"Learn why SulitFinds helps Filipino shoppers find budget-friendly recommendations.",canonicalPath:"/about"}),v.jsx("h1",{className:"text-3xl font-bold text-text",children:"About SulitFinds"}),v.jsx("p",{className:"text-base text-muted",children:"SulitFinds is a practical guide for Filipino shoppers who want clear, budget-friendly recommendations. We focus on value, availability, and everyday use cases without exaggeration or hype."}),v.jsx("p",{className:"text-base text-muted",children:"We review listings, specs, and real-world feedback to help you compare options across Shopee, TikTok Shop, and other trusted marketplaces."})]})}function gP(){return v.jsxs("div",{className:"space-y-6",children:[v.jsx(cn,{title:"Disclaimer",description:"Affiliate disclosure and content disclaimer for SulitFinds.",canonicalPath:"/disclaimer"}),v.jsx("h1",{className:"text-3xl font-bold text-text",children:"Disclaimer & Affiliate Disclosure"}),v.jsx("p",{className:"text-base text-muted",children:"SulitFinds participates in affiliate programs, including Shopee and TikTok Shop. Some links are affiliate links, which means we may earn a commission if you purchase through them, at no extra cost to you."}),v.jsx("p",{className:"text-base text-muted",children:"Content is provided for general information only. We do not offer financial, professional, or investment advice, and we do not claim personal product testing."})]})}function yP(){return v.jsxs("div",{className:"prose prose-lg dark:prose-invert mx-auto max-w-3xl",children:[v.jsx(cn,{title:"Privacy Policy",description:"Privacy policy for SulitFinds, covering data collection, cookies, and analytics.",canonicalPath:"/privacy"}),v.jsx("h1",{children:"Privacy Policy"}),v.jsx("p",{className:"text-muted",children:"Last updated: January 19, 2026"}),v.jsx("p",{children:'SulitFinds ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website at sulitfinds.com.'}),v.jsx("h2",{children:"Information We Collect"}),v.jsx("h3",{children:"Automatically Collected Information"}),v.jsx("p",{children:"When you visit our website, we may automatically collect certain information about your device and usage patterns, including:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Browser type and version"}),v.jsx("li",{children:"Operating system"}),v.jsx("li",{children:"Pages visited and time spent on pages"}),v.jsx("li",{children:"Referring website or source"}),v.jsx("li",{children:"General geographic location (country/city level)"})]}),v.jsx("h3",{children:"Cookies and Tracking Technologies"}),v.jsx("p",{children:"We use the following tracking technologies:"}),v.jsxs("ul",{children:[v.jsxs("li",{children:[v.jsx("strong",{children:"Google Analytics:"})," We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit, what pages they view, and what other sites they used before coming to our site. We use this information to improve our content and user experience. Google Analytics uses cookies to collect this data. You can opt out of Google Analytics by installing the"," ",v.jsx("a",{href:"https://tools.google.com/dlpage/gaoptout",target:"_blank",rel:"noopener noreferrer",children:"Google Analytics Opt-out Browser Add-on"}),"."]}),v.jsxs("li",{children:[v.jsx("strong",{children:"Local Storage:"})," We use browser local storage to remember your preferences, such as dark mode settings and cookie consent status."]})]}),v.jsx("h2",{children:"How We Use Your Information"}),v.jsx("p",{children:"We use the collected information to:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Analyze website traffic and usage patterns"}),v.jsx("li",{children:"Improve our content and recommendations"}),v.jsx("li",{children:"Understand which topics are most helpful to our readers"}),v.jsx("li",{children:"Maintain and optimize website performance"})]}),v.jsx("h2",{children:"Affiliate Links and Third-Party Services"}),v.jsx("p",{children:"Our website contains affiliate links to third-party websites, including Shopee and TikTok Shop. When you click on these links:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"You will be redirected to the third-party website"}),v.jsx("li",{children:"The third-party website may collect information about you according to their own privacy policies"}),v.jsx("li",{children:"We may receive a commission if you make a purchase, at no extra cost to you"})]}),v.jsx("p",{children:"We are not responsible for the privacy practices of these third-party websites. We encourage you to review their privacy policies before providing any personal information."}),v.jsx("h2",{children:"Data Sharing"}),v.jsx("p",{children:"We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share anonymized, aggregate data with analytics providers to help us understand website usage."}),v.jsx("h2",{children:"Data Retention"}),v.jsx("p",{children:"Analytics data is retained according to Google Analytics default retention settings (26 months). Local storage data remains on your device until you clear your browser data."}),v.jsx("h2",{children:"Your Rights"}),v.jsx("p",{children:"You have the right to:"}),v.jsxs("ul",{children:[v.jsx("li",{children:"Opt out of analytics tracking using browser extensions"}),v.jsx("li",{children:"Clear cookies and local storage through your browser settings"}),v.jsx("li",{children:"Use private/incognito browsing mode"}),v.jsx("li",{children:"Request information about what data we have collected"})]}),v.jsx("h2",{children:"Children's Privacy"}),v.jsx("p",{children:"Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13."}),v.jsx("h2",{children:"Changes to This Policy"}),v.jsx("p",{children:"We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."}),v.jsx("h2",{children:"Contact Us"}),v.jsxs("p",{children:["If you have questions about this Privacy Policy, please visit our"," ",v.jsx(be,{to:"/about",children:"About page"})," or"," ",v.jsx(be,{to:"/disclaimer",children:"Disclaimer page"})," for more information about SulitFinds."]})]})}function kP(){return v.jsxs("div",{className:"space-y-6 text-center",children:[v.jsx(cn,{title:"Page not found",description:"The page you requested was not found."}),v.jsx("h1",{className:"text-4xl font-bold text-text",children:"404"}),v.jsx("p",{className:"text-base text-muted",children:"We couldn't find the page you're looking for."}),v.jsx(be,{to:"/",className:"link",children:"Return to home"})]})}function wP(){return R.useEffect(()=>{Aw()},[]),v.jsxs(v.Fragment,{children:[v.jsx(_w,{}),v.jsx(fw,{children:v.jsxs(Lt,{element:v.jsx(zw,{}),children:[v.jsx(Lt,{index:!0,element:v.jsx(fv,{})}),v.jsx(Lt,{path:"blog",element:v.jsx(hv,{})}),v.jsx(Lt,{path:"blog/:slug",element:v.jsx(cP,{})}),v.jsx(Lt,{path:"about",element:v.jsx(mP,{})}),v.jsx(Lt,{path:"disclaimer",element:v.jsx(gP,{})}),v.jsx(Lt,{path:"privacy",element:v.jsx(yP,{})}),v.jsx(Lt,{path:"*",element:v.jsx(kP,{})})]})})]})}ia.createRoot(document.getElementById("root")).render(v.jsx(ud.StrictMode,{children:v.jsx(vw,{children:v.jsx(wP,{})})}));
