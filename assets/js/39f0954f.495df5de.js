"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["2051"], {
"43841": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_install_master_node_agent_mdx_39f_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-install-master-node-agent-mdx-39f.json
var site_docs_kubernetes_install_master_node_agent_mdx_39f_namespaceObject = JSON.parse('{"id":"kubernetes/install-master-node-agent","title":"마스터 및 노드 에이전트 설치","description":"설치 안내 페이지에 따라 마스터 및 노드 에이전트 설치 과정을 진행하세요.","source":"@site/docs/kubernetes/install-master-node-agent.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/install-master-node-agent","permalink":"/kubernetes/install-master-node-agent","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/install-master-node-agent.mdx","tags":[],"version":"current","frontMatter":{"id":"install-master-node-agent","title":"마스터 및 노드 에이전트 설치","description":"설치 안내 페이지에 따라 마스터 및 노드 에이전트 설치 과정을 진행하세요.","keywords":["쿠버네티스","쿠버네티스 모니터링","에이전트","마스터","노드","에이전트 설치"],"toc_max_heading_level":2,"isTranslationMissing":false}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js + 2 modules
var Tabs = __webpack_require__("47902");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js + 1 modules
var TabItem = __webpack_require__("5525");
;// CONCATENATED MODULE: ./docs/kubernetes/install-master-node-agent.mdx


const frontMatter = {
	id: 'install-master-node-agent',
	title: '마스터 및 노드 에이전트 설치',
	description: '설치 안내 페이지에 따라 마스터 및 노드 에이전트 설치 과정을 진행하세요.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'에이전트',
		'마스터',
		'노드',
		'에이전트 설치'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};





const toc = [{
  "value": "사전 환경 점검 및 설정",
  "id": "사전-환경-점검-및-설정",
  "level": 2
}, {
  "value": "쿠버네티스 에이전트 생성",
  "id": "create-kubernetes-agent",
  "level": 2
}, {
  "value": "Helm 버전 확인 및 와탭 리포지토리 네트워크 연결 상태 확인",
  "id": "k8s-helm-prechek",
  "level": 3
}, {
  "value": "Helm Chart 기준 설치",
  "id": "k8s-helm-chart-install",
  "level": 3
}, {
  "value": "<em>values.yaml</em> 주요 설정 항목",
  "id": "valuesyaml-주요-설정-항목",
  "level": 3
}, {
  "value": "YAML 파일 기준 설치",
  "id": "yaml-파일-기준-설치",
  "level": 3
}, {
  "value": "쿠버네티스 에이전트 설치 확인",
  "id": "check-kubernetes-agent",
  "level": 2
}, {
  "value": "Running 상태인 경우",
  "id": "running-상태인-경우",
  "level": 4
}, {
  "value": "Running 상태가 아닌 경우",
  "id": "running-상태가-아닌-경우",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    admonition: "admonition",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.a)(),
    ...props.components
  }, {ImgLang} = _components;
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["다음과 같이 마스터 및 노드 에이전트 설치 과정을 안내합니다. ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "설치 안내"
        })
      }), " 화면과 동일한 과정입니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: "EKS Fargate는 지원 예정입니다."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "사전-환경-점검-및-설정",
        children: "사전 환경 점검 및 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["사용자의 쿠버네티스 환경에 따라 사전 환경 설정이 필요할 수 있습니다. Istio, GKE, OpenShift 환경에 해당하지 않을 경우 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#create-kubernetes-agent",
          children: "다음 단계"
        }), "로 넘어가세요."]
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
        children: [(0,jsx_runtime.jsxs)(TabItem/* default */.Z, {
          value: "istio",
          label: "Istio 환경",
          default: true,
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Istio 환경일 경우 다음 명령을 실행해 와탭 수집서버와 통신하는 자원인 ServiceEntry를 생성하세요."
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              metastring: "title='SH'",
              children: "kubectl create namespace whatap-monitoring\nkubectl label namespace whatap-monitoring istio-injection=enabled\nkubectl apply -f - <<EOF\napiVersion: networking.istio.io/v1alpha3\nkind: ServiceEntry\nmetadata:\n  name: whatap-external\nspec:\n  hosts:\n  - whatap-proxy1\n  - whatap-proxy2\n  addresses:\n  - 13.124.11.223\n  - 13.209.172.35\n  ports:\n  - name: proxy\n    number: 6600\n    protocol: tcp\n    location: MESH_EXTERNAL\nEOF\n"
            })
          })]
        }), (0,jsx_runtime.jsxs)(TabItem/* default */.Z, {
          value: "gke",
          label: "GKE 환경",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: "Google Kubernetes Engine(GKE)의 경우 사용자 클러스터 생성 후 권한 설정을 위해 다음 명령을 실행하세요."
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "ACCOUNT=$(gcloud info --format='value(config.account)')\nkubectl create clusterrolebinding owner-cluster-admin-binding \\\n  --clusterrole cluster-admin \\\n  --user $ACCOUNT\n"
            })
          }), (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: ["gcloud 명령 설치에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://cloud.google.com/sdk/docs/install",
                children: "구글 클라우드 문서"
              }), "를 참조하세요."]
            })
          })]
        }), (0,jsx_runtime.jsxs)(TabItem/* default */.Z, {
          value: "openshift",
          label: "OpenShift 환경",
          children: [(0,jsx_runtime.jsx)(ImgLang, {
            img: "kube-install-openshift.png",
            desc: "OpenShift"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "설치 안내"
              })
            }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "OpenShift 환경일 경우 추가 설정"
              })
            }), " 섹션을 열어 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "whatap_openshift_scc.yaml"
              })
            }), " 버튼을 선택하세요. 파일을 다운로드 후 다음 명령을 실행하세요."]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "oc create -f whatap_openshift_scc.yaml\n"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "create-kubernetes-agent",
        children: "쿠버네티스 에이전트 생성"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 쿠버네티스 에이전트 설치 시 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "helm"
        }), " 차트 기준 안내와 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "yaml"
        }), " 파일 기준 안내를 다음과 같이 제공합니다."]
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
        children: [(0,jsx_runtime.jsxs)(TabItem/* default */.Z, {
          value: "helm",
          label: "Helm Chart",
          default: true,
          children: [(0,jsx_runtime.jsx)(_components.h3, {
            id: "k8s-helm-prechek",
            children: "Helm 버전 확인 및 와탭 리포지토리 네트워크 연결 상태 확인"
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["다음 명령어를 통해 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "helm"
                }), " 버전을 확인하세요. 3.x 버전 이상을 지원합니다."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "helm version\n# version.BuildInfo{Version:\"v3.x\", GitCommit:\"xxx\", GitTreeState:\"clean\", GoVersion:\"go1.20.8\"}\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "와탭 Helm 리포지토리에 대한 네트워크 연결 상태를 확인하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "curl https://whatap.github.io/helm/ping \n# pong\n"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h3, {
            id: "k8s-helm-chart-install",
            children: "Helm Chart 기준 설치"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 Helm 리포지토리 추가 후 사용자의 Container Runtime에 맞는 기본 설정 파일을 생성해 에이전트를 설치하세요."
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 명령어를 실행해 와탭 Helm 리포지토리를 추가하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "helm repo add whatap https://whatap.github.io/helm/\nhelm repo update\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["다음 명령어를 실행해 사용자 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CONTAINER-RUNTIME"
                }), "을 확인하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "kubectl get nodes -o wide\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(50727)/* ["default"] */.Z) + "",
                  width: "4000",
                  height: "374"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "CONTAINER-RUNTIME"
                }), " 확인 후 설치에 필요한 기본 설정 파일(", (0,jsx_runtime.jsx)(_components.em, {
                  children: "values.yaml"
                }), ")을 다음과 같이 생성하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-yaml",
                  children: "containerRuntime: #CONTAINER-RUNTIME\nwhatap:\n    license: #WHATAP-LICENESE-KEY\n    host: \"13.124.11.223/13.209.172.35\"\n    port: \"6600\"\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음과 같이 에이전트 애플리케이션을 설치하세요."
              }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["에이전트를 ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "처음"
                    }), " 설치하는 사용자는 다음 명령어를 실행해 에이전트 애플리케이션을 설치하세요."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "helm install whatap-kube-agent whatap/kube -f values.yaml\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "기존"
                    }), " 와탭 쿠버네티스 에이전트 사용자는 다음 명령어를 실행해 에이전트 애플리케이션을 설치하세요."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "kubectl delete ns whatap-monitoring\nkubectl delete clusterrole whatap\nkubectl delete clusterrolebinding whatap\nhelm install whatap-kube-agent whatap/kube -f values.yaml\n"
                    })
                  }), "\n"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "note",
                children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["기존 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "yaml"
                  }), " 파일 방식으로 와탭 쿠버네티스 에이전트를 설치한 경우 Clean Install이 필요합니다. 기존 쿠버네티스 에이전트 삭제 후 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "helm"
                  }), " 차트를 통한 설치가 가능합니다."]
                })]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(_components.h3, {
            id: "valuesyaml-주요-설정-항목",
            children: [(0,jsx_runtime.jsx)(_components.em, {
              children: "values.yaml"
            }), " 주요 설정 항목"]
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 쿠버네티스 에이전트 설정을 수정하기 위해서는 기본 설정 파일(", (0,jsx_runtime.jsx)(_components.em, {
              children: "values.yaml"
            }), ")을 수정해야 합니다. ", (0,jsx_runtime.jsx)(_components.em, {
              children: "values.yaml"
            }), " 파일 내 주요 설정 항목을 다음과 같이 안내합니다."]
          }), (0,jsx_runtime.jsx)("div", {
            class: "k8s-values-yaml-table",
            children: (0,jsx_runtime.jsxs)(_components.table, {
              children: [(0,jsx_runtime.jsx)(_components.thead, {
                children: (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.th, {
                    children: "키"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "타입"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "기본값"
                  }), (0,jsx_runtime.jsx)(_components.th, {
                    children: "설명"
                  })]
                })
              }), (0,jsx_runtime.jsxs)(_components.tbody, {
                children: [(0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap.license"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "# <license-key>"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Whatap 라이센스 키"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap.host"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "# <whatap-server-host>"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Whatap 서버의 호스트 주소"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap.port"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Int"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "# <whatap-server-port>"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Whatap 포트 번호"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "containerRuntime"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"docker\""
                    })
                  }), (0,jsx_runtime.jsxs)(_components.td, {
                    children: ["사용 중인 컨테이너 런타임. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"docker\""
                    }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"containerd\""
                    }), ", ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"crio\""
                    }), " 중 선택"]
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.name"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap-node-agent"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "DaemonSet의 이름"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.label"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap-node-agent"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "DaemonSet에 지정할 라벨"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.initContainers.nodeDebugger.enabled"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Bool"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "true"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Whatap 노드 디버거 컨테이너 활성화 여부"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.image"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap/kube_mon"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeHelper 컨테이너의 이미지"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.requests.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "100Mi"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeHelper MEMORY request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.requests.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "100m"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeHelper CPU request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.limits.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "350Mi"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeHelper MEMORY limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeHelper.limits.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "200m"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeHelper CPU limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.image"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap/kube_mon"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeAgent 컨테이너의 이미지"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.requests.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "300Mi"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeAgent MEMORY request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.requests.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "100m"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeAgent CPU request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.limits.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "350Mi"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeAgent MEMORY limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "daemonSet.containers.nodeAgent.limits.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "200m"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "nodeAgent CPU limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.name"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Deployment의 이름"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.label"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Deployment에 지정할 라벨"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.replicas"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Int"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "1"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Deployment의 replica 수"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.enabled"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Boolean"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "true"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "whatap-control-plane-helper 컨테이너를 활성화 여부"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.image"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"whatap/kube_mon\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너의 이미지"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.port"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "9496"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너의 포트 번호입니다"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.requests.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"300Mi\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너 MEMORY request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.requests.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"100m\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너 CPU request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.limits.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"350Mi\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너 MEMORY limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.controlPlaneHelper.resources.limits.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"200m\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "controlPlaneHelper 컨테이너 CPU limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.name"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "whatap-master-agent"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 이름"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.image"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"whatap/kube_mon\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 이미지"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.port"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "Int"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "6600"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 포트 번호"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.requests.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"300Mi\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 MEMORY request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.requests.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"100m\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 CPU request"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.limits.memory"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"350Mi\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 MEMORY limit"
                  })]
                }), (0,jsx_runtime.jsxs)(_components.tr, {
                  children: [(0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "deployment.containers.masterAgent.resources.limits.cpu"
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "String"
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "\"200m\""
                    })
                  }), (0,jsx_runtime.jsx)(_components.td, {
                    children: "masterAgent 컨테이너 CPU request"
                  })]
                })]
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.p, {
              children: ["Helm 차트 기준 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "설치 문제 해결"
              }), "에 대한 안내는 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "agent-troubleshooting#troubleshooting-helm-chart",
                children: "다음 문서"
              }), "를 참조하세요."]
            })]
          })]
        }), (0,jsx_runtime.jsxs)(TabItem/* default */.Z, {
          value: "yaml",
          label: "YAML",
          default: true,
          children: [(0,jsx_runtime.jsx)(_components.h3, {
            id: "yaml-파일-기준-설치",
            children: "YAML 파일 기준 설치"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["사용자의 쿠버네티스 버전과 Container Runtime에 맞는 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "YAML"
            }), " 파일을 다운로드해 에이전트를 생성하세요."]
          }), (0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["다음 명령어를 실행해 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "VERSION"
                }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CONTAINER-RUNTIME"
                }), "을 확인하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "kubectl get node -o wide\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  src: (__webpack_require__(43298)/* ["default"] */.Z) + "",
                  width: "771",
                  height: "146"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "에이전트 설치"
                  })
                }), " 화면에서 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "VERSION"
                }), "과 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CONTAINER-RUNTIME"
                }), "에 맞는 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "YAML"
                }), " 파일을 선택하고 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "다운로드"
                  })
                }), " 버튼을 클릭하세요."]
              }), "\n", (0,jsx_runtime.jsx)(ImgLang, {
                img: "k8s-download-yaml.png",
                desc: "yaml 다운로드"
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["다운로드한 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "YAML"
                }), " 파일을 마스터 노드에 업로드하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "에이전트를 생성하기 위해 다음 명령어를 실행하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "# {whatap_kube_X.YZ.yaml} 파일명을 다운로드한 파일명과 일치하도록 수정하세요.\nkubectl apply -f {whatap_kube_X.YZ.yaml}\n"
                })
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음과 같이 에이전트를 정상적으로 생성(create)한 것을 확인하세요."
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: (0,jsx_runtime.jsx)(_components.img, {
                  alt: "에이전트 생성 확인",
                  src: (__webpack_require__(34706)/* ["default"] */.Z) + "",
                  width: "771",
                  height: "231"
                })
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.admonition, {
            type: "note",
            children: (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "마스터 에이전트가 사용하는 자원량"
              }), "은 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "사용자 환경의 노드 수"
              }), "에 어느 정도 ", (0,jsx_runtime.jsx)(_components.strong, {
                children: "비례"
              }), "합니다. 즉 클러스터 내에 노드 수가 많을 경우 기본값으로 설정된 메모리 Limit(350MB) 이상의 자원을 사용해 OOM(Out Of Memory)이 발생할 수 있습니다. 마스터 에이전트에 할당된 메모리 Limit 수치는 에이전트 설치 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "YAML"
              }), " 파일을 통해 변경할 수 있습니다."]
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "check-kubernetes-agent",
        children: "쿠버네티스 에이전트 설치 확인"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "쿠버네티스 에이전트 설치가 정상적으로 완료되었을 경우 다음 명령어를 실행해 마스터 에이전트와 노드 에이전트의 상태를 확인할 수 있습니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl get pod -n whatap-monitoring\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "running-상태인-경우",
        children: "Running 상태인 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음과 같이 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STATUS"
        }), " 항목이 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), "인 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "설치를 완료한 상태"
        }), "입니다. 마스터 및 노드 에이전트의 설치를 완료하면 쿠버네티스 환경의 자원 모니터링을 시작합니다. ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://service.whatap.io",
          children: "와탭 모니터링 서비스"
        }), "로 이동한 다음 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "프로젝트 목록"
          })
        }), "과 ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "대시보드"
          })
        }), " > ", (0,jsx_runtime.jsx)(_components.em, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "컨테이너 맵"
          })
        }), " 메뉴에서 성능 정보를 수집하는 것을 확인하세요."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(47714)/* ["default"] */.Z) + "",
          width: "771",
          height: "144"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "running-상태가-아닌-경우",
        children: "Running 상태가 아닌 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음과 같이 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STATUS"
        }), " 항목이 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Running"
        }), "이 아닌 경우 설치가 제대로 이루어지지 않은 상태입니다."]
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          src: (__webpack_require__(20848)/* ["default"] */.Z) + "",
          width: "771",
          height: "153"
        })
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "마스터 노드에서 다음 명령어를 실행해 Pod 생성의 실패 원인을 파악하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "kubectl describe pod {POD_NAME} -n whatap-monitoring\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["실행 결과 하단에 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Events:"
            }), " 항목을 확인하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(36577)/* ["default"] */.Z) + "",
              width: "771",
              height: "524"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "kubectl"
          }), " 명령어 사용 시 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-n {네임스페이스}"
          }), " 옵션을 사용하면 특정 네임스페이스를 대상으로 작업을 수행합니다. 와탭 에이전트는 기본적으로 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "whatap-monitoring"
          }), "이라는 네임스페이스에 설치되므로 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-n whatap-monitoring"
          }), "이라는 옵션을 추가합니다."]
        })
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["애플리케이션 에이전트를 설치를 진행하려면 화면 오른쪽 아래에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "애플리케이션 에이전트 설치"
              })
            }), " 버튼을 선택하세요. 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "install-application-agent",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["에이전트를 최신 버전으로 업데이트하려면 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "agent-update",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        })
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
"50727": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-containerRuntime-97bb1cea20ad19b5f4f73e069acd635a.png");

}),
"36577": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-install-fail-ba3d8f37ab7f298faedcb9663be127c8.svg");

}),
"47714": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-running-agent-monitoring-b549837fbaa82697b0c5c4a38eaaa84a.svg");

}),
"43298": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-check-version-00585738e4bcf980d71e1565a1a6ca17.svg");

}),
"34706": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-install-agent-check-ace8bd1c4ee71aa393a57d29f23c6b3c.svg");

}),
"20848": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/k8s-not-running-agent-monitoring-bf973783a5f1db1cf4ec16fb3a2c93c1.svg");

}),
"5525": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TabItem)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tabItem":"tabItem_Ymn6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TabItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 



function TabItem(param) {
    let { children, hidden, className } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        role: "tabpanel",
        className: (0,clsx/* default */.Z)(styles_module.tabItem, className),
        hidden,
        children: children
    });
}


}),
"47902": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Tabs)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("67294");
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__("67026");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/scrollUtils.js
var scrollUtils = __webpack_require__("69599");
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__("16550");
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useIsomorphicLayoutEffect.js
var useIsomorphicLayoutEffect = __webpack_require__("32000");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/historyUtils.js
var historyUtils = __webpack_require__("4520");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/jsUtils.js
var jsUtils = __webpack_require__("38341");
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/storageUtils.js + 1 modules
var storageUtils = __webpack_require__("76009");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tabsUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 




// A very rough duck type, but good enough to guard against mistakes while
// allowing customization
function isTabItem(comp) {
    const { props } = comp;
    return !!props && typeof props === 'object' && 'value' in props;
}
function sanitizeTabsChildren(children) {
    return react.Children.toArray(children).filter((child)=>child !== '\n').map((child)=>{
        if (!child || /*#__PURE__*/ (0,react.isValidElement)(child) && isTabItem(child)) {
            return child;
        }
        // child.type.name will give non-sensical values in prod because of
        // minification, but we assume it won't throw in prod.
        throw new Error(`Docusaurus error: Bad <Tabs> child <${// @ts-expect-error: guarding against unexpected cases
        typeof child.type === 'string' ? child.type : child.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`);
    })?.filter(Boolean) ?? [];
}
function extractChildrenTabValues(children) {
    return sanitizeTabsChildren(children).map((param)=>{
        let { props: { value, label, attributes, default: isDefault } } = param;
        return {
            value,
            label,
            attributes,
            default: isDefault
        };
    });
}
function ensureNoDuplicateValue(values) {
    const dup = (0,jsUtils/* duplicates */.lx)(values, (a, b)=>a.value === b.value);
    if (dup.length > 0) {
        throw new Error(`Docusaurus error: Duplicate values "${dup.map((a)=>a.value).join(', ')}" found in <Tabs>. Every value needs to be unique.`);
    }
}
function useTabValues(props) {
    const { values: valuesProp, children } = props;
    return (0,react.useMemo)(()=>{
        const values = valuesProp ?? extractChildrenTabValues(children);
        ensureNoDuplicateValue(values);
        return values;
    }, [
        valuesProp,
        children
    ]);
}
function isValidValue(param) {
    let { value, tabValues } = param;
    return tabValues.some((a)=>a.value === value);
}
function getInitialStateValue(param) {
    let { defaultValue, tabValues } = param;
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
    const defaultTabValue = tabValues.find((tabValue)=>tabValue.default) ?? tabValues[0];
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
function getQueryStringKey(param) {
    let { queryString = false, groupId } = param;
    if (typeof queryString === 'string') {
        return queryString;
    }
    if (queryString === false) {
        return null;
    }
    if (queryString === true && !groupId) {
        throw new Error(`Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".`);
    }
    return groupId ?? null;
}
function useTabQueryString(param) {
    let { queryString = false, groupId } = param;
    const history = (0,react_router/* useHistory */.k6)();
    const key = getQueryStringKey({
        queryString,
        groupId
    });
    const value = (0,historyUtils/* useQueryStringValue */._X)(key);
    const setValue = (0,react.useCallback)((newValue)=>{
        if (!key) {
            return; // no-op
        }
        const searchParams = new URLSearchParams(history.location.search);
        searchParams.set(key, newValue);
        history.replace({
            ...history.location,
            search: searchParams.toString()
        });
    }, [
        key,
        history
    ]);
    return [
        value,
        setValue
    ];
}
function useTabStorage(param) {
    let { groupId } = param;
    const key = getStorageKey(groupId);
    const [value, storageSlot] = (0,storageUtils/* useStorageSlot */.Nk)(key);
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
    const { defaultValue, queryString = false, groupId } = props;
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
        const value = queryStringValue ?? storageValue;
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
    (0,useIsomorphicLayoutEffect/* default */.Z)(()=>{
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
var useIsBrowser = __webpack_require__("7227");
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/styles.module.css
// extracted by css-extract-rspack-plugin
/* ESM default export */ const styles_module = ({"tabList":"tabList__CuJ","tabItem":"tabItem_LNqP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tabs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 





function TabList(param) {
    let { className, block, selectedValue, selectValue, tabValues } = param;
    const tabRefs = [];
    const { blockElementScrollPositionUntilNextRender } = (0,scrollUtils/* useScrollPositionBlocker */.o5)();
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
                    focusElement = tabRefs[nextTab] ?? tabRefs[0];
                    break;
                }
            case 'ArrowLeft':
                {
                    const prevTab = tabRefs.indexOf(event.currentTarget) - 1;
                    focusElement = tabRefs[prevTab] ?? tabRefs[tabRefs.length - 1];
                    break;
                }
            default:
                break;
        }
        focusElement?.focus();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
        role: "tablist",
        "aria-orientation": "horizontal",
        className: (0,clsx/* default */.Z)('tabs', {
            'tabs--block': block
        }, className),
        children: tabValues.map((param)=>{
            let { value, label, attributes } = param;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                // TODO extract TabListItem
                role: "tab",
                tabIndex: selectedValue === value ? 0 : -1,
                "aria-selected": selectedValue === value,
                ref: (tabControl)=>tabRefs.push(tabControl),
                onKeyDown: handleKeydown,
                onClick: handleTabChange,
                ...attributes,
                className: (0,clsx/* default */.Z)('tabs__item', styles_module.tabItem, attributes?.className, {
                    'tabs__item--active': selectedValue === value
                }),
                children: label ?? value
            }, value);
        })
    });
}
function TabContent(param) {
    let { lazy, children, selectedValue } = param;
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
            className: (0,clsx/* default */.Z)('margin-top--md', selectedTabItem.props.className)
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
        className: (0,clsx/* default */.Z)('tabs-container', styles_module.tabList),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabList, {
                ...tabs,
                ...props
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabContent, {
                ...tabs,
                ...props
            })
        ]
    });
}
function Tabs(props) {
    const isBrowser = (0,useIsBrowser/* default */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabsComponent, {
        ...props,
        children: sanitizeTabsChildren(props.children)
    }, String(isBrowser));
}


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