"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_restructuredtext_restructuredtext_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/restructuredtext/restructuredtext.ts\nvar conf = {\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\", notIn: [\"string\"] }\n  ],\n  surroundingPairs: [\n    { open: \"(\", close: \")\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"`\", close: \"`\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*<!--\\\\s*#?region\\\\b.*-->\"),\n      end: new RegExp(\"^\\\\s*<!--\\\\s*#?endregion\\\\b.*-->\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".rst\",\n  control: /[\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n  escapes: /\\\\(?:@control)/,\n  empty: [\n    \"area\",\n    \"base\",\n    \"basefont\",\n    \"br\",\n    \"col\",\n    \"frame\",\n    \"hr\",\n    \"img\",\n    \"input\",\n    \"isindex\",\n    \"link\",\n    \"meta\",\n    \"param\"\n  ],\n  alphanumerics: /[A-Za-z0-9]/,\n  simpleRefNameWithoutBq: /(?:@alphanumerics[-_+:.]*@alphanumerics)+|(?:@alphanumerics+)/,\n  simpleRefName: /(?:`@phrase`|@simpleRefNameWithoutBq)/,\n  phrase: /@simpleRefNameWithoutBq(?:\\s@simpleRefNameWithoutBq)*/,\n  citationName: /[A-Za-z][A-Za-z0-9-_.]*/,\n  blockLiteralStart: /(?:[!\"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~]|[\\s])/,\n  precedingChars: /(?:[ -:/'\"<([{])/,\n  followingChars: /(?:[ -.,:;!?/'\")\\]}>]|$)/,\n  punctuation: /(=|-|~|`|#|\"|\\^|\\+|\\*|:|\\.|'|_|\\+)/,\n  tokenizer: {\n    root: [\n      [/^(@punctuation{3,}$){1,1}?/, \"keyword\"],\n      [/^\\s*([\\*\\-+‣•]|[a-zA-Z0-9]+\\.|\\([a-zA-Z0-9]+\\)|[a-zA-Z0-9]+\\))\\s/, \"keyword\"],\n      [/([ ]::)\\s*$/, \"keyword\", \"@blankLineOfLiteralBlocks\"],\n      [/(::)\\s*$/, \"keyword\", \"@blankLineOfLiteralBlocks\"],\n      { include: \"@tables\" },\n      { include: \"@explicitMarkupBlocks\" },\n      { include: \"@inlineMarkup\" }\n    ],\n    explicitMarkupBlocks: [\n      { include: \"@citations\" },\n      { include: \"@footnotes\" },\n      [\n        /^(\\.\\.\\s)(@simpleRefName)(::\\s)(.*)$/,\n        [{ token: \"\", next: \"subsequentLines\" }, \"keyword\", \"\", \"\"]\n      ],\n      [\n        /^(\\.\\.)(\\s+)(_)(@simpleRefName)(:)(\\s+)(.*)/,\n        [{ token: \"\", next: \"hyperlinks\" }, \"\", \"\", \"string.link\", \"\", \"\", \"string.link\"]\n      ],\n      [\n        /^((?:(?:\\.\\.)(?:\\s+))?)(__)(:)(\\s+)(.*)/,\n        [{ token: \"\", next: \"subsequentLines\" }, \"\", \"\", \"\", \"string.link\"]\n      ],\n      [/^(__\\s+)(.+)/, [\"\", \"string.link\"]],\n      [\n        /^(\\.\\.)( \\|)([^| ]+[^|]*[^| ]*)(\\| )(@simpleRefName)(:: .*)/,\n        [{ token: \"\", next: \"subsequentLines\" }, \"\", \"string.link\", \"\", \"keyword\", \"\"],\n        \"@rawBlocks\"\n      ],\n      [/(\\|)([^| ]+[^|]*[^| ]*)(\\|_{0,2})/, [\"\", \"string.link\", \"\"]],\n      [/^(\\.\\.)([ ].*)$/, [{ token: \"\", next: \"@comments\" }, \"comment\"]]\n    ],\n    inlineMarkup: [\n      { include: \"@citationsReference\" },\n      { include: \"@footnotesReference\" },\n      [/(@simpleRefName)(_{1,2})/, [\"string.link\", \"\"]],\n      [/(`)([^<`]+\\s+)(<)(.*)(>)(`)(_)/, [\"\", \"string.link\", \"\", \"string.link\", \"\", \"\", \"\"]],\n      [/\\*\\*([^\\\\*]|\\*(?!\\*))+\\*\\*/, \"strong\"],\n      [/\\*[^*]+\\*/, \"emphasis\"],\n      [/(``)((?:[^`]|\\`(?!`))+)(``)/, [\"\", \"keyword\", \"\"]],\n      [/(__\\s+)(.+)/, [\"\", \"keyword\"]],\n      [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, [\"\", \"keyword\", \"\", \"\", \"\"]],\n      [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, [\"\", \"\", \"\", \"keyword\", \"\"]],\n      [/(`)([^`]+)(`)/, \"\"],\n      [/(_`)(@phrase)(`)/, [\"\", \"string.link\", \"\"]]\n    ],\n    citations: [\n      [\n        /^(\\.\\.\\s+\\[)((?:@citationName))(\\]\\s+)(.*)/,\n        [{ token: \"\", next: \"@subsequentLines\" }, \"string.link\", \"\", \"\"]\n      ]\n    ],\n    citationsReference: [[/(\\[)(@citationName)(\\]_)/, [\"\", \"string.link\", \"\"]]],\n    footnotes: [\n      [\n        /^(\\.\\.\\s+\\[)((?:[0-9]+))(\\]\\s+.*)/,\n        [{ token: \"\", next: \"@subsequentLines\" }, \"string.link\", \"\"]\n      ],\n      [\n        /^(\\.\\.\\s+\\[)((?:#@simpleRefName?))(\\]\\s+)(.*)/,\n        [{ token: \"\", next: \"@subsequentLines\" }, \"string.link\", \"\", \"\"]\n      ],\n      [\n        /^(\\.\\.\\s+\\[)((?:\\*))(\\]\\s+)(.*)/,\n        [{ token: \"\", next: \"@subsequentLines\" }, \"string.link\", \"\", \"\"]\n      ]\n    ],\n    footnotesReference: [\n      [/(\\[)([0-9]+)(\\])(_)/, [\"\", \"string.link\", \"\", \"\"]],\n      [/(\\[)(#@simpleRefName?)(\\])(_)/, [\"\", \"string.link\", \"\", \"\"]],\n      [/(\\[)(\\*)(\\])(_)/, [\"\", \"string.link\", \"\", \"\"]]\n    ],\n    blankLineOfLiteralBlocks: [\n      [/^$/, \"\", \"@subsequentLinesOfLiteralBlocks\"],\n      [/^.*$/, \"\", \"@pop\"]\n    ],\n    subsequentLinesOfLiteralBlocks: [\n      [/(@blockLiteralStart+)(.*)/, [\"keyword\", \"\"]],\n      [/^(?!blockLiteralStart)/, \"\", \"@popall\"]\n    ],\n    subsequentLines: [\n      [/^[\\s]+.*/, \"\"],\n      [/^(?!\\s)/, \"\", \"@pop\"]\n    ],\n    hyperlinks: [\n      [/^[\\s]+.*/, \"string.link\"],\n      [/^(?!\\s)/, \"\", \"@pop\"]\n    ],\n    comments: [\n      [/^[\\s]+.*/, \"comment\"],\n      [/^(?!\\s)/, \"\", \"@pop\"]\n    ],\n    tables: [\n      [/\\+-[+-]+/, \"keyword\"],\n      [/\\+=[+=]+/, \"keyword\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js?");

/***/ })

}]);