"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[53318],{

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

/***/ 46433:
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
    id: 'whatap-overview',
    title: '와탭 모니터링 서비스',
    displayed_sidebar: 'indexSidebar',
    description: '와탭 모니터링 서비스에 대해 소개합니다.',
    tags: [
        '와탭 모니터링 서비스'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "whatap-overview",
    "id": "whatap-overview",
    "title": "와탭 모니터링 서비스",
    "description": "와탭 모니터링 서비스에 대해 소개합니다.",
    "source": "@site/docs/whatap-overview.mdx",
    "sourceDirName": ".",
    "slug": "/whatap-overview",
    "permalink": "/whatap-docs/whatap-overview",
    "draft": false,
    "editUrl": "undefined/docs/whatap-overview.mdx",
    "tags": [
        {
            "label": "와탭 모니터링 서비스",
            "permalink": "/whatap-docs/tags/와탭-모니터링-서비스"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "whatap-overview",
        "title": "와탭 모니터링 서비스",
        "displayed_sidebar": "indexSidebar",
        "description": "와탭 모니터링 서비스에 대해 소개합니다.",
        "tags": [
            "와탭 모니터링 서비스"
        ]
    },
    "sidebar": "indexSidebar",
    "next": {
        "title": "와탭에 오신 것을 환영합니다",
        "permalink": "/whatap-docs/welcome-to-whatapdocs"
    }
};
const assets = {};
const toc = [
    {
        value: '다양한 플랫폼을 아우르는 통합 모니터링',
        id: '다양한-플랫폼을-아우르는-통합-모니터링',
        level: 2
    },
    {
        value: '모니터링 범위',
        id: '모니터링-범위',
        level: 2
    },
    {
        value: '애플리케이션 모니터링',
        id: '애플리케이션-모니터링',
        level: 3
    },
    {
        value: '서버 모니터링',
        id: '서버-모니터링',
        level: 3
    },
    {
        value: '쿠버네티스 모니터링',
        id: '쿠버네티스-모니터링',
        level: 3
    },
    {
        value: '데이터베이스 모니터링',
        id: '데이터베이스-모니터링',
        level: 3
    },
    {
        value: 'URL 모니터링',
        id: 'url-모니터링',
        level: 3
    },
    {
        value: '브라우저 모니터링',
        id: '브라우저-모니터링',
        level: 3
    },
    {
        value: '클라우드 모니터링',
        id: '클라우드-모니터링',
        level: 3
    },
    {
        value: 'Log 모니터링',
        id: 'log-모니터링',
        level: 3
    },
    {
        value: '와탭 모니터링의 주요 특징',
        id: '와탭-모니터링의-주요-특징',
        level: 2
    },
    {
        value: '실시간 모니터링 대시보드',
        id: '실시간-모니터링-대시보드',
        level: 3
    },
    {
        value: '다양한 알림 발행 채널 지원',
        id: '다양한-알림-발행-채널-지원',
        level: 3
    },
    {
        value: '통합 모니터링이 가능한 멀티 리전 지원',
        id: '통합-모니터링이-가능한-멀티-리전-지원',
        level: 3
    },
    {
        value: '수집서버의 안정성 및 확장성 보장',
        id: '수집서버의-안정성-및-확장성-보장',
        level: 3
    },
    {
        value: '협업 지원, 멀티 테넌트',
        id: '협업-지원-멀티-테넌트',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "다양한-플랫폼을-아우르는-통합-모니터링"
    }, `다양한 플랫폼을 아우르는 통합 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모니터링 서비스의 기본 목적은 자원(인적, 물적)의 공유입니다. 기존 모니터링 상품은 모니터링 대상 별로 별도의 수집서버, 웹 화면을 구축해야 합니다. 하지만 와탭의 모니터링 서비스는 수집 서버를 공유하되, 각 서비스의 독립성을 지켜주는 구조입니다. 통합 관리를 하기 위해 모니터링 서버는 유연한 확장 구조여야 하고, 멀티 테넌트 기능을 제공해야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `실시간으로 비즈니스 상황을 시각화하여 빠르게 문제를 파악할 수 있습니다. 트랜잭션을 실시간으로 트레이스해 재현없이 그대로 문제를 추적할 수 있습니다. 와탭 모니터링은 분산 환경의 IT 서비스 성능을 실시간으로 시각화하여 문제 인식과 대응에 대한 고객의 시간을 절약하고 선제적 대응을 가능하게 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "모니터링-범위"
    }, `모니터링 범위`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `애플리케이션, 서버, 데이터베이스, 쿠버네티스, 클라우드, 로그, URL 모니터링을 통해 시스템 모니터링의 거의 모든 부분을 커버합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "애플리케이션-모니터링"
    }, `애플리케이션 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("source", {
        src: "https://www.whatap.io/video/main-product/monitoring_step_0.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "java/introduction"
    }, `Java`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "php/introduction"
    }, `PHP`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "nodejs/introduction"
    }, `Node.js`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "python/introduction"
    }, `Python`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "dotnet/introduction"
    }, `.NET`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "golang/introduction"
    }, `Go`), ` 등의 애플리케이션 모니터링을 지원합니다. 현재 진행 중인 트랜잭션의 수행 현황을 실시간을 확인할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `클라우드, 하이브리드, 온프레미스 등 복잡하고 분산된 비즈니스 환경의 애플리케이션에 대해 실시간으로 성능 저하 문제를 감시하고 재현 없이 가장 빠르게 추적해 원인을 찾을 수 있습니다. 모든 애플리케이션 문제는 진행 중인 트랜잭션 증가로 나타납니다. 증가한 순간 수행 중인 SQL, HTTP Call, Method를 즉시 확인할 수 있다면 문제를 가장 빨리 인지하고 분석할 수 있습니다. 모든 트랜잭션의 수행 이력을 수집해 분석할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "서버-모니터링"
    }, `서버 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("source", {
        src: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/prd/application/monitoring_step_1.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "server/introduction"
    }, `서버 모니터링`), `은 10,000대 이상의 서버라도 모든 프로세스의 CPU, 메모리, IO 사용량 등을 초 단위로 수집해 순간적으로 발생하는 과부하 및 성능 저하를 실시간으로 분석하고 알려줄 수 있습니다. 클라우드 환경 애플리케이션에서 발생할 수 있는 취약점에 대한 자동 감지와 알림 기능을 제공하며, 매월, 매주 달라질 수 있는 시스템 규모를 쉽게 예측하고 관리할 수 있도록 도움을 줍니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "쿠버네티스-모니터링"
    }, `쿠버네티스 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("source", {
        src: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "kubernetes/introduction"
    }, `쿠버네티스 모니터링`), `은 컨테이너에서 애플리케이션까지의 통합 분석을 제공합니다. Pod, Worker Node, 애플리케이션을 모니터링해 Worker Node별 또는 Pod별 트랜잭션 성능 영향을 분석합니다. MSA 환경의 컨테이너 레벨, 서비스 레벨, 트랜잭션 레벨 3단계 상관 관계를 추적하고, Pod, 컨테이너, 서비스 간의 호출 관계를 시각적으로 확인할 수 있습니다. 옵저버빌리티를 위한 메트릭스-트레이스-로그 정보를 통합하여 제시합니다. 이를 통해 문제 발생 시 빠른 원인 분석 및 조치가 가능합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `EKS, AKS, GKE, OKE, Openshift, Cocktail, Accordion, PaaS-TA를 포함한 주요 플랫폼을 지원합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `와탭 랩스는 CNCF(Cloud Native Computing Foundation)와 KCSP(Kubernetes Certified Service Provider), 클라우드 서비스 보안 인증(CSAP)를 획득했습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "데이터베이스-모니터링"
    }, `데이터베이스 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("source", {
        src: "https://img.whatap.io/23/11/06/031831DB_prd.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `데이터베이스 모니터링에서는 데이터베이스의 액티브 세션, 실행중 SQL, 각종 지표의 통계 및 상세 정보를 실시간으로 모니터링해 튜닝 대상을 선별하고 해결 여부를 확인할 수 있습니다. 애플리케이션, 서버, 데이터베이스 모니터링 연계 뷰를 통해 서비스 이상 발생 시 즉각적인 DB 상태 확인 및 원인 분석을 할 수 있습니다. 효율적인 성능 데이터 수집 구조를 통해 다수의 데이터베이스 모니터링 시에도 빠르게 데이터를 수집하고 통합된 뷰를 제공해 분석이 용이합니다. 클라우드 환경의 다양한 DB의 성능 및 장애 상황을 번거로운 설치 없이도 한눈에 조망하며 실시간 모니터링합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `제공하는 상품은 다음과 같습니다. 링크를 클릭해 기술 문서를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "postgresql/monitoring-intro"
    }, `PostgreSQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "oracle/monitoring-intro"
    }, `Oracle`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "mysql/monitoring-intro"
    }, `MySQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "mssql/monitoring-intro"
    }, `SQL Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "tibero/monitoring-intro"
    }, `Tibero`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "cubrid/monitoring-intro"
    }, `CUBRID`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "altibase/monitoring-intro"
    }, `Altibase`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "redis/monitoring-intro"
    }, `Redis`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "mongodb/monitoring-intro"
    }, `MongoDB`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "url-모니터링"
    }, `URL 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "video-container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("video", {
        type: "video/mp4",
        autoplay: "true",
        loop: "true",
        muted: "true",
        width: "100%",
        height: "auto",
        class: "p-video"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("source", {
        src: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/prd/application/monitoring_step_4.mp4"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "url/url-intro"
    }, `URL 모니터링`), `은 실제 사용자 입장에서 사이트 이용에 문제가 있는지를 주기적으로 확인하는 관리자의 모니터링 업무를 대신합니다. HTTP 상태 코드를 통해 사이트 이용의 문제를 실시간으로 모니터링하고 지역에 따라 소요되는 접속 시간을 확인할 수 있습니다. 북미, 유럽, 아시아 등 세계 6개국 주요 도시에서 서비스 상태를 체크합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "브라우저-모니터링"
    }, `브라우저 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-start.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "browser"
    }, `브라우저 모니터링`), `은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다. 또한 브라우저 애플리케이션의 병목 현상이나 성능 이슈를 파악 후 최적화를 통해 모든 사용자에게 일관된 최상의 성능을 제공할 수 있도록 돕습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "클라우드-모니터링"
    }, `클라우드 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "ref-cloud/cloud"
    }, `클라우드 모니터링`), `은 클라우드 제공 업체의 API에 연결하여 모든 지표와 클라우드 이벤트를 실시간으로 수집합니다. 수집한 데이터를 대시보드를 통해서 실시간으로 확인하고 장애 원인에 대한 직접 분석을 할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `제공하는 상품은 다음과 같습니다. 링크를 클릭해 기술 문서를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "amazon-cloudwatch/install-agent"
    }, `Amazon CloudWatch`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "amazon-ecs/introduction"
    }, `Amazon ECS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "azure/install-agent"
    }, `Azure Monitor`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "ncloud/install-agent"
    }, `Naver Cloud Monitoring`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "oracle-cloud/install-agent"
    }, `Oracle Cloud Monitor`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "log-모니터링"
    }, `Log 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "log/introduction"
    }, `Log 모니터링`), `으로 클라우드를 포함한 복합 시스템에서 발생하는 다양하고 수 많은 로그들을 손쉽게 통합 관리하고 활용할 수 있습니다. 수백, 수천 대의 서버에서 발생하는 로그를 전송하여 통합 확인이 가능합니다. 화면을 통해 흘러가는 로그를 조회할 수 있습니다. 통계 목적으로 로그를 분류해 특정 단위로 발생하는 로그 건수 추이를 확인할 수 있습니다. 장애 발생 및 해소 시점과 밀접한 연관을 가진 로그 데이터를 탐색할 수 있고, 여러가지 조건으로 대량의 로그를 검색할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "와탭-모니터링의-주요-특징"
    }, `와탭 모니터링의 주요 특징`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "실시간-모니터링-대시보드"
    }, `실시간 모니터링 대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "apm-dashboard.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `서버의 다양한 정보 및 현황을 차트 형태의 대시보드를 통해 실시간으로 빠르게 인지할 수 있습니다. 각 지표들의 지나간 시간의 데이터를 확인해 분석할 수 있습니다. 진행 중인 트랜잭션을 통해 실시간으로 발생하는 병목 구간을 확인하고 문제를 해결할 수 있도록 도움을 줍니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "다양한-알림-발행-채널-지원"
    }, `다양한 알림 발행 채널 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "overview-notification.png",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `이벤트 조건을 설정하고 이메일, SMS, 메신저, 앱 푸시 등 다양한 경로로 알림을 제공합니다. 에이전트와 수집 서버의 통신 두절 및 애플리케이션 자원 사용률, 액티브 트랜잭션, 에러, 응답 지연, 응답 분포 이상에 대한 알림 설정을 할 수 있습니다. 또한 머신 러닝 기반 AI 알림 설정을 통해 응답 분포 패턴을 감지해 알림 기능을 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `경고 알림과 관련해 모니터링 플랫폼별 지원되는 이벤트 종류를 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "support-env#support-notice"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "통합-모니터링이-가능한-멀티-리전-지원"
    }, `통합 모니터링이 가능한 멀티 리전 지원`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_06.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `추가 리전이 생길 때마다 수집 서버만 설치하고 하나의 모니터링 화면에서 여러 리전의 서버를 통합 모리터링합니다. 와탭 모니터링은 IDC 센터 추가 구축 / 클라우드 플랫폼 추가 구축 등을 리전 구축만으로 수집 서버를 확장할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "수집서버의-안정성-및-확장성-보장"
    }, `수집서버의 안정성 및 확장성 보장`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_07.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `통합 모니터링을 위한 가장 기본은 서버의 확장성입니다. 증가하는 관리(모니터링) 대상 서버를 원활히 수용하기 위해서는 모니터링 서버는 내부 확장성을 가져야 합니다. 확장성 보장을 위해 와탭 모니터링 서버는 세분화된 마이크로 애플리케이션으로 구성되어 있으며, 결합도가 낮은 분산 환경입니다. 또한 데이터 안정성을 보장을 위해 이중화 및 데이터 복구 기능을 지원합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "협업-지원-멀티-테넌트"
    }, `협업 지원, 멀티 테넌트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        parentName: "p",
        "src": "https://www.whatap.io/img/platform/solution_08.jpg",
        "alt": null
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭 모니터링 서비스를 통해 개발팀은 독립적으로 모니터링을 이용하고, 운영팀은 이를 통합 모니터링할 수 있습니다. 하나의 모니터링 상품을 이용하지만 팀별/업무별 독립성은 보장하고, 이를 중앙 관리자가 통합하여 관제할 수 있습니다. 중앙 운영 관리자는 직접 개발팀 프로젝트의 권한을 관리하지 않고, 각 개발팀 프로젝트의 소유자가 권한을 관리하는 구조입니다.`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);