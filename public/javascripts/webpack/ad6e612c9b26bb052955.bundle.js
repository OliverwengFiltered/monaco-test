"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_sophia_sophia_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/sophia/sophia.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"],\n    [\"<\", \">\"]\n  ],\n  autoClosingPairs: [\n    { open: '\"', close: '\"', notIn: [\"string\", \"comment\"] },\n    { open: \"{\", close: \"}\", notIn: [\"string\", \"comment\"] },\n    { open: \"[\", close: \"]\", notIn: [\"string\", \"comment\"] },\n    { open: \"(\", close: \")\", notIn: [\"string\", \"comment\"] }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".aes\",\n  brackets: [\n    { token: \"delimiter.curly\", open: \"{\", close: \"}\" },\n    { token: \"delimiter.parenthesis\", open: \"(\", close: \")\" },\n    { token: \"delimiter.square\", open: \"[\", close: \"]\" },\n    { token: \"delimiter.angle\", open: \"<\", close: \">\" }\n  ],\n  keywords: [\n    \"contract\",\n    \"library\",\n    \"entrypoint\",\n    \"function\",\n    \"stateful\",\n    \"state\",\n    \"hash\",\n    \"signature\",\n    \"tuple\",\n    \"list\",\n    \"address\",\n    \"string\",\n    \"bool\",\n    \"int\",\n    \"record\",\n    \"datatype\",\n    \"type\",\n    \"option\",\n    \"oracle\",\n    \"oracle_query\",\n    \"Call\",\n    \"Bits\",\n    \"Bytes\",\n    \"Oracle\",\n    \"String\",\n    \"Crypto\",\n    \"Address\",\n    \"Auth\",\n    \"Chain\",\n    \"None\",\n    \"Some\",\n    \"bits\",\n    \"bytes\",\n    \"event\",\n    \"let\",\n    \"map\",\n    \"private\",\n    \"public\",\n    \"true\",\n    \"false\",\n    \"var\",\n    \"if\",\n    \"else\",\n    \"throw\"\n  ],\n  operators: [\n    \"=\",\n    \">\",\n    \"<\",\n    \"!\",\n    \"~\",\n    \"?\",\n    \"::\",\n    \":\",\n    \"==\",\n    \"<=\",\n    \">=\",\n    \"!=\",\n    \"&&\",\n    \"||\",\n    \"++\",\n    \"--\",\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"&\",\n    \"|\",\n    \"^\",\n    \"%\",\n    \"<<\",\n    \">>\",\n    \">>>\",\n    \"+=\",\n    \"-=\",\n    \"*=\",\n    \"/=\",\n    \"&=\",\n    \"|=\",\n    \"^=\",\n    \"%=\",\n    \"<<=\",\n    \">>=\",\n    \">>>=\"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,\n  floatsuffix: /[fFlL]?/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword.$0\" },\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/\\[\\[.*\\]\\]/, \"annotation\"],\n      [/^\\s*#\\w+/, \"keyword\"],\n      [/int\\d*/, \"keyword\"],\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/[<>](?!@symbols)/, \"@brackets\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, \"number.float\"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, \"number.float\"],\n      [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, \"number.hex\"],\n      [/0[0-7']*[0-7](@integersuffix)/, \"number.octal\"],\n      [/0[bB][0-1']*[0-1](@integersuffix)/, \"number.binary\"],\n      [/\\d[\\d']*\\d(@integersuffix)/, \"number\"],\n      [/\\d(@integersuffix)/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, \"string\", \"@string\"],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/\\/\\*\\*(?!\\/)/, \"comment.doc\", \"@doccomment\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    doccomment: [\n      [/[^\\/*]+/, \"comment.doc\"],\n      [/\\*\\//, \"comment.doc\", \"@pop\"],\n      [/[\\/*]/, \"comment.doc\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, \"string\", \"@pop\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/sophia/sophia.js?");

/***/ })

}]);