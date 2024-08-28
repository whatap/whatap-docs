"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45780],{

/***/ 65879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ java_2_2_38_contentTitle),
  "default": () => (/* binding */ java_2_2_38_MDXContent),
  frontMatter: () => (/* binding */ java_2_2_38_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ java_2_2_38_toc)
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


;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.38.mdx


const java_2_2_38_frontMatter = {
	id: 'java-2_2_38',
	title: 'Java Agent v2.2.38',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/java/java-2_2_37',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: true
};
const java_2_2_38_contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/java-2_2_38",
  "title": "Java Agent v2.2.38",
  "description": "2024년 08월 14일",
  "source": "@site/docs/release-notes/java/java-2.2.38.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/java-2_2_38",
  "permalink": "/en/release-notes/java/java-2_2_38",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/java-2.2.38.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-2_2_38",
    "title": "Java Agent v2.2.38",
    "toc_max_heading_level": 2,
    "pagination_next": "release-notes/java/java-2_2_37",
    "displayed_sidebar": "releaseSidebar",
    "isTranslationMissing": true
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Agent Release Notes",
    "permalink": "/en/release-notes/java/"
  },
  "next": {
    "title": "Java Agent v2.2.37",
    "permalink": "/en/release-notes/java/java-2_2_37"
  }
};
const assets = {

};




const java_2_2_38_toc = [...toc];
function java_2_2_38_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) java_2_2_38_missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 08월 14일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " spring-boot-3.2 추적"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "weaving=spring-boot-3.2\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "다음 라이브러리 또는 프레임워크를 추적합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RestTemplate"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RestClient"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "WebClient"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "spring-cloud-gateway"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "spring-kafka"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "spring-kafka-batch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "r2dbc-mysql-0.9.3 - 1.1.3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "jasync-r2dbc-mysql-2.1.23"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " spring-kafka batch 추적 시 트랜잭션이름 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기존: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "[kafka] {topic} (cnt: {Number of polls in Kafka})"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["수정: ", (0,jsx_runtime.jsx)(_components.code, {
                children: "[kafka-batch] {topic}"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Deprecated"
          }), " lettuce 드라이버의 key, param 추적 중단"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {
      ver: "2.2.38"
    })]
  });
}
function java_2_2_38_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(java_2_2_38_createMdxContent, {
      ...props
    })
  }) : java_2_2_38_createMdxContent(props);
}
function java_2_2_38_missingMdxReference(id, component) {
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