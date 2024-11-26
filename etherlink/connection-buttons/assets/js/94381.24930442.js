"use strict";
exports.id = 94381;
exports.ids = [94381,38430];
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

/***/ 94381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getBalance: () => (/* binding */ getBalance)
});

// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/units.js
var units = __webpack_require__(98189);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/transaction/read-contract.js + 1 modules
var read_contract = __webpack_require__(26182);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/__generated__/IERC20/read/balanceOf.js




const FN_SELECTOR = "0x70a08231";
const FN_INPUTS = [
    {
        type: "address",
        name: "_address",
    },
];
const FN_OUTPUTS = [
    {
        type: "uint256",
    },
];
/**
 * Checks if the `balanceOf` method is supported by the given contract.
 * @param contract The ThirdwebContract.
 * @returns A promise that resolves to a boolean indicating if the `balanceOf` method is supported.
 * @extension ERC20
 * @example
 * ```ts
 * import { isBalanceOfSupported } from "thirdweb/extensions/erc20";
 *
 * const supported = await isBalanceOfSupported(contract);
 * ```
 */
async function isBalanceOfSupported(contract) {
    return detectMethod({
        contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    });
}
/**
 * Encodes the parameters for the "balanceOf" function.
 * @param options - The options for the balanceOf function.
 * @returns The encoded ABI parameters.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeBalanceOfParams } "thirdweb/extensions/erc20";
 * const result = encodeBalanceOfParams({
 *  address: ...,
 * });
 * ```
 */
function encodeBalanceOfParams(options) {
    return encodeAbiParameters(FN_INPUTS, [options.address]);
}
/**
 * Encodes the "balanceOf" function into a Hex string with its parameters.
 * @param options - The options for the balanceOf function.
 * @returns The encoded hexadecimal string.
 * @extension ERC20
 * @example
 * ```ts
 * import { encodeBalanceOf } "thirdweb/extensions/erc20";
 * const result = encodeBalanceOf({
 *  address: ...,
 * });
 * ```
 */
function encodeBalanceOf(options) {
    // we do a "manual" concat here to avoid the overhead of the "concatHex" function
    // we can do this because we know the specific formats of the values
    return (FN_SELECTOR +
        encodeBalanceOfParams(options).slice(2));
}
/**
 * Decodes the result of the balanceOf function call.
 * @param result - The hexadecimal result to decode.
 * @returns The decoded result as per the FN_OUTPUTS definition.
 * @extension ERC20
 * @example
 * ```ts
 * import { decodeBalanceOfResult } from "thirdweb/extensions/erc20";
 * const result = decodeBalanceOfResult("...");
 * ```
 */
function decodeBalanceOfResult(result) {
    return decodeAbiParameters(FN_OUTPUTS, result)[0];
}
/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @extension ERC20
 * @example
 * ```ts
 * import { balanceOf } from "thirdweb/extensions/erc20";
 *
 * const result = await balanceOf({
 *  contract,
 *  address: ...,
 * });
 *
 * ```
 */
async function balanceOf(options) {
    return (0,read_contract.readContract)({
        contract: options.contract,
        method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
        params: [options.address],
    });
}
//# sourceMappingURL=balanceOf.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/read/getCurrencyMetadata.js + 4 modules
var getCurrencyMetadata = __webpack_require__(38430);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/extensions/erc20/read/getBalance.js



/**
 * Retrieves the balance of an ERC20 token for a specific address.
 * @param options - The transaction options including the address.
 * @returns An object containing the balance value, display value, and symbol.
 * @extension ERC20
 * @example
 * ```ts
 * import { getBalance } from "thirdweb/extensions/erc20";
 *
 * const balance = await getBalance({ contract, address: "0x..." });
 * ```
 */
async function getBalance(options) {
    const [balanceWei, currencyMetadata] = await Promise.all([
        balanceOf(options),
        (0,getCurrencyMetadata.getCurrencyMetadata)(options),
    ]);
    return {
        ...currencyMetadata,
        value: balanceWei,
        displayValue: (0,units/* toTokens */.bb)(balanceWei, currencyMetadata.decimals),
    };
}
//# sourceMappingURL=getBalance.js.map

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

/***/ })

};
;