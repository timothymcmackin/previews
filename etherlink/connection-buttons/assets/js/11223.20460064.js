"use strict";
exports.id = 11223;
exports.ids = [11223];
exports.modules = {

/***/ 11223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   concatHex: () => (/* binding */ concatHex)
/* harmony export */ });
/**
 * Concatenates an array of hexadecimal values into a single hexadecimal value.
 *
 * @param values - An array of hexadecimal values to concatenate.
 * @returns The concatenated hexadecimal value.
 * @utils
 */
function concatHex(values) {
    return `0x${values.reduce((acc, x) => acc + x.replace("0x", ""), "")}`;
}
//# sourceMappingURL=concat-hex.js.map

/***/ })

};
;