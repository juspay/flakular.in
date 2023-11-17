"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[6066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:1,slug:"/store"},o="The Nix Store",s={unversionedId:"foundations/nix-store",id:"foundations/nix-store",title:"The Nix Store",description:"Write this to completion.",source:"@site/docs/foundations/nix-store.md",sourceDirName:"foundations",slug:"/store",permalink:"/store",draft:!1,editUrl:"https://github.com/juspay/flakular.in/edit/main/docs/foundations/nix-store.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/store"},sidebar:"tutorialSidebar",previous:{title:"Foundations",permalink:"/foundations"},next:{title:"The Nix Language",permalink:"/lang"}},l={},p=[{value:"Kitchen analogy",id:"kitchen-analogy",level:2},{value:"Interactive exploration",id:"interactive-exploration",level:2},{value:"Exercises",id:"exercises",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-nix-store"},"The Nix Store"),(0,i.kt)("admonition",{title:"TODO",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Write this to completion.")),(0,i.kt)("p",null,"Nix is purely functional but in ",(0,i.kt)("a",{parentName:"p",href:"https://www.tweag.io/blog/2022-07-14-taming-unix-with-nix/"},"the context of file system")," (as opposed to values stored in memory). As such, how this file system is structured (called the ",(0,i.kt)("em",{parentName:"p"},"Nix Store"),") is the first foundational concept to understand."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Nix store")," is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/nix/store")," directory by default. The contents of this directory are called ",(0,i.kt)("strong",{parentName:"p"},"store paths"),". For eg., ",(0,i.kt)("inlineCode",{parentName:"p"},"/nix/store/05p0my9hlc33iamk3rzg61rgg1fhrf7w-haskell-template-0.1.0.0")," is a store path. Thus a Nix store is simply a collection of store paths. The nix build process largely involves transformation of these store paths to produce further new store paths."),(0,i.kt)("admonition",{title:"TODO: Diagram",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"File system diagram of Nix store"),(0,i.kt)("li",{parentName:"ul"},"Entities connected to one another."))),(0,i.kt)("h2",{id:"kitchen-analogy"},"Kitchen analogy"),(0,i.kt)("p",null,"Let's try a real-world analogy to understand the Nix store."),(0,i.kt)("p",null,"If the ",(0,i.kt)("em",{parentName:"p"},"Nix store")," is the kitchen, then the ",(0,i.kt)("em",{parentName:"p"},"store paths")," are the various objects in it -- foodstuff, ingredients, recipe booklets, cooked food, dinner servings, etc. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg/2560px-Burger_King_Quad_Stacker_cheeseburger.jpg",alt:"Cheeseburger"})),(0,i.kt)("p",null,"Let's say you want to cook a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cheeseburger"},"cheeseburger"),". In Nix-speak, we say that we want to ",(0,i.kt)("em",{parentName:"p"},"build")," the cheeseburger ",(0,i.kt)("em",{parentName:"p"},"package"),". To cook (build) the cheeseburger, however, we need a receipe first. In Nix-speak, we call this recipe a ",(0,i.kt)("em",{parentName:"p"},"derivation"),". Both packages and derivations are ",(0,i.kt)("em",{parentName:"p"},"store paths")," that exist in the Nix store; the Nix store uniformly treats them as store paths, with no special treatment. Likewise, both the cheeseburger recipe (as a paper document) and the cheeseburger itself (as a cooked food) exist in your kitchen as physical objects."),(0,i.kt)("admonition",{title:"TODO: Analogy table",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A tabular comparison of the terms, establishing nomenclature for rest of article.")),(0,i.kt)("p",null,"..."),(0,i.kt)("admonition",{title:"TODO: Diagram",type:"caution"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Kitchen recipes"),(0,i.kt)("li",{parentName:"ul"},"Sharing recipes with neighbours"))),(0,i.kt)("h2",{id:"interactive-exploration"},"Interactive exploration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"TODO: nix commands to explore/manipulate the store directly\n\nnix store add-file\nnix store add-path\nnix store delete\nnix store prefetch-file\n")),(0,i.kt)("p",null,"Creating a recipe (derivation)"),(0,i.kt)("p",null,"There is a ",(0,i.kt)("inlineCode",{parentName:"p"},"nix derivation add")," command to create a derivation via JSON, but let's use the ",(0,i.kt)("a",{parentName:"p",href:"/lang"},"Nix language")," to do this, in the REPL (using the bulitin function ",(0,i.kt)("inlineCode",{parentName:"p"},"derivation"),"), as it is more convenient."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'$ nix repl\n\nnix-repl> drv = derivation { \n        name = "hello"; \n        builder = "/bin/bash"; \n        system = "aarch64-darwin"; \n        args = [ "-c" "echo Hello > $out"]; \n    }\n\nnix-repl> drv\n\xabderivation /nix/store/2dc96vagivg3h45sbkr2jrl31xnmdj2c-hello.drv\xbb\n\nnix-repl> :b drv\nThis derivation produced the following outputs:\n  out -> /nix/store/gaarvnj99dcfx8c8wnvfsqzql2fj5d65-hello\n\n')),(0,i.kt)("p",null,"Here ",(0,i.kt)("inlineCode",{parentName:"p"},"/nix/store/2dc96vagivg3h45sbkr2jrl31xnmdj2c-hello.drv"),' is the derivation (or "recipe"). Building (or "cooking") it gives us the package (or "cooked food") ',(0,i.kt)("inlineCode",{parentName:"p"},"/nix/store/gaarvnj99dcfx8c8wnvfsqzql2fj5d65-hello"),". Note that both the derivation and the package are just ",(0,i.kt)("em",{parentName:"p"},"store paths"),'. The recipe itself does nothing fancy, aside from creating a file with the contents "Hello" in it. In Nix of course it is possible to create derivations that build an entire Linux distribution (',(0,i.kt)("a",{parentName:"p",href:"/nixos-flake"},"NixOS"),'), just as one might gather up a set of recipes to cook for a big party resulting in a big feast (the final "package").'),(0,i.kt)("p",null,"A derivation can use outputs of another derivation, just as a recipe can use the product of another recipe:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'# Uses the derivation defined above, by referencing `${drv}` that points to the\n# out path of that derivation\nnix-repl> :b derivation { \n        name = "hello-world"; \n        builder = "/bin/bash"; \n        system = "aarch64-darwin"; \n        args = [ "-c" "/bin/cat ${drv} > $out; echo World >> $out"]; \n    }\nThis derivation produced the following outputs:\n  out -> /nix/store/nw7fyal65xfzbhaqxjgfm9i4m4fyd92l-hello-world\n')),(0,i.kt)("admonition",{title:"Tip",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are more convenient ways to write derivations, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"stdenv.mkDerivation"),". We'll expore these in the ",(0,i.kt)("a",{parentName:"p",href:"/lang"},"Nix language")," section.")),(0,i.kt)("h2",{id:"exercises"},"Exercises"),(0,i.kt)("p",null,"TODO"))}d.isMDXComponent=!0}}]);