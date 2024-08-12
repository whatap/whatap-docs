"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[20645],{

/***/ 48538:
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'telegraf-usage',
	title: 'Usage examples',
	description: 'It guides you to use cases.',
	tags: [
		'Telegraf',
		'Usage examples'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "telegraf/telegraf-usage",
  "title": "Usage examples",
  "description": "It guides you to use cases.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/telegraf/telegraf-usage.mdx",
  "sourceDirName": "telegraf",
  "slug": "/telegraf/telegraf-usage",
  "permalink": "/en/telegraf/telegraf-usage",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/telegraf/telegraf-usage.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Telegraf",
      "permalink": "/en/tags/telegraf"
    },
    {
      "inline": true,
      "label": "Usage examples",
      "permalink": "/en/tags/usage-examples"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "telegraf-usage",
    "title": "Usage examples",
    "description": "It guides you to use cases.",
    "tags": [
      "Telegraf",
      "Usage examples"
    ]
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "Management",
    "permalink": "/en/telegraf/manage"
  }
};
const assets = {

};



const toc = [{
  "value": "SNMP",
  "id": "snmp",
  "level": 2
}, {
  "value": "SNMP Trap",
  "id": "snmp-trap",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["For more information about Telegraf, see the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.influxdata.com/telegraf/v1.24/",
        children: "Telegraf documentation"
      }), " for influxdata."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Telegraf plug-ins and agents must have been installed and configured directly on the service."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "snmp",
        children: "SNMP"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["SNMP performance data can be collected and charted in real time using the SNMP input plug-in. The collected data can be retrieved by ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "telegraf_snmp"
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "telegraf_interface"
        }), " categories."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-batch",
          metastring: "title='Linux Shell'",
          children: "cat >/etc/telegraf/telegraf.d/snmp_device.conf <<EOL\r\n[[inputs.snmp]]\r\n  ## Agent addresses to retrieve values from.\r\n  ##   format:  agents = [\"<scheme://><hostname>:<port>\"]\r\n  ##   scheme:  optional, either udp, udp4, udp6, tcp, tcp4, tcp6.\r\n  ##            default is udp\r\n  ##   port:    optional\r\n  ##   example: agents = [\"udp://127.0.0.1:161\"]\r\n  ##            agents = [\"tcp://127.0.0.1:161\"]\r\n  ##            agents = [\"udp4://v4only-snmp-agent\"]\r\n\r\n  agents = [\"udp://1.1.1.1:161\"]\r\n\r\n  ## Timeout for each request.\r\n  # timeout = \"5s\"\r\n\r\n  ## SNMP version; can be 1, 2, or 3.\r\n   version = 2\r\n\r\n  ## SNMP community string.\r\n   community = \"xxxx@xxxxx\"\r\n\r\n  ## Agent host tag\r\n  # agent_host_tag = \"agent_host\"\r\n\r\n  ## Number of retries to attempt.\r\n  # retries = 3\r\n\r\n  ## The GETBULK max-repetitions parameter.\r\n  # max_repetitions = 10\r\n\r\n  ## SNMPv3 authentication and encryption options.\r\n  ##\r\n  ## Security Name.\r\n  # sec_name = \"myuser\"\r\n  ## Authentication protocol; one of \"MD5\", \"SHA\", \"SHA224\", \"SHA256\", \"SHA384\", \"SHA512\" or \"\".\r\n  # auth_protocol = \"MD5\"\r\n  ## Authentication password.\r\n  # auth_password = \"pass\"\r\n  ## Security Level; one of \"noAuthNoPriv\", \"authNoPriv\", or \"authPriv\".\r\n  # sec_level = \"authNoPriv\"\r\n  ## Context Name.\r\n  # context_name = \"\"\r\n  ## Privacy protocol used for encrypted messages; one of \"DES\", \"AES\", \"AES192\", \"AES192C\", \"AES256\", \"AES256C\", or \"\".\r\n  ### Protocols \"AES192\", \"AES192\", \"AES256\", and \"AES256C\" require the underlying net-snmp tools\r\n  ### to be compiled with --enable-blumenthal-aes (http://www.net-snmp.org/docs/INSTALL.html)\r\n  # priv_protocol = \"\"\r\n  ## Privacy password used for encrypted messages.\r\n  # priv_password = \"\"\r\n\r\n  ## Add fields and tables defining the variables you wish to collect.  This\r\n  ## example collects the system uptime and interface variables.  Reference the\r\n  ## full plugin documentation for configuration details.\r\n  [[inputs.snmp.field]]\r\n    oid = \"RFC1213-MIB::sysUpTime.0\"\r\n    name = \"uptime\"\r\n\r\n  [[inputs.snmp.field]]\r\n    oid = \"RFC1213-MIB::sysName.0\"\r\n    name = \"source\"\r\n    is_tag = true\r\n\r\n  [[inputs.snmp.table]]\r\n    oid = \"IF-MIB::ifXTable\"\r\n    name = \"interface\"\r\n    inherit_tags = [\"source\"]\r\n\r\n  [[inputs.snmp.table.field]]\r\n    oid = \"IF-MIB::ifDescr\"\r\n    name = \"ifDescr\"\r\n    is_tag = true\r\n\r\n  [[aggregators.derivative]]\r\n    period = \"60s\"\r\n    max_roll_over = 1\r\n\r\n    fieldpass = [\"*Octets\", \"*Pkts\"]\r\n    drop_original = false\r\n\r\n  [aggregators.derivative.tags]\r\n    aggr = \"derivative\"\r\n\r\n[[processors.starlark]]\r\n  source = '''\r\ndef apply(metric):\r\n    for (k, v) in metric.fields.items():\r\n        if k.endswith('Octets_rate'):\r\n            metric.fields[k] *= 8\r\n\r\n    return metric\r\n\r\n'''\r\n\r\nEOL\r\nservice telegraf restart\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "snmp-trap",
        children: "SNMP Trap"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Using the SNMP Trap input plug-in, SNMP Trap events can be collected in real time and propagated via emails, text messages, and messengers. The collected data can be retrieved by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "telegraf_snmp_trap"
        }), " category."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-batch",
          metastring: "title='Linux Shell'",
          children: "cat >/etc/telegraf/telegraf.d/snmp_trap.conf <<EOL\r\n[[inputs.snmp_trap]]\r\n  service_address = \"udp://:162\"\r\nEOL\r\nservice telegraf restart\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);