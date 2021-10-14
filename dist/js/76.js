(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!*************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
  \*************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ \"../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        blockComment: ['<!--', '-->']\n    },\n    brackets: [['<', '>']],\n    autoClosingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    surroundingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<([_:\\\\w][_:\\\\w-.\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/([_:\\w][_:\\w-.\\d]*)\\s*>$/i,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.IndentOutdent\n            }\n        },\n        {\n            beforeText: new RegExp(\"<(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.Indent }\n        }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.xml',\n    ignoreCase: true,\n    // Useful regular expressions\n    qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\n    tokenizer: {\n        root: [\n            [/[^<&]+/, ''],\n            { include: '@whitespace' },\n            // Standard opening tag\n            [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],\n            // Standard closing tag\n            [\n                /(<\\/)(@qualifiedName)(\\s*)(>)/,\n                [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]\n            ],\n            // Meta tags - instruction\n            [/(<\\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // Meta tags - declaration\n            [/(<\\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // CDATA\n            [/<\\!\\[CDATA\\[/, { token: 'delimiter.cdata', next: '@cdata' }],\n            [/&\\w+;/, 'string.escape']\n        ],\n        cdata: [\n            [/[^\\]]+/, ''],\n            [/\\]\\]>/, { token: 'delimiter.cdata', next: '@pop' }],\n            [/\\]/, '']\n        ],\n        tag: [\n            [/[ \\t\\r\\n]+/, ''],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [/@qualifiedName/, 'attribute.name'],\n            [/\\?>/, { token: 'delimiter', next: '@pop' }],\n            [/(\\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],\n            [/>/, { token: 'delimiter', next: '@pop' }]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/<!--/, { token: 'comment', next: '@comment' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/-->/, { token: 'comment', next: '@pop' }],\n            [/<!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.js?");

/***/ })

}]);