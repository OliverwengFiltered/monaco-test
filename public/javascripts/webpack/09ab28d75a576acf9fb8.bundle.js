"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_java_java_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/java/java.ts\nvar conf = {\n  wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"<\", close: \">\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))\"),\n      end: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".java\",\n  keywords: [\n    \"abstract\",\n    \"continue\",\n    \"for\",\n    \"new\",\n    \"switch\",\n    \"assert\",\n    \"default\",\n    \"goto\",\n    \"package\",\n    \"synchronized\",\n    \"boolean\",\n    \"do\",\n    \"if\",\n    \"private\",\n    \"this\",\n    \"break\",\n    \"double\",\n    \"implements\",\n    \"protected\",\n    \"throw\",\n    \"byte\",\n    \"else\",\n    \"import\",\n    \"public\",\n    \"throws\",\n    \"case\",\n    \"enum\",\n    \"instanceof\",\n    \"return\",\n    \"transient\",\n    \"catch\",\n    \"extends\",\n    \"int\",\n    \"short\",\n    \"try\",\n    \"char\",\n    \"final\",\n    \"interface\",\n    \"static\",\n    \"void\",\n    \"class\",\n    \"finally\",\n    \"long\",\n    \"strictfp\",\n    \"volatile\",\n    \"const\",\n    \"float\",\n    \"native\",\n    \"super\",\n    \"while\",\n    \"true\",\n    \"false\",\n    \"yield\",\n    \"record\",\n    \"sealed\",\n    \"non-sealed\",\n    \"permits\"\n  ],\n  operators: [\n    \"=\",\n    \">\",\n    \"<\",\n    \"!\",\n    \"~\",\n    \"?\",\n    \":\",\n    \"==\",\n    \"<=\",\n    \">=\",\n    \"!=\",\n    \"&&\",\n    \"||\",\n    \"++\",\n    \"--\",\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"&\",\n    \"|\",\n    \"^\",\n    \"%\",\n    \"<<\",\n    \">>\",\n    \">>>\",\n    \"+=\",\n    \"-=\",\n    \"*=\",\n    \"/=\",\n    \"&=\",\n    \"|=\",\n    \"^=\",\n    \"%=\",\n    \"<<=\",\n    \">>=\",\n    \">>>=\"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  digits: /\\d+(_+\\d+)*/,\n  octaldigits: /[0-7]+(_+[0-7]+)*/,\n  binarydigits: /[0-1]+(_+[0-1]+)*/,\n  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n  tokenizer: {\n    root: [\n      [\"non-sealed\", \"keyword.non-sealed\"],\n      [\n        /[a-zA-Z_$][\\w$]*/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword.$0\" },\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/[<>](?!@symbols)/, \"@brackets\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, \"annotation\"],\n      [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, \"number.float\"],\n      [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, \"number.float\"],\n      [/0[xX](@hexdigits)[Ll]?/, \"number.hex\"],\n      [/0(@octaldigits)[Ll]?/, \"number.octal\"],\n      [/0[bB](@binarydigits)[Ll]?/, \"number.binary\"],\n      [/(@digits)[fFdD]/, \"number.float\"],\n      [/(@digits)[lL]?/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"\"\"/, \"string\", \"@multistring\"],\n      [/\"/, \"string\", \"@string\"],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/\\/\\*\\*(?!\\/)/, \"comment.doc\", \"@javadoc\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    javadoc: [\n      [/[^\\/*]+/, \"comment.doc\"],\n      [/\\/\\*/, \"comment.doc.invalid\"],\n      [/\\*\\//, \"comment.doc\", \"@pop\"],\n      [/[\\/*]/, \"comment.doc\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, \"string\", \"@pop\"]\n    ],\n    multistring: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"\"\"/, \"string\", \"@pop\"],\n      [/./, \"string\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/java/java.js?");

/***/ })

}]);