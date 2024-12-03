"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["32235"], {
"65888": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_focus_focus_release_notes_mdx_07b_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-focus-focus-release-notes-mdx-07b.json
var site_docs_release_notes_focus_focus_release_notes_mdx_07b_namespaceObject = JSON.parse('{"id":"release-notes/focus/focus-release-notes","title":"Focus release notes","description":"Focus v1.1.5","source":"@site/docs/release-notes/focus/focus-release-notes.mdx","sourceDirName":"release-notes/focus","slug":"/release-notes/focus/focus-release-notes","permalink":"/release-notes/focus/focus-release-notes","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/focus/focus-release-notes.mdx","tags":[],"version":"current","frontMatter":{"id":"focus-release-notes","title":"Focus release notes","toc_max_heading_level":2,"isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Telegraf","permalink":"/release-notes/telegraf/telegraf-release-notes"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/focus/focus-release-notes.mdx


const frontMatter = {
	id: 'focus-release-notes',
	title: 'Focus release notes',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "Focus v1.1.5",
  "id": "focus-v115",
  "level": 2
}, {
  "value": "Focus v1.1.4",
  "id": "focus-v114",
  "level": 2
}, {
  "value": "로그 경로에 날짜 및 * 지원 추가",
  "id": "로그-경로에-날짜-및--지원-추가",
  "level": 3
}, {
  "value": "Focus v1.1.3",
  "id": "focus-v113",
  "level": 2
}, {
  "value": "json input 방식 오류 수정",
  "id": "json-input-방식-오류-수정",
  "level": 3
}, {
  "value": "Focus v1.1.2",
  "id": "focus-v112",
  "level": 2
}, {
  "value": "도태 대상 안내",
  "id": "도태-대상-안내",
  "level": 3
}, {
  "value": "Focus v1.1.1",
  "id": "focus-v111",
  "level": 2
}, {
  "value": "focus 모듈로 수집한 메트릭 알림 설정시 복구 알림 오작동 수정",
  "id": "focus-모듈로-수집한-메트릭-알림-설정시-복구-알림-오작동-수정",
  "level": 3
}, {
  "value": "Focus v1.1.0",
  "id": "focus-v110",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v115",
        children: "Focus v1.1.5"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "2023년 3월 22일"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Change"
        }), " 입력 가능한 json 데이터의 최대 길이를 65536 Byte로 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v114",
        children: "Focus v1.1.4"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그-경로에-날짜-및--지원-추가",
        children: "로그 경로에 날짜 및 * 지원 추가"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Feature"
        }), " 로그 경로에 날짜(", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://strftime.org",
          children: "http://strftime.org"
        }), ") 및 Wildcard(*) 지원 추가"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v113",
        children: "Focus v1.1.3"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "json-input-방식-오류-수정",
        children: "json input 방식 오류 수정"
      }), (0,jsx_runtime.jsxs)("p", {
        children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
          children: "Change"
        }), " 코드 오류로 인한 json input 방식의 수집 장애 수정"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v112",
        children: "Focus v1.1.2"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "도태-대상-안내",
        children: "도태 대상 안내"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "이 버전은 코드 오류로 json input 방식의 수집이 정상적으로 이루어지지 않습니다. 1.1.3 버전 업그레이드를 권고 드립니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다운로드는 아래 링크에서 확인 하실 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "http://repo.whatap.io/index.html#focus/",
          children: "http://repo.whatap.io/index.html#focus/"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v111",
        children: "Focus v1.1.1"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "focus-모듈로-수집한-메트릭-알림-설정시-복구-알림-오작동-수정",
        children: "focus 모듈로 수집한 메트릭 알림 설정시 복구 알림 오작동 수정"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "아래와 같이 포커스 모듈의 신규 버전이 릴리즈 되었습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "현상: focus 모듈로 수집한 메트릭 알림 설정시 복구 알림 오작동"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "원인: 인스턴스 2개 이상 수집할때 알림에서 메트릭의 인스턴스를 잘못 구분 발생"
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["수정: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-pk"
          }), " 옵션을 추가하여 메트릭의 인스턴스 필드를 지정"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "K8S에서 POD의 재시작을 수집할때 데이터"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-json",
          children: "{ \"Pod\" : \"whatap-master-agent-756d6f6567-hpvsc\", \"Restart\" : 0 }\n{ \"Pod\" : \"whatap-virtual-david-oberg-754fd79f5f-9s5vd\", \"Restart\" : 147 }\n{ \"Pod\" : \"whatap-virtual-david-oberg-754fd79f5f-j4pfw\", \"Restart\" : 141 }\n{ \"Pod\" : \"whatap-virtual-stanley-collett-5c8d998bcf-bfh6r\", \"Restart\" : 142 }\n{ \"Pod\" : \"whatap-virtual-stanley-collett-5c8d998bcf-vh548\", \"Restart\" : 144 }\n{ \"Pod\" : \"whatap-virtual-timothy-warren-79d4869b7c-4b6h6\", \"Restart\" : 145 }\n{ \"Pod\" : \"whatap-virtual-timothy-warren-79d4869b7c-65k2h\", \"Restart\" : 145 }\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pod 필드를 인스턴스 구분으로 지정"
        })
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl get pod -n virtual2 --no-headers |\\\nawk '{printf \"{ \\\"Pod\\\" : \\\"%s\\\", \\\"Restart\\\" : %s }\\n\",$1,$4} ' |\\\n./focus -license $WHATAP_LICENSE \\\n-pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n-category $CATEGORY -pk Pod\n\n$ ./focus -h\n\n    ______                WHATAP\n   / ____/___  _______  _______\n  / /_  / __ \\/ ___/ / / / ___/\n / __/ / /_/ / /__/ /_/ (__  )\n/_/    \\____/\\___/\\__,_/____/\n\n WhaTap Focus ver 1.1.2\n Copyright ⓒ 2019 WhaTap Labs Inc. All rights reserved.\n\n2022/01/20 11:59:30 [error] no project code[-pcode]\n\nusage: focus   -pcode <pcode>    : project code\n               ...\n               -pk <fieldname>  :[opt] primary key field\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "focus-v110",
        children: "Focus v1.1.0"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "최초 릴리즈"
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