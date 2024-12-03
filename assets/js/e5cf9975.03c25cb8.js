"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["45514"], {
"26491": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
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
    a: "a",
    admonition: "admonition",
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Link} = _components;
  if (!Link) _missingMdxReference("Link", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
    type: "note",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
        children: "다운로드"
      }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Link, {
        to: `https://repo.whatap.io/maven/io/whatap/whatap.agent/${props.ver}/whatap.agent-${props.ver}.jar`,
        children: ["Java Agent v", props.ver]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Java 에이전트를 처음 설치하는 경우 다음 명령어를 이용해 패키지를 먼저 설치하세요. 에이전트 설치에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "../../java/install-agent",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        children: "wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"
      })
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"27738": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_java_java_2_2_40_mdx_e5c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-java-java-2-2-40-mdx-e5c.json
var site_docs_release_notes_java_java_2_2_40_mdx_e5c_namespaceObject = JSON.parse('{"id":"release-notes/java/java-2_2_40","title":"Java Agent v2.2.40","description":"2024년 11월 06일","source":"@site/docs/release-notes/java/java-2.2.40.mdx","sourceDirName":"release-notes/java","slug":"/release-notes/java/java-2_2_40","permalink":"/release-notes/java/java-2_2_40","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/java/java-2.2.40.mdx","tags":[],"version":"current","frontMatter":{"id":"java-2_2_40","title":"Java Agent v2.2.40","toc_max_heading_level":2,"pagination_next":"release-notes/java/java-2_2_39","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Java Agent v2.2.41","permalink":"/release-notes/java/java-2_2_41"},"next":{"title":"Java Agent v2.2.39","permalink":"/release-notes/java/java-2_2_39"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/release-notes/java/_import_dl-java-agent.mdx
var _import_dl_java_agent = __webpack_require__("26491");
;// CONCATENATED MODULE: ./docs/release-notes/java/java-2.2.40.mdx


const frontMatter = {
	id: 'java-2_2_40',
	title: 'Java Agent v2.2.40',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/java/java-2_2_39',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._import_dl_java_agent/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 11월 06일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " camel-netty4-2.25 추적"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "weaving=camel-netty4-2.25\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " AWS ECS Fargate 메모리 사용률 지표 수집"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "메모리 사용률 기준값을 사용자 정의(task definition) 메모리 제한값으로 설정"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "New"
          }), " 일부 에이전트 설정에서 시스템 환경변수를 통한 설정 지원"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["기존에 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.conf"
              }), "에 설정한 경우 기존 설정 값이 우선시되며 시스템 환경 변수의 값은 무시"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "에이전트 설정              시스템 환경변수\nwhatap.server.host   <= WHATAP_SERVER_HOST\nwhatap.server.port   <= WHATAP_SERVER_PORT\nwhatap.okind         <= WHATAP_OKIND\nwhtap.micro.enabled  <= WHATAP_MICRO_ENABLED\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " Spring Boot 2.5 ~ 2.6.x 버전에서 WebFlux 트랜잭션 추적 시 샘플링 기능 사용 가능하도록 개선"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " AWS ECS EC2 메모리 사용률 기준값을 사용자 정의 task definition의 메모리 제한값으로 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " PostgreSQL 사용 시 빈 SQL(Empty SQL) 수집 제거"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " 트랜잭션 샘플링 기능 사용 시 실제 TPS보다 높게 수집되는 현상 수정"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "0",
            children: "Fixed"
          }), " Spring Boot 2.5 ~ 2.6.x 버전에서 Spring Cloud Gateway 호출 시 연계 추적용 헤더가 있는 경우에도 연계 추적에 문제가 없도록 수정"]
        }), "\n"]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_import_dl_java_agent/* default */.ZP, {
      ver: "2.2.40"
    })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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