"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[9895],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,d=s["".concat(u,".").concat(f)]||s[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9371:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/about"},i="About",l={type:"mdx",permalink:"/about",source:"@site/src/pages/about.mdx",title:"About",description:"Flakular aims to supplement Zero to Nix with",frontMatter:{slug:"/about"}},u=[{value:"Contributing",id:"contributing",level:2}],p={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"about"},"About"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flakular")," aims to supplement ",(0,o.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/"},"Zero to Nix")," with\nthe goal of introducing people to writing ",(0,o.kt)("em",{parentName:"p"},"modular")," flakes."),(0,o.kt)("p",null,"We begin with explaining the necessary Nix\n",(0,o.kt)("a",{parentName:"p",href:"/foundations"},"foundations")," before proceeding to highlight the various ",(0,o.kt)("a",{parentName:"p",href:"/modules"},"flake\nmodules")," (developed using the ",(0,o.kt)("a",{parentName:"p",href:"https://flake.parts/"},"flake-parts"),"\nframework) that are typically involved in managing software\nprojects and systems."),(0,o.kt)("h2",{id:"contributing"},"Contributing"),(0,o.kt)("p",null,"Documentation for individual modules may live in their respective repositories. We reference them using ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"},"git submodules"),". To modify the documentation for a module, you should:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/juspay/flakular"},"this repository")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"nix develop")," to enter a shell with all the necessary tools"),(0,o.kt)("li",{parentName:"ol"},"Edit one of the ",(0,o.kt)("inlineCode",{parentName:"li"},"ext/*")," folder. For eg., to work on haskell-flake documentation, edit a file under ",(0,o.kt)("inlineCode",{parentName:"li"},"ext/haskell-flake")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"just run")," in the nix shell to run the website locally."),(0,o.kt)("li",{parentName:"ol"},"Once you are done with your changes, commit it to the submodule repository, and then commit the submodule change in this repo.")))}s.isMDXComponent=!0}}]);