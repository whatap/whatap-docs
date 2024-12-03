"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["43383"], {
"61359": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_multiservice_hitmap_mdx_727_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-multiservice-hitmap-mdx-727.json
var site_docs_kubernetes_multiservice_hitmap_mdx_727_namespaceObject = JSON.parse('{"id":"kubernetes/multiservice-hitmap","title":"멀티서비스 히트맵","description":"여러 서비스를 대상으로 히트맵 차트를 확인하고 서비스별 상태를 비교 분석할 수 있습니다.","source":"@site/docs/kubernetes/multiservice-hitmap.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/multiservice-hitmap","permalink":"/kubernetes/multiservice-hitmap","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/multiservice-hitmap.mdx","tags":[],"version":"current","frontMatter":{"id":"multiservice-hitmap","title":"멀티서비스 히트맵","description":"여러 서비스를 대상으로 히트맵 차트를 확인하고 서비스별 상태를 비교 분석할 수 있습니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","애플리케이션","멀티서비스 히트맵","히트맵"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"애플리케이션 히트맵","permalink":"/kubernetes/trs-view"},"next":{"title":"MSA 분석","permalink":"/kubernetes/analysis-msa"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/multiservice-hitmap.mdx


const frontMatter = {
	id: 'multiservice-hitmap',
	title: '멀티서비스 히트맵',
	description: '여러 서비스를 대상으로 히트맵 차트를 확인하고 서비스별 상태를 비교 분석할 수 있습니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'애플리케이션',
		'멀티서비스 히트맵',
		'히트맵'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "분석"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "멀티서비스 히트맵"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_application_multiservice_hitmap.png",
      desc: "멀티 서비스 히트맵"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "여러 서비스를 대상으로 히트맵 차트를 확인하고 서비스별 상태를 비교 분석할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "검색 조건은 다음과 같습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "항목"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "설명"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "시작일"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "검색날짜"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "시작시간"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3일, 7일, 한 달 검색 시에는 사용할 수 없습니다"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "기간"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)("ul", {
              children: [(0,jsx_runtime.jsx)("li", {
                children: "5분/10분/30분"
              }), (0,jsx_runtime.jsx)("li", {
                children: "1시간/3시간/24시간"
              }), (0,jsx_runtime.jsx)("li", {
                children: "3일/7일/한 달"
              })]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "구분"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "에이전트 종류"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "애플리케이션"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "애플리케이션"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "히트맵에 대한 자세한 내용은 다음 문서를 참조하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../java/trs-view",
              children: "Java"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../nodejs/trs-view",
              children: "Node.js"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "../python/trs-view",
              children: "Python"
            })
          }), "\n"]
        }), "\n"]
      })]
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