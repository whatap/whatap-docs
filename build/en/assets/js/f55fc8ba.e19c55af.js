"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[44251],{

/***/ 87850:
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
    code: "code",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
    children: ["The end point is the start method of the transaction. In case of the HTTP transaction, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "HttpServlet.service()"
    }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "Filter.doFilter()"
    }), " is the start point of transaction, and this point is called \"", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "transaction end point"
    }), ".\""]
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



/***/ }),

/***/ 65921:
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
    code: "code",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Generally, transactions are identified by the method name."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-ini",
        metastring: "title='whatap.conf'",
        children: "service_name_mode=[full,class,method,string,arg]\nservice_name_index=0\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "service_name_mode"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["You can specify any of 5 options: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "full"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "class"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "method"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "string"
          }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "arg"
          }), "."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "full"
              }), ": The full class name is used as the service name."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "class"
              }), ": The class name is used as the service name."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "method"
              }), ": The method name is used as the service name."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), ": The first parameter in the text string is used as the service name."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "arg"
              }), ": Among parameters, the parameter of the index specified in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "service_name_index"
              }), " option is used as the service name."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
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



/***/ }),

/***/ 63003:
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
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
    children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Method Trace Setting"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Set the method trace. Be sure to specify a class that is called in transactions. The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "JDBC driver"
        }), " is useful for the programs that use the database."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "hook_method_patterns=jdbc.*.*\nhook_method_access_public_enabled=true\nhook_method_access_protected_enabled=true\nhook_method_access_none_enabled=true\n"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Transaction start option setting"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Start a transaction when the method is called. Turn on the transaction start option and the option to dump the stack at the start of a transaction."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title='whatap.conf'",
          children: "trace_auto_transaction_enabled=true\ntrace_auto_transaction_backstack_enabled=true\n"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Trace analysis after restart"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Restart it. After calling the service, you can see the transaction being traced."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["If you view the transaction, you can see that the methods of all classes starting with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jdbc.*"
        }), " appear in this transaction. If you view the transaction trace, you can see the message step called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "TRANSACTION BACKSTACK"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='TRANSACTION BACKSTACK'",
          children: "jdbc.FakePreparedStatement.executeQuery(FakePreparedStatement.java),\ncom.virtual.dao.SelectDAO.execute2(SelectDAO.java:29),\ncom.virtual.web.SimulaNonHttp.execute(SimulaNonHttp.java:147),\ncom.virtual.web.SimulaNonHttp.process(SimulaNonHttp.java:76),\ncom.virtual.web.SimulaNonHttp.run(SimulaNonHttp.java:100)\n"
        })
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Check Stack Content"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "By checking the stack content, you can infer which method the transaction is departing from."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Example'",
          children: "com.virtual.web.SimulaNonHttp.execute(SimulaNonHttp.java:147),\ncom.virtual.web.SimulaNonHttp.process(SimulaNonHttp.java:76),\ncom.virtual.web.SimulaNonHttp.run(SimulaNonHttp.java:100)\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["One of the above three methods can be determined as the start point of a transaction. In this situation, perform reverse compilation to determine the appropriate ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "transaction end point"
        }), "."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Looking at the logic, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "while()"
        }), " runs within ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.run"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.process()"
        }), " is called, and then ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.execute()"
        }), " is run. We can guess that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "process()"
        }), " is appropriate. This part must be determined by looking at the source."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["The most ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "important criterion for end point is that it must be ended"
          }), ". Under normal circumstances, it must terminate immediately without any delay so that the performance evaluation can be made."]
        })
      }), "\n"]
    }), "\n"]
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



/***/ }),

/***/ 74831:
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
    code: "code",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The performance from the start to the end of the method specified as the transaction end point, is called \"transaction performance.\" To trace non HTTP transactions, be sure to specify the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "end point"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Finding the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "end point"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "Set the transaction trace for all methods where transactions are supposed to be called."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "After restarting, trigger a transaction for monitoring."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["Turn on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "back stack"
          }), " option to pinpoint the entry method."]
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



/***/ }),

/***/ 45897:
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
    code: "code",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Set the transaction start point as follows:"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "hook_service_patterns=com.virtual.web.SimulaNonHttp.process\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Restart the application."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "process()"
      }), " method becomes the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "end point"
      }), " of a new transaction."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["For the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hook_service_patterns"
        }), " option, wildcard characters cannot be used. To set multiple values, use comma (,) as the delimiter."]
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



/***/ }),

/***/ 28205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ agent_transaction_contentTitle),
  "default": () => (/* binding */ agent_transaction_MDXContent),
  frontMatter: () => (/* binding */ agent_transaction_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ agent_transaction_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_transaction-profile-step.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["While the transaction performance means the summary metrics or attributes between the start and end of transaction, the transaction profile traces the steps during transactions. If any transaction is slow or erroneous, the execution records must be traced step by step to find the cause. This is called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "transaction tracing"
        })
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The types of steps that WhaTap collects include SQL steps, HTTP call steps, message steps, socket open steps, DB connection steps, and method steps."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTap's step is used with the same meaning as Span."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DB connection step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It includes the performance for connection to RDB. Step information includes the name, response time, and error."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL Step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It includes the performance for JDBC SQL. Step information includes connection data, SQL statements, and errors."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP Call step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It includes the performance for the outbound HTTP service calls. Step information includes URL, host, port, response time, and errors."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Message step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "While collecting traces, the message steps are used to collect the records of all irregular sections."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SOCKET Step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Step to represent the socket open."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "METHOD Step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The method response time is traced."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ACTIVE STACK Step"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It includes the active stack information. It is created and collected by a separate thread and it is added to the transaction trace."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_python-trs-profile.mdx


const _python_trs_profile_frontMatter = {};
const _python_trs_profile_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _python_trs_profile_toc = [];
function _python_trs_profile_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_step_normal_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the default step count for tracing transactions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_step_heavy_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1020"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the trace's default step count is exceeded, it limits the maximum heavy step count. In ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), ", it counts the steps that are over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_time"
        }), ". The steps with no response time are not collected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_step_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the maximum number of trace steps. If the number of collected trace steps exceeds this value, all steps collected later are ignored. If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), " is set up to 1000, active stacks are collected as many as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_max_count"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_step_heavy_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "100"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the criterion of heavy steps. If the execution time is greater than the set value and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), " is exceeded, recording is made within ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Transaction trace data is not collected if a transaction is terminated within the set value. The first URL called in every 5 minutes and the erroneous profile data are collected."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "query_string_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It enables the function to collect query strings for transaction URLs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "query_string_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It registers the URLs to collect query strings for transactions. To register multiple items, comma (", (0,jsx_runtime.jsx)(_components.em, {
          children: ","
        }), ") is used as the delimiter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "hook_method_patterns"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Use this when measuring the response time of a specific method. Use the values in the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[CLASS_NAME].[FUNCTION_NAME]"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[FUNCTION_NAME]"
        }), " format. Multiple method patterns can be set using comma (,) as the delimiter. All classes for a module or all modules for a class can be traced using asterisk (*)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["The methods registered through this option can be checked through the Method step in ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_hitmap",
                className: "uitext"
              }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), ", or ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " window."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Because tracing all modules may incur overhead, it is recommended to use accurate module and method names if possible."
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_error_callstack_depth"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the maximum number of call stack lines when collecting error call stacks for transactions. This data can be viewed from the error statistical data."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_active_callstack_depth"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the maximum number of call stack lines when collecting active stacks for transactions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_active_transaction_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the response criteria in the slow section of the active transaction's arc equalizer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_active_transaction_very_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the response criteria in the very slow section of the active transaction's arc equalizer."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_active_transaction_lost_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Timeout waiting for a transaction to end. If a transaction does not end within 5 minutes, no further transaction data is collected."
      }), "\n"]
    }), "\n"]
  });
}
function _python_trs_profile_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_trs_profile_createMdxContent, {
      ...props
    })
  }) : _python_trs_profile_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_python-track-http-trs.mdx


const _python_track_http_trs_frontMatter = {};
const _python_track_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _python_track_http_trs_toc = [];
function _python_track_http_trs_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ScrollToLink} = _components;
  if (!Cmdname) _python_track_http_trs_missingMdxReference("Cmdname", true);
  if (!ScrollToLink) _python_track_http_trs_missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_http_header_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The HTTP header's content is output in the transaction trace. This setting is used to expose headers to the transaction trace regardless of whether headers are collected or not."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "profile_http_parameter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        }), (0,jsx_runtime.jsx)(ScrollToLink, {
          anchor: "profile_http_parameter"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set it to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " to record HTTP parameters in the trace history. However, the parameters can be retrieved only by entering a separate security key. Set the security key to 6 digits in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), " of the agent installation path. If ", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), " does not exist, it is automatically generated and a random key is set."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_normalize_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It enables the function to parse and normalize transaction URLs."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If the value is changed to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          }), ", it disables the path parameter parsing. In this case, it is recommended to temporarily use the setting only for debugging purposes because the statistical data is less meaningful."]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_auto_normalize_enabled"
        }), "(", (0,jsx_runtime.jsx)(_components.strong, {
          children: "*"
        }), ") ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It enables automatic parsing of pattern values by extracting them from annotations when normalizing transaction URLs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_normalize_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The transaction URLs are parsed and normalized. It deletes the path parameters by parsing the call URL patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For example, if declared as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a/123/b"
          }), " is replaced by ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a/{v}/b"
          }), ". For multiple values, use comma (,) as the delimiter. Using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/*/b"
          }), ", you can collect after deleting the path parameter with a specific format."]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "web_static_content_extensions"
        }), "(", (0,jsx_runtime.jsx)(_components.strong, {
          children: "*"
        }), ") ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "js, htm, html, gif, png, jpg, css, swf, ico"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Specify the extension to determine the static content. Transactions with extensions set here are excluded from transaction tracing and counting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_ignore_url_set"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It sets URLs to exclude from transaction tracing. For multiple values, use comma (,) as the delimiter."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The URLs registered through this option are excluded from the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), ", or ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " window for collection."]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "trace_ignore_url_prefix"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the URL prefix for excluding transactions during collection. Any URLs whose prefix matches the set value do not collect the transaction performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The URLs registered through this option are excluded from the ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), ", or ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " window for collection."]
        })
      }), "\n"]
    }), "\n"]
  });
}
function _python_track_http_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_track_http_trs_createMdxContent, {
      ...props
    })
  }) : _python_track_http_trs_createMdxContent(props);
}
function _python_track_http_trs_missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_edp-def.mdx
var _edp_def = __webpack_require__(87850);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_edp-track-non-http.mdx
var _edp_track_non_http = __webpack_require__(74831);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_edp-select.mdx
var _edp_select = __webpack_require__(63003);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_edp-trs-setting.mdx
var _edp_trs_setting = __webpack_require__(45897);
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_edp-name-setting.mdx
var _edp_name_setting = __webpack_require__(65921);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_python-track-non-http-trs.mdx


const _python_track_non_http_trs_frontMatter = {};
const _python_track_non_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));










const _python_track_non_http_trs_toc = [..._edp_def/* toc */.RM, ..._edp_track_non_http/* toc */.RM, {
  "value": "Selecting the target",
  "id": "selecting-the-target",
  "level": 3
}, ..._edp_select/* toc */.RM, {
  "value": "Setting the end point of transaction",
  "id": "setting-the-end-point-of-transaction",
  "level": 3
}, ..._edp_trs_setting/* toc */.RM, {
  "value": "Defining the transaction name",
  "id": "defining-the-transaction-name",
  "level": 3
}, ..._edp_name_setting/* toc */.RM];
function _python_track_non_http_trs_createMdxContent(props) {
  const _components = {
    h3: "h3",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Transaction end point"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_def/* default */.Ay, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Non-HTTP tracing"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_track_non_http/* default */.Ay, {}), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "selecting-the-target",
        children: "Selecting the target"
      }), (0,jsx_runtime.jsx)(_edp_select/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "setting-the-end-point-of-transaction",
        children: "Setting the end point of transaction"
      }), (0,jsx_runtime.jsx)(_edp_trs_setting/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "defining-the-transaction-name",
        children: "Defining the transaction name"
      }), (0,jsx_runtime.jsx)(_edp_name_setting/* default */.Ay, {})]
    })]
  });
}
function _python_track_non_http_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_track_non_http_trs_createMdxContent, {
      ...props
    })
  }) : _python_track_non_http_trs_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_python-multi-trace.mdx


const _python_multi_trace_frontMatter = {};
const _python_multi_trace_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _python_multi_trace_toc = [];
function _python_multi_trace_createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mtrace_rate"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Percentage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This option sets the rate of the MTID (Multi Transaction ID) issued when the first transaction occurs. By tracing MTIDs, the calls between all registered applications can be checked. Through the Caller & Callee function, the transaction trace can be viewed for the applications that belong to the same project."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mtrace_spec"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the application version of the current instance. You can arbitrarily set a string. This data is used for call statistics."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mtrace_send_url_length"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Integer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The HTTP caller passes its URL to callees. At this time, the URL length is restricted. This sets the length value."
      }), "\n"]
    }), "\n"]
  });
}
function _python_multi_trace_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_python_multi_trace_createMdxContent, {
      ...props
    })
  }) : _python_multi_trace_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/python/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: 'Transactions',
	description: 'The following provides the settings for the Python transactions.',
	tags: [
		'Python',
		'Transactions',
		'Configuration'
	]
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "python/agent-transaction",
  "title": "Transactions",
  "description": "The following provides the settings for the Python transactions.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/python/agent-transaction.mdx",
  "sourceDirName": "python",
  "slug": "/python/agent-transaction",
  "permalink": "/en/python/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/python/agent-transaction.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Python",
      "permalink": "/en/tags/python"
    },
    {
      "inline": true,
      "label": "Transactions",
      "permalink": "/en/tags/transactions"
    },
    {
      "inline": true,
      "label": "Configuration",
      "permalink": "/en/tags/configuration"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "Transactions",
    "description": "The following provides the settings for the Python transactions.",
    "tags": [
      "Python",
      "Transactions",
      "Configuration"
    ]
  },
  "sidebar": "pySidebar",
  "previous": {
    "title": "Agent Log",
    "permalink": "/en/python/agent-log"
  },
  "next": {
    "title": "DB, SQL",
    "permalink": "/en/python/agent-dbsql"
  }
};
const assets = {

};








const agent_transaction_toc = [{
  "value": "Transaction Tracing",
  "id": "transaction-tracing",
  "level": 2
}, ...toc, ..._python_trs_profile_toc, {
  "value": "HTTP transaction tracing",
  "id": "http-transaction-tracing",
  "level": 2
}, ..._python_track_http_trs_toc, {
  "value": "Non-HTTP transaction tracing",
  "id": "non-http-transaction-tracing",
  "level": 2
}, ..._python_track_non_http_trs_toc, {
  "value": "Multiple transaction trace",
  "id": "multiple-transaction-trace",
  "level": 2
}, ..._python_multi_trace_toc];
function agent_transaction_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    p: "p",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["For more information about transaction, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "track-transactions-intro",
          children: "the following"
        }), ". For example, see ", (0,jsx_runtime.jsx)(_components.a, {
          href: "trs-view",
          children: "the following"
        }), " on the transaction analysis guide in case of using the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "hitmap"
          })
        }), "."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "transaction-tracing",
        children: "Transaction Tracing"
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_python_trs_profile_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "http-transaction-tracing",
        children: "HTTP transaction tracing"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following agent options trace and record various data related to HTTP requests and responses. This allows you to closely monitor and analyze the HTTP transactions for applications. You can add parameter values ​​to the transaction names or exclude specific URLs or HTTP methods. You can also record transactions in detail, including HTTP headers and parameters."
      }), (0,jsx_runtime.jsx)(_python_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "non-http-transaction-tracing",
        children: "Non-HTTP transaction tracing"
      }), (0,jsx_runtime.jsx)(_python_track_non_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "multiple-transaction-trace",
        children: "Multiple transaction trace"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following options are used to trace and monitor cross-application calls. The options can help you understand the interactions between multiple applications. Various options provided allow you to fine-tune the behaviors for tracing multiple transactions."
      }), (0,jsx_runtime.jsx)(_python_multi_trace_MDXContent, {})]
    })]
  });
}
function agent_transaction_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(agent_transaction_createMdxContent, {
      ...props
    })
  }) : agent_transaction_createMdxContent(props);
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