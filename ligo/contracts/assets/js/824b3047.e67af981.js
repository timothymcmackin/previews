"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57978],{3905:(t,n,e)=>{e.d(n,{Zo:()=>y,kt:()=>m});var a=e(67294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)e=o[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var l=a.createContext({}),p=function(t){var n=a.useContext(l),e=n;return t&&(e="function"==typeof t?t(n):r(r({},n),t)),e},y=function(t){var n=p(t.components);return a.createElement(l.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,y=s(t,["components","mdxType","originalType","parentName"]),d=p(e),m=i,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return e?a.createElement(g,r(r({ref:n},y),{},{components:e})):a.createElement(g,r({ref:n},y))}));function m(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var o=e.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var p=2;p<o;p++)r[p]=e[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,e)}d.displayName="MDXCreateElement"},48720:(t,n,e)=>{e.d(n,{D:()=>i.Z,Z:()=>o});var a=e(67294),i=e(75402);const o=function(t){return a.createElement(i.Z.Consumer,null,(n=>{let{syntax:e}=n;return e===t.syntax?t.children:a.createElement(a.Fragment,null)}))}},45135:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>y});var a=e(87462),i=(e(67294),e(3905)),o=e(48720);const r={},s="Dynamic entrypoints",l={unversionedId:"advanced/dynamic-entrypoints",id:"advanced/dynamic-entrypoints",title:"Dynamic entrypoints",description:"Definition",source:"@site/../docs/advanced/dynamic-entrypoints.md",sourceDirName:"advanced",slug:"/advanced/dynamic-entrypoints",permalink:"/previews/ligo/contracts/docs/next/advanced/dynamic-entrypoints",draft:!1,tags:[],version:"current",frontMatter:{}},p={},y=[{value:"Definition",id:"definition",level:2},{value:"Storage",id:"storage",level:3},{value:"<code>@dyn_entry</code> declaration",id:"dyn_entry-declaration",level:3},{value:"Opted out dynamic entrypoints",id:"opted-out-dynamic-entrypoints",level:3},{value:"Set and call dynamic entrypoints",id:"set-and-call-dynamic-entrypoints",level:2},{value:"Set an entrypoint",id:"set-an-entrypoint",level:3},{value:"Get an entrypoint",id:"get-an-entrypoint",level:3},{value:"Misc",id:"misc",level:2},{value:"compile storage",id:"compile-storage",level:3},{value:"testing",id:"testing",level:3}],c={toc:y};function d(t){let{components:n,...e}=t;return(0,i.kt)("wrapper",(0,a.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dynamic-entrypoints"},"Dynamic entrypoints"),(0,i.kt)("h2",{id:"definition"},"Definition"),(0,i.kt)("p",null,"Dynamic entrypoints are lazy entrypoints stored in the contract within a big_map. They can then be updated or removed without deploying a new contract.",(0,i.kt)("br",{parentName:"p"}),"\n","A contract with dynamic entrypoints must have at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"@entry")," declaration (as any other contract); must obey some convention on storage type definition and have at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"@dyn_entry")," declaration.",(0,i.kt)("br",{parentName:"p"}),"\n","LIGO will then include the defined dynamic entries into the contract initial storage."),(0,i.kt)("h3",{id:"storage"},"Storage"),(0,i.kt)("p",null,"The contract storage must be a record with two fields (",(0,i.kt)("inlineCode",{parentName:"p"},"storage")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_entrypoints"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"storage")," is your contract's storage type (as a normal contract)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dynamic_entrypoints")," must be of type ",(0,i.kt)("inlineCode",{parentName:"li"},"(nat,bytes) big_map"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_entrypoints")," type is defined in the standard library so you can use type puning")),(0,i.kt)("p",null,"e.g."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"  type my_storage =\n    {\n     storage : int;\n     dynamic_entrypoints\n    }\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"  type my_storage =\n    {\n     storage : int;\n     dynamic_entrypoints\n    }\n"))),(0,i.kt)("h3",{id:"dyn_entry-declaration"},(0,i.kt)("inlineCode",{parentName:"h3"},"@dyn_entry")," declaration"),(0,i.kt)("p",null,"Dynamic entries, just like static entries must be declared in contract's top-level and have the type of an entrypoint.  "),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"(* define at least one entry *)\n[@entry]\nlet nop () (s: int) : operation list * int = [], s\n\n(* define a dynamic entrypoint *)\n[@dyn_entry]\nlet one () (_ : int) : operation list * int = [], 1\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"// define at least one entry\n@entry\nconst nop = ([], s: int) : [list<operation>, int] => [[], s]\n\n// define a dynamic entrypoint\n@dyn_entry\nconst one = ([], _i : int) : [list<operation>, int] => [[], 1]\n"))),(0,i.kt)("p",null,"The dynamic entry storage type will typically coincide with the contract storage type but can be different"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"[@dyn_entry]\nlet one_with_different_storage () (_: nat) : operation list * nat = [], 1n\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"@dyn_entry\nconst one_with_different_storage = ([], _n : nat) : [list<operation>, nat] => [[], 1n]\n"))),(0,i.kt)("h3",{id:"opted-out-dynamic-entrypoints"},"Opted out dynamic entrypoints"),(0,i.kt)("p",null,"Sometime you know an entrypoint might be defined in your contract's lifetime but you don't have any implementation yet. In this case, you can add a ",(0,i.kt)("inlineCode",{parentName:"p"},"@dyn_entry")," declaration to your contract; give it a type and use a special expression to make ligo aware that this entry exists but should not be included in the initial storage."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},'[@dyn_entry]\nlet opted_out : int ticket -> int -> operation list * int = [%external ("OPT_OUT_ENTRY", ())]\n'))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"@dyn_entry\nconst opted_out = (_t: ticket<int>, _i: int) : [list<operation>, int] => (External `OPT_OUT_ENTRY`)\n"))),(0,i.kt)("h2",{id:"set-and-call-dynamic-entrypoints"},"Set and call dynamic entrypoints"),(0,i.kt)("p",null,"Once your dynamic entrypoints defined you can now update or call them.",(0,i.kt)("br",{parentName:"p"}),"\n","One important thing is that the variables associated to dynamic entrypoints are understood by LIGO as typed keys into the ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_entrypoints")," big map."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("p",null,"LIGO uses an abstract type ",(0,i.kt)("inlineCode",{parentName:"p"},"('a,'b) dynamic_entrypoint")," to denote such keys.")),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("p",null,"LIGO uses an abstract type ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic_entrypoint<a, b>")," to denote such keys.")),(0,i.kt)("p",null,"i.e. the ",(0,i.kt)("inlineCode",{parentName:"p"},"one")," entry defined above, would type as follow:"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"let just_a_key : (unit,int) dynamic_entrypoint = one\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"let just_a_key : dynamic_entrypoint<unit, int> = one\n"))),(0,i.kt)("p",null,"As a consequence, dynamic entrypoints are not callable:"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"(* this would not type because one is not a function *)\nlet foo = one () 42\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"(* this would not type because one is not a function *)\nlet foo = one([], 42)\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," Of course, it is possible to make an entry callable with an intermediary function")),(0,i.kt)("p",null,"LIGO standard library exposes three function to help you set and call your dynamic entrypoints:"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"(* module Dynamic_entry *)\nval set :\n  ('p, 's) dynamic_entrypoint\n  -> ('p, 's) entrypoint option \n  -> dynamic_entrypoints \n  -> dynamic_entrypoints\n\nval get : \n  ('p, 's) dynamic_entrypoint\n  -> dynamic_entrypoints \n  -> ('p, 's) entrypoint option\n\nval set_bytes : \n  ('p, 's) dynamic_entrypoint\n  -> bytes option\n  -> dynamic_entrypoints \n  -> dynamic_entrypoints\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"(* module Dynamic_entry *)\nconst set : <P, S>(x1: dynamic_entrypoint<P, S>, x2: option<entrypoint>, x3: dynamic_entrypoints) => dynamic_entrypoints\n\nconst get : <P, S>(x1: dynamic_entrypoint<P, S>, x2: dynamic_entrypoints) => option<dynamic_entrypoint<P, S>>\n\nconst set_bytes : <P, S>(x1: dynamic_entrypoint<P, S>, x2: option<bytes>, x3: dynamic_entrypoints) => dynamic_entrypoints\n"))),(0,i.kt)("h3",{id:"set-an-entrypoint"},"Set an entrypoint"),(0,i.kt)("p",null,"To set an dynamic entrypoint within a static entrypoint, just use ",(0,i.kt)("inlineCode",{parentName:"p"},"Dynamic_entrypoints.set"),":"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"[@entry]\nlet set_one (one_v2 : (unit, int) entrypoint) (s : storage) : operation list * storage =\n  let dynamic_entrypoints =\n    Dynamic_entrypoints.set one (Some one_v2) s.dynamic_entrypoints in\n  [], {s with dynamic_entrypoints}\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"@entry\nconst set_one = (one_v2 : entrypoint<unit, int>, s : storage) : [list<operation>, storage] => {\n  let dynamic_entrypoints =\n    Dynamic_entrypoints.set(one, Some(one_v2), s.dynamic_entrypoints);\n  return [[], {...s, dynamic_entrypoints}]\n}\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"NOTE:"))," Alternatively, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Dynamic_entrypoints.set_entrypoint_bytes")," to set an entrypoints to its bytes encoding directly. If your encoding is wrong, any call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Dynamic_entrypoints.get")," will fail at run-time")),(0,i.kt)("h3",{id:"get-an-entrypoint"},"Get an entrypoint"),(0,i.kt)("p",null,"To get an dynamic entrypoint within a static entrypoint and call it just use ",(0,i.kt)("inlineCode",{parentName:"p"},"Dynamic_entrypoints.get"),":"),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"[@entry]\nlet call_one () (s : storage) : operation list * storage =\n  match Dynamic_entrypoints.get one s.dynamic_entrypoints with\n    Some f ->\n      let op, storage = f () s.storage in\n      op, {s with storage}\n  | None -> failwith (-1)\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"@entry\nconst call_one = ([], s : storage) : [list<operation>, storage] =>\n  match (Dynamic_entrypoints.get(one, s.dynamic_entrypoints)) {\n    when (Some(f)): do {\n      const [op, storage] = f([], s.storage);\n      return [op, ({...s, storage})]\n    };\n    when (None): failwith(-1);\n  }\n"))),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("h3",{id:"compile-storage"},"compile storage"),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"compile storage")," on a contract holding dynamic entrypoints, you are expected to provide a value of your storage field type."),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},'> ligo compile storage dynamic_entrypoints.mligo "42"\n    (Pair 42\n          { Elt 0\n                0x050200000029032009310000001d035b0765055f036d035b020000000e03200743035b0001053d036d034200000000 ;\n            Elt 1\n                0x05020000002f03200931000000230765035b035b096500000008055f036d035b035b000000000200000006053d036d034200000000 })\n'))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-zsh"},'> ligo compile storage dynamic_entrypoints.jsligo "42"\n    (Pair 42\n          { Elt 0\n                0x050200000029032009310000001d035b0765055f036d035b020000000e03200743035b0001053d036d034200000000 ;\n            Elt 1\n                0x05020000002f03200931000000230765035b035b096500000008055f036d035b035b000000000200000006053d036d034200000000 })\n'))),(0,i.kt)("h3",{id:"testing"},"testing"),(0,i.kt)("p",null,"In the testing framework, you can use to 'Test.storage_with_dynamic_entrypoints' to obtain your contract initial storage. "),(0,i.kt)(o.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cameligo",metastring:"skip",skip:!0},"let test_dyn =\n  let init_storage = Test.storage_with_dynamic_entrypoints (contract_of C) 42 in\n  let (addr, _, _) = Test.originate (contract_of  C) init_storage 0mutez in\n  (* Call initial one *)\n  let _ = Test.transfer_to_contract (Test.to_contract addr) (Call_one ()) 1mutez in\n  let () = assert ((Test.get_storage addr).storage = 1) in\n  (* Change initial one and call it *)\n  let f = fun () (i : int) : operation list * int -> [], i + 1 in\n  let _ = Test.transfer_to_contract (Test.to_contract addr) (Set_one f) 1mutez in\n  let _ = Test.transfer_to_contract (Test.to_contract addr) (Call_one ()) 1mutez in\n  let () = assert ((Test.get_storage addr).storage = 2) in\n  ()\n"))),(0,i.kt)(o.Z,{syntax:"jsligo",mdxType:"Syntax"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsligo",metastring:"skip",skip:!0},"const test_dyn = do {\n  const init_storage = Test.storage_with_dynamic_entrypoints(contract_of(C), 42);\n  const [addr, _init, _balance] = Test.originate (contract_of(C), init_storage, 0mutez);\n  /* Call initial one */\n  Test.transfer_to_contract (Test.to_contract(addr), Call_one(), 1mutez);\n  assert ((Test.get_storage(addr)).storage == 1);\n  /* Change initial one and call it */\n  const f = (_unit : unit, i : int) : [list<operation>, int] => [[], i + 1];\n  Test.transfer_to_contract (Test.to_contract(addr), (Set_one(f)), 1mutez);\n  Test.transfer_to_contract (Test.to_contract(addr), (Call_one()), 1mutez);\n  assert ((Test.get_storage(addr)).storage == 2);\n  return []\n}\n"))))}d.isMDXComponent=!0}}]);