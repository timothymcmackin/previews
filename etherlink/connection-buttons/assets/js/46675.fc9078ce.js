"use strict";
exports.id = 46675;
exports.ids = [46675];
exports.modules = {

/***/ 79206:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   af: () => (/* binding */ isValidSignature)
/* harmony export */ });
/* unused harmony exports FN_SELECTOR, isIsValidSignatureSupported, encodeIsValidSignatureParams, encodeIsValidSignature, decodeIsValidSignatureResult */
/* harmony import */ var _transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26182);




const FN_SELECTOR = "0x1626ba7e";
const FN_INPUTS = [
    {
        type: "bytes32",
        name: "hash",
    },
    {
        type: "bytes",
        name: "signature",
    },
];
const FN_OUTPUTS = [
    {
        type: "bytes4",
    },
];
/**
 * Checks if the `isValidSignature` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `isValidSignature` method is supported.
 * @extension ERC1271
 * @example
 * ```ts
 * import { isIsValidSignatureSupported } from "thirdweb/extensions/erc1271";
 *
 * const supported = await isIsValidSignatureSupported(contract);
 * ```
 */
async function isIsValidSignatureSupported(contract) {
    return detectMethod({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Encodes the parameters for the "isValidSignature" function.
 * @param options - The options for the isValidSignature function.
 * @returns The encoded ABI parameters.
 * @extension ERC1271
 * @example
 * ```ts
 * import { encodeIsValidSignatureParams } "thirdweb/extensions/erc1271";
 * const result = encodeIsValidSignatureParams({
 *  hash: ...,
 *  signature: ...,
 * });
 * ```
 */
function encodeIsValidSignatureParams(options) {
    return encodeAbiParameters(FN_INPUTS, [options.hash, options.signature]);
}
/**
 * Encodes the "isValidSignature" function into a Hex string with its parameters.
 * @param options - The options for the isValidSignature function.
 * @returns The encoded hexadecimal string.
 * @extension ERC1271
 * @example
 * ```ts
 * import { encodeIsValidSignature } "thirdweb/extensions/erc1271";
 * const result = encodeIsValidSignature({
 *  hash: ...,
 *  signature: ...,
 * });
 * ```
 */
function encodeIsValidSignature(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return (FN_SELECTOR +
        encodeIsValidSignatureParams(options).slice(2));
}
/**
 * Decodes the result of the isValidSignature function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC1271
 * @example
 * ```ts
 * import { decodeIsValidSignatureResult } from "thirdweb/extensions/erc1271";
 * const result = decodeIsValidSignatureResult("...");
 * ```
 */
function decodeIsValidSignatureResult(result) {
    return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "isValidSignature" function on the contract.
 * @param options - The options for the isValidSignature function.
 * @returns The parsed result of the function call.
 * @extension ERC1271
 * @example
 * ```ts
 * import { isValidSignature } from "thirdweb/extensions/erc1271";
 *
 * const result = await isValidSignature({
 *  contract,
 *  hash: ...,
 *  signature: ...,
 * });
 *
 * ```
 */
async function isValidSignature(options) {
    return (0,_transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_0__.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [options.hash, options.signature],
    });
}
//# sourceMappingURL=isValidSignature.js.map

/***/ }),

/***/ 46675:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  checkContractWalletSignature: () => (/* binding */ checkContractWalletSignature)
});

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/hash/keccak256.js + 2 modules
var keccak256 = __webpack_require__(91734);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/constants/strings.js
const presignMessagePrefix = '\x19Ethereum Signed Message:\n';
//# sourceMappingURL=strings.js.map
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/concat.js
var concat = __webpack_require__(57040);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/data/size.js
var size = __webpack_require__(39135);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/encoding/toHex.js
var toHex = __webpack_require__(92106);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/signature/toPrefixedMessage.js




function toPrefixedMessage(message_) {
    const message = (() => {
        if (typeof message_ === 'string')
            return (0,toHex/* stringToHex */.$G)(message_);
        if (typeof message_.raw === 'string')
            return message_.raw;
        return (0,toHex/* bytesToHex */.ci)(message_.raw);
    })();
    const prefix = (0,toHex/* stringToHex */.$G)(`${presignMessagePrefix}${(0,size/* size */.d)(message)}`);
    return (0,concat/* concat */.zo)([prefix, message]);
}
//# sourceMappingURL=toPrefixedMessage.js.map
;// CONCATENATED MODULE: ./node_modules/viem/_esm/utils/signature/hashMessage.js


function hashMessage(message, to_) {
    return (0,keccak256/* keccak256 */.w)(toPrefixedMessage(message), to_);
}
//# sourceMappingURL=hashMessage.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/helpers/is-hex.js
var is_hex = __webpack_require__(52749);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc1271/__generated__/isValidSignature/read/isValidSignature.js
var isValidSignature = __webpack_require__(79206);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc1271/checkContractWalletSignature.js



const MAGIC_VALUE = "0x1626ba7e";
/**
 * Checks if a contract wallet signature is valid.
 * @deprecated Use `verifySignature` instead
 * @param options - The options for the checkContractWalletSignature function.
 * @param options.contract - The contract to check the signature against.
 * @param options.message - The message to check the signature against.
 * @param options.signature - The signature to check.
 * @extension ERC1271
 * @example
 * ```ts
 * import { checkContractWalletSignature } from "thirdweb/extensions/erc1271";
 * const isValid = await checkContractWalletSignature({
 *  contract: myContract,
 *  message: "hello world",
 *  signature: "0x...",
 * });
 * ```
 * @returns A promise that resolves with a boolean indicating if the signature is valid.
 */
async function checkContractWalletSignature(options) {
    if (!(0,is_hex/* isHex */.v)(options.signature)) {
        throw new Error("The signature must be a valid hex string.");
    }
    const result = await (0,isValidSignature/* isValidSignature */.af)({
        contract: options.contract,
        hash: hashMessage(options.message),
        signature: options.signature,
    });
    return result === MAGIC_VALUE;
}
//# sourceMappingURL=checkContractWalletSignature.js.map

/***/ })

};
;