(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [31],
  {
    /***/ "./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js":
      /*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js ***!
  \**************************************************************************/
      /*! exports provided: conf, language */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" }\n    ]\n};\nvar language = {\n    tokenPostfix: '.julia',\n    keywords: [\n        'begin',\n        'while',\n        'if',\n        'for',\n        'try',\n        'return',\n        'break',\n        'continue',\n        'function',\n        'macro',\n        'quote',\n        'let',\n        'local',\n        'global',\n        'const',\n        'do',\n        'struct',\n        'module',\n        'baremodule',\n        'using',\n        'import',\n        'export',\n        'end',\n        'else',\n        'elseif',\n        'catch',\n        'finally',\n        'mutable',\n        'primitive',\n        'abstract',\n        'type',\n        'in',\n        'isa',\n        'where',\n        'new'\n    ],\n    types: [\n        'LinRange',\n        'LineNumberNode',\n        'LinearIndices',\n        'LoadError',\n        'MIME',\n        'Matrix',\n        'Method',\n        'MethodError',\n        'Missing',\n        'MissingException',\n        'Module',\n        'NTuple',\n        'NamedTuple',\n        'Nothing',\n        'Number',\n        'OrdinalRange',\n        'OutOfMemoryError',\n        'OverflowError',\n        'Pair',\n        'PartialQuickSort',\n        'PermutedDimsArray',\n        'Pipe',\n        'Ptr',\n        'QuoteNode',\n        'Rational',\n        'RawFD',\n        'ReadOnlyMemoryError',\n        'Real',\n        'ReentrantLock',\n        'Ref',\n        'Regex',\n        'RegexMatch',\n        'RoundingMode',\n        'SegmentationFault',\n        'Set',\n        'Signed',\n        'Some',\n        'StackOverflowError',\n        'StepRange',\n        'StepRangeLen',\n        'StridedArray',\n        'StridedMatrix',\n        'StridedVecOrMat',\n        'StridedVector',\n        'String',\n        'StringIndexError',\n        'SubArray',\n        'SubString',\n        'SubstitutionString',\n        'Symbol',\n        'SystemError',\n        'Task',\n        'Text',\n        'TextDisplay',\n        'Timer',\n        'Tuple',\n        'Type',\n        'TypeError',\n        'TypeVar',\n        'UInt',\n        'UInt128',\n        'UInt16',\n        'UInt32',\n        'UInt64',\n        'UInt8',\n        'UndefInitializer',\n        'AbstractArray',\n        'UndefKeywordError',\n        'AbstractChannel',\n        'UndefRefError',\n        'AbstractChar',\n        'UndefVarError',\n        'AbstractDict',\n        'Union',\n        'AbstractDisplay',\n        'UnionAll',\n        'AbstractFloat',\n        'UnitRange',\n        'AbstractIrrational',\n        'Unsigned',\n        'AbstractMatrix',\n        'AbstractRange',\n        'Val',\n        'AbstractSet',\n        'Vararg',\n        'AbstractString',\n        'VecElement',\n        'AbstractUnitRange',\n        'VecOrMat',\n        'AbstractVecOrMat',\n        'Vector',\n        'AbstractVector',\n        'VersionNumber',\n        'Any',\n        'WeakKeyDict',\n        'ArgumentError',\n        'WeakRef',\n        'Array',\n        'AssertionError',\n        'BigFloat',\n        'BigInt',\n        'BitArray',\n        'BitMatrix',\n        'BitSet',\n        'BitVector',\n        'Bool',\n        'BoundsError',\n        'CapturedException',\n        'CartesianIndex',\n        'CartesianIndices',\n        'Cchar',\n        'Cdouble',\n        'Cfloat',\n        'Channel',\n        'Char',\n        'Cint',\n        'Cintmax_t',\n        'Clong',\n        'Clonglong',\n        'Cmd',\n        'Colon',\n        'Complex',\n        'ComplexF16',\n        'ComplexF32',\n        'ComplexF64',\n        'CompositeException',\n        'Condition',\n        'Cptrdiff_t',\n        'Cshort',\n        'Csize_t',\n        'Cssize_t',\n        'Cstring',\n        'Cuchar',\n        'Cuint',\n        'Cuintmax_t',\n        'Culong',\n        'Culonglong',\n        'Cushort',\n        'Cvoid',\n        'Cwchar_t',\n        'Cwstring',\n        'DataType',\n        'DenseArray',\n        'DenseMatrix',\n        'DenseVecOrMat',\n        'DenseVector',\n        'Dict',\n        'DimensionMismatch',\n        'Dims',\n        'DivideError',\n        'DomainError',\n        'EOFError',\n        'Enum',\n        'ErrorException',\n        'Exception',\n        'ExponentialBackOff',\n        'Expr',\n        'Float16',\n        'Float32',\n        'Float64',\n        'Function',\n        'GlobalRef',\n        'HTML',\n        'IO',\n        'IOBuffer',\n        'IOContext',\n        'IOStream',\n        'IdDict',\n        'IndexCartesian',\n        'IndexLinear',\n        'IndexStyle',\n        'InexactError',\n        'InitError',\n        'Int',\n        'Int128',\n        'Int16',\n        'Int32',\n        'Int64',\n        'Int8',\n        'Integer',\n        'InterruptException',\n        'InvalidStateException',\n        'Irrational',\n        'KeyError'\n    ],\n    keywordops: ['<:', '>:', ':', '=>', '...', '.', '->', '?'],\n    allops: /[^\\w\\d\\s()\\[\\]{}\"'#]+/,\n    constants: [\n        'true',\n        'false',\n        'nothing',\n        'missing',\n        'undef',\n        'Inf',\n        'pi',\n        'NaN',\n        'π',\n        'ℯ',\n        'ans',\n        'PROGRAM_FILE',\n        'ARGS',\n        'C_NULL',\n        'VERSION',\n        'DEPOT_PATH',\n        'LOAD_PATH'\n    ],\n    operators: [\n        '!',\n        '!=',\n        '!==',\n        '%',\n        '&',\n        '*',\n        '+',\n        '-',\n        '/',\n        '//',\n        '<',\n        '<<',\n        '<=',\n        '==',\n        '===',\n        '=>',\n        '>',\n        '>=',\n        '>>',\n        '>>>',\n        '\\\\',\n        '^',\n        '|',\n        '|>',\n        '~',\n        '÷',\n        '∈',\n        '∉',\n        '∋',\n        '∌',\n        '∘',\n        '√',\n        '∛',\n        '∩',\n        '∪',\n        '≈',\n        '≉',\n        '≠',\n        '≡',\n        '≢',\n        '≤',\n        '≥',\n        '⊆',\n        '⊇',\n        '⊈',\n        '⊉',\n        '⊊',\n        '⊋',\n        '⊻'\n    ],\n    brackets: [\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' }\n    ],\n    ident: /π|ℯ|\\b(?!\\d)\\w+\\b/,\n    // escape sequences\n    escape: /(?:[abefnrstv\\\\\"'\\n\\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,\n    escapes: /\\\\(?:C\\-(@escape|.)|c(@escape|.)|@escape)/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            [/(::)\\s*|\\b(isa)\\s+/, 'keyword', '@typeanno'],\n            [/\\b(isa)(\\s*\\(@ident\\s*,\\s*)/, ['keyword', { token: '', next: '@typeanno' }]],\n            [/\\b(type|struct)[ \\t]+/, 'keyword', '@typeanno'],\n            // symbols\n            [/^\\s*:@ident[!?]?/, 'metatag'],\n            [/(return)(\\s*:@ident[!?]?)/, ['keyword', 'metatag']],\n            [/(\\(|\\[|\\{|@allops)(\\s*:@ident[!?]?)/, ['', 'metatag']],\n            [/:\\(/, 'metatag', '@quote'],\n            // regular expressions\n            [/r\"\"\"/, 'regexp.delim', '@tregexp'],\n            [/r\"/, 'regexp.delim', '@sregexp'],\n            // strings\n            [/raw\"\"\"/, 'string.delim', '@rtstring'],\n            [/[bv]?\"\"\"/, 'string.delim', '@dtstring'],\n            [/raw\"/, 'string.delim', '@rsstring'],\n            [/[bv]?\"/, 'string.delim', '@dsstring'],\n            [\n                /(@ident)\\{/,\n                {\n                    cases: {\n                        '$1@types': { token: 'type', next: '@gen' },\n                        '@default': { token: 'type', next: '@gen' }\n                    }\n                }\n            ],\n            [\n                /@ident[!?'']?(?=\\.?\\()/,\n                {\n                    cases: {\n                        '@types': 'type',\n                        '@keywords': 'keyword',\n                        '@constants': 'variable',\n                        '@default': 'keyword.flow'\n                    }\n                }\n            ],\n            [\n                /@ident[!?']?/,\n                {\n                    cases: {\n                        '@types': 'type',\n                        '@keywords': 'keyword',\n                        '@constants': 'variable',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            [/\\$\\w+/, 'key'],\n            [/\\$\\(/, 'key', '@paste'],\n            [/@@@ident/, 'annotation'],\n            // whitespace\n            { include: '@whitespace' },\n            // characters\n            [/'(?:@escapes|.)'/, 'string.character'],\n            // delimiters and operators\n            [/[()\\[\\]{}]/, '@brackets'],\n            [\n                /@allops/,\n                {\n                    cases: {\n                        '@keywordops': 'keyword',\n                        '@operators': 'operator'\n                    }\n                }\n            ],\n            [/[;,]/, 'delimiter'],\n            // numbers\n            [/0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/, 'number.hex'],\n            [/0[_oO][0-7](_?[0-7])*/, 'number.octal'],\n            [/0[bB][01](_?[01])*/, 'number.binary'],\n            [/[+\\-]?\\d+(\\.\\d+)?(im?|[eE][+\\-]?\\d+(\\.\\d+)?)?/, 'number']\n        ],\n        // type\n        typeanno: [\n            [/[a-zA-Z_]\\w*(?:\\.[a-zA-Z_]\\w*)*\\{/, 'type', '@gen'],\n            [/([a-zA-Z_]\\w*(?:\\.[a-zA-Z_]\\w*)*)(\\s*<:\\s*)/, ['type', 'keyword']],\n            [/[a-zA-Z_]\\w*(?:\\.[a-zA-Z_]\\w*)*/, 'type', '@pop'],\n            ['', '', '@pop']\n        ],\n        // generic type\n        gen: [\n            [/[a-zA-Z_]\\w*(?:\\.[a-zA-Z_]\\w*)*\\{/, 'type', '@push'],\n            [/[a-zA-Z_]\\w*(?:\\.[a-zA-Z_]\\w*)*/, 'type'],\n            [/<:/, 'keyword'],\n            [/(\\})(\\s*<:\\s*)/, ['type', { token: 'keyword', next: '@pop' }]],\n            [/\\}/, 'type', '@pop'],\n            { include: '@root' }\n        ],\n        // $(...)\n        quote: [\n            [/\\$\\(/, 'key', '@paste'],\n            [/\\(/, '@brackets', '@paren'],\n            [/\\)/, 'metatag', '@pop'],\n            { include: '@root' }\n        ],\n        // :(...)\n        paste: [\n            [/:\\(/, 'metatag', '@quote'],\n            [/\\(/, '@brackets', '@paren'],\n            [/\\)/, 'key', '@pop'],\n            { include: '@root' }\n        ],\n        // (...)\n        paren: [\n            [/\\$\\(/, 'key', '@paste'],\n            [/:\\(/, 'metatag', '@quote'],\n            [/\\(/, '@brackets', '@push'],\n            [/\\)/, '@brackets', '@pop'],\n            { include: '@root' }\n        ],\n        // r\"egex string\"\n        sregexp: [\n            [/^.*/, 'invalid'],\n            [/[^\\\\\"()\\[\\]{}]/, 'regexp'],\n            [/[()\\[\\]{}]/, '@brackets'],\n            [/\\\\./, 'operator.scss'],\n            [/\"[imsx]*/, 'regexp.delim', '@pop']\n        ],\n        tregexp: [\n            [/[^\\\\\"()\\[\\]{}]/, 'regexp'],\n            [/[()\\[\\]{}]/, '@brackets'],\n            [/\\\\./, 'operator.scss'],\n            [/\"(?!\"\")/, 'string'],\n            [/\"\"\"[imsx]*/, 'regexp.delim', '@pop']\n        ],\n        // raw\"string\"\n        rsstring: [\n            [/^.*/, 'invalid'],\n            [/[^\\\\\"]/, 'string'],\n            [/\\\\./, 'string.escape'],\n            [/\"/, 'string.delim', '@pop']\n        ],\n        rtstring: [\n            [/[^\\\\\"]/, 'string'],\n            [/\\\\./, 'string.escape'],\n            [/\"(?!\"\")/, 'string'],\n            [/\"\"\"/, 'string.delim', '@pop']\n        ],\n        // \"string\".\n        dsstring: [\n            [/^.*/, 'invalid'],\n            [/[^\\\\\"\\$]/, 'string'],\n            [/\\$/, '', '@interpolated'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, 'string.delim', '@pop']\n        ],\n        dtstring: [\n            [/[^\\\\\"\\$]/, 'string'],\n            [/\\$/, '', '@interpolated'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"(?!\"\")/, 'string'],\n            [/\"\"\"/, 'string.delim', '@pop']\n        ],\n        // interpolated sequence\n        interpolated: [\n            [/\\(/, { token: '', switchTo: '@interpolated_compound' }],\n            [/[a-zA-Z_]\\w*/, 'identifier'],\n            ['', '', '@pop'] // just a $ is interpreted as a $\n        ],\n        // any code\n        interpolated_compound: [[/\\)/, '', '@pop'], { include: '@root' }],\n        // whitespace & comments\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/#=/, 'comment', '@multi_comment'],\n            [/#.*$/, 'comment']\n        ],\n        multi_comment: [\n            [/#=/, 'comment', '@push'],\n            [/=#/, 'comment', '@pop'],\n            [/=(?!#)|#(?!=)/, 'comment'],\n            [/[^#=]+/, 'comment']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/julia/julia.js?"
        );

        /***/
      }
  }
]);
