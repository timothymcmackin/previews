"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),o=a(34334),l=a(12466),i=a(76775),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(72389);const k="tabList__CuJ",f="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},g=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},l,{className:(0,o.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},49031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(74866),l=a(85162);const i={id:"installation",title:"Installation"},s=void 0,u={unversionedId:"intro/installation",id:"version-1.5.0/intro/installation",title:"Installation",description:"Currently Ligo can be installed on Linux and MacOS. It still possible to use it on Windows through WSL or docker.",source:"@site/versioned_docs/version-1.5.0/intro/installation.md",sourceDirName:"intro",slug:"/intro/installation",permalink:"/previews/ligo/contracts/docs/1.5.0/intro/installation",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"docs",previous:{title:"Introduction to LIGO",permalink:"/previews/ligo/contracts/docs/1.5.0/intro/introduction"},next:{title:"Editor Support",permalink:"/previews/ligo/contracts/docs/1.5.0/intro/editor-support"}},c={},p=[{value:"Releases",id:"releases",level:2},{value:"Install",id:"install",level:2}],d={toc:p};function g(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently Ligo can be installed on Linux and MacOS. It still possible to use it on Windows through WSL or docker."),(0,r.kt)("p",null,"You can also try LIGO in a Gitpod environment"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://gitlab.com/ligolang/template-ligo"},(0,r.kt)("img",{parentName:"a",src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),(0,r.kt)("h2",{id:"releases"},"Releases"),(0,r.kt)("p",null,"Releases are available at the ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/ligolang/ligo/-/releases"},"releases page of GitLab project"),". All the artifacts are attached there."),(0,r.kt)("p",null,"If you wish to see the changelog, you can either run ",(0,r.kt)("inlineCode",{parentName:"p"},"ligo changelog")," or go to ",(0,r.kt)("a",{parentName:"p",href:"https://ligolang.org/docs/next/intro/changelog"},"this page"),". It contains links to corresponding releases, should you wish to download the artifacts."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{defaultValue:"Lbinary",values:[{label:"Linux binary",value:"Lbinary"},{label:"MacOS",value:"macos"},{label:"Debian package",value:"deb"},{label:"Arch",value:"AUR"},{label:"Dockerized",value:"docker"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Lbinary",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ligo")," executable is statically linked. It should run on most modern Linux distributions."),(0,r.kt)("p",null,"You can get the rolling release ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/ligolang/ligo/-/jobs/7438349495/artifacts/raw/ligo"},"here"),", make it executable, and you are done!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"wget https://gitlab.com/ligolang/ligo/-/jobs/7438349495/artifacts/raw/ligo\nchmod +x ./ligo\n")),(0,r.kt)("p",null,"For a specific version, you can visit our ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/ligolang/ligo/-/releases/"},"release page"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Optionally, you can put it somewhere in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," for easy access:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"sudo cp ./ligo /usr/local/bin\n"))),(0,r.kt)(l.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,"Try our tap :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap ligolang/ligo https://gitlab.com/ligolang/ligo.git\nbrew install ligolang/ligo/ligo\n")),(0,r.kt)("p",null,"To upgrade ligo :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\nbrew upgrade ligolang/ligo/ligo\n"))),(0,r.kt)(l.Z,{value:"deb",mdxType:"TabItem"},(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," package containing the static ",(0,r.kt)("inlineCode",{parentName:"p"},"ligo")," executable is also available.\nFirst, download ",(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/ligolang/ligo/-/jobs/7438349495/artifacts/raw/ligo.deb"},"the package"),", and then install using: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"sudo apt install ./ligo.deb\n"))),(0,r.kt)(l.Z,{value:"AUR",mdxType:"TabItem"},(0,r.kt)("p",null,"It's possible to install latest release of ligo through ",(0,r.kt)("a",{parentName:"p",href:"https://aur.archlinux.org/packages/ligo-bin"},"AUR")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"git clone https://aur.archlinux.org/ligo-bin.git\ncd ligo-bin\nmakepkg -si\n")),(0,r.kt)("p",null,"Or through tools like ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Jguer/yay"},"yay")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},"yay -S ligo-bin\n"))),(0,r.kt)(l.Z,{value:"docker",mdxType:"TabItem"},(0,r.kt)("p",null,"If you've ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"installed \ud83d\udc33 Docker"),", you can run the latest ",(0,r.kt)("a",{parentName:"p",href:"/previews/ligo/contracts/docs/1.5.0/intro/changelog"},"LIGO release"),":"),(0,r.kt)("p",null,"Linux or OSX:"),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -v "$PWD":"$PWD" -w "$PWD" ligolang/ligo:1.7.0\n')),(0,r.kt)("p",{parentName:"blockquote"},"For convenience you can alias the above command"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'alias ligo=\'docker run --rm -v "$PWD":"$PWD" -w "$PWD" ligolang/ligo:1.7.0\'\n')),(0,r.kt)("p",{parentName:"blockquote"},"To make this ",(0,r.kt)("inlineCode",{parentName:"p"},"alias")," persistent across terminal sessions you need to configure your shell.",(0,r.kt)("br",{parentName:"p"}),"\n","Here is a ",(0,r.kt)("a",{parentName:"p",href:"https://www.tecmint.com/create-alias-in-linux/"},"good link")," with the steps on how to do that.")),(0,r.kt)("p",null,"Or if you want the development version, replace the version above with ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),"."),(0,r.kt)("p",null,"Or run one of the older versions found on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ligolang/ligo/tags"},"DockerHub"),".")),(0,r.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,"It's possible to use ligo in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker")," through docker or ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"WSL2")),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-dos"},'docker run --rm -v "%CD%":/cd -w /cd ligolang/ligo:1.7.0`\n')),(0,r.kt)("p",{parentName:"blockquote"},"For convenience you can alias the above command"),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-dos"},'doskey ligo=docker run --rm -v "%CD%":/cd -w /cd ligolang/ligo:1.7.0 $*\n')),(0,r.kt)("p",{parentName:"blockquote"},"To make the alias persistent across terminal sessions you need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"doskey")," to the Windows Registry.",(0,r.kt)("br",{parentName:"p"}),"\n","Follow ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/21040825"},"this stackoverflow answer")," for the steps on how to do that.")),(0,r.kt)("p",null,"Or if you want the development version, replace the version above with ",(0,r.kt)("inlineCode",{parentName:"p"},"next"),"."),(0,r.kt)("p",null,"Or run one of the older versions found on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ligolang/ligo/tags"},"DockerHub"),"."))))}g.isMDXComponent=!0}}]);