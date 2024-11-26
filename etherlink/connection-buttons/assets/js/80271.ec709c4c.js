"use strict";
exports.id = 80271;
exports.ids = [80271];
exports.modules = {

/***/ 80271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   relayBiconomyTransaction: () => (/* binding */ relayBiconomyTransaction)
/* harmony export */ });
/* unused harmony export prepareBiconomyTransaction */
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45444);
/* harmony import */ var _constants_addresses_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60301);
/* harmony import */ var _contract_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57621);
/* harmony import */ var _utils_encoding_helpers_is_hex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52749);
/* harmony import */ var _utils_hashing_keccak256_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96378);
/* harmony import */ var _utils_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75100);
/* harmony import */ var _read_contract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26182);







// we do not send multiple batches so this stays consistent
const BATCH_ID = 0n;
/**
 * @internal - only exported for testing
 */
async function prepareBiconomyTransaction({ account, serializableTransaction, transaction, gasless, }) {
    const forwarderContract = (0,_contract_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .getContract */ .u)({
        address: gasless.relayerForwarderAddress,
        chain: transaction.chain,
        client: transaction.client,
    });
    // get the nonce
    const nonce = await (0,_read_contract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)({
        contract: forwarderContract,
        method: "function getNonce(address,uint256) view returns (uint256)",
        params: [account.address, BATCH_ID],
    });
    const deadline = Math.floor(Date.now() / 1000) + (gasless.deadlineSeconds ?? 3600);
    const request = {
        from: account.address,
        to: serializableTransaction.to,
        token: _constants_addresses_js__WEBPACK_IMPORTED_MODULE_2__/* .ADDRESS_ZERO */ .je,
        txGas: serializableTransaction.gas,
        tokenGasPrice: 0n,
        batchId: BATCH_ID,
        batchNonce: nonce,
        deadline: deadline,
        data: serializableTransaction.data,
    };
    if (!request.to) {
        throw new Error("Cannot send a transaction without a `to` address");
    }
    if (!request.txGas) {
        throw new Error("Cannot send a transaction without a `gas` value");
    }
    if (!request.data) {
        throw new Error("Cannot send a transaction without a `data` value");
    }
    // create the hash
    const message = (0,viem__WEBPACK_IMPORTED_MODULE_3__/* .encodeAbiParameters */ .E)([
        { type: "address" },
        { type: "address" },
        { type: "address" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "uint256" },
        { type: "bytes32" },
    ], [
        request.from,
        request.to,
        request.token,
        request.txGas,
        request.tokenGasPrice,
        request.batchId,
        request.batchNonce,
        (0,_utils_hashing_keccak256_js__WEBPACK_IMPORTED_MODULE_4__/* .keccak256 */ .w)(request.data),
    ]);
    const signature = await account.signMessage({ message });
    return [request, signature];
}
/**
 * @internal
 */
async function relayBiconomyTransaction(options) {
    const [request, signature] = await prepareBiconomyTransaction(options);
    // send the transaction to the biconomy api
    const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", {
        method: "POST",
        body: (0,_utils_json_js__WEBPACK_IMPORTED_MODULE_5__/* .stringify */ .P)({
            apiId: options.gasless.apiId,
            params: [request, signature],
            from: request.from,
            to: request.to,
            gasLimit: request.txGas,
        }),
        headers: {
            "x-api-key": options.gasless.apiKey,
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    if (!response.ok) {
        response.body?.cancel();
        throw new Error(`Failed to send transaction: ${await response.text()}`);
    }
    const json = await response.json();
    const transactionHash = json.txHash;
    if ((0,_utils_encoding_helpers_is_hex_js__WEBPACK_IMPORTED_MODULE_6__/* .isHex */ .v)(transactionHash)) {
        return {
            transactionHash: transactionHash,
            chain: options.transaction.chain,
            client: options.transaction.client,
        };
    }
    throw new Error(`Failed to send transaction: ${(0,_utils_json_js__WEBPACK_IMPORTED_MODULE_5__/* .stringify */ .P)(json)}`);
}
//# sourceMappingURL=biconomy.js.map

/***/ })

};
;