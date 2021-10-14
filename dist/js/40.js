(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js":
/*!**************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js ***!
  \**************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\nvar conf = {\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/']\n    },\n    brackets: [\n        ['[', ']'],\n        ['(', ')'],\n        ['{', '}']\n    ],\n    autoClosingPairs: [\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n        { open: \"'\", close: \"'\", notIn: ['string', 'comment'] },\n        { open: '[', close: ']', notIn: ['string', 'comment'] },\n        { open: '(', close: ')', notIn: ['string', 'comment'] },\n        { open: '{', close: '}', notIn: ['string', 'comment'] }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.msdax',\n    ignoreCase: true,\n    brackets: [\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '{', close: '}', token: 'delimiter.brackets' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    keywords: [\n        // Query keywords\n        'VAR',\n        'RETURN',\n        'NOT',\n        'EVALUATE',\n        'DATATABLE',\n        'ORDER',\n        'BY',\n        'START',\n        'AT',\n        'DEFINE',\n        'MEASURE',\n        'ASC',\n        'DESC',\n        'IN',\n        // Datatable types\n        'BOOLEAN',\n        'DOUBLE',\n        'INTEGER',\n        'DATETIME',\n        'CURRENCY',\n        'STRING'\n    ],\n    functions: [\n        // Relational\n        'CLOSINGBALANCEMONTH',\n        'CLOSINGBALANCEQUARTER',\n        'CLOSINGBALANCEYEAR',\n        'DATEADD',\n        'DATESBETWEEN',\n        'DATESINPERIOD',\n        'DATESMTD',\n        'DATESQTD',\n        'DATESYTD',\n        'ENDOFMONTH',\n        'ENDOFQUARTER',\n        'ENDOFYEAR',\n        'FIRSTDATE',\n        'FIRSTNONBLANK',\n        'LASTDATE',\n        'LASTNONBLANK',\n        'NEXTDAY',\n        'NEXTMONTH',\n        'NEXTQUARTER',\n        'NEXTYEAR',\n        'OPENINGBALANCEMONTH',\n        'OPENINGBALANCEQUARTER',\n        'OPENINGBALANCEYEAR',\n        'PARALLELPERIOD',\n        'PREVIOUSDAY',\n        'PREVIOUSMONTH',\n        'PREVIOUSQUARTER',\n        'PREVIOUSYEAR',\n        'SAMEPERIODLASTYEAR',\n        'STARTOFMONTH',\n        'STARTOFQUARTER',\n        'STARTOFYEAR',\n        'TOTALMTD',\n        'TOTALQTD',\n        'TOTALYTD',\n        'ADDCOLUMNS',\n        'ADDMISSINGITEMS',\n        'ALL',\n        'ALLEXCEPT',\n        'ALLNOBLANKROW',\n        'ALLSELECTED',\n        'CALCULATE',\n        'CALCULATETABLE',\n        'CALENDAR',\n        'CALENDARAUTO',\n        'CROSSFILTER',\n        'CROSSJOIN',\n        'CURRENTGROUP',\n        'DATATABLE',\n        'DETAILROWS',\n        'DISTINCT',\n        'EARLIER',\n        'EARLIEST',\n        'EXCEPT',\n        'FILTER',\n        'FILTERS',\n        'GENERATE',\n        'GENERATEALL',\n        'GROUPBY',\n        'IGNORE',\n        'INTERSECT',\n        'ISONORAFTER',\n        'KEEPFILTERS',\n        'LOOKUPVALUE',\n        'NATURALINNERJOIN',\n        'NATURALLEFTOUTERJOIN',\n        'RELATED',\n        'RELATEDTABLE',\n        'ROLLUP',\n        'ROLLUPADDISSUBTOTAL',\n        'ROLLUPGROUP',\n        'ROLLUPISSUBTOTAL',\n        'ROW',\n        'SAMPLE',\n        'SELECTCOLUMNS',\n        'SUBSTITUTEWITHINDEX',\n        'SUMMARIZE',\n        'SUMMARIZECOLUMNS',\n        'TOPN',\n        'TREATAS',\n        'UNION',\n        'USERELATIONSHIP',\n        'VALUES',\n        'SUM',\n        'SUMX',\n        'PATH',\n        'PATHCONTAINS',\n        'PATHITEM',\n        'PATHITEMREVERSE',\n        'PATHLENGTH',\n        'AVERAGE',\n        'AVERAGEA',\n        'AVERAGEX',\n        'COUNT',\n        'COUNTA',\n        'COUNTAX',\n        'COUNTBLANK',\n        'COUNTROWS',\n        'COUNTX',\n        'DISTINCTCOUNT',\n        'DIVIDE',\n        'GEOMEAN',\n        'GEOMEANX',\n        'MAX',\n        'MAXA',\n        'MAXX',\n        'MEDIAN',\n        'MEDIANX',\n        'MIN',\n        'MINA',\n        'MINX',\n        'PERCENTILE.EXC',\n        'PERCENTILE.INC',\n        'PERCENTILEX.EXC',\n        'PERCENTILEX.INC',\n        'PRODUCT',\n        'PRODUCTX',\n        'RANK.EQ',\n        'RANKX',\n        'STDEV.P',\n        'STDEV.S',\n        'STDEVX.P',\n        'STDEVX.S',\n        'VAR.P',\n        'VAR.S',\n        'VARX.P',\n        'VARX.S',\n        'XIRR',\n        'XNPV',\n        // Scalar\n        'DATE',\n        'DATEDIFF',\n        'DATEVALUE',\n        'DAY',\n        'EDATE',\n        'EOMONTH',\n        'HOUR',\n        'MINUTE',\n        'MONTH',\n        'NOW',\n        'SECOND',\n        'TIME',\n        'TIMEVALUE',\n        'TODAY',\n        'WEEKDAY',\n        'WEEKNUM',\n        'YEAR',\n        'YEARFRAC',\n        'CONTAINS',\n        'CONTAINSROW',\n        'CUSTOMDATA',\n        'ERROR',\n        'HASONEFILTER',\n        'HASONEVALUE',\n        'ISBLANK',\n        'ISCROSSFILTERED',\n        'ISEMPTY',\n        'ISERROR',\n        'ISEVEN',\n        'ISFILTERED',\n        'ISLOGICAL',\n        'ISNONTEXT',\n        'ISNUMBER',\n        'ISODD',\n        'ISSUBTOTAL',\n        'ISTEXT',\n        'USERNAME',\n        'USERPRINCIPALNAME',\n        'AND',\n        'FALSE',\n        'IF',\n        'IFERROR',\n        'NOT',\n        'OR',\n        'SWITCH',\n        'TRUE',\n        'ABS',\n        'ACOS',\n        'ACOSH',\n        'ACOT',\n        'ACOTH',\n        'ASIN',\n        'ASINH',\n        'ATAN',\n        'ATANH',\n        'BETA.DIST',\n        'BETA.INV',\n        'CEILING',\n        'CHISQ.DIST',\n        'CHISQ.DIST.RT',\n        'CHISQ.INV',\n        'CHISQ.INV.RT',\n        'COMBIN',\n        'COMBINA',\n        'CONFIDENCE.NORM',\n        'CONFIDENCE.T',\n        'COS',\n        'COSH',\n        'COT',\n        'COTH',\n        'CURRENCY',\n        'DEGREES',\n        'EVEN',\n        'EXP',\n        'EXPON.DIST',\n        'FACT',\n        'FLOOR',\n        'GCD',\n        'INT',\n        'ISO.CEILING',\n        'LCM',\n        'LN',\n        'LOG',\n        'LOG10',\n        'MOD',\n        'MROUND',\n        'ODD',\n        'PERMUT',\n        'PI',\n        'POISSON.DIST',\n        'POWER',\n        'QUOTIENT',\n        'RADIANS',\n        'RAND',\n        'RANDBETWEEN',\n        'ROUND',\n        'ROUNDDOWN',\n        'ROUNDUP',\n        'SIGN',\n        'SIN',\n        'SINH',\n        'SQRT',\n        'SQRTPI',\n        'TAN',\n        'TANH',\n        'TRUNC',\n        'BLANK',\n        'CONCATENATE',\n        'CONCATENATEX',\n        'EXACT',\n        'FIND',\n        'FIXED',\n        'FORMAT',\n        'LEFT',\n        'LEN',\n        'LOWER',\n        'MID',\n        'REPLACE',\n        'REPT',\n        'RIGHT',\n        'SEARCH',\n        'SUBSTITUTE',\n        'TRIM',\n        'UNICHAR',\n        'UNICODE',\n        'UPPER',\n        'VALUE'\n    ],\n    tokenizer: {\n        root: [\n            { include: '@comments' },\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            { include: '@complexIdentifiers' },\n            [/[;,.]/, 'delimiter'],\n            [/[({})]/, '@brackets'],\n            [\n                /[a-z_][a-zA-Z0-9_]*/,\n                {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@functions': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }\n            ],\n            [/[<>=!%&+\\-*/|~^]/, 'operator']\n        ],\n        whitespace: [[/\\s+/, 'white']],\n        comments: [\n            [/\\/\\/+.*/, 'comment'],\n            [/\\/\\*/, { token: 'comment.quote', next: '@comment' }]\n        ],\n        comment: [\n            [/[^*/]+/, 'comment'],\n            [/\\*\\//, { token: 'comment.quote', next: '@pop' }],\n            [/./, 'comment']\n        ],\n        numbers: [\n            [/0[xX][0-9a-fA-F]*/, 'number'],\n            [/[$][+-]*\\d*(\\.\\d*)?/, 'number'],\n            [/((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][\\-+]?\\d+)?/, 'number']\n        ],\n        strings: [\n            [/N\"/, { token: 'string', next: '@string' }],\n            [/\"/, { token: 'string', next: '@string' }]\n        ],\n        string: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string'],\n            [/\"/, { token: 'string', next: '@pop' }]\n        ],\n        complexIdentifiers: [\n            [/\\[/, { token: 'identifier.quote', next: '@bracketedIdentifier' }],\n            [/'/, { token: 'identifier.quote', next: '@quotedIdentifier' }]\n        ],\n        bracketedIdentifier: [\n            [/[^\\]]+/, 'identifier'],\n            [/]]/, 'identifier'],\n            [/]/, { token: 'identifier.quote', next: '@pop' }]\n        ],\n        quotedIdentifier: [\n            [/[^']+/, 'identifier'],\n            [/''/, 'identifier'],\n            [/'/, { token: 'identifier.quote', next: '@pop' }]\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/msdax/msdax.js?");

/***/ })

}]);