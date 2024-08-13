"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[18836],{

/***/ 11068:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/php/php-agent.json
const php_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/php/php-2_8_1","ver":"v2.8.1","date":"2024-07-24","Lists":[{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Added the agent configuration options to collect transaction statistics by IP address.</p>","details":"<blockquote>\\n<p><strong>whatap.stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>, Default <code>false</code></p>\\n</blockquote>"},{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent configuration option for setting the statistics compression transmission.</p>","details":"<blockquote>\\n<p><strong>whatap.stat_zip_enabled</strong> <span class=\\"type\\">Boolean</span>, Default <code>true</code></p>\\n</blockquote>"}]},{"url":"https://docs.whatap.io/en/release-notes/php/php-2_7_1","ver":"v2.7.1","date":"2024-01-24","Lists":[{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where only the hash (number) value appears, not the name, after setting the <code>whatap.onode</code> option.</p>"},{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fix the bug where the whatap-php.service file is not recognized in Ubuntu 14.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/php/php-2_7_2","ver":"v2.7.2","date":"2024-03-06","Lists":[{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to use variables in date format for naming the log monitoring files.</p>","details":"<blockquote>\\n<p>Modified based on the use of Python <code>strftime()</code>. e.g. 20240101: %Y%m%d</p>\\n</blockquote>"},{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the guide message of the installation script (<em>/usr/whatap/php/install.sh</em>).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/php/php-2_7_0","ver":"v2.7.0","date":"2024-01-10","Lists":[{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> PHP 8.3 has been supported.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Trace context (W3C) is supported in the multi-transaction tracing.</p>","details":"<p><strong>OpenTelmetry</strong> that supports the trace context, and the multi-transaction tracing correlation are supported.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the resource collection for SQL, Method, and HTTP call.</p>","details":"<p>The differences between resources (CPU, memory) at the start of the transaction and the start of each step are collected.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to newly create the configuration file (<em>whatap.conf</em>) if nothing.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the error where the cumulative number of outbound calls are collected wrong as the cumulative time in the active transation list.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the whatap-php service (<code>whatap-php.service</code>) execution error in the Linux environment.</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the segmentation errors from PHP 8.1.0 to 8.1.2 (collection for user functions is stopped).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/php/php-2_8_0","ver":"v2.8.0","date":"2024-06-19","Lists":[{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Supported linux aarch64.</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Used the <em>security.conf</em> file instead of <em>paramkey.txt</em></p>","details":"<p>It uses the value of the <code>paramkey</code> key in the previous <em>security.conf</em> file. The default value has been changed to <code>WHATAP</code> instead of a random value. If \\"WHATAP\\" is specified, decryption is enabled without entering a key.</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the normalization option setting for SQL statements.</p>","details":"<ul>\\n<li>\\n<p>Always enable normalization by separating parameters in SQL statements. Always set the <code>whatap.trace_sql_normalize_enabled</code> option to <code>true</code>.</p>\\n</li>\\n<li>\\n<p>If you have already disabled the normalization option (disable normalization), activate the setting to normalize and display parameters separately.</p>\\n<ul>\\n<li>Set the <code>whatap.profile_sql_param_enabled</code> option to <code>true</code>.</li>\\n<li>Normalized parameters are separately encrypted and collected.</li>\\n<li>You can check the data by decrypting it with <code>paramkey</code> in <em>security.conf</em>.</li>\\n</ul>\\n</li>\\n</ul>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/php/index.mdx


const frontMatter = {
	id: 'index',
	title: 'PHP Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/php/index",
  "title": "PHP Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/php/index.mdx",
  "sourceDirName": "release-notes/php",
  "slug": "/release-notes/php/",
  "permalink": "/en/release-notes/php/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/php/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "PHP Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Batch Agent v2.2.19",
    "permalink": "/en/release-notes/java-batch/java-batch-2_2_19"
  },
  "next": {
    "title": "PHP Agent v2.8.1",
    "permalink": "/en/release-notes/php/php-2_8_1"
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
        filePath: php_agent_namespaceObject,
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