"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[25615],{

/***/ 81896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_network_contentTitle),
  "default": () => (/* binding */ agent_network_MDXContent),
  frontMatter: () => (/* binding */ agent_network_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_network_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_donet-network.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
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
        children: "에이전트가 수집한 데이터를 전송할 서버를 설정합니다. 수집 서버 이중화로 2개 이상의 IP 주소를 가진 경우 쉼표(,)를 구분자로 이용하세요. 설정한 IP 주소에는 수집 서버 proxy 서버가 리스닝(Listening) 상태로 서비스돼야 합니다."
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
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["수집 서버 포트를 설정합니다. 포트는 하나만 설정할 수 있으므로 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.server.host"
        }), " 옵션에 설정한 수집 서버들은 동일 포트를 사용해야 합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tcp_so_timeout"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "60000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "수집 서버와 통신하는 TCP 세션의 Socket Timeout 값을 설정합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tcp_connection_timeout"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "수집 서버와 통신하는 TCP 세션의 Connection Timeout 값을 설정합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_max_bytes"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Byte"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5242880"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트가 데이터를 수집하고 네트워크로 한 번에 전송할 수 있는 최대 byte 크기입니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_udp_port"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "tcp_port"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "6600"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 에이전트는 트레이서에서 UDP를 통해 수집한 데이터를 수집 서버로 전송합니다. 처음 UDP 서버의 포트를 지정할 수 있습니다. 기본값으로 제공되는 6600포트가 사용 중일 때 이 옵션을 사용합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "설정한 값을 적용하려면 IIS를 다시 시작하세요."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_queue1_size"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "256"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "TCP 데이터 처리를 위한 Queue 버퍼를 설정합니다. 우선 순위가 높은 데이터를 위한 Queue입니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "net_send_queue2_size"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "TCP 데이터 처리를 위한 Queue 버퍼를 설정합니다. 트레이스 데이터를 위한 Queue입니다."
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


;// CONCATENATED MODULE: ./docs/dotnet/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: '에이전트 통신 설정',
	description: '에이전트와 서버 간의 연결에 관한 설정입니다.',
	tags: [
		'.NET',
		'통신',
		'네트워크'
	]
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "dotnet/agent-network",
  "title": "에이전트 통신 설정",
  "description": "에이전트와 서버 간의 연결에 관한 설정입니다.",
  "source": "@site/docs/dotnet/agent-network.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/agent-network",
  "permalink": "/whatap-docs/dotnet/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/agent-network.mdx",
  "tags": [
    {
      "inline": true,
      "label": ".NET",
      "permalink": "/whatap-docs/tags/net"
    },
    {
      "inline": true,
      "label": "통신",
      "permalink": "/whatap-docs/tags/통신"
    },
    {
      "inline": true,
      "label": "네트워크",
      "permalink": "/whatap-docs/tags/네트워크"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "에이전트 통신 설정",
    "description": "에이전트와 서버 간의 연결에 관한 설정입니다.",
    "tags": [
      ".NET",
      "통신",
      "네트워크"
    ]
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "에이전트 기능 제어",
    "permalink": "/whatap-docs/dotnet/agent-control-function"
  },
  "next": {
    "title": "에이전트 성능",
    "permalink": "/whatap-docs/dotnet/agent-performance"
  }
};
const assets = {

};




const agent_network_toc = [...toc];
function agent_network_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트가 수집한 데이터를 전송할 서버와의 통신하기 위한 네트워크 설정 옵션입니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function agent_network_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_network_createMdxContent, {
      ...props
    })
  }) : agent_network_createMdxContent(props);
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