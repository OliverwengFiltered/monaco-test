"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_dockerfile_dockerfile_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/dockerfile/dockerfile.ts\nvar conf = {\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".dockerfile\",\n  variable: /\\${?[\\w]+}?/,\n  tokenizer: {\n    root: [\n      { include: \"@whitespace\" },\n      { include: \"@comment\" },\n      [/(ONBUILD)(\\s+)/, [\"keyword\", \"\"]],\n      [/(ENV)(\\s+)([\\w]+)/, [\"keyword\", \"\", { token: \"variable\", next: \"@arguments\" }]],\n      [\n        /(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,\n        { token: \"keyword\", next: \"@arguments\" }\n      ]\n    ],\n    arguments: [\n      { include: \"@whitespace\" },\n      { include: \"@strings\" },\n      [\n        /(@variable)/,\n        {\n          cases: {\n            \"@eos\": { token: \"variable\", next: \"@popall\" },\n            \"@default\": \"variable\"\n          }\n        }\n      ],\n      [\n        /\\\\/,\n        {\n          cases: {\n            \"@eos\": \"\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [\n        /./,\n        {\n          cases: {\n            \"@eos\": { token: \"\", next: \"@popall\" },\n            \"@default\": \"\"\n          }\n        }\n      ]\n    ],\n    whitespace: [\n      [\n        /\\s+/,\n        {\n          cases: {\n            \"@eos\": { token: \"\", next: \"@popall\" },\n            \"@default\": \"\"\n          }\n        }\n      ]\n    ],\n    comment: [[/(^#.*$)/, \"comment\", \"@popall\"]],\n    strings: [\n      [/\\\\'$/, \"\", \"@popall\"],\n      [/\\\\'/, \"\"],\n      [/'$/, \"string\", \"@popall\"],\n      [/'/, \"string\", \"@stringBody\"],\n      [/\"$/, \"string\", \"@popall\"],\n      [/\"/, \"string\", \"@dblStringBody\"]\n    ],\n    stringBody: [\n      [\n        /[^\\\\\\$']/,\n        {\n          cases: {\n            \"@eos\": { token: \"string\", next: \"@popall\" },\n            \"@default\": \"string\"\n          }\n        }\n      ],\n      [/\\\\./, \"string.escape\"],\n      [/'$/, \"string\", \"@popall\"],\n      [/'/, \"string\", \"@pop\"],\n      [/(@variable)/, \"variable\"],\n      [/\\\\$/, \"string\"],\n      [/$/, \"string\", \"@popall\"]\n    ],\n    dblStringBody: [\n      [\n        /[^\\\\\\$\"]/,\n        {\n          cases: {\n            \"@eos\": { token: \"string\", next: \"@popall\" },\n            \"@default\": \"string\"\n          }\n        }\n      ],\n      [/\\\\./, \"string.escape\"],\n      [/\"$/, \"string\", \"@popall\"],\n      [/\"/, \"string\", \"@pop\"],\n      [/(@variable)/, \"variable\"],\n      [/\\\\$/, \"string\"],\n      [/$/, \"string\", \"@popall\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js?");

/***/ })

}]);