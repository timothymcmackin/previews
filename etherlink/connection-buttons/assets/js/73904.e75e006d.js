"use strict";
exports.id = 73904;
exports.ids = [73904];
exports.modules = {

/***/ 73904:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InAppWebConnector: () => (/* binding */ InAppWebConnector)
});

// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/domains.js
var domains = __webpack_require__(88615);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/core/authentication/type.js
var type = __webpack_require__(70211);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/core/constants/settings.js
var settings = __webpack_require__(16945);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/utils/Storage/LocalStorage.js
var LocalStorage = __webpack_require__(24114);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/utils/iFrameCommunication/IframeCommunicator.js
/* provided dependency */ var console = __webpack_require__(25108);
function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
}
const iframeBaseStyle = {
    height: "100%",
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    colorScheme: "light",
    position: "fixed",
    top: "0px",
    right: "0px",
    zIndex: "2147483646",
    display: "none",
};
// Global var to help track iframe state
const isIframeLoaded = new Map();
/**
 * @internal
 */
// biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
class IframeCommunicator {
    /**
     * @internal
     */
    constructor({ link, baseUrl, iframeId, container = document.body, onIframeInitialize, }) {
        Object.defineProperty(this, "iframe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "POLLING_INTERVAL_SECONDS", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 1.4
        });
        Object.defineProperty(this, "iframeBaseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.iframeBaseUrl = baseUrl;
        // Creating the IFrame element for communication
        let iframe = document.getElementById(iframeId);
        const hrefLink = new URL(link);
        // TODO (ew) - bring back version tracking
        // const sdkVersion = process.env.THIRDWEB_EWS_SDK_VERSION;
        // if (!sdkVersion) {
        //   throw new Error("Missing THIRDWEB_EWS_SDK_VERSION env var");
        // }
        // hrefLink.searchParams.set("sdkVersion", sdkVersion);
        if (!iframe || iframe.src !== hrefLink.href) {
            // ! Do not update the hrefLink here or it'll cause multiple re-renders
            iframe = document.createElement("iframe");
            const mergedIframeStyles = {
                ...iframeBaseStyle,
            };
            Object.assign(iframe.style, mergedIframeStyles);
            iframe.setAttribute("id", iframeId);
            iframe.setAttribute("fetchpriority", "high");
            container.appendChild(iframe);
            iframe.src = hrefLink.href;
            // iframe.setAttribute("data-version", sdkVersion);
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
            const onIframeLoaded = (event) => {
                if (event.data.eventType === "ewsIframeLoaded") {
                    window.removeEventListener("message", onIframeLoaded);
                    if (!iframe) {
                        console.warn("thirdweb iFrame not found");
                        return;
                    }
                    this.onIframeLoadHandler(iframe, onIframeInitialize)();
                }
            };
            window.addEventListener("message", onIframeLoaded);
        }
        this.iframe = iframe;
    }
    // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
    async onIframeLoadedInitVariables() {
        return {};
    }
    /**
     * @internal
     */
    onIframeLoadHandler(iframe, onIframeInitialize) {
        return async () => {
            const channel = new MessageChannel();
            const promise = new Promise((res, rej) => {
                // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
                channel.port1.onmessage = (event) => {
                    const { data } = event;
                    channel.port1.close();
                    if (!data.success) {
                        rej(new Error(data.error));
                    }
                    isIframeLoaded.set(iframe.src, true);
                    if (onIframeInitialize) {
                        onIframeInitialize();
                    }
                    res(true);
                };
            });
            const INIT_IFRAME_EVENT = "initIframe";
            iframe?.contentWindow?.postMessage(
            // ? We initialise the iframe with a bunch
            // of useful information so that we don't have to pass it
            // through in each of the future call. This would be where we do it.
            {
                eventType: INIT_IFRAME_EVENT,
                data: await this.onIframeLoadedInitVariables(),
            }, this.iframeBaseUrl, [channel.port2]);
            await promise;
        };
    }
    /**
     * @internal
     */
    async call({ procedureName, params, showIframe = false, }) {
        while (!isIframeLoaded.get(this.iframe.src)) {
            await sleep(this.POLLING_INTERVAL_SECONDS);
        }
        if (showIframe) {
            this.iframe.style.display = "block";
            // magic number to let the display render before performing the animation of the modal in
            await sleep(0.005);
        }
        const channel = new MessageChannel();
        const promise = new Promise((res, rej) => {
            // biome-ignore lint/suspicious/noExplicitAny: TODO: fix later
            channel.port1.onmessage = async (event) => {
                const { data } = event;
                channel.port1.close();
                if (showIframe) {
                    // magic number to let modal fade out before hiding it
                    await sleep(0.1);
                    this.iframe.style.display = "none";
                }
                if (!data.success) {
                    rej(new Error(data.error));
                }
                else {
                    res(data.data);
                }
            };
        });
        this.iframe.contentWindow?.postMessage({ eventType: procedureName, data: params }, this.iframeBaseUrl, [channel.port2]);
        return promise;
    }
    /**
     * This has to be called by any iframe that will be removed from the DOM.
     * Use to make sure that we reset the global loaded state of the particular iframe.src
     * @internal
     */
    destroy() {
        isIframeLoaded.delete(this.iframe.src);
    }
}
//# sourceMappingURL=IframeCommunicator.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/utils/iFrameCommunication/InAppWalletIframeCommunicator.js



/**
 * @internal
 */
class InAppWalletIframeCommunicator extends IframeCommunicator {
    /**
     * @internal
     */
    constructor({ clientId, baseUrl, ecosystem, }) {
        super({
            iframeId: IN_APP_WALLET_IFRAME_ID + (ecosystem?.id || ""),
            link: createInAppWalletIframeLink({
                clientId,
                path: settings/* IN_APP_WALLET_PATH */.hD,
                ecosystem,
                baseUrl,
            }).href,
            baseUrl,
            container: document.body,
        });
        Object.defineProperty(this, "clientId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ecosystem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.clientId = clientId;
        this.ecosystem = ecosystem;
    }
    /**
     * @internal
     */
    async onIframeLoadedInitVariables() {
        const localStorage = new LocalStorage/* LocalStorage */.m({
            clientId: this.clientId,
            ecosystemId: this.ecosystem?.id,
        });
        return {
            authCookie: await localStorage.getAuthCookie(),
            deviceShareStored: await localStorage.getDeviceShare(),
            walletUserId: await localStorage.getWalletUserId(),
            clientId: this.clientId,
            partnerId: this.ecosystem?.partnerId,
            ecosystemId: this.ecosystem?.id,
        };
    }
}
// This is the URL and ID tag of the iFrame that we communicate with
/**
 * @internal
 */
function createInAppWalletIframeLink({ clientId, baseUrl, path, ecosystem, queryParams, }) {
    const inAppWalletUrl = new URL(`${path}`, baseUrl);
    if (queryParams) {
        for (const queryKey of Object.keys(queryParams)) {
            inAppWalletUrl.searchParams.set(queryKey, queryParams[queryKey]?.toString() || "");
        }
    }
    inAppWalletUrl.searchParams.set("clientId", clientId);
    if (ecosystem?.partnerId !== undefined) {
        inAppWalletUrl.searchParams.set("partnerId", ecosystem.partnerId);
    }
    if (ecosystem?.id !== undefined) {
        inAppWalletUrl.searchParams.set("ecosystemId", ecosystem.id);
    }
    return inAppWalletUrl;
}
const IN_APP_WALLET_IFRAME_ID = "thirdweb-in-app-wallet-iframe";
//# sourceMappingURL=InAppWalletIframeCommunicator.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/abstract-login.js
/**
 * @internal
 */
class AbstractLogin {
    /**
     * Used to manage the user's auth states. This should not be instantiated directly.
     * @internal
     */
    constructor({ baseUrl, querier, preLogin, postLogin, client, ecosystem, }) {
        Object.defineProperty(this, "LoginQuerier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "preLogin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "postLogin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "baseUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ecosystem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.baseUrl = baseUrl;
        this.LoginQuerier = querier;
        this.preLogin = preLogin;
        this.postLogin = postLogin;
        this.client = client;
        this.ecosystem = ecosystem;
    }
    /**
     * @internal
     */
    async sendEmailLoginOtp({ email, }) {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "sendThirdwebEmailLoginOtp",
            params: { email },
        });
        return result;
    }
    /**
     *
     * @internal
     */
    async sendSmsLoginOtp({ phoneNumber, }) {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "sendThirdwebSmsLoginOtp",
            params: { phoneNumber },
        });
        return result;
    }
}
//# sourceMappingURL=abstract-login.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/base-login.js
/* provided dependency */ var base_login_console = __webpack_require__(25108);


/**
 *
 */
class BaseLogin extends AbstractLogin {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "closeWindow", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ isWindowOpenedByFn, win, closeOpenedWindow, }) => {
                if (isWindowOpenedByFn) {
                    win?.close();
                }
                else {
                    if (win && closeOpenedWindow) {
                        closeOpenedWindow(win);
                    }
                    else if (win) {
                        win.close();
                    }
                }
            }
        });
    }
    async getOauthLoginUrl(authProvider) {
        try {
            const result = await this.LoginQuerier.call({
                procedureName: "getHeadlessOauthLoginLink",
                params: { authProvider },
            });
            return result;
        }
        catch (e) {
            base_login_console.error(e);
            throw e;
        }
    }
    /**
     * @internal
     */
    async loginWithModal() {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "loginWithThirdwebModal",
            params: undefined,
            showIframe: true,
        });
        return this.postLogin(result);
    }
    /**
     * @internal
     */
    async loginWithEmailOtp({ email, }) {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "loginWithThirdwebModal",
            params: { email },
            showIframe: true,
        });
        return this.postLogin(result);
    }
    getOauthPopUpSizing(authProvider) {
        switch (authProvider) {
            case type/* AuthProvider */.Ho.FACEBOOK:
                return "width=715, height=555";
            default:
                return "width=350, height=500";
        }
    }
    /**
     * @internal
     */
    async loginWithOauth(args) {
        let win = args?.openedWindow;
        let isWindowOpenedByFn = false;
        if (!win) {
            win = window.open("", "Login", this.getOauthPopUpSizing(args.oauthProvider));
            isWindowOpenedByFn = true;
        }
        if (!win) {
            throw new Error("Something went wrong opening pop-up");
        }
        // logout the user
        // fetch the url to open the login window from iframe
        const [{ loginLink }] = await Promise.all([
            this.getOauthLoginUrl(args.oauthProvider),
            this.preLogin(),
        ]);
        win.location.href = loginLink;
        // listen to result from the login window
        const result = await new Promise((resolve, reject) => {
            // detect when the user closes the login window
            const pollTimer = window.setInterval(async () => {
                if (!win) {
                    return;
                }
                if (win.closed) {
                    clearInterval(pollTimer);
                    window.removeEventListener("message", messageListener);
                    reject(new Error("User closed login window"));
                }
            }, 1000);
            const messageListener = async (event) => {
                if (event.origin !== this.baseUrl) {
                    return;
                }
                if (typeof event.data !== "object") {
                    reject(new Error("Invalid event data"));
                    return;
                }
                switch (event.data.eventType) {
                    case "userLoginSuccess": {
                        window.removeEventListener("message", messageListener);
                        clearInterval(pollTimer);
                        this.closeWindow({
                            isWindowOpenedByFn,
                            win,
                            closeOpenedWindow: args?.closeOpenedWindow,
                        });
                        if (event.data.authResult) {
                            resolve(event.data.authResult);
                        }
                        break;
                    }
                    case "userLoginFailed": {
                        window.removeEventListener("message", messageListener);
                        clearInterval(pollTimer);
                        this.closeWindow({
                            isWindowOpenedByFn,
                            win,
                            closeOpenedWindow: args?.closeOpenedWindow,
                        });
                        reject(new Error(event.data.error));
                        break;
                    }
                    case "injectDeveloperClientId": {
                        win?.postMessage({
                            eventType: "injectDeveloperClientIdResult",
                            developerClientId: this.client.clientId,
                            authOption: args.oauthProvider,
                            partnerId: this.ecosystem?.partnerId,
                            ecosystemId: this.ecosystem?.id,
                        }, this.baseUrl);
                        break;
                    }
                }
            };
            window.addEventListener("message", messageListener);
        });
        return this.postLogin({
            storedToken: { ...result.storedToken, shouldStoreCookieString: true },
            walletDetails: { ...result.walletDetails, isIframeStorageEnabled: false },
        });
    }
    /**
     * @internal
     */
    async loginWithCustomJwt({ encryptionKey, jwt, }) {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "loginWithCustomJwt",
            params: { encryptionKey, jwt },
        });
        return this.postLogin(result);
    }
    /**
     * @internal
     */
    async loginWithCustomAuthEndpoint({ encryptionKey, payload, }) {
        await this.preLogin();
        const result = await this.LoginQuerier.call({
            procedureName: "loginWithCustomAuthEndpoint",
            params: { encryptionKey, payload },
        });
        return this.postLogin(result);
    }
    /**
     * @internal
     */
    async verifyEmailLoginOtp({ email, otp, recoveryCode, }) {
        const result = await this.LoginQuerier.call({
            procedureName: "verifyThirdwebEmailLoginOtp",
            params: { email, otp, recoveryCode },
        });
        return this.postLogin(result);
    }
    /**
     * @internal
     */
    async verifySmsLoginOtp({ phoneNumber, otp, recoveryCode, }) {
        const result = await this.LoginQuerier.call({
            procedureName: "verifyThirdwebSmsLoginOtp",
            params: { phoneNumber, otp, recoveryCode },
        });
        return this.postLogin(result);
    }
}
//# sourceMappingURL=base-login.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/iframe-auth.js


/**
 *
 */
class Auth {
    /**
     * Used to manage the user's auth states. This should not be instantiated directly.
     * @internal
     */
    constructor({ client, querier, onAuthSuccess, ecosystem, baseUrl, }) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "AuthQuerier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localStorage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onAuthSuccess", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "BaseLogin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.client = client;
        this.AuthQuerier = querier;
        this.localStorage = new LocalStorage/* LocalStorage */.m({
            clientId: client.clientId,
            ecosystemId: ecosystem?.id,
        });
        this.onAuthSuccess = onAuthSuccess;
        this.BaseLogin = new BaseLogin({
            postLogin: async (result) => {
                return this.postLogin(result);
            },
            preLogin: async () => {
                await this.preLogin();
            },
            ecosystem,
            querier: querier,
            client,
            baseUrl,
        });
    }
    async preLogin() {
        await this.logout();
    }
    async postLogin({ storedToken, walletDetails, }) {
        if (storedToken.shouldStoreCookieString) {
            await this.localStorage.saveAuthCookie(storedToken.cookieString);
        }
        const initializedUser = await this.onAuthSuccess({
            storedToken,
            walletDetails,
        });
        return initializedUser;
    }
    async loginWithAuthToken(authToken, recoveryCode) {
        await this.preLogin();
        const result = await this.AuthQuerier.call({
            procedureName: "loginWithStoredTokenDetails",
            params: {
                storedToken: authToken.storedToken,
                recoveryCode,
            },
        });
        return this.postLogin(result);
    }
    /**
     * Used to log the user into their thirdweb wallet on your platform via a myriad of auth providers
     * @example
     * ```typescript
     * const thirdwebInAppWallet = new InAppWalletSdk({clientId: "YOUR_CLIENT_ID", chain: "Polygon"})
     * try {
     *   const user = await thirdwebInAppWallet.auth.loginWithModal();
     *   // user is now logged in
     * } catch (e) {
     *   // User closed modal or something else went wrong during the authentication process
     *   console.error(e)
     * }
     * ```
     * @returns `{{user: InitializedUser}}` An InitializedUser object.
     */
    async loginWithModal() {
        return this.BaseLogin.loginWithModal();
    }
    /**
     * Used to log the user into their thirdweb wallet using email OTP
     * @example
     * ```typescript
     *  // Basic Flow
     *  const thirdwebInAppWallet = new InAppWalletSdk({clientId: "", chain: "Polygon"});
     *  try {
     *    // prompts user to enter the code they received
     *    const user = await thirdwebInAppWallet.auth.loginWithThirdwebEmailOtp({ email : "you@example.com" });
     *    // user is now logged in
     *  } catch (e) {
     *    // User closed the OTP modal or something else went wrong during the authentication process
     *    console.error(e)
     *  }
     * ```
     * @param args - args.email: We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns `{{user: InitializedUser}}` An InitializedUser object. See {@link InAppWalletSdk.getUser} for more
     */
    async loginWithEmailOtp(args) {
        return this.BaseLogin.loginWithEmailOtp(args);
    }
    /**
     * @internal
     */
    async loginWithCustomJwt(args) {
        return this.BaseLogin.loginWithCustomJwt(args);
    }
    /**
     * @internal
     */
    async loginWithCustomAuthEndpoint(args) {
        return this.BaseLogin.loginWithCustomAuthEndpoint(args);
    }
    /**
     * @internal
     */
    async loginWithOauth(args) {
        return this.BaseLogin.loginWithOauth(args);
    }
    /**
     * A headless way to send the users at the passed email an OTP code.
     * You need to then call {@link Auth.verifyEmailLoginOtp} in order to complete the login process
     * @example
     * @param param0.email
     * ```typescript
     *  const thirdwebInAppWallet = new InAppWalletSdk({clientId: "", chain: "Polygon"});
     *  // sends user an OTP code
     * try {
     *    await thirdwebInAppWallet.auth.sendEmailLoginOtp({ email : "you@example.com" });
     * } catch(e) {
     *    // Error Sending user's email an OTP code
     *    console.error(e);
     * }
     *
     * // Then when your user is ready to verify their OTP
     * try {
     *    const user = await thirdwebInAppWallet.auth.verifyEmailLoginOtp({ email: "you@example.com", otp: "6-DIGIT_CODE_HERE" });
     * } catch(e) {
     *    // Error verifying the OTP code
     *    console.error(e)
     * }
     * ```
     * @param param0 - param0.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns `{{ isNewUser: boolean }}` IsNewUser indicates if the user is a new user to your platform
     * @internal
     */
    async sendEmailLoginOtp({ email, }) {
        return this.BaseLogin.sendEmailLoginOtp({
            email,
        });
    }
    /**
     * @internal
     */
    async sendSmsLoginOtp({ phoneNumber, }) {
        return this.BaseLogin.sendSmsLoginOtp({
            phoneNumber,
        });
    }
    /**
     * Used to verify the otp that the user receives from thirdweb
     *
     * See {@link Auth.sendEmailLoginOtp} for how the headless call flow looks like. Simply swap out the calls to `loginWithThirdwebEmailOtp` with `verifyThirdwebEmailLoginOtp`
     * @param args - props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * props.otp The code that the user received in their email
     * @returns `{{user: InitializedUser}}` An InitializedUser object containing the user's status, wallet, authDetails, and more
     * @internal
     */
    async verifyEmailLoginOtp(args) {
        return this.BaseLogin.verifyEmailLoginOtp(args);
    }
    /**
     * @internal
     */
    async verifySmsLoginOtp(args) {
        return this.BaseLogin.verifySmsLoginOtp(args);
    }
    /**
     * Logs any existing user out of their wallet.
     * @returns `{{success: boolean}}` true if a user is successfully logged out. false if there's no user currently logged in.
     * @internal
     */
    async logout() {
        const { success } = await this.AuthQuerier.call({
            procedureName: "logout",
            params: undefined,
        });
        const isRemoveAuthCookie = await this.localStorage.removeAuthCookie();
        const isRemoveUserId = await this.localStorage.removeWalletUserId();
        return {
            success: success || isRemoveAuthCookie || isRemoveUserId,
        };
    }
}
//# sourceMappingURL=iframe-auth.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/oauth.js + 1 modules
var oauth = __webpack_require__(59416);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/auth/passkeys.js + 7 modules
var passkeys = __webpack_require__(45182);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/chains/utils.js
var utils = __webpack_require__(95810);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/rpc/actions/eth_sendRawTransaction.js
/**
 * Sends a raw transaction to the Ethereum network.
 * @param request - The EIP1193 request function.
 * @param signedTransaction - The signed transaction in hex format.
 * @returns A promise that resolves to the transaction hash.
 * @rpc
 * @example
 * ```ts
 * import { getRpcClient, eth_sendRawTransaction } from "thirdweb/rpc";
 * const rpcRequest = getRpcClient({ client, chain });
 * const transactionHash = await eth_sendRawTransaction(rpcRequest, "0x...");
 * ```
 */
async function eth_sendRawTransaction(request, signedTransaction) {
    return await request({
        method: "eth_sendRawTransaction",
        params: [signedTransaction],
    });
}
//# sourceMappingURL=eth_sendRawTransaction.js.map
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/rpc/rpc.js + 1 modules
var rpc = __webpack_require__(98511);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/address.js
var utils_address = __webpack_require__(4159);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/encoding/hex.js
var hex = __webpack_require__(75403);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/signatures/helpers/parseTypedData.js
var parseTypedData = __webpack_require__(26485);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/ecosystem/get-ecosystem-partner-permissions.js

const getEcosystemPartnerPermissions = async (ecosystemId, partnerId) => {
    const res = await fetch(`${(0,domains/* getThirdwebBaseUrl */.TS)("inAppWallet")}/api/2024-05-05/ecosystem-wallet/${ecosystemId}/partner/${partnerId}`, {
        headers: {
            "x-ecosystem-id": ecosystemId,
            "x-ecosystem-partner-id": partnerId || "",
        },
    });
    const data = (await res.json());
    return data;
};
//# sourceMappingURL=get-ecosystem-partner-permissions.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/in-app-account.js










/**
 *
 */
class IFrameWallet {
    /**
     * Not meant to be initialized directly. Call {@link initializeUser} to get an instance
     * @internal
     */
    constructor({ client, ecosystem, querier, }) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ecosystem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "walletManagerQuerier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "localStorage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.client = client;
        this.ecosystem = ecosystem;
        this.walletManagerQuerier = querier;
        this.localStorage = new LocalStorage/* LocalStorage */.m({
            clientId: client.clientId,
            ecosystemId: ecosystem?.id,
        });
    }
    /**
     * Used to set-up the user device in the case that they are using incognito
     * @returns `{walletAddress : string }` The user's wallet details
     * @internal
     */
    async postWalletSetUp({ deviceShareStored, walletAddress, isIframeStorageEnabled, walletUserId, }) {
        if (!isIframeStorageEnabled) {
            await this.localStorage.saveDeviceShare(deviceShareStored, walletUserId);
        }
        return { walletAddress };
    }
    /**
     * Gets the various status states of the user
     * @example
     * ```typescript
     *  const userStatus = await Paper.getUserWalletStatus();
     *  switch (userStatus.status) {
     *  case UserWalletStatus.LOGGED_OUT: {
     *    // User is logged out, call one of the auth methods on Paper.auth to authenticate the user
     *    break;
     *  }
     *  case UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED: {
     *    // User is logged in, but does not have a wallet associated with it
     *    // you also have access to the user's details
     *    userStatus.user.authDetails;
     *    break;
     *  }
     *  case UserWalletStatus.LOGGED_IN_NEW_DEVICE: {
     *    // User is logged in and created a wallet already, but is missing the device shard
     *    // You have access to:
     *    userStatus.user.authDetails;
     *    userStatus.user.walletAddress;
     *    break;
     *  }
     *  case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED: {
     *    // user is logged in and wallet is all set up.
     *    // You have access to:
     *    userStatus.user.authDetails;
     *    userStatus.user.walletAddress;
     *    userStatus.user.wallet;
     *    break;
     *  }
     *}
     *```
     * @returns `{GetUserWalletStatusFnReturnType}` an object to containing various information on the user statuses
     * @internal
     */
    async getUserWalletStatus() {
        const userStatus = await this.walletManagerQuerier.call({
            procedureName: "getUserStatus",
            params: undefined,
        });
        if (userStatus.status === type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_INITIALIZED) {
            return {
                status: type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_INITIALIZED,
                ...userStatus.user,
                account: await this.getAccount(),
            };
        }
        if (userStatus.status === type/* UserWalletStatus */.Nx.LOGGED_IN_NEW_DEVICE) {
            return {
                status: type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_UNINITIALIZED,
                ...userStatus.user,
            };
        }
        if (userStatus.status === type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_UNINITIALIZED) {
            return {
                status: type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_UNINITIALIZED,
                ...userStatus.user,
            };
        }
        // Logged out
        return { status: userStatus.status };
    }
    /**
     * Returns an account that communicates with the iFrame for signing operations
     * @internal
     */
    async getAccount() {
        const querier = this
            .walletManagerQuerier;
        const client = this.client;
        const partnerId = this.ecosystem?.partnerId;
        const isEcosystem = !!this.ecosystem;
        const permissions = this.ecosystem?.partnerId
            ? await getEcosystemPartnerPermissions(this.ecosystem.id, this.ecosystem?.partnerId)
            : undefined;
        const { address } = await querier.call({
            procedureName: "getAddress",
            params: undefined,
        });
        const _signTransaction = async (tx) => {
            // biome-ignore lint/suspicious/noExplicitAny: ethers tx transformation
            const transaction = {
                to: tx.to ?? undefined,
                data: tx.data,
                value: tx.value,
                gasLimit: tx.gas,
                nonce: tx.nonce,
                chainId: tx.chainId,
            };
            if (tx.maxFeePerGas) {
                // ethers (in the iframe) rejects any type 0 trasaction with unknown keys
                // TODO remove this once iframe is upgraded to v5
                transaction.accessList = tx.accessList;
                transaction.maxFeePerGas = tx.maxFeePerGas;
                transaction.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
                transaction.type = 2;
            }
            else {
                transaction.gasPrice = tx.gasPrice;
                transaction.type = 0;
            }
            const RPC_URL = (0,domains/* getThirdwebDomains */.gc)().rpc;
            const { signedTransaction } = await querier.call({
                procedureName: "signTransaction",
                params: {
                    transaction,
                    chainId: tx.chainId,
                    partnerId,
                    rpcEndpoint: `https://${tx.chainId}.${RPC_URL}`, // TODO (ew) shouldnt be needed
                },
                // Can hide the iframe if the partner has full control (no user approvals)
                showIframe: permissions?.permissions.includes("FULL_CONTROL_V1")
                    ? false
                    : isEcosystem,
            });
            return signedTransaction;
        };
        return {
            address: (0,utils_address/* getAddress */.Kn)(address),
            async signTransaction(tx) {
                if (!tx.chainId) {
                    throw new Error("chainId required in tx to sign");
                }
                return _signTransaction({
                    ...tx,
                    chainId: tx.chainId,
                });
            },
            async sendTransaction(tx) {
                const rpcRequest = (0,rpc.getRpcClient)({
                    client,
                    chain: (0,utils/* getCachedChain */.XY)(tx.chainId),
                });
                const signedTx = await _signTransaction(tx);
                const transactionHash = await eth_sendRawTransaction(rpcRequest, signedTx);
                return {
                    transactionHash,
                };
            },
            async signMessage({ message }) {
                // in-app wallets use ethers to sign messages, which always expects a string (or bytes maybe but string is safest)
                const messageDecoded = (() => {
                    if (typeof message === "string") {
                        return message;
                    }
                    if (message.raw instanceof Uint8Array) {
                        return message.raw;
                    }
                    return (0,hex/* hexToString */.rR)(message.raw);
                })();
                const { signedMessage } = await querier.call({
                    procedureName: "signMessage",
                    params: {
                        // biome-ignore lint/suspicious/noExplicitAny: ethers tx transformation
                        message: messageDecoded, // needs bytes or string
                        partnerId,
                        chainId: 1, // TODO check if we need this
                    },
                    // Can hide the iframe if the partner has full control (no user approvals)
                    showIframe: permissions?.permissions.includes("FULL_CONTROL_V1")
                        ? false
                        : isEcosystem,
                });
                return signedMessage;
            },
            async signTypedData(_typedData) {
                const parsedTypedData = (0,parseTypedData/* parseTypedData */.t)(_typedData);
                // deleting EIP712 Domain as it results in ambiguous primary type on some cases
                // this happens when going from viem to ethers via the iframe
                if (parsedTypedData.types?.EIP712Domain) {
                    parsedTypedData.types.EIP712Domain = undefined;
                }
                const domain = parsedTypedData.domain;
                const chainId = domain?.chainId;
                const domainData = {
                    verifyingContract: domain?.verifyingContract,
                    name: domain?.name,
                    version: domain?.version,
                };
                // chain id can't be included if it wasn't explicitly specified
                if (chainId) {
                    domainData.chainId = chainId;
                }
                const RPC_URL = (0,domains/* getThirdwebDomains */.gc)().rpc;
                const { signedTypedData } = await querier.call({
                    procedureName: "signTypedDataV4",
                    params: {
                        domain: domainData,
                        types: parsedTypedData.types,
                        message: parsedTypedData.message,
                        chainId: chainId || 1,
                        partnerId,
                        rpcEndpoint: `https://${chainId}.${RPC_URL}`, // TODO (ew) shouldnt be needed
                    },
                    // Can hide the iframe if the partner has full control (no user approvals)
                    showIframe: permissions?.permissions.includes("FULL_CONTROL_V1")
                        ? false
                        : isEcosystem,
                });
                return signedTypedData;
            },
        };
    }
}
//# sourceMappingURL=in-app-account.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/wallets/in-app/web/lib/web-connector.js







/**
 * @internal
 */
class InAppWebConnector {
    isClientIdLegacyPaper(clientId) {
        if (clientId.indexOf("-") > 0 && clientId.length === 36) {
            return true;
        }
        return false;
    }
    /**
     * @example
     * `const thirdwebInAppWallet = new InAppWalletSdk({ clientId: "", chain: "Goerli" });`
     * @internal
     */
    constructor({ client, onAuthSuccess, ecosystem, }) {
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "querier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "wallet", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Used to manage the Auth state of the user.
         */
        Object.defineProperty(this, "auth", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (this.isClientIdLegacyPaper(client.clientId)) {
            throw new Error("You are using a legacy clientId. Please use the clientId found on the thirdweb dashboard settings page");
        }
        const baseUrl = (0,domains/* getThirdwebBaseUrl */.TS)("inAppWallet");
        this.client = client;
        this.querier = new InAppWalletIframeCommunicator({
            clientId: client.clientId,
            ecosystem,
            baseUrl,
        });
        this.wallet = new IFrameWallet({
            client,
            ecosystem,
            querier: this.querier,
        });
        this.auth = new Auth({
            client,
            querier: this.querier,
            baseUrl,
            ecosystem,
            onAuthSuccess: async (authResult) => {
                onAuthSuccess?.(authResult);
                await this.wallet.postWalletSetUp({
                    ...authResult.walletDetails,
                    walletUserId: authResult.storedToken.authDetails.userWalletId,
                });
                await this.querier.call({
                    procedureName: "initIframe",
                    params: {
                        partnerId: ecosystem?.partnerId,
                        ecosystemId: ecosystem?.id,
                        deviceShareStored: authResult.walletDetails.deviceShareStored,
                        clientId: this.client.clientId,
                        walletUserId: authResult.storedToken.authDetails.userWalletId,
                        authCookie: authResult.storedToken.cookieString,
                    },
                });
                return {
                    user: {
                        status: type/* UserWalletStatus */.Nx.LOGGED_IN_WALLET_INITIALIZED,
                        authDetails: authResult.storedToken.authDetails,
                        account: await this.wallet.getAccount(),
                        walletAddress: authResult.walletDetails.walletAddress,
                    },
                };
            },
        });
    }
    /**
     * Gets the usr if they are logged in
     * @example
     * ```js
     *  const user = await thirdwebInAppWallet.getUser();
     *  switch (user.status) {
     *     case UserWalletStatus.LOGGED_OUT: {
     *       // User is logged out, call one of the auth methods on thirdwebInAppWallet.auth to authenticate the user
     *       break;
     *     }
     *     case UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED: {
     *       // user is logged in and wallet is all set up.
     *       // You have access to:
     *       user.status;
     *       user.authDetails;
     *       user.walletAddress;
     *       user.wallet;
     *       break;
     *     }
     * }
     * ```
     * @returns GetUser - an object to containing various information on the user statuses
     */
    async getUser() {
        return this.wallet.getUserWalletStatus();
    }
    getAccount() {
        return this.wallet.getAccount();
    }
    async preAuthenticate(args) {
        const strategy = args.strategy;
        switch (strategy) {
            case "email": {
                return this.auth.sendEmailLoginOtp({ email: args.email });
            }
            case "phone": {
                return this.auth.sendSmsLoginOtp({ phoneNumber: args.phoneNumber });
            }
            default:
                assertUnreachable(strategy, `Provider: ${strategy} doesn't require pre-authentication`);
        }
    }
    authenticateWithRedirect(strategy) {
        (0,oauth/* loginWithOauthRedirect */.Z)({
            authOption: strategy,
            client: this.wallet.client,
            ecosystem: this.wallet.ecosystem,
        });
    }
    async loginWithAuthToken(authResult) {
        return this.auth.loginWithAuthToken(authResult);
    }
    async authenticate(args) {
        const strategy = args.strategy;
        switch (strategy) {
            case "email": {
                return await this.auth.verifyEmailLoginOtp({
                    email: args.email,
                    otp: args.verificationCode,
                });
            }
            case "phone": {
                return await this.auth.verifySmsLoginOtp({
                    otp: args.verificationCode,
                    phoneNumber: args.phoneNumber,
                });
            }
            case "jwt": {
                return this.auth.loginWithCustomJwt({
                    jwt: args.jwt,
                    encryptionKey: args.encryptionKey,
                });
            }
            case "auth_endpoint": {
                return this.auth.loginWithCustomAuthEndpoint({
                    payload: args.payload,
                    encryptionKey: args.encryptionKey,
                });
            }
            case "iframe_email_verification": {
                return this.auth.loginWithEmailOtp({
                    email: args.email,
                });
            }
            case "iframe": {
                return this.auth.loginWithModal();
            }
            case "passkey": {
                if (args.type === "sign-up") {
                    const authToken = await (0,passkeys/* registerPasskey */.XP)({
                        client: this.wallet.client,
                        ecosystem: this.wallet.ecosystem,
                        authenticatorType: args.authenticatorType,
                        username: args.passkeyName,
                    });
                    return this.loginWithAuthToken(authToken);
                }
                const authToken = await (0,passkeys/* loginWithPasskey */.OF)({
                    client: this.wallet.client,
                    ecosystem: this.wallet.ecosystem,
                    authenticatorType: args.authenticatorType,
                });
                return this.loginWithAuthToken(authToken);
            }
            case "apple":
            case "facebook":
            case "google":
            case "farcaster":
            case "discord": {
                const authToken = await (0,oauth/* loginWithOauth */.f)({
                    authOption: strategy,
                    client: this.wallet.client,
                    ecosystem: this.wallet.ecosystem,
                    closeOpenedWindow: args.closeOpenedWindow,
                    openedWindow: args.openedWindow,
                });
                return this.loginWithAuthToken(authToken);
            }
            default:
                assertUnreachable(strategy);
        }
    }
    async logout() {
        return await this.auth.logout();
    }
}
function assertUnreachable(x, message) {
    throw new Error(message ?? `Invalid param: ${x}`);
}
//# sourceMappingURL=web-connector.js.map

/***/ })

};
;