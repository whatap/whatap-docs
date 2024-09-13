"use strict";
(self["webpackChunkWhaTap_Docs"] = self["webpackChunkWhaTap_Docs"] || []).push([[45529],{

/***/ 79089:
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
;// CONCATENATED MODULE: ./docs/kubernetes/_check-install-agent.mdx


const frontMatter = {};
const contentTitle = (/* unused pure expression or super */ null && (undefined));





const toc = [{
  "value": "에이전트 설치 확인",
  "id": "에이전트-설치-확인",
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
      id: "에이전트-설치-확인",
      children: "에이전트 설치 확인"
    }), (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["에이전트를 제대로 설치했는지 확인하려면 ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "대시보드"
            })
          }), " > ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "애플리케이션 서비스 대시보드"
            })
          }), " 메뉴로 이동하세요."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["다운로드한 파일을 직접 설치한 다음 ", (0,jsx_runtime.jsx)(_components.em, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "대시보드"
            })
          }), " 메뉴에서 에이전트를 확인할 수 없다면 다음 사항을 확인하세요."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["컨테이너에서 ", (0,jsx_runtime.jsx)(_components.code, {
                children: "ps -ef | grep whatap"
              }), " 명령어를 실행해 에이전트 옵션을 적용했는지 확인하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["컨테이너의 ", (0,jsx_runtime.jsx)(_components.em, {
                children: "/whatap/logs"
              }), " 경로의 내용을 확인하세요. 에이전트 로그는 ", (0,jsx_runtime.jsxs)(_components.em, {
                children: ["logs/", (0,jsx_runtime.jsx)(_components.code, {
                  children: "{whatap 설정파일명}"
                }), "-yyyymmdd.log"]
              }), " 형식의 파일명으로 출력됩니다."]
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


;// CONCATENATED MODULE: ./docs/kubernetes/install-docker-java.mdx


const install_docker_java_frontMatter = {
	id: 'install-docker-java',
	title: 'Docker Java 설치',
	description: '컨테이너 내 Java 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.',
	keywords: [
		'쿠버네티스',
		'쿠버네티스 모니터링',
		'애플리케이션 설치',
		'Java'
	],
	toc_max_heading_level: 2,
	isTranslationMissing: false
};
const install_docker_java_contentTitle = undefined;
const metadata = {
  "id": "kubernetes/install-docker-java",
  "title": "Docker Java 설치",
  "description": "컨테이너 내 Java 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.",
  "source": "@site/docs/kubernetes/install-docker-java.mdx",
  "sourceDirName": "kubernetes",
  "slug": "/kubernetes/install-docker-java",
  "permalink": "/kubernetes/install-docker-java",
  "draft": false,
  "unlisted": false,
  "editUrl": "undefined/docs/kubernetes/install-docker-java.mdx",
  "tags": [],
  "version": "current",
  "frontMatter": {
    "id": "install-docker-java",
    "title": "Docker Java 설치",
    "description": "컨테이너 내 Java 애플리케이션을 모니터링하기 위한 에이전트 설치 단계입니다.",
    "keywords": [
      "쿠버네티스",
      "쿠버네티스 모니터링",
      "애플리케이션 설치",
      "Java"
    ],
    "toc_max_heading_level": 2,
    "isTranslationMissing": false
  },
  "sidebar": "kubeSidebar",
  "previous": {
    "title": "애플리케이션 에이전트 설치",
    "permalink": "/kubernetes/install-application-agent"
  },
  "next": {
    "title": "Docker Node.js 설치",
    "permalink": "/kubernetes/install-docker-nodejs"
  }
};
const assets = {

};

/*:::note

*whatap.conf* 파일은 사용자 쿠버네티스 환경의 ConfigMap 기능을 통해 관리할 수 있습니다.

:::*/
/*:::note

설정 파일의 내용이 변경되거나 중요한 설정 항목이 소실될 경우 정상적으로 동작하지 않을 가능성이 있기에 쿠버네티스 환경 내 **컨테이너 환경변수** 설정을 권장합니다.

:::*/





const install_docker_java_toc = [{
  "value": "에이전트 다운로드",
  "id": "에이전트-다운로드",
  "level": 2
}, {
  "value": "쿠버네티스 내부 애플리케이션 에이전트 옵션 설정",
  "id": "쿠버네티스-내부-애플리케이션-에이전트-옵션-설정",
  "level": 4
}, {
  "value": "보안키 설정하기",
  "id": "security",
  "level": 3
}, {
  "value": "컨테이너 환경변수 설정",
  "id": "컨테이너-환경변수-설정",
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
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "관리"
        })
      }), " > ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "에이전트 설치"
        })
      }), " > 하단의 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "애플리케이션 설치"
        })
      }), " 클릭 > 설치 안내 중 ", (0,jsx_runtime.jsx)(_components.em, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Docker Java"
        })
      }), " 탭 선택"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Docker 컨테이너 기반으로 실행하는 Java 애플리케이션의 JVM Option에 에이전트 적용을 위한 설정을 추가하고 컨테이너 이미지를 패키징하는 과정을 다음과 같이 안내합니다."
    }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
      type: "note",
      children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "EKS Fargate는 지원 예정입니다."
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Java 애플리케이션 연동 과정에 대한 이해를 돕고자 Git 예시 코드를 제공합니다. ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/whatap/kuber-apm-boilerplate/tree/main/java/springboot",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), "\n"]
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "에이전트-다운로드",
        children: "에이전트 다운로드"
      }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
        groupId: "k8stype2",
        children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
          value: "dockerinstall",
          label: "Docker Install",
          default: true,
          children: [(0,jsx_runtime.jsxs)(_components.p, {
            children: ["와탭 애플리케이션 에이전트 설치를 위해 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " 파일을 생성하세요. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{YOUR_PROJECT_ROOT}"
            }), "는 에이전트를 설치하려는 프로젝트의 최상위 경로로 변경하세요."]
          }), (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-bash",
              children: "cat >{YOUR_PROJECT_ROOT}/whatap.conf <<EOL\nwhatap.server.host={proxyServer}\nEOL\n"
            })
          }), (0,jsx_runtime.jsx)(_components.h4, {
            id: "쿠버네티스-내부-애플리케이션-에이전트-옵션-설정",
            children: "쿠버네티스 내부 애플리케이션 에이전트 옵션 설정"
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["쿠버네티스 내부 애플리케이션 에이전트에 필요한 설정을 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "whatap.conf"
            }), " 파일에 작성하거나 또는 에이전트 배포 시 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
              children: "env"
            }), " 필드를 통해 설정할 수 있습니다."]
          }), (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " 파일 내 옵션이 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), " 필드에 설정된 옵션보다 높은 우선순위를 가집니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " 또는 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "env"
                }), "에 설정된 값이 없는 경우 기본값이 사용됩니다."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.code, {
                  children: "license"
                }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "whatap.server.host"
                }), " 옵션의 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "컨테이너 환경변수"
                }), " 설정을 활용하세요."]
              }), "\n"]
            }), "\n"]
          }), (0,jsx_runtime.jsxs)(_components.p, {
            children: ["설정 파일의 내용이 변경되거나 중요한 설정 항목이 소실될 경우 정상적으로 동작하지 않을 가능성이 있기에 쿠버네티스 환경 내 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "컨테이너 환경변수"
            }), " 설정을 권장합니다. 그외 에이전트 기능 제어 옵션에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://docs.whatap.io/java/agent-control-function",
              children: "다음 문서"
            }), "를 참조하세요."]
          }), (0,jsx_runtime.jsxs)(_components.admonition, {
            type: "note",
            children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "쿠버네티스 환경 내 사용 불가 옵션"
              })
            }), (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.name"
                  }), ": 수집 서버가 에이전트를 식별하는 고유한 이름입니다. 해당 이름은 에이전트가 실행 중인 오브젝트 정보를 기반으로 생성됩니다. 사용자 임의 지정 시 에이전트 식별에 문제가 생길 수 있습니다."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.code, {
                    children: "whatap.onode"
                  }), ": 기본값으로 쿠버네티스 클러스터 노드 이름이 설정됩니다. 에이전트가 속한 노드 정보를 제공받기 위해 사용됩니다. 사용자 임의 지정 시 정확한 노드 식별이 어려워질 수 있습니다."]
                }), "\n"]
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(Tabs/* default */.A, {
            children: [(0,jsx_runtime.jsxs)(TabItem/* default */.A, {
              value: "latest",
              label: "최신 버전 에이전트를 이미지에 포함",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "최신 버전 에이전트"
                }), "를 애플리케이션 이미지에 포함시킬 수 있도록 안내합니다."]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["애플리케이션 이미지에 와탭 에이전트를 포함시키려면 먼저 Dockrfile 최종 이미지 빌드 단계에서 다음 내용을 추가하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), "를 에이전트를 설치하려는 프로젝트의 최상위 경로로 변경하세요."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# 와탭 에이전트용 디렉터리를 사용자 컨테이너에 생성\nRUN mkdir -p /whatap\n\n# 와탭 Java 에이전트를 사용자 컨테이너에 복사\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\n\n# 생성한 whatap.conf 설정 파일을 사용자 컨테이너에 복사\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "Dockerfile의 시작 명령어에 다음 내용을 추가하세요."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent.kube.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "다음 Dockerfile의 정의 예시를 참고하세요."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\nRUN mkdir -p /app && mkdir /whatap\nWORKDIR /app\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent.kube.jar /whatap\nCOPY ./whatap.conf /whatap\nCOPY ./target/myApp.jar /app/\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent.kube.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Docker를 빌드하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), "를 Dockerfile이 위치한 경로로 변경하세요."]
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
              label: "지정한 버전 에이전트를 이미지에 포함",
              default: true,
              children: [(0,jsx_runtime.jsxs)(_components.p, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: "지정한 버전 에이전트"
                }), "를 애플리케이션 이미지에 포함시킬 수 있도록 안내합니다."]
              }), (0,jsx_runtime.jsxs)(_components.ol, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["애플리케이션 이미지에 와탭 에이전트를 포함시키려면 먼저 Dockrfile 최종 이미지 빌드 단계에서 다음 내용을 추가하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_PROJECT_ROOT}"
                    }), "를 에이전트를 설치하려는 프로젝트의 최상위 경로로 변경하세요."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      children: "# 와탭 에이전트용 디렉터리를 사용자 컨테이너에 생성\nRUN mkdir -p /whatap\n\n# 와탭 Java 에이전트를 사용자 컨테이너에 복사\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\n\n# 생성한 whatap.conf 설정 파일을 사용자 컨테이너에 복사\nCOPY {YOUR_PROJECT_ROOT}/whatap.conf /whatap/\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "현재 와탭 에이전트 버전을 확인하세요."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "docker run whatap/kube_mon ls /data/agent/micro | grep -E 'whatap\\.agent-(.*?\\.)(.*?\\.)(.*?\\.)jar' | sort | tail -1\n\n# 출력 예시\n## whatap.agent-X.Y.Z.jar\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Dockerfile의 시작 명령어에 다음 내용을 추가하세요. ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "X.Y.Z"
                    }), " 부분에 앞서 확인한 에이전트 버전을 입력하세요."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-bash",
                      children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                    })
                  }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                    children: "다음 Dockerfile의 정의 예시를 참조하세요."
                  }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      className: "language-docker",
                      metastring: "title='Dockerfile' showLineNumbers {4,7}",
                      children: "FROM openjdk:8-jdk-slim\nRUN mkdir -p /app && mkdir /whatap\nWORKDIR /app\nCOPY --from=whatap/kube_mon /data/agent/micro/whatap.agent-*.jar /whatap\nCOPY ./whatap.conf /whatap\nCOPY ./target/myApp.jar /app/\nCMD [\"java\",\"-javaagent:/whatap/whatap.agent-X.Y.Z.jar\",\"-Dwhatap.micro.enabled=true\",\"-jar\",\"/app/myApp.jar\"]\nEXPOSE 8080\n"
                    })
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                    children: ["Docker를 빌드하세요. ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "{YOUR_DOCKERFILE_DIR}"
                    }), "를 Dockerfile이 위치한 경로로 변경하세요."]
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
          label: "직접 설치",
          children: [(0,jsx_runtime.jsxs)(_components.ol, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["설치 파일(", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.agent.java.tar.gz"
                }), ")을 다운로드하려면 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "다운로드"
                  })
                }), " 버튼을 선택하세요."]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "Dockerfile을 작성할 수 있는 서버에 업로드한 다음 압축을 해제하세요."
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: "설치할 서버에 직접 다운로드하려면 다음 명령어를 실행하세요."
                }), (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    className: "language-bash",
                    children: "wget https://api.whatap.io/agent/whatap.agent.java.tar.gz\n"
                  })
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["압축 해제 시 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " 디렉터리가 생성됩니다. ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " 디렉터리 내부의 ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap.conf"
                }), " 파일에서 설정 내용을 확인 후 다음과 같이 수정하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-ini",
                  children: "license={licenseKey}\nwhatap.server.host={proxyServer}\n"
                })
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "info",
                children: [(0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "쿠버네티스 내부 애플리케이션 에이전트 옵션 설정"
                  })
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["쿠버네티스 내부 애플리케이션 에이전트에 필요한 설정을 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.conf"
                  }), " 파일에 작성하거나 또는 에이전트 배포 시 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
                    children: "env"
                  }), " 필드를 통해 설정할 수 있습니다."]
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), " 파일 내 옵션이 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), " 필드에 설정된 옵션보다 높은 우선순위를 가집니다."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.em, {
                        children: "whatap.conf"
                      }), " 또는 컨테이너 ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "env"
                      }), "에 설정된 값이 없는 경우 기본값이 사용됩니다."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "license"
                      }), " 및 ", (0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.server.host"
                      }), " 옵션의 경우 ", (0,jsx_runtime.jsx)(_components.strong, {
                        children: "컨테이너 환경변수"
                      }), " 설정을 활용하세요."]
                    }), "\n"]
                  }), "\n"]
                }), (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["설정 파일의 내용이 변경되거나 중요한 설정 항목이 소실될 경우 정상적으로 동작하지 않을 가능성이 있기에 쿠버네티스 환경 내 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "컨테이너 환경변수"
                  }), " 설정을 권장합니다. 그외 에이전트 기능 제어 옵션에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/agent-control-function",
                    children: "다음 문서"
                  }), "를 참조하세요."]
                })]
              }), "\n", (0,jsx_runtime.jsxs)(_components.admonition, {
                type: "note",
                children: [(0,jsx_runtime.jsx)(_components.mdxAdmonitionTitle, {}), (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "쿠버네티스 환경 내 사용 불가 옵션"
                  })
                }), (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.name"
                      }), ": 수집 서버가 에이전트를 식별하는 고유한 이름입니다. 해당 이름은 에이전트가 실행 중인 오브젝트 정보를 기반으로 생성됩니다. 사용자 임의 지정 시 에이전트 식별에 문제가 생길 수 있습니다."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.code, {
                        children: "whatap.onode"
                      }), ": 기본값으로 쿠버네티스 클러스터 노드 이름이 설정됩니다. 에이전트가 속한 노드 정보를 제공받기 위해 사용됩니다. 사용자 임의 지정 시 정확한 노드 식별이 어려워질 수 있습니다."]
                    }), "\n"]
                  }), "\n"]
                })]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                children: ["Dockerfile의 시작 명령어에 다음 내용을 추가하세요. ", (0,jsx_runtime.jsx)(_components.em, {
                  children: "whatap"
                }), " 디렉터리 내부에서 에이전트 파일을 확인 후 ", (0,jsx_runtime.jsx)(_components.strong, {
                  children: "X.Y.Z"
                }), " 부분에 해당 버전을 입력하세요."]
              }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  className: "language-bash",
                  children: "-javaagent:/whatap/whatap.agent-X.Y.Z.jar -Dwhatap.micro.enabled=true\n"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                children: "다음 Dockerfile의 정의 예시를 참조하세요."
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
                  }), ": 모니터링 대상(샘플 애플리케이션)"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-X.Y.Z.jar"
                  }), ": 와탭 에이전트"]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["에이전트의 파일명이 ", (0,jsx_runtime.jsx)(_components.em, {
                    children: "whatap.agent-1.2.3.jar"
                  }), "이라면 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "X.Y.Z"
                  }), " 부분을 ", (0,jsx_runtime.jsx)(_components.strong, {
                    children: "1.2.3"
                  }), "으로 변경하세요."]
                }), "\n"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: ["JVM 옵션 추가에 대한 자세한 내용은 ", (0,jsx_runtime.jsx)(_components.a, {
                    href: "https://docs.whatap.io/java/install-agent#addjvmopt",
                    children: "다음 문서"
                  }), "를 참조하세요."]
                }), "\n"]
              }), "\n"]
            })
          })]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "tip",
        children: (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Java 17 버전 이상의 경우 reflection 관련 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "--add-opens=java.base/java.lang=ALL-UNNAMED"
          }), " 옵션을 추가하세요."]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h3",
      children: [(0,jsx_runtime.jsx)(_components.h3, {
        id: "security",
        children: "보안키 설정하기"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "SQL 변수, HTTP 쿼리를 조회하거나 Thread 중지 기능 이용하려면 보안키를 설정하세요."
      }), (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 에이전트 2.2.2 버전 이상"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), " 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "security.conf"
            }), " 파일을 생성한 후 다음과 같이 6자리 영어, 숫자로 구성된 암호를 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='security.conf'",
              children: "paramkey=ABCDEF # SQL 변수 및 HTTP 쿼리 조회\nthreadkill=ABCDEF # Thread 중지 기능\n"
            })
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "Java 에이전트 2.2.2 버전 미만"
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "$WHATAP_HOME"
            }), " 경로에 ", (0,jsx_runtime.jsx)(_components.em, {
              children: "paramkey.txt"
            }), " 파일을 생성한 후 다음과 같이 6자리 영어, 숫자로 구성된 암호를 입력하세요."]
          }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              className: "language-ini",
              metastring: "title='paramkey.txt'",
              children: "ABCDEF # SQL 변수 및 HTTP 쿼리 조회, Thread 중지 기능\n"
            })
          }), "\n"]
        }), "\n"]
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "tip",
        children: [(0,jsx_runtime.jsxs)(_components.p, {
          children: ["Java 에이전트 2.2.2 버전 미만에서 2.2.2 버전으로 업데이트하는 경우 기존 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " 파일의 키값은 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "seuciry.conf"
          }), " 파일의 키값으로 자동 적용됩니다. 예를 들어, ", (0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), "에 ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FEDCBA"
          }), "를 사용한 상태에서 2.2.2 버전으로 업데이트했다면, ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " 파일에는 다음과 같이 적용됩니다."]
        }), (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-ini",
            children: "paramkey=FEDCBA\nthreadkill=FEDCBA\n"
          })
        }), (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.em, {
            children: "paramkey.txt"
          }), " 파일이 존재하지 않을 경우 ", (0,jsx_runtime.jsx)(_components.em, {
            children: "security.conf"
          }), " 파일의 키값은 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "WHATAP"
          }), "이라는 키값으로 자동 생성됩니다."]
        })]
      }), (0,jsx_runtime.jsx)(_components.admonition, {
        type: "note",
        children: (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["SQL 파라미터 정보 기록과 관련한 에이전트 설정은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-dbsql#profile-sql-param",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["HTTP 파라미터 정보 기록과 관련한 에이전트 설정은 ", (0,jsx_runtime.jsx)(_components.a, {
                href: "../java/agent-transaction#profile_http_parameter",
                children: "다음 문서"
              }), "를 참조하세요."]
            }), "\n"]
          }), "\n"]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.section, {
      className: "remark-sectionize-h2",
      children: [(0,jsx_runtime.jsx)(_components.h2, {
        id: "컨테이너-환경변수-설정",
        children: "컨테이너 환경변수 설정"
      }), (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Docker 빌드 후 쿠버네티스 환경 내 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "컨테이너 환경변수"
        }), "를 설정하세요. 애플리케이션 배포 ", (0,jsx_runtime.jsx)(_components.em, {
          children: "yaml"
        }), " 파일에 다음 내용을 추가하세요."]
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "env:\n- name: NODE_IP\n  valueFrom: {fieldRef: {fieldPath: status.hostIP}}\n- name: NODE_NAME\n  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}\n- name: POD_NAME\n  valueFrom: {fieldRef: {fieldPath: metadata.name}}\n- name: OKIND\n  value: {YOUR_OKIND_NAME}\n- name: license\n  value: {licenseKey}\n- name: whatap.server.host\n  value: {proxyServer}\n- name: whatap.micro.enabled\n  value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: "다음 예시를 참조하세요."
      }), (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-yaml",
          children: "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: #DeploymentName\n  labels:\n    app: #AppLabel\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: #AppLabel\n  template:\n    metadata:\n      labels:\n        app: #AppLabel\n    spec:\n      containers:\n      - name: #ContainerName\n        image: nginx\n        ports:\n        - containerPort: 80\n        env:\n        - name: NODE_IP\n          valueFrom: {fieldRef: {fieldPath: \"status.hostIP\"}}\n        - name: NODE_NAME\n          valueFrom: {fieldRef: {fieldPath: \"spec.nodeName\"}}\n        - name: POD_NAME\n          valueFrom: {fieldRef: {fieldPath: \"metadata.name \"}}\n        - name: OKIND\n          value: #DeploymentName\n        - name: license\n          value: #licenseKey\n        - name: whatap.server.host\n          value: #proxyServer\n        - name: whatap.micro.enabled\n          value: \"true\"\n"
        })
      }), (0,jsx_runtime.jsxs)(_components.admonition, {
        type: "note",
        children: [(0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "환경변수 역할"
          })
        }), (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_IP"
              }), ": 현재 Pod가 호스팅된 노드(Node)의 IP 주소를 수집합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "NODE_NAME"
              }), ": 현재 Pod가 실행 중인 노드의 이름을 수집합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "POD_NAME"
              }), ": 현재 Pod의 이름을 수집합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "OKIND"
              }), "(선택사항): Pod에 해당하는 애플리케이션들을 그룹화합니다. 디플로이먼트(Deployment) 이름으로 설정하면 해당하는 Pod들을 하나로 그룹화합니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "license"
              }), ": 에이전트 인증 확인을 위한 키입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.server.host"
              }), ": 와탭 수집 서버 호스트 IP입니다."]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "whatap.micro.enabled"
              }), ": 컨테이너와의 연동을 활성화합니다."]
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