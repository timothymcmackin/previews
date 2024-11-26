"use strict";
exports.id = 31455;
exports.ids = [31455,12716,38430];
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

/***/ }),

/***/ 38430:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getCurrencyMetadata: () => (/* binding */ getCurrencyMetadata)
});

// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/constants/addresses.js
var addresses = __webpack_require__(60301);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/promise/withCache.js
var withCache = __webpack_require__(71786);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/read-contract.js + 1 modules
var read_contract = __webpack_require__(26182);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/common/__generated__/IContractMetadata/read/name.js



const FN_SELECTOR = "0x06fdde03";
const FN_INPUTS = [];
const FN_OUTPUTS = [
    {
        type: "string",
    },
];
/**
 * Checks if the `name` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `name` method is supported.
 * @extension COMMON
 * @example
 * ```ts
 * import { isNameSupported } from "thirdweb/extensions/common";
 *
 * const supported = await isNameSupported(contract);
 * ```
 */
async function isNameSupported(contract) {
    return detectMethod({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Decodes the result of the name function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension COMMON
 * @example
 * ```ts
 * import { decodeNameResult } from "thirdweb/extensions/common";
 * const result = decodeNameResult("...");
 * ```
 */
function decodeNameResult(result) {
    return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @extension COMMON
 * @example
 * ```ts
 * import { name } from "thirdweb/extensions/common";
 *
 * const result = await name({
 *  contract,
 * });
 *
 * ```
 */
async function name_name(options) {
    return (0,read_contract.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [],
    });
}
//# sourceMappingURL=name.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/common/read/name.js


/**
 * Retrieves the name associated with the given contract.
 * @param options - The options for the transaction.
 * @returns A promise that resolves to the name associated with the contract.
 * @extension COMMON
 * @example
 * ```ts
 * import { name } from "thirdweb/extensions/common";
 *
 * const contractName = await name({ contract });
 * ```
 */
async function read_name_name(options) {
    return (0,withCache/* withCache */.D)(() => name_name(options), {
        cacheKey: `${options.contract.chain.id}:${options.contract.address}:name`,
        // can never change, so cache forever
        cacheTime: Number.POSITIVE_INFINITY,
    });
}
//# sourceMappingURL=name.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/common/__generated__/IContractMetadata/read/symbol.js



const symbol_FN_SELECTOR = "0x95d89b41";
const symbol_FN_INPUTS = [];
const symbol_FN_OUTPUTS = [
    {
        type: "string",
    },
];
/**
 * Checks if the `symbol` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `symbol` method is supported.
 * @extension COMMON
 * @example
 * ```ts
 * import { isSymbolSupported } from "thirdweb/extensions/common";
 *
 * const supported = await isSymbolSupported(contract);
 * ```
 */
async function isSymbolSupported(contract) {
    return detectMethod({
        contract,
        method: [symbol_FN_SELECTOR, symbol_FN_INPUTS, symbol_FN_OUTPUTS],
    });
}
/**
 * Decodes the result of the symbol function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension COMMON
 * @example
 * ```ts
 * import { decodeSymbolResult } from "thirdweb/extensions/common";
 * const result = decodeSymbolResult("...");
 * ```
 */
function decodeSymbolResult(result) {
    return decodeAbiParameters(symbol_FN_OUTPUTS, result)[0];
}
/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @extension COMMON
 * @example
 * ```ts
 * import { symbol } from "thirdweb/extensions/common";
 *
 * const result = await symbol({
 *  contract,
 * });
 *
 * ```
 */
async function symbol(options) {
    return (0,read_contract.readContract)({
        contract: options.contract,
        method: [symbol_FN_SELECTOR, symbol_FN_INPUTS, symbol_FN_OUTPUTS],
        params: [],
    });
}
//# sourceMappingURL=symbol.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/common/read/symbol.js


/**
 * Retrieves the name associated with the given contract.
 * @param options - The options for the transaction.
 * @returns A promise that resolves to the name associated with the contract.
 * @extension COMMON
 * @example
 * ```ts
 * import { symbol } from "thirdweb/extensions/common";
 *
 * const contractSymbol = await symbol({ contract });
 * ```
 */
async function symbol_symbol(options) {
    return (0,withCache/* withCache */.D)(() => symbol(options), {
        cacheKey: `${options.contract.chain.id}:${options.contract.address}:symbol`,
        // can never change, so cache forever
        cacheTime: Number.POSITIVE_INFINITY,
    });
}
//# sourceMappingURL=symbol.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/decimals.js
var decimals = __webpack_require__(73851);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/read/getCurrencyMetadata.js




/**
 * Retrieves the metadata of a currency.
 * @param options - The options for the transaction.
 * @returns A promise that resolves to an object containing the currency metadata.
 * @extension ERC20
 * @example
 * ```ts
 * import { getCurrencyMetadata } from "thirdweb/extensions/erc20";
 *
 * const currencyMetadata = await getCurrencyMetadata({ contract });
 * ```
 */
async function getCurrencyMetadata(options) {
    // if the contract is the native token, return the native currency metadata
    if ((0,addresses/* isNativeTokenAddress */.qw)(options.contract.address)) {
        return {
            name: "Ether",
            symbol: "ETH",
            decimals: 18,
            // overwrite with native currency of the chain if available
            ...options.contract.chain.nativeCurrency,
        };
    }
    try {
        const [name_, symbol_, decimals_] = await Promise.all([
            read_name_name(options).catch(() => ""),
            symbol_symbol(options),
            (0,decimals/* decimals */.uH)(options),
        ]);
        return {
            name: name_,
            symbol: symbol_,
            decimals: decimals_,
        };
    }
    catch (e) {
        throw new Error("Invalid currency token");
    }
}
//# sourceMappingURL=getCurrencyMetadata.js.map

/***/ }),

/***/ 31455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BuyScreen)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js
var react_icons_esm = __webpack_require__(62469);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/constants/addresses.js
var addresses = __webpack_require__(60301);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/address.js
var utils_address = __webpack_require__(4159);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/pay/buyWithFiat/isSwapRequiredPostOnramp.js

/**
 * Check if a Swap is required after on-ramp when buying a token with fiat currency.
 *
 * If `quote.toToken` and `quote.onRampToken` are the same (same token and chain),
 * it means on-ramp provider can directly send the desired token to the user's wallet and no swap is required.
 *
 * If `quote.toToken` and `quote.onRampToken` are different (different token or chain), A swap is required to swap the on-ramp token to the desired token.
 *
 * @param buyWithFiatQuote - The quote of type [`BuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatQuote) returned
 * by the [`getBuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/getBuyWithFiatQuote) function.
 * @buyCrypto
 */
function isSwapRequiredPostOnramp(buyWithFiatQuote) {
    const sameChain = buyWithFiatQuote.toToken.chainId ===
        buyWithFiatQuote.onRampToken.token.chainId;
    const sameToken = (0,utils_address/* getAddress */.Kn)(buyWithFiatQuote.toToken.tokenAddress) ===
        (0,utils_address/* getAddress */.Kn)(buyWithFiatQuote.onRampToken.token.tokenAddress);
    return !(sameChain && sameToken);
}
//# sourceMappingURL=isSwapRequiredPostOnramp.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/formatNumber.js
var formatNumber = __webpack_require__(77560);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/design-system/index.js
var design_system = __webpack_require__(68817);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/others/useWalletBalance.js
var useWalletBalance = __webpack_require__(73257);
// EXTERNAL MODULE: ./node_modules/thirdweb/node_modules/@tanstack/react-query/build/modern/useQuery.js + 1 modules
var useQuery = __webpack_require__(12398);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getQuote.js
var getQuote = __webpack_require__(64735);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithCryptoQuote.js


/**
 * Hook to get a price quote for performing a "Buy with crypto" transaction that allows users to buy a token with another token - aka a swap.
 *
 * The price quote is an object of type [`BuyWithCryptoQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithCryptoQuote).
 * This quote contains the information about the purchase such as token amounts, processing fees, estimated time etc.
 *
 * This hook is a React Query wrapper of the [`getBuyWithCryptoQuote`](https://portal.thirdweb.com/references/typescript/v5/getBuyWithCryptoQuote) function.
 * You can also use that function directly
 *
 * Once you have the quote, you can use the [`useSendTransaction`](https://portal.thirdweb.com/references/typescript/v5/useSendTransaction) function to send the purchase
 * and [`useBuyWithCryptoStatus`](https://portal.thirdweb.com/references/typescript/v5/useBuyWithCryptoStatus) function to get the status of the swap transaction.
 * @param params - object of type [`BuyWithCryptoQuoteQueryParams`](https://portal.thirdweb.com/references/typescript/v5/BuyWithCryptoQuoteQueryParams)
 * @param queryParams - options to configure the react query
 * @returns A React Query object which contains the data of type [`BuyWithCryptoQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithCryptoQuote)
 * @example
 * ```tsx
 * import { useBuyWithCryptoQuote, useBuyWithCryptoStatus, type BuyWithCryptoStatusQueryParams, useActiveAccount } from "thirdweb/react";
 * import { sendTransaction } from 'thirdweb';
 *
 * function Component() {
 *  const buyWithCryptoQuoteQuery = useBuyWithCryptoQuote(swapParams);
 *  const [buyTxHash, setBuyTxHash] = useState<BuyWithCryptoStatusQueryParams | undefined>();
 *  const buyWithCryptoStatusQuery = useBuyWithCryptoStatus(buyTxHash ? {
 *    client,
 *    transactionHash: buyTxHash,
 *  }: undefined);
 *
 *  async function handleBuyWithCrypto() {
 *    const account = useActiveAccount();
 *
 *    // if approval is required
 *    if (buyWithCryptoQuoteQuery.data.approval) {
 *      const approveTx = await sendTransaction({
 *        transaction: swapQuote.data.approval,
 *        account: account,
 *      });
 *      await waitForApproval(approveTx);
 *    }
 *
 *    // send the transaction to buy crypto
 *    // this promise is resolved when user confirms the transaction in the wallet and the transaction is sent to the blockchain
 *    const buyTx = await sendTransaction({
 *      transaction: swapQuote.data.transactionRequest,
 *      account: account,
 *    });
 *    await waitForApproval(buyTx);
 *
 *    // set buyTx.transactionHash to poll the status of the swap transaction
 *    setBuyWithCryptoTx(buyTx.transactionHash);
 *  }
 *
 *  return <button onClick={handleBuyWithCrypto}>Swap</button>
 * }
 * ```
 * @buyCrypto
 */
function useBuyWithCryptoQuote(params, queryParams) {
    return (0,useQuery/* useQuery */.a)({
        ...queryParams,
        queryKey: ["buyWithCryptoQuote", params],
        queryFn: () => {
            if (!params) {
                throw new Error("Swap params are required");
            }
            return (0,getQuote/* getBuyWithCryptoQuote */.D)(params);
        },
        enabled: !!params,
        retry(failureCount, error) {
            if (failureCount > 3) {
                return false;
            }
            try {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                if (error.error.code === "MINIMUM_PURCHASE_AMOUNT") {
                    return false;
                }
            }
            catch {
                return true;
            }
            return true;
        },
    });
}
//# sourceMappingURL=useBuyWithCryptoQuote.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/fetch.js + 1 modules
var fetch = __webpack_require__(99910);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/pay/utils/definitions.js
var definitions = __webpack_require__(22278);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/pay/buyWithFiat/getQuote.js
/* provided dependency */ var console = __webpack_require__(25108);


/**
 * Get a quote of type [`BuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatQuote) to buy given token with fiat currency.
 * This quote contains the information about the swap such as token amounts, processing fees, estimated time etc.
 *
 * ### Rendering the On-Ramp provider UI
 * Once you have the `quote`, you can open the `quote.onRampLink` in a new tab - This will prompt the user to buy the token with fiat currency
 *
 * ### Determining the steps required
 * If `quote.onRampToken.token` is same as `quote.toToken` ( same chain + same token address ) - This means that the token can be directly bought from the on-ramp provider.
 * But if they are different, On-ramp provider will send the `quote.onRampToken` to the user's wallet address and a swap is required to swap it to the desired token onchain.
 *
 * You can use the [`isSwapRequiredPostOnramp`](https://portal.thirdweb.com/references/typescript/v5/isSwapRequiredPostOnramp) utility function to check if a swap is required after the on-ramp is done.
 *
 * ### Polling for the status
 * Once you open the `quote.onRampLink` in a new tab, you can start polling for the status using [`getBuyWithFiatStatus`](https://portal.thirdweb.com/references/typescript/v5/getBuyWithFiatStatus) to get the status of the transaction.
 *
 * `getBuyWithFiatStatus` returns a status object of type [`BuyWithFiatStatus`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatStatus).
 *
 * - If no swap is required - the status will become `"ON_RAMP_TRANSFER_COMPLETED"` once the on-ramp provider has sent the desired token to the user's wallet address. Once you receive this status, the process is complete.
 * - If a swap is required - the status will become `"CRYPTO_SWAP_REQUIRED"` once the on-ramp provider has sent the tokens to the user's wallet address. Once you receive this status, you need to start the swap process.
 *
 * ### Swap Process
 * On receiving the `"CRYPTO_SWAP_REQUIRED"` status, you can use the [`getPostOnRampQuote`](https://portal.thirdweb.com/references/typescript/v5/getPostOnRampQuote) function to get the quote for the swap of type [`BuyWithCryptoQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithCryptoQuote).
 *
 * Once you have this quote - You can follow the same steps as mentioned in the [`getBuyWithCryptoQuote`](https://portal.thirdweb.com/references/typescript/v5/getBuyWithCryptoQuote) documentation to perform the swap.
 *
 * @param params - object of type [`GetBuyWithFiatQuoteParams`](https://portal.thirdweb.com/references/typescript/v5/GetBuyWithFiatQuoteParams)
 * @returns Object of type [`BuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatQuote) which contains the information about the quote such as processing fees, estimated time, converted token amounts, etc.
 * @example
 * Get a quote for buying 10 USDC on polygon chain (chainId: 137) with USD fiat currency:
 *
 * ```ts
 * import { getBuyWithFiatQuote } from "thirdweb/pay";
 *
 * const quote = await getBuyWithFiatQuote({
 *  client: client, // thirdweb client
 *  fromCurrencySymbol: "USD", // fiat currency symbol
 *  toChainId: 137, // polygon chain id
 *  toAmount: "10", // amount of USDC to buy
 *  toTokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359" // USDC token address in polygon chain
 *  toAddress: "0x...", // user's wallet address
 *  isTestMode: false, // whether to use onramp in test mode for testing purpose (defaults to false)
 * });
 *
 * window.open(quote.onRampLink, "_blank");
 * ```
 * @buyCrypto
 */
async function getBuyWithFiatQuote(params) {
    try {
        const clientFetch = (0,fetch/* getClientFetch */.NX)(params.client);
        const response = await clientFetch((0,definitions/* getPayBuyWithFiatQuoteEndpoint */.EW)(), {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                toAddress: params.toAddress,
                fromCurrencySymbol: params.fromCurrencySymbol,
                toChainId: params.toChainId.toString(),
                toTokenAddress: params.toTokenAddress,
                fromAmount: params.fromAmount,
                toAmount: params.toAmount,
                maxSlippageBPS: params.maxSlippageBPS,
                isTestMode: params.isTestMode,
                purchaseData: params.purchaseData,
                fromAddress: params.fromAddress,
            }),
        });
        // Assuming the response directly matches the SwapResponse interface
        if (!response.ok) {
            const errorObj = await response.json();
            if (errorObj && "error" in errorObj) {
                throw errorObj;
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json()).result;
    }
    catch (error) {
        console.error("Error getting buy with fiat quote", error);
        throw error;
    }
}
//# sourceMappingURL=getQuote.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatQuote.js


/**
 * Hook to get a price quote for performing a "Buy with Fiat" transaction that allows users to buy a token with fiat currency.
 *
 * The price quote is an object of type [`BuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatQuote).
 * This quote contains the information about the purchase such as token amounts, processing fees, estimated time etc.
 *
 * This hook is a React Query wrapper of the [`getBuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/getBuyWithFiatQuote) function.
 * You can also use that function directly
 *
 * Once you have the `quote`, you can open a new window with `quote.onRampLink` to allow the user to buy the token with fiat currency.
 * and [`useBuyWithFiatStatus`](https://portal.thirdweb.com/references/typescript/v5/useBuyWithFiatStatus) function to start polling for the status of this transaction.
 *
 * @param params - object of type [`GetBuyWithFiatQuoteParams`](https://portal.thirdweb.com/references/typescript/v5/GetBuyWithFiatQuoteParams)
 * @param queryParams - options to configure the react query
 * @returns A React Query object which contains the data of type [`BuyWithFiatQuote`](https://portal.thirdweb.com/references/typescript/v5/BuyWithFiatQuote)
 * @example
 * ```ts
 * import { NATIVE_TOKEN_ADDRESS } from "thirdweb";
 * import { base } from "thirdweb/chains";
 * import { useBuyWithFiatQuote } from "thirdweb/react";
 *
 * // get a quote for buying 0.01 base native token with USD fiat currency
 * function Example() {
 *   const quote = useBuyWithFiatQuote({
 *     client: client, // thirdweb client
 *     fromCurrencySymbol: "USD", // fiat currency symbol
 *     toChainId: base.id, // base chain id
 *     toAmount: "0.01", // amount of token to buy
 *     toTokenAddress: NATIVE_TOKEN_ADDRESS, // native token
 *     toAddress: "0x...", // user's wallet address
 *   });
 *
 *   return (
 *     <div>
 *       {quote.data && (
 *         <a href={quote.data.onRampLink} target="_blank">
 *           open onramp provider
 *         </a>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 * @buyCrypto
 */
function useBuyWithFiatQuote(params, queryOptions) {
    return (0,useQuery/* useQuery */.a)({
        ...queryOptions,
        queryKey: ["useBuyWithFiatQuote", params],
        queryFn: async () => {
            if (!params) {
                throw new Error("No params provided");
            }
            return getBuyWithFiatQuote(params);
        },
        enabled: !!params,
        retry(failureCount, error) {
            if (failureCount > 3) {
                return false;
            }
            try {
                // biome-ignore lint/suspicious/noExplicitAny: <explanation>
                if (error.error.code === "MINIMUM_PURCHASE_AMOUNT") {
                    return false;
                }
            }
            catch {
                return true;
            }
            return true;
        },
    });
}
//# sourceMappingURL=useBuyWithFiatQuote.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveAccount.js
var useActiveAccount = __webpack_require__(31330);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingScreen.js
var LoadingScreen = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/ChainName.js
var ChainName = __webpack_require__(36176);
// EXTERNAL MODULE: ./node_modules/thirdweb/node_modules/@emotion/react/dist/emotion-react.esm.js
var emotion_react_esm = __webpack_require__(26065);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/design-system/CustomThemeProvider.js
var CustomThemeProvider = __webpack_require__(51964);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/design-system/animations.js
var animations = __webpack_require__(8985);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/design-system/elements.js
var design_system_elements = __webpack_require__(44581);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/DynamicHeight.js
var DynamicHeight = __webpack_require__(4933);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Modal.js + 27 modules
var Modal = __webpack_require__(60680);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/basic.js
var basic = __webpack_require__(20070);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/buttons.js
var buttons = __webpack_require__(69538);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Drawer.js
"use client";












/**
 *
 * @internal
 */
const Drawer = /* @__PURE__ */ (0,react.forwardRef)(function Drawer_(props, ref) {
    return ((0,jsx_runtime.jsx)(DrawerContainer, { ref: ref, children: (0,jsx_runtime.jsx)(DynamicHeight/* DynamicHeight */.H, { children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(Modal/* CrossContainer */.d, { children: (0,jsx_runtime.jsx)(buttons/* IconButton */.hU, { type: "button", "aria-label": "Close", onClick: props.close, children: (0,jsx_runtime.jsx)(react_icons_esm/* Cross2Icon */.Pxu, { width: design_system/* iconSize */.EA.md, height: design_system/* iconSize */.EA.md, style: {
                                    color: "inherit",
                                } }) }) }), props.children] }) }) }));
});
const DrawerContainer = /* @__PURE__ */ (0,design_system_elements/* StyledDiv */.lx)((_) => {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    return {
        zIndex: 10000,
        borderTopLeftRadius: design_system/* radius */.q0.xl,
        borderTopRightRadius: design_system/* radius */.q0.xl,
        background: theme.colors.modalBg,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        animation: `${drawerOpenAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.1)`,
        borderTop: `1px solid ${theme.colors.borderColor}`,
    };
});
const drawerOpenAnimation = (0,emotion_react_esm/* keyframes */.F4) `
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const DrawerOverlay = /* @__PURE__ */ (0,design_system_elements/* StyledDiv */.lx)((_) => {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    return {
        backgroundColor: theme.colors.modalOverlayBg,
        zIndex: 9999,
        position: "absolute",
        inset: 0,
        animation: `${animations/* fadeInAnimation */.BX} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    };
});
/**
 *
 * @internal
 */
function useDrawer() {
    const [isOpen, _setIsOpen] = (0,react.useState)(false);
    const drawerRef = (0,react.useRef)(null);
    const drawerOverlayRef = (0,react.useRef)(null);
    const closeDrawerAnimation = (0,react.useCallback)(() => {
        return new Promise((resolve) => {
            if (drawerRef.current) {
                const animOptions = {
                    easing: "cubic-bezier(0.175, 0.885, 0.32, 1.1)",
                    fill: "forwards",
                    duration: 300,
                };
                const closeAnimation = drawerRef.current.animate([{ transform: "translateY(100%)", opacity: 0 }], animOptions);
                drawerOverlayRef.current?.animate([{ opacity: 0 }], animOptions);
                closeAnimation.onfinish = () => resolve();
            }
            else {
                resolve();
            }
        });
    }, []);
    const setIsOpen = (0,react.useCallback)(async (value) => {
        if (value) {
            _setIsOpen(true);
        }
        else {
            await closeDrawerAnimation();
            _setIsOpen(false);
        }
    }, [closeDrawerAnimation]);
    // close on outside click
    (0,react.useLayoutEffect)(() => {
        if (!isOpen) {
            return;
        }
        const handleClick = (event) => {
            if (drawerRef.current &&
                event.target instanceof Node &&
                !drawerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // avoid listening to the click event that opened the drawer by adding a frame delay
        requestAnimationFrame(() => {
            document.addEventListener("click", handleClick);
        });
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [isOpen, setIsOpen]);
    return {
        drawerRef,
        drawerOverlayRef,
        setIsOpen,
        isOpen,
    };
}
//# sourceMappingURL=Drawer.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Spacer.js
var Spacer = __webpack_require__(57654);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Spinner.js
var Spinner = __webpack_require__(67544);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/SwitchNetwork.js
var SwitchNetwork = __webpack_require__(31143);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/text.js
var components_text = __webpack_require__(15794);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/token/TokenSymbol.js
var TokenSymbol = __webpack_require__(26617);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/ConnectButton.js + 78 modules
var ConnectButton = __webpack_require__(91864);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/NetworkSelector.js
var NetworkSelector = __webpack_require__(25908);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/CoinsIcon.js
var CoinsIcon = __webpack_require__(48754);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/TokenSelector.js + 2 modules
var TokenSelector = __webpack_require__(80449);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/WalletSwitcherConnectionScreen.js
var WalletSwitcherConnectionScreen = __webpack_require__(82742);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/nativeToken.js
var nativeToken = __webpack_require__(91422);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/contract/contract.js
var contract = __webpack_require__(57621);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/read/decimals.js
var decimals = __webpack_require__(12716);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/units.js
var units = __webpack_require__(98189);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/others/useChainQuery.js + 1 modules
var useChainQuery = __webpack_require__(91650);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWallet.js
var useActiveWallet = __webpack_require__(65258);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/utils/wallet.js + 6 modules
var utils_wallet = __webpack_require__(4527);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/ChainIcon.js
var ChainIcon = __webpack_require__(35107);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Img.js
var Img = __webpack_require__(14514);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/TokenIcon.js
var TokenIcon = __webpack_require__(32724);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/WalletImage.js
var WalletImage = __webpack_require__(50480);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/DirectPaymentModeScreen.js
























function DirectPaymentModeScreen(props) {
    const { payUiOptions, supportedDestinations, client, onContinue, payerAccount, } = props;
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    const activeWallet = (0,useActiveWallet/* useActiveWallet */.r)();
    const metadata = payUiOptions.metadata;
    const paymentInfo = payUiOptions.paymentInfo;
    const { data: chainData } = (0,useChainQuery/* useChainMetadata */.SG)(paymentInfo.chain);
    const { data: sellerEns } = (0,utils_wallet/* useEnsName */.F6)({
        client,
        address: paymentInfo.sellerAddress,
    });
    const totalCostQuery = (0,useQuery/* useQuery */.a)({
        queryKey: ["amount", paymentInfo],
        queryFn: async () => {
            let tokenDecimals = 18;
            if (paymentInfo.token && !(0,nativeToken/* isNativeToken */.M)(paymentInfo.token)) {
                tokenDecimals = await (0,decimals.decimals)({
                    contract: (0,contract/* getContract */.u)({
                        address: paymentInfo.token.address,
                        chain: paymentInfo.chain,
                        client,
                    }),
                });
            }
            let cost;
            if ("amountWei" in paymentInfo) {
                cost = (0,units/* toTokens */.bb)(paymentInfo.amountWei, tokenDecimals);
            }
            else {
                cost = paymentInfo.amount;
            }
            return cost;
        },
    });
    const totalCost = totalCostQuery.data;
    if (!chainData || totalCost === undefined) {
        return (0,jsx_runtime.jsx)(LoadingScreen/* LoadingScreen */.a, {});
    }
    const token = paymentInfo.token
        ? {
            ...paymentInfo.token,
            icon: paymentInfo.token?.icon ||
                supportedDestinations
                    .find((c) => c.chain.id === paymentInfo.chain.id)
                    ?.tokens.find((t) => t.address.toLowerCase() ===
                    paymentInfo.token?.address.toLowerCase())?.icon,
        }
        : {
            address: addresses/* NATIVE_TOKEN_ADDRESS */.K8,
            name: chainData.nativeCurrency.name,
            symbol: chainData.nativeCurrency.symbol,
            icon: chainData.icon?.url,
        };
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: metadata?.name || "Payment Details" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [metadata?.image ? ((0,jsx_runtime.jsx)(Img/* Img */.E, { client: client, src: metadata?.image, style: {
                            width: "100%",
                            borderRadius: design_system/* spacing */.W0.md,
                            backgroundColor: theme.colors.tertiaryBg,
                        } })) : activeWallet ? ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "both", style: {
                            padding: design_system/* spacing */.W0.md,
                            marginBottom: design_system/* spacing */.W0.md,
                            borderRadius: design_system/* spacing */.W0.md,
                            backgroundColor: theme.colors.tertiaryBg,
                        }, children: [(0,jsx_runtime.jsx)(WalletImage/* WalletImage */._, { size: design_system/* iconSize */.EA.xl, id: activeWallet.id, client: client }), (0,jsx_runtime.jsx)("div", { style: {
                                    flexGrow: 1,
                                    borderBottom: "6px dotted",
                                    borderColor: theme.colors.secondaryIconColor,
                                    marginLeft: design_system/* spacing */.W0.md,
                                    marginRight: design_system/* spacing */.W0.md,
                                } }), (0,jsx_runtime.jsx)(ChainIcon/* ChainIcon */.f, { client: client, size: design_system/* iconSize */.EA.xl, chainIconUrl: chainData.icon?.url })] })) : null, (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "md", color: "primaryText", weight: 700, children: "Price" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, { chain: paymentInfo.chain, client: props.client, size: "sm", token: token }), (0,jsx_runtime.jsxs)(components_text/* Text */.x, { color: "primaryText", size: "md", weight: 700, children: [String((0,formatNumber/* formatNumber */.u)(Number(totalCost), 6)), " ", token.symbol] })] }) })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: "Network" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0,jsx_runtime.jsx)(ChainIcon/* ChainIcon */.f, { chainIconUrl: chainData.icon?.url, size: "xs", client: props.client }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: chainData.name })] }) })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: "Seller" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: sellerEns || (0,utils_address/* shortenAddress */.Xn)(paymentInfo.sellerAddress) }) }) })] })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), payerAccount ? ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, onClick: () => {
                    onContinue(totalCost, paymentInfo.chain, token);
                }, children: "Choose Payment Method" })) : ((0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)(ConnectButton/* ConnectButton */.N, { ...props.connectOptions, client: client, theme: theme, connectButton: {
                        style: {
                            width: "100%",
                        },
                    } }) }))] }));
}
//# sourceMappingURL=DirectPaymentModeScreen.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Skeleton.js
var Skeleton = __webpack_require__(86875);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/formatSeconds.js
var formatSeconds = __webpack_require__(37417);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/EstimatedTimeAndFees.js








function EstimatedTimeAndFees(props) {
    const { estimatedSeconds, quoteIsLoading } = props;
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { bg: "tertiaryBg", flex: "row", borderColor: "borderColor", style: {
            borderRadius: design_system/* radius */.q0.md,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            justifyContent: "space-between",
            alignItems: "center",
            borderWidth: "1px",
            borderStyle: "solid",
        }, children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", gap: "xxs", color: "accentText", p: "sm", children: [(0,jsx_runtime.jsx)(react_icons_esm/* ClockIcon */.T39, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm }), quoteIsLoading ? ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { height: design_system/* fontSize */.JB.xs, width: "50px", color: "borderColor" })) : ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: estimatedSeconds !== undefined
                            ? `~${(0,formatSeconds/* formatSeconds */.Z)(estimatedSeconds)}`
                            : "--" }))] }), (0,jsx_runtime.jsxs)(buttons/* Button */.zx, { variant: "ghost", onClick: props.onViewFees, gap: "xs", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { color: "accentText", flex: "row", center: "both", children: (0,jsx_runtime.jsx)(ViewFeeIcon, { size: design_system/* iconSize */.EA.sm }) }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: "View Fees" })] })] }));
}
const ViewFeeIcon = (props) => {
    return ((0,jsx_runtime.jsxs)("svg", { width: props.size, height: props.size, viewBox: "0 0 12 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [(0,jsx_runtime.jsx)("path", { d: "M9.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V9.5C1.5 10.0523 1.94772 10.5 2.5 10.5H9.5C10.0523 10.5 10.5 10.0523 10.5 9.5V2.5C10.5 1.94772 10.0523 1.5 9.5 1.5Z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }), (0,jsx_runtime.jsx)("path", { d: "M4.5 7.5L7.5 4.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
//# sourceMappingURL=EstimatedTimeAndFees.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayTokenIcon.js
var PayTokenIcon = __webpack_require__(93398);
// EXTERNAL MODULE: ./node_modules/thirdweb/node_modules/@emotion/styled/dist/emotion-styled.esm.js + 3 modules
var emotion_styled_esm = __webpack_require__(73834);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/PayWIthCreditCard.js









/**
 * Shows an amount "value" and renders the selected token and chain
 * It also renders the buttons to select the token and chain
 * It also renders the balance of active wallet for the selected token in selected chain
 * @internal
 */
function PayWithCreditCard(props) {
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
            borderRadius: design_system/* radius */.q0.md,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderWidth: "1px",
            borderStyle: "solid",
            borderBottom: "none",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            alignItems: "center",
        }, children: [(0,jsx_runtime.jsxs)(CurrencyButton, { variant: "ghost", onClick: props.onSelectCurrency, style: {
                    minHeight: "64px",
                    justifyContent: "flex-start",
                    minWidth: "50%",
                }, gap: "sm", children: [(0,jsx_runtime.jsx)(props.currency.icon, { size: design_system/* iconSize */.EA.md }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", gap: "xxs", color: "secondaryText", children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", children: props.currency.shorthand }), (0,jsx_runtime.jsx)(react_icons_esm/* ChevronDownIcon */.v4q, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm })] })] }), (0,jsx_runtime.jsx)("div", { style: {
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: design_system/* spacing */.W0.xxs,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    paddingRight: design_system/* spacing */.W0.sm,
                }, children: props.isLoading ? ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { width: "100px", height: design_system/* fontSize */.JB.lg })) : ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "lg", color: props.value ? "primaryText" : "secondaryText", children: props.value ? `${(0,formatNumber/* formatNumber */.u)(Number(props.value), 6)}` : "--" })) })] }));
}
const CurrencyButton = /* @__PURE__ */ (0,emotion_styled_esm/* default */.Z)(buttons/* Button */.zx)(() => {
    return {
        "&[disabled]:hover": {
            borderColor: "transparent",
        },
    };
});
//# sourceMappingURL=PayWIthCreditCard.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/chains/utils.js
var utils = __webpack_require__(95810);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/read/getCurrencyMetadata.js + 4 modules
var getCurrencyMetadata = __webpack_require__(38430);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/gas/get-gas-price.js + 1 modules
var get_gas_price = __webpack_require__(33910);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/encode.js
var encode = __webpack_require__(11692);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/base-sepolia.js

/**
 * @chain
 */
const baseSepolia = /* @__PURE__ */ (0,utils/* defineChain */.ax)({
    id: 84532,
    name: "Base Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
    blockExplorers: [
        {
            name: "Basescan",
            url: "https://sepolia.basescan.org",
            apiUrl: "https://api-sepolia.basescan.org/api",
        },
    ],
    testnet: true,
});
//# sourceMappingURL=base-sepolia.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/base.js

/**
 * @chain
 */
const base = /* @__PURE__ */ (0,utils/* defineChain */.ax)({
    id: 8453,
    name: "Base",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    blockExplorers: [
        {
            name: "Basescan",
            url: "https://basescan.org",
            apiUrl: "https://api.basescan.org/api",
        },
    ],
});
//# sourceMappingURL=base.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism-sepolia.js

/**
 * @chain
 */
const optimismSepolia = /* @__PURE__ */ (0,utils/* defineChain */.ax)({
    id: 11155420,
    name: "OP Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
    blockExplorers: [
        {
            name: "Blockscout",
            url: "https://optimism-sepolia.blockscout.com",
            apiUrl: "https://optimism-sepolia.blockscout.com/api",
        },
    ],
    testnet: true,
});
//# sourceMappingURL=optimism-sepolia.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism.js

/**
 * @chain
 */
const optimism = /* @__PURE__ */ (0,utils/* defineChain */.ax)({
    id: 10,
    name: "OP Mainnet",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    blockExplorers: [
        {
            name: "Optimism Explorer",
            url: "https://optimistic.etherscan.io",
            apiUrl: "https://api-optimistic.etherscan.io",
        },
    ],
});
//# sourceMappingURL=optimism.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/zora-sepolia.js

/**
 * @chain
 */
const zoraSepolia = /*@__PURE__*/ (0,utils/* defineChain */.ax)({
    id: 999999999,
    name: "Zora Sepolia",
    nativeCurrency: {
        decimals: 18,
        name: "Zora Sepolia",
        symbol: "ETH",
    },
    blockExplorers: [
        {
            name: "Zora Sepolia Explorer",
            url: "https://sepolia.explorer.zora.energy/",
            apiUrl: "https://sepolia.explorer.zora.energy/api",
        },
    ],
    testnet: true,
});
//# sourceMappingURL=zora-sepolia.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/zora.js

/**
 * @chain
 */
const zora = /*@__PURE__*/ (0,utils/* defineChain */.ax)({
    id: 7777777,
    name: "Zora",
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH",
    },
    blockExplorers: [
        {
            name: "Explorer",
            url: "https://explorer.zora.energy",
            apiUrl: "https://explorer.zora.energy/api",
        },
    ],
});
//# sourceMappingURL=zora.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/constants.js






const opChains = [
    base.id,
    baseSepolia.id,
    optimism.id,
    optimismSepolia.id,
    zora.id,
    zoraSepolia.id,
    34443, // mode
    919, // mode testnet
    42220, // celo
    44787, // celo testnet
    204, // opBNB
    5611, // opBNB testnet
];
/**
 * TODO this should be in the chain definition itself
 * @internal
 */
function isOpStackChain(chain) {
    return opChains.includes(chain.id);
}
//# sourceMappingURL=constants.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/promise/resolve-promised-value.js
var resolve_promised_value = __webpack_require__(83159);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/estimate-gas.js + 14 modules
var estimate_gas = __webpack_require__(65780);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/estimate-gas-cost.js





/**
 * Estimate the gas cost of a transaction in ether and wei.
 * @example
 * ```ts
 * import { estimateGasCost } from "thirdweb";
 *
 * const gasCost = await estimateGasCost({ transaction });
 * ```
 * @transaction
 */
async function estimateGasCost(options) {
    const { transaction } = options;
    const from = options.from ?? options.account?.address ?? undefined;
    const gasLimit = (await (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.gas)) ||
        (await (0,estimate_gas/* estimateGas */.Q)({ transaction, from }));
    const gasPrice = await (0,get_gas_price/* getGasPrice */.o)({
        client: transaction.client,
        chain: transaction.chain,
    });
    let l1Fee;
    if (isOpStackChain(transaction.chain)) {
        const { estimateL1Fee } = await __webpack_require__.e(/* import() */ 8469).then(__webpack_require__.bind(__webpack_require__, 8469));
        l1Fee = await estimateL1Fee({
            transaction,
        });
    }
    else {
        l1Fee = 0n;
    }
    const wei = gasLimit * gasPrice + l1Fee;
    return {
        ether: (0,units/* toEther */.n9)(wei),
        wei,
    };
}
//# sourceMappingURL=estimate-gas-cost.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/utils/getWalletBalance.js
var getWalletBalance = __webpack_require__(88264);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useBuyTxStates.js











function useTransactionCostAndData(args) {
    const { transaction, account, supportedDestinations } = args;
    // Compute query key of the transaction first
    const [txQueryKey, setTxQueryKey] = (0,react.useState)();
    (0,react.useEffect)(() => {
        Promise.all([
            (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.value),
            (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.erc20Value),
            (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.to),
            (0,encode.encode)(transaction),
        ]).then(([value, erc20Value, to, data]) => {
            setTxQueryKey({
                value: value?.toString(),
                erc20Value: erc20Value?.amountWei?.toString(),
                erc20Currency: erc20Value?.tokenAddress,
                to,
                data,
            });
        });
    }, [transaction]);
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            "transaction-cost",
            transaction.chain.id,
            account?.address,
            txQueryKey,
        ],
        queryFn: async () => {
            if (!account) {
                throw new Error("No account");
            }
            const erc20Value = await (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.erc20Value);
            if (erc20Value) {
                const [tokenBalance, tokenMeta, gasCostWei] = await Promise.all([
                    (0,getWalletBalance/* getWalletBalance */.p)({
                        address: account.address,
                        chain: transaction.chain,
                        client: transaction.client,
                        tokenAddress: erc20Value.tokenAddress,
                    }),
                    (0,getCurrencyMetadata.getCurrencyMetadata)({
                        contract: (0,contract/* getContract */.u)({
                            address: erc20Value.tokenAddress,
                            chain: transaction.chain,
                            client: transaction.client,
                        }),
                    }),
                    getTransactionGasCost(transaction, account?.address),
                ]);
                const transactionValueWei = erc20Value.amountWei;
                const walletBalance = tokenBalance;
                const currency = {
                    address: erc20Value.tokenAddress,
                    name: tokenMeta.name,
                    symbol: tokenMeta.symbol,
                    icon: supportedDestinations
                        .find((c) => c.chain.id === transaction.chain.id)
                        ?.tokens.find((t) => t.address.toLowerCase() ===
                        erc20Value.tokenAddress.toLowerCase())?.icon,
                };
                return {
                    token: currency,
                    decimals: tokenMeta.decimals,
                    walletBalance,
                    gasCostWei,
                    transactionValueWei,
                };
            }
            const [nativeWalletBalance, chainMetadata, gasCostWei] = await Promise.all([
                (0,getWalletBalance/* getWalletBalance */.p)({
                    address: account.address,
                    chain: transaction.chain,
                    client: transaction.client,
                }),
                (0,utils/* getChainMetadata */.ZN)(transaction.chain),
                getTransactionGasCost(transaction, account?.address),
            ]);
            const walletBalance = nativeWalletBalance;
            const transactionValueWei = (await (0,resolve_promised_value/* resolvePromisedValue */.q)(transaction.value)) || 0n;
            return {
                token: {
                    address: addresses/* NATIVE_TOKEN_ADDRESS */.K8,
                    name: chainMetadata.nativeCurrency.name,
                    symbol: chainMetadata.nativeCurrency.symbol,
                    icon: chainMetadata.icon?.url,
                },
                decimals: 18,
                walletBalance,
                gasCostWei,
                transactionValueWei,
            };
        },
        enabled: !!transaction && !!account && !!txQueryKey,
        refetchInterval: () => {
            if (transaction.erc20Value) {
                // if erc20 value is set, we don't need to poll
                return undefined;
            }
            return 30_000;
        },
    });
}
async function getTransactionGasCost(tx, from) {
    try {
        const gasCost = await estimateGasCost({
            transaction: tx,
            from,
        });
        const bufferCost = gasCost.wei / 10n;
        // Note: get tx.value AFTER estimateGasCost
        // add 10% extra gas cost to the estimate to ensure user buys enough to cover the tx cost
        return gasCost.wei + bufferCost;
    }
    catch (e) {
        if (from) {
            // try again without passing from
            return await getTransactionGasCost(tx);
        }
        // fallback if both fail, use the tx value + 2M * gas price
        const gasPrice = await (0,get_gas_price/* getGasPrice */.o)({
            client: tx.client,
            chain: tx.chain,
        });
        return 2000000n * gasPrice;
    }
}
//# sourceMappingURL=useBuyTxStates.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/TransactionModeScreen.js




















function TransactionModeScreen(props) {
    const { payUiOptions, client, payerAccount, supportedDestinations, onContinue, } = props;
    const { data: chainData } = (0,useChainQuery/* useChainMetadata */.SG)(payUiOptions.transaction.chain);
    const metadata = payUiOptions.metadata;
    const { data: transactionCostAndData } = useTransactionCostAndData({
        transaction: payUiOptions.transaction,
        account: payerAccount,
        supportedDestinations,
    });
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    const activeWallet = (0,useActiveWallet/* useActiveWallet */.r)();
    const sponsoredTransactionsEnabled = (0,utils_wallet/* hasSponsoredTransactionsEnabled */.GS)(activeWallet);
    if (!transactionCostAndData || !chainData) {
        return (0,jsx_runtime.jsx)(LoadingScreen/* LoadingScreen */.a, {});
    }
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: metadata?.name || "Transaction" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [metadata?.image ? ((0,jsx_runtime.jsx)(Img/* Img */.E, { client: client, src: metadata?.image, style: {
                            width: "100%",
                            borderRadius: design_system/* spacing */.W0.md,
                            backgroundColor: theme.colors.tertiaryBg,
                        } })) : activeWallet ? ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "both", style: {
                            padding: design_system/* spacing */.W0.md,
                            marginBottom: design_system/* spacing */.W0.md,
                            borderRadius: design_system/* spacing */.W0.md,
                            backgroundColor: theme.colors.tertiaryBg,
                        }, children: [(0,jsx_runtime.jsx)(WalletImage/* WalletImage */._, { size: design_system/* iconSize */.EA.xl, id: activeWallet.id, client: client }), (0,jsx_runtime.jsx)("div", { style: {
                                    flexGrow: 1,
                                    borderBottom: "6px dotted",
                                    borderColor: theme.colors.secondaryIconColor,
                                    marginLeft: design_system/* spacing */.W0.md,
                                    marginRight: design_system/* spacing */.W0.md,
                                } }), (0,jsx_runtime.jsx)(ChainIcon/* ChainIcon */.f, { client: client, size: design_system/* iconSize */.EA.xl, chainIconUrl: chainData.icon?.url })] })) : null, (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "md", color: "primaryText", weight: 700, children: "Price" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, { chain: payUiOptions.transaction.chain, client: props.client, size: "sm", token: transactionCostAndData.token }), (0,jsx_runtime.jsxs)(components_text/* Text */.x, { color: "primaryText", size: "md", weight: 700, children: [String((0,formatNumber/* formatNumber */.u)(Number((0,units/* toTokens */.bb)(transactionCostAndData.transactionValueWei, transactionCostAndData.decimals)), 6)), " ", transactionCostAndData.token.symbol] })] }) })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: "Gas Fees" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: sponsoredTransactionsEnabled ? "success" : "primaryText", size: "xs", children: sponsoredTransactionsEnabled
                                            ? "Sponsored"
                                            : `${String((0,formatNumber/* formatNumber */.u)(Number((0,units/* toTokens */.bb)(transactionCostAndData.gasCostWei, chainData.nativeCurrency.decimals)), 6))} ${chainData.nativeCurrency.symbol}` }) }) })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", expand: true, children: (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: "Network" }) }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", style: { justifyContent: "right" }, children: [(0,jsx_runtime.jsx)(ChainIcon/* ChainIcon */.f, { chainIconUrl: chainData.icon?.url, size: "xs", client: props.client }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", style: { textAlign: "right" }, children: chainData.name })] }) })] })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), payerAccount ? ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, onClick: () => {
                    let totalCostWei = transactionCostAndData.transactionValueWei;
                    if (transactionCostAndData.token.address === addresses/* NATIVE_TOKEN_ADDRESS */.K8 &&
                        !sponsoredTransactionsEnabled) {
                        totalCostWei += transactionCostAndData.gasCostWei;
                    }
                    onContinue((0,units/* toTokens */.bb)(totalCostWei, transactionCostAndData.decimals), payUiOptions.transaction.chain, transactionCostAndData.token);
                }, children: "Choose Payment Method" })) : ((0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)(ConnectButton/* ConnectButton */.N, { ...props.connectOptions, client: client, theme: theme, connectButton: {
                        style: {
                            width: "100%",
                        },
                    } }) }))] }));
}
//# sourceMappingURL=TransactionModeScreen.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useConnectedWallets.js
var useConnectedWallets = __webpack_require__(84730);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/SmartAccountBadgeIcon.js
var SmartAccountBadgeIcon = __webpack_require__(44463);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/WalletSelectorButton.js













function WalletSelectorButton(props) {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    return ((0,jsx_runtime.jsx)(basic/* Container */.W2, { bg: "tertiaryBg", style: {
            borderRadius: design_system/* radius */.q0.lg,
            border: `1px solid ${theme.colors.borderColor}`,
            ...props.containerStyle,
        }, children: (0,jsx_runtime.jsxs)(buttons/* Button */.zx, { fullWidth: true, disabled: props.disabled, onClick: props.onClick, variant: "ghost", style: {
                justifyContent: "space-between",
                padding: design_system/* spacing */.W0.sm,
                backgroundColor: theme.colors.tertiaryBg,
            }, gap: "sm", children: [(0,jsx_runtime.jsx)(WalletRow, { client: props.client, address: props.address }), !props.disableChevron && ((0,jsx_runtime.jsx)(react_icons_esm/* ChevronDownIcon */.v4q, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm, style: {
                        color: theme.colors.secondaryText,
                    } })), props.checked && ((0,jsx_runtime.jsx)(react_icons_esm/* CheckIcon */.nQG, { width: design_system/* iconSize */.EA.md, height: design_system/* iconSize */.EA.md }))] }) }));
}
function WalletRow(props) {
    const { client, address } = props;
    const connectedWallets = (0,useConnectedWallets/* useConnectedWallets */.f)();
    const wallet = connectedWallets.find((x) => x.getAccount()?.address === props.address);
    const walletId = props.walletId || wallet?.id;
    const ensNameQuery = (0,utils_wallet/* useEnsName */.F6)({
        client,
        address,
    });
    const addressOrENS = ensNameQuery.data || (0,utils_address/* shortenAddress */.Xn)(address);
    const ensAvatarQuery = (0,utils_wallet/* useEnsAvatar */.c9)({
        client,
        ensName: ensNameQuery.data,
    });
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", gap: "sm", color: "secondaryText", children: [ensAvatarQuery.data ? ((0,jsx_runtime.jsx)(Img/* Img */.E, { src: ensAvatarQuery.data, width: design_system/* iconSize */.EA.md, height: design_system/* iconSize */.EA.md, style: {
                    borderRadius: design_system/* radius */.q0.sm,
                }, client: props.client })) : walletId ? ((0,jsx_runtime.jsx)(WalletImage/* WalletImage */._, { id: walletId, size: design_system/* iconSize */.EA.md, client: props.client })) : null, (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", color: "primaryText", children: addressOrENS || (0,utils_address/* shortenAddress */.Xn)(props.address) }), walletId === "smart" && ((0,jsx_runtime.jsx)(basic/* Container */.W2, { color: "accentText", center: "both", children: (0,jsx_runtime.jsx)(SmartAccountBadgeIcon/* SmartWalletBadgeIcon */.G, { size: design_system/* iconSize */.EA.sm }) }))] }));
}
//# sourceMappingURL=WalletSelectorButton.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/currencies.js + 4 modules
var currencies = __webpack_require__(32762);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/CurrencySelection.js









function CurrencySelection(props) {
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { p: "lg", children: (0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: "Pay with", onBack: props.onBack }) }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", gap: "xs", px: "lg", children: currencies/* currencies */.QT.map((c) => {
                    return ((0,jsx_runtime.jsxs)(SelectCurrencyButton, { fullWidth: true, variant: "secondary", onClick: () => props.onSelect(c), gap: "sm", children: [(0,jsx_runtime.jsx)(c.icon, { size: design_system/* iconSize */.EA.lg }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "xxs", children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", children: c.shorthand }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", children: c.name })] })] }, c.shorthand));
                }) }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" })] }));
}
const SelectCurrencyButton = /* @__PURE__ */ (0,emotion_styled_esm/* default */.Z)(buttons/* Button */.zx)(() => {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    return {
        background: theme.colors.tertiaryBg,
        justifyContent: "flex-start",
        gap: design_system/* spacing */.W0.sm,
        padding: design_system/* spacing */.W0.sm,
        "&:hover": {
            background: theme.colors.secondaryButtonBg,
            transform: "scale(1.01)",
        },
        transition: "background 200ms ease, transform 150ms ease",
    };
});
//# sourceMappingURL=CurrencySelection.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/openOnRamppopup.js
function openOnrampPopup(link, theme) {
    const height = 750;
    const width = 500;
    const top = (window.innerHeight - height) / 2;
    const left = (window.innerWidth - width) / 2;
    return window.open(`${link}&theme=${theme}`, "thirdweb Pay", `width=${width}, height=${height}, top=${top}, left=${left}`);
}
//# sourceMappingURL=openOnRamppopup.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/pendingSwapTx.js
var pendingSwapTx = __webpack_require__(52891);
// EXTERNAL MODULE: ./node_modules/thirdweb/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(48454);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/web/isMobile.js
var isMobile = __webpack_require__(66229);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/pay/useBuyWithFiatStatus.js
var useBuyWithFiatStatus = __webpack_require__(9430);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/providers/invalidateWalletBalance.js
var invalidateWalletBalance = __webpack_require__(10378);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/StepBar.js
var StepBar = __webpack_require__(81011);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/AccentFailIcon.js
var AccentFailIcon = __webpack_require__(54405);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/statusMeta.js
var pay_transactions_statusMeta = __webpack_require__(19305);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatTxDetailsTable.js
var FiatTxDetailsTable = __webpack_require__(71307);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatStatusScreen.js

















/**
 * Poll for "Buy with Fiat" status - when the on-ramp is in progress
 * - Show success screen if swap is not required and on-ramp is completed
 * - Show Failed screen if on-ramp failed
 * - call `onShowSwapFlow` if on-ramp is completed and swap is required
 */
function OnrampStatusScreen(props) {
    const queryClient = (0,QueryClientProvider/* useQueryClient */.NL)();
    const { openedWindow } = props;
    const statusQuery = (0,useBuyWithFiatStatus/* useBuyWithFiatStatus */.s)({
        intentId: props.intentId,
        client: props.client,
    });
    // determine UI status
    let uiStatus = "loading";
    if (statusQuery.data?.status === "ON_RAMP_TRANSFER_FAILED" ||
        statusQuery.data?.status === "PAYMENT_FAILED") {
        uiStatus = "failed";
    }
    else if (statusQuery.data?.status === "CRYPTO_SWAP_FALLBACK") {
        uiStatus = "partialSuccess";
    }
    else if (statusQuery.data?.status === "ON_RAMP_TRANSFER_COMPLETED") {
        uiStatus = "completed";
    }
    // close the onramp popup if onramp is completed
    (0,react.useEffect)(() => {
        if (!openedWindow || !statusQuery.data) {
            return;
        }
        if (statusQuery.data?.status === "CRYPTO_SWAP_REQUIRED" ||
            statusQuery.data?.status === "ON_RAMP_TRANSFER_COMPLETED") {
            openedWindow.close();
        }
    }, [statusQuery.data, openedWindow]);
    // invalidate wallet balance when onramp is completed
    const invalidatedBalance = (0,react.useRef)(false);
    (0,react.useEffect)(() => {
        if (!invalidatedBalance.current &&
            statusQuery.data?.status === "ON_RAMP_TRANSFER_COMPLETED") {
            invalidatedBalance.current = true;
            (0,invalidateWalletBalance/* invalidateWalletBalance */.K)(queryClient);
        }
    }, [statusQuery.data, queryClient]);
    // show swap flow
    (0,react.useEffect)(() => {
        if (statusQuery.data?.status === "CRYPTO_SWAP_REQUIRED") {
            props.onShowSwapFlow(statusQuery.data);
        }
    }, [statusQuery.data, props.onShowSwapFlow]);
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: props.title, onBack: props.onBack }), props.hasTwoSteps && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(StepBar/* StepBar */.E, { steps: 2, currentStep: 1 }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsxs)(components_text/* Text */.x, { size: "xs", children: ["Step 1 of 2 - Buying ", props.quote.onRampToken.token.symbol, " with", " ", props.quote.fromCurrencyWithFees.currencySymbol] })] })), (0,jsx_runtime.jsx)(OnrampStatusScreenUI, { uiStatus: uiStatus, onDone: props.onDone, fiatStatus: statusQuery.data, client: props.client, transactionMode: props.transactionMode, quote: props.quote, isEmbed: props.isEmbed })] }));
}
function OnrampStatusScreenUI(props) {
    const { uiStatus } = props;
    const statusMeta = props.fiatStatus
        ? (0,pay_transactions_statusMeta/* getBuyWithFiatStatusMeta */.B)(props.fiatStatus)
        : undefined;
    const fiatStatus = props.fiatStatus && props.fiatStatus.status !== "NOT_FOUND"
        ? props.fiatStatus
        : undefined;
    const onRampTokenQuote = props.quote.onRampToken;
    const txDetails = ((0,jsx_runtime.jsx)(FiatTxDetailsTable/* OnRampTxDetailsTable */.s, { client: props.client, token: fiatStatus?.source // source tx is onRamp token
            ? {
                chainId: fiatStatus.source.token.chainId,
                address: fiatStatus.source.token.tokenAddress,
                symbol: fiatStatus.source.token.symbol || "",
                amount: fiatStatus.source.amount,
            }
            : {
                chainId: onRampTokenQuote.token.chainId,
                address: onRampTokenQuote.token.tokenAddress,
                symbol: onRampTokenQuote.token.symbol,
                amount: onRampTokenQuote.amount,
            }, fiat: {
            amount: props.quote.fromCurrencyWithFees.amount,
            currencySymbol: props.quote.fromCurrencyWithFees.currencySymbol,
        }, statusMeta: fiatStatus?.source && statusMeta
            ? {
                color: statusMeta?.color,
                text: statusMeta?.status,
                txHash: fiatStatus.source.transactionHash,
            }
            : undefined }));
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), uiStatus === "loading" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", center: "x", children: (0,jsx_runtime.jsx)(Spinner/* Spinner */.$, { size: "xxl", color: "accentText" }) }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", size: "lg", center: true, children: "Buy Pending" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), !(0,isMobile/* isMobile */.tq)() && (0,jsx_runtime.jsx)(components_text/* Text */.x, { center: true, children: "Complete the purchase in popup" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xxl" }), txDetails] })), uiStatus === "failed" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", center: "x", children: (0,jsx_runtime.jsx)(AccentFailIcon/* AccentFailIcon */.E, { size: design_system/* iconSize */.EA["3xl"] }) }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", size: "lg", center: true, children: "Transaction Failed" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xxl" }), txDetails] })), uiStatus === "completed" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", center: "x", color: "success", children: (0,jsx_runtime.jsx)(react_icons_esm/* CheckCircledIcon */.NhS, { width: design_system/* iconSize */.EA["3xl"], height: design_system/* iconSize */.EA["3xl"] }) }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", size: "lg", center: true, children: "Buy Complete" }), props.fiatStatus && props.fiatStatus.status !== "NOT_FOUND" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xxl" }), txDetails, (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" })] })), !props.isEmbed && ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, onClick: props.onDone, children: props.transactionMode ? "Continue Transaction" : "Done" }))] }))] }));
}
//# sourceMappingURL=FiatStatusScreen.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatSteps.js
var FiatSteps = __webpack_require__(59545);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/PostOnRampSwapFlow.js + 2 modules
var PostOnRampSwapFlow = __webpack_require__(48401);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/fiat/FiatFlow.js








function FiatFlow(props) {
    const hasTwoSteps = isSwapRequiredPostOnramp(props.quote);
    const [screen, setScreen] = (0,react.useState)(hasTwoSteps
        ? {
            id: "step-1",
        }
        : {
            id: "onramp-status",
        });
    const [popupWindow, setPopupWindow] = (0,react.useState)(props.openedWindow);
    if (screen.id === "step-1") {
        return ((0,jsx_runtime.jsx)(FiatSteps/* FiatSteps */.a, { title: props.title, client: props.client, onBack: props.onBack, partialQuote: (0,FiatSteps/* fiatQuoteToPartialQuote */.R)(props.quote), step: 1, onContinue: () => {
                const popup = openOnrampPopup(props.quote.onRampLink, props.theme);
                (0,pendingSwapTx/* addPendingTx */.h)({
                    type: "fiat",
                    intentId: props.quote.intentId,
                });
                setPopupWindow(popup);
                setScreen({ id: "onramp-status" });
            } }));
    }
    if (screen.id === "onramp-status") {
        return ((0,jsx_runtime.jsx)(OnrampStatusScreen, { title: props.title, client: props.client, intentId: props.quote.intentId, onBack: props.onBack, hasTwoSteps: hasTwoSteps, openedWindow: popupWindow, quote: props.quote, onDone: props.onDone, onShowSwapFlow: (_status) => {
                setScreen({ id: "postonramp-swap", data: _status });
            }, transactionMode: props.transactionMode, isEmbed: props.isEmbed }));
    }
    if (screen.id === "postonramp-swap") {
        return ((0,jsx_runtime.jsx)(PostOnRampSwapFlow/* PostOnRampSwapFlow */.S, { title: props.title, status: screen.data, quote: (0,FiatSteps/* fiatQuoteToPartialQuote */.R)(props.quote), client: props.client, onBack: props.onBack, onDone: props.onDone, onSwapFlowStarted: () => {
                // no op
            }, transactionMode: props.transactionMode, isEmbed: props.isEmbed, payer: props.payer }));
    }
    // never
    return null;
}
//# sourceMappingURL=FiatFlow.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useEnabledPaymentMethods.js


function useEnabledPaymentMethods(options) {
    const { payOptions, supportedDestinations, toChain, toToken } = options;
    function getEnabledPayMethodsForSelectedToken() {
        const chain = supportedDestinations.find((c) => c.chain.id === toChain.id);
        if (!chain) {
            return {
                fiat: false,
                swap: false,
            };
        }
        const toTokenAddress = (0,nativeToken/* isNativeToken */.M)(toToken)
            ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
            : toToken.address;
        const tokenInfo = chain.tokens.find((t) => t.address.toLowerCase() === toTokenAddress.toLowerCase());
        if (!tokenInfo) {
            return {
                fiat: true,
                swap: true,
            };
        }
        return {
            fiat: tokenInfo.buyWithFiatEnabled,
            swap: tokenInfo.buyWithCryptoEnabled,
        };
    }
    const { fiat, swap } = getEnabledPayMethodsForSelectedToken();
    const buyWithFiatEnabled = payOptions.buyWithFiat !== false && fiat;
    const buyWithCryptoEnabled = payOptions.buyWithCrypto !== false && swap;
    const showPaymentSelection = buyWithFiatEnabled && buyWithCryptoEnabled;
    return {
        buyWithFiatEnabled,
        buyWithCryptoEnabled,
        showPaymentSelection,
    };
}
//# sourceMappingURL=useEnabledPaymentMethods.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/chains/chain-definitions/polygon.js

/**
 * @chain
 */
const polygon = /*@__PURE__*/ (0,utils/* defineChain */.ax)({
    id: 137,
    name: "Polygon",
    nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
    blockExplorers: [
        {
            name: "PolygonScan",
            url: "https://polygonscan.com",
            apiUrl: "https://api.polygonscan.com/api",
        },
    ],
});
//# sourceMappingURL=polygon.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/hooks/wallets/useActiveWalletChain.js
var useActiveWalletChain = __webpack_require__(92880);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/hooks/useDebouncedValue.js
var useDebouncedValue = __webpack_require__(48798);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/main/useUISelectionStates.js






// handle states for token and chain selection
function useUISelectionStates(options) {
    const activeChain = (0,useActiveWalletChain/* useActiveWalletChain */.v)();
    const { payOptions, supportedDestinations } = options;
    // buy token amount ---------------------------------------------------------
    // NOTE - for transaction / direct payment modes, the token amount is set when the user tap continue
    const prefillBuy = payOptions?.prefillBuy;
    const initialTokenAmount = prefillBuy?.amount || "";
    const [tokenAmount, setTokenAmount] = (0,react.useState)(initialTokenAmount);
    const deferredTokenAmount = (0,useDebouncedValue/* useDebouncedValue */.c)(tokenAmount, 300);
    // --------------------------------------------------------------------------
    // Destination chain and token selection -----------------------------------
    const [toChain, setToChain] = (0,react.useState)(
    // use prefill chain if available
    prefillBuy?.chain ||
        (payOptions.mode === "transaction" && payOptions.transaction?.chain) ||
        (payOptions.mode === "direct_payment" && payOptions.paymentInfo?.chain) ||
        // use active chain if its supported as destination
        supportedDestinations.find((x) => x.chain.id === activeChain?.id)
            ?.chain ||
        // default to polygon
        polygon);
    const [toToken, setToToken] = (0,react.useState)(prefillBuy?.token ||
        (payOptions.mode === "direct_payment" && payOptions.paymentInfo.token) ||
        nativeToken/* NATIVE_TOKEN */.L);
    // --------------------------------------------------------------------------
    // Source token and chain selection ---------------------------------------------------
    const [fromChain, setFromChain] = (0,react.useState)(
    // use prefill chain if available
    (payOptions.buyWithCrypto !== false &&
        payOptions.buyWithCrypto?.prefillSource?.chain) ||
        (payOptions.mode === "transaction" && payOptions.transaction?.chain) ||
        (payOptions.mode === "direct_payment" && payOptions.paymentInfo?.chain) ||
        // default to polygon
        polygon);
    const [fromToken, setFromToken] = (0,react.useState)(
    // use prefill token if available
    (payOptions.buyWithCrypto !== false &&
        payOptions.buyWithCrypto?.prefillSource?.token) ||
        (payOptions.mode === "direct_payment" && payOptions.paymentInfo.token) ||
        // default to native token
        nativeToken/* NATIVE_TOKEN */.L);
    // --------------------------------------------------------------------------
    // stripe only supports USD, so not using a state right now
    const [selectedCurrency, setSelectedCurrency] = (0,react.useState)(currencies/* defaultSelectedCurrency */.k8);
    return {
        tokenAmount,
        setTokenAmount,
        toChain,
        setToChain,
        deferredTokenAmount,
        fromChain,
        setFromChain,
        toToken,
        setToToken,
        fromToken,
        setFromToken,
        selectedCurrency,
        setSelectedCurrency,
    };
}
//# sourceMappingURL=useUISelectionStates.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/formElements.js
var formElements = __webpack_require__(63680);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/utils.js
function getBuyTokenAmountFontSize(value) {
    return value.length > 10 ? "26px" : value.length > 6 ? "34px" : "50px";
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/BuyTokenInput.js















/**
 * @internal
 */
function BuyTokenInput(props) {
    const { name } = (0,useChainQuery/* useChainName */.zw)(props.chain);
    const getWidth = () => {
        let chars = props.value.replace(".", "").length;
        const hasDot = props.value.includes(".");
        if (hasDot) {
            chars += 0.3;
        }
        return `calc(${`${Math.max(1, chars)}ch`} + 6px)`;
    };
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [(0,jsx_runtime.jsx)("div", { onClick: (e) => {
                    e.currentTarget.querySelector("input")?.focus();
                }, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "both", gap: "xs", style: {
                        flexWrap: "nowrap",
                    }, children: [(0,jsx_runtime.jsx)(formElements/* Input */.II, { variant: "outline", pattern: "^[0-9]*[.,]?[0-9]*$", inputMode: "decimal", tabIndex: -1, placeholder: "0", type: "text", "data-placeholder": props.value === "", value: props.value || "0", disabled: props.freezeAmount, onClick: (e) => {
                                // put cursor at the end of the input
                                if (props.value === "") {
                                    e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
                                }
                            }, onChange: (e) => {
                                let value = e.target.value;
                                if (value.startsWith(".")) {
                                    value = `0${value}`;
                                }
                                const numValue = Number(value);
                                if (Number.isNaN(numValue)) {
                                    return;
                                }
                                if (value.startsWith("0") && !value.startsWith("0.")) {
                                    props.onChange(value.slice(1));
                                }
                                else {
                                    props.onChange(value);
                                }
                            }, style: {
                                border: "none",
                                fontSize: getBuyTokenAmountFontSize(props.value),
                                boxShadow: "none",
                                borderRadius: "0",
                                padding: "0",
                                paddingBlock: "2px",
                                fontWeight: 600,
                                textAlign: "right",
                                width: getWidth(),
                                maxWidth: "calc(100% - 100px)",
                            } }), (0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: props.token, chain: props.chain, size: "lg", color: "secondaryText" })] }) }), !props.hideTokenSelector && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "row", center: "x", children: (0,jsx_runtime.jsxs)(TokenButton, { variant: "secondary", fullWidth: true, style: {
                                fontSize: design_system/* fontSize */.JB.sm,
                            }, gap: "xxs", onClick: props.onSelectToken, disabled: props.freezeChainAndToken, children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", gap: "sm", children: [(0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, { token: props.token, chain: props.chain, size: "md", client: props.client }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", style: {
                                                gap: "4px",
                                            }, children: [(0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: props.token, chain: props.chain, size: "sm" }), name ? ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", children: name })) : ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { width: "90px", height: design_system/* fontSize */.JB.xs }))] })] }), (0,jsx_runtime.jsx)(react_icons_esm/* ChevronDownIcon */.v4q, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm, style: {
                                        marginLeft: "auto",
                                    } })] }) })] }))] }));
}
const TokenButton = /* @__PURE__ */ (0,emotion_styled_esm/* default */.Z)(buttons/* Button */.zx)(() => {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    return {
        background: theme.colors.tertiaryBg,
        border: `1px solid ${theme.colors.borderColor}`,
        justifyContent: "flex-start",
        transition: "background 0.3s",
        padding: design_system/* spacing */.W0.sm,
    };
});
//# sourceMappingURL=BuyTokenInput.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/Fees.js
var Fees = __webpack_require__(19319);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/icons/GenericWalletIcon.js
var GenericWalletIcon = __webpack_require__(25804);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/formatTokenBalance.js
var formatTokenBalance = __webpack_require__(40414);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/PayWithCrypto.js















/**
 * Shows an amount "value" and renders the selected token and chain
 * It also renders the buttons to select the token and chain
 * It also renders the balance of active wallet for the selected token in selected chain
 * @internal
 */
function PayWithCrypto(props) {
    const { name } = (0,useChainQuery/* useChainName */.zw)(props.chain);
    const balanceQuery = (0,useWalletBalance/* useWalletBalance */.t)({
        address: props.payerAccount.address,
        chain: props.chain,
        tokenAddress: (0,nativeToken/* isNativeToken */.M)(props.token) ? undefined : props.token.address,
        client: props.client,
    });
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { bg: "tertiaryBg", borderColor: "borderColor", flex: "row", style: {
            borderWidth: "1px",
            borderTopWidth: 0,
            borderStyle: "solid",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            minHeight: "64px",
            alignItems: "center",
            ...(props.swapRequired
                ? { borderBottom: "none" }
                : {
                    borderBottomLeftRadius: design_system/* radius */.q0.md,
                    borderBottomRightRadius: design_system/* radius */.q0.md,
                }),
        }, children: [(0,jsx_runtime.jsxs)(buttons/* Button */.zx, { variant: "ghost", onClick: props.onSelectToken, gap: "sm", style: {
                    paddingInline: design_system/* spacing */.W0.sm,
                    paddingBlock: design_system/* spacing */.W0.sm,
                    minWidth: "50%",
                    justifyContent: "flex-start",
                }, disabled: props.freezeChainAndTokenSelection, children: [(0,jsx_runtime.jsx)(PayTokenIcon/* PayTokenIcon */.K, { token: props.token, chain: props.chain, size: "md", client: props.client }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "3xs", children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", color: "primaryText", children: [(0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: props.token, chain: props.chain, size: "sm" }), (0,jsx_runtime.jsx)(react_icons_esm/* ChevronDownIcon */.v4q, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm })] }), name ? ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", children: name })) : ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { width: "90px", height: design_system/* fontSize */.JB.xs }))] })] }), (0,jsx_runtime.jsxs)("div", { style: {
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: design_system/* spacing */.W0.xxs,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    justifyContent: "center",
                    paddingRight: design_system/* spacing */.W0.sm,
                }, children: [props.isLoading ? ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { width: "120px", height: design_system/* fontSize */.JB.md, color: "borderColor" })) : ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "md", color: props.value ? "primaryText" : "secondaryText", style: {}, children: (0,formatNumber/* formatNumber */.u)(Number(props.value), 6) || "" })), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xxs", center: "y", color: "secondaryText", children: [(0,jsx_runtime.jsx)(GenericWalletIcon/* GenericWalletIcon */.D, { size: design_system/* fontSize */.JB.xs }), balanceQuery.data ? ((0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", color: "secondaryText", weight: 500, children: (0,formatTokenBalance/* formatTokenBalance */.a)(balanceQuery.data, false) })) : ((0,jsx_runtime.jsx)(Skeleton/* Skeleton */.O, { width: "70px", height: design_system/* fontSize */.JB.xs }))] })] })] }));
}
//# sourceMappingURL=PayWithCrypto.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/SwapFlow.js + 1 modules
var SwapFlow = __webpack_require__(91795);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/write/transfer.js + 1 modules
var transfer = __webpack_require__(56702);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/send-transaction.js
var send_transaction = __webpack_require__(75888);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/wait-for-tx-receipt.js + 5 modules
var wait_for_tx_receipt = __webpack_require__(41872);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/transaction/actions/send-and-confirm-transaction.js


/**
 * Sends a transaction using the provided wallet.
 * @param options - The options for sending the transaction.
 * @returns A promise that resolves to the confirmed transaction receipt.
 * @throws An error if the wallet is not connected.
 * @transaction
 * @example
 * ```ts
 * import { sendAndConfirmTransaction } from "thirdweb";
 *
 * const transactionReceipt = await sendAndConfirmTransaction({
 *  account,
 *  transaction
 * });
 * ```
 */
async function sendAndConfirmTransaction(options) {
    const submittedTx = await (0,send_transaction.sendTransaction)(options);
    return (0,wait_for_tx_receipt/* waitForReceipt */.h)(submittedTx);
}
//# sourceMappingURL=send-and-confirm-transaction.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/prepare-transaction.js
var prepare_transaction = __webpack_require__(71316);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/Stepper.js
var Stepper = __webpack_require__(80885);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/pay-transactions/TokenInfoRow.js
var TokenInfoRow = __webpack_require__(94341);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/ConfirmationScreen.js
var ConfirmationScreen = __webpack_require__(47862);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/TransferFlow.js
/* provided dependency */ var TransferFlow_console = __webpack_require__(25108);























function TransferFlow(props) {
    const { title, onBack, receiverAddress, client, payer, onDone, chain, token, tokenAmount, transactionMode, } = props;
    const [step, setStep] = (0,react.useState)("transfer");
    const [status, setStatus] = (0,react.useState)("idle");
    const { symbol } = (0,useChainQuery/* useChainSymbol */.U)(chain);
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: title, onBack: onBack }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), transactionMode && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(StepBar/* StepBar */.E, { steps: 2, currentStep: step === "transfer" ? 1 : 2 }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", children: step === "transfer"
                            ? "Step 1 of 2 - Transfer funds"
                            : "Step 2 of 2 - Finalize transaction" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" })] })), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", style: {
                    justifyContent: "space-between",
                }, children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", children: "From" }), (0,jsx_runtime.jsx)(WalletRow, { address: payer.account.address, client: client })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", center: "y", style: {
                    justifyContent: "space-between",
                }, children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", children: "To" }), (0,jsx_runtime.jsx)(WalletRow, { address: receiverAddress, client: client })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(TokenInfoRow/* TokenInfoRow */.Q, { chainId: chain.id, client: client, label: "Amount", tokenAmount: tokenAmount, tokenSymbol: (0,nativeToken/* isNativeToken */.M)(token) ? symbol || "" : token.symbol, tokenAddress: (0,nativeToken/* isNativeToken */.M)(token) ? addresses/* NATIVE_TOKEN_ADDRESS */.K8 : token.address }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), transactionMode && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { gap: "sm", flex: "row", style: {
                            justifyContent: "space-between",
                        }, center: "y", color: "accentText", children: [(0,jsx_runtime.jsx)(Stepper/* Step */.h, { isDone: step === "execute", isActive: step === "transfer", label: step === "transfer" ? "Transfer" : "Done" }), (0,jsx_runtime.jsx)(ConfirmationScreen/* ConnectorLine */.s, {}), (0,jsx_runtime.jsx)(Stepper/* Step */.h, { isDone: false, label: "Finalize", isActive: step === "execute" })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" })] })), status === "error" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "both", color: "danger", children: [(0,jsx_runtime.jsx)(react_icons_esm/* CrossCircledIcon */.xrR, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "danger", size: "sm", children: step === "transfer" ? "Failed to Transfer" : "Failed to Execute" })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" })] })), !transactionMode && step === "execute" && status === "done" && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "both", color: "success", children: [(0,jsx_runtime.jsx)(react_icons_esm/* CheckCircledIcon */.NhS, { width: design_system/* iconSize */.EA.sm, height: design_system/* iconSize */.EA.sm }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "success", size: "sm", children: "Payment completed" })] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" })] })), payer.chain.id !== chain.id ? ((0,jsx_runtime.jsx)(SwitchNetwork/* SwitchNetworkButton */.v, { fullWidth: true, variant: "accent", switchChain: async () => {
                    await props.payer.wallet.switchChain(chain);
                } })) : ((0,jsx_runtime.jsxs)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, disabled: status === "pending", onClick: async () => {
                    if (step === "execute") {
                        onDone();
                        return;
                    }
                    try {
                        setStatus("pending");
                        const transaction = (0,nativeToken/* isNativeToken */.M)(token)
                            ? (0,prepare_transaction.prepareTransaction)({
                                client,
                                chain,
                                to: receiverAddress,
                                value: (0,units/* toWei */.r0)(tokenAmount),
                            })
                            : (0,transfer/* transfer */.r)({
                                contract: (0,contract/* getContract */.u)({
                                    address: token.address,
                                    chain: chain,
                                    client: client,
                                }),
                                to: receiverAddress,
                                amount: tokenAmount,
                            });
                        await sendAndConfirmTransaction({
                            account: props.payer.account,
                            transaction,
                        });
                        setStep("execute");
                        if (transactionMode) {
                            setStatus("idle");
                        }
                        else {
                            setStatus("done");
                        }
                    }
                    catch (e) {
                        TransferFlow_console.error(e);
                        setStatus("error");
                    }
                }, gap: "xs", children: [step === "execute" && (status === "done" ? "Done" : "Continue"), step === "transfer" &&
                        (status === "pending" ? "Confirming" : "Confirm"), status === "pending" && ((0,jsx_runtime.jsx)(Spinner/* Spinner */.$, { size: "sm", color: "accentButtonText" }))] }))] }));
}
//# sourceMappingURL=TransferFlow.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/WalletSwitcherDrawerContent.js










function WalletSwitcherDrawerContent(props) {
    const theme = (0,CustomThemeProvider/* useCustomTheme */.v$)();
    const connectedWallets = (0,useConnectedWallets/* useConnectedWallets */.f)();
    // if all wallets are connected and showAll wallets is disabled, hide the connect button
    const hideConnectButton = !props.showAllWallets &&
        props.wallets?.every((w) => connectedWallets.includes(w));
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "xs", children: [connectedWallets.map((w) => {
                        const address = w.getAccount()?.address;
                        return ((0,jsx_runtime.jsx)(WalletSelectorButton, { walletId: w.id, client: props.client, address: address || "", onClick: () => {
                                props.onSelect(w);
                                props.onBack();
                            }, disableChevron: true, checked: false }, w.id));
                    }), !hideConnectButton && ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "secondary", fullWidth: true, onClick: props.onConnect, gap: "xs", bg: "tertiaryBg", style: {
                            borderRadius: design_system/* radius */.q0.lg,
                            border: `1px solid ${theme.colors.borderColor}`,
                            padding: design_system/* spacing */.W0.sm,
                        }, children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "sm", center: "y", expand: true, children: [(0,jsx_runtime.jsx)(react_icons_esm/* PlusIcon */.pOD, { width: design_system/* iconSize */.EA.md, height: design_system/* iconSize */.EA.md }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", color: "primaryText", children: "Add Another Wallet" })] }) }))] }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" })] }));
}
//# sourceMappingURL=WalletSwitcherDrawerContent.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/swap/useSwapSupportedChains.js
var useSwapSupportedChains = __webpack_require__(72640);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/usePayerSetup.js
/* provided dependency */ var usePayerSetup_console = __webpack_require__(25108);




function usePayerSetup() {
    const wallet = (0,useActiveWallet/* useActiveWallet */.r)();
    const account = (0,useActiveAccount/* useActiveAccount */.M)();
    const activeChain = (0,useActiveWalletChain/* useActiveWalletChain */.v)();
    const [_payer, setPayer] = (0,react.useState)();
    (0,react.useEffect)(() => {
        const wallet = _payer?.wallet;
        function update() {
            if (!wallet) {
                setPayer(undefined);
                return;
            }
            const account = wallet.getAccount();
            const chain = wallet.getChain();
            if (account && chain) {
                usePayerSetup_console.log("updated to", account, chain);
                setPayer({
                    account,
                    chain,
                    wallet,
                });
            }
            else {
                setPayer(undefined);
            }
        }
        if (wallet) {
            const unsubChainChanged = wallet.subscribe("chainChanged", update);
            const unsubAccountChanged = wallet.subscribe("accountChanged", update);
            return () => {
                unsubChainChanged();
                unsubAccountChanged();
            };
        }
        return undefined;
    }, [_payer]);
    const initialPayer = account && activeChain && wallet
        ? { account, chain: activeChain, wallet }
        : undefined;
    // return the payer state if its set
    // otherwise return the active wallet as payer
    const payer = _payer || initialPayer;
    return {
        payer,
        setPayer,
    };
}
//# sourceMappingURL=usePayerSetup.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/screens/Buy/BuyScreen.js
/* provided dependency */ var BuyScreen_console = __webpack_require__(25108);















































/**
 * @internal
 */
function BuyScreen(props) {
    const supportedDestinationsQuery = (0,useSwapSupportedChains/* useBuySupportedDestinations */.oU)(props.client);
    if (!supportedDestinationsQuery.data) {
        return (0,jsx_runtime.jsx)(LoadingScreen/* LoadingScreen */.a, {});
    }
    return ((0,jsx_runtime.jsx)(BuyScreenContent, { ...props, supportedDestinations: supportedDestinationsQuery.data }));
}
/**
 * @internal
 */
function BuyScreenContent(props) {
    const { client, supportedDestinations, connectLocale, payOptions } = props;
    const activeAccount = (0,useActiveAccount/* useActiveAccount */.M)();
    const { payer, setPayer } = usePayerSetup();
    const [screen, setScreen] = (0,react.useState)({
        id: "main",
    });
    const [hasEditedAmount, setHasEditedAmount] = (0,react.useState)(false);
    const onDone = (0,react.useCallback)(() => {
        setScreen({ id: "main" });
        props.onDone();
    }, [props.onDone]);
    // UI selection
    const { tokenAmount, setTokenAmount, toChain, setToChain, deferredTokenAmount, fromChain, setFromChain, toToken, setToToken, fromToken, setFromToken, selectedCurrency, setSelectedCurrency, } = useUISelectionStates({
        payOptions,
        supportedDestinations,
    });
    // check if the screen is expanded or not
    // update supportedSources whenever toToken or toChain is updated
    const supportedSourcesQuery = (0,useSwapSupportedChains/* useBuySupportedSources */.QR)({
        client: props.client,
        destinationChainId: toChain.id,
        destinationTokenAddress: (0,nativeToken/* isNativeToken */.M)(toToken)
            ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
            : toToken.address,
    });
    const destinationSupportedTokens = (0,react.useMemo)(() => {
        return createSupportedTokens(supportedDestinations, payOptions, props.supportedTokens);
    }, [props.supportedTokens, supportedDestinations, payOptions]);
    const sourceSupportedTokens = (0,react.useMemo)(() => {
        if (!supportedSourcesQuery.data) {
            return undefined;
        }
        return createSupportedTokens(supportedSourcesQuery.data, payOptions, props.supportedTokens);
    }, [props.supportedTokens, supportedSourcesQuery.data, payOptions]);
    const enabledPaymentMethods = useEnabledPaymentMethods({
        payOptions: props.payOptions,
        supportedDestinations: props.supportedDestinations,
        toChain: toChain,
        toToken: toToken,
    });
    const payDisabled = enabledPaymentMethods.showPaymentSelection === false &&
        enabledPaymentMethods.buyWithCryptoEnabled === false &&
        enabledPaymentMethods.buyWithFiatEnabled === false;
    // screens ----------------------------
    if (screen.id === "connect-payer-wallet") {
        return ((0,jsx_runtime.jsx)(WalletSwitcherConnectionScreen/* WalletSwitcherConnectionScreen */.A, { accountAbstraction: props.connectOptions?.accountAbstraction, appMetadata: props.connectOptions?.appMetadata, chain: props.connectOptions?.chain, chains: props.connectOptions?.chains, client: props.client, connectLocale: props.connectLocale, isEmbed: props.isEmbed, onBack: () => setScreen(screen.backScreen), onSelect: (w) => {
                const account = w.getAccount();
                const chain = w.getChain();
                if (w && account && chain) {
                    setPayer({
                        account,
                        chain,
                        wallet: w,
                    });
                }
            }, recommendedWallets: props.connectOptions?.recommendedWallets, showAllWallets: !!props.connectOptions?.showAllWallets, walletConnect: props.connectOptions?.walletConnect, wallets: props.connectOptions?.wallets }));
    }
    if (screen.id === "swap-flow" && payer) {
        return ((0,jsx_runtime.jsx)(SwapFlow/* SwapFlow */.$, { title: props.title, transactionMode: payOptions.mode === "transaction", isEmbed: props.isEmbed, client: client, onBack: () => {
                setScreen({
                    id: "buy-with-crypto",
                });
            }, buyWithCryptoQuote: screen.quote, payer: payer, isFiatFlow: false, onDone: onDone, onTryAgain: () => {
                setScreen({
                    id: "buy-with-crypto",
                });
            } }));
    }
    if (screen.id === "fiat-flow" && payer) {
        return ((0,jsx_runtime.jsx)(FiatFlow, { title: props.title, transactionMode: payOptions.mode === "transaction", quote: screen.quote, onBack: () => {
                setScreen({
                    id: "buy-with-fiat",
                });
            }, client: client, testMode: props.payOptions.buyWithFiat !== false &&
                props.payOptions.buyWithFiat?.testMode === true, theme: typeof props.theme === "string" ? props.theme : props.theme.type, openedWindow: screen.openedWindow, onDone: onDone, isEmbed: props.isEmbed, payer: payer }));
    }
    if (screen.id === "transfer-flow" && payer && activeAccount) {
        const goBack = () => setScreen({ id: "buy-with-crypto" });
        // TODO (pay) pass it via screen props
        const defaultRecipientAddress = props.payOptions?.paymentInfo?.sellerAddress;
        const receiverAddress = defaultRecipientAddress || activeAccount.address;
        return ((0,jsx_runtime.jsx)(TransferFlow, { title: props.title, onBack: goBack, payer: payer, client: props.client, onDone: onDone, chain: toChain, token: toToken, tokenAmount: tokenAmount, receiverAddress: receiverAddress, transactionMode: props.payOptions.mode === "transaction" }));
    }
    if (screen.id === "select-currency") {
        const goBack = () => setScreen(screen.backScreen);
        return ((0,jsx_runtime.jsx)(CurrencySelection, { onSelect: (currency) => {
                goBack();
                setSelectedCurrency(currency);
            }, onBack: goBack }));
    }
    if (screen.id === "select-to-token") {
        const chains = supportedDestinations.map((x) => x.chain);
        const goBack = () => setScreen(screen.backScreen);
        const allowEdits = payOptions?.prefillBuy
            ?.allowEdits;
        // if token selection is disabled - only show network selector screen
        if (allowEdits?.token === false) {
            return ((0,jsx_runtime.jsx)(ChainSelectionScreen, { chains: chains, client: props.client, connectLocale: props.connectLocale, setChain: setToChain, goBack: goBack }));
        }
        return ((0,jsx_runtime.jsx)(TokenSelector/* TokenSelector */.k, { onBack: goBack, tokenList: ((toChain?.id ? destinationSupportedTokens[toChain.id] : undefined) ||
                []).filter((x) => x.address !== addresses/* NATIVE_TOKEN_ADDRESS */.K8), onTokenSelect: (tokenInfo) => {
                setToToken(tokenInfo);
                goBack();
            }, chain: toChain, chainSelection: 
            // hide chain selection if it's disabled
            allowEdits?.chain !== false
                ? {
                    chains: chains,
                    select: (c) => {
                        setToChain(c);
                    },
                }
                : undefined, connectLocale: connectLocale, client: client, modalTitle: props.title }));
    }
    if (screen.id === "select-from-token" &&
        supportedSourcesQuery.data &&
        sourceSupportedTokens) {
        const chains = supportedSourcesQuery.data.map((x) => x.chain);
        const goBack = () => setScreen(screen.backScreen);
        // if token selection is disabled - only show network selector screen
        if (payOptions.buyWithCrypto !== false &&
            payOptions.buyWithCrypto?.prefillSource?.allowEdits?.token === false) {
            return ((0,jsx_runtime.jsx)(ChainSelectionScreen, { chains: chains, client: props.client, connectLocale: props.connectLocale, setChain: setFromChain, goBack: goBack }));
        }
        return ((0,jsx_runtime.jsx)(TokenSelector/* TokenSelector */.k, { onBack: goBack, tokenList: ((fromChain?.id ? sourceSupportedTokens[fromChain.id] : undefined) ||
                []).filter((x) => x.address !== addresses/* NATIVE_TOKEN_ADDRESS */.K8), onTokenSelect: (tokenInfo) => {
                setFromToken(tokenInfo);
                goBack();
            }, chain: fromChain, chainSelection: 
            // hide chain selection if it's disabled
            payOptions.buyWithCrypto !== false &&
                payOptions.buyWithCrypto?.prefillSource?.allowEdits?.chain !== false
                ? {
                    chains: supportedSourcesQuery.data.map((x) => x.chain),
                    select: (c) => setFromChain(c),
                }
                : undefined, connectLocale: connectLocale, client: client, modalTitle: "Pay with" }));
    }
    return ((0,jsx_runtime.jsx)(basic/* Container */.W2, { animate: "fadein", children: (0,jsx_runtime.jsxs)("div", { children: [screen.id === "main" && ((0,jsx_runtime.jsx)(MainScreen, { title: props.title, payerAccount: payer?.account, client: client, onSelectBuyToken: () => setScreen({ id: "select-to-token", backScreen: screen }), payOptions: payOptions, setTokenAmount: setTokenAmount, setToChain: setToChain, setToToken: setToToken, setFromChain: setFromChain, setFromToken: setFromToken, toChain: toChain, toToken: toToken, tokenAmount: tokenAmount, connectOptions: props.connectOptions, setScreen: setScreen, supportedDestinations: supportedDestinations, onBack: props.onBack, theme: props.theme, hasEditedAmount: hasEditedAmount, setHasEditedAmount: setHasEditedAmount, enabledPaymentMethods: enabledPaymentMethods })), (screen.id === "select-payment-method" ||
                    screen.id === "select-wallet" ||
                    screen.id === "buy-with-crypto" ||
                    screen.id === "buy-with-fiat") &&
                    payer && ((0,jsx_runtime.jsxs)(TokenSelectedLayout, { title: props.title, selectedChain: toChain, selectedToken: toToken, tokenAmount: tokenAmount, client: client, onBack: () => {
                        if (enabledPaymentMethods.showPaymentSelection &&
                            (screen.id === "select-wallet" ||
                                screen.id === "buy-with-fiat")) {
                            setScreen({ id: "select-payment-method" });
                        }
                        else if (screen.id === "buy-with-crypto") {
                            setScreen({ id: "select-wallet" });
                        }
                        else {
                            setScreen({ id: "main" });
                        }
                    }, children: [screen.id === "select-payment-method" && ((0,jsx_runtime.jsx)(PaymentMethodSelection, { setScreen: (id) => setScreen({ id }) })), screen.id === "select-wallet" && ((0,jsx_runtime.jsx)(WalletSwitcherDrawerContent, { client: client, onSelect: (w) => {
                                const chain = w.getChain();
                                const account = w.getAccount();
                                if (chain && account) {
                                    setPayer({
                                        account,
                                        chain,
                                        wallet: w,
                                    });
                                    setScreen({ id: "buy-with-crypto" });
                                }
                            }, showAllWallets: !!props.connectOptions?.showAllWallets, wallets: props.connectOptions?.wallets, onBack: () => {
                                // no-op
                            }, onConnect: () => {
                                setScreen({
                                    id: "connect-payer-wallet",
                                    backScreen: {
                                        id: "select-wallet",
                                    },
                                });
                            }, selectedAddress: payer.account.address })), screen.id === "buy-with-crypto" && activeAccount && ((0,jsx_runtime.jsx)(SwapScreenContent, { setScreen: setScreen, tokenAmount: deferredTokenAmount, toChain: toChain, toToken: toToken, fromChain: fromChain, fromToken: fromToken, showFromTokenSelector: () => {
                                setScreen({
                                    id: "select-from-token",
                                    backScreen: screen,
                                });
                            }, payer: payer, client: client, isEmbed: props.isEmbed, onDone: onDone, payOptions: payOptions, connectLocale: connectLocale, connectOptions: props.connectOptions, setPayer: setPayer, 
                            // pass it even though we are passing payer, because payer might be different
                            activeAccount: activeAccount, setTokenAmount: setTokenAmount, setHasEditedAmount: setHasEditedAmount, disableTokenSelection: payDisabled === true ||
                                (payOptions.buyWithCrypto !== false &&
                                    payOptions.buyWithCrypto?.prefillSource?.allowEdits
                                        ?.chain === false &&
                                    payOptions.buyWithCrypto?.prefillSource?.allowEdits
                                        ?.token === false) })), screen.id === "buy-with-fiat" && ((0,jsx_runtime.jsx)(FiatScreenContent, { setScreen: setScreen, tokenAmount: deferredTokenAmount, toChain: toChain, toToken: toToken, selectedCurrency: selectedCurrency, client: client, isEmbed: props.isEmbed, onDone: onDone, payOptions: payOptions, theme: props.theme, showCurrencySelector: () => {
                                setScreen({
                                    id: "select-currency",
                                    backScreen: screen,
                                });
                            }, payer: payer, setTokenAmount: setTokenAmount, setHasEditedAmount: setHasEditedAmount }))] }))] }) }));
}
function SelectedTokenInfo(props) {
    return ((0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "sm", center: "y", style: {
                justifyContent: "space-between",
            }, children: [(0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xs", center: "y", children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "primaryText", "data-testid": "tokenAmount", size: "xl", children: (0,formatNumber/* formatNumber */.u)(Number(props.tokenAmount), 6) }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "row", gap: "xxs", center: "y", children: [(0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: props.selectedToken, chain: props.selectedChain, size: "md", color: "secondaryText" }), (0,jsx_runtime.jsx)(PayTokenIcon/* PayTokenIcon */.K, { chain: props.selectedChain, client: props.client, size: "sm", token: props.selectedToken })] })] }), (0,jsx_runtime.jsx)(ChainName/* ChainName */.G, { chain: props.selectedChain, client: props.client, size: "sm", short: true })] }) }));
}
function MainScreen(props) {
    const { setTokenAmount, setToChain, setToToken, setFromChain, setFromToken, payerAccount, client, tokenAmount, payOptions, toToken, toChain, supportedDestinations, enabledPaymentMethods, } = props;
    const { showPaymentSelection, buyWithCryptoEnabled, buyWithFiatEnabled } = enabledPaymentMethods;
    const disableContinue = !tokenAmount;
    switch (payOptions.mode) {
        case "transaction": {
            return ((0,jsx_runtime.jsx)(TransactionModeScreen, { supportedDestinations: supportedDestinations, payUiOptions: payOptions, payerAccount: payerAccount, connectOptions: props.connectOptions, client: client, onContinue: (tokenAmount, toChain, toToken) => {
                    setTokenAmount(tokenAmount);
                    setToChain(toChain);
                    setFromChain(toChain);
                    setFromToken(toToken);
                    setToToken(toToken);
                    if (showPaymentSelection) {
                        props.setScreen({ id: "select-payment-method" });
                    }
                    else if (buyWithCryptoEnabled) {
                        props.setScreen({ id: "select-wallet" });
                    }
                    else if (buyWithFiatEnabled) {
                        props.setScreen({ id: "buy-with-fiat" });
                    }
                    else {
                        // default to buy with crypto with connected wallet if chain not supported by pay
                        props.setScreen({ id: "select-wallet" });
                    }
                } }));
        }
        case "direct_payment": {
            return ((0,jsx_runtime.jsx)(DirectPaymentModeScreen, { client: client, payUiOptions: payOptions, payerAccount: payerAccount, connectOptions: props.connectOptions, supportedDestinations: supportedDestinations, onContinue: (tokenAmount, toChain, toToken) => {
                    setTokenAmount(tokenAmount);
                    setToChain(toChain);
                    setFromChain(toChain);
                    setFromToken(toToken);
                    setToToken(toToken);
                    if (showPaymentSelection) {
                        props.setScreen({ id: "select-payment-method" });
                    }
                    else if (buyWithCryptoEnabled) {
                        props.setScreen({ id: "buy-with-crypto" });
                    }
                    else if (buyWithFiatEnabled) {
                        props.setScreen({ id: "buy-with-fiat" });
                    }
                    else {
                        // default to buy with crypto with connected wallet if chain not supported by pay
                        props.setScreen({ id: "select-wallet" });
                    }
                } }));
        }
        default: {
            return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { p: "lg", children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: props.title, onBack: props.onBack }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), (0,jsx_runtime.jsx)(BuyTokenInput, { value: tokenAmount, onChange: async (value) => {
                            props.setHasEditedAmount(true);
                            setTokenAmount(value);
                        }, freezeAmount: payOptions.prefillBuy?.allowEdits?.amount === false, freezeChainAndToken: payOptions.prefillBuy?.allowEdits?.chain === false &&
                            payOptions.prefillBuy?.allowEdits?.token === false, token: toToken, chain: toChain, onSelectToken: props.onSelectBuyToken, client: props.client }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), (0,jsx_runtime.jsx)(basic/* Container */.W2, { flex: "column", gap: "sm", children: !payerAccount ? ((0,jsx_runtime.jsx)("div", { children: (0,jsx_runtime.jsx)(ConnectButton/* ConnectButton */.N, { ...props.connectOptions, client: props.client, theme: props.theme, connectButton: {
                                    style: {
                                        width: "100%",
                                    },
                                } }) })) : ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, disabled: disableContinue, "data-disabled": disableContinue, onClick: () => {
                                if (showPaymentSelection) {
                                    props.setScreen({ id: "select-payment-method" });
                                }
                                else if (buyWithCryptoEnabled) {
                                    props.setScreen({ id: "buy-with-crypto" });
                                }
                                else if (buyWithFiatEnabled) {
                                    props.setScreen({ id: "buy-with-fiat" });
                                }
                                else {
                                    BuyScreen_console.error("No payment method enabled");
                                }
                            }, children: "Continue" })) })] }));
        }
    }
}
function TokenSelectedLayout(props) {
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { p: "lg", children: (0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { title: props.title, onBack: props.onBack }) }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { px: "lg", style: {
                    paddingBottom: design_system/* spacing */.W0.lg,
                }, children: [(0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xs" }), (0,jsx_runtime.jsx)(SelectedTokenInfo, { selectedToken: props.selectedToken, selectedChain: props.selectedChain, tokenAmount: props.tokenAmount, client: props.client }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" }), (0,jsx_runtime.jsx)(basic/* Line */.x1, {}), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "sm", children: " Pay with " }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "sm" }), props.children] })] }));
}
function PaymentMethodSelection(props) {
    return ((0,jsx_runtime.jsx)(basic/* Container */.W2, { animate: "fadein", children: (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "sm", children: [(0,jsx_runtime.jsxs)(buttons/* Button */.zx, { variant: "outline", bg: "tertiaryBg", onClick: () => props.setScreen("buy-with-fiat"), gap: "sm", style: {
                        justifyContent: "flex-start",
                        textAlign: "left",
                    }, children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { color: "secondaryText", flex: "row", center: "both", children: (0,jsx_runtime.jsx)(react_icons_esm/* IdCardIcon */.Xwj, { style: {
                                    width: design_system/* iconSize */.EA.md,
                                    height: design_system/* iconSize */.EA.md,
                                } }) }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "xxs", children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "md", color: "primaryText", children: "Credit Card" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", children: "Securely pay with credit card" })] })] }), (0,jsx_runtime.jsxs)(buttons/* Button */.zx, { variant: "outline", bg: "tertiaryBg", onClick: () => props.setScreen("select-wallet"), style: {
                        justifyContent: "flex-start",
                    }, gap: "sm", children: [(0,jsx_runtime.jsx)(basic/* Container */.W2, { color: "secondaryText", flex: "row", center: "both", children: (0,jsx_runtime.jsx)(CoinsIcon/* CoinsIcon */.O, { size: design_system/* iconSize */.EA.md }) }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "xxs", children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "md", color: "primaryText", children: "Crypto" }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "xs", children: "Pay with your connected wallet" })] })] })] }) }));
}
function SwapScreenContent(props) {
    const { setScreen, payer, client, toChain, tokenAmount, toToken, fromChain, fromToken, showFromTokenSelector, payOptions, disableTokenSelection, } = props;
    const defaultRecipientAddress = props.payOptions?.paymentInfo?.sellerAddress;
    const receiverAddress = defaultRecipientAddress || props.activeAccount.address;
    const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
    const [drawerScreen, setDrawerScreen] = (0,react.useState)("fees");
    const fromTokenBalanceQuery = (0,useWalletBalance/* useWalletBalance */.t)({
        address: payer.account.address,
        chain: fromChain,
        tokenAddress: (0,nativeToken/* isNativeToken */.M)(fromToken) ? undefined : fromToken.address,
        client,
    });
    const fromTokenId = (0,nativeToken/* isNativeToken */.M)(fromToken)
        ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
        : fromToken.address.toLowerCase();
    const toTokenId = (0,nativeToken/* isNativeToken */.M)(toToken)
        ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
        : toToken.address.toLowerCase();
    const swapRequired = !!tokenAmount &&
        !(fromChain.id === toChain.id && fromTokenId === toTokenId);
    const quoteParams = swapRequired
        ? {
            // wallets
            fromAddress: payer.account.address,
            toAddress: receiverAddress,
            // from
            fromChainId: fromChain.id,
            fromTokenAddress: (0,nativeToken/* isNativeToken */.M)(fromToken)
                ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
                : fromToken.address,
            // to
            toChainId: toChain.id,
            toTokenAddress: (0,nativeToken/* isNativeToken */.M)(toToken)
                ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
                : toToken.address,
            toAmount: tokenAmount,
            client,
            purchaseData: payOptions.purchaseData,
        }
        : undefined;
    const quoteQuery = useBuyWithCryptoQuote(quoteParams, {
        // refetch every 30 seconds
        staleTime: 30 * 1000,
        refetchInterval: 30 * 1000,
        gcTime: 30 * 1000,
    });
    const sourceTokenAmount = swapRequired
        ? quoteQuery.data?.swapDetails.fromAmount
        : tokenAmount;
    const isNotEnoughBalance = !!sourceTokenAmount &&
        !!fromTokenBalanceQuery.data &&
        Number(fromTokenBalanceQuery.data.displayValue) < Number(sourceTokenAmount);
    const disableContinue = (swapRequired && !quoteQuery.data) || isNotEnoughBalance;
    const switchChainRequired = props.payer.chain.id !== fromChain.id;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    function getErrorMessage(err) {
        const defaultMessage = "Unable to get price quote";
        try {
            if (err.error.code === "MINIMUM_PURCHASE_AMOUNT") {
                const obj = err.error;
                const minAmountToken = obj.data.minimumAmountEth;
                return {
                    minAmount: (0,formatNumber/* formatNumber */.u)(Number(minAmountToken), 6),
                };
            }
        }
        catch { }
        return {
            msg: [defaultMessage],
        };
    }
    const errorMsg = !quoteQuery.isLoading && quoteQuery.error
        ? getErrorMessage(quoteQuery.error)
        : undefined;
    function showSwapFlow() {
        if ((props.payOptions.mode === "transaction" ||
            props.payOptions.mode === "direct_payment") &&
            !isNotEnoughBalance &&
            !swapRequired) {
            if (payer.account.address !== receiverAddress) {
                // same currency, just transfer, but from another wallet
                setScreen({
                    id: "transfer-flow",
                });
            }
            else {
                // has enough balance to just do the transaction directly
                props.onDone();
            }
            return;
        }
        if (!quoteQuery.data) {
            return;
        }
        setScreen({
            id: "swap-flow",
            quote: quoteQuery.data,
        });
    }
    function showFees() {
        if (!quoteQuery.data) {
            return;
        }
        setIsOpen(true);
        setDrawerScreen("fees");
    }
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "md", animate: "fadein", children: [isOpen && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0,jsx_runtime.jsx)(Drawer, { ref: drawerRef, close: () => setIsOpen(false), children: drawerScreen === "fees" && quoteQuery.data && ((0,jsx_runtime.jsxs)("div", { children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "lg", color: "primaryText", children: "Fees" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(Fees/* SwapFees */.O, { quote: quoteQuery.data, align: "left" })] })) })] })), (0,jsx_runtime.jsxs)("div", { children: [(0,jsx_runtime.jsx)(WalletSelectorButton, { client: props.client, onClick: () => {
                            setScreen({ id: "select-wallet" });
                        }, address: props.payer.account.address, walletId: props.payer.wallet.id, containerStyle: {
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                        } }), (0,jsx_runtime.jsx)(PayWithCrypto, { value: sourceTokenAmount || "", onSelectToken: showFromTokenSelector, chain: fromChain, token: fromToken, isLoading: quoteQuery.isLoading && !sourceTokenAmount, client: client, freezeChainAndTokenSelection: disableTokenSelection, payerAccount: props.payer.account, swapRequired: swapRequired }), swapRequired && ((0,jsx_runtime.jsx)(EstimatedTimeAndFees, { quoteIsLoading: quoteQuery.isLoading, estimatedSeconds: quoteQuery.data?.swapDetails.estimated.durationSeconds, onViewFees: showFees })), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" })] }), errorMsg && ((0,jsx_runtime.jsxs)("div", { children: [errorMsg.minAmount && ((0,jsx_runtime.jsxs)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: ["Minimum amount is ", errorMsg.minAmount, " ", (0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: toToken, chain: toChain, size: "sm", inline: true, color: "danger" })] })), errorMsg.msg?.map((msg) => ((0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: msg }, msg)))] })), !errorMsg && isNotEnoughBalance && ((0,jsx_runtime.jsxs)("div", { children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: "Not enough funds." }), (0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: "Try a different wallet or token." })] })), errorMsg?.minAmount ? ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, onClick: () => {
                    props.setTokenAmount(String(errorMsg.minAmount));
                    props.setHasEditedAmount(true);
                }, children: "Set Minimum" })) : switchChainRequired &&
                !quoteQuery.isLoading &&
                !isNotEnoughBalance &&
                !quoteQuery.error ? ((0,jsx_runtime.jsx)(SwitchNetwork/* SwitchNetworkButton */.v, { variant: "accent", fullWidth: true, switchChain: async () => {
                    await props.payer.wallet.switchChain(fromChain);
                } })) : ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: disableContinue ? "outline" : "accent", fullWidth: true, "data-disabled": disableContinue, disabled: disableContinue, onClick: async () => {
                    if (!disableContinue) {
                        showSwapFlow();
                    }
                }, gap: "xs", children: quoteQuery.isLoading ? ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: ["Getting price quote", (0,jsx_runtime.jsx)(Spinner/* Spinner */.$, { size: "sm", color: "accentText" })] })) : ("Continue") }))] }));
}
function FiatScreenContent(props) {
    const { toToken, tokenAmount, payer, client, setScreen, toChain, showCurrencySelector, selectedCurrency, } = props;
    const defaultRecipientAddress = props.payOptions?.paymentInfo?.sellerAddress;
    const receiverAddress = defaultRecipientAddress || props.payer.account.address;
    const { drawerRef, drawerOverlayRef, isOpen, setIsOpen } = useDrawer();
    const [drawerScreen, setDrawerScreen] = (0,react.useState)("fees");
    const buyWithFiatOptions = props.payOptions.buyWithFiat;
    const fiatQuoteQuery = useBuyWithFiatQuote(buyWithFiatOptions !== false && tokenAmount
        ? {
            fromCurrencySymbol: selectedCurrency.shorthand,
            toChainId: toChain.id,
            toAddress: receiverAddress,
            toTokenAddress: (0,nativeToken/* isNativeToken */.M)(toToken)
                ? addresses/* NATIVE_TOKEN_ADDRESS */.K8
                : toToken.address,
            toAmount: tokenAmount,
            client,
            isTestMode: buyWithFiatOptions?.testMode,
            purchaseData: props.payOptions.purchaseData,
            fromAddress: payer.account.address,
        }
        : undefined);
    function handleSubmit() {
        if (!fiatQuoteQuery.data) {
            return;
        }
        const hasTwoSteps = isSwapRequiredPostOnramp(fiatQuoteQuery.data);
        let openedWindow = null;
        if (!hasTwoSteps) {
            openedWindow = openOnrampPopup(fiatQuoteQuery.data.onRampLink, typeof props.theme === "string" ? props.theme : props.theme.type);
            (0,pendingSwapTx/* addPendingTx */.h)({
                type: "fiat",
                intentId: fiatQuoteQuery.data.intentId,
            });
        }
        setScreen({
            id: "fiat-flow",
            quote: fiatQuoteQuery.data,
            openedWindow,
        });
    }
    function showFees() {
        if (!fiatQuoteQuery.data) {
            return;
        }
        setDrawerScreen("fees");
        setIsOpen(true);
    }
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    function getErrorMessage(err) {
        const defaultMessage = "Unable to get price quote";
        try {
            if (err.error.code === "MINIMUM_PURCHASE_AMOUNT") {
                const obj = err.error;
                const minAmountToken = obj.data.minimumAmountEth;
                return {
                    minAmount: (0,formatNumber/* formatNumber */.u)(Number(minAmountToken), 6),
                };
            }
        }
        catch { }
        return {
            msg: [defaultMessage],
        };
    }
    const disableSubmit = !fiatQuoteQuery.data;
    const errorMsg = !fiatQuoteQuery.isLoading && fiatQuoteQuery.error
        ? getErrorMessage(fiatQuoteQuery.error)
        : undefined;
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "md", animate: "fadein", children: [isOpen && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(DrawerOverlay, { ref: drawerOverlayRef }), (0,jsx_runtime.jsx)(Drawer, { ref: drawerRef, close: () => setIsOpen(false), children: drawerScreen === "fees" && fiatQuoteQuery.data && ((0,jsx_runtime.jsxs)("div", { children: [(0,jsx_runtime.jsx)(components_text/* Text */.x, { size: "lg", color: "primaryText", children: "Fees" }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" }), (0,jsx_runtime.jsx)(Fees/* FiatFees */.W, { quote: fiatQuoteQuery.data })] })) })] })), (0,jsx_runtime.jsxs)("div", { children: [(0,jsx_runtime.jsx)(PayWithCreditCard, { isLoading: fiatQuoteQuery.isLoading, value: fiatQuoteQuery.data?.fromCurrencyWithFees.amount, client: client, currency: selectedCurrency, onSelectCurrency: showCurrencySelector }), (0,jsx_runtime.jsx)(EstimatedTimeAndFees, { quoteIsLoading: fiatQuoteQuery.isLoading, estimatedSeconds: fiatQuoteQuery.data?.estimatedDurationSeconds, onViewFees: showFees }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "md" })] }), errorMsg && ((0,jsx_runtime.jsxs)("div", { children: [errorMsg.minAmount && ((0,jsx_runtime.jsxs)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: ["Minimum amount is ", errorMsg.minAmount, " ", (0,jsx_runtime.jsx)(TokenSymbol/* TokenSymbol */.W, { token: toToken, chain: toChain, size: "sm", inline: true, color: "danger" })] })), errorMsg.msg?.map((msg) => ((0,jsx_runtime.jsx)(components_text/* Text */.x, { color: "danger", size: "sm", center: true, multiline: true, children: msg }, msg)))] })), errorMsg?.minAmount ? ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: "accent", fullWidth: true, onClick: () => {
                    props.setTokenAmount(String(errorMsg.minAmount));
                    props.setHasEditedAmount(true);
                }, children: "Set Minimum" })) : ((0,jsx_runtime.jsx)(buttons/* Button */.zx, { variant: disableSubmit ? "outline" : "accent", "data-disabled": disableSubmit, disabled: disableSubmit, fullWidth: true, onClick: handleSubmit, gap: "xs", children: fiatQuoteQuery.isLoading ? ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: ["Getting price quote", (0,jsx_runtime.jsx)(Spinner/* Spinner */.$, { size: "sm", color: "accentText" })] })) : ("Continue") }))] }));
}
function createSupportedTokens(data, payOptions, supportedTokensOverrides) {
    const tokens = {};
    const isBuyWithFiatDisabled = payOptions.buyWithFiat === false;
    const isBuyWithCryptoDisabled = payOptions.buyWithCrypto === false;
    // FIXME (pay) when buywithFiat is disabled, missing a bunch of tokens on base??
    for (const x of data) {
        tokens[x.chain.id] = x.tokens.filter((t) => {
            // it token supports both - include it
            if (t.buyWithCryptoEnabled && t.buyWithFiatEnabled) {
                return true;
            }
            // if buyWithFiat is disabled, and buyWithCrypto is not supported by token - exclude the token
            if (!t.buyWithCryptoEnabled && isBuyWithFiatDisabled) {
                return false;
            }
            // if buyWithCrypto is disabled, and buyWithFiat is not supported by token - exclude the token
            if (!t.buyWithFiatEnabled && isBuyWithCryptoDisabled) {
                return false;
            }
            return true; // include the token
        });
    }
    // override with props.supportedTokens
    if (supportedTokensOverrides) {
        for (const k in supportedTokensOverrides) {
            const key = Number(k);
            const tokenList = supportedTokensOverrides[key];
            if (tokenList) {
                tokens[key] = tokenList;
            }
        }
    }
    return tokens;
}
function ChainSelectionScreen(props) {
    return ((0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelectorContent */.w$, { client: props.client, connectLocale: props.connectLocale, showTabs: false, onBack: props.goBack, chains: props.chains, closeModal: props.goBack, networkSelector: {
            renderChain(renderChainProps) {
                return ((0,jsx_runtime.jsx)(NetworkSelector/* ChainButton */.mx, { chain: renderChainProps.chain, confirming: false, switchingFailed: false, onClick: () => {
                        props.setChain(renderChainProps.chain);
                        props.goBack();
                    }, client: props.client, connectLocale: props.connectLocale }));
            },
        } }));
}
//# sourceMappingURL=BuyScreen.js.map

/***/ })

};
;