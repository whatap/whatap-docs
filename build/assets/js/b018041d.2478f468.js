"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[12549],{

/***/ 20046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ MDXContent),
/* harmony export */   RM: () => (/* binding */ toc)
/* harmony export */ });
/* unused harmony exports frontMatter, contentTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "다음 단계",
  "id": "다음-단계",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "다음-단계",
      children: "다음 단계"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["애플리케이션을 실행해 모니터링을 위한 준비가 되었다면 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "install-check",
            children: "다음 문서"
          }), "를 참조해 점검 사항을 확인하세요."]
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["에이전트를 통해 APM의 다양한 데이터를 수집하도록 구성할 수 있습니다. 에이전트 설정에 대한 자세한 내용은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
            href: "set-agent",
            children: "다음 문서"
          }), "를 참조하세요."]
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 87587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assets: () => (/* binding */ assets),
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28453);
/* harmony import */ var _common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20046);


const frontMatter = {
	id: 'install-agent-nuxtjs',
	title: 'Nuxt.js 환경 설치',
	description: 'Nuxt.js와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.',
	tags: [
		'Node.js',
		'Nuxt.js',
		'에이전트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "nodejs/install-agent-nuxtjs",
  "title": "Nuxt.js 환경 설치",
  "description": "Nuxt.js와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.",
  "source": "@site/docs/nodejs/install-agent-nuxtjs.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/install-agent-nuxtjs",
  "permalink": "/nodejs/install-agent-nuxtjs",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/install-agent-nuxtjs.mdx",
  "tags": [
    {
      "inline": true,
      "label": "Node.js",
      "permalink": "/tags/node-js"
    },
    {
      "inline": true,
      "label": "Nuxt.js",
      "permalink": "/tags/nuxt-js"
    },
    {
      "inline": true,
      "label": "에이전트",
      "permalink": "/tags/에이전트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "install-agent-nuxtjs",
    "title": "Nuxt.js 환경 설치",
    "description": "Nuxt.js와 같은 서버 사이드 렌더링(SSR) 프레임워크에서 Node.js 애플리케이션 모니터링을 위해 Custom Server 설정을 안내합니다.",
    "tags": [
      "Node.js",
      "Nuxt.js",
      "에이전트"
    ]
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "Next.js 환경 설치",
    "permalink": "/nodejs/install-agent-nextjs"
  },
  "next": {
    "title": "설치 점검",
    "permalink": "/nodejs/install-check"
  }
};
const assets = {

};

/*다음 단계*/



const toc = [{
  "value": "에이전트 설치하기",
  "id": "installagent",
  "level": 2
}, {
  "value": "에이전트 파일 구성",
  "id": "agentfiles",
  "level": 2
}, {
  "value": "server/index.js 코드 작성하기",
  "id": "serverindexjs-코드-작성하기",
  "level": 2
}, {
  "value": "Whatap 에이전트 초기화",
  "id": "whatap-에이전트-초기화",
  "level": 3
}, {
  "value": "Nuxt.js 및 기타 필요 모듈 불러오기",
  "id": "nuxtjs-및-기타-필요-모듈-불러오기",
  "level": 3
}, {
  "value": "Nuxt 인스턴스 설정 및 초기화",
  "id": "nuxt-인스턴스-설정-및-초기화",
  "level": 3
}, {
  "value": "Express 서버 설정 및 Nuxt 미들웨어 추가",
  "id": "express-서버-설정-및-nuxt-미들웨어-추가",
  "level": 3
}, {
  "value": "전체 코드 살펴보기",
  "id": "fullcode",
  "level": 3
}, {
  "value": "애플리케이션 실행하기",
  "id": "애플리케이션-실행하기",
  "level": 2
}, ..._common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Filetree, FiletreeItem} = _components;
  if (!Filetree) _missingMdxReference("Filetree", true);
  if (!FiletreeItem) _missingMdxReference("FiletreeItem", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "Nuxt.js"
      }), "와 같은 서버 사이드 렌더링(Server-side Rendering, SSR) 프레임워크에서 애플리케이션 모니터링을 위해 Custom Server 설정이 필요합니다. 일반적인 Node.js 프레임워크(예, Express.js, Nest.js)와는 다른 접근 방식을 요구합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["참고 자료: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
          href: "https://v2.nuxt.com/docs/configuration-glossary/configuration-dev/",
          children: "Nuxt.js Custom Server Configuration"
        })]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "installagent",
        children: "에이전트 설치하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 명령어를 이용해 에이전트를 설치하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"BASH\"",
          children: "npm install whatap\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "agentfiles",
        children: "에이전트 파일 구성"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "에이전트 파일 구성은 다음을 참조하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Filetree, {
        name: "whatap",
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "package.json",
          type: "file",
          children: "샘플 애플리케이션 정보와 의존성(dependency) 관리 문서 파일입니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "whatap.conf",
          type: "file",
          children: "모니터링을 위한 에이전트의 정보 및 액세스 키, 와탭 데이터 수집 서버의 IP 정보 등을 저장하는 설정 파일입니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FiletreeItem, {
          name: "security.conf (or paramkey.txt)",
          type: "file",
          children: "SQL 변수, HTTP 쿼리를 조회하거나 Thread 중지 기능을 이용할 때 입력하는 보안키를 저장합니다."
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FiletreeItem, {
          name: "server.js / index.js",
          type: "file",
          children: ["예시 파일명입니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
            children: "Nuxt.js"
          }), " 앱 인스턴스를 위한 서버 설정 파일입니다."]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "serverindexjs-코드-작성하기",
        children: "server/index.js 코드 작성하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "Nuxt.js"
        }), " 애플리케이션 인스턴스를 위한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "server/index.js"
        }), " 파일을 작성하세요. 이 파일은 프로젝트의 서버(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "server"
        }), ") 폴더 내에 위치해야 합니다."]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "whatap-에이전트-초기화",
        children: "Whatap 에이전트 초기화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server/index.js\"",
          children: "var Whatap = require('whatap').NodeAgent;\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "nuxtjs-및-기타-필요-모듈-불러오기",
        children: "Nuxt.js 및 기타 필요 모듈 불러오기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server/index.js\"",
          children: "const express = require('express');\r\nconst { Nuxt, Builder } = require('nuxt');\r\nconst app = express();\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "nuxt-인스턴스-설정-및-초기화",
        children: "Nuxt 인스턴스 설정 및 초기화"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server/index.js\"",
          children: "const config = require('./nuxt.config.js');\r\nconfig.dev = process.env.NODE_ENV !== 'production';\r\nconst nuxt = new Nuxt(config);\r\n\r\nif (config.dev) {\r\n    new Builder(nuxt).build();\r\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "express-서버-설정-및-nuxt-미들웨어-추가",
        children: "Express 서버 설정 및 Nuxt 미들웨어 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음 코드에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "port"
        }), "에는 서버의 포트 번호를 설정하세요."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server/index.js\"",
          children: "app.use(nuxt.render);\r\n\r\nconst port = 3000;\r\napp.listen(port, () => {\r\n    console.log(`Server listening on http://localhost:${port}`);\r\n});\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "fullcode",
        children: "전체 코드 살펴보기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "완성된 전체 코드를 참조하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-javascript",
          metastring: "title=\"server/index.js\"",
          children: "var Whatap = require('whatap').NodeAgent;\r\n\r\nconst express = require('express');\r\nconst { Nuxt, Builder } = require('nuxt');\r\nconst app = express();\r\n\r\nconst config = require('./nuxt.config.js');\r\nconfig.dev = process.env.NODE_ENV !== 'production';\r\nconst nuxt = new Nuxt(config);\r\n\r\nif (config.dev) {\r\n    new Builder(nuxt).build();\r\n}\r\n\r\napp.use(nuxt.render);\r\n\r\nconst port = 3000;\r\napp.listen(port, () => {\r\n    console.log(`Server listening on http://localhost:${port}`);\r\n});\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "애플리케이션-실행하기",
        children: "애플리케이션 실행하기"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"SH\"",
          children: "node server/index.js\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_apm_install_next_step_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
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