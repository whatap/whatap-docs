"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[49472],{

/***/ 95788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iu: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);


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

/***/ 97092:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11504);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95788);
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
    id: 'java-2_1_2',
    title: 'Java Agent v2.1.2',
    toc_max_heading_level: 2,
    displayed_sidebar: 'releaseSidebar'
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/java/java-2_1_2",
    "id": "release-notes/java/java-2_1_2",
    "title": "Java Agent v2.1.2",
    "description": "Change (업데이트)",
    "source": "@site/docs/release-notes/java/java-2.1.2.mdx",
    "sourceDirName": "release-notes/java",
    "slug": "/release-notes/java/java-2_1_2",
    "permalink": "/whatap-docs/release-notes/java/java-2_1_2",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/java/java-2.1.2.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "java-2_1_2",
        "title": "Java Agent v2.1.2",
        "toc_max_heading_level": 2,
        "displayed_sidebar": "releaseSidebar"
    },
    "sidebar": "releaseSidebar"
};
const assets = {};
const toc = [
    {
        value: 'Change (업데이트)',
        id: 'change-업데이트',
        level: 2
    },
    {
        value: 'weaving 설정 추가',
        id: 'weaving-설정-추가',
        level: 3
    },
    {
        value: 'thread 중단 설정 추가',
        id: 'thread-중단-설정-추가',
        level: 3
    },
    {
        value: 'Collection 모니터링 수정',
        id: 'collection-모니터링-수정',
        level: 3
    },
    {
        value: '데이터베이스 호출시 에러 건수를 실시간 통계에 추가',
        id: '데이터베이스-호출시-에러-건수를-실시간-통계에-추가',
        level: 3
    },
    {
        value: 'Http, 데이터베이스 연결 실시간 로그 추가',
        id: 'http-데이터베이스-연결-실시간-로그-추가',
        level: 3
    },
    {
        value: '에이전트 로그에서 지정한 oname 표시',
        id: '에이전트-로그에서-지정한-oname-표시',
        level: 3
    },
    {
        value: 'jdbc url 추출 구분자 추가',
        id: 'jdbc-url-추출-구분자-추가',
        level: 3
    },
    {
        value: 'log 오픈소스를 사용하는 경우 자동 인식 기능 추가',
        id: 'log-오픈소스를-사용하는-경우-자동-인식-기능-추가',
        level: 3
    },
    {
        value: 'logsink 수집데이터 추가',
        id: 'logsink-수집데이터-추가',
        level: 3
    },
    {
        value: 'HttpClient Timeout 적용 및 에러 처리',
        id: 'httpclient-timeout-적용-및-에러-처리',
        level: 3
    },
    {
        value: 'jmx pool 설정 추가',
        id: 'jmx-pool-설정-추가',
        level: 3
    },
    {
        value: 'heapdump 파일 경로 옵션 추가',
        id: 'heapdump-파일-경로-옵션-추가',
        level: 3
    },
    {
        value: '배치 에이전트 active 시작 부분 수정',
        id: '배치-에이전트-active-시작-부분-수정',
        level: 3
    },
    {
        value: 'active stack의 thread 이름 표시 설정 추가',
        id: 'active-stack의-thread-이름-표시-설정-추가',
        level: 3
    },
    {
        value: '비동기 thread 이름을 표시 설정 추가',
        id: '비동기-thread-이름을-표시-설정-추가',
        level: 3
    },
    {
        value: '데이터 베이스 호출 URL 저장',
        id: '데이터-베이스-호출-url-저장',
        level: 3
    },
    {
        value: '데이터 베이스 호출 hash값 제거',
        id: '데이터-베이스-호출-hash값-제거',
        level: 3
    },
    {
        value: '에이전트 실행 로고 수정',
        id: '에이전트-실행-로고-수정',
        level: 3
    },
    {
        value: '비동기 http 호출 에러 알림 메세지 수정',
        id: '비동기-http-호출-에러-알림-메세지-수정',
        level: 3
    },
    {
        value: '에이전트 설정의 license 키 옵션 수정',
        id: '에이전트-설정의-license-키-옵션-수정',
        level: 3
    },
    {
        value: '자바 에이전트 메타태그 옵션명 수정',
        id: '자바-에이전트-메타태그-옵션명-수정',
        level: 3
    },
    {
        value: 'New Feature (새 기능)',
        id: 'new-feature-새-기능',
        level: 2
    },
    {
        value: 'agent 환경 변수 제외값 추가',
        id: 'agent-환경-변수-제외값-추가',
        level: 3
    },
    {
        value: '연계 서비스 상태 추적 기능 추가',
        id: '연계-서비스-상태-추적-기능-추가',
        level: 3
    },
    {
        value: 'External Call 에러 알림 기능 추가',
        id: 'external-call-에러-알림-기능-추가',
        level: 3
    },
    {
        value: '트랜잭션, http 호출의 에러 수준 조정 기능',
        id: '트랜잭션-http-호출의-에러-수준-조정-기능',
        level: 3
    },
    {
        value: 'Alibaba Druid ConnectionPool 추적 기능 추가',
        id: 'alibaba-druid-connectionpool-추적-기능-추가',
        level: 3
    },
    {
        value: 'netstat 기능 추가',
        id: 'netstat-기능-추가',
        level: 3
    },
    {
        value: 'Fixed (버그 수정)',
        id: 'fixed-버그-수정',
        level: 2
    },
    {
        value: '.x 플러그인 int 타입 인식 오류 수정',
        id: 'x-플러그인-int-타입-인식-오류-수정',
        level: 3
    },
    {
        value: '배치 에이전트 getResultSet 오류 수정',
        id: '배치-에이전트-getresultset-오류-수정',
        level: 3
    },
    {
        value: 'Http 호출 에러 시간설정 버그 수정',
        id: 'http-호출-에러-시간설정-버그-수정',
        level: 3
    },
    {
        value: 'sql 추적시 LocalDate 추적하지 못하는 문제',
        id: 'sql-추적시-localdate-추적하지-못하는-문제',
        level: 3
    },
    {
        value: '에이전트 로그 출력시 에러 수정',
        id: '에이전트-로그-출력시-에러-수정',
        level: 3
    },
    {
        value: '클래스 시그니처 확인 버그 수정',
        id: '클래스-시그니처-확인-버그-수정',
        level: 3
    },
    {
        value: '컨테이너 ID 추출 오류 수정',
        id: '컨테이너-id-추출-오류-수정',
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
        "id": "change-업데이트"
    }, `Change (업데이트)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "weaving-설정-추가"
    }, `weaving 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `오픈소스 플러그인을 추적할 수 있는 weaving 설정을 추가하였습니다. +`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `기존의 weaving_reserved 설정과 동일한 기능을 가진 weaving 설정을 추가하였습니다. +`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `weaving=tomcat10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `weaving_reserved=tomcat10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "thread-중단-설정-추가"
    }, `thread 중단 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `thread 동작 시간이 설정값을 초과하는 경우에 thread 중단 여부를 설정할 수 있도록 항목을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `기본 설정값은 false 입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `auto_thread_kill_elapsed=0
auto_thread_kill_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "collection-모니터링-수정"
    }, `Collection 모니터링 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Collection 클래스를 hooking 하는 기존 방식에서 CollectionHolder를 통해 간접적으로 Collection 클래스 정보를 조회 할 수 있도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Collection을 생성하는 클래스를 collection_nonstatic_holders 설정에 추가하여 Collection Map 메뉴에서 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `collection_nonstatic_holders=org.apache.catalina.session.ManagerBase
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "데이터베이스-호출시-에러-건수를-실시간-통계에-추가"
    }, `데이터베이스 호출시 에러 건수를 실시간 통계에 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `데이터베이스 호출시 에러가 발생한 경우 실시간 통계에 에러 건수를 추가하도록 설정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "http-데이터베이스-연결-실시간-로그-추가"
    }, `Http, 데이터베이스 연결 실시간 로그 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Http, 데이터베이스 연결에 대한 실시간 로그를 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "에이전트-로그에서-지정한-oname-표시"
    }, `에이전트 로그에서 지정한 oname 표시`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `oname`), `을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `-D`), ` 옵션으로 지정한 경우에도 에이전트로그에서 PID 대신에 에이전트 이름을 표시하도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "jdbc-url-추출-구분자-추가"
    }, `jdbc url 추출 구분자 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `jdbc url 추출시 '?', ';'를 기준으로 truncate 할 수 있도록 수정하였습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre"
    }, `';' 추가
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "log-오픈소스를-사용하는-경우-자동-인식-기능-추가"
    }, `log 오픈소스를 사용하는 경우 자동 인식 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `logback, log4j 오픈소스를 사용하는 경우, 또는 logging 문자열을 포함한 log 관련 오픈소스를 사용하는 경우 자동으로 hooking 옵션을 사용하지 않도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "logsink-수집데이터-추가"
    }, `logsink 수집데이터 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `logsink에서 수집하는 데이터를 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `설정에 따라서 transaction id, login id, http host 데이터 수집 여부를 결정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `_logtag_enabled = false         # tag 
logtag_txid_enabled=false       # transation id
logtag_login_enabled=false      # login id
logtag_httphost_enabled=false   # http host
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "httpclient-timeout-적용-및-에러-처리"
    }, `HttpClient Timeout 적용 및 에러 처리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `HttpClient에 timeout을 적용하고, timeout 발생시 에러처리를 할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "jmx-pool-설정-추가"
    }, `jmx pool 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `jmx pool object의 기본값을 수정하였습니다. jmx pool의 데이터소스 이름 사용 여부를 결정할 수 있는 옵션을 추가하였습니다. 데이터소스 이름을 등록하는 경우 jndi 방식을 실행하고, 이름을 등록하지 않은 경우 기본 url 방식으로 동작합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `jmx_pool_dsname_enabled=false
jmx_pool_object="*:type=DataSource,class=*,name=*"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "heapdump-파일-경로-옵션-추가"
    }, `heapdump 파일 경로 옵션 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `heapdump 파일 경로를 지정할 수 있도록 log_root 옵션을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `log_root=\${WHATAP_HOME}/dump
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "배치-에이전트-active-시작-부분-수정"
    }, `배치 에이전트 active 시작 부분 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `배치 프로세스의 Main thread에서 active stack을 남길 수 있도록 배치 에이전트를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "active-stack의-thread-이름-표시-설정-추가"
    }, `active stack의 thread 이름 표시 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `active stack의 thread 이름을 표시할 수 있도록 설정을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `active_stack_thread_name_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `yard 버전이 낮은 경우 true 설정시 프로토콜 오류로 에이전트 연결이 지속적으로 끊어집니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "비동기-thread-이름을-표시-설정-추가"
    }, `비동기 thread 이름을 표시 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `비동기 thread의 id와 이름을 표시할 수 있도록 설정을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `debug_async_thread_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "데이터-베이스-호출-url-저장"
    }, `데이터 베이스 호출 URL 저장`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `데이터베이스 호출 URL을 저장하도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "데이터-베이스-호출-hash값-제거"
    }, `데이터 베이스 호출 hash값 제거`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `데이터베이스 호출 hash값을 ERROR 텍스트에서 제거하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "에이전트-실행-로고-수정"
    }, `에이전트 실행 로고 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `자바 에이전트 실행시 로고 내용을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `The Best Observability in Java
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "비동기-http-호출-에러-알림-메세지-수정"
    }, `비동기 http 호출 에러 알림 메세지 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `비동기 http 호출 에러 발생시 status code를 표시하도록 알림 메세지를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "에이전트-설정의-license-키-옵션-수정"
    }, `에이전트 설정의 license 키 옵션 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `whatap.conf에서 license와 accesskey 옵션을 모두 활용할 수 있도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 동일한 기능
license=
accesskey=
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "자바-에이전트-메타태그-옵션명-수정"
    }, `자바 에이전트 메타태그 옵션명 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `자바 에이전트 메타태그 옵션명을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `agent_meta_tags_enabled=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "new-feature-새-기능"
    }, `New Feature (새 기능)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "agent-환경-변수-제외값-추가"
    }, `agent 환경 변수 제외값 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `환경 변수 조회 기능에서 특정 키값을 입력하면 조회 항목에서 제외할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `구분자는 ','로 대소문자를 구분하지 않습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `agent_env_system_enabled`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `agent_env_jvm_enabled`), ` 설정과 연결하여 사용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `agent_env_system_enabled=false
agent_env_jvm_enabled=true

agent_env_ignore_keys=user.timezone,user.name,user.language
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "연계-서비스-상태-추적-기능-추가"
    }, `연계 서비스 상태 추적 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `target IP 혹은 서비스의 접속 상태를 로그 모니터링의 liveTail에서 확인할 수 있도록 연계 서비스 상태 추적 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_enabled`), ` 옵션을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `true`), `로 설정하여 기능을 활성화 할 수 있고 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `#RemoteTrace`), ` 카테고리로 로그를 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `정상 응답인 경우 level이 ok, 에러인 경우 level이 error 입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `정상 응답인 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_ok_interval`), ` 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 30초 입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `에러 응답인 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_error_interval`), ` 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 5초 입니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `logsink_rt_enabled=false

logsink_rt_error_interval=5000
logsink_rt_ok_interval=30000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "external-call-에러-알림-기능-추가"
    }, `External Call 에러 알림 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Http, Database 호출시에 에러가 발생하거나 응답이 지정된 시간보다 느린 경우 알림을 받을 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `exception_alert_enabled`), ` 옵션을 true로 설정하여 기능을 활성화 할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `exception_alert_stack_size`), ` 옵션으로 에러 스택 길이를 지정하여 알림 메세지로 받을 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `exception_alert_silent_time`), ` 옵션으로 지정한 기간만큼 에러 알림을 비활성화할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `알림 메세지에는 url, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `status_code`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `error_message`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `error_stack`), ` 등을 표시합니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 에러 알림 기능 활성화 여부
exception_alert_enabled=false

# 에러 알림 메세지에 표시한 스택의 길이
exception_alert_stack_size=50

# 기본값 5분 (30000ms)
exception_alert_silent_time=300000

# 트랜잭션 에러 알림 활성화 여부
exception_alert_service_enabled=false

# http 호출시 에러 알림 활성화 여부
exception_alert_httpc_enabled=false

# jdbc 호출시 에러 알림 활성화 여부
exception_alert_jdbc_enabled=false

# 트랜잭션 에러 알림에서 무시할 status code
status_alert_ignore=403

# 트랜잭션 에러 알림에서 무시할 url:status_code 조합
status_alert_ignore_set=/api/test/timeout:408

# http call 에러 알림에서 무시한 status code
httpc_status_alert_ignore=408,500

# http call 에러 알림에서 무시한 url:status code 조합
httpc_status_url_alert_ignore_set=/api/test/timeout:408
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "트랜잭션-http-호출의-에러-수준-조정-기능"
    }, `트랜잭션, http 호출의 에러 수준 조정 기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `트랜잭션이나 http 호출의 상태를 정상 호출로 인식할 수 있도록 기능을 추가하였습니다. 트랜잭션이나 http 호출의 상태를 info로 설정하게 되면 Spring Framework의 ExceptionHandler에서 처리하지 않은 에러를 정상으로 인식할 수 있도록 버전 기능을 추가하였습니다. 조건에 해당하는 경우 히트맵에 ErrorLevel에 INFO로 표시하고 에러 통계에는 포함합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값 (default)
transaction_status_mode=normal
httpc_status_mode=normal

# 에러 무시
transaction_status_mode=info
httpc_status_mode=info

# 트랜잭션 에러 알림에서 무시할 status code info로 인식
status_alert_ignore=403

# 트랜잭션 에러 알림에서 무시할 url:status_code 조합을 info로 인식
status_alert_ignore_set=/api/test/timeout:408

# http call 에러 알림에서 무시한 status code info로 인식
httpc_status_alert_ignore=408,500

# http call 에러 알림에서 무시한 url:status code 조합을 info로 인식
httpc_status_url_alert_ignore_set=/api/test/timeout:408
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "alibaba-druid-connectionpool-추적-기능-추가"
    }, `Alibaba Druid ConnectionPool 추적 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Alibaba Druid connection pool 을 추적할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `druid_pool_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "netstat-기능-추가"
    }, `netstat 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `oshi 라이브러리 활용하여 netstat을 수집하는 기능을 추가하였습니다. 네트워크 지표들 중 packet, collision, drop, error, bps 데이터를 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `oshi_netstat_enabled=false
debug_oshi_netstat_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "fixed-버그-수정"
    }, `Fixed (버그 수정)`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "x-플러그인-int-타입-인식-오류-수정"
    }, `.x 플러그인 int 타입 인식 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `x 확장자를 사용하는 플러그인에서 int 타입을 인식하지 못하는 오류를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "배치-에이전트-getresultset-오류-수정"
    }, `배치 에이전트 getResultSet 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `배치 에이전트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `TraceSQL.getResultSet`), ` 오류를 수정하였습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "http-호출-에러-시간설정-버그-수정"
    }, `Http 호출 에러 시간설정 버그 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Http 호출시 에러 시간 max를 0으로 설정하여도 에러를 표시하는 버그를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "sql-추적시-localdate-추적하지-못하는-문제"
    }, `sql 추적시 LocalDate 추적하지 못하는 문제`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `sql 요청시 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `java.time.LocalDate`), ` 타입을 추적하지 못하는 문제를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "에이전트-로그-출력시-에러-수정"
    }, `에이전트 로그 출력시 에러 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `java.sql.Timestamp`), ` 타입을 활용하여 로그를 남기는 경우 에러가 발생하는 문제를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "클래스-시그니처-확인-버그-수정"
    }, `클래스 시그니처 확인 버그 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `에이전트 설정 메뉴의 클래스 시그니처 표시 요청할 때 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `java.lang.NullPointerException`), ` 발생하는 것을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "컨테이너-id-추출-오류-수정"
    }, `컨테이너 ID 추출 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `컨테이너 ID 추출 오류를 수정하였습니다.`));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);