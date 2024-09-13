"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[4508],{

/***/ 45728:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/golang/go-agent.json
const go_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/golang/golang-0_3_1","ver":"v0.3.1","date":"2024-01-24","Lists":[{"ver":"v0.3.1","hash":"v031","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where only the hash (number) value appears, not the name, after setting the <code>whatap.onode</code> option.</p>"},{"ver":"v0.3.1","hash":"v031","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fix the bug where the whatap-agent.service file is not recognized in Ubuntu 14.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/golang/golang-0_4_0","ver":"v0.4.0","date":"2024-06-19","Lists":[{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Supported linux aarch64.</p>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Used the <em>security.conf</em> file instead of <em>paramkey.txt</em></p>","details":"<p>It uses the value of the <code>paramkey</code> key in the previous <em>security.conf</em> file. The default value has been changed to <code>WHATAP</code> instead of a random value. If \\"WHATAP\\" is specified, decryption is enabled without entering a key.</p>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the normalization option setting for SQL statements.</p>","details":"<ul>\\n<li>\\n<p>Always enable normalization by separating parameters in SQL statements. Always set the <code>trace_sql_normalize_enabled</code> option to <code>true</code>.</p>\\n</li>\\n<li>\\n<p>If you have already disabled the normalization option (disable normalization), activate the setting to normalize and display parameters separately.</p>\\n<ul>\\n<li>Set the <code>profile_sql_param_enabled</code> option to <code>true</code>.</li>\\n<li>Normalized parameters are separately encrypted and collected.</li>\\n<li>You can check the data by decrypting it with <code>paramkey</code> in <em>security.conf</em>.</li>\\n</ul>\\n</li>\\n</ul>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the monitoring stop feature.</p>","details":"<ul>\\n<li>\\n<p>If there is no <code>trace.Init()</code> function call (comment and delete), the monitoring is not started.</p>\\n</li>\\n<li>\\n<p><code>enabled</code> option setting (<code>true</code>): It stops collecting data. The agent\'s internal background modules are maintained.</p>\\n</li>\\n<li>\\n<p>Set <code>shutdown</code> option (<code>true</code>): It stops all agent features. To restart the application, change the <code>shutdown</code> option to <code>true</code> and then restart the application.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.0","hash":"v040","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the IP of the server in which the agent has been installed, is collected as 127.0.0.1, and collected it as the local address IP connected to the WhaTap server via TCP.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/golang/golang-0_3_2","ver":"v0.3.2","date":"2024-03-06","Lists":[{"ver":"v0.3.2","hash":"v032","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to use variables in date format for naming the log monitoring files.</p>","details":"<blockquote>\\n<p>Modified based on the use of Python <code>strftime()</code>. e.g. 20240101: %Y%m%d</p>\\n</blockquote>"},{"ver":"v0.3.2","hash":"v032","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the gRPC header collection error.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/golang/golang-0_3_0","ver":"v0.3.0","date":"2024-01-10","Lists":[{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Trace context (W3C) is supported in the multi-transaction tracing.</p>","details":"<p><strong>OpenTelmetry</strong> that supports the trace context, and the multi-transaction tracing correlation are supported.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the resource collection for SQL, Method, and HTTP call.</p>","details":"<p>The differences between resources (CPU, memory) at the start of the transaction and the start of each step are collected.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to newly create the configuration file (<em>whatap.conf</em>) if nothing.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the error where the cumulative number of outbound calls are collected wrong as the cumulative time in the active transation list.</p>"},{"ver":"v0.3.0","hash":"v030","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the whatap-agent service (<code>whatap-agent.service</code>) execution error in the Linux environment.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/golang/golang-0_3_3","ver":"v0.3.3","date":"2024-03-14","Lists":[{"ver":"v0.3.3","hash":"v033","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Deleted the replace syntax in <code>go.mod</code> (deleted the replace syntax in github.com/whatap/golib module).</p>"},{"ver":"v0.3.3","hash":"v033","product":"Go Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the example source build error (github.com/whatap/go-api-example).</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/golang/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Go Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/golang/index",
  "title": "Go Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/golang/index.mdx",
  "sourceDirName": "release-notes/golang",
  "slug": "/release-notes/golang/",
  "permalink": "/en/release-notes/golang/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/golang/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Go Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Previous .NET agent versions",
    "permalink": "/en/release-notes/dotnet/dotnet-previous"
  },
  "next": {
    "title": "Go Agent v0.4.2",
    "permalink": "/en/release-notes/golang/golang-0_4_2"
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
        filePath: go_agent_namespaceObject,
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