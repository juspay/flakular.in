(()=>{"use strict";var e,t,r,o,a,n={},f={};function i(e){var t=f[e];if(void 0!==t)return t.exports;var r=f[e]={exports:{}};return n[e].call(r.exports,r,r.exports,i),r.exports}i.m=n,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(b=0;b<e.length;b++){r=e[b][0],o=e[b][1],a=e[b][2];for(var f=!0,u=0;u<r.length;u++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[u])))?r.splice(u--,1):(f=!1,a<n&&(n=a));if(f){e.splice(b--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var b=e.length;b>0&&e[b-1][2]>a;b--)e[b]=e[b-1];e[b]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);i.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=r(f))Object.getOwnPropertyNames(f).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,i.d(a,n),a},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",97:"60836dc7",117:"356a0ac6",163:"beb9b044",237:"1df93b7f",301:"127a1637",328:"42095dcb",394:"d82feb51",514:"1be78505",593:"ebe313fa",817:"14eb3368",918:"17896441",938:"a1b46b0f"}[e]||e)+"."+{53:"76839c50",85:"dcd93194",97:"0b2fbe00",117:"8ea5ba0c",163:"b1962d76",237:"ae61b47a",301:"8a665d39",328:"78ef9e89",394:"8d04f86e",455:"f8ca2427",514:"d7e80eed",593:"2fa6ef04",817:"dd2c0752",918:"276f1faa",938:"ea8e7ebb",972:"9102c629"}[e]+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="zero-to-flakes:",i.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var f,u;if(void 0!==r)for(var l=document.getElementsByTagName("script"),b=0;b<l.length;b++){var c=l[b];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==a+r){f=c;break}}f||(u=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",a+r),f.src=e),o[e]=[t];var d=(t,r)=>{f.onerror=f.onload=null,clearTimeout(s);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(r))),t)return t(r)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),u&&document.head.appendChild(f)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",i.gca=function(e){return e={17896441:"918","935f2afb":"53","1f391b9e":"85","60836dc7":"97","356a0ac6":"117",beb9b044:"163","1df93b7f":"237","127a1637":"301","42095dcb":"328",d82feb51:"394","1be78505":"514",ebe313fa:"593","14eb3368":"817",a1b46b0f:"938"}[e]||e,i.p+i.u(e)},(()=>{var e={303:0,532:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=i.p+i.u(t),f=new Error;i.l(n,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+t,t)}},i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],f=r[1],u=r[2],l=0;if(n.some((t=>0!==e[t]))){for(o in f)i.o(f,o)&&(i.m[o]=f[o]);if(u)var b=u(i)}for(t&&t(r);l<n.length;l++)a=n[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(b)},r=self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();