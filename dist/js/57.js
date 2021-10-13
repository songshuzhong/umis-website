(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar EMPTY_ELEMENTS = [\n    'area',\n    'base',\n    'br',\n    'col',\n    'embed',\n    'hr',\n    'img',\n    'input',\n    'keygen',\n    'link',\n    'menuitem',\n    'meta',\n    'param',\n    'source',\n    'track',\n    'wbr'\n];\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n    comments: {\n        blockComment: ['<!--', '-->']\n    },\n    brackets: [\n        ['<!--', '-->'],\n        ['<', '>'],\n        ['{', '}'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '<', close: '>' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/(\\w[\\w\\d]*)\\s*>$/i,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.IndentOutdent\n            }\n        },\n        {\n            beforeText: new RegExp(\"<(?!(?:\" + EMPTY_ELEMENTS.join('|') + \"))(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.Indent }\n        }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    // ignoreCase: true,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/@@@@/],\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.root' }],\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [/(<)([\\w\\-]+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [/(<)([:\\w\\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/(<\\/)([\\w\\-]+)/, ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]],\n            [/</, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/[^<@]+/] // text\n        ],\n        doctype: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop']\n        ],\n        comment: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.comment' }],\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.otherTag' }],\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/] // whitespace\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.script' }],\n            [/type/, 'attribute.name', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded.text/javascript',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [\n                /(<\\/)(script\\s*)(>)/,\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\n            ]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.scriptAfterType'\n                }\n            ],\n            [/=/, 'delimiter', '@scriptAfterTypeEquals'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded.text/javascript',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.scriptAfterTypeEquals'\n                }\n            ],\n            [\n                /\"([^\"]*)\"/,\n                {\n                    token: 'attribute.value',\n                    switchTo: '@scriptWithCustomType.$1'\n                }\n            ],\n            [\n                /'([^']*)'/,\n                {\n                    token: 'attribute.value',\n                    switchTo: '@scriptWithCustomType.$1'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded.text/javascript',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.scriptWithCustomType.$S2'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded.$S2',\n                    nextEmbedded: '$S2'\n                }\n            ],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInEmbeddedState.scriptEmbedded.$S2',\n                    nextEmbedded: '@pop'\n                }\n            ],\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/@[^@]/, { token: '@rematch', switchTo: '@razorInSimpleState.style' }],\n            [/type/, 'attribute.name', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded.text/css',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [\n                /(<\\/)(style\\s*)(>)/,\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\n            ]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.styleAfterType'\n                }\n            ],\n            [/=/, 'delimiter', '@styleAfterTypeEquals'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded.text/css',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.styleAfterTypeEquals'\n                }\n            ],\n            [\n                /\"([^\"]*)\"/,\n                {\n                    token: 'attribute.value',\n                    switchTo: '@styleWithCustomType.$1'\n                }\n            ],\n            [\n                /'([^']*)'/,\n                {\n                    token: 'attribute.value',\n                    switchTo: '@styleWithCustomType.$1'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded.text/css',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInSimpleState.styleWithCustomType.$S2'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded.$S2',\n                    nextEmbedded: '$S2'\n                }\n            ],\n            [/\"([^\"]*)\"/, 'attribute.value'],\n            [/'([^']*)'/, 'attribute.value'],\n            [/[\\w\\-]+/, 'attribute.name'],\n            [/=/, 'delimiter'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [\n                /@[^@]/,\n                {\n                    token: '@rematch',\n                    switchTo: '@razorInEmbeddedState.styleEmbedded.$S2',\n                    nextEmbedded: '@pop'\n                }\n            ],\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }]\n        ],\n        // -- END <style> tags handling\n        razorInSimpleState: [\n            [/@\\*/, 'comment.cs', '@razorBlockCommentTopLevel'],\n            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],\n            [/(@)(\\s*[\\w]+)/, ['metatag.cs', { token: 'identifier.cs', switchTo: '@$S2.$S3' }]],\n            [/[})]/, { token: 'metatag.cs', switchTo: '@$S2.$S3' }],\n            [/\\*@/, { token: 'comment.cs', switchTo: '@$S2.$S3' }]\n        ],\n        razorInEmbeddedState: [\n            [/@\\*/, 'comment.cs', '@razorBlockCommentTopLevel'],\n            [/@[{(]/, 'metatag.cs', '@razorRootTopLevel'],\n            [\n                /(@)(\\s*[\\w]+)/,\n                [\n                    'metatag.cs',\n                    {\n                        token: 'identifier.cs',\n                        switchTo: '@$S2.$S3',\n                        nextEmbedded: '$S3'\n                    }\n                ]\n            ],\n            [\n                /[})]/,\n                {\n                    token: 'metatag.cs',\n                    switchTo: '@$S2.$S3',\n                    nextEmbedded: '$S3'\n                }\n            ],\n            [\n                /\\*@/,\n                {\n                    token: 'comment.cs',\n                    switchTo: '@$S2.$S3',\n                    nextEmbedded: '$S3'\n                }\n            ]\n        ],\n        razorBlockCommentTopLevel: [\n            [/\\*@/, '@rematch', '@pop'],\n            [/[^*]+/, 'comment.cs'],\n            [/./, 'comment.cs']\n        ],\n        razorBlockComment: [\n            [/\\*@/, 'comment.cs', '@pop'],\n            [/[^*]+/, 'comment.cs'],\n            [/./, 'comment.cs']\n        ],\n        razorRootTopLevel: [\n            [/\\{/, 'delimiter.bracket.cs', '@razorRoot'],\n            [/\\(/, 'delimiter.parenthesis.cs', '@razorRoot'],\n            [/[})]/, '@rematch', '@pop'],\n            { include: 'razorCommon' }\n        ],\n        razorRoot: [\n            [/\\{/, 'delimiter.bracket.cs', '@razorRoot'],\n            [/\\(/, 'delimiter.parenthesis.cs', '@razorRoot'],\n            [/\\}/, 'delimiter.bracket.cs', '@pop'],\n            [/\\)/, 'delimiter.parenthesis.cs', '@pop'],\n            { include: 'razorCommon' }\n        ],\n        razorCommon: [\n            [\n                /[a-zA-Z_]\\w*/,\n                {\n                    cases: {\n                        '@razorKeywords': { token: 'keyword.cs' },\n                        '@default': 'identifier.cs'\n                    }\n                }\n            ],\n            // brackets\n            [/[\\[\\]]/, 'delimiter.array.cs'],\n            // whitespace\n            [/[ \\t\\r\\n]+/],\n            // comments\n            [/\\/\\/.*$/, 'comment.cs'],\n            [/@\\*/, 'comment.cs', '@razorBlockComment'],\n            // strings\n            [/\"([^\"]*)\"/, 'string.cs'],\n            [/'([^']*)'/, 'string.cs'],\n            // simple html\n            [/(<)([\\w\\-]+)(\\/>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<)([\\w\\-]+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            [/(<\\/)([\\w\\-]+)(>)/, ['delimiter.html', 'tag.html', 'delimiter.html']],\n            // delimiters\n            [/[\\+\\-\\*\\%\\&\\|\\^\\~\\!\\=\\<\\>\\/\\?\\;\\:\\.\\,]/, 'delimiter.cs'],\n            // numbers\n            [/\\d*\\d+[eE]([\\-+]?\\d+)?/, 'number.float.cs'],\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float.cs'],\n            [/0[xX][0-9a-fA-F']*[0-9a-fA-F]/, 'number.hex.cs'],\n            [/0[0-7']*[0-7]/, 'number.octal.cs'],\n            [/0[bB][0-1']*[0-1]/, 'number.binary.cs'],\n            [/\\d[\\d']*/, 'number.cs'],\n            [/\\d/, 'number.cs']\n        ]\n    },\n    razorKeywords: [\n        'abstract',\n        'as',\n        'async',\n        'await',\n        'base',\n        'bool',\n        'break',\n        'by',\n        'byte',\n        'case',\n        'catch',\n        'char',\n        'checked',\n        'class',\n        'const',\n        'continue',\n        'decimal',\n        'default',\n        'delegate',\n        'do',\n        'double',\n        'descending',\n        'explicit',\n        'event',\n        'extern',\n        'else',\n        'enum',\n        'false',\n        'finally',\n        'fixed',\n        'float',\n        'for',\n        'foreach',\n        'from',\n        'goto',\n        'group',\n        'if',\n        'implicit',\n        'in',\n        'int',\n        'interface',\n        'internal',\n        'into',\n        'is',\n        'lock',\n        'long',\n        'nameof',\n        'new',\n        'null',\n        'namespace',\n        'object',\n        'operator',\n        'out',\n        'override',\n        'orderby',\n        'params',\n        'private',\n        'protected',\n        'public',\n        'readonly',\n        'ref',\n        'return',\n        'switch',\n        'struct',\n        'sbyte',\n        'sealed',\n        'short',\n        'sizeof',\n        'stackalloc',\n        'static',\n        'string',\n        'select',\n        'this',\n        'throw',\n        'true',\n        'try',\n        'typeof',\n        'uint',\n        'ulong',\n        'unchecked',\n        'unsafe',\n        'ushort',\n        'using',\n        'var',\n        'virtual',\n        'volatile',\n        'void',\n        'when',\n        'while',\n        'where',\n        'yield',\n        'model',\n        'inject' // Razor specific\n    ],\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/razor/razor.js?");

/***/ })

}]);