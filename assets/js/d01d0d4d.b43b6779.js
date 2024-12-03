"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["31144"], {
"806": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_amazon_ecs_introduction_mdx_d01_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-amazon-ecs-introduction-mdx-d01.json
var site_docs_amazon_ecs_introduction_mdx_d01_namespaceObject = JSON.parse('{"id":"amazon-ecs/introduction","title":"Amazon ECS","description":"Amazon ECS 개요를 안내합니다.","source":"@site/docs/amazon-ecs/introduction.mdx","sourceDirName":"amazon-ecs","slug":"/amazon-ecs/introduction","permalink":"/amazon-ecs/introduction","draft":false,"unlisted":false,"editUrl":"undefined/docs/amazon-ecs/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"Amazon ECS","description":"Amazon ECS 개요를 안내합니다.","toc_max_heading_level":2,"keywords":["설치하기","Amazon ECS"],"isTranslationMissing":false},"sidebar":"awsecsSidebar","next":{"title":"설치하기","permalink":"/amazon-ecs/install-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/amazon-ecs/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'Amazon ECS',
	description: 'Amazon ECS 개요를 안내합니다.',
	toc_max_heading_level: 2,
	keywords: [
		'설치하기',
		'Amazon ECS'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "주요 특장점",
  "id": "주요-특장점",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 Amazon ECS 모니터링은 META API 및 Cgroup 디렉터리를 통해 도커 컨테이너별 자원 사용량을 실시간으로 수집합니다. Amazon ECS API 연동 와탭 Task를 통해 Amazon ECS Service, Deployment, Container Instance의 상태를 조회 및 수집합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "주요-특장점",
        children: "주요 특장점"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Amazon ECS 클러스터에서 최종사용자 애플리케이션을 운영할 때 필요한 투명성을 제공합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Task 내부의 도커 컨테이너별 자원(CPU, Memory, BLKIO, Network) 사용량을 실시간으로 수집합니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "운영 시 Task가 설계한 부하 한계 내에서 작동하는지 확인할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "애플리케이션 피크 부하 시 자원 과부족 상태일 때 실시간으로 시각화 및 알림을 받아 장애에 신속하게 대응할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "주간/월간 리포트를 통해 자원 사용량의 증가 추이를 파악해서 운영 계획에 반영할 수 있습니다."
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