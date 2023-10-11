"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmonaco_test"] = self["webpackChunkmonaco_test"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_twig_twig_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   conf: () => (/* binding */ conf),\n/* harmony export */   language: () => (/* binding */ language)\n/* harmony export */ });\n/*!-----------------------------------------------------------------------------\n * Copyright (c) Microsoft Corporation. All rights reserved.\n * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)\n * Released under the MIT license\n * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt\n *-----------------------------------------------------------------------------*/\n\n// src/basic-languages/twig/twig.ts\nvar conf = {\n  wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n  comments: {\n    blockComment: [\"{#\", \"#}\"]\n  },\n  brackets: [\n    [\"{#\", \"#}\"],\n    [\"{%\", \"%}\"],\n    [\"{{\", \"}}\"],\n    [\"(\", \")\"],\n    [\"[\", \"]\"],\n    [\"<!--\", \"-->\"],\n    [\"<\", \">\"]\n  ],\n  autoClosingPairs: [\n    { open: \"{# \", close: \" #}\" },\n    { open: \"{% \", close: \" %}\" },\n    { open: \"{{ \", close: \" }}\" },\n    { open: \"[\", close: \"]\" },\n    { open: \"(\", close: \")\" },\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" }\n  ],\n  surroundingPairs: [\n    { open: '\"', close: '\"' },\n    { open: \"'\", close: \"'\" },\n    { open: \"<\", close: \">\" }\n  ]\n};\nvar language = {\n  defaultToken: \"\",\n  tokenPostfix: \"\",\n  ignoreCase: true,\n  keywords: [\n    \"apply\",\n    \"autoescape\",\n    \"block\",\n    \"deprecated\",\n    \"do\",\n    \"embed\",\n    \"extends\",\n    \"flush\",\n    \"for\",\n    \"from\",\n    \"if\",\n    \"import\",\n    \"include\",\n    \"macro\",\n    \"sandbox\",\n    \"set\",\n    \"use\",\n    \"verbatim\",\n    \"with\",\n    \"endapply\",\n    \"endautoescape\",\n    \"endblock\",\n    \"endembed\",\n    \"endfor\",\n    \"endif\",\n    \"endmacro\",\n    \"endsandbox\",\n    \"endset\",\n    \"endwith\",\n    \"true\",\n    \"false\"\n  ],\n  tokenizer: {\n    root: [\n      [/\\s+/],\n      [/{#/, \"comment.twig\", \"@commentState\"],\n      [/{%[-~]?/, \"delimiter.twig\", \"@blockState\"],\n      [/{{[-~]?/, \"delimiter.twig\", \"@variableState\"],\n      [/<!DOCTYPE/, \"metatag.html\", \"@doctype\"],\n      [/<!--/, \"comment.html\", \"@comment\"],\n      [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)(\\s*)(\\/>)/, [\"delimiter.html\", \"tag.html\", \"\", \"delimiter.html\"]],\n      [/(<)(script)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@script\" }]],\n      [/(<)(style)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@style\" }]],\n      [/(<)((?:[\\w\\-]+:)?[\\w\\-]+)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@otherTag\" }]],\n      [/(<\\/)((?:[\\w\\-]+:)?[\\w\\-]+)/, [\"delimiter.html\", { token: \"tag.html\", next: \"@otherTag\" }]],\n      [/</, \"delimiter.html\"],\n      [/[^<{]+/]\n    ],\n    commentState: [\n      [/#}/, \"comment.twig\", \"@pop\"],\n      [/./, \"comment.twig\"]\n    ],\n    blockState: [\n      [/[-~]?%}/, \"delimiter.twig\", \"@pop\"],\n      [/\\s+/],\n      [\n        /(verbatim)(\\s*)([-~]?%})/,\n        [\"keyword.twig\", \"\", { token: \"delimiter.twig\", next: \"@rawDataState\" }]\n      ],\n      { include: \"expression\" }\n    ],\n    rawDataState: [\n      [\n        /({%[-~]?)(\\s*)(endverbatim)(\\s*)([-~]?%})/,\n        [\"delimiter.twig\", \"\", \"keyword.twig\", \"\", { token: \"delimiter.twig\", next: \"@popall\" }]\n      ],\n      [/./, \"string.twig\"]\n    ],\n    variableState: [[/[-~]?}}/, \"delimiter.twig\", \"@pop\"], { include: \"expression\" }],\n    stringState: [\n      [/\"/, \"string.twig\", \"@pop\"],\n      [/#{\\s*/, \"string.twig\", \"@interpolationState\"],\n      [/[^#\"\\\\]*(?:(?:\\\\.|#(?!\\{))[^#\"\\\\]*)*/, \"string.twig\"]\n    ],\n    interpolationState: [\n      [/}/, \"string.twig\", \"@pop\"],\n      { include: \"expression\" }\n    ],\n    expression: [\n      [/\\s+/],\n      [/\\+|-|\\/{1,2}|%|\\*{1,2}/, \"operators.twig\"],\n      [/(and|or|not|b-and|b-xor|b-or)(\\s+)/, [\"operators.twig\", \"\"]],\n      [/==|!=|<|>|>=|<=/, \"operators.twig\"],\n      [/(starts with|ends with|matches)(\\s+)/, [\"operators.twig\", \"\"]],\n      [/(in)(\\s+)/, [\"operators.twig\", \"\"]],\n      [/(is)(\\s+)/, [\"operators.twig\", \"\"]],\n      [/\\||~|:|\\.{1,2}|\\?{1,2}/, \"operators.twig\"],\n      [\n        /[^\\W\\d][\\w]*/,\n        {\n          cases: {\n            \"@keywords\": \"keyword.twig\",\n            \"@default\": \"variable.twig\"\n          }\n        }\n      ],\n      [/\\d+(\\.\\d+)?/, \"number.twig\"],\n      [/\\(|\\)|\\[|\\]|{|}|,/, \"delimiter.twig\"],\n      [/\"([^#\"\\\\]*(?:\\\\.[^#\"\\\\]*)*)\"|\\'([^\\'\\\\]*(?:\\\\.[^\\'\\\\]*)*)\\'/, \"string.twig\"],\n      [/\"/, \"string.twig\", \"@stringState\"],\n      [/=>/, \"operators.twig\"],\n      [/=/, \"operators.twig\"]\n    ],\n    doctype: [\n      [/[^>]+/, \"metatag.content.html\"],\n      [/>/, \"metatag.html\", \"@pop\"]\n    ],\n    comment: [\n      [/-->/, \"comment.html\", \"@pop\"],\n      [/[^-]+/, \"comment.content.html\"],\n      [/./, \"comment.content.html\"]\n    ],\n    otherTag: [\n      [/\\/?>/, \"delimiter.html\", \"@pop\"],\n      [/\"([^\"]*)\"/, \"attribute.value.html\"],\n      [/'([^']*)'/, \"attribute.value.html\"],\n      [/[\\w\\-]+/, \"attribute.name.html\"],\n      [/=/, \"delimiter.html\"],\n      [/[ \\t\\r\\n]+/]\n    ],\n    script: [\n      [/type/, \"attribute.name.html\", \"@scriptAfterType\"],\n      [/\"([^\"]*)\"/, \"attribute.value.html\"],\n      [/'([^']*)'/, \"attribute.value.html\"],\n      [/[\\w\\-]+/, \"attribute.name.html\"],\n      [/=/, \"delimiter.html\"],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@scriptEmbedded\",\n          nextEmbedded: \"text/javascript\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [\n        /(<\\/)(script\\s*)(>)/,\n        [\"delimiter.html\", \"tag.html\", { token: \"delimiter.html\", next: \"@pop\" }]\n      ]\n    ],\n    scriptAfterType: [\n      [/=/, \"delimiter.html\", \"@scriptAfterTypeEquals\"],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@scriptEmbedded\",\n          nextEmbedded: \"text/javascript\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/script\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    scriptAfterTypeEquals: [\n      [\n        /\"([^\"]*)\"/,\n        {\n          token: \"attribute.value.html\",\n          switchTo: \"@scriptWithCustomType.$1\"\n        }\n      ],\n      [\n        /'([^']*)'/,\n        {\n          token: \"attribute.value.html\",\n          switchTo: \"@scriptWithCustomType.$1\"\n        }\n      ],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@scriptEmbedded\",\n          nextEmbedded: \"text/javascript\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/script\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    scriptWithCustomType: [\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@scriptEmbedded.$S2\",\n          nextEmbedded: \"$S2\"\n        }\n      ],\n      [/\"([^\"]*)\"/, \"attribute.value.html\"],\n      [/'([^']*)'/, \"attribute.value.html\"],\n      [/[\\w\\-]+/, \"attribute.name.html\"],\n      [/=/, \"delimiter.html\"],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/script\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    scriptEmbedded: [\n      [/<\\/script/, { token: \"@rematch\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/[^<]+/, \"\"]\n    ],\n    style: [\n      [/type/, \"attribute.name.html\", \"@styleAfterType\"],\n      [/\"([^\"]*)\"/, \"attribute.value.html\"],\n      [/'([^']*)'/, \"attribute.value.html\"],\n      [/[\\w\\-]+/, \"attribute.name.html\"],\n      [/=/, \"delimiter.html\"],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@styleEmbedded\",\n          nextEmbedded: \"text/css\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [\n        /(<\\/)(style\\s*)(>)/,\n        [\"delimiter.html\", \"tag.html\", { token: \"delimiter.html\", next: \"@pop\" }]\n      ]\n    ],\n    styleAfterType: [\n      [/=/, \"delimiter.html\", \"@styleAfterTypeEquals\"],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@styleEmbedded\",\n          nextEmbedded: \"text/css\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/style\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    styleAfterTypeEquals: [\n      [\n        /\"([^\"]*)\"/,\n        {\n          token: \"attribute.value.html\",\n          switchTo: \"@styleWithCustomType.$1\"\n        }\n      ],\n      [\n        /'([^']*)'/,\n        {\n          token: \"attribute.value.html\",\n          switchTo: \"@styleWithCustomType.$1\"\n        }\n      ],\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@styleEmbedded\",\n          nextEmbedded: \"text/css\"\n        }\n      ],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/style\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    styleWithCustomType: [\n      [\n        />/,\n        {\n          token: \"delimiter.html\",\n          next: \"@styleEmbedded.$S2\",\n          nextEmbedded: \"$S2\"\n        }\n      ],\n      [/\"([^\"]*)\"/, \"attribute.value.html\"],\n      [/'([^']*)'/, \"attribute.value.html\"],\n      [/[\\w\\-]+/, \"attribute.name.html\"],\n      [/=/, \"delimiter.html\"],\n      [/[ \\t\\r\\n]+/],\n      [/<\\/style\\s*>/, { token: \"@rematch\", next: \"@pop\" }]\n    ],\n    styleEmbedded: [\n      [/<\\/style/, { token: \"@rematch\", next: \"@pop\", nextEmbedded: \"@pop\" }],\n      [/[^<]+/, \"\"]\n    ]\n  }\n};\n\n\n\n//# sourceURL=webpack://monaco-test/./node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js?");

/***/ })

}]);