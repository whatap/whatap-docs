"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[49274],{

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

/***/ 62853:
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
    id: 'dashboard',
    title: '애플리케이션 대시보드',
    description: '웹 애플리케이션 서버의 리소스를 실시간으로 모니터링할 수 있습니다.',
    tags: [
        'PHP',
        '대시보드',
        '애플리케이션',
        '애플리케이션 모니터링'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "php/dashboard",
    "id": "php/dashboard",
    "title": "애플리케이션 대시보드",
    "description": "웹 애플리케이션 서버의 리소스를 실시간으로 모니터링할 수 있습니다.",
    "source": "@site/docs/php/dashboard.mdx",
    "sourceDirName": "php",
    "slug": "/php/dashboard",
    "permalink": "/whatap-docs/php/dashboard",
    "draft": false,
    "editUrl": "undefined/docs/php/dashboard.mdx",
    "tags": [
        {
            "label": "PHP",
            "permalink": "/whatap-docs/tags/php"
        },
        {
            "label": "대시보드",
            "permalink": "/whatap-docs/tags/대시보드"
        },
        {
            "label": "애플리케이션",
            "permalink": "/whatap-docs/tags/애플리케이션"
        },
        {
            "label": "애플리케이션 모니터링",
            "permalink": "/whatap-docs/tags/애플리케이션-모니터링"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "dashboard",
        "title": "애플리케이션 대시보드",
        "description": "웹 애플리케이션 서버의 리소스를 실시간으로 모니터링할 수 있습니다.",
        "tags": [
            "PHP",
            "대시보드",
            "애플리케이션",
            "애플리케이션 모니터링"
        ]
    },
    "sidebar": "phpSidebar",
    "previous": {
        "title": "대시보드",
        "permalink": "/whatap-docs/php/dashboard-intro"
    },
    "next": {
        "title": "히트맵 - 트레이스 분석",
        "permalink": "/whatap-docs/php/dashboard-hitmap-trace"
    }
};
const assets = {};
const toc = [
    {
        value: '과거 데이터 조회하기',
        id: '과거-데이터-조회하기',
        level: 2
    },
    {
        value: '에이전트 확인하기',
        id: '에이전트-확인하기',
        level: 2
    },
    {
        value: '에이전트 연결 상태 확인하기',
        id: '에이전트-연결-상태-확인하기',
        level: 3
    },
    {
        value: '에이전트별 모니터링',
        id: '에이전트별-모니터링',
        level: 3
    },
    {
        value: '분류별 에이전트 모니터링',
        id: '분류별-에이전트-모니터링',
        level: 3
    },
    {
        value: '대시보드 위젯 편집하기',
        id: '대시보드-위젯-편집하기',
        level: 2
    },
    {
        value: '위젯 크기 조절하기',
        id: '위젯-크기-조절하기',
        level: 3
    },
    {
        value: '위젯 이동하기',
        id: '위젯-이동하기',
        level: 3
    },
    {
        value: '위젯 삭제하기',
        id: '위젯-삭제하기',
        level: 3
    },
    {
        value: '위젯 추가하기',
        id: '위젯-추가하기',
        level: 3
    },
    {
        value: '프리셋',
        id: '프리셋',
        level: 2
    },
    {
        value: '새로운 프리셋 만들기',
        id: '새로운-프리셋-만들기',
        level: 3
    },
    {
        value: '프리셋 삭제하기',
        id: '프리셋-삭제하기',
        level: 3
    },
    {
        value: '위젯 옵션 이용하기',
        id: '위젯-옵션-이용하기',
        level: 2
    },
    {
        value: '위젯 알아보기',
        id: '위젯-알아보기',
        level: 2
    },
    {
        value: '에이전트 관련 위젯',
        id: '에이전트-관련-위젯',
        level: 3
    },
    {
        value: '애플리케이션 요약',
        id: '애플리케이션-요약',
        level: 4
    },
    {
        value: '트랜잭션 관련 위젯',
        id: '트랜잭션-관련-위젯',
        level: 3
    },
    {
        value: '액티브 트랜잭션 스피드',
        id: '액티브-트랜잭션-스피드',
        level: 4
    },
    {
        value: '액티브 트랜잭션',
        id: 'active-trs',
        level: 4
    },
    {
        value: '액티브 스테이터스',
        id: 'active-status',
        level: 4
    },
    {
        value: '히트맵',
        id: '히트맵',
        level: 4
    },
    {
        value: '서비스 관련 위젯',
        id: '서비스-관련-위젯',
        level: 3
    },
    {
        value: 'Apdex',
        id: 'apdex',
        level: 4
    },
    {
        value: 'TPS',
        id: 'tps',
        level: 4
    },
    {
        value: '평균 응답시간',
        id: '평균-응답시간',
        level: 4
    },
    {
        value: '리소스 관련 위젯',
        id: '리소스-관련-위젯',
        level: 3
    },
    {
        value: '시스템 CPU',
        id: '시스템-cpu',
        level: 4
    },
    {
        value: '힙 메모리',
        id: 'heap-memory',
        level: 4
    },
    {
        value: '사용자 관련 위젯',
        id: '사용자-관련-위젯',
        level: 3
    },
    {
        value: '동시접속 사용자',
        id: '동시접속-사용자',
        level: 4
    },
    {
        value: '1일 기준 비교 위젯',
        id: '1일-기준-비교-위젯',
        level: 3
    },
    {
        value: '금일 TPS',
        id: '금일-tps',
        level: 4
    },
    {
        value: '금일 사용자',
        id: '금일-사용자',
        level: 4
    },
    {
        value: '실시간 알림 확인하기',
        id: '실시간-알림-확인하기',
        level: 2
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const ImgLang = makeShortcode("ImgLang");
const InDoc = makeShortcode("InDoc");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `홈 화면 > 프로젝트 선택 > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `대시보드`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 대시보드`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard.png",
        desc: "애플리케이션 대시보드",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 대시보드`)), `에서는 애플리케이션의 주요 지표들을 에이전트를 통해 수집하고 차트를 구성해 실시간으로 모니터링하고 과거의 데이터를 조회할 수 있습니다. 대시보드에 배치된 위젯들을 통해 애플리케이션의 문제를 빠르게 파악하고 분석할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `CPU, Memory를 제외한 일반적인 차트의 경우 안정적인 데이터는 파란색 계열로 표현되고, 문제로 식별되는 요소들은 붉은색 계열로 표시되어 현황을 쉽게 인지할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "과거-데이터-조회하기"
    }, `과거 데이터 조회하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 대시보드`)), `는 기본적으로 실시간 모니터링 기능을 제공하지만 과거 시간의 데이터를 조회할 수도 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `실시간 모드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, `비실시간 모드`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "실시간 모드",
        src: (__webpack_require__(98451)/* ["default"] */ .Z),
        width: "300",
        height: "82"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "비실시간 모드",
        src: (__webpack_require__(2864)/* ["default"] */ .Z),
        width: "349",
        height: "82"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `화면 왼쪽 위에 시간 선택자에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "멈춤 아이콘",
        src: (__webpack_require__(76166)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `날짜 및 시간 영역을 클릭해 원하는 시간대를 설정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-timeselector-setting.png",
        desc: "시간 수동 설정",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `적용`)), ` 버튼을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `사용자가 설정한 시간을 기준으로 대시보드에 배치한 위젯의 데이터를 갱신합니다. 실시간 모드로 전환하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "재생 아이콘",
        src: (__webpack_require__(41486)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "에이전트-확인하기"
    }, `에이전트 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "에이전트-연결-상태-확인하기"
    }, `에이전트 연결 상태 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-check-agent.png",
        desc: "에이전트 연결 상태",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `화면 왼쪽 위, 시간 선택자의 오른쪽에서는 해당 프로젝트와 연결된 에이전트의 상태를 확인할 수 있는 정보를 제공합니다. 이를 통해 애플리케이션 서버의 동작 여부를 바로 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Total`)), `: 프로젝트와 연결된 모든 에이전트의 수`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Active`)), `: 활성화된 에이전트의 수`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Inactive`)), `: 비활성화된 에이전트의 수`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "에이전트 표시 아이콘",
        src: (__webpack_require__(29641)/* ["default"] */ .Z),
        width: "15",
        height: "19"
    }), `: 비활성화된 에이전트를 표시하거나 감출 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "에이전트별-모니터링"
    }, `에이전트별 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-select-agent.png",
        desc: "에이전트 선택하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `기본적으로 대시보드에는 모든 에이전트로부터 수집한 지표들을 차트에 표시하지만 에이전트별로 데이터를 조회할 수도 있습니다. 시간 선택자 아래에 위치한 에이전트를 하나 또는 둘 이상을 선택하세요. 선택한 에이전트의 지표들로 대시보드에 배치된 위젯의 데이터를 갱신합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `에이전트를 하나 또는 둘 이상을 선택한 상태에서 다시 모든 에이전트를 선택하려면 선택을 해제하거나 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Total`)), `을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `프로젝트에 연결된 에이전트의 수가 많을 경우 에이전트의 이름을 짧게 설정하는 것이 효율적입니다. 에이전트 이름 설정에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "agent-name"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "분류별-에이전트-모니터링"
    }, `분류별 에이전트 모니터링`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-select-agent-by-category.png",
        desc: "분류별 에이전트 선택하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `에이전트 설정을 통해 분류한 그룹 단위로 에이전트를 선택해 모니터링할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에이전트`)), `: 개별 에이전트를 선택하거나 모두 선택할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `업무별`)), `: 에이전트 설정에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap.okind`), `로 분류된 그룹 단위로 에이전트를 모니터링합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `서버별`)), `: 에이전트 설정에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap.onode`), `로 분류된 그룹 단위로 에이전트를 모니터링합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `업무별 에이전트`)), `: 에이전트 설정에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap.okind`), `로 분류된 에이전트 목록만을 모니터링합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `서버별 에이전트`)), `: 에이전트 설정에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `whatap.onode`), `로 분류된 에이전트 목록만을 모니터링합니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `에이전트 설정에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "agent-name"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "대시보드-위젯-편집하기"
    }, `대시보드 위젯 편집하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `대시보드에 배치한 위젯은 사용자가 원하는 크기로 조절할 수 있고, 원하는 위치에 배치할 수 있습니다. 불필요하다고 생각되는 위젯은 삭제하고 다시 추가할 수도 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "위젯-크기-조절하기"
    }, `위젯 크기 조절하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-widget-resize.png",
        desc: "위젯 크기 조절하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `위젯의 오른쪽 아래에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "크기 조절 아이콘",
        src: (__webpack_require__(81469)/* ["default"] */ .Z),
        width: "50",
        height: "50"
    }), ` 요소를 마우스로 클릭한 상태에서 원하는 크기로 드래그하세요. 균일한 가로, 세로 비율의 격자가 표시되고, 격자 단위로 위젯의 크기를 조절할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "위젯-이동하기"
    }, `위젯 이동하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-widget-move.png",
        desc: "위젯 이동하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `위젯의 윗 부분으로 마우스 커서를 이동하면 커서 모양이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "이동 아이콘",
        src: (__webpack_require__(32153)/* ["default"] */ .Z),
        width: "88",
        height: "88"
    }), ` 모양으로 변경됩니다. 이때 마우스 왼쪽 버튼을 클릭한 상태로 원하는 위치로 드래그하여 위젯을 이동할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "위젯-삭제하기"
    }, `위젯 삭제하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-widget-remove.png",
        desc: "위젯 삭제하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `삭제하길 원하는 위젯에서 마우스 오른쪽 버튼을 클릭하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `삭제`)), ` 버튼을 선택하면 해당 위젯이 대시보드에서 삭제됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "위젯-추가하기"
    }, `위젯 추가하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-widget-add.png",
        desc: "위젯 추가하기",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `대시보드에서 빈 공간으로 마우스 커서를 이동한 다음 마우스 오른쪽 버튼을 클릭하세요. 팝업 메뉴에서 추가하려는 위젯을 선택하세요. 원하는 위치로 위젯을 배치하고 크기를 조절하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `현재 추가할 수 있는 위젯은 고정적이지만 향후 업데이트를 통해 위젯 지원을 늘려갈 계획입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "프리셋"
    }, `프리셋`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "프리셋",
        src: (__webpack_require__(40021)/* ["default"] */ .Z),
        width: "400",
        height: "223"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `대시보드에서 사용자가 설정한 위젯의 설정과 레이아웃 상태를 저장하고 불러올 수 있습니다. 기본 프리셋(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Default`)), `)은 변경할 수 없으며, 원하는 형식으로 위젯의 크기를 조절하고, 배치해 새로운 프리셋을 만들 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "새로운-프리셋-만들기"
    }, `새로운 프리셋 만들기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `대시보드에서 원하는 형식으로 위젯을 배치해 보세요. 크기를 조절하고 자주 확인하는 위젯만 배치할 수도 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `화면 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "저장 아이콘",
        src: (__webpack_require__(54106)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `새로운 프리셋 이름을 입력하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-preset-save.png",
        desc: "프리셋 저장하기",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `저장`)), ` 버튼을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `프리셋 목록에서 새로 저장한 프리셋을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `새로 만든 프리셋에 변경 사항이 생겼다면 다시 프리셋을 저장해야 합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "저장 아이콘",
        src: (__webpack_require__(54106)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 선택한 다음 같은 이름으로 프리셋을 저장하세요. 기존의 프리셋에 변경 사항을 덮어쓰기합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `대시보드의 변경 사항을 저장하지 않고 다른 메뉴로 이동하면 변경 사항은 저장되지 않습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `프리셋은 사용자 계정으로 저장되며 현재는 다른 사용자와 공유할 수 없습니다. 더 나은 기능을 제공하도록 업데이트 예정입니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "프리셋-삭제하기"
    }, `프리셋 삭제하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `사용하지 않는 프리셋이 있다면 프리셋 목록에서 삭제할 수 있습니다. 프리셋 목록에서 삭제하려는 항목의 오른쪽에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "삭제 아이콘",
        src: (__webpack_require__(5005)/* ["default"] */ .Z),
        width: "20",
        height: "20"
    }), ` 버튼을 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "위젯-옵션-이용하기"
    }, `위젯 옵션 이용하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `위젯의 오른쪽 위에 표시된 아이콘 버튼의 기능은 다음과 같습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "병합 아이콘",
        src: (__webpack_require__(94754)/* ["default"] */ .Z),
        width: "24",
        height: "25"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `병합 / 개별로 보기`)), `: 해당 위젯 항목의 에이전트 데이터를 개별 또는 병합해 그래프로 표시합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "상세 아이콘",
        src: (__webpack_require__(43810)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `상세`)), `: 해당 위젯 항목의 데이터를 에이전트별로 구분해 조회할 수 있는 모달 창이 나타납니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `위젯에 따라 제공되는 옵션은 다를 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "위젯-알아보기"
    }, `위젯 알아보기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "info"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `이 문서에서는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 대시보드`)), `에 배치된 위젯에 대한 설명을 주로 다룹니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `애플리케이션 대시보드`)), `를 통해 트랜잭션 및 사용자, 서비스, 리소스 분석 방법에 대한 자세한 내용은 다음 문서를 참조하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dashboard"
    }, `애플리케이션 대시보드 살펴보기`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-hitmap-class"
    }, `히트맵 트랜잭션`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dbc"
    }, `DB 연결 지연과 커넥션 풀`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "에이전트-관련-위젯"
    }, `에이전트 관련 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `애플리케이션에 설치한 에이전트를 통해서 애플리케이션의 정보를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "애플리케이션-요약"
    }, `애플리케이션 요약`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "agent-dashboard-summary.png",
        desc: "애플리케이션 요약",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `프로젝트에 등록한 애플리케이션의 실행 상태 및 개수, CPU 코어 수, Hosts 수를 표시합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "트랜잭션-관련-위젯"
    }, `트랜잭션 관련 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `트랜잭션을 통해 확인할 수 있는 장애의 현황은 우선 응답시간을 통해 알 수 있습니다. 또한 진행 중인 트랜잭션이 종료되지 않는다면 이 또한 장애로 인식해야 합니다. 와탭은 진행 중인 상태의 시간에 따라 구간을 나누어 표시합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "normal"
    }, `파랑색(Normal)`), `은 응답 시간이 정상인 트랜잭션, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "slow"
    }, `주황색(Slow)`), `은 응답 시간이 8초 정도의 느린 트랜잭션, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "vslow"
    }, `빨간색(Very slow)`), `은 응답 시간이 보통의 2배 이상으로 느린 트랜잭션을 의미합니다. 이를 통해 사용자는 직관적으로 가장 빨리 장애를 인지할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "액티브-트랜잭션-스피드"
    }, `액티브 트랜잭션 스피드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "액티브 트랜잭션 스피드",
        src: (__webpack_require__(11302)/* ["default"] */ .Z),
        width: "1200",
        height: "173"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `현재 진행 중인 트랜잭션(가운데 영역)과 종료된 트랜잭션(오른쪽 영역) 현황을 확인할 수 있습니다. 왼쪽에서 오른쪽으로 지나가는 물방울 모양의 아이콘은 트랜잭션을 의미합니다. 액티브 트랜잭션의 상태를 속도(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "normal"
    }, `Normal`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "slow"
    }, `Slow`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "vslow"
    }, `Very Slow`), `)로 색상으로 분류하여 우측 상단에 개수로 표시합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "active-trs"
    }, `액티브 트랜잭션`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-active-tx.png",
        desc: "액티브 트랜잭션",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `액티브 트랜잭션`)), ` 위젯에서는 진행 중인 트랜잭션을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `아크 이퀄라이저`), ` 차트로 표현합니다. 지연 발생 현황을 에이전트별로 확인할 수 있습니다. 에이전트 수만큼 아크가 분할됩니다. 5초마다 현재 서버에서 처리 중인 요청의 수를 표현해서 해당 요청이 각각 어느 정도의 시간 동안 처리 중인지 알 수 있습니다. 5초 간격의 시간에 감지된 요청들은 위험 여부를 파악할 수 있도록 다음과 같이 색으로 분류합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `빨간색(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "vslow"
    }, `Very Slow`), `): 8초 이상 `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `주황색(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "slow"
    }, `Slow`), `): 3초 `, `~`, ` 8초`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `파란색(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "normal"
    }, `Normal`), `): 0초 `, `~`, ` 3초`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `파란색이 많이 표현되는 상황은 문제가 되지 않습니다. 이 중 일부가 주황색이나 빨간색으로 변경되는지 추이를 지켜봐야 합니다. 장애 상황에는 진행 중 트랜잭션 수가 증가하고 빨간색 비율이 높아집니다. 반면, 응답이 매우 빠른 시스템의 경우 처리하는 트랜잭션 수(TPS)는 높아도 진행 중인 트랜잭션 수는 낮을 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `왼쪽 위에는 진행 중인 트랜잭션이 가장 많은 에이전트 이름을 표시합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `가운데 숫자는 전체 에이전트의 액티브 트랜잭션 수의 합계입니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `액티브 트랜잭션 둘레에 두 개의 바는 처리량(TPS)에 따라 3단계 속도로 차트 주변을 회전합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `분할된 아크 영역을 선택하면 해당 에이전트에서 진행 중인 트랜잭션 목록 팝업창이 나타납니다. 상세한 트랜잭션 정보를 확인하려면 트랜잭션 목록에서 원하는 항목을 하나 선택하세요. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-active-tx-popup.png",
        desc: "트랜잭션 목록",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `트랜잭션 목록에서 선택한 항목이 이미 종료된 트랜잭션일 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `트랜잭션 보기`)), ` 버튼을 선택하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `트랜잭션 정보`)), ` 창이 나타납니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `트랜잭션 정보`)), ` 창에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "trs-profile"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `트랜잭션에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "track-transactions-intro"
    }, `다음 문서`), `를 참조하세요.`)))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "active-status"
    }, `액티브 스테이터스`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-active-status.png",
        desc: "액티브 스테이터스",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `프로젝트 내의 모든 에이전트는 5초마다 액티브 트랜잭션 수를 수집함과 동시에 진행 상태를 수집합니다. 진행 상태는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `METHOD`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SQL`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `HTTPC`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `DBC`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SOCKET`)), `으로 분류할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `METHOD`)), `: 메소드를 수행 중인 상태입니다. 일반적인 상황으로 파란색으로 표시됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SQL`)), `: SQL을 수행 중인 상태입니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SQL`)), ` 수치가 증가한다면 데이터베이스 서버와의 연결에 문제를 확인해 보세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `HTTPC`)), `: 외부 API를 호출 중인 상태입니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `HTTPC`)), ` 수치가 증가한다면 외부와 연결된 서버의 응답이 제대로 이루어지지 않는다고 봐야 합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `DBC`)), `: 트랜잭션이 Connection Pool로부터 새로운 Connection을 획득(get)하려는 상태입니다. DB Connection Pool의 개수가 부족하면 새로운 연결 요청이 발생할 때마다 지연이 되면서 성능 장애의 원인이 됩니다. 이 경우 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `DBC`)), ` 수치가 증가합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        parentName: "li",
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `DB 연결 지연과 관련한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dbc"
    }, `다음 문서`), `를 참조하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SOCKET`)), `: 외부 시스템과의 TCP 연결 시도를 의미합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `SOCKET`)), ` 수치가 지속적으로 증가한다는 것은 외부 시스템과의 연결이 되지 않아 장애가 발생 중일 가능성이 높습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "히트맵"
    }, `히트맵`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "hitmap.png",
        desc: "히트맵",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `히트맵`)), ` 차트는 종료된 트랜잭션 응답시간을 분포도로 표현합니다. 가로축은 트랜잭션 종료 시간입니다. 세로축은 수행 시간입니다. 수행 시간이 긴 트랜잭션은 분포도 상단에 위치합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `히트맵`)), ` 내의 차트 영역을 드래그하면 세부 트랜잭션 정보를 확인할 수 있는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `트레이스 분석`)), ` 창이 나타납니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `트레이스 분석`)), `에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "dashboard-hitmap-trace"
    }, `다음 문서`), `를 참조하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `정상 트랜잭션은 하늘색 → 파란색 → 남색 순으로 표현됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `에러 트랜잭션은 노란색 → 주황색 → 빨간색 순으로 표현됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `오른쪽 위에 위치한 숫자는 차트 내 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "normal"
    }, `트랜잭션 건 수`), `/`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("span", {
        class: "slow"
    }, `에러 건수`), `를 의미합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `Y축 자동`)), ` 버튼을 선택하면 수행 시간을 나타내는 Y축을 자동 조정합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에러`)), ` 버튼을 선택하면 에러 트랜잭션만 표시합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "위 방향 아이콘",
        src: (__webpack_require__(97210)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 또는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "아래 방향 아이콘",
        src: (__webpack_require__(55669)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 선택해 5초 `, `~`, ` 80초까지 차트를 확대/축소할 수 있습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `오류가 발생하지 않았고 수행 시간 500ms 이하 트랜잭션의 세부 정보는 url 당 5분에 1건만 수집됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `TPS나 평균 응답시간 같은 통계정보에는 영향을 미치지 않습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `에이전트 설정을 통해 정책을 설정할 수 있습니다. 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "agent-transaction"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `히트맵 위젯을 통해 트랜잭션을 분석하는 과정은 다음 문서를 참조하세요.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "서비스-관련-위젯"
    }, `서비스 관련 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `서비스 관련 위젯을 통해 애플리케이션 성능 튜닝을 위한 지표로 활용할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "apdex"
    }, `Apdex`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "Apdex",
        src: (__webpack_require__(69866)/* ["default"] */ .Z),
        width: "600",
        height: "345"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Application Performance Index(Apedx)는 애플리케이션 성능 지표입니다. 웹 애플리케이션의 고객 만족도를 측정합니다. 사용자 만족도에 대한 지표로 활용할 수 있으며, 0 ~ 1 사이의 값을 갖습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("blockquote", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "blockquote"
    }, `(만족 횟수 + (허용 횟수 * 0.5)) / 전체 요청 수`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `만족 (Satisfied, S): 업무처리에 전혀 문제 없음 ≤ 1.2초 (만족 S 기본값)`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `허용 (Tolerating, T): 사용자가 지연을 느끼나 업무처리는 가능 ≤ 4.8초 (만족 S * 4)`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `불만 (Frustrated, F): 업무처리가 불가능 > 4.8초 (허용 T 초과 및 오류)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `만족 S 기본값은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `관리`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에이전트 설정`)), ` 메뉴에서 변경할 수 있습니다. 설정 키 값은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `apdex_time`), `입니다. 에이전트 버전 2.0 이상만 지원합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "tps"
    }, `TPS`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "TPS",
        src: (__webpack_require__(73449)/* ["default"] */ .Z),
        width: "600",
        height: "346"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `Tansaction Per Second`), `(`, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `TPS`), `)는 초당 처리한 트랜잭션 건수를 의미하며 서비스 성능 지표의 기준이 됩니다. 5초마다 처리한 트랜잭션의 수를 초당 건수로 환산해 차트로 표현합니다. 최근 10분간의 TPS를 보여줍니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `TPS, 응답시간, CPU 사용률 분석에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dashboard#analysis-user-service-resource"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "평균-응답시간"
    }, `평균 응답시간`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-avg-response-time.png",
        desc: "평균 응답시간",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `애플리케이션 서버가 사용자에게 요청 결과를 반환하는 데 걸리는 시간을 실시간으로 모니터링합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `평균 응답시간`)), `은 튜닝 지표로서 의미를 가집니다. 와탭의 모니터링 서비스는 5초 간격으로 트랜잭션의 평균 응답 시간을 계산합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `TPS, 응답시간, CPU 사용률 분석에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dashboard#analysis-user-service-resource"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "리소스-관련-위젯"
    }, `리소스 관련 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "시스템-cpu"
    }, `시스템 CPU`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-cpu.png",
        desc: "시스템 CPU",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `애플리케이션 서버의 CPU 사용량입니다. 실시간으로 CPU 사용량 변화 추이를 파악할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `TPS, 응답시간, CPU 사용률 분석에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../best-practice-guides/about-apm-dashboard#analysis-user-service-resource"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "heap-memory"
    }, `힙 메모리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-heap-memory.png",
        desc: "힙 메모리",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `각 서버당 사용할 수 있는 최대 메모리와 현재 메모리를 표시해 위험 수치에 있는 서버를 확인할 수 있습니다. 시간에 따른 메모리 사용량 변화를 실시간으로 볼 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `메모리 라인 차트는 보통 계속해서 물결칩니다. 애플리케이션 서버가 요청을 처리하기 위해 메모리를 사용할 때 증가합니다. GC(Garbage Collection)를 통해서 메모리를 정리할 경우에는 감소합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `힙 메모리`)), ` 지표는 평균값을 사용해 표기합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `Java와 Node.js는 힙 메모리 총량과 사용량을 보여줍니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `PHP 및 Python, .Net은 프로세스 메모리 사용량을 보여줍니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `힙 메모리 차트 분석에 대한 자세한 내용은 다음 링크를 참조하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://www.whatap.io/ko/blog/94/"
    }, `월간 와탭 : 모니터링에 주목해야할 지표`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://youtu.be/FcWfVrETWh4"
    }, `Java 힙 메모리 차트 분석 : Ch.1 힙차트 관찰하기`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "https://youtu.be/t2q5z4HHNfs"
    }, `JAVA 힙메모리 차트 분석 : Ch.2 메모리 릭, 그리고 힙덤프 분석`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "사용자-관련-위젯"
    }, `사용자 관련 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "동시접속-사용자"
    }, `동시접속 사용자`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-realtime-user.png",
        desc: "동시접속 사용자",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `실시간 브라우저 사용자 수를 보여줍니다. 5초마다 최근 5분 이내에 트랜잭션을 일으킨 사용자를 중복없이 카운팅해 표시합니다. 사용자 브라우저의 IP를 기반으로 카운팅합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(InDoc, {
        product: "java",
        mdxType: "InDoc"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, `에이전트 설정에서 사용자 구분을 위해 IP를 사용하거나 쿠키를 사용할 수 있습니다. 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "li",
        "href": "agent-additional-option"
    }, `다음 문서`), `를 참조하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `일반적으로 접속 사용자는 현재 네트워크로 접속해 연결된 사용자를 의미합니다. 하지만 웹 시스템은 비 연결 네트워크를 사용하기 때문에 다릅니다. 접속되어 있다는 의미보다는 최근 요청을 보낸 사용자가 측정 대상이 될 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `실시간(동시접속) 사용자는 같은 시간대에 시스템을 사용하고 있는 사용자를 의미합니다. 실시간(동시접속) 사용자를 산정하거나 측정하는 방식은 다양합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `사용자 수는 단순히 합산하는 것이 아니라 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `HyperLogLog`), `로 산출합니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `HyperLogLog`), `는 매우 적은 메모리로 집합의 원소 개수를 추정하는 확률적 자료 구조를 의미합니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "1일-기준-비교-위젯"
    }, `1일 기준 비교 위젯`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "금일-tps"
    }, `금일 TPS`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-today-tps.png",
        desc: "금일 TPS",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `금일 하루 동안의 TPS를 시간대별로 표시합니다. 어제 동시간대의 TPS(회색)와 비교해 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "right-arrow",
        src: (__webpack_require__(80561)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 클릭하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `통계/보고서`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `일자별 애플리케이션 현황`)), ` 메뉴로 이동합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "금일-사용자"
    }, `금일 사용자`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ImgLang, {
        img: "apm-dashboard-today-users.png",
        desc: "금일 사용자",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `하루 동안의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `동시접속 사용자`)), ` 수를 시간대별로 나타낸 지표입니다. 어제 동시간대의 사용자 수(회색)와 비교해 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "right-arrow",
        src: (__webpack_require__(80561)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` 버튼을 클릭하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `통계/보고서`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `일자별 애플리케이션 현황`)), ` 메뉴로 이동합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "실시간-알림-확인하기"
    }, `실시간 알림 확인하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `화면 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "실시간 알림 icon",
        src: (__webpack_require__(26443)/* ["default"] */ .Z),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, `실시간 알림`), ` 버튼을 선택하면 최근 발생한 이벤트를 확인할 수 있습니다. 토글 메뉴를 클릭해 브라우저 알림을 켜거나 끌 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `화면 가장 위에 고정 메뉴 영역의 기본 요소들에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../main-ui-intro"
    }, `다음 문서`), `를 참조하세요.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 69866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/apm-dashboard-apdex-5085e223bd90954e803ae007b60cc9f1.png");

/***/ }),

/***/ 40021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/apm-dashboard-preset-default-1913593a7773d769579c912f46da4ad3.png");

/***/ }),

/***/ 73449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/apm-dashboard-tps-15c75072313050ec6d7e68353ef0775f.png");

/***/ }),

/***/ 2864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 98451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABSCAYAAADuIulwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABe1SURBVHgB7Z0JcFTlmobfdHfS2ZPOvpEEwhp2EAQBIayyKFyZq5ZluY0O5aij1r1j1ajl1Fg1pTVXq9SqO+VWeh1vjaNchcISZBFBFOTKviQEw5KQkH1fOnvmf/942k7SSXeDkG78HuoUpPuc06dDn7ff7/u///sDehQQBEHwA0wQBEHwE0SwBEHwG0SwBEHwG0SwBEHwG0SwBEHwG0SwBEHwG0SwBEHwG0SwBEHwGyy4AlpbW1FXV6c3u92O7u5uCIIguMNsNiM4OBjR0dGw2WywWq1eHe+1YNXU1KCgoAAVFRVoaGhAS0uLCJYgCB5BwQoJCUFkZCRSUlKQkZGB2NhYj48P8GZqTklJCU6fPo3Lly/rF0lMTERERARMJhMCAgJwI1Nmr4Tw28YSYEaMNRqmAMmkXCkdHR1obGxEaWkp6uvrkZycjOnTpyMhIcGj4z12WNXV1VqsysvLMWbMGK2MtHRUSwrWjU5AQyCE3zZBpkCkhibBYrqiTIqgoD9iGmnEiBE4c+aMNj95eXnaeXnitDz6zTNnde7cOVy6dAmjR4/GlClTEB4efsO7KkEQfl2oGaGhodroGNvZs2f132FhYTq/NRQeWSMm15mziomJ0e5KxEoQhKuB+sHEe3p6utYT6gt1xh0eCxYT7ElJSfpFRKwEQbhamEpiWomhIPXlVxMsxpwcDeTJ3Vk2QRAET2EoSIdFfaHOuMMjwWLZAjcq4m8hwS4IwvXB0BRDY9zuD0EQBD9BBEsQBL9BBEsQBL9BBEsQBL9BBEsQBL9BBEsQBL9BBEsQBL9BBEsQBL9Bpp27gVMGurq6ADMEQRhmRLDcwL497OFjTQ+DIAjDi08IFucQsS+OdjI/w0nWrpp6cd/Kykrd8sZ5X3aSsFhEf28Eujo7UVlWibik+CH/Tzva29FQ34g2p8/CYJhMZiSlJsEb7C12NDU06i8sEmiyoCukHeaAvnabzQA4Jy4+Pt7ledp5ncqpsyNBU1OTnjsXFxen5+YGBl59nzWe22iIR9jN07h/PJlKx3l8PJ4977g/r43NOfmefA2fEayjR4/2EaGsrCyXgsUZ3SdPnkRtba3jsezsbN35VATLf2Fjt4rScpzNPYvco6dRUlyCP/zHvyIqOmrQY0pLyrBjy3acP1Pg9vwRUZH4t1eehzeczc3HN9t2o+Jyuf7ZhAAEWaz6b2coOrNmzcKGDRvQ/z0VFRVh8+bNuvklhYWfdfYxj4qK0r3lHn744UGFzh0811dffYW9e/c6xJCwrxRFa86cOVi8eLFu4eKqwwrn7vG++/zzz3WvO95b3I/XRjG9++679Tl8af6wz9zhFCsqvcFgM7fpwrif877OzsxX6e7pRld3p/63SX1Dm01DJ8X4Ye/q6VJ/d6sPkcnxrd7V0wmjq7XFHKhunYBBj+9Wx/N19Wuq1zOpP86PDU6AbgPs7hp/DVqVi7lQcAG5x04j72QeykpKUVZcBrv6PLS2tA4pWPW19UrcTiH3+Gm3rxOb4HnfcIOSwhIc//sxlBZfHnI/ChBFwhn+/vnF+umnn2Lbtm0uW6f8+OOP2tk88cQTWry8gZ9/nnvLli1aDDs7O/s8T5E5fvy4bo736KOPYtSoUQOu7/Dhw3j//fexf/9+h9g5w0imrKwMd9xxh8+YAbEk14m8+gJ8WnkA9u4O3JcwD1NsE4bcv669ATurj+BQ4zlMCknG0ribEGuNxnvF21DUWgVK1tPpa5ES4vrbuay1ArsqD+GkvRSjrHFYFjcDcUFR2FJxECebi4Z8bYsSq2XRE5GTcDOuFdUVVTh59CROK8E5n39OiwIFyPjyMXtwg7QpsWuo6w2DwsLDEBsfi8Ag1yFWZEw0vKWxrkELKomJjYEt1garZeAqL3RY7E3uDG92up+tW7fqUI3Rwi233KLDLT63a9cuLRIUMwreyy+/7LGTaWtrw8cff4xNmzbpTsB0SnPnzsWECb2fKT723Xff6df54osvdHhHJ0fXZUCR++ijj/D999+jubkZY8eOxcyZM/V7OXHiBI4dO4YjR45o45Camoqbb752nwVvEMG6TlS31mJH9VHUdjZjccRot4LV0mXHsYYCbKn6O9oiJ2BO9AQkBsehq6MFu9R5mrvbMS8iC2tDcgYc26P+FNrL8EnZHhS012Ft7EwEKYfW0tmKA3V52F13asjXDlG5mlST9ZoK1plTZ7Dpr5/h/NlzKhfVmyMyW8yOViOe0KLEpKa6Rv974vRJWHfvnYiJi3G5r/kKHALTDryZycLbcrBs1TKMsKUqQe97LoZR/R0Wb/Y9e/Y4FlqgYNx22216P0YTN910E9544w1UVVXhyy+/xL333oupU6fCE9gLnWFmfn6+/l098MADOnyjMOnQWoWH48ePx9tvv60F54cfftCCQ1EjvKZPPvlEiybFzwhnjdfn8RRQit5PP/2Ed999Vy8UERQUhOFGBMuPYIg2WwnXp1WHtGAdrj2FtSkDBautqx35zSUo7GhAeEAgJoSlKrGLR3WbU95Pua6cmGmwBUUOOD5QiduY0BRcS+zNLdpRBVmDMOWmqZg8c6r6uQ57vvoGtVU1bo/XqQElJvafHVBcfBzGTBirclUR8JTurm6dELcGWwfkeDo7OlXCvckhpiNGpmP0uDHIiEpzuwgFRY7h2MWLF/XPs2fP1rkkCpeRI1qzZo12XxQsigqdVn/BYpjHhD+bZjpfH/NOHKSiWGVmZmqxGjdunON5JvUZxm3cuFEvy8dkOnNUhmAVFhZqh0WxYqj3u9/9Tl+jIbrMXz322GM6VKS4UiDpuiiyw40Ilp8xNXo8kgPDlFNrwvb6fPyxoxGRgX1v0jolVHmNF9ChclVjQhIwOTwTQea+347p1hisSpyLtNBkl69zrdOsGaMy8ODjDyEtcwTiE+MQHBqqxGq3x9/i7W3tWlB6unvzeaEqJKT4eUq9CiXf/tN/oyCvALPmz1bubB3ikxIdzzc3NqLV3urIF0bZomAye/ZboYOhoFAQCN0J24s7iw7Ds4ULF+LAgQP651On+rpehnWvv/66XgN07dq1WL9+vU7O83r4mJFzmjhxoj63MwzruG9aWpoWLO7rPEhVXFysRYxw9RoOWnFhCANeJ8Vp8uTJWng5WJCbmyuCJXhPsCUYOZHjUdhWh4buNhyvycWCROfQrQe1SrBOKcEiScpJZYamDjgPbx0O01tNw7N82chxo5A+OlPfXEbuxpvRqHYlBs1NveEahSQ0LMRjsaN7unD2PPbv+R5t9jYdimaNz8LiVb8IVpM6d1trr+DwGvX6mx6uR0hXYoSSzE9RnFytcOyc96LA0VHR8TChzoT9zp07tZPcvXu3zk9R4MgjjzyC22+/Xf+bbojX5uoaeE5irLRsYCyATJhTo1j1d5i8Di7lR8HidXFwwBcQwfIzOCo4L3Ya/q/miBKsVnyn8lnOgmXvbMO5ljJc6GxAvCUEM8LTYLPa4GtYLIG4moGnNuWwmn92GawXqiyvxId/fl+XIjQq55WcloKM0RlYtGIRklNTlKj9MuJJgQuPCNfCRcdiVj+HqZ+daW5q0aJIwiPD9Ujkvp3fovRCiRYDCsi0adOwYsUKLRrO8HnDATE8cyUIhKHhL++nTbsgOiMKL4/TI70q7KPYGQ6I52GZAt2T8XN/oWeYe/78ee2uCBP+XO3KgAJs/vn3wX0HW0vZWCeQgsXRQl9ABMsPYcJ+YnCMDgs31h7Dv3S2IMzS+4FuVI+drM1Hl/oQZlqTMDNivHIGN94qRxy9a6zvFQU6rW2fb+3z/E+5Z4EdwOa/bsI//WEDbl2+SOeqCG/wjKxMPP9fL+Ls6XxMnTUN2VOz+xzPglGGhKS2uhZ/UWLoDEO4zz77TJcFvPLKK5gxY4bjOborQ7AoDoOVBDgn6ilMFBgKFvdn/dOrr76q82Dz58/XoZ+Bu7UV6KA++OADfU6KH8WV4Z0Bi6zp+jiKSBfmqqSBGNdNl8cFlI11HYYTESw/hHVZq+Pm4EhLOerVaOKRmhNYkDBHP1euQsUfGvIQrBLnGaGJGBuV6fIcX6sRyINH/1ONePV9PNQUhPXxN+PRrHvgy9AddXS0a0HoVuIcHBKMSJVwD4tQo3AtbahRiXsm5RvVzfvav/8JlkALclYucRzP8oe5i27RmyvsP4dMRiV6ZHSkypOFwhZh006IG2905pqef/55PeLH0gBiOCNvcT6GDssI+7yBosdRPRaT8to5WnjPPff0qajnaCJFiy6MorV9+3akpKRoJ8Zrp+ti/RYFmRiV/L5QQCqC5afMtE1C1OWdWrAO1uZhvhKZLpVkP9dSgvz2Ooy2xmK2SraHWVzPgeSIo8lkRf/bqkcl5wMDhiev5Q2sibp5QW8Vdk1lDW5ZPB/Lb1+uwze7ckb7vt6Hje9/jEsXL+n9N3+8CQuW3qqEy7P3lpYxAvPVOemCKIhrfr8G8xcuwEhbOlpUuPjhhx9qYaCbokthEedzzz03rDc1RxRZSEp3RShCq1ev1qLlDGeR0HVx9K9RDS6wpouCZBSIslyC7s4IKfkYz+ULiGD5KcnKPc0LS0dRWzW+ayrAho4mdbNYkFtfoKeOpFjjkR2RNejx04MTsD5xERKC+uZfmFiOC/a+yPJ6Y4uLwbI7VmCpEqme7t7ZAAGmXrsYEhqixavdbsd7b7ynw8f8k2dQVFCIURM8qyhnyMjtHx64u3e2gRIiY6SV4dSTTz6JkpISXTpAp8WqdY6+GdNgjJwVHctgOaL+XM0CxcwzccTxtdde0yEcBSgnJwf333//gH2ZE1u5cqV2WIcOHdKiRYfIQlJeK0c5GUoyWc98HAWLrswXkH5YfsySuFn676pOhoWnUd/RiP31eQgJsGByWBoyw9MGPTZKOa/JtrGYFT+1zzYzbjIywkfAX9BJZ5VANsTKmbkL5+nkusGlokvwFp5Xn9+FmNx5552OfzuPyvEGN0YsKR6DhYfO02l4flejfZ7A8xw8eBBPP/20Hv2j0DCcfOqppwYdOWWJwuOPP47ly5fr0gaOIhrT4fjzQw89hEmTJjnejzgs4aqZHD0OceYQXSi6v/YEupULKOioR7pyTTOUu3JX4HijExUTpUcADarUSOKvCUsCKDR0JQzHjBCK7sYQH4pA6yDdJJyT3RQF59IDT6EgsqjzpZde0s6IuSqOXD7zzDN9puL0h6Eri0U57YbukGEgE+ssZWCCnol+Frsa19a/1mu4EMHyY6KCIvH7mOl4u/IAttefQm13KwKVaU5V+avxUaNwo0JHQfEpK+kdaud0nKTU5AGFo50dXX0mh5sDPfu4syi16Hwhmhp7BSV9VAaiORfRNPA6DMFyHrlj3ssQLIoVR+2MGitnKBAGLHFwLt70BIoVp91wGs2FCxf06zMPRbFy1enEFRQsbv3Zt2+frr2iAFLEvJ2cfa0QwRoGGjqbUGGvdvlckDkQkYHh8JSFCbPxrhKschUW7qrPRaQlGJNCkxETNHTtVWt3h57fGBxgdfl8iMWKCC+u43rC6vZTh09g8/9u0vMmJ86YjNXr1+ickzOll0oc1eYkLT3No/Ozz9buL3fhxKHj+vyLVi7GbetWIdjW93dlTDwmDMMMF0LBYm0WxYyiYrRuoSMz4HGcHmPAOilvclhGaxjmnTjfjz8vWLBAd37oPxHbWxjavvXWW473wvDSUwG81ohgDQN7a3NR2F7v8rms0FSsiJ8FTxkfMRqZSpwK2tUwfncXUpXr4kRpdx/+C201+Fv5PkQHDsybWJQrmRI5EksS5sIXYYmC2WxBeVkFGusbtBNKz0xHSnqqY/i+WT124NsDsDf35mXYzSFN7WNAIalUxzc1Nmv3xG4MxtQblkhwZPBS4SVd7d7V1Y3sKdmwTfslZGP4x3IAwjwRiyyNPA/dFUfijM4MbOMyb9483a3BcGEUGc7VMzCq2A1YWsBJyMbkaYaLziOQRrcF5q7o3jgP8dlnn9VJ/yuBws4QldfF90Xnxt8lnRVHGn0FEaxh4OvGnwBuLlgRMw0LYz2btU+ClRNaHTsdb5R+rYVmVHCsym2Nd3vcRZXrulh92OVzVjXidpdygb4qWBTjrPGjMWvebOzdsQcVpRXYuWW7FqHkESm6Riv/9Bns3b7H4bAWr16KhKRel8AQrraqFh/++QN9bPa0iVh2+woV+vXe7OzswHOfPZWPM6fyUHjuIv72PxtRebkSY1NHo6W5RY/IceoMYbHnqlWrHA6KNzrFiSNwvPmZY2KBKUcR6cJYw8W2L0b1ON0VR/QM6JYY4r355pt6X+aTGOoZ1e0sJn3nnXd0rRXLKli1TmHhNBpurqBTYilD/9COBbDMYXESNje6Nk6OJsxxXU2DwWuBCNZ1IiM8Ff+YtkKHYkORFZKEUJVIDzIFqlHAGUgJTUSWNR6xQ0yvWZIwB12Boeo/06TCwZQBk6ENwlWIt1rtm63c01CoMTF9Hl+GwrRk1RJUllfo5n/sVFpdWY2Y+DjlODpQVlyqOzlwlG/K9CkqpFvpcFAUhPLLZVrs2LGBlfJjssc4BItQxHJWLdZD/iWFxfhh7wFcOl+EhLgER8EoBZJCwJG2pUuX9nFAzPvwcYaDrHdi3ykew4JNhocsieDxI0eO1A32nBPkTODT6ezYsUNfK/ejgzIEi+djvypjviL59ttvdTuYwWCe6r777hsgWHR/FD+KlXN4y7KHu+66S7ee8SVEsK4TGeFpeCTcsxyKwZK4mViCmW73GxuRqTd3RASGKcHyjUZsVwsr1SfNnIJHIsOxe+vXOHTgEEqVSFVVVPU+r1wOO0EsWpGD2QtmIz0rw3EsHVqkLRLpIzP0MckqYR/bz0WwlovHxiXG45utu3Dsx+MoUTmx4qJi/TxrmSgi69atw6233uqYd2fAm37JkiVaoFirRbfF3BBdFqFrYdnAgw8+OEAUeO10YhQ9hpQM85zPz9IF5y67OrytHHoElNfjnM8z4KAAhZYdSSmIzFXRiVGAfaWUwRkRLMFnYF+sDRHhOv/EQs3wiKGT/pwbOGbiOETH2nDTvFk6vGtQOS2zOjY6xqYfH5M9FtG26D51WrxBE5ISseGP/4xKdUxKegpGjhnoOiOiI3VoOEIJX87FIlSXqYGSlh6EK1fF8I+CwirywUb3OL2GjfMoNuztzlFBOja6KQoDXQ9Fq3++kdfHx1944QWdK+OUH76WAdvVvPjii30cljt4jc49swwYuvLcFDRjjiHfG6/dF/EZweKwrnMLDueZ7M4wwdm/XsVV6w7B/0hMSdKbN/DmNo5js7125RgodlaVODebB+9JT7GbNnuadidD9Stngp9OjRs6emALiEKINXhAh9HB4OeV/aa4MZFOR8PH+JkdamCEAkLn1ttNou/7YBjJ7deA18WJ1b600MRQ+IRgUdWp9M4M9q1FsaKFdrbE3FdES2CYOFhPd1dQMLxZXIF1XtGhUVdckEuh8qbN8PUQkaFE3RfxCcHih6Z/DmAwvP1PFwThxkFyWG4wlke6aC+GIAjDiwiWGxx9hOwQBGGYkW4NgiD4DSJYgiD4DSJYgiD4DSJYgiD4DSJYgiD4DSJYgiD4DSJYgiD4DV4JlqerfwiCIHiKN7rikWBxvhE39ulxnsMnCIJwNVBPuBka4w6PBIutJrix+6E3LS0EQRCGgnrCRToMjXGHR4LFDgnc2ICMjcKuZBluQRAEZ+is2LeemmJojDs8Eiy2f2EjfHYsZOtWNhUT0RIE4UrRbarLy1FQUKBzWNSXodZRNPBo8jPbuXAVEFo3Nqhn72h2QWQLVb6IvzT/EgRheOEKP1wJiGsessc9++NTS6gvnrSNCujxIkVPZ8UVYrnx5OwKylVufwuC1dDRBOG3jUn9CQsM6bM4q+AddFaM1IzFZSlU7HrqibsiXgkWYZKMyxNx1Q9j3TQZORQEwRPYrJPrNiYmJupe8lxsw5tuwV4LFqEysjc1N5Y6SH2WIAjuYEtqoy01e9YzOvO2RfMVCZYgCMJwINlyQRD8BhEsQRD8BhEsQRD8BhEsQRD8BhEsQRD8BhEsQRD8BhEsQRD8BhEsQRD8BhEsQRD8BnZr+AsEQRD8gP8HTQULNXhcwLAAAAAASUVORK5CYII=");

/***/ }),

/***/ 55669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZG93bjwvdGl0bGU+IC0tPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1kb3duIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MTEuMzAwMDAwLCA0NC4zMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgOC4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS40MTQyMTM1NiwxMy40MzUwMjg4IEw0LDEyLjAyMDgxNTMgTDExLjA3MSw0Ljk0OTQ2NjA5IEw0LC0yLjEyMTMyMDM0IEw1LjQxNDIxMzU2LC0zLjUzNTUzMzkxIEwxMy44OTk0OTQ5LDQuOTQ5NzQ3NDcgTDUuNDE0MjEzNTYsMTMuNDM1MDI4OCBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljk0OTc0NywgNC45NDk3NDcpIHNjYWxlKDEsIC0xKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 29641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxNSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA4LjMzMzMzVjEzLjMzMzNMMTIuNjQxNCAxNC45MjM5TDExLjY3MDMgMTMuNTg3MkwxMy4zMzMzIDEyLjUwNThWOC4zMzMzM0gxNVpNMTUgNi42NjY2N1YwSDguMzMzMzNWMS42NjY2N0gxMy4zMzMzVjYuNjY2NjdIMTVaTTYuNjY2NjcgMS42NjY2N1YwSDBWNi42NjY2N0gxLjY2NjY3VjEuNjY2NjdINi42NjY2N1pNMS42NjY2NyA4LjMzMzMzSDBWMTMuMzMzM0wyLjM1ODU2IDE0LjkyMzlMMy4zMjk3MSAxMy41ODcyTDEuNjY2NjcgMTIuNTA1OFY4LjMzMzMzWk00LjcyODc5IDE0LjQ5NzFMMy43NDEyMSAxNS44NTY0TDcuNSAxOC4zOTEyTDExLjI1ODggMTUuODU2NEwxMC4yNzEyIDE0LjQ5NzFMNy41IDE2LjI5OTJMNC43Mjg3OSAxNC40OTcxWk01LjczMjIzIDQuNTUzNzJMNC41NTM3MiA1LjczMjIzTDYuMzIxNDkgNy41TDQuNTUzNzIgOS4yNjc3N0w1LjczMjIzIDEwLjQ0NjNMNy41IDguNjc4NTFMOS4yNjc3NyAxMC40NDYzTDEwLjQ0NjMgOS4yNjc3N0w4LjY3ODUxIDcuNUwxMC40NDYzIDUuNzMyMjNMOS4yNjc3NyA0LjU1MzcyTDcuNSA2LjMyMTQ5TDUuNzMyMjMgNC41NTM3MloiIGZpbGw9IiMyOTZDRjIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 32153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMzczMjUgNDRMMTUgMjkuNTIxNlYzNVYzNkgxNkgzNkgzN1YzNVYxOFYxN0gzNkgzMC4yMjY4TDQ0IDEuNTA1Mkw1Ny43NzMyIDE3SDUySDUxVjE4VjM1VjM2SDUySDcySDczVjM1VjI5LjUyMTZMODYuNjI2NyA0NEw3MyA1OC40Nzg0VjUzVjUySDcySDUySDUxVjUzVjcwVjcxSDUySDU3Ljc3MzJMNDQgODYuNDk0OEwzMC4yMjY4IDcxSDM2SDM3VjcwVjUzVjUySDM2SDE2SDE1VjUzVjU4LjQ3ODRMMS4zNzMyNSA0NFoiIGZpbGw9ImJsYWNrIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 54106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMiA2LjA1MTE2TDE4IDJIMTZIOEgyVjIySDZIMThIMjJWNi4wNTExNlpNMTggMjBIMjBWNi44NzNMMTcuMTY0IDRIMTZWOEg4VjRINFYyMEg2VjEySDE4VjIwWk0xNiAyMFYxNEg4VjIwSDE2Wk0xMCA0SDE0VjZIMTBWNFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 81469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01MCAzNy41VjBINDMuNzVWMzcuNUM0My43NSA0MC45NTE4IDQwLjk1MTggNDMuNzUgMzcuNSA0My43NUgwVjUwSDM3LjVDNDQuNDAzNiA1MCA1MCA0NC40MDM2IDUwIDM3LjVaIiBmaWxsPSIjQURBREFEIi8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 94754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI1IiB2aWV3Qm94PSIwIDAgMjQgMjUiPgogICAgPHBhdGggZmlsbD0iIzc1NzU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTkgNkwxNy43NCA5LjIxNSAxNi4zOCAxMC43MzcgMTMuNSAxMy45ODIgOS41IDkuOTc2IDIgMTcuNDk4IDMuNSAxOSA5LjUgMTIuOTgxIDEzLjUgMTYuOTg3IDE3LjU1IDEyLjQzIDE4Ljk2IDEwLjgzNyAyMiA3LjQxMnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjUxKSI+PC9wYXRoPgo8L3N2Zz4=");

/***/ }),

/***/ 43810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtYW5hbHlzaXM8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTMyLjAwMDAwMCwgLTE3MDQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkYXRhLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDE1NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtYW5hbHlzaXMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg5Mi4wMDAwMDAsIDEyNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMi4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAsMCBMMjAsMjAgTDAsMjAgTDAsMCBMMjAsMCBaIE00Ljk3MTczODAyLDkuNDc4NjQwMDcgTDIsMTEuOTY5IEwyLDE4IEwxOCwxOCBMMTgsMTAuMjU2IEwxNS45NTcyOTA3LDEyLjAzNzQzMTEgQzE1Ljk3NTUzNDcsMTIuMTM0OTUyOCAxNS45ODgxMTY3LDEyLjIzNDQ2ODYgMTUuOTk0NjgyMywxMi4zMzU2MjQzIEwxNiwxMi41IEMxNiwxMy44ODA3MTE5IDE0Ljg4MDcxMTksMTUgMTMuNSwxNSBDMTIuMTE5Mjg4MSwxNSAxMSwxMy44ODA3MTE5IDExLDEyLjUgQzExLDEyLjI3Nzk4ODggMTEuMDI4OTM5MSwxMi4wNjI3MzY4IDExLjA4MzI1MDksMTEuODU3ODEwMyBMNy45NzA1OTcyMyw5LjUyMTkzNSBDNy41NTc5MTc1NSw5LjgyMjYwMjA1IDcuMDQ5Njc1NTMsMTAgNi41LDEwIEM1LjkyNDQzNzEzLDEwIDUuMzk0MzAyMzUsOS44MDU0OTkyNCA0Ljk3MTczODAyLDkuNDc4NjQwMDcgWiBNMTMuNSwxMS41IEMxMi45NDc3MTUzLDExLjUgMTIuNSwxMS45NDc3MTUzIDEyLjUsMTIuNSBDMTIuNSwxMy4wNTIyODQ3IDEyLjk0NzcxNTMsMTMuNSAxMy41LDEzLjUgQzE0LjA1MjI4NDcsMTMuNSAxNC41LDEzLjA1MjI4NDcgMTQuNSwxMi41IEMxNC41LDExLjk0NzcxNTMgMTQuMDUyMjg0NywxMS41IDEzLjUsMTEuNSBaIE0xOCwyIEwyLDIgTDIsMTAuMDEyIEw0LjExMTUyNTkxLDguMjQwNjIzMzIgQzQuMDU0NTYzNjksOC4wNTY3MTc3MSA0LjAxODI1NzEzLDcuODYzNzMxMzYgNC4wMDUzMTc2OCw3LjY2NDM3NTY5IEw0LDcuNSBDNCw2LjExOTI4ODEzIDUuMTE5Mjg4MTMsNSA2LjUsNSBDNy44ODA3MTE4Nyw1IDksNi4xMTkyODgxMyA5LDcuNSBDOSw3Ljc4NTUzNDk3IDguOTUyMTMxLDguMDU5ODg5NTQgOC44NjM5ODAyOSw4LjMxNTQ3NjQgTDExLjg4OTA1NDgsMTAuNTg4MTYwMSBDMTIuMzI0MTQ0MywxMC4yMjExNzA5IDEyLjg4NjI0MzYsMTAgMTMuNSwxMCBDMTQuMTY3ODA4NSwxMCAxNC43NzQ0NjA1LDEwLjI2MTg0MjIgMTUuMjIyODkwNCwxMC42ODg0NjExIEwxOCw4LjI2NiBMMTgsMiBaIE02LjUsNi41IEM1Ljk0NzcxNTI1LDYuNSA1LjUsNi45NDc3MTUyNSA1LjUsNy41IEM1LjUsOC4wNTIyODQ3NSA1Ljk0NzcxNTI1LDguNSA2LjUsOC41IEM3LjA1MjI4NDc1LDguNSA3LjUsOC4wNTIyODQ3NSA3LjUsNy41IEM3LjUsNi45NDc3MTUyNSA3LjA1MjI4NDc1LDYuNSA2LjUsNi41IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 26443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNnB4O2hlaWdodDogMjZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZXZlbnQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjM5MS4wMDAwMDApIiBmaWxsPSIjNzk3OTc5Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZXZlbnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsMTkgTDEzLDE5IEMxMywyMC42NTY4NTQyIDExLjY1Njg1NDIsMjIgMTAsMjIgQzguNDAyMzE5MTIsMjIgNy4wOTYzMzkxMiwyMC43NTEwOCA3LjAwNTA5MjY5LDE5LjE3NjI3MjggTDcsMTkgTDEzLDE5IFogTTEwLDAgQzExLjEwNDU2OTUsMCAxMiwwLjg5NTQzMDUgMTIsMiBDMTIsMi4wOTY5NzY1MyAxMS45OTMwOTc5LDIuMTkyMzQwOTkgMTEuOTc5NzU4MiwyLjI4NTYyODk1IEMxNC44ODE4MDcyLDMuMTM4MTQ1MzcgMTcsNS44MjE3MDc0NyAxNyw5IEwxNywxNSBMMTksMTUgQzE5LjU1MjI4NDcsMTUgMjAsMTUuNDQ3NzE1MyAyMCwxNiBDMjAsMTYuNTUyMjg0NyAxOS41NTIyODQ3LDE3IDE5LDE3IEwxLDE3IEMwLjQ0NzcxNTI1LDE3IDYuNzYzNTM3NTFlLTE3LDE2LjU1MjI4NDcgMCwxNiBDLTYuNzYzNTM3NTFlLTE3LDE1LjQ0NzcxNTMgMC40NDc3MTUyNSwxNSAxLDE1IEwzLDE1IEwzLDkgTDMuMDA0MDU5MDIsOC43NTkzNTAyNSBDMy4xMDc4NTc5NSw1LjY4Njg3MzI3IDUuMTkxNzI1NDIsMy4xMTY1MDAwNCA4LjAxOTkwNDkxLDIuMjgzOTg3MDYgQzguMDA2OTAyMDYsMi4xOTIzNDA5OSA4LDIuMDk2OTc2NTMgOCwyIEM4LDAuODk1NDMwNSA4Ljg5NTQzMDUsMCAxMCwwIFogTTEwLDQgQzcuMzAyODE1OCw0IDUuMDkzNjkxMTksNi4xMzk5ODcwNyA1LjAwMzc3NDU5LDguNzkzMDc5MjggTDUsOSBMNSwxNSBMMTUsMTUgTDE1LDkgQzE1LDYuMjM4NTc2MjUgMTIuNzYxNDIzNyw0IDEwLDQgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 76166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGF1c2U8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDUyLjAwMDAwMCwgLTc4Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCA3MzcuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGF1c2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMywwIEwzLDE0IEwwLDE0IEwwLDAgTDMsMCBaIE0xMCwwIEwxMCwxNCBMNywxNCBMNywwIEwxMCwwIFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 41486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbGl2ZS10aW1lPC90aXRsZT4gLS0+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2My4wMDAwMDAsIC0yMjQyLjAwMDAwMCkiIGZpbGw9IiMyOGE5MmMiPgogICAgICAgICAgICA8ZyBpZD0idGltZS1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDMuMDAwMDAwLCAyMTk3LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWxpdmUtdGltZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjIwLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMCwwIEMxNS41MjI4NDc1LDAgMjAsNC40NzcxNTI1IDIwLDEwIEMyMCwxNS41MjI4NDc1IDE1LjUyMjg0NzUsMjAgMTAsMjAgQzQuNDc3MTUyNSwyMCAwLDE1LjUyMjg0NzUgMCwxMCBDMCw0LjQ3NzE1MjUgNC40NzcxNTI1LDAgMTAsMCBaIE0xMCwyIEM1LjU4MTcyMiwyIDIsNS41ODE3MjIgMiwxMCBDMiwxNC40MTgyNzggNS41ODE3MjIsMTggMTAsMTggQzE0LjQxODI3OCwxOCAxOCwxNC40MTgyNzggMTgsMTAgQzE4LDUuNTgxNzIyIDE0LjQxODI3OCwyIDEwLDIgWiBNOCw2IEwxNCwxMCBMOCwxNCBMOCw2IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 5005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcy1jbG9zZTwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MzQuMDAwMDAwLCAtMTAxMy4wMDAwMDApIiBmaWxsPSIjZDUwMDAwIj4KICAgICAgICAgICAgPGcgaWQ9InN1Z2dlc3RlZC1pY29ucy1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDk2Ni4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkyLjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMyw0IEwxMi45OTksMTEgTDIwLDExIEwyMCwxMyBMMTIuOTk5LDEzIEwxMywyMCBMMTEsMjAgTDEwLjk5OSwxMyBMNCwxMyBMNCwxMSBMMTAuOTk5LDExIEwxMSw0IEwxMyw0IFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ 80561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 11302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/speedmeter-ca3c8c20cd8eb551279a5633c2df3448.png");

/***/ }),

/***/ 97210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtdXA8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQ4LjAwMDAwMCwgLTE2NC4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy11cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTA3LjMwMDAwMCwgNDQuNzAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wMDAwMDAsIDcuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTUuNDE0MjEzNTYsMTMuNDM1MDI4OCBMNCwxMi4wMjA4MTUzIEwxMS4wNzEsNC45NDk0NjYwOSBMNCwtMi4xMjEzMjAzNCBMNS40MTQyMTM1NiwtMy41MzU1MzM5MSBMMTMuODk5NDk0OSw0Ljk0OTc0NzQ3IEw1LjQxNDIxMzU2LDEzLjQzNTAyODggWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC45NDk3NDcsIDQuOTQ5NzQ3KSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC04Ljk0OTc0NywgLTQuOTQ5NzQ3KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ })

}]);