(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*!---------------------------------------------------------------------------------------------\n *  Copyright (C) David Owens II, owensd.io. All rights reserved.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.swift',\n    // TODO(owensd): Support the full range of unicode valid identifiers.\n    identifier: /[a-zA-Z_][\\w$]*/,\n    // TODO(owensd): Support the @availability macro properly.\n    attributes: [\n        '@autoclosure',\n        '@noescape',\n        '@noreturn',\n        '@NSApplicationMain',\n        '@NSCopying',\n        '@NSManaged',\n        '@objc',\n        '@UIApplicationMain',\n        '@noreturn',\n        '@availability',\n        '@IBAction',\n        '@IBDesignable',\n        '@IBInspectable',\n        '@IBOutlet'\n    ],\n    accessmodifiers: ['public', 'private', 'fileprivate', 'internal'],\n    keywords: [\n        '__COLUMN__',\n        '__FILE__',\n        '__FUNCTION__',\n        '__LINE__',\n        'as',\n        'as!',\n        'as?',\n        'associativity',\n        'break',\n        'case',\n        'catch',\n        'class',\n        'continue',\n        'convenience',\n        'default',\n        'deinit',\n        'didSet',\n        'do',\n        'dynamic',\n        'dynamicType',\n        'else',\n        'enum',\n        'extension',\n        'fallthrough',\n        'fileprivate',\n        'final',\n        'for',\n        'func',\n        'get',\n        'guard',\n        'if',\n        'import',\n        'in',\n        'infix',\n        'init',\n        'inout',\n        'internal',\n        'is',\n        'lazy',\n        'left',\n        'let',\n        'mutating',\n        'nil',\n        'none',\n        'nonmutating',\n        'operator',\n        'optional',\n        'override',\n        'postfix',\n        'precedence',\n        'prefix',\n        'private',\n        'protocol',\n        'Protocol',\n        'public',\n        'repeat',\n        'required',\n        'return',\n        'right',\n        'self',\n        'Self',\n        'set',\n        'static',\n        'struct',\n        'subscript',\n        'super',\n        'switch',\n        'throw',\n        'throws',\n        'try',\n        'try!',\n        'Type',\n        'typealias',\n        'unowned',\n        'var',\n        'weak',\n        'where',\n        'while',\n        'willSet',\n        'FALSE',\n        'TRUE'\n    ],\n    symbols: /[=(){}\\[\\].,:;@#\\_&\\-<>`?!+*\\\\\\/]/,\n    // Moved . to operatorstart so it can be a delimiter\n    operatorstart: /[\\/=\\-+!*%<>&|^~?\\u00A1-\\u00A7\\u00A9\\u00AB\\u00AC\\u00AE\\u00B0-\\u00B1\\u00B6\\u00BB\\u00BF\\u00D7\\u00F7\\u2016-\\u2017\\u2020-\\u2027\\u2030-\\u203E\\u2041-\\u2053\\u2055-\\u205E\\u2190-\\u23FF\\u2500-\\u2775\\u2794-\\u2BFF\\u2E00-\\u2E7F\\u3001-\\u3003\\u3008-\\u3030]/,\n    operatorend: /[\\u0300-\\u036F\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE00-\\uFE0F\\uFE20-\\uFE2F\\uE0100-\\uE01EF]/,\n    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,\n    // TODO(owensd): These are borrowed from C#; need to validate correctness for Swift.\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            { include: '@attribute' },\n            { include: '@literal' },\n            { include: '@keyword' },\n            { include: '@invokedmethod' },\n            { include: '@symbol' }\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/\"\"\"/, 'string.quote', '@endDblDocString']\n        ],\n        endDblDocString: [\n            [/[^\"]+/, 'string'],\n            [/\\\\\"/, 'string'],\n            [/\"\"\"/, 'string.quote', '@popall'],\n            [/\"/, 'string']\n        ],\n        symbol: [\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/[.]/, 'delimiter'],\n            [/@operators/, 'operator'],\n            [/@symbols/, 'operator']\n        ],\n        comment: [\n            [/\\/\\/\\/.*$/, 'comment.doc'],\n            [/\\/\\*\\*/, 'comment.doc', '@commentdocbody'],\n            [/\\/\\/.*$/, 'comment'],\n            [/\\/\\*/, 'comment', '@commentbody']\n        ],\n        commentdocbody: [\n            [/\\/\\*/, 'comment', '@commentbody'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/\\:[a-zA-Z]+\\:/, 'comment.doc.param'],\n            [/./, 'comment.doc']\n        ],\n        commentbody: [\n            [/\\/\\*/, 'comment', '@commentbody'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/./, 'comment']\n        ],\n        attribute: [\n            [\n                /@@@identifier/,\n                {\n                    cases: {\n                        '@attributes': 'keyword.control',\n                        '@default': ''\n                    }\n                }\n            ]\n        ],\n        literal: [\n            [/\"/, { token: 'string.quote', next: '@stringlit' }],\n            [/0[b]([01]_?)+/, 'number.binary'],\n            [/0[o]([0-7]_?)+/, 'number.octal'],\n            [/0[x]([0-9a-fA-F]_?)+([pP][\\-+](\\d_?)+)?/, 'number.hex'],\n            [/(\\d_?)*\\.(\\d_?)+([eE][\\-+]?(\\d_?)+)?/, 'number.float'],\n            [/(\\d_?)+/, 'number']\n        ],\n        stringlit: [\n            [/\\\\\\(/, { token: 'operator', next: '@interpolatedexpression' }],\n            [/@escapes/, 'string'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', next: '@pop' }],\n            [/./, 'string']\n        ],\n        interpolatedexpression: [\n            [/\\(/, { token: 'operator', next: '@interpolatedexpression' }],\n            [/\\)/, { token: 'operator', next: '@pop' }],\n            { include: '@literal' },\n            { include: '@keyword' },\n            { include: '@symbol' }\n        ],\n        keyword: [\n            [/`/, { token: 'operator', next: '@escapedkeyword' }],\n            [\n                /@identifier/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '[A-Z][a-zA-Z0-9$]*': 'type.identifier',\n                        '@default': 'identifier'\n                    }\n                }\n            ]\n        ],\n        escapedkeyword: [\n            [/`/, { token: 'operator', next: '@pop' }],\n            [/./, 'identifier']\n        ],\n        //\t\tsymbol: [\n        //\t\t\t[ /@symbols/, 'operator' ],\n        //\t\t\t[ /@operators/, 'operator' ]\n        //\t\t],\n        invokedmethod: [\n            [\n                /([.])(@identifier)/,\n                {\n                    cases: {\n                        $2: ['delimeter', 'type.identifier'],\n                        '@default': ''\n                    }\n                }\n            ]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/swift/swift.js?");

/***/ })

}]);