"use strict";(self.webpackChunkflakular=self.webpackChunkflakular||[]).push([[623],{7810:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=i(5893),t=i(1151);const a={slug:"/tips"},r="Tips",o={id:"tips",title:"Tips",description:"Building all flake outputs locally",source:"@site/docs/tips.mdx",sourceDirName:".",slug:"/tips",permalink:"/tips",draft:!1,unlisted:!1,editUrl:"https://github.com/juspay/flakular.in/edit/main/docs/tips.mdx",tags:[],version:"current",frontMatter:{slug:"/tips"},sidebar:"tutorialSidebar",previous:{title:"Gotchas",permalink:"/gotchas"}},l={},c=[{value:"Building all flake outputs locally",id:"nixci",level:2},{value:"Copying packages to a remote Nix store",id:"nix-copy",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tips",children:"Tips"}),"\n",(0,s.jsx)(n.h2,{id:"nixci",children:"Building all flake outputs locally"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.a,{href:"https://github.com/srid/nixci",children:"nixci"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nix run github:srid/nixci\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can build your flake for a particular system as well,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nix run github:srid/nixci -- --option system aarch64-linux\n"})}),"\n",(0,s.jsx)(n.h2,{id:"nix-copy",children:"Copying packages to a remote Nix store"}),"\n",(0,s.jsx)(n.p,{children:"This is useful if your local machine is powerful and you have built a number of\npackages on it, but want to re-use them on another machine, without using a Nix\ncache or rebuilding them."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nix copy --to ssh-ng://admin@100.96.121.13 /nix/store/???\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you use ",(0,s.jsx)(n.a,{href:"#nixci",children:"nixci"}),", this looks like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"nixci . -- --option system aarch64-linux | xargs nix copy --to ssh-ng://admin@100.96.121.13\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);