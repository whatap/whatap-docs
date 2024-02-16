"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[37683],{

/***/ 15680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);


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

/***/ 22932:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);
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
    id: 'api-guide',
    title: 'API 가이드',
    description: 'Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.',
    tags: [
        'Go',
        'API 가이드',
        '라이브러리'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "golang/api-guide",
    "id": "golang/api-guide",
    "title": "API 가이드",
    "description": "Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.",
    "source": "@site/docs/golang/api-guide.mdx",
    "sourceDirName": "golang",
    "slug": "/golang/api-guide",
    "permalink": "/whatap-docs/golang/api-guide",
    "draft": false,
    "editUrl": "undefined/docs/golang/api-guide.mdx",
    "tags": [
        {
            "label": "Go",
            "permalink": "/whatap-docs/tags/go"
        },
        {
            "label": "API 가이드",
            "permalink": "/whatap-docs/tags/api-가이드"
        },
        {
            "label": "라이브러리",
            "permalink": "/whatap-docs/tags/라이브러리"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "api-guide",
        "title": "API 가이드",
        "description": "Go 라이브러리를 이용해 와탭 에이전트에 모니터링할 데이터를 전송할 수 있습니다.",
        "tags": [
            "Go",
            "API 가이드",
            "라이브러리"
        ]
    },
    "sidebar": "goSidebar",
    "previous": {
        "title": "Docker 환경 설치",
        "permalink": "/whatap-docs/golang/install-agent-docker"
    },
    "next": {
        "title": "설치 점검 사항",
        "permalink": "/whatap-docs/golang/install-check"
    }
};
const assets = {};
const toc = [
    {
        value: '다운로드',
        id: '다운로드',
        level: 2
    },
    {
        value: '시작하기',
        id: '시작하기',
        level: 2
    },
    {
        value: 'init, shutdown',
        id: 'init-shutdown',
        level: 3
    },
    {
        value: 'Context',
        id: 'context',
        level: 3
    },
    {
        value: '트랜잭션 생성',
        id: '트랜잭션-생성',
        level: 4
    },
    {
        value: '트랜잭션 추적',
        id: '트랜잭션-추적',
        level: 2
    },
    {
        value: '웹 트랜잭션 추적',
        id: '웹-트랜잭션-추적',
        level: 3
    },
    {
        value: '일반 트랜잭션 추적',
        id: '일반-트랜잭션-추적',
        level: 3
    },
    {
        value: 'API',
        id: 'api',
        level: 3
    },
    {
        value: 'DB 연결 및 SQL 추적',
        id: 'db-연결-및-sql-추적',
        level: 2
    },
    {
        value: 'DB Connection',
        id: 'db-connection',
        level: 3
    },
    {
        value: 'database/sql 패키지 설정',
        id: 'databasesql-패키지-설정',
        level: 3
    },
    {
        value: 'API',
        id: 'api-1',
        level: 3
    },
    {
        value: 'HTTP 요청 추적',
        id: 'http-요청-추적',
        level: 2
    },
    {
        value: 'http transport RoundTripper',
        id: 'http-transport-roundtripper',
        level: 3
    },
    {
        value: 'API',
        id: 'api-2',
        level: 3
    },
    {
        value: '함수 추적',
        id: '함수-추적',
        level: 2
    },
    {
        value: 'API',
        id: 'api-3',
        level: 3
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `이 문서에서 기술된 예제 코드는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example"
    }, `github.com/whatap/go-api-example`), ` 저장소에서 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "다운로드"
    }, `다운로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `패지키 및 관련 종속성(dependency)을 다운로드하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `go get github.com/whatap/go-api
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "시작하기"
    }, `시작하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "init-shutdown"
    }, `init, shutdown`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Init()`), ` 함수를 이용해 모니터링 모듈을 시작하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `defer trace.Shutdown()`), `으로 모니터링 종료를 보장합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import "github.com/whatap/go-api/trace"


func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()

    ...
}

func Init(m map[string]string)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `map[string]string`), ` 형식을 애플리케이션 초기에 설정할 수 있습니다. 또는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `whatap.conf`), ` 파일에 설정할 수 있습니다. 에이전트와 TCP 접속이 정상적으로 이루어져야 성능 정보를 와탭 수집 서버로 보낼 수 있습니다. 기본 접속 정보로 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `127.0.0.1:6600`), `을 통해 TCP로 통신합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `접속 정보를 변경하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `Init`), ` 함수에 설정을 전달하거나 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `whatap.conf`), ` 파일에 설정하고 애플리케이션을 재시작하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `m := make(map[string]string)
m["net_ipc_host"] = "127.0.0.1"
m["net_ipc_port"] = "6601"

trace.Init(m)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `accesskey={액세스 키}
whatap.server.host={수집 서버 IP 주소}
net_ipc_host=127.0.0.1
net_ipc_host=6600
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "context"
    }, `Context`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `에이전트는 성능 정보를 트랜잭션 단위로 수집합니다. 트랜잭션의 구분은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatap context(trace.TraceCtx)`), `가 포함된 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `context`), `를 기준으로 합니다. 트랜잭션에 연계되지 않는 성능 정보는 수집을 무시하거나 통계 정보로만 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "트랜잭션-생성"
    }, `트랜잭션 생성`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `go-api/trace`), ` 모듈의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `Start`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `StartWithReqest`), ` 함수로 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatap context`), `를 생성합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `context`), ` 내부에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatap`), ` 키로 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `TraceCtx`), ` 정보를 설정합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `var traceCtx *TraceCtx
traceCtx.Txid = keygen.Next()
ctx = context.WithValue(ctx, "whatap", traceCtx)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `트랜잭션, SQL, DBConnection, 외부 HTTP request, 일반 함수 추적 등의 API에서 시작 시점에는 반드시 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatap`), ` 키로 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `TraceCtx`), ` 객체가 존재하는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `Context`), `가 필요합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "트랜잭션-추적"
    }, `트랜잭션 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `웹 요청과 응답까지의 트랜잭션과 일반적인 작업 단위의 트랜잭션을 모두 추적합니다. 시작 및 종료 함수로 구성되어 있습니다. 하나의 트랜잭션으로 인식되어 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `히트맵`)), ` 위젯에서 상세 보기와 TPS, 응답시간, 평균 응답시간 등의 통계 지표를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `설정을 통해서 HTTP 파라미터, HTTP 헤더 정보를 수집할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "웹-트랜잭션-추적"
    }, `웹 트랜잭션 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Func()`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.HandlerFunc()`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `net/http`), `의 Handle, HandFunc을 래핑한 함수`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.StartWithRequest`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.End`), `를 동일하게 진행합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `웹 트랜잭션의 이름은 RequestURI로 설정됩니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Step()`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자가 전달하는 문자열을 프로파일 정보에 출력하는 기능을 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.HandleFunc("/wrapHandleFunc", trace.Func(func(w http.ResponseWriter, r *http.Request) {
    ...
}))
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.Handle("/wrapHandleFunc1", trace.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    ...
}))
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "일반-트랜잭션-추적"
    }, `일반 트랜잭션 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func main() {
    ...

    ctx := context.Background()
    ctx, _ := trace.Start(ctx, "Custom Transaction")

    ...

    trace.End(ctx, nil)

    ...
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "api"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, name string) (context.Context, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(ctx context.Context, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithRequest(r *http.Request) (context.Context, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Step(ctx context.Context, title, message string, elapsed, value int) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func HandlerFunc(handler func(http.ResponseWriter, *http.Request)) http.HandlerFunc
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Func(handler func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "db-연결-및-sql-추적"
    }, `DB 연결 및 SQL 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `DB 연결 정보, sql 구문, error 및 prepared 구문을 위한 파라미터를 API로 전달하면 실행 시간 및 오류 사항을 수집할 수 있습니다. SQL 구문은 최대 32KB까지 수집합니다. SQL Prepared 구문을 위한 파라미터는 최대 20개, 각각 256byte까지 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "db-connection"
    }, `DB Connection`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    whatapsql "github.com/whatap/go-api/sql"
)

func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()
    
    ctx, _ := trace.Start(context.Background(), "Trace Open DB")
    defer trace.End(ctx, nil)
    
    sqlCtx, _ := whatapsql.StartOpen(ctx, "id@tcp(x.x.x.x:3306)/test")
    db, err := sql.Open("mysql", "id:pwd@tcp(x.x.x.x:3306)/test")
    whatapsql.End(sqlCtx, err)
    defer db.Close()
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    whatapsql "github.com/whatap/go-api/sql"
)

func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()
    
    ctx, _ := trace.Start(context.Background(), "Trace Query")
    defer trace.End(ctx, nil)
    
    query = "select id, subject from tbl_faq limit 10"
    sqlCtx, _ = whatapsql.Start(ctx, "id:pwd@tcp(x.x.x.x:3306)/test", query)
    rows, err := db.QueryContext(ctx, query)
    whatapsql.End(sqlCtx, err)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    whatapsql "github.com/whatap/go-api/sql"
)

func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()
    
    ctx, _ := trace.Start(context.Background(), "Trace Prepared Statement")
    defer trace.End(ctx, nil)
    
    // Prepared Statement 생성
    query = "select id, subject from tbl_faq where id = ? limit ?"
    stmt, err := db.Prepare(query)
    if err != nil {
      return
    }
    defer stmt.Close()
    
    params := make([]interface{}, 0)
    params = append(params, 8)
    params = append(params, 1)
    
    sqlCtx, _ := whatapsql.StartWithParamArray(ctx, "id:pwd(x.x.x.x:3306)/test", query, params)
    rows, err := stmt.QueryContext(ctx, params...)
    whatapsql.End(sqlCtx, err)
    

    sqlCtx, _ = whatapsql.StartWithParam(ctx, "id:pwd(x.x.x.x:3306)/test", query, params...)
    rows, err := stmt.QueryContext(ctx, params...)
    whatapsql.End(sqlCtx, err)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "databasesql-패키지-설정"
    }, `database/sql 패키지 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `database/sql 패키지의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `sql.Open`), ` 함수 대신 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatapsql.OpenContext`), ` 함수를 사용합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `PrepareContext`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `QueryContext`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `ExecContext`), ` 등 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `context`), `를 전달하는 함수를 이용하길 권장합니다. 전달하는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `context`), `는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `trace.Start()`), `를 통해서 whatap TraceCtx 정보가 있어야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `
import (
    _ "github.com/go-sql-driver/mysql"
    "github.com/whatap/go-api/instrumentation/database/sql/whatapsql"
)

func main() {
    config := make(map[string]string)
    trace.Init(config)
    defer trace.Shutdown()

    // whataphttp.Func 내부에서 whatap TraceCtx를 생성합니다.
    http.HandleFunc("/query", whataphttp.Func(func(w http.ResponseWriter, r *http.Request){
      ctx := r.Context()
    
      // Use WhaTap Driver. whatap의 TraceCtx가 있는 context 를 전달합니다.
      db, err := whatapsql.OpenContext(ctx, "mysql", dataSource)
      if err != nil {
        fmt.Println("Error whatapsql.Open ", err)
        return
      }
      defer db.Close()
      
      ...
      query := "select id, subject from tbl_faq limit 10"
      
      // whatap TraceCtx가 있는 context 를 전달합니다.
      if rows, err := db.QueryContext(ctx, query); err == nil {
        ...
      }
    }
    ...
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "api-1"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, dbhost, sql string) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartOpen(ctx context.Context, dbhost string) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(sqlCtx *SqlCtx, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithParam(ctx context.Context, dbhost, sql, param ...interface{}) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithParamArray(ctx context.Context, dbhost, sql string, param []interface{}) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Trace(ctx context.Context, dbhost, sql, param string, elapsed int, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "http-요청-추적"
    }, `HTTP 요청 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    "github.com/whatap/go-api/httc"
)

func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()
  
    ctx, _ := trace.Start(context.Background(), "Trace Http Call")
    defer trace.End(ctx, nil)
  
    httpcCtx, _ := httpc.Start(ctx, callUrl)
    resp, err := http.Get(callUrl)
    if err == nil {
      httpc.End(httpcCtx, resp.StatusCode, "", nil)
    } else {
      httpc.End(httpcCtx, 0, "", err)
    }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "http-transport-roundtripper"
    }, `http transport RoundTripper`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `RoundTripper를 설정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    "github.com/whatap/go-api/instrumentation/net/http/whataphttp"
)
func main() {
    config := make(map[string]string)  
    trace.Init(config)  
    defer trace.Shutdown()    
    
    ctx, _ := trace.Start(context.Background(), "Http call")  
    defer trace.End(ctx, nil)  
    
    callUrl := "http://aaa.com/xxx"  
    client := http.DefaultClient        
    // Use WhaTap RoundTripper. whatap의 TraceCtx가 있는 context 를 전달합니다.   
    client.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)        
    resp, err := client.Get(callUrl)  
    if err != nil {      
      ...  
    }  
    defer resp.Body.Close()  
    
    ...
    
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "api-2"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, url string) (*HttpcCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(httpcCtx *HttpcCtx, status int, reason string, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Trace(ctx context.Context, host string, port int, url string, elapsed int, status int, reason string, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "함수-추적"
    }, `함수 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 함수 또는 원하는 구간의 실행 시간을 측정하기 위한 API 입니다. 함수 실행 전, 후로 API를 설정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `import (
    "github.com/whatap/go-api/method"
)
func main(){
    trace.Init(nil)
    //It must be executed before closing the app.
    defer trace.Shutdown()
  
    ctx, _ := trace.Start(context.Background(), "Trace Method")
    defer trace.End(ctx, nil)
  
    getUser(ctx)
}

func getUser(ctx context.Context) {
    methodCtx, _ := method.Start(ctx, "getUser")
    defer method.End(methodCtx, nil)
    time.Sleep(time.Duration(1) * time.Second)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "api-3"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, name string) (*MethodCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(methodCtx *MethodCtx, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Trace(ctx context.Context, name string, elapsed int, err error) error
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);