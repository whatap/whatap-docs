"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["7893"], {
"45720": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_url_url_release_notes_mdx_b62_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-url-url-release-notes-mdx-b62.json
var site_docs_release_notes_url_url_release_notes_mdx_b62_namespaceObject = JSON.parse('{"id":"release-notes/url/url-release-notes","title":"URL Monitoring Agent release notes","description":"URL Monitoring Agent v2.0.2","source":"@site/docs/release-notes/url/url-release-notes.mdx","sourceDirName":"release-notes/url","slug":"/release-notes/url/url-release-notes","permalink":"/release-notes/url/url-release-notes","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/url/url-release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"url-release-notes","title":"URL Monitoring Agent release notes","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"xos 지난 버전","permalink":"/release-notes/db/xos-previous"},"next":{"title":"Browser Agent Release Notes","permalink":"/release-notes/browser/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/url/url-release-notes.mdx


const frontMatter = {
	id: 'url-release-notes',
	title: 'URL Monitoring Agent release notes',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "URL Monitoring Agent v2.0.2",
  "id": "url-monitoring-agent-v202",
  "level": 2
}, {
  "value": "Minor Change",
  "id": "minor-change",
  "level": 3
}, {
  "value": "URL Monitoring Agent v2.0.1",
  "id": "url-monitoring-agent-v201",
  "level": 2
}, {
  "value": "버그 픽스",
  "id": "버그-픽스",
  "level": 3
}, {
  "value": "URL Monitoring Agent v0.0.3",
  "id": "url-monitoring-agent-v003",
  "level": 2
}, {
  "value": "버그 픽스",
  "id": "버그-픽스-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "url-monitoring-agent-v202",
        children: "URL Monitoring Agent v2.0.2"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2022-01-05"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "minor-change",
        children: "Minor Change"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "URL 모니터링 User-Agent 이름을 Java/1.8 에서 WhaTap URL Monitoring Agent 로 수정했습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "url-monitoring-agent-v201",
        children: "URL Monitoring Agent v2.0.1"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2021-10-07"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "버그-픽스",
        children: "버그 픽스"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["FullChain 인증서를 사용하지 않는 일부 URL에서 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sun.security.validator.ValidatorException "
            }), " 발생하는 현상을 개선했습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "구 버전에서 지원하지 않던 SHA-256 ECDSA 알고리즘 인증서에 대한 URL 체크가 가능 하도록 수정했습니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "url-monitoring-agent-v003",
        children: "URL Monitoring Agent v0.0.3"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2019-04-25"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "버그-픽스-1",
        children: "버그 픽스"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "https 프로토콜의 URL 모니터링이 불가하여 하기 에러가 발생하던 건을 개선하였습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='Java'",
          children: "sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "SSL 기반으로 통신할 경우 인증서를 받아들여 정상 통신이 가능하도록 하는 매커니즘이 필요함에 따라, 클라이언트 모듈이 등록된 URL로 접근시에 받아들이게 되는 인증서를 허용하도록 개선하였습니다."
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