"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(u,r(r({ref:t},g),{},{components:n})):a.createElement(u,r({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>i.Z,Z:()=>l});var a=n(67294),i=n(75402);const l=function(e){return a.createElement(i.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},32516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var a=n(87462),i=(n(67294),n(3905)),l=n(48720);n(39960);const r={id:"package-management",title:"Package management"},o=void 0,s={unversionedId:"advanced/package-management",id:"advanced/package-management",title:"Package management",description:"Any programming language that aims to make collaboration easier needs",source:"@site/../docs/advanced/package-management.md",sourceDirName:"advanced",slug:"/advanced/package-management",permalink:"/docs/next/advanced/package-management",draft:!1,tags:[],version:"current",frontMatter:{id:"package-management",title:"Package management"},sidebar:"docs",previous:{title:"Testing Michelson code",permalink:"/docs/next/testing/michelson_testing"},next:{title:"Optimisation guide",permalink:"/docs/next/tutorials/optimisation/"}},p={},g=[{value:"Packages",id:"packages",level:2},{value:"LIGO registry",id:"ligo-registry",level:2},{value:"Consuming",id:"consuming",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Specifying package versions",id:"specifying-package-versions",level:3},{value:"Upgrading the version of a LIGO package",id:"upgrading-the-version-of-a-ligo-package",level:3},{value:"Using a LIGO package via REPL",id:"using-a-ligo-package-via-repl",level:3},{value:"Packaging",id:"packaging",level:2},{value:"Adding package metadata (LIGO manifest)",id:"adding-package-metadata-ligo-manifest",level:3},{value:"Required fields",id:"required-fields",level:4},{value:"Optional fields:",id:"optional-fields",level:4},{value:"Ignore some files or directories while packaging using .ligoignore",id:"ignore-some-files-or-directories-while-packaging-using-ligoignore",level:4},{value:"Creating and publishing packages to the LIGO registry",id:"creating-and-publishing-packages-to-the-ligo-registry",level:3},{value:"Logging in",id:"logging-in",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Quick CLI options reference",id:"quick-cli-options-reference",level:2},{value:"--cache-path",id:"--cache-path",level:3},{value:"--project-root",id:"--project-root",level:3},{value:"--ligorc-path",id:"--ligorc-path",level:3},{value:"--dry-run",id:"--dry-run",level:3},{value:"Unpublishing Packages",id:"unpublishing-packages",level:2},{value:"Notes",id:"notes",level:2},{value:"1. Are packages written in different syntaxes interoperable?",id:"1-are-packages-written-in-different-syntaxes-interoperable",level:3},{value:"2. What happens if there are entry points declared in a LIGO package?",id:"2-what-happens-if-there-are-entry-points-declared-in-a-ligo-package",level:3}],c={toc:g};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Any programming language that aims to make collaboration easier needs\na way to distribute (and consume) its reusable modules. LIGO provides\nfirst-class support for such distributable units (i.e. packages)."),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Reusable modules that developers intend to share with others can be\ndistributed as packages by placing a ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo.json")," (a manifest file)\nnext to their Ligo modules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ls\n")),(0,i.kt)("br",null),(0,i.kt)("table",{border:"2",cellspacing:"0",cellpadding:"6",rules:"groups",frame:"hsides"},(0,i.kt)("colgroup",null,(0,i.kt)("col",{class:"org-left"}),(0,i.kt)("col",{class:"org-left"}),(0,i.kt)("col",{class:"org-left"})),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{class:"org-left"},"ligo.json"),(0,i.kt)("td",{class:"org-left"},"set.mligo"),(0,i.kt)("td",{class:"org-left"},"list.mligo")))),(0,i.kt)("p",null,"Any directory (recursively) containing ",(0,i.kt)("inlineCode",{parentName:"p"},".mligo")," files can be turned into a package\nby simply placing a manifest file, ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo.json")," over there."),(0,i.kt)("h2",{id:"ligo-registry"},"LIGO registry"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://packages.ligolang.org/"},"LIGO registry")," is used to host LIGO packages. The LIGO registry contains the contracts/libraries along with their metadata. The packages which reside on the LIGO registry can be installed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo install")," command."),(0,i.kt)("h2",{id:"consuming"},"Consuming"),(0,i.kt)("p",null,"To fetch (download) & maintain different versions of external libraries we need a package manager.\nLIGO libraries can be published to the ",(0,i.kt)("a",{parentName:"p",href:"https://packages.ligolang.org/"},"LIGO registry")," as well as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),".\nUsing ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo install")," command we can fetch these ligo libraries."),(0,i.kt)("p",null,"Note:\nEarlier versions of LIGO used ",(0,i.kt)("a",{parentName:"p",href:"https://esy.sh"},(0,i.kt)("inlineCode",{parentName:"a"},"esy"))," as the backend for package management. This is not so anymore, and installing esy is not necessary."),(0,i.kt)("h3",{id:"workflow"},"Workflow"),(0,i.kt)("p",null,"We will need the LIGO compiler to compile smart contracts, to get the LIGO compiler follow these ",(0,i.kt)("a",{parentName:"p",href:"https://ligolang.org/docs/intro/installation"},"instructions"),"."),(0,i.kt)("p",null,"Next, we will use a simple dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"@ligo/math-lib")," published on the LIGO registry. To download & install the library, run,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo install @ligo/math-lib\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now we can write a smart contract which will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@ligo/mathlib")," library."),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},'#import "@ligo/mathlib/rational/rational.mligo" "Rational"\n\n...\n\n'))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},'#import "@ligo/mathlib/rational/rational.mligo" "Rational"\n\n...\n\n'))),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: When using LIGO packages via ",(0,i.kt)("inlineCode",{parentName:"p"},"#import"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"#include")),(0,i.kt)("p",{parentName:"blockquote"},"If only the name of the package is provided, it will be resolved to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," file of the package."),(0,i.kt)("p",{parentName:"blockquote"},"If you want to import a specific file from the package, the syntax is of the form"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},'#import "<pkg name>/<file in package>" "Module"')),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},'#include "pkg name>/<file in package>"'))),(0,i.kt)("p",null,"and we write some tests for our smart contract in ",(0,i.kt)("inlineCode",{parentName:"p"},"main.test.mligo")),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},'#include "main.mligo"\n\nlet test =\n    let storage = Test.compile_value [1; 2; 3] in\n    let (addr, _, _) = Test.originate_from_file "./main.mligo" "main" ([] : string list) storage 0tez in\n    let taddr : (parameter, storage) typed_address = Test.cast_address addr in\n    let contr : parameter contract = Test.to_contract taddr in\n    let _ = Test.transfer_to_contract_exn contr Reverse 1mutez in\n    assert (Test.get_storage taddr = [3; 2; 1])\n'))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},'#include "main.jsligo"\n\nconst test = (() => {\n    let storage = Test.compile_value([1, 2, 3]);\n    let [addr, _, _] = Test.originate_from_file("./main.jsligo",\n    "main", ([] as list<string>), storage, 0tez);\n    let taddr : typed_address<parameter, storage> = Test.cast_address(addr);\n    let contr : contract<parameter> = Test.to_contract(taddr);\n    Test.transfer_to_contract_exn(contr, Reverse(), 1mutez);\n    assert (Test.get_storage(taddr) == [3, 2, 1])\n})();\n\n'))),(0,i.kt)("p",null,"To compile the contract to Michelson run the command"),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo compile contract main.mligo\n"))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo compile contract main.jsligo\n"))),(0,i.kt)("p",null,"This will find the dependencies installed on the local machine, and compile the ",(0,i.kt)("inlineCode",{parentName:"p"},"main.mligo")," file."),(0,i.kt)("p",null,"To test the contract using LIGO's ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/testing/"},"testing framework")," run the command"),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo run test main.test.mligo\n"))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo run test main.test.jsligo\n"))),(0,i.kt)("p",null,"If you working with an existing LIGO project, to install the dependencies, at the root of the project just run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo install\n")),(0,i.kt)("h3",{id:"specifying-package-versions"},"Specifying package versions"),(0,i.kt)("p",null,"To use package, it is necessary to specify the exact version of the package. Semver ranges are currently not supported. This will, however, change soon."),(0,i.kt)("h3",{id:"upgrading-the-version-of-a-ligo-package"},"Upgrading the version of a LIGO package"),(0,i.kt)("p",null,"During the lifecycle of a project, if you wish to upgrade the version of a LIGO package,\nJust update the package version to the desired one in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo.json"),". e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},' {\n   ...\n   "dependencies": {\n     "ligo-foo": "1.0.6",\n-    "@ligo/bigarray": "1.0.0",\n+    "@ligo/bigarray": "1.0.1",\n     "ligo-test_2": "1.0.0",\n     "ligo_test_1": "1.0.0"\n   }\n }\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"and run the command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo install\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"This will fetch the updated version of the LIGO package, and the compiler will use the updated version of the package."),(0,i.kt)("h3",{id:"using-a-ligo-package-via-repl"},"Using a LIGO package via REPL"),(0,i.kt)("p",null,"If you wish to try out a LIGO package in the REPL environment, Install\nthe LIGO package by following the steps above, and then fire up the\nLIGO REPL using the following command"),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ligo repl cameligo\nWelcome to LIGO\'s interpreter!\nIncluded directives:\n  #use "file_path";;\n  #import "file_path" "module_name";;\nIn  [1]: #import "@ligo/bigarray/lib/bigarray.mligo" "BA";;\nOut [1]: Done.\nIn  [2]: BA.concat [1;2;3] [4;5;6];;\nOut [2]: CONS(1 , CONS(2 , CONS(3 , CONS(4 , CONS(5 , CONS(6 , LIST_EMPTY()))))))\nIn  [3]:\n'))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ~/projects/ligo/_build/install/default/bin/ligo repl jsligo\nWelcome to LIGO\'s interpreter!\nIncluded directives:\n  #use "file_path";;\n  #import "file_path" "module_name";;\nIn  [1]: #import "@ligo/bigarray/lib/bigarray.mligo" "BA";;\nOut [1]: Done.\nIn  [2]: BA.concat ([1, 2, 3])([4, 5, 6]);;\nOut [2]: CONS(1 , CONS(2 , CONS(3 , CONS(4 , CONS(5 , CONS(6 , LIST_EMPTY()))))))\nIn  [3]:\n'))),(0,i.kt)("h2",{id:"packaging"},"Packaging"),(0,i.kt)("p",null,"Packages are code units that can be shared with other developers. Therefore,\nauthors must provide useful metadata, both for other programmers in\nthe community as well as the LIGO toolchain, to understand the package's\ncontents, its version, and other useful information."),(0,i.kt)("h3",{id:"adding-package-metadata-ligo-manifest"},"Adding package metadata (LIGO manifest)"),(0,i.kt)("p",null,"This is an important step, as it will help the tools and your users/collaborators, provide vital information about your package."),(0,i.kt)("p",null,"For LIGO packages, authors must provide a manifest file (ligo.json)."),(0,i.kt)("p",null,"The structure of a LIGO manifest is as follows,"),(0,i.kt)("h4",{id:"required-fields"},"Required fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"name"))," : Name of the package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"version"))," : Version of the package (Should be a valid ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"sem-ver"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"main"))," : The main file of the package, Ideally this file should export all the functionality that the package provides.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"author"))," : Author of the package.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"license"))," : A valid SPDX license identifier.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"repository"))," : The place where the LIGO code is hosted (remote repository),\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," field follows a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#repository"},"structure same as npm"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"bugs"))," : The url to your project's issue tracker and/or the email address to which issues should be reported.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"bugs")," fields follows a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v9/configuring-npm/package-json#bugs"},"structure same as npm"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"type"))," : The ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"library")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"contract"),", If the field is ommited default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"storage_fn"))," : In the case when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"contract"),", the name of the function which provides initial storage needs to be provided.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"storage_arg"))," : In the case when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"contract"),", an expression that is a parameter to the ",(0,i.kt)("inlineCode",{parentName:"p"},"storage_fn")," needs to be provided."))),(0,i.kt)("h4",{id:"optional-fields"},"Optional fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"description"))," : A brief description of the package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"readme"))," : Some readme text, if this field is omitted the contents of README.md or README will be used in its place."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"dependencies"))," : A object (key-value pairs) of dependencies of the package where key is a ",(0,i.kt)("inlineCode",{parentName:"li"},"package_name")," and the value is a ",(0,i.kt)("inlineCode",{parentName:"li"},"package_version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"dev_dependencies"))," : A object (key-value pairs) of dev_dependencies of the package where key is a ",(0,i.kt)("inlineCode",{parentName:"li"},"package_name")," and value is a ",(0,i.kt)("inlineCode",{parentName:"li"},"package_version"))),(0,i.kt)("p",null,"Sample LIGO manifest (",(0,i.kt)("inlineCode",{parentName:"p"},"ligo.json"),") with some of the above information:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "math-lib",\n  "version": "1.0.3",\n  "description": "A math library for LIGO with support for Float & Rational numbers",\n  "main": "lib.mligo",\n  "repository": {\n    "type": "git",\n    "url": "git+https://github.com/ligolang/math-lib-cameligo.git"\n  },\n  "author": "ligoLANG <https://ligolang.org/>",\n  "license": "MIT",\n  "bugs": {\n    "url": "https://github.com/ligolang/math-lib-cameligo/issues"\n  },\n  "dependencies": {\n    "math-lib-core": "^1.0.1",\n    "math-lib-float": "^1.0.2",\n    "math-lib-rational": "^1.0.1"\n  }\n}\n')),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"ignore-some-files-or-directories-while-packaging-using-ligoignore"},"Ignore some files or directories while packaging using .ligoignore"),(0,i.kt)("p",null,"You can specify some files or directories which you want to keep out of the LIGO package (keys, deployment scripts, etc.) in a ",(0,i.kt)("inlineCode",{parentName:"p"},".ligoignore")," file.\n",(0,i.kt)("inlineCode",{parentName:"p"},".ligoignore")," file is similar to a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file (you can specify glob patterns of files or directories you would like to ignore)"),(0,i.kt)("h3",{id:"creating-and-publishing-packages-to-the-ligo-registry"},"Creating and publishing packages to the LIGO registry"),(0,i.kt)("p",null,"We are going the write a simple package ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo-list-helpers")," library that is similar to the bigarray package we used earlier."),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=pkg",group:"pkg"},"(* LIGO library for working with lists *)\n\nlet concat (type a) (xs : a list) (ys : a list) : a list =\n    let f (x,ys : (a * a list)) : a list = x :: ys in\n    List.fold_right f xs ys\n\nlet reverse (type a) (xs : a list) : a list =\n    let f (ys,x : (a list * a)) : a list = x :: ys in\n    List.fold_left f ([] : a list) xs\n\n"))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=pkg",group:"pkg"},"/* LIGO library for working with lists */\n\nexport const concat = <T>(xs : list<T>, ys : list<T>) : list<T> => {\n    let f = ([x, ys] : [T, list<T>]) : list<T> => [x, ...ys];\n    return List.fold_right(f, xs, ys)\n}\n\nexport const reverse = <T>(xs : list<T>) : list<T> => {\n    let f = ([ys, x] : [list<T>, T]) : list<T> => [x, ...ys];\n    return List.fold_left(f, [], xs)\n}\n\n"))),(0,i.kt)("br",null),(0,i.kt)("p",null,"and some tests for the library"),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},'#include "list.mligo"\n\nlet test_concat =\n    let xs = [1; 2; 3] in\n    let ys = [4; 5; 6] in\n    let zs = concat xs ys in\n    assert (zs = [1; 2; 3; 4; 5; 6])\n\nlet test_reverse =\n    let xs = [1; 2; 3] in\n    assert (reverse xs = [3; 2; 1])\n\n'))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},'#include "list.jsligo"\n\nconst test_concat = (() => {\n    let xs : list<int> = [1, 2, 3];\n    let ys : list<int> = [4, 5, 6];\n    let zs = concat(xs, ys);\n    assert (zs == [1, 2, 3, 4, 5, 6])\n})();\n\nconst test_reverse = (() => {\n    let xs : list<int> = [1, 2, 3];\n    assert (reverse(xs) == [3, 2, 1])\n})();\n\n'))),(0,i.kt)("br",null),(0,i.kt)("p",null,"To run the tests run the command"),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo run test list.test.mligo\n"))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo run test list.test.jsligo\n"))),(0,i.kt)("h3",{id:"logging-in"},"Logging in"),(0,i.kt)("p",null,"Before publishing, the registry server needs to authenticate the user to avoid abuse. To login,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo login\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"If you're a new user,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo add-user\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"This would create a ",(0,i.kt)("inlineCode",{parentName:"p"},".ligorc")," in the home directory."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: By default, LIGO  creates the rc file (",(0,i.kt)("inlineCode",{parentName:"p"},".ligorc"),") in the home directory.")),(0,i.kt)("h3",{id:"publishing"},"Publishing"),(0,i.kt)("p",null,"LIGO packages can be published to a central repository at\n",(0,i.kt)("a",{parentName:"p",href:"https://packages.ligolang.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"packages.ligolang.org"))," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo publish")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo publish\n==> Reading manifest... Done\n==> Validating manifest file... Done\n==> Finding project root... Done\n==> Packing tarball... Done\n    publishing: ligo-list-helpers@1.0.0\n    === Tarball Details ===\n    name:          ligo-list-helpers\n    version:       1.0.0\n    filename:      ligo-list-helpers-1.0.0.tgz\n    package size:  895 B\n    unpacked size: 1.1 kB\n    shasum:        37737db2f58b572f560bd2c45b38e6d01277395d\n    integrity:     sha512-a904c5af793e6[...]fc0efee74cfbb26\n    total files:   6\n==> Checking auth token... Done\n==> Uploading package... Done\nPackage successfully published\n")),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: while publishing a package If just want to see what LIGO publish would do, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag"),(0,i.kt)("pre",{parentName:"blockquote"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo publish --dry-run\n"))),(0,i.kt)("h2",{id:"quick-cli-options-reference"},"Quick CLI options reference"),(0,i.kt)("h3",{id:"--cache-path"},"--cache-path"),(0,i.kt)("p",null,"By default dependencies are installed in the ",(0,i.kt)("inlineCode",{parentName:"p"},".ligo")," directory at the root of the project, If you wish to change\nthe path where dependencies are installed use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cache-path")," option to specify the path e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo install --cache-path PATH\n")),(0,i.kt)("h3",{id:"--project-root"},"--project-root"),(0,i.kt)("p",null,"LIGO will try to infer the root directory of the project so that it\ncan find the dependencies installed on your local machine, If you wish\nto specify the root directory manually you can do so using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--project-root")," option e.g."),(0,i.kt)(l.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo compile contract main.mligo --project-root PATH\n"))),(0,i.kt)(l.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo compile contract main.jsligo --project-root PATH\n"))),(0,i.kt)("h3",{id:"--ligorc-path"},"--ligorc-path"),(0,i.kt)("p",null,"LIGO creates a ",(0,i.kt)("inlineCode",{parentName:"p"},".ligorc")," file to store auth tokens for the user for a specific registry, This auth token is useful when publishing a package."),(0,i.kt)("p",null,"By default LIGO creates the ",(0,i.kt)("inlineCode",{parentName:"p"},".ligorc")," in the home directory, If you wish to override this you can do so using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ligorc-path")," e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Loging in\n$ ligo login --ligorc-path ./.ligorc\n\n# Publishing\n$ ligo publish --ligorc-path ./.ligorc\n")),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Using ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo login")," users can log into multiple registries e.g. LIGO registry, and the LIGO beta registry, A new entry will be created in the ",(0,i.kt)("inlineCode",{parentName:"p"},".ligorc")," for storing auth token of each registry.")),(0,i.kt)("h3",{id:"--dry-run"},"--dry-run"),(0,i.kt)("p",null,"While using ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo publish")," if you don't want to make changes to the LIGO registry, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry-run")," flag. e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ ligo publish --dry-run\n")),(0,i.kt)("br",null),(0,i.kt)("p",null,"This will only display the report on the command line what it would have done in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo publish"),"."),(0,i.kt)("h2",{id:"unpublishing-packages"},"Unpublishing Packages"),(0,i.kt)("p",null,"Packages can be published in two ways,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Completely delete the entry"),(0,i.kt)("li",{parentName:"ol"},"Only unpublish a specific version")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"unpublish")," is that subcommand, grouped under ",(0,i.kt)("inlineCode",{parentName:"p"},"registry")," subcommand, removes a package or a specific version of it from the registry"),(0,i.kt)("p",null,"Summary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  [--package-name Name]      . of the package on which publish/unpublish is\n                               executed\n  [--package-version Version]\n                             . of the package on which publish/unpublish is\n                               executed\n")),(0,i.kt)("p",null,"To unpublish a package, run ",(0,i.kt)("inlineCode",{parentName:"p"},"ligo registry unpublish --package-name <name> --package-version <version>")," from anywhere on the CLI (not necessarily from within a project)"),(0,i.kt)("p",null,"Examples,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ligo registry unpublish --package-name foo --package-version 1.0.0\n")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"--package-version")," is skipped, the entire package is unpublished."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("h3",{id:"1-are-packages-written-in-different-syntaxes-interoperable"},"1. Are packages written in different syntaxes interoperable?"),(0,i.kt)("p",null,"Yes, any syntax can be used in packages. Furthermore, one can consume a package written in one syntax from another."),(0,i.kt)("h3",{id:"2-what-happens-if-there-are-entry-points-declared-in-a-ligo-package"},"2. What happens if there are entry points declared in a LIGO package?"),(0,i.kt)("p",null,"If you need to use the entry points defined within a package, the best approach is likely to alias them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},'#import "package_name/increment.mligo" "Increment"\n\n[@entry] let add = Increment.add\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"In this case, only ",(0,i.kt)("inlineCode",{parentName:"p"},"add")," entry point from the package will be used by the compiler. By adding an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"Increment.sub"),", it is possible to also include that entry point in the final contract."))}m.isMDXComponent=!0}}]);