"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[44090],{

/***/ 9048:
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
  "value": "에이전트 설정 <code class=\"oldfunc\">Old</code>",
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
      children: ["에이전트 설정 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        class: "oldfunc",
        children: "Old"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
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
      children: ["모니터링 대상 서버에 위치한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), " 파일을 직접 수정하지 않고 에이전트 설정 옵션을 추가하거나 수정, 삭제할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "BTN08153",
        className: "uitext"
      }), " 버튼 클릭 시 선택한 에이전트의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "whatap.conf"
      }), " 파일을 다운로드합니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "info",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트 설정 기능은 사용성과 기능을 개선한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_management",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_agentSetting",
          className: "uitext"
        }), " 메뉴를 이용할 것을 권장합니다. 화면 오른쪽 위에 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "new_agents_setting",
          className: "uitext"
        }), " 버튼을 선택하세요. 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "set-agent#set-agent-service",
          children: "다음 문서"
        }), "를 참조하세요."]
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

/***/ 59258:
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
  "value": "에이전트 로그",
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
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, ProdImg} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ProdImg) _missingMdxReference("ProdImg", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "agent_log",
      children: "에이전트 로그"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentLog",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-agent-log.png",
      desc: "에이전트 로그"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["모니터링 대상 서버에 저장된 에이전트 로그를 조회할 수 있습니다. 로그 파일의 이름은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.em, {
        children: ["whatap-", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "YYYYMMDD"
        }), ".log"]
      }), " 형식입니다. 각 로그를 선택해 로그에 캡쳐되는 오류 및 이벤트에 대한 정보를 액세스할 수 있습니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["로그와 관련한 에이전트 설정은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "agent-log",
          children: "다음 문서"
        }), "를 참조하세요."]
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

/***/ 43837:
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
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "애플리케이션의 환경을 확인하고 성능과 관련한 설정을 확인할 수 있습니다. 에이전트 및 애플리케이션과 관련한 상세 정보를 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "오른쪽 위에 텍스트 입력란을 통해 원하는 항목을 필터링할 수 있습니다."
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["모니터링 대상 서버에 위치한 에이전트 및 애플리케이션의 변경 사항이 자동 반영되지 않는다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
            alt: "새로 고침 아이콘",
            src: (__webpack_require__(88831)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), " 버튼을 선택하세요."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "에이전트 목록"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "화면 왼쪽에 애플리케이션 목록에서는 프로젝트에 할당된 에이전트 목록을 확인할 수 있습니다. 개별 에이전트 항목을 선택하면 오른쪽 화면에 설정된 환경 변수 및 에이전트 설정, 성능과 관련한 정보를 조회할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
        img: "ipa-agent-list.png",
        desc: "에이전트 목록",
        width: "400",
        height: "auto"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["에이전트 목록을 갱신하거나 비활성화된 에이전트를 재기동한 다음 목록에 자동으로 표시되지 않는다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "새로 고침 아이콘",
          src: (__webpack_require__(88831)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 버튼을 선택하세요."]
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

/***/ 72897:
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
  "value": "환경 변수",
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
      children: "환경 변수"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_environmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-env-var.png",
      desc: "환경 변수"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["애플리케이션 실행과 관련한 환경 변수 정보를 조회할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "boot_env",
        className: "uitext"
      }), " 메뉴는 조회 시점의 환경 변수 정보를 수집해 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        children: "System.getProperty()"
      }), "를 사용해 매개변수로 전달된 키의 값을 조회합니다. 주요 확인 사항은 다음과 같습니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(애플리케이션).version"
          }), ": 애플리케이션 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "과 같은 파일 인코딩 형식을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "java",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["애플리케이션 상태 정보: 예를 들어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "catalina.home"
          }), " 환경 변수가 조회될 경우 tomcat 환경임을 파악할 수 있습니다."]
        }), "\n"]
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["OS 환경 변수: 예를 들어 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env) LANG"
        }), " 환경 변수와 같이 접미사 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "(env)"
        }), " 형식으로 제공됩니다."]
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

/***/ 52777:
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
  "value": "실행 환경 변수",
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
      children: "실행 환경 변수"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_bootEnvironmentVariable",
        className: "uitext"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProdImg, {
      img: "ipa-run-env-var.png",
      desc: "실행 환경 변수"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["에이전트 실행과 관련한 환경 변수를 조회할 수 있습니다. 환경 변수 중 중요한 정보 또는 애플리케이션의 상태 정보를 와탭 서버에 저장해 에이전트가 다운되더라도 조회가 가능합니다. 에이전트 버전 및 설치 경로, 이름, IP 주소 등을 확인할 수 있습니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "sms_summary_download_csv",
        className: "uitext"
      }), " 버튼 클릭 시 환경 변수 정보를 다운로드할 수 있습니다. 주요 확인 사항은 다음과 같습니다."]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "(애플리케이션).version"
          }), ": 애플리케이션 버전을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "file.encoding"
          }), ": ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "utf-8"
          }), "과 같은 파일 인코딩 형식을 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "os.name"
          }), ": OS를 확인할 수 있습니다."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "user.language"
          }), ": 사용자 언어를 확인할 수 있습니다."]
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
            }), ": 힙 메모리 설정 관련 환경 변수를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "(애플리케이션).start"
            }), ": 애플리케이션 시작 시간을 확인할 수 있습니다."]
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

/***/ 68388:
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
// EXTERNAL MODULE: ./docs/common-items/_import_instance-performance-common.mdx
var _import_instance_performance_common = __webpack_require__(43837);
// EXTERNAL MODULE: ./docs/common-items/_import_instance-performance-run-env.mdx
var _import_instance_performance_run_env = __webpack_require__(52777);
// EXTERNAL MODULE: ./docs/common-items/_import_instance-performance-env.mdx
var _import_instance_performance_env = __webpack_require__(72897);
;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-heap.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "힙 히스토그램",
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
      children: "힙 히스토그램"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapHistogram",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-histogram-java.png",
      desc: "힙 히스토그램"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JVM(자바 가상 머신)의 메모리에 올라가 있는 Heap 점유 객체 현황(힙 메모리상의 객체별 사이즈)을 조회할 수 있습니다. 즉 객체의 순수 크기를 조회합니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), " 컬럼을 통해 주요 객체들의 개수 확인이 용이합니다."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["GC 전까지 유지되는 객체의 개수를 조회하기 때문에 실제로 사용되고 있지 않더라도 해당 목록에는 표시됩니다. 정확한 조회를 위해 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "시스템 GC"
          })
        }), " 실행 후 해당 목록을 확인하는 것을 권장합니다. ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "시스템 GC"
          })
        }), "에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#side_systemGarbageCollection",
          children: "다음 문서"
        }), "를 참조하세요."]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.p, {
        children: "Java 6 ~ 8 버전에서는 JVM 옵션 없이 기본 지원하지만, 일부 Java 버전에 따라 다음과 같이 JVM 옵션을 적용해야 합니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 9 ~ Java 15 버전"
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
            children: "Java 16 버전 이상"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "-Djdk.attach.allowAttachSelf=true\n--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED\n"
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
            children: "Java 5 버전 이하, IBM Java는 지원하지 않습니다."
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-loaded-class.mdx


const _import_instance_performance_loaded_class_frontMatter = {};
const _import_instance_performance_loaded_class_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<Cmdname sid="side_loadedClasses" className="uitext" /> 메뉴는 애플리케이션 성능 최적화 및 메모리 관리와 클래스 종속성 문제 등의 해결을 도울 수 있습니다.*/


const _import_instance_performance_loaded_class_toc = [{
  "value": "로딩된 클래스",
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
      children: "로딩된 클래스"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-loaded-class-java.png",
      desc: "로딩된 클래스"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 애플리케이션에 로딩된 클래스 정보를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_loadedClasses",
        className: "uitext"
      }), " 메뉴를 통해 애플리케이션에서 로딩된 클래스 목록과 관련 상세 데이터를 조회하고, 중단없이 클래스의 동작을 변경할 수 있습니다."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "bsm_button_show",
            className: "uitext"
          }), " 컬럼에서 ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "상세 보기 아이콘",
            src: (__webpack_require__(1353)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 아이콘 클릭 시 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), "를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08085",
            className: "uitext"
          }), "는 클래스 내 메소드 및 상속 관계 정보를 제공합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "redefine",
            className: "uitext"
          }), " 컬럼에서 ", (0,jsx_runtime.jsx)(_components.img, {
            alt: "수정 아이콘",
            src: (__webpack_require__(63582)/* ["default"] */ .A) + "",
            width: "24",
            height: "24"
          }), " 아이콘 클릭 시 해당 클래스를 재정의할 수 있습니다. 런타임에 이미 로딩된 클래스를 다시 로딩 후 바이트 코드 삽입(BCI)을 통해 애플리케이션 중단없이 해당 클래스의 동작 변경이 가능합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), ": 해당 클래스가 물리적으로 어느 파일에서 로딩되었는지 확인할 수 있습니다. 애플리케이션의 복잡한 다계층 구조 특성상 클래스가 정확히 어느 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), " 파일에서 로딩되었는지 파악하는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "resource",
            className: "uitext"
          }), " 정보 확인이 필요합니다."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), " 기능과 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "resource",
          className: "uitext"
        }), " 정보 확인 활용에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-loaded-classes",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI(ByteCode Instrumentation)"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["자바 바이트 코드는 플랫폼 독립적인 중간 코드로 JVM에서 실행됩니다. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "BCI"
        }), " 즉 바이트 코드 삽입은 소스 파일 수정 없이 런타임 또는 빌드 타임에 바이트 코드를 동적으로 변경하여 추가 기능을 구현하는 기술입니다. 자세한 내용은 다음 문서를 참조하세요."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-library-version.mdx


const _import_instance_performance_library_version_frontMatter = {};
const _import_instance_performance_library_version_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*<ImgLang img='ipa-library-version-java.png' desc='라이브러리 버전' />*/
/*Java 애플리케이션을 구성하는 라이브러리의 버전을 확인할 수 있습니다.*/


const _import_instance_performance_library_version_toc = [{
  "value": "라이브러리 버전",
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
      children: "라이브러리 버전"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_libraryVersion",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "library-version-java.png",
      desc: "라이브러리 버전"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 애플리케이션에 배포된 컴포넌트 목록을 조회할 수 있습니다. 오픈 소스 라이브러리를 많이 사용하는 환경에서는 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "jar"
      }), " 파일의 버전 정보를 확인하여 호환성 문제를 신속히 식별하고 해결할 수 있습니다. 또한 버전 정보 확인은 보안 취약점이 있는 버전을 찾아 패치하는 등 보안 관리에도 용이합니다."]
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["컴포넌트 목록 정보: 해당 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "jar"
          }), " 파일의 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "name",
            className: "uitext"
          }), " 및 버전 정보를 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "detail",
            className: "uitext"
          }), "에서 제공합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "sms_summary_download_csv",
            className: "uitext"
          }), ": 다운로드 버튼을 클릭해 버전 정보를 다운로드할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-thread-dump.mdx


const _import_instance_performance_thread_dump_frontMatter = {};
const _import_instance_performance_thread_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));



/*이를 통해 Java 애플리케이션의 성능 문제를 진단하는데 이용할 수 있습니다. * <Cmdname sid="status" className="uitext" />: 해당 스레드의 현재 상태를 확인할 수 있습니다. 또한 Java 애플리케이션 성능 문제를 진단하는데 활용할 수 있습니다.*/
/*<ScrollToLink anchor='thread-details' />*/


const _import_instance_performance_thread_dump_toc = [{
  "value": "스레드 목록/덤프",
  "id": "side_threadList",
  "level": 2
}, {
  "value": "스레드 덤프 분석하기",
  "id": "thread-details",
  "level": 3
}, {
  "value": "스레드 상태",
  "id": "stateofthread",
  "level": 4
}, {
  "value": "스레드 덤프 정보",
  "id": "스레드-덤프-정보",
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
        children: "스레드 목록/덤프"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        })]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-thread-list-java.png",
        desc: "스레드 목록/덤프"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Java 프로세스의 모든 스레드 상태에 대한 스냅샷 정보를 제공합니다. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "는 CPU 최적화 작업에 핵심적인 메뉴입니다. 프로세스가 아닌 스레드 단위로 상태를 확인함으로써 CPU 자원을 더욱 세밀하게 관리할 수 있습니다. 예를 들어 조회 시점에 CPU를 가장 많이 사용하고 있는 스레드 특정 후 해당 스레드의 스택 정보를 확인해 성능 문제를 식별할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_dump",
              className: "uitext"
            }), ": 상단 오른쪽의 ", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "스레드 덤프"
            }), " 버튼을 클릭해 전체 스레드 덤프를 생성할 수 있습니다. 전체 스레드 덤프 생성 후 스레드 목록 하단에서 해당 정보를 확인할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["개별 스레드 덤프: 각 스레드마다 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "확장 아이콘",
              src: (__webpack_require__(36455)/* ["default"] */ .A) + "",
              width: "24",
              height: "24"
            }), " 아이콘 선택 시 개별 스레드 덤프 정보를 확인할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack",
              className: "uitext"
            }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
              sid: "stack_trace",
              className: "uitext"
            }), "에서 스레드 상태와 실행 경로에 대한 세부 정보 및 스택 트레이스를 조회할 수 있습니다. ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "새로고침 아이콘",
              src: (__webpack_require__(99216)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 새로고침 해 확인할 수 있습니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "#thread-details",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "thread_cpu_time",
              className: "uitext"
            }), ": 해당 스레드가 CPU를 점유한 누적 시간을 의미합니다. 밀리초 단위 시간을 사용합니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Cmdname, {
              sid: "TTL08126",
              className: "uitext"
            }), ": 스레드 목록 상단에서 ", (0,jsx_runtime.jsx)(_components.img, {
              alt: "새로고침 아이콘",
              src: (__webpack_require__(99216)/* ["default"] */ .A) + "",
              width: "35",
              height: "35"
            }), " 새로고침 아이콘을 클릭하면 기존 스레드 CPU 시간과 현재 스레드의 CPU 시간의 차잇값이 추가됩니다."]
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "thread_cpu_time",
            className: "uitext"
          }), "은 해당 스레드가 CPU를 점유한 총 누적 시간이기 때문에 조회 시점에 가장 많이 CPU를 사용하고 있는 스레드를 특정하기 위해서는 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "TTL08126",
            className: "uitext"
          }), " 값 확인이 필요합니다. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "../best-practice-guides/about-instance-performance-analysis#advanced-use-thread-list-dump",
            children: "다음 문서"
          }), "를 참조하세요."]
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "CPU 사용량 급증 유형"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "힙 메모리가 가득 찬 경우: 잦은 GC로 CPU 사용량 급증"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "실제 요청이 많은 경우: 대량의 클라이언트 요청 처리로 CPU 사용량 급증"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "잘못된 코드 로직: 비효율적인 알고리즘이나 무한 루프로 CPU 사용량 급증"
            }), "\n"]
          }), "\n"]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "thread-details",
        children: "스레드 덤프 분석하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "thread_list",
          className: "uitext"
        }), " 메뉴에서 확인할 수 있는 개별 스레드 덤프 정보에 대해 안내합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "stateofthread",
        children: "스레드 상태"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["스레드의 상태는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.lang.Thread"
        }), " 클래스 내부에 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "State"
        }), "라는 이름의 Enumerated Types(열거형)으로 선언된 항목들입니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "NEW"
            }), ": 스레드가 생성되었지만 아직 실행되지 않은 상태입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "RUNNABLE"
            }), ": 현재 CPU를 점유하고 작업을 수행 중인 상태입니다. 운영체제의 자원 분배로 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), " 상태가 될 수도 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), " 메소드 등를 이용해 대기하고 있는 상태입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TIMED_WAITING"
            }), ": ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sleep()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "wait()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "join()"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "park()"
            }), " 메소드 등을 이용해 대기하고 있는 상태, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "WAITING"
            }), " 상태와 다른 점은 주어진 시간 동안 대기하고 있는 상태입니다. 외부적인 변화 뿐만 아니라 시간에 의해서도 대기 상태가 해제될 수 있습니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "BLOCKED"
            }), ": 사용하려는 개체의 락(Lock)이 풀릴 때까지 대기하고 있는 상태입니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "TERMINATED"
            }), ": 실행을 마친 상태입니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "스레드-덤프-정보",
        children: "스레드 덤프 정보"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["스레드 목록에서 각 스레드의 ", (0,jsx_runtime.jsx)(LinkImage, {
          img: "ico-expander-black.svg",
          className: "ico black"
        }), " 버튼을 선택하면 개별 스레드 덤프 정보를 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "ipa-java-thread-list.png",
        desc: "스레드 덤프 정보"
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
              children: "항목"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "속성"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
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
              children: "스레드에 할당된 고유 ID"
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
              children: "스레드가 차단된 개체의 모니터(Monitor) 잠금을 유지하는 스레드 ID"
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
              children: ["스레드가 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), " 또는 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "TIMED_WAITING"
              }), " 상태가 된 총 횟수"]
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
              children: ["스레드가 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "BLOCKED"
              }), " 상태가 된 총 횟수"]
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
              children: ["스레드가 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "WAITING"
              }), " 상태를 지속한 경과 시간(밀리초), 스레드 경합 모니터링이 비활성화된 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " 반환"]
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
              children: ["스레드의 CPU 시간 합계(나노초)를 밀리초로 계산하여 표시, CPU 시간 측정을 비활성화한 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " 반환"]
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
              children: "스레드 상태"
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
              children: ["스레드가 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "BLOCKED"
              }), " 상태가 된 후 경과 시간(밀리초), 스레드 경합 모니터링이 비활성화된 경우 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "-1"
              }), " 반환"]
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
              children: "스레드 고유 이름"
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
              children: ["스레드의 입력이 차단되거나 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "Object.wait"
              }), " 메소드를 통해 통지를 기다리는 모니터 잠금을 표시한 문자열"]
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
              children: "스레드가 차단되는 객체의 모니터 잠금을 수용하는 스레드 이름"
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
              children: "스레드가 사용자 모드에서 실행한 CPU 시간(나노초)을 밀리초로 계산하여 표시"
            })]
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["스레드 정보에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://docs.oracle.com/javase/8/docs/api/java/lang/management/ThreadInfo.html",
            children: "다음 링크"
          }), "를 참조하세요."]
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
        children: "예외가 발생했을 때 스택(Stack) 추적을 표시합니다. 스택 프레임 목록으로 코드가 호출한 메소드 정보가 포함되어 있습니다."
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-open-socket.mdx


const _import_instance_performance_open_socket_frontMatter = {};
const _import_instance_performance_open_socket_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_open_socket_toc = [{
  "value": "소켓 오픈 개수",
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
      children: "소켓 오픈 개수"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_openSocket",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-open-socket-java.png",
      desc: "소켓 오픈 개수"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "Java 애플리케이션이 TCP 기능을 수행하기 위해 오픈한 소켓(Socket) 정보를 확인할 수 있습니다 이를 통해 애플리케이션 인스턴스가 데이터베이스와 같은 어떤 외부 시스템에 의존하는지 네트워크 의존성(Network Dependency)을 조회할 수 있습니다. 또한 누구와 아웃바운드 호출을 하고 있는지 추적할 수 있습니다. 이러한 정보는 TCP 통신의 효율성, 안정성 및 성능 최적화를 위해 중요합니다."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "count",
            className: "uitext"
          }), ": 외부 시스템에 대한 연결 시도 횟수를 의미합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "stack",
            className: "uitext"
          }), ": ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "get_stack",
            className: "uitext"
          }), "를 선택하여 다음 연결 시 확보한 스택을 조회 및 삭제할 수 있습니다."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(Cmdname, {
        sid: "count",
        className: "uitext"
      }), " 기준으로 정렬 후 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "host",
        className: "uitext"
      }), " 및 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "port",
        className: "uitext"
      }), "를 확인하여 어떤 서비스 또는 시스템과 연결이 많은지 확인할 수 있습니다. 이후 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "stack",
        className: "uitext"
      }), "을 확보해 상세 내용을 조회해 보세요."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "데이터베이스와 커넥션 풀"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["예를 들어 3306 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), "의 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "count",
          className: "uitext"
        }), "가 증가 시 커넥션 풀을 사용하지 않거나 또는 커넥션 풀을 빈번하게 끊고 다시 만드는 등 MySQL의 커넥션 관리가 올바르게 이루어지지 않는 상황일 가능성이 있습니다. 해당 3306 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "port",
          className: "uitext"
        }), "가 어떤 코드 경로에서 사용되고 있는지 파악하기 위해 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "stack",
          className: "uitext"
        }), "을 확보하여 추적할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-method-stat.mdx


const _import_instance_performance_method_stat_frontMatter = {};
const _import_instance_performance_method_stat_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_method_stat_toc = [{
  "value": "메소드 성능 상태",
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
      children: "메소드 성능 상태"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_methodStat",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "Java 애플리케이션에서 수행 된 메소드(Method)의 성능 통계 정보를 제공합니다."
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "refresh",
            className: "uitext"
          }), ": 데이터를 재호출합니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "reset",
            className: "uitext"
          }), ": 등록된 메소드 통계 데이터를 초기화합니다."]
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_methodStat",
          className: "uitext"
        }), " 메뉴를 사용하려면 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "agent_configuration",
          className: "uitext"
        }), " 메뉴에서 다음 사용자 정의 옵션을 추가하세요. 그리고 재기동 또는 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_loadedClasses",
          className: "uitext"
        }), " 메뉴에서 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "redefine",
          className: "uitext"
        }), "하세요."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-datasource.mdx


const _import_instance_performance_datasource_frontMatter = {};
const _import_instance_performance_datasource_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_datasource_toc = [{
  "value": "데이터소스 상태",
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
      children: "데이터소스 상태"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_dataSourceStatus",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-datasource-java.png",
      desc: "데이터소스 상태"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "데이터소스(DataSource)의 상태를 확인할 수 있습니다. 애플리케이션이 사용하는 데이터베이스 커넥션 풀의 현재 상태와 구성, 연결 설정 정보, 연결 상태 및 설정 불일치 여부 등의 정보를 제공합니다."
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: "커넥션 풀 객체의 생성과 동시에 모니터링이 시작되기 때문에 해당 객체가 사용되고 있지 않더라도 데이터소스 상태 정보에 나타날 수 있습니다."
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


// EXTERNAL MODULE: ./docs/common-items/_import_instance-performance-agent-log.mdx
var _import_instance_performance_agent_log = __webpack_require__(59258);
;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-system-gc.mdx


const _import_instance_performance_system_gc_frontMatter = {};
const _import_instance_performance_system_gc_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_system_gc_toc = [{
  "value": "시스템 GC",
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
      children: "시스템 GC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_systemGarbageCollection",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-system-gc-java.png",
      desc: "시스템 GC"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "System.gc()"
      }), "를 호출해 JVM(자바 가상 머신)의 Heap 영역에서 동적으로 할당했던 메모리 중 필요없게 된 메모리 객체(garbage)를 모아 제거할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "BTN07740",
        className: "uitext"
      }), " 버튼을 선택하면 GC 프로세스를 실행하게 되며, 실행 전과 실행 후의 메모리 용량을 확인할 수 있습니다."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-XX:+DisableExplicitGC"
        }), "와 같이 명시적인 GC 요청을 비활성화하는 옵션이 설정된 경우 ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_systemGarbageCollection",
          className: "uitext"
        }), "가 동작하지 않습니다."]
      })]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "시스템 GC와 메모리 누수"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Heap 메모리 사용량이 지속적으로 상승할 때 메모리 누수의 가능성을 확인하고 정확하게 진단하기 위해 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "시스템 GC"
          })
        }), "가 필요합니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "메모리 요청 유무"
            }), ": 애플리케이션이 지속적으로 메모리를 요청하고 있는 상태인지 확인합니다. 메모리 요청 증가가 예상치 이상인지 또는 메모리 해제가 정확히 이루어지고 있는지 살펴봅니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "메모리 사용량 확인"
            }), ": 실제로 메모리가 과다하게 사용되고 있는 상태인지 확인합니다. GC 수행으로 필요하지 않은 객체를 해제하고 메모리 사용량 변화를 살펴봅니다."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GC 주기"
            }), ": 메모리가 충분히 비어있는 상황임에도 GC가 수행되지 않는 상태인지 확인합니다. GC 주기 또는 설정을 살펴봅니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-heap-dump.mdx


const _import_instance_performance_heap_dump_frontMatter = {};
const _import_instance_performance_heap_dump_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_heap_dump_toc = [{
  "value": "힙 덤프",
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
      children: "힙 덤프"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_heapDump",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-heap-dump-java.png",
      desc: "힙 덤프"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 애플리케이션 실행 중 메모리 누수 등의 문제가 발생하면 관련된 문제를 정리하여 덤프 파일을 생성할 수 있습니다. ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "dump_heap",
        className: "uitext"
      }), " 버튼을 선택하세요. 생성된 덤프 파일은 애플리케이션 서버에 저장됩니다. 에이전트를 설치한 경로 하위의 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "dump"
      }), " 디렉터리에서 확인할 수 있습니다."]
    }), (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsxs)(_components.p, {
        children: ["이 기능은 Java 에이전트 1.5.2 버전 이상에서 지원합니다. 에이전트 설정에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "heapdump_enabled"
        }), " 옵션을 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), "로 설정하세요. ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "dump_heap",
          className: "uitext"
        }), " 버튼을 선택해 힙 덤프 파일을 만드는 기능을 활성화합니다. 매번 힙 덤프를 자동 생성하지 않으며 해당 옵션이 성능에 영향을 주진 않습니다. 그러나 덤프 확보 작업은 성능에 영향을 미칠 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "힙 덤프 확보"
        }), " 작업은 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "부하"
        }), "가 큰 작업에 속합니다. 부하와 별개로 힙 덤프가 모두 추출될 때까지 애플리케이션의 코드는 실행이 중지(stop the world)되기 때문에 사용자가 느끼는 성능 차이는 더 심할 수 있습니다."]
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


;// CONCATENATED MODULE: ./docs/common-items/_import_instance-performance-throttling.mdx


const _import_instance_performance_throttling_frontMatter = {};
const _import_instance_performance_throttling_contentTitle = (/* unused pure expression or super */ null && (undefined));





const _import_instance_performance_throttling_toc = [{
  "value": "쓰로틀링 설정",
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
      children: "쓰로틀링 설정"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_agentsConfiguration",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_throttlingConfiguration",
        className: "uitext"
      })]
    }), (0,jsx_runtime.jsx)(ImgLang, {
      img: "ipa-set-throttling-java.png",
      desc: "쓰로틀링 설정"
    }), (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java 애플리케이션의 부하량 제어와 관련한 에이전트 설정을 확인하고 옵션을 설정할 수 있습니다. 부하량 제어와 관련한 에이전트 설정에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "agent-load-amount",
        children: "다음 문서"
      }), "를 참조하세요."]
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


// EXTERNAL MODULE: ./docs/common-items/_import_instance-performance-agent-config.mdx
var _import_instance_performance_agent_config = __webpack_require__(9048);
;// CONCATENATED MODULE: ./docs/java/instance-performance-analysis.mdx


const instance_performance_analysis_frontMatter = {
	id: 'instance-performance-analysis',
	title: '인스턴스 성능 관리',
	description: 'Java 애플리케이션의 환경을 확인하고 성능과 관련한 설정을 확인할 수 있습니다.',
	toc_max_heading_level: 2,
	keywords: [
		'Java',
		'애플리케이션',
		'인스턴스 성능 관리'
	],
	isTranslationMissing: false
};
const instance_performance_analysis_contentTitle = undefined;
const metadata = {
  "id": "java/instance-performance-analysis",
  "title": "인스턴스 성능 관리",
  "description": "Java 애플리케이션의 환경을 확인하고 성능과 관련한 설정을 확인할 수 있습니다.",
  "source": "@site/docs/java/instance-performance-analysis.mdx",
  "sourceDirName": "java",
  "slug": "/java/instance-performance-analysis",
  "permalink": "/whatap-docs/java/instance-performance-analysis",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/instance-performance-analysis.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "instance-performance-analysis",
    "title": "인스턴스 성능 관리",
    "description": "Java 애플리케이션의 환경을 확인하고 성능과 관련한 설정을 확인할 수 있습니다.",
    "toc_max_heading_level": 2,
    "keywords": [
      "Java",
      "애플리케이션",
      "인스턴스 성능 관리"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "이벤트 수신 포맷",
    "permalink": "/whatap-docs/java/set-event-format"
  },
  "next": {
    "title": "Log 모니터링",
    "permalink": "/whatap-docs/log/introduction"
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

















const instance_performance_analysis_toc = [..._import_instance_performance_common/* toc */.RM, ..._import_instance_performance_run_env/* toc */.RM, ..._import_instance_performance_env/* toc */.RM, ...toc, ..._import_instance_performance_loaded_class_toc, ..._import_instance_performance_library_version_toc, ..._import_instance_performance_thread_dump_toc, ..._import_instance_performance_open_socket_toc, ..._import_instance_performance_method_stat_toc, ..._import_instance_performance_datasource_toc, ..._import_instance_performance_agent_log/* toc */.RM, ..._import_instance_performance_system_gc_toc, ..._import_instance_performance_heap_dump_toc, ..._import_instance_performance_throttling_toc, ..._import_instance_performance_agent_config/* toc */.RM];
function instance_performance_analysis_createMdxContent(props) {
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_common/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_run_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_env/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_loaded_class_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_library_version_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_thread_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_open_socket_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_method_stat_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_datasource_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_agent_log/* default */.Ay, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_system_gc_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_heap_dump_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_throttling_MDXContent, {}), "\n", "\n", "\n", (0,jsx_runtime.jsx)(_import_instance_performance_agent_config/* default */.Ay, {})]
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

/***/ 1353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcGFnZXZpZXc8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjguMDAwMDAwLCAtMjcxMS4wMDAwMDApIiBmaWxsPSJncmV5Ij4KICAgICAgICAgICAgPGcgaWQ9ImFwcGxpY2F0aW9uLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDIzNDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtcGFnZXZpZXciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjAwMDAwMCwgMzY1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCA0LjAwMDAwMCkiIGlkPSJwYWdldmlldyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwwIEMxOS4wMzUyOTQxLDAgMTkuODkzNDI1NiwwLjc5NzIzMTgzNCAxOS45OTA3OTk5LDEuODA4MTAwOTYgTDIwLDIgTDE5Ljk5OSw1LjMzMyBMMTcuOTk5LDUuMzMzIEwxOCwyIEwyLDIgTDIsMTQgTDEyLDE0IEwxMiwxNiBMMiwxNiBDMC45NjQ3MDU4ODIsMTYgMC4xMDY1NzQzOTQsMTUuMjAyNzY4MiAwLjAwOTIwMDA4MTQyLDE0LjE5MTg5OSBMLTUuMzI5MDcwNTJlLTE1LDE0IEwtNS4zMjkwNzA1MmUtMTUsMiBDLTUuMzI5MDcwNTJlLTE1LDAuOTY0NzA1ODgyIDAuNzk3MjMxODM0LDAuMTA2NTc0Mzk0IDEuODA4MTAwOTYsMC4wMDkyMDAwODE0MiBMMiwwIEwxOCwwIFogTTEzLjE2NjY2NjcsNCBDMTUuNjU2NjY2Nyw0IDE3LjY2NjY2NjcsNi4wMSAxNy42NjY2NjY3LDguNSBDMTcuNjY2NjY2Nyw5LjM4IDE3LjQwNjY2NjcsMTAuMTkgMTYuOTY2NjY2NywxMC44OSBMMTkuODc2NjY2NywxMy43OSBMMTguNDU2NjY2NywxNS4yMSBMMTUuNTQ2NjY2NywxMi4zIEMxNC44NTY2NjY3LDEyLjc0IDE0LjAzNjY2NjcsMTMgMTMuMTU2NjY2NywxMyBDMTAuNjc2NjY2NywxMyA4LjY2NjY2NjY3LDEwLjk5IDguNjY2NjY2NjcsOC41IEM4LjY2NjY2NjY3LDYuMDEgMTAuNjc2NjY2Nyw0IDEzLjE2NjY2NjcsNCBaIE0xMy4xNjY2NjY3LDYgQzExLjc4NjY2NjcsNiAxMC42NjY2NjY3LDcuMTIgMTAuNjY2NjY2Nyw4LjUgQzEwLjY2NjY2NjcsOS44OCAxMS43ODY2NjY3LDExIDEzLjE2NjY2NjcsMTEgQzE0LjU0NjY2NjcsMTEgMTUuNjY2NjY2Nyw5Ljg4IDE1LjY2NjY2NjcsOC41IEMxNS42NjY2NjY3LDcuMTIgMTQuNTQ2NjY2Nyw2IDEzLjE2NjY2NjcsNiBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 63582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAxNnB4O2hlaWdodDogMTZweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZWRpdDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OC4wMDAwMDAsIC0xMzk1LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZWRpdG9yLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDEzNTAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWMtZWRpdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjguMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLDE4IEwyMCwyMCBMMCwyMCBMMCwxOCBMMjAsMTggWiBNMTIuOTM5MzM5OCwxIEwxNy45MzMyMTA4LDYuMDA2NDA3NzggTDE3LjkwMSw2LjAzOCBMMTcuOTAzNzA4NSw2LjA0IEw4LjAwNDIxMzU2LDE1LjkzOTQ5NDkgTDgsMTUuOTM1IEw4LDE1Ljk0IEwzLDE1Ljk0IEwzLDEwLjk0IEwzLjAwNSwxMC45NCBMMywxMC45MzU1MzM5IEwxMi44OTk0OTQ5LDEuMDM2MDM4OTcgTDEyLjkwMSwxLjAzOCBMMTIuOTM5MzM5OCwxIFogTTEyLjkzNSwzLjgyOCBMNSwxMS43NjMgTDUsMTMuOTQgTDcuMTc1LDEzLjk0IEwxNS4xMDgsNi4wMDYgTDEyLjkzNSwzLjgyOCBaIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 36455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyNHB4O2hlaWdodDogMjRweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtY2FyZXQtcmlnaHQ8L3RpdGxlPiAtLT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Ikljb24tU2V0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iV2hhVGFwX0ljb25fU2V0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY0LjAwMDAwMCwgLTI0NC4wMDAwMDApIiBmaWxsPSIjOTU5NTk1Ij4KICAgICAgICAgICAgPGcgaWQ9ImRpcmVjdGlvbmFsLWljb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MC4wMDAwMDAsIDExOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1jYXJldC1yaWdodCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI0LjAwMDAwMCwgMTI1LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgNi4wMDAwMDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTI3MC4wMDAwMDApIHRyYW5zbGF0ZSgtNC4wMDAwMDAsIC02LjAwMDAwMCkgIiBkPSJNLTIgMiA0IDEwIDEwIDJ6Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ 99216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LjE3MWMyN2ZhYiwgMjAyMi8wOC8xNi0yMjozNTo0MSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMWU1MDAyNS1hY2U4LTQ4OGUtYTMyNy1lYzYzYzFlZjUwOTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjRFQzI5Mjc1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjRFQzI5MjY1MkE4MTFFRDlCM0E5NTc3MjZCNzA3NDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjMgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjBmOTFjYzItZTZiYy00YjUwLThhZTQtOGNmZThmOGI4OTQ2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDJiOGIwNTktYWQ4YS1hZjRhLTljNTMtMjlkMzcxNTBkOGY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+M9zsYQAABPJJREFUeNrEWGtoHFUU/u6du5vdbZJNk8Zqi602pFRDTULVBCpaW3yCYH8YTREpqH9aBBF8oIj0jw/6Q0EMhVBQRBvwR18ICmrQtiLUojVNbGObxtjm/Wx3N7uZmXs9Z6ZpLCo720nTC8Psnb0z57vnfOc7Z0bsOuigs1cnKpPYfvCI3Xx+RCeVBVcIGFyjYQyE48JaXimnHlsf2TMyhY9qbpEZVZIQsZ5+t3Xf984WNq8UIHBtB23UszM4qtF6IFd/R7Wqa7zd2ib7hty3jnfbW3I2LZLXHshlQPDtsV22TzieFfXPpc3opPbQioVCcmXIvGNJmeyQQ+N6yvPIdQAyGzK2TzgWyYXgSJCQEQ5HhgEiaUfTOQPbCe9Zvl1erWspNTEwalC52EJFUnjzsKNgMOzK3IzBhbRBXbWF3a/EkSwWOHfWRWrawNVX7yVV6A1ZSsV0VuCNZ2J4tdm/ffM9CqWLJP4a1vhzQENrg/JS4YXRFCCdYmXTxUk6J4Msdl3WBYM3t8bxwuZ/7yOdBY6edNGy38a+H2awhMIXiwroYIC6rbKa11+jH7G8WnApRHweHDdYXCKxZoUf5T3fOcQfjZuW+Nee2KAwkRY43OFCWcJT2wBjLC8YeYmsExcNIkogUUT8GNFo+9ZGx1lg/VqFl1uyeHtXDp+227DIOEk7HrrLIv2w8M0xG0URgQBpmx9MOmuwarnC0w9GcPqcS6kMxAlQhHZ77JSDn7pcpCm9QeHI0Nr9h22MXBB44E4LG+ok9h5yMTyhPUD5wMh8KTxCIamvltixNYqnNkU9D3HY+OHLKCxdvWSM1sSiwOJSvibQ0pbFzjbbe8ZLTVHKsnlIbZuelyQS3ldrefOuXo2omuMRj+I4ccKaqzFRAllM6fAFhSxDXmzepLB6hYVU1oQDkyU9oZ4DG9cpj7Q/djpeiPKRvbxU4mSfi997fSVcsVQimwsJhgWsNA5UlFDenZ8LXZAywaQ/0qm9eV2VQDoTMkyzss9Cd+tSwKLVgTSDmzRay2HiwaSXMiQY5sfwFHCCUvjmGwS526KiGACN8MWRPcLjdD8RvCgkGBarsUmDU32ON3+kQWGMuJMvVJMpjXVrFB6+2+faoeMOiaQIB4ZFTmuNlr0z3nz74wpVK5VXg2ZFjAk7PHFlG6FdgTIqnhMpoK3d8fSHn5Vv5BU9atjR0aNRv1qhtkri3lqFn7s1Os+4iESYCwIb6hV6BgwuZoxXixKU7oNjGl8fdfELrWXAYj4UeNZDR05orF1lkdRLT41TOS4RfnN14J0EHm1U6B0y+O2M9nQnHhPop3rFAIuigXqKsUBVm3c1foElXeLDF+N48n7r8n/skRvLuWb589YvHezck8NUypAmFdSddAeqp7NCxrvc9v40Fb8IGshDjTUKNSvFFT30XB9jUGh3XVA/I4T/njNJ9YkzrSIpUUwBbv8gQWrNXrHx3mczKIkbaraEJ5rz7pl/eoi1p7LMN5TKaDq4n3HxyVczOP6Hg6Xl0uNYgUAK98z/9sQ2K7XBoljgru4/PSPDvt1r4/ODC2gIIH4n6TgI/bkhGgn30sT2CYeSFOOk0YV18fP+rk32CUdaNm2MvMtu5mxYaEBsz7drQDg+llSJd9SujnxeFPERLhQetsP22C7bJxy7FQlZdtUy6/mG26xfr+eXK8KR+VuAAQDQvDP0Yp7wsgAAAABJRU5ErkJggg==");

/***/ }),

/***/ 88831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtcmVmcmVzaDwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NDcuMDAwMDAwLCAtMjI0Mi4wMDAwMDApIiBmaWxsPSIjNzU3NTc1Ij4KICAgICAgICAgICAgPGcgaWQ9InRpbWUtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzLjAwMDAwMCwgMjE5Ny4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJpYy1yZWZyZXNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDQuMDAwMDAwLCA0NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLDIyIEwxNC41LDE4LjkwNzQyNDIgTDEwLDE2IEwxMCwyMiBaIE0xMCw2LjEgTDUuNSwzLjAwNzQyNDE5IEwxMCwwLjEgTDEwLDYuMSBaIiBpZD0iSWNvbiIgZmlsbC1ydWxlPSJldmVub2RkIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjQzNDgwMDEsNi4xMjI3ODYxOCBMNC4wMzc5MDMwOSw3LjMzMDI0MzQ5IEMzLjM3OTczNzcsOC4zOTcyNjMxNiAzLDkuNjU0Mjg1MzQgMywxMSBDMywxNC44NjU5OTMyIDYuMTM0MDA2NzUsMTggMTAsMTggQzEwLjU3Nzg3NjQsMTggMTEuMTM5Mzk3OCwxNy45Mjk5NzU5IDExLjY3NjU0MTksMTcuNzk3OTQ5OSBMMTMuNjAyNjQ2OCwxOS4yNDk5NjQ0IEMxMi40OTk1MTY3LDE5LjczMjM2NjYgMTEuMjgxMDEyOSwyMCAxMCwyMCBDNS4wMjk0MzcyNSwyMCAxLDE1Ljk3MDU2MjcgMSwxMSBDMSw5LjIwMjUwMTgxIDEuNTI2OTUwOTYsNy41MjgwNzk2MSAyLjQzNDgwMDEsNi4xMjI3ODYxOCBaIE0xMCwyIEMxNC45NzA1NjI3LDIgMTksNi4wMjk0MzcyNSAxOSwxMSBDMTksMTIuODI1MzY5NyAxOC40NTY1ODA4LDE0LjUyMzgxNzEgMTcuNTIyNjk1MSwxNS45NDIzODk0IEwxNS45MjA5ODg2LDE0LjczNTU4MjMgQzE2LjYwNDQyNSwxMy42NTQ1ODg3IDE3LDEyLjM3MzQ5MDEgMTcsMTEgQzE3LDcuMTM0MDA2NzUgMTMuODY1OTkzMiw0IDEwLDQgQzkuMzg3ODEyMTcsNCA4Ljc5Mzk3OTE2LDQuMDc4NTg2MzUgOC4yMjgwMzg3Nyw0LjIyNjIyMTI3IEw2LjMxNTQ1ODEzLDIuNzg2MzM3ODkgQzcuNDQwMDU3NCwyLjI4MTA3ODU5IDguNjg3MjAzOTksMiAxMCwyIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

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