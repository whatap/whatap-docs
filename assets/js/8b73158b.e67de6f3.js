"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["14364"], {
"92600": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Xclude} = _components;
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스를 사용하기 위해서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://www.whatap.io/ko/signup/",
        children: "회원 가입"
      }), " 후 프로젝트를 생성하고 대상 서버에 에이전트를 설치해야 합니다. 회원 가입에 관한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "../account/account-manage",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "oracle-pro,oracle",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 동영상 가이드를 참조하세요."
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"27500": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {InDoc, TabItem, Tabs, Xclude} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "oracle-pro,cubrid,mssql",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "os",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "linux",
          label: "Linux",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"BASH\"",
              children: "./uid.sh {DB_USER} {DB_PASSWORD}\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "#check-accesskey",
                    children: "액세스 키 확인"
                  })]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["Azure Database 환경의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), "를 DB_USER@DB_name과 같은 형식으로 입력해야 합니다."]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_PASSWORD"
                  }), "에 특수문자가 포함될 경우 특수문자 앞에 Escape Character(\\)를 같이 입력하세요."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='Example'",
                    children: "./uid.sh whatap whatap\\!pwd\n\n# 특수문자가 2개 이상일 경우 각각 이스케이프 문자 추가\n./uid.sh whatap whatap\\!\\@pwd\n"
                  })
                }), "\n"]
              }), "\n"]
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "windows",
          label: "Windows",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"CMD\"",
              children: "uid.bat \"DB_USER\" \"DB_PASSWORD\"\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "#check-accesskey",
                    children: "액세스 키 확인"
                  })]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["Azure Database 환경의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), "를 DB_USER@DB_name과 같은 형식으로 입력해야 합니다."]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_PASSWORD"
                  }), "에 특수문자가 포함될 경우 특수문자 앞에 Escape Character(\\)를 같이 입력하세요."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='Example'",
                    children: "uid.bat whatap whatap\\!pwd\n\n# 특수문자가 2개 이상일 경우 각각 이스케이프 문자 추가\nuid.bat whatap whatap\\!\\@pwd\n"
                  })
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "oracle-pro",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"BASH\"",
          children: "./uid.sh {DB_USER} {DB_PASSWORD}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#check-accesskey",
                children: "액세스 키 확인"
              })]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Azure Database 환경의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_USER"
              }), "를 DB_USER@DB_name과 같은 형식으로 입력해야 합니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_USER"
              }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_PASSWORD"
              }), "에 특수문자가 포함될 경우 특수문자 앞에 Escape Character(\\)를 같이 입력하세요."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title='Example'",
                children: "./uid.sh whatap whatap\\!pwd\n\n# 특수문자가 2개 이상일 경우 각각 이스케이프 문자 추가\n./uid.sh whatap whatap\\!\\@pwd\n"
              })
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "cubrid",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["CUBRID 환경에서 유저 파일은 사용자 DB(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "dba"
        }), ")와 CUBRID Manager(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "admin"
        }), ")를 대상으로 모두 실행해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "os",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "linux",
          label: "Linux",
          default: true,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"BASH\"",
              children: "./uid.sh dba {DB_Password}\n./cmsuid.sh admin {Admin_Password}\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "windows",
          label: "Windows",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"CMD\"",
              children: "./uid.bat \"dba\" \"DB_Password\"\n./cmsuid.bat \"admin\" \"Admin_Password\"\n"
            })
          })
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#check-accesskey",
                children: "액세스 키 확인"
              })]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["Linux 환경에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_USER"
              }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_PASSWORD"
              }), "에 특수문자가 포함될 경우 특수문자 앞에 Escape Character(\\)를 같이 입력하세요."]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                className: "language-bash",
                metastring: "title='Example'",
                children: "./uid.sh whatap whatap\\!pwd\n\n# 특수문자가 2개 이상일 경우 각각 이스케이프 문자 추가\n./uid.sh whatap whatap\\!\\@pwd\n"
              })
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "mssql",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "os",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "windows",
          label: "Windows",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"CMD\"",
              children: "uid.bat \"DB_USER\" \"DB_PASSWORD\"\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "#check-accesskey",
                    children: "액세스 키 확인"
                  })]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["Azure Database 환경의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), "를 DB_USER@DB_name과 같은 형식으로 입력해야 합니다."]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["Windows에서는 패스워드의 특수 문자에 Escape Character(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "\\"
                  }), ")가 필요 없습니다. 다만, 패스워드에 큰 따옴표(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "\""
                  }), ")를 사용할 때에는 필요합니다."]
                }), "\n"]
              }), "\n"]
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "linux",
          label: "Linux",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=\"BASH\"",
              children: "./uid.sh {DB_USER} {DB_PASSWORD}\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                  children: "최초 한번만 설정하면 그 이후부터는 암호화된 UID를 통해 모니터링 대상 데이터베이스 서버로부터 데이터 수집을 진행합니다."
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["DB 유저 파일을 생성하기 위해서는 프로젝트 액세스 키가 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " 파일에 입력되어 있어야 합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                    href: "#check-accesskey",
                    children: "액세스 키 확인"
                  })]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: ["Azure Database 환경의 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), "를 DB_USER@DB_name과 같은 형식으로 입력해야 합니다."]
                }), "\n"]
              }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                  children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_USER"
                  }), " 또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    children: "DB_PASSWORD"
                  }), "에 특수문자가 포함될 경우 특수문자 앞에 Escape Character(\\)를 같이 입력하세요."]
                }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
                  children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                    className: "language-bash",
                    metastring: "title='Example'",
                    children: "./uid.sh whatap whatap\\!pwd\n\n# 특수문자가 2개 이상일 경우 각각 이스케이프 문자 추가\n./uid.sh whatap whatap\\!\\@pwd\n"
                  })
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"79798": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "계정 생성",
  "id": "uid",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, InDoc, TabItem, Tabs, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "uid",
      children: "계정 생성"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 모니터링을 하기 위해 필요한 권한을 가진 계정을 생성하세요. root(admin) 계정으로 로그인해 계정을 생성하세요."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "altibase",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-sql",
          metastring: "title=\"SQL\"",
          children: "create user DB_User with password 'DB Password';\n"
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "mssql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "mssql",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
          value: "sqlserver2014over",
          label: "SQL Server 2014+",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "create login DB_User with password='DB Password';\ncreate user DB_User for login DB_User;\ngrant connect any database to DB_User;\ngrant view server state to DB_User;\ngrant view any definition to DB_User;\n"
            })
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "sqlserver2012",
          label: "SQL Server 2012 or earlier",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "create login DB_User with password='DB Password';\ncreate user DB_User for login DB_User;\ngrant view server state to DB_User;\ngrant view any definition to DB_User;\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "모니터링하려는 DB마다 모니터링 계정을 추가 생성하고 권한을 부여해야 합니다."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "use DB_Name;\ncreate user DB_User for login DB_User;\ngrant select, execute to DB_User;\n"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "sqlserver2018",
          label: "SQL Server 2008 or earlier",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "create login DB_User with password='DB Password';\ncreate user DB_User for login DB_User;\ngrant view server state to DB_User;\ngrant view any definition to DB_User;\nEXEC sp_configure 'show advanced options', 1;\nRECONFIGURE;\nEXEC sp_configure 'Ole Automation Procedures', 1;\nRECONFIGURE;\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "모니터링하려는 DB마다 모니터링 계정을 추가 생성하고 권한을 부여해야 합니다."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "use DB_Name;\ncreate user DB_User for login DB_User;\ngrant select, execute to DB_User;\n"
            })
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Kill session 사용 시 추가 권한"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "grant alter any connection to DB_User;\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Azure SQL Database 환경에서 Kill session 사용 시 추가 권한"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "grant kill database connection to DB_User;\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.strong, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbJobInfo",
                className: "uitext"
              }), " 및 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
                sid: "side_dbBackupRecoveryHistory",
                className: "uitext"
              }), " 메뉴 기능 이용 시 필요 권한"]
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "msdb 데이터베이스에 액세스할 수 있도록 권한을 부여하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "USE msdb;\nCREATE USER DB_User FOR LOGIN DB_User;\nGRANT SELECT to DB_User;\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "오브젝트 정보 조회 시 필요 권한"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "2014 버전 이하에서는 모니터링 대상 DB마다 접속하여 권한을 부여하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "grant view any definition to DB_User;\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "플랜 조회 시 필요 권한"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "각 DB마다 접속하여 수행하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-sql",
              children: "grant showplan to DB_User;\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
        product: "postgresql,mysql,altibase,mssql",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["이미 있는 계정을 사용하고 싶다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#create-db-user",
                children: "DB 유저 파일 생성"
              }), "으로 넘어가세요. 권한이 없을 경우 모니터링을 시작할 수 없습니다."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["예시 코드에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "whatap"
              }), "은 DB 사용자 계정 이름입니다. 사용자가 이용하는 사용자 계정 이름으로 변경하세요."]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,altibase,mssql",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["권한을 가진 계정이 있다면 이 단계를 생략하고 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "#check-accesskey",
                children: "다음 단계"
              }), "로 넘어가세요."]
            }), "\n"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["예시 코드에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "DB_User"
              }), "는 DB 사용자 계정 이름입니다. 사용자가 이용하는 사용자 계정 이름으로 변경하세요."]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["예시 코드의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "DB_Password"
          }), "에는 사용자 비밀번호를 입력하세요."]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"1404": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "다음 단계",
  "id": "nextstep",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "nextstep",
      children: "다음 단계"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "nextstep",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "설치 점검하기"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트 생성 및 에이전트 설치, 기본 에이전트 옵션까지 모두 적용했다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "after-install-agent",
              children: "다음 문서"
            }), "에서 점검 사항을 확인하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "설치 문제 해결"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["에이전트 설치 시 발생할 수 있는 다양한 문제들과 이를 해결하기 위한 구체적인 지침을 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "troubleshooting",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "에이전트 설정"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            product: "oracle-pro,mssql",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), ") 파일에 옵션을 적용해 모니터링을 위한 다양한 기능을 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-settings",
                children: "다음 문서"
              }), "를 참조하세요."]
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
            product: "oracle-pro,mssql",
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["에이전트 설정(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
                children: "whatap.conf"
              }), ") 파일에 옵션을 적용해 모니터링을 위한 다양한 기능을 제공합니다. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-dbx-settings",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["데이터베이스 서버 자원을 추가로 모니터링하려면 부가 에이전트(XOS)에 추가 옵션을 설정하세요. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-xos-settings",
                children: "다음 문서"
              }), "를 참조하세요."]
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
            product: "cubrid",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["XCUB 에이전트 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "agent-xcub-settings",
                children: "다음 문서"
              }), "를 참조하세요."]
            })
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
        product: "postgresql,mysql,oracle,mssql",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "클라우드 설정"
              })
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: ["클라우드 서비스에서 제공하는 모니터링 지표를 데이터베이스 프로젝트의 대시보드에서 추가로 수집하고 모니터링하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
                href: "cloudsettings",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "모니터링 시작하기"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모든 설정을 완료한 다음 데이터베이스 서버의 지표를 에이전트가 정보를 수집하기 시작합니다. 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_instanceList",
              className: "uitext"
            }), " 메뉴에서 모니터링 데이터가 수집되는지 확인하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_instanceList",
              className: "uitext"
            }), "에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "instance-list",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"81369": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "모니터링 시작하기",
  "id": "start-monitoring",
  "level": 2
}, {
  "value": "서비스 등록하기",
  "id": "서비스-등록하기",
  "level": 3
}, {
  "value": "서비스 삭제하기",
  "id": "서비스-삭제하기",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, InDoc, TabItem, Tabs, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "start-monitoring",
      children: "모니터링 시작하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트를 설치한 경로에서 쉘 스크립트(또는 배치 파일)를 실행하세요."
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
      product: "oracle-pro,mssql",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "os",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "linux",
          label: "Linux",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "./start.sh\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["데몬처럼 사용하고 싶은 경우에는 다음 명령어를 실행하세요. 단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "nohup"
            }), "을 설치한 환경에서만 동작합니다."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "./startd.sh\n"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "windows",
          label: "Windows",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "start.bat\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Windows 시스템 시작 시 자동으로 에이전트를 시작하도록 서비스에 등록할 수 있습니다. 다음 명령어를 참조하세요."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "# 서비스 등록 시\ninstall_WindowsService.bat create WhatapDBXAgent\n\n# 서비스 삭제 시\ninstall_WindowsService.bat delete WhatapDBXAgent\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "제어판"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Windows 도구"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "서비스"
              }), "(services.msc)에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "WhatapDBXAgent"
              }), " 서비스를 시작하거나 중지할 수 있습니다. 사용하는 Windows 버전에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "서비스"
              }), " 경로는 다를 수 있습니다."]
            })
          })]
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["데이터베이스 모니터링을 위한 에이전트 설치를 완료했습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "after-install-agent",
          children: "다음 문서"
        }), "에서 설치 후 점검 사항을 확인하세요."]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "oracle-pro",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "./start.sh\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["데몬처럼 사용하고 싶은 경우에는 다음 명령어를 실행하세요. 단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "nohup"
        }), "을 설치한 환경에서만 동작합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "./startd.sh\n"
        })
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "mssql",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
        groupId: "os",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "windows",
          label: "Windows",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "start.bat\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["화면에 표시된 실행 로그에 에러가 없는지 확인하고, 대시보드 화면(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_instanceList",
              className: "uitext"
            }), ")에 차트가 정상 표시되는지 확인하세요. 이상이 없다면 Ctrl+C를 눌러 실행을 종료하고, 다음 순서에 따라 윈도우 서비스에 등록하세요."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
            id: "서비스-등록하기",
            children: "서비스 등록하기"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "다음 명령어를 실행해 서비스를 등록하세요."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "install_WindowsService.bat create WhatapDBXAgent\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "서비스를 등록하면 Windows의 서비스 관리 도구에서 아래와 같이 확인할 수 있습니다. 해당 서비스를 찾아 마우스 오른쪽 버튼으로 클릭하고, 시작(Start) 옵션을 선택해 서비스를 시작하세요."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "Register a service",
              src: (__webpack_require__(85687)/* ["default"] */.Z) + "",
              width: "720",
              height: "225"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
            type: "note",
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
              children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "제어판"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "Windows 도구"
              }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "서비스"
              }), "(services.msc)에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "WhatapDBXAgent"
              }), " 서비스를 시작하거나 중지할 수 있습니다. 사용하는 Windows 버전에 따라 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "서비스"
              }), " 경로는 다를 수 있습니다."]
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
            id: "서비스-삭제하기",
            children: "서비스 삭제하기"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "다음 명령어를 실행해 서비스를 삭제할 수 있습니다."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "install_WindowsService.bat delete WhatapDBXAgent\n"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TabItem, {
          value: "linux",
          label: "Linux",
          default: true,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "./start.sh\n"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["데몬처럼 사용하고 싶은 경우에는 다음 명령어를 실행하세요. 단 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "nohup"
            }), "을 설치한 환경에서만 동작합니다."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-bash",
              children: "./startd.sh\n"
            })
          })]
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"44378": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {InDoc} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "데이터베이스 접속을 위해 암호화된 UID를 생성합니다. username과 password를 입력하고 쉘 스크립트(또는 배치 파일)를 실행하세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "redis",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Redis 6 버전 이하"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "uid.sh"
            }), " 쉘 스크립트 파일(또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "uid.bat"
            }), " 배치 파일)은 와탭 데이터베이스 에이전트를 설치한 경로에서 찾을 수 있습니다. user 없이 암호만 있는 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              children: "DB_USER"
            }), "를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              children: "\"\""
            }), "로 설정합니다. 예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "./uid.sh \"\" whatap\\!pwd"
            })]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Redis 6 버전 이상"
            }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "uid.sh"
            }), " 쉘 스크립트 파일(또는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", {
              children: "uid.bat"
            }), " 배치 파일)은 와탭 데이터베이스 에이전트를 설치한 경로에서 찾을 수 있습니다. user 없이 암호만 있는 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              children: "DB_USER"
            }), "를 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
              children: "default"
            }), "로 설정합니다. 예, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "./uid.sh default whatap\\!pwd"
            })]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"76988": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "액세스 키 확인",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "액세스 키 확인"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액세스 키"
      }), "는 와탭 서비스 활성화를 위한 고유 ID입니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["설치 안내 섹션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), " 버튼을 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액세스 키"
      }), "를 자동으로 발급받은 후 다음 단계를 진행합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "caution",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "액세스 키"
          }), "는 다른 프로젝트에 중복 사용할 수 없으며 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "네임스페이스 프로젝트"
          }), "에도 별도 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "액세스 키"
          }), "가 필요합니다."]
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["프로젝트를 생성한 다음에는 자동으로 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " 페이지로 이동합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), " 페이지로 이동하지 않는다면 화면 왼쪽 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "agent_installation",
          className: "uitext"
        }), "를 선택하세요."]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"88042": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "프로젝트 생성하기",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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
      children: "프로젝트 생성하기"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InDoc, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트를 설치하기 전에 먼저 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "피처 프로젝트"
        }), "(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
          class: "Features",
          children: "Features"
        }), ")를 생성하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "로 이동한 다음 로그인하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트를 생성하려면 화면 왼쪽 사이드 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN07332",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "+"
              })
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06696",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07073",
              className: "uitext"
            }), " 화면에서 프로젝트에 설치할 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "피처 상품"
            }), "을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), " 항목을 차례로 설정하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "프로젝트 생성"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07727",
              className: "uitext"
            }), "에서 경고 알림 메시지의 언어를 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모든 설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "creating_a_project",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Xclude, {
      product: "kafka",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트를 설치하기 전에 먼저 프로젝트를 생성하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "로 이동한 다음 로그인하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["프로젝트를 생성하려면 화면 왼쪽 사이드 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN07332",
              className: "uitext"
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "+"
              })
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "BTN06696",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07073",
              className: "uitext"
            }), " 화면에서 프로젝트에 설치할 상품을 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_name",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), " 항목을 차례로 설정하세요."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v3.png",
            desc: "프로젝트 생성"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "TTL07727",
              className: "uitext"
            }), "에서 경고 알림 메시지의 언어를 선택하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["모든 설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "creating_a_project",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "data_server_region",
              className: "uitext"
            }), "은 리전(클라우드 서비스를 제공하기 위해 설치한 데이터 센터의 묶음)을 의미합니다. 특정 리전을 선택하면 해당 리전에 속한 데이터 센터에 사용자의 데이터를 저장합니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_time_zone",
              className: "uitext"
            }), "은 알림, 보고서를 생성하는 기준 시간입니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["여러 개의 프로젝트를 그룹으로 묶어 관리하려면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "project_groups",
              className: "uitext"
            }), "에서 그룹을 선택하거나 그룹을 추가하세요. 그룹에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "/project/group",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["조직을 선택한 상태에서 프로젝트를 추가할 경우 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "group_of_organization",
              className: "uitext"
            }), "을 필수로 설정해야 합니다."]
          }), "\n"]
        }), "\n"]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
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



}),
"33370": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_oracle_pro_install_agent_mdx_8b7_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-oracle-pro-install-agent-mdx-8b7.json
var site_docs_oracle_pro_install_agent_mdx_8b7_namespaceObject = JSON.parse('{"id":"oracle-pro/install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","source":"@site/docs/oracle-pro/install-agent.mdx","sourceDirName":"oracle-pro","slug":"/oracle-pro/install-agent","permalink":"/oracle-pro/install-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/oracle-pro/install-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"install-agent","title":"에이전트 설치","description":"와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.","keywords":["Oracle Pro","데이터베이스","에이전트"],"isTranslationMissing":false},"sidebar":"dboracledmaSidebar","previous":{"title":"지원 환경","permalink":"/oracle-pro/monitoring-support"},"next":{"title":"설치 점검 사항","permalink":"/oracle-pro/after-install-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_import_db-create-db-user-desc.mdx
var _import_db_create_db_user_desc = __webpack_require__("44378");
// EXTERNAL MODULE: ./docs/common-items/_agent-signup-guide.mdx
var _agent_signup_guide = __webpack_require__("92600");
// EXTERNAL MODULE: ./docs/getting-started/_create-project-v2.mdx
var _create_project_v2 = __webpack_require__("88042");
// EXTERNAL MODULE: ./docs/common-items/_db-create-monitoring-account.mdx
var _db_create_monitoring_account = __webpack_require__("79798");
// EXTERNAL MODULE: ./docs/getting-started/_accesskey-v2.mdx
var _accesskey_v2 = __webpack_require__("76988");
// EXTERNAL MODULE: ./docs/common-items/_db-create-db-user-file-body.mdx
var _db_create_db_user_file_body = __webpack_require__("27500");
// EXTERNAL MODULE: ./docs/common-items/_db-run-agent.mdx
var _db_run_agent = __webpack_require__("81369");
// EXTERNAL MODULE: ./docs/common-items/_db-next-step.mdx
var _db_next_step = __webpack_require__("1404");
;// CONCATENATED MODULE: ./docs/oracle-pro/install-agent.mdx


const frontMatter = {
	id: 'install-agent',
	title: '에이전트 설치',
	description: '와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다.',
	keywords: [
		'Oracle Pro',
		'데이터베이스',
		'에이전트'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*모니터링용 계정 생성*/
/*## 모니터링 시작하기*/










const toc = [..._agent_signup_guide/* toc */.d$, ..._create_project_v2/* toc */.d$, {
  "value": "구성도 확인",
  "id": "구성도-확인",
  "level": 2
}, ..._db_create_monitoring_account/* toc */.d$, ..._accesskey_v2/* toc */.d$, {
  "value": "에이전트 다운로드",
  "id": "에이전트-다운로드",
  "level": 2
}, {
  "value": "에이전트 설정",
  "id": "에이전트-설정",
  "level": 2
}, {
  "value": "whatap.conf 설정",
  "id": "setting-whatapconf",
  "level": 3
}, {
  "value": "초기 설정 파일 생성",
  "id": "createinitialsettingfile",
  "level": 3
}, {
  "value": "DB 유저 파일 생성",
  "id": "create-db-user",
  "level": 3
}, ..._import_db_create_db_user_desc/* toc */.d$, ..._db_create_db_user_file_body/* toc */.d$, ..._db_run_agent/* toc */.d$, ..._db_next_step/* toc */.d$];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Cmdname, Details, ImgLang, Steps, UI} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Details) _missingMdxReference("Details", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!Steps) _missingMdxReference("Steps", true);
  if (!UI) _missingMdxReference("UI", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "와탭 데이터베이스 모니터링 서비스 이용을 위한 기본 설치 방법을 안내합니다."
    }), "\n", "\n", (0,jsx_runtime.jsx)(_agent_signup_guide/* default */.ZP, {}), "\n", "\n", (0,jsx_runtime.jsxs)(Steps, {
      children: [(0,jsx_runtime.jsx)(_create_project_v2/* default */.ZP, {}), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "구성도-확인",
          children: "구성도 확인"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "Oracle Pro 모니터링을 위해 데이터베이스 서버에 에이전트를 설치하는 구성입니다."
        }), (0,jsx_runtime.jsx)(ImgLang, {
          img: "dbx-install-agent-on-db-server-dma.png",
          desc: ""
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "방화벽 설정은 필수이며, 모든 데이터는 암호화되어 전송됩니다. 와탭 수집 서버와의 통신을 위해 6600 포트를 사용합니다."
        }), (0,jsx_runtime.jsx)(_db_create_monitoring_account/* default */.ZP, {}), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "일반적인 경우"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-sql",
                metastring: "title=\"SQL\"",
                children: "create user whatap identified by DB_Password;\ngrant create session to whatap;\ngrant select any dictionary to whatap;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["12c 이상에서 멀티테넌트의 경우: 접두어 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "c##"
              }), " 추가"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-SQL",
                metastring: "title=\"SQL\"",
                children: "create user c##whatap identified by DB_Password;\ngrant reate session to c##whatap;\ngrant select any dictionary to c##whatap;\nalter user c##whatap set container_data = ALL container = CURRENT;\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "Kill session 기능을 사용할 경우"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-SQL",
                metastring: "title=\"SQL\"",
                children: "grant alter system to whatap;\n"
              })
            }), "\n"]
          }), "\n"]
        }), (0,jsx_runtime.jsxs)(Details, {
          children: [(0,jsx_runtime.jsx)("summary", {
            children: "권한에 따른 지원 기능 살펴보기"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "기본 권한"
            }), " 외의 권한은 사용자의 환경에 따라 부여하지 않아도 됩니다. 단, 일부 기능이 동작하지 않을 수 있습니다."]
          }), (0,jsx_runtime.jsx)("div", {
            className: "c5-10-25-25-15-25",
            children: (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "권한"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "command (Single DB)"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "command (Multitenant DB)"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "메뉴 및 기능"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "상세 내역"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "3",
                    children: "기본 권한"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant create session to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant create session to c##whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "접속"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsxs)("code", {
                      children: ["grant ", (0,jsx_runtime.jsx)("span", {
                        class: "vslow",
                        children: "select any dictionary"
                      }), " to whatap;"]
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsxs)("code", {
                      children: ["grant ", (0,jsx_runtime.jsx)("span", {
                        class: "vslow",
                        children: "select any dictionary"
                      }), " to c##whatap;"]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    rowSpan: "2",
                    children: [(0,jsx_runtime.jsx)(Cmdname, {
                      sid: "side_dbMonitoring",
                      className: "uitext"
                    }), " / ", (0,jsx_runtime.jsx)(Cmdname, {
                      sid: "side_multiInstance",
                      className: "uitext"
                    }), " / ", (0,jsx_runtime.jsx)(Cmdname, {
                      sid: "side_dbSqlStat",
                      className: "uitext"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "개별 권한 부여 시 다음 표 내용 참조"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "alter user c##whatap set container_data = ALL container = CURRENT;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "멀티태넌트 DB를 사용하는 경우(12C 이상) pdb 조회를 위한 필수 권한임"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(Cmdname, {
                      sid: "session_kill",
                      className: "uitext"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant alter system to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant alter system to c##whatap;"
                    })
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: [(0,jsx_runtime.jsx)(Cmdname, {
                      sid: "active_sessions",
                      className: "uitext"
                    }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
                      sid: "session_kill",
                      className: "uitext"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "2",
                    children: "히든 파라미터 조회"
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    colSpan: "2",
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "create view sys.whatap_vw_ksppi as select * from sys.x$ksppi;"
                    }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on sys.whatap_vw_ksppi to DB_User;"
                    }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                      children: "create synonym DB_User.whatap_vw_ksppi for sys.whatap_vw_ksppi;"
                    })]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "2",
                    children: "파라미터 조회 메뉴에 히든 파라미터 내용 포함"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "2",
                    children: "히든 파라미터를 조회하려면 별도의 뷰/시노님 생성 및 권한 부여 필요"
                  })]
                }), (0,jsx_runtime.jsx)(_components.tr, {
                  children: (0,jsx_runtime.jsxs)(_components.td, {
                    colSpan: "2",
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "create view sys.whatap_vw_ksppcv as select * from sys.x$ksppcv;"
                    }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on sys.whatap_vw_ksppcv to DB_User;"
                    }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.code, {
                      children: "create synonym DB_User.whatap_vw_ksppcv for sys.whatap_vw_ksppcv;"
                    })]
                  })
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)("code", {
              children: (0,jsx_runtime.jsx)("span", {
                class: "vslow",
                children: "select any dictionary"
              })
            }), " 대신 다음 권한을 개별로 부여해도 됩니다."]
          }), (0,jsx_runtime.jsx)("div", {
            className: "c3-3",
            children: (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "권한"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "command (Single DB)"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "command (Multitenant DB)"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsxs)(_components.td, {
                    rowSpan: "16",
                    children: [(0,jsx_runtime.jsx)(Cmdname, {
                      sid: "active_sessions"
                    }), " / ", (0,jsx_runtime.jsx)(Cmdname, {
                      sid: "lock_tree"
                    }), " / 지표 정보"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sqlarea to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sqlarea to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$transaction to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$transaction to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$instance to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$instance to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sysstat to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sysstat to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$lock to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$lock to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sesstat to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sesstat to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$event_name to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$event_name to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$session to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$session to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sql to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sql to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$process to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$process to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$statname to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$statname to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$system_event to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$system_event to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$osstat to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$osstat to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$px_session to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$px_session to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sga to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sga to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$con_sysstat to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "파라미터 정보"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$parameter to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$parameter to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "4",
                    children: "Wait 정보 / Event 정보"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$event_name to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$event_name to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$system_event to whatap"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$con_system_event to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$system_wait_class to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$system_wait_class to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: "-"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$con_system_wait_class to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    rowSpan: "5",
                    children: "Tablespace 정보"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on dba_data_files to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on cdb_data_files to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on dba_free_space to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on cdb_free_space to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on dba_temp_files to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$sort_segment to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$temp_extent_pool to whatap;"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$tempfile to c##whatap;"
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsxs)(_components.td, {
                    children: [(0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$containers to whatap;"
                    }), " (12c 이상)"]
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "grant select on v_$containers to c##whatap;"
                    })
                  })]
                })]
              })]
            })
          })]
        }), (0,jsx_runtime.jsx)(_accesskey_v2/* default */.ZP, {})]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "에이전트-다운로드",
          children: "에이전트 다운로드"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["에이전트 설치 화면에서 사용자의 환경과 일치하는 오라클 버전을 선택한 다음 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "download",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.p, {
            children: ["보안 설정으로 인해 tar 형식의 파일을 다운로드할 수 없는 사용자를 위해 ZIP 형식의 파일도 함께 제공합니다. 설치 화면에서 ", (0,jsx_runtime.jsx)(UI, {
              children: ".zip"
            }), " ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "download",
              className: "uitext"
            }), " 버튼을 선택하세요."]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h2",
        children: [(0,jsx_runtime.jsx)(_components.h2, {
          id: "에이전트-설정",
          children: "에이전트 설정"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "에이전트는 Oracle 계정으로 설치를 권장하며 Oracle 접속 환경 변수가 미리 설정되어 있어야 합니다. 다음 순서대로 에이전트 설정을 진행하세요."
        }), (0,jsx_runtime.jsxs)(_components.admonition, {
          type: "note",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oracle 계정이 아닌 다른 사용자 계정에서 설치할 경우"
            })
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Oracle이 생성한 공유 메모리(shared memory)를 읽을 수 있는 권한(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "read"
                }), ")이 필요합니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "ipcs -m"
                }), " 명령어를 실행한 결과에서 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "perms"
                }), " 값이 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "640"
                }), "이면, 같은 그룹에 속한 다른 계정으로 에이전트를 설치할 수 있습니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "ipcs -m"
                }), " 명령어를 실행한 결과에서 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "perms"
                }), " 값이 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "600"
                }), "이면서, ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Oracle 12c R2"
                }), " 이상이라면, 다음과 같이 파라미터를 설정해 perms 값을 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "640"
                }), "으로 변경할 수 있습니다. 변경 사항을 적용하려면 DB를 재기동해야 합니다."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-sql",
                  children: "alter system set allow_group_access_to_sga=true scope=spfile;\n"
                })
              }), "\n"]
            }), "\n"]
          })]
        })]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "setting-whatapconf",
          children: "whatap.conf 설정"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["압축을 해제한 폴더로 이동해 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.conf"
          }), " 파일을 확인하세요. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "whatap.conf"
          }), " 파일에 프로젝트 액세스 키 정보 및 와탭 서버 정보, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ipckey"
          }), "를 입력하세요."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title='whatap.conf'",
            children: "license={AccessKey}\nwhatap.server.host=13.124.11.223/13.209.172.35 # WhaTap server information\nipckey={ipckey}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "tip",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "ipckey"
                }), " 옵션값은 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "ipcs -m"
                }), " 명령어를 통해 얻을 수 있습니다. 모니터링할 오라클의 Key 값(16진수)입니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["한 서버에 여러 개의 데이터베이스를 설치했다면 ", (0,jsx_runtime.jsx)(_components.a, {
                  href: "check-ipckey",
                  children: "다음 문서"
                }), "를 참조해 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "ipckey"
                }), "를 입력하세요."]
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "createinitialsettingfile",
          children: "초기 설정 파일 생성"
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: ["초기 설정 파일을 생성하려면 데이터베이스에 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "SYS"
          }), " 계정(또는 같은 등급의 계정)으로 접속해 정보를 받아 처리합니다. 계정과 암호는 저장되지 않습니다."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sh",
            metastring: "title=\"BASH\"",
            children: "./dmxinit.sh {sys_user} {sys_password}\n"
          })
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "명령어를 실행한 다음 다음 5개의 파일이 생성됩니다."
        }), (0,jsx_runtime.jsxs)(_components.blockquote, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "dmx.init"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "class.init"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "dbname.init"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "stat.init"
            }), ", ", (0,jsx_runtime.jsx)(_components.em, {
              children: "event.init"
            })]
          }), "\n"]
        }), (0,jsx_runtime.jsx)(_components.admonition, {
          type: "note",
          children: (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_user"
                }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_password"
                }), " 없이 접속할 수 있다면(", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sqlplus '/as sysdba'"
                }), " 접속처럼), ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_user"
                }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_password"
                }), "를 인수로 추가하지 않아도 됩니다."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-sh",
                  metastring: "title=\"BASH\"",
                  children: "./dmxinit.sh\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_user"
                }), "와 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "sys_password"
                }), " 문자열에 특수 문자가 포함되어 있다면 각 특수 문자 앞에 이스케이프 문자(Escape Character, ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "\\"
                }), ")를 추가하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-sh",
                  metastring: "title=\"BASH\"",
                  children: "./dmxinit.sh whatap whatap\\!\\@pwd\n"
                })
              }), "\n"]
            }), "\n"]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.section, {
        className: "remark-sectionize-h3",
        children: [(0,jsx_runtime.jsx)(_components.h3, {
          id: "create-db-user",
          children: "DB 유저 파일 생성"
        }), (0,jsx_runtime.jsx)(_import_db_create_db_user_desc/* default */.ZP, {
          name: "default"
        }), (0,jsx_runtime.jsx)(_db_create_db_user_file_body/* default */.ZP, {}), (0,jsx_runtime.jsx)(_db_run_agent/* default */.ZP, {})]
      })]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_db_next_step/* default */.ZP, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.a)(),
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



}),
"85687": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/mssql-register-windows-service-1654a490237153186e4ec32d60523722.png");

}),
"50065": (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return MDXProvider; },
  a: function() { return useMDXComponents; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
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


}),

}]);