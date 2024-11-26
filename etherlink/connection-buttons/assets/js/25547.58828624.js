"use strict";
exports.id = 25547;
exports.ids = [25547];
exports.modules = {

/***/ 25547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  upload: () => (/* binding */ upload)
});

// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/detect-platform.js
var detect_platform = __webpack_require__(46126);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/json.js
var json = __webpack_require__(75100);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/type-guards.js
var type_guards = __webpack_require__(96033);
// EXTERNAL MODULE: ./node_modules/thirdweb/dist/esm/utils/uint8-array.js
var uint8_array = __webpack_require__(54507);
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/storage/upload/helpers.js
/* provided dependency */ var console = __webpack_require__(25108);


/**
 * @internal
 */
function isFileInstance(data) {
    return globalThis.File && data instanceof File;
}
/**
 * @internal
 */
function isBufferOrStringWithName(data) {
    if (!data) {
        return false;
    }
    if (!(0,type_guards/* isObjectWithKeys */.L)(data, ["data", "name"])) {
        return false;
    }
    return !!(typeof data.name === "string" &&
        (typeof data.data === "string" || (0,uint8_array/* isUint8Array */.lq)(data.data)));
}
function isFileBufferOrStringEqual(input1, input2) {
    if (isFileInstance(input1) && isFileInstance(input2)) {
        // if both are File types, compare the name, size, and last modified date (best guess that these are the same files)
        if (input1.name === input2.name &&
            input1.lastModified === input2.lastModified &&
            input1.size === input2.size) {
            return true;
        }
    }
    else if ((0,uint8_array/* isUint8Array */.lq)(input1) && (0,uint8_array/* isUint8Array */.lq)(input2)) {
        // buffer gives us an easy way to compare the contents!
        return (0,uint8_array/* areUint8ArraysEqual */.AY)(input1, input2);
    }
    else if (isBufferOrStringWithName(input1) &&
        isBufferOrStringWithName(input2)) {
        // first check the names
        if (input1.name === input2.name) {
            // if the data for both is a string, compare the strings
            if (typeof input1.data === "string" && typeof input2.data === "string") {
                return input1.data === input2.data;
            }
            if ((0,uint8_array/* isUint8Array */.lq)(input1.data) && (0,uint8_array/* isUint8Array */.lq)(input2.data)) {
                // otherwise we know it's buffers, so compare the buffers
                return (0,uint8_array/* areUint8ArraysEqual */.AY)(input1.data, input2.data);
            }
        }
    }
    // otherwise if we have not found a match, return false
    return false;
}
function buildFormData(form, files, options) {
    const fileNameToFileMap = new Map();
    const fileNames = [];
    for (let i = 0; i < files.length; i++) {
        // biome-ignore lint/style/noNonNullAssertion: we know that files[i] is not null or undefined because we are iterating over the array
        const file = files[i];
        let fileName = "";
        let fileData = file;
        if (isFileInstance(file)) {
            if (options?.rewriteFileNames) {
                let extensions = "";
                if (file.name) {
                    const extensionStartIndex = file.name.lastIndexOf(".");
                    if (extensionStartIndex > -1) {
                        extensions = file.name.substring(extensionStartIndex);
                    }
                }
                fileName = `${i + options.rewriteFileNames.fileStartNumber}${extensions}`;
            }
            else {
                fileName = `${file.name}`;
            }
        }
        else if (isBufferOrStringWithName(file)) {
            fileData = file.data;
            if (options?.rewriteFileNames) {
                fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
            }
            else {
                fileName = `${file.name}`;
            }
        }
        else {
            if (options?.rewriteFileNames) {
                fileName = `${i + options.rewriteFileNames.fileStartNumber}`;
            }
            else {
                fileName = `${i}`;
            }
        }
        // If we don't want to wrap with directory, adjust the filepath
        const filepath = options?.uploadWithoutDirectory
            ? "files"
            : `files/${fileName}`;
        if (fileNameToFileMap.has(fileName)) {
            // if the file in the map is the same as the file we are already looking at then just skip and continue
            if (isFileBufferOrStringEqual(fileNameToFileMap.get(fileName), file)) {
                // we add it to the filenames array so that we can return the correct number of urls,
                fileNames.push(fileName);
                // but then we skip because we don't need to upload it multiple times
                continue;
            }
            // otherwise if file names are the same but they are not the same file then we should throw an error (trying to upload to differnt files but with the same names)
            throw new Error(`[DUPLICATE_FILE_NAME_ERROR] File name ${fileName} was passed for more than one different file.`);
        }
        // add it to the map so that we can check for duplicates
        fileNameToFileMap.set(fileName, file);
        // add it to the filenames array so that we can return the correct number of urls
        fileNames.push(fileName);
        form.append("file", new Blob([fileData]), filepath);
    }
    const metadata = {
        name: "Storage SDK",
        keyvalues: { ...options?.metadata },
    };
    form.append("pinataMetadata", JSON.stringify(metadata));
    if (options?.uploadWithoutDirectory) {
        form.append("pinataOptions", JSON.stringify({
            wrapWithDirectory: false,
        }));
    }
    return {
        form,
        // encode the file names on the way out (which is what the upload backend expects)
        fileNames: fileNames.map((fName) => encodeURIComponent(fName)),
    };
}
function isFileOrUint8Array(data) {
    return (isFileInstance(data) || (0,uint8_array/* isUint8Array */.lq)(data) || isBufferOrStringWithName(data));
}
/**
 * @internal
 */
function extractObjectFiles(data, files = []) {
    // If item is a FileOrBuffer add it to our list of files
    if (isFileOrUint8Array(data)) {
        files.push(data);
        return files;
    }
    if (typeof data === "object") {
        if (!data) {
            return files;
        }
        if (Array.isArray(data)) {
            for (const entry of data) {
                extractObjectFiles(entry, files);
            }
        }
        else {
            Object.keys(data).map((key) => extractObjectFiles(data[key], files));
        }
    }
    return files;
}
/**
 * @internal
 */
function replaceObjectFilesWithUris(data, uris) {
    if (isFileOrUint8Array(data)) {
        if (uris.length) {
            return uris.shift();
        }
        console.warn("Not enough URIs to replace all files in object.");
    }
    if (typeof data === "object") {
        if (!data) {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map((entry) => replaceObjectFilesWithUris(entry, uris));
        }
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [
            key,
            replaceObjectFilesWithUris(value, uris),
        ]));
    }
    return data;
}
/**
 * @internal
 */
function replaceGatewayUrlWithScheme(url) {
    if (url.includes("/ipfs/")) {
        const hash = url.split("/ipfs/")[1];
        return `ipfs://${hash}`;
    }
    return url;
}
/**
 * @internal
 */
function replaceObjectGatewayUrlsWithSchemes(data) {
    if (typeof data === "string") {
        return replaceGatewayUrlWithScheme(data);
    }
    if (typeof data === "object") {
        if (!data) {
            return data;
        }
        if (isFileOrUint8Array(data)) {
            return data;
        }
        if (Array.isArray(data)) {
            return data.map((entry) => replaceObjectGatewayUrlsWithSchemes(entry));
        }
        return Object.fromEntries(Object.entries(data).map(([key, value]) => [
            key,
            replaceObjectGatewayUrlsWithSchemes(value),
        ]));
    }
    return data;
}
//# sourceMappingURL=helpers.js.map
;// CONCATENATED MODULE: ./node_modules/thirdweb/dist/esm/storage/upload.js



/**
 * Uploads files based on the provided options.
 * @param options - The upload options.
 * @returns A promise that resolves to the uploaded file URI or URIs (when passing multiple files).
 * @throws An error if the upload fails.
 * @example
 * ```ts
 * import { upload } from "thirdweb/storage";
 * const uri = await upload({
 *  client,
 *  files: [
 *    new File(["hello world"], "hello.txt"),
 *  ],
 * });
 * ```
 * @storage
 */
async function upload(options) {
    // deal with the differnt file types
    // if there are no files, return an empty array immediately
    if (options.files.length === 0) {
        return null;
    }
    // handle file arrays
    const isFileArray = options.files
        .map((item) => isFileOrUint8Array(item) || typeof item === "string")
        .every((item) => !!item);
    let uris;
    if (isFileArray) {
        // if we already have an array of files, we can just pass it through
        uris = options.files;
    }
    else {
        // otherwise we have to process them first
        let cleaned = options.files;
        // Replace any gateway URLs with their hashes
        cleaned = replaceObjectGatewayUrlsWithSchemes(cleaned);
        // Recurse through data and extract files to upload
        const files = extractObjectFiles(cleaned);
        if (files.length) {
            // Upload all files that came from the object
            const uris_ = await upload({ ...options, files });
            // Recurse through data and replace files with hashes
            cleaned = replaceObjectFilesWithUris(cleaned, 
            // always pass an array even if the underlying upload returns a single uri
            Array.isArray(uris_) ? uris_ : [uris_]);
        }
        uris = cleaned.map((item) => {
            if (typeof item === "string") {
                return item;
            }
            return (0,json/* stringify */.P)(item);
        });
    }
    // end deal with the differnt file types
    const form_ = new FormData();
    const { fileNames, form } = buildFormData(form_, uris, options);
    const platform = (0,detect_platform/* detectPlatform */.t)();
    if (platform === "browser" || platform === "node") {
        const { uploadBatch } = await __webpack_require__.e(/* import() */ 85810).then(__webpack_require__.bind(__webpack_require__, 85810));
        const uris = await uploadBatch(options.client, form, fileNames, options);
        // if we only passed a single file, return its URI directly
        if (options.files.length === 1) {
            return uris[0];
        }
        return uris;
    }
    throw new Error("Please, use the uploadMobile function in mobile environments.");
}
//# sourceMappingURL=upload.js.map

/***/ })

};
;