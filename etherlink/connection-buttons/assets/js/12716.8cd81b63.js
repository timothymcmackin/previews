"use strict";
exports.id = 12716;
exports.ids = [12716];
exports.modules = {

/***/ 73851:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uH: () => (/* binding */ decimals)
/* harmony export */ });
/* unused harmony exports FN_SELECTOR, isDecimalsSupported, decodeDecimalsResult */
/* harmony import */ var _transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26182);



const FN_SELECTOR = "0x313ce567";
const FN_INPUTS = [];
const FN_OUTPUTS = [
    {
        type: "uint8",
    },
];
/**
 * Checks if the `decimals` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `decimals` method is supported.
 * @extension ERC20
 * @example
 * ```ts
 * import { isDecimalsSupported } from "thirdweb/extensions/erc20";
 *
 * const supported = await isDecimalsSupported(contract);
 * ```
 */
async function isDecimalsSupported(contract) {
    return detectMethod({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Decodes the result of the decimals function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC20
 * @example
 * ```ts
 * import { decodeDecimalsResult } from "thirdweb/extensions/erc20";
 * const result = decodeDecimalsResult("...");
 * ```
 */
function decodeDecimalsResult(result) {
    return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "decimals" function on the contract.
 * @param options - The options for the decimals function.
 * @returns The parsed result of the function call.
 * @extension ERC20
 * @example
 * ```ts
 * import { decimals } from "thirdweb/extensions/erc20";
 *
 * const result = await decimals({
 *  contract,
 * });
 *
 * ```
 */
async function decimals(options) {
    return (0,_transaction_read_contract_js__WEBPACK_IMPORTED_MODULE_0__.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [],
    });
}
//# sourceMappingURL=decimals.js.map

/***/ }),

/***/ 12716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decimals: () => (/* binding */ decimals)
/* harmony export */ });
/* harmony import */ var _utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71786);
/* harmony import */ var _generated_IERC20_read_decimals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73851);


/**
 * Retrieves the number of decimal places for a given ERC20 contract.
 * @param options - The options for the transaction.
 * @returns A promise that resolves to the number of decimal places.
 * @extension ERC20
 * @example
 * ```ts
 * import { decimals } from "thirdweb/extensions/erc20";
 *
 * const tokenDecimals = await decimals({ contract });
 * ```
 */
async function decimals(options) {
    return (0,_utils_promise_withCache_js__WEBPACK_IMPORTED_MODULE_0__/* .withCache */ .D)(() => (0,_generated_IERC20_read_decimals_js__WEBPACK_IMPORTED_MODULE_1__/* .decimals */ .uH)(options), {
        cacheKey: `${options.contract.chain.id}:${options.contract.address}:decimals`,
        // can never change, so cache forever
        cacheTime: Number.POSITIVE_INFINITY,
    });
}
//# sourceMappingURL=decimals.js.map

/***/ })

};
;