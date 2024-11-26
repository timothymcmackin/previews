"use strict";
exports.id = 78415;
exports.ids = [78415];
exports.modules = {

/***/ 78415:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendGaslessTransaction: () => (/* binding */ sendGaslessTransaction)
/* harmony export */ });
/* harmony import */ var _transaction_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77642);

async function sendGaslessTransaction({ account, transaction, serializableTransaction, gasless, }) {
    // TODO: handle special case for mutlicall transactions!
    // Steps:
    // 1. check if the method is `multicall` by comparing the 4bytes data with the `multicall` selector
    // 2. split the rest of the data into its "parts"
    // 3. solidityPack the parts with the part data + the `account.address`
    // see v4: `core/classes/transactions.ts>Transaction>prepareGasless:L551`
    if (serializableTransaction.value && serializableTransaction.value > 0n) {
        throw new Error("Gasless transactions cannot have a value");
    }
    // TODO: multiply gas by 2 for some reason(?) - we do in v4, *should* we?
    let result;
    // biconomy
    if (gasless.provider === "biconomy") {
        const { relayBiconomyTransaction } = await __webpack_require__.e(/* import() */ 80271).then(__webpack_require__.bind(__webpack_require__, 80271));
        result = await relayBiconomyTransaction({
            account,
            transaction,
            serializableTransaction,
            gasless,
        });
    }
    // openzeppelin
    if (gasless.provider === "openzeppelin") {
        const { relayOpenZeppelinTransaction } = await __webpack_require__.e(/* import() */ 88482).then(__webpack_require__.bind(__webpack_require__, 88482));
        result = await relayOpenZeppelinTransaction({
            account,
            transaction,
            serializableTransaction,
            gasless,
        });
    }
    if (gasless.provider === "engine") {
        const { relayEngineTransaction } = await __webpack_require__.e(/* import() */ 53857).then(__webpack_require__.bind(__webpack_require__, 53857));
        result = await relayEngineTransaction({
            account,
            transaction,
            serializableTransaction,
            gasless,
        });
    }
    if (!result) {
        throw new Error("Unsupported gasless provider");
    }
    (0,_transaction_store_js__WEBPACK_IMPORTED_MODULE_0__/* .addTransactionToStore */ .I)({
        address: account.address,
        transactionHash: result.transactionHash,
        chainId: transaction.chain.id,
    });
    return result;
}
//# sourceMappingURL=send-gasless-transaction.js.map

/***/ })

};
;