"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_qsharp_qsharp_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/qsharp/qsharp.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\"\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"', notIn: [\"string\", \"comment\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' }\n  ]\n};\nvar language = {\n  keywords: [\n    \"namespace\",\n    \"open\",\n    \"as\",\n    \"operation\",\n    \"function\",\n    \"body\",\n    \"adjoint\",\n    \"newtype\",\n    \"controlled\",\n    \"if\",\n    \"elif\",\n    \"else\",\n    \"repeat\",\n    \"until\",\n    \"fixup\",\n    \"for\",\n    \"in\",\n    \"while\",\n    \"return\",\n    \"fail\",\n    \"within\",\n    \"apply\",\n    \"Adjoint\",\n    \"Controlled\",\n    \"Adj\",\n    \"Ctl\",\n    \"is\",\n    \"self\",\n    \"auto\",\n    \"distribute\",\n    \"invert\",\n    \"intrinsic\",\n    \"let\",\n    \"set\",\n    \"w/\",\n    \"new\",\n    \"not\",\n    \"and\",\n    \"or\",\n    \"use\",\n    \"borrow\",\n    \"using\",\n    \"borrowing\",\n    \"mutable\",\n    \"internal\"\n  ],\n  typeKeywords: [\n    \"Unit\",\n    \"Int\",\n    \"BigInt\",\n    \"Double\",\n    \"Bool\",\n    \"String\",\n    \"Qubit\",\n    \"Result\",\n    \"Pauli\",\n    \"Range\"\n  ],\n  invalidKeywords: [\n    \"abstract\",\n    \"base\",\n    \"bool\",\n    \"break\",\n    \"byte\",\n    \"case\",\n    \"catch\",\n    \"char\",\n    \"checked\",\n    \"class\",\n    \"const\",\n    \"continue\",\n    \"decimal\",\n    \"default\",\n    \"delegate\",\n    \"do\",\n    \"double\",\n    \"enum\",\n    \"event\",\n    \"explicit\",\n    \"extern\",\n    \"finally\",\n    \"fixed\",\n    \"float\",\n    \"foreach\",\n    \"goto\",\n    \"implicit\",\n    \"int\",\n    \"interface\",\n    \"lock\",\n    \"long\",\n    \"null\",\n    \"object\",\n    \"operator\",\n    \"out\",\n    \"override\",\n    \"params\",\n    \"private\",\n    \"protected\",\n    \"public\",\n    \"readonly\",\n    \"ref\",\n    \"sbyte\",\n    \"sealed\",\n    \"short\",\n    \"sizeof\",\n    \"stackalloc\",\n    \"static\",\n    \"string\",\n    \"struct\",\n    \"switch\",\n    \"this\",\n    \"throw\",\n    \"try\",\n    \"typeof\",\n    \"unit\",\n    \"ulong\",\n    \"unchecked\",\n    \"unsafe\",\n    \"ushort\",\n    \"virtual\",\n    \"void\",\n    \"volatile\"\n  ],\n  constants: [\"true\", \"false\", \"PauliI\", \"PauliX\", \"PauliY\", \"PauliZ\", \"One\", \"Zero\"],\n  builtin: [\n    \"X\",\n    \"Y\",\n    \"Z\",\n    \"H\",\n    \"HY\",\n    \"S\",\n    \"T\",\n    \"SWAP\",\n    \"CNOT\",\n    \"CCNOT\",\n    \"MultiX\",\n    \"R\",\n    \"RFrac\",\n    \"Rx\",\n    \"Ry\",\n    \"Rz\",\n    \"R1\",\n    \"R1Frac\",\n    \"Exp\",\n    \"ExpFrac\",\n    \"Measure\",\n    \"M\",\n    \"MultiM\",\n    \"Message\",\n    \"Length\",\n    \"Assert\",\n    \"AssertProb\",\n    \"AssertEqual\"\n  ],\n  operators: [\n    \"and=\",\n    \"<-\",\n    \"->\",\n    \"*\",\n    \"*=\",\n    \"@\",\n    \"!\",\n    \"^\",\n    \"^=\",\n    \":\",\n    \"::\",\n    \"..\",\n    \"==\",\n    \"...\",\n    \"=\",\n    \"=>\",\n    \">\",\n    \">=\",\n    \"<\",\n    \"<=\",\n    \"-\",\n    \"-=\",\n    \"!=\",\n    \"or=\",\n    \"%\",\n    \"%=\",\n    \"|\",\n    \"+\",\n    \"+=\",\n    \"?\",\n    \"/\",\n    \"/=\",\n    \"&&&\",\n    \"&&&=\",\n    \"^^^\",\n    \"^^^=\",\n    \">>>\",\n    \">>>=\",\n    \"<<<\",\n    \"<<<=\",\n    \"|||\",\n    \"|||=\",\n    \"~~~\",\n    \"_\",\n    \"w/\",\n    \"w/=\"\n  ],\n  namespaceFollows: [\"namespace\", \"open\"],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%@._]+/,\n  escapes: /\\\\[\\s\\S]/,\n  tokenizer: {\n    root: [\n      [\n        /[a-zA-Z_$][\\w$]*/,\n        {\n          cases: {\n            \"@namespaceFollows\": {\n              token: \"keyword.$0\",\n              next: \"@namespace\"\n            },\n            \"@typeKeywords\": \"type\",\n            \"@keywords\": \"keyword\",\n            \"@constants\": \"constant\",\n            \"@builtin\": \"keyword\",\n            \"@invalidKeywords\": \"invalid\",\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/@symbols/, { cases: { \"@operators\": \"operator\", \"@default\": \"\" } }],\n      [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, \"number.float\"],\n      [/\\d+/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@string\" }]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    namespace: [\n      { include: \"@whitespace\" },\n      [/[A-Za-z]\\w*/, \"namespace\"],\n      [/[\\.=]/, \"delimiter\"],\n      [\"\", \"\", \"@pop\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [/(\\/\\/).*/, \"comment\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/qsharp/qsharp.js?");

/***/ })

}]);