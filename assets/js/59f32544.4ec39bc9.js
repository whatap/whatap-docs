"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["35026"], {
"42499": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_nodejs_agent_manage_mdx_59f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-nodejs-agent-manage-mdx-59f.json
var site_docs_nodejs_agent_manage_mdx_59f_namespaceObject = JSON.parse('{"id":"nodejs/agent-manage","title":"관리하기","description":"Node.js 에이전트를 업데이트하거나 삭제하는 방법을 소개합니다.","source":"@site/docs/nodejs/agent-manage.mdx","sourceDirName":"nodejs","slug":"/nodejs/agent-manage","permalink":"/nodejs/agent-manage","draft":false,"unlisted":false,"editUrl":"undefined/docs/nodejs/agent-manage.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-manage","title":"관리하기","description":"Node.js 에이전트를 업데이트하거나 삭제하는 방법을 소개합니다.","keywords":["Node.js","관리","삭제","업데이트"],"isTranslationMissing":false},"sidebar":"nodejsSidebar","previous":{"title":"토폴로지 맵","permalink":"/nodejs/agent-topology"},"next":{"title":"대시보드","permalink":"/nodejs/dashboard-intro"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/nodejs/agent-manage.mdx


const frontMatter = {
	id: 'agent-manage',
	title: '관리하기',
	description: 'Node.js 에이전트를 업데이트하거나 삭제하는 방법을 소개합니다.',
	keywords: [
		'Node.js',
		'관리',
		'삭제',
		'업데이트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "에이전트 업데이트",
  "id": "에이전트-업데이트",
  "level": 2
}, {
  "value": "에이전트 삭제(중지)",
  "id": "에이전트-삭제중지",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-업데이트",
        children: "에이전트 업데이트"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["애플리케이션을 중단하고 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm"
        }), "을 사용하여 업데이트합니다. 업데이트를 진행한 다음 애플리케이션을 재시작하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "$ npm update whatap\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "특정 버전으로 다운로드를 하고자 하는 경우에는 다음과 같이 버전을 명시합니다."
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title='SH'",
            children: "$ npm install whatap@{version}\n"
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-삭제중지",
        children: "에이전트 삭제(중지)"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "소스(예, app.js)에 삽입했던 에이전트 코드를 제거하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-javascript",
              metastring: "title='app.js'",
              children: "var whatap=require('whatap').NodeAgent; // 제거\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["애플리케이션을 중단하고 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm"
            }), "을 이용해 모듈을 삭제하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "$ npm uninstall whatap\n"
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