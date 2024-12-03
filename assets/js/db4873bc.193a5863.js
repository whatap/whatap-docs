"use strict";
(self['webpackChunkWhaTap_Docs'] = self['webpackChunkWhaTap_Docs'] || []).push([["94199"], {
"95520": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_kubernetes_etcd_dashboard_mdx_db4_namespaceObject),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  assets: () => (/* binding */ assets),
  toc: () => (/* binding */ toc),
  frontMatter: () => (/* binding */ frontMatter)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-kubernetes-etcd-dashboard-mdx-db4.json
var site_docs_kubernetes_etcd_dashboard_mdx_db4_namespaceObject = JSON.parse('{"id":"kubernetes/etcd-dashboard","title":"etcd 대시보드","description":"etcd 대시보드를 안내합니다.","source":"@site/docs/kubernetes/etcd-dashboard.mdx","sourceDirName":"kubernetes","slug":"/kubernetes/etcd-dashboard","permalink":"/kubernetes/etcd-dashboard","draft":false,"unlisted":false,"editUrl":"undefined/docs/kubernetes/etcd-dashboard.mdx","tags":[],"version":"current","frontMatter":{"id":"etcd-dashboard","title":"etcd 대시보드","description":"etcd 대시보드를 안내합니다.","keywords":["쿠버네티스","쿠버네티스 모니터링","etcd","컨트롤 플레인"],"toc_max_heading_level":3,"isTranslationMissing":false},"sidebar":"kubeSidebar","previous":{"title":"kube-apiserver 메트릭스 조회","permalink":"/kubernetes/kube-apiserver-metrics-search"},"next":{"title":"Service 목록","permalink":"/kubernetes/service-list"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("85893");
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("50065");
;// CONCATENATED MODULE: ./docs/kubernetes/etcd-dashboard.mdx


const frontMatter = {
	id: 'etcd-dashboard',
	title: 'etcd 대시보드',
	description: 'etcd 대시보드를 안내합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'etcd',
		'컨트롤 플레인'
	],
	toc_max_heading_level: 3,
	isTranslationMissing: false
};
const contentTitle = undefined;

const assets = {

};

/*프로젝트 데이터가 없음. 다국어 이미지는 나중에*/
/*•	etcd 리소스 사용량
•	CPU 및 메모리 사용량, 파드 재기동 수, 관련 로그 데이터 제공.
•	작업 처리 상태
•	etcd의 commit 및 apply 횟수.
•	리더 상태 추적
•	etcd 리더의 존재 여부와 리더 변경 이력.*/
/*경로에서 필요한 인증서 파일(*ca.crt*, *server.crt*, *server.key*)이 존재하는지 확인하려면 다음 명령어를 실행하세요.*/
/*root 계정에서 `kubectl` 명령을 사용할 수 없는 경우 인증서 파일을 복제한 뒤 소유자를 변경하여 등록하세요.*/


const toc = [{
  "value": "기본 화면 안내",
  "id": "기본-화면-안내",
  "level": 2
}, {
  "value": "etcd 모니터링 활성화",
  "id": "etcd-모니터링-활성화",
  "level": 2
}, {
  "value": "인증서 확인 및 Secret 생성",
  "id": "인증서-확인-및-secret-생성",
  "level": 3
}, {
  "value": "etcd 인증서 확인",
  "id": "etcd-인증서-확인",
  "level": 4
}, {
  "value": "Secret 생성",
  "id": "secret-생성",
  "level": 4
}, {
  "value": "root 계정을 사용할 수 없는 경우",
  "id": "root-계정을-사용할-수-없는-경우",
  "level": 5
}, {
  "value": "네임스페이스가 없을 경우",
  "id": "네임스페이스가-없을-경우",
  "level": 5
}, {
  "value": "와탭 쿠버네티스 에이전트 <em>YAML</em> 수정",
  "id": "와탭-쿠버네티스-에이전트-yaml-수정",
  "level": 3
}, {
  "value": "컨테이너 설정",
  "id": "컨테이너-설정",
  "level": 4
}, {
  "value": "Secret 연결",
  "id": "secret-연결",
  "level": 4
}, {
  "value": "전체 <em>YAML</em> 예시",
  "id": "전체-yaml-예시",
  "level": 4
}, {
  "value": "etcd 메트릭",
  "id": "etcd-metrics",
  "level": 2
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
    h5: "h5",
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
  }, {Cmdname, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["홈 화면 > 클러스터 프로젝트 선택(", (0,jsx_runtime.jsx)("code", {
        class: "my",
        children: "CP"
      }), ") > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_cluster",
        className: "uitext"
      }), " > ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_etcdDashboard",
        className: "uitext"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "요구 사항"
        })
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "와탭 쿠버네티스 에이전트 1.7.16 버전 이상이 필요합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["쿠버네티스 클러스터 프로젝트(", (0,jsx_runtime.jsx)("code", {
              class: "my",
              children: "CP"
            }), ")일 경우 해당 메뉴를 조회할 수 있습니다."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "etcd"
      }), "는 쿠버네티스 환경에서 클러스터 상태와 관련된 데이터를 저장하는 핵심 컴포넌트입니다. 와탭은 etcd의 성능과 상태를 모니터링할 수 있는 ", (0,jsx_runtime.jsx)(Cmdname, {
        sid: "side_etcdDashboard",
        className: "uitext"
      }), "를 제공합니다. 이를 통해 클러스터의 안정성을 높이고 문제 발생 시 신속한 대응이 가능합니다."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "기본-화면-안내",
        children: "기본 화면 안내"
      }), (0,jsx_runtime.jsx)(ImgLang, {
        img: "k8s-etcd-dashboard.png",
        desc: "etcd 대시보드"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(Cmdname, {
          sid: "side_etcdDashboard",
          className: "uitext"
        }), "는 최근 1시간 동안 수집된 주요 etcd 지표를 1분 주기로 제공합니다. 대시보드에서 확인할 수 있는 주요 지표는 다음과 같습니다. 지표 상세는 하단 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "#etcd-metrics",
          children: "메트릭 안내"
        }), "를 참조하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "etcd가 사용하는 리소스, Pod 재기동 수, 상세 로그를 제공합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "etcd 내부의 commit 및 apply 횟수를 제공합니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "etcd 리더의 존재 여부 및 리더의 변경 이력을 제공합니다."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "etcd-모니터링-활성화",
        children: "etcd 모니터링 활성화"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 쿠버네티스 에이전트 설치 시 다운로드한 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), " 파일 수정 및 mTLS 인증서를 등록하여 에이전트를 활성화하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.section, {
      className: "remark-sectionize-h3",
      children: (0,jsx_runtime.jsx)(_components.h3, {
        id: "인증서-확인-및-secret-생성",
        children: "인증서 확인 및 Secret 생성"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "etcd-인증서-확인",
        children: "etcd 인증서 확인"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["etcd의 mTLS 인증서가 필요합니다. etcd 인증서는 일반적으로 Control Plane 노드의 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "/etc/kubernetes/pki/etcd"
        }), " 경로에 저장됩니다. 파일 소유자는 root 계정이며 필요한 인증서는 다음과 같습니다."]
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "ca.crt"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "server.crt"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "server.key"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "kubectl"
        }), " 명령을 실행할 머신에서 다음 명령어를 통해 인증서가 존재하는지 확인하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "sudo ls /etc/kubernetes/pki/etcd\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "secret-생성",
        children: "Secret 생성"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "인증서가 존재하면 다음 명령어를 통해 Secret을 생성하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "sudo kubectl create secret generic whatap-etcd-cert -n whatap-monitoring --from-file=ca.crt=/etc/kubernetes/pki/etcd/ca.crt --from-file=server.crt=/etc/kubernetes/pki/etcd/server.crt --from-file=server.key=/etc/kubernetes/pki/etcd/server.key\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "정상적으로 Secret 생성 시 다음과 같은 메시지가 출력됩니다."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "secret/whatap-etcd-cert created\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "root-계정을-사용할-수-없는-경우",
        children: "root 계정을 사용할 수 없는 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["root 계정에서 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "kubectl"
        }), " 명령을 사용할 수 없는 경우 다음 안내를 참조하세요."]
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "인증서 복제 후 접근 가능한 경로로 이동하세요."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "복제된 인증서 파일의 소유자를 현재 소유자로 변경하세요."
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h5",
      children: [(0,jsx_runtime.jsx)(_components.h5, {
        id: "네임스페이스가-없을-경우",
        children: "네임스페이스가 없을 경우"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["쿠버네티스 에이전트 YAML 적용 전에 Secret을 만드는 경우 ", (0,jsx_runtime.jsx)(_components.code, {
          children: "whatap-monitoring"
        }), " 네임스페이스가 존재하지 않아 Secret 생성에 실패할 수 있습니다. 다음 명령어를 통해 네임스페이스를 생성한 후 다시 Secret을 생성하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-bash",
          children: "kubectl create namespace whatap-monitoring\n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsxs)(_components.h3, {
        id: "와탭-쿠버네티스-에이전트-yaml-수정",
        children: ["와탭 쿠버네티스 에이전트 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), " 수정"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["와탭 쿠버네티스 에이전트 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), " 파일을 수정하여 컨테이너 설정을 추가 후 Secret을 연결하세요."]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "컨테이너-설정",
        children: "컨테이너 설정"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Deployment의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-control-plane-helper"
            }), " 컨테이너 내 args 섹션에 etcd 관련 설정을 추가하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-yaml",
              children: "-collect_etcd_monitoring_enabled=true\n-etcd_hosts=사용자의_etcd_ip,사용자의_etcd_ip\n"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "다음 예시를 참조하세요."
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-yaml",
              metastring: "title='Example'",
              children: "-etcd_hosts=192.168.1.45,192.168.1.46,192.168.1.47\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Deployment의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-master-agent"
            }), " 컨테이너의 환경 변수(env)에 다음 내용을 추가하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-yaml",
              children: "- name: \"collect_etcd_monitoring_enabled\"\n  value: \"true\"\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsx)(_components.h4, {
        id: "secret-연결",
        children: "Secret 연결"
      }), (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Deployment의 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-master-agent"
            }), " 내 volumes 섹션에 Secret을 추가하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-yaml",
              children: "- name: \"whatap-etcd-cert\"\n  secret:\n    secretName: \"whatap-etcd-cert\"\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "whatap-control-plane-helper"
            }), " 컨테이너에 해당 Secret을 마운트하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-yaml",
              children: "volumeMounts:\n  - name: \"whatap-etcd-cert\"\n    readOnly: true\n    mountPath: \"/etc/kubernetes/pki/etcd\"\n"
            })
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,jsx_runtime.jsxs)(_components.h4, {
        id: "전체-yaml-예시",
        children: ["전체 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), " 예시"]
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["다음은 모든 설정이 적용된 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "YAML"
        }), " 파일 예시입니다. 하이라이팅된 부분을 참조하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          metastring: "{31-32,55-56,64-67,76-78} ",
          children: "apiVersion: \"apps/v1\"\nkind: \"Deployment\"\nmetadata:\n  name: \"whatap-master-agent\"\n  namespace: \"whatap-monitoring\"\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      name: \"whatap-master-agent\"\n  template:\n    metadata:\n      labels:\n        name: \"whatap-master-agent\"\n    spec:\n      containers:\n      - command:\n        - \"/bin/entrypoint.sh\"\n        env:\n        - name: \"WHATAP_LICENSE\"\n          value: \"x208gnc8i1kko-z2p19shk7npc4t-z788sgbj3n123a\"\n        - name: \"WHATAP_HOST\"\n          value: \"59.13.101.109\"\n        - name: \"WHATAP_PORT\"\n          value: \"61574\"\n        - name: \"WHATP_MEM_LIMIT\"\n          valueFrom:\n            resourceFieldRef:\n              containerName: \"whatap-master-agent\"\n              resource: \"limits.memory\"\n        - name: \"collect_control_plane_monitoring_enabled\"\n          value: \"true\"\n        - name: \"collect_etcd_monitoring_enabled\"\n          value: \"true\"\n        image: \"whatap/kube_mon\"\n        name: \"whatap-master-agent\"\n        ports:\n        - containerPort: 6600\n        resources:\n          limits:\n            cpu: \"200m\"\n            memory: \"350Mi\"\n          requests:\n            cpu: \"100m\"\n            memory: \"300Mi\"\n        volumeMounts:\n        - mountPath: \"/bin/entrypoint.sh\"\n          name: \"start-script-volume\"\n          readOnly: true\n          subPath: \"entrypoint.sh\"\n        - mountPath: \"/whatap_conf\"\n          name: \"whatap-config-volume\"\n      - args:\n        - \"-collect_control_plane_monitoring_enabled=true\"\n        - \"-collect_etcd_monitoring_enabled=true\"\n        - \"-etcd_hosts=192.168.1.45,192.168.1.46,192.168.1.47\"\n        command:\n        - \"/data/agent/master/whatap_control_plane_helper\"\n        image: \"whatap/kube_mon\"\n        imagePullPolicy: \"Always\"\n        name: \"whatap-control-plane-helper\"\n        ports:\n        - containerPort: 9496\n        volumeMounts:\n          - name: \"whatap-etcd-cert\"\n            readOnly: true\n            mountPath: \"/etc/kubernetes/pki/etcd\"\n      serviceAccount: \"whatap\"\n      volumes:\n      - configMap:\n          defaultMode: 448\n          name: \"master-start-script\"\n        name: \"start-script-volume\"\n      - emptyDir: {}\n        name: \"whatap-config-volume\"\n      - name: \"whatap-etcd-cert\"\n        secret:\n          secretName: \"whatap-etcd-cert\" \n"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "etcd-metrics",
        children: "etcd 메트릭"
      }), (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "구분"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "설명"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Pod 수"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "현재 존재하는 etcd 파드의 수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "etcd 재기동 수 추이"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 재기동 횟수 합계 추이"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "리더 변경 추이"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 리더 변경 횟수 추이"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "리더 존재 유/무"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "리더 역할을 하는 etcd 파드의 존재 여부"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CPU 사용량 합계"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 CPU 사용량 합계"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CPU 사용량"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 CPU 사용량 추이"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Memory 사용량 합계"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 메모리 사용량 합계"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Memory 사용량"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드 메모리 사용량 추이"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Commit 추이"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 변경 사항 commit 횟수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Apply 추이"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "commit 이후 apply 된 횟수"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: (0,jsx_runtime.jsx)(_components.em, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "etcd 로그"
                })
              })
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "etcd 파드에서 발생한 로그"
            })]
          })]
        })]
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