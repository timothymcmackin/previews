"use strict";
exports.id = 53857;
exports.ids = [53857];
exports.modules = {

/***/ 53857:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   relayEngineTransaction: () => (/* binding */ relayEngineTransaction)
/* harmony export */ });
/* unused harmony exports prepareEngineTransaction, ForwardRequest, ChainAwareForwardRequest */
/* harmony import */ var _contract_contract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57621);
/* harmony import */ var _utils_json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75100);
/* harmony import */ var _read_contract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26182);
/* harmony import */ var _wait_for_tx_receipt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41872);




/**
 * @internal - only exported for testing
 */
async function prepareEngineTransaction({ account, serializableTransaction, transaction, gasless, }) {
    const forrwaderContract = (0,_contract_contract_js__WEBPACK_IMPORTED_MODULE_0__/* .getContract */ .u)({
        address: gasless.relayerForwarderAddress,
        chain: transaction.chain,
        client: transaction.client,
    });
    const nonce = await (0,_read_contract_js__WEBPACK_IMPORTED_MODULE_1__.readContract)({
        contract: forrwaderContract,
        method: "function getNonce(address) view returns (uint256)",
        params: [account.address],
    });
    const [signature, message] = await (async () => {
        // TODO: handle special case for `approve` -> `permit` transactions
        if (!serializableTransaction.to) {
            throw new Error("engine transactions must have a 'to' address");
        }
        if (!serializableTransaction.gas) {
            throw new Error("engine transactions must have a 'gas' value");
        }
        if (!serializableTransaction.data) {
            throw new Error("engine transactions must have a 'data' value");
        }
        // chainless support!
        if (gasless.experimentalChainlessSupport) {
            const message = {
                from: account.address,
                to: serializableTransaction.to,
                value: 0n,
                gas: serializableTransaction.gas,
                nonce: nonce,
                data: serializableTransaction.data,
                chainid: BigInt(transaction.chain.id),
            };
            return [
                await account.signTypedData({
                    domain: {
                        name: "GSNv2 Forwarder",
                        version: "0.0.1",
                        verifyingContract: forrwaderContract.address,
                    },
                    message,
                    primaryType: "ForwardRequest",
                    types: { ForwardRequest: ChainAwareForwardRequest },
                }),
                message,
            ];
        }
        // else non-chainless support
        const message = {
            from: account.address,
            to: serializableTransaction.to,
            value: 0n,
            gas: serializableTransaction.gas,
            nonce: nonce,
            data: serializableTransaction.data,
        };
        return [
            await account.signTypedData({
                domain: {
                    name: gasless.domainName ?? "GSNv2 Forwarder",
                    version: gasless.domainVersion ?? "0.0.1",
                    chainId: transaction.chain.id,
                    verifyingContract: forrwaderContract.address,
                },
                message,
                primaryType: "ForwardRequest",
                types: { ForwardRequest },
            }),
            message,
        ];
    })();
    // TODO: handle special case for `approve` -> `permit`
    const messageType = "forward";
    return { message, signature, messageType };
}
const ForwardRequest = [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "gas", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "data", type: "bytes" },
];
const ChainAwareForwardRequest = [
    { name: "from", type: "address" },
    { name: "to", type: "address" },
    { name: "value", type: "uint256" },
    { name: "gas", type: "uint256" },
    { name: "nonce", type: "uint256" },
    { name: "data", type: "bytes" },
    { name: "chainid", type: "uint256" },
];
/**
 * @internal
 */
async function relayEngineTransaction(options) {
    const { message, messageType, signature } = await prepareEngineTransaction(options);
    const response = await fetch(options.gasless.relayerUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: (0,_utils_json_js__WEBPACK_IMPORTED_MODULE_2__/* .stringify */ .P)({
            request: message,
            type: messageType,
            signature,
            forwarderAddress: options.gasless.relayerForwarderAddress,
        }),
    });
    if (!response.ok) {
        throw new Error(`Failed to send transaction: ${await response.text()}`);
    }
    const json = await response.json();
    if (!json.result) {
        throw new Error(`Relay transaction failed: ${json.message}`);
    }
    const queueId = json.result.queueId;
    // poll for transactionHash
    const timeout = 60000;
    const interval = 1000;
    const endtime = Date.now() + timeout;
    while (Date.now() < endtime) {
        const receipt = await fetchReceipt({ options, queueId });
        if (receipt) {
            return {
                transactionHash: receipt.transactionHash,
                chain: options.transaction.chain,
                client: options.transaction.client,
            };
        }
        await new Promise((resolve) => setTimeout(resolve, interval));
    }
    throw new Error(`Failed to find relayed transaction after ${timeout}ms`);
}
async function fetchReceipt(args) {
    const { options, queueId } = args;
    const url = options.gasless.relayerUrl.split("/relayer/")[0];
    const res = await fetch(`${url}/transaction/status/${queueId}`, {
        method: "GET",
    });
    const resJson = await res.json();
    if (!res.ok) {
        return null;
    }
    const result = resJson.result;
    if (!result) {
        return null;
    }
    switch (result.status) {
        case "errored":
            throw new Error(`Transaction errored with reason: ${result.errorMessage}`);
        case "cancelled":
            throw new Error("Transaction execution cancelled.");
        case "mined": {
            const receipt = await (0,_wait_for_tx_receipt_js__WEBPACK_IMPORTED_MODULE_3__/* .waitForReceipt */ .h)({
                client: options.transaction.client,
                chain: options.transaction.chain,
                transactionHash: result.transactionHash,
            });
            return receipt;
        }
        default: {
            return null;
        }
    }
}
//# sourceMappingURL=engine.js.map

/***/ })

};
;