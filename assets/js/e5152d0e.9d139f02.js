"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[83236],{

/***/ 25062:
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
	id: 'foreign-project',
	title: '외부 프로젝트 연동과 설정',
	description: '외부 프로젝트 연동에 대해서 안내합니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'대시보드',
		'외부 프로젝트'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const contentTitle = undefined;
const metadata = {
  "id": "kubernetes/foreign-project",
  "title": "외부 프로젝트 연동과 설정",
  "description": "외부 프로젝트 연동에 대해서 안내합니다.",
  "source": "@site/docs/kubernetes/foreign-project.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/foreign-project",
  "permalink": "/whatap-docs/kubernetes/foreign-project",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/foreign-project.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "foreign-project",
    "title": "외부 프로젝트 연동과 설정",
    "description": "외부 프로젝트 연동에 대해서 안내합니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "대시보드",
      "외부 프로젝트"
    ],
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "컨테이너 맵 지표와 상태",
    "permalink": "/whatap-docs/kubernetes/container-status"
  },
  "next": {
    "title": "컨테이너 맵 상세 분석",
    "permalink": "/whatap-docs/kubernetes/container-map-detail-mode"
  }
};
const assets = {

};

/*쿠버네티스 환경에서의 애플리케이션과 데이터베이스를 프로젝트 단위로 모니터링할 수 있는 기능을 제공합니다.*/
/*와탭은 다양한 모니터링 서비스를 프로젝트 단위로 제공하고 있습니다. 쿠버네티스 프로젝트와 외부 프로젝트를 연동하여 통합적인 모니터링 체계를 구축할 수 있습니다. 이러한 연동을 위해서는 프로젝트 생성, 라이선스 설정, 에이전트 연동 옵션 활성화와 같은 과정을 거쳐야 하며, 이를 통해 통합 모니터링 환경을 구현할 수 있습니다.*/
/*외부 프로젝트 연동을 위해서는 에이전트 설정 및 사용자 정의 리소스 내 환경변수 설정이 필요합니다. 쿠버네티스 프로젝트와 외부 프로젝트를 연동하여 통합적인 모니터링 체계를 구축해 보세요.*/
/*외부 프로젝트 연동 기능은 쿠버네티스 프로젝트의 **파드(Pod)**와 관계된 외부 프로젝트를 연결하여 통합적인 모니터링 환경을 제공합니다. 이 기능을 활성화하려면 쿠버네티스 에이전트 설정과 연동 대상 파드 설정 두 가지 작업을 수행해야 합니다.*/
/*## 외부 프로젝트 연동 활성화*/
/*

외부 프로젝트 연동 설정 후 <Cmdname sid="side_metricsSearch" className="uitext" /> 메뉴로 이동하세요. 다음과 같이 ***카테고리 선택*** 버튼 클릭 시 **container_foreign_project_mapping** 카테고리가 표시되면 연동이 정상적으로 적용된 상태입니다.

<p align="center">

<ImgLang img='k8s-foreign-project-check.png' desc='외부 프로젝트 적용 확인' />

</p>

예시 이미지와 같이 ***카테고리 선택*** 버튼 클릭 시 `container_foreign_project_mapping` 카테고리가 표시되면 연동이 정상적으로 적용된 상태입니다.

*/


const toc = [{
  "value": "외부 프로젝트 연동",
  "id": "외부-프로젝트-연동",
  "level": 2
}, {
  "value": "외부 프로젝트 설정",
  "id": "외부-프로젝트-설정",
  "level": 2
}, {
  "value": "에이전트 설정",
  "id": "에이전트-설정",
  "level": 3
}, {
  "value": "예시",
  "id": "예시",
  "level": 4
}, {
  "value": "연동 대상 Pod 설정",
  "id": "연동-대상-pod-설정",
  "level": 3
}, {
  "value": "예시",
  "id": "예시-1",
  "level": 4
}, {
  "value": "외부 프로젝트 연동 확인",
  "id": "외부-프로젝트-연동-확인",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    admonition: "admonition",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    mdxAdmonitionTitle: "mdxAdmonitionTitle",
    p: "p",
    pre: "pre",
    section: "section",
    strong: "strong",
    ul: "ul",
    ...(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .R)(),
    ...props.components
  }, {Cmdname, Column, Columns, ImgLang} = _components;
  if (!Cmdname) _missingMdxReference("Cmdname", true);
  if (!Column) _missingMdxReference("Column", true);
  if (!Columns) _missingMdxReference("Columns", true);
  if (!ImgLang) _missingMdxReference("ImgLang", true);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["홈 화면 > 프로젝트 선택 > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "dashboard",
        className: "uitext"
      }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
        sid: "side_containerMap",
        className: "uitext"
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.mdxAdmonitionTitle, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "와탭 쿠버네티스 에이전트 1.7.16 버전 이상이 필요합니다."
      })]
    }), "\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
      children: ["와탭은 다양한 모니터링 서비스를 프로젝트 단위로 제공합니다. ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
        children: "외부 프로젝트 연동"
      }), " 기능을 통해 쿠버네티스 프로젝트의 Pod와 연관된 외부 프로젝트를 연동할 수 있습니다."]
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
      children: "외부 프로젝트 연동을 위해서는 쿠버네티스 에이전트 설정 및 연동 대상 Pod 설정이 필요합니다. 쿠버네티스 프로젝트와 외부 프로젝트를 연동하여 통합적인 모니터링 체계를 구축해 보세요."
    }), "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "외부-프로젝트-연동",
        children: "외부 프로젝트 연동"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "외부 프로젝트 연동 기능 활성화 시 다음과 같이 연동된 컨테이너 및 Pod에 해당 프로젝트 로고가 표시됩니다. 이를 통해 어떤 외부 프로젝트와 연동되었는지 시각적으로 쉽게 식별할 수 있습니다. 또한 해당 블록을 클릭하여 요약 보기 패널 내 버튼을 통해 해당 프로젝트로 이동할 수 있습니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
        align: "center",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
          img: "k8s-foreign-project-container-map.png",
          desc: "외부 프로젝트 예시 중 컨테이너 맵 sc"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.section, {
      className: "remark-sectionize-h2",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "외부-프로젝트-설정",
        children: "외부 프로젝트 설정"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "에이전트-설정",
        children: "에이전트 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["쿠버네티스 에이전트의 설치 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "YAML"
        }), " 파일에서 whatap-monitoring 네임스페이스의 whatap-node-agent DaemonSet 설정을 변경해야 합니다. 특히, whatap-node-agent 컨테이너의 env 섹션에 다음 환경 변수를 추가해야 합니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-yaml",
          children: "- name: \"collect_foreign_project\"\n  value: \"true\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "예시",
        children: "예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 환경변수가 추가된 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "YAML"
        }), " 파일의 예시입니다. 실제 운영 환경의 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "YAML"
        }), " 파일과 많은 차이가 있을 수 있기에 예시를 참고하여 필요한 부분만 수정 후 사용하세요. 하이라이팅된 라인이 추가된 환경 변수입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-yaml",
          metastring: "{75,76} ",
          children: "apiVersion: \"apps/v1\"\nkind: \"DaemonSet\"\nmetadata:\n  labels:\n    name: \"whatap-node-agent\"\n  name: \"whatap-node-agent\"\n  namespace: \"whatap-monitoring\"\nspec:\n  selector:\n    matchLabels:\n      name: \"whatap-node-agent\"\n  template:\n    metadata:\n      labels:\n        name: \"whatap-node-agent\"\n    spec:\n      containers:\n      - command:\n        - \"/data/agent/node/cadvisor_helper\"\n        - \"-port\"\n        - \"6801\"\n        env:\n        - name: \"NODE_NAME\"\n          valueFrom:\n            fieldRef:\n              fieldPath: \"spec.nodeName\"\n        image: \"whatap/kube_mon_dev:foreign-2\"\n        name: \"whatap-node-helper\"\n        ports:\n        - containerPort: 6801\n          name: \"helperport\"\n        resources:\n          limits:\n            cpu: \"200m\"\n            memory: \"350Mi\"\n          requests:\n            cpu: \"100m\"\n            memory: \"100Mi\"\n        volumeMounts:\n        - mountPath: \"/rootfs\"\n          name: \"rootfs\"\n          readOnly: true\n        - mountPath: \"/sys\"\n          name: \"hostsys\"\n          readOnly: true\n        - mountPath: \"/dev/disk\"\n          name: \"hostdiskdevice\"\n          readOnly: true\n        - mountPath: \"/run/containerd/containerd.sock\"\n          name: \"containerddomainsocket\"\n      - command:\n        - \"/bin/entrypoint.sh\"\n        env:\n        - name: \"NODE_IP\"\n          valueFrom:\n            fieldRef:\n              fieldPath: \"status.hostIP\"\n        - name: \"NODE_NAME\"\n          valueFrom:\n            fieldRef:\n              fieldPath: \"spec.nodeName\"\n        - name: \"WHATAP_LICENSE\"\n          value: \"x6050rs80f4eg-x1g0egm9rjb3mg-z7p9533a2ea87e\"\n        - name: \"WHATAP_HOST\"\n          value: \"13.124.11.223/13.209.172.35\"\n        - name: \"WHATAP_PORT\"\n          value: \"6600\"\n        - name: \"HOST_PREFIX\"\n          value: \"/rootfs\"\n        - name: \"WHATP_MEM_LIMIT\"\n          valueFrom:\n            resourceFieldRef:\n              containerName: \"whatap-node-agent\"\n              resource: \"limits.memory\"\n        - name: \"collect_foreign_project\"\n          value: \"true\"\n        image: \"whatap/kube_mon_dev:foreign-2\"\n        name: \"whatap-node-agent\"\n        ports:\n        - containerPort: 6600\n          name: \"nodeport\"\n        resources:\n          limits:\n            cpu: \"200m\"\n            memory: \"350Mi\"\n          requests:\n            cpu: \"100m\"\n            memory: \"300Mi\"\n        volumeMounts:\n        - mountPath: \"/rootfs\"\n          name: \"rootfs\"\n          readOnly: true\n        - mountPath: \"/bin/entrypoint.sh\"\n          name: \"start-script-volume\"\n          readOnly: true\n          subPath: \"entrypoint.sh\"\n        - mountPath: \"/whatap_conf\"\n          name: \"whatap-config-volume\"\n      initContainers:\n      - command:\n        - \"/data/agent/tools/whatap_debugger\"\n        - \"run\"\n        image: \"whatap/kube_mon_dev:foreign-2\"\n        name: \"whatap-node-debug\"\n        volumeMounts:\n        - mountPath: \"/rootfs\"\n          name: \"rootfs\"\n          readOnly: true\n      serviceAccount: \"whatap\"\n      tolerations:\n      - effect: \"NoSchedule\"\n        key: \"node-role.kubernetes.io/master\"\n      - effect: \"NoSchedule\"\n        key: \"node-role.kubernetes.io/control-plane\"\n      volumes:\n      - hostPath:\n          path: \"/\"\n        name: \"rootfs\"\n      - hostPath:\n          path: \"/sys\"\n        name: \"hostsys\"\n      - hostPath:\n          path: \"/dev/disk\"\n        name: \"hostdiskdevice\"\n      - configMap:\n          defaultMode: 448\n          name: \"node-start-script\"\n        name: \"start-script-volume\"\n      - emptyDir: {}\n        name: \"whatap-config-volume\"\n      - hostPath:\n          path: \"/run/containerd/containerd.sock\"\n        name: \"containerddomainsocket\"\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h3, {
        id: "연동-대상-pod-설정",
        children: "연동 대상 Pod 설정"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
        children: "연동하려는 Pod의 설정을 수정하세요. 예를 들어 Redis Pod를 연동하려는 경우 Redis 컨테이너의 env 섹션에 다음 환경 변수를 추가해야 합니다."
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-yaml",
          children: "- name: \"license\"\n  value: \"here_is_whatap_license\"\n- name: \"whatap_platform\"\n  value: \"redis\"\n"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "here_is_whatap_license "
            }), ": 외부 프로젝트의 라이선스 정보를 입력하세요."]
          }), "\n"]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
          children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
              children: "whatap_platform"
            }), ": 연동하려는 외부 프로젝트의 플랫폼을 입력하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h4",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h4, {
        id: "예시-1",
        children: "예시"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: ["다음은 Redis Pod 설정에 환경 변수를 추가한 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
          children: "YAML"
        }), " 파일의 예시입니다. 하이라이팅된 라인이 추가된 환경 변수입니다."]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.pre, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
          className: "language-yaml",
          metastring: "{31-34}",
          children: "apiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: redis-cluster\n  namespace: backend\nspec:\n  serviceName: redis-cluster-svc\n  replicas: 6\n  selector:\n    matchLabels:\n      app: redis-cluster\n  template:\n    metadata:\n      labels:\n        app: redis-cluster\n    spec:\n      containers:\n      - name: redis\n        image: redis:5.0.1-alpine\n        ports:\n        - containerPort: 6379\n          name: client\n        - containerPort: 16379\n          name: gossip\n        command: [\"/conf/update-node.sh\", \"redis-server\", \"/conf/redis.conf\"]\n        env:\n        - name: POD_IP\n          valueFrom:\n            fieldRef:\n              fieldPath: status.podIP\n        - name: license\n          value: x6050s081i709-z2lhh7gpi3bdr4-x7jovr61kumi5k\n        - name: whatap_platform\n          value: redis\n        volumeMounts:\n        - name: conf\n          mountPath: /conf\n          readOnly: false\n        - name: data\n          mountPath: /data\n          readOnly: false\n"
        })
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.h2, {
        id: "외부-프로젝트-연동-확인",
        children: "외부 프로젝트 연동 확인"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_analysis",
          className: "uitext"
        }), " > ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
          sid: "side_metricsSearch",
          className: "uitext"
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Columns, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Column, {
          className: "text--left width--50",
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ImgLang, {
            img: "k8s-foreign-project-check.png",
            desc: "외부 프로젝트 적용 확인"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Column, {
          className: "text--left",
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
            children: ["외부 프로젝트 연동 설정 후 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cmdname, {
              sid: "side_metricsSearch",
              className: "uitext"
            }), " 메뉴로 이동하세요. 예시 이미지와 같이 ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.em, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.strong, {
                children: "카테고리 선택"
              })
            }), " 버튼 클릭하세요."]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
            children: "다음 카테고리가 표시된다면 연동이 정상적으로 적용된 상태입니다."
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
            children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.p, {
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components.code, {
                children: "container_foreign_project_mapping"
              })
            }), "\n"]
          })]
        })]
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