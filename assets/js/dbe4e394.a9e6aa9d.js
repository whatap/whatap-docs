"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[18269],{

/***/ 67888:
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "check-accesskey",
      children: "액세스 키 확인"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액세스 키"
      }), "는 와탭 서비스 활성화를 위한 고유 ID입니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["설치 안내 섹션에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "issue_project_access_key",
        className: "uitext"
      }), " 버튼을 선택하세요. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "액세스 키"
      }), "를 자동으로 발급받은 후 다음 단계를 진행합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
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
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 29679:
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ImgLang, InDoc, Xclude} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "create-project",
      children: "프로젝트 생성하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트를 설치하기 전에 먼저 프로젝트를 생성하세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
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
          }), " 등의 항목을 차례로 설정하세요."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
          product: "browser",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v2.png",
            desc: ""
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
          product: "browser",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "create-project-v2-browser.png",
            desc: ""
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["모든 설정을 완료한 다음에는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "creating_a_project",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
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
              href: "../project/group",
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 47161:
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
// EXTERNAL MODULE: ./docs/getting-started/_create-project-v2.mdx
var _create_project_v2 = __webpack_require__(29679);
// EXTERNAL MODULE: ./docs/getting-started/_accesskey-v2.mdx
var _accesskey_v2 = __webpack_require__(67888);
;// CONCATENATED MODULE: ./docs/common-items/_go-docker-setting-library.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "Go 라이브러리 설정하기",
  "id": "go-라이브러리-설정하기",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "go-라이브러리-설정하기",
      children: "Go 라이브러리 설정하기"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Go 애플리케이션 소스 코드에 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/whatap/go-api",
        children: "github.com/whatap/go-api"
      }), " 패키지를 추가하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "go get github.com/whatap/go-api\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Init()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Shutdown()"
      }), " 함수로 초기화 및 종료를 설정하세요. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.Start()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "trace.End()"
      }), " 함수로 트랜잭션의 시작 종료를 설정하세요."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-go",
        metastring: "title='Go'",
        children: "import \"github.com/whatap/go-api/trace\"\n\nfunc main(){\n    trace.Init(nil)\n    //It must be executed before closing the app.    \n    defer trace.Shutdown()    \n\n    ctx, _ := trace.Start(context.Bacground(), \"Start Tx\")\n\n    ...\n\n    trace.End(ctx, err)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(InDoc, {
      product: "golang",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["라이브러리 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "api-guide",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(InDoc, {
      product: "kubernetes",
      children: (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["라이브러리 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../golang/api-guide",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}


;// CONCATENATED MODULE: ./docs/golang/install-agent.mdx


const install_agent_frontMatter = {
	id: 'install-agent',
	title: '에이전트 설치',
	description: 'Go 환경의 애플리케이션 서버에 에이전트를 설치하는 방법을 제공합니다.',
	tags: [
		'Go',
		'에이전트 설치'
	]
};
const install_agent_contentTitle = undefined;
const metadata = {
  "id": "golang/install-agent",
  "title": "에이전트 설치",
  "description": "Go 환경의 애플리케이션 서버에 에이전트를 설치하는 방법을 제공합니다.",
  "source": "@site/docs/golang/install-agent.mdx",
  "sourceDirName": "golang",
  "slug": "/golang/install-agent",
  "permalink": "/whatap-docs/golang/install-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/golang/install-agent.mdx",
  "tags": [
    {
      "label": "Go",
      "permalink": "/whatap-docs/tags/go"
    },
    {
      "label": "에이전트 설치",
      "permalink": "/whatap-docs/tags/에이전트-설치"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-agent",
    "title": "에이전트 설치",
    "description": "Go 환경의 애플리케이션 서버에 에이전트를 설치하는 방법을 제공합니다.",
    "tags": [
      "Go",
      "에이전트 설치"
    ]
  },
  "sidebar": "goSidebar",
  "previous": {
    "title": "지원 환경",
    "permalink": "/whatap-docs/golang/supported-spec"
  },
  "next": {
    "title": "Docker 환경 설치",
    "permalink": "/whatap-docs/golang/install-agent-docker"
  }
};
const assets = {

};

/*Go 라이브러리 설정하기*/





const install_agent_toc = [..._create_project_v2/* toc */.RM, ..._accesskey_v2/* toc */.RM, {
  "value": "에이전트 다운로드",
  "id": "에이전트-다운로드",
  "level": 2
}, {
  "value": "에이전트 설정",
  "id": "set-agent",
  "level": 2
}, {
  "value": "기본 설정하기",
  "id": "기본-설정하기",
  "level": 3
}, {
  "value": "<code>WHATAP_HOME</code> 환경 변수 설정하기",
  "id": "whatap_home-환경-변수-설정하기",
  "level": 3
}, {
  "value": "프로세스 별 에이전트 이름 설정",
  "id": "duplicate_appname",
  "level": 3
}, ...toc, {
  "value": "모니터링 시작하기",
  "id": "모니터링-시작하기",
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Details, TabItem, Tabs} = _components;
  if (!Details) install_agent_missingMdxReference("Details", true);
  if (!TabItem) install_agent_missingMdxReference("TabItem", true);
  if (!Tabs) install_agent_missingMdxReference("Tabs", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "모니터링 대상 애플리케이션 서버에서 TCP 통신으로 데이터를 전달하고, 와탭 수집 서버로 데이터를 전송하려면 같은 서버에 에이전트를 설치해야 합니다. 설치 방식은 패키지 설치로 가능합니다."
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트는 기본 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "127.0.0.1:6600"
        }), " TCP 서버로 작동합니다. Go 애플리케이션에서 데이터를 수신해서 와탭 수집 서버로 Outbound 6600 포트로 전달합니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "와탭 저장소(Repository)를 설치하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "whatap-agent 리눅스 패키지(yum, apt-get)를 설치하세요."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "whatap-agent 서비스를 실행하세요."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Go Monitoring",
        src: (__webpack_require__(8883)/* ["default"] */ .A) + "",
        width: "1175",
        height: "593"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["와탭 모니터링 서비스를 사용하기 위해서는 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.whatap.io/ko/signup/",
        children: "회원 가입"
      }), " 후 프로젝트를 생성하고 대상 서버에 에이전트를 설치해야 합니다."]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_create_project_v2/* default */.Ay, {}), "\n", "\n", (0,jsx_runtime.jsx)(_accesskey_v2/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-다운로드",
        children: "에이전트 다운로드"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "액세스 키"
        }), "를 발급 받으면 다음 명령어를 이용해 에이전트를 다운로드하세요."]
      }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## 패키지 리포지토리 등록\n$ sudo rpm -Uvh https://repo.whatap.io/centos/5/noarch/whatap-repo-1.0-1.noarch.rpm\n\n## 패키지 설치\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## 패키지 저장소 등록\n$ wget https://repo.whatap.io/debian/release.gpg -O -|sudo apt-key add -\n$ wget https://repo.whatap.io/debian/whatap-repo_1.0_all.deb\n$ sudo dpkg -i whatap-repo_1.0_all.deb\n$ sudo apt-get update\n\n## 패키지 설치\n$ sudo apt-get install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "## 패키지 저장소 등록\n$ sudo rpm --import https://repo.whatap.io/centos/release.gpg\n$ echo \"[whatap]\" | sudo tee /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"name=whatap packages for enterprise linux\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"baseurl=https://repo.whatap.io/centos/latest/\\$basearch\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"enabled=1\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n$ echo \"gpgcheck=0\" | sudo tee -a /etc/yum.repos.d/whatap.repo > /dev/null\n\n## 패키지 설치\n$ sudo yum install whatap-agent\n"
            })
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "apl",
          label: "Alpine Linux",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
              children: "whatap-agent.tar.gz"
            }), " 파일을 다운받고 '/' 디렉터리 기준으로 압축을 해제하세요. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "/usr/whatap/agent"
            }), " 경로에 모니터링 파일을 생성합니다."]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "$ wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\n$ tar -xvzf whatap-agent.tar.gz -C /\n"
            })
          })]
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "al-docker",
          label: "Alpine Linux Docker",
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz",
              children: "whatap-agent.tar.gz"
            }), " 파일을 다운받고 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "/usr/whatap/agent"
            }), " 경로에 압축을 해제하세요."]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "FROM alpine\n\nRUN apk update && apk upgrade\n\n# Install WhaTap Go monitoring agent\nRUN wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/alpine/x86_64/whatap-agent.tar.gz\nRUN tar -xvzf whatap-agent.tar.gz -C /\n"
            })
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(Details, {
        children: [(0,jsx_runtime.jsx)("summary", {
          children: "에이전트 구성 파일"
        }), (0,jsx_runtime.jsx)(_components.p, {
          children: "모니터링 정보를 수집하기 위한 트레이서, 수집한 정보를 서버에 전송하기 위한 에이전트, 트레이서와 에이전트를 서버에 동적으로 적용하기 위한 설치 스크립트 파일로 구성합니다."
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "whatap-agent"
              }), ": 에이전트, 트레이서에서 UDP로 전달한 정보를 수집 서버로 전송하는 프로그램입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "/etc/init.d/whatap-agent"
              }), ": 서비스 스크립트 파일입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "whatap_agent"
              }), ": 서비스 실행 파일입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "whatap.conf"
              }), ": 설정 정보 및 수집 서버 IP, 액세스 키를 입력하는 파일입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsxs)(_components.em, {
                children: ["whatap-boot-", (0,jsx_runtime.jsx)(_components.code, {
                  children: "yyyymmdd"
                }), ".log"]
              }), ": 에이전트 로그 파일입니다. (경로: ", (0,jsx_runtime.jsx)(_components.em, {
                children: "/usr/whata/agent/log"
              }), ")"]
            }), "\n"]
          }), "\n"]
        })]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "set-agent",
        children: "에이전트 설정"
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "기본-설정하기",
        children: "기본 설정하기"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음 명령어를 차례로 실행해 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일에 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "액세스 키"
        }), "와 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "수집 서버 IP 주소"
        }), " 등을 설정하세요."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["애플리케이션의 시작 스크립트 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " 파일을 생성하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WHATAP_HOME"
            }), " 환경 변수를 설정하지 않으면 애플리케이션 시작 스크립트의 경로를 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " 파일 경로로 인식합니다."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='SH'",
          children: "# 스크립트 실행 경로에 whatap.conf 파일 생성\n$ echo \"license={액세스 키}\" >> ./whatap.conf\n$ echo \"whatap.server.host={수집 서버 IP 주소}\" >> ./whatap.conf\n$ echo \"app_name={애플리케이션 이름}\" >> ./whatap.conf\n\n# 애플리케이션 실행\n./app\n"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "license"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "액세스 키"
            }), "를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.server.host"
            }), ": ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "수집 서버 IP 주소"
            }), "를 입력하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app_name"
            }), ": 애플리케이션 이름을 입력하세요. 문자열을 이용해 사용자 설정할 수 있습니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "app_name"
              }), "은 에이전트 이름을 결정하기 위한 구성 요소입니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "agent-name",
                children: "다음 문서"
              }), "를 참조하세요."]
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "whatap_home-환경-변수-설정하기",
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " 환경 변수 설정하기"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일 경로를 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " 환경 변수로 설정할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WHATAP_HOME"
        }), " 경로를 우선 생성하세요."]
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# WHATAP_HOME 경로 우선 생성 후 whatap.conf 파일 경로 설정\nmkdir ./whatap_home\necho \"license={액세스 키}\" >> ./whatap_home/whatap.conf\necho \"whatap.server.host={수집 서버 IP 주소}\" >> ./whatap_home/whatap.conf\necho \"app_name={애플리케이션 이름}\" >> ./whatap_home/whatap.conf\n\n# 애플리케이션 실행\nWHATAP_HOME=./whatap_home ./app\n"
        })
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "duplicate_appname",
        children: "프로세스 별 에이전트 이름 설정"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["2개 이상의 프로세스로 실행되는 애플리케이션에서 1개의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일을 공유하면 사용자가 설정한 변경 사항이 정상 반영되지 않을 수 있습니다. 프로세스 별로 각각의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.conf"
        }), " 파일을 설정할 것을 권장합니다."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트 이름이 중복되지 않도록 사용자는 문자열을 에이전트 이름에 추가해 구분할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "app_name"
        }), " 옵션으로 설정한 값이 에이전트 이름의 가장 앞 부분에 추가됩니다."]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "동일 인스턴스, 동일 명령어로 실행되는 에이전트의 이름이 중복되는 현상을 피할 수 있습니다."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "# WHATAP_HOME 경로 우선 생성 후 whatap.conf 파일 경로 설정\nmkdir ./whatap_home\necho \"license={액세스 키}\" >> ./whatap_home/whatap.conf\necho \"whatap.server.host={수집 서버 IP 주소}\" >> ./whatap_home/whatap.conf\necho \"app_name={애플리케이션 이름-1}\" >> ./whatap_home/whatap.conf\n\n# 애플리케이션 실행\nWHATAP_HOME=./whatap_home ./app \n\n# WHATAP_HOME 경로 우선 생성 후 whatap.conf 파일 경로 설정\nmkdir ./whatap_home1\necho \"license={액세스 키}\" >> ./whatap_home1/whatap.conf\necho \"whatap.server.host={수집 서버 IP 주소}\" >> ./whatap_home1/whatap.conf\necho \"app_name={애플리케이션 이름-2}\" >> ./whatap_home1/whatap.conf\n\n# 애플리케이션 실행\nWHATAP_HOME=./whatap_home1 ./app\n\n"
        })
      }), "\n", "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.section, {
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "모니터링-시작하기",
        children: "모니터링 시작하기"
      }), "\n", (0,jsx_runtime.jsxs)(Tabs, {
        groupId: "golang",
        children: [(0,jsx_runtime.jsx)(TabItem, {
          value: "rc",
          label: "Red Hat/CentOS",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "애플리케이션 서버를 다시 시작하면 에이전트가 정보 수집을 시작합니다."
          })
        }), (0,jsx_runtime.jsx)(TabItem, {
          value: "du",
          label: "Debian/Ubuntu",
          children: (0,jsx_runtime.jsx)(_components.p, {
            children: "애플리케이션 서버를 다시 시작하면 에이전트가 정보 수집을 시작합니다."
          })
        }), (0,jsx_runtime.jsxs)(TabItem, {
          value: "al",
          label: "Amazon Linux",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 명령어를 실행해 와탭 에이전트 데몬을 실행하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "/usr/whatap/php/whatap-agent start\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 명령어를 실행해 와탭 서비스가 정상 실행됐는지 확인하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "ps -elf | grep whatap_agent_static\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "애플리케이션 서버를 다시 시작하면 에이전트가 정보 수집을 시작합니다."
          })]
        })]
      }), "\n"]
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

/***/ 8883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/golang_system-8da823abb548e3c11b54bfc48ec7d9bb.png");

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