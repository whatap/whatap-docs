"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["18027"], {
"12178": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_faq_agent_faq_mdx_737_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-faq-agent-faq-mdx-737.json
var site_docs_faq_agent_faq_mdx_737_namespaceObject = JSON.parse('{"id":"faq/agent-faq","title":"에이전트 FAQs","description":"와탭의 에이전트와 관련한 FAQ 문서입니다.","source":"@site/docs/faq/agent-faq.mdx","sourceDirName":"faq","slug":"/faq/agent-faq","permalink":"/faq/agent-faq","draft":false,"unlisted":false,"editUrl":"undefined/docs/faq/agent-faq.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-faq","title":"에이전트 FAQs","description":"와탭의 에이전트와 관련한 FAQ 문서입니다.","keywords":["에이전트","FAQ"],"displayed_sidebar":"referSidebar","isTranslationMissing":false},"sidebar":"referSidebar","previous":{"title":"Log FAQs","permalink":"/faq/log-faq"},"next":{"title":"결제 계정","permalink":"/about-billing"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/faq/agent-faq.mdx


const frontMatter = {
	id: 'agent-faq',
	title: '에이전트 FAQs',
	description: '와탭의 에이전트와 관련한 FAQ 문서입니다.',
	keywords: [
		'에이전트',
		'FAQ'
	],
	displayed_sidebar: 'referSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "모니터링 에이전트 이름 중복 문제",
  "id": "모니터링-에이전트-이름-중복-문제",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 모니터링 서비스 사용자들이 에이전트와 관련해 자주 묻는 질문을 확인해 보세요."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("div", {
      className: "faqs",
      children: (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "모니터링-에이전트-이름-중복-문제",
          children: "모니터링 에이전트 이름 중복 문제"
        }), (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Scale In/Out 환경에서 에이전트 이름이 중복되는 이유는 무엇인가요?"
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Scale In/Out 환경에서는 자원의 수요에 따라 인스턴스나 컨테이너가 자동으로 추가되거나 제거됩니다. 이 과정에서 각 인스턴스에 설치된 모니터링 에이전트가 고정된 이름을 사용하면, 새로 생성된 인스턴스가 기존 인스턴스와 같은 이름을 사용하게 되어 중복 문제가 발생할 수 있습니다. 이는 특히 인스턴스가 자동 복구되거나, DevOps 환경에서 지속적인 배포가 이루어질 때 자주 나타납니다."
        }), (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "에이전트 이름 중복 문제를 해결하기 위한 방법은 무엇인가요?"
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["와탭 에이전트는 각 인스턴스나 컨테이너가 재시작할 때마다 변수를 설정해 고유한 식별자를 생성할 수 있는 에이전트 설정을 제공하고 있습니다. 에이전트 설정을 위한 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.conf"
          }), " 파일에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap.name"
          }), " 옵션을 적용할 수 있습닏다. 다음 예시를 참고하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "whatap.name={업무명}-{ip2}-{ip3}-{port}\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예를 들어, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "{업무명}"
          }), "을 'service', IP 주소가 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "10.11.12.13"
          }), "이고, 포트 번호가 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "8000"
          }), "이라면 에이전트 이름은 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "service-12-13-8000"
          }), "으로 부여됩니다."]
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "{ipN}"
              }), ": IPv4 주소 중 각 N번째 단위를 사용해 이름을 부여합니다. ", (0,jsx_runtime.jsx)(_components.code, {
                children: "N"
              }), "은 0부터 시작합니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
              type: "tip",
              children: [(0,jsx_runtime.jsx)(_components.p, {
                children: "IP 주소가 10.11.12.13이라면 지정한 변수에 따라 다음과 같이 적용됩니다."
              }), (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "{ip0}"
                }), ": 10, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{ip1}"
                }), ": 11, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{ip2}"
                }), ": 12, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{ip3}"
                }), ": 13"]
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "{port}"
              }), ": 애플리케이션이 Listen하는 포트 번호를 사용해 이름을 부여합니다."]
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["에이전트 이름 식별을 위한 에이전트 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "../java/agent-name",
              children: "다음 문서"
            }), "를 참조하세요."]
          })
        })]
      })
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