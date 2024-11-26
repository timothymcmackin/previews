"use strict";
exports.id = 44402;
exports.ids = [44402];
exports.modules = {

/***/ 44402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ in_app_InAppWalletConnectUI)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/providers/wallet-ui-states-provider.js
var wallet_ui_states_provider = __webpack_require__(15879);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/screen.js
var Modal_screen = __webpack_require__(88816);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/LoadingScreen.js
var LoadingScreen = __webpack_require__(477);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/OTPLoginUI.js + 3 modules
var OTPLoginUI = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/PassKeyLogin.js + 1 modules
var PassKeyLogin = __webpack_require__(65056);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/SocialLogin.js
var SocialLogin = __webpack_require__(40974);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/core/design-system/index.js
var design_system = __webpack_require__(68817);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/Modal/TOS.js
var TOS = __webpack_require__(97093);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/ConnectWallet/PoweredByTW.js + 1 modules
var PoweredByTW = __webpack_require__(98597);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Img.js
var Img = __webpack_require__(14514);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/Spacer.js
var Spacer = __webpack_require__(57654);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/basic.js
var basic = __webpack_require__(20070);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/ui/components/modalElements.js
var modalElements = __webpack_require__(54580);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/shared/ConnectWalletSocialOptions.js + 2 modules
var ConnectWalletSocialOptions = __webpack_require__(75980);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletFormUI.js
"use client";










/**
 * @internal
 */
function InAppWalletFormUIScreen(props) {
    const isCompact = props.size === "compact";
    const { initialScreen, screen } = (0,Modal_screen/* useScreenContext */.q7)();
    const isInitialScreen = screen === props.wallet && initialScreen === props.wallet;
    const onBack = isInitialScreen ? undefined : props.goBack;
    return ((0,jsx_runtime.jsxs)(basic/* Container */.W2, { fullHeight: true, flex: "column", p: "lg", animate: "fadein", style: {
            minHeight: "250px",
        }, children: [isCompact &&
                (isInitialScreen ? ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { onBack: onBack, leftAligned: true, title: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [!props.meta.titleIconUrl ? null : ((0,jsx_runtime.jsx)(Img/* Img */.E, { src: props.meta.titleIconUrl, width: design_system/* iconSize */.EA.md, height: design_system/* iconSize */.EA.md, client: props.client })), (0,jsx_runtime.jsx)(modalElements/* ModalTitle */.r, { children: props.meta.title ??
                                            props.inAppWalletLocale.emailLoginScreen.title })] }) }), (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "lg" })] })) : ((0,jsx_runtime.jsx)(basic/* ModalHeader */.xB, { onBack: onBack, title: props.inAppWalletLocale.signIn }))), (0,jsx_runtime.jsx)(basic/* Container */.W2, { expand: true, flex: "column", center: "y", p: isCompact ? undefined : "lg", children: (0,jsx_runtime.jsx)(ConnectWalletSocialOptions/* ConnectWalletSocialOptions */.p, { ...props, locale: props.inAppWalletLocale }) }), isCompact &&
                (props.meta.showThirdwebBranding !== false ||
                    props.meta.termsOfServiceUrl ||
                    props.meta.privacyPolicyUrl) && (0,jsx_runtime.jsx)(Spacer/* Spacer */.L, { y: "xl" }), (0,jsx_runtime.jsxs)(basic/* Container */.W2, { flex: "column", gap: "lg", children: [(0,jsx_runtime.jsx)(TOS/* TOS */.O, { termsOfServiceUrl: props.meta.termsOfServiceUrl, privacyPolicyUrl: props.meta.privacyPolicyUrl, locale: props.connectLocale.agreement }), props.meta.showThirdwebBranding !== false && (0,jsx_runtime.jsx)(PoweredByTW/* PoweredByThirdweb */.a, {})] })] }));
}
//# sourceMappingURL=InAppWalletFormUI.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/in-app/useInAppWalletLocale.js + 1 modules
var useInAppWalletLocale = __webpack_require__(51375);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/react/web/wallets/in-app/InAppWalletConnectUI.js
"use client";









/**
 *
 * @internal
 */
function InAppWalletConnectUI(props) {
    const data = (0,wallet_ui_states_provider/* useSelectionData */.Wb)();
    const setSelectionData = (0,wallet_ui_states_provider/* useSetSelectionData */.aV)();
    const state = data;
    const localeId = props.connectLocale.id;
    const locale = (0,useInAppWalletLocale/* useInAppWalletLocale */.u)(localeId);
    const { initialScreen } = (0,Modal_screen/* useScreenContext */.q7)();
    if (!locale) {
        return (0,jsx_runtime.jsx)(LoadingScreen/* LoadingScreen */.a, {});
    }
    // if the the modal starts out with the wallet's connect ui instead of wallet selector - going back to main screen requires staying on the same component and clearing the selection data
    // otherwise, we go back to the wallet selector by calling props.goBack
    const goBackToMain = initialScreen === props.wallet
        ? () => {
            setSelectionData({});
        }
        : props.goBack;
    const otpUserInfo = state?.emailLogin
        ? { email: state.emailLogin }
        : state?.phoneLogin
            ? { phone: state.phoneLogin }
            : undefined;
    if (otpUserInfo) {
        return ((0,jsx_runtime.jsx)(OTPLoginUI/* OTPLoginUI */.F, { userInfo: otpUserInfo, locale: locale, done: props.done, goBack: goBackToMain, wallet: props.wallet, chain: props.chain, client: props.client, size: props.size }));
    }
    if (state?.passkeyLogin) {
        return ((0,jsx_runtime.jsx)(PassKeyLogin/* PassKeyLogin */.N, { wallet: props.wallet, done: props.done, onBack: goBackToMain, chain: props.chain, client: props.client, size: props.size }));
    }
    if (state?.socialLogin) {
        return ((0,jsx_runtime.jsx)(SocialLogin/* SocialLogin */.J, { socialAuth: state.socialLogin.type, locale: locale, done: props.done, goBack: goBackToMain, wallet: props.wallet, state: state, chain: props.chain, client: props.client, size: props.size }));
    }
    return ((0,jsx_runtime.jsx)(InAppWalletFormUIScreen, { select: () => { }, connectLocale: props.connectLocale, inAppWalletLocale: locale, done: props.done, goBack: props.goBack, wallet: props.wallet, client: props.client, meta: props.meta, size: props.size, chain: props.chain }));
}
/* harmony default export */ const in_app_InAppWalletConnectUI = (InAppWalletConnectUI);
//# sourceMappingURL=InAppWalletConnectUI.js.map

/***/ })

};
;