"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[46659],{

/***/ 17777:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/browser/browser-agent.json
const browser_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_4","ver":"v1.3.4","date":"2024-02-19","Lists":[{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ページロード、AJAXイベント発生時<b>Network Information API</b>の次の指標を追加収集</p>","details":"<ul>\\n<li>downlink</li>\\n<li>effectiveType</li>\\n<li>rtt</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>リソースイベント発生時に次の指標を追加収集</p>","details":"<ul>\\n<li>deliveryType</li>\\n<li>responseStatus</li>\\n</ul>"},{"ver":"v1.3.4","hash":"v134","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>Content Security Policy(CSP) エラー収集機能追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_5","ver":"v1.3.5","date":"2024-03-21","Lists":[{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ユーザー定義イベント収集インターフェースを追加</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>クリックイベント収集オプションを追加</p>"},{"ver":"v1.3.5","hash":"v135","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Angularフレームワーク<b>zone.js</b>関連対応</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_6","ver":"v1.3.6","date":"2024-05-30","Lists":[{"ver":"v1.3.6","hash":"v136","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ブラウザエージェントのバンドルサイズの改善</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/browser/browser-agent-2023.json
const browser_agent_2023_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_2_2","ver":"v1.2.2","date":"2023-08-08","Lists":[{"ver":"v1.2.2","hash":"v122","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>fetch observerがfetch apiをオーバーライディングするときRequest個体を作ってリターンせずにargumentsをパススルーしてリターンするよう修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_3","ver":"v1.3.3","date":"2023-12-27","Lists":[{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> Ajax MTIDヘッダーオプションの追加(APM連携機能)</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>ignoreErrors</code>エラーフィルタリングオプションの追加</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ユーザーID設定インターフェイスの追加</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>必須収集ユーザーID設定インターフェイスの追加</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>Iframe</code>で読み込まれたページの場合は収集対象から除外</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Ajaxレスポンス値のうち<code>opaque</code>タイプのステータスコードを、従来の0番から10番に変更</p>"},{"ver":"v1.3.3","hash":"v133","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>MutaionObserver</code>インターフェイスのattributeオプションを除く(要素の属性が無限に近く変更することを検知するにあたってオーバーヘッドが発生することを修正)。</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_0","ver":"v1.3.0","date":"2023-09-06","Lists":[{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>データ収集方法をオブザーバブルパターン適用</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>すべてのディスパッチャに対するオブザーバー管理ロジックの改善および修正</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>メソッドオーバーライドロジックの改善</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ページロード中に離脱した場合のデータ収集</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>AJAXリクエストヘッダー収集オプションの追加</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>AJAX abortedメトリクスの収集</p>"},{"ver":"v1.3.0","hash":"v130","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ページロードイベント処理ロジック改善(インタラクション100ms)</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_2_1","ver":"v1.2.1","date":"2023-07-06","Lists":[{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>同一エラーの場合は5秒に1回収集するよう設定</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>Webブラウザエージェントファイル内にバージョン表記</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>AJAX Status 0に対するエラー処理が含まれない問題の修正</p>"},{"ver":"v1.2.1","hash":"v121","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Fetchapi収集時、詳細時間が正常に収集されない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_2_0","ver":"v1.2.0","date":"2023-06-21","Lists":[{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Change","desc":"<p><code class=\\"Change\\">Change</code>一部ロジックにloggerを追加</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>pageloadID(ページ切り替え前まで固有のID)を追加</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ディスパッチャ別タイムアウト設定及び最大待機時間を5秒に設定</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>pcode別サンプリング強制設定オプションの追加</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ワーカー圧縮ロジックの改善</p>"},{"ver":"v1.2.0","hash":"v120","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Firefoxブラウザでワーカー生成エラーが発生した場合、エワーが正常に処理されない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_2","ver":"v1.3.2","date":"2023-10-24","Lists":[{"ver":"v1.3.2","hash":"v132","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Fetchエラーの際、Ajax URLが収集できない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/browser/browser-v1_3_1","ver":"v1.3.1","date":"2023-09-25","Lists":[{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code><code>cookieSecure</code>オプションの追加。ブラウザエージェントがブラウザクッキーストレージにuser id、session idなどの値を保存する時に、secureオプションを設定できます。</p>"},{"ver":"v1.3.1","hash":"v131","product":"Browser Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>特定のリソースを収集しないオプションが正しく動作しない問題の修正</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/browser/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Browser Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/browser/index",
  "title": "Browser Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/browser/index.mdx",
  "sourceDirName": "release-notes/browser",
  "slug": "/release-notes/browser/",
  "permalink": "/ja/release-notes/browser/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/browser/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Browser Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "URL",
    "permalink": "/ja/release-notes/url/url-release-notes"
  },
  "next": {
    "title": "Browser Agent v1.3.6",
    "permalink": "/ja/release-notes/browser/browser-v1_3_6"
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