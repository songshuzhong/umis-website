(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js":
/*!******************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js ***!
  \******************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: ';;'\n    },\n    brackets: [\n        ['[', ']'],\n        ['(', ')'],\n        ['{', '}']\n    ],\n    autoClosingPairs: [\n        { open: '[', close: ']' },\n        { open: '\"', close: '\"' },\n        { open: '(', close: ')' },\n        { open: '{', close: '}' }\n    ],\n    surroundingPairs: [\n        { open: '[', close: ']' },\n        { open: '\"', close: '\"' },\n        { open: '(', close: ')' },\n        { open: '{', close: '}' }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    ignoreCase: true,\n    tokenPostfix: '.clj',\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '{', close: '}', token: 'delimiter.curly' }\n    ],\n    constants: ['true', 'false', 'nil'],\n    // delimiters: /[\\\\\\[\\]\\s\"#'(),;@^`{}~]|$/,\n    numbers: /^(?:[+\\-]?\\d+(?:(?:N|(?:[eE][+\\-]?\\d+))|(?:\\.?\\d*(?:M|(?:[eE][+\\-]?\\d+))?)|\\/\\d+|[xX][0-9a-fA-F]+|r[0-9a-zA-Z]+)?(?=[\\\\\\[\\]\\s\"#'(),;@^`{}~]|$))/,\n    characters: /^(?:\\\\(?:backspace|formfeed|newline|return|space|tab|o[0-7]{3}|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{4}|.)?(?=[\\\\\\[\\]\\s\"(),;@^`{}~]|$))/,\n    escapes: /^\\\\(?:[\"'\\\\bfnrt]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // simple-namespace := /^[^\\\\\\/\\[\\]\\d\\s\"#'(),;@^`{}~][^\\\\\\[\\]\\s\"(),;@^`{}~]*/\n    // simple-symbol    := /^(?:\\/|[^\\\\\\/\\[\\]\\d\\s\"#'(),;@^`{}~][^\\\\\\[\\]\\s\"(),;@^`{}~]*)/\n    // qualified-symbol := (<simple-namespace>(<.><simple-namespace>)*</>)?<simple-symbol>\n    qualifiedSymbols: /^(?:(?:[^\\\\\\/\\[\\]\\d\\s\"#'(),;@^`{}~][^\\\\\\[\\]\\s\"(),;@^`{}~]*(?:\\.[^\\\\\\/\\[\\]\\d\\s\"#'(),;@^`{}~][^\\\\\\[\\]\\s\"(),;@^`{}~]*)*\\/)?(?:\\/|[^\\\\\\/\\[\\]\\d\\s\"#'(),;@^`{}~][^\\\\\\[\\]\\s\"(),;@^`{}~]*)*(?=[\\\\\\[\\]\\s\"(),;@^`{}~]|$))/,\n    specialForms: [\n        '.',\n        'catch',\n        'def',\n        'do',\n        'if',\n        'monitor-enter',\n        'monitor-exit',\n        'new',\n        'quote',\n        'recur',\n        'set!',\n        'throw',\n        'try',\n        'var'\n    ],\n    coreSymbols: [\n        '*',\n        \"*'\",\n        '*1',\n        '*2',\n        '*3',\n        '*agent*',\n        '*allow-unresolved-vars*',\n        '*assert*',\n        '*clojure-version*',\n        '*command-line-args*',\n        '*compile-files*',\n        '*compile-path*',\n        '*compiler-options*',\n        '*data-readers*',\n        '*default-data-reader-fn*',\n        '*e',\n        '*err*',\n        '*file*',\n        '*flush-on-newline*',\n        '*fn-loader*',\n        '*in*',\n        '*math-context*',\n        '*ns*',\n        '*out*',\n        '*print-dup*',\n        '*print-length*',\n        '*print-level*',\n        '*print-meta*',\n        '*print-namespace-maps*',\n        '*print-readably*',\n        '*read-eval*',\n        '*reader-resolver*',\n        '*source-path*',\n        '*suppress-read*',\n        '*unchecked-math*',\n        '*use-context-classloader*',\n        '*verbose-defrecords*',\n        '*warn-on-reflection*',\n        '+',\n        \"+'\",\n        '-',\n        \"-'\",\n        '->',\n        '->>',\n        '->ArrayChunk',\n        '->Eduction',\n        '->Vec',\n        '->VecNode',\n        '->VecSeq',\n        '-cache-protocol-fn',\n        '-reset-methods',\n        '..',\n        '/',\n        '<',\n        '<=',\n        '=',\n        '==',\n        '>',\n        '>=',\n        'EMPTY-NODE',\n        'Inst',\n        'StackTraceElement->vec',\n        'Throwable->map',\n        'accessor',\n        'aclone',\n        'add-classpath',\n        'add-watch',\n        'agent',\n        'agent-error',\n        'agent-errors',\n        'aget',\n        'alength',\n        'alias',\n        'all-ns',\n        'alter',\n        'alter-meta!',\n        'alter-var-root',\n        'amap',\n        'ancestors',\n        'and',\n        'any?',\n        'apply',\n        'areduce',\n        'array-map',\n        'as->',\n        'aset',\n        'aset-boolean',\n        'aset-byte',\n        'aset-char',\n        'aset-double',\n        'aset-float',\n        'aset-int',\n        'aset-long',\n        'aset-short',\n        'assert',\n        'assoc',\n        'assoc!',\n        'assoc-in',\n        'associative?',\n        'atom',\n        'await',\n        'await-for',\n        'await1',\n        'bases',\n        'bean',\n        'bigdec',\n        'bigint',\n        'biginteger',\n        'binding',\n        'bit-and',\n        'bit-and-not',\n        'bit-clear',\n        'bit-flip',\n        'bit-not',\n        'bit-or',\n        'bit-set',\n        'bit-shift-left',\n        'bit-shift-right',\n        'bit-test',\n        'bit-xor',\n        'boolean',\n        'boolean-array',\n        'boolean?',\n        'booleans',\n        'bound-fn',\n        'bound-fn*',\n        'bound?',\n        'bounded-count',\n        'butlast',\n        'byte',\n        'byte-array',\n        'bytes',\n        'bytes?',\n        'case',\n        'cast',\n        'cat',\n        'char',\n        'char-array',\n        'char-escape-string',\n        'char-name-string',\n        'char?',\n        'chars',\n        'chunk',\n        'chunk-append',\n        'chunk-buffer',\n        'chunk-cons',\n        'chunk-first',\n        'chunk-next',\n        'chunk-rest',\n        'chunked-seq?',\n        'class',\n        'class?',\n        'clear-agent-errors',\n        'clojure-version',\n        'coll?',\n        'comment',\n        'commute',\n        'comp',\n        'comparator',\n        'compare',\n        'compare-and-set!',\n        'compile',\n        'complement',\n        'completing',\n        'concat',\n        'cond',\n        'cond->',\n        'cond->>',\n        'condp',\n        'conj',\n        'conj!',\n        'cons',\n        'constantly',\n        'construct-proxy',\n        'contains?',\n        'count',\n        'counted?',\n        'create-ns',\n        'create-struct',\n        'cycle',\n        'dec',\n        \"dec'\",\n        'decimal?',\n        'declare',\n        'dedupe',\n        'default-data-readers',\n        'definline',\n        'definterface',\n        'defmacro',\n        'defmethod',\n        'defmulti',\n        'defn',\n        'defn-',\n        'defonce',\n        'defprotocol',\n        'defrecord',\n        'defstruct',\n        'deftype',\n        'delay',\n        'delay?',\n        'deliver',\n        'denominator',\n        'deref',\n        'derive',\n        'descendants',\n        'destructure',\n        'disj',\n        'disj!',\n        'dissoc',\n        'dissoc!',\n        'distinct',\n        'distinct?',\n        'doall',\n        'dorun',\n        'doseq',\n        'dosync',\n        'dotimes',\n        'doto',\n        'double',\n        'double-array',\n        'double?',\n        'doubles',\n        'drop',\n        'drop-last',\n        'drop-while',\n        'eduction',\n        'empty',\n        'empty?',\n        'ensure',\n        'ensure-reduced',\n        'enumeration-seq',\n        'error-handler',\n        'error-mode',\n        'eval',\n        'even?',\n        'every-pred',\n        'every?',\n        'ex-data',\n        'ex-info',\n        'extend',\n        'extend-protocol',\n        'extend-type',\n        'extenders',\n        'extends?',\n        'false?',\n        'ffirst',\n        'file-seq',\n        'filter',\n        'filterv',\n        'find',\n        'find-keyword',\n        'find-ns',\n        'find-protocol-impl',\n        'find-protocol-method',\n        'find-var',\n        'first',\n        'flatten',\n        'float',\n        'float-array',\n        'float?',\n        'floats',\n        'flush',\n        'fn',\n        'fn?',\n        'fnext',\n        'fnil',\n        'for',\n        'force',\n        'format',\n        'frequencies',\n        'future',\n        'future-call',\n        'future-cancel',\n        'future-cancelled?',\n        'future-done?',\n        'future?',\n        'gen-class',\n        'gen-interface',\n        'gensym',\n        'get',\n        'get-in',\n        'get-method',\n        'get-proxy-class',\n        'get-thread-bindings',\n        'get-validator',\n        'group-by',\n        'halt-when',\n        'hash',\n        'hash-combine',\n        'hash-map',\n        'hash-ordered-coll',\n        'hash-set',\n        'hash-unordered-coll',\n        'ident?',\n        'identical?',\n        'identity',\n        'if-let',\n        'if-not',\n        'if-some',\n        'ifn?',\n        'import',\n        'in-ns',\n        'inc',\n        \"inc'\",\n        'indexed?',\n        'init-proxy',\n        'inst-ms',\n        'inst-ms*',\n        'inst?',\n        'instance?',\n        'int',\n        'int-array',\n        'int?',\n        'integer?',\n        'interleave',\n        'intern',\n        'interpose',\n        'into',\n        'into-array',\n        'ints',\n        'io!',\n        'isa?',\n        'iterate',\n        'iterator-seq',\n        'juxt',\n        'keep',\n        'keep-indexed',\n        'key',\n        'keys',\n        'keyword',\n        'keyword?',\n        'last',\n        'lazy-cat',\n        'lazy-seq',\n        'let',\n        'letfn',\n        'line-seq',\n        'list',\n        'list*',\n        'list?',\n        'load',\n        'load-file',\n        'load-reader',\n        'load-string',\n        'loaded-libs',\n        'locking',\n        'long',\n        'long-array',\n        'longs',\n        'loop',\n        'macroexpand',\n        'macroexpand-1',\n        'make-array',\n        'make-hierarchy',\n        'map',\n        'map-entry?',\n        'map-indexed',\n        'map?',\n        'mapcat',\n        'mapv',\n        'max',\n        'max-key',\n        'memfn',\n        'memoize',\n        'merge',\n        'merge-with',\n        'meta',\n        'method-sig',\n        'methods',\n        'min',\n        'min-key',\n        'mix-collection-hash',\n        'mod',\n        'munge',\n        'name',\n        'namespace',\n        'namespace-munge',\n        'nat-int?',\n        'neg-int?',\n        'neg?',\n        'newline',\n        'next',\n        'nfirst',\n        'nil?',\n        'nnext',\n        'not',\n        'not-any?',\n        'not-empty',\n        'not-every?',\n        'not=',\n        'ns',\n        'ns-aliases',\n        'ns-imports',\n        'ns-interns',\n        'ns-map',\n        'ns-name',\n        'ns-publics',\n        'ns-refers',\n        'ns-resolve',\n        'ns-unalias',\n        'ns-unmap',\n        'nth',\n        'nthnext',\n        'nthrest',\n        'num',\n        'number?',\n        'numerator',\n        'object-array',\n        'odd?',\n        'or',\n        'parents',\n        'partial',\n        'partition',\n        'partition-all',\n        'partition-by',\n        'pcalls',\n        'peek',\n        'persistent!',\n        'pmap',\n        'pop',\n        'pop!',\n        'pop-thread-bindings',\n        'pos-int?',\n        'pos?',\n        'pr',\n        'pr-str',\n        'prefer-method',\n        'prefers',\n        'primitives-classnames',\n        'print',\n        'print-ctor',\n        'print-dup',\n        'print-method',\n        'print-simple',\n        'print-str',\n        'printf',\n        'println',\n        'println-str',\n        'prn',\n        'prn-str',\n        'promise',\n        'proxy',\n        'proxy-call-with-super',\n        'proxy-mappings',\n        'proxy-name',\n        'proxy-super',\n        'push-thread-bindings',\n        'pvalues',\n        'qualified-ident?',\n        'qualified-keyword?',\n        'qualified-symbol?',\n        'quot',\n        'rand',\n        'rand-int',\n        'rand-nth',\n        'random-sample',\n        'range',\n        'ratio?',\n        'rational?',\n        'rationalize',\n        're-find',\n        're-groups',\n        're-matcher',\n        're-matches',\n        're-pattern',\n        're-seq',\n        'read',\n        'read-line',\n        'read-string',\n        'reader-conditional',\n        'reader-conditional?',\n        'realized?',\n        'record?',\n        'reduce',\n        'reduce-kv',\n        'reduced',\n        'reduced?',\n        'reductions',\n        'ref',\n        'ref-history-count',\n        'ref-max-history',\n        'ref-min-history',\n        'ref-set',\n        'refer',\n        'refer-clojure',\n        'reify',\n        'release-pending-sends',\n        'rem',\n        'remove',\n        'remove-all-methods',\n        'remove-method',\n        'remove-ns',\n        'remove-watch',\n        'repeat',\n        'repeatedly',\n        'replace',\n        'replicate',\n        'require',\n        'reset!',\n        'reset-meta!',\n        'reset-vals!',\n        'resolve',\n        'rest',\n        'restart-agent',\n        'resultset-seq',\n        'reverse',\n        'reversible?',\n        'rseq',\n        'rsubseq',\n        'run!',\n        'satisfies?',\n        'second',\n        'select-keys',\n        'send',\n        'send-off',\n        'send-via',\n        'seq',\n        'seq?',\n        'seqable?',\n        'seque',\n        'sequence',\n        'sequential?',\n        'set',\n        'set-agent-send-executor!',\n        'set-agent-send-off-executor!',\n        'set-error-handler!',\n        'set-error-mode!',\n        'set-validator!',\n        'set?',\n        'short',\n        'short-array',\n        'shorts',\n        'shuffle',\n        'shutdown-agents',\n        'simple-ident?',\n        'simple-keyword?',\n        'simple-symbol?',\n        'slurp',\n        'some',\n        'some->',\n        'some->>',\n        'some-fn',\n        'some?',\n        'sort',\n        'sort-by',\n        'sorted-map',\n        'sorted-map-by',\n        'sorted-set',\n        'sorted-set-by',\n        'sorted?',\n        'special-symbol?',\n        'spit',\n        'split-at',\n        'split-with',\n        'str',\n        'string?',\n        'struct',\n        'struct-map',\n        'subs',\n        'subseq',\n        'subvec',\n        'supers',\n        'swap!',\n        'swap-vals!',\n        'symbol',\n        'symbol?',\n        'sync',\n        'tagged-literal',\n        'tagged-literal?',\n        'take',\n        'take-last',\n        'take-nth',\n        'take-while',\n        'test',\n        'the-ns',\n        'thread-bound?',\n        'time',\n        'to-array',\n        'to-array-2d',\n        'trampoline',\n        'transduce',\n        'transient',\n        'tree-seq',\n        'true?',\n        'type',\n        'unchecked-add',\n        'unchecked-add-int',\n        'unchecked-byte',\n        'unchecked-char',\n        'unchecked-dec',\n        'unchecked-dec-int',\n        'unchecked-divide-int',\n        'unchecked-double',\n        'unchecked-float',\n        'unchecked-inc',\n        'unchecked-inc-int',\n        'unchecked-int',\n        'unchecked-long',\n        'unchecked-multiply',\n        'unchecked-multiply-int',\n        'unchecked-negate',\n        'unchecked-negate-int',\n        'unchecked-remainder-int',\n        'unchecked-short',\n        'unchecked-subtract',\n        'unchecked-subtract-int',\n        'underive',\n        'unquote',\n        'unquote-splicing',\n        'unreduced',\n        'unsigned-bit-shift-right',\n        'update',\n        'update-in',\n        'update-proxy',\n        'uri?',\n        'use',\n        'uuid?',\n        'val',\n        'vals',\n        'var-get',\n        'var-set',\n        'var?',\n        'vary-meta',\n        'vec',\n        'vector',\n        'vector-of',\n        'vector?',\n        'volatile!',\n        'volatile?',\n        'vreset!',\n        'vswap!',\n        'when',\n        'when-first',\n        'when-let',\n        'when-not',\n        'when-some',\n        'while',\n        'with-bindings',\n        'with-bindings*',\n        'with-in-str',\n        'with-loading-context',\n        'with-local-vars',\n        'with-meta',\n        'with-open',\n        'with-out-str',\n        'with-precision',\n        'with-redefs',\n        'with-redefs-fn',\n        'xml-seq',\n        'zero?',\n        'zipmap'\n    ],\n    tokenizer: {\n        root: [\n            // whitespaces and comments\n            { include: '@whitespace' },\n            // numbers\n            [/@numbers/, 'number'],\n            // characters\n            [/@characters/, 'string'],\n            // strings\n            { include: '@string' },\n            // brackets\n            [/[()\\[\\]{}]/, '@brackets'],\n            // regular expressions\n            [/\\/#\"(?:\\.|(?:\")|[^\"\\n])*\"\\/g/, 'regexp'],\n            // reader macro characters\n            [/[#'@^`~]/, 'meta'],\n            // symbols\n            [\n                /@qualifiedSymbols/,\n                {\n                    cases: {\n                        '^:.+$': 'constant',\n                        '@specialForms': 'keyword',\n                        '@coreSymbols': 'keyword',\n                        '@constants': 'constant',\n                        '@default': 'identifier'\n                    }\n                }\n            ]\n        ],\n        whitespace: [\n            [/[\\s,]+/, 'white'],\n            [/;.*$/, 'comment'],\n            [/\\(comment\\b/, 'comment', '@comment']\n        ],\n        comment: [\n            [/\\(/, 'comment', '@push'],\n            [/\\)/, 'comment', '@pop'],\n            [/[^()]/, 'comment']\n        ],\n        string: [[/\"/, 'string', '@multiLineString']],\n        multiLineString: [\n            [/\"/, 'string', '@popall'],\n            [/@escapes/, 'string.escape'],\n            [/./, 'string']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/clojure/clojure.js?");

/***/ })

}]);