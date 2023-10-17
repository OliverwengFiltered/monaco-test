"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_markdown_markdown_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/markdown/markdown.ts\nvar conf = {\n  comments: {\n    blockComment: [\"<!--\", \"-->\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\", notIn: [\"string\"] }\n  ],\n  surroundingPairs: [\n    { open: \"(\", close: \")\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"`\", close: \"`\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*<!--\\\\s*#?region\\\\b.*-->\"),\n      end: new RegExp(\"^\\\\s*<!--\\\\s*#?endregion\\\\b.*-->\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".md\",\n  control: /[\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n  noncontrol: /[^\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n  escapes: /\\\\(?:@control)/,\n  jsescapes: /\\\\(?:[btnfr\\\\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,\n  empty: [\n    \"area\",\n    \"base\",\n    \"basefont\",\n    \"br\",\n    \"col\",\n    \"frame\",\n    \"hr\",\n    \"img\",\n    \"input\",\n    \"isindex\",\n    \"link\",\n    \"meta\",\n    \"param\"\n  ],\n  tokenizer: {\n    root: [\n      [/^\\s*\\|/, \"@rematch\", \"@table_header\"],\n      [/^(\\s{0,3})(#+)((?:[^\\\\#]|@escapes)+)((?:#+)?)/, [\"white\", \"keyword\", \"keyword\", \"keyword\"]],\n      [/^\\s*(=+|\\-+)\\s*$/, \"keyword\"],\n      [/^\\s*((\\*[ ]?)+)\\s*$/, \"meta.separator\"],\n      [/^\\s*>+/, \"comment\"],\n      [/^\\s*([\\*\\-+:]|\\d+\\.)\\s/, \"keyword\"],\n      [/^(\\t|[ ]{4})[^ ].*$/, \"string\"],\n      [/^\\s*~~~\\s*((?:\\w|[\\/\\-#])+)?\\s*$/, { token: \"string\", next: \"@codeblock\" }],\n      [\n        /^\\s*```\\s*((?:\\w|[\\/\\-#])+).*$/,\n        { token: \"string\", next: \"@codeblockgh\", nextEmbedded: \"$1\" }\n      ],\n      [/^\\s*```\\s*$/, { token: \"string\", next: \"@codeblock\" }],\n      { include: \"@linecontent\" }\n    ],\n    table_header: [\n      { include: \"@table_common\" },\n      [/[^\\|]+/, \"keyword.table.header\"]\n    ],\n    table_body: [{ include: \"@table_common\" }, { include: \"@linecontent\" }],\n    table_common: [\n      [/\\s*[\\-:]+\\s*/, { token: \"keyword\", switchTo: \"table_body\" }],\n      [/^\\s*\\|/, \"keyword.table.left\"],\n      [/^\\s*[^\\|]/, \"@rematch\", \"@pop\"],\n      [/^\\s*$/, \"@rematch\", \"@pop\"],\n      [\n        /\\|/,\n        {\n          cases: {\n            \"@eos\": \"keyword.table.right\",\n            \"@default\": \"keyword.table.middle\"\n          }\n        }\n      ]\n    ],\n    codeblock: [\n      [/^\\s*~~~\\s*$/, { token: \"string\", next: \"@pop\" }],\n      [/^\\s*```\\s*$/, { token: \"string\", next: \"@pop\" }],\n      [/.*$/, \"variable.source\"]\n    ],\n    codeblockgh: [\n      [/```\\s*$/, { token: \"string\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/[^`]+/, \"variable.source\"]\n    ],\n    linecontent: [\n      [/&\\w+;/, \"string.escape\"],\n      [/@escapes/, \"escape\"],\n      [/\\b__([^\\\\_]|@escapes|_(?!_))+__\\b/, \"strong\"],\n      [/\\*\\*([^\\\\*]|@escapes|\\*(?!\\*))+\\*\\*/, \"strong\"],\n      [/\\b_[^_]+_\\b/, \"emphasis\"],\n      [/\\*([^\\\\*]|@escapes)+\\*/, \"emphasis\"],\n      [/`([^\\\\`]|@escapes)+`/, \"variable\"],\n      [/\\{+[^}]+\\}+/, \"string.target\"],\n      [/(!?\\[)((?:[^\\]\\\\]|@escapes)*)(\\]\\([^\\)]+\\))/, [\"string.link\", \"\", \"string.link\"]],\n      [/(!?\\[)((?:[^\\]\\\\]|@escapes)*)(\\])/, \"string.link\"],\n      { include: \"html\" }\n    ],\n    html: [\n      [/<(\\w+)\\/>/, \"tag\"],\n      [\n        /<(\\w+)(\\-|\\w)*/,\n        {\n          cases: {\n            \"@empty\": { token: \"tag\", next: \"@tag.$1\" },\n            \"@default\": { token: \"tag\", next: \"@tag.$1\" }\n          }\n        }\n      ],\n      [/<\\/(\\w+)(\\-|\\w)*\\s*>/, { token: \"tag\" }],\n      [/<!--/, \"comment\", \"@comment\"]\n    ],\n    comment: [\n      [/[^<\\-]+/, \"comment.content\"],\n      [/-->/, \"comment\", \"@pop\"],\n      [/<!--/, \"comment.content.invalid\"],\n      [/[<\\-]/, \"comment.content\"]\n    ],\n    tag: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [\n        /(type)(\\s*=\\s*)(\")([^\"]+)(\")/,\n        [\n          \"attribute.name.html\",\n          \"delimiter.html\",\n          \"string.html\",\n          { token: \"string.html\", switchTo: \"@tag.$S2.$4\" },\n          \"string.html\"\n        ]\n      ],\n      [\n        /(type)(\\s*=\\s*)(')([^']+)(')/,\n        [\n          \"attribute.name.html\",\n          \"delimiter.html\",\n          \"string.html\",\n          { token: \"string.html\", switchTo: \"@tag.$S2.$4\" },\n          \"string.html\"\n        ]\n      ],\n      [/(\\w+)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/, [\"attribute.name.html\", \"delimiter.html\", \"string.html\"]],\n      [/\\w+/, \"attribute.name.html\"],\n      [/\\/>/, \"tag\", \"@pop\"],\n      [\n        />/,\n        {\n          cases: {\n            \"$S2==style\": {\n              token: \"tag\",\n              switchTo: \"embeddedStyle\",\n              nextEmbedded: \"text/css\"\n            },\n            \"$S2==script\": {\n              cases: {\n                $S3: {\n                  token: \"tag\",\n                  switchTo: \"embeddedScript\",\n                  nextEmbedded: \"$S3\"\n                },\n                \"@default\": {\n                  token: \"tag\",\n                  switchTo: \"embeddedScript\",\n                  nextEmbedded: \"text/javascript\"\n                }\n              }\n            },\n            \"@default\": { token: \"tag\", next: \"@pop\" }\n          }\n        }\n      ]\n    ],\n    embeddedStyle: [\n      [/[^<]+/, \"\"],\n      [/<\\/style\\s*>/, { token: \"@rematch\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/</, \"\"]\n    ],\n    embeddedScript: [\n      [/[^<]+/, \"\"],\n      [/<\\/script\\s*>/, { token: \"@rematch\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/</, \"\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/markdown/markdown.js?");

/***/ })

}]);