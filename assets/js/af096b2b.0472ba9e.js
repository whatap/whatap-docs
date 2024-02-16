"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[63079],{

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

/***/ 75507:
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
    id: 'preview-1_105_x',
    title: 'Preview 1.105.X',
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/preview/preview-1_105_x",
    "id": "release-notes/preview/preview-1_105_x",
    "title": "Preview 1.105.X",
    "description": "https://preview.whatap.io에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다.",
    "source": "@site/docs/release-notes/preview/preview-1.105.x.mdx",
    "sourceDirName": "release-notes/preview",
    "slug": "/release-notes/preview/preview-1_105_x",
    "permalink": "/whatap-docs/release-notes/preview/preview-1_105_x",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/preview/preview-1.105.x.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "preview-1_105_x",
        "title": "Preview 1.105.X",
        "toc_max_heading_level": 2
    },
    "sidebar": "previewSidebar",
    "previous": {
        "title": "Preview 1.107.X",
        "permalink": "/whatap-docs/release-notes/preview/preview-1_107_x"
    },
    "next": {
        "title": "Preview 1.103.X",
        "permalink": "/whatap-docs/release-notes/preview/preview-1_103_x"
    }
};
const assets = {};
const toc = [
    {
        value: 'Preview 1.105.21',
        id: 'preview-110521',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통',
        level: 3
    },
    {
        value: '경고 알림',
        id: '경고-알림',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application',
        level: 3
    },
    {
        value: '.NET',
        id: 'net',
        level: 4
    },
    {
        value: '<code>Container</code>',
        id: 'container',
        level: 3
    },
    {
        value: 'Preview 1.105.20',
        id: 'preview-110520',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-1',
        level: 3
    },
    {
        value: '보고서',
        id: '보고서',
        level: 4
    },
    {
        value: '이용내역',
        id: '이용내역',
        level: 4
    },
    {
        value: '<code>Server</code>',
        id: 'server',
        level: 3
    },
    {
        value: 'Preview 1.105.19',
        id: 'preview-110519',
        level: 2
    },
    {
        value: '<code>Database</code>',
        id: 'database',
        level: 3
    },
    {
        value: 'V2 공통',
        id: 'v2-공통',
        level: 4
    },
    {
        value: 'PostgreSQL',
        id: 'postgresql',
        level: 4
    },
    {
        value: 'MySQL',
        id: 'mysql',
        level: 4
    },
    {
        value: 'Preview 1.105.18',
        id: 'preview-110518',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-2',
        level: 3
    },
    {
        value: 'Preview 1.105.17',
        id: 'preview-110517',
        level: 2
    },
    {
        value: '<code>Application</code>',
        id: 'application-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-1',
        level: 3
    },
    {
        value: 'Preview 1.105.16',
        id: 'preview-110516',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-3',
        level: 3
    },
    {
        value: 'Flex 보드',
        id: 'flex-보드',
        level: 4
    },
    {
        value: '이용 내역',
        id: '이용-내역',
        level: 4
    },
    {
        value: '보고서',
        id: '보고서-1',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-2',
        level: 3
    },
    {
        value: 'GO, PHP',
        id: 'go-php',
        level: 4
    },
    {
        value: '대시보드',
        id: '대시보드',
        level: 4
    },
    {
        value: '분석',
        id: '분석',
        level: 4
    },
    {
        value: '<code>Browser</code>',
        id: 'browser',
        level: 3
    },
    {
        value: 'Preview 1.105.15',
        id: 'preview-110515',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-2',
        level: 3
    },
    {
        value: 'Preview 1.105.14',
        id: 'preview-110514',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-4',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-3',
        level: 3
    },
    {
        value: '대시보드',
        id: '대시보드-1',
        level: 4
    },
    {
        value: '분석',
        id: '분석-1',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-3',
        level: 3
    },
    {
        value: '대시보드',
        id: '대시보드-2',
        level: 4
    },
    {
        value: 'Preview 1.105.13',
        id: 'preview-110513',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-5',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-4',
        level: 3
    },
    {
        value: '<code>Browser</code>',
        id: 'browser-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-4',
        level: 3
    },
    {
        value: '<code>실험실</code>',
        id: '실험실',
        level: 3
    },
    {
        value: 'Preview 1.105.12',
        id: 'preview-110512',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-6',
        level: 3
    },
    {
        value: '경고 알림',
        id: '경고-알림-1',
        level: 4
    },
    {
        value: '대시보드',
        id: '대시보드-3',
        level: 4
    },
    {
        value: 'Flex 보드',
        id: 'flex-보드-1',
        level: 4
    },
    {
        value: 'Preview 1.105.11',
        id: 'preview-110511',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-7',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-1',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log',
        level: 3
    },
    {
        value: '<code>실험실</code>',
        id: '실험실-1',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-5',
        level: 3
    },
    {
        value: 'Preview 1.105.10',
        id: 'preview-110510',
        level: 2
    },
    {
        value: '<code>Server</code>',
        id: 'server-2',
        level: 3
    },
    {
        value: 'Preview 1.105.09',
        id: 'preview-110509',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-6',
        level: 3
    },
    {
        value: '<code>Log</code>',
        id: 'log-1',
        level: 3
    },
    {
        value: '로그 검색',
        id: '로그-검색',
        level: 4
    },
    {
        value: 'Preview 1.105.08',
        id: 'preview-110508',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-7',
        level: 3
    },
    {
        value: 'Preview 1.105.07',
        id: 'preview-110507',
        level: 2
    },
    {
        value: '<code>Server</code>',
        id: 'server-3',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-8',
        level: 3
    },
    {
        value: 'Preview 1.105.06',
        id: 'preview-110506',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-8',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-5',
        level: 3
    },
    {
        value: 'Preview 1.105.05',
        id: 'preview-110505',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-9',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-9',
        level: 3
    },
    {
        value: '<code>URL</code>',
        id: 'url',
        level: 3
    },
    {
        value: 'Preview 1.105.04',
        id: 'preview-110504',
        level: 2
    },
    {
        value: 'Preview 1.105.03',
        id: 'preview-110503',
        level: 2
    },
    {
        value: '<code>Container</code>',
        id: 'container-10',
        level: 3
    },
    {
        value: 'Preview 1.105.02',
        id: 'preview-110502',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-10',
        level: 3
    },
    {
        value: '대시보드',
        id: '대시보드-4',
        level: 4
    },
    {
        value: '관리',
        id: '관리',
        level: 4
    },
    {
        value: '<code>Log</code>',
        id: 'log-2',
        level: 3
    },
    {
        value: 'Preview 1.105.01',
        id: 'preview-110501',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-11',
        level: 3
    },
    {
        value: '대시보드',
        id: '대시보드-5',
        level: 4
    },
    {
        value: 'Flex 보드',
        id: 'flex-보드-2',
        level: 4
    },
    {
        value: '<code>Application</code>',
        id: 'application-6',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-4',
        level: 3
    },
    {
        value: 'Preview 1.105.00',
        id: 'preview-110500',
        level: 2
    },
    {
        value: '<code>공통</code>',
        id: '공통-12',
        level: 3
    },
    {
        value: '<code>Application</code>',
        id: 'application-7',
        level: 3
    },
    {
        value: '<code>Server</code>',
        id: 'server-5',
        level: 3
    },
    {
        value: '경고 알림',
        id: '경고-알림-2',
        level: 4
    },
    {
        value: '<code>Database</code>',
        id: 'database-2',
        level: 3
    },
    {
        value: '<code>Container</code>',
        id: 'container-11',
        level: 3
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const Status = makeShortcode("Status");
const UI = makeShortcode("UI");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("head", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("meta", {
        name: "robots",
        content: "noindex, nofollow"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://preview.whatap.io"
    }, `https://preview.whatap.io`), `에서 다음 추가한 신기능과 수정한 내용을 미리 경험할 수 있습니다. `)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110521"
    }, `Preview 1.105.21`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 24일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "경고-알림"
    }, `경고 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 수신 설정"), " 메뉴의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "사용자별 이벤트 수신 설정"), " 섹션에 접기/펼치기 기능 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "메트릭스 이벤트"), " 탭에서 이벤트 추가 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "관련 카테고리"), " 항목 제거")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "net"
    }, `.NET`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "New"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "스택"), " 메뉴 추가, ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Link, {
        to: "../../dotnet/analysis-apm",
        mdxType: "Link"
    }, "다음 문서"), "를 참조하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "리소스"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "노드 목록"), " 메뉴에서 표시할 컨테이너 정보가 없는 경우에도 로딩 중인것 처럼 보이는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Deprecate"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "메트릭스 이벤트"), " 탭에서 이벤트 추가 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "관련 프로젝트"), " 기능 폐기"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110520"
    }, `Preview 1.105.20`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 21일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "보고서"
    }, `보고서`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "보고서"), " 메뉴에서 타임아웃 발생 시 보고서 생성이 정상적으로 완료되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "보고서"), " 메뉴에서 보고서 생성 시 UI 로딩 표시 형식 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "이용내역"
    }, `이용내역`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 언어 설정이 영어일 때 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 소문자로도 국가 검색이 가능하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "메트릭스"), " 이벤트 탭에서 알림 규칙 테스트 차트에 id 대신 name 관련 데이터 표시되도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "서버 목록"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "서버 상세"), " 메뉴에서 시간 범위 조작 후 새로 고침 시 시간 초기화 버그 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110519"
    }, `Preview 1.105.19`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 21일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "database"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "v2-공통"
    }, `V2 공통`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 모니터링"), " 메뉴에서 액티브 세션 테이블 정렬 변경 상태 프리셋 저장 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 모니터링"), " 메뉴에서 데이터 갱신 시 정렬 해제 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 모니터링"), " 메뉴에서 액티브 세션 테이블 새창으로 보기 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Flex 보드"), " 메뉴에서 액티브 세션 테이블 위젯 정렬 변경 상태 저장 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 프로젝트 버전 선택 기능 제공 마감일자 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "PostgreSQL"), ": 2023년 9월 30일 → 2023년 10월 31일"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "MySQL"), ": 2023년 10월 30일 → 2023년 11월 30일"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "카운트 추이 비교"), " 메뉴에서 데이터 호출 및 로딩 속도 차이로 차트가 부자연스럽게 출력되는 현상 개선")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "postgresql"
    }, `PostgreSQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " V2 제품의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 모니터링"), " 메뉴 내 액티브 세션 테이블에서 세션 상세 정보에 Plan 조회 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "mysql"
    }, `MySQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " V2 제품의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 모니터링"), " 메뉴 내 액티브 세션 테이블의 초기 정렬 상태 설정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110518"
    }, `Preview 1.105.18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 20일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " 에이전트에서 throttle이 설정되어 API 요청 제한 시 안내 메시지 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 설치형 환경에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "프로젝트"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "그룹"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "조직"), " 멤버 초대 시 존재하지 않는 계정인 경우 안내 메시지 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110517"
    }, `Preview 1.105.17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 20일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "통계/보고서"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "통계"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션"), " 탭의 목록에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "T"), " 및 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "U"), " 버튼 선택 시 동작하지 않던 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "액티브 트랜잭션"), " 메뉴에서 테이블 내 느린 트랜잭션 및 매우 느린 트랜잭션 표시 색상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "컨테이너 맵"), " 메뉴에서 간헐적으로 화이트 아웃 발생하는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110516"
    }, `Preview 1.105.16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 18일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "flex-보드"
    }, `Flex 보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 화면의 너비가 작아지면서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "히트맵"), " 위젯의 폭이 좁아지면 버튼 레이아웃이 메뉴 밖으로 벗어나는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "이용-내역"
    }, `이용 내역`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 결제 정보를 등록할 때 '해외 계좌 이체 고객 등록' 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 결제 정보를 등록할 때 국가 선택에 따라 결제 진행 과정 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 결제 정보를 등록할 때 국내 '역발행 계좌 이체 등록' 미노출 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 프로모션 배너 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "결제 정보"), " 메뉴에서 '해외 카드 등록'의 placeholder를 로케일 언어에 맞게 표시되도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "청구 및 납부 내역"), " 메뉴에서 페이지 번호 개수 설정 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "보고서-1"
    }, `보고서`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 일간 애플리케이션 사용자 정의 보고서의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "방문자"), " 항목 제거"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "go-php"
    }, `GO, PHP`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션 대시보드"), " > 메모리 상세 창에서 다음의 내용을 수정합니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Heap 크기`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `시스템 메모리`)), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `Heap 사용량`), ` → `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `프로세스 메모리`)), `로 문구 변경`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `시스템 GC 버튼 제거`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션 대시보드"), " > 메모리 상세 창에서 다음의 내용을 수정합니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `이름 컬럼의 크기가 줄어들면 말줄임표와 함께 마우스 오버 시 툴팁이 활성화되도록 수정`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "상세"), " 버튼의 툴팁이 버튼 클릭 후에도 사라지지 않는 버그 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션 대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "히트맵"), " 위젯 드래그 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "히트맵 트랜잭션"), " > TX 트레이스 항목 선택 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "통계"), " 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 로그"), " 탭의 트랜잭션 로그가 미설정되었을 경우:", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `언어 설정이 일본어인 상태: 출력되는 안내 메시지의 줄바꿈 버그 수정`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `언어 설정이 한국어인 상태:  출력되는 안내 메시지의 스타일이 제대로 적용되도록 수정`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `출력되는 안내 메시지의 링크를 클릭할때 설정된 언어에 맞는 Docs 페이지로 이동하도록 수정`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "분석"
    }, `분석`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " MSA 분석 메뉴에서 데이터를 조회했을 때 결과가 없으면 '데이터 없음' 안내 메시지가 나오도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "browser"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Browser`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 브라우저 에이전트 스크립트의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "config"), " 옵션으로 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "proxyBaseUrl"), " 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110515"
    }, `Preview 1.105.15`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 18일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 클러스터 프로젝트일 때 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "퍼포먼스 요약"), " 메뉴의 지표별 그룹 타이틀 표기 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "sample",
        src: (__webpack_require__(39841)/* ["default"] */ .A),
        width: "1074",
        height: "429"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110514"
    }, `Preview 1.105.14`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 17일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Flex 보드"), " 메뉴에서 애플리케이션 모니터링 상품의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "app_user"), " 카테고리 내 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "logbits"), " 필드 사용 시 MXQL 생성 로직에서 예외 처리 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드-1"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 쿠버네티스 애플리케이션 프로젝트에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "레코드 요약"), " 탭 내용 중 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "onode"), "를 표기를 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 노드"), "로 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 통계 모달의 차트가 보이지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "SQL 요약"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "메소드 요약"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "HTTP Call 요약"), " 탭의 조회된 데이터가 없을 경우 안내 메시지 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "분석-1"
    }, `분석`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "멀티 트랜잭션 추적"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "MTID / CUSTID 조회"), " 입력란에 숫자 외 문자가 입력되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "database-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "PostgreSQL V2"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Mysql V2"), " 프로젝트에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "슬로우 쿼리"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "데이터베이스 사이즈"), " 메뉴의 영어, 일본어 안내 지원"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드-2"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "멀티 컨테이너 맵"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "네임스페이스"), " 메뉴로 이동할 수 없도록 수정", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "sample",
        src: (__webpack_require__(87424)/* ["default"] */ .A),
        width: "381",
        height: "157"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "컨테이너 맵"), " 메뉴의 상세 보기 패널에서 블록의 개수가 많은 경우 표기 방식 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "sample",
        src: (__webpack_require__(58525)/* ["default"] */ .A),
        width: "479",
        height: "362"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110513"
    }, `Preview 1.105.13`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 13일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 프로젝트 생성 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Node.js"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Altibase"), " 상품명 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 언어 설정이 일본어인 경우 사이드바의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "그룹 생성"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "프로젝트 생성"), " 버튼의 텍스트를 영문으로 출력하도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 맵"), " 메뉴에서 차트 디자인 변경", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("table", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": "center"
    }, `수정 전`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": "center"
    }, `수정 후`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "before",
        src: (__webpack_require__(6906)/* ["default"] */ .A),
        width: "180",
        height: "158"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "after",
        src: (__webpack_require__(53597)/* ["default"] */ .A),
        width: "186",
        height: "154"
    })))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 맵"), " 메뉴에서 일반 트랜잭션과 에러 트랜잭션이 겹치는 경우 에러가 먼저 보이도록 개선")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "browser-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Browser`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "페이지로드 히트맵"), " 메뉴에 페이지 그룹 필터와 검색 필터 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "브라우저 에러"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에러 상세"), " 메뉴의 배경 스타일 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 다음과 같이 수정합니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `애플리케이션 에이전트 설치`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Docker PHP`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `액세스키 확인`)), ` 섹션에서 액세스 키 복사 영역 상단의 소제목 제거`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `Kubernetes 환경변수 및 볼륨`)), ` 섹션의 소제목 문구 제거`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `애플리케이션 에이전트 설치`)), ` > 모든 설치 유형: `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `액세스키 확인`)), ` 섹션의 문구 통일 및 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `채널 문의`), ` 텍스트 왼쪽에 아이콘 추가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `설치 안내`)), ` 섹션에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `채널 문의`)), ` 버튼의 아이콘을 채널 톡 아이콘과 통일`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `쿠버네티스 에이전트 설치`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `KUBERNETES`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `쿠버네티스 에이전트 생성`)), ` 섹션에 OOM 발생 이슈 관련 안내 문구 추가`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "실험실"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `실험실`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " (", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Container"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Java"), " 상품만 해당) ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Remote Access Status"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "로그 조회"), " 권한이 없는 멤버도 사용할 수 있도록 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110512"
    }, `Preview 1.105.12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 12일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "경고-알림-1"
    }, `경고 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 수신 설정"), " 메뉴에서 3rd 파티 플러그인의 Webhook JSON 추가 양식에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "사용자 헤더"), "(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "User-Heaer"), ") 기능 추가", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `사용자 헤더`), `: key, value 쌍으로 입력한 정보를 웹훅 수신 시 헤더에서 확인 할 수 있습니다. 다음은 사용자 헤더의 key, value를 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `User-Header-Key`), `, `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `TestValue`), `로 입력한 경우 웹훅 수신 정보에 대한 예시입니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-http",
        "metastring": "{8} title='example'",
        "{8}": true,
        "title": "'example'"
    }, `POST /test HTTP/1.1
Host: whatap.requestcatcher.com
Accept: text/plain, application/json, application/*+json, */*
Connection: keep-alive
Content-Length: 234
Content-Type: application/json
User-Agent: Java/17.0.7
User-Header-Key: Test-Value
`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 3rd 파티 플러그인 추가 완료 후 창이 닫히지 않는 이슈 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드-3"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "레코드 요약"), " 탭의 트랜잭션 이름이 화면보다 긴 경우 정상 표시되도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트리 뷰"), " 탭의 레이아웃 너비 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "flex-보드-1"
    }, `Flex 보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 대시보드 복사 버튼 클릭 시 메뉴가 나타나지 않는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 대시보드 복사 창의 누락된 다국어(영어) 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 대시보드 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "다른 사람에게 복사"), " 기능 이용 시 대시보드 제목에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "_copied"), " 접미어 추가"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110511"
    }, `Preview 1.105.11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 11일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 조직 생성 기능이 정상 작동함에도 에러 메시지 출력되는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "프로젝트 목록"), " 메뉴에서 사이즈 조절 안되는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "서버 목록"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-compare.svg",
        desc: "비교하기 아이콘",
        mdxType: "LinkImage"
    }), " (", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "비교하기"), ") 옵션 클릭 시 나타나는 컬럼 헤더의 텍스트 잘림 현상으로 문자열 수정", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `국문: 비교하기 → 비교`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `일본어: ステータス → 状態`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "서버 목록"), " 메뉴에서 상단 옵션 버튼이 동시에 활성화되지 않도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "log"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "라이브 테일"), " 메뉴에서 테이블 row를 펼쳤다가 접으면서 row의 높이가 펼치기 전으로 돌아가지 않는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그 검색"), " 메뉴에서 태그 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인접 로그"), " 검색 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "시간 선택"), " 옵션 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "실험실-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `실험실`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "New"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "실험실"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "통합 로그 검색기"), " 추가"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션 에이전트 설치"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Docker PHP"), " 탭 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "모니터링 시작하기"), " 항목의 이미지가 다국어 설정에 따르지 않고 국문 대시보드 이미지를 출력하던 현상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110510"
    }, `Preview 1.105.10`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 11일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 서버 프로젝트 진입 시 화면이 표시되지 않는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110509"
    }, `Preview 1.105.09`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 10일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "멀티 컨테이너 맵"), " 메뉴 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "log-1"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "로그-검색"
    }, `로그 검색`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "필터"), " 입력란에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "category"), "를 입력하거나 왼쪽 사이드 메뉴에서 선택하면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "category==+none"), "이 입력되는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "필터"), " 입력란에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "category"), "가 입력된 상태에서는 추가 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", null, "category"), "가 입력이 되지 않던 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "필터"), " 입력란에 중복 값이 입력되지 않도록 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110508"
    }, `Preview 1.105.08`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 10일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "컨테이너 맵"), " 메뉴에서 로그 권한 체크 로직 제거"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "대시보드"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "컨테이너 맵"), " 메뉴에서 이벤트 로그의 Tag를 가릴 수 있는 옵션 추가"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110507"
    }, `Preview 1.105.07`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 7일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server-3"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "알림 규칙 테스트"), " 차트로 마우스 호버 시 동시에 여러 차트의 데이터가 표시되도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-8"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Feature"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션 에이전트 설치"), " 메뉴에 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "Docker PHP"), " 항목 추가")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110506"
    }, `Preview 1.105.06`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 6일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-8"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 조직에 속한 프로젝트 메뉴에서 새로고침 시 무한 로딩 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Flex 보드"), " 메뉴에서 대시보드 즐겨찾기 기능 사용 시 사이드 바 메뉴에 추가되지 않는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Flex 보드"), " 메뉴에서 실시간 조회 시 최초 호출을 제외한 업데이트 API 요청에 대해 60초 타임아웃 설정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 유효하지 않은 멀티 트랜잭션 ID가 노출되는 현상 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "통계"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "히트맵"), " 메뉴에서 검색 기능(", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: "/img/ico-btn-search.png",
        alt: "검색 아이콘"
    }), ")을 사용하면 시간 선택자의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "최근 검색 시간"), " 목록에 최근 검색 시간을 추가하도록 변경")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110505"
    }, `Preview 1.105.05`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 5일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-9"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 비밀번호 유효성 체크 로직 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `최소 9자리의 영어 소문자 및 대문자, 숫자, 특수 문자 중 3종류 이상`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `이메일과 동일한 비밀번호 사용 불가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `기존에 사용한 비밀번호와 동일한 비밀번호 사용 불가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `연속된 키보드 배열이 포함된 비밀번호 사용 불가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `연속된 알파벳이 포함된 비밀번호 사용 불가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `연속된 숫자가 포함된 비밀번호 사용 불가`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `현재 비밀번호와 동일한 비밀번호 사용 불가`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-9"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그 설정"), " 메뉴에서 노드 에이전트 로그 설정을 사용자 편의성을 위해 옵션을 직접 입력하지 않고 버튼 클릭만으로 적용되도록 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "url"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `URL`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "URL 목록"), " 메뉴의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "URL 추가하기"), " 기능 이용 시 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "확인 지역"), " 섹션의 중복된 항목 제거")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110504"
    }, `Preview 1.105.04`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 5일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 다음 메뉴 경로에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Key"), " 검색 상자에 한글자만 입력하면 검색 상자 밖으로 포커스가 벗어나는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "애플리케이션"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "인스턴스 성능 분석"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설정"), "(구 버전)"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설정"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이전 버전"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설정"), "(구 버전)"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110503"
    }, `Preview 1.105.03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 4일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-10"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "리소스"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "컨테이너 볼륨"), " 메뉴에서 조회 버튼을 클릭하면 데이터가 출력되지 않고 로딩만 표시되는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110502"
    }, `Preview 1.105.02`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 4일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-10"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 시간 선택자의 에러 메시지 텍스트 스타일 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드-4"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 SQL 바인드 암호화 해제 후 바인드 텍스트가 일부만 표시되는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 멀티 트랜잭션의 트랜잭션 분석 창을 재진입하면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "레코드"), " 탭에서 화이트 아웃 발생 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "관리"
    }, `관리`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "조직 생성"), " 메뉴에서 일본어 문구 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "log-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Log`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그 설정"), " 메뉴에서 로그 모니터링 메시지, 일본어 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 추가"), " 창에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 대상 필터링"), " 항목을 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "선택 입력"), "으로 선택하면 나타나는 UI 버그 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110501"
    }, `Preview 1.105.01`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 7월 3일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-11"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 프로젝트 생성 후 자동으로 새로고침되지 않는 현상 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "대시보드-5"
    }, `대시보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 트랜잭션 목록 조회 시 에이전트 필터가 적용되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "트랜잭션 분석"), " 창에서 로그 미 설정 프로젝트의 경우 트랜잭션 로그 탭이 노출되는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "flex-보드-2"
    }, `Flex 보드`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " 통합 Flex 보드 메뉴에서 대시보드의 모든 프로젝트에 대한 수정 권한이 없어도 공유 버튼을 노출하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-6"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Python 프로젝트 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 다운로드"), " 섹션의 다운로드 명령어 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Java 프로젝트 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "JVM 옵션 추가"), " 섹션의 JVM 옵션 코드 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " Node.js 프로젝트 > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "관리"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "에이전트 설치"), " 메뉴에서 Node.js 지원 버전 문구 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server-4"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "서버 목록"), " 메뉴에서 비교할 서버 선택하면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "기간 조회"), " 버튼이 활성화되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "경고 알림"), " > ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 기록"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "처리내역"), " 추가 시 이벤트 ID가 DB에 저장되지 않는 버그 수정"))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "preview-110500"
    }, `Preview 1.105.00`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `2023년 6월 30일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", {
        class: "indentTab"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "공통-12"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `공통`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 무료 프로젝트 10개 초과 생성 시 표시되는 에러 메시지 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 프로젝트 내에서 조직이 변경되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "조직 관리"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "가이드 문서 보기"), " 버튼 클릭 시 사용자가 선택한 언어의 가이드 문서로 이동하도록 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "Flex 보드"), " 메뉴의 대시보드에서 테이블 위젯의 경우 boolean 값을 확인할 수 있도록 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "application-7"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Application`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 트랜잭션 모달의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그"), " 탭 스타일 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "server-5"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Server`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h4", {
        "id": "경고-알림-2"
    }, `경고 알림`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " 메뉴에서 비활성화된 서버의 알림 설정 여부가 표시되지 않는 버그 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Fixed"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "이벤트 설정"), " 메뉴에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "로그 파일 / 윈도우 이벤트"), "의 이벤트를 현재 프로젝트에 복사 시 정상 처리됐음에도 에러 메시지가 표시되는 버그 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "database-2"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Database`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "New"), " MySQL 모니터링 V2 서비스를 오픈했습니다. 기존 대비 달라진 기능을 확인하려면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        href: "../../mysql/monitoring-intro#new-feature"
    }, "다음 문서"), "를 참조하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr", null), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "container-11"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "h3"
    }, `Container`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Status, {
        mdxType: "Status"
    }, "Change"), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "프로젝트 목록"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "네임스페이스 현황"), ", ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(UI, {
        mdxType: "UI"
    }, "네임스페이스 관리"), " 메뉴에서 쿠버네티스 요약 지표 변경"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("details", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("summary", null, "참고 이미지"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: (__webpack_require__(72277)/* ["default"] */ .A),
        width: "356",
        height: "277"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: (__webpack_require__(86526)/* ["default"] */ .A),
        width: "1318",
        height: "246"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        src: (__webpack_require__(74215)/* ["default"] */ .A),
        width: "1086",
        height: "502"
    })))));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 53597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAACaCAIAAACRwMWQAAAMQGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBooUsJvQnSCSAlhBZAehFEJSQBQokxEFTs6KKCaxcRsKGrIoodEAuK2FkUe18sqCjrYsGuvEkBXfeV7833zZ3//nPmP2fOnbn3DgBqxzkiUR6qDkC+sFAcFxpIH5uSSic9BTjQBerAGVA53AIRMyYmEsAy1P69vLsOEGl7xUGq9c/+/1o0ePwCLgBIDMQZvAJuPsQHAMBruCJxIQBEKW8+pVAkxbACLTEMEOKFUpwlxzVSnCHHe2Q2CXEsiNsBUFLhcMRZAKhegjy9iJsFNVT7IXYS8gRCANToEPvl50/iQZwOsQ20EUEs1Wdk/KCT9TfNjGFNDidrGMvnIitKQYICUR5n2v+Zjv9d8vMkQz6sYFXJFofFSecM83Yzd1KEFKtA3CfMiIqGWBPiDwKezB5ilJItCUuU26OG3AIWzBnQgdiJxwmKgNgQ4hBhXlSkgs/IFISwIYYrBJ0qKGQnQKwH8UJ+QXC8wmajeFKcwhfamClmMRX8WY5Y5lfq674kN5Gp0H+dzWcr9DHV4uyEZIgpEFsUCZKiIFaF2LEgNz5CYTO6OJsVNWQjlsRJ47eAOI4vDA2U62NFmeKQOIV9WX7B0HyxjdkCdpQC7yvMTgiT5wdr53Jk8cO5YJf4QmbikA6/YGzk0Fx4/KBg+dyxZ3xhYrxC54OoMDBOPhaniPJiFPa4GT8vVMqbQexWUBSvGIsnFcIFKdfHM0WFMQnyOPHiHE54jDwefBmIBCwQBOhAAmsGmARygKCzr6kP3sl7QgAHiEEW4AMHBTM0IlnWI4TXeFAM/oSIDwqGxwXKevmgCPJfh1n51QFkynqLZCNywROI80EEyIP3Etko4bC3JPAYMoJ/eOfAyoXx5sEq7f/3/BD7nWFCJlLBSIY80tWGLInBxCBiGDGEaIsb4H64Dx4JrwGwuuAM3GtoHt/tCU8IXYSHhGuEbsKtiYIS8U9RjgHdUD9EkYuMH3OBW0FNdzwQ94XqUBnXwQ2AA+4G/TBxf+jZHbIsRdzSrNB/0v7bDH54Ggo7shMZJeuSA8g2P49UtVN1H1aR5vrH/MhjzRjON2u452f/rB+yz4NtxM+W2EJsP3YGO4Gdw45gTYCOtWLNWAd2VIqHV9dj2eoa8hYniycX6gj+4W/oyUozWeBU79Tr9EXeV8ifKn1HA9Yk0TSxICu7kM6EXwQ+nS3kOo6kuzi5uAIg/b7IX19vYmXfDUSn4zs37w8AfFsHBwcPf+fCWwHY6wm3/6HvnA0DfjqUATh7iCsRF8k5XHohwLeEGtxp+sAYmAMbOB8X4AF8QAAIBuEgGiSAFDABRp8N17kYTAEzwFxQCsrBMrAaVIENYDPYDnaBfaAJHAEnwGlwAVwC18AduHp6wAvQD96BzwiCkBAqQkP0ERPEErFHXBAG4ocEI5FIHJKCpCNZiBCRIDOQeUg5sgKpQjYhdche5BByAjmHdCG3kAdIL/Ia+YRiqAqqhRqhVugolIEy0Qg0AR2PZqGT0WJ0ProErURr0Z1oI3oCvYBeQ7vRF+gABjBlTAczxRwwBsbCorFULBMTY7OwMqwCq8UasBb4nK9g3Vgf9hEn4jScjjvAFRyGJ+JcfDI+C1+MV+Hb8Ua8Hb+CP8D78W8EKsGQYE/wJrAJYwlZhCmEUkIFYSvhIOEU3Es9hHdEIlGHaE30hHsxhZhDnE5cTFxH3E08TuwiPiIOkEgkfZI9yZcUTeKQCkmlpLWknaRW0mVSD+mDkrKSiZKLUohSqpJQqUSpQmmH0jGly0pPlT6T1cmWZG9yNJlHnkZeSt5CbiFfJPeQP1M0KNYUX0oCJYcyl1JJaaCcotylvFFWVjZT9lKOVRYoz1GuVN6jfFb5gfJHFU0VOxWWSpqKRGWJyjaV4yq3VN5QqVQragA1lVpIXUKto56k3qd+UKWpOqqyVXmqs1WrVRtVL6u+VCOrWaox1SaoFatVqO1Xu6jWp05Wt1JnqXPUZ6lXqx9Sv6E+oEHTcNaI1sjXWKyxQ+OcxjNNkqaVZrAmT3O+5mbNk5qPaBjNnMaicWnzaFtop2g9WkQtay22Vo5WudYurU6tfm1NbTftJO2p2tXaR7W7dTAdKx22Tp7OUp19Otd1Puka6TJ1+bqLdBt0L+u+1xuhF6DH1yvT2613Te+TPl0/WD9Xf7l+k/49A9zAziDWYIrBeoNTBn0jtEb4jOCOKBuxb8RtQ9TQzjDOcLrhZsMOwwEjY6NQI5HRWqOTRn3GOsYBxjnGq4yPGfea0Ez8TAQmq0xaTZ7TtelMeh69kt5O7zc1NA0zlZhuMu00/WxmbZZoVmK22+yeOcWcYZ5pvsq8zbzfwsRijMUMi3qL25ZkS4ZltuUayzOW762srZKtFlg1WT2z1rNmWxdb11vftaHa+NtMtqm1uWpLtGXY5tqus71kh9q522XbVdtdtEftPewF9uvsu0YSRnqNFI6sHXnDQcWB6VDkUO/wwFHHMdKxxLHJ8eUoi1Gpo5aPOjPqm5O7U57TFqc7zprO4c4lzi3Or13sXLgu1S5XXamuIa6zXZtdX7nZu/Hd1rvddKe5j3Ff4N7m/tXD00Ps0eDR62nhme5Z43mDocWIYSxmnPUieAV6zfY64vXR28O70Huf918+Dj65Pjt8no22Hs0fvWX0I18zX47vJt9uP7pfut9Gv25/U3+Of63/wwDzAF7A1oCnTFtmDnMn82WgU6A48GDge5Y3aybreBAWFBpUFtQZrBmcGFwVfD/ELCQrpD6kP9Q9dHro8TBCWETY8rAbbCM2l13H7g/3DJ8Z3h6hEhEfURXxMNIuUhzZMgYdEz5m5Zi7UZZRwqimaBDNjl4ZfS/GOmZyzOFYYmxMbHXskzjnuBlxZ+Jp8RPjd8S/SwhMWJpwJ9EmUZLYlqSWlJZUl/Q+OSh5RXL32FFjZ469kGKQIkhpTiWlJqVuTR0YFzxu9bieNPe00rTr463HTx1/boLBhLwJRyeqTeRM3J9OSE9O35H+hRPNqeUMZLAzajL6uSzuGu4LXgBvFa+X78tfwX+a6Zu5IvNZlm/WyqzebP/siuw+AUtQJXiVE5azIed9bnTuttzBvOS83flK+en5h4Sawlxh+yTjSVMndYnsRaWi7snek1dP7hdHiLcWIAXjC5oLteCPfIfERvKL5EGRX1F10YcpSVP2T9WYKpzaMc1u2qJpT4tDin+bjk/nTm+bYTpj7owHM5kzN81CZmXMapttPnv+7J45oXO2z6XMzZ37e4lTyYqSt/OS57XMN5o/Z/6jX0J/qS9VLRWX3ljgs2DDQnyhYGHnItdFaxd9K+OVnS93Kq8o/7KYu/j8r86/Vv46uCRzSedSj6XrlxGXCZddX+6/fPsKjRXFKx6tHLOycRV9Vdmqt6snrj5X4VaxYQ1ljWRNd2VkZfNai7XL1n6pyq66Vh1YvbvGsGZRzft1vHWX1wesb9hgtKF8w6eNgo03N4Vuaqy1qq3YTNxctPnJlqQtZ35j/Fa31WBr+dav24TburfHbW+v86yr22G4Y2k9Wi+p792ZtvPSrqBdzQ0ODZt26+wu3wP2SPY835u+9/q+iH1t+xn7Gw5YHqg5SDtY1og0Tmvsb8pu6m5Oae46FH6orcWn5eBhx8PbjpgeqT6qfXTpMcqx+ccGW4tbB46LjvedyDrxqG1i252TY09ebY9t7zwVcers6ZDTJ88wz7Se9T175Jz3uUPnGeebLnhcaOxw7zj4u/vvBzs9Ohsvel5svuR1qaVrdNexy/6XT1wJunL6KvvqhWtR17quJ16/eSPtRvdN3s1nt/JuvbpddPvznTl3CXfL7qnfq7hveL/2D9s/dnd7dB99EPSg42H8wzuPuI9ePC54/KVn/hPqk4qnJk/rnrk8O9Ib0nvp+bjnPS9ELz73lf6p8WfNS5uXB/4K+Kujf2x/zyvxq8HXi9/ov9n21u1t20DMwP13+e8+vy/7oP9h+0fGxzOfkj89/TzlC+lL5Vfbry3fIr7dHcwfHBRxxBzZrwAGK5qZCcDrbQBQUwCgwfMZZZz8/CcriPzMKkPgP2H5GVFWPABogP/vsX3w7+YGAHu2wOMX1FdLAyCGCkCCF0BdXYfr0FlNdq6UFiI8B2yM/ZqRnwH+TZGfOX+I++cWSFXdwM/tvwDdCnx0OManfAAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAuqADAAQAAAABAAAAmgAAAABKyN2wAAAKHUlEQVR4Ae1dPZIdNRBeU86Nq0hMhMuZyYgcwDEISTkDnADOQErIMSBwRAaZy0Q4oQr2BEs/d1nzPbXmjWak0Ug93xZlNBqpf77u+dTSvLf76OHh4Y4/RCAPgY/yhnEUEbggwHRhHqxAgOmyAiwOZbowB1Yg8HjF2I6HPvr+TWTdww8vpEf7tR0N4OUGBMguG0A775RHnjbSlmM0sGSXWglOdqmF5CnkOKxdsGo5RQwbOkl2aQj2+KqcsAsGAisYVi2ITHnbW7o8e37ZP4efT3+6+/vby5U05EfblxZ/NiHgKl2ESzQtEAohm5Yc8/lXv6B2af/x69fyr/ZrOxow0KW32kX4493bqyM74RubQwNFqCtTXZ27BGTn8qPZYmQ5Rm0bnV3Si5H1dhRGxUTBqiVkEhslCKTTpUTiyefik4bPmA9Y0uli/UQURvHcMs0olndrZzpdujW3N8PwjEdtewkm4jM2etWibqXTxfqJPQBIp01btSjTNCt1O8Wl2CxvG+liQNYJkBOd5KHOn19+If+hLHnexnrk0PjQTrNLuC0NdLJ/RkX+wDZ6xPZmBJbTZbPoaKJd5vW51P7kMxpJ6PASnfrgzmRm/0/XZGte61a6zO2P/KGQh9XYozCz1ZMP+X05BM98XG+lS1140DiVbB2oq7GxNHQnE/3GFparS6cL8ge2y/VRwlEIVHlc0+myh0v24cOePTQ2kzkXCX8c8/j+/h5hffLkiVxGndJTq191Wflz/bX07ipH3FH56kX4N/Rbf3e1Rwyw8j/+8Z9g2H/ffSJt7NFbi3a2Y5dga2Somo53B2qj8cIlFu6BfMkxtd0HGOaWHn+MnYN7+zFV8G99qivJEeWHuDHnSXtMqfE2Aq3T5bY1vLs3AoWPa7vaBUkF23sD1EA+vidRdXjC6ekkol26NAgbVdxAAB9RbN+YYm+1K3Wtbmc9lmPUQU/swtrFWdLu6w4Xowr4Iq9g1VJBdGciyC6dBaRvc8guleNjmaaygkPFkV0OhX805UyXahGTqiXaBAnTINlU03ScIKbLcdgPqJnnLgtBs++z9IxL+zefdy1o7fU22aXXyHRpF9klKyyWY3Ta2dhlvI00fvNZY4bfWeR3i7LSf+ug8dJlq6cb5yGvYNWyUdzg08ZLF+QSBd/yzeBB6df88dLlQCwt0xxozCGqx0sX5BLLNIeAeB6l3EhnxVqqlmgTJEyDZJMlZfxB47ELYm6ZBu+yXR2BFecuGBu1A9eCZjtYawYaUx2gpEBrwyFQJG2r0mmJU8l11MVIwhMlqITQRrEKdhQSEFixGOEDpPPPGR55yfz0vf//fnP5ddz64wwKe8KkfLMiXT4gc/D/kVSwfbBZ51C/Il3wAbJMcw64Ll7Kh1oQiqc/X/4IADKNAyiwdkGmGbV2cRCSEV0o2hmpw2dbEaR2meMSYZroA3Uj5oTYjOyCLpBdEA22FxBYnS7CJRGdyEKOa/mCQke3hUu0cAk+Cet4gkKqFi1cgoOr0yXMZOOECKyoXU6ITtJl/XC/1ij2g/4+apek49JJdplDhv0JBMguCVD8ddmKCk/OomL0hvsrjuluSDnhrbllCJcqf7AwXfzFNOERconetnyTmGa6mC4GkrwOW+pavsmTNNIopkv9aMlfMopORfG1S3SSUV99SiJyiWWa1Ix0H9MljctiL3KJZZrF6YMOYLrUD9zL336XBEKCwXZ9fSslWqbJF8B0ycdqdqRlmtmhvd6wCZ1cQJku9QOI0CPo9TWtlGirFmUanrusBHLrcFu1XJjm+o92bpXddJ5Na0z6YArZJUCxSwNBP2RPpF4hf2B7rc98CbAWseXxmCI4+sB0QTOSbbTZMk2wnK8Yk+hV6BSIA8oqTkKCUamgo7kILkbNId9fIW6VVRsWuYuLEeZ0lPFMl/rRQ4ixXV9Tc4msXZpD3kqh5RjVnGQXZRRNbmQXnRKSnrVLq+i50EN2cRHGayeQV7Bq0VFJdrkWMHtFdpmFhjcsAix1LSaueizTlLhHdilB73RzmS5uQy41SlSmCNMg2WzwnOmyAbTzTuHO6Lyx3+A52WUDaOed4nZnNHc0iceXw4XdVh54rCJt/FyfeoefyNF2iddklxL0TjfXee1iOUYjHF6CdBLwv169iiz57PVr6dF+bYcBlmP0VtgHWY7RAeXsMi1GVkddHgvesjEuAlO6jOtD0nLklbkXrcmJh3Qil6gBlm+kH3kFq5ZgMz7z+LSHAYWNKV2sdNRdqIbTfSAwpYsPf5JeWKZJDjuwE7nEMk3SMMs00TB82surFhU+pYuVjj2RKbw8JwJTurj031Yt/Z+7WKaJQmOrFmWasDOaqyvKOSadLsgr5Toib3k5LgLTuQumCPrDdEE0dmrj+Qqyi6qLzl12siFHbHyqK8kR5Yek0Vwm5SjgGE8IpBcjTx428AV3XqoOa6acE2TkD2w3MH6ViildkFSwvUocB/tGYKpdfPvZwDvLMao0h10amFdFRVy7VBFKIV4RmBYjrx428At5BauWBqobqyC7NAZ8bHVkl4X44asZHYqHquEgNUixTBNuOWiQXRwEsZ0L3BllYW05RqcpuyijzFUtO+2MkMbUGDRgJ6Vkl6x04SBFgOyykAnIK1i16DRbuyyIq31bOObZ8xeR1Hdv3wi7RK+pozHbLsku23A76Syyy0LgkV1waA+8EuwJXBJ6QqOunUNupA+p8kIARmzYpMeFNT+luBhlRV8AjTCVANgYZMmqPUhql2CJVC2RnXW1DckuuGNUOCzf1IVpdGmaQyGrxB1s53s3ZLrku1c+Eh9WbJdLriIhqlqQafawdsh0QS6xTFMlDM6EIJdYpsl3dsh0yXfP8Uh9ToKDNgk0RepyzPDpYpkmIMhGEgHLNMlhyc5LuthPbuuHL7WfH8RMAtdPJ/IHtvewcOCNtLBxRMjCNEg2e+A1tExJpiifhGmQbBa9u7ALcolOsHyzKIgDzoDA9BJgLkW4GJ0hDzJ9jGsXyzSZgjjsDAgMXLucITy9+RhvpHFJwmUI+9UH5CEc2ZuHtKciAmSXimD6F3UpdZU5kC3Qb2QOyzE6EsfgXLadIUB2cRbQfd2ZNtK39SCvWB4iu9xGz81dsoubULZwJN4Z5ei0TJMzi2McILAlXRy4fZQL+KSpDbiy97+mr1uMxJ/IJfHfQnBUMKh3bwTILnsjfCUfuURvjPWw5aYLkgq2r8DghXcEctPFOw6N/EMusUzTyIgCNetqlwJFnOoBAbLLYVG0THOYKdmKyS7ZUHHg3R3T5YAskKol2i4I0yDZHGBTnkqmSx5OHPUegdxXjISLCAgCZBemwQoEuDNaARYOtV9owm9rR1+AwolDt8kuQ4evtfGsXYoQtxyj4sguRbBysg8EWLtsjCPyClYtG8UNMo21yyCB6sNMskuFOFimqSD0WoT9PQn6uxS0P/q9CtdTa179D0xIgF+eTK4gAAAAAElFTkSuQmCC");

/***/ }),

/***/ 6906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 72277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-01-2937a8a5142e670015e58dd112a78bf7.png");

/***/ }),

/***/ 86526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-02-ecf1ce1327b80f839447793c07dc2103.png");

/***/ }),

/***/ 74215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-metric-summary-03-87069c4ef0b6f3b9aeab7f5218a2f43e.png");

/***/ }),

/***/ 58525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-container-map-details-6febeda2a821e1afb98c83a5368fd17e.png");

/***/ }),

/***/ 87424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-multi-container-map-21862b0588f290d0b1ad481dd3c8cacd.png");

/***/ }),

/***/ 39841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/r-1_105_14-k8s-summary-cluster-75b16667f8e694323c568ccaf434ff82.png");

/***/ })

}]);