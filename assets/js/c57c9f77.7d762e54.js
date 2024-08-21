"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[13878],{

/***/ 48002:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28453);


const frontMatter = {
	id: 'install-agent-with-buildpack',
	title: '빌드팩을 이용한 Java 에이전트 설치',
	description: '빌드팩을 이용해 Java 에이전트를 설치하는 방법을 안내합니다.',
	keywords: [
		'Java',
		'에이전트',
		'프로젝트',
		'애플리케이션'
	],
	displayed_sidebar: 'javaSidebar',
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "java/install-agent-with-buildpack",
  "title": "빌드팩을 이용한 Java 에이전트 설치",
  "description": "빌드팩을 이용해 Java 에이전트를 설치하는 방법을 안내합니다.",
  "source": "@site/docs/java/install-agent-with-buildpack.mdx",
  "sourceDirName": "java",
  "slug": "/java/install-agent-with-buildpack",
  "permalink": "/whatap-docs/java/install-agent-with-buildpack",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/install-agent-with-buildpack.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "install-agent-with-buildpack",
    "title": "빌드팩을 이용한 Java 에이전트 설치",
    "description": "빌드팩을 이용해 Java 에이전트를 설치하는 방법을 안내합니다.",
    "keywords": [
      "Java",
      "에이전트",
      "프로젝트",
      "애플리케이션"
    ],
    "displayed_sidebar": "javaSidebar",
    "isTranslationMissing": false
  },
  "sidebar": "javaSidebar"
};
const assets = {

};



const toc = [{
  "value": "WhaTap buildpack 기본 설정",
  "id": "whatap-buildpack-기본-설정",
  "level": 2
}, {
  "value": "옵션 설정",
  "id": "옵션-설정",
  "level": 2
}, {
  "value": "Tomcat 10 환경",
  "id": "tomcat-10-환경",
  "level": 2
}, {
  "value": "Container 실행 옵션",
  "id": "container-실행-옵션",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Gradle을 사용하는 Java 애플리케이션으로 실행 가능한 도커 이미지를 빌드하는 경우 빌드팩을 이용하여 에이전트 설치할 수 있습니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "whatap-buildpack-기본-설정",
        children: "WhaTap buildpack 기본 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='build.gradle'",
          children: "tasks.named(\"bootBuildImage\") {\n\tbuildpacks = [\"urn:cnb:builder:paketo-buildpacks/java\",\t\n\t\t\t\t\t\t\t\t\"docker.io/whatap/paketo-buildpack-apm\"]\n}\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "옵션-설정",
        children: "옵션 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["와탭 수집 서버에 연결되어야 데이터를 수집할 수 있습니다. 액세스키(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "accesskey"
        }), "), 와탭 수집 서버 주소(", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "whatap.server.host"
        }), ") 정보는 필수입니다. 그 외에 환경 및 기능의 필요에 따라 옵션을 추가 설정할 수 있습니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='build.gradle'",
          children: "tasks.named(\"bootBuildImage\") {\n  // Whatap \n  environment[\"BP_WHATAP_ENABLED\"] = \"true\"\n  // java 17, There must be a space at the beginning.\n  environment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \" --add-opens=java.base/java.lang=ALL-UNNAMED \"\n  // add multi options, delimeter is linefeed character\n  environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey=aaa-bbb-ccc\\nwhatap.server.host=1.1.1.1/2.2.2.2\"\n\n  buildpacks = [\"urn:cnb:builder:paketo-buildpacks/java\",\t\"docker.io/whatap/paketo-buildpack-apm\"]\n}\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BP_WHATAP_ENABLED"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["와탭 에이전트 활성화 여부를 설정합니다. 값이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "false"
            }), "라면 설치는 진행되지만, 모니터링이 중지된 상태로 시작합니다. 추후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "와탭 모니터링 서비스"
            }), "에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "관리"
              })
            }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "에이전트 설정"
              })
            }), " 메뉴를 통해서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "true"
            }), "로 변경할 수 있습니다."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BPE_APPEND_JAVA_TOOL_OPTIONS"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Java 17 버전 이상을 사용하는 경우 필수로 jvm 옵션을 추가하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BPE_DELIM_JAVA_TOOL_OPTIONS\"] = \" \"\nenvironment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \"--add-opens=java.base/java.lang=ALL-UNNAMED\"\n"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "delimeter 환경 변수를 사용하지 않는다면 앞뒤로 공백을 추가하세요."
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BPE_APPEND_JAVA_TOOL_OPTIONS\"] = \" --add-opens=java.base/java.lang=ALL-UNNAMED \"\n"
            })
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "BP_WHATAP_OPTIONS"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["와탭 에이전트 설정을 추가할 수 있습니다. 라인피드 \"\\n\" 을 구분자로 옵션을 설정합니다. 옵션은 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "key=value"
            }), "입니다. 설정한 옵션 값은 Docker Image 생성 단계에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "whatap.conf"
            }), " 파일에 저장됩니다."]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              className: "language-java",
              children: "environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey={액세스 키}\\nwhatap.server.host={수집 서버 주소}\"\n// 예시: environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey=aaa-bbb-ccc\\nwhatap.server.host=1.1.1.1/2.2.2.2\"\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "tomcat-10-환경",
        children: "Tomcat 10 환경"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["Tomcat 환경에서는 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          children: "weaving=tomcat10"
        }), " 옵션을 필수로 추가해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-java",
          children: "environment[\"BP_WHATAP_OPTIONS\"] = \"accesskey={액세스 키}\\nwhatap.server.host={수집 서버 주소}\\nweaving=tomcat10\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "container-실행-옵션",
        children: "Container 실행 옵션"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "컨테이너(Container) 실행 시 환경 변수로 액세스 키와 와탭 수집 서버 주소를 다음과 같이 설정할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-docker",
          children: "docker run --rm -p 8080:8080 \\\n  -e accesskey={액세스 키} \\\n  -e whatap.server.host={수집 서버 주소} \\\n  -e weaving=tomcat10,webflux-6.0 \\\n  spring-boot-gradle-hello-world-pcketo-buildpack-whatap\n"
        })
      })]
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