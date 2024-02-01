"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[1148],{

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

/***/ 68776:
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
    id: 'performance-summary',
    title: '퍼포먼스 요약',
    description: '퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.',
    tags: [
        '쿠버네티스',
        '쿠버네티스 모니터링',
        '리소스',
        '퍼포먼스'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "kubernetes/performance-summary",
    "id": "kubernetes/performance-summary",
    "title": "퍼포먼스 요약",
    "description": "퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.",
    "source": "@site/docs/kubernetes/performance-summary.mdx",
    "sourceDirName": "kubernetes",
    "slug": "/kubernetes/performance-summary",
    "permalink": "/whatap-docs/kubernetes/performance-summary",
    "draft": false,
    "editUrl": "undefined/docs/kubernetes/performance-summary.mdx",
    "tags": [
        {
            "label": "쿠버네티스",
            "permalink": "/whatap-docs/tags/쿠버네티스"
        },
        {
            "label": "쿠버네티스 모니터링",
            "permalink": "/whatap-docs/tags/쿠버네티스-모니터링"
        },
        {
            "label": "리소스",
            "permalink": "/whatap-docs/tags/리소스"
        },
        {
            "label": "퍼포먼스",
            "permalink": "/whatap-docs/tags/퍼포먼스"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "performance-summary",
        "title": "퍼포먼스 요약",
        "description": "퍼포먼스 요약 메뉴를 통해 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.",
        "tags": [
            "쿠버네티스",
            "쿠버네티스 모니터링",
            "리소스",
            "퍼포먼스"
        ]
    },
    "sidebar": "kubeSidebar",
    "previous": {
        "title": "Call Information",
        "permalink": "/whatap-docs/kubernetes/container-map-call-information"
    },
    "next": {
        "title": "클러스터 요약",
        "permalink": "/whatap-docs/kubernetes/cluster-summary"
    }
};
const assets = {};
const toc = [];
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `홈 화면 > 프로젝트 선택 > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `리소스`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `퍼포먼스 요약`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `최근 시간별 차트를 통하여 컨테이너/Pod 수량, 노드 수량 등 쿠버네티스 주요 지표들에 어떤 변화가 있었는지 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "k8s-performance-summary.png",
        desc: "퍼포먼스 요약",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `위젯별 오른쪽 상단에 위치한 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(13092)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `더보기`)), ` 아이콘을 선택하면 다음과 같이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "바로가기 아이콘",
        src: (__webpack_require__(9620)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `바로 가기`)), ` 옵션을 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "바로 가기",
        src: (__webpack_require__(23780)/* ["default"] */ .c),
        width: "177",
        height: "103"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `노드 수량 위젯 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(13092)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `더보기`)), ` 아이콘 > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "바로가기 아이콘",
        src: (__webpack_require__(9620)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `바로 가기`)), ` 아이콘을 차례로 선택하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `리소스`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `노드 목록`)), ` 메뉴로 이동합니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `위젯으로 제공하는 노드 정보는 다음과 같습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `최근 30분 차트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Node CPU (%)`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Node Memory (%)`)), ` 등`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `노드 CPU 위젯과 메모리 위젯 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "더보기 아이콘",
        src: (__webpack_require__(13092)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `더보기`)), ` 아이콘 > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "바로가기 아이콘",
        src: (__webpack_require__(9620)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `바로 가기`)), ` 아이콘을 차례로 선택하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `분석`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `메트릭스 차트`)), ` 메뉴로 이동합니다. 해당 메뉴를 사용하면 더욱 자세한 조건을 통해 차트를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `위젯으로 제공하는 컨테이너 정보는 다음과 같습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `최근 10분 차트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Container Status`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Container CPU (%)`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Container Memory (%)`)), ` 등`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `위젯으로 제공하는 애플리케이션 정보는 다음과 같습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `최근 10분 차트`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Active TX`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `TPS`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Response Time`)), ` 등`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `애플리케이션 정보는 애플리케이션 에이전트 설치 대상이 존재할 때 표시합니다.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 13092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtbW9yZS12ZXJ0aWNhbDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMjk1MS4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtbW9yZS12ZXJ0aWNhbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgNjA1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMiwxNCBDMy4xMDQ1Njk1LDE0IDQsMTQuODk1NDMwNSA0LDE2IEM0LDE3LjEwNDU2OTUgMy4xMDQ1Njk1LDE4IDIsMTggQzAuODk1NDMwNSwxOCAwLDE3LjEwNDU2OTUgMCwxNiBDMCwxNC44OTU0MzA1IDAuODk1NDMwNSwxNCAyLDE0IFogTTIsNyBDMy4xMDQ1Njk1LDcgNCw3Ljg5NTQzMDUgNCw5IEM0LDEwLjEwNDU2OTUgMy4xMDQ1Njk1LDExIDIsMTEgQzAuODk1NDMwNSwxMSAwLDEwLjEwNDU2OTUgMCw5IEMwLDcuODk1NDMwNSAwLjg5NTQzMDUsNyAyLDcgWiBNMiwwIEMzLjEwNDU2OTUsMCA0LDAuODk1NDMwNSA0LDIgQzQsMy4xMDQ1Njk1IDMuMTA0NTY5NSw0IDIsNCBDMC44OTU0MzA1LDQgMCwzLjEwNDU2OTUgMCwyIEMwLDAuODk1NDMwNSAwLjg5NTQzMDUsMCAyLDAgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 9620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICA8IS0tIDx0aXRsZT5pYy1saW5rPC90aXRsZT4gLS0+CiAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Mi4wMDAwMDAsIC0yOTUxLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgPGcgaWQ9ImljLWxpbmsiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQxMi4wMDAwMDAsIDYwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikljb24iPgogICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTYsOC45IEwxMSw4LjkgTDExLDcgTDYsNyBDMy4yNCw3IDEsOS4yNCAxLDEyIEMxLDE0Ljc2IDMuMjQsMTcgNiwxNyBMMTEsMTcgTDExLDE1LjEgTDYsMTUuMSBDNC4yOSwxNS4xIDIuOSwxMy43MSAyLjksMTIgQzIuOSwxMC4yOSA0LjI5LDguOSA2LDguOSBaIE03LDEzIEwxNywxMyBMMTcsMTEgTDcsMTEgTDcsMTMgTDcsMTMgWiBNMTMsNyBMMTMsOC45IEwxOCw4LjkgQzE5LjcxLDguOSAyMS4xLDEwLjI5IDIxLjEsMTIgQzIxLjEsMTMuNzEgMTkuNzEsMTUuMSAxOCwxNS4xIEwxMywxNS4xIEwxMywxNyBMMTgsMTcgQzIwLjc2LDE3IDIzLDE0Ljc2IDIzLDEyIEMyMyw5LjI0IDIwLjc2LDcgMTgsNyBMMTMsNyBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4wMDAwMDAsIDEyLjAwMDAwMCkgcm90YXRlKC00NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgIDwvZz4KICAgICAgICAgIDwvZz4KICAgICAgPC9nPgogIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 23780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ })

}]);