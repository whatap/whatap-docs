"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[10335],{

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

/***/ 8159:
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
    id: 'agent-troubleshooting',
    title: '설치 문제 해결',
    description: 'Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.',
    toc_max_heading_level: 2,
    tags: [
        'Java',
        'Troubleshooting',
        '문제 해결'
    ]
};
const contentTitle = undefined;
const metadata = {
    "unversionedId": "java/agent-troubleshooting",
    "id": "java/agent-troubleshooting",
    "title": "설치 문제 해결",
    "description": "Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
    "source": "@site/docs/java/agent-troubleshooting.mdx",
    "sourceDirName": "java",
    "slug": "/java/agent-troubleshooting",
    "permalink": "/whatap-docs/java/agent-troubleshooting",
    "draft": false,
    "editUrl": "undefined/docs/java/agent-troubleshooting.mdx",
    "tags": [
        {
            "label": "Java",
            "permalink": "/whatap-docs/tags/java"
        },
        {
            "label": "Troubleshooting",
            "permalink": "/whatap-docs/tags/troubleshooting"
        },
        {
            "label": "문제 해결",
            "permalink": "/whatap-docs/tags/문제-해결"
        }
    ],
    "version": "current",
    "frontMatter": {
        "id": "agent-troubleshooting",
        "title": "설치 문제 해결",
        "description": "Java 에이전트 설치 시 발생할 수 있는 문제를 확인할 수 있습니다.",
        "toc_max_heading_level": 2,
        "tags": [
            "Java",
            "Troubleshooting",
            "문제 해결"
        ]
    },
    "sidebar": "javaSidebar",
    "previous": {
        "title": "설치 점검 사항",
        "permalink": "/whatap-docs/java/install-check"
    },
    "next": {
        "title": "에이전트 설정",
        "permalink": "/whatap-docs/java/set-agent"
    }
};
const assets = {};
const toc = [
    {
        value: '방화벽 설정 확인',
        id: '방화벽-설정-확인',
        level: 2
    },
    {
        value: 'SpringBoot 2.2 버전 이상, Tomcat JMX가 off 상태',
        id: 'springboot-22-버전-이상-tomcat-jmx가-off-상태',
        level: 2
    },
    {
        value: 'OSGI 프레임워크 사용 애플리케이션 서버의 경우',
        id: 'osgi-프레임워크-사용-애플리케이션-서버의-경우',
        level: 2
    },
    {
        value: 'JBoss AS, Wildfly, JBoss EAP 6.0 이상',
        id: 'jboss-as-wildfly-jboss-eap-60-이상',
        level: 3
    },
    {
        value: 'WebSphere',
        id: 'websphere',
        level: 3
    },
    {
        value: 'Log Manager 관련 에러',
        id: 'log-manager-관련-에러',
        level: 2
    },
    {
        value: 'MBeanServerBuilder 에러가 발생하는 경우',
        id: 'mbeanserverbuilder-에러가-발생하는-경우',
        level: 2
    },
    {
        value: 'Permission 오류가 발생하는 경우',
        id: 'permission-오류가-발생하는-경우',
        level: 2
    },
    {
        value: 'java.io.FilePermission 오류가 발생하는 경우',
        id: 'javaiofilepermission-오류가-발생하는-경우',
        level: 3
    },
    {
        value: 'java.util.PropertyPermission 오류가 발생하는 경우',
        id: 'javautilpropertypermission-오류가-발생하는-경우',
        level: 3
    },
    {
        value: 'Sigar library를 로딩하지 못하는 경우',
        id: 'sigar-library를-로딩하지-못하는-경우',
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
        "id": "방화벽-설정-확인"
    }, `방화벽 설정 확인`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `와탭의 데이터 수집 서버에 대한 TCP 아웃바운드 정책을 설정하지 않으면 모니터링 정보를 전송할 수 없습니다. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `방화벽 차단`), `을 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, `해제`), `하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `telnet`), ` 명령을 사용해 "Connected to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "p"
    }, `IP`), `"를 확인하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-sh"
    }, `$ telnet 52.193.60.176 6600
Trying 52.193.60.176...
Connected to 52.193.60.176.
Escape character is '^]'.
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", {
        parentName: "admonition"
    }, `수집 서버 정보는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://service.whatap.io/"
    }, `와탭 모니터링 서비스`), `에서 해당 프로젝트를 선택한 다음 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `관리`)), ` > `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("strong", {
        parentName: "p"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "strong"
    }, `에이전트 설치`)), ` 메뉴에서 확인할 수 있습니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "springboot-22-버전-이상-tomcat-jmx가-off-상태"
    }, `SpringBoot 2.2 버전 이상, Tomcat JMX가 off 상태`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `SpringBoot 2.2 버전 이상에서 Embedded Tomcat을 사용하는 경우 기본값으로 JMX 관련 기능이 동작하지 않습니다. 이 경우 JMX 기능을 활성화하세요. `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "p",
        "href": "https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.2-Release-Notes#jmx-now-disabled-by-default"
    }, `관련 링크`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-properties",
        "metastring": "title='application.properties'",
        "title": "'application.properties'"
    }, `spring.jmx.enabled=true
server.tomcat.mbeanregistry.enabled=true # tomcat embedded인 경우 #
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-yml",
        "metastring": "title='application.yml'",
        "title": "'application.yml'"
    }, `spring:
  jmx:
    enabled: true
server:
  tomcat:
    mbeanregistry:
      enabled: true #tomcat embedded인 경우
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "osgi-프레임워크-사용-애플리케이션-서버의-경우"
    }, `OSGI 프레임워크 사용 애플리케이션 서버의 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `OSGI 프레임워크 구조의 애플리케이션 서버인 경우 JVM 옵션에 에이전트 패키지 prefix(whatap)를 등록하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Jboss EAP 6.0 버전 이상, Jboss AS 7.0 버전 이상, Wildfly 8.0 버전 이상, IBM WebSphere AS 7.0 버전 이상 등이 해당합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "jboss-as-wildfly-jboss-eap-60-이상"
    }, `JBoss AS, Wildfly, JBoss EAP 6.0 이상`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음 파일에 prefix를 등록하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-apacheconf",
        "metastring": "title='$JBOSS_HOME/bin/standalone.conf(domain.conf)'",
        "title": "'$JBOSS_HOME/bin/standalone.conf(domain.conf)'"
    }, `-Djboss.modules.system.pkgs=whatap
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        parentName: "p",
        "src": "https://img.whatap.io/media/agent_java/install/410.png",
        "alt": "JBOSS EAP 7.0"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "websphere"
    }, `WebSphere`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `JVM 옵션으로 다음 내용을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `-Dcom.ibm.ws.classloader.server.alwaysAllowedPackages=whatap
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `기본값으로 '*'로 지정된 경우 별도 설정이 필요 없습니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, `설정 위치는 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a", {
        parentName: "li",
        "href": "add-jvm-opt/websphere"
    }, `WebSphere`), `를 참조합니다.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `security.policy`), ` 권한을 다음과 같이 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-java",
        "metastring": "title='$WEBSPHERE_HOME/properties/server.policy || $WEBSPHERE_PROFILE_HOME/properties/server.policy'",
        "title": "'$WEBSPHERE_HOME/properties/server.policy",
        "||": true,
        "$WEBSPHERE_PROFILE_HOME/properties/server.policy'": true
    }, `grant codeBase "file:$WHATAP_HOME/-"
{
   permission java.security.AllPermission;
};
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "log-manager-관련-에러"
    }, `Log Manager 관련 에러`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `JBoss AS 7.0 버전 이상, JBoss EAP 6.0 버전 이상에서 Log Manager 관련 에러가 발생한다면 JVM 옵션을 추가합니다.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "li"
    }, `-Djava.util.logging.manager`), ` 항목에 Log Manager package 명을 설정하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("inlineCode", {
        parentName: "li"
    }, `-Xbootclassloader`), ` 항목에 JBoss Log Manager JAR file을 설정하세요.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-apacheconf",
        "metastring": "title='(JBoss_Path)/bin/standalone.conf(domain.conf)' {4,12,13} showLineNumbers",
        "title": "'(JBoss_Path)/bin/standalone.conf(domain.conf)'",
        "{4,12,13}": true,
        "showLineNumbers": true
    }, `# Specify the exact Java VM executable to use.
#
if [ "x$JBOSS_MODULES_SYSTEM_PKGS" = "x" ]; then
    JBOSS_MODULES_SYSTEM_PKGS="org.jboss.byteman,org.jboss.logmanager,whatap"
fi

...
# Specify options to pass to the Java VM.
#
if [ "x$JAVA_OPTS" = "x" ]; then
    JAVA_OPTS="-Xms1303m -Xmx1303m -Djava.net.preferIPv4Stack=true"
    JAVA_OPTS="$JAVA_OPTS -Djboss.modules.system.pkgs=$JBOSS_MODULES_SYSTEM_PKGS -Djava.awt.headless=true"
    JAVA_OPTS="$JAVA_OPTS -Djava.util.logging.manager=org.jboss.logmanager.LogManager -Xbootclasspath/p:/home/vagrant/EAP-7.0.0/modules/system/layers/base/org/jboss/logmanager/main/jboss-logmanager-2.0.3.Final-redhat-1.jar"
else
    echo "JAVA_OPTS already set in environment; overriding default settings with values: $JAVA_OPTS"
fi
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "mbeanserverbuilder-에러가-발생하는-경우"
    }, `MBeanServerBuilder 에러가 발생하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `JBoss 5.0 버전 이하에서 MBeanServerBuilder 관련 에러가 출력된 경우 JVM 옵션을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-apacheconf",
        "metastring": "title='(JBoss_Path)/bin/run.conf' {5} showLineNumbers",
        "title": "'(JBoss_Path)/bin/run.conf'",
        "{5}": true,
        "showLineNumbers": true
    }, `# Specify options to pass to the Java VM.
#
if [ "x$JAVA_OPTS" = "x" ]; then
   JAVA_OPTS="-Xms128m -Xmx512m -XX:MaxPermSize=256m -Dorg.jboss.resolver.warning=true -Dsun.rmi.dgc.client.gcInterval=3600000 -Dsun.rmi.dgc.server.gcInterval=3600000"
   JAVA_OPTS="$JAVA_OPTS -Djboss.platform.mbeanserver"
fi
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "permission-오류가-발생하는-경우"
    }, `Permission 오류가 발생하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `Java Security Policy 관련 오류가 발생하면 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `$JAVA_HOME/jre/lib/security/java.policy`), ` 파일에 권한 설정을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `모든 권한을 일괄 적용하려면 다음과 같이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `java.policy`), ` 파일에 설정을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-java",
        "metastring": "title='$JAVA_HOME/jre/lib/security/java.policy'",
        "title": "'$JAVA_HOME/jre/lib/security/java.policy'"
    }, `grant {
   permission java.security.AllPermission;
};
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "javaiofilepermission-오류가-발생하는-경우"
    }, `java.io.FilePermission 오류가 발생하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "java.io.FilePermision error",
        src: (__webpack_require__(40618)/* ["default"] */ .A),
        width: "883",
        height: "185"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음과 같이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `java.policy`), ` 파일에 설정을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-java",
        "metastring": "title='$JAVA_HOME/jre/lib/security/java.policy'",
        "title": "'$JAVA_HOME/jre/lib/security/java.policy'"
    }, `grant {
   ...
   permission java.io.FilePermission {오류 메시지에서 확인된 패키지 경로}, "read"
};
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h3", {
        "id": "javautilpropertypermission-오류가-발생하는-경우"
    }, `java.util.PropertyPermission 오류가 발생하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `다음과 같이 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `java.policy`), ` 파일에 설정을 추가하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-java",
        "metastring": "title='$JAVA_HOME/jre/lib/security/java.policy'",
        "title": "'$JAVA_HOME/jre/lib/security/java.policy'"
    }, `grant {
   ...
   permission java.util.PropertyPermission {오류 메시지에서 확인된 패키지 경로}, "read"
};
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2", {
        "id": "sigar-library를-로딩하지-못하는-경우"
    }, `Sigar library를 로딩하지 못하는 경우`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", null, "$WHATAP_HOME/lib1/*.so"), " 파일에 실행 권한이 있는지 확인하세요. 권한이 없다면 실행 권한을 부여하세요.", /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `$ sudo chmod +x *.so
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, `AIX 7에서 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `$WHATAP_HOME/lib1`), ` 하위에 `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("em", {
        parentName: "p"
    }, `libsigar-ppc64-aix-7.so`), ` 파일이 없어 오류가 발생한 경우 파일을 복사하세요.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("img", {
        alt: "Sigar library error on AIX 7",
        src: (__webpack_require__(16923)/* ["default"] */ .A),
        width: "883",
        height: "185"
    })), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("code", {
        parentName: "pre",
        "className": "language-bash"
    }, `$ cp libsigar-ppc64-aix-5.so libsigar-ppc64-aix-7.so
`)));
}
MDXContent.isMDXComponent = true;


/***/ }),

/***/ 40618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-permission-error-4d8210609932d8b7a2d2121045758cd9.png");

/***/ }),

/***/ 16923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/troubleshooting-sigar-error-4d8210609932d8b7a2d2121045758cd9.png");

/***/ })

}]);