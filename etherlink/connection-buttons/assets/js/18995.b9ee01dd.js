"use strict";
exports.id = 18995;
exports.ids = [18995];
exports.modules = {

/***/ 18995:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FN_SELECTOR: () => (/* binding */ FN_SELECTOR),
/* harmony export */   decodeOwnerOfResult: () => (/* binding */ decodeOwnerOfResult),
/* harmony export */   encodeOwnerOf: () => (/* binding */ encodeOwnerOf),
/* harmony export */   encodeOwnerOfParams: () => (/* binding */ encodeOwnerOfParams),
/* harmony export */   isOwnerOfSupported: () => (/* binding */ isOwnerOfSupported),
/* harmony export */   ownerOf: () => (/* binding */ ownerOf)
/* harmony export */ });
/* harmony import */ var _transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26182);
/* harmony import */ var _utils_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39430);
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78398);
/* harmony import */ var _utils_bytecode_detectExtension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20563);




const FN_SELECTOR = "0x6352211e";
const FN_INPUTS = [
    {
        type: "uint256",
        name: "tokenId",
    },
];
const FN_OUTPUTS = [
    {
        type: "address",
    },
];
/**
 * Checks if the `ownerOf` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `ownerOf` method is supported.
 * @extension ERC721
 * @example
 * ```ts
 * import { isOwnerOfSupported } from "thirdweb/extensions/erc721";
 *
 * const supported = await isOwnerOfSupported(contract);
 * ```
 */
async function isOwnerOfSupported(contract) {
    return (0,_utils_bytecode_detectExtension_js__WEBPACK_IMPORTED_MODULE_0__/* .detectMethod */ .E)({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Encodes the parameters for the "ownerOf" function.
 * @param options - The options for the ownerOf function.
 * @returns The encoded ABI parameters.
 * @extension ERC721
 * @example
 * ```ts
 * import { encodeOwnerOfParams } "thirdweb/extensions/erc721";
 * const result = encodeOwnerOfParams({
 *  tokenId: ...,
 * });
 * ```
 */
function encodeOwnerOfParams(options) {
    return (0,_utils_abi_encodeAbiParameters_js__WEBPACK_IMPORTED_MODULE_1__.encodeAbiParameters)(FN_INPUTS, [options.tokenId]);
}
/**
 * Encodes the "ownerOf" function into a Hex string with its parameters.
 * @param options - The options for the ownerOf function.
 * @returns The encoded hexadecimal string.
 * @extension ERC721
 * @example
 * ```ts
 * import { encodeOwnerOf } "thirdweb/extensions/erc721";
 * const result = encodeOwnerOf({
 *  tokenId: ...,
 * });
 * ```
 */
function encodeOwnerOf(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return (FN_SELECTOR +
        encodeOwnerOfParams(options).slice(2));
}
/**
 * Decodes the result of the ownerOf function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC721
 * @example
 * ```ts
 * import { decodeOwnerOfResult } from "thirdweb/extensions/erc721";
 * const result = decodeOwnerOfResult("...");
 * ```
 */
function decodeOwnerOfResult(result) {
    return (0,viem__WEBPACK_IMPORTED_MODULE_2__/* .decodeAbiParameters */ .r)(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "ownerOf" function on the contract.
 * @param options - The options for the ownerOf function.
 * @returns The parsed result of the function call.
 * @extension ERC721
 * @example
 * ```ts
 * import { ownerOf } from "thirdweb/extensions/erc721";
 *
 * const result = await ownerOf({
 *  contract,
 *  tokenId: ...,
 * });
 *
 * ```
 */
async function ownerOf(options) {
    return (0,_transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_3__.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [options.tokenId],
    });
}
//# sourceMappingURL=ownerOf.js.map

/***/ })

};
;