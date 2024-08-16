"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[22959],{

/***/ 69014:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/k8s/k8s-agent.json
const k8s_agent_namespaceObject = /*#__PURE__*/JSON.parse('[{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_8","ver":"v1.7.8","date":"2024-07-24","Lists":[{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">クラスター</span> &gt; <span class=\\"uitext\\">ノードディスクリスト</span>メニューの追加</p>","details":"<p>WhaTap Kubernetesモニタリングの <span class=\\"uitext\\">ノードディスクリスト</span>で各ノードにマウントされた個別ディスクの現在の使用量、余裕空間、性能指標をリアルタイムでモニタリングし、ディスクの状態を簡単に確認できます。 これにより、クラスターのディスク リソースを効率的に管理し、潜在的な問題を事前に把握して対応できます。</p>"},{"ver":"v1.7.8","hash":"v178","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">ワークロード</span> &gt; <span class=\\"uitext\\">Service リスト</span>メニューの追加</p>","details":"<p>Kubernetesクラスター内で実行中のすべてのサービスの状態と情報を総合的に提供します。 WhaTap Kubernetesモニタリングの <span class=\\"uitext\\">Service リスト</span>メニューにより、クラスター内のネットワーク構成を容易に把握し、各サービスの構成と現状を効率的にモニタリングできます。</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_5","ver":"v1.7.5","date":"2024-06-18","Lists":[{"ver":"v1.7.5","hash":"v175","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>ファイルシステムが、nfsであるディスクのメトリクス収集オプションを追加</p>","details":"<ul>\\n<li><code>collect_nfs_disk_enabled</code>: nfsディスクの収集可否を決定するオプションです。 デフォルト値は<code>true</code>です。</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_2","ver":"v1.7.2","date":"2024-06-02","Lists":[{"ver":"v1.7.2","hash":"v172","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <code>server_disk</code>カテゴリに次の指標を追加</p>","details":"<ul>\\n<li>\\n<p><code>blksize</code>: ディスクブロックのサイズ。 ディスクのデフォルト読み取り/書き込み単位のサイズを示します。</p>\\n</li>\\n<li>\\n<p><code>readIops</code>: 1秒あたりに実行される読み込み作業の数、Input/Output Operations Per Secondです。</p>\\n</li>\\n<li>\\n<p><code>writeIops</code>: 1秒あたりに実行される書き込み作業の数です。</p>\\n</li>\\n<li>\\n<p><code>queueLength</code>: ディスクI/Oリクエストのキューの長さです。 待機中のI/Oリクエストの数を示します。</p>\\n</li>\\n<li>\\n<p><code>readBps</code>: 1秒あたりに読み込んだデータ量(Bytes per Second)です。</p>\\n</li>\\n<li>\\n<p><code>writeBps</code>: 1秒あたりに書き込んだデータ量です。</p>\\n</li>\\n<li>\\n<p><code>ioPercent</code>: ディスクのI/O作業にかかった時間の割合です。 これは、全体時間に対するI/O作業に使用された時間のパーセンテージを表します。</p>\\n</li>\\n<li>\\n<p><code>totalInode</code>: ファイルシステムで使用可能なすべてのinodeの数です。</p>\\n</li>\\n<li>\\n<p><code>usedInode</code>: 使用中のinodeの数です。</p>\\n</li>\\n<li>\\n<p><code>usedInodePercent</code>: 使用中のinodeのパーセンテージです。</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_4","ver":"v1.7.4","date":"2024-06-07","Lists":[{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> whatap-node-helperコンテナで、agentの連動失敗時に発生するエラーログをデバッグ処理</p>"},{"ver":"v1.7.4","hash":"v174","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ノードディスクの性能データの収集時に発生するエラーを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_3","ver":"v1.7.3","date":"2024-06-04","Lists":[{"ver":"v1.7.3","hash":"v173","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> whatap-master-agentで、Podイベントの監視によって発生していたapiserverの過度な監査ログの生成問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_1","ver":"v1.7.1","date":"2024-05-17","Lists":[{"ver":"v1.7.1","hash":"v171","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <strong>OOMKilled</strong>コンテナの収集ロジックを修正</p>","details":"<blockquote>\\n<p><code>lastState</code>が<strong>OOMKilled</strong>のコンテナの場合、コンテナの<code>state</code>が<strong>Running</strong>にもかかわらず、<strong>OOMKilled</strong>と見られるバグを修正</p>\\n</blockquote>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_7","ver":"v1.7.7","date":"2024-07-11","Lists":[{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> JavaアプリケーションとKubernetesエージェントの連動方式を追加</p>","details":"<ul>\\n<li>\\n<p>Javaエージェントコンテナの環境変数に<code>WHATAP_JAVA_AGENT_PATH</code>値を追加してコンテナID連動機能を追加</p>\\n</li>\\n<li>\\n<p>エージェントプロセスIDを利用してprocの情報照会、当該情報でアプリケーションコンテナprocess nameからWhaTap Javaホーム(<code>$WHATAP_HOME</code>) を抽出</p>\\n</li>\\n<li>\\n<p>上記のプロセスでWhaTap Javaホーム(<code>$WHATAP_HOME</code>)が見つからない場合は、runtimeAPIを使用してエージェントイメージからWhaTap Javaホームを抽出</p>\\n</li>\\n<li>\\n<p>エージェントのバージョンと形式をチェックし、次を基準に満たしてこそvalidバージョンでcontainerID連動機能を遂行</p>\\n<ol>\\n<li>\\n<p>ファイル名が<em>whatap.agent-<code>X.Y.Z</code>.jar</em>で、バージョンの情報が2.2.33より大きいか同じ場合(<code>X.Y.Z</code> &gt;= 2.2.33)</p>\\n</li>\\n<li>\\n<p>ファイル名が<em>whatap.agent.kube.jar</em>である場合</p>\\n</li>\\n</ol>\\n</li>\\n</ul>"},{"ver":"v1.7.7","hash":"v177","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>イベント収集方式の変更: エージェント起動時点以降に生成されたイベントに対してのみデータを収集(<code>kube_event</code>)</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_6","ver":"v1.7.6","date":"2024-07-01","Lists":[{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>タグカウントを追加</p>","details":"<ul>\\n<li><strong>kube_service_pod_mapping</strong>項目を追加</li>\\n<li><strong>kube_pod</strong>カテゴリに<code>podUid</code>タグを追加</li>\\n<li><strong>kube_service</strong>カテゴリに<code>externalIp</code>タグ, PORT(<code>portName</code>, <code>nodePort</code>, <code>servicePort</code>, <code>targetPort</code>) フィールドを追加</li>\\n<li><strong>kube_event</strong>カテゴリに<code>watch_event_type</code>、<code>resource_version</code>データを追加</li>\\n<li><strong>kube_event</strong>重複通知現象を削除</li>\\n</ul>"},{"ver":"v1.7.6","hash":"v176","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <strong>whatap-node-helper</strong>コンテナ環境変数(<code>env</code>)に<code>WHATAP_JAVA_AGENT_PATH</code>を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_7_0","ver":"v1.7.0","date":"2024-05-13","Lists":[{"ver":"v1.7.0","hash":"v170","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <b>TagCount</b>にデータを追加</p>","details":"<ul>\\n<li>\\n<p><code>kube_pod</code>カテゴリーに<code>reason</code>, <code>message</code>フィールドを追加</p>\\n<ul>\\n<li><code>reason</code>: ポッドstatusのreason</li>\\n<li><code>message</code>: ポッドstatusのmessage</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>container</code>カテゴリーに<code>kube_state</code>(コンテナstate) フィールドを追加</p>\\n</li>\\n<li>\\n<p>pendingステータスポッド、コンテナデータ(<code>kube_pending_pod</code>, <code>kube_pending_container</code>)を収集</p>\\n<p>関連データは、<span class=\\"uitext\\">実験室</span> &gt; <span class=\\"uitext\\">Pending Pod状況</span>メニューで確認できます。</p>\\n</li>\\n<li>\\n<p>サービス(<code>kube_service</code>)に関するデータを収集</p>\\n</li>\\n<li>\\n<p>エージェント起動時、<code>#whatapEvent</code>カテゴリでユーザーのインストールRuntime、クラスターのRuntimeを転送</p>\\n</li>\\n</ul>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_6_1","ver":"v1.6.1","date":"2024-04-17","Lists":[{"ver":"v1.6.1","hash":"v161","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>Kubernetesイベントが一定時間後に欠落するバグを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_6_0","ver":"v1.6.0","date":"2024-04-05","Lists":[{"ver":"v1.6.0","hash":"v160","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <span class=\\"uitext\\">クラスター</span> &gt; <span class=\\"uitext\\">Object Manifest</span>メニューのwarningイベントの連携ロジックのバグを修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_9","ver":"v1.5.9","date":"2024-04-04","Lists":[{"ver":"v1.5.9","hash":"v159","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ノードなどの特定のKubernetesイベントが欠落する現象を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_8","ver":"v1.5.8","date":"2024-03-26","Lists":[{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> apiserverのendpointがIPV6形式の場合、apiserverダッシュボードにデータが出力されない問題を修正</p>"},{"ver":"v1.5.8","hash":"v158","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>最初のWarningイベントの発生時に収集するオブジェクトマニフェストの重複収集防止のロジックを追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_7","ver":"v1.5.7","date":"2024-03-07","Lists":[{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> whatap-node-helperは、ノードディスクおよびコンテナのイメージ、性能データを収集します。 当該コンテナのロギング及び設定機能を追加してデバッグを行い、問題が発生した場合、当該機能に対するオプション処理が可能です。</p>","details":"<p>次のオプションを追加しました。</p>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>マスターエージェントからKubernetesイベントを収集する場合、エージェントが再起動されると、イベントの重複収集を中止するロジックを削除しました。 サーバーサイドで重複イベントのドロップロジックを実行するように変更しました。</p>"},{"ver":"v1.5.7","hash":"v157","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> watchLog機能を利用するとノードシステムの特定のログファイル(例、<em>/var/log/message</em>)をWhaTapダッシュボードで監視できます。 システムのログ ローテーションロジックによってファイルが変更された場合、ログの追加収集に失敗するバグを修正しました。</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_6","ver":"v1.5.6","date":"2024-02-23","Lists":[{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code> <span class=\\"uitext\\">コンテナ</span> &gt; <span class=\\"uitext\\">コンテナボリューム</span>メニューでMountType属性を照会する機能を追加</p>"},{"ver":"v1.5.6","hash":"v156","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> IPv6アドレスを使用する場合、<span class=\\"uitext\\">コンテナ</span> &gt; <span class=\\"uitext\\">コンテナボリューム</span>メニューで照会されない問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_5","ver":"v1.5.5","date":"2024-02-14","Lists":[{"ver":"v1.5.5","hash":"v155","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> ReplicationController listの権限がない場合、マスターエージェントが30秒間隔でログを生成する問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_4","ver":"v1.5.4","date":"2024-02-06","Lists":[{"ver":"v1.5.4","hash":"v154","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code> <code>kube_pod</code>カテゴリで<code>cpu_per_limit</code>フィールド値が100以上になる問題を修正</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_3","ver":"v1.5.3","date":"2024-01-30","Lists":[{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>メトリクス収集時<code>server_disk</code>、<code>server_network</code>、<code>server_base</code>カテゴリーの収集間隔を5秒単位で合わせます。</p>"},{"ver":"v1.5.3","hash":"v153","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code>メトリクス収集時<code>kube_node</code>カテゴリにノードの<b>external-ip</b>、<b>internal-ip</b>を追加</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_1","ver":"v1.5.1","date":"2024-01-25","Lists":[{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> kube workload(ReplicationController)をメトリクス(<code>container</code>、<code>kube_pod</code>、<code>kube_pod_stat</code>), オブジェクトマニフェストに追加</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> crioランタイムで<code>overlay_config_path</code>オプションをカスタム設定する場合\\nwhatap-node-helperコンテナenvに<code>overlay_config_path</code>オプションを追加してパスを設定できるように修正</p>"},{"ver":"v1.5.1","hash":"v151","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>ネームスペースプロジェクトバージョンの転送間隔を変更：5分間で5秒転送後timeout → 5分間で5秒転送、以降1分ごとに転送</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_0","ver":"v1.5.0","date":"2024-01-16","Lists":[{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Feature","desc":"<p><code class=\\"Feature\\">Feature</code>オブジェクトマニフェスト収集機能を追加</p>","details":"<p>1日に1回、ユーザーが設定したタイムゾーンの午前0時にクラスターのオブジェクト情報を収集して保存する機能を追加しました。 この機能を利用するには、次のようにエージェントオプションを設定してください。 詳細については、<a href=\\"/kubernetes/object-manifest\\">次の文書</a>を参照してください。</p>"},{"ver":"v1.5.0","hash":"v150","product":"Kubernetes Agent","type":"Fixed","desc":"<p><code class=\\"Fixed\\">Fixed</code>コントロールプレーンモニタリングエージェントの性能を改善。クラスターと通信するクライアントの性能改善を含みます。</p>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_5_2","ver":"v1.5.2","date":"2024-01-26","Lists":[{"ver":"v1.5.2","hash":"v152","product":"Kubernetes Agent","type":"Changed","desc":"<li><code class=\\"Changed\\">Changed</code>マスターエージェントバージョン情報をネームスペースプロジェクトに転送するように修正</li>"}]},{"url":"https://docs.whatap.io/ja/release-notes/k8s/k8s-1_4_9","ver":"v1.4.9","date":"2024-01-08","Lists":[{"ver":"v1.4.9","hash":"v149","product":"Kubernetes Agent","type":"Changed","desc":"<p><code class=\\"Changed\\">Changed</code> <code>collect_control_plane_monitoring_enabled</code>オプションを追加。このオプションの値を<code>true</code>に設定するとコントロールプレーン(Control Plane) 指標を収集します。</p>"}]}]');
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/release-notes/k8s/index.mdx


const frontMatter = {
	id: 'index',
	title: 'Kubernetes Agent Release Notes',
	displayed_sidebar: 'releaseSidebar',
	hide_table_of_contents: true,
	toc_min_heading_level: 2
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/k8s/index",
  "title": "Kubernetes Agent Release Notes",
  "description": "Release history for 2024",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/k8s/index.mdx",
  "sourceDirName": "release-notes/k8s",
  "slug": "/release-notes/k8s/",
  "permalink": "/ja/release-notes/k8s/",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/k8s/index.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "index",
    "title": "Kubernetes Agent Release Notes",
    "displayed_sidebar": "releaseSidebar",
    "hide_table_of_contents": true,
    "toc_min_heading_level": 2
  },
  "sidebar": "releaseSidebar",
  "previous": {
    "title": "Server AIX Agent v1.2.7",
    "permalink": "/ja/release-notes/server-aix/server-aix-1_2_7"
  },
  "next": {
    "title": "Kubernetes Agent v1.7.8",
    "permalink": "/ja/release-notes/k8s/k8s-1_7_8"
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
        filePath: k8s_agent_namespaceObject,
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