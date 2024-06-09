"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[15336],{

/***/ 39106:
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
;// CONCATENATED MODULE: ./docs/common-items/_billing-credit-card-note.mdx


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
          }), " 표시는 필수 항목입니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "와탭의 서비스 요금은 사용한 만큼 익월 후불 청구되며, 입력한 신용카드로 매월 25일 결제됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다수의 이메일로 청구서를 받으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "invoice_cc",
            className: "uitext"
          }), " 항목에 쉼표(,)를 구분자로 여러 개의 이메일을 입력할 수 있습니다. 예시, ", (0,jsx_runtime.jsx)(_components.a, {
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


;// CONCATENATED MODULE: ./docs/management/billing.mdx


const billing_frontMatter = {
	id: 'billing',
	title: '결제',
	description: '와탭 모니터링 서비스를 유료 전환해 사용하는 방법을 소개합니다.',
	toc_max_heading_level: 3,
	tags: [
		'관리',
		'결제'
	]
};
const billing_contentTitle = undefined;
const metadata = {
  "id": "management/billing",
  "title": "결제",
  "description": "와탭 모니터링 서비스를 유료 전환해 사용하는 방법을 소개합니다.",
  "source": "@site/docs/management/billing.mdx",
  "sourceDirName": "management",
  "slug": "/management/billing",
  "permalink": "/whatap-docs/management/billing",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/management/billing.mdx",
  "tags": [
    {
      "label": "관리",
      "permalink": "/whatap-docs/tags/관리"
    },
    {
      "label": "결제",
      "permalink": "/whatap-docs/tags/결제"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "billing",
    "title": "결제",
    "description": "와탭 모니터링 서비스를 유료 전환해 사용하는 방법을 소개합니다.",
    "toc_max_heading_level": 3,
    "tags": [
      "관리",
      "결제"
    ]
  },
  "sidebar": "manageSidebar",
  "previous": {
    "title": "실시간 알림 목록",
    "permalink": "/whatap-docs/notification/rt-notification"
  },
  "next": {
    "title": "정비 계획",
    "permalink": "/whatap-docs/management/maintenance"
  }
};
const assets = {

};




const billing_toc = [{
  "value": "결제 정보 등록",
  "id": "register-pay",
  "level": 2
}, {
  "value": "결제 수단 등록하기",
  "id": "결제-수단-등록하기",
  "level": 3
}, {
  "value": "신용카드(나이스페이)",
  "id": "payment_type_card_iamport",
  "level": 3
}, ...toc, {
  "value": "신용카드 (Stripe)",
  "id": "payment_type_card_stripe",
  "level": 3
}, ...toc, {
  "value": "계산서 발행",
  "id": "payment_type_banktransfer",
  "level": 3
}, {
  "value": "청구서 발송",
  "id": "payment_type_banktransfer_abroad",
  "level": 3
}, {
  "value": "기본 정보 수정하기",
  "id": "기본-정보-수정하기",
  "level": 2
}, {
  "value": "결제 정보 수정하기",
  "id": "결제-정보-수정하기",
  "level": 2
}, {
  "value": "결제 수단 변경하기",
  "id": "결제-수단-변경하기",
  "level": 3
}, {
  "value": "청구서 수신 정보 수정하기",
  "id": "editemail",
  "level": 3
}, {
  "value": "세금계산서 수신 메일 주소 수정하기",
  "id": "editemail-tax",
  "level": 3
}, {
  "value": "프로젝트 유료 전환",
  "id": "project-subscription",
  "level": 2
}, {
  "value": "청구 및 납부 내역",
  "id": "historybilling",
  "level": 2
}, {
  "value": "선납금 확인하기",
  "id": "checkpaidprice",
  "level": 2
}, {
  "value": "청구서 미리보기",
  "id": "preview-estimate",
  "level": 2
}, {
  "value": "프로젝트, 상품별 묶어서 보기",
  "id": "viewcategory",
  "level": 3
}, {
  "value": "프로젝트 기준",
  "id": "프로젝트-기준",
  "level": 4
}, {
  "value": "상품 기준",
  "id": "상품-기준",
  "level": 4
}, {
  "value": "사용량 미리보기",
  "id": "billpreview",
  "level": 3
}, {
  "value": "사용량",
  "id": "usage",
  "level": 2
}, {
  "value": "프로모션 코드 등록하기",
  "id": "promotioncode",
  "level": 2
}, {
  "value": "와탭 상품의 이용 요금 계산 방식",
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
      children: "와탭 모니터링 서비스의 무료 이용 기간이 지났거나 서비스에 따른 무료 이용 기준을 초과한 상태에서 이용을 계속 원한다면 결제 정보를 등록하고 유료 전환해야 합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "register-pay",
        children: "결제 정보 등록"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["결제 정보는 청구 통화 종류에 따라 제공하는 방식이 다릅니다. 결제 정보를 등록하는 사용자는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), " 권한을 소유하고 있어야 합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "결제를 진행하기 전에 다음 사항을 미리 준비하세요."
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
              }), ": 지불할 카드 번호 및 유효 기간"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer",
                className: "uitext"
              }), ": 사업자 등록증, 세금계산서 수신 이메일"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "JYP"
            }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "USD"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_card_stripe",
                className: "uitext"
              }), ": 지불할 카드 번호 및 유효 기간"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer_abroad",
                className: "uitext"
              }), ": 청구서 수신 이메일"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "billing",
            className: "b600"
          }), " 권한에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../project/project-structure#project-auth",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "결제-수단-등록하기",
        children: "결제 수단 등록하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "결제 수단을 처음 등록한다면 다음 단계를 수행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing",
              className: "b600"
            }), " 권한을 가진 계정으로 로그인하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "홈 화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["드롭다운 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-select-my-usage.png",
            desc: "이용 내역"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["세부 항목을 차례로 설정하세요. ", (0,jsx_runtime.jsx)("span", {
              class: "vslow",
              children: "*"
            }), " 표시는 필수 항목입니다."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-information.png",
            desc: "결제 정보"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), " 항목에서 원하는 결제 수단을 등록하세요."]
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
          children: ["지원하는 결제 통화는 ", (0,jsx_runtime.jsx)(UI, {
            children: "KRW"
          }), ", ", (0,jsx_runtime.jsx)(UI, {
            children: "JPY"
          }), ", ", (0,jsx_runtime.jsx)(UI, {
            children: "USD"
          }), "입니다. 변경한 통화에 따라 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "payment_method",
            className: "uitext"
          }), "이 변경됩니다."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_iamport",
        children: "신용카드(나이스페이)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_iamport",
          className: "uitext"
        }), "를 선택했다면 다음 단계를 수행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit.png",
        desc: "신용카드"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " 창이 나타나면 신용카드의 카드 번호, 유효기간, 비밀번호 앞 2자리 숫자를 차례로 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "card_type",
              className: "uitext"
            }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "corporation",
              className: "uitext"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "individual",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "corporation",
                className: "uitext"
              }), ": 법인 카드로, 카드 실물에 회사명이 입력되어 있습니다. 사업자 등록 번호와 상호명을 입력해야 합니다."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "individual",
                className: "uitext"
              }), ": 개인 카드로, 카드 실물에 카드 소유주의 이름이 입력되어 있습니다. 회사로부터 지급 받은 경우에도 개인 이름이 명시되어 있으면 개인 카드입니다. 생년월일 8자리를 입력하세요."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "체크된 약관 정보를 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카드 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요. 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["청구서를 수신할 담당자 정보를 차례로 입력한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_stripe",
        children: "신용카드 (Stripe)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_stripe",
          className: "uitext"
        }), "를 선택했다면 다음 단계를 수행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit-stripe.png",
        desc: "신용카드"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " 창이 나타나면 신용카드 소유자 이름과 신용카드 번호, 유효 기간, CVC 번호를 차례로 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "체크된 약관 정보를 확인하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["카드 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요. 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["청구서를 수신할 담당자 정보를 차례로 입력한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer",
        children: "계산서 발행"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer",
          className: "uitext"
        }), "을 선택했다면 다음 단계를 수행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billin-add-payment-tax.png",
        desc: "계산서 발행"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " 창이 나타나면 계산서 발행 정보를 입력하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "사업자 등록증 상의 대표자 명, 사업자 등록 번호, 전자 세금계산서 발행 메일 등을 차례로 입력하세요."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "세금계산서 발행일은 기준은 다음과 같습니다."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.25",
                    className: "uitext"
                  }), ": 사용 월의 25일자로 청구서 발행합니다."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.-1",
                    className: "uitext"
                  }), ": 사용 월의 마지막 날짜로 청구서를 발행합니다."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.0",
                    className: "uitext"
                  }), ": 사용 월 기준 익월 초 청구서 발송 날자입니다."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "필요한 경우 종목과 업태를 입력하세요."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["계산서 발행 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요. 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["청구서를 수신할 담당자 정보를 차례로 입력한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["계산서 발행 정보를 완료하면 청구서 수신 담당자에게 와탭랩스의 사업자 등록증과 통장 사본을 메일로 자동 발송합니다. 메일 내용을 확인한 다음 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:billing@whatap.io",
          children: "billing@whatap.io"
        }), "로 사업자 등록증을 회신해 주세요."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사업자 등록 번호를 입력한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06501",
                className: "uitext"
              }), " 버튼을 선택해 인증을 진행하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["다수의 이메일로 청구서를 받으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), " 항목에 쉼표(,)를 구분자로 여러 개의 이메일을 입력할 수 있습니다. 예시, ", (0,jsx_runtime.jsx)(_components.a, {
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
              children: ["세금계산서 역발행을 원한다면 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:billing@whatap.io",
                children: "billing@whatap.io"
              }), "로 문의하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer_abroad",
        children: "청구서 발송"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), " 항목에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer_abroad",
          className: "uitext"
        }), "을 선택했다면 다음 단계를 수행하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-tax-abroad.png",
        desc: "청구서 발송"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " 창이 나타나면 청구서 발송 정보를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06687",
              className: "uitext"
            }), "과 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), " 항목을 확인하세요. 필요한 경우 수정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), " 항목에 함께 받을 이메일 주소를 추가할 수 있습니다. 2개 이상 입력할 경우 쉼표(,)를 구분자로 이용하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "company_address",
              className: "uitext"
            }), " 항목을 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["청구서 발송 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요. 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["모든 설정을 완료했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "청구서는 매월 25일에 발송합니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["다수의 이메일로 청구서를 받으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), " 항목에 쉼표(,)를 구분자로 여러 개의 이메일을 입력할 수 있습니다. 예시, ", (0,jsx_runtime.jsx)(_components.a, {
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
        id: "기본-정보-수정하기",
        children: "기본 정보 수정하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["결제 정보를 등록할 때 설정했던 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06080",
          className: "uitext"
        }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "phone",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06768",
          className: "uitext"
        }), " 등의 기본 정보를 수정할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "홈 화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["드롭다운 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08029",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "수정 아이콘",
              src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["원하는 항목을 수정한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-basic.png",
            desc: "기본 정보"
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
              }), " 표시는 필수 항목입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["수정 사항을 저장하지 않으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), " 버튼을 선택하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "결제-정보-수정하기",
        children: "결제 정보 수정하기"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "결제-수단-변경하기",
        children: "결제 수단 변경하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "등록한 결제 수단 또는 청구 통화를 변경할 수 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "홈 화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["드롭다운 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "수정 아이콘",
              src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_currency",
              className: "uitext"
            }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), " 항목을 변경하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "invoice_currency",
                  className: "uitext"
                }), " 항목을 변경하면 결제 수단 옵션이 변경됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["이미 등록한 신용카드를 다른 카드 정보로 변경하려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "BTN08031",
                  className: "uitext"
                }), " 버튼을 선택하세요."]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-credit.png",
                desc: "재등록"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), " 정보를 변경하려면 ", (0,jsx_runtime.jsx)(_components.img, {
                  alt: "수정 아이콘",
                  src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
                  width: "24",
                  height: "24"
                }), " 버튼을 선택하세요."]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-tax.png",
                desc: "수정"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["결제 수단을 신용카드에서 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), "으로 선택할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), " 창이 나타나면 필요한 정보를 설정한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요. 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["결제 정보 변경 메시지가 나타나면 내용을 확인한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하세요."]
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
              }), " 표시는 필수 항목입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "결제 수단을 변경하면 이전에 입력한 정보는 저장되지 않습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["수정 사항을 저장하지 않으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), " 버튼을 선택하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "editemail",
        children: "청구서 수신 정보 수정하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "담당자가 변경되어 청구서 수신인을 변경하려면 다음 단계를 수행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "홈 화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["드롭다운 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_reception_info",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "수정 아이콘",
              src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["담당자 정보(", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_name",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), ")를 차례로 수정하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["필요한 정보를 모두 입력했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
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
              }), " 표시는 필수 항목입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["다수의 이메일로 청구서를 받으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), " 항목에 쉼표(,)를 구분자로 여러 개의 이메일을 입력할 수 있습니다. 예시, ", (0,jsx_runtime.jsx)(_components.a, {
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
              children: ["수정 사항을 저장하지 않으려면 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), " 버튼을 선택하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "editemail-tax",
        children: "세금계산서 수신 메일 주소 수정하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "세금계산서 수신 메일 주소를 변경하려면 다음 단계를 수행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "홈 화면 오른쪽 위에 프로필 아이콘을 선택하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["드롭다운 메뉴가 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " 메뉴의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " 섹션에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "수정 아이콘",
              src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "의 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_type_banktransfer",
              className: "uitext"
            }), " 오른쪽에 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "수정 아이콘",
              src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "tax_bill_recipient_email",
              className: "uitext"
            }), " 항목을 수정하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-edit-mail-tax.png",
            desc: "결제 정보 수정"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), " 버튼을 선택하면 이전 화면으로 돌아갑니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: "세금계산서 수신 메일의 경우 수신자 메일 주소를 1개만 등록할 수 있습니다."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "project-subscription",
        children: "프로젝트 유료 전환"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["결제 정보 등록을 완료했다면 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "projectSubscription",
          className: "uitext"
        }), " 메뉴로 이동합니다. 사용자가 등록한 전체 프로젝트 목록을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-pay-list.png",
        desc: "프로젝트 유료 전환"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["프로젝트 상태가 무료, 트라이얼, 사용 제한일 경우 ", (0,jsx_runtime.jsx)(LinkImage, {
              img: "number-02.png",
              desc: "지시선 2"
            }), "  ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), " 버튼이 활성화됩니다. 프로젝트를 유료로 전환해 사용하길 원한다면 다음의 방법을 이용하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["각 프로젝트 항목에 ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "subscribe",
                  className: "uitext"
                }), " 버튼을 선택하면 개별적으로 유료 전환할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(Cmdname, {
                  sid: "CNT06012",
                  className: "uitext"
                }), " 상태가 아닌 전체 프로젝트를 일괄 유료 전환할 수 있습니다. 각 프로젝트 항목의 왼쪽에 체크박스를 클릭한 다음 ", (0,jsx_runtime.jsx)(LinkImage, {
                  img: "number-01.png",
                  desc: "지시선 1"
                }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "tooltip_limited",
                  className: "uitext"
                }), " 버튼을 선택하세요. 여러 개의 프로젝트를 선택할 수 있습니다."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), " 창이 나타나면 프로젝트 목록을 확인한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN06053",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["삭제 프로젝트를 목록에 포함해 확인하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "지시선 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "include_project_deleted",
              className: "uitext"
            }), " 토글 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "결제 권한"
            }), "이 없는 모든 유료 프로젝트 목록을 확인하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "지시선 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "DSC07606",
              className: "uitext"
            }), " 토글 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["프로젝트 목록을 CSV 파일로 다운로드하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "지시선 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "결제 권한"
            }), "은 유료 전환이 가능하고, 결제 수단을 등록할 수 있으며, 청구서를 받을 수 있는 권한입니다."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["유료 전환 시점이 7일 미만인 프로젝트의 경우 유료 전환을 취소할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "cancel_subscription",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["유료 전환 시점으로부터 7일 이후인 프로젝트를 삭제할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "delete_project",
              className: "uitext"
            }), " 버튼을 제공합니다."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "historybilling",
        children: "청구 및 납부 내역"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "paymentHistory",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "납부 이력, 미납금 및 청구 내역을 확인할 수 있습니다. 청구서는 결제 정보에 입력한 청구서 수신 메일 주소에서도 확인할 수 있습니다."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "usage-estimate-history.png",
        desc: "청구 및 납부 내역"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["목록의 가장 오른쪽 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "invoice",
          className: "uitext"
        }), " 컬럼에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "detail",
          className: "uitext"
        }), " 버튼을 선택하면 상세 내역을 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "와탭 모니터링 서비스는 시간 단위로 과금합니다. 매월 기준 시간은 해당 월의 일수 ✕ 24시간으로 계산합니다. 다음은 월 기준 시간입니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "28일: 28 ✕ 24 = 672시간"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "29일: 29 ✕ 24 = 696시간"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "30일: 30 ✕ 24 = 720시간"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "31일: 31 ✕ 24 = 744시간"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "checkpaidprice",
        children: "선납금 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "balance",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "납부한 금액과 지불 현황을 통해 잔고 차감 내용을 확인할 수 있습니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-estimate",
        children: "청구서 미리보기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billingPreview",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["당월 현재까지 할인/프로모션을 적용한 사용 요금 및 ", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "미납금액"
        }), "을 확인할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "viewcategory",
        children: "프로젝트, 상품별 묶어서 보기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["청구서 내용을 프로젝트, 상품별로 그룹화해서 시간 합계, 평균 비용, 비용 합계 정보 등을 확인할 수 있습니다. 청구 내역 테이블 위에 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), " 버튼을 선택하세요. 테이블의 목록을 프로젝트 또는 상품명 기준으로 그룹화합니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["그룹화된 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), " 기준으로 시간 합계, 평균 비용, 비용 합계 정보 등의 상세 정보를 확인하려면 각 항목 왼쪽에 ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "확장 아이콘",
          src: (__webpack_require__(36455)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 버튼을 선택하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "프로젝트-기준",
        children: "프로젝트 기준"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01.png",
        desc: "그룹핑 1"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "상품-기준",
        children: "상품 기준"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-category.png",
        desc: "그룹핑 2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "billpreview",
        children: "사용량 미리보기"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-preview.png",
        desc: "과금 집계량"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["청구 내역 테이블에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metered_unit",
          className: "uitext"
        }), " 컬럼 항목을 선택하면 사용량을 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metering_information",
          className: "uitext"
        }), " 창이 나타나면 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "open_all",
          className: "uitext"
        }), " 버튼을 선택하거나 조회하고 싶은 날짜를 선택하세요."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "상품 기준으로 청구 내역을 정렬한 상태에서 여러 개의 상품이 묶인 경우 사용량 미리보기를 지원하지 않을 수 있습니다."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "usage",
        children: "사용량"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "usage",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "프로젝트별 사용량을 확인할 수 있습니다. 프로젝트별 월별 상세 사용량을 확인하려면 왼쪽 프로젝트 목록에서 프로젝트를 선택하세요."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage.png",
        desc: "사용량"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "숫자 1",
              src: (__webpack_require__(15856)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), "에서 사용량을 확인하고 싶은 기간을 선택하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["화면 왼쪽 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "숫자 2",
              src: (__webpack_require__(29675)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 프로젝트 목록에서 프로젝트를 선택하세요. 화면 오른쪽 위에 텍스트 입력란을 통해서 원하는 프로젝트를 검색할 수도 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.img, {
              alt: "숫자 3",
              src: (__webpack_require__(55522)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 영역에서 선택한 프로젝트의 월간 사용량에 대한 요약 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["일별 상세 사용량을 확인하려면 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "숫자 4",
              src: (__webpack_require__(893)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 일별 사용량 목록에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "더보기 아이콘",
              src: (__webpack_require__(36455)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage-details.png",
        desc: "사용량 상세"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "월간 사용량 요약 정보 및 상세 사용량 정보는 프로젝트의 상품 종류에 따라 다를 수 있습니다."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["사용량 정보는 과금 방식 기준으로 측정됩니다. 과금 방식에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://www.whatap.io/ko/pricing/",
                children: "다음 링크"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "promotioncode",
        children: "프로모션 코드 등록하기"
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
        children: ["프로모션 코드를 등록하려면 결제 정보를 우선 등록해야합니다. 결제 정보 등록에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#register-pay",
          children: "다음 문서"
        }), "를 참조하세요."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "promotion_code_1.png",
        desc: "프로모션 코드"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "promotion_code",
          className: "uitext"
        }), " 텍스트 상자에 전달 받은 코드를 입력하고 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "BTN07117",
          className: "uitext"
        }), " 버튼을 선택하세요. 코드가 정상 등록되었다면 적용된 코드 정보를 확인할 수 있습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "countbilling",
        children: "와탭 상품의 이용 요금 계산 방식"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 상품은 후불제 청구 방식을 적용하고 있습니다. 매월 영업일 기준 5일 이내 전월 이용분 청구서를 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), " 권한을 가진 계정의 이메일로 받을 수 있습니다. 전월 이용분은 1일에서 말일까지 이용한 내용입니다. 청구서는 계정별로 계정에 등록한 유료 상품 목록을 토대로 작성합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "만약 유료 상품 가입 시기가 월 중일 때는 이용한 기간을 일할 계산하여 청구합니다."
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

/***/ 63582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 36455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNHB4O2hlaWdodDogMjRweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY2FyZXQtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjAwMDAwMCwgLTI0NC4wMDAwMDApIiBmaWxsPSIjOTU5NTk1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jYXJldC1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgMTI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC02LjAwMDAwMCkgIiBkPSJNLTIgMiA0IDEwIDEwIDJ6Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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

/***/ 55522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MjNjODFkMGUtOTAzMy00NmVhLWI3MzQtZWVmNzY0Y2U4ODY1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjg4QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRCRDFDMjg3QjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNkOGM4MWEtNWE2MS00MmRiLTk2YTgtYTc1NjI2MTU1MDg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIzYzgxZDBlLTkwMzMtNDZlYS1iNzM0LWVlZjc2NGNlODg2NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhIBdIgAAAMcSURBVHjazFh9aI1hFD93KIw1hZDkZn+oOyklFLar5ONiSzNqUmqF+UqakFmjKMWSiCSaj3wlaXcmaV8YKQ2bf0xL/rDIR1uTYvE73ee573vf3bud5953b0792t37cd7fe57zO885r6+nlv4bG2p4/XhgOZALBICpQAbwF+gGOoA2oB64D3w2ce4TRmYBsAdYavACv4Ea4BjwVHJD2gDnpwFhoBFYYRjJYUAe8AS4B/hTIVMEtKhlSdVWKl+FyZCpAK4Ao1zMT86t68ABEzKHgIODJBgfcBjYKyGzHijzQMVHgHX9kckCznpUUjhC55xJbVfHKSBd4unLD0ismajuJdHtpsixAog/OIsoNI9oXKY4h04Cq5x1hotYncTDnQZk90Wi9s7457MmEF0tJ8r2i6M0X8k/ukylkrt6fsUS4QdvCkWioo3PFVVErhVaqT0yE/H3IzBEcmfHJ6KtJ4iKUQJX51jHH74gyrel/l1oZvFscaWezFsH50xISoTND+q38KD04bHHnQ/u/mlUqXmbqeJlWmgqBScRndR2mzTWyGWuVtOMVDTKJFreEVXetI5xHs0NGLkJaDJTkiHRimZhzpa+x0/vJFoTNHbn12rKdKuS5SDGGSPjL+MANlqrqVfQSsRdnqZXRF1I1NftKKdh6xxL/cxuI1JcCEYwmW/4MSbVqLDk8/dZNehoMdGOAvm7cRfJEfngxhKx5Hettf6vfW72LjpnWk0jIKmuDW+MyLzVZBqldzAJXoqS4xE1OUlW3oiVt4HVa2lz6vVKqvCF6khOMHi3ZvVMR2H42mXt3toKF4mJ/FGTRHTXDkt6XY5M2flY5cQzg32JVLOeZyfD7/FIejdvis2Yjp61WbmRRD9jH4MeO+cm/rXE4yEyrEagPm3nNl4JD4nwBLo9UQ+MOkolHpLZrOtLoumgiounB0R4FLommZv2q9lmsKw8kf+0fphvdDmH2NcGNSQaz9qXgJnAAxeI1Chfl1P5CvFe9adBW6WWGl9brVrKkPLlyveZaGsLLOM+CshWXaJuP76rDkB/LOJodJo4/yfAABNxzftn0khZAAAAAElFTkSuQmCC");

/***/ }),

/***/ 893:
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