!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.deviceDetect=t():e.deviceDetect=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const r=window.navigator.userAgent,o=(e=>e.match(/(iPhone)/)?"iPhone":e.match(/(iPad)/)?"iPad":e.match(/(iPod)/)?"iPod":e.match(/(BlackBerry|BB10)/)?"BlackBerry":e.match(/(IEMobile)/)?"WindowsMobile":e.match(/(Android)/)?"Android":e.match(/(Macintosh)/)?"Macintosh":e.match(/(Windows)/)?"Windows":e.match(/(Linux)/)?"Linux":void 0)(r),i=(e=>e.indexOf("OPR")>0||e.indexOf("Opera")>0?"Opera":e.indexOf("MSIE ")>0?"deprecatedIE":e.indexOf("Trident/")>0?"IE11":e.indexOf("Edge/")>0?"Edge":e.indexOf("Chrome")>0?"Chrome":e.indexOf("Firefox")>0?"Firefox":e.indexOf("Safari")>0?"Safari":void 0)(r),d="Safari"===i?parseInt(r.match(/Version\/(.*)? /)[1]):void 0;t.default={device:o,browser:i,version:d}}])}));