"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[67924],{

/***/ 54397:
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
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_billing-credit-card-note.mdx


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
          }), " is required."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "WhaTap's service fees are billed in arrears the following month according to the usage, and payment is made on the 25th of each month using the registered credit card."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["To receive invoices by multiple email addresses, enter multiple email addresses by using comma (,) as the delimiter in ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "invoice_cc",
            className: "uitext"
          }), ". e.g. ", (0,jsx_runtime.jsx)(_components.a, {
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/management/billing.mdx


const billing_frontMatter = {
	id: 'billing',
	title: 'Billing',
	description: 'It explains how to use the WhaTap monitoring service by converting to subscription.',
	toc_max_heading_level: 3,
	tags: [
		'Management',
		'Billing'
	]
};
const billing_contentTitle = undefined;
const metadata = {
  "id": "management/billing",
  "title": "Billing",
  "description": "It explains how to use the WhaTap monitoring service by converting to subscription.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/management/billing.mdx",
  "sourceDirName": "management",
  "slug": "/management/billing",
  "permalink": "/en/management/billing",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/management/billing.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Management",
      "permalink": "/en/tags/management"
    },
    {
      "inline": true,
      "label": "Billing",
      "permalink": "/en/tags/billing"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "billing",
    "title": "Billing",
    "description": "It explains how to use the WhaTap monitoring service by converting to subscription.",
    "toc_max_heading_level": 3,
    "tags": [
      "Management",
      "Billing"
    ]
  },
  "sidebar": "manageSidebar",
  "previous": {
    "title": "Real-time Alert List",
    "permalink": "/en/notification/rt-notification"
  },
  "next": {
    "title": "Maintenance Plan",
    "permalink": "/en/management/maintenance"
  }
};
const assets = {

};




const billing_toc = [{
  "value": "Payment information",
  "id": "register-pay",
  "level": 2
}, {
  "value": "Registering the payment information",
  "id": "registering-the-payment-information",
  "level": 3
}, {
  "value": "Credit card (Nicepay)",
  "id": "payment_type_card_iamport",
  "level": 3
}, ...toc, {
  "value": "Credit card (Stripe)",
  "id": "payment_type_card_stripe",
  "level": 3
}, ...toc, {
  "value": "Bank transfer",
  "id": "payment_type_banktransfer",
  "level": 3
}, {
  "value": "Sending invoice",
  "id": "payment_type_banktransfer_abroad",
  "level": 3
}, {
  "value": "Modifying the basic information",
  "id": "modifying-the-basic-information",
  "level": 2
}, {
  "value": "Modifying the payment information",
  "id": "modifying-the-payment-information",
  "level": 2
}, {
  "value": "Modifying the payment method",
  "id": "modifying-the-payment-method",
  "level": 3
}, {
  "value": "Modifying the email address of tax invoice",
  "id": "editemail-tax",
  "level": 3
}, {
  "value": "Modifying the billing information",
  "id": "editemail",
  "level": 2
}, {
  "value": "Project subscription",
  "id": "project-subscription",
  "level": 2
}, {
  "value": "Billing and payment history",
  "id": "historybilling",
  "level": 2
}, {
  "value": "Checking the balance",
  "id": "checkpaidprice",
  "level": 2
}, {
  "value": "Preview Invoice",
  "id": "preview-estimate",
  "level": 2
}, {
  "value": "Grouped view by project and product",
  "id": "viewcategory",
  "level": 3
}, {
  "value": "By project",
  "id": "by-project",
  "level": 4
}, {
  "value": "By product",
  "id": "by-product",
  "level": 4
}, {
  "value": "Previewing the usage",
  "id": "billpreview",
  "level": 3
}, {
  "value": "Quota",
  "id": "usage",
  "level": 2
}, {
  "value": "Registering the promotion code",
  "id": "promotioncode",
  "level": 2
}, {
  "value": "How to calculate the usage fee of WhaTap products",
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
      children: "To continue using the WhaTap monitoring service after the free trial period has passed or exceeded the limit of free trial terms, register your payment information and convert to a paid service."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "register-pay",
        children: "Payment information"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Payment information is provided differently depending on the billing currency. The user must have the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), " role to register the payment information."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Prepare the following before proceeding with payment."
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
              }), ": Payment card number and its expiration date"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer",
                className: "uitext"
              }), ": Email address for receipt of business registration certificate and tax invoice"]
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
              }), ": Payment card number and its expiration date"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "payment_type_banktransfer_abroad",
                className: "uitext"
              }), ": Recipient Email"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "billing",
            className: "b600"
          }), " role, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../project/project-structure#project-auth",
            children: "the following"
          }), "."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "registering-the-payment-information",
        children: "Registering the payment information"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "If this is your first registration for the payment method, keep the following steps:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTap monitoring service"
            }), ", log in with the account to transfer the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing",
              className: "b600"
            }), " role to."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Select the profile icon on the upper right of Home screen."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the dropdown menu appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-select-my-usage.png",
            desc: "Usage"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " section, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Configure the detailed settings in order. ", (0,jsx_runtime.jsx)("span", {
              class: "vslow",
              children: "*"
            }), " is required."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-information.png",
            desc: "Payment information"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Register a desired payment method in ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "."]
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
          children: ["Supported payment currencies are ", (0,jsx_runtime.jsx)(UI, {
            children: "KRW"
          }), ", ", (0,jsx_runtime.jsx)(UI, {
            children: "JPY"
          }), ", and ", (0,jsx_runtime.jsx)(UI, {
            children: "USD"
          }), ". ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "payment_method",
            className: "uitext"
          }), " is changed depending on the changed currency."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_iamport",
        children: "Credit card (Nicepay)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you selected ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_iamport",
          className: "uitext"
        }), " in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), ", keep the following steps:"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit.png",
        desc: "Credit card"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " window appears, enter the values for card number, valid thru, and first 2 digits of password."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "card_type",
              className: "uitext"
            }), ", select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "corporation",
              className: "uitext"
            }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "individual",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "corporation",
                className: "uitext"
              }), ": In case of a corporate card, the company name is printed on the card. Enter the business registration number and busines name."]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(Cmdname, {
                sid: "individual",
                className: "uitext"
              }), ": In case of a personal card, the owner name is printed on the card. Even if you received it from your company but a personal name is printed on it, it is a personal card. Enter 8 digits for your birthday."]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "See the checked terms and conditions."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Once you have entered all your card information, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ". Return to the previous screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter the contact information to receive the invoice, and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_card_stripe",
        children: "Credit card (Stripe)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you selected ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_card_stripe",
          className: "uitext"
        }), " in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), ", keep the following steps:"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-credit-stripe.png",
        desc: "Credit card"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " window appears, Enter values for credit card's owner name and number, expiration date, and CVC number."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "See the checked terms and conditions."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Once you have entered all your card information, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ". Return to the previous screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter the contact information to receive the invoice, and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer",
        children: "Bank transfer"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you selected ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer",
          className: "uitext"
        }), " in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), ", keep the following steps:"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billin-add-payment-tax.png",
        desc: "Bank transfer"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " window appears, enter the billing information."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Enter the representative name, business registration number, and e-tax invoice email on the business registration certificate."
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "The tax invoice issuance date is as follows:"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.25",
                    className: "uitext"
                  }), ": Invoice is issued on the 25th of the month."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.-1",
                    className: "uitext"
                  }), ": Invoice is issued on the last day of the month."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: [(0,jsx_runtime.jsx)(Cmdname, {
                    sid: "date.0",
                    className: "uitext"
                  }), ": Invoice is issued at the beginning of the following month based on the used month."]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "If necessary, enter the item and type of the business."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Once you have entered all your billing information, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ". Return to the previous screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter the contact information to receive the invoice, and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Once you have completed entry of the invoice issuance information, the copies for WhaTap Labs' business registration certificate and bankbook are automatically sent via the email to the person in charge. Please check the content of the email and then send your business registration certificate to ", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:billing@whatap.io",
          children: "billing@whatap.io"
        }), "."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Enter your business registration number and then select ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06501",
                className: "uitext"
              }), " to proceed with authentication."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To receive invoices by multiple email addresses, enter multiple email addresses by using comma (,) as the delimiter in ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), ". e.g. ", (0,jsx_runtime.jsx)(_components.a, {
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
              children: ["To reversely issue a tax invoice, contact us at ", (0,jsx_runtime.jsx)(_components.a, {
                href: "mailto:billing@whatap.io",
                children: "billing@whatap.io"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "payment_type_banktransfer_abroad",
        children: "Sending invoice"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If you selected ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_type_banktransfer_abroad",
          className: "uitext"
        }), " in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "payment_method",
          className: "uitext"
        }), ", keep the following steps:"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-add-payment-tax-abroad.png",
        desc: "Sending invoice"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "register_billing_info",
              className: "uitext"
            }), " window appears, enter the invoice delivery information."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Check for ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL06687",
              className: "uitext"
            }), " and ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), ". If necessary, you can modify the values."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["You can add email addresses to send to in the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), " field. When entering multiple items, use comma (,) as the delimiter."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter the value in ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "company_address",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Once you have entered all your invoice delivery information, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ". Return to the previous screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["After all settings are finished, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Invoices are sent on the 25th of every month."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To receive invoices by multiple email addresses, enter multiple email addresses by using comma (,) as the delimiter in ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), ". e.g. ", (0,jsx_runtime.jsx)(_components.a, {
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
        id: "modifying-the-basic-information",
        children: "Modifying the basic information"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can modify the basic information such as ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06080",
          className: "uitext"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "phone",
          className: "uitext"
        }), ", and ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06768",
          className: "uitext"
        }), " that have been set upon registration of the payment information."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Select the profile icon on the upper right of Home screen."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the dropdown menu appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08029",
              className: "uitext"
            }), " section of the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " menu, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Modify the desired items and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-payment-basic.png",
            desc: "Basic information"
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
              }), " is required."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If you do not want to save the modifications, select ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "modifying-the-payment-information",
        children: "Modifying the payment information"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "modifying-the-payment-method",
        children: "Modifying the payment method"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "You can change your registered payment method or billing currency."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Select the profile icon on the upper right of Home screen."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the dropdown menu appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " section of the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " menu, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Modify ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_currency",
              className: "uitext"
            }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If you have modified ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "invoice_currency",
                  className: "uitext"
                }), ", the payment method options are changed."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To change a registered credit card to another one, select ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "BTN08031",
                  className: "uitext"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-credit.png",
                desc: "Re-register"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["To modify ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), ", select ", (0,jsx_runtime.jsx)(_components.img, {
                  alt: "Edit icon",
                  src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
                  width: "24",
                  height: "24"
                }), "."]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "billing-edit-payment-info-tax.png",
                desc: "Edit"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["You can select a payment method from the credit card as ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer",
                  className: "uitext"
                }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "payment_type_banktransfer_abroad",
                  className: "uitext"
                }), "."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), " window appears, set the required information and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ". Return to the previous screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the payment information change message appears, check the following and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), "."]
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
              }), " is required."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If you changed your payment method, your previous entries are not saved."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["If you do not want to save the modifications, select ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "editemail-tax",
        children: "Modifying the email address of tax invoice"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "To change your email address for receiving the tax invoice, keep the following steps:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Select the profile icon on the upper right of Home screen."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the dropdown menu appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_information",
              className: "uitext"
            }), " section of the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " menu, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["On the right of ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_type_banktransfer",
              className: "uitext"
            }), " in ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "payment_method",
              className: "uitext"
            }), ", select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["When the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_info_edit",
              className: "uitext"
            }), " window appears, modify ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "tax_bill_recipient_email",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "billing-edit-mail-tax.png",
            desc: "Edit the billing information"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If you select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "apply",
              className: "uitext"
            }), ", the previous screen appears."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: "For tax invoice emails, only one recipient email address can be specified."
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "editemail",
        children: "Modifying the billing information"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "To change the bill recipient because the person in charge has been changed, keep the following steps:"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Select the profile icon on the upper right of Home screen."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the dropdown menu appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "my_usage",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "billing_reception_info",
              className: "uitext"
            }), " section of the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "side_paymentInformation",
              className: "uitext"
            }), " menu, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Edit icon",
              src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "edit",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Change the staff information (", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_name",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "email",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "invoice_cc",
              className: "uitext"
            }), ") in order."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Once you have entered all required information, select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "save",
              className: "uitext"
            }), "."]
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
              }), " is required."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["To receive invoices by multiple email addresses, enter multiple email addresses by using comma (,) as the delimiter in ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "invoice_cc",
                className: "uitext"
              }), ". e.g. ", (0,jsx_runtime.jsx)(_components.a, {
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
              children: ["If you do not want to save the modifications, select ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "BTN06760",
                className: "uitext"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "project-subscription",
        children: "Project subscription"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After registering the payment information, go to ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "projectSubscription",
          className: "uitext"
        }), ". You can check the full list of registered projects."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-pay-list.png",
        desc: "Project Subscription"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The ", (0,jsx_runtime.jsx)(LinkImage, {
              img: "number-02.png",
              desc: "Leader line 2"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), " button is enabled when the project status is Free, Trial, or Use. If you want to convert the project to a paid plan, use the following method."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["If you select ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "subscribe",
                  className: "uitext"
                }), " for each project, you can individually convert it to a paid plan."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["You can convert all the projects to a paid plan at once, not in the ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "CNT06012",
                  className: "uitext"
                }), " status. Click the checkboxes on the left for each project, and then select ", (0,jsx_runtime.jsx)(LinkImage, {
                  img: "number-01.png",
                  desc: "지시선 1"
                }), " ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "tooltip_limited",
                  className: "uitext"
                }), ". You can select multiple projects."]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "subscribe",
              className: "uitext"
            }), " window appears, check the project list and then select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "BTN06053",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To check the deleted projects by including them in the list, select the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "leader line 1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "include_project_deleted",
              className: "uitext"
            }), " toggle button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To see the list of projects with no ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "billing role"
            }), ", select the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Leader line 1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "DSC07606",
              className: "uitext"
            }), " toggle button."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To download a list of projects in CSV format, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Leader line 1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "BILLING"
            }), " is the right to convert to a paid plan, to register payment methods, and to receive billings."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In case of the project whose subscription date is less than 7 days, you can cancel the subscription. Select ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "cancel_subscription",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In case of the project whose subscription date is 7 days or more, the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "delete_project",
              className: "uitext"
            }), " button is provided for you to delete the project."]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "historybilling",
        children: "Billing and payment history"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "paymentHistory",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "You can see your payment history, unpaid amount, and billing history. Invoices can also be checked at the billing email address entered in your payment information."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "usage-estimate-history.png",
        desc: "Billing History"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["In the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "invoice",
          className: "uitext"
        }), " column on the utmost right of the list, select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "detail",
          className: "uitext"
        }), " to see the information details."]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "WhaTap monitoring service is billed on an hourly basis. Monthly reference time is calculated by \"the number of days in the month ✕ 24 hours.\" The following examples are the hours per month."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "28 days: 28 ✕ 24 = 672 hours"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "29 days: 29 ✕ 24 = 696 hours"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "30 days: 30 ✕ 24 = 720 hours"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "31 days: 31 ✕ 24 = 744 hours"
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "checkpaidprice",
        children: "Checking the balance"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "balance",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "You can check the balance deduction through the balance and payment status."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "preview-estimate",
        children: "Preview Invoice"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billingPreview",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can check the used fee and ", (0,jsx_runtime.jsx)("span", {
          class: "vslow",
          children: "unpaid amount"
        }), " with discounts/promotions applied up to the current month."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "viewcategory",
        children: "Grouped view by project and product"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can group invoices by project or product to see the total time, average cost, total cost, and more. Select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), " above the billing history table. Group the tables by project or product name."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To check the total time, average cost, and total cost based on the grouped ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project",
          className: "uitext"
        }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "ITM05997",
          className: "uitext"
        }), ", select ", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Expand icon",
          src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "by-project",
        children: "By project"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01.png",
        desc: "Grouping 1"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "by-product",
        children: "By product"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-category.png",
        desc: "Grouping 2"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "billpreview",
        children: "Previewing the usage"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "bill-preview-group-01-preview.png",
        desc: "Metered Units"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can see the usage by selecting the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metered_unit",
          className: "uitext"
        }), " column in the Billing History table. If the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "metering_information",
          className: "uitext"
        }), " window appears, select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "open_all",
          className: "uitext"
        }), " or select the date for inquiry."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "If you sort the billings by product and multiple products are grouped together, the usage preview may not be supported."
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "usage",
        children: "Quota"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "my_usage",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "usage",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "You can check the usage for each project. To see the monthly usage details by the project, select a project from the project list on the left."
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage.png",
        desc: "Metering"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 1",
              src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), ", select a period to check the usage."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 2",
              src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " project list on the left of the screen, select a project. You can also search for the desired project in the field on the upper right of the screen."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 3",
              src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " area, you can see the summary of the monthly usages for the selected project."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["To check the daily usage details, select ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "More icon",
              src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " in the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "number 4",
              src: (__webpack_require__(3774)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " daily usage list."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "billing-usage-details.png",
        desc: "Usage details"
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "The monthly usage summary and details may differ depending on the product type of the project."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Usage data is measured on the billing basis. For more information about the billing method, see ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://www.whatap.io/ko/pricing/",
                children: "the following link"
              }), "."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "promotioncode",
        children: "Registering the promotion code"
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
        children: ["To register a promotion code, register your payment information in advance. For more information about the registration of the payment information, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#register-pay",
          children: "the following"
        }), "."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "promotion_code_1.png",
        desc: "Promotion code"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Enter the granted code in the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "promotion_code",
          className: "uitext"
        }), " field, and then select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "BTN07117",
          className: "uitext"
        }), ". If the code was successfully registered, you can check the applied code."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "countbilling",
        children: "How to calculate the usage fee of WhaTap products"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTap products are using the deferred payment billing. You can receive an invoice for the previous month's usage within 5 business days of each month via email through the account with the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "billing",
          className: "b600"
        }), " role. The usage of the previous month is the amount used from the 1st day to the last day of the month. Invoices are created for each account based on the list of paid products registered to the account."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "If the subscription period for paid products is in the middle of the month, the period of use is calculated and billed on a pro-rata basis."
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