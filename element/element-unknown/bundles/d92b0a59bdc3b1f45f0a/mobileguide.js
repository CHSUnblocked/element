!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1343)}({1343:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(405);function i(){document.cookie="element_mobile_redirect_to_guide=false;path=/;max-age=14400",window.location.href="../"}function l(e){e=`<h2>Error loading Element</h2><p>${e}</p><p>If this is unexpected, please contact your system administrator or technical support representative.</p>`;const t=document.getElementsByClassName("mx_HomePage_container"),n=document.getElementsByClassName("mx_HomePage_errorContainer");for(const e of t)e.innerHTML="";for(const t of n)t.style.display="block",t.innerHTML=e}!async function(){var e;document.getElementById("back_to_element_button").onclick=i;const t=await Object(r.a)(".."),n=null==t?void 0:t.default_server_config,c=null==t?void 0:t.default_server_name,a=null==t?void 0:t.default_hs_url,s=null==t?void 0:t.default_is_url,u=[n,c,a].filter((e=>!!e));if(a&&(n||c))return l("Invalid configuration: a default_hs_url can't be specified along with default_server_name or default_server_config");if(u.length<1)return l("Invalid configuration: no default server specified.");let f,d;var p;if(c||"string"!=typeof(null==n||null===(e=n["m.homeserver"])||void 0===e?void 0:e.base_url)||(f=n["m.homeserver"].base_url,"string"==typeof(null===(p=n["m.identity_server"])||void 0===p?void 0:p.base_url)&&(d=n["m.identity_server"].base_url)),c)try{const e=await fetch(`https://${c}/.well-known/matrix/client`),t=await e.json();t&&t["m.homeserver"]&&(f=t["m.homeserver"].base_url,t["m.identity_server"]&&(d=t["m.identity_server"].base_url))}catch(e){if(!n||!n["m.homeserver"])return o.a.error(e),l("Unable to fetch homeserver configuration");f=n["m.homeserver"].base_url||void 0,n["m.identity_server"]&&(d=n["m.identity_server"].base_url||void 0)}if(a&&(f=a,d=s),!f)return l("Unable to locate homeserver");if(f&&!f.endsWith("/")&&(f+="/"),d&&!d.endsWith("/")&&(d+="/"),"https://matrix.org/"!==f){let e="https://mobile.element.io?hs_url="+encodeURIComponent(f);var v;if(d)document.getElementById("custom_is").style.display="block",document.getElementById("is_url").style.display="block",document.getElementById("is_url").innerText=d,e+="&is_url="+encodeURIComponent(null!==(v=d)&&void 0!==v?v:"");document.getElementById("configure_element_button").href=e,document.getElementById("step1_heading").innerHTML="1: Install the app",document.getElementById("step2_container").style.display="block",document.getElementById("hs_url").innerText=f}}()},135:function(e,t,n){var o,r;!function(i,l){"use strict";o=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function i(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(o){return"debug"===o&&(o="log"),typeof console!==t&&("trace"===o&&n?i:void 0!==console[o]?r(console,o):void 0!==console.log?r(console,"log"):e)}function c(t,n){for(var r=0;r<o.length;r++){var i=o[r];this[i]=r<t?e:this.methodFactory(i,t,n)}this.log=this.debug}function a(e,n,o){return function(){typeof console!==t&&(c.call(this,n,o),this[e].apply(this,arguments))}}function s(e,t,n){return l(e)||a.apply(this,arguments)}function u(e,n,r){var i,l=this;n=null==n?"WARN":n;var a="loglevel";function u(e){var n=(o[e]||"silent").toUpperCase();if(typeof window!==t&&a){try{return void(window.localStorage[a]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+n+";"}catch(e){}}}function f(){var e;if(typeof window!==t&&a){try{e=window.localStorage[a]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,o=n.indexOf(encodeURIComponent(a)+"=");-1!==o&&(e=/^([^;]+)/.exec(n.slice(o))[1])}catch(e){}return void 0===l.levels[e]&&(e=void 0),e}}function d(){if(typeof window!==t&&a){try{return void window.localStorage.removeItem(a)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),l.name=e,l.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},l.methodFactory=r||s,l.getLevel=function(){return i},l.setLevel=function(n,o){if("string"==typeof n&&void 0!==l.levels[n.toUpperCase()]&&(n=l.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=l.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(i=n,!1!==o&&u(n),c.call(l,n,e),typeof console===t&&n<l.levels.SILENT)return"No console available for logging"},l.setDefaultLevel=function(e){n=e,f()||l.setLevel(e,!1)},l.resetLevel=function(){l.setLevel(n,!1),d()},l.enableAll=function(e){l.setLevel(l.levels.TRACE,e)},l.disableAll=function(e){l.setLevel(l.levels.SILENT,e)};var p=f();null==p&&(p=n),l.setLevel(p,!1)}var f=new u,d={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=d[e];return t||(t=d[e]=new u(e,f.getLevel(),f.methodFactory)),t};var p=typeof window!==t?window.log:void 0;return f.noConflict=function(){return typeof window!==t&&window.log===f&&(window.log=p),f},f.getLoggers=function(){return d},f.default=f,f},void 0===(r="function"==typeof o?o.call(t,n,t,e):o)||(e.exports=r)}()},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(135),r=n.n(o);const i="matrix";function l(e){const t=e;t.getChild=t.withPrefix=function(e){return function(e){const t=r.a.getLogger(`${i}-${e}`);t.prefix!==e&&(l(t),t.prefix=e,t.setLevel(r.a.levels.DEBUG,!1));return t}((this.prefix||"")+e)}}r.a.methodFactory=function(e,t,n){return function(...t){this.prefix&&t.unshift(this.prefix);return"error"===e||"warn"===e||"trace"===e||"info"===e||"debug"===e?console[e](...t):console.log(...t)}};const c=r.a.getLogger(i);c.setLevel(r.a.levels.DEBUG,!1),l(c)},405:function(e,t,n){"use strict";async function o(e=""){""===e||e.endsWith("/")||(e+="/");let t=window.location.hostname.trimEnd();"."===t[t.length-1]&&(t=t.slice(0,-1));const n=r(`${e}config.${t}.json`),o=r(e+"config.json");try{const e=await n;if(!e||0===Object.keys(e).length)throw new Error;return e}catch(e){return o}}async function r(e){const t=new URL(e,window.location.href);t.searchParams.set("cachebuster",Date.now().toString());const n=await fetch(t,{cache:"no-cache",method:"GET"});return 404===n.status||0===n.status?{}:n.ok?n.json():void 0}n.d(t,"a",(function(){return o}))}});
//# sourceMappingURL=mobileguide.js.map