"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[65150],{

/***/ 39303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ billing_contentTitle),
  "default": () => (/* binding */ billing_MDXContent),
  frontMatter: () => (/* binding */ billing_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ billing_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_billing-credit-card-note.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsx)(_components.admonition, {
    type: "note",
    children: (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)("span", {
            class: "vslow",
            children: "*"
          }), "表示は必須項目です。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WhaTapのサービス料金は、使用した分だけ翌月に請求され、登録したクレジットカードで毎月25日に決済されます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["複数のメールで請求書を受信する場合は、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "invoice_cc",
            className: "uitext"
          }), "項目にコンマ(,)で区切って複数のメールを入力します。 例：", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:a@whatap.io",
            children: "a@whatap.io"
          }), ",", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:b@whatap.io",
            children: "b@whatap.io"
          }), ",", (0,jsx_runtime.jsx)(_components.a, {
            href: "mailto:c@whatap.io",
            children: "c@whatap.io"
          })]
        }), "\n"]
      }), "\n"]
    })
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/management/billing.mdx


const billing_frontMatter = {
	id: 'billing',
	title: '課金',
	description: 'WhaTapモニタリングサービスを有料に切り替えて使用する方法を紹介します。',
	toc_max_heading_level: 3,
	tags: [
		'管理',
		'課金'
	]
};
const billing_contentTitle = undefined;
const metadata = {
  "id": "management/billing",
  "title": "課金",
  "description": "WhaTapモニタリングサービスを有料に切り替えて使用する方法を紹介します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/management/billing.mdx",
  "sourceDirName": "management",
  "slug": "/management/billing",
  "permalink": "/ja/management/billing",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/management/billing.mdx",
  "tags": [
    {
      "inline": true,
      "label": "管理",
      "permalink": "/ja/tags/管理"
    },
    {
      "inline": true,
      "label": "課金",
      "permalink": "/ja/tags/課金"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "billing",
    "title": "課金",
    "description": "WhaTapモニタリングサービスを有料に切り替えて使用する方法を紹介します。",
    "toc_max_heading_level": 3,
    "tags": [
      "管理",
      "課金"
    ]
  },
  "sidebar": "manageSidebar",
  "previous": {
    "title": "リアルタイム通知一覧",
    "permalink": "/ja/notification/rt-notification"
  },
  "next": {
    "title": "メンテナンス計画",
    "permalink": "/ja/management/maintenance"
  }
};
const assets = {

};




const billing_toc = [{
  "value": "決済情報の登録",
  "id": "register-pay",
  "level": 2
}, {
  "value": "決済手段の登録",
  "id": "決済手段の登録",
  "level": 3
}, {
  "value": "クレジットカード(Nicepay)",
  "id": "payment_type_card_iamport",
  "level": 3
}, ...toc, {
  "value": "クレジットカード(Stripe)",
  "id": "payment_type_card_stripe",
  "level": 3
}, ...toc, {
  "value": "請求書発行",
  "id": "payment_type_banktransfer",
  "level": 3
}, {
  "value": "請求書の発行",
  "id": "payment_type_banktransfer_abroad",
  "level": 3
}, {
  "value": "基本情報を修正する",
  "id": "基本情報を修正する",
  "level": 2
}, {
  "value": "決済情報を修正する",
  "id": "決済情報を修正する",
  "level": 2
}, {
  "value": "決済手段を変更する",
  "id": "決済手段を変更する",
  "level": 3
}, {
  "value": "税金計算書の受信メールアドレスの修正",
  "id": "editemail-tax",
  "level": 3
}, {
  "value": "請求書の受信情報を修正する",
  "id": "editemail",
  "level": 2
}, {
  "value": "プロジェクト有料転換",
  "id": "project-subscription",
  "level": 2
}, {
  "value": "請求及び納付履歴",
  "id": "historybilling",
  "level": 2
}, {
  "value": "前納金の確認",
  "id": "checkpaidprice",
  "level": 2
}, {
  "value": "請求書プレビュー",
  "id": "preview-estimate",
  "level": 2
}, {
  "value": "プロジェクト、製品をまとめて表示する",
  "id": "viewcategory",
  "level": 3
}, {
  "value": "プロジェクト基準",
  "id": "プロジェクト基準",
  "level": 4
}, {
  "value": "サービス基準",
  "id": "サービス基準",
  "level": 4
}, {
  "value": "使用量プレビュー",
  "id": "billpreview",
  "level": 3
}, {
  "value": "使用量",
  "id": "usage",
  "level": 2
}, {
  "value": "プロモーションコードの登録",
  "id": "promotioncode",
  "level": 2
}, {
  "value": "WhaTapモニタリングサービスの利用料金の計算方法",
  "id": "countbilling",
  "level": 2
}];
function billing_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang, LinkImage, UI} = _components;
  if (!Cmdname) billing_missingMdxReference("Cmdname", true);
  if (!ImgLang) billing_missingMdxReference("ImgLang", true);
  if (!LinkImage) billing_missingMdxReference("LinkImage", true);
  if (!UI) billing_missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "WhaTap監視サービスの無料試用期間を過ぎた場合、またはサービスの無料利用基準を超えた場合は、決済情報を登録し、有料サービスに切り替える必要があります。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "register-pay",
        children: "決済情報の登録"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["決済情報は、請求通貨の種類によって提供する方法が異なります。 決済情報を登録するユーザーは、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), "権限を所有する必要があります。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "決済を進める前に、次の事項を事前に準備します。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "KRW"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_card_iamport",
                className: "uitext"
              }), ": 支払うカード番号と有効期限"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer",
                className: "uitext"
              }), ": 営業許可証、税金計算書の受信メール"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "JPY"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USD"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_card_stripe",
                className: "uitext"
              }), ": 支払うカード番号と有効期限"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer_abroad",
                className: "uitext"
              }), ": 請求書受信メール"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "billing",
            className: "b600"
          }), "権限の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
            href: "../project/project-structure#project-auth",
            children: "次の文書"
          }), "を参照してください。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "決済手段の登録",
        children: "決済手段の登録"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "決済手段を初めて登録する場合は、次のステップを実行します。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "で", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing",
              className: "b600"
            }), "権限を持つアカウントでログインします。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ホーム画面の右上のプロファイルアイコンを選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドロップダウンメニューが表示されたら", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "を選択します。"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-select-my-usage.png",
            desc: "利用状況"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), "セクションで", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["詳細項目を順番に設定します。 ", (0,jsx_runtime.jsx)("span", {
              class: "vslow",
              children: "*"
            }), "表示は必須項目です。"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-information.png",
            desc: "決済情報"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "項目でご希望の決済手段を登録します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#payment_type_card_iamport",
                children: (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_card_iamport",
                  className: "uitext"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#payment_type_banktransfer",
                children: (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#payment_type_card_stripe",
                children: (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_card_stripe",
                  className: "uitext"
                })
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: (0,jsx_runtime.jsx)(_components.a, {
                href: "#payment_type_banktransfer_abroad",
                children: (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                })
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["対応する決済通貨は", (0,jsx_runtime.jsx)(UI, {
            children: "KRW"
          }), "、", (0,jsx_runtime.jsx)(UI, {
            children: "JPY"
          }), "、", (0,jsx_runtime.jsx)(UI, {
            children: "USD"
          }), "です。 変更した通貨によって", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "payment_method",
            className: "uitext"
          }), "が変更されます。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_iamport",
        children: "クレジットカード(Nicepay)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), "項目で", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_iamport",
          className: "uitext"
        }), "を選択したら、次のステップを実行します。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit.png",
        desc: "クレジットカード"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "画面が表示されるとクレジットカードのカード番号、有効期限、パスワードの最初の2桁の数字を順番に入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "card_type",
              className: "uitext"
            }), "項目で", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "corporation",
              className: "uitext"
            }), "または", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "individual",
              className: "uitext"
            }), "を選択してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "corporation",
                className: "uitext"
              }), "：法人カードで、カードに社名が入力されています。 組織識別番号と会社名を入力する必要があります。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "individual",
                className: "uitext"
              }), "：個人カードで、カードにカード所有者の名前が入力されています。 会社から支給された場合でも、個人名が明記されていれば個人カードです。 生年月日を8桁で入力してください。"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "チェックされた約款情報を確認してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カード情報を全て入力したら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。 以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["請求書を受信する担当者情報を順番に入力し", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_stripe",
        children: "クレジットカード(Stripe)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), "項目で", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_stripe",
          className: "uitext"
        }), "を選択したら、次のステップを実行します。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit-stripe.png",
        desc: "クレジットカード"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "画面が表示されるとクレジットカード所有者の名前とクレジットカード番号、有効期限、CVC番号を順番に入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "チェックされた約款情報を確認してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["カード情報を全て入力したら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。 以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["請求書を受信する担当者情報を順番に入力し", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer",
        children: "請求書発行"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), "項目で", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer",
          className: "uitext"
        }), "を選択したら、次のステップを実行します。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billin-add-payment-tax.png",
        desc: "請求書発行"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "画面が表示されたら、計算書の発行情報を入力します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "営業許可証に記載されいるの代表者名、事業者登録番号、電子税金計算書発行メールなどを順に入力します。"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "請求書の発行日は次のとおりです。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.25",
                    className: "uitext"
                  }), "：毎月25日に請求書を発行します。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.-1",
                    className: "uitext"
                  }), "：毎月最終日を基準に請求書を発行します。"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.0",
                    className: "uitext"
                  }), "：利用月を基準として、翌月1日に請求書を発行します。"]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "必要に応じて、業種と業態を入力してください。"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["計算書の発行情報をすべて入力したら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。 以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["請求書を受信する担当者情報を順番に入力し", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンをクリックします。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["計算書の発行情報を完了すると、請求書の受信担当者にWhaTap Labsの営業許可証と通帳のコピーをメールで自動的に送信します。 メールの内容を確認した上で、", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:billing@whatap.io",
          children: "billing@whatap.io"
        }), "で営業許可証を返信してください。"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["組織識別番号を入力し", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06501",
                className: "uitext"
              }), "ボタンをクリックして認証を進めてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["複数のメールで請求書を受信する場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), "項目にコンマ(,)で区切って複数のメールを入力します。 例：", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:a@whatap.io",
                children: "a@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:b@whatap.io",
                children: "b@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:c@whatap.io",
                children: "c@whatap.io"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["税金請求書の再発行をご希望の場合は、", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:billing@whatap.io",
                children: "billing@whatap.io"
              }), "までお問い合わせください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer_abroad",
        children: "請求書の発行"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), "項目で", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer_abroad",
          className: "uitext"
        }), "を選択したら、次のステップを実行します。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-tax-abroad.png",
        desc: "請求書の発行"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "画面が表示されたら、請求書の送信情報を入力します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06687",
              className: "uitext"
            }), "と", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), "項目を確認してください。 必要に応じて変更できます。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), "項目に受信するメールアドレスを追加できます。 2つ以上入力する場合は、コンマ(,)を区切り文字として使用してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "company_address",
              className: "uitext"
            }), "項目を入力してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["請求書の発送情報をすべて入力したら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。 以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["すべてのプロセスが完了したら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "請求書は毎月25日に発送します。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["複数のメールで請求書を受信する場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), "項目にコンマ(,)で区切って複数のメールを入力します。 例：", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:a@whatap.io",
                children: "a@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:b@whatap.io",
                children: "b@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:c@whatap.io",
                children: "c@whatap.io"
              })]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "基本情報を修正する",
        children: "基本情報を修正する"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["決済情報を登録する際に設定した", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06080",
          className: "uitext"
        }), "および", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "phone",
          className: "uitext"
        }), "、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06768",
          className: "uitext"
        }), " などの基本情報を修正できます。"]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ホーム画面の右上のプロファイルアイコンを選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドロップダウンメニューが表示されたら", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), "メニューの", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08029",
              className: "uitext"
            }), "セクションで、", (0,jsx_runtime.jsx)(_components.img, {
              alt: "修正アイコン",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["希望する項目を修正して", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-basic.png",
            desc: "基本情報"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "*"
              }), "表示は必須項目です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["修正事項を保存しない場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "ボタンを選択します。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "決済情報を修正する",
        children: "決済情報を修正する"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "決済手段を変更する",
        children: "決済手段を変更する"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "登録した決済手段または請求通貨を変更できます。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ホーム画面の右上のプロファイルアイコンを選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドロップダウンメニューが表示されたら", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), "メニューの", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), "セッションで", (0,jsx_runtime.jsx)(_components.img, {
              alt: "修正アイオン",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_currency",
              className: "uitext"
            }), "または", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "項目を変更します。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "invoice_currency",
                  className: "uitext"
                }), "項目を変更すると、決済手段のオプションが変更されます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["登録済みのクレジットカードを、他のカード情報に変更するには", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "BTN08031",
                  className: "uitext"
                }), "ボタンを選択します。"]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-credit.png",
                desc: "再登録"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                }), "または", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), "情報を変更するには、", (0,jsx_runtime.jsx)(_components.img, {
                  alt: "修正アイコン",
                  src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
                  width: "24",
                  height: "24"
                }), "ボタンを選択します。"]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-tax.png",
                desc: "修正"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["決済手段を、クレジットカードで", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                }), "または", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), "に選択できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), "画面が表示されたら、必要な情報を設定して", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。 以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["決済情報の変更メッセージが表示されたら、内容を確認して", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "*"
              }), "表示は必須項目です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "決済手段を変更すると、以前に入力した情報は保存されません。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["修正事項を保存しない場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "ボタンを選択します。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "editemail-tax",
        children: "税金計算書の受信メールアドレスの修正"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "税金計算書の受信メールアドレスを変更するには、次の手順を実行します。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ホーム画面の右上のプロファイルアイコンを選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドロップダウンメニューが表示されたら", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), "メニューの", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), "セッションで", (0,jsx_runtime.jsx)(_components.img, {
              alt: "修正アイオン",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "の", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_type_banktransfer",
              className: "uitext"
            }), "右側にある", (0,jsx_runtime.jsx)(_components.img, {
              alt: "修正アイコン",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), "画面が表示されたら、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "tax_bill_recipient_email",
              className: "uitext"
            }), "項目を修正します。"]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-edit-mail-tax.png",
            desc: "課金情報修正"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "ボタンを選択すると、以前の画面に戻ります。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: "税金計算書の受信メールの場合、1つの受信者メールアドレスを登録できます。"
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "editemail",
        children: "請求書の受信情報を修正する"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "連絡先を変更し、請求先を変更する場合は、次の手順を実行します。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "ホーム画面の右上のプロファイルアイコンを選択してください。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["ドロップダウンメニューが表示されたら", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), "メニューの", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_reception_info",
              className: "uitext"
            }), "セッションで", (0,jsx_runtime.jsx)(_components.img, {
              alt: "修正アイオン",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["連絡先情報(", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_name",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), ")を順番に修正します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["必要な情報をすべて入力した場合は、", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "ボタンを選択します。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "*"
              }), "表示は必須項目です。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["複数のメールで請求書を受信する場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), "項目にコンマ(,)で区切って複数のメールを入力します。 例：", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:a@whatap.io",
                children: "a@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:b@whatap.io",
                children: "b@whatap.io"
              }), ",", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:c@whatap.io",
                children: "c@whatap.io"
              })]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["修正事項を保存しない場合は、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "ボタンを選択します。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "project-subscription",
        children: "プロジェクト有料転換"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["決済情報の登録が完了したら、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "projectSubscription",
          className: "uitext"
        }), "メニューに移動します。 ユーザーが登録したプロジェクト全体の一覧を確認できます。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-pay-list.png",
        desc: "プロジェクト有料転換"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["プロジェクトステータスが無料、トライアル、使用制限の場合は", (0,jsx_runtime.jsx)(LinkImage, {
              img: "number-02.png",
              desc: "指示線2"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), "ボタンがアクティブになります。 プロジェクトを有料に切り替えて使用する場合は、次の操作を行ってください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["各プロジェクト項目の", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "subscribe",
                  className: "uitext"
                }), "ボタンをクリックすると、個別に有料化することができます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "CNT06012",
                  className: "uitext"
                }), "状態ではないプロジェクト全体を一括して有料プランに切り替えることができます。 各プロジェクト項目の左側のチェックボックスをクリックし", (0,jsx_runtime.jsx)(LinkImage, {
                  img: "number-01.png",
                  desc: "지시선 1"
                }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "tooltip_limited",
                  className: "uitext"
                }), "ボタンを選択してください。 複数のプロジェクトを選択できます。"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), "ウィンドウが表示されたら、プロジェクトリストを確認して", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN06053",
              className: "uitext"
            }), "ボタンを選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["削除プロジェクトを一覧に含めて確認するには", (0,jsx_runtime.jsx)(_components.img, {
              alt: "指示線1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), (0,jsx_runtime.jsx)(Cmdname, {
              sid: "include_project_deleted",
              className: "uitext"
            }), "トグルボタンを選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "決済権限"
            }), "のないすべての有料プロジェクトのリストを確認するには、", (0,jsx_runtime.jsx)(_components.img, {
              alt: "指示線1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "DSC07606",
              className: "uitext"
            }), "トグルボタンを選択してください。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["プロジェクトの一覧をCSVファイルとしてダウンロードするには", (0,jsx_runtime.jsx)(_components.img, {
              alt: "指示線1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), (0,jsx_runtime.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), "ボタンをクリックしてください。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "決済権限"
            }), "は、有料プランへの切り替え、支払い方法の登録、請求書の受取機能です。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["プロジェクトが有料サービスに切り替えてから 7 日未満の場合は、有料切替をキャンセルできます。 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "cancel_subscription",
              className: "uitext"
            }), "ボタンを選択してください。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["有料転換時点から7日以降のプロジェクトを削除できる", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "delete_project",
              className: "uitext"
            }), "ボタンを提供します。"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "historybilling",
        children: "請求及び納付履歴"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "paymentHistory",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "納付履歴、未納金、請求履歴を確認できます。 請求書は、決済情報に入力した請求先のメールアドレスでも確認できます。"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "usage-estimate-history.png",
        desc: "請求及び納付履歴"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["一覧で一番右の", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "invoice",
          className: "uitext"
        }), "コラムで", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "detail",
          className: "uitext"
        }), "ボタンをクリックすると詳細を確認することが。"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "WhaTapモニタリングサービスは時間単位で課金します。 毎月の基準時間は、対象月の日数✕24時間で計算されます。 以下は、月単位の時間を計算したものです。"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "28日：28✕24 = 672時間"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "29日：29✕24 = 696時間"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "30日：30✕24 = 720時間"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "31日：31✕24 = 744時間"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "checkpaidprice",
        children: "前納金の確認"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "balance",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "お支払状況から、お支払頂いた金額や引き落とし状況を確認いただけます。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-estimate",
        children: "請求書プレビュー"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billingPreview",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["割引／プロモーションを適用した利用料金及び", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "未払金"
        }), "が確認できます。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "viewcategory",
        children: "プロジェクト、製品をまとめて表示する"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["請求書の内容をプロジェクト、製品別にグループ化して、合計時間、平均費用、費用合計情報などが確認できます。 請求履歴テーブルの上にある", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), "または", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), "ボタンを選択してください。 テーブルの一覧をプロジェクトまたは製品名でグループ化します。"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["グループ化された", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), "または", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), "を基準に時間合計、平均費用、費用合計情報などの詳細情報を確認するには、各項目の左側に", (0,jsx_runtime.jsx)(_components.img, {
          alt: "拡張アイコン",
          src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "ボタンをクリックしてください。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "プロジェクト基準",
        children: "プロジェクト基準"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01.png",
        desc: "グルーピング１"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "サービス基準",
        children: "サービス基準"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-category.png",
        desc: "グルーピング２"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "billpreview",
        children: "使用量プレビュー"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-preview.png",
        desc: "課金集計量"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["請求履歴テーブルで ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metered_unit",
          className: "uitext"
        }), " カラム項目を選択すると、使用量を確認することができます。 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metering_information",
          className: "uitext"
        }), " ウィンドウが表示されると ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "open_all",
          className: "uitext"
        }), " ボタンを選択するか、照会したい日付を選択してください。"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "商品を基準に請求履歴をソートした状態で複数の商品がまとめられている場合、使用量プレビューは提供しないことがあります。"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "usage",
        children: "使用量"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "usage",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "プロジェクト別の使用量を確認できます。 プロジェクト別の月別詳細使用量を確認するには、左側のプロジェクトリストでプロジェクトを選択してください。"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage.png",
        desc: "使用量"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "数字1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "をクリックし、使用状況を確認する期間を選択します。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["画面左側の", (0,jsx_runtime.jsx)(_components.img, {
              alt: "数字2",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "プロジェクトリストでプロジェクトを選択してください。 画面の右上にあるテキスト入力欄から必要なプロジェクトを検索することができます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "数字3",
              src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "領域で選択したプロジェクトの月間使用量に関するサマリー情報が確認できます。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["日別の詳細使用量を確認するには、", (0,jsx_runtime.jsx)(_components.img, {
              alt: "数字4",
              src: (__webpack_require__(3774)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "日別使用量一覧で", (0,jsx_runtime.jsx)(_components.img, {
              alt: "その他のアイコン",
              src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), "ボタンを選択してください。"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage-details.png",
        desc: "使用量詳細"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "月間使用量のサマリー情報および詳細な使用量情報は、プロジェクトの製品種類によって異なる場合があります。"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["使用量情報は、課金方式に基づいて測定されます。 課金方式の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://www.whatap.io/ko/pricing/",
                children: "次のリンク"
              }), "を参照してください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "promotioncode",
        children: "プロモーションコードの登録"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_information",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "promotion_info",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["プロモーションコードを登録するには、決済情報を登録してください 決済情報登録の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "#register-pay",
          children: "次の文書"
        }), "を参照してください。"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "promotion_code_1.png",
        desc: "プロモーションコード"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "promotion_code",
          className: "uitext"
        }), "テキストボックスに受け取ったコードを入力し、", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "BTN07117",
          className: "uitext"
        }), "ボタンを選択してください。 コードが正常に登録されている場合は、適用されたコード情報を確認できます。"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "countbilling",
        children: "WhaTapモニタリングサービスの利用料金の計算方法"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTapサービスは、後払い決済方法を導入しています。 毎月5営業日以内に前月利用金額の請求書を", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), "権限のあるアカウントのメールで受信できます。 前月の利用期間は、1日から末日までの利用分です。 請求書は、アカウントに登録されている有料サービスのリストに基づいてアカウントごとに作成します。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "有料サービスを月の途中から加入した場合、利用した期間を日割り計算して請求します。"
      })]
    })]
  });
}
function billing_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(billing_createMdxContent, {
      ...props
    })
  }) : billing_createMdxContent(props);
}
function billing_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 85663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1lZGl0PC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY4LjAwMDAwMCwgLTEzOTUuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+DQogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWVkaXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 67490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNHB4O2hlaWdodDogMjRweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1jYXJldC1yaWdodDwvdGl0bGU+IC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMjQ0LjAwMDAwMCkiIGZpbGw9IiM5NTk1OTUiPg0KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtY2FyZXQtcmlnaHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDEyNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC02LjAwMDAwMCkgIiBkPSJNLTIgMiA0IDEwIDEwIDJ6Ij48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

/***/ }),

/***/ 29859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Yzg0YmZlYjgtYTgzZS00NTU3LWFiNGYtODQ3ZTFjMGQ5MjNlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTJEQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTJDQjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZlMmZhMDktMjhmZS00ZGUxLTg3NGQtNDQwYjgxNTBmMzI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmM4NGJmZWI4LWE4M2UtNDU1Ny1hYjRmLTg0N2UxYzBkOTIzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ppgo9sAAAAJPSURBVHjazJhNSBtBGIYnNiejFDwIzUEbKh5U0FsPWqOFSlTw5EFEpbeSgxdRUZFSi4rgMZS0p2KrICKiWIN6kPgH7cnfgAcl6EEhCErbQKGV9v3MDG6XxMwmu5t94cGom+Fhdubbb9YWXWZa4gQNoBqUgQKQB/6CK3AKQmAdBMCFlsFtkjK1oBe8AA8kx74BNPo4l0uarCT/LwIrYA14NIgwfm0jCIIl8CQdmZdgF9Sx9EO3dg+0a5WxgWHwETiYfqGxPoHXiS6wx/nbKOhjxmWI/3ybbGY6DBZRCrXeJ0OL1c/My3vgSiTzDmSbKJMLfPFknmvZNdFfjM2hcpRjvzk8MVIMbf1n6gXcLfPNr6it/nnGZjd1naEesClmxik7K+eXuotQ6kG+mJlG2cpajCfR5/7Y5619xj4s6SJj50IT9MEt+60yVwwRnWQoNSRDt6mUZT4lYs0UWkDGJWQeWkAmV6aFMDUkc20Bjx9C5swCMmEhc2ABmZCQ2bCATFDIUOn6k0GR37xxvy3FdJxY5X1q4puKq3yzd78fqVZal6IZ6GxG4XgkLUOTEVEeVdxiqhLlEEvsqVdu9G/+/x8bSVIFtpV1Zl1MlclZFCLqQxy1nTsgxySR76BCbGt1BT4GXpNE6Dj8SikS73EwqThKGJkBMC1ziHtjoBDNyCAY03K8JaE28FPnNdICRlI5a0/xBRbQadfQWDPpvIU44T0yvY/5orFSU2VdAJWgSb1Y03k/I5LPK7Wbt6uPRWPE24Awf+gFed2KGPGyyJT8E2AAc7l5zWfLLegAAAAASUVORK5CYII=");

/***/ }),

/***/ 93000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NjVlMjMwYmYtMTI4OS00ODUyLWE3NjYtZDU2NzhlZjdkZWE5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA3QTM1RTI5QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3QTM1RTI4QjU2QjExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWUyNmRlM2EtZTU1MS00YTNhLTg5ODUtNTliOTQzOTNkMTg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZTIzMGJmLTEyODktNDg1Mi1hNzY2LWQ1Njc4ZWY3ZGVhOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plwn9wAAAALTSURBVHjaxJhLSFRRGMe/sYLADDdJUlST7YapaNXTsVWa0QujqMCIoCg0CKPsaQ8rGpIwIiIX0TtyIT00KQiNaKJNaLbSLFoU2cKygWAW9f+653OuecVz7r1z+8NvHtx7zvznnO9853w3lHxMJpoESkAMREAYZKtrSdALOkE7aAHfTDoPaZpZCPaCUjBOs+8UeAjOgoROg6xRrs8ED8ALsNrACKl714CXoAlM92JmI3gDVpB3rQIdYJ0bM0fATZBD/mkiuAsOmpg5Co5RZhQCJ8F+HTObQQ1lXqecpsxuZha4RMGIR6hBpQZHM/Vggk5Pff1EV5FFymuRZIot9lwgevLaOIbOO+WZQtCm0wP/YNVFou4vztdPbyOqLDMytViljsGR2afTKtGFZHM4bSQWJdpear2LqhuMR6jKPk35YJlOq2gBUdkS6/P1aqLmOFFdhfXOIyJqSRiZ4ayeJ9PE3VzRbZn8hc2nh2h+ZHgczdhgu89szysH17JUvGgre/xwI3930FxPq6tIpinqx1rlkRHJVBooImam+WHm9tP056XzjJuHxUyuVyO9n61VNBiRC4y7yNE5QmgF9K669HdeZW7jh81892Jm5zlky850rKyNuepmQMx8dGukvpGo8bna2CZjh93qfqbFzFu3RuxxchmH0nC+azPvxEybVyNNJ5xzj4GeSQbm//MJjNEJVo4RmRqJk4IpRP0DQ++djQPJlhLtg/tU8HUsXrAwqRUsH61V66uhRlj/fhfxBqqpZjZiX9px+n+KO9VNXHQVB2yEy6CVTie9ClUVBqUfYPdIx85usCMgI785rCS/jFQd3MhgmWLXAXBHp26qUbVTpkbkEDhjUlEeB5vAT59jZD2odVNr3wJzwSMfjNwHc8A9L08helThX6g6TBkYSKmnD4tU4f/Br+czojyVi4psD4uk8OMpfQ+61H7HeasvEw+LAtEfAQYAv2+q6mxeFyYAAAAASUVORK5CYII=");

/***/ }),

/***/ 86865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

/***/ }),

/***/ 3774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg0QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjgzQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OWVmMWZkYmQtM2FiMS00MDBiLWEyYjAtZjU4ZGNmNjZkY2NiIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1YmQzMjc3LTMwYTUtNGRhYy1hMjkyLWM2ZTQ2MDBiMTc4YyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjAb6dMAAAJ4SURBVHjaYvy6g2HQABYS1YsBsRcQOwCxNhArADEfEP8H4s9AfB+IrwLxASDeDsSvSDGckciQsQXiMiD2IMEDv4F4GxB3AfExYjQwEZBXBuKtQHwIiH1IDElWIPYH4qNAvAmIFSlxTDQQX4BGC6XAF2pWGDmOaQTiJUDMQ8X0CUpbK4C4hhTHNAFxHY0yDCMQNwNxBTGOiQHiWjrk4jYgjsDnGBUgnkGnIgUUQjPREzVy7pgMxNykmnr/OQODTiKqGJHFBSgNTQRiP/SQcYCWISSDhnkU5zJrdMeUkmPSuoMMDGsOUxxlpciOkQRid1JN+PoDmP/nQ9jp3hQ5xgtazYAdAzKKmVQT5m5hYLjzAsL2tKDIMaywJAJyjB2puq8Aq8PKORC2vS4Dg6spxVHlAHOMLqk6u5ch2F1ZVMnq2jDHyJGbaMuBxZaOIlUcowhzjACxOl5/QCRaFQkGhswAqhWCvMQ0IVDA9A2IRFsPLOhEBRioCkAl8EcgFiSmpO1cgeAfuQTB2EDRZAjdl0u0Oz7DWnrngbQBMTnIPJPEsoj49vUpIDYHRdOVQdAWvwaLpkPQpgNeAMo1+HzK7UFWiMDAAVgCBrVx/w5gqPyB9iTAjnkGxDsH0DHbYF0aWNbuHUDHdGPrN+0gp/amEGyFdoEwmp05oLRHR4eAypZcXG3gO0CcRUfHZEC7wzh7B4uAuJ0ODgF1hZYR02+qgvZtaAXqcZnPhMfliVROQyCz4qCdRJL72guAWJ9KZdA2qFmLKRmFuAttnzqSUVKD1G6BNim9oWZRZXwGBqRA7W9Q0xdUXUFbibDmx3sgfog0WAQKjRekGA4QYAC/W4cAbCK1hAAAAABJRU5ErkJggg==");

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