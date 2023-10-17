"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_powershell_powershell_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/powershell/powershell.ts\nvar conf = {\n  wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\#%\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n  comments: {\n    lineComment: \"#\",\n    blockComment: [\"<#\", \"#>\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"', notIn: [\"string\"] },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*#region\\\\b\"),\n      end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  ignoreCase: true,\n  tokenPostfix: \".ps1\",\n  brackets: [\n    { token: \"delimiter.curly\", open: \"{\", close: \"}\" },\n    { token: \"delimiter.square\", open: \"[\", close: \"]\" },\n    { token: \"delimiter.parenthesis\", open: \"(\", close: \")\" }\n  ],\n  keywords: [\n    \"begin\",\n    \"break\",\n    \"catch\",\n    \"class\",\n    \"continue\",\n    \"data\",\n    \"define\",\n    \"do\",\n    \"dynamicparam\",\n    \"else\",\n    \"elseif\",\n    \"end\",\n    \"exit\",\n    \"filter\",\n    \"finally\",\n    \"for\",\n    \"foreach\",\n    \"from\",\n    \"function\",\n    \"if\",\n    \"in\",\n    \"param\",\n    \"process\",\n    \"return\",\n    \"switch\",\n    \"throw\",\n    \"trap\",\n    \"try\",\n    \"until\",\n    \"using\",\n    \"var\",\n    \"while\",\n    \"workflow\",\n    \"parallel\",\n    \"sequence\",\n    \"inlinescript\",\n    \"configuration\"\n  ],\n  helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,\n  symbols: /[=><!~?&%|+\\-*\\/\\^;\\.,]+/,\n  escapes: /`(?:[abfnrtv\\\\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_][\\w-]*/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword.$0\" },\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/^:\\w*/, \"metatag\"],\n      [\n        /\\$(\\{((global|local|private|script|using):)?[\\w]+\\}|((global|local|private|script|using):)?[\\w]+)/,\n        \"variable\"\n      ],\n      [/<#/, \"comment\", \"@comment\"],\n      [/#.*$/, \"comment\"],\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/@symbols/, \"delimiter\"],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, \"number.float\"],\n      [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, \"number.hex\"],\n      [/\\d+?/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\\@\"/, \"string\", '@herestring.\"'],\n      [/\\@'/, \"string\", \"@herestring.'\"],\n      [\n        /\"/,\n        {\n          cases: {\n            \"@eos\": \"string\",\n            \"@default\": { token: \"string\", next: '@string.\"' }\n          }\n        }\n      ],\n      [\n        /'/,\n        {\n          cases: {\n            \"@eos\": \"string\",\n            \"@default\": { token: \"string\", next: \"@string.'\" }\n          }\n        }\n      ]\n    ],\n    string: [\n      [\n        /[^\"'\\$`]+/,\n        {\n          cases: {\n            \"@eos\": { token: \"string\", next: \"@popall\" },\n            \"@default\": \"string\"\n          }\n        }\n      ],\n      [\n        /@escapes/,\n        {\n          cases: {\n            \"@eos\": { token: \"string.escape\", next: \"@popall\" },\n            \"@default\": \"string.escape\"\n          }\n        }\n      ],\n      [\n        /`./,\n        {\n          cases: {\n            \"@eos\": {\n              token: \"string.escape.invalid\",\n              next: \"@popall\"\n            },\n            \"@default\": \"string.escape.invalid\"\n          }\n        }\n      ],\n      [\n        /\\$[\\w]+$/,\n        {\n          cases: {\n            '$S2==\"': { token: \"variable\", next: \"@popall\" },\n            \"@default\": { token: \"string\", next: \"@popall\" }\n          }\n        }\n      ],\n      [\n        /\\$[\\w]+/,\n        {\n          cases: {\n            '$S2==\"': \"variable\",\n            \"@default\": \"string\"\n          }\n        }\n      ],\n      [\n        /[\"']/,\n        {\n          cases: {\n            \"$#==$S2\": { token: \"string\", next: \"@pop\" },\n            \"@default\": {\n              cases: {\n                \"@eos\": { token: \"string\", next: \"@popall\" },\n                \"@default\": \"string\"\n              }\n            }\n          }\n        }\n      ]\n    ],\n    herestring: [\n      [\n        /^\\s*([\"'])@/,\n        {\n          cases: {\n            \"$1==$S2\": { token: \"string\", next: \"@pop\" },\n            \"@default\": \"string\"\n          }\n        }\n      ],\n      [/[^\\$`]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/`./, \"string.escape.invalid\"],\n      [\n        /\\$[\\w]+/,\n        {\n          cases: {\n            '$S2==\"': \"variable\",\n            \"@default\": \"string\"\n          }\n        }\n      ]\n    ],\n    comment: [\n      [/[^#\\.]+/, \"comment\"],\n      [/#>/, \"comment\", \"@pop\"],\n      [/(\\.)(@helpKeywords)(?!\\w)/, { token: \"comment.keyword.$2\" }],\n      [/[\\.#]/, \"comment\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/powershell/powershell.js?");

/***/ })

}]);