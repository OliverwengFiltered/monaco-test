"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["vendors-node_modules_monaco-editor_esm_vs_basic-languages_st_st_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js":
/*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.44.0(3e047efd345ff102c8c61b5398fb30845aaac166)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/st/st.ts\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"(*\", \"*)\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"],\n    [\"var\", \"end_var\"],\n    [\"var_input\", \"end_var\"],\n    [\"var_output\", \"end_var\"],\n    [\"var_in_out\", \"end_var\"],\n    [\"var_temp\", \"end_var\"],\n    [\"var_global\", \"end_var\"],\n    [\"var_access\", \"end_var\"],\n    [\"var_external\", \"end_var\"],\n    [\"type\", \"end_type\"],\n    [\"struct\", \"end_struct\"],\n    [\"program\", \"end_program\"],\n    [\"function\", \"end_function\"],\n    [\"function_block\", \"end_function_block\"],\n    [\"action\", \"end_action\"],\n    [\"step\", \"end_step\"],\n    [\"initial_step\", \"end_step\"],\n    [\"transaction\", \"end_transaction\"],\n    [\"configuration\", \"end_configuration\"],\n    [\"tcp\", \"end_tcp\"],\n    [\"recource\", \"end_recource\"],\n    [\"channel\", \"end_channel\"],\n    [\"library\", \"end_library\"],\n    [\"folder\", \"end_folder\"],\n    [\"binaries\", \"end_binaries\"],\n    [\"includes\", \"end_includes\"],\n    [\"sources\", \"end_sources\"]\n  ],\n  autoClosingPairs: [\n    { open: \"[\", close: \"]\" },\n    { open: \"{\", close: \"}\" },\n    { open: \"(\", close: \")\" },\n    { open: \"/*\", close: \"*/\" },\n    { open: \"'\", close: \"'\", notIn: [\"string_sq\"] },\n    { open: '\"', close: '\"', notIn: [\"string_dq\"] },\n    { open: \"var_input\", close: \"end_var\" },\n    { open: \"var_output\", close: \"end_var\" },\n    { open: \"var_in_out\", close: \"end_var\" },\n    { open: \"var_temp\", close: \"end_var\" },\n    { open: \"var_global\", close: \"end_var\" },\n    { open: \"var_access\", close: \"end_var\" },\n    { open: \"var_external\", close: \"end_var\" },\n    { open: \"type\", close: \"end_type\" },\n    { open: \"struct\", close: \"end_struct\" },\n    { open: \"program\", close: \"end_program\" },\n    { open: \"function\", close: \"end_function\" },\n    { open: \"function_block\", close: \"end_function_block\" },\n    { open: \"action\", close: \"end_action\" },\n    { open: \"step\", close: \"end_step\" },\n    { open: \"initial_step\", close: \"end_step\" },\n    { open: \"transaction\", close: \"end_transaction\" },\n    { open: \"configuration\", close: \"end_configuration\" },\n    { open: \"tcp\", close: \"end_tcp\" },\n    { open: \"recource\", close: \"end_recource\" },\n    { open: \"channel\", close: \"end_channel\" },\n    { open: \"library\", close: \"end_library\" },\n    { open: \"folder\", close: \"end_folder\" },\n    { open: \"binaries\", close: \"end_binaries\" },\n    { open: \"includes\", close: \"end_includes\" },\n    { open: \"sources\", close: \"end_sources\" }\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"var\", close: \"end_var\" },\n    { open: \"var_input\", close: \"end_var\" },\n    { open: \"var_output\", close: \"end_var\" },\n    { open: \"var_in_out\", close: \"end_var\" },\n    { open: \"var_temp\", close: \"end_var\" },\n    { open: \"var_global\", close: \"end_var\" },\n    { open: \"var_access\", close: \"end_var\" },\n    { open: \"var_external\", close: \"end_var\" },\n    { open: \"type\", close: \"end_type\" },\n    { open: \"struct\", close: \"end_struct\" },\n    { open: \"program\", close: \"end_program\" },\n    { open: \"function\", close: \"end_function\" },\n    { open: \"function_block\", close: \"end_function_block\" },\n    { open: \"action\", close: \"end_action\" },\n    { open: \"step\", close: \"end_step\" },\n    { open: \"initial_step\", close: \"end_step\" },\n    { open: \"transaction\", close: \"end_transaction\" },\n    { open: \"configuration\", close: \"end_configuration\" },\n    { open: \"tcp\", close: \"end_tcp\" },\n    { open: \"recource\", close: \"end_recource\" },\n    { open: \"channel\", close: \"end_channel\" },\n    { open: \"library\", close: \"end_library\" },\n    { open: \"folder\", close: \"end_folder\" },\n    { open: \"binaries\", close: \"end_binaries\" },\n    { open: \"includes\", close: \"end_includes\" },\n    { open: \"sources\", close: \"end_sources\" }\n  ],\n  folding: {\n    markers: {\n      start: new RegExp(\"^\\\\s*#pragma\\\\s+region\\\\b\"),\n      end: new RegExp(\"^\\\\s*#pragma\\\\s+endregion\\\\b\")\n    }\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".st\",\n  ignoreCase: true,\n  brackets: [\n    { token: \"delimiter.curly\", open: \"{\", close: \"}\" },\n    { token: \"delimiter.parenthesis\", open: \"(\", close: \")\" },\n    { token: \"delimiter.square\", open: \"[\", close: \"]\" }\n  ],\n  keywords: [\n    \"if\",\n    \"end_if\",\n    \"elsif\",\n    \"else\",\n    \"case\",\n    \"of\",\n    \"to\",\n    \"__try\",\n    \"__catch\",\n    \"__finally\",\n    \"do\",\n    \"with\",\n    \"by\",\n    \"while\",\n    \"repeat\",\n    \"end_while\",\n    \"end_repeat\",\n    \"end_case\",\n    \"for\",\n    \"end_for\",\n    \"task\",\n    \"retain\",\n    \"non_retain\",\n    \"constant\",\n    \"with\",\n    \"at\",\n    \"exit\",\n    \"return\",\n    \"interval\",\n    \"priority\",\n    \"address\",\n    \"port\",\n    \"on_channel\",\n    \"then\",\n    \"iec\",\n    \"file\",\n    \"uses\",\n    \"version\",\n    \"packagetype\",\n    \"displayname\",\n    \"copyright\",\n    \"summary\",\n    \"vendor\",\n    \"common_source\",\n    \"from\",\n    \"extends\",\n    \"implements\"\n  ],\n  constant: [\"false\", \"true\", \"null\"],\n  defineKeywords: [\n    \"var\",\n    \"var_input\",\n    \"var_output\",\n    \"var_in_out\",\n    \"var_temp\",\n    \"var_global\",\n    \"var_access\",\n    \"var_external\",\n    \"end_var\",\n    \"type\",\n    \"end_type\",\n    \"struct\",\n    \"end_struct\",\n    \"program\",\n    \"end_program\",\n    \"function\",\n    \"end_function\",\n    \"function_block\",\n    \"end_function_block\",\n    \"interface\",\n    \"end_interface\",\n    \"method\",\n    \"end_method\",\n    \"property\",\n    \"end_property\",\n    \"namespace\",\n    \"end_namespace\",\n    \"configuration\",\n    \"end_configuration\",\n    \"tcp\",\n    \"end_tcp\",\n    \"resource\",\n    \"end_resource\",\n    \"channel\",\n    \"end_channel\",\n    \"library\",\n    \"end_library\",\n    \"folder\",\n    \"end_folder\",\n    \"binaries\",\n    \"end_binaries\",\n    \"includes\",\n    \"end_includes\",\n    \"sources\",\n    \"end_sources\",\n    \"action\",\n    \"end_action\",\n    \"step\",\n    \"initial_step\",\n    \"end_step\",\n    \"transaction\",\n    \"end_transaction\"\n  ],\n  typeKeywords: [\n    \"int\",\n    \"sint\",\n    \"dint\",\n    \"lint\",\n    \"usint\",\n    \"uint\",\n    \"udint\",\n    \"ulint\",\n    \"real\",\n    \"lreal\",\n    \"time\",\n    \"date\",\n    \"time_of_day\",\n    \"date_and_time\",\n    \"string\",\n    \"bool\",\n    \"byte\",\n    \"word\",\n    \"dword\",\n    \"array\",\n    \"pointer\",\n    \"lword\"\n  ],\n  operators: [\n    \"=\",\n    \">\",\n    \"<\",\n    \":\",\n    \":=\",\n    \"<=\",\n    \">=\",\n    \"<>\",\n    \"&\",\n    \"+\",\n    \"-\",\n    \"*\",\n    \"**\",\n    \"MOD\",\n    \"^\",\n    \"or\",\n    \"and\",\n    \"not\",\n    \"xor\",\n    \"abs\",\n    \"acos\",\n    \"asin\",\n    \"atan\",\n    \"cos\",\n    \"exp\",\n    \"expt\",\n    \"ln\",\n    \"log\",\n    \"sin\",\n    \"sqrt\",\n    \"tan\",\n    \"sel\",\n    \"max\",\n    \"min\",\n    \"limit\",\n    \"mux\",\n    \"shl\",\n    \"shr\",\n    \"rol\",\n    \"ror\",\n    \"indexof\",\n    \"sizeof\",\n    \"adr\",\n    \"adrinst\",\n    \"bitadr\",\n    \"is_valid\",\n    \"ref\",\n    \"ref_to\"\n  ],\n  builtinVariables: [],\n  builtinFunctions: [\n    \"sr\",\n    \"rs\",\n    \"tp\",\n    \"ton\",\n    \"tof\",\n    \"eq\",\n    \"ge\",\n    \"le\",\n    \"lt\",\n    \"ne\",\n    \"round\",\n    \"trunc\",\n    \"ctd\",\n    \"\\u0441tu\",\n    \"ctud\",\n    \"r_trig\",\n    \"f_trig\",\n    \"move\",\n    \"concat\",\n    \"delete\",\n    \"find\",\n    \"insert\",\n    \"left\",\n    \"len\",\n    \"replace\",\n    \"right\",\n    \"rtc\"\n  ],\n  symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n  escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n  tokenizer: {\n    root: [\n      [/(\\.\\.)/, \"delimiter\"],\n      [/\\b(16#[0-9A-Fa-f\\_]*)+\\b/, \"number.hex\"],\n      [/\\b(2#[01\\_]+)+\\b/, \"number.binary\"],\n      [/\\b(8#[0-9\\_]*)+\\b/, \"number.octal\"],\n      [/\\b\\d*\\.\\d+([eE][\\-+]?\\d+)?\\b/, \"number.float\"],\n      [/\\b(L?REAL)#[0-9\\_\\.e]+\\b/, \"number.float\"],\n      [/\\b(BYTE|(?:D|L)?WORD|U?(?:S|D|L)?INT)#[0-9\\_]+\\b/, \"number\"],\n      [/\\d+/, \"number\"],\n      [/\\b(T|DT|TOD)#[0-9:-_shmyd]+\\b/, \"tag\"],\n      [/\\%(I|Q|M)(X|B|W|D|L)[0-9\\.]+/, \"tag\"],\n      [/\\%(I|Q|M)[0-9\\.]*/, \"tag\"],\n      [/\\b[A-Za-z]{1,6}#[0-9]+\\b/, \"tag\"],\n      [/\\b(TO_|CTU_|CTD_|CTUD_|MUX_|SEL_)[A_Za-z]+\\b/, \"predefined\"],\n      [/\\b[A_Za-z]+(_TO_)[A_Za-z]+\\b/, \"predefined\"],\n      [/[;]/, \"delimiter\"],\n      [/[.]/, { token: \"delimiter\", next: \"@params\" }],\n      [\n        /[a-zA-Z_]\\w*/,\n        {\n          cases: {\n            \"@operators\": \"operators\",\n            \"@keywords\": \"keyword\",\n            \"@typeKeywords\": \"type\",\n            \"@defineKeywords\": \"variable\",\n            \"@constant\": \"constant\",\n            \"@builtinVariables\": \"predefined\",\n            \"@builtinFunctions\": \"predefined\",\n            \"@default\": \"identifier\"\n          }\n        }\n      ],\n      { include: \"@whitespace\" },\n      [/[{}()\\[\\]]/, \"@brackets\"],\n      [/\"([^\"\\\\]|\\\\.)*$/, \"string.invalid\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@string_dq\" }],\n      [/'/, { token: \"string.quote\", bracket: \"@open\", next: \"@string_sq\" }],\n      [/'[^\\\\']'/, \"string\"],\n      [/(')(@escapes)(')/, [\"string\", \"string.escape\", \"string\"]],\n      [/'/, \"string.invalid\"]\n    ],\n    params: [\n      [/\\b[A-Za-z0-9_]+\\b(?=\\()/, { token: \"identifier\", next: \"@pop\" }],\n      [/\\b[A-Za-z0-9_]+\\b/, \"variable.name\", \"@pop\"]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\/\\*/, \"comment\", \"@push\"],\n      [\"\\\\*/\", \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    comment2: [\n      [/[^\\(*]+/, \"comment\"],\n      [/\\(\\*/, \"comment\", \"@push\"],\n      [\"\\\\*\\\\)\", \"comment\", \"@pop\"],\n      [/[\\(*]/, \"comment\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [/\\/\\/.*$/, \"comment\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\(\\*/, \"comment\", \"@comment2\"]\n    ],\n    string_dq: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    string_sq: [\n      [/[^\\\\']+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/'/, { token: \"string.quote\", bracket: \"@close\", next: \"@pop\" }]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/st/st.js?");

/***/ })

}]);