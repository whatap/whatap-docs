"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41762],{

/***/ 4981:
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
	id: 'browser',
	title: 'Browserモニタリング',
	description: 'ブラウザーモニタリング(Browser Monitoring)は、ブラウザーアプリケーションのページロード時間、サーバーレスポンス時間、リソース読み込み時間、ブラウザーエラーなど、様々な性能指標を収集・分析します。',
	keywords: [
		'Browserモニタリング'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "browser",
  "title": "Browserモニタリング",
  "description": "ブラウザーモニタリング(Browser Monitoring)は、ブラウザーアプリケーションのページロード時間、サーバーレスポンス時間、リソース読み込み時間、ブラウザーエラーなど、様々な性能指標を収集・分析します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/browser.mdx",
  "sourceDirName": ".",
  "slug": "/browser",
  "permalink": "/ja/browser",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/browser.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "browser",
    "title": "Browserモニタリング",
    "description": "ブラウザーモニタリング(Browser Monitoring)は、ブラウザーアプリケーションのページロード時間、サーバーレスポンス時間、リソース読み込み時間、ブラウザーエラーなど、様々な性能指標を収集・分析します。",
    "keywords": [
      "Browserモニタリング"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "rumsSidebar",
  "next": {
    "title": "ブラウザー互換性",
    "permalink": "/ja/browser/browser-compatibility"
  }
};
const assets = {

};



const toc = [{
  "value": "ブラウザーモニタリング、なぜ必要なのですか？",
  "id": "ブラウザーモニタリングなぜ必要なのですか",
  "level": 2
}, {
  "value": "主な機能",
  "id": "主な機能",
  "level": 2
}, {
  "value": "ページロード性能情報提供",
  "id": "ページロード性能情報提供",
  "level": 3
}, {
  "value": "AJAX性能情報提供",
  "id": "ajax性能情報提供",
  "level": 3
}, {
  "value": "ウェブページリソース情報の提供",
  "id": "ウェブページリソース情報の提供",
  "level": 3
}, {
  "value": "ブラウザーエラー情報提供",
  "id": "ブラウザーエラー情報提供",
  "level": 3
}, {
  "value": "コアウェブバイタル情報提供",
  "id": "コアウェブバイタル情報提供",
  "level": 3
}, {
  "value": "ユーザー接続環境分析",
  "id": "ユーザー接続環境分析",
  "level": 3
}, {
  "value": "ブラウザーモニタリングを開始する",
  "id": "ブラウザーモニタリングを開始する",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
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
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "ブラウザーモニタリング"
      }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Browser Monitoring"
      }), ")は、ブラウザーアプリケーションのページロード時間、サーバーレスポンス時間、リソース読み込み時間、ブラウザーエラーなど、様々な性能指標を収集・分析します。 収集、分析したデータを使用して、ブラウザーアプリケーションのボトルネックや性能問題を特定して最適化できます。 また、ブラウザーごとに性能の違いを特定することができ、最高のユーザー体験を提供できるデータを提供します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ブラウザーモニタリングなぜ必要なのですか",
        children: "ブラウザーモニタリング、なぜ必要なのですか？"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "クラウドとMSA時代の複雑なサーバー環境におけるブラウザーアプリケーションのレスポンス時間の最適化"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "クラウド、MSAなどの登場に伴い、サーバー環境がさらに複雑になっています。 このように複雑になった環境では、個々のサーバーの性能指標だけでは、ブラウザーアプリケーションのレスポンス時間が遅れる原因を特定することは困難です。 そのため、サーバーとクライアント間のネットワーク状況やブラウザーの読み込み時間などの要因を考慮する必要があります。 また、レスポンス時間に影響を与えるブラウザーのリクエストデータのサイズやレスポンスサイクルなどが関連する要因も考慮する必要があります。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["エンドユーザーのレスポンス時間およびユーザー体験を最適化するためには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ブラウザーモニタリング"
            }), "が必要です。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "エンドユーザー環境で発生する予測不能なエラーに対する迅速な対応"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "開発、修正、配信が頻繁に発生するCI/CDが導入することで、実際のユーザーに発生するエラーは配信前のテストだけで予防することができません。 実際のユーザーがウェブページを使用して発生するエラーについて、ユーザーのデバイスやブラウザーの種類、ネットワークの状態などによって様々なエラーが発生する可能性があります。"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ブラウザーモニタリング"
            }), "は、実際のユーザーに発生するエラーをモニタリングし、それらを防止または最小限に抑える技術的な方法を適用する必要があります。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "様々なブラウザーとデバイスで最適化されたユーザー体験を提供するための統計データの提供"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ブラウザーの種類とデバイスが多様になるにつれて、実際のユーザーが経験するエラーをモニタリングする必要があります。 例えば、特定のブラウザーまたはデバイスのみ発生するエラーを確認できます。 これにより、ユーザー体験を向上させ、より良いサービスを提供できます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "SPA環境でのブラウザーアプリケーションの性能分析と最適化"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["ウェブアプリケーションでは、SPA(Single Page Application)でブラウザーのウェブページを実装します。 以前は、ウェブページのすべての要素がサーバーでレンダリングされていましたが、今では、ブラウザーでページをレンダリングし、必要なデータのみサーバーから読み込んで使用します。 このようにウェブアプリケーションが複雑になり、サーバーの管理だけで性能が速いか遅いかを判断することはできません。 したがって、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ブラウザーモニタリング"
            }), "を使用してブラウザーアプリケーションの問題を見つけ、最適化を実行する必要があります。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "**1st Partyと3rd Partyリソースの総合的なレスポンス時間測定及び最適化によるユーザー全体性能の改善 **"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ウェブサービスのユーザーの性能は、社内で直接運用する1st partyと外部で運用する3rd partyのレスポンス時間を総合的に測定しなければなりません。 3rd partyリソースのレスポンス時間が遅れるだけでも、全体レスポンス時間が遅れる可能性があります。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "主な機能",
        children: "主な機能"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ブラウザモニタリング"
        }), "は、エンドユーザーのウェブサイト使用、エンドユーザーの操作性、エンドユーザーの環境をモニタリングします。 次の主な機能を提供します。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ページロード性能情報提供",
        children: "ページロード性能情報提供"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageload-timeline.png",
        desc: "Page load timeline"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-pageload-details.png",
        desc: "Page load details"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ブラウザがウェブページをどれだけ迅速に読み込むかをモニタリングします。 ユーザーは迅速に読み込まれるWebページを好むため、ページロード性能情報を通じて開発者はWebページの性能を最適化できます。 ページロード性能情報は、ブラウザーがページを読み込むのにかかった時間、ページ要素の読み込み時間、サーバーレスポンス時間などを提供します。 この情報により、ウェブページの性能を向上する方法を見つけることができます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ajax性能情報提供",
        children: "AJAX性能情報提供"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-ajax-hitmap.png",
        desc: "AJAX hitmap"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["AJAXを通じてサーバーとのデータをやり取りする時の性能情報をモニタリングします。 AJAXは、ウェブページがサーバーと非同期にデータを交換し、ページを更新しなくてもブラウザーアプリケーションをアップデートする技術です。 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ブラウザーモニタリング"
        }), "は、AJAXリクエストとレスポンス時間の測定、サーバーレスポンス時間の分析、ネットワーク待機時間など、さまざまなデータを収集します。 収集データは、ブラウザーアプリケーションの性能向上とユーザー体験の改善に役立ちます。"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ウェブページリソース情報の提供",
        children: "ウェブページリソース情報の提供"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-page-resource-list.png",
        desc: "Web page resource list"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ブラウザーがサーバーからダウンロードするリソースは、ページロード性能に大きな影響を与えます。 リソース一覧では、読み込み速度が遅いか、ファイルサイズが大きいリソースを迅速に把握することができます。 これらの情報を使用して、ウェブページの性能を向上させ、ユーザー体験を改善するために活用できます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ブラウザーエラー情報提供",
        children: "ブラウザーエラー情報提供"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-error-info.png",
        desc: "Browser error information"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザーがウェブサイトを使用する際に発生するブラウザーエラー情報を収集します。 この情報により、開発者はユーザーがウェブサイトの使用中に経験する問題を特定し、迅速に対応できます。 ユーザー体験を改善し、ウェブサイトの安定性を高めることができます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "コアウェブバイタル情報提供",
        children: "コアウェブバイタル情報提供"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "rum-core-web-vitals.png",
        desc: "Core web vitals"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "コアウェブバイタルは、グーグルで定義したウェブページの性能に対する重要な指標で、ページロード時間とレスポンス時間、レンダリング時間、ユーザー相互作用時間などがあります。 これらの情報を収集して分析することで、ウェブサイトを露出するのに役立ちます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "ユーザー接続環境分析",
        children: "ユーザー接続環境分析"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "browser-user-env.png",
        desc: "User environments"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "ユーザーのデバイス情報やブラウザー情報、オペレーティング システム情報、地域情報など、様々なユーザーの接続環境を分析します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "特定のデバイスで問題が発生した場合は、そのデバイスの情報を分析して問題を解決できます。 また、特定の地域でウェブアプリケーションが遅く動作する場合は、その地域の情報を把握して最適化を行うことができます。 ユーザーが使用するブラウザーやOSなどを把握し、ウェブアプリケーションの互換性問題を解決するために必要な情報を提供できます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "ブラウザーモニタリングを開始する",
        children: "ブラウザーモニタリングを開始する"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["次の手順に従って", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "ブラウザーモニタリング"
        }), "を開始できます。"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["WhaTapのアカウントがない場合は ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://www.whatap.io/ja/signup/",
              children: "会員登録"
            }), "を進めてください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ブラウザーの互換性と事前設定をチェックしてください。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "に移動し、ブラウザープロジェクトを作成してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "ブラウザーエージェントを適用してください。"
          }), "\n"]
        }), "\n"]
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