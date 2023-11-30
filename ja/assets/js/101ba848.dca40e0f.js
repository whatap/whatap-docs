"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[11916],{

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

/***/ 58097:
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
    id: 'java-2_1_1',
    title: 'Java Agent v2.1.1',
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/java/java-2_1_1",
    "id": "release-notes/java/java-2_1_1",
    "title": "Java Agent v2.1.1",
    "description": "2022-07-12",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/java-2.1.1.mdx",
    "sourceDirName": "release-notes/java",
    "slug": "/release-notes/java/java-2_1_1",
    "permalink": "/ja/release-notes/java/java-2_1_1",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/java/java-2.1.1.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "java-2_1_1",
        "title": "Java Agent v2.1.1",
        "toc_max_heading_level": 2
    }
};
const assets = {};
const toc = [
    {
        value: '2022-07-12',
        id: '2022-07-12',
        level: 2
    },
    {
        value: '新機能',
        id: '新機能',
        level: 3
    },
    {
        value: '遅いhttpとsqlの発生時に通知メッセージを送信',
        id: '遅いhttpとsqlの発生時に通知メッセージを送信',
        level: 4
    },
    {
        value: 'トランザクション、http呼び出しのエラーレベルを調整する機能',
        id: 'トランザクションhttp呼び出しのエラーレベルを調整する機能',
        level: 4
    },
    {
        value: '2022-06-30',
        id: '2022-06-30',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート',
        level: 3
    },
    {
        value: 'Javaエージェントのメタタグのオプション名を修正',
        id: 'javaエージェントのメタタグのオプション名を修正',
        level: 4
    },
    {
        value: 'バグ',
        id: 'バグ',
        level: 3
    },
    {
        value: 'コンテナでID抽出エラーを修正',
        id: 'コンテナでid抽出エラーを修正',
        level: 4
    },
    {
        value: '2022-06-22',
        id: '2022-06-22',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-1',
        level: 3
    },
    {
        value: 'エージェント設定のlicenseキーオプションの修正',
        id: 'エージェント設定のlicenseキーオプションの修正',
        level: 4
    },
    {
        value: '2022-06-16',
        id: '2022-06-16',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-2',
        level: 3
    },
    {
        value: 'エージェント実行ロゴの修正',
        id: 'エージェント実行ロゴの修正',
        level: 4
    },
    {
        value: '非同期http呼び出しエラーの通知メッセージを修正',
        id: '非同期http呼び出しエラーの通知メッセージを修正',
        level: 4
    },
    {
        value: 'バグ',
        id: 'バグ-1',
        level: 3
    },
    {
        value: 'クラスシグネチャー認証時のバグを修正',
        id: 'クラスシグネチャー認証時のバグを修正',
        level: 4
    },
    {
        value: '2022-05-18',
        id: '2022-05-18',
        level: 2
    },
    {
        value: '新機能',
        id: '新機能-1',
        level: 3
    },
    {
        value: 'netstat機能の追加',
        id: 'netstat機能の追加',
        level: 4
    },
    {
        value: 'アップデート',
        id: 'アップデート-3',
        level: 3
    },
    {
        value: 'エラー通知設定アップデート',
        id: 'エラー通知設定アップデート',
        level: 4
    },
    {
        value: 'バグ',
        id: 'バグ-2',
        level: 3
    },
    {
        value: 'エージェントログ出力時のエラーを修正',
        id: 'エージェントログ出力時のエラーを修正',
        level: 4
    },
    {
        value: 'jdk 15でクラス詳細を見るときのエラー修正',
        id: 'jdk-15でクラス詳細を見るときのエラー修正',
        level: 4
    },
    {
        value: '2022-05-16',
        id: '2022-05-16',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-4',
        level: 3
    },
    {
        value: 'エラー通知メッセージの内容を追加',
        id: 'エラー通知メッセージの内容を追加',
        level: 4
    },
    {
        value: 'バグ',
        id: 'バグ-3',
        level: 3
    },
    {
        value: 'sql追跡時、LocalDateを追跡できない問題',
        id: 'sql追跡時localdateを追跡できない問題',
        level: 4
    },
    {
        value: '2022-05-11',
        id: '2022-05-11',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-5',
        level: 3
    },
    {
        value: 'エラー通知メッセージの内容を追加',
        id: 'エラー通知メッセージの内容を追加-1',
        level: 4
    },
    {
        value: '2022-04-25',
        id: '2022-04-25',
        level: 2
    },
    {
        value: '新機能',
        id: '新機能-2',
        level: 3
    },
    {
        value: 'Alibaba Druid ConnectionPool追跡機能の追加',
        id: 'alibaba-druid-connectionpool追跡機能の追加',
        level: 4
    },
    {
        value: 'Http Callエラー発生時に通知機能を追加',
        id: 'http-callエラー発生時に通知機能を追加',
        level: 4
    },
    {
        value: '新機能',
        id: '新機能-3',
        level: 3
    },
    {
        value: 'Http Callエラー通知機能の追加',
        id: 'http-callエラー通知機能の追加',
        level: 4
    },
    {
        value: '2022-03-18',
        id: '2022-03-18',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-6',
        level: 3
    },
    {
        value: 'データベース呼び出しURLの保存',
        id: 'データベース呼び出しurlの保存',
        level: 4
    },
    {
        value: 'データベース呼び出しハッシュ値の削除',
        id: 'データベース呼び出しハッシュ値の削除',
        level: 4
    },
    {
        value: '新機能',
        id: '新機能-4',
        level: 3
    },
    {
        value: 'フェデレーション サービスの状態追跡機能を追加',
        id: 'フェデレーション-サービスの状態追跡機能を追加',
        level: 4
    },
    {
        value: '2022-02-18',
        id: '2022-02-18',
        level: 2
    },
    {
        value: 'バグ',
        id: 'バグ-4',
        level: 3
    },
    {
        value: 'Http呼び出しエラーの時間設定のバグを修正',
        id: 'http呼び出しエラーの時間設定のバグを修正',
        level: 4
    },
    {
        value: 'アップデート',
        id: 'アップデート-7',
        level: 3
    },
    {
        value: 'アクティブスタックのスレッド名の表示設定を追加',
        id: 'アクティブスタックのスレッド名の表示設定を追加',
        level: 4
    },
    {
        value: '非同期スレッド名を表示する設定を追加',
        id: '非同期スレッド名を表示する設定を追加',
        level: 4
    },
    {
        value: '2022-02-11',
        id: '2022-02-11',
        level: 2
    },
    {
        value: 'バグ',
        id: 'バグ-5',
        level: 3
    },
    {
        value: '.xプラグインのint認識エラーを修正',
        id: 'xプラグインのint認識エラーを修正',
        level: 4
    },
    {
        value: 'バッチエージェントのgetResultSetエラーの修正',
        id: 'バッチエージェントのgetresultsetエラーの修正',
        level: 4
    },
    {
        value: 'アップデート',
        id: 'アップデート-8',
        level: 3
    },
    {
        value: 'loggingを含むファイル名に対する自動化オプションを追加',
        id: 'loggingを含むファイル名に対する自動化オプションを追加',
        level: 4
    },
    {
        value: 'Javaエージェントからログのトランザクション情報を追加',
        id: 'javaエージェントからログのトランザクション情報を追加',
        level: 4
    },
    {
        value: 'Httpクライアントのタイムアウトの適用およびエラー処理',
        id: 'httpクライアントのタイムアウトの適用およびエラー処理',
        level: 4
    },
    {
        value: 'jmx pool設定の追加',
        id: 'jmx-pool設定の追加',
        level: 4
    },
    {
        value: 'heapdumpファイルパスオプションの追加',
        id: 'heapdumpファイルパスオプションの追加',
        level: 4
    },
    {
        value: 'バッチエージェントのactive開始部分の修正',
        id: 'バッチエージェントのactive開始部分の修正',
        level: 4
    },
    {
        value: '2022-01-12',
        id: '2022-01-12',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-9',
        level: 3
    },
    {
        value: 'DB callのエラー件数をリアルタイム統計に追加',
        id: 'db-callのエラー件数をリアルタイム統計に追加',
        level: 4
    },
    {
        value: 'HttpとDB接続にリアルタイムログを追加',
        id: 'httpとdb接続にリアルタイムログを追加',
        level: 4
    },
    {
        value: 'エージェントログで指定したonameを表示',
        id: 'エージェントログで指定したonameを表示',
        level: 4
    },
    {
        value: 'jdbc url抽出の区切り文字を追加',
        id: 'jdbc-url抽出の区切り文字を追加',
        level: 4
    },
    {
        value: 'logsink、log4jプラグインを使用する場合、自動認識機能を追加',
        id: 'logsinklog4jプラグインを使用する場合自動認識機能を追加',
        level: 4
    },
    {
        value: 'logsink収集データの追加',
        id: 'logsink収集データの追加',
        level: 4
    },
    {
        value: '2022-01-03',
        id: '2022-01-03',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-10',
        level: 3
    },
    {
        value: 'コレクション監視の変更',
        id: 'コレクション監視の変更',
        level: 4
    },
    {
        value: '2021-12-21',
        id: '2021-12-21',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-11',
        level: 3
    },
    {
        value: 'スレッド中断設定の追加',
        id: 'スレッド中断設定の追加',
        level: 4
    },
    {
        value: 'http headerから&#39;Cookie&#39;項目を除外',
        id: 'http-headerからcookie項目を除外',
        level: 4
    },
    {
        value: '2021-12-17',
        id: '2021-12-17',
        level: 2
    },
    {
        value: 'アップデート',
        id: 'アップデート-12',
        level: 3
    },
    {
        value: 'weaving設定追加',
        id: 'weaving設定追加',
        level: 4
    },
    {
        value: 'エージェント環境変数の除外値の追加',
        id: 'エージェント環境変数の除外値の追加',
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-07-12"
    }, `2022-07-12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "新機能"
    }, `新機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "遅いhttpとsqlの発生時に通知メッセージを送信"
    }, `遅いhttpとsqlの発生時に通知メッセージを送信`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `遅いhttpやsqlの呼び出しが発生する場合、通知メッセージを送信するように機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "トランザクションhttp呼び出しのエラーレベルを調整する機能"
    }, `トランザクション、http呼び出しのエラーレベルを調整する機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `トランザクションやhttp呼び出しの状態を通常の呼び出しとして認識できるように機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値 (default)
transaction_status_mode=normal
httpc_status_mode=normal

# エラー無視
transaction_status_mode=info
httpc_status_mode=info
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-30"
    }, `2022-06-30`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "javaエージェントのメタタグのオプション名を修正"
    }, `Javaエージェントのメタタグのオプション名を修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Javaエージェントのメタタグのオプション名を修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値 (default)
agent_meta_tags_enabled=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "コンテナでid抽出エラーを修正"
    }, `コンテナでID抽出エラーを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `コンテナ環境でのID抽出エラーを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-22"
    }, `2022-06-22`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-1"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エージェント設定のlicenseキーオプションの修正"
    }, `エージェント設定のlicenseキーオプションの修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `whatap.confで、licenseとaccesskeyのオプションの両方を利用できるように修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 同一機能
license=
accesskey=
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-16"
    }, `2022-06-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-2"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エージェント実行ロゴの修正"
    }, `エージェント実行ロゴの修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Javaエージェント実行時のロゴ内容を修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `The Best Observability in Java
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "非同期http呼び出しエラーの通知メッセージを修正"
    }, `非同期http呼び出しエラーの通知メッセージを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `非同期http呼び出しエラー発生時にstatus codeを表示するよう通知メッセージを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ-1"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "クラスシグネチャー認証時のバグを修正"
    }, `クラスシグネチャー認証時のバグを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エージェント設定メニューのクラスシグネチャー表示の要請時にNullPointExceptionが発生する問題を修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-18"
    }, `2022-05-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "新機能-1"
    }, `新機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "netstat機能の追加"
    }, `netstat機能の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `oshiライブラリを使用して、netstat機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-3"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エラー通知設定アップデート"
    }, `エラー通知設定アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `トランザクションエラー通知に関する設定を追加し、設定名を修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
# エラー通知機能の活性化有無
exception_alert_enabled=false

# トランザクションエラー通知の活性化有無
exception_alert_service_enabled=false

# http呼び出し時のエラー通知の活性化有無
exception_alert_httpc_enabled=false

# jdbc呼び出し時のエラー通知の活性化有無
exception_alert_jdbc_enabled=false

# エラー通知メッセージに表示したスタックの長さ
exception_alert_stack_size=50

# エラー通知メッセージの非活性化時間 = 5分(30000ms)
exception_alert_silent_time=300000

# トランザクションエラー通知で無視するstatus code
status_alert_ignore=403

# トランザクションエラー通知で無視するurl:status_codeの組み合わせ
status_alert_ignore_set=/api/test/timeout:408

# http callエラー通知で無視したstatus code
httpc_status_alert_ignore=408,500

# http callエラー通知で無視したurl:status codeの組み合わせ
httpc_status_url_alert_ignore_set=/api/test/timeout:408
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ-2"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エージェントログ出力時のエラーを修正"
    }, `エージェントログ出力時のエラーを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Timestampログの記録時にエラーが発生する問題を修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jdk-15でクラス詳細を見るときのエラー修正"
    }, `jdk 15でクラス詳細を見るときのエラー修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エージェント設定画面でクラスシグネチャーを参照できない現象を修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-16"
    }, `2022-05-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-4"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エラー通知メッセージの内容を追加"
    }, `エラー通知メッセージの内容を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エラー通知メッセージにトランザクションのurl情報を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ-3"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "sql追跡時localdateを追跡できない問題"
    }, `sql追跡時、LocalDateを追跡できない問題`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `java.time.LocalDate`), `を追跡できない問題を修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-11"
    }, `2022-05-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-5"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エラー通知メッセージの内容を追加-1"
    }, `エラー通知メッセージの内容を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `エラー通知メッセージにstatus codeを追加しました。無視した通知の数をエラー通知メッセージに追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-04-25"
    }, `2022-04-25`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "新機能-2"
    }, `新機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "alibaba-druid-connectionpool追跡機能の追加"
    }, `Alibaba Druid ConnectionPool追跡機能の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Alibaba Druid connection poolを追跡できるように機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
druid_pool_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-callエラー発生時に通知機能を追加"
    }, `Http Callエラー発生時に通知機能を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http Callエラー発生時に通知を送る機能を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
httpc_event_detail_enable=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2022-03-24`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "新機能-3"
    }, `新機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-callエラー通知機能の追加"
    }, `Http Callエラー通知機能の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http呼び出し時にエラーが発生すると通知を受けられるように機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_enabled`), `オプションを`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `に設定することで機能を有効にし、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_stack_size`), `オプションを指定した値に合わせてエラースタックを通知メッセージを受け取ることができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `通知が発生すると`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_silent_time`), `オプションで指定された期間、エラー通知を無効にすることができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
exception_alert_enabled=false
exception_alert_buffer_size=5
exception_alert_stack_size=50

# 5分 (30000ms)
exception_alert_silent_time=300000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-03-18"
    }, `2022-03-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-6"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "データベース呼び出しurlの保存"
    }, `データベース呼び出しURLの保存`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `データベース呼び出しのURLを保存するように修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "データベース呼び出しハッシュ値の削除"
    }, `データベース呼び出しハッシュ値の削除`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `データベース呼び出しハッシュ値をERRORテキストから削除しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "新機能-4"
    }, `新機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "フェデレーション-サービスの状態追跡機能を追加"
    }, `フェデレーション サービスの状態追跡機能を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `target IPまたはサービスの接続状態をログモニタリングのliveTailで確認できるように、連携サービス状態の追跡機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_enabled`), `オプションを`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `に設定して機能を有効にし、#RemoteTraceカテゴリでログを収集します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `正常なレスポンスの場合のレベルはOK、エラーの場合のレベルはエラーです。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `通常のレスポンスの場合、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_ok_interval`), `設定の間隔でログは記録されます。デフォルト値は30秒です。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `エラーレスポンスの場合、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_error_interval`), `設定の間隔でログは記録されます。デフォルト値は5秒です。`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
logsink_rt_enabled=false

logsink_rt_error_interval=5000
logsink_rt_ok_interval=30000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-18"
    }, `2022-02-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ-4"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http呼び出しエラーの時間設定のバグを修正"
    }, `Http呼び出しエラーの時間設定のバグを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http呼び出し時、エラー時間のmaxを0に設定してもエラーが表示されるバグを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-7"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "アクティブスタックのスレッド名の表示設定を追加"
    }, `アクティブスタックのスレッド名の表示設定を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `アクティブスタックのスレッド名を表示できるように設定を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
active_stack_thread_name_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `yardバージョンが低い場合、trueに設定するとプロトコルエラーによりエージェント接続は継続的に切断します。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "非同期スレッド名を表示する設定を追加"
    }, `非同期スレッド名を表示する設定を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `非同期スレッドのidと名前を表示できるように設定を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
debug_async_thread_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-11"
    }, `2022-02-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "バグ-5"
    }, `バグ`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "xプラグインのint認識エラーを修正"
    }, `.xプラグインのint認識エラーを修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `x拡張子を使用するプラグインでint値を使用できないエラーを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "バッチエージェントのgetresultsetエラーの修正"
    }, `バッチエージェントのgetResultSetエラーの修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `バッチエージェントのTraceSQL.getResultSetエラーを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-8"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "loggingを含むファイル名に対する自動化オプションを追加"
    }, `loggingを含むファイル名に対する自動化オプションを追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logging文字列を含むファイル名をプラグインとして使用する場合、自動的にhookingオプションを無効にする機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "javaエージェントからログのトランザクション情報を追加"
    }, `Javaエージェントからログのトランザクション情報を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `プラグインでないJavaエージェントからログにトランザクション情報を追加する機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "httpクライアントのタイムアウトの適用およびエラー処理"
    }, `Httpクライアントのタイムアウトの適用およびエラー処理`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Httpクライアントにタイムアウトを適用し、タイムアウト発生時にエラー処理を有効にする機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jmx-pool設定の追加"
    }, `jmx pool設定の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `jmx pool objectのデフォルト値を修正しました。jmx poolのデータソース名の使用有無を決定できるオプションを追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `データソース名を登録する場合はjndi方式を実行し、名前を登録しない場合は基本url方式で動作します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `jmx_pool_dsname_enabled=false
jmx_pool_object="*:type=DataSource,class=*,name=*"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "heapdumpファイルパスオプションの追加"
    }, `heapdumpファイルパスオプションの追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `heapdumpファイルパスを指定するlog_rootオプションを追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値
log_root=\${WHATAP_HOME}/dump
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "バッチエージェントのactive開始部分の修正"
    }, `バッチエージェントのactive開始部分の修正`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `バッチプロセスのMainスレッドにactivestackを残すようにバッチエージェントを修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-12"
    }, `2022-01-12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-9"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "db-callのエラー件数をリアルタイム統計に追加"
    }, `DB callのエラー件数をリアルタイム統計に追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `データベース呼び出し時にエラーが発生した場合、リアルタイム統計にエラー件数を追加するように設定しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "httpとdb接続にリアルタイムログを追加"
    }, `HttpとDB接続にリアルタイムログを追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http接続とDB接続のリアルタイムログを追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エージェントログで指定したonameを表示"
    }, `エージェントログで指定したonameを表示`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `onameを-Dオプションとして指定した場合でも、エージェントログでPIDの代わりにエージェント名を表示するように修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jdbc-url抽出の区切り文字を追加"
    }, `jdbc url抽出の区切り文字を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `jdbc urlの抽出時に「?」、「;」を基準に切り捨てできるよう修正しました。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `「;」追加
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "logsinklog4jプラグインを使用する場合自動認識機能を追加"
    }, `logsink、log4jプラグインを使用する場合、自動認識機能を追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logsink、log4jプラグインを使用する場合、自動的にhookingオプションを使用しないように機能を追加しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "logsink収集データの追加"
    }, `logsink収集データの追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logsinkで収集するデータを追加しました。設定によってtransation id、login id、http hostデータ収集の有無を決定できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# デフォルト値 (default)
_logtag_enabled = false         # tag 
logtag_txid_enabled=false       # transation id
logtag_login_enabled=false      # login id
logtag_httphost_enabled=false   # http host
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-03"
    }, `2022-01-03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-10"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "コレクション監視の変更"
    }, `コレクション監視の変更`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `既存のCollectionクラスをhookingする方式から、CollectionHolderを間接的にCollectionクラス情報を表示できるように修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Collectionを生成するクラスを`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `collectionn_nonstatic_holders`), `設定に追加し、Collection Map項目で確認することができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `collection_nonstatic_holders=org.apache.catalina.session.ManagerBase
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-21"
    }, `2021-12-21`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-11"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "スレッド中断設定の追加"
    }, `スレッド中断設定の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `threadの動作時間が設定値を超えた場合に、threadの停止可否を設定できるように項目を追加しました。デフォルト設定値は`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), `です。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `auto_thread_kill_enabled=false  # デフォルト値
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-headerからcookie項目を除外"
    }, `http headerから'Cookie'項目を除外`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `http headerから'Cookie'項目を除外するよう修正しました。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `(既存) cookie、accept、user-agent、referer
(修正) Cookie、cookie、accept、user-agent、referer
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-17"
    }, `2021-12-17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アップデート-12"
    }, `アップデート`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "weaving設定追加"
    }, `weaving設定追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `プラグインを追跡できるようにweaving設定を追加しました。 既存の`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), `設定と同じ機能で、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving`), `または`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), `設定の両方の機能が動作します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `weaving=tomcat10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "エージェント環境変数の除外値の追加"
    }, `エージェント環境変数の除外値の追加`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `環境変数の参照機能で特定のキー値を入力する場合、検索項目から除外できるように機能を追加しました。 区切り文字は「,」で大文字と小文字を区分しません。`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_system_enabled`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_jvm_enabled`), `の設定と関連付けて使用することができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `agent_env_system_enabled=false
agent_env_jvm_enabled=true

agent_env_ignore_keys=user.timezone,user.name,user.language
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);