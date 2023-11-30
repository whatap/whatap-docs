"use strict";
(self["webpackChunkwhatap_origin"] = self["webpackChunkwhatap_origin"] || []).push([[16777],{

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

/***/ 37057:
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
    "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/java/java-2.1.1.mdx",
    "sourceDirName": "release-notes/java",
    "slug": "/release-notes/java/java-2_1_1",
    "permalink": "/en/release-notes/java/java-2_1_1",
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
        value: 'New features',
        id: 'new-features',
        level: 3
    },
    {
        value: 'Sending alert messages upon slow HTTP or SQL',
        id: 'sending-alert-messages-upon-slow-http-or-sql',
        level: 4
    },
    {
        value: 'Adjustment of error levels of transactions and HTTP calls',
        id: 'adjustment-of-error-levels-of-transactions-and-http-calls',
        level: 4
    },
    {
        value: '2022-06-30',
        id: '2022-06-30',
        level: 2
    },
    {
        value: 'Update',
        id: 'update',
        level: 3
    },
    {
        value: 'Modification of the Java agent meta option name',
        id: 'modification-of-the-java-agent-meta-option-name',
        level: 4
    },
    {
        value: 'Bugs',
        id: 'bugs',
        level: 3
    },
    {
        value: 'Fixed the bug upon ID extraction from the container',
        id: 'fixed-the-bug-upon-id-extraction-from-the-container',
        level: 4
    },
    {
        value: '2022-06-22',
        id: '2022-06-22',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-1',
        level: 3
    },
    {
        value: 'Modification of the license key option in the agent settings',
        id: 'modification-of-the-license-key-option-in-the-agent-settings',
        level: 4
    },
    {
        value: '2022-06-16',
        id: '2022-06-16',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-2',
        level: 3
    },
    {
        value: 'Modification of the agent execution logo',
        id: 'modification-of-the-agent-execution-logo',
        level: 4
    },
    {
        value: 'Modified the asynchronous HTTP call error notification message.',
        id: 'modified-the-asynchronous-http-call-error-notification-message',
        level: 4
    },
    {
        value: 'Bugs',
        id: 'bugs-1',
        level: 3
    },
    {
        value: 'Fixed the class signature verification bug',
        id: 'fixed-the-class-signature-verification-bug',
        level: 4
    },
    {
        value: '2022-05-18',
        id: '2022-05-18',
        level: 2
    },
    {
        value: 'New features',
        id: 'new-features-1',
        level: 3
    },
    {
        value: 'Addition of the netstat function',
        id: 'addition-of-the-netstat-function',
        level: 4
    },
    {
        value: 'Update',
        id: 'update-3',
        level: 3
    },
    {
        value: 'Update in error notification settings',
        id: 'update-in-error-notification-settings',
        level: 4
    },
    {
        value: 'Bugs',
        id: 'bugs-2',
        level: 3
    },
    {
        value: 'Fixing the bug upon displaying the agent log',
        id: 'fixing-the-bug-upon-displaying-the-agent-log',
        level: 4
    },
    {
        value: 'Fixed the class detail view error in JDK15.',
        id: 'fixed-the-class-detail-view-error-in-jdk15',
        level: 4
    },
    {
        value: '2022-05-16',
        id: '2022-05-16',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-4',
        level: 3
    },
    {
        value: 'Addition of the error notification message',
        id: 'addition-of-the-error-notification-message',
        level: 4
    },
    {
        value: 'Bugs',
        id: 'bugs-3',
        level: 3
    },
    {
        value: 'Bug that cannot trace the local date when tracing SQLs',
        id: 'bug-that-cannot-trace-the-local-date-when-tracing-sqls',
        level: 4
    },
    {
        value: '2022-05-11',
        id: '2022-05-11',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-5',
        level: 3
    },
    {
        value: 'Addition of the error notification message',
        id: 'addition-of-the-error-notification-message-1',
        level: 4
    },
    {
        value: '2022-04-25',
        id: '2022-04-25',
        level: 2
    },
    {
        value: 'New features',
        id: 'new-features-2',
        level: 3
    },
    {
        value: 'Adding the Alibaba Druid connection pool tracing function',
        id: 'adding-the-alibaba-druid-connection-pool-tracing-function',
        level: 4
    },
    {
        value: 'Adding an alert upon HTTP call error',
        id: 'adding-an-alert-upon-http-call-error',
        level: 4
    },
    {
        value: 'New features',
        id: 'new-features-3',
        level: 3
    },
    {
        value: 'Adding the HTTP call error notification',
        id: 'adding-the-http-call-error-notification',
        level: 4
    },
    {
        value: '2022-03-18',
        id: '2022-03-18',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-6',
        level: 3
    },
    {
        value: 'Saving the database call URL',
        id: 'saving-the-database-call-url',
        level: 4
    },
    {
        value: 'Deletion of the database call hash value',
        id: 'deletion-of-the-database-call-hash-value',
        level: 4
    },
    {
        value: 'New features',
        id: 'new-features-4',
        level: 3
    },
    {
        value: 'Adding the linked service tracing function',
        id: 'adding-the-linked-service-tracing-function',
        level: 4
    },
    {
        value: '2022-02-18',
        id: '2022-02-18',
        level: 2
    },
    {
        value: 'Bugs',
        id: 'bugs-4',
        level: 3
    },
    {
        value: 'Fixing the HTTP error time setting bug',
        id: 'fixing-the-http-error-time-setting-bug',
        level: 4
    },
    {
        value: 'Update',
        id: 'update-7',
        level: 3
    },
    {
        value: 'Adding the display setting for the active stack&#39;s thread name',
        id: 'adding-the-display-setting-for-the-active-stacks-thread-name',
        level: 4
    },
    {
        value: 'Adding the setting to display the asynchronous thread name',
        id: 'adding-the-setting-to-display-the-asynchronous-thread-name',
        level: 4
    },
    {
        value: '2022-02-11',
        id: '2022-02-11',
        level: 2
    },
    {
        value: 'Bugs',
        id: 'bugs-5',
        level: 3
    },
    {
        value: 'Fixing the .x plug-in int recognition error',
        id: 'fixing-the-x-plug-in-int-recognition-error',
        level: 4
    },
    {
        value: 'Fixing the batch agent&#39;s getResultSet error',
        id: 'fixing-the-batch-agents-getresultset-error',
        level: 4
    },
    {
        value: 'Update',
        id: 'update-8',
        level: 3
    },
    {
        value: 'Adding automation options for the filenames including logging',
        id: 'adding-automation-options-for-the-filenames-including-logging',
        level: 4
    },
    {
        value: 'Adding the transaction data from the Java agent to the log',
        id: 'adding-the-transaction-data-from-the-java-agent-to-the-log',
        level: 4
    },
    {
        value: 'Application of HttpClient Timeout and error handling',
        id: 'application-of-httpclient-timeout-and-error-handling',
        level: 4
    },
    {
        value: 'Adding the JMX pool setting',
        id: 'adding-the-jmx-pool-setting',
        level: 4
    },
    {
        value: 'Adding the heapdump file path option',
        id: 'adding-the-heapdump-file-path-option',
        level: 4
    },
    {
        value: 'Modification of the active start part of the batch agent',
        id: 'modification-of-the-active-start-part-of-the-batch-agent',
        level: 4
    },
    {
        value: '2022-01-12',
        id: '2022-01-12',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-9',
        level: 3
    },
    {
        value: 'Adding the number of DB call errors in the real-time statistics',
        id: 'adding-the-number-of-db-call-errors-in-the-real-time-statistics',
        level: 4
    },
    {
        value: 'Adding the HTTP and DB connection&#39;s real-time logs',
        id: 'adding-the-http-and-db-connections-real-time-logs',
        level: 4
    },
    {
        value: 'Display of oname specified in the agent log',
        id: 'display-of-oname-specified-in-the-agent-log',
        level: 4
    },
    {
        value: 'Adding the JDBC URL extraction delimiter',
        id: 'adding-the-jdbc-url-extraction-delimiter',
        level: 4
    },
    {
        value: 'Adding the automatic recognition function upon use of logsink and log4j plug-ins',
        id: 'adding-the-automatic-recognition-function-upon-use-of-logsink-and-log4j-plug-ins',
        level: 4
    },
    {
        value: 'Adding the logsink collection data',
        id: 'adding-the-logsink-collection-data',
        level: 4
    },
    {
        value: '2022-01-03',
        id: '2022-01-03',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-10',
        level: 3
    },
    {
        value: 'Modification of collection monitoring',
        id: 'modification-of-collection-monitoring',
        level: 4
    },
    {
        value: '2021-12-21',
        id: '2021-12-21',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-11',
        level: 3
    },
    {
        value: 'Adding the thread stop setting',
        id: 'adding-the-thread-stop-setting',
        level: 4
    },
    {
        value: 'The item, &quot;Cookie&quot; has been excluded from the HTTP header.',
        id: 'the-item-cookie-has-been-excluded-from-the-http-header',
        level: 4
    },
    {
        value: '2021-12-17',
        id: '2021-12-17',
        level: 2
    },
    {
        value: 'Update',
        id: 'update-12',
        level: 3
    },
    {
        value: 'Adding the weaving setting',
        id: 'adding-the-weaving-setting',
        level: 4
    },
    {
        value: 'Adding the exclusions for the agent environment variables',
        id: 'adding-the-exclusions-for-the-agent-environment-variables',
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
        "id": "new-features"
    }, `New features`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "sending-alert-messages-upon-slow-http-or-sql"
    }, `Sending alert messages upon slow HTTP or SQL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to send alert messages upon slow HTTP or SQL calls.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adjustment-of-error-levels-of-transactions-and-http-calls"
    }, `Adjustment of error levels of transactions and HTTP calls`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `A function has been added to recognize the status of transactions or HTTP calls as normal.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default value
transaction_status_mode=normal
httpc_status_mode=normal

# Ignorance of errors
transaction_status_mode=info
httpc_status_mode=info
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-30"
    }, `2022-06-30`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modification-of-the-java-agent-meta-option-name"
    }, `Modification of the Java agent meta option name`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified the name of the Java agent meta tag option.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default value
agent_meta_tags_enabled=true
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixed-the-bug-upon-id-extraction-from-the-container"
    }, `Fixed the bug upon ID extraction from the container`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the ID extraction bug in the container environment.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-22"
    }, `2022-06-22`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-1"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modification-of-the-license-key-option-in-the-agent-settings"
    }, `Modification of the license key option in the agent settings`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified whatap.conf to use both license and accesskey options.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Same function
license=
accesskey=
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-06-16"
    }, `2022-06-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-2"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modification-of-the-agent-execution-logo"
    }, `Modification of the agent execution logo`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The logo content has been modified while the Java agent is running.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `The Best Observability in Java
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modified-the-asynchronous-http-call-error-notification-message"
    }, `Modified the asynchronous HTTP call error notification message.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The notification message has been modified to display the status code when an asynchronous HTTP call error occurs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs-1"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixed-the-class-signature-verification-bug"
    }, `Fixed the class signature verification bug`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the NullPointException case when requesting to display the class signature in the Agent CONFIG. menu.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-18"
    }, `2022-05-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "new-features-1"
    }, `New features`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "addition-of-the-netstat-function"
    }, `Addition of the netstat function`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the netstat function by using the OSHI library.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-3"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "update-in-error-notification-settings"
    }, `Update in error notification settings`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the settings related to transaction error notification and modified the setting name.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default value
# Whether the error notification is enabled
exception_alert_enabled=false

# Whether the transaction error notification is enabled
exception_alert_service_enabled=false

# Whether the error notification is enabled upon HTTP call
exception_alert_httpc_enabled=false

# Whether the error notification is enabled upon JDBC call
exception_alert_jdbc_enabled=false

# Length of the stack displayed in the error notification message
exception_alert_stack_size=50

# Period of disabling the error notification message = 5 minutes (30000ms)
exception_alert_silent_time=300000

# Status code to ignore in the transaction error notification
status_alert_ignore=403

# url:status_code combinations to ignore in the transaction error notification
status_alert_ignore_set=/api/test/timeout:408

# Status code to ignore in the HTTP call error notification
httpc_status_alert_ignore=408,500

# url:status code combinations to ignore in the HTTP call error notification
httpc_status_url_alert_ignore_set=/api/test/timeout:408
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs-2"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixing-the-bug-upon-displaying-the-agent-log"
    }, `Fixing the bug upon displaying the agent log`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the bug when recording timestamp logs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixed-the-class-detail-view-error-in-jdk15"
    }, `Fixed the class detail view error in JDK15.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the bug of not being able to view class signatures from the agent configuration screen.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-16"
    }, `2022-05-16`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-4"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "addition-of-the-error-notification-message"
    }, `Addition of the error notification message`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Transaction URL has been added to the error notification messages.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs-3"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "bug-that-cannot-trace-the-local-date-when-tracing-sqls"
    }, `Bug that cannot trace the local date when tracing SQLs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the bug where `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `java.time.LocalDate`), ` is not traced.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-05-11"
    }, `2022-05-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-5"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "addition-of-the-error-notification-message-1"
    }, `Addition of the error notification message`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The status code has been added to the error notification message. The number of ignored notifications has been added to the error notification message.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-04-25"
    }, `2022-04-25`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "new-features-2"
    }, `New features`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-alibaba-druid-connection-pool-tracing-function"
    }, `Adding the Alibaba Druid connection pool tracing function`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The function to trace the Alibaba Druid connection pool has been added.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
druid_pool_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-an-alert-upon-http-call-error"
    }, `Adding an alert upon HTTP call error`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to send notifications upon HTTP call error.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
httpc_event_detail_enable=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `2022-03-24`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "new-features-3"
    }, `New features`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-http-call-error-notification"
    }, `Adding the HTTP call error notification`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The function has been added to receive a notification when an error occurs upon HTTP call.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The function can be enabled by setting `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_enabled`), ` to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `. You can receive an error stack as a notification message according to the value specified in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_stack_size`), ` option.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Once the notification is triggered, you can disable the error notification for the period specified in the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `exception_alert_silent_time`), ` option.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
exception_alert_enabled=false
exception_alert_buffer_size=5
exception_alert_stack_size=50

# 5 minutes (30000 ms)
exception_alert_silent_time=300000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-03-18"
    }, `2022-03-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-6"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "saving-the-database-call-url"
    }, `Saving the database call URL`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified to save the database call URL.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "deletion-of-the-database-call-hash-value"
    }, `Deletion of the database call hash value`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Deleted the database call hash value from an error text.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "new-features-4"
    }, `New features`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-linked-service-tracing-function"
    }, `Adding the linked service tracing function`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The linked service status tracing function has been added so that the target IP or service connection status can be checked in liveTail of log monitoring.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `You can enable the function by setting `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_enabled`), ` to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `true`), `, which collects logs with the #RemoteTrace category.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In case of a normal response, the level is ok. In case of error, the level is error.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In case of a normal response, logs are recorded according to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_ok_interval`), `. The default value is 30 seconds.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li", {
        parentName: "ul"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "li"
    }, `In case of an error response, logs are recorded according to `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `logsink_rt_ok_interval`), `. The default value is 5 seconds.`))), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
logsink_rt_enabled=false

logsink_rt_error_interval=5000
logsink_rt_ok_interval=30000
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-18"
    }, `2022-02-18`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs-4"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixing-the-http-error-time-setting-bug"
    }, `Fixing the HTTP error time setting bug`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the bug where an error appears even if the maximum error time is set to 0 when calling an HTTP.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-7"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-display-setting-for-the-active-stacks-thread-name"
    }, `Adding the display setting for the active stack's thread name`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the setting to display the active stack's thread name.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
active_stack_thread_name_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition", {
        "type": "note"
    }, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", {
        parentName: "admonition"
    }, `If the Yard version is low and the value is set to true, the agent connection is disconnected continually due to a protocol error.`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-setting-to-display-the-asynchronous-thread-name"
    }, `Adding the setting to display the asynchronous thread name`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the setting to display the thread ID and name of the asynchronous thread.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
debug_async_thread_enabled=false
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-02-11"
    }, `2022-02-11`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "bugs-5"
    }, `Bugs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixing-the-x-plug-in-int-recognition-error"
    }, `Fixing the .x plug-in int recognition error`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the bug where int values could not be used in the plug-ins that use the x extension.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "fixing-the-batch-agents-getresultset-error"
    }, `Fixing the batch agent's getResultSet error`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Fixed the TraceSQL.getResultSet error of the batch agent.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-8"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-automation-options-for-the-filenames-including-logging"
    }, `Adding automation options for the filenames including logging`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to automatically disable the hooking option when using a file name including the logging string as a plug-in.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-transaction-data-from-the-java-agent-to-the-log"
    }, `Adding the transaction data from the Java agent to the log`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to add transaction data to the log by the Java agent, not by the plug-in.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "application-of-httpclient-timeout-and-error-handling"
    }, `Application of HttpClient Timeout and error handling`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to apply timeout to HttpClient and handle errors upon timeout.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-jmx-pool-setting"
    }, `Adding the JMX pool setting`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The default value of the JMX pool object. An option to determine whether or not to use the data source name of the JMX pool has been added.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If the data source name is registered, the JNDI method is executed. If the name is not registered, the default URL method is executed.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `jmx_pool_dsname_enabled=false
jmx_pool_object="*:type=DataSource,class=*,name=*"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-heapdump-file-path-option"
    }, `Adding the heapdump file path option`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The log-root option has been added to set the heapdump file path.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
log_root=\${WHATAP_HOME}/dump
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modification-of-the-active-start-part-of-the-batch-agent"
    }, `Modification of the active start part of the batch agent`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified the batch agent to leave an active stack on the main thread of the batch process.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-12"
    }, `2022-01-12`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-9"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-number-of-db-call-errors-in-the-real-time-statistics"
    }, `Adding the number of DB call errors in the real-time statistics`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `If an error occurs during database call, the setting has been added to add the number of errors in the real-time statistics.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-http-and-db-connections-real-time-logs"
    }, `Adding the HTTP and DB connection's real-time logs`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The real-time logs have been added for HTTP and DB connections.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "display-of-oname-specified-in-the-agent-log"
    }, `Display of oname specified in the agent log`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Even when oname is specified using the -D option, the setting has been modified to display the agent name instead of the PID in the agent logs.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-jdbc-url-extraction-delimiter"
    }, `Adding the JDBC URL extraction delimiter`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified to truncate based on "?" and ";" when extracting JDBC URL. `), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre"
    }, `Added ";"
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-automatic-recognition-function-upon-use-of-logsink-and-log4j-plug-ins"
    }, `Adding the automatic recognition function upon use of logsink and log4j plug-ins`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Added the function to automatically disable the hooking option when using logsink and log4j plug-ins.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-logsink-collection-data"
    }, `Adding the logsink collection data`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The data collected in logsink has been added. According to the configuration, you can determine whether the transaction ID, login ID, and HTTP host data are to be collected.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `# Default
_logtag_enabled = false         # tag 
logtag_txid_enabled=false       # transation id
logtag_login_enabled=false      # login id
logtag_httphost_enabled=false   # http host
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2022-01-03"
    }, `2022-01-03`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-10"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "modification-of-collection-monitoring"
    }, `Modification of collection monitoring`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `In the manner of hooking an existing collection class, it has been modified to retrieve the collection class data indirectly through CollectionHolder.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `By adding the class that creates the collection to the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `collection_nonstatic_holders`), ` setting, you can see it in the collection map.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `collection_nonstatic_holders=org.apache.catalina.session.ManagerBase
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-21"
    }, `2021-12-21`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-11"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-thread-stop-setting"
    }, `Adding the thread stop setting`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `An item has been added to set whether or not to stop the thread when the thread operation time exceeds the set value. The default values is `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `false`), `.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `auto_thread_kill_enabled=false  # default value
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "the-item-cookie-has-been-excluded-from-the-http-header"
    }, `The item, "Cookie" has been excluded from the HTTP header.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `Modified to exclude the item, "Cookie" from the HTTP header.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `(Previous) cookie,accept,user-agent,referer
(To-be) Cookie,cookie,accept,user-agent,referer
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2", {
        "id": "2021-12-17"
    }, `2021-12-17`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3", {
        "id": "update-12"
    }, `Update`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-weaving-setting"
    }, `Adding the weaving setting`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The weaving setting has been added to trace plug-ins. As the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), ` setting, the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving`), ` or `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `weaving_reserved`), ` setting works the same.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
        parentName: "pre",
        "className": "language-ini",
        "metastring": "title='whatap.conf'",
        "title": "'whatap.conf'"
    }, `weaving=tomcat10
`)), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h4", {
        "id": "adding-the-exclusions-for-the-agent-environment-variables"
    }, `Adding the exclusions for the agent environment variables`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p", null, `The function has been added to exclude from the search items when a specific key value is entered in the environment variable search function. It can be used in connection with the `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_system_enabled`), ` and `, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode", {
        parentName: "p"
    }, `agent_env_jvm_enabled`), ` settings.`), /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre", null, /*#__PURE__*/ (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code", {
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