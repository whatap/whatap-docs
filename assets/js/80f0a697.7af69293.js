"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[91684],{

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

/***/ 59555:
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
    id: 'openapi-call-server-spot',
    title: 'Spot 정보 조회',
    description: 'Spot 정보 조회(Server)를 위한 Open API에 대한 설명을 제공합니다.',
    tags: [
        'Open API',
        'API',
        'Spot 정보 조회',
        'Server',
        'Server 모니터링'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "apidoc/openapi-call-server-spot",
    "id": "apidoc/openapi-call-server-spot",
    "title": "Spot 정보 조회",
    "description": "Spot 정보 조회(Server)를 위한 Open API에 대한 설명을 제공합니다.",
    "source": "@site/docs/apidoc/openapi-call-server-spot.mdx",
    "sourceDirName": "apidoc",
    "slug": "/apidoc/openapi-call-server-spot",
    "permalink": "/whatap-docs/apidoc/openapi-call-server-spot",
    "draft": false,
    "editUrl": "undefined/docs/apidoc/openapi-call-server-spot.mdx",
    "tags": [
        {
            "label": "Open API",
            "permalink": "/whatap-docs/tags/open-api"
        },
        {
            "label": "API",
            "permalink": "/whatap-docs/tags/api"
        },
        {
            "label": "Spot 정보 조회",
            "permalink": "/whatap-docs/tags/spot-정보-조회"
        },
        {
            "label": "Server",
            "permalink": "/whatap-docs/tags/server"
        },
        {
            "label": "Server 모니터링",
            "permalink": "/whatap-docs/tags/server-모니터링"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "openapi-call-server-spot",
        "title": "Spot 정보 조회",
        "description": "Spot 정보 조회(Server)를 위한 Open API에 대한 설명을 제공합니다.",
        "tags": [
            "Open API",
            "API",
            "Spot 정보 조회",
            "Server",
            "Server 모니터링"
        ]
    },
    "sidebar": "openapiSidebar",
    "previous": {
        "title": "통계 데이터 조회",
        "permalink": "/whatap-docs/apidoc/openapi-call-apm-stat-data"
    },
    "next": {
        "title": "통계 데이터 조회",
        "permalink": "/whatap-docs/apidoc/openapi-call-server-stat-data"
    }
};
const assets = {};
const toc = [
    {
        value: '활성화 상태의 에이전트 수',
        id: '활성화-상태의-에이전트-수',
        level: 2
    },
    {
        value: '비활성화 상태의 에이전트 수',
        id: '비활성화-상태의-에이전트-수',
        level: 2
    },
    {
        value: '호스트(HOST) 수',
        id: '호스트host-수',
        level: 2
    },
    {
        value: '호스트의 CPU 코어 합',
        id: '호스트의-cpu-코어-합',
        level: 2
    },
    {
        value: 'CPU 사용률',
        id: 'cpu-사용률',
        level: 2
    },
    {
        value: '디스크 IOPS 합계',
        id: '디스크-iops-합계',
        level: 2
    },
    {
        value: '네트워크 트래픽(IN/OUT) 합산',
        id: '네트워크-트래픽inout-합산',
        level: 2
    },
    {
        value: '프로세스 현황',
        id: '프로세스-현황',
        level: 2
    },
    {
        value: '서버 목록',
        id: '서버-목록',
        level: 2
    },
    {
        value: '서버 모니터링 상세',
        id: '서버-모니터링-상세',
        level: 2
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
        "id": "활성화-상태의-에이전트-수"
    }, `활성화 상태의 에이전트 수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/act_agent", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/act_agent"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='Sever monitoring response'",
        "title": "'Sever",
        "monitoring": true,
        "response'": true
    }, `{
  "pname": "LOCAL_INFRA",
  "values": "57.0"
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "비활성화-상태의-에이전트-수"
    }, `비활성화 상태의 에이전트 수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/inact_agent", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/inact_agent"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname": "LOCAL_INFRA",
  "values": "4.0"
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "호스트host-수"
    }, `호스트(HOST) 수`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/host", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/host"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname": "LOCAL_INFRA",
  "values":"57.0"
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "호스트의-cpu-코어-합"
    }, `호스트의 CPU 코어 합`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/cpucore", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/cpucore"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":"108.0"
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "cpu-사용률"
    }, `CPU 사용률`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/infra_cpu", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://api.whatap.io/open/json/infra_cpu"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname": "LOCAL_INFRA",
  "values": {
    "s-p-gtw-03": 2.802803,
    "t-a-yrd-01": 8.709015,
    (...)
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "디스크-iops-합계"
    }, `디스크 IOPS 합계`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/infra_disk_iops", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/infra_disk_iops"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":{
    "s-a-yrd-01-1": {
      "bps": 4447.892,
      "iops": 0.77481234
    },
    "h-i-yrd-02": {
      "bps": 6203241.5,
      "iops": 396.4099
    },
    (...)
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "네트워크-트래픽inout-합산"
    }, `네트워크 트래픽(IN/OUT) 합산`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/infra_net_traffic", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/infra_net_traffic"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":{
    "s-p-gtw-03": 4487137.014340188,
    "t-a-yrd-01": 2500277.566511181,
    (...)
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "프로세스-현황"
    }, `프로세스 현황`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/infra_proc", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/infra_proc"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":{
    "s-p-gtw-03": [
      {
        "memoryBytes": 1274269696,
        "bps": 819.2,
        "cmd1": "java",
        "cpu": 2.8507125
      },
      {
        "memoryBytes": 2895872,
        "bps": 0,
        "cmd1": "rsyslogd",
        "cpu": 0
      },
      (...)
    ],
    "t-a-yrd-01": [
      {
        "memoryBytes": 2583621632,
        "bps": 1175961.5,
        "cmd1": "java",
        "cpu": 10.621243
      },
      (...)
    ],
    (...)
  }
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "서버-목록"
    }, `서버 목록`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/sm_servers", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/sm_servers"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":[
    {
      "os.status": "ok",
      "oname": "h-db-prx-01",
      "os.name": "linux",
      "oid": -1359816680,
      "isActive": true
    },
    {
      "os.status": "ok",
      "oname": "h-db-prx-02",
      "os.name": "linux",
      "oid": 1745981315,
      "isActive": true
    },
    (...)
  ]
}
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "서버-모니터링-상세"
    }, `서버 모니터링 상세`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span", {
        class: "apitype"
    }, "GET"), " https://service.whatap.io/open/json/sm", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash",
        "metastring": "title='command'",
        "title": "'command'"
    }, `$ curl -w "\\n" -H "x-whatap-token: {{PROJECT API TOKEN}}" -H "x-whatap-pcode: {{projectCode}}" "https://service.whatap.io/open/json/sm"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-json",
        "metastring": "title='response'",
        "title": "'response'"
    }, `{
  "pname":"LOCAL_INFRA",
  "values":{
    "servers": [
      {
        "public_ip": "192.168.0.1",
        "os_cpuvendor": "Intel(R) Xeon(R) CPU E5-2640 v3 @ 2.60GHz",
        "agent_created": "49572130779",
        "ip": "127.0.0.1,10.128.0.1",
        "os_arch": "amd64",
        "actTime": 1570672662216,
        "cpu_cores": "1",
        "oid": -1359816680,
        "isActive": true,
        "version": "1.2.5",
        "tags": [
          "gateway",
          "python",
          "network:10.0.0.0/8",
          "@PRX"
        ],
        "inactTime": 0,
        "oname": "h-db-prx-01",
        "os_name": "linux",
        "startTime": 1570672662000,
        "os_memory": "2088476672",
        "os_status": "ok",
        "snapshot": {
          "disk": {
            "/boot": {
              "writeIops": 0,
              "fileSystem": "ext4",
              "mountPoint": "/boot",
              "queueLength": 0,
              "usedSpace": 58863616,
              "blksize": 4096,
              "freeSpace": 841175040,
              "display": true,
              "count": 1,
              "readBps": 0,
              "totalSpace": 966778880,
              "ioPercent": 0,
              "mountOption": "rw,relatime",
              "deviceId": "/dev/sda1",
              "usedPercent": 6.540122985839844,
              "freePercent": 93.45987701416016,
              "writeBps": 0,
              "readIops": 0
            },
            "/home": {
              "writeIops": 0,
              "fileSystem": "ext4",
              "mountPoint": "/home",
              "queueLength": 0,
              "usedSpace": 1670574080,
              "blksize": 4096,
              "freeSpace": 69533446144,
              "display": true,
              "count": 1,
              "readBps": 0,
              "totalSpace": 75039498240,
              "ioPercent": 0,
              "mountOption": "rw,relatime",
              "deviceId": "/dev/sda3",
              "usedPercent": 2.3461761474609375,
              "freePercent": 97.65382385253906,
              "writeBps": 0,
              "readIops": 0
            },
            "/": {
              "writeIops": 0,
              "fileSystem": "ext4",
              "mountPoint": "/",
              "queueLength": 0,
              "usedSpace": 5079060480,
              "blksize": 4096,
              "freeSpace": 22798901248,
              "display": true,
              "count": 1,
              "readBps": 0,
              "totalSpace": 29394726912,
              "ioPercent": 0,
              "mountOption": "rw,relatime",
              "deviceId": "/dev/sda2",
              "usedPercent": 18.218902587890625,
              "freePercent": 81.78109741210938,
              "writeBps": 0,
              "readIops": 0
            }
          },
          "memory": {
            "shared": 21590016,
            "swapused": 0,
            "buffers": 182550528,
            "available": 1746370560,
            "swaptotal": 0,
            "used": 342106112,
            "pused": 16.380653381347656,
            "slab": 85729280,
            "total": 2088476672,
            "sunreclaim": 23261184,
            "cached": 521756672,
            "pavailable": 83.61934661865234,
            "pagefaults": 0,
            "sreclaimable": 62468096,
            "free": 1167208448,
            "swappused": 0
          },
          "cpu": {
            "softirq": 0,
            "usr": 0,
            "idle": 100,
            "steal": 0,
            "irq": 0,
            "load5": 0,
            "iowait": 0,
            "sys": 0,
            "nice": 0,
            "load1": 0,
            "load15": 0
          },
          "open_filedescriptors": 249,
          "netstat": {
            "established": 1,
            "syn_sent": 1,
            "syn_recv": 0,
            "closing": 0,
            "time_wait": 19,
            "last_ack": 0,
            "fin_wait1": 0,
            "close_wait": 0,
            "fin_wait2": 0,
            "listen": 3,
            "unknown": 0
          },
          "uptime": 16313689,
          "network": {
            "lo": {
              "errorOut": 0,
              "packetOut": 0.3991734786600438,
              "trafficIn": 281.0181289766709,
              "trafficOut": 281.0181289766709,
              "hwAddr": "",
              "errorIn": 0,
              "ip": "127.0.0.1",
              "count": 1,
              "droppedIn": 0,
              "droppedOut": 0,
              "packetIn": 0.3991734786600438,
              "desc": "lo"
            },
            "eth0": {
              "errorOut": 0,
              "packetOut": 8.1830563125309,
              "trafficIn": 11314.173079140282,
              "trafficOut": 19447.731880317337,
              "hwAddr": "00:1d:d8:b7:87:18",
              "errorIn": 0,
              "ip": "10.128.112.133",
              "count": 1,
              "droppedIn": 0,
              "droppedOut": 0,
              "packetIn": 24.549168937592693,
              "desc": "eth0"
            }
          }
        }
      },
      (...)
    ],
    "max": {
      "disk": {
        "writeIops": 240.9893,
        "usedPercent": 94.38699,
        "freePercent": 100,
        "usedSpace": 2.46495681E+12,
        "freeSpace": 0,
        "writeBps": 2917852,
        "readBps": 118646.15,
        "readIops": 75.80727,
        "totalSpace": 9.223372E+18,
        "ioPercent": 100,
        "freespace": 1.58926471E+11
      },
      "nic": {
        "errorOut": 0,
        "packetOut": 2175.8743,
        "trafficIn": 4856648,
        "trafficOut": 2503208.8,
        "errorIn": 1,
        "droppedIn": 1,
        "droppedOut": 0,
        "packetIn": 2175.8743
      },
      "compound_eye_traffic": 1000000000
    },
    "count": {
      "total": 14,
      "paused": 0,
      "inactive": 0,
      "warning": 1,
      "ok": 13,
      "close": 0,
      "fatal": 0
    },
    "tags": {
      (...)
    }
  }
}
`)));
}
MDXContent.isMDXComponent = true;


/***/ })

}]);