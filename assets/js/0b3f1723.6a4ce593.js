"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[15007],{

/***/ 70357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ control_function_contentTitle),
  "default": () => (/* binding */ control_function_MDXContent),
  frontMatter: () => (/* binding */ control_function_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ control_function_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_nodejs-control-function.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





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
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["전체 기능을 활성화합니다. 단, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "가 되어도 서버와 최소한의 통신을 유지하기 위한 정보는 전송합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "transaction_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트랜잭션 추적 기능을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면 무시합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "counter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["성능 카운터(트랜잭션, 리소스 등) 추적을 활성화합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면 무시합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["통계 정보 추적 기능을 활성화합니다. 5분 단위로 수집하는 트랜잭션, SQL, HTTPCALL, UserAgent, Client IP 등의 통계 데이터 등이 해당합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "이면 무시합니다."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "license"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트 설치 시 서버로부터 부여받은 액세스 키를 입력합니다. 액세스 키에는 에이전트가 속한 프로젝트와 보안 통신을 위한 암호 키를 포함합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "encrypt_level"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "encrypt_level [1, 2, 3]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭 에이전트는 서버로 데이터를 전송할 때 데이터 속성에 따라 선택적으로 암호화합니다. 높은 보안을 유지하면서도 성능상 이점을 가지고 있습니다. 데이터 유형에 상관 없이 일괄적인 암호화 정책을 적용하려면 다음 옵션을 참조하세요."
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), ": 암호화 전송 기능 사용 안함"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "2"
          }), ": SQL 파라미터, Plain Text와 같은 민감한 속성에 대한 암호화 전송"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "3"
          }), ": 모든 항목에 대한 암호화 전송"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "realtime_user_thinktime_max"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "실시간 브라우저 사용자 수를 측정할 경우 동일 사용자로 인정되는 최대 호출 간격을 설정합니다."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "time_sync_interval_ms"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트와 서버 간 동기화하는 시간 간격을 설정합니다. 동기화하지 않을 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), "으로 설정하세요."]
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


;// CONCATENATED MODULE: ./docs/nodejs/control-function.mdx


const control_function_frontMatter = {
	id: 'agent-control-function',
	title: '에이전트 기능 제어',
	description: 'Node.js 애플리케이션 서버의 기능을 제어할 수 있습니다.',
	tags: [
		'Node.js'
	]
};
const control_function_contentTitle = undefined;
const metadata = {
  "id": "nodejs/agent-control-function",
  "title": "에이전트 기능 제어",
  "description": "Node.js 애플리케이션 서버의 기능을 제어할 수 있습니다.",
  "source": "@site/docs/nodejs/control-function.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/agent-control-function",
  "permalink": "/whatap-docs/nodejs/agent-control-function",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/control-function.mdx",
  "tags": [
    {
      "label": "Node.js",
      "permalink": "/whatap-docs/tags/node-js"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-control-function",
    "title": "에이전트 기능 제어",
    "description": "Node.js 애플리케이션 서버의 기능을 제어할 수 있습니다.",
    "tags": [
      "Node.js"
    ]
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "에이전트 이름 식별",
    "permalink": "/whatap-docs/nodejs/agent-name"
  },
  "next": {
    "title": "에이전트 통신 설정",
    "permalink": "/whatap-docs/nodejs/agent-network"
  }
};
const assets = {

};




const control_function_toc = [...toc];
function control_function_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Node.js 애플리케이션 서버의 기능을 제어합니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_nextjs_build_file_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " 빌드 파일에 대한 모니터링 여부를 설정합니다. 이 옵션값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "로 설정하면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " 빌드 파일을 모니터링하지 않습니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_nextjs_build_file_path"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/next/"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["모니터링에서 제외할 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), " 빌드 파일의 시작 경로를 지정할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ignore_nextjs_build_file_enabled"
          }), " 값이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "일 경우에 적용됩니다. 쉼표(,)를 구분자로 여러 개의 경로를 설정할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "ignore_nextjs_build_file_path=/next/abc/,/next/def/\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function control_function_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(control_function_createMdxContent, {
      ...props
    })
  }) : control_function_createMdxContent(props);
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