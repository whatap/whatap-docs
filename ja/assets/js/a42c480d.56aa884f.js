"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[16629],{

/***/ 79880:
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
    title: '使用例',
    description: 'WhaTap Focusの使用方法の例について案内します。',
    tags: [
        'Focus',
        '使用例'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "focus/focus-usage",
    "id": "focus/focus-usage",
    "title": "使用例",
    "description": "WhaTap Focusの使用方法の例について案内します。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/focus/focus-usage.mdx",
    "sourceDirName": "focus",
    "slug": "/focus/focus-usage",
    "permalink": "/ja/focus/focus-usage",
    "draft": false,
    "editUrl": "undefined/docs/focus/focus-usage.mdx",
    "tags": [
        {
            "label": "Focus",
            "permalink": "/ja/tags/focus"
        },
        {
            "label": "使用例",
            "permalink": "/ja/tags/使用例"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "focus-usage",
        "title": "使用例",
        "description": "WhaTap Focusの使用方法の例について案内します。",
        "tags": [
            "Focus",
            "使用例"
        ]
    },
    "sidebar": "pluginSidebar",
    "previous": {
        "title": "設定",
        "permalink": "/ja/focus/focus-setting"
    },
    "next": {
        "title": "Telegrafとは",
        "permalink": "/ja/telegraf/introduction"
    }
};
const assets = {};


const toc = [
    {
        value: 'プロジェクトアクセスキーと収集サーバーのIP確認',
        id: 'プロジェクトアクセスキーと収集サーバーのip確認',
        level: 2
    },
    {
        value: 'TOPコマンドのpid別CPU、Memory収集',
        id: 'topコマンドのpid別cpumemory収集',
        level: 2
    },
    {
        value: 'NETSTAT活用',
        id: 'netstat活用',
        level: 2
    },
    {
        value: 'VMSTAT活用',
        id: 'vmstat活用',
        level: 2
    },
    {
        value: 'DU活用',
        id: 'du活用',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Focusを使用して、繫栄に使用されるコマンドやその他の活用例について案内します。これにより、開発や運用時にデータを時系列で確認できるようになり、開発や運用に役立ちます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "プロジェクトアクセスキーと収集サーバーのip確認"
    }, `プロジェクトアクセスキーと収集サーバーのIP確認`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `選択したプロジェクトの`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `管理`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `エージェントインストール`)), ` メニューから`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `プロジェクトコード`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `収集サーバーIP`), `と`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `プロジェクトアクセスキー`), `を確認します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
        "id": "topコマンドのpid別cpumemory収集"
    }, `TOPコマンドのpid別CPU、Memory収集`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `次の例は、topコマンドを実行して、特定のプロセスのCPUとメモリ使用量を継続的に収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#メトリクスカテゴリー
CATEGORY="my_category"

export PID=収集するプロセスのPID
top -b -p $PID | awk '/'$PID'/{ printf "{\\"pid\\": %s, \\"cpuPercent\\": %s, \\"memoryPercent\\": %s, \\"cmd\\": \\"%s\\"}\\n",$1, $9, $10, $12}; system("")' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "netstat活用"
    }, `NETSTAT活用`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `次の例は、netstatコマンドを実行して、TCP Connectionステータス別の番号を収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#メトリクスカテゴリ
CATEGORY="my_category"

netstat -nat| tail -n+3 |  awk '{print $6}' | sort | uniq -c | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "vmstat活用"
    }, `VMSTAT活用`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `次の例は、vmstatコマンドを実行して、項目された指数を収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#メトリクスカテゴリ
CATEGORY="my_category"

vmstat -n 5 | awk ' NR>2 {printf "{ \\"r\\":%s,\\"b\\":%s, \\"swpd\\" :%s, \\"free\\" :%s, \\"buff\\" :%s, \\"cache\\" :%s, \\"si\\" :%s, \\"so\\":%s, \\"bi\\" :%s, \\"bo\\" :%s,  \\"in\\" :%s,  \\"cs\\":%s, \\"us\\":%s, \\"sy\\":%s, \\"id\\":%s, \\"wa\\":%s, \\"st\\" :%s }\\n", $1,$2, $3,$4, $5,$6, $7,$8, $9,$10, $11,$12, $13,$14, $15,$16,$17}\\n' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "du活用"
    }, `DU活用`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `次の例は、duコマンドを実行して、任意のディレクトリ容量を収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#メトリクスカテゴリ
CATEGORY="my_category"
TARGET=容量を収集したいディレクトリ

du -sb $TARGET --max-depth=0 | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);