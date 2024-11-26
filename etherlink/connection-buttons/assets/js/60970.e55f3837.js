"use strict";
exports.id = 60970;
exports.ids = [60970];
exports.modules = {

/***/ 60970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoConnectInjectedWallet: () => (/* binding */ autoConnectInjectedWallet),
/* harmony export */   connectInjectedWallet: () => (/* binding */ connectInjectedWallet)
/* harmony export */ });
/* unused harmony exports isInjectedWallet, getInjectedProvider */
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71352);
/* harmony import */ var _chains_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95810);
/* harmony import */ var _utils_address_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4159);
/* harmony import */ var _utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75403);
/* harmony import */ var _utils_chains_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98356);
/* harmony import */ var _utils_normalizeChainId_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75814);
/* harmony import */ var _mipdStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74589);
/* harmony import */ var _utils_signatures_helpers_parseTypedData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26485);








/**
 * Checks if the provided wallet is an injected wallet.
 *
 * @param wallet - The wallet to check.
 * @returns True if the wallet is an injected wallet, false otherwise.
 */
function isInjectedWallet(wallet) {
    return !!injectedProvider(wallet.id);
}
// TODO: save the provider in data
function getInjectedProvider(walletId) {
    const provider = (0,_mipdStore_js__WEBPACK_IMPORTED_MODULE_0__.injectedProvider)(walletId);
    if (!provider) {
        throw new Error(`No injected provider found for wallet: "${walletId}"`);
    }
    return provider;
}
/**
 * @internal
 */
async function connectInjectedWallet(id, options, emitter) {
    const provider = getInjectedProvider(id);
    const addresses = await provider.request({
        method: "eth_requestAccounts",
    });
    const addr = addresses[0];
    if (!addr) {
        throw new Error("no accounts available");
    }
    // use the first account
    const address = (0,_utils_address_js__WEBPACK_IMPORTED_MODULE_1__/* .getAddress */ .Kn)(addr);
    // get the chainId the provider is on
    const chainId = await provider
        .request({ method: "eth_chainId" })
        .then(_utils_normalizeChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeChainId */ .J);
    let connectedChain = options.chain && options.chain.id === chainId
        ? options.chain
        : (0,_chains_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .getCachedChain */ .XY)(chainId);
    // if we want a specific chainId and it is not the same as the provider chainId, trigger switchChain
    if (options.chain && options.chain.id !== chainId) {
        await switchChain(provider, options.chain);
        connectedChain = options.chain;
    }
    return onConnect(provider, address, connectedChain, emitter);
}
/**
 * @internal
 */
async function autoConnectInjectedWallet(id, emitter, chain) {
    const provider = getInjectedProvider(id);
    // connected accounts
    const addresses = await provider.request({
        method: "eth_accounts",
    });
    const addr = addresses[0];
    if (!addr) {
        throw new Error("no accounts available");
    }
    // use the first account
    const address = (0,_utils_address_js__WEBPACK_IMPORTED_MODULE_1__/* .getAddress */ .Kn)(addr);
    // get the chainId the provider is on
    const chainId = await provider
        .request({ method: "eth_chainId" })
        .then(_utils_normalizeChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeChainId */ .J);
    const connectedChain = chain && chain.id === chainId ? chain : (0,_chains_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .getCachedChain */ .XY)(chainId);
    return onConnect(provider, address, connectedChain, emitter);
}
function createAccount(provider, _address) {
    const account = {
        address: (0,_utils_address_js__WEBPACK_IMPORTED_MODULE_1__/* .getAddress */ .Kn)(_address),
        async sendTransaction(tx) {
            const transactionHash = (await provider.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        accessList: tx.accessList,
                        value: tx.value ? (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .eC)(tx.value) : undefined,
                        gas: tx.gas ? (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .eC)(tx.gas) : undefined,
                        from: this.address,
                        to: tx.to,
                        data: tx.data,
                    },
                ],
            }));
            return {
                transactionHash,
            };
        },
        async signMessage({ message }) {
            if (!account.address) {
                throw new Error("Provider not setup");
            }
            const messageToSign = (() => {
                if (typeof message === "string") {
                    return (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__/* .stringToHex */ .$G)(message);
                }
                if (message.raw instanceof Uint8Array) {
                    return (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__/* .uint8ArrayToHex */ .dg)(message.raw);
                }
                return message.raw;
            })();
            return await provider.request({
                method: "personal_sign",
                params: [messageToSign, account.address],
            });
        },
        async signTypedData(typedData) {
            if (!provider || !account.address) {
                throw new Error("Provider not setup");
            }
            const parsedTypedData = (0,_utils_signatures_helpers_parseTypedData_js__WEBPACK_IMPORTED_MODULE_5__/* .parseTypedData */ .t)(typedData);
            const { domain, message, primaryType } = parsedTypedData;
            const types = {
                EIP712Domain: (0,viem__WEBPACK_IMPORTED_MODULE_6__/* .getTypesForEIP712Domain */ .cj)({ domain }),
                ...parsedTypedData.types,
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            (0,viem__WEBPACK_IMPORTED_MODULE_6__/* .validateTypedData */ .iC)({ domain, message, primaryType, types });
            const stringifiedData = (0,viem__WEBPACK_IMPORTED_MODULE_6__/* .serializeTypedData */ .H6)({
                domain: domain ?? {},
                message,
                primaryType,
                types,
            });
            return await provider.request({
                method: "eth_signTypedData_v4",
                params: [account.address, stringifiedData],
            });
        },
        async watchAsset(asset) {
            const result = await provider.request({
                method: "wallet_watchAsset",
                params: asset,
            }, { retryCount: 0 });
            return result;
        },
    };
    return account;
}
/**
 * Call this method when the wallet provider is connected or auto connected
 * @internal
 */
async function onConnect(provider, address, chain, emitter) {
    const account = createAccount(provider, address);
    async function disconnect() {
        provider.removeListener("accountsChanged", onAccountsChanged);
        provider.removeListener("chainChanged", onChainChanged);
        provider.removeListener("disconnect", onDisconnect);
    }
    async function onDisconnect() {
        disconnect();
        emitter.emit("disconnect", undefined);
    }
    function onAccountsChanged(accounts) {
        if (accounts[0]) {
            const newAccount = createAccount(provider, (0,_utils_address_js__WEBPACK_IMPORTED_MODULE_1__/* .getAddress */ .Kn)(accounts[0]));
            emitter.emit("accountChanged", newAccount);
            emitter.emit("accountsChanged", accounts);
        }
        else {
            onDisconnect();
        }
    }
    function onChainChanged(newChainId) {
        const newChain = (0,_chains_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .getCachedChain */ .XY)((0,_utils_normalizeChainId_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeChainId */ .J)(newChainId));
        emitter.emit("chainChanged", newChain);
    }
    if (provider.on) {
        provider.on("accountsChanged", onAccountsChanged);
        provider.on("chainChanged", onChainChanged);
        provider.on("disconnect", onDisconnect);
    }
    return [
        account,
        chain,
        onDisconnect,
        (newChain) => switchChain(provider, newChain),
    ];
}
/**
 * @internal
 */
async function switchChain(provider, chain) {
    const hexChainId = (0,_utils_encoding_hex_js__WEBPACK_IMPORTED_MODULE_4__/* .numberToHex */ .eC)(chain.id);
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: hexChainId }],
        });
        // biome-ignore lint/suspicious/noExplicitAny: TODO: fix any
    }
    catch (e) {
        // if chain does not exist, add the chain
        if (e?.code === 4902 || e?.data?.originalError?.code === 4902) {
            const apiChain = await (0,_chains_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .getChainMetadata */ .ZN)(chain);
            await provider.request({
                method: "wallet_addEthereumChain",
                params: [
                    {
                        chainId: hexChainId,
                        chainName: apiChain.name,
                        nativeCurrency: apiChain.nativeCurrency,
                        rpcUrls: (0,_utils_chains_js__WEBPACK_IMPORTED_MODULE_7__/* .getValidPublicRPCUrl */ .w)(apiChain), // no client id on purpose here
                        blockExplorerUrls: apiChain.explorers?.map((x) => x.url),
                    },
                ],
            });
        }
        else {
            throw e;
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ })

};
;