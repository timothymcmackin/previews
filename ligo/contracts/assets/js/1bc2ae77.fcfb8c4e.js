"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||c;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var c=t.length,o=new Array(c);o[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<c;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48720:(e,n,t)=>{t.d(n,{D:()=>i.Z,Z:()=>c});var r=t(67294),i=t(75402);const c=function(e){return r.createElement(i.Z.Consumer,null,(n=>{let{syntax:t}=n;return t===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},88610:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),i=(t(67294),t(3905)),c=t(48720);const o={id:"recursion",title:"Recursion"},a=void 0,s={unversionedId:"functions/recursion",id:"functions/recursion",title:"Recursion",description:"As in OCaml, recursive functions are defined using the let rec",source:"@site/../docs/functions/recursion.md",sourceDirName:"functions",slug:"/functions/recursion",permalink:"/previews/ligo/contracts/docs/next/functions/recursion",draft:!1,tags:[],version:"current",frontMatter:{id:"recursion",title:"Recursion"},sidebar:"docs",previous:{title:"Inlining",permalink:"/previews/ligo/contracts/docs/next/functions/inlining"},next:{title:"Looping",permalink:"/previews/ligo/contracts/docs/next/imperative/looping"}},u={},l=[],p={toc:l};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("p",null,"As in OCaml, recursive functions are defined using the ",(0,i.kt)("inlineCode",{parentName:"p"},"let rec"),"\nkeywords:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=recursion",group:"recursion"},"let rec sum (n, acc : int * int) : int =\n  if n < 1 then acc else sum (n-1, acc + n)\n\nlet rec fibonacci (n, n_1, n_0 : int * int * int) : int =\n  if n < 2 then n_1 else fibonacci (n-1, n_1 + n_0, n_1)\n"))),(0,i.kt)(c.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("p",null,"Recursive functions are defined and called using the same syntax as\nnon-recursive functions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=recursion",group:"recursion"},"function sum (n: int, acc: int) : int {\n  if (n < 1) return acc else return sum (n-1, acc + n);\n};\n\nfunction fibonacci (n: int, n_1: int, n_0: int): int {\n  if (n < 2) return n_1 else return fibonacci (n-1, n_1 + n_0, n_1);\n};\n")),(0,i.kt)("p",null,"This means that all values, including functions, declared in the same\nblock or top-level scope, must have different names, because they can\nall potentially be mutually recursive.")))}f.isMDXComponent=!0}}]);