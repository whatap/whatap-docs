"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[89297],{

/***/ 40574:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {TabItem, Tabs} = _components;
  if (!TabItem) _missingMdxReference("TabItem", true);
  if (!Tabs) _missingMdxReference("Tabs", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["선택한 프로젝트의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "관리"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
          children: "에이전트 설치"
        })
      }), " 메뉴에서 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 코드"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "수집 서버 IP"
      }), "와 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "프로젝트 액세스 키"
      }), "를 확인합니다."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "operating-systems",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "lx",
        label: "Linux Shell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"SH\"",
            children: "export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\nexport WHATAP_HOST=xxxx.xxxx.xxxx\nexport WHATAP_PCODE=xxx\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "wd",
        label: "Windows Powershell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=\"SH\"",
            children: "$WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\n$WHATAP_HOST=xxxx.xxxx.xxxx\n$WHATAP_PCODE=xxx\n"
          })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 74138:
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





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    pre: "pre",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "다음 예시는 top 명령을 실행하여 특정 프로세스의 CPU, memory 사용량을 계속하여 수집합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\n\nexport PID=수집하기 원하는 프로세스의 PID\ntop -b -p $PID | awk '/'$PID'/{ printf \"{\\\"pid\\\": %s, \\\"cpuPercent\\\": %s, \\\"memoryPercent\\\": %s, \\\"cmd\\\": \\\"%s\\\"}\\n\",$1, $9, $10, $12}; system(\"\")' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
      })
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

/***/ 46068:
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
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28453);
/* harmony import */ var _common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40574);
/* harmony import */ var _common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74138);


const frontMatter = {
	id: 'focus-usage',
	title: '사용 예시',
	description: '와탭 Focus의 사용 예시를 안내합니다.',
	keywords: [
		'Focus',
		'사용 예시'
	],
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "focus/focus-usage",
  "title": "사용 예시",
  "description": "와탭 Focus의 사용 예시를 안내합니다.",
  "source": "@site/docs/focus/focus-usage.mdx",
  "sourceDirName": "focus",
  "slug": "/focus/focus-usage",
  "permalink": "/whatap-docs/focus/focus-usage",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/focus/focus-usage.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "focus-usage",
    "title": "사용 예시",
    "description": "와탭 Focus의 사용 예시를 안내합니다.",
    "keywords": [
      "Focus",
      "사용 예시"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "설정하기",
    "permalink": "/whatap-docs/focus/focus-setting"
  },
  "next": {
    "title": "Telegraf란?",
    "permalink": "/whatap-docs/telegraf/introduction"
  }
};
const assets = {

};





const toc = [{
  "value": "프로젝트 액세스 키 및 수집 서버 IP 확인",
  "id": "프로젝트-액세스-키-및-수집-서버-ip-확인",
  "level": 2
}, ..._common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "필터를 위한 특정 태그 추가",
  "id": "addtagfilter",
  "level": 2
}, {
  "value": "TOP 명령어 pid 별 CPU, Memory 수집",
  "id": "top-명령어-pid-별-cpu-memory-수집",
  "level": 2
}, ..._common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "NETSTAT 활용",
  "id": "netstat-활용",
  "level": 2
}, {
  "value": "VMSTAT 활용",
  "id": "vmstat-활용",
  "level": 2
}, {
  "value": "DU 활용",
  "id": "du-활용",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Focus를 활용해 자주 사용하는 명령 및 기타 활용 사례를 안내합니다. 이를 통해 개발 및 운영 시 확인할 수 있는 데이터를 시계열로 확인할 수 있도록 하여 개발 운영에 도움이 되었으면 합니다."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "프로젝트-액세스-키-및-수집-서버-ip-확인",
        children: "프로젝트 액세스 키 및 수집 서버 IP 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "addtagfilter",
        children: "필터를 위한 특정 태그 추가"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 예시를 참조해 와탭 모니터링 서비스 화면에서 수집된 데이터를 해당 태그의 이름 및 값으로 필터링할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"SH\" showLineNumbers {5,6}",
          children: "# -tag.[사용자 태그 키 이름][공백][사용자태그 값]\n\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tag.CustomTagName CustomTagValue \\\n    -tag.MyServer1 server_01 \\\n    ...\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "top-명령어-pid-별-cpu-memory-수집",
        children: "TOP 명령어 pid 별 CPU, Memory 수집"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "netstat-활용",
        children: "NETSTAT 활용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 예시는 netstat 명령을 실행하여 하여 TCP Connection 상태 별 개수를 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\n\nnetstat -nat| tail -n+3 |  awk '{print $6}' | sort | uniq -c | awk 'BEGIN { printf \"{\" } {if (NR!=1) {printf \", \"}}{printf \"\\\"%s\\\":%s\",$2,$1} END { print \"}\" }' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY -onetime\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "vmstat-활용",
        children: "VMSTAT 활용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 예시는 vmstat 명령을 실행하여 항목별 지수를 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\n\nvmstat -n 5 | awk ' NR>2 {printf \"{ \\\"r\\\":%s,\\\"b\\\":%s, \\\"swpd\\\" :%s, \\\"free\\\" :%s, \\\"buff\\\" :%s, \\\"cache\\\" :%s, \\\"si\\\" :%s, \\\"so\\\":%s, \\\"bi\\\" :%s, \\\"bo\\\" :%s,  \\\"in\\\" :%s,  \\\"cs\\\":%s, \\\"us\\\":%s, \\\"sy\\\":%s, \\\"id\\\":%s, \\\"wa\\\":%s, \\\"st\\\" :%s }\\n\", $1,$2, $3,$4, $5,$6, $7,$8, $9,$10, $11,$12, $13,$14, $15,$16,$17}\\n' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "du-활용",
        children: "DU 활용"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "다음 예시는 du 명령을 실행하여 하여 임의의 디렉터리 용량을 수집합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#매트릭 카테고리\nCATEGORY=\"my_category\"\nTARGET=용량수집을 원하는 디렉터리\n\ndu -sb $TARGET --max-depth=0 | awk 'BEGIN { printf \"{\" } {if (NR!=1) {printf \", \"}}{printf \"\\\"%s\\\":%s\",$2,$1} END { print \"}\" }' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY -onetime\n"
        })
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__/* .useMDXComponents */ .R)(),
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