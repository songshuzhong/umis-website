(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js":
/*!***************************************************************************************!*\
  !*** ../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js ***!
  \***************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '#'\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' }\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: \"'\", close: \"'\" },\n        { open: '`', close: '`' }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.perl',\n    brackets: [\n        { token: 'delimiter.bracket', open: '{', close: '}' },\n        { token: 'delimiter.parenthesis', open: '(', close: ')' },\n        { token: 'delimiter.square', open: '[', close: ']' }\n    ],\n    // https://learn.perl.org/docs/keywords.html\n    // Perl syntax\n    keywords: [\n        '__DATA__',\n        'else',\n        'lock',\n        '__END__',\n        'elsif',\n        'lt',\n        '__FILE__',\n        'eq',\n        '__LINE__',\n        'exp',\n        'ne',\n        'sub',\n        '__PACKAGE__',\n        'for',\n        'no',\n        'and',\n        'foreach',\n        'or',\n        'unless',\n        'cmp',\n        'ge',\n        'package',\n        'until',\n        'continue',\n        'gt',\n        'while',\n        'CORE',\n        'if',\n        'xor',\n        'do',\n        'le',\n        '__DIE__',\n        '__WARN__'\n    ],\n    // Perl functions\n    builtinFunctions: [\n        '-A',\n        'END',\n        'length',\n        'setpgrp',\n        '-B',\n        'endgrent',\n        'link',\n        'setpriority',\n        '-b',\n        'endhostent',\n        'listen',\n        'setprotoent',\n        '-C',\n        'endnetent',\n        'local',\n        'setpwent',\n        '-c',\n        'endprotoent',\n        'localtime',\n        'setservent',\n        '-d',\n        'endpwent',\n        'log',\n        'setsockopt',\n        '-e',\n        'endservent',\n        'lstat',\n        'shift',\n        '-f',\n        'eof',\n        'map',\n        'shmctl',\n        '-g',\n        'eval',\n        'mkdir',\n        'shmget',\n        '-k',\n        'exec',\n        'msgctl',\n        'shmread',\n        '-l',\n        'exists',\n        'msgget',\n        'shmwrite',\n        '-M',\n        'exit',\n        'msgrcv',\n        'shutdown',\n        '-O',\n        'fcntl',\n        'msgsnd',\n        'sin',\n        '-o',\n        'fileno',\n        'my',\n        'sleep',\n        '-p',\n        'flock',\n        'next',\n        'socket',\n        '-r',\n        'fork',\n        'not',\n        'socketpair',\n        '-R',\n        'format',\n        'oct',\n        'sort',\n        '-S',\n        'formline',\n        'open',\n        'splice',\n        '-s',\n        'getc',\n        'opendir',\n        'split',\n        '-T',\n        'getgrent',\n        'ord',\n        'sprintf',\n        '-t',\n        'getgrgid',\n        'our',\n        'sqrt',\n        '-u',\n        'getgrnam',\n        'pack',\n        'srand',\n        '-w',\n        'gethostbyaddr',\n        'pipe',\n        'stat',\n        '-W',\n        'gethostbyname',\n        'pop',\n        'state',\n        '-X',\n        'gethostent',\n        'pos',\n        'study',\n        '-x',\n        'getlogin',\n        'print',\n        'substr',\n        '-z',\n        'getnetbyaddr',\n        'printf',\n        'symlink',\n        'abs',\n        'getnetbyname',\n        'prototype',\n        'syscall',\n        'accept',\n        'getnetent',\n        'push',\n        'sysopen',\n        'alarm',\n        'getpeername',\n        'quotemeta',\n        'sysread',\n        'atan2',\n        'getpgrp',\n        'rand',\n        'sysseek',\n        'AUTOLOAD',\n        'getppid',\n        'read',\n        'system',\n        'BEGIN',\n        'getpriority',\n        'readdir',\n        'syswrite',\n        'bind',\n        'getprotobyname',\n        'readline',\n        'tell',\n        'binmode',\n        'getprotobynumber',\n        'readlink',\n        'telldir',\n        'bless',\n        'getprotoent',\n        'readpipe',\n        'tie',\n        'break',\n        'getpwent',\n        'recv',\n        'tied',\n        'caller',\n        'getpwnam',\n        'redo',\n        'time',\n        'chdir',\n        'getpwuid',\n        'ref',\n        'times',\n        'CHECK',\n        'getservbyname',\n        'rename',\n        'truncate',\n        'chmod',\n        'getservbyport',\n        'require',\n        'uc',\n        'chomp',\n        'getservent',\n        'reset',\n        'ucfirst',\n        'chop',\n        'getsockname',\n        'return',\n        'umask',\n        'chown',\n        'getsockopt',\n        'reverse',\n        'undef',\n        'chr',\n        'glob',\n        'rewinddir',\n        'UNITCHECK',\n        'chroot',\n        'gmtime',\n        'rindex',\n        'unlink',\n        'close',\n        'goto',\n        'rmdir',\n        'unpack',\n        'closedir',\n        'grep',\n        'say',\n        'unshift',\n        'connect',\n        'hex',\n        'scalar',\n        'untie',\n        'cos',\n        'index',\n        'seek',\n        'use',\n        'crypt',\n        'INIT',\n        'seekdir',\n        'utime',\n        'dbmclose',\n        'int',\n        'select',\n        'values',\n        'dbmopen',\n        'ioctl',\n        'semctl',\n        'vec',\n        'defined',\n        'join',\n        'semget',\n        'wait',\n        'delete',\n        'keys',\n        'semop',\n        'waitpid',\n        'DESTROY',\n        'kill',\n        'send',\n        'wantarray',\n        'die',\n        'last',\n        'setgrent',\n        'warn',\n        'dump',\n        'lc',\n        'sethostent',\n        'write',\n        'each',\n        'lcfirst',\n        'setnetent'\n    ],\n    // File handlers\n    builtinFileHandlers: ['ARGV', 'STDERR', 'STDOUT', 'ARGVOUT', 'STDIN', 'ENV'],\n    // Perl variables\n    builtinVariables: [\n        '$!',\n        '$^RE_TRIE_MAXBUF',\n        '$LAST_REGEXP_CODE_RESULT',\n        '$\"',\n        '$^S',\n        '$LIST_SEPARATOR',\n        '$#',\n        '$^T',\n        '$MATCH',\n        '$$',\n        '$^TAINT',\n        '$MULTILINE_MATCHING',\n        '$%',\n        '$^UNICODE',\n        '$NR',\n        '$&',\n        '$^UTF8LOCALE',\n        '$OFMT',\n        \"$'\",\n        '$^V',\n        '$OFS',\n        '$(',\n        '$^W',\n        '$ORS',\n        '$)',\n        '$^WARNING_BITS',\n        '$OS_ERROR',\n        '$*',\n        '$^WIDE_SYSTEM_CALLS',\n        '$OSNAME',\n        '$+',\n        '$^X',\n        '$OUTPUT_AUTO_FLUSH',\n        '$,',\n        '$_',\n        '$OUTPUT_FIELD_SEPARATOR',\n        '$-',\n        '$`',\n        '$OUTPUT_RECORD_SEPARATOR',\n        '$.',\n        '$a',\n        '$PERL_VERSION',\n        '$/',\n        '$ACCUMULATOR',\n        '$PERLDB',\n        '$0',\n        '$ARG',\n        '$PID',\n        '$:',\n        '$ARGV',\n        '$POSTMATCH',\n        '$;',\n        '$b',\n        '$PREMATCH',\n        '$<',\n        '$BASETIME',\n        '$PROCESS_ID',\n        '$=',\n        '$CHILD_ERROR',\n        '$PROGRAM_NAME',\n        '$>',\n        '$COMPILING',\n        '$REAL_GROUP_ID',\n        '$?',\n        '$DEBUGGING',\n        '$REAL_USER_ID',\n        '$@',\n        '$EFFECTIVE_GROUP_ID',\n        '$RS',\n        '$[',\n        '$EFFECTIVE_USER_ID',\n        '$SUBSCRIPT_SEPARATOR',\n        '$\\\\',\n        '$EGID',\n        '$SUBSEP',\n        '$]',\n        '$ERRNO',\n        '$SYSTEM_FD_MAX',\n        '$^',\n        '$EUID',\n        '$UID',\n        '$^A',\n        '$EVAL_ERROR',\n        '$WARNING',\n        '$^C',\n        '$EXCEPTIONS_BEING_CAUGHT',\n        '$|',\n        '$^CHILD_ERROR_NATIVE',\n        '$EXECUTABLE_NAME',\n        '$~',\n        '$^D',\n        '$EXTENDED_OS_ERROR',\n        '%!',\n        '$^E',\n        '$FORMAT_FORMFEED',\n        '%^H',\n        '$^ENCODING',\n        '$FORMAT_LINE_BREAK_CHARACTERS',\n        '%ENV',\n        '$^F',\n        '$FORMAT_LINES_LEFT',\n        '%INC',\n        '$^H',\n        '$FORMAT_LINES_PER_PAGE',\n        '%OVERLOAD',\n        '$^I',\n        '$FORMAT_NAME',\n        '%SIG',\n        '$^L',\n        '$FORMAT_PAGE_NUMBER',\n        '@+',\n        '$^M',\n        '$FORMAT_TOP_NAME',\n        '@-',\n        '$^N',\n        '$GID',\n        '@_',\n        '$^O',\n        '$INPLACE_EDIT',\n        '@ARGV',\n        '$^OPEN',\n        '$INPUT_LINE_NUMBER',\n        '@INC',\n        '$^P',\n        '$INPUT_RECORD_SEPARATOR',\n        '@LAST_MATCH_START',\n        '$^R',\n        '$LAST_MATCH_END',\n        '$^RE_DEBUG_FLAGS',\n        '$LAST_PAREN_MATCH'\n    ],\n    // operators\n    symbols: /[:+\\-\\^*$&%@=<>!?|\\/~\\.]/,\n    quoteLikeOps: ['qr', 'm', 's', 'q', 'qq', 'qx', 'qw', 'tr', 'y'],\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            [\n                /[a-zA-Z\\-_][\\w\\-_]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@builtinFunctions': 'type.identifier',\n                        '@builtinFileHandlers': 'variable.predefined',\n                        '@quoteLikeOps': {\n                            token: '@rematch',\n                            next: 'quotedConstructs'\n                        },\n                        '@default': ''\n                    }\n                }\n            ],\n            // Perl variables\n            [\n                /[\\$@%][*@#?\\+\\-\\$!\\w\\\\\\^><~:;\\.]+/,\n                {\n                    cases: {\n                        '@builtinVariables': 'variable.predefined',\n                        '@default': 'variable'\n                    }\n                }\n            ],\n            { include: '@strings' },\n            { include: '@dblStrings' },\n            // Perl Doc\n            { include: '@perldoc' },\n            // Here Doc\n            { include: '@heredoc' },\n            [/[{}\\[\\]()]/, '@brackets'],\n            // RegExp\n            [/[\\/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\\\/|[^\\]\\/]))*[\\/]\\w*\\s*(?=[).,;]|$)/, 'regexp'],\n            [/@symbols/, 'operators'],\n            { include: '@numbers' },\n            [/[,;]/, 'delimiter']\n        ],\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/(^#!.*$)/, 'metatag'],\n            [/(^#.*$)/, 'comment']\n        ],\n        numbers: [\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, 'number.hex'],\n            [/\\d+/, 'number']\n        ],\n        // Single quote string\n        strings: [[/'/, 'string', '@stringBody']],\n        stringBody: [\n            [/'/, 'string', '@popall'],\n            [/\\\\'/, 'string.escape'],\n            [/./, 'string']\n        ],\n        // Double quote string\n        dblStrings: [[/\"/, 'string', '@dblStringBody']],\n        dblStringBody: [\n            [/\"/, 'string', '@popall'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            { include: '@variables' },\n            [/./, 'string']\n        ],\n        // Quoted constructs\n        // Percent strings in Ruby are similar to quote-like operators in Perl.\n        // This is adapted from pstrings in ../ruby/ruby.ts.\n        quotedConstructs: [\n            [/(q|qw|tr|y)\\s*\\(/, { token: 'string.delim', switchTo: '@qstring.(.)' }],\n            [/(q|qw|tr|y)\\s*\\[/, { token: 'string.delim', switchTo: '@qstring.[.]' }],\n            [/(q|qw|tr|y)\\s*\\{/, { token: 'string.delim', switchTo: '@qstring.{.}' }],\n            [/(q|qw|tr|y)\\s*</, { token: 'string.delim', switchTo: '@qstring.<.>' }],\n            [/(q|qw|tr|y)#/, { token: 'string.delim', switchTo: '@qstring.#.#' }],\n            [\n                /(q|qw|tr|y)\\s*([^A-Za-z0-9#\\s])/,\n                { token: 'string.delim', switchTo: '@qstring.$2.$2' }\n            ],\n            [/(q|qw|tr|y)\\s+(\\w)/, { token: 'string.delim', switchTo: '@qstring.$2.$2' }],\n            [/(qr|m|s)\\s*\\(/, { token: 'regexp.delim', switchTo: '@qregexp.(.)' }],\n            [/(qr|m|s)\\s*\\[/, { token: 'regexp.delim', switchTo: '@qregexp.[.]' }],\n            [/(qr|m|s)\\s*\\{/, { token: 'regexp.delim', switchTo: '@qregexp.{.}' }],\n            [/(qr|m|s)\\s*</, { token: 'regexp.delim', switchTo: '@qregexp.<.>' }],\n            [/(qr|m|s)#/, { token: 'regexp.delim', switchTo: '@qregexp.#.#' }],\n            [\n                /(qr|m|s)\\s*([^A-Za-z0-9_#\\s])/,\n                { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }\n            ],\n            [/(qr|m|s)\\s+(\\w)/, { token: 'regexp.delim', switchTo: '@qregexp.$2.$2' }],\n            [/(qq|qx)\\s*\\(/, { token: 'string.delim', switchTo: '@qqstring.(.)' }],\n            [/(qq|qx)\\s*\\[/, { token: 'string.delim', switchTo: '@qqstring.[.]' }],\n            [/(qq|qx)\\s*\\{/, { token: 'string.delim', switchTo: '@qqstring.{.}' }],\n            [/(qq|qx)\\s*</, { token: 'string.delim', switchTo: '@qqstring.<.>' }],\n            [/(qq|qx)#/, { token: 'string.delim', switchTo: '@qqstring.#.#' }],\n            [/(qq|qx)\\s*([^A-Za-z0-9#\\s])/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }],\n            [/(qq|qx)\\s+(\\w)/, { token: 'string.delim', switchTo: '@qqstring.$2.$2' }]\n        ],\n        // Non-expanded quoted string\n        // qstring<open>.<close>\n        //  open = open delimiter\n        //  close = close delimiter\n        qstring: [\n            [/\\\\./, 'string.escape'],\n            [\n                /./,\n                {\n                    cases: {\n                        '$#==$S3': { token: 'string.delim', next: '@pop' },\n                        '$#==$S2': { token: 'string.delim', next: '@push' },\n                        '@default': 'string'\n                    }\n                }\n            ]\n        ],\n        // Quoted regexp\n        // qregexp.<open>.<close>\n        //  open = open delimiter\n        //  close = close delimiter\n        qregexp: [\n            { include: '@variables' },\n            [/\\\\./, 'regexp.escape'],\n            [\n                /./,\n                {\n                    cases: {\n                        '$#==$S3': {\n                            token: 'regexp.delim',\n                            next: '@regexpModifiers'\n                        },\n                        '$#==$S2': { token: 'regexp.delim', next: '@push' },\n                        '@default': 'regexp'\n                    }\n                }\n            ]\n        ],\n        regexpModifiers: [[/[msixpodualngcer]+/, { token: 'regexp.modifier', next: '@popall' }]],\n        // Expanded quoted string\n        // qqstring.<open>.<close>\n        //  open = open delimiter\n        //  close = close delimiter\n        qqstring: [{ include: '@variables' }, { include: '@qstring' }],\n        heredoc: [\n            [\n                /<<\\s*['\"`]?([\\w\\-]+)['\"`]?/,\n                { token: 'string.heredoc.delimiter', next: '@heredocBody.$1' }\n            ]\n        ],\n        heredocBody: [\n            [\n                /^([\\w\\-]+)$/,\n                {\n                    cases: {\n                        '$1==$S2': [\n                            {\n                                token: 'string.heredoc.delimiter',\n                                next: '@popall'\n                            }\n                        ],\n                        '@default': 'string.heredoc'\n                    }\n                }\n            ],\n            [/./, 'string.heredoc']\n        ],\n        perldoc: [[/^=\\w/, 'comment.doc', '@perldocBody']],\n        perldocBody: [\n            [/^=cut\\b/, 'type.identifier', '@popall'],\n            [/./, 'comment.doc']\n        ],\n        variables: [\n            [/\\$\\w+/, 'variable'],\n            [/@\\w+/, 'variable'],\n            [/%\\w+/, 'variable'] // key/value\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///../umis-renderer/node_modules/monaco-editor/esm/vs/basic-languages/perl/perl.js?");

/***/ })

}]);