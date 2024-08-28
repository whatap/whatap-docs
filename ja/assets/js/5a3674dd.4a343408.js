"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[40755],{

/***/ 80065:
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
	id: 'about-apm-hitmap-class',
	title: 'ヒットマップトランザクションの検索',
	description: 'ヒットマップトランザクションのメニューを使用して、Webアプリケーションサーバ(Web Application Server)の問題を特定し、トラブルに対応する方法を紹介します。',
	keywords: [
		'アプリケーション',
		'アプリケーションモニタリング',
		'ヒットマップ',
		'トランザクション',
		'ヒットマップトランザクション',
		'APM'
	],
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-apm-hitmap-class",
  "title": "ヒットマップトランザクションの検索",
  "description": "ヒットマップトランザクションのメニューを使用して、Webアプリケーションサーバ(Web Application Server)の問題を特定し、トラブルに対応する方法を紹介します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice-guides/about-apm-hitmap-class.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-apm-hitmap-class",
  "permalink": "/ja/best-practice-guides/about-apm-hitmap-class",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-apm-hitmap-class.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-apm-hitmap-class",
    "title": "ヒットマップトランザクションの検索",
    "description": "ヒットマップトランザクションのメニューを使用して、Webアプリケーションサーバ(Web Application Server)の問題を特定し、トラブルに対応する方法を紹介します。",
    "keywords": [
      "アプリケーション",
      "アプリケーションモニタリング",
      "ヒットマップ",
      "トランザクション",
      "ヒットマップトランザクション",
      "APM"
    ],
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "애플리케이션 대시보드",
    "permalink": "/ja/best-practice-guides/about-apm-dashboard"
  },
  "next": {
    "title": "서버 리소스 보드",
    "permalink": "/ja/best-practice-guides/about-server-dashboard"
  }
};
const assets = {

};



const toc = [{
  "value": "パターン分析",
  "id": "about-hitmap-pattern-analysis",
  "level": 2
}, {
  "value": "区間およびスタック分析",
  "id": "区間およびスタック分析",
  "level": 2
}, {
  "value": "呼び出し関係分析",
  "id": "呼び出し関係分析",
  "level": 2
}, {
  "value": "トランザクションログ分析",
  "id": "トランザクションログ分析",
  "level": 2
}, {
  "value": "最終作業",
  "id": "最終作業",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
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
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["この文書では、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://service.whatap.io",
        children: "WhaTapモニタリングサービス"
      }), "の、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "ヒットマップトランザクション"
        })
      }), "メニューを使用してウェブアプリケーションサーバ(Web Application\nServer)の問題を特定し、トラブルに対応する方法を紹介します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "アプリケーションモニタリングマネージャーは、業務内容に応じて、さまざまな要因をモニタリングしたいと考えています。サーバー担当者はCPU、メモリ、ディスク、ネットワークなどのリソースをモニタリングし、リソースをどの程度使用しているかを確認する必要があります。DB担当者は、DBクエリのパフォーマンスを向上させるための指標を表示する必要があります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["一方、従来のモニタリング方法では、サービス(AP) 担当者は通常、(Heap)ヒープ使用量とCPU使用率を確認するだけです。しかし、この方法では、サービス(AP)の問題を特定することができません。サービス(AP)で最も重要なことは、ユーザーのリクエストに適切に応答するかどうか、どれだけ迅速に、エラーなく応答するかです。これらを把握するためには、ユーザーのリクエストが正しく満たされていることを確認するプロセスが必要です。ユーザーのリクエストの1つ1つをリクエストと呼び、このリクエストをサーバーで処理と応答するプロセスを", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "トランザクション"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Transaction"
      }), ")として定義されます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["WhaTapモニタリングサービスでは、トランザクションを「進行中のトランザクション」と「終了したトランザクション」に区分し、サービス(AP)のトラブル状況を把握することができます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "アプリケーションダッシュボード"
        })
      }), "メニューの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "ヒットマップ"
        })
      }), "ウィジェットでは、「終了した個々のトランザクション」を分布図形式のチャートで確認することができます。ヒットマップチャートは、5秒単位で終了したトランザクション情報を収集し、ポイント単位で表現するウィジェットです。このチャートから想定通りに1秒かかるトランザクションが想定とは異なり、2秒ほどかかる場合、つまり応答時間が2倍以上かかるトランザクションを見つけることで、トラブルの原因を分析できます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "about-hitmap-pattern-analysis",
        children: "パターン分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "分布図チャートの形状によってどのようなトラブルが発生したのかを確認する方法について説明します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "は、時間の経過とともにユーザーのリクエストに対応する応答時間を分布図の形式で表現するチャートです。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アプリケーションダッシュボード"
          })
        }), "でヒットマップウィジェットの右上の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "右方向アイコン",
          src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "を選択すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "分析"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "メニューで確認することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/best-p-hitmap-transaction.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "横軸はトランザクションの終了時間、縦軸は応答時間です。トランザクションを終了した時間ごとにユーザのリクエスト(Request)に対する応答(Response) 時間をチャート上に四角形で表現します。これにより、ユーザーのリクエストに正常に応答したかどうかを把握できます。ヒットマップトランザクションチャートの四角いボックスの色は、次のような意味を持っています。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "normal",
            children: "青色"
          }), "： 正常トランザクション"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "slow",
            children: "オレンジ"
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            class: "vslow",
            children: "赤色"
          }), "：エラーが発生したのか、応答リクエストが拒否されたのか、エラー頻度に応じて赤に近い色で表現されます。"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "このチャートで最も重要な点は、トランザクションボックスが縦または横に並んでいる状況です。次のヒットマップパターンを参照してください。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "pattern-intro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          class: "pattern-img",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "縦線パターン",
              src: (__webpack_require__(51202)/* ["default"] */ .A) + "",
              width: "962",
              height: "600"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "縦線が一時的に現れるパターン"
            }), "です。縦線が発生する場合は、トランザクションの応答時間は異なりますが、終了時間は同じであることを意味します。トランザクション処理中に一時的にロック(Lock)が発生すると、トランザクションの処理を待機します。(Lock)ロックが解除されると待機中のトランザクションは同じ時間に終了します。これにより、縦線が作成されます。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "pattern-intro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          class: "pattern-img",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "横線パターン",
              src: (__webpack_require__(47103)/* ["default"] */ .A) + "",
              width: "962",
              height: "600"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "横線が現れるパターン"
            }), "です。10秒のタイムアウト条件でそのリソースが不足すると、多くのトランザクションは10秒待機後にタイムアウトエラーが発生します。この時、ヒットマップの10秒後に横線が発生します。タイムアウト後に再試行するロジックがある場合は、上図のように横線が10秒単位で繰り返します。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "pattern-intro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          class: "pattern-img",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "フライングパターン",
              src: (__webpack_require__(2812)/* ["default"] */ .A) + "",
              width: "962",
              height: "600"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "波のように見えるフライングパターン"
            }), "は、特定のリソースやログなどの共通リソースが不足しているために間隔を置いて表示されるパターンです。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "pattern-intro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          class: "pattern-img",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "過負荷パターン",
              src: (__webpack_require__(19673)/* ["default"] */ .A) + "",
              width: "962",
              height: "600"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "過負荷パターン"
            }), "は、全体または一部の応答に一時的に問題を引き落とすトランザクションが一度に密集するときに発生するパターンです。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        class: "pattern-intro",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          class: "pattern-img",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "暴走パターン",
              src: (__webpack_require__(18814)/* ["default"] */ .A) + "",
              width: "962",
              height: "600"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "暴走パターン"
            }), "は、大量のトランザクションのリクエストや負荷が発生した場合、応答時間が全体的に増加するパターンです。"]
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "パターンが発生した場合に、パターンの原因となっている要因がサーバーの内部にあるか外部あるかを特定することが重要です。次の図のような構造でシステムを設計したと仮定します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: (__webpack_require__(69630)/* ["default"] */ .A) + "",
          width: "600",
          height: "395"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "チャート下の領域は、ほとんど応答時間が速いトランザクションであるため、パターンを探すことはそれほど意味がありません。上の領域の遅い区間で作成されたパターンの共通点を探すことが必要です。縦線パターンが発生した時、サービス(AP)でロック(Lock)が発生した場合、1つのウェブアプリケーションのみパターンが発生します。逆に、外部に接続されたDatabaseで(Lock)ロックが発生すると、すべてのウェブアプリケーションでパターンが発生します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/hitmap-transaction-sample-00.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["チャート領域をドラッグすると、ドラッグした領域のトランザクション情報を画面下の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXトレース"
          })
        }), "一覧に読み込むことができます。右側の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アプリケーション"
          })
        }), "ウィジェットは、エージェントをグループ化して一覧として表示します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "トラブルの原因に関する共通点を見つけることが目的です。まず、同じアプリケーションで問題が発生したかどうかを確認してください。次に、同じURLで問題が発生したかどうかを確認してください。また、クライアントIPが同じかどうかを確認することもできます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "区間およびスタック分析",
        children: "区間およびスタック分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["トラブルの原因が外部ではなく内部の問題であるかをどのように判断できるでしょうか？WhaTapは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "アクティブスタック"
        }), "という技術を使用して、実行中のトランザクションのスタック情報を収集します。スタック情報は10秒ごとに収集され、収集されたデータは統計情報として確認できます。\nまた、サービスのロジックを実行する各メソッド、SQL、外部呼び出し情報も含まれます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "内部的な問題の場合、各トランザクションの実行履歴を時間ごとに確認し、速度が遅くなった区間を特定することで、問題を見つけて解決することができます。外部の問題の場合は、SQLと外部呼び出し情報を確認できます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["例えば、縦線パターンでロック(Lock)が発生する原因を調べる場合は、同じパターン内で最も遅いトランザクションと最も速いトランザクションを確認する方法があります。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "チャートでパターンが発生した領域をドラッグしてください。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXトレース"
          })
        }), "一覧にドラッグした領域のトランザクション情報を読み込みます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXトレース"
          })
        }), "一覧を経過時間を基準で並べ替えて、最も時間がかかったトランザクションを選択してください。選択したトランザクションに関する詳細情報が含まれた", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "トランザクション情報"
          })
        }), "ウィンドウが表示されます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/hitmap-transaction-sample-01.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "テーブルビュー"
          })
        }), "タブでは、段階別", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "時間"
          })
        }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過"
          })
        }), "時間を確認することができます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "時間"
          })
        }), "は各段階が開始または終了した時間で、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "経過"
          })
        }), "は各メソッドの開始から終了までの合計所要時間です。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "時間差"
          })
        }), "は、その前に実行したメソッド間の間隔です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "best-p/hitmap-transaction-sample-02.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "テーブルビュー"
          })
        }), "タブを使用して、遅くなった区間を見つけることができます。同様に、最も速かったトランザクションで遅くなった区間を確認してください。共通点を見つけることができます。速度低下の原因がサービス(AP)のロジックによって発生した状況の場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アクティブスタック"
          })
        }), "を確認してください。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アクティブスタック"
          })
        }), "ボタンをクリックすると、詳細情報が含まれたウィンドウが表示されます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ツリービュー"
          })
        }), "タブでは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "アクティブスタック"
          })
        }), "と以前に実行されたメソッドとの相関関係を確認することができます。タイムラインバーで区間をクリックすると、選択した区間に関する情報を展開して確認することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "アクティブスタック"
              }), "は10秒ごとにスナップショットを保存しているため、どの区間でも確認できます。応答時間が長くなる区間を確認する可能性が高いため、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "アクティブスタック"
              }), "を使用して区間が開いたポイントを見つけることができます。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "TXトレース"
                })
              }), "一覧で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "アクティブスタック"
              }), "を含むトランザクションは、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "mark active",
                children: "A"
              }), "アイコンが表示します。"]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ヒットマップチャートでトランザクションを表示するトランザクションを見つけることが目的です。一緒に参照するトランザクションを確認して、応答時間や終了時間に影響を与える要因を特定する必要があります。アプリケーションですべてのメソッドを追跡すると、区間分析が可能ですが、オーバーヘッドが発生し、応答時間に歪みを与える可能性があります。そのため、選択されたクラスメソッドのみを追跡する必要があります。その選択ポイントはシステム運用者の観点でのみ決定しますが、トラブルの原因となる(Lock)ロックやその他の要因が追跡から除外される場合があります。この除外される部分をサポートするのが", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "アクティブスタック"
        }), "です。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapのモニタリングサービスは、アプリケーションサーバを運用する際に常時繰り返される問題を把握できるよう、定期的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "アクティブスタック"
        }), "をスナップショットに記録し、トラブルを引き起こす根本的な要因をより高い確率で見つけられます。この方法で収集したデータを統計的に確認できるメニューが", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "分析"
          })
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "スタック"
          })
        }), "です。スタックの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.whatap.io/java/analysis-apm",
          children: "次の文書"
        }), "を参照にしてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "トランザクション情報"
                })
              }), "ウィンドウの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "レコード要約"
                })
              }), "タブを選択すると、トランザクションに関する基本情報を検索することができます。クライアントIP、使用機器、OS、国の情報などを提供します。その他、パッチ件数および時間、SQL件数および時間などを確認し、どれだけ多くの呼び出しを使用しているのかを把握できます。"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
              img: "best-p/hitmap-transaction-sample-08.png"
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "トランザクション情報"
                })
              }), "についての詳細は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/java/trs-profile#transaction-info",
                children: "次の文書"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "呼び出し関係分析",
        children: "呼び出し関係分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "メソッド要約"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "メソッド要約"
              })
            }), "タブを選択してください。SQLと同様に、メソッドも１つのトランザクションでどれだけ多く呼び出された回数を確認することができます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "analysis-tx-method-summary.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "この情報に基づいて、繰り返し実行されるメソッドがあるかどうか、同じメソッドが繰り返し呼び出されているかを確認し、改善点を探すことができます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "SQL要約"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["トラブルの原因が内部ロジックではなくSQLである場合を説明します。１つのトランザクション内でSQLの実行を統計的に確認するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "SQL要約"
              })
            }), "タブを選択してください。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "analysis-tx-sql-summary.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "同じSQLをどれだけ繰り返して呼び出すかを確認してください。ロジックから呼び出す回数を減らしたり、他の解決策を見つけてDBの負担を軽減できる方法を見つける必要があります。DataBaseの負担を軽減することは、サーバ運用にとって非常に重要です。アプリケーションサーバーはScale-Outができます。常にリソースを継続的に増やすことが可能です。一方、DataBaseのパーティションを分割することは、アプリケーションに対して膨大な開発が伴います。パフォーマンスチューニングの基本は、アプリケーションのDataBaseの負荷を軽減するために、可能な限り適切である必要があります。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "HTTPコール要約"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "analysis-tx-http-call.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "HTTPコール要約"
              })
            }), "タブを選択してください。HTTPリクエストのリクエスト件数、合計時間、平均時間を提供します。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "マルチトランザクション"
              })
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["モノリティック環境では単一のAPM構成でした。この場合、APMのトランザクションのみを確認します。最近では、マイクロサービスアーキテクチャなどの技術トレンドが主流です。単一のAPMが小さな単位に分割されると、それに応じて収集する必要のあるトランザクションの数が増加します。このような場合、分割されたトランザクションをすべて収集することは非常に負荷がかかるため、1つのトランザクションに連携したトランザクションをまとめて収集する必要があります。このように他のAPMに関連付けられたトランザクションを、WhaTapによって、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "マルチトランザクション"
            }), "として定義されます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "TXトレース"
              })
            }), "一覧で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "マルチトランザクション"
            }), "を含むトランザクションは、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
              class: "mark multi",
              children: "M"
            }), "アイコンを表示します。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "analysis-tx-multi.png"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "マルチトランザクション"
              })
            }), "タブを選択してください。トランザクションごとの連携情報をチャートで確認できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "テーブル"
              })
            }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "ツリー"
              })
            }), "ボタンを選択して、テーブル形式またはツリー構造形式でトランザクション間の呼び出し関係を把握できます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["マルチトランザクション追跡の詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/trs-multi-trace",
                    children: "次の文書"
                  }), "を参照してください。"]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["トランザクションによっては、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                      children: "マルチTX"
                    })
                  }), "タブをサポートしていない場合があります。"]
                }), "\n"]
              }), "\n"]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "トランザクションログ分析",
        children: "トランザクションログ分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "analysis-tx-transaction-log.png"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "TXログ"
          })
        }), "タブでは、トランザクションが実行中に記録されたログから追加および改善する事項を確認することができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["トランザクションログの詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://docs.whatap.io/java/trs-profile#anlaysis-trace-transaction-log",
            children: "次の文書"
          }), "を参照してください。"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "最終作業",
        children: "最終作業"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "からパターンを確認し、共通点を特定します。特定された共通点からメソッド間隔を分析します。十分なセグメント情報が不足の場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "アクティブスタック"
        }), "を使用して詳細情報を確保してください。次にSQL、メソッド、HTTPリクエスト情報を確認して繰り返し負荷の大きいロジックの改善点を見つけます。WhaTapモニタリングサービスの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ヒットマップトランザクション"
          })
        }), "のモニタリング業務の効率を引き上げることができます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "関連資料"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/bbs/board.php?bo_table=blog&wr_id=26",
              children: "月次WhaTap：アプリケーションモニタリングプロファイルを使用する"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/bbs/board.php?bo_table=blog&wr_id=36",
              children: "月次のWhaTap：個々のトランザクション分布図を確認したい場合は？"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/bbs/board.php?bo_table=blog&wr_id=91",
              children: "月次のWhaTap：大切な休暇を保護するためのWhaTapマシンラーニング"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://youtu.be/JHVYfJjtYQo",
              children: "WhaTap5分セミナー：ヒットマップの縦横ラインの分析"
            })
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

/***/ 51202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,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");

/***/ }),

/***/ 47103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blog_04-0ec5a7877355fe71ad91199b8c21e5b1.webp");

/***/ }),

/***/ 2812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blog_05-315f3b800cadec45f85048b79a4aa77c.webp");

/***/ }),

/***/ 19673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blog_06-6d91b7917b4c58c11dd14b53174549f5.webp");

/***/ }),

/***/ 18814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/blog_07-2dfea4f1199f82ed8baee32d5d1d2a8f.webp");

/***/ }),

/***/ 69630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hitmap-transaction-sample-2d9e4c6989130b7339e5005b7f392d20.png");

/***/ }),

/***/ 21376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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