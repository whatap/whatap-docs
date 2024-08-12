"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[97677],{

/***/ 1716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["選択したプロジェクトの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "管理"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "エージェントインストール"
        })
      }), " メニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "プロジェクトコード"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "収集サーバーIP"
      }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "プロジェクトアクセスキー"
      }), "を確認します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "operating-systems",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "lx",
        label: "Linux Shell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\r\nexport WHATAP_HOST=xxxx.xxxx.xxxx\r\nexport WHATAP_PCODE=xxx\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "wd",
        label: "Windows Powershell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title='SH'",
            children: "$WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\r\n$WHATAP_HOST=xxxx.xxxx.xxxx\r\n$WHATAP_PCODE=xxx\n"
          })
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 87980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "次の例は、topコマンドを実行して、特定のプロセスのCPUとメモリ使用量を継続的に収集します。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "#メトリクスカテゴリー\r\nCATEGORY=\"my_category\"\r\n\r\nexport PID=収集するプロセスのPID\r\ntop -b -p $PID | awk '/'$PID'/{ printf \"{\\\"pid\\\": %s, \\\"cpuPercent\\\": %s, \\\"memoryPercent\\\": %s, \\\"cmd\\\": \\\"%s\\\"}\\n\",$1, $9, $10, $12}; system(\"\")' | \\\r\n./focus -license $WHATAP_LICENSE \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -category $CATEGORY\n"
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
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

/***/ 98931:
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
/* harmony import */ var _common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1716);
/* harmony import */ var _common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87980);


const frontMatter = {
	id: 'focus-setting',
	title: '設定',
	description: 'Focusの設定方法について説明します。',
	tags: [
		'Focus',
		'設定'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "focus/focus-setting",
  "title": "設定",
  "description": "Focusの設定方法について説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/focus/focus-setting.mdx",
  "sourceDirName": "focus",
  "slug": "/focus/focus-setting",
  "permalink": "/ja/focus/focus-setting",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/focus/focus-setting.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Focus",
      "permalink": "/ja/tags/focus"
    },
    {
      "inline": true,
      "label": "設定",
      "permalink": "/ja/tags/設定"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "focus-setting",
    "title": "設定",
    "description": "Focusの設定方法について説明します。",
    "tags": [
      "Focus",
      "設定"
    ]
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "インストール",
    "permalink": "/ja/focus/install-focus"
  },
  "next": {
    "title": "使用例",
    "permalink": "/ja/focus/focus-usage"
  }
};
const assets = {

};





const toc = [{
  "value": "プロジェクトアクセスキーと収集サーバーのIP確認",
  "id": "プロジェクトアクセスキーと収集サーバーのip確認",
  "level": 2
}, ..._common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "フィルターに特定のタグを追加",
  "id": "addtagfilter",
  "level": 2
}, {
  "value": "通知を送信する",
  "id": "通知を送信する",
  "level": 2
}, {
  "value": "SQL Query結果の収集",
  "id": "sql-query結果の収集",
  "level": 2
}, {
  "value": "ログファイルキーワードマッチングログの収集",
  "id": "ログファイルキーワードマッチングログの収集",
  "level": 2
}, {
  "value": "WhaTapログ分析サービス",
  "id": "whatapログ分析サービス",
  "level": 2
}, {
  "value": "OSリソースの使用量の収集",
  "id": "osリソースの使用量の収集",
  "level": 2
}, {
  "value": "ランダムなプログラムとスクリプトの実行結果の収集",
  "id": "ランダムなプログラムとスクリプトの実行結果の収集",
  "level": 2
}, ..._common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "WhaTapプロジェクトから任意の収集データをアップロードできます。Focusは、プロジェクトの基本エージェントがインストールされていなくても使用できます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクトアクセスキーと収集サーバーのip確認",
        children: "プロジェクトアクセスキーと収集サーバーのIP確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "addtagfilter",
        children: "フィルターに特定のタグを追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザーは、フィルターで利用する特定の文字列をタグとして設定できます。設定により、WhaTapモニタリングサービス画面で収集されたデータをそのタグの名前と値でフィルタリングできます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\" showLineNumbers {5,6}",
              children: "# -tag.[ユーザータグのキー名][空白][ユーザータグの値]\r\n\r\n./focus -license $WHATAP_LICENSE \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -tag.CustomTagName CustomTagValue \\\r\n    -tag.MyServer1 server_01 \\\r\n    ...\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\" showLineNumbers {5,6}",
              children: "# -tag.[ユーザータグのキー名][空白][ユーザータグの値]\r\n\r\n.\\focus.exe -license $WHATAP_LICENSE `\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\r\n    -tag.CustomTagName CustomTagValue `\r\n    -tag.MyServer1 server_01 `\r\n    ...\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "通知を送信する",
        children: "通知を送信する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザーのカスタム通知を直ぐに送信できます。通知を送信すると、Focusは終了します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#通知の重大度を選択します。\r\nlevel={info|warn|fatal}\r\n#通知のタイトル\r\ntitle=必要な通知のタイトル\r\n#通知の本文\r\nmessage=目的の通知の本文\r\n./focus -license $WHATAP_LICENSE \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -alert -level $level -title $title -message $message\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#通知の重大度を選択します。\r\n$level=\"{info|warn|fatal}\"\r\n#通知の題名\r\n$title=\"希望する通知の題名\"\r\n#通知の本文\r\n$message=\"希望する通知の本文\"\r\n.\\focus.exe -license $WHATAP_LICENSE `\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\r\n    -alert -level $level -title $title -message $message\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "sql-query結果の収集",
        children: "SQL Query結果の収集"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザー定義SQL Queryの実行結果を時系列で無期限に収集します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#メトリクスカテゴリ\r\ncategory=my_category\r\n#データベースドライバー\r\ndriver={mysql|postgres}\r\n#データベース接続情報\r\ndburl=\"ID:パスワード@tcp(IP:ポート番号)/データベース\"\r\n#Sql Query\r\nsqlquery=\"select some, columns from sometable\"\r\n./focus -license $WHATAP_LICENSE \\\r\n    -category $category \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -rdb $driver -rdb.connect $dburl \\\r\n    -rdb.sql $sqlquery\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#メトリクスカテゴリ\r\n$CATEGORY=\"my_category\"\r\n#データベースドライバー\r\n$driver=\"{mysql|postgres}\"\r\n#データベース接続情報\r\n$dburl=\"ID:パスワード@tcp(IP:ポート番号)/データベース\"\r\n#Sql Query\r\n$sqlquery=\"select some, columns from sometable\"\r\n\r\n.\\focus.exe -license $WHATAP_LICENSE `\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\r\n    -category $CATEGORY `\r\n    -rdb $driver -rdb.connect $dburl `\r\n    -rdb.sql $sqlquery\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ログファイルキーワードマッチングログの収集",
        children: "ログファイルキーワードマッチングログの収集"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "指定したテキストログファイルでログが発生する場合、キーワードを含めると、対応するログラインが収集されます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#メトリクスカテゴリ\r\ncategory=my_category\r\n#ログファイル\r\nLOG_FILE=ログファイルパス\r\n#2つ以上のログキーワードを入力する際にキーワード間で使用する区切り文字\r\nLOG_KEYWORDS_SEPERATOR=,\r\n#ログキーワードを「,」でつないで入力\r\nLOG_KEYWORDS=keyword1,keyword2\r\n./focus -license $WHATAP_LICENSE \\\r\n    -category $category \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -tail $LOG_FILE \\\r\n    -tail.keys $LOG_KEYWORDS \\\r\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#メトリクスカテゴリ\r\n$CATEGORY=\"my_category\"\r\n#ログファイル\r\nLOG_FILE=ログファイルパス\r\n#2つ以上のログキーワードを入力する際にキーワード間で使用する区切り文字\r\nLOG_KEYWORDS_SEPERATOR=,\r\n#ログキーワードを区切り文字でつないで入力\r\nLOG_KEYWORDS=keyword1,keyword2\r\n\r\n.\\focus.exe -license $WHATAP_LICENSE `\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\r\n    -category $CATEGORY `\r\n    -tail $LOG_FILE `\r\n    -tail.keys $LOG_KEYWORDS `\r\n    -tail.seperator $LOG_KEYWORDS_SEPERATOR\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatapログ分析サービス",
        children: "WhaTapログ分析サービス"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "指定したテキストログファイルでログが発生した場合、WhaTapログ分析サービスにリアルタイムでアップロードします。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "operating-systems",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "lx",
          label: "Linux Shell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"SH\"",
              children: "#カテゴリ\r\ncategory=my_category\r\n#ログファイルwildcard(*)、日付パターン(http://strftime.org)を含む\r\nLOG_FILE=ログファイルパス\r\n./focus -license $WHATAP_LICENSE \\\r\n    -category $category \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -logsink $LOG_FILE\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "wd",
          label: "Windows Powershell",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-powershell",
              metastring: "title=\"Powersehll\"",
              children: "#カテゴリ\r\n$CATEGORY=\"my_category\"\r\n#ログファイルwildcard(*)、日付パターン(http://strftime.org)を含む\r\n$LOG_FILE=ログファイルパス\r\n.\\focus.exe -license $WHATAP_LICENSE `\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST `\r\n    -category $CATEGORY `\r\n    -logsink $LOG_FILE\n"
            })
          })
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "osリソースの使用量の収集",
        children: "OSリソースの使用量の収集"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Focusが実行しているサーバーのリソース使用量を収集します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#メトリクスカテゴリ\r\ncategory=my_category\r\n#ディスクモニタリングが有効かどうか\r\ndiskenabled=true|false\r\n#モニタリングするディスクマウント\r\ndiskmount=/mypartition\r\n#NICモニタリングが有効かどうか\r\nnicenabled=true|false\r\n#モニタリングするNIC\r\nnic=eth0\r\n\r\n./focus -license $WHATAP_LICENSE \\\r\n    -category $category \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\r\n    -sys \\\r\n    -sys.disk.enabled $diskenabled \\\r\n    -sys.disk $diskmount \\\r\n    -sys.net.enabled $nicenabled \\\r\n    -sys.net $nic\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ランダムなプログラムとスクリプトの実行結果の収集",
        children: "ランダムなプログラムとスクリプトの実行結果の収集"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "任意のプログラムおよびスクリプトを実行し、stdoutで出力される結果を継続的に収集します。WhaTap Focusはjson dictionary形式で、stdinとして入力されると、dictionaryのkey、valueを収集します。入力手段としてパイプを使用するので、バッファリングを無効にする必要があります。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["継続的に収集するのではなく、１回限り収集する場合は、次のオプションを適用できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-onetime"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["収集時間を指定する場合は、次のオプションで指定できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-now {unix epoch time(second)}"
            })]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#メトリクスカテゴリ\r\nCATEGORY=\"my_category\"\r\n\r\n\r\nプログラムまたはスクリプト | \\\r\njson dictionary形に再処理 | \\\r\n./focus -license $WHATAP_LICENSE \\\r\n    -category $category \\\r\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
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