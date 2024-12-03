"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["16801"], {
"96616": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_install_check_mdx_f88_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-install-check-mdx-f88.json
var site_docs_dotnet_install_check_mdx_f88_namespaceObject = JSON.parse('{"id":"dotnet/install-check","title":"설치 점검 사항","description":".NET 에이전트를 설치한 다음 확인해야할 사항입니다.","source":"@site/docs/dotnet/install-check.mdx","sourceDirName":"dotnet","slug":"/dotnet/install-check","permalink":"/dotnet/install-check","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/install-check.mdx","tags":[],"version":"current","frontMatter":{"id":"install-check","title":"설치 점검 사항","description":".NET 에이전트를 설치한 다음 확인해야할 사항입니다.","keywords":[".NET"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"에이전트 설치","permalink":"/dotnet/install-agent"},"next":{"title":"설치 문제 해결","permalink":"/dotnet/agent-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/dotnet/install-check.mdx


const frontMatter = {
	id: 'install-check',
	title: '설치 점검 사항',
	description: '.NET 에이전트를 설치한 다음 확인해야할 사항입니다.',
	keywords: [
		'.NET'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "서비스 동작 확인",
  "id": "서비스-동작-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    img: "img",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "서비스-동작-확인",
      children: "서비스 동작 확인"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap.NET"
        })
      }), " 서비스가 정상 등록되어 있고, 동작(", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "실행 중"
        })
      }), ") 상태인지 확인하세요."]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["관리자 권한으로 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "services.msc"
      }), " 명령을 실행하거나 제어판에서 서비스 아이콘을 두 번 클릭해 Services 관리자를 여세요."]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://img.whatap.io/media/agent_dotnet/install/whatap-windows-service.png",
        alt: "윈도우 Service 관리자"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WhaTap .NET"
      }), " 서비스는 수집한 모니터링 데이터를 와탭 서버로 전송합니다. 관련 로그는 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "C:\\Program Files\\WhaTap .NET\\logs"
      }), " 경로에서 확인하세요."]
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