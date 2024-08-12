"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[9671],{

/***/ 85637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ java_2_2_37_contentTitle),
  "default": () => (/* binding */ java_2_2_37_MDXContent),
  frontMatter: () => (/* binding */ java_2_2_37_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ java_2_2_37_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/release-notes/java/_import_dl-java-agent.mdx


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
  }, {Link} = _components;
  if (!Link) _missingMdxReference("Link", true);
  return (0,jsx_runtime.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,jsx_runtime.jsxs)("p", {
      children: [(0,jsx_runtime.jsx)("b", {
        children: "다운로드"
      }), ": ", (0,jsx_runtime.jsxs)(Link, {
        to: `https://repo.whatap.io/maven/io/whatap/whatap.agent/${props.ver}/whatap.agent-${props.ver}.jar`,
        children: ["Java Agent v", props.ver]
      })]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 에이전트를 처음 설치하는 경우 다음 명령어를 이용해 패키지를 먼저 설치하세요. 에이전트 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../../java/install-agent",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "wget https://service.whatap.io/agent/whatap.agent.java.tar.gz\n"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.37.mdx


const java_2_2_37_frontMatter = {
	id: 'java-2_2_37',
	title: 'Java Agent v2.2.37',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/java/java-2_2_36',
	displayed_sidebar: 'releaseSidebar'
};
const java_2_2_37_contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/java-2_2_37",
  "title": "Java Agent v2.2.37",
  "description": "2024년 07월 31일",
  "source": "@site/docs/release-notes/java/java-2.2.37.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/java-2_2_37",
  "permalink": "/ja/release-notes/java/java-2_2_37",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/java-2.2.37.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-2_2_37",
    "title": "Java Agent v2.2.37",
    "toc_max_heading_level": 2,
    "pagination_next": "release-notes/java/java-2_2_36",
    "displayed_sidebar": "releaseSidebar"
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Agent Release Notes",
    "permalink": "/ja/release-notes/java/"
  },
  "next": {
    "title": "Java Agent v2.2.36",
    "permalink": "/ja/release-notes/java/java-2_2_36"
  }
};
const assets = {

};




const java_2_2_37_toc = [...toc];
function java_2_2_37_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, Status} = _components;
  if (!Cmdname) java_2_2_37_missingMdxReference("Cmdname", true);
  if (!Status) java_2_2_37_missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 07월 31일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " spring-boot ExceptionHandler를 통과하는 예외(exception)가 발생하면 이전에 발생한 예외를 대체"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06125",
            className: "uitext"
          }), " 탭에서 예외(exception)를 spring-boot의 ExceptionHandler에 등록한 예외(exception)로 표시할 수 있습니다."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"ㅓ",
            children: "# default: true\r\ntrace_exception_handler_overwrite_enabled=true\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trace_http_parameter_enabled"
          }), " 옵션의 값이 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "일 때, HTTP 파라미터 키에 해당하는 값(value)가 없거나 HTTP 파라미터가 없는 경우 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 창에서 HTTP 파라미터 스텝을 생성하지 않도록 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " Windows 환경에서 기본 CPU 수집이 안 되는 문제 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " Windows 환경에서 sigar 라이브러리를 활용할 때 모니터링 지표가 수집되지 않는 문제 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " Windows 환경에서 oshi 라이브러리를 활용할 때 모니터링 지표가 수집되지 않는 문제 수정"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {
      ver: "2.2.37"
    })]
  });
}
function java_2_2_37_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(java_2_2_37_createMdxContent, {
      ...props
    })
  }) : java_2_2_37_createMdxContent(props);
}
function java_2_2_37_missingMdxReference(id, component) {
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