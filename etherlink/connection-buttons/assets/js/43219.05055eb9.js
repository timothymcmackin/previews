"use strict";
exports.id = 43219;
exports.ids = [43219];
exports.modules = {

/***/ 43219:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fulfillRequest: () => (/* binding */ fulfillRequest)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67347);

/**
 * @internal
 */
async function fulfillRequest(options) {
    const { wallet, walletConnectClient, thirdwebClient, event: { topic, id, params: { chainId: rawChainId, request }, }, handlers, } = options;
    const account = wallet.getAccount();
    if (!account) {
        throw new Error("No account connected to provided wallet");
    }
    let result;
    try {
        switch (request.method) {
            case "personal_sign": {
                if (handlers?.personal_sign) {
                    result = await handlers.personal_sign({
                        account,
                        params: request.params,
                    });
                }
                else {
                    const { handleSignRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 35382));
                    result = await handleSignRequest({
                        account,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_sign": {
                if (handlers?.eth_sign) {
                    result = await handlers.eth_sign({
                        account,
                        params: request.params,
                    });
                }
                else {
                    const { handleSignRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 35382));
                    result = await handleSignRequest({
                        account,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_signTypedData": {
                if (handlers?.eth_signTypedData) {
                    result = await handlers.eth_signTypedData({
                        account,
                        params: request.params,
                    });
                }
                else {
                    const { handleSignTypedDataRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 73088));
                    result = await handleSignTypedDataRequest({
                        account,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_signTypedData_v4": {
                if (handlers?.eth_signTypedData_v4) {
                    result = await handlers.eth_signTypedData_v4({
                        account,
                        params: request.params,
                    });
                }
                else {
                    const { handleSignTypedDataRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 73088));
                    result = await handleSignTypedDataRequest({
                        account,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_signTransaction": {
                if (handlers?.eth_signTransaction) {
                    result = await handlers.eth_signTransaction({
                        account,
                        params: request.params,
                    });
                }
                else {
                    const { handleSignTransactionRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 10774));
                    result = await handleSignTransactionRequest({
                        account,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_sendTransaction": {
                const chainId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseEip155ChainId */ .$)(rawChainId);
                if (handlers?.eth_sendTransaction) {
                    result = await handlers.eth_sendTransaction({
                        account,
                        chainId,
                        params: request.params,
                    });
                }
                else {
                    const { handleSendTransactionRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 38184));
                    result = await handleSendTransactionRequest({
                        account,
                        chainId,
                        thirdwebClient,
                        params: request.params,
                    });
                }
                break;
            }
            case "eth_sendRawTransaction": {
                const chainId = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseEip155ChainId */ .$)(rawChainId);
                if (handlers?.eth_sendRawTransaction) {
                    result = await handlers.eth_sendRawTransaction({
                        account,
                        chainId,
                        params: request.params,
                    });
                }
                else {
                    const { handleSendRawTransactionRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 74082));
                    result = await handleSendRawTransactionRequest({
                        account,
                        chainId,
                        params: request.params,
                    });
                }
                break;
            }
            case "wallet_addEthereumChain": {
                if (handlers?.wallet_addEthereumChain) {
                    result = await handlers.wallet_addEthereumChain({
                        wallet,
                        params: request.params,
                    });
                }
                else {
                    throw new Error("Unsupported request method: wallet_addEthereumChain");
                }
                break;
            }
            case "wallet_switchEthereumChain": {
                if (handlers?.wallet_switchEthereumChain) {
                    result = await handlers.wallet_switchEthereumChain({
                        wallet,
                        params: request.params,
                    });
                }
                else {
                    const { handleSwitchChain } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9409));
                    result = await handleSwitchChain({
                        wallet,
                        params: request.params,
                    });
                }
                break;
            }
            default: {
                const potentialHandler = handlers?.[request.method];
                if (potentialHandler) {
                    result = await potentialHandler({
                        account,
                        chainId: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseEip155ChainId */ .$)(rawChainId),
                        params: request.params,
                    });
                }
                else {
                    throw new Error(`Unsupported request method: ${request.method}`);
                }
            }
        }
    }
    catch (error) {
        result = {
            code: typeof error === "object" && error !== null && "code" in error
                ? error.code
                : 500,
            message: typeof error === "object" && error !== null && "message" in error
                ? error.message
                : "Unknown error",
        };
    }
    walletConnectClient.respond({
        topic,
        response: {
            id,
            jsonrpc: "2.0",
            result,
        },
    });
}
//# sourceMappingURL=session-request.js.map

/***/ })

};
;