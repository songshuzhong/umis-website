(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js":
/*!*************************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js ***!
  \*************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['(*', '*)']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n        ['<', '>']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.pascaligo',\n    ignoreCase: true,\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    keywords: [\n        'begin',\n        'block',\n        'case',\n        'const',\n        'else',\n        'end',\n        'fail',\n        'for',\n        'from',\n        'function',\n        'if',\n        'is',\n        'nil',\n        'of',\n        'remove',\n        'return',\n        'skip',\n        'then',\n        'type',\n        'var',\n        'while',\n        'with',\n        'option',\n        'None',\n        'transaction'\n    ],\n    typeKeywords: [\n        'bool',\n        'int',\n        'list',\n        'map',\n        'nat',\n        'record',\n        'string',\n        'unit',\n        'address',\n        'map',\n        'mtz',\n        'xtz'\n    ],\n    operators: [\n        '=',\n        '>',\n        '<',\n        '<=',\n        '>=',\n        '<>',\n        ':',\n        ':=',\n        'and',\n        'mod',\n        'or',\n        '+',\n        '-',\n        '*',\n        '/',\n        '@',\n        '&',\n        '^',\n        '%'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><:@\\^&|+\\-*\\/\\^%]+/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [\n                /[a-zA-Z_][\\w]*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/\\$[0-9a-fA-F]{1,16}/, 'number.hex'],\n            [/\\d+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'/, 'string', '@string'],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/'/, 'string.invalid'],\n            [/\\#\\d+/, 'string']\n        ],\n        /* */\n        comment: [\n            [/[^\\(\\*]+/, 'comment'],\n            //[/\\(\\*/,    'comment', '@push' ],    // nested comment  not allowed :-(\n            [/\\*\\)/, 'comment', '@pop'],\n            [/\\(\\*/, 'comment']\n        ],\n        string: [\n            [/[^\\\\']+/, 'string'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, { token: 'string.quote', bracket: '@close', next: '@pop' }]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, 'white'],\n            [/\\(\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.js?");

/***/ })

}]);