(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.js":
/*!***************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.js ***!
  \***************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: '`', close: '`', notIn: ['string', 'comment'] },\n        { open: '/**', close: ' */', notIn: ['string'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '`', close: '`' }\n    ],\n    folding: {\n        markers: {\n            start: /^\\s*\\s*#?region\\b/,\n            end: /^\\s*\\s*#?endregion\\b/\n        }\n    }\n};\nvar language = {\n    defaultToken: 'invalid',\n    tokenPostfix: '.dart',\n    keywords: [\n        'abstract',\n        'dynamic',\n        'implements',\n        'show',\n        'as',\n        'else',\n        'import',\n        'static',\n        'assert',\n        'enum',\n        'in',\n        'super',\n        'async',\n        'export',\n        'interface',\n        'switch',\n        'await',\n        'extends',\n        'is',\n        'sync',\n        'break',\n        'external',\n        'library',\n        'this',\n        'case',\n        'factory',\n        'mixin',\n        'throw',\n        'catch',\n        'false',\n        'new',\n        'true',\n        'class',\n        'final',\n        'null',\n        'try',\n        'const',\n        'finally',\n        'on',\n        'typedef',\n        'continue',\n        'for',\n        'operator',\n        'var',\n        'covariant',\n        'Function',\n        'part',\n        'void',\n        'default',\n        'get',\n        'rethrow',\n        'while',\n        'deferred',\n        'hide',\n        'return',\n        'with',\n        'do',\n        'if',\n        'set',\n        'yield'\n    ],\n    typeKeywords: ['int', 'double', 'String', 'bool'],\n    operators: [\n        '+',\n        '-',\n        '*',\n        '/',\n        '~/',\n        '%',\n        '++',\n        '--',\n        '==',\n        '!=',\n        '>',\n        '<',\n        '>=',\n        '<=',\n        '=',\n        '-=',\n        '/=',\n        '%=',\n        '>>=',\n        '^=',\n        '+=',\n        '*=',\n        '~/=',\n        '<<=',\n        '&=',\n        '!=',\n        '||',\n        '&&',\n        '&',\n        '|',\n        '^',\n        '~',\n        '<<',\n        '>>',\n        '!',\n        '>>>',\n        '??',\n        '?',\n        ':',\n        '|='\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    regexpctl: /[(){}\\[\\]\\$\\^|\\-*+?\\.]/,\n    regexpesc: /\\\\(?:[bBdDfnrstvwWn0\\\\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [[/[{}]/, 'delimiter.bracket'], { include: 'common' }],\n        common: [\n            // identifiers and keywords\n            [\n                /[a-z_$][\\w$]*/,\n                {\n                    cases: {\n                        '@typeKeywords': 'type.identifier',\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            [/[A-Z_$][\\w\\$]*/, 'type.identifier'],\n            // [/[A-Z][\\w\\$]*/, 'identifier'],\n            // whitespace\n            { include: '@whitespace' },\n            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)\n            [\n                /\\/(?=([^\\\\\\/]|\\\\.)+\\/([gimsuy]*)(\\s*)(\\.|;|,|\\)|\\]|\\}|$))/,\n                { token: 'regexp', bracket: '@open', next: '@regexp' }\n            ],\n            // @ annotations.\n            [/@[a-zA-Z]+/, 'annotation'],\n            // variable\n            // delimiters and operators\n            [/[()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/!(?=([^=]|$))/, 'delimiter'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?/, 'number.float'],\n            [/0[xX](@hexdigits)n?/, 'number.hex'],\n            [/0[oO]?(@octaldigits)n?/, 'number.octal'],\n            [/0[bB](@binarydigits)n?/, 'number.binary'],\n            [/(@digits)n?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string_double'],\n            [/'/, 'string', '@string_single']\n            //   [/[a-zA-Z]+/, \"variable\"]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@jsdoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/\\/.*$/, 'comment.doc'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        jsdoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        // We match regular expression quite precisely\n        regexp: [\n            [\n                /(\\{)(\\d+(?:,\\d*)?)(\\})/,\n                ['regexp.escape.control', 'regexp.escape.control', 'regexp.escape.control']\n            ],\n            [\n                /(\\[)(\\^?)(?=(?:[^\\]\\\\\\/]|\\\\.)+)/,\n                ['regexp.escape.control', { token: 'regexp.escape.control', next: '@regexrange' }]\n            ],\n            [/(\\()(\\?:|\\?=|\\?!)/, ['regexp.escape.control', 'regexp.escape.control']],\n            [/[()]/, 'regexp.escape.control'],\n            [/@regexpctl/, 'regexp.escape.control'],\n            [/[^\\\\\\/]/, 'regexp'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/\\\\\\./, 'regexp.invalid'],\n            [\n                /(\\/)([gimsuy]*)/,\n                [{ token: 'regexp', bracket: '@close', next: '@pop' }, 'keyword.other']\n            ]\n        ],\n        regexrange: [\n            [/-/, 'regexp.escape.control'],\n            [/\\^/, 'regexp.invalid'],\n            [/@regexpesc/, 'regexp.escape'],\n            [/[^\\]]/, 'regexp'],\n            [\n                /\\]/,\n                {\n                    token: 'regexp.escape.control',\n                    next: '@pop',\n                    bracket: '@close'\n                }\n            ]\n        ],\n        string_double: [\n            [/[^\\\\\"\\$]+/, 'string'],\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop'],\n            [/\\$\\w+/, 'identifier']\n        ],\n        string_single: [\n            [/[^\\\\'\\$]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/'/, 'string', '@pop'],\n            [/\\$\\w+/, 'identifier']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/dart/dart.js?");

/***/ })

}]);