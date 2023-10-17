"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_bicep_bicep_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/bicep/bicep.ts\nvar bounded = (text) => `\\\\b${text}\\\\b`;\nvar identifierStart = \"[_a-zA-Z]\";\nvar identifierContinue = \"[_a-zA-Z0-9]\";\nvar identifier = bounded(`${identifierStart}${identifierContinue}*`);\nvar keywords = [\n  \"targetScope\",\n  \"resource\",\n  \"module\",\n  \"param\",\n  \"var\",\n  \"output\",\n  \"for\",\n  \"in\",\n  \"if\",\n  \"existing\"\n];\nvar namedLiterals = [\"true\", \"false\", \"null\"];\nvar nonCommentWs = `[ \\\\t\\\\r\\\\n]`;\nvar numericLiteral = `[0-9]+`;\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\" },\n    { open: \"'''\", close: \"'''\" }\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] },\n    { open: \"'''\", close: \"'''\", notIn: [\"string\", \"comment\"] }\n  ],\n  autoCloseBefore: \":.,=}])' \\n\t\",\n  indentationRules: {\n    increaseIndentPattern: new RegExp(\"^((?!\\\\/\\\\/).)*(\\\\{[^}\\\"'`]*|\\\\([^)\\\"'`]*|\\\\[[^\\\\]\\\"'`]*)$\"),\n    decreaseIndentPattern: new RegExp(\"^((?!.*?\\\\/\\\\*).*\\\\*/)?\\\\s*[\\\\}\\\\]].*$\")\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".bicep\",\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" }\n  ],\n  symbols: /[=><!~?:&|+\\-*/^%]+/,\n  keywords,\n  namedLiterals,\n  escapes: `\\\\\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\\\\\|'|\\\\\\${)`,\n  tokenizer: {\n    root: [{ include: \"@expression\" }, { include: \"@whitespace\" }],\n    stringVerbatim: [\n      { regex: `(|'|'')[^']`, action: { token: \"string\" } },\n      { regex: `'''`, action: { token: \"string.quote\", next: \"@pop\" } }\n    ],\n    stringLiteral: [\n      { regex: `\\\\\\${`, action: { token: \"delimiter.bracket\", next: \"@bracketCounting\" } },\n      { regex: `[^\\\\\\\\'$]+`, action: { token: \"string\" } },\n      { regex: \"@escapes\", action: { token: \"string.escape\" } },\n      { regex: `\\\\\\\\.`, action: { token: \"string.escape.invalid\" } },\n      { regex: `'`, action: { token: \"string\", next: \"@pop\" } }\n    ],\n    bracketCounting: [\n      { regex: `{`, action: { token: \"delimiter.bracket\", next: \"@bracketCounting\" } },\n      { regex: `}`, action: { token: \"delimiter.bracket\", next: \"@pop\" } },\n      { include: \"expression\" }\n    ],\n    comment: [\n      { regex: `[^\\\\*]+`, action: { token: \"comment\" } },\n      { regex: `\\\\*\\\\/`, action: { token: \"comment\", next: \"@pop\" } },\n      { regex: `[\\\\/*]`, action: { token: \"comment\" } }\n    ],\n    whitespace: [\n      { regex: nonCommentWs },\n      { regex: `\\\\/\\\\*`, action: { token: \"comment\", next: \"@comment\" } },\n      { regex: `\\\\/\\\\/.*$`, action: { token: \"comment\" } }\n    ],\n    expression: [\n      { regex: `'''`, action: { token: \"string.quote\", next: \"@stringVerbatim\" } },\n      { regex: `'`, action: { token: \"string.quote\", next: \"@stringLiteral\" } },\n      { regex: numericLiteral, action: { token: \"number\" } },\n      {\n        regex: identifier,\n        action: {\n          cases: {\n            \"@keywords\": { token: \"keyword\" },\n            \"@namedLiterals\": { token: \"keyword\" },\n            \"@default\": { token: \"identifier\" }\n          }\n        }\n      }\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js?");

/***/ })

}]);