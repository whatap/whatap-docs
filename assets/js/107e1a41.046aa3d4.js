"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[78488],{

/***/ 52632:
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
    id: 'server-aws',
    title: 'Elastic Beanstalk',
    description: 'Elastic Beanstalk 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.',
    tags: [
        'Server',
        '설치하기',
        'Elastic Beanstalk',
        'AWS'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "server/server-os/server-aws",
    "id": "server/server-os/server-aws",
    "title": "Elastic Beanstalk",
    "description": "Elastic Beanstalk 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.",
    "source": "@site/docs/server/server-os/sv-aws.mdx",
    "sourceDirName": "server/server-os",
    "slug": "/server/server-os/server-aws",
    "permalink": "/whatap-docs/server/server-os/server-aws",
    "draft": false,
    "editUrl": "undefined/docs/server/server-os/sv-aws.mdx",
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
            "label": "Elastic Beanstalk",
            "permalink": "/whatap-docs/tags/elastic-beanstalk"
        },
        {
            "label": "AWS",
            "permalink": "/whatap-docs/tags/aws"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "server-aws",
        "title": "Elastic Beanstalk",
        "description": "Elastic Beanstalk 환경에서 와탭 서버 모니터링 에이전트를 설치하는 방법을 제공합니다.",
        "tags": [
            "Server",
            "설치하기",
            "Elastic Beanstalk",
            "AWS"
        ]
    },
    "sidebar": "serverSidebar",
    "previous": {
        "title": "서버 컴퓨터 이외의 경우",
        "permalink": "/whatap-docs/server/server-os/server-other"
    },
    "next": {
        "title": "설치 점검 사항",
        "permalink": "/whatap-docs/server/install-check"
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Elastic Beanstalk`), `를 이용해 배포할 경우 와탭 에이전트를 적용하는 방법입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `Linux 설치 환경에 따라 다음의 내용을 Elastic Beanstalk `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `설치 스크립트`), `에 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatap.server.host`), `와 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `license`), ` 즉 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `프로젝트 액세스 키`), `는 사용자에 맞게 입력합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "du",
        label: "Debian / Ubuntu",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget http://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -
wget http://repo.whatap.io/debian/whatap-repo_1.0_all.deb
sudo dpkg -i whatap-repo_1.0_all.deb
sudo apt-get update
sudo apt-get install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "co",
        label: "CentOS",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
sudo rpm -Uvh http://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "al",
        label: "Amazon Linux",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
echo "[whatap]" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null
echo "name=whatap packages for enterprise linux" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "baseurl=http://repo.whatap.io/centos/latest/\\$basearch" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "enabled=1" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
echo "gpgcheck=0" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap-infra restart
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "suse",
        label: "SUSE",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/suse/release.gpg
echo "[whatap]" | sudo tee /etc/zypp/repos.d/whatap.repo > /dev/null
echo "name=whatap packages for enterprise linux" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "baseurl=http://repo.whatap.io/suse/12/x86_64" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "enabled=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
echo "gpgcheck=1" | sudo tee -a /etc/zypp/repos.d/whatap.repo > /dev/null
sudo zypper refresh
sudo zypper install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo /etc/init.d/whatap-infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "fb",
        label: "FreeBSD",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget http://repo.whatap.io/freebsd/10/whatap-infra.txz
pkg install whatap-infra.txz
echo "license={LICENSE_INFO}" |tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |tee -a /usr/whatap/infra/conf/whatap.conf
service whatap_infra restart
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
        value: "xs",
        label: "XenServer",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `sudo rpm --import http://repo.whatap.io/centos/release.gpg
sudo rpm -Uvh http://repo.whatap.io/centos/python/5/noarch/whatap-repo-1.0-1.noarch.rpm
sudo yum install whatap-infra
echo "license={LICENSE_INFO}" |sudo tee /usr/whatap/infra/conf/whatap.conf
echo "whatap.server.host={HOST_IP}" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
echo "createdtime=\`date +%s%N\`" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
sudo service whatap_infra restart
`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `명령어`), `를 수정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `echo "createdtime=date +%s%N" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `설치 후 서버 모니터링을 Beanstalk에 포함해 애플리케이션 배포 시 서버 모니터링 신규 목록이 반복적으로 생성될 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `와탭 에이전트 내부 아이디가 위의 명령이 실행될 때마다 새로 발급되기 때문입니다. 추후 배포 시 신규 목록이 추가로 발생하지 않도록 다음과 같이 수정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `echo "createdtime=12345678" |sudo tee -a /usr/whatap/infra/conf/whatap.conf
`)))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);