"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[8018],{

/***/ 82377:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'analysis-msa',
	title: 'MSA 분석',
	description: 'MSA 분석 기능은 와탭의 MTRACE(멀티 서버간 추적)기능을 통해서 수집된 트랜잭션들 사이의 호출 비중이 어떠한지를 분석합니다.',
	tags: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'분석',
		'MSA'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/analysis-msa",
  "title": "MSA 분석",
  "description": "MSA 분석 기능은 와탭의 MTRACE(멀티 서버간 추적)기능을 통해서 수집된 트랜잭션들 사이의 호출 비중이 어떠한지를 분석합니다.",
  "source": "@site/docs/kubernetes/analysis-msa.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/analysis-msa",
  "permalink": "/whatap-docs/kubernetes/analysis-msa",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/analysis-msa.mdx",
  "tags": [
    {
      "label": "쿠버네티스",
      "permalink": "/whatap-docs/tags/쿠버네티스"
    },
    {
      "label": "쿠버네티스 모니터링",
      "permalink": "/whatap-docs/tags/쿠버네티스-모니터링"
    },
    {
      "label": "분석",
      "permalink": "/whatap-docs/tags/분석"
    },
    {
      "label": "MSA",
      "permalink": "/whatap-docs/tags/msa"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "analysis-msa",
    "title": "MSA 분석",
    "description": "MSA 분석 기능은 와탭의 MTRACE(멀티 서버간 추적)기능을 통해서 수집된 트랜잭션들 사이의 호출 비중이 어떠한지를 분석합니다.",
    "tags": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "분석",
      "MSA"
    ]
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "멀티서비스 히트맵",
    "permalink": "/whatap-docs/kubernetes/multiservice-hitmap"
  },
  "next": {
    "title": "애플리케이션 스택",
    "permalink": "/whatap-docs/kubernetes/analysis-stack"
  }
};
const assets = {

};



const toc = [{
  "value": "MSA 트랜잭션 통계",
  "id": "msa-트랜잭션-통계",
  "level": 2
}, {
  "value": "Caller Callee 요약",
  "id": "caller-callee-요약",
  "level": 2
}, {
  "value": "Caller &amp; Callee 데이터",
  "id": "caller--callee-데이터",
  "level": 2
}, {
  "value": "Caller Callee 추이",
  "id": "caller-callee-추이",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    em: "em",
    h2: "h2",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "분석"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "MSA 분석"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["MSA 분석 기능은 와탭의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "멀티 트랜잭션 추적"
      }), " 기능을 통해서 수집된 트랜잭션들 사이의 호출 비중이 어떠한지를 분석합니다. 이를 기반으로 마이크로 서비스간 의존성을 인스턴스 중심이 아닌 URL 레벨에서 확인할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://img.whatap.io/media/images/whatap_application_analysis_msa_pattern.png",
        alt: "Microservice Architecture Pattern"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "예를 들어 A,B,C,D,E 라는 5개 마이크로 서비스가 있는데, 사용자가 A를 호출하면 로직에 따라서 다음과 같은 3가지의 호출 패턴이 발생한다고 가정하겠습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A→B,C 호출"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A→B,C 호출 + 다시 B→D 호출"
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
        children: "A→B,C 호출 + 다시 B→D,E 호출"
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "이 세가지 패턴이 한번씩 수행되었다면 MSA 분석에서는 기준 URL에 따라 연관도 분석 데이터를 확인할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        src: "https://img.whatap.io/media/images/whatap_application_analysis_msa_caller_callee.png",
        alt: "Microservice Architecture Caller & Callee"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "멀티 트랜잭션 추적"
        }), "과 관련한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "../java/trs-multi-trace",
          children: "다음 문서"
        }), "를 참조하세요."]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "msa-트랜잭션-통계",
      children: "MSA 트랜잭션 통계"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다음은 Caller 또는 Callee를 가지고 있는 모든 트랜잭션 통계입니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "whatap_application_analysis_msa_2.png",
      desc: "MSA 분석"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["위 통계 데이터 중 조회를 원하는 URL의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
        alt: "상세 아이콘",
        src: (__webpack_require__(83533)/* ["default"] */ .A) + "",
        width: "24",
        height: "24"
      }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "상세"
        })
      }), " 아이콘을 선택하면 상세 보기 창이 나타납니다. 상세 보기 창에서 해당 트랜잭션에 대한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Caller Callee 요약"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Caller Callee 데이터"
        })
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Caller Callee 추이"
        })
      }), " 등의 상세 데이터 조회가 가능합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          alt: "전체 화면 보기 아이콘",
          src: (__webpack_require__(71543)/* ["default"] */ .A) + "",
          width: "24",
          height: "24"
        }), " 아이콘을 선택하면 상세 보기 창을 전체 화면으로 볼 수 있습니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "caller-callee-요약",
      children: "Caller Callee 요약"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "***Caller Callee 요약 ***탭은 다음과 같이 해당 URL의 Caller, Callee 사이의 의존성 정보를 표시합니다. 이때 최대 0.004, 0.003 등 최대 1인 숫자 정보가 함께 표시되는데, 이것은 전체 Caller들 가운데 차지하는 비중을 표시합니다. 마찬가지로 각 Callee들의 비중이 오른쪽에 함께 표시됩니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "whatap_application_analysis_msa_3.png",
      desc: "Caller Callee 요약"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["위 화면을 통해 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "/account/save/employee/seoul"
      }), " 이라는 트랜잭션을 기준으로 Caller와 Callee들 사이의 의존성을 분석할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Caller나 Callee 노드는 다음과 같이 하위 노드로 상세 전개가 가능합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "whatap_application_analysis_msa_4.png",
      desc: "Caller Callee 하위 노드 상세 전개"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "caller--callee-데이터",
      children: "Caller & Callee 데이터"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기준 URL(예: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "/account/save/employee/seoul"
      }), ")에 대한 Caller와 Callee들의 상관관계는 다음과 같이 표 형태로 표시할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "whatap_application_analysis_msa_5.png",
      desc: "Caller와 Callee들의 상관관계"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "caller-callee-추이",
      children: "Caller Callee 추이"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["기준 URL(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: "/account/save/employee/seoul"
      }), ")과 하나의 Caller나 Callee와의 호출 추이는 다음과 같이 시계열로 분석할 수 있습니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
      img: "whatap_application_analysis_msa_6.png",
      desc: "Caller Callee 추이"
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

/***/ 83533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDRIMjBDMjEuMDM1MyA0IDIxLjg5MzQgNC43OTcyMyAyMS45OTA4IDUuODA4MUwyMiA2VjkuMzMzMzNIMjBWNkg0VjE4SDE0VjIwSDRDMi45NjQ3MSAyMCAyLjEwNjU3IDE5LjIwMjggMi4wMDkyIDE4LjE5MTlMMiAxOFY2QzIgNC45NjQ3MSAyLjc5NzIzIDQuMTA2NTcgMy44MDgxIDQuMDA5Mkw0IDRaTTIwLjQ1NjcgMTkuMjFMMTcuNTQ2NyAxNi4zQzE2Ljg1NjcgMTYuNzQgMTYuMDM2NyAxNyAxNS4xNTY3IDE3QzEyLjY3NjcgMTcgMTAuNjY2NyAxNC45OSAxMC42NjY3IDEyLjVDMTAuNjY2NyAxMC4wMSAxMi42NzY3IDggMTUuMTY2NyA4QzE3LjY1NjcgOCAxOS42NjY3IDEwLjAxIDE5LjY2NjcgMTIuNUMxOS42NjY3IDEzLjM4IDE5LjQwNjcgMTQuMTkgMTguOTY2NyAxNC44OUwyMS44NzY3IDE3Ljc5TDIwLjQ1NjcgMTkuMjFaTTE1LjE2NjcgMTBDMTMuNzg2NyAxMCAxMi42NjY3IDExLjEyIDEyLjY2NjcgMTIuNUMxMi42NjY3IDEzLjg4IDEzLjc4NjcgMTUgMTUuMTY2NyAxNUMxNi41NDY3IDE1IDE3LjY2NjcgMTMuODggMTcuNjY2NyAxMi41QzE3LjY2NjcgMTEuMTIgMTYuNTQ2NyAxMCAxNS4xNjY3IDEwWiIgZmlsbD0iIzc1NzU3NSIvPgo8L3N2Zz4K");

/***/ }),

/***/ 71543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iU1ZHSW5saW5lLXN2ZyIgc3R5bGU9IndpZHRoOiAyMHB4O2hlaWdodDogMjBweDsiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkuMSAoODYxNDQpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPCEtLSA8dGl0bGU+aWMtZnVsbHNjcmVlbjwvdGl0bGU+IC0tPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iSWNvbi1TZXQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXaGFUYXBfSWNvbl9TZXQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNjQuMDAwMDAwLCAtMzI0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0iZGlyZWN0aW9uYWwtaWNvbnMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLjAwMDAwMCwgMTE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImljLWZ1bGxzY3JlZW4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNC4wMDAwMDAsIDIwNS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjAwMDAwMCwgMy4wMDAwMDApIiBpZD0iSWNvbiI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDEyIEwyLDE2IEw2LDE2IEw2LDE4IEwtMS41ODA5NTc1OWUtMTMsMTggTC0xLjU4MDk1NzU5ZS0xMywxMiBMMiwxMiBaIE0xOCwxMiBMMTgsMTggTDEyLDE4IEwxMiwxNiBMMTYsMTYgTDE2LDEyIEwxOCwxMiBaIE02LDIuNDg2ODk5NThlLTE0IEw2LDIgTDIsMiBMMiw2IEwtMS41ODA5NTc1OWUtMTMsNiBMLTEuNTgwOTU3NTllLTEzLDMuNjYwOTYwNDJlLTE0IEwtMS41ODA5NTc1OWUtMTMsMy42NjA5NjA0MmUtMTQgTDYsMi40ODY4OTk1OGUtMTQgWiBNMTgsLTMuMTk3NDQyMzFlLTE0IEwxOCw2IEwxNiw2IEwxNiwyIEwxMiwyIEwxMiwtMy4xOTc0NDIzMWUtMTQgTDE4LC0zLjE5NzQ0MjMxZS0xNCBMMTgsLTMuMTk3NDQyMzFlLTE0IFoiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

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