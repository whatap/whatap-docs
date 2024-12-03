"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["9794"], {
"80229": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_additional_function_mdx_4ff_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-additional-function-mdx-4ff.json
var site_docs_dotnet_additional_function_mdx_4ff_namespaceObject = JSON.parse('{"id":"dotnet/additional-function","title":"부가 기능","description":"에이전트를 통해 추가로 수집할 수 있는 기능을 안내합니다.","source":"@site/docs/dotnet/additional-function.mdx","sourceDirName":"dotnet","slug":"/dotnet/additional-function","permalink":"/dotnet/additional-function","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/additional-function.mdx","tags":[],"version":"current","frontMatter":{"id":"additional-function","title":"부가 기능","description":"에이전트를 통해 추가로 수집할 수 있는 기능을 안내합니다.","keywords":[".NET","애플리케이션","부가 기능"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"WCF 및 Web Service 모니터링 설정","permalink":"/dotnet/agent-webservice"},"next":{"title":"관리하기","permalink":"/dotnet/agent-manage"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/dotnet/additional-function.mdx


const frontMatter = {
	id: 'additional-function',
	title: '부가 기능',
	description: '에이전트를 통해 추가로 수집할 수 있는 기능을 안내합니다.',
	keywords: [
		'.NET',
		'애플리케이션',
		'부가 기능'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "사용자 로그 추적 기능",
  "id": "사용자-로그-추적-기능",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "에이전트를 통해 데이터를 추가로 수집할 수 있는 기능을 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사용자-로그-추적-기능",
        children: "사용자 로그 추적 기능"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스 내역에 사용자가 직접 로그 메시지를 남길 수 있는 기능입니다. 로그를 남기기 위해서는 다음의 단계를 진행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "로그를 남기려는 프로젝트에 cs 파일을 추가하고 코드를 작성하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-csharp",
              children: "using System;\n\nnamespace Whatap.UserLog\n{\n    public static class Tracer\n    {\n        public static void Trace(string message)\n        {\n            // 아무런 코드를 작성하지 않아도 됩니다.\n            // 이 메소드 안의 코드는 Whatap 에이전트에 의해서 무시되기 때문에 실행되지 않습니다.\n        }\n    }\n}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["로그를 남기고 싶은 위치에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Tracer.Trace(\"로그 문자열\")"
            }), "와 같은 형식으로 코드를 추가하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-csharp",
              children: "public string UserFunction(int value)\n{\n    Tracer.Trace($\"started... {value}\");\n    ...\n}\n"
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