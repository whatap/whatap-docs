"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[9465],{

/***/ 19248:
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
    id: 'focus-setting',
    title: 'Configuration',
    description: 'Let\'s learn about the Focus setting method.',
    tags: [
        'Focus',
        'Configuration'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "focus/focus-setting",
    "id": "focus/focus-setting",
    "title": "Configuration",
    "description": "Let's learn about the Focus setting method.",
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/focus/focus-setting.mdx",
    "sourceDirName": "focus",
    "slug": "/focus/focus-setting",
    "permalink": "/en/focus/focus-setting",
    "draft": false,
    "editUrl": "undefined/docs/focus/focus-setting.mdx",
    "tags": [
        {
            "label": "Focus",
            "permalink": "/en/tags/focus"
        },
        {
            "label": "Configuration",
            "permalink": "/en/tags/configuration"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "focus-setting",
        "title": "Configuration",
        "description": "Let's learn about the Focus setting method.",
        "tags": [
            "Focus",
            "Configuration"
        ]
    },
    "sidebar": "pluginSidebar",
    "previous": {
        "title": "Installation",
        "permalink": "/en/focus/install-focus"
    },
    "next": {
        "title": "Usage examples",
        "permalink": "/en/focus/focus-usage"
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
        value: 'Sending alerts',
        id: 'sending-alerts',
        level: 2
    },
    {
        value: 'Collecting the SQL query result',
        id: 'collecting-the-sql-query-result',
        level: 2
    },
    {
        value: 'Collecting the keyword matching logs of the log file',
        id: 'collecting-the-keyword-matching-logs-of-the-log-file',
        level: 2
    },
    {
        value: 'WhaTap log analyzing service',
        id: 'whatap-log-analyzing-service',
        level: 2
    },
    {
        value: 'Collecting the OS resource usage',
        id: 'collecting-the-os-resource-usage',
        level: 2
    },
    {
        value: 'Collecting results of running the temporary programs and scripts',
        id: 'collecting-results-of-running-the-temporary-programs-and-scripts',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can upload any collected data from the WhaTap project. Focus can be used even if the default agent has not been installed for the project.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
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
        "id": "sending-alerts"
    }, `Sending alerts`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Custom alerts can be sent immediately. After sending an alert, the Focus is ended.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    }, `#Select a severity of the alert.
level={info|warn|fatal}
#Alert title
title=Desired alert title
#Alert body
message=Desired alert body
./focus -license $WHATAP_LICENSE \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -alert -level $level -title $title -message $message
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#Select a severity of the alert.
$level="{info|warn|fatal}"
#Alert title
$title="Desired alert title"
#Alert body
$message=Desired alert body
.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -alert -level $level -title $title -message $message
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "collecting-the-sql-query-result"
    }, `Collecting the SQL query result`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It collects the execution results of user-defined SQL queries in time series indefinitely.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    }, `#Metric category
category=my_category
#Database driver
driver={mysql|postgres}
#Database connection info
dburl="ID:password@tcp(IP:Port)/Database"
#Sql Query
sqlquery="select some, columns from sometable"
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -rdb $driver -rdb.connect $dburl \\
    -rdb.sql $sqlquery
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#Metric category
$CATEGORY="my_category"
#Database driver
$driver="{mysql|postgres}"
#Database connection info
$dburl="ID:password@tcp(IP:port)/Database"
#Sql Query
$sqlquery="select some, columns from sometable"

.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -rdb $driver -rdb.connect $dburl \`
    -rdb.sql $sqlquery
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "collecting-the-keyword-matching-logs-of-the-log-file"
    }, `Collecting the keyword matching logs of the log file`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If a keyword is included when a log occurs in the specified text log file, the log line is collected.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    }, `#Metric category
category=my_category
#Log file
LOG_FILE=Log file path
#Delimiter to use between keywords when entering multiple log keywords
LOG_KEYWORDS_SEPERATOR=,
#Enter log keywords by using the delimiter (,).
LOG_KEYWORDS=keyword1,keyword2
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -tail $LOG_FILE \\
    -tail.keys $LOG_KEYWORDS \\
    -tail.seperator $LOG_KEYWORDS_SEPERATOR
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#Metric category
$CATEGORY="my_category"
#Log file
LOG_FILE=Log file path
#Delimiter to use between keywords when entering multiple log keywords
LOG_KEYWORDS_SEPERATOR=,
#Enter log keywords by using the delimiter
LOG_KEYWORDS=keyword1,keyword2

.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -tail $LOG_FILE \`
    -tail.keys $LOG_KEYWORDS \`
    -tail.seperator $LOG_KEYWORDS_SEPERATOR
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "whatap-log-analyzing-service"
    }, `WhaTap log analyzing service`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `When a log occurs in the specified text log file, it is uploaded in real time to the WhaTap log analysis service.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    }, `#Category
category=my_category
#Can include the log file wildcard (*) and date pattern (http://strftime.org)
LOG_FILE=log file path
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -logsink $LOG_FILE
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows Powershell",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH'",
        "title": "'SH'"
    }, `#Category
$CATEGORY="my_category"
#Can include the log file wildcard (*) and date pattern (http://strftime.org)
$LOG_FILE=log file path
.\\focus.exe -license $WHATAP_LICENSE \`
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \`
    -category $CATEGORY \`
    -logsink $LOG_FILE
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "collecting-the-os-resource-usage"
    }, `Collecting the OS resource usage`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It collects the resource usage of the server on which Focus is running.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
category=my_category
#Whether or not to enable the disk monitoring
diskenabled=true|false
#Disk mount to monitor
diskmount=/mypartition
#Whether or not to enable the NIC monitoring
nicenabled=true|false
#NIC to monitor
nic=eth0

./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\
    -sys \\
    -sys.disk.enabled $diskenabled \\
    -sys.disk $diskmount \\
    -sys.net.enabled $nicenabled \\
    -sys.net $nic
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "collecting-results-of-running-the-temporary-programs-and-scripts"
    }, `Collecting results of running the temporary programs and scripts`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It runs programs and scripts and continuously collects results to stdout. WhaTap Focus collects the keys and values of the dictionary when any value is input to stdin in the json dictionary format. Because the pipe is to be used as an input method, it is required to disable buffering.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `For continuous collection instead of one-time collection, you can apply the following option. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `-onetime`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `To specify the collection time, you can enter it with the following option. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `-now {unix epoch time(second)}`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='Linux Shell'",
        "title": "'Linux",
        "Shell'": true
    }, `#Metric category
CATEGORY="my_category"


Program or script | \\
Reprocessing in the json format | \\
./focus -license $WHATAP_LICENSE \\
    -category $category \\
    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The following example executes the top command to continuously collect the CPU and memory usage of a specific process.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);