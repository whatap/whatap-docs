"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[32793],{

/***/ 21386:
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
	id: 'introduction',
	title: 'Kubernetesモニタリング',
	description: 'マルチクラウドやハイブリッドクラウドをサポートし、Kubernetesのシステムの統合合モニタリングを提供します。',
	keywords: [
		'Kubernetesモニタリング',
		'Kubernetes'
	]
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/introduction",
  "title": "Kubernetesモニタリング",
  "description": "マルチクラウドやハイブリッドクラウドをサポートし、Kubernetesのシステムの統合合モニタリングを提供します。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/introduction.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/introduction",
  "permalink": "/ja/kubernetes/introduction",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/introduction.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "introduction",
    "title": "Kubernetesモニタリング",
    "description": "マルチクラウドやハイブリッドクラウドをサポートし、Kubernetesのシステムの統合合モニタリングを提供します。",
    "keywords": [
      "Kubernetesモニタリング",
      "Kubernetes"
    ]
  },
  "sidebar": "kubeSidebar",
  "next": {
    "title": "プロジェクトの概念を理解する",
    "permalink": "/ja/kubernetes/before-starting"
  }
};
const assets = {

};



const toc = [{
  "value": "Kubernetesモニタリングとは？",
  "id": "kubernetesモニタリングとは",
  "level": 2
}, {
  "value": "Kubernetesモニタリングの主な特長",
  "id": "kubernetesモニタリングの主な特長",
  "level": 2
}, {
  "value": "モニタリング対象",
  "id": "モニタリング対象",
  "level": 2
}, {
  "value": "モニタリング手順",
  "id": "モニタリング手順",
  "level": 2
}, {
  "value": "Kubernetesクラスターモニタリング手順",
  "id": "kubernetesクラスターモニタリング手順",
  "level": 3
}, {
  "value": "Kubernetesのアプリケーションモニタリング手順",
  "id": "kubernetesのアプリケーションモニタリング手順",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Videos} = _components;
  if (!Videos) _missingMdxReference("Videos", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "コンテナ仮想化技術は、Dockerの出現により大きく普及しました。そして、Dockerの利用が増えるにつれて、コンテナを上手く使いこなす方法や管理が必要になり、様々なコンテナオーケストレーションツールが登場しました。多くのコンテナオーケストレーションツールの中で、最も広く使用されているのは、Kubernetesです。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "Kubernetesは、コンピューティングリソースを効率的に使用するためのスケジューリング機能、アプリケーションアップデートのためのデプロイ機能、その他コンテナに必要なストレージ、ネットワークなど、様々な機能を提供します。それ自体が巨大なプラットフォームであるKubernetesも、モニタリングは欠かせません。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "ただし、Kubernetesのリソースが異なれば、必要なデータ収集方法も異なります。また、Kubernetesユーザーが異なれば、関心のある指標も異なります。さらに、単にデータを収集して一覧するだけでは、モニタリングの可視性は確保できません。様々なモニタリングニーズを満たし、問題の状況を直感的に検出できるUIが必要です。多くのユーザーが、WhaTapのKubernetesモニタリングソリューションを求める理由でもあります。"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Videos, {
      url: "https://img.whatap.io/23/11/06/022318en_kubernetes_.mp4"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kubernetesモニタリングとは",
        children: "Kubernetesモニタリングとは？"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "コンテナ環境のアプリケーションはコンテナ化(Containerization)されます。また、Kubernetesは、コンテナ化されたアプリケーションをPodという単位でデプロイします。Kubernetesの最小デプロイ単位はコンテナではなくPodです。コンテナはPodに含まれており、1つのPodに異なる2つ以上のコンテナを含めることができます。そのため、Kubernetesモニタリングは、コンテナとPodの両方のモニタリングが必要です。WhaTapは、コンテナやPodから様々なモニタリングデータを収集し、別々のカテゴリに保存します。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "カテゴリは、ユーザープロジェクトから収集するメトリクス(Metrics) データを区別する名前です。各カテゴリは、異なるタグとフィールドで構成されています。WhaTap Kubernetesのコンテナマップは、大きなコンテナビューとPodビューを提供し、ユーザーは、分析対象を選択することができます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "kubernetesモニタリングの主な特長",
        children: "Kubernetesモニタリングの主な特長"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Kubernetesベースの統合モニタリング"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "マルチクラウドやハイブリッドクラウドをサポートし、Kubernetesのシステムの統合合モニタリングを提供します。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "MSAにおけるサービスごとの呼び出し関係を分析"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Pod単位の分散アプリケーション環境では、トランザクションのAPI呼び出し関係を追跡します。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "相関関係を一目で把握"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Host、コンテナ、アプリケーションを一緒にモニタリングして「Root Cause Analysis」を解決することができます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "コンテナ化されたアプリケーションの詳細な分析"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "コンテナに隠された、Java、Node.js、Pythonベースのアプリケーション分析に必要なヒットマップ、トレース機能を提供します。特に、モダンなアプリケーション環境に有効なマルチサービスダッシュボード、MSA分析、マルチトランザクション追跡まで、WhaTapで実行できます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "Container Mapによる統合的に柔軟な見える化を実現"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Kubernetesプラットフォームリソース情報とKubernetesで実行中のアプリケーションのメトリクス、イベント情報、ログを統合して提供します。一つのビューを共有しながら、インフラとアプリケーションの担当者間の円滑なコミュニケーションと様々な視点から見える化を確保できます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "リソースの詳細なモニタリングと使用量の状況確認"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "コンテナとNodeのリソース使用量およびトレンド情報をダッシュボードに提供し、コンテナが複数のNodeで円滑に実行されるように管理できます。ユーザーは、WhaTapプロジェクト内にのコンテナまたはNodeの全体の一覧から始まり、個々の対象の詳細な状態まで表示し、コンテナとNodeを詳しく見ることができます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "マスターに接続する必要なく、メタ情報を参照可能"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "主要リソースの基本メタ情報をContainer Map上で確認でき、別なマスターメタダッシュボードで各種コンポーネントの全体のメタ情報が一目で確認できます。コマンドベースで１つずつメタ情報を確認する必要がないので、時間を節約できます。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "ログ管理の業務から離れ、ログ分析に集中"
            })
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "コンテナの各種ログファイルや標準出力をリアルタイムで保存することで、ライフサイクルが一定でないコンテナ環境でもログを確認できます。コンテナに個別に接続する必要がない場合でも、アプリケーションによって生成された意味のある情報を含む、主要なコンテンツを分類およびインデックスを作成することで、ログ分析に集中できます。"
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "モニタリング対象",
        children: "モニタリング対象"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "Kubernetesモニタリングの対象は、KubernetesクラスターとKubernetes上で実行中のアプリケーションです。"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Kubernetesクラスターモニタリング"
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "個別コンテナのCPU、Memory、Disk(Volume)、Network"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "Namespace、Deployment、ReplicaSet、Podなどのサービスを構成するKubernetesの構成要素"
            }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.li, {
              children: "個別Node(ホスト)の CPU、Memory、Disk、Network"
            }), "\n"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "Kubernetesで実行中のアプリケーションモニタリング：Java、Node.js、Pythonなど"
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "次に説明するモニタリング手順も、クラスターモニタリングの手順とアプリケーションモニタリングの手順に分かれます。"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "モニタリング手順",
        children: "モニタリング手順"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "kubernetesクラスターモニタリング手順",
        children: "Kubernetesクラスターモニタリング手順"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "https://service.whatap.io",
              children: "WhaTapモニタリングサービス"
            }), "でクラスタープロジェクトを作成してください。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["WhaTapモニタリングサービス上に新しいKubernetes(Kubernetes) プロジェクトを作成する場合、そのプロジェクトは、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
              children: "クラスタープロジェクト"
            }), "です。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install#create-project",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["Kubernetes環境内のマスターエージェント(whatap-master-agent) およびNodeエージェント(whatap-node-agent)をインストールしてください。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "install-master-node-agent",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "マスターエージェント、Nodeエージェントは、ユーザーのクラスター内でPod形式で実行します。"
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["(選択事項) クラスタープロジェクト内に多数のNamespaceが存在する場合、ユーザーは、WhaTapモニタリングサービスで各ネームスペース(Namespace) プロジェクトに分けることができます。", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.a, {
              href: "create-name-space-project",
              children: "次の文書"
            }), "を参照してください。"]
          }), "\n"]
        }), "\n"]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.admonition, {
        type: "tip",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
          children: ["Kubernetes Namespaceは、複数のチームとユーザーが存在する環境で、１つのクラスター内のリソースグループを分離するためのメカニズムです。Kubernetesクラスター内のNamespace一覧は、", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
            children: "kubectl get namespace"
          }), "コマンドを使用して確認できます。"]
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "kubernetesのアプリケーションモニタリング手順",
        children: "Kubernetesのアプリケーションモニタリング手順"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "コンテナ内で実行中のアプリケーションをモニタリングするためのマイクロアプリケーションエージェントをインストールします。対応されているマイクロアプリケーションはJava、Node.js、Pythonなどです。"
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