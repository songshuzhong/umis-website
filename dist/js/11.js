(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n// Copyright (c) Microsoft Corporation.\n// Licensed under the MIT License.\nvar bounded = function (text) { return \"\\\\b\" + text + \"\\\\b\"; };\nvar identifierStart = '[_a-zA-Z]';\nvar identifierContinue = '[_a-zA-Z0-9]';\nvar identifier = bounded(\"\" + identifierStart + identifierContinue + \"*\");\nvar keywords = [\n    'targetScope',\n    'resource',\n    'module',\n    'param',\n    'var',\n    'output',\n    'for',\n    'in',\n    'if',\n    'existing'\n];\nvar namedLiterals = ['true', 'false', 'null'];\nvar nonCommentWs = \"[ \\\\t\\\\r\\\\n]\";\nvar numericLiteral = \"[0-9]+\";\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: \"'\", close: \"'\" },\n        { open: \"'''\", close: \"'''\" }\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: \"'''\", close: \"'''\", notIn: ['string', 'comment'] }\n    ],\n    autoCloseBefore: \":.,=}])' \\n\\t\",\n    indentationRules: {\n        increaseIndentPattern: new RegExp('^((?!\\\\/\\\\/).)*(\\\\{[^}\"\\'`]*|\\\\([^)\"\\'`]*|\\\\[[^\\\\]\"\\'`]*)$'),\n        decreaseIndentPattern: new RegExp('^((?!.*?\\\\/\\\\*).*\\\\*/)?\\\\s*[\\\\}\\\\]].*$')\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.bicep',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    symbols: /[=><!~?:&|+\\-*/^%]+/,\n    keywords: keywords,\n    namedLiterals: namedLiterals,\n    escapes: \"\\\\\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\\\\\|'|\\\\${)\",\n    tokenizer: {\n        root: [{ include: '@expression' }, { include: '@whitespace' }],\n        stringVerbatim: [\n            { regex: \"(|'|'')[^']\", action: { token: 'string' } },\n            { regex: \"'''\", action: { token: 'string.quote', next: '@pop' } }\n        ],\n        stringLiteral: [\n            { regex: \"\\\\${\", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },\n            { regex: \"[^\\\\\\\\'$]+\", action: { token: 'string' } },\n            { regex: '@escapes', action: { token: 'string.escape' } },\n            { regex: \"\\\\\\\\.\", action: { token: 'string.escape.invalid' } },\n            { regex: \"'\", action: { token: 'string', next: '@pop' } }\n        ],\n        bracketCounting: [\n            { regex: \"{\", action: { token: 'delimiter.bracket', next: '@bracketCounting' } },\n            { regex: \"}\", action: { token: 'delimiter.bracket', next: '@pop' } },\n            { include: 'expression' }\n        ],\n        comment: [\n            { regex: \"[^\\\\*]+\", action: { token: 'comment' } },\n            { regex: \"\\\\*\\\\/\", action: { token: 'comment', next: '@pop' } },\n            { regex: \"[\\\\/*]\", action: { token: 'comment' } }\n        ],\n        whitespace: [\n            { regex: nonCommentWs },\n            { regex: \"\\\\/\\\\*\", action: { token: 'comment', next: '@comment' } },\n            { regex: \"\\\\/\\\\/.*$\", action: { token: 'comment' } }\n        ],\n        expression: [\n            { regex: \"'''\", action: { token: 'string.quote', next: '@stringVerbatim' } },\n            { regex: \"'\", action: { token: 'string.quote', next: '@stringLiteral' } },\n            { regex: numericLiteral, action: { token: 'number' } },\n            {\n                regex: identifier,\n                action: {\n                    cases: {\n                        '@keywords': { token: 'keyword' },\n                        '@namedLiterals': { token: 'keyword' },\n                        '@default': { token: 'identifier' }\n                    }\n                }\n            }\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/bicep/bicep.js?");

/***/ })

}]);