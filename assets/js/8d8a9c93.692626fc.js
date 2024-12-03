"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["60097"], {
"11631": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_5_2_mdx_8d8_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-5-2-mdx-8d8.json
var site_docs_release_notes_php_php_2_5_2_mdx_8d8_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_5_2","title":"PHP Agent v2.5.2","description":"배포일: 2022-07-06","source":"@site/docs/release-notes/php/php-2.5.2.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_5_2","permalink":"/release-notes/php/php-2_5_2","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.5.2.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_5_2","title":"PHP Agent v2.5.2","toc_max_heading_level":2,"isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.5.2.mdx


const frontMatter = {
	id: 'php-2_5_2',
	title: 'PHP Agent v2.5.2',
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "Change (업데이트)",
  "id": "change-업데이트",
  "level": 2
}, {
  "value": "로그모니터링 압축 전송, 기본 설정으로 변경",
  "id": "로그모니터링-압축-전송-기본-설정으로-변경",
  "level": 3
}, {
  "value": "프로젝트 라이센스 키의 명칭을 엑세스 키로 변경",
  "id": "프로젝트-라이센스-키의-명칭을-엑세스-키로-변경",
  "level": 3
}, {
  "value": "TCP queue 크기 변경",
  "id": "tcp-queue-크기-변경",
  "level": 3
}, {
  "value": "Fixed (버그 수정)",
  "id": "fixed-버그-수정",
  "level": 2
}, {
  "value": "segmentation fault 수정",
  "id": "segmentation-fault-수정",
  "level": 3
}, {
  "value": "biz_exceptions 옵션",
  "id": "biz_exceptions-옵션",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배포일: 2022-07-06"
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "change-업데이트",
        children: "Change (업데이트)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "로그모니터링-압축-전송-기본-설정으로-변경",
        children: "로그모니터링 압축 전송, 기본 설정으로 변경"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.logsink_zip_enabled"
        }), "의 기본값을 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " 로 설정합니다. 압축 전송을 기본으로 합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "프로젝트-라이센스-키의-명칭을-엑세스-키로-변경",
        children: "프로젝트 라이센스 키의 명칭을 엑세스 키로 변경"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["에이전트 옵션 중 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.license"
        }), " 를 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.accesskey"
        }), " 로 변경합니다. 기존 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "license"
        }), "도 사용 가능합니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "tcp-queue-크기-변경",
        children: "TCP queue 크기 변경"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "256, 512 에서 512, 1024 로 확장합니다. 로그모니터링 파일이 많이 설정되어 있는 경우 tcp 패킷 증가를 처리하기 위해 확장합니다."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "fixed-버그-수정",
        children: "Fixed (버그 수정)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "segmentation-fault-수정",
        children: "segmentation fault 수정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["멀티트랜잭션 추적 옵션(", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.mtrace_enabled"
        }), ")이 설정된 상태에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "curl_setopt_array"
        }), " 함수 사용 중 segmentation fault가 발생하는 오류를 수정했습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "biz_exceptions-옵션",
        children: "biz_exceptions 옵션"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "biz_exceptions"
        }), " 옵션으로 제외한 오류는 히트맵에는 오류로 표기 되지 않고, 트랜잭션 프로파일과 통계정보에만 적용됩니다. 통계정보에 적용 안되는 오류를 수정했습니다."]
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