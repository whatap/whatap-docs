"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[41921],{

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

/***/ 31856:
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
    id: 'table-size',
    title: '테이블 사이즈 증감',
    description: '테이블 및 인덱스의 사용량을 일별 수집해 기간에 따른 전체 및 테이블별 사용량 증감 정보를 제공합니다.',
    tags: [
        'CUBRID',
        '데이터베이스',
        '통계',
        '테이블 사이즈 증감'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "cubrid/table-size",
    "id": "cubrid/table-size",
    "title": "테이블 사이즈 증감",
    "description": "테이블 및 인덱스의 사용량을 일별 수집해 기간에 따른 전체 및 테이블별 사용량 증감 정보를 제공합니다.",
    "source": "@site/docs/cubrid/table-size.mdx",
    "sourceDirName": "cubrid",
    "slug": "/cubrid/table-size",
    "permalink": "/whatap-docs/cubrid/table-size",
    "draft": false,
    "editUrl": "undefined/docs/cubrid/table-size.mdx",
    "tags": [
        {
            "label": "CUBRID",
            "permalink": "/whatap-docs/tags/cubrid"
        },
        {
            "label": "데이터베이스",
            "permalink": "/whatap-docs/tags/데이터베이스"
        },
        {
            "label": "통계",
            "permalink": "/whatap-docs/tags/통계"
        },
        {
            "label": "테이블 사이즈 증감",
            "permalink": "/whatap-docs/tags/테이블-사이즈-증감"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "table-size",
        "title": "테이블 사이즈 증감",
        "description": "테이블 및 인덱스의 사용량을 일별 수집해 기간에 따른 전체 및 테이블별 사용량 증감 정보를 제공합니다.",
        "tags": [
            "CUBRID",
            "데이터베이스",
            "통계",
            "테이블 사이즈 증감"
        ]
    },
    "sidebar": "cubridSidebar",
    "previous": {
        "title": "SQL 통계",
        "permalink": "/whatap-docs/cubrid/stat"
    },
    "next": {
        "title": "테이블스페이스 사이즈",
        "permalink": "/whatap-docs/cubrid/table-space-size"
    }
};
const assets = {};
const toc = [];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const ProdImg = makeShortcode("ProdImg");
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
    }, `통계/보고서`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `테이블 사이즈 증감`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(ProdImg, {
        img: "db-database-tablesize.png",
        alt: "테이블 사이즈 증감",
        mdxType: "ProdImg"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `테이블 및 인덱스의 사용량을 일별 수집해 기간에 따른 전체 및 테이블별 사용량 증감 정보를 제공합니다. 수집 기준은 에이전트 설정 파라미터의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `table_min_row`), `(기본값 1000건 이상), `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `tables_hour`), `(기본값 새벽 5시) 값을 따릅니다. 수집 기준을 변경하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `관리`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에이전트 설정`)), ` 메뉴로 이동하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `기준 날짜`)), `를 설정하세요. 오늘 날짜가 기본 설정됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `데이터를 비교할 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `비교 날짜`)), `를 설정하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `인스턴스`)), ` 목록에서 데이터베이스 설정값을 조회할 인스턴스를 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "검색 아이콘",
        src: (__webpack_require__(32793)/* ["default"] */ .Z),
        width: "35",
        height: "29"
    }), ` 버튼을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `테이블 증감 요약`)), ` 섹션에서는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `건 수`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `데이터`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `인덱스`)), ` 별 증감률과 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `전체`)), ` 증감률을 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `테이블별 용량 상세`)), ` 섹션에서는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `테이블 이름`)), `별로 상세 증감률을 확인할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em", {
        parentName: "strong"
    }, `에이전트 설정`)), ` 메뉴에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "agent-settings#agent-options"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `수집하려는 테이블에 대한 조회 권한이 필요합니다. 다음 명령어를 실행해 권한을 확보하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-sql"
    }, `
grant select on [DB_NAME].[TABLE_NAME] to whatap;
/* 또는 */
grant select on *.* to whatap;

`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `조회한 내용을 csv 형식의 파일로 다운받으려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "csv 다운로드 아이콘",
        src: (__webpack_require__(86670)/* ["default"] */ .Z),
        width: "49",
        height: "24"
    }), ` 버튼을 선택하세요.`)))));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 86670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA0OSAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC43NSAxMS4zOTM5VjYuNzVIMTEuMjVWMTEuMzkzOUg4LjkxNjY3TDEzIDE1LjQ5MTdMMTcuMDgzMyAxMS4zOTM5SDE0Ljc1Wk03Ljc1IDE2LjY2MjVWMTcuODMzM0gxOC4yNVYxNi42NjI1SDcuNzVWMTYuNjYyNVoiIGZpbGw9IiNBREFEQUQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi4zMSAxMS4wODlDMjYuMjkyOSAxMC43MzcgMjYuMjUyMyAxMC40NDc0IDI2LjE4ODEgMTAuMjJDMjYuMTIzOSA5Ljk5MjcxIDI2LjAzNjIgOS44MTMwNSAyNS45MjUgOS42ODEwNUMyNS44MTM4IDkuNTQ5MDUgMjUuNjgzMyA5LjQ1OTIyIDI1LjUzMzYgOS40MTE1NUMyNS4zODM5IDkuMzYzODggMjUuMjE0OSA5LjM0MDA1IDI1LjAyNjcgOS4zNDAwNUMyNC44MDQyIDkuMzQwMDUgMjQuNTk0NiA5LjM4NTg4IDI0LjM5NzggOS40Nzc1NUMyNC4yMDExIDkuNTY5MjIgMjQuMDMyMSA5LjcxNTg4IDIzLjg5MDkgOS45MTc1NUMyMy43NDk4IDEwLjExOTIgMjMuNjM4NSAxMC4zODUgMjMuNTU3MyAxMC43MTVDMjMuNDc2IDExLjA0NTEgMjMuNDM1MyAxMS40NDQ3IDIzLjQzNTMgMTEuOTE0QzIzLjQzNTMgMTIuMzkwNyAyMy40NzYgMTIuNzkyMiAyMy41NTczIDEzLjExODVDMjMuNjM4NSAxMy40NDQ5IDIzLjc0OTggMTMuNzA4OSAyMy44OTA5IDEzLjkxMDVDMjQuMDMyMSAxNC4xMTIyIDI0LjIwMTEgMTQuMjU4OSAyNC4zOTc4IDE0LjM1MDVDMjQuNTk0NiAxNC40NDIyIDI0LjgwNDIgMTQuNDg4IDI1LjAyNjcgMTQuNDg4QzI1LjI4MzMgMTQuNDg4IDI1LjQ5MDggMTQuNDQwNCAyNS42NDkxIDE0LjM0NUMyNS44MDc0IDE0LjI0OTcgMjUuOTMzNiAxNC4xMjMyIDI2LjAyNzcgMTMuOTY1NUMyNi4xMjE4IDEzLjgwNzkgMjYuMTg4MSAxMy42MjgyIDI2LjIyNjYgMTMuNDI2NUMyNi4yNjUxIDEzLjIyNDkgMjYuMjkyOSAxMy4wMTc3IDI2LjMxIDEyLjgwNUgyOC4zMTJDMjguMzEyIDEzLjI1OTcgMjguMjM3MSAxMy42ODE0IDI4LjA4NzQgMTQuMDdDMjcuOTM3NyAxNC40NTg3IDI3LjcxNzQgMTQuNzk5NyAyNy40MjY1IDE1LjA5M0MyNy4xMzU2IDE1LjM4NjQgMjYuNzc2MyAxNS42MTU1IDI2LjM0ODUgMTUuNzgwNUMyNS45MjA3IDE1Ljk0NTUgMjUuNDI4OCAxNi4wMjggMjQuODcyNyAxNi4wMjhDMjQuMzUwOCAxNi4wMjggMjMuODc4MSAxNS45NDM3IDIzLjQ1NDYgMTUuNzc1QzIzLjAzMTEgMTUuNjA2NCAyMi42Njk2IDE1LjM1MTYgMjIuMzcwMiAxNS4wMTA1QzIyLjA3MDcgMTQuNjY5NSAyMS44Mzk3IDE0LjI0MjQgMjEuNjc3MiAxMy43MjlDMjEuNTE0NiAxMy4yMTU3IDIxLjQzMzMgMTIuNjEwNyAyMS40MzMzIDExLjkxNEMyMS40MzMzIDExLjIyNDcgMjEuNTE0NiAxMC42MjE2IDIxLjY3NzIgMTAuMTA0NUMyMS44Mzk3IDkuNTg3NTUgMjIuMDcwNyA5LjE1ODU1IDIyLjM3MDIgOC44MTc1NUMyMi42Njk2IDguNDc2NTUgMjMuMDMxMSA4LjIyMTcyIDIzLjQ1NDYgOC4wNTMwNUMyMy44NzgxIDcuODg0MzggMjQuMzUwOCA3LjgwMDA1IDI0Ljg3MjcgNy44MDAwNUMyNS40NDU5IDcuODAwMDUgMjUuOTQ4NSA3Ljg4NDM4IDI2LjM4MDYgOC4wNTMwNUMyNi44MTI2IDguMjIxNzIgMjcuMTc0MSA4LjQ1NDU1IDI3LjQ2NSA4Ljc1MTU1QzI3Ljc1NTkgOS4wNDg1NSAyNy45NzE5IDkuMzk2ODggMjguMTEzMSA5Ljc5NjU1QzI4LjI1NDMgMTAuMTk2MiAyOC4zMjA2IDEwLjYyNyAyOC4zMTIgMTEuMDg5SDI2LjMxWk0zMC4zODI0IDEzLjM4OEMzMC4zOTk2IDEzLjc4NDEgMzAuNDk3OSAxNC4wNzc0IDMwLjY3NzYgMTQuMjY4QzMwLjg1NzMgMTQuNDU4NyAzMS4xNjEgMTQuNTU0IDMxLjU4ODggMTQuNTU0QzMxLjk0ODEgMTQuNTU0IDMyLjIyMTkgMTQuNDY3OSAzMi40MTAxIDE0LjI5NTVDMzIuNTk4MyAxNC4xMjMyIDMyLjY5MjQgMTMuODk0MSAzMi42OTI0IDEzLjYwOEMzMi42OTI0IDEzLjM4OCAzMi41OTE5IDEzLjIxMiAzMi4zOTA5IDEzLjA4QzMyLjE4OTggMTIuOTQ4IDMxLjkzNTMgMTIuODMyNSAzMS42MjczIDEyLjczMzVDMzEuMzE5MyAxMi42MzQ1IDMwLjk4OTkgMTIuNTMzNyAzMC42MzkxIDEyLjQzMUMzMC4yODgzIDEyLjMyODQgMjkuOTU4OSAxMi4xOTA5IDI5LjY1MDkgMTIuMDE4NUMyOS4zNDI5IDExLjg0NjIgMjkuMDg4NCAxMS42MjI2IDI4Ljg4NzQgMTEuMzQ3NUMyOC42ODYzIDExLjA3MjUgMjguNTg1OCAxMC43MTE0IDI4LjU4NTggMTAuMjY0QzI4LjU4NTggOS44OTAwNSAyOC42NTIxIDkuNTUwODggMjguNzg0NyA5LjI0NjU1QzI4LjkxNzMgOC45NDIyMSAyOS4xMDk4IDguNjgxODggMjkuMzYyMiA4LjQ2NTU1QzI5LjYxNDYgOC4yNDkyMSAyOS45MjA0IDguMDg0MjIgMzAuMjc5OCA3Ljk3MDU1QzMwLjYzOTEgNy44NTY4OCAzMS4wNDU1IDcuODAwMDUgMzEuNDk4OSA3LjgwMDA1QzMyLjM4MDIgNy44MDAwNSAzMy4wNjY3IDcuOTgxNTUgMzMuNTU4NyA4LjM0NDU1QzM0LjA1MDYgOC43MDc1NSAzNC4zNjkzIDkuMjgxMzggMzQuNTE0OCAxMC4wNjZIMzIuNjE1NEMzMi41OTgzIDkuNzk0NzEgMzIuNDk5OSA5LjU4MDIyIDMyLjMyMDMgOS40MjI1NUMzMi4xNDA2IDkuMjY0ODggMzEuODkyNSA5LjE4NjA1IDMxLjU3NTkgOS4xODYwNUMzMS4yNjc5IDkuMTg2MDUgMzEuMDI2MyA5LjI3MDM4IDMwLjg1MDkgOS40MzkwNUMzMC42NzU1IDkuNjA3NzIgMzAuNTg3OCA5LjgxMzA1IDMwLjU4NzggMTAuMDU1QzMwLjU4NzggMTAuMjg5NyAzMC42ODgzIDEwLjQ3MTIgMzAuODg5NCAxMC41OTk1QzMxLjA5MDQgMTAuNzI3OSAzMS4zNDQ5IDEwLjg0MTUgMzEuNjUyOSAxMC45NDA1QzMxLjk2MDkgMTEuMDM5NSAzMi4yOTAzIDExLjE0MDQgMzIuNjQxMSAxMS4yNDNDMzIuOTkxOSAxMS4zNDU3IDMzLjMyMTMgMTEuNDkwNSAzMy42MjkzIDExLjY3NzVDMzMuOTM3MyAxMS44NjQ1IDM0LjE5MTggMTIuMTEyIDM0LjM5MjkgMTIuNDJDMzQuNTkzOSAxMi43MjgxIDM0LjY5NDQgMTMuMTMxNCAzNC42OTQ0IDEzLjYzQzM0LjY5NDQgMTQuMDA0MSAzNC42MTUzIDE0LjMzNzcgMzQuNDU3IDE0LjYzMUMzNC4yOTg4IDE0LjkyNDQgMzQuMDgwNiAxNS4xNzU1IDMzLjgwMjUgMTUuMzg0NUMzMy41MjQ1IDE1LjU5MzUgMzMuMTkyOSAxNS43NTMgMzIuODA3OSAxNS44NjNDMzIuNDIyOSAxNS45NzMgMzIuMDAzNyAxNi4wMjggMzEuNTUwMyAxNi4wMjhDMzAuNDYzNyAxNi4wMjggMjkuNjcyMyAxNS43OTUyIDI5LjE3NjEgMTUuMzI5NUMyOC42Nzk5IDE0Ljg2MzkgMjguNDMxOCAxNC4yMTY3IDI4LjQzMTggMTMuMzg4SDMwLjM4MjRaTTM4LjcwMjcgMTUuODk2TDQxLjI5NTEgNy45MzIwNUgzOS40NzI3TDM3Ljg4MTQgMTMuNDFIMzcuODU1N0wzNi4yOTAxIDcuOTMyMDVIMzQuMzkwN0wzNi45ODMxIDE1Ljg5NkgzOC43MDI3WiIgZmlsbD0iI0FEQURBRCIvPgo8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQ4IiBoZWlnaHQ9IjIzIiByeD0iMy41IiBzdHJva2U9IiM5Nzk3OTciLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 32793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAdCAYAAAAgqdWEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NGYxMDZkYi1mOWQ1LTRkNWItYjg1Mi01N2E4OWQ4N2NiODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM0RjAyQzM1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM0RjAyQzI1MTBFMTFFRDk1NTBFNTZGQjUwMkEyQzYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzM1ZWVmNC1mYjZhLTRkNzctOWI5MS0yZDViNTU2OTE4YTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTRmMTA2ZGItZjlkNS00ZDViLWI4NTItNTdhODlkODdjYjgwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xFhE8QAAA2NJREFUeNrMl0tIVGEUx//fd2fm3nGaZHwkA+KjFylBWG5amG10GRGW9AKjRVFRCSJEQUPRokioNulCAhFsV2LiKogIwl7SoiyVsdJ8Vb5G5z3f1/luumk12lynw2WGy1zm/L7z+J9zmZRy4u1gIs/XEV78OC5g0xjostwSEojTR6mXw3fYcO3aok2y15/j83suL7rBgeI8bj4opfUwbOnAw5MCoOv5DVdAG8luvPR1RuqbCUSsAcTfluNmmA5J+MdFlA8Q2cZcjrhAWkz5Vf4VB3dQgUik15R/xcFV7mSaaZR/xcH/9U9SeRDbarpAUJ5HpgVkhO6X4pyZzZDjYogl1ghG04DpRYm5XxKHKm3YV26HywkMjAnc64nBPyxQULh6eUgahpOPnwGJBYrGk6sZ2LvDhukFIEhtWbWToa5Kx/nmEDpexFDs5dZGJhKTCISBRw1OE+Ts/RAePIubVWfYgYcXDbRecELjEh29CRR4Vt6lSR9hbFbi+G4NVWU2HL0dRHtXFN4sIN8D2DWJGl8IbwYTuFLrhJ2OGFuFbvGkW4+iUlvhwMB3gc6XceQVa9BtzJxluW6OGNVO0+MICjYwVJdwTAWkNTBqqAkHQyZ1y3xQQvw1TNUYcdDvs4t/ALLWUVfFLYqMjZ5iVDOfRhIo26TByABmCIovAdmpyySlsWKbRrUFvKKu8mRYBKPMlcnQ1B2lAgVaTuoI07rhnxCYmJMY9gtkehnqDxjo7o2i/wvdZzDruimXQt9PJ/a1h+E7ZmB7iw3NPREMEFRlqYb6/QZ0BzA+Q3pE7R+MSLh0tqJNYEWil0/6cas7ZgLcrHPi7imnOXVVeNueRjFFqWo8qMPjAk7fCUN4AbfBTMVOKYzqKFU7RTkMne/i6Hq/gHJS2zxKX983gbFRWgGoXlQdNdTocFOxn2kNmxEy7Cz1kVmW+CLaP9QM+kAR6hsF1uu0JRJYiIr8WlsEBqXrRLWOwuwohmhPUaKY1NwrOReYp293qlbJWFzS5gZku1R6JBykRUnOqQBHCk05tZNzDwlgMCrNhUlaVcBJAxGEqT1W6cxaGF9e+dJpy6svj9LgSTOL6V9x8K30vuT/IUwNSYcpv8q/4uDXjxj08gIM0ZxR4VqrlC37Un6Vf8XB/qd37d8CDAAmlWmEg71//QAAAABJRU5ErkJggg==");

/***/ })

}]);