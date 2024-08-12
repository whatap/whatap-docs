"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[22532],{

/***/ 20772:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/dotnet/dotnet-agent.json
const dotnet_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_7","ver":"v2.2.7","date":"2024-06-10","Lists":[{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>対応環境の分析ツール(<a href=\\"https://repo.whatap.io/windows/WhaTapDotnetScan.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">WhaTapDotnetScan.exe</a>)改善</p>","details":"<ul>\\n<li>\\n<p>ドットネットが設置されていない環境でも実行できるように改善</p>\\n</li>\\n<li>\\n<p>旧バージョンのドットネットランタイムを使用したり、ドットネットランタイムがインストールされていない場合に発生するエラーを修正</p>\\n</li>\\n</ul>"},{"ver":"v2.2.7","hash":"v227","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>処理許容量を超えたトランザクションを除去する過程で、開始時点だけが残り、終了時点が削除されるバグを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_3","ver":"v2.2.3","date":"2024-04-24","Lists":[{"ver":"v2.2.3","hash":"v223","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Rest APIモニタリング中に特定条件でCPU使用率が増加するバグを修正</p>","details":"<ul>\\n<li>\\n<p>特定の顧客からCPU使用量が増加する問題が発生したため、該当バグを修正します。</p>\\n</li>\\n<li>\\n<p>トラブルが発生しない顧客でも、エージェントをアップグレードすることをお勧めします。 性能向上に役立ちます。</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_5","ver":"v2.2.5","date":"2024-05-08","Lists":[{"ver":"v2.2.5","hash":"v225","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>サーバーのCPU性能に余裕がない時、モニタリングメッセージが遅延して蓄積され、ボトルネックを加速する不具合を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_4","ver":"v2.2.4","date":"2024-03-30","Lists":[{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>バイトコードの処理プロセス性能を改善</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ログの処理プロセス性能を改善</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>UDPパケットプロセス性能を改善</p>"},{"ver":"v2.2.4","hash":"v224","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <a href=\\"http://ASP.NET\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ASP.NET</a>MVCライブラリの処理プロセス性能を改善</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_8","ver":"v2.2.8","date":"2024-06-19","Lists":[{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> .NET 6、7、8バージョンの追加対応</p>","details":"<ul>\\n<li>\\n<p>ASP.NET core対応</p>\\n</li>\\n<li>\\n<p>HTTP Call、Redis、WCF client、ユーザーログ、Active Stack、SQL対応</p>\\n</li>\\n<li>\\n<p>別のインストールリンクでダウンロードします。 <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_core.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet_core.exe</a></p>\\n</li>\\n</ul>"},{"ver":"v2.2.8","hash":"v228","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_http_client_ip_header_key</code>オプションのデフォルト値を<code>X-Forwarded-For</code>に変更</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_2","ver":"v2.2.2","date":"2024-04-18","Lists":[{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> DataAdapter.Fill() メソッドモニタリングを追加</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> WebFormモニタリングに対応、ページ移動イベントをトランザクションとして処理</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントオプション<code>trace_http_client_ip_header_key</code>追加、詳しい内容は、<a href=\\"/ja/dotnet/agent-number-of-user#trace_http_client_ip_header_key\\">次の文書</a>を参照してください。</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> IPアドレスの表示エラーで同時接続者が正しく表示されない現象を修正</p>"},{"ver":"v2.2.2","hash":"v222","product":".NET Agent","type":"Deprecated","desc":"<p><code class=\\"Deprecated\\">Deprecated</code>エージェントがボディを読み込んでいる間に衝突が起こる可能性があるので<code>profile_http_body_enabled</code>オプションの対応を中止</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_6","ver":"v2.2.6","date":"2024-05-24","Lists":[{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントオプションの追加</p>","details":"<ul>\\n<li>\\n<p><strong>trace_ignore_url_set</strong> <span class=\\"type\\">String</span></p>\\n<p>トランザクションの追跡から除外するURLを設定します。 2つ以上の値を設定するには、コンマ (,)を区切り文字として利用します。</p>\\n</li>\\n<li>\\n<p><strong>trace_ignore_url_prefix</strong> <span class=\\"type\\">String</span></p>\\n<p>トランザクション収集の例外URL prefixを設定します。 設定した値と前の部分が一致するurlは、トランザクション性能を収集しません。 2つ以上の値を設定するには、コンマ (,)を区切り文字として利用します。</p>\\n</li>\\n</ul>"},{"ver":"v2.2.6","hash":"v226","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>System.Data.Common.DbCommand</code>モニタリング可否をエージェント設定オプションとして選択するように変更</p>","details":"<ul>\\n<li>\\n<p>一部の顧客の場合、古いアセンブリの影響でエラーが発生する現象が見つかりました。 エラーを再現する完璧な原因が見つからなかったため、モニタリングの対象から除外しました。</p>\\n</li>\\n<li>\\n<p>モニタリングの対象に追加するには、次のエージェントオプションを設定してIISを再起動します。</p>\\n<div class=\\"theme-admonition theme-admonition-tip admonition_xJq3 alert alert--success\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 12 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z\\"></path></svg></span>Tips</div><div class=\\"admonitionContent_BuS1\\"><p><strong>trace_db_command_methods</strong> <span class=\\"type\\">String</span></p><p>モニタリングするメソッド名を入力します。 2つ以上の値を設定するには、コンマ (,)を区切り文字として利用します。 すべてのメソッドをモニタリングするには、以下のように適用します。</p><div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">trace_db_command_methods</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">ExecuteReader, ExecuteReaderAsync, ExecuteNonQuery, ExecuteNonQueryAsync, ExecuteScalar, ExecuteScalarAsync</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"クリップボードにコードをコピーする\\" title=\\"コピー\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div></div></div>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_1","ver":"v2.2.1","date":"2024-04-09","Lists":[{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントオプションの追加</p>","details":"<ul>\\n<li>\\n<p><strong>prepend_app_pool_name</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値<code>false</code></p>\\n<p>オプション値を<code>true</code>に設定すると、トランザクションのURLの前にアプリケーションのフルネームを表示します。</p>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>古いバージョンの互換性を高めるためにインストールファイルを分離</p>","details":"<ul>\\n<li>\\n<p>.NET 4.6.1バージョン以降のランタイムを使用する場合: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet.exe</a></p>\\n</li>\\n<li>\\n<p>.NET 4.6.1バージョン未満のランタイムを使用するか、Windows Server 2012未満の場合: <a href=\\"https://repo.whatap.io/windows/whatap_dotnet_450.exe\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">whatap_dotnet_450.exe</a></p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>ノート</div><div class=\\"admonitionContent_BuS1\\"><p>Windows Server 2008から対応します。</p></div></div>\\n</li>\\n</ul>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>webservice_method_enabled</code>オプション：メソッドが重複して実行される場合にモニタリングされないバグを修正</p>"},{"ver":"v2.2.1","hash":"v221","product":".NET Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>32ビットドットネットランタイムで<em>whatap.conf</em>ファイルが見つからない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/dotnet/dotnet-2_2_9","ver":"v2.2.9","date":"2024-07-05","Lists":[{"ver":"v2.2.9","hash":"v229","product":".NET Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>マルチトランザクションのモニタリングに対応: WhaTapモニタリングプラットフォームのプロジェクトとして登録されたアプリケーションサービス間の呼び出しを追跡できます。</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/dotnet/index.mdx


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
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/dotnet/index.mdx",
  "sourceDirName": "release-notes/dotnet",
  "slug": "/release-notes/dotnet/",
  "permalink": "/ja/release-notes/dotnet/",
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
    "title": "Python Agent旧バージョン",
    "permalink": "/ja/release-notes/python/python-previous"
  },
  "next": {
    "title": ".NET Agent v2.3.0",
    "permalink": "/ja/release-notes/dotnet/dotnet-2_3_0"
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