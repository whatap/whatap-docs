"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[43461],{

/***/ 13609:
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
    title: '사용 예시',
    description: '와탭 Focus의 사용 예시를 안내합니다.',
    tags: [
        'Focus',
        '사용 예시'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "focus/focus-usage",
    "id": "focus/focus-usage",
    "title": "사용 예시",
    "description": "와탭 Focus의 사용 예시를 안내합니다.",
    "source": "@site/docs/focus/focus-usage.mdx",
    "sourceDirName": "focus",
    "slug": "/focus/focus-usage",
    "permalink": "/whatap-docs/focus/focus-usage",
    "draft": false,
    "editUrl": "undefined/docs/focus/focus-usage.mdx",
    "tags": [
        {
            "label": "Focus",
            "permalink": "/whatap-docs/tags/focus"
        },
        {
            "label": "사용 예시",
            "permalink": "/whatap-docs/tags/사용-예시"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "focus-usage",
        "title": "사용 예시",
        "description": "와탭 Focus의 사용 예시를 안내합니다.",
        "tags": [
            "Focus",
            "사용 예시"
        ]
    },
    "sidebar": "pluginSidebar",
    "previous": {
        "title": "설정하기",
        "permalink": "/whatap-docs/focus/focus-setting"
    },
    "next": {
        "title": "Telegraf란?",
        "permalink": "/whatap-docs/telegraf/introduction"
    }
};
const assets = {};


const toc = [
    {
        value: '프로젝트 액세스 키 및 수집 서버 IP 확인',
        id: '프로젝트-액세스-키-및-수집-서버-ip-확인',
        level: 2
    },
    {
        value: 'TOP 명령어 pid 별 CPU, Memory 수집',
        id: 'top-명령어-pid-별-cpu-memory-수집',
        level: 2
    },
    {
        value: 'NETSTAT 활용',
        id: 'netstat-활용',
        level: 2
    },
    {
        value: 'VMSTAT 활용',
        id: 'vmstat-활용',
        level: 2
    },
    {
        value: 'DU 활용',
        id: 'du-활용',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Focus를 활용해 자주 사용하는 명령 및 기타 활용 사례를 안내합니다. 이를 통해 개발 및 운영 시 확인할 수 있는 데이터를 시계열로 확인할 수 있도록 하여 개발 운영에 도움이 되었으면 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "프로젝트-액세스-키-및-수집-서버-ip-확인"
    }, `프로젝트 액세스 키 및 수집 서버 IP 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `선택한 프로젝트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `관리`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에이전트 설치`)), ` 메뉴에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `프로젝트 코드`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `수집 서버 IP`), `와 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `프로젝트 액세스 키`), `를 확인합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
        "id": "top-명령어-pid-별-cpu-memory-수집"
    }, `TOP 명령어 pid 별 CPU, Memory 수집`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `다음 예시는 top 명령을 실행하여 특정 프로세스의 CPU, memory 사용량을 계속하여 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
CATEGORY="my_category"

export PID=수집하기 원하는 프로세스의 PID
top -b -p $PID | awk '/'$PID'/{ printf "{\\"pid\\": %s, \\"cpuPercent\\": %s, \\"memoryPercent\\": %s, \\"cmd\\": \\"%s\\"}\\n",$1, $9, $10, $12}; system("")' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "netstat-활용"
    }, `NETSTAT 활용`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `다음 예시는 netstat 명령을 실행하여 하여 TCP Connection 상태 별 개수를 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
CATEGORY="my_category"

netstat -nat| tail -n+3 |  awk '{print $6}' | sort | uniq -c | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "vmstat-활용"
    }, `VMSTAT 활용`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `다음 예시는 vmstat 명령을 실행하여 항목별 지수를 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
CATEGORY="my_category"

vmstat -n 5 | awk ' NR>2 {printf "{ \\"r\\":%s,\\"b\\":%s, \\"swpd\\" :%s, \\"free\\" :%s, \\"buff\\" :%s, \\"cache\\" :%s, \\"si\\" :%s, \\"so\\":%s, \\"bi\\" :%s, \\"bo\\" :%s,  \\"in\\" :%s,  \\"cs\\":%s, \\"us\\":%s, \\"sy\\":%s, \\"id\\":%s, \\"wa\\":%s, \\"st\\" :%s }\\n", $1,$2, $3,$4, $5,$6, $7,$8, $9,$10, $11,$12, $13,$14, $15,$16,$17}\\n' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "du-활용"
    }, `DU 활용`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `다음 예시는 du 명령을 실행하여 하여 임의의 디렉터리 용량을 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
CATEGORY="my_category"
TARGET=용량수집을 원하는 디렉터리

du -sb $TARGET --max-depth=0 | awk 'BEGIN { printf "{" } {if (NR!=1) {printf ", "}}{printf "\\"%s\\":%s",$2,$1} END { print "}" }' | \\
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -category $CATEGORY -onetime
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);