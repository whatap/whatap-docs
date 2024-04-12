"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[71086],{

/***/ 41663:
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
;// CONCATENATED MODULE: ./docs/common-items/_common-network-security.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Network &amp; security",
  "id": "network--security",
  "level": 2
}, {
  "value": "수집 서버 주소와 포트",
  "id": "수집-서버-주소와-포트",
  "level": 3
}, {
  "value": "통신 연결 및 보안",
  "id": "통신-연결-및-보안",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "network--security",
        children: "Network & security"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭은 에이전트에 서버 방향을 TCP 연결 후 모니터링 데이터를 전송합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_node/agent_net.png",
          alt: "와탭 에이전트 네트워크"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트는 하나의 TCP 세션을 통해서 데이터 전송과 서버의 제어 요청을 처리합니다. Node 에이전트는 UDP를 사용하지 않습니다. Node 에이전트에서 와탭 수집 서버 방향으로 방화벽을 개방합니다."
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "수집-서버-주소와-포트",
        children: "수집 서버 주소와 포트"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 서버는 데이터 리전 서버와 프론트 서버, 유레카 등으로 구분합니다. 데이터 리전에는 다시 Proxy, Yard, Gateway, Keeper 등이 있습니다. 에이전트는 그중에 Proxy 서버와 통신을 합니다."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Node 에이전트에 와탭 서버의 proxy 서버의 주소를 설정합니다.(예, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.server.host=10.0.3.1/10.0.3.2"
        }), ") 서버 주소를 설정할 때는 proxy 서버 숫자만큼 입력합니다. 와탭 서버는 설치 방식에 따라서 proxy 서버를 1개 또는 여러 개를 사용할 수 있습니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 Proxy 서버는 6600 포트에서 리스닝(Listening)합니다. 에이전트에서 별도 설정을 하지 않으면 에이전트는 6600 포트로 접속을 시도합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "whatap.server.port=6600\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "두 개의 Proxy 서버가 서로 상이한 포트를 사용할 수 없습니다. 여러 대의 Proxy 서버를 사용하는 경우 리스닝(Listening) 포트는 동일해야 합니다."
        })
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "통신-연결-및-보안",
        children: "통신 연결 및 보안"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭은 퍼블릭 네트워크에서 모니터링 데이터를 수집하는 것을 전제로 설계했습니다. 따라서 모든 모니터링 데이터를 암호화해 서버로 전송합니다. 많은 데이터를 암호화 전송하면 오버헤드를 유발할 수도 있습니다. 와탭은 데이터를 선별적으로 암호화합니다. 에이전트와 서버 사이의 통신 과정은 다음과 같습니다."
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["프로젝트 생성 메뉴에서 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          }), "를 생성하고 복사하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          }), "에는 비밀키를 포함합니다. 외부에 알려지지 않도록 주의하세요."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "애플리케이션 서버를 다시 시작하세요."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "와탭 에이전트는 서버로 TCP 세션을 연결합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 액세스 키"
          }), "에 포함된 통신용 비밀키를 가지고 데이터를 암호화해 새로운 세션용 보안 키를 요청합니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "서버는 에이전트가 요청한 세션용 보안 키를 새로 만들어 에이전트에 내려보냅니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "세션용 보안키는 2개의 암호 키를 포함하고 있습니다. ASC 알고리즘용 암호 키와 단순 암호를 위한 암호 키입니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "이후에 에이전트는 텍스트와 제어 등 중요한 데이터는 ASC 암호 키를 사용합니다. 숫자 데이터와 같이 상대적으로 안전한 데이터는 단순 암호화를 거쳐 데이터를 서버에 전송합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "변경 사항을 적용하려면 서버를 재시작하세요."
        })
      }), "\n"]
    })]
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


;// CONCATENATED MODULE: ./docs/server/agent-network.mdx


const agent_network_frontMatter = {
	id: 'agent-network',
	title: '에이전트 통신 설정',
	description: '에이전트와 서버 간의 연결에 관한 설정입니다.',
	tags: [
		'Server',
		'에이전트',
		'통신 설정'
	]
};
const agent_network_contentTitle = undefined;
const metadata = {
  "id": "server/agent-network",
  "title": "에이전트 통신 설정",
  "description": "에이전트와 서버 간의 연결에 관한 설정입니다.",
  "source": "@site/docs/server/agent-network.mdx",
  "sourceDirName": "server",
  "slug": "/server/agent-network",
  "permalink": "/whatap-docs/server/agent-network",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/agent-network.mdx",
  "tags": [
    {
      "label": "Server",
      "permalink": "/whatap-docs/tags/server"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    },
    {
      "label": "통신 설정",
      "permalink": "/whatap-docs/tags/통신-설정"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-network",
    "title": "에이전트 통신 설정",
    "description": "에이전트와 서버 간의 연결에 관한 설정입니다.",
    "tags": [
      "Server",
      "에이전트",
      "통신 설정"
    ]
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "에이전트 이름 식별",
    "permalink": "/whatap-docs/server/agent-name"
  },
  "next": {
    "title": "윈도우 성능 카운터 설정",
    "permalink": "/whatap-docs/server/agent-pcounter"
  }
};
const assets = {

};




const agent_network_toc = [...toc];
function agent_network_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
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