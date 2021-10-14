(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js":
/*!***************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js ***!
  \***************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\@\\$\\^\\&\\*\\(\\)\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\s]+)/g,\n    comments: {\n        blockComment: ['{#', '#}']\n    },\n    brackets: [\n        ['{#', '#}'],\n        ['{%', '%}'],\n        ['{{', '}}'],\n        ['(', ')'],\n        ['[', ']'],\n        // HTML\n        ['<!--', '-->'],\n        ['<', '>']\n    ],\n    autoClosingPairs: [\n        { open: '{# ', close: ' #}' },\n        { open: '{% ', close: ' %}' },\n        { open: '{{ ', close: ' }}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        // HTML\n        { open: '<', close: '>' }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '',\n    ignoreCase: true,\n    keywords: [\n        // (opening) tags\n        'apply',\n        'autoescape',\n        'block',\n        'deprecated',\n        'do',\n        'embed',\n        'extends',\n        'flush',\n        'for',\n        'from',\n        'if',\n        'import',\n        'include',\n        'macro',\n        'sandbox',\n        'set',\n        'use',\n        'verbatim',\n        'with',\n        // closing tags\n        'endapply',\n        'endautoescape',\n        'endblock',\n        'endembed',\n        'endfor',\n        'endif',\n        'endmacro',\n        'endsandbox',\n        'endset',\n        'endwith',\n        // literals\n        'true',\n        'false'\n    ],\n    tokenizer: {\n        root: [\n            // whitespace\n            [/\\s+/],\n            // Twig Tag Delimiters\n            [/{#/, 'comment.twig', '@commentState'],\n            [/{%[-~]?/, 'delimiter.twig', '@blockState'],\n            [/{{[-~]?/, 'delimiter.twig', '@variableState'],\n            // HTML\n            [/<!DOCTYPE/, 'metatag.html', '@doctype'],\n            [/<!--/, 'comment.html', '@comment'],\n            [\n                /(<)((?:[\\w\\-]+:)?[\\w\\-]+)(\\s*)(\\/>)/,\n                ['delimiter.html', 'tag.html', '', 'delimiter.html']\n            ],\n            [/(<)(script)/, ['delimiter.html', { token: 'tag.html', next: '@script' }]],\n            [/(<)(style)/, ['delimiter.html', { token: 'tag.html', next: '@style' }]],\n            [\n                /(<)((?:[\\w\\-]+:)?[\\w\\-]+)/,\n                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]\n            ],\n            [\n                /(<\\/)((?:[\\w\\-]+:)?[\\w\\-]+)/,\n                ['delimiter.html', { token: 'tag.html', next: '@otherTag' }]\n            ],\n            [/</, 'delimiter.html'],\n            [/[^<]+/] // text\n        ],\n        /**\n         * Comment Tag Handling\n         */\n        commentState: [\n            [/#}/, 'comment.twig', '@pop'],\n            [/./, 'comment.twig']\n        ],\n        /**\n         * Block Tag Handling\n         */\n        blockState: [\n            [/[-~]?%}/, 'delimiter.twig', '@pop'],\n            // whitespace\n            [/\\s+/],\n            // verbatim\n            // Unlike other blocks, verbatim ehas its own state\n            // transition to ensure we mark its contents as strings.\n            [\n                /(verbatim)(\\s*)([-~]?%})/,\n                ['keyword.twig', '', { token: 'delimiter.twig', next: '@rawDataState' }]\n            ],\n            { include: 'expression' }\n        ],\n        rawDataState: [\n            // endverbatim\n            [\n                /({%[-~]?)(\\s*)(endverbatim)(\\s*)([-~]?%})/,\n                [\n                    'delimiter.twig',\n                    '',\n                    'keyword.twig',\n                    '',\n                    { token: 'delimiter.twig', next: '@popall' }\n                ]\n            ],\n            [/./, 'string.twig']\n        ],\n        /**\n         * Variable Tag Handling\n         */\n        variableState: [[/[-~]?}}/, 'delimiter.twig', '@pop'], { include: 'expression' }],\n        stringState: [\n            // closing double quoted string\n            [/\"/, 'string.twig', '@pop'],\n            // interpolation start\n            [/#{\\s*/, 'string.twig', '@interpolationState'],\n            // string part\n            [/[^#\"\\\\]*(?:(?:\\\\.|#(?!\\{))[^#\"\\\\]*)*/, 'string.twig']\n        ],\n        interpolationState: [\n            // interpolation end\n            [/}/, 'string.twig', '@pop'],\n            { include: 'expression' }\n        ],\n        /**\n         * Expression Handling\n         */\n        expression: [\n            // whitespace\n            [/\\s+/],\n            // operators - math\n            [/\\+|-|\\/{1,2}|%|\\*{1,2}/, 'operators.twig'],\n            // operators - logic\n            [/(and|or|not|b-and|b-xor|b-or)(\\s+)/, ['operators.twig', '']],\n            // operators - comparison (symbols)\n            [/==|!=|<|>|>=|<=/, 'operators.twig'],\n            // operators - comparison (words)\n            [/(starts with|ends with|matches)(\\s+)/, ['operators.twig', '']],\n            // operators - containment\n            [/(in)(\\s+)/, ['operators.twig', '']],\n            // operators - test\n            [/(is)(\\s+)/, ['operators.twig', '']],\n            // operators - misc\n            [/\\||~|:|\\.{1,2}|\\?{1,2}/, 'operators.twig'],\n            // names\n            [\n                /[^\\W\\d][\\w]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword.twig',\n                        '@default': 'variable.twig'\n                    }\n                }\n            ],\n            // numbers\n            [/\\d+(\\.\\d+)?/, 'number.twig'],\n            // punctuation\n            [/\\(|\\)|\\[|\\]|{|}|,/, 'delimiter.twig'],\n            // strings\n            [/\"([^#\"\\\\]*(?:\\\\.[^#\"\\\\]*)*)\"|\\'([^\\'\\\\]*(?:\\\\.[^\\'\\\\]*)*)\\'/, 'string.twig'],\n            // opening double quoted string\n            [/\"/, 'string.twig', '@stringState'],\n            // misc syntactic constructs\n            // These are not operators per se, but for the purposes of lexical analysis we\n            // can treat them as such.\n            // arrow functions\n            [/=>/, 'operators.twig'],\n            // assignment\n            [/=/, 'operators.twig']\n        ],\n        /**\n         * HTML\n         */\n        doctype: [\n            [/[^>]+/, 'metatag.content.html'],\n            [/>/, 'metatag.html', '@pop']\n        ],\n        comment: [\n            [/-->/, 'comment.html', '@pop'],\n            [/[^-]+/, 'comment.content.html'],\n            [/./, 'comment.content.html']\n        ],\n        otherTag: [\n            [/\\/?>/, 'delimiter.html', '@pop'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/] // whitespace\n        ],\n        // -- BEGIN <script> tags handling\n        // After <script\n        script: [\n            [/type/, 'attribute.name.html', '@scriptAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [\n                /(<\\/)(script\\s*)(>)/,\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\n            ]\n        ],\n        // After <script ... type\n        scriptAfterType: [\n            [/=/, 'delimiter.html', '@scriptAfterTypeEquals'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type =\n        scriptAfterTypeEquals: [\n            [\n                /\"([^\"]*)\"/,\n                {\n                    token: 'attribute.value.html',\n                    switchTo: '@scriptWithCustomType.$1'\n                }\n            ],\n            [\n                /'([^']*)'/,\n                {\n                    token: 'attribute.value.html',\n                    switchTo: '@scriptWithCustomType.$1'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded',\n                    nextEmbedded: 'text/javascript'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <script ... type = $S2\n        scriptWithCustomType: [\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@scriptEmbedded.$S2',\n                    nextEmbedded: '$S2'\n                }\n            ],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/script\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        scriptEmbedded: [\n            [/<\\/script/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/[^<]+/, '']\n        ],\n        // -- END <script> tags handling\n        // -- BEGIN <style> tags handling\n        // After <style\n        style: [\n            [/type/, 'attribute.name.html', '@styleAfterType'],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [\n                /(<\\/)(style\\s*)(>)/,\n                ['delimiter.html', 'tag.html', { token: 'delimiter.html', next: '@pop' }]\n            ]\n        ],\n        // After <style ... type\n        styleAfterType: [\n            [/=/, 'delimiter.html', '@styleAfterTypeEquals'],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type =\n        styleAfterTypeEquals: [\n            [\n                /\"([^\"]*)\"/,\n                {\n                    token: 'attribute.value.html',\n                    switchTo: '@styleWithCustomType.$1'\n                }\n            ],\n            [\n                /'([^']*)'/,\n                {\n                    token: 'attribute.value.html',\n                    switchTo: '@styleWithCustomType.$1'\n                }\n            ],\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded',\n                    nextEmbedded: 'text/css'\n                }\n            ],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        // After <style ... type = $S2\n        styleWithCustomType: [\n            [\n                />/,\n                {\n                    token: 'delimiter.html',\n                    next: '@styleEmbedded.$S2',\n                    nextEmbedded: '$S2'\n                }\n            ],\n            [/\"([^\"]*)\"/, 'attribute.value.html'],\n            [/'([^']*)'/, 'attribute.value.html'],\n            [/[\\w\\-]+/, 'attribute.name.html'],\n            [/=/, 'delimiter.html'],\n            [/[ \\t\\r\\n]+/],\n            [/<\\/style\\s*>/, { token: '@rematch', next: '@pop' }]\n        ],\n        styleEmbedded: [\n            [/<\\/style/, { token: '@rematch', next: '@pop', nextEmbedded: '@pop' }],\n            [/[^<]+/, '']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/twig/twig.js?");

/***/ })

}]);