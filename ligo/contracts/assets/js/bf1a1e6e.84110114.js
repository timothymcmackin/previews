"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18096],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48720:(e,n,t)=>{t.d(n,{D:()=>o.Z,Z:()=>a});var r=t(67294),o=t(75402);const a=function(e){return r.createElement(o.Z.Consumer,null,(n=>{let{syntax:t}=n;return t===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},50324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=t(87462),o=(t(67294),t(3905)),a=t(48720);const i={id:"higher-order",title:"Higher-order"},s=void 0,c={unversionedId:"functions/higher-order",id:"version-1.7.0/functions/higher-order",title:"Higher-order",description:"Functions can take a function as a parameter, or return a function:",source:"@site/versioned_docs/version-1.7.0/functions/higher-order.md",sourceDirName:"functions",slug:"/functions/higher-order",permalink:"/docs/functions/higher-order",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"higher-order",title:"Higher-order"},sidebar:"docs",previous:{title:"Lambdas",permalink:"/docs/functions/lambdas"},next:{title:"Inlining",permalink:"/docs/functions/inlining"}},l={},u=[],p={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("p",null,"Functions can take a function as a parameter, or return a function:\nthis is known as ",(0,o.kt)("em",{parentName:"p"},"higher-order functions"),". Perhaps the most obvious\nexample is to define a function that takes two functions and compose\nthem, like in mathematics."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=lambdas",group:"lambdas"},"let compose f g x = f (g x)\nlet double_incr = compose (fun x -> x + 1) (fun x -> 2*x)  // 2*x + 1\n")),(0,o.kt)("p",null,"Of course, we can also pass named functions as arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=lambdas",group:"lambdas"},"let increment x = x + 1\nlet double x = 2*x\nlet double_incr2 = compose increment double\n"))),(0,o.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("p",null,"Functions can take a function as a parameter, or return a function:\nthis is known as ",(0,o.kt)("em",{parentName:"p"},"higher-order functions"),". Perhaps the most obvious\nexample is to define a function that takes two functions and returns a\nfunction that is their composition, like in mathematics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=lambdas",group:"lambdas"},"const compose = f => g => x => f (g (x));\nconst double_incr = compose (x => x + 1) (x => 2*x)  // 2*x + 1\n")),(0,o.kt)("p",null,"Of course, we can also pass named functions as arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=lambdas",group:"lambdas"},"const increment = x => x + 1;\nconst double = x => 2*x;\nconst double_incr2 = compose (increment) (double);\n"))))}m.isMDXComponent=!0}}]);