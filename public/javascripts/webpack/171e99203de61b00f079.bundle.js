"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["vendors-node_modules_monaco-editor_esm_vs_basic-languages_scala_scala_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/scala/scala.ts\nvar conf = {\n  wordPattern: /(unary_[@~!#%^&*()\\-=+\\\\|:<>\\/?]+)|([a-zA-Z_$][\\w$]*?_=)|(`[^`]+`)|([a-zA-Z_$][\\w$]*)/g,\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))\"),\n      end: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))\")\n    }\n  }\n};\nvar language = {\n  tokenPostfix: \".scala\",\n  keywords: [\n    \"asInstanceOf\",\n    \"catch\",\n    \"class\",\n    \"classOf\",\n    \"def\",\n    \"do\",\n    \"else\",\n    \"extends\",\n    \"finally\",\n    \"for\",\n    \"foreach\",\n    \"forSome\",\n    \"if\",\n    \"import\",\n    \"isInstanceOf\",\n    \"macro\",\n    \"match\",\n    \"new\",\n    \"object\",\n    \"package\",\n    \"return\",\n    \"throw\",\n    \"trait\",\n    \"try\",\n    \"type\",\n    \"until\",\n    \"val\",\n    \"var\",\n    \"while\",\n    \"with\",\n    \"yield\",\n    \"given\",\n    \"enum\",\n    \"then\"\n  ],\n  softKeywords: [\"as\", \"export\", \"extension\", \"end\", \"derives\", \"on\"],\n  constants: [\"true\", \"false\", \"null\", \"this\", \"super\"],\n  modifiers: [\n    \"abstract\",\n    \"final\",\n    \"implicit\",\n    \"lazy\",\n    \"override\",\n    \"private\",\n    \"protected\",\n    \"sealed\"\n  ],\n  softModifiers: [\"inline\", \"opaque\", \"open\", \"transparent\", \"using\"],\n  name: /(?:[a-z_$][\\w$]*|`[^`]+`)/,\n  type: /(?:[A-Z][\\w$]*)/,\n  symbols: /[=><!~?:&|+\\-*\\/^\\\\%@#]+/,\n  digits: /\\d+(_+\\d+)*/,\n  hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n  escapes: /\\\\(?:[btnfr\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  fstring_conv: /[bBhHsScCdoxXeEfgGaAt]|[Tn](?:[HIklMSLNpzZsQ]|[BbhAaCYyjmde]|[RTrDFC])/,\n  tokenizer: {\n    root: [\n      [/\\braw\"\"\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@rawstringt\" }],\n      [/\\braw\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@rawstring\" }],\n      [/\\bs\"\"\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@sstringt\" }],\n      [/\\bs\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@sstring\" }],\n      [/\\bf\"\"\"\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@fstringt\" }],\n      [/\\bf\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@fstring\" }],\n      [/\"\"\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@stringt\" }],\n      [/\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@string\" }],\n      [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, \"number.float\", \"@allowMethod\"],\n      [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, \"number.float\", \"@allowMethod\"],\n      [/0[xX](@hexdigits)[Ll]?/, \"number.hex\", \"@allowMethod\"],\n      [/(@digits)[fFdD]/, \"number.float\", \"@allowMethod\"],\n      [/(@digits)[lL]?/, \"number\", \"@allowMethod\"],\n      [/\\b_\\*/, \"key\"],\n      [/\\b(_)\\b/, \"keyword\", \"@allowMethod\"],\n      [/\\bimport\\b/, \"keyword\", \"@import\"],\n      [/\\b(case)([ \\t]+)(class)\\b/, [\"keyword.modifier\", \"white\", \"keyword\"]],\n      [/\\bcase\\b/, \"keyword\", \"@case\"],\n      [/\\bva[lr]\\b/, \"keyword\", \"@vardef\"],\n      [\n        /\\b(def)([ \\t]+)((?:unary_)?@symbols|@name(?:_=)|@name)/,\n        [\"keyword\", \"white\", \"identifier\"]\n      ],\n      [/@name(?=[ \\t]*:(?!:))/, \"variable\"],\n      [/(\\.)(@name|@symbols)/, [\"operator\", { token: \"@rematch\", next: \"@allowMethod\" }]],\n      [/([{(])(\\s*)(@name(?=\\s*=>))/, [\"@brackets\", \"white\", \"variable\"]],\n      [\n        /@name/,\n        {\n          cases: {\n            \"@keywords\": \"keyword\",\n            \"@softKeywords\": \"keyword\",\n            \"@modifiers\": \"keyword.modifier\",\n            \"@softModifiers\": \"keyword.modifier\",\n            \"@constants\": {\n              token: \"constant\",\n              next: \"@allowMethod\"\n            },\n            \"@default\": {\n              token: \"identifier\",\n              next: \"@allowMethod\"\n            }\n          }\n        }\n      ],\n      [/@type/, \"type\", \"@allowMethod\"],\n      { include: \"@whitespace\" },\n      [/@[a-zA-Z_$][\\w$]*(?:\\.[a-zA-Z_$][\\w$]*)*/, \"annotation\"],\n      [/[{(]/, \"@brackets\"],\n      [/[})]/, \"@brackets\", \"@allowMethod\"],\n      [/\\[/, \"operator.square\"],\n      [/](?!\\s*(?:va[rl]|def|type)\\b)/, \"operator.square\", \"@allowMethod\"],\n      [/]/, \"operator.square\"],\n      [/([=-]>|<-|>:|<:|:>|<%)(?=[\\s\\w()[\\]{},\\.\"'`])/, \"keyword\"],\n      [/@symbols/, \"operator\"],\n      [/[;,\\.]/, \"delimiter\"],\n      [/'[a-zA-Z$][\\w$]*(?!')/, \"attribute.name\"],\n      [/'[^\\\\']'/, \"string\", \"@allowMethod\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", { token: \"string\", next: \"@allowMethod\" }]],\n      [/'/, \"string.invalid\"]\n    ],\n    import: [\n      [/;/, \"delimiter\", \"@pop\"],\n      [/^|$/, \"\", \"@pop\"],\n      [/[ \\t]+/, \"white\"],\n      [/[\\n\\r]+/, \"white\", \"@pop\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/@name|@type/, \"type\"],\n      [/[(){}]/, \"@brackets\"],\n      [/[[\\]]/, \"operator.square\"],\n      [/[\\.,]/, \"delimiter\"]\n    ],\n    allowMethod: [\n      [/^|$/, \"\", \"@pop\"],\n      [/[ \\t]+/, \"white\"],\n      [/[\\n\\r]+/, \"white\", \"@pop\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/(?==>[\\s\\w([{])/, \"keyword\", \"@pop\"],\n      [\n        /(@name|@symbols)(?=[ \\t]*[[({\"'`]|[ \\t]+(?:[+-]?\\.?\\d|\\w))/,\n        {\n          cases: {\n            \"@keywords\": { token: \"keyword\", next: \"@pop\" },\n            \"->|<-|>:|<:|<%\": { token: \"keyword\", next: \"@pop\" },\n            \"@default\": { token: \"@rematch\", next: \"@pop\" }\n          }\n        }\n      ],\n      [\"\", \"\", \"@pop\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\/\\*/, \"comment\", \"@push\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    case: [\n      [/\\b_\\*/, \"key\"],\n      [/\\b(_|true|false|null|this|super)\\b/, \"keyword\", \"@allowMethod\"],\n      [/\\bif\\b|=>/, \"keyword\", \"@pop\"],\n      [/`[^`]+`/, \"identifier\", \"@allowMethod\"],\n      [/@name/, \"variable\", \"@allowMethod\"],\n      [/:::?|\\||@(?![a-z_$])/, \"keyword\"],\n      { include: \"@root\" }\n    ],\n    vardef: [\n      [/\\b_\\*/, \"key\"],\n      [/\\b(_|true|false|null|this|super)\\b/, \"keyword\"],\n      [/@name/, \"variable\"],\n      [/:::?|\\||@(?![a-z_$])/, \"keyword\"],\n      [/=|:(?!:)/, \"operator\", \"@pop\"],\n      [/$/, \"white\", \"@pop\"],\n      { include: \"@root\" }\n    ],\n    string: [\n      [/[^\\\\\"\\n\\r]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [\n        /\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ]\n    ],\n    stringt: [\n      [/[^\\\\\"\\n\\r]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"(?=\"\"\")/, \"string\"],\n      [\n        /\"\"\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\"/, \"string\"]\n    ],\n    fstring: [\n      [/@escapes/, \"string.escape\"],\n      [\n        /\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\\$\\$/, \"string\"],\n      [/(\\$)([a-z_]\\w*)/, [\"operator\", \"identifier\"]],\n      [/\\$\\{/, \"operator\", \"@interp\"],\n      [/%%/, \"string\"],\n      [\n        /(%)([\\-#+ 0,(])(\\d+|\\.\\d+|\\d+\\.\\d+)(@fstring_conv)/,\n        [\"metatag\", \"keyword.modifier\", \"number\", \"metatag\"]\n      ],\n      [/(%)(\\d+|\\.\\d+|\\d+\\.\\d+)(@fstring_conv)/, [\"metatag\", \"number\", \"metatag\"]],\n      [/(%)([\\-#+ 0,(])(@fstring_conv)/, [\"metatag\", \"keyword.modifier\", \"metatag\"]],\n      [/(%)(@fstring_conv)/, [\"metatag\", \"metatag\"]],\n      [/./, \"string\"]\n    ],\n    fstringt: [\n      [/@escapes/, \"string.escape\"],\n      [/\"(?=\"\"\")/, \"string\"],\n      [\n        /\"\"\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\\$\\$/, \"string\"],\n      [/(\\$)([a-z_]\\w*)/, [\"operator\", \"identifier\"]],\n      [/\\$\\{/, \"operator\", \"@interp\"],\n      [/%%/, \"string\"],\n      [\n        /(%)([\\-#+ 0,(])(\\d+|\\.\\d+|\\d+\\.\\d+)(@fstring_conv)/,\n        [\"metatag\", \"keyword.modifier\", \"number\", \"metatag\"]\n      ],\n      [/(%)(\\d+|\\.\\d+|\\d+\\.\\d+)(@fstring_conv)/, [\"metatag\", \"number\", \"metatag\"]],\n      [/(%)([\\-#+ 0,(])(@fstring_conv)/, [\"metatag\", \"keyword.modifier\", \"metatag\"]],\n      [/(%)(@fstring_conv)/, [\"metatag\", \"metatag\"]],\n      [/./, \"string\"]\n    ],\n    sstring: [\n      [/@escapes/, \"string.escape\"],\n      [\n        /\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\\$\\$/, \"string\"],\n      [/(\\$)([a-z_]\\w*)/, [\"operator\", \"identifier\"]],\n      [/\\$\\{/, \"operator\", \"@interp\"],\n      [/./, \"string\"]\n    ],\n    sstringt: [\n      [/@escapes/, \"string.escape\"],\n      [/\"(?=\"\"\")/, \"string\"],\n      [\n        /\"\"\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\\$\\$/, \"string\"],\n      [/(\\$)([a-z_]\\w*)/, [\"operator\", \"identifier\"]],\n      [/\\$\\{/, \"operator\", \"@interp\"],\n      [/./, \"string\"]\n    ],\n    interp: [[/{/, \"operator\", \"@push\"], [/}/, \"operator\", \"@pop\"], { include: \"@root\" }],\n    rawstring: [\n      [/[^\"]/, \"string\"],\n      [\n        /\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ]\n    ],\n    rawstringt: [\n      [/[^\"]/, \"string\"],\n      [/\"(?=\"\"\")/, \"string\"],\n      [\n        /\"\"\"/,\n        {\n          token: \"string.quote\",\n          bracket: \"@close\",\n          switchTo: \"@allowMethod\"\n        }\n      ],\n      [/\"/, \"string\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/scala/scala.js?");

/***/ })

}]);