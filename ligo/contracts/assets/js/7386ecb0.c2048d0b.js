"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[39636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48720:(e,t,n)=>{n.d(t,{D:()=>o.Z,Z:()=>i});var a=n(67294),o=n(75402);const i=function(e){return a.createElement(o.Z.Consumer,null,(t=>{let{syntax:n}=t;return n===e.syntax?e.children:a.createElement(a.Fragment,null)}))}},38907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),i=n(48720);const r={id:"optimisation",title:"Optimisation guide"},s=void 0,l={unversionedId:"tutorials/optimisation/optimisation",id:"version-1.5.0/tutorials/optimisation/optimisation",title:"Optimisation guide",description:"Imagine you develop a contract and try to adhere to all the business",source:"@site/versioned_docs/version-1.5.0/tutorials/optimisation/optimisation.md",sourceDirName:"tutorials/optimisation",slug:"/tutorials/optimisation/",permalink:"/previews/ligo/contracts/docs/1.5.0/tutorials/optimisation/",draft:!1,tags:[],version:"1.5.0",frontMatter:{id:"optimisation",title:"Optimisation guide"},sidebar:"docs",previous:{title:"Package management",permalink:"/previews/ligo/contracts/docs/1.5.0/advanced/package-management"},next:{title:"Smart contract security",permalink:"/previews/ligo/contracts/docs/1.5.0/tutorials/security/"}},p={},u=[{value:"Tezos gas model",id:"tezos-gas-model",level:2},{value:"What limits and fees are there?",id:"what-limits-and-fees-are-there",level:3},{value:"What should I optimise for?",id:"what-should-i-optimise-for",level:3},{value:"Optimisation targets",id:"optimisation-targets",level:2},{value:"Gas consumption",id:"gas-consumption",level:3},{value:"Code size",id:"code-size",level:3},{value:"Storage size",id:"storage-size",level:3},{value:"Excess storage",id:"excess-storage",level:3},{value:"Common optimisation techniques",id:"common-optimisation-techniques",level:2},{value:"Constants optimisation",id:"constants-optimisation",level:3},{value:"Inlining",id:"inlining",level:3},{value:"Lazy-loading",id:"lazy-loading",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Imagine you develop a contract and try to adhere to all the business\nrequirements while doing it in a secure fashion. If you do not\noptimise your contract, chances are, it will either fail to fit into\nthe hard limits or be too expensive to execute."),(0,o.kt)("p",null,"It would be hard to add ad-hoc optimisations after the contract is\nready. To avoid such situations, you need to understand what the\nlimits are, how gas is consumed, and how storage and execution fees\nare computed."),(0,o.kt)("p",null,"In this article, we will cover Tezos limits, fee model, and the basics\nof measuring and optimising your contracts."),(0,o.kt)("h2",{id:"tezos-gas-model"},"Tezos gas model"),(0,o.kt)("h3",{id:"what-limits-and-fees-are-there"},"What limits and fees are there?"),(0,o.kt)("p",null,"Bounding the contracts' complexity is crucial for public blockchains\nlike Tezos. These bounds ensure liveness \u2013 the chain's ability to\nprogress and produce new blocks in a reasonable time."),(0,o.kt)("p",null,"Limits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A limit on the ",(0,o.kt)("strong",{parentName:"li"},"operation size")," is imposed because the nodes transfer operations across the network. If an operation is too large, nodes may fail to broadcast it in time."),(0,o.kt)("li",{parentName:"ul"},"Nodes also need a ",(0,o.kt)("strong",{parentName:"li"},"block gas limit")," to place an upper bound on the number of computations required to verify a block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Operation gas limit")," ensures that there is some space in a block to fit more than one operation in.")),(0,o.kt)("p",null,"Fees:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Burn fee")," is used to prevent blockchain bloat. Users need to ",(0,o.kt)("em",{parentName:"li"},"burn")," a certain amount of Tez for each byte of storage they use so that the size of the entire chain stays reasonable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Execution fee")," acts as an incentive for the bakers.")),(0,o.kt)("h3",{id:"what-should-i-optimise-for"},"What should I optimise for?"),(0,o.kt)("p",null,"Let us see what these limits and fees depend on:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Operation type"),(0,o.kt)("th",{parentName:"tr",align:null},"Limit/fee"),(0,o.kt)("th",{parentName:"tr",align:null},"Depends on"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Origination"),(0,o.kt)("td",{parentName:"tr",align:null},"Operation size limit"),(0,o.kt)("td",{parentName:"tr",align:null},"Contract size, storage size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Origination"),(0,o.kt)("td",{parentName:"tr",align:null},"Burn fee"),(0,o.kt)("td",{parentName:"tr",align:null},"Contract size, storage size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Origination"),(0,o.kt)("td",{parentName:"tr",align:null},"Execution fee"),(0,o.kt)("td",{parentName:"tr",align:null},"Contract size, storage size, operations pressure")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"Operation size limit"),(0,o.kt)("td",{parentName:"tr",align:null},"Parameter size")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"Burn fee"),(0,o.kt)("td",{parentName:"tr",align:null},"Bytes added to storage")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"Gas limit"),(0,o.kt)("td",{parentName:"tr",align:null},"Consumed gas")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Transaction"),(0,o.kt)("td",{parentName:"tr",align:null},"Execution fee"),(0,o.kt)("td",{parentName:"tr",align:null},"Consumed gas, bytes added to storage, operations pressure")))),(0,o.kt)("p",null,"When you ",(0,o.kt)("strong",{parentName:"p"},"originate")," a contract, its code and initial storage are written to the blockchain. Let us define the number of bytes written to storage as ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes_written"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Origination is a single operation, so you must respect the ",(0,o.kt)("em",{parentName:"li"},"operation size limit"),". The operation comprises the contract's code and initial storage, and some protocol-specific data of constant size, so operation size is ",(0,o.kt)("inlineCode",{parentName:"li"},"bytes_written + const"),"."),(0,o.kt)("li",{parentName:"ul"},"During origination, you put some data into the distributed storage, so you will have to ",(0,o.kt)("em",{parentName:"li"},"burn")," ",(0,o.kt)("inlineCode",{parentName:"li"},"0.06425\ua729 + 0.00025\ua729 * bytes_written"),"."),(0,o.kt)("li",{parentName:"ul"},"To make sure your operation gets included into a block, you need to provide an incentive for the bakers. The default baker fee is proportional to the number of bytes written and the amount of gas consumed: ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0001\ua729 + 100n\ua729/gu * gas + 1000n\ua729/B * bytes_written"),". Gas consumption is zero during originations, so the default formula is reduced to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0001 \ua729 + 100n\ua729/gu * gas + 1000n\ua729/B * bytes_written"),".")),(0,o.kt)("p",null,"Thus, to reduce the origination cost, you need to reduce the size of the contract and the size of the initial storage."),(0,o.kt)("p",null,"When you make a ",(0,o.kt)("strong",{parentName:"p"},"transaction")," to a contract, things get a little more complicated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You still must respect the ",(0,o.kt)("em",{parentName:"li"},"operation size limit"),", which is proportional to the size of the parameter you pass to the contract. You may hit this limit if you try to pass a huge lambda or a container with a lot of items to a contract."),(0,o.kt)("li",{parentName:"ul"},"If, as a result of executing the contract, the size of the contract's storage exceeds its maximum historical size, you will have to pay a ",(0,o.kt)("em",{parentName:"li"},"burn fee")," for the excess bytes (",(0,o.kt)("inlineCode",{parentName:"li"},"0.00025\ua729/B * excess_bytes"),"). This may be a bit hard to grasp, but if you think about it, this behaviour is reasonable: Tezos burns money for storage no more than once, and never mints Tez back for the storage you free. Imagine the following sequence of operations:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The contract gets originated; let us assume the storage size is 500 bytes. The originator burns ",(0,o.kt)("inlineCode",{parentName:"li"},"0.06425\ua729 + 0.00025\ua729/B * 500B = 0.18925\ua729"),"."),(0,o.kt)("li",{parentName:"ul"},"During some transaction, the storage size decreases to 400 bytes."),(0,o.kt)("li",{parentName:"ul"},"You submit an operation that increases the storage size to 505 bytes. Since 500 bytes have been paid for already, you only need to burn ",(0,o.kt)("inlineCode",{parentName:"li"},"5B * 0.00025\ua729/B = 0.00125\ua729"),"."))),(0,o.kt)("li",{parentName:"ul"},"A new kind of limit you must not exceed in transactions is ",(0,o.kt)("em",{parentName:"li"},"gas limit.")," The consumed gas depends on the amount of computation required to verify your transaction."),(0,o.kt)("li",{parentName:"ul"},"Execution fees depend on the amount of gas consumed (",(0,o.kt)("inlineCode",{parentName:"li"},"gas"),"), and the excess bytes written to the storage (",(0,o.kt)("inlineCode",{parentName:"li"},"bytes_written"),"): ",(0,o.kt)("inlineCode",{parentName:"li"},"0.0001\ua729 + 100n\ua729/gu * gas + 1000n\ua729/B * bytes_written"),". Note that this is just a default formula: bakers are free to include under-priced transactions or choose the transactions with higher fees. Thus, it would make sense to add some buffer if you want to increase the probability that your transaction will be included.")),(0,o.kt)("h2",{id:"optimisation-targets"},"Optimisation targets"),(0,o.kt)("p",null,"In the previous section, we have identified the following optimisation targets:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Gas consumption"),(0,o.kt)("li",{parentName:"ol"},"Contract code size"),(0,o.kt)("li",{parentName:"ol"},"Total storage size"),(0,o.kt)("li",{parentName:"ol"},"Amount of extra bytes written to storage")),(0,o.kt)("p",null,"Another two factors \u2013 parameter size and operations pressure \u2013 are mostly out of control of the contract author."),(0,o.kt)("p",null,"Although the optimisation targets listed above are inter-related, it is reasonable to look at them in isolation because the optimisation methods may differ."),(0,o.kt)("h3",{id:"gas-consumption"},"Gas consumption"),(0,o.kt)("p",null,"Contrary to a more conventional instruction-based gas accounting, where each instruction has a cost associated with it, Tezos gas reflects actual computations and I/O operations performed by the nodes. On the one hand, it prevents vulnerabilities caused by incorrect estimation of the instruction costs. On the other hand, it makes the gas model more complex than, for example, the Ethereum one."),(0,o.kt)("p",null,"To understand how gas is spent, let us look at the phases of transaction execution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Reading the serialised contract code and storage from the context"),(0,o.kt)("li",{parentName:"ol"},"Deserialising the bytes into an intermediate representation"),(0,o.kt)("li",{parentName:"ol"},"Converting untyped intermediate representation of code and storage into typed values"),(0,o.kt)("li",{parentName:"ol"},"Interpreting the instructions"),(0,o.kt)("li",{parentName:"ol"},"Serialising the result of the computation"),(0,o.kt)("li",{parentName:"ol"},"Writing the updated storage bytes back to the context")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'Note: when we refer to "storage" and "storage size", we do not include lazy containers (big maps) into these definitions. Although conceptually big maps are a part of storage, they are handled specially.')),(0,o.kt)("p",null,"At each phase, a certain amount of gas is consumed. It would be a rough but useful approximation to say that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the amount of gas consumed at phases 1\u20133 is proportional to ",(0,o.kt)("inlineCode",{parentName:"li"},"size(code) + size(storage)")),(0,o.kt)("li",{parentName:"ul"},"the interpretation cost (phase 4) is roughly ",(0,o.kt)("inlineCode",{parentName:"li"},"cost(expensive_instructions) + k\u03b5"),", where:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cost(expensive_instructions)")," is the total cost of some specific expensive instructions \u2013 ",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_contract_opt"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Bytes.pack"),", etc. \u2013 invoked by the transaction"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"k")," \u2013 the total number of atomic Michelson instructions executed in the transaction."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\u03b5")," \u2013 the average instruction cost."))),(0,o.kt)("li",{parentName:"ul"},"the amount of gas consumed at phases 5\u20136 is proportional to ",(0,o.kt)("inlineCode",{parentName:"li"},"size(storage)"),".")),(0,o.kt)("p",null,"These approximations are not exactly true: real deserialisation gas consumption also depends on the inherent complexity of the code and data types, converting to a typed representation depends on the actual data and code being converted, and interpreter gas consumption is the sum of the instruction costs. However, such simplified formula makes it possible to lower the dimensionality of the problem and simplify analysis, while not losing much in terms of general trends. For detailed info on gas consumption, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/tezos/tezos/-/blob/52a074ab3eb43ad0087804b8521f36cb517f7c28/docs/whitedoc/gas_consumption.rst"},"Tezos gas model description"),"."),(0,o.kt)("p",null,"According to our approximations, the formula for the total gas consumption would be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u03b1(size(code) + size(storage)) + cost(expensive_instructions) + k\u03b5 + \u03b2size(storage)\n")),(0,o.kt)("p",null,"In practice, it turns out that if you do not have costly loops with a large number of iterations (i.e., your ",(0,o.kt)("inlineCode",{parentName:"p"},"k")," does not exceed the total number of instructions in the contract by orders of magnitude), the ",(0,o.kt)("inlineCode",{parentName:"p"},"k\u03b5")," term of interpreter gas consumption is negligible compared to other costs."),(0,o.kt)("p",null,"In other words, ",(0,o.kt)("strong",{parentName:"p"},"the gas consumption depends mostly on the total size of the contract code and storage")," (and possibly a small number of expensive instructions, if any). The amount of code ",(0,o.kt)("em",{parentName:"p"},"actually executed")," does not affect gas consumption as much."),(0,o.kt)("p",null,"Here is a list of instructions you should use wisely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_contract_opt")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Tezos.get_entrypoint_opt")," \u2013 converting an ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," to a typed contract costs fixed 10000 gas units plus the cost for reading and deserialising the code of the callee. If the callee is large, such operation may consume ",(0,o.kt)("em",{parentName:"li"},"a lot")," more than you might expect."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bytes.pack")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Bytes.unpack")," involve serialising and deserialising values, so their cost depends on the size of the data."),(0,o.kt)("li",{parentName:"ul"},"Big map access \u2013 reading and updating the values stored in a big map may be expensive.")),(0,o.kt)("h3",{id:"code-size"},"Code size"),(0,o.kt)("p",null,"The size of the contract code is arguably the most important optimisation target. When you originate an oversized contract, you risk hitting an operation size limit and pay more for storing the code of the contract in the context. The size of the contract matters in gas consumption as well: the bigger your contract is, the more ",(0,o.kt)("em",{parentName:"p"},"gas")," is consumed for reading, deserialising, and type-checking it."),(0,o.kt)("p",null,"LIGO offers a convenient way to measure the size of the contract code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ligo info measure-contract <SOURCE> --entry-point <ENTRYPOINT>\n")),(0,o.kt)("p",null,"You should try to minimise the size of the code as possible."),(0,o.kt)("h3",{id:"storage-size"},"Storage size"),(0,o.kt)("p",null,"There are two types of contract storage in Tezos: regular contract storage and lazy storage \u2013 big maps. Although these types are not distinguished at the language level (you can work with big maps as with any regular entry in your storage record), the difference is quite important."),(0,o.kt)("p",null,"Tezos nodes read, deserialise, and convert all non-lazy storage to typed representation ",(0,o.kt)("strong",{parentName:"p"},"upon each contract call,")," even if a transaction does not read some storage entries. Moreover, after the contract finishes its execution, the contents of the storage are serialised back into bytes and written to the persistent distributive memory, even if the storage was not modified, or just a part of it was modified by the transaction. These actions are quite resource-intensive and cost a significant amount of gas. Thus, ",(0,o.kt)("strong",{parentName:"p"},"you should do your best to reduce the amount of non-lazy storage")," occupied by your contract."),(0,o.kt)("p",null,"Lazy storage, expressed as big maps, works quite differently. Only those elements that have been explicitly read (using ",(0,o.kt)("inlineCode",{parentName:"p"},"Big_map.find_opt"),") are fetched from the context, deserialised, and converted to typed representation. If the transaction makes any changes to big map entries, only these changed entries are serialised and written to the context."),(0,o.kt)("p",null,"Why not just use big maps everywhere? Accessing big map elements one-by-one is more expensive than just reading the whole storage in batch. Moreover, big maps are quite restrictive: they do not support iterating over the elements or counting the number of elements. You need to think of how big your containers are, how often the values there are accessed, and what operations you need your containers to support."),(0,o.kt)("p",null,"Note that allowing users to extend non-lazy containers is insecure: the contract users may add entries to your containers, increasing the gas that would be consumed by your contract in the ",(0,o.kt)("em",{parentName:"p"},"next")," transactions. At some point, this may even make the contract stuck: the transactions would fail to fit into the gas limit. Thus, if users can somehow increase the size of the container, you should either use a big map or place a hard limit on the container size."),(0,o.kt)("p",null,"Is there a list of cases when you should certainly prefer using big map over regular containers such as ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"set"),"? We would say you should consider using big maps if any of these hold true:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The container is extendable by the users."),(0,o.kt)("li",{parentName:"ol"},'The container is large or unbounded. The precise definition of "large" depends on what is in the container and how many elements are accessed in transactions.'),(0,o.kt)("li",{parentName:"ol"},"You do not use the contents of the container often. For example, you may have just one entrypoint that requires accessing this container, and this entrypoint is called rarely, most probably you would want to use a big map.")),(0,o.kt)("h3",{id:"excess-storage"},"Excess storage"),(0,o.kt)("p",null,"When you make a transaction that writes something to persistent memory, you need to burn a certain amount of Tez. The amount depends on the difference between the number of bytes written and the maximum historical size of the called contract. Such storage burn applies to contract code, regular storage, and lazy storage \u2013 basically, any byte that increases the size of the context needs to be paid for. You should try to avoid patterns like event logs that may extend the storage indefinitely."),(0,o.kt)("h2",{id:"common-optimisation-techniques"},"Common optimisation techniques"),(0,o.kt)("h3",{id:"constants-optimisation"},"Constants optimisation"),(0,o.kt)("p",null,"One of the most rewarding ways to optimise your contract is shrinking the constants. For example, if your contract has long, overly-verbose error descriptions passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Tezos.failwith"),", you should consider replacing them with short abbreviated strings or even integer error codes."),(0,o.kt)("p",null,'If you have repeating constants (e.g., you may have several entrypoints that check permissions and a constant "PERMISSION_DENIED" error), you can extract these constants to a top-level binding. In this case, the LIGO compiler will generate the code of the form:'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Michelson instruction"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'PUSH string "PERMISSION_DENIED"')),(0,o.kt)("td",{parentName:"tr",align:null},"Push the error string to stack")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"..."),(0,o.kt)("td",{parentName:"tr",align:null},"...")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DIG n")),(0,o.kt)("td",{parentName:"tr",align:null},"Get the n-th stack entry and put it on top")))),(0,o.kt)("p",null,"This is cheaper than pushing the same string to stack every time it is needed. This string will be pushed to stack ",(0,o.kt)("em",{parentName:"p"},"every time")," the contract is called, regardless of whether the current entrypoint actually uses it. This will not increase gas consumption significantly since, as we discussed, the cost of ",(0,o.kt)("em",{parentName:"p"},"interpreting")," the instruction is relatively low. However, you can go further and save large constants in ",(0,o.kt)("em",{parentName:"p"},"storage")," or even in a big map."),(0,o.kt)("h3",{id:"inlining"},"Inlining"),(0,o.kt)("p",null,"Consider the following contract:"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let sum (x, y : int * int) = x + y\n\nlet main (parameter, storage : int * int) : operation list * int =\n  ([], sum (parameter, storage))\n"))),(0,o.kt)("p",null,"There are two major ways to represent functions (like ",(0,o.kt)("inlineCode",{parentName:"p"},"sum"),") in Michelson. The first way is to first push the function ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," to the stack, and then execute it with the argument ",(0,o.kt)("inlineCode",{parentName:"p"},"(parameter, storage)"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Michelson instruction"),(0,o.kt)("th",{parentName:"tr",align:null},"Stack after the instruction"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(parameter, storage)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"LAMBDA"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"  (pair int int) int"),(0,o.kt)("br",null),(0,o.kt)("inlineCode",{parentName:"td"},"  { UNPAIR; ADD }")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"{ UNPAIR; ADD }"),"; ",(0,o.kt)("inlineCode",{parentName:"td"},"(parameter, storage)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SWAP")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(parameter, storage)"),"; ",(0,o.kt)("inlineCode",{parentName:"td"},"{ UNPAIR; ADD }"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"EXEC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"parameter + storage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NIL operation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"parameter + storage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PAIR")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"([], parameter + storage)"))))),(0,o.kt)("p",null,"The second way is to replace the function call (",(0,o.kt)("inlineCode",{parentName:"p"},"LAMBDA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SWAP"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"EXEC")," sequence) with the function body, or ",(0,o.kt)("em",{parentName:"p"},"inline")," the function:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Michelson instruction"),(0,o.kt)("th",{parentName:"tr",align:null},"Stack after the instruction"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(parameter, storage)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"UNPAIR")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"parameter"),"; ",(0,o.kt)("inlineCode",{parentName:"td"},"storage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ADD")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"parameter + storage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NIL operation")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[]"),"; ",(0,o.kt)("inlineCode",{parentName:"td"},"parameter + storage"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"PAIR")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"([], parameter + storage)"))))),(0,o.kt)("p",null,"You may notice that in this case, inlining reduced the size of the contract."),(0,o.kt)("p",null,"Other declarations can be inlined as well. In this contract, the compiler may generate the code that does ",(0,o.kt)("inlineCode",{parentName:"p"},"PUSH int 4")," twice (in case there is an ",(0,o.kt)("inlineCode",{parentName:"p"},"[@inline]")," annotation), or ",(0,o.kt)("inlineCode",{parentName:"p"},"PUSH int 4; DUP")," (if there is no instruction to inline this binding):"),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},"let n = 4\n\nlet main (_, _ : unit * int) : operation list * int = [], n * n\n"))),(0,o.kt)("p",null,"LIGO will automatically inline declarations if two conditions are met:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The declaration is only used once"),(0,o.kt)("li",{parentName:"ol"},"The declaration is pure, i.e., it does not depend on the execution context or cause failure.")),(0,o.kt)("p",null,"If any of these conditions is not met, LIGO will ",(0,o.kt)("strong",{parentName:"p"},"not")," inline the declaration. You may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"[@inline]")," attribute to force inlining if the declaration is used more than once. You cannot force inlining if the declaration is not pure."),(0,o.kt)("p",null,"Unfortunately, there is no general rule on when to inline your declarations: sometimes inlining may increase the size of the contract, but in some cases \u2013 decrease it."),(0,o.kt)("p",null,"Intuitively, inlining functions is useful if:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You are inlining a function with a complex argument or return type \u2013 lambdas in Michelson require an explicit type annotation, and if you inline a function, you can omit it."),(0,o.kt)("li",{parentName:"ol"},"The function is not used often.")),(0,o.kt)("p",null,"However, the best approach is to measure the gas consumption and the size of your contract to make a decision on inlining."),(0,o.kt)("h3",{id:"lazy-loading"},"Lazy-loading"),(0,o.kt)("p",null,"This peculiar technique can be used to lower the average gas consumption of your contract by making large entrypoints a bit more expensive to call."),(0,o.kt)("p",null,"Imagine you have a contract with a number of small frequently-used entrypoints and several large entrypoints that are called rarely. During each transaction to the contract, the bakers would read ",(0,o.kt)("strong",{parentName:"p"},"the whole code")," of your contract, deserialise and type-check it, and only after that, execute the requested entrypoint."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("p",null,"It turns out we can do better. Tezos has a lazy container \u2013 big map. The contents of big map are read, deserialised and type-checked during the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Big_map.find_opt"),", and not at the beginning of the transaction. We can use this container to store the code of our heavy entrypoints: we need to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"(bool, entrypoint_lambda) big_map")," to the storage record, and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"Big_map.find_opt")," to fetch the code of the entrypoint from storage. (Note: in theory, we could use ",(0,o.kt)("inlineCode",{parentName:"p"},"(unit, entrypoint_lambda) big_map"),", but, unfortunately, ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," type is not comparable, so we cannot use it as a big map index)."),(0,o.kt)("p",null,"Here is how it looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cameligo"},'type storage = { large_entrypoint : (bool, int -> int) big_map; result : int }\n\nlet load_large_ep (store : storage) : (int -> int) =\n  let maybe_large_entrypoint =\n    Big_map.find_opt true (store.large_entrypoint) in\n  match maybe_large_entrypoint with\n    Some ep -> ep\n  | None -> failwith "Internal error"\n\n[@entry]\nlet large_entry_point (n : int) (store :  storage) : operation list * storage =\n  [], {store with result = (load_large_ep store) n}\n\n(* Other entrypoints ... *)\n'))),(0,o.kt)("p",null,"We can now put the code of this large entrypoint to storage upon the\ncontract origination. If we do not provide any means to change the\nstored lambda, the immutability of the contract will not be affected."),(0,o.kt)(i.Z,{syntax:"cameligo",mdxType:"Syntax"},(0,o.kt)("p",null,"This pattern is also useful if you have long code blocks that repeat\nacross some subset of entrypoints. For example, if you develop a\ncustom token, you may need different flavors of transfers with a\ncommon pre-transfer check. In this case, you can add a lambda\n",(0,o.kt)("inlineCode",{parentName:"p"},"preTransferCheck : (transfer_params -> bool)")," to the storage and call\nit upon transfer.")),(0,o.kt)("p",null,"However, you always need to measure the gas consumption and the\noccupied storage. It may be the case that the wrapper code that\nextracts the lambda from storage and calls it is costlier than the\npiece of code you are trying to optimise."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"We have discussed the Tezos fee and gas model and identified the\nfollowing optimisation targets: contract and storage size, gas\nconsumption, and excess bytes written to storage. We also discussed\ninlining, constants optimisation, lazy storage, and lazy entrypoint\nloading. We hope these techniques can help you develop contracts that\nrequire fewer resources to execute. And, we cannot stress this enough:\n",(0,o.kt)("strong",{parentName:"p"},"always measure your contracts.")))}d.isMDXComponent=!0}}]);