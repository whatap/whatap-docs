"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[71054],{

/***/ 96019:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/browser/browser-agent.json
const browser_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_5","ver":"v1.3.5","date":"2024-03-21","Lists":[{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the custom event collection interface.</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the click event collection option.</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Responded for the angular framework <b>zone.js</b>.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_6","ver":"v1.3.6","date":"2024-05-30","Lists":[{"ver":"v1.3.6","hash":"v136","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the browser agent\'s bundle size.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_4","ver":"v1.3.4","date":"2024-02-19","Lists":[{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the function to collect the following metrics in <b>Network Information API</b> upon occurrence of page load or AJAX events.</p>","details":"<ul>\\n<li>downlink</li>\\n<li>effectiveType</li>\\n<li>rtt</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the function to collect the following metrics upon occurrence of resource events.</p>","details":"<ul>\\n<li>deliveryType</li>\\n<li>responseStatus</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the function to collect Content Security Policy (CSP) errors.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/browser/browser-agent-2023.json
const browser_agent_2023_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_1","ver":"v1.3.1","date":"2023-09-25","Lists":[{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>cookieSecure</code> option. You can set the secure option when the browser agent stores values such as user ID and session ID in the browser cookie storage.</p>"},{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the option that is set not to collect specific resources, does not work properly.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_2_2","ver":"v1.2.2","date":"2023-08-08","Lists":[{"ver":"v1.2.2","hash":"v122","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> When the fetch observer overrides the Fetch API, modified to pass through and return the arguments instead of creating and returning a request object.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_3","ver":"v1.3.3","date":"2023-12-27","Lists":[{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the AJAX MTID header option (APM integration).</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the <code>ignoreErrors</code> error filtering option.</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the user ID configuration interface.</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the configuration interface for the required collection user IDs.</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> The pages loaded as <code>Iframe</code> are excluded from collection.</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Among the AJAX response values, the status code of the <code>opaque</code> type has been changed from 0 to 10.</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Excluded the attribute options in the <code>MutaionObserver</code> interface (fixed the issue where overhead occurs when detecting changes in the element\'s attributes infinitely).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_2_0","ver":"v1.2.0","date":"2023-06-21","Lists":[{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Change","desc":"<p><code class=\\"Change\\">Change</code> Added the logger in some logics.</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the pageloadID (unique ID until page transition).</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Set the timeouts for each dispatcher and set the maximum wait times to 5 seconds.</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the forced sampling option by pcode.</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Improved the worker compression logic.</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the problem where the worker creation error is not handled in the Firefox browser.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_0","ver":"v1.3.0","date":"2023-09-06","Lists":[{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Applied the observable pattern as the data collection method.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Improved and modified the observer management logic for all dispatchers.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Improved the method override logic.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Collects data when exiting during a page load.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Added the AJAX request header collection option.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Collects the AJAX aborted metrics.</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Improved the page load event handling logic (interaction of 100 ms).</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_3_2","ver":"v1.3.2","date":"2023-10-24","Lists":[{"ver":"v1.3.2","hash":"v132","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where AJAX URLs are not collected upon any fetch error.</p>"}]},{"url":"https://docs.whatap.io/en/release-notes/browser/browser-v1_2_1","ver":"v1.2.1","date":"2023-07-06","Lists":[{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Set to collect errors every 5 seconds in case of same errors.</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Displayed the version inside the browser agent file.</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the issue where the error handling for AJAX Status 0 is not included.</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Fixed the problem where the detailed times are not collected when collecting Fetch APIs.</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/release-notes/browser/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Browser Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/browser/index",
  "title": "Browser Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/release-notes/browser/index.mdx",
  "sourceDirName": "release-notes/browser",
  "slug": "/release-notes/browser/",
  "permalink": "/en/release-notes/browser/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/browser/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Browser Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "URL",
    "permalink": "/en/release-notes/url/url-release-notes"
  },
  "next": {
    "title": "Browser Agent v1.3.6",
    "permalink": "/en/release-notes/browser/browser-v1_3_6"
  }
};
const assets = {

};





const toc = [{
  "value": "Release history for 2024",
  "id": "release-history-for-2024",
  "level": 2
}, {
  "value": "Release history for 2023",
  "id": "release-history-for-2023",
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
        filePath: browser_agent_namespaceObject,
        sort: "date",
        category: "agent"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "release-history-for-2023",
        children: "Release history for 2023"
      }), (0,jsx_runtime.jsx)(ImportJson, {
        filePath: browser_agent_2023_namespaceObject,
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