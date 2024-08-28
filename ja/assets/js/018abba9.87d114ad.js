"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[90317],{

/***/ 50737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ java_batch_2_2_25_contentTitle),
  "default": () => (/* binding */ java_batch_2_2_25_MDXContent),
  frontMatter: () => (/* binding */ java_batch_2_2_25_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ java_batch_2_2_25_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/java-batch/_import_dl-java-batch-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java Batch 에이전트를 처음 설치하는 경우 다음 명령어를 이용해 패키지를 먼저 설치하세요. 에이전트 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../java/add-jvm-opt/batch-app",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "wget https://api.whatap.io/agent/whatap.agent.batch.tar.gz\n"
      })
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


;// CONCATENATED MODULE: ./docs/release-notes/java-batch/java-batch-2.2.25.mdx


const java_batch_2_2_25_frontMatter = {
	id: 'java-batch-2_2_25',
	title: 'Java Batch Agent v2.2.25',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/java-batch/java-batch-2_2_24',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: true
};
const java_batch_2_2_25_contentTitle = undefined;
const metadata = {
  "id": "release-notes/java-batch/java-batch-2_2_25",
  "title": "Java Batch Agent v2.2.25",
  "description": "2024년 08월 20일",
  "source": "@site/docs/release-notes/java-batch/java-batch-2.2.25.mdx",
  "sourceDirName": "release-notes/java-batch",
  "slug": "/release-notes/java-batch/java-batch-2_2_25",
  "permalink": "/ja/release-notes/java-batch/java-batch-2_2_25",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java-batch/java-batch-2.2.25.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-batch-2_2_25",
    "title": "Java Batch Agent v2.2.25",
    "toc_max_heading_level": 2,
    "pagination_next": "release-notes/java-batch/java-batch-2_2_24",
    "displayed_sidebar": "releaseSidebar",
    "isTranslationMissing": true
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Batch Agent Release Notes",
    "permalink": "/ja/release-notes/java-batch/"
  },
  "next": {
    "title": "Java Batch Agent v2.2.24",
    "permalink": "/ja/release-notes/java-batch/java-batch-2_2_24"
  }
};
const assets = {

};




const java_batch_2_2_25_toc = [...toc];
function java_batch_2_2_25_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 08월 20일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "profile_expired_time"
          }), " 옵션의 기본값을 30초로 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "# default: 30000\nprofile_expired_time=30000\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " 프로파일 정리 작업 시 에이전트 로그 일부 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "2",
            children: "Fixed"
          }), " 배치 작업이 끝난 후에도 추적 데이터 수집이 되지 않는 문제 방지"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["트레이스가 시작되지 않은 경우 데이터 수집을 하지 않도록, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "auto_start_tx"
          }), " 기본값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "에서 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          }), "로 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "# default: false\nauto_start_tx=false\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {})]
  });
}
function java_batch_2_2_25_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(java_batch_2_2_25_createMdxContent, {
      ...props
    })
  }) : java_batch_2_2_25_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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