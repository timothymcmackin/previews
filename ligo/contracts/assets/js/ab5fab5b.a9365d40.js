"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>i.Z,Z:()=>a});var r=n(67294),i=n(75402);const a=function(e){return r.createElement(i.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:r.createElement(r.Fragment,null)}))}},45607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(48720);const o={id:"failing",title:"Failing"},l=void 0,c={unversionedId:"imperative/failing",id:"version-1.7.0/imperative/failing",title:"Failing",description:"In some cases it is convenient to interrupt the flow of execution with",source:"@site/versioned_docs/version-1.7.0/imperative/failing.md",sourceDirName:"imperative",slug:"/imperative/failing",permalink:"/previews/ligo/contracts/docs/imperative/failing",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"failing",title:"Failing"},sidebar:"docs",previous:{title:"Looping",permalink:"/previews/ligo/contracts/docs/imperative/looping"},next:{title:"Asserting",permalink:"/previews/ligo/contracts/docs/imperative/asserting"}},s={},p=[],u={toc:p};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In some cases it is convenient to interrupt the flow of execution with\na failure instead of a value: this is where the predefined function\n",(0,i.kt)("inlineCode",{parentName:"p"},"failwith")," comes in."),(0,i.kt)("p",null,"The failwith function raises an error that cannot be caught and\nterminates the execution of the contract."),(0,i.kt)(a.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=failwith",group:"failwith"},'let check _param : unit =\n  failwith "This function always fails."\n'))),(0,i.kt)(a.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=failwith",group:"failwith"},'const check =\n  (_param) : unit => failwith("This function always fails");\n'))),(0,i.kt)("p",null,"The call to ",(0,i.kt)("inlineCode",{parentName:"p"},"failwith")," sometimes needs to be annotated with a type\nwhen the type-checker cannot infer the correct type, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},'(failwith\n"message" : type_of_result)'),"."))}f.isMDXComponent=!0}}]);