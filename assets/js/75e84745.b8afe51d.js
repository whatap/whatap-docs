"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[11638],{

/***/ 54019:
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
	id: 'agent-transaction-error-stack',
	title: '트랜잭션 에러 스택',
	description: '자바(Java) 애플리케이션에서 트랜잭션 중 발생하는 에러를 감지하고 이에 대한 스택 트레이스를 표시하는 에이전트 설정 옵션을 안내합니다. 트랜잭션, 메소드, SQL, HTTP 호출, SOCKET 호출 등 다양한 영역에서 에러 정보를 수집하고, 에러 스택의 길이, 제목 길이 등을 설정하는 방법을 포함합니다. 에이전트 설정을 통해 에러 관리를 개선하고, 애플리케이션의 오류 진단을 보다 효율적으로 수행할 수 있도록 지원합니다.',
	tags: [
		'Java',
		'애플리케이션',
		'에이전트',
		'Transaction',
		'트랜잭션'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/agent-transaction-error-stack",
  "title": "트랜잭션 에러 스택",
  "description": "자바(Java) 애플리케이션에서 트랜잭션 중 발생하는 에러를 감지하고 이에 대한 스택 트레이스를 표시하는 에이전트 설정 옵션을 안내합니다. 트랜잭션, 메소드, SQL, HTTP 호출, SOCKET 호출 등 다양한 영역에서 에러 정보를 수집하고, 에러 스택의 길이, 제목 길이 등을 설정하는 방법을 포함합니다. 에이전트 설정을 통해 에러 관리를 개선하고, 애플리케이션의 오류 진단을 보다 효율적으로 수행할 수 있도록 지원합니다.",
  "source": "@site/docs/java/agent-transaction-error-stack.mdx",
  "sourceDirName": "java",
  "slug": "/java/agent-transaction-error-stack",
  "permalink": "/whatap-docs/java/agent-transaction-error-stack",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/agent-transaction-error-stack.mdx",
  "tags": [
    {
      "label": "Java",
      "permalink": "/whatap-docs/tags/java"
    },
    {
      "label": "애플리케이션",
      "permalink": "/whatap-docs/tags/애플리케이션"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    },
    {
      "label": "Transaction",
      "permalink": "/whatap-docs/tags/transaction"
    },
    {
      "label": "트랜잭션",
      "permalink": "/whatap-docs/tags/트랜잭션"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction-error-stack",
    "title": "트랜잭션 에러 스택",
    "description": "자바(Java) 애플리케이션에서 트랜잭션 중 발생하는 에러를 감지하고 이에 대한 스택 트레이스를 표시하는 에이전트 설정 옵션을 안내합니다. 트랜잭션, 메소드, SQL, HTTP 호출, SOCKET 호출 등 다양한 영역에서 에러 정보를 수집하고, 에러 스택의 길이, 제목 길이 등을 설정하는 방법을 포함합니다. 에이전트 설정을 통해 에러 관리를 개선하고, 애플리케이션의 오류 진단을 보다 효율적으로 수행할 수 있도록 지원합니다.",
    "tags": [
      "Java",
      "애플리케이션",
      "에이전트",
      "Transaction",
      "트랜잭션"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "토폴로지 맵",
    "permalink": "/whatap-docs/java/agent-toplogy"
  },
  "next": {
    "title": "부가 기능",
    "permalink": "/whatap-docs/java/agent-additional-option"
  }
};
const assets = {

};



const toc = [{
  "value": "에이전트 설정",
  "id": "에이전트-설정",
  "level": 2
}, {
  "value": "전체 설정",
  "id": "전체-설정",
  "level": 3
}, {
  "value": "메소드",
  "id": "메소드",
  "level": 3
}, {
  "value": "SQL",
  "id": "sql",
  "level": 3
}, {
  "value": "HTTP Call",
  "id": "http-call",
  "level": 3
}, {
  "value": "SOCKET",
  "id": "socket",
  "level": 3
}, {
  "value": "트랜잭션",
  "id": "트랜잭션",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "자바(Java) 애플리케이션에서 트랜잭션 중 발생하는 에러를 감지하고 이에 대한 스택 트레이스를 표시하는 에이전트 설정 옵션을 안내합니다. 트랜잭션, 메소드, SQL, HTTP 호출, SOCKET 호출 등 다양한 영역에서 에러 정보를 수집하고, 에러 스택의 길이, 제목 길이 등을 설정하는 방법을 포함합니다. 에이전트 설정을 통해 에러 관리를 개선하고, 애플리케이션의 오류 진단을 보다 효율적으로 수행할 수 있도록 지원합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["호출 서비스의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "status_code"
      }), "와는 무관하며, 여러 개의 에러 발생 시 에러 스택은 첫번째 에러 스택만 표시합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["이 문서에서 안내하는 에이전트 설정은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Java 에이전트 2.2.15"
        }), " 버전 이상에서 지원합니다."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "에이전트-설정",
      children: "에이전트 설정"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "전체-설정",
      children: "전체 설정"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# 에러 스택 표시 여부\ntrace_exception_stack=false\n\n# 에러 스택 길이의 기본값\ntrace_exception_depth=50\n\n# 에러 스택 메시지 제목의 길이\ntrace_exception_title_len=128\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "메소드",
      children: "메소드"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# 메소드 에러 스택 표시 여부\n# trace_exception_stack 값을 따라가며 별도로 true/false 값으로 기능을 켜거나 끌 수 있습니다.\ntrace_method_error_stack=trace_exception_stack\n\n# 메소드 에러 스택 길이\n# trace_exception_depth 값을 따라가며 별도로 설정할 수 있습니다.\ntrace_method_error_depth=trace_exception_depth\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "sql",
      children: "SQL"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# SQL 에러 스택 표시 여부\n# trace_exception_stack 값을 따라가며 별도로 true/false 값으로 기능을 켜거나 끌 수 있습니다.\ntrace_sql_error_stack=trace_exception_stack\n\n# sql 에러 스택 길이\n# trace_exception_depth 값을 따라가며 별도로 설정할 수 있습니다.\ntrace_sql_error_depth=trace_exception_depth\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "http-call",
      children: "HTTP Call"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# http call 에러 스택 표시 여부\n# trace_exception_stack 값을 따라가며 별도로 true/false 값으로 기능을 켜거나 끌 수 있습니다.\ntrace_httpc_error_stack=trace_exception_stack\n\n# http call 에러 스택 길이\n# trace_exception_depth 값을 따라가며 별도로 설정할 수 있습니다.\ntrace_httpc_error_depth=trace_exception_depth\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "socket",
      children: "SOCKET"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# socket 에러 스택 표시 여부\n# trace_exception_stack 값을 따라가며 별도로 true/false 값으로 기능을 켜거나 끌 수 있습니다.\ntrace_socket_error_stack=trace_exception_stack\n\n# socket 에러 스택 길이\n# trace_exception_depth 값을 따라가며 별도로 설정할 수 있습니다.\ntrace_socket_error_depth=trace_exception_depth\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
      id: "트랜잭션",
      children: "트랜잭션"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "# 트랜잭션 에러 스택 표시 여부\n# trace_exception_stack 값을 따라가며 별도로 true/false값으로 기능을 켜거나 끌 수 있습니다.\ntrace_endtx_error_stack=trace_exception_stack\n\n# 트랜잭션 에러 스택 길이\n# trace_exception_depth 값을 따라가며 별도로 설정할 수 있습니다.\ntrace_endtx_error_depth=trace_exception_depth\n"
      })
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