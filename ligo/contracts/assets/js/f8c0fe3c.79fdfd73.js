"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>a.Z,Z:()=>i});var r=n(67294),a=n(75402);const i=function(e){return r.createElement(a.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},17638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(48720);const o={id:"mutating",title:"Mutating"},s=void 0,l={unversionedId:"imperative/mutating",id:"version-1.6.0/imperative/mutating",title:"Mutating",description:"In imperative programming, the state is modified in place by",source:"@site/versioned_docs/version-1.6.0/imperative/mutating.md",sourceDirName:"imperative",slug:"/imperative/mutating",permalink:"/docs/1.6.0/imperative/mutating",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"mutating",title:"Mutating"},sidebar:"docs",previous:{title:"Matching",permalink:"/docs/1.6.0/variants/matching"},next:{title:"Looping",permalink:"/docs/1.6.0/imperative/looping"}},c={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("em",{parentName:"p"},"imperative programming"),", the state is modified in place by\ninstructions, instead of new versions of values being constructed. A\ntypical example of imperative programming is loops."),(0,a.kt)("p",null,"LIGO features mutable variables, that is, variables whose values can\nbe reassigned --- contrary to constants, which can be only assigned\nonce."),(0,a.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The declaration of mutable variables start with the usual keyword\n",(0,a.kt)("inlineCode",{parentName:"p"},"let")," (as constants do), but followed by the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"mut"),". The\ninitial assignment uses ",(0,a.kt)("inlineCode",{parentName:"p"},"="),", but subsequent assignments use ",(0,a.kt)("inlineCode",{parentName:"p"},":="),", like\nso:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=mutating",group:"mutating"},"let add (a, b : int * int) : int =\n  let mut c = a + b in // Mutable c is assigned a + b\n  let () = c := c + 1  // Reassignment of incremented c\n  in c                 // c = a + b + 1\n"))),(0,a.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,a.kt)("p",null,"The declaration of mutable variables start with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"let"),",\ninstead of ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," for constants. All assignments use the ",(0,a.kt)("inlineCode",{parentName:"p"},"="),"\noperator, like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=mutating",group:"mutating"},"function add (a: int, b:int) : int {\n  let c = a + b; // not const!\n  c++;           // Reassignment of incremented c\n  return c;      // c == a + b + 1\n};\n"))))}m.isMDXComponent=!0}}]);