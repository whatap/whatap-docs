"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[85631],{

/***/ 55227:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/python/python-agent.json
const python_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_1","ver":"v1.6.1","date":"2024-03-20","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <em>whatap-hook.log</em>の繰り返しログ呼び出しの問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_0","ver":"v1.6.0","date":"2024-03-13","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> FastAPIでremote hostに関する情報が見つからないとエージェントが動作しない現象を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_5","ver":"v1.6.5","date":"2024-05-31","Lists":[{"ver":"v1.6.5","hash":"v165","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Python 3.6 gevent使用時、トランザクションの終了漏れを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_6","ver":"v1.6.6","date":"2024-06-07","Lists":[{"ver":"v1.6.6","hash":"v166","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> FastAPI - remoteIP収集時に発生するバグを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_3","ver":"v1.6.3","date":"2024-04-17","Lists":[{"ver":"v1.6.3","hash":"v163","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Kubernetes環境コンテナで<code>containerID</code>を探す構文解析ロジックを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_2","ver":"v1.6.2","date":"2024-03-29","Lists":[{"ver":"v1.6.2","hash":"v162","product":"Python Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>exit_with_parent_process_enabled</code>オプションを追加</p>","details":"<ul>\\n<li>\\n<b>exit_with_parent_process_enabled</b>\\n<em>bool</em>\\n<br>\\n<p>既定値<code>false</code></p>\\n<p>Pythonエージェント<code>WHATAP_HOME</code>経路にある<em>whatap.conf</em>ファイルを使用して、そのオプションの値を設定してください。 モニタリング対象Pythonプロセス終了時<code>whatap_python</code>プロセスの終了可否を設定できます。 オプションの値を<code>true</code>で設定する場合、モニタリング対象のアプリケーション終了時に<code>whatap_python</code>プロセスが一緒に終了します。 最大1分かかります。</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_6_4","ver":"v1.6.4","date":"2024-05-14","Lists":[{"ver":"v1.6.4","hash":"v164","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Kubernetes環境コンテナで<code>containerID</code>を探す構文解析ロジックを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_9","ver":"v1.5.9","date":"2024-03-11","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>エージェントオプション設定時に改行なしで入力される現象を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_6","ver":"v1.5.6","date":"2024-02-02","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Python Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Superset対応</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_3","ver":"v1.5.3","date":"2024-01-05","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Pythonエージェントv1.4.9バージョン以降で、gunicornトランザクション収集エラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_4","ver":"v1.5.4","date":"2024-01-09","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Pythonエージェントv1.4.9バージョン以降で一部のPythonバージョンのモジュール依存性収集エラーを修正</p>","details":"<ul>\\n<li>Python 3.6</li>\\n<li>Python 3.7</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_8","ver":"v1.5.8","date":"2024-02-18","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Frappe Applicationのuser(接続者数に関する) 重複集計エラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_5","ver":"v1.5.5","date":"2024-02-01","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Frappeフレームワークで開発されたアプリケーションでデータベース接続情報にインスタンス(DB) 情報がない場合、性能収集エラーが発生する現象を改善</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/python/python-1_5_2","ver":"v1.5.2","date":"2024-01-03","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Python Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> INJECTION方式のログ収集コードエラーを修正</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/python/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Python Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/python/index",
  "title": "Python Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/python/index.mdx",
  "sourceDirName": "release-notes/python",
  "slug": "/release-notes/python/",
  "permalink": "/ja/release-notes/python/",
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
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Node.js Agentの旧バージョン",
    "permalink": "/ja/release-notes/nodejs/nodejs-previous"
  },
  "next": {
    "title": "Python Agent v1.6.6",
    "permalink": "/ja/release-notes/python/python-1_6_6"
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