"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_xml_xml_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.api.js */ \"include-loader!./node_modules/monaco-editor/esm/vs/editor/editor.api.js\");\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, \"default\"), secondTarget && __copyProps(secondTarget, mod, \"default\"));\n\n// src/fillers/monaco-editor-core.ts\nvar monaco_editor_core_exports = {};\n__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// src/basic-languages/xml/xml.ts\nvar conf = {\n  comments: {\n    blockComment: [\"<!--\", \"-->\"]\n  },\n  brackets: [[\"<\", \">\"]],\n  autoClosingPairs: [\n    { open: \"<\", close: \">\" },\n    { open: \"'\", close: \"'\" },\n    { open: '\"', close: '\"' }\n  ],\n  surroundingPairs: [\n    { open: \"<\", close: \">\" },\n    { open: \"'\", close: \"'\" },\n    { open: '\"', close: '\"' }\n  ],\n  onEnterRules: [\n    {\n      beforeText: new RegExp(`<([_:\\\\w][_:\\\\w-.\\\\d]*)([^/>]*(?!/)>)[^<]*$`, \"i\"),\n      afterText: /^<\\/([_:\\w][_:\\w-.\\d]*)\\s*>$/i,\n      action: {\n        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent\n      }\n    },\n    {\n      beforeText: new RegExp(`<(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$`, \"i\"),\n      action: { indentAction: monaco_editor_core_exports.languages.IndentAction.Indent }\n    }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".xml\",\n  ignoreCase: true,\n  qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\n  tokenizer: {\n    root: [\n      [/[^<&]+/, \"\"],\n      { include: \"@whitespace\" },\n      [/(<)(@qualifiedName)/, [{ token: \"delimiter\" }, { token: \"tag\", next: \"@tag\" }]],\n      [\n        /(<\\/)(@qualifiedName)(\\s*)(>)/,\n        [{ token: \"delimiter\" }, { token: \"tag\" }, \"\", { token: \"delimiter\" }]\n      ],\n      [/(<\\?)(@qualifiedName)/, [{ token: \"delimiter\" }, { token: \"metatag\", next: \"@tag\" }]],\n      [/(<\\!)(@qualifiedName)/, [{ token: \"delimiter\" }, { token: \"metatag\", next: \"@tag\" }]],\n      [/<\\!\\[CDATA\\[/, { token: \"delimiter.cdata\", next: \"@cdata\" }],\n      [/&\\w+;/, \"string.escape\"]\n    ],\n    cdata: [\n      [/[^\\]]+/, \"\"],\n      [/\\]\\]>/, { token: \"delimiter.cdata\", next: \"@pop\" }],\n      [/\\]/, \"\"]\n    ],\n    tag: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/, [\"attribute.name\", \"\", \"attribute.value\"]],\n      [\n        /(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/,\n        [\"attribute.name\", \"\", \"attribute.value\"]\n      ],\n      [/(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/, [\"attribute.name\", \"\", \"attribute.value\"]],\n      [/@qualifiedName/, \"attribute.name\"],\n      [/\\?>/, { token: \"delimiter\", next: \"@pop\" }],\n      [/(\\/)(>)/, [{ token: \"tag\" }, { token: \"delimiter\", next: \"@pop\" }]],\n      [/>/, { token: \"delimiter\", next: \"@pop\" }]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"\"],\n      [/<!--/, { token: \"comment\", next: \"@comment\" }]\n    ],\n    comment: [\n      [/[^<\\-]+/, \"comment.content\"],\n      [/-->/, { token: \"comment\", next: \"@pop\" }],\n      [/<!--/, \"comment.content.invalid\"],\n      [/[<\\-]/, \"comment.content\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js?");

/***/ })

}]);