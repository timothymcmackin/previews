"use strict";
exports.id = 68408;
exports.ids = [68408];
exports.modules = {

/***/ 68408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eth_getTransactionCount: () => (/* binding */ eth_getTransactionCount)
/* harmony export */ });
/* harmony import */ var _utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75403);

/**
 * Retrieves the transaction count (nonce) for a given Ethereum address.
 * @param request - The EIP1193 request function.
 * @param params - The parameters for retrieving the transaction count.
 * @returns A promise that resolves to the transaction count as a number.
 * @rpc
 * @example
 * ```ts
 * import { getRpcClient, eth_getTransactionCount } from "thirdweb/rpc";
 * const rpcRequest = getRpcClient({ client, chain });
 * const transactionCount = await eth_getTransactionCount(rpcRequest, {
 *  address: "0x...",
 * });
 * ```
 */
async function eth_getTransactionCount(request, params) {
    const count = await request({
        method: "eth_getTransactionCount",
        params: [
            params.address,
            // makes sense to default to `pending` here, since we're asking for a transaction count (nonce)
            params.blockNumber
                ? (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__/* .numberToHex */ .eC)(params.blockNumber)
                : params.blockTag || "pending",
        ],
    });
    return (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_0__/* .hexToNumber */ .ly)(count);
}
//# sourceMappingURL=eth_getTransactionCount.js.map

/***/ })

};
;