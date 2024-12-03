"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["45410"], {
"10738": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_telegraf_telegraf_release_notes_mdx_eaa_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-telegraf-telegraf-release-notes-mdx-eaa.json
var site_docs_release_notes_telegraf_telegraf_release_notes_mdx_eaa_namespaceObject = JSON.parse('{"id":"release-notes/telegraf/telegraf-release-notes","title":"Telegraf release notes","description":"Telegraf Agent v0.2.0","source":"@site/docs/release-notes/telegraf/telegraf-release-notes.mdx","sourceDirName":"release-notes/telegraf","slug":"/release-notes/telegraf/telegraf-release-notes","permalink":"/release-notes/telegraf/telegraf-release-notes","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/telegraf/telegraf-release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"telegraf-release-notes","title":"Telegraf release notes","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Amazon ECS","permalink":"/release-notes/amazon-ecs/amazon-ecs-release-notes"},"next":{"title":"Focus","permalink":"/release-notes/focus/focus-release-notes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/telegraf/telegraf-release-notes.mdx


const frontMatter = {
	id: 'telegraf-release-notes',
	title: 'Telegraf release notes',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Telegraf Agent v0.2.0",
  "id": "telegraf-agent-v020",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트",
  "level": 3
}, {
  "value": "패키지 파일 배포",
  "id": "패키지-파일-배포",
  "level": 4
}, {
  "value": "Telegraf Agent v0.1.0",
  "id": "telegraf-agent-v010",
  "level": 2
}, {
  "value": "업데이트",
  "id": "업데이트-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "telegraf-agent-v020",
        children: "Telegraf Agent v0.2.0"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2020-8-28"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "업데이트",
        children: "업데이트"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "패키지-파일-배포",
        children: "패키지 파일 배포"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf Release 1.16 버전에 whatap plugin을 포함한 실행파일 및 패키지 추가"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "telegraf-agent-v010",
        children: "Telegraf Agent v0.1.0"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "배포일: 2019-8-15"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "업데이트-1",
        children: "업데이트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Telegraf Whatap Output plugin"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='TOML'",
          children: "# # Configuration for WhaTap\n[[outputs.whatap]]\n#   ## You can create a project on the WhaTap site(https://www.whatap.io)\n#   ## to get license, project code and server IP information.\n#\n#   ## WhaTap license. Required\nlicense = \"x2tggtnopk2t9-xxxxxxxxxx-aaaaaaaaaa\"\n#\n#   ## WhaTap project code. Required\npcode = 118\n#\n#   ## WhaTap server IP. Required\n#   # Put multiple IPs with / as delimiters. e.g. \"1.1.1.1/2.2.2.2\"\n\nservers = [\"tcp://1.2.3.4:6600\", \"tcp://5.6.7.8:6600\"]\n\n#   ## Connection timeout.\n#   # timeout = \"60s\"\n"
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