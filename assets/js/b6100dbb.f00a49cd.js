"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["25209"], {
"70533": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "선형 수집",
  "id": "선형-수집",
  "level": 2
}, {
  "value": "환형 수집",
  "id": "환형-수집",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "애플리케이션 모니터링 에이전트는 선형 수집 방식과 환형 수집 방식을 제공합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "선형-수집",
        children: "선형 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "개별 트랜잭션 트레이스는 무한정 스텝을 수집할 수 없습니다. 트랜잭션별로 길이가 제한된 버퍼에 트레이스 스텝을 저장합니다. 각 트랜잭션은 최대로 수집할 수 있는 스텝의 수가 옵션으로 지정되어 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "profile_step_max_count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1024"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "최대로 수집 가능한 스텝 수입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "profile_step_normal_count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "800"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "일반적으로 아무런 제약없이 수집되는 스텝 수입니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "profile_step_heavy_count"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "1000"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "normal count를 초과한 경우 스텝은 응답시간이 느린 스텝과 액티브 스택 스텝만 수집합니다."
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "profile_step_heavy_time"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["기본값 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "100"
            })]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["heavy count 이내에서의 수집되는 스텝의 기준 시간은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "profile_step_heavy_time"
            }), "입니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
              src: "https://img.whatap.io/media/agent_java/data/step_buffer.png",
              alt: "step_buffer"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["수집되는 트레이스의 스텝 수가 heavy count를 초과하는 경우에는 액티브 스택만이 수집됩니다. 이 경우에도 최대 스텝 수는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "profile_step_max_count"
            }), "를 넘지 않습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "환형-수집",
        children: "환형 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "선형 수집은 트레이스에서 앞부분을 수집하고 버퍼 사이즈를 넘으면 나중 내용을 버립니다. 반면 환형 수집은 앞부분의 스텝을 버리는 방식입니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          children: "circular_profile_enabled=true\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_java/data/circular_profile.png",
          alt: "circular_profile"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["버퍼 사이즈는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "profile_step_max_count"
        }), "에 설정합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-ini",
          children: "profile_step_max_count=1024\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



}),
"16505": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_dotnet_collect_stacks_mdx_b61_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-dotnet-collect-stacks-mdx-b61.json
var site_docs_dotnet_collect_stacks_mdx_b61_namespaceObject = JSON.parse('{"id":"dotnet/collect-stacks","title":"트랜잭션 스텝 수집 방식","description":"트랜잭션 스텝 수집 방식을 안내합니다.","source":"@site/docs/dotnet/collect-stacks.mdx","sourceDirName":"dotnet","slug":"/dotnet/collect-stacks","permalink":"/dotnet/collect-stacks","draft":false,"unlisted":false,"editUrl":"undefined/docs/dotnet/collect-stacks.mdx","tags":[],"version":"current","frontMatter":{"id":"collect-stacks","title":"트랜잭션 스텝 수집 방식","description":"트랜잭션 스텝 수집 방식을 안내합니다.","keywords":[".NET","트랜잭션"],"isTranslationMissing":false},"sidebar":"dotNetSidebar","previous":{"title":"멀티 트랜잭션","permalink":"/dotnet/trs-multi-trace"},"next":{"title":"토폴로지","permalink":"/dotnet/topology"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/common-items/_collect-stacks.mdx
var _collect_stacks = __webpack_require__("70533");
;// CONCATENATED MODULE: ./docs/dotnet/collect-stacks.mdx


const frontMatter = {
	id: 'collect-stacks',
	title: '트랜잭션 스텝 수집 방식',
	description: '트랜잭션 스텝 수집 방식을 안내합니다.',
	keywords: [
		'.NET',
		'트랜잭션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._collect_stacks/* toc */.d$];
function _createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_collect_stacks/* default */.ZP, {});
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