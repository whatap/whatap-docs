"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[89011],{

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

/***/ 67068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function Status({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UItext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function UItext({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
}


/***/ }),

/***/ 44232:
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
/* harmony import */ var _site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67068);
/* harmony import */ var _site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5379);
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
    id: 'service-1_98_x',
    title: 'Service 1.98.X',
    toc_max_heading_level: 2,
    displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/service/service-1_98_x",
    "id": "release-notes/service/service-1_98_x",
    "title": "Service 1.98.X",
    "description": "Service-1.98.7",
    "source": "@site/docs/release-notes/service/service-1.98.x.mdx",
    "sourceDirName": "release-notes/service",
    "slug": "/release-notes/service/service-1_98_x",
    "permalink": "/whatap-docs/release-notes/service/service-1_98_x",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/service/service-1.98.x.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "service-1_98_x",
        "title": "Service 1.98.X",
        "toc_max_heading_level": 2,
        "displayed_sidebar": "releaseSidebar"
    },
    "sidebar": "releaseSidebar"
};
const assets = {};


const toc = [
    {
        value: 'Service-1.98.7',
        id: 'service-1987',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application',
        level: 3
    },
    {
        value: 'Service-1.98.6',
        id: 'service-1986',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-1',
        level: 3
    },
    {
        value: '사이트 관리',
        id: '사이트-관리',
        level: 4
    },
    {
        value: '이용 내역',
        id: '이용-내역',
        level: 4
    },
    {
        value: '<code>CloudWatch</code>, <code>NCP</code>, <code>OCI</code>, <code>Azure</code>',
        id: 'cloudwatch-ncp-oci-azure',
        level: 3
    },
    {
        value: 'Service-1.98.5',
        id: 'service-1985',
        level: 2
    },
    {
        value: 'Service-1.98.4',
        id: 'service-1984',
        level: 2
    },
    {
        value: '<code>Application</code>',
        id: 'application-1',
        level: 3
    },
    {
        value: 'Service-1.98.3',
        id: 'service-1983',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database',
        level: 3
    },
    {
        value: 'Service-1.98.2',
        id: 'service-1982',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-2',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-2',
        level: 3
    },
    {
        value: 'Service-1.98.1',
        id: 'service-1981',
        level: 2
    },
    {
        value: 'Service-1.98.0',
        id: 'service-1980',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-3',
        level: 3
    },
    {
        value: 'UX/UI',
        id: 'uxui',
        level: 4
    },
    {
        value: 'Flex 보드',
        id: 'flex-보드',
        level: 4
    },
    {
        value: 'MXQL',
        id: 'mxql',
        level: 4
    },
    {
        value: '로그',
        id: '로그',
        level: 4
    },
    {
        value: '경고 알림',
        id: '경고-알림',
        level: 4
    },
    {
        value: '관리',
        id: '관리',
        level: 4
    },
    {
        value: '이용 내역',
        id: '이용-내역-1',
        level: 4
    },
    {
        value: '상품 카탈로그',
        id: '상품-카탈로그',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-3',
        level: 3
    },
    {
        value: '애플리케이션 대시보드',
        id: '애플리케이션-대시보드',
        level: 4
    },
    {
        value: '통계/보고서',
        id: '통계보고서',
        level: 4
    },
    {
        value: '<code>Server</code>',
        id: 'server',
        level: 3
    },
    {
        value: '대시보드',
        id: '대시보드',
        level: 4
    },
    {
        value: '서버 목록',
        id: '서버-목록',
        level: 4
    },
    {
        value: '서버 설정',
        id: '서버-설정',
        level: 4
    },
    {
        value: '로그',
        id: '로그-1',
        level: 4
    },
    {
        value: '경고 알림',
        id: '경고-알림-1',
        level: 4
    },
    {
        value: '<code>Container</code>',
        id: 'container',
        level: 3
    },
    {
        value: '<code>Database</code>',
        id: 'database-1',
        level: 3
    },
    {
        value: '데이터베이스 공통',
        id: '데이터베이스-공통',
        level: 4
    },
    {
        value: 'PostgreSQL, MySQL',
        id: 'postgresql-mysql',
        level: 4
    },
    {
        value: 'Tibero',
        id: 'tibero',
        level: 4
    },
    {
        value: '<code>AWS</code>',
        id: 'aws',
        level: 3
    },
    {
        value: '<code>AWS</code> <sup>(CloudWatch)</sup>, <code>Azure</code>, <code>NCP</code>, <code>OCI</code>',
        id: 'aws-cloudwatch-azure-ncp-oci',
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
    return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout, _object_spread_props(_object_spread({}, layoutProps, props), {
        components: components,
        mdxType: "MDXLayout"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1987"
    }, `Service-1.98.7`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 20일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 계정 아이콘 선택 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "계정 정보 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "계정 정보"), " 메뉴에서 회원 탈퇴 시 미납 금액 표현 및 경영 지원팀 전화번호 안내 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "멀티 트랜잭션 추적"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "MTID / CUSTID"), " 값 미입력 시 데이터가 검색되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "멀티 트랜잭션 추적"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "MTID / CUSTID"), " 검색 값 유효성 체크 로직 추가"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1986"
    }, `Service-1.98.6`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 18일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "사이트-관리"
    }, `사이트 관리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "사이트 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "비즈니스 보드"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "productType"), "을 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "platformType"), "으로 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "사이트 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "결제 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "사용량"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "상품 타입"), " 컬럼 제거")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "이용-내역"
    }, `이용 내역`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이용 내역"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "청구 및 납부 내역"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "청구 내역 상세 보기"), " 목록에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "상품 타입"), " 컬럼 제거"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 11일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "cloudwatch-ncp-oci-azure"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `CloudWatch`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `NCP`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `OCI`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Azure`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 설명 추가 및 UI 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `프로젝트 생성 직후 에이전트 설치 페이지 진입 시 표시되는 로딩 이미지 하단에 설명 추가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `서비스 목록 조회, 저장 시 표시되는 로딩 이미지 하단에 설명 추가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `CloudWatch`), ` 설치 안내 페이지가 스크롤에 가려지지 않고 바로 표시되도록 설명 부분의 높이 수정`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1985"
    }, `Service-1.98.5`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 7일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통계/보고서"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "보고서"), " 메뉴에서 사용자가 선택한 시작일 기준이 아니라 현재 기준으로만 에이전트 목록을 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "필터"), " 옵션으로 가져오는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1984"
    }, `Service-1.98.4`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 7일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "히트맵"), " 메뉴에서 트랜잭션 상세 정보 창을 띄울 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "멀티 TX 테이블"), " 탭이 표시되지 않는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1983"
    }, `Service-1.98.3`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 6일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "database"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "메트릭스 이상 탐지"), " 메뉴 숨김 처리, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "사이트 맵"), " 메뉴를 통해 접근 가능")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1982"
    }, `Service-1.98.2`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 4월 5일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "계정 정보 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "회원 탈퇴"), " 메뉴를 이용해 회원 탈퇴할 경우 탈퇴 관련 사항(미납금, 권한 정보 등)을 팝업창에서 확인하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "애플리케이션 대시보드"), " 메뉴에서 언어 설정이 일본어일 때, 요약 위젯의 텍스트가 줄 바꿈이 되지 않아 지표가 가려지는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1981"
    }, `Service-1.98.1`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 3월 31일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "메트릭스 차트"), " 메뉴에서 오버레이 차트의 CSV 다운로드 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "service-1980"
    }, `Service-1.98.0`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 3월 29일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "uxui"
    }, `UX/UI`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자 만족도를 높이기 위해 다음과 같이 사용자 인터페이스 디자인을 개선합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이용내역"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "청구서 미리보기"), " 메뉴의 UI 개선", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `프로젝트, 상품별로 그룹화 된 청구서 미리보기 정보 제공`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `그룹화된 데이터의 관련 상품 정보 및 과금 집계량, 청구금액 합 확인 가능`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이용내역"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로젝트 유료 전환"), " 메뉴의 UI 개선"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " 화면 상단에 위치한 '메뉴 경로'를 '메뉴명'으로 표시하도록 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `변경 전: 상위 경로 > 메뉴명`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `변경 후: 메뉴명`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " 화면 오른쪽 위에 와탭 기술 문서 링크 버튼 추가 및 채널톡 내 기술 문서 링크 제거"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 서비스 로고 옆에 위치한 브라우저 시간 불일치 알림 아이콘 위치 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 프로젝트가 없는 그룹을 선택하면 프로젝트 생성 페이지로 이동하지 않도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Deprecate"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통합 대시보드"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통합 메트릭스 보드"), " 메뉴는 2023년 5월 1일 이후 왼쪽 사이드 메뉴에서 제거, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "사이트 맵"), "으로 이전 예정 관련 안내 표시")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "flex-보드"
    }, `Flex 보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " 대시보드 및 목록을 화면에 불러올 때 로딩 인디케이터 적용"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " Series 위젯 타입의 차트 설정에서 범례 표시 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " Series 위젯 타입에 누적 차트 타입 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " Series 위젯 타입의 차트 설정에서 차트 색상 기준 옵션 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `기존: 태그를 기준으로 차트 색상 표현`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `추가: 필드 기준으로 차트 색상을 나타낼 수 있는 옵션`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " DB 상품군에서 다음 위젯 템플릿 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `DB 공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `CPU % (xos) 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `Memory % (xos) 위젯`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `MySQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `슬로우 쿼리`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `PostgreSQL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `슬로우 쿼리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `PostgreSQL Wait Event 건수 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `PostgreSQL Client Ip 건수 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `PostgreSQL 통계 테이블`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `PostgreSQL 액티브 세션 건수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `PostgreSQL 액티브 세션 테이블`)))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "mxql"
    }, `MXQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " MXQL 쿼리 내 필드명에 특수 문자가 들어가면 MXQL 데이터 호출 시 발생하는 버그 수정을 위해 MXQL 쿼리 생성 로직 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "로그"
    }, `로그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그"), " 메뉴의 기능에 대한 빠른 이해를 위해 메뉴명 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "라이브 Tail"), " → ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "라이브 테일")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "탐색기"), " → ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 트렌드")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "검색기"), " → ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 검색")))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 검색"), " 메뉴에서 조회 내용을 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "Timestamp"), " 기준으로 정렬하는 기능(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "최근 순"), "/", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "과거 순"), ") 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 트렌드"), " 메뉴에서 검색키를 최대 2개까지 설정할 수 있도록 수정 (검색값은 제한 없음)"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 트렌드"), " 메뉴에서 조회 시간을 변경했을 때 선택한 필터에 대한 결과가 없을 경우 앞서 선택한 필터를 해제할 수 있도록 개선")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "경고-알림"
    }, `경고 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 설정"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에이전트 중복 알림"), " 옵션 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "blockquote"
    }, `모니터링 중인 에이전트 가운데 동일한 ID를 설정한 에이전트가 2개 이상일 때 지표를 중복으로 수집하면서 발생하는 경고 알림입니다. 에이전트 이름을 중복으로 설정하지 않았는지 에이전트 설정에서 관련 옵션을 확인하세요. 블루/그린과 같은 배포 상황에서 에이전트가 중복되어 경고 알림이 발생할 경우 이 기능을 이용하길 권장합니다. 같은 이름의 에이전트가 동시에 2개 이상 기동된 경우 선택한 시간 동안 알림은 발생하지 않습니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 수신 설정"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "수신 태그 미설정 알림 받기"), " 옵션 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("blockquote", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "blockquote"
    }, `이벤트 수신 태그가 설정되지 않은 경고 알림을 수신하지 않으려면 해당 옵션을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 수신 설정"), " 메뉴에서 등록한 모바일 기기의 수가 표시되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 설정"), " 메뉴에서 로그 이벤트 추가 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 발생 일시 중지"), " 항목에 대한 설명 문구 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "관리"
    }, `관리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " 사용자 권한으로 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "로그 조회"), " 권한 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로젝트 관리"), " 메뉴에서 경고 알림 언어 선택 옵션 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 멤버 초대 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "멤버 관리"), " 권한을 OFF할 수 없는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 채널톡 > 와탭 지원팀 초대 기능이 동작하지 않는 버그 수정", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `와탭 지원팀 초대 버튼은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, `멤버 관리`), ` 권한을 보유한 사용자에게만 노출됩니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "정비 계획"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "매월"), " 탭을 클릭하면 화이트 아웃 발생 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "계정 정보 관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "회원 탈퇴"), " 메뉴를 이용해 회원 탈퇴할 경우 유의 사항 최신화 및 탈퇴 관련 사항(미납금, 권한 정보) 등 확인 절차 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "이용-내역-1"
    }, `이용 내역`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로젝트 유료 전환"), " 메뉴에서 다음의 기능을 추가 및 수정합니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " 원하는 프로젝트를 여러 개 선택해 유료로 전환하는 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "월간 예상비용"), " 컬럼에서 제품별 상세를 확인할 수 있도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "상품-카탈로그"
    }, `상품 카탈로그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " 프로젝트 추가 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로젝트 그룹"), " 항목에 그룹 검색 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " 조직을 선택한 상태에서 프로젝트 추가 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로젝트 그룹"), " 항목을 필수 선택하도록 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "애플리케이션-대시보드"
    }, `애플리케이션 대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 히트맵 위젯에서 데이터 호출이 중단되는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 액티브 트랜잭션 위젯에서 모든 에이전트를 비활성화하면 차트를 업데이트하지 않는 문제 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "통계보고서"
    }, `통계/보고서`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통계"), " 메뉴에서 조회 시간 범위를 최대 62일에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "최대 31일"), "로 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "리소스 보드"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Top N 이퀄라이저"), " 차트 화면 사이즈가 큰 경우 Y축이 길게 표시되는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "서버-목록"
    }, `서버 목록`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "서버 상세"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "프로세스"), " 테이블의 정렬 옵션으로 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "개수 내림차순"), " 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "서버-설정"
    }, `서버 설정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "원격 파일 뷰어"), " 메뉴 명칭을 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에이전트 로그 뷰어"), "로 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "로그-1"
    }, `로그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "로그 설정"), " 메뉴의 에이전트 설정 옵션 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "경고-알림-1"
    }, `경고 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " 알림을 복사할 때, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "알림 정책 복사"), " 창에서 선택할 수 있는 프로젝트 목록 중 일부가 누락되는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 기록 메뉴"), "에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "마지막 변경 시간 표시"), " 옵션 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 수신 설정"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "3rd 파티 플러그인"), " 설정에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에스컬레이션"), " 옵션 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `Escalation을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, `에스컬레이션`), `으로 번역`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `옵션을 수정하면 유효성 체크를 진행하도록 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `옵션값을 변경한 다음 저장하지 않으면 버튼의 색상을 변경하도록 수정`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에이전트 설치"), " 페이지 UI 및 내용 개선"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "컨테이너 맵"), "에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "필터"), " 옵션으로 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "포함"), "을 선택하면 부분 일치하는 컨테이너가 표시되지 않는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "컨테이너 맵"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: "/img/ico-reset.svg",
        alt: "아이콘"
    }), " 리셋 버튼을 클릭하면 옵션이 초기화되지 않는 현상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "database-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "데이터베이스-공통"
    }, `데이터베이스 공통`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통계/보고서"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "SQL 통계"), " 메뉴에서 다음의 테이블 기능 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `테이블의 컬럼 크기 조절 가능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `페이지를 벗어나도 조절한 컬럼 크기가 해제되지 않도록 설정 저장`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `테이블 헤더의 각 컬럼 항목을 선택하면 선택 기준에 따라 목록 정렬`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴의 안내 문구 위치 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "파일 로그 알림"), " 메뉴에서 로그가 발생하지 않은 시간대를 조회하면 이전 로그 데이터가 남아있는 현상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "postgresql-mysql"
    }, `PostgreSQL, MySQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통계/보고서"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "데이터베이스 사이즈"), " 신규 UI 적용"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "tibero"
    }, `Tibero`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "통계/보고서"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "테이블스페이스 사이즈"), " 메뉴에서 테이블스페이스 사용량에 따른 프로그레스 바의 색상 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "aws"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `AWS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_UItext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
        mdxType: "UI"
    }, "이벤트 기록"), " 메뉴를 선택하면 연관 없는 스냅샷 페이지로 이동하는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "aws-cloudwatch-azure-ncp-oci"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `AWS`), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("sup", null, `(CloudWatch)`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Azure`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `NCP`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `OCI`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Change"), " 프로젝트 내 서비스마다 수집 주기를 설정할 수 있도록 기능 및 UI 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " 활성화된 서비스만 표시하는 필터 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(_site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        mdxType: "Status"
    }, "Feature"), " 서비스 이름 검색창 추가"))));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);