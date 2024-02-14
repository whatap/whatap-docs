"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[34800],{

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

/***/ 12556:
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
    id: 'flexboard-share',
    title: 'Flex 보드 공유하기',
    description: 'Flex 보드를 다른 계정의 사용자와 공유하고 재사용할 수 있습니다.',
    tags: [
        'MySQL',
        'Flex 보드'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "mysql-v1/flexboard-share",
    "id": "mysql-v1/flexboard-share",
    "title": "Flex 보드 공유하기",
    "description": "Flex 보드를 다른 계정의 사용자와 공유하고 재사용할 수 있습니다.",
    "source": "@site/docs/mysql-v1/flexboard-share.mdx",
    "sourceDirName": "mysql-v1",
    "slug": "/mysql-v1/flexboard-share",
    "permalink": "/whatap-docs/mysql-v1/flexboard-share",
    "draft": false,
    "editUrl": "undefined/docs/mysql-v1/flexboard-share.mdx",
    "tags": [
        {
            "label": "MySQL",
            "permalink": "/whatap-docs/tags/my-sql"
        },
        {
            "label": "Flex 보드",
            "permalink": "/whatap-docs/tags/flex-보드"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "flexboard-share",
        "title": "Flex 보드 공유하기",
        "description": "Flex 보드를 다른 계정의 사용자와 공유하고 재사용할 수 있습니다.",
        "tags": [
            "MySQL",
            "Flex 보드"
        ]
    },
    "sidebar": "mysqlv1Sidebar",
    "previous": {
        "title": "Flex 보드 화면 모드",
        "permalink": "/whatap-docs/mysql-v1/flexboard-mode"
    },
    "next": {
        "title": "카운트 추이 활용하기",
        "permalink": "/whatap-docs/mysql-v1/analysis-count-trend"
    }
};
const assets = {};
const toc = [
    {
        value: '공유와 복사의 차이',
        id: '공유와-복사의-차이',
        level: 2
    },
    {
        value: 'Flex 보드 공유하기',
        id: 'flex-보드-공유하기',
        level: 2
    },
    {
        value: 'Flex 보드 복사하기',
        id: 'copyflexboard',
        level: 2
    },
    {
        value: 'Flex 보드 내보내기, 가져오기',
        id: 'flex-보드-내보내기-가져오기',
        level: 2
    }
];
const makeShortcode = (name)=>function MDXDefaultShortcode(props) {
        console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
        return /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div", props);
    };
const Cmdname = makeShortcode("Cmdname");
const ImgLang = makeShortcode("ImgLang");
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
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴에서 생성한 대시보드를 다른 멤버와 공유하거나 복사해 재사용할 수 있습니다.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "공유와-복사의-차이"
    }, `공유와 복사의 차이`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "공유와 복사의 차이",
        src: (__webpack_require__(16140)/* ["default"] */ .c),
        width: "1699",
        height: "811"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드를 공유한 경우 공유한 멤버는 모두 같은 대시보드를 볼 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드를 다른 멤버 또는 나에게 복사한 경우 복사된 별도의 대시보드를 볼 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), "으로 대시보드를 공유 또는 복사 받은 멤버는 대시보드를 수정할 수 없지만 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "수정 모드"), "로 공유 또는 복사된 대시보드는 수정할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), "으로 대시보드를 공유받은 멤버는 복사만 할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드에 포함된 프로젝트 중 최소 1개 프로젝트에 초대된 멤버에게 대시보드를 공유할 수 있습니다. 공유 또는 복사 받을 멤버가 프로젝트에 소속되어 있는지 확인하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-check-projects.png",
        desc: "대시보드 목록",
        mdxType: "ImgLang"
    }))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `대시보드 공유 및 복사 기능이 업데이트됐습니다`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `이전에는 공유 또는 복사 받을 멤버에게 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `수정`), ` 권한이 있어야 했지만, 업데이트 이후 권한에 상관없이 프로젝트에 소속되어 있기만 한다면 복사 또는 공유할 수 있습니다. 멤버 권한에 대한 자세한 내용은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "../project/project-structure#member-auth"
    }, `다음 문서`), `를 참조하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "flex-보드-공유하기"
    }, `Flex 보드 공유하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자가 생성한 Flex 보드를 다른 멤버와 공유해 동일한 대시보드를 볼 수 있습니다. 이를 통해 업무를 공유할 수 있습니다. 공유한 대시보드를 수정한 경우 공유받은 모든 멤버는 동일한 대시보드를 확인할 수 있습니다. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `이 기능은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴에서만 이용할 수 있습니다. 프로젝트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "flexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴에서는 이용할 수 없습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), "에서 공유하려는 대시보드의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-flexboard-share.svg",
        className: "ico",
        mdxType: "LinkImage"
    }), " 버튼을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-01.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "share_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 창이 나타나면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-add.svg",
        className: "ico",
        mdxType: "LinkImage"
    }), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "account",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-02.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드를 공유할 멤버를 선택하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-06.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `공유 대상을 추가하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-add.svg",
        className: "ico",
        mdxType: "LinkImage"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "account",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 버튼을 선택하세요. 멤버를 추가로 선택할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드에 포함된 프로젝트 중 최소 1개 프로젝트에 초대된 멤버에게 대시보드를 공유할 수 있습니다. 공유 또는 복사 받을 멤버가 프로젝트에 소속되어 있는지 확인하세요.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "share_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 버튼을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-03.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "li"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), "을 선택하면 공유받은 멤버는 대시보드를 수정할 수 없습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `공유받을 멤버 모두에게 읽기 전용으로 공유하려면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "ITM07634",
        className: "uitext",
        mdxType: "Cmdname"
    }), `를 선택하세요.`))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `대시보드를 공유한 항목은 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "shared",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 태그가 표시된 것을 확인할 수 있습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "shared",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 태그에 마우스를 오버하면 대시보드를 공유한 구성원에 대한 정보를 확인할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("table", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("thead", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "thead"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": null
    }, `대시보드를 공유받은 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("th", {
        parentName: "tr",
        "align": null
    }, `대시보드를 공유한 경우(대시보드 소유자)`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tbody", {
        parentName: "table"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("tr", {
        parentName: "tbody"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-04.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("td", {
        parentName: "tr",
        "align": null
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-share-05.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    }))))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "tip"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `대시보드 공유 조건`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", {
        parentName: "admonition"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드 공유 기능은 홈 화면 `, `>`, ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 메뉴에서만 이용할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `누구나 자신의 대시보드를 공유할 수 있으며, 공유받은 대시보드를 다시 공유하거나 복사할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), "으로 대시보드를 공유받은 멤버는 대시보드를 수정할 수 없지만 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("b", null, "수정 모드"), "로 공유받은 대시보드는 수정할 수 있습니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), "으로 대시보드를 공유받은 멤버는 복사만 할 수 있습니다. 대시보드 복사 기능은 [다음 문서](#copyflexboard)를 참조하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `공유 조건에 해당하는 경우에만 대시보드 공유 버튼이 노출됩니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-sharable-list.png",
        desc: "Flex 보드 공유",
        mdxType: "ImgLang"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드 소유자가 대시보드를 삭제하면 대시보드를 공유받은 모든 멤버 계정에서도 해당 대시보드가 삭제됩니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `대시보드를 공유받은 멤버가 대시보드를 삭제하면, 해당 멤버의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), `에서만 삭제됩니다. 원본 대시보드는 그대로 유지합니다.`)))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "copyflexboard"
    }, `Flex 보드 복사하기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `사용자가 생성한 Flex 보드를 복사해 다른 멤버에게 전달할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), "에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-copy.svg",
        className: "ico",
        desc: "복사 아이콘",
        mdxType: "LinkImage"
    }), " 버튼을 선택하세요. ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "copy_to_me",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 또는 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "copy_to_others",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 옵션을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "copy_to_me",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 옵션을 선택하면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), "에 '_copied' 접미어가 붙은 항목이 추가됩니다."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "copy_to_others",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 옵션을 선택하면 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-add.svg",
        className: "ico",
        mdxType: "LinkImage"
    }), " ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "account",
        className: "uitext",
        mdxType: "Cmdname"
    }), "을 선택하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(ImgLang, {
        img: "flexboard-copy2others.png",
        desc: "다른 사람에게 복사",
        mdxType: "ImgLang"
    }), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `다른 멤버의 이메일을 선택한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "copy_dashboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 버튼을 클릭하세요. 복사 받은 멤버의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 목록에 '_copied' 접미어가 붙은 항목이 추가됩니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "read_only",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 옵션을 선택하면 복사 받은 사용자는 대시보드를 수정할 수 없습니다.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "flex-보드-내보내기-가져오기"
    }, `Flex 보드 내보내기, 가져오기`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Flex 보드 설정을 JSON 파일로 저장하고 다른 멤버에서 전달할 수 있습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ol", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "integratedFlexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 또는 프로젝트의 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "flexboard",
        className: "uitext",
        mdxType: "Cmdname"
    }), " 메뉴로 이동하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "dashboard_list",
        className: "uitext",
        mdxType: "Cmdname"
    }), "에서 ", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(LinkImage, {
        img: "ico-export.svg",
        desc: "내보내기 아이콘",
        className: "ico",
        mdxType: "LinkImage"
    }), " 버튼을 선택하세요."), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `다운로드한 JSON 파일을 다른 멤버에게 전달하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `화면 오른쪽 위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "가져오기 아이콘",
        src: (__webpack_require__(77460)/* ["default"] */ .c),
        width: "24",
        height: "24"
    }), ` `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(Cmdname, {
        sid: "import",
        className: "uitext",
        mdxType: "Cmdname"
    }), ` 버튼을 선택하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ol"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "li"
    }, `JSON 파일을 선택하세요.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `이 기능은 프로젝트의 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `수정`), ` 권한을 소유한 멤버만 이용할 수 있습니다.`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 16140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/flexboard-compare-sharing-copy-389bd549a114f675436900f6d76ff187.png");

/***/ }),

/***/ 77460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZmlsbD0iIzc1NzU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMjBINFY0aDhWMkgydjIwaDIwVjEyaC0ydjh6bS00LjEyNy02Ljk2NGgtMy41MjVMMjIgMy4zODQgMjAuNjE2IDJsLTkuNjUyIDkuNjUyVjguMTI3SDlWMTVoNi44NzN2LTEuOTY0eiI+PC9wYXRoPgo8L3N2Zz4=");

/***/ })

}]);