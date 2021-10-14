(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js":
/*!***************************************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js ***!
  \***************************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>', notIn: ['string'] }\n    ],\n    surroundingPairs: [\n        { open: '(', close: ')' },\n        { open: '[', close: ']' },\n        { open: '`', close: '`' }\n    ],\n    folding: {\n        markers: {\n            start: new RegExp('^\\\\s*<!--\\\\s*#?region\\\\b.*-->'),\n            end: new RegExp('^\\\\s*<!--\\\\s*#?endregion\\\\b.*-->')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.rst',\n    control: /[\\\\`*_\\[\\]{}()#+\\-\\.!]/,\n    escapes: /\\\\(?:@control)/,\n    empty: [\n        'area',\n        'base',\n        'basefont',\n        'br',\n        'col',\n        'frame',\n        'hr',\n        'img',\n        'input',\n        'isindex',\n        'link',\n        'meta',\n        'param'\n    ],\n    alphanumerics: /[A-Za-z0-9]/,\n    simpleRefNameWithoutBq: /(?:@alphanumerics[-_+:.]*@alphanumerics)+|(?:@alphanumerics+)/,\n    simpleRefName: /(?:`@phrase`|@simpleRefNameWithoutBq)/,\n    phrase: /@simpleRefNameWithoutBq(?:\\s@simpleRefNameWithoutBq)*/,\n    citationName: /[A-Za-z][A-Za-z0-9-_.]*/,\n    blockLiteralStart: /(?:[!\"#$%&'()*+,-./:;<=>?@\\[\\]^_`{|}~]|[\\s])/,\n    precedingChars: /(?:[ -:/'\"<([{])/,\n    followingChars: /(?:[ -.,:;!?/'\")\\]}>]|$)/,\n    punctuation: /(=|-|~|`|#|\"|\\^|\\+|\\*|:|\\.|'|_|\\+)/,\n    tokenizer: {\n        root: [\n            //sections\n            [/^(@punctuation{3,}$){1,1}?/, 'keyword'],\n            //line-blocks\n            //No rules on it\n            //bullet-lists\n            [/^\\s*([\\*\\-+‣•]|[a-zA-Z0-9]+\\.|\\([a-zA-Z0-9]+\\)|[a-zA-Z0-9]+\\))\\s/, 'keyword'],\n            //literal-blocks\n            [/([ ]::)\\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],\n            [/(::)\\s*$/, 'keyword', '@blankLineOfLiteralBlocks'],\n            { include: '@tables' },\n            { include: '@explicitMarkupBlocks' },\n            { include: '@inlineMarkup' }\n        ],\n        explicitMarkupBlocks: [\n            //citations\n            { include: '@citations' },\n            //footnotes\n            { include: '@footnotes' },\n            //directives\n            [\n                /^(\\.\\.\\s)(@simpleRefName)(::\\s)(.*)$/,\n                [{ token: '', next: 'subsequentLines' }, 'keyword', '', '']\n            ],\n            //hyperlink-targets\n            [\n                /^(\\.\\.)(\\s+)(_)(@simpleRefName)(:)(\\s+)(.*)/,\n                [{ token: '', next: 'hyperlinks' }, '', '', 'string.link', '', '', 'string.link']\n            ],\n            //anonymous-hyperlinks\n            [\n                /^((?:(?:\\.\\.)(?:\\s+))?)(__)(:)(\\s+)(.*)/,\n                [{ token: '', next: 'subsequentLines' }, '', '', '', 'string.link']\n            ],\n            [/^(__\\s+)(.+)/, ['', 'string.link']],\n            //substitution-definitions\n            [\n                /^(\\.\\.)( \\|)([^| ]+[^|]*[^| ]*)(\\| )(@simpleRefName)(:: .*)/,\n                [{ token: '', next: 'subsequentLines' }, '', 'string.link', '', 'keyword', ''],\n                '@rawBlocks'\n            ],\n            [/(\\|)([^| ]+[^|]*[^| ]*)(\\|_{0,2})/, ['', 'string.link', '']],\n            //comments\n            [/^(\\.\\.)([ ].*)$/, [{ token: '', next: '@comments' }, 'comment']]\n        ],\n        inlineMarkup: [\n            { include: '@citationsReference' },\n            { include: '@footnotesReference' },\n            //hyperlink-references\n            [/(@simpleRefName)(_{1,2})/, ['string.link', '']],\n            //embedded-uris-and-aliases\n            [/(`)([^<`]+\\s+)(<)(.*)(>)(`)(_)/, ['', 'string.link', '', 'string.link', '', '', '']],\n            //emphasis\n            [/\\*\\*([^\\\\*]|\\*(?!\\*))+\\*\\*/, 'strong'],\n            [/\\*[^*]+\\*/, 'emphasis'],\n            //inline-literals\n            [/(``)((?:[^`]|\\`(?!`))+)(``)/, ['', 'keyword', '']],\n            [/(__\\s+)(.+)/, ['', 'keyword']],\n            //interpreted-text\n            [/(:)((?:@simpleRefNameWithoutBq)?)(:`)([^`]+)(`)/, ['', 'keyword', '', '', '']],\n            [/(`)([^`]+)(`:)((?:@simpleRefNameWithoutBq)?)(:)/, ['', '', '', 'keyword', '']],\n            [/(`)([^`]+)(`)/, ''],\n            //inline-internal-targets\n            [/(_`)(@phrase)(`)/, ['', 'string.link', '']]\n        ],\n        citations: [\n            [\n                /^(\\.\\.\\s+\\[)((?:@citationName))(\\]\\s+)(.*)/,\n                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']\n            ]\n        ],\n        citationsReference: [[/(\\[)(@citationName)(\\]_)/, ['', 'string.link', '']]],\n        footnotes: [\n            [\n                /^(\\.\\.\\s+\\[)((?:[0-9]+))(\\]\\s+.*)/,\n                [{ token: '', next: '@subsequentLines' }, 'string.link', '']\n            ],\n            [\n                /^(\\.\\.\\s+\\[)((?:#@simpleRefName?))(\\]\\s+)(.*)/,\n                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']\n            ],\n            [\n                /^(\\.\\.\\s+\\[)((?:\\*))(\\]\\s+)(.*)/,\n                [{ token: '', next: '@subsequentLines' }, 'string.link', '', '']\n            ]\n        ],\n        footnotesReference: [\n            [/(\\[)([0-9]+)(\\])(_)/, ['', 'string.link', '', '']],\n            [/(\\[)(#@simpleRefName?)(\\])(_)/, ['', 'string.link', '', '']],\n            [/(\\[)(\\*)(\\])(_)/, ['', 'string.link', '', '']]\n        ],\n        blankLineOfLiteralBlocks: [\n            [/^$/, '', '@subsequentLinesOfLiteralBlocks'],\n            [/^.*$/, '', '@pop']\n        ],\n        subsequentLinesOfLiteralBlocks: [\n            [/(@blockLiteralStart+)(.*)/, ['keyword', '']],\n            [/^(?!blockLiteralStart)/, '', '@popall']\n        ],\n        subsequentLines: [\n            [/^[\\s]+.*/, ''],\n            [/^(?!\\s)/, '', '@pop']\n        ],\n        hyperlinks: [\n            [/^[\\s]+.*/, 'string.link'],\n            [/^(?!\\s)/, '', '@pop']\n        ],\n        comments: [\n            [/^[\\s]+.*/, 'comment'],\n            [/^(?!\\s)/, '', '@pop']\n        ],\n        tables: [\n            [/\\+-[+-]+/, 'keyword'],\n            [/\\+=[+=]+/, 'keyword']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.js?");

/***/ })

}]);