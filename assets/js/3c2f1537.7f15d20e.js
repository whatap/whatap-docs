"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[84659],{

/***/ 9587:
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
    title: '설치 점검 사항',
    description: '서버 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.',
    tags: [
        'Server',
        '에이전트'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/install-check",
    "id": "server/install-check",
    "title": "설치 점검 사항",
    "description": "서버 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.",
    "source": "@site/docs/server/install-check.mdx",
    "sourceDirName": "server",
    "slug": "/server/install-check",
    "permalink": "/whatap-docs/server/install-check",
    "draft": false,
    "editUrl": "undefined/docs/server/install-check.mdx",
    "tags": [
        {
            "label": "Server",
            "permalink": "/whatap-docs/tags/server"
        },
        {
            "label": "에이전트",
            "permalink": "/whatap-docs/tags/에이전트"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "install-check",
        "title": "설치 점검 사항",
        "description": "서버 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.",
        "tags": [
            "Server",
            "에이전트"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "Elastic Beanstalk",
        "permalink": "/whatap-docs/server/server-os/server-aws"
    },
    "next": {
        "title": "설정하기",
        "permalink": "/whatap-docs/server/set-agent"
    }
};
const assets = {};


const toc = [
    {
        value: 'Linux 및 Unix',
        id: 'linux-및-unix',
        level: 2
    },
    {
        value: '로그 출력 확인',
        id: '로그-출력-확인',
        level: 3
    },
    {
        value: '방화벽 설정 및 네트워크 설정 확인',
        id: '방화벽-설정-및-네트워크-설정-확인',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `서버 모니터링 설치를 모두 완료했습니다. 설치 후 확인 사항을 점검하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "linux-및-unix"
    }, `Linux 및 Unix`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "로그-출력-확인"
    }, `로그 출력 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에이전트가 정상적으로 설치되면 다음과 같은 로그 출력을 확인하실 수 있습니다. 성공적으로 접속이 되면 connected 문구가 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
        "id": "방화벽-설정-및-네트워크-설정-확인"
    }, `방화벽 설정 및 네트워크 설정 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `접속이 되지 않으면 방화벽 설정을 포함해 네트워크 설정을 확인하세요. 네트워크 설정이 반영되면 에이전트는 자동 접속됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "windows"
    }, `Windows`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `정상적으로 설치가 완료된 경우 설치 최종 단계에서 다음과 같은 화면을 볼 수 있습니다. 에이전트가 자동적으로 모니터링을 시작합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://img.whatap.io/media/user_guide_server/management/1230.png",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `주의 사항`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `데이터 전송을 위해 TCP 아웃바운드 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `6600 PORT`), `가 열려 있어야 합니다.`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);