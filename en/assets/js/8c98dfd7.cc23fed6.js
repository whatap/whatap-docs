"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[46486],{

/***/ 44433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/python/python-agent.json
const python_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_3","ver":"v1.6.3","date":"2024-04-17","Lists":[{"ver":"v1.6.3","hash":"v163","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified the parsing logic that searches for the <code>containerID</code> in the Kubernetes environment.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_0","ver":"v1.6.0","date":"2024-03-13","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the agent does not operate if it does not find data about the remote host in FastAPI.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_6","ver":"v1.6.6","date":"2024-06-07","Lists":[{"ver":"v1.6.6","hash":"v166","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> FastAPI - Fixed the bug that occurs when collecting the remoteIP.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_4","ver":"v1.6.4","date":"2024-05-14","Lists":[{"ver":"v1.6.4","hash":"v164","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified the parsing logic that searches for the <code>containerID</code> in the Kubernetes environment.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_9","ver":"v1.5.9","date":"2024-03-11","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where input is made without line breaks when setting agent options.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_2","ver":"v1.6.2","date":"2024-03-29","Lists":[{"ver":"v1.6.2","hash":"v162","product":"Python Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>exit_with_parent_process_enabled</code> option.</p>","details":"<ul>\\n<li>\\n<b>exit_with_parent_process_enabled</b>\\n<em>bool</em>\\n<br>\\n<p>Default <code>false</code></p>\\n<p>Set the value of the option through the <em>whatap.conf</em> file in the Python agent\'s <code>WHATAP_HOME</code> path. You can set whether or not to end the <code>whatap_python</code> process when the monitored Python process is terminated. If the option value is set to <code>true</code>, the <code>whatap_python</code> process ends together when the monitored application is terminated. It may take up to 1 minute.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_5","ver":"v1.6.5","date":"2024-05-31","Lists":[{"ver":"v1.6.5","hash":"v165","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the missing transaction termination issue when using Python 3.6 gevent.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_6_1","ver":"v1.6.1","date":"2024-03-20","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the repetitive log call issue in <em>whatap-hook.log</em>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_8","ver":"v1.5.8","date":"2024-02-18","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the double counting error for users (related to the number of users) in Frappe Application.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_5","ver":"v1.5.5","date":"2024-02-01","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Improved the issue where the performance collection error occurs when there is no instance (DB) in the database connection information in applications developed using the Frappe framework.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_4","ver":"v1.5.4","date":"2024-01-09","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the module dependency collection error for some Python versions in Python agent 1.4.9 or later.</p>","details":"<ul>\\n<li>Python 3.6</li>\\n<li>Python 3.7</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_6","ver":"v1.5.6","date":"2024-02-02","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Python Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Supported the superset.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_2","ver":"v1.5.2","date":"2024-01-03","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the INJECTION type log collection code error.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/python/python-1_5_3","ver":"v1.5.3","date":"2024-01-05","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the gunicorn transaction collection error in Python agent v1.4.9 or later.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/python/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Python Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/python/index",
  "title": "Python Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/python/index.mdx",
  "sourceDirName": "release-notes/python",
  "slug": "/release-notes/python/",
  "permalink": "/en/release-notes/python/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/python/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Python Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Previous Node.js agent versions",
    "permalink": "/en/release-notes/nodejs/nodejs-previous"
  },
  "next": {
    "title": "Python Agent v1.6.10",
    "permalink": "/en/release-notes/python/python-1_6_10"
  }
};
const assets = {

};




const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Head, ImportJson} = _components;
  if (!Head) _missingMdxReference("Head", true);
  if (!ImportJson) _missingMdxReference("ImportJson", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2024",
        children: "Release history for 2024"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: python_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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


/***/ })

}]);