"use strict";
exports.id = 66979;
exports.ids = [66979];
exports.modules = {

/***/ 66979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getEcosystemWalletInfo: () => (/* binding */ getEcosystemWalletInfo)
/* harmony export */ });
/* harmony import */ var _utils_domains_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88615);

/**
 * Fetches metadata for a given ecosystem wallet.
 *
 * @param {EcosystemWalletId} walletId - The ecosystem wallet ID.
 * @returns {Promise<{ imageUrl: string | undefined, name: string | undefined }>} A promise that resolves to an object containing the wallet's image URL and name.
 * @throws {Error} Throws an error if no partner ID is provided in the wallet configuration.
 * @internal
 */
async function getEcosystemWalletInfo(walletId) {
    const res = await fetch(`${(0,_utils_domains_js__WEBPACK_IMPORTED_MODULE_0__/* .getThirdwebBaseUrl */ .TS)("inAppWallet")}/api/2024-05-05/ecosystem-wallet`, {
        headers: {
            "x-ecosystem-id": walletId,
        },
    });
    const data = await res.json();
    if (!data || data.code === "UNAUTHORIZED") {
        throw new Error(data.message ||
            `Could not find ecosystem wallet with id ${walletId}, please check your ecosystem wallet configuration.`);
    }
    return {
        id: walletId,
        name: data.name,
        image_id: data.imageUrl,
        homepage: data.homepage,
        rdns: null,
        app: {
            browser: null,
            ios: null,
            android: null,
            mac: null,
            windows: null,
            linux: null,
            opera: null,
            chrome: null,
            firefox: null,
            safari: null,
            edge: null,
        },
        mobile: {
            native: null,
            universal: null,
        },
        desktop: {
            native: null,
            universal: null,
        },
    };
}
//# sourceMappingURL=get-ecosystem-wallet-info.js.map

/***/ })

};
;