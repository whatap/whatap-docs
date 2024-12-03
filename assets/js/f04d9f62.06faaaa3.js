"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["66198"], {
"4626": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_create_name_space_project_mdx_f04_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-create-name-space-project-mdx-f04.json
var site_docs_kubernetes_create_name_space_project_mdx_f04_namespaceObject = JSON.parse('{"id":"kubernetes/create-name-space-project","title":"네임스페이스 프로젝트 만들기","description":"네임스페이스 프로젝트를 생성합니다.","source":"@site/docs/kubernetes/create-name-space-project.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/create-name-space-project","permalink":"/kubernetes/create-name-space-project","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/create-name-space-project.mdx","tags":[],"version":"current","frontMatter":{"id":"create-name-space-project","title":"네임스페이스 프로젝트 만들기","description":"네임스페이스 프로젝트를 생성합니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","네임스페이스"],"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"Docker Go 설치","permalink":"/kubernetes/install-docker-go"},"next":{"title":"에이전트 문제 해결","permalink":"/kubernetes/agent-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/create-name-space-project.mdx


const frontMatter = {
	id: 'create-name-space-project',
	title: '네임스페이스 프로젝트 만들기',
	description: '네임스페이스 프로젝트를 생성합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'네임스페이스'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    em: "em",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "다음과 같은 상황일 때 클러스터 프로젝트에서 네임스페이스 프로젝트 분리를 고려합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "단일 클러스터(Master) 프로젝트에 존재하는 리소스 수가 많고, 쿠버네티스 Namespace 기준 분리 가능한 경우"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "쿠버네티스 Namespace마다 부서 또는 담당자가 달라 특정 Namespace만 모니터링해야 할 경우"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클러스터 프로젝트에 있는 각 쿠버네티스 Namespace를 별도의 와탭 네임스페이스로 분리하려면 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "관리"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 관리"
        })
      }), " 메뉴를 통해 프로젝트를 생성합니다."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_namespace_project_mgt.png",
      desc: "네임스페이스 관리"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "관리"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "네임스페이스 관리"
          })
        }), " 메뉴는 클러스터 프로젝트 선택 시에만 표시됩니다. 네임스페이스 프로젝트에서는 해당 메뉴로 진입할 수 없습니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 목록"
        })
      }), "에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "+ 프로젝트 추가"
        })
      }), " 버튼이 표시되는 경우 해당 버튼을 눌러 와탭 네임스페이스 프로젝트를 생성할 수 있습니다. 네임스페이스 이름을 입력한 다음 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "확인"
        })
      }), " 버튼을 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_create_namespace_project_popup.png",
      desc: "네임스페이스 프로젝트 생성"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["네임스페이스 프로젝트를 생성하면 새로운 별도의 프로젝트로 분리되기 때문에 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "네임스페이스 목록"
        })
      }), "에서 더 이상 클러스터 프로젝트에서는 확인이 불가능합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "클러스터 프로젝트에서 네임스페이스 프로젝트로 분리되어 추가된 Namespace는 다음과 같이 현황 정보를 표시합니다."
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_namespace_project_mgt_complete.png",
      desc: "네임스페이스 프로젝트 생성 완료"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["클러스터 프로젝트 하위에 네임스페이스 프로젝트를 생성한 경우 클러스터 프로젝트를 포함한 프로젝트 목록 확인 및 프로젝트 간 이동이 가능합니다. ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "대시보드"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "컨테이너 맵"
        })
      }), " 메뉴 화면 위에 프로젝트 목록 박스를 선택하세요."]
    }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
      img: "whatap_kubernetes_container_map_namespace_project_list.png",
      desc: "컨테이너 맵 메뉴 프로젝트 목록"
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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