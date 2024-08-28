"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[21811],{

/***/ 27116:
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
	id: 'agent-list',
	title: 'Kubernetes Agent List',
	description: 'It provides the list of Kubernetes agents.',
	keywords: [
		'Kubernetes',
		'Kubernetes Monitoring',
		'Management',
		'Agent List'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/agent-list",
  "title": "Kubernetes Agent List",
  "description": "It provides the list of Kubernetes agents.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/kubernetes/agent-list.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/agent-list",
  "permalink": "/en/kubernetes/agent-list",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/agent-list.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-list",
    "title": "Kubernetes Agent List",
    "description": "It provides the list of Kubernetes agents.",
    "keywords": [
      "Kubernetes",
      "Kubernetes Monitoring",
      "Management",
      "Agent List"
    ],
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "Kubernetes agent",
    "permalink": "/en/kubernetes/agent-manage"
  },
  "next": {
    "title": "Agent Update",
    "permalink": "/en/kubernetes/agent-update"
  }
};
const assets = {

};

/*

Refresh

Metric

Display Detail

Select Column

Download

*/


const toc = [{
  "value": "Refresh",
  "id": "refresh",
  "level": 4
}, {
  "value": "Select Column",
  "id": "select-column",
  "level": 4
}, {
  "value": "Download",
  "id": "download",
  "level": 4
}, {
  "value": "Display Detail",
  "id": "display-detail",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    em: "em",
    h4: "h4",
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
      children: ["Home > Select Cluster Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Management"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Kubernetes Agent List"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can go to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Kubernetes Agent List"
        })
      }), " under ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "Management"
        })
      }), " for the cluster project (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "my",
        children: "CP"
      }), ")."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "k8s-agent-list.png",
      desc: "Kubernetes agent list"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["You can see the installation progress of the Kubernetes agent. If some agents are not installed (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "UNINSTALLED"
            })
          }), ") or inactive (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "INACTIVE"
            })
          }), "), data collection may be distorted."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "UNINSTALLED"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "ACITVE"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "INACTIVE"
              })
            }), " in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "State"
              })
            }), " column"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["You can check the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "CPU Limit"
            })
          }), " assigned to the master agent and the installed ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: "node agent count"
            })
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["For example, if the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "node agent count"
              })
            }), " is 50 or more, it is recommended to set the master agent's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "CPU Limit"
              })
            }), " to 500 millicores or more."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "You can see the CPU and memory allocated to the node where the agent has been installed."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["e.g. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "CapacityCpu"
              })
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "CapacityMemory"
              })
            }), " under the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Node Info"
              })
            }), " column"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "You can see the nodes on which the agents are not installed."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "You can see the key data of the agent."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "You can find the guide to the node agent version."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "e.g. Mismatch notification upon version discrepancy between nodes"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Master agent's resource allocation"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Because the amount of data collected and processed by the WhaTap agent differs depending on the size of the user's Kubernetes environment (or node count), sufficient resource allocation to the master agent is required. For example, if ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "node agent count"
          })
        }), " is so great, it is recommended to increase the master agent's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "CPU limit"
          })
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "refresh",
        children: "Refresh"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Refresh icon",
          src: (__webpack_require__(12422)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Refresh"
          })
        }), " icon is selected at the top, you can update the data based on the current time."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "select-column",
        children: "Select Column"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["When using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Select column"
          })
        }), " option, you can select a desired agent to view the agent list."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "The selected column list is kept even if you re-enter the menu."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If you select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Reset"
              })
            }), ", the predefined default key metric columns are selected. In this case, the column selection history is deleted."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["After selecting a column, you can click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Apply"
              })
            }), " at the lower right to apply the selected values."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "download",
        children: "Download"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "CSV download icon",
          src: (__webpack_require__(91002)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "Download"
          })
        }), " icon is selected, you can download the data in the CSV format by setting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "range"
          })
        }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
            children: "display option"
          })
        }), "."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "display-detail",
        children: "Display Detail"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Magnifying glass icon",
              src: (__webpack_require__(6971)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Display Detail"
              })
            }), " icon is selected under the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Name"
              })
            }), " column of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Agent Info"
              })
            }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Agent Log"
              })
            }), " of the agent appears."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["If the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Detail icon",
              src: (__webpack_require__(83533)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "Node Details"
              })
            }), " icon is selected under the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "OnodeName"
              })
            }), " column, the detail page of the node appears."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["For more information about ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                  children: "Node details"
                })
              }), ", see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "https://docs.whatap.io/kubernetes/node-details",
                children: "the following"
              }), "."]
            })]
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

/***/ 83533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRIMjBDMjEuMDM1MyA0IDIxLjg5MzQgNC43OTcyMyAyMS45OTA4IDUuODA4MUwyMiA2VjkuMzMzMzNIMjBWNkg0VjE4SDE0VjIwSDRDMi45NjQ3MSAyMCAyLjEwNjU3IDE5LjIwMjggMi4wMDkyIDE4LjE5MTlMMiAxOFY2QzIgNC45NjQ3MSAyLjc5NzIzIDQuMTA2NTcgMy44MDgxIDQuMDA5Mkw0IDRaTTIwLjQ1NjcgMTkuMjFMMTcuNTQ2NyAxNi4zQzE2Ljg1NjcgMTYuNzQgMTYuMDM2NyAxNyAxNS4xNTY3IDE3QzEyLjY3NjcgMTcgMTAuNjY2NyAxNC45OSAxMC42NjY3IDEyLjVDMTAuNjY2NyAxMC4wMSAxMi42NzY3IDggMTUuMTY2NyA4QzE3LjY1NjcgOCAxOS42NjY3IDEwLjAxIDE5LjY2NjcgMTIuNUMxOS42NjY3IDEzLjM4IDE5LjQwNjcgMTQuMTkgMTguOTY2NyAxNC44OUwyMS44NzY3IDE3Ljc5TDIwLjQ1NjcgMTkuMjFaTTE1LjE2NjcgMTBDMTMuNzg2NyAxMCAxMi42NjY3IDExLjEyIDEyLjY2NjcgMTIuNUMxMi42NjY3IDEzLjg4IDEzLjc4NjcgMTUgMTUuMTY2NyAxNUMxNi41NDY3IDE1IDE3LjY2NjcgMTMuODggMTcuNjY2NyAxMi41QzE3LjY2NjcgMTEuMTIgMTYuNTQ2NyAxMCAxNS4xNjY3IDEwWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 12422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi41IDE5Ljg5MzNMMTIgMjNWMjAuOTkwOUM3LjAyOTQ0IDIwLjk5MDkgMyAxNi45NDMgMyAxMS45NDk4QzMgMTAuMTQ0IDMuNTI3MDEgOC40NjE4MiA0LjQzNDk0IDcuMDUwMDZMNi4wMzc4IDguMjYzNDJDNS4zNzk3IDkuMzM1MjggNSAxMC41OTggNSAxMS45NDk4QzUgMTUuODMzNCA4LjEzNDAxIDE4Ljk4MTcgMTIgMTguOTgxN1YxNi45NzI2TDE2LjUgMTkuODkzM1pNNy41IDMuOTIwN0wxMiA3LjAyNzRWNC45MTc4MUMxNS44NjYgNC45MTc4MSAxOSA4LjA2NjEzIDE5IDExLjk0OThDMTkgMTMuMzI5NCAxOC42MDQ1IDE0LjYxNjMgMTcuOTIxMSAxNS43MDIyTDE5LjUyMjggMTYuOTE0NkMyMC40NTY2IDE1LjQ4OTYgMjEgMTMuNzgzNCAyMSAxMS45NDk4QzIxIDYuOTU2NTEgMTYuOTcwNiAyLjkwODY4IDEyIDIuOTA4NjhWMUw3LjUgMy45MjA3WiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 6971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4wNTEzIDE0LjY2MzZDMTguNDQ3OSAxMS41ODQxIDE4LjIzMSA3LjEyOTcgMTUuNDAwNCA0LjI5OTE1QzEyLjMzNDkgMS4yMzM2MiA3LjM2NDY4IDEuMjMzNjIgNC4yOTkxNSA0LjI5OTE1QzEuMjMzNjIgNy4zNjQ2OCAxLjIzMzYyIDEyLjMzNDkgNC4yOTkxNSAxNS40MDA0QzcuMTI5NyAxOC4yMzEgMTEuNTg0MSAxOC40NDc5IDE0LjY2MzYgMTYuMDUxM0wxOS42MTIzIDIxTDIxIDE5LjYxMjNMMTYuMDUxMyAxNC42NjM2Wk0xNC4wMTI4IDE0LjAxMjhDMTEuNzEzNiAxNi4zMTE5IDcuOTg1OTUgMTYuMzExOSA1LjY4NjggMTQuMDEyOEMzLjM4NzY2IDExLjcxMzYgMy4zODc2NiA3Ljk4NTk1IDUuNjg2OCA1LjY4NjhDNy45ODU5NSAzLjM4NzY2IDExLjcxMzYgMy4zODc2NiAxNC4wMTI4IDUuNjg2ODFDMTYuMzExOSA3Ljk4NTk1IDE2LjMxMTkgMTEuNzEzNiAxNC4wMTI4IDE0LjAxMjhaIiBmaWxsPSIjNzU3NTc1Ii8+Cjwvc3ZnPgo=");

/***/ }),

/***/ 91002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICA8IS0tIDx0aXRsZT5pYy1jc3YtZG93bmxvYWQ8L3RpdGxlPiAtLT4KICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU5LjAwMDAwMCwgLTMxOTEuMDAwMDAwKSIgZmlsbD0iIzc1NzU3NSI+CiAgICAgICAgICA8ZyBpZD0iYXBwbGljYXRpb24taWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMjM0Ni4wMDAwMDApIj4KICAgICAgICAgICAgICA8ZyBpZD0iaWMtY3N2LWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTkuMDAwMDAwLCA4NDUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzLjAwMDAwMCkiIGlkPSJDb21iaW5lZC1TaGFwZSI+CiAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjQsMCBMMjQsMTggTDAsMTggTDAsMCBMMjQsMCBaIE0yMiwyIEwyLDIgTDIsMTYgTDIyLDE2IEwyMiwyIFogTTYuNzQ4LDQuOCBDNy4yMzkzMzU3OSw0LjggNy42NzAxNjQ4Miw0Ljg4NDMzMjQ5IDguMDQwNSw1LjA1MyBDOC40MTA4MzUxOSw1LjIyMTY2NzUxIDguNzIwNjY1NDIsNS40NTQ0OTg1MiA4Ljk3LDUuNzUxNSBDOS4yMTkzMzQ1OCw2LjA0ODUwMTQ5IDkuNDA0NDk5NCw2LjM5NjgzMTM0IDkuNTI1NSw2Ljc5NjUgQzkuNjQ2NTAwNjEsNy4xOTYxNjg2NyA5LjcwMzMzMzM3LDcuNjI2OTk3NjkgOS42OTYsOC4wODkgTDcuOTgsOC4wODkgQzcuOTY1MzMzMjYsNy43MzY5OTgyNCA3LjkzMDUwMDI4LDcuNDQ3MzM0NDcgNy44NzU1LDcuMjIgQzcuODIwNDk5NzMsNi45OTI2NjU1MyA3Ljc0NTMzMzgxLDYuODEzMDAwNjYgNy42NSw2LjY4MSBDNy41NTQ2NjYxOSw2LjU0ODk5OTM0IDcuNDQyODMzOTgsNi40NTkxNjY5MSA3LjMxNDUsNi40MTE1IEM3LjE4NjE2NjAzLDYuMzYzODMzMSA3LjA0MTMzNDE0LDYuMzQgNi44OCw2LjM0IEM2LjY4OTMzMjM4LDYuMzQgNi41MDk2Njc1MSw2LjM4NTgzMjg4IDYuMzQxLDYuNDc3NSBDNi4xNzIzMzI0OSw2LjU2OTE2NzEzIDYuMDI3NTAwNjEsNi43MTU4MzIzMyA1LjkwNjUsNi45MTc1IEM1Ljc4NTQ5OTQsNy4xMTkxNjc2OCA1LjY5MDE2NzAyLDcuMzg0OTk4MzUgNS42MjA1LDcuNzE1IEM1LjU1MDgzMjk5LDguMDQ1MDAxNjUgNS41MTYsOC40NDQ2NjQzMiA1LjUxNiw4LjkxNCBDNS41MTYsOS4zOTA2NjkwNSA1LjU1MDgzMjk5LDkuNzkyMTY1MDQgNS42MjA1LDEwLjExODUgQzUuNjkwMTY3MDIsMTAuNDQ0ODM1IDUuNzg1NDk5NCwxMC43MDg4MzIzIDUuOTA2NSwxMC45MTA1IEM2LjAyNzUwMDYxLDExLjExMjE2NzcgNi4xNzIzMzI0OSwxMS4yNTg4MzI5IDYuMzQxLDExLjM1MDUgQzYuNTA5NjY3NTEsMTEuNDQyMTY3MSA2LjY4OTMzMjM4LDExLjQ4OCA2Ljg4LDExLjQ4OCBDNy4xMDAwMDExLDExLjQ4OCA3LjI3NzgzMjY2LDExLjQ0MDMzMzggNy40MTM1LDExLjM0NSBDNy41NDkxNjczNSwxMS4yNDk2NjYyIDcuNjU3MzMyOTMsMTEuMTIzMTY3NSA3LjczOCwxMC45NjU1IEM3LjgxODY2NzA3LDEwLjgwNzgzMjUgNy44NzU0OTk4NCwxMC42MjgxNjc3IDcuOTA4NSwxMC40MjY1IEM3Ljk0MTUwMDE3LDEwLjIyNDgzMjMgNy45NjUzMzMyNiwxMC4wMTc2Njc3IDcuOTgsOS44MDUgTDkuNjk2LDkuODA1IEM5LjY5NiwxMC4yNTk2Njg5IDkuNjMxODMzOTgsMTAuNjgxMzMxNCA5LjUwMzUsMTEuMDcgQzkuMzc1MTY2MDMsMTEuNDU4NjY4NiA5LjE4NjMzNDU4LDExLjc5OTY2NTIgOC45MzcsMTIuMDkzIEM4LjY4NzY2NTQyLDEyLjM4NjMzNDggOC4zNzk2Njg1LDEyLjYxNTQ5OTIgOC4wMTMsMTIuNzgwNSBDNy42NDYzMzE1LDEyLjk0NTUwMDggNy4yMjQ2NjkwNSwxMy4wMjggNi43NDgsMTMuMDI4IEM2LjMwMDY2NDQzLDEzLjAyOCA1Ljg5NTUwMTgyLDEyLjk0MzY2NzUgNS41MzI1LDEyLjc3NSBDNS4xNjk0OTgxOSwxMi42MDYzMzI1IDQuODU5NjY3OTUsMTIuMzUxNTAxNyA0LjYwMywxMi4wMTA1IEM0LjM0NjMzMjA1LDExLjY2OTQ5ODMgNC4xNDgzMzQwMywxMS4yNDIzMzU5IDQuMDA5LDEwLjcyOSBDMy44Njk2NjU5NywxMC4yMTU2NjQxIDMuOCw5LjYxMDY3MDE1IDMuOCw4LjkxNCBDMy44LDguMjI0NjYzMjIgMy44Njk2NjU5Nyw3LjYyMTUwMjU5IDQuMDA5LDcuMTA0NSBDNC4xNDgzMzQwMyw2LjU4NzQ5NzQyIDQuMzQ2MzMyMDUsNi4xNTg1MDE3MSA0LjYwMyw1LjgxNzUgQzQuODU5NjY3OTUsNS40NzY0OTgzIDUuMTY5NDk4MTksNS4yMjE2Njc1MSA1LjUzMjUsNS4wNTMgQzUuODk1NTAxODIsNC44ODQzMzI0OSA2LjMwMDY2NDQzLDQuOCA2Ljc0OCw0LjggWiBNMTIuNDI3NjY2Nyw0LjggQzEzLjE4MzAwMzgsNC44IDEzLjc3MTQ5NzksNC45ODE0OTgxOSAxNC4xOTMxNjY3LDUuMzQ0NSBDMTQuNjE0ODM1NCw1LjcwNzUwMTgyIDE0Ljg4Nzk5OTQsNi4yODEzMjk0MSAxNS4wMTI2NjY3LDcuMDY2IEwxMy4zODQ2NjY3LDcuMDY2IEMxMy4zNjk5OTk5LDYuNzk0NjY1MzEgMTMuMjg1NjY3NCw2LjU4MDE2NzQ2IDEzLjEzMTY2NjcsNi40MjI1IEMxMi45Nzc2NjU5LDYuMjY0ODMyNTUgMTIuNzY1MDAxNCw2LjE4NiAxMi40OTM2NjY3LDYuMTg2IEMxMi4yMjk2NjUzLDYuMTg2IDEyLjAyMjUwMDgsNi4yNzAzMzI0OSAxMS44NzIxNjY3LDYuNDM5IEMxMS43MjE4MzI2LDYuNjA3NjY3NTEgMTEuNjQ2NjY2Nyw2LjgxMjk5ODc5IDExLjY0NjY2NjcsNy4wNTUgQzExLjY0NjY2NjcsNy4yODk2Njc4NCAxMS43MzI4MzI1LDcuNDcxMTY2MDMgMTEuOTA1MTY2Nyw3LjU5OTUgQzEyLjA3NzUwMDksNy43Mjc4MzM5OCAxMi4yOTU2NjUzLDcuODQxNDk5NTEgMTIuNTU5NjY2Nyw3Ljk0MDUgQzEyLjgyMzY2OCw4LjAzOTUwMDUgMTMuMTA1OTk4NSw4LjE0MDMzMjgyIDEzLjQwNjY2NjcsOC4yNDMgQzEzLjcwNzMzNDgsOC4zNDU2NjcxOCAxMy45ODk2NjUzLDguNDkwNDk5MDcgMTQuMjUzNjY2Nyw4LjY3NzUgQzE0LjUxNzY2OCw4Ljg2NDUwMDk0IDE0LjczNTgzMjUsOS4xMTE5OTg0NiAxNC45MDgxNjY3LDkuNDIgQzE1LjA4MDUwMDksOS43MjgwMDE1NCAxNS4xNjY2NjY3LDEwLjEzMTMzMDggMTUuMTY2NjY2NywxMC42MyBDMTUuMTY2NjY2NywxMS4wMDQwMDE5IDE1LjA5ODgzNCwxMS4zMzc2NjUyIDE0Ljk2MzE2NjcsMTEuNjMxIEMxNC44Mjc0OTkzLDExLjkyNDMzNDggMTQuNjQwNTAxMiwxMi4xNzU0OTkgMTQuNDAyMTY2NywxMi4zODQ1IEMxNC4xNjM4MzIxLDEyLjU5MzUwMSAxMy44Nzk2NjgzLDEyLjc1Mjk5OTUgMTMuNTQ5NjY2NywxMi44NjMgQzEzLjIxOTY2NSwxMi45NzMwMDA2IDEyLjg2MDMzNTMsMTMuMDI4IDEyLjQ3MTY2NjcsMTMuMDI4IEMxMS41NDAzMjg3LDEzLjAyOCAxMC44NjIwMDIxLDEyLjc5NTE2OSAxMC40MzY2NjY3LDEyLjMyOTUgQzEwLjAxMTMzMTIsMTEuODYzODMxIDkuNzk4NjY2NjcsMTEuMjE2NjcwOCA5Ljc5ODY2NjY3LDEwLjM4OCBMMTEuNDcwNjY2NywxMC4zODggQzExLjQ4NTMzMzQsMTAuNzg0MDAyIDExLjU2OTY2NTksMTEuMDc3MzMyNCAxMS43MjM2NjY3LDExLjI2OCBDMTEuODc3NjY3NCwxMS40NTg2Njc2IDEyLjEzNzk5ODIsMTEuNTU0IDEyLjUwNDY2NjcsMTEuNTU0IEMxMi44MTI2NjgyLDExLjU1NCAxMy4wNDczMzI1LDExLjQ2NzgzNDIgMTMuMjA4NjY2NywxMS4yOTU1IEMxMy4zNzAwMDA4LDExLjEyMzE2NTggMTMuNDUwNjY2NywxMC44OTQwMDE0IDEzLjQ1MDY2NjcsMTAuNjA4IEMxMy40NTA2NjY3LDEwLjM4Nzk5ODkgMTMuMzY0NTAwOSwxMC4yMTIwMDA3IDEzLjE5MjE2NjcsMTAuMDggQzEzLjAxOTgzMjUsOS45NDc5OTkzNCAxMi44MDE2NjgsOS44MzI1MDA1IDEyLjUzNzY2NjcsOS43MzM1IEMxMi4yNzM2NjUzLDkuNjM0NDk5NTEgMTEuOTkxMzM0OCw5LjUzMzY2NzE4IDExLjY5MDY2NjcsOS40MzEgQzExLjM4OTk5ODUsOS4zMjgzMzI4MiAxMS4xMDc2NjgsOS4xOTA4MzQyIDEwLjg0MzY2NjcsOS4wMTg1IEMxMC41Nzk2NjUzLDguODQ2MTY1ODEgMTAuMzYxNTAwOSw4LjYyMjUwMTM4IDEwLjE4OTE2NjcsOC4zNDc1IEMxMC4wMTY4MzI1LDguMDcyNDk4NjMgOS45MzA2NjY2Nyw3LjcxMTMzNTU3IDkuOTMwNjY2NjcsNy4yNjQgQzkuOTMwNjY2NjcsNi44ODk5OTgxMyA5Ljk4NzQ5OTQzLDYuNTUwODM0ODYgMTAuMTAxMTY2Nyw2LjI0NjUgQzEwLjIxNDgzMzksNS45NDIxNjUxNSAxMC4zNzk4MzIzLDUuNjgxODM0NDIgMTAuNTk2MTY2Nyw1LjQ2NTUgQzEwLjgxMjUwMTEsNS4yNDkxNjU1OSAxMS4wNzQ2NjUxLDUuMDg0MTY3MjQgMTEuMzgyNjY2Nyw0Ljk3MDUgQzExLjY5MDY2ODIsNC44NTY4MzI3NyAxMi4wMzg5OTgxLDQuOCAxMi40Mjc2NjY3LDQuOCBaIE0xNi41MzQzMzMzLDQuOTMyIEwxNy44NzYzMzMzLDEwLjQxIEwxNy44OTgzMzMzLDEwLjQxIEwxOS4yNjIzMzMzLDQuOTMyIEwyMC44MjQzMzMzLDQuOTMyIEwxOC42MDIzMzMzLDEyLjg5NiBMMTcuMTI4MzMzMywxMi44OTYgTDE0LjkwNjMzMzMsNC45MzIgTDE2LjUzNDMzMzMsNC45MzIgWiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgPC9nPgogICAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=");

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