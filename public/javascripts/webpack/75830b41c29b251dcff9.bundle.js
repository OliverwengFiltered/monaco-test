"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_csharp_csharp_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/csharp/csharp.ts\nvar conf = {\n  wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] },\n    { open: '\"', close: '\"', notIn: [\"string\", \"comment\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\" },\n    { open: \"'\", close: \"'\" },\n    { open: '\"', close: '\"' }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*#region\\\\b\"),\n      end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".cs\",\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" },\n    { open: \"<\", close: \">\", token: \"delimiter.angle\" }\n  ],\n  keywords: [\n    \"extern\",\n    \"alias\",\n    \"using\",\n    \"bool\",\n    \"decimal\",\n    \"sbyte\",\n    \"byte\",\n    \"short\",\n    \"ushort\",\n    \"int\",\n    \"uint\",\n    \"long\",\n    \"ulong\",\n    \"char\",\n    \"float\",\n    \"double\",\n    \"object\",\n    \"dynamic\",\n    \"string\",\n    \"assembly\",\n    \"is\",\n    \"as\",\n    \"ref\",\n    \"out\",\n    \"this\",\n    \"base\",\n    \"new\",\n    \"typeof\",\n    \"void\",\n    \"checked\",\n    \"unchecked\",\n    \"default\",\n    \"delegate\",\n    \"var\",\n    \"const\",\n    \"if\",\n    \"else\",\n    \"switch\",\n    \"case\",\n    \"while\",\n    \"do\",\n    \"for\",\n    \"foreach\",\n    \"in\",\n    \"break\",\n    \"continue\",\n    \"goto\",\n    \"return\",\n    \"throw\",\n    \"try\",\n    \"catch\",\n    \"finally\",\n    \"lock\",\n    \"yield\",\n    \"from\",\n    \"let\",\n    \"where\",\n    \"join\",\n    \"on\",\n    \"equals\",\n    \"into\",\n    \"orderby\",\n    \"ascending\",\n    \"descending\",\n    \"select\",\n    \"group\",\n    \"by\",\n    \"namespace\",\n    \"partial\",\n    \"class\",\n    \"field\",\n    \"event\",\n    \"method\",\n    \"param\",\n    \"public\",\n    \"protected\",\n    \"internal\",\n    \"private\",\n    \"abstract\",\n    \"sealed\",\n    \"static\",\n    \"struct\",\n    \"readonly\",\n    \"volatile\",\n    \"virtual\",\n    \"override\",\n    \"params\",\n    \"get\",\n    \"set\",\n    \"add\",\n    \"remove\",\n    \"operator\",\n    \"true\",\n    \"false\",\n    \"implicit\",\n    \"explicit\",\n    \"interface\",\n    \"enum\",\n    \"null\",\n    \"async\",\n    \"await\",\n    \"fixed\",\n    \"sizeof\",\n    \"stackalloc\",\n    \"unsafe\",\n    \"nameof\",\n    \"when\"\n  ],\n  namespaceFollows: [\"namespace\", \"using\"],\n  parenFollows: [\"if\", \"for\", \"while\", \"switch\", \"foreach\", \"using\", \"catch\", \"when\"],\n  operators: [\n    \"=\",\n    \"??\",\n    \"||\",\n    \"&&\",\n    \"|\",\n    \"^\",\n    \"&\",\n    \"==\",\n    \"!=\",\n    \"<=\",\n    \">=\",\n    \"<<\",\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"%\",\n    \"!\",\n    \"~\",\n    \"++\",\n    \"--\",\n    \"+=\",\n    \"-=\",\n    \"*=\",\n    \"/=\",\n    \"%=\",\n    \"&=\",\n    \"|=\",\n    \"^=\",\n    \"<<=\",\n    \">>=\",\n    \">>\",\n    \"=>\"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [\n        /\\@?[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            \"@namespaceFollows\": {\n              token: \"keyword.$0\",\n              next: \"@namespace\"\n            },\n            \"@keywords\": {\n              token: \"keyword.$0\",\n              next: \"@qualified\"\n            },\n            \"@default\": { token: \"identifier\", next: \"@qualified\" }\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [\n        /}/,\n        {\n          cases: {\n            \"$S2==interpolatedstring\": {\n              token: \"string.quote\",\n              next: \"@pop\"\n            },\n            \"$S2==litinterpstring\": {\n              token: \"string.quote\",\n              next: \"@pop\"\n            },\n            \"@default\": \"@brackets\"\n          }\n        }\n      ],\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/[<>](?!@symbols)/, \"@brackets\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?[fFdD]?/, \"number.float\"],\n      [/0[xX][0-9a-fA-F_]+/, \"number.hex\"],\n      [/0[bB][01_]+/, \"number.hex\"],\n      [/[0-9_]+/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, { token: \"string.quote\", next: \"@string\" }],\n      [/\\$\\@\"/, { token: \"string.quote\", next: \"@litinterpstring\" }],\n      [/\\@\"/, { token: \"string.quote\", next: \"@litstring\" }],\n      [/\\$\"/, { token: \"string.quote\", next: \"@interpolatedstring\" }],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    qualified: [\n      [\n        /[a-zA-Z_][\\w]*/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword.$0\" },\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      [/\\./, \"delimiter\"],\n      [\"\", \"\", \"@pop\"]\n    ],\n    namespace: [\n      { include: \"@whitespace\" },\n      [/[A-Z]\\w*/, \"namespace\"],\n      [/[\\.=]/, \"delimiter\"],\n      [\"\", \"\", \"@pop\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [\"\\\\*/\", \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, { token: \"string.quote\", next: \"@pop\" }]\n    ],\n    litstring: [\n      [/[^\"]+/, \"string\"],\n      [/\"\"/, \"string.escape\"],\n      [/\"/, { token: \"string.quote\", next: \"@pop\" }]\n    ],\n    litinterpstring: [\n      [/[^\"{]+/, \"string\"],\n      [/\"\"/, \"string.escape\"],\n      [/{{/, \"string.escape\"],\n      [/}}/, \"string.escape\"],\n      [/{/, { token: \"string.quote\", next: \"root.litinterpstring\" }],\n      [/\"/, { token: \"string.quote\", next: \"@pop\" }]\n    ],\n    interpolatedstring: [\n      [/[^\\\\\"{]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/{{/, \"string.escape\"],\n      [/}}/, \"string.escape\"],\n      [/{/, { token: \"string.quote\", next: \"root.interpolatedstring\" }],\n      [/\"/, { token: \"string.quote\", next: \"@pop\" }]\n    ],\n    whitespace: [\n      [/^[ \\t\\v\\f]*#((r)|(load))(?=\\s)/, \"directive.csx\"],\n      [/^[ \\t\\v\\f]*#\\w.*$/, \"namespace.cpp\"],\n      [/[ \\t\\v\\f\\r\\n]+/, \"\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/csharp/csharp.js?");

/***/ })

}]);