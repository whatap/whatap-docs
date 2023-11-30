"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[79246],{

/***/ 13680:
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
    title: 'Installation checking items',
    description: 'The server monitoring has been installed completely. Check the checklist after installation.',
    tags: [
        'Server',
        'Agent'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/install-check",
    "id": "server/install-check",
    "title": "Installation checking items",
    "description": "The server monitoring has been installed completely. Check the checklist after installation.",
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/server/install-check.mdx",
    "sourceDirName": "server",
    "slug": "/server/install-check",
    "permalink": "/en/server/install-check",
    "draft": false,
    "editUrl": "undefined/docs/server/install-check.mdx",
    "tags": [
        {
            "label": "Server",
            "permalink": "/en/tags/server"
        },
        {
            "label": "Agent",
            "permalink": "/en/tags/agent"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "install-check",
        "title": "Installation checking items",
        "description": "The server monitoring has been installed completely. Check the checklist after installation.",
        "tags": [
            "Server",
            "Agent"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "Elastic Beanstalk",
        "permalink": "/en/server/server-os/server-aws"
    },
    "next": {
        "title": "Configuration",
        "permalink": "/en/server/set-agent"
    }
};
const assets = {};


const toc = [
    {
        value: 'Linux and Unix',
        id: 'linux-and-unix',
        level: 2
    },
    {
        value: 'Checking the log output',
        id: 'checking-the-log-output',
        level: 3
    },
    {
        value: 'Checking the firewall and network settings',
        id: 'checking-the-firewall-and-network-settings',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The server monitoring has been installed completely. Check the checklist after installation.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "linux-and-unix"
    }, `Linux and Unix`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "checking-the-log-output"
    }, `Checking the log output`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If the agent has been installed, you can check the log output as follows. After connection, the message, "connected" appears.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
        "id": "checking-the-firewall-and-network-settings"
    }, `Checking the firewall and network settings`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If connection is not made, check the network settings including the firewall settings. When the network settings are applied, the agent is automatically connected.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "windows"
    }, `Windows`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `After installation is completed, you can see the following screen at the final step. The agent automatically starts the monitoring. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://img.whatap.io/media/user_guide_server/management/1230.png",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Cautions`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `TCP outbound `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `6600 PORT`), ` must be open for data transmission.`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);