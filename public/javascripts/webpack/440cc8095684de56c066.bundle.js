"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_ecl_ecl_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.js":
/*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/ecl/ecl.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"'\", close: \"'\", notIn: [\"string\", \"comment\"] },\n    { open: '\"', close: '\"', notIn: [\"string\", \"comment\"] }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\" },\n    { open: \"'\", close: \"'\" },\n    { open: '\"', close: '\"' }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".ecl\",\n  ignoreCase: true,\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" },\n    { open: \"<\", close: \">\", token: \"delimiter.angle\" }\n  ],\n  pounds: [\n    \"append\",\n    \"break\",\n    \"declare\",\n    \"demangle\",\n    \"end\",\n    \"for\",\n    \"getdatatype\",\n    \"if\",\n    \"inmodule\",\n    \"loop\",\n    \"mangle\",\n    \"onwarning\",\n    \"option\",\n    \"set\",\n    \"stored\",\n    \"uniquename\"\n  ].join(\"|\"),\n  keywords: [\n    \"__compressed__\",\n    \"after\",\n    \"all\",\n    \"and\",\n    \"any\",\n    \"as\",\n    \"atmost\",\n    \"before\",\n    \"beginc\",\n    \"best\",\n    \"between\",\n    \"case\",\n    \"cluster\",\n    \"compressed\",\n    \"compression\",\n    \"const\",\n    \"counter\",\n    \"csv\",\n    \"default\",\n    \"descend\",\n    \"embed\",\n    \"encoding\",\n    \"encrypt\",\n    \"end\",\n    \"endc\",\n    \"endembed\",\n    \"endmacro\",\n    \"enum\",\n    \"escape\",\n    \"except\",\n    \"exclusive\",\n    \"expire\",\n    \"export\",\n    \"extend\",\n    \"fail\",\n    \"few\",\n    \"fileposition\",\n    \"first\",\n    \"flat\",\n    \"forward\",\n    \"from\",\n    \"full\",\n    \"function\",\n    \"functionmacro\",\n    \"group\",\n    \"grouped\",\n    \"heading\",\n    \"hole\",\n    \"ifblock\",\n    \"import\",\n    \"in\",\n    \"inner\",\n    \"interface\",\n    \"internal\",\n    \"joined\",\n    \"keep\",\n    \"keyed\",\n    \"last\",\n    \"left\",\n    \"limit\",\n    \"linkcounted\",\n    \"literal\",\n    \"little_endian\",\n    \"load\",\n    \"local\",\n    \"locale\",\n    \"lookup\",\n    \"lzw\",\n    \"macro\",\n    \"many\",\n    \"maxcount\",\n    \"maxlength\",\n    \"min skew\",\n    \"module\",\n    \"mofn\",\n    \"multiple\",\n    \"named\",\n    \"namespace\",\n    \"nocase\",\n    \"noroot\",\n    \"noscan\",\n    \"nosort\",\n    \"not\",\n    \"noxpath\",\n    \"of\",\n    \"onfail\",\n    \"only\",\n    \"opt\",\n    \"or\",\n    \"outer\",\n    \"overwrite\",\n    \"packed\",\n    \"partition\",\n    \"penalty\",\n    \"physicallength\",\n    \"pipe\",\n    \"prefetch\",\n    \"quote\",\n    \"record\",\n    \"repeat\",\n    \"retry\",\n    \"return\",\n    \"right\",\n    \"right1\",\n    \"right2\",\n    \"rows\",\n    \"rowset\",\n    \"scan\",\n    \"scope\",\n    \"self\",\n    \"separator\",\n    \"service\",\n    \"shared\",\n    \"skew\",\n    \"skip\",\n    \"smart\",\n    \"soapaction\",\n    \"sql\",\n    \"stable\",\n    \"store\",\n    \"terminator\",\n    \"thor\",\n    \"threshold\",\n    \"timelimit\",\n    \"timeout\",\n    \"token\",\n    \"transform\",\n    \"trim\",\n    \"type\",\n    \"unicodeorder\",\n    \"unordered\",\n    \"unsorted\",\n    \"unstable\",\n    \"update\",\n    \"use\",\n    \"validate\",\n    \"virtual\",\n    \"whole\",\n    \"width\",\n    \"wild\",\n    \"within\",\n    \"wnotrim\",\n    \"xml\",\n    \"xpath\"\n  ],\n  functions: [\n    \"abs\",\n    \"acos\",\n    \"aggregate\",\n    \"allnodes\",\n    \"apply\",\n    \"ascii\",\n    \"asin\",\n    \"assert\",\n    \"asstring\",\n    \"atan\",\n    \"atan2\",\n    \"ave\",\n    \"build\",\n    \"buildindex\",\n    \"case\",\n    \"catch\",\n    \"choose\",\n    \"choosen\",\n    \"choosesets\",\n    \"clustersize\",\n    \"combine\",\n    \"correlation\",\n    \"cos\",\n    \"cosh\",\n    \"count\",\n    \"covariance\",\n    \"cron\",\n    \"dataset\",\n    \"dedup\",\n    \"define\",\n    \"denormalize\",\n    \"dictionary\",\n    \"distribute\",\n    \"distributed\",\n    \"distribution\",\n    \"ebcdic\",\n    \"enth\",\n    \"error\",\n    \"evaluate\",\n    \"event\",\n    \"eventextra\",\n    \"eventname\",\n    \"exists\",\n    \"exp\",\n    \"fail\",\n    \"failcode\",\n    \"failmessage\",\n    \"fetch\",\n    \"fromunicode\",\n    \"fromxml\",\n    \"getenv\",\n    \"getisvalid\",\n    \"global\",\n    \"graph\",\n    \"group\",\n    \"hash\",\n    \"hash32\",\n    \"hash64\",\n    \"hashcrc\",\n    \"hashmd5\",\n    \"having\",\n    \"httpcall\",\n    \"httpheader\",\n    \"if\",\n    \"iff\",\n    \"index\",\n    \"intformat\",\n    \"isvalid\",\n    \"iterate\",\n    \"join\",\n    \"keydiff\",\n    \"keypatch\",\n    \"keyunicode\",\n    \"length\",\n    \"library\",\n    \"limit\",\n    \"ln\",\n    \"loadxml\",\n    \"local\",\n    \"log\",\n    \"loop\",\n    \"map\",\n    \"matched\",\n    \"matchlength\",\n    \"matchposition\",\n    \"matchtext\",\n    \"matchunicode\",\n    \"max\",\n    \"merge\",\n    \"mergejoin\",\n    \"min\",\n    \"nofold\",\n    \"nolocal\",\n    \"nonempty\",\n    \"normalize\",\n    \"nothor\",\n    \"notify\",\n    \"output\",\n    \"parallel\",\n    \"parse\",\n    \"pipe\",\n    \"power\",\n    \"preload\",\n    \"process\",\n    \"project\",\n    \"pull\",\n    \"random\",\n    \"range\",\n    \"rank\",\n    \"ranked\",\n    \"realformat\",\n    \"recordof\",\n    \"regexfind\",\n    \"regexreplace\",\n    \"regroup\",\n    \"rejected\",\n    \"rollup\",\n    \"round\",\n    \"roundup\",\n    \"row\",\n    \"rowdiff\",\n    \"sample\",\n    \"sequential\",\n    \"set\",\n    \"sin\",\n    \"sinh\",\n    \"sizeof\",\n    \"soapcall\",\n    \"sort\",\n    \"sorted\",\n    \"sqrt\",\n    \"stepped\",\n    \"stored\",\n    \"sum\",\n    \"table\",\n    \"tan\",\n    \"tanh\",\n    \"thisnode\",\n    \"topn\",\n    \"tounicode\",\n    \"toxml\",\n    \"transfer\",\n    \"transform\",\n    \"trim\",\n    \"truncate\",\n    \"typeof\",\n    \"ungroup\",\n    \"unicodeorder\",\n    \"variance\",\n    \"wait\",\n    \"which\",\n    \"workunit\",\n    \"xmldecode\",\n    \"xmlencode\",\n    \"xmltext\",\n    \"xmlunicode\"\n  ],\n  typesint: [\"integer\", \"unsigned\"].join(\"|\"),\n  typesnum: [\"data\", \"qstring\", \"string\", \"unicode\", \"utf8\", \"varstring\", \"varunicode\"],\n  typesone: [\n    \"ascii\",\n    \"big_endian\",\n    \"boolean\",\n    \"data\",\n    \"decimal\",\n    \"ebcdic\",\n    \"grouped\",\n    \"integer\",\n    \"linkcounted\",\n    \"pattern\",\n    \"qstring\",\n    \"real\",\n    \"record\",\n    \"rule\",\n    \"set of\",\n    \"streamed\",\n    \"string\",\n    \"token\",\n    \"udecimal\",\n    \"unicode\",\n    \"unsigned\",\n    \"utf8\",\n    \"varstring\",\n    \"varunicode\"\n  ].join(\"|\"),\n  operators: [\"+\", \"-\", \"/\", \":=\", \"<\", \"<>\", \"=\", \">\", \"\\\\\", \"and\", \"in\", \"not\", \"or\"],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [/@typesint[4|8]/, \"type\"],\n      [/#(@pounds)/, \"type\"],\n      [/@typesone/, \"type\"],\n      [\n        /[a-zA-Z_$][\\w-$]*/,\n        {\n          cases: {\n            \"@functions\": \"keyword.function\",\n            \"@keywords\": \"keyword\",\n            \"@operators\": \"operator\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/[<>](?!@symbols)/, \"@brackets\"],\n      [\n        /@symbols/,\n        {\n          cases: {\n            \"@operators\": \"delimiter\",\n            \"@default\": \"\"\n          }\n        }\n      ],\n      [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?/, \"number.float\"],\n      [/0[xX][0-9a-fA-F_]+/, \"number.hex\"],\n      [/0[bB][01]+/, \"number.hex\"],\n      [/[0-9_]+/, \"number\"],\n      [/[;,.]/, \"delimiter\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, \"string\", \"@string\"],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    whitespace: [\n      [/[ \\t\\v\\f\\r\\n]+/, \"\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\*\\//, \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    string: [\n      [/[^\\\\']+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/'/, \"string\", \"@pop\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/ecl/ecl.js?");

/***/ })

}]);