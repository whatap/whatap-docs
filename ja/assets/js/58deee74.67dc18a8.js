"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[75730],{

/***/ 11172:
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
    children: ["トランザクションエンドポイントは、トランザクションの開始メソッドです。HTTPトランザクションの場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "HttpServlet.service()"
    }), "または", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "Filter.doFilter()"
    }), "がトランザクションの開始点であり、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "トランザクションエンドポイント"
    }), "と呼びます。"]
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

/***/ 67283:
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
      children: "一般的に、メソッド名でトランザクションを区別できます。"
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
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "full"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "class"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "method"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "string"
          }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "arg"
          }), "の5つのオプションを指定できます。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "full"
              }), ": Full Class名をサービス名として使用します。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "class"
              }), ": Class名をサービス名として使用します。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "method"
              }), "：Method名をサービス名として使用します。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), "：文字列の最初のパラメータをサービス名として使用します。"]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "arg"
              }), "：パラメータで", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "service_name_index"
              }), "オプションに指定されたインデックスにパラメータをサービス名として使用します。"]
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

/***/ 3901:
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
          children: "メソッドトレース設定"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["メソッドトレースを設定します。トランザクションで呼び出されるクラスを指定してください。DBを使用するプログラムでは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "JDBCドライバー"
        }), "が便利です。"]
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
          children: "トランザクション開始オプションの設定"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "メソッドが呼び出されたら、トランザクションを開始します。トランザクション開始オプションとトランザクション開始時にスタックをダンプするオプションをオンにします。"
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
          children: "再起動後のトレース分析"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "再起動してください。あとからサービスを呼び出すと、トランザクションが追跡されていることがわかります。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["トランザクションを検索すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jdbc.*"
        }), "で始まるすべてのクラスのメソッドがこのトランザクションで表示されることがわかります。トランザクショントレースを検索すると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "TRANSACTION BACKSTACK"
        }), "というメッセージステップが表示されます。"]
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
          children: "スタックの内容を確認"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "スタックの内容を確認することで、どのメソッドから開始するかを推定できます。"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Example'",
          children: "com.virtual.web.SimulaNonHttp.execute(SimulaNonHttp.java:147),\ncom.virtual.web.SimulaNonHttp.process(SimulaNonHttp.java:76),\ncom.virtual.web.SimulaNonHttp.run(SimulaNonHttp.java:100)\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["上記の3つのメソッドのいずれかをトランザクションの開始点として判断できます。この状況では、逆コンパイルを実行して適切な", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "トランザクションエンドポイント"
        }), "を決定する必要があります。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["ロジックを見ると、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHtp.run"
        }), "内で", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "while()"
        }), "が動作しながら", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHtp.process()"
        }), "を呼び出し、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHtp.execute()"
        }), "が実行されます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "process()"
        }), "が適当であることがわかります。この部分はソースを見て判断する必要があります。"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "エンドポイント"
          }), "の最も**重要な基準は終了機能です。**通常の状態では、遅延することなく直ぐに終了する必要があり、パフォーマンスの判断ができます。"]
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

/***/ 82713:
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
      children: ["トランザクションエンドポイントとして指定されたメソッドが開始されて終了するまでのパフォーマンスをトランザクションパフォーマンスと呼びます。Non HTTPトランザクションを追跡するには、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "エンドポイント"
      }), "を指定する必要があります。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "エンドポイント"
        }), "検索"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "トランザクションが呼び出されると推定されるすべてのメソッドのトレース追跡を設定してください。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "再起動後、トランザクションを発生させてモニタリングしてください。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "back stack"
          }), "オプションをオンにして、入力メソッドを正しく理解してください。"]
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

/***/ 16371:
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
          children: "トランザクションの開始点を次のように設定します。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "hook_service_patterns=com.virtual.web.SimulaNonHttp.process\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "アプリケーションを再起動してください。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "process()"
      }), "メソッドは、新しいトランザクションの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "エンドポイント"
      }), "になります。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hook_service_patterns"
        }), "オプションではワイルドカード文字を使用できません。2つ以上の値を設定するにはコンマ(,)を区切り文字として利用してください。"]
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

/***/ 14391:
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
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_transaction-profile-step.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
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
      children: ["トランザクション性能とは、トランザクションの開始と終了までの要約指標や属性を意味します。一方、トランザクショントレースは、トランザクションが実行されているステップのトレースです。トランザクションが遅い場合やエラーが発生した場合は、その原因を追跡するために実行履歴をステップごとに追跡する必要があります。これを", (0,jsx_runtime.jsx)(_components.strong, {
        children: "トランザクショントレーシング"
      }), "と呼ばれます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "WhaTapが収集するステップの種類は、大きく分けてSQLステップ、HTTP CALLステップ、メッセージステップ、SOCKETオープンステップ、DB接続ステップ、メソッドステップなどがあります。"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapのステップ(Step)は、スパン(Span)と同じ意味で使用します。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DB接続ステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RDBへの接続のパフォーマンスが含まれます。ステップ情報には、名前、応答時間、エラーが含まれます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQLステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JDBC SQLのパフォーマンスが含まれます。ステップ情報には接続情報、SQL文、エラーが含まれています。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP Callステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "外部HTTPサービス呼び出しのパフォーマンスが含まれます。ステップ情報にはurl、host、port、応答時間、エラーが含まれます。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Messageステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トレースを収集する過程で、非構造化のすべての間隔の履歴を収集する際にメッセージステップを使用します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SOCKETステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Socketオープンを表現するステップです。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "METHODステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "メソッド応答時間を追跡します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ACTIVE STACK ステップ"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アクティブスタックに関する情報が含まれます。別のスレッドを作成し、トレースに追加することで収集されます。"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-trs-profile.mdx


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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクショントレースの基本ステップ数を指定します。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "1020"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トレースの基本ステップを超えた場合、最大heavyのステップ数を制限します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "の", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_time"
        }), "を超えるステップをカウントします。レスポンス時間のないステップは収集されません。"]
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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トレースステップの最大数を設定します。収集されたトレースステップの数が設定値を超えると、その後に収集されるステップはすべて破棄されます。", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), "を最大1000に設定すると、", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_max_count"
        }), "までアクティブスタックが収集されます。"]
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "100"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heavyステップの条件を指定します。指定された値より実行時間が長い場合は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "を超える場合でも", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), "以内で記録されます。"]
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションが設定値以下の時間内に終了した場合、トレース情報を収集しません。ただし、5分単位で最初に呼び出されたURL、エラーが発生したトランザクションに関するトレース情報は収集されます。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションURLのクエリストリングをまとめて収集する機能を有効にします。"
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
        children: ["トランザクションからクエリストリングを収集するURLを登録します。複数を登録する場合は、コンマ(", (0,jsx_runtime.jsx)(_components.em, {
          children: ","
        }), ")を使います。"]
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
        children: ["特定メソッドの応答時間を測定する場合に使用します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[CLASS_NAME].[FUNCTION_NAME]"
        }), "または", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[FUNCTION_NAME]"
        }), "の形式で値を使用します。コンマ(,)区切り文字を使用して、複数のメソッドパターンを指定することができ、モジュールの全体クラスやクラスの全体モジュールは、asterisk(*)を使用して追跡できます。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["このオプションで登録したメソッドは、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_hitmap",
                className: "uitext"
              }), "、", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), "または", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), "画面のMethodステップで確認できます。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "モジュールの追跡はオーバーヘッドが発生する可能性があります。そのため、正しいモジュール名とメソッド名を使用してください。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションからエラーコールスタックを収集する場合は、コールスタックの最大ライン数を指定します。このデータは、エラー統計データから表示できます。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションからアクティブスタックを収集する場合は、コールスタックの最大ライン数を指定します。"
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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "アクティブトランザクションのアークイコライザーからslow区間の応答基準を指定します。"
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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "アクティブトランザクションのアークイコライザーからvery slow区間の応答基準を指定します。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションの終了を待機する制限時間です。5分以内にトランザクションが終了しない場合、トランザクション情報を収集しません。"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-track-http-trs.mdx


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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トレースにHTTPヘッダーの情報を出力します。ヘッダー収集の有無に関係なく、ヘッダーをトレースに公開するための設定です。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トレース履歴にhttpパラメータ情報を記録する場合は", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "に設定してください。ただし、パラメータを表示するには、パラメータにセキュリティキーを入力する必要があります。セキュリティキーは、エージェントのインストールパスにある", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), "ファイルに6桁で指定できます。", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), "が存在しない場合は、自動生成され、randomキーが設定されます。"]
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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションURLをパーシングおよび正規化する機能を有効にします。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["値を", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          }), "に変更すると、パスパラメータのパーシングが無効になります。 この場合、統計データの意味がなさないため、デバッグ目的で使用することをお勧めします。"]
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
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "トランザクションURLを正規化すると、パターン値をアノテーションから抽出して自動的にパーシングする機能を有効にします。"
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
        children: "トランザクションURLをパーシングして正規化します。呼び出しURLパターンをパーシングしてパスパラメータを削除します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["例)", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "と宣言する場合、", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/123/b"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "に置き換えます。複数を登録するにはコンマ(,)を使用します。", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/*/b"
          }), "で使用して、特定の形式のパスパラメータを削除して収集できます。"]
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "js, htm, html, gif, png, jpg, css, swf, ico"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "スタティックコンテンツを判断する拡張子を指定します。ここで設定された拡張子を持つトランザクションは、トレース追跡とカウントが除外されます。"
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
        children: "トランザクション追跡から除外するURLを設定します。2つ以上の値を設定する場合は、コンマ(,)を区切り文字として使用します。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["このオプションを通じて登録したURLは、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), "または", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), "画面で収集が除外されます。"]
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
        children: "トランザクション収集を除外するURL prefixを指定します。指定した値と一致するURLは、トランザクションのパフォーマンスを収集しません。"
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["このオプションを通じて登録したURLは、", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), "または", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), "画面で収集が除外されます。"]
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


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_edp-def.mdx
var _edp_def = __webpack_require__(11172);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_edp-track-non-http.mdx
var _edp_track_non_http = __webpack_require__(82713);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_edp-select.mdx
var _edp_select = __webpack_require__(3901);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_edp-trs-setting.mdx
var _edp_trs_setting = __webpack_require__(16371);
// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_edp-name-setting.mdx
var _edp_name_setting = __webpack_require__(67283);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-track-non-http-trs.mdx


const _python_track_non_http_trs_frontMatter = {};
const _python_track_non_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));










const _python_track_non_http_trs_toc = [..._edp_def/* toc */.RM, ..._edp_track_non_http/* toc */.RM, {
  "value": "対象選択",
  "id": "対象選択",
  "level": 3
}, ..._edp_select/* toc */.RM, {
  "value": "トランザクションのEND POINT指定",
  "id": "トランザクションのend-point指定",
  "level": 3
}, ..._edp_trs_setting/* toc */.RM, {
  "value": "トランザクション名の定義",
  "id": "トランザクション名の定義",
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
            children: "トランザクションend-point"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_def/* default */.Ay, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "NON HTTP追跡"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_track_non_http/* default */.Ay, {}), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "対象選択",
        children: "対象選択"
      }), (0,jsx_runtime.jsx)(_edp_select/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "トランザクションのend-point指定",
        children: "トランザクションのEND POINT指定"
      }), (0,jsx_runtime.jsx)(_edp_trs_setting/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "トランザクション名の定義",
        children: "トランザクション名の定義"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_python-multi-trace.mdx


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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "最初のトランザクションが発生したときに発行されるMTID(Multi Transaction ID)の発行率を設定するオプションです。MTIDを追跡することで、登録されているすべてのアプリケーション間の呼び出しを確認できます。同じプロジェクトに属するアプリケーションは、Caller&Callee機能によりトランザクショントレースを直接確認できます。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "v1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "現在のインスタンスのアプリケーションバージョンを指定します。任意の文字列を指定できます。このデータは、呼び出し統計に使用されます。"
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
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "HTTP CallerはCalleeに自分のURLを渡します。この時、URLの長さを制限しています。この長さを指定します。"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/python/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: 'トランザクション',
	description: 'Pythonトランザクションに関連する設定を提供します。',
	keywords: [
		'Python',
		'トランザクション',
		'設定'
	]
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "python/agent-transaction",
  "title": "トランザクション",
  "description": "Pythonトランザクションに関連する設定を提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/python/agent-transaction.mdx",
  "sourceDirName": "python",
  "slug": "/python/agent-transaction",
  "permalink": "/ja/python/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/python/agent-transaction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "トランザクション",
    "description": "Pythonトランザクションに関連する設定を提供します。",
    "keywords": [
      "Python",
      "トランザクション",
      "設定"
    ]
  },
  "sidebar": "pySidebar",
  "previous": {
    "title": "エージェントログ",
    "permalink": "/ja/python/agent-log"
  },
  "next": {
    "title": "DB、SQL",
    "permalink": "/ja/python/agent-dbsql"
  }
};
const assets = {

};








const agent_transaction_toc = [{
  "value": "トランザクショントレーシング",
  "id": "トランザクショントレーシング",
  "level": 2
}, ...toc, ..._python_trs_profile_toc, {
  "value": "HTTPトランザクションの追跡",
  "id": "httpトランザクションの追跡",
  "level": 2
}, ..._python_track_http_trs_toc, {
  "value": "非HTTPトランザクションのトレース",
  "id": "非httpトランザクションのトレース",
  "level": 2
}, ..._python_track_non_http_trs_toc, {
  "value": "マルチトランザクショントレース",
  "id": "マルチトランザクショントレース",
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
        children: ["トランザクションの詳細については、", (0,jsx_runtime.jsx)(_components.a, {
          href: "track-transactions-intro",
          children: "次の文書"
        }), "を参照してください。例として、", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: "ヒットマップ"
          })
        }), "を使用したトランザクション分析のガイドについては、サブメニューである", (0,jsx_runtime.jsx)(_components.a, {
          href: "trs-view",
          children: "次の文書"
        }), "を参照してください。"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "トランザクショントレーシング",
        children: "トランザクショントレーシング"
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_python_trs_profile_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "httpトランザクションの追跡",
        children: "HTTPトランザクションの追跡"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "以下は、HTTPリクエストと応答に関連する様々な情報を追跡および記録するエージェントのオプションです。これにより、ユーザーはアプリケーションのHTTPトランザクションを細かくモニタリングし分析できます。トランザクション名にパラメータ値を追加または特定のURLやHTTPメソッドを除外できます。またHTTPヘッダー情報やパラメータ情報を含め、トランザクションをより詳細に記録できます。"
      }), (0,jsx_runtime.jsx)(_python_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "非httpトランザクションのトレース",
        children: "非HTTPトランザクションのトレース"
      }), (0,jsx_runtime.jsx)(_python_track_non_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "マルチトランザクショントレース",
        children: "マルチトランザクショントレース"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "以下は、アプリケーション間の呼び出しを追跡しモニタリングするためのオプションです。このオプションにより、ユーザーは複数のアプリケーション間の相互作用を理解できます。提供する様々なオプションにより、マルチトランザクションの追跡に対する詳細な動作を調整できます。"
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