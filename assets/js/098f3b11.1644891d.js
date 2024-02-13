"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[13512],{

/***/ 95788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iu: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);


function _defineProperty(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 79880:
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
    id: 'install-agent-docker',
    title: 'Docker 환경 설치',
    description: 'Docker 환경에서 컨테이너 내 Go 애플리케이션을 모니터링하기 위한 에이전트 설치를 안내합니다.',
    tags: [
        'Go',
        '에이전트 설치',
        'Docker',
        '컨테이너',
        '애플리케이션'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "golang/install-agent-docker",
    "id": "golang/install-agent-docker",
    "title": "Docker 환경 설치",
    "description": "Docker 환경에서 컨테이너 내 Go 애플리케이션을 모니터링하기 위한 에이전트 설치를 안내합니다.",
    "source": "@site/docs/golang/install-agent-docker.mdx",
    "sourceDirName": "golang",
    "slug": "/golang/install-agent-docker",
    "permalink": "/whatap-docs/golang/install-agent-docker",
    "draft": false,
    "editUrl": "undefined/docs/golang/install-agent-docker.mdx",
    "tags": [
        {
            "label": "Go",
            "permalink": "/whatap-docs/tags/go"
        },
        {
            "label": "에이전트 설치",
            "permalink": "/whatap-docs/tags/에이전트-설치"
        },
        {
            "label": "Docker",
            "permalink": "/whatap-docs/tags/docker"
        },
        {
            "label": "컨테이너",
            "permalink": "/whatap-docs/tags/컨테이너"
        },
        {
            "label": "애플리케이션",
            "permalink": "/whatap-docs/tags/애플리케이션"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "install-agent-docker",
        "title": "Docker 환경 설치",
        "description": "Docker 환경에서 컨테이너 내 Go 애플리케이션을 모니터링하기 위한 에이전트 설치를 안내합니다.",
        "tags": [
            "Go",
            "에이전트 설치",
            "Docker",
            "컨테이너",
            "애플리케이션"
        ]
    },
    "sidebar": "goSidebar",
    "previous": {
        "title": "에이전트 설치",
        "permalink": "/whatap-docs/golang/install-agent"
    },
    "next": {
        "title": "API 가이드",
        "permalink": "/whatap-docs/golang/api-guide"
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
        value: '<code>WHATAP_HOME</code> 환경변수 설정하기',
        id: 'whatap_home-환경변수-설정하기',
        level: 3
    },
    {
        value: 'Go 라이브러리 설정하기',
        id: 'go-라이브러리-설정하기',
        level: 2
    },
    {
        value: '컨테이너 환경변수 설정',
        id: '컨테이너-환경변수-설정',
        level: 2
    },
    {
        value: '에이전트 실행',
        id: '에이전트-실행',
        level: 2
    },
    {
        value: '에이전트 설치 확인',
        id: '에이전트-설치-확인',
        level: 2
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const Tabs = makeShortcode("Tabs");
const TabItem = makeShortcode("TabItem");
const InDoc = makeShortcode("InDoc");
const Cmdname = makeShortcode("Cmdname");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Docker 컨테이너 기반으로 실행하는 Go 애플리케이션에 와탭 모니터링 에이전트를 적용하고 컨테이너 이미지를 패키징하는 과정을 다음과 같이 안내합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `EKS Fargate는 지원 예정입니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "에이전트-다운로드"
    }, `에이전트 다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Go 애플리케이션 도커 이미지 빌드 시 whatap-agent 패키지를 설치하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "rc",
        label: "Red Hat/CentOS",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='Red Hat/CentOS'",
        "title": "'Red",
        "Hat/CentOS'": true
    }, `RUN rpm -Uvh https://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm
RUN yum install -y whatap-agent
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "du",
        label: "Debian/Ubuntu",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='Debian/Ubuntu'",
        "title": "'Debian/Ubuntu'"
    }, `RUN wget https://repo.whatap.io/debian/release.gpg -O -| apt-key add -
RUN wget https://repo.whatap.io/debian/whatap-repo_1.0_all.deb
RUN dpkg -i whatap-repo_1.0_all.deb
RUN apt-get update
RUN apt-get install -y whatap-agent
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "al",
        label: "Amazon Linux",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='Amazon Linux'",
        "title": "'Amazon",
        "Linux'": true
    }, `RUN rpm --import https://repo.whatap.io/centos/release.gpg
RUN echo "[whatap]" | tee /etc/yum.repos.d/whatap.repo > /dev/null
RUN echo "name=whatap packages for enterprise linux" | tee -a /etc/yum.repos.d/whatap.repo > /dev/null
RUN echo "baseurl=https://repo.whatap.io/centos/latest/\\$basearch" | tee -a /etc/yum.repos.d/whatap.repo > /dev/null
RUN echo "enabled=1" | tee -a /etc/yum.repos.d/whatap.repo > /dev/null
RUN echo "gpgcheck=0" | tee -a /etc/yum.repos.d/whatap.repo > /dev/null
RUN yum install -y whatap-agent
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "apl",
        label: "Alpine Linux",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='Alpine Linux'",
        "title": "'Alpine",
        "Linux'": true
    }, `RUN wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz
RUN tar -xvzf whatap-agent.tar.gz -C /
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "에이전트-설정"
    }, `에이전트 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 애플리케이션 실행 경로에 와탭의 액세스 키, 서버 IP 주소 정보를 입력한 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `whatap.conf`), ` 파일을 생성하세요. 특정 경로를 사용할 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), ` 환경변수로 설정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `RUN echo "accesskey={액세스 키}" >> whatap.conf
RUN echo "whatap.server.host={수집 서버 IP 주소}" >> whatap.conf
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `액세스 키`), `가 Docker Public 상태의 이미지에 노출되지 않도록 주의하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "whatap_home-환경변수-설정하기"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `WHATAP_HOME`), ` 환경변수 설정하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `whatap.conf`), ` 파일 경로를 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), ` 환경변수로 설정할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), ` 경로를 우선 생성하세요. 애플리케이션 실행 문구 앞에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `WHATAP_HOME`), ` 설정을 추가합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `mkdir ./whatap_home
echo "license={액세스 키}" >> ./whatap_home/whatap.conf
echo "whatap.server.host={수집 서버 IP 주소}" >> ./whatap_home/whatap.conf

# run application
WHATAP_HOME=./whatap_home ./app
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "go-라이브러리-설정하기"
    }, `Go 라이브러리 설정하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Go 애플리케이션 소스 코드에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api"
    }, `github.com/whatap/go-api`), ` 패키지를 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `go get github.com/whatap/go-api
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Init()`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Shutdown()`), ` 함수로 초기화 및 종료를 설정하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Start()`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.End()`), ` 함수로 트랜잭션의 시작 종료를 설정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import "github.com/whatap/go-api/trace"

func main(){
    trace.Init(nil)
    //It must be executed before closing the app.    
    defer trace.Shutdown()    

    ctx, _ := trace.Start(context.Bacground(), "Start Tx")

    ...

    trace.End(ctx, err)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(InDoc, {
        product: "golang",
        mdxType: "InDoc"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `라이브러리 설정에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "api-guide"
    }, `다음 문서`), `를 참조하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(InDoc, {
        product: "kubernetes",
        mdxType: "InDoc"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `라이브러리 설정에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "../golang/api-guide"
    }, `다음 문서`), `를 참조하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "컨테이너-환경변수-설정"
    }, `컨테이너 환경변수 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Docker 빌드 후 쿠버네티스 환경 내 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `컨테이너 환경변수`), `를 설정하세요. 애플리케이션 배포 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `yaml`), ` 파일에 다음 내용을 추가하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `env:
- name: NODE_IP
  valueFrom: {fieldRef: {fieldPath: status.hostIP}}
- name: NODE_NAME
  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}
- name: POD_NAME
  valueFrom: {fieldRef: {fieldPath: metadata.name}}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음 예시를 참조하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-yaml"
    }, `apiVersion: v1
kind: Pod
metadata:
  name: # Pod Name
  labels: # Pod Labels
spec:
  containers:
      env:
    - name: NODE_IP
      valueFrom: {fieldRef: {fieldPath: status.hostIP}}
    - name: NODE_NAME
      valueFrom: {fieldRef: {fieldPath: spec.nodeName}}
    - name: POD_NAME
      valueFrom: {fieldRef: {fieldPath: metadata.name}}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `환경변수 역할`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `NODE_IP`), `: 현재 파드가 호스팅된 노드(Node)의 IP 주소를 수집합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `NODE_NAME`), `: 현재 파드가 실행 중인 노드의 이름을 수집합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `POD_NAME`), `: 현재 파드의 이름을 수집합니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "에이전트-실행"
    }, `에이전트 실행`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Tabs, {
        mdxType: "Tabs"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "cm",
        label: "Command",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `애플리케이션 시작 명령어 앞에 추가로 whatap-agent 시작 명령어를 추가하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker"
    }, `sh -c "/usr/whatap/agent/whatap-agent start && [애플리케이션 시작 명령어]"
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(TabItem, {
        value: "sup",
        label: "Supervisor",
        default: true,
        mdxType: "TabItem"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Supervisor로 애플리케이션을 시작하는 경우 다음 코드를 참조해 whatap-agent 서비스를 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker"
    }, `RUN echo "[program:whatap-agent]" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "command = /usr/whatap/agent/whatap-agent start" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "user = root" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "startsecs = 0" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "autostart = true" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "autorestart = false" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "stdout_logfile = /dev/stdout" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "stdout_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "stderr_logfile = /dev/stderr" >> /etc/supervisor/conf.d/whatap.conf
RUN echo "stderr_logfile_maxbytes=0" >> /etc/supervisor/conf.d/whatap.conf
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음 명령어를 실행해 와탭 서비스가 정상 실행되었는지 확인하세요. 애플리케이션 서버가 실행되면 에이전트가 모니터링 정보를 수집하기 시작합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-docker"
    }, `ps -ef | grep whatap_agent
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "에이전트-설치-확인"
    }, `에이전트 설치 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `에이전트를 제대로 설치했는지 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "serviceDashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴로 이동하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다운로드한 파일을 직접 설치한 다음, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴에서 에이전트를 확인할 수 없다면 다음 사항을 확인하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `컨테이너에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `ps -ef | grep whatap_agent`), ` 명령어를 실행해 에이전트 옵션을 적용했는지 확인하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `컨테이너의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "em"
    }, `WHATAP_HOME`), `/logs`), ` 또는 애플리케이션 실행 경로의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `logs`), ` 디렉터리를 확인하세요. 에이전트 로그는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `logs/whatap-`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "em"
    }, `{boot or install}`), `-yyyymmdd.log`), ` 형식의 파일명으로 출력됩니다.`))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);