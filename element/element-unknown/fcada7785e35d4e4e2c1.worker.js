!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){if(e.length===t)return e;const n=[];if(e.length>t){const r=Math.round(e.length/t);for(let t=0;t<e.length;t+=r)n.push(e[t])}else{const r=Math.ceil(t/e.length);for(const t of e)n.push(...u(t,r))}return r=n,o=t,l=u(e[e.length-1],t),r.length===o?r:r.length>o?r.slice(0,o):r.concat(l.slice(0,o-r.length));var r,o,l}function o(e,t,n){const r=Math.min(...e),o=Math.max(...e);return e.map((e=>function(e,t,n){return e*(n-t)+t}(function(e,t,n){const r=(e-t)/(n-t);return Number.isNaN(r)?0:r}(e,r,o),t,n)))}function u(e,t){return new Array(t).fill(e)}n.r(t);u(0,39);const l=self;l.addEventListener("message",(async e=>{const{seq:t,data:n}=e.data,u=o(function(e,t){if(e.length===t)return e;let n=[];if(e.length>t){for(;n.length>2*t||0===n.length;){n=[];for(let t=1;t<e.length-1;t+=2){const r=(e[t-1]+e[t+1]+e[t])/3;n.push(r)}e=n}return r(n,t)}return r(e,t)}(n.map((e=>Math.abs(e))),39),0,1);l.postMessage({seq:t,waveform:u})}))}]);
//# sourceMappingURL=fcada7785e35d4e4e2c1.worker.js.map