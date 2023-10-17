"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_mdx_mdx_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ \"include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js\");\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, \"default\"), secondTarget && __copyProps(secondTarget, mod, \"default\"));\n\n// src/fillers/monaco-editor-core.ts\nvar monaco_editor_core_exports = {};\n__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// src/basic-languages/mdx/mdx.ts\nvar conf = {\n  comments: {\n    blockComment: [\"{/*\", \"*/}\"]\n  },\n  brackets: [[\"{\", \"}\"]],\n  autoClosingPairs: [\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"\\u201C\", close: \"\\u201D\" },\n    { open: \"\\u2018\", close: \"\\u2019\" },\n    { open: \"`\", close: \"`\" },\n    { open: \"{\", close: \"}\" },\n    { open: \"(\", close: \")\" },\n    { open: \"_\", close: \"_\" },\n    { open: \"**\", close: \"**\" },\n    { open: \"<\", close: \">\" }\n  ],\n  onEnterRules: [\n    {\n      beforeText: /^\\s*- .+/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: \"- \" }\n    },\n    {\n      beforeText: /^\\s*\\+ .+/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: \"+ \" }\n    },\n    {\n      beforeText: /^\\s*\\* .+/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: \"* \" }\n    },\n    {\n      beforeText: /^> /,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: \"> \" }\n    },\n    {\n      beforeText: /<\\w+/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }\n    },\n    {\n      beforeText: /\\s+>\\s*$/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }\n    },\n    {\n      beforeText: /<\\/\\w+>/,\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Outdent }\n    },\n    ...Array.from({ length: 100 }, (_, index) => ({\n      beforeText: new RegExp(`^${index}\\\\. .+`),\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.None, appendText: `${index + 1}. ` }\n    }))\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".mdx\",\n  control: /[!#()*+.[\\\\\\]_`{}\\-]/,\n  escapes: /\\\\@control/,\n  tokenizer: {\n    root: [\n      [/^---$/, { token: \"meta.content\", next: \"@frontmatter\", nextEmbedded: \"yaml\" }],\n      [/^\\s*import/, { token: \"keyword\", next: \"@import\", nextEmbedded: \"js\" }],\n      [/^\\s*export/, { token: \"keyword\", next: \"@export\", nextEmbedded: \"js\" }],\n      [/<\\w+/, { token: \"type.identifier\", next: \"@jsx\" }],\n      [/<\\/?\\w+>/, \"type.identifier\"],\n      [\n        /^(\\s*)(>*\\s*)(#{1,6}\\s)/,\n        [{ token: \"white\" }, { token: \"comment\" }, { token: \"keyword\", next: \"@header\" }]\n      ],\n      [/^(\\s*)(>*\\s*)([*+-])(\\s+)/, [\"white\", \"comment\", \"keyword\", \"white\"]],\n      [/^(\\s*)(>*\\s*)(\\d{1,9}\\.)(\\s+)/, [\"white\", \"comment\", \"number\", \"white\"]],\n      [/^(\\s*)(>*\\s*)(\\d{1,9}\\.)(\\s+)/, [\"white\", \"comment\", \"number\", \"white\"]],\n      [/^(\\s*)(>*\\s*)(-{3,}|\\*{3,}|_{3,})$/, [\"white\", \"comment\", \"keyword\"]],\n      [/`{3,}(\\s.*)?$/, { token: \"string\", next: \"@codeblock_backtick\" }],\n      [/~{3,}(\\s.*)?$/, { token: \"string\", next: \"@codeblock_tilde\" }],\n      [\n        /`{3,}(\\S+).*$/,\n        { token: \"string\", next: \"@codeblock_highlight_backtick\", nextEmbedded: \"$1\" }\n      ],\n      [\n        /~{3,}(\\S+).*$/,\n        { token: \"string\", next: \"@codeblock_highlight_tilde\", nextEmbedded: \"$1\" }\n      ],\n      [/^(\\s*)(-{4,})$/, [\"white\", \"comment\"]],\n      [/^(\\s*)(>+)/, [\"white\", \"comment\"]],\n      { include: \"content\" }\n    ],\n    content: [\n      [\n        /(\\[)(.+)(]\\()(.+)(\\s+\".*\")(\\))/,\n        [\"\", \"string.link\", \"\", \"type.identifier\", \"string.link\", \"\"]\n      ],\n      [/(\\[)(.+)(]\\()(.+)(\\))/, [\"\", \"type.identifier\", \"\", \"string.link\", \"\"]],\n      [/(\\[)(.+)(]\\[)(.+)(])/, [\"\", \"type.identifier\", \"\", \"type.identifier\", \"\"]],\n      [/(\\[)(.+)(]:\\s+)(\\S*)/, [\"\", \"type.identifier\", \"\", \"string.link\"]],\n      [/(\\[)(.+)(])/, [\"\", \"type.identifier\", \"\"]],\n      [/`.*`/, \"variable.source\"],\n      [/_/, { token: \"emphasis\", next: \"@emphasis_underscore\" }],\n      [/\\*(?!\\*)/, { token: \"emphasis\", next: \"@emphasis_asterisk\" }],\n      [/\\*\\*/, { token: \"strong\", next: \"@strong\" }],\n      [/{/, { token: \"delimiter.bracket\", next: \"@expression\", nextEmbedded: \"js\" }]\n    ],\n    import: [[/'\\s*(;|$)/, { token: \"string\", next: \"@pop\", nextEmbedded: \"@pop\" }]],\n    expression: [\n      [/{/, { token: \"delimiter.bracket\", next: \"@expression\" }],\n      [/}/, { token: \"delimiter.bracket\", next: \"@pop\", nextEmbedded: \"@pop\" }]\n    ],\n    export: [[/^\\s*$/, { token: \"delimiter.bracket\", next: \"@pop\", nextEmbedded: \"@pop\" }]],\n    jsx: [\n      [/\\s+/, \"\"],\n      [/(\\w+)(=)(\"(?:[^\"\\\\]|\\\\.)*\")/, [\"attribute.name\", \"operator\", \"string\"]],\n      [/(\\w+)(=)('(?:[^'\\\\]|\\\\.)*')/, [\"attribute.name\", \"operator\", \"string\"]],\n      [/(\\w+(?=\\s|>|={|$))/, [\"attribute.name\"]],\n      [/={/, { token: \"delimiter.bracket\", next: \"@expression\", nextEmbedded: \"js\" }],\n      [/>/, { token: \"type.identifier\", next: \"@pop\" }]\n    ],\n    header: [\n      [/.$/, { token: \"keyword\", next: \"@pop\" }],\n      { include: \"content\" },\n      [/./, { token: \"keyword\" }]\n    ],\n    strong: [\n      [/\\*\\*/, { token: \"strong\", next: \"@pop\" }],\n      { include: \"content\" },\n      [/./, { token: \"strong\" }]\n    ],\n    emphasis_underscore: [\n      [/_/, { token: \"emphasis\", next: \"@pop\" }],\n      { include: \"content\" },\n      [/./, { token: \"emphasis\" }]\n    ],\n    emphasis_asterisk: [\n      [/\\*(?!\\*)/, { token: \"emphasis\", next: \"@pop\" }],\n      { include: \"content\" },\n      [/./, { token: \"emphasis\" }]\n    ],\n    frontmatter: [[/^---$/, { token: \"meta.content\", nextEmbedded: \"@pop\", next: \"@pop\" }]],\n    codeblock_highlight_backtick: [\n      [/\\s*`{3,}\\s*$/, { token: \"string\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/.*$/, \"variable.source\"]\n    ],\n    codeblock_highlight_tilde: [\n      [/\\s*~{3,}\\s*$/, { token: \"string\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/.*$/, \"variable.source\"]\n    ],\n    codeblock_backtick: [\n      [/\\s*`{3,}\\s*$/, { token: \"string\", next: \"@pop\" }],\n      [/.*$/, \"variable.source\"]\n    ],\n    codeblock_tilde: [\n      [/\\s*~{3,}\\s*$/, { token: \"string\", next: \"@pop\" }],\n      [/.*$/, \"variable.source\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/mdx/mdx.js?");

/***/ })

}]);