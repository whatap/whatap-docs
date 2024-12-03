"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["55282"], {
"91453": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_release_notes_golang_golang_0_1_14_mdx_8d2_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-release-notes-golang-golang-0-1-14-mdx-8d2.json
var site_docs_release_notes_golang_golang_0_1_14_mdx_8d2_namespaceObject = JSON.parse('{"id":"release-notes/golang/golang-0_1_14","title":"Go Agent v0.1.14","description":"2022년 12월 14일","source":"@site/docs/release-notes/golang/golang-0.1.14.mdx","sourceDirName":"release-notes/golang","slug":"/release-notes/golang/golang-0_1_14","permalink":"/release-notes/golang/golang-0_1_14","draft":false,"unlisted":false,"editUrl":"undefined/docs/release-notes/golang/golang-0.1.14.mdx","tags":[],"version":"current","frontMatter":{"id":"golang-0_1_14","title":"Go Agent v0.1.14","toc_max_heading_level":2,"displayed_sidebar":"releaseSidebar","isTranslationMissing":false},"sidebar":"releaseSidebar"}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./src/components/Highlight.js
var Highlight = __webpack_require__("37016");
// EXTERNAL MODULE: ./src/components/UItext.js
var UItext = __webpack_require__("13348");
;// CONCATENATED MODULE: ./docs/release-notes/golang/golang-0.1.14.mdx


const frontMatter = {
	id: 'golang-0_1_14',
	title: 'Go Agent v0.1.14',
	toc_max_heading_level: 2,
	displayed_sidebar: 'releaseSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "2022년 12월 14일",
  "id": "2022년-12월-14일",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h4",
    children: [(0,jsx_runtime.jsx)(_components.h4, {
      id: "2022년-12월-14일",
      children: "2022년 12월 14일"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "Fixed"
          }), " UDP 서버가 중지된 상태에서 CPU 사용량이 증가하는 현상 수정"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "UDP 서버가 중지된 상태(whatap-agent 서비스가 중지)에서 Go 모니터링을 적용한 애플리케이션의 CPU 부하가 증가합니다. UDP 서버 접속 및 종료 처리가 반복되면서 UDP 연결이 여러 개 유지되어 CPU 사용량이 증가하였습니다."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "New"
          }), " k8s.io/client-go/kubernetes 라이브러리 지원"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/whatap/go-api-example/tree/main/k8s.io/client-go/kubernetes",
            children: "참조 예제"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-go",
            metastring: "title='golang'",
            children: "import (\n  \"k8s.io/client-go/rest\"\n)\n\nfunc main() {\n  // Init whatap trace\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n\n  ...\n\n  config, err := clientcmd.BuildConfigFromFlags(\"\", *kubeconfig)\n  if err != nil {\n    return nil, err\n  }\n\n  // whatap roundTripper 함수를 설정합니다. \n  config.WrapTransport = wRT.WrapRoundTripper()\n\n  clientset, err := kubernetes.NewForConfig(config)\n  if err != nil {\n    return nil, err\n  }\n\n  deploymentsClient := clientset.AppsV1().Deployments(conf.Server.Namespace)\n\n  ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "New"
          }), " github.com/gofiber/fiber/v2 라이브러리 지원"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/whatap/go-api-example/tree/main/github.com/gofiber/fiber",
            children: "참조 예제"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-go",
            metastring: "title='golang'",
            children: "import (\n  \"github.com/whatap/go-api/instrumentation/github.com/gofiber/fiber/v2/whatapfiber\"\n)\n\nfunc main() {\n  // Init whatap trace\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n\n  ...\n\n  r := fiber.New(fiber.Config{\n    StrictRouting: true,\n    Views:         engine,\n  })\n\n  r.Use(recover.New())\n\n  // whatapfiber의 middleware를 등록합니다.\n  r.Use(whatapfiber.Middleware())\n  \n  ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Highlight/* default */.Z, {
            children: "New"
          }), " github.com/valyala/fasthttp 라이브러리 지원"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/whatap/go-api-example/tree/main/github.com/valyala/fasthttp",
            children: "참조 예제"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-go",
            metastring: "title='golang'",
            children: "import (\n  \"github.com/whatap/go-api/instrumentation/github.com/valyala/fasthttp/whatapfasthttp\"\n)\n\nfunc main() {\n  // Init whatap trace\n  config := make(map[string]string)\n  trace.Init(config)\n  defer trace.Shutdown()\n\n  ...\n    \n  r := fiber.New(fiber.Config{\n    StrictRouting: true,\n    Views:         engine,\n  })\n\n  r.Use(recover.New())\n\n  // 래퍼 (Wrapper) 함수 whatapfasthttp.Func을 사용합니다. \n  r.GET(\"/\", whatapfasthttp.Func(func(ctx *fasthttp.RequestCtx) {\n    ...\n  }))\n  r.GET(\"/hello/{name}\", whatapfasthttp.Func(func(ctx *fasthttp.RequestCtx) {\n    fmt.Fprintf(ctx, \"Hello, %s!\\n\", ctx.UserValue(\"name\"))\n    ctx.SetContentType(\"text/html;charset=utf8\")\n  }))\n}\n"
          })
        }), "\n"]
      }), "\n"]
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