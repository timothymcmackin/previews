"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"manpages/transpile-with-ast contract",id:"version-1.7.0/manpages/transpile-with-ast contract",title:"transpile-with-ast contract",description:"SYNOPSIS",source:"@site/versioned_docs/version-1.7.0/manpages/transpile-with-ast contract.md",sourceDirName:"manpages",slug:"/manpages/transpile-with-ast contract",permalink:"/previews/ligo/contracts/docs/manpages/transpile-with-ast contract",draft:!1,tags:[],version:"1.7.0",frontMatter:{},sidebar:"API",previous:{title:"transpile contract",permalink:"/previews/ligo/contracts/docs/manpages/transpile contract"},next:{title:"transpile-with-ast expression",permalink:"/previews/ligo/contracts/docs/manpages/transpile-with-ast expression"}},l={},p=[{value:"SYNOPSIS",id:"synopsis",level:3},{value:"DESCRIPTION",id:"description",level:3},{value:"FLAGS",id:"flags",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"synopsis"},"SYNOPSIS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ligo transpile-with-ast contract SOURCE_FILE SYNTAX\n")),(0,a.kt)("h3",{id:"description"},"DESCRIPTION"),(0,a.kt)("p",null,"[BETA]"," This sub-command transpiles a source file to another syntax. It does not use the build system, but the source file is preprocessed. Comments are currently not transpiled. Please use at your own risk."),(0,a.kt)("h3",{id:"flags"},"FLAGS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--display-format FORMAT"),"\nthe format that will be used by the CLI. Available formats are 'dev', 'json', and 'human-readable' (default). When human-readable lacks details (we are still tweaking it), please contact us and use another format in the meanwhile. (alias: --format)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--library LIBS"),"\nA comma-separated list of paths to directories where to search for files to be included by the preprocessor (alias: -l)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--no-color"),"\ndisable coloring in CLI output"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--output-file FILENAME"),"\nif used, prints the output into the specified file instead of stdout (alias: -o)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--skip-analytics"),"\nAvoid ligo analytics publication. Configurable with environment variable LIGO_SKIP_ANALYTICS too"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"--syntax SYNTAX"),'\nthe syntax that will be used. Currently supported syntaxes are "cameligo" and "jsligo". By default, the syntax is guessed from the extension (.mligo and .jsligo respectively). (alias: -s)'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"-help"),"\nprint this help text and exit (alias: -?)"))}u.isMDXComponent=!0}}]);