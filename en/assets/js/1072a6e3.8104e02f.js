"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[97014],{

/***/ 37728:
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
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "note",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "The setting is applied after Apache and PHP-FPM have been restarted."
    })
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

/***/ 1744:
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
// EXTERNAL MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-restart-apply.mdx
var _php_restart_apply = __webpack_require__(37728);
;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-trs-profile.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));



/*문장 부자연스러움*/
/*두 개가 어떻게 다른지? 0309 수정완*/



const toc = [..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM, ..._php_restart_apply/* toc */.RM];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    li: "li",
    ol: "ol",
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
          children: "whatap.profile_step_normal_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the maximum step count for tracing transactions."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_max_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the maximum number of trace steps. If the number of collected trace steps exceeds this value, all steps collected later are ignored."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_heavy_count"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the collection number of basic steps is exceeded, only the steps whose execution time exceeds profile_step_heavy_time are collected. Set the count of the step that can be collected. In case of default settings, if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), " is 800, up to 200 steps are collected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_step_heavy_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        }), " "]
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
          children: "whatap.profile_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
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
          children: "whatap.query_string_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It enables the function to collect query strings of the transaction URL together. It is applied to only the URLs registered in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.query_string_urls"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.query_string_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Register URLs to collect query strings from every transaction."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.whatap.profile_compile_file_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["It sets whether or not to trace the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " functions. The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_file"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compile_string"
        }), " functions (PHP internal functions) are compiled before executing the scripts. You can check the compile times for main, include, require, and autoload scripts, the script file paths, and the execution times."]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_compile_file_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "200"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the criterion of the execution time. Data is collected only when execution has been made while the set time was exceeded."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap.profile_compile_file_basetime"
          }), " is set too small, excessive collection may overload the server."]
        })
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The user functions whose execution time exceeds the set value (default is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 second"
        }), ") of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_method_time"
        }), " can be found in the transaction details."]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the execution time for collected functions with the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_method_enabled"
        }), " setting."]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_method_stack_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "You can check the stack information of the user functions in transaction details."
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set whether or not to trace the PHP internal function. Tracing is performed only when the function takes more than the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_time"
        }), " setting (Default: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 second"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "caution",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "This option allows to check all of PHP's built-in functions rather than custom functions, which may affect the performance."
        })
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        }), " "]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Set the execution time of the function when tracing PHP internal functions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_internal_method_param_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Milliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Functional parameters are additionally collected when tracing PHP internal functions (", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_internal_method_enabled"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_php_restart_apply/* default */.Ay, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_flush_start"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", the transaction start time is not collected."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Because the start point is not collected, it can be reflected a little later in the active transaction data that counts the number of active transactions. Active status is recorded normally."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_profile_basetime_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the trace data for transactions faster than the set response time is not collected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_profile_basetime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Miliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the response time for transactions excluding the trace data collection."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Because the trace data is not collected, it is not applied to the statistics such as SQL and HTTPC."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_trace_ignoretime_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the transactions and trace data that take the set response time are not collected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.net_udp_trace_ignoretime"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Miliseconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "30"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the response time for transactions excluding the transaction and trace data collection."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.shm_tx_counter_enable"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", when transaction data collection is excluded by setting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.net_udp_trace_ignoretime_enabled"
        }), ", the data for excluded transactions is reflected in the statistics when the TPS, average response time, and Apdex metrics are collected from the shared memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Transactions that have not been collected are normally reflected in TPS, average response time, and Apdex metrics, but they are not reflected in other statistical data."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.split_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "More profiles are collected by separating a certain amount of profiles into virtual transactions. They are divided into multiple transaction lists."
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "If set at the same time, the priorities are as follows:"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "split"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "circular"
            }), "\n"]
          }), "\n"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.large_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "By sending split and compressed profiles, you can collect more profiles without increasing memory usage."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["We can collect up to 10,000 profiles (steps). For more data, it is recommended to use the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.split_profile_enabled"
              }), " option."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "If set at the same time, the priorities are as follows:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "split"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "large"
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "circular"
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.circular_profile_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The last 1024 profiling data is collected."
      }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: "If set at the same time, the priorities are as follows:"
        }), (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "split"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "large"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "circular"
            }), "\n"]
          }), "\n"]
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_zip_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Compressed profiles are transmitted. The default value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "."]
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


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-track-trs.mdx


const _php_track_trs_frontMatter = {};
const _php_track_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_track_trs_toc = [];
function _php_track_trs_createMdxContent(props) {
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
          children: "whatap.trace_active_transaction_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "In the active transaction arc equalizer graph on the dashboard that checks collected data, specify the criteria for the transaction response time that can be recorded as a slow section. If the transaction response time exceeds the set time, the number of slow active transactions is included."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_active_transaction_very_slow_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8000"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_active_transaction_lost_time"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Millisecond"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If a transaction does not end within the timeout period (5 minutes), no further transaction data is collected. You can see ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Lost Connection"
        }), " in the transaction trace information."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_useragent_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the user agent data for transactions is collected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_referer_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the referer data for transactions is collected."]
      }), "\n"]
    }), "\n"]
  });
}
function _php_track_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_track_trs_createMdxContent, {
      ...props
    })
  }) : _php_track_trs_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-track-http-trs.mdx


const _php_track_http_trs_frontMatter = {};
const _php_track_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_track_http_trs_toc = [];
function _php_track_http_trs_createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ScrollToLink} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ScrollToLink) _missingMdxReference("ScrollToLink", true);
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_normalize_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It enables the function to convert and normalize transaction URLs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_normalize_urls"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the target URL to transform and normalize. It deletes the path parameter by transforming the call URL patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["For example, if it is set as ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), ", the called transaction URLs are transformed to the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), " format. To register multiple items, comma (,) is used as the delimiter."]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.trace_ignore_url_set"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "If a specific URL is set, the corresponding transactions are excluded from tracing. The set URLs are not displayed in the transaction list because they do not collect transaction data. Set URLs to exclude from transaction tracing. To set multiple items, use comma (,) as the delimiter."
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
          children: "whatap.trace_ignore_url_prefix"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It sets URL prefixes to exclude from the transaction tracing."
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
          children: "whatap.profile_http_header_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It is used to record the HTTP headers in the trace history."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_header_ignore_keys"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "host,accept,user-agent,referer, accept-language, connection"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It is used to record HTTP headers in the profile details. The set HTTP header names are excluded from collection, and they are marked with \"#.\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_parameter_enabled"
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
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It is used to record HTTP parameters in the trace history. The parameters can be viewed by entering a separate security key."
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "The name and value of the text type are collected among Get and Post parameters. Up to 40 items (20 Gets, 20 Posts) are collected, and parameter names and values are collected up to 256 bytes."
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Parameter data is transferred after being encrypted separately, and can be viewed by decrypting with the key(", (0,jsx_runtime.jsx)(_components.code, {
          children: "paramkey"
        }), ") in ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/usr/whatap/php/security.conf"
        }), " of the application server."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "PHP agent v2.8.0 or later"
              }), ": The security key is set to 6 characters (", (0,jsx_runtime.jsx)(_components.code, {
                children: "paramkey"
              }), ") in the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/security.conf"
              }), " file where the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " file is located."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)("code", {
                class: "my",
                children: "Below PHP agent v2.8.0"
              }), ": The security key is set to 6 characters within the ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WHATAP_HOME"
              }), (0,jsx_runtime.jsx)(_components.em, {
                children: "/paramkey.txt"
              }), " file where the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.ini"
              }), " file is located. If the ", (0,jsx_runtime.jsx)(_components.em, {
                children: "paramkey.txt"
              }), " file does not exist, it is automatically created with a random value."]
            }), "\n"]
          }), "\n"]
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_parameter_url_prefix"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It is used to define the prefix of URL to record HTTP parameters in the trace details."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.profile_http_host_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The transation host is output. If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), ", only the URI is recorded in the URL of a transaction. If the value is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", the output has the format of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/xxx.aaa.com/URL"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.ignore_http_method"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Transactions requested by the specified HTTP method are not collected. To set multiple items, use comma (,) as the delimiter."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          metastring: "title=\"whatap.ini\"",
          children: "# e.g. tracing the transactions whose http_method is OPTIONS or HEAD\nignore_http_method=PATCH,TRACE\n\n# e.g. ignoring the transactions whose http_method is OPTIONS or HEAD\nignore_http_method=OPTIONS,HEAD\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The HTTP methods registered through this option are excluded from the ", (0,jsx_runtime.jsx)(Cmdname, {
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
function _php_track_http_trs_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_track_http_trs_createMdxContent, {
      ...props
    })
  }) : _php_track_http_trs_createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/common-items/_php-multi-trace.mdx


const _php_multi_trace_frontMatter = {};
const _php_multi_trace_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _php_multi_trace_toc = [];
function _php_multi_trace_createMdxContent(props) {
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
          children: "whatap.mtrace_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "It sets whether or not to use the multi-transaction tracing (MTID). By tracing the MTID, you can check the calls between all the registered applications."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_rate"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Percentage"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "10"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "This option sets the issuance rate of the MTID (Multi Transaction ID) issued when the first transaction occurs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_poid_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-po"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the key name to deliver the caller project information to for MTID tracing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_caller_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-mst"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the caller key name to be used for MTID tracing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_callee_key"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x-wtap-tx"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Set the callee key name to be used for MTID tracing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.mtrace_send_url_length"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Int"
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
function _php_multi_trace_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_php_multi_trace_createMdxContent, {
      ...props
    })
  }) : _php_multi_trace_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/en/docusaurus-plugin-content-docs/current/php/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: 'Transactions',
	description: 'The following explains how to set an agent to trace and analyze performance data for each transaction within PHP applications. It evaluates the application performance by tracing transaction requests, response time, and resource usage.',
	keywords: [
		'PHP',
		'Transactions',
		'Configuration',
		'Application'
	],
	isTranslationMissing: false
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "php/agent-transaction",
  "title": "Transactions",
  "description": "The following explains how to set an agent to trace and analyze performance data for each transaction within PHP applications. It evaluates the application performance by tracing transaction requests, response time, and resource usage.",
  "source": "@site/i18n/en/docusaurus-plugin-content-docs/current/php/agent-transaction.mdx",
  "sourceDirName": "php",
  "slug": "/php/agent-transaction",
  "permalink": "/en/php/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/agent-transaction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "Transactions",
    "description": "The following explains how to set an agent to trace and analyze performance data for each transaction within PHP applications. It evaluates the application performance by tracing transaction requests, response time, and resource usage.",
    "keywords": [
      "PHP",
      "Transactions",
      "Configuration",
      "Application"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "Agent log configuration",
    "permalink": "/en/php/agent-log"
  },
  "next": {
    "title": "DB, SQL",
    "permalink": "/en/php/agent-dbsql"
  }
};
const assets = {

};







const agent_transaction_toc = [{
  "value": "Transaction tracing",
  "id": "php-trs-trc",
  "level": 2
}, ...toc, ..._php_track_trs_toc, {
  "value": "Exceptional handling",
  "id": "exception",
  "level": 2
}, {
  "value": "HTTP transaction tracing",
  "id": "php-track-http-trs",
  "level": 2
}, ..._php_track_http_trs_toc, {
  "value": "Multiple transaction trace",
  "id": "multiple-transaction-trace",
  "level": 2
}, ..._php_multi_trace_toc];
function agent_transaction_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname} = _components;
  if (!Cmdname) agent_transaction_missingMdxReference("Cmdname", true);
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
        id: "php-trs-trc",
        children: "Transaction tracing"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following agent options allow you to trace the execution paths of each transaction within applications in detail. You can adjust various aspects, from the minimum response time to the number of execution steps for transactions."
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_php_track_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "exception",
        children: "Exceptional handling"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["The following options are used to manage and monitor exceptions that occur in applications. You can check the stability of applications by registering business exceptions and collecting related statistics. You can also set whether to ignore specific exceptions or treat them as errors if the HTTP status code is an error. Exception-handled items appear as normal transactions in the ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_hitmap",
          className: "uitext"
        }), " or ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "TTL06209",
          className: "uitext"
        }), " window."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.biz_exceptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Set a specific error or exception as business exception. It is not recorded as an error in the hitmap but collected in the statistics. It is applied the same as the error class name that is collected. Multiple items can be registered using comma (,) as the delimiter."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.biz_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Error class collection/Hitmap display level: Includes the ", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), " (blue)/error statistics."]
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.ignore_exceptions"
            }), " ", (0,jsx_runtime.jsx)("span", {
              class: "type",
              children: "String"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "The errors of the registered exceptions are ignored."
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "In case of exception, if the custom exception class is not defined, data is collected as exception by default. To exclude specific exceptions, define the custom exception class and then set the name of exception."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title=\"whatap.conf\"",
              children: "whatap.ignore_exceptions=HttpConnectionServerError(400), GuzzleHttp\\Exception\\ServerException, CustomException\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "tip",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Ignore error class/Hitmap display level: Excludes the ", (0,jsx_runtime.jsx)("span", {
                class: "normal",
                children: "INFO"
              }), " (blue)/error statistics."]
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-track-http-trs",
        children: "HTTP transaction tracing"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following agent options trace and record various data related to HTTP requests and responses. This allows you to closely monitor and analyze the HTTP transactions for applications. You can add parameter values ​​to the transaction names or exclude specific URLs or HTTP methods. You can also record transactions in detail, including HTTP headers and parameters."
      }), (0,jsx_runtime.jsx)(_php_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "multiple-transaction-trace",
        children: "Multiple transaction trace"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "The following options are used to trace and monitor cross-application calls. The options can help you understand the interactions between multiple applications. Various options provided allow you to fine-tune the behaviors for tracing multiple transactions."
      }), (0,jsx_runtime.jsx)(_php_multi_trace_MDXContent, {})]
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
function agent_transaction_missingMdxReference(id, component) {
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