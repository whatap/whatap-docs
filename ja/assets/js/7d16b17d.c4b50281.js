"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[22697],{

/***/ 34694:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/server/server-agent.json
const server_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_8","ver":"v2.5.8","date":"2024-05-21","Lists":[{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントの動作異常分析のコマンド<code>testall</code>を追加</p>"},{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> vxfs 8.0バージョン以降で、ディスクIO収集の異常を改善</p>"},{"ver":"v2.5.8","hash":"v258","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>v2.5.8</code>のメトリクスのタグエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_5","ver":"v2.6.5","date":"2024-08-09","Lists":[{"ver":"v2.6.5","hash":"v265","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Infoscale 8.xバージョンで、ディスクIO Utilizationの収集エラーを改善</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_4","ver":"v2.6.4","date":"2024-07-29","Lists":[{"ver":"v2.6.4","hash":"v264","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ログファイルキーワードの監視ポリシーを追加する時、対象ファイルの過去ログを読み間違える問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_2","ver":"v2.6.2","date":"2024-07-16","Lists":[{"ver":"v2.6.2","hash":"v262","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Windowsエージェントでbat、powershellスクリプトの実行機能を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_3","ver":"v2.6.3","date":"2024-07-24","Lists":[{"ver":"v2.6.3","hash":"v263","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>サーバーインベントリの収集オプションを追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_1","ver":"v2.6.1","date":"2024-06-26","Lists":[{"ver":"v2.6.1","hash":"v261","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Red Hat系列のLinuxで、<code>rpm -a</code>が周期的に実行されるエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_9","ver":"v2.5.9","date":"2024-05-24","Lists":[{"ver":"v2.5.9","hash":"v259","product":"Server Agent","type":"Feature","desc":"<li><code class=\\"Feature\\">Feature</code> zfs v2.2対応の追加</li>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_4","ver":"v2.5.4","date":"2024-03-11","Lists":[{"ver":"v2.5.4","hash":"v254","product":"Server Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> サーバー時間の同期化コマンドである <code>ntpq -p</code>結果を通じて時系列でモニタリングする機能を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_5","ver":"v2.5.5","date":"2024-03-13","Lists":[{"ver":"v2.5.5","hash":"v255","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Windows環境においてWhaTapサーバーエージェントのプロセス間通信モードにSOCKETモードを追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_7","ver":"v2.5.7","date":"2024-05-14","Lists":[{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>zpool iostat</code>収集機能の追加</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>任意の指定されたプロセスのpid別の詳細収集機能を追加</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> NFS hang発生時のデータ収集の中断問題を改善</p>"},{"ver":"v2.5.7","hash":"v257","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> ntpqエラー発生時のログ出力を改善</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_3","ver":"v2.5.3","date":"2024-03-07","Lists":[{"ver":"v2.5.3","hash":"v253","product":"Server Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> Windows OSにおけるServerエージェントのCPU使用の最適化、WMIメソッド呼び出しの最小化</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_2","ver":"v2.5.2","date":"2024-02-13","Lists":[{"ver":"v2.5.2","hash":"v252","product":"Server Agent","type":"New","desc":"<p><code class=\\"New\\">New</code>Windows OSのイベントログのうち、必要な条件を満たす件をWhaTapログに収集可能</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_6_0","ver":"v2.6.0","date":"2024-06-18","Lists":[{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> vxfs v8対応の追加</p>"},{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>収集負荷の増加(サーバー過負荷)時、プロセスモニタリングの収集周期20秒から60秒に臨時変更の機能を追加</p>"},{"ver":"v2.6.0","hash":"v260","product":"Server Agent","type":"Change","desc":"<p><code class=\\"Change\\">Change</code> ntpq終了処理の改善</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_1","ver":"v2.5.1","date":"2024-01-26","Lists":[{"ver":"v2.5.1","hash":"v251","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ネットワークのカード名に<code>+</code>がある場合、性能収集障害が発生するエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/server/server-2_5_0","ver":"v2.5.0","date":"2024-01-24","Lists":[{"ver":"v2.5.0","hash":"v250","product":"Server Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Naverクラウド環境にサーバーモニタリングエージェントをインストールする場合、タグに<code>uptime</code>が収集されて<code>uptime</code>イベントを適用できないエラーを修正</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/server/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Server Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/server/index",
  "title": "Server Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/server/index.mdx",
  "sourceDirName": "release-notes/server",
  "slug": "/release-notes/server/",
  "permalink": "/ja/release-notes/server/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/server/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Server Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Go Agent旧バージョン",
    "permalink": "/ja/release-notes/golang/golang-previous"
  },
  "next": {
    "title": "Server Agent v2.6.6",
    "permalink": "/ja/release-notes/server/server-2_6_6"
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
        filePath: server_agent_namespaceObject,
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