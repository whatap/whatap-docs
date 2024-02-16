"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[13810],{

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

/***/ 76986:
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
    id: 'browser',
    title: '브라우저 모니터링',
    description: '브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.',
    tags: [
        '브라우저 모니터링'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "browser",
    "id": "browser",
    "title": "브라우저 모니터링",
    "description": "브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.",
    "source": "@site/docs/browser.mdx",
    "sourceDirName": ".",
    "slug": "/browser",
    "permalink": "/whatap-docs/browser",
    "draft": false,
    "editUrl": "undefined/docs/browser.mdx",
    "tags": [
        {
            "label": "브라우저 모니터링",
            "permalink": "/whatap-docs/tags/브라우저-모니터링"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "browser",
        "title": "브라우저 모니터링",
        "description": "브라우저 모니터링(Browser Monitoring)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다.",
        "tags": [
            "브라우저 모니터링"
        ]
    },
    "sidebar": "rumsSidebar",
    "next": {
        "title": "브라우저 호환성",
        "permalink": "/whatap-docs/browser/browser-compatibility"
    }
};
const assets = {};
const toc = [
    {
        value: '브라우저 모니터링, 왜 필요한가?',
        id: '브라우저-모니터링-왜-필요한가',
        level: 2
    },
    {
        value: '주요 기능',
        id: '주요-기능',
        level: 2
    },
    {
        value: '페이지 로드 성능 정보 제공',
        id: '페이지-로드-성능-정보-제공',
        level: 3
    },
    {
        value: 'AJAX 성능 정보 제공',
        id: 'ajax-성능-정보-제공',
        level: 3
    },
    {
        value: '웹 페이지 리소스 정보 제공',
        id: '웹-페이지-리소스-정보-제공',
        level: 3
    },
    {
        value: '브라우저 에러 정보 제공',
        id: '브라우저-에러-정보-제공',
        level: 3
    },
    {
        value: '코어 웹 바이탈 정보 제공',
        id: '코어-웹-바이탈-정보-제공',
        level: 3
    },
    {
        value: '사용자 접속 환경 분석',
        id: '사용자-접속-환경-분석',
        level: 3
    },
    {
        value: '브라우저 모니터링 시작하기',
        id: '브라우저-모니터링-시작하기',
        level: 2
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Browser Monitoring`), `)은 브라우저 애플리케이션의 페이지 로드 시간, 서버 응답 시간, 리소스 로딩 시간, 브라우저 에러 등 다양한 성능 지표를 수집하여 분석합니다. 수집, 분석한 데이터를 통해 브라우저 애플리케이션의 병목 현상이나 성능 이슈를 파악하고 최적화할 수 있습니다. 또한 브라우저별로 성능 차이를 파악할 수 있어 최상의 사용자 경험을 제공할 수 있는 데이터를 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "브라우저-모니터링-왜-필요한가"
    }, `브라우저 모니터링, 왜 필요한가?`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `클라우드와 MSA 시대의 복잡한 서버환경에서 브라우저 애플리케이션의 응답 시간 최적화`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `클라우드, MSA 등의 등장에 따라 서버 환경이 더욱 복잡해졌습니다. 이렇게 복잡해진 환경에서 개별 서버의 성능 지표만으로는 브라우저 애플리케이션의 응답 시간 지연 원인을 파악하기 어렵습니다. 이에 따라 서버와 클라이언트 간의 네트워크 상황과 브라우저의 로딩 시간을 포함한 요소를 고려해야 합니다. 또한 응답 시간에 영향을 미치는 브라우저의 요청 데이터 사이즈나 요청 주기 등 관련 요소들도 고려해야 합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `실 사용자의 응답 시간 및 사용자 경험 최적화를 위해 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `은 필요합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `실 사용자 환경에서 발생하는 예측 불가능한 에러에 대한 빠른 대응`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `개발, 수정, 배포가 빈번하게 발생하는 CI/CD 도입으로 실제 사용자에게 발생하는 에러를 배포 전 테스트만으로 예방하기 어렵습니다. 실 사용자가 웹 페이지를 이용하면서 발생하는 에러는 사용자의 디바이스나 브라우저 종류, 네트워크 상태 등에 따라 다양한 에러가 발생할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `을 통해 실제 사용자에게 발생하는 에러를 모니터링하고 이를 예방하거나 최소화하는 기술적인 방법을 적용해야 합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `다양한 브라우저와 디바이스에서 최적화된 사용자 경험을 제공하기 위한 통계 데이터 제공`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `브라우저의 종류와 디바이스가 다양해짐에 따라 실제 사용자들이 경험하는 에러를 모니터링해야 합니다. 예를 들어 특정 브라우저 또는 디바이스에서만 발생하는 에러를 확인할 수 있습니다. 이를 통해 사용자 경험을 개선하고, 더 나은 서비스를 제공할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `SPA 환경에서 브라우저 애플리케이션 성능 분석 및 최적화`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `웹 애플리케이션인 SPA(Single Page Application)에서는 주로 브라우저에서 웹 페이지를 구현합니다. 이전에는 웹 페이지의 모든 요소가 서버에서 렌더링되었지만, 이제는 브라우저에서 페이지를 렌더링하고 필요한 데이터만 서버에서 가져와 사용합니다. 이렇게 웹 애플리케이션이 복잡해지면서 서버만 관리한다고 해서 성능이 빠르거나 느리다는 것을 알 수 없습니다. 따라서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `을 통해 브라우저 애플리케이션의 문제를 찾고 최적화를 수행해야 합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `1st Party와 3rd Party 리소스의 종합적 응답 시간 측정 및 최적화를 통한 사용자 체감 성능 개선`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `웹 서비스의 실 사용자 체감 성능은 사내에서 직접 운영하는 1st party와 외부에서 운영하는 3rd party의 응답 시간을 종합적으로 측정해야 합니다. 3rd party 리소스의 응답 시간 지연만으로 전체 응답 시간이 지연될 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "주요-기능"
    }, `주요 기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `은 최종 사용자 입장에서 웹사이트 이용의 문제 여부, 최종 사용자의 사용성, 최종 사용자의 환경을 모니터링합니다. 다음의 주요 기능을 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "페이지-로드-성능-정보-제공"
    }, `페이지 로드 성능 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-timeline.png",
        desc: "Page load timeline",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-details.png",
        desc: "Page load details",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저가 웹 페이지를 얼마나 빠르게 로드하는지를 모니터링합니다. 사용자들은 빠르게 로드되는 웹 페이지를 선호하므로 페이지 로드 성능 정보를 통해 개발자들은 웹 페이지의 성능을 최적화할 수 있습니다. 페이지 로드 성능 정보는 브라우저가 페이지를 로드하는 데 걸린 시간, 페이지 요소의 로드 시간, 서버 응답 시간 등을 제공합니다. 이 정보를 통해 웹 페이지의 성능을 개선할 수 있는 방안을 찾을 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "ajax-성능-정보-제공"
    }, `AJAX 성능 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-ajax-hitmap.png",
        desc: "AJAX hitmap",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `AJAX를 통해 서버와 데이터를 주고 받을 때의 성능 정보를 모니터링합니다. AJAX는 웹 페이지가 서버와 비동기적으로 데이터를 교환하여, 페이지를 새로고침하지 않고도 브라우저 애플리케이션을 업데이트할 수 있게 해주는 기술입니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `은 AJAX 요청 및 응답 시간 측정, 서버 응답 시간 분석, 네트워크 대기 시간 등 다양한 데이터를 수집합니다. 수집 데이터는 브라우저 애플리케이션의 성능 향상 및 사용자 경험을 개선하는데 유용합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "웹-페이지-리소스-정보-제공"
    }, `웹 페이지 리소스 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-page-resource-list.png",
        desc: "Web page resource list",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저가 서버로부터 다운로드하는 리소스는 페이지 로드 성능에 큰 영향을 끼칩니다. 리소스 목록에서는 로딩 속도가 느리거나 파일 사이즈가 큰 리소스를 빠르게 파악할 수 있습니다. 이러한 정보를 사용해 웹 페이지의 성능을 향상시키고 사용자 경험을 개선하는데 활용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "브라우저-에러-정보-제공"
    }, `브라우저 에러 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-error-info.png",
        desc: "Browser error information",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자가 웹사이트를 이용하는 과정에서 발생하는 브라우저 에러 정보를 수집합니다. 이 정보를 통해 개발자는 사용자가 웹사이트를 이용하면서 겪는 문제를 파악하고 신속 대응할 수 있습니다. 사용자 경험을 개선하고 웹사이트의 안정성을 높일 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "코어-웹-바이탈-정보-제공"
    }, `코어 웹 바이탈 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "rum-core-web-vitals.png",
        desc: "Core web vitals",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `코어 웹 바이탈은 구글에서 정의한 웹 페이지의 성능에 대한 중요한 지표로 페이지 로드 시간과 응답 시간, 렌더링 시간, 사용자 상호 작용 시간 등이 있습니다. 이러한 정보를 수집하고 분석하여 웹 사이트가 상위 노출하는 데 도움이 될 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "사용자-접속-환경-분석"
    }, `사용자 접속 환경 분석`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-user-env.png",
        desc: "User environments",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자의 디바이스 정보 및 브라우저 정보, 운영체제 정보, 지역 정보 등 다양한 사용자 접속 환경을 분석합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `특정 디바이스에서 문제가 발생하는 경우 해당 디바이스의 정보를 분석하여 문제를 해결할 수 있습니다. 또한 특정 지역에서 웹 애플리케이션이 느리게 동작하는 경우 해당 지역의 정보를 파악하여 최적화를 수행할 수 있습니다. 사용자들이 사용하는 브라우저나 운영체제 등을 파악하여 웹 애플리케이션의 호환성 문제를 해결하는데 필요한 정보를 제공할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "브라우저-모니터링-시작하기"
    }, `브라우저 모니터링 시작하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음의 단계를 따라 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `브라우저 모니터링`), `을 시작할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `와탭 계정이 없다면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://www.whatap.io/ko/signup/"
    }, `회원 가입`), `을 진행하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `브라우저 호환성 및 사전 설정을 살펴보세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io"
    }, `와탭 모니터링 서비스`), `로 이동해 브라우저 프로젝트를 생성하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `브라우저 에이전트를 적용하세요.`))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);