(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[580],{7580:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Ie}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-10"},[e("h1",[t._v("Table")]),e("form",[t._m(0),e("input",{staticClass:"btn btn-success btn-sm",attrs:{type:"button",value:"Search"},on:{click:t.searchHSHD}})]),e("table",{staticClass:"table table-hover table-bordered"},[e("thead",[e("tr",[e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("HSHD_NUM")}}},[t._v("HSHD_NUM")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("BASKET_NUM")}}},[t._v("BASKET_NUM")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("PURCHASE")}}},[t._v("DATE")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("PRODUCT_NUM")}}},[t._v("PRODUCT_NUM")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("DEPARTMENT")}}},[t._v("DEPARTMENT")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("COMMODITY")}}},[t._v("COMMODITY")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("SPEND")}}},[t._v("SPEND")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("UNITS")}}},[t._v("UNITS")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("STORE_R")}}},[t._v("STORE_REGION")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("WEEK_NUM")}}},[t._v("WEEK_NUM")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("YEAR")}}},[t._v("YEAR")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("LOYALTY_FLAG")}}},[t._v("LOYALTY_FLAG")]),e("th",{attrs:{scope:"col"},on:{click:function(e){return t.sort("AGE_RANGE")}}},[t._v("AGE_RANGE")])])]),e("tbody",t._l(t.rows,(function(r,n){return e("tr",{key:n},[e("td",[t._v(t._s(r.HSHD_NUM))]),e("td",[t._v(t._s(r.BASKET_NUM))]),e("td",[t._v(t._s(r.PURCHASE))]),e("td",[t._v(t._s(r.PRODUCT_NUM))]),e("td",[t._v(t._s(r.DEPARTMENT))]),e("td",[t._v(t._s(r.COMMODITY))]),e("td",[t._v(t._s(r.SPEND))]),e("td",[t._v(t._s(r.UNITS))]),e("td",[t._v(t._s(r.STORE_R))]),e("td",[t._v(t._s(r.WEEK_NUM))]),e("td",[t._v(t._s(r.YEAR))]),e("td",[t._v(t._s(r.LOYALTY_FLAG))]),e("td",[t._v(t._s(r.AGE_RANGE))])])})),0)])])])])},o=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"label",attrs:{for:"HSHD_NUM"}},[t._v("HSHD_NUM "),e("input",{attrs:{id:"HSHD_NUM_INPUT",type:"text"}})])}];r(7658);function s(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:a}=Object,c=(t=>e=>{const r=i.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),u=t=>(t=t.toLowerCase(),e=>c(e)===t),l=t=>e=>typeof e===t,{isArray:f}=Array,d=l("undefined");function h(t){return null!==t&&!d(t)&&null!==t.constructor&&!d(t.constructor)&&y(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const p=u("ArrayBuffer");function m(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&p(t.buffer),e}const E=l("string"),y=l("function"),b=l("number"),g=t=>null!==t&&"object"===typeof t,_=t=>!0===t||!1===t,O=t=>{if("object"!==c(t))return!1;const e=a(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},R=u("Date"),w=u("File"),S=u("Blob"),v=u("FileList"),A=t=>g(t)&&y(t.pipe),T=t=>{const e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||i.call(t)===e||y(t.toString)&&t.toString()===e)},N=u("URLSearchParams"),D=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(t,e,{allOwnKeys:r=!1}={}){if(null===t||"undefined"===typeof t)return;let n,o;if("object"!==typeof t&&(t=[t]),f(t))for(n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else{const o=r?Object.getOwnPropertyNames(t):Object.keys(t),s=o.length;let i;for(n=0;n<s;n++)i=o[n],e.call(null,t[i],i,t)}}function U(t,e){e=e.toLowerCase();const r=Object.keys(t);let n,o=r.length;while(o-- >0)if(n=r[o],e===n.toLowerCase())return n;return null}const x="undefined"===typeof self?"undefined"===typeof global?void 0:global:self,j=t=>!d(t)&&t!==x;function P(){const{caseless:t}=j(this)&&this||{},e={},r=(r,n)=>{const o=t&&U(e,n)||n;O(e[o])&&O(r)?e[o]=P(e[o],r):O(r)?e[o]=P({},r):f(r)?e[o]=r.slice():e[o]=r};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&C(arguments[n],r);return e}const L=(t,e,r,{allOwnKeys:n}={})=>(C(e,((e,n)=>{r&&y(e)?t[n]=s(e,r):t[n]=e}),{allOwnKeys:n}),t),k=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),I=(t,e,r,n)=>{t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},M=(t,e,r,n)=>{let o,s,i;const c={};if(e=e||{},null==t)return e;do{o=Object.getOwnPropertyNames(t),s=o.length;while(s-- >0)i=o[s],n&&!n(i,t,e)||c[i]||(e[i]=t[i],c[i]=!0);t=!1!==r&&a(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e},B=(t,e,r)=>{t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;const n=t.indexOf(e,r);return-1!==n&&n===r},F=t=>{if(!t)return null;if(f(t))return t;let e=t.length;if(!b(e))return null;const r=new Array(e);while(e-- >0)r[e]=t[e];return r},H=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&a(Uint8Array)),z=(t,e)=>{const r=t&&t[Symbol.iterator],n=r.call(t);let o;while((o=n.next())&&!o.done){const r=o.value;e.call(t,r[0],r[1])}},K=(t,e)=>{let r;const n=[];while(null!==(r=t.exec(e)))n.push(r);return n},q=u("HTMLFormElement"),J=t=>t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(t,e,r){return e.toUpperCase()+r})),V=(({hasOwnProperty:t})=>(e,r)=>t.call(e,r))(Object.prototype),W=u("RegExp"),Y=(t,e)=>{const r=Object.getOwnPropertyDescriptors(t),n={};C(r,((r,o)=>{!1!==e(r,o,t)&&(n[o]=r)})),Object.defineProperties(t,n)},G=t=>{Y(t,((e,r)=>{if(y(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=t[r];y(n)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},$=(t,e)=>{const r={},n=t=>{t.forEach((t=>{r[t]=!0}))};return f(t)?n(t):n(String(t).split(e)),r},X=()=>{},Q=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Z=t=>{const e=new Array(10),r=(t,n)=>{if(g(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;const o=f(t)?[]:{};return C(t,((t,e)=>{const s=r(t,n+1);!d(s)&&(o[e]=s)})),e[n]=void 0,o}}return t};return r(t,0)};var tt={isArray:f,isArrayBuffer:p,isBuffer:h,isFormData:T,isArrayBufferView:m,isString:E,isNumber:b,isBoolean:_,isObject:g,isPlainObject:O,isUndefined:d,isDate:R,isFile:w,isBlob:S,isRegExp:W,isFunction:y,isStream:A,isURLSearchParams:N,isTypedArray:H,isFileList:v,forEach:C,merge:P,extend:L,trim:D,stripBOM:k,inherits:I,toFlatObject:M,kindOf:c,kindOfTest:u,endsWith:B,toArray:F,forEachEntry:z,matchAll:K,isHTMLForm:q,hasOwnProperty:V,hasOwnProp:V,reduceDescriptors:Y,freezeMethods:G,toObjectSet:$,toCamelCase:J,noop:X,toFiniteNumber:Q,findKey:U,global:x,isContextDefined:j,toJSONObject:Z};r(541);function et(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}tt.inherits(et,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:tt.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const rt=et.prototype,nt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{nt[t]={value:t}})),Object.defineProperties(et,nt),Object.defineProperty(rt,"isAxiosError",{value:!0}),et.from=(t,e,r,n,o,s)=>{const i=Object.create(rt);return tt.toFlatObject(t,i,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),et.call(i,t.message,e,r,n,o),i.cause=t,i.name=t.name,s&&Object.assign(i,s),i};var ot=et,st=r(6237),it=st;function at(t){return tt.isPlainObject(t)||tt.isArray(t)}function ct(t){return tt.endsWith(t,"[]")?t.slice(0,-2):t}function ut(t,e,r){return t?t.concat(e).map((function(t,e){return t=ct(t),!r&&e?"["+t+"]":t})).join(r?".":""):e}function lt(t){return tt.isArray(t)&&!t.some(at)}const ft=tt.toFlatObject(tt,{},null,(function(t){return/^is[A-Z]/.test(t)}));function dt(t){return t&&tt.isFunction(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator]}function ht(t,e,r){if(!tt.isObject(t))throw new TypeError("target must be an object");e=e||new(it||FormData),r=tt.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!tt.isUndefined(e[t])}));const n=r.metaTokens,o=r.visitor||l,s=r.dots,i=r.indexes,a=r.Blob||"undefined"!==typeof Blob&&Blob,c=a&&dt(e);if(!tt.isFunction(o))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(tt.isDate(t))return t.toISOString();if(!c&&tt.isBlob(t))throw new ot("Blob is not supported. Use a Buffer instead.");return tt.isArrayBuffer(t)||tt.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,r,o){let a=t;if(t&&!o&&"object"===typeof t)if(tt.endsWith(r,"{}"))r=n?r:r.slice(0,-2),t=JSON.stringify(t);else if(tt.isArray(t)&&lt(t)||tt.isFileList(t)||tt.endsWith(r,"[]")&&(a=tt.toArray(t)))return r=ct(r),a.forEach((function(t,n){!tt.isUndefined(t)&&null!==t&&e.append(!0===i?ut([r],n,s):null===i?r:r+"[]",u(t))})),!1;return!!at(t)||(e.append(ut(o,r,s),u(t)),!1)}const f=[],d=Object.assign(ft,{defaultVisitor:l,convertValue:u,isVisitable:at});function h(t,r){if(!tt.isUndefined(t)){if(-1!==f.indexOf(t))throw Error("Circular reference detected in "+r.join("."));f.push(t),tt.forEach(t,(function(t,n){const s=!(tt.isUndefined(t)||null===t)&&o.call(e,t,tt.isString(n)?n.trim():n,r,d);!0===s&&h(t,r?r.concat(n):[n])})),f.pop()}}if(!tt.isObject(t))throw new TypeError("data must be an object");return h(t),e}var pt=ht;function mt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function Et(t,e){this._pairs=[],t&&pt(t,this,e)}const yt=Et.prototype;yt.append=function(t,e){this._pairs.push([t,e])},yt.toString=function(t){const e=t?function(e){return t.call(this,e,mt)}:mt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var bt=Et;function gt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function _t(t,e,r){if(!e)return t;const n=r&&r.encode||gt,o=r&&r.serialize;let s;if(s=o?o(e,r):tt.isURLSearchParams(e)?e.toString():new bt(e,r).toString(n),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class Ot{constructor(){this.handlers=[]}use(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){tt.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var Rt=Ot,wt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},St="undefined"!==typeof URLSearchParams?URLSearchParams:bt,vt=FormData;const At=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})();var Tt={isBrowser:!0,classes:{URLSearchParams:St,FormData:vt,Blob:Blob},isStandardBrowserEnv:At,protocols:["http","https","file","blob","url","data"]};function Nt(t,e){return pt(t,new Tt.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return Tt.isNode&&tt.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},e))}function Dt(t){return tt.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function Ct(t){const e={},r=Object.keys(t);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],e[s]=t[s];return e}function Ut(t){function e(t,r,n,o){let s=t[o++];const i=Number.isFinite(+s),a=o>=t.length;if(s=!s&&tt.isArray(n)?n.length:s,a)return tt.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!i;n[s]&&tt.isObject(n[s])||(n[s]=[]);const c=e(t,r,n[s],o);return c&&tt.isArray(n[s])&&(n[s]=Ct(n[s])),!i}if(tt.isFormData(t)&&tt.isFunction(t.entries)){const r={};return tt.forEachEntry(t,((t,n)=>{e(Dt(t),n,r,0)})),r}return null}var xt=Ut;const jt={"Content-Type":void 0};function Pt(t,e,r){if(tt.isString(t))try{return(e||JSON.parse)(t),tt.trim(t)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(t)}const Lt={transitional:wt,adapter:["xhr","http"],transformRequest:[function(t,e){const r=e.getContentType()||"",n=r.indexOf("application/json")>-1,o=tt.isObject(t);o&&tt.isHTMLForm(t)&&(t=new FormData(t));const s=tt.isFormData(t);if(s)return n&&n?JSON.stringify(xt(t)):t;if(tt.isArrayBuffer(t)||tt.isBuffer(t)||tt.isStream(t)||tt.isFile(t)||tt.isBlob(t))return t;if(tt.isArrayBufferView(t))return t.buffer;if(tt.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let i;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nt(t,this.formSerializer).toString();if((i=tt.isFileList(t))||r.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return pt(i?{"files[]":t}:t,e&&new e,this.formSerializer)}}return o||n?(e.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const e=this.transitional||Lt.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&tt.isString(t)&&(r&&!this.responseType||n)){const r=e&&e.silentJSONParsing,s=!r&&n;try{return JSON.parse(t)}catch(o){if(s){if("SyntaxError"===o.name)throw ot.from(o,ot.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Tt.classes.FormData,Blob:Tt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};tt.forEach(["delete","get","head"],(function(t){Lt.headers[t]={}})),tt.forEach(["post","put","patch"],(function(t){Lt.headers[t]=tt.merge(jt)}));var kt=Lt;const It=tt.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Mt=t=>{const e={};let r,n,o;return t&&t.split("\n").forEach((function(t){o=t.indexOf(":"),r=t.substring(0,o).trim().toLowerCase(),n=t.substring(o+1).trim(),!r||e[r]&&It[r]||("set-cookie"===r?e[r]?e[r].push(n):e[r]=[n]:e[r]=e[r]?e[r]+", "+n:n)})),e};const Bt=Symbol("internals");function Ft(t){return t&&String(t).trim().toLowerCase()}function Ht(t){return!1===t||null==t?t:tt.isArray(t)?t.map(Ht):String(t)}function zt(t){const e=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;while(n=r.exec(t))e[n[1]]=n[2];return e}function Kt(t){return/^[-_a-zA-Z]+$/.test(t.trim())}function qt(t,e,r,n){return tt.isFunction(n)?n.call(this,e,r):tt.isString(e)?tt.isString(n)?-1!==e.indexOf(n):tt.isRegExp(n)?n.test(e):void 0:void 0}function Jt(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,r)=>e.toUpperCase()+r))}function Vt(t,e){const r=tt.toCamelCase(" "+e);["get","set","has"].forEach((n=>{Object.defineProperty(t,n+r,{value:function(t,r,o){return this[n].call(this,e,t,r,o)},configurable:!0})}))}class Wt{constructor(t){t&&this.set(t)}set(t,e,r){const n=this;function o(t,e,r){const o=Ft(e);if(!o)throw new Error("header name must be a non-empty string");const s=tt.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||e]=Ht(t))}const s=(t,e)=>tt.forEach(t,((t,r)=>o(t,r,e)));return tt.isPlainObject(t)||t instanceof this.constructor?s(t,e):tt.isString(t)&&(t=t.trim())&&!Kt(t)?s(Mt(t),e):null!=t&&o(e,t,r),this}get(t,e){if(t=Ft(t),t){const r=tt.findKey(this,t);if(r){const t=this[r];if(!e)return t;if(!0===e)return zt(t);if(tt.isFunction(e))return e.call(this,t,r);if(tt.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Ft(t),t){const r=tt.findKey(this,t);return!(!r||e&&!qt(this,this[r],r,e))}return!1}delete(t,e){const r=this;let n=!1;function o(t){if(t=Ft(t),t){const o=tt.findKey(r,t);!o||e&&!qt(r,r[o],o,e)||(delete r[o],n=!0)}}return tt.isArray(t)?t.forEach(o):o(t),n}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const e=this,r={};return tt.forEach(this,((n,o)=>{const s=tt.findKey(r,o);if(s)return e[s]=Ht(n),void delete e[o];const i=t?Jt(o):String(o).trim();i!==o&&delete e[o],e[i]=Ht(n),r[i]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return tt.forEach(this,((r,n)=>{null!=r&&!1!==r&&(e[n]=t&&tt.isArray(r)?r.join(", "):r)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const r=new this(t);return e.forEach((t=>r.set(t))),r}static accessor(t){const e=this[Bt]=this[Bt]={accessors:{}},r=e.accessors,n=this.prototype;function o(t){const e=Ft(t);r[e]||(Vt(n,t),r[e]=!0)}return tt.isArray(t)?t.forEach(o):o(t),this}}Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),tt.freezeMethods(Wt.prototype),tt.freezeMethods(Wt);var Yt=Wt;function Gt(t,e){const r=this||kt,n=e||r,o=Yt.from(n.headers);let s=n.data;return tt.forEach(t,(function(t){s=t.call(r,s,o.normalize(),e?e.status:void 0)})),o.normalize(),s}function $t(t){return!(!t||!t.__CANCEL__)}function Xt(t,e,r){ot.call(this,null==t?"canceled":t,ot.ERR_CANCELED,e,r),this.name="CanceledError"}tt.inherits(Xt,ot,{__CANCEL__:!0});var Qt=Xt,Zt=null;r(2801);function te(t,e,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?e(new ot("Request failed with status code "+r.status,[ot.ERR_BAD_REQUEST,ot.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}var ee=Tt.isStandardBrowserEnv?function(){return{write:function(t,e,r,n,o,s){const i=[];i.push(t+"="+encodeURIComponent(e)),tt.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),tt.isString(n)&&i.push("path="+n),tt.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function re(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ne(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function oe(t,e){return t&&!re(e)?ne(t,e):e}var se=Tt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let r;function n(r){let n=r;return t&&(e.setAttribute("href",n),n=e.href),e.setAttribute("href",n),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return r=n(window.location.href),function(t){const e=tt.isString(t)?n(t):t;return e.protocol===r.protocol&&e.host===r.host}}():function(){return function(){return!0}}();function ie(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function ae(t,e){t=t||10;const r=new Array(t),n=new Array(t);let o,s=0,i=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=n[i];o||(o=c),r[s]=a,n[s]=c;let l=i,f=0;while(l!==s)f+=r[l++],l%=t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),c-o<e)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var ce=ae;function ue(t,e){let r=0;const n=ce(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-r,c=n(a),u=s<=i;r=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&u?(i-s)/c:void 0,event:o};l[e?"download":"upload"]=!0,t(l)}}const le="undefined"!==typeof XMLHttpRequest;var fe=le&&function(t){return new Promise((function(e,r){let n=t.data;const o=Yt.from(t.headers).normalize(),s=t.responseType;let i;function a(){t.cancelToken&&t.cancelToken.unsubscribe(i),t.signal&&t.signal.removeEventListener("abort",i)}tt.isFormData(n)&&Tt.isStandardBrowserEnv&&o.setContentType(!1);let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",r=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";o.set("Authorization","Basic "+btoa(e+":"+r))}const u=oe(t.baseURL,t.url);function l(){if(!c)return;const n=Yt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=s&&"text"!==s&&"json"!==s?c.response:c.responseText,i={data:o,status:c.status,statusText:c.statusText,headers:n,config:t,request:c};te((function(t){e(t),a()}),(function(t){r(t),a()}),i),c=null}if(c.open(t.method.toUpperCase(),_t(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(r(new ot("Request aborted",ot.ECONNABORTED,t,c)),c=null)},c.onerror=function(){r(new ot("Network Error",ot.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const n=t.transitional||wt;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new ot(e,n.clarifyTimeoutError?ot.ETIMEDOUT:ot.ECONNABORTED,t,c)),c=null},Tt.isStandardBrowserEnv){const e=(t.withCredentials||se(u))&&t.xsrfCookieName&&ee.read(t.xsrfCookieName);e&&o.set(t.xsrfHeaderName,e)}void 0===n&&o.setContentType(null),"setRequestHeader"in c&&tt.forEach(o.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),tt.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",ue(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ue(t.onUploadProgress)),(t.cancelToken||t.signal)&&(i=e=>{c&&(r(!e||e.type?new Qt(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(i),t.signal&&(t.signal.aborted?i():t.signal.addEventListener("abort",i)));const f=ie(u);f&&-1===Tt.protocols.indexOf(f)?r(new ot("Unsupported protocol "+f+":",ot.ERR_BAD_REQUEST,t)):c.send(n||null)}))};const de={http:Zt,xhr:fe};tt.forEach(de,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(r){}Object.defineProperty(t,"adapterName",{value:e})}}));var he={getAdapter:t=>{t=tt.isArray(t)?t:[t];const{length:e}=t;let r,n;for(let o=0;o<e;o++)if(r=t[o],n=tt.isString(r)?de[r.toLowerCase()]:r)break;if(!n){if(!1===n)throw new ot(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(tt.hasOwnProp(de,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`)}if(!tt.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:de};function pe(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Qt}function me(t){pe(t),t.headers=Yt.from(t.headers),t.data=Gt.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=he.getAdapter(t.adapter||kt.adapter);return e(t).then((function(e){return pe(t),e.data=Gt.call(t,t.transformResponse,e),e.headers=Yt.from(e.headers),e}),(function(e){return $t(e)||(pe(t),e&&e.response&&(e.response.data=Gt.call(t,t.transformResponse,e.response),e.response.headers=Yt.from(e.response.headers))),Promise.reject(e)}))}const Ee=t=>t instanceof Yt?t.toJSON():t;function ye(t,e){e=e||{};const r={};function n(t,e,r){return tt.isPlainObject(t)&&tt.isPlainObject(e)?tt.merge.call({caseless:r},t,e):tt.isPlainObject(e)?tt.merge({},e):tt.isArray(e)?e.slice():e}function o(t,e,r){return tt.isUndefined(e)?tt.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}function s(t,e){if(!tt.isUndefined(e))return n(void 0,e)}function i(t,e){return tt.isUndefined(e)?tt.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}function a(r,o,s){return s in e?n(r,o):s in t?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(t,e)=>o(Ee(t),Ee(e),!0)};return tt.forEach(Object.keys(t).concat(Object.keys(e)),(function(n){const s=c[n]||o,i=s(t[n],e[n],n);tt.isUndefined(i)&&s!==a||(r[n]=i)})),r}const be="1.2.0",ge={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{ge[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));const _e={};function Oe(t,e,r){if("object"!==typeof t)throw new ot("options must be an object",ot.ERR_BAD_OPTION_VALUE);const n=Object.keys(t);let o=n.length;while(o-- >0){const s=n[o],i=e[s];if(i){const e=t[s],r=void 0===e||i(e,s,t);if(!0!==r)throw new ot("option "+s+" must be "+r,ot.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new ot("Unknown option "+s,ot.ERR_BAD_OPTION)}}ge.transitional=function(t,e,r){function n(t,e){return"[Axios v"+be+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return(r,o,s)=>{if(!1===t)throw new ot(n(o," has been removed"+(e?" in "+e:"")),ot.ERR_DEPRECATED);return e&&!_e[o]&&(_e[o]=!0,console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,s)}};var Re={assertOptions:Oe,validators:ge};const we=Re.validators;class Se{constructor(t){this.defaults=t,this.interceptors={request:new Rt,response:new Rt}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=ye(this.defaults,e);const{transitional:r,paramsSerializer:n,headers:o}=e;let s;void 0!==r&&Re.assertOptions(r,{silentJSONParsing:we.transitional(we.boolean),forcedJSONParsing:we.transitional(we.boolean),clarifyTimeoutError:we.transitional(we.boolean)},!1),void 0!==n&&Re.assertOptions(n,{encode:we.function,serialize:we.function},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=o&&tt.merge(o.common,o[e.method]),s&&tt.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete o[t]})),e.headers=Yt.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,i.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,f=0;if(!a){const t=[me.bind(this),void 0];t.unshift.apply(t,i),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(f<l)u=u.then(t[f++],t[f++]);return u}l=i.length;let d=e;f=0;while(f<l){const t=i[f++],e=i[f++];try{d=t(d)}catch(h){e.call(this,h);break}}try{u=me.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(t){t=ye(this.defaults,t);const e=oe(t.baseURL,t.url);return _t(e,t.params,t.paramsSerializer)}}tt.forEach(["delete","get","head","options"],(function(t){Se.prototype[t]=function(e,r){return this.request(ye(r||{},{method:t,url:e,data:(r||{}).data}))}})),tt.forEach(["post","put","patch"],(function(t){function e(e){return function(r,n,o){return this.request(ye(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}Se.prototype[t]=e(),Se.prototype[t+"Form"]=e(!0)}));var ve=Se;class Ae{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const r=this;this.promise.then((t=>{if(!r._listeners)return;let e=r._listeners.length;while(e-- >0)r._listeners[e](t);r._listeners=null})),this.promise.then=t=>{let e;const n=new Promise((t=>{r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t,n,o){r.reason||(r.reason=new Qt(t,n,o),e(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Ae((function(e){t=e}));return{token:e,cancel:t}}}var Te=Ae;function Ne(t){return function(e){return t.apply(null,e)}}function De(t){return tt.isObject(t)&&!0===t.isAxiosError}function Ce(t){const e=new ve(t),r=s(ve.prototype.request,e);return tt.extend(r,ve.prototype,e,{allOwnKeys:!0}),tt.extend(r,e,null,{allOwnKeys:!0}),r.create=function(e){return Ce(ye(t,e))},r}const Ue=Ce(kt);Ue.Axios=ve,Ue.CanceledError=Qt,Ue.CancelToken=Te,Ue.isCancel=$t,Ue.VERSION=be,Ue.toFormData=pt,Ue.AxiosError=ot,Ue.Cancel=Ue.CanceledError,Ue.all=function(t){return Promise.all(t)},Ue.spread=Ne,Ue.isAxiosError=De,Ue.AxiosHeaders=Yt,Ue.formToJSON=t=>xt(tt.isHTMLForm(t)?new FormData(t):t),Ue.default=Ue;var xe=Ue,je={data(){return{rows:[],currentSort:"name",currentSortDir:"asc"}},methods:{searchHSHD(){this.getData(document.getElementById("HSHD_NUM_INPUT").value)},getData(t){const e=`http://localhost:5000/data/HSHD/${t}`;xe.get(e).then((t=>{if(null==t.data)return;const e=[];for(let r=0;r<t.data.data.length;r+=1){const n=t.data.data[r],o={HSHD_NUM:t.data.HSHD_NUM};let s=0;while(s<n.length)o[t.data.columns[s]]=n[s],s+=1;e.push(o)}console.log(e),this.rows=e})).catch((t=>{console.error(t)}))},sort(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t,this.rows.sort(((t,e)=>{let r=1;return"desc"===this.currentSortDir&&(r=-1),t[this.currentSort]<e[this.currentSort]?-1*r:t[this.currentSort]>e[this.currentSort]?1*r:0}))}},created(){this.getData(577)}},Pe=je,Le=r(1001),ke=(0,Le.Z)(Pe,n,o,!1,null,null,null),Ie=ke.exports},6077:function(t,e,r){var n=r(614),o=String,s=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw s("Can't set "+o(t)+" as a prototype")}},5787:function(t,e,r){var n=r(7976),o=TypeError;t.exports=function(t,e){if(n(e,t))return t;throw o("Incorrect invocation")}},648:function(t,e,r){var n=r(1694),o=r(614),s=r(4326),i=r(5112),a=i("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=n?s:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=c(t),a))?r:u?s(e):"Object"==(n=s(e))&&o(e.callee)?"Arguments":n}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},1060:function(t,e,r){var n=r(1702),o=Error,s=n("".replace),i=function(t){return String(o(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(i);t.exports=function(t,e){if(c&&"string"==typeof t&&!o.prepareStackTrace)while(e--)t=s(t,a,"");return t}},9587:function(t,e,r){var n=r(614),o=r(111),s=r(7674);t.exports=function(t,e,r){var i,a;return s&&n(i=e.constructor)&&i!==r&&o(a=i.prototype)&&a!==r.prototype&&s(t,a),t}},6277:function(t,e,r){var n=r(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},7674:function(t,e,r){var n=r(1702),o=r(9670),s=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(r,[]),e=r instanceof Array}catch(i){}return function(r,n){return o(r),s(n),e?t(r,n):r.__proto__=n,r}}():void 0)},1694:function(t,e,r){var n=r(5112),o=n("toStringTag"),s={};s[o]="z",t.exports="[object z]"===String(s)},1340:function(t,e,r){var n=r(648),o=String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},2801:function(t,e,r){"use strict";var n=r(2109),o=r(7854),s=r(5005),i=r(9114),a=r(3070).f,c=r(2597),u=r(5787),l=r(9587),f=r(6277),d=r(3678),h=r(1060),p=r(9781),m=r(1913),E="DOMException",y=s("Error"),b=s(E),g=function(){u(this,_);var t=arguments.length,e=f(t<1?void 0:arguments[0]),r=f(t<2?void 0:arguments[1],"Error"),n=new b(e,r),o=y(e);return o.name=E,a(n,"stack",i(1,h(o.stack,1))),l(n,this,g),n},_=g.prototype=b.prototype,O="stack"in y(E),R="stack"in new b(1,2),w=b&&p&&Object.getOwnPropertyDescriptor(o,E),S=!!w&&!(w.writable&&w.configurable),v=O&&!S&&!R;n({global:!0,constructor:!0,forced:m||v},{DOMException:v?g:b});var A=s(E),T=A.prototype;if(T.constructor!==A)for(var N in m||a(T,"constructor",i(1,A)),d)if(c(d,N)){var D=d[N],C=D.s;c(A,C)||a(A,C,i(6,D.c))}},6237:function(t){t.exports="object"==typeof self?self.FormData:window.FormData}}]);
//# sourceMappingURL=580.5263170b.js.map