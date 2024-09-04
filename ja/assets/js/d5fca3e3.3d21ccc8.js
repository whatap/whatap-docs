"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[15019],{

/***/ 53641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ overview_contentTitle),
  "default": () => (/* binding */ overview_MDXContent),
  frontMatter: () => (/* binding */ overview_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ overview_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./src/components/CustomListItem.js
var CustomListItem = __webpack_require__(48530);
// EXTERNAL MODULE: ./src/components/ChangelogComponent.js
var ChangelogComponent = __webpack_require__(74979);
;// CONCATENATED MODULE: ./i18n/ja/crw-data/overview/_changelog_overview.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.3​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントインストール"
          }), "メニューで権限に関する案内文句を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle V2"
          }), "サービスを開始！"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " ", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle Pro"
          }), "サービスを開始！"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), " Kubernetesクラスター内で実行中のすべてのサービスの状態と情報を総合的に提供する", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Service リスト"
          }), "メニューを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            type: "1",
            children: "New"
          }), "ノードの観点でディスクモニタリングのための", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノードディスクリスト"
          }), " メニューを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), "サイドメニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "全プロジェクト"
          }), "を選択してプロジェクト一覧を開くと、プロジェクトの検索入力欄に自動フォーカスされる機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " サイドメニューの統合検索でエージェントをIPアドレスで検索できる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), "次のメニューパスで照会内容をCSVファイルにダウンロードする機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェント設定"
          }), "メニューパスで選択したエージェントのエージェント設定(", (0,jsx_runtime.jsx)("em", {
            children: "whatap.conf"
          }), ")ファイルダウンロード機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "インスタンス性能管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "スレッドリスト/ダンプ"
          }), "メニューのテーブルで、CPU時間の増加量を表示するカラムを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューの要約で", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "対象情報"
          }), "タブに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナ要約分析"
          }), "機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューの要約で", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "対象情報"
          }), "及び", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース関係"
          }), "タブに", (0,jsx_runtime.jsx)("strong", {
            children: "Service"
          }), "情報を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ検索"
          }), "タブ(要約または詳細を見る)で", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログTail"
          }), "メニューに移動できるリンクを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナー"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナリスト"
          }), "メニューで次のカラムの各項目に関連リストメニューに移動できるボタンを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナアプリケーションリスト"
          }), "メニューで次のカラムの各項目に関連リストメニューに移動できるボタンを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナアプリケーションリスト"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース"
          }), "グループに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Image"
          }), "カラムを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスター"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetesイベント"
          }), "メニューのイベントリストテーブルに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベントの初回発生時刻"
          }), "と", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント発生件数"
          }), "カラムを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスター"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノード詳細"
          }), "メニューにPod一覧を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "トレース分析"
          }), "画面の", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "レコード要約"
          }), "タブで", (0,jsx_runtime.jsx)("strong", {
            children: "Container Id"
          }), "、", (0,jsx_runtime.jsx)("strong", {
            children: "Pod Name"
          }), "情報を提供し、その情報をクリックすると、それぞれコンテナリスト、パドリストページに移動する機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), "Kubernetesエージェントが非活性化されると、ユーザーがすぐに認知できるように画面上部にエージェント状態表示を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), "特定の日付を基準に設定された時間帯のSQLの推移を比較し、騰落を確認できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top SQL比較"
          }), "メニューを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年07月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_7_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.7.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            type: "1",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチインスタンス"
          }), "メニューにDBが起動してからどれくらい時間が経ったのかを確認できる", (0,jsx_runtime.jsx)("em", {
            children: (0,jsx_runtime.jsx)("strong", {
              children: "Uptime"
            })
          }), "ウィジェットを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flexボード / 統合Flexボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ウィジェットに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "選択したプロジェクト"
          }), "表示機能の追加: ウィジェットにデータを呼び出すプロジェクトの一覧を確認可能"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "利用状況"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "決済手段登録/修正メニューのUI/UXの改編(プロフィールアイコン> ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "利用状況"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "決済情報"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ダッシューボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーション"
          }), "メニューで基本プリセット変更の機能追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーション"
          }), " メニューでエージェントの検索機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TXマップ"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TOP 30"
          }), "フィルター内の項目を直接検索して追加する", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "カスタム"
          }), "機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "統計"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計"
          }), "下位メニューの機能改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントインストール"
          }), "メニューに", (0,jsx_runtime.jsx)("strong", {
            children: "Oracle Solaris OS"
          }), "インストール案内のページを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "コンテナマップ"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "概要を表示の", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "対象情報"
          }), "タブに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Containter State"
          }), "表示と説明を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "クラスター"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノードリスト"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノード情報"
          }), "下位カラムに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "capacityType"
          }), "を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ワークロード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "Pending状態のPodを素早く把握できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pod状況"
          }), "メニューを追加(", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "実験室"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pods"
          }), "メニューから", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), "下位メニューに移動)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "パラメータ"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "基準日"
          }), "と", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "比較日"
          }), "をすべて今日の日付に設定すると、リアルタイムデータと保存された最後のデータを照会して比較する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月26日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_6_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.6.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ページロードヒットマップ"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Ajaxヒットマップ"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ユーザーセッションログ検索"
          }), "メニューにユーザーがウェブサイトで行うすべてのイベントを記録し、再生できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "セッションリプレイ"
          }), "機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年06月03日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.8​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "トレース分析"
          }), "画面のURLをコピーするボタンを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月30日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.7​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "性能推移"
          }), "メニューで連続検索を防止する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flexボード / 統合Flexボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ダッシュボードのエクスポート機能を利用する際、プロジェクト情報を除いてエクスポートする機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "カウント形態のウィジェットにフィールド選択機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "補助チャートの設定でグループ内のオプションを共有できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "グループ内のウィジェット全体に適用"
          }), "機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "グループウィジェットに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "プロジェクト選択"
          }), "機能を追加、グループ下位ウィジェットに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "グループウィジェットに選択されたプロジェクト"
          }), "選択オプションを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ウィジェットに関する説明の添付機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アラート通知"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ログモニタリングに対応するプラットフォームの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント設定"
          }), "メニューでログイベント設定機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サーバーリスト"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェント名"
          }), "と", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ホスト名"
          }), "を区分されたカラムで表示するように修正"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サーバーリスト"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サーバー 詳細"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サーバー情報"
          }), "セクションでAgent NameとHost Nameを区分された項目で表示し、ユーザーが修正できる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーション"
          }), "カテゴリに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "インスタンス性能管理"
          }), "メニューを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "実験室"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pod状況"
          }), "メニューの詳細タブの改編"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年05月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_5_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.5.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait分析"
          }), "メニューのテーブルウィジェットでマウスオーバーすると、項目の全体名を確認できるツールチップを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flexボード / 統合Flexボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("b", {
            children: "統合サービス2"
          }), "ダッシュボードテンプレートを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アカウント管理"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アカウント管理"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ユーザー電話番号"
          }), "セクションで一般の携帯電話に国・地域コードの選択機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーション"
          }), " メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アクティブTXイコライザー"
          }), "ウィジェットに非活性エージェントを表示するオプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント設定"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), "メニューに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログファイル / Windowsウイベント"
          }), "設定を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント履歴"
          }), "メニューからイベント詳細画面に移動すると、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート前後"
          }), "項目の時間設定に応じてプロセスチャートの時間範囲が変更されるように改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Deployment リスト"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "詳細"
          }), "画面の", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース"
          }), "タブにReplicasetリストを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース関係"
          }), "タブを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスター"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Object Manifest"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetesイベント"
          }), "連動機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "インスタンスモニタリング"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アクティブセッション"
          }), "テーブルのデータを1分おきに照会できるボタンを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Topオブジェクト"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Age"
          }), "タブに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "per_to_wraparound"
          }), "カラムを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_4_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.4.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチインスタンス"
          }), "メニューでディスク使用の推移が確認できる詳細なポップアウトを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチインスタンス"
          }), "メニューでウィジェットを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年04月09日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.14​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント設定"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), "メニューで既存のイベント設定メニューのイベントタブを表示し、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "JSON一括修正"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "JSON 一括ダウンロード"
          }), "機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "サイドメニューでプロジェクト一覧の幅を調整できる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月29日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.5​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント設定"
          }), "メニューで次のように複合メトリクスイベントテンプレートを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.2​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントインストール"
          }), "メニューでHelmを利用したエージェントのインストール案内を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Redis, MongoDB ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), "サービス開始！"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " kube-apiserver収集指標リストを照会できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "kube-apiserver メトリクス照会"
          }), "メニューを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Deploymentを基準にReplicaSet数及びコンテナ数、主な性能情報の統計、Pod個数などの情報を提供する", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Deployment リスト"
          }), "メニューを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), "ユーザーセッション ログを検索できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ユーザーセッションログ検索"
          }), "メニュー追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アラート通知"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "通知設定"
          }), "メニューから3rdパーティープラグインでOpsgenieプラットフォーム登録機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "エージェント選択オプションのエージェントリスト間隔の調整と検索機能の追加、名前順に並べ替えて表示"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "エージェントごとのアクティブトランザクションを表示する", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントアクティブTX"
          }), "ウィジェットを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TXマップ"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Top 30"
          }), "セクションでIPフィルター項目として希望するIPアドレスを追加・削除・フィルタリングできる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログファイル / Windowsウイベント"
          }), "タブで受信者タグの設定機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pod初期化性能"
          }), "メニューの改編とメニュー名を", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pod起動分析"
          }), "に変更"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューからリストメニューに移動するリンクを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューで選択したカテゴリのPod Phase情報及びPhase案内を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナアプリケーションリスト"
          }), "メニューのアプリケーション詳細情報に", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "呼出し情報"
          }), "タブを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "詳細"
          }), "から対象(コンテイナ/ファド) の一覧から選択したものだけが確認できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "選択のみ表示"
          }), "オプションを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統合コンテナマップ"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "グループ化"
          }), "オプション項目として", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhatapProject"
          }), "追加：WhaTapプロジェクト別グループ化機能"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "Kubernetesクラスタープロジェクトの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスター"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノードリスト"
          }), "メニューでノード情報カラムを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ワークロード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナイメージ"
          }), "メニューの画面上に画像の総数を表示"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " Podカテゴリに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "1分以内に生成されたコンテナを表示する"
          }), "オプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Flexボード"
          }), "メニューでアクティブセッションテーブルフィルターを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "セッション詳細"
          }), "ウィンドウにリアルタイム/停止照会及び更新ボタンを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL統計"
          }), "メニューでマルチフィルタ選択機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL、MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシューボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチインスタンス"
          }), "メニュー機能の改編"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(xos)"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Default(rds)"
          }), "プリセットを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ダッシュボードの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL Elapse Map"
          }), "と", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Slow Query"
          }), "ウィジェットで変更したY軸値を保存する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントインストール"
          }), "メニューのデザイン改善及びインストール案内を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "PG SQL統計"
          }), "メニューでマルチフィルタ選択機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "MYSQL SQL統計"
          }), "メニューでマルチフィルタ選択機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MongoDB"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "DBサイズ"
          }), "メニューのUI変更"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月27日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_3_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.3.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "次のメニューパスにユーザーセッション分析機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年03月20日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.9​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "トレース分析"
          }), "ウィンドウの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "テーブルビュー"
          }), "で", (0,jsx_runtime.jsx)("b", {
            children: "DB Connection"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "SQL"
          }), "ステップをクリックすると活性化されるモーダルに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SERIAL"
          }), "フィールドを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月29日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.4​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " Goモニタリング製品のBetaサービスを終了し、正式サービスを開始します。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " サイドメニューを改編"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " SSOアカウントの連動機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), "メトリクスのフィールド(Field) 中心のユーザー体験を強化した", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "newfunc",
            children: "New"
          }), " 機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "新機能リリーズ"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), "マスター及びノードエージェントのインストール状況が確認できる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Kubernetesエージェントリスト"
          }), "メニューを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), " kube-apiserverの状態と性能メトリクスの収集、応答時間、処理量、リクエスト失敗などを追跡し、クラスターの可用性と性能をモニタリングできる", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "kube-apiserver ダッシュボード"
          }), "メニューを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flexボード / ダッシュボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "グループウィジェットコピー機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ダッシュボードのApdex*100ウィジェットに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "複数プロジェクトのマージ"
          }), "メトリクス項目を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ウィジェットに該当製品のダッシュボードに移動可能なボタンを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アラート通知"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), "メニューでメトリクスイベントを追加または編集する時、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "カテゴリ"
          }), "項目の製品ロゴに適用されているダークテーマの視認性を改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TXマップ"
          }), "メニューに新しいUIを適用し、機能を変更"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "AIX OSに対してエージェントインストールパッケージ及び案内を提供"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " XOS2指標の代替に関する案内事項を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "データベース"
          }), "タブでエージェントイベントの復旧通知(", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント状態が解決されたら追加で通知する"
          }), ") 機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントリスト"
          }), "メニューでデータベースサーバーのIPアドレスを表記する", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "DB IPアドレス"
          }), "カラムを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Database V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "次のメニュー経路で", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ロックツリー"
          }), "テーブルのカラムをクリックすると、セッションの詳細ウィンドウを表示する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "データベースパラメタ"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Value"
          }), "カラム表記時、一部の値に対して単位表記を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " JSON形式でのPlan照会機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "データベースサイズ"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "テーブルサイズ(トップ50)"
          }), "テーブルで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TABLENAME"
          }), "カラム項目をクリックすると", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), "構成を確認できる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューでレプリケーションコントローラ(Replication Controller) のグループ化オプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ページロードヒットマップデータにネットワークステータスに関する指標を追加：", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "有効接続タイプ"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "RTT"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "実効帯域幅"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Page Load Hitmap"
          }), "メニューの", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ページロード"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "詳細"
          }), "ウィンドウでリソースデータに指標を追加：", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "状態コード"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " AJAXヒットマップデータにネットワークステータスに関する指標を追加：", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "有効接続タイプ"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "RTT"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "実効帯域幅"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Delivery Type"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "ネットワーク"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_2_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.2.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "エージェントのインストール時にAWSのリソースを識別するためのオプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "ネットワーク"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年02月01日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.7​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "New",
            children: "New"
          }), (0,jsx_runtime.jsx)("b", {
            children: "ネットワークパフォーマンスモニタリング"
          }), "(", (0,jsx_runtime.jsx)("b", {
            children: "Network Performance Monitoring"
          }), ")サービスをオープンします。 ", (0,jsx_runtime.jsx)("b", {
            children: "ネットワーク性能モニタリング"
          }), "は、ネットワーク間の混雑や障害を把握し、ユーザーのネットワーク性能の改善に活用するために、プロセスのネットワーク通信情報を収集して可視化するモニタリングソリューションです。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント履歴"
          }), "メニューで次の機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "DB V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ロックツリー"
          }), "メニューで次の機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Object Manifest"
          }), "メニューで過去のオブジェクトマニフェストを照会・比較できるように改善(Kubernetesエージェントv1.5.0以降に対応)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月24日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_1_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.1.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログトレンド"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "フィルター"
          }), "一覧にない値を直接入力して選択可能"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "AWS Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月19日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.6​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhaTap Forwarderインストール"
          }), "タブの2番目の", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AWS Region"
          }), "一覧にVirginia(us-east-1) 項目を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ダッシュボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Flexボード"
          }), "メニューで補助チャートの小数点以下桁数の調整機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "利用内訳"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "請求書プレビュー"
          }), "メニューから使用量数値をクリックすると、使用量の詳細情報を表示する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーションダッシュボード"
          }), "メニューの各ウィジェットにツールチップや関連情報、多言語対応を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TXマップ"
          }), "メニューの変更"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL統計"
          }), "メニューから、クエリ(query)にマウスオーバー時のクエリプレビュー機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "#VALUE!"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エージェントアップデート"
          }), "メニューの新しいUI適用及び機能の変更"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL / MySQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "プロジェクトで", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), "に対応していないエージェントバージョンがインストールされている場合、エージェント更新の案内文をヘッダーに表示する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PosgreSQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait分析"
          }), "メニューから、エージェント設定方法の案内モーダルを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Wait分析"
          }), "メニューから、機能紹介モーダルを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "PG SQL統計"
          }), "メニューから、クエリ(query)にマウスオーバー時のクエリプレビュー機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "次のメニュー経路で", (0,jsx_runtime.jsx)("b", {
            children: "column"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "index"
          }), "構成を確認できる機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "MySQL V2"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "MYSQLのSQL統計"
          }), "メニューから、クエリ(query)にマウスオーバー時のクエリプレビュー機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "リソース"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "次のメニューで画面上段のステータスアイコンを選択すると、選択したステータスのリソースだけがフィルタリングされる機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "リソース"
          }), "メニューの下位に、次のメニューを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナリスト"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Node"
          }), "カラム項目を選択すると、該当ノード一覧がフィルタリングされた", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノードリスト"
          }), "メニューに移動する機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスターサマリー"
          }), "メニューに", (0,jsx_runtime.jsx)("b", {
            children: "Service"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "Ingress"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "Job"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "CronJob"
          }), "オブジェクト一覧を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノードリスト"
          }), " メニューに指標を追加 - ", (0,jsx_runtime.jsx)("b", {
            children: "beta.kubernetes.io/instance-type"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナイメージ"
          }), "メニューに指標を追加 - ", (0,jsx_runtime.jsx)("b", {
            children: "Total Container CPU"
          }), "、", (0,jsx_runtime.jsx)("b", {
            children: "Total Container Memory"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ログ"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "WhaTapイベント"
          }), ": ", (0,jsx_runtime.jsx)("code", {
            children: "#WhatapEvent"
          }), "カテゴリのログデータの照会機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クーバーネティスイベント"
          }), "：プロジェクト単位でKubernetesイベントに対する照会と検索機能"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "etc"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), "メニュー下位に ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "相関プロジェクト管理"
          }), "メニューを追加：連携プロジェクトの登録、照会、削除機能"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "登録された連携プロジェクトがあった場合は", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "トレース分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "テーブルビュー"
          }), "でSQL対象サーバー情報とHTTPURL Connection情報について", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "連携分析"
          }), "ビューを提供"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ検索"
          }), ", ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログTail"
          }), "メニューから、ログ検索フィルター機能を改善"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), "メニューでリアルタイムログイベントを追加または修正しながらAPIリクエストに失敗した場合、失敗の原因をメッセージとして表示するよう改善"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "エージェントオプションが設定された場合、ログレベルを表示する色表示機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2024年01月10日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-2_0_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 2.0.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "次のメニューから、ユーザーIDを基準に検索できるようにフィルター項目を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年12月18日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.10​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アプリケーションダッシュボード"
          }), "メニューでプリセット保存時、エージェント選択状態まで保存できるオプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Application"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年12月01日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.4​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TX検索"
          }), "メニューで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチTXID"
          }), "フィルターを選択した状態で", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "TXID"
          }), "フィルターを除いた他のフィルターを適用できないという案内メッセージを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Applicatoin"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月28日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.3​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ダッシュボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "トレース分析"
          }), "画面のテーブルで", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "エラークラス"
          }), "カラムを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "Flexボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "シリーズタイプのウィジェットに補助テーブルを設定した場合、テーブルのカラム表示を変更できるようにUIを追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "Apdexウィジェットから選択できるチャートの種類を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "メンテナンス計画"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "管理"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "メンテナンス計画"
          }), "メニューの機能を改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アラート通知"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント履歴"
          }), " メニューから、タイトル以外にもメッセージフィールドに対する検索機能を対応"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "利用内訳"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "請求書プレビュー"
          }), "メニューから、使用量を測るオプションの追加と金額表示の改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Server"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "アラート通知"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), "メニューから、サーバー/プロセスイベントに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "イベント受信タグ"
          }), "オプションを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "統計/レポート"
          }), "> ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL統計"
          }), "メニューから棒グラフをクリックすると、５分間の詳しい統計情報画面を表示する機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "インスタンス"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "マルチインスタンス"
          }), "メニューから", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アクティブセッション"
          }), "テーブル折りたたむ(folding)ボタンの追加し、グラフチャート領域をより広い画面で確認できます。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ユーザービリティーのための", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL詳細"
          }), "画面のUIを改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "Plan照会をJSON形式で照会できる機能を追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Topオブジェクト"
          }), "、新規メニューの追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "V2"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート通知"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "アラート設定"
          }), "メニューから、メトリクス/複合メトリクスイベントのテンプレートを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "ダッシュボード"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), " メニューから、1分間消えたコンテナ/Podのブロックを表示する機能を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "リソース"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "クラスターサマリー"
          }), "メニューの追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ノード詳細情報"
          }), "メニューから", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナ"
          }), "テーブルに", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ステータス"
          }), "カラムを追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "その他"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "ネームスペースプロジェクトの実験室メニューとして", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Pending Pods"
          }), "追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ設定"
          }), "メニューから", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログプライマリパーサ設定"
          }), "、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログセカンダリーパーサの設定"
          }), "の内容をJSON形式としてエクスポート、またはインポートする機能の追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ設定"
          }), "メニューから", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "高速インデックス"
          }), "の設定内容をJSON形式としてエクスポート、またはインポートする機能の追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月22日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_114_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.114.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX Hitmap"
          }), "メニューやウィジェット、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "Ajax"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), "機能におけるユーザビリティ向上のためのUIの改善"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "URL"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年11月01日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.3​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "URL追加、編集時", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "収集周期"
          }), "を選択できるUIの追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "User Interface"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サービスカタログ"
          }), "ページでユーザー体験を向上するためのデザイン変更"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), "サイドバー幅の調整機能の追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Database"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview2",
        children: "共通"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "インスタンス"
          }), "メニューから、非リアルタイムモードになったらその時刻の", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "SQL統計"
          }), "メニューへ移動できるボタンの追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Kubernetes"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ダッシュボード"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "コンテナマップ"
          }), "メニューから、ブロックカラー表示指標にアプリケーション関連フィールドも選択できるように追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Cloud"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サイトマップ"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ユーザー行為"
          }), "メニューの追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Log"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ設定"
          }), ">", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログプライマリパーサ設定"
          }), "タブからパーサーを追加する場合、", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ログ検出条件"
          }), "の検索値入力時の予約語に対する有効性検証を追加"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-overview",
        children: "Browser"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-date",
        children: "2023年10月25日"
      }), "\n", (0,jsx_runtime.jsx)("code", {
        class: "changelog-service",
        children: (0,jsx_runtime.jsxs)("a", {
          href: "https://docs.whatap.io/ja/release-notes/service/service-1_112_x",
          children: [(0,jsx_runtime.jsx)("img", {
            src: "../img/ic-link.svg",
            width: "18px",
            height: "18px",
            class: "ico-link medium-zoom-image"
          }), " Service 1.112.0​"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "サイトマップ"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "ユーザー行為"
          }), " メニューの追加"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)("code", {
            class: "Feature",
            children: "Feature"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "分析"
          }), " > ", (0,jsx_runtime.jsx)("span", {
            class: "uitext",
            children: "AJAX Hitmap"
          }), " メニューの追加"]
        }), "\n"]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-blog/overview.mdx


const overview_frontMatter = {
	slug: 'overview',
	title: 'サービス概要',
	authors: 'ysj',
	date: '2024-08-23T16:30',
	toc_max_heading_level: 2,
	tags: [
		'新機能',
		'サービス概要'
	],
	isTranslationMissing: false
};
const overview_contentTitle = undefined;
const metadata = {
  "permalink": "/ja/blog/overview",
  "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/overview.mdx",
  "source": "@site/i18n/ja/docusaurus-plugin-content-blog/overview.mdx",
  "title": "サービス概要",
  "description": "New Feature Overview",
  "date": "2024-08-23T16:30:00.000Z",
  "tags": [
    {
      "inline": true,
      "label": "新機能",
      "permalink": "/ja/blog/tags/新機能"
    },
    {
      "inline": true,
      "label": "サービス概要",
      "permalink": "/ja/blog/tags/サービス概要"
    }
  ],
  "hasTruncateMarker": true,
  "authors": [
    {
      "name": "TW J",
      "email": "ysjo@whatap.io",
      "title": "Technical Writer",
      "imageURL": "./img/teamtwj.svg",
      "key": "ysj",
      "page": null
    }
  ],
  "frontMatter": {
    "slug": "overview",
    "title": "サービス概要",
    "authors": "ysj",
    "date": "2024-08-23T16:30",
    "toc_max_heading_level": 2,
    "tags": [
      "新機能",
      "サービス概要"
    ],
    "isTranslationMissing": false
  },
  "unlisted": false,
  "nextItem": {
    "title": "2분기 안내",
    "permalink": "/ja/blog/2024-2q-summary"
  }
};
const assets = {
"authorsImageUrls": [(__webpack_require__(30435)/* ["default"] */ .A)],
};

/*와탭의 서비스 히스토리 개요를 한 눈에 살펴보세요.*/
/*truncate*/





const overview_toc = [...toc];
function overview_createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "New Feature Overview",
        src: (__webpack_require__(37884)/* ["default"] */ .A) + "",
        width: "934",
        height: "161"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ワタップが提供するサービスの新機能概要をご一読ください。"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("br", {}), "\n", (0,jsx_runtime.jsx)("div", {
      class: "history_overview",
      id: "overview_test",
      children: (0,jsx_runtime.jsx)(CustomListItem/* default */.A, {
        children: (0,jsx_runtime.jsx)(ChangelogComponent/* default */.A, {
          children: (0,jsx_runtime.jsx)(MDXContent, {})
        })
      })
    })]
  });
}
function overview_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(overview_createMdxContent, {
      ...props
    })
  }) : overview_createMdxContent(props);
}



/***/ }),

/***/ 30435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/teamtwj-8ca548071cd575b2056335d511c4c2fc.svg");

/***/ }),

/***/ 74979:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);

// 일단 오버뷰랑 서비스 버전 디스플레이 가리고 br 없애기 (0718 이거 씀)


const ChangelogComponent = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // 중복된 changelog-overview, changelog-date, changelog-service 묶음을 체크하기 위한 Set
        const seenCombinations = new Set();
        // 중복된 날짜를 체크하기 위한 Set
        const seenDates = new Set();
        // 모든 changelog-overview 요소 선택
        const overviewElements = document.querySelectorAll('.changelog-overview');
        overviewElements.forEach((overviewEl)=>{
            // changelog-overview 다음에 위치한 changelog-date, changelog-service 요소 선택
            const dateEl = overviewEl.nextElementSibling;
            const serviceEl = dateEl.nextElementSibling;
            if (overviewEl && dateEl && serviceEl) {
                // 각 요소의 텍스트 내용 추출 및 조합
                const overview = overviewEl.textContent.trim();
                const date = dateEl.textContent.trim();
                const service = serviceEl.textContent.trim();
                const combination = `${overview}::${date}::${service}`;
                // 이미 존재하는 조합인 경우 해당 요소들을 숨김 처리
                if (seenCombinations.has(combination)) {
                    overviewEl.style.display = 'none'; // changelog-overview 숨김
                    serviceEl.style.display = 'none'; // changelog-service 숨김
                    overviewEl.classList.add('changelog-overview-dup'); // 중복 표시 클래스 추가
                    serviceEl.classList.add('changelog-service-dup'); // 중복 표시 클래스 추가
                    // changelog-service-dup 다음의 <br> 요소가 있으면 제거
                    const brElement = serviceEl.nextElementSibling;
                    if (brElement && brElement.tagName === 'BR') {
                        brElement.remove();
                    }
                } else {
                    seenCombinations.add(combination); // 새로운 조합 추가
                }
            }
        });
        // 중복된 날짜 체크
        const dateElements = document.querySelectorAll('.changelog-date');
        dateElements.forEach((el)=>{
            const dateText = el.textContent.trim();
            if (seenDates.has(dateText)) {
                el.classList.add('changelog-date-dup'); // 중복 표시 클래스 추가
                el.setAttribute('data-dup', 'true'); // 데이터 속성 설정
            } else {
                seenDates.add(dateText); // 새로운 날짜 추가
            }
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangelogComponent);


/***/ }),

/***/ 48530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}


function CustomListItem({ children , overview , date , service  }) {
    const listItemProps = {};
    if (overview) {
        listItemProps['data-overview'] = overview;
    }
    if (date) {
        listItemProps['data-date'] = date;
    }
    if (service) {
        listItemProps['data-service'] = service;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", _objectSpreadProps(_objectSpread({}, listItemProps), {
        children: children
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomListItem);


/***/ }),

/***/ 37884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/new_feature_overview_txt-ee61ae3ec473e9be0678e02bdd89b0b9.png");

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