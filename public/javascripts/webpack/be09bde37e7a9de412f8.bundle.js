"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_vscode_override_iconv_js"],{

/***/ "./node_modules/vscode/override/iconv.js":
/*!***********************************************!*\
  !*** ./node_modules/vscode/override/iconv.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   decode: () => (/* binding */ decode),\n/* harmony export */   encode: () => (/* binding */ encode),\n/* harmony export */   encodingExists: () => (/* binding */ encodingExists),\n/* harmony export */   getDecoder: () => (/* binding */ getDecoder),\n/* harmony export */   getEncoder: () => (/* binding */ getEncoder)\n/* harmony export */ });\nconst textDecoder = new TextEncoder();\nconst textEncoder = new TextDecoder();\nconst encoder = {\n    write(str) {\n        return textDecoder.encode(str);\n    },\n    end() {\n        return undefined;\n    }\n};\nconst decoder = {\n    write(str) {\n        return textEncoder.decode(str);\n    },\n    end() {\n        return undefined;\n    }\n};\nfunction checkEncoding(encoding) {\n    if (!encodingExists(encoding)) {\n        throw new Error(`Encoding not found: ${encoding}`);\n    }\n}\nconst getEncoder = (encoding) => {\n    checkEncoding(encoding);\n    return encoder;\n};\nconst getDecoder = (encoding) => {\n    checkEncoding(encoding);\n    return decoder;\n};\nconst encodingExists = (encoding) => {\n    return encoding === 'utf8';\n};\nconst decode = (buffer, encoding) => {\n    checkEncoding(encoding);\n    return decoder.write(buffer);\n};\nconst encode = (buffer, encoding) => {\n    checkEncoding(encoding);\n    return encoder.write(buffer);\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/vscode/override/iconv.js?");

/***/ })

}]);