"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["86715"], {
"75300": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_server_server_2_2_8_mdx_23f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-server-server-2-2-8-mdx-23f.json
var site_docs_release_notes_server_server_2_2_8_mdx_23f_namespaceObject = JSON.parse('{"id":"release-notes/server/server-2_2_8","title":"Server Agent v2.2.8","description":"배포일: 2022-11-29","source":"@site/docs/release-notes/server/server-2.2.8.mdx","sourceDirName":"release-notes/server","slug":"/release-notes/server/server-2_2_8","permalink":"/release-notes/server/server-2_2_8","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/server/server-2.2.8.mdx","tags":[],"version":"current","frontMatter":{"id":"server-2_2_8","title":"Server Agent v2.2.8","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/release-notes/server/server-2.2.8.mdx


const frontMatter = {
	id: 'server-2_2_8',
	title: 'Server Agent v2.2.8',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "윈도우 프로세스 모니터링 소유자 이름 처리 개선",
  "id": "윈도우-프로세스-모니터링-소유자-이름-처리-개선",
  "level": 2
}, {
  "value": "리눅스 CPU IRQ 수집 오류 개선",
  "id": "리눅스-cpu-irq-수집-오류-개선",
  "level": 2
}, {
  "value": "다운로드",
  "id": "다운로드",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "배포일: 2022-11-29"
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "윈도우 모니터링 에이전트는 02시경 자동 재시작 오류로 오전 2시경 정지되고 Agent NoData 오탐이 발생할 수 있습니다. 2.2.8 버전을 사용하고 있다면 2.2.9 버전 이상으로 업데이트를 권장합니다. 설치 파일을 다시 다운로드 받은 다음, 해당 서버에서 재실행할 수 있습니다. 에이전트 삭제는 불필요합니다."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "윈도우-프로세스-모니터링-소유자-이름-처리-개선",
        children: "윈도우 프로세스 모니터링 소유자 이름 처리 개선"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "윈도우 프로세스 모니터링 소유자 이름 조회 API를 cache처리를 통해 호출 부하를 감소 하도록 개선했습니다."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "리눅스-cpu-irq-수집-오류-개선",
        children: "리눅스 CPU IRQ 수집 오류 개선"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "리눅스 CPU IRQ 수집시 irq 계산시 코드 오류로 과소하게 수집하는 오류를 수정 했습니다."
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "다운로드",
        children: "다운로드"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "RPM (Red Hat/CentOS/Amazon linux)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "6Server / 6"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/6/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/centos/6/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["i386 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/6/i386/whatap-infra-1.2-4.i386.rpm",
                    children: "http://repo.whatap.io/centos/6/i386/whatap-infra-1.2-4.i386.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "7Server / 7"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/7/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/centos/7/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/7/aarch64/whatap-infra-2.2-8.aarch64.rpm",
                    children: "http://repo.whatap.io/centos/7/aarch64/whatap-infra-2.2-8.aarch64.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "8Server / 8"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/8/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/centos/8/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/8/aarch64/whatap-infra-2.2-8.aarch64.rpm",
                    children: "http://repo.whatap.io/centos/8/aarch64/whatap-infra-2.2-8.aarch64.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "9Server / 9"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/9/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/centos/9/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/9/aarch64/whatap-infra-2.2-8.aarch64.rpm",
                    children: "http://repo.whatap.io/centos/9/aarch64/whatap-infra-2.2-8.aarch64.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Amazon Linux2"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/latest/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/centos/latest/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["aarch64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/centos/latest/aarch64/whatap-infra-2.2-8.aarch64.rpm",
                    children: "http://repo.whatap.io/centos/latest/aarch64/whatap-infra-2.2-8.aarch64.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "SUSE 12"
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["x86_64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/suse/12/x86_64/whatap-infra-2.2-8.x86_64.rpm",
                    children: "http://repo.whatap.io/suse/12/x86_64/whatap-infra-2.2-8.x86_64.rpm"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "DEB (Ubuntu/Debian)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Ubuntu 12 and above", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["amd64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/debian/unstable/whatap-infra_2.2.8_amd64.deb",
                    children: "http://repo.whatap.io/debian/unstable/whatap-infra_2.2.8_amd64.deb"
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["arm64 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/debian/unstable/whatap-infra_2.2.8_arm64.deb",
                    children: "http://repo.whatap.io/debian/unstable/whatap-infra_2.2.8_arm64.deb"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "TXZ (Freebsd)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Freebsd 10 and above", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/freebsd/10/whatap-infra-1.1.2.txz",
                    children: "http://repo.whatap.io/freebsd/10/whatap-infra-1.1.2.txz"
                  })
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "EXE(Windows)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["Windows Server 2008 R2 and above", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["32/64bit ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/windows/whatap_infra.zip",
                    children: "http://repo.whatap.io/windows/whatap_infra.zip"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PKG(SPARC)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["SUNOS 11 and above", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["SPARC ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "http://repo.whatap.io/sunos/11/whatap-infra.1.21.SPARC.pkg.tar.gz",
                    children: "http://repo.whatap.io/sunos/11/whatap-infra.1.21.SPARC.pkg.tar.gz"
                  })]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
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