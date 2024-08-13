"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[69693],{

/***/ 67543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ collect_stacks_contentTitle),
  "default": () => (/* binding */ collect_stacks_MDXContent),
  frontMatter: () => (/* binding */ collect_stacks_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ collect_stacks_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/common-items/_php-collect-stacks.mdx


const frontMatter = {};
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
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "애플리케이션 모니터링 에이전트는 선형 수집 방식과 환형 수집 방식을 제공합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "선형-수집",
        children: "선형 수집"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "개별 트랜잭션 트레이스는 무한정 스텝을 수집할 수 없습니다. 트랜잭션별로 길이가 제한된 버퍼에 트레이스 스텝을 저장합니다. 각 트랜잭션은 최대로 수집할 수 있는 스텝의 수가 옵션으로 지정되어 있습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_max_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1024"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "최대로 수집 가능한 스텝 수입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_normal_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "800"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "일반적으로 아무런 제약없이 수집되는 스텝 수입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_heavy_count"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1000"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "normal count를 초과한 경우 스텝은 응답시간이 느린 스텝과 액티브 스택 스텝만 수집합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "whatap.profile_step_heavy_time"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["기본값 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["heavy count 이내에서의 수집되는 스텝의 기준 시간은 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.profile_step_heavy_time"
            }), "입니다."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: "https://img.whatap.io/media/agent_java/data/step_buffer.png",
              alt: "step_buffer"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["수집되는 트레이스의 스텝 수가 heavy count를 초과하는 경우에는 액티브 스택만이 수집됩니다. 이 경우에도 최대 스텝 수는 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap.profile_step_max_count"
            }), "를 넘지 않습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "환형-수집",
        children: "환형 수집"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "선형 수집은 트레이스에서 앞부분을 수집하고 버퍼 사이즈를 넘으면 나중 내용을 버립니다. 반면 환형 수집은 앞부분의 스텝을 버리는 방식입니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          children: "circular_profile_enabled=true\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: "https://img.whatap.io/media/agent_java/data/circular_profile.png",
          alt: "circular_profile"
        })
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["버퍼 사이즈는 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.profile_step_max_count"
        }), "에 설정합니다."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-ini",
          children: "whatap.profile_step_max_count=1024\n"
        })
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


;// CONCATENATED MODULE: ./docs/php/collect-stacks.mdx


const collect_stacks_frontMatter = {
	id: 'collect-stacks',
	title: '트랜잭션 스텝 수집 방식',
	description: '트랜잭션 스텝 수집 방식을 안내합니다.',
	tags: [
		'PHP',
		'트랜잭션'
	]
};
const collect_stacks_contentTitle = undefined;
const metadata = {
  "id": "php/collect-stacks",
  "title": "트랜잭션 스텝 수집 방식",
  "description": "트랜잭션 스텝 수집 방식을 안내합니다.",
  "source": "@site/docs/php/collect-stacks.mdx",
  "sourceDirName": "php",
  "slug": "/php/collect-stacks",
  "permalink": "/php/collect-stacks",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/php/collect-stacks.mdx",
  "tags": [
    {
      "inline": true,
      "label": "PHP",
      "permalink": "/tags/php"
    },
    {
      "inline": true,
      "label": "트랜잭션",
      "permalink": "/tags/트랜잭션"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "collect-stacks",
    "title": "트랜잭션 스텝 수집 방식",
    "description": "트랜잭션 스텝 수집 방식을 안내합니다.",
    "tags": [
      "PHP",
      "트랜잭션"
    ]
  },
  "sidebar": "phpSidebar",
  "previous": {
    "title": "멀티 트랜잭션",
    "permalink": "/php/trs-multi-trace"
  },
  "next": {
    "title": "토폴로지",
    "permalink": "/php/topology"
  }
};
const assets = {

};




const collect_stacks_toc = [...toc];
function collect_stacks_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(MDXContent, {});
}
function collect_stacks_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(collect_stacks_createMdxContent, {
      ...props
    })
  }) : collect_stacks_createMdxContent(props);
}



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