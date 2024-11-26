"use strict";
exports.id = 31445;
exports.ids = [31445];
exports.modules = {

/***/ 31445:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hashMessage: () => (/* binding */ hashMessage)
/* harmony export */ });
/* harmony import */ var viem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57040);
/* harmony import */ var _encoding_to_bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24951);
/* harmony import */ var _keccak256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96378);



const presignMessagePrefix = "\x19Ethereum Signed Message:\n";
/**
 * Ethereum Signed Message hashing
 * @param message - The message to hash, either as a string, a Uint8Array, or an object with a `raw` property containing a Uint8Array.
 * @param to_ - The desired output format of the hash (optional). Defaults to 'hex'.
 * @example
 * ```ts
 * import { hashMessage } from "thirdweb/utils";
 * const hash = hashMessage("hello world");
 * ```
 * @returns The Ethereum Signed Message hash of the message in the specified format.
 * @utils
 */
function hashMessage(message, to_) {
    const messageBytes = (() => {
        if (typeof message === "string") {
            return (0,_encoding_to_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToBytes */ .qX)(message);
        }
        if (message.raw instanceof Uint8Array) {
            return message.raw;
        }
        return (0,_encoding_to_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .toBytes */ .O0)(message.raw);
    })();
    const prefixBytes = (0,_encoding_to_bytes_js__WEBPACK_IMPORTED_MODULE_0__/* .stringToBytes */ .qX)(`${presignMessagePrefix}${messageBytes.length}`);
    return (0,_keccak256_js__WEBPACK_IMPORTED_MODULE_1__/* .keccak256 */ .w)((0,viem__WEBPACK_IMPORTED_MODULE_2__/* .concat */ .zo)([prefixBytes, messageBytes]), to_);
}
//# sourceMappingURL=hashMessage.js.map

/***/ })

};
;