"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>i.Z,Z:()=>o});var r=n(67294),i=n(75402);const o=function(e){return r.createElement(i.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},83610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),o=n(48720);const a={id:"updating",title:"Updating"},s=void 0,l={unversionedId:"tezos/big_sets/updating",id:"version-1.5.0/tezos/big_sets/updating",title:"Updating",description:"Previous sections show how to add and remove an element from a given",source:"@site/versioned_docs/version-1.5.0/tezos/big_sets/updating.md",sourceDirName:"tezos/big_sets",slug:"/tezos/big_sets/updating",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/big_sets/updating",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"updating",title:"Updating"},sidebar:"docs",previous:{title:"Removing",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/big_sets/removing"},next:{title:"Attributes/Decorators",permalink:"/previews/ligo/contracts/docs/1.5.0/tezos/decorators/"}},c={},p=[],u={toc:p};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Previous sections show how to add and remove an element from a given\nbig set. The function ",(0,i.kt)("inlineCode",{parentName:"p"},"Big_set.update")," can do both depending on a\nboolean value: if true, then the given value will be added to the big\nset, otherwise it will be removed (if present)."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=big_set_updating",group:"big_set_updating"},"let nats : int big_set = Big_set.literal [3; 2; 2; 1]\nlet big_set_with_5 = Big_set.update 5 true nats\nlet big_set_without_3 = Big_set.update 3 false nats\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=big_set_updating",group:"big_set_updating"},"const nats: big_set<int> = Big_set.literal(list([3, 2, 2, 1]));\nconst big_set_with_5 = Big_set.update(5, true, nats);\nconst big_set_without_3 = Big_set.update(3, false, nats);\n"))))}g.isMDXComponent=!0}}]);