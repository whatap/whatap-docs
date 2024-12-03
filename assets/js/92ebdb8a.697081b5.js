"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40036"], {
"70773": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assets: function() { return assets; },
  contentTitle: function() { return contentTitle; },
  "default": function() { return MDXContent; },
  frontMatter: function() { return frontMatter; },
  metadata: function() { return /* reexport default export from named module */ _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_2_q_summary_mdx_f28_json__WEBPACK_IMPORTED_MODULE_0__; },
  toc: function() { return toc; }
});
/* ESM import */var _site_docusaurus_docusaurus_plugin_content_blog_default_site_blog_2024_2_q_summary_mdx_f28_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39873);
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50065);


const frontMatter = {
	slug: '2024-2q-summary',
	title: '2분기 안내',
	authors: 'ysj',
	date: '2024-07-09T09:30',
	toc_max_heading_level: 2,
	tags: [
		'새로운 기능',
		2024
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {
"authorsImageUrls": [(__webpack_require__(23771)/* ["default"] */.Z)],
};

/*새로운 기능 sc 이미지 국문과 영문*/


const toc = [];
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "와탭의 2024년 2분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ImgLang, {
      img: "changelog/changelog-new3.png",
      desc: "새로운 기능 sc"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



}),
"23771": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

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
"39873": (function (module) {
module.exports = JSON.parse('{"permalink":"/blog/2024-2q-summary","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-2q-summary.mdx","source":"@site/blog/2024-2q-summary.mdx","title":"2분기 안내","description":"와탭의 2024년 2분기 서비스 신규 기능 및 주목할 만한 변경 사항 개요를 안내합니다. 와탭이 새롭게 제공하는 기능들을 한 눈에 살펴보세요.","date":"2024-07-09T09:30:00.000Z","tags":[{"inline":true,"label":"새로운 기능","permalink":"/blog/tags/새로운-기능"},{"inline":true,"label":"2024","permalink":"/blog/tags/2024"}],"hasTruncateMarker":true,"authors":[{"name":"TW J","email":"ysjo@whatap.io","title":"테크니컬 라이터","imageURL":"./img/teamtwj.svg","key":"ysj","page":null}],"frontMatter":{"slug":"2024-2q-summary","title":"2분기 안내","authors":"ysj","date":"2024-07-09T09:30","toc_max_heading_level":2,"tags":["새로운 기능","2024"],"isTranslationMissing":false},"unlisted":false,"prevItem":{"title":"3분기 안내","permalink":"/blog/2024-3q-summary"},"nextItem":{"title":"1분기 안내","permalink":"/blog/2024-1q-summary"}}')

}),

}]);