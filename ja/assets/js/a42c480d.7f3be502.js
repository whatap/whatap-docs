"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[41877],{

/***/ 1716:
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
      children: ["選択したプロジェクトの", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "管理"
        })
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "エージェントインストール"
        })
      }), " メニューから", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "プロジェクトコード"
      }), "、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "収集サーバーIP"
      }), "と", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "プロジェクトアクセスキー"
      }), "を確認します。"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tabs, {
      groupId: "operating-systems",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "lx",
        label: "Linux Shell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title=SH",
            children: "export WHATAP_LICENSE=xxxx-xxxxxx-xxxxxx\nexport WHATAP_HOST=xxxx.xxxx.xxxx\nexport WHATAP_PCODE=xxx\n"
          })
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TabItem, {
        value: "wd",
        label: "Windows Powershell",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-bash",
            metastring: "title='SH'",
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

/***/ 87980:
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
      children: "次の例は、topコマンドを実行して、特定のプロセスのCPUとメモリ使用量を継続的に収集します。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
        className: "language-bash",
        metastring: "title='Linux Shell'",
        children: "#メトリクスカテゴリー\nCATEGORY=\"my_category\"\n\nexport PID=収集するプロセスのPID\ntop -b -p $PID | awk '/'$PID'/{ printf \"{\\\"pid\\\": %s, \\\"cpuPercent\\\": %s, \\\"memoryPercent\\\": %s, \\\"cmd\\\": \\\"%s\\\"}\\n\",$1, $9, $10, $12}; system(\"\")' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
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

/***/ 32654:
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
/* harmony import */ var _common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1716);
/* harmony import */ var _common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87980);


const frontMatter = {
	id: 'focus-usage',
	title: '使用例',
	description: 'WhaTap Focusの使用方法の例について案内します。',
	keywords: [
		'Focus',
		'使用例'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "focus/focus-usage",
  "title": "使用例",
  "description": "WhaTap Focusの使用方法の例について案内します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/focus/focus-usage.mdx",
  "sourceDirName": "focus",
  "slug": "/focus/focus-usage",
  "permalink": "/ja/focus/focus-usage",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/focus/focus-usage.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "focus-usage",
    "title": "使用例",
    "description": "WhaTap Focusの使用方法の例について案内します。",
    "keywords": [
      "Focus",
      "使用例"
    ]
  },
  "sidebar": "pluginSidebar",
  "previous": {
    "title": "設定",
    "permalink": "/ja/focus/focus-setting"
  },
  "next": {
    "title": "Telegrafとは",
    "permalink": "/ja/telegraf/introduction"
  }
};
const assets = {

};





const toc = [{
  "value": "プロジェクトアクセスキーと収集サーバーのIP確認",
  "id": "プロジェクトアクセスキーと収集サーバーのip確認",
  "level": 2
}, ..._common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* .toc */ .RM, {
  "value": "フィルターに特定のタグを追加",
  "id": "addtagfilter",
  "level": 2
}, {
  "value": "TOPコマンドのpid別CPU、Memory収集",
  "id": "topコマンドのpid別cpumemory収集",
  "level": 2
}, ..._common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* .toc */ .RM, {
  "value": "NETSTAT活用",
  "id": "netstat活用",
  "level": 2
}, {
  "value": "VMSTAT活用",
  "id": "vmstat活用",
  "level": 2
}, {
  "value": "DU活用",
  "id": "du活用",
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
      children: "Focusを使用して、繫栄に使用されるコマンドやその他の活用例について案内します。これにより、開発や運用時にデータを時系列で確認できるようになり、開発や運用に役立ちます。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "プロジェクトアクセスキーと収集サーバーのip確認",
        children: "プロジェクトアクセスキーと収集サーバーのIP確認"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_check_pak_ip_mdx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "addtagfilter",
        children: "フィルターに特定のタグを追加"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次の例を参照して、WhaTapモニタリングサービス画面で収集されたデータをそのタグの名前と値でフィルタリングできます。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title=\"SH\" showLineNumbers {5,6}",
          children: "# -tag.[ユーザータグのキー名][空白][ユーザータグの値]\n\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -tag.CustomTagName CustomTagValue \\\n    -tag.MyServer1 server_01 \\\n    ...\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "topコマンドのpid別cpumemory収集",
        children: "TOPコマンドのpid別CPU、Memory収集"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common_items_top_collect_cpu_memory_mdx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {})]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "netstat活用",
        children: "NETSTAT活用"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次の例は、netstatコマンドを実行して、TCP Connectionステータス別の番号を収集します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#メトリクスカテゴリ\nCATEGORY=\"my_category\"\n\nnetstat -nat| tail -n+3 |  awk '{print $6}' | sort | uniq -c | awk 'BEGIN { printf \"{\" } {if (NR!=1) {printf \", \"}}{printf \"\\\"%s\\\":%s\",$2,$1} END { print \"}\" }' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY -onetime\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "vmstat活用",
        children: "VMSTAT活用"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次の例は、vmstatコマンドを実行して、項目された指数を収集します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#メトリクスカテゴリ\nCATEGORY=\"my_category\"\n\nvmstat -n 5 | awk ' NR>2 {printf \"{ \\\"r\\\":%s,\\\"b\\\":%s, \\\"swpd\\\" :%s, \\\"free\\\" :%s, \\\"buff\\\" :%s, \\\"cache\\\" :%s, \\\"si\\\" :%s, \\\"so\\\":%s, \\\"bi\\\" :%s, \\\"bo\\\" :%s,  \\\"in\\\" :%s,  \\\"cs\\\":%s, \\\"us\\\":%s, \\\"sy\\\":%s, \\\"id\\\":%s, \\\"wa\\\":%s, \\\"st\\\" :%s }\\n\", $1,$2, $3,$4, $5,$6, $7,$8, $9,$10, $11,$12, $13,$14, $15,$16,$17}\\n' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "du活用",
        children: "DU活用"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次の例は、duコマンドを実行して、任意のディレクトリ容量を収集します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-bash",
          metastring: "title='Linux Shell'",
          children: "#メトリクスカテゴリ\nCATEGORY=\"my_category\"\nTARGET=容量を収集したいディレクトリ\n\ndu -sb $TARGET --max-depth=0 | awk 'BEGIN { printf \"{\" } {if (NR!=1) {printf \", \"}}{printf \"\\\"%s\\\":%s\",$2,$1} END { print \"}\" }' | \\\n./focus -license $WHATAP_LICENSE \\\n    -pcode $WHATAP_PCODE -server.host $WHATAP_HOST \\\n    -category $CATEGORY -onetime\n"
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