"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["78511"], {
"43849": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_service_service_1_90_0_mdx_131_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-service-service-1-90-0-mdx-131.json
var site_docs_release_notes_service_service_1_90_0_mdx_131_namespaceObject = JSON.parse('{"id":"release-notes/service/service-1_90_0","title":"Service 1.90.0","description":"2022-10-24","source":"@site/docs/release-notes/service/service-1.90.0.mdx","sourceDirName":"release-notes/service","slug":"/release-notes/service/service-1_90_0","permalink":"/release-notes/service/service-1_90_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/service/service-1.90.0.mdx","tags":[],"version":"current","frontMatter":{"id":"service-1_90_0","title":"Service 1.90.0","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/service/service-1.90.0.mdx


const frontMatter = {
	id: 'service-1_90_0',
	title: 'Service 1.90.0',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "2022-10-24",
  "id": "2022-10-24",
  "level": 2
}, {
  "value": "컨테이너맵",
  "id": "컨테이너맵",
  "level": 3
}, {
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 3
}, {
  "value": "2022-10-20",
  "id": "2022-10-20",
  "level": 2
}, {
  "value": "로그",
  "id": "로그",
  "level": 3
}, {
  "value": "URL",
  "id": "url",
  "level": 3
}, {
  "value": "2022-10-18",
  "id": "2022-10-18",
  "level": 2
}, {
  "value": "차트",
  "id": "차트",
  "level": 3
}, {
  "value": "리소스",
  "id": "리소스",
  "level": 3
}, {
  "value": "컨테이너 맵",
  "id": "컨테이너-맵",
  "level": 3
}, {
  "value": "애플리케이션 현황/성능 추이",
  "id": "애플리케이션-현황성능-추이",
  "level": 3
}, {
  "value": "로그",
  "id": "로그-1",
  "level": 3
}, {
  "value": "쿠버네티스",
  "id": "쿠버네티스",
  "level": 3
}, {
  "value": "<code>공통</code>",
  "id": "공통-1",
  "level": 3
}, {
  "value": "사용자 인터페이스(UI)",
  "id": "사용자-인터페이스ui",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "2022-10-24",
        children: "2022-10-24"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "컨테이너맵",
        children: "컨테이너맵"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Fixed"
        }), " Container 카테고리와 Pod 카테고리의 히트맵 차트에 그려진 정보가 다른 현상 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "공통",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "공통"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Fixed"
        }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
          children: "계정 정보"
        }), " - 기존 비밀번호가 9글자 이하이면 신규 비밀번호 변경이 되지 않는 현상 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "2022-10-20",
        children: "2022-10-20"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그",
        children: "로그"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 무료 체험 기간이 NaN으로 화면에 표시되는 현상 수정(NaN → 0)"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 로그 모니터링 비활성화 프로젝트에 진입 시 '로그 모니터링 활성화 안내 모달'의 내용 없는 현상 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
            children: "라이브 Tail"
          }), " 메뉴에서 파싱된 키를 조회하는 API를 호출하지 않는 현상 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "url",
        children: "URL"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Fixed"
        }), " URL 목록 - 이름 변경 버튼의 오타(cancle → cancel) 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "2022-10-18",
        children: "2022-10-18"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "차트",
        children: "차트"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Feature"
          }), " Out of Memory 메트릭스 차트 이동 로직 추가 - 분석 동선 생성을 위해 행 클릭 시 메트릭스 챠트로 이동하도록 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 히트맵의 다크 테마 적용 시 화면 처리 개선하도록 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "리소스",
        children: "리소스"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
            children: "리소스"
          }), " > ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
            children: "마스터 메타 정보"
          }), " > '데이터 없음' 메시지를 ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
            children: "마스터 메타 데이터 없음"
          }), "으로 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "컨테이너-맵",
        children: "컨테이너 맵"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " 요약보기 창이 열린 상태에서 상태별 개수 텍스트 짤림 현상 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " 로그 검색 탭에서 (로그 카테고리가 존재할 경우) 로그 대상 카테고리 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 카테고리가 Pod일 때 컨테이너가 복수이면 일부 컨테이너 정보만 표시하는 버그 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "애플리케이션-현황성능-추이",
        children: "애플리케이션 현황/성능 추이"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 에이전트 정보가 잘못 노출되는 오류 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-1",
        children: "로그"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Feature"
            }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
              children: "라이브 Tail"
            }), ", ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
              children: "검색기"
            }), ", ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
              children: "탐색기"
            }), "에 테이블 컬럼 순서 변경 기능 추가"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
              children: "Change"
            }), " 로그 설정의 데이터 유지 기간 옵션 수정"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "트라이얼 프로젝트: 최대 3일까지 데이터 유지"
            }), "\n", (0,jsx_runtime.jsx)(_components.li, {
              children: "유료전환 프로젝트: 최대 40일까지 데이터 유지"
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: [(0,jsx_runtime.jsx)(_components.em, {
                children: "front.conf"
              }), " 파일에 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ui_log_retention_limit"
              }), " 옵션을 추가하면 해당 값까지 데이터 유지하도록 수정"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "쿠버네티스",
        children: "쿠버네티스"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " 클러스터 프로젝트에서 헤더 메뉴를 통해 네임스페이스 이동 시 기존 메뉴를 유지한 상태로 이동할 수 있도록 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " 퍼포먼스 요약 페이지 위젯 데이터 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "공통-1",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "공통"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Change"
          }), " 조회 및 분석 권한을 OFF 할 수 없도록 비활성화 처리 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " 알림 수신 설정 - 서드 파티 슬랙에 redirect url이 정상적으로 연결되지 않는 버그 수정"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " ", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
            children: "통합 보고서"
          }), " 메뉴 첫 진입 시 시간 선택 값이 정상적으로 초기화 되지 않는 버그 수정"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "사용자-인터페이스ui",
        children: "사용자 인터페이스(UI)"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Change"
        }), " 다음 메뉴에서 데이터 조회 '", (0,jsx_runtime.jsx)(UItext/* default */.Z, {
          children: "시간 선택"
        }), "' UI 요소를 신규 버전으로 교체 수정"]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "통합 보고서"
            })
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flex 보드"
            })
          }), " - 위젯"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 설정"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "메트릭스 이벤트"
            })
          }), " - 이벤트 시뮬레이션"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "복합 메트릭스 알림"
            })
          }), " - 데이터 조회"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "경고 알림"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "파일 로그 알림"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "경고 알림"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "이벤트 기록"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "관리"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "사용자 행위"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "실험실"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "메트릭스 이상 탐지"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "실험실"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MXQL 데이터 조회"
            })
          })]
        }), "\n"]
      })]
    })]
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



}),
"37016": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return Status; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function Status(param) {
    let { children, priority } = param;
    if (priority) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
            className: children,
            type: priority,
            children: children
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
        className: children,
        children: children
    });
}


}),
"13348": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return UItext; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);


function UItext(param) {
    let { children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        className: "uitext",
        children: children
    });
}


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