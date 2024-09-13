"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[81372],{

/***/ 26234:
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
	id: 'about-server-dashboard',
	title: 'リソースボードを見る',
	description: 'サーバーのパフォーマンスモニタリング機能の1つであるリソースボードメニューからチャート型ウィジェット分析方法を説明します。',
	keywords: [
		'サーバー',
		'サーバーモニタリング',
		'リソースボード',
		'ダッシューボード',
		'Server'
	],
	displayed_sidebar: 'learningSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "best-practice-guides/about-server-dashboard",
  "title": "リソースボードを見る",
  "description": "サーバーのパフォーマンスモニタリング機能の1つであるリソースボードメニューからチャート型ウィジェット分析方法を説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/best-practice-guides/about-server-dashboard.mdx",
  "sourceDirName": "best-practice-guides",
  "slug": "/best-practice-guides/about-server-dashboard",
  "permalink": "/ja/best-practice-guides/about-server-dashboard",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/best-practice-guides/about-server-dashboard.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "about-server-dashboard",
    "title": "リソースボードを見る",
    "description": "サーバーのパフォーマンスモニタリング機能の1つであるリソースボードメニューからチャート型ウィジェット分析方法を説明します。",
    "keywords": [
      "サーバー",
      "サーバーモニタリング",
      "リソースボード",
      "ダッシューボード",
      "Server"
    ],
    "displayed_sidebar": "learningSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "learningSidebar",
  "previous": {
    "title": "히트맵 트랜잭션",
    "permalink": "/ja/best-practice-guides/about-apm-hitmap-class"
  },
  "next": {
    "title": "브라우저 모니터링",
    "permalink": "/ja/best-practice-guides/using-browser-monitoring"
  }
};
const assets = {

};

/*

> 일본어 이미지 미작업
>*/


const toc = [{
  "value": "サーバモニタリングの主なメトリクス",
  "id": "サーバモニタリングの主なメトリクス",
  "level": 2
}, {
  "value": "サーバステータスの概要",
  "id": "サーバステータスの概要",
  "level": 2
}, {
  "value": "システム運用統計",
  "id": "システム運用統計",
  "level": 2
}, {
  "value": "早期アラートおよび通知",
  "id": "早期アラートおよび通知",
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
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["この文書では、WhaTapモニタリングサービスの一つであるサーバモニタリングの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "リソースボード"
        })
      }), "メニューのチャート型ウィジェットに対する分析方法を説明します。サーバー(Server)の問題を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "リソースボード"
        })
      }), "で特定して分析する方法を説明します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "リソースボード"
        })
      }), "の機能の概要については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.whatap.io/server/resourceboard",
        children: "次の文書"
      }), "を参照にしてください。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["サーバーモニタリングの核心はプロセスです。プロセスが通常の動作範囲内で中断することなく動作できるためには、サーバーの状態をいち早く把握し、さまざまなトラブルに対応しなければなりません。リソース使用量をチェックしながら予想するのがその始まりです。WhaTapの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "リソースボード"
        })
      }), "は、データ集約型の画面でリソース使用量を一目で確認できるように、CPU、Memory、Disk、Network関連の指標で構成された時系列チャートウィジェットが用意されます。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["サーバー状態の概要：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Server"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "OS"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Total Cores"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Avg CPU"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Avg Memory"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Avg Disk"
            })
          }), "、 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Server Status Map"
            })
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["システム動作統計：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "CPUResourceMap"
            })
          })]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["早期警報及び通知：", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "CPU TOP5"
            })
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Memory TOP5"
            })
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "Disk I/O TOP5"
            })
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "プロセスCPU TOP5"
            })
          }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "リアルタイムアラート"
            })
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "サーバモニタリングの主なメトリクス",
        children: "サーバモニタリングの主なメトリクス"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "CPU"
            }), "：CPUのパフォーマンス指標は、サーバのパフォーマンスを把握するための最も重要な指標として使用します。CPUの使用率が一定のレベルを超えると、サービスに影響します。問題が発生した場合、ハードウェアの追加購入やCPUを使用するアプリケーションのパフォーマンスをチューニングするなど、CPUの使用率の管理目標を達成するための対策を講じられます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "IT関連のソリューションは、サーバーのパフォーマンスに基づいて価格設定があります。それらのほとんどが、CPUのコアに基づいて価格が設定されているのと同じ理由です。"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Memory"
            }), "：バッファおよびキャッシュメモリなどのメモリの使用状況を確認します。メモリの使用量が急に高くなったり、高いまま持続的に低下されない場合は、メモリ使用量の管理目標を達成するための対策を講じられます。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Disc I/O"
            }), "：DiskI/Oはネットワークドライブを使用しているかどうかを確認する必要があるモニタリング要素です。ディスクの読み取り速度、書き込み速度、キュー、待機時間などをモニタリングします。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Network"
            }), "：ネットワーク指標は、ネットワークインターフェースの入出力トラフィックの速度とエラーパケットなどをモニタリングします。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "サーバステータスの概要",
        children: "サーバステータスの概要"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "resourceboard-info.png",
        desc: "インフォパネル"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ユーザーは", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "の上部にある情報パネルからプロジェクトに登録されているサーバー全体の概要指標を簡単に確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Server"
          })
        }), "ウィジェットですべてのサーバー数と障害が発生したサーバー数を確認できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "right-arrow",
          src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "ボタンを選択すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "サーバーリスト"
          })
        }), "メニューに移動します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "状態"
          })
        }), "カラムからすぐ対応が必要な", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "危険アイコン",
          src: (__webpack_require__(98841)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "危険"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "vslow",
          children: "赤色"
        }), ")、トラブル発生の可能性がある", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "警告アイコン",
          src: (__webpack_require__(43420)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "slow",
          children: "警告"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "slow",
          children: "オレンジ色"
        }), ")、正常動作範囲である", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "正常アイコン",
          src: (__webpack_require__(71423)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "snormal",
          children: "通常"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "snormal",
          children: "緑色"
        }), ")、データが収集されてない", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "非活性アイコン",
          src: (__webpack_require__(77590)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "k8s-normal",
          children: "非活性"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
          class: "k8s-normal",
          children: "グレー"
        }), ")の状態が、アイコンと色で簡単に確認できます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "サーバーリスト"
          })
        }), "の詳しい説明は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.whatap.io/server/server-list",
          children: "次の文書"
        }), "を参照にしてください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "OS"
          })
        }), "ウィジェットはプロジェクト内のOS数、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Total Cores"
          })
        }), "はサーバー全体コアの合計、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Avg CPU"
          })
        }), "はサーバー全体CPUの平均使用率、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Avg Memory"
          })
        }), "はサーバー全体メモリの平均使用量を表します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "中央メインチャートの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "サーバーのステータスマップアイコン",
          src: (__webpack_require__(15215)/* ["default"] */ .A) + "",
          width: "48",
          height: "48"
        }), "アイコンを選択して、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "ServerStatusMap"
          })
        }), "に移動すると、ハニカムチャートからプロジェクト内サーバーのステータスを一目で確認できます。ハニカムチャートビューは、サーバーが多数の場合に便利です。1つの六角形が、1つのサーバーエージェントを意味します。問題が発生したサーバーを色で可視化し、直感的に識別が可能です。個々の六角形を選択すると、サーバーエージェントの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "サーバー詳細"
          })
        }), "ページに移動します。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "honeycomb-view.png",
        desc: "ハニカムチャート"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "の各ウィジェットを使用して、リソース使用量の全体とサーバーの状態の概要を簡単に確認できます。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "システム運用統計",
        children: "システム運用統計"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["プロセスの正常動作を確認するための最も重要な要素はCPUの使用率です。CPU指標がシステムの負荷状況をすぐ反映するためです。WhaTapは、システム全体の状況を一目で確認できるようCPU使用率を分布図チャートとして提供します。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "中央の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "リソースマップアイコン",
          src: (__webpack_require__(54488)/* ["default"] */ .A) + "",
          width: "48",
          height: "48"
        }), "アイコンを選択すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU resource map"
          })
        }), "が表示されます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU resource map"
          })
        }), "では、プロジェクト内のサーバー全体のCPU使用率の分布図を確認できます。セル領域をドラッグすると、該当セッションの詳細情報が表示されます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "resourceboard-resourcemap.png",
        desc: "リソースマップ リソースボード"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["クラウドIT資産を効率的に運用するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "リソースの過剰な状態"
        }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "過不足"
        }), "の状態を両方を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "回避し"
        }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "使用量"
        }), "を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "適切に制御"
        }), "することが必要です。次の画面では、操作を最適化することでリソース使用量を50%にして、コストおよびパフォーマンス効率のバランスを取ろうとします。このような例の場合、使用量が増加した時に50%のパフォーマンスマージンを使用して一時的なトラブルを回避できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "40%以下のリソースマップ",
          src: (__webpack_require__(34066)/* ["default"] */ .A) + "",
          width: "600",
          height: "600"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "過剰投資とは、サービスと比較してシステムが過剰にインストールされ、インフラコストが必要以上に支出されている状態です。システムの安定性が保証されているため、ユーザーがピーク時に受ける影響は大きくありません。その結果、モニタリングに費やす時間を短縮すために、使用量の平均値を下げることで過剰投入する傾向があります。ただし、過剰投入の傾向が高まるとコストが増加するため、状況をすばやく知ることが重要です。過少投入とは、システム変更などによる負荷の増加によりシステムの利用が制御不能となり、サービス品質の低下やユーザビリティの低下を招きます。ユーザーがサービスから離れる前に、適切なアクションが必要です。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU Resource Map"
          })
        }), "を使用すると、過剰投入と過少投入の状況を簡単に特定して確認できます。マップの下部は一般的に過剰投入傾向にあり、上部は過少投入傾向にあります。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "リソースマップの例cht",
          src: (__webpack_require__(54837)/* ["default"] */ .A) + "",
          width: "506",
          height: "266"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["サンプル画面", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPUResourceMap"
          })
        }), "下部にある", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number-s",
          src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "エリアをドラッグして詳細情報を表示すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "サーバーあたりのCPU使用率"
          })
        }), "グラフで過剰投入の傾向が確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "cpu-usage.png",
        desc: "過剰投入"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "これは高い傾向性を提示したもので、下部に表示されるサーバーがすべて過剰投入の状態ではありません。定期的に負荷がピークになるサーバーの場合、チャートの解析に注意する必要があります。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU Resource Map"
          })
        }), "上段の", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "number-s",
          src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), "エリアをドラッグして詳細情報を表示すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "サーバーあたりのCPU使用率"
          })
        }), "グラフで過小投入の傾向を確認できます。次の詳細情報の例は、一般的なCPU低下または、Starvation状態の画面であり、サーバーはピークと解像度が繰り返されてクリティカルです。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "cpu-usage-starvation.png",
        desc: "starvation cht"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["IT資源は、効率と改善のために常に見直す必要があります。WhaTapのサーバーモニタリングは、異常な状態をすばやく特定し、プロセスをすぐに表示できるように\nエンジニアのノウハウを可視化しました。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU ResourceMap"
          })
        }), "を使用してリソースの過剰状態と過不足状態を簡単に識別できるだけでなく、次に説明するリソース使用状況の上位5つの一覧ウィジェットで主要なプロセスが一目で確認できます。複数のプリセットを必要とする不要なチャート構成を減らし、データ集約型のWhaTapのダッシュボードを使用して、コミットの過不足および主要なプロセスをすばやく表示します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "早期アラートおよび通知",
        children: "早期アラートおよび通知"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "は、リソース使用率が最も高いサーバーとプロセスの上位5つの一覧チャートを提供します。ユーザーが潜在的に問題のあるサーバーを特定するのに役立つ早期警報ウィジェットは、それぞれ右側と下部で確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "リソース使用率が高い場合、トラブルが必ず発生します。WhaTapは、Top 5のリストチャートを通じてサーバーモニタリングの重要な指標であるCPU、Memory、Disk I/O、Networkなどのリソース使用率が高いサーバーとCPU、Memory使用率が高いプロセスを一目で確認し、トラブルを早期に解決するのに役立ちます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["大きな問題が発生する前に、WhaTapの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "を通じてシステムの主要な問題の事例を紹介します。次の画面では、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Disk I/O Top5"
          })
        }), "ウィジェットに、使用可能な容量と比較してDisk I/Oが高い機器のステータスを確認できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ステータス情報をもとに、同じ機器で発生したトラブル履歴を確認し、速度低下やインデックスファイルの破損などの異常が発生していることを確認しました。そこで、SSDを導入し、大容量で導入が難しい場合、NASスナップショットのバックアップを使用することで、Disk I/Oの問題を解決しました。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "discio-usage.png",
        desc: "diskスペックの変更"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["最新のイベントの傾向が確認できる", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リアルタイム通知"
          })
        }), "は", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "の上部にある固定メニューで利用できます", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "リアルタイム通知icon",
          src: (__webpack_require__(4754)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "ボタンをクリックして確認できます。WhaTapは、独自の通知しきい値設定を提供します。エージェントをインストールしてデータを収集すると、プリセットを必要とせずに、それ以降の通知を確認できます。例えば、Disk I/O(%)指標は5秒間のディスク使用率を表します。Disk I/O(%)が80%を超えるとシステムパフォーマンスに影響を与える可能性がありますが、100%の場合は、ディスクが常時稼働していることを意味します。WhaTapサーバーモニタリングでデフォルトに設定されたDisk I/O(%)のアラート値は90%です。つまり、90%を超える場合は、ユーザーがしきい値の詳細設定していない場合でも、通知がすぐに行われます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "server-rt-notice.png",
        desc: "リアルタイムアラート cht2"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["WhaTapのデフォルトの通知設定により、ユーザーはエージェントがインストールされるとすぐにモニタリングが開始されます。WhaTapサーバーモニタリングの特長である効率と利便性を反映します。簡単に設定できるプロセス通知など、サーバーモニタリング通知設定の詳細については、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://docs.whatap.io/server/warning-notice",
          children: "次の文書"
        }), "を参照ください。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "リソースボード"
          })
        }), "はサーバー全体のステータスを要約し、簡潔で問題志向のビューを提供する効率的なダッシュボードです。CPUに問題が存在するサーバーの数と傾向を同時に検知するためのメインチャート(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU Resource Map"
          })
        }), ")とOSモニタリングの主要指標によるTop5の一覧を通じて問題を引き起こしそうなターゲットリソースを公開し、サーバーで発生した通知履歴を最新の順序で表示します。WhaTapの直感的で簡潔なダッシュボード構成は、大規模なシステムをモニタリングする必要がある場合にさらに役立ちます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "ダッシュボードの追加"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["リソース別のTop5ウィジェットの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "right-arrow",
              src: (__webpack_require__(21376)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "ボタンをクリックすると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "リソースイコライザー"
              })
            }), "メニューへ移動し、サーバー全体のリアルタイムの使用状況を表示できます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["サーバーユニットの詳細情報は、ウィジェットのチャート領域を選択して移動する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "サーバー詳細"
              })
            }), "メニューで確認できます。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["サーバーリソースの利用パターンを表示したり、負荷設計と比較する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "分析"
              })
            }), ">", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "メトリクスチャート"
              })
            }), "メニューを使用します。"]
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

/***/ 54488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDE2SDE2VjZINlYxNlpNMzIgMTZINDJWNkgzMlYxNlpNMzIgMjlINDJWMTlIMzJWMjlaTTQyIDQySDMyVjMySDQyVjQyWk0xNiAyOUg2VjE5SDE2VjI5Wk02IDQySDE2VjMySDZWNDJaTTI5IDE2SDE5VjZIMjlWMTZaTTE5IDI5SDI5VjE5SDE5VjI5Wk0yOSA0MkgxOVYzMkgyOVY0MloiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 15215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS43MzY5IDE0LjMzNTVMMjEuMTgxOSAyMi4zMDY2SDEyLjYyOTJMOC4xNjggMTQuNTAwNEwxMi42MjkyIDYuNjk0OTZIMjEuMzY5OEwyNS43MzY5IDE0LjMzNTVaTTI4LjE0MjkgMTNMMjMgNEgxMUw1IDE0LjVMMTAuMjg1NyAyMy43NUw1IDMzTDExIDQzLjVIMjNMMjguNDI4NiAzNEgzOC41TDQ0LjUgMjMuNUwzOC41IDEzTDI4LjE0MjkgMTNaTTIzLjc2MjUgMjMuNjY1N0wyOC4zMTcyIDE1LjY5NUwzNi44Njk4IDE1LjY5NUw0MS4zMzExIDIzLjUwMTJMMzYuODY5OCAzMS4zMDY2SDI4LjEyOTJMMjMuNzYyNSAyMy42NjU3Wk0xMi42MjkyIDQwLjgwNjZMOC4xNjggMzMuMDAwNEwxMi42MjkyIDI1LjE5NUgyMS4zNjk4TDI1LjgzMTEgMzMuMDAwNEwyMS4zNjk4IDQwLjgwNjZIMTIuNjI5MloiIGZpbGw9IiM3NTc1NzUiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 71423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyWiIgZmlsbD0iIzAwQjU0MyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1LjQ2MTEgOEwxNy4wMDAyIDkuNTE0MzlMMTAuNDM4MiAxNkw3LjAwMDI0IDEyLjU0NDZMOC41MjQwMSAxMS4wNDUzTDEwLjQzODIgMTMuMDcxOEwxNS40NjExIDhaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 98841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE0MjUgNC40NjYxNUMxMS41MzU0IDMuODQ1MDIgMTIuNDQwNCAzLjg0NDUyIDEyLjgzMzkgNC40NjUyM0wyMi4zNDI0IDE5LjQ2MDFDMjIuNzY1NyAyMC4xMjc2IDIyLjI4NjcgMjEgMjEuNDk3IDIxSDIuNTAzMDNDMS43MTM4MSAyMSAxLjIzNDc1IDIwLjEyODYgMS42NTcwMSAxOS40NjExTDExLjE0MjUgNC40NjYxNVoiIGZpbGw9IiNERjM3MzciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxNkgxMVYxOEgxM1YxNlpNMTMgMTBIMTFWMTVIMTNWMTBaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 43420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS4xMjYgMy40MTg0QzExLjUxOSAyLjc5OTI3IDEyLjQyMjcgMi43OTk3NyAxMi44MTUgMy40MTkzMkwyMi4yODcxIDE4LjM3NjFDMjIuNzA4OCAxOS4wNDE5IDIyLjIzMDQgMTkuOTExMSAyMS40NDIzIDE5LjkxMTFIMi40NzUxNkMxLjY4NjU2IDE5LjkxMTEgMS4yMDgyNiAxOS4wNDA5IDEuNjMwOTEgMTguMzc1MUwxMS4xMjYgMy40MTg0Wk00LjI5NDcxIDE3LjkxMTFMMTkuNjI1NiAxNy45MTExTDExLjk2OTQgNS44MjE3OUw0LjI5NDcxIDE3LjkxMTFaTTEwLjk5OTkgMTQuOTU0NUgxMi45OTk5VjE2Ljk1NDVIMTAuOTk5OVYxNC45NTQ1Wk0xMi45OTk5IDguOTU0NTRIMTAuOTk5OVYxMy45NTQ1SDEyLjk5OTlWOC45NTQ1NFoiIGZpbGw9IiNGRjk5MDAiLz4KPC9zdmc+Cg==");

/***/ }),

/***/ 77590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogICAgPHBhdGggZmlsbD0iIzc1NzU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTUuMzI1IDE4LjM5NmwxLjE4NSAxLjYzMUwxMiAyMy4wNjlsLTQuNTExLTMuMDQyIDEuMTg1LTEuNjMxTDEyIDIwLjU1OWwzLjMyNS0yLjE2M3pNNSAxMXY1LjAwN2wxLjk5NiAxLjI5Ny0xLjE2NiAxLjYwNEwzIDE3di02aDJ6bTkuMTIxLTQuNTM2bDEuNDE1IDEuNDE1TDEzLjQxNCAxMGwyLjEyMiAyLjEyMS0xLjQxNSAxLjQxNUwxMiAxMS40MTRsLTIuMTIgMi4xMjItMS40MTUtMS40MTVMMTAuNTg1IDEwbC0yLjEyLTIuMTIgMS40MTQtMS40MTVMMTIgOC41ODZsMi4xMjEtMi4xMjJ6TTIxIDExdjZsLTIuODMxIDEuOTA4LTEuMTY1LTEuNjA0TDE5IDE2LjAwN1YxMWgyem0tMi04bC02LS4wMDFWMWg4djhoLTJWM3pNMyAxaDh2Mkg1djZIM1YxeiI+PC9wYXRoPgo8L3N2Zz4=");

/***/ }),

/***/ 4754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNnB4O2hlaWdodDogMjZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZXZlbnQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjM5MS4wMDAwMDApIiBmaWxsPSIjNzk3OTc5Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZXZlbnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgNDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDEuMDAwMDAwKSIgaWQ9IkNvbWJpbmVkLVNoYXBlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTcsMTkgTDEzLDE5IEMxMywyMC42NTY4NTQyIDExLjY1Njg1NDIsMjIgMTAsMjIgQzguNDAyMzE5MTIsMjIgNy4wOTYzMzkxMiwyMC43NTEwOCA3LjAwNTA5MjY5LDE5LjE3NjI3MjggTDcsMTkgTDEzLDE5IFogTTEwLDAgQzExLjEwNDU2OTUsMCAxMiwwLjg5NTQzMDUgMTIsMiBDMTIsMi4wOTY5NzY1MyAxMS45OTMwOTc5LDIuMTkyMzQwOTkgMTEuOTc5NzU4MiwyLjI4NTYyODk1IEMxNC44ODE4MDcyLDMuMTM4MTQ1MzcgMTcsNS44MjE3MDc0NyAxNyw5IEwxNywxNSBMMTksMTUgQzE5LjU1MjI4NDcsMTUgMjAsMTUuNDQ3NzE1MyAyMCwxNiBDMjAsMTYuNTUyMjg0NyAxOS41NTIyODQ3LDE3IDE5LDE3IEwxLDE3IEMwLjQ0NzcxNTI1LDE3IDYuNzYzNTM3NTFlLTE3LDE2LjU1MjI4NDcgMCwxNiBDLTYuNzYzNTM3NTFlLTE3LDE1LjQ0NzcxNTMgMC40NDc3MTUyNSwxNSAxLDE1IEwzLDE1IEwzLDkgTDMuMDA0MDU5MDIsOC43NTkzNTAyNSBDMy4xMDc4NTc5NSw1LjY4Njg3MzI3IDUuMTkxNzI1NDIsMy4xMTY1MDAwNCA4LjAxOTkwNDkxLDIuMjgzOTg3MDYgQzguMDA2OTAyMDYsMi4xOTIzNDA5OSA4LDIuMDk2OTc2NTMgOCwyIEM4LDAuODk1NDMwNSA4Ljg5NTQzMDUsMCAxMCwwIFogTTEwLDQgQzcuMzAyODE1OCw0IDUuMDkzNjkxMTksNi4xMzk5ODcwNyA1LjAwMzc3NDU5LDguNzkzMDc5MjggTDUsOSBMNSwxNSBMMTUsMTUgTDE1LDkgQzE1LDYuMjM4NTc2MjUgMTIuNzYxNDIzNyw0IDEwLDQgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ 15856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 29675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 34066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/resourcemap-under40-e30fddf392ef821c29f5dd11b7ffe550.png");

/***/ }),

/***/ 21376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxMnB4O2hlaWdodDogMTJweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0MC4wMDAwMDAsIC0xNjQuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICAgIDxnIGlkPSJkaXJlY3Rpb25hbC1pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAxMTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcwMC4wMDAwMDAsIDQ1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjU1NzM5MzUsMTcuNDYzNTM2NiBMMC4xNDMxNzk5NCwxNi4wNDkzMjMgTDcuMjE0MTc5OTQsOC45Nzc5NzM4MyBMMC4xNDMxNzk5NCwxLjkwNzE4NzQgTDEuNTU3MzkzNSwwLjQ5Mjk3MzgzNCBMMTAuMDQyNjc0OSw4Ljk3ODI1NTIxIEwxLjU1NzM5MzUsMTcuNDYzNTM2NiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 54837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/temp-resourcemap-ff94d41abfaf201bb20eab2cb858a25b.png");

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