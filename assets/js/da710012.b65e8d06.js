"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["76170"], {
"13538": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_php_php_2_3_3_mdx_da7_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-php-php-2-3-3-mdx-da7.json
var site_docs_release_notes_php_php_2_3_3_mdx_da7_namespaceObject = JSON.parse('{"id":"release-notes/php/php-2_3_3","title":"PHP Agent v2.3.3","description":"배포일: 2021-11-10","source":"@site/docs/release-notes/php/php-2.3.3.mdx","sourceDirName":"release-notes/php","slug":"/release-notes/php/php-2_3_3","permalink":"/release-notes/php/php-2_3_3","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/php/php-2.3.3.mdx","tags":[],"version":"current","frontMatter":{"id":"php-2_3_3","title":"PHP Agent v2.3.3","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/php/php-2.3.3.mdx


const frontMatter = {
	id: 'php-2_3_3',
	title: 'PHP Agent v2.3.3',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
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
  "value": "file 관련 함수 추가",
  "id": "file-관련-함수-추가",
  "level": 3
}, {
  "value": "Fixed (버그 수정)",
  "id": "fixed-버그-수정",
  "level": 2
}, {
  "value": "GET 파라미터 수집 오류 수정",
  "id": "get-파라미터-수집-오류-수정",
  "level": 3
}, {
  "value": "PHP 8.0 에서 JIT disabled 경고",
  "id": "php-80-에서-jit-disabled-경고",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배포일: 2021-11-10"
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,jsx_runtime.jsx)(_components.h2, {
        id: "change-업데이트",
        children: "Change (업데이트)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "file-관련-함수-추가",
        children: "file 관련 함수 추가"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["기존 수집 중인 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fopen()"
        }), " 함수에 추가로, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "file_get_contest()"
        }), " 함수의 실행시간과 파일명을 수집합니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "파일관련 수집 대상 함수"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-php",
          children: "fopen()\nfile()\nfile_get_contents()\n"
        })
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
        id: "get-파라미터-수집-오류-수정",
        children: "GET 파라미터 수집 오류 수정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["코드이그나이터 프레임워크에서 rewrite module로 URL이 변경되는 경우 GET 파라미터를 수집 못하는 오류 수정, URI의 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Query_string"
        }), "에서 파라미터를 분리하여 중복없이 추가하였습니다."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "php-80-에서-jit-disabled-경고",
        children: "PHP 8.0 에서 JIT disabled 경고"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["PHP 8.0 에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "opcache.jit=on"
        }), " 설정 시에 아래와 같은 경고가 발생하는 오류를 수정하였습니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "PHP Warning: JIT is incompatible with third party extensions that override zend_execute_ex(). JIT disabled. in Unknown on line 0\n"
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "PHP 8.0.3 이상을 권장합니다."
        })
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