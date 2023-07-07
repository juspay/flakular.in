"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[24],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={slug:"/gotchas"},i="Gotchas",c={unversionedId:"gotchas",id:"gotchas",title:"Gotchas",description:"Nix can behave unexpectedly in certain cases.",source:"@site/docs/gotchas.mdx",sourceDirName:".",slug:"/gotchas",permalink:"/gotchas",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/gotchas.mdx",tags:[],version:"current",frontMatter:{slug:"/gotchas"},sidebar:"tutorialSidebar",previous:{title:"Building a docker image",permalink:"/docker"}},s={},l=[{value:"Nix does not recognize a new file I added",id:"nix-does-not-recognize-a-new-file-i-added",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gotchas"},"Gotchas"),(0,o.kt)("p",null,"Nix can behave unexpectedly in certain cases."),(0,o.kt)("h2",{id:"nix-does-not-recognize-a-new-file-i-added"},"Nix does not recognize a new file I added"),(0,o.kt)("p",null,"Often you'll see an error like this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"error: getting status of '/nix/store/vlks3d7fr5ywc923pvqacx2bkzm1782j-source/foo': No such file or directory\n")),(0,o.kt)("p",null,"This usually mean you have not staged this new file or directory to the Git\nindex. When using flakes, Nix will not see untracked files by default. See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nix/issues/8389"},"https://github.com/NixOS/nix/issues/8389")))}d.isMDXComponent=!0}}]);