"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"short-term",title:"Short term"},i=void 0,s={unversionedId:"contributors/road-map/short-term",id:"contributors/road-map/short-term",title:"Short term",description:"Documentation and Testing",source:"@site/../docs/contributors/road-map/short-term.md",sourceDirName:"contributors/road-map",slug:"/contributors/road-map/short-term",permalink:"/docs/next/contributors/road-map/short-term",draft:!1,tags:[],version:"current",frontMatter:{id:"short-term",title:"Short term"}},c={},l=[{value:"Documentation and Testing",id:"documentation-and-testing",level:2},{value:"Exposing Features",id:"exposing-features",level:2},{value:"Refactoring",id:"refactoring",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"documentation-and-testing"},"Documentation and Testing"),(0,o.kt)("p",null,"We lack documentation and tests. Top priority.\nTests are needed at multiple levels:\nUnit tests. Most utility functions should be tested individually.\nInterface tests. Parts of the pipeline (Typer, Transpiler-Compiler, etc.) should be tested as black boxes.\nIntegration tests. Typical user scenarios, as interacted with the CLI, should be tested."),(0,o.kt)("h2",{id:"exposing-features"},"Exposing Features"),(0,o.kt)("p",null,"Many features have already been developed or nearly developed, and mostly need to be shown some attention, and then be exposed to the outside world, for instance:\nTesting LIGO code\nStep-by-step interpreter\nLIGO in the browser\nPropagating source locations for error messages\nDry-running a contract"),(0,o.kt)("h2",{id:"refactoring"},"Refactoring"),(0,o.kt)("p",null,"For the longer-term, it\u2019s crucial to refactor big parts of the code base. This is needed to lower the complexity of the code base, so that it\u2019s easier both for everyone (including API consumers) to interact with it."))}p.isMDXComponent=!0}}]);