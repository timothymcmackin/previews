"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},l="Inter-contract invocations",c={unversionedId:"tutorials/inter-contract-calls/examples/README",id:"version-1.6.0/tutorials/inter-contract-calls/examples/README",title:"Inter-contract invocations",description:"These examples demonstrate how one contract can call \u2013 or, rather, invoke, other contracts.",source:"@site/versioned_docs/version-1.6.0/tutorials/inter-contract-calls/examples/README.md",sourceDirName:"tutorials/inter-contract-calls/examples",slug:"/tutorials/inter-contract-calls/examples/",permalink:"/docs/1.6.0/tutorials/inter-contract-calls/examples/",draft:!1,tags:[],version:"1.6.0",frontMatter:{}},i={},s=[{value:"Contracts",id:"contracts",level:2},{value:"Running examples",id:"running-examples",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inter-contract-invocations"},"Inter-contract invocations"),(0,a.kt)("p",null,"These examples demonstrate how one contract can call \u2013 or, rather, ",(0,a.kt)("em",{parentName:"p"},"invoke,")," other contracts."),(0,a.kt)("h2",{id:"contracts"},"Contracts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SimpleCounter \u2013 a contract that adds the integer from the storage to the integer from the parameter, and saves the sum to the storage."),(0,a.kt)("li",{parentName:"ul"},"AdvancedCounter \u2013 a contract that supports more arithmetic operations: it can add, subtract, and multiply the values, or reset the counter based on the entrypoint being called."),(0,a.kt)("li",{parentName:"ul"},"Proxy \u2014 a simple proxy contract that calls the default entrypoint of the callee."),(0,a.kt)("li",{parentName:"ul"},"EntrypointProxy \u2013 a proxy that calls the ",(0,a.kt)("inlineCode",{parentName:"li"},"%add")," entrypoint of the callee."),(0,a.kt)("li",{parentName:"ul"},"CreateAndCall \u2013 a contract that originates a new contract and calls it in one transaction.")),(0,a.kt)("h2",{id:"running-examples"},"Running examples"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"npx ganache-cli --flavor tezos --seed alice")," in the background."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"truffle migrate")," to originate the contracts and ",(0,a.kt)("inlineCode",{parentName:"li"},"npm run test")," to run the tests.")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run test"),' calls a custom script to run the tests: currently, Truffle for Tezos does not provide a "clean room" environment for testing, so running ',(0,a.kt)("inlineCode",{parentName:"p"},"truffle test")," will likely fail because the tests for the contracts are not isolated."))}u.isMDXComponent=!0}}]);