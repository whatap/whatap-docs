"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[53913],{

/***/ 72390:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/nodejs/nodejs-agent.json
const nodejs_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_89","ver":"v0.4.89","date":"2024-01-22","Lists":[{"ver":"v0.4.89","hash":"v0489","product":"Node.js Agent","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> Fixed the ONODE setting error.</li>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_88","ver":"v0.4.88","date":"2024-01-11","Lists":[{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> When the <code>trace_http_client_ip_header_key=x-forwarded-for</code> option has been set and multiple IPs are passed to the <code>x-forwarded-for</code> value via the header, modified to set the IP to the first value (based on comma).</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified the TCP and UDP socket monitoring.</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> When the value of the <code>profile_http_header_enabled</code> option is <code>true</code>, modified the display method of the profile\'s header values (JSON → key=value\\\\n).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_97","ver":"v0.4.97","date":"2024-06-03","Lists":[{"ver":"v0.4.97","hash":"v0497","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Whether or not to use the Kubernetes environment can be applied as an environment variable.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_96","ver":"v0.4.96","date":"2024-05-30","Lists":[{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the websocket package monitoring to collect data while transmitting data from the server to clients.</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent setting options.</p>","details":"<ul>\\n<li>\\n<p><strong>ignore_nextjs_build_file_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>Default <code>true</code></p>\\n<p>Set whether to monitor the <em>Next.js</em> build files. If this option is set to <code>true</code>, the <em>Next.js</em> build files are not monitored.</p>\\n</li>\\n<li>\\n<p><strong>ignore_nextjs_build_file_path</strong> <span class=\\"type\\">String</span></p>\\n<p>Default <code>/next/</code></p>\\n<p>You can specify the startup path of <em>Next.js</em> build files to exclude from the monitoring. It is applied when the value of <code>ignore_nextjs_build_file_enabled</code> is <code>true</code>. With comma (,) as the delimiter, multiple paths can be set.</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">ignore_nextjs_build_file_path</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">/next/abc/,/next/def/</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"Copy code to clipboard\\" title=\\"Copy\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the default value of the <code>trace_sampling_enabled</code> option to <code>true</code>.</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Modified the HTTP monitoring to ignore statistical data collection for socket errors.</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the URL is not displayed when the transaction result is <b>Lost Connection</b>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_94","ver":"v0.4.94","date":"2024-03-07","Lists":[{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <a href=\\"http://socket.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">socket.io</a> monitoring module.</p>","details":"<p>Using the <code>trace_sampling_enabled</code> and <code>trace_sampling_tps</code> options, you can see the sampled data. Make it untraceable by adding the <code>/socket.io</code> path to the <code>trace_ignore_url_prefix</code> option.</p>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent setting options.</p>","details":"<ul>\\n<li>\\n<p><strong>profile_http_header_ignore_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>Default <code>Cookie,cookie,accept,user-agent,referer</code></p>\\n<p>You can specify the HTTP header name to exclude from collection. The set HTTP header names are excluded from collection, and they are marked with \\"#.\\"</p>\\n</li>\\n<li>\\n<p><strong>profile_http_parameter_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>Only the parameters corresponding to the set key are recorded. For multiple values, use comma (,) as the delimiter. If not specified, all parameters are recorded.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> In case the <code>profile_http_parameter_enabled</code> option is set to <code>true</code></p>","details":"<ul>\\n<li>Modified not to output the body data of an HTTP request.</li>\\n<li>Modified to encrypt HTTP parameters and decrypt them with the <em>paramkey.txt</em> value.</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the Mongoose monitoring exception error.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_95","ver":"v0.4.95","date":"2024-04-29","Lists":[{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent option for compressed transmission of the profile data.</p>","details":"<p><strong>profile_zip_enabled</strong> <span class=\\"type\\">Boolean</span></p>"},{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the file name where the security key for querying SQL variables and HTTPs has been created.</p>","details":"<p><em>paramkey.txt</em> → <em>security.conf</em></p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_90","ver":"v0.4.90","date":"2024-02-05","Lists":[{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent setting options.</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_not_found_ignore</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>Default <code>false</code></p>\\n<p>If more than 50 Not Found errors occur in a certain time (<code>httpc_not_found_ignore_time</code>), monitoring detection is ignored.</p>\\n</li>\\n<li>\\n<p><strong>httpc_not_found_ignore_time</strong> <span class=\\"type\\">Milisecond</span></p>\\n<p>Default <code>300000</code></p>\\n<p>If the value of <code>httpc_not_found_ignore</code> is <code>true</code>, set the time to ignore the Not Found errors.</p>\\n</li>\\n</ul>"},{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the Mongoose tracking does not work.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_98","ver":"v0.4.98","date":"2024-07-09","Lists":[{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to apply the license and server host to both environment variables and <em>whatap.conf</em> file.</p>","details":"<p>When applied to both the environment variables and <em>whatap.conf</em> file, they are configured based on the environment variable\'s value.</p>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified the ONODE value creation logic when setting the ONODE NAME.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/nodejs/nodejs-0_4_86","ver":"v0.4.86","date":"2024-01-04","Lists":[{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent options</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_status_ignore</strong> <span class=\\"type\\">String</span></p>\\n<p>Default <code>Empty</code></p>\\n<p>Set the <code>HTTPC_ERROR</code> codes to ignore. For multiple values, use comma (,) as the delimiter.</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">httpc_status_ignore</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">404,500</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"Copy code to clipboard\\" title=\\"Copy\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n<li>\\n<p><strong>httpc_status_ignore_set</strong> <span class=\\"type\\">String</span></p>\\n<p>Default <code>Empty</code></p>\\n<p><code>whatap.error.HTTPC_ERROR</code> is ignored. For multiple values, use comma (,) as the delimiter.</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>Note</div><div class=\\"admonitionContent_BuS1\\"><p>Set it as <code>httpc_status_ignore_set=/a/b/c:400,/a/ab/c:404</code>. In Statistics/Error Analysis, enter the value for <code>HTTPC_URL</code>.</p></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the MariaDB monitoring does not work.</p>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the SQL (MySQL, SQL Server) connection information output error.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/nodejs/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Node.js Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/nodejs/index",
  "title": "Node.js Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/nodejs/index.mdx",
  "sourceDirName": "release-notes/nodejs",
  "slug": "/release-notes/nodejs/",
  "permalink": "/en/release-notes/nodejs/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/nodejs/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Node.js Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Previous PHP agent versions",
    "permalink": "/en/release-notes/php/php-previous"
  },
  "next": {
    "title": "Node.js Agent v0.5.0",
    "permalink": "/en/release-notes/nodejs/nodejs-0_5_0"
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
        filePath: nodejs_agent_namespaceObject,
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