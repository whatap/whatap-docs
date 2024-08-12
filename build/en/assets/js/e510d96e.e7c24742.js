"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[4383],{

/***/ 60210:
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
    a: "a",
    admonition: "admonition",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, Link, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Link) _missingMdxReference("Link", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "To use the WhaTap monitoring service, proceed with membership registration."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "tip",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Try WhaTap Monitoring for free for 15 days. For more information about the billing, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "management/billing",
              children: "the following"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["Try WhaTap Monitoring for free for 15 days. For more information about the billing, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../management/billing",
              children: "the following"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "The free trial starts from the date when the project access key has been granted after sign up for membership and creating a project."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "To continue using the service after the trial period ends, register your payment information and convert to a subscribed project."
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Go to the WhaTap website (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "http://www.whatap.io/",
          children: "http://www.whatap.io/"
        }), ")."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["On the upper right area, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link, {
          to: "https://www.whatap.io/en/signup/",
          target: "_blank",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "freetrial"
          })
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "Enter your name, email address, password, and company name in order."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["Select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "landingSignup",
          className: "uitext"
        }), "."]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["To receive alerts via SMS, log in the service and then select the profile icon > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "MNU07360",
          className: "uitext"
        }), " on the upper right of the screen. Go to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "account_user_phone",
          className: "uitext"
        }), " section and then enter your phone number."]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 52079:
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
    a: "a",
    admonition: "admonition",
    em: "em",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Create a project before installing the agent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Log in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "WhaTap monitoring service"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["To create a project, on the left of the screen, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN07332",
            className: "uitext"
          }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "+"
            })
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "BTN06696",
            className: "uitext"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Select a product in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07073",
            className: "uitext"
          }), " for installation."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Set items for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_name",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "data_server_region",
            className: "uitext"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "project_time_zone",
            className: "uitext"
          }), ", and more in order."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "create-project-v3.png",
          desc: ""
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["In ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "TTL07727",
            className: "uitext"
          }), ", select the language for alert messages."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["After all settings are finished, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "creating_a_project",
            className: "uitext"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["A ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), " refers to a region (a bundle of data centers installed to provide cloud services). Selecting a specific region stores your data in the datacenter that belongs to that region."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), " is the reference time for generating alerts and reports."]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["To group multiple projects for management, select a group from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), " or add a group. For more information about grouping, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "project/group",
              children: "the following"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "quick-guide",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["To group multiple projects for management, select a group from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), " or add a group. For more information about grouping, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "the following"
            }), "."]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["To add a project with an organization selected, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "group_of_organization",
            className: "uitext"
          }), " must be set."]
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

/***/ 28606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ quick_guide_contentTitle),
  "default": () => (/* binding */ quick_guide_MDXContent),
  frontMatter: () => (/* binding */ quick_guide_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ quick_guide_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/account/_create-account.mdx
var _create_account = __webpack_require__(60210);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/getting-started/_create-project-intro-v2.mdx
var _create_project_intro_v2 = __webpack_require__(52079);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/getting-started/_accesskey-intro.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project access key"
      }), " is the unique ID for activating the WhaTap services."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the installation guide section, select ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), ". After automatic reception of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "project access key"
      }), ", proceed to the next step."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["After a project has been created, the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " page appears automatically. If the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " does not appear, select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "all_projects",
          className: "uitext"
        }), " on the left and then select a newly created project."]
      })
    })]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/quick-guide.mdx


const quick_guide_frontMatter = {
	id: 'quick-guide',
	title: 'Quick Guide',
	displayed_sidebar: 'indexSidebar',
	description: 'The following provides a brief guide to quickly use the functions of WhaTap Monitoring.'
};
const quick_guide_contentTitle = undefined;
const metadata = {
  "id": "quick-guide",
  "title": "Quick Guide",
  "description": "The following provides a brief guide to quickly use the functions of WhaTap Monitoring.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/quick-guide.mdx",
  "sourceDirName": ".",
  "slug": "/quick-guide",
  "permalink": "/en/quick-guide",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/quick-guide.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "quick-guide",
    "title": "Quick Guide",
    "displayed_sidebar": "indexSidebar",
    "description": "The following provides a brief guide to quickly use the functions of WhaTap Monitoring."
  },
  "sidebar": "indexSidebar",
  "previous": {
    "title": "Support Environment",
    "permalink": "/en/support-env"
  },
  "next": {
    "title": "모바일 앱",
    "permalink": "/en/mobile-app"
  }
};
const assets = {

};






const quick_guide_toc = [{
  "value": "Step-by-step guide for quick start",
  "id": "step-by-step-guide-for-quick-start",
  "level": 2
}, {
  "value": " WhaTap sign up",
  "id": "account",
  "level": 3
}, ..._create_account/* toc */.RM, {
  "value": " Project creation",
  "id": "cproject",
  "level": 3
}, ..._create_project_intro_v2/* toc */.RM, {
  "value": " Checking the project access key",
  "id": "accesskey",
  "level": 3
}, ...toc, {
  "value": " Agent installation",
  "id": "install",
  "level": 3
}, {
  "value": " Viewing the dashboard",
  "id": "dashboard",
  "level": 3
}, {
  "value": " External data collection",
  "id": "collect",
  "level": 3
}, {
  "value": " Alert Settings",
  "id": "notification",
  "level": 3
}, {
  "value": " Viewing reports",
  "id": "report",
  "level": 3
}, {
  "value": " Member Management",
  "id": "member",
  "level": 3
}];
function quick_guide_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
  }, {Cmdname, Details, Videos} = _components;
  if (!Cmdname) quick_guide_missingMdxReference("Cmdname", true);
  if (!Details) quick_guide_missingMdxReference("Details", true);
  if (!Videos) quick_guide_missingMdxReference("Videos", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "This page is the WhaTap Monitoring overview. This is useful for the users who are new to WhaTap Monitoring."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "For more information about installation and utilization of WhaTap Monitoring agents, see the product-specific technical documentation to the left."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "step-by-step-guide-for-quick-start",
        children: "Step-by-step guide for quick start"
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "account",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(29859)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " WhaTap sign up"]
      }), (0,jsx_runtime.jsx)(_create_account/* default */.Ay, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "cproject",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(93000)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Project creation"]
      }), (0,jsx_runtime.jsx)(_create_project_intro_v2/* default */.Ay, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "accesskey",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(86865)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Checking the project access key"]
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "install",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(3774)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Agent installation"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Once you have been granted a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "project access key"
        }), ", you can install any WhaTap agent according to the Install Guide section. In ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), ", you can also access the Install Guide section."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Check the support environment."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "management",
              className: "uitext"
            }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "agent_installation",
              className: "uitext"
            }), ", select the ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "JAVA-agent-setup-1-subject",
              className: "uitext"
            }), " tab. Follow the instructions to download the agent or install the package."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Download agent"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["Depending on the environment, select the ", (0,jsx_runtime.jsx)(Cmdname, {
                  sid: "download",
                  className: "uitext"
                }), " or use the command to download from the server."]
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Depending on the environment, register the repository and install the package."
              }), "\n"]
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "project access key"
            }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "WhaTap server IP"
            }), ", and then run the setup script."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Restart the agent."
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The WhaTap Monitoring service is started."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "For more information about the download and setup, see the product-specific installation guides. Select a product-specific menu on the left and then see the following shortcut."
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "Shortcuts for product-specific support environment and installation guide"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "java/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "java/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PHP"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "php/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "php/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Node.js"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "nodejs/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "nodejs/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Python"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "python/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "python/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".NET"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "dotnet/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "dotnet/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Go"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "golang/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "golang/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Server"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "server/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "server/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kubernetes"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "kubernetes/supported-spec",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "kubernetes/install",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "postgresql/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "postgresql/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MySQL"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mysql/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mysql/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SQL Server"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mssql/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mssql/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tibero"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "tibero/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "tibero/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "CUBRID"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "cubrid/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "cubrid/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Altibase"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "altibase/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "altibase/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "redis/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "redis/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mongodb/monitoring-support",
                  children: "Support environment"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "mongodb/install-agent",
                  children: "Agent installation"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "url/url-install",
              children: "URL"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "amazon-ecs/install-agent",
                  children: "Amazon ECS"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "amazon-cloudwatch/install-agent",
                  children: "Amazon Cloudwatch"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "azure/install-agent",
                  children: "Azure Monitor"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "ncloud/install-agent",
                  children: "Naver Cloud Monitoring"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.a, {
                  href: "oracle-cloud/install-agent",
                  children: "Oracle Cloud Monitor"
                })
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "log/log-function",
              children: "Log"
            })
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If you encounter any problem during installation, see the product-specific ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "installation troubleshooting"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "dashboard",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(72615)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " Viewing the dashboard"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When data is transferred to the WhaTap server after agent installation, you can view the overall project status in real time through ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "dashboard",
          className: "uitext"
        }), ". WhaTap Monitoring can show all collected data on the integrated dashboard, which can be freely personalized by user."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The displayed performance metrics of applications are collected from the widgets of ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "app_dashboard",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "transaction_map",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "active_transaction",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "application_topology",
              className: "uitext"
            }), ", and ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/app-activeTransection.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The server performance metrics collected from each widget of ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "sms_resource_board",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "sms_compound_eye",
              className: "uitext"
            }), ", and ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), " can be viewed."]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://whatap-landing-resource.s3.ap-northeast-2.amazonaws.com/server-compound.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The database performance metrics collected from each widget of ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance_list",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "instance_monitoring",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "multi_instance_monitoring",
              className: "uitext"
            }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "slow_query",
              className: "uitext"
            }), ", and ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "flexboard",
              className: "uitext"
            }), " can be viewed."]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://img.whatap.io/23/11/06/031831DB_prd.mp4"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For Kubernetes, the nodes, containers, applications, logs, and events are dynamically displayed through the widgets of ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "containerMap",
              className: "uitext"
            }), "."]
          }), "\n", (0,jsx_runtime.jsx)(Videos, {
            url: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the creation and configuration of Flex Dashboard, the custom integrated dashboard, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "java/flex-board",
            children: "the following"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "collect",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(53612)/* ["default"] */ .A) + "",
          width: "35",
          height: "35"
        }), " External data collection"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can expand the WhaTap service collection data by using Telegraf and Focus. For more information, see the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/telegraf/introduction",
          children: "Telegraf"
        }), " and ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/focus/introduction",
          children: "Focus"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "You can install a WhaTap plugin to forward the data collected by Telegraf to the WhaTap collection server."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "By installing the WhaTap Focus, you can upload the values collected by running your own check scripts or database queries to your WhaTap project."
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "notification",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(76667)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), " Alert Settings"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTap Monitoring allows you to set threshold-based alerts for all metrics collected. In ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "event_statistic",
          className: "uitext"
        }), ", you can check events, notification settings, and previous records. The alert reception can be set for each individual and it provides various alert reception channels such as Email, SMS, Messenger, etc."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "For more information about alert settings, see the following for each product."
      }), (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "Shortcuts to product-specific alert setting guides"
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "java/apm-set-notice",
              children: "Java"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "php/apm-set-notice",
              children: "PHP"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "nodejs/apm-set-notice",
              children: "Node.js"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "python/apm-set-notice",
              children: "Python"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "dotnet/apm-set-notice",
              children: ".NET"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "golang/apm-set-notice",
              children: "Go"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "server/set-notice",
              children: "Server"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "postgresql/set-notice",
              children: "PostgreSQL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "oracle/set-notice",
              children: "Oracle"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mysql/set-notice",
              children: "MySQL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mssql/set-notice",
              children: "SQL Server"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "tibero/set-notice",
              children: "Tibero"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "cubrid/set-notice",
              children: "CUBRID"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "altibase/set-notice",
              children: "Altibase"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "redis/set-notice",
              children: "Redis"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "mongodb/set-notice",
              children: "MongoDB"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "kubernetes/set-notice",
              children: "Kubernetes"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "url/url-event",
              children: "URL"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "amazon-cloudwatch/set-notice",
              children: "Amazon CloudWatch"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "amazon-ecs/set-notice",
              children: "Amazon ECS"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "azure/set-notice",
              children: "Azure Monitor"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "ncloud/set-notice",
              children: "Naver Cloud Monitoring"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "oracle-cloud/set-notice",
              children: "Oracle Cloudd Monitor"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "log/set-notice",
              children: "Log"
            })
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "report",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(74428)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), " Viewing reports"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Reports are the documents that report the service usage and failure records. For example, the monitoring data analysis becomes a metric to determine the direction of service improvement. WhaTap supports task automation by allowing you to create reports through the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "report",
          className: "uitext"
        }), " menu. It provides unit reports for each project and the integrated reports for multiple projects."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about reporting, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "java/report-intro",
            children: "the following"
          }), ". For product-specific report guides, see product-specific technical documents."]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "member",
        children: [(0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(2973)/* ["default"] */ .A) + "",
          width: "37",
          height: "37"
        }), " Member Management"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can add project members in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "project_member",
          className: "uitext"
        }), ". You can set the permissions for each project and member group, and delete members."]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the member role scheme, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "project/project-structure#project-auth",
            children: "the following"
          }), "."]
        })
      }), (0,jsx_runtime.jsx)(_components.hr, {})]
    })]
  });
}
function quick_guide_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(quick_guide_createMdxContent, {
      ...props
    })
  }) : quick_guide_createMdxContent(props);
}
function quick_guide_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 76667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE4LjEwMzIiIGN5PSIxOC4xMDMyIiByPSIxOC4xMDMyIiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMjYuNDM0OCA4Ljk1Njg1VjExLjMzNThMMTguNTkgMjkuNTc0SDEzLjkxNzJMMjEuNzYxOSAxMi4zOTc4SDExLjcwODJWOC45NTY4NUgyNi40MzQ4WiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 74428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE4LjEwMzIiIGN5PSIxOC4xMDMyIiByPSIxOC4xMDMyIiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMjYuMzYzOSAyMi45MUMyNi4zNjM5IDI0LjIxMjcgMjYuMDU3MSAyNS4zMDc4IDI1LjQ0MzUgMjYuMTk1MUMyNC44Mjk5IDI3LjA4MjUgMjMuOTg5NyAyNy43NDggMjIuOTIzIDI4LjE5MTdDMjEuODY1NyAyOC42MzU0IDIwLjY1NzQgMjguODU3MiAxOS4yOTggMjguODU3MkMxNy45NDgxIDI4Ljg1NzIgMTYuNzM1IDI4LjYzNTQgMTUuNjU4OSAyOC4xOTE3QzE0LjU5MjEgMjcuNzQ4IDEzLjc0NzIgMjcuMDgyNSAxMy4xMjQyIDI2LjE5NTFDMTIuNTAxMSAyNS4zMDc4IDEyLjE4OTYgMjQuMjEyNyAxMi4xODk2IDIyLjkxQzEyLjE4OTYgMjIuMDIyNiAxMi4zNjQzIDIxLjIyNDkgMTIuNzEzNSAyMC41MTY5QzEzLjA3MjMgMTkuODA4OSAxMy41Njc5IDE5LjIwNDcgMTQuMjAwNCAxOC43MDQ0QzE0Ljg0MjMgMTguMjA0MSAxNS41OTI4IDE3LjgyMTggMTYuNDUxOCAxNy41NTc0QzE3LjMyMDMgMTcuMjkzMSAxOC4yNTk2IDE3LjE2MDkgMTkuMjY5NyAxNy4xNjA5QzIwLjYyOTEgMTcuMTYwOSAyMS44NDIxIDE3LjM5NyAyMi45MDg5IDE3Ljg2OUMyMy45ODUgMTguMzMxNSAyNC44Mjk5IDE4Ljk5MjMgMjUuNDQzNSAxOS44NTE0QzI2LjA1NzEgMjAuNzEwNCAyNi4zNjM5IDIxLjczIDI2LjM2MzkgMjIuOTFaTTIxLjkxNzYgMjIuNTg0M0MyMS45MTc2IDIxLjk4MDEgMjEuODA0NCAyMS40NzA0IDIxLjU3NzggMjEuMDU1QzIxLjM2MDcgMjAuNjMwMiAyMS4wNTM5IDIwLjMwNDUgMjAuNjU3NCAyMC4wNzc5QzIwLjI2MDkgMTkuODQxOSAxOS43OTgzIDE5LjcyMzkgMTkuMjY5NyAxOS43MjM5QzE4Ljc0MTEgMTkuNzIzOSAxOC4yNzg1IDE5Ljg0MTkgMTcuODgyIDIwLjA3NzlDMTcuNDg1NSAyMC4zMDQ1IDE3LjE3NCAyMC42MzAyIDE2Ljk0NzQgMjEuMDU1QzE2LjczMDMgMjEuNDcwNCAxNi42MjE3IDIxLjk4MDEgMTYuNjIxNyAyMi41ODQzQzE2LjYyMTcgMjMuMTY5NiAxNi43MzUgMjMuNjc5MyAxNi45NjE2IDI0LjExMzZDMTcuMTg4MiAyNC41Mzg0IDE3LjQ5OTcgMjQuODY0MSAxNy44OTYyIDI1LjA5MDZDMTguMjkyNiAyNS4zMDc4IDE4Ljc1OTkgMjUuNDE2MyAxOS4yOTggMjUuNDE2M0MxOS44MzYxIDI1LjQxNjMgMjAuMjk4NyAyNS4zMDc4IDIwLjY4NTcgMjUuMDkwNkMyMS4wNzI4IDI0Ljg2NDEgMjEuMzc0OCAyNC41Mzg0IDIxLjU5MiAyNC4xMTM2QzIxLjgwOTEgMjMuNjc5MyAyMS45MTc2IDIzLjE2OTYgMjEuOTE3NiAyMi41ODQzWk0yNS45MjUgMTMuNDM2OEMyNS45MjUgMTQuNTAzNiAyNS42NDE4IDE1LjQ0MjkgMjUuMDc1NCAxNi4yNTQ3QzI0LjUxODQgMTcuMDU3MSAyMy43Mzk2IDE3LjY4NDkgMjIuNzM4OSAxOC4xMzhDMjEuNzM4MyAxOC41ODE3IDIwLjU5MTMgMTguODAzNSAxOS4yOTggMTguODAzNUMxOC4wMDQ3IDE4LjgwMzUgMTYuODUzIDE4LjU4MTcgMTUuODQyOSAxOC4xMzhDMTQuODQyMyAxNy42ODQ5IDE0LjA1NCAxNy4wNTcxIDEzLjQ3ODIgMTYuMjU0N0MxMi45MTE4IDE1LjQ0MjkgMTIuNjI4NiAxNC41MDM2IDEyLjYyODYgMTMuNDM2OEMxMi42Mjg2IDEyLjE5MDcgMTIuOTExOCAxMS4xMzgyIDEzLjQ3ODIgMTAuMjc5MUMxNC4wNTQgOS40MjAwNiAxNC44NDIzIDguNzY4NyAxNS44NDI5IDguMzI1MDFDMTYuODQzNiA3Ljg4MTMzIDE3Ljk4NTggNy42NTk0OCAxOS4yNjk3IDcuNjU5NDhDMjAuNTcyNCA3LjY1OTQ4IDIxLjcyNDEgNy44ODEzMyAyMi43MjQ4IDguMzI1MDFDMjMuNzI1NCA4Ljc2ODcgMjQuNTA5IDkuNDIwMDYgMjUuMDc1NCAxMC4yNzkxQzI1LjY0MTggMTEuMTM4MiAyNS45MjUgMTIuMTkwNyAyNS45MjUgMTMuNDM2OFpNMjEuNTA3IDEzLjY2MzRDMjEuNTA3IDEzLjE0NDIgMjEuNDE3MyAxMi42OTU4IDIxLjIzOCAxMi4zMTgyQzIxLjA2OCAxMS45MzExIDIwLjgxNzkgMTEuNjMzOCAyMC40ODc1IDExLjQyNjFDMjAuMTU3MSAxMS4yMDkgMTkuNzUxMSAxMS4xMDA0IDE5LjI2OTcgMTEuMTAwNEMxOC44MDcxIDExLjEwMDQgMTguNDEwNiAxMS4yMDQyIDE4LjA4MDIgMTEuNDExOUMxNy43NDk4IDExLjYxMDIgMTcuNDk1IDExLjkwMjggMTcuMzE1NiAxMi4yODk5QzE3LjE0NTcgMTIuNjY3NSAxNy4wNjA3IDEzLjEyNTMgMTcuMDYwNyAxMy42NjM0QzE3LjA2MDcgMTQuMTkyIDE3LjE0NTcgMTQuNjU0NiAxNy4zMTU2IDE1LjA1MTFDMTcuNDk1IDE1LjQzODEgMTcuNzQ5OCAxNS43NDQ5IDE4LjA4MDIgMTUuOTcxNUMxOC40MjAxIDE2LjE4ODYgMTguODI2IDE2LjI5NzIgMTkuMjk4IDE2LjI5NzJDMTkuNzc5NSAxNi4yOTcyIDIwLjE4MDcgMTYuMTg4NiAyMC41MDE2IDE1Ljk3MTVDMjAuODMyIDE1Ljc0NDkgMjEuMDgyMiAxNS40MzgxIDIxLjI1MjEgMTUuMDUxMUMyMS40MjIgMTQuNjU0NiAyMS41MDcgMTQuMTkyIDIxLjUwNyAxMy42NjM0WiIgZmlsbD0iYmxhY2siLz4NCjwvc3ZnPg0K");

/***/ }),

/***/ 2973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzciIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzNyAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxjaXJjbGUgY3g9IjE4LjEwMzIiIGN5PSIxOC4xMDMyIiByPSIxOC4xMDMyIiBmaWxsPSIjRjlDMTJBIi8+DQo8cGF0aCBkPSJNMTUuMjA1OCAyNS4yNDY2SDE1LjQ4OUMxNi41Mjc0IDI1LjI0NjYgMTcuNDM4MyAyNS4xMjg2IDE4LjIyMTkgMjQuODkyNkMxOS4wMDU0IDI0LjY0NzEgMTkuNjYxNSAyNC4yODM3IDIwLjE5MDEgMjMuODAyMkMyMC43MjgyIDIzLjMxMTQgMjEuMTM0MSAyMi43MDI1IDIxLjQwNzkgMjEuOTc1NkMyMS42ODE3IDIxLjIzOTMgMjEuODE4NiAyMC4zNzA4IDIxLjgxODYgMTkuMzcwMVYxNS4yOTJDMjEuODE4NiAxNC41ODQgMjEuNzUyNSAxMy45NzA0IDIxLjYyMDMgMTMuNDUxMkMyMS40OTc2IDEyLjkyMjUgMjEuMzEzNSAxMi40ODM2IDIxLjA2ODEgMTIuMTM0M0MyMC44MjI2IDExLjc4NSAyMC41MzQ3IDExLjUyNTQgMjAuMjA0MyAxMS4zNTU1QzE5Ljg3MzkgMTEuMTg1NSAxOS41MTA0IDExLjEwMDYgMTkuMTE0IDExLjEwMDZDMTguNjk4NiAxMS4xMDA2IDE4LjMzMDQgMTEuMjA5MSAxOC4wMDk1IDExLjQyNjNDMTcuNjk3OSAxMS42NDM0IDE3LjQyODkgMTEuOTM2IDE3LjIwMjMgMTIuMzA0MkMxNi45NzU4IDEyLjY3MjQgMTYuODA1OSAxMy4wODc3IDE2LjY5MjYgMTMuNTUwM0MxNi41NzkzIDE0LjAxMjkgMTYuNTIyNyAxNC40ODQ5IDE2LjUyMjcgMTQuOTY2M0MxNi41MjI3IDE1LjQ4NTUgMTYuNTc5MyAxNS45NzE3IDE2LjY5MjYgMTYuNDI0OEMxNi44MTUzIDE2Ljg3NzkgMTYuOTg5OSAxNy4yNzQ0IDE3LjIxNjUgMTcuNjE0M0MxNy40NDMxIDE3Ljk1NDEgMTcuNzMxIDE4LjIyMzEgMTguMDgwMyAxOC40MjE0QzE4LjQyOTYgMTguNjEwMiAxOC44MzU1IDE4LjcwNDYgMTkuMjk4IDE4LjcwNDZDMTkuNzYwNiAxOC43MDQ2IDIwLjE2MTggMTguNjE5NiAyMC41MDE3IDE4LjQ0OTdDMjAuODUwOSAxOC4yNzk4IDIxLjE0MzYgMTguMDUzMiAyMS4zNzk2IDE3Ljc3QzIxLjYyNSAxNy40ODY4IDIxLjgwOTEgMTcuMTggMjEuOTMxOCAxNi44NDk2QzIyLjA1NDYgMTYuNTA5OCAyMi4xMTU5IDE2LjE3NDYgMjIuMTE1OSAxNS44NDQyTDIzLjQ3NTMgMTYuNzUwNUMyMy40NzUzIDE3LjM4MyAyMy4zMzM3IDE4LjAwNiAyMy4wNTA1IDE4LjYxOTZDMjIuNzc2NyAxOS4yMzMyIDIyLjM5NDQgMTkuNzkwMiAyMS45MDM1IDIwLjI5MDVDMjEuNDEyNiAyMC43OTA5IDIwLjg0MTUgMjEuMTkyMSAyMC4xOTAxIDIxLjQ5NDFDMTkuNTQ4MiAyMS43ODY4IDE4Ljg2MzggMjEuOTMzMSAxOC4xMzY5IDIxLjkzMzFDMTcuMTkyOSAyMS45MzMxIDE2LjM0MzMgMjEuNzYzMiAxNS41ODgxIDIxLjQyMzNDMTQuODQyMyAyMS4wODM1IDE0LjIwOTggMjAuNjA2OCAxMy42OTA2IDE5Ljk5MzJDMTMuMTcxNCAxOS4zNzAxIDEyLjc3NDkgMTguNjMzOCAxMi41MDEyIDE3Ljc4NDJDMTIuMjI3NCAxNi45MzQ2IDEyLjA5MDUgMTYgMTIuMDkwNSAxNC45ODA1QzEyLjA5MDUgMTMuOTc5OCAxMi4yNjA0IDEzLjA0MDUgMTIuNjAwMyAxMi4xNjI2QzEyLjk0MDEgMTEuMjc1MiAxMy40MjE2IDEwLjQ5NjQgMTQuMDQ0NiA5LjgyNjE3QzE0LjY2NzcgOS4xNTU5MiAxNS40MDg3IDguNjI3MjggMTYuMjY3OCA4LjI0MDIzQzE3LjEzNjMgNy44NTMxOSAxOC4wOTQ0IDcuNjU5NjcgMTkuMTQyMyA3LjY1OTY3QzIwLjE3MTMgNy42NTk2NyAyMS4xMTUzIDcuODU3OTEgMjEuOTc0MyA4LjI1NDM5QzIyLjgzMzQgOC42NDE0NCAyMy41ODM5IDkuMTk4NCAyNC4yMjU4IDkuOTI1MjlDMjQuODY3NyAxMC42NTIyIDI1LjM2MzMgMTEuNTM0OCAyNS43MTI2IDEyLjU3MzJDMjYuMDcxMyAxMy42MTE3IDI2LjI1MDcgMTQuNzgyMiAyNi4yNTA3IDE2LjA4NVYxNy42MTQzQzI2LjI1MDcgMTkuMDExNCAyNi4wOTAyIDIwLjI5NTIgMjUuNzY5MiAyMS40NjU4QzI1LjQ0ODMgMjIuNjM2NCAyNC45NzYzIDIzLjY3NDggMjQuMzUzMiAyNC41ODExQzIzLjczOTYgMjUuNDg3MyAyMi45OTM4IDI2LjI1NjcgMjIuMTE1OSAyNi44ODkyQzIxLjI0NzQgMjcuNTIxNiAyMC4yNjA5IDI4LjAwMzEgMTkuMTU2NCAyOC4zMzM1QzE4LjA2MTQgMjguNjU0NSAxNi44NjI1IDI4LjgxNDkgMTUuNTU5OCAyOC44MTQ5SDE1LjIwNThWMjUuMjQ2NloiIGZpbGw9ImJsYWNrIi8+DQo8L3N2Zz4NCg==");

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

/***/ 72615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRCRDFDMjgwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0UwQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGZkZTk4ZTUtMTdkMS00ZjdhLWE1NDYtMWVjNjk1MWNkMjFkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTE2ZmVkZDktZDVhNy1kYzQ3LWIzMzYtNzY5N2JiY2UyZDJjIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GR8qLwAAAvVJREFUeNrMWE1IVFEUPmMJ5ZRkQmZFJLUInHIpmNXUxsxKF1JBEQZCVlYUWBlpZJAQtJAIFVpIRrQoCGmsiGiwsiKSFtrKGKygSKQfEYKS+k5zb29+muc9M28eHvh4982797xvzj33/DzPxD2aNjJTOH8BsBnwA4XAMiAb+A2MAyFgCAgCd4HPEuUeQ8usBY4DmwR/4CfQC1wA+k0WZEzxfDkQAPqALUJLZgKVwFOgByhIhcwu4LXallRlq9K1PRkyZ4FrwBwH/ZN96wZwWkKmBWhO04HxAOeAkyZkdgNNLpzi88BOOzIrgA6XQgpbqDPWqSNPxyXAa6LpGGZ2BuznvGgn8hVM6UNtwLZYy/hVDHFb+JStibVMg0TDw1fWuBrhMDc7fo53lrG6BhWL/kbgfFzfAzNMV3sjbOhAbuNIvYRTB29ThYRIGiRTuwiTWTcNErZfk1klWTXxwxqvx8qWrvC2FdWEx4OhpMgUap8Zw3W+6Sp+WfF++zmttUSHq0VkRrk8YcvMk6zKywmfIJZ98LbuRqLLRxAxF1pzGq8QPR8SkZmrLTNpUErESegjwmd+9PaV1BENfwrfn0Cwb64xVsebP5tJfEtmkyOJ6LhydId1fysoUjeuHXjEsRohyxprC5kaWpMZlJ4m3qL/yYdRa8z+JJA3mkyfZNVFlEdVcNoHL6N/53t2XC2lq0VkgtqBF+H6ziQK8wurmqLjzMqlRGPfiW4+jqhFcLL6O4zz0y9gMacD3R0ETGvdLjQgB9sSP2cit1vjHdxGelTh/q9V2cjJ2DhCfQX7Z0SPBiyLcOypLCUqKxZlbN0GPYntm3hU5nJOCqgWKK7srOfD4iIRji2HEtXAw8ABF8nU6fiSqDu4ynnOBSLcCl036ZtOqd4mXXImkf4MG+Z7HfYh1rVHNYniXhulEhUB9x0g0qt0dafyFeKtqk83qGM4KSDAc++okrJC6XLk+4wWTh3lnAkAH4BkQDnq2RdVAeiPRWwNUe7+I8AARDiqkQLMxlkAAAAASUVORK5CYII=");

/***/ }),

/***/ 53612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LjE0ZWNiNDJmMmMsIDIwMjMvMDEvMTMtMTI6MjU6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzViZDMyNzctMzBhNS00ZGFjLWEyOTItYzZlNDYwMGIxNzhjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI5Q0REM0REQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI5Q0REM0RDQjU2QTExRURBNTlDQzcxMUE1QURGQ0YzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4wIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YjQ0MDY0NmQtZDc5OS00MzcxLThkYTUtMTUzMWUyMTUyMTEzIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2YxZjhkZDgtYTkwMy0yZTQ3LTk5ZWYtZWExODlhMGIyYzIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iFZGSwAAAxtJREFUeNrMWF1IVEEUPmsJlREFGakRLfm2bj5E0IObm9HfWhQlEvSDQVBk9bZRUUkKBVEP1kMJhaIVPRSIuOoS0SYVWgRBWhCG5UPGFvQjC0JJfYed2Xt322v3tNelAx87y9xz7jdz5vzMdcV66L+R6cLnFwABwA94gCXAHOAXMAYMA4NABOgGohLjLps74wOOAhsEC/gBdAHngSd2FHL+Mr8UCAG9wCbhTuYCW4DHQAfgzoTMTuCFckumslnZqv4XMmeAG8BsB88nn63bwEkJmXrg9BQFjAtoAI7ZIbMLOJWFKD4L7JiMTDFwNUsphXeoKfVQm8lcBvIkFodHiS7dISqtgSKCPhAkakF2+fTV9hlqTJdnOIk9kBC594xoq4VDixdi2SC20mPLVJkK/8TOBCVE+gaTiZR7ifZXxkmwDH1EGM6ybS5oLgcFwHoJmfoWY3xuH9GRKuM/u6loPlGJ27a5gCozUSaDNdE0ya48fBkfV/mSibDUbBQf5lxVZlrZTaskmk9fm/LAOseiy6/d5JVovRs1HdRFxm59+ExUCPd4Uc3yZojJeDSZxRKtplCKw4OG23QkXaglWrtCRMatQ3vCRvVOCOcT84s5ctLJQDPeUGCbzDgwMydTZ9+/SMS5KtoeD28tbWG5LSbzTaKgcwnLzTojsfE5Ob7bmLsbEfEY02TeS7TWLLeey59rjK3cZ1VZNJkBiVbZMmP8ZiR5LjaefgdtyCtNplei5Ss1dWDNyQTC/cZ4u19EJqKjqRC/I5IszCm/ttGoS9UVRN9jODPXjGf6r9guCT+BIi4HumqHJL0u78b1zuSXm6W9QZRnOlTjnmghKjhKpaHIbUR3HxSfY2n58cjaVi4qkvoa9Cj13tQjrd4OSEhdgf7o9A6xB7JIhHPLYau2cwg4mEUyB3R+sbodtHK/lAUifBW6ZefedELdbaZK6qzs50zCfK/DZ4ht7VGXRPFdmztdzrdhB4h0KVttmXyFeKv609UqDCcEBPjZTtVSVipbjnyf0cKlg1tupDYqUV3iPDX3RXUA+mMR74aodv8WYACKXLbvvXLw3AAAAABJRU5ErkJggg==");

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