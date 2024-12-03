"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["83312"], {
"35962": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Apache 및 PHP-FPM 다시 시작 후 적용됩니다."
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"52280": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_agent_network_mdx_f37_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-agent-network-mdx-f37.json
var site_docs_php_agent_network_mdx_f37_namespaceObject = JSON.parse('{"id":"php/agent-network","title":"에이전트 통신 설정","description":"애플리케이션 서버의 통신을 설정하는 방법을 제공합니다.","source":"@site/docs/php/agent-network.mdx","sourceDirName":"php","slug":"/php/agent-network","permalink":"/php/agent-network","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/agent-network.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-network","title":"에이전트 통신 설정","description":"애플리케이션 서버의 통신을 설정하는 방법을 제공합니다.","keywords":["PHP","통신","설정하기","애플리케이션"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"에이전트 기능 제어","permalink":"/php/agent-control-function"},"next":{"title":"에이전트 성능 설정","permalink":"/php/agent-performance"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_php-restart-apply.mdx
var _php_restart_apply = __webpack_require__("35962");
;// CONCATENATED MODULE: ./docs/php/agent-network.mdx


const frontMatter = {
	id: 'agent-network',
	title: '에이전트 통신 설정',
	description: '애플리케이션 서버의 통신을 설정하는 방법을 제공합니다.',
	keywords: [
		'PHP',
		'통신',
		'설정하기',
		'애플리케이션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._php_restart_apply/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "PHP 애플리케이션 서버의 통신을 설정하는 방법을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.server.host"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ip_address"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "127.0.0.1,127.0.0.1"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "에이전트가 수집한 데이터를 전송할 서버를 지정합니다. 수집 서버 이중화로 2개 이상의 IP를 가진 경우 콤마(,)로 분리하여 지정할 수 있습니다. 지정된 IP에는 수집 서버 proxy 데몬이 리스닝 상태로 서비스되어야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.server.port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "tcp_port"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "6600"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수집 서버 PORT를 지정합니다. 포트는 하나만 지정할 수 있으므로 whatap_server_host에 지정된 수집 서버들은 동일 PORT를 사용해야 합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.tcp_so_timeout"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Millisecond"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "60000"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수집 서버와 통신하는 TCP 세션의 Socket Timeout 값을 지정합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.tcp_connection_timeout"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Millisecond"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "5000"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수집 서버와 통신하는 TCP 세션의 Connection Timeout 값을 지정합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.net_send_max_bytes"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Byte"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "5242880"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "수집 서버로 데이터를 전송할 때 한 번에 전송되는 최대 크기를 지정합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "whatap.net_udp_port"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "tcp_port"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "6600"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 에이전트는 트레이서에서 UDP를 통해 수집한 데이터를 수집 서버로 전송합니다. 처음 UDP 서버의 포트를 지정할 수 있습니다. 기본값으로 제공되는 6600포트가 사용 중일 때 이 옵션을 사용합니다. PHP 컴파일 설치로 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "php.ini"
          }), "에 whatap 항목이 있으면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.ini"
          }), "가 아닌 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "php.ini"
          }), "에 추가하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.ZP, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);