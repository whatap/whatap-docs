"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[5518],{

/***/ 68815:
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
	id: 'weblogic',
	title: 'WebLogic',
	description: '와탭 모니터링 솔루션을 웹로직(WebLogic) 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 웹로직(WebLogic) 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 웹로직(WebLogic)과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.',
	tags: [
		'Java',
		'WebLogic',
		'애플리케이션',
		'에이전트'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "java/add-jvm-opt/weblogic",
  "title": "WebLogic",
  "description": "와탭 모니터링 솔루션을 웹로직(WebLogic) 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 웹로직(WebLogic) 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 웹로직(WebLogic)과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.",
  "source": "@site/docs/java/add-jvm-opt/weblogic.mdx",
  "sourceDirName": "java/add-jvm-opt",
  "slug": "/java/add-jvm-opt/weblogic",
  "permalink": "/whatap-docs/java/add-jvm-opt/weblogic",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/add-jvm-opt/weblogic.mdx",
  "tags": [
    {
      "label": "Java",
      "permalink": "/whatap-docs/tags/java"
    },
    {
      "label": "WebLogic",
      "permalink": "/whatap-docs/tags/web-logic"
    },
    {
      "label": "애플리케이션",
      "permalink": "/whatap-docs/tags/애플리케이션"
    },
    {
      "label": "에이전트",
      "permalink": "/whatap-docs/tags/에이전트"
    }
  ],
  "version": "current",
  "frontMatter": {
    "id": "weblogic",
    "title": "WebLogic",
    "description": "와탭 모니터링 솔루션을 웹로직(WebLogic) 애플리케이션에 통합하기 위한 JVM(Java Virtual Machine) 옵션 추가 방법에 대한 상세한 안내를 제공합니다. 사용자는 본 문서를 통해 자바(Java) 에이전트 설치 후 웹로직(WebLogic) 애플리케이션의 성능 및 가용성 모니터링을 위해 필요한 JVM 설정을 적용하는 방법을 단계별로 확인할 수 있습니다. 에이전트 설치 과정 중 필수 JVM 옵션의 구성과 웹로직(WebLogic)과의 원활한 통합을 위한 최적의 설정 방법, 힙스토그램 조회 방법을 포함하고 있습니다.",
    "tags": [
      "Java",
      "WebLogic",
      "애플리케이션",
      "에이전트"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "JEUS",
    "permalink": "/whatap-docs/java/add-jvm-opt/jeus"
  },
  "next": {
    "title": "WebSphere",
    "permalink": "/whatap-docs/java/add-jvm-opt/websphere"
  }
};
const assets = {

};



const toc = [{
  "value": "JVM 옵션 추가",
  "id": "jvm-옵션-추가",
  "level": 2
}, {
  "value": "힙 히스토그램 조회",
  "id": "힙-히스토그램-조회",
  "level": 2
}, {
  "value": "모니터링 시작하기",
  "id": "모니터링-시작하기",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, TabItem, Tabs} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "jvm-옵션-추가",
      children: "JVM 옵션 추가"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "WebLogic 애플리케이션 서버 환경에서 Java 모니터링 에이전트를 효과적으로 사용하기 위해 필요한 JVM 옵션을 추가하는 방법을 안내합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "사용하는 운영체제를 확인 후 설정을 완료하세요."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "linux",
        label: "Linux",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.sh\"",
            children: "########## WHATAP START ############\nWHATAP_HOME=/path/to/whatap\nWHATAP_JAR=`ls ${WHATAP_HOME}/whatap.agent-*.jar | sort -V | tail -1`\nJAVA_OPTIONS=\"${JAVA_OPTIONS} -javaagent:${WHATAP_JAR} \"\n########## WHATAP END ############\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "windows",
        label: "Windows",
        default: true,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-batch",
            metastring: "title=\"{WebLogic_Path}/user_projects/domains/{User_Domain}/bin/startWebLogic.bat\"",
            children: "rem ########## WHATAP START ############\nset WHATAP_HOME=\\path\\to\\whatap\nfor /f %%f in ('dir /b /on \"%WHATAP_HOME%\\whatap.agent-*.jar\"') do set last=%%f\nset WHATAP_JAR=%last%\nset WHATAP_OPTS=-javaagent:%WHATAP_HOME%\\%WHATAP_JAR%\nif \"x%JAVA_OPTIONS%\"==\"x\" goto setWhatap\nset JAVA_OPTIONS_TMP=%JAVA_OPTIONS:\"=%\nif not \"x%JAVA_OPTIONS_TMP:whatap=%\"==\"x%JAVA_OPTIONS_TMP%\" goto endWhatap\n:setWhatap\nset JAVA_OPTIONS=%JAVA_OPTIONS% %WHATAP_OPTS%\n:endWhatap\nrem ########## WHATAP END ############\n"
          })
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Java 17 버전 이상의 경우 reflection 관련한 다음 옵션을 추가하세요."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          children: "\n--add-opens=java.base/java.lang=ALL-UNNAMED\n\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "힙-히스토그램-조회",
      children: "힙 히스토그램 조회"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭의 Java 모니터링에서는 JVM 메모리에 올라가 있는 Heap 점유 객체 현황(힙 메모리상의 객체별 사이즈)을 조회할 수 있는 기능을 기본으로 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "app_upper",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "instance_performance_analysis",
        className: "uitext"
      }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "heap_histogram",
        className: "uitext"
      }), " 탭을 선택하세요."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Java 6 ~ 8 버전에서는 JVM 옵션 없이 기본 지원하지만, 일부 Java 버전에 따라 다음과 같이 JVM 옵션을 적용해야 합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Java 9 ~ Java 15 버전"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "-Djdk.attach.allowAttachSelf=true\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"example\"",
            children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true -jar {application.jar}\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "Java 16 버전 이상"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            children: "-Djdk.attach.allowAttachSelf=true\n--add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"example\"",
            children: "java -javaagent:{WHATAP_HOME}/whatap.agent-X.Y.Z.jar -Djdk.attach.allowAttachSelf=true --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=jdk.attach/sun.tools.attach=ALL-UNNAMED -jar {application.jar}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
      type: "note",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Java 5 버전 이하, IBM Java는 지원하지 않습니다."
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "모니터링-시작하기",
      children: "모니터링 시작하기"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["모든 설정을 완료한 다음 애플리케이션 서버를 다시 시작하면 에이전트가 정보를 수집하기 시작합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
        href: "/java/install-check",
        children: "다음 문서"
      }), "를 확인하세요."]
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