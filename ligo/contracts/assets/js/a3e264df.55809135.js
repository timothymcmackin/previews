"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=i,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={id:"subtracting",title:"Subtracting"},o=void 0,s={unversionedId:"numbers/subtracting",id:"version-1.6.0/numbers/subtracting",title:"Subtracting",description:"Subtraction in LIGO is accomplished by means of the - binary",source:"@site/versioned_docs/version-1.6.0/numbers/subtracting.md",sourceDirName:"numbers",slug:"/numbers/subtracting",permalink:"/previews/ligo/contracts/docs/1.6.0/numbers/subtracting",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"subtracting",title:"Subtracting"},sidebar:"docs",previous:{title:"Adding",permalink:"/previews/ligo/contracts/docs/1.6.0/numbers/adding"},next:{title:"Negating",permalink:"/previews/ligo/contracts/docs/1.6.0/numbers/negating"}},c={},l=[],u=(p="Syntax",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var p;const d={toc:l};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Subtraction in LIGO is accomplished by means of the ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," binary\noperator which is overloaded to apply to any combination of natural\nnumbers and integers, as shown in the following examples. The rule\nwhen subtracting two natural numbers is that the result is an integer\nbecause, in general, the compiler cannot determine whether the value\nof an expression is positive or zero for all inputs."),(0,i.kt)(u,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=subtracting",group:"subtracting"},"let a : int = 5 - 10   // int - int yields int\nlet b : int = 5n - 2n  // nat - nat yields int\nlet c : int = 10n - 5  // nat - int yields int\nlet d : int = 5 - 10n  // int - nat yields int\n// let error : nat = 5n - 2n\n"))),(0,i.kt)(u,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=subtracting",group:"subtracting"},"const a : int = 5 - 10;   // int - int yields int\nconst b : int = 5n - 2n;  // nat - nat yields int\nconst c : int = 10n - 5;  // nat - int yields int\nconst d : int = 5 - 10n;  // int - nat yields int\n// const error : nat = 5n - 2n;\n"))))}b.isMDXComponent=!0}}]);