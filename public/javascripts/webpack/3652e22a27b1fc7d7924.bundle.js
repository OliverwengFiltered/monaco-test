"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["vendors-node_modules_monaco-editor_esm_vs_basic-languages_protobuf_protobuf_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.js":
/*!********************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/protobuf/protobuf.ts\nvar namedLiterals = [\"true\", \"false\"];\nvar conf = {\n  comments: {\n    lineComment: \"//\",\n    blockComment: [\"/*\", \"*/\"]\n  },\n  brackets: [\n    [\"{\", \"}\"],\n    [\"[\", \"]\"],\n    [\"(\", \")\"],\n    [\"<\", \">\"]\n  ],\n  surroundingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  autoClosingPairs: [\n    { open: \"{\", close: \"}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: \"<\", close: \">\" },\n    { open: '\"', close: '\"', notIn: [\"string\"] },\n    { open: \"'\", close: \"'\", notIn: [\"string\"] }\n  ],\n  autoCloseBefore: \".,=}])>' \\n\t\",\n  indentationRules: {\n    increaseIndentPattern: new RegExp(\"^((?!\\\\/\\\\/).)*(\\\\{[^}\\\"'`]*|\\\\([^)\\\"'`]*|\\\\[[^\\\\]\\\"'`]*)$\"),\n    decreaseIndentPattern: new RegExp(\"^((?!.*?\\\\/\\\\*).*\\\\*/)?\\\\s*[\\\\}\\\\]].*$\")\n  }\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \".proto\",\n  brackets: [\n    { open: \"{\", close: \"}\", token: \"delimiter.curly\" },\n    { open: \"[\", close: \"]\", token: \"delimiter.square\" },\n    { open: \"(\", close: \")\", token: \"delimiter.parenthesis\" },\n    { open: \"<\", close: \">\", token: \"delimiter.angle\" }\n  ],\n  symbols: /[=><!~?:&|+\\-*/^%]+/,\n  keywords: [\n    \"syntax\",\n    \"import\",\n    \"weak\",\n    \"public\",\n    \"package\",\n    \"option\",\n    \"repeated\",\n    \"oneof\",\n    \"map\",\n    \"reserved\",\n    \"to\",\n    \"max\",\n    \"enum\",\n    \"message\",\n    \"service\",\n    \"rpc\",\n    \"stream\",\n    \"returns\",\n    \"package\",\n    \"optional\",\n    \"true\",\n    \"false\"\n  ],\n  builtinTypes: [\n    \"double\",\n    \"float\",\n    \"int32\",\n    \"int64\",\n    \"uint32\",\n    \"uint64\",\n    \"sint32\",\n    \"sint64\",\n    \"fixed32\",\n    \"fixed64\",\n    \"sfixed32\",\n    \"sfixed64\",\n    \"bool\",\n    \"string\",\n    \"bytes\"\n  ],\n  operators: [\"=\", \"+\", \"-\"],\n  namedLiterals,\n  escapes: `\\\\\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\\\\\|'|\\\\\\${)`,\n  identifier: /[a-zA-Z]\\w*/,\n  fullIdentifier: /@identifier(?:\\s*\\.\\s*@identifier)*/,\n  optionName: /(?:@identifier|\\(\\s*@fullIdentifier\\s*\\))(?:\\s*\\.\\s*@identifier)*/,\n  messageName: /@identifier/,\n  enumName: /@identifier/,\n  messageType: /\\.?\\s*(?:@identifier\\s*\\.\\s*)*@messageName/,\n  enumType: /\\.?\\s*(?:@identifier\\s*\\.\\s*)*@enumName/,\n  floatLit: /[0-9]+\\s*\\.\\s*[0-9]*(?:@exponent)?|[0-9]+@exponent|\\.[0-9]+(?:@exponent)?/,\n  exponent: /[eE]\\s*[+-]?\\s*[0-9]+/,\n  boolLit: /true\\b|false\\b/,\n  decimalLit: /[1-9][0-9]*/,\n  octalLit: /0[0-7]*/,\n  hexLit: /0[xX][0-9a-fA-F]+/,\n  type: /double|float|int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string|bytes|@messageType|@enumType/,\n  keyType: /int32|int64|uint32|uint64|sint32|sint64|fixed32|fixed64|sfixed32|sfixed64|bool|string/,\n  tokenizer: {\n    root: [\n      { include: \"@whitespace\" },\n      [/syntax/, \"keyword\"],\n      [/=/, \"operators\"],\n      [/;/, \"delimiter\"],\n      [\n        /(\")(proto3)(\")/,\n        [\"string.quote\", \"string\", { token: \"string.quote\", switchTo: \"@topLevel.proto3\" }]\n      ],\n      [\n        /(\")(proto2)(\")/,\n        [\"string.quote\", \"string\", { token: \"string.quote\", switchTo: \"@topLevel.proto2\" }]\n      ],\n      [\n        /.*?/,\n        { token: \"\", switchTo: \"@topLevel.proto2\" }\n      ]\n    ],\n    topLevel: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/=/, \"operators\"],\n      [/[;.]/, \"delimiter\"],\n      [\n        /@fullIdentifier/,\n        {\n          cases: {\n            option: { token: \"keyword\", next: \"@option.$S2\" },\n            enum: { token: \"keyword\", next: \"@enumDecl.$S2\" },\n            message: { token: \"keyword\", next: \"@messageDecl.$S2\" },\n            service: { token: \"keyword\", next: \"@serviceDecl.$S2\" },\n            extend: {\n              cases: {\n                \"$S2==proto2\": { token: \"keyword\", next: \"@extendDecl.$S2\" }\n              }\n            },\n            \"@keywords\": \"keyword\",\n            \"@default\": \"identifier\"\n          }\n        }\n      ]\n    ],\n    enumDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"type.identifier\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@enumBody.$S2\" }]\n    ],\n    enumBody: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/=/, \"operators\"],\n      [/;/, \"delimiter\"],\n      [/option\\b/, \"keyword\", \"@option.$S2\"],\n      [/@identifier/, \"identifier\"],\n      [/\\[/, { token: \"@brackets\", bracket: \"@open\", next: \"@options.$S2\" }],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    messageDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"type.identifier\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@messageBody.$S2\" }]\n    ],\n    messageBody: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/=/, \"operators\"],\n      [/;/, \"delimiter\"],\n      [\n        \"(map)(s*)(<)\",\n        [\"keyword\", \"white\", { token: \"@brackets\", bracket: \"@open\", next: \"@map.$S2\" }]\n      ],\n      [\n        /@identifier/,\n        {\n          cases: {\n            option: { token: \"keyword\", next: \"@option.$S2\" },\n            enum: { token: \"keyword\", next: \"@enumDecl.$S2\" },\n            message: { token: \"keyword\", next: \"@messageDecl.$S2\" },\n            oneof: { token: \"keyword\", next: \"@oneofDecl.$S2\" },\n            extensions: {\n              cases: {\n                \"$S2==proto2\": { token: \"keyword\", next: \"@reserved.$S2\" }\n              }\n            },\n            reserved: { token: \"keyword\", next: \"@reserved.$S2\" },\n            \"(?:repeated|optional)\": { token: \"keyword\", next: \"@field.$S2\" },\n            required: {\n              cases: {\n                \"$S2==proto2\": { token: \"keyword\", next: \"@field.$S2\" }\n              }\n            },\n            \"$S2==proto3\": { token: \"@rematch\", next: \"@field.$S2\" }\n          }\n        }\n      ],\n      [/\\[/, { token: \"@brackets\", bracket: \"@open\", next: \"@options.$S2\" }],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    extendDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"type.identifier\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@extendBody.$S2\" }]\n    ],\n    extendBody: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/;/, \"delimiter\"],\n      [/(?:repeated|optional|required)/, \"keyword\", \"@field.$S2\"],\n      [/\\[/, { token: \"@brackets\", bracket: \"@open\", next: \"@options.$S2\" }],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    options: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/;/, \"delimiter\"],\n      [/@optionName/, \"annotation\"],\n      [/[()]/, \"annotation.brackets\"],\n      [/=/, \"operator\"],\n      [/\\]/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    option: [\n      { include: \"@whitespace\" },\n      [/@optionName/, \"annotation\"],\n      [/[()]/, \"annotation.brackets\"],\n      [/=/, \"operator\", \"@pop\"]\n    ],\n    oneofDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"identifier\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@oneofBody.$S2\" }]\n    ],\n    oneofBody: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/;/, \"delimiter\"],\n      [/(@identifier)(\\s*)(=)/, [\"identifier\", \"white\", \"delimiter\"]],\n      [\n        /@fullIdentifier|\\./,\n        {\n          cases: {\n            \"@builtinTypes\": \"keyword\",\n            \"@default\": \"type.identifier\"\n          }\n        }\n      ],\n      [/\\[/, { token: \"@brackets\", bracket: \"@open\", next: \"@options.$S2\" }],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    reserved: [\n      { include: \"@whitespace\" },\n      [/,/, \"delimiter\"],\n      [/;/, \"delimiter\", \"@pop\"],\n      { include: \"@constant\" },\n      [/to\\b|max\\b/, \"keyword\"]\n    ],\n    map: [\n      { include: \"@whitespace\" },\n      [\n        /@fullIdentifier|\\./,\n        {\n          cases: {\n            \"@builtinTypes\": \"keyword\",\n            \"@default\": \"type.identifier\"\n          }\n        }\n      ],\n      [/,/, \"delimiter\"],\n      [/>/, { token: \"@brackets\", bracket: \"@close\", switchTo: \"identifier\" }]\n    ],\n    field: [\n      { include: \"@whitespace\" },\n      [\n        \"group\",\n        {\n          cases: {\n            \"$S2==proto2\": { token: \"keyword\", switchTo: \"@groupDecl.$S2\" }\n          }\n        }\n      ],\n      [/(@identifier)(\\s*)(=)/, [\"identifier\", \"white\", { token: \"delimiter\", next: \"@pop\" }]],\n      [\n        /@fullIdentifier|\\./,\n        {\n          cases: {\n            \"@builtinTypes\": \"keyword\",\n            \"@default\": \"type.identifier\"\n          }\n        }\n      ]\n    ],\n    groupDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"identifier\"],\n      [\"=\", \"operator\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@messageBody.$S2\" }],\n      { include: \"@constant\" }\n    ],\n    type: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"type.identifier\", \"@pop\"],\n      [/./, \"delimiter\"]\n    ],\n    identifier: [{ include: \"@whitespace\" }, [/@identifier/, \"identifier\", \"@pop\"]],\n    serviceDecl: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"identifier\"],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@serviceBody.$S2\" }]\n    ],\n    serviceBody: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/;/, \"delimiter\"],\n      [/option\\b/, \"keyword\", \"@option.$S2\"],\n      [/rpc\\b/, \"keyword\", \"@rpc.$S2\"],\n      [/\\[/, { token: \"@brackets\", bracket: \"@open\", next: \"@options.$S2\" }],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    rpc: [\n      { include: \"@whitespace\" },\n      [/@identifier/, \"identifier\"],\n      [/\\(/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@request.$S2\" }],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", next: \"@methodOptions.$S2\" }],\n      [/;/, \"delimiter\", \"@pop\"]\n    ],\n    request: [\n      { include: \"@whitespace\" },\n      [\n        /@messageType/,\n        {\n          cases: {\n            stream: { token: \"keyword\", next: \"@type.$S2\" },\n            \"@default\": \"type.identifier\"\n          }\n        }\n      ],\n      [/\\)/, { token: \"@brackets\", bracket: \"@close\", switchTo: \"@returns.$S2\" }]\n    ],\n    returns: [\n      { include: \"@whitespace\" },\n      [/returns\\b/, \"keyword\"],\n      [/\\(/, { token: \"@brackets\", bracket: \"@open\", switchTo: \"@response.$S2\" }]\n    ],\n    response: [\n      { include: \"@whitespace\" },\n      [\n        /@messageType/,\n        {\n          cases: {\n            stream: { token: \"keyword\", next: \"@type.$S2\" },\n            \"@default\": \"type.identifier\"\n          }\n        }\n      ],\n      [/\\)/, { token: \"@brackets\", bracket: \"@close\", switchTo: \"@rpc.$S2\" }]\n    ],\n    methodOptions: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/;/, \"delimiter\"],\n      [\"option\", \"keyword\"],\n      [/@optionName/, \"annotation\"],\n      [/[()]/, \"annotation.brackets\"],\n      [/=/, \"operator\"],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    comment: [\n      [/[^\\/*]+/, \"comment\"],\n      [/\\/\\*/, \"comment\", \"@push\"],\n      [\"\\\\*/\", \"comment\", \"@pop\"],\n      [/[\\/*]/, \"comment\"]\n    ],\n    string: [\n      [/[^\\\\\"]+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    stringSingle: [\n      [/[^\\\\']+/, \"string\"],\n      [/@escapes/, \"string.escape\"],\n      [/\\\\./, \"string.escape.invalid\"],\n      [/'/, { token: \"string.quote\", bracket: \"@close\", next: \"@pop\" }]\n    ],\n    constant: [\n      [\"@boolLit\", \"keyword.constant\"],\n      [\"@hexLit\", \"number.hex\"],\n      [\"@octalLit\", \"number.octal\"],\n      [\"@decimalLit\", \"number\"],\n      [\"@floatLit\", \"number.float\"],\n      [/(\"([^\"\\\\]|\\\\.)*|'([^'\\\\]|\\\\.)*)$/, \"string.invalid\"],\n      [/\"/, { token: \"string.quote\", bracket: \"@open\", next: \"@string\" }],\n      [/'/, { token: \"string.quote\", bracket: \"@open\", next: \"@stringSingle\" }],\n      [/{/, { token: \"@brackets\", bracket: \"@open\", next: \"@prototext\" }],\n      [/identifier/, \"identifier\"]\n    ],\n    whitespace: [\n      [/[ \\t\\r\\n]+/, \"white\"],\n      [/\\/\\*/, \"comment\", \"@comment\"],\n      [/\\/\\/.*$/, \"comment\"]\n    ],\n    prototext: [\n      { include: \"@whitespace\" },\n      { include: \"@constant\" },\n      [/@identifier/, \"identifier\"],\n      [/[:;]/, \"delimiter\"],\n      [/}/, { token: \"@brackets\", bracket: \"@close\", next: \"@pop\" }]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/protobuf/protobuf.js?");

/***/ })

}]);