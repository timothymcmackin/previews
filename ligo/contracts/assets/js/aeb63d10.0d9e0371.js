"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[296],{48720:(e,t,a)=>{a.d(t,{D:()=>o.Z,Z:()=>i});var n=a(67294),o=a(75402);const i=function(e){return n.createElement(o.Z.Consumer,null,(t=>{let{syntax:a}=t;return a===e.syntax?e.children:n.createElement(n.Fragment,null)}))}},99191:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(43164),o=a(67294),i=a(52263),s=a(48720),l=a(11506);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const{Prism:p}=a(43164);p.languages={...p.languages,cameligo:{...p.languages.ocaml,comment:[/(^|[^\\])\/\*[\s\S]*?\*\//,/\(\*[\s\S]*?\*\)/,/\/\/.*/]},jsligo:p.languages.typescript};const c=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=(0,i.Z)(),a=t.singleTheme||l.Z,[p,c]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{c(!0)}),[]),o.createElement(s.D.Consumer,null,(t=>{let{syntax:i}=t;return i===e.syntax?o.createElement(n.default,r({},n.defaultProps,{key:p,language:e.syntax,code:e.children,theme:a}),(e=>{let{className:t,tokens:a,getLineProps:n,getTokenProps:i}=e;return o.createElement("h4",{className:t,style:{backgroundColor:"var(--ifm-background-color)",fontFamily:"var(--ifm-font-family-monospace)",lineHeight:"var(--ifm-pre-line-height)",fontSize:"1.1rem",fontWeight:"bold",padding:0,whiteSpace:"break-spaces",marginTop:"3rem"}},a.map(((e,t)=>o.createElement("div",n({line:e,key:t}),e.map(((e,t)=>o.createElement("span",i({token:e,key:t}))))))))})):o.createElement("div",null)}))}},82310:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=a(87462),o=(a(67294),a(3905)),i=a(48720),s=a(99191);const l={id:"current-reference",title:"Tezos",description:"General operations for Tezos",hide_table_of_contents:!0},r=void 0,p={unversionedId:"reference/current-reference",id:"version-1.7.0/reference/current-reference",title:"Tezos",description:"General operations for Tezos",source:"@site/versioned_docs/version-1.7.0/reference/current.md",sourceDirName:"reference",slug:"/reference/current-reference",permalink:"/docs/reference/current-reference",draft:!1,tags:[],version:"1.7.0",frontMatter:{id:"current-reference",title:"Tezos",description:"General operations for Tezos",hide_table_of_contents:!0}},c={},g=[{value:"Examples",id:"examples",level:3},{value:"24 hours from now",id:"24-hours-from-now",level:4},{value:"24 hours ago",id:"24-hours-ago",level:4},{value:"Comparing Timestamps",id:"comparing-timestamps",level:4},{value:"Sapling",id:"sapling",level:2},{value:"Linearity",id:"linearity",level:3},{value:"Timelock",id:"timelock",level:2}],m={toc:g};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_balance : unit -> tez"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_balance: (_u: unit) => tez"),(0,o.kt)("p",null,"Get the balance for the contract."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (p,s : unit * tez) = [], Tezos.get_balance()\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo"},"let check = (p: unit, s: tez):[list<operation>, tez] =>\n  [[], Tezos.get_balance()];\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_now : unit -> timestamp"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_now: (_u : unit) => timestamp"),(0,o.kt)("p",null,"Returns the current time as a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unix_time"},"UNIX timestamp"),"."),(0,o.kt)("p",null,"In LIGO, timestamps are type compatible in operations with\nintegers. This lets you set for instance time constraints for your\nsmart contracts like this:"),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"24-hours-from-now"},"24 hours from now"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=b",group:"b"},'let today         = Tezos.get_now ()\nlet one_day       = 86_400\nlet in_24_hrs     = today + one_day\nlet some_date     = ("2000-01-01t10:10:10Z" : timestamp)\nlet one_day_later = some_date + one_day\n'))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=b",group:"b"},'let today         = Tezos.get_now();\nlet one_day       = 86_400;\nlet in_24_hrs     = today + one_day;\nlet some_date     = ("2000-01-01t10:10:10Z" as timestamp);\nlet one_day_later = some_date + one_day;\n'))),(0,o.kt)("h4",{id:"24-hours-ago"},"24 hours ago"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=c",group:"c"},"let today     = Tezos.get_now ()\nlet one_day   = 86_400\nlet in_24_hrs = today - one_day\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=c",group:"c"},"let today     = Tezos.get_now();\nlet one_day   = 86_400;\nlet in_24_hrs = today - one_day;\n"))),(0,o.kt)("h4",{id:"comparing-timestamps"},"Comparing Timestamps"),(0,o.kt)("p",null,"You can also compare timestamps using the same comparison operators as\nfor numbers"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=c",group:"c"},"let not_tomorrow = (Tezos.get_now () = in_24_hrs)\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=c",group:"c"},"let not_tomorrow = (Tezos.get_now() == in_24_hrs);\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_amount : unit -> tez"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_amount: (_u : unit) => tez"),(0,o.kt)("p",null,"Get the amount of tez provided by the sender to complete this\ntransaction."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let threshold (p : unit) = if Tezos.get_amount () = 100tz then 42 else 0\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo"},"function threshold (p : unit) {\n  if (Tezos.get_amount() == 100tez) return 42 else return 0;\n};\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_sender : unit -> address"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_sender: (_u : unit) => address"),(0,o.kt)("p",null,"Get the address that initiated the current transaction."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (p : unit) = Tezos.get_sender ()\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=e",group:"e"},"let check = (p : unit) => Tezos.get_sender ();\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val address : 'a contract -> address"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let address: (contract: contract<'a>) => address"),(0,o.kt)("p",null,"Get the address associated with a value of type ",(0,o.kt)("inlineCode",{parentName:"p"},"contract"),"."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (p : key_hash) =\n  let c = Tezos.implicit_account p\n  in Tezos.address c\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=f",group:"f"},"let check = (p : key_hash) => {\n  let c = Tezos.implicit_account(p);\n  return Tezos.address(c);\n};\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_self_address : unit -> address"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_self_address: (_u : unit) => address"),(0,o.kt)("p",null,"Get the address of the currently running contract."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (p : unit) = Tezos.get_self_address ()\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=g",group:"g"},"let check = (p : unit) => Tezos.get_self_address();\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val self : string -> 'a contract"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let self: (entrypoint: string) => contract<'a>"),(0,o.kt)("p",null,'Typecast the currently running contract with an entrypoint annotation.\nIf you are using entrypoints, use "%bar" for a constructor "Bar". If\nyou are not using entrypoints: use "%default"'),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},'let check (p : unit) = Tezos.self("%default")\n'))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=h",group:"h"},'let check = (p: unit) => Tezos.self("%default");\n'))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val implicit_account : key_hash -> 'a contract"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let implicit_account : (_: key_hash) => contract<unit>"),(0,o.kt)("p",null,"Get the default contract associated with an on-chain key-pair. This\ncontract does not execute code, instead it exists to receive tokens on\nbehalf of a key's owner."),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"http://tezos.gitlab.io/user/glossary.html#implicit-account"},"http://tezos.gitlab.io/user/glossary.html#implicit-account")),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (kh : key_hash) = Tezos.implicit_account kh\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=i",group:"i"},"let check = (kh: key_hash) => Tezos.implicit_account(kh);\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_source : unit -> address"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_source: (_u : unit) => address"),(0,o.kt)("p",null,"Get the ",(0,o.kt)("em",{parentName:"p"},"originator")," (address) of the current transaction. That is, if\na chain of transactions led to the current execution get the address\nthat began the chain. Not to be confused with ",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.get_sender"),", which\ngives the address of the contract or user which directly caused the\ncurrent transaction."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f There are a few caveats you should keep in mind before using\n",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.get_source")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.get_sender"),":"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_source")," will never be a contract, so if you want to allow\ncontracts (multisigs etc) to operate your contract, you need to\nuse ",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_sender")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://vessenes.com/tx-origin-and-ethereum-oh-my/"},"https://vessenes.com/tx-origin-and-ethereum-oh-my/")," -- in general\nit is somewhat unsafe to assume that ",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_source")," understands\neverything that is going to happen in a transaction. If\n",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_source")," transfers to a malicious (or sufficiently\nattackable) contract, that contract might potentially transfer to\nyours, without ",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_source"),"'s consent. So if you are using\n",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_source")," for authentication, you risk being confused. A\ngood historical example of this is bakers paying out delegation\nrewards. Naive bakers did (and probably still do) just use\ntezos-client to transfer to whatever KT1 delegates they had, even\nif those KT1 were malicious scripts."))),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let check (p : unit) = Tezos.get_source ()\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=j",group:"j"},"let check = (p : unit) => Tezos.get_source();\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val failwith : 'a -> unit"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let failwith: (message: 'a) => unit"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/toplevel-reference#failwith"},"See ",(0,o.kt)("inlineCode",{parentName:"a"},"failwith"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_chain_id : unit -> chain_id"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_chain_id: (_u : unit) => chain_id"),(0,o.kt)("p",null,"Get the identifier of the chain to distinguish between main and test chains."),(0,o.kt)("p",null,"This is mainly intended to avoid replay attacks between the chains, and can currently\nonly be used together with ",(0,o.kt)("inlineCode",{parentName:"p"},"Bytes.pack")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Bytes.unpack"),"."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},'type storage = bytes\n\n[@entry]\nlet main (_ignore : unit) (store : storage) =\n  let packed = Bytes.pack (Tezos.get_chain_id ()) in\n  if (store <> packed) then\n    (failwith "wrong chain" : (operation list * storage))\n  else\n    ([], (packed: storage))\n'))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=k",group:"k"},'type storage = bytes;\n\n@entry\nlet main = (_ignore: unit, storage: storage) : [list<operation>, storage] => {\n  let packed = Bytes.pack(Tezos.get_chain_id());\n  if (storage != packed) {\n    return failwith("wrong chain") as [list<operation>, storage];\n  } else {\n    return [[], packed];\n  };\n};\n'))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val transaction : 'param -> mutez -> 'param contract -> operation"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let transaction: (action: 'param, amount: mutez, contract: contract<'param>) => operation"),(0,o.kt)("p",null,"Transfer ",(0,o.kt)("inlineCode",{parentName:"p"},"tez")," to an account, or run code of another smart contract."),(0,o.kt)("p",null,"To indicate an account, use ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"param"),"."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val create_contract : ('param -> 'storage -> operation list * 'storage) -> key_hash option -> tez -> 'storage -> (operation * address)"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let create_contract = (contract: ('param, 'storage) => (list <operation>, 'storage), delegate: option<key_hash>, balance: tez, init: 'storage) => [operation, address]"),(0,o.kt)("p",null,"Construct an operation that originates a contract from a function. The\noptional argument of type ",(0,o.kt)("inlineCode",{parentName:"p"},"key_hash")," represents a delegate."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val set_delegate : key_hash option -> operation"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let set_delegate: (delegate: option<key_hash>) => operation"),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("a",{parentName:"p",href:"http://tezos.gitlab.io/user/glossary.html?highlight=delegate#delegate"},"delegate")," of the current contract."),(0,o.kt)("p",null,"The operation fails when:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the delegate is the same as current delegate"),(0,o.kt)("li",{parentName:"ul"},"the keyhash is not of a registered delegate")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," to withdraw the current delegate."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_contract_opt : address -> 'param contract option"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_contract_opt : (a: address) => option<contract<'param>>"),(0,o.kt)("p",null,"Get a contract from an address."),(0,o.kt)("p",null,"When no contract is found or the contract doesn't match the type,\n",(0,o.kt)("inlineCode",{parentName:"p"},"None")," is returned."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_contract_with_error : address -> string -> 'param contract"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_contract_with_error : (a: address,s: string) => contract<'param>"),(0,o.kt)("p",null,"Get a contract from an address."),(0,o.kt)("p",null,"When no contract is found, fail with the provided string"),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_entrypoint_opt : string -> address -> 'param contract option"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_entrypoint_opt: (entrypoint: string, a: address) => option<contract<'param>>"),(0,o.kt)("p",null,"Get a contract from an address and entrypoint."),(0,o.kt)("p",null,"Entrypoints are written in the form of: ",(0,o.kt)("inlineCode",{parentName:"p"},"%entrypoint"),"."),(0,o.kt)("p",null,"When no contract is found or the contract doesn't match the type,\n",(0,o.kt)("inlineCode",{parentName:"p"},"None")," is returned."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_level : unit -> nat"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_level : (_u : unit) => nat"),(0,o.kt)("p",null,"Get the current block level."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val min_block_time : unit -> nat"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let min_block_time: unit => nat;"),(0,o.kt)("p",null,"Returns the current minimal time between blocks, the value is obtained from the protocol\u2019s minimal_block_delay constant."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val pairing_check : (bls12_381_g1 * bls12_381_g2) list -> bool"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let pairing_check: list<[bls12_381_g1, bls12_381_g2]>) => bool"),(0,o.kt)("p",null,"Verify that the product of pairings of the given list of points is equal to 1 in Fq12. Returns true if the list is empty.\nCan be used to verify if two pairings P1 and P2 are equal by verifying ",(0,o.kt)("inlineCode",{parentName:"p"},"P1 * P2^(-1) = 1"),".\n(extracted from Tezos documentation)"),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val never : never -> 'a"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let never: (never: never) => 'a"),(0,o.kt)("p",null,"Eliminate a value of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"never")," using the instruction ",(0,o.kt)("inlineCode",{parentName:"p"},"NEVER"),"\nfrom Michelson."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val get_total_voting_power : unit -> nat"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let get_total_voting_power: (_u : unit) => nat"),(0,o.kt)("p",null,"Return the total voting power of all contracts. The total voting power coincides with the sum of the rolls count of every contract in the voting listings. The voting listings is calculated at the beginning of every voting period."),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val voting_power : key_hash -> nat"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let voting_power: (key_hash:key_hash) => nat"),(0,o.kt)("p",null,"Return the voting power of a given contract. The voting power value is the full staking power of the delegate, currently expressed in mutez. Though, developers should not rely on ",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.voting_power")," to query the staking power of a contract in mutez: the value returned by ",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.voting_power")," is still of type",(0,o.kt)("inlineCode",{parentName:"p"},"nat and it should only be considered relative to"),"Tezos.total_voting_power`."),(0,o.kt)("h2",{id:"sapling"},"Sapling"),(0,o.kt)("p",null,"Delphi protocol introduced the following sapling types (state and transaction) with N being an int singleton"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=sap_t",group:"sap_t"},"type st = 8 sapling_state\ntype tr = 8 sapling_transaction\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=sap_t",group:"sap_t"},"type st = sapling_state<8>;\ntype tr = sapling_transaction<8>;\n"))),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val sapling_empty_state : 'n sapling_state"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let sapling_empty_state: sapling_state<n>"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=sap_t",group:"sap_t"},"let x = Tezos.sapling_empty_state\n"))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=sap_t",group:"sap_t"},"let x = Tezos.sapling_empty_state ;\n"))),(0,o.kt)("p",null,"Sapling empty state"),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val sapling_verify_update : 'a sapling_transaction -> 'a sapling_state -> (bytes * (int * 'a sapling_state)) option"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let sapling_verify_update: sapling_transaction<'a> => sapling_state<'a> => option<[bytes, [int, sapling_state<'a>]]>"),(0,o.kt)("p",null,"Verify sapling update"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=sap_t",group:"sap_t"},'let f (tr : tr) =\n  match Tezos.sapling_verify_update tr x with\n    Some (_, x) -> x\n  | None -> (failwith "failed" : int * st)\n'))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=sap_t",group:"sap_t"},'let f = (tr : tr) =>\n  match (Tezos.sapling_verify_update(tr, x)) {\n    when(Some(p)): p[1];\n    when(None()): failwith ("failed")\n  };\n'))),(0,o.kt)("h3",{id:"linearity"},"Linearity"),(0,o.kt)("p",null,"If a contract storage type contains a ticket, you must destructure the parameter-storage pair within the body to preserve storage linearity (e.g. avoid ",(0,o.kt)("inlineCode",{parentName:"p"},"DUP"),"-ing storage).\nFor the same reasons, if tickets are stored in a ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"big_map")," you must use the new operator ",(0,o.kt)("inlineCode",{parentName:"p"},"get_and_update")," to update your bindings."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"group=contract_ticket",group:"contract_ticket"},'type storage = (string, int ticket) big_map\ntype parameter = int\ntype result = operation list * storage\n\n[@entry]\nlet main (i : parameter) (store : storage) : result =\n  let my_ticket1 = Option.unopt (Tezos.create_ticket i 10n) in\n  let _, x = Big_map.get_and_update "hello" (Some my_ticket1) store\n  in [], x\n'))),(0,o.kt)(i.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"group=contract_ticket",group:"contract_ticket"},'type storage = big_map<string, ticket<int>> ;\n\ntype parameter = int ;\n\ntype result = [list<operation>, storage];\n\n@entry\nfunction main (i: parameter, store : storage): result {\n  let my_ticket1 = Option.unopt (Tezos.create_ticket (i, 10n));\n  let [_x, ret] = Big_map.get_and_update ("hello", Some(my_ticket1), store);\n  return [[], ret]\n};\n'))),(0,o.kt)("h2",{id:"timelock"},"Timelock"),(0,o.kt)(s.Z,{syntax:"cameligo",mdxType:"SyntaxTitle"},"val open_chest : chest_key -> chest -> nat -> bytes option"),(0,o.kt)(s.Z,{syntax:"jsligo",mdxType:"SyntaxTitle"},"let open_chest : (key: chest_key, chest: chest, time: nat) => option<bytes>"),(0,o.kt)("p",null,"Open a timelocked chest given its key and the time."))}u.isMDXComponent=!0}}]);