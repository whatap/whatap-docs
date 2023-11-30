"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[34133],{

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

/***/ 3315:
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
    "source": "@site/docs/release-notes/java/java-2.1.1.mdx",
    "sourceDirName": "release-notes/java",
    "slug": "/release-notes/java/java-2_1_1",
    "permalink": "/whatap-docs/release-notes/java/java-2_1_1",
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
        value: '신기능',
        id: '신기능',
        level: 3
    },
    {
        value: '느린 http, sql 발생시 알림 메세지 전송',
        id: '느린-http-sql-발생시-알림-메세지-전송',
        level: 4
    },
    {
        value: '트랜잭션, http 호출의 에러 수준 조정 기능',
        id: '트랜잭션-http-호출의-에러-수준-조정-기능',
        level: 4
    },
    {
        value: '2022-06-30',
        id: '2022-06-30',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트',
        level: 3
    },
    {
        value: '자바 에이전트 메타태그 옵션명 수정',
        id: '자바-에이전트-메타태그-옵션명-수정',
        level: 4
    },
    {
        value: '버그',
        id: '버그',
        level: 3
    },
    {
        value: '컨테이너에서 ID 추출 오류 수정',
        id: '컨테이너에서-id-추출-오류-수정',
        level: 4
    },
    {
        value: '2022-06-22',
        id: '2022-06-22',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-1',
        level: 3
    },
    {
        value: '에이전트 설정의 license 키 옵션 수정',
        id: '에이전트-설정의-license-키-옵션-수정',
        level: 4
    },
    {
        value: '2022-06-16',
        id: '2022-06-16',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-2',
        level: 3
    },
    {
        value: '에이전트 실행 로고 수정',
        id: '에이전트-실행-로고-수정',
        level: 4
    },
    {
        value: '비동기 http 호출 에러 알림 메세지 수정',
        id: '비동기-http-호출-에러-알림-메세지-수정',
        level: 4
    },
    {
        value: '버그',
        id: '버그-1',
        level: 3
    },
    {
        value: '클래스 시그니처 확인 버그 수정',
        id: '클래스-시그니처-확인-버그-수정',
        level: 4
    },
    {
        value: '2022-05-18',
        id: '2022-05-18',
        level: 2
    },
    {
        value: '신기능',
        id: '신기능-1',
        level: 3
    },
    {
        value: 'netstat 기능 추가',
        id: 'netstat-기능-추가',
        level: 4
    },
    {
        value: '업데이트',
        id: '업데이트-3',
        level: 3
    },
    {
        value: '에러 알림 설정 업데이트',
        id: '에러-알림-설정-업데이트',
        level: 4
    },
    {
        value: '버그',
        id: '버그-2',
        level: 3
    },
    {
        value: '에이전트 로그 출력시 에러 수정',
        id: '에이전트-로그-출력시-에러-수정',
        level: 4
    },
    {
        value: 'jdk 15에서 클래스 상세보기 에러 수정',
        id: 'jdk-15에서-클래스-상세보기-에러-수정',
        level: 4
    },
    {
        value: '2022-05-16',
        id: '2022-05-16',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-4',
        level: 3
    },
    {
        value: '에러 알림 메세지 내용 추가',
        id: '에러-알림-메세지-내용-추가',
        level: 4
    },
    {
        value: '버그',
        id: '버그-3',
        level: 3
    },
    {
        value: 'sql 추적시 LocalDate 추적하지 못하는 문제',
        id: 'sql-추적시-localdate-추적하지-못하는-문제',
        level: 4
    },
    {
        value: '2022-05-11',
        id: '2022-05-11',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-5',
        level: 3
    },
    {
        value: '에러 알림 메세지 내용 추가',
        id: '에러-알림-메세지-내용-추가-1',
        level: 4
    },
    {
        value: '2022-04-25',
        id: '2022-04-25',
        level: 2
    },
    {
        value: '신기능',
        id: '신기능-2',
        level: 3
    },
    {
        value: 'Alibaba Druid ConnectionPool 추적 기능 추가',
        id: 'alibaba-druid-connectionpool-추적-기능-추가',
        level: 4
    },
    {
        value: 'Http Call 에러 발생시 알림 기능 추가',
        id: 'http-call-에러-발생시-알림-기능-추가',
        level: 4
    },
    {
        value: '신기능',
        id: '신기능-3',
        level: 3
    },
    {
        value: 'Http Call 에러 알림 기능 추가',
        id: 'http-call-에러-알림-기능-추가',
        level: 4
    },
    {
        value: '2022-03-18',
        id: '2022-03-18',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-6',
        level: 3
    },
    {
        value: '데이터 베이스 호출 URL 저장',
        id: '데이터-베이스-호출-url-저장',
        level: 4
    },
    {
        value: '데이터 베이스 호출 hash값 제거',
        id: '데이터-베이스-호출-hash값-제거',
        level: 4
    },
    {
        value: '신기능',
        id: '신기능-4',
        level: 3
    },
    {
        value: '연계 서비스 상태 추적 기능 추가',
        id: '연계-서비스-상태-추적-기능-추가',
        level: 4
    },
    {
        value: '2022-02-18',
        id: '2022-02-18',
        level: 2
    },
    {
        value: '버그',
        id: '버그-4',
        level: 3
    },
    {
        value: 'Http 호출 에러 시간설정 버그 수정',
        id: 'http-호출-에러-시간설정-버그-수정',
        level: 4
    },
    {
        value: '업데이트',
        id: '업데이트-7',
        level: 3
    },
    {
        value: '엑티브 스택의 쓰레드 이름 표시 설정 추가',
        id: '엑티브-스택의-쓰레드-이름-표시-설정-추가',
        level: 4
    },
    {
        value: '비동기 쓰레드 이름을 표시 설정 추가',
        id: '비동기-쓰레드-이름을-표시-설정-추가',
        level: 4
    },
    {
        value: '2022-02-11',
        id: '2022-02-11',
        level: 2
    },
    {
        value: '버그',
        id: '버그-5',
        level: 3
    },
    {
        value: '.x 플러그인 int 인식 오류 수정',
        id: 'x-플러그인-int-인식-오류-수정',
        level: 4
    },
    {
        value: '배치 에이전트 getResultSet 오류 수정',
        id: '배치-에이전트-getresultset-오류-수정',
        level: 4
    },
    {
        value: '업데이트',
        id: '업데이트-8',
        level: 3
    },
    {
        value: 'logging을 포함한 파일이름에 대한 자동화 옵션 추가',
        id: 'logging을-포함한-파일이름에-대한-자동화-옵션-추가',
        level: 4
    },
    {
        value: '자바 에이전트에서 로그에 트랜잭션 정보를 추가',
        id: '자바-에이전트에서-로그에-트랜잭션-정보를-추가',
        level: 4
    },
    {
        value: 'HttpClient Timeout 적용 및 에러 처리',
        id: 'httpclient-timeout-적용-및-에러-처리',
        level: 4
    },
    {
        value: 'jmx pool 설정 추가',
        id: 'jmx-pool-설정-추가',
        level: 4
    },
    {
        value: 'heapdump 파일 경로 옵션 추가',
        id: 'heapdump-파일-경로-옵션-추가',
        level: 4
    },
    {
        value: '배치 에이전트 active 시작 부분 수정',
        id: '배치-에이전트-active-시작-부분-수정',
        level: 4
    },
    {
        value: '2022-01-12',
        id: '2022-01-12',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-9',
        level: 3
    },
    {
        value: 'DB call 에러 건수를 실시간 통계에 추가',
        id: 'db-call-에러-건수를-실시간-통계에-추가',
        level: 4
    },
    {
        value: 'Http, DB 연결 실시간 로그 추가',
        id: 'http-db-연결-실시간-로그-추가',
        level: 4
    },
    {
        value: '에이전트 로그에서 지정한 oname 표시',
        id: '에이전트-로그에서-지정한-oname-표시',
        level: 4
    },
    {
        value: 'jdbc url 추출 구분자 추가',
        id: 'jdbc-url-추출-구분자-추가',
        level: 4
    },
    {
        value: 'logsink, log4j 플러그인을 사용하는 경우 자동 인식 기능 추가',
        id: 'logsink-log4j-플러그인을-사용하는-경우-자동-인식-기능-추가',
        level: 4
    },
    {
        value: 'logsink 수집데이터 추가',
        id: 'logsink-수집데이터-추가',
        level: 4
    },
    {
        value: '2022-01-03',
        id: '2022-01-03',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-10',
        level: 3
    },
    {
        value: 'Collection 모니터링 수정',
        id: 'collection-모니터링-수정',
        level: 4
    },
    {
        value: '2021-12-21',
        id: '2021-12-21',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-11',
        level: 3
    },
    {
        value: 'thread 중단 설정 추가',
        id: 'thread-중단-설정-추가',
        level: 4
    },
    {
        value: 'http header 에서 &#39;Cookie&#39; 항목 제외',
        id: 'http-header-에서-cookie-항목-제외',
        level: 4
    },
    {
        value: '2021-12-17',
        id: '2021-12-17',
        level: 2
    },
    {
        value: '업데이트',
        id: '업데이트-12',
        level: 3
    },
    {
        value: 'weaving 설정 추가',
        id: 'weaving-설정-추가',
        level: 4
    },
    {
        value: 'agent 환경 변수 제외값 추가',
        id: 'agent-환경-변수-제외값-추가',
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
        "id": "신기능"
    }, `신기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "느린-http-sql-발생시-알림-메세지-전송"
    }, `느린 http, sql 발생시 알림 메세지 전송`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `느린 http 호출이나 sql 호출이 일어나는 경우 알림 메세지를 전송하도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "트랜잭션-http-호출의-에러-수준-조정-기능"
    }, `트랜잭션, http 호출의 에러 수준 조정 기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `트랜잭션이나 http 호출의 상태를 정상 호출로 인식할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-30"
    }, `2022-06-30`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "자바-에이전트-메타태그-옵션명-수정"
    }, `자바 에이전트 메타태그 옵션명 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `자바 에이전트 메타태그 옵션명을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값 (default)
agent_meta_tags_enabled=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "컨테이너에서-id-추출-오류-수정"
    }, `컨테이너에서 ID 추출 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `컨테이너 환경에서 ID 추출 오류를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-22"
    }, `2022-06-22`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-1"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에이전트-설정의-license-키-옵션-수정"
    }, `에이전트 설정의 license 키 옵션 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `whatap.conf에서 license와 accesskey 옵션을 모두 활용할 수 있도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 동일한 기능
license=
accesskey=
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-16"
    }, `2022-06-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-2"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에이전트-실행-로고-수정"
    }, `에이전트 실행 로고 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `자바 에이전트 실행시 로고 내용을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `The Best Observability in Java
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "비동기-http-호출-에러-알림-메세지-수정"
    }, `비동기 http 호출 에러 알림 메세지 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `비동기 http 호출 에러 발생시 status code를 표시하도록 알림 메세지를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그-1"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "클래스-시그니처-확인-버그-수정"
    }, `클래스 시그니처 확인 버그 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에이전트 설정 메뉴의 클래스 시그니처 표시 요청할 때 NullPointException 발생하는 것을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-18"
    }, `2022-05-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "신기능-1"
    }, `신기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "netstat-기능-추가"
    }, `netstat 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `oshi 라이브러리 활용하여 netstat 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-3"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에러-알림-설정-업데이트"
    }, `에러 알림 설정 업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `트랜잭션 에러 알림 관련 설정을 추가하고 설정이름을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
# 에러 알림 기능 활성화 여부
exception_alert_enabled=false

# 트랜잭션 에러 알림 활성화 여부
exception_alert_service_enabled=false

# http 호출시 에러 알림 활성화 여부
exception_alert_httpc_enabled=false

# jdbc 호출시 에러 알림 활성화 여부
exception_alert_jdbc_enabled=false

# 에러 알림 메세지에 표시한 스택의 길이
exception_alert_stack_size=50

# 에러 알림 메세지 비활성화 시간 = 5분 (30000ms)
exception_alert_silent_time=300000

# 트랜잭션 에러 알림에서 무시할 status code
status_alert_ignore=403

# 트랜잭션 에러 알림에서 무시할 url:status_code 조합
status_alert_ignore_set=/api/test/timeout:408

# http call 에러 알림에서 무시한 status code
httpc_status_alert_ignore=408,500

# http call 에러 알림에서 무시한 url:status code 조합
httpc_status_url_alert_ignore_set=/api/test/timeout:408
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그-2"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에이전트-로그-출력시-에러-수정"
    }, `에이전트 로그 출력시 에러 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Timestamp 로그 기록시 에러가 나는 문제를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jdk-15에서-클래스-상세보기-에러-수정"
    }, `jdk 15에서 클래스 상세보기 에러 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에이전트 설정 화면에서 클래스 시그니처를 조회하지 못하는 현상을 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-16"
    }, `2022-05-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-4"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에러-알림-메세지-내용-추가"
    }, `에러 알림 메세지 내용 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에러 알림 메세지에 트랜잭션의 url 정보를 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그-3"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "sql-추적시-localdate-추적하지-못하는-문제"
    }, `sql 추적시 LocalDate 추적하지 못하는 문제`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `java.time.LocalDate`), ` 추적하지 못하는 문제 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-11"
    }, `2022-05-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-5"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에러-알림-메세지-내용-추가-1"
    }, `에러 알림 메세지 내용 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에러 알림 메세지에 status code 추가하였습니다. 에러 알림 메세지에 무시한 알림의 수를 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-04-25"
    }, `2022-04-25`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "신기능-2"
    }, `신기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "alibaba-druid-connectionpool-추적-기능-추가"
    }, `Alibaba Druid ConnectionPool 추적 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Alibaba Druid connection pool을 추적할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
druid_pool_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-call-에러-발생시-알림-기능-추가"
    }, `Http Call 에러 발생시 알림 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http Call 에러 발생시 알림을 보내는 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
httpc_event_detail_enable=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2022-03-24`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "신기능-3"
    }, `신기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-call-에러-알림-기능-추가"
    }, `Http Call 에러 알림 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http 호출시에 에러가 발생하면 알림을 받을 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_enabled`), ` 옵션을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `로 설정하여 기능을 활성화 할 수 있고, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_stack_size`), ` 옵션으로 지정한 값에 맞게 에러 스택을 알림 메세지로 받을 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `한번 알림이 발생하게 되면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_silent_time`), ` 옵션으로 지정한 기간만큼 에러 알림을 비활성화할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
exception_alert_enabled=false
exception_alert_buffer_size=5
exception_alert_stack_size=50

# 5분 (30000ms)
exception_alert_silent_time=300000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-03-18"
    }, `2022-03-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-6"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "데이터-베이스-호출-url-저장"
    }, `데이터 베이스 호출 URL 저장`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `데이터베이스 호출 URL을 저장하도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "데이터-베이스-호출-hash값-제거"
    }, `데이터 베이스 호출 hash값 제거`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `데이터베이스 호출 hash값을 ERROR 텍스트에서 제거하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "신기능-4"
    }, `신기능`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "연계-서비스-상태-추적-기능-추가"
    }, `연계 서비스 상태 추적 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `target IP 혹은 서비스의 접속 상태를 로그모니터링의 liveTail에서 확인할 수 있도록 연계 서비스 상태 추적 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_enabled`), ` 옵션을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `로 설정하여 기능을 활성화 할 수 있고 #RemoteTrace 카테고리로 로그를 수집합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `정상 응답인 경우 level이 ok, 에러인 경우 level이 error 입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `정상 응답인 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_ok_interval`), ` 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 30초 입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `에러 응답인 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_error_interval`), ` 설정 간격에 맞추어서 로그를 기록합니다. 기본값은 5초 입니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
logsink_rt_enabled=false

logsink_rt_error_interval=5000
logsink_rt_ok_interval=30000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-18"
    }, `2022-02-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그-4"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-호출-에러-시간설정-버그-수정"
    }, `Http 호출 에러 시간설정 버그 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http 호출시 에러 시간 max를 0으로 설정하여도 에러가 표시되는 버그를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-7"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "엑티브-스택의-쓰레드-이름-표시-설정-추가"
    }, `엑티브 스택의 쓰레드 이름 표시 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `엑티브 스택의 쓰레드 이름을 표시할 수 있도록 설정을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
active_stack_thread_name_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `yard 버전이 낮은 경우 true 설정시 프로토콜 오류로 에이전트 연결이 지속적으로 끊어집니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "비동기-쓰레드-이름을-표시-설정-추가"
    }, `비동기 쓰레드 이름을 표시 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `비동기 쓰레드의 id와 이름을 표시할 수 있도록 설정을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
debug_async_thread_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-11"
    }, `2022-02-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "버그-5"
    }, `버그`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "x-플러그인-int-인식-오류-수정"
    }, `.x 플러그인 int 인식 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `x 확장자를 사용하는 플러그인에서 int 값을 사용하지 못하는 오류를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "배치-에이전트-getresultset-오류-수정"
    }, `배치 에이전트 getResultSet 오류 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `배치 에이전트의 TraceSQL.getResultSet 오류를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-8"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "logging을-포함한-파일이름에-대한-자동화-옵션-추가"
    }, `logging을 포함한 파일이름에 대한 자동화 옵션 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logging 문자열을 포함한 파일이름을 플러그인으로 사용하는 경우 자동으로 hooking 옵션을 사용하지 않도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "자바-에이전트에서-로그에-트랜잭션-정보를-추가"
    }, `자바 에이전트에서 로그에 트랜잭션 정보를 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `플러그인이 아닌 자바 에이전트에서 로그에 트랜잭션 정보를 추가할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "httpclient-timeout-적용-및-에러-처리"
    }, `HttpClient Timeout 적용 및 에러 처리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `HttpClient에 timeout을 적용하고, timeout 발생시 에러처리를 할 수 있도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jmx-pool-설정-추가"
    }, `jmx pool 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `jmx pool object의 기본값을 수정하였습니다. jmx pool의 데이터소스 이름 사용 여부를 결정할 수 있는 옵션을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `데이터소스 이름을 등록하는 경우 jndi 방식을 실행하고, 이름을 등록하지 않은 경우 기본 url 방식으로 동작합니다`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `jmx_pool_dsname_enabled=false
jmx_pool_object="*:type=DataSource,class=*,name=*"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "heapdump-파일-경로-옵션-추가"
    }, `heapdump 파일 경로 옵션 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `heapdump 파일 경로를 지정할 수 있도록 log_root 옵션을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값
log_root=\${WHATAP_HOME}/dump
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "배치-에이전트-active-시작-부분-수정"
    }, `배치 에이전트 active 시작 부분 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `배치 프로세스의 Main 쓰레드에서 active stack을 남길 수 있도록 배치 에이전트를 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-12"
    }, `2022-01-12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-9"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "db-call-에러-건수를-실시간-통계에-추가"
    }, `DB call 에러 건수를 실시간 통계에 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `데이터베이스 호출시 에러가 발생한 경우 실시간 통계에 에러 건수를 추가하도록 설정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-db-연결-실시간-로그-추가"
    }, `Http, DB 연결 실시간 로그 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Http 연결, DB 연결에 대한 실시간 로그를 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "에이전트-로그에서-지정한-oname-표시"
    }, `에이전트 로그에서 지정한 oname 표시`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `oname을 -D 옵션으로 지정한 경우에도 에이전트로그에서 PID 대신에 에이전트 이름을 표시하도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "jdbc-url-추출-구분자-추가"
    }, `jdbc url 추출 구분자 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `jdbc url 추출시 '?', ';'를 기준으로 truncate 할 수 있도록 수정하였습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `';' 추가
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "logsink-log4j-플러그인을-사용하는-경우-자동-인식-기능-추가"
    }, `logsink, log4j 플러그인을 사용하는 경우 자동 인식 기능 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logsink, log4j 플러그인을 사용하는 경우에 자동으로 hooking 옵션을 사용하지 않도록 기능을 추가하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "logsink-수집데이터-추가"
    }, `logsink 수집데이터 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `logsink에서 수집하는 데이터를 추가하였습니다. 설정에 따라서 transation id, login id, http host 데이터 수집 여부를 결정할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# 기본값 (default)
_logtag_enabled = false         # tag 
logtag_txid_enabled=false       # transation id
logtag_login_enabled=false      # login id
logtag_httphost_enabled=false   # http host
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-03"
    }, `2022-01-03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-10"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "collection-모니터링-수정"
    }, `Collection 모니터링 수정`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `기존 Collection 클래스를 hooking 하는 방식에서 CollectionHolder를 통해 간접적으로 Collection 클래스 정보를 조회할 수 있도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Collection을 생성하는 클래스를 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `collection_nonstatic_holders`), ` 설정에 추가하여 Collection Map 항목에서 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `collection_nonstatic_holders=org.apache.catalina.session.ManagerBase
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-21"
    }, `2021-12-21`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-11"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "thread-중단-설정-추가"
    }, `thread 중단 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `thread 동작 시간이 설정값을 초과하는 경우에 thread 중단 여부를 설정할 수 있도록 항목을 추가하였습니다. 기본 설정값은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), ` 입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `auto_thread_kill_enabled=false  # 기본값
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "http-header-에서-cookie-항목-제외"
    }, `http header 에서 'Cookie' 항목 제외`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `http header에서 'Cookie' 항목을 제외하도록 수정하였습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `(기존) cookie,accept,user-agent,referer
(수정) Cookie,cookie,accept,user-agent,referer
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-17"
    }, `2021-12-17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "업데이트-12"
    }, `업데이트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "weaving-설정-추가"
    }, `weaving 설정 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `플러그인을 추적할 수 있도록 weaving 설정을 추가하였습니다. 기존의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), ` 설정과 동일한 기능으로 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving`), ` 또는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), ` 설정 모두 동작합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `weaving=tomcat10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "agent-환경-변수-제외값-추가"
    }, `agent 환경 변수 제외값 추가`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `환경 변수 조회 기능에서 특정 키값을 입력하면 조회 항목에서 제외할 수 있도록 기능을 추가하였습니다. 구분자는 ','로 대소문자를 구분하지 않습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_system_enabled`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_jvm_enabled`), ` 설정과 연결하여 사용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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