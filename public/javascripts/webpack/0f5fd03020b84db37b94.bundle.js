"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_cypher_cypher_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.js":
/*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/cypher/cypher.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"`\", close: \"`\" }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"`\", close: \"`\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: `.cypher`,\n  ignoreCase: true,\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.bracket\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" }\n  ],\n  keywords: [\n    \"ALL\",\n    \"AND\",\n    \"AS\",\n    \"ASC\",\n    \"ASCENDING\",\n    \"BY\",\n    \"CALL\",\n    \"CASE\",\n    \"CONTAINS\",\n    \"CREATE\",\n    \"DELETE\",\n    \"DESC\",\n    \"DESCENDING\",\n    \"DETACH\",\n    \"DISTINCT\",\n    \"ELSE\",\n    \"END\",\n    \"ENDS\",\n    \"EXISTS\",\n    \"IN\",\n    \"IS\",\n    \"LIMIT\",\n    \"MANDATORY\",\n    \"MATCH\",\n    \"MERGE\",\n    \"NOT\",\n    \"ON\",\n    \"ON\",\n    \"OPTIONAL\",\n    \"OR\",\n    \"ORDER\",\n    \"REMOVE\",\n    \"RETURN\",\n    \"SET\",\n    \"SKIP\",\n    \"STARTS\",\n    \"THEN\",\n    \"UNION\",\n    \"UNWIND\",\n    \"WHEN\",\n    \"WHERE\",\n    \"WITH\",\n    \"XOR\",\n    \"YIELD\"\n  ],\n  builtinLiterals: [\"true\", \"TRUE\", \"false\", \"FALSE\", \"null\", \"NULL\"],\n  builtinFunctions: [\n    \"abs\",\n    \"acos\",\n    \"asin\",\n    \"atan\",\n    \"atan2\",\n    \"avg\",\n    \"ceil\",\n    \"coalesce\",\n    \"collect\",\n    \"cos\",\n    \"cot\",\n    \"count\",\n    \"degrees\",\n    \"e\",\n    \"endNode\",\n    \"exists\",\n    \"exp\",\n    \"floor\",\n    \"head\",\n    \"id\",\n    \"keys\",\n    \"labels\",\n    \"last\",\n    \"left\",\n    \"length\",\n    \"log\",\n    \"log10\",\n    \"lTrim\",\n    \"max\",\n    \"min\",\n    \"nodes\",\n    \"percentileCont\",\n    \"percentileDisc\",\n    \"pi\",\n    \"properties\",\n    \"radians\",\n    \"rand\",\n    \"range\",\n    \"relationships\",\n    \"replace\",\n    \"reverse\",\n    \"right\",\n    \"round\",\n    \"rTrim\",\n    \"sign\",\n    \"sin\",\n    \"size\",\n    \"split\",\n    \"sqrt\",\n    \"startNode\",\n    \"stDev\",\n    \"stDevP\",\n    \"substring\",\n    \"sum\",\n    \"tail\",\n    \"tan\",\n    \"timestamp\",\n    \"toBoolean\",\n    \"toFloat\",\n    \"toInteger\",\n    \"toLower\",\n    \"toString\",\n    \"toUpper\",\n    \"trim\",\n    \"type\"\n  ],\n  operators: [\n    \"+\",\n    \"-\",\n    \"*\",\n    \"/\",\n    \"%\",\n    \"^\",\n    \"=\",\n    \"<>\",\n    \"<\",\n    \">\",\n    \"<=\",\n    \">=\",\n    \"->\",\n    \"<-\",\n    \"-->\",\n    \"<--\"\n  ],\n  escapes: /\\\\(?:[tbnrf\\\\\"'`]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  digits: /\\d+/,\n  octaldigits: /[0-7]+/,\n  hexdigits: /[0-9a-fA-F]+/,\n  tokenizer: {\n    root: [[/[{}[\\]()]/, \"@brackets\"], { include: \"common\" }],\n    common: [\n      { include: \"@whitespace\" },\n      { include: \"@numbers\" },\n      { include: \"@strings\" },\n      [/:[a-zA-Z_][\\w]*/, \"type.identifier\"],\n      [\n        /[a-zA-Z_][\\w]*(?=\\()/,\n        {\n          cases: {\n            \"@builtinFunctions\": \"predefined.function\"\n          }\n        }\n      ],\n      [\n        /[a-zA-Z_$][\\w$]*/,\n        {\n          cases: {\n            \"@keywords\": \"keyword\",\n            \"@builtinLiterals\": \"predefined.literal\",\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      [/`/, \"identifier.escape\", \"@identifierBacktick\"],\n      [/[;,.:|]/, \"delimiter\"],\n      [\n        /[<>=%+\\-*/^]+/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ]\n    ],\n    numbers: [\n      [/-?(@digits)[eE](-?(@digits))?/, \"number.float\"],\n      [/-?(@digits)?\\.(@digits)([eE]-?(@digits))?/, \"number.float\"],\n      [/-?0x(@hexdigits)/, \"number.hex\"],\n      [/-?0(@octaldigits)/, \"number.octal\"],\n      [/-?(@digits)/, \"number\"]\n    ],\n    strings: [\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/'([^'\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, \"string\", \"@stringDouble\"],\n      [/'/, \"string\", \"@stringSingle\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/\\/\\/.*/, \"comment\"],\n      [/[^/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[/*]/, \"comment\"]\n    ],\n    stringDouble: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string\"],\n      [/\\\\./, \"string.invalid\"],\n      [/\"/, \"string\", \"@pop\"]\n    ],\n    stringSingle: [\n      [/[^\\\\']+/, \"string\"],\n      [/@escapes/, \"string\"],\n      [/\\\\./, \"string.invalid\"],\n      [/'/, \"string\", \"@pop\"]\n    ],\n    identifierBacktick: [\n      [/[^\\\\`]+/, \"identifier.escape\"],\n      [/@escapes/, \"identifier.escape\"],\n      [/\\\\./, \"identifier.escape.invalid\"],\n      [/`/, \"identifier.escape\", \"@pop\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/cypher/cypher.js?");

/***/ })

}]);