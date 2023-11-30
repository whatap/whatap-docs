"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[49657],{

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

/***/ 18774:
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
    id: 'api-guide',
    title: 'APIガイド',
    description: 'Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。',
    tags: [
        'Go',
        'APIガイド',
        'ライブラリ'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "golang/api-guide",
    "id": "golang/api-guide",
    "title": "APIガイド",
    "description": "Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/golang/api-guide.mdx",
    "sourceDirName": "golang",
    "slug": "/golang/api-guide",
    "permalink": "/ja/golang/api-guide",
    "draft": false,
    "editUrl": "undefined/docs/golang/api-guide.mdx",
    "tags": [
        {
            "label": "Go",
            "permalink": "/ja/tags/go"
        },
        {
            "label": "APIガイド",
            "permalink": "/ja/tags/apiガイド"
        },
        {
            "label": "ライブラリ",
            "permalink": "/ja/tags/ライブラリ"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "api-guide",
        "title": "APIガイド",
        "description": "Goライブラリーを利用して、WhaTapエージェントにモニタリングするデータを送信できます。",
        "tags": [
            "Go",
            "APIガイド",
            "ライブラリ"
        ]
    },
    "sidebar": "goSidebar",
    "previous": {
        "title": "Docker環境インストール",
        "permalink": "/ja/golang/install-agent-docker"
    },
    "next": {
        "title": "インストールチェックリスト",
        "permalink": "/ja/golang/install-check"
    }
};
const assets = {};
const toc = [
    {
        value: 'ダウンロード',
        id: 'ダウンロード',
        level: 2
    },
    {
        value: 'はじめに',
        id: 'はじめに',
        level: 2
    },
    {
        value: 'init、shutdown',
        id: 'initshutdown',
        level: 3
    },
    {
        value: 'Context',
        id: 'context',
        level: 3
    },
    {
        value: 'トランザクションの作成',
        id: 'トランザクションの作成',
        level: 4
    },
    {
        value: 'トランザクションのトレース',
        id: 'トランザクションのトレース',
        level: 2
    },
    {
        value: 'Webトランザクション追跡',
        id: 'webトランザクション追跡',
        level: 3
    },
    {
        value: 'ノーマルトランザクション追跡',
        id: 'ノーマルトランザクション追跡',
        level: 3
    },
    {
        value: 'API',
        id: 'api',
        level: 3
    },
    {
        value: 'DB接続およびSQL追跡',
        id: 'db接続およびsql追跡',
        level: 2
    },
    {
        value: 'DB Connection',
        id: 'db-connection',
        level: 3
    },
    {
        value: 'database/sqlパッケージの設定',
        id: 'databasesqlパッケージの設定',
        level: 3
    },
    {
        value: 'API',
        id: 'api-1',
        level: 3
    },
    {
        value: 'HTTPリクエスト追跡',
        id: 'httpリクエスト追跡',
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
        value: 'メソッド追跡',
        id: 'メソッド追跡',
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `この文書で記述されている例題コードは、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://github.com/whatap/go-api-example"
    }, `github.com/whatap/go-api-example`), `保存場所で確認できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "ダウンロード"
    }, `ダウンロード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `パッケージおよび関連従属性(dependency)をダウンロードしてください。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `go get github.com/whatap/go-api
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "はじめに"
    }, `はじめに`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "initshutdown"
    }, `init、shutdown`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.Init()`), `メソッドを使用してモニタリングモジュールを起動してください。 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `defer trace.Shutdown()`), `でモニタリング終了を保証します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `map[string]string`), `形式をアプリケーションの初期に設定できます。 または、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `whatap.conf`), `ファイルに設定できます。 エージェントとTCP接続が正常に行われてこそ、性能情報をWhaTap収集サーバーに送ることができます。 デフォルト接続情報として`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `127.0.0.1:6600`), `を通じてTCPで通信します。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `接続情報を変更するには、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Init`), `メソッドに設定を伝えるか`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "p"
    }, `whatap.conf`), ` ファイルに設定し、アプリケーションを再起動してください。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `m := make(map[string]string)
m["net_ipc_host"] = "127.0.0.1"
m["net_ipc_port"] = "6601"

trace.Init(m)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `accesskey={アクセスキー}
whatap.server.host={収集サーバーIPアドレス}
net_ipc_host=127.0.0.1
net_ipc_host=6600
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "context"
    }, `Context`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エージェントは、性能情報をトランザクション単位で収集します。 トランザクションの区分は、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap context(trace.TraceCtx)`), `が含まれた`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `context`), `を基準にします。 トランザクションに連携されていない性能情報は、収集を無視するか、統計情報でのみ収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "トランザクションの作成"
    }, `トランザクションの作成`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `go-api/trace`), `モジュールの`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Start`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `StartWithReqest`), `メソッドで`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap context`), `を作成します。 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `context`), `内部に`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap`), `キーで`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `TraceCtx`), `情報を設定します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `var traceCtx *TraceCtx
traceCtx.Txid = keygen.Next()
ctx = context.WithValue(ctx, "whatap", traceCtx)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `トランザクション、SQL、DBConnection、外部HTTP request、一般メソッド追跡などのAPIでの開始時点は必ず`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap`), `キーで`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `TraceCtx`), `個体が存在する`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `Context`), `が必要です。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "トランザクションのトレース"
    }, `トランザクションのトレース`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Webリクエストと応答までのトランザクションと一般的なタスク単位のトランザクションの両方を追跡します。 開始および終了のメソッドで構成されています。 一つのトランザクションとして認識され、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `ヒートマップ`)), `ウィゼットで詳細やTPS、応答時間、平均応答時間などの統計指標を確認することができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `設定を通じてHTTPパラメータ、HTTPヘッダー情報を収集できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "webトランザクション追跡"
    }, `Webトランザクション追跡`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
    ctx, _ := trace.StartWithRequest(r)
    defer trace.End(ctx, nil)
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.Func()`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.HandlerFunc()`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `net/http`), `のHandle、HandFuncをラッピングしたメソッド`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.StartWithRequest`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.End`), `を同一に進行します。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `ウェブトランザクションの名前は、RequestURIで設定できます。`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.Step()`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `ユーザーが送る文字列をプロファイル情報に出力する機能を提供します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.HandleFunc("/wrapHandleFunc", trace.Func(func(w http.ResponseWriter, r *http.Request) {
    ...
}))
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `http.Handle("/wrapHandleFunc1", trace.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    ...
}))
`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "ノーマルトランザクション追跡"
    }, `ノーマルトランザクション追跡`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "api"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, name string) (context.Context, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(ctx context.Context, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithRequest(r *http.Request) (context.Context, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Step(ctx context.Context, title, message string, elapsed, value int) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func HandlerFunc(handler func(http.ResponseWriter, *http.Request)) http.HandlerFunc
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Func(handler func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "db接続およびsql追跡"
    }, `DB接続およびSQL追跡`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `DB接続情報、sql構文、errorおよびprepared構文のためのパラメータをAPIに送ると、実行時間およびエラー事項を収集できます。 SQL構文は最大32KBまで収集します。 SQL Prepared構文のためのパラメータは最大20個、それぞれ256byteまで収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "db-connection"
    }, `DB Connection`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    
    // Prepared Statement 作成
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "databasesqlパッケージの設定"
    }, `database/sqlパッケージの設定`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `database/sqlパッケージの`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `sql.Open`), `メソッドの代わりに、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatapsql.OpenContext`), `メソッドを使います。 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `PrepareContext`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `QueryContext`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `ExecContext`), `など`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `context`), `を送るメソッドで使用することをお勧めします。 伝達する`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `context`), `は`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `trace.Start()`), `を通じて、WhaTap TraceCtx情報が必要です。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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

    // whataphttp.Func内部でwhatap TraceCtxを作成します。
    http.HandleFunc("/query", whataphttp.Func(func(w http.ResponseWriter, r *http.Request){
      ctx := r.Context()
    
      // Use WhaTap Driver. whatap의 TraceCtxがあるcontextを送ります。
      db, err := whatapsql.OpenContext(ctx, "mysql", dataSource)
      if err != nil {
        fmt.Println("Error whatapsql.Open ", err)
        return
      }
      defer db.Close()
      
      ...
      query := "select id, subject from tbl_faq limit 10"
      
      // whatap TraceCtxがあるcontextを送ります。
      if rows, err := db.QueryContext(ctx, query); err == nil {
        ...
      }
    }
    ...
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "api-1"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, dbhost, sql string) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartOpen(ctx context.Context, dbhost string) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(sqlCtx *SqlCtx, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithParam(ctx context.Context, dbhost, sql, param ...interface{}) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func StartWithParamArray(ctx context.Context, dbhost, sql string, param []interface{}) (*SqlCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Trace(ctx context.Context, dbhost, sql, param string, elapsed int, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "httpリクエスト追跡"
    }, `HTTPリクエスト追跡`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "http-transport-roundtripper"
    }, `http transport RoundTripper`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `RoundTripperを設定できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
    // Use WhaTap RoundTripper. whatapのTraceCtxがあるcontextを送ります。   
    client.Transport = whataphttp.NewRoundTrip(ctx, http.DefaultTransport)        
    resp, err := client.Get(callUrl)  
    if err != nil {      
      ...  
    }  
    defer resp.Body.Close()  
    
    ...
    
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "api-2"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, url string) (*HttpcCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(httpcCtx *HttpcCtx, status int, reason string, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Trace(ctx context.Context, host string, port int, url string, elapsed int, status int, reason string, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "メソッド追跡"
    }, `メソッド追跡`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `ユーザーメソッドまたは希望する区間の実行時間を測定するためのAPIです。 メソッド実行する前後でAPIを設定できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "api-3"
    }, `API`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func Start(ctx context.Context, name string) (*MethodCtx, error)
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-go",
        "metastring": "title='Go'",
        "title": "'Go'"
    }, `func End(methodCtx *MethodCtx, err error) error
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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