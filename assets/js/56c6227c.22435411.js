"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["58978"], {
"21071": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return MDXContent; },
  d$: function() { return toc; }
});
/* ESM import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* ESM import */var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50065);


const frontMatter = (/* unused pure expression or super */ null && ({}));
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    p: "p",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */.a)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
    type: "caution",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["OpenTelemetry 모니터링은 베타 버전으로 예기치 않은 오류가 발생할 수 있습니다. 중요한 데이터나 운영 환경에서는 사용하는 것을 권장하지 않습니다. 피드백이나 문제점이 발생하면 지원 팀(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "mailto:support@whatap.io",
        children: "support@whatap.io"
      }), ")으로 문의하세요."]
    })
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
"549": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_opentelemetry_introduction_mdx_56c_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-opentelemetry-introduction-mdx-56c.json
var site_docs_opentelemetry_introduction_mdx_56c_namespaceObject = JSON.parse('{"id":"opentelemetry/introduction","title":"OpenTelemetry","description":"OpenTelemetry Collector의 수집 정보를 와탭 모니터링 서비스에서 확인할 수 있는 방법을 안내합니다.","source":"@site/docs/opentelemetry/introduction.mdx","sourceDirName":"opentelemetry","slug":"/opentelemetry/introduction","permalink":"/opentelemetry/introduction","draft":false,"unlisted":false,"editUrl":"undefined/docs/opentelemetry/introduction.mdx","tags":[],"version":"current","frontMatter":{"id":"introduction","title":"OpenTelemetry","description":"OpenTelemetry Collector의 수집 정보를 와탭 모니터링 서비스에서 확인할 수 있는 방법을 안내합니다.","isTranslationMissing":false},"sidebar":"otelSidebar","next":{"title":"에이전트 설치","permalink":"/opentelemetry/install-agent"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./docs/opentelemetry/_otl-beta-notice.mdx
var _otl_beta_notice = __webpack_require__("21071");
;// CONCATENATED MODULE: ./docs/opentelemetry/introduction.mdx


const frontMatter = {
	id: 'introduction',
	title: 'OpenTelemetry',
	description: 'OpenTelemetry Collector의 수집 정보를 와탭 모니터링 서비스에서 확인할 수 있는 방법을 안내합니다.',
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};




const toc = [..._otl_beta_notice/* toc */.d$, {
  "value": "OpenTelemetry 통해 와탭 모니터링 사용하기",
  "id": "opentelemetry-통해-와탭-모니터링-사용하기",
  "level": 2
}, {
  "value": "OpenTelemetry 에이전트",
  "id": "opentelemetry-에이전트",
  "level": 2
}, {
  "value": "지원 환경",
  "id": "지원-환경",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {Head} = _components;
  if (!Head) _missingMdxReference("Head", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(Head, {
      children: (0,jsx_runtime.jsx)("meta", {
        name: "robots",
        content: "noindex, nofollow"
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(_otl_beta_notice/* default */.ZP, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "이 문서는 와탭 모니터링 서비스의 애플리케이션 상품을 이용하면서 OpenTelemetry를 통해 데이터를 추가 수집하려는 사용자를 위한 문서입니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "opentelemetry-통해-와탭-모니터링-사용하기",
        children: "OpenTelemetry 통해 와탭 모니터링 사용하기"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "https://opentelemetry.io/",
          children: "OpenTelemetry"
        }), "는 원격 측정 데이터(메트릭, 로그 및 추적)를 계측 및 생성, 수집, 내보내기 위한 오픈 소스 옵저버빌리티(Observability) 프레임워크입니다. OpenTelemetry를 통해 수집한 측정 데이터를 와탭 모니터링 플랫폼으로 전송해 애플리케이션이나 서비스의 성능과 동작을 분석하고, 문제를 해결할 수 있습니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "만약 운영 중인 애플리케이션 또는 서비스가 OpenTelemetry 라이브러리로 수집되는 경우라면 추적 및 지표, 로그 데이터를 와탭 모니터링 플랫폼으로 가져오는 방법을 선택할 수 있습니다. 와탭 모니터링 플랫폼의 대시보드 및 분석 메뉴를 활용해 가시성 높은 옵저버빌리티 모니터링을 제공합니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "opentelemetry-에이전트",
        children: "OpenTelemetry 에이전트"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "OpenTelemetry 에이전트는 OpenTelemetry Collector의 OTLP Exporter를 통해 수집된 데이터를 와탭 모니터링 플랫폼으로 가공 및 전달하는 에이전트입니다."
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "WhaTap OTel Agent",
          src: (__webpack_require__(3999)/* ["default"] */.Z) + "",
          width: "1200",
          height: "604"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "에이전트 설치 및 실행을 위한 과정은 다음을 참조하세요."
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["OpenTelemetry Collector가 설치된 인스턴스에 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "install-agent",
              children: "와탭 에이전트를 설치하고 실행하세요"
            }), "."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "실행된 whatap-otel 서비스는 OTLP Exporter를 위한 Grpc 서버를 실행합니다."
          }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "리스닝 포트는 기본 6600 포트입니다"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["OpenTelemetry Collector의 기본 설정과 동일하게 gzip 압축 설정은 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "True"
                }), " 입니다."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "지원-환경",
        children: "지원 환경"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "OpenTelemetry 에이전트를 설치할 수 있는 운영체제는 다음과 같습니다."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "CentOS/Red Hat 6.x 버전(64bit) 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Debian/Ubuntu 12.04 버전(64bit) 이상"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Amazon linux (64bit)"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Alpine linux (64bit)"
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
"3999": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/opentelemetry-overview-a79dae880d760f33bbf4e90ff0d6f7c1.png");

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