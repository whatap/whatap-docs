"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[82510],{

/***/ 68032:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/nodejs/nodejs-agent.json
const nodejs_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_1","ver":"v0.5.1","date":"2024-08-28","Lists":[{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code>ポット(port)番号を追加してエージェント名(ONAME)を生成するエージェントオプションを追加(例、NODE-14-103-3000)</p>","details":"<blockquote>\\n<p><strong>oname_port_postfix_enabled</strong> <span class=\\"type\\">Boolean</span> 既定値<code>false</code></p>\\n</blockquote>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\" type=\\"1\\">New</code>ログモニタリングのためのエージェントオプションを追加</p>","details":"<ul>\\n<li>\\n<p><strong>logsink_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値 <code>false</code></p>\\n<p>ログモニタリングを有効にするかどうかを設定します。</p>\\n</li>\\n<li>\\n<p><strong>logsink_trace_txid_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値 <code>true</code></p>\\n<p>ログにトランザクションIDを挿入して、トランザクション トレースのログタブの表示有無を指定します。</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値 <code>true</code></p>\\n<p>ログメッセージの最大サイズを制限するかどうかを設定します。</p>\\n</li>\\n<li>\\n<p><strong>logsink_limit_content_length</strong> <span class=\\"type\\">Number</span></p>\\n<p>既定値 <code>10,000</code></p>\\n<p>ログメッセージの最大長さを設定します。 この値は<code>logsink_limit_content_enabled</code>オプションが<code>true</code>に設定された場合のみ適用されます。</p>\\n</li>\\n</ul>"},{"ver":"v0.5.1","hash":"v051","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>Globalパッケージのfetch関数モニタリング中に例外が発生した時、エラーメッセージが出力されるように修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_98","ver":"v0.4.98","date":"2024-07-09","Lists":[{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> IPアドレス別トランザクション統計を収集するエージェント設定オプションを追加</p>","details":"<blockquote>\\n<p><strong>stat_ipurl_enabled</strong> <span class=\\"type\\">Boolean</span>、既定値<code>false</code></p>\\n</blockquote>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> License、Server Host値を環境変数と<em>whatap.conf</em>ファイルに同時適用できるように修正</p>","details":"<p>環境変数と<em>whatap.conf</em>すべてのファイルに適用すると、環境変数値に基づいて設定されます。</p>"},{"ver":"v0.4.98","hash":"v0498","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> ONODE NAME設定時、ONODE値の生成ロジックを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_95","ver":"v0.4.95","date":"2024-04-29","Lists":[{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>プロファイルデータを圧縮転送するためのエージェントオプションを追加</p>","details":"<p><strong>profile_zip_enabled</strong> <span class=\\"type\\">Boolean</span></p>"},{"ver":"v0.4.95","hash":"v0495","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>SQL変数、HTTPクエリの照会に必要なセキュリティキーが作成されたファイル名を変更</p>","details":"<p><em>paramkey.txt</em> → <em>security.conf</em></p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_96","ver":"v0.4.96","date":"2024-05-30","Lists":[{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>サーバでクライアントにデータを送信する際、データ収集のためのwebsocketパッケージモニタリングを追加</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェント設定オプションを追加</p>","details":"<ul>\\n<li>\\n<p><strong>ignore_nextjs_build_file_enabled</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値 <code>true</code></p>\\n<p><em>Next.js</em>ビルドファイルに対するモニタリング可否を設定します。 このオプション値を<code>true</code>に設定すると、<em>Next.js</em>ビルドファイルをモニタリングしません。</p>\\n</li>\\n<li>\\n<p><strong>ignore_nextjs_build_file_path</strong> <span class=\\"type\\">String</span></p>\\n<p>既定値<code>/next/</code></p>\\n<p>モニタリングで除外する<em>Next.js</em>ビルドファイルの開始パスを指定できます。 <code>ignore_nextjs_build_file_enabled</code>値が<code>true</code>の場合に適用されます。 コンマ(,)を区切り文字として複数のパスを設定できます。</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">ignore_nextjs_build_file_path</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">/next/abc/,/next/def/</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"クリップボードにコードをコピーする\\" title=\\"コピー\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>trace_sampling_enabled</code>オプションのデフォルト値を<code>true</code>に変更</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> HTTPモニタリングでsocketエラーに関する統計データの収集を無視するように修正</p>"},{"ver":"v0.4.96","hash":"v0496","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>トランザクションの結果が<b>Lost Connection</b>場合、URLが表示されない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_5_0","ver":"v0.5.0","date":"2024-08-12","Lists":[{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code> whatapエージェントログファイルのパスを設定するエージェントオプションを追加</p>","details":"<blockquote>\\n<p><strong>log_root</strong> <span class=\\"type\\">String</span> 既定値なし</p>\\n</blockquote>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Node.jsビルトイン関数である<code>fetch</code>に対するモニタリング機能を追加</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\" type=\\"1\\">Feature</code> Redisモニタリングパッケージを追加(<a href=\\"https://www.npmjs.com/package/ioredis\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ioredis</a>)</p>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\" type=\\"1\\">Changed</code>ビルドファイルのモニタリング無視オプションの名称を修正</p>","details":"<ul>\\n<li><code>ignore_nextjs_build_file_enabled</code> → <code>ignore_build_file_enabled</code></li>\\n<li><code>ignore_nextjs_build_file_path</code> → <code>ignore_build_file_path</code></li>\\n</ul>"},{"ver":"v0.5.0","hash":"v050","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\" type=\\"0\\">Fixed</code>  <code>auto_oname_prefix</code>オプションの値が<code>false</code>でも<code>true</code>で適用されるエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_90","ver":"v0.4.90","date":"2024-02-05","Lists":[{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェント設定オプションを追加</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_not_found_ignore</strong> <span class=\\"type\\">Boolean</span></p>\\n<p>既定値<code>false</code></p>\\n<p>Not Foundエラーが特定の時間(<code>httpc_not_found_ignore_time</code>)に50件以上発生すると、モニタリング検出を無視します。</p>\\n</li>\\n<li>\\n<p><strong>httpc_not_found_ignore_time</strong> <span class=\\"type\\">Milisecond</span></p>\\n<p>既定値<code>300000</code></p>\\n<p><code>httpc_not_found_ignore</code>値が<code>true</code>である場合、Not Foundエラーを無視する時間を設定します。</p>\\n</li>\\n</ul>"},{"ver":"v0.4.90","hash":"v0490","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongooseトラッキングができない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_97","ver":"v0.4.97","date":"2024-06-03","Lists":[{"ver":"v0.4.97","hash":"v0497","product":"Node.js Agent","type":"New","desc":"<p><code class=\\"New\\">New</code>Kubernetes環境の使用可否を環境変数として適用可能</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_94","ver":"v0.4.94","date":"2024-03-07","Lists":[{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <a href=\\"http://socket.io\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">socket.io</a>モニタリングモジュールを追加</p>","details":"<p><code>trace_sampling_enabled</code>、<code>trace_sampling_tps</code>オプションを使用して、サンプリングされたデータを確認できます。 <code>trace_ignore_url_prefix</code>オプションに<code>/socket.io</code>経路を追加して追跡できないように設定してください。</p>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェント設定オプションを追加</p>","details":"<ul>\\n<li>\\n<p><strong>profile_http_header_ignore_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>既定値 <code>Cookie,cookie,accept,user-agent,referer</code></p>\\n<p>HTTPヘッダー名を指定して収集情報から除外できます。 指定したHTTPヘッダー名の値は収集から除外され、\'#\'として表示されます。</p>\\n</li>\\n<li>\\n<p><strong>profile_http_parameter_keys</strong> <span class=\\"type\\">String</span></p>\\n<p>設定されたキーに対応するパラメータ情報のみを記録します。 複数の項目を登録する場合は、コンマ(,)を区切り文字として使用してください。 設定しない場合、すべてのパラメータ情報が記録されます。</p>\\n</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>profile_http_parameter_enabled</code>オプションが<code>true</code>に設定された場合</p>","details":"<ul>\\n<li>HTTPリクエストのBodyデータを出力しないように修正</li>\\n<li>HTTPパラメータ情報を暗号化し、<em>paramkey.txt</em>値で復号化できるように修正</li>\\n</ul>"},{"ver":"v0.4.94","hash":"v0494","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> Mongooseモニタリング例外エラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_89","ver":"v0.4.89","date":"2024-01-22","Lists":[{"ver":"v0.4.89","hash":"v0489","product":"Node.js Agent","type":"Fixed","desc":"<li><code class=\\"Fixed\\">Fixed</code> ONODEの設定エラーを修正</li>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_88","ver":"v0.4.88","date":"2024-01-11","Lists":[{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>trace_http_client_ip_header_key=x-forwarded-for</code>オプションを設定した状態でヘッダで<code>x-forwarded-for</code>値に複数のIPが転送される場合(コンマ基準)、最初の値にIPを設定するよう修正</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> TCP、UDPソケットモニタリングを修正</p>"},{"ver":"v0.4.88","hash":"v0488","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>profile_http_header_enabled</code>オプションの値が<code>true</code>であれば、profileのheaders値を表す方式を修正(JSON → key=value\\\\n)</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/nodejs/nodejs-0_4_86","ver":"v0.4.86","date":"2024-01-04","Lists":[{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>エージェントオプションの追加</p>","details":"<ul>\\n<li>\\n<p><strong>httpc_status_ignore</strong> <span class=\\"type\\">String</span></p>\\n<p>既定値<code>Empty</code></p>\\n<p>無視する<code>HTTPC_ERROR</code>コードを設定します。 複数の値を対象とする場合は、コンマ（,）を区切り文字として使用してください。</p>\\n<div class=\\"language-ini codeBlockContainer_Ckt0 theme-code-block\\" style=\\"--prism-color:#bfc7d5;--prism-background-color:#292d3e\\"><div class=\\"codeBlockTitle_Ktv7\\">whatap.conf</div><div class=\\"codeBlockContent_biex\\"><pre tabindex=\\"0\\" class=\\"prism-code language-ini codeBlock_bY9V thin-scrollbar\\" style=\\"color:#bfc7d5;background-color:#292d3e\\"><code class=\\"codeBlockLines_e6Vv\\"><span class=\\"token-line\\" style=\\"color:#bfc7d5\\"><span class=\\"token key attr-name\\" style=\\"color:rgb(255, 203, 107)\\">httpc_status_ignore</span><span class=\\"token punctuation\\" style=\\"color:rgb(199, 146, 234)\\">=</span><span class=\\"token value attr-value\\">404,500</span><br></span></code></pre><div class=\\"buttonGroup__atx\\"><button type=\\"button\\" aria-label=\\"クリップボードにコードをコピーする\\" title=\\"コピー\\" class=\\"clean-btn\\"><span class=\\"copyButtonIcons_eSgA\\" aria-hidden=\\"true\\"><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonIcon_y97N\\"><path fill=\\"currentColor\\" d=\\"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z\\"></path></svg><svg viewbox=\\"0 0 24 24\\" class=\\"copyButtonSuccessIcon_LjdS\\"><path fill=\\"currentColor\\" d=\\"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z\\"></path></svg></span></button></div></div></div>\\n</li>\\n<li>\\n<p><strong>httpc_status_ignore_set</strong> <span class=\\"type\\">String</span></p>\\n<p>既定値<code>Empty</code></p>\\n<p><code>whatap.error.HTTPC_ERROR</code>を無視します。 複数の値を対象とする場合は、コンマ(,)を区切り文字として使用してください。</p>\\n<div class=\\"theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary\\"><div class=\\"admonitionHeading_Gvgb\\"><span class=\\"admonitionIcon_Rf37\\"><svg viewbox=\\"0 0 14 16\\"><path fill-rule=\\"evenodd\\" d=\\"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z\\"></path></svg></span>ノート</div><div class=\\"admonitionContent_BuS1\\"><p><code>httpc_status_ignore_set=/a/b/c:400,/a/ab/c:404</code>のように設定してください。 この場合、URLは統計/エラー分析に<code>HTPC_URL</code>の値を入力します。</p></div></div>\\n</li>\\n</ul>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> MariaDBモニタリングができない問題を修正</p>"},{"ver":"v0.4.86","hash":"v0486","product":"Node.js Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> SQL(MySQL、SQL Server) コネクション情報出力エラーを修正</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/nodejs/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Node.js Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/nodejs/index",
  "title": "Node.js Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/nodejs/index.mdx",
  "sourceDirName": "release-notes/nodejs",
  "slug": "/release-notes/nodejs/",
  "permalink": "/ja/release-notes/nodejs/",
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
    "toc_min_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "PHP Agent旧バージョン",
    "permalink": "/ja/release-notes/php/php-previous"
  },
  "next": {
    "title": "Node.js Agent v0.5.1",
    "permalink": "/ja/release-notes/nodejs/nodejs-0_5_1"
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