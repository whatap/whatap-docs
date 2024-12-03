"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["40461"], {
"81035": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_agent_update_mdx_ab2_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-agent-update-mdx-ab2.json
var site_docs_php_agent_update_mdx_ab2_namespaceObject = JSON.parse('{"id":"php/agent-update","title":"에이전트 업데이트","description":"PHP 에이전트 업데이트 방법을 제공합니다.","source":"@site/docs/php/agent-update.mdx","sourceDirName":"php","slug":"/php/agent-update","permalink":"/php/agent-update","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/agent-update.mdx","tags":[],"version":"current","frontMatter":{"id":"agent-update","title":"에이전트 업데이트","description":"PHP 에이전트 업데이트 방법을 제공합니다.","keywords":["PHP","업데이트","관리하기","애플리케이션"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"공유 메모리","permalink":"/php/agent-shared-memory"},"next":{"title":"모니터링 일시 중지","permalink":"/php/agent-temp-st"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/php/agent-update.mdx


const frontMatter = {
	id: 'agent-update',
	title: '에이전트 업데이트',
	description: 'PHP 에이전트 업데이트 방법을 제공합니다.',
	keywords: [
		'PHP',
		'업데이트',
		'관리하기',
		'애플리케이션'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Red Hat/CentOS",
  "id": "red-hatcentos",
  "level": 2
}, {
  "value": "Debian/Ubuntu",
  "id": "debianubuntu",
  "level": 2
}, {
  "value": "FreeBSD",
  "id": "freebsd",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["패키지 업데이트는 기존 설정을 유지한 채로 PHP 모니터링 서비스를 업데이트합니다. 0.2.7 이후 버전부터 정상적인 업데이트가 지원됩니다. 이전 버전은 삭제 후 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "재설치"
      }), "가 필요합니다."]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "caution",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["아파치 실행 중 php extension의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "shared library(.so)"
        }), " 파일이 변경되는 경우 아파치 데몬이 비정상 종료될 수 있습니다. 반드시 아파치 서버 중지 상태에서 업데이트를 진행해야 안전합니다."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "red-hatcentos",
        children: "Red Hat/CentOS"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "패키지 정보 갱신을 위해 캐시 정보를 삭제하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ yum clean all\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apache 또는 PHP-FPM 서비스(Service)를 중지하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "whatap-php 패키지를 업데이트하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ yum update whatap-php\n"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "특정 버전으로 다운로드하고자 할 때는 다음과 같이 버전을 명시하세요."
            }), (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "$ yum update whatap-php-{version}\n"
              })
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "debianubuntu",
        children: "Debian/Ubuntu"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "패키지 정보 갱신을 위해 캐시 정보를 갱신하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo apt-get update\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apache 또는 PHP-FPM 서비스(Service)를 중지하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "whatap-php 패키지를 업데이트하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ sudo apt-get install --only-upgrade whatap-php\n"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.p, {
              children: "특정 버전으로 다운로드하고자 할 때는 다음과 같이 버전을 명시하세요."
            }), (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                className: "language-bash",
                children: "$ sudo apt-get install whatap-php={version}\n"
              })
            })]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "freebsd",
        children: "FreeBSD"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트 삭제 후 재설치하세요. 다음 항목을 참조하여 진행하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Apache 또는 PHP-FPM 서비스(Service)를 중지"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "에이전트 삭제 후 재설치"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ /usr/whatap/php/install.sh remove\n\n$ wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/freebsd/10/whatap-php-0.4.10.txz\n$ pkg install whatap-php-0.4.10.txz\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP 확장 모듈 및 whatap-php 서비스 등록"
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "$ /usr/whatap/php/install.sh\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "특정 버전으로 다운로드하고자 할 때는 다음과 같이 버전을 명시하세요."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    children: "$ wget https://s3.ap-northeast-2.amazonaws.com/repo.whatap.io/freebsd/10/whatap-php-{version}.txz\n$ pkg install whatap-php-{version}.txz\n"
                  })
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "Apache 또는 PHP-FPM 서비스(Service)를 시작합니다."
                }), "\n"]
              }), "\n"]
            })
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