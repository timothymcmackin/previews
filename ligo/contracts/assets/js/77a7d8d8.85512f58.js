"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"manpages/info dump-cst",id:"version-1.5.0/manpages/info dump-cst",title:"info dump-cst",description:"SYNOPSIS",source:"@site/versioned_docs/version-1.5.0/manpages/info dump-cst.md",sourceDirName:"manpages",slug:"/manpages/info dump-cst",permalink:"/previews/ligo/contracts/docs/1.5.0/manpages/info dump-cst",draft:!1,tags:[],version:"1.5.0",frontMatter:{}},s={},p=[{value:"SYNOPSIS",id:"synopsis",level:3},{value:"DESCRIPTION",id:"description",level:3},{value:"FLAGS",id:"flags",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ligo info dump-cst SOURCE_FILES [SOURCE_FILES ...]\n")),(0,o.kt)("h3",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"This subcommand returns a concrete syntax tree for a LIGO contract. If format is not specified, then CST would be returned in the MessagePack format."),(0,o.kt)("h3",{id:"flags"},"FLAGS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"--display-format FORMAT"),"\nthe format that will be used by the CLI. Available formats are 'dev', 'json', and 'human-readable' (default). When human-readable lacks details (we are still tweaking it), please contact us and use another format in the meanwhile. (alias: --format)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"--library LIBS"),"\nA comma-separated list of paths to directories where to search for files to be included by the preprocessor (alias: -l)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"--no-color"),"\ndisable coloring in CLI output"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"--skip-analytics"),"\nAvoid ligo analytics publication. Configurable with environment variable LIGO_SKIP_ANALYTICS too"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"--with-types"),"\nTries to infer types for all named expressions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-p PROTOCOL"),"\nchoose protocol's types/values pre-loaded into the LIGO environment (oxford2). By default, the current protocol (oxford2) will be used (alias: --protocol)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"-help"),"\nprint this help text and exit (alias: -?)"))}u.isMDXComponent=!0}}]);