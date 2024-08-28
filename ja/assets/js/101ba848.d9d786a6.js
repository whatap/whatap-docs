"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[3638],{

/***/ 53137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _site_src_components_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67068);
/* harmony import */ var _site_src_components_UItext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5379);


const frontMatter = {
	id: 'java-2_1_1',
	title: 'Java Agent v2.1.1',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/java/java-2_1_1",
  "title": "Java Agent v2.1.1",
  "description": "2022-07-12",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/java/java-2.1.1.mdx",
  "sourceDirName": "release-notes/java",
  "slug": "/release-notes/java/java-2_1_1",
  "permalink": "/ja/release-notes/java/java-2_1_1",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/java/java-2.1.1.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "java-2_1_1",
    "title": "Java Agent v2.1.1",
    "toc_max_heading_level": 2,
    "displayed_sidebar": "releaseSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "releaseSidebar"
};
const assets = {

};





const toc = [{
  "value": "2022-07-12",
  "id": "2022-07-12",
  "level": 2
}, {
  "value": "新機能",
  "id": "新機能",
  "level": 3
}, {
  "value": "遅いhttpとsqlの発生時に通知メッセージを送信",
  "id": "遅いhttpとsqlの発生時に通知メッセージを送信",
  "level": 4
}, {
  "value": "トランザクション、http呼び出しのエラーレベルを調整する機能",
  "id": "トランザクションhttp呼び出しのエラーレベルを調整する機能",
  "level": 4
}, {
  "value": "2022-06-30",
  "id": "2022-06-30",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート",
  "level": 3
}, {
  "value": "Javaエージェントのメタタグのオプション名を修正",
  "id": "javaエージェントのメタタグのオプション名を修正",
  "level": 4
}, {
  "value": "バグ",
  "id": "バグ",
  "level": 3
}, {
  "value": "コンテナでID抽出エラーを修正",
  "id": "コンテナでid抽出エラーを修正",
  "level": 4
}, {
  "value": "2022-06-22",
  "id": "2022-06-22",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-1",
  "level": 3
}, {
  "value": "エージェント設定のlicenseキーオプションの修正",
  "id": "エージェント設定のlicenseキーオプションの修正",
  "level": 4
}, {
  "value": "2022-06-16",
  "id": "2022-06-16",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-2",
  "level": 3
}, {
  "value": "エージェント実行ロゴの修正",
  "id": "エージェント実行ロゴの修正",
  "level": 4
}, {
  "value": "非同期http呼び出しエラーの通知メッセージを修正",
  "id": "非同期http呼び出しエラーの通知メッセージを修正",
  "level": 4
}, {
  "value": "バグ",
  "id": "バグ-1",
  "level": 3
}, {
  "value": "クラスシグネチャー認証時のバグを修正",
  "id": "クラスシグネチャー認証時のバグを修正",
  "level": 4
}, {
  "value": "2022-05-18",
  "id": "2022-05-18",
  "level": 2
}, {
  "value": "新機能",
  "id": "新機能-1",
  "level": 3
}, {
  "value": "netstat機能の追加",
  "id": "netstat機能の追加",
  "level": 4
}, {
  "value": "アップデート",
  "id": "アップデート-3",
  "level": 3
}, {
  "value": "エラー通知設定アップデート",
  "id": "エラー通知設定アップデート",
  "level": 4
}, {
  "value": "バグ",
  "id": "バグ-2",
  "level": 3
}, {
  "value": "エージェントログ出力時のエラーを修正",
  "id": "エージェントログ出力時のエラーを修正",
  "level": 4
}, {
  "value": "jdk 15でクラス詳細を見るときのエラー修正",
  "id": "jdk-15でクラス詳細を見るときのエラー修正",
  "level": 4
}, {
  "value": "2022-05-16",
  "id": "2022-05-16",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-4",
  "level": 3
}, {
  "value": "エラー通知メッセージの内容を追加",
  "id": "エラー通知メッセージの内容を追加",
  "level": 4
}, {
  "value": "バグ",
  "id": "バグ-3",
  "level": 3
}, {
  "value": "sql追跡時、LocalDateを追跡できない問題",
  "id": "sql追跡時localdateを追跡できない問題",
  "level": 4
}, {
  "value": "2022-05-11",
  "id": "2022-05-11",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-5",
  "level": 3
}, {
  "value": "エラー通知メッセージの内容を追加",
  "id": "エラー通知メッセージの内容を追加-1",
  "level": 4
}, {
  "value": "2022-04-25",
  "id": "2022-04-25",
  "level": 2
}, {
  "value": "新機能",
  "id": "新機能-2",
  "level": 3
}, {
  "value": "Alibaba Druid ConnectionPool追跡機能の追加",
  "id": "alibaba-druid-connectionpool追跡機能の追加",
  "level": 4
}, {
  "value": "Http Callエラー発生時に通知機能を追加",
  "id": "http-callエラー発生時に通知機能を追加",
  "level": 4
}, {
  "value": "新機能",
  "id": "新機能-3",
  "level": 3
}, {
  "value": "Http Callエラー通知機能の追加",
  "id": "http-callエラー通知機能の追加",
  "level": 4
}, {
  "value": "2022-03-18",
  "id": "2022-03-18",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-6",
  "level": 3
}, {
  "value": "データベース呼び出しURLの保存",
  "id": "データベース呼び出しurlの保存",
  "level": 4
}, {
  "value": "データベース呼び出しハッシュ値の削除",
  "id": "データベース呼び出しハッシュ値の削除",
  "level": 4
}, {
  "value": "新機能",
  "id": "新機能-4",
  "level": 3
}, {
  "value": "フェデレーション サービスの状態追跡機能を追加",
  "id": "フェデレーション-サービスの状態追跡機能を追加",
  "level": 4
}, {
  "value": "2022-02-18",
  "id": "2022-02-18",
  "level": 2
}, {
  "value": "バグ",
  "id": "バグ-4",
  "level": 3
}, {
  "value": "Http呼び出しエラーの時間設定のバグを修正",
  "id": "http呼び出しエラーの時間設定のバグを修正",
  "level": 4
}, {
  "value": "アップデート",
  "id": "アップデート-7",
  "level": 3
}, {
  "value": "アクティブスタックのスレッド名の表示設定を追加",
  "id": "アクティブスタックのスレッド名の表示設定を追加",
  "level": 4
}, {
  "value": "非同期スレッド名を表示する設定を追加",
  "id": "非同期スレッド名を表示する設定を追加",
  "level": 4
}, {
  "value": "2022-02-11",
  "id": "2022-02-11",
  "level": 2
}, {
  "value": "バグ",
  "id": "バグ-5",
  "level": 3
}, {
  "value": ".xプラグインのint認識エラーを修正",
  "id": "xプラグインのint認識エラーを修正",
  "level": 4
}, {
  "value": "バッチエージェントのgetResultSetエラーの修正",
  "id": "バッチエージェントのgetresultsetエラーの修正",
  "level": 4
}, {
  "value": "アップデート",
  "id": "アップデート-8",
  "level": 3
}, {
  "value": "loggingを含むファイル名に対する自動化オプションを追加",
  "id": "loggingを含むファイル名に対する自動化オプションを追加",
  "level": 4
}, {
  "value": "Javaエージェントからログのトランザクション情報を追加",
  "id": "javaエージェントからログのトランザクション情報を追加",
  "level": 4
}, {
  "value": "Httpクライアントのタイムアウトの適用およびエラー処理",
  "id": "httpクライアントのタイムアウトの適用およびエラー処理",
  "level": 4
}, {
  "value": "jmx pool設定の追加",
  "id": "jmx-pool設定の追加",
  "level": 4
}, {
  "value": "バッチエージェントのactive開始部分の修正",
  "id": "バッチエージェントのactive開始部分の修正",
  "level": 4
}, {
  "value": "2022-01-12",
  "id": "2022-01-12",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-9",
  "level": 3
}, {
  "value": "DB callのエラー件数をリアルタイム統計に追加",
  "id": "db-callのエラー件数をリアルタイム統計に追加",
  "level": 4
}, {
  "value": "HttpとDB接続にリアルタイムログを追加",
  "id": "httpとdb接続にリアルタイムログを追加",
  "level": 4
}, {
  "value": "エージェントログで指定したonameを表示",
  "id": "エージェントログで指定したonameを表示",
  "level": 4
}, {
  "value": "jdbc url抽出の区切り文字を追加",
  "id": "jdbc-url抽出の区切り文字を追加",
  "level": 4
}, {
  "value": "logsink、log4jプラグインを使用する場合、自動認識機能を追加",
  "id": "logsinklog4jプラグインを使用する場合自動認識機能を追加",
  "level": 4
}, {
  "value": "logsink収集データの追加",
  "id": "logsink収集データの追加",
  "level": 4
}, {
  "value": "2022-01-03",
  "id": "2022-01-03",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-10",
  "level": 3
}, {
  "value": "コレクション監視の変更",
  "id": "コレクション監視の変更",
  "level": 4
}, {
  "value": "2021-12-21",
  "id": "2021-12-21",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-11",
  "level": 3
}, {
  "value": "スレッド中断設定の追加",
  "id": "スレッド中断設定の追加",
  "level": 4
}, {
  "value": "http headerから&#39;Cookie&#39;項目を除外",
  "id": "http-headerからcookie項目を除外",
  "level": 4
}, {
  "value": "2021-12-17",
  "id": "2021-12-17",
  "level": 2
}, {
  "value": "アップデート",
  "id": "アップデート-12",
  "level": 3
}, {
  "value": "weaving設定追加",
  "id": "weaving設定追加",
  "level": 4
}, {
  "value": "エージェント環境変数の除外値の追加",
  "id": "エージェント環境変数の除外値の追加",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-07-12",
        children: "2022-07-12"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "新機能",
        children: "新機能"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "遅いhttpとsqlの発生時に通知メッセージを送信",
        children: "遅いhttpとsqlの発生時に通知メッセージを送信"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "遅いhttpやsqlの呼び出しが発生する場合、通知メッセージを送信するように機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "トランザクションhttp呼び出しのエラーレベルを調整する機能",
        children: "トランザクション、http呼び出しのエラーレベルを調整する機能"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "トランザクションやhttp呼び出しの状態を通常の呼び出しとして認識できるように機能を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値 (default)\ntransaction_status_mode=normal\nhttpc_status_mode=normal\n\n# エラー無視\ntransaction_status_mode=info\nhttpc_status_mode=info\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-30",
        children: "2022-06-30"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "javaエージェントのメタタグのオプション名を修正",
        children: "Javaエージェントのメタタグのオプション名を修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Javaエージェントのメタタグのオプション名を修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値 (default)\nagent_meta_tags_enabled=true\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "コンテナでid抽出エラーを修正",
        children: "コンテナでID抽出エラーを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "コンテナ環境でのID抽出エラーを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-22",
        children: "2022-06-22"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-1",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エージェント設定のlicenseキーオプションの修正",
        children: "エージェント設定のlicenseキーオプションの修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "whatap.confで、licenseとaccesskeyのオプションの両方を利用できるように修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 同一機能\nlicense=\naccesskey=\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-06-16",
        children: "2022-06-16"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-2",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エージェント実行ロゴの修正",
        children: "エージェント実行ロゴの修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Javaエージェント実行時のロゴ内容を修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "The Best Observability in Java\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "非同期http呼び出しエラーの通知メッセージを修正",
        children: "非同期http呼び出しエラーの通知メッセージを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "非同期http呼び出しエラー発生時にstatus codeを表示するよう通知メッセージを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ-1",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "クラスシグネチャー認証時のバグを修正",
        children: "クラスシグネチャー認証時のバグを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エージェント設定メニューのクラスシグネチャー表示の要請時にNullPointExceptionが発生する問題を修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-18",
        children: "2022-05-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "新機能-1",
        children: "新機能"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "netstat機能の追加",
        children: "netstat機能の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "oshiライブラリを使用して、netstat機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-3",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エラー通知設定アップデート",
        children: "エラー通知設定アップデート"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "トランザクションエラー通知に関する設定を追加し、設定名を修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\n# エラー通知機能の活性化有無\nexception_alert_enabled=false\n\n# トランザクションエラー通知の活性化有無\nexception_alert_service_enabled=false\n\n# http呼び出し時のエラー通知の活性化有無\nexception_alert_httpc_enabled=false\n\n# jdbc呼び出し時のエラー通知の活性化有無\nexception_alert_jdbc_enabled=false\n\n# エラー通知メッセージに表示したスタックの長さ\nexception_alert_stack_size=50\n\n# エラー通知メッセージの非活性化時間 = 5分(30000ms)\nexception_alert_silent_time=300000\n\n# トランザクションエラー通知で無視するstatus code\nstatus_alert_ignore=403\n\n# トランザクションエラー通知で無視するurl:status_codeの組み合わせ\nstatus_alert_ignore_set=/api/test/timeout:408\n\n# http callエラー通知で無視したstatus code\nhttpc_status_alert_ignore=408,500\n\n# http callエラー通知で無視したurl:status codeの組み合わせ\nhttpc_status_url_alert_ignore_set=/api/test/timeout:408\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ-2",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エージェントログ出力時のエラーを修正",
        children: "エージェントログ出力時のエラーを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Timestampログの記録時にエラーが発生する問題を修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jdk-15でクラス詳細を見るときのエラー修正",
        children: "jdk 15でクラス詳細を見るときのエラー修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エージェント設定画面でクラスシグネチャーを参照できない現象を修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-16",
        children: "2022-05-16"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-4",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エラー通知メッセージの内容を追加",
        children: "エラー通知メッセージの内容を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エラー通知メッセージにトランザクションのurl情報を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ-3",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "sql追跡時localdateを追跡できない問題",
        children: "sql追跡時、LocalDateを追跡できない問題"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "java.time.LocalDate"
        }), "を追跡できない問題を修正"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-05-11",
        children: "2022-05-11"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-5",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エラー通知メッセージの内容を追加-1",
        children: "エラー通知メッセージの内容を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "エラー通知メッセージにstatus codeを追加しました。無視した通知の数をエラー通知メッセージに追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-04-25",
        children: "2022-04-25"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "新機能-2",
        children: "新機能"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "alibaba-druid-connectionpool追跡機能の追加",
        children: "Alibaba Druid ConnectionPool追跡機能の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Alibaba Druid connection poolを追跡できるように機能を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\ndruid_pool_enabled=false\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-callエラー発生時に通知機能を追加",
        children: "Http Callエラー発生時に通知機能を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http Callエラー発生時に通知を送る機能を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\nhttpc_event_detail_enable=false\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2022-03-24"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "新機能-3",
        children: "新機能"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-callエラー通知機能の追加",
        children: "Http Callエラー通知機能の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http呼び出し時にエラーが発生すると通知を受けられるように機能を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_enabled"
        }), "オプションを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "に設定することで機能を有効にし、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_stack_size"
        }), "オプションを指定した値に合わせてエラースタックを通知メッセージを受け取ることができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["通知が発生すると", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "exception_alert_silent_time"
        }), "オプションで指定された期間、エラー通知を無効にすることができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\nexception_alert_enabled=false\nexception_alert_buffer_size=5\nexception_alert_stack_size=50\n\n# 5分 (30000ms)\nexception_alert_silent_time=300000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-03-18",
        children: "2022-03-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-6",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "データベース呼び出しurlの保存",
        children: "データベース呼び出しURLの保存"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "データベース呼び出しのURLを保存するように修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "データベース呼び出しハッシュ値の削除",
        children: "データベース呼び出しハッシュ値の削除"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "データベース呼び出しハッシュ値をERRORテキストから削除しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "新機能-4",
        children: "新機能"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "フェデレーション-サービスの状態追跡機能を追加",
        children: "フェデレーション サービスの状態追跡機能を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "target IPまたはサービスの接続状態をログモニタリングのliveTailで確認できるように、連携サービス状態の追跡機能を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "logsink_rt_enabled"
        }), "オプションを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "true"
        }), "に設定して機能を有効にし、#RemoteTraceカテゴリでログを収集します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "正常なレスポンスの場合のレベルはOK、エラーの場合のレベルはエラーです。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["通常のレスポンスの場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink_rt_ok_interval"
            }), "設定の間隔でログが記録されます。既定値は30秒です。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["エラーレスポンスの場合、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "logsink_rt_error_interval"
            }), "設定の間隔でログが記録されます。既定値は5秒です。"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\nlogsink_rt_enabled=false\n\nlogsink_rt_error_interval=5000\nlogsink_rt_ok_interval=30000\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-02-18",
        children: "2022-02-18"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ-4",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http呼び出しエラーの時間設定のバグを修正",
        children: "Http呼び出しエラーの時間設定のバグを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http呼び出し時、エラー時間のmaxを0に設定してもエラーが表示されるバグを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-7",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "アクティブスタックのスレッド名の表示設定を追加",
        children: "アクティブスタックのスレッド名の表示設定を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "アクティブスタックのスレッド名を表示できるように設定を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\nactive_stack_thread_name_enabled=false\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "yardバージョンが低い場合、trueに設定するとプロトコルエラーによりエージェント接続が継続的に切断されます。"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "非同期スレッド名を表示する設定を追加",
        children: "非同期スレッド名を表示する設定を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "非同期スレッドのidと名前を表示できるように設定を追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値\ndebug_async_thread_enabled=false\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-02-11",
        children: "2022-02-11"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "バグ-5",
        children: "バグ"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "xプラグインのint認識エラーを修正",
        children: ".xプラグインのint認識エラーを修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "x拡張子を使用するプラグインでint値を使用できないエラーを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "バッチエージェントのgetresultsetエラーの修正",
        children: "バッチエージェントのgetResultSetエラーの修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "バッチエージェントのTraceSQL.getResultSetエラーを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-8",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "loggingを含むファイル名に対する自動化オプションを追加",
        children: "loggingを含むファイル名に対する自動化オプションを追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logging文字列を含むファイル名をプラグインとして使用する場合、自動的にhookingオプションを無効にする機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "javaエージェントからログのトランザクション情報を追加",
        children: "Javaエージェントからログのトランザクション情報を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "プラグインでないJavaエージェントからログにトランザクション情報を追加する機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "httpクライアントのタイムアウトの適用およびエラー処理",
        children: "Httpクライアントのタイムアウトの適用およびエラー処理"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Httpクライアントにタイムアウトを適用し、タイムアウト発生時にエラー処理を有効にする機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jmx-pool設定の追加",
        children: "jmx pool設定の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "jmx pool objectの既定値を修正しました。jmx poolのデータソース名の使用有無を決定できるオプションを追加しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "データソース名を登録する場合はjndi方式を実行し、名前を登録しない場合は基本url方式で動作します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "jmx_pool_dsname_enabled=false\njmx_pool_object=\"*:type=DataSource,class=*,name=*\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "バッチエージェントのactive開始部分の修正",
        children: "バッチエージェントのactive開始部分の修正"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "バッチプロセスのMainスレッドにactivestackを残すようにバッチエージェントを修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-01-12",
        children: "2022-01-12"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-9",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "db-callのエラー件数をリアルタイム統計に追加",
        children: "DB callのエラー件数をリアルタイム統計に追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "データベース呼び出し時にエラーが発生した場合、リアルタイム統計にエラー件数を追加するように設定しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "httpとdb接続にリアルタイムログを追加",
        children: "HttpとDB接続にリアルタイムログを追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Http接続とDB接続のリアルタイムログを追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エージェントログで指定したonameを表示",
        children: "エージェントログで指定したonameを表示"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "onameを-Dオプションとして指定した場合でも、エージェントログでPIDの代わりにエージェント名を表示するように修正しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "jdbc-url抽出の区切り文字を追加",
        children: "jdbc url抽出の区切り文字を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "jdbc urlの抽出時に「?」、「;」を基準に切り捨てできるよう修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "「;」追加\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "logsinklog4jプラグインを使用する場合自動認識機能を追加",
        children: "logsink、log4jプラグインを使用する場合、自動認識機能を追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logsink、log4jプラグインを使用する場合、自動的にhookingオプションを使用しないように機能を追加しました。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "logsink収集データの追加",
        children: "logsink収集データの追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "logsinkで収集するデータを追加しました。設定によってtransation id、login id、http hostデータ収集の有無を決定できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "# 既定値 (default)\n_logtag_enabled = false         # tag \nlogtag_txid_enabled=false       # transation id\nlogtag_login_enabled=false      # login id\nlogtag_httphost_enabled=false   # http host\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2022-01-03",
        children: "2022-01-03"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-10",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "コレクション監視の変更",
        children: "コレクション監視の変更"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "既存のCollectionクラスをhookingする方式から、CollectionHolderを間接的にCollectionクラス情報を表示できるように修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Collectionを生成するクラスを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "collectionn_nonstatic_holders"
        }), "設定に追加し、Collection Map項目で確認することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "collection_nonstatic_holders=org.apache.catalina.session.ManagerBase\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2021-12-21",
        children: "2021-12-21"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-11",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "スレッド中断設定の追加",
        children: "スレッド中断設定の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["threadの動作時間が設定値を超えた場合に、threadの停止可否を設定できるように項目を追加しました。デフォルト設定値は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "false"
        }), "です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "auto_thread_kill_enabled=false  # 既定値\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "http-headerからcookie項目を除外",
        children: "http headerから'Cookie'項目を除外"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "http headerから'Cookie'項目を除外するよう修正しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "(既存) cookie、accept、user-agent、referer\n(修正) Cookie、cookie、accept、user-agent、referer\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "2021-12-17",
        children: "2021-12-17"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "アップデート-12",
        children: "アップデート"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "weaving設定追加",
        children: "weaving設定追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["プラグインを追跡できるようにweaving設定を追加しました。 既存の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving_reserved"
        }), "設定と同じ機能で、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving"
        }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving_reserved"
        }), "設定の両方の機能が動作します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "weaving=tomcat10\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "エージェント環境変数の除外値の追加",
        children: "エージェント環境変数の除外値の追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["環境変数の参照機能で特定のキー値を入力する場合、検索項目から除外できるように機能を追加しました。 区切り文字は「,」で大文字と小文字を区分しません。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "agent_env_system_enabled"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "agent_env_jvm_enabled"
        }), "の設定と関連付けて使用することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "agent_env_system_enabled=false\nagent_env_jvm_enabled=true\n\nagent_env_ignore_keys=user.timezone,user.name,user.language\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 67068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function Status({ children , priority  }) {
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
};


/***/ }),

/***/ 5379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ UItext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);


function UItext({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
};


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