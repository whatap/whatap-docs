"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[91954],{

/***/ 31146:
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
    id: 'install-docker-python',
    title: 'Docker Python 설치',
    description: '컨테이너 내 Python 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.',
    tags: [
        '쿠버네티스',
        '쿠버네티스 모니터링',
        '애플리케이션 설치',
        'Python'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "kubernetes/install-docker-python",
    "id": "kubernetes/install-docker-python",
    "title": "Docker Python 설치",
    "description": "컨테이너 내 Python 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.",
    "source": "@site/docs/kubernetes/install-docker-python.mdx",
    "sourceDirName": "kubernetes",
    "slug": "/kubernetes/install-docker-python",
    "permalink": "/whatap-docs/kubernetes/install-docker-python",
    "draft": false,
    "editUrl": "undefined/docs/kubernetes/install-docker-python.mdx",
    "tags": [
        {
            "label": "쿠버네티스",
            "permalink": "/whatap-docs/tags/쿠버네티스"
        },
        {
            "label": "쿠버네티스 모니터링",
            "permalink": "/whatap-docs/tags/쿠버네티스-모니터링"
        },
        {
            "label": "애플리케이션 설치",
            "permalink": "/whatap-docs/tags/애플리케이션-설치"
        },
        {
            "label": "Python",
            "permalink": "/whatap-docs/tags/python"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "install-docker-python",
        "title": "Docker Python 설치",
        "description": "컨테이너 내 Python 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.",
        "tags": [
            "쿠버네티스",
            "쿠버네티스 모니터링",
            "애플리케이션 설치",
            "Python"
        ]
    },
    "sidebar": "kubeSidebar",
    "previous": {
        "title": "Docker Node.js 설치",
        "permalink": "/whatap-docs/kubernetes/install-docker-nodejs"
    },
    "next": {
        "title": "Docker PHP 설치",
        "permalink": "/whatap-docs/kubernetes/install-docker-php"
    }
};
const assets = {};


const toc = [
    {
        value: '에이전트 다운로드',
        id: '에이전트-다운로드',
        level: 2
    },
    {
        value: '에이전트 설정',
        id: '에이전트-설정',
        level: 2
    },
    {
        value: 'Kubernetes 환경변수 및 볼륨',
        id: 'kubernetes-환경변수-및-볼륨',
        level: 2
    },
    {
        value: '모니터링 시작하기',
        id: '모니터링-시작하기',
        level: 2
    },
    {
        value: 'Service에 uWSGI를 등록해 애플리케이션을 실행하는 경우',
        id: 'service에-uwsgi를-등록해-애플리케이션을-실행하는-경우',
        level: 4
    },
    {
        value: 'Service에 Gunicorn 등록하여 애플리케이션을 실행하는 경우',
        id: 'service에-gunicorn-등록하여-애플리케이션을-실행하는-경우',
        level: 4
    },
    {
        value: '에이전트 설치 확인',
        id: '에이전트-설치-확인',
        level: 2
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const ImgLang = makeShortcode("ImgLang");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Docker 컨테이너 기반으로 실행하는 Python 애플리케이션에 와탭 모니터링 에이전트를 적용하고, 컨테이너 이미지를 패키징하는 과정입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `EKS Fargate는 지원 예정입니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Python 애플리케이션 연동 과정에 대한 이해를 돕고자 Git 예시 코드를 제공합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/kuber-apm-boilerplate/tree/main/python/fastapi"
    }, `다음 문서`), `를 참조하세요.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "에이전트-다운로드"
    }, `에이전트 다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Python 애플리케이션 도커 이미지 빌드 시 whatap-python 패키지를 설치하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='python ver 3.7'",
        "title": "'python",
        "ver": true,
        "3.7'": true
    }, `RUN pip3 install --upgrade whatap-python
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "에이전트-설정"
    }, `에이전트 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Python 애플리케이션 시작 시 와탭 에이전트가 Injection할 수 있도록 애플리케이션 시작 스크립트를 수정하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `로그 및 설정 파일 경로를 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), ` 환경 변수로 설정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python"
    }, `export WHATAP_HOME={로그 및 설정 파일 경로}
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), `으로 설정한 경로에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `whatap.conf`), ` 파일을 생성하고 설정하도록 다음 명령어를 실행하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `whatap-setting-config \\
--host {수집 서버 IP} \\
--license {액세스 키} \\
--app_name {사용자 지정 에이전트 이름} \\
--app_process_name {프로세스 이름, 예시, uwsgi, gunicorn}
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "caution"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `권한 문제가 발생하는 경우 다음과 같이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `$WHATAP_HOME`), `에 권한을 부여하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `echo \`sudo chmod -R 777 $WHATAP_HOME\`
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "kubernetes-환경변수-및-볼륨"
    }, `Kubernetes 환경변수 및 볼륨`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `트랜잭션에서 Node 및 Pod 정보를 수집하기 위해 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NODE_IP`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `NODE_NAME`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `POD_NAME`), ` 환경변수를 설정하세요. 와탭 설정 파일 및 로그 파일용 휘발성 볼륨을 탑재합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini"
    }, `env:
  - name: NODE_IP
    valueFrom: {fieldRef: {fieldPath: status.hostIP}}
  - name: NODE_NAME
    valueFrom: {fieldRef: {fieldPath: spec.nodeName}}
  - name: POD_NAME
    valueFrom: {fieldRef: {fieldPath: metadata.name}}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "모니터링-시작하기"
    }, `모니터링 시작하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_Tabs__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "command",
        label: "Command",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap-start-agent`), ` 커맨드를 애플리케이션 시작 명령어 앞에 추가해 실행하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python"
    }, `# whatap-start-agent python manage.py runserver
whatap-start-agent {애플리케이션 시작 명령어}
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "uwsgi",
        label: "uWSGI",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap-start-agent`), ` 커맨드를 애플리케이션 시작 명령어 앞에 추가해 실행하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python"
    }, `# whatap-start-agent uwsgi --ini myapp.ini
whatap-start-agent {애플리케이션 시작 명령어}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "service에-uwsgi를-등록해-애플리케이션을-실행하는-경우"
    }, `Service에 uWSGI를 등록해 애플리케이션을 실행하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `사용자(User)를 변경한다면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `WHATAP_HOME`), ` 환경변수를 추가해야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `가상 환경을 사용한다면 에이전트 시작 명령어를 절대 경로로 추가하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `서비스 실행 파일(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `/etc/init/uwsgi.conf`), `)을 수정하여 에이전트 시작 명령어와 함께 애플리케이션을 시작하세요. 사용자 환경에 따라 서비스 실행 파일의 경로는 다를 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python",
        "metastring": "title='/etc/init.d/uwsgi'",
        "title": "'/etc/init.d/uwsgi'"
    }, `description "uWSGI application server handling myapp"
start on runlevel {2345}
stop on runlevel {!2345}
exec whatap-start-agent {YOUR_APPLICATION_START_COMMAND}

# 또는

exec env WHATAP_HOME={PATH} {절대 경로}/whatap-start-agent {YOUR_APPLICATION_START_COMMAND}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='/etc/init/uwsgi.conf'",
        "title": "'/etc/init/uwsgi.conf'"
    }, `...
NAME="uwsgi"
PATH=/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
DAEMON=/usr/local/bin/uwsgi
PID=$RUN/$NAME.pid
INI_PATH=/etc/$NAME/$NAME.ini

########## WHATAP_AGENT_CONF ##########
WHATAP_HOME={PATH}
WHATAP_AGENT={절대 경로}/whatap-start-agent

...
do_start(){
  env WHATAP_HOME=$WHATAP_HOME $WHATAP_AGENT {YOUR_APPLICATION_START_COMMAND}
}
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "gunicorn",
        label: "Gunicorn",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap-start-agent`), ` 커맨드를 애플리케이션 시작 명령어 앞에 추가해 실행하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python"
    }, `# whatap-start-agent gunicorn myapp.wsgi
whatap-start-agent {애플리케이션 시작 명령어}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "service에-gunicorn-등록하여-애플리케이션을-실행하는-경우"
    }, `Service에 Gunicorn 등록하여 애플리케이션을 실행하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `사용자(User)를 변경한다면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `WHATAP_HOME`), ` 환경변수를 추가해야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `가상 환경을 사용한다면 에이전트 시작 명령어를 절대 경로로 추가하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `서비스 실행 파일(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `/etc/init/gunicorn.conf`), `)을 수정하여 에이전트 시작 명령어와 함께 애플리케이션을 시작하세요. 사용자 환경에 따라 서비스 실행 파일의 경로는 다를 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python",
        "metastring": "title='/etc/init.d/gunicorn'",
        "title": "'/etc/init.d/gunicorn'"
    }, `description "Gunicorn application server handling myapp"
start on runlevel {2345}
stop on runlevel {!2345}
exec whatap-start-agent {YOUR_APPLICATION_START_COMMAND}

# 또는

exec env WHATAP_HOME={PATH} {절대 경로}/whatap-start-agent {YOUR_APPLICATION_START_COMMAND}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='/etc/init/gunicorn.conf'",
        "title": "'/etc/init/gunicorn.conf'"
    }, `...
NAME="gunicorn"
PATH=/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin
DAEMON=/usr/local/bin/gunicorn
PID=$RUN/$NAME.pid
INI_PATH=/etc/$NAME/$NAME.ini

########## WHATAP_AGENT_CONF ##########
WHATAP_HOME={PATH}
WHATAP_AGENT={절대 경로}/whatap-start-agent

...
do_start(){
  env WHATAP_HOME=$WHATAP_HOME $WHATAP_AGENT {YOUR_APPLICATION_START_COMMAND}
}
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "supervisor",
        label: "Supervisor",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `사용자(User)를 변경한다면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `WHATAP_HOME`), ` 환경변수를 추가해야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `가상 환경을 사용한다면 에이전트 시작 명령어를 절대 경로로 추가하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `서비스 실행 파일(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `/etc/supervisor/conf.d/supervisor.conf`), `)을 수정하여 에이전트 시작 명령어와 함께 애플리케이션을 시작하세요. 사용자 환경에 따라 서비스 실행 파일의 경로는 다를 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='supervisor.conf'",
        "title": "'supervisor.conf'"
    }, `[program:app-uwsgi]
environment = WHATAP_HOME={PATH}
command = {절대 경로}/whatap-start-agent /usr/local/bin/uwsgi --ini /home/blog/backend/config/uwsgi.ini
[program:nginx-app]
command = /usr/sbin/nginx
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_TabItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        value: "code",
        label: "Code",
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `가장 윗줄에 API를 직접 호출하는 코드를 추가하여 에이전트를 적용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-python"
    }, `import whatap
whatap.agent()
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "에이전트-설치-확인"
    }, `에이전트 설치 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `애플리케이션 에이전트 설치가 정상적으로 완료되었을 경우 다음과 같이 설치 완료 메시지를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "k8s-app-agent-install-check.png",
        desc: "쿠버네티스 에이전트 설치 확인",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `에이전트를 제대로 설치했는지 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `대시보드`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 서비스 대시보드`)), ` 메뉴로 이동하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `다운로드한 파일을 직접 설치한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `대시보드`)), ` 메뉴에서 에이전트를 확인할 수 없다면 다음 사항을 확인하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `컨테이너에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "li"
    }, `ps -ef | grep whatap`), ` 명령어를 실행해 에이전트 옵션을 적용했는지 확인하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `컨테이너의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "li"
    }, `/whatap/logs`), ` 경로의 내용을 확인하세요. 에이전트 로그는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "li"
    }, `logs/`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "em"
    }, `{whatap 설정파일명}`), `-yyyymmdd.log`), ` 형식의 파일명으로 출력됩니다.`)))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);