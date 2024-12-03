"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["95192"], {
"8189": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_python_manage_pkg_mdx_838_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-python-manage-pkg-mdx-838.json
var site_docs_python_manage_pkg_mdx_838_namespaceObject = JSON.parse('{"id":"python/manage-pkg","title":"패키지 관리","description":"Python 에이전트 패키지 관리 방법을 제공합니다.","source":"@site/docs/python/manage-pkg.mdx","sourceDirName":"python","slug":"/python/manage-pkg","permalink":"/python/manage-pkg","draft":false,"unlisted":false,"editUrl":"undefined/docs/python/manage-pkg.mdx","tags":[],"version":"current","frontMatter":{"id":"manage-pkg","title":"패키지 관리","description":"Python 에이전트 패키지 관리 방법을 제공합니다.","keywords":["Python","관리하기"],"isTranslationMissing":false},"sidebar":"pySidebar","previous":{"title":"에이전트 삭제","permalink":"/python/agent-remove"},"next":{"title":"대시보드","permalink":"/python/dashboard-intro"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/python/manage-pkg.mdx


const frontMatter = {
	id: 'manage-pkg',
	title: '패키지 관리',
	description: 'Python 에이전트 패키지 관리 방법을 제공합니다.',
	keywords: [
		'Python',
		'관리하기'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "패키지 설치 확인",
  "id": "패키지-설치-확인",
  "level": 2
}, {
  "value": "패키지 업데이트",
  "id": "update-pkg",
  "level": 2
}, {
  "value": "패키지 제거",
  "id": "패키지-제거",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
        id: "패키지-설치-확인",
        children: "패키지 설치 확인"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 통해 와탭 Python 에이전트 패키지의 설치 상태를 확인할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=SH",
          children: "$ pip list | grep whatap-python\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "update-pkg",
        children: "패키지 업데이트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 통해 와탭 Python 에이전트 패키지를 업데이트할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=SH",
          children: "$ pip install -U whatap-python\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "특정 버전을 명시한 경우 다음을 참고하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=SH",
          children: "$ pip install -U whatap-python==[특정 버전]\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "패키지-제거",
        children: "패키지 제거"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 명령어를 통해 와탭 Python 에이전트 패키지를 제거할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=SH",
          children: "$ pip uninstall whatap-python\n"
        })
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