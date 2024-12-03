"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["16379"], {
"11880": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_aws_log_introduction_mdx_269_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-aws-log-introduction-mdx-269.json
var site_docs_aws_log_introduction_mdx_269_namespaceObject = JSON.parse('{"id":"aws-log/introduction","title":"AWS Log 모니터링","description":"AWS Resource에 저장 중인 로그를 수집하는 와탭 AWS Log 를 안내합니다.","source":"@site/docs/aws-log/introduction.mdx","sourceDirName":"aws-log","slug":"/aws-log/introduction","permalink":"/aws-log/introduction","draft":false,"unlisted":false,"editUrl":"undefined/docs/aws-log/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"AWS Log 모니터링","description":"AWS Resource에 저장 중인 로그를 수집하는 와탭 AWS Log 를 안내합니다.","keywords":["AWS Log"],"toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"awslogSidebar","next":{"title":"설치하기","permalink":"/aws-log/install-aws-log"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/TR.js
var TR = __webpack_require__("98519");
;// CONCATENATED MODULE: ./docs/aws-log/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'AWS Log 모니터링',
	description: 'AWS Resource에 저장 중인 로그를 수집하는 와탭 AWS Log 를 안내합니다.',
	keywords: [
		'AWS Log'
	],
	toc_max_heading_level: 2,
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
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "AWS 상에서 발생하는 리소스 로그는 CloudWatch Log를 통해 수집되는 로그 행 단위의 문자열 정보와 S3에 아카이브 된 형태로 저장되는 로그의 형태로 나뉩니다. 일반적으로 사용자는 다음과 같이 S3와 Log Group에 각각 들어가 리소스별로 확인하는 번거로운 과정을 거쳐야 합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "none aws-log sc",
        src: (__webpack_require__(55343)/* ["default"] */.Z) + "",
        width: "1616",
        height: "834"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 AWS Log는 AWS 상에서 발생하는 각종 로그를 수집하여 통합 모니터링 하기 위한 기능을 제공합니다. AWS Log를 활용한다면 사용자는 위의 번거로운 과정을 거칠 필요가 없습니다. AWS 리소스 로그가 쌓이는 S3와 CloudWatch Log Group을 와탭 WhaTap Forwarder가 구독해 로그 생성 시 와탭 환경으로 보냅니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "aws-log sc",
        src: (__webpack_require__(76095)/* ["default"] */.Z) + "",
        width: "1741",
        height: "687"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "주요-특장점",
        children: "주요 특장점"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "와탭 AWS Log를 활용해 리소스 로그를 한 번에 모아볼 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "와탭 AWS Log를 활용해 시간대별 로그 발생량을 계산할 수 있습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "와탭 AWS Log를 활용해 로그 내용을 검색할 수 있습니다."
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
"76095": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-intro-c-8a2ed0226f380a37a91e6a6e19d9da66.png");

}),
"55343": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/aws-log-none-8dd844a8a83aea03bf889dad667d2e92.png");

}),
"98519": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return TR; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* ESM import */var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96025);



function TR(param) {
    let { sid } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */.Z, {
        id: sid
    });
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