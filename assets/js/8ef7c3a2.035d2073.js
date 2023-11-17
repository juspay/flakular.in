"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[9988],{3905:(e,a,n)=>{n.d(a,{Zo:()=>k,kt:()=>d});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=t.createContext({}),p=function(e){var a=t.useContext(r),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},k=function(e){var a=p(e.components);return t.createElement(r.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,d=c["".concat(r,".").concat(h)]||c[h]||u[h]||i;return n?t.createElement(d,s(s({ref:a},k),{},{components:n})):t.createElement(d,s({ref:a},k))}));function d(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var r in a)hasOwnProperty.call(a,r)&&(o[r]=a[r]);o.originalType=e,o[c]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8181:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const i={slug:"/nixpkgs-haskell"},s="Nixifying a Haskell project using nixpkgs",o={unversionedId:"foundations/flakes/nixpkgs-haskell",id:"foundations/flakes/nixpkgs-haskell",title:"Nixifying a Haskell project using nixpkgs",description:"This tutorial enables you to write a flake using nothing but nixpkgs] to nixify an existing Haskell project. The tutorial serves a pedagogic purpose; in the real-world scenario, we recommend that you use [haskell-flake.",source:"@site/docs/foundations/flakes/nixpkgs-haskell.md",sourceDirName:"foundations/flakes",slug:"/nixpkgs-haskell",permalink:"/nixpkgs-haskell",draft:!1,editUrl:"https://github.com/juspay/flakular.in/edit/main/docs/foundations/flakes/nixpkgs-haskell.md",tags:[],version:"current",frontMatter:{slug:"/nixpkgs-haskell"},sidebar:"tutorialSidebar",previous:{title:"Flakes",permalink:"/flakes"},next:{title:"Module System",permalink:"/mod"}},r={},p=[{value:"callCabal2nix",id:"callcabal2nix",level:2},{value:"Package sets",id:"package-sets",level:2},{value:"Overlays",id:"overlays",level:3},{value:"Development shell",id:"development-shell",level:2},{value:"Haskell shell",id:"haskell-shell",level:3},{value:"Example",id:"example",level:2}],k={toc:p},c="wrapper";function u(e){let{components:a,...n}=e;return(0,l.kt)(c,(0,t.Z)({},k,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nixifying-a-haskell-project-using-nixpkgs"},"Nixifying a Haskell project using nixpkgs"),(0,l.kt)("p",null,"This tutorial enables you to write a flake using nothing but ",(0,l.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," to nixify an existing Haskell project. The tutorial serves a pedagogic purpose; in the real-world scenario, we recommend that you use ",(0,l.kt)("a",{parentName:"p",href:"/haskell-flake/start"},"haskell-flake"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," provides two important functions for developing Haskell projects that we'll extensively use here. They are ",(0,l.kt)("inlineCode",{parentName:"p"},"callCabal2nix")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"shellFor"),", and are described below."),(0,l.kt)("admonition",{title:"To learn more",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nixpkgs/unstable/#haskell"},"Official manual")))),(0,l.kt)("h2",{id:"callcabal2nix"},"callCabal2nix"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nixpkgs/blob/master/pkgs/development/haskell-modules/make-package-set.nix"},(0,l.kt)("inlineCode",{parentName:"a"},"callCabal2nix"))," produces a derivation for building a Haskell package from source. This source can be any path, including a local directory (eg.: ",(0,l.kt)("inlineCode",{parentName:"p"},"./."),") or a flake input. We'll use ",(0,l.kt)("inlineCode",{parentName:"p"},"callCabal2nix")," to build a package from source during overriding the Haskell package set using overlays (see below)."),(0,l.kt)("h2",{id:"package-sets"},"Package sets"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," also provides a Haskell package set (built, in part, from Stackage but also Hackage) for each GHC compiler version. The default compiler's package set is provided in ",(0,l.kt)("inlineCode",{parentName:"p"},"pkgs.haskellPackages"),". In the repl session below, we locate and build the ",(0,l.kt)("inlineCode",{parentName:"p"},"aeson")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"\u276f nix repl github:nixos/nixpkgs/nixpkgs-unstable\nnix-repl> pkgs = legacyPackages.${builtins.currentSystem}\n\nnix-repl> pkgs.haskellPackages.aeson\n\xabderivation /nix/store/sjaqjjnizd7ybirh94ixs51x4n17m97h-aeson-2.0.3.0.drv\xbb\n\nnix-repl> :b pkgs.haskellPackages.aeson\n\nThis derivation produced the following outputs:\n  doc -> /nix/store/xjvm45wxqasnd5p2kk9ngcc0jbjhx1pf-aeson-2.0.3.0-doc\n  out -> /nix/store/1dc6b11k93a6j9im50m7qj5aaa5p01wh-aeson-2.0.3.0\n")),(0,l.kt)("h3",{id:"overlays"},"Overlays"),(0,l.kt)("admonition",{title:"To learn more",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nixos.wiki/wiki/Overlays"},"NixOS Wiki on Overlays")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/NixOS/nixpkgs/blob/master/lib/fixed-points.nix"},"Overlay implementation in fixed-points.nix")))),(0,l.kt)("p",null,"Using the overlay system, you can ",(0,l.kt)("em",{parentName:"p"},"extend")," this package set, to either add new packages or override existing ones. The package set exposes a function called ",(0,l.kt)("inlineCode",{parentName:"p"},"extend")," for this purpose. In the repl session below, we extend the default Haskell package set to override the ",(0,l.kt)("inlineCode",{parentName:"p"},"shower")," package to be built from the Git repo instead:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},'nix-repl> :b pkgs.haskellPackages.shower\n\nThis derivation produced the following outputs:\n  doc -> /nix/store/crzcx007h9j0p7qj35kym2rarkrjp9j1-shower-0.2.0.3-doc\n  out -> /nix/store/zga3nhqcifrvd58yx1l9aj4raxhcj2mr-shower-0.2.0.3\n\nnix-repl> myHaskellPackages = pkgs.haskellPackages.extend \n    (self: super: {\n       shower = self.callCabal2nix "shower" \n         (pkgs.fetchgit { \n            url = "https://github.com/monadfix/shower.git";\n            rev = "2d71ea1"; \n            sha256 = "sha256-vEck97PptccrMX47uFGjoBVSe4sQqNEsclZOYfEMTns="; \n         }) {}; \n    })\n\nnix-repl> :b myHaskellPackages.shower\n\nThis derivation produced the following outputs:\n  doc -> /nix/store/vkpfbnnzyywcpfj83pxnj3n8dfz4j4iy-shower-0.2.0.3-doc\n  out -> /nix/store/55cgwfmayn84ynknhg74bj424q8fz5rl-shower-0.2.0.3\n')),(0,l.kt)("p",null,"Notice how we used ",(0,l.kt)("inlineCode",{parentName:"p"},"callCabal2nix")," to build a new Haskell package from the source (located in the specified Git repository)."),(0,l.kt)("h2",{id:"development-shell"},"Development shell"),(0,l.kt)("p",null,"A Haskell development environment can be provided in one of the two ways. The native way will use the (language-independent) ",(0,l.kt)("inlineCode",{parentName:"p"},"mkShell")," function (Generic shell). However to get full IDE support, it is best to use the (haskell-specific) ",(0,l.kt)("inlineCode",{parentName:"p"},"shellFor")," function (Haskell shell)."),(0,l.kt)("h3",{id:"haskell-shell"},"Haskell shell"),(0,l.kt)("admonition",{title:"To learn more",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nixpkgs/unstable/#haskell-shellFor"},"Official manual on ",(0,l.kt)("inlineCode",{parentName:"a"},"shellFor"))))),(0,l.kt)("p",null,'Suppose we have a Haskell project called "foo" with ',(0,l.kt)("inlineCode",{parentName:"p"},"foo.cabal"),". You would create the development shell for this project as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},"devShells.default = pkgs.haskellPackages.shellFor {\n  packages = p: [\n    p.foo\n  ];\n  buildInputs = with pkgs.haskellPackages; [\n    ghcid\n    cabal-install\n    haskell-language-server\n  ];\n}\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"packages")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"shellFor")," simply indicates that the given packages are available locally in the flake root, and that ",(0,l.kt)("inlineCode",{parentName:"p"},"cabal")," should build them from the local source (rather than using the Nix store derivation for example). The ",(0,l.kt)("inlineCode",{parentName:"p"},"buildInputs")," argument is similar to that of ",(0,l.kt)("inlineCode",{parentName:"p"},"mkShell")," -- it allows you to specify the packages you want to be made available in the development shell."),(0,l.kt)("p",null,"From inside of ",(0,l.kt)("inlineCode",{parentName:"p"},"nix develop")," shell, launch your pre-configured text editor (for example, VSCode with the ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=haskell.haskell"},"Haskell extension")," installed). You should have full IDE support."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"The flake for ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/srid/haskell-multi-nix"},"haskell-multi-nix"),' is presented below. This project has two Haskell packages "foo" and "bar".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";\n  };\n  outputs = { self, nixpkgs, ... }:\n    let\n      # TODO: Change this to your current system, or use flake-utils/flake-parts.\n      system = "aarch64-darwin";\n      pkgs = nixpkgs.legacyPackages.${system};\n      overlay = self: super: {\n        # Local packages in the repository\n        foo = self.callCabal2nix "foo" ./foo { };\n        bar = self.callCabal2nix "bar" ./bar { };\n        # TODO: Put any library dependency overrides here\n      };\n      # Extend the `pkgs.haskellPackages` attrset using an overlay.\n      #\n      # Note that we can also extend the package set using more than one\n      # overlay. To do that we can either chain the `extend` calls or use\n      # the `composeExtensions` (or `composeManyExtensions`) function to\n      # merge the overlays.\n      haskellPackages\' = pkgs.haskellPackages.extend overlay;\n    in\n    {\n      packages.${system} = {\n        inherit (haskellPackages\') foo bar;\n        default = haskellPackages\'.bar;\n      };\n      # This is how we provide a multi-package dev shell in Haskell.\n      # By using the `shellFor` function.\n      devShells.${system}.default = haskellPackages\'.shellFor {\n        packages = p: [\n          p.foo\n          p.bar\n        ];\n        buildInputs = with haskellPackages\'; [\n          ghcid\n          cabal-install\n          haskell-language-server\n        ];\n      };\n    };\n}\n')),(0,l.kt)("p",null,"You can confirm that the package builds by running either ",(0,l.kt)("inlineCode",{parentName:"p"},"nix build .#foo")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"nix build .#bar"),", as well as that IDE support is configured correctly by running ",(0,l.kt)("inlineCode",{parentName:"p"},"nix develop -c haskell-language-server"),"."),(0,l.kt)("p",null,"A variation of this flake supporting multiple systems (via use of flake-parts) can be found ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/srid/haskell-multi-nix/blob/nixpkgs/flake.nix"},"here"),"."))}u.isMDXComponent=!0}}]);