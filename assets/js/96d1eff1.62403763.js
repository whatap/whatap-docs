"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40197"], {
"15216": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_focus_supported_spec_mdx_96d_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-focus-supported-spec-mdx-96d.json
var site_docs_focus_supported_spec_mdx_96d_namespaceObject = JSON.parse('{"id":"focus/supported-spec","title":"지원 환경","description":"와탭 Focus 지원 환경을 안내합니다.","source":"@site/docs/focus/supported-spec.mdx","sourceDirName":"focus","slug":"/focus/supported-spec","permalink":"/focus/supported-spec","draft":false,"unlisted":false,"editUrl":"undefined/docs/focus/supported-spec.mdx","tags":[],"version":"current","frontMatter":{"id":"supported-spec","title":"지원 환경","description":"와탭 Focus 지원 환경을 안내합니다.","keywords":["Focus","지원 환경"],"isTranslationMissing":false},"sidebar":"pluginSidebar","previous":{"title":"Focus란?","permalink":"/focus/introduction"},"next":{"title":"설치하기","permalink":"/focus/install-focus"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/focus/supported-spec.mdx


const frontMatter = {
	id: 'supported-spec',
	title: '지원 환경',
	description: '와탭 Focus 지원 환경을 안내합니다.',
	keywords: [
		'Focus',
		'지원 환경'
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
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "X86 기반에서 동작하는 Windows, Linux, FreeBSD, OSX 및 ARMv5,6,7 및 ARM64 Linux OS에 적용할 수 있습니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "상품"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "환경"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "지원 환경"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "9",
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Windows 2008R2 이상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            rowSpan: "5",
            children: "Linux"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debian 7.0 이상"
          })]
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Ubuntu 12.04 이상"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "CentOS, Red Hat 6.0 이상"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "Amazon Linux 1.0 이상"
          })
        }), (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.td, {
            children: "SUSE 12.1 이상"
          })
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FreeBSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FreeBSD 10 이상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OSX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lion 10.7 이상"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raspberry Pi OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 이상"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["지원 리스트에 포함되지 않는 환경인 경우 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:support@whatap.io",
          children: "support@whatap.io"
        }), " 로 별도 문의하세요."]
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