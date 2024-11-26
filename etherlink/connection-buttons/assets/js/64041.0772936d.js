"use strict";
exports.id = 64041;
exports.ids = [64041];
exports.modules = {

/***/ 64041:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  signLoginPayload: () => (/* binding */ signLoginPayload)
});

;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/auth/core/create-login-message.js
/**
 * Create an EIP-4361 & CAIP-122 compliant message to sign based on the login payload
 * @param payload - The login payload containing the necessary information.
 * @returns The generated login message.
 * @internal
 */
function createLoginMessage(payload) {
    const typeField = "Ethereum";
    const header = `${payload.domain} wants you to sign in with your ${typeField} account:`;
    let prefix = [header, payload.address].join("\n");
    prefix = [prefix, payload.statement].join("\n\n");
    if (payload.statement) {
        prefix += "\n";
    }
    const suffixArray = [];
    if (payload.uri) {
        const uriField = `URI: ${payload.uri}`;
        suffixArray.push(uriField);
    }
    const versionField = `Version: ${payload.version}`;
    suffixArray.push(versionField);
    if (payload.chain_id) {
        const chainField = `Chain ID: ${payload.chain_id}` || "1";
        suffixArray.push(chainField);
    }
    const nonceField = `Nonce: ${payload.nonce}`;
    suffixArray.push(nonceField);
    const issuedAtField = `Issued At: ${payload.issued_at}`;
    suffixArray.push(issuedAtField);
    const expiryField = `Expiration Time: ${payload.expiration_time}`;
    suffixArray.push(expiryField);
    if (payload.invalid_before) {
        const invalidBeforeField = `Not Before: ${payload.invalid_before}`;
        suffixArray.push(invalidBeforeField);
    }
    if (payload.resources) {
        suffixArray.push(["Resources:", ...payload.resources.map((x) => `- ${x}`)].join("\n"));
    }
    const suffix = suffixArray.join("\n");
    return [prefix, suffix].join("\n");
}
//# sourceMappingURL=create-login-message.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/auth/core/sign-login-payload.js

/**
 * Signs the login payload using the provided account.
 * @param options - The options for signing the login payload.
 * @returns An object containing the signature and the payload.
 * @example
 * ```ts
 * import { signLoginPayload } from 'thirdweb/auth';
 *
 * const { signature, payload } = await signLoginPayload({
 *  payload: loginPayload,
 *  account: account,
 * });
 * ```
 * @auth
 */
async function signLoginPayload(options) {
    const { payload, account } = options;
    const signature = await account.signMessage({
        message: createLoginMessage(payload),
    });
    return {
        signature,
        payload,
    };
}
//# sourceMappingURL=sign-login-payload.js.map

/***/ })

};
;