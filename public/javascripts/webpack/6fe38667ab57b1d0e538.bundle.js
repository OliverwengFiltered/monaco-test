"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_flow9_flow9_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/flow9/flow9.ts\nvar conf = {\n  comments: {\n    blockComment: [\"/*\", \"*/\"],\n    lineComment: \"//\"\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\", notIn: [\"string\"] },\n    { open: \"[\", close: \"]\", notIn: [\"string\"] },\n    { open: \"(\", close: \")\", notIn: [\"string\"] },\n    { open: '\"', close: '\"', notIn: [\"string\"] },\n    { open: \"'\", close: \"'\", notIn: [\"string\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"<\", close: \">\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".flow\",\n  keywords: [\n    \"import\",\n    \"require\",\n    \"export\",\n    \"forbid\",\n    \"native\",\n    \"if\",\n    \"else\",\n    \"cast\",\n    \"unsafe\",\n    \"switch\",\n    \"default\"\n  ],\n  types: [\n    \"io\",\n    \"mutable\",\n    \"bool\",\n    \"int\",\n    \"double\",\n    \"string\",\n    \"flow\",\n    \"void\",\n    \"ref\",\n    \"true\",\n    \"false\",\n    \"with\"\n  ],\n  operators: [\n    \"=\",\n    \">\",\n    \"<\",\n    \"<=\",\n    \">=\",\n    \"==\",\n    \"!\",\n    \"!=\",\n    \":=\",\n    \"::=\",\n    \"&&\",\n    \"||\",\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"@\",\n    \"&\",\n    \"%\",\n    \":\",\n    \"->\",\n    \"\\\\\",\n    \"$\",\n    \"??\",\n    \"^\"\n  ],\n  symbols: /[@$=><!~?:&|+\\-*\\\\\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            \"@keywords\": \"keyword\",\n            \"@types\": \"type\",\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/[{}()\\[\\]]/, \"delimiter\"],\n      [/[<>](?!@symbols)/, \"delimiter\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/((0(x|X)[0-9a-fA-F]*)|(([0-9]+\\.?[0-9]*)|(\\.[0-9]+))((e|E)(\\+|-)?[0-9]+)?)/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, \"string\", \"@string\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, \"string\", \"@pop\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/flow9/flow9.js?");

/***/ })

}]);