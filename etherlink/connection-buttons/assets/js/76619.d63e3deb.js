"use strict";
exports.id = 76619;
exports.ids = [76619];
exports.modules = {

/***/ 76619:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var _ConnectingScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67726);
/* provided dependency */ var console = __webpack_require__(25108);



/**
 * @internal
 */
function CoinbaseSDKWalletConnectUI(props) {
    const { onBack, done, wallet, walletInfo, onGetStarted, locale } = props;
    const [errorConnecting, setErrorConnecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const connect = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        setErrorConnecting(false);
        wallet
            .connect({
            client: props.client,
            chain: props.chain,
        })
            .then(() => {
            done();
        })
            .catch((e) => {
            console.error(e);
            setErrorConnecting(true);
        });
    }, [props.client, wallet, props.chain, done]);
    const scanStarted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (scanStarted.current) {
            return;
        }
        scanStarted.current = true;
        connect();
    }, [connect]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ConnectingScreen_js__WEBPACK_IMPORTED_MODULE_2__/* .ConnectingScreen */ .V, { locale: {
            getStartedLink: locale.getStartedLink,
            instruction: locale.connectionScreen.instruction,
            tryAgain: locale.connectionScreen.retry,
            inProgress: locale.connectionScreen.inProgress,
            failed: locale.connectionScreen.failed,
        }, onBack: onBack, walletName: walletInfo.name, walletId: wallet.id, errorConnecting: errorConnecting, onRetry: connect, onGetStarted: onGetStarted, client: props.client, size: props.size }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoinbaseSDKWalletConnectUI);
//# sourceMappingURL=CoinbaseSDKConnection.js.map

/***/ })

};
;