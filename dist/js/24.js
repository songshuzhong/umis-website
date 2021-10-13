(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [24],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js":
      /*!********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js ***!
  \********************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '`', close: '`', notIn: ['string'] },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '`', close: '`' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.go',\n    keywords: [\n        'break',\n        'case',\n        'chan',\n        'const',\n        'continue',\n        'default',\n        'defer',\n        'else',\n        'fallthrough',\n        'for',\n        'func',\n        'go',\n        'goto',\n        'if',\n        'import',\n        'interface',\n        'map',\n        'package',\n        'range',\n        'return',\n        'select',\n        'struct',\n        'switch',\n        'type',\n        'var',\n        'bool',\n        'true',\n        'false',\n        'uint8',\n        'uint16',\n        'uint32',\n        'uint64',\n        'int8',\n        'int16',\n        'int32',\n        'int64',\n        'float32',\n        'float64',\n        'complex64',\n        'complex128',\n        'byte',\n        'rune',\n        'uint',\n        'int',\n        'uintptr',\n        'string',\n        'nil'\n    ],\n    operators: [\n        '+',\n        '-',\n        '*',\n        '/',\n        '%',\n        '&',\n        '|',\n        '^',\n        '<<',\n        '>>',\n        '&^',\n        '+=',\n        '-=',\n        '*=',\n        '/=',\n        '%=',\n        '&=',\n        '|=',\n        '^=',\n        '<<=',\n        '>>=',\n        '&^=',\n        '&&',\n        '||',\n        '<-',\n        '++',\n        '--',\n        '==',\n        '<',\n        '>',\n        '=',\n        '!',\n        '!=',\n        '<=',\n        '>=',\n        ':=',\n        '...',\n        '(',\n        ')',\n        '',\n        ']',\n        '{',\n        '}',\n        ',',\n        ';',\n        '.',\n        ':'\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [\n                /[a-zA-Z_]\\w*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // whitespace\n            { include: '@whitespace' },\n            // [[ attributes ]].\n            [/\\[\\[.*\\]\\]/, 'annotation'],\n            // Preprocessor directive\n            [/^\\s*#\\w+/, 'keyword'],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?/, 'number.float'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex'],\n            [/0[0-7']*[0-7]/, 'number.octal'],\n            [/0[bB][0-1']*[0-1]/, 'number.binary'],\n            [/\\d[\\d']*/, 'number'],\n            [/\\d/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n            [/`/, 'string', '@rawstring'],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@doccomment'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        //Identical copy of comment above, except for the addition of .doc\n        doccomment: [\n            [/[^\\/*]+/, 'comment.doc'],\n            // [/\\/\\*/, 'comment.doc', '@push' ],    // nested comment not allowed :-(\n            [/\\/\\*/, 'comment.doc.invalid'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        rawstring: [\n            [/[^\\`]/, 'string'],\n            [/`/, 'string', '@pop']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/go/go.js?"
        );

        /***/
      }
  }
]);
