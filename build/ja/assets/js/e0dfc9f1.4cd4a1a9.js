"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[72973],{

/***/ 91848:
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
	id: 'about-apm-dbc',
	title: 'DB connection遅延とConnection Pool',
	description: 'アプリケーションの性能障害タイプの一つであるDBC遅延問題とConnection Poolについて案内します。',
	tags: [
		'アプリケーション',
		'アプリケーションモニタリング',
		'APM',
		'DBC',
		'性能障害'
	],
	keywords: [
		'アプリケーション',
		'アプリケーションモニタリング',
		'APM',
		'DBC',
		'性能障害'
	],
	toc_max_heading_level: 2,
	displayed_sidebar: 'learningSidebar'
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-apm-dbc",
  "title": "DB connection遅延とConnection Pool",
  "description": "アプリケーションの性能障害タイプの一つであるDBC遅延問題とConnection Poolについて案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice-guides/about-apm-dbc.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-apm-dbc",
  "permalink": "/ja/best-practice-guides/about-apm-dbc",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-apm-dbc.mdx",
  "tags": [
    {
      "inline": true,
      "label": "アプリケーション",
      "permalink": "/ja/tags/アプリケーション"
    },
    {
      "inline": true,
      "label": "アプリケーションモニタリング",
      "permalink": "/ja/tags/アプリケーションモニタリング"
    },
    {
      "inline": true,
      "label": "APM",
      "permalink": "/ja/tags/apm"
    },
    {
      "inline": true,
      "label": "DBC",
      "permalink": "/ja/tags/dbc"
    },
    {
      "inline": true,
      "label": "性能障害",
      "permalink": "/ja/tags/性能障害"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "about-apm-dbc",
    "title": "DB connection遅延とConnection Pool",
    "description": "アプリケーションの性能障害タイプの一つであるDBC遅延問題とConnection Poolについて案内します。",
    "tags": [
      "アプリケーション",
      "アプリケーションモニタリング",
      "APM",
      "DBC",
      "性能障害"
    ],
    "keywords": [
      "アプリケーション",
      "アプリケーションモニタリング",
      "APM",
      "DBC",
      "性能障害"
    ],
    "toc_max_heading_level": 2,
    "displayed_sidebar": "learningSidebar"
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "브라우저 모니터링",
    "permalink": "/ja/best-practice-guides/using-browser-monitoring"
  },
  "next": {
    "title": "힙 메모리 메트릭스",
    "permalink": "/ja/best-practice-guides/about-apm-heap-memory"
  }
};
const assets = {

};

/*

> 일문 이미지 미제공

*/
/*

>

빠르게 살펴보고 싶은 분들은 문서 하단의 [요약 정보](#q12)로 이동하세요.

미리 알아보기 위치?

*/


const toc = [{
  "value": "ヒットマップ異常パターン検出",
  "id": "ヒットマップ異常パターン検出",
  "level": 2
}, {
  "value": "トランザクショントレースの分析",
  "id": "トランザクショントレースの分析",
  "level": 2
}, {
  "value": "DB Connection Poolの確認",
  "id": "db-connection-poolの確認",
  "level": 2
}, {
  "value": "Connection Poolサイズ調整",
  "id": "connection-poolサイズ調整",
  "level": 3
}, {
  "value": "Connection再利用および最適化",
  "id": "q12",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["この文書では、代表的なアプリケーション性能障害タイプの一つである", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "DB連結遅延"
      }), "(DBC遅延)と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Connection Pool"
      }), "との相関関係をモニタリングの観点からご紹介します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["まずダッシュボードの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "ヒットマップ"
        })
      }), "ウィジェットを通じて一次的に障害状況を認知したと仮定した後", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "分析"
        })
      }), "メニュー下位の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "ヒットマップ"
        })
      }), "メニューに移動し、時間を特定する方法で障害状況の前後を見てみましょう。 これをもとに", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "トレース情報"
        })
      }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "メトリクスチャート"
        })
      }), "などを通じて障害原因を推論する手順を案内します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "プレビュー"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アプリケーションダッシュボード"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ·トランザクション"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "トレース情報"
          })
        }), " → ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "メトリクスチャート"
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["問題現象を認知した場合は、過去の記録を照会して障害が発生した時点の前後を照会します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "ヒットマップトランザクション"
              })
            }), "チャートでトランザクション過負荷パターンを確認した後", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "TXトレース"
              })
            }), "一覧により、トランザクション遅延の原因をDB接続の問題として予想できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["区間別照会後、トレース分析を通じて詳細な実行履歴をステップごとで確認します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "経過時間"
              })
            }), "から最も時間がかかっているのがDBCステップであることが確認できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "メトリクスチャート"
              })
            }), "を通じて様々な指標を一緒に見ていきます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "DB Pool数"
              })
            }), "チャートと", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "DB Active数"
              })
            }), "チャートを比較して、DB Connection Poolの不足が原因であることが特定できます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ユーザーの運用環境に応じてConnection Poolの大きさを徐々に調節したり、リーク防止のために最適化設定をする方法が活用できます。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ヒットマップ異常パターン検出",
        children: "ヒットマップ異常パターン検出"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-hl.png",
        desc: "ヒットマップ異常パターン検知"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["障害を認識し、一次的な分析を通じて障害原因を追跡する過程は、迅速さが核心です。 WhaTapは、直観的なビューを提供するだけでなく、根本的な原因を追跡するための追加情報を確保できるよう、過去記録の照会機能も提供します。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アプリケーションダッシュボード"
          })
        }), "の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "ウィジェットで例のように急激な異常兆候を感知した場合、次の手順は何でしょうか。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "ウィジェットで問題区間をドラッグしてトランザクショントレース分析を迅速に進めることもでき、または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "分析"
          })
        }), "メニュー下位の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "に移動して、時間範囲をより広く特定する方法で前後の状況を確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-hitmap-tx.png",
        desc: "ヒットマップTXチャートへ移動 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["後者の手順で説明します。 ダッシュボード", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "ウィジェットは、過去10分間に終了したトランザクションのレスポンス時間の分布図です。 つまり、時間範囲を特定して直近10分以上の過去の履歴を確認するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "分析"
          })
        }), "メニュー下位の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "メニューに移動します。 ウィジェット右上の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "右矢印アイコン",
          src: (__webpack_require__(64054)/* ["default"] */ .A) + "",
          width: "20",
          height: "20"
        }), "矢印アイコンを選択して例のように移動できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "チャート上段の時間セレクタを通じて希望する時間範囲を指定し、過去の記録を照会できます。 異常パターンを確定するため、問題区間前後に広く見てみると、応答が遅れているトランザクションが密集した過負荷パターンを確認できました。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-drag.png",
        desc: "ヒットマップドラグ"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["このような突然のレスポンス時間の増加とトランザクション過負荷の原因を特定するために", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "チャートから問題領域を区間別にドラッグし、トランザクション トレース一覧(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXトレース"
          })
        }), "一覧)を照会してみます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-hitmap-tr-list.png",
        desc: "ヒットマップTX一覧"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXトレース"
          })
        }), "一覧を通じて多数のトランザクションで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過時間"
          })
        }), "対比", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DB接続時間"
          })
        }), "の占める割合が大きいことが確認できます。 例として", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "/api/system/test"
        }), "URLの場合、総", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過時間"
          })
        }), " 25,057msのうちDB接続に24,931msがかかりました。 つまり、一次的にDB接続に問題があると推測できます。 次に、当該トランザクションを選択し、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "トレース情報"
          })
        }), "ウィンドウで詳細情報を見てみましょう。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["ヒットマップの横軸はトランザクション終了時間、縦軸はレスポンス時間を意味します。 ヒットマップで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
                alt: "上矢印アイコン",
                src: (__webpack_require__(8687)/* ["default"] */ .A) + "",
                width: "20",
                height: "20"
              }), "矢印アイコンを選択して、縦軸レスポンス時間の遅延区間を80秒まで照会できます。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["過負荷パターンのほか、ヒットマップパターン分析の詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "about-apm-hitmap-class#about-hitmap-pattern-analysis",
                children: "次の文書"
              }), "をご参考ください。"]
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "トランザクショントレースの分析",
        children: "トランザクショントレースの分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "トレース情報"
          })
        }), "ウィンドウでトランザクションの詳細実行履歴をステップごとに確認できます。 このようなトランザクション トレイシングにより、トランザクションの性能低下またはエラーの原因を追跡できます。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "トレース分析"
          })
        }), "ウィンドウを照会する時、最初に確認すべき情報は、ステップ別", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過時間"
          })
        }), "です。 所要時間を比較することで、性能低下またはエラーの原因を迅速に特定できるからです。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-tx-tr.png",
        desc: "TXトレース分析 sc"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["該当URLの詳細トレースを見てみましょう。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "/api/system/test"
        }), "実行中、PostgreSQL DBに接続して処理するクエリ実行時間は、1msから6msで、比較的大きな問題はありません。 しかし、当該データベース接続待ち時間はそれに比べて確実に長くかかっており、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過時間"
          })
        }), "を一番多くかけているのは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DB Connection"
          })
        }), "ステップであることが確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "つまり、この場合、先に予想したとおりDB接続遅延によってトランザクション遅延が発生したことを特定できます。 では、このようなDB接続の遅延を引き起こす原因は何でしょうか。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "db-connection-poolの確認",
        children: "DB Connection Poolの確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "DB連結遅延"
        }), "を起こす原因の一つは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection Poolの不足"
        }), "です。 Connection Poolのサイズは、同時に処理可能な接続数を意味します。 データベースは、リクエストによるConnectionを生成し、終了するプロセスに多くの時間を使います。 Connection Poolは、事前に一定数のConnectionを生成しておいて、他のリクエストがあるときに現在のConnection Poolを再利用できるようにします。 これを通じて毎回新しいConnectionを作成する必要がないため、応答時間を短縮できます。 問題は、事前に生成しておいたConnection数が、アプリケーションが必要とするConnection数に比べて足りない場合で、この時にDB接続遅延が発生します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["DB Connection Poolの状況を確認するため", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "分析"
          })
        }), "メニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "メトリクスチャート"
          })
        }), "に移動します。 まず、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "メトリクスチャート"
          })
        }), "左側のリストで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "データベース"
          })
        }), "を選択して", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DBプール数"
          })
        }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DBアクティブ数"
          })
        }), "チャートを確認します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/apm-dbc-mcht.png",
        desc: "メトリクスチャート"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["各チャートでも確認できますが、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DBプール"
          })
        }), "の最大接続個数は、20個に設定されています。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "DBアクティブ数"
          })
        }), "チャートを見ると、20個のプールで継続的な占有が行われていることが確認できます。 事前に設定されたプールを超えるリクエストが入ってくると、DBに余るプールができるまで待機し、これにより遅延が発生します。 CPUおよびメモリ使用量など、リソース状況の照会する際に特異点は見つかりませんでした。 つまり、当該プロジェクトの場合、DB Connectionプールの不足がDBC遅延を引き起こした決定的な原因と予想できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["では、このようにDB Connection Poolが足りない場合はどうすればいいでしょうか？。 もちろん、解決方法はユーザー環境によって異なる場合があります。 この文書では、その中で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection Poolサイズ調整"
        }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Connection再利用および最適化"
        }), "による事前措置について簡単に案内します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "connection-poolサイズ調整",
        children: "Connection Poolサイズ調整"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "まず、Poolの最大接続数を調整する方法を活用できます。 Poolを徐々に増やしてDBのアクティブ数がプールの最大値内で維持されることを確認し、適切なプール数を設定することです。 しかし、プールの数を過度に大きく指定した場合、リソース消費量の過度な増加により、むしろアプリケーション性能に悪影響を与える恐れがあります。 十分なメモリと処理能力を備えていることを確認した後、運営環境に合わせて調整する必要があります。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "q12",
        children: "Connection再利用および最適化"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "2番目にConnection再利用および最適化による方法を活用できます。 例えば、アプリケーションが使用したConnectionを返さないConnection Leakが発生した場合なら、いくらConnection Poolの数を増やしても、遅延の問題を解決できません。 この場合、DBアクティブ数は、右上向グラフが表示されます。 Connection Leakを防ぐためには、使用したConnectionを必ず返却するように管理が必要です。 Connection使用後、明示的に返すように設定したり再利用する方式を適用する方法などがあります。"
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

/***/ 64054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjUgMTMuOTMwOEw4Ljc5NTQzIDE1TDEzLjUgOS45NzkxTDguNzk1NDMgNUw3LjUgNi4wMjczN0wxMS4yMjk3IDkuOTc5MUw3LjUgMTMuOTMwOFoiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 8687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjA2OTE2IDEzTDUgMTEuNzA0NkwxMC4wMjA5IDdMMTUgMTEuNzA0NkwxMy45NzI2IDEzTDEwLjAyMDkgOS4yNzAyN0w2LjA2OTE2IDEzWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

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