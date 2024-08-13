"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[76393],{

/***/ 60022:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/dotnet/dotnet-agent.json
const dotnet_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_4","ver":"v2.2.4","date":"2024-04-30","Lists":[{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the bytecode processing performance.</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the log processing performance.</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the UDP packet processing performance.</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a> MVC library processing performance.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_7","ver":"v2.2.7","date":"2024-06-10","Lists":[{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Improved the support environment analysis tool (<a href=\\"https://repo.whatap.io/windows/WhaTapDotnetScan.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WhaTapDotnetScan.exe</a>).</p>","details":"<ul>\\n<li>\\n<p>Improved so that it can run even in environments where .NET has not been installed.</p>\\n</li>\\n<li>\\n<p>Fixed the error that occurs when using a lower version of the .NET runtime or when the .NET runtime has not been installed.</p>\\n</li>\\n</ul>"},{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where the end point is deleted, leaving only the start point during removal of transactions that exceeded the processing allowance.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_9","ver":"v2.2.9","date":"2024-07-05","Lists":[{"ver":"v2.2.9","hash":"v229","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Supporting multi-transaction monitoring: You can trace calls between the application services registered as projects on the WhaTap monitoring platform.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_6","ver":"v2.2.6","date":"2024-05-24","Lists":[{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent options</p>","details":"<ul>\\n<li>\\n<p><strong>trace_ignore_url_set</strong> <span class=\\"type\\">String</span></p>\\n<p>Set URLs to exclude from transaction tracing. To set multiple values, use comma (,) as the delimiter.</p>\\n</li>\\n<li>\\n<p><strong>trace_ignore_url_prefix</strong> <span class=\\"type\\">String</span></p>\\n<p>Set the transaction collection exception URL\'s prefix. Any URLs whose prefix matches the set value do not collect the transaction performance. To set multiple values, use comma (,) as the delimiter.</p>\\n</li>\\n</ul>"},{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Modified to select the agent configuration\'s option to set whether to monitor <code>System.Data.Common.DbCommand</code>.</p>","details":"<ul>\\n<li>\\n<p>Some customers found that errors occurred due to outdated assemblies. Because we could not find a perfect cause to reproduce the error, it was excluded from monitoring.</p>\\n</li>\\n<li>\\n<p>To add it as the monitoring target, set the following agent option and restart IIS.</p>\\n<div class=\\"theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 12 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z\\"></path></svg></span>Tip</div><div class=\\"admonitionContent_BuS1\\"><p><strong>trace_db_command_methods</strong> <span class=\\"type\\">String</span></p><p>Enter the name of the method to monitor. To set multiple values, use comma (,) as the delimiter. To monitor all methods, apply as follows:</p><div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">trace_db_command_methods</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">ExecuteReader, ExecuteReaderAsync, ExecuteNonQuery, ExecuteNonQueryAsync, ExecuteScalar, ExecuteScalarAsync</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"Copy code to clipboard\\" title=\\"Copy\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div></div></div>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_5","ver":"v2.2.5","date":"2024-05-08","Lists":[{"ver":"v2.2.5","hash":"v225","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the error that accelerates bottlenecks because monitoring messages have been delayed and piled up when the server\'s CPU performance is limited.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_8","ver":"v2.2.8","date":"2024-06-19","Lists":[{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Additionally supported .NET 6, 7, and 8.</p>","details":"<ul>\\n<li>\\n<p>Supported the ASP.NET core.</p>\\n</li>\\n<li>\\n<p>Supported the HTTP call, Redis, WCF client, user log, Active Stack, and SQL.</p>\\n</li>\\n<li>\\n<p>Download it by using a separate installation link. <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_core.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet_core.exe</a></p>\\n</li>\\n</ul>"},{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Changed the default value of the <code>trace_http_client_ip_header_key</code> option to <code>X-Forwarded-For</code>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_3","ver":"v2.2.3","date":"2024-04-24","Lists":[{"ver":"v2.2.3","hash":"v223","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the bug where the CPU usage increases under specific conditions during Rest API monitoring.</p>","details":"<ul>\\n<li>\\n<p>The bug was fixed because the CPU usage increased for specific customers.</p>\\n</li>\\n<li>\\n<p>Even for the customers with no symptom, it is recommended to upgrade the agent. It helps improve performance.</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_2","ver":"v2.2.2","date":"2024-04-18","Lists":[{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Added the DataAdapter.Fill() method monitoring.</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> Supported WebForm monitoring and handled page movement events as transactions.</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent option, <code>trace_http_client_ip_header_key</code>. For more information, see <a href=\\"/en/dotnet/agent-number-of-user#trace_http_client_ip_header_key\\">the following</a>.</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where concurrent users are not displayed properly due to the IP address display error.</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code> Stopped support of the <code>profile_http_body_enabled</code> option due to potential crash while the agent is reading the body.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/dotnet/dotnet-2_2_1","ver":"v2.2.1","date":"2024-04-09","Lists":[{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the agent options</p>","details":"<ul>\\n<li>\\n<p><strong>prepend_app_pool_name</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>Default <code>false</code></p>\\n<p>If the option value is set to <code>true</code>, the full name of the application appears before the URL of the transaction.</p>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Separated installation files to increase compatibility with older versions.</p>","details":"<ul>\\n<li>\\n<p>In case of using the runtime at .NET 4.6.1 or later: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet.exe</a></p>\\n</li>\\n<li>\\n<p>In case of using the runtime at earlier than .NET 4.6.1 or later, or in the environment earlier than Windows Server 2012: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_450.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet.exe</a></p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>Note</div><div class=\\"admonitionContent_BuS1\\"><p>It is available starting from Windows Server 2008.</p></div></div>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>webservice_method_enabled</code> option: Fixed the bug where the methods are not monitored when executed nested.</p>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the <em>whatap.conf</em> file is not found in the 32-bit .NET runtime.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/dotnet/index.mdx


const frontMatter = {
	id: 'index',
	title: '.NET Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/dotnet/index",
  "title": ".NET Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/dotnet/index.mdx",
  "sourceDirName": "release-notes/dotnet",
  "slug": "/release-notes/dotnet/",
  "permalink": "/en/release-notes/dotnet/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/dotnet/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": ".NET Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Previous Python agent versions",
    "permalink": "/en/release-notes/python/python-previous"
  },
  "next": {
    "title": ".NET Agent v2.3.0",
    "permalink": "/en/release-notes/dotnet/dotnet-2_3_0"
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
        filePath: dotnet_agent_namespaceObject,
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