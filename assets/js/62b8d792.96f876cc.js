"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[19559],{

/***/ 70597:
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
    a: "a",
    img: "img",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 모바일 앱은 안드로이드와 iOS 환경을 지원합니다. 다음 링크로 이동하거나 QR 코드를 스캔해 앱을 설치할 수 있습니다. 모바일 앱에 대한 자세한 설명은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "https://docs.whatap.io/mobile-app",
        children: "다음 문서"
      }), "를 참조하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://apps.apple.com/us/app/whatap-mobile/id6450067434",
              children: "iOS"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://play.google.com/store/apps/details?id=io.whatap.lion",
              children: "Android"
            })
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.tbody, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "QR",
              src: (__webpack_require__(87203)/* ["default"] */ .A) + "",
              width: "600",
              height: "600"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "iOS 12 버전 이상"]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              alt: "QR",
              src: (__webpack_require__(17581)/* ["default"] */ .A) + "",
              width: "600",
              height: "600"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "Android 5.0 버전 이상"]
          })]
        })
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

/***/ 38701:
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
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭 에이전트는 수집 서버 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "TCP 6600"
      }), " 포트로 접속 가능해야 합니다. 모니터링 대상과 가까운 수집 서버 주소를 허용하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "출발지: 와탭 에이전트"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "목적지"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "목적지 IP"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
            children: "포트"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 서울 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "13.124.11.223 / 13.209.172.35"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 도쿄 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "52.68.36.166 / 52.193.60.176"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 싱가포르 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "18.138.0.93 / 18.139.67.236"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 뭄바이 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "13.127.125.69 / 13.235.15.118"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 캘리포니아 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "52.8.223.130 / 52.8.239.99"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "와탭 프랑크프루트 수집 서버"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "3.125.142.162 / 3.127.76.140"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
            children: "TCP 6600"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "에이전트에서 수집 서버로 직접 접속할 수 없다면 제공하는 Proxy 모듈을 이용해 경유하세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "proxy.png",
      desc: "Proxy"
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

/***/ 13996:
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
    a: "a",
    admonition: "admonition",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {InDoc, Xclude} = _components;
  if (!InDoc) _missingMdxReference("InDoc", true);
  if (!Xclude) _missingMdxReference("Xclude", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "와탭 모니터링 서비스는 웹브라우저와 모바일 앱에서 이용할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      class: "c3-3",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.table, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.thead, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "브라우저"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "권장여부"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.th, {
              style: {
                textAlign: "center"
              },
              children: "지원버전"
            })]
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tbody, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Google Chrome"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "emoji-ok",
                children: "✅"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "84 이상"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Mozilla FireFox"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "최신 버전"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Edge"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "최신 버전"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.tr, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "Safari"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                class: "emoji-no",
                children: "❌"
              })
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.td, {
              style: {
                textAlign: "center"
              },
              children: "최신 버전"
            })]
          })]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "브라우저 호환성과 성능을 이유로 Chrome 최신 버전 사용을 권장합니다."
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
          children: "사용자 인터페이스(User Interface, UI)는 HTML5 표준 기술로 구현하여 Internet Explorer는 지원하지 않습니다."
        }), "\n"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Xclude, {
      product: "support-env",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "caution",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "제약 사항"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭의 웹 인터페이스는 모바일 브라우저에 대한 지원을 제공하지 않습니다. 모바일 기기에서 와탭에 접속하려면 안드로이드 앱 또는 iOS 앱을 설치하세요. 와탭 모바일 앱은 모바일 기기에서 최적의 성능을 발휘하도록 설계되었습니다. 와탭 모바일 앱에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "../mobile-app",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InDoc, {
      product: "support-env",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
        type: "caution",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "제약 사항"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["와탭의 웹 인터페이스는 모바일 브라우저에 대한 지원을 제공하지 않습니다. 모바일 기기에서 와탭에 접속하려면 안드로이드 앱 또는 iOS 앱을 설치하세요. 와탭 모바일 앱은 모바일 기기에서 최적의 성능을 발휘하도록 설계되었습니다. 와탭 모바일 앱에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "mobile-app",
            children: "다음 문서"
          }), "를 참조하세요."]
        })]
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

/***/ 96877:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28453);
/* harmony import */ var _getting_started_supported_browser_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13996);
/* harmony import */ var _getting_started_proxy_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38701);
/* harmony import */ var _getting_started_mobile_app_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70597);


const frontMatter = {
	id: 'supported-spec',
	title: '지원 환경',
	description: '와탭 모니터링 서비스가 동작하는 기본 사양을 알아보세요.',
	keywords: [
		'Server',
		'지원 환경'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "server/supported-spec",
  "title": "지원 환경",
  "description": "와탭 모니터링 서비스가 동작하는 기본 사양을 알아보세요.",
  "source": "@site/docs/server/supported-spec.mdx",
  "sourceDirName": "server",
  "slug": "/server/supported-spec",
  "permalink": "/whatap-docs/server/supported-spec",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/server/supported-spec.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "supported-spec",
    "title": "지원 환경",
    "description": "와탭 모니터링 서비스가 동작하는 기본 사양을 알아보세요.",
    "keywords": [
      "Server",
      "지원 환경"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "serverSidebar",
  "previous": {
    "title": "Server 모니터링",
    "permalink": "/whatap-docs/server/introduction"
  },
  "next": {
    "title": "설치하기",
    "permalink": "/whatap-docs/server/install-agent"
  }
};
const assets = {

};

/** XenServer 6.0 이상*/





const toc = [{
  "value": "운영체제별 지원 환경",
  "id": "운영체제별-지원-환경",
  "level": 2
}, {
  "value": "브라우저 지원",
  "id": "브라우저-지원",
  "level": 2
}, ..._getting_started_supported_browser_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "방화벽",
  "id": "방화벽",
  "level": 2
}, ..._getting_started_proxy_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "모바일 앱",
  "id": "모바일-앱",
  "level": 2
}, ..._getting_started_mobile_app_mdx__WEBPACK_IMPORTED_MODULE_3__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "운영체제별-지원-환경",
        children: "운영체제별 지원 환경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 서버 모니터링 에이전트를 설치하기 전에 지원 환경을 확인하세요. X86 기반에서 동작하는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Linux"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "FreeBSD"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "AIX"
        }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Windows"
        }), " 에 적용할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Linux"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "CentOS 5 이상"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Red Hat Server 5.0 이상(RHEL 또는 RHEL 기반 배포 버전 지원)"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Rocky Linux 8.6 이상"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "SUSE 10.1 이상"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Amazon Linux 모든 버전"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Ubuntu 12.04 이상"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Debian 6.0 이상"
            }), "\n"]
          }), "\n", "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Unix"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "FreeBSD 10 이상"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "AIX 6.1 이상"
              }), "\n"]
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
              children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
                children: "Oracle Solaris 11.2 이상"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Windows"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Windows 2008 R2 이상"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "note",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["지원 리스트에 포함되지 않는 환경이라면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "mailto:support@whatap.io",
            children: "support@whatap.io"
          }), "로 문의해 주세요."]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "브라우저-지원",
        children: "브라우저 지원"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_getting_started_supported_browser_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "방화벽",
        children: "방화벽"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_getting_started_proxy_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "모바일-앱",
        children: "모바일 앱"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_getting_started_mobile_app_mdx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__/* .useMDXComponents */ .R)(),
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

/***/ 17581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAADEUlEQVR4nO3bQW7jMAyFYQFZZDlH8FFyNPtoPoqPkGUXBTiRKFGk3RYoMIth8L/NjGzpc1eEKDulEEIIeWWVkO11aZGn3hvDU+rdW7z0iYWFhZXc2oulLn602fe4+F5nK615WXPZHQsLC+sNrKWtsNk21Cy+kO5zOGryEwsLC+v9rEe43fJHPtTSu6JDLCwsrDe2Tou1rrYt55j8mxqNhYWFlcayaOU8mtWG0meXOTzGk+YyLCwsLCxvhUzr5ouynWO6uz5YWFhYua1vc5t0mftVacPfBgsLC+s/t2Zd/ZybSndSuZfayofOvlzLLBYWFlZ+y42V7g22Zhn0PNZ03/os4+/AwsLCSmyVXhtD7CVO6XtMyxdbzllXsbCwsPJaI+6wsaaVyrXTLfF54XU3FhYWVn7LvuYZ+fq7x/rfUVetOT9OfxEWFhYWVpnduc4WsWZdrGTLHIbe3U45sbCwsBJba5tidTW8ptFLR3GFdG+L7mM3u5dyeT+EhYWFlc/SQup+PSPdOr3EuT5YL8XeHQsLCyunpbdlFNKtXQzfgJ/6bY0rs9fvhrCwsLCyWj/9puX09js058el38bCwsLKaO19Rd9UPnqDLX62td86+T5Zu4uFhYWV2NL0yjn7bfetzzGnzQfbMPbuWFhYWFhzth1c1ti3Pg99yhfD+s9ezr07FhYWVk6r1kaZe846+zlo6XdDniVsbmPvjoWFhZXZ6hm3rVnX9CeNPaaruudzACwsLKzM1ukXL5djTdtULvKcwxrfb2NhYWHltnoLvb0uLWMXOY8ie5ndrN+22JOwsLCwEluX1NnhNY3RY7FtKldfZrGwsLASW6uEhMqpdKirxW9Iz+eWWFhYWFjzaLLE2e5bHyvZ8yEf/u+IvTsWFhZWVssWnw4uax5+scb91Gbvw2/OAbCwsLDyWuKb9XG3ZSujle9rtZXHwsLCektLRoOtcaeeo/3uL8MDjYWFhZXaslzqathyKqxDGSeTP/buWFhYWGmskC1WzlVE/FfeVnX7k2ri7wyxsLCwMlqEEEL+Yf4Ckl7rw+cbI+wAAAAASUVORK5CYII=");

/***/ }),

/***/ 87203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYAQMAAACEqAqfAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC60lEQVR4nO3dQXLjIBCFYVSz8DJH8FF0NOloOoqPkKUXLjHTTQMN0aQqKZyRa/63wgI+ZQWIIDsEQgghJ841dtlKVXvhLX16SPnSd3rHwsLCwnqK9Qg1k3T9FeOaut7k2iwlubDLJ638Y7lOYcHCwsLCeg1rzjPAZFOF1dbKNfer1jV1umNhYWFh/aCVx/t+8b+X2QELCwsL619ZOt7H0rydAOI35g4sLCwsrJNYJXnuiMnSlBtpvr6fg4WFhYX1fatLu77XycCG9Ek2zrPVBgsLCwvrGdZxFlc7S+M11Duvn3TEwsLCwjqpdY01Oj2UclNpZ1d0MllkMpF5RJ8GLhXHwsLCwhpt5SW8ZU5d6402KS09LuXdujT7OVhYWFhYA63cXKLjvW6cv8Um5VB43YO5hT5YWFhYWCe3NHZhTl1DesfTH2wJZX0f3cGWw2cFLCwsLKwRluWSmufxfonHuZUOtgcT3ZMBFhYWFtZg6yqft1Qb3evxoYz3mkP873swWFhYWFjns7T5pW21Bn+jS9/1Xiq7uQMLCwsLa6yVm5dL+s7Pe3sjj5fy3lZiYWFhYZ3fstT9nHfnav96VlHz+X4OFhYWFtYYq/7rsy7hg/tuLL3R4jbky9PA7l4AxcLCwsJ6mmWjdn3nJ5b38Muye5IxXicA24PZXU8sLCwsrBewbDbo1vTWYpbymtt3VrcHg4WFhYU13NJRO7q03ymuXetv85Ts7WFzLCwsLKzB1kHq+UJdgm9S9hvna7C/ogYLCwsL6+yWv6LZXHPNnJvnDZpV1vTtxPJRx8LCwsIaYT1cv8mdY2kql8ayyrwH0zwrYGFhYWGNtebUyH4/ra7J2xzvwdyPz8FgYWFhYb2QdQs5ZQ8mRyrrSRcsLCwsrJ+zNNbLV2rWtKavWa0lFhYWFtYTrJI63tvXfge37J7sn5vRnXTZxMXCwsLCegWrS507ygWN/RDEQ9x76vnxnR8sLCwsrJEWIYSQ/yC/Ad628qx4qX+OAAAAAElFTkSuQmCC");

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