"use strict";
exports.id = 50228;
exports.ids = [50228];
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

/***/ 50228:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkContractWalletSignedTypedData: () => (/* binding */ checkContractWalletSignedTypedData)
/* harmony export */ });
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85946);
/* harmony import */ var _utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52749);
/* harmony import */ var _generated_isValidSignature_read_isValidSignature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79206);



const MAGIC_VALUE = "0x1626ba7e";
/**
 * Checks if a contract wallet signature is valid.
 * @deprecated Use `verifyTypedData` instead
 * @param options - The options for the checkContractWalletSignature function.
 * @param options.contract - The contract to check the signature against.
 * @param options.message - The message to check the signature against.
 * @param options.signature - The signature to check.
 * @extension ERC1271
 * @example
 * ```ts
 * import { checkContractWalletSignedTypedData } from "thirdweb/extensions/erc1271";
 * const isValid = await checkContractWalletSignedTypedData({
 *  contract: myContract,
 *  data: {
 *   primaryType: "EIP712Domain",
 *   domain: {
 *     name: "Example",
 *     version: "1",
 *     chainId: 1,
 *     verifyingContract: myContract.address,
 *   },
 * });
 * ```
 * @returns A promise that resolves with a boolean indicating if the signature is valid.
 */
async function checkContractWalletSignedTypedData(options) {
    if (!(0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__/* .isHex */ .v)(options.signature)) {
        throw new Error("The signature must be a valid hex string.");
    }
    const result = await (0,_generated_isValidSignature_read_isValidSignature_js__WEBPACK_IMPORTED_MODULE_1__/* .isValidSignature */ .af)({
        contract: options.contract,
        hash: (0,viem__WEBPACK_IMPORTED_MODULE_2__/* .hashTypedData */ .Jv)(options.data),
        signature: options.signature,
    });
    return result === MAGIC_VALUE;
}
//# sourceMappingURL=checkContractWalletSignedTypedData.js.map

/***/ })

};
;