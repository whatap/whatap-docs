"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[39474],{

/***/ 3905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   kt: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);


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

/***/ 78235:
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
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/golang/golang-0_1_12",
    "id": "release-notes/golang/golang-0_1_12",
    "title": "Go Agent v0.1.12",
    "description": "Release date: 2022-08-02",
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/golang/golang-0.1.12.mdx",
    "sourceDirName": "release-notes/golang",
    "slug": "/release-notes/golang/golang-0_1_12",
    "permalink": "/en/release-notes/golang/golang-0_1_12",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/golang/golang-0.1.12.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "golang-0_1_12",
        "title": "Go Agent v0.1.12",
        "toc_max_heading_level": 2
    },
    "sidebar": "releaseSidebar",
    "previous": {
        "title": "Go Agent v0.1.13",
        "permalink": "/en/release-notes/golang/golang-0_1_13"
    },
    "next": {
        "title": "Go Agent v0.1.11",
        "permalink": "/en/release-notes/golang/golang-0_1_11"
    }
};
const assets = {};
const toc = [
    {
        value: 'Beta - update',
        id: 'beta---update',
        level: 2
    },
    {
        value: 'The Alpine Linux is supported.',
        id: 'the-alpine-linux-is-supported',
        level: 3
    },
    {
        value: 'Installation guide',
        id: 'installation-guide',
        level: 4
    },
    {
        value: 'Running the whatap-agent',
        id: 'running-the-whatap-agent',
        level: 4
    },
    {
        value: 'Supporting the github.com/go-chi/chi library',
        id: 'supporting-the-githubcomgo-chichi-library',
        level: 3
    },
    {
        value: 'Installation guide',
        id: 'installation-guide-1',
        level: 4
    },
    {
        value: 'Supporting the github.com/go-gorm/gorm library',
        id: 'supporting-the-githubcomgo-gormgorm-library',
        level: 3
    },
    {
        value: 'How to use the whatapgorm',
        id: 'how-to-use-the-whatapgorm',
        level: 4
    },
    {
        value: 'How to use the whatapsql',
        id: 'how-to-use-the-whatapsql',
        level: 4
    },
    {
        value: 'Supporting the github.com/jinzhu/gorm library',
        id: 'supporting-the-githubcomjinzhugorm-library',
        level: 3
    },
    {
        value: 'How to use the whatapgorm',
        id: 'how-to-use-the-whatapgorm-1',
        level: 4
    },
    {
        value: 'How to use the whatapsql',
        id: 'how-to-use-the-whatapsql-1',
        level: 4
    },
    {
        value: 'Supporting the github.com/gomodule/redigo library',
        id: 'supporting-the-githubcomgomoduleredigo-library',
        level: 3
    },
    {
        value: 'Supporting the github.com/shopify/sarama library',
        id: 'supporting-the-githubcomshopifysarama-library',
        level: 3
    },
    {
        value: 'Tracing the async producer',
        id: 'tracing-the-async-producer',
        level: 4
    },
    {
        value: 'Tracing the consumer',
        id: 'tracing-the-consumer',
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Release date: 2022-08-02`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "beta---update"
    }, `Beta - update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "the-alpine-linux-is-supported"
    }, `The Alpine Linux is supported.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "installation-guide"
    }, `Installation guide`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `[whatap-agent.tar.gz]`, `After downloading the file (`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz"
    }, `https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz`), `), unzip the file based on the "/" directory. Create the monitoring file in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `/usr/whatap/agent`), ` path.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz
tar -xvzf whatap-agent.tar.gz -C /
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "running-the-whatap-agent"
    }, `Running the whatap-agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `/usr/whatap/agent/whatap-agent 
    Default restart
    Command start, stop, restart, version

## Checking the version
# /usr/whatap/agent/whatap-agent version
0.8.5.20201209

## Checking the execution
# ps -elf | grep whatap
  103 root      0:05 ./whatap_agent_static -t=4
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "supporting-the-githubcomgo-chichi-library"
    }, `Supporting the github.com/go-chi/chi library`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the web transactions in the chi framework. Through the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Use`), ` function, register and trace the middleware.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "installation-guide-1"
    }, `Installation guide`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
  
  // Register the middleware of whatapchi.
  r.Use(whatapchi.Middleware)
  
  r.Get("/", func(w http.ResponseWriter, r *http.Request) {
      fmt.Println("Response -", r.Response)
})
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/go-chi/chi"
    }, `Example reference`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "supporting-the-githubcomgo-gormgorm-library"
    }, `Supporting the github.com/go-gorm/gorm library`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the DB connection and SQLs processed through the gorm v2 framework.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-to-use-the-whatapgorm"
    }, `How to use the whatapgorm`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Instead of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `gorm.Open`), ` function, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatapgorm.OpenWithContext`), ` function is used. The context to be passed must include whatap TraceCtx, and can be created through the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Start`), ` function of the trace package.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Create the context.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // Connect the DB through whatapgorm.
    db, err := whatapgorm.OpenWithContext(sqlite.Open("test.db"), &gorm.Config{}, ctx)
    if err != nil {
      panic("Db connection failed.")
    }

    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }

    db.Unscoped().Delete(&Product{}, "Code >= ? AND Code < ?", 0, 100)
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-to-use-the-whatapsql"
    }, `How to use the whatapsql`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In addition to officially supported sqlite, mysql, postgres, and sqlserver, the gorm is compatible with the drivers written based on the dialect interface. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Related link: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://gorm.io/docs/write_driver.html"
    }, `gorm driver`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Create the context.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // Create the DB connection via the whatapsql driver.
    dbConn, err := whatapsql.OpenContext(ctx, "mysql", dataSource)
    
    // Connect gorm through the created connection.
    db, err := gorm.Open(mysql.New(mysql.Config{Conn: dbConn}), &gorm.Config{})
    if err != nil {
      panic("DB connection failed.")
    }
    
    for i := 0; i < 100; i++ {
      db.Create(&Product{Code: i, Price: i * 100})
    }
  })

  _ = http.ListenAndServe(fmt.Sprintf(":%d", port), nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/go-orm/gorm"
    }, `Reference example`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "supporting-the-githubcomjinzhugorm-library"
    }, `Supporting the github.com/jinzhu/gorm library`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the DB connection and SQLs processed through the gorm v1 framework.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-to-use-the-whatapgorm-1"
    }, `How to use the whatapgorm`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Instead of the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `gorm.Open`), ` function, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatapgorm.OpenWithContext`), ` function is used. The context to be passed must include whatap TraceCtx, and can be created through the Start function of the trace package.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Create the context.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // Connect the DB via whatapgorm.
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "how-to-use-the-whatapsql-1"
    }, `How to use the whatapsql`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In addition to officially supported sqlite, mysql, postgres, and sqlserver, the gorm is compatible with the drivers written based on the dialect interface. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Related link: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://v1.gorm.io/docs/dialects.html"
    }, `gorm driver`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Create the context.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // Create the DB connection via the whatapsql driver.
    var conn gorm.SQLCommon
    var err error
    conn, err = whatapsql.OpenContext(ctx, "mysql", dataSource)
    if err != nil {
      trace.Error(ctx, err)
      panic("Whatapsql Open Fail")
    }
    
    // Connect gorm via the created connection.
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/jinzhu/gorm"
    }, `Reference example`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "supporting-the-githubcomgomoduleredigo-library"
    }, `Supporting the github.com/gomodule/redigo library`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces commands passed to Redis via the redigo framework. Instead of `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `redis.Dial`), `, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatapredigo.DialContext`), ` function is used.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Create the context.
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)

    // Create the Redis connection via the whtapredigo.
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/gomodule/redigo"
    }, `Reference example`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "supporting-the-githubcomshopifysarama-library"
    }, `Supporting the github.com/shopify/sarama library`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the kafka produce and consume events processed through the sarama framework.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "tracing-the-async-producer"
    }, `Tracing the async producer`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the async producer data through the whatapsarama's interceptor. When generating the producer message, if CTX-related data is passed through metadata, it is connected to the multi-transaction.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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

  // Register the interrupt of whatapsarama in the config.
  interceptor := whatapsarama.Interceptor{Brokers: brokers}
  config.Producer.Interceptors = []sarama.ProducerInterceptor{&interceptor}

  whatapConfig := make(map[string]string)
  trace.Init(whatapConfig)
  defer trace.Shutdown()

  // The config is delivered upon prdoducer creation.
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "tracing-the-consumer"
    }, `Tracing the consumer`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `It traces the consumer data through the whatapsarama's interceptor. Based on the message delivered from the producer, it is connected to the multi-transaction.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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

  // Register the interrupt of whatapsarama in the config.
  interceptor := whatapsarama.Interceptor{Brokers: brokers}
  config.Consumer.Interceptors = []sarama.ConsumerInterceptor{&interceptor}

  // 1 transaction per consumption
  // The config is delivered when creating a consumer.
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example/tree/main/github.com/shopify/sarama"
    }, `Reference example`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);