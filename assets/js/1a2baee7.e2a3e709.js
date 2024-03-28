"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[97887],{

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

/***/ 85999:
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
    id: 'user-session-log-search',
    title: '사용자 세션 로그 검색',
    description: 'description',
    tags: [
        '브라우저 모니터링',
        '분석',
        '사용자 세션 로그 검색'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "browser/user-session-log-search",
    "id": "browser/user-session-log-search",
    "title": "사용자 세션 로그 검색",
    "description": "description",
    "source": "@site/docs/browser/user-session-log-search.mdx",
    "sourceDirName": "browser",
    "slug": "/browser/user-session-log-search",
    "permalink": "/whatap-docs/browser/user-session-log-search",
    "draft": false,
    "editUrl": "undefined/docs/browser/user-session-log-search.mdx",
    "tags": [
        {
            "label": "브라우저 모니터링",
            "permalink": "/whatap-docs/tags/브라우저-모니터링"
        },
        {
            "label": "분석",
            "permalink": "/whatap-docs/tags/분석"
        },
        {
            "label": "사용자 세션 로그 검색",
            "permalink": "/whatap-docs/tags/사용자-세션-로그-검색"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "user-session-log-search",
        "title": "사용자 세션 로그 검색",
        "description": "description",
        "tags": [
            "브라우저 모니터링",
            "분석",
            "사용자 세션 로그 검색"
        ]
    },
    "sidebar": "rumsSidebar",
    "previous": {
        "title": "에러 추적",
        "permalink": "/whatap-docs/browser/tracking-error"
    },
    "next": {
        "title": "메트릭스",
        "permalink": "/whatap-docs/browser/metrics-intro"
    }
};
const assets = {};
const toc = [
    {
        value: '주요 검색 태그 안내',
        id: 'guide-search-tag',
        level: 2
    },
    {
        value: '#Category',
        id: 'category',
        level: 3
    },
    {
        value: '사용자 세션 로그',
        id: 'usersessionlog',
        level: 3
    },
    {
        value: '사용자 세션 분석하기',
        id: 'analysisusersession',
        level: 2
    },
    {
        value: '사용자 세션 정보',
        id: '사용자-세션-정보',
        level: 3
    },
    {
        value: '사용자 세션 플로우',
        id: '사용자-세션-플로우',
        level: 3
    },
    {
        value: '이벤트 상세 정보 확인하기',
        id: '이벤트-상세-정보-확인하기',
        level: 3
    },
    {
        value: '<Cmdname sid="page_load" />(pageLoad)',
        id: 'pageload',
        level: 4
    },
    {
        value: '<Cmdname sid="TTL07752" />(routeChange)',
        id: 'routechange',
        level: 4
    },
    {
        value: '<Cmdname sid="TTL07755" />(ajax)',
        id: 'ajax',
        level: 4
    },
    {
        value: '<Cmdname sid="TTL07753" />(click) / <Cmdname sid="TTL07754" />(rapid_click)',
        id: 'click--rapid_click',
        level: 4
    },
    {
        value: '<Cmdname sid="custom" />(custom)',
        id: 'custom',
        level: 4
    },
    {
        value: '<Cmdname sid="TTL07751" />(browser_error)',
        id: 'browser_error',
        level: 4
    },
    {
        value: '이벤트별 필터링하기',
        id: '이벤트별-필터링하기',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const Cmdname = makeShortcode("Cmdname");
const ImgLang = makeShortcode("ImgLang");
const Link = makeShortcode("Link");
const LinkImage = makeShortcode("LinkImage");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `홈 화면 `, `>`, ` 프로젝트 선택 `, `>`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "side_analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` `, `>`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "side_userSessionEventSearch",
        className: "uitext",
        mdxType: "Cmdname"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `최종 사용자가 웹 페이지와 상호 작용할 때 발생하는 성능 및 에러 데이터, 클릭 데이터를 수집하여 다양한 조건으로 검색하고 사용자 세션 로그를 특정할 수 있습니다. 사용자 세션 로그 정보를 통해 최종 사용자의 경로 분석, 이탈 원인 파악, 성능 및 사용자 경험 등을 분석하는데 도움이 됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-search-user-session-log.png",
        desc: "사용자 세션 로그 검색",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `검색하려는 조회 시간을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "time",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 옵션에서 설정한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "검색 아이콘",
        src: (__webpack_require__(13732)/* ["default"] */ .A),
        width: "35",
        height: "29"
    }), ` 버튼을 선택하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "filter",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 항목에 키(key)와 값(value)으로 구성한 복수의 검색 조건을 설정하고, 조건과 일치하는 로그 데이터만 추출할 수 있습니다. 로그 데이터를 정해진 라인 단위로 가져와 목록에 표시하며, 목록 하단으로 이동하면 다음 데이터를 자동으로 가져와 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "side_userSessionEventSearch",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 기본 동작 방식은 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "side_logSearch",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴와 동일합니다. 필터 설정을 통한 검색 방식 및 기타 옵션에 대한 자세한 내용은 다음 문서를 참조하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `필터 설정을 통한 로그 검색 방법에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "../log/log-search#log-search-filter",
        target: "_blank",
        mdxType: "Link"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `태그 옵션에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "../log/log-search#log-tag-options",
        target: "_blank",
        mdxType: "Link"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `콘텐츠 하이라이트 기능에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "../log/log-search#content-highlight",
        target: "_blank",
        mdxType: "Link"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "table_settings",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 기능에 대한 자세한 내용은 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "../log/log-search#set-table",
        target: "_blank",
        mdxType: "Link"
    }, "다음 문서"), "를 참조하세요."))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `이 기능은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `로그 조회`), ` 권한을 가진 멤버가 이용할 수 있습니다. 멤버 권한 체계에 대한 자세한 설명은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "../project/project-structure#project-auth"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "guide-search-tag"
    }, `주요 검색 태그 안내`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "category"
    }, `#Category`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `브라우저 모니터링에서 수집하는 사용자 세션 로그는 다음과 같이 분류할 수 있습니다. 각 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `#Category`), `에는 필터 검색을 위한 태그 목록을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "Category",
        src: (__webpack_require__(15652)/* ["default"] */ .A),
        width: "988",
        height: "310"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `#BrowserError`)), `: 웹페이지에서 발생하는 소스 에러, 네트워크 에러 등을 수집하고 제공합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `#PerformanceEvent`)), `: 페이지 로딩, AJAX, 라우터 변경 관련 이벤트를 수집하고 제공합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `#UserEvent`)), `: 사용자의 클릭 이벤트와 사용자 정의 이벤트를 수집하고 제공합니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "usersessionlog"
    }, `사용자 세션 로그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 세션 로그는 최종 사용자의 환경 정보와 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `#Category`), ` 별 수집 데이터를 포함하고 있습니다. 가장 왼쪽에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(49137)/* ["default"] */ .A),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하면 해당 로그를 구성하고 있는 전체 내용을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "로그 메시지",
        src: (__webpack_require__(11844)/* ["default"] */ .A),
        width: "1200",
        height: "193"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `첫 번째 줄의 내용은 최종 사용자의 환경 정보와 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `#Category`), ` 별 수집 데이터를 키(key)와 값(value)으로 구성되어 있습니다. 키와 값은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "filter",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 항목에서 검색을 위해 사용됩니다. 두 번째 줄은 해당 사용자 세션 로그의 메시지입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "Key",
        src: (__webpack_require__(71134)/* ["default"] */ .A),
        width: "1200",
        height: "168"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음은 사용자 세션 로그의 주요 키(Key)에 대한 설명입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `PageUrl`), `: 이벤트가 발생한 페이지의 URL입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `userID`), `: 이벤트를 발생시킨 사용자 ID입니다. 사용자가 웹 사이트를 처음 접속할 때 브라우저 에이전트가 발급하는 고유 ID로 만료 시간이 없습니다. 브라우저 쿠키에 저장합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `sessionID`), `: 이벤트를 발생시킨 세션 ID입니다. 웹 사이트에서 사용자가 웹 페이지 탐색을 시작할 때 발급하는 고유 ID입니다. 세션의 유지 기간은 최대 4시간이며, 15분 동안 활동이 없으면 ID는 만료됩니다. 브라우저 쿠키에 저장합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `type`), `: 발생한 이벤트의 종류입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `pageLoad`), `: 웹페이지를 로드할 때 발생하는 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `routeChange`), `: SPA 웹 페이지의 라우트 변경 시 발생하는 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `ajax`), `: AJAX 요청 관련 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `click`), `: 실제 사용자가 웹 페이지에서 클릭할 때 발생하는 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `rapid_click`), `: 실제 사용자가 한 곳의 좌표에서 빠르게 여러 번 클릭할 때 발생하는 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `custom`), `: 사용자 정의 이벤트`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `browser_error`), `: 웹 페이지에서 발생하는 소스 에러, 네트워크 에러 등`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자의 클릭 이벤트 수집을 위한 에이전트 설정 옵션(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `collectUserClick: true`), `)은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "apply-agent#setting-agent"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `사용자 정의 이벤트 수집에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "collect-custom-events"
    }, `다음 문서`), `를 참조하세요.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "analysisusersession"
    }, `사용자 세션 분석하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 세션 로그 조회 목록에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07736",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 컬럼의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "analysis",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 버튼을 선택하세요. 선택한 항목의 사용자 세션 로그의 상세 정보를 확인할 수 있는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07736",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 창이 나타납니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-search-user-session-log-analysis.png",
        desc: "사용자 세션 분석",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 세션을 기준으로 웹 페이지와 상호 작용하면서 발생시킨 이벤트 및 에러 등을 시간순으로 확인할 수 있습니다. 사용자 세션 분석을 통해 다음과 같이 활용하고 더 나은 사용자 경험을 제공할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `페이지 내 행동 분석`), `: 사용자가 웹 페이지를 탐색하는 방식을 이해할 수 있습니다. 어떻게 움직이는지, 어떤 페이지에 머무르고 있는지, 화면의 어떤 요소를 클릭하는지 등에 관한 사용자의 활동을 분석할 수 있습니다. 이를 통해 사용자가 사이트를 이용하는 방식에 대한 통찰력을 얻고, 사용자 경로를 분석하여 사용자의 행동 패턴을 파악할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `에러 추적`), `: 자바스크립트 오류, 네트워크 오류 등 사용자 세션 중 발생하는 모든 종류의 기술적 문제를 추적할 수 있습니다. 사용자의 클릭, 페이지 이동 등의 행동을 모니터링하고 이를 분석해 장애가 발생한 원인을 찾을 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `이탈 원인 파악`), `: 특정 페이지에서 사용자가 이탈하는 경우나 특정 작업을 완료하지 못하는 경우를 추적하여 원인을 분석하고 해당 부분을 개선함으로써 이탈률을 줄일 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "사용자-세션-정보"
    }, `사용자 세션 정보`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-search-user-session-infomation.png",
        desc: "사용자 세션 정보",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `최종 사용자의 브라우저 및 운영체제, 유저 에이전트, 사용자 ID, 세션 ID, 클라이언트 IP 등의 정보를 조회할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "사용자-세션-플로우"
    }, `사용자 세션 플로우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 세션을 기준으로 실제 사용자가 웹 사이트와 상호 작용할 때 발생시킨 성능 정보 및 이벤트, 에러를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-search-user-session-flow.png",
        desc: "사용자 세션 플로우",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "이벤트-상세-정보-확인하기"
    }, `이벤트 상세 정보 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07746",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 목록의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "title",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 컬럼에 표시된 이벤트의 종류는 다음과 같이 분류할 수 있습니다. 각 사용자 세션 이벤트를 선택하면 해당 이벤트에 대한 상세 정보를 확인할 수 있습니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "pageload"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "page_load",
        mdxType: "Cmdname"
    }), `(pageLoad)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-pageload.png",
        desc: "페이지 로드 이벤트",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `웹 페이지를 로드할 때 발생하는 이벤트입니다. 이벤트 구간별 세부 시간 정보 및 로드한 리소스 세부 정보를 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07736",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 탭을 선택하면 연관 정보를 연속해서 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `페이지 로드 분석에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "analyze-pageload"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "routechange"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07752",
        mdxType: "Cmdname"
    }), `(routeChange)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-router.png",
        desc: "라우터 변경",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `SPA 웹 페이지에서 라우트 변경 시 발생하는 이벤트입니다. 라우터를 변경하는데 소요된 시간을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "ajax"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07755",
        mdxType: "Cmdname"
    }), `(ajax)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-ajax.png",
        desc: "AJAX 로드 이벤트",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `AJAX 요청 관련 이벤트입니다. AJAX 이벤트 구간별 세부 시간 정보 및 AJAX 요청 URL, 호출 페이지 정보, 에러 메시지 등을 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07736",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 탭을 선택하면 연관 정보를 연속해서 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `AJAX 이벤트 분석에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "analyze-ajax-hitmap"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "click--rapid_click"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07753",
        mdxType: "Cmdname"
    }), `(click) / `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07754",
        mdxType: "Cmdname"
    }), `(rapid_click)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-click.png",
        desc: "클릭 이벤트",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 클릭한 요소의 ID인 셀렉터와 해당 요소의 텍스트 정보를 확인할 수 있습니다. 이를 통해 사용자가 어떤 페이지에서 어떤 요소를 클릭했는지 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `클릭 이벤트를 수집하려면 브라우저 에이전트의 옵션(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `collectUserClick: true`), `) 설정이 필요합니다. 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "apply-agent#setting-agent"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "custom"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "custom",
        mdxType: "Cmdname"
    }), `(custom)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-custom.png",
        desc: "사용자 정의 이벤트",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 정의 이벤트로 수집된 정보를 확인할 수 있습니다. 사용자 정의 이벤트의 대푯값인 제목(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `name`), `)과 Contents에 포함된 정보를 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `사용자 정의 이벤트 수집에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "collect-custom-events"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "browser_error"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07751",
        mdxType: "Cmdname"
    }), `(browser_error)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-details-error.png",
        desc: "브라우저 에러",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `웹 페이지에서 발생하는 소스 에러, 네트워크 에러 등을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `에러 추적에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "tracking-error"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "이벤트별-필터링하기"
    }, `이벤트별 필터링하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "browser-analysis-user-session-log-filter.png",
        desc: "필터",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "TTL07746",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 목록의 오른쪽 위에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-filter.svg",
        desc: "필터 아이콘",
        mdxType: "LinkImage"
    }), " 버튼을 선택하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "filter",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 목록에서 이벤트 종류를 선택하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "apply",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼을 선택하세요.")));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 15652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/browser-search-user-session-category-0254216634be8878626f69e2ddb19412.png");

/***/ }),

/***/ 11844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/browser-search-user-session-log-content-1a7e98a72a634ca2cf5fb598ada700ed.png");

/***/ }),

/***/ 71134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/browser-search-user-session-tag-a96d613dc7f1c5419c0aa9e22ac39ef6.png");

/***/ }),

/***/ 49137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY1XzE5NDYpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjUgNkwxNi41IDEyTDguNSAxOEw4LjUgNloiIGZpbGw9IiM3NTc1NzUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82NV8xOTQ2Ij4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=");

/***/ }),

/***/ 13732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

/***/ })

}]);