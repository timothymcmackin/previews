"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>o.Z,Z:()=>a});var r=n(67294),o=n(75402);const a=function(e){return r.createElement(o.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},57649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(48720);const l={id:"comparing",title:"Comparing"},i=void 0,c={unversionedId:"booleans/comparing",id:"version-1.6.0/booleans/comparing",title:"Comparing",description:"Boolean values are the result of comparisons of values. Numbers and",source:"@site/versioned_docs/version-1.6.0/booleans/comparing.md",sourceDirName:"booleans",slug:"/booleans/comparing",permalink:"/previews/ligo/contracts/docs/1.6.0/booleans/comparing",draft:!1,tags:[],version:"1.6.0",frontMatter:{id:"comparing",title:"Comparing"},sidebar:"docs",previous:{title:"Not",permalink:"/previews/ligo/contracts/docs/1.6.0/booleans/not"},next:{title:"Conditional expressions",permalink:"/previews/ligo/contracts/docs/1.6.0/booleans/conditionals"}},s={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Boolean values are the result of comparisons of values. Numbers and\nstrings are completely ordered. Booleans can be compared for\nequality. Two values need to be of the same type to be compared, but\nnot all values of the same type can be compared: only those with ",(0,o.kt)("em",null,"comparable types")," (a concept directly lifted from Michelson)\nsuch as ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nat"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"bool")," itself. The comparison\noperators are overloaded so they are defined on all comparable types."),(0,o.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=comparing",group:"comparing"},"let a : bool = 1 = 1   // equality (true)\nlet b : bool = 1 <> 0  // inequality (true)\nlet c : bool = 1 > 0   // greater than (true)\nlet d : bool = 0 < 1   // lower than (true)\nlet e : bool = 0 >= 0  // greater than or equal (true)\nlet f : bool = 0 <= 0  // lower than or equal (true)\n"))),(0,o.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=comparing",group:"comparing"},"const a : bool = 1 == 1;  // equality (true)\nconst b : bool = 1 != 0;  // inequality (true)\nconst c : bool = 1 > 0;   // greater than (true)\nconst d : bool = 0 < 1;   // lower than (true)\nconst e : bool = 0 >= 0;  // greater than or equal (true)\nconst f : bool = 0 <= 0;  // lower than or equal (true)\n"))))}m.isMDXComponent=!0}}]);