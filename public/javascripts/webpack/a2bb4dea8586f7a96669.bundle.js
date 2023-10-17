"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_liquid_liquid_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ \"include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js\");\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, \"default\"), secondTarget && __copyProps(secondTarget, mod, \"default\"));\n\n// src/fillers/monaco-editor-core.ts\nvar monaco_editor_core_exports = {};\n__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// src/basic-languages/liquid/liquid.ts\nvar EMPTY_ELEMENTS = [\n  \"area\",\n  \"base\",\n  \"br\",\n  \"col\",\n  \"embed\",\n  \"hr\",\n  \"img\",\n  \"input\",\n  \"keygen\",\n  \"link\",\n  \"menuitem\",\n  \"meta\",\n  \"param\",\n  \"source\",\n  \"track\",\n  \"wbr\"\n];\nvar conf = {\n  wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n  brackets: [\n    [\"<!--\", \"-->\"],\n    [\"<\", \">\"],\n    [\"{{\", \"}}\"],\n    [\"{%\", \"%}\"],\n    [\"{\", \"}\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"%\", close: \"%\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  surroundingPairs: [\n    { open: \"<\", close: \">\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  onEnterRules: [\n    {\n      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join(\"|\")}))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$`, \"i\"),\n      afterText: /^<\\/(\\w[\\w\\d]*)\\s*>$/i,\n      action: {\n        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent\n      }\n    },\n    {\n      beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join(\"|\")}))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$`, \"i\"),\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }\n    }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \"\",\n  builtinTags: [\n    \"if\",\n    \"else\",\n    \"elseif\",\n    \"endif\",\n    \"render\",\n    \"assign\",\n    \"capture\",\n    \"endcapture\",\n    \"case\",\n    \"endcase\",\n    \"comment\",\n    \"endcomment\",\n    \"cycle\",\n    \"decrement\",\n    \"for\",\n    \"endfor\",\n    \"include\",\n    \"increment\",\n    \"layout\",\n    \"raw\",\n    \"endraw\",\n    \"render\",\n    \"tablerow\",\n    \"endtablerow\",\n    \"unless\",\n    \"endunless\"\n  ],\n  builtinFilters: [\n    \"abs\",\n    \"append\",\n    \"at_least\",\n    \"at_most\",\n    \"capitalize\",\n    \"ceil\",\n    \"compact\",\n    \"date\",\n    \"default\",\n    \"divided_by\",\n    \"downcase\",\n    \"escape\",\n    \"escape_once\",\n    \"first\",\n    \"floor\",\n    \"join\",\n    \"json\",\n    \"last\",\n    \"lstrip\",\n    \"map\",\n    \"minus\",\n    \"modulo\",\n    \"newline_to_br\",\n    \"plus\",\n    \"prepend\",\n    \"remove\",\n    \"remove_first\",\n    \"replace\",\n    \"replace_first\",\n    \"reverse\",\n    \"round\",\n    \"rstrip\",\n    \"size\",\n    \"slice\",\n    \"sort\",\n    \"sort_natural\",\n    \"split\",\n    \"strip\",\n    \"strip_html\",\n    \"strip_newlines\",\n    \"times\",\n    \"truncate\",\n    \"truncatewords\",\n    \"uniq\",\n    \"upcase\",\n    \"url_decode\",\n    \"url_encode\",\n    \"where\"\n  ],\n  constants: [\"true\", \"false\"],\n  operators: [\"==\", \"!=\", \">\", \"<\", \">=\", \"<=\"],\n  symbol: /[=><!]+/,\n  identifier: /[a-zA-Z_][\\w]*/,\n  tokenizer: {\n    root: [\n      [/\\{\\%\\s*comment\\s*\\%\\}/, \"comment.start.liquid\", \"@comment\"],\n      [/\\{\\{/, { token: \"@rematch\", switchTo: \"@liquidState.root\" }],\n      [/\\{\\%/, { token: \"@rematch\", switchTo: \"@liquidState.root\" }],\n      [/(<)([\\w\\-]+)(\\/>)/, [\"delimiter.html\", \"tag.html\", \"delimiter.html\"]],\n      [/(<)([:\\w]+)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@otherTag\" }]],\n      [/(<\\/)([\\w\\-]+)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@otherTag\" }]],\n      [/</, \"delimiter.html\"],\n      [/\\{/, \"delimiter.html\"],\n      [/[^<{]+/]\n    ],\n    comment: [\n      [/\\{\\%\\s*endcomment\\s*\\%\\}/, \"comment.end.liquid\", \"@pop\"],\n      [/./, \"comment.content.liquid\"]\n    ],\n    otherTag: [\n      [\n        /\\{\\{/,\n        {\n          token: \"@rematch\",\n          switchTo: \"@liquidState.otherTag\"\n        }\n      ],\n      [\n        /\\{\\%/,\n        {\n          token: \"@rematch\",\n          switchTo: \"@liquidState.otherTag\"\n        }\n      ],\n      [/\\/?>/, \"delimiter.html\", \"@pop\"],\n      [/\"([^\"]*)\"/, \"attribute.value\"],\n      [/'([^']*)'/, \"attribute.value\"],\n      [/[\\w\\-]+/, \"attribute.name\"],\n      [/=/, \"delimiter\"],\n      [/[ \\t\\r\\n]+/]\n    ],\n    liquidState: [\n      [/\\{\\{/, \"delimiter.output.liquid\"],\n      [/\\}\\}/, { token: \"delimiter.output.liquid\", switchTo: \"@$S2.$S3\" }],\n      [/\\{\\%/, \"delimiter.tag.liquid\"],\n      [/raw\\s*\\%\\}/, \"delimiter.tag.liquid\", \"@liquidRaw\"],\n      [/\\%\\}/, { token: \"delimiter.tag.liquid\", switchTo: \"@$S2.$S3\" }],\n      { include: \"liquidRoot\" }\n    ],\n    liquidRaw: [\n      [/^(?!\\{\\%\\s*endraw\\s*\\%\\}).+/],\n      [/\\{\\%/, \"delimiter.tag.liquid\"],\n      [/@identifier/],\n      [/\\%\\}/, { token: \"delimiter.tag.liquid\", next: \"@root\" }]\n    ],\n    liquidRoot: [\n      [/\\d+(\\.\\d+)?/, \"number.liquid\"],\n      [/\"[^\"]*\"/, \"string.liquid\"],\n      [/'[^']*'/, \"string.liquid\"],\n      [/\\s+/],\n      [\n        /@symbol/,\n        {\n          cases: {\n            \"@operators\": \"operator.liquid\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/\\./],\n      [\n        /@identifier/,\n        {\n          cases: {\n            \"@constants\": \"keyword.liquid\",\n            \"@builtinFilters\": \"predefined.liquid\",\n            \"@builtinTags\": \"predefined.liquid\",\n            \"@default\": \"variable.liquid\"\n          }\n        }\n      ],\n      [/[^}|%]/, \"variable.liquid\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/liquid/liquid.js?");

/***/ })

}]);