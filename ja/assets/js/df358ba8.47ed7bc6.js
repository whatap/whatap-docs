"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[22599],{

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

/***/ 17632:
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
    id: 'service-1_106_x',
    title: 'Service 1.106.X',
    toc_max_heading_level: 2,
    pagination_next: 'release-notes/service/service-1_104_x'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/service/service-1_106_x",
    "id": "release-notes/service/service-1_106_x",
    "title": "Service 1.106.X",
    "description": "Service 1.106.18",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/service/service-1.106.x.mdx",
    "sourceDirName": "release-notes/service",
    "slug": "/release-notes/service/service-1_106_x",
    "permalink": "/ja/release-notes/service/service-1_106_x",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/service/service-1.106.x.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "service-1_106_x",
        "title": "Service 1.106.X",
        "toc_max_heading_level": 2,
        "pagination_next": "release-notes/service/service-1_104_x"
    },
    "sidebar": "releaseSidebar",
    "previous": {
        "title": "Service 1.108.x",
        "permalink": "/ja/release-notes/service/service-1_108_x"
    },
    "next": {
        "title": "Service 1.104.X",
        "permalink": "/ja/release-notes/service/service-1_104_x"
    }
};
const assets = {};
const toc = [
    {
        value: 'Service 1.106.18',
        id: 'service-110618',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通',
        level: 3
    },
    {
        value: '利用内訳',
        id: '利用内訳',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database',
        level: 3
    },
    {
        value: 'MySQL V1',
        id: 'mysql-v1',
        level: 4
    },
    {
        value: 'Service 1.106.17',
        id: 'service-110617',
        level: 2
    },
    {
        value: '<code>Application</code>',
        id: 'application',
        level: 3
    },
    {
        value: 'Service 1.106.16',
        id: 'service-110616',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-1',
        level: 3
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード',
        level: 4
    },
    {
        value: 'Service 1.106.15',
        id: 'service-110615',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-2',
        level: 3
    },
    {
        value: 'Service 1.106.14',
        id: 'service-110614',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-3',
        level: 3
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-1',
        level: 4
    },
    {
        value: 'Service 1.106.13',
        id: 'service-110613',
        level: 2
    },
    {
        value: '<code>Server</code>',
        id: 'server',
        level: 3
    },
    {
        value: 'Service 1.106.12',
        id: 'service-110612',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-4',
        level: 3
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-2',
        level: 4
    },
    {
        value: 'Service 1.106.11',
        id: 'service-110611',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-5',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-1',
        level: 3
    },
    {
        value: 'Service 1.106.10',
        id: 'service-110610',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database-1',
        level: 3
    },
    {
        value: 'Cubrid',
        id: 'cubrid',
        level: 4
    },
    {
        value: 'Service 1.106.09',
        id: 'service-110609',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-6',
        level: 3
    },
    {
        value: 'プロジェクトリスト',
        id: 'プロジェクトリスト',
        level: 4
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-3',
        level: 4
    },
    {
        value: 'Service 1.106.08',
        id: 'service-110608',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-7',
        level: 3
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-4',
        level: 4
    },
    {
        value: 'Service 1.106.07',
        id: 'service-110607',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database-2',
        level: 3
    },
    {
        value: 'MongoDB',
        id: 'mongodb',
        level: 4
    },
    {
        value: 'Service 1.106.06',
        id: 'service-110606',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-8',
        level: 3
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-5',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-2',
        level: 3
    },
    {
        value: 'アプリケーションダッシュボード',
        id: 'アプリケーションダッシュボード',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database-3',
        level: 3
    },
    {
        value: 'MySQL V2',
        id: 'mysql-v2',
        level: 4
    },
    {
        value: 'Service 1.106.05',
        id: 'service-110605',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-9',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-3',
        level: 3
    },
    {
        value: 'Service 1.106.04',
        id: 'service-110604',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database-4',
        level: 3
    },
    {
        value: 'MySQL',
        id: 'mysql',
        level: 4
    },
    {
        value: 'Service 1.106.03',
        id: 'service-110603',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database-5',
        level: 3
    },
    {
        value: 'Service 1.106.02',
        id: 'service-110602',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-10',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-4',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log',
        level: 3
    },
    {
        value: 'Service 1.106.00',
        id: 'service-110600',
        level: 2
    },
    {
        value: '<code>共通</code>',
        id: '共通-11',
        level: 3
    },
    {
        value: 'User Interface (UI)',
        id: 'user-interface-ui',
        level: 4
    },
    {
        value: 'ダッシュボード',
        id: 'ダッシュボード-6',
        level: 4
    },
    {
        value: 'Flexボード',
        id: 'flexボード',
        level: 4
    },
    {
        value: 'アラート通知',
        id: 'アラート通知',
        level: 4
    },
    {
        value: '管理',
        id: '管理',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-5',
        level: 3
    },
    {
        value: '共通',
        id: '共通-12',
        level: 4
    },
    {
        value: '.NET',
        id: 'net',
        level: 4
    },
    {
        value: '<code>Server</code>',
        id: 'server-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container',
        level: 3
    },
    {
        value: '<code>Database</code>',
        id: 'database-6',
        level: 3
    },
    {
        value: 'V2共通',
        id: 'v2共通',
        level: 4
    },
    {
        value: 'PostgreSQL',
        id: 'postgresql',
        level: 4
    },
    {
        value: 'MySQL',
        id: 'mysql-1',
        level: 4
    },
    {
        value: '<code>URL</code>',
        id: 'url',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log-1',
        level: 3
    },
    {
        value: 'ライブテール',
        id: 'ライブテール',
        level: 4
    },
    {
        value: 'ログ検索',
        id: 'ログ検索',
        level: 4
    },
    {
        value: 'ログイベント',
        id: 'ログイベント',
        level: 4
    },
    {
        value: 'ログの設定',
        id: 'ログの設定',
        level: 4
    },
    {
        value: '<code>Browser</code>',
        id: 'browser',
        level: 3
    },
    {
        value: '<code>実験室</code>',
        id: '実験室',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Status = makeShortcode("Status");
const UI = makeShortcode("UI");
const LinkImage = makeShortcode("LinkImage");
const Link = makeShortcode("Link");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110618"
    }, `Service 1.106.18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月22日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "利用内訳"
    }, `利用内訳`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "決済手段が国内クレジットカードに設定された場合", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), "から", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "有料に転換"), "ボタンをクリックすると、モーダルの内容が見えないエラーを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql-v1"
    }, `MySQL V1`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スロークエリ"), "メニューからチャートドラッグすると、下段のテーブルに重複したデータが表示される現象を修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110617"
    }, `Service 1.106.17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月22日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アプリケーション"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスパフォーマンス分析"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェント状態"), "タブで空のデータに対する例外処理を追加")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110616"
    }, `Service 1.106.16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月21日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `トランザクション分析`)), `ウィンドウで次の内容を修正します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "レコード要約"), "タブの表示データに", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "原本URL"), "、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "URL/TX"), "追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "トランザクション一覧のカラム設定に", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "原本URL"), "、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "URL/TX"), "追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "テーブルビュー"), "、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ツリービュー"), "タブのトランザクション要約情報に", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "クライアントIP"), "追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "レコード要約"), "タブで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェント名"), "クリックすると", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "環境変数"), "メニューの該当エージェント情報の表示"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "テーブルビュー"), "タブのカラムの英訳を修正", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Memory Accumulation (byte) → MemAllocAcc (byte)`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `CPU Accumulation (ms) → CpuTimeAcc (ms)`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "カラム選択"), "機能のUI のスタイルを修正"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110615"
    }, `Service 1.106.15`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月18日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "ヘッダーを含むスクロールが発生する問題の修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110614"
    }, `Service 1.106.14`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月18日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-1"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "ウィンドウのトランザクション 一覧から", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェント名"), "カラムが表示されないバグを修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110613"
    }, `Service 1.106.13`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月17日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "リソースボード"), "メニューからエージェントステータスウィジェットに危険、アラートステータスが区分されて表示されるよう修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "サーバーリスト"), "メニューからディスク、ネットワークフィルタで文字入力時に画面点滅現象の改善"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "サーバーリスト"), "メニューからディスク、ネットワークフィルタ値を入力した後、リフレッシュ時にフィルタが適用されないバグを修正"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110612"
    }, `Service 1.106.12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月10日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-2"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "ウィンドウから", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "テーブル"), "タブのSQLステップ詳細表示モダルで変数復号化パスワード入力が見えないバグを修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110611"
    }, `Service 1.106.11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月10日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "次のメニューパスで選択した組織が非活性化される現象の修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `MySQLプロジェクト>`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, `管理`), `>`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, `エージェントのインストール`), `メニューからプロジェクトリストに移動する時`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `MySQLプロジェクト>`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, `管理`), `>`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, `エージェントのインストール`), `メニューでサイドメニューのグループをクリックする時`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統計"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション"), " メニューからトランザクション検索またはトランザクショントレース項目をクリックすると、選択した組織が非活性化する現象を修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110610"
    }, `Service 1.106.10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月8日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "cubrid"
    }, `Cubrid`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "管理"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェントのインストール"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "WhaTapデータベースエージェントのダウンロード"), "セクションで次の内容を変更します。", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `エージェントファイルダウンロードコマンド`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `whatap.confファイル内のインストールコマンド`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `ガイド文書リンクの追加`)))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110609"
    }, `Service 1.106.09`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月8日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "プロジェクトリスト"
    }, `プロジェクトリスト`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "プロジェクトリスト"), "で拡張カードビューのときに表示される", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アプリケーション"), "テキストの日本語が短くなる現象を修正するために用語修正(アプリケーション → アプリ)"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-3"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `トランザクション分析`)), `ウィンドウで次の内容を修正します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flexボード"), "のフィルター機能を活性化すると", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "画面が表示されないバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "テーブル"), "タブの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "SQLステップ詳細を見る"), "モダルでSQL変数復号化が作動しないバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "トランザクション一覧の", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "No"), "カラム項目の設定を修正できないように変更"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110608"
    }, `Service 1.106.08`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月7日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-4"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "ウィンドウの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "テーブルビュー"), "タブで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "内容"), "カラムに該当するトレース情報タイプの表現法を修正", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `変更前:description情報を一行で表示`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `変更後:`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `description情報を最大4行まで表示`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `該当情報をクリックすると、ステップの全体情報モーダルで表示`))))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110607"
    }, `Service 1.106.07`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月4日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mongodb"
    }, `MongoDB`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスリスト"), "メニューのテーブルからデータベース項目が漏れる現象を修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110606"
    }, `Service 1.106.06`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月3日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-8"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-5"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `トランザクション分析`)), `ウィンドウで次の内容を修正します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "Container"), "プラットフォームのマスタープロジェクトから進入する際に、マルチトランザクション情報が表示されないバグの修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "マルチトランザクション"), "タブ>", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "チャート表示"), "のプロジェクトフィルター機能の誤作動を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "ランザクション一覧のトランザクションID、マルチトランザクションIDカラム整列誤作動を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ツリービュー"), "タブのボタン説明ツールチップ翻訳漏れの修正", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Display Time`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `시간 표시`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Hide Time`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `시간 숨기기`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Display Time Bar`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `시간바 표시`)))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "トランザクション一覧の検索機能の対象を変更", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `変更前:検索対象カラムの指定が必要`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `変更後:画面に表示されるカラム`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "アプリケーションダッシュボード"
    }, `アプリケーションダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "機能改編に対するガイドを追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql-v2"
    }, `MySQL V2`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Default(rds)"), "プリセットに含まれているメモリ余分(Cloudwatch)ウィジェットのメトリック変更(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "FreeStorageSpace"), " → ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "FreeableMemory"), ")")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110605"
    }, `Service 1.106.05`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月2日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-9"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "管理>プロジェクトメンバーメニューから", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "メンバー権限体系の改編を通知"), "メッセージウィンドウの削除")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統計/レポート"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統計"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "T"), "/", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "U"), "ボタン選択> ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トップスタックURL"), "/", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ユニークスタックURL"), "メニューから次の機能を修正します。"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "時間選択"), "オプション機能を最新バージョンに修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "データ照会期間を62日から3日に修正"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110604"
    }, `Service 1.106.04`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月2日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql"
    }, `MySQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "管理"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェントのインストール"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "モニタリング用アカウントの作成"), "セクションでテーブル情報を収集するための", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "grant"), "コマンド修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110603"
    }, `Service 1.106.03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年8月1日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スロークエリ"), "メニューからスロークエリ照会時に現れるホワイトアウト現象の修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110602"
    }, `Service 1.106.02`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年7月31日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-10"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "組織を選択した場合", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェントのインストール"), "メニューからプロジェクトリストに移動する際に選択した組織が解除される現象を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "分析"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スタック"), "メニューでトップスタックとユニークスタックの最大照会期間を62日から3日に修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "分析"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "性能推移"), "の最大照会期間を62日から31日に修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アラート通知"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント設定"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ログ"), "タブで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "複合ログイベント"), "を露出しないように修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "service-110600"
    }, `Service 1.106.00`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023年7月26日`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "共通-11"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `共通`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "user-interface-ui"
    }, `User Interface (UI)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "時間セレクターのエラーメッセージのテキストスタイルを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "プロジェクトリスト"), "メニューのサイズが調整できないバグの修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ダッシュボード-6"
    }, `ダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション分析"), "機能リニューアル"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(LinkImage, {
        img: "release/release-note-tx-new-feature.png",
        desc: "",
        className: "noneborder",
        mdxType: "LinkImage"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "flexボード"
    }, `Flexボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "統合", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flexボード"), "メニューでダッシュボードのすべてのプロジェクトに対する修正権限がなくても、共有ボタンを露出するように修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "画面の幅が小さくなり", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ヒートマップ"), "ウィジェットの幅が狭くなると、ボタンレイアウトがメニューから外れる現象を修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "アラート通知"
    }, `アラート通知`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント受信設定"), "メニューから", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ユーザー別イベント受信設定"), "セクションに折りたたみ/展開機能を追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント受信設定"), "メニューから3rdパーティープラグインのWebhook JSON追加フォームに", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "ユーザーヘッダー"), "(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "User-Heaer"), ") 機能の追加", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `ユーザーヘッダー`), `: key, value ペアで入力した情報をウェブフックで受信すると、ヘッダーで確認できます。 次は、ユーザーヘッダーのkey, valueを`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `User-Header-Key`), `,`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `TestValue`), `で入力した場合、ウェブフックの受信情報に関する例です。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-http",
        "metastring": "{8} title='example'",
        "{8}": true,
        "title": "'example'"
    }, `POST /test HTTP/1.1
Host: whatap.requestcatcher.com
Accept: text/plain, application/json, application/*+json, */*
Connection: keep-alive
Content-Length: 234
Content-Type: application/json
User-Agent: Java/17.0.7
User-Header-Key: Test-Value
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "3rdパーティープラグイン追加を完了した後、ウィンドウが閉じない問題を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アラート通知"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント設定"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "メトリクスイベント"), "タブでイベント追加時に", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "関連カテゴリ"), "項目を削除")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "管理"
    }, `管理`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "組織作成"), "メニューから日本語メッセージを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "プロジェクト作成メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Node.js"), ",", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Altibase"), "製品名の修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "application-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "共通-12"
    }, `共通`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクションマップ"), "メニューからチャートのデザイン変更", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `修正前`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `修正後`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "before",
        src: (__webpack_require__(79375)/* ["default"] */ .Z),
        width: "180",
        height: "158"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "after",
        src: (__webpack_require__(25098)/* ["default"] */ .Z),
        width: "186",
        height: "154"
    })))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクションマップ"), "メニューから通常のトランザクションとエラートランザクションが重なる場合、エラーが先に表示されるように改善"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アクティブトランザクション"), "メニューでテーブルの低速トランザクションと非常に低速なトランザクション表示の色を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "アプリケーションプロジェクトの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flexボード"), "メニューから", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "app_user"), "カテゴリー内", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "logbits"), "フィールドを使用する場合、MXQL作成ロジックから例外処理を追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統計/レポート"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統計"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "トランザクション"), "タブの一覧で", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "T"), "および", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "U"), "ボタン選択時に動作しなかったバグを修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "net"
    }, `.NET`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "New"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "分析"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スタック"), "メニュー追加、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Link, {
        to: "../../dotnet/analysis-apm",
        mdxType: "Link"
    }, "次の文書"), "を参照してください。"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "server-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "サーバープロジェクトに入力するときに、画面が表示されないバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "コンテナマップ"), "メニューの", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント"), "タブからログ権限チェックロジックを削除"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "コンテナマップ"), "メニューからイベントログのTagを非表示にするオプションを追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "コンテナマップ"), "メニューで断続的にホワイトアウトが発生するバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "管理"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エージェントの設定"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アプリケーションエージェントの設定"), "メニューで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Docker PHP"), "タブ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "モニタリングを開始する"), "項目のイメージが多国語の設定に従わず、韓国語のダッシュボードイメージを出力する現象を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "統合コンテナマップ"), "メニューを追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "コンテナマップ"), "メニューの詳細表示パネルでブロック数が多い場合、表記方式を変更", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "sample",
        src: (__webpack_require__(22274)/* ["default"] */ .Z),
        width: "479",
        height: "362"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "クラスタープロジェクトの場合", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "パフォーマンス要約"), "メニューの指標別グループタイトル表記の追加", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "sample",
        src: (__webpack_require__(2331)/* ["default"] */ .Z),
        width: "1280",
        height: "642"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "リソース"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ノード一覧"), "メニューで表示するコンテナ情報がない場合でもロードされているように見えるバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ログ"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ログ設定"), "メニューでのノードエージェントログ設定に対し、ユーザーの利便性のためにオプションを直接入力せず、ボタンクリックだけで適用されるように変更"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Deprecate"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アラート通知"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント設定"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "メトリクスイベント"), "タブでイベントを追加すると", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "関連プロジェクト"), "機能を削除")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "database-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "v2共通"
    }, `V2共通`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニューからアクティブセッションテーブル整列変更ステータスプリセット保存の追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニューでデータ更新時、並べ替え解除バグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニューでアクティブセッションテーブルの新しいウィンドウで表示を追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Flexボード"), "メニューでアクティブセッションテーブルウィジェット並べ替え変更ステータス保存の追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "プロジェクトバージョン選択の機能の変更期日の変更", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "PostgreSQL"), ": 2023年9月30日→2023年10月31日"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "MySQL"), ": 2023年10月30日→2023年11月30日"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "分析"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "カウント推移比較"), "メニューからデータ呼び出しと読み込み速度の違いによりチャートが不自然に出力される問題を改善"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スロークエリ"), "メニューで照会できる最大時間を1時間に制限")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "postgresql"
    }, `PostgreSQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), "V2製品の", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニュー内のアクティブセッションテーブルでセッション詳細情報にPlan照会を追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スロークエリー"), "、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "データベースサイズ"), "メニューの英語、日本語案内に対応")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "mysql-1"
    }, `MySQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), "V2製品の", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "インスタンスモニタリング"), "メニュー内のアクティブセッションテーブルの初期配置ステータス設定"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "スロークエリー"), "、", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "データベースサイズ"), "メニューの英語、日本語案内に対応")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "url"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "URL一覧"), "メニューから", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "URLの追加"), "機能を使用する場合 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "の確認地域"), "セクションの重複を削除"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "log-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ライブテール"
    }, `ライブテール`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "テーブルrowを広げて折りたたむと、rowの高さが広がる前に戻らない現象を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ログ検索"
    }, `ログ検索`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "フィルター"), "入力欄に", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), "を入力するか、左側のサイドメニューから選択すると", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category==+none"), "を表示される現象の修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "フィルター"), "入力欄に", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), "を入力された状態では、追加の", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", null, "category"), "が入力できない不具合を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "フィルター"), "入力欄で重複する値が入力できないように修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "タグ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "隣接ログ"), "を検索すると", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "時間選択"), "オプションを変更")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ログイベント"
    }, `ログイベント`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "アラート通知"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント設定"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ログ"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント追加"), "ウィンドウで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "イベント対象フィルタリング"), "項目を", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "選択入力"), "で選択すると現れるUIバグを修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "ログの設定"
    }, `ログの設定`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), "ログモニタリングメッセージ、日本語を修正"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "browser"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `Browser`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Feature"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "分析"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ページロードヒートマップ"), "メニューにページグループフィルターと検索フィルターを追加"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ダッシュボード"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "ブラウザエラー"), ">", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "エラー詳細"), "メニューの背景スタイルを修正")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "実験室"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "h3"
    }, `実験室`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Change"), "(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Container"), ",", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "Java"), "商品のみ)", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(UI, {
        mdxType: "UI"
    }, "Remote Access Status"), "メニューで", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b", null, "ログ参照"), "権限を持たないメンバーでも使用できるように変更")));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 25098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 79375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 2331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-performance-sum-rn-3317b60b90d77f1f9c8aaa5513007d07.jpg");

/***/ }),

/***/ 22274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-container-map-details-6febeda2a821e1afb98c83a5368fd17e.png");

/***/ })

}]);