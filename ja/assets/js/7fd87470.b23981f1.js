"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[18152],{

/***/ 4953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ update_agent_contentTitle),
  "default": () => (/* binding */ update_agent_MDXContent),
  frontMatter: () => (/* binding */ update_agent_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ update_agent_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_download-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "最新バージョンのエージェントをダウンロード",
  "id": "最新バージョンのエージェントをダウンロード",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "最新バージョンのエージェントをダウンロード",
      children: "最新バージョンのエージェントをダウンロード"
    }), (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://service.whatap.io",
            children: "WhaTapモニタリングサービス"
          }), "に移動してログインしてください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "エージェントを更新するプロジェクトを選択してください。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["左側のメニューから", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "management",
            className: "uitext"
          }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "agent_update",
            className: "uitext"
          }), "を選択してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version",
            className: "uitext"
          }), " または、 ", (0,jsx_runtime.jsx)(Cmdname, {
            sid: "latest_version_for_all",
            className: "uitext"
          }), "ボタンをクリックしてください。"]
        }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
          img: "java-update-agent.png",
          desc: "エージェントアップデート"
        }), "\n"]
      }), "\n"]
    }), (0,jsx_runtime.jsx)(_components.p, {
      children: "エージェントをダウンロードして、アプリケーションサーバーを再起動してください。アップデートを自動的に適用します。"
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/java/update-agent.mdx


const update_agent_frontMatter = {
	id: 'update-agent',
	title: 'エージェントのアップデート',
	description: 'Javaエージェントを最新バージョンにアップデートする手順を案内します。最新のエージェントをダウンロードし、アプリケーションサーバーを再起動してアップデートを適用する方法が含まれます。また、安定的なシステム終了のためのアプリ終了、エージェントのJARファイル変更、アプリ開始の順番に従ってアップデートする手順が確認できます。',
	keywords: [
		'Java',
		'エージェント',
		'アップデート'
	],
	isTranslationMissing: false
};
const update_agent_contentTitle = undefined;
const metadata = {
  "id": "java/update-agent",
  "title": "エージェントのアップデート",
  "description": "Javaエージェントを最新バージョンにアップデートする手順を案内します。最新のエージェントをダウンロードし、アプリケーションサーバーを再起動してアップデートを適用する方法が含まれます。また、安定的なシステム終了のためのアプリ終了、エージェントのJARファイル変更、アプリ開始の順番に従ってアップデートする手順が確認できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/java/update-agent.mdx",
  "sourceDirName": "java",
  "slug": "/java/update-agent",
  "permalink": "/ja/java/update-agent",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/java/update-agent.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "update-agent",
    "title": "エージェントのアップデート",
    "description": "Javaエージェントを最新バージョンにアップデートする手順を案内します。最新のエージェントをダウンロードし、アプリケーションサーバーを再起動してアップデートを適用する方法が含まれます。また、安定的なシステム終了のためのアプリ終了、エージェントのJARファイル変更、アプリ開始の順番に従ってアップデートする手順が確認できます。",
    "keywords": [
      "Java",
      "エージェント",
      "アップデート"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "javaSidebar",
  "previous": {
    "title": "非同期追跡",
    "permalink": "/ja/java/async-tracking"
  },
  "next": {
    "title": "エージェントの削除とロールバック",
    "permalink": "/ja/java/uninstall-agent"
  }
};
const assets = {

};




const update_agent_toc = [...toc, {
  "value": "エージェントアップデートの自動設定",
  "id": "エージェントアップデートの自動設定",
  "level": 2
}];
function update_agent_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "エージェントアップデートの自動設定",
        children: "エージェントアップデートの自動設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Javaエージェントをアップデートするには、サーバーを再起動する必要があります。再起動前に", (0,jsx_runtime.jsx)(_components.em, {
          children: "whatap.agent.jar"
        }), "ファイルが変更されると、アプリケーションサーバが再起動する過程で安全なシステム終了(shutdown)が失敗する可能性があります。"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "Javaエージェントを更新するには、次の手順で進める必要があります。"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "app shutdown"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "agent jar変更"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "app start"
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "このプロセスを簡単に処理するために、WhaTapのエージェントjarファイル名にはバージョン番号が含まれています。アップデート中に最新バージョンを自動適用するように設定することが重要です。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          metastring: "{3} showLineNumbers",
          children: "########## WHATAP ############\nWHATAP_HOME=/whatap\nWHATAP_JAR=`ls ${WHATAP_HOME}/whatap.agent-*.jar | sort -V | tail -1`\nJAVA_OPTS=\"${JAVA_OPTS} -javaagent:${WHATAP_JAR} \"\n########## WHATAP ############\n"
        })
      })]
    })]
  });
}
function update_agent_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(update_agent_createMdxContent, {
      ...props
    })
  }) : update_agent_createMdxContent(props);
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