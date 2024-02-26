"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[98748],{

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

/***/ 4015:
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
    id: 'dashboard',
    title: '브라우저 모니터링 대시보드',
    description: '통계 데이터를 실시간으로 확인할 수 있는 대시보드입니다.',
    tags: [
        '브라우저 모니터링',
        '대시보드'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "browser/dashboard",
    "id": "browser/dashboard",
    "title": "브라우저 모니터링 대시보드",
    "description": "통계 데이터를 실시간으로 확인할 수 있는 대시보드입니다.",
    "source": "@site/docs/browser/dashboard.mdx",
    "sourceDirName": "browser",
    "slug": "/browser/dashboard",
    "permalink": "/whatap-docs/browser/dashboard",
    "draft": false,
    "editUrl": "undefined/docs/browser/dashboard.mdx",
    "tags": [
        {
            "label": "브라우저 모니터링",
            "permalink": "/whatap-docs/tags/브라우저-모니터링"
        },
        {
            "label": "대시보드",
            "permalink": "/whatap-docs/tags/대시보드"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "dashboard",
        "title": "브라우저 모니터링 대시보드",
        "description": "통계 데이터를 실시간으로 확인할 수 있는 대시보드입니다.",
        "tags": [
            "브라우저 모니터링",
            "대시보드"
        ]
    },
    "sidebar": "rumsSidebar",
    "previous": {
        "title": "시작하기 전에",
        "permalink": "/whatap-docs/browser/before-starting"
    },
    "next": {
        "title": "브라우저 에러",
        "permalink": "/whatap-docs/browser/browser-error-dashboard"
    }
};
const assets = {};
const toc = [
    {
        value: '페이지 로드 타임라인',
        id: '페이지-로드-타임라인',
        level: 2
    },
    {
        value: '페이지 로드 시간 및 로드 수',
        id: '페이지-로드-시간-및-로드-수',
        level: 2
    },
    {
        value: '페이지 로드 히트맵',
        id: '페이지-로드-히트맵',
        level: 2
    },
    {
        value: '페이지별, 메시지별 에러 건수',
        id: '페이지별-메시지별-에러-건수',
        level: 2
    },
    {
        value: '유저 세션 수, 유저 세션',
        id: '유저-세션-수-유저-세션',
        level: 2
    },
    {
        value: '평균 AJAX 응답 시간 TopN',
        id: '평균-ajax-응답-시간-topn',
        level: 2
    },
    {
        value: 'AJAX 실패 건수',
        id: 'ajax-실패-건수',
        level: 2
    },
    {
        value: 'AJAX 히트맵',
        id: 'ajax-히트맵',
        level: 2
    },
    {
        value: '히트맵 차트',
        id: '히트맵-차트',
        level: 3
    },
    {
        value: 'AJAX 이벤트 상세 정보',
        id: 'ajax-이벤트-상세-정보',
        level: 3
    },
    {
        value: '지역별 페이지 로드 시간 및 수',
        id: '지역별-페이지-로드-시간-및-수',
        level: 2
    },
    {
        value: '브라우저별 페이지 로드',
        id: '브라우저별-페이지-로드',
        level: 2
    },
    {
        value: '코어 웹 바이탈 지표',
        id: '코어-웹-바이탈-지표',
        level: 2
    },
    {
        value: '최대 콘텐츠풀 페인트(Largest Contentful Paint)',
        id: '최대-콘텐츠풀-페인트largest-contentful-paint',
        level: 3
    },
    {
        value: '최초 입력 지연(First Input Delay)',
        id: '최초-입력-지연first-input-delay',
        level: 3
    },
    {
        value: '누적 레이아웃 이동(Cumulative Layout Shift)',
        id: '누적-레이아웃-이동cumulative-layout-shift',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const ImgLang = makeShortcode("ImgLang");
const Cmdname = makeShortcode("Cmdname");
const Link = makeShortcode("Link");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `홈 화면 > 프로젝트 선택 > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `대시보드`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `브라우저 모니터링 대시보드`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-dashboard.png",
        desc: "Browser monitoring dashboard",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `실시간 데이터 및 과거 데이터를 조회할 수 있는 대시보드입니다. 브라우저 애플리케이션의 사용자 경험과 성능을 모니터링합니다. 성능 지표와 브라우저, 지역 등 다양한 측면에서 데이터를 제공하여 상태 이상을 빠르게 파악할 수 있습니다. 또한 페이지 로드 이벤트와 AJAX 이벤트의 성능 데이터도 제공합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `실시간 통계 데이터를 차트 형태의 위젯으로 구성한 대시보드입니다. 페이지 로드 중심의 통계 데이터와 웹 브라우저에서 발생하는 AJAX 데이터를 실시간으로 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `각 위젯에서 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "상세 보기 아이콘",
        src: (__webpack_require__(71543)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하면 해당 위젯 데이터를 전체 화면 크기로 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `위젯의 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "설정 아이콘",
        src: (__webpack_require__(45430)/* ["default"] */ .A),
        width: "20",
        height: "20"
    }), ` 버튼을 선택하면 차트 설정 화면이 나타납니다. 차트에 표시하는 옵션을 설정할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `웹 브라우저의 화면 크기에 따라 위젯 오른쪽 위에 아이콘의 모양이 다를 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(22829)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하면 추가 아이콘을 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `위젯 설정에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "dashboard-widget-setting"
    }, `다음 문서`), `를 참조하세요.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "페이지-로드-타임라인"
    }, `페이지 로드 타임라인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-timeline.png",
        desc: "Page load timeline",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션의 전체 페이지 로드 성능 정보를 제공합니다. 페이지 로드 시간과 로드 단계별 과정을 평균 시간으로 나타냅니다. 이를 통해 브라우저 애플리케이션의 전반적인 성능을 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `각 세부 단계에 대한 설명은 다음을 참조하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `리다이렉트`)), `: 브라우저가 웹 페이지를 불러올 때 리다이렉트 과정에서 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `캐싱`)), `: 브라우저가 웹 페이지를 불러오면서 캐시된 리소스를 검색하는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `DNS 탐색`)), `: 브라우저가 웹 페이지를 불러오면서 웹사이트 도메인을 조회하는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `TCP 연결`)), `: 브라우저가 웹 페이지를 불러올 때 TCP 헨드쉐이크 과정에서 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `응답 대기`)), `: 브라우저가 웹 페이지를 불러오면서 네트워크 요청을 보낸 후 서버로부터 첫 번째 바이트가 수신될 때까지 소요된 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `다운로드`)), `: 브라우저가 웹 페이지를 불러오면서 서버로부터 리소스를 다운로드하는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `렌더링`)), `: 서버로부터 다운로드한 리소스를 화면에 렌더링하고 페이지 로드 이벤트를 완료하는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Load Time`)), `: 브라우저가 웹 페이지를 완전히 불러오는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Front-End`)), `: 웹 페이지를 초기 렌더링하는데 소요한 평균 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Back-End`)), `: 페이지 로드 요청부터 리소스를 다운로드하는데 소요한 평균 시간입니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "페이지-로드-시간-및-로드-수"
    }, `페이지 로드 시간 및 로드 수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-time-num.png",
        desc: "Page load widget",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `최종 사용자가 브라우저 애플리케이션을 이용해 웹 페이지를 접속하면 각 페이지를 불러오는데 걸리는 시간과 빈도를 실시간으로 확인할 수 있습니다. 이 정보를 통해 개발자는 접속량이 많은 페이지와 로딩 속도가 느린 페이지를 특정하고 속도 개선이 필요한 페이지에 대한 우선 순위를 정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `예를 들어 많은 사용자가 접속하는 페이지의 로딩 시간이 길어진다면, 개발자는 해당 페이지의 성능을 개선하는데 집중할 수 있습니다. 반대로 로딩 속도가 느린 페이지의 접속량이 크지 않다면 개발자는 해당 페이지의 개선보다 다른 페이지를 개선하는데 집중하는 것이 효율적일 것입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `전체 현황을 확인하려면 오른쪽 상단의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 그룹`)), `을 선택하세요. 메트릭스 목록에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `전체`)), `를 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `평균 페이지 로드 시간 TopN`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `평균 페이지 로드 시간을 페이지 그룹별로 표시합니다. 수평 막대 차트는 조회 시간 동안 발생한 페이지 그룹별 로드 시간의 평균입니다. 상위 8개까지만 표시됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 로드 수 TopN`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `페이지 로드 수를 페이지 그룹별로 표시합니다. 수평 막대 차트는 조회 시간 동안 발생한 페이지 그룹별 로드수의 합계입니다. 상위 8개까지만 표시됩니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "페이지-로드-히트맵"
    }, `페이지 로드 히트맵`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-hitmap.png",
        desc: "Page load hitmap",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 로드 히트맵`)), `은 시간에 따른 페이지 로드의 응답 시간을 분포도 차트로 표현합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `가로축은 페이지 로드 이벤트의 종료시간, 세로축은 페이지 로드 이벤트의 경과 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `정상 페이지 로드 이벤트는 하늘색 → 파란색 → 남색 순으로 표현합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `에러 발생 페이지 로드 이벤트는 노란색 → 주황색 → 빨간색 순으로 표현합니다. 에러 페이지 로드 이벤트는 페이지를 불러오는 중 브라우저 에러가 발생한 경우입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `상세 정보를 확인하려면 차트의 특정 영역을 드래그하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 로드 상세`)), ` 창이 나타나며 드래그한 영역의 로드 이벤트에 대한 상세 정보를 확인할 수 있습니다. 관련한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "analyze-pageload#pageload-details"
    }, `다음 문서`), `를 참조하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "페이지별-메시지별-에러-건수"
    }, `페이지별, 메시지별 에러 건수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-error-num.png",
        desc: "Error count",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `최종 사용자가 브라우저 애플리케이션을 사용하는 동안 발생한 브라우저 에러를 표시합니다. 페이지별로 발생한 에러와 에러 메시지별로 표시합니다. 이를 통해 에러가 주로 발생되는 페이지와 에러에 대한 내용을 빠르게 식별할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 에러 건수`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `각 페이지에서 발생한 모든 에러 건수를 페이지별로 표시합니다. 차트 위에 마우스 커서를 가져가면 페이지 그룹의 에러 건수를 툴팁 형태로 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `에러 메시지별 에러 건수`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `콘솔 에러가 아닌 소스 에러 및 AJAX 에러에 대한 메시지를 표시합니다. 수평 막대 차트는 조회 시간 동안 발생한 에러 메시지별 오류 수의 합계입니다. 상위 8개까지만 표시됩니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "유저-세션-수-유저-세션"
    }, `유저 세션 수, 유저 세션`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-user-session.png",
        desc: "User sessions",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션에 접속한 사용자 세션 수를 실시간으로 모니터링할 수 있습니다. 이를 통해 브라우저 애플리케이션의 사용량을 파악할 수 있습니다. 세션 수가 급격하게 늘어난다면 사용자 수가 증가했음을 의미합니다. 반면 세션 수가 감소하면 사용자가 애플리케이션을 더 이상 사용하지 않거나 불편한 경험을 겪었을 가능성이 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `유선 세션 위젯과 다른 위젯들을 함께 사용하면 애플리케이션의 사용 현황을 종합적으로 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `유저 세션 수`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `조회 시간을 기준으로 중복을 제거한 총 유저 세션 수를 표시합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `유저 세션`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `5초, 5분, 1시간 간격으로 중복되지 않은 유저 세션 수를 표시합니다. 위젯의 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(22829)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택한 다음 메트릭스 변경 버튼을 선택하세요. 원하는 시각 간격을 선택할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "평균-ajax-응답-시간-topn"
    }, `평균 AJAX 응답 시간 TopN`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-ajax-response-time.png",
        desc: "AJAX response time",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션은 AJAX를 통해 렌더링에 필요한 데이터를 주고 받는 경우가 많습니다. 페이지 로드 이후에도 AJAX가 계속해서 발생하는 페이지에서는 AJAX의 로드가 브라우저 애플리케이션의 사용자 경험에서 중요한 지표로 사용될 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `평균 AJAX 응답 시간 TopN`)), ` 위젯은 최종 사용자가 브라우저 애플리케이션을 사용할 때 발생하는 AJAX의 평균 응답시간입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `AJAX 요청 path별로 차트를 제공하며 요청 호스트별, 요청 페이지별, 전체 평균 기준으로 선택해 확인할 수 있습니다. 위젯의 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(22829)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택한 다음 메트릭스 변경 버튼을 선택하세요. 차트 데이터를 변경할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `기본으로 조회 시간 기준 상위 10개에 해당하는 데이터가 표시됩니다. 데이터 개수를 변경하려면 위젯의 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(22829)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "상세 보기 아이콘",
        src: (__webpack_require__(71543)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하세요. 화면 오른쪽 위에 상위 N 버튼을 선택하면 개수를 변경할 수 있는 옵션이 나타납니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "ajax-실패-건수"
    }, `AJAX 실패 건수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-ajax-fail-count.png",
        desc: "AJAX fail count",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `AJAX 에러는 상태 코드가 400 이상이거나 요청을 자체를 하지 못해 취소된 경우를 의미합니다. 브라우저 애플리케이션에서 발생하는 AJAX 에러 건수에 대하여 fetch 또는 xhr 타입으로 분류하여 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "ajax-히트맵"
    }, `AJAX 히트맵`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션에서 발생한 AJAX 요청을 히트맵 차트 형태로 제공하며 각 요청에 대한 상세 정보는 테이블 형식으로 확인할 수 있습니다. 각 AJAX를 분석하여 성능 이상의 원인을 특정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ajaxAnalytics",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에 대한 자세한 내용은 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "analyze-ajax-hitmap",
        mdxType: "Link"
    }, "다음 문서"), "를 참조하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "히트맵-차트"
    }, `히트맵 차트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-ajax-hitmap.png",
        desc: "AJAX hitmap",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `AJAX 히트맵은 시간에 따른 AJAX 요청의 응답 시간을 분포도 차트로 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `가로축은 AJAX 종료 시간, 세로축은 AJAX 로드 시간입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `정상 AJAX는 하늘색 → 파란색 → 남색 순으로 표현합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `에러 AJAX는 노란색 → 주황색 → 빨간색 순으로 표현합니다. 상태 코드가 400인 경우입니다. 차트에서 에러만 확인하려면 위젯 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `에러`)), ` 버튼을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Y축 자동`)), ` 버튼이 활성화되어 있으면 y축의 최대값이 분포도에 따라 자동으로 변경됩니다. y축을 고정하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Y축 자동`)), ` 버튼을 선택해 비활성화하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "위 방향 아이콘",
        src: (__webpack_require__(52389)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 또는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "아래 방향 아이콘",
        src: (__webpack_require__(56582)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택해 차트의 위치를 위 또는 아래 방향으로 이동할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `상세 정보를 확인하려면 차트의 특정 영역을 드래그하세요. 드래그한 영역의 AJAX 이벤트 목록과 상세 정보를 확인할 수 있는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ajax",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 창이 나타납니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "ajax-이벤트-상세-정보"
    }, `AJAX 이벤트 상세 정보`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-ajax-hitmap-details.png",
        desc: "AJAX 이벤트 상세 정보",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ajax",
        className: "uitext",
        mdxType: "Cmdname"
    }), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 창에서 각 항목을 선택하면 상세 내용을 조회할 수 있는 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ajax",
        className: "uitext",
        mdxType: "Cmdname"
    }), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "info",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 창이 화면 오른쪽에 나타납니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `에러가 발생한 AJAX 목록만을 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ajax",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "info",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 창의 왼쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "all",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 선택 상자에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "error",
        className: "uitext",
        mdxType: "Cmdname"
    }), `를 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `각 AJAX는 다음의 정보를 포함하고 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `AJAX URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `AJAX를 요청한 페이지 URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `브라우저, 기기, OS 환경 정보`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `에러 메시지 정보`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `지역 정보`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `AJAX 상세 타이밍 정보`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "지역별-페이지-로드-시간-및-수"
    }, `지역별 페이지 로드 시간 및 수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-map.png",
        desc: "Pageload map",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션의 지역별 페이지 로드 시간과 페이지 로드 수를 지도 차트와 테이블로 표현합니다. 지역별로 웹사이트의 성능을 쉽게 비교할 수 있습니다. 페이지 로드 시간은 2초 간격으로 범례를 표시하고 페이지 로드 수는 백분위수 50, 75, 90, 95 간격으로 범례를 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `조회 시간 기준, 페이지 로드 수가 가장 많은 국가를 위젯에 기본 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `마우스 휠을 스크롤하거나 슬라이더를 이용해 지도를 확대 또는 축소할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `세계 지도를 보려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "지구 아이콘",
        src: (__webpack_require__(6887)/* ["default"] */ .A),
        width: "50",
        height: "50"
    }), ` 버튼을 선택하세요. 특정 국가를 선택해 지역별 데이터를 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `테이블 형태로 데이터를 확인하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "테이블 아이콘",
        src: (__webpack_require__(93365)/* ["default"] */ .A),
        width: "50",
        height: "50"
    }), ` 버튼을 선택하세요. 지도 형태로 되돌아가려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "지도 아이콘",
        src: (__webpack_require__(20595)/* ["default"] */ .A),
        width: "50",
        height: "50"
    }), ` 버튼을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-map-table.png",
        desc: "Pageload table",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `지역별 지도의 경우 상위의 행정 구역을 기준으로 데이터를 표시합니다. (한국 기준: 도, 광역시)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "info"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `This site or product includes IP2Location LITE data available from `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://lite.ip2location.com"
    }, `https://lite.ip2location.com`), `.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "브라우저별-페이지-로드"
    }, `브라우저별 페이지 로드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-pageload-by-browser.png",
        desc: "Pageload by browser",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 애플리케이션별 페이지 로드 시간과 페이지 로드 수를 제공합니다. 브라우저별 성능을 쉽게 비교할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 로드 시간`)), ` 또는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `페이지 로드 수`)), `로 데이터를 변경하려면 위젯의 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(22829)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택한 다음 메트릭스 버튼을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "코어-웹-바이탈-지표"
    }, `코어 웹 바이탈 지표`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `코어 웹 바이탈(Core Web Vitals)은 구글에서 정의한 사용자 경험에 영향을 미치는 다양한 측정값 중에서 웹사이트의 성능과 관련된 3가지 중요한 지표입니다. 지표들은 웹사이트가 어떻게 로딩되고 사용자와 상호 작용하는지에 따라 다르게 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `최대 콘텐츠풀 페인트`), `(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Largest Contentful Paint`), `): 웹사이트에서 가장 큰 콘텐츠 요소가 로드되는 시간을 의미하는 지표입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `최초 입력 지연`), `(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `First Input Delay`), `): 웹사이트가 로딩되고 사용자가 첫 번째 입력을 하기까지 걸리는 시간입니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `누적 레이아웃 이동`), `(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Cumulative Layout Shift`), `): 웹사이트가 로딩되는 동안 레이아웃이 얼마나 자주 변경되는지를 나타내는 지표입니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `이러한 측정값들은 웹사이트의 성능을 평가하고 개선하는 데 중요한 역할을 합니다. 코어 웹 바이탈 지표를 이해하고 측정하는 것은 사용자 경험을 개선하고 웹사이트의 성능을 최적화하는 데 매우 유용합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "최대-콘텐츠풀-페인트largest-contentful-paint"
    }, `최대 콘텐츠풀 페인트(Largest Contentful Paint)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-lcp-widget.png",
        desc: "LCP",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `각 페이지 그룹의 평균 최대 콘텐츠풀 페인트 시간을 표시합니다. 조회 시간 동안 발생한 각 페이지 그룹 중 상위 8개 그룹의 최대 콘텐츠풀 페인트 시간의 평균을 수평 막대 차트로 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "최초-입력-지연first-input-delay"
    }, `최초 입력 지연(First Input Delay)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-cls-widget.png",
        desc: "FID",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `각 페이지 그룹의 평균 최초 입력 지연 시간을 표시합니다. 차트 위로 마우스를 오버하면 해당 페이지 그룹에 대한 시간 값이 표시됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "누적-레이아웃-이동cumulative-layout-shift"
    }, `누적 레이아웃 이동(Cumulative Layout Shift)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-fid-widget.png",
        desc: "CLS",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `각 페이지 그룹의 누적 레이아웃 값을 표시합니다. 차트 위로 마우스를 오버하면 해당 페이지 그룹에 대한 값이 표시됩니다.`));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 56582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bjwvdGl0bGU+IC0tPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1kb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTEuMzAwMDAwLCA0NC4zMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS40MTQyMTM1NiwxMy40MzUwMjg4IEw0LDEyLjAyMDgxNTMgTDExLjA3MSw0Ljk0OTQ2NjA5IEw0LC0yLjEyMTMyMDM0IEw1LjQxNDIxMzU2LC0zLjUzNTUzMzkxIEwxMy44OTk0OTQ5LDQuOTQ5NzQ3NDcgTDUuNDE0MjEzNTYsMTMuNDM1MDI4OCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljk0OTc0NywgNC45NDk3NDcpIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 20595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Mi43MDgzIDYuMjVMNDIuMzc1IDYuMzEyNUwzMS4yNSAxMC42MjVMMTguNzUgNi4yNUw3IDEwLjIwODNDNi41NjI1IDEwLjM1NDIgNi4yNSAxMC43MjkyIDYuMjUgMTEuMjA4M1Y0Mi43MDgzQzYuMjUgNDMuMjkxNyA2LjcwODMzIDQzLjc1IDcuMjkxNjcgNDMuNzVMNy42MjUgNDMuNjg3NUwxOC43NSAzOS4zNzVMMzEuMjUgNDMuNzVMNDMgMzkuNzkxN0M0My40Mzc1IDM5LjY0NTggNDMuNzUgMzkuMjcwOCA0My43NSAzOC43OTE3VjcuMjkxNjdDNDMuNzUgNi43MDgzMyA0My4yOTE3IDYuMjUgNDIuNzA4MyA2LjI1Wk0yMC44MzMzIDExLjM5NThMMjkuMTY2NyAxNC4zMTI1VjM4LjYwNDJMMjAuODMzMyAzNS42ODc1VjExLjM5NThaTTEwLjQxNjcgMTMuNDU4M0wxNi42NjY3IDExLjM1NDJWMzUuNzI5MkwxMC40MTY3IDM4LjE0NThWMTMuNDU4M1pNMzkuNTgzMyAzNi41NDE3TDMzLjMzMzMgMzguNjQ1OFYxNC4yOTE3TDM5LjU4MzMgMTEuODc1VjM2LjU0MTdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 6887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45Nzk1IDQuMTY2OTlDMTMuNDc5NSA0LjE2Njk5IDQuMTY2OTkgMTMuNTAwMyA0LjE2Njk5IDI1LjAwMDNDNC4xNjY5OSAzNi41MDAzIDEzLjQ3OTUgNDUuODMzNyAyNC45Nzk1IDQ1LjgzMzdDMzYuNTAwMyA0NS44MzM3IDQ1LjgzMzcgMzYuNTAwMyA0NS44MzM3IDI1LjAwMDNDNDUuODMzNyAxMy41MDAzIDM2LjUwMDMgNC4xNjY5OSAyNC45Nzk1IDQuMTY2OTlWNC4xNjY5OVpNMzkuNDE3IDE2LjY2N0gzMy4yNzEyQzMyLjYwNDUgMTQuMDYyOCAzMS42NDYyIDExLjU2MjggMzAuMzk2MiA5LjI1MDMzQzM0LjIyOTUgMTAuNTYyOCAzNy40MTcgMTMuMjI5NSAzOS40MTcgMTYuNjY3VjE2LjY2N1pNMjUuMDAwMyA4LjQxNjk5QzI2LjcyOTUgMTAuOTE3IDI4LjA4MzcgMTMuNjg3OCAyOC45Nzk1IDE2LjY2N0gyMS4wMjEyQzIxLjkxNyAxMy42ODc4IDIzLjI3MTIgMTAuOTE3IDI1LjAwMDMgOC40MTY5OVY4LjQxNjk5Wk04Ljg3NTMzIDI5LjE2N0M4LjU0MTk5IDI3LjgzMzcgOC4zMzM2NiAyNi40Mzc4IDguMzMzNjYgMjUuMDAwM0M4LjMzMzY2IDIzLjU2MjggOC41NDE5OSAyMi4xNjcgOC44NzUzMyAyMC44MzM3SDE1LjkxN0MxNS43NTAzIDIyLjIwODcgMTUuNjI1MyAyMy41ODM3IDE1LjYyNTMgMjUuMDAwM0MxNS42MjUzIDI2LjQxNyAxNS43NTAzIDI3Ljc5MiAxNS45MTcgMjkuMTY3SDguODc1MzNWMjkuMTY3Wk0xMC41ODM3IDMzLjMzMzdIMTYuNzI5NUMxNy4zOTYyIDM1LjkzNzggMTguMzU0NSAzOC40Mzc4IDE5LjYwNDUgNDAuNzUwM0MxNS43NzEyIDM5LjQzNzggMTIuNTgzNyAzNi43OTIgMTAuNTgzNyAzMy4zMzM3VjMzLjMzMzdaTTE2LjcyOTUgMTYuNjY3SDEwLjU4MzdDMTIuNTgzNyAxMy4yMDg3IDE1Ljc3MTIgMTAuNTYyOCAxOS42MDQ1IDkuMjUwMzNDMTguMzU0NSAxMS41NjI4IDE3LjM5NjIgMTQuMDYyOCAxNi43Mjk1IDE2LjY2N1YxNi42NjdaTTI1LjAwMDMgNDEuNTgzN0MyMy4yNzEyIDM5LjA4MzcgMjEuOTE3IDM2LjMxMjggMjEuMDIxMiAzMy4zMzM3SDI4Ljk3OTVDMjguMDgzNyAzNi4zMTI4IDI2LjcyOTUgMzkuMDgzNyAyNS4wMDAzIDQxLjU4MzdWNDEuNTgzN1pNMjkuODc1MyAyOS4xNjdIMjAuMTI1M0MxOS45Mzc4IDI3Ljc5MiAxOS43OTIgMjYuNDE3IDE5Ljc5MiAyNS4wMDAzQzE5Ljc5MiAyMy41ODM3IDE5LjkzNzggMjIuMTg3OCAyMC4xMjUzIDIwLjgzMzdIMjkuODc1M0MzMC4wNjI4IDIyLjE4NzggMzAuMjA4NyAyMy41ODM3IDMwLjIwODcgMjUuMDAwM0MzMC4yMDg3IDI2LjQxNyAzMC4wNjI4IDI3Ljc5MiAyOS44NzUzIDI5LjE2N1YyOS4xNjdaTTMwLjM5NjIgNDAuNzUwM0MzMS42NDYyIDM4LjQzNzggMzIuNjA0NSAzNS45Mzc4IDMzLjI3MTIgMzMuMzMzN0gzOS40MTdDMzcuNDE3IDM2Ljc3MTIgMzQuMjI5NSAzOS40Mzc4IDMwLjM5NjIgNDAuNzUwM1Y0MC43NTAzWk0zNC4wODM3IDI5LjE2N0MzNC4yNTAzIDI3Ljc5MiAzNC4zNzUzIDI2LjQxNyAzNC4zNzUzIDI1LjAwMDNDMzQuMzc1MyAyMy41ODM3IDM0LjI1MDMgMjIuMjA4NyAzNC4wODM3IDIwLjgzMzdINDEuMTI1M0M0MS40NTg3IDIyLjE2NyA0MS42NjcgMjMuNTYyOCA0MS42NjcgMjUuMDAwM0M0MS42NjcgMjYuNDM3OCA0MS40NTg3IDI3LjgzMzcgNDEuMTI1MyAyOS4xNjdIMzQuMDgzN1YyOS4xNjdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 93365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00NS44MzM3IDQuMTY2OTlINC4xNjY5OVYxNi42NjdWMjAuODMzN1Y0NS44MzM3SDQ1LjgzMzdWMjAuODMzN1YxNi42NjdWNC4xNjY5OVpNOC4zMzM2NiAyOS4xNjdWMjAuODMzN0gxNi42NjdWMjkuMTY3SDguMzMzNjZaTTguMzMzNjYgMzMuMzMzN1Y0MS42NjdIMTYuNjY3VjMzLjMzMzdIOC4zMzM2NlpNMjAuODMzNyAzMy4zMzM3VjQxLjY2N0gyOS4xNjdWMzMuMzMzN0gyMC44MzM3Wk0zMy4zMzM3IDMzLjMzMzdWNDEuNjY3SDQxLjY2N1YzMy4zMzM3SDMzLjMzMzdaTTQxLjY2NyAyOS4xNjdIMzMuMzMzN1YyMC44MzM3SDQxLjY2N1YyOS4xNjdaTTI5LjE2NyAyOS4xNjdIMjAuODMzN1YyMC44MzM3SDI5LjE2N1YyOS4xNjdaTTQxLjY2NyAxNi42NjdIMzMuMzMzN0gyOS4xNjdIMjAuODMzN0gxNi42NjdIOC4zMzM2NlY4LjMzMzY2SDQxLjY2N1YxNi42NjdaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 71543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZnVsbHNjcmVlbjwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMzI0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWZ1bGxzY3JlZW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iSWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDEyIEwyLDE2IEw2LDE2IEw2LDE4IEwtMS41ODA5NTc1OWUtMTMsMTggTC0xLjU4MDk1NzU5ZS0xMywxMiBMMiwxMiBaIE0xOCwxMiBMMTgsMTggTDEyLDE4IEwxMiwxNiBMMTYsMTYgTDE2LDEyIEwxOCwxMiBaIE02LDIuNDg2ODk5NThlLTE0IEw2LDIgTDIsMiBMMiw2IEwtMS41ODA5NTc1OWUtMTMsNiBMLTEuNTgwOTU3NTllLTEzLDMuNjYwOTYwNDJlLTE0IEwtMS41ODA5NTc1OWUtMTMsMy42NjA5NjA0MmUtMTQgTDYsMi40ODY4OTk1OGUtMTQgWiBNMTgsLTMuMTk3NDQyMzFlLTE0IEwxOCw2IEwxNiw2IEwxNiwyIEwxMiwyIEwxMiwtMy4xOTc0NDIzMWUtMTQgTDE4LC0zLjE5NzQ0MjMxZS0xNCBMMTgsLTMuMTk3NDQyMzFlLTE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 22829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbW9yZS12ZXJ0aWNhbDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMjk1MS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtbW9yZS12ZXJ0aWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgNjA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwxNCBDMy4xMDQ1Njk1LDE0IDQsMTQuODk1NDMwNSA0LDE2IEM0LDE3LjEwNDU2OTUgMy4xMDQ1Njk1LDE4IDIsMTggQzAuODk1NDMwNSwxOCAwLDE3LjEwNDU2OTUgMCwxNiBDMCwxNC44OTU0MzA1IDAuODk1NDMwNSwxNCAyLDE0IFogTTIsNyBDMy4xMDQ1Njk1LDcgNCw3Ljg5NTQzMDUgNCw5IEM0LDEwLjEwNDU2OTUgMy4xMDQ1Njk1LDExIDIsMTEgQzAuODk1NDMwNSwxMSAwLDEwLjEwNDU2OTUgMCw5IEMwLDcuODk1NDMwNSAwLjg5NTQzMDUsNyAyLDcgWiBNMiwwIEMzLjEwNDU2OTUsMCA0LDAuODk1NDMwNSA0LDIgQzQsMy4xMDQ1Njk1IDMuMTA0NTY5NSw0IDIsNCBDMC44OTU0MzA1LDQgMCwzLjEwNDU2OTUgMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 45430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4=");

/***/ }),

/***/ 52389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdXA8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ4LjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA3LjMwMDAwMCwgNDQuNzAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDcuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNDE0MjEzNTYsMTMuNDM1MDI4OCBMNCwxMi4wMjA4MTUzIEwxMS4wNzEsNC45NDk0NjYwOSBMNCwtMi4xMjEzMjAzNCBMNS40MTQyMTM1NiwtMy41MzU1MzM5MSBMMTMuODk5NDk0OSw0Ljk0OTc0NzQ3IEw1LjQxNDIxMzU2LDEzLjQzNTAyODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC45NDk3NDcsIDQuOTQ5NzQ3KSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ })

}]);