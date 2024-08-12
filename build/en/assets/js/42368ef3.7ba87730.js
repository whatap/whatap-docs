"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[17078],{

/***/ 4212:
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



/*node js, java*/


const toc = [{
  "value": "Agent CONF. <code class=\"oldfunc\">Old</code>",
  "id": "agent_configuration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h2, {
      id: "agent_configuration",
      children: ["Agent CONF. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "oldfunc",
        children: "Old"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentSetting",
        className: "uitext"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "oldfunc",
        children: "Old"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can add, modify, or delete the agent configuration options without directly modifying the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), " file located on the monitored server. When you click ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "BTN08153",
        className: "uitext"
      }), ", the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), " file of the selected agent is downloaded."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["For the agent configuration, it is recommended to use the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentSetting",
          className: "uitext"
        }), " menu that has improved the usability and functionality. On the upper right of the screen, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "new_agents_setting",
          className: "uitext"
        }), ". For more information, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "set-agent#set-agent-service",
          children: "the following"
        }), "."]
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

/***/ 19046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports frontMatter, contentTitle, toc, default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Agent log",
  "id": "agent_log",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    ..._provideComponents(),
    ...props.components
  }, {Cmdname, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return _jsxs(_components.section, {
    className: "remark-sectionize-h2",
    children: [_jsx(_components.h2, {
      id: "agent_log",
      children: "Agent log"
    }), _jsxs(_components.p, {
      children: ["Home > Select Project > ", _jsx(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", _jsx(Cmdname, {
        sid: "side_agentLog",
        className: "uitext"
      })]
    }), _jsx(ProdImg, {
      img: "ipa-agent-log.png",
      desc: "Agent log"
    }), _jsxs(_components.p, {
      children: ["You can view the agent logs stored on the monitored server. The name of the log file is in the format of ", _jsxs(_components.em, {
        children: ["whatap-", _jsx(_components.code, {
          children: "YYYYMMDD"
        }), ".log"]
      }), ". You can select each log to access information about the errors and events captured in the logs."]
    }), _jsx(_components.admonition, {
      type: "note",
      children: _jsxs(_components.p, {
        children: ["For the agent settings for the log, see ", _jsx(_components.a, {
          href: "agent-log",
          children: "the following"
        }), "."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ..._provideComponents(),
    ...props.components
  };
  return MDXLayout ? _jsx(MDXLayout, {
    ...props,
    children: _jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 43145:
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
    admonition: "admonition",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "You can see the application environment along with the performance-related settings. You can see detailed information of agents and applications."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "You can filter the desired items through the text field on the upper right of the screen."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["If changes to agents and applications located on the monitored server are not automatically applied, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "Refresh icon",
            src: (__webpack_require__(70240)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Agent list"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "You can check the list of agents assigned to the project in the application list on the left of the screen. If you select an individual agent, you can view information for environment variables, agent settings, and performances set on the right of the screen."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "ipa-agent-list.png",
        desc: "Agent List",
        width: "400",
        height: "auto"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["After updating the agent list or restarting a disabled agent, if it is not automatically displayed in the list, select ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "Refresh icon",
          src: (__webpack_require__(70240)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), "."]
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

/***/ 75253:
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
  "value": "System ENV. Variable",
  "id": "side_environmentVariable",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_environmentVariable",
      children: "System ENV. Variable"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_environmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-env-var.png",
      desc: "Boot environment"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can view environment variables for application execution. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "boot_env",
        className: "uitext"
      }), " menu collects and provides environment variables at the time of query. It uses ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "System.getProperty()"
      }), " to retrieve the value of the key passed as a parameter. The following are key points to check:"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(Application).version"
          }), ": You can check the application version."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": You can check the file encoding format such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["Application state: For example, if the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "catalina.home"
          }), " environment variable is retrieved, you can see that it is the tomcat environment."]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["OS environment variables: For example, they are provided in the suffix ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env)"
        }), " format, such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env) LANG"
        }), " environment variable."]
      }), "\n"]
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

/***/ 83653:
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
  "value": "Runtime ENV. Variable",
  "id": "side_agentsConfiguration",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "side_agentsConfiguration",
      children: "Runtime ENV. Variable"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_bootEnvironmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-run-env-var.png",
      desc: "Runtime boot environment"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["You can view environment variables for agent execution. Important information among environment variables or application status can be stored on the WaTap server so that they can be retrieved even if the agent is down. You can see the version, installation path, name, and IP address of the agent. You can download environment variables by clicking ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "sms_summary_download_csv",
        className: "uitext"
      }), ". The following are key points to check:"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(Application).version"
          }), ": You can check the application version."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": You can check the file encoding format such as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "os.name"
          }), ": You can check the current OS."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "user.language"
          }), ": You can check the user language."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-Xms"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "-Xms"
            }), ": You can check environment variables that are related to heap memory settings."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "(Application).start"
            }), ": You can check the application start time."]
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

/***/ 87270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ instance_performance_analysis_contentTitle),
  "default": () => (/* binding */ instance_performance_analysis_MDXContent),
  frontMatter: () => (/* binding */ instance_performance_analysis_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ instance_performance_analysis_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-common.mdx
var _import_instance_performance_common = __webpack_require__(43145);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-run-env.mdx
var _import_instance_performance_run_env = __webpack_require__(83653);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-env.mdx
var _import_instance_performance_env = __webpack_require__(75253);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-heap.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Heap Histogram",
  "id": "side_heapHistogram",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_heapHistogram",
      children: "Heap Histogram"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapHistogram",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-histogram-java.png",
      desc: "Heap Histogram"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view the status of heap occupied objects (sizes for each object in heap memory) in the memory of the JVM (Java Virtual Machine). It retrieves the pure size of the object. Through the ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), " column, it is easy to check the number of main objects."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Because it retrieves the number of objects that are kept until GC, they appear in the list even if they are not actually used. For an accurate query, it is recommended running ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "System GC"
          })
        }), " and then checking the list. For more information about ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "System GC"
          })
        }), ", see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#side_systemGarbageCollection",
          children: "the following"
        }), "."]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Java versions 6 to 8 support basic functions without the JVM options. However, for some Java versions, the JVM options must be applied as follows:"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 9 to Java 15"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "-Djdk.attach.allowAttachSelf=true\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"example\"",
              children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true -jar {application.jar}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 16 or later"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "-Djdk.attach.allowAttachSelf=true\r\n--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"example\"",
              children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED -jar {application.jar}\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "It does not support Java 5 or earlier and IBM Java."
          }), "\n"]
        }), "\n"]
      })]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-loaded-class.mdx


const _import_instance_performance_loaded_class_frontMatter = {};
const _import_instance_performance_loaded_class_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<Cmdname sid="side_loadedClasses" className="uitext" /> 메뉴는 애플리케이션 성능 최적화 및 메모리 관리와 클래스 종속성 문제 등의 해결을 도울 수 있습니다.*/


const _import_instance_performance_loaded_class_toc = [{
  "value": "Loaded Classes",
  "id": "side_loadedClasses",
  "level": 2
}];
function _import_instance_performance_loaded_class_createMdxContent(props) {
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_loaded_class_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_loaded_class_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_loadedClasses",
      children: "Loaded Classes"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-loaded-class-java.png",
      desc: "Loaded Classes"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can see class information loaded in Java applications. The ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      }), " menu allows you to retrieve the list of classes loaded into your application and their detailed data, and to change the behaviors of classes without interruption."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), ": When you click the ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Detail View icon",
            src: (__webpack_require__(60164)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " icon in the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), " column, you can see ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), ". The ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), " provides information about methods and inheritance relationships within the class."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), ": If you click the ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Edit icon",
            src: (__webpack_require__(85663)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " icon in the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), " column, the class can be redefined. You can change the behaviors of the class that has been loaded at runtime without stopping the application by reloading it and then using the byte code injection (BCI)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), ": You can check which physical file the class was loaded from. Due to the complex multi-layered nature of the application, we need to check the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), " information to determine which ", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), " file a class was loaded from."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about using the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), " feature and ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), ", see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-loaded-classes",
          children: "the following"
        }), "."]
      })
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI(ByteCode Instrumentation)"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Java bytecode is a platform-independent intermediate code that runs on the JVM. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI"
        }), " (byte code injection), is a technique to implement additional functionality by dynamically changing the bytecode at runtime or build time without modifying the source file. For more information, see the following document."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.oracle.com/javase/specs/",
              children: "Java SE Specifications"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.oracle.com/en/java/javase/21/docs/api/java.instrument/java/lang/instrument/package-summary.html",
              children: "Java Package Summary"
            })
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_loaded_class_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_loaded_class_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_loaded_class_createMdxContent(props);
}
function _import_instance_performance_loaded_class_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-library-version.mdx


const _import_instance_performance_library_version_frontMatter = {};
const _import_instance_performance_library_version_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<ImgLang img='ipa-library-version-java.png' desc='라이브러리 버전' />*/
/*Java 애플리케이션을 구성하는 라이브러리의 버전을 확인할 수 있습니다.*/


const _import_instance_performance_library_version_toc = [{
  "value": "Library Version",
  "id": "side_libraryVersion",
  "level": 2
}];
function _import_instance_performance_library_version_createMdxContent(props) {
  const _components = {
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_library_version_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_library_version_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_libraryVersion",
      children: "Library Version"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_libraryVersion",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "library-version-java.png",
      desc: "Library Version"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can view a list of components deployed to the Java application. In the environments with lots of open source libraries, you can quickly check and resolve compatibility issues by checking the version of the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "jar"
      }), " file. Additionally, checking the version makes it easy to manage security, such as finding and patching versions with security vulnerabilities."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Component list Info: It provides ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "name",
            className: "uitext"
          }), " and version for the corresponding ", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), " file in ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "detail",
            className: "uitext"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "sms_summary_download_csv",
            className: "uitext"
          }), ": You can download the version information by clicking Download."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function _import_instance_performance_library_version_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_library_version_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_library_version_createMdxContent(props);
}
function _import_instance_performance_library_version_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-thread-dump.mdx


const _import_instance_performance_thread_dump_frontMatter = {};
const _import_instance_performance_thread_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*이를 통해 Java 애플리케이션의 성능 문제를 진단하는데 이용할 수 있습니다. * <Cmdname sid="status" className="uitext" />: You can check the current status of the thread. It can be used to diagnose the performance issues in Java applications.*/
/*<ScrollToLink anchor='thread-details' />*/


const _import_instance_performance_thread_dump_toc = [{
  "value": "Thread List/Dump",
  "id": "side_threadList",
  "level": 2
}, {
  "value": "Analyzing the thread dump",
  "id": "thread-details",
  "level": 3
}, {
  "value": "Thread status",
  "id": "stateofthread",
  "level": 4
}, {
  "value": "Thread dump information",
  "id": "thread-dump-information",
  "level": 4
}];
function _import_instance_performance_thread_dump_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang, LinkImage} = _components;
  if (!Cmdname) _import_instance_performance_thread_dump_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_thread_dump_missingMdxReference("ImgLang", true);
  if (!LinkImage) _import_instance_performance_thread_dump_missingMdxReference("LinkImage", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "side_threadList",
        children: "Thread List/Dump"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-thread-list-java.png",
        desc: "Thread List/Dump"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It can provide snapshot information of all threads in the Java process. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), " is a key menu for CPU optimization. You can manage CPU resources more finely by checking the status at the thread level rather than the process level. For example, you can identify performance issues by checking the thread that is using the most CPU at the time of query and then checking the stack information for the thread."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_dump",
              className: "uitext"
            }), ": You can create a full thread dump by clicking ", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "Thread Dump"
            }), " on the upper right. After generating a full thread dump, you can check the information at the bottom of the thread list."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Individual thread dump: You can see individual thread dump information by selecting the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Expand icon",
              src: (__webpack_require__(67490)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " icon for each thread. You can view the details and stack traces about the thread state and execution path, in ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack",
              className: "uitext"
            }), " and ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack_trace",
              className: "uitext"
            }), ". ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Refresh icon",
              src: (__webpack_require__(36495)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " The list can be checked after refreshing it. For more information, see ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#thread-details",
              children: "the following"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["In ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_cpu_time",
              className: "uitext"
            }), ": It indicates the total accumulated time that the thread has occupied the CPU. It uses the time in milliseconds."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08126",
              className: "uitext"
            }), ": If you click the ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "Refresh icon",
              src: (__webpack_require__(36495)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " Refresh icon at the top of the thread list, the difference between the CPU time of the existing thread and the CPU time of the current thread is added."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), " is the total accumulated time that the thread has occupied the CPU. Therefore, to identify the thread that is using the most CPU at the query time, it is required to check the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), " value. For more information, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-thread-list-dump",
            children: "the following"
          }), "."]
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU usage spike types"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Heap memory is full: CPU usage spikes due to frequent GC."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "There are lots of requests: CPU usage spikes due to processing a large number of client requests."
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Wrong code logic: Inefficient algorithms or infinite loops can cause spikes in CPU usage."
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "thread-details",
        children: "Analyzing the thread dump"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It guides you to individual thread dumps that can be checked in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "thread_list",
          className: "uitext"
        }), "."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "stateofthread",
        children: "Thread status"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The states of the thread are declared as enumerated types named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "State"
        }), " in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.lang.Thread"
        }), " class."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "NEW"
            }), ": The thread has been generated but not run."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RUNNABLE"
            }), ": The CPU has been occupied and the tasks are being performed. The resource allocation by the OS may result in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), " state."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), ": It is waiting using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), " methods."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TIMED_WAITING"
            }), ": It is waiting using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), " methods. The difference from the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), " state is that it is waiting for a given time. The waiting state can be released by the time as well as external environment change."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), ": It is waiting for the locked object to be released."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TERMINATED"
            }), ": Execution has been completed."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "thread-dump-information",
        children: "Thread dump information"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["You can check individual thread dumps by selecting the ", (0,jsx_runtime.jsx)(LinkImage, {
          img: "ico-expander-black.svg",
          className: "ico black"
        }), " button for each thread in the thread list."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-java-thread-list.png",
        desc: "Thread dump information"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack"
        })
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Item"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Properties"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Description"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_id",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique ID allocated to the thread"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_owner_id",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockOwnerId"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Thread ID that holds the monitor lock state on the object on which the threads are blocked."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "waited_count",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitedCount"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Total number of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), " and ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TIMED_WAITING"
              }), " states of the thread"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "blocked_count",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockedCount"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Total number of ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Blocked"
              }), " states of the thread"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "waited_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "waitedTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Elapsed time (milliseconds) that the thread has been in the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), " state. It returns ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " when the thread contention monitoring is disabled."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_cpu_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadCpuTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["It displays the total CPU time (nanoseconds) of the thread calculated in milliseconds. It returns ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " when the CPU time measurement is disabled."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "status",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadstate"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Thread status"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "blocked_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "blockedTime"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["Elapsed time (milliseconds) that the thread has been in the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "BLOCKED"
              }), " state. It returns ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " when the thread contention monitoring is disabled."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Unique name of the thread"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockName"
              })
            }), (0,jsx_runtime.jsxs)(_components.td, {
              children: ["String indicating that the thread's input is blocked or a monitor lock prompts for notification via the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Object.wait"
              }), " method."]
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "lock_owner_name",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "lockOwnerName"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Name of the thread that holds the monitor lock on the objects on which the thread is blocked."
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(Cmdname, {
                sid: "thread_user_time",
                className: "uitext"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "threadUserTime"
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "The CPU time (nanoseconds) for which the thread executed in user mode that is calculated in milliseconds."
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For more information about the thread information, see ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.oracle.com/javase/8/docs/api/java/lang/management/ThreadInfo.html/",
            children: "the following link"
          }), "."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "-1",
        children: (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack_trace"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "It displays the stack trace when any exception occurs. The stack frame list that contains information about the methods called by the code."
      })]
    })]
  });
}
function _import_instance_performance_thread_dump_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_thread_dump_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_thread_dump_createMdxContent(props);
}
function _import_instance_performance_thread_dump_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-open-socket.mdx


const _import_instance_performance_open_socket_frontMatter = {};
const _import_instance_performance_open_socket_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_open_socket_toc = [{
  "value": "Opened Socket Count",
  "id": "side_openSocket",
  "level": 2
}];
function _import_instance_performance_open_socket_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_open_socket_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_open_socket_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_openSocket",
      children: "Opened Socket Count"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_openSocket",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-open-socket-java.png",
      desc: "Opened Socket Count"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "You can check the socket information that the Java application opened to perform TCP features. This can be used to view the network dependency, which is the external system that the application instance depends on, such as database. You can also trace who it is making outbound calls to. This information is important for optimizing the efficiency, reliability, and performance of TCP communications."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "count",
            className: "uitext"
          }), ": It indicates the number of connection attempts to external systems."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "stack",
            className: "uitext"
          }), ": By selecting ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "get_stack",
            className: "uitext"
          }), ", the stacks acquired on the next connections can be viewed and deleted."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["It can sort by ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), " and then check ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "host",
        className: "uitext"
      }), " and ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "port",
        className: "uitext"
      }), " to find which services or systems have the most connections. Afterwards, obtain ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "stack",
        className: "uitext"
      }), " to view the detailed content."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Database and connection pool"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For example, if the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "count",
          className: "uitext"
        }), " of 3306 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), " increases, it is possible that MySQL is not managing connections properly, such as not using the connection pool or frequently disconnecting and recreating the connection pool. To check whether the 3306 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), " is being used in which code path, you can obtain ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack",
          className: "uitext"
        }), " for tracing."]
      })]
    })]
  });
}
function _import_instance_performance_open_socket_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_open_socket_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_open_socket_createMdxContent(props);
}
function _import_instance_performance_open_socket_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-method-stat.mdx


const _import_instance_performance_method_stat_frontMatter = {};
const _import_instance_performance_method_stat_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_method_stat_toc = [{
  "value": "Method Performance",
  "id": "side_methodStat",
  "level": 2
}];
function _import_instance_performance_method_stat_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _import_instance_performance_method_stat_missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_methodStat",
      children: "Method Performance"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_methodStat",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "It provides the performance statistics about the method executed in the Java application."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), ": It recalls the data."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "reset",
            className: "uitext"
          }), ": It initializes the statistical data for the registered methods."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["To use the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_methodStat",
          className: "uitext"
        }), " menu, add the following custom options in ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_configuration",
          className: "uitext"
        }), ". In the reboot or ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " menu, perform ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "."]
      }), (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "hook_method_stat_patterns=io.home.test.baseapp.app.post.mapper.PostMapperImpl.*"
          })
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_method_stat_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_method_stat_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_method_stat_createMdxContent(props);
}
function _import_instance_performance_method_stat_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-datasource.mdx


const _import_instance_performance_datasource_frontMatter = {};
const _import_instance_performance_datasource_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_datasource_toc = [{
  "value": "DataSource Status",
  "id": "dataSourceStatus",
  "level": 2
}];
function _import_instance_performance_datasource_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    h2: "h2",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_datasource_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_datasource_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "dataSourceStatus",
      children: "DataSource Status"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dataSourceStatus",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-datasource-java.png",
      desc: "DataSource Status"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "You can see the status of DataSource. It provides information for current status and configuration of the database connection pool used by the application, connection settings, connection state, and configuration mismatches."
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: "Because the monitoring starts as soon as a connection pool object is created, it may appear in the data source status even if the object is not being used."
      })]
    })]
  });
}
function _import_instance_performance_datasource_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_datasource_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_datasource_createMdxContent(props);
}
function _import_instance_performance_datasource_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-agent-log.mdx
var _import_instance_performance_agent_log = __webpack_require__(19046);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-system-gc.mdx


const _import_instance_performance_system_gc_frontMatter = {};
const _import_instance_performance_system_gc_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_system_gc_toc = [{
  "value": "System GC",
  "id": "side_systemGarbageCollection",
  "level": 2
}];
function _import_instance_performance_system_gc_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_system_gc_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_system_gc_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_systemGarbageCollection",
      children: "System GC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_systemGarbageCollection",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-system-gc-java.png",
      desc: "System GC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "System.gc()"
      }), ", you can collect and remove memory objects (garbage) that are no longer needed for the dynamically allocated memory in the Heap area of the JVM (Java Virtual Machine). If you select ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "BTN07740",
        className: "uitext"
      }), ", the GC process is performed and you can see the memory capacities before and after execution."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the option has been set to disable explicit GC requests, such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-XX:+DisableExplicitGC"
        }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_systemGarbageCollection",
          className: "uitext"
        }), " does not work."]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "System GC and memory leak"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["When the heap memory usage continues to rise, the ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "System GC"
          })
        }), " is required to accurately identify and diagnose the possibility of memory leak."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory requested or not"
            }), ": Check if the application is continuously requesting memory. Check if memory requests increased more than expected or memory is being freed correctly."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Checking memory usage"
            }), ": Check if excessive memory usage is happening. Run GC to free objects that are no longer required and observe changes in memory usage."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GC cycle"
            }), ": Check if GC is not running even if there is sufficient free memory. Check the GC cycle or settings."]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function _import_instance_performance_system_gc_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_system_gc_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_system_gc_createMdxContent(props);
}
function _import_instance_performance_system_gc_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-heap-dump.mdx


const _import_instance_performance_heap_dump_frontMatter = {};
const _import_instance_performance_heap_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_heap_dump_toc = [{
  "value": "Heap Dump",
  "id": "side_heapDump",
  "level": 2
}];
function _import_instance_performance_heap_dump_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_heap_dump_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_heap_dump_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_heapDump",
      children: "Heap Dump"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapDump",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-dump-java.png",
      desc: "Heap Dump"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If any problem occurs such as a memory leak while running the Java application, you can generate its dump file for analysis of the problem. Select ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "dump_heap",
        className: "uitext"
      }), ". The generated dump file is stored on the application server. You can see it in the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "dump"
      }), " directory under the path where you installed the agent."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["This function is supported in Java agent 1.5.2 or later. Set the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "heapdump_enabled"
        }), " option to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " in the agent configuration. Select ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "dump_heap",
          className: "uitext"
        }), " to enable the function to create a heap dump file. It does not automatically generate a heap dump each time, and this option does not affect the performance. However, dump acquisition may affect the performance."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Obtaining a heap dump"
        }), " requires a significant ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "burden"
        }), ". Separate from the burden, because the execution of the application code is stopped (stop the world) until all heap dumps are extracted, the perceived performance difference by the user may be more severe."]
      })]
    })]
  });
}
function _import_instance_performance_heap_dump_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_heap_dump_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_heap_dump_createMdxContent(props);
}
function _import_instance_performance_heap_dump_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-throttling.mdx


const _import_instance_performance_throttling_frontMatter = {};
const _import_instance_performance_throttling_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_throttling_toc = [{
  "value": "Throttling CONF.",
  "id": "side_throttlingConfiguration",
  "level": 2
}];
function _import_instance_performance_throttling_createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _import_instance_performance_throttling_missingMdxReference("Cmdname", true);
  if (!ImgLang) _import_instance_performance_throttling_missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "side_throttlingConfiguration",
      children: "Throttling CONF."
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Home > Select Project > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_throttlingConfiguration",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-set-throttling-java.png",
      desc: "Throttling CONF."
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can see the agent settings for load control of Java applications, and then set the related options. For more information about the agent settings for load control, see ", (0,jsx_runtime.jsx)(_components.a, {
        href: "agent-load-amount",
        children: "the following"
      }), "."]
    })]
  });
}
function _import_instance_performance_throttling_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_import_instance_performance_throttling_createMdxContent, {
      ...props
    })
  }) : _import_instance_performance_throttling_createMdxContent(props);
}
function _import_instance_performance_throttling_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_import_instance-performance-agent-config.mdx
var _import_instance_performance_agent_config = __webpack_require__(4212);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/java/instance-performance-analysis.mdx


const instance_performance_analysis_frontMatter = {
	id: 'instance-performance-analysis',
	title: 'Instance Performance Management',
	description: 'You can see the Java application environment along with the performance-related settings.',
	toc_max_heading_level: 2,
	tags: [
		'Java',
		'Application',
		'Instance Performance Management'
	]
};
const instance_performance_analysis_contentTitle = undefined;
const metadata = {
  "id": "java/instance-performance-analysis",
  "title": "Instance Performance Management",
  "description": "You can see the Java application environment along with the performance-related settings.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/java/instance-performance-analysis.mdx",
  "sourceDirName": "java",
  "slug": "/java/instance-performance-analysis",
  "permalink": "/en/java/instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/instance-performance-analysis.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Java",
      "permalink": "/en/tags/java"
    },
    {
      "inline": true,
      "label": "Application",
      "permalink": "/en/tags/application"
    },
    {
      "inline": true,
      "label": "Instance Performance Management",
      "permalink": "/en/tags/instance-performance-management"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "instance-performance-analysis",
    "title": "Instance Performance Management",
    "description": "You can see the Java application environment along with the performance-related settings.",
    "toc_max_heading_level": 2,
    "tags": [
      "Java",
      "Application",
      "Instance Performance Management"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "Event reception format",
    "permalink": "/en/java/set-event-format"
  },
  "next": {
    "title": "Log 모니터링",
    "permalink": "/en/log/introduction"
  }
};
const assets = {

};

/*인스턴스 성능 관리 공통*/
/*실행 환경 변수 {#side_agentsConfiguration}*/
/*환경 변수 {#side_environmentVariable}*/
/*힙 히스토그램 {#side_heapHistogram}*/
/*로딩된 클래스*/
/*라이브러리 버전 {#side_libraryVersion}*/
/*스레드 목록/덤프 {#side_threadList}*/
/*소켓 오픈 개수 {#side_openSocket}*/
/*메소드 성능 상태 {#side_methodStat}*/
/*데이터소스 상태 {#dataSourceStatus}*/
/*에이전트 로그 {#agent_log}*/
/*시스템 GC {#side_systemGarbageCollection}*/
/*힙 덤프 {#side_heapDump}*/
/*쓰로틀링 설정 {#side_throttlingConfiguration}*/
/*에이전트 설정 <code class='oldfunc'>Old</code> {#agent_configuration}*/

















const instance_performance_analysis_toc = [..._import_instance_performance_common/* toc */.RM, ..._import_instance_performance_run_env/* toc */.RM, ..._import_instance_performance_env/* toc */.RM, ...toc, ..._import_instance_performance_loaded_class_toc, ..._import_instance_performance_library_version_toc, ..._import_instance_performance_thread_dump_toc, ..._import_instance_performance_open_socket_toc, ..._import_instance_performance_method_stat_toc, ..._import_instance_performance_datasource_toc, ..._import_instance_performance_system_gc_toc, ..._import_instance_performance_heap_dump_toc, ..._import_instance_performance_throttling_toc, ..._import_instance_performance_agent_config/* toc */.RM];
function instance_performance_analysis_createMdxContent(props) {
  const _components = {
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_common/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_run_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_loaded_class_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_library_version_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_thread_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_open_socket_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_method_stat_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_datasource_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "<Instanceperformanceagent_log />"
    }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_system_gc_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_heap_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_throttling_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_agent_config/* default */.Ay, {})]
  });
}
function instance_performance_analysis_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(instance_performance_analysis_createMdxContent, {
      ...props
    })
  }) : instance_performance_analysis_createMdxContent(props);
}



/***/ }),

/***/ 60164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1wYWdldmlldzwvdGl0bGU+IC0tPg0KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPg0KICAgIDxnIGlkPSJJY29uLVNldCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0yNzExLjAwMDAwMCkiIGZpbGw9ImdyZXkiPg0KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9ImljLXBhZ2V2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyOC4wMDAwMDAsIDM2NS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSIgaWQ9InBhZ2V2aWV3Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=");

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

/***/ 36495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMWU1MDAyNS1hY2U4LTQ4OGUtYTMyNy1lYzYzYzFlZjUwOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFQzI5Mjc1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFQzI5MjY1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBmOTFjYzItZTZiYy00YjUwLThhZTQtOGNmZThmOGI4OTQ2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDJiOGIwNTktYWQ4YS1hZjRhLTljNTMtMjlkMzcxNTBkOGY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M9zsYQAABPJJREFUeNrEWGtoHFUU/u6du5vdbZJNk8Zqi602pFRDTULVBCpaW3yCYH8YTREpqH9aBBF8oIj0jw/6Q0EMhVBQRBvwR18ICmrQtiLUojVNbGObxtjm/Wx3N7uZmXs9Z6ZpLCo720nTC8Psnb0z57vnfOc7Z0bsOuigs1cnKpPYfvCI3Xx+RCeVBVcIGFyjYQyE48JaXimnHlsf2TMyhY9qbpEZVZIQsZ5+t3Xf984WNq8UIHBtB23UszM4qtF6IFd/R7Wqa7zd2ib7hty3jnfbW3I2LZLXHshlQPDtsV22TzieFfXPpc3opPbQioVCcmXIvGNJmeyQQ+N6yvPIdQAyGzK2TzgWyYXgSJCQEQ5HhgEiaUfTOQPbCe9Zvl1erWspNTEwalC52EJFUnjzsKNgMOzK3IzBhbRBXbWF3a/EkSwWOHfWRWrawNVX7yVV6A1ZSsV0VuCNZ2J4tdm/ffM9CqWLJP4a1vhzQENrg/JS4YXRFCCdYmXTxUk6J4Msdl3WBYM3t8bxwuZ/7yOdBY6edNGy38a+H2awhMIXiwroYIC6rbKa11+jH7G8WnApRHweHDdYXCKxZoUf5T3fOcQfjZuW+Nee2KAwkRY43OFCWcJT2wBjLC8YeYmsExcNIkogUUT8GNFo+9ZGx1lg/VqFl1uyeHtXDp+227DIOEk7HrrLIv2w8M0xG0URgQBpmx9MOmuwarnC0w9GcPqcS6kMxAlQhHZ77JSDn7pcpCm9QeHI0Nr9h22MXBB44E4LG+ok9h5yMTyhPUD5wMh8KTxCIamvltixNYqnNkU9D3HY+OHLKCxdvWSM1sSiwOJSvibQ0pbFzjbbe8ZLTVHKsnlIbZuelyQS3ldrefOuXo2omuMRj+I4ccKaqzFRAllM6fAFhSxDXmzepLB6hYVU1oQDkyU9oZ4DG9cpj7Q/djpeiPKRvbxU4mSfi997fSVcsVQimwsJhgWsNA5UlFDenZ8LXZAywaQ/0qm9eV2VQDoTMkyzss9Cd+tSwKLVgTSDmzRay2HiwaSXMiQY5sfwFHCCUvjmGwS526KiGACN8MWRPcLjdD8RvCgkGBarsUmDU32ON3+kQWGMuJMvVJMpjXVrFB6+2+faoeMOiaQIB4ZFTmuNlr0z3nz74wpVK5VXg2ZFjAk7PHFlG6FdgTIqnhMpoK3d8fSHn5Vv5BU9atjR0aNRv1qhtkri3lqFn7s1Os+4iESYCwIb6hV6BgwuZoxXixKU7oNjGl8fdfELrWXAYj4UeNZDR05orF1lkdRLT41TOS4RfnN14J0EHm1U6B0y+O2M9nQnHhPop3rFAIuigXqKsUBVm3c1foElXeLDF+N48n7r8n/skRvLuWb589YvHezck8NUypAmFdSddAeqp7NCxrvc9v40Fb8IGshDjTUKNSvFFT30XB9jUGh3XVA/I4T/njNJ9YkzrSIpUUwBbv8gQWrNXrHx3mczKIkbaraEJ5rz7pl/eoi1p7LMN5TKaDq4n3HxyVczOP6Hg6Xl0uNYgUAK98z/9sQ2K7XBoljgru4/PSPDvt1r4/ODC2gIIH4n6TgI/bkhGgn30sT2CYeSFOOk0YV18fP+rk32CUdaNm2MvMtu5mxYaEBsz7drQDg+llSJd9SujnxeFPERLhQetsP22C7bJxy7FQlZdtUy6/mG26xfr+eXK8KR+VuAAQDQvDP0Yp7wsgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 70240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5LjEgKDg2MTQ0KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4NCiAgICA8IS0tIDx0aXRsZT5pYy1yZWZyZXNoPC90aXRsZT4gLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IldoYVRhcF9JY29uX1NldCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY0Ny4wMDAwMDAsIC0yMjQyLjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPg0KICAgICAgICAgICAgPGcgaWQ9InRpbWUtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMjE5Ny4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcmVmcmVzaCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjA0LjAwMDAwMCwgNDUuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDIyIEwxNC41LDE4LjkwNzQyNDIgTDEwLDE2IEwxMCwyMiBaIE0xMCw2LjEgTDUuNSwzLjAwNzQyNDE5IEwxMCwwLjEgTDEwLDYuMSBaIiBpZD0iSWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi40MzQ4MDAxLDYuMTIyNzg2MTggTDQuMDM3OTAzMDksNy4zMzAyNDM0OSBDMy4zNzk3Mzc3LDguMzk3MjYzMTYgMyw5LjY1NDI4NTM0IDMsMTEgQzMsMTQuODY1OTkzMiA2LjEzNDAwNjc1LDE4IDEwLDE4IEMxMC41Nzc4NzY0LDE4IDExLjEzOTM5NzgsMTcuOTI5OTc1OSAxMS42NzY1NDE5LDE3Ljc5Nzk0OTkgTDEzLjYwMjY0NjgsMTkuMjQ5OTY0NCBDMTIuNDk5NTE2NywxOS43MzIzNjY2IDExLjI4MTAxMjksMjAgMTAsMjAgQzUuMDI5NDM3MjUsMjAgMSwxNS45NzA1NjI3IDEsMTEgQzEsOS4yMDI1MDE4MSAxLjUyNjk1MDk2LDcuNTI4MDc5NjEgMi40MzQ4MDAxLDYuMTIyNzg2MTggWiBNMTAsMiBDMTQuOTcwNTYyNywyIDE5LDYuMDI5NDM3MjUgMTksMTEgQzE5LDEyLjgyNTM2OTcgMTguNDU2NTgwOCwxNC41MjM4MTcxIDE3LjUyMjY5NTEsMTUuOTQyMzg5NCBMMTUuOTIwOTg4NiwxNC43MzU1ODIzIEMxNi42MDQ0MjUsMTMuNjU0NTg4NyAxNywxMi4zNzM0OTAxIDE3LDExIEMxNyw3LjEzNDAwNjc1IDEzLjg2NTk5MzIsNCAxMCw0IEM5LjM4NzgxMjE3LDQgOC43OTM5NzkxNiw0LjA3ODU4NjM1IDguMjI4MDM4NzcsNC4yMjYyMjEyNyBMNi4zMTU0NTgxMywyLjc4NjMzNzg5IEM3LjQ0MDA1NzQsMi4yODEwNzg1OSA4LjY4NzIwMzk5LDIgMTAsMiBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");

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