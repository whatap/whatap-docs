"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["28970"], {
"40465": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_php_install_check_mdx_799_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-php-install-check-mdx-799.json
var site_docs_php_install_check_mdx_799_namespaceObject = JSON.parse('{"id":"php/install-check","title":"설치 점검 사항","description":"PHP 에이전트 설치 점검에 대한 설명입니다.","source":"@site/docs/php/install-check.mdx","sourceDirName":"php","slug":"/php/install-check","permalink":"/php/install-check","draft":false,"unlisted":false,"editUrl":"undefined/docs/php/install-check.mdx","tags":[],"version":"current","frontMatter":{"id":"install-check","title":"설치 점검 사항","description":"PHP 에이전트 설치 점검에 대한 설명입니다.","keywords":["PHP","PHP 모니터링","애플리케이션","애플리케이션 모니터링","설치 점검 사항"],"isTranslationMissing":false},"sidebar":"phpSidebar","previous":{"title":"Docker 환경 설치","permalink":"/php/install-agent-docker"},"next":{"title":"설치 문제 해결","permalink":"/php/agent-troubleshooting"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/php/install-check.mdx


const frontMatter = {
	id: 'install-check',
	title: '설치 점검 사항',
	description: 'PHP 에이전트 설치 점검에 대한 설명입니다.',
	keywords: [
		'PHP',
		'PHP 모니터링',
		'애플리케이션',
		'애플리케이션 모니터링',
		'설치 점검 사항'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*구성 수정*/
/*설치가 완료된 후 Apache 또는 PHP-FPM 서비스(Service)를 다시 시작하면 설정된 PHP 확장 모듈(PHP Extension module) *whatap.so* 파일이 로딩됩니다.

PHP 확장 모듈이 잘 설치됐는지 다음의 방법으로 확인할 수 있습니다.*/


const toc = [{
  "value": "다시 실행하기",
  "id": "다시-실행하기",
  "level": 2
}, {
  "value": "Red Hat/CentOS",
  "id": "red-hatcentos",
  "level": 3
}, {
  "value": "Debian/Ubuntu",
  "id": "debianubuntu",
  "level": 3
}, {
  "value": "FreeBSD",
  "id": "freebsd",
  "level": 3
}, {
  "value": "PHP 확장 모듈 설치 상태 확인하기",
  "id": "php-확장-모듈-설치-상태-확인하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "다시-실행하기",
        children: "다시 실행하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["설치가 완료된 후 Apache 또는 PHP-FPM 서비스(Service)를 다시 시작하면 설정된 PHP 확장 모듈(PHP Extension module) ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " 파일이 로딩됩니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "만약 whatap-php 서비스(Service)가 실행 중이지 않거나 오류가 발생하면 다시 시작하세요."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "red-hatcentos",
        children: "Red Hat/CentOS"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ service whatap-php restart\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "debianubuntu",
        children: "Debian/Ubuntu"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ sudo service whatap-php restart\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "freebsd",
        children: "FreeBSD"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=SH",
          children: "$ service whatap_php restart\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "php-확장-모듈-설치-상태-확인하기",
        children: "PHP 확장 모듈 설치 상태 확인하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["설치가 완료된 후 Apache 또는 PHP-FPM 서비스를 다시 시작하면 설정된 PHP 확장 모듈 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.so"
        }), " 파일이 로딩됩니다. PHP 확장 모듈이 잘 설치됐는지 다음의 방법으로 확인할 수 있습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PHP 추가 INI 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.ini"
            }), " 파일이 생성되었는지 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ find / | grep whatap.ini\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["PHP 확장 모듈 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.so"
            }), " 파일이 생성되었는지 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ find / | grep whatap.so\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "PHP 확장 모듈이 실행되고 있는지 확인하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ sudo php -m\n\n[PHP Modules]\nbz2\ncalendar\nCore\nctype\ncurl\ndate\n…\nwhatap   # whatap 모듈 실행 확인\n…\n[Zend Modules]\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "whatap-php 서비스 상태를 확인하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title=SH",
              children: "$ service whatap-php status\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "관리"
              })
            }), " > ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "에이전트 설정"
              })
            }), " 메뉴에서 설정된 서버가 추가되었는지 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
            img: "php-agent-list.png"
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