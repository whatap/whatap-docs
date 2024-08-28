"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[34014],{

/***/ 18530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ control_function_contentTitle),
  "default": () => (/* binding */ control_function_MDXContent),
  frontMatter: () => (/* binding */ control_function_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ control_function_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/common-items/_nodejs-control-function.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.ul, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "whatap.enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["機能のすべてを有効にします。ただし、", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "である場合、サーバーと最小限に通信を維持するために情報は送信されます。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "transaction_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["トランザクション追跡機能を有効にします。", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), "オプションの値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "の場合は無効になります。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "counter_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["パフォーマンス カウンター(トランザクション、リソースなど) 追跡を有効にします。", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), "オプションの値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "の場合は無視してください。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "stat_enabled"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "Boolean"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["統計情報の追跡機能を活性化します。5分単位で収集するトランザクション、SQL、HTTPCALL、UserAgent、Client IPなどの統計データなどが該当します。", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap.enabled"
        }), "オプションの値が", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        }), "なら無視します。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "license"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "エージェントのインストール時にサーバーから付与されたアクセスキーを入力します。 アクセスキーは、エージェントが属するプロジェクトとセキュリティ通信のためのパスワードキーが含まれます。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "encrypt_level"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "encrypt_level [1, 2, 3]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "WhaTapエージェントは、サーバーにデータを送信する際、データ属性に基づいて選択的に暗号化します。高いセキュリティを維持しながらも、パフォーマンス上の利点を持っています。データ タイプに関係なく、一括した暗号化ポリシーを適用するには、次のオプションを参照してください。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "1"
          }), "：暗号化送信機能を無効"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "2"
          }), "：SQLパラメータ、Plain Textなどの機密属性の暗号化された転送"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "3"
          }), "：すべての項目の暗号化送信"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "realtime_user_thinktime_max"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "リアルタイムにブラウザのユーザー数を測定する場合、同じユーザーとして認識される呼び出し間隔の最大値を設定します。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "time_sync_interval_ms"
        }), " ", (0,jsx_runtime.jsx)("span", {
          class: "type",
          children: "MiliSeconds"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
          children: "300000"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["エージェントとサーバー間で同期化する時間の間隔を設定します。同期しない場合は、", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), "に設定します。"]
      }), "\n"]
    }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/nodejs/control-function.mdx


const control_function_frontMatter = {
	id: 'agent-control-function',
	title: 'エージェント機能の制御',
	description: 'Node.jsアプリケーションサーバーの機能を制御できます。',
	keywords: [
		'Node.js'
	],
	isTranslationMissing: false
};
const control_function_contentTitle = undefined;
const metadata = {
  "id": "nodejs/agent-control-function",
  "title": "エージェント機能の制御",
  "description": "Node.jsアプリケーションサーバーの機能を制御できます。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/nodejs/control-function.mdx",
  "sourceDirName": "nodejs",
  "slug": "/nodejs/agent-control-function",
  "permalink": "/ja/nodejs/agent-control-function",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/nodejs/control-function.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "agent-control-function",
    "title": "エージェント機能の制御",
    "description": "Node.jsアプリケーションサーバーの機能を制御できます。",
    "keywords": [
      "Node.js"
    ],
    "isTranslationMissing": false
  },
  "sidebar": "nodejsSidebar",
  "previous": {
    "title": "エージェント名の識別",
    "permalink": "/ja/nodejs/agent-name"
  },
  "next": {
    "title": "エージェントの通信設定",
    "permalink": "/ja/nodejs/agent-network"
  }
};
const assets = {

};




const control_function_toc = [...toc];
function control_function_createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "Node.jsアプリケーションサーバーの機能を制御できます。"
    }), "\n", "\n", (0,jsx_runtime.jsx)(MDXContent, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_build_file_enabled"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "Boolean"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), "ビルドファイルに対するモニタリング可否を設定します。このオプション値を", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "に設定すると、", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), "ビルドファイルをモニタリングしません。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ignore_build_file_path"
          }), " ", (0,jsx_runtime.jsx)("span", {
            class: "type",
            children: "String"
          }), " ", (0,jsx_runtime.jsx)("code", {
            class: "my",
            children: "Node.js Agent v0.4.96 or later"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["既定値", (0,jsx_runtime.jsx)(_components.code, {
            children: "/next/"
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["モニタリングで除外する", (0,jsx_runtime.jsx)(_components.em, {
            children: "Next.js"
          }), "ビルドファイルの開始パスを指定できます。", (0,jsx_runtime.jsx)(_components.code, {
            children: "ignore_build_file_enabled"
          }), "値が", (0,jsx_runtime.jsx)(_components.code, {
            children: "true"
          }), "の場合に適用されます。コンマ(,)を区切り文字として複数のパスを設定できます。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            metastring: "title=\"whatap.conf\"",
            children: "ignore_build_file_path=/next/abc/,/next/def/\n"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function control_function_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(control_function_createMdxContent, {
      ...props
    })
  }) : control_function_createMdxContent(props);
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