"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[90565],{

/***/ 88834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93070);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50551);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */ function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


const frontMatter = {
    id: 'focus-usage',
    title: 'Usage examples',
    description: 'It guides you to the usage examples of WhaTap Focus.',
    tags: [
        'Focus',
        'Usage examples'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "focus/focus-usage",
    "id": "focus/focus-usage",
    "title": "Usage examples",
    "description": "It guides you to the usage examples of WhaTap Focus.",
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/focus/focus-usage.mdx",
    "sourceDirName": "focus",
    "slug": "/focus/focus-usage",
    "permalink": "/en/focus/focus-usage",
    "draft": false,
    "editUrl": "undefined/docs/focus/focus-usage.mdx",
    "tags": [
        {
            "label": "Focus",
            "permalink": "/en/tags/focus"
        },
        {
            "label": "Usage examples",
            "permalink": "/en/tags/usage-examples"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "focus-usage",
        "title": "Usage examples",
        "description": "It guides you to the usage examples of WhaTap Focus.",
        "tags": [
            "Focus",
            "Usage examples"
        ]
    },
    "sidebar": "pluginSidebar",
    "previous": {
        "title": "Configuration",
        "permalink": "/en/focus/focus-setting"
    },
    "next": {
        "title": "What is Telegraf?",
        "permalink": "/en/telegraf/introduction"
    }
};
const assets = {};


const toc = [
    {
        value: 'Checking the project access key and collection server IP',
        id: 'checking-the-project-access-key-and-collection-server-ip',
        level: 2
    },
    {
        value: 'Collecting the CPU and memory for each Top command PID',
        id: 'collecting-the-cpu-and-memory-for-each-top-command-pid',
        level: 2
    },
    {
        value: 'Using NETSTAT',
        id: 'using-netstat',
        level: 2
    },
    {
        value: 'Using VMSTAT',
        id: 'using-vmstat',
        level: 2
    },
    {
        value: 'Using DU',
        id: 'using-du',
        level: 2
    }
];
const layoutProps = {
    toc
};
const MDXLayout = "wrapper";
function MDXContent(_param) {
    var { components } = _param, props = _object_without_properties(_param, [
        "components"
    ]);
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Use Focus to guide you to frequently used commands and other use cases. This will be helpful to development and operation by allowing you to check the data in time series.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "checking-the-project-access-key-and-collection-server-ip"
    }, `Checking the project access key and collection server IP`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Management`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Agent Installation`)), ` for the selected project, check the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `project code`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `collection server IP`), `, and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `project access key`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx
export WHATAP_HOST=xxxx.xxxx.xxxx
export WHATAP_PCODE=xxx
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `$WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx
$WHATAP_HOST=xxxx.xxxx.xxxx
$WHATAP_PCODE=xxx
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "collecting-the-cpu-and-memory-for-each-top-command-pid"
    }, `Collecting the CPU and memory for each Top command PID`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following example executes the top command to continuously collect the CPU and memory usage of a specific process.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
CATEGORY="my_category"

export PID=PID of the process to collect
top -b -p $PID | awk '/'$PID'/{ printf "{\\"pid\\": %s, \\"cpuPercent\\": %s, \\"memoryPercent\\": %s, \\"cmd\\": \\"%s\\"}\\n",$1, $9, $10, $12}; system("")' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "using-netstat"
    }, `Using NETSTAT`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following example executes the netstat command to collect the number of TCP connections by status.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
CATEGORY="my_category"

netstat -nat| tail -n+3 |  awk '{print $6}' | sort | uniq -c | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "using-vmstat"
    }, `Using VMSTAT`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following example executes the vmstat command to collect itemized metrics.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
CATEGORY="my_category"

vmstat -n 5 | awk ' NR>2 {printf "{ \\"r\\":%s,\\"b\\":%s, \\"swpd\\" :%s, \\"free\\" :%s, \\"buff\\" :%s, \\"cache\\" :%s, \\"si\\" :%s, \\"so\\":%s, \\"bi\\" :%s, \\"bo\\" :%s,  \\"in\\" :%s,  \\"cs\\":%s, \\"us\\":%s, \\"sy\\":%s, \\"id\\":%s, \\"wa\\":%s, \\"st\\" :%s }\\n", $1,$2, $3,$4, $5,$6, $7,$8, $9,$10, $11,$12, $13,$14, $15,$16,$17}\\n' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "using-du"
    }, `Using DU`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following example executes the du command to collect the capacity of a directory.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
CATEGORY="my_category"
TARGET=Directory to collect capacity in

du -sb $TARGET --max-depth=0 | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);