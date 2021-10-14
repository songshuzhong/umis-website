(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.js":
/*!***********************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.js ***!
  \***********************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        blockComment: ['(*', '*)']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '[', close: ']' },\n        { open: '{', close: '}' },\n        { open: '(', close: ')' },\n        { open: '(*', close: '*)' },\n        { open: '<*', close: '*>' },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.m3',\n    brackets: [\n        { token: 'delimiter.curly', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' }\n    ],\n    keywords: [\n        'AND',\n        'ANY',\n        'ARRAY',\n        'AS',\n        'BEGIN',\n        'BITS',\n        'BRANDED',\n        'BY',\n        'CASE',\n        'CONST',\n        'DIV',\n        'DO',\n        'ELSE',\n        'ELSIF',\n        'END',\n        'EVAL',\n        'EXCEPT',\n        'EXCEPTION',\n        'EXIT',\n        'EXPORTS',\n        'FINALLY',\n        'FOR',\n        'FROM',\n        'GENERIC',\n        'IF',\n        'IMPORT',\n        'IN',\n        'INTERFACE',\n        'LOCK',\n        'LOOP',\n        'METHODS',\n        'MOD',\n        'MODULE',\n        'NOT',\n        'OBJECT',\n        'OF',\n        'OR',\n        'OVERRIDES',\n        'PROCEDURE',\n        'RAISE',\n        'RAISES',\n        'READONLY',\n        'RECORD',\n        'REF',\n        'REPEAT',\n        'RETURN',\n        'REVEAL',\n        'SET',\n        'THEN',\n        'TO',\n        'TRY',\n        'TYPE',\n        'TYPECASE',\n        'UNSAFE',\n        'UNTIL',\n        'UNTRACED',\n        'VALUE',\n        'VAR',\n        'WHILE',\n        'WITH'\n    ],\n    reservedConstNames: [\n        'ABS',\n        'ADR',\n        'ADRSIZE',\n        'BITSIZE',\n        'BYTESIZE',\n        'CEILING',\n        'DEC',\n        'DISPOSE',\n        'FALSE',\n        'FIRST',\n        'FLOAT',\n        'FLOOR',\n        'INC',\n        'ISTYPE',\n        'LAST',\n        'LOOPHOLE',\n        'MAX',\n        'MIN',\n        'NARROW',\n        'NEW',\n        'NIL',\n        'NUMBER',\n        'ORD',\n        'ROUND',\n        'SUBARRAY',\n        'TRUE',\n        'TRUNC',\n        'TYPECODE',\n        'VAL'\n    ],\n    reservedTypeNames: [\n        'ADDRESS',\n        'ANY',\n        'BOOLEAN',\n        'CARDINAL',\n        'CHAR',\n        'EXTENDED',\n        'INTEGER',\n        'LONGCARD',\n        'LONGINT',\n        'LONGREAL',\n        'MUTEX',\n        'NULL',\n        'REAL',\n        'REFANY',\n        'ROOT',\n        'TEXT'\n    ],\n    operators: ['+', '-', '*', '/', '&', '^', '.'],\n    relations: ['=', '#', '<', '<=', '>', '>=', '<:', ':'],\n    delimiters: ['|', '..', '=>', ',', ';', ':='],\n    symbols: /[>=<#.,:;+\\-*/&^]+/,\n    escapes: /\\\\(?:[\\\\fnrt\"']|[0-7]{3})/,\n    tokenizer: {\n        root: [\n            // Identifiers and keywords\n            [/_\\w*/, 'invalid'],\n            [\n                /[a-zA-Z][a-zA-Z0-9_]*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@reservedConstNames': { token: 'constant.reserved.$0' },\n                        '@reservedTypeNames': { token: 'type.reserved.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // Whitespace\n            { include: '@whitespace' },\n            [/[{}()\\[\\]]/, '@brackets'],\n            // Integer- and real literals\n            [/[0-9]+\\.[0-9]+(?:[DdEeXx][\\+\\-]?[0-9]+)?/, 'number.float'],\n            [/[0-9]+(?:\\_[0-9a-fA-F]+)?L?/, 'number'],\n            // Operators, relations, and delimiters\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'operators',\n                        '@relations': 'operators',\n                        '@delimiters': 'delimiter',\n                        '@default': 'invalid'\n                    }\n                }\n            ],\n            // Character literals\n            [/'[^\\\\']'/, 'string.char'],\n            [/(')(@escapes)(')/, ['string.char', 'string.escape', 'string.char']],\n            [/'/, 'invalid'],\n            // Text literals\n            [/\"([^\"\\\\]|\\\\.)*$/, 'invalid'],\n            [/\"/, 'string.text', '@text']\n        ],\n        text: [\n            [/[^\\\\\"]+/, 'string.text'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'invalid'],\n            [/\"/, 'string.text', '@pop']\n        ],\n        comment: [\n            [/\\(\\*/, 'comment', '@push'],\n            [/\\*\\)/, 'comment', '@pop'],\n            [/./, 'comment']\n        ],\n        pragma: [\n            [/<\\*/, 'keyword.pragma', '@push'],\n            [/\\*>/, 'keyword.pragma', '@pop'],\n            [/./, 'keyword.pragma']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, 'white'],\n            [/\\(\\*/, 'comment', '@comment'],\n            [/<\\*/, 'keyword.pragma', '@pragma']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/m3/m3.js?");

/***/ })

}]);