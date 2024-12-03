"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["90596"], {
"13099": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_service_service_1_84_0_mdx_b5c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-service-service-1-84-0-mdx-b5c.json
var site_docs_release_notes_service_service_1_84_0_mdx_b5c_namespaceObject = JSON.parse('{"id":"release-notes/service/service-1_84_0","title":"Service 1.84.0","description":"배포일: 2022-08-24","source":"@site/docs/release-notes/service/service-1.84.0.mdx","sourceDirName":"release-notes/service","slug":"/release-notes/service/service-1_84_0","permalink":"/release-notes/service/service-1_84_0","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/service/service-1.84.0.mdx","tags":[],"version":"current","frontMatter":{"id":"service-1_84_0","title":"Service 1.84.0","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/service/service-1.84.0.mdx


const frontMatter = {
	id: 'service-1_84_0',
	title: 'Service 1.84.0',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "<code>공통</code>",
  "id": "공통",
  "level": 2
}, {
  "value": "서버",
  "id": "서버",
  "level": 2
}, {
  "value": "애플리케이션",
  "id": "애플리케이션",
  "level": 2
}, {
  "value": "컨테이너",
  "id": "컨테이너",
  "level": 2
}, {
  "value": "로그",
  "id": "로그",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배포일: 2022-08-24"
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "공통",
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "공통"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 관리"
          })
        }), " - 프로젝트 설명 편집 기능 추가"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Flex 보드"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "메트릭스 위젯 생성 시 조회 시간 범위에 따라 데이터 인터벌 자동 조정"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "복수 필터 적용 시 동일한 필터 대상은 union 조건 적용"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "조직 관리"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "조직 수정 권한이 없는 경우 그룹 삭제 기능 비활성화"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "조직 로고 변경 기능 수정"
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 실시간 알림"
          })
        }), " - 새로 발생한 이벤트 알림 팝업이 시간 경과 후에도 사라지지 않고 화면 상에 남아있는 현상 수정"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "청구 및 납부 내역"
          })
        }), " - 미납 금액 표시 컬럼 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "서버",
        children: "서버"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " - Red Hat 계열 운영체제 모니터링 설치 안내"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "서버 설정"
          })
        }), " - 서버 설정 메뉴 진입 시 화면 깜빡임 현상 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "애플리케이션",
        children: "애플리케이션"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "에이전트 설치"
          })
        }), " - Go, PHP 프로젝트에 Alpine Linux 에이전트 설치 기능 추가"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "액티브 스택"
          })
        }), " - thread_name 정보 추가"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "멀티 트랜잭션"
          })
        }), " - 멀티 트랜잭션 차트 뷰에서 프로젝트 목록 변경 시 화면 갱신 이상 현상 수정"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 설정"
          })
        }), " - 히트맵 패턴 이벤트 설정 저장 시 안내 메시지 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "컨테이너",
        children: "컨테이너"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨테이너맵"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "컨테이너/파드 상세화면 > 로그 > 로그보기 화면 태그 필터 기능 추가"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "컨테이너/파드 상세화면 > 트레이스 > 히트맵 상세 화면 너비 조정 기능 추가"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "파드 상태 표시 기본값으로 ConState 필드 사용"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "단일 컨테이너 조회 화면 노드 Memory Total 데이터 추가"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "컨테이너/파드 요약화면 로그 검색기 메뉴 이동 시 시간 조건이 변경되는 현상 수정"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "컨테이너/파드 요약화면 로그, 이벤트 탭 버튼 스타일 수정"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "컨테이너/파드 상세화면 메트릭스 차트의 Y측 단위 표시 수정"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "파드 요약화면 > 로그 조회 후 메트릭스 데이터가 비어보이는 현상 수정"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "노드 목록/상세"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "CPU 코어 수, Memory Total 정보 추가"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "화면 내 데이터 없는 컬럼 \"-\" 표시"
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 설정"
          })
        }), " - 로그 설정 안내 문구 일부 수정"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "애플리케이션 서비스 대시보드"
          })
        }), " - 히트맵 위젯 Y축 자동 조정 및 에러만 보기 옵션 수정"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "이벤트 설정"
          })
        }), " - 메트릭스 이벤트 설정 JSON 내보내기 기능 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "로그",
        children: "로그"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "로그 검색기"
          })
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "로그 데이터 조회 줄 수 제한 사용자 선택 옵션 추가"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "시스템 로그(# 시작 로그 카테고리)의 조회 시 \"로그 모니터링 활성화\" 문구 표시 제거"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "대소문자 구분 검색 옵션, 시간 역순 조회 옵션 추가"
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