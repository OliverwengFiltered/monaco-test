"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_pla_pla_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/pla/pla.ts\nvar conf = {\n  comments: {\n    lineComment: \"#\"\n  },\n  brackets: [\n    [\"[\", \"]\"],\n    [\"<\", \">\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"[\", close: \"]\" },\n    { open: \"<\", close: \">\" },\n    { open: \"(\", close: \")\" }\n  ],\n  surroundingPairs: [\n    { open: \"[\", close: \"]\" },\n    { open: \"<\", close: \">\" },\n    { open: \"(\", close: \")\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".pla\",\n  brackets: [\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"<\", close: \">\", token: \"delimiter.angle\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" }\n  ],\n  keywords: [\n    \".i\",\n    \".o\",\n    \".mv\",\n    \".ilb\",\n    \".ob\",\n    \".label\",\n    \".type\",\n    \".phase\",\n    \".pair\",\n    \".symbolic\",\n    \".symbolic-output\",\n    \".kiss\",\n    \".p\",\n    \".e\",\n    \".end\"\n  ],\n  comment: /#.*$/,\n  identifier: /[a-zA-Z]+[a-zA-Z0-9_\\-]*/,\n  plaContent: /[01\\-~\\|]+/,\n  tokenizer: {\n    root: [\n      { include: \"@whitespace\" },\n      [/@comment/, \"comment\"],\n      [\n        /\\.([a-zA-Z_\\-]+)/,\n        {\n          cases: {\n            \"@eos\": { token: \"keyword.$1\" },\n            \"@keywords\": {\n              cases: {\n                \".type\": { token: \"keyword.$1\", next: \"@type\" },\n                \"@default\": { token: \"keyword.$1\", next: \"@keywordArg\" }\n              }\n            },\n            \"@default\": { token: \"keyword.$1\" }\n          }\n        }\n      ],\n      [/@identifier/, \"identifier\"],\n      [/@plaContent/, \"string\"]\n    ],\n    whitespace: [[/[ \\t\\r\\n]+/, \"\"]],\n    type: [{ include: \"@whitespace\" }, [/\\w+/, { token: \"type\", next: \"@pop\" }]],\n    keywordArg: [\n      [\n        /[ \\t\\r\\n]+/,\n        {\n          cases: {\n            \"@eos\": { token: \"\", next: \"@pop\" },\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/@comment/, \"comment\", \"@pop\"],\n      [\n        /[<>()\\[\\]]/,\n        {\n          cases: {\n            \"@eos\": { token: \"@brackets\", next: \"@pop\" },\n            \"@default\": \"@brackets\"\n          }\n        }\n      ],\n      [\n        /\\-?\\d+/,\n        {\n          cases: {\n            \"@eos\": { token: \"number\", next: \"@pop\" },\n            \"@default\": \"number\"\n          }\n        }\n      ],\n      [\n        /@identifier/,\n        {\n          cases: {\n            \"@eos\": { token: \"identifier\", next: \"@pop\" },\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      [\n        /[;=]/,\n        {\n          cases: {\n            \"@eos\": { token: \"delimiter\", next: \"@pop\" },\n            \"@default\": \"delimiter\"\n          }\n        }\n      ]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/pla/pla.js?");

/***/ })

}]);