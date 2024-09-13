"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[79753],{

/***/ 39973:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'preview-2_9_0x',
	title: 'Preview 2.9.0.a',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "release-notes/preview/preview-2_9_0x",
  "title": "Preview 2.9.0.a",
  "description": "preview.whatap.ioで、次の新機能と変更した内容を事前に体験することができます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/release-notes/preview/preview-2.9.0.a.mdx",
  "sourceDirName": "release-notes/preview",
  "slug": "/release-notes/preview/preview-2_9_0x",
  "permalink": "/ja/release-notes/preview/preview-2_9_0x",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/release-notes/preview/preview-2.9.0.a.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "preview-2_9_0x",
    "title": "Preview 2.9.0.a",
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "previewSidebar",
  "previous": {
    "title": "Preview 2.10.0.a",
    "permalink": "/ja/release-notes/preview/preview-2_10_0x"
  },
  "next": {
    "title": "Preview 2.8.0.a",
    "permalink": "/ja/release-notes/preview/preview-2_8_0x"
  }
};
const assets = {

};



const toc = [{
  "value": "Preview 2.9.0.a0",
  "id": "preview-290a0",
  "level": 2
}, {
  "value": "共通",
  "id": "共通",
  "level": 3
}, {
  "value": "<code>Application</code>",
  "id": "application",
  "level": 3
}, {
  "value": "<code>Database</code>",
  "id": "database",
  "level": 3
}, {
  "value": "共通",
  "id": "共通-1",
  "level": 4
}, {
  "value": "Oracle Pro",
  "id": "oracle-pro",
  "level": 4
}, {
  "value": "<code>Log</code>",
  "id": "log",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Head, Status, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Head) _missingMdxReference("Head", true);
  if (!Status) _missingMdxReference("Status", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Head, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://preview.whatap.io",
          children: "preview.whatap.io"
        }), "で、次の新機能と変更した内容を事前に体験することができます。"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "preview-290a0",
        children: "Preview 2.9.0.a0"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2024年08月29日"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "indentTab",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "共通",
          children: "共通"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_counter",
                className: "uitext"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), "メニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "metric",
                className: "uitext"
              }), "パネルにWhaTap Docsで接続するリンクボタンを追加"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Changed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_metricsChart",
                className: "uitext"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                className: "newfunc",
                children: "New"
              }), "メニューで次の事項を修正"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "target",
                    className: "uitext"
                  }), "選択オプションが省略された時、UIを改善"]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                  children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                      children: "更新テキストを削除"
                    }), "\n"]
                  }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                      children: "すべてを開く/閉じるというテキストの左側にアイコンを追加"
                    }), "\n"]
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["ウィジェットがない時、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "BTN08226",
                    className: "uitext"
                  }), "および", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "download",
                    className: "uitext"
                  }), "ボタンを無効化"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "target",
                    className: "uitext"
                  }), "選択オプションで検索結果に対する全体選択と解除機能を追加"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "DSC08214",
                    className: "uitext"
                  }), "フレーズをツールチップで表示するように修正"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "select_all",
                    className: "uitext"
                  }), "ボタンツールチップをマウスオーバーすると表示するように修正"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "time",
                    className: "uitext"
                  }), "選択オプションにマウスオーバーした時、表示されるツールチップを削除"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_integratedFlexboard",
                className: "uitext"
              }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_flexboard",
                className: "uitext"
              }), "メニューでウィジェットボタンのドロップダウンが不要に生成される問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TLT07929",
                className: "uitext"
              }), "画面で長いグループ名がモーダル画面から離れて表示される問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "group_management_delete",
                className: "uitext",
                type: "group"
              }), "画面でグループアイコンが'X'で表示される問題を修正"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "application",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Application"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "1",
                children: "Feature"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_agentsConfiguration",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_threadList",
                className: "uitext"
              }), "メニューで選択したエージェントがインストールされているアプリケーションのスレッド状況(RUNNABLE、WAITING、合計)を表示する機能を追加"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "2",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), "画面の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06128",
                className: "uitext"
              }), "タブでログデータがない場合、案内メッセージを出力するように変更"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "ログ関連のエージェントオプションが設定されていない、またはログデータがない場合はメッセージを確認できます。"
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_netstatTopology",
                className: "uitext"
              }), "メニューでGo商品アイコンが正常に表示されない問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), "画面でSQL文の表示ボックスの色を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), "画面でSQLの詳細を照会する時、APIが2回呼び出される問題を修正"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
              type: "note",
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "API呼び出し回数の変更はユーザーに影響を与えません。"
              })
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_appDashboard",
                className: "uitext"
              }), "メニューで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "AA002",
                className: "uitext"
              }), "ウィジェットのチャート領域を選択した時に表示される ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "acttx",
                className: "uitext"
              }), "画面のデザイン要素を修正"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "top_ten",
                    className: "uitext"
                  }), "タブでデータがない時に表示される", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                    children: "No rows found"
                  }), "メッセージがテーブルヘッダーと重ならないように修正"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "余白が生じた際、背景色が埋められない問題を修正"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), "メニューで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "AA005",
                className: "uitext"
              }), "ウィジェットのY軸の調整ボタンが断続的に見えない問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_analysis",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_stack",
                className: "uitext"
              }), "メニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "スナップショットアイコン",
                src: (__webpack_require__(97442)/* ["default"] */ .A) + "",
                width: "24",
                height: "24"
              }), "ボタンでスナップショットを画像として保存する際にテーマが適用されない問題を修正"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "database",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Database"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "共通-1",
          children: "共通"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dashboard",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_instanceList",
                className: "uitext"
              }), "メニューでインスタンス名を選択して", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbMonitoring",
                className: "uitext"
              }), "メニューに移動する際に組織情報が漏れる問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_reportStat",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbSqlStat",
                className: "uitext"
              }), "メニューで、SQLテキストプレビューボックスのサイズを修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "TTL06224",
                className: "uitext"
              }), "画面で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                children: "Reset Bind"
              }), "ボタンを選択するとバインド変数が初期化されない問題を修正"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
                priority: "0",
                children: "Fixed"
              }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_management",
                className: "uitext"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_agentInstall",
                className: "uitext"
              }), " メニューで次の修正事項を反映"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "ZIPファイルのダウンロードコマンドの削除"
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "TARファイルのダウンロードコマンドの修正"
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "PostgreSQL"
                  }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Oracle Pro"
                  }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "Altibase"
                  }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: "MySQL"
                  }), "商品以外の商品で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
                    children: "ZIP"
                  }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                    sid: "download",
                    className: "uitext"
                  }), "ボタンが動作しない問題を修正"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
          id: "oracle-pro",
          children: "Oracle Pro"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_analysis",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_dbLockTree",
            className: "uitext"
          }), "メニューでクラスターを選択し、Global Lock情報を照会できる最大時間範囲を3時間に変更"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.hr, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
          id: "log",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "Log"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Status, {
            priority: "1",
            children: "Changed"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "side_log",
            className: "uitext"
          }), "の下位メニューでカラム設定のUIを交替"]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["1つになった", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "設定アイコン",
                src: (__webpack_require__(45430)/* ["default"] */ .A) + "",
                width: "20",
                height: "20"
              }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "table_settings",
                className: "uitext"
              }), "ボタンを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "column_settings",
                className: "uitext"
              }), "および", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08349",
                className: "uitext"
              }), "ボタンで分離"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["全画面モードの時、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "column_settings",
                className: "uitext"
              }), "および", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "ITM08349",
                className: "uitext"
              }), "ボタンを取り消し"]
            }), "\n"]
          }), "\n"]
        })]
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

/***/ 97442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDNMNy4xNyA1Ljk5MDUzSDJDMiA1Ljk5MDUzIDIgNi44OTAzNiAyIDcuOTkwMTRWMTkuMDAwNEMyIDIwLjEwMDIgMiAyMSAyIDIxSDIyQzIyIDIxIDIyIDIwLjEwMDIgMjIgMTkuMDAwNFY3Ljk5MDE0QzIyIDYuODkwMzYgMjIgNS45OTA1MyAyMiA1Ljk5MDUzSDE2LjgzTDE1IDNIOVpNNCA4SDguMjQwODZMMTAuMDIwMSA0Ljk5MTgySDE0LjAxMTVMMTYuMDk3OCA4SDIwVjE5SDRMNCA4Wk0xMiAxN0M5Ljc5MiAxNyA4IDE1LjIwOCA4IDEzQzggMTAuNzkyIDkuNzkyIDkgMTIgOUMxNC4yMDggOSAxNiAxMC43OTIgMTYgMTNDMTYgMTUuMjA4IDE0LjIwOCAxNyAxMiAxN1pNMTIgMTVDMTMuMTA0NiAxNSAxNCAxNC4xMDQ2IDE0IDEzQzE0IDExLjg5NTQgMTMuMTA0NiAxMSAxMiAxMUMxMC44OTU0IDExIDEwIDExLjg5NTQgMTAgMTNDMTAgMTQuMTA0NiAxMC44OTU0IDE1IDEyIDE1WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 45430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb3VuZGF0aW9uPSJbb2JqZWN0IE9iamVjdF0iIGNsYXNzPSJJbm5lckljb25zdHlsZWRfX0ljb24tY2gtZnJvbnRfX3NjLTE5N2g1YmItMCBka0RyT3IiIGRlZmF1bHRvcGFjaXR5PSIxIiBob3ZlcmVkb3BhY2l0eT0iMSIgbWFyZ2ludG9wPSIwIiBtYXJnaW5yaWdodD0iMCIgbWFyZ2luYm90dG9tPSIwIiBtYXJnaW5sZWZ0PSIwIiB3aXRodGhlbWU9InRydWUiPjxwYXRoIGZpbGw9IiM3OTc5NzkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS44MzM1NCAxMC4wMDAxQzUuODMzNTQgNy42OTkzOSA3LjY5ODgxIDUuODMzNDIgMTAuMDAwMiA1LjgzMzQyQzEyLjMwMDkgNS44MzM0MiAxNC4xNjY5IDcuNjk5MzkgMTQuMTY2OSAxMC4wMDAxQzE0LjE2NjkgMTIuMzAwOCAxMi4zMDA5IDE0LjE2NjcgMTAuMDAwMiAxNC4xNjY3QzcuNjk4ODEgMTQuMTY2NyA1LjgzMzU0IDEyLjMwMDggNS44MzM1NCAxMC4wMDAxWk0xOC4zMzM1IDExLjI1MDFWOC43NTAwOEwxNi40NzUyIDguNDQwMDhDMTYuMzA5NCA3Ljc1NTA4IDE2LjAzOTQgNy4xMTE3NSAxNS42Nzk0IDYuNTI2NzVMMTYuNzc2IDQuOTkwOTFMMTUuMDA4NSAzLjIyMzQxTDEzLjQ3MjcgNC4zMjA5MUMxMi44ODc3IDMuOTYwOTEgMTIuMjQ1MiAzLjY5MDkxIDExLjU2MDIgMy41MjUwOEwxMS4yNTAyIDEuNjY2NzVIOC43NTAyTDguNDQwMiAzLjUyNTA4QzcuNzU1MiAzLjY5MDkxIDcuMTExODcgMy45NjA5MSA2LjUyNjg3IDQuMzIwOTFMNC45OTEwNCAzLjIyMzQxTDMuMjIzNTQgNC45OTA5MUw0LjMyMDIgNi41MjY3NUMzLjk2MTA0IDcuMTExNzUgMy42OTAyIDcuNzU1MDggMy41MjUyIDguNDQwMDhMMS42NjY4NyA4Ljc1MDA4VjExLjI1MDFMMy41MjUyIDExLjU2MDFDMy42OTAyIDEyLjI0NTEgMy45NjEwNCAxMi44ODg0IDQuMzIwMiAxMy40NzM0TDMuMjIzNTQgMTUuMDA5Mkw0Ljk5MTA0IDE2Ljc3NjdMNi41MjY4NyAxNS42NzkyQzcuMTExODcgMTYuMDM4NCA3Ljc1NTIgMTYuMzA5MiA4LjQ0MDIgMTYuNDc1MUw4Ljc1MDIgMTguMzMzNEgxMS4yNTAyTDExLjU2MDIgMTYuNDc1MUMxMi4yNDUyIDE2LjMwOTIgMTIuODg3NyAxNi4wMzg0IDEzLjQ3MjcgMTUuNjc5MkwxNS4wMDg1IDE2Ljc3NjdMMTYuNzc2IDE1LjAwOTJMMTUuNjc5NCAxMy40NzM0QzE2LjAzOTQgMTIuODg4NCAxNi4zMDk0IDEyLjI0NTEgMTYuNDc1MiAxMS41NjAxTDE4LjMzMzUgMTEuMjUwMVoiPjwvcGF0aD48L3N2Zz4=");

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