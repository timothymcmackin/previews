"use strict";
exports.id = 85810;
exports.ids = [85810];
exports.modules = {

/***/ 85810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uploadBatch: () => (/* binding */ uploadBatch)
/* harmony export */ });
/* harmony import */ var _utils_domains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88615);
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99910);


async function uploadBatch(client, form, fileNames, options) {
    const headers = {};
    const res = await (0,_utils_fetch_js__WEBPACK_IMPORTED_MODULE_0__/* .getClientFetch */ .NX)(client)(`https://${(0,_utils_domains_js__WEBPACK_IMPORTED_MODULE_1__/* .getThirdwebDomains */ .gc)().storage}/ipfs/upload`, {
        method: "POST",
        headers: {
            ...headers,
            // ...form.getHeaders(),
        },
        body: form,
    });
    if (!res.ok) {
        res.body?.cancel();
        if (res.status === 401) {
            throw new Error("Unauthorized - You don't have permission to use this service.");
        }
        throw new Error(`Failed to upload files to IPFS - ${res.status} - ${res.statusText}`);
    }
    const body = await res.json();
    const cid = body.IpfsHash;
    if (!cid) {
        throw new Error("Failed to upload files to IPFS - Bad CID");
    }
    if (options?.uploadWithoutDirectory) {
        return [`ipfs://${cid}`];
    }
    return fileNames.map((name) => `ipfs://${cid}/${name}`);
}
//# sourceMappingURL=web-node.js.map

/***/ })

};
;