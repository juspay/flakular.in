"use strict";(self.webpackChunkzero_to_flakes=self.webpackChunkzero_to_flakes||[]).push([[530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(t),d=i,c=k["".concat(p,".").concat(d)]||k[d]||m[d]||l;return t?a.createElement(c,r(r({ref:n},u),{},{components:t})):a.createElement(c,r({ref:n},u))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[k]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3982:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const l={slug:"/nix-rapid"},r="Rapid Introduction to Nix",o={unversionedId:"intro/nix-rapid",id:"intro/nix-rapid",title:"Rapid Introduction to Nix",description:"This is a legacy tutorial. We'll cover the topics in detail under Foundations.",source:"@site/docs/intro/nix-rapid.md",sourceDirName:"intro",slug:"/nix-rapid",permalink:"/nix-rapid",draft:!1,editUrl:"https://github.com/juspay/zero-to-flakes/tree/main/docs/intro/nix-rapid.md",tags:[],version:"current",frontMatter:{slug:"/nix-rapid"},sidebar:"tutorialSidebar",previous:{title:"Install Nix",permalink:"/install"},next:{title:"Foundations",permalink:"/foundations"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Attrset",id:"attrset",level:2},{value:"repl",id:"repl",level:2},{value:"Flakes",id:"flakes",level:2},{value:"Graph",id:"graph",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Predefined outputs",id:"predefined-outputs",level:3},{value:"Packages",id:"packages",level:4},{value:"DevShells",id:"devshells",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"See also",id:"see-also",level:2}],u={toc:s},k="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rapid-introduction-to-nix"},"Rapid Introduction to Nix"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is a legacy tutorial. We'll cover the topics in detail under ",(0,i.kt)("a",{parentName:"p",href:"../foundations"},"Foundations"),".")),(0,i.kt)("p",null,"The goal of this document is to introduce you to Nix as quickly as possible while also preparing the motivated learner to dive deeper into ",(0,i.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/"},"the whole Nix ecosystem"),". At the end of this introduction, you will be able to create a flake for building a package and providing a developer environment shell."),(0,i.kt)("p",null,"If you are already experienced in purely functional programming, it is highly recommended to read ",(0,i.kt)("a",{parentName:"p",href:"https://www.tweag.io/blog/2022-07-14-taming-unix-with-nix/"},"Nix - taming Unix with functional programming")," to gain a foundational perspective into Nix being purely functional but in the context of file system (as opposed to values stored in memory)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Dolstra proposed that we can treat the file system in an operating system like memory in a running program, and equate package management to memory management")),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Nix can be installed on Linux and macOS. Follow the instructions on [","[nix]","]. If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/"},"NixOS"),", it already comes with Nix pre-installed."),(0,i.kt)("h2",{id:"attrset"},"Attrset"),(0,i.kt)("p",null,":::{.more}\nTo learn more:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nix/stable/language/values.html#attribute-set"},"Official manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nix.dev/tutorials/nix-language#attribute-set"},"nix.dev on attrsets"),"\n:::")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/language/index.html"},"Nix programming language"),' provides a lot of general constructs. But at its most basic use, it makes heavy use of ==nested hash maps==, otherwise called an "attrset". They are equivalent to ',(0,i.kt)("a",{parentName:"p",href:"https://hackage.haskell.org/package/containers-0.6.7/docs/Data-Map-Strict.html#t:Map"},(0,i.kt)("inlineCode",{parentName:"a"},"Map Text a"))," in Haskell. The following is a simple example of an attrset:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  foo = {\n    bar = 1;\n  };\n}\n")),(0,i.kt)("p",null,"We have an outer attrset with a single key ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", whose value is another attrset with a single key ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," and a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h2",{id:"repl"},"repl"),(0,i.kt)("p",null,"Nix expressions can be readily evaluated in the ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/unstable/command-ref/new-cli/nix3-repl.html"},"Nix repl"),". To start the repl, run ",(0,i.kt)("inlineCode",{parentName:"p"},"nix repl"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix repl\nWelcome to Nix 2.12.0. Type :? for help.\n\nnix-repl>\n")),(0,i.kt)("p",null,"You can then evaluate expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"nix-repl> 2+3\n5\n\nnix-repl> x = { foo = { bar = 1; }; }\n\nnix-repl> x\n{ foo = { ... }; }\n\nnix-repl> x.foo\n{ bar = 1; }\n\nnix-repl> x.foo.bar\n1\n\nnix-repl>\n")),(0,i.kt)("h2",{id:"flakes"},"Flakes"),(0,i.kt)("p",null,":::{.more}\nTo learn more:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://serokell.io/blog/practical-nix-flakes#basic-flake-structure"},"Serokell Blog: Basic flake structure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.wiki/wiki/Flakes#Enable_flakes"},"Enable flakes")," (flakes are not enabled by default)\n:::")),(0,i.kt)("p",null,"A Nix flake is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"flake.nix"),' file, which denotes an attrset containing the keys "inputs" and "outputs". ',(0,i.kt)("em",{parentName:"p"},"Outputs")," can reference ",(0,i.kt)("em",{parentName:"p"},"inputs"),". Thus, changing an ",(0,i.kt)("em",{parentName:"p"},"input")," can change the ",(0,i.kt)("em",{parentName:"p"},"outputs"),". The following is a simple example of a flake:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},"{\n  inputs = { };\n\n  outputs = inputs: {\n    foo = 42;\n  };\n}\n")),(0,i.kt)("p",null,"This flake has zero ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/language/constructs.html#functions"},"function")," that takes the (realised) inputs as an argument and returns the final output attrset. This output attrset, in our example, has a single key ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"42"),"."),(0,i.kt)("p",null,"We can use the ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake-show.html"},(0,i.kt)("inlineCode",{parentName:"a"},"nix flake show"))," command to see the output structure of a flake:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix flake show\npath:/Users/srid/code/nixplay?lastModified=1675373998&narHash=sha256-ifNiFGU1VV784kVcssn2rXIil%2feHfMLhPfmvaELefwA=\n\u2514\u2500\u2500\u2500foo: unknown\n$\n")),(0,i.kt)("p",null,"And we can use ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-eval.html"},(0,i.kt)("inlineCode",{parentName:"a"},"nix eval"))," to evaluate any output. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix eval .#foo\n42\n")),(0,i.kt)("h3",{id:"graph"},"Graph"),(0,i.kt)("p",null,"A flake can refer to other flakes in its inputs. Phrased differently, a flake's outputs can be used as inputs in other flakes. The most common example is the ",(0,i.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/concepts/nixpkgs"},"nixpkgs")," flake which gets used as an input in most flakes. Intuitively, you may visualize a flake to be a node in a larger graph, with inputs being the incoming arrows and outputs being the outgoing arrows."),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,":::{.more}\nTo learn more,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#url-like-syntax"},"URL-like syntax")," used by the ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," attribute\n:::")),(0,i.kt)("p",null,"Let's do something more interesting with our ",(0,i.kt)("inlineCode",{parentName:"p"},"flake.nix")," by adding the nixpkgs input:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";\n  };\n\n  outputs = inputs: {\n    # Note: If you are macOS, substitute `x86_64-linux` with `aarch64-darwin`\n    foo = inputs.nixpkgs.legacyPackages.x86_64-linux.cowsay;\n  };\n}\n')),(0,i.kt)("p",null,"The nixpkgs flake has an output called ",(0,i.kt)("inlineCode",{parentName:"p"},"legacyPackages"),', which is indexed by the platform (called "system" in Nix-speak), further containing all the packages for that system. We assign that package to our flake output key ',(0,i.kt)("inlineCode",{parentName:"p"},"foo"),". "),(0,i.kt)("p",null,":::{.tip}\n",(0,i.kt)("strong",{parentName:"p"},"Tip"),":"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/unstable/command-ref/new-cli/nix3-repl.html"},(0,i.kt)("inlineCode",{parentName:"a"},"nix repl"))," to explore the outputs of any flake, using TAB completion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix repl --extra-experimental-features 'flakes repl-flake' github:nixos/nixpkgs/nixpkgs-unstable\nWelcome to Nix 2.12.0. Type :? for help.\n\nLoading installable 'github:nixos/nixpkgs/nixpkgs-unstable#'...\nAdded 5 variables.\nnix-repl> legacyPackages.aarch64-darwin.cowsay\n\xabderivation /nix/store/0s2vdpkpdiljmh8y06xgdw5vg2cqfs0m-cowsay-3.7.0.drv\xbb\n\nnix-repl>\n")),(0,i.kt)("p",null,":::"),(0,i.kt)("h3",{id:"predefined-outputs"},"Predefined outputs"),(0,i.kt)("p",null,"Nix commands treat certain outputs as special. These are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output"),(0,i.kt)("th",{parentName:"tr",align:null},"Nix command"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"packages")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nix build")),(0,i.kt)("td",{parentName:"tr",align:null},"Derivation output")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"devShells")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nix develop")),(0,i.kt)("td",{parentName:"tr",align:null},"Development shells")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apps")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nix run")),(0,i.kt)("td",{parentName:"tr",align:null},"Runnable applications")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"checks")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nix flake check")),(0,i.kt)("td",{parentName:"tr",align:null},"Tests and checks")))),(0,i.kt)("p",null,'All of these predefined outputs are further indexed by the "system" value. '),(0,i.kt)("h4",{id:"packages"},"Packages"),(0,i.kt)("p",null,":::{.more}\nTo learn more,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nixpkgs/stable/#sec-using-stdenv"},(0,i.kt)("inlineCode",{parentName:"a"},"pkgs.stdenv.mkDerivation"))," can be used to build a custom package from scratch\n:::")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"packages")," is the most often used output. Let us extend our previous ",(0,i.kt)("inlineCode",{parentName:"p"},"flake.nix")," to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";\n  };\n\n  outputs = inputs: {\n    foo = 42;\n    packages.x86_64-linux = {\n      cowsay = inputs.nixpkgs.legacyPackages.x86_64-linux.cowsay;\n    };\n  };\n}\n')),(0,i.kt)("p",null,"Here, we are producing an output named ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," that is an attrset of systems (currently, only ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64-linux"),") to attrsets of packages. We are definining exactly one package, ",(0,i.kt)("inlineCode",{parentName:"p"},"cowsay"),", for the ",(0,i.kt)("inlineCode",{parentName:"p"},"x86_64-linux")," system. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix flake show\npath:/Users/srid/code/nixplay?lastModified=1675374260&narHash=sha256-FRven09fX3hutGa8+dagOCSQKVYAsHI6BsnCSEQ7PG8=\n\u251c\u2500\u2500\u2500foo: unknown\n\u2514\u2500\u2500\u2500packages\n    \u2514\u2500\u2500\u2500aarch64-darwin\n        \u2514\u2500\u2500\u2500cowsay: package 'cowsay-3.7.0'\n")),(0,i.kt)("p",null,"Notice that ",(0,i.kt)("inlineCode",{parentName:"p"},"nix flake show")," recognizes the ",(0,i.kt)("em",{parentName:"p"},"type")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"packages"),". With ",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", it couldn't (hence type is ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown"),") but with ",(0,i.kt)("inlineCode",{parentName:"p"},"packages"),', it can (hence type is "package").'),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," output is recognized by ",(0,i.kt)("inlineCode",{parentName:"p"},"nix build"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix build .#cowsay\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-build.html"},(0,i.kt)("inlineCode",{parentName:"a"},"nix build"))," command takes as argument a value of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"<flake-url>#<package-name>"),". By default, ",(0,i.kt)("inlineCode",{parentName:"p"},".")," (which is a ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/command-ref/new-cli/nix3-flake.html#url-like-syntax"},"flake URL"),") refers to the current flake. Thus, ",(0,i.kt)("inlineCode",{parentName:"p"},"nix build .#cowsay")," will build the ",(0,i.kt)("inlineCode",{parentName:"p"},"cowsay")," package from the current flake under the current system. ",(0,i.kt)("inlineCode",{parentName:"p"},"nix build")," produces a ",(0,i.kt)("inlineCode",{parentName:"p"},"./result")," symlink that points to the Nix store path containing the package:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./result/bin/cowsay hello\n _______\n< hello >\n -------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n")),(0,i.kt)("p",null,"If you run ",(0,i.kt)("inlineCode",{parentName:"p"},"nix build")," without arguments, it will default to ",(0,i.kt)("inlineCode",{parentName:"p"},".#default"),"."),(0,i.kt)("h4",{id:"devshells"},"DevShells"),(0,i.kt)("p",null,":::{.more}\nTo learn more,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell"},"Official Nix manual")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nixos.wiki/wiki/Development_environment_with_nix-shell"},"NixOS Wiki"),"\n:::")),(0,i.kt)("p",null,"Like ",(0,i.kt)("inlineCode",{parentName:"p"},"packages"),", another predefined flake output is ",(0,i.kt)("inlineCode",{parentName:"p"},"devShells")," - which is used to provide a development shell aka. a nix shell or devshell. A devshell is a sandboxed environment containing the packages and other shell environment you specify. nixpkgs provides a function called ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nixpkgs/stable/#sec-pkgs-mkShell"},(0,i.kt)("inlineCode",{parentName:"a"},"mkShell"))," that can be used to create devshells."),(0,i.kt)("p",null,"As an example, we will update our ",(0,i.kt)("inlineCode",{parentName:"p"},"flake.nix")," to provide a devshell that contains the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/stedolan/jq"},"jq")," tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-nix"},'{\n  inputs = {\n    nixpkgs = {\n      url = "github:NixOS/nixpkgs/nixos-unstable";\n    };\n  };\n  outputs = inputs: {\n    foo = 42;\n    devShells = {  # nix develop\n      aarch64-darwin = {\n        default =\n          let \n            pkgs = inputs.nixpkgs.legacyPackages.aarch64-darwin;\n          in pkgs.mkShell {\n            nativeBuildInputs = [\n              pkgs.jq\n            ];\n          };\n      };\n    };\n  };\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"nix flake show"),' will recognize this output as a "development environmenet":'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix flake show\npath:/Users/srid/code/nixplay?lastModified=1675448105&narHash=sha256-dikTfYD1wbjc+vQ+IUTMXWv%2fm%2f7qb91Hk3ip5MNefeU=\n\u251c\u2500\u2500\u2500devShells\n\u2502   \u2514\u2500\u2500\u2500aarch64-darwin\n\u2502       \u2514\u2500\u2500\u2500default: development environment 'nix-shell'\n\u2514\u2500\u2500\u2500foo: unknown\n")),(0,i.kt)("p",null,"Just as ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," can be built using ",(0,i.kt)("inlineCode",{parentName:"p"},"nix build"),", you can enter the devshell using ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/unstable/command-ref/new-cli/nix3-develop.html"},(0,i.kt)("inlineCode",{parentName:"a"},"nix develop")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ nix develop\n\u276f which jq\n/nix/store/33n0kx526i5dnv2gf39qv1p3a046p9yd-jq-1.6-bin/bin/jq\n\u276f echo '{\"foo\": 42}' | jq .foo\n42\n\u276f \n")),(0,i.kt)("p",null,"Typing ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl+D")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"exit")," will exit the devshell."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This mini tutorial provided a rapid introduction to Nix flakes, enabling you to get started with writing simple flake for your projects. Consult the links above for more information. There is a lot more to Nix than the concepts presented here! You can also read ",(0,i.kt)("a",{parentName:"p",href:"https://zero-to-nix.com/"},"Zero to Nix")," for a highlevel introduction to all things Nix and flakes."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tazjin/nix-1p"},"A (more or less) one page introduction to Nix, the language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tweag.io/blog/2022-07-14-taming-unix-with-nix/"},"Nix - taming Unix with functional programming"))))}m.isMDXComponent=!0}}]);