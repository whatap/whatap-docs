"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["55049"], {
"29106": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_6_1_mdx_936_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-6-1-mdx-936.json
var site_docs_release_notes_php_php_2_6_1_mdx_936_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_6_1","title":"PHP Agent v2.6.1","description":"2023-02-15","source":"@site/docs/release-notes/php/php-2.6.1.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_6_1","permalink":"/release-notes/php/php-2_6_1","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.6.1.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_6_1","title":"PHP Agent v2.6.1","toc_max_heading_level":2,"pagination_next":"release-notes/php/php-2_6_0","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"PHP Agent v2.6.2","permalink":"/release-notes/php/php-2_6_2"},"next":{"title":"PHP Agent v2.6.0","permalink":"/release-notes/php/php-2_6_0"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.6.1.mdx


const frontMatter = {
	id: 'php-2_6_1',
	title: 'PHP Agent v2.6.1',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/php/php-2_6_0',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "2023-02-15",
  "id": "2023-02-15",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h4",
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "2023-02-15",
      children: "2023-02-15"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " TPS 데이터를 ", (0,jsx_runtime.jsx)("b", {
            children: "30초 평균"
          }), "에서  ", (0,jsx_runtime.jsx)("b", {
            children: "5초 평균"
          }), "으로 수집하도록 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "\nservice_metrics_spike_enabled=false // false이면 5초 평균으로 수집\n\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 간혹 정상 트랜잭션을 5분 이상 지연된 트랜잭션으로 수집하는 오류 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDP 통신으로 트랜잭션의 시작, 종료 이벤트 순서가 뒤바뀌어 트랜잭션 종료 이벤트를 먼저 처리하는 경우, 5분 경과 후 내부 프로파일 정보에 'Lost connection'으로 표시합니다. 종료 이벤트를 먼저 전달하는 경우 30초간 시작 이벤트를 대기할 수 있도록 보완하였습니다."
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "내부 프로파일 정보에 'Lost connection'을 표시한 트랜잭션의 원인은 다음과 같습니다. 트랜잭션 시작 이벤트 이후 5분간 종료 이벤트를 수집하지 못하는 경우 수집을 중지합니다."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "실제로 트랜잭션의 실행시간이 5분 이상되는 경우."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "apache 또는 php-fpm 재시작 또는 종료로 프로세스가 즉시 종료되어 트랜잭션 종료 이벤트를 수집하지 못한 경우"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "예기치 않은 오류(segmentaion, sigbus 등 error log 내용으로 확인 가능)로 apache 또는 php-fpm가 강제 종료되는 경우"
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
"37016": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return Status; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function Status(param) {
    let { children, priority } = param;
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


}),
"13348": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return UItext; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function UItext(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
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