"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[22388],{

/***/ 44849:
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
    id: 'weblogic',
    title: 'WebLogic',
    description: 'WebLogicアプリケーションサーバー環境でJVMオプションの追加設定を完了してください。',
    tags: [
        'Java',
        'WebLogic'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "java/add-jvm-opt/weblogic",
    "id": "java/add-jvm-opt/weblogic",
    "title": "WebLogic",
    "description": "WebLogicアプリケーションサーバー環境でJVMオプションの追加設定を完了してください。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/add-jvm-opt/weblogic.mdx",
    "sourceDirName": "java/add-jvm-opt",
    "slug": "/java/add-jvm-opt/weblogic",
    "permalink": "/ja/java/add-jvm-opt/weblogic",
    "draft": false,
    "editUrl": "undefined/docs/java/add-jvm-opt/weblogic.mdx",
    "tags": [
        {
            "label": "Java",
            "permalink": "/ja/tags/java"
        },
        {
            "label": "WebLogic",
            "permalink": "/ja/tags/web-logic"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "weblogic",
        "title": "WebLogic",
        "description": "WebLogicアプリケーションサーバー環境でJVMオプションの追加設定を完了してください。",
        "tags": [
            "Java",
            "WebLogic"
        ]
    },
    "sidebar": "javaSidebar",
    "previous": {
        "title": "JEUS",
        "permalink": "/ja/java/add-jvm-opt/jeus"
    },
    "next": {
        "title": "WebSphere",
        "permalink": "/ja/java/add-jvm-opt/websphere"
    }
};
const assets = {};


const toc = [];
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `WebLogicを使用するアプリケーションサーバ環境でJVMオプションを追加する手順を参照ください。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `使用するオペレーティング システムを確認してから設定を完了してください。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "windows",
        label: "Windows",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-batch",
        "metastring": "title=\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.bat\"",
        "title": "\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.bat\""
    }, `rem ########## WHATAP START ############
set WHATAP_HOME=C:\\whatap
for /f %%f in ('dir /b /on "%WHATAP_HOME%\\whatap.agent-X.Y.Z.jar"') do set last=%%f
set WHATAP_JAR=%last%
set WHATAP_OPTS=-javaagent:%WHATAP_HOME%\\%WHATAP_JAR%

if "x%JAVA_OPTS%"=="x" goto setWhatap

set JAVA_OPTS_TMP=%JAVA_OPTS:"=%
if not "x%JAVA_OPTS_TMP:whatap=%"=="x%JAVA_OPTS_TMP%" goto endWhatap

:setWhatap
set JAVA_OPTS=%JAVA_OPTS% %WHATAP_OPTS%

:endWhatap
rem ########## WHATAP END ############
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "mac",
        label: "MAC",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.sh\"",
        "title": "\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.sh\""
    }, `########## WHATAP START ############
WHATAP_HOME=/whatap
WHATAP_JAR=\`ls \${WHATAP_HOME}/whatap.agent-*.jar | sort -V | tail -1\`
JAVA_OPTS="\${JAVA_OPTS} -javaagent:\${WHATAP_JAR} "
########## WHATAP END ############
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `Java 17 以降では、reflectionに関する次のオプションを追加します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `
--add-opens=java.base/java.lang=ALL-UNNAMED

`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `すべての設定を完了してからアプリケーションサーバーを再起動すると、エージェントが情報収集を開始します。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "/java/install-check"
    }, `次の文書`), `を確認してください。`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);