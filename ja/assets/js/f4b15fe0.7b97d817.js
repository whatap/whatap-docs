"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[31884],{

/***/ 42632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ install_docker_java_contentTitle),
  "default": () => (/* binding */ install_docker_java_MDXContent),
  frontMatter: () => (/* binding */ install_docker_java_frontMatter),
  metadata: () => (/* binding */ metadata),
  toc: () => (/* binding */ install_docker_java_toc)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__(74235);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__(15947);
;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/_check-install-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "エージェントのインストール確認",
  "id": "エージェントのインストール確認",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(_components.section, {
    className: "remark-sectionize-h2",
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "エージェントのインストール確認",
      children: "エージェントのインストール確認"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["エージェントが正常にインストールされたことを確認するには、", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "ダッシュボード"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "アプリケーションサービスダッシュボード"
            })
          }), "メニューに移動してください。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["ダウンロードしたファイルをインストールした後に", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "ダッシュボード"
            })
          }), "メニューからエージェントが表示されない場合は、次の事項を確認してください。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["コンテナで", (0,jsx_runtime.jsx)(_components.code, {
                children: "ps -ef | grep whatap"
              }), "コマンドを実行し、エージェントオプションを適用されていることを確認してください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["コンテナの ", (0,jsx_runtime.jsx)(_components.em, {
                children: "/whatap/logs"
              }), " パスの内容を確認してください。エージェントログは ", (0,jsx_runtime.jsxs)(_components.em, {
                children: ["logs/", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{whatapの設定ファイル名}"
                }), "-yyyymmdd.log"]
              }), " 形式のファイル名で出力されます。"]
            }), "\n"]
          }), "\n"]
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


;// CONCATENATED MODULE: ./i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/install-docker-java.mdx


const install_docker_java_frontMatter = {
	id: 'install-docker-java',
	title: 'Docker Javaインストール',
	description: 'コンテナ内のJavaアプリケーションをモニタリングするためにエージェントをインストール段階です。',
	keywords: [
		'Kubernetes',
		'Kubernetesモニタリング',
		'アプリケーションインストール',
		'Java'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const install_docker_java_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/install-docker-java",
  "title": "Docker Javaインストール",
  "description": "コンテナ内のJavaアプリケーションをモニタリングするためにエージェントをインストール段階です。",
  "source": "@site/i18n/ja/docusaurus-plugin-content-docs/current/kubernetes/install-docker-java.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/install-docker-java",
  "permalink": "/ja/kubernetes/install-docker-java",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/install-docker-java.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "install-docker-java",
    "title": "Docker Javaインストール",
    "description": "コンテナ内のJavaアプリケーションをモニタリングするためにエージェントをインストール段階です。",
    "keywords": [
      "Kubernetes",
      "Kubernetesモニタリング",
      "アプリケーションインストール",
      "Java"
    ],
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "管理 > アプリケーションエージェントのインストール",
    "permalink": "/ja/kubernetes/install-application-agent"
  },
  "next": {
    "title": "Docker Node.jsインストール",
    "permalink": "/ja/kubernetes/install-docker-nodejs"
  }
};
const assets = {

};

/*:::note

*whatap.conf* ファイルは、Kubernetes環境のConfigMap機能を使用して管理します。

:::*/
/*:::note

設定ファイルの内容が変更されたり、重要な設定項目が消失した場合、正常に動作しない可能性があるため、Kubernetes環境内の**コンテナ環境変数**設定をお勧めします。

:::*/





const install_docker_java_toc = [{
  "value": "エージェントダウンロード",
  "id": "エージェントダウンロード",
  "level": 2
}, {
  "value": "Kubernetes内のアプリケーションエージェントのオプション設定",
  "id": "kubernetes内のアプリケーションエージェントのオプション設定",
  "level": 4
}, {
  "value": "セキュリティキーの設定",
  "id": "security",
  "level": 3
}, {
  "value": "コンテナ環境変数の設定",
  "id": "コンテナ環境変数の設定",
  "level": 2
}, ...toc];
function install_docker_java_createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "管理"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "エージェントインストール"
        })
      }), " > 下段の", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "アプリケーションインストール"
        })
      }), " クリック > 設置案内の中で ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "Docker Java"
        })
      }), " タブを選択"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dockerコンテナベースで動作するJavaアプリケーションのJVM Optionにエージェント適用の設定を追加し、コンテナイメージをパッケージングする過程を次のように案内します。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "EKS Fargateは、対応予定です。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Javaアプリケーション連動過程に対する理解を助けるためにGit例示コードを提供します。", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/whatap/kuber-apm-boilerplate/tree/main/java/springboot",
              children: "次の文書"
            }), "を参考にしてください。"]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "エージェントダウンロード",
        children: "エージェントダウンロード"
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        groupId: "k8stype2",
        children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
          value: "dockerinstall",
          label: "Docker Install",
          default: true,
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["WhaTapアプリケーションエージェントのインストールのために ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " ファイルを作成してください。", (0,jsx_runtime.jsx)(_components.code, {
              children: "{YOUR_PROJECT_ROOT}"
            }), "は、エージェントをインストールしようとするプロジェクトの最上位パスに変更してください。"]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "cat >{YOUR_PROJECT_ROOT}/whatap.conf <<EOL\nwhatap.server.host={proxyServer}\nEOL\n"
            })
          }), (0,jsx_runtime.jsx)(_components.h4, {
            id: "kubernetes内のアプリケーションエージェントのオプション設定",
            children: "Kubernetes内のアプリケーションエージェントのオプション設定"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Kubernetes内のアプリケーションエージェントに必要な設定を、", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), "ファイルに作成するか、エージェント配布時のコンテナ", (0,jsx_runtime.jsx)(_components.code, {
              children: "env"
            }), "フィールドを通して設定できます。"]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), "ファイル内のオプションがコンテナ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), "フィールドに設定されたオプションよりも高い優先順位を持ちます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), "またはコンテナ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), "に設定された値がない場合は、既定値が使用されます。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "license"
                }), "および", (0,jsx_runtime.jsx)(_components.code, {
                  children: "whatap.server.host"
                }), "オプションの場合、", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "コンテナ環境変数"
                }), "設定を活用します。"]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["設定ファイルの内容が変更されたり、重要な設定項目が消失した場合、正常に動作しない可能性があるため、Kubernetes環境内の", (0,jsx_runtime.jsx)(_components.strong, {
              children: "コンテナ環境変数"
            }), "設定をお勧めします。その他のエージェント機能の制御オプションの詳細は、", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/agent-control-function",
              children: "次の文書"
            }), "を参照してください。"]
          }), (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Kubernetes環境内の使用不可オプション"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.name"
                  }), ":収集サーバーがエージェントを識別する固有の名前です。この名前は、エージェントが実行されるオブジェクト情報に基づいて生成されます。ユーザーの任意指定の際、エージェントの識別に問題が発生する可能性があります。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.onode"
                  }), ":デフォルトとして、Kubernetesのクラスターノード名が設定されます。エージェントが属するノード情報を受け取るために使用されます。ユーザーが任意に指定すると、正確なノードの識別ができなくなる可能性があります。"]
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
            children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
              value: "latest",
              label: "最新バージョンのエージェントをアプリケーションイメージに含",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "最新バージョンのエージェント"
                }), "をアプリケーションイメージに含めるように案内します。"]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["アプリケーション画像にワタブエージェントを含めるには、まずDockrfileの最終イメージのビルド段階で次の内容を追加してください。", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), "をエージェントをインストールしようとするプロジェクトの最上位パスに変更します。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# WhaTapエージェント用のディレクトリをユーザーコンテナに作成\nRUN mkdir -p /whatap\n\n# WhaTap Javaエージェントをユーザーコンテナにコピー\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\n\n# 作成したwhatap.conf設定ファイルをユーザーコンテナにコピー\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Dockerfileの開始コマンドに次の内容を追加してください。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent.kube.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "次のDockerfileで定義の例を参考にしてください。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\nRUN mkdir -p /app && mkdir /whatap\nWORKDIR /app\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\nCOPY ./whatap.conf /whatap\nCOPY ./target/myApp.jar /app/\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent.kube.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Dockerをビルドします。", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), "をDockerfileが位置したパスに変更します。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "cd {YOUR_DOCKERFILE_DIR}\ndocker build -t {IMAGE_NAME} .\n"
                    })
                  }), "\n"]
                }), "\n"]
              })]
            }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
              value: "choice",
              label: "指定したバージョンのエージェントをアプリケーションイメージに含む",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "指定したバージョンのエージェント"
                }), "をアプリケーションイメージに含めるように案内します。"]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["アプリケーション画像にワタブエージェントを含めるには、まずDockrfileの最終イメージのビルド段階で次の内容を追加してください。", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), "をエージェントをインストールしようとするプロジェクトの最上位パスに変更します。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# WhaTapエージェント用のディレクトリをユーザーコンテナに作成\nRUN mkdir -p /whatap\n\n# WhaTap Javaエージェントをユーザーコンテナにコピー\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\n\n# 作成したwhatap.conf設定ファイルをユーザーコンテナにコピー\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "現在のWhaTapエージェントのバージョンを確認してください。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "docker run whatap/kube_mon ls /data/agent/micro | grep -E 'whatap\\.agent-(.*?\\.)(.*?\\.)(.*?\\.)jar' | sort | tail -1\n\n# 出力例\n## whatap.agent-X.Y.Z.jar\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Dockerfileの開始コマンドに次の内容を追加します。", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "X.Y.Z"
                    }), "に、前もって確認したエージェントバージョンを入力します。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "次のDockerfileの定義例を参照にしてください。"
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\nRUN mkdir -p /app && mkdir /whatap\nWORKDIR /app\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\nCOPY ./whatap.conf /whatap\nCOPY ./target/myApp.jar /app/\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent-X.Y.Z.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Dockerをビルドします。", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), "をDockerfileが位置したパスに変更します。"]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "cd {YOUR_DOCKERFILE_DIR}\ndocker build -t {IMAGE_NAME} .\n"
                    })
                  }), "\n"]
                }), "\n"]
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(TabItem/* default */.A, {
          value: "direct",
          label: "直接設置",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["インストールファイル(", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.agent.java.tar.gz"
                }), ")をダウンロードするには、", (0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.em, {
                    children: "ダウンロード"
                  })
                }), "ボタンを選択してください。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Dockerfileを作成できるサーバーにアップロードし、圧縮を解凍してください。"
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: "インストールするサーバーから直接ダウンロードするには、次のコマンドを実行してください。"
                }), (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    children: "wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"
                  })
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["圧縮を解除する時、", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " ディレクトリが作成されます。", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " ディレクトリ内部の ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " ファイルで設定内容を確認した後、次のように修正してください。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-ini",
                  children: "license={licenseKey}\nwhatap.server.host={proxyServer}\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Kubernetes内のアプリケーションエージェントのオプション設定"
                  })
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["Kubernetes内のアプリケーションエージェントに必要な設定を、", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), "ファイルに作成するか、エージェント配布時のコンテナ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "env"
                  }), "フィールドを通して設定できます。"]
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), "ファイル内のオプションがコンテナ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), "フィールドに設定されたオプションよりも高い優先順位を持ちます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), "またはコンテナ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), "に設定された値がない場合は、既定値が使用されます。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "license"
                      }), "および", (0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.server.host"
                      }), "オプションの場合、", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "コンテナ環境変数"
                      }), "設定を活用します。"]
                    }), "\n"]
                  }), "\n"]
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["設定ファイルの内容が変更されたり、重要な設定項目が消失した場合、正常に動作しない可能性があるため、Kubernetes環境内の", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "コンテナ環境変数"
                  }), "設定をお勧めします。その他のエージェント機能の制御オプションの詳細は、", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/agent-control-function",
                    children: "次の文書"
                  }), "を参照してください。"]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "note",
                children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Kubernetes環境内の使用不可オプション"
                  })
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.name"
                      }), ":収集サーバーがエージェントを識別する固有の名前です。この名前は、エージェントが実行されるオブジェクト情報に基づいて生成されます。ユーザーの任意指定の際、エージェントの識別に問題が発生する可能性があります。"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.onode"
                      }), ":デフォルトとして、Kubernetesのクラスターノード名が設定されます。エージェントが属するノード情報を受け取るために使用されます。ユーザーが任意に指定すると、正確なノードの識別ができなくなる可能性があります。"]
                    }), "\n"]
                  }), "\n"]
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Dockerfileの開始コマンドに次の内容を追加します。_whatap_ディレクトリ内でエージェントファイルを確認した後、", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "X.Y.Z"
                }), "に該当バージョンを入力します。"]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "次のDockerfileの定義例を参照にしてください。"
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  metastring: "title='Dockerfile'",
                  children: "FROM openjdk:8-jdk-alpine\nRUN mkdir -p /app && mkdir /whatap\nWORKDIR /app\nCOPY ./whatap.agent-X.Y.Z.jar /whatap/\nCOPY ./whatap.conf /whatap/\nCOPY ./target/myApp.jar myApp.jar\nCOPY ./paramkey.txt /whatap/\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent-X.Y.Z.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\nEXPOSE 8080\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap-virtual-X.Y.Z.jar"
                  }), "：モニタリング対象(サンプルアプリケーション)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-X.Y.Z.jar"
                  }), "：WhaTapエージェント"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["エージェントのファイル名が", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-1.2.3.jar"
                  }), "の場合、", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "X.Y.Z"
                  }), "の部分を", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "1.2.3"
                  }), "に変更してください。"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["JVMオプション追加の詳細については、", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/install-agent#addjvmopt",
                    children: "次の文書"
                  }), "を参照してください。"]
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Java 17バージョン以降の場合、reflectionに関する", (0,jsx_runtime.jsx)(_components.code, {
            children: "--add-opens=java.base/java.lang=ALL-UNNAMED"
          }), "オプションを追加してください。"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "security",
        children: "セキュリティキーの設定"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "SQL変数、HTTPクエリを検索、Thread停止機能を使用する場合は、セキュリティキーを設定してください。"
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Javaエージェント2.2.2バージョン以降"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), "パスに ", (0,jsx_runtime.jsx)(_components.em, {
              children: "security.conf"
            }), " ファイルを作成した後、次のように 6桁の英数字のパスワードを入力してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='security.conf'",
              children: "paramkey=ABCDEF # SQL変数およびHTTPクエリの検索\nthreadkill=ABCDEF # Thread停止機能\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Javaエージェント2.2.2バージョン未満"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), "パスに ", (0,jsx_runtime.jsx)(_components.em, {
              children: "paramkey.txt"
            }), " ファイルを作成した後、次のように 6桁の英数字のパスワードを入力してください。"]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='paramkey.txt'",
              children: "ABCDEF # SQL変数およびHTTPクエリの検索、スレッド停止機能\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Javaエージェント 2.2.2 のバージョン未満から2.2.2バージョンにアップデートする場合、既存の ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " ファイルのキー値が ", (0,jsx_runtime.jsx)(_components.em, {
            children: "seuciry.conf"
          }), " ファイルのキー値に自動的に適用されます。例えば、", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " に", (0,jsx_runtime.jsx)(_components.code, {
            children: "FEDCBA"
          }), "を使用して、バージョン2.2.2にアップデートした場合、", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " ファイルには次のように適用されます。"]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            children: "paramkey=FEDCBA\nthreadkill=FEDCBA\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " ファイルが存在しない場合、", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " ファイルのキー値は、", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WHATAP"
          }), " というキー値で自動的に生成されます。"]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQLパラメータ情報の記録に関するエージェント設定は、", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-dbsql#profile-sql-param",
                children: "次の文書"
              }), "を参照にしてください。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["HTTPパラメータ情報の記録に関するエージェント設定は、", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-transaction#profile_http_parameter",
                children: "次の文書"
              }), "を参照にしてください。"]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "コンテナ環境変数の設定",
        children: "コンテナ環境変数の設定"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Dockerビルド後、Kubernetes環境内の", (0,jsx_runtime.jsx)(_components.strong, {
          children: "コンテナ環境変数"
        }), "を設定してください。アプリケーション配布の ", (0,jsx_runtime.jsx)(_components.em, {
          children: "yaml"
        }), " ファイルに次の内容を追加してください。"]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "env:\n- name: NODE_IP\n  valueFrom: {fieldRef: {fieldPath: status.hostIP}}\n- name: NODE_NAME\n  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}\n- name: POD_NAME\n  valueFrom: {fieldRef: {fieldPath: metadata.name}}\n- name: OKIND\n  value: {YOUR_OKIND_NAME}\n- name: license\n  value: {licenseKey}\n- name: whatap.server.host\n  value: {proxyServer}\n- name: whatap.micro.enabled\n  value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "次の例を参照にしてください。"
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: #DeploymentName\n  labels:\n    app: #AppLabel\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: #AppLabel\n  template:\n    metadata:\n      labels:\n        app: #AppLabel\n    spec:\n      containers:\n      - name: #ContainerName\n        image: nginx\n        ports:\n        - containerPort: 80\n        env:\n        - name: NODE_IP\n          valueFrom: {fieldRef: {fieldPath: \"status.hostIP\"}}\n        - name: NODE_NAME\n          valueFrom: {fieldRef: {fieldPath: \"spec.nodeName\"}}\n        - name: POD_NAME\n          valueFrom: {fieldRef: {fieldPath: \"metadata.name \"}}\n        - name: OKIND\n          value: #DeploymentName\n        - name: license\n          value: #licenseKey\n        - name: whatap.server.host\n          value: #proxyServer\n        - name: whatap.micro.enabled\n          value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "環境変数の役割"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_IP"
              }), ": 現在のPodがホストされているノード(Node)のIPアドレスを収集します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_NAME"
              }), ": 現在Podが実行中のノードの名前を収集します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "POD_NAME"
              }), ": 現在のPodの名前を収集します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "OKIND"
              }), "(選択事項)：Podに該当するアプリケーションをグループ化します。デプロイメント(Deployment) 名に設定すると、該当するPodを一つにグループ化します。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "license"
              }), "：エージェント認証を確認するためのキーです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.server.host"
              }), "：WhaTap収集サーバーのホストIPです。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.micro.enabled"
              }), "：コンテナとの連動を活性化します。"]
            }), "\n"]
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsx)(MDXContent, {})]
    })]
  });
}
function install_docker_java_MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(install_docker_java_createMdxContent, {
      ...props
    })
  }) : install_docker_java_createMdxContent(props);
}



/***/ }),

/***/ 15947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 


function TabItem({ children , hidden , className  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.A)(styles_module.tabItem, className),
        hidden,
        children: children
    });
};


/***/ }),

/***/ 74235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__(52204);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(56347);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__(13321);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__(57641);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__(73094);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__(57237);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props  } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    var ref;
    var ref1;
    return (ref1 = (ref = react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })) === null || ref === void 0 ? void 0 : ref.filter(Boolean)) !== null && ref1 !== void 0 ? ref1 : [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map(({ props: { value , label , attributes , default: isDefault  }  })=>({
            value,
            label,
            attributes,
            default: isDefault
        }));
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.XI)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp , children  } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp !== null && valuesProp !== void 0 ? valuesProp : extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue({ value , tabValues ,  }) {
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue({ defaultValue , tabValues ,  }) {
    if (tabValues.length === 0) {
        throw new Error('Docusaurus error: the <Tabs> component requires at least one <TabItem> children component');
    }
    if (defaultValue) {
        // Warn user about passing incorrect defaultValue as prop.
        if (!isValidValue({
            value: defaultValue,
            tabValues
        })) {
            throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${defaultValue}" but none of its children has the corresponding value. Available values are: ${tabValues.map((a)=>a.value).join(', ')}. If you intend to show no default tab, use defaultValue={null} instead.`);
        }
        return defaultValue;
    }
    var ref;
    const defaultTabValue = (ref = tabValues.find((tabValue)=>tabValue.default)) !== null && ref !== void 0 ? ref : tabValues[0];
    if (!defaultTabValue) {
        throw new Error('Unexpected error: 0 tabValues');
    }
    return defaultTabValue.value;
}
function getStorageKey(groupId) {
    if (!groupId) {
        return null;
    }
    return `docusaurus.tab.${groupId}`;
}
function getQueryStringKey({ queryString =false , groupId ,  }) {
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId !== null && groupId !== void 0 ? groupId : null;
}
function useTabQueryString({ queryString =false , groupId ,  }) {
    const history = (0,react_router/* useHistory */.W6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */.aZ)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace(_objectSpreadProps(_objectSpread({}, history.location), {
            search: searchParams.toString()
        }));
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage({ groupId  }) {
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Dv)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        storageSlot.set(newValue);
    }, [
        key,
        storageSlot
    ]);
    return [
        value,
        setValue
    ];
}
function useTabs(props) {
    const { defaultValue , queryString =false , groupId  } = props;
    const tabValues = useTabValues(props);
    const [selectedValue, setSelectedValue] = (0,react.useState)(()=>getInitialStateValue({
            defaultValue,
            tabValues
        }));
    const [queryStringValue, setQueryString] = useTabQueryString({
        queryString,
        groupId
    });
    const [storageValue, setStorageValue] = useTabStorage({
        groupId
    });
    // We sync valid querystring/storage value to state on change + hydration
    const valueToSync = (()=>{
        const value = queryStringValue !== null && queryStringValue !== void 0 ? queryStringValue : storageValue;
        if (!isValidValue({
            value,
            tabValues
        })) {
            return null;
        }
        return value;
    })();
    // Sync in a layout/sync effect is important, for useScrollPositionBlocker
    // See https://github.com/facebook/docusaurus/issues/8625
    (0,useIsomorphicLayoutEffect/* default */.A)(()=>{
        if (valueToSync) {
            setSelectedValue(valueToSync);
        }
    }, [
        valueToSync
    ]);
    const selectValue = (0,react.useCallback)((newValue)=>{
        if (!isValidValue({
            value: newValue,
            tabValues
        })) {
            throw new Error(`Can't select invalid tab value=${newValue}`);
        }
        setSelectedValue(newValue);
        setQueryString(newValue);
        setStorageValue(newValue);
    }, [
        setQueryString,
        setStorageValue,
        tabValues
    ]);
    return {
        selectedValue,
        selectValue,
        tabValues
    };
} //# sourceMappingURL=tabsUtils.js.map

// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsBrowser.js
var useIsBrowser = __webpack_require__(12075);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
function Tabs_defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function Tabs_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys1 = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys1 = ownKeys1.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys1.forEach(function(key) {
            Tabs_defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function Tabs_ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function Tabs_objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        Tabs_ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




function TabList({ className , block , selectedValue , selectValue , tabValues  }) {
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender  } = (0,scrollUtils/* useScrollPositionBlocker */.a_)();
    const handleTabChange = (event)=>{
        const newTab = event.currentTarget;
        const newTabIndex = tabRefs.indexOf(newTab);
        const newTabValue = tabValues[newTabIndex].value;
        if (newTabValue !== selectedValue) {
            blockElementScrollPositionUntilNextRender(newTab);
            selectValue(newTabValue);
        }
    };
    const handleKeydown = (event)=>{
        let focusElement = null;
        switch(event.key){
            case 'Enter':
                {
                    handleTabChange(event);
                    break;
                }
            case 'ArrowRight':
                {
                    const nextTab = tabRefs.indexOf(event.currentTarget) + 1;
                    var _nextTab;
                    focusElement = (_nextTab = tabRefs[nextTab]) !== null && _nextTab !== void 0 ? _nextTab : tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    var _prevTab;
                    focusElement = (_prevTab = tabRefs[prevTab]) !== null && _prevTab !== void 0 ? _prevTab : tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement === null || focusElement === void 0 ? void 0 : focusElement.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.A)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map(({ value , label , attributes  })=>{
            /*#__PURE__*/ return (0,jsx_runtime.jsx)("li", Tabs_objectSpreadProps(Tabs_objectSpread({
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange
            }, attributes), {
                className: (0,clsx/* default */.A)('tabs__item', styles_module.tabItem, attributes === null || attributes === void 0 ? void 0 : attributes.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label !== null && label !== void 0 ? label : value
            }), value);
        })
    });
}
function TabContent({ lazy , children , selectedValue  }) {
    const childTabs = (Array.isArray(children) ? children : [
        children
    ]).filter(Boolean);
    if (lazy) {
        const selectedTabItem = childTabs.find((tabItem)=>tabItem.props.value === selectedValue);
        if (!selectedTabItem) {
            // fail-safe or fail-fast? not sure what's best here
            return null;
        }
        return /*#__PURE__*/ (0,react.cloneElement)(selectedTabItem, {
            className: (0,clsx/* default */.A)('margin-top--md', selectedTabItem.props.className)
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "margin-top--md",
        children: childTabs.map((tabItem, i)=>/*#__PURE__*/ (0,react.cloneElement)(tabItem, {
                key: i,
                hidden: tabItem.props.value !== selectedValue
            }))
    });
}
function TabsComponent(props) {
    const tabs = useTabs(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (0,clsx/* default */.A)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, Tabs_objectSpread({}, tabs, props)),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, Tabs_objectSpread({}, tabs, props))
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.A)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, Tabs_objectSpreadProps(Tabs_objectSpread({}, props), {
        children: sanitizeTabsChildren(props.children)
    }), String(isBrowser));
};


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