"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,s={unversionedId:"manpages/compile storage",id:"manpages/compile storage",title:"compile storage",description:"SYNOPSIS",source:"@site/../docs/manpages/compile storage.md",sourceDirName:"manpages",slug:"/manpages/compile storage",permalink:"/previews/ligo/contracts/docs/next/manpages/compile storage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"API",previous:{title:"compile parameter",permalink:"/previews/ligo/contracts/docs/next/manpages/compile parameter"},next:{title:"run dry-run",permalink:"/previews/ligo/contracts/docs/next/manpages/run dry-run"}},i={},p=[{value:"SYNOPSIS",id:"synopsis",level:3},{value:"DESCRIPTION",id:"description",level:3},{value:"FLAGS",id:"flags",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ligo compile storage SOURCE_FILE STORAGE_EXPRESSION\n")),(0,r.kt)("h3",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"This sub-command compiles an initial storage for a given contract to a Michelson expression. The resulting Michelson expression can be passed as an argument in a transaction which originates a contract."),(0,r.kt)("h3",{id:"flags"},"FLAGS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--allow-json-download"),"\nAllow LIGO to download JSON files for metadata check."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--amount INT"),"\nthe tezos amount the Michelson interpreter will use for the transaction."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--balance INT"),"\nthe balance the Michelson interpreter will use for the contract balance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--constants CONSTANTS"),"\nA list of global constants that will be assumed in the context, separated by ',' (alias: -c)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--disallow-json-download"),"\nDisallow LIGO to download JSON files for metadata check (and do not show message)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--display-format FORMAT"),"\nthe format that will be used by the CLI. Available formats are 'dev', 'json', and 'human-readable' (default). When human-readable lacks details (we are still tweaking it), please contact us and use another format in the meanwhile. (alias: --format)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--file-constants FILE_CONSTANTS"),"\nA file with a JSON list of strings with Michelson code. Those Michelson values will be registered as global constants in the context."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--library LIBS"),"\nA comma-separated list of paths to directories where to search for files to be included by the preprocessor (alias: -l)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--michelson-format CODE_FORMAT"),"\nformat that will be used by compile-contract for the resulting Michelson. Available formats are 'text' (default), 'json', 'msgpack' and 'hex'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--no-color"),"\ndisable coloring in CLI output"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--no-metadata-check"),"\ndisable TZIP-16 metadata compliance check"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--no-warn"),"\ndisable warning messages"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--now TIMESTAMP"),"\nthe NOW value the Michelson interpreter will use (e.g. '2000-01-01T10:10:10Z')"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--output-file FILENAME"),"\nif used, prints the output into the specified file instead of stdout (alias: -o)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--project-root PATH"),"\nThe path to root of the project."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--sender ADDRESS"),"\nthe sender the Michelson interpreter transaction will use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--skip-analytics"),"\nAvoid ligo analytics publication. Configurable with environment variable LIGO_SKIP_ANALYTICS too"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--source ADDRESS"),"\nthe source the Michelson interpreter transaction will use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--syntax SYNTAX"),'\nthe syntax that will be used. Currently supported syntaxes are "cameligo" and "jsligo". By default, the syntax is guessed from the extension (.mligo and .jsligo respectively). (alias: -s)'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--warn-infinite-loop"),"\nwarn about infinite loop"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--warn-unused-rec"),"\nwarn about unused recursion in a recursive function"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--werror"),"\ntreat warnings as errors"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-D pass"),"\na list of defines to the preprocessor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-e ENTRY-POINT"),"\n(this command is deprecated) the entry-point that will be compiled. (alias: --entry-point)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-m MODULE"),"\nthe entry-point will be compiled from that module. Files containing a single contract module are automatically infered (alias: --module)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-p PROTOCOL"),"\nchoose protocol's types/values pre-loaded into the LIGO environment (deprecated) (alias: --protocol)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"-help"),"\nprint this help text and exit (alias: -?)"))}u.isMDXComponent=!0}}]);