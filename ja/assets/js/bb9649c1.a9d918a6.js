"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[6861],{

/***/ 508:
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
    id: 'install-check',
    title: 'インストールチェックリスト',
    description: 'サーバーモニタリングのインストールをすべて完了しました。 インストール後に確認事項をチェックしてください。',
    tags: [
        'Server',
        'エージェント'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/install-check",
    "id": "server/install-check",
    "title": "インストールチェックリスト",
    "description": "サーバーモニタリングのインストールをすべて完了しました。 インストール後に確認事項をチェックしてください。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/server/install-check.mdx",
    "sourceDirName": "server",
    "slug": "/server/install-check",
    "permalink": "/ja/server/install-check",
    "draft": false,
    "editUrl": "undefined/docs/server/install-check.mdx",
    "tags": [
        {
            "label": "Server",
            "permalink": "/ja/tags/server"
        },
        {
            "label": "エージェント",
            "permalink": "/ja/tags/エージェント"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "install-check",
        "title": "インストールチェックリスト",
        "description": "サーバーモニタリングのインストールをすべて完了しました。 インストール後に確認事項をチェックしてください。",
        "tags": [
            "Server",
            "エージェント"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "Elastic Beanstalk",
        "permalink": "/ja/server/server-os/server-aws"
    },
    "next": {
        "title": "設定",
        "permalink": "/ja/server/set-agent"
    }
};
const assets = {};


const toc = [
    {
        value: 'Linux及びUnix',
        id: 'linux及びunix',
        level: 2
    },
    {
        value: 'ログ出力確認',
        id: 'ログ出力確認',
        level: 3
    },
    {
        value: 'ファイアウォール設定とネットワーク設定の確認',
        id: 'ファイアウォール設定とネットワーク設定の確認',
        level: 3
    },
    {
        value: 'Windows',
        id: 'windows',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `サーバーモニタリングのインストールをすべて完了しました。 インストール後に確認事項をチェックしてください。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "linux及びunix"
    }, `Linux及びUnix`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "ログ出力確認"
    }, `ログ出力確認`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エージェントが正常にインストールされている場合は、次のログ出力を確認できます。 接続に成功すると、connectedというメッセージが表示されます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "dus",
        label: "Debian/Ubuntu/SUSE",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `tail -10 /var/log/syslog
...
Apr  8 16:28:08 localhost systemd[1]: Started LSB: Start whatap-infra daemon.
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 Config file :  /usr/whatap/infra/conf/whatap.conf
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 OID: 1193741647 ONAME: localhost
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 connected to  {whatap ip}:{whatap port}
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "coalu",
        label: "CentOS/Amazon Linux/Unix",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `tail -10 /var/log/messages
...
Apr  8 16:28:08 localhost systemd[1]: Started LSB: Start whatap-infra daemon.
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 Config file :  /usr/whatap/infra/conf/whatap.conf
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 OID: 1193741647 ONAME: localhost
Apr  8 16:28:08 localhost whatap_infrad[32468]: 2019/04/08 16:28:08 connected to  {whatap ip}:{whatap port}
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "ファイアウォール設定とネットワーク設定の確認"
    }, `ファイアウォール設定とネットワーク設定の確認`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `接続できない場合は、ファイアウォール設定を含むネットワーク設定を確認してください。 ネットワーク設定が反映されると、エージェントは自動的に接続されます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "windows"
    }, `Windows`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `正常にインストールが完了した場合、インストールの最終段階で次の画面が表示されます。 エージェントが自動的にモニタリングを開始します。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://img.whatap.io/media/user_guide_server/management/1230.png",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `注意事項`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `データ転送用にTCPアウトバウンド`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `6600 PORT`), `が開放されている必要があります。`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);