"use strict";
exports.id = 29465;
exports.ids = [29465];
exports.modules = {

/***/ 29465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _providers_wallet_ui_states_provider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15879);
/* harmony import */ var _ui_ConnectWallet_Modal_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88816);
/* harmony import */ var _ui_ConnectWallet_WalletEntryButton_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1846);
/* harmony import */ var _ui_ConnectWallet_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69072);
/* harmony import */ var _shared_ConnectWalletSocialOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75980);
/* harmony import */ var _shared_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(477);
/* harmony import */ var _useInAppWalletLocale_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51375);
"use client";








/**
 *
 * @internal
 */
function InAppWalletSelectionUI(props) {
    const { screen } = (0,_ui_ConnectWallet_Modal_screen_js__WEBPACK_IMPORTED_MODULE_1__/* .useScreenContext */ .q7)();
    const setData = (0,_providers_wallet_ui_states_provider_js__WEBPACK_IMPORTED_MODULE_2__/* .useSetSelectionData */ .aV)();
    const locale = (0,_useInAppWalletLocale_js__WEBPACK_IMPORTED_MODULE_3__/* .useInAppWalletLocale */ .u)(props.connectLocale.id);
    // do not show the "selectUI" if
    // modal is compact or
    // it is being rendered in Safe wallet
    if (props.size === "wide" ||
        (screen !== _ui_ConnectWallet_constants_js__WEBPACK_IMPORTED_MODULE_4__/* .reservedScreens */ .K8.main && props.size === "compact")) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_ConnectWallet_WalletEntryButton_js__WEBPACK_IMPORTED_MODULE_5__/* .WalletEntryButton */ ._, { walletId: props.wallet.id, selectWallet: () => {
                setData({});
                props.select();
            }, client: props.client, connectLocale: props.connectLocale, recommendedWallets: props.recommendedWallets, isActive: screen === props.wallet, badge: undefined }));
    }
    if (!locale) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_LoadingScreen_js__WEBPACK_IMPORTED_MODULE_6__/* .LoadingScreen */ .a, { height: "195px" });
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ConnectWalletSocialOptions_js__WEBPACK_IMPORTED_MODULE_7__/* .ConnectWalletSocialOptions */ .p, { locale: locale, wallet: props.wallet, done: props.done, select: props.select, goBack: props.goBack, chain: props.chain, client: props.client, size: props.size }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InAppWalletSelectionUI);
//# sourceMappingURL=InAppWalletSelectionUI.js.map

/***/ })

};
;