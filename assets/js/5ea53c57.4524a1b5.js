"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[86456],{

/***/ 59236:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95788);
/* harmony import */ var _theme_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27140);
/* harmony import */ var _theme_TabItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69104);
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
    id: 'focus-setting',
    title: '설정하기',
    description: 'Focus 설정 방법에 대해 알아봅니다.',
    tags: [
        'Focus',
        '설정하기'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "focus/focus-setting",
    "id": "focus/focus-setting",
    "title": "설정하기",
    "description": "Focus 설정 방법에 대해 알아봅니다.",
    "source": "@site/docs/focus/focus-setting.mdx",
    "sourceDirName": "focus",
    "slug": "/focus/focus-setting",
    "permalink": "/whatap-docs/focus/focus-setting",
    "draft": false,
    "editUrl": "undefined/docs/focus/focus-setting.mdx",
    "tags": [
        {
            "label": "Focus",
            "permalink": "/whatap-docs/tags/focus"
        },
        {
            "label": "설정하기",
            "permalink": "/whatap-docs/tags/설정하기"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "focus-setting",
        "title": "설정하기",
        "description": "Focus 설정 방법에 대해 알아봅니다.",
        "tags": [
            "Focus",
            "설정하기"
        ]
    },
    "sidebar": "pluginSidebar",
    "previous": {
        "title": "설치하기",
        "permalink": "/whatap-docs/focus/install-focus"
    },
    "next": {
        "title": "사용 예시",
        "permalink": "/whatap-docs/focus/focus-usage"
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
        value: '알림 보내기',
        id: '알림-보내기',
        level: 2
    },
    {
        value: 'SQL Query 결과 수집',
        id: 'sql-query-결과-수집',
        level: 2
    },
    {
        value: '로그 파일 키워드 매칭 로그 수집',
        id: '로그-파일-키워드-매칭-로그-수집',
        level: 2
    },
    {
        value: '와탭 로그 분석 서비스',
        id: '와탭-로그-분석-서비스',
        level: 2
    },
    {
        value: 'OS 자원 사용량 수집',
        id: 'os-자원-사용량-수집',
        level: 2
    },
    {
        value: '임의 프로그램 및 스크립트 실행 결과 수집',
        id: '임의-프로그램-및-스크립트-실행-결과-수집',
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 프로젝트에서 임의의 수집 데이터를 업로드할 수 있습니다. Focus는 해당 프로젝트의 기본 에이전트가 설치되지 않아도 사용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "프로젝트-액세스-키-및-수집-서버-ip-확인"
    }, `프로젝트 액세스 키 및 수집 서버 IP 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `선택한 프로젝트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `관리`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `에이전트 설치`)), ` 메뉴에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `프로젝트 코드`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `수집 서버 IP`), `와 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `프로젝트 액세스 키`), `를 확인합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx
export WHATAP_HOST=xxxx.xxxx.xxxx
export WHATAP_PCODE=xxx
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `$WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx
$WHATAP_HOST=xxxx.xxxx.xxxx
$WHATAP_PCODE=xxx
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "알림-보내기"
    }, `알림 보내기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 정의 알림을 즉시 보낼 수 있습니다. 알림을 보낸 후 Focus는 종료합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `#알림의 심각도를 선택합니다.
level={info|warn|fatal}
#알림의 제목
title=원하는 알림의 제목
#알림의 본문
message=원하는 알림의 본문
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -alert -level $level -title $title -message $message
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#알림의 심각도를 선택합니다.
$level="{info|warn|fatal}"
#알림의 제목
$title="원하는 알림의 제목"
#알림의 본문
$message="원하는 알림의 본문"
.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -alert -level $level -title $title -message $message
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "sql-query-결과-수집"
    }, `SQL Query 결과 수집`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 정의 SQL Query의 실행 결과를 시계열로 무기한 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `#매트릭 카테고리
category=my_category
#데이터 베이스 드라이버
driver={mysql|postgres}
#데이터베이스 접속 정보
dburl="아이디:패스워드@tcp(아이피:포트)/데이터베이스"
#Sql Query
sqlquery="select some, columns from sometable"
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -rdb $driver -rdb.connect $dburl \\
    -rdb.sql $sqlquery
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#매트릭 카테고리
$CATEGORY="my_category"
#데이터 베이스 드라이버
$driver="{mysql|postgres}"
#데이터베이스 접속 정보
$dburl="아이디:패스워드@tcp(아이피:포트)/데이터베이스"
#Sql Query
$sqlquery="select some, columns from sometable"

.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -rdb $driver -rdb.connect $dburl \`
    -rdb.sql $sqlquery
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "로그-파일-키워드-매칭-로그-수집"
    }, `로그 파일 키워드 매칭 로그 수집`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `지정한 텍스트 로그 파일에서 로그 발생 시 키워드를 포함하면 해당 로그 라인을 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `#매트릭 카테고리
category=my_category
#로그 파일
LOG_FILE=로그 파일 경로
#2개 이상의 로그 키워드를 입력할때 키워드 사이에 사용할 구분자
LOG_KEYWORDS_SEPERATOR=,
#로그 키워드를 ,로 연결하여 입력
LOG_KEYWORDS=keyword1,keyword2
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -tail $LOG_FILE \\
    -tail.keys $LOG_KEYWORDS \\
    -tail.seperator $LOG_KEYWORDS_SEPERATOR
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#매트릭 카테고리
$CATEGORY="my_category"
#로그 파일
LOG_FILE=로그 파일 경로
#2개 이상의 로그 키워드를 입력할때 키워드 사이에 사용할 구분자
LOG_KEYWORDS_SEPERATOR=,
#로그 키워드를 구분자로 연결하여 입력
LOG_KEYWORDS=keyword1,keyword2

.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -tail $LOG_FILE \`
    -tail.keys $LOG_KEYWORDS \`
    -tail.seperator $LOG_KEYWORDS_SEPERATOR
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "와탭-로그-분석-서비스"
    }, `와탭 로그 분석 서비스`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `지정한 텍스트 로그 파일에서 로그 발생 시 와탭 로그 분석 서비스로 실시간 업로드합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        groupId: "operating-systems",
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "lx",
        label: "Linux Shell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `#카테고리
category=my_category
#로그 파일 wildcard(*), 날짜패턴(http://strftime.org) 포함 가능
LOG_FILE=로그 파일 경로
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -logsink $LOG_FILE
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#카테고리
$CATEGORY="my_category"
#로그 파일 wildcard(*), 날짜패턴(http://strftime.org) 포함 가능
$LOG_FILE=로그 파일 경로
.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -logsink $LOG_FILE
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "os-자원-사용량-수집"
    }, `OS 자원 사용량 수집`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Focus가 작동 중인 서버의 자원 사용량을 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
category=my_category
#디스크 모니터링 활성화 여부
diskenabled=true|false
#모니터링할 디스크 마운트
diskmount=/mypartition
#NIC 모니터링 활성화 여부
nicenabled=true|false
#모니터링할 NIC
nic=eth0

./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -sys \\
    -sys.disk.enabled $diskenabled \\
    -sys.disk $diskmount \\
    -sys.net.enabled $nicenabled \\
    -sys.net $nic
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "임의-프로그램-및-스크립트-실행-결과-수집"
    }, `임의 프로그램 및 스크립트 실행 결과 수집`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `임의의 프로그램 및 스크립트를 실행하고 stdout으로 출력되는 결과를 지속적으로 수집합니다. 와탭 Focus는 json dictionary 형식으로 stdin으로 입력되면 해당 dictionary의 key, value를 수집합니다. 입력 수단으로 파이프를 사용하게 되므로 버퍼링을 사용하지 않도록 설정하는 것이 필요합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `지속적으로 수집하는 것이 아니라 일회성으로 수집하기 원하면 다음 옵션을 적용할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "li"
    }, `-onetime`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `수집 시간을 지정하고 싶으면 다음 옵션으로 지정할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "li"
    }, `-now {unix epoch time(second)}`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#매트릭 카테고리
CATEGORY="my_category"


프로그램 혹은 스크립트 | \\
json dictionary 형태로 재가공 | \\
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음 예시는 top 명령을 실행하여 특정 프로세스의 CPU, memory 사용량을 계속하여 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
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
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);