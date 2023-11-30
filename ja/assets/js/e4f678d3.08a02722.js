"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[17336],{

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

/***/ 74328:
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
    id: 'whatap-overview',
    title: 'WhaTapモニタリングサービス',
    displayed_sidebar: 'indexSidebar',
    description: 'WhaTapモニタリングサービスについて紹介します。',
    tags: [
        'WhaTapモニタリングサービス'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "whatap-overview",
    "id": "whatap-overview",
    "title": "WhaTapモニタリングサービス",
    "description": "WhaTapモニタリングサービスについて紹介します。",
    "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/whatap-overview.mdx",
    "sourceDirName": ".",
    "slug": "/whatap-overview",
    "permalink": "/ja/whatap-overview",
    "draft": false,
    "editUrl": "undefined/docs/whatap-overview.mdx",
    "tags": [
        {
            "label": "WhaTapモニタリングサービス",
            "permalink": "/ja/tags/wha-tapモニタリングサービス"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "whatap-overview",
        "title": "WhaTapモニタリングサービス",
        "displayed_sidebar": "indexSidebar",
        "description": "WhaTapモニタリングサービスについて紹介します。",
        "tags": [
            "WhaTapモニタリングサービス"
        ]
    },
    "sidebar": "indexSidebar",
    "next": {
        "title": "WhaTapへようこそ",
        "permalink": "/ja/welcome-to-whatapdocs"
    }
};
const assets = {};
const toc = [
    {
        value: '様々なプラットフォームに対応する統合モニタリング',
        id: '様々なプラットフォームに対応する統合モニタリング',
        level: 2
    },
    {
        value: 'モニタリング範囲',
        id: 'モニタリング範囲',
        level: 2
    },
    {
        value: 'アプリケーションモニタリング',
        id: 'アプリケーションモニタリング',
        level: 3
    },
    {
        value: 'サーバーモニタリング',
        id: 'サーバーモニタリング',
        level: 3
    },
    {
        value: 'Kubernetesモニタリング',
        id: 'kubernetesモニタリング',
        level: 3
    },
    {
        value: 'データベースモニタリング',
        id: 'データベースモニタリング',
        level: 3
    },
    {
        value: 'URLモニタリング',
        id: 'urlモニタリング',
        level: 3
    },
    {
        value: 'ブラウザーモニタリング',
        id: 'ブラウザーモニタリング',
        level: 3
    },
    {
        value: 'クラウドモニタリング',
        id: 'クラウドモニタリング',
        level: 3
    },
    {
        value: 'Logモニタリング',
        id: 'logモニタリング',
        level: 3
    },
    {
        value: 'WhaTapモニタリングの主な機能',
        id: 'whatapモニタリングの主な機能',
        level: 2
    },
    {
        value: 'リアルタイムモニタリングダッシュボード',
        id: 'リアルタイムモニタリングダッシュボード',
        level: 3
    },
    {
        value: '様々な通知発行チャネルに対応',
        id: '様々な通知発行チャネルに対応',
        level: 3
    },
    {
        value: '統合モニタリングが可能なマルチリージョンに対応',
        id: '統合モニタリングが可能なマルチリージョンに対応',
        level: 3
    },
    {
        value: '収集サーバーの安定性と拡張性の保証',
        id: '収集サーバーの安定性と拡張性の保証',
        level: 3
    },
    {
        value: 'コラボレーション対応、マルチテナント',
        id: 'コラボレーション対応マルチテナント',
        level: 3
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "様々なプラットフォームに対応する統合モニタリング"
    }, `様々なプラットフォームに対応する統合モニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `WhaTapモニタリングサービスの基本的な目的はリソース(人的、物的)の共有です。 既存のモニタリング製品は、モニタリング対象ごとに個別の収集サーバー、ウェブ画面を構築する必要があります。 しかし、WhaTapのモニタリングサービスは、収集サーバーは共有するものの、各サービスの独立性は保護される構造です。 統合管理を行うには、モニタリングサーバーは柔軟な拡張構造でありながらマルチテナント機能を提供する必要があります。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `リアルタイムでビジネス状況を可視化することで、迅速に問題を特定できます。 トランザクションをリアルタイムでトレースすることで、再現せずに問題を追跡できます。 WhaTapモニタリングは、分散環境のITサービス性能をリアルタイムで可視化し、問題認識と対応に掛かる顧客の時間を節約し、プロアクティブな対応を可能にします。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "モニタリング範囲"
    }, `モニタリング範囲`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `アプリケーション、サーバー、データベース、Kubernetes、クラウド、ログ、URLモニタリングにより、システムモニタリングのほぼすべての部分をカバーします。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "アプリケーションモニタリング"
    }, `アプリケーションモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("source", {
        src: "https://www.whatap.io/video/main-product/monitoring_step_0.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "java/introduction"
    }, `Java`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "php/introduction"
    }, `PHP`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "nodejs/introduction"
    }, `Node.js`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "python/introduction"
    }, `Python`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "dotnet/introduction"
    }, `.NET`), `、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "golang/introduction"
    }, `Go`), `などのアプリケーションのモニタリングに対応します。現在進行中のトランザクションの実行状況をリアルタイムで確認できます。 現在のトランザクションの実行状況をリアルタイムで確認できます。 `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `クラウド、ハイブリッド、オンプレミスなど複雑で分散したビジネス環境のアプリケーションの場合、リアルタイムで性能低下問題をモニタリングし、再現することなく迅速に追跡して原因を見つけ出すことができます。 すべてのアプリケーションの問題は、進行中のトランザクションの増加によって発生します。 増加した瞬間に実行中のSQL、HTTP Call、Methodをすぐに確認できれば、問題を最も早く認識して分析することができます。 すべてのトランザクションの実行履歴を収集して分析できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "サーバーモニタリング"
    }, `サーバーモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("source", {
        src: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/prd/application/monitoring_step_1.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "server/introduction"
    }, `サーバーモニタリング`), `は、10,000台以上のサーバーがある場合、すべてのプロセスのCPU、メモリ、IO使用量などを秒単位で収集し、瞬間的に発生する過負荷および性能低下をリアルタイムで分析して通知することができます。 クラウド環境のアプリケーションで発生する可能性のある脆弱性を自動検知と通知機能を提供し、毎月、毎週のように変更されるシステム規模を簡単に予測・管理するのに役立ちます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "kubernetesモニタリング"
    }, `Kubernetesモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("source", {
        src: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "kubernetes/introduction"
    }, `Kubernetesモニタリング`), `は、コンテナからアプリケーションまでの統合分析を提供します。 Pod、Worker Node、アプリケーションをモニタリングしてWorker Node別またはPod別のトランザクション性能の影響を分析します。 MSA環境のコンテナレベル、サービスレベル、トランザクションレベルの3段階の相関関係を追跡し、Pod、コンテナ、サービス間の呼び出し関係を可視化し確認することができます。 オブザーバビリティのためのメトリクス-トレース-ログ情報を統合して提示します。 これにより、問題発生時の迅速な原因分析および対応が可能になります。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `EKS、AKS、GKE、OKE、Openshift、Cocktail、Accordion、PaaS-TAを含む主要プラットフォームに対応します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `WhaTap Labsは、CNCF(Cloud Native Computing Foundation)とKCSP(Kubernetes Certified Service Provider)、クラウドサービスセキュリティ認証(CSAP)を取得しました。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "データベースモニタリング"
    }, `データベースモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("source", {
        src: "https://img.whatap.io/23/11/06/031831DB_prd.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `データベースモニタリングでは、データベースのアクティブセッション、実行中SQL、各種指標の統計および詳細情報をリアルタイムでモニタリングし、チューニング対象を選別して解決可否を確認することができます。 アプリケーション、サーバー、データベースモニタリングの連携ビューを使用してサービスに異常が発生した場合、直ちにDB状態を確認し、原因分析を行うことができます。 効率的なパフォーマンスデータ収集構造により、複数のデータベースモニタリングする場合でも迅速にデータを収集し、統合されたビューを提供することで分析が容易になります。 クラウド環境の様々なDBのパフォーマンスやトラブル状況を、面倒なインストールが必要なく、ひと目で確認でき、リアルタイムでモニタリングすることができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `提供する製品は以下の通りです。 リンクをクリックして技術文書を確認できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "postgresql/monitoring-intro"
    }, `PostgreSQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "oracle/monitoring-intro"
    }, `Oracle`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "mysql/monitoring-intro"
    }, `MySQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "mssql/monitoring-intro"
    }, `SQL Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "tibero/monitoring-intro"
    }, `Tibero`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "cubrid/monitoring-intro"
    }, `CUBRID`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "altibase/monitoring-intro"
    }, `Altibase`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "redis/monitoring-intro"
    }, `Redis`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "mongodb/monitoring-intro"
    }, `MongoDB`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "urlモニタリング"
    }, `URLモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("source", {
        src: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/prd/application/monitoring_step_4.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "url/url-intro"
    }, `URLモニタリング`), `は、実際のユーザーの立場からサイト利用に問題がないか
かを周期的に確認する管理者のモニタリング業務を引き継ぐことができます。 HTTPステータスコードを使用してサイト利用の問題をリアルタイムでモニタリングし、地域によって接続に掛かる接続時間を確認することができます。 北米、ヨーロッパ、アジアなど世界6か国の主要都市でサービスの状態をチェックします。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "ブラウザーモニタリング"
    }, `ブラウザーモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "browser-start.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "browser"
    }, `ブラウザーモニタリング`), `は、ブラウザーアプリケーションのページ読み込み時間、サーバーレスポンス時間、リソース読み込み時間、ブラウザーエラーなど、さまざまな性能指標を収集して分析します。 また、ブラウザーアプリケーションのボトルネックや性能上の問題を特定し、それらを最適化することで、すべてのユーザーに一貫した最高の性能を提供できるようにサポートします。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "クラウドモニタリング"
    }, `クラウドモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "ref-cloud/cloud"
    }, `クラウドモニタリング`), `は、クラウドプロバイダのAPIに接続し、すべての指標とクラウドイベントをリアルタイムで収集します。 収集したデータをダッシュボードを使用してリアルタイムで確認し、トラブルの原因を直接分析ができます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `提供する製品は以下の通りです。 リンクをクリックして技術文書を確認できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "amazon-cloudwatch/install-agent"
    }, `Amazon CloudWatch`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "amazon-ecs/introduction"
    }, `Amazon ECS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "azure/install-agent"
    }, `Azure Monitor`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "ncloud/install-agent"
    }, `Naver Cloud Monitoring`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "oracle-cloud/install-agent"
    }, `Oracle Cloud Monitor`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "logモニタリング"
    }, `Logモニタリング`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "log/introduction"
    }, `Logモニタリング`), `は、クラウドを含む複合システムで発生する様々なログを簡単に統合管理・活用できます。 数百、数千台のサーバーで発生するログを送信して、統合された確認が可能です。 画面を流れるログを確認することができます。 統計目的でログを分類し、特定の単位で発生するログ件数の推移を確認できます。 障害の発生時間や解決状況に密接に関連するログデータを探したり、さまざまな条件で大量のログを検索できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "whatapモニタリングの主な機能"
    }, `WhaTapモニタリングの主な機能`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "リアルタイムモニタリングダッシュボード"
    }, `リアルタイムモニタリングダッシュボード`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `サーバーの様々な情報や現状をチャート形式のダッシュボードをリアルタイムで迅速に認識できます。 各指標のデータを経済的に確認して分析することができます。 進行中のトランザクションからリアルタイムに発生するボトルネックを特定し、その問題を解決するのに役立ちます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "様々な通知発行チャネルに対応"
    }, `様々な通知発行チャネルに対応`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "overview-notification.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `イベント条件を設定し、メール、SMS、メッセンジャー、アプリプッシュなど様々な経路で通知を提供します。 エージェントと収集サーバーの通信障害およびアプリケーションリソース使用率、アクティブトランザクション、エラー、レスポンス遅延、レスポンス分布の異常に関する通知設定ができます。 また、マシンラーニングベースのAI通知設定により、レスポンス分布パターンを検知し、通知機能を提供します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `アラート通知のモニタリングプラットフォームごとに対応されるイベントの種類を確認するには、`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "support-env#support-notice"
    }, `次の文書`), `を参照してください。`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "統合モニタリングが可能なマルチリージョンに対応"
    }, `統合モニタリングが可能なマルチリージョンに対応`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_06.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `追加のリージョンが発生するたびに収集サーバーのみをインストールし、1つのモニタリング画面で複数のリージョンのサーバーを統合モリタリングします。 WhaTapモニタリングの場合、IDCセンターの追加構築やクラウドプラットフォームの追加構築などをリージョン構築だけで収集サーバーを拡張できます。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "収集サーバーの安定性と拡張性の保証"
    }, `収集サーバーの安定性と拡張性の保証`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_07.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `統合モニタリングの最も基本的なものは、サーバーの拡張性です。 増加する管理(モニタリング) 対象サーバーを円滑に受け入れるために、モニタリングサーバーは内部的に拡張性を持たなければなりません。 拡張性を確保するために、WhaTapモニタリングサーバーは、細分化されたマイクロアプリケーションで構成されており、結合度の低い分散環境となっています。 また、データの安定性を確保するために、冗長化およびデータ復旧機能を提供します。`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "コラボレーション対応マルチテナント"
    }, `コラボレーション対応、マルチテナント`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_08.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `WhaTapモニタリングサービスは、開発チームが単独でモニタリングを利用し、運用チームは統合モニタリングすることができます。 1つのモニタリング製品を利用することで、チーム別/業務別の独立性を保証し、これを管理者が統合及び制御することができます。 運用管理者は、開発チームのプロジェクトの権限を直接管理せず、各開発チームプロジェクトの所有者が権限を管理します。`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);