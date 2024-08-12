"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[67160],{

/***/ 365:
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





const toc = [{
  "value": "Checking the access key",
  "id": "check-accesskey",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "Checking the access key"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "access key"
      }), " is the unique ID to enable the WhaTap service."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["In the installation guide section, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), ". After the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "access key"
      }), " has been issued automatically, proceed to the next step."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "access key"
          }), " cannot be duplicated for other projects and separate access keys are required also in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "namespace project"
          }), "."]
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["After a project has been created, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " page appears automatically. If the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " does not appear, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " on the left of the screen."]
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

/***/ 88116:
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





const toc = [{
  "value": "Creating a project",
  "id": "create-project",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-project",
      children: "Creating a project"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Create a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "feature project"
        }), " (", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          class: "Features",
          children: "Feature"
        }), ") before installing the agent."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
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
            children: ["On the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07073",
              className: "uitext"
            }), " screen, select the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "feature product"
            }), " to install in the project."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Configure the settings for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "Create Project"
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
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Create a project before installing the agent."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
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
            children: ["Configure the settings for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "Create Project"
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
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
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
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["To group multiple projects for management, select a group from ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), " or add a group. For more information about grouping, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "../project/group",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["To add a project with an organization selected, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "group_of_organization",
              className: "uitext"
            }), " must be set."]
          }), "\n"]
        }), "\n"]
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

/***/ 15924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_agent_contentTitle),
  "default": () => (/* binding */ install_agent_MDXContent),
  frontMatter: () => (/* binding */ install_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/getting-started/_create-project-v2.mdx
var _create_project_v2 = __webpack_require__(88116);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/getting-started/_accesskey-v2.mdx
var _accesskey_v2 = __webpack_require__(365);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_go-docker-setting-library.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Configuring the Go library",
  "id": "configuring-the-go-library",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "configuring-the-go-library",
      children: "Configuring the Go library"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Add the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api",
        children: "github.com/whatap/go-api"
      }), " package to the Go application source code."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "go get github.com/whatap/go-api\n"
      })
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure for initialization and shutdown with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Init()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Shutdown()"
      }), " functions. Set the startup and end for transactions with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Start()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.End()"
      }), " functions."]
    }), (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        metastring: "title='Go'",
        children: "import \"github.com/whatap/go-api/trace\"\r\n\r\nfunc main(){\r\n    trace.Init(nil)\r\n    //It must be executed before closing the app.    \r\n    defer trace.Shutdown()    \r\n\r\n    ctx, _ := trace.Start(context.Bacground(), \"Start Tx\")\r\n\r\n    ...\r\n\r\n    trace.End(ctx, err)\r\n}\n"
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "golang",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the library configuration, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "api-guide",
            children: "the following"
          }), "."]
        })
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the library configuration, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../golang/api-guide",
            children: "the following"
          }), "."]
        })
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/golang/install-agent.mdx


const install_agent_frontMatter = {
	id: 'install-agent',
	title: 'Agent Installation',
	description: 'The following explains how to install an agent on the application server in the Go environment.',
	tags: [
		'Go',
		'Agent Installation'
	]
};
const install_agent_contentTitle = undefined;
const metadata = {
  "id": "golang/install-agent",
  "title": "Agent Installation",
  "description": "The following explains how to install an agent on the application server in the Go environment.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/golang/install-agent.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/install-agent",
  "permalink": "/en/golang/install-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/install-agent.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Go",
      "permalink": "/en/tags/go"
    },
    {
      "inline": true,
      "label": "Agent Installation",
      "permalink": "/en/tags/agent-installation"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-agent",
    "title": "Agent Installation",
    "description": "The following explains how to install an agent on the application server in the Go environment.",
    "tags": [
      "Go",
      "Agent Installation"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "Support Environment",
    "permalink": "/en/golang/supported-spec"
  },
  "next": {
    "title": "Installing the Docker environment",
    "permalink": "/en/golang/install-agent-docker"
  }
};
const assets = {

};

/*Go 라이브러리 설정하기*/





const install_agent_toc = [..._create_project_v2/* toc */.RM, ..._accesskey_v2/* toc */.RM, {
  "value": "Download agent",
  "id": "download-agent",
  "level": 2
}, {
  "value": "Agent setting",
  "id": "set-agent",
  "level": 2
}, {
  "value": "Default settings",
  "id": "default-settings",
  "level": 3
}, {
  "value": "Setting the <code>WHATAP_HOME</code> variable",
  "id": "setting-the-whatap_home-variable",
  "level": 3
}, {
  "value": "Setting the agent names for each process",
  "id": "duplicate_appname",
  "level": 3
}, ...toc, {
  "value": "Starting the monitoring",
  "id": "starting-the-monitoring",
  "level": 2
}];
function install_agent_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Filetree, FiletreeItem, ImgLang, TabItem, Tabs} = _components;
  if (!Filetree) install_agent_missingMdxReference("Filetree", true);
  if (!FiletreeItem) install_agent_missingMdxReference("FiletreeItem", true);
  if (!ImgLang) install_agent_missingMdxReference("ImgLang", true);
  if (!TabItem) install_agent_missingMdxReference("TabItem", true);
  if (!Tabs) install_agent_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "An agent must be installed on the same server to forward data from the monitored application server through TCP communication and to transfer the data to the WhaTap collection server. The agent can be installed using the package."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The agent works as the default ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), " TCP server. It receives data from the Go application and forwards the data to the WhaTap collection server via the outbound 6600 port."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install the WhaTap repository."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Install the whatap-agent Linux package (yum, apt-get)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Run the whatap-agent service."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "golang_system.png",
      desc: "Go Monitoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To use the WhaTap monitoring service, after ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.whatap.io/en/signup/",
        children: "Sign up"
      }), ", create a project and then install the agent to the target server."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_create_project_v2/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(_accesskey_v2/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "download-agent",
        children: "Download agent"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Once you have received the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "access key"
        }), ", download the agent with the following command."]
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## Register the package repository\r\n$ sudo rpm -Uvh https://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm\r\n\r\n## Install the package\r\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## Register the package repository\r\n$ wget https://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -\r\n$ wget https://repo.whatap.io/debian/whatap-repo_1.0_all.deb\r\n$ sudo dpkg -i whatap-repo_1.0_all.deb\r\n$ sudo apt-get update\r\n\r\n## Install the package\r\n$ sudo apt-get install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## Register the package repository\r\n$ sudo rpm --import https://repo.whatap.io/centos/release.gpg\r\n$ echo \"[whatap]\" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\r\n$ echo \"name=whatap packages for enterprise linux\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\r\n$ echo \"baseurl=https://repo.whatap.io/centos/latest/\\$basearch\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\r\n$ echo \"enabled=1\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\r\n$ echo \"gpgcheck=0\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\r\n\r\n## Install the package\r\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "apl",
          label: "Alpine Linux",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["[whatap-agent.tar.gz]After downloading the file (", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
              children: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz"
            }), "), unzip the file based on the \"/\" directory. Create the monitoring file in the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "/usr/whatap/agent"
            }), " path."]
          }), (0,jsx_runtime.jsxs)(Tabs, {
            children: [(0,jsx_runtime.jsx)(TabItem, {
              value: "x64",
              label: "x64",
              default: true,
              children: (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-docker",
                  metastring: "title='x64'",
                  children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\r\ntar -xvzf whatap-agent.tar.gz -C /\n"
                })
              })
            }), (0,jsx_runtime.jsx)(TabItem, {
              value: "aarch64",
              label: "AArch64",
              default: true,
              children: (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-docker",
                  metastring: "title='AArch64'",
                  children: "wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/aarch64/whatap-agent.tar.gz\r\ntar -xvzf whatap-agent.tar.gz -C /\n"
                })
              })
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The agent consists of the tracers to collect monitoring information, the agents to transmit the collected information to the server, and the installation script files to dynamically apply the tracers and agents to the server. For more information about the agent files, see the following."
      }), (0,jsx_runtime.jsxs)(Filetree, {
        name: "whatap",
        children: [(0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap-agent",
          type: "file",
          children: "This program transmits the data passed from the agent and tracer to UDP, to the collection server."
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap_agent",
          type: "file",
          children: "Service execution file."
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "whatap.conf",
          type: "file",
          children: " Enter the configuration data, collection server IP, and access key in this file."
        }), (0,jsx_runtime.jsxs)(FiletreeItem, {
          name: "whatap-boot-yyyymmdd.log",
          type: "file",
          children: ["Agent log file. (path: ", (0,jsx_runtime.jsx)(_components.em, {
            children: "/usr/whata/agent/log"
          }), ")"]
        }), (0,jsx_runtime.jsx)(FiletreeItem, {
          name: "/etc/init.d",
          type: "folder",
          children: (0,jsx_runtime.jsx)(FiletreeItem, {
            name: "whatap-agent",
            type: "file",
            children: " Service script file."
          })
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "set-agent",
        children: "Agent setting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "default-settings",
        children: "Default settings"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Execute the following commands in order to set the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "access key"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "collection server IP"
        }), " in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Create the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " file in the path of the application startup script."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["If the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WHATAP_HOME"
            }), " environment variable has not been set, the path of the application startup script is recognized as the one of the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " file."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "# Creation of whatap.conf in the script running path\r\n$ echo \"license={Access Key}\" >> ./whatap.conf\r\n$ echo \"whatap.server.host={Collection Server IP}\" >> ./whatap.conf\r\n$ echo \"app_name={Application Name}\" >> ./whatap.conf\r\n\r\n# 애플리케이션 실행\r\n./app\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "license"
            }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "access key"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.server.host"
            }), ": Enter the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "collection server IP address"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app_name"
            }), ": Enter the application name. Set the user as a string."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "app_name"
              }), " is a component to determine the agent name. For more information, see ", (0,jsx_runtime.jsx)(_components.a, {
                href: "agent-name",
                children: "the following"
              }), "."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "setting-the-whatap_home-variable",
        children: ["Setting the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " variable"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can set the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " path as the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " variable. Create the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " path first."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# Set the whatap.conf path after setting the WHATAP_HOME path.\r\nmkdir ./whatap_home\r\necho \"license={Access Key}\" >> ./whatap_home/whatap.conf\r\necho \"whatap.server.host={Collection Server IP}\" >> ./whatap_home/whatap.conf\r\necho \"app_name={Application Name}\" >> ./whatap_home/whatap.conf\r\n\r\n# Run the application.\r\nWHATAP_HOME=./whatap_home ./app\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "duplicate_appname",
        children: "Setting the agent names for each process"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If one ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " file is shared by the applications running in multiple processes, any changes may not be reflected. It is recommended to set a ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " for each process."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To avoid duplicate agent names, you can add a string to each agent name for identification. The value set with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_name"
        }), " option is added to the beginning of the agent name."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "You can avoid duplicate names of agents run with the same command and the same instance."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# Set the whatap.conf path after setting the WHATAP_HOME path.\r\nmkdir ./whatap_home\r\necho \"license={Access Key}\" >> ./whatap_home/whatap.conf\r\necho \"whatap.server.host={Collection Server IP}\" >> ./whatap_home/whatap.conf\r\necho \"app_name={Application Name-1}\" >> ./whatap_home/whatap.conf\r\n\r\n# Run the application.\r\nWHATAP_HOME=./whatap_home ./app \r\n\r\n# Set the whatap.conf path after setting the WHATAP_HOME path.\r\nmkdir ./whatap_home1\r\necho \"license={Access Key}\" >> ./whatap_home1/whatap.conf\r\necho \"whatap.server.host={Collection Server IP}\" >> ./whatap_home1/whatap.conf\r\necho \"app_name={Application Name-2}\" >> ./whatap_home1/whatap.conf\r\n\r\n# Run the application\r\nWHATAP_HOME=./whatap_home1 ./app\r\n\n"
        })
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "starting-the-monitoring",
        children: "Starting the monitoring"
      }), (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Once the application server has been restarted, the agent starts collecting data."
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "Once the application server has been restarted, the agent starts collecting data."
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Execute the following command to install the WhaTap agent daemon."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "/usr/whatap/php/whatap-agent start\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Execute the following command to check whether the WhaTap service has been run normally."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "ps -elf | grep whatap_agent_static\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Once the application server has been restarted, the agent starts collecting data."
          })]
        })]
      })]
    })]
  });
}
function install_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_agent_createMdxContent, {
      ...props
    })
  }) : install_agent_createMdxContent(props);
}
function install_agent_missingMdxReference(id, component) {
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