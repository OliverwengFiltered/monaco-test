"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_go_go_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/go/go.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"`\", close: \"`\", notIn: [\"string\"] },\n    { open: '\"', close: '\"', notIn: [\"string\"] },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"`\", close: \"`\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".go\",\n  keywords: [\n    \"break\",\n    \"case\",\n    \"chan\",\n    \"const\",\n    \"continue\",\n    \"default\",\n    \"defer\",\n    \"else\",\n    \"fallthrough\",\n    \"for\",\n    \"func\",\n    \"go\",\n    \"goto\",\n    \"if\",\n    \"import\",\n    \"interface\",\n    \"map\",\n    \"package\",\n    \"range\",\n    \"return\",\n    \"select\",\n    \"struct\",\n    \"switch\",\n    \"type\",\n    \"var\",\n    \"bool\",\n    \"true\",\n    \"false\",\n    \"uint8\",\n    \"uint16\",\n    \"uint32\",\n    \"uint64\",\n    \"int8\",\n    \"int16\",\n    \"int32\",\n    \"int64\",\n    \"float32\",\n    \"float64\",\n    \"complex64\",\n    \"complex128\",\n    \"byte\",\n    \"rune\",\n    \"uint\",\n    \"int\",\n    \"uintptr\",\n    \"string\",\n    \"nil\"\n  ],\n  operators: [\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"%\",\n    \"&\",\n    \"|\",\n    \"^\",\n    \"<<\",\n    \">>\",\n    \"&^\",\n    \"+=\",\n    \"-=\",\n    \"*=\",\n    \"/=\",\n    \"%=\",\n    \"&=\",\n    \"|=\",\n    \"^=\",\n    \"<<=\",\n    \">>=\",\n    \"&^=\",\n    \"&&\",\n    \"||\",\n    \"<-\",\n    \"++\",\n    \"--\",\n    \"==\",\n    \"<\",\n    \">\",\n    \"=\",\n    \"!\",\n    \"!=\",\n    \"<=\",\n    \">=\",\n    \":=\",\n    \"...\",\n    \"(\",\n    \")\",\n    \"\",\n    \"]\",\n    \"{\",\n    \"}\",\n    \",\",\n    \";\",\n    \".\",\n    \":\"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword.$0\" },\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/\\[\\[.*\\]\\]/, \"annotation\"],\n      [/^\\s*#\\w+/, \"keyword\"],\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/[<>](?!@symbols)/, \"@brackets\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/\\d*\\d+[eE]([\\-+]?\\d+)?/, \"number.float\"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, \"number.float\"],\n      [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, \"number.hex\"],\n      [/0[0-7']*[0-7]/, \"number.octal\"],\n      [/0[bB][0-1']*[0-1]/, \"number.binary\"],\n      [/\\d[\\d']*/, \"number\"],\n      [/\\d/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, \"string\", \"@string\"],\n      [/`/, \"string\", \"@rawstring\"],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/\\/\\*\\*(?!\\/)/, \"comment.doc\", \"@doccomment\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    doccomment: [\n      [/[^\\/*]+/, \"comment.doc\"],\n      [/\\/\\*/, \"comment.doc.invalid\"],\n      [/\\*\\//, \"comment.doc\", \"@pop\"],\n      [/[\\/*]/, \"comment.doc\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, \"string\", \"@pop\"]\n    ],\n    rawstring: [\n      [/[^\\`]/, \"string\"],\n      [/`/, \"string\", \"@pop\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js?");

/***/ })

}]);