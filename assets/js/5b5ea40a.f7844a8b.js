"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[70178],{

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

/***/ 14832:
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
    id: 'golang-0_1_12',
    title: 'Go Agent v0.1.12',
    toc_max_heading_level: 2,
    displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/golang/golang-0_1_12",
    "id": "release-notes/golang/golang-0_1_12",
    "title": "Go Agent v0.1.12",
    "description": "배포일: 2022-08-02",
    "source": "@site/docs/release-notes/golang/golang-0.1.12.mdx",
    "sourceDirName": "release-notes/golang",
    "slug": "/release-notes/golang/golang-0_1_12",
    "permalink": "/whatap-docs/release-notes/golang/golang-0_1_12",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/golang/golang-0.1.12.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "golang-0_1_12",
        "title": "Go Agent v0.1.12",
        "toc_max_heading_level": 2,
        "displayed_sidebar": "releaseSidebar"
    },
    "sidebar": "releaseSidebar",
    "previous": {
        "title": "Go Agent v0.1.13",
        "permalink": "/whatap-docs/release-notes/golang/golang-0_1_13"
    },
    "next": {
        "title": "Go Agent 지난 버전",
        "permalink": "/whatap-docs/release-notes/golang/golang-previous"
    }
};
const assets = {};
const toc = [
    {
        value: '베타 - 업데이트',
        id: '베타---업데이트',
        level: 2
    },
    {
        value: 'alpine linux 를 지원합니다.',
        id: 'alpine-linux-를-지원합니다',
        level: 3
    },
    {
        value: '설치 안내',
        id: '설치-안내',
        level: 4
    },
    {
        value: 'whatap-agent 실행',
        id: 'whatap-agent-실행',
        level: 4
    },
    {
        value: 'github.com/go-chi/chi 라이브러리 지원',
        id: 'githubcomgo-chichi-라이브러리-지원',
        level: 3
    },
    {
        value: '설치 안내',
        id: '설치-안내-1',
        level: 4
    },
    {
        value: 'github.com/go-gorm/gorm 라이브러리 지원',
        id: 'githubcomgo-gormgorm-라이브러리-지원',
        level: 3
    },
    {
        value: 'whatapgorm 사용 방식',
        id: 'whatapgorm-사용-방식',
        level: 4
    },
    {
        value: 'whatapsql 사용 방식',
        id: 'whatapsql-사용-방식',
        level: 4
    },
    {
        value: 'github.com/jinzhu/gorm 라이브러리 지원',
        id: 'githubcomjinzhugorm-라이브러리-지원',
        level: 3
    },
    {
        value: 'whatapgorm 사용 방식',
        id: 'whatapgorm-사용-방식-1',
        level: 4
    },
    {
        value: 'whatapsql 사용 방식',
        id: 'whatapsql-사용-방식-1',
        level: 4
    },
    {
        value: 'github.com/gomodule/redigo 라이브러리 지원',
        id: 'githubcomgomoduleredigo-라이브러리-지원',
        level: 3
    },
    {
        value: 'github.com/shopify/sarama 라이브러리 지원',
        id: 'githubcomshopifysarama-라이브러리-지원',
        level: 3
    },
    {
        value: 'async producer 추적',
        id: 'async-producer-추적',
        level: 4
    },
    {
        value: 'consumer 추적',
        id: 'consumer-추적',
        level: 4
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `배포일: 2022-08-02`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "베타---업데이트"
    }, `베타 - 업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "alpine-linux-를-지원합니다"
    }, `alpine linux 를 지원합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "설치-안내"
    }, `설치 안내`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz"
    }, `whatap-agent.tar.gz`), `을 다운받고 '/' 디렉터리 기준으로 압축을 해제합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `/usr/whatap/agent`), ` 디렉터리에 모니터링 설치 파일이 생성됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz
tar -xvzf whatap-agent.tar.gz -C /
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "whatap-agent-실행"
    }, `whatap-agent 실행`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/usr/whatap/agent/whatap-agent 
    Default restart
    Command start, stop, restart, version

## 버전 확인
# /usr/whatap/agent/whatap-agent version
0.8.5.20201209

## 실행 확인
# ps -elf | grep whatap
  103 root      0:05 ./whatap_agent_static -t=4
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "githubcomgo-chichi-라이브러리-지원"
    }, `github.com/go-chi/chi 라이브러리 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `chi 프레임워크의 웹 트랜잭션을 추적합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `Use`), ` 함수를 통해 미들웨어를 등록하여 추적합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "설치-안내-1"
    }, `설치 안내`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go"
    }, `import (
  "github.com/go-chi/chi"
  "github.com/whatap/go-api/trace"
  "github.com/whatap/go-api/instrumentation/github.com/go-chi/chi/whatapchi"
)

func main() {
  config := make(map[string]string)
  trace.Init(config)
  defer trace.Shutdown()
  
  r := chi.NewRouter()
  
  // whatapchi의 middleware를 등록합니다.
  r.Use(whatapchi.Middleware)
  
  r.Get("/", func(w http.ResponseWriter, r *http.Request) {
      fmt.Println("Response -", r.Response)
})
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/go-chi/chi"
    }, `예제 참조`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "githubcomgo-gormgorm-라이브러리-지원"
    }, `github.com/go-gorm/gorm 라이브러리 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `gorm v2 프레임워크를 통해 처리되는 DB Connection 및 SQL을 추적합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "whatapgorm-사용-방식"
    }, `whatapgorm 사용 방식`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `gorm.Open`), ` 함수 대신에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatapgorm.OpenWithContext`), ` 함수를 사용합니다. 전달하는 context는 내부에 whatap TraceCtx를 포함해야 하며 trace 패키지의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `Start`), ` 함수를 통해 생성 할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "net/http"

  "github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm"
  "github.com/whatap/go-api/trace"
  "gorm.io/driver/sqlite"
  "gorm.io/gorm"
)

func main() {
  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  http.HandleFunc("/InsertAndDelete", func(w http.ResponseWriter, r *http.Request) {
    // Context를 생성합니다.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // whatapgorm을 통해 DB를 연결합니다.
    db, err := whatapgorm.OpenWithContext(sqlite.Open("test.db"), &gorm.Config{}, ctx)
    if err != nil {
      panic("Db 연결에 실패하였습니다.")
    }

    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }

    db.Unscoped().Delete(&Product{}, "Code >= ? AND Code < ?", 0, 100)
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "whatapsql-사용-방식"
    }, `whatapsql 사용 방식`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `gorm은 공식 지원하는 sqlite, mysql, postgres, sqlserver 외에도 dialect interface 기반으로 작성된 dirver에 대해서 호환 가능합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `관련 링크 : `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://gorm.io/docs/write_driver.html"
    }, `gorm driver`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "net/http"
  "github.com/whatap/go-api/instrumentation/database/sql/whatapsql"
  "github.com/whatap/go-api/trace"
  "gorm.io/driver/mysql"
  "gorm.io/gorm"
)

func main() {
  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  http.HandleFunc("/WhatapDriverTest", func(w http.ResponseWriter, r *http.Request) {
    // Context를 생성합니다.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // whatapsql driver로 db connection을 생성합니다.
    dbConn, err := whatapsql.OpenContext(ctx, "mysql", dataSource)
    
    // 기 생성된 connection을 통해 gorm에 연결합니다.
    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})
    if err != nil {
      panic("Db 연결에 실패하였습니다.")
    }
    
    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/go-orm/gorm"
    }, `참조 예제`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "githubcomjinzhugorm-라이브러리-지원"
    }, `github.com/jinzhu/gorm 라이브러리 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `gorm v1 프레임워크를 통해 처리되는 DB Connection 및 SQL을 추적합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "whatapgorm-사용-방식-1"
    }, `whatapgorm 사용 방식`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `gorm.Open`), ` 함수 대신에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatapgorm.OpenWithContext`), ` 함수를 사용합니다. 전달하는 context는 내부에 whatap TraceCtx를 포함해야 하며 trace 패키지의 Start 함수를 통해 생성 할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "net/http"

  "github.com/whatap/go-api/instrumentation/github.com/go-gorm/gorm/whatapgorm"
  "github.com/whatap/go-api/trace"
  _ "github.com/mattn/go-sqlite3"
  "github.com/jinzhu/gorm"
)

func main() {
  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  http.HandleFunc("/InsertAndDelete", func(w http.ResponseWriter, r *http.Request) {
    // Context를 생성합니다.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // whatapgorm을 통해 DB를 연결합니다.
    db, err := whatapgorm.OpenWithContext(ctx, "sqlite3", "test.db")
    defer db.Close()
    if err != nil {
      trace.Error(ctx, err)
      panic("Gorm Open Fail")
    }

    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }

    db.Unscoped().Delete(Product{}, "Code >= ? AND Code < ?", 0, 100)
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "whatapsql-사용-방식-1"
    }, `whatapsql 사용 방식`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `gorm은 공식 지원하는 sqlite, mysql, postgres, sqlserver 외에도 dialect interface 기반으로 작성된 dirver에 대해서 호환 가능합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `관련 링크 : `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://v1.gorm.io/docs/dialects.html"
    }, `gorm driver`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "net/http"
  "github.com/whatap/go-api/instrumentation/database/sql/whatapsql"
  "github.com/whatap/go-api/trace"
  "github.com/jinzhu/gorm"
_ "github.com/go-sql-driver/mysql"
)

func main() {
  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  http.HandleFunc("/WhatapDriverTest", func(w http.ResponseWriter, r *http.Request) {
    // Context를 생성합니다.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // whatapsql driver로 db connection을 생성합니다.
    var conn gorm.SQLCommon
    var err error
    conn, err = whatapsql.OpenContext(ctx, "mysql", dataSource)
    if err != nil {
      trace.Error(ctx, err)
      panic("Whatapsql Open Fail")
    }
    
    // 기 생성된 connection을 통해 gorm에 연결합니다.
    db, err := gorm.Open("mysql", conn)
    if err != nil {
      trace.Error(ctx, err)
      panic("Gorm Open Fail")
    }
    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/jinzhu/gorm"
    }, `참조 예제`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "githubcomgomoduleredigo-라이브러리-지원"
    }, `github.com/gomodule/redigo 라이브러리 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `redigo 프레임워크를 통해 redis에 전달되는 명령을 추적합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `redis.Dial`), ` 대신에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `whatapredigo.DialContext`), `를 함수를 사용합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "context"
  "net/http"

  "github.com/gomodule/redigo/redis"
  "github.com/whatap/go-api/instrumentation/github.com/gomodule/redigo/whatapredigo"
  "github.com/whatap/go-api/trace"
)

func main() {
  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  http.HandleFunc("/SetAndGetWithDialContext", func(w http.ResponseWriter, r *http.Request) {
    // Context를 생성합니다.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // whtapredigo를 통해 redis connection을 생성합니다.
    conn, err := whatapredigo.DialContext(ctx, "tcp", "127.0.0.1:6379")
    if err != nil {
      trace.Error(ctx, err)
      return
    }
    defer conn.Close()

    _, err = conn.Do("SET", "DataKey", "DataValue")
    if err != nil {
      trace.Error(ctx, err)
      return
    }

    data, err := redis.Bytes(conn.Do("GET", "DataKey"))
    if err != nil {
      trace.Error(ctx, err)
      return
    }
  })
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/gomodule/redigo"
    }, `참조 예제`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "githubcomshopifysarama-라이브러리-지원"
    }, `github.com/shopify/sarama 라이브러리 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `sarama 프레임워크를 통해서 처리되는 kafka produce, consume 이벤트를 추적합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "async-producer-추적"
    }, `async producer 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `whatapsarama의 Interceptor를 통해 async producer 정보를 추적합니다. Producer Message 생성시 Ctx 관련 정보를 Metadata를 통해 전달하면 Multi Transaction으로 연결 됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "context"
  "net/http"
  "github.com/Shopify/sarama"
  "github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama"
  "github.com/whatap/go-api/trace"
)

func main() {
  config := sarama.NewConfig()
  brokers := []string{"127.0.0.1:9092"} //config kafka broker IP/Port

  // whatapsarama의 인터럽트를 config에 등록합니다.
  interceptor := whatapsarama.Interceptor{Brokers: brokers}
  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}

  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  // Prdoducer 생성시 config를 전달합니다.
  producer, err := sarama.NewAsyncProducer(brokers, config)
  consumerOffset := sarama.OffsetOldest
  if err != nil {
    panic(err)
  }
  defer func() {
    if err := producer.Close(); err != nil {
      panic(err)
    }
  }()

  http.HandleFunc("/AsyncProduceInput", func(w http.ResponseWriter, r *http.Request) {
    ctx, _ := trace.StartWithRequest(r)
    defer func() {
      trace.End(ctx, nil)
    }()
    msg := &sarama.ProducerMessage{
      Topic:    "tmp-topic",
      Key:      sarama.StringEncoder("Data Key"),
      Value:    sarama.StringEncoder("Data Value"),
      Metadata: trace.GetMTrace(ctx),
    }
    producer.Input() <- msg //error check

  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "consumer-추적"
    }, `consumer 추적`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `whatapsarama의 Interceptor를 통해 consumer 정보를 추적합니다. Produce에서 전달된 Message 기준으로 Multi Transaction으로 연결 됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Install guide'",
        "title": "'Install",
        "guide'": true
    }, `import (
  "context"
  "flag"
  "fmt"
  "net/http"
  "text/template"

  "github.com/Shopify/sarama"
  "github.com/whatap/go-api/instrumentation/github.com/Shopify/sarama/whatapsarama"
  "github.com/whatap/go-api/trace"
)

func main() {
  config := sarama.NewConfig()
  brokers := []string{"127.0.0.1:9092"} //config kafka broker IP/Port

  // whatapsarama의 인터럽트를 config에 등록합니다.
  interceptor := whatapsarama.Interceptor{Brokers: brokers}
  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}

  // consume 1회당1tx
  // Consumer 생성시 config를 전달합니다.
  consumer, err := sarama.NewConsumer(brokers, config)
  topic := "tmp-topic"

  partitions, _ := consumer.Partitions(topic)
  consume, _ := consumer.ConsumePartition(topic, partitions[0], consumerOffset)

  if consume == nil {
    fmt.Println("consume nil")
    return
  }

  go func() {
    for {
      select {
      case msg := <-consume.Messages():
        fmt.Println(msg)
      case consumerError := <-consume.Errors():
        fmt.Println("error", consumerError)
        return
      }
    }
  }()
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/shopify/sarama"
    }, `참조 예제`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);