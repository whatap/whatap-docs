"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[82052],{

/***/ 72510:
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
    children: ["트랜잭션 엔드포인트는 트랜잭션의 시작 메소드입니다. HTTP 트랜잭션의 경우에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "HttpServlet.service()"
    }), " 혹은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
      children: "Filter.doFilter()"
    }), "가 트랜잭션의 시작점이고 이곳을 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
      children: "트랜잭션 엔드 포인트"
    }), "라고 부릅니다."]
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

/***/ 6493:
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
      children: "일반적으로 메소드 명칭으로 트랜잭션을 구분할 수 있습니다."
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
          }), " 5가지 옵션을 지정할 수 있습니다."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "full"
              }), ": Full Class 이름을 서비스 명으로 사용합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "class"
              }), ": Class 이름을 서비스 명으로 사용합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "method"
              }), ": Method 이름을 서비스명으로 사용합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "string"
              }), ": 문자열 중에서 첫 번째 파라미터를 서비스 명으로 사용합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "arg"
              }), ": 파라미터 중에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "service_name_index"
              }), " 옵션에 지정한 인덱스에 파라미터를 서비스 명으로 사용합니다."]
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

/***/ 86031:
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
          children: "메소드 트레이스 설정"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["메소드 트레이스를 설정하세요. 확실하게 트랜잭션에서 호출되는 클래스를 지정하세요. DB를 사용하는 프로그램에서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "JDBC 드라이버"
        }), "가 유용합니다."]
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
          children: "트랜잭션 시작 옵션 설정"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "메소드가 호출되면 트랜잭션을 시작하세요. 트랜잭션 시작 옵션과 트랜잭션 시작 시 스택을 덤프하는 옵션을 켜세요."
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
          children: "재시작 후 트레이스 분석"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다시 시작하세요. 이후 서비스를 호출하면 트랜잭션이 추적되는 것을 볼 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["트랜잭션을 조회하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "jdbc.*"
        }), "로 시작하는 모든 클래스의 메소드가 이 트랜잭션으로 나타나는 것을 알 수 있습니다. 트랜잭션 트레이스를 조회하면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "TRANSACTION BACKSTACK"
        }), "라는 메시지 스텝을 확인할 수 있습니다."]
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
          children: "스택 내용 확인"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "스택 내용을 확인하면 어떤 메소드로부터 출발하고 있는지 추정할 수 있습니다."
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Example'",
          children: "com.virtual.web.SimulaNonHttp.execute(SimulaNonHttp.java:147),\ncom.virtual.web.SimulaNonHttp.process(SimulaNonHttp.java:76),\ncom.virtual.web.SimulaNonHttp.run(SimulaNonHttp.java:100)\n"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["위 3개의 메소드 중에 하나를 트랜잭션 시작점으로 판단할 수 있습니다. 이 상황에서는 역 컴파일을 수행해서 적절한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "트랜잭션 엔드포인트"
        }), "를 결정해야 합니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로직을 보면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.run"
        }), " 내에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "while()"
        }), "가 돌면서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.process()"
        }), "을 호출하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "SimulaNonHttp.execute()"
        }), "가 수행됩니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "process()"
        }), "가 적당하다는 것을 알 수 있습니다. 이 부분은 소스를 보고 판단해야 합니다."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "엔드포인트"
          }), "의 가장 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "중요한 기준은 종료되어야 한다는 것"
          }), "입니다. 정상적인 상황에서 지연되지 않고 곧바로 종료되어야 성능적인 판단을 할 수 있습니다."]
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

/***/ 58291:
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
      children: ["트랜잭션 엔드포인트로 지정된 메소드가 시작해서 종료될 때까지의 성능을 트랜잭션 성능이라고 합니다. Non http 트랜잭션을 추적하기 위해서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "엔드포인트"
      }), "를 지정해야 합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "엔드포인트"
        }), " 찾기"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "트랜잭션이 호출될 것으로 추정되는 모든 메소드에 대해 트레이스 추적을 설정하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "다시 시작 후 트랜잭션을 발생시켜 모니터링하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "back stack"
          }), " 옵션을 켜서 진입 메소드를 정확히 파악하세요."]
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

/***/ 39949:
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
          children: "트랜잭션 시작 지점을 다음과 같이 설정하세요."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "hook_service_patterns=com.virtual.web.SimulaNonHttp.process\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "애플리케이션을 다시 시작하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "process()"
      }), " 메소드가 새로운 트랜잭션의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "엔드포인트"
      }), "가 됩니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "hook_service_patterns"
        }), " 옵션은 와일드카드 문자를 사용할 수 없으며, 2개 이상의 값을 설정하려면 쉼표(,)를 구분자로 이용하세요."]
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

/***/ 3335:
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
;// CONCATENATED MODULE: ./docs/common-items/_transaction-profile-step.mdx


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
      children: ["트랜잭션 성능이 트랜잭션 시작과 종료 사이의 요약 지표들이나 속성들을 의미한다면 트랜잭션 트레이스는 트랜잭션이 수행되는 과정 중인 스텝들을 추적하는 것입니다. 트랜잭션이 느리거나 오류가 있다면 그 원인을 추적하기 위해서 수행 이력을 스텝별로 추적해야 합니다. 이것을 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "트랜잭션 트레이싱"
      }), "이라고 합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "와탭이 수집하는 스텝의 종류에는 크게 SQL 스텝, HTTP CALL 스텝, 메시지 스텝, SOCKET 오픈 스텝, DB 연결 스텝, 메소드 스텝 등이 있습니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "와탭의 스텝(Step)은 스팬(Span)과 같은 뜻으로 사용됩니다."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DB 연결 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "RDB에 대한 연결에 대한 성능을 포함합니다. 스텝 정보에는 이름, 응답시간, 에러를 포함합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SQL 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "JDBC SQL에 대한 성능을 포함합니다. 스텝 정보에는 연결 정보, SQL문, 에러가 포함되어 있습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "HTTP Call 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "외부 http 서비스 호출에 대한 성능을 포함합니다. 스텝 정보에는 url, host, port, 응답시간, 에러가 포함됩니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Message 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "트레이스를 수집하는 과정에서 비정형적인 모든 구간에 대한 이력을 수집할 때 메시지 스텝을 사용합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SOCKET 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "ADD"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Socket 오픈을 표현하는 스텝입니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "METHOD 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "메소드 응답시간을 추적합니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ACTIVE STACK 스텝"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "START-END"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "액티브 스택에 대한 정보를 포함합니다. 별도 스레드가 생성하여 트레이스에 추가하는 방식으로 수집합니다."
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


;// CONCATENATED MODULE: ./docs/common-items/_python-trs-profile.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 트레이스의 기본 스텝 수를 지정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1020"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트레이스 기본 스텝을 초과한 경우, 최대 heavy 스텝 수를 제한합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_time"
        }), "을 초과하는 스텝을 카운팅 합니다. 응답시간이 없는 스텝들은 수집되지 않습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1024"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트레이스 스텝의 최대 수를 설정합니다. 수집된 트레이스 스텝 수가 이 값을 초과하면 이후 수집되는 스텝들은 모두 버려집니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), "을 최대 1000으로 설정하면 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_max_count"
        }), "만큼 액티브 스택이 수집됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "100"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heavy 스텝의 기준을 지정합니다. 지정된 값보다 수행 시간이 긴 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_normal_count"
        }), "를 초과하는 경우라도 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "profile_step_heavy_count"
        }), " 이내에서 기록됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "500"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션이 설정값 이하 시간 내에 종료된 경우 트레이스 정보를 수집하지 않습니다. 단 5분 단위로 최초 호출된 URL, 에러가 발생한 트랜잭션에 대한 트레이스 정보는 수집됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 URL의 쿼리 스트링을 함께 수집하는 기능을 활성화합니다."
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
        children: ["트랜잭션에서 쿼리 스트링을 수집할 URL들을 등록합니다. 여러 개를 등록할 때는 콤마(", (0,jsx_runtime.jsx)(_components.em, {
          children: ","
        }), ")를 사용합니다."]
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
        children: ["특정 메소드의 응답시간을 측정하고 싶을 때 사용합니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[CLASS_NAME].[FUNCTION_NAME]"
        }), " 혹은 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[MODULE_NAME]:[FUNCTION_NAME]"
        }), " 형식으로 값을 사용합니다. 콤마(,) 구분자를 통하여 여러 메소드 패턴을 지정할 수 있으며 모듈에 대한 전체 클래스나, 클래스에 대한 전체 모듈은 asterisk(*)를 사용하여 추적이 가능합니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["이 옵션을 통해 등록한 메소드는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "side_hitmap",
                className: "uitext"
              }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06209",
                className: "uitext"
              }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
                sid: "TTL06527",
                className: "uitext"
              }), " 창에서 Method 스텝으로 확인할 수 있습니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "전체 모듈 추적은 오버헤드가 발생할 수 있으니 가급적 정확한 모듈명과 메소드명에 대한 사용을 권장합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션에서 에러 콜 스택을 수집할 때, 콜 스택 최대 라인수를 지정합니다. 이 데이터는 에러 통계 데이터에서 조회할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "50"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션에서 액티브 스택을 수집할 때, 콜 스택 최대 라인수를 지정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "액티브 트랜잭션의 아크 이퀄라이저에서 slow 구간의 응답 기준을 지정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "8000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "액티브 트랜잭션의 아크 이퀄라이저에서 very slow 구간의 응답 기준을 지정합니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션의 종료를 기다리는 제한 시간입니다. 5분 안에 트랜잭션이 끝나지 않는 경우 트랜잭션을 정보를 더 이상 수집하지 않습니다."
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


;// CONCATENATED MODULE: ./docs/common-items/_python-track-http-trs.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트레이스에 HTTP 헤더 정보를 출력합니다. 헤더 수집의 여부와 무관하게 헤더를 트레이스에 노출할 것인가에 대한 설정입니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["트레이스 내역에 http 파라미터 정보를 기록하려면 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "로 설정하세요. 단 파라미터는 별도 보안 키를 입력해야 조회할 수 있습니다. 보안 키는 에이전트 설치 경로의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), " 파일에 6 자리로 지정합니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "paramkey.txt"
        }), " 가 존재하지 않는 경우 자동 생성되며 random 키가 설정됩니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 URL 을 파싱하여 정규화하는 기능을 활성화합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["값을 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "false"
          }), "로 변경 시 패스 파라미터 파싱이 비활성화됩니다. 이 경우 통계 데이터의 의미가 약화됨으로 디버그 용도로만 잠시 사용하는 것이 좋습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "트랜잭션 URL 정규화할 때 패턴 값을 어노테이션에서 추출하여 자동으로 파싱하는 기능을 활성화합니다."
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
        children: "트랜잭션 URL을 파싱하여 정규화 합니다. 호출 URL패턴을 파싱하여 패스 파라미터를 제거합니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["예시, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "라고 선언하면 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/123/b"
          }), " → ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/{v}/b"
          }), "로 치환합니다. 여러 개를 등록할 때는 콤마(,)를 사용합니다. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/a/*/b"
          }), "로 사용하여 특정 형식의 패스 파라미터를 제거하여 수집할 수 있습니다."]
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "js, htm, html, gif, png, jpg, css, swf, ico"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "스태틱 콘텐츠를 판단하는 확장자를 지정합니다. 여기에 설정된 확장자를 가진 트랜잭션들은 트레이스 추적과 카운팅이 제외됩니다."
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
        children: "트랜잭션 추적에서 제외할 URL을 설정합니다. 2개 이상의 값을 설정하려면 쉼표(,)를 구분자로 이용하세요."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이 옵션을 통해 등록한 URL은 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " 창에서 수집 제외됩니다."]
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
        children: "트랜잭션 수집 예외 url prefix를 지정합니다. 지정한 값과 앞부분이 일치하는 url은 트랜잭션 성능을 수집하지 않습니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["이 옵션을 통해 등록한 URL은 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "side_hitmap",
            className: "uitext"
          }), ", ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06209",
            className: "uitext"
          }), " 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL06527",
            className: "uitext"
          }), " 창에서 수집 제외됩니다."]
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


// EXTERNAL MODULE: ./docs/common-items/_edp-def.mdx
var _edp_def = __webpack_require__(72510);
// EXTERNAL MODULE: ./docs/common-items/_edp-track-non-http.mdx
var _edp_track_non_http = __webpack_require__(58291);
// EXTERNAL MODULE: ./docs/common-items/_edp-select.mdx
var _edp_select = __webpack_require__(86031);
// EXTERNAL MODULE: ./docs/common-items/_edp-trs-setting.mdx
var _edp_trs_setting = __webpack_require__(39949);
// EXTERNAL MODULE: ./docs/common-items/_edp-name-setting.mdx
var _edp_name_setting = __webpack_require__(6493);
;// CONCATENATED MODULE: ./docs/common-items/_python-track-non-http-trs.mdx


const _python_track_non_http_trs_frontMatter = {};
const _python_track_non_http_trs_contentTitle = (/* unused pure expression or super */ null && (undefined));










const _python_track_non_http_trs_toc = [..._edp_def/* toc */.RM, ..._edp_track_non_http/* toc */.RM, {
  "value": "대상 선정",
  "id": "대상-선정",
  "level": 3
}, ..._edp_select/* toc */.RM, {
  "value": "트랜잭션 END POINT 지정",
  "id": "트랜잭션-end-point-지정",
  "level": 3
}, ..._edp_trs_setting/* toc */.RM, {
  "value": "트랜잭션 이름 정의",
  "id": "트랜잭션-이름-정의",
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
            children: "트랜잭션 end-point"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_def/* default */.Ay, {}), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "NON HTTP 추적"
          })
        }), "\n", (0,jsx_runtime.jsx)(_edp_track_non_http/* default */.Ay, {}), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "대상-선정",
        children: "대상 선정"
      }), (0,jsx_runtime.jsx)(_edp_select/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "트랜잭션-end-point-지정",
        children: "트랜잭션 END POINT 지정"
      }), (0,jsx_runtime.jsx)(_edp_trs_setting/* default */.Ay, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "트랜잭션-이름-정의",
        children: "트랜잭션 이름 정의"
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


;// CONCATENATED MODULE: ./docs/common-items/_python-multi-trace.mdx


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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "최초 트랜잭션이 발생할 때 발급받는 MTID(Multi Transaction ID)의 발급 비율을 설정하는 옵션입니다. MTID를 추적하면 등록된 모든 애플리케이션 간의 호출을 확인할 수 있습니다. 같은 프로젝트에 속한 애플리케이션은 Caller & Callee 기능을 통해 트랜잭션 트레이스를 바로 확인할 수 있습니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v1"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "현 인스턴스의 애플리케이션 버전을 지정합니다. 임의의 문자열을 지정할 수 있습니다. 이 데이터는 호출 통계를 위해 사용됩니다."
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
        children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "80"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Http Caller는 Callee에게 자신의 URL을 넘겨줍니다. 이때 URL길이를 제한하고 있습니다. 이 길이를 지정합니다."
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


;// CONCATENATED MODULE: ./docs/python/agent-transaction.mdx


const agent_transaction_frontMatter = {
	id: 'agent-transaction',
	title: '트랜잭션',
	description: 'Python 트랜잭션과 관련된 설정을 제공합니다.',
	keywords: [
		'Python',
		'트랜잭션',
		'설정하기'
	],
	isTranslationMissing: false
};
const agent_transaction_contentTitle = undefined;
const metadata = {
  "id": "python/agent-transaction",
  "title": "트랜잭션",
  "description": "Python 트랜잭션과 관련된 설정을 제공합니다.",
  "source": "@site/docs/python/agent-transaction.mdx",
  "sourceDirName": "python",
  "slug": "/python/agent-transaction",
  "permalink": "/whatap-docs/python/agent-transaction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/python/agent-transaction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-transaction",
    "title": "트랜잭션",
    "description": "Python 트랜잭션과 관련된 설정을 제공합니다.",
    "keywords": [
      "Python",
      "트랜잭션",
      "설정하기"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "pySidebar",
  "previous": {
    "title": "에이전트 로그",
    "permalink": "/whatap-docs/python/agent-log"
  },
  "next": {
    "title": "DB, SQL",
    "permalink": "/whatap-docs/python/agent-dbsql"
  }
};
const assets = {

};








const agent_transaction_toc = [{
  "value": "트랜잭션 트레이싱",
  "id": "트랜잭션-트레이싱",
  "level": 2
}, ...toc, ..._python_trs_profile_toc, {
  "value": "HTTP 트랜잭션 추적",
  "id": "http-트랜잭션-추적",
  "level": 2
}, ..._python_track_http_trs_toc, {
  "value": "NON HTTP 트랜잭션 추적",
  "id": "non-http-트랜잭션-추적",
  "level": 2
}, ..._python_track_non_http_trs_toc, {
  "value": "멀티 트랜잭션 추적",
  "id": "멀티-트랜잭션-추적",
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
        children: ["트랜잭션에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "track-transactions-intro",
          children: "다음 문서"
        }), "를 참조하세요. 예를 들어 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "히트맵"
          })
        }), "을 활용한 트랜잭션 분석 안내는 하위 메뉴인 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "trs-view",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "트랜잭션-트레이싱",
        children: "트랜잭션 트레이싱"
      }), (0,jsx_runtime.jsx)(MDXContent, {}), (0,jsx_runtime.jsx)(_python_trs_profile_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "http-트랜잭션-추적",
        children: "HTTP 트랜잭션 추적"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 HTTP 요청 및 응답에 관련된 다양한 정보를 추적하고 기록하는 에이전트 옵션입니다. 이를 통해 사용자는 애플리케이션의 HTTP 트랜잭션을 세밀하게 모니터링하고 분석할 수 있습니다. 트랜잭션 이름에 파라미터 값을 추가하거나 특정 URL이나 HTTP 메소드를 제외할 수 있습니다. 또한 HTTP 헤더 정보와 파라미터 정보를 포함하여 트랜잭션을 보다 상세하게 기록할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_python_track_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "non-http-트랜잭션-추적",
        children: "NON HTTP 트랜잭션 추적"
      }), (0,jsx_runtime.jsx)(_python_track_non_http_trs_MDXContent, {})]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "멀티-트랜잭션-추적",
        children: "멀티 트랜잭션 추적"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음은 애플리케이션 간 호출을 추적하고 모니터링하기 위한 옵션입니다. 이 옵션을 통해 사용자는 여러 애플리케이션 간의 상호작용을 이해하는 데 도움이 받을 수 있습니다. 제공하는 다양한 옵션을 통해 멀티 트랜잭션 추적의 세부적인 동작을 조정할 수 있습니다."
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