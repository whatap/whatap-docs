"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[90653],{

/***/ 19318:
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



/*@since v1.6.2*/


const toc = [{
  "value": "Background Threadのアクティブスタック",
  "id": "background-threadのアクティブスタック",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
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
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
      id: "background-threadのアクティブスタック",
      children: "Background Threadのアクティブスタック"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["基本的に", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "アクティブスタック"
      }), "は、トランザクションが実行されているスレッドのスタックを意味します。ただし、一部のバックグラウンドスレッドのスタックも分析が必要な場合があります。この場合、オプションを通じてバックグラウンドスレッドに対する", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "アクティブスタック"
      }), "が取得できます。この機能はJavaエージェント1.6.2バージョン以降からサポートします。"]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "async_stack_enabled"
          }), "の値を", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "true"
          }), "に設定すると活性化されます。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_stack_enabled=false\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "スタックダンプの間隔は、フォアグラウンドアクティブスタックの設定に準じます。"
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_second=10\n"
          })
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["対象スレッド名を指定する場合は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "*"
          }), "を使用して文字列パターンを指定します。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_thread_match=http*,abc*\n"
          })
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
          children: "スレッド名でスタックダンプの対象を識別します。コンマ(,)を区切り文字として使用してmatchを複数指定できます。"
        }), "\n"]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["スタックの上位メソッドが", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "async_thread_parking"
          }), "に登録されたクラスまたはメソッドの場合、スレッドがパーキング状態にあると判断してダンプを生成しません。"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "async_thread_parking_class=sun.misc.Unsafe\nasync_thread_parking_method=park\n"
          })
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

/***/ 33483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ active_transactions_contentTitle),
  "default": () => (/* binding */ active_transactions_MDXContent),
  frontMatter: () => (/* binding */ active_transactions_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ active_transactions_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_compact-active-stacks.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "コンパクトなアクティブスタックの収集",
  "id": "コンパクトなアクティブスタックの収集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, InDoc} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!InDoc) _missingMdxReference("InDoc", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "コンパクトなアクティブスタックの収集",
      children: "コンパクトなアクティブスタックの収集"
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "アクティブスタックはスレッドダンプを定期的に実行するため、誤った実装をするとエージェントのオーバーヘッドが増加する可能性があります。WhaTapはエージェント負荷を最小限に抑えながらアクティブスタックを収集するために、様々なオプションがあります。"
    }), (0,jsx_runtime.jsx)(_components.admonition, {
      type: "tip",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_agentsConfiguration",
          className: "uitext"
        }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_threadList",
          className: "uitext"
        }), "メニューのスレッドリストで", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WhaTap-ActiveStackDump"
        }), "スレッドの", (0,jsx_runtime.jsx)(Cmdname, {
          sid: "cpu_time",
          className: "uitext"
        }), "を確認し、オーバーヘッドを判断できます。"]
      })
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "アクティブスタックの例"
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "java,python",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-java",
          metastring: "title='JAVA'",
          children: "java.lang.StringBuffer.append(StringBuffer.java:309)\njava.util.regex.Matcher.appendReplacement(Matcher.java:839)\njava.util.regex.Matcher.replaceAll(Matcher.java:906)\njava.lang.String.replaceAll(String.java:2162)\ncore.log.triggers.TriggerRegister.changeNotify(TriggerRegister.java:114)\ncore.log.aop.handler.DaoInfo.log(DaoInfo.java:141)\ncore.log.aop.handler.DaoInfo.doAround(DaoInfo.java:102)\ncore.log.aop.reflection.profiler.AroundProfiler.invoke(AroundProfiler.java:19)\ncom.sun.proxy.$Proxy39.getUpdateCount(Unknown Source)\norg.apache.ibatis.executor.resultset.DefaultResultSetHandler.getNextResultSet(DefaultResultSetHandler.java:256)\norg.apache.ibatis.executor.resultset.DefaultResultSetHandler.handleResultSets(DefaultResultSetHandler.java:193)\norg.apache.ibatis.executor.statement.PreparedStatementHandler.query(PreparedStatementHandler.java:64)\n\n* * *\n\nsun.reflect.GeneratedMethodAccessor140.invoke(Unknown Source)\nsun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\njava.lang.reflect.Method.invoke(Method.java:606)\norg.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:221)\norg.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:136)\norg.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:114)\norg.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:827)\n"
        })
      })
    }), (0,jsx_runtime.jsx)(InDoc, {
      product: "dotnet",
      children: (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-csharp",
          metastring: "title='.NET'",
          children: "DomainNeutralILStubClass.IL_STUB_ReversePInvoke(Int64,Int64,Int64,Int32)\nSystem.Web.Hosting.PipelineRuntime.ProcessRequestNotification(IntPtr,IntPtr,IntPtr,Int32)\nSystem.Web.Hosting.PipelineRuntime.ProcessRequestNotificationHelper(IntPtr,IntPtr,IntPtr,Int32)\nDomainNeutralILStubClass.IL_STUB_PInvoke(IntPtr,System.Web.RequestNotificationStatus ByRef)\nSystem.Threading.ThreadHelper.ThreadStart()\nSystem.Threading.ExecutionContext.Run(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object)\nSystem.Threading.ExecutionContext.Run(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object,Boolean)\nSystem.Threading.ExecutionContext.RunInternal(System.Threading.ExecutionContext,System.Threading.ContextCallback,System.Object,Boolean)\nSystem.Net.TimerThread.ThreadProc()\nSystem.Threading.WaitHandle.WaitAny(System.Threading.WaitHandle[],Int32,Boolean)\nSystem.Threading.Thread.Sleep(Int32)\n"
        })
      })
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "最適化されたデータ収集"
      })
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "トランザクションを実行しているスレッドに対して、スタックをダンプします。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アクティブスタックダンプの時間間隔を調整できます。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_second=10\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アクティブスタックの最大行に制限されます。トップラインから基本の50行を収集します。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "trace_active_callstack_depth=50\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "アクティブスタックの各行をハッシュ処理して収集します。テキストは１度だけ収集します。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "一度に収集される最大のアクティブスタックの数も制限されます。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "active_stack_count=100\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
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


// EXTERNAL MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_background-thread.mdx
var _background_thread = __webpack_require__(19318);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_active-transaction.mdx


const _active_transaction_frontMatter = {};
const _active_transaction_contentTitle = (/* unused pure expression or super */ null && (undefined));







const _active_transaction_toc = [...toc, ..._background_thread/* toc */.RM, {
  "value": "参考資料",
  "id": "参考資料",
  "level": 2
}];
function _active_transaction_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["進行中のトランザクションをアクティブトランザクションと呼びます。", (0,jsx_runtime.jsx)(_components.strong, {
        children: "アクティブトランザクションで定期的にダンプされるスタックはアクティブスタック"
      }), "と呼ばれます。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.admonition, {
      type: "note",
      children: (0,jsx_runtime.jsxs)(_components.p, {
        children: ["WhaTapエージェントは、10秒(オプションで調整可能)ごとにアクティブトランザクションに対して、アクティブスタックをダンプし、サーバーに送信します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "active_stack_second=10"
        })]
      })
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", "\n", (0,jsx_runtime.jsx)(_background_thread/* default */.Ay, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "参考資料",
        children: "参考資料"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/152",
            children: "アクティブトランザクション"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://brunch.co.kr/@leedongins/31",
            children: "トラブルを最も早く特定するアクティブトランザクション"
          })
        }), "\n"]
      })]
    })]
  });
}
function _active_transaction_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_active_transaction_createMdxContent, {
      ...props
    })
  }) : _active_transaction_createMdxContent(props);
}


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/java/active-transactions.mdx


const active_transactions_frontMatter = {
	id: 'active-transactions',
	title: 'アクティブトランザクション',
	description: 'アクティブトランザクションを説明します。',
	keywords: [
		'Java',
		'トランザクション',
		'アクティブトランザクション',
		'UI',
		'アプリケーション',
		'アプリケーションモニタリング'
	]
};
const active_transactions_contentTitle = undefined;
const metadata = {
  "id": "java/active-transactions",
  "title": "アクティブトランザクション",
  "description": "アクティブトランザクションを説明します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/active-transactions.mdx",
  "sourceDirName": "java",
  "slug": "/java/active-transactions",
  "permalink": "/ja/java/active-transactions",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/active-transactions.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "active-transactions",
    "title": "アクティブトランザクション",
    "description": "アクティブトランザクションを説明します。",
    "keywords": [
      "Java",
      "トランザクション",
      "アクティブトランザクション",
      "UI",
      "アプリケーション",
      "アプリケーションモニタリング"
    ]
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "トランザクショントレーシング",
    "permalink": "/ja/java/trs-profile"
  },
  "next": {
    "title": "マルチトランザクション",
    "permalink": "/ja/java/trs-multi-trace"
  }
};
const assets = {

};




const active_transactions_toc = [..._active_transaction_toc];
function active_transactions_createMdxContent(props) {
  return (0,jsx_runtime.jsx)(_active_transaction_MDXContent, {});
}
function active_transactions_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(active_transactions_createMdxContent, {
      ...props
    })
  }) : active_transactions_createMdxContent(props);
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