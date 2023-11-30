"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[26503],{

/***/ 4228:
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
    id: 'server-other',
    title: '서버 컴퓨터 이외의 경우',
    description: '서버 컴퓨터가 아닌 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.',
    tags: [
        'Server',
        '설치하기',
        'Linux',
        'Windows'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/server-os/server-other",
    "id": "server/server-os/server-other",
    "title": "서버 컴퓨터 이외의 경우",
    "description": "서버 컴퓨터가 아닌 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.",
    "source": "@site/docs/server/server-os/sv-other.mdx",
    "sourceDirName": "server/server-os",
    "slug": "/server/server-os/server-other",
    "permalink": "/whatap-docs/server/server-os/server-other",
    "draft": false,
    "editUrl": "undefined/docs/server/server-os/sv-other.mdx",
    "tags": [
        {
            "label": "Server",
            "permalink": "/whatap-docs/tags/server"
        },
        {
            "label": "설치하기",
            "permalink": "/whatap-docs/tags/설치하기"
        },
        {
            "label": "Linux",
            "permalink": "/whatap-docs/tags/linux"
        },
        {
            "label": "Windows",
            "permalink": "/whatap-docs/tags/windows"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "server-other",
        "title": "서버 컴퓨터 이외의 경우",
        "description": "서버 컴퓨터가 아닌 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.",
        "tags": [
            "Server",
            "설치하기",
            "Linux",
            "Windows"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "Windows",
        "permalink": "/whatap-docs/server/server-os/server-windows"
    },
    "next": {
        "title": "Elastic Beanstalk",
        "permalink": "/whatap-docs/server/server-os/server-aws"
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `노트북과 같이 서버 컴퓨터가 아닌 개인용 컴퓨터 및 아이피가 변하는 wifi를 사용하는 환경에서는 다음 옵션을 적용하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "lx",
        label: "Linux",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title=SH",
        "title": "SH"
    }, `echo "ipreg=false" | sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "wd",
        label: "Windows",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='SH' {2,3}",
        "title": "'SH'",
        "{2,3}": true
    }, `// 관리자 권한 파워쉘에서 다음 명령을 실행하세요.
Add-Content "c:\\Program Files\\WhatapInfra\\whatap.conf" "ipreg=false"
Restart-Service "Whatap Infra"
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `IP가 변경될 때마다 자동으로 다시 등록되지 않아 편리하게 사용할 수 있습니다.`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);