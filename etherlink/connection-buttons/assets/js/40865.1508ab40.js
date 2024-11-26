"use strict";
exports.id = 40865;
exports.ids = [40865,11223];
exports.modules = {

/***/ 11223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatHex: () => (/* binding */ concatHex)
/* harmony export */ });
/**
 * Concatenates an array of hexadecimal values into a single hexadecimal value.
 *
 * @param values - An array of hexadecimal values to concatenate.
 * @returns The concatenated hexadecimal value.
 * @utils
 */
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
//# sourceMappingURL=concat-hex.js.map

/***/ }),

/***/ 40865:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  connectSmartWallet: () => (/* binding */ connectSmartWallet),
  disconnectSmartWallet: () => (/* binding */ disconnectSmartWallet),
  isSmartWallet: () => (/* binding */ isSmartWallet),
  personalAccountToSmartAccountMap: () => (/* binding */ personalAccountToSmartAccountMap)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/signature/hashTypedData.js
var hashTypedData = __webpack_require__(85946);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/constants/number.js
const maxInt8 = (/* unused pure expression or super */ null && (2n ** (8n - 1n) - 1n));
const maxInt16 = (/* unused pure expression or super */ null && (2n ** (16n - 1n) - 1n));
const maxInt24 = (/* unused pure expression or super */ null && (2n ** (24n - 1n) - 1n));
const maxInt32 = (/* unused pure expression or super */ null && (2n ** (32n - 1n) - 1n));
const maxInt40 = (/* unused pure expression or super */ null && (2n ** (40n - 1n) - 1n));
const maxInt48 = (/* unused pure expression or super */ null && (2n ** (48n - 1n) - 1n));
const maxInt56 = (/* unused pure expression or super */ null && (2n ** (56n - 1n) - 1n));
const maxInt64 = (/* unused pure expression or super */ null && (2n ** (64n - 1n) - 1n));
const maxInt72 = (/* unused pure expression or super */ null && (2n ** (72n - 1n) - 1n));
const maxInt80 = (/* unused pure expression or super */ null && (2n ** (80n - 1n) - 1n));
const maxInt88 = (/* unused pure expression or super */ null && (2n ** (88n - 1n) - 1n));
const maxInt96 = (/* unused pure expression or super */ null && (2n ** (96n - 1n) - 1n));
const maxInt104 = (/* unused pure expression or super */ null && (2n ** (104n - 1n) - 1n));
const maxInt112 = (/* unused pure expression or super */ null && (2n ** (112n - 1n) - 1n));
const maxInt120 = (/* unused pure expression or super */ null && (2n ** (120n - 1n) - 1n));
const maxInt128 = (/* unused pure expression or super */ null && (2n ** (128n - 1n) - 1n));
const maxInt136 = (/* unused pure expression or super */ null && (2n ** (136n - 1n) - 1n));
const maxInt144 = (/* unused pure expression or super */ null && (2n ** (144n - 1n) - 1n));
const maxInt152 = (/* unused pure expression or super */ null && (2n ** (152n - 1n) - 1n));
const maxInt160 = (/* unused pure expression or super */ null && (2n ** (160n - 1n) - 1n));
const maxInt168 = (/* unused pure expression or super */ null && (2n ** (168n - 1n) - 1n));
const maxInt176 = (/* unused pure expression or super */ null && (2n ** (176n - 1n) - 1n));
const maxInt184 = (/* unused pure expression or super */ null && (2n ** (184n - 1n) - 1n));
const maxInt192 = (/* unused pure expression or super */ null && (2n ** (192n - 1n) - 1n));
const maxInt200 = (/* unused pure expression or super */ null && (2n ** (200n - 1n) - 1n));
const maxInt208 = (/* unused pure expression or super */ null && (2n ** (208n - 1n) - 1n));
const maxInt216 = (/* unused pure expression or super */ null && (2n ** (216n - 1n) - 1n));
const maxInt224 = (/* unused pure expression or super */ null && (2n ** (224n - 1n) - 1n));
const maxInt232 = (/* unused pure expression or super */ null && (2n ** (232n - 1n) - 1n));
const maxInt240 = (/* unused pure expression or super */ null && (2n ** (240n - 1n) - 1n));
const maxInt248 = (/* unused pure expression or super */ null && (2n ** (248n - 1n) - 1n));
const maxInt256 = (/* unused pure expression or super */ null && (2n ** (256n - 1n) - 1n));
const minInt8 = (/* unused pure expression or super */ null && (-(2n ** (8n - 1n))));
const minInt16 = (/* unused pure expression or super */ null && (-(2n ** (16n - 1n))));
const minInt24 = (/* unused pure expression or super */ null && (-(2n ** (24n - 1n))));
const minInt32 = (/* unused pure expression or super */ null && (-(2n ** (32n - 1n))));
const minInt40 = (/* unused pure expression or super */ null && (-(2n ** (40n - 1n))));
const minInt48 = (/* unused pure expression or super */ null && (-(2n ** (48n - 1n))));
const minInt56 = (/* unused pure expression or super */ null && (-(2n ** (56n - 1n))));
const minInt64 = (/* unused pure expression or super */ null && (-(2n ** (64n - 1n))));
const minInt72 = (/* unused pure expression or super */ null && (-(2n ** (72n - 1n))));
const minInt80 = (/* unused pure expression or super */ null && (-(2n ** (80n - 1n))));
const minInt88 = (/* unused pure expression or super */ null && (-(2n ** (88n - 1n))));
const minInt96 = (/* unused pure expression or super */ null && (-(2n ** (96n - 1n))));
const minInt104 = (/* unused pure expression or super */ null && (-(2n ** (104n - 1n))));
const minInt112 = (/* unused pure expression or super */ null && (-(2n ** (112n - 1n))));
const minInt120 = (/* unused pure expression or super */ null && (-(2n ** (120n - 1n))));
const minInt128 = (/* unused pure expression or super */ null && (-(2n ** (128n - 1n))));
const minInt136 = (/* unused pure expression or super */ null && (-(2n ** (136n - 1n))));
const minInt144 = (/* unused pure expression or super */ null && (-(2n ** (144n - 1n))));
const minInt152 = (/* unused pure expression or super */ null && (-(2n ** (152n - 1n))));
const minInt160 = (/* unused pure expression or super */ null && (-(2n ** (160n - 1n))));
const minInt168 = (/* unused pure expression or super */ null && (-(2n ** (168n - 1n))));
const minInt176 = (/* unused pure expression or super */ null && (-(2n ** (176n - 1n))));
const minInt184 = (/* unused pure expression or super */ null && (-(2n ** (184n - 1n))));
const minInt192 = (/* unused pure expression or super */ null && (-(2n ** (192n - 1n))));
const minInt200 = (/* unused pure expression or super */ null && (-(2n ** (200n - 1n))));
const minInt208 = (/* unused pure expression or super */ null && (-(2n ** (208n - 1n))));
const minInt216 = (/* unused pure expression or super */ null && (-(2n ** (216n - 1n))));
const minInt224 = (/* unused pure expression or super */ null && (-(2n ** (224n - 1n))));
const minInt232 = (/* unused pure expression or super */ null && (-(2n ** (232n - 1n))));
const minInt240 = (/* unused pure expression or super */ null && (-(2n ** (240n - 1n))));
const minInt248 = (/* unused pure expression or super */ null && (-(2n ** (248n - 1n))));
const minInt256 = (/* unused pure expression or super */ null && (-(2n ** (256n - 1n))));
const maxUint8 = (/* unused pure expression or super */ null && (2n ** 8n - 1n));
const maxUint16 = (/* unused pure expression or super */ null && (2n ** 16n - 1n));
const maxUint24 = (/* unused pure expression or super */ null && (2n ** 24n - 1n));
const maxUint32 = (/* unused pure expression or super */ null && (2n ** 32n - 1n));
const maxUint40 = (/* unused pure expression or super */ null && (2n ** 40n - 1n));
const maxUint48 = (/* unused pure expression or super */ null && (2n ** 48n - 1n));
const maxUint56 = (/* unused pure expression or super */ null && (2n ** 56n - 1n));
const maxUint64 = (/* unused pure expression or super */ null && (2n ** 64n - 1n));
const maxUint72 = (/* unused pure expression or super */ null && (2n ** 72n - 1n));
const maxUint80 = (/* unused pure expression or super */ null && (2n ** 80n - 1n));
const maxUint88 = (/* unused pure expression or super */ null && (2n ** 88n - 1n));
const maxUint96 = 2n ** 96n - 1n;
const maxUint104 = (/* unused pure expression or super */ null && (2n ** 104n - 1n));
const maxUint112 = (/* unused pure expression or super */ null && (2n ** 112n - 1n));
const maxUint120 = (/* unused pure expression or super */ null && (2n ** 120n - 1n));
const maxUint128 = (/* unused pure expression or super */ null && (2n ** 128n - 1n));
const maxUint136 = (/* unused pure expression or super */ null && (2n ** 136n - 1n));
const maxUint144 = (/* unused pure expression or super */ null && (2n ** 144n - 1n));
const maxUint152 = (/* unused pure expression or super */ null && (2n ** 152n - 1n));
const maxUint160 = (/* unused pure expression or super */ null && (2n ** 160n - 1n));
const maxUint168 = (/* unused pure expression or super */ null && (2n ** 168n - 1n));
const maxUint176 = (/* unused pure expression or super */ null && (2n ** 176n - 1n));
const maxUint184 = (/* unused pure expression or super */ null && (2n ** 184n - 1n));
const maxUint192 = (/* unused pure expression or super */ null && (2n ** 192n - 1n));
const maxUint200 = (/* unused pure expression or super */ null && (2n ** 200n - 1n));
const maxUint208 = (/* unused pure expression or super */ null && (2n ** 208n - 1n));
const maxUint216 = (/* unused pure expression or super */ null && (2n ** 216n - 1n));
const maxUint224 = (/* unused pure expression or super */ null && (2n ** 224n - 1n));
const maxUint232 = (/* unused pure expression or super */ null && (2n ** 232n - 1n));
const maxUint240 = (/* unused pure expression or super */ null && (2n ** 240n - 1n));
const maxUint248 = (/* unused pure expression or super */ null && (2n ** 248n - 1n));
const maxUint256 = (/* unused pure expression or super */ null && (2n ** 256n - 1n));
//# sourceMappingURL=number.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/chains/utils.js
var utils = __webpack_require__(95810);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/contract/contract.js
var contract = __webpack_require__(57621);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/read-contract.js + 1 modules
var read_contract = __webpack_require__(26182);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/allowance.js




const FN_SELECTOR = "0xdd62ed3e";
const FN_INPUTS = [
    {
        type: "address",
        name: "owner",
    },
    {
        type: "address",
        name: "spender",
    },
];
const FN_OUTPUTS = [
    {
        type: "uint256",
    },
];
/**
 * Checks if the `allowance` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `allowance` method is supported.
 * @extension ERC20
 * @example
 * ```ts
 * import { isAllowanceSupported } from "thirdweb/extensions/erc20";
 *
 * const supported = await isAllowanceSupported(contract);
 * ```
 */
async function isAllowanceSupported(contract) {
    return detectMethod({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Encodes the parameters for the "allowance" function.
 * @param options - The options for the allowance function.
 * @returns The encoded ABI parameters.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeAllowanceParams } "thirdweb/extensions/erc20";
 * const result = encodeAllowanceParams({
 *  owner: ...,
 *  spender: ...,
 * });
 * ```
 */
function encodeAllowanceParams(options) {
    return encodeAbiParameters(FN_INPUTS, [options.owner, options.spender]);
}
/**
 * Encodes the "allowance" function into a Hex string with its parameters.
 * @param options - The options for the allowance function.
 * @returns The encoded hexadecimal string.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeAllowance } "thirdweb/extensions/erc20";
 * const result = encodeAllowance({
 *  owner: ...,
 *  spender: ...,
 * });
 * ```
 */
function encodeAllowance(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return (FN_SELECTOR +
        encodeAllowanceParams(options).slice(2));
}
/**
 * Decodes the result of the allowance function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC20
 * @example
 * ```ts
 * import { decodeAllowanceResult } from "thirdweb/extensions/erc20";
 * const result = decodeAllowanceResult("...");
 * ```
 */
function decodeAllowanceResult(result) {
    return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "allowance" function on the contract.
 * @param options - The options for the allowance function.
 * @returns The parsed result of the function call.
 * @extension ERC20
 * @example
 * ```ts
 * import { allowance } from "thirdweb/extensions/erc20";
 *
 * const result = await allowance({
 *  contract,
 *  owner: ...,
 *  spender: ...,
 * });
 *
 * ```
 */
async function allowance(options) {
    return (0,read_contract.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [options.owner, options.spender],
    });
}
//# sourceMappingURL=allowance.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/write/approve.js + 1 modules
var approve = __webpack_require__(98445);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/to-serializable-transaction.js
var to_serializable_transaction = __webpack_require__(47537);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toRlp.js
var toRlp = __webpack_require__(7529);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/rpc/rpc.js + 1 modules
var rpc_rpc = __webpack_require__(98511);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/hex.js
var hex = __webpack_require__(75403);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/utils/bigint.js

/**
 * Returns the minimum of two BigInt values.
 * @param a - The first BigInt value.
 * @param b - The second BigInt value.
 * @returns The smaller of the two BigInt values.
 * @example
 * ```ts
 * min(1n, 2n)
 * // 1n
 */
function min(a, b) {
    return a < b ? a : b;
}
/**
 * Returns the maximum of two BigInt values.
 * @param a - The first BigInt value.
 * @param b - The second BigInt value.
 * @returns The larger of the two BigInt values.
 * @example
 * ```ts
 * max(1n, 2n)
 * // 2n
 */
function max(a, b) {
    return a > b ? a : b;
}
/**
 * Provides error checking on string or number bigint inputs.
 * @param value - A possibly integer-like string, number, or bigint.
 * @returns The bigint representation of the input.
 * @example
 * ```ts
 * toBigInt("2")
 * // 2n
 */
function toBigInt(value) {
    if (["string", "number"].includes(typeof value) &&
        !Number.isInteger(Number(value))) {
        throw new Error(`Expected value to be an integer to convert to a bigint, got ${value} of type ${typeof value}`);
    }
    if (value instanceof Uint8Array) {
        return BigInt((0,hex/* uint8ArrayToHex */.dg)(value));
    }
    return BigInt(value);
}
//# sourceMappingURL=bigint.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/helpers/concat-hex.js
var concat_hex = __webpack_require__(11223);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js
var resolve_promised_value = __webpack_require__(83159);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/encode.js
var encode = __webpack_require__(11692);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/zksync/getEip721Domain.js
const gasPerPubdataDefault = 50000n;
const getEip712Domain = (transaction) => {
    const message = transactionToMessage(transaction);
    return {
        domain: {
            name: "zkSync",
            version: "2",
            chainId: transaction.chainId,
        },
        types: {
            Transaction: [
                { name: "txType", type: "uint256" },
                { name: "from", type: "uint256" },
                { name: "to", type: "uint256" },
                { name: "gasLimit", type: "uint256" },
                { name: "gasPerPubdataByteLimit", type: "uint256" },
                { name: "maxFeePerGas", type: "uint256" },
                { name: "maxPriorityFeePerGas", type: "uint256" },
                { name: "paymaster", type: "uint256" },
                { name: "nonce", type: "uint256" },
                { name: "value", type: "uint256" },
                { name: "data", type: "bytes" },
                { name: "factoryDeps", type: "bytes32[]" },
                { name: "paymasterInput", type: "bytes" },
            ],
        },
        primaryType: "Transaction",
        message: message,
    };
};
function transactionToMessage(transaction) {
    const { gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, paymaster, paymasterInput, gasPerPubdata, data, } = transaction;
    return {
        txType: 113n,
        from: BigInt(from),
        to: to ? BigInt(to) : 0n,
        gasLimit: gas ?? 0n,
        gasPerPubdataByteLimit: gasPerPubdata ?? gasPerPubdataDefault,
        maxFeePerGas: maxFeePerGas ?? 0n,
        maxPriorityFeePerGas: maxPriorityFeePerGas ?? 0n,
        paymaster: paymaster ? BigInt(paymaster) : 0n,
        nonce: nonce ? BigInt(nonce) : 0n,
        value: value ?? 0n,
        data: data ? data : "0x0",
        // TODO suport factoryDeps
        factoryDeps: [],
        paymasterInput: paymasterInput ? paymasterInput : "0x",
    };
}
//# sourceMappingURL=getEip721Domain.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/zksync/send-eip712-transaction.js










/**
 * Sends a transaction using the provided wallet.
 * @param options - The options for sending the transaction.
 * @returns A promise that resolves to the transaction hash.
 * @throws An error if the wallet is not connected.
 * @transaction
 * @example
 * ```ts
 * import { sendTransaction } from "thirdweb";
 *
 * const { transactionHash } = await sendTransaction({
 *  account,
 *  transaction
 * });
 * ```
 */
async function sendEip712Transaction(options) {
    const { account, transaction } = options;
    const eip712Transaction = await populateEip712Transaction(options);
    const hash = await signEip712Transaction({
        account,
        eip712Transaction,
        chainId: transaction.chain.id,
    });
    const rpc = getRpcClient(transaction);
    const result = await eth_sendRawTransaction(rpc, hash);
    return {
        transactionHash: result,
        chain: transaction.chain,
        client: transaction.client,
    };
}
async function signEip712Transaction(options) {
    const { account, eip712Transaction, chainId } = options;
    // EIP712 signing of the serialized tx
    const eip712Domain = getEip712Domain(eip712Transaction);
    const customSignature = await account.signTypedData({
        // biome-ignore lint/suspicious/noExplicitAny: TODO type properly
        ...eip712Domain,
    });
    return serializeTransactionEIP712({
        ...eip712Transaction,
        chainId,
        customSignature,
    });
}
async function populateEip712Transaction(options) {
    const { account, transaction } = options;
    let [data, to, value, gas, maxFeePerGas, maxPriorityFeePerGas, gasPerPubdata,] = await Promise.all([
        (0,encode.encode)(transaction),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.to),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.value),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.gas),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.maxFeePerGas),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.maxPriorityFeePerGas),
        (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.eip712).then((eip712) => eip712?.gasPerPubdata),
    ]);
    if (!gas || !maxFeePerGas || !maxPriorityFeePerGas) {
        // fetch fees and gas
        const rpc = (0,rpc_rpc.getRpcClient)(transaction);
        const result = (await rpc({
            // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
            method: "zks_estimateFee",
            params: [
                {
                    from: account.address,
                    to,
                    data,
                    value: value ? (0,hex/* numberToHex */.eC)(value) : undefined,
                    // biome-ignore lint/suspicious/noExplicitAny: TODO add to RPC method types
                },
            ],
        }));
        gas = toBigInt(result.gas_limit);
        const baseFee = toBigInt(result.max_fee_per_gas);
        maxFeePerGas = baseFee * 2n; // bumping the base fee per gas to ensure fast inclusion
        maxPriorityFeePerGas = toBigInt(result.max_priority_fee_per_gas) || 1n;
        gasPerPubdata = toBigInt(result.gas_per_pubdata_limit);
    }
    // serialize the transaction (with fees, gas, nonce)
    const serializableTransaction = await (0,to_serializable_transaction/* toSerializableTransaction */.n)({
        transaction: {
            ...transaction,
            gas,
            maxFeePerGas,
            maxPriorityFeePerGas,
        },
        from: account.address,
    });
    return {
        ...serializableTransaction,
        ...transaction.eip712,
        gasPerPubdata,
        from: account.address,
    };
}
function serializeTransactionEIP712(transaction) {
    const { chainId, gas, nonce, to, from, value, maxFeePerGas, maxPriorityFeePerGas, customSignature, factoryDeps, paymaster, paymasterInput, gasPerPubdata, data, } = transaction;
    const serializedTransaction = [
        nonce ? (0,hex/* toHex */.NC)(nonce) : "0x",
        maxPriorityFeePerGas ? (0,hex/* toHex */.NC)(maxPriorityFeePerGas) : "0x",
        maxFeePerGas ? (0,hex/* toHex */.NC)(maxFeePerGas) : "0x",
        gas ? (0,hex/* toHex */.NC)(gas) : "0x",
        to ?? "0x",
        value ? (0,hex/* toHex */.NC)(value) : "0x",
        data ?? "0x0",
        (0,hex/* toHex */.NC)(chainId),
        (0,hex/* toHex */.NC)(""),
        (0,hex/* toHex */.NC)(""),
        (0,hex/* toHex */.NC)(chainId),
        from ?? "0x",
        gasPerPubdata ? (0,hex/* toHex */.NC)(gasPerPubdata) : (0,hex/* toHex */.NC)(gasPerPubdataDefault),
        factoryDeps ?? [],
        customSignature ?? "0x", // EIP712 signature
        paymaster && paymasterInput ? [paymaster, paymasterInput] : [],
    ];
    // @ts-ignore - TODO: fix types
    return (0,concat_hex.concatHex)(["0x71", (0,toRlp/* toRlp */.LV)(serializedTransaction)]);
}
//# sourceMappingURL=send-eip712-transaction.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/address.js
var address = __webpack_require__(4159);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/signatures/helpers/parseTypedData.js
var parseTypedData = __webpack_require__(26485);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeErrorResult.js + 1 modules
var decodeErrorResult = __webpack_require__(16327);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/abi.js
var errors_abi = __webpack_require__(57412);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(39135);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toSignatureHash.js + 7 modules
var toSignatureHash = __webpack_require__(97123);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/hash/toEventSelector.js

/**
 * Returns the event selector for a given event definition.
 *
 * @example
 * const selector = toEventSelector('Transfer(address indexed from, address indexed to, uint256 amount)')
 * // 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
 */
const toEventSelector = toSignatureHash/* toSignatureHash */.r;
//# sourceMappingURL=toEventSelector.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/cursor.js
var cursor = __webpack_require__(66238);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/decodeAbiParameters.js + 1 modules
var abi_decodeAbiParameters = __webpack_require__(78398);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/formatAbiItem.js
var formatAbiItem = __webpack_require__(80522);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/abi/decodeEventLog.js






const docsPath = '/docs/contract/decodeEventLog';
function decodeEventLog(parameters) {
    const { abi, data, strict: strict_, topics, } = parameters;
    const strict = strict_ ?? true;
    const [signature, ...argTopics] = topics;
    if (!signature)
        throw new errors_abi/* AbiEventSignatureEmptyTopicsError */.FM({ docsPath });
    const abiItem = abi.find((x) => x.type === 'event' &&
        signature === toEventSelector((0,formatAbiItem/* formatAbiItem */.t)(x)));
    if (!(abiItem && 'name' in abiItem) || abiItem.type !== 'event')
        throw new errors_abi/* AbiEventSignatureNotFoundError */.lC(signature, { docsPath });
    const { name, inputs } = abiItem;
    const isUnnamed = inputs?.some((x) => !('name' in x && x.name));
    let args = isUnnamed ? [] : {};
    // Decode topics (indexed args).
    const indexedInputs = inputs.filter((x) => 'indexed' in x && x.indexed);
    for (let i = 0; i < indexedInputs.length; i++) {
        const param = indexedInputs[i];
        const topic = argTopics[i];
        if (!topic)
            throw new errors_abi/* DecodeLogTopicsMismatch */.Gy({
                abiItem,
                param: param,
            });
        args[isUnnamed ? i : param.name || i] = decodeTopic({ param, value: topic });
    }
    // Decode data (non-indexed args).
    const nonIndexedInputs = inputs.filter((x) => !('indexed' in x && x.indexed));
    if (nonIndexedInputs.length > 0) {
        if (data && data !== '0x') {
            try {
                const decodedData = (0,abi_decodeAbiParameters/* decodeAbiParameters */.r)(nonIndexedInputs, data);
                if (decodedData) {
                    if (isUnnamed)
                        args = [...args, ...decodedData];
                    else {
                        for (let i = 0; i < nonIndexedInputs.length; i++) {
                            args[nonIndexedInputs[i].name] = decodedData[i];
                        }
                    }
                }
            }
            catch (err) {
                if (strict) {
                    if (err instanceof errors_abi/* AbiDecodingDataSizeTooSmallError */.xB ||
                        err instanceof cursor/* PositionOutOfBoundsError */.lQ)
                        throw new errors_abi/* DecodeLogDataMismatch */.SM({
                            abiItem,
                            data: data,
                            params: nonIndexedInputs,
                            size: (0,size/* size */.d)(data),
                        });
                    throw err;
                }
            }
        }
        else if (strict) {
            throw new errors_abi/* DecodeLogDataMismatch */.SM({
                abiItem,
                data: '0x',
                params: nonIndexedInputs,
                size: 0,
            });
        }
    }
    return {
        eventName: name,
        args: Object.values(args).length > 0 ? args : undefined,
    };
}
function decodeTopic({ param, value }) {
    if (param.type === 'string' ||
        param.type === 'bytes' ||
        param.type === 'tuple' ||
        param.type.match(/^(.*)\[(\d+)?\]$/))
        return value;
    const decodedArg = (0,abi_decodeAbiParameters/* decodeAbiParameters */.r)([param], value) || [];
    return decodedArg[0];
}
//# sourceMappingURL=decodeEventLog.js.map
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/abi/parseEventLogs.js
// TODO(v3): checksum address.


/**
 * Extracts & decodes logs matching the provided signature(s) (`abi` + optional `eventName`)
 * from a set of opaque logs.
 *
 * @param parameters - {@link ParseEventLogsParameters}
 * @returns The logs. {@link ParseEventLogsReturnType}
 *
 * @example
 * import { createClient, http } from 'viem'
 * import { mainnet } from 'viem/chains'
 * import { parseEventLogs } from 'viem/op-stack'
 *
 * const client = createClient({
 *   chain: mainnet,
 *   transport: http(),
 * })
 *
 * const receipt = await getTransactionReceipt(client, {
 *   hash: '0xec23b2ba4bc59ba61554507c1b1bc91649e6586eb2dd00c728e8ed0db8bb37ea',
 * })
 *
 * const logs = parseEventLogs({ logs: receipt.logs })
 * // [{ args: { ... }, eventName: 'TransactionDeposited', ... }, ...]
 */
function parseEventLogs({ abi, eventName, logs, strict = true, }) {
    return logs
        .map((log) => {
        try {
            const event = decodeEventLog({
                ...log,
                abi,
                strict,
            });
            if (eventName && !eventName.includes(event.eventName))
                return null;
            return { ...event, ...log };
        }
        catch (err) {
            let eventName;
            let isUnnamed;
            if (err instanceof errors_abi/* AbiEventSignatureNotFoundError */.lC)
                return null;
            if (err instanceof errors_abi/* DecodeLogDataMismatch */.SM ||
                err instanceof errors_abi/* DecodeLogTopicsMismatch */.Gy) {
                // If strict mode is on, and log data/topics do not match event definition, skip.
                if (strict)
                    return null;
                eventName = err.abiItem.name;
                isUnnamed = err.abiItem.inputs?.some((x) => !('name' in x && x.name));
            }
            // Set args to empty if there is an error decoding (e.g. indexed/non-indexed params mismatch).
            return { ...log, args: isUnnamed ? [] : {}, eventName };
        }
    })
        .filter(Boolean);
}
//# sourceMappingURL=parseEventLogs.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/event/actions/parse-logs.js

/**
 * Parses logs and returns the corresponding events.
 * @param options - The options for parsing logs.
 * @returns The parsed events.
 * @example
 * ```ts
 * import { parseEventLogs } from "thirdweb";
 * const events = parseEventLogs({
 *  logs,
 *  events: [preparedEvent, preparedEvent2],
 * });
 * ```
 * @contract
 */
function parse_logs_parseEventLogs(options) {
    const { logs, events, strict } = options;
    return parseEventLogs({
        logs,
        abi: events.map((e) => e.abiEvent),
        strict,
    });
}
//# sourceMappingURL=parse-logs.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/node_modules/abitype/dist/esm/human-readable/parseAbiItem.js
var parseAbiItem = __webpack_require__(38766);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js
var base = __webpack_require__(62027);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/errors/log.js

class FilterTypeNotSupportedError extends base/* BaseError */.G {
    constructor(type) {
        super(`Filter type "${type}" is not supported.`);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'FilterTypeNotSupportedError'
        });
    }
}
//# sourceMappingURL=log.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toBytes.js
var toBytes = __webpack_require__(11187);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js + 2 modules
var keccak256 = __webpack_require__(91734);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/abi/encodeAbiParameters.js
var abi_encodeAbiParameters = __webpack_require__(45444);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/isHex.js
var isHex = __webpack_require__(15102);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/address/isAddress.js
var isAddress = __webpack_require__(49321);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/toFunctionSelector.js
var toFunctionSelector = __webpack_require__(58034);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/abi/getAbiItem.js





function getAbiItem(parameters) {
    const { abi, args = [], name } = parameters;
    const isSelector = (0,isHex/* isHex */.v)(name, { strict: false });
    const abiItems = abi.filter((abiItem) => {
        if (isSelector) {
            if (abiItem.type === 'function')
                return (0,toFunctionSelector/* toFunctionSelector */.C)(abiItem) === name;
            if (abiItem.type === 'event')
                return toEventSelector(abiItem) === name;
            return false;
        }
        return 'name' in abiItem && abiItem.name === name;
    });
    if (abiItems.length === 0)
        return undefined;
    if (abiItems.length === 1)
        return abiItems[0];
    let matchedAbiItem = undefined;
    for (const abiItem of abiItems) {
        if (!('inputs' in abiItem))
            continue;
        if (!args || args.length === 0) {
            if (!abiItem.inputs || abiItem.inputs.length === 0)
                return abiItem;
            continue;
        }
        if (!abiItem.inputs)
            continue;
        if (abiItem.inputs.length === 0)
            continue;
        if (abiItem.inputs.length !== args.length)
            continue;
        const matched = args.every((arg, index) => {
            const abiParameter = 'inputs' in abiItem && abiItem.inputs[index];
            if (!abiParameter)
                return false;
            return isArgOfType(arg, abiParameter);
        });
        if (matched) {
            // Check for ambiguity against already matched parameters (e.g. `address` vs `bytes20`).
            if (matchedAbiItem &&
                'inputs' in matchedAbiItem &&
                matchedAbiItem.inputs) {
                const ambiguousTypes = getAmbiguousTypes(abiItem.inputs, matchedAbiItem.inputs, args);
                if (ambiguousTypes)
                    throw new errors_abi/* AbiItemAmbiguityError */.S4({
                        abiItem,
                        type: ambiguousTypes[0],
                    }, {
                        abiItem: matchedAbiItem,
                        type: ambiguousTypes[1],
                    });
            }
            matchedAbiItem = abiItem;
        }
    }
    if (matchedAbiItem)
        return matchedAbiItem;
    return abiItems[0];
}
/** @internal */
function isArgOfType(arg, abiParameter) {
    const argType = typeof arg;
    const abiParameterType = abiParameter.type;
    switch (abiParameterType) {
        case 'address':
            return (0,isAddress/* isAddress */.U)(arg, { strict: false });
        case 'bool':
            return argType === 'boolean';
        case 'function':
            return argType === 'string';
        case 'string':
            return argType === 'string';
        default: {
            if (abiParameterType === 'tuple' && 'components' in abiParameter)
                return Object.values(abiParameter.components).every((component, index) => {
                    return isArgOfType(Object.values(arg)[index], component);
                });
            // `(u)int<M>`: (un)signed integer type of `M` bits, `0 < M <= 256`, `M % 8 == 0`
            // https://regexr.com/6v8hp
            if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(abiParameterType))
                return argType === 'number' || argType === 'bigint';
            // `bytes<M>`: binary type of `M` bytes, `0 < M <= 32`
            // https://regexr.com/6va55
            if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(abiParameterType))
                return argType === 'string' || arg instanceof Uint8Array;
            // fixed-length (`<type>[M]`) and dynamic (`<type>[]`) arrays
            // https://regexr.com/6va6i
            if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(abiParameterType)) {
                return (Array.isArray(arg) &&
                    arg.every((x) => isArgOfType(x, {
                        ...abiParameter,
                        // Pop off `[]` or `[M]` from end of type
                        type: abiParameterType.replace(/(\[[0-9]{0,}\])$/, ''),
                    })));
            }
            return false;
        }
    }
}
/** @internal */
function getAmbiguousTypes(sourceParameters, targetParameters, args) {
    for (const parameterIndex in sourceParameters) {
        const sourceParameter = sourceParameters[parameterIndex];
        const targetParameter = targetParameters[parameterIndex];
        if (sourceParameter.type === 'tuple' &&
            targetParameter.type === 'tuple' &&
            'components' in sourceParameter &&
            'components' in targetParameter)
            return getAmbiguousTypes(sourceParameter.components, targetParameter.components, args[parameterIndex]);
        const types = [sourceParameter.type, targetParameter.type];
        const ambiguous = (() => {
            if (types.includes('address') && types.includes('bytes20'))
                return true;
            if (types.includes('address') && types.includes('string'))
                return (0,isAddress/* isAddress */.U)(args[parameterIndex], { strict: false });
            if (types.includes('address') && types.includes('bytes'))
                return (0,isAddress/* isAddress */.U)(args[parameterIndex], { strict: false });
            return false;
        })();
        if (ambiguous)
            return types;
    }
    return;
}
//# sourceMappingURL=getAbiItem.js.map
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/abi/encodeEventTopics.js








const encodeEventTopics_docsPath = '/docs/contract/encodeEventTopics';
function encodeEventTopics(parameters) {
    const { abi, eventName, args } = parameters;
    let abiItem = abi[0];
    if (eventName) {
        const item = getAbiItem({ abi, name: eventName });
        if (!item)
            throw new errors_abi/* AbiEventNotFoundError */.mv(eventName, { docsPath: encodeEventTopics_docsPath });
        abiItem = item;
    }
    if (abiItem.type !== 'event')
        throw new errors_abi/* AbiEventNotFoundError */.mv(undefined, { docsPath: encodeEventTopics_docsPath });
    const definition = (0,formatAbiItem/* formatAbiItem */.t)(abiItem);
    const signature = toEventSelector(definition);
    let topics = [];
    if (args && 'inputs' in abiItem) {
        const indexedInputs = abiItem.inputs?.filter((param) => 'indexed' in param && param.indexed);
        const args_ = Array.isArray(args)
            ? args
            : Object.values(args).length > 0
                ? indexedInputs?.map((x) => args[x.name]) ?? []
                : [];
        if (args_.length > 0) {
            topics =
                indexedInputs?.map((param, i) => {
                    if (Array.isArray(args_[i]))
                        return args_[i].map((_, j) => encodeArg({ param, value: args_[i][j] }));
                    return args_[i] ? encodeArg({ param, value: args_[i] }) : null;
                }) ?? [];
        }
    }
    return [signature, ...topics];
}
function encodeArg({ param, value, }) {
    if (param.type === 'string' || param.type === 'bytes')
        return (0,keccak256/* keccak256 */.w)((0,toBytes/* toBytes */.O0)(value));
    if (param.type === 'tuple' || param.type.match(/^(.*)\[(\d+)?\]$/))
        throw new FilterTypeNotSupportedError(param.type);
    return (0,abi_encodeAbiParameters/* encodeAbiParameters */.E)([param], [value]);
}
//# sourceMappingURL=encodeEventTopics.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/event/utils.js
/**
 * @internal
 */
function isAbiEvent(item) {
    return !!(item &&
        typeof item === "object" &&
        "type" in item &&
        item.type === "event");
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/event/prepare-event.js



/**
 * Prepares an event by parsing the signature, generating the event hash, and encoding the event topics.
 * @param options - The options for preparing the event.
 * @returns The prepared event object.
 * @example
 * ```ts
 * import { prepareEvent } from "thirdweb";
 * const myEvent = prepareEvent({
 *  signature: "event MyEvent(uint256 myArg)",
 * });
 * ```
 * @contract
 */
function prepareEvent(options) {
    const { signature } = options;
    let resolvedSignature;
    if (isAbiEvent(signature)) {
        resolvedSignature = signature;
    }
    else {
        resolvedSignature = (0,parseAbiItem/* parseAbiItem */.s)(signature);
    }
    return {
        abiEvent: resolvedSignature,
        hash: (0,toSignatureHash/* toSignatureHash */.r)(resolvedSignature),
        // @ts-expect-error - TODO: investiagte why this complains, it works fine however
        topics: encodeEventTopics({
            abi: [resolvedSignature],
            args: options.filters,
        }),
    };
}
//# sourceMappingURL=prepare-event.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/events/UserOperationRevertReason.js

/**
 * Creates an event object for the UserOperationRevertReason event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @extension ERC4337
 * @example
 * ```ts
 * import { getContractEvents } from "thirdweb";
 * import { userOperationRevertReasonEvent } from "thirdweb/extensions/erc4337";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  userOperationRevertReasonEvent({
 *  userOpHash: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */
function userOperationRevertReasonEvent(filters = {}) {
    return prepareEvent({
        signature: "event UserOperationRevertReason(bytes32 indexed userOpHash, address indexed sender, uint256 nonce, bytes revertReason)",
        filters,
    });
}
//# sourceMappingURL=UserOperationRevertReason.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/fetch.js + 1 modules
var fetch = __webpack_require__(99910);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/json.js
var json = __webpack_require__(75100);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/types.js
function formatUserOperationReceipt(userOpReceiptRaw) {
    const { receipt: transactionReceipt } = userOpReceiptRaw;
    const receipt = {
        ...transactionReceipt,
        transactionHash: transactionReceipt.transactionHash,
        blockNumber: transactionReceipt.blockNumber
            ? BigInt(transactionReceipt.blockNumber)
            : null,
        contractAddress: transactionReceipt.contractAddress
            ? transactionReceipt.contractAddress
            : null,
        cumulativeGasUsed: transactionReceipt.cumulativeGasUsed
            ? BigInt(transactionReceipt.cumulativeGasUsed)
            : null,
        effectiveGasPrice: transactionReceipt.effectiveGasPrice
            ? BigInt(transactionReceipt.effectiveGasPrice)
            : null,
        gasUsed: transactionReceipt.gasUsed
            ? BigInt(transactionReceipt.gasUsed)
            : null,
        logs: transactionReceipt.logs,
        to: transactionReceipt.to ? transactionReceipt.to : null,
        transactionIndex: transactionReceipt.transactionIndex,
        status: transactionReceipt.status,
        type: transactionReceipt.type,
    };
    if (transactionReceipt.blobGasPrice)
        receipt.blobGasPrice = BigInt(transactionReceipt.blobGasPrice);
    if (transactionReceipt.blobGasUsed)
        receipt.blobGasUsed = BigInt(transactionReceipt.blobGasUsed);
    const userOpReceipt = {
        ...userOpReceiptRaw,
        receipt,
        userOpHash: userOpReceiptRaw.userOpHash,
        actualGasCost: BigInt(userOpReceiptRaw.actualGasCost),
        actualGasUsed: BigInt(userOpReceiptRaw.actualGasUsed),
        nonce: BigInt(userOpReceiptRaw.nonce),
    };
    return userOpReceipt;
}
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js
var constants = __webpack_require__(49329);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js
var is_hex = __webpack_require__(52749);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/utils.js


const generateRandomUint192 = () => {
    const rand1 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand2 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand3 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand4 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand5 = BigInt(Math.floor(Math.random() * 0x100000000));
    const rand6 = BigInt(Math.floor(Math.random() * 0x100000000));
    return ((rand1 << BigInt(160)) |
        (rand2 << BigInt(128)) |
        (rand3 << BigInt(96)) |
        (rand4 << BigInt(64)) |
        (rand5 << BigInt(32)) |
        rand6);
};
/**
 * @internal
 */
const randomNonce = () => {
    return BigInt(concat([numberToHex(generateRandomUint192()), "0x0000000000000000"]));
};
/**
 * @internal
 */
function hexlifyUserOp(userOp) {
    return Object.fromEntries(Object.entries(userOp).map(([key, val]) => [
        key,
        // turn any value that's not hex into hex
        (0,is_hex/* isHex */.v)(val) ? val : (0,hex/* toHex */.NC)(val),
    ]));
}
function isNativeAAChain(chain) {
    return chain.id === 324 || chain.id === 300 || chain.id === 302;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/bundler.js
/* provided dependency */ var console = __webpack_require__(25108);









/**
 * Bundle a user operation.
 * @param args - The options for bundling a user operation.
 * @returns The bundle hash of the user operation.
 * @example
 * ```ts
 * import { bundleUserOp } from "thirdweb/wallets/smart";
 *
 * const userOpHash = await bundleUserOp({
 *  userOp,
 *  options,
 * });
 * ```
 * @walletUtils
 */
async function bundleUserOp(args) {
    return sendBundlerRequest({
        ...args,
        operation: "eth_sendUserOperation",
        params: [
            hexlifyUserOp(args.userOp),
            args.options.entrypointAddress ?? constants/* ENTRYPOINT_ADDRESS_v0_6 */.Ex,
        ],
    });
}
/**
 * Estimate the gas cost of a user operation.
 * @param args - The options for estimating the gas cost of a user operation.
 * @returns The estimated gas cost of the user operation.
 * @example
 * ```ts
 * import { estimateUserOpGas } from "thirdweb/wallets/smart";
 *
 * const gasCost = await estimateUserOpGas({
 *  userOp,
 *  options,
 * });
 * ```
 * @walletUtils
 */
async function estimateUserOpGas(args) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "eth_estimateUserOperationGas",
        params: [
            hexlifyUserOp(args.userOp),
            args.options.entrypointAddress ?? constants/* ENTRYPOINT_ADDRESS_v0_6 */.Ex,
        ],
    });
    // add gas buffer for managed account factory delegate calls
    return {
        preVerificationGas: (0,hex/* hexToBigInt */.y_)(res.preVerificationGas),
        verificationGas: (0,hex/* hexToBigInt */.y_)(res.verificationGas),
        verificationGasLimit: (0,hex/* hexToBigInt */.y_)(res.verificationGasLimit),
        callGasLimit: (0,hex/* hexToBigInt */.y_)(res.callGasLimit) + constants/* MANAGED_ACCOUNT_GAS_BUFFER */.X_,
    };
}
/**
 * Get the gas fees of a user operation.
 * @param args - The options for getting the gas price of a user operation.
 * @returns The gas price of the user operation.
 * @example
 * ```ts
 * import { getUserOpGasPrice } from "thirdweb/wallets/smart";
 *
 * const fees = await getUserOpGasPrice({
 *  options,
 * });
 * ```
 * @walletUtils
 */
async function getUserOpGasFees(args) {
    const res = await sendBundlerRequest({
        ...args,
        operation: "thirdweb_getUserOperationGasPrice",
        params: [],
    });
    return {
        maxPriorityFeePerGas: (0,hex/* hexToBigInt */.y_)(res.maxPriorityFeePerGas),
        maxFeePerGas: (0,hex/* hexToBigInt */.y_)(res.maxFeePerGas),
    };
}
/**
 * Get the receipt of a user operation.
 * @param args - The options for getting the receipt of a user operation.
 * @returns The receipt of the user operation.
 * @example
 * ```ts
 * import { getUserOpReceipt } from "thirdweb/wallets/smart";
 *
 * const receipt = await getUserOpReceipt({
 *  client,
 *  chain,
 *  userOpHash,
 * });
 * ```
 * @walletUtils
 */
async function getUserOpReceipt(args) {
    const res = await getUserOpReceiptRaw(args);
    if (!res) {
        return undefined;
    }
    if (res.success === false) {
        // parse revert reason
        const logs = parse_logs_parseEventLogs({
            events: [userOperationRevertReasonEvent()],
            logs: res.logs,
        });
        const revertReason = logs[0]?.args?.revertReason;
        if (!revertReason) {
            throw new Error(`UserOp failed at txHash: ${res.receipt.transactionHash}`);
        }
        const revertMsg = (0,decodeErrorResult/* decodeErrorResult */.p)({
            data: revertReason,
        });
        throw new Error(`UserOp failed with reason: '${revertMsg.args.join(",")}' at txHash: ${res.receipt.transactionHash}`);
    }
    return res.receipt;
}
/**
 * Get the receipt of a user operation.
 * @param args - The options for getting the receipt of a user operation.
 * @returns The raw receipt of the user operation.
 * @example
 * ```ts
 * import { getUserOpReceiptRaw } from "thirdweb/wallets/smart";
 *
 * const receipt = await getUserOpReceiptRaw({
 *  client,
 *  chain,
 *  userOpHash,
 * });
 * ```
 * @walletUtils
 */
async function getUserOpReceiptRaw(args) {
    const res = await sendBundlerRequest({
        options: args,
        operation: "eth_getUserOperationReceipt",
        params: [args.userOpHash],
    });
    if (!res) {
        return undefined;
    }
    return formatUserOperationReceipt(res);
}
/**
 * @internal
 */
async function getZkPaymasterData(args) {
    const res = await sendBundlerRequest({
        options: args.options,
        operation: "zk_paymasterData",
        params: [args.transaction],
    });
    return {
        paymaster: res.paymaster,
        paymasterInput: res.paymasterInput,
    };
}
async function broadcastZkTransaction(args) {
    const res = await sendBundlerRequest({
        options: args.options,
        operation: "zk_broadcastTransaction",
        params: [
            {
                ...args.transaction,
                signedTransaction: args.signedTransaction,
            },
        ],
    });
    return {
        transactionHash: res.transactionHash,
    };
}
async function sendBundlerRequest(args) {
    const { options, operation, params } = args;
    if (constants/* DEBUG */.eM) {
        console.debug(`>>> sending ${operation} with payload:`, params);
    }
    const bundlerUrl = options.bundlerUrl ?? (0,constants/* getDefaultBundlerUrl */.Rg)(options.chain);
    const fetchWithHeaders = (0,fetch/* getClientFetch */.NX)(options.client);
    const response = await fetchWithHeaders(bundlerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: (0,json/* stringify */.P)({
            jsonrpc: "2.0",
            id: 1,
            method: operation,
            params,
        }),
    });
    const res = await response.json();
    if (!response.ok || res.error) {
        let error = res.error || response.statusText;
        if (typeof error === "object") {
            error = JSON.stringify(error);
        }
        const code = res.code || "UNKNOWN";
        throw new Error(`${operation} error: ${error}
Status: ${response.status}
Code: ${code}`);
    }
    if (constants/* DEBUG */.eM) {
        console.debug(`<<< ${operation} result:`, res);
    }
    return res.result;
}
//# sourceMappingURL=bundler.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/prepare-contract-call.js
var prepare_contract_call = __webpack_require__(21690);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/calls.js



/**
 * Predict the address of a smart account.
 * @param args - The options for predicting the address of a smart account.
 * @returns The predicted address of the smart account.
 * @example
 * ```ts
 * import { predictAddress } from "thirdweb/wallets/smart";
 *
 * const predictedAddress = await predictAddress({
 *  factoryContract,
 *  adminAddress,
 *  accountSalt,
 * });
 * ```
 * @walletUtils
 */
async function predictAddress(args) {
    const { factoryContract, predictAddressOverride: predictAddress, adminAddress, accountSalt, accountAddress, } = args;
    if (predictAddress) {
        return predictAddress(factoryContract);
    }
    if (accountAddress) {
        return accountAddress;
    }
    if (!adminAddress) {
        throw new Error("Account address is required to predict the smart wallet address.");
    }
    const extraData = (0,hex/* stringToHex */.$G)(accountSalt ?? "");
    return (0,read_contract.readContract)({
        contract: factoryContract,
        method: "function getAddress(address, bytes) returns (address)",
        params: [adminAddress, extraData],
    });
}
/**
 * @internal
 */
function prepareCreateAccount(args) {
    const { adminAddress, factoryContract, createAccountOverride: createAccount, accountSalt, } = args;
    if (createAccount) {
        return createAccount(factoryContract);
    }
    return (0,prepare_contract_call/* prepareContractCall */.A)({
        contract: factoryContract,
        method: "function createAccount(address, bytes) returns (address)",
        params: [adminAddress, (0,hex/* stringToHex */.$G)(accountSalt ?? "")],
    });
}
/**
 * @internal
 */
function prepareExecute(args) {
    const { accountContract, transaction, executeOverride: execute } = args;
    if (execute) {
        return execute(accountContract, transaction);
    }
    return (0,prepare_contract_call/* prepareContractCall */.A)({
        contract: accountContract,
        method: "function execute(address, uint256, bytes)",
        params: [
            transaction.to || "",
            transaction.value || 0n,
            transaction.data || "0x",
        ],
    });
}
/**
 * @internal
 */
function prepareBatchExecute(args) {
    const { accountContract, transactions, executeBatchOverride: executeBatch, } = args;
    if (executeBatch) {
        return executeBatch(accountContract, transactions);
    }
    return (0,prepare_contract_call/* prepareContractCall */.A)({
        contract: accountContract,
        method: "function executeBatch(address[], uint256[], bytes[])",
        params: [
            transactions.map((tx) => tx.to || ""),
            transactions.map((tx) => tx.value || 0n),
            transactions.map((tx) => tx.data || "0x"),
        ],
    });
}
//# sourceMappingURL=calls.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var data_concat = __webpack_require__(57040);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc4337/__generated__/IEntryPoint/read/getNonce.js




const getNonce_FN_SELECTOR = "0x35567e1a";
const getNonce_FN_INPUTS = [
    {
        type: "address",
        name: "sender",
    },
    {
        type: "uint192",
        name: "key",
    },
];
const getNonce_FN_OUTPUTS = [
    {
        type: "uint256",
        name: "nonce",
    },
];
/**
 * Checks if the `getNonce` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `getNonce` method is supported.
 * @extension ERC4337
 * @example
 * ```ts
 * import { isGetNonceSupported } from "thirdweb/extensions/erc4337";
 *
 * const supported = await isGetNonceSupported(contract);
 * ```
 */
async function isGetNonceSupported(contract) {
    return detectMethod({
        contract,
        method: [getNonce_FN_SELECTOR, getNonce_FN_INPUTS, getNonce_FN_OUTPUTS],
    });
}
/**
 * Encodes the parameters for the "getNonce" function.
 * @param options - The options for the getNonce function.
 * @returns The encoded ABI parameters.
 * @extension ERC4337
 * @example
 * ```ts
 * import { encodeGetNonceParams } "thirdweb/extensions/erc4337";
 * const result = encodeGetNonceParams({
 *  sender: ...,
 *  key: ...,
 * });
 * ```
 */
function encodeGetNonceParams(options) {
    return encodeAbiParameters(getNonce_FN_INPUTS, [options.sender, options.key]);
}
/**
 * Encodes the "getNonce" function into a Hex string with its parameters.
 * @param options - The options for the getNonce function.
 * @returns The encoded hexadecimal string.
 * @extension ERC4337
 * @example
 * ```ts
 * import { encodeGetNonce } "thirdweb/extensions/erc4337";
 * const result = encodeGetNonce({
 *  sender: ...,
 *  key: ...,
 * });
 * ```
 */
function encodeGetNonce(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return (getNonce_FN_SELECTOR +
        encodeGetNonceParams(options).slice(2));
}
/**
 * Decodes the result of the getNonce function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC4337
 * @example
 * ```ts
 * import { decodeGetNonceResult } from "thirdweb/extensions/erc4337";
 * const result = decodeGetNonceResult("...");
 * ```
 */
function decodeGetNonceResult(result) {
    return decodeAbiParameters(getNonce_FN_OUTPUTS, result)[0];
}
/**
 * Calls the "getNonce" function on the contract.
 * @param options - The options for the getNonce function.
 * @returns The parsed result of the function call.
 * @extension ERC4337
 * @example
 * ```ts
 * import { getNonce } from "thirdweb/extensions/erc4337";
 *
 * const result = await getNonce({
 *  contract,
 *  sender: ...,
 *  key: ...,
 * });
 *
 * ```
 */
async function getNonce(options) {
    return (0,read_contract.readContract)({
        contract: options.contract,
        method: [getNonce_FN_SELECTOR, getNonce_FN_INPUTS, getNonce_FN_OUTPUTS],
        params: [options.sender, options.key],
    });
}
//# sourceMappingURL=getNonce.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/gas/fee-data.js + 3 modules
var fee_data = __webpack_require__(19500);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/abi/encodeAbiParameters.js
var utils_abi_encodeAbiParameters = __webpack_require__(39430);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/bytecode/is-contract-deployed.js
var is_contract_deployed = __webpack_require__(60689);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/to-bytes.js
var to_bytes = __webpack_require__(24951);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/hashing/keccak256.js + 2 modules
var hashing_keccak256 = __webpack_require__(96378);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/paymaster.js
/* provided dependency */ var paymaster_console = __webpack_require__(25108);




/**
 * Get paymaster and data details for a user operation.
 * @param args - The userOp and options
 * @returns - The paymaster and data details for the user operation.
 * @example
 * ```ts
 * import { getPaymasterAndData } from "thirdweb/wallets/smart";
 *
 * const userOp = createUnsignedUserOp(...);
 *
 * const paymasterAndData = await getPaymasterAndData({
 *  userOp,
 *  client,
 *  chain,
 * });
 * ```
 * @walletUtils
 */
async function getPaymasterAndData(args) {
    const { userOp, paymasterOverride, client, chain, entrypointAddress } = args;
    if (paymasterOverride) {
        return paymasterOverride(userOp);
    }
    const headers = {
        "Content-Type": "application/json",
    };
    const paymasterUrl = (0,constants/* getDefaultPaymasterUrl */.K9)(chain);
    const entrypoint = entrypointAddress ?? constants/* ENTRYPOINT_ADDRESS_v0_6 */.Ex;
    // Ask the paymaster to sign the transaction and return a valid paymasterAndData value.
    const fetchWithHeaders = (0,fetch/* getClientFetch */.NX)(client);
    const response = await fetchWithHeaders(paymasterUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "pm_sponsorUserOperation",
            params: [hexlifyUserOp(userOp), entrypoint],
        }),
    });
    const res = await response.json();
    if (!response.ok) {
        const error = res.error || response.statusText;
        const code = res.code || "UNKNOWN";
        throw new Error(`Paymaster error: ${error}
Status: ${response.status}
Code: ${code}`);
    }
    if (constants/* DEBUG */.eM) {
        paymaster_console.debug("Paymaster result:", res);
    }
    if (res.result) {
        // some paymasters return a string, some return an object with more data
        if (typeof res.result === "string") {
            return {
                paymasterAndData: res.result,
            };
        }
        return {
            paymasterAndData: res.result.paymasterAndData,
            verificationGasLimit: res.result.verificationGasLimit
                ? (0,hex/* hexToBigInt */.y_)(res.result.verificationGasLimit)
                : undefined,
            preVerificationGas: res.result.preVerificationGas
                ? (0,hex/* hexToBigInt */.y_)(res.result.preVerificationGas)
                : undefined,
            callGasLimit: res.result.callGasLimit
                ? (0,hex/* hexToBigInt */.y_)(res.result.callGasLimit)
                : undefined,
        };
    }
    const error = res.error?.message || res.error || response.statusText || "unknown error";
    throw new Error(`Paymaster error from ${paymasterUrl}: ${error}`);
}
//# sourceMappingURL=paymaster.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/lib/userop.js
















/**
 * Wait for the user operation to be mined.
 * @param args - The options and user operation hash
 * @returns - The transaction receipt
 *
 * @example
 * ```ts
 * import { waitForUserOpReceipt } from "thirdweb/wallets/smart";
 *
 * const receipt = await waitForUserOpReceipt({
 *  chain,
 *  client,
 *  userOpHash,
 * });
 * ```
 * @walletUtils
 */
async function waitForUserOpReceipt(args) {
    const timeout = args.timeoutMs || 120000; // 2mins
    const interval = args.intervalMs || 1000; // 1s
    const endtime = Date.now() + timeout;
    while (Date.now() < endtime) {
        const userOpReceipt = await getUserOpReceipt(args);
        if (userOpReceipt) {
            return userOpReceipt;
        }
        await new Promise((resolve) => setTimeout(resolve, interval));
    }
    throw new Error("Timeout waiting for userOp to be mined");
}
/**
 * Creates an unsigned user operation from a prepared transaction.
 * @param args - The prepared transaction and options
 * @returns - The unsigned user operation
 * @example
 * ```ts
 * import { createUnsignedUserOp } from "thirdweb/wallets/smart";
 *
 * const transaction = prepareContractCall(...);
 *
 * const userOp = await createUnsignedUserOp({
 *  transaction,
 *  factoryContract,
 *  accountContract,
 *  adminAddress,
 *  sponsorGas,
 *  overrides,
 * });
 * ```
 * @walletUtils
 */
async function createUnsignedUserOp(args) {
    const { transaction: executeTx, accountContract, factoryContract, adminAddress, overrides, sponsorGas, } = args;
    const chain = executeTx.chain;
    const client = executeTx.client;
    const isDeployed = await (0,is_contract_deployed.isContractDeployed)(accountContract);
    const initCode = isDeployed
        ? "0x"
        : await getAccountInitCode({
            factoryContract: factoryContract,
            adminAddress,
            accountSalt: overrides?.accountSalt,
            createAccountOverride: overrides?.createAccount,
        });
    const callData = await (0,encode.encode)(executeTx);
    const bundlerOptions = {
        client,
        chain,
        entrypointAddress: overrides?.entrypointAddress,
    };
    let { maxFeePerGas, maxPriorityFeePerGas } = executeTx;
    const bundlerUrl = overrides?.bundlerUrl ?? (0,constants/* getDefaultBundlerUrl */.Rg)(chain);
    if ((0,fetch/* isThirdwebUrl */.Rm)(bundlerUrl)) {
        // get gas prices from bundler
        const bundlerGasPrice = await getUserOpGasFees({
            options: bundlerOptions,
        });
        maxFeePerGas = bundlerGasPrice.maxFeePerGas;
        maxPriorityFeePerGas = bundlerGasPrice.maxPriorityFeePerGas;
    }
    else {
        // Check for explicity values
        const [resolvedMaxFeePerGas, resolvedMaxPriorityFeePerGas] = await Promise.all([
            (0,resolve_promised_value/* resolvePromisedValue */.q)(maxFeePerGas),
            (0,resolve_promised_value/* resolvePromisedValue */.q)(maxPriorityFeePerGas),
        ]);
        if (resolvedMaxFeePerGas && resolvedMaxPriorityFeePerGas) {
            // Save a network call if the values are provided
            maxFeePerGas = resolvedMaxFeePerGas;
            maxPriorityFeePerGas = resolvedMaxPriorityFeePerGas;
        }
        else {
            // Fallback to RPC gas prices if no explicit values provided
            const feeData = await (0,fee_data/* getDefaultGasOverrides */.E)(client, chain);
            // Still check for explicit values in case one is provided and not the other
            maxPriorityFeePerGas =
                resolvedMaxPriorityFeePerGas ?? feeData.maxPriorityFeePerGas ?? 0n;
            maxFeePerGas = resolvedMaxFeePerGas ?? feeData.maxFeePerGas ?? 0n;
        }
    }
    const nonce = await getAccountNonce({
        accountContract,
        chain,
        client,
        entrypointAddress: overrides?.entrypointAddress,
        getNonceOverride: overrides?.getAccountNonce,
    });
    const partialOp = {
        sender: accountContract.address,
        nonce,
        initCode,
        callData,
        maxFeePerGas,
        maxPriorityFeePerGas,
        callGasLimit: 0n,
        verificationGasLimit: 0n,
        preVerificationGas: 0n,
        paymasterAndData: "0x",
        signature: constants/* DUMMY_SIGNATURE */.Ld,
    };
    if (sponsorGas) {
        const paymasterResult = await getPaymasterAndData({
            userOp: partialOp,
            chain,
            client,
            entrypointAddress: overrides?.entrypointAddress,
            paymasterOverride: overrides?.paymaster,
        });
        const paymasterAndData = paymasterResult.paymasterAndData;
        if (paymasterAndData && paymasterAndData !== "0x") {
            partialOp.paymasterAndData = paymasterAndData;
        }
        // paymaster can have the gas limits in the response
        if (paymasterResult.callGasLimit &&
            paymasterResult.verificationGasLimit &&
            paymasterResult.preVerificationGas) {
            partialOp.callGasLimit = paymasterResult.callGasLimit;
            partialOp.verificationGasLimit = paymasterResult.verificationGasLimit;
            partialOp.preVerificationGas = paymasterResult.preVerificationGas;
        }
        else {
            // otherwise fallback to bundler for gas limits
            const estimates = await estimateUserOpGas({
                userOp: partialOp,
                options: bundlerOptions,
            });
            partialOp.callGasLimit = estimates.callGasLimit;
            partialOp.verificationGasLimit = estimates.verificationGasLimit;
            partialOp.preVerificationGas = estimates.preVerificationGas;
            // need paymaster to re-sign after estimates
            if (paymasterAndData && paymasterAndData !== "0x") {
                const paymasterResult2 = await getPaymasterAndData({
                    userOp: partialOp,
                    chain,
                    client,
                    entrypointAddress: overrides?.entrypointAddress,
                    paymasterOverride: overrides?.paymaster,
                });
                if (paymasterResult2.paymasterAndData &&
                    paymasterResult2.paymasterAndData !== "0x") {
                    partialOp.paymasterAndData = paymasterResult2.paymasterAndData;
                }
            }
        }
    }
    else {
        // not gasless, so we just need to estimate gas limits
        const estimates = await estimateUserOpGas({
            userOp: partialOp,
            options: bundlerOptions,
        });
        partialOp.callGasLimit = estimates.callGasLimit;
        partialOp.verificationGasLimit = estimates.verificationGasLimit;
        partialOp.preVerificationGas = estimates.preVerificationGas;
    }
    return {
        ...partialOp,
        signature: "0x",
    };
}
/**
 * Sign a user operation.
 * @param userOp - The UserOperation to sign (with signature field ignored)
 * @returns - The user operation with the signature field populated
 * @example
 * ```ts
 * import { signUserOp } from "thirdweb/wallets/smart";
 *
 * const userOp = createUnsignedUserOp(...);
 *
 * const signedUserOp = await signUserOp({
 *  userOp,
 *  chain,
 *  adminAccount,
 * });
 * ```
 * @walletUtils
 */
async function signUserOp(args) {
    const { userOp, chain, entrypointAddress, adminAccount } = args;
    const userOpHash = getUserOpHash({
        userOp,
        entryPoint: entrypointAddress || constants/* ENTRYPOINT_ADDRESS_v0_6 */.Ex,
        chainId: chain.id,
    });
    if (adminAccount.signMessage) {
        const signature = await adminAccount.signMessage({
            message: {
                raw: (0,to_bytes/* hexToBytes */.nr)(userOpHash),
            },
        });
        return {
            ...userOp,
            signature,
        };
    }
    throw new Error("signMessage not implemented in signingAccount");
}
async function getAccountInitCode(options) {
    const { factoryContract, adminAddress, accountSalt, createAccountOverride } = options;
    const deployTx = prepareCreateAccount({
        factoryContract,
        adminAddress,
        accountSalt,
        createAccountOverride,
    });
    return (0,data_concat/* concat */.zo)([factoryContract.address, await (0,encode.encode)(deployTx)]);
}
async function getAccountNonce(options) {
    const { accountContract, chain, client, entrypointAddress, getNonceOverride, } = options;
    if (getNonceOverride) {
        return getNonceOverride(accountContract);
    }
    return getNonce({
        contract: (0,contract/* getContract */.u)({
            address: entrypointAddress || constants/* ENTRYPOINT_ADDRESS_v0_6 */.Ex,
            chain,
            client,
        }),
        key: generateRandomUint192(),
        sender: accountContract.address,
    });
}
/**
 * Get the hash of a user operation.
 * @param args - The user operation, entrypoint address, and chain ID
 * @returns - The hash of the user operation
 * @walletUtils
 */
function getUserOpHash(args) {
    const { userOp, entryPoint, chainId } = args;
    const hashedInitCode = (0,hashing_keccak256/* keccak256 */.w)(userOp.initCode);
    const hashedCallData = (0,hashing_keccak256/* keccak256 */.w)(userOp.callData);
    const hashedPaymasterAndData = (0,hashing_keccak256/* keccak256 */.w)(userOp.paymasterAndData);
    const packedUserOp = (0,utils_abi_encodeAbiParameters.encodeAbiParameters)([
        { type: "address" },
        { type: "uint256" },
        { type: "bytes32" },
        { type: "bytes32" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "bytes32" },
    ], [
        userOp.sender,
        userOp.nonce,
        hashedInitCode,
        hashedCallData,
        userOp.callGasLimit,
        userOp.verificationGasLimit,
        userOp.preVerificationGas,
        userOp.maxFeePerGas,
        userOp.maxPriorityFeePerGas,
        hashedPaymasterAndData,
    ]);
    const encoded = (0,utils_abi_encodeAbiParameters.encodeAbiParameters)([{ type: "bytes32" }, { type: "address" }, { type: "uint256" }], [(0,hashing_keccak256/* keccak256 */.w)(packedUserOp), entryPoint, BigInt(chainId)]);
    return (0,hashing_keccak256/* keccak256 */.w)(encoded);
}
//# sourceMappingURL=userop.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/smart/index.js















/**
 * Checks if the provided wallet is a smart wallet.
 *
 * @param wallet - The wallet to check.
 * @returns True if the wallet is a smart wallet, false otherwise.
 */
function isSmartWallet(wallet) {
    return wallet.id === "smart";
}
/**
 * We can get the personal account for given smart account but not the other way around - this map gives us the reverse lookup
 * @internal
 */
const personalAccountToSmartAccountMap = new WeakMap();
const smartWalletToPersonalAccountMap = new WeakMap();
/**
 * @internal
 */
async function connectSmartWallet(wallet, connectionOptions, creationOptions) {
    const { personalAccount, client, chain: connectChain } = connectionOptions;
    if (!personalAccount) {
        throw new Error("Personal wallet does not have an account");
    }
    const options = creationOptions;
    const factoryAddress = options.factoryAddress ?? constants/* DEFAULT_ACCOUNT_FACTORY */.mV;
    const chain = connectChain ?? options.chain;
    const sponsorGas = "gasless" in options ? options.gasless : options.sponsorGas;
    if (isNativeAAChain(chain)) {
        return [
            createZkSyncAccount({
                creationOptions,
                connectionOptions,
                chain,
                sponsorGas,
            }),
            chain,
        ];
    }
    const factoryContract = (0,contract/* getContract */.u)({
        client: client,
        address: factoryAddress,
        chain: chain,
    });
    // TODO: listen for chainChanged event on the personal wallet and emit the disconnect event on the smart wallet
    const accountAddress = await predictAddress({
        factoryContract,
        adminAddress: personalAccount.address,
        predictAddressOverride: options.overrides?.predictAddress,
        accountSalt: options.overrides?.accountSalt,
        accountAddress: options.overrides?.accountAddress,
    })
        .then((address) => address)
        .catch((err) => {
        throw new Error(`Failed to get account address with factory contract ${factoryContract.address} on chain ID ${chain.id}. Are you on the right chain?`, { cause: err });
    });
    const accountContract = (0,contract/* getContract */.u)({
        client,
        address: accountAddress,
        chain,
    });
    const account = await createSmartAccount({
        ...options,
        chain,
        sponsorGas,
        personalAccount,
        accountContract,
        factoryContract,
        client,
    });
    personalAccountToSmartAccountMap.set(personalAccount, wallet);
    smartWalletToPersonalAccountMap.set(wallet, personalAccount);
    return [account, chain];
}
/**
 * @internal
 */
async function disconnectSmartWallet(wallet) {
    // look up the personalAccount for the smart wallet
    const personalAccount = smartWalletToPersonalAccountMap.get(wallet);
    if (personalAccount) {
        // remove the mappings
        personalAccountToSmartAccountMap.delete(personalAccount);
        smartWalletToPersonalAccountMap.delete(wallet);
    }
}
async function createSmartAccount(options) {
    const { accountContract } = options;
    const account = {
        address: (0,address/* getAddress */.Kn)(accountContract.address),
        async sendTransaction(transaction) {
            // if erc20 paymaster - check allowance and approve if needed
            const erc20Paymaster = options.overrides?.erc20Paymaster;
            let paymasterOverride = undefined;
            if (erc20Paymaster) {
                await approveERC20({
                    accountContract,
                    erc20Paymaster,
                    options,
                });
                const paymasterCallback = async () => {
                    return {
                        paymasterAndData: (0,concat_hex.concatHex)([
                            erc20Paymaster.address,
                            erc20Paymaster?.token,
                        ]),
                    };
                };
                paymasterOverride = options.overrides?.paymaster || paymasterCallback;
            }
            const executeTx = prepareExecute({
                accountContract,
                transaction,
                executeOverride: options.overrides?.execute,
            });
            return _sendUserOp({
                executeTx,
                options: {
                    ...options,
                    overrides: {
                        ...options.overrides,
                        paymaster: paymasterOverride,
                    },
                },
            });
        },
        async sendBatchTransaction(transactions) {
            const executeTx = prepareBatchExecute({
                accountContract,
                transactions,
                executeBatchOverride: options.overrides?.executeBatch,
            });
            return _sendUserOp({
                executeTx,
                options,
            });
        },
        async signMessage({ message }) {
            const [{ isContractDeployed }, { readContract }, { encodeAbiParameters }, { hashMessage }, { checkContractWalletSignature },] = await Promise.all([
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 60689)),
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 26182)),
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 39430)),
                __webpack_require__.e(/* import() */ 31445).then(__webpack_require__.bind(__webpack_require__, 31445)),
                __webpack_require__.e(/* import() */ 46675).then(__webpack_require__.bind(__webpack_require__, 46675)),
            ]);
            const isDeployed = await isContractDeployed(accountContract);
            if (!isDeployed) {
                await _deployAccount({
                    options,
                    account,
                    accountContract,
                });
            }
            const originalMsgHash = hashMessage(message);
            // check if the account contract supports EIP721 domain separator based signing
            let factorySupports712 = false;
            try {
                // this will throw if the contract does not support it (old factories)
                await readContract({
                    contract: accountContract,
                    method: "function getMessageHash(bytes32 _hash) public view returns (bytes32)",
                    params: [originalMsgHash],
                });
                factorySupports712 = true;
            }
            catch (e) {
                // ignore
            }
            let sig;
            if (factorySupports712) {
                const wrappedMessageHash = encodeAbiParameters([{ type: "bytes32" }], [originalMsgHash]);
                sig = await options.personalAccount.signTypedData({
                    domain: {
                        name: "Account",
                        version: "1",
                        chainId: options.chain.id,
                        verifyingContract: accountContract.address,
                    },
                    primaryType: "AccountMessage",
                    types: { AccountMessage: [{ name: "message", type: "bytes" }] },
                    message: { message: wrappedMessageHash },
                });
            }
            else {
                sig = await options.personalAccount.signMessage({ message });
            }
            const isValid = await checkContractWalletSignature({
                contract: accountContract,
                message,
                signature: sig,
            });
            if (isValid) {
                return sig;
            }
            throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.");
        },
        async signTypedData(_typedData) {
            const typedData = (0,parseTypedData/* parseTypedData */.t)(_typedData);
            const [{ isContractDeployed }, { readContract }, { encodeAbiParameters }, { checkContractWalletSignedTypedData },] = await Promise.all([
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 60689)),
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 26182)),
                Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 39430)),
                __webpack_require__.e(/* import() */ 50228).then(__webpack_require__.bind(__webpack_require__, 50228)),
            ]);
            const isSelfVerifyingContract = typedData.domain?.verifyingContract?.toLowerCase() ===
                accountContract.address?.toLowerCase();
            if (isSelfVerifyingContract) {
                // if the contract is self-verifying, we can just sign the message with the EOA (ie. adding a session key)
                return options.personalAccount.signTypedData(typedData);
            }
            const isDeployed = await isContractDeployed(accountContract);
            if (!isDeployed) {
                await _deployAccount({
                    options,
                    account,
                    accountContract,
                });
            }
            const originalMsgHash = (0,hashTypedData/* hashTypedData */.Jv)(typedData);
            // check if the account contract supports EIP721 domain separator based signing
            let factorySupports712 = false;
            try {
                // this will throw if the contract does not support it (old factories)
                await readContract({
                    contract: accountContract,
                    method: "function getMessageHash(bytes32 _hash) public view returns (bytes32)",
                    params: [originalMsgHash],
                });
                factorySupports712 = true;
            }
            catch (e) {
                // ignore
            }
            let sig;
            if (factorySupports712) {
                const wrappedMessageHash = encodeAbiParameters([{ type: "bytes32" }], [originalMsgHash]);
                sig = await options.personalAccount.signTypedData({
                    domain: {
                        name: "Account",
                        version: "1",
                        chainId: options.chain.id,
                        verifyingContract: accountContract.address,
                    },
                    primaryType: "AccountMessage",
                    types: { AccountMessage: [{ name: "message", type: "bytes" }] },
                    message: { message: wrappedMessageHash },
                });
            }
            else {
                sig = await options.personalAccount.signTypedData(typedData);
            }
            const isValid = await checkContractWalletSignedTypedData({
                contract: accountContract,
                data: typedData,
                signature: sig,
            });
            if (isValid) {
                return sig;
            }
            throw new Error("Unable to verify signature on smart account, please make sure the smart account is deployed and the signature is valid.");
        },
        async onTransactionRequested(transaction) {
            return options.personalAccount.onTransactionRequested?.(transaction);
        },
    };
    return account;
}
async function approveERC20(args) {
    const { accountContract, erc20Paymaster, options } = args;
    const tokenAddress = erc20Paymaster.token;
    const tokenContract = (0,contract/* getContract */.u)({
        address: tokenAddress,
        chain: accountContract.chain,
        client: accountContract.client,
    });
    const accountAllowance = await allowance({
        contract: tokenContract,
        owner: accountContract.address,
        spender: erc20Paymaster.address,
    });
    if (accountAllowance > 0n) {
        return;
    }
    const approveTx = (0,approve/* approve */.d)({
        contract: tokenContract,
        spender: erc20Paymaster.address,
        amountWei: maxUint96 - 1n,
    });
    const transaction = await (0,to_serializable_transaction/* toSerializableTransaction */.n)({
        transaction: approveTx,
        from: accountContract.address,
    });
    const executeTx = prepareExecute({
        accountContract,
        transaction,
        executeOverride: options.overrides?.execute,
    });
    await _sendUserOp({
        executeTx,
        options: {
            ...options,
            overrides: {
                ...options.overrides,
                erc20Paymaster: undefined,
            },
        },
    });
}
function createZkSyncAccount(args) {
    const { creationOptions, connectionOptions, chain } = args;
    const account = {
        address: connectionOptions.personalAccount.address,
        async sendTransaction(transaction) {
            // override passed tx, we have to refetch gas and fees always
            const prepTx = {
                data: transaction.data,
                to: transaction.to ?? undefined,
                value: transaction.value ?? 0n,
                chain: (0,utils/* getCachedChain */.XY)(transaction.chainId),
                client: connectionOptions.client,
            };
            let serializableTransaction = await populateEip712Transaction({
                account,
                transaction: prepTx,
            });
            if (args.sponsorGas) {
                // get paymaster input
                const pmData = await getZkPaymasterData({
                    options: {
                        client: connectionOptions.client,
                        chain,
                        bundlerUrl: creationOptions.overrides?.bundlerUrl,
                        entrypointAddress: creationOptions.overrides?.entrypointAddress,
                    },
                    transaction: serializableTransaction,
                });
                serializableTransaction = {
                    ...serializableTransaction,
                    ...pmData,
                };
            }
            // sign
            const signedTransaction = await signEip712Transaction({
                account,
                chainId: chain.id,
                eip712Transaction: serializableTransaction,
            });
            // broadcast via bundler
            const txHash = await broadcastZkTransaction({
                options: {
                    client: connectionOptions.client,
                    chain,
                    bundlerUrl: creationOptions.overrides?.bundlerUrl,
                    entrypointAddress: creationOptions.overrides?.entrypointAddress,
                },
                transaction: serializableTransaction,
                signedTransaction,
            });
            return {
                transactionHash: txHash.transactionHash,
                client: connectionOptions.client,
                chain: chain,
            };
        },
        async signMessage({ message }) {
            return connectionOptions.personalAccount.signMessage({ message });
        },
        async signTypedData(_typedData) {
            const typedData = (0,parseTypedData/* parseTypedData */.t)(_typedData);
            return connectionOptions.personalAccount.signTypedData(typedData);
        },
        async onTransactionRequested(transaction) {
            return connectionOptions.personalAccount.onTransactionRequested?.(transaction);
        },
    };
    return account;
}
async function _deployAccount(args) {
    const { options, account, accountContract } = args;
    const [{ sendTransaction }, { prepareTransaction }] = await Promise.all([
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 75888)),
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 71316)),
    ]);
    const dummyTx = prepareTransaction({
        client: options.client,
        chain: options.chain,
        to: accountContract.address,
        value: 0n,
        gas: 50000n, // force gas to avoid simulation error
    });
    const deployResult = await sendTransaction({
        transaction: dummyTx,
        account,
    });
    return deployResult;
}
async function _sendUserOp(args) {
    const { executeTx, options } = args;
    const unsignedUserOp = await createUnsignedUserOp({
        transaction: executeTx,
        factoryContract: options.factoryContract,
        accountContract: options.accountContract,
        adminAddress: options.personalAccount.address,
        sponsorGas: options.sponsorGas,
        overrides: options.overrides,
    });
    const signedUserOp = await signUserOp({
        chain: options.chain,
        adminAccount: options.personalAccount,
        entrypointAddress: options.overrides?.entrypointAddress,
        userOp: unsignedUserOp,
    });
    const userOpHash = await bundleUserOp({
        options,
        userOp: signedUserOp,
    });
    // wait for tx receipt rather than return the userOp hash
    const receipt = await waitForUserOpReceipt({
        ...options,
        userOpHash,
    });
    return {
        client: options.client,
        chain: options.chain,
        transactionHash: receipt.transactionHash,
    };
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LV: () => (/* binding */ toRlp)
/* harmony export */ });
/* unused harmony exports bytesToRlp, hexToRlp */
/* harmony import */ var _errors_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62027);
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11221);
/* harmony import */ var _toBytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11187);
/* harmony import */ var _toHex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92106);




function toRlp(bytes, to = 'hex') {
    const encodable = getEncodable(bytes);
    const cursor = (0,_cursor_js__WEBPACK_IMPORTED_MODULE_0__/* .createCursor */ .q)(new Uint8Array(encodable.length));
    encodable.encode(cursor);
    if (to === 'hex')
        return (0,_toHex_js__WEBPACK_IMPORTED_MODULE_1__/* .bytesToHex */ .ci)(cursor.bytes);
    return cursor.bytes;
}
function bytesToRlp(bytes, to = 'bytes') {
    return toRlp(bytes, to);
}
function hexToRlp(hex, to = 'hex') {
    return toRlp(hex, to);
}
function getEncodable(bytes) {
    if (Array.isArray(bytes))
        return getEncodableList(bytes.map((x) => getEncodable(x)));
    return getEncodableBytes(bytes);
}
function getEncodableList(list) {
    const bodyLength = list.reduce((acc, x) => acc + x.length, 0);
    const sizeOfBodyLength = getSizeOfLength(bodyLength);
    const length = (() => {
        if (bodyLength <= 55)
            return 1 + bodyLength;
        return 1 + sizeOfBodyLength + bodyLength;
    })();
    return {
        length,
        encode(cursor) {
            if (bodyLength <= 55) {
                cursor.pushByte(0xc0 + bodyLength);
            }
            else {
                cursor.pushByte(0xc0 + 55 + sizeOfBodyLength);
                if (sizeOfBodyLength === 1)
                    cursor.pushUint8(bodyLength);
                else if (sizeOfBodyLength === 2)
                    cursor.pushUint16(bodyLength);
                else if (sizeOfBodyLength === 3)
                    cursor.pushUint24(bodyLength);
                else
                    cursor.pushUint32(bodyLength);
            }
            for (const { encode } of list) {
                encode(cursor);
            }
        },
    };
}
function getEncodableBytes(bytesOrHex) {
    const bytes = typeof bytesOrHex === 'string' ? (0,_toBytes_js__WEBPACK_IMPORTED_MODULE_2__/* .hexToBytes */ .nr)(bytesOrHex) : bytesOrHex;
    const sizeOfBytesLength = getSizeOfLength(bytes.length);
    const length = (() => {
        if (bytes.length === 1 && bytes[0] < 0x80)
            return 1;
        if (bytes.length <= 55)
            return 1 + bytes.length;
        return 1 + sizeOfBytesLength + bytes.length;
    })();
    return {
        length,
        encode(cursor) {
            if (bytes.length === 1 && bytes[0] < 0x80) {
                cursor.pushBytes(bytes);
            }
            else if (bytes.length <= 55) {
                cursor.pushByte(0x80 + bytes.length);
                cursor.pushBytes(bytes);
            }
            else {
                cursor.pushByte(0x80 + 55 + sizeOfBytesLength);
                if (sizeOfBytesLength === 1)
                    cursor.pushUint8(bytes.length);
                else if (sizeOfBytesLength === 2)
                    cursor.pushUint16(bytes.length);
                else if (sizeOfBytesLength === 3)
                    cursor.pushUint24(bytes.length);
                else
                    cursor.pushUint32(bytes.length);
                cursor.pushBytes(bytes);
            }
        },
    };
}
function getSizeOfLength(length) {
    if (length < 2 ** 8)
        return 1;
    if (length < 2 ** 16)
        return 2;
    if (length < 2 ** 24)
        return 3;
    if (length < 2 ** 32)
        return 4;
    throw new _errors_base_js__WEBPACK_IMPORTED_MODULE_3__/* .BaseError */ .G('Length is too large.');
}
//# sourceMappingURL=toRlp.js.map

/***/ }),

/***/ 85946:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jv: () => (/* binding */ hashTypedData)
/* harmony export */ });
/* unused harmony exports hashDomain, hashStruct, encodeType */
/* harmony import */ var _abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45444);
/* harmony import */ var _data_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57040);
/* harmony import */ var _encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92106);
/* harmony import */ var _hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91734);
/* harmony import */ var _typedData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71352);
// Implementation forked and adapted from https://github.com/MetaMask/eth-sig-util/blob/main/src/sign-typed-data.ts





function hashTypedData(parameters) {
    const { domain = {}, message, primaryType, } = parameters;
    const types = {
        EIP712Domain: (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__/* .getTypesForEIP712Domain */ .cj)({ domain }),
        ...parameters.types,
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0,_typedData_js__WEBPACK_IMPORTED_MODULE_0__/* .validateTypedData */ .iC)({
        domain,
        message,
        primaryType,
        types,
    });
    const parts = ['0x1901'];
    if (domain)
        parts.push(hashDomain({
            domain,
            types: types,
        }));
    if (primaryType !== 'EIP712Domain')
        parts.push(hashStruct({
            data: message,
            primaryType,
            types: types,
        }));
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)((0,_data_concat_js__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .zo)(parts));
}
function hashDomain({ domain, types, }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types,
    });
}
function hashStruct({ data, primaryType, types, }) {
    const encoded = encodeData({
        data,
        primaryType,
        types,
    });
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)(encoded);
}
function encodeData({ data, primaryType, types, }) {
    const encodedTypes = [{ type: 'bytes32' }];
    const encodedValues = [hashType({ primaryType, types })];
    for (const field of types[primaryType]) {
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name],
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeAbiParameters */ .E)(encodedTypes, encodedValues);
}
function hashType({ primaryType, types, }) {
    const encodedHashType = (0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .NC)(encodeType({ primaryType, types }));
    return (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)(encodedHashType);
}
function encodeType({ primaryType, types, }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({ primaryType, types });
    unsortedDeps.delete(primaryType);
    const deps = [primaryType, ...Array.from(unsortedDeps).sort()];
    for (const type of deps) {
        result += `${type}(${types[type]
            .map(({ name, type: t }) => `${t} ${name}`)
            .join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types, }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]) {
        findTypeDependencies({ primaryType: field.type, types }, results);
    }
    return results;
}
function encodeField({ types, name, type, value, }) {
    if (types[type] !== undefined) {
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)(encodeData({ data: value, primaryType: type, types })),
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)(value)];
    }
    if (type === 'string')
        return [{ type: 'bytes32' }, (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)((0,_encoding_toHex_js__WEBPACK_IMPORTED_MODULE_4__/* .toHex */ .NC)(value))];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item) => encodeField({
            name,
            type: parsedType,
            types,
            value: item,
        }));
        return [
            { type: 'bytes32' },
            (0,_hash_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)((0,_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_3__/* .encodeAbiParameters */ .E)(typeValuePairs.map(([t]) => t), typeValuePairs.map(([, v]) => v))),
        ];
    }
    return [{ type }, value];
}
//# sourceMappingURL=hashTypedData.js.map

/***/ })

};
;