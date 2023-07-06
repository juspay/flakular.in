"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/direnv"},o="Using direnv to manage dev environments",l={unversionedId:"practices/direnv",id:"practices/direnv",title:"Using direnv to manage dev environments",description:"direnv, and [nix-direnv] in particular, is an important piece of tool you can use to both persist nix devshell environments and to share it automatically with text editors and IDEs. It also obviates having to run nix develop manually every time you open a new terminal. The moment you cd into your project directory, the devshell is automatically activated, thanks to direnv.",source:"@site/docs/practices/direnv.md",sourceDirName:"practices",slug:"/direnv",permalink:"/direnv",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/practices/direnv.md",tags:[],version:"current",frontMatter:{slug:"/direnv"},sidebar:"tutorialSidebar",previous:{title:"Best Practices",permalink:"/practices"},next:{title:"Building a docker image",permalink:"/docker"}},s={},p=[{value:"Starship",id:"starship",level:2},{value:"Setup",id:"setup",level:2},{value:"Text Editor configuration",id:"text-editor-configuration",level:3},{value:"VSCode",id:"vscode",level:4},{value:"Doom Emacs",id:"doom-emacs",level:4},{value:"<code>.envrc</code>",id:"envrc",level:2},{value:"Reload when .cabal file changes",id:"reload-when-cabal-file-changes",level:2},{value:"External Links",id:"external-links",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-direnv-to-manage-dev-environments"},"Using direnv to manage dev environments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"direnv"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nix-community/nix-direnv"},"nix-direnv")," in particular, is an important piece of tool you can use to both persist nix devshell environments and to share it automatically with text editors and IDEs. It also obviates having to run ",(0,r.kt)("inlineCode",{parentName:"p"},"nix develop")," manually every time you open a new terminal. The moment you ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into your project directory, the devshell is automatically activated, thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv"),". "),(0,r.kt)("h2",{id:"starship"},"Starship"),(0,r.kt)("p",null,"It is recommended to use ",(0,r.kt)("a",{parentName:"p",href:"https://starship.rs/"},"starship")," along with nix-direnv, because it gives a visual indication of the current environment. For example, if you are in a ",(0,r.kt)("inlineCode",{parentName:"p"},"nix develop")," shell, your terminal prompt automatically changes to something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"srid on nixos haskell-template on \ue0a0 master [!] via \u03bb 9.2.6 via \u2744\ufe0f  impure (ghc-shell-for-haskell-template-0.1.0.0-0-env)\n\u276f\n")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"If you use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nix-community/home-manager"},"home-manager"),", both ",(0,r.kt)("inlineCode",{parentName:"p"},"nix-direnv")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"starship")," can be installed using the following configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-nix"},"programs.direnv = {\n  enable = true;\n  nix-direnv = {\n    enable = true;\n  };\n};\nprograms.starship = {\n  enable = true;\n};\n")),(0,r.kt)("p",null,"Alternatively, if you are just getting started with home-manager, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/juspay/nix-dev-home"},"https://github.com/juspay/nix-dev-home")," template (based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/srid/nixos-flake"},"nixos-flake"),"), which works on both Linux or macOS."),(0,r.kt)("h3",{id:"text-editor-configuration"},"Text Editor configuration"),(0,r.kt)("h4",{id:"vscode"},"VSCode"),(0,r.kt)("p",null,"For VSCode, use ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=mkhl.direnv"},"Martin K\xfchl's direnv extension"),"."),(0,r.kt)("h4",{id:"doom-emacs"},"Doom Emacs"),(0,r.kt)("p",null,"Doom Emacs has the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/doomemacs/doomemacs/tree/master/modules/tools/direnv"},(0,r.kt)("inlineCode",{parentName:"a"},":tools")," ",(0,r.kt)("inlineCode",{parentName:"a"},"direnv")," module")," to automatically load the devshell environment when you open the project directory."),(0,r.kt)("h2",{id:"envrc"},(0,r.kt)("inlineCode",{parentName:"h2"},".envrc")),(0,r.kt)("p",null,"To enable direnv on Flake-based projects, add the following to your ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"use flakes\n")),(0,r.kt)("p",null,"Now run ",(0,r.kt)("inlineCode",{parentName:"p"},"direnv allow")," to authorize the current ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")," file. You can now ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the project directory in a terminal and the devshell will be automatically activated."),(0,r.kt)("h2",{id:"reload-when-cabal-file-changes"},"Reload when .cabal file changes"),(0,r.kt)("p",null,"Since both [","[nixpkgs-haskell|nixpkgs]","] and [","[start|haskell-flake]","] use Nix expressions that read the ",(0,r.kt)("inlineCode",{parentName:"p"},".cabal")," file to get dependency information, you will want the devshell be recreated every time a ",(0,r.kt)("inlineCode",{parentName:"p"},".cabal")," file changes. This can be achieved using the ",(0,r.kt)("inlineCode",{parentName:"p"},"nix_direnv_watch_file")," function. Modify your ",(0,r.kt)("inlineCode",{parentName:"p"},".envrc")," to contain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"nix_direnv_watch_file *.cabal\nuse flake\n")),(0,r.kt)("p",null,"As a result of this whenever you change a ",(0,r.kt)("inlineCode",{parentName:"p"},".cabal")," file, direnv will reload the environment. If you are using VSCode, you will see a notification that the environment has changed, prompting you to restart it."),(0,r.kt)("h2",{id:"external-links"},"External Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://determinate.systems/posts/nix-direnv"},"Effortless dev environments with Nix and direnv"))))}u.isMDXComponent=!0}}]);