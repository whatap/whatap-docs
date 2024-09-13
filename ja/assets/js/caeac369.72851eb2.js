"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[92128],{

/***/ 30717:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/php/php-agent.json
const php_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"http://localhost:4000/release-notes/php/php-2_8_1","ver":"v2.8.1","date":"2024-07-24","Lists":[{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> IPアドレス別トランザクション統計を収集するエージェント設定オプションを追加</p>","details":"<blockquote>\\n<p><strong>whatap.stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>、既定値<code>false</code></p>\\n</blockquote>"},{"ver":"v2.8.1","hash":"v281","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> 統計圧縮転送を設定するエージェント設定オプションを追加</p>","details":"<blockquote>\\n<p><strong>whatap.stat_zip_enabled</strong> <span class=\\"type\\">Boolean</span>、既定値<code>true</code></p>\\n</blockquote>"}]},{"url":"http://localhost:4000/release-notes/php/php-2_7_2","ver":"v2.7.2","date":"2024-03-06","Lists":[{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>ログモニタリングファイル名に日付形式の変数を使用するように修正</p>","details":"<blockquote>\\n<p>Python <code>strftime()</code>使用を基準に修正します。 例、20240101: %Y%m%d</p>\\n</blockquote>"},{"ver":"v2.7.2","hash":"v272","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>インストーラースクリプト(<em>/usr/whatap/php/install.sh</em>)案内文の修正</p>"}]},{"url":"http://localhost:4000/release-notes/php/php-2_7_1","ver":"v2.7.1","date":"2024-01-24","Lists":[{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>whatap.onode</code>オプション設定後、名前ではなくハッシュ(数字)値のみ表記されるエラーを修正</p>"},{"ver":"v2.7.1","hash":"v271","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Ubuntu 14バージョンでwhatap-php.serviceファイルが認識されないエラーを修正</p>"}]},{"url":"http://localhost:4000/release-notes/php/php-2_8_0","ver":"v2.8.0","date":"2024-06-19","Lists":[{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> linux aarch64対応</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>既存<em>paramkey.txt</em>代わりに<em>security.conf</em>ファイルを使用</p>","details":"<p>既存<em>security.conf</em>ファイルの<code>paramkey</code>キー値を使用します。 デフォルト値は、ランダム値ではなく<code>WHATAP</code>に指定するように変更します。 <code>WHATAP</code>指定されると、キーの入力なしで復号化できます。</p>"},{"ver":"v2.8.0","hash":"v280","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL文章の正規化オプション設定の変更</p>","details":"<ul>\\n<li>\\n<p>SQL文章でパラメータを分離して、正規化する機能を常に有効にします。 <code>whatap.trace_sql_normalize_enabled</code>オプションを常に<code>true</code>に設定します。</p>\\n</li>\\n<li>\\n<p>既に正規化オプションを無効に(正規化の中止設定)した状態であれば、正規化してパラメータを別表記する設定を有効にします。</p>\\n<ul>\\n<li><code>whatap.profile_sql_param_enabled</code>オプションを<code>true</code>に設定します。</li>\\n<li>正規化されたパラメータを、別に暗号化して収集します。</li>\\n<li><em>security.conf</em>の<code>paramkey</code>に復号化してデータを確認できます。</li>\\n</ul>\\n</li>\\n</ul>"}]},{"url":"http://localhost:4000/release-notes/php/php-2_7_0","ver":"v2.7.0","date":"2024-01-10","Lists":[{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> PHP 8.3バージョンに対応</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>マルチトランザクショントレースでTrace context(W3C) に対応</p>","details":"<p>Trace contextに対応する<strong>OpenTelmetry</strong>とマルチトランザクショントレースの連携に対応します。</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> SQL、Method、HTTP callのリソース指標の収集を修正</p>","details":"<p>トランザクション開始時点のリソース(cpu、memory)と、各スタッフ開始時点のリソースの違いを収集します。</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>設定ファイル(<em>whatap.conf</em>)がない場合、新たに生成するよう修正</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>アクティブトランザクション一覧から外部呼び出し累積件数が累積時間として誤って収集されるエラーを修正</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Linux環境でwhatap-phpサービス(<code>whatap-php.service</code>)実行エラーを修正</p>"},{"ver":"v2.7.0","hash":"v270","product":"PHP Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> PHP 8.1.0バージョンから8.1.2バージョンまで発生するsegmentationエラー修正(ユーザー関数に対する収集中止)</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/php/index.mdx


const frontMatter = {
	id: 'index',
	title: 'PHP Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/php/index",
  "title": "PHP Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/php/index.mdx",
  "sourceDirName": "release-notes/php",
  "slug": "/release-notes/php/",
  "permalink": "/ja/release-notes/php/",
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
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Java Batch Agent v2.2.19",
    "permalink": "/ja/release-notes/java-batch/java-batch-2_2_19"
  },
  "next": {
    "title": "PHP Agent v2.8.2",
    "permalink": "/ja/release-notes/php/php-2_8_2"
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