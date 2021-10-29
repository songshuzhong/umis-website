(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [54],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js ***!
  \****************************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fillers/monaco-editor-core.js */ \"./node_modules/monaco-editor/esm/vs/basic-languages/fillers/monaco-editor-core.js\");\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        lineComment: '#',\n        blockComment: [\"'''\", \"'''\"]\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp('^\\\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\\\s*$'),\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__[\"languages\"].IndentAction.Indent }\n        }\n    ],\n    folding: {\n        offSide: true,\n        markers: {\n            start: new RegExp('^\\\\s*#region\\\\b'),\n            end: new RegExp('^\\\\s*#endregion\\\\b')\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.python',\n    keywords: [\n        // This section is the result of running\n        // `for k in keyword.kwlist: print('  \"' + k + '\",')` in a Python REPL,\n        // though note that the output from Python 3 is not a strict superset of the\n        // output from Python 2.\n        'False',\n        'None',\n        'True',\n        'and',\n        'as',\n        'assert',\n        'async',\n        'await',\n        'break',\n        'class',\n        'continue',\n        'def',\n        'del',\n        'elif',\n        'else',\n        'except',\n        'exec',\n        'finally',\n        'for',\n        'from',\n        'global',\n        'if',\n        'import',\n        'in',\n        'is',\n        'lambda',\n        'nonlocal',\n        'not',\n        'or',\n        'pass',\n        'print',\n        'raise',\n        'return',\n        'try',\n        'while',\n        'with',\n        'yield',\n        'int',\n        'float',\n        'long',\n        'complex',\n        'hex',\n        'abs',\n        'all',\n        'any',\n        'apply',\n        'basestring',\n        'bin',\n        'bool',\n        'buffer',\n        'bytearray',\n        'callable',\n        'chr',\n        'classmethod',\n        'cmp',\n        'coerce',\n        'compile',\n        'complex',\n        'delattr',\n        'dict',\n        'dir',\n        'divmod',\n        'enumerate',\n        'eval',\n        'execfile',\n        'file',\n        'filter',\n        'format',\n        'frozenset',\n        'getattr',\n        'globals',\n        'hasattr',\n        'hash',\n        'help',\n        'id',\n        'input',\n        'intern',\n        'isinstance',\n        'issubclass',\n        'iter',\n        'len',\n        'locals',\n        'list',\n        'map',\n        'max',\n        'memoryview',\n        'min',\n        'next',\n        'object',\n        'oct',\n        'open',\n        'ord',\n        'pow',\n        'print',\n        'property',\n        'reversed',\n        'range',\n        'raw_input',\n        'reduce',\n        'reload',\n        'repr',\n        'reversed',\n        'round',\n        'self',\n        'set',\n        'setattr',\n        'slice',\n        'sorted',\n        'staticmethod',\n        'str',\n        'sum',\n        'super',\n        'tuple',\n        'type',\n        'unichr',\n        'unicode',\n        'vars',\n        'xrange',\n        'zip',\n        '__dict__',\n        '__methods__',\n        '__members__',\n        '__class__',\n        '__bases__',\n        '__name__',\n        '__mro__',\n        '__subclasses__',\n        '__init__',\n        '__import__'\n    ],\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            [/[,:;]/, 'delimiter'],\n            [/[{}\\[\\]()]/, '@brackets'],\n            [/@[a-zA-Z_]\\w*/, 'tag'],\n            [\n                /[a-zA-Z_]\\w*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }\n            ]\n        ],\n        // Deal with white space, including single and multi-line comments\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/(^#.*$)/, 'comment'],\n            [/'''/, 'string', '@endDocString'],\n            [/\"\"\"/, 'string', '@endDblDocString']\n        ],\n        endDocString: [\n            [/[^']+/, 'string'],\n            [/\\\\'/, 'string'],\n            [/'''/, 'string', '@popall'],\n            [/'/, 'string']\n        ],\n        endDblDocString: [\n            [/[^\"]+/, 'string'],\n            [/\\\\\"/, 'string'],\n            [/\"\"\"/, 'string', '@popall'],\n            [/\"/, 'string']\n        ],\n        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation\n        numbers: [\n            [/-?0x([abcdef]|[ABCDEF]|\\d)+[lL]?/, 'number.hex'],\n            [/-?(\\d*\\.)?\\d+([eE][+\\-]?\\d+)?[jJ]?[lL]?/, 'number']\n        ],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/'$/, 'string.escape', '@popall'],\n            [/'/, 'string.escape', '@stringBody'],\n            [/\"$/, 'string.escape', '@popall'],\n            [/\"/, 'string.escape', '@dblStringBody']\n        ],\n        stringBody: [\n            [/[^\\\\']+$/, 'string', '@popall'],\n            [/[^\\\\']+/, 'string'],\n            [/\\\\./, 'string'],\n            [/'/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ],\n        dblStringBody: [\n            [/[^\\\\\"]+$/, 'string', '@popall'],\n            [/[^\\\\\"]+/, 'string'],\n            [/\\\\./, 'string'],\n            [/\"/, 'string.escape', '@popall'],\n            [/\\\\$/, 'string']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/python/python.js?"
        );

        /***/
      }
  }
]);