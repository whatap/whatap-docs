"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["44513"], {
"10707": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_k_8_s_k_8_s_1_7_9_mdx_f95_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-k-8-s-k-8-s-1-7-9-mdx-f95.json
var site_docs_release_notes_k_8_s_k_8_s_1_7_9_mdx_f95_namespaceObject = JSON.parse('{"id":"release-notes/k8s/k8s-1_7_9","title":"Kubernetes Agent v1.7.9","description":"2024년 08월 19일","source":"@site/docs/release-notes/k8s/k8s-1.7.9.mdx","sourceDirName":"release-notes/k8s","slug":"/release-notes/k8s/k8s-1_7_9","permalink":"/release-notes/k8s/k8s-1_7_9","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/k8s/k8s-1.7.9.mdx","tags":[],"version":"current","frontMatter":{"id":"k8s-1_7_9","title":"Kubernetes Agent v1.7.9","toc_max_heading_level":2,"pagination_next":"release-notes/k8s/k8s-1_7_8","displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar","previous":{"title":"Kubernetes Agent v1.7.10","permalink":"/release-notes/k8s/k8s-1_7_10"},"next":{"title":"Kubernetes Agent v1.7.8","permalink":"/release-notes/k8s/k8s-1_7_8"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/k8s/k8s-1.7.9.mdx


const frontMatter = {
	id: 'k8s-1_7_9',
	title: 'Kubernetes Agent v1.7.9',
	toc_max_heading_level: 2,
	pagination_next: 'release-notes/k8s/k8s-1_7_8',
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Status} = _components;
  if (!Status) _missingMdxReference("Status", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "2024년 08월 19일"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " cgroup v2 환경에서 rss 관련 매트릭 지표 추가 수집"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "container::mem_totalrss"
          }), ": cgroup v2 환경에서 컨테이너의 메모리 RSS(Resident Set Size)를 수집하는 지표입니다. 이 지표는 컨테이너가 실제로 사용하고 있는 물리 메모리의 양을 나타냅니다."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " 컨테이너의 request, limit 설정 여부에 대한 지표 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Memory 관련 지표"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::memory_limit_contained"
                  }), ": 컨테이너의 메모리 limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 limit이 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::memory_request_contained"
                  }), ": 컨테이너의 메모리 request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 request가 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "CPU 관련 지표"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::cpu_limit_contained"
                  }), ": 컨테이너의 CPU limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 limit이 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::cpu_request_contained"
                  }), ": 컨테이너의 CPU request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 request가 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ephemeral-Storage 관련 지표"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::ephemeral_storage_limit_contained"
                  }), ": 컨테이너의 ephemeral-storage limit이 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 limit이 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "container::ephemeral_storage_request_contained"
                  }), ": 컨테이너의 ephemeral-storage request가 설정되어 있는지 여부를 나타내는 지표입니다. 값이 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "true"
                  }), "이면 request가 설정되어 있고, ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "false"
                  }), "이면 설정되지 않았음을 나타냅니다."]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Status, {
            priority: "1",
            children: "Feature"
          }), " 노드 라벨 지표 리스트 형태로 추가"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kube_node::labelKey"
              }), ": Kubernetes 노드의 라벨 키(Key)를 수집하는 지표입니다. 노드에 적용된 각 라벨의 키를 나타냅니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "kube_node::labelValue"
              }), ": Kubernetes 노드의 라벨 값(Value)을 수집하는 지표입니다. 노드에 적용된 각 라벨의 값을 나타냅니다."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "info",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Agent download: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://repo.whatap.io/docker/kube_mon_1.7.9.tar",
          children: "kube_mon_1.7.9.tar"
        })]
      })
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