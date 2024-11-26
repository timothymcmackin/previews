"use strict";
exports.id = 8710;
exports.ids = [8710];
exports.modules = {

/***/ 8710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  autoConnectWC: () => (/* binding */ autoConnectWC),
  connectWC: () => (/* binding */ connectWC)
});

// UNUSED EXPORTS: isWalletConnect

// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/typedData.js + 1 modules
var utils_typedData = __webpack_require__(71352);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/base.js
var base = __webpack_require__(62027);
// EXTERNAL MODULE: ./node_modules/viem/_esm/utils/stringify.js
var utils_stringify = __webpack_require__(96070);
// EXTERNAL MODULE: ./node_modules/viem/_esm/errors/utils.js + 1 modules
var utils = __webpack_require__(35280);
;// CONCATENATED MODULE: ./node_modules/viem/_esm/errors/request.js



class HttpRequestError extends (/* unused pure expression or super */ null && (BaseError)) {
    constructor({ body, cause, details, headers, status, url, }) {
        super('HTTP request failed.', {
            cause,
            details,
            metaMessages: [
                status && `Status: ${status}`,
                `URL: ${getUrl(url)}`,
                body && `Request body: ${stringify(body)}`,
            ].filter(Boolean),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'HttpRequestError'
        });
        Object.defineProperty(this, "body", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.body = body;
        this.headers = headers;
        this.status = status;
        this.url = url;
    }
}
class WebSocketRequestError extends (/* unused pure expression or super */ null && (BaseError)) {
    constructor({ body, details, url, }) {
        super('WebSocket request failed.', {
            details,
            metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'WebSocketRequestError'
        });
    }
}
class RpcRequestError extends base/* BaseError */.G {
    constructor({ body, error, url, }) {
        super('RPC Request failed.', {
            cause: error,
            details: error.message,
            metaMessages: [`URL: ${(0,utils/* getUrl */.Gr)(url)}`, `Request body: ${(0,utils_stringify/* stringify */.P)(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcRequestError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.code = error.code;
    }
}
class TimeoutError extends (/* unused pure expression or super */ null && (BaseError)) {
    constructor({ body, url, }) {
        super('The request took too long to respond.', {
            details: 'The request timed out.',
            metaMessages: [`URL: ${getUrl(url)}`, `Request body: ${stringify(body)}`],
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TimeoutError'
        });
    }
}
//# sourceMappingURL=request.js.map
;// CONCATENATED MODULE: ./node_modules/viem/_esm/errors/rpc.js


const unknownErrorCode = -1;
class RpcError extends base/* BaseError */.G {
    constructor(cause, { code, docsPath, metaMessages, shortMessage }) {
        super(shortMessage, {
            cause,
            docsPath,
            metaMessages: metaMessages || cause?.metaMessages,
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'RpcError'
        });
        Object.defineProperty(this, "code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = cause.name;
        this.code = (cause instanceof RpcRequestError ? cause.code : code ?? unknownErrorCode);
    }
}
class ProviderRpcError extends RpcError {
    constructor(cause, options) {
        super(cause, options);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderRpcError'
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = options.data;
    }
}
class ParseRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ParseRpcError.code,
            shortMessage: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ParseRpcError'
        });
    }
}
Object.defineProperty(ParseRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32700
});
class InvalidRequestRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidRequestRpcError.code,
            shortMessage: 'JSON is not a valid request object.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidRequestRpcError'
        });
    }
}
Object.defineProperty(InvalidRequestRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32600
});
class MethodNotFoundRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: MethodNotFoundRpcError.code,
            shortMessage: 'The method does not exist / is not available.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotFoundRpcError'
        });
    }
}
Object.defineProperty(MethodNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32601
});
class InvalidParamsRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidParamsRpcError.code,
            shortMessage: [
                'Invalid parameters were provided to the RPC method.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidParamsRpcError'
        });
    }
}
Object.defineProperty(InvalidParamsRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32602
});
class InternalRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InternalRpcError.code,
            shortMessage: 'An internal error was received.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InternalRpcError'
        });
    }
}
Object.defineProperty(InternalRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32603
});
class InvalidInputRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: InvalidInputRpcError.code,
            shortMessage: [
                'Missing or invalid parameters.',
                'Double check you have provided the correct parameters.',
            ].join('\n'),
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'InvalidInputRpcError'
        });
    }
}
Object.defineProperty(InvalidInputRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32000
});
class ResourceNotFoundRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceNotFoundRpcError.code,
            shortMessage: 'Requested resource not found.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceNotFoundRpcError'
        });
    }
}
Object.defineProperty(ResourceNotFoundRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32001
});
class ResourceUnavailableRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: ResourceUnavailableRpcError.code,
            shortMessage: 'Requested resource not available.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ResourceUnavailableRpcError'
        });
    }
}
Object.defineProperty(ResourceUnavailableRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32002
});
class TransactionRejectedRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: TransactionRejectedRpcError.code,
            shortMessage: 'Transaction creation failed.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'TransactionRejectedRpcError'
        });
    }
}
Object.defineProperty(TransactionRejectedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32003
});
class MethodNotSupportedRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: MethodNotSupportedRpcError.code,
            shortMessage: 'Method is not implemented.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'MethodNotSupportedRpcError'
        });
    }
}
Object.defineProperty(MethodNotSupportedRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32004
});
class LimitExceededRpcError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: LimitExceededRpcError.code,
            shortMessage: 'Request exceeds defined limit.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'LimitExceededRpcError'
        });
    }
}
Object.defineProperty(LimitExceededRpcError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32005
});
class JsonRpcVersionUnsupportedError extends RpcError {
    constructor(cause) {
        super(cause, {
            code: JsonRpcVersionUnsupportedError.code,
            shortMessage: 'Version of JSON-RPC protocol is not supported.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'JsonRpcVersionUnsupportedError'
        });
    }
}
Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: -32006
});
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UserRejectedRequestError.code,
            shortMessage: 'User rejected the request.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UserRejectedRequestError'
        });
    }
}
Object.defineProperty(UserRejectedRequestError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4001
});
class UnauthorizedProviderError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UnauthorizedProviderError.code,
            shortMessage: 'The requested method and/or account has not been authorized by the user.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnauthorizedProviderError'
        });
    }
}
Object.defineProperty(UnauthorizedProviderError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4100
});
class UnsupportedProviderMethodError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: UnsupportedProviderMethodError.code,
            shortMessage: 'The Provider does not support the requested method.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnsupportedProviderMethodError'
        });
    }
}
Object.defineProperty(UnsupportedProviderMethodError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4200
});
class ProviderDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ProviderDisconnectedError.code,
            shortMessage: 'The Provider is disconnected from all chains.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ProviderDisconnectedError'
        });
    }
}
Object.defineProperty(ProviderDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4900
});
class ChainDisconnectedError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: ChainDisconnectedError.code,
            shortMessage: 'The Provider is not connected to the requested chain.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'ChainDisconnectedError'
        });
    }
}
Object.defineProperty(ChainDisconnectedError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4901
});
class SwitchChainError extends ProviderRpcError {
    constructor(cause) {
        super(cause, {
            code: SwitchChainError.code,
            shortMessage: 'An error occurred when attempting to switch chain.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'SwitchChainError'
        });
    }
}
Object.defineProperty(SwitchChainError, "code", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 4902
});
class UnknownRpcError extends (/* unused pure expression or super */ null && (RpcError)) {
    constructor(cause) {
        super(cause, {
            shortMessage: 'An unknown RPC error occurred.',
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 'UnknownRpcError'
        });
    }
}
//# sourceMappingURL=rpc.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/chains/utils.js
var chains_utils = __webpack_require__(95810);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/hex.js
var hex = __webpack_require__(75403);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/__generated__/getWalletInfo.js
var getWalletInfo = __webpack_require__(12138);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/utils/chains.js
var chains = __webpack_require__(98356);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/utils/defaultDappMetadata.js
var defaultDappMetadata = __webpack_require__(2129);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/utils/normalizeChainId.js
var normalizeChainId = __webpack_require__(75814);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/address.js
var utils_address = __webpack_require__(4159);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/signatures/helpers/parseTypedData.js
var parseTypedData = __webpack_require__(26485);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/storage/walletStorage.js
var walletStorage = __webpack_require__(16525);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/url.js
var url = __webpack_require__(19908);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/wallet-connect/constants.js
var constants = __webpack_require__(8103);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/wallet-connect/controller.js












const ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
const defaultShowQrModal = true;
const storageKeys = {
    requestedChains: "tw.wc.requestedChains",
    lastUsedChainId: "tw.wc.lastUsedChainId",
};
/**
 * Checks if the provided wallet is a Wallet Connect wallet.
 *
 * @param wallet - The wallet to check.
 * @returns True if the wallet is a Wallet Connect wallet, false otherwise.
 */
function isWalletConnect(wallet) {
    return wallet.id === "walletConnect";
}
/**
 * @internal
 */
async function connectWC(options, emitter, walletId, storage, sessionHandler) {
    const provider = await initProvider(options, walletId, sessionHandler);
    const wcOptions = options.walletConnect;
    let { onDisplayUri } = wcOptions || {};
    // use default sessionHandler unless onDisplayUri is explicitly provided
    if (!onDisplayUri && sessionHandler && walletId !== "walletConnect") {
        const walletInfo = await (0,getWalletInfo/* getWalletInfo */.d)(walletId);
        const deeplinkHandler = (uri) => {
            const appUrl = walletInfo.mobile.native || walletInfo.mobile.universal;
            if (!appUrl) {
                throw new Error("No app url found for wallet connect to redirect to.");
            }
            const fullUrl = (0,url/* formatWalletConnectUrl */.P)(appUrl, uri).redirect;
            sessionHandler(fullUrl);
        };
        onDisplayUri = deeplinkHandler;
    }
    if (onDisplayUri) {
        provider.events.addListener("display_uri", onDisplayUri);
    }
    const { rpcMap, chainsToRequest } = getChainsToRequest({
        client: options.client,
        chain: options.chain,
        optionalChains: options.walletConnect?.optionalChains,
    });
    if (provider.session) {
        await provider.connect({
            ...(wcOptions?.pairingTopic
                ? { pairingTopic: wcOptions?.pairingTopic }
                : {}),
            optionalChains: chainsToRequest,
            chains: options.chain
                ? [options.chain.id]
                : chainsToRequest.length > 0
                    ? [chainsToRequest[0]]
                    : [1],
            rpcMap: rpcMap,
        });
    }
    setRequestedChainsIds(chainsToRequest, storage);
    // If session exists and chains are authorized, enable provider for required chain
    const addresses = await provider.enable();
    const address = addresses[0];
    if (!address) {
        throw new Error("No accounts found on provider.");
    }
    const providerChainId = (0,normalizeChainId/* normalizeChainId */.J)(provider.chainId);
    const chain = options.chain && options.chain.id === providerChainId
        ? options.chain
        : (0,chains_utils/* getCachedChain */.XY)(providerChainId);
    if (options) {
        const savedParams = {
            optionalChains: options.walletConnect?.optionalChains,
            chain: options.chain,
            pairingTopic: options.walletConnect?.pairingTopic,
        };
        if (storage) {
            (0,walletStorage/* saveConnectParamsToStorage */.j$)(storage, walletId, savedParams);
        }
    }
    if (wcOptions?.onDisplayUri) {
        provider.events.removeListener("display_uri", wcOptions.onDisplayUri);
    }
    return onConnect(address, chain, provider, emitter, storage);
}
/**
 * Auto connect to already connected wallet connect session.
 * @internal
 */
async function autoConnectWC(options, emitter, walletId, storage, sessionHandler) {
    const savedConnectParams = storage
        ? await (0,walletStorage/* getSavedConnectParamsFromStorage */.Zx)(storage, walletId)
        : null;
    const provider = await initProvider(savedConnectParams
        ? {
            chain: savedConnectParams.chain,
            client: options.client,
            walletConnect: {
                pairingTopic: savedConnectParams.pairingTopic,
                optionalChains: savedConnectParams.optionalChains,
            },
        }
        : {
            client: options.client,
            walletConnect: {},
        }, walletId, sessionHandler, true);
    const address = provider.accounts[0];
    if (!address) {
        throw new Error("No accounts found on provider.");
    }
    const providerChainId = (0,normalizeChainId/* normalizeChainId */.J)(provider.chainId);
    const chain = options.chain && options.chain.id === providerChainId
        ? options.chain
        : (0,chains_utils/* getCachedChain */.XY)(providerChainId);
    return onConnect(address, chain, provider, emitter, storage);
}
// Connection utils -----------------------------------------------------------------------------------------------
async function initProvider(options, walletId, sessionRequestHandler, isAutoConnect = false) {
    const walletInfo = await (0,getWalletInfo/* getWalletInfo */.d)(walletId);
    const wcOptions = options.walletConnect;
    const { EthereumProvider, OPTIONAL_EVENTS, OPTIONAL_METHODS } = await __webpack_require__.e(/* import() */ 15878).then(__webpack_require__.bind(__webpack_require__, 15878));
    const { rpcMap, chainsToRequest } = getChainsToRequest({
        client: options.client,
        chain: options.chain,
        optionalChains: options.walletConnect?.optionalChains,
    });
    const provider = await EthereumProvider.init({
        showQrModal: wcOptions?.showQrModal === undefined
            ? sessionRequestHandler
                ? false
                : defaultShowQrModal
            : wcOptions.showQrModal,
        projectId: wcOptions?.projectId || constants/* DEFAULT_PROJECT_ID */.O,
        optionalMethods: OPTIONAL_METHODS,
        optionalEvents: OPTIONAL_EVENTS,
        optionalChains: chainsToRequest,
        chains: options.chain
            ? [options.chain.id]
            : chainsToRequest.length > 0
                ? [chainsToRequest[0]]
                : [1],
        metadata: {
            name: wcOptions?.appMetadata?.name || (0,defaultDappMetadata/* getDefaultAppMetadata */.f)().name,
            description: wcOptions?.appMetadata?.description ||
                (0,defaultDappMetadata/* getDefaultAppMetadata */.f)().description,
            url: wcOptions?.appMetadata?.url || (0,defaultDappMetadata/* getDefaultAppMetadata */.f)().url,
            icons: [
                wcOptions?.appMetadata?.logoUrl || (0,defaultDappMetadata/* getDefaultAppMetadata */.f)().logoUrl,
            ],
        },
        rpcMap: rpcMap,
        qrModalOptions: wcOptions?.qrModalOptions,
        disableProviderPing: true,
    });
    provider.events.setMaxListeners(Number.POSITIVE_INFINITY);
    // disconnect the provider if chains are stale when (if not auto connecting)
    if (!isAutoConnect) {
        // const isStale = await isChainsStale(provider, chainsToRequest);
        if (provider.session) {
            await provider.disconnect();
        }
    }
    if (walletId !== "walletConnect") {
        function handleSessionRequest() {
            const walletLinkToOpen = provider.session?.peer?.metadata?.redirect?.native ||
                walletInfo.mobile.native ||
                walletInfo.mobile.universal;
            if (sessionRequestHandler && walletLinkToOpen) {
                sessionRequestHandler(walletLinkToOpen);
            }
        }
        provider.signer.client.on("session_request_sent", handleSessionRequest);
        provider.events.addListener("disconnect", () => {
            provider.signer.client.off("session_request_sent", handleSessionRequest);
        });
    }
    return provider;
}
function createAccount(provider, _address) {
    const address = (0,utils_address/* getAddress */.Kn)(_address);
    const account = {
        address: address,
        async sendTransaction(tx) {
            const transactionHash = (await provider.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        gas: tx.gas ? (0,hex/* numberToHex */.eC)(tx.gas) : undefined,
                        value: tx.value ? (0,hex/* numberToHex */.eC)(tx.value) : undefined,
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
            const messageToSign = (() => {
                if (typeof message === "string") {
                    return (0,hex/* stringToHex */.$G)(message);
                }
                if (message.raw instanceof Uint8Array) {
                    return (0,hex/* uint8ArrayToHex */.dg)(message.raw);
                }
                return message.raw;
            })();
            return provider.request({
                method: "personal_sign",
                params: [messageToSign, this.address],
            });
        },
        async signTypedData(_data) {
            const data = (0,parseTypedData/* parseTypedData */.t)(_data);
            const { domain, message, primaryType } = data;
            const types = {
                EIP712Domain: (0,utils_typedData/* getTypesForEIP712Domain */.cj)({ domain }),
                ...data.types,
            };
            // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
            // as we can't statically check this with TypeScript.
            (0,utils_typedData/* validateTypedData */.iC)({ domain, message, primaryType, types });
            const typedData = (0,utils_typedData/* serializeTypedData */.H6)({
                domain: domain ?? {},
                message,
                primaryType,
                types,
            });
            return await provider.request({
                method: "eth_signTypedData_v4",
                params: [this.address, typedData],
            });
        },
    };
    return account;
}
function onConnect(address, chain, provider, emitter, storage) {
    const account = createAccount(provider, address);
    async function disconnect() {
        provider.removeListener("accountsChanged", onAccountsChanged);
        provider.removeListener("chainChanged", onChainChanged);
        provider.removeListener("disconnect", onDisconnect);
        await provider.disconnect();
    }
    function onDisconnect() {
        setRequestedChainsIds([], storage);
        storage?.removeItem(storageKeys.lastUsedChainId);
        disconnect();
        emitter.emit("disconnect", undefined);
    }
    function onAccountsChanged(accounts) {
        if (accounts[0]) {
            const newAccount = createAccount(provider, (0,utils_address/* getAddress */.Kn)(accounts[0]));
            emitter.emit("accountChanged", newAccount);
            emitter.emit("accountsChanged", accounts);
        }
        else {
            onDisconnect();
        }
    }
    function onChainChanged(newChainId) {
        const newChain = (0,chains_utils/* getCachedChain */.XY)((0,normalizeChainId/* normalizeChainId */.J)(newChainId));
        emitter.emit("chainChanged", newChain);
        storage?.setItem(storageKeys.lastUsedChainId, String(newChainId));
    }
    provider.on("accountsChanged", onAccountsChanged);
    provider.on("chainChanged", onChainChanged);
    provider.on("disconnect", onDisconnect);
    provider.on("session_delete", onDisconnect);
    return [
        account,
        chain,
        disconnect,
        (newChain) => switchChainWC(provider, newChain, storage),
    ];
}
// Storage utils  -----------------------------------------------------------------------------------------------
function getNamespaceMethods(provider) {
    return provider.session?.namespaces[constants/* NAMESPACE */.A]?.methods || [];
}
function getNamespaceChainsIds(provider) {
    const chainIds = provider.session?.namespaces[constants/* NAMESPACE */.A]?.chains?.map((chain) => Number.parseInt(chain.split(":")[1] || ""));
    return chainIds ?? [];
}
async function switchChainWC(provider, chain, storage) {
    const chainId = chain.id;
    try {
        const namespaceChains = getNamespaceChainsIds(provider);
        const namespaceMethods = getNamespaceMethods(provider);
        const isChainApproved = namespaceChains.includes(chainId);
        if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
            const apiChain = await (0,chains_utils/* getChainMetadata */.ZN)(chain);
            const blockExplorerUrls = [
                ...new Set([
                    ...(chain.blockExplorers?.map((x) => x.url) || []),
                    ...(apiChain.explorers?.map((x) => x.url) || []),
                ]),
            ];
            await provider.request({
                method: ADD_ETH_CHAIN_METHOD,
                params: [
                    {
                        chainId: (0,hex/* numberToHex */.eC)(apiChain.chainId),
                        chainName: apiChain.name,
                        nativeCurrency: apiChain.nativeCurrency,
                        rpcUrls: (0,chains/* getValidPublicRPCUrl */.w)(apiChain), // no clientId on purpose
                        blockExplorerUrls: blockExplorerUrls.length > 0 ? blockExplorerUrls : undefined,
                    },
                ],
            });
            const requestedChains = await getRequestedChainsIds(storage);
            requestedChains.push(chainId);
            setRequestedChainsIds(requestedChains, storage);
        }
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: (0,hex/* numberToHex */.eC)(chainId) }],
        });
    }
    catch (error) {
        const message = typeof error === "string" ? error : error?.message;
        if (/user rejected request/i.test(message)) {
            throw new UserRejectedRequestError(error);
        }
        throw new SwitchChainError(error);
    }
}
/**
 * Set the requested chains to the storage.
 * @internal
 */
function setRequestedChainsIds(chains, storage) {
    storage?.setItem(storageKeys.requestedChains, JSON.stringify(chains));
}
/**
 * Get the last requested chains from the storage.
 * @internal
 */
async function getRequestedChainsIds(storage) {
    const data = await storage.getItem(storageKeys.requestedChains);
    return data ? JSON.parse(data) : [];
}
function getChainsToRequest(options) {
    const rpcMap = {};
    if (options.chain) {
        rpcMap[options.chain.id] = (0,chains_utils/* getRpcUrlForChain */.GO)({
            chain: options.chain,
            client: options.client,
        });
    }
    // limit optional chains to 10
    const optionalChains = (options?.optionalChains || []).slice(0, 10);
    for (const chain of optionalChains) {
        rpcMap[chain.id] = (0,chains_utils/* getRpcUrlForChain */.GO)({
            chain: chain,
            client: options.client,
        });
    }
    const optionalChainIds = optionalChains.map((c) => c.id) || [];
    const chainsToRequest = options.chain
        ? [options.chain.id, ...optionalChainIds]
        : optionalChainIds.length > 0
            ? optionalChainIds
            : [1];
    if (!options.chain && optionalChains.length === 0) {
        rpcMap[1] = (0,chains_utils/* getCachedChain */.XY)(1).rpc;
    }
    return {
        rpcMap,
        chainsToRequest,
    };
}
//# sourceMappingURL=controller.js.map

/***/ })

};
;