"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[19768],{

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

/***/ 56201:
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
    id: 'mobile-app-v1_0_4',
    title: 'WhaTap Mobile App v1.0.4 (53)',
    toc_max_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "release-notes/mobile/mobile-app-v1_0_4",
    "id": "release-notes/mobile/mobile-app-v1_0_4",
    "title": "WhaTap Mobile App v1.0.4 (53)",
    "description": "2023년 12월 19일",
    "source": "@site/docs/release-notes/mobile/mobile-app-v1.0.4.mdx",
    "sourceDirName": "release-notes/mobile",
    "slug": "/release-notes/mobile/mobile-app-v1_0_4",
    "permalink": "/whatap-docs/release-notes/mobile/mobile-app-v1_0_4",
    "draft": false,
    "editUrl": "undefined/docs/release-notes/mobile/mobile-app-v1.0.4.mdx",
    "tags": [],
    "version": "current",
    "frontMatter": {
        "id": "mobile-app-v1_0_4",
        "title": "WhaTap Mobile App v1.0.4 (53)",
        "toc_max_heading_level": 2
    },
    "sidebar": "releaseSidebar",
    "previous": {
        "title": "WhaTap Mobile App v1.0.5 (56)",
        "permalink": "/whatap-docs/release-notes/mobile/mobile-app-v1_0_5"
    },
    "next": {
        "title": "WhaTap Mobile App v1.0.3 (52)",
        "permalink": "/whatap-docs/release-notes/mobile/mobile-app-v1_0_3"
    }
};
const assets = {};
const toc = [];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("div", props);
    };
const Status = makeShortcode("Status");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2023년 12월 19일`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 일부 상품의 프로젝트에서 아이콘이 보이지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 차트의 버튼이 실행되지 않는 문제 수정"), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(Status, {
        mdxType: "Status"
    }, "Fixed"), " 로그인 시 발생하는 일부 오류 수정")), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `다음 링크를 선택하거나 QR 코드를 스캔해 모바일 앱을 다운로드하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "th",
        "href": "https://apps.apple.com/us/app/whatap-mobile/id6450067434"
    }, `iOS`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("th", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "th",
        "href": "https://play.google.com/store/apps/details?id=io.whatap.lion"
    }, `Android`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "QR",
        src: (__webpack_require__(62238)/* ["default"] */ .Z),
        width: "600",
        height: "600"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("td", {
        parentName: "tr",
        "align": "center"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img", {
        alt: "QR",
        src: (__webpack_require__(55743)/* ["default"] */ .Z),
        width: "600",
        height: "600"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `모바일 앱 사용에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a", {
        parentName: "p",
        "href": "../../mobile-app"
    }, `다음 문서`), `를 참조하세요.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 55743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEUlEQVR4nO3bQW7jMAyFYQFZZDlH8FFyNPtoPoqPkGUXBTiRKFGk3RYoMIth8L/NjGzpc1eEKDulEEIIeWWVkO11aZGn3hvDU+rdW7z0iYWFhZXc2oulLn602fe4+F5nK615WXPZHQsLC+sNrKWtsNk21Cy+kO5zOGryEwsLC+v9rEe43fJHPtTSu6JDLCwsrDe2Tou1rrYt55j8mxqNhYWFlcayaOU8mtWG0meXOTzGk+YyLCwsLCxvhUzr5ouynWO6uz5YWFhYua1vc5t0mftVacPfBgsLC+s/t2Zd/ZybSndSuZfayofOvlzLLBYWFlZ+y42V7g22Zhn0PNZ03/os4+/AwsLCSmyVXhtD7CVO6XtMyxdbzllXsbCwsPJaI+6wsaaVyrXTLfF54XU3FhYWVn7LvuYZ+fq7x/rfUVetOT9OfxEWFhYWVpnduc4WsWZdrGTLHIbe3U45sbCwsBJba5tidTW8ptFLR3GFdG+L7mM3u5dyeT+EhYWFlc/SQup+PSPdOr3EuT5YL8XeHQsLCyunpbdlFNKtXQzfgJ/6bY0rs9fvhrCwsLCyWj/9puX09js058el38bCwsLKaO19Rd9UPnqDLX62td86+T5Zu4uFhYWV2NL0yjn7bfetzzGnzQfbMPbuWFhYWFhzth1c1ti3Pg99yhfD+s9ezr07FhYWVk6r1kaZe846+zlo6XdDniVsbmPvjoWFhZXZ6hm3rVnX9CeNPaaruudzACwsLKzM1ukXL5djTdtULvKcwxrfb2NhYWHltnoLvb0uLWMXOY8ie5ndrN+22JOwsLCwEluX1NnhNY3RY7FtKldfZrGwsLASW6uEhMqpdKirxW9Iz+eWWFhYWFjzaLLE2e5bHyvZ8yEf/u+IvTsWFhZWVssWnw4uax5+scb91Gbvw2/OAbCwsLDyWuKb9XG3ZSujle9rtZXHwsLCektLRoOtcaeeo/3uL8MDjYWFhZXaslzqathyKqxDGSeTP/buWFhYWGmskC1WzlVE/FfeVnX7k2ri7wyxsLCwMlqEEEL+Yf4Ckl7rw+cbI+wAAAAASUVORK5CYII=");

/***/ }),

/***/ 62238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC60lEQVR4nO3dQXLjIBCFYVSz8DJH8FF0NOloOoqPkKUXLjHTTQMN0aQqKZyRa/63wgI+ZQWIIDsEQgghJ841dtlKVXvhLX16SPnSd3rHwsLCwnqK9Qg1k3T9FeOaut7k2iwlubDLJ638Y7lOYcHCwsLCeg1rzjPAZFOF1dbKNfer1jV1umNhYWFh/aCVx/t+8b+X2QELCwsL619ZOt7H0rydAOI35g4sLCwsrJNYJXnuiMnSlBtpvr6fg4WFhYX1fatLu77XycCG9Ek2zrPVBgsLCwvrGdZxFlc7S+M11Duvn3TEwsLCwjqpdY01Oj2UclNpZ1d0MllkMpF5RJ8GLhXHwsLCwhpt5SW8ZU5d6402KS09LuXdujT7OVhYWFhYA63cXKLjvW6cv8Um5VB43YO5hT5YWFhYWCe3NHZhTl1DesfTH2wJZX0f3cGWw2cFLCwsLKwRluWSmufxfonHuZUOtgcT3ZMBFhYWFtZg6yqft1Qb3evxoYz3mkP873swWFhYWFjns7T5pW21Bn+jS9/1Xiq7uQMLCwsLa6yVm5dL+s7Pe3sjj5fy3lZiYWFhYZ3fstT9nHfnav96VlHz+X4OFhYWFtYYq/7rsy7hg/tuLL3R4jbky9PA7l4AxcLCwsJ6mmWjdn3nJ5b38Muye5IxXicA24PZXU8sLCwsrBewbDbo1vTWYpbymtt3VrcHg4WFhYU13NJRO7q03ymuXetv85Ts7WFzLCwsLKzB1kHq+UJdgm9S9hvna7C/ogYLCwsL6+yWv6LZXHPNnJvnDZpV1vTtxPJRx8LCwsIaYT1cv8mdY2kql8ayyrwH0zwrYGFhYWGNtebUyH4/ra7J2xzvwdyPz8FgYWFhYb2QdQs5ZQ8mRyrrSRcsLCwsrJ+zNNbLV2rWtKavWa0lFhYWFtYTrJI63tvXfge37J7sn5vRnXTZxMXCwsLCegWrS507ygWN/RDEQ9x76vnxnR8sLCwsrJEWIYSQ/yC/Ad628qx4qX+OAAAAAElFTkSuQmCC");

/***/ })

}]);