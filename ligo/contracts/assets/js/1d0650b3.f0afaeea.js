"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4464],{48720:(e,t,n)=>{n.d(t,{D:()=>r.Z,Z:()=>o});var a=n(67294),r=n(75402);const o=function(e){return a.createElement(r.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},99191:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(43164),r=n(67294),o=n(52263),i=n(48720),s=n(11506);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const{Prism:c}=n(43164);c.languages={...c.languages,cameligo:{...c.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:c.languages.typescript};const m=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,o.Z)(),n=t.singleTheme||s.Z,[c,m]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{m(!0)}),[]),r.createElement(i.D.Consumer,null,(t=>{let{syntax:o}=t;return o===e.syntax?r.createElement(a.default,l({},a.defaultProps,{key:c,language:e.syntax,code:e.children,theme:n}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:o}=e;return r.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},n.map(((e,t)=>r.createElement("div",a({line:e,key:t}),e.map(((e,t)=>r.createElement("span",o({token:e,key:t}))))))))})):r.createElement("div",null)}))}},16684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=(n(48720),n(99191));const i={id:"test.next.michelson-reference",title:"michelson",hide_table_of_contents:!0},s=void 0,l={unversionedId:"reference/test.next.michelson-reference",id:"version-1.5.0/reference/test.next.michelson-reference",title:"michelson",description:"module contract",source:"@site/versioned_docs/version-1.5.0/reference/test.next.michelson.md",sourceDirName:"reference",slug:"/reference/test.next.michelson-reference",permalink:"/docs/1.5.0/reference/test.next.michelson-reference",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"test.next.michelson-reference",title:"michelson",hide_table_of_contents:!0},sidebar:"API",previous:{title:"originate",permalink:"/docs/1.5.0/reference/test.next.originate-reference"},next:{title:"contract",permalink:"/docs/1.5.0/reference/test.next.michelson.contract-reference"}},c={},m=[],p={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/1.5.0/reference/test.next.michelson.contract-reference"},"module contract")),(0,r.kt)(o.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val run : 'a 'b.('a -> 'b) -> 'a -> michelson_program"),(0,r.kt)(o.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let run: <a, b>(_: (_: a) => b) => (_: a) => michelson_program"),"Run a function on an input, all in Michelson. More concretely: a) compiles the function argument to Michelson `f_mich`; b) compiles the value argument (which was evaluated already) to Michelson `v_mich`; c) runs the Michelson interpreter on the code `f_mich` with starting stack `[v_mich]`.",(0,r.kt)(o.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val eval : 'a.'a -> michelson_program"),(0,r.kt)(o.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let eval: <a>(_: a) => michelson_program"),"Compile a LIGO value to Michelson. Currently it is a renaming of `compile_value`.",(0,r.kt)(o.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val decompile : 'a.michelson_program -> 'a"),(0,r.kt)(o.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let decompile: <a>(_: michelson_program) => a"),"Decompile a Michelson value to LIGO, following the (mandatory) type annotation. Note: This operation can fail at run-time, in case that the `michelson_program` given cannot be decompiled to something compatible with the annotated type.",(0,r.kt)(o.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val parse : string -> michelson_program"),(0,r.kt)(o.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let parse: (_: string) => michelson_program"),"Parses Michelson (as string) into a `michelson_program`.")}h.isMDXComponent=!0}}]);