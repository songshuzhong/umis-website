(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [0],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js ***!
  \**********************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '[', close: ']' },\n        { open: '{', close: '}' },\n        { open: '(', close: ')' },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*#pragma\\\\s+region\\\\b'),\n            end: new RegExp('^\\\\s*#pragma\\\\s+endregion\\\\b')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.cpp',\n    brackets: [\n        { token: 'delimiter.curly', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' },\n        { token: 'delimiter.angle', open: '<', close: '>' }\n    ],\n    keywords: [\n        'abstract',\n        'amp',\n        'array',\n        'auto',\n        'bool',\n        'break',\n        'case',\n        'catch',\n        'char',\n        'class',\n        'const',\n        'constexpr',\n        'const_cast',\n        'continue',\n        'cpu',\n        'decltype',\n        'default',\n        'delegate',\n        'delete',\n        'do',\n        'double',\n        'dynamic_cast',\n        'each',\n        'else',\n        'enum',\n        'event',\n        'explicit',\n        'export',\n        'extern',\n        'false',\n        'final',\n        'finally',\n        'float',\n        'for',\n        'friend',\n        'gcnew',\n        'generic',\n        'goto',\n        'if',\n        'in',\n        'initonly',\n        'inline',\n        'int',\n        'interface',\n        'interior_ptr',\n        'internal',\n        'literal',\n        'long',\n        'mutable',\n        'namespace',\n        'new',\n        'noexcept',\n        'nullptr',\n        '__nullptr',\n        'operator',\n        'override',\n        'partial',\n        'pascal',\n        'pin_ptr',\n        'private',\n        'property',\n        'protected',\n        'public',\n        'ref',\n        'register',\n        'reinterpret_cast',\n        'restrict',\n        'return',\n        'safe_cast',\n        'sealed',\n        'short',\n        'signed',\n        'sizeof',\n        'static',\n        'static_assert',\n        'static_cast',\n        'struct',\n        'switch',\n        'template',\n        'this',\n        'thread_local',\n        'throw',\n        'tile_static',\n        'true',\n        'try',\n        'typedef',\n        'typeid',\n        'typename',\n        'union',\n        'unsigned',\n        'using',\n        'virtual',\n        'void',\n        'volatile',\n        'wchar_t',\n        'where',\n        'while',\n        '_asm',\n        '_based',\n        '_cdecl',\n        '_declspec',\n        '_fastcall',\n        '_if_exists',\n        '_if_not_exists',\n        '_inline',\n        '_multiple_inheritance',\n        '_pascal',\n        '_single_inheritance',\n        '_stdcall',\n        '_virtual_inheritance',\n        '_w64',\n        '__abstract',\n        '__alignof',\n        '__asm',\n        '__assume',\n        '__based',\n        '__box',\n        '__builtin_alignof',\n        '__cdecl',\n        '__clrcall',\n        '__declspec',\n        '__delegate',\n        '__event',\n        '__except',\n        '__fastcall',\n        '__finally',\n        '__forceinline',\n        '__gc',\n        '__hook',\n        '__identifier',\n        '__if_exists',\n        '__if_not_exists',\n        '__inline',\n        '__int128',\n        '__int16',\n        '__int32',\n        '__int64',\n        '__int8',\n        '__interface',\n        '__leave',\n        '__m128',\n        '__m128d',\n        '__m128i',\n        '__m256',\n        '__m256d',\n        '__m256i',\n        '__m64',\n        '__multiple_inheritance',\n        '__newslot',\n        '__nogc',\n        '__noop',\n        '__nounwind',\n        '__novtordisp',\n        '__pascal',\n        '__pin',\n        '__pragma',\n        '__property',\n        '__ptr32',\n        '__ptr64',\n        '__raise',\n        '__restrict',\n        '__resume',\n        '__sealed',\n        '__single_inheritance',\n        '__stdcall',\n        '__super',\n        '__thiscall',\n        '__try',\n        '__try_cast',\n        '__typeof',\n        '__unaligned',\n        '__unhook',\n        '__uuidof',\n        '__value',\n        '__virtual_inheritance',\n        '__w64',\n        '__wchar_t'\n    ],\n    operators: [\n        '=',\n        '>',\n        '<',\n        '!',\n        '~',\n        '?',\n        ':',\n        '==',\n        '<=',\n        '>=',\n        '!=',\n        '&&',\n        '||',\n        '++',\n        '--',\n        '+',\n        '-',\n        '*',\n        '/',\n        '&',\n        '|',\n        '^',\n        '%',\n        '<<',\n        '>>',\n        '>>>',\n        '+=',\n        '-=',\n        '*=',\n        '/=',\n        '&=',\n        '|=',\n        '^=',\n        '%=',\n        '<<=',\n        '>>=',\n        '>>>='\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    integersuffix: /([uU](ll|LL|l|L)|(ll|LL|l|L)?[uU]?)/,\n    floatsuffix: /[fFlL]?/,\n    encoding: /u|u8|U|L/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // C++ 11 Raw String\n            [/@encoding?R\\\"(?:([^ ()\\\\\\t]*))\\(/, { token: 'string.raw.begin', next: '@raw.$1' }],\n            // identifiers and keywords\n            [\n                /[a-zA-Z_]\\w*/,\n                {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            // The preprocessor checks must be before whitespace as they check /^\\s*#/ which\n            // otherwise fails to match later after other whitespace has been removed.\n            // Inclusion\n            [/^\\s*#\\s*include/, { token: 'keyword.directive.include', next: '@include' }],\n            // Preprocessor directive\n            [/^\\s*#\\s*\\w+/, 'keyword.directive'],\n            // whitespace\n            { include: '@whitespace' },\n            // [[ attributes ]].\n            [/\\[\\s*\\[/, { token: 'annotation', next: '@annotation' }],\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [\n                /@symbols/,\n                {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }\n            ],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?(@floatsuffix)/, 'number.float'],\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],\n            [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],\n            [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],\n            [/\\d[\\d']*\\d(@integersuffix)/, 'number'],\n            [/\\d(@integersuffix)/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string'],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@doccomment'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*\\\\$/, 'comment', '@linecomment'],\n            [/\\/\\/.*$/, 'comment']\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        //For use with continuous line comments\n        linecomment: [\n            [/.*[^\\\\]$/, 'comment', '@pop'],\n            [/[^]+/, 'comment']\n        ],\n        //Identical copy of comment above, except for the addition of .doc\n        doccomment: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string', '@pop']\n        ],\n        raw: [\n            [\n                /(.*)(\\))(?:([^ ()\\\\\\t\"]*))(\\\")/,\n                {\n                    cases: {\n                        '$3==$S2': [\n                            'string.raw',\n                            'string.raw.end',\n                            'string.raw.end',\n                            { token: 'string.raw.end', next: '@pop' }\n                        ],\n                        '@default': ['string.raw', 'string.raw', 'string.raw', 'string.raw']\n                    }\n                }\n            ],\n            [/.*/, 'string.raw']\n        ],\n        annotation: [\n            { include: '@whitespace' },\n            [/using|alignas/, 'keyword'],\n            [/[a-zA-Z0-9_]+/, 'annotation'],\n            [/[,:]/, 'delimiter'],\n            [/[()]/, '@brackets'],\n            [/\\]\\s*\\]/, { token: 'annotation', next: '@pop' }]\n        ],\n        include: [\n            [\n                /(\\s*)(<)([^<>]*)(>)/,\n                [\n                    '',\n                    'keyword.directive.include.begin',\n                    'string.include.identifier',\n                    { token: 'keyword.directive.include.end', next: '@pop' }\n                ]\n            ],\n            [\n                /(\\s*)(\")([^\"]*)(\")/,\n                [\n                    '',\n                    'keyword.directive.include.begin',\n                    'string.include.identifier',\n                    { token: 'keyword.directive.include.end', next: '@pop' }\n                ]\n            ]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/cpp/cpp.js?"
        );

        /***/
      }
  }
]);
