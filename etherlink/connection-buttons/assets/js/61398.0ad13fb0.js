"use strict";
exports.id = 61398;
exports.ids = [61398];
exports.modules = {

/***/ 61398:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eth_estimateGas: () => (/* binding */ eth_estimateGas)
/* harmony export */ });
/* harmony import */ var _utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75403);

/**
 * Estimates the gas required to execute a transaction on the Ethereum network.
 * @param request - The EIP1193 request function.
 * @param transactionRequest - The transaction request object.
 * @returns A promise that resolves to the estimated gas as a bigint.
 * @rpc
 * @example
 * ```ts
 * import { getRpcClient, eth_estimateGas } from "thirdweb/rpc";
 * const rpcRequest = getRpcClient({ client, chain });
 * const gas = await eth_estimateGas(rpcRequest, {
 *  to: "0x...",
 *  ...
 * });
 * ```
 */
async function eth_estimateGas(request, transactionRequest) {
    const estimateResult = await request({
        method: "eth_estimateGas",
        params: [transactionRequest],
    });
    return (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToBigInt */ .y_)(estimateResult);
}
//# sourceMappingURL=eth_estimateGas.js.map

/***/ })

};
;