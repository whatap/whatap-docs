"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[54369],{

/***/ 57142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_static_contentTitle),
  "default": () => (/* binding */ agent_static_MDXContent),
  frontMatter: () => (/* binding */ agent_static_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_static_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_dotnet-static.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*

* **stat_mtrace_enabled** <span class='type'>Boolean</span>

기본값 `false`

멀티 서버 트랜잭션에서 Caller & Callee 간에 버전별 의존성 통계를 수집합니다.

* **stat_mtrace_max_count** <span class='type'>Int</span>

기본값 `7000`

멀티 서버 트랜잭션에서 Caller & Callee 간에 버전별 의존성 통계의 최대 레코드 수입니다.

*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "stat_domain_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "클라이언트의 접속 도메인별 트랜잭션 통계 수집 기능을 활성화합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "stat_domain_max_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "7000"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5분 동안 수집할 도메인별 트랜잭션 통계의 최대 레코드 수입니다."
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "stat_referer_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Referer별 트랜잭션 통계를 수집합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "stat_referer_max_count"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Int"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "7000"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "5분 동안 수집할 Referer별 트랜잭션 통계의 최대 레코드 수입니다."
        }), "\n"]
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


;// CONCATENATED MODULE: ./docs/dotnet/agent-static.mdx


const agent_static_frontMatter = {
	id: 'agent-static',
	title: '통계',
	description: '에이전트가 수집한 데이터의 통계 수집 기능과 관련한 옵션입니다.',
	keywords: [
		'.NET',
		'통계'
	]
};
const agent_static_contentTitle = undefined;
const metadata = {
  "id": "dotnet/agent-static",
  "title": "통계",
  "description": "에이전트가 수집한 데이터의 통계 수집 기능과 관련한 옵션입니다.",
  "source": "@site/docs/dotnet/agent-static.mdx",
  "sourceDirName": "dotnet",
  "slug": "/dotnet/agent-static",
  "permalink": "/whatap-docs/dotnet/agent-static",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/dotnet/agent-static.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-static",
    "title": "통계",
    "description": "에이전트가 수집한 데이터의 통계 수집 기능과 관련한 옵션입니다.",
    "keywords": [
      ".NET",
      "통계"
    ]
  },
  "sidebar": "dotNetSidebar",
  "previous": {
    "title": "사용자 수",
    "permalink": "/whatap-docs/dotnet/agent-number-of-user"
  },
  "next": {
    "title": "토폴로지 맵",
    "permalink": "/whatap-docs/dotnet/agent-topology"
  }
};
const assets = {

};




const agent_static_toc = [...toc];
function agent_static_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트가 수집한 데이터의 통계 수집 기능과 관련한 옵션입니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function agent_static_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_static_createMdxContent, {
      ...props
    })
  }) : agent_static_createMdxContent(props);
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